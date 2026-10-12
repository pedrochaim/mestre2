"""Monta os sons do modo mesa a partir da biblioteca em app/sons/ (instruções em app/sons/LEIAME.md).

Cada ação tem uma pasta, app/sons/<ação>/, com os arquivos de som (qualquer nome; .ogg, .wav, .mp3, .m4a ou .flac)
e um creditos.json. Para cada arquivo, o script:
  - converte para .mp3, corta o silêncio do começo e do fim e iguala o volume ao dos outros sons;
  - grava o resultado em app/public/sons/<ação>/<nome>.mp3, que é o que vai para o site;
e no fim escreve app/public/sons/sons.json (a lista que o app lê, com os créditos) e app/sons/ouvir.html (uma página
para ouvir todos os sons, por ação, e os candidatos). Pastas que começam com "_" (_candidatos, _desativados) não vão
para o site.

Avisa quando falta crédito, quando uma pasta não está em acoes.json, quando uma ação não tem som e quando uma ação
não tem gatilho no app (o nome dela não aparece em public/index.html).

Uso (na raiz do projeto):  python app/sons.py           # converte o que mudou
                           python app/sons.py --tudo    # converte tudo de novo
Rodado também pelo exportar_perguntas.py. Precisa do ffmpeg: pip install imageio-ffmpeg.
"""
import html
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

APP = Path(__file__).resolve().parent
BIBLIOTECA = APP / "sons"
SAIDA = APP / "public" / "sons"
INDEX = APP / "public" / "index.html"
FORMATOS = {".ogg", ".wav", ".mp3", ".m4a", ".flac", ".aac", ".opus"}

# Volume: média (RMS) de -14 dB, perto da dos sons escolhidos em 2026-10-10, sem passar de -1 dB no pico. "ganho" no creditos.json soma a isso (em dB).
MEDIA_ALVO, PICO_MAX = -14.0, -1.0
# Corta o que estiver abaixo de -50 dB no começo e no fim.
CORTE = ("silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.02,"
         "areverse,silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.05,areverse")


def ffmpeg():
    exe = shutil.which("ffmpeg")
    if exe:
        return exe
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except ImportError:
        return None


def medir(exe, arq):
    """(média, pico) em dB, depois do corte de silêncio."""
    r = subprocess.run([exe, "-hide_banner", "-nostats", "-i", str(arq), "-af", CORTE + ",volumedetect", "-f", "null", "-"],
                       capture_output=True, text=True, encoding="utf-8", errors="replace")
    media = re.search(r"mean_volume: (-?[\d.]+) dB", r.stderr)
    pico = re.search(r"max_volume: (-?[\d.]+) dB", r.stderr)
    if not (media and pico):
        raise RuntimeError(f"não consegui medir {arq.name}: {r.stderr.strip()[-300:]}")
    return float(media.group(1)), float(pico.group(1))


def converter(exe, origem, destino, ganho_extra):
    media, pico = medir(exe, origem)
    ganho = min(MEDIA_ALVO - media, PICO_MAX - pico) + ganho_extra
    destino.parent.mkdir(parents=True, exist_ok=True)
    r = subprocess.run([exe, "-hide_banner", "-loglevel", "error", "-y", "-i", str(origem),
                        "-af", f"{CORTE},volume={ganho:.2f}dB", "-ac", "1", "-ar", "44100", "-b:a", "96k", str(destino)],
                       capture_output=True, text=True, encoding="utf-8", errors="replace")
    if r.returncode:
        raise RuntimeError(f"falha ao converter {origem.name}: {r.stderr.strip()[-300:]}")
    return ganho


def ler_creditos(pasta):
    arq = pasta / "creditos.json"
    if not arq.exists():
        return {}, {}
    dados = json.loads(arq.read_text(encoding="utf-8"))
    return dados.pop("*", {}), dados


def audios(pasta):
    return sorted((f for f in pasta.iterdir() if f.is_file() and f.suffix.lower() in FORMATOS), key=lambda f: f.name.lower())


