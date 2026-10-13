"""Perguntas "tipo e atributos base" do modo Pokémon (manifesto/modo_pokemon.md).

A figura é um cartão com o tipo e os atributos base (HP, Atk, Def, SpA, SpD, Spe e o total) de um pokémon, sem o
nome; a pergunta é "Quem é esse pokémon?", sempre de múltipla escolha, e a revelação é a arte oficial sobre os raios
azuis e amarelos, como nas silhuetas. Tudo sai de dados: os números e os tipos vêm das tabelas do PokéAPI (as mesmas
da Bulbapedia, que bloqueia acesso automatizado), e os distratores são escolhidos por código, entre pokémon que
dividem um tipo com a resposta e têm atributos bem diferentes. Nenhum LLM entra no lote.

Uso (na raiz do projeto):
    python pipeline/pokemon_status.py executar --quantidade 100          # lote novo: pokemon_status_NNN
    python pipeline/pokemon_status.py executar --lote pokemon_status_001  # retoma um lote
Cada passo grava seu arquivo em trabalho/<lote>/ e é pulado se já existe.
"""
import argparse
import csv
import io
import random
import sys
import urllib.parse
from collections import Counter, defaultdict

sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)

from PIL import Image  # noqa: E402

import banco as bc  # noqa: E402
import figuras  # noqa: E402
import popularidade  # noqa: E402
from comum import BANCO_DIR, TRABALHO_DIR, carregar_canon, gravar_json, ler_json, normalizar, registrar_log  # noqa: E402
from etapas import MAX_POR_ANCORA  # noqa: E402

CSV_URL = "https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/{}.csv"
TABELAS = ["pokemon", "pokemon_stats", "pokemon_types", "pokemon_species", "pokemon_species_names"]
PERGUNTA = "De quem são estes tipos e atributos base? Quem é esse pokémon?"
TEMA, SUBTEMA = "Entretenimento", "Jogos Eletrônicos"
AUTOR = "© Nintendo / Creatures / GAME FREAK"
LICENCA = "Arte oficial; uso privado, sem licença livre"

# Tipos pelo id do PokéAPI: nome oficial no Brasil e a cor de cada tipo.
TIPOS = {1: ("Normal", "#A8A77A"), 2: ("Lutador", "#C22E28"), 3: ("Voador", "#A98FF3"), 4: ("Venenoso", "#A33EA1"),
         5: ("Terrestre", "#E2BF65"), 6: ("Pedra", "#B6A136"), 7: ("Inseto", "#A6B91A"), 8: ("Fantasma", "#735797"),
         9: ("Aço", "#B7B7CE"), 10: ("Fogo", "#EE8130"), 11: ("Água", "#6390F0"), 12: ("Planta", "#7AC74C"),
         13: ("Elétrico", "#F7D02C"), 14: ("Psíquico", "#F95587"), 15: ("Gelo", "#96D9D6"), 16: ("Dragão", "#6F35FC"),
         17: ("Sombrio", "#705746"), 18: ("Fada", "#D685AD")}
# Atributos na ordem do PokéAPI (stat_id 1 a 6), com as siglas em inglês e as cores da Bulbapedia.
ATRIBUTOS = [("HP", "#FF5959"), ("Atk", "#F5AC78"), ("Def", "#FAE078"), ("SpA", "#9DB7F5"), ("SpD", "#A7DB8D"),
             ("Spe", "#FA92B2")]
# Quantos pokémon de cada geração entram num lote de 100 (proporcional para outros tamanhos).
POR_GERACAO = {1: 16, 2: 11, 3: 12, 4: 12, 5: 12, 6: 9, 7: 10, 8: 9, 9: 9}
DISTANCIA_MINIMA = 40   # soma das diferenças dos seis atributos entre duas alternativas
MARCA = "atributos base"  # trecho do enunciado que identifica a família no banco


# ---------------------------------------------------------------- dados

def _tabela(pasta, nome):
    arq = pasta / f"{nome}.csv"
    if not arq.exists():
        dados = figuras._get(CSV_URL.format(nome), json_=False)
        if not dados:
            sys.exit(f"Não consegui baixar {nome}.csv do PokéAPI.")
        arq.write_bytes(dados)
    with open(arq, encoding="utf-8", newline="") as f:
        return list(csv.DictReader(f))


