"""Converte em múltipla escolha as perguntas abertas cuja resposta é um ano ou uma data (MANIFESTO §6, v0.52).

Um filtro seleciona as perguntas abertas cuja resposta inteira é um ano ("1969", "800 a.C.") ou uma data ("2 de
fevereiro", "15 de novembro de 1889"). O Claude (Sonnet), em lotes, confirma que a resposta é mesmo o ano ou a data
de um acontecimento (e não uma quantidade, como "206" ossos) e escreve 3 distratores próximos e críveis, no mesmo
formato. O Python confere os distratores e aplica: a pergunta vira `multipla`, com o mesmo enunciado e a mesma resposta.
Século, década e respostas como "Londres 2012" ou "1970, no México" ficam abertas e nem entram no filtro.

Uso (na raiz do projeto, com o autopiloto parado):
    python pipeline/converter_datas.py --simular   # pede os distratores e mostra o que faria, sem gravar
    python pipeline/converter_datas.py             # aplica

As respostas do Claude ficam em trabalho/converter_datas/; rodar de novo retoma de onde parou.
"""

import argparse
import json
import random
import re
import sys
from collections import Counter

sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)

import banco as bc  # noqa: E402
import claude_cli  # noqa: E402
import rodar  # noqa: E402
from claude_cli import chamar  # noqa: E402
from comum import (ESQUEMAS_DIR, PROMPTS_DIR, TRABALHO_DIR, carregar_canon, gravar_json, ler_json, ler_texto,  # noqa: E402
                   preencher, registrar_log)

PASTA = TRABALHO_DIR / "converter_datas"
TAM_LOTE = 50
ROTULO = "converter_datas"

MESES = "janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro"
ERA = r"(\s*(a\.?\s?C\.?|d\.?\s?C\.?|antes de cristo|depois de cristo))?"
ANO = re.compile(rf"^(em |no ano de )?(c\.\s*|cerca de )?\d{{1,4}}{ERA}$", re.I)
# O dia vem em algarismos ("2 de fevereiro", "1º de maio") ou por extenso ("Catorze de março", "Vinte e oito de dezembro").
DIA = (r"(\d{1,2}º?|primeiro|dois|três|quatro|cinco|seis|sete|oito|nove|dez|onze|doze|treze|catorze|quatorze|quinze|"
       r"dezesseis|dezessete|dezoito|dezenove|vinte|vinte e \w+|trinta|trinta e um)")
DATA = re.compile(rf"^{DIA} de ({MESES})( de \d{{1,4}}{ERA})?$|^({MESES}) de \d{{1,4}}{ERA}$", re.I)
# Dois anos ("1989 e 1990") também são resposta de ano.
ANO = re.compile(ANO.pattern + r"|^\d{4} e \d{4}$", re.I)
QUANTIDADE = re.compile(r"\bquant[oa]s?\b|\bqual (é|era) (o|a) (número|altura|idade|distância|população|velocidade|temperatura)\b", re.I)


def candidatas(banco):
    """Perguntas abertas cuja resposta inteira é um ano ou uma data (sem as que pedem uma quantidade)."""
    saida = []
    for p in banco.perguntas:
        r = p["resposta"].strip().rstrip(".")
        if p["tipo"] != "aberta":
            continue
        if DATA.match(r) or (ANO.match(r) and not QUANTIDADE.search(p["pergunta"])):
            saida.append(p)
    return saida


POSICOES = ["a mais antiga", "a segunda mais antiga", "a segunda mais recente", "a mais recente"]


def valor_do_ano(texto):
    """O ano como número (negativo antes de Cristo), ou None se o texto não for um ano só."""
    t = texto.strip().rstrip(".")
    m = re.match(r"^(em |no ano de )?(c\.\s*|cerca de )?(\d{1,4})" + ERA + "$", t, re.I)
    if not m:
        return None
    antes = re.search(r"a\.?\s?C\.?|antes de cristo", t, re.I)
    return -int(m.group(3)) if antes else int(m.group(3))


def posicao_pedida(p):
    """Posição da resposta, em ordem cronológica, entre as quatro alternativas (0 = a mais antiga). Só nas respostas
    que são um ano. É sorteada pelo id, para as quatro posições saírem com a mesma frequência e de modo repetível."""
    if valor_do_ano(p["resposta"]) is None:
        return None
    return random.Random(p["id"]).randrange(4)


def pedir_lote(n, lote, banco):
    arq = PASTA / f"lote_{n:02d}_{lote[0]['id']}.json"  # com o 1º id, para outra seleção não sobrescrever
    feito = ler_json(arq)
    if feito is not None and [x["id"] for x in feito["perguntas"]] == [p["id"] for p in lote]:
        return {a["indice"]: a for a in feito["itens"]}
    itens = []
    for i, p in enumerate(lote, 1):
        e = {"indice": i, "tema": p["tema"], "subtema": p["subtema"], "pergunta": p["pergunta"], "resposta": p["resposta"],
             "ancora": banco.ancora_por_id[banco.resolver(p["ancora"])]["nome"]}
        if posicao_pedida(p) is not None:
            e["posicao_da_resposta"] = POSICOES[posicao_pedida(p)]
        itens.append(e)
    prompt = preencher(ler_texto(PROMPTS_DIR / "converter_datas.md"), lote=json.dumps(itens, ensure_ascii=False, indent=2))
    c = rodar.CONFIG["criticar"]
    claude_cli.contexto.update(encomenda=ROTULO, etapa="distratores")
    saida = chamar(prompt, ler_json(ESQUEMAS_DIR / "saida_converter_datas.json"), c["modelo"], c["esforco"],
                   tempo_limite=c["tempo_limite"])
    gravar_json(arq, {"perguntas": [{"id": p["id"]} for p in lote], "itens": saida["itens"]})
    return {a["indice"]: a for a in saida["itens"]}


