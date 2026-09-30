"""As cinco etapas de uma encomenda. Cada etapa grava seu resultado em
trabalho/<encomenda>/ e, se esse arquivo já existe, é pulada: assim o pipeline
retoma de onde parou (por exemplo, depois de esgotar a cota do plano)."""

import json

import banco as bc
from claude_cli import chamar
from comum import (
    ESQUEMAS_DIR, PROMPTS_DIR, gravar_json, gravar_texto, ler_json, ler_texto,
    manifesto_para_llm, normalizar, preencher, registrar_log,
)

ARQUIVOS = {
    "gerar": "01_geracao.json",
    "validar": "02_validado.json",
    "criticar": "03_criticado.json",
    "ancoras": "04_ancoras.json",
}
CAMPOS = ["tema", "subtema", "angulo", "tipo", "pergunta", "resposta", "distratores", "fonte"]
MAX_PERGUNTAS_NO_PROMPT = 400


def forma_final(item, id_pergunta="q00000", ancora="a"):
    """Converte um item de trabalho numa pergunta no formato do esquema."""
    final = {"id": id_pergunta, "tema": item["tema"], "subtema": item["subtema"], "ancora": ancora}
    for campo in CAMPOS[2:]:
        if campo in item:
            final[campo] = item[campo]
    return final


def _resumo(item):
    return {"indice": item.get("_indice"), "pergunta": item.get("pergunta"), "resposta": item.get("resposta")}


# ---------------------------------------------------------------- 1. geração

def montar_prompt_geracao(enc, banco):
    existentes = banco.perguntas_do_subtema(enc["tema"], enc["subtema"])

    linhas_ancoras = []
    for id_ancora, angulos in sorted(banco.angulos_por_ancora(existentes).items()):
        a = banco.ancora_por_id.get(id_ancora)
        if a:
            linhas_ancoras.append(f"- `{a['id']}` | {a['nome']} | {a['descricao']} | ângulos: {', '.join(sorted(angulos))}")

    linhas_perguntas = [f"- {p['pergunta']} → {p['resposta']}" for p in existentes[-MAX_PERGUNTAS_NO_PROMPT:]]

    quantidade = enc["quantidade"]
    return preencher(
        ler_texto(PROMPTS_DIR / "gerar.md"),
        tema=enc["tema"],
        subtema=enc["subtema"],
        quantidade=quantidade,
        multipla=enc.get("multipla", round(quantidade * 0.2)),
        angulos_alvo=", ".join(enc.get("angulos_alvo", [])) or "nenhum em especial; siga as regras de variedade",
        observacoes=enc.get("observacoes") or "nenhuma",
        ancoras_existentes="\n".join(linhas_ancoras) or "(nenhuma)",
        perguntas_existentes="\n".join(linhas_perguntas) or "(nenhuma)",
        manifesto=manifesto_para_llm(),
    )


def gerar(enc, banco, pasta, config):
    prompt = montar_prompt_geracao(enc, banco)
    gravar_texto(pasta / "01_prompt.md", prompt)
    c = config["gerar"]
    saida = chamar(prompt, ler_json(ESQUEMAS_DIR / "saida_geracao.json"), c["modelo"], c["esforco"],
                   tempo_limite=c["tempo_limite"])
    gravar_json(pasta / ARQUIVOS["gerar"], saida)
    registrar_log(enc["id"], "gerar", "concluida", f"{len(saida['perguntas'])} perguntas geradas")


# ---------------------------------------------------------------- 2. validação

def validar(enc, banco, canon, pasta):
    geradas = ler_json(pasta / ARQUIVOS["gerar"])["perguntas"]
    existentes = [p["pergunta"] for p in banco.perguntas_do_subtema(enc["tema"], enc["subtema"])]
    itens = []

    for i, g in enumerate(geradas, 1):
        item = {"_indice": i, "_ancora": g["ancora"], "tema": enc["tema"], "subtema": enc["subtema"]}
        for campo in ["angulo", "tipo", "pergunta", "resposta", "fonte"]:
            item[campo] = g[campo]
        if g["tipo"] == "multipla" and "distratores" in g:
            item["distratores"] = g["distratores"]

        erros = bc.erros_pergunta(forma_final(item), canon)
        if erros:
            registrar_log(enc["id"], "validar", "descartada", "; ".join(erros), _resumo(item))
            continue

        igual = bc.duplicata(item["pergunta"], existentes + [x["pergunta"] for x in itens])
        if igual:
            registrar_log(enc["id"], "validar", "descartada", f"duplicata de: {igual}", _resumo(item))
            continue

        id_existente = item["_ancora"].get("id_existente")
        if id_existente and banco.resolver(id_existente) is None:
            del item["_ancora"]["id_existente"]
            registrar_log(enc["id"], "validar", "ajustada", f"id_existente inexistente ignorado: {id_existente}", _resumo(item))

        itens.append(item)

    gravar_json(pasta / ARQUIVOS["validar"], {"itens": itens})
    registrar_log(enc["id"], "validar", "concluida", f"{len(itens)} de {len(geradas)} perguntas passaram")


