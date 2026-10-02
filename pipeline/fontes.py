"""Trechos das fontes para o crítico (MANIFESTO §11).

Antes da crítica, o pipeline baixa as páginas citadas em `fonte` e separa, de cada uma, a abertura e as
passagens mais ligadas à pergunta. O crítico confere o fato nesses trechos, numa chamada só e sem acesso à
web. Abrir as páginas pelo próprio modelo custava de 12 a 22 turnos por lote, e cada turno relia o contexto
inteiro.

Artigos da Wikipédia vêm pela API (texto puro). Outras páginas são baixadas e têm o HTML removido. Quando as
fontes de uma pergunta são só da Wikipédia em inglês, o artigo equivalente em português também é lido: as
passagens são escolhidas por palavras em comum com a pergunta, que está em português, e num texto em inglês
só nomes e números casam (no lote de Mamíferos, 27 de 50 fatos ficaram sem trecho por isso). Os trechos
ficam em trabalho/<encomenda>/03_fontes.json, para não baixar de novo se a etapa for refeita.
"""

import html
import json
import re
import subprocess
import urllib.error
import urllib.parse
import urllib.request

from comum import gravar_json, ler_json, normalizar

CABECALHO = {"User-Agent": "Mestre2/0.1 (quiz; https://github.com/pedrochaim/mestre2)"}
MAX_FONTES = 3          # fontes lidas por pergunta
TAM_ABERTURA = 400      # caracteres da abertura da página
TAM_PASSAGENS = 1500    # caracteres das passagens escolhidas, por fonte
TAM_BLOCO = 500         # parágrafos longos são cortados em blocos deste tamanho, por frases
PALAVRAS_VAZIAS = set(normalizar(
    "para pela pelo pelas pelos como qual quais que quem onde quando qual este esta esse essa isso "
    "aquele aquela depois antes entre sobre seus suas dele dela deles delas nome nomes numa numas "
    "with from that this which what when where their there were have been into also about after "
    "sendo foram eram seria teria anos século seculo"
).split())


def _baixar(url, bruto=False):
    req = urllib.request.Request(url, headers=CABECALHO)
    with urllib.request.urlopen(req, timeout=30) as r:
        dados = r.read(3_000_000)
    return dados if bruto else json.loads(dados)


def _wikipedia(url):
    """(situação, texto) de um artigo da Wikipédia. situação: ok, inexistente ou desambiguacao."""
    partes = urllib.parse.urlsplit(url)
    lingua = partes.netloc.split(".")[0]
    titulo = urllib.parse.unquote(partes.path[len("/wiki/"):])
    dados = _baixar(f"https://{lingua}.wikipedia.org/w/api.php?" + urllib.parse.urlencode(
        {"action": "query", "prop": "extracts|pageprops", "explaintext": 1, "redirects": 1,
         "titles": titulo, "format": "json"}))
    for pagina in dados.get("query", {}).get("pages", {}).values():
        if "missing" in pagina:
            return "inexistente", ""
        if "disambiguation" in pagina.get("pageprops", {}):
            return "desambiguacao", pagina.get("extract", "")
        return "ok", pagina.get("extract", "")
    return "inexistente", ""


def equivalente_pt(url):
    """URL do artigo equivalente na Wikipédia em português, ou None."""
    partes = urllib.parse.urlsplit(url)
    titulo = urllib.parse.unquote(partes.path[len("/wiki/"):])
    try:
        dados = _baixar("https://en.wikipedia.org/w/api.php?" + urllib.parse.urlencode(
            {"action": "query", "prop": "langlinks", "lllang": "pt", "redirects": 1,
             "titles": titulo, "format": "json"}))
    except (urllib.error.URLError, TimeoutError, ValueError, json.JSONDecodeError):
        return None
    for pagina in dados.get("query", {}).get("pages", {}).values():
        for link in pagina.get("langlinks", []):
            return "https://pt.wikipedia.org/wiki/" + urllib.parse.quote(link["*"].replace(" ", "_"))
    return None


def _wikipedia_en(url):
    partes = urllib.parse.urlsplit(url)
    return partes.netloc.split(".")[0] == "en" and partes.netloc.endswith("wikipedia.org")         and partes.path.startswith("/wiki/")


def _wikipedia_pt(url):
    partes = urllib.parse.urlsplit(url)
    return partes.netloc.split(".")[0] == "pt" and partes.netloc.endswith("wikipedia.org")


def _pagina(url):
    """(situação, texto) de uma página qualquer, sem o HTML."""
    bruto = _baixar(url, bruto=True).decode("utf-8", errors="replace")
    bruto = re.sub(r"(?is)<(script|style|nav|header|footer|noscript)\b.*?</\1>", " ", bruto)
    bruto = re.sub(r"(?i)<(br|/p|/div|/li|/h\d)\b[^>]*>", "\n", bruto)
    texto = html.unescape(re.sub(r"<[^>]+>", " ", bruto))
    linhas = [re.sub(r"[ \t\r\f\v]+", " ", l).strip() for l in texto.split("\n")]
    return "ok", "\n".join(l for l in linhas if len(l) > 40)


