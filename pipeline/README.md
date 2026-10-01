# Pipeline de geração de perguntas — Mestre2

Gera perguntas seguindo o [MANIFESTO](../manifesto/MANIFESTO.md), usando o **Claude Code em modo não interativo** (`claude -p`).

**Não há custo de API.** O pipeline usa a conta do claude.ai em que o Claude Code está logado, e cada chamada consome a cota do seu plano. Se a cota acabar no meio, o pipeline para e **retoma da mesma etapa** quando você rodar o comando de novo.

## Requisitos

- Claude Code instalado e logado (`claude auth status` deve mostrar `loggedIn: true`).
- Python 3 com o pacote `jsonschema` (`pip install jsonschema`).

## Como usar

Todos os comandos são rodados a partir da raiz do projeto.

**1. Encomende perguntas** editando `pipeline/encomendas.json`:

```json
{
  "id": "geografia_paises_01",
  "tema": "Geografia",
  "subtema": "Países e Capitais",
  "quantidade": 50,
  "multipla": 10,
  "angulos_alvo": ["nome", "conexao", "causa"],
  "observacoes": "Texto livre para o gerador (opcional)."
}
```

| Campo | Obrigatório | Descrição |
|---|---|---|
| `id` | ✔ | Único, minúsculo, sem acento, com `_`. Identifica a encomenda para sempre |
| `tema`, `subtema` | ✔ | Exatamente como em `manifesto/temas_subtemas.json` |
| `quantidade` | ✔ | Quantas perguntas gerar. Algumas serão descartadas pelo caminho. Padrão do projeto: **50**, para diluir o custo fixo de cada chamada (MANIFESTO §12) |
| `multipla` | — | Quantas do tipo `multipla`. Padrão: 20% da quantidade |
| `angulos_alvo` | — | Ângulos a priorizar |
| `observacoes` | — | Instruções extras para o gerador |

**2. Rode:**

```
python pipeline/rodar.py executar
```

Isso processa todas as encomendas que ainda não foram concluídas. Outras opções:

```
python pipeline/rodar.py executar --encomenda geografia_paises_01   # só uma encomenda
python pipeline/rodar.py executar --ate gerar                       # para depois da geração, para inspecionar
python pipeline/rodar.py simular --encomenda geografia_paises_01    # só grava o prompt, sem chamar o Claude
python pipeline/rodar.py validar                                    # confere o banco inteiro
python pipeline/rodar.py relatorio                                  # distribuição por subtema, ângulo e tipo
python pipeline/rodar.py consolidar                                 # procura e funde âncoras duplicadas
python pipeline/rodar.py dificuldade [--forcar]                     # popularidade na Wikipédia → dificuldade (1 a 5)
```

## O que acontece em cada encomenda

| Etapa | Quem faz | Arquivo em `trabalho/<id>/` |
|---|---|---|
| 1. **gerar** | Claude (Opus, esforço alto), com a Parte I do manifesto (regras de conteúdo), as âncoras e as perguntas já existentes no subtema | `01_prompt.md`, `01_geracao.json` |
| 2. **validar** | Python: esquema, lista canônica, distratores e duplicatas de perguntas já existentes | `02_validado.json` |
| 3. **criticar** | O Python baixa das URLs de `fonte` a abertura e as passagens ligadas à pergunta (`fontes.py`). Claude (Sonnet, esforço médio), **sem web e numa chamada só**, também com a Parte I do manifesto: confere o fato nos trechos (campo `apoio`: trecho, conhecimento ou contradito), confere a precisão literal do enunciado, aplica os critérios de qualidade e aprova, reescreve ou descarta cada pergunta | `03_fontes.json`, `03_prompt.md`, `03_critica_bruta.json`, `03_criticado.json` |
| 4. **ancoras** | Python compara as âncoras com o cadastro. O Claude (Sonnet) julga só os casos parecidos. Checa se as URLs respondem e aplica os limites por âncora | `04_julgamento.json`, `04_ancoras.json` |
| 5. **registrar** | Python: atribui os ids `q00001`… e grava no banco | — |

