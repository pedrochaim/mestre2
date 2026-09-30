"""Pipeline de geração de perguntas do Mestre2, usando o Claude Code (`claude -p`).

Uso (a partir da raiz do projeto):
    python pipeline/rodar.py executar                  # processa todas as encomendas pendentes
    python pipeline/rodar.py executar --encomenda ID   # só uma encomenda
    python pipeline/rodar.py executar --ate gerar      # para depois da etapa indicada
    python pipeline/rodar.py simular --encomenda ID    # só monta o prompt de geração, sem chamar o Claude
    python pipeline/rodar.py validar                   # confere o banco inteiro
    python pipeline/rodar.py relatorio                 # distribuição por subtema, ângulo e tipo
    python pipeline/rodar.py consolidar                # procura e funde âncoras duplicadas
    python pipeline/rodar.py dificuldade [--forcar]    # popularidade na Wikipédia → dificuldade
"""

import argparse
import re
import sys
from collections import Counter, defaultdict

sys.stdout.reconfigure(encoding="utf-8")
sys.stderr.reconfigure(encoding="utf-8")

import banco as bc  # noqa: E402
import etapas  # noqa: E402
import popularidade  # noqa: E402
import claude_cli  # noqa: E402
from claude_cli import ErroClaude  # noqa: E402
from comum import ENCOMENDAS, TRABALHO_DIR, carregar_canon, gravar_json, gravar_texto, ler_json, normalizar, registrar_log  # noqa: E402

# Modelos e esforço de cada etapa. "opus" e "sonnet" são apelidos do Claude Code
# para a versão mais recente de cada linha. Tempo limite em segundos.
CONFIG = {
    "gerar":    {"modelo": "opus",   "esforco": "high",   "tempo_limite": 3600},
    "criticar": {"modelo": "sonnet", "esforco": "medium", "tempo_limite": 3600},
    "julgar":   {"modelo": "sonnet", "esforco": "medium", "tempo_limite": 900},
}

ORDEM = ["gerar", "validar", "criticar", "ancoras", "registrar"]


# ---------------------------------------------------------------- encomendas

def carregar_encomendas(canon):
    dados = ler_json(ENCOMENDAS)
    if dados is None:
        sys.exit(f"Arquivo de encomendas não encontrado: {ENCOMENDAS}")
    erros, vistos = [], set()
    for e in dados["encomendas"]:
        rotulo = e.get("id", "?")
        if not re.fullmatch(r"[a-z0-9]+(_[a-z0-9]+)*", rotulo):
            erros.append(f"{rotulo}: id deve ser minúsculo, sem acento, com '_'")
        if rotulo in vistos:
            erros.append(f"{rotulo}: id repetido")
        vistos.add(rotulo)
        if e.get("tema") not in canon:
            erros.append(f"{rotulo}: tema fora da lista canônica: {e.get('tema')!r}")
        elif e.get("subtema") not in canon[e["tema"]]:
            erros.append(f"{rotulo}: subtema fora da lista canônica: {e.get('subtema')!r}")
        qtd = e.get("quantidade")
        if not isinstance(qtd, int) or qtd < 1:
            erros.append(f"{rotulo}: quantidade deve ser um inteiro positivo")
        elif not 0 <= e.get("multipla", 0) <= qtd:
            erros.append(f"{rotulo}: multipla deve estar entre 0 e a quantidade")
    if erros:
        sys.exit("Encomendas inválidas:\n  " + "\n  ".join(erros))
    return dados["encomendas"]


def selecionar(encomendas, banco, id_encomenda):
    if id_encomenda:
        escolhidas = [e for e in encomendas if e["id"] == id_encomenda]
        if not escolhidas:
            sys.exit(f"Encomenda não encontrada: {id_encomenda}")
        return escolhidas
    return [e for e in encomendas if e["id"] not in banco.estado["concluidas"]]


# ---------------------------------------------------------------- comandos

