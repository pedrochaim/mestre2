"""Avatares customizados da Arena: converte as imagens de app/avatares/ para o site.

Cada imagem (PNG, JPG ou WebP) é recortada em quadrado no centro, reduzida para 256 × 256 e gravada em WebP em
app/public/avatares/, com a lista app/public/avatares/avatares.json que o app lê ([{id, nome, arquivo}]). O nome do
arquivo vira o nome do avatar ("tia_marta.png" → "Tia Marta") e o id ("c-tia_marta"). Pastas começadas por "_" ficam de
fora. Imagens que saíram de app/avatares/ também saem do site.

Uso: python app/avatares.py   (precisa do Pillow: pip install pillow)
"""
import json
import pathlib
import re
import sys

from PIL import Image

AQUI = pathlib.Path(__file__).resolve().parent
ORIGEM = AQUI / "avatares"
DESTINO = AQUI / "public" / "avatares"
LADO = 256
FORMATOS = {".png", ".jpg", ".jpeg", ".webp"}
MAX_ID = 24  # o mesmo limite da regra do Firestore para o campo "avatar"


def slug(nome):
    s = re.sub(r"[^a-z0-9_-]+", "_", nome.lower()).strip("_")
    return s[: MAX_ID - 2]


def nome_bonito(nome):
    return " ".join(p.capitalize() for p in re.split(r"[_\-\s]+", nome) if p)


def main():
    if not ORIGEM.exists():
        sys.exit(f"Não achei {ORIGEM}")
    DESTINO.mkdir(parents=True, exist_ok=True)
    lista, vistos = [], set()
    imagens = sorted(p for p in ORIGEM.rglob("*")
                     if p.is_file() and p.suffix.lower() in FORMATOS
                     and not any(parte.startswith("_") for parte in p.relative_to(ORIGEM).parts))
    for p in imagens:
        s = slug(p.stem)
        if not s or s in vistos:
            print(f"  pulei {p.name}: nome vazio ou repetido ({s!r})")
            continue
        vistos.add(s)
        im = Image.open(p)
        im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
        lado = min(im.size)
        x, y = (im.width - lado) // 2, (im.height - lado) // 2
        im = im.crop((x, y, x + lado, y + lado)).resize((LADO, LADO), Image.LANCZOS)
        arquivo = DESTINO / f"{s}.webp"
        im.save(arquivo, "WEBP", quality=82, method=6)
        lista.append({"id": f"c-{s}", "nome": nome_bonito(p.stem), "arquivo": f"avatares/{s}.webp"})
        print(f"  {p.name} → {arquivo.name} ({arquivo.stat().st_size // 1024} KB)")
    # Tira do site as imagens que não estão mais na origem.
    validos = {f"{s}.webp" for s in vistos}
    for velho in DESTINO.glob("*.webp"):
        if velho.name not in validos:
            velho.unlink()
            print(f"  removi {velho.name}")
    (DESTINO / "avatares.json").write_text(json.dumps(lista, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"{len(lista)} avatares customizados em {DESTINO}")


if __name__ == "__main__":
    main()
