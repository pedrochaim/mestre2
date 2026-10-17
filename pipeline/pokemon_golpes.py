"""Perguntas "Qual é esse ataque?" do modo Pokémon, feitas só de dados, sem LLM (manifesto/modo_pokemon.md).

A figura é um cartão com os dados do golpe: o tipo, a categoria (físico ou especial), o poder, a precisão, o PP e
a região de estreia. A pergunta pede o nome, em múltipla escolha. Os dados e os nomes vêm das tabelas do PokéAPI;
como elas não têm os nomes brasileiros dos golpes, a resposta e os distratores usam o nome em inglês, como manda a
regra de nomes do modo na dúvida. A revelação é o mesmo cartão com o nome do golpe. O cartão vai para a casa
"Cartão de atributos" do tabuleiro.

Só entram golpes de dano (os de status não têm poder para distinguir um do outro) que algum pokémon aprende, cujo
cartão é único (nenhum outro golpe tem o mesmo tipo, categoria, poder, precisão, PP e geração), entre os mais
conhecidos: os que mais espécies aprendem (CONHECIDOS). Os distratores são golpes do mesmo tipo, de preferência da
mesma categoria e com poder parecido. Cada golpe tem um cartão só.

Uso (na raiz do projeto):
    python pipeline/pokemon_golpes.py executar --quantidade 100
    python pipeline/pokemon_golpes.py amostras --pasta <pasta>      # três cartões, sem gravar no banco
Cada passo grava seu arquivo em trabalho/<lote>/ e é pulado se já existe.
"""
import argparse
import io
import random
import sys
from collections import Counter, defaultdict
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)

from PIL import Image  # noqa: E402

import banco as bc  # noqa: E402
import popularidade  # noqa: E402
import pokemon_dados as pd  # noqa: E402
from comum import BANCO_DIR, TRABALHO_DIR, carregar_canon, gravar_json, ler_json, normalizar, registrar_log  # noqa: E402

TABELAS = ["moves", "move_names", "pokemon_moves"]
CONHECIDOS = 220            # quantos golpes, dos que mais espécies aprendem, podem virar cartão
# Golpes cujo tipo muda (com o pokémon, o clima, o item, a Teracristalização): o cartão mostraria um tipo enganoso.
TIPO_VARIAVEL = {"hidden-power", "weather-ball", "tera-blast", "judgment", "multi-attack", "techno-blast",
                 "natural-gift", "revelation-dance", "terrain-pulse", "raging-bull", "ivy-cudgel", "aura-wheel",
                 "tera-starstorm"}
CATEGORIAS = {"2": ("Físico", "#c92112"), "3": ("Especial", "#4f5870")}
BULBAPEDIA_GOLPE = "https://bulbapedia.bulbagarden.net/wiki/{}_(move)"
# Origem do cartão: a tabela de golpes do PokéAPI, de onde saem os dados.
POKEAPI_GOLPE = "https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/moves.csv"
AUTOR = "Mestre2, com dados do PokéAPI"
LICENCA = "Dados de jogo; cartão desenhado pelo Mestre2"
SUBTEMA_COLECAO = "Jogos da Série Principal"


def carregar_golpes(pasta):
    """{id: {id, ident, nome, tipo, categoria, poder, precisao, pp, geracao, especies}} dos golpes de dano que algum
    pokémon aprende, com `unico` verdadeiro quando nenhum outro tem o mesmo cartão."""
    (pasta / "csv").mkdir(parents=True, exist_ok=True)
    t = {n: pd._tabela(pasta / "csv", n) for n in TABELAS}
    nomes = {r["move_id"]: r["name"] for r in t["move_names"] if r["local_language_id"] == "9"}
    especies = defaultdict(set)
    for r in t["pokemon_moves"]:
        if int(r["pokemon_id"]) < 10000:      # só as formas padrão
            especies[r["move_id"]].add(r["pokemon_id"])
    golpes = {}
    for m in t["moves"]:
        if not m["power"] or m["damage_class_id"] not in CATEGORIAS or not especies[m["id"]] or m["id"] not in nomes                 or m["identifier"] in TIPO_VARIAVEL:
            continue
        golpes[m["id"]] = {"id": m["id"], "ident": m["identifier"], "nome": nomes[m["id"]], "tipo": int(m["type_id"]),
                           "categoria": m["damage_class_id"], "poder": int(m["power"]),
                           "precisao": int(m["accuracy"]) if m["accuracy"] else None, "pp": int(m["pp"]),
                           "geracao": int(m["generation_id"]), "especies": len(especies[m["id"]])}
    cartao = lambda g: (g["tipo"], g["categoria"], g["poder"], g["precisao"], g["pp"], g["geracao"])
    repetidos = Counter(cartao(g) for g in golpes.values())
    for g in golpes.values():
        g["unico"] = repetidos[cartao(g)] == 1
    return golpes


def conhecidos(golpes):
    return sorted((g for g in golpes.values() if g["unico"]), key=lambda g: -g["especies"])[:CONHECIDOS]


