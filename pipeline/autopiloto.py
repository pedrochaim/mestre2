"""Autopiloto da programação até 10 000 perguntas (MANIFESTO §17).

Roda sozinho, fora de qualquer conversa: escolhe o próximo trabalho pelo maior déficit em relação ao plano
(pipeline/plano.json), alternando lotes de texto e de figuras; quando a cota do plano do claude.ai acaba, espera
e retoma da mesma etapa. Depois de cada lote, exporta as perguntas para o app e faz um commit local.

Uso (na raiz do projeto):
    python pipeline/autopiloto.py                 # roda até a meta, esperando a cota quando preciso
    python pipeline/autopiloto.py --max 3         # para depois de 3 trabalhos
    python pipeline/autopiloto.py --so-texto      # só lotes de texto (ou --so-figuras)
    python pipeline/autopiloto.py --publicar 5    # a cada 5 trabalhos, git push e deploy no Firebase
    python pipeline/autopiloto.py --status        # mostra o progresso e sai

Para parar com calma, crie o arquivo pipeline/PARAR: o autopiloto termina o trabalho atual e sai.
Enquanto ele roda, nada mais deve gravar no banco (o pipeline grava o banco inteiro no fim de cada lote).
"""

import argparse
import datetime as dt
import json
import os
import re
import subprocess
import sys
import time
import traceback

sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)
sys.stderr.reconfigure(encoding="utf-8")

import banco as bc  # noqa: E402
import figuras  # noqa: E402
import popularidade  # noqa: E402
import rodar  # noqa: E402
from claude_cli import ErroClaude  # noqa: E402
from comum import ENCOMENDAS, LOG_DIR, PIPELINE, RAIZ, carregar_canon, gravar_json, ler_json, slug  # noqa: E402

PLANO = PIPELINE / "plano.json"
TRAVA = PIPELINE / "autopiloto.lock"
PARAR = PIPELINE / "PARAR"
STATUS = LOG_DIR / "autopiloto_status.json"
DIARIO = LOG_DIR / "autopiloto.jsonl"
ESPERA_COTA = 15 * 60          # segundos entre tentativas quando a cota acaba
MAX_FALHAS = 3                 # falhas que não são de cota antes de pausar o subtema ou catálogo
LIMIAR_PAUSA_TEXTO = 20        # dois lotes seguidos com menos que isto pausam o subtema (assunto esgotado)
SINAIS_COTA = re.compile(r"limit|usage|quota|rate|overload|429|529|credit|exceed|reset", re.I)


def agora():
    return dt.datetime.now().isoformat(timespec="seconds")


def diario(evento, **dados):
    LOG_DIR.mkdir(parents=True, exist_ok=True)
    with open(DIARIO, "a", encoding="utf-8") as f:
        f.write(json.dumps({"quando": agora(), "evento": evento, **dados}, ensure_ascii=False) + "\n")


def status(**dados):
    gravar_json(STATUS, {"atualizado": agora(), **dados})


# ---------------------------------------------------------------- plano e progresso

def carregar_plano(canon):
    plano = ler_json(PLANO)
    faltando = [s for t, subs in canon.items() for s in subs if s not in plano["subtemas"]]
    sobrando = [s for s in plano["subtemas"] if not any(s in subs for subs in canon.values())]
    for cat in plano["catalogos"]:
        sobrando += [f"{cat['id']}: {t} › {s}" for t, s in cat["destinos"] if s not in canon.get(t, [])]
    if faltando or sobrando:
        sys.exit(f"plano.json fora da lista canônica. Faltando: {faltando}. Inválidos: {sobrando}")
    return plano


def metas_texto(plano, canon):
    metas = {}
    for tema, subs in canon.items():
        pesos = {s: plano["subtemas"][s].get("peso", 1) for s in subs}
        total = sum(pesos.values())
        for s in subs:
            metas[(tema, s)] = round(plano["temas"][tema]["texto"] * pesos[s] / total)
    return metas


