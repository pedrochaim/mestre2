"""Banco de perguntas e cadastro de âncoras: leitura, consultas, validação e busca."""

import difflib
import urllib.error
import urllib.parse
import urllib.request
from collections import Counter, defaultdict

import jsonschema

from comum import (
    BANCO_DIR, ESQUEMA_ANCORA, ESQUEMA_PERGUNTA, carregar_canon, gravar_json,
    ler_json, normalizar, slug,
)

ARQ_PERGUNTAS = BANCO_DIR / "perguntas.json"
ARQ_ANCORAS = BANCO_DIR / "ancoras.json"
ARQ_ESTADO = BANCO_DIR / "estado.json"

LIMIAR_DUPLICATA = 0.85   # semelhança entre enunciados para considerar pergunta repetida
LIMIAR_CANDIDATA = 0.60   # semelhança entre nomes para mandar uma âncora ao juiz
MAX_CANDIDATAS = 5

_validador_pergunta = jsonschema.Draft202012Validator(ler_json(ESQUEMA_PERGUNTA))
_validador_ancora = jsonschema.Draft202012Validator(ler_json(ESQUEMA_ANCORA))


# ---------------------------------------------------------------- banco

class Banco:
    def __init__(self):
        self.perguntas = ler_json(ARQ_PERGUNTAS, [])
        self.ancoras = ler_json(ARQ_ANCORAS, [])
        self.estado = ler_json(ARQ_ESTADO, {"concluidas": []})
        self._reindexar()

    def _reindexar(self):
        self.ancora_por_id = {a["id"]: a for a in self.ancoras}

    def abandonados(self):
        """Ids dos lotes que o autopiloto largou depois de falhas seguidas. Não estão concluídos: a pasta de
        trabalho guarda o que já foi feito, e `autopiloto.py --retomar` os devolve à fila."""
        return {r["id"] for r in self.estado.get("abandonados", [])}

    def salvar(self):
        # Âncoras antes das perguntas: uma pergunta nunca aponta para âncora não gravada.
        gravar_json(ARQ_ANCORAS, self.ancoras)
        gravar_json(ARQ_PERGUNTAS, self.perguntas)
        numeros = [int(p["id"][1:]) for p in self.perguntas]
        self.estado["maior_id"] = max(max(numeros, default=0), self.estado.get("maior_id", 0))
        gravar_json(ARQ_ESTADO, self.estado)

    # --- âncoras

    def resolver(self, id_ancora):
        """Segue `fundida_em` até a âncora ativa. Devolve None se o id não existe."""
        vistos = set()
        while id_ancora in self.ancora_por_id and id_ancora not in vistos:
            vistos.add(id_ancora)
            destino = self.ancora_por_id[id_ancora].get("fundida_em")
            if not destino:
                return id_ancora
            id_ancora = destino
        return None

    def ancoras_ativas(self):
        return [a for a in self.ancoras if not a.get("fundida_em")]

    def indice_nomes(self):
        """{nome normalizado: id} para nome e variantes das âncoras ativas."""
        indice = {}
        for a in self.ancoras_ativas():
            for nome in [a["nome"], *a.get("variantes", [])]:
                if normalizar(nome):  # "@", "花見" e "Тетрис" ficam vazios e não podem casar entre si
                    indice.setdefault(normalizar(nome), a["id"])
        return indice

    def novo_id_ancora(self, nome, reservados=()):
        base = slug(nome) or "ancora"
        candidato, n = base, 2
        while candidato in self.ancora_por_id or candidato in reservados:
            candidato, n = f"{base}_{n}", n + 1
        return candidato

    def acrescentar_variantes(self, id_ancora, nomes):
        a = self.ancora_por_id[id_ancora]
        conhecidos = {normalizar(a["nome"]), *(normalizar(v) for v in a.get("variantes", []))}
        for nome in nomes:
            if nome and normalizar(nome) not in conhecidos:
                a.setdefault("variantes", []).append(nome)
                conhecidos.add(normalizar(nome))

    def adicionar_ancora(self, ancora):
        self.ancoras.append(ancora)
        self.ancora_por_id[ancora["id"]] = ancora

    # --- perguntas

    def proximo_numero(self):
        # Ids de perguntas apagadas nunca são reaproveitados: partidas antigas guardam os ids já sorteados.
        numeros = [int(p["id"][1:]) for p in self.perguntas]
        return max(max(numeros, default=0), self.estado.get("maior_id", 0)) + 1

    def perguntas_do_subtema(self, tema, subtema):
        return [p for p in self.perguntas if p["tema"] == tema and p["subtema"] == subtema]

    def perguntas_por_ancora(self, origem=None):
        """{id da âncora ativa: perguntas (texto e figura) que apontam para ela}, contando só as que valem na
        saturação de um lote da origem (conta_na_saturacao). É a medida de saturação de um assunto (MANIFESTO §17)."""
        grupos = defaultdict(list)
        for p in self.perguntas:
            if not conta_na_saturacao(p, origem):
                continue
            grupos[self.resolver(p["ancora"]) or p["ancora"]].append(p)
        return grupos

    def colecao_por_ancora(self, colecao):
        """{id da âncora ativa: todas as perguntas da coleção que apontam para ela}, inclusive as que ficam fora da
        saturação (figura_livre)."""
        grupos = defaultdict(list)
        for p in self.perguntas:
            if p.get("colecao") == colecao:
                grupos[self.resolver(p["ancora"]) or p["ancora"]].append(p)
        return grupos

    def angulos_por_ancora(self, perguntas=None):
        """{id da âncora ativa: Counter de ângulos}."""
        contagem = defaultdict(Counter)
        for p in self.perguntas if perguntas is None else perguntas:
            contagem[self.resolver(p["ancora"]) or p["ancora"]][p["angulo"]] += 1
        return contagem