# ---------------------------------------------------------------- 3. crítica

def criticar(enc, canon, pasta, config):
    itens = ler_json(pasta / ARQUIVOS["validar"])["itens"]
    if not itens:
        gravar_json(pasta / ARQUIVOS["criticar"], {"itens": []})
        return

    lote = []
    for it in itens:
        entrada = {"indice": it["_indice"],
                   "ancora": {"nome": it["_ancora"]["nome"], "descricao": it["_ancora"]["descricao"]}}
        entrada.update({c: it[c] for c in CAMPOS[2:] if c in it})
        lote.append(entrada)

    prompt = preencher(
        ler_texto(PROMPTS_DIR / "criticar.md"),
        tema=enc["tema"], subtema=enc["subtema"],
        lote=json.dumps(lote, ensure_ascii=False, indent=2),
        manifesto=manifesto_para_llm(),
    )
    gravar_texto(pasta / "03_prompt.md", prompt)
    c = config["criticar"]
    saida = chamar(prompt, ler_json(ESQUEMAS_DIR / "saida_critica.json"), c["modelo"], c["esforco"],
                   ferramentas=["WebSearch", "WebFetch"], tempo_limite=c["tempo_limite"])
    gravar_json(pasta / "03_critica_bruta.json", saida)

    avaliacoes = {a["indice"]: a for a in saida["avaliacoes"]}
    resultado = []
    for it in itens:
        a = avaliacoes.get(it["_indice"])
        if a is None:
            registrar_log(enc["id"], "criticar", "descartada", "o crítico não avaliou esta pergunta", _resumo(it))
            continue
        if a["decisao"] == "descartar":
            registrar_log(enc["id"], "criticar", "descartada", a["motivo"], _resumo(it))
            continue
        if a["decisao"] == "reescrever":
            r = a.get("reescrita")
            if not r:
                registrar_log(enc["id"], "criticar", "descartada", "reescrita pedida mas não fornecida", _resumo(it))
                continue
            novo = {k: v for k, v in it.items() if k != "distratores"}
            for campo in ["angulo", "tipo", "pergunta", "resposta", "fonte"]:
                novo[campo] = r[campo]
            if r["tipo"] == "multipla" and "distratores" in r:
                novo["distratores"] = r["distratores"]
            erros = bc.erros_pergunta(forma_final(novo), canon)
            if erros:
                registrar_log(enc["id"], "criticar", "descartada", "reescrita inválida: " + "; ".join(erros), _resumo(novo))
                continue
            registrar_log(enc["id"], "criticar", "reescrita", a["motivo"],
                          {"antes": _resumo(it), "depois": _resumo(novo)})
            resultado.append(novo)
            continue
        registrar_log(enc["id"], "criticar", "aprovada", a["motivo"], _resumo(it))
        resultado.append(it)

    gravar_json(pasta / ARQUIVOS["criticar"], {"itens": resultado})
    registrar_log(enc["id"], "criticar", "concluida", f"{len(resultado)} de {len(itens)} perguntas seguiram")


# ---------------------------------------------------------------- 4. âncoras

def julgar(casos, config):
    """Chama o juiz de âncoras. `casos`: [{"caso", "proposta", "candidatas"}]."""
    if not casos:
        return {}
    prompt = preencher(ler_texto(PROMPTS_DIR / "julgar_ancora.md"),
                       casos=json.dumps(casos, ensure_ascii=False, indent=2))
    c = config["julgar"]
    saida = chamar(prompt, ler_json(ESQUEMAS_DIR / "saida_julgamento.json"), c["modelo"], c["esforco"],
                   tempo_limite=c["tempo_limite"])
    return {d["caso"]: d for d in saida["decisoes"]}


