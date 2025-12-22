# Instruções para geração de microsubtemas

> **Propósito**. Este guia padroniza **como propor e redigir *microsubtemas*** para sustentar a geração de perguntas factuais e estáveis, validadas pelo schema do projeto. As orientações aqui **não alteram o schema** de perguntas — apenas estruturam o **documento de microsubtema** que servirá de base para gerar questões.

---

## 1) O que é um *microsubtema*

Um **microsubtema** é um recorte **operacional** dentro de um **subtema** que permite produzir **≥ 80 perguntas** (ideal: ~100) com **baixa sobreposição** com outros recortes, mantendo **fatos estáveis**, clareza de **escopo** e diversidade de itens (aberta, múltipla escolha, verdadeiro/falso, ordenação, associação).

* **Não é** uma lista fechada de tópicos: o escopo define **fronteiras e exemplos**, mas **é não exaustivo**. É permitido usar **personagens/assuntos não listados explicitamente**, desde que **coerentes com o escopo** e **sustentados por fontes confiáveis**.
* O microsubtema deve ser **reutilizável** e **longevo** (evitar fatos efêmeros, atualidades voláteis, placares de temporada, preços, etc.).

---

## 2) Naturezas válidas

* **Temático** — recorte por **assunto/obra/franquia/território** dentro do subtema.
  *Exs.*: *Futebol Brasileiro* (Esportes → Futebol), *Dragon Ball* (Entretenimento → Anime e Mangá), *Roma Republicana* (História → Roma Antiga).

* **Transversal** — recorte por **regra/propriedade/condição** que cruza entidades.
  *Exs.*: *Capitais em Rios* (Geografia), *Países sem Litoral* (Geografia), *Montanhas acima de 7.000 m* (Geografia).

> **Observação.** Naturezas puramente “referenciais” (listas ou taxonomias auxiliares) devem ser reavaliadas e convertidas, sempre que possível, em recortes **Temáticos** ou **Transversais** com escopo operacional claro.

---

## 3) Localização

* **Irrestrita** — quando o microsubtema **não trata de assuntos exclusivamente brasileiros**. Em caso de dúvida, considere Irrestrita. A maioria dos microsubtemas será deste tipo.
* **Nacional** — quando o microsubtema **trata exclusivamente de assuntos culturalmente próximos do Brasil e dos brasileiros** (instituições brasileiras, obras nacionais, culinária local, legislação brasileira, etc.).

  * Para microsubtemas com Localização = **Nacional**, as **fontes principais** do microsubtema devem ser em **português** (ex.: Wikipedia em português, sites oficiais brasileiros).

---

## 4) Nomenclatura e arquivos

* Cada microsubtema deve ter um **título curto** e claro.
* **`microsubtema_clean`**: minúsculas, **`_`** como separador, sem acentos (ex.: `capitais_em_rios`).
* As descrições dos microsubtemas são guardadas em arquivos com nome:
  **`microsubtemas_<tema_clean>_<subtema_clean>.md`**
  Ex.: `microsubtemas_historia_romana.md`.

Cada arquivo `microsubtemas_<tema_clean>_<subtema_clean>.md` pode conter **vários microsubtemas** do mesmo subtema, cada um com:

1. Um bloco de **front matter YAML** próprio.
2. Um conjunto de seções em Markdown com a estrutura definida abaixo.

---

## 5) Estrutura padrão de **cada** microsubtema

### 5.1 Front matter YAML (obrigatório)

Cada microsubtema deve começar com um bloco YAML mínimo, por exemplo:

```yaml
---
tema: "História"
tema_clean: "historia"
subtema: "História Romana"
subtema_clean: "historia_romana"

microsubtema: "Serial Killers"
microsubtema_clean: "serial_killers"

natureza: "tematico"        # ou "transversal"
localizacao: "irrestrita"   # ou "nacional"

status: "ativo"             # sugerido: "ativo" | "rascunho" | "desativado"
autor: "Seu Nome Opcional"  # opcional
data_criacao: "2025-12-06"  # opcional (ISO)
---
```

