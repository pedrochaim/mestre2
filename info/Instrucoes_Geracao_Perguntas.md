# Instruções para Geração de Perguntas

Este arquivo contém **instruções diretas para o modelo Mestre 2**.
Sempre que o prompt trouxer algo como:

> `Tarefa: Gere N perguntas no nível do microsubtema ...`

você deve **seguir rigorosamente** as regras abaixo, usando o **microsubtema detalhado** como principal insumo editorial.

O objetivo é criar conjuntos de perguntas de quiz que sejam **variadas**, **fatuais**, **estáveis** e **bem referenciadas**, adequadas para um público amplo e leigo interessado.

As perguntas serão geradas a nível de **microsubtemas** dentro de cada **subtema** de um **tema** maior.

* **Temas** e **Subtemas** são detalhados no arquivo `Dicionario_Temas_Subtemas.md`.
* O **microsubtema** específico vem detalhado no corpo do prompt (recorte, escopo, matriz de variação, exemplos).

O produto final será um arquivo JSON estruturado conforme o schema definido em `./info/pergunta.schema.json`.

Cada arquivo JSON a nível de microsubtema será nomeado seguindo a convenção:

* `./data/Perguntas_{tema_clean}/{tema_clean}_{subtema_clean}_{microsubtema_clean}.json`

Depois serão unidos em:

* um arquivo por subtema: `./data/Perguntas_{tema_clean}/{tema_clean}_{subtema_clean}.json`
* um arquivo mestre por tema: `./data/{tema_clean}.json`

**Escopo multi-temas:** válido para Artes, História, Esportes, Ciências, Geografia, Entretenimento, etc.
**Objetivo:** produzir perguntas **manuais**, **factuais**, **diversas** e **bem referenciadas** em português (pt-BR), prontas para uso no jogo de quiz.

---

## 1) Formato e Schema

Você **deve** seguir o JSON Schema oficial (`pergunta.schema.json`) em todas as perguntas.

**Campos obrigatórios:**

* **`id`**: identificador globalmente único.

  * Recomenda-se `YYYYMMDDTHHMMSSZ_counter` (ex.: `20251202T000000Z_041`) ou ULID/UUID.
* **`tema`**: nome do tema amplo (ex.: `"História"`, `"Ciências"`, `"Esportes"`).

  * Deve corresponder exatamente a um tema do `Dicionario_Temas_Subtemas.md`.
* **`tema_clean`**: slug do tema (minúsculas, sem acentos; espaços substituídos por `_`).

  * Ex.: `"historia"`, `"ciencias"`, `"esportes"`.
* **`subtema`**: subtema específico (ex.: `"Idade Média"`, `"Física"`, `"Futebol"`).

  * Deve corresponder a um subtema válido do dicionário.
* **`subtema_clean`**: versão “limpa” do subtema (minúsculas, sem acentos; palavras separadas por `_`).

  * Ex.: `"idade_media"`, `"fisica"`, `"futebol"`.
* **`microsubtema`**: nome textual do recorte (ex.: `"Capitais em Rios da Europa"`).

  * Deve bater com o microsubtema do prompt.
* **`microsubtema_clean`**: slug do microsubtema (minúsculas, sem acentos; `_` como separador).

  * Ex.: `"capitais_em_rios_da_europa"`.
* **`tipo`** ∈ {`"Aberta"`, `"Múltipla escolha"`, `"Verdadeiro-falso"`}.

  * **Não** use outros tipos.
* **`pergunta`**: enunciado **auto-contido** em português (pt-BR).

  * Para **Múltipla escolha**, inclua **exatamente 4 alternativas A–D** **no próprio campo** `pergunta`.
  * **Não** Use perguntas de ordenação de eventos ou associação de pares.
* **`resposta`**: somente a **resposta final**, sem explicações, exemplos ou variações.

  * Aberta: um valor único (nome, número, lugar, conceito).
  * Múltipla escolha: copie **exatamente** o texto da alternativa correta (ex.: `"Xibalba – Popol Vuh"`).
  * Verdadeiro-falso: deve ser **exatamente** `"Verdadeiro"` ou `"Falso"`.
