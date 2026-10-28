"""Revisão humana por amostragem (MANIFESTO §16, "Revisão"): todo dia, uma fila curta de perguntas para o autor avaliar.

Sorteia CANDIDATAS perguntas publicadas do jogo original que ainda não passaram pela triagem, baixa os trechos das
fontes (fontes.py) e pede ao Sonnet, sem web, uma nota de suspeita para cada uma (prompts/triar_revisao.md). A fila do
dia junta até SUSPEITAS das mais suspeitas a CONTROLE perguntas sorteadas sem filtro entre as candidatas: o controle
estima a taxa de problemas do banco e mostra quanto a triagem deixa passar. Perguntas da fila ainda não avaliadas
continuam nela; com MAX_PENDENTES ou mais, não há triagem nova, para não gastar cota com uma fila que ninguém lê.

A fila vai para app/public/revisao.json e é avaliada em revisao.html, com os campos do painel "Avaliar a pergunta"
do app, na coleção "avaliacoes" (partida "REVISAO", documento rev-<id da pergunta>). O histórico (todas as notas da
triagem e as perguntas que entraram na fila) fica em pipeline/banco/revisao.json.

Uso (na raiz do projeto):
    python pipeline/revisao.py              # monta a fila do dia
    python pipeline/revisao.py --publicar   # monta e publica no Firebase (deploy do hosting)
    python pipeline/revisao.py --relatorio  # baixa as avaliações e mostra o resultado da revisão
"""
import argparse
import datetime as dt
import json
import math
import os
import random
import subprocess
import sys

import claude_cli
import fontes
from avaliacoes import PROBLEMAS, baixar
from banco import Banco
from claude_cli import ErroClaude, chamar
from comum import (
    BANCO_DIR, ESQUEMAS_DIR, PROMPTS_DIR, RAIZ, TRABALHO_DIR, gravar_json, ler_json, ler_texto,
    manifesto_para_llm, preencher,
)

CANDIDATAS = 100     # perguntas triadas por dia
POR_CHAMADA = 50     # perguntas por chamada à triagem (o crítico também lê lotes de 50 com trechos)
SUSPEITAS = 10       # as de nota mais alta que entram na fila
NOTA_MINIMA = 2      # nota a partir da qual a pergunta conta como suspeita no relatório
NOTA_COMPLETAR = 1   # se faltarem suspeitas, a fila se completa com as de nota 1 (na 1ª triagem, só 4 de 100 tiveram 2)
CONTROLE = 5         # sorteadas sem filtro entre as candidatas
MAX_PENDENTES = 45   # fila acumulada (três dias) a partir da qual não há triagem nova
PARTIDA = "REVISAO"  # o campo "partida" das avaliações feitas em revisao.html
MODELO, ESFORCO = "sonnet", "medium"

ARQ_HISTORICO = BANCO_DIR / "revisao.json"
ARQ_FILA = RAIZ / "app" / "public" / "revisao.json"
ARQ_PUBLICADAS = RAIZ / "app" / "public" / "perguntas.json"


def avaliacoes_da_revisao():
    """{id da pergunta: avaliação} das avaliações feitas em revisao.html."""
    return {a["pergunta"]: a for a in baixar() if a.get("partida") == PARTIDA}


def triar(candidatas, banco, pasta):
    """{id: {nota, problema, motivo}} para cada candidata, em chamadas de POR_CHAMADA perguntas."""
    itens = []
    for i, p in enumerate(candidatas, 1):
        a = banco.ancora_por_id.get(banco.resolver(p["ancora"])) or {"nome": p["ancora"], "descricao": ""}
        itens.append({**p, "_indice": i, "_ancora": a})
    print(f"Baixando os trechos das fontes de {len(itens)} perguntas…")
    trechos = fontes.trechos_do_lote(itens, pasta / "fontes.json")
    modelo_prompt, manifesto = ler_texto(PROMPTS_DIR / "triar_revisao.md"), manifesto_para_llm()
    esquema = ler_json(ESQUEMAS_DIR / "saida_triagem.json")
    notas = {}
    for inicio in range(0, len(itens), POR_CHAMADA):
        lote = []
        for it in itens[inicio:inicio + POR_CHAMADA]:
            entrada = {"indice": it["_indice"], "tema": it["tema"], "subtema": it["subtema"],
                       "ancora": {"nome": it["_ancora"]["nome"], "descricao": it["_ancora"].get("descricao", "")}}
            entrada.update({c: it[c] for c in ("angulo", "tipo", "pergunta", "resposta", "distratores", "fonte") if c in it})
            if it.get("imagem"):
                entrada["figura"] = it["imagem"].get("origem", "")
            entrada["trechos"] = trechos.get(str(it["_indice"]), [])
            lote.append(entrada)
        prompt = preencher(modelo_prompt, lote=json.dumps(lote, ensure_ascii=False, indent=2), manifesto=manifesto)
        print(f"Triagem das perguntas {inicio + 1} a {inicio + len(lote)}…")
        saida = chamar(prompt, esquema, MODELO, ESFORCO, tempo_limite=1800)
        por_indice = {a["indice"]: a for a in saida["avaliacoes"]}
        for it in itens[inicio:inicio + POR_CHAMADA]:
            a = por_indice.get(it["_indice"])
            if a:
                notas[it["id"]] = {"nota": a["nota"], "problema": a["problema"], "motivo": a["motivo"]}
    return notas