def progresso(banco, plano, canon):
    texto, figura = {}, {}
    for p in banco.perguntas:
        alvo = figura if "imagem" in p else texto
        alvo[(p["tema"], p["subtema"])] = alvo.get((p["tema"], p["subtema"]), 0) + 1
    metas = metas_texto(plano, canon)
    est_fig = banco.estado.get("figuras", {})
    return {
        "texto": {k: (texto.get(k, 0), m) for k, m in metas.items()},
        "figura_tema": {t: (sum(n for (tt, _), n in figura.items() if tt == t), v["figura"]) for t, v in plano["temas"].items()},
        "catalogos": {c["id"]: (est_fig.get(c["id"], {}).get("registradas", 0), c["meta"]) for c in plano["catalogos"]},
        "total": len(banco.perguntas),
        "total_figura": sum(figura.values()),
    }


def imprimir_progresso(prog, plano):
    meta_total = plano["meta"]["total"]
    print(f"Banco: {prog['total']} de {meta_total} perguntas ({prog['total_figura']} com figura, meta "
          f"{round(meta_total * plano['meta']['fracao_figura'])}).")
    temas = {}
    for (t, s), (n, m) in prog["texto"].items():
        a = temas.setdefault(t, [0, 0])
        a[0] += n
        a[1] += m
    print(f"\n{'Tema':22} {'texto':>12} {'figura':>12}")
    for t, (n, m) in temas.items():
        nf, mf = prog["figura_tema"][t]
        print(f"{t:22} {n:5} / {m:<5} {nf:5} / {mf:<5}")


# ---------------------------------------------------------------- escolha do próximo trabalho

def escolher(banco, plano, canon, so=None):
    prog = progresso(banco, plano, canon)
    pausados = set(banco.estado.get("pausados", []))
    def_texto = {k: m - n for k, (n, m) in prog["texto"].items() if m - n > 0 and f"texto:{k[1]}" not in pausados}
    def_fig_tema = {t: m - n for t, (n, m) in prog["figura_tema"].items() if m - n > 0}
    falta_texto = sum(def_texto.values()) / max(1, sum(m for _, m in prog["texto"].values()))
    falta_fig = sum(def_fig_tema.values()) / max(1, sum(m for _, m in prog["figura_tema"].values()))

    def trabalho_figura():
        for tema in sorted(def_fig_tema, key=def_fig_tema.get, reverse=True):
            cats = [c for c in plano["catalogos"] if c["destinos"][0][0] == tema and f"figura:{c['id']}" not in pausados]
            cats = [c for c in cats if prog["catalogos"][c["id"]][1] - prog["catalogos"][c["id"]][0] > 0]
            if cats:
                return ("figura", max(cats, key=lambda c: prog["catalogos"][c["id"]][1] - prog["catalogos"][c["id"]][0]))
        return None

    def trabalho_texto():
        if not def_texto:
            return None
        tema, sub = max(def_texto, key=def_texto.get)
        return ("texto", (tema, sub))

    if so == "texto":
        return trabalho_texto()
    if so == "figuras":
        return trabalho_figura()
    primeiro, segundo = (trabalho_figura, trabalho_texto) if falta_fig > falta_texto else (trabalho_texto, trabalho_figura)
    return primeiro() or segundo()


def encomenda_pendente(banco):
    """Uma encomenda de texto já criada e ainda não concluída (por exemplo, interrompida pela cota)."""
    dados = ler_json(ENCOMENDAS)
    for e in dados["encomendas"]:
        if e["id"] not in banco.estado["concluidas"] and e.get("autopiloto"):
            return e
    return None


def lote_figura_pendente(banco):
    """Um lote de figuras começado e não concluído."""
    pendente = banco.estado.get("lote_figura_em_andamento")
    if pendente and pendente["id"] not in banco.estado["concluidas"]:
        return pendente
    return None


def criar_encomenda(tema, subtema, plano):
    dados = ler_json(ENCOMENDAS)
    base = slug(f"{tema}_{subtema}")
    anteriores = [e for e in dados["encomendas"] if e["subtema"] == subtema]
    n = len(anteriores) + 1
    ids = {e["id"] for e in dados["encomendas"]}
    while f"{base}_{n:02d}" in ids:
        n += 1
    rodizio = plano["angulos_rodizio"]
    obs = plano["subtemas"][subtema]["orientacao"] + " " + plano["orientacao_geral"]
    if anteriores:
        obs += (f" Este é o lote {n} do subtema: o banco já tem perguntas sobre ele (veja as listas abaixo). Aprofunde: "
                "procure âncoras e ângulos ainda não usados, sem cair em detalhes obscuros.")
    enc = {"id": f"{base}_{n:02d}", "tema": tema, "subtema": subtema, "quantidade": plano["lote_texto"]["quantidade"],
           "multipla": plano["lote_texto"]["multipla"], "angulos_alvo": rodizio[(n - 1) % len(rodizio)],
           "observacoes": obs, "autopiloto": True}
    dados["encomendas"].append(enc)
    gravar_json(ENCOMENDAS, dados)
    return enc


