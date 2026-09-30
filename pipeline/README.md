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
  "quantidade": 30,
  "multipla": 6,
  "angulos_alvo": ["nome", "conexao", "causa"],
  "observacoes": "Texto livre para o gerador (opcional)."
}
```

| Campo | Obrigatório | Descrição |
|---|---|---|
| `id` | ✔ | Único, minúsculo, sem acento, com `_`. Identifica a encomenda para sempre |
| `tema`, `subtema` | ✔ | Exatamente como em `manifesto/temas_subtemas.json` |
| `quantidade` | ✔ | Quantas perguntas gerar. Algumas serão descartadas pelo caminho |
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
```

## O que acontece em cada encomenda

| Etapa | Quem faz | Arquivo em `trabalho/<id>/` |
|---|---|---|
| 1. **gerar** | Claude (Opus), com a Parte I do manifesto (regras de conteúdo), as âncoras e as perguntas já existentes no subtema | `01_prompt.md`, `01_geracao.json` |
| 2. **validar** | Python: esquema, lista canônica, distratores e duplicatas de perguntas já existentes | `02_validado.json` |
| 3. **criticar** | Claude (Opus) **com acesso à web**, também com a Parte I do manifesto: abre as fontes, confere a precisão literal do enunciado, aplica os critérios de qualidade e aprova, reescreve ou descarta cada pergunta | `03_prompt.md`, `03_critica_bruta.json`, `03_criticado.json` |
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
├── claude_cli.py          ← chamada ao `claude -p`
├── comum.py               ← caminhos, arquivos, normalização, log
├── prompts/               ← gerar.md, criticar.md, julgar_ancora.md
├── esquemas/              ← formato obrigatório das respostas do Claude em cada etapa
├── banco/
│   ├── perguntas.json     ← o banco de perguntas
│   ├── ancoras.json       ← o cadastro de âncoras
│   └── estado.json        ← encomendas concluídas
├── trabalho/<id>/         ← resultados intermediários de cada encomenda
└── log/AAAA-MM-DD.jsonl   ← toda decisão automática, com motivo
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

## Configuração

Os modelos, o esforço e o tempo limite de cada etapa ficam em `CONFIG`, no início de `rodar.py`. Os limiares de semelhança (duplicata de pergunta: 0,85; candidata a âncora igual: 0,60) ficam no início de `banco.py`.