**Retomada:** uma etapa cujo arquivo já existe é pulada. Para **refazer** uma etapa, apague o arquivo dela e os das etapas seguintes.

**O LLM nunca escreve no banco.** Ele só devolve JSON num formato fixo, e quem decide o que gravar é o Python.

## Arquivos

```
pipeline/
├── encomendas.json        ← você edita
├── rodar.py               ← comandos
├── etapas.py              ← as cinco etapas
├── banco.py               ← banco, validação, semelhança, checagem de URLs
├── claude_cli.py          ← chamada ao `claude -p`, com prompt de sistema mínimo
├── autopiloto.py          ← executa a programação do MANIFESTO §17 sozinho
├── figuras.py             ← etapa de figuras (catálogos, imagens, avaliação com visão)
├── plano.json             ← metas por tema e subtema, orientações e catálogos de figura
├── catalogos/             ← entidades curadas de cada catálogo de figura
├── fontes.py              ← baixa as fontes e escolhe os trechos para o crítico
├── comparar_critico.py    ← refaz a crítica de um lote com outro modelo, sem gravar no banco
├── comum.py               ← caminhos, arquivos, normalização, log
├── prompts/               ← gerar.md, criticar.md, reescrever.md, julgar_ancora.md
├── esquemas/              ← formato obrigatório das respostas do Claude em cada etapa
├── banco/
│   ├── perguntas.json     ← o banco de perguntas
│   ├── ancoras.json       ← o cadastro de âncoras
│   └── estado.json        ← encomendas concluídas
├── trabalho/<id>/         ← resultados intermediários de cada encomenda
├── log/AAAA-MM-DD.jsonl   ← toda decisão automática, com motivo
└── log/consumo.jsonl      ← tokens, turnos, duração e custo equivalente de cada chamada
```

## Auditoria

Toda decisão automática fica no log: pergunta descartada, reescrita, aprovada, âncora fundida ou rejeitada, e avisos de variedade. Cada linha tem data, encomenda, etapa, decisão, motivo e a pergunta envolvida. A revisão humana é opcional (MANIFESTO, princípio 10).

Para ver o que aconteceu com as perguntas de uma encomenda, filtre o log pelo campo `encomenda`.

## Onde mexer

| Para mudar… | Edite… |
|---|---|
| O que é uma boa pergunta | `manifesto/MANIFESTO.md`, Parte I. O gerador e o crítico recebem só o texto acima da marca `FIM DAS REGRAS DE CONTEÚDO` |
| Instruções específicas de cada etapa | `prompts/gerar.md`, `prompts/criticar.md`, `prompts/julgar_ancora.md` |
| Formato das respostas do Claude | `esquemas/` (precisa acompanhar `manifesto/pergunta.schema.json`) |
| Temas e subtemas | `manifesto/temas_subtemas.json` (só por acréscimo) |

## Autopiloto (programação até 10 000 perguntas)

O `autopiloto.py` executa a programação do MANIFESTO §17 sozinho, fora de qualquer conversa:

```
python pipeline/autopiloto.py                 # roda até a meta, esperando a cota quando preciso
python pipeline/autopiloto.py --max 3         # para depois de 3 trabalhos
python pipeline/autopiloto.py --so-texto      # só lotes de texto (ou --so-figuras)
python pipeline/autopiloto.py --publicar 5    # a cada 5 trabalhos, git push e deploy no Firebase
python pipeline/autopiloto.py --status        # mostra o progresso contra as metas e sai
```

