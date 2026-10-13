"""Perguntas de pokémon feitas só de dados, sem LLM (manifesto/modo_pokemon.md).

Os tipos, os atributos, as evoluções e a geração de cada pokémon vêm das tabelas do PokéAPI (os mesmos dados da
Bulbapedia, que bloqueia acesso automatizado), e as figuras, dos sprites do PokéAPI. A resposta e os distratores são
escolhidos por código, de modo que nenhum fato passa por um LLM. Todas as perguntas são de múltipla escolha,
exclusivas do modo Pokémon. Famílias:

    atributos  cartão com o tipo e os atributos base, sem o nome: "Quem é esse pokémon?"
    tipo       arte oficial: "De que tipo é este pokémon?"
    regiao     arte oficial: "Em que região este pokémon apareceu pela primeira vez?"
    evolucao   arte oficial: "Em que pokémon este evolui?" ou "De que pokémon este evolui?"

(A versão brilhante e o sprite de Yellow/Crystal foram testados e recusados pelo autor: ficavam fáceis demais.)
No cartão de atributos, a revelação é a arte oficial sobre os raios azuis e amarelos, como nas silhuetas. Cada
pokémon recebe no máximo uma figura que pergunta o nome (silhueta ou cartão), para a mesma resposta não aparecer duas
vezes em figura, e a saturação geral vale: no máximo 3 perguntas por âncora, 2 com figura.

Uso (na raiz do projeto):
    python pipeline/pokemon_dados.py executar --atributos 70 --tipo 45 --regiao 30 --evolucao 40
    python pipeline/pokemon_dados.py executar --lote pokemon_dados_002 ...   # retoma um lote
    python pipeline/pokemon_dados.py amostras --pasta <pasta>                # uma figura de cada família, sem gravar
Cada passo grava seu arquivo em trabalho/<lote>/ e é pulado se já existe.
"""
import argparse
import csv
import io
import random
import sys
import urllib.parse
from collections import Counter, defaultdict
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)

from PIL import Image  # noqa: E402

import banco as bc  # noqa: E402
import figuras  # noqa: E402
import popularidade  # noqa: E402
from comum import BANCO_DIR, TRABALHO_DIR, carregar_canon, gravar_json, ler_json, normalizar, registrar_log  # noqa: E402
from etapas import MAX_POR_ANCORA  # noqa: E402

CSV_URL = "https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/{}.csv"
TABELAS = ["pokemon", "pokemon_stats", "pokemon_types", "pokemon_species", "pokemon_species_names"]
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
REGIOES = {1: "Kanto", 2: "Johto", 3: "Hoenn", 4: "Sinnoh", 5: "Unova", 6: "Kalos", 7: "Alola", 8: "Galar", 9: "Paldea"}
# Espécies cuja região de estreia não é a da sua geração: Meltan e Melmetal (Pokémon Go), os de Hisui (Legends:
# Arceus) e os de Kitakami e da Academia Mirtilo (DLC de Scarlet e Violet). Ficam fora da família "regiao".
FORA_DA_REGIAO = {808, 809, *range(899, 906), *range(1011, 1026)}
# Quantos pokémon de cada geração (proporção) entram nas famílias que podem usar todas as gerações.
PESO_GERACAO = {1: 16, 2: 11, 3: 12, 4: 12, 5: 12, 6: 9, 7: 10, 8: 9, 9: 9}
DISTANCIA_MINIMA = 40   # atributos: soma das diferenças dos seis atributos entre duas alternativas
FAMILIAS = ["atributos", "tipo", "regiao", "evolucao"]
NOME = {"atributos"}   # famílias que perguntam o nome do pokémon


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
    """{id da espécie: {num, nome, geracao, tipos, atributos, final, lendario, cadeia, pai, filhos}} só das espécies
    cuja forma padrão tem o mesmo nome da espécie e não troca de forma: Deoxys, Rotom, Urshifu e afins ficam de fora,
    porque tipo e atributos dependem da forma."""
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
    filhos = defaultdict(list)
    for sid, e in especies.items():
        if e["evolves_from_species_id"]:
            filhos[int(e["evolves_from_species_id"])].append(sid)
    out = {}
    for sid, e in especies.items():
        p = padrao.get(sid)
        if not p or p["identifier"] != e["identifier"] or e["forms_switchable"] == "1" or sid not in nomes:
            continue
        if "♀" in nomes[sid] or "♂" in nomes[sid]:
            continue
        pid = int(p["id"])
        out[sid] = {"num": sid, "nome": nomes[sid], "geracao": int(e["generation_id"]), "tipos": tipos[pid],
                    "atributos": [atributos[pid][i] for i in range(1, 7)], "final": sid not in filhos,
                    "lendario": e["is_legendary"] == "1" or e["is_mythical"] == "1", "cadeia": e["evolution_chain_id"],
                    "pai": int(e["evolves_from_species_id"]) if e["evolves_from_species_id"] else None,
                    "filhos": filhos.get(sid, [])}
    return out