> **Regra:** os campos `tema`, `tema_clean`, `subtema`, `subtema_clean`, `microsubtema`, `microsubtema_clean`, `natureza` e `localizacao` devem estar **sempre presentes** e coerentes com o dicionário canônico do projeto.

### 5.2 Corpo em Markdown

Depois do YAML, o corpo do microsubtema segue, na ordem:

1. **Cabeçalho**: Título + código `microsubtema_clean` (opcionalmente redundante com o YAML, mas útil para leitura humana).

2. **Natureza**: *Temático* ou *Transversal*.

3. **Descrição**: objetivo e recorte em 2–4 linhas.

4. **Localização**: *Irrestrita* ou *Nacional*.

5. **Escopo** (com subtópicos padronizados):

   * **Inclusões (não exaustivo)**: itens elegíveis; pode citar **pessoas, obras, lugares, instituições**.

     * A lista é **aberta**; **não limita** a criação de perguntas aos nomes citados.
   * **Exclusões**: o que fica de fora (p.ex., atualidades efêmeras, especulação, rankings anuais).
   * **Referências (exemplos)**: bases/entradas **prováveis** (preferência: **Wikipedia em inglês** para microsubtemas Irrestritos; **fontes em português** para microsubtemas Nacionais) e **documentos oficiais** aplicáveis.

     * Não precisa ser exaustivo, nem incluir URL obrigatoriamente — são **sugestões** de onde ancorar fatos.

6. **Matriz de variação (eixos)**: parâmetros que fomentam diversidade (tempo, espaço, categorias, métricas, papéis de pessoas, tipos de entidade, etc.).

   * Ex.: tempo (Triássico/Jurássico/Cretáceo), espaço (continentes), tipo de entidade (animal/ambiente/técnica), papel (autor/vítima/investigador), etc.

7. **Exemplos de enunciados**:

   * Pelo menos **3 modelos** de itens cobrindo, no conjunto, os tipos:

     * **Aberta**
     * **Múltipla escolha**
     * **Verdadeiro/Falso**
   * Os exemplos **não vinculam** o banco aos nomes usados; servem apenas como **demonstração de formato, nível de detalhe e tom**.
   * Pelo menos **4 exemplos** por modelo de item (Aberta, Múltipla escolha, Verdadeiro/Falso)

8. **Checklist**: validações antes de gerar perguntas, por exemplo:

   * Fatos estáveis;
   * Fontes verificáveis;
   * Linguagem neutra e didática, para público leigo mas informado;
   * Cobertura mínima de eixos importantes da matriz de variação;
   * **No máximo 5 perguntas por indivíduo/fenômeno/caso**.

---

## 6) Exemplo completo de microsubtema

> Os exemplos abaixo **incluem “Referências (exemplos)” no Escopo** e deixam explícito que **as listas são não exaustivas**.

### A) Serial Killers — `serial_killers`

```yaml
---
tema: "Variedades"
tema_clean: "variedades"
subtema: "Crimes e Justiça"
subtema_clean: "crimes_e_justica"

microsubtema: "Serial Killers"
microsubtema_clean: "serial_killers"

natureza: "tematico"
localizacao: "irrestrita"

status: "ativo"
data_criacao: "2025-12-06"
---
```

**Natureza.** Temático
**Descrição.** Pessoas ligadas a casos seriais notórios, com ênfase em autores, vítimas, investigadores, promotores e **marcos processuais documentados** (prisões, julgamentos, sentenças).

**Localização.** Irrestrita

**Escopo**

* **Inclusões (não exaustivo)**: autores (p.ex., Jeffrey Dahmer, Ted Bundy, John Wayne Gacy, Dennis Rader, Harold Shipman, Andrei Chikatilo, Aileen Wuornos, **Francisco de Assis Pereira**), casos históricos de autoria desconhecida (p.ex., *Jack the Ripper*), **investigadores** (p.ex., Frederick Abberline), promotores, juízes e **peritos** associados a casos de assassinatos seriais.
* **Exclusões**: especulações sobre autoria/culpa; detalhes gráficos ou sensacionalistas; informações de vítimas menores; casos **em andamento** sem desfecho claro; trabalhos de ficção inspirados em casos reais.
* **Referências (exemplos)**:

  * Wikipedia (EN): *Jack the Ripper*, *Jeffrey Dahmer*, *Ted Bundy*, *John Wayne Gacy*, *Harold Shipman*, *Andrei Chikatilo*, *Aileen Wuornos*
  * Wikipedia (PT): *Maníaco do Parque*
  * Sentenças/acórdãos criminais; relatórios de procuradorias; dossiês de forças policiais.

