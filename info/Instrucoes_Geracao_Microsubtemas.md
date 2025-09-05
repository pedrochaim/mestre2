# Padrão para Criação de Microsubtemas

> **Propósito.** Este documento padroniza **como** propor e redigir **microsubtemas** para sustentar a geração de perguntas validadas pelo *schema* do projeto, com alta qualidade, baixa sobreposição e foco em **fatos estáveis**.

---

## 1) Definição e natureza
Um `<microsubtema>` é um recorte **operacional** dentro de um `<subtema>` que viabiliza produzir **pelo menos 80 perguntas** (ideal: 100), com variedade de **tipos** e **dificuldades**, **fatos estáveis** e **baixa sobreposição** com outros recortes.

Existem duas naturezas válidas:

1) **Temático**  
   Recorte por **assunto/obra/franquia/território** dentro do subtema.  
   *Exemplos*: *Futebol Brasileiro* (Esportes → Futebol), *Dragon Ball* (Entretenimento → Anime e Mangá).  
   • Cobertura: “qualquer tipo de pergunta **desde que** pertença ao assunto escolhido”.

2) **Transversal**  
   Recorte por **propriedade/regra/critério** que cruza entidades diversas do subtema.  
   *Exemplo*: *Cidades com mais de 1 milhão de habitantes* (Geografia → Países, Capitais e Cidades Notáveis).  
   • Cobertura: “perguntas que testam a propriedade/critério (p.ex., pertence/pareia/classifica/está em) independentemente do país/autor/obra”.

**Dica de escolha.** Use **Temático** quando o público espera “saber tudo sobre X”. Use **Transversal** quando o valor pedagógico está em **comparar/classificar** muitos X sob a mesma regra.

**Teste rápido de viabilidade (passe/pare):**
- Há **≥ 80** fatos estáveis sem cair em atualidades sazonais?
- Consigo escrever **D1/D2/D3** sem ambiguidade?
- Sei enunciar a **regra** (se transversal) de forma operacional?
- Consigo listar **Exclusões** claras para evitar sobreposição?

---

## 2) Nomenclatura e metadados
- **Título**: claro, curto (≤ 60 caracteres), maiúsculas usuais.  
  *Ex.* “Capitais em Rios”, “Obras de Shakespeare”, “Dinossauros do Cretáceo”.
- **Slug (`microsubtema_clean`)**: minúsculas, sem acentos, com `_`.  
  *Ex.* `capitais_em_rios`, `futebol_brasileiro`, `dragon_ball`.
- **Natureza**: “Temático” ou “Transversal”.
- **Compatibilidade com o *schema*** (campos quando aplicável ao arquivo de perguntas):
  - `microsubtema`: título do recorte.
  - `microsubtema_clean`: *slug* do recorte.
  - `subtema_clean`: *slug* do subtema (fornecido pelo dicionário).
- **Relacionados (opcional)**: “↔ ver também: `<microsubtema>`” — apenas para apontar vizinhos; **não** duplica cobertura.
- **Fontes recomendadas**: 2+ **tipos canônicos** do tema (Wikipedia-EN da página **específica** + fonte oficial/enciclopédica).

---

## 3) Estrutura padrão do bloco  
*(para o arquivo `Microsubtemas_<tema>_<subtema_clean>.md`; **use o molde idêntico**)*

```
## N) <Título do microsubtema> — `<microsubtema_clean>`

**Natureza.** Temático | Transversal  
**Descrição.** (2–4 linhas didáticas que expliquem o recorte)  
**Escopo.** (bullets objetivos do que ENTRA)  
**Inclusões.** (bullets de tópicos/entidades que DEVEM aparecer ao longo do lote)  
**Exclusões.** (bullets do que NÃO entra para evitar sobreposição)  
**Matriz de variação.** (estratégias de diversidade: pares, classificações, direções, regiões, épocas, etc.)

**Exemplos por tipo e dificuldade**
- **Aberta**
  - **D1:** …
  - **D2:** …
  - **D3:** …
- **Verdadeiro/Falso**
  - **D1:** …
  - **D2:** …
  - **D3:** …
- **Múltipla escolha**
  - **D1:** …
  - **D2:** …
  - **D3:** …

**Cobertura sugerida.** (regiões/épocas/conjuntos a rotacionar)  
**Checklist.** (3–6 itens críticos de verificação)  
**Fontes recomendadas.** (2–4 referências-tipo)
```

