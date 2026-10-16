"""As cinco etapas de uma encomenda. Cada etapa grava seu resultado em
trabalho/<encomenda>/ e, se esse arquivo já existe, é pulada: assim o pipeline
retoma de onde parou (por exemplo, depois de esgotar a cota do plano)."""

import json

import banco as bc
import fontes
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
# Saturação por âncora (MANIFESTO §17): uma âncora no limite (bc.limite_por_ancora, somando texto e figura) não
# recebe outra. O gerador é avisado das âncoras do tema a uma pergunta do limite. Num lote exclusivo de uma coleção,
# a conta é só a das perguntas da coleção (bc.conta_na_saturacao).
MAX_POR_ANCORA = bc.MAX_POR_ANCORA
MAX_SATURADAS_NO_PROMPT = 300


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

# Regras de variedade de um lote de texto (MANIFESTO §9), e a versão sem cota de ângulos das coleções de
# bc.SEM_COTA_ANGULOS (as regras do modo dizem o resto).
VARIEDADE_LOTE = """- No máximo 25% das perguntas num mesmo ângulo, e pelo menos 6 ângulos diferentes.
- `identidade` + `atributo` somam no máximo 30%.
- No máximo 2 perguntas por âncora, e nunca duas com o mesmo ângulo sobre a mesma âncora.
- Perguntas do mesmo ângulo não devem repetir o mesmo molde de frase (MANIFESTO §5).
- Prefira âncoras que ainda **não** aparecem na lista abaixo. Profundidade vem de ângulos novos sobre âncoras conhecidas, e não de âncoras obscuras."""
VARIEDADE_SEM_COTA = """- **Sem cota de ângulos:** o lote pode se concentrar nos ângulos que o foco pede (regras do modo, no final).
- No máximo 2 perguntas por âncora, e nunca duas com o mesmo ângulo sobre a mesma âncora.
- Perguntas do mesmo ângulo não devem repetir o mesmo molde de frase (MANIFESTO §5).
- Uma âncora da lista abaixo pode receber perguntas até o limite, desde que sobre fatos novos. Profundidade vem de fatos novos sobre assuntos conhecidos, e não de assuntos obscuros."""


def montar_prompt_geracao(enc, banco):
    colecao = bc.colecao_exclusiva(enc)
    limite = bc.limite_por_ancora(enc)
    if colecao:
        # Lote exclusivo: a saturação e os fatos já usados contam na coleção, e não no subtema do jogo original.
        # Só as perguntas de texto vão ao prompt: as com figura são quase todas de molde fixo ("Quem é esse
        # pokémon?", tipo, região, evolução), e a checagem de repetidos pela âncora as compara depois.
        da_conta = [p for p in banco.perguntas if bc.conta_na_saturacao(p, enc)]
        existentes = [p for p in da_conta if "imagem" not in p]
        escopo = f"na coleção `{colecao}`"
    else:
        da_conta = existentes = banco.perguntas_do_subtema(enc["tema"], enc["subtema"])
        escopo = "neste subtema"

    por_ancora = banco.perguntas_por_ancora(enc)
    # Num lote exclusivo, as âncoras que só têm figuras de molde fixo ficam fora da lista, salvo perto do limite:
    # a resolução de âncoras (etapa 4) liga pelo nome uma proposta a elas.
    com_texto = {banco.resolver(p["ancora"]) or p["ancora"] for p in existentes}
    linhas_ancoras = []
    for id_ancora, angulos in sorted(banco.angulos_por_ancora(da_conta).items()):
        a = banco.ancora_por_id.get(id_ancora)
        if colecao and id_ancora not in com_texto and len(por_ancora.get(id_ancora, [])) < limite - 1:
            continue
        if a:
            total = f" | {len(por_ancora.get(id_ancora, []))} perguntas" if colecao else ""
            linhas_ancoras.append(f"- `{a['id']}` | {a['nome']} | {a['descricao']} | ângulos: {', '.join(sorted(angulos))}{total}")

    recentes = existentes if colecao else existentes[-MAX_PERGUNTAS_NO_PROMPT:]
    linhas_perguntas = [f"- {p['pergunta']} → {p['resposta']}" for p in recentes]

    # Âncoras do tema inteiro (de qualquer subtema) a uma pergunta do limite: o gerador deve evitá-las. Num lote
    # exclusivo, todas as âncoras da conta já estão na lista acima, com o número de perguntas.
    do_subtema = {banco.resolver(p["ancora"]) for p in da_conta}
    saturadas = []
    for id_ancora, ps in por_ancora.items():
        a = banco.ancora_por_id.get(id_ancora)
        if a and id_ancora not in do_subtema and len(ps) >= limite - 1 and any(p["tema"] == enc["tema"] for p in ps):
            saturadas.append((len(ps), a["nome"]))
    saturadas.sort(reverse=True)
    linhas_saturadas = [f"- {nome} ({n})" for n, nome in saturadas[:MAX_SATURADAS_NO_PROMPT]]

    quantidade = enc["quantidade"]
    return preencher(
        ler_texto(PROMPTS_DIR / "gerar.md"),
        tema=enc["tema"],
        subtema=enc["subtema"],
        quantidade=quantidade,
        multipla=enc.get("multipla", round(quantidade * 0.2)),
        angulos_alvo=", ".join(enc.get("angulos_alvo", [])) or "nenhum em especial; siga as regras de variedade",
        observacoes=enc.get("observacoes") or "nenhuma",
        subtemas_colecao=_bloco_subtemas_colecao(enc),
        regras_variedade=VARIEDADE_SEM_COTA if colecao in bc.SEM_COTA_ANGULOS else VARIEDADE_LOTE,
        escopo=escopo,
        formato_extra=f" | perguntas da âncora na coleção (máximo {limite})" if colecao else "",
        limite=limite,
        ancoras_existentes="\n".join(linhas_ancoras) or "(nenhuma)",
        perguntas_existentes="\n".join(linhas_perguntas) or "(nenhuma)",
        ancoras_saturadas="\n".join(linhas_saturadas) or "(nenhuma)",
        manifesto=_manifesto(enc),
    )