def _curl_json(url, *extra):
    """O Fandom bloqueia o cliente HTTP do Python; o curl com cabeçalho de navegador passa."""
    r = subprocess.run(["curl", "-s", "-L", "--max-time", "60", "-A", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36", *extra, url],
                       capture_output=True)
    try:
        return json.loads(r.stdout) if r.returncode == 0 and r.stdout else None
    except json.JSONDecodeError:
        return None


def _sem_html(texto):
    texto = re.sub(r"(?is)<(script|style|table|aside)\b.*?</\1>", " ", texto or "")
    texto = re.sub(r"(?i)<(br|/p|/div|/li|/h\d)\b[^>]*>", "\n", texto)
    return html.unescape(re.sub(r"<[^>]+>", " ", texto))


def _fandom(url):
    """Página de um wiki do Fandom (personagens de anime, mangá e quadrinhos), pela API do MediaWiki."""
    partes = urllib.parse.urlsplit(url)
    antes, _, titulo = partes.path.partition("/wiki/")
    d = _curl_json(f"https://{partes.netloc}{antes}/api.php?" + urllib.parse.urlencode(
        {"action": "parse", "page": urllib.parse.unquote(titulo), "prop": "text", "redirects": 1, "format": "json"}))
    if not d:
        return "inacessivel", ""
    if "error" in d:
        return "inexistente", ""
    return "ok", _sem_html(d["parse"]["text"]["*"])


def _anilist(url):
    """Personagem do AniList, pela API: a página do site é montada em JavaScript."""
    achado = re.search(r"/character/(\d+)", url)
    if not achado:
        return "inacessivel", ""
    q = "query($id:Int){Character(id:$id){name{full} description}}"
    d = _curl_json("https://graphql.anilist.co", "-X", "POST", "-H", "Content-Type: application/json",
                   "-d", json.dumps({"query": q, "variables": {"id": int(achado.group(1))}}))
    c = ((d or {}).get("data") or {}).get("Character")
    if not c:
        return "inexistente", ""
    return "ok", c["name"]["full"] + ". " + _sem_html(re.sub(r"~!.*?!~", " ", c.get("description") or "", flags=re.S))


def baixar_fonte(url):
    """(situação, texto). situação: ok, inexistente, desambiguacao ou inacessivel."""
    try:
        partes = urllib.parse.urlsplit(url)
        if partes.netloc.endswith("wikipedia.org") and partes.path.startswith("/wiki/"):
            return _wikipedia(url)
        if partes.netloc.endswith(".fandom.com") and "/wiki/" in partes.path:
            return _fandom(url)
        if partes.netloc == "anilist.co":
            return _anilist(url)
        return _pagina(url)
    except urllib.error.HTTPError as e:
        return ("inexistente" if e.code in (404, 410) else "inacessivel"), ""
    except (urllib.error.URLError, TimeoutError, ValueError, json.JSONDecodeError):
        return "inacessivel", ""


def _blocos(texto):
    """Parágrafos do texto, sem títulos de seção, com os longos cortados por frases."""
    blocos = []
    for par in texto.split("\n"):
        par = par.strip()
        if not par or re.fullmatch(r"=+.*=+", par):
            continue
        atual = ""
        for frase in re.split(r"(?<=[.!?])\s+", par):
            if atual and len(atual) + len(frase) > TAM_BLOCO:
                blocos.append(atual)
                atual = ""
            atual = f"{atual} {frase}".strip()
        if atual:
            blocos.append(atual)
    return blocos


def _termos(texto):
    """Radicais (6 letras) das palavras significativas do texto."""
    return {p[:6] for p in normalizar(texto).split()
            if (len(p) >= 4 or p.isdigit()) and p not in PALAVRAS_VAZIAS}


def escolher_trechos(texto, item):
    """A abertura da página e as passagens que mais compartilham termos com a pergunta e a resposta."""
    blocos = _blocos(texto)
    if not blocos:
        return ""
    ancora = item["_ancora"]
    termos_resposta = _termos(item["resposta"])
    termos = _termos(" ".join([item["pergunta"], ancora["nome"], *ancora.get("variantes", [])])) - termos_resposta

    def nota(bloco):
        t = _termos(bloco)
        return 3 * len(t & termos_resposta) + len(t & termos)

    abertura = blocos[0][:TAM_ABERTURA]
    candidatos = sorted(((nota(b), i) for i, b in enumerate(blocos[1:], 1)), reverse=True)
    escolhidos, total = [], 0
    for n, i in candidatos:
        if n == 0 or total + len(blocos[i]) > TAM_PASSAGENS:
            continue
        escolhidos.append(i)
        total += len(blocos[i])
    partes = [abertura] + [blocos[i] for i in sorted(escolhidos)]
    return "\n[…]\n".join(partes)


def trechos_do_lote(itens, arquivo):
    """{indice: [{url, situacao, texto}]} para cada item. Usa o arquivo como cache."""
    cache = ler_json(arquivo, {})
    paginas = {}
    for it in itens:
        chave = str(it["_indice"])
        if chave in cache:
            continue
        lista = []
        urls = list(it["fonte"][:MAX_FONTES])
        if not any(_wikipedia_pt(u) for u in urls):
            en = next((u for u in urls if _wikipedia_en(u)), None)
            pt = equivalente_pt(en) if en else None
            if pt:
                urls.append(pt)
        for url in urls:
            if url not in paginas:
                paginas[url] = baixar_fonte(url)
            situacao, texto = paginas[url]
            entrada = {"url": url, "situacao": situacao,
                       "texto": escolher_trechos(texto, it) if situacao == "ok" else texto[:TAM_ABERTURA]}
            if url not in it["fonte"]:
                entrada["observacao"] = "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
            lista.append(entrada)
        cache[chave] = lista
    gravar_json(arquivo, cache)
    return cache