def distratores(g, golpes, rng):
    """Três golpes do mesmo tipo, de preferência conhecidos, da mesma categoria e com poder parecido."""
    fama = {x["id"] for x in conhecidos(golpes)}
    cands =[((0 if x["id"] in fama else 2) + (0 if x["categoria"] == g["categoria"] else 1)
              + abs(x["poder"] - g["poder"]) / 40 + rng.random(), x["nome"])
             for x in golpes.values() if x["tipo"] == g["tipo"] and x["id"] != g["id"]]
    escolhidos = [n for _, n in sorted(cands)[:3]]
    return escolhidos if len(escolhidos) == 3 else None


CSS = pd.CSS + """
.cartao{height:auto}
.cat{padding:6px 16px;border-radius:999px;color:#fff;font-size:20px;border:2px solid #0004}
.nome{font-size:30px;color:#ffcb05;line-height:1;white-space:nowrap}
.topo{min-height:56px}
.l{grid-template-columns:110px 70px 1fr}
.estreia{margin-top:10px;font-size:20px;color:#ffcb05}.estreia span{color:#eee}"""


def html_golpe(g, revelado=False):
    tipo = f'<span class="tipo" style="background:{pd.TIPOS[g["tipo"]][1]}">{pd.TIPOS[g["tipo"]][0]}</span>'
    cat = f'<span class="cat" style="background:{CATEGORIAS[g["categoria"]][1]}">{CATEGORIAS[g["categoria"]][0]}</span>'
    tamanho = 30 if len(g["nome"]) <= 11 else 24 if len(g["nome"]) <= 15 else 20   # nomes longos cabem na linha
    marca = f'<span class="nome" style="font-size:{tamanho}px">{g["nome"]}</span>' if revelado else '<span class="q">?</span>'
    linhas = [("Poder", str(g["poder"]), g["poder"] / 250, "#FF5959"),
              ("Precisão", f'{g["precisao"]}%' if g["precisao"] else "—", (g["precisao"] or 100) / 100, "#9DB7F5"),
              ("PP", str(g["pp"]), g["pp"] / 40, "#A7DB8D")]
    corpo = "".join(f'<div class="l"><span>{n}</span><b>{v}</b><span class="barra"><i style="width:{min(f, 1) * 100:.1f}%;'
                    f'background:{c}"></i></span></div>' for n, v, f, c in linhas)
    return (f'<!doctype html><meta charset="utf-8"><style>{CSS}</style><div class="cartao"><div class="topo">{marca}'
            f'<div class="tipos">{tipo}{cat}</div></div>{corpo}<div class="estreia">Estreia: <span>'
            f'{pd.REGIOES[g["geracao"]]} ({g["geracao"]}ª geração)</span></div></div>')


def _foto(pagina, html):
    pagina.set_content(html)
    im = Image.open(io.BytesIO(pagina.locator(".cartao").screenshot(omit_background=True))).convert("RGBA")
    fundo = Image.new("RGB", im.size, (20, 20, 20))
    fundo.paste(im, mask=im.split()[3])
    return fundo


def desenhar(g, destino, pagina):
    _foto(pagina, html_golpe(g)).save(f"{destino}.jpg", "JPEG", quality=90)
    _foto(pagina, html_golpe(g, revelado=True)).save(f"{destino}_revelacao.jpg", "JPEG", quality=88)


def _pagina(pw):
    b = pw.chromium.launch(channel="chrome")
    return b, b.new_page(viewport=dict(width=560, height=380), device_scale_factor=2)


def indice_golpes(banco):
    """{nome normalizado: id} das âncoras ativas que são golpes (a descrição ou a fonte dizem que é golpe)."""
    indice = {}
    for a in banco.ancoras_ativas():
        if "golpe" in a.get("descricao", "").lower() or any("_(move)" in f for f in a.get("fontes", [])):
            for nome in [a["nome"], *a.get("variantes", [])]:
                indice.setdefault(normalizar(nome), a["id"])
    return indice


def escolher(golpes, banco, n, rng):
    """[pergunta] do lote: os golpes conhecidos que ainda não têm cartão, dos mais aprendidos para os menos."""
    indice, da_colecao = indice_golpes(banco), banco.colecao_por_ancora("pokemon")
    lote = []
    for g in conhecidos(golpes):
        if len(lote) >= n:
            break
        aid = indice.get(normalizar(g["nome"]))
        if aid and any(bc.figura_livre(q) == "cartao" for q in da_colecao.get(aid, [])):
            continue
        ds = distratores(g, golpes, rng)
        if ds:
            lote.append({"golpe": g["id"], "pergunta": bc.PERGUNTA_GOLPE, "resposta": g["nome"], "distratores": ds})
    rng.shuffle(lote)
    return lote


def proximo_lote(banco):
    feitos = [x for x in banco.estado["concluidas"] if x.startswith("pokemon_golpes_")]
    return f"pokemon_golpes_{len(feitos) + 1:03d}"