# ---------------------------------------------------------------- validação

def erros_pergunta(pergunta, canon):
    """Erros que impedem a pergunta de entrar no banco (esquema + lista canônica)."""
    erros = [e.message for e in _validador_pergunta.iter_errors(pergunta)]
    tema, subtema = pergunta.get("tema"), pergunta.get("subtema")
    if tema not in canon:
        erros.append(f"tema fora da lista canônica: {tema!r}")
    elif subtema not in canon[tema]:
        erros.append(f"subtema fora da lista canônica: {subtema!r}")
    if pergunta.get("subtema_colecao") and not pergunta.get("colecao"):
        erros.append("subtema_colecao sem colecao")
    elif pergunta.get("subtema_colecao") and pergunta["subtema_colecao"] not in SUBTEMAS_COLECAO.get(pergunta["colecao"], []):
        erros.append(f"subtema_colecao fora da lista da coleção: {pergunta['subtema_colecao']!r}")
    distratores = pergunta.get("distratores") or []
    resposta = normalizar(pergunta.get("resposta", ""))
    if any(normalizar(d) == resposta for d in distratores):
        erros.append("um distrator é igual à resposta")
    if len({normalizar(d) for d in distratores}) < len(distratores):
        erros.append("distratores repetidos")
    return erros


# Subtemas próprios de cada coleção, com o escopo de cada um (campo subtema_colecao; para pokemon, modo_pokemon.md),
# e o piso do equilíbrio: o subtema com menos perguntas tem pelo menos esta fração das perguntas do subtema com mais.
# O piso só decide que lote pode ser montado; não pesa na classificação das perguntas.
SUBTEMAS_COLECAO = {"pokemon": {
    "Pokédex": "o pokémon como criatura, tudo o que a Pokédex registra dele: reconhecê-lo, o tipo (e a criação dos "
               "tipos), em quem evolui e como (pedra, troca, amizade, lugar, item), megaevolução, formas regionais, "
               "Gigantamax e outras formas, a origem do nome, a inspiração do desenho, os hábitos e as lendas dos "
               "lendários e míticos",
    "Jogos da Série Principal": "os jogos principais (de Red e Green a Scarlet e Violet, com remakes, Let's Go e Legends) "
                                "e o mundo deles como aparece nesses jogos: lançamento, console, capa, iniciais, "
                                "novidades, mecânicas, itens, enredo, regiões, cidades e lugares, líderes de ginásio, "
                                "campeões, professores, rivais, equipes vilãs, onde encontrar um lendário, bastidores",
    "Anime, Filmes e Franquia": "tudo fora dos jogos principais: anime, filmes, mangá, dublagem, card game, jogos "
                                "derivados (Go, Snap, Colosseum, Mystery Dungeon, Ranger, Unite e outros), as empresas, "
                                "os criadores e o Pokémon na cultura; inclusive treinadores, rivais, vilões, regiões e "
                                "lugares como aparecem no anime, nos filmes, no mangá e nos jogos derivados (o que Brock "
                                "faz no anime vem para cá, mesmo sendo ele líder de ginásio dos jogos)",
}}
# Piso de equilíbrio entre os subtemas de uma coleção (o menor com pelo menos essa fração do maior), que trava os
# lotes que o desrespeitariam. O modo Pokémon teve 30% até 2026-10-16, quando o autor tirou o piso: o equilíbrio
# passou a ser o das casas temáticas do tabuleiro, feito na programação dos lotes (modo_pokemon.md).
PISO_SUBTEMA_COLECAO = {}