def montar_fila(forcar=False):
    hoje = dt.date.today().isoformat()
    historico = ler_json(ARQ_HISTORICO, {"triadas": {}, "fila": []})
    banco = Banco()
    perguntas = {p["id"]: p for p in banco.perguntas}
    avaliadas = avaliacoes_da_revisao()
    pendentes = [f for f in historico["fila"] if f["id"] not in avaliadas and f["id"] in perguntas]

    if any(f["data"] == hoje for f in historico["fila"]) and not forcar:
        print(f"A fila de hoje já foi montada ({len(pendentes)} pendentes). Para triar de novo: --forcar.")
    elif len(pendentes) >= MAX_PENDENTES:
        print(f"{len(pendentes)} perguntas pendentes na fila: sem triagem nova hoje.")
    else:
        # Só as publicadas (o app tem a figura) do jogo original; as exclusivas das coleções seguem as regras do modo.
        publicadas = {p["id"] for p in ler_json(ARQ_PUBLICADAS, [])}
        ja_vistas = set(historico["triadas"]) | {f["id"] for f in historico["fila"]}
        universo = [p for p in banco.perguntas if p["id"] in publicadas and p["id"] not in ja_vistas
                    and not p.get("exclusiva") and not p.get("audio")]
        candidatas = random.sample(universo, min(CANDIDATAS, len(universo)))
        if not candidatas:
            print("Todas as perguntas publicadas já passaram pela triagem.")
        else:
            claude_cli.contexto.update(encomenda="revisao", etapa="triagem")
            notas = triar(candidatas, banco, TRABALHO_DIR / "revisao" / hoje)
            controle = random.sample(candidatas, min(CONTROLE, len(candidatas)))
            ids_controle = {p["id"] for p in controle}
            suspeitas = sorted((p for p in candidatas if p["id"] not in ids_controle
                                and notas.get(p["id"], {}).get("nota", 0) >= NOTA_COMPLETAR),
                               key=lambda p: -notas[p["id"]]["nota"])[:SUSPEITAS]
            novas = ([{"id": p["id"], "data": hoje, "origem": "suspeita", **notas[p["id"]]} for p in suspeitas]
                     + [{"id": p["id"], "data": hoje, "origem": "controle", **notas.get(p["id"], {})} for p in controle])
            # A ordem não mostra quais são suspeitas e quais são controle: a revisão é às cegas.
            random.shuffle(novas)
            for p in candidatas:
                if p["id"] in notas:
                    historico["triadas"][p["id"]] = {"data": hoje, **notas[p["id"]]}
            historico["fila"].extend(novas)
            gravar_json(ARQ_HISTORICO, historico)
            pendentes.extend(novas)
            altas = sum(1 for n in notas.values() if n["nota"] >= NOTA_MINIMA)
            print(f"{len(notas)} de {len(candidatas)} perguntas triadas; {altas} com nota {NOTA_MINIMA} ou mais. "
                  f"Entraram na fila {len(suspeitas)} suspeitas e {len(controle)} de controle.")

    campos = ("id", "tema", "subtema", "tipo", "pergunta", "resposta", "distratores", "imagem", "fonte", "dificuldade")
    fila = []
    for f in pendentes:
        p = perguntas[f["id"]]
        a = banco.ancora_por_id.get(banco.resolver(p["ancora"]))
        fila.append({**{c: p[c] for c in campos if c in p},
                     **({"ancora": {"nome": a["nome"], "descricao": a.get("descricao", "")}} if a else {}),
                     "revisao": {k: f.get(k) for k in ("data", "origem", "nota", "problema", "motivo")}})
    gravar_json(ARQ_FILA, {"gerada": dt.datetime.now().isoformat(timespec="seconds"), "partida": PARTIDA,
                           "perguntas": fila})
    print(f"Fila com {len(fila)} perguntas gravada em app/public/revisao.json.")