**Orientações do molde:**
- Em **Transversal**, defina a **regra** com precisão (limiar, classe, definição operacional). Evite indicadores **instáveis** (rankings anuais); prefira **classificações estáveis** (p.ex., `landlocked`, “capitais em ilhas”, “rio que banha a capital”).  
- Em **Temático**, **delimite** tempo, canonicidade, corpus oficial e/ou fronteira geográfica.  
- Sempre detalhe **Exclusões** (ex.: “não cobre séries derivadas/‘spin-offs’”, “não inclui territórios com status diplomático controverso”, “não usa estimativas populacionais do ano corrente”).

---

## 4) Regras anti-sobreposição (obrigatórias)
1. **Um lar por assunto.** Se um tema caberia em mais de um microsubtema, escolha **apenas um** e adicione “↔ ver também” nos demais.  
2. **Exclusões explícitas.** Liste exemplos típicos que **ficam de fora** para preservar ortogonalidade.  
3. **Limite por entidade/fenômeno.** Até **3 questões** por indivíduo/obra/time/local **por lote** (ou o limite global vigente).  
4. **Estabilidade.** Prefira fatos **estáticos** (status de capital, localização, autoria, datas consolidadas).  
5. **Fontes.** Toda afirmação deve ser sustentada por **2+ fontes específicas** e consistentes.  
6. **Deduplicação cruzada.** Use um “hash central” do par testado (p.ex., `pais|capital`) para prevenir repetição entre microsubtemas.

---

## 5) Exemplos EXPANDIDOS

### 5.1 Temáticos
**a) Esportes → Futebol → *Futebol Brasileiro* — `futebol_brasileiro`**  
**Descrição.** Competições nacionais (Séries A/B), Copas, clubes, estádios, regulamentos históricos estáveis e ídolos consolidados.  
**Escopo.**
- Formatos históricos estáveis (pontos corridos, datas de adoção)
- Clubes, estádios e títulos nacionais; técnicos de títulos
- Clássicos e alcunhas canônicas
**Exclusões.**
- Tabelas/recordes da temporada corrente
- Transferências em andamento; rumores
- Estatísticas “líderes do ano”
**Matriz de variação.**
- Direção (clube→estádio | estádio→clube)
- Título→ano | técnico→título
- Regras→data de adoção
**Exemplos.**
- **Aberta D1:** “Qual clube manda seus jogos no Allianz Parque?”  
- **MCQ D2:** “Quem foi o técnico do Penta em 2002? A) Luiz Felipe Scolari B) Carlos Alberto Parreira C) Tite D) Vanderlei Luxemburgo”  
- **V/F D3:** “O Brasileirão adotou pontos corridos em 2003.”  
**Fontes.** Wikipedia-EN/PT páginas específicas; CBF (histórico).

**b) Entretenimento → Anime e Mangá → *Dragon Ball* — `dragon_ball`**  
**Escopo.**
- Obras canônicas (mangá original, Z, Super), autor (Toriyama)
- Arcos, personagens principais, filmes canônicos
**Exclusões.**
- Fanfics, jogos não canônicos, rumores
**Exemplos.**
- **Aberta D1:** “Quem é o autor de *Dragon Ball*?”  
- **MCQ D2:** “Em qual saga surge Cell pela primeira vez? A) Saiyajin B) Freeza C) Cell D) Boo”  
- **V/F D3:** “*Dragon Ball Super: Broly* é posterior a *Battle of Gods*.”  
**Fontes.** Wikipedia-EN de obras; Toei/editores oficiais.

