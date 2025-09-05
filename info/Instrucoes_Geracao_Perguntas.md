# Instruções para Geração de Perguntas

O objetivo deste documento é fornecer diretrizes claras e detalhadas para a criação de um conjunto de perguntas de quiz que sejam variadas, equilibradas em termos de dificuldade, e adequadamente referenciadas. Seguindo estas instruções, você ajudará a garantir que o conjunto final seja de alta qualidade, adequado para um público amplo e diversificado.

As perguntas serão geradas a nível de **microsubtemas** dentro de cada **subtema** de um **tema** maior, conforme detalhado nos documentos específicos de subtemas (ex.: `./docs/Subtemas_Geografia_Detalhamento.md`). Cada microsubtema foca em aspectos distintos do subtema, ajudando a garantir uma cobertura mais detalhada e diversificada. O produto final será um arquivo JSON estruturado conforme o schema definido em `./docs/pergunta.schema.json`.

Cada arquivo JSON a nível de microsubtema será nomeado seguindo a convenção `./data/Perguntas_{tema}/{tema}_{subtema_clean}_{microsubtema_clean}.json`.
Eles então serão unidos em um único arquivo por subtema (`./data/Perguntas_{tema}/{tema}_{subtema_clean}.json`), e posteriormente em um arquivo mestre por tema (`./data/{tema_clean}.json`.

**Escopo multi-temas:** válido para Artes, História, Esportes, Ciências, Geografia, Entretenimento, etc.  
**Objetivo:** produzir perguntas **manuais**, **factuais**, **diversas** e **bem referenciadas** em português (pt-BR), prontas para uso no jogo de quiz.

---

## 1) Formato e Schema

- Cada questão deve seguir o JSON Schema oficial (`pergunta.schema.json`).  
- Campos obrigatórios: `<id>`, `<tema>`, `<subtema>`, `<tipo>`, `<dificuldade>`, `<pergunta>`, `<resposta>`, `<fonte>`.
- **`<id>`**: globalmente único (recomendado ULID/UUID ou `YYYYMMDDTHHMMSSZ_counter`).  
- **`<tema>`**: tema amplo (ex.: História, Ciências, Esportes).
- **`<subtema>`**: subtema específico (ex.: Idade Média, Física, Futebol). O documento `/docs/Dicionario_Temas_Subtemas.md` contém uma lista de temas e seus respectivos subtemas. Cada tema é uma categoria ampla, enquanto os subtemas são tópicos mais específicos dentro dessa categoria.
- **`<tipo>`** ∈ {Aberta, Múltipla escolha, Verdadeiro-falso}.  
- **`<dificuldade>`** ∈ {D1, D2, D3} conforme rubrica.
- **`<pergunta>`**: enunciado **auto-contido**; para múltipla escolha, incluir as **4 alternativas A–D** no próprio campo. **Não** use perguntas de “ordenação de eventos”.  
- **`<resposta>`**: somente a **resposta final**, sem explicações. Em V/F deve ser exatamente **"Verdadeiro"** ou **"Falso"**.  
- **`<fonte>`**: **array** com **≥ 2 URLs** específicas e **não contraditórias** (priorize Wikipedia em inglês + fonte adicional confiável/oficial).
- Campos opcionais:
- **`<microsubtema>`**: Cada `<subtema>` é organizado em subcategorias, cada uma um `<microsubtema>`. O detalhamento dos microsubtemas é fornecido no momento do prompt. Os microsubtemas ajudam a garantir uma cobertura mais detalhada e diversificada dentro de cada subtema. O processo de geração de perguntas será ao nível de microsubtemas, assegurando que diferentes aspectos do subtema sejam abordados.
- **`<subtema_clean>`**: versão “limpa” do `<subtema>`, sem espaços ou caracteres especiais, para uso em nomes de arquivos e URLs. Use underscores (_) para separar palavras.
- **`<microsubtema_clean>`**: versão “limpa” do `<microsubtema>`, sem espaços ou caracteres especiais, para uso em nomes de arquivos e URLs. Use underscores (_) para separar palavras.
- **`<misc>`**: campo livre para anotações internas. Seu valor pode ser utilizado para alterar critérios na geração de perguntas, como por exemplo: `{"ignore_dificuldade": true}`.

---

## 2) Proporções de Tipos

- **50%**: **resposta aberta**.  
- **50%**: **múltipla escolha** e **verdadeiro/falso** na razão **75% : 25%**.  
  - Ex.: em 100 questões → 50 Abertas, 38 Múltipla escolha, 12 V/F.

---

## 3) Dificuldade (distribuição, familiaridade e rubrica)

- Distribuição no conjunto: **D1 = 25%**, **D2 = 50%**, **D3 = 25%**.  
- **A dificuldade combina**: (i) **familiaridade do assunto** (quão conhecido é), (ii) **quantos fatos** precisa recuperar/integrar, (iii) **transformação cognitiva** exigida, (iv) **granularidade** (amplo vs. muito específico) e (v) **qualidade dos distratores** (em MCQ).

### Eixos que compõem a dificuldade

1. **Familiaridade**  
   - **Alta** (D1 típico): temas amplamente ensinados/divulgados; termos e recordes clássicos.  
   - **Média** (D2 típico): conteúdos introdutórios de área, distinções comuns porém menos populares.  
   - **Baixa** (D3 típico): exceções, subcategorias pouco conhecidas, conceitos técnicos essenciais porém menos difundidos.
2. **Número de fatos a integrar**: 1 fato direto (D1) → 2 fatos relacionados (D2) → 2–3 fatos com distinção fina (D3).  
3. **Transformação**: reconhecimento/lembrança (D1) → associação/comparação ou leitura curta de tabela/figura (D2) → integração/conceituação sem cálculo extenso (D3).  
4. **Granularidade**: entidades/ideias amplas (D1) → regionais/segmentadas (D2) → casos específicos/menos usuais (D3).  
5. **Distratores (MCQ)**: distantes (D1) → plausíveis com diferença clara (D2) → próximos, exigindo critério conceitual (D3).

### Rubrica por nível (independente do tema)

- **D1 (fácil)** — Familiaridade **alta**, **1** fato direto, sem sutilezas. Perguntas literais e inequívocas.  
- **D2 (médio)** — Familiaridade **média**, **1–2** fatos, pequena comparação/associação ou leitura breve.  
- **D3 (difícil)** — Familiaridade **baixa** ou **exceções**; **2–3** fatos integrados; distinções finas. Não confundir com obscuridade gratuita.

---

## 4) Diversidade e Cobertura

- **Sem duplicatas**: enunciados **não idênticos** e **similaridade ≤ 80%** (ex.: Levenshtein/Jaccard normalizada).  
- **Limite por entidade/fenômeno**: **máx. 3 questões** por pessoa, obra, equipe, organização, lugar específico ou evento histórico **no conjunto inteiro**.  
- **Cobertura ortogonal**: evite sobreposição entre subtemas; diversifique períodos, regiões, estilos, disciplinas ou modalidades conforme o tema.  
- **Público-alvo pt-BR**: pode priorizar exemplos nacionais **sem ultrapassar ~40%** do conjunto, mantendo diversidade global.

---

## 5) Fontes e Verificação

- **Mínimo 2 URLs** por questão; priorize enciclopédias, publicações acadêmicas, sites oficiais e bases reconhecidas.  
- Use **páginas específicas** da afirmação (não homepages). Verifique **consistência** entre as fontes.  
- Evite fontes instáveis (blogs sem revisão, fóruns, wikis não moderados).  
- Para biografias ou esportes, prefira **organismos oficiais**, **históricos consolidados** e **bases estatísticas canônicas**.

---

## 6) Diretrizes de Redação

- Português (pt-BR), claro, objetivo e **neutro**; evite opinião/valor.  
- Enunciado **auto-contido**, sem necessidade de contexto externo.  
- Evite termos ambíguos (“geralmente”, “talvez”) e dados de “ano corrente”.  
- **Não use placeholders** ou perguntas simuladas; cada questão deve ser factual e verificável.
- Evitar questões que tenham a resposta literalmente embutida na própria pergunta. Por exemplo: "Qual país sediou a copa do mundo de 2014 no Brasil?".

---

## 7) Regras por Tipo de Questão

**Aberta**  

- Respostas curtas e verificáveis (nome, número, local, conceito).  
- Evite “Liste N itens” (exceto N ≤ 2 e universalmente aceitos).

**Múltipla escolha (4 alternativas)**  

- Alternativas A) B) C) D) no campo `pergunta`.  
- **Somente 1 correta**; distratores plausíveis, mutuamente exclusivos, e de tamanho semelhante.  
- Evite “Todas as anteriores/nenhuma”, pistas gramaticais e termos absolutos (“sempre/nunca”).  
- Permite leve variação de ordem das alternativas entre versões do mesmo conjunto.

