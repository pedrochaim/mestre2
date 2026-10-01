"""Caminhos, leitura/gravação de arquivos, normalização de texto e log."""

import datetime as dt
import json
import os
import re
import time
import unicodedata
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
PIPELINE = RAIZ / "pipeline"
MANIFESTO_DIR = RAIZ / "manifesto"

BANCO_DIR = PIPELINE / "banco"
TRABALHO_DIR = PIPELINE / "trabalho"
LOG_DIR = PIPELINE / "log"
PROMPTS_DIR = PIPELINE / "prompts"
ESQUEMAS_DIR = PIPELINE / "esquemas"
ENCOMENDAS = PIPELINE / "encomendas.json"

MANIFESTO = MANIFESTO_DIR / "MANIFESTO.md"
CANON = MANIFESTO_DIR / "temas_subtemas.json"
ESQUEMA_PERGUNTA = MANIFESTO_DIR / "pergunta.schema.json"
ESQUEMA_ANCORA = MANIFESTO_DIR / "ancora.schema.json"


def ler_json(caminho, padrao=None):
    caminho = Path(caminho)
    if not caminho.exists():
        return padrao
    with open(caminho, encoding="utf-8") as f:
        return json.load(f)


def gravar_json(caminho, dados):
    """Grava de forma atômica: escreve num temporário e depois substitui."""
    caminho = Path(caminho)
    caminho.parent.mkdir(parents=True, exist_ok=True)
    tmp = caminho.with_suffix(caminho.suffix + ".tmp")
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(dados, f, ensure_ascii=False, indent=2)
        f.write("\n")
    # O Dropbox (ou um antivírus) às vezes trava o arquivo por um instante: tenta de novo antes de desistir.
    for tentativa in range(10):
        try:
            os.replace(tmp, caminho)
            return
        except PermissionError:
            if tentativa == 9:
                raise
            time.sleep(1 + tentativa)


def ler_texto(caminho):
    with open(caminho, encoding="utf-8") as f:
        return f.read()


def gravar_texto(caminho, texto):
    caminho = Path(caminho)
    caminho.parent.mkdir(parents=True, exist_ok=True)
    with open(caminho, "w", encoding="utf-8") as f:
        f.write(texto)


def normalizar(texto):
    """Minúsculas, sem acentos, só letras e números separados por um espaço."""
    sem_acento = unicodedata.normalize("NFKD", texto)
    sem_acento = "".join(c for c in sem_acento if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]+", " ", sem_acento.lower()).strip()


def slug(texto):
    return normalizar(texto).replace(" ", "_")


def preencher(modelo, **valores):
    """Substitui {{chave}} no modelo de prompt."""
    for chave, valor in valores.items():
        modelo = modelo.replace("{{" + chave + "}}", str(valor))
    faltando = re.findall(r"\{\{(\w+)\}\}", modelo)
    if faltando:
        raise ValueError(f"Prompt com marcadores não preenchidos: {faltando}")
    return modelo


MARCA_FIM_CONTEUDO = "<!-- FIM DAS REGRAS DE CONTEÚDO"


def manifesto_para_llm():
    """Só a Parte I do manifesto (regras de conteúdo), que é o que o gerador e o crítico precisam."""
    texto = ler_texto(MANIFESTO)
    if MARCA_FIM_CONTEUDO not in texto:
        raise ValueError(f"Marca de fim das regras de conteúdo não encontrada em {MANIFESTO}")
    return texto.split(MARCA_FIM_CONTEUDO)[0].rstrip()


def carregar_canon():
    """Devolve {tema: [subtemas]} a partir do arquivo canônico."""
    return {t["tema"]: t["subtemas"] for t in ler_json(CANON)}


def registrar_log(encomenda, etapa, decisao, motivo, item=None):
    """Acrescenta uma linha ao log do dia (JSON Lines)."""
    agora = dt.datetime.now()
    entrada = {
        "quando": agora.isoformat(timespec="seconds"),
        "encomenda": encomenda,
        "etapa": etapa,
        "decisao": decisao,
        "motivo": motivo,
    }
    if item is not None:
        entrada["item"] = item
    LOG_DIR.mkdir(parents=True, exist_ok=True)
    with open(LOG_DIR / f"{agora:%Y-%m-%d}.jsonl", "a", encoding="utf-8") as f:
        f.write(json.dumps(entrada, ensure_ascii=False) + "\n")