def carregar_pokemon(pasta):
    """{id da espécie: {num, nome, geracao, tipos, atributos, final, lendario, cadeia}} só das espécies cuja forma
    padrão tem o mesmo nome da espécie e não troca de forma: Deoxys, Rotom, Urshifu e afins ficam de fora, porque
    tipo e atributos dependem da forma."""
    (pasta / "csv").mkdir(parents=True, exist_ok=True)
    t = {n: _tabela(pasta / "csv", n) for n in TABELAS}
    especies = {int(e["id"]): e for e in t["pokemon_species"]}
    padrao = {int(p["species_id"]): p for p in t["pokemon"] if p["is_default"] == "1"}
    nomes = {int(n["pokemon_species_id"]): n["name"] for n in t["pokemon_species_names"] if n["local_language_id"] == "9"}
    atributos, tipos = defaultdict(dict), defaultdict(list)
    for s in t["pokemon_stats"]:
        atributos[int(s["pokemon_id"])][int(s["stat_id"])] = int(s["base_stat"])
    for x in sorted(t["pokemon_types"], key=lambda x: int(x["slot"])):
        tipos[int(x["pokemon_id"])].append(int(x["type_id"]))
    evoluem = {int(e["evolves_from_species_id"]) for e in especies.values() if e["evolves_from_species_id"]}
    out = {}
    for sid, e in especies.items():
        p = padrao.get(sid)
        if not p or p["identifier"] != e["identifier"] or e["forms_switchable"] == "1" or sid not in nomes:
            continue
        pid = int(p["id"])
        if "♀" in nomes[sid] or "♂" in nomes[sid]:
            continue
        out[sid] = {"num": sid, "nome": nomes[sid], "geracao": int(e["generation_id"]), "tipos": tipos[pid],
                    "atributos": [atributos[pid][i] for i in range(1, 7)], "final": sid not in evoluem,
                    "lendario": e["is_legendary"] == "1" or e["is_mythical"] == "1", "cadeia": e["evolution_chain_id"]}
    return out


def _distancia(a, b):
    return sum(abs(x - y) for x, y in zip(a["atributos"], b["atributos"]))


def distratores(resp, todos, rng):
    """Três pokémon que dividem ao menos um tipo com a resposta, preferindo os de tipos iguais e os da mesma linha
    evolutiva; todos com atributos bem diferentes da resposta e entre si, para a pergunta ter uma só resposta."""
    cands = []
    for p in todos.values():
        comum = set(p["tipos"]) & set(resp["tipos"])
        if p is resp or not comum or _distancia(p, resp) < DISTANCIA_MINIMA:
            continue
        nota = (3 if set(p["tipos"]) == set(resp["tipos"]) else 0) + (2 if p["cadeia"] == resp["cadeia"] else 0) \
            + (1 if p["final"] else 0) + rng.random() * 2
        cands.append((nota, p))
    escolhidos = []
    for _, p in sorted(cands, key=lambda c: -c[0]):
        if all(_distancia(p, q) >= DISTANCIA_MINIMA for q in escolhidos) and \
                sum(q["cadeia"] == p["cadeia"] for q in escolhidos) < 2:
            escolhidos.append(p)
        if len(escolhidos) == 3:
            return escolhidos
    return None


def indice_pokemon(banco):
    """{nome normalizado: id} das âncoras ativas de pokémon (a descrição ou a fonte dizem que é pokémon)."""
    indice = {}
    for a in banco.ancoras_ativas():
        if "pokémon" in a.get("descricao", "").lower() or any("bulbapedia" in f for f in a.get("fontes", [])):
            for nome in [a["nome"], *a.get("variantes", [])]:
                indice.setdefault(normalizar(nome), a["id"])
    return indice


def escolher(todos, banco, quantidade, rng):
    """Pokémon do lote, por geração. A âncora não pode estar saturada nem ter já uma pergunta desta família; ficam
    por último os que já têm uma figura (a silhueta), para a mesma resposta não aparecer duas vezes em figura."""
    por_ancora, indice = banco.perguntas_por_ancora(), indice_pokemon(banco)
    disponiveis = defaultdict(list)
    for p in todos.values():
        aid = indice.get(normalizar(p["nome"]))
        ps = por_ancora.get(aid, []) if aid else []
        if len(ps) >= MAX_POR_ANCORA or sum("imagem" in q for q in ps) >= figuras.MAX_FIGURA_POR_ANCORA or \
                any(MARCA in q["pergunta"] for q in ps):
            continue
        tem_figura = any("imagem" in q for q in ps)
        # Ordem: sem figura antes; formas finais e lendários antes das intermediárias; o resto, sorteado.
        disponiveis[p["geracao"]].append((tem_figura, not (p["final"] or p["lendario"]), rng.random(), p))
    total = sum(POR_GERACAO.values())
    cotas = {g: round(n * quantidade / total) for g, n in POR_GERACAO.items()}
    cotas[1] += quantidade - sum(cotas.values())
    lote = []
    for g, n in cotas.items():
        lote += [x[3] for x in sorted(disponiveis[g], key=lambda x: x[:3])[:n]]
    rng.shuffle(lote)
    return lote


