"""Passa de novo pela crítica as perguntas com figura que já estão no banco (MANIFESTO §13, revisão de 2026-10-01).

Até a v0.34, a etapa de figuras não tinha crítica: o mesmo LLM que abria a imagem escrevia e aprovava a pergunta.
Este comando aplica a crítica de figuras (prompts/criticar_figuras.md) e a checagem de repetidos às perguntas com
figura feitas pelo pipeline, em grupos por catálogo, e aplica as decisões no banco: aprovar mantém, reescrever troca
enunciado, resposta e distratores, descartar apaga a pergunta e a imagem (o id não volta a ser usado).

Uso (na raiz do projeto, com o autopiloto parado):
    python pipeline/recriticar_figuras.py            # critica e aplica
    python pipeline/recriticar_figuras.py --simular  # só critica e mostra o que faria

As respostas do Claude ficam em trabalho/recritica_figuras/; rodar de novo retoma de onde parou.
"""

import argparse
import json
import sys
from collections import Counter, defaultdict

sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)

import banco as bc  # noqa: E402
import claude_cli  # noqa: E402
import etapas  # noqa: E402
import fontes  # noqa: E402
import rodar  # noqa: E402
from claude_cli import chamar  # noqa: E402
from comum import (BANCO_DIR, ESQUEMAS_DIR, PROMPTS_DIR, TRABALHO_DIR, carregar_canon, gravar_json, ler_json,  # noqa: E402
                   ler_texto, manifesto_para_llm, preencher, registrar_log)

PASTA = TRABALHO_DIR / "recritica_figuras"
TAM_GRUPO = 25
ROTULO = "recritica_figuras"


def perguntas_do_pipeline(banco):
    """{catálogo: [(pergunta, nível)]} das perguntas com figura feitas pela etapa de figuras, cruzadas pela imagem."""
    origem = {}
    for pasta in TRABALHO_DIR.glob("fig_*"):
        sel = ler_json(pasta / "01_selecao.json", {"itens": []})["itens"]
        av = {a["indice"]: a for a in ler_json(pasta / "02_avaliacao.json", {"itens": []})["itens"]}
        cat = pasta.name[4:].rsplit("_", 1)[0]
        for it in sel:
            origem[it["origem"]] = (cat, av.get(it["indice"], {}).get("nivel"))
    grupos = defaultdict(list)
    for p in banco.perguntas:
        if "imagem" in p and p["imagem"]["origem"] in origem:
            cat, nivel = origem[p["imagem"]["origem"]]
            grupos[cat].append((p, nivel))
    return grupos