# Documento com as regras de conteúdo próprias de cada coleção, enviadas ao LLM depois da Parte I do MANIFESTO
# (comum.manifesto_para_llm), e as coleções cujos lotes não têm cota de ângulos (MANIFESTO §9).
DOC_COLECAO = {"pokemon": "modo_pokemon.md"}
SEM_COTA_ANGULOS = {"pokemon"}

# Saturação por âncora (MANIFESTO §4 e §17): no jogo original, no máximo 8 perguntas por âncora (3 até 2026-10-23, 5 até
# 2026-10-27), 3 com figura e 3 num mesmo lote; folga para aprofundar as âncoras centrais em vez de buscar obscuras.
# As exclusivas de uma coleção têm conta própria: contam só as perguntas da coleção, com o limite do documento
# dela; e as exclusivas não contam na saturação do jogo original, porque uma partida nunca sorteia os dois conjuntos.
MAX_POR_ANCORA = 8
MAX_FIGURA_POR_ANCORA = 3
MAX_POR_ANCORA_LOTE = 3
MAX_POR_ANCORA_COLECAO = {"pokemon": 5}
MAX_FIGURA_POR_ANCORA_COLECAO = {"pokemon": 2}
MAX_POR_ANCORA_LOTE_COLECAO = {"pokemon": 2}


def colecao_exclusiva(origem):
    """A coleção de um lote exclusivo (origem: a encomenda ou o catálogo), senão None."""
    return origem.get("colecao") if origem and origem.get("exclusiva") else None


# Coleções em que a silhueta (a casa "Quem é esse pokémon?", com qualquer pergunta sobre o pokémon escondido) e o
# cartão de tipo e atributos ficam fora da saturação: todo pokémon pode ter os dois, além das outras perguntas, mas
# só um de cada (modo_pokemon.md).
FIGURA_LIVRE = {"pokemon"}


# O enunciado dos cartões de golpe do modo Pokémon (pipeline/pokemon_golpes.py).
PERGUNTA_GOLPE = "Qual é esse ataque?"


def figura_livre(pergunta):
    """"cartao" ou "silhueta" se a pergunta de uma coleção é um cartão (de tipo e atributos de um pokémon, ou de um
    golpe) ou uma figura em silhueta com revelação, senão None."""
    if "imagem" not in pergunta or not pergunta.get("colecao"):
        return None
    if "atributos base" in pergunta.get("pergunta", "") or pergunta.get("pergunta") == PERGUNTA_GOLPE:
        return "cartao"
    return "silhueta" if "revelacao" in pergunta["imagem"] else None


def silhueta(pergunta):
    return figura_livre(pergunta) == "silhueta"


# Casas temáticas do tabuleiro do modo Pokémon (modo_pokemon.md, "Casas temáticas"): a casa dita o teor da pergunta.
# Metade das casas comuns é de figura e metade de texto, refletindo a regra editorial do modo (MIN_FIGURA_COLECAO). Os
# nomes, as cores e a ordem no tabuleiro ficam em app/public/linear.js (CASAS_FIGURA e CASAS_TEXTO), com os mesmos
# nomes. O export grava a casa de cada pergunta no campo "casa" do app.
CASAS_FIGURA_POKEMON = ["Quem é esse pokémon?", "Cartão de atributos"]
CASAS_TEXTO_POKEMON = ["Jogos e Regiões", "Anime e Filmes", "Pokédex"]
CASAS_POKEMON = CASAS_FIGURA_POKEMON + CASAS_TEXTO_POKEMON
CASA_DO_SUBTEMA = {"Pokédex": "Pokédex", "Jogos da Série Principal": "Jogos e Regiões",
                   "Anime, Filmes e Franquia": "Anime e Filmes"}
