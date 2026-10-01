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

    def perguntas_por_ancora(self):
        """{id da âncora ativa: perguntas do banco inteiro (texto e figura) que apontam para ela}.
        É a medida de saturação de um assunto (MANIFESTO §17)."""
        grupos = defaultdict(list)
        for p in self.perguntas:
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
    distratores = pergunta.get("distratores") or []
    resposta = normalizar(pergunta.get("resposta", ""))
    if any(normalizar(d) == resposta for d in distratores):
        erros.append("um distrator é igual à resposta")
    if len({normalizar(d) for d in distratores}) < len(distratores):
        erros.append("distratores repetidos")
    return erros


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


def avisos_variedade(perguntas):
    """Regras de variedade de um lote (MANIFESTO §9)."""
    n = len(perguntas)
    if n == 0:
        return []
    avisos = []
    angulos = Counter(p["angulo"] for p in perguntas)
    for angulo, qtd in angulos.items():
        if qtd / n > 0.25:
            avisos.append(f"ângulo {angulo!r} em {qtd}/{n} perguntas (máximo 25%)")
    if len(angulos) < 6:
        avisos.append(f"apenas {len(angulos)} ângulos diferentes (mínimo 6)")
    genericos = angulos["identidade"] + angulos["atributo"]
    if genericos / n > 0.30:
        avisos.append(f"identidade + atributo em {genericos}/{n} perguntas (máximo 30%)")
    por_ancora = Counter(p["ancora"] for p in perguntas)
    for ancora, qtd in por_ancora.items():
        if qtd > 2:
            avisos.append(f"âncora {ancora!r} com {qtd} perguntas no lote (máximo 2)")
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


def candidatas(nomes, ancoras, excluir=()):
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
        if nota >= LIMIAR_CANDIDATA:
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
