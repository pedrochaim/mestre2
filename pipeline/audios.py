"""Perguntas com áudio (MANIFESTO §6, "Perguntas com áudio"): do catálogo para o banco.

Cada item do catálogo (pipeline/catalogos/audios_*.json) aponta um arquivo do Wikimedia Commons, o trecho
("inicio" e "duracao", em segundos) e a pergunta já escrita, com a âncora (existente, em "ancora_id", ou nova, em
"ancora"). O LLM não ouve áudio: a pergunta sai dos metadados do arquivo e das fontes, e uma pessoa confere o trecho
na página de ouvir antes de registrar.

Para cada item, o script:
  1. lê no Commons a licença, o autor e o endereço do arquivo, e recusa o que não for livre (domínio público, CC0,
     CC BY ou CC BY-SA; sem NC nem ND);
  2. baixa o original (fica em cache) e recorta o trecho com o ffmpeg: entrada e saída suaves e volume igualado;
  3. confere a pergunta (esquema, lista canônica, fontes que respondem, âncora e saturação: no máximo 5 perguntas
     e 1 áudio por âncora).

Uso (na raiz do projeto):
    python pipeline/audios.py preparar [catálogo]    # baixa, recorta e gera a página para ouvir; não grava no banco
    python pipeline/audios.py registrar [catálogo]   # grava no banco os itens aprovados
O catálogo padrão é audios_piloto. A página para ouvir fica em pipeline/trabalho/<catálogo>/ouvir.html.
"""
import argparse
import html
import json
import re
import shutil
import subprocess
import sys
import urllib.parse
import urllib.request

sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)

import banco as bc  # noqa: E402
from comum import BANCO_DIR, PIPELINE, TRABALHO_DIR, carregar_canon, gravar_json, ler_json, registrar_log  # noqa: E402

UA = {"User-Agent": "Mestre2/1.0 (quiz project; pedro.chaim@ufsc.br)"}
LIVRE = re.compile(r"^(public domain|domínio público|pd|cc0|cc by(-sa)? ?\d(\.\d)?( [a-z]+)?)$", re.I)
MAX_POR_ANCORA, MAX_AUDIO_POR_ANCORA = 5, 1
# Volume do trecho: média de -16 dB, sem passar de -1 dB no pico.
MEDIA_ALVO, PICO_MAX = -16.0, -1.0
SILENCIO = -45.0   # média abaixo disso: o trecho está mudo (início errado ou só ruído)


def ffmpeg():
    exe = shutil.which("ffmpeg")
    if exe:
        return exe
    import imageio_ffmpeg
    return imageio_ffmpeg.get_ffmpeg_exe()