def _ficha(a):
    return {"id": a["id"], "nome": a["nome"], "descricao": a["descricao"], "variantes": a.get("variantes", [])}


def resolver_ancoras(enc, banco, pasta, config):
    itens = ler_json(pasta / ARQUIVOS["criticar"])["itens"]
    indice = banco.indice_nomes()
    novas = {}          # nome normalizado -> proposta de âncora nova
    indice_lote = {}    # nome ou variante normalizada -> chave em `novas`
    variantes = {}      # id existente -> nomes a acrescentar como variantes

    # 4a. id informado pelo gerador, ou nome/variante idêntico a uma âncora cadastrada
    for it in itens:
        p = it["_ancora"]
        nomes = [p["nome"], *p.get("variantes", [])]
        id_existente = banco.resolver(p["id_existente"]) if p.get("id_existente") else None
        if id_existente is None:
            id_existente = next((indice[normalizar(n)] for n in nomes if normalizar(n) in indice), None)
        if id_existente:
            it["ancora"] = id_existente
            variantes.setdefault(id_existente, []).extend(nomes)
            continue
        # Outra pergunta do mesmo lote já propôs esta âncora (por nome ou variante)?
        chave = next((indice_lote[normalizar(n)] for n in nomes if normalizar(n) in indice_lote), None)
        if chave:
            extras = [n for n in nomes if normalizar(n) != chave]
            novas[chave]["variantes"] = list(dict.fromkeys(novas[chave]["variantes"] + extras))
            novas[chave]["fontes"] = list(dict.fromkeys(novas[chave]["fontes"] + p.get("fontes", [])))
        else:
            chave = normalizar(p["nome"])
            novas[chave] = {"nome": p["nome"], "descricao": p["descricao"],
                            "variantes": list(p.get("variantes", [])), "fontes": list(p.get("fontes", []))}
        for n in nomes:
            indice_lote.setdefault(normalizar(n), chave)
        it["_nova"] = chave

    # 4b. juiz para propostas parecidas com âncoras cadastradas
    casos, chave_do_caso = [], {}
    for chave, p in novas.items():
        cands = bc.candidatas([p["nome"], *p["variantes"]], banco.ancoras_ativas())
        if cands:
            n = len(casos) + 1
            chave_do_caso[n] = chave
            casos.append({"caso": n,
                          "proposta": {"nome": p["nome"], "descricao": p["descricao"], "variantes": p["variantes"]},
                          "candidatas": [_ficha(a) for a in cands]})
    decisoes = julgar(casos, config)
    gravar_json(pasta / "04_julgamento.json", {"casos": casos, "decisoes": list(decisoes.values())})

    resolvidas = {}
    for n, chave in chave_do_caso.items():
        d = decisoes.get(n)
        ids_validos = {c["id"] for c in casos[n - 1]["candidatas"]}
        if d and d["decisao"] == "mesma" and d.get("id_existente") in ids_validos:
            resolvidas[chave] = d["id_existente"]
            registrar_log(enc["id"], "ancoras", "mesma", d["motivo"],
                          {"proposta": novas[chave]["nome"], "id": d["id_existente"]})
        else:
            motivo = d["motivo"] if d else "juiz não decidiu; na dúvida, nova"
            registrar_log(enc["id"], "ancoras", "nova", motivo, {"proposta": novas[chave]["nome"]})

    # 4c. cria as âncoras novas (fontes precisam responder)
    criadas, reservados, rejeitadas = {}, set(), set()
    for chave, p in novas.items():
        if chave in resolvidas:
            continue
        if not bc.alguma_url_responde(p["fontes"]):
            rejeitadas.add(chave)
            registrar_log(enc["id"], "ancoras", "rejeitada", "nenhuma fonte da âncora responde",
                          {"proposta": p["nome"], "fontes": p["fontes"]})
            continue
        ancora = {"id": banco.novo_id_ancora(p["nome"], reservados), "nome": p["nome"], "descricao": p["descricao"]}
        extras = [v for v in dict.fromkeys(p["variantes"]) if normalizar(v) != chave]
        if extras:
            ancora["variantes"] = extras
        ancora["fontes"] = p["fontes"]
        erros = bc.erros_ancora(ancora)
        if erros:
            rejeitadas.add(chave)
            registrar_log(enc["id"], "ancoras", "rejeitada", "; ".join(erros), {"proposta": p["nome"]})
            continue
        reservados.add(ancora["id"])
        criadas[chave] = ancora

    # 4d. liga cada pergunta à sua âncora e aplica os limites (MANIFESTO §4 e §9)
    finais = []
    angulos_banco = banco.angulos_por_ancora()
    no_lote = {}
    for it in itens:
        chave = it.pop("_nova", None)
        if chave is not None:
            if chave in rejeitadas:
                registrar_log(enc["id"], "ancoras", "descartada", "âncora rejeitada", _resumo(it))
                continue
            if chave in resolvidas:
                it["ancora"] = resolvidas[chave]
                variantes.setdefault(it["ancora"], []).extend([novas[chave]["nome"], *novas[chave]["variantes"]])
            else:
                it["ancora"] = criadas[chave]["id"]

        if not bc.alguma_url_responde(it["fonte"]):
            registrar_log(enc["id"], "ancoras", "descartada", "nenhuma fonte da pergunta responde", _resumo(it))
            continue

        angulos_lote = no_lote.setdefault(it["ancora"], [])
        if len(angulos_lote) >= 2 or it["angulo"] in angulos_lote:
            registrar_log(enc["id"], "ancoras", "descartada",
                          "limite por âncora no lote (máx. 2, sem repetir ângulo)", _resumo(it))
            continue
        if angulos_banco[it["ancora"]][it["angulo"]] >= 2:
            registrar_log(enc["id"], "ancoras", "descartada",
                          f"âncora {it['ancora']} já tem 2 perguntas com o ângulo {it['angulo']}", _resumo(it))
            continue
        angulos_lote.append(it["angulo"])
        finais.append(it)

    gravar_json(pasta / ARQUIVOS["ancoras"], {
        "itens": finais,
        "ancoras_novas": list(criadas.values()),
        "variantes": {k: list(dict.fromkeys(v)) for k, v in variantes.items()},
    })
    registrar_log(enc["id"], "ancoras", "concluida",
                  f"{len(finais)} perguntas, {len(criadas)} âncoras novas, {len(resolvidas)} fundidas pelo juiz")