def cmd_executar(args):
    canon = carregar_canon()
    banco = bc.Banco()
    encomendas = selecionar(carregar_encomendas(canon), banco, args.encomenda)
    if not encomendas:
        print("Nenhuma encomenda pendente.")
        return

    ultima = ORDEM.index(args.ate) if args.ate else len(ORDEM) - 1
    for enc in encomendas:
        if enc["id"] in banco.estado["concluidas"]:
            print(f"[{enc['id']}] já concluída; pulando.")
            continue
        pasta = TRABALHO_DIR / enc["id"]
        pasta.mkdir(parents=True, exist_ok=True)
        print(f"\n[{enc['id']}] {enc['tema']} › {enc['subtema']} ({enc['quantidade']} perguntas)")

        try:
            for n, etapa in enumerate(ORDEM[:ultima + 1]):
                arquivo = etapas.ARQUIVOS.get(etapa)
                if arquivo and (pasta / arquivo).exists():
                    print(f"  {n + 1}. {etapa}: já feita")
                    continue
                print(f"  {n + 1}. {etapa}…", flush=True)
                claude_cli.contexto.update(encomenda=enc["id"], etapa=etapa)
                if etapa == "gerar":
                    etapas.gerar(enc, banco, pasta, CONFIG)
                elif etapa == "validar":
                    etapas.validar(enc, banco, canon, pasta)
                elif etapa == "criticar":
                    etapas.criticar(enc, canon, pasta, CONFIG)
                elif etapa == "ancoras":
                    etapas.resolver_ancoras(enc, banco, pasta, CONFIG)
                elif etapa == "registrar":
                    registradas = etapas.registrar(enc, banco, canon, pasta)
                    print(f"  → {len(registradas)} perguntas entraram no banco.")
        except ErroClaude as e:
            registrar_log(enc["id"], "execucao", "interrompida", str(e))
            print(f"\nInterrompido: {e}\nRode o mesmo comando mais tarde; o pipeline retoma desta etapa.")
            sys.exit(2)

        if ultima < len(ORDEM) - 1:
            print(f"  Parado após a etapa '{args.ate}'. Resultados em {pasta}")

    if ultima == len(ORDEM) - 1:
        print("\nDificuldade (popularidade das âncoras na Wikipédia)…")
        popularidade.atualizar()


def cmd_recuperar(args):
    """Recupera perguntas que o crítico mandou reescrever sem enviar a reescrita, em lotes já concluídos
    (antes da segunda tentativa automática). Pede só essas reescritas e as passa por âncoras e registro,
    numa pasta de trabalho própria (<encomenda>_recuperacao)."""
    canon = carregar_canon()
    banco = bc.Banco()
    encomendas = {e["id"]: e for e in carregar_encomendas(canon)}
    alvos = [args.encomenda] if args.encomenda else sorted(encomendas)
    for id_enc in alvos:
        origem = TRABALHO_DIR / id_enc
        bruta = ler_json(origem / "03_critica_bruta.json")
        if id_enc not in banco.estado["concluidas"] or bruta is None:
            continue
        rec = {**encomendas[id_enc], "id": f"{id_enc}_recuperacao"}
        if rec["id"] in banco.estado["concluidas"]:
            print(f"[{id_enc}] já recuperada; pulando.")
            continue
        avaliacoes = {a["indice"]: a for a in bruta["avaliacoes"]
                      if a["decisao"] == "reescrever" and not a.get("reescrita")}
        if not avaliacoes:
            continue
        itens = [it for it in ler_json(origem / etapas.ARQUIVOS["validar"])["itens"] if it["_indice"] in avaliacoes]
        pasta = TRABALHO_DIR / rec["id"]
        pasta.mkdir(parents=True, exist_ok=True)
        print(f"\n[{id_enc}] {len(itens)} reescrita(s) faltando")
        try:
            claude_cli.contexto.update(encomenda=rec["id"], etapa="criticar")
            etapas.completar_reescritas(rec, avaliacoes, etapas.lote_para_critica(itens), pasta, CONFIG)
            resultado = etapas.aplicar_avaliacoes(rec, itens, avaliacoes, canon)
            gravar_json(pasta / etapas.ARQUIVOS["criticar"], {"itens": resultado})
            claude_cli.contexto.update(etapa="ancoras")
            etapas.resolver_ancoras(rec, banco, pasta, CONFIG)
            registradas = etapas.registrar(rec, banco, canon, pasta)
            print(f"  → {len(registradas)} pergunta(s) recuperada(s).")
        except ErroClaude as e:
            print(f"\nInterrompido: {e}")
            sys.exit(2)
    popularidade.atualizar()


