Segue com o **padrão corrigido**: campos JSON em monoespaço (`` `campo` ``) e placeholders de arquivo entre **chaves** (`{token}`).

---

# Instruções para Geração de Perguntas

O objetivo deste documento é fornecer diretrizes claras e detalhadas para a criação de um conjunto de perguntas de quiz que sejam variadas e adequadamente referenciadas. Seguindo estas instruções, você ajudará a garantir que o conjunto final seja de alta qualidade, adequado para um público amplo e diversificado.

As perguntas serão geradas a nível de **microsubtemas** dentro de cada **subtema** de um **tema** maior. **Temas** e **Subtemas** são detalhados no arquivo `dicionario_temas_subtemas.md`. O `microsubtema` específico é detalhado no momento do prompt.

O produto final será um arquivo JSON estruturado conforme o schema definido em `./docs/pergunta.schema.json`.

Cada arquivo JSON a nível de microsubtema será nomeado seguindo a convenção `./data/Perguntas_{tema_clean}/{tema_clean}_{subtema_clean}_{microsubtema_clean}.json`.
Eles então serão unidos em um único arquivo por subtema (`./data/Perguntas_{tema_clean}/{tema_clean}_{subtema_clean}.json`), e posteriormente em um arquivo mestre por tema (`./data/{tema_clean}.json`).

**Escopo multi-temas:** válido para Artes, História, Esportes, Ciências, Geografia, Entretenimento, etc.
**Objetivo:** produzir perguntas **manuais**, **factuais**, **diversas** e **bem referenciadas** em português (pt-BR), prontas para uso no jogo de quiz.

---

## 1) Formato e Schema

* Cada questão deve seguir o JSON Schema oficial (`pergunta.schema.json`).
* **Campos obrigatórios:** `id`, `tema`, `subtema`, `tipo`, `pergunta`, `resposta`, `fonte`.
* **Campos descontinuados:** `dificuldade` (não usar; se ainda constar no schema legado, tratar como **opcional/ignorar**).
* **`id`**: globalmente único (recomendado ULID/UUID ou `YYYYMMDDTHHMMSSZ_counter`).
* **`tema`**: tema amplo (ex.: História, Ciências, Esportes).
* **`subtema`**: subtema específico (ex.: Idade Média, Física, Futebol). O documento `./docs/Dicionario_Temas_Subtemas.md` contém uma lista de temas e seus respectivos subtemas.
* **`tipo`** ∈ {Aberta, Múltipla escolha, Verdadeiro-falso}.
* **`pergunta`**: enunciado **auto-contido**; para múltipla escolha, incluir as **4 alternativas A–D** no próprio campo. **Não** use perguntas de “ordenação de eventos”.
* **`resposta`**: somente a **resposta final**, sem explicações. Em V/F deve ser exatamente **"Verdadeiro"** ou **"Falso"**.
* **`fonte`**: **array** com **≥ 2 URLs** específicas e **não contraditórias** (priorize Wikipedia em inglês + fonte adicional confiável/oficial).

**Campos opcionais:**

* **`microsubtema`**: cada subtema é organizado em subcategorias chamadas **microsubtemas**. O detalhamento é fornecido no momento do prompt de geração.
* **`subtema_clean`**: versão “limpa” de `subtema` (minúsculas, sem acentos; palavras com `_`).
* **`microsubtema_clean`**: versão “limpa” de `microsubtema` (minúsculas, sem acentos; palavras com `_`).
* **`tag`**: identifica características específicas do assunto da pergunta.

---

## 2) Proporções de Tipos

* **50%**: **resposta aberta**.
* **50%**: **múltipla escolha** e **verdadeiro/falso** na razão **75% : 25%**.

  * Ex.: em 100 questões → 50 Abertas, 38 Múltipla escolha, 12 V/F.

---

## 3) Diversidade e Cobertura