**Verdadeiro-falso**  

- Afirmações factuais, inequívocas e sem dupla negação.  
- `resposta` ∈ {“Verdadeiro”, “Falso”} (exatamente).

---

## 8) Checklist de Qualidade (antes de salvar)

- [ ] Proporções por **tipo** e por **dificuldade** atendidas.  
- [ ] `id` único; campos do schema preenchidos.  
- [ ] Enunciado claro, **sem marcações** fora do padrão.  
- [ ] **2+ fontes** específicas, acessíveis e consistentes.  
- [ ] ≤ **5 questões** por entidade/fenômeno no conjunto.  
- [ ] Similaridade com enunciados existentes **≤ 80%**.  
- [ ] MCQ: 4 alternativas A–D; 1 correta; distratores plausíveis.  
- [ ] V/F: resposta “Verdadeiro” ou “Falso”.

---

## 9) Convenções e Arquivos

- Nome do arquivo: `{tema}_{subtema_clean}_{microsubtema_clean}.json`.  
- Ordene por `id`; use UTF-8 e quebras de linha Unix.  

---

## 10) Processo Sugerido

1. **Planeje cobertura** (matriz de subtemas × níveis de dificuldade).  
2. **Rascunhe enunciados D1/D2/D3** seguindo a rubrica.  
3. **Pesquise e fixe 2+ fontes** por pergunta (páginas específicas).  
4. **Redija e normalize** (pt-BR, estilo, campo `resposta`, MCQ/VF conforme regras).  
5. **Valide** (schema JSON + checklist + similaridade + limite por entidade).  
6. **Revisão cruzada**: alguém diferente do autor faz checagem final.

---

## 11) Antipadrões (evitar)

- Perguntas de atualidades efêmeras; números “do ano”.  
- Enunciados ambíguos, truques de linguagem ou pegadinhas sem base conceitual.  
- MCQ com alternativas de tamanhos díspares, ou com “todas/nenhuma”.  
- Repetir o mesmo indivíduo/obra/time/evento acima de 5 vezes no conjunto.

---
