"""Chamada ao Claude Code em modo não interativo (`claude -p`), com saída estruturada.

Usa a conta do claude.ai em que o Claude Code está logado: não há cobrança
de API, mas cada chamada consome a cota do plano.
"""

import json
import shutil
import subprocess
import tempfile


class ErroClaude(Exception):
    """Falha na chamada: cota esgotada, erro do CLI, resposta sem JSON etc."""


def chamar(prompt, esquema, modelo, esforco=None, ferramentas=None, tempo_limite=1800):
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
    ]
    if ferramentas:
        cmd += ["--tools", ",".join(ferramentas), "--allowedTools", ",".join(ferramentas)]
    else:
        cmd += ["--tools", ""]
    if esforco:
        cmd += ["--effort", esforco]

    # Roda fora do repositório para não carregar configurações ou memória do projeto.
    try:
        proc = subprocess.run(
            cmd, input=prompt, capture_output=True, text=True, encoding="utf-8",
            cwd=tempfile.gettempdir(), timeout=tempo_limite,
        )
    except subprocess.TimeoutExpired as e:
        raise ErroClaude(f"Tempo limite de {tempo_limite}s excedido.") from e

    try:
        resposta = json.loads(proc.stdout)
    except json.JSONDecodeError as e:
        detalhe = (proc.stderr or proc.stdout or "").strip()[:1000]
        raise ErroClaude(f"Saída do claude não é JSON (código {proc.returncode}): {detalhe}") from e

    if resposta.get("is_error") or resposta.get("subtype") != "success":
        raise ErroClaude(f"Claude devolveu erro ({resposta.get('subtype')}): {str(resposta.get('result'))[:1000]}")

    saida = resposta.get("structured_output")
    if saida is None:
        raise ErroClaude("Resposta sem 'structured_output'.")
    return saida
