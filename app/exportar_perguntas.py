"""Copia o banco do pipeline para o app, só com os campos que o app usa, as imagens e os áudios.

A âncora sai já resolvida no cadastro (nome e descrição), para o painel "Sobre a pergunta"; se ela foi
fundida em outra, vale a entrada que a absorveu.

Uso (na pasta app/):  python exportar_perguntas.py  e depois  npx -y firebase-tools@latest deploy
"""
import json
import shutil
import sys
from pathlib import Path

AQUI = Path(__file__).parent
sys.path.insert(0, str(AQUI.parent / "pipeline"))
from banco import casa_pokemon  # noqa: E402  (a casa temática do modo Pokémon de cada pergunta da coleção)
BANCO = AQUI.parent / "pipeline" / "banco"
PUBLICO = AQUI / "public"
# "colecao" e "exclusiva": o modo Pokémon sorteia as da coleção; as exclusivas ficam fora do jogo original.
# "casa" (só na coleção pokemon): a casa temática do tabuleiro do modo Pokémon em que a pergunta sai.
CAMPOS = ["id", "tema", "subtema", "tipo", "pergunta", "resposta", "distratores", "imagem", "audio",
          "angulo", "fonte", "autor", "dificuldade", "colecao", "exclusiva"]

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
    if casa_pokemon(p):
        q["casa"] = casa_pokemon(p)
    if ancora(p.get("ancora")):
        q["ancora"] = ancora(p["ancora"])
    saida.append(q)
(PUBLICO / "perguntas.json").write_text(json.dumps(saida, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

img = PUBLICO / "img"
img.mkdir(exist_ok=True)
com_imagem = [p for p in saida if "imagem" in p]
# A figura da pergunta e, se houver, a revelação mostrada depois da resposta (silhuetas de Pokémon).
em_uso = {p["imagem"][k] for p in com_imagem for k in ("arquivo", "revelacao") if k in p["imagem"]}
for arquivo in em_uso:
    shutil.copy2(BANCO / "imagens" / arquivo, img / arquivo)
# Imagens de perguntas apagadas saem do site: senão continuariam publicadas, ainda que sem pergunta.
orfas = [f for f in img.iterdir() if f.is_file() and f.name not in em_uso]
for f in orfas:
    f.unlink()

# Áudios das perguntas (tocam na tela grande do modo mesa); os de perguntas apagadas saem do site.
pasta_audio = PUBLICO / "audio"
pasta_audio.mkdir(exist_ok=True)
com_audio = [p for p in saida if "audio" in p]
audios_em_uso = {p["audio"]["arquivo"] for p in com_audio}
for arquivo in audios_em_uso:
    shutil.copy2(BANCO / "audios" / arquivo, pasta_audio / arquivo)
for f in pasta_audio.iterdir():
    if f.is_file() and f.name not in audios_em_uso:
        f.unlink()

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
print(f"{len(saida)} perguntas exportadas ({len(com_imagem)} com figura, {len(com_audio)} com áudio)")
if sem_ancora:
    print("Aviso: âncora não encontrada no cadastro:", ", ".join(sem_ancora))
if sem_descricao:
    print("Aviso: sem descrição em descricoes.json:", ", ".join(sem_descricao))

# Sons do modo mesa: converte o que mudou na biblioteca app/sons/ e refaz public/sons/sons.json.
import sons
sons.montar()