**Matriz de variação (eixos)**

* **Pessoa → Papel**: autor / vítima / investigador / promotor / juiz / perito.
* **Caso → Época/Lugar**: século XIX, XX, XXI; Europa, Américas, Ásia, etc.
* **Decisão → Pena**: tipos de condenação (prisão perpétua, pena de morte, número de sentenças).
* **Status do caso**: resolvido (autor identificado e condenado) / parcialmente esclarecido / identidade oficialmente desconhecida.

**Exemplos de enunciados**

* **Aberta**

  * Em que cidade ocorreu a maior parte dos crimes atribuídos a Jack the Ripper?

* **Múltipla escolha**

  * Qual destes serial killers atuou principalmente em Milwaukee, nos Estados Unidos?
    (a) Ted Bundy (b) Jeffrey Dahmer (c) Andrei Chikatilo (d) Harold Shipman

* **Verdadeiro/Falso**

  * Harold Shipman foi um médico britânico condenado por assassinar pacientes sob seus cuidados.

* **Ordenação**

  * Ordene cronologicamente, do mais antigo para o mais recente, os seguintes casos seriais: Jack the Ripper, Andrei Chikatilo, Jeffrey Dahmer.

* **Associação**

  * Associe o serial killer ao país em que atuou:
    (1) Andrei Chikatilo – ( ) Estados Unidos ( ) Reino Unido ( ) Rússia

**Checklist**

* Fatos apoiados em **fontes verificáveis** (Wikipedia, documentos oficiais, literatura consolidada).
* Evitar detalhes gráficos, linguagem sensacionalista ou julgamentos morais; manter tom informativo.
* Não utilizar casos em andamento ou sem desfecho minimamente consolidado.
* Garantir diversidade de **épocas, países** e **papéis** (não só autores, mas também investigadores, promotores etc.).
* **No máximo 5 perguntas por indivíduo/caso específico**, para evitar saturar o banco com um único nome.

Aqui vai um bloco para você colar direto no `instrucoes_geracao_microsubtemas.md` como uma nova seção (por exemplo, depois dos exemplos já existentes):

Perfeito, então vamos simplificar o padrão: **1 obra = 1 microsubtema**, e o **nome do microsubtema é só o nome da obra** (ex.: só “Breaking Bad”), sem complemento.

Vou reescrever só as partes que mudam: **7.1 (nome)**, o **exemplo de front matter** e a **checklist**.

---

## 7.1 Padrão de nomenclatura (`microsubtema` e `microsubtema_clean`)

### 7.1.1 Campo `microsubtema` (nome “bonito”)

**Regra principal:**

> Para obras específicas, o campo `microsubtema` deve ser **apenas o nome da obra**, sem dois-pontos, sem subtítulo, sem recorte.

Ou seja:

* Série:

  * `microsubtema: "Breaking Bad"`
  * `microsubtema: "The Sopranos"`
  * `microsubtema: "La Casa de Papel"`
* Livro:

  * `microsubtema: "Dom Casmurro"`
  * `microsubtema: "O Senhor dos Anéis"`

**Detalhes de convenção:**

* Usar o título exatamente como será exibido no app (decisão editorial sua):

  * Se a obra é conhecida principalmente pelo título em português, usar PT-BR:

    * `microsubtema: "A Grande Família"`
  * Se é mais conhecida pelo título original, manter original:

    * `microsubtema: "Game of Thrones"`
    * `microsubtema: "Breaking Bad"`
* **Não** incluir:

  * subtítulos do tipo “Atores, Personagens e Enredo”;
  * indicação de temporada, parte ou ano no nome do microsubtema.