def cmd_simular(args):
    canon = carregar_canon()
    banco = bc.Banco()
    escolhidas = selecionar(carregar_encomendas(canon), banco, args.encomenda)
    if not escolhidas:
        sys.exit("Nenhuma encomenda pendente para simular.")
    enc = escolhidas[0]
    destino = TRABALHO_DIR / enc["id"] / "01_prompt_simulado.md"
    prompt = etapas.montar_prompt_geracao(enc, banco)
    gravar_texto(destino, prompt)
    print(f"Prompt de geração gravado em {destino} ({len(prompt)} caracteres).")


def cmd_validar(_args):
    canon = carregar_canon()
    banco = bc.Banco()
    problemas = []

    ids_ancoras = Counter(a["id"] for a in banco.ancoras)
    problemas += [f"âncora com id repetido: {i}" for i, n in ids_ancoras.items() if n > 1]
    for a in banco.ancoras:
        problemas += [f"âncora {a['id']}: {e}" for e in bc.erros_ancora(a)]
        if a.get("fundida_em") and banco.resolver(a["id"]) is None:
            problemas.append(f"âncora {a['id']}: fundida_em aponta para âncora inexistente")

    ids_perguntas = Counter(p["id"] for p in banco.perguntas)
    problemas += [f"pergunta com id repetido: {i}" for i, n in ids_perguntas.items() if n > 1]
    for p in banco.perguntas:
        problemas += [f"pergunta {p.get('id')}: {e}" for e in bc.erros_pergunta(p, canon)]
        if banco.resolver(p.get("ancora")) is None:
            problemas.append(f"pergunta {p.get('id')}: âncora inexistente {p.get('ancora')!r}")

    print(f"{len(banco.perguntas)} perguntas, {len(banco.ancoras)} âncoras "
          f"({len(banco.ancoras_ativas())} ativas).")
    if problemas:
        print(f"{len(problemas)} problema(s):")
        for p in problemas:
            print("  -", p)
        sys.exit(1)
    print("Nenhum problema encontrado.")


def cmd_relatorio(_args):
    banco = bc.Banco()
    canon = carregar_canon()
    por_subtema = defaultdict(list)
    for p in banco.perguntas:
        por_subtema[(p["tema"], p["subtema"])].append(p)

    print(f"Total: {len(banco.perguntas)} perguntas, {len(banco.ancoras_ativas())} âncoras ativas.\n")
    for tema, subtemas in canon.items():
        total_tema = sum(len(por_subtema[(tema, s)]) for s in subtemas)
        print(f"{tema}: {total_tema}")
        for s in subtemas:
            ps = por_subtema[(tema, s)]
            if not ps:
                continue
            angulos = Counter(p["angulo"] for p in ps)
            multipla = sum(p["tipo"] == "multipla" for p in ps)
            ancoras = len({banco.resolver(p["ancora"]) for p in ps})
            dist = ", ".join(f"{a} {n}" for a, n in angulos.most_common())
            print(f"  {s}: {len(ps)} perguntas, {ancoras} âncoras, {multipla} múltipla | {dist}")
        print()


PALAVRAS_VAZIAS = {"de", "da", "do", "das", "dos", "e", "the", "of", "a", "o", "as", "os", "la", "el"}