# ---------------------------------------------------------------- execução

def exportar_e_commitar(mensagem, publicar=False):
    subprocess.run([sys.executable, str(RAIZ / "app" / "exportar_perguntas.py")], cwd=RAIZ, capture_output=True)
    subprocess.run(["git", "add", "pipeline", "app/public"], cwd=RAIZ, capture_output=True)
    r = subprocess.run(["git", "commit", "-q", "-m", mensagem + "\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"],
                       cwd=RAIZ, capture_output=True, text=True)
    if publicar:
        subprocess.run(["git", "push", "-q", "origin", "main"], cwd=RAIZ, capture_output=True)
        npx = "npx.cmd" if os.name == "nt" else "npx"
        r2 = subprocess.run([npx, "-y", "firebase-tools@latest", "deploy", "--only", "hosting", "--project", "mestre2-626dd"],
                            cwd=RAIZ / "app", capture_output=True, text=True)
        diario("deploy", ok=r2.returncode == 0)
    return r.returncode == 0


def pausar(banco, chave, motivo):
    banco.estado.setdefault("pausados", [])
    if chave not in banco.estado["pausados"]:
        banco.estado["pausados"].append(chave)
    banco.salvar()
    diario("pausado", chave=chave, motivo=motivo)
    print(f"  ⏸ {chave} pausado: {motivo}")


def espera_da_cota(mensagem):
    """Segundos até a cota voltar: usa o horário de liberação da mensagem, se houver; senão, ESPERA_COTA."""
    achado = re.search(r"\|(\d{10})", mensagem)
    if achado:
        return max(60, int(achado.group(1)) - int(time.time()) + 60)
    return ESPERA_COTA