def executar(lote_id, quantidade):
    banco, canon = bc.Banco(), carregar_canon()
    if lote_id in banco.estado["concluidas"]:
        sys.exit(f"O lote {lote_id} já foi registrado.")
    pasta = TRABALHO_DIR / lote_id
    pasta.mkdir(parents=True, exist_ok=True)
    golpes = carregar_golpes(pasta)
    arq = pasta / "01_selecao.json"
    selecao = ler_json(arq)
    if selecao is None:
        selecao = escolher(golpes, banco, quantidade, random.Random(lote_id))
        gravar_json(arq, selecao)
    print(f"{lote_id}: {len(selecao)} perguntas")
    if not (pasta / "02_figuras.json").exists():
        from playwright.sync_api import sync_playwright
        (pasta / "figuras").mkdir(exist_ok=True)
        with sync_playwright() as pw:
            b, pagina = _pagina(pw)
            for i, it in enumerate(selecao, 1):
                desenhar(golpes[it["golpe"]], pasta / "figuras" / f"golpe_{it['golpe']}", pagina)
                if i % 25 == 0:
                    print(f"  {i} de {len(selecao)} figuras")
            b.close()
        gravar_json(pasta / "02_figuras.json", selecao)

    numero, registradas = banco.proximo_numero(), []
    indice, da_colecao = indice_golpes(banco), banco.colecao_por_ancora("pokemon")
    for it in selecao:
        g = golpes[it["golpe"]]
        base = pasta / "figuras" / f"golpe_{g['id']}"
        resumo = {"entidade": g["nome"], "familia": "golpe", "pergunta": it["pergunta"]}
        fonte = BULBAPEDIA_GOLPE.format(g["nome"].replace(" ", "_"))
        aid = indice.get(normalizar(g["nome"]))
        if aid is None:
            aid = banco.novo_id_ancora(g["nome"])
            tipo = pd.TIPOS[g["tipo"]][0]
            banco.adicionar_ancora({"id": aid, "nome": g["nome"], "fontes": [fonte],
                                    "descricao": f"Golpe de pokémon do tipo {tipo}, da {g['geracao']}ª geração."})
            indice[normalizar(g["nome"])] = aid
        if any(bc.figura_livre(q) == "cartao" for q in da_colecao.get(aid, [])):
            registrar_log(lote_id, "pokemon_golpes", "descartada", f"âncora {aid} já tem cartão", resumo)
            continue
        qid = f"q{numero:05d}"
        q = {"id": qid, "tema": pd.TEMA, "subtema": pd.SUBTEMA, "ancora": aid, "angulo": "identidade", "tipo": "multipla",
             "pergunta": it["pergunta"], "resposta": it["resposta"], "distratores": it["distratores"], "fonte": [fonte],
             "imagem": {"arquivo": qid + ".jpg", "origem": POKEAPI_GOLPE, "autor": AUTOR,
                        "licenca": LICENCA, "revelacao": qid + "_revelacao.jpg"},
             "colecao": "pokemon", "exclusiva": True, "subtema_colecao": SUBTEMA_COLECAO}
        erros = bc.erros_pergunta(q, canon)
        if erros:
            registrar_log(lote_id, "pokemon_golpes", "descartada", "; ".join(erros), resumo)
            continue
        (BANCO_DIR / "imagens" / (qid + ".jpg")).write_bytes(Path(f"{base}.jpg").read_bytes())
        (BANCO_DIR / "imagens" / (qid + "_revelacao.jpg")).write_bytes(Path(f"{base}_revelacao.jpg").read_bytes())
        banco.perguntas.append(q)
        da_colecao.setdefault(aid, []).append(q)
        registradas.append(q)
        registrar_log(lote_id, "pokemon_golpes", "registrada", f"golpe da {g['geracao']}ª geração", {"id": qid, **resumo})
        numero += 1
    banco.estado["concluidas"].append(lote_id)
    banco.salvar()
    registrar_log(lote_id, "pokemon_golpes", "concluida", f"{len(registradas)} de {len(selecao)} perguntas no banco")
    print(f"→ {len(registradas)} de {len(selecao)} perguntas entraram no banco.")
    popularidade.atualizar()


def amostras(pasta):
    """Três cartões (e as revelações) na pasta indicada; nada vai para o banco."""
    from playwright.sync_api import sync_playwright
    pasta = Path(pasta)
    pasta.mkdir(parents=True, exist_ok=True)
    golpes, rng = carregar_golpes(pasta), random.Random("amostras")
    selecao = escolher(golpes, bc.Banco(), 3, rng)
    with sync_playwright() as pw:
        b, pagina = _pagina(pw)
        for it in selecao:
            desenhar(golpes[it["golpe"]], pasta / f"golpe_{it['golpe']}", pagina)
        b.close()
    gravar_json(pasta / "amostras.json", selecao)
    return selecao


def main():
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="comando", required=True)
    e = sub.add_parser("executar")
    e.add_argument("--lote")
    e.add_argument("--quantidade", type=int, required=True)
    a = sub.add_parser("amostras")
    a.add_argument("--pasta", required=True)
    args = ap.parse_args()
    if args.comando == "amostras":
        for it in amostras(args.pasta):
            print(it)
        return
    executar(args.lote or proximo_lote(bc.Banco()), args.quantidade)


if __name__ == "__main__":
    main()
