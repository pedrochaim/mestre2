"""Junta pagina.html, cenas.js e sons.js numa página só: contagens_natureza.html (a do artifact, sem <!doctype>, que o
artifact acrescenta) e teste.html (a mesma, com <!doctype>, para abrir no navegador)."""
import os
pasta = os.path.dirname(os.path.abspath(__file__))
ler = lambda n: open(os.path.join(pasta, n), encoding="utf-8").read()
h = ler("pagina.html")
for js in ("cenas.js", "sons.js"):
    tag = f'<script src="{js}"></script>'
    assert h.count(tag) == 1
    h = h.replace(tag, "<script>\n" + ler(js).replace("</script", r"<\/script") + "\n</script>")
open(os.path.join(pasta, "contagens_natureza.html"), "w", encoding="utf-8").write(h)
open(os.path.join(pasta, "teste.html"), "w", encoding="utf-8").write('<!doctype html>\n<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0">\n' + h + "\n</body></html>")
print(len(h), "bytes")