# ---------------------------------------------------------------- figuras

CSS = """body{margin:0;background:transparent;font:16px 'Segoe UI',system-ui,sans-serif}
.cartao{width:520px;height:330px;box-sizing:border-box;padding:22px 26px;border-radius:16px;
  background:radial-gradient(circle at 85% 10%,#3a4ca8,#1f2a66 60%);border:5px solid #ffcb05;font-weight:700;color:#eee}
.topo{display:flex;align-items:center;gap:16px;margin-bottom:14px}
.q{width:52px;height:52px;border-radius:50%;background:#111;color:#ffcb05;display:grid;place-items:center;font-size:34px;
  border:3px solid #ffcb05}
.tipos{display:flex;gap:10px}.tipo{padding:6px 18px;border-radius:999px;color:#fff;text-shadow:0 1px 2px #000a;
  font-size:22px;text-transform:uppercase;border:2px solid #0004}
.l{display:grid;grid-template-columns:76px 54px 1fr;align-items:center;gap:10px;height:31px;font-size:20px}
.l b{text-align:right}.barra{height:14px;background:#0006;border-radius:7px;overflow:hidden}
.barra i{display:block;height:100%;border-radius:7px}.total{border-top:2px solid #fff3;margin-top:4px;color:#ffcb05}"""


def html_cartao(p):
    tipos = "".join(f'<span class="tipo" style="background:{TIPOS[t][1]}">{TIPOS[t][0]}</span>' for t in p["tipos"])
    linhas = "".join(
        f'<div class="l"><span>{n}</span><b>{v}</b><span class="barra"><i style="width:{min(v, 255) / 255 * 100:.1f}%;'
        f'background:{c}"></i></span></div>' for (n, c), v in zip(ATRIBUTOS, p["atributos"]))
    return (f'<!doctype html><meta charset="utf-8"><style>{CSS}</style><div class="cartao"><div class="topo">'
            f'<span class="q">?</span><div class="tipos">{tipos}</div></div>{linhas}<div class="l total"><span>Total'
            f'</span><b>{sum(p["atributos"])}</b><span></span></div></div>')


def preparar_figuras(lote, pasta):
    """Cartão (pergunta) e arte oficial sobre os raios (revelação) de cada pokémon, em trabalho/<lote>/figuras/."""
    from playwright.sync_api import sync_playwright
    destino = pasta / "figuras"
    destino.mkdir(exist_ok=True)
    falta = [p for p in lote if not (destino / f"{p['num']}_revelacao.jpg").exists()]
    if not falta:
        return
    with sync_playwright() as pw:
        b = pw.chromium.launch(channel="chrome")
        pg = b.new_page(viewport=dict(width=560, height=380), device_scale_factor=2)
        for p in falta:
            pg.set_content(html_cartao(p))
            png = pg.locator(".cartao").screenshot(omit_background=True)
            im = Image.open(io.BytesIO(png)).convert("RGBA")
            fundo = Image.new("RGB", im.size, (20, 20, 20))
            fundo.paste(im, mask=im.split()[3])
            fundo.save(destino / f"{p['num']}.jpg", "JPEG", quality=90)
            arte = figuras._get(figuras.ARTE_POKEMON.format(p["num"]), json_=False)
            if not arte:
                print(f"  sem arte oficial: {p['nome']}")
                continue
            figuras._sobre_raios(Image.open(io.BytesIO(arte)).convert("RGBA")).save(
                destino / f"{p['num']}_revelacao.jpg", "JPEG", quality=88)
            print(f"  figura: {p['nome']}")
        b.close()


# ---------------------------------------------------------------- lote

def _descricao(p):
    nomes = [TIPOS[t][0] for t in p["tipos"]]
    tipos = f"do tipo {nomes[0]}" if len(nomes) == 1 else f"dos tipos {nomes[0]} e {nomes[1]}"
    return f"Pokémon {tipos}, número {p['num']} da Pokédex Nacional."