def cmd_consolidar(_args):
    """Procura pares de âncoras ativas com nomes parecidos e pede ao juiz que decida."""
    banco = bc.Banco()
    ativas = banco.ancoras_ativas()

    # Só compara âncoras que compartilham ao menos uma palavra significativa.
    por_palavra = defaultdict(set)
    for i, a in enumerate(ativas):
        for nome in [a["nome"], *a.get("variantes", [])]:
            for palavra in normalizar(nome).split():
                if len(palavra) > 2 and palavra not in PALAVRAS_VAZIAS:
                    por_palavra[palavra].add(i)

    casos, pares = [], []
    for i, a in enumerate(ativas):
        vizinhas = set().union(*(por_palavra[w] for nome in [a["nome"], *a.get("variantes", [])]
                                 for w in normalizar(nome).split() if w in por_palavra))
        grupo = [ativas[j] for j in sorted(vizinhas) if j > i]
        cands = bc.candidatas([a["nome"], *a.get("variantes", [])], grupo)
        if cands:
            n = len(casos) + 1
            casos.append({"caso": n, "proposta": etapas._ficha(a), "candidatas": [etapas._ficha(c) for c in cands]})
            pares.append((n, a["id"]))

    if not casos:
        print("Nenhum par suspeito de duplicata.")
        return
    print(f"{len(casos)} âncora(s) com candidatas parecidas; consultando o juiz…")
    try:
        decisoes = etapas.julgar(casos, CONFIG)
    except ErroClaude as e:
        sys.exit(f"Interrompido: {e}")

    uso = Counter(banco.resolver(p["ancora"]) for p in banco.perguntas)
    fundidas = 0
    for n, id_a in pares:
        d = decisoes.get(n)
        if not d or d["decisao"] != "mesma":
            continue
        a, b = banco.resolver(id_a), banco.resolver(d.get("id_existente", ""))
        if a is None or b is None or a == b:
            continue
        # A que tem mais perguntas absorve a outra.
        destino, origem = (a, b) if uso[a] >= uso[b] else (b, a)
        o = banco.ancora_por_id[origem]
        banco.acrescentar_variantes(destino, [o["nome"], *o.get("variantes", [])])
        o["fundida_em"] = destino
        uso[destino] += uso.pop(origem, 0)
        fundidas += 1
        registrar_log("consolidacao", "consolidar", "fundida", d["motivo"], {"origem": origem, "destino": destino})

    banco.salvar()
    print(f"{fundidas} fusão(ões) realizada(s).")


# ---------------------------------------------------------------- CLI

def main():
    parser = argparse.ArgumentParser(description="Pipeline de geração de perguntas do Mestre2.")
    sub = parser.add_subparsers(dest="comando", required=True)

    p = sub.add_parser("executar", help="processa as encomendas pendentes")
    p.add_argument("--encomenda", help="id de uma encomenda específica")
    p.add_argument("--ate", choices=ORDEM[:-1], help="para depois desta etapa")
    p.set_defaults(func=cmd_executar)

    p = sub.add_parser("simular", help="monta o prompt de geração sem chamar o Claude")
    p.add_argument("--encomenda", help="id da encomenda (padrão: a primeira pendente)")
    p.set_defaults(func=cmd_simular)

    sub.add_parser("validar", help="confere o banco inteiro").set_defaults(func=cmd_validar)
    sub.add_parser("relatorio", help="distribuição do banco").set_defaults(func=cmd_relatorio)
    sub.add_parser("consolidar", help="funde âncoras duplicadas").set_defaults(func=cmd_consolidar)

    p = sub.add_parser("recuperar", help="recupera reescritas que o crítico não enviou em lotes já concluídos")
    p.add_argument("--encomenda", help="id de uma encomenda específica")
    p.set_defaults(func=cmd_recuperar)

    p = sub.add_parser("dificuldade", help="mede a popularidade das âncoras e estima a dificuldade")
    p.add_argument("--forcar", action="store_true", help="mede de novo todas as âncoras, mesmo as já medidas")
    p.set_defaults(func=lambda a: popularidade.atualizar(a.forcar))

    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
