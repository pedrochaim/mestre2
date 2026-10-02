"""Etapa de figuras (MANIFESTO §6 e §17): perguntas de reconhecimento a partir de catálogos curados.

Um lote de figuras de um catálogo passa por:
  0. curadoria: se o catálogo tem poucas entidades livres, o LLM propõe mais, em três camadas;
  1. seleção e preparo: escolhe entidades das três camadas, baixa a imagem principal (Wikidata/Commons ou PokéAPI),
     confere a licença, põe fundo branco e guarda um trecho da Wikipédia;
  2. avaliação: o LLM abre cada imagem, reprova as ruins e escreve a pergunta (família e nível sugeridos);
  3. crítica: outro LLM, sem a imagem, confere o fato nos trechos das fontes, o vazamento e os distratores;
  4. registro: liga à âncora (com o juiz para nomes parecidos), respeita a saturação, descarta o que repete uma
     pergunta do banco sobre a mesma âncora, copia a imagem e grava no banco.
Cada passo grava seu arquivo em trabalho/<lote>/ e é pulado se já existe, como nas encomendas de texto.
"""

import io
import json
import math
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from collections import Counter

from PIL import Image, ImageDraw

import banco as bc
import claude_cli
import etapas
import fontes
from claude_cli import chamar
from comum import (BANCO_DIR, ESQUEMAS_DIR, PIPELINE, PROMPTS_DIR, TRABALHO_DIR, gravar_json, ler_json, ler_texto,
                   manifesto_para_llm, normalizar, preencher, registrar_log)
from etapas import MAX_POR_ANCORA

CATALOGOS_DIR = PIPELINE / "catalogos"
FAMILIAS = {"o_que_e": "identidade", "quem_fez": "autoria", "onde": "lugar", "quando": "tempo",
            "que_parte": "composicao", "que_tipo": "atributo", "com_o_que_se_liga": "conexao"}
ALVO_NIVEIS = {1: .4, 2: .4, 3: .2}
MAX_FIGURA_POR_ANCORA = 2
MAX_FAMILIA = .6
LIVRE = re.compile(r"(CC0|CC[- ]BY|public domain|domínio público|\bPD\b|GFDL|FAL|Free Art)", re.I)
UA = {"User-Agent": "Mestre2/0.1 (quiz; https://github.com/pedrochaim/mestre2)"}
POKEAPI = "https://pokeapi.co/api/v2/"
ARTE_POKEMON = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{}.png"
BULBAPEDIA = "https://bulbapedia.bulbagarden.net/wiki/{}_(Pok%C3%A9mon)"


# ---------------------------------------------------------------- utilitários

def _get(url, json_=True):
    for tentativa in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
                dados = r.read()
            return json.loads(dados) if json_ else dados
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            time.sleep(5 * (tentativa + 1))
        except (urllib.error.URLError, TimeoutError):
            time.sleep(5 * (tentativa + 1))
    return None


def _limpar_autor(texto):
    texto = re.sub(r"\s+", " ", re.sub("<[^>]+>", "", texto or "")).strip()
    if "No machine-readable" in texto:
        achado = re.search(r"provided\.\s*(\S+?)(?:~\w+)?\s+assumed", texto)
        texto = (achado.group(1) + " (Wikimedia Commons)") if achado else "Wikimedia Commons"
    if "Unknown author" in texto:
        texto = "Autor desconhecido"
    return texto[:200] or "Autor desconhecido"


def _salvar_jpeg(dados, destino, lado=1280):
    im = Image.open(io.BytesIO(dados))
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        fundo = Image.new("RGB", im.size, (255, 255, 255))
        fundo.paste(im, mask=im.split()[3])
        im = fundo
    im = im.convert("RGB")
    im.thumbnail((lado, lado))
    im.save(destino, "JPEG", quality=88)