def criticar_grupo(nome, itens, banco):
    arq = PASTA / f"{nome}.json"
    feito = ler_json(arq)
    if feito is not None:
        return {a["indice"]: a for a in feito["avaliacoes"]}
    para_trechos, lote = [], []
    for i, (p, nivel) in enumerate(itens, 1):
        a = banco.ancora_por_id[banco.resolver(p["ancora"])]
        para_trechos.append({"_indice": i, "fonte": p["fonte"], "pergunta": p["pergunta"], "resposta": p["resposta"],
                             "_ancora": {"nome": a["nome"], "variantes": a.get("variantes", [])}})
        e = {"indice": i, "mostra": {"nome": a["nome"], "descricao": a["descricao"]}}
        if nivel:
            e["nivel"] = nivel
        e.update({"tipo": p["tipo"], "pergunta": p["pergunta"], "resposta": p["resposta"]})
        if p["tipo"] == "multipla":
            e["distratores"] = p["distratores"]
        lote.append(e)
    trechos = fontes.trechos_do_lote(para_trechos, PASTA / f"{nome}_fontes.json")
    for e in lote:
        e["trechos"] = trechos.get(str(e["indice"]), [])
    prompt = preencher(ler_texto(PROMPTS_DIR / "criticar_figuras.md"), catalogo=nome.rsplit("_", 1)[0],
                       lote=json.dumps(lote, ensure_ascii=False, indent=2), manifesto=manifesto_para_llm())
    c = rodar.CONFIG["criticar"]
    claude_cli.contexto.update(encomenda=ROTULO, etapa="criticar_figuras")
    saida = chamar(prompt, ler_json(ESQUEMAS_DIR / "saida_critica_figuras.json"), c["modelo"], c["esforco"],
                   tempo_limite=c["tempo_limite"])
    gravar_json(arq, saida)
    return {a["indice"]: a for a in saida["avaliacoes"]}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--simular", action="store_true")
    ap.add_argument("--manter", default="", help="ids separados por vírgula: perguntas mantidas como estão, "
                                                 "contra a decisão do crítico (depois de revisar a simulação)")
    args = ap.parse_args()
    manter = {x.strip() for x in args.manter.split(",") if x.strip()}
    if args.simular:  # a simulação não deixa rastro no log de decisões
        global registrar_log
        registrar_log = lambda *a, **k: None  # noqa: E731
    PASTA.mkdir(parents=True, exist_ok=True)
    banco, canon = bc.Banco(), carregar_canon()
    grupos = perguntas_do_pipeline(banco)
    print(f"{sum(len(v) for v in grupos.values())} perguntas com figura do pipeline, em {len(grupos)} catálogos.")

    # 1. crítica
    decisoes = {}   # id da pergunta -> avaliação
    for cat, itens in sorted(grupos.items()):
        for k in range(0, len(itens), TAM_GRUPO):
            parte = itens[k:k + TAM_GRUPO]
            nome = f"{cat}_{k // TAM_GRUPO + 1}"
            print(f"  crítica {nome} ({len(parte)})…", flush=True)
            av = criticar_grupo(nome, parte, banco)
            for i, (p, _) in enumerate(parte, 1):
                if i in av:
                    decisoes[p["id"]] = av[i]

    # 2. repetidos: cada figura comparada com as outras perguntas da sua âncora
    por_ancora = banco.perguntas_por_ancora()
    figuras = [p for itens in grupos.values() for p, _ in itens if decisoes.get(p["id"], {}).get("decisao") != "descartar"]
    casos, pergunta_do_caso = [], {}
    for p in figuras:
        outras = [q for q in por_ancora.get(banco.resolver(p["ancora"]), []) if q["id"] != p["id"]]
        if outras:
            n = len(casos) + 1
            pergunta_do_caso[n] = p
            casos.append({"caso": n, "nova": {"pergunta": p["pergunta"], "resposta": p["resposta"]},
                          "existentes": [{"id": q["id"], "pergunta": q["pergunta"], "resposta": q["resposta"]} for q in outras]})
    repetidas = {}
    if casos:
        arq = PASTA / "repetidos.json"
        feito = ler_json(arq)
        if feito is not None and feito.get("casos") == casos:
            saida = feito
        else:
            print(f"  repetidos ({len(casos)} casos)…", flush=True)
            c = rodar.CONFIG["repetidos"]
            claude_cli.contexto.update(encomenda=ROTULO, etapa="repetidos")
            prompt = preencher(ler_texto(PROMPTS_DIR / "repetidos.md"), casos=json.dumps(casos, ensure_ascii=False, indent=2))
            saida = chamar(prompt, ler_json(ESQUEMAS_DIR / "saida_repetidos.json"), c["modelo"], c["esforco"],
                           tempo_limite=c["tempo_limite"])
            saida = {"casos": casos, "decisoes": saida["decisoes"]}
            gravar_json(arq, saida)
        for d in saida["decisoes"]:
            p = pergunta_do_caso.get(d["caso"])
            # Das duas perguntas repetidas, sai a com figura só se a outra também não estiver saindo.
            if p is not None and d["decisao"] == "repete" and d.get("id_existente") != p["id"]:
                repetidas[p["id"]] = d

    # 3. aplicação
    contagem = Counter()
    vistos = set()
    por_id = {p["id"]: p for p in banco.perguntas}
    apagar = set()
    for itens in grupos.values():
        for p, _ in itens:
            if p["id"] in vistos:  # a mesma imagem pode estar em dois lotes de seleção
                continue
            vistos.add(p["id"])
            d = decisoes.get(p["id"])
            if p["id"] in repetidas and repetidas[p["id"]].get("id_existente") not in apagar:
                r = repetidas[p["id"]]
                contagem["repetida"] += 1
                apagar.add(p["id"])
                print(f"  REPETE {p['id']} ({r.get('id_existente')}): {p['pergunta']} → {p['resposta']}")
                registrar_log(ROTULO, "repetidos", "apagada", f"repete {r.get('id_existente')}: {r['motivo']}",
                              {"id": p["id"], "pergunta": p["pergunta"]})
                continue
            if d is None:
                contagem["sem avaliação"] += 1
                continue
            if p["id"] in manter:
                contagem["mantida por revisão humana"] += 1
                registrar_log(ROTULO, "criticar", "mantida", f"revisão humana, contra o crítico: {d['motivo']}", {"id": p["id"]})
                continue
            if d["decisao"] == "aprovar":
                contagem["aprovada"] += 1
            elif d["decisao"] == "descartar":
                contagem["descartada"] += 1
                apagar.add(p["id"])
                print(f"  DESCARTA {p['id']}: {p['pergunta']} → {p['resposta']}\n      {d['motivo']}")
                registrar_log(ROTULO, "criticar", "apagada", d["motivo"], {"id": p["id"], "pergunta": p["pergunta"]})
            else:
                r = d.get("reescrita") or {}
                novo = {**p, "pergunta": r.get("pergunta", ""), "resposta": r.get("resposta", "")}
                if p["tipo"] == "multipla" and len(r.get("distratores") or []) == 3:
                    novo["distratores"] = r["distratores"]
                erros = bc.erros_pergunta(novo, canon) if r else ["reescrita não fornecida"]
                if erros:
                    contagem["reescrita inválida (mantida)"] += 1
                    registrar_log(ROTULO, "criticar", "mantida", "reescrita inválida: " + "; ".join(erros), {"id": p["id"]})
                    continue
                contagem["reescrita"] += 1
                print(f"  REESCREVE {p['id']}: {p['pergunta']} → {p['resposta']}\n      ⇒ {novo['pergunta']} → {novo['resposta']}"
                      f"\n      {d['motivo']}")
                registrar_log(ROTULO, "criticar", "reescrita", d["motivo"],
                              {"id": p["id"], "antes": {"pergunta": p["pergunta"], "resposta": p["resposta"]},
                               "depois": {"pergunta": novo["pergunta"], "resposta": novo["resposta"]}})
                if not args.simular:
                    por_id[p["id"]].update(pergunta=novo["pergunta"], resposta=novo["resposta"])
                    if "distratores" in novo:
                        por_id[p["id"]]["distratores"] = novo["distratores"]

    print("\n" + ", ".join(f"{k}: {v}" for k, v in contagem.most_common()))
    if args.simular:
        print("Simulação: nada foi gravado.")
        return
    for q in apagar:
        p = por_id[q]
        banco.perguntas.remove(p)
        (BANCO_DIR / "imagens" / p["imagem"]["arquivo"]).unlink(missing_ok=True)
    banco.salvar()
    print(f"Banco gravado: {len(banco.perguntas)} perguntas.")


if __name__ == "__main__":
    main()