def _distancia(a, b):
    return sum(abs(x - y) for x, y in zip(a["atributos"], b["atributos"]))


def _texto_tipos(tipos):
    return " e ".join(TIPOS[t][0] for t in tipos)


def _outros_pokemon(alvo, todos, rng, evitar_cadeia=False, distancia=False):
    """Três pokémon que dividem ao menos um tipo com `alvo`, preferindo os de tipos iguais, os da mesma linha
    evolutiva (a menos que `evitar_cadeia`) e as formas finais. Com `distancia`, os atributos de duas alternativas
    quaisquer diferem em pelo menos DISTANCIA_MINIMA pontos, para o cartão ter uma só resposta."""
    cands = []
    for p in todos.values():
        if p is alvo or not set(p["tipos"]) & set(alvo["tipos"]) or (evitar_cadeia and p["cadeia"] == alvo["cadeia"]):
            continue
        if distancia and _distancia(p, alvo) < DISTANCIA_MINIMA:
            continue
        nota = (3 if set(p["tipos"]) == set(alvo["tipos"]) else 0) + (2 if p["cadeia"] == alvo["cadeia"] else 0) \
            + (1 if p["final"] else 0) + rng.random() * 2
        cands.append((nota, p))
    escolhidos = []
    for _, p in sorted(cands, key=lambda c: -c[0]):
        if distancia and any(_distancia(p, q) < DISTANCIA_MINIMA for q in escolhidos):
            continue
        if sum(q["cadeia"] == p["cadeia"] for q in escolhidos) < 2:
            escolhidos.append(p)
        if len(escolhidos) == 3:
            return [q["nome"] for q in escolhidos]
    return None


def _outros_tipos(p, todos, rng):
    """Três combinações de tipo que existem em algum pokémon, parecidas com a resposta (dividem um tipo ou têm o
    mesmo número de tipos), e nenhuma igual a ela."""
    combos = {tuple(q["tipos"]) for q in todos.values()}
    certo = set(p["tipos"])
    cands = []
    for c in combos:
        if set(c) == certo:
            continue
        nota = (1.5 if set(c) & certo else 0) + (1.5 if len(c) == len(certo) else 0) + rng.random() * 2
        cands.append((nota, c))
    escolhidos = []
    for _, c in sorted(cands, key=lambda x: -x[0]):
        if all(set(c) != set(e) for e in escolhidos):
            escolhidos.append(c)
        if len(escolhidos) == 3:
            return [_texto_tipos(c) for c in escolhidos]
    return None


def _outras_regioes(p, rng):
    g = p["geracao"]
    outras = sorted((r for r in REGIOES if r != g), key=lambda r: abs(r - g) + rng.random() * 3)
    return [REGIOES[r] for r in outras[:3]]


# ---------------------------------------------------------------- famílias