def publicar():
    npx = "npx.cmd" if os.name == "nt" else "npx"
    r = subprocess.run([npx, "-y", "firebase-tools@latest", "deploy", "--only", "hosting", "--project", "mestre2-626dd"],
                       cwd=RAIZ / "app", capture_output=True, text=True, encoding="utf-8")
    print("Publicada: https://mestre2-626dd.web.app/revisao.html" if r.returncode == 0
          else f"O deploy falhou:\n{(r.stderr or r.stdout)[-1500:]}")
    return r.returncode == 0


def intervalo(k, n, z=1.96):
    """Intervalo de Wilson (95%) para a proporção k/n."""
    if n == 0:
        return 0.0, 0.0
    p = k / n
    centro = (p + z * z / (2 * n)) / (1 + z * z / n)
    margem = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / (1 + z * z / n)
    return max(0.0, centro - margem), min(1.0, centro + margem)


def relatorio():
    historico = ler_json(ARQ_HISTORICO, {"triadas": {}, "fila": []})
    avaliadas = avaliacoes_da_revisao()
    perguntas = {p["id"]: p for p in ler_json(BANCO_DIR / "perguntas.json", [])}
    feitas = [(f, avaliadas[f["id"]]) for f in historico["fila"] if f["id"] in avaliadas]
    print(f"Fila: {len(historico['fila'])} perguntas desde o início, {len(feitas)} avaliadas, "
          f"{len(historico['fila']) - len(feitas)} pendentes. Triadas: {len(historico['triadas'])}.")
    if not feitas:
        return

    def com_problema(a):
        return bool(a.get("problemas"))

    controle = [(f, a) for f, a in feitas if f["origem"] == "controle"]
    suspeitas = [(f, a) for f, a in feitas if f["origem"] == "suspeita"]
    k = sum(com_problema(a) for _, a in controle)
    if controle:
        lo, hi = intervalo(k, len(controle))
        print(f"\nControle (sorteadas sem filtro): {k} de {len(controle)} com problema, {k / len(controle):.0%} "
              f"(intervalo de 95%: {lo:.0%} a {hi:.0%}). É a estimativa da taxa de problemas do banco.")
        perdidas = sum(1 for f, a in controle if com_problema(a) and (f.get("nota") or 0) < NOTA_MINIMA)
        if k:
            print(f"  Destas, {perdidas} tinham nota de suspeita abaixo de {NOTA_MINIMA}: a triagem as deixaria passar.")
    if suspeitas:
        k = sum(com_problema(a) for _, a in suspeitas)
        print(f"\nSuspeitas: {k} de {len(suspeitas)} confirmadas, {k / len(suspeitas):.0%} (acerto da triagem).")
        por_codigo = {}
        for f, a in suspeitas:
            n, c = por_codigo.get(f["problema"], (0, 0))
            por_codigo[f["problema"]] = (n + 1, c + (f["problema"] in (a.get("problemas") or [])))
        for codigo, (n, c) in sorted(por_codigo.items(), key=lambda x: -x[1][0]):
            print(f"  {PROBLEMAS.get(codigo, codigo)}: apontada {n}, você marcou o mesmo problema em {c}")

    print(f"\nÓtimas: {sum(1 for _, a in feitas if a.get('otima'))}.")
    problemas = [(f, a) for f, a in feitas if com_problema(a)]
    print(f"\nCom problema, para corrigir ({len(problemas)}):")
    for f, a in sorted(problemas, key=lambda x: x[0]["id"]):
        p = perguntas.get(f["id"], {})
        print(f"  {f['id']} [{p.get('tema', '?')} › {p.get('subtema', '?')}] {p.get('pergunta', '(fora do banco)')} "
              f"→ {p.get('resposta', '')}")
        print(f"      {', '.join(PROBLEMAS.get(c, c) for c in a['problemas'])}"
              + (f' · "{a["comentario"]}"' if a.get("comentario") else "")
              + f" · {f['origem']}" + (f" (triagem: {f.get('motivo')})" if f.get("motivo") else ""))


def main():
    ap = argparse.ArgumentParser(description="Revisão humana por amostragem.")
    ap.add_argument("--publicar", action="store_true", help="publica a fila no Firebase (deploy do hosting)")
    ap.add_argument("--relatorio", action="store_true", help="mostra o resultado das avaliações da revisão")
    ap.add_argument("--forcar", action="store_true", help="faz a triagem mesmo se a fila de hoje já foi montada")
    args = ap.parse_args()
    if args.relatorio:
        relatorio()
        return
    print(f"— Revisão, {dt.datetime.now():%Y-%m-%d %H:%M}")
    try:
        montar_fila(args.forcar)
    except ErroClaude as e:
        # Sem triagem, a fila anterior continua publicada como estava; amanhã tenta de novo.
        print(f"A triagem falhou: {e}")
        sys.exit(1)
    if args.publicar:
        publicar()


if __name__ == "__main__":
    main()