- **Escolha do trabalho:** compara o que falta de texto e de figura, em proporção à meta, e ataca o maior déficit. Texto: o subtema mais atrasado ganha uma encomenda nova, montada a partir do `plano.json` (orientação do subtema, orientação geral e rodízio de ângulos). Figura: o tema mais atrasado, e dentro dele o catálogo mais atrasado.
- **Cota:** se o Claude responde que a cota ou o limite acabou, o autopiloto espera (15 minutos, ou até o horário de liberação informado) e retoma da mesma etapa. Outras falhas são tentadas 3 vezes; depois, o subtema ou o catálogo é pausado.
- **Assunto esgotado:** dois lotes seguidos de um subtema com menos de 20 perguntas aproveitadas pausam o subtema. Um catálogo sem entidades aproveitáveis também é pausado. Os pausados ficam em `banco/estado.json`.
- **Depois de cada trabalho:** exporta as perguntas para o app e faz um commit local. Push e deploy só com `--publicar`.
- **Parar:** crie o arquivo `pipeline/PARAR`. O autopiloto termina o trabalho atual e sai. A trava `pipeline/autopiloto.lock` impede dois autopilotos ao mesmo tempo.
- **Diário:** `log/autopiloto.jsonl` (cada evento) e `log/autopiloto_status.json` (o estado atual).
- **Enquanto ele roda, nada mais grava no banco:** cada lote grava o banco inteiro no fim.

## Etapa de figuras

O `figuras.py` faz as perguntas com figura de reconhecimento (MANIFESTO §6), a partir dos **catálogos** do `plano.json`:

| Passo | O que faz | Arquivo em `trabalho/fig_<catálogo>_<n>/` |
|---|---|---|
| 0. curadoria | Se o catálogo tem poucas entidades livres, o Claude (Opus) propõe mais 40, em três camadas, sem repetir as do catálogo nem as do banco | `catalogos/<catálogo>.json` |
| 1. preparo | Escolhe entidades das três camadas e baixa a imagem principal: Wikidata/Commons (`P18`, bandeira `P41`, mapa `P242`) ou PokéAPI. Confere a licença, põe fundo branco, guarda um trecho da Wikipédia e sugere família e nível, puxando para as metas de variedade | `01_selecao.json`, `01.jpg`… |
| 2. avaliação | O Claude (Sonnet) **abre cada imagem**, reprova as ruins (texto que entrega a resposta, montagem, assunto ambíguo) e escreve a pergunta | `02_avaliacao.json` |
| 3. registro | Liga à âncora, respeitando a saturação (no máximo 3 perguntas por âncora e 2 com figura), copia a imagem e grava | — |

## Saturação por âncora

O assunto de uma pergunta é a sua âncora. Desde a programação de 10 000 perguntas:
- uma âncora com 3 perguntas no banco inteiro, somando texto e figura, não recebe outra;
- o gerador recebe a lista das âncoras do tema que já têm 2 ou mais perguntas em outros subtemas, para evitá-las;
- na etapa de âncoras, cada pergunta nova cuja âncora já tem perguntas é comparada com essas perguntas por uma chamada pequena ao Sonnet (`prompts/repetidos.md`). Se perguntar o mesmo fato, sai.

## Consumo

O pipeline foi desenhado para gastar pouca cota (MANIFESTO §11 e §12):

| Etapa | Modelo e esforço | Web | Custo equivalente por lote de 20 |
|---|---|---|---|
| gerar | Opus, alto | não | US$ 0,50 a 0,70 |
| criticar | Sonnet, médio, numa chamada só | não: os trechos vêm de `fontes.py` | cerca de US$ 0,22 |
| julgar âncoras | Sonnet, médio | não | cerca de US$ 0,03 |

O custo equivalente em API aparece em `log/consumo.jsonl`. Não há cobrança: ele serve só para comparar o peso das chamadas.

Para testar outro crítico num lote já concluído, sem mexer no banco:

```
python pipeline/comparar_critico.py historia_idade_media_01 sonnet medium
```

## Configuração

Os modelos, o esforço e o tempo limite de cada etapa ficam em `CONFIG`, no início de `rodar.py`. Os limiares de semelhança (duplicata de pergunta: 0,85; candidata a âncora igual: 0,60) ficam no início de `banco.py`.