def montar(familia, p, todos, rng):
    """{pergunta, resposta, distratores, angulo} da família para o pokémon p, ou None se ele não serve."""
    if familia == "atributos":
        ds = _outros_pokemon(p, todos, rng, distancia=True)
        return ds and {"pergunta": "De quem são estes tipos e atributos base? Quem é esse pokémon?",
                       "resposta": p["nome"], "distratores": ds, "angulo": "identidade"}
    if familia == "tipo":
        ds = _outros_tipos(p, todos, rng)
        return ds and {"pergunta": "De que tipo é este pokémon?", "resposta": _texto_tipos(p["tipos"]),
                       "distratores": ds, "angulo": "atributo"}
    if familia == "regiao":
        if p["num"] in FORA_DA_REGIAO:
            return None
        return {"pergunta": "Em que região este pokémon apareceu pela primeira vez?",
                "resposta": REGIOES[p["geracao"]], "distratores": _outras_regioes(p, rng), "angulo": "lugar"}
    if familia == "evolucao":
        filhos = [todos[f] for f in p["filhos"] if f in todos]
        pai = todos.get(p["pai"])
        opcoes = (["evolui"] if len(p["filhos"]) == 1 and filhos else []) + (["vem"] if pai else [])
        if not opcoes:
            return None
        if rng.choice(opcoes) == "evolui":
            alvo, pergunta = filhos[0], "Em que pokémon este evolui?"
        else:
            alvo, pergunta = pai, "De que pokémon este evolui?"
        ds = _outros_pokemon(alvo, todos, rng, evitar_cadeia=True)
        return ds and {"pergunta": pergunta, "resposta": alvo["nome"], "distratores": ds, "angulo": "conexao"}
    raise ValueError(familia)


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


def _imagem(url):
    dados = figuras._get(url, json_=False)
    return Image.open(io.BytesIO(dados)).convert("RGBA") if dados else None


def desenhar(familia, p, destino, pagina):
    """Grava destino.jpg (a figura) e, nas famílias que perguntam o nome, destino_revelacao.jpg. Devolve a origem
    da figura, ou None se faltou imagem."""
    arte_url = figuras.ARTE_POKEMON.format(p["num"])
    arte = _imagem(arte_url)
    if arte is None:
        return None
    revelacao = Path(f"{destino}_revelacao.jpg")
    if familia == "atributos":
        pagina.set_content(html_cartao(p))
        im = Image.open(io.BytesIO(pagina.locator(".cartao").screenshot(omit_background=True))).convert("RGBA")
        fundo = Image.new("RGB", im.size, (20, 20, 20))
        fundo.paste(im, mask=im.split()[3])
        figura, origem = fundo, arte_url
    else:
        figura, origem = figuras._sobre_raios(arte), arte_url
    figura.convert("RGB").save(f"{destino}.jpg", "JPEG", quality=90)
    if familia in NOME:
        figuras._sobre_raios(arte).save(revelacao, "JPEG", quality=88)
    return origem


# ---------------------------------------------------------------- lote

def indice_pokemon(banco):
    """{nome normalizado: id} das âncoras ativas de pokémon (a descrição ou a fonte dizem que é pokémon)."""
    indice = {}
    for a in banco.ancoras_ativas():
        if "pokémon" in a.get("descricao", "").lower() or any("bulbapedia" in f for f in a.get("fontes", [])):
            for nome in [a["nome"], *a.get("variantes", [])]:
                indice.setdefault(normalizar(nome), a["id"])
    return indice


def _pergunta_o_nome(q):
    """A pergunta é uma figura cuja resposta é o nome do pokémon da âncora (silhueta ou cartão)."""
    return "imagem" in q and q.get("angulo") == "identidade"


# Como reconhecer, pelo enunciado, uma pergunta do banco que já trata do mesmo assunto da família (inclusive as
# feitas pelo LLM, como "Em que pokémon este evolui?" nas silhuetas).
ASSUNTO = {"atributos": ("atributos base",), "tipo": ("tipo",), "regiao": ("região", "regiao"),
           "evolucao": ("evolui", "evolução", "evoluir")}


def _cabe(ps, familia):
    figs = [q for q in ps if "imagem" in q]
    return len(ps) < MAX_POR_ANCORA and len(figs) < figuras.MAX_FIGURA_POR_ANCORA and \
        not any(q.get("familia_dados") == familia or any(t in q.get("pergunta", "").lower() for t in ASSUNTO[familia])
                for q in ps) and \
        not (familia in NOME and any(_pergunta_o_nome(q) for q in ps))