def montar(tudo=False):
    if not BIBLIOTECA.is_dir():
        return
    acoes = json.loads((BIBLIOTECA / "acoes.json").read_text(encoding="utf-8"))
    codigo = INDEX.read_text(encoding="utf-8") if INDEX.exists() else ""
    exe = ffmpeg()
    avisos, sons, feitos = [], {}, set()
    pastas = sorted(p for p in BIBLIOTECA.iterdir() if p.is_dir() and not p.name.startswith("_"))
    for pasta in pastas:
        acao = pasta.name
        if acao not in acoes:
            avisos.append(f"pasta {acao}/ não está em acoes.json (acrescente a ação e quando ela toca)")
        padrao, creditos = ler_creditos(pasta)
        for f in audios(pasta):
            dados = {**padrao, **creditos.get(f.name, {})}
            ganho = float(dados.pop("ganho", 0))
            faltam = [c for c in ("origem", "autor", "licenca") if not dados.get(c)]
            if faltam:
                avisos.append(f"{acao}/{f.name}: falta {', '.join(faltam)} em {acao}/creditos.json")
            destino = SAIDA / acao / (f.stem + ".mp3")
            feitos.add(destino)
            # Converte de novo quando o original ou o creditos.json (que pode trazer "ganho") é mais novo.
            refs = [f.stat().st_mtime] + ([(pasta / "creditos.json").stat().st_mtime] if (pasta / "creditos.json").exists() else [])
            if tudo or not destino.exists() or destino.stat().st_mtime < max(refs):
                if exe is None:
                    avisos.append(f"{acao}/{f.name}: sem ffmpeg para converter (pip install imageio-ffmpeg)")
                    if not destino.exists():
                        continue
                else:
                    g = converter(exe, f, destino, ganho)
                    print(f"  convertido {acao}/{f.name} ({g:+.1f} dB)")
            sons.setdefault(acao, []).append({"arquivo": f"{acao}/{destino.name}", **dados})
    # O que sobrou na saída sem original correspondente (som apagado ou movido para _desativados) sai do site.
    for velho in SAIDA.rglob("*.mp3"):
        if velho not in feitos:
            velho.unlink()
            print(f"  removido do site: {velho.relative_to(SAIDA)}")
    for vazia in sorted((d for d in SAIDA.iterdir() if d.is_dir()), reverse=True):
        if not any(vazia.iterdir()):
            vazia.rmdir()
    SAIDA.mkdir(parents=True, exist_ok=True)
    (SAIDA / "sons.json").write_text(json.dumps(sons, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    for acao in acoes:
        if acao not in sons:
            avisos.append(f"ação {acao} sem nenhum som (ponha arquivos em app/sons/{acao}/)")
        if f'"{acao}"' not in codigo:
            avisos.append(f"ação {acao} sem gatilho no app: o nome não aparece em public/index.html")
    pagina_de_ouvir(acoes, sons)
    print(f"{sum(len(v) for v in sons.values())} sons em {len(sons)} ações; página para ouvir: app/sons/ouvir.html")
    for a in avisos:
        print("Aviso (sons):", a)


def pagina_de_ouvir(acoes, sons):
    """app/sons/ouvir.html: os sons de cada ação (como saem no site, já convertidos) e os candidatos."""
    e = html.escape
    blocos = []
    for acao in sorted(set(acoes) | set(sons), key=lambda a: list(acoes).index(a) if a in acoes else 99):
        itens = "".join(f'<li><button onclick="new Audio(\'../public/sons/{e(s["arquivo"])}\').play()">▶</button> '
                        f'{e(s["arquivo"].split("/", 1)[1])} <small>{e(s.get("autor", "sem autor"))}</small></li>'
                        for s in sons.get(acao, [])) or "<li><i>sem som</i></li>"
        blocos.append(f"<h2>{e(acao)}</h2><p>{e(acoes.get(acao, 'fora de acoes.json'))}</p><ul>{itens}</ul>")
    for extra in ("_candidatos", "_desativados"):
        pasta = BIBLIOTECA / extra
        lista = audios(pasta) if pasta.is_dir() else []
        if lista:
            itens = "".join(f'<li><button onclick="new Audio(\'{extra}/{e(f.name)}\').play()">▶</button> {e(f.name)}</li>'
                            for f in lista)
            blocos.append(f"<h2>{extra[1:]}</h2><p>Originais, sem conversão.</p><ul>{itens}</ul>")
    (BIBLIOTECA / "ouvir.html").write_text(
        '<!doctype html><meta charset="utf-8"><title>Sons do Mestre2</title>\n'
        "<style>body{font:16px system-ui;background:#111;color:#eee;max-width:680px;margin:2rem auto;padding:0 16px}"
        "button{font-size:1rem;margin-right:.5rem;cursor:pointer}li{list-style:none;margin:.3rem 0}h2{margin:1.6rem 0 .2rem}"
        "p{color:#999;margin:0 0 .4rem}small{color:#888}</style>\n"
        "<h1>Sons do Mestre2</h1><p>Gerada pelo app/sons.py. Toque ▶ para ouvir.</p>\n" + "\n".join(blocos) + "\n",
        encoding="utf-8")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    montar(tudo="--tudo" in sys.argv)