**c) História → Roma Antiga → *Roma Republicana* — `roma_republicana`**  
**Escopo.** Instituições (cônsules, Senado), Guerras Púnicas, reformas dos Graco, expansão até 27 a.C.  
**Exclusões.** Período imperial; mitologia pura.  
**Exemplos.**
- **Aberta D1:** “Qual era o cargo máximo anual na República Romana?”  
- **MCQ D2:** “A Primeira Guerra Púnica opôs Roma a… A) Cartago B) Macedônia C) Egito Ptolemaico D) Gália”  
- **V/F D3:** “Os irmãos Graco propuseram reformas agrárias.”  

**d) História Natural → Dinossauros → *Terópodes* — `teropodes`**  
**Escopo.** Clado Theropoda, traços diagnósticos, origem das aves.  
**Exclusões.** Pterossauros (não dinossauros); mamíferos mesozoicos.  
**Exemplos.**
- **Aberta D1:** “As aves descendem de qual grande grupo de dinossauros?”  
- **MCQ D2:** “Velociraptor pertence a que clado? A) Sauropodomorpha B) Ornithopoda C) Theropoda D) Thyreophora”  
- **V/F D3:** “Nem todos os terópodes eram carnívoros.”

### 5.2 Transversais
**a) Geografia → Países, Capitais e Cidades Notáveis → *Capitais em Rios* — `capitais_em_rios`**  
**Regra.** A capital é **banhada** por um rio nomeado (p.ex., Danúbio, Nilo).  
**Exclusões.** Cidades não-capitais; canais artificiais sem consenso; “riachos” locais não canônicos.  
**Exemplos.**
- **Aberta D1:** “O Danúbio banha qual capital?”  
- **MCQ D2:** “Qual par rio→capital está correto? A) Sena→Roma B) Tâmisa→Londres C) Reno→Madri D) Nilo→Cartum”  
- **V/F D3:** “Cartum situa-se na confluência do Nilo Branco e Azul.”

**b) Geografia → Países, Capitais e Cidades Notáveis → *Países sem Litoral (landlocked)* — `paises_encravados`**  
**Regra.** País sem contato com mar/oceano; incluir casos **duplamente encravados**.  
**Exclusões.** Acesso por rio **não** conta como litoral.  
**Exemplos.**
- **Aberta D1:** “A Suíça é litorânea?”  
- **MCQ D2:** “Qual destes **não** é landlocked? A) Bolívia B) Paraguai C) Mongólia D) Argentina”  
- **V/F D3:** “Liechtenstein é duplamente encravado.”

**c) Artes → Literatura → *Obras Clássicas (Idade Antiga e Medieval)* — `obras_classicas_antiga_medieval`**  
**Regra.** Obras com datação na **Antiguidade** (~800 a.C.–~500 d.C.) ou **Idade Média** (~500–~1500 d.C.), conforme referência consagrada.  
**Escopo.** Epopeias, tragédias/comedias, poemas, crônicas e romances medievais (Homero, Virgílio, Sófocles, Dante, *Beowulf*, *A Canção de Rolando*).  
**Exclusões.** Obras renascentistas (>~1500); textos de canonicidade controversa sem consenso; adaptações modernas.  
**Exemplos.**
- **Aberta D1:** “Quem é o autor da *Eneida*?”  
- **MCQ D2:** “Qual obra é medieval? A) *Ilíada* B) *Odisseia* C) *A Canção de Rolando* D) *Teogonia*”  
- **V/F D3:** “Dante escreveu *A Divina Comédia* no período medieval.”

**d) Ciências → Matemática → *História da Matemática* — `historia_da_matematica`**  
**Regra.** Fatos **históricos** e **estáveis** sobre marcos, obras e matemáticos (Antiguidade–séc. XX).  
**Escopo.** Autores (Euclides, al-Khwarizmi, Newton, Leibniz, Gauss, Cantor), obras-marco (*Elementos*, *Al-jabr*, *Ars Magna*, *Principia*), institucionalização de áreas.  
**Exclusões.** Resultados recentes/abertos; provas técnicas; biografias especulativas.  
**Exemplos.**
- **Aberta D1:** “Quem escreveu *Elementos*?”  
- **MCQ D2:** “Qual obra traz ‘álgebra’ no título? A) *Arithmetica* B) *Al-jabr…* C) *Ars Magna* D) *Principia*”  
- **V/F D3:** “Leibniz e Newton desenvolveram, de forma independente, o cálculo no séc. XVII.”