def commons(titulo):
    """Endereço, licença, autor e duração de um arquivo do Commons."""
    p = dict(action="query", prop="imageinfo", titles=titulo, iiprop="url|extmetadata", format="json")
    r = json.load(urllib.request.urlopen(urllib.request.Request(
        "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(p), headers=UA), timeout=60))
    pg = next(iter(r["query"]["pages"].values()))
    if "imageinfo" not in pg:
        raise RuntimeError(f"arquivo não encontrado no Commons: {titulo}")
    ii = pg["imageinfo"][0]
    md = ii.get("extmetadata", {})
    limpo = lambda k: re.sub(r"\s+", " ", html.unescape(re.sub("<[^>]+>", "", md.get(k, {}).get("value", "")))).strip()
    return {"url": ii["url"], "pagina": ii["descriptionurl"], "licenca": limpo("LicenseShortName"),
            "autor": limpo("Artist"), "credito": limpo("Credit")}


def medir(exe, arq, filtro=""):
    r = subprocess.run([exe, "-hide_banner", "-nostats", "-i", str(arq), "-af", (filtro + "," if filtro else "") + "volumedetect",
                        "-f", "null", "-"], capture_output=True, text=True, encoding="utf-8", errors="replace")
    media = re.search(r"mean_volume: (-?[\d.]+) dB", r.stderr)
    pico = re.search(r"max_volume: (-?[\d.]+) dB", r.stderr)
    if not (media and pico):
        raise RuntimeError(f"não consegui medir {arq.name}")
    return float(media.group(1)), float(pico.group(1))


def recortar(exe, origem, destino, inicio, duracao):
    """Trecho de `duracao` segundos a partir de `inicio`, com entrada e saída suaves e volume igualado."""
    corte = f"atrim=start={inicio}:duration={duracao},asetpts=PTS-STARTPTS"
    fades = f"afade=t=in:d=0.3,afade=t=out:st={max(duracao - 1.5, 0):.2f}:d=1.5"
    media, pico = medir(exe, origem, corte)
    ganho = min(MEDIA_ALVO - media, PICO_MAX - pico)
    destino.parent.mkdir(parents=True, exist_ok=True)
    r = subprocess.run([exe, "-hide_banner", "-loglevel", "error", "-y", "-i", str(origem), "-af",
                        f"{corte},{fades},volume={ganho:.2f}dB", "-ar", "44100", "-b:a", "128k", str(destino)],
                       capture_output=True, text=True, encoding="utf-8", errors="replace")
    if r.returncode:
        raise RuntimeError(f"falha ao recortar {origem.name}: {r.stderr.strip()[-300:]}")
    return media


def preparar(nome, catalogo, banco, canon):
    pasta = TRABALHO_DIR / nome
    exe = ffmpeg()
    itens = catalogo["itens"]
    por_ancora = banco.perguntas_por_ancora()
    novas_no_lote, saida = {}, []
    for i, it in enumerate(itens, 1):
        r = {"indice": i, "arquivo": it["arquivo"], "problemas": []}
        try:
            info = commons(it["arquivo"])
        except Exception as e:
            r["problemas"].append(str(e))
            saida.append(r)
            continue
        r["origem"], r["licenca"] = info["pagina"], info["licenca"]
        r["autor"] = it.get("autor") or info["autor"]
        if not LIVRE.match(info["licenca"].strip()):
            r["problemas"].append(f"licença não aceita: {info['licenca']!r}")
        if not r["autor"]:
            r["problemas"].append("sem autor nos metadados: indique 'autor' no catálogo")
        # baixa (com cache) e recorta
        ext = info["url"].rsplit(".", 1)[-1].lower()
        original = pasta / "originais" / f"{i:02d}.{ext}"
        if not original.exists():
            original.parent.mkdir(parents=True, exist_ok=True)
            with urllib.request.urlopen(urllib.request.Request(info["url"], headers=UA), timeout=120) as resp:
                original.write_bytes(resp.read())
        clipe = pasta / "clipes" / f"{i:02d}.mp3"
        try:
            media = recortar(exe, original, clipe, it["inicio"], it["duracao"])
            if media < SILENCIO:
                r["problemas"].append(f"trecho quase mudo (média {media:.0f} dB)")
        except Exception as e:
            r["problemas"].append(str(e))
        # a pergunta
        p = {"id": "q00000", "tema": it["tema"], "subtema": it["subtema"], "ancora": it.get("ancora_id") or "nova",
             "angulo": it["angulo"], "tipo": it["tipo"], "pergunta": it["pergunta"], "resposta": it["resposta"]}
        if it["tipo"] == "multipla":
            p["distratores"] = it.get("distratores", [])
        p["fonte"] = it["fonte"]
        p["audio"] = {"arquivo": "q00000.mp3", "origem": r["origem"], "autor": r["autor"] or "?", "licenca": r["licenca"] or "?",
                      "inicio": it["inicio"], "duracao": it["duracao"]}
        r["problemas"] += bc.erros_pergunta(p, canon)
        r["avisos"] = bc.avisos_pergunta(p)
        if not bc.alguma_url_responde(it["fonte"]):
            r["problemas"].append("nenhuma fonte responde")
        # âncora e saturação
        if it.get("ancora_id"):
            ida = banco.resolver(it["ancora_id"])
            if ida is None:
                r["problemas"].append(f"âncora inexistente: {it['ancora_id']}")
            else:
                ps = por_ancora.get(ida, [])
                if len(ps) >= MAX_POR_ANCORA:
                    r["problemas"].append(f"âncora {ida} saturada ({len(ps)} perguntas)")
                if sum(1 for q in ps if "audio" in q) >= MAX_AUDIO_POR_ANCORA:
                    r["problemas"].append(f"âncora {ida} já tem pergunta com áudio")
                r["ancora"] = banco.ancora_por_id[ida]["nome"]
        else:
            a = it["ancora"]
            erros = bc.erros_ancora({"id": "x", "nome": a["nome"], "descricao": a["descricao"], "fontes": it["fonte"]})
            r["problemas"] += [f"âncora nova inválida: {e}" for e in erros]
            iguais = [c for c in bc.candidatas([a["nome"], *a.get("variantes", [])], banco.ancoras_ativas())
                      if bc.normalizar(c["nome"]) in {bc.normalizar(n) for n in [a["nome"], *a.get("variantes", [])]}]
            if iguais:
                r["problemas"].append(f"já existe âncora com esse nome: {iguais[0]['id']} (use ancora_id)")
            if bc.normalizar(a["nome"]) in novas_no_lote:
                r["problemas"].append("âncora nova repetida no catálogo")
            novas_no_lote[bc.normalizar(a["nome"])] = i
            r["ancora"] = a["nome"] + " (nova)"
        r["pergunta"] = p
        saida.append(r)
        print(f"  {i:02d} {'OK ' if not r['problemas'] else 'ERRO'} {it['pergunta']} → {it['resposta']}"
              + (f"  [{'; '.join(r['problemas'])}]" if r["problemas"] else ""))
    gravar_json(pasta / "preparado.json", saida)
    pagina_de_ouvir(pasta, catalogo, saida)
    ok = sum(1 for r in saida if not r["problemas"])
    print(f"\n{ok} de {len(saida)} itens sem problema. Ouça os trechos em {pasta / 'ouvir.html'}")


def pagina_de_ouvir(pasta, catalogo, saida):
    e = html.escape
    linhas = []
    for r, it in zip(saida, catalogo["itens"]):
        p = r.get("pergunta", {})
        alternativas = f" <small>(alternativas: {e(', '.join([p['resposta'], *p.get('distratores', [])]))})</small>" if p.get("distratores") else ""
        prob = f'<p class="erro">{e("; ".join(r["problemas"]))}</p>' if r["problemas"] else ""
        linhas.append(
            f'<li><audio controls preload="none" src="clipes/{r["indice"]:02d}.mp3"></audio>'
            f'<div><b>{r["indice"]:02d}. {e(it["pergunta"])}</b> → {e(it["resposta"])}{alternativas}<br>'
            f'<small>{e(it["tema"])} › {e(it["subtema"])} · trecho {it["inicio"]}–{it["inicio"] + it["duracao"]} s · '
            f'{e(r.get("autor") or "?")}, {e(r.get("licenca") or "?")} · <a href="{e(r.get("origem", ""))}">original</a></small>{prob}</div></li>')
    (pasta / "ouvir.html").write_text(
        '<!doctype html><meta charset="utf-8"><title>Perguntas com áudio</title>\n'
        "<style>body{font:15px system-ui;background:#111;color:#eee;max-width:900px;margin:2rem auto;padding:0 16px}"
        "li{list-style:none;display:flex;gap:1rem;align-items:center;margin:.8rem 0;padding-bottom:.8rem;border-bottom:1px solid #333}"
        "small{color:#999}a{color:#7c9cf5}.erro{color:#f07a64;margin:.2rem 0 0}audio{flex:none}</style>\n"
        f"<h1>Perguntas com áudio · {len(saida)} itens</h1><p>Confira se cada trecho é reconhecível e não entrega a resposta "
        "(locutor anunciando o nome da música, por exemplo). Para mudar o trecho, edite 'inicio' e 'duracao' no catálogo e "
        "rode preparar de novo.</p><ol>\n" + "\n".join(linhas) + "\n</ol>\n", encoding="utf-8")


def registrar(nome, catalogo, banco, canon):
    pasta = TRABALHO_DIR / nome
    preparado = ler_json(pasta / "preparado.json")
    if preparado is None:
        sys.exit("Rode 'preparar' antes de 'registrar'.")
    (BANCO_DIR / "audios").mkdir(exist_ok=True)
    gravadas = 0
    for r, it in zip(preparado, catalogo["itens"]):
        resumo = {"arquivo": it["arquivo"], "pergunta": it["pergunta"]}
        if r["problemas"]:
            registrar_log(nome, "audios", "descartada", "; ".join(r["problemas"]), resumo)
            continue
        p = dict(r["pergunta"])
        if it.get("ancora_id"):
            p["ancora"] = banco.resolver(it["ancora_id"])
        else:
            a = it["ancora"]
            nova = {"id": banco.novo_id_ancora(a["nome"]), "nome": a["nome"], "descricao": a["descricao"]}
            if a.get("variantes"):
                nova["variantes"] = a["variantes"]
            nova["fontes"] = it["fonte"]
            banco.adicionar_ancora(nova)
            p["ancora"] = nova["id"]
        p["id"] = f"q{banco.proximo_numero():05d}"
        p["audio"] = {**p["audio"], "arquivo": f"{p['id']}.mp3"}
        shutil.copy2(pasta / "clipes" / f"{r['indice']:02d}.mp3", BANCO_DIR / "audios" / p["audio"]["arquivo"])
        banco.perguntas.append(p)
        gravadas += 1
        registrar_log(nome, "audios", "registrada", "pergunta com áudio do catálogo", {"id": p["id"], **resumo})
        print(f"  {p['id']} {p['pergunta']} → {p['resposta']}")
    banco.salvar()
    print(f"{gravadas} perguntas com áudio gravadas; banco com {len(banco.perguntas)}.")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("acao", choices=["preparar", "registrar"])
    ap.add_argument("catalogo", nargs="?", default="audios_piloto")
    args = ap.parse_args()
    catalogo = ler_json(PIPELINE / "catalogos" / f"{args.catalogo}.json")
    banco, canon = bc.Banco(), carregar_canon()
    (preparar if args.acao == "preparar" else registrar)(args.catalogo, catalogo, banco, canon)


if __name__ == "__main__":
    main()
