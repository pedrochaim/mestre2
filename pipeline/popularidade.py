"""Popularidade das âncoras na Wikipédia e dificuldade estimada das perguntas (MANIFESTO §4 e §10).

Para cada âncora, acha o artigo na Wikipédia a partir das suas fontes, resolve o item do Wikidata e soma as
visitas de pessoas (sem robôs) aos artigos em português e em inglês nos últimos 12 meses completos. Grava
a média mensal na âncora, em "popularidade". A dificuldade de cada pergunta sai da popularidade da sua
âncora: quanto menos gente procura a entidade, mais difícil a pergunta tende a ser.

Não usa LLM nem dados de partidas. É uma estimativa: não enxerga o ângulo, e um fato obscuro sobre algo
famoso continua difícil. Por isso é APENAS ILUSTRATIVA: é exibida no app e não deve orientar nenhuma decisão
(sorteio, proporções do banco, encomendas, geração ou crítica).
"""

import datetime as dt
import json
import math
import time
import urllib.error
import urllib.parse
import urllib.request

from comum import BANCO_DIR, gravar_json, ler_json

ANCORAS = BANCO_DIR / "ancoras.json"
PERGUNTAS = BANCO_DIR / "perguntas.json"
CABECALHO = {"User-Agent": "Mestre2/0.1 (quiz; https://github.com/pedrochaim/mestre2)"}
LINGUAS = ("pt", "en")


def _get(url):
    for tentativa in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=CABECALHO), timeout=30) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            if tentativa == 2:
                raise
        except urllib.error.URLError:
            if tentativa == 2:
                raise
        time.sleep(2 * (tentativa + 1))
    return None


def periodo_12_meses(hoje=None):
    """Últimos 12 meses completos: (primeiro dia do mês inicial, último dia do mês final)."""
    hoje = hoje or dt.date.today()
    fim = hoje.replace(day=1) - dt.timedelta(days=1)
    inicio = (fim.replace(day=1) - dt.timedelta(days=334)).replace(day=1)
    return inicio, fim


def artigo_nas_fontes(fontes):
    """(língua, título) do primeiro artigo da Wikipédia nas fontes, preferindo português."""
    achados = []
    for url in fontes:
        partes = urllib.parse.urlsplit(url)
        lingua = partes.netloc.split(".")[0]
        if partes.netloc.endswith("wikipedia.org") and partes.path.startswith("/wiki/") and lingua in LINGUAS:
            achados.append((lingua, urllib.parse.unquote(partes.path[len("/wiki/"):])))
    achados.sort(key=lambda a: LINGUAS.index(a[0]))
    return achados[0] if achados else None


def item_wikidata(lingua, titulo):
    dados = _get(f"https://{lingua}.wikipedia.org/w/api.php?" + urllib.parse.urlencode(
        {"action": "query", "prop": "pageprops", "ppprop": "wikibase_item", "redirects": 1,
         "titles": titulo, "format": "json"}))
    for pagina in (dados or {}).get("query", {}).get("pages", {}).values():
        return pagina.get("pageprops", {}).get("wikibase_item")
    return None


def titulos(qid):
    """{língua: título} dos artigos do item do Wikidata."""
    dados = _get("https://www.wikidata.org/w/api.php?" + urllib.parse.urlencode(
        {"action": "wbgetentities", "ids": qid, "props": "sitelinks",
         "sitefilter": "|".join(f"{l}wiki" for l in LINGUAS), "format": "json"}))
    links = (dados or {}).get("entities", {}).get(qid, {}).get("sitelinks", {})
    return {l: links[f"{l}wiki"]["title"] for l in LINGUAS if f"{l}wiki" in links}


def visitas_mensais(lingua, titulo, inicio, fim):
    artigo = urllib.parse.quote(titulo.replace(" ", "_"), safe="")
    dados = _get(f"https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/{lingua}.wikipedia/"
                 f"all-access/user/{artigo}/monthly/{inicio:%Y%m%d}00/{fim:%Y%m%d}00")
    meses = (dados or {}).get("items", [])
    return round(sum(m["views"] for m in meses) / 12)