> **Nota sobre “Cidades ≥ 1 milhão”.** Válido como transversal, mas trate como **classificação por faixa** e **fixe a referência** (censo/estimativa consolidada com data) no enunciado. Evite perguntar contagens “do ano”.

---

## 6) Checklist antes de aprovar um microsubtema
- [ ] **Natureza** marcada (Temático/Transversal).  
- [ ] **Título** e **slug** conformes.  
- [ ] **Descrição/Escopo/Exclusões** claros e operacionais.  
- [ ] **Matriz de variação** comporta os três tipos (Aberta/MCQ/VF) e três níveis (D1/D2/D3).  
- [ ] **Fontes recomendadas** factíveis para sustentar os fatos (2+ por pergunta).  
- [ ] **Critério estável** (especialmente em transversais), sem depender de números “do ano”.  
- [ ] **Viabilidade ≥ 80 perguntas** sem romper limites de entidade/fenômeno.

---

## 7) Conexão com o *schema* e regras globais
- Tipos permitidos: **Aberta**, **Múltipla escolha**, **Verdadeiro-falso** (não usar “ordenar eventos”).  
- Distribuição recomendada no lote: **D1=25%**, **D2=50%**, **D3=25%**; **50%** abertas e **50%** entre MCQ/VF conforme instruções globais.  
- Campo `fonte`: **array** com **≥ 2 URLs específicas** e consistentes (preferência: Wikipedia-EN + fonte oficial/enciclopédica).  
- Campo `pergunta` (MCQ): incluir **A) B) C) D)** no próprio texto; **uma única correta**.  
- Limite por entidade/fenômeno: **≤ 3** por lote (ou limite global vigente).  
- Evitar atualidades efêmeras e números sazonais.

---

## 8) Boas práticas para “Matriz de variação”
Rotacione **eixos** para maximizar diversidade:
- **Direção do par** (p.ex., país→capital **e** capital→país)  
- **Tempo/época** (períodos, dinastias, décadas)  
- **Região** (continentes, sub-regiões, escolas)  
- **Categoria** (gênero, clado, função)  
- **Relação** (pertence, contrasta, precede, influencia)  
- **Formato** (definição→nome; nome→definição; obra→autor; autor→obra)

---

## 9) Glossário rápido
- **Fato estável**: não depende de medida anual/temporária (ex.: autoria, capital, localização).  
- **Regra operacional**: definição aplicável sem ambiguidade (ex.: “país sem litoral oceânico”).  
- **Sobreposição**: quando dois microsubtemas competem pelo mesmo conjunto de fatos.

---

## 10) Modelo “copiar & colar” (pronto)
```
## N) <Título> — `<slug>`

**Natureza.** Temático | Transversal  
**Descrição.** (2–4 linhas)  
**Escopo.**
- …
- …
**Inclusões.**
- …
- …
**Exclusões.**
- …
- …
**Matriz de variação.**
- Direção: …
- Região/época: …
- Relação: …

**Exemplos por tipo e dificuldade**
- **Aberta** — **D1:** … | **D2:** … | **D3:** …
- **Verdadeiro/Falso** — **D1:** … | **D2:** … | **D3:** …
- **Múltipla escolha** — **D1:** … | **D2:** … | **D3:** …

**Cobertura sugerida.** (como rotacionar regiões/épocas/conjuntos)  
**Checklist.**
- Critério/regra operacional definido
- Exclusões claras
- Viabilidade ≥ 80 itens estáveis
**Fontes recomendadas.**
- Wikipedia-EN (páginas específicas)
- Fonte oficial/enciclopédica do tema
```