* **Sem duplicatas**: enunciados **não idênticos** e **similaridade ≤ 80%** (ex.: Levenshtein/Jaccard normalizada).
* **Limite por entidade/fenômeno**: **máx. 5 questões** por pessoa, obra, equipe, organização, lugar específico ou evento histórico **no conjunto inteiro**.
* **Cobertura ortogonal**: evite sobreposição entre subtemas; diversifique períodos, regiões, estilos, disciplinas ou modalidades conforme o tema.
* **Público-alvo pt-BR**: pode priorizar exemplos nacionais **sem ultrapassar \~40%** do conjunto, mantendo diversidade global.

---

## 4) Fontes e Verificação

* **Mínimo 2 URLs** por questão; priorize enciclopédias, publicações acadêmicas, sites oficiais e bases reconhecidas.
* Use **páginas específicas** da afirmação (não homepages). Verifique **consistência** entre as fontes.
* Fontes instáveis (blogs sem revisão, fóruns, wikis não moderados) **só se inevitáveis**; nesse caso, **rotule-as** após a URL (ex.: “(fonte não revisada)”).
* Para biografias ou esportes, prefira **organismos oficiais**, **históricos consolidados** e **bases estatísticas canônicas**.

---

## 5) Diretrizes de Redação

* Português (pt-BR), claro, objetivo e **neutro**; evite opinião/valor.
* Enunciado **auto-contido**, sem necessidade de contexto externo.
* Evite termos ambíguos (“geralmente”, “talvez”) e dados de “ano corrente”.
* **Não use placeholders** ou perguntas simuladas; cada questão deve ser factual e verificável.
* Evite questões cuja resposta esteja **literalmente embutida** na pergunta (ex.: “Qual país sediou a Copa do Mundo de 2014 no Brasil?”).

---

## 6) Regras por Tipo de Questão

**Aberta**

* Respostas curtas e verificáveis (nome, número, local, conceito).
* Evite “Liste N itens” (exceto N ≤ 2 e universalmente aceitos).

**Múltipla escolha (4 alternativas)**

* Alternativas A) B) C) D) no campo `pergunta`.
* **Somente 1 correta**; distratores plausíveis, mutuamente exclusivos e de tamanho semelhante.
* Evite “Todas as anteriores/nenhuma”, pistas gramaticais e termos absolutos (“sempre/nunca”).
* Permite leve variação de ordem das alternativas entre versões do mesmo conjunto.

**Verdadeiro-falso**

* Afirmações factuais, inequívocas e sem dupla negação.
* `resposta` ∈ {“Verdadeiro”, “Falso”} (exatamente).

---

## 7) Checklist de Qualidade (antes de salvar)

* [ ] Proporções por **tipo** atendidas.
* [ ] `id` único; campos do schema preenchidos.
* [ ] Enunciado claro, **sem marcações** fora do padrão.
* [ ] **2+ fontes** específicas, acessíveis e consistentes.
* [ ] ≤ **5 questões** por entidade/fenômeno no conjunto.
* [ ] Similaridade com enunciados existentes **≤ 80%**.
* [ ] MCQ: 4 alternativas A–D; 1 correta; distratores plausíveis.
* [ ] V/F: resposta “Verdadeiro” ou “Falso”.

---

## 8) Convenções e Arquivos

* **Nome do arquivo:** `{tema_clean}_{subtema_clean}_{microsubtema_clean}.json`.
* Ordene por `id`; use UTF-8 e quebras de linha Unix.

---

## 9) Processo Sugerido

1. **Planeje cobertura** (matriz de **microsubtemas × tipos** de questão).
2. **Pesquise e fixe 2+ fontes** por pergunta (páginas específicas).
3. **Redija e normalize** (pt-BR, campo `resposta`, MCQ/VF conforme regras).
4. **Valide** (schema JSON + checklist + similaridade + limite por entidade).
5. **Revisão cruzada**: alguém diferente do autor faz checagem final.

---

## 10) Antipadrões (evitar)

* Perguntas de atualidades efêmeras; números “do ano”.
* Enunciados ambíguos, truques de linguagem ou pegadinhas sem base conceitual.
* MCQ com alternativas de tamanhos díspares, ou com “todas/nenhuma”.
* Repetir o mesmo indivíduo/obra/time/evento acima de 5 vezes no conjunto.