def medir(ancora, inicio, fim):
    artigo = artigo_nas_fontes(ancora.get("fontes", []))
    if not artigo:
        return None
    qid = item_wikidata(*artigo)
    nomes = titulos(qid) if qid else {artigo[0]: artigo[1]}
    pop = {"periodo": f"{inicio:%Y-%m}/{fim:%Y-%m}"}
    if qid:
        pop["wikidata"] = qid
    for lingua in LINGUAS:
        pop[lingua] = visitas_mensais(lingua, nomes[lingua], inicio, fim) if lingua in nomes else 0
        time.sleep(.1)
    return pop


def atualizar_popularidade(forcar=False):
    """Mede as âncoras que ainda não têm popularidade do período atual (ou todas, com forcar)."""
    inicio, fim = periodo_12_meses()
    periodo = f"{inicio:%Y-%m}/{fim:%Y-%m}"
    ancoras = ler_json(ANCORAS, [])
    medidas = 0
    for a in ancoras:
        if a.get("fundida_em") or (not forcar and a.get("popularidade", {}).get("periodo") == periodo):
            continue
        pop = medir(a, inicio, fim)
        if pop:
            a["popularidade"] = pop
            medidas += 1
        else:
            print(f"  sem artigo da Wikipédia nas fontes: {a['id']}")
    gravar_json(ANCORAS, ancoras)
    return medidas


# Pontuação em "visitas mensais equivalentes em português": o português pesa 2/3 (é o público do jogo) e
# o inglês 1/3 (fama mundial), convertido para a escala do português (no banco, o português tem cerca de
# 1/15 das visitas do inglês). Média geométrica, porque as visitas variam em ordens de grandeza. Se faltar
# o artigo numa das línguas, vale só a outra.
EN_PARA_PT = 1 / 15
# Faixas fixas, para a dificuldade de uma pergunta não mudar quando o banco cresce:
# pontuação ≥ 20 000 → 1 (fácil) · ≥ 5 000 → 2 · ≥ 1 500 → 3 · ≥ 500 → 4 · abaixo → 5 (difícil).
FAIXAS = [20000, 5000, 1500, 500]


def pontuacao(pop):
    pt, en = pop.get("pt", 0), pop.get("en", 0) * EN_PARA_PT
    if pt and en:
        return 10 ** ((2 * math.log10(pt) + math.log10(en)) / 3)
    return pt or en


def dificuldade(pop):
    s = pontuacao(pop)
    return next((i + 1 for i, faixa in enumerate(FAIXAS) if s >= faixa), 5)


def atualizar_dificuldade():
    """Grava em cada pergunta a dificuldade estimada pela popularidade da sua âncora."""
    ancoras = {a["id"]: a for a in ler_json(ANCORAS, [])}
    perguntas = ler_json(PERGUNTAS, [])
    for p in perguntas:
        a = ancoras.get(p["ancora"])
        while a and a.get("fundida_em"):
            a = ancoras.get(a["fundida_em"])
        if a and a.get("popularidade"):
            p["dificuldade"] = dificuldade(a["popularidade"])
        else:
            p.pop("dificuldade", None)
    gravar_json(PERGUNTAS, perguntas)
    return perguntas


def atualizar(forcar=False):
    medidas = atualizar_popularidade(forcar)
    perguntas = atualizar_dificuldade()
    contagem = [sum(1 for p in perguntas if p.get("dificuldade") == d) for d in range(1, 6)]
    sem = sum(1 for p in perguntas if "dificuldade" not in p)
    print(f"{medidas} âncora(s) medida(s). Perguntas por dificuldade (1 a 5): {contagem}"
          + (f"; {sem} sem estimativa" if sem else ""))


if __name__ == "__main__":
    atualizar()