def _silhueta(arte):
    """Tudo que não é transparente vira preto, preservando a borda suave do canal alfa."""
    preto = Image.new("RGBA", arte.size, (0, 0, 0, 255))
    preto.putalpha(arte.split()[3])
    return preto


def _sobre_raios(figura, lado=700):
    """A figura centralizada sobre raios azuis e uma explosão amarela, como na vinheta do desenho."""
    fundo = Image.new("RGB", (lado, lado), (40, 110, 200))
    d = ImageDraw.Draw(fundo)
    c = lado / 2
    for i in range(0, 24, 2):
        a1, a2 = 2 * math.pi * i / 24, 2 * math.pi * (i + 1) / 24
        d.polygon([(c, c), (c + lado * math.cos(a1), c + lado * math.sin(a1)),
                   (c + lado * math.cos(a2), c + lado * math.sin(a2))], fill=(70, 150, 230))
    d.polygon([(c + lado * (.42 if i % 2 == 0 else .33) * math.cos(2 * math.pi * i / 32),
                c + lado * (.42 if i % 2 == 0 else .33) * math.sin(2 * math.pi * i / 32)) for i in range(32)],
              fill=(255, 214, 0))
    figura = figura.copy()
    figura.thumbnail((int(lado * .82), int(lado * .82)))
    base = fundo.convert("RGBA")
    base.alpha_composite(figura, ((lado - figura.width) // 2, (lado - figura.height) // 2))
    return base.convert("RGB")


def _wiki_url(lingua, titulo):
    return f"https://{lingua}.wikipedia.org/wiki/" + urllib.parse.quote(titulo.replace(" ", "_"))


# ---------------------------------------------------------------- catálogos

def catalogo_arquivo(cat_id):
    return CATALOGOS_DIR / f"{cat_id}.json"


def carregar_catalogo(cat_id):
    return ler_json(catalogo_arquivo(cat_id), {"entidades": []})


def livres(dados):
    return [e for e in dados["entidades"] if e.get("status", "nova") == "nova"]


def curar(cat, banco, config, quantidade=40):
    """Pede ao LLM mais entidades para o catálogo, excluindo as que já estão nele ou no banco."""
    dados = carregar_catalogo(cat["id"])
    destinos = {tuple(d) for d in cat["destinos"]}
    excluir = {e["nome"] for e in dados["entidades"]}
    for p in banco.perguntas:
        if (p["tema"], p["subtema"]) in destinos:
            a = banco.ancora_por_id.get(banco.resolver(p["ancora"]) or p["ancora"])
            if a:
                excluir.add(a["nome"])
    prompt = preencher(ler_texto(PROMPTS_DIR / "curar_catalogo.md"), id=cat["id"], descricao=cat["descricao"],
                       destinos=json.dumps({i: f"{t} › {s}" for i, (t, s) in enumerate(cat["destinos"])}, ensure_ascii=False),
                       quantidade=quantidade, imagem=cat["imagem"], excluir=", ".join(sorted(excluir)) or "(nenhuma)")
    c = config["catalogo"]
    claude_cli.contexto.update(encomenda=f"catalogo_{cat['id']}", etapa="curadoria")
    saida = chamar(prompt, ler_json(ESQUEMAS_DIR / "saida_catalogo.json"), c["modelo"], c["esforco"], tempo_limite=c["tempo_limite"])
    vistos = {normalizar(n) for n in excluir}
    novas = 0
    for e in saida["entidades"]:
        if normalizar(e["nome"]) in vistos or not 0 <= e["destino"] < len(cat["destinos"]):
            continue
        vistos.add(normalizar(e["nome"]))
        dados["entidades"].append({**e, "status": "nova"})
        novas += 1
    gravar_json(catalogo_arquivo(cat["id"]), dados)
    registrar_log(f"catalogo_{cat['id']}", "curadoria", "concluida", f"{novas} entidades novas")
    return novas


# ---------------------------------------------------------------- preparo das imagens

def _preparar_pokemon(ent, pasta, indice):
    nome = ent["titulo"].split(":", 1)[-1].strip().lower().replace(". ", "-").replace(" ", "-").replace("'", "").replace(".", "")
    d = _get(POKEAPI + "pokemon-species/" + urllib.parse.quote(nome))
    if not d:
        return None, "pokémon não encontrado no PokéAPI"
    num = d["id"]
    nome_en = next(n["name"] for n in d["names"] if n["language"]["name"] == "en")
    dados = _get(ARTE_POKEMON.format(num), json_=False)
    if not dados:
        return None, "sem arte oficial"
    # Estilo "Quem é esse pokémon?" do desenho: a pergunta mostra a silhueta preta sobre raios azuis e amarelos;
    # a arte colorida, sobre o mesmo fundo, só aparece em "Mostrar resposta".
    arte = Image.open(io.BytesIO(dados)).convert("RGBA")
    arquivo, revelacao = pasta / f"{indice:02d}.jpg", pasta / f"{indice:02d}_revelacao.jpg"
    _sobre_raios(_silhueta(arte)).save(arquivo, "JPEG", quality=88)
    _sobre_raios(arte).save(revelacao, "JPEG", quality=88)
    return {"imagem": str(arquivo), "revelacao": str(revelacao), "origem": ARTE_POKEMON.format(num),
            "autor": "© Nintendo / Creatures / GAME FREAK",
            "licenca": "Arte oficial; uso privado, sem licença livre", "nome": nome_en,
            "fonte": [BULBAPEDIA.format(urllib.parse.quote(nome_en.replace(" ", "_")))],
            "trecho": f"{nome_en}, número {num} da Pokédex Nacional."}, None


def _preparar_wikidata(ent, cat, pasta, indice):
    lingua, _, titulo = ent["titulo"].partition(":")
    if not titulo:
        lingua, titulo = "en", lingua
    d = _get(f"https://{lingua}.wikipedia.org/w/api.php?" + urllib.parse.urlencode(
        {"action": "query", "prop": "pageprops|extracts", "ppprop": "wikibase_item", "exintro": 1, "explaintext": 1,
         "redirects": 1, "titles": titulo, "format": "json"}))
    pagina = next(iter((d or {}).get("query", {}).get("pages", {}).values()), {})
    qid = pagina.get("pageprops", {}).get("wikibase_item")
    if not qid:
        return None, "artigo ou item do Wikidata não encontrado"
    titulo_real = pagina.get("title", titulo)
    e = (_get(f"https://www.wikidata.org/w/api.php?action=wbgetentities&ids={qid}&props=claims|sitelinks&format=json") or {})
    e = e.get("entities", {}).get(qid, {})
    valores = [c["mainsnak"].get("datavalue", {}).get("value") for c in e.get("claims", {}).get(cat["imagem"], [])]
    valores = [v for v in valores if isinstance(v, str)]
    if not valores:
        return None, f"sem imagem ({cat['imagem']}) no Wikidata"
    arq = valores[0]
    ii = _get("https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(
        {"action": "query", "titles": "File:" + arq, "prop": "imageinfo", "iiprop": "url|extmetadata", "iiurlwidth": 1280,
         "format": "json"}))
    info = next(iter((ii or {}).get("query", {}).get("pages", {}).values()), {}).get("imageinfo", [None])[0]
    if not info:
        return None, "imagem não encontrada no Commons"
    meta = info.get("extmetadata", {})
    licenca = meta.get("LicenseShortName", {}).get("value", "")
    if not LIVRE.search(licenca):
        return None, f"licença não livre: {licenca}"
    dados = _get(info.get("thumburl") or info["url"], json_=False)
    if not dados:
        return None, "falha ao baixar a imagem"
    arquivo = pasta / f"{indice:02d}.jpg"
    try:
        _salvar_jpeg(dados, arquivo)
    except Exception as ex:  # imagem corrompida ou formato que o Pillow não abre (ex.: SVG sem miniatura)
        return None, f"imagem ilegível: {type(ex).__name__}"
    links = e.get("sitelinks", {})
    fontes = [_wiki_url(lingua, titulo_real)]
    outra = "ptwiki" if lingua != "pt" else "enwiki"
    if outra in links:
        fontes.append(_wiki_url(outra[:2], links[outra]["title"]))
    return {"imagem": str(arquivo), "origem": "https://commons.wikimedia.org/wiki/File:" + arq.replace(" ", "_"),
            "autor": _limpar_autor(meta.get("Artist", {}).get("value")), "licenca": licenca, "qid": qid,
            "nome": ent["nome"], "fonte": fontes, "trecho": (pagina.get("extract") or "")[:900]}, None


def _sugerir(cat, contagem_familias, contagem_niveis, n):
    """Família e nível sugeridos para n itens, puxando para as metas de variedade (diretrizes do §6)."""
    sugestoes = []
    fam, niv = Counter(contagem_familias), Counter({int(k): v for k, v in contagem_niveis.items()})
    for _ in range(n):
        total = sum(fam.values()) + 1
        permitidas = [f for f in cat["familias"] if (fam[f] + 1) / total <= MAX_FAMILIA] or cat["familias"]
        f = min(permitidas, key=lambda x: (fam[x], cat["familias"].index(x)))
        tot_n = sum(niv.values()) + 1
        nivel = max(ALVO_NIVEIS, key=lambda k: ALVO_NIVEIS[k] - niv[k] / tot_n)
        fam[f] += 1
        niv[nivel] += 1
        sugestoes.append((f, nivel))
    return sugestoes


# ---------------------------------------------------------------- lote

def proximo_lote_id(banco, cat_id):
    feitos = [c for c in banco.estado["concluidas"] if c.startswith(f"fig_{cat_id}_")]
    return f"fig_{cat_id}_{len(feitos) + 1:03d}"


def executar_lote(cat, banco, canon, config, quantidade=12, lote_id=None):
    """Roda um lote de figuras de um catálogo e devolve as perguntas registradas. Levanta ErroClaude se o LLM
    falhar; chamar de novo com o mesmo lote retoma do último passo concluído."""
    lote_id = lote_id or proximo_lote_id(banco, cat["id"])
    pasta = TRABALHO_DIR / lote_id
    pasta.mkdir(parents=True, exist_ok=True)
    print(f"\n[{lote_id}] catálogo {cat['id']} ({quantidade} figuras)", flush=True)
    est = banco.estado.setdefault("figuras", {}).setdefault(cat["id"], {"familias": {}, "niveis": {}, "registradas": 0})

    # 1. seleção e preparo
    sel_arq = pasta / "01_selecao.json"
    selecao = ler_json(sel_arq)
    if selecao is None:
        dados = carregar_catalogo(cat["id"])
        if len(livres(dados)) < quantidade * 2:
            print("  0. curadoria…", flush=True)
            curar(cat, banco, config)
            dados = carregar_catalogo(cat["id"])
        por_ancora = banco.perguntas_por_ancora()
        idx = banco.indice_nomes()
        fila = sorted(livres(dados), key=lambda e: (e["camada"], ))
        camadas = {k: [e for e in fila if e["camada"] == k] for k in (1, 2, 3)}
        ordem = []
        while any(camadas.values()):
            for k in (1, 2, 3):
                if camadas[k]:
                    ordem.append(camadas[k].pop(0))
        itens = []
        print("  1. preparo das imagens…", flush=True)
        for ent in ordem:
            if len(itens) >= quantidade:
                break
            id_ancora = idx.get(normalizar(ent["nome"]))
            ps = por_ancora.get(id_ancora, []) if id_ancora else []
            if len(ps) >= MAX_POR_ANCORA or sum(1 for p in ps if "imagem" in p) >= MAX_FIGURA_POR_ANCORA:
                ent["status"] = "saturada"
                continue
            prep, motivo = (_preparar_pokemon(ent, pasta, len(itens) + 1) if cat["imagem"] == "pokeapi"
                            else _preparar_wikidata(ent, cat, pasta, len(itens) + 1))
            if prep is None:
                ent["status"] = "sem_imagem"
                registrar_log(lote_id, "preparo", "descartada", motivo, {"entidade": ent["nome"]})
                continue
            ent["status"] = "em_uso"
            itens.append({"indice": len(itens) + 1, "camada": ent["camada"], "destino_sugerido": ent["destino"], **prep})
        gravar_json(catalogo_arquivo(cat["id"]), dados)
        for it, (f, nivel) in zip(itens, _sugerir(cat, est["familias"], est["niveis"], len(itens))):
            it["familia_sugerida"], it["nivel_sugerido"] = f, nivel
        selecao = {"itens": itens}
        gravar_json(sel_arq, selecao)
    itens = selecao["itens"]
    if not itens:
        banco.estado["concluidas"].append(lote_id)
        banco.salvar()
        return []

    # 2. avaliação pelo LLM, que olha cada imagem
    av_arq = pasta / "02_avaliacao.json"
    avaliacao = ler_json(av_arq)
    if avaliacao is None:
        print("  2. avaliação das imagens…", flush=True)
        enunciado = f"- **Enunciado padrão do nível 1:** \"{cat['enunciado']}\"" if cat.get("enunciado") else ""
        entrada = [{k: it[k] for k in ("indice", "nome", "camada", "destino_sugerido", "familia_sugerida", "nivel_sugerido",
                                        "imagem", "revelacao", "trecho", "fonte") if k in it} for it in itens]
        prompt = preencher(ler_texto(PROMPTS_DIR / "figuras.md"), id=cat["id"], descricao=cat["descricao"],
                           destinos=json.dumps({i: f"{t} › {s}" for i, (t, s) in enumerate(cat["destinos"])}, ensure_ascii=False),
                           familias=", ".join(cat["familias"]), enunciado=enunciado,
                           itens=json.dumps(entrada, ensure_ascii=False, indent=2), manifesto=manifesto_para_llm())
        c = config["figuras"]
        claude_cli.contexto.update(encomenda=lote_id, etapa="figuras")
        avaliacao = chamar(prompt, ler_json(ESQUEMAS_DIR / "saida_figuras.json"), c["modelo"], c["esforco"],
                           ferramentas=["Read"], tempo_limite=c["tempo_limite"], diretorios=[pasta])
        gravar_json(av_arq, avaliacao)

    # 3. crítica do texto (fato, vazamento, distratores), sem a imagem
    critica = _criticar(cat, itens, avaliacao, pasta, config, lote_id)

    # 4. registro: âncora (com o juiz para nomes parecidos), saturação, repetidos e gravação
    print("  4. registro…", flush=True)
    return _registrar(cat, itens, avaliacao, critica, banco, canon, lote_id, est, pasta, config)


def _completa(av, cat):
    """Campos que faltam numa avaliação aprovada (lista vazia se está completa)."""
    faltam = [k for k in ("familia", "nivel", "destino", "tipo", "pergunta", "resposta", "ancora") if k not in av]
    if not faltam and not 0 <= av["destino"] < len(cat["destinos"]):
        faltam = ["destino válido"]
    if not faltam and av["familia"] not in FAMILIAS:
        faltam = ["família válida"]
    return faltam


def _criticar(cat, itens, avaliacao, pasta, config, lote_id):
    """Segunda leitura das perguntas aprovadas pelo redator: o crítico (sem ver a imagem, mas sabendo o que ela
    mostra) confere o fato nos trechos das fontes, o vazamento e os distratores. Devolve {indice: avaliação}."""
    arq = pasta / "03_critica.json"
    feita = ler_json(arq)
    if feita is not None:
        return {a["indice"]: a for a in feita["avaliacoes"]}
    por_indice = {it["indice"]: it for it in itens}
    aprovadas = [av for av in avaliacao["itens"]
                 if av["aprovado"] and av["indice"] in por_indice and not _completa(av, cat)]
    if not aprovadas:
        gravar_json(arq, {"avaliacoes": []})
        return {}
    print("  3. crítica…", flush=True)
    claude_cli.contexto.update(encomenda=lote_id, etapa="criticar_figuras")
    # fontes.trechos_do_lote espera itens no formato das encomendas de texto.
    para_trechos = [{"_indice": av["indice"], "fonte": por_indice[av["indice"]]["fonte"], "pergunta": av["pergunta"],
                     "resposta": av["resposta"],
                     "_ancora": {"nome": av["ancora"]["nome"], "variantes": av["ancora"].get("variantes", [])}}
                    for av in aprovadas]
    trechos = fontes.trechos_do_lote(para_trechos, pasta / "03_fontes.json")
    lote = []
    for av in aprovadas:
        e = {"indice": av["indice"], "mostra": {"nome": av["ancora"]["nome"], "descricao": av["ancora"]["descricao"]},
             "nivel": av["nivel"], "tipo": av["tipo"], "pergunta": av["pergunta"], "resposta": av["resposta"]}
        if av["tipo"] == "multipla":
            e["distratores"] = av.get("distratores", [])
        e["trechos"] = trechos.get(str(av["indice"]), [])
        lote.append(e)
    prompt = preencher(ler_texto(PROMPTS_DIR / "criticar_figuras.md"), catalogo=cat["id"],
                       lote=json.dumps(lote, ensure_ascii=False, indent=2), manifesto=manifesto_para_llm())
    c = config["criticar"]
    saida = chamar(prompt, ler_json(ESQUEMAS_DIR / "saida_critica_figuras.json"), c["modelo"], c["esforco"],
                   tempo_limite=c["tempo_limite"])
    gravar_json(arq, saida)
    apoio = Counter(a.get("apoio", "?") for a in saida["avaliacoes"])
    registrar_log(lote_id, "criticar", "apoio", ", ".join(f"{k}: {v}" for k, v in sorted(apoio.items())))
    return {a["indice"]: a for a in saida["avaliacoes"]}


def _resolver_ancoras(propostas, banco, pasta, config, lote_id):
    """Liga cada proposta {indice: {nome, descricao, variantes}} a uma âncora. Nome igual ou parecido com uma âncora
    cadastrada vai ao juiz, como no texto: homônimos (a bandeira da Itália e a seleção italiana, o retrato de George
    Washington e a cidade) não podem cair na mesma âncora. Devolve {indice: id existente, ou None para âncora nova}."""
    arq = pasta / "04_julgamento.json"
    casos, indices_do_caso = [], {}
    for indice, a in propostas.items():
        cands = bc.candidatas([a["nome"], *a.get("variantes", [])], banco.ancoras_ativas())
        if cands:
            n = len(casos) + 1
            indices_do_caso[n] = indice
            casos.append({"caso": n, "proposta": {"nome": a["nome"], "descricao": a["descricao"],
                                                  "variantes": a.get("variantes", [])},
                          "candidatas": [etapas._ficha(c) for c in cands]})
    feito = ler_json(arq)
    if feito is not None and feito.get("casos") == casos:
        decisoes = {d["caso"]: d for d in feito["decisoes"]}
    else:
        claude_cli.contexto.update(encomenda=lote_id, etapa="ancoras")
        decisoes = etapas.julgar(casos, config)
        gravar_json(arq, {"casos": casos, "decisoes": list(decisoes.values())})
    resultado = {indice: None for indice in propostas}
    for n, indice in indices_do_caso.items():
        d = decisoes.get(n)
        validos = {c["id"] for c in casos[n - 1]["candidatas"]}
        if d and d["decisao"] == "mesma" and d.get("id_existente") in validos:
            resultado[indice] = banco.resolver(d["id_existente"]) or d["id_existente"]
            registrar_log(lote_id, "ancoras", "mesma", d["motivo"],
                          {"proposta": propostas[indice]["nome"], "id": d["id_existente"]})
        else:
            registrar_log(lote_id, "ancoras", "nova", d["motivo"] if d else "juiz não decidiu; na dúvida, nova",
                          {"proposta": propostas[indice]["nome"]})
    return resultado


def _registrar(cat, itens, avaliacao, critica, banco, canon, lote_id, est, pasta, config):
    por_indice = {it["indice"]: it for it in itens}
    dados = carregar_catalogo(cat["id"])
    status = {normalizar(e["nome"]): e for e in dados["entidades"]}

    # a) decisões do redator e do crítico
    candidatos = []
    for av in avaliacao["itens"]:
        it = por_indice.get(av["indice"])
        if it is None:
            continue
        ent = status.get(normalizar(it["nome"]))
        resumo = {"entidade": it["nome"], "pergunta": av.get("pergunta")}

        def recusar(decisao, motivo):
            registrar_log(lote_id, "figuras", decisao, motivo, resumo)
            if ent:
                ent["status"] = "reprovada"

        if not av["aprovado"]:
            recusar("reprovada", av["motivo"])
            continue
        faltam = _completa(av, cat)
        if faltam:
            recusar("descartada", f"avaliação incompleta: {faltam}")
            continue
        c = critica.get(av["indice"])
        if c is None:
            recusar("descartada", "o crítico não avaliou esta pergunta")
            continue
        if c["decisao"] == "descartar":
            recusar("descartada", f"crítico: {c['motivo']}")
            continue
        if c["decisao"] == "reescrever":
            r = c.get("reescrita")
            if not r:
                recusar("descartada", "crítico: reescrita pedida mas não fornecida")
                continue
            registrar_log(lote_id, "figuras", "reescrita", c["motivo"],
                          {"antes": dict(resumo), "depois": {"pergunta": r["pergunta"], "resposta": r["resposta"]}})
            av = {**av, "pergunta": r["pergunta"], "resposta": r["resposta"]}
            if av["tipo"] == "multipla" and r.get("distratores"):
                av["distratores"] = r["distratores"]
            resumo["pergunta"] = av["pergunta"]
        tema, subtema = cat["destinos"][av["destino"]]
        p = {"id": "q00000", "tema": tema, "subtema": subtema, "ancora": "a", "angulo": FAMILIAS[av["familia"]],
             "tipo": av["tipo"], "pergunta": av["pergunta"], "resposta": av["resposta"]}
        if av["tipo"] == "multipla":
            p["distratores"] = av.get("distratores", [])
        p["fonte"] = it["fonte"]
        p["imagem"] = {"arquivo": "q00000.jpg", "origem": it["origem"], "autor": it["autor"], "licenca": it["licenca"]}
        erros = bc.erros_pergunta(p, canon)
        if erros:
            recusar("descartada", "; ".join(erros))
            continue
        a = av["ancora"]
        variantes = [v for v in dict.fromkeys([it["nome"], *a.get("variantes", [])])
                     if normalizar(v) != normalizar(a["nome"])]
        candidatos.append({"indice": av["indice"], "av": av, "it": it, "ent": ent, "resumo": resumo, "p": p,
                           "proposta": {"nome": a["nome"], "descricao": a["descricao"], "variantes": variantes}})

    # b) âncoras e saturação
    ligacao = _resolver_ancoras({c["indice"]: c["proposta"] for c in candidatos}, banco, pasta, config, lote_id)
    novas, reservados = {}, set()   # nome normalizado -> âncora nova deste lote
    por_ancora = {k: list(v) for k, v in banco.perguntas_por_ancora().items()}
    prontos = []
    for c in candidatos:
        id_ancora, nova = ligacao.get(c["indice"]), None
        if id_ancora is None:
            chave = normalizar(c["proposta"]["nome"])
            nova = novas.get(chave)
            if nova is None:
                nova = {"id": banco.novo_id_ancora(c["proposta"]["nome"], reservados), "nome": c["proposta"]["nome"],
                        "descricao": c["proposta"]["descricao"]}
                if c["proposta"]["variantes"]:
                    nova["variantes"] = c["proposta"]["variantes"]
                nova["fontes"] = c["it"]["fonte"]
                erros = bc.erros_ancora(nova)
                if erros:
                    registrar_log(lote_id, "figuras", "descartada", "âncora inválida: " + "; ".join(erros), c["resumo"])
                    continue
                reservados.add(nova["id"])
                novas[chave] = nova
            id_ancora = nova["id"]
        ps = por_ancora.get(id_ancora, [])
        if len(ps) >= MAX_POR_ANCORA or sum(1 for p in ps if "imagem" in p) >= MAX_FIGURA_POR_ANCORA:
            registrar_log(lote_id, "figuras", "descartada", f"âncora {id_ancora} saturada", c["resumo"])
            continue
        por_ancora.setdefault(id_ancora, []).append(c["p"])
        c["p"]["ancora"], c["nova"] = id_ancora, nova
        prontos.append(c)

    # c) repetidos: a pergunta nova não pode perguntar o mesmo fato que outra do banco sobre a mesma âncora
    if prontos:
        claude_cli.contexto.update(encomenda=lote_id, etapa="repetidos")
        para_checar = [{"_indice": c["indice"], "ancora": c["p"]["ancora"], "pergunta": c["p"]["pergunta"],
                        "resposta": c["p"]["resposta"]} for c in prontos]
        ficam = {x["_indice"] for x in etapas.checar_repetidos({"id": lote_id}, banco, para_checar, pasta, config)}
        prontos = [c for c in prontos if c["indice"] in ficam]

    # d) gravação
    numero = banco.proximo_numero()
    registradas = []
    for c in prontos:
        qid = f"q{numero:05d}"
        p = {**c["p"], "id": qid, "imagem": {**c["p"]["imagem"], "arquivo": qid + ".jpg"}}
        if c["nova"] and c["nova"]["id"] not in banco.ancora_por_id:
            banco.adicionar_ancora(c["nova"])
        (BANCO_DIR / "imagens" / (qid + ".jpg")).write_bytes(open(c["it"]["imagem"], "rb").read())
        if c["it"].get("revelacao"):
            p["imagem"]["revelacao"] = qid + "_revelacao.jpg"
            (BANCO_DIR / "imagens" / p["imagem"]["revelacao"]).write_bytes(open(c["it"]["revelacao"], "rb").read())
        banco.perguntas.append(p)
        av = c["av"]
        est["familias"][av["familia"]] = est["familias"].get(av["familia"], 0) + 1
        est["niveis"][str(av["nivel"])] = est["niveis"].get(str(av["nivel"]), 0) + 1
        est["registradas"] += 1
        if c["ent"]:
            c["ent"]["status"] = "usada"
        registradas.append(p)
        numero += 1
        registrar_log(lote_id, "figuras", "registrada", f"{av['familia']}, nível {av['nivel']}", {"id": qid, **c["resumo"]})
    for e in dados["entidades"]:
        if e.get("status") == "em_uso":
            e["status"] = "reprovada"
    gravar_json(catalogo_arquivo(cat["id"]), dados)
    banco.estado["concluidas"].append(lote_id)
    banco.salvar()
    registrar_log(lote_id, "figuras", "concluida", f"{len(registradas)} de {len(itens)} figuras entraram no banco")
    print(f"  → {len(registradas)} de {len(itens)} figuras entraram no banco.", flush=True)
    return registradas
