"""Baixa as avaliações que quem lê faz no app (MANIFESTO §4 e §16) e mostra um relatório por pergunta.

No app, quem lê pode avaliar a pergunta: dificuldade percebida (1 = muito fácil a 5 = muito difícil), ótima pergunta,
problemas (códigos fixos) e um comentário. Cada avaliação é um documento da coleção "avaliacoes" do Firestore, com o
id do sorteio. Este comando lê a coleção pela API REST (a leitura é pública), grava tudo em
pipeline/banco/avaliacoes.json e imprime o relatório. Por enquanto as avaliações só são registradas: não mudam a
dificuldade nem orientam a criação de perguntas.

Uso (na raiz do projeto):
    python pipeline/avaliacoes.py
"""
import json
import sys
import urllib.request
from collections import Counter, defaultdict
from statistics import mean

sys.stdout.reconfigure(encoding="utf-8")

from comum import BANCO_DIR, gravar_json, ler_json  # noqa: E402

PROJETO = "mestre2-626dd"
URL = f"https://firestore.googleapis.com/v1/projects/{PROJETO}/databases/(default)/documents/avaliacoes?pageSize=300"
NIVEIS = ["muito fácil", "fácil", "média", "difícil", "muito difícil"]
PROBLEMAS = {"fora_do_tema": "fora do tema ou subtema", "resposta_errada": "resposta errada ou discutível",
             "mais_de_uma_resposta": "mais de uma resposta", "enunciado_confuso": "enunciado confuso",
             "entrega_resposta": "entrega a resposta", "figura_ruim": "figura ruim", "repetida": "repetida",
             "desatualizada": "desatualizada"}
# Problemas que pedem revisão logo: a pergunta pode estar errada.
GRAVES = {"resposta_errada", "mais_de_uma_resposta", "entrega_resposta"}


def valor(v):
    """Converte um valor do formato REST do Firestore ({"stringValue": …}) para Python."""
    if "nullValue" in v:
        return None
    if "arrayValue" in v:
        return [valor(x) for x in v["arrayValue"].get("values", [])]
    if "mapValue" in v:
        return {k: valor(x) for k, x in v["mapValue"].get("fields", {}).items()}
    if "integerValue" in v:
        return int(v["integerValue"])
    for chave in ("stringValue", "booleanValue", "doubleValue", "timestampValue"):
        if chave in v:
            return v[chave]
    return None


def baixar():
    docs, pagina = [], None
    while True:
        url = URL + (f"&pageToken={pagina}" if pagina else "")
        with urllib.request.urlopen(url, timeout=60) as r:
            dados = json.load(r)
        for d in dados.get("documents", []):
            docs.append({"sorteio": d["name"].rsplit("/", 1)[1], **{k: valor(v) for k, v in d.get("fields", {}).items()}})
        pagina = dados.get("nextPageToken")
        if not pagina:
            return docs


def main():
    avaliacoes = baixar()
    gravar_json(BANCO_DIR / "avaliacoes.json", avaliacoes)
    print(f"{len(avaliacoes)} avaliações gravadas em pipeline/banco/avaliacoes.json.")
    if not avaliacoes:
        return
    # Avaliação sem nada marcado (quem lê desmarcou tudo) não diz nada e fica fora do relatório.
    vazias = [a for a in avaliacoes if not (a.get("dificuldade") or a.get("otima") or a.get("problemas") or a.get("comentario"))]
    avaliacoes = [a for a in avaliacoes if a not in vazias]
    if vazias:
        print(f"{len(vazias)} sem nada marcado, fora do relatório.")
    if not avaliacoes:
        return
    perguntas = {p["id"]: p for p in ler_json(BANCO_DIR / "perguntas.json", [])}
    por_pergunta = defaultdict(list)
    for a in avaliacoes:
        por_pergunta[a["pergunta"]].append(a)

    niveis = [a["dificuldade"] for a in avaliacoes if a.get("dificuldade")]
    problemas = Counter(c for a in avaliacoes for c in a.get("problemas") or [])
    print(f"Dificuldade percebida: {len(niveis)} avaliações"
          + (f", média {mean(niveis):.1f} ({', '.join(f'{NIVEIS[n - 1]}: {k}' for n, k in sorted(Counter(niveis).items()))})" if niveis else ""))
    print(f"Ótimas: {sum(1 for a in avaliacoes if a.get('otima'))}. Problemas: "
          + (", ".join(f"{PROBLEMAS.get(c, c)}: {k}" for c, k in problemas.most_common()) or "nenhum"))

    def linha(pid):
        p = perguntas.get(pid, {})
        return f"  {pid} [{p.get('tema', '?')} › {p.get('subtema', '?')}] {p.get('pergunta', '(fora do banco)')} → {p.get('resposta', '')}"

    graves = [pid for pid, lista in por_pergunta.items() if any(set(a.get("problemas") or []) & GRAVES for a in lista)]
    print(f"\nPara revisar ({len(graves)}): resposta errada, mais de uma resposta ou entrega a resposta")
    for pid in sorted(graves):
        print(linha(pid))
        for a in por_pergunta[pid]:
            print(f"      {', '.join(PROBLEMAS.get(c, c) for c in a.get('problemas') or [])}"
                  + (f" · \"{a['comentario']}\"" if a.get("comentario") else ""))

    outras = [pid for pid in por_pergunta if pid not in graves]
    print(f"\nOutras perguntas avaliadas ({len(outras)}): dificuldade percebida × estimada pela popularidade")
    for pid in sorted(outras):
        lista = por_pergunta[pid]
        ns = [a["dificuldade"] for a in lista if a.get("dificuldade")]
        extra = [PROBLEMAS.get(c, c) for a in lista for c in a.get("problemas") or []]
        partes = [f"percebida {mean(ns):.1f}" if ns else "sem nível", f"estimada {perguntas.get(pid, {}).get('dificuldade', '?')}"]
        if any(a.get("otima") for a in lista):
            partes.append("⭐")
        if extra:
            partes.append(", ".join(extra))
        comentarios = [a["comentario"] for a in lista if a.get("comentario")]
        print(linha(pid) + "\n      " + " · ".join(partes) + "".join(f' · "{c}"' for c in comentarios))


if __name__ == "__main__":
    main()