def escolher(todos, banco, cotas, rng):
    """[(família, pokémon, pergunta)] do lote. Cada família tira pokémon de todas as gerações, na proporção de
    PESO_GERACAO; primeiro os que ainda não têm figura, depois formas finais e lendários. A ocupação das âncoras é
    contada à medida que o lote se forma, para duas famílias do mesmo lote não estourarem a saturação."""
    por_ancora, indice = banco.perguntas_por_ancora(), indice_pokemon(banco)
    ocupacao = {p["num"]: list(por_ancora.get(indice.get(normalizar(p["nome"])), [])) for p in todos.values()}
    lote = []
    for familia, n in cotas.items():
        if not n:
            continue
        por_geracao = defaultdict(list)
        for p in todos.values():
            ps = ocupacao[p["num"]]
            if _cabe(ps, familia):
                por_geracao[p["geracao"]].append((any("imagem" in q for q in ps), not (p["final"] or p["lendario"]),
                                                  rng.random(), p))
        pesos = {g: w for g, w in PESO_GERACAO.items() if por_geracao[g]}
        cotas_g = {g: round(n * w / sum(pesos.values())) for g, w in pesos.items()}
        cotas_g[min(cotas_g)] += n - sum(cotas_g.values())
        for g, k in cotas_g.items():
            feitos = 0
            for *_, p in sorted(por_geracao[g], key=lambda x: x[:3]):
                if feitos >= k:
                    break
                q = montar(familia, p, todos, rng)
                if q:
                    lote.append({"familia": familia, "num": p["num"], **q})
                    ocupacao[p["num"]].append({"imagem": 1, "angulo": q["angulo"], "familia_dados": familia})
                    feitos += 1
    rng.shuffle(lote)
    return lote


def _descricao(p):
    tipos = [TIPOS[t][0] for t in p["tipos"]]
    tipos = f"do tipo {tipos[0]}" if len(tipos) == 1 else f"dos tipos {tipos[0]} e {tipos[1]}"
    return f"Pokémon {tipos}, número {p['num']} da Pokédex Nacional."


def _fonte(p):
    return figuras.BULBAPEDIA.format(urllib.parse.quote(p["nome"].replace(" ", "_")))


def proximo_lote(banco):
    feitos = [x for x in banco.estado["concluidas"] if x.startswith(("pokemon_dados_", "pokemon_status_"))]
    return f"pokemon_dados_{len(feitos) + 1:03d}"


def preparar_figuras(selecao, todos, pasta):
    from playwright.sync_api import sync_playwright
    (pasta / "figuras").mkdir(exist_ok=True)
    falta = [it for it in selecao if "origem" not in it]
    if not falta:
        return
    with sync_playwright() as pw:
        b = pw.chromium.launch(channel="chrome")
        pagina = b.new_page(viewport=dict(width=560, height=380), device_scale_factor=2)
        for i, it in enumerate(falta, 1):
            it["origem"] = desenhar(it["familia"], todos[it["num"]], pasta / "figuras" / f"{it['familia']}_{it['num']}",
                                    pagina)
            if i % 25 == 0:
                print(f"  {i} de {len(falta)} figuras")
        b.close()


