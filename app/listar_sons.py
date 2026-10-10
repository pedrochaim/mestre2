"""Monta app/public/sons/sons.json, a lista de sons que o modo mesa toca, a partir dos arquivos da pasta.

Cada arquivo se chama <evento>_<número>.<extensão> (acerto_1.mp3, acerto_2.mp3...). Quando um evento tem mais
de um arquivo, o app sorteia um a cada vez. Para trocar um som, basta substituir o arquivo; para acrescentar,
pôr um arquivo com o próximo número. O crédito de cada arquivo (origem, autor, licença) fica em
sons/creditos.json, escrito à mão; sem ele, o script avisa. Rodado também pelo exportar_perguntas.py.
"""
import json
import re
from pathlib import Path

PASTA = Path(__file__).resolve().parent / "public" / "sons"
EVENTOS = ["nova_pergunta", "pergunta_final", "acerto", "erro", "resposta",
           "tempo_acabando", "tempo_esgotado", "vitoria"]
NOME = re.compile(r"^([a-z_]+)_(\d+)\.(mp3|ogg|wav|m4a)$")


def listar():
    if not PASTA.is_dir():
        return
    creditos_arq = PASTA / "creditos.json"
    creditos = json.loads(creditos_arq.read_text(encoding="utf-8")) if creditos_arq.exists() else {}
    sons, avisos = {}, []
    for f in sorted(PASTA.iterdir(), key=lambda f: f.name):
        if f.name in ("sons.json", "creditos.json"):
            continue
        m = NOME.match(f.name)
        if not m or m.group(1) not in EVENTOS:
            avisos.append(f"nome fora do padrão <evento>_<número>: {f.name}")
            continue
        if f.name not in creditos:
            avisos.append(f"sem crédito em creditos.json: {f.name}")
        sons.setdefault(m.group(1), []).append({"arquivo": f.name, **creditos.get(f.name, {})})
    (PASTA / "sons.json").write_text(json.dumps(sons, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{sum(len(v) for v in sons.values())} sons em {len(sons)} eventos"
          + (f"; sem som: {', '.join(e for e in EVENTOS if e not in sons)}" if len(sons) < len(EVENTOS) else ""))
    for a in avisos:
        print("Aviso (sons):", a)


if __name__ == "__main__":
    listar()