def _manifesto(enc):
    """A Parte I do MANIFESTO e, num lote exclusivo de uma coleção com documento próprio, as regras do modo."""
    return manifesto_para_llm(bc.DOC_COLECAO.get(bc.colecao_exclusiva(enc)))


def _bloco_subtemas_colecao(enc):
    """Na encomenda de uma coleção com subtemas próprios, o gerador classifica cada pergunta pelo assunto dela."""
    subtemas = bc.SUBTEMAS_COLECAO.get(enc.get("colecao"))
    if not subtemas:
        return ""
    linhas = "\n".join(f"  - `{nome}`: {escopo}" for nome, escopo in subtemas.items())
    foco = f" O foco deste lote é `{enc['subtema_colecao']}`, mas" if enc.get("subtema_colecao") else ""
    return (f"- **Subtema da coleção:** em cada pergunta, preencha `subtema_colecao` com um destes subtemas do modo"
            f" {enc['colecao']}.{foco} classifique cada pergunta pelo assunto dela, não pelo foco do lote:\n{linhas}")


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
        if g.get("subtema_colecao") in bc.SUBTEMAS_COLECAO.get(enc.get("colecao"), {}):
            item["_subtema_colecao"] = g["subtema_colecao"]

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

def completar_reescritas(enc, avaliacoes, lote, pasta, config):
    """O crítico às vezes decide "reescrever" sem mandar a reescrita. Em vez de descartar essas perguntas,
    pede de novo só as reescritas que faltaram, numa chamada pequena, com o motivo que ele mesmo deu."""
    faltando = [a for a in avaliacoes.values() if a["decisao"] == "reescrever" and not a.get("reescrita")]
    if not faltando:
        return
    por_indice = {e["indice"]: e for e in lote}  # cada entrada já traz os trechos das fontes
    pedido = [{**por_indice[a["indice"]], "motivo": a["motivo"]} for a in faltando if a["indice"] in por_indice]
    prompt = preencher(
        ler_texto(PROMPTS_DIR / "reescrever.md"),
        tema=enc["tema"], subtema=enc["subtema"],
        lote=json.dumps(pedido, ensure_ascii=False, indent=2),
        manifesto=_manifesto(enc),
    )
    c = config["criticar"]
    saida = chamar(prompt, ler_json(ESQUEMAS_DIR / "saida_reescrita.json"), c["modelo"], c["esforco"],
                   tempo_limite=c["tempo_limite"])
    gravar_json(pasta / "03_reescritas_faltantes.json", saida)
    for r in saida["reescritas"]:
        a = avaliacoes.get(r["indice"])
        if a is None or a.get("reescrita"):
            continue
        if r.get("descartar") or not r.get("reescrita"):
            a.update(decisao="descartar", motivo=r["motivo"])
        else:
            a["reescrita"] = r["reescrita"]
    registrar_log(enc["id"], "criticar", "reescritas_pedidas_de_novo",
                  f"{len(pedido)} reescrita(s) faltando; {sum(1 for r in saida['reescritas'] if r.get('reescrita'))} recebida(s)")


