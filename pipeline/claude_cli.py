"""Chamada ao Claude Code em modo não interativo (`claude -p`), com saída estruturada.

Usa a conta do claude.ai em que o Claude Code está logado: não há cobrança
de API, mas cada chamada consome a cota do plano.
"""

import datetime as dt
import json
import os
import shutil
import subprocess
import tempfile

from comum import LOG_DIR

# Encomenda e etapa em andamento, preenchidas por rodar.py, para identificar cada chamada no registro de consumo.
contexto = {}

SISTEMA = ("Você é uma etapa automática do pipeline de perguntas do Mestre2. Siga as instruções da mensagem "
           "e responda apenas com a saída estruturada pedida.")


def _registrar_consumo(resposta, modelo, esforco):
    """Acrescenta a log/consumo.jsonl os tokens, a duração e o custo equivalente em API de uma chamada.
    No plano do claude.ai não há cobrança; o custo serve só para comparar o peso das chamadas."""
    entrada = {"quando": dt.datetime.now().isoformat(timespec="seconds"), **contexto,
               "modelo": modelo, "esforco": esforco,
               "duracao_s": round((resposta.get("duration_ms") or 0) / 1000),
               "turnos": resposta.get("num_turns"),
               "custo_api_usd": resposta.get("total_cost_usd"),
               "uso": resposta.get("usage")}
    LOG_DIR.mkdir(parents=True, exist_ok=True)
    with open(LOG_DIR / "consumo.jsonl", "a", encoding="utf-8") as f:
        f.write(json.dumps(entrada, ensure_ascii=False) + "\n")


class ErroClaude(Exception):
    """Falha na chamada: cota esgotada, erro do CLI, resposta sem JSON etc."""


def chamar(prompt, esquema, modelo, esforco=None, ferramentas=None, tempo_limite=1800, diretorios=()):
    """Envia `prompt` e devolve o objeto JSON que obedece a `esquema`.

    ferramentas: lista de ferramentas liberadas (ex.: ["WebSearch", "WebFetch"]).
    Sem ferramentas, o modelo só responde.
    """
    executavel = shutil.which("claude")
    if executavel is None:
        raise ErroClaude("Comando 'claude' não encontrado no PATH.")

    cmd = [
        executavel, "-p",
        "--output-format", "json",
        "--json-schema", json.dumps(esquema, ensure_ascii=False),
        "--model", modelo,
        "--no-session-persistence",
        # Prompt de sistema mínimo no lugar do padrão do Claude Code, sem configurações, MCP nem skills:
        # o custo fixo de cada chamada cai de ~6 mil para ~900 tokens.
        "--system-prompt", SISTEMA,
        "--setting-sources", "",
        "--strict-mcp-config",
        "--disable-slash-commands",
    ]
    if ferramentas:
        cmd += ["--tools", ",".join(ferramentas), "--allowedTools", ",".join(ferramentas)]
    else:
        cmd += ["--tools", ""]
    if esforco:
        cmd += ["--effort", esforco]
    # Pastas que o modelo pode ler com a ferramenta Read (por exemplo, as imagens da etapa de figuras).
    for d in diretorios:
        cmd += ["--add-dir", str(d)]

    # Roda fora do repositório para não carregar configurações ou memória do projeto.
    try:
        proc = subprocess.run(
            cmd, input=prompt, capture_output=True, text=True, encoding="utf-8",
            cwd=tempfile.gettempdir(), timeout=tempo_limite,
            # Lotes de 50 perguntas passam do limite de saída padrão (32 mil tokens, raciocínio incluído).
            env={**os.environ, "CLAUDE_CODE_MAX_OUTPUT_TOKENS": "64000"},
        )
    except subprocess.TimeoutExpired as e:
        raise ErroClaude(f"Tempo limite de {tempo_limite}s excedido.") from e

    try:
        resposta = json.loads(proc.stdout)
    except json.JSONDecodeError as e:
        detalhe = (proc.stderr or proc.stdout or "").strip()[:1000]
        raise ErroClaude(f"Saída do claude não é JSON (código {proc.returncode}): {detalhe}") from e

    _registrar_consumo(resposta, modelo, esforco)
    if resposta.get("is_error") or resposta.get("subtype") != "success":
        raise ErroClaude(f"Claude devolveu erro ({resposta.get('subtype')}): {str(resposta.get('result'))[:1000]}")

    saida = resposta.get("structured_output")
    if saida is None:
        raise ErroClaude("Resposta sem 'structured_output'.")
    return saida