* **`fonte`**: **array** com **pelo menos 2 URLs** específicas e **não contraditórias**.

  * Priorize **Wikipedia em inglês** + **uma fonte adicional confiável/oficial**.
  * Não use apenas Wikipedia; **sempre inclua outra fonte confiável** (enciclopédias, bases oficiais, sites institucionais, etc.).

**Campos opcionais:**

* **`tag`**: rótulo adicional (ex.: `"cosmologia"`, `"dinossauros_ornitopodes"`).

  * **Não inclua** `tag` a menos que o prompt peça explicitamente.
  * Quando incluído, deve ser uma string curta, sem formatações especiais.
* **`autor`**: nome do autor humano da questão.

  * **Só deve ser utilizado se explicitamente indicado no prompt.**
  * Use apenas quando o autor **for um ser humano** (ex.: `"João Silva"`, `"Equipe de História"`).
  * Não use este campo para indicar o modelo ou a IA como autora.

---

## 2) Proporções de Tipos

Ao gerar um conjunto com **N** perguntas em um microsubtema:

* **50%** devem ser de **resposta aberta**.
* Os outros **50%** dividem-se entre:

  * **Múltipla escolha**: **75%** desse bloco.
  * **Verdadeiro-falso**: **25%** desse bloco.

Exemplo em **100** perguntas:

* 50 Abertas
* 38 Múltipla escolha
* 12 Verdadeiro-falso

Para valores de N menores, aproxime por inteiro mantendo, o máximo possível, as proporções acima.

---

## 3) Diversidade e Cobertura

Ao gerar perguntas para um microsubtema:

* **Sem duplicatas**:

  * Não repita enunciados idênticos.
  * Evite enunciados **muito similares** (similaridade textual > 80%, por medidas como Levenshtein ou Jaccard normalizada).
* **Limite por entidade/fenômeno**:

  * Use **no máximo 5 questões** por indivíduo, obra, equipe, organização, lugar específico ou evento histórico **no conjunto inteiro** daquele microsubtema.
* **Cobertura ortogonal**:

  * Varie **tempo**, **espaço**, **categorias**, **papéis**, **subtemas internos** do microsubtema conforme a “matriz de variação” descrita no arquivo de microsubtemas.
  * Evite que todas as perguntas se concentrem no mesmo período, país, personagem ou subgrupo.
* **Público-alvo pt-BR**:

  * Linguagem clara para público leigo, mas minimamente interessado.
  * Você pode priorizar exemplos brasileiros, **mas sem ultrapassar ~40%** do conjunto, **salvo** quando o microsubtema for explicitamente marcado como **Nacional**.
* **Microsubtema com Localização = Nacional**:

  * Quando o microsubtema for “Nacional” (conforme a instrução de microsubtemas), utilize **100% de contexto brasileiro** (instituições, fatos, personagens, geografia do Brasil, etc.).

---

## 4) Fontes e Verificação

* Cada pergunta deve ter **no mínimo 2 URLs** em `fonte`:

  * Dê preferência a:

    * **Wikipedia em inglês** (ou em português para temas estritamente nacionais),
    * Enciclopédias de prestígio,
    * Publicações acadêmicas,
    * Sites oficiais de governos, organismos internacionais, federações esportivas, museus, etc.
* Use **páginas específicas** relacionadas ao fato, não homepages genéricas.
* As fontes devem ser **consistentes** entre si; não utilize fontes que se contradizem sem necessidade.
* Evite, sempre que possível:

  * blogs sem revisão,
  * fóruns abertos,
  * wikis não moderadas.
  * Se não houver alternativa, pode usar, mas acrescente ao final da URL algo como `(fonte não revisada)` no texto de referência no documento de microsubtema (não no JSON de perguntas).
* Para biografias, esportes e estatísticas:

  * Prefira **bases oficiais** (ex.: FIFA, IOC, IBGE, UN, ligas oficiais) e **históricos consolidados**.

---

## 5) Diretrizes de Redação

* Escreva em **português (pt-BR)**, com tom:

  * claro, objetivo, informativo,
  * neutro, sem juízo de valor.