def _fonte(p):
    return figuras.BULBAPEDIA.format(urllib.parse.quote(p["nome"].replace(" ", "_")))


def proximo_lote(banco):
    feitos = [x for x in banco.estado["concluidas"] if x.startswith("pokemon_status_")]
    return f"pokemon_status_{len(feitos) + 1:03d}"


def executar(lote_id, quantidade):
    banco, canon = bc.Banco(), carregar_canon()
    if lote_id in banco.estado["concluidas"]:
        sys.exit(f"O lote {lote_id} já foi registrado.")
    pasta = TRABALHO_DIR / lote_id
    pasta.mkdir(parents=True, exist_ok=True)
    todos = carregar_pokemon(pasta)
    arq = pasta / "01_selecao.json"
    selecao = ler_json(arq)
    if selecao is None:
        rng = random.Random(lote_id)
        selecao = []
        for p in escolher(todos, banco, quantidade, rng):
            ds = distratores(p, todos, rng)
            if ds:
                selecao.append({**p, "distratores": [d["nome"] for d in ds]})
        gravar_json(arq, selecao)
    print(f"{lote_id}: {len(selecao)} pokémon.")
    preparar_figuras(selecao, pasta)

    numero, registradas = banco.proximo_numero(), []
    por_ancora, indice = banco.perguntas_por_ancora(), indice_pokemon(banco)
    for p in selecao:
        figura, revelacao = pasta / "figuras" / f"{p['num']}.jpg", pasta / "figuras" / f"{p['num']}_revelacao.jpg"
        resumo = {"entidade": p["nome"], "pergunta": PERGUNTA}
        if not revelacao.exists():
            registrar_log(lote_id, "pokemon_status", "descartada", "sem arte oficial", resumo)
            continue
        aid = indice.get(normalizar(p["nome"]))
        if aid is None:
            aid = banco.novo_id_ancora(p["nome"])
            banco.adicionar_ancora({"id": aid, "nome": p["nome"], "descricao": _descricao(p), "fontes": [_fonte(p)]})
            indice[normalizar(p["nome"])] = aid
        ps = por_ancora.get(aid, [])
        if len(ps) >= MAX_POR_ANCORA or sum("imagem" in q for q in ps) >= figuras.MAX_FIGURA_POR_ANCORA:
            registrar_log(lote_id, "pokemon_status", "descartada", f"âncora {aid} saturada", resumo)
            continue
        qid = f"q{numero:05d}"
        q = {"id": qid, "tema": TEMA, "subtema": SUBTEMA, "ancora": aid, "angulo": "identidade", "tipo": "multipla",
             "pergunta": PERGUNTA, "resposta": p["nome"], "distratores": p["distratores"], "fonte": [_fonte(p)],
             "imagem": {"arquivo": qid + ".jpg", "origem": figuras.ARTE_POKEMON.format(p["num"]), "autor": AUTOR,
                        "licenca": LICENCA, "revelacao": qid + "_revelacao.jpg"},
             "colecao": "pokemon", "exclusiva": True}
        erros = bc.erros_pergunta(q, canon)
        if erros:
            registrar_log(lote_id, "pokemon_status", "descartada", "; ".join(erros), resumo)
            continue
        (BANCO_DIR / "imagens" / (qid + ".jpg")).write_bytes(figura.read_bytes())
        (BANCO_DIR / "imagens" / (qid + "_revelacao.jpg")).write_bytes(revelacao.read_bytes())
        banco.perguntas.append(q)
        por_ancora.setdefault(aid, []).append(q)
        registradas.append(q)
        registrar_log(lote_id, "pokemon_status", "registrada", f"geração {p['geracao']}", {"id": qid, **resumo})
        numero += 1
    banco.estado["concluidas"].append(lote_id)
    banco.salvar()
    registrar_log(lote_id, "pokemon_status", "concluida", f"{len(registradas)} de {len(selecao)} perguntas no banco")
    print(f"→ {len(registradas)} de {len(selecao)} perguntas entraram no banco.")
    print("Por geração:", dict(sorted(Counter(p["geracao"] for p in selecao).items())))
    popularidade.atualizar()


def main():
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="comando", required=True)
    e = sub.add_parser("executar")
    e.add_argument("--quantidade", type=int, default=100)
    e.add_argument("--lote")
    args = ap.parse_args()
    executar(args.lote or proximo_lote(bc.Banco()), args.quantidade)


if __name__ == "__main__":
    main()