> Consequência prática: se você quiser diferenciar recortes diferentes da mesma obra, isso **não** será feito em `microsubtema`, e sim em outros campos (por exemplo, descrição, escopo, matriz de variação). O padrão canônico aqui assume **um microsubtema por obra**.

---

### 7.1.2 Campo `microsubtema_clean` (slug técnico)

**Objetivo:** ter um identificador simples e estável, em `snake_case`, derivado **apenas do nome da obra**.

**Regras de formação:**

1. Partir do valor de `microsubtema` (o nome da obra).
2. Transformar em minúsculas.
3. Substituir espaços por `_`.
4. Remover acentos e cedilhas.
5. Remover caracteres especiais (`:`, `,`, `.`, `?`, `!`, `/`, `-` etc.).
6. Normalizar múltiplos `_` consecutivos para um só.

**Padrão geral:**

```txt
microsubtema_clean = <obra_em_snake_case>
```

**Exemplos:**

* `microsubtema: "Breaking Bad"`
  `microsubtema_clean: "breaking_bad"`

* `microsubtema: "The Sopranos"`
  `microsubtema_clean: "the_sopranos"`

* `microsubtema: "La Casa de Papel"`
  `microsubtema_clean: "la_casa_de_papel"`

* `microsubtema: "Dom Casmurro"`
  `microsubtema_clean: "dom_casmurro"`

* `microsubtema: "O Senhor dos Anéis"`
  `microsubtema_clean: "o_senhor_dos_aneis"`

---

## 7.2 Front matter recomendado (ajustado)

Exemplo esquemático para uma série (NÃO é microsubtema completo, só o cabeçalho):

```yaml
---
tema: "Entretenimento"
tema_clean: "entretenimento"
subtema: "Séries"
subtema_clean: "series"

microsubtema: "Breaking Bad"
microsubtema_clean: "breaking_bad"

natureza: "tematico"
localizacao: "irrestrita"

status: "ativo"
---
```

Outro exemplo para outra série:

```yaml
---
tema: "Entretenimento"
tema_clean: "entretenimento"
subtema: "Séries"
subtema_clean: "series"

microsubtema: "La Casa de Papel"
microsubtema_clean: "la_casa_de_papel"

natureza: "tematico"
localizacao: "irrestrita"

status: "ativo"
---
```

O resto da seção 7 (Escopo, Matriz de variação, exemplos de enunciados) continua igual ao que você já escreveu — só muda mesmo o padrão de nome.

---

## 7.6 Checklist específico para obras fictícias (ajuste)

Atualizando os itens que falavam do padrão de nome:

* [ ] O microsubtema está claramente focado em **uma única obra** (não na franquia inteira, a menos que isso seja explicitado em outro tipo de microsubtema).
* [ ] `microsubtema` é **apenas o nome da obra** (ex.: `"Breaking Bad"`, `"La Casa de Papel"`), sem subtítulos ou recortes adicionais.
* [ ] `microsubtema_clean` é o nome da obra em `snake_case`, sem acentos nem caracteres especiais (ex.: `"breaking_bad"`, `"la_casa_de_papel"`).
* [ ] A **Descrição** resume a premissa em 1–3 linhas, sem virar resenha ou crítica.
* [ ] O **Escopo** cobre, no mínimo: autor/criador, personagens principais, ambientação, conflito básico e, se relevante, 1–2 prêmios importantes.
* [ ] A **Matriz de variação** inclui pelo menos um eixo de **ator/dublador → personagem** (quando for obra audiovisual) e um eixo de **enredo → ambientação/conflito**.
* [ ] Não há foco em bastidores especulativos, vida privada de atores ou teorias de fãs.
* [ ] Não se preocupe com spoilers de séries/filmes já terminados; tenha mais cuidado apenas com obras muito recentes.
* [ ] Todas as informações podem ser verificadas em **fontes gerais confiáveis** (Wikipedia, bases enciclopédicas de mídia, sites oficiais de editoras/estúdios).
* [ ] Não incluir perguntas nas quais o nome da obra seja a resposta da pergunta.

---