def trava():
    if TRAVA.exists():
        pid = TRAVA.read_text().strip()
        vivo = False
        if pid.isdigit():
            if os.name == "nt":
                r = subprocess.run(["tasklist", "/FI", f"PID eq {pid}"], capture_output=True, text=True)
                vivo = pid in r.stdout
            else:
                try:
                    os.kill(int(pid), 0)
                    vivo = True
                except OSError:
                    vivo = False
        if vivo:
            sys.exit(f"O autopiloto já está rodando (pid {pid}). Para parar, crie {PARAR}.")
    TRAVA.write_text(str(os.getpid()))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--max", type=int, default=0, help="número máximo de trabalhos (0 = até a meta)")
    ap.add_argument("--so-texto", action="store_true")
    ap.add_argument("--so-figuras", action="store_true")
    ap.add_argument("--publicar", type=int, default=0, help="push e deploy a cada N trabalhos (0 = nunca)")
    ap.add_argument("--status", action="store_true")
    args = ap.parse_args()
    so = "texto" if args.so_texto else "figuras" if args.so_figuras else None

    canon = carregar_canon()
    plano = carregar_plano(canon)
    if args.status:
        banco = bc.Banco()
        imprimir_progresso(progresso(banco, plano, canon), plano)
        print("\nPausados:", bc.Banco().estado.get("pausados", []) or "nenhum")
        st = ler_json(STATUS)
        if st:
            print("Autopiloto:", json.dumps(st, ensure_ascii=False))
        return

    trava()
    feitos, falhas = 0, {}
    diario("inicio", pid=os.getpid(), max=args.max, so=so)
    try:
        while True:
            if PARAR.exists():
                PARAR.unlink()
                diario("parado", motivo="arquivo PARAR")
                print("Arquivo PARAR encontrado; saindo.")
                break
            if args.max and feitos >= args.max:
                break
            banco = bc.Banco()
            enc = encomenda_pendente(banco)
            lote_fig = None if enc else lote_figura_pendente(banco)
            if not enc and not lote_fig:
                trabalho = escolher(banco, plano, canon, so)
                if trabalho is None:
                    diario("meta_atingida")
                    print("Nada mais a fazer: metas atingidas ou tudo pausado.")
                    break
                tipo, alvo = trabalho
                if tipo == "texto":
                    enc = criar_encomenda(alvo[0], alvo[1], plano)
                else:
                    lote_fig = {"id": figuras.proximo_lote_id(banco, alvo["id"]), "catalogo": alvo["id"]}
                    banco.estado["lote_figura_em_andamento"] = lote_fig
                    banco.salvar()
            chave = f"texto:{enc['subtema']}" if enc else f"figura:{lote_fig['catalogo']}"
            rotulo = enc["id"] if enc else lote_fig["id"]
            status(estado="rodando", trabalho=rotulo, feitos=feitos, total=len(banco.perguntas))
            try:
                if enc:
                    registradas = rodar.executar_encomenda(enc, banco, canon) or []
                    n = len(registradas)
                    hist = banco.estado.setdefault("rendimento", {}).setdefault(enc["subtema"], [])
                    hist.append(n)
                    banco.salvar()
                    if len(hist) >= 2 and all(x < LIMIAR_PAUSA_TEXTO for x in hist[-2:]):
                        pausar(banco, chave, f"dois lotes seguidos com menos de {LIMIAR_PAUSA_TEXTO} perguntas")
                else:
                    cat = next(c for c in plano["catalogos"] if c["id"] == lote_fig["catalogo"])
                    registradas = figuras.executar_lote(cat, banco, canon, rodar.CONFIG, plano["lote_figura"]["quantidade"],
                                                        lote_fig["id"])
                    n = len(registradas)
                    banco.estado.pop("lote_figura_em_andamento", None)
                    if n == 0 and not figuras.livres(figuras.carregar_catalogo(cat["id"])):
                        pausar(banco, chave, "catálogo sem entidades aproveitáveis")
                    banco.salvar()
                feitos += 1
                falhas.pop(chave, None)
                diario("concluido", trabalho=rotulo, registradas=n, total=len(banco.perguntas))
                if feitos % 5 == 0:
                    try:
                        popularidade.atualizar()
                    except Exception as ex:  # a dificuldade é ilustrativa: uma falha de rede não para o autopiloto
                        diario("aviso", motivo=f"popularidade: {ex}")
                publicar = bool(args.publicar) and feitos % args.publicar == 0
                exportar_e_commitar(f"Autopiloto: {rotulo} (+{n} perguntas; banco com {len(banco.perguntas)})", publicar)
            except ErroClaude as e:
                msg = str(e)
                if SINAIS_COTA.search(msg):
                    espera = espera_da_cota(msg)
                    volta = (dt.datetime.now() + dt.timedelta(seconds=espera)).isoformat(timespec="seconds")
                    diario("cota", trabalho=rotulo, mensagem=msg[:300], volta=volta)
                    status(estado="esperando a cota", trabalho=rotulo, volta=volta, feitos=feitos)
                    print(f"  Cota esgotada ou limite atingido. Nova tentativa às {volta}.", flush=True)
                    time.sleep(espera)
                else:
                    falhas[chave] = falhas.get(chave, 0) + 1
                    diario("falha", trabalho=rotulo, mensagem=msg[:500], vezes=falhas[chave])
                    print(f"  Falha ({falhas[chave]}/{MAX_FALHAS}): {msg[:200]}", flush=True)
                    if falhas[chave] >= MAX_FALHAS:
                        banco = bc.Banco()
                        pausar(banco, chave, f"{MAX_FALHAS} falhas seguidas: {msg[:120]}")
                        if enc:
                            banco.estado["concluidas"].append(enc["id"])
                        else:
                            banco.estado.pop("lote_figura_em_andamento", None)
                        banco.salvar()
                    time.sleep(60)
    except Exception as ex:
        diario("erro", mensagem=str(ex), rastro=traceback.format_exc()[-2000:])
        status(estado="parado por erro", erro=str(ex)[:300])
        raise
    finally:
        if TRAVA.exists() and TRAVA.read_text().strip() == str(os.getpid()):
            TRAVA.unlink()
    status(estado="parado", feitos=feitos)


if __name__ == "__main__":
    main()
