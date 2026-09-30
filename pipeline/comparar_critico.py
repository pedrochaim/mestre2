"""Compara críticos: refaz a crítica de um lote já concluído com outro modelo e mostra, lado a lado, as
decisões do crítico original e do novo. Não grava nada no banco; só em trabalho/<encomenda>/comparacao_<modelo>_<esforco>.json.
Usa o mesmo prompt da etapa criticar, com os trechos das fontes (fontes.py).

Uso (na raiz do projeto):  python pipeline/comparar_critico.py historia_idade_media_01 sonnet medium
"""
import json
import sys

sys.stdout.reconfigure(encoding="utf-8")

import claude_cli  # noqa: E402
import etapas  # noqa: E402
from comum import ESQUEMAS_DIR, TRABALHO_DIR, gravar_json, ler_json  # noqa: E402

id_enc, modelo, esforco = sys.argv[1], sys.argv[2], (sys.argv[3] if len(sys.argv) > 3 else None)
pasta = TRABALHO_DIR / id_enc
itens = ler_json(pasta / etapas.ARQUIVOS["validar"])["itens"]
original = {a["indice"]: a for a in ler_json(pasta / "03_critica_bruta.json")["avaliacoes"]}
enc = next(e for e in ler_json(TRABALHO_DIR.parent / "encomendas.json")["encomendas"] if e["id"] == id_enc)

_, prompt = etapas.montar_prompt_critica(enc, itens, pasta)
claude_cli.contexto.update(encomenda=f"{id_enc}_comparacao", etapa=f"criticar_{modelo}_{esforco}")
saida = claude_cli.chamar(prompt, ler_json(ESQUEMAS_DIR / "saida_critica.json"), modelo, esforco, tempo_limite=3600)
gravar_json(pasta / f"comparacao_{modelo}_{esforco}.json", saida)
novo = {a["indice"]: a for a in saida["avaliacoes"]}

iguais = 0
for it in itens:
    i = it["_indice"]
    a, b = original.get(i, {}), novo.get(i, {})
    if a.get("decisao") == b.get("decisao"):
        iguais += 1
    marca = "  " if a.get("decisao") == b.get("decisao") else "≠ "
    print(f"{marca}[{i:2}] {it['pergunta'][:90]}")
    print(f"     original: {a.get('decisao', '—'):10} {a.get('motivo', '')[:140]}")
    print(f"     {modelo:8}: {b.get('decisao', '—'):10} [{b.get('apoio', '?')}] {b.get('motivo', '')[:140]}")
print(f"\nDecisões iguais: {iguais} de {len(itens)}")