def executar(lote_id, cotas):
    banco, canon = bc.Banco(), carregar_canon()
    if lote_id in banco.estado["concluidas"]:
        sys.exit(f"O lote {lote_id} já foi registrado.")
    pasta = TRABALHO_DIR / lote_id
    pasta.mkdir(parents=True, exist_ok=True)
    todos = carregar_pokemon(pasta)
    arq = pasta / "01_selecao.json"
    selecao = ler_json(arq)
    if selecao is None:
        selecao = escolher(todos, banco, cotas, random.Random(lote_id))
        gravar_json(arq, selecao)
    print(f"{lote_id}: {len(selecao)} perguntas:", dict(Counter(it["familia"] for it in selecao)))
    if not (pasta / "02_figuras.json").exists():
        preparar_figuras(selecao, todos, pasta)
        gravar_json(pasta / "02_figuras.json", selecao)
    selecao = ler_json(pasta / "02_figuras.json")

    numero, registradas = banco.proximo_numero(), []
    por_ancora, indice = banco.perguntas_por_ancora(), indice_pokemon(banco)
    for it in selecao:
        p = todos[it["num"]]
        base = pasta / "figuras" / f"{it['familia']}_{it['num']}"
        resumo = {"entidade": p["nome"], "familia": it["familia"], "pergunta": it["pergunta"]}
        if not it.get("origem"):
            registrar_log(lote_id, "pokemon_dados", "descartada", "sem imagem", resumo)
            continue
        aid = indice.get(normalizar(p["nome"]))
        if aid is None:
            aid = banco.novo_id_ancora(p["nome"])
            banco.adicionar_ancora({"id": aid, "nome": p["nome"], "descricao": _descricao(p), "fontes": [_fonte(p)]})
            indice[normalizar(p["nome"])] = aid
        ps = por_ancora.get(aid, [])
        if len(ps) >= MAX_POR_ANCORA or sum("imagem" in q for q in ps) >= figuras.MAX_FIGURA_POR_ANCORA:
            registrar_log(lote_id, "pokemon_dados", "descartada", f"âncora {aid} saturada", resumo)
            continue
        qid = f"q{numero:05d}"
        q = {"id": qid, "tema": TEMA, "subtema": SUBTEMA, "ancora": aid, "angulo": it["angulo"], "tipo": "multipla",
             "pergunta": it["pergunta"], "resposta": it["resposta"], "distratores": it["distratores"],
             "fonte": [_fonte(p)], "imagem": {"arquivo": qid + ".jpg", "origem": it["origem"], "autor": AUTOR,
                                              "licenca": LICENCA},
             "colecao": "pokemon", "exclusiva": True}
        if it["familia"] in NOME:
            q["imagem"]["revelacao"] = qid + "_revelacao.jpg"
        erros = bc.erros_pergunta(q, canon)
        if erros:
            registrar_log(lote_id, "pokemon_dados", "descartada", "; ".join(erros), resumo)
            continue
        (BANCO_DIR / "imagens" / (qid + ".jpg")).write_bytes(Path(f"{base}.jpg").read_bytes())
        if it["familia"] in NOME:
            (BANCO_DIR / "imagens" / (qid + "_revelacao.jpg")).write_bytes(Path(f"{base}_revelacao.jpg").read_bytes())
        banco.perguntas.append(q)
        por_ancora.setdefault(aid, []).append(q)
        registradas.append(q)
        registrar_log(lote_id, "pokemon_dados", "registrada", f"{it['familia']}, geração {p['geracao']}",
                      {"id": qid, **resumo})
        numero += 1
    banco.estado["concluidas"].append(lote_id)
    banco.salvar()
    registrar_log(lote_id, "pokemon_dados", "concluida", f"{len(registradas)} de {len(selecao)} perguntas no banco")
    print(f"→ {len(registradas)} de {len(selecao)} perguntas entraram no banco.")
    popularidade.atualizar()


def amostras(pasta, familias):
    """Uma pergunta de cada família, com figura, só na pasta indicada (nada vai para o banco)."""
    from playwright.sync_api import sync_playwright
    pasta = Path(pasta)
    pasta.mkdir(parents=True, exist_ok=True)
    todos, banco, rng = carregar_pokemon(pasta), bc.Banco(), random.Random("amostras")
    selecao = escolher(todos, banco, {f: 1 for f in familias}, rng)
    with sync_playwright() as pw:
        b = pw.chromium.launch(channel="chrome")
        pagina = b.new_page(viewport=dict(width=560, height=380), device_scale_factor=2)
        for it in selecao:
            it["origem"] = desenhar(it["familia"], todos[it["num"]], pasta / it["familia"], pagina)
        b.close()
    gravar_json(pasta / "amostras.json", selecao)
    return selecao


def main():
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="comando", required=True)
    e = sub.add_parser("executar")
    e.add_argument("--lote")
    for f in FAMILIAS:
        e.add_argument(f"--{f}", type=int, default=0)
    a = sub.add_parser("amostras")
    a.add_argument("--pasta", required=True)
    args = ap.parse_args()
    if args.comando == "amostras":
        for it in amostras(args.pasta, FAMILIAS):
            print(it)
        return
    cotas = {f: getattr(args, f) for f in FAMILIAS}
    executar(args.lote or proximo_lote(bc.Banco()), cotas)


if __name__ == "__main__":
    main()