EXTENSO = ["Primeiro", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez", "Onze", "Doze", "Treze",
           "Catorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove", "Vinte"] +           [f"Vinte e {u}" for u in ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"]] + ["Trinta", "Trinta e um"]


def no_formato_da_resposta(r, d):
    """Se a resposta traz o dia por extenso ("Seis de janeiro"), põe o dia do distrator também por extenso."""
    m = re.match(r"^(\d{1,2})º? de (.*)$", d.strip())
    if m and not r[:1].isdigit() and 1 <= int(m.group(1)) <= 31:
        return f"{EXTENSO[int(m.group(1)) - 1]} de {m.group(2)}"
    return d.strip()


def problemas_distratores(p, ds):
    """Conferência mecânica: 3 distratores diferentes da resposta, no formato dela e com no máximo 4 palavras
    (até 6 nas datas, como "28 de julho de 1914" ou "Vinte e oito de dezembro")."""
    erros = []
    if len(ds) != 3:
        erros.append(f"{len(ds)} distratores")
    r = p["resposta"].strip()
    if ANO.match(r) and not all(ANO.match(d.strip()) for d in ds):
        erros.append("distrator fora do formato de ano")
    if DATA.match(r) and not all(DATA.match(d.strip()) for d in ds):
        erros.append("distrator fora do formato de data")
    if any(d.strip()[:1].isdigit() != r[:1].isdigit() for d in ds):
        erros.append("distrator em algarismos e resposta por extenso, ou o contrário")
    k = posicao_pedida(p)
    anos = [valor_do_ano(d) for d in ds]
    if k is not None and None not in anos and sorted([valor_do_ano(r), *anos]).index(valor_do_ano(r)) != k:
        erros.append(f"resposta fora da posição pedida ({POSICOES[k]})")
    if any(len(d.split()) > (6 if DATA.match(r) else 4) for d in ds):
        erros.append("distrator com mais de 4 palavras")
    return erros


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--simular", action="store_true")
    args = ap.parse_args()
    if args.simular:  # a simulação não deixa rastro no log de decisões
        global registrar_log
        registrar_log = lambda *a, **k: None  # noqa: E731
    PASTA.mkdir(parents=True, exist_ok=True)
    banco, canon = bc.Banco(), carregar_canon()
    cand = candidatas(banco)
    print(f"{len(cand)} perguntas abertas com resposta que parece ano ou data.")

    contagem = Counter()
    por_id = {p["id"]: p for p in banco.perguntas}
    for k in range(0, len(cand), TAM_LOTE):
        lote = cand[k:k + TAM_LOTE]
        n = k // TAM_LOTE + 1
        print(f"  lote {n} ({len(lote)})…", flush=True)
        av = pedir_lote(n, lote, banco)
        for i, p in enumerate(lote, 1):
            a = av.get(i)
            if a is None:
                contagem["sem resposta do Claude"] += 1
                continue
            if not a["converter"]:
                contagem["mantida aberta"] += 1
                print(f"  MANTÉM {p['id']}: {p['pergunta']} → {p['resposta']}\n      {a['motivo']}")
                registrar_log(ROTULO, "distratores", "mantida", a["motivo"], {"id": p["id"]})
                continue
            novo = {**p, "tipo": "multipla",
                    "distratores": [no_formato_da_resposta(p["resposta"], d) for d in a.get("distratores") or []]}
            erros = bc.erros_pergunta(novo, canon) + problemas_distratores(p, novo["distratores"])
            if erros:
                contagem["distratores inválidos (mantida aberta)"] += 1
                print(f"  INVÁLIDA {p['id']}: {p['resposta']} × {novo['distratores']}: {'; '.join(erros)}")
                registrar_log(ROTULO, "distratores", "mantida", "distratores inválidos: " + "; ".join(erros), {"id": p["id"]})
                continue
            contagem["convertida"] += 1
            print(f"  CONVERTE {p['id']}: {p['resposta']} × {', '.join(novo['distratores'])}")
            registrar_log(ROTULO, "distratores", "convertida", "resposta é ano ou data: múltipla escolha (MANIFESTO §6)",
                          {"id": p["id"], "resposta": p["resposta"], "distratores": novo["distratores"]})
            if not args.simular:  # os distratores entram logo depois da resposta, como nas outras múltiplas
                q = por_id[p["id"]]
                itens = [(c, "multipla" if c == "tipo" else v) for c, v in q.items()]
                k = [c for c, _ in itens].index("resposta") + 1
                itens.insert(k, ("distratores", novo["distratores"]))
                q.clear()
                q.update(itens)

    print("\n" + ", ".join(f"{k}: {v}" for k, v in contagem.most_common()))
    if args.simular:
        print("Simulação: nada foi gravado.")
        return
    banco.salvar()
    print(f"Banco gravado: {len(banco.perguntas)} perguntas.")


if __name__ == "__main__":
    main()