# Regra editorial: a fração mínima das perguntas da coleção que tem figura (modo Pokémon: pelo menos metade).
MIN_FIGURA_COLECAO = {"pokemon": 0.5}


def casa_pokemon(pergunta):
    """A casa temática do modo Pokémon em que a pergunta da coleção pokemon sai, ou None se não é da coleção.
    Figuras: o cartão é "Cartão de atributos", e a silhueta, qualquer que seja a pergunta (o nome, o tipo, a
    evolução, a região), é "Quem é esse pokémon?". Texto: pelo subtema do modo."""
    if pergunta.get("colecao") != "pokemon":
        return None
    if figura_livre(pergunta) == "cartao":
        return "Cartão de atributos"
    if "imagem" in pergunta:
        return "Quem é esse pokémon?"
    return CASA_DO_SUBTEMA.get(pergunta.get("subtema_colecao"), "Pokédex")


def conta_na_saturacao(pergunta, origem=None):
    """A pergunta conta na saturação das âncoras de um lote desta origem?"""
    colecao = colecao_exclusiva(origem)
    if not colecao:
        return not pergunta.get("exclusiva")
    return pergunta.get("colecao") == colecao and not (colecao in FIGURA_LIVRE and figura_livre(pergunta))


def limite_por_ancora(origem=None):
    return MAX_POR_ANCORA_COLECAO.get(colecao_exclusiva(origem), MAX_POR_ANCORA)


def limite_figura_por_ancora(origem=None):
    return MAX_FIGURA_POR_ANCORA_COLECAO.get(colecao_exclusiva(origem), MAX_FIGURA_POR_ANCORA)


def limite_no_lote(origem=None):
    return MAX_POR_ANCORA_LOTE_COLECAO.get(colecao_exclusiva(origem), MAX_POR_ANCORA_LOTE)


def subtemas_da_colecao(perguntas, colecao):
    """{subtema_colecao: nº de perguntas}, com zero nos subtemas ainda vazios."""
    c = Counter({s: 0 for s in SUBTEMAS_COLECAO.get(colecao, [])})
    c.update(p["subtema_colecao"] for p in perguntas if p.get("colecao") == colecao and p.get("subtema_colecao"))
    return c


def limite_do_subtema(contagem, colecao, subtema):
    """Até quantas perguntas o subtema pode ter sem passar do teto que o piso de equilíbrio impõe."""
    outros = [n for s, n in contagem.items() if s != subtema]
    return int(min(outros) / PISO_SUBTEMA_COLECAO[colecao]) if outros else None


def bloqueio_equilibrio(perguntas, colecao, acrescimos):
    """Mensagem de recusa se acrescentar {subtema_colecao: n} levar algum subtema acima do teto, senão None.
    Lotes que só aumentam os subtemas pequenos passam sempre, mesmo com a coleção ainda desequilibrada."""
    if colecao not in PISO_SUBTEMA_COLECAO:
        return None
    contagem = subtemas_da_colecao(perguntas, colecao)
    excessos = []
    for subtema, n in acrescimos.items():
        teto = limite_do_subtema(contagem, colecao, subtema)
        if n > 0 and teto is not None and contagem[subtema] + n > teto:
            excessos.append(f"{subtema}: tem {contagem[subtema]}, o teto é {teto}, o lote traria até {n}")
    if not excessos:
        return None
    piso = round(PISO_SUBTEMA_COLECAO[colecao] * 100)
    return (f"Equilíbrio da coleção {colecao} (o menor subtema tem de ter {piso}% do maior): " + "; ".join(excessos)
            + ". Aumente antes os subtemas pequenos.")