* O enunciado deve ser **auto-contido**:

  * O jogador deve entender a pergunta sem depender de outra questão ou de contexto externo.
* Evite:

  * termos vagos como “geralmente”, “talvez”, “em muitos casos”, se isso afetar a verificabilidade da resposta;
  * dependência de “ano corrente” ou valor que mude rapidamente (recordes atualíssimos, rankings anuais, etc.).
* **Não use placeholders** do tipo “País X”, “Jogador Y”, “Cidade Z”.

  * Use somente entidades reais, com fontes verificáveis.
* Evite perguntas cuja resposta esteja **literalmente embutida** de maneira redundante no enunciado, por exemplo:

  * Ruim: `"Qual país sediou a Copa do Mundo de 2014 no Brasil?"`
  * Melhor: `"Qual país sediou a Copa do Mundo de 2014 de futebol masculino?"`

* Revise os enunciados para **evitar** enunciados que contém a resposta. 
  - Exemplo 1: pergunta: "Qual meia brasileiro é conhecido como Ronaldinho Gaúcho e brilhou principalmente pelo Barcelona e pela seleção brasileira?" resposta: "Ronaldinho Gaúcho"
  - Exemplo 2: Associe o personagem à peça:  Dom Juan — ( ) “Dom Juan” / “Dom Giovanni”  ( ) “As Fenícias” 

---

## 6) Regras por Tipo de Questão

### Aberta

* Respostas devem ser **curtas e objetivas** (1 nome, 1 número, 1 lugar, 1 conceito).
* Evite pedidos de listas longas:

  * Não peça “Liste 3/4/5 itens”.
  * Permite-se, no máximo, “Liste 2 X” quando forem itens canônicos e amplamente aceitos.

### Múltipla escolha (4 alternativas)

* O campo `pergunta` deve conter:

  * o enunciado e
  * as **4 alternativas A) B) C) D)**, geralmente em linhas separadas.
* Deve haver **exatamente 1 alternativa correta**.
* Os **distratores** (alternativas incorretas) devem ser:

  * plausíveis,
  * mutuamente exclusivos,
  * de tamanho e estilo de redação semelhantes à alternativa correta.
* Evite:

  * “Todas as anteriores” / “Nenhuma das anteriores”,
  * pistas gramaticais óbvias,
  * uso de termos absolutos como “sempre”, “nunca”, salvo se o fato for realmente absoluto e bem estabelecido.
* É aceitável variar a **ordem das alternativas** entre diferentes conjuntos, mas **não** dentro do mesmo JSON final (cada pergunta deve ter uma única ordem definida).

### Verdadeiro-falso

* Afirmativas devem ser:

  * factuais,
  * inequívocas,
  * sem dupla negação,
  * não triviais (evite fatos óbvios demais).
* O campo `resposta` deve ser **exatamente** `"Verdadeiro"` ou `"Falso"`.

  * Não use abreviações, nem variações (“V”, “F”, “True”, etc.).

---

## 7) Checklist de Qualidade (antes de salvar)

Ao concluir um conjunto de perguntas de um microsubtema, verifique:

* [ ] Proporções por **tipo** atendidas (50% abertas; 50% MC/VF na razão ~75/25).
* [ ] Cada `id` é **único** e segue um padrão consistente.
* [ ] Todos os campos obrigatórios do schema (`tema`, `subtema`, `microsubtema`, etc.) estão preenchidos.
* [ ] Enunciados claros, sem marcações estranhas ou aspas desnecessárias.
* [ ] Cada questão tem **2 ou mais fontes** específicas, acessíveis e consistentes.
* [ ] Nenhuma entidade/fenômeno aparece em **mais de 5 perguntas** do conjunto.
* [ ] Não há enunciados duplicados ou excessivamente parecidos (similaridade ≤ 80%).
* [ ] Nas Múltipla escolha, há 4 alternativas A–D, apenas 1 correta, com distratores plausíveis.
* [ ] Nos Verdadeiro-falso, `resposta` é exatamente `"Verdadeiro"` ou `"Falso"`.
* [ ] Se o campo `autor` foi utilizado, isso foi **explicitamente pedido** e o valor corresponde a um **autor humano**.