# ---------------------------------------------------------------- 5. registro

def registrar(enc, banco, canon, pasta):
    dados = ler_json(pasta / ARQUIVOS["ancoras"])

    # Outra encomenda pode ter criado uma âncora com o mesmo id desde a etapa 4.
    renomear = {}
    for a in dados["ancoras_novas"]:
        existente = banco.ancora_por_id.get(a["id"])
        if existente is None:
            banco.adicionar_ancora(a)
        elif normalizar(existente["nome"]) == normalizar(a["nome"]):
            renomear[a["id"]] = banco.resolver(a["id"])
        else:
            novo_id = banco.novo_id_ancora(a["nome"])
            renomear[a["id"]] = novo_id
            banco.adicionar_ancora({**a, "id": novo_id})

    for id_ancora, nomes in dados["variantes"].items():
        id_ativo = banco.resolver(id_ancora)
        if id_ativo:
            banco.acrescentar_variantes(id_ativo, nomes)

    numero = banco.proximo_numero()
    registradas = []
    for it in dados["itens"]:
        ancora = renomear.get(it["ancora"], it["ancora"])
        final = forma_final(it, f"q{numero:05d}", ancora)
        erros = bc.erros_pergunta(final, canon)
        if erros or banco.resolver(ancora) is None:
            registrar_log(enc["id"], "registrar", "descartada", "; ".join(erros) or "âncora inexistente", _resumo(it))
            continue
        for aviso in bc.avisos_pergunta(final):
            registrar_log(enc["id"], "registrar", "aviso", aviso, {"id": final["id"]})
        banco.perguntas.append(final)
        registradas.append(final)
        numero += 1

    for aviso in bc.avisos_variedade(registradas):
        registrar_log(enc["id"], "variedade", "aviso", aviso)

    banco.estado["concluidas"].append(enc["id"])
    banco.salvar()
    registrar_log(enc["id"], "registrar", "concluida", f"{len(registradas)} perguntas entraram no banco")
    return registradas