def montar_prompt_critica(enc, itens, pasta):
    """Lote com os trechos das fontes já baixados (fontes.py) e o prompt do crítico."""
    lote = lote_para_critica(itens)
    trechos = fontes.trechos_do_lote(itens, pasta / "03_fontes.json")
    for entrada in lote:
        entrada["trechos"] = trechos.get(str(entrada["indice"]), [])
    prompt = preencher(
        ler_texto(PROMPTS_DIR / "criticar.md"),
        tema=enc["tema"], subtema=enc["subtema"],
        lote=json.dumps(lote, ensure_ascii=False, indent=2),
        manifesto=_manifesto(enc),
    )
    return lote, prompt


def criticar(enc, canon, pasta, config):
    itens = ler_json(pasta / ARQUIVOS["validar"])["itens"]
    if not itens:
        gravar_json(pasta / ARQUIVOS["criticar"], {"itens": []})
        return

    lote, prompt = montar_prompt_critica(enc, itens, pasta)
    gravar_texto(pasta / "03_prompt.md", prompt)
    c = config["criticar"]
    saida = chamar(prompt, ler_json(ESQUEMAS_DIR / "saida_critica.json"), c["modelo"], c["esforco"],
                   tempo_limite=c["tempo_limite"])
    gravar_json(pasta / "03_critica_bruta.json", saida)
    apoio = {}
    for a in saida["avaliacoes"]:
        apoio[a.get("apoio", "?")] = apoio.get(a.get("apoio", "?"), 0) + 1
    registrar_log(enc["id"], "criticar", "apoio", ", ".join(f"{k}: {v}" for k, v in sorted(apoio.items())))

    avaliacoes = {a["indice"]: a for a in saida["avaliacoes"]}
    completar_reescritas(enc, avaliacoes, lote, pasta, config)
    resultado = aplicar_avaliacoes(enc, itens, avaliacoes, canon)
    gravar_json(pasta / ARQUIVOS["criticar"], {"itens": resultado})
    registrar_log(enc["id"], "criticar", "concluida", f"{len(resultado)} de {len(itens)} perguntas seguiram")


def lote_para_critica(itens):
    """O que o crítico vê de cada pergunta: índice, âncora (nome e descrição) e os campos da pergunta."""
    lote = []
    for it in itens:
        entrada = {"indice": it["_indice"],
                   "ancora": {"nome": it["_ancora"]["nome"], "descricao": it["_ancora"]["descricao"]}}
        entrada.update({c: it[c] for c in CAMPOS[2:] if c in it})
        lote.append(entrada)
    return lote


def aplicar_avaliacoes(enc, itens, avaliacoes, canon):
    """Aplica as decisões do crítico e devolve as perguntas que seguem, já com as reescritas."""
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
    return resultado


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
    novas = {}          # nome normalizado -> proposta de âncora nova
    indice_lote = {}    # nome ou variante normalizada -> chave em `novas`
    variantes = {}      # id existente -> nomes a acrescentar como variantes

    # 4a. id informado pelo gerador, que viu a descrição da âncora na lista do subtema. Um nome igual ao de uma
    # âncora cadastrada não basta: homônimos (Pelé e pele, Cruzeiro clube e constelação) vão ao juiz em 4b.
    for it in itens:
        p = it["_ancora"]
        nomes = [p["nome"], *p.get("variantes", [])]
        id_existente = banco.resolver(p["id_existente"]) if p.get("id_existente") else None
        if id_existente:
            it["ancora"] = id_existente
            variantes.setdefault(id_existente, []).extend(nomes)
            continue
        # Outra pergunta do mesmo lote já propôs esta âncora? Só pelo nome principal: uma variante em comum
        # ("Negrinho" é o Negrinho do Pastoreio e também o brigadeiro, no Sul) não basta.
        chave = normalizar(p["nome"]) or p["nome"]
        if chave in indice_lote:
            chave = indice_lote[chave]
            extras = [n for n in nomes if normalizar(n) != chave]
            novas[chave]["variantes"] = list(dict.fromkeys(novas[chave]["variantes"] + extras))
            novas[chave]["fontes"] = list(dict.fromkeys(novas[chave]["fontes"] + p.get("fontes", [])))
        else:
            indice_lote[chave] = chave
            novas[chave] = {"nome": p["nome"], "descricao": p["descricao"],
                            "variantes": list(p.get("variantes", [])), "fontes": list(p.get("fontes", []))}
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
    angulos_banco = banco.angulos_por_ancora([p for p in banco.perguntas if bc.conta_na_saturacao(p, enc)])
    total_banco = {k: len(v) for k, v in banco.perguntas_por_ancora(enc).items()}
    limite = bc.limite_por_ancora(enc)
    conta = f"na coleção {enc['colecao']}" if bc.colecao_exclusiva(enc) else "no banco inteiro"
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
        if total_banco.get(it["ancora"], 0) + len(angulos_lote) >= limite:
            registrar_log(enc["id"], "ancoras", "descartada",
                          f"âncora {it['ancora']} saturada (máx. {limite} perguntas {conta})", _resumo(it))
            continue
        angulos_lote.append(it["angulo"])
        finais.append(it)

    finais = checar_repetidos(enc, banco, finais, pasta, config)

    gravar_json(pasta / ARQUIVOS["ancoras"], {
        "itens": finais,
        "ancoras_novas": list(criadas.values()),
        "variantes": {k: list(dict.fromkeys(v)) for k, v in variantes.items()},
    })
    registrar_log(enc["id"], "ancoras", "concluida",
                  f"{len(finais)} perguntas, {len(criadas)} âncoras novas, {len(resolvidas)} fundidas pelo juiz")


