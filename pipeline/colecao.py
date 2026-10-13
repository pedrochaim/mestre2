"""Coleções temáticas (MANIFESTO §6, "Coleções"): perguntas de um modo de jogo próprio, como o modo Pokémon.

Uma pergunta com `colecao` sai no modo da coleção; com `exclusiva` também, sai só nele, nunca no jogo original
(Master, Trilha da Vida, Linear). O autopiloto não conta as exclusivas nas metas e não roda os catálogos delas:
os lotes são rodados à mão, com este comando (figuras) ou com o rodar.py (texto, numa encomenda que leve
"colecao" e "exclusiva").

Uso (na raiz do projeto):
    python pipeline/colecao.py status pokemon                # perguntas da coleção: texto, figura, exclusivas
    python pipeline/colecao.py figuras pokemon_modo --lotes 3  # lotes de figuras de um catálogo do plano.json
    python pipeline/rodar.py executar --encomenda pokemon_texto_01   # lote de texto da coleção
"""
import argparse
import sys
from collections import Counter

sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)

import banco as bc  # noqa: E402
import figuras  # noqa: E402
import popularidade  # noqa: E402
import rodar  # noqa: E402
from comum import PIPELINE, carregar_canon, ler_json  # noqa: E402


def status(colecao):
    ps = [p for p in bc.Banco().perguntas if p.get("colecao") == colecao]
    c = Counter(("figura" if "imagem" in p else "texto", "exclusiva" if p.get("exclusiva") else "jogo original") for p in ps)
    print(f"Coleção {colecao}: {len(ps)} perguntas.")
    for (forma, onde), n in sorted(c.items()):
        print(f"  {forma}, {onde}: {n}")


def lotes_de_figura(cat_id, n):
    canon = carregar_canon()
    plano = ler_json(PIPELINE / "plano.json")
    cat = next((c for c in plano["catalogos"] if c["id"] == cat_id), None)
    if cat is None:
        sys.exit(f"Catálogo {cat_id!r} não está no plano.json.")
    total = 0
    for _ in range(n):
        banco = bc.Banco()
        total += len(figuras.executar_lote(cat, banco, canon, rodar.CONFIG, plano["lote_figura"]["quantidade"]))
    print(f"\n{total} perguntas registradas em {n} lote(s).")
    popularidade.atualizar()


def main():
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="comando", required=True)
    s = sub.add_parser("status")
    s.add_argument("colecao")
    f = sub.add_parser("figuras")
    f.add_argument("catalogo")
    f.add_argument("--lotes", type=int, default=1)
    args = ap.parse_args()
    if args.comando == "status":
        status(args.colecao)
    else:
        lotes_de_figura(args.catalogo, args.lotes)


if __name__ == "__main__":
    main()
