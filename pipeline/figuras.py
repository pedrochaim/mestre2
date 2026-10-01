"""Etapa de figuras (MANIFESTO §6 e §17): perguntas de reconhecimento a partir de catálogos curados.

Um lote de figuras de um catálogo passa por:
  0. curadoria: se o catálogo tem poucas entidades livres, o LLM propõe mais, em três camadas;
  1. seleção e preparo: escolhe entidades das três camadas, baixa a imagem principal (Wikidata/Commons ou PokéAPI),
     confere a licença, põe fundo branco e guarda um trecho da Wikipédia;
  2. avaliação: o LLM abre cada imagem, reprova as ruins e escreve a pergunta (família e nível sugeridos);
  3. registro: liga à âncora (respeitando a saturação), copia a imagem e grava no banco.
Cada passo grava seu arquivo em trabalho/<lote>/ e é pulado se já existe, como nas encomendas de texto.
"""

import json
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from collections import Counter

from PIL import Image

import banco as bc
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
    import io
    im = Image.open(io.BytesIO(dados))
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        fundo = Image.new("RGB", im.size, (255, 255, 255))
        fundo.paste(im, mask=im.split()[3])
        im = fundo
    im = im.convert("RGB")
    im.thumbnail((lado, lado))
    im.save(destino, "JPEG", quality=88)


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
    arquivo = pasta / f"{indice:02d}.jpg"
    _salvar_jpeg(dados, arquivo, 700)
    return {"imagem": str(arquivo), "origem": ARTE_POKEMON.format(num), "autor": "© Nintendo / Creatures / GAME FREAK",
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
                                        "imagem", "trecho", "fonte")} for it in itens]
        prompt = preencher(ler_texto(PROMPTS_DIR / "figuras.md"), id=cat["id"], descricao=cat["descricao"],
                           destinos=json.dumps({i: f"{t} › {s}" for i, (t, s) in enumerate(cat["destinos"])}, ensure_ascii=False),
                           familias=", ".join(cat["familias"]), enunciado=enunciado,
                           itens=json.dumps(entrada, ensure_ascii=False, indent=2), manifesto=manifesto_para_llm())
        c = config["figuras"]
        avaliacao = chamar(prompt, ler_json(ESQUEMAS_DIR / "saida_figuras.json"), c["modelo"], c["esforco"],
                           ferramentas=["Read"], tempo_limite=c["tempo_limite"], diretorios=[pasta])
        gravar_json(av_arq, avaliacao)

    # 3. registro
    print("  3. registro…", flush=True)
    return _registrar(cat, itens, avaliacao, banco, canon, lote_id, est)


def _registrar(cat, itens, avaliacao, banco, canon, lote_id, est):
    por_indice = {it["indice"]: it for it in itens}
    idx = banco.indice_nomes()
    por_ancora = {k: list(v) for k, v in banco.perguntas_por_ancora().items()}
    dados = carregar_catalogo(cat["id"])
    status = {normalizar(e["nome"]): e for e in dados["entidades"]}
    numero = banco.proximo_numero()
    registradas = []
    for av in avaliacao["itens"]:
        it = por_indice.get(av["indice"])
        if it is None:
            continue
        ent = status.get(normalizar(it["nome"]))
        resumo = {"entidade": it["nome"], "pergunta": av.get("pergunta")}
        if not av["aprovado"]:
            registrar_log(lote_id, "figuras", "reprovada", av["motivo"], resumo)
            if ent:
                ent["status"] = "reprovada"
            continue
        faltam = [k for k in ("familia", "nivel", "destino", "tipo", "pergunta", "resposta", "ancora") if k not in av]
        if faltam or not 0 <= av["destino"] < len(cat["destinos"]) or av["familia"] not in FAMILIAS:
            registrar_log(lote_id, "figuras", "descartada", f"avaliação incompleta: {faltam}", resumo)
            continue
        tema, subtema = cat["destinos"][av["destino"]]
        a = av["ancora"]
        nomes = [a["nome"], it["nome"], *a.get("variantes", [])]
        id_ancora = next((idx[normalizar(n)] for n in nomes if normalizar(n) in idx), None)
        nova = None
        if id_ancora is None:
            nova = {"id": banco.novo_id_ancora(a["nome"]), "nome": a["nome"], "descricao": a["descricao"]}
            variantes = [v for v in dict.fromkeys([it["nome"], *a.get("variantes", [])]) if normalizar(v) != normalizar(a["nome"])]
            if variantes:
                nova["variantes"] = variantes
            nova["fontes"] = it["fonte"]
            erros = bc.erros_ancora(nova)
            if erros:
                registrar_log(lote_id, "figuras", "descartada", "âncora inválida: " + "; ".join(erros), resumo)
                continue
            id_ancora = nova["id"]
        id_ancora = banco.resolver(id_ancora) or id_ancora
        ps = por_ancora.get(id_ancora, [])
        if len(ps) >= MAX_POR_ANCORA or sum(1 for p in ps if "imagem" in p) >= MAX_FIGURA_POR_ANCORA:
            registrar_log(lote_id, "figuras", "descartada", f"âncora {id_ancora} saturada", resumo)
            continue
        qid = f"q{numero:05d}"
        p = {"id": qid, "tema": tema, "subtema": subtema, "ancora": id_ancora, "angulo": FAMILIAS[av["familia"]],
             "tipo": av["tipo"], "pergunta": av["pergunta"], "resposta": av["resposta"]}
        if av["tipo"] == "multipla":
            p["distratores"] = av.get("distratores", [])
        p["fonte"] = it["fonte"]
        p["imagem"] = {"arquivo": qid + ".jpg", "origem": it["origem"], "autor": it["autor"], "licenca": it["licenca"]}
        erros = bc.erros_pergunta(p, canon)
        if erros:
            registrar_log(lote_id, "figuras", "descartada", "; ".join(erros), resumo)
            continue
        if nova:
            banco.adicionar_ancora(nova)
            idx[normalizar(nova["nome"])] = nova["id"]
        (BANCO_DIR / "imagens" / (qid + ".jpg")).write_bytes(open(it["imagem"], "rb").read())
        banco.perguntas.append(p)
        por_ancora.setdefault(id_ancora, []).append(p)
        est["familias"][av["familia"]] = est["familias"].get(av["familia"], 0) + 1
        est["niveis"][str(av["nivel"])] = est["niveis"].get(str(av["nivel"]), 0) + 1
        est["registradas"] += 1
        if ent:
            ent["status"] = "usada"
        registradas.append(p)
        numero += 1
        registrar_log(lote_id, "figuras", "registrada", f"{av['familia']}, nível {av['nivel']}", {"id": qid, **resumo})
    for e in dados["entidades"]:
        if e.get("status") == "em_uso":
            e["status"] = "reprovada"
    gravar_json(catalogo_arquivo(cat["id"]), dados)
    banco.estado["concluidas"].append(lote_id)
    banco.salvar()
    registrar_log(lote_id, "figuras", "concluida", f"{len(registradas)} de {len(itens)} figuras entraram no banco")
    print(f"  → {len(registradas)} de {len(itens)} figuras entraram no banco.", flush=True)
    return registradas