def checar_repetidos(enc, banco, itens, pasta, config):
    """Repetição pela âncora (MANIFESTO §17): cada pergunta nova cuja âncora já tem perguntas no banco, em qualquer
    tema, é comparada só com essas perguntas, numa chamada pequena ao LLM. Se pergunta o mesmo fato, sai. Num lote
    exclusivo de uma coleção, contam as perguntas da coleção, como na saturação."""
    por_ancora = banco.perguntas_por_ancora(enc)
    casos, item_do_caso = [], {}
    for it in itens:
        existentes = por_ancora.get(it["ancora"], [])
        if existentes:
            n = len(casos) + 1
            item_do_caso[n] = it
            casos.append({"caso": n, "nova": {"pergunta": it["pergunta"], "resposta": it["resposta"]},
                          "existentes": [{"id": p["id"], "pergunta": p["pergunta"], "resposta": p["resposta"]}
                                         for p in existentes]})
    if not casos:
        return itens
    feito = ler_json(pasta / "04_repetidos.json")
    if feito is not None and feito.get("casos") == casos:
        saida = feito   # retomada depois de uma interrupção: os mesmos casos já foram decididos
    else:
        c = config.get("repetidos", config["julgar"])
        prompt = preencher(ler_texto(PROMPTS_DIR / "repetidos.md"), casos=json.dumps(casos, ensure_ascii=False, indent=2))
        saida = chamar(prompt, ler_json(ESQUEMAS_DIR / "saida_repetidos.json"), c["modelo"], c["esforco"],
                       tempo_limite=c["tempo_limite"])
        gravar_json(pasta / "04_repetidos.json", {"casos": casos, "decisoes": saida["decisoes"]})
    fora = set()
    for d in saida["decisoes"]:
        it = item_do_caso.get(d["caso"])
        if it is not None and d["decisao"] == "repete":
            fora.add(id(it))
            registrar_log(enc["id"], "ancoras", "descartada", f"repete {d.get('id_existente', '?')}: {d['motivo']}", _resumo(it))
    return [it for it in itens if id(it) not in fora]


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
        # Coleção temática (MANIFESTO §6): a encomenda marca todas as suas perguntas; "exclusiva" as tira do jogo original.
        # O subtema no modo da coleção é o que o gerador deu à pergunta; sem ele, vale o foco da encomenda.
        final.update({c: enc[c] for c in ("colecao", "exclusiva") if enc.get(c)})
        if it.get("_subtema_colecao") or enc.get("subtema_colecao"):
            final["subtema_colecao"] = it.get("_subtema_colecao") or enc["subtema_colecao"]
        erros = bc.erros_pergunta(final, canon)
        if erros or banco.resolver(ancora) is None:
            registrar_log(enc["id"], "registrar", "descartada", "; ".join(erros) or "âncora inexistente", _resumo(it))
            continue
        for aviso in bc.avisos_pergunta(final):
            registrar_log(enc["id"], "registrar", "aviso", aviso, {"id": final["id"]})
        banco.perguntas.append(final)
        registradas.append(final)
        numero += 1

    for aviso in bc.avisos_variedade(registradas, cota_angulos=bc.colecao_exclusiva(enc) not in bc.SEM_COTA_ANGULOS):
        registrar_log(enc["id"], "variedade", "aviso", aviso)

    banco.estado["concluidas"].append(enc["id"])
    banco.salvar()
    registrar_log(enc["id"], "registrar", "concluida", f"{len(registradas)} perguntas entraram no banco")
    return registradas