def avisos_pergunta(pergunta):
    """Desvios do manifesto que não bloqueiam, mas ficam registrados."""
    avisos = []
    if len(pergunta.get("pergunta", "").split()) > 30:
        avisos.append("enunciado com mais de 30 palavras")
    if len(pergunta.get("resposta", "").split()) > 8:
        avisos.append("resposta longa")
    for d in pergunta.get("distratores") or []:
        if len(d.split()) > 4:
            avisos.append(f"distrator com mais de 4 palavras: {d!r}")
    return avisos


def erros_ancora(ancora):
    return [e.message for e in _validador_ancora.iter_errors(ancora)]


def avisos_variedade(perguntas, cota_angulos=True, por_ancora=MAX_POR_ANCORA_LOTE):
    """Regras de variedade de um lote (MANIFESTO §9); sem as cotas de ângulo nas coleções de SEM_COTA_ANGULOS."""
    n = len(perguntas)
    if n == 0:
        return []
    avisos = []
    angulos = Counter(p["angulo"] for p in perguntas)
    if cota_angulos:
        for angulo, qtd in angulos.items():
            if qtd / n > 0.25:
                avisos.append(f"ângulo {angulo!r} em {qtd}/{n} perguntas (máximo 25%)")
        if len(angulos) < 6:
            avisos.append(f"apenas {len(angulos)} ângulos diferentes (mínimo 6)")
        genericos = angulos["identidade"] + angulos["atributo"]
        if genericos / n > 0.30:
            avisos.append(f"identidade + atributo em {genericos}/{n} perguntas (máximo 30%)")
    for ancora, qtd in Counter(p["ancora"] for p in perguntas).items():
        if qtd > por_ancora:
            avisos.append(f"âncora {ancora!r} com {qtd} perguntas no lote (máximo {por_ancora})")
    return avisos


# ---------------------------------------------------------------- semelhança

def semelhanca(a, b):
    return difflib.SequenceMatcher(None, normalizar(a), normalizar(b)).ratio()


def duplicata(enunciado, existentes):
    """Devolve o enunciado existente mais parecido se passar do limiar, senão None."""
    melhor, maior = None, 0.0
    for e in existentes:
        s = semelhanca(enunciado, e)
        if s > maior:
            melhor, maior = e, s
    return melhor if maior >= LIMIAR_DUPLICATA else None


def candidatas(nomes, ancoras, excluir=(), limiar=LIMIAR_CANDIDATA):
    """Âncoras cujo nome ou variantes se parecem com algum dos `nomes`. Nomes sem nenhuma letra latina nem
    algarismo ("@", "花見") ficam vazios depois de normalizados e não entram na comparação."""
    nomes = [x for x in nomes if normalizar(x)]
    pontuadas = []
    for a in ancoras:
        if a["id"] in excluir:
            continue
        nomes_a = [y for y in [a["nome"], *a.get("variantes", [])] if normalizar(y)]
        if not nomes or not nomes_a:
            continue
        nota = max(semelhanca(x, y) for x in nomes for y in nomes_a)
        if nota >= limiar:
            pontuadas.append((nota, a))
    pontuadas.sort(key=lambda par: -par[0])
    return [a for _, a in pontuadas[:MAX_CANDIDATAS]]


# ---------------------------------------------------------------- URLs

_cache_urls = {}


def url_responde(url, tempo_limite=15):
    """True se a página existe. Bloqueios de robô (403, 429…) contam como existente;
    404, 410 e falhas de conexão contam como inexistente."""
    if url in _cache_urls:
        return _cache_urls[url]
    seguro = urllib.parse.quote(url, safe=":/?#[]@!$&'()*+,;=%~")
    pedido = urllib.request.Request(seguro, headers={"User-Agent": "Mozilla/5.0 (Mestre2 pipeline)"})
    try:
        with urllib.request.urlopen(pedido, timeout=tempo_limite):
            ok = True
    except urllib.error.HTTPError as e:
        ok = e.code not in (404, 410)
    except (urllib.error.URLError, TimeoutError, ValueError, OSError):
        ok = False
    _cache_urls[url] = ok
    return ok


def alguma_url_responde(urls):
    return any(url_responde(u) for u in urls)


def carregar_tudo():
    return Banco(), carregar_canon()