---

## 8) Convenções e Arquivos

* **Nome do arquivo por microsubtema:**

  * `{tema_clean}_{subtema_clean}_{microsubtema_clean}.json`
  * localizado em `./data/Perguntas_{tema_clean}/`.
* **Codificação:** use **UTF-8**.
* **Quebras de linha:** padrão Unix (`\n`).
* As perguntas podem ser armazenadas:

  * em um único array JSON por arquivo, com cada objeto representando uma questão.

---

## 9) Processo Sugerido

Quando receber um prompt para gerar perguntas de um microsubtema:

1. **Ler o microsubtema** (arquivo de instrução no prompt):

   * identificar claramente **escopo**, **inclusões/exclusões** e **matriz de variação**.
2. **Planejar a cobertura**:

   * decidir quantas perguntas por tipo,
   * garantir variação em tempo, espaço, entidades, papéis, etc.
3. **Pesquisar e fixar 2+ fontes** por pergunta:

   * escolher páginas específicas e estáveis,
   * evitar fontes conflitantes.
4. **Redigir as questões**:

   * respeitar `tipo`, proporções, limite por entidade e diretrizes de redação.
5. **Normalizar campos**:

   * garantir que `resposta` seja um valor único e limpo,
   * garantir que as Múltipla escolha tenham 4 alternativas claras.
6. **Validar**:

   * JSON contra o schema,
   * checklist de qualidade,
   * limite de similaridade e de repetição de entidades.
7. **Revisão**:

   * revisar mentalmente se as perguntas estão didáticas, diversas e bem ancoradas em fontes.

---

## 10) Antipadrões (evitar sempre)

Evite gerar perguntas com as seguintes características:

* Atualidades efêmeras, placares de temporada, preços recentes, “recordes do ano corrente”.
* Enunciados ambíguos, pegadinhas sem relevância conceitual ou truques de linguagem.
* Múltipla escolha com:

  * alternativas muito desbalanceadas em tamanho ou detalhe,
  * alternativas obviamente absurdas,
  * “todas as anteriores” / “nenhuma das anteriores”.
* Repetir o mesmo indivíduo, obra, time ou evento **acima de 5 vezes** no mesmo conjunto de microsubtema.
* Questões cuja resposta dependa de opinião, especulação ou de fontes abertamente contraditórias.

---

## 11) Exemplos de perguntas já validadas

### Exemplo 1 — Múltipla escolha

```json
{
  "id": "20251202T000000Z_041",
  "tema": "Variedades",
  "tema_clean": "variedades",
  "subtema": "Mitologia",
  "subtema_clean": "mitologia",
  "microsubtema": "Submundos e Pós-Vida nas Mitologias",
  "microsubtema_clean": "submundos_e_pos_vida_mitologias",
  "tipo": "Múltipla escolha",
  "pergunta": "Qual par de submundo e obra está corretamente associado?\nA) Helheim – Livro dos Mortos\nB) Duat – Popol Vuh\nC) Hades – Kojiki\nD) Xibalba – Popol Vuh",
  "resposta": "Xibalba – Popol Vuh",
  "fonte": [
    "https://en.wikipedia.org/wiki/Xibalba",
    "https://en.wikipedia.org/wiki/Popol_Vuh"
  ]
}
```

### Exemplo 2 — Aberta

```json
{
  "id": "20251205T030000Z_002",
  "tema": "História Natural",
  "tema_clean": "historia_natural",
  "subtema": "Dinossauros",
  "subtema_clean": "dinossauros",
  "microsubtema": "Herbívoros com bico e cristas",
  "microsubtema_clean": "herbivoros_com_bico_e_cristas",
  "tipo": "Aberta",
  "pergunta": "Qual dinossauro herbívoro do Cretáceo europeu é famoso por ter um bico robusto na frente da boca e um espinho rígido no polegar",
  "resposta": "Iguanodon",
  "fonte": [
    "https://en.wikipedia.org/wiki/Iguanodon",
    "https://www.britannica.com/animal/Iguanodon"
  ]
}
```
