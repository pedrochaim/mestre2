"""Copia o banco do pipeline para o app, só com os campos que o app usa, e as imagens.

A âncora sai já resolvida no cadastro (nome e descrição), para o painel "Sobre a pergunta"; se ela foi
fundida em outra, vale a entrada que a absorveu.

Uso (na pasta app/):  python exportar_perguntas.py  e depois  npx -y firebase-tools@latest deploy
"""
import json
import shutil
from pathlib import Path

AQUI = Path(__file__).parent
BANCO = AQUI.parent / "pipeline" / "banco"
PUBLICO = AQUI / "public"
CAMPOS = ["id", "tema", "subtema", "tipo", "pergunta", "resposta", "distratores", "imagem",
          "angulo", "fonte", "autor", "dificuldade"]

perguntas = json.loads((BANCO / "perguntas.json").read_text(encoding="utf-8"))
ancoras = {a["id"]: a for a in json.loads((BANCO / "ancoras.json").read_text(encoding="utf-8"))}


def ancora(id_ancora):
    a = ancoras.get(id_ancora)
    while a and a.get("fundida_em"):
        a = ancoras.get(a["fundida_em"])
    return {"nome": a["nome"], "descricao": a["descricao"]} if a else None


saida = []
for p in perguntas:
    q = {c: p[c] for c in CAMPOS if c in p}
    if ancora(p.get("ancora")):
        q["ancora"] = ancora(p["ancora"])
    saida.append(q)
(PUBLICO / "perguntas.json").write_text(json.dumps(saida, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

img = PUBLICO / "img"
img.mkdir(exist_ok=True)
com_imagem = [p for p in saida if "imagem" in p]
for p in com_imagem:
    shutil.copy2(BANCO / "imagens" / p["imagem"]["arquivo"], img / p["imagem"]["arquivo"])

# Temas e subtemas na ordem canônica, com as descrições para os jogadores (aba Informações).
canonicos = json.loads((AQUI.parent / "manifesto" / "temas_subtemas.json").read_text(encoding="utf-8"))
descricoes = json.loads((AQUI / "descricoes.json").read_text(encoding="utf-8"))
temas = [{"tema": t["tema"], "descricao": descricoes["temas"].get(t["tema"], ""),
          "subtemas": [{"subtema": s, "descricao": descricoes["subtemas"].get(s, "")} for s in t["subtemas"]]}
         for t in canonicos]
(PUBLICO / "temas.json").write_text(json.dumps(temas, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
sem_descricao = [t["tema"] for t in temas if not t["descricao"]] + \
                [s["subtema"] for t in temas for s in t["subtemas"] if not s["descricao"]]

sem_ancora = [p["id"] for p in saida if "ancora" not in p]
print(f"{len(saida)} perguntas exportadas ({len(com_imagem)} com figura)")
if sem_ancora:
    print("Aviso: âncora não encontrada no cadastro:", ", ".join(sem_ancora))
if sem_descricao:
    print("Aviso: sem descrição em descricoes.json:", ", ".join(sem_descricao))
