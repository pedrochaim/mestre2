# Padrão para Criação de Microsubtemas

## 1) Definição e natureza
Um `<microsubtema>` é um recorte **operacional** dentro de um `<subtema>` que viabiliza gerar um lote consistente de perguntas (tipos e dificuldades) com **fatos estáveis** e **baixa sobreposição** com outros recortes.

Existem duas naturezas válidas:

1) **Temático**  
   Recorte por **assunto/obra/franquia/território** dentro do subtema.  
   Ex.: *Futebol Brasileiro* (Tema: Esportes → Subtema: Futebol), *Dragon Ball* (Entretenimento → Anime e Mangá).  
   • Cobertura: “qualquer tipo de pergunta *desde que* pertença ao assunto escolhido”.

2) **Transversal**  
   Recorte por **propriedade/regra/critério** que cruza entidades diversas dentro do subtema.  
   Ex.: *Cidades com mais de 1 milhão de habitantes* (Geografia → Países, Capitais e Cidades Notáveis).  
   • Cobertura: “perguntas que testam a propriedade/critério (p.ex., pertence/pareia/classifica/está em) independentemente do país/autor/obra”.

> **Dica de escolha:** use **Temático** quando o público espera “saber tudo sobre X”. Use **Transversal** quando o valor pedagógico está em **comparar/classificar** muitos X sob a mesma regra.

---

## 2) Nomenclatura e metadados
- **Título**: claro e curto (≤ 60 caracteres), com maiúsculas usuais.  
  Ex.: “Capitais em Rios”, “Obras de Shakespeare”, “Dinossauros do Cretáceo”.
- **Slug (`microsubtema_clean`)**: minúsculas, sem acentos, separadas por `_`.  
  Ex.: `capitais_em_rios`, `futebol_brasileiro`, `dragon_ball`.
- **Natureza**: “Temático” ou “Transversal” (informar no bloco).  
- **Escopo**: o que **entra**.  
- **Exclusões**: o que **não entra** (evita sobreposição).  
- **Fontes recomendadas**: 2+ tipos canônicos para o tema (p.ex., Wikipedia-EN da página específica + fonte oficial).

---

## 3) Estrutura padrão do bloco (para o arquivo `Microsubtemas_<tema>_<subtema_clean>.md`)
Use este molde **idêntico** para cada microsubtema:

```
## N) <Título do microsubtema> — `<microsubtema_clean>`

**Natureza.** Temático | Transversal  
**Descrição.** (2–4 linhas que explicam o recorte de forma didática)  
**Escopo.** (bullets objetivos dizendo o que inclui)  
**Exclusões.** (bullets objetivos dizendo o que excluir para evitar sobreposição)  
**Matriz de variação.** (como gerar diversidade: pares, classificações, mapas conceituais, etc.)

**Exemplos por tipo e dificuldade**
- **Aberta**
  - **D1:** ...
  - **D2:** ...
  - **D3:** ...
- **Verdadeiro/Falso**
  - **D1:** ...
  - **D2:** ...
  - **D3:** ...
- **Múltipla escolha**
  - **D1:** ...
  - **D2:** ...
  - **D3:** ...

**Cobertura sugerida.** (regiões/épocas/conjuntos a rotacionar)  
**Checklist.** (3–6 itens críticos de qualidade/verificação)  
**Fontes recomendadas.** (2–4 referências-tipo para apoiar cada item)
```

> **Observações:**
> - Em **Transversal**, defina a **regra** com precisão (limiar, classe, definição operacional). Evite indicadores instáveis (rankings anuais), preferindo **classificações** (ex.: “landlocked”, “capitais em ilhas”, “rio que banha a capital”).  
> - Em **Temático**, declare **limites** (tempo, canonicidade, obras oficiais, fronteira geográfica).  
> - Sempre inclua **Exclusões** (ex.: “não cobre séries derivadas”, “não inclui territórios com status diplomático controverso”, “não usa estimativas de população do ano corrente”).

---

## 4) Regras anti-sobreposição (obrigatórias)
1. **Um lar por assunto**: se um tema cabe em mais de um microsubtema, escolha **apenas um** e adicione “↔ ver também” nos demais.  
2. **Exclusões explícitas**: liste exemplos típicos que **ficam de fora** para preservar a ortogonalidade.  
3. **Fenômeno/entidade**: limite de **até 3 questões** por indivíduo/obra/time/local **por lote** (ou o limite global vigente).  
4. **Estabilidade**: prefira fatos **estáticos** (status de capital, localização, autoria, datas históricas consolidadas).  
5. **Fontes**: toda afirmação deve poder ser sustentada por **2+ fontes específicas** e consistentes.

---

## 5) Exemplos EXPANDIDOS

### 5.1 Temáticos (vários temas)
**a) Esportes → Futebol → *Futebol Brasileiro* — `futebol_brasileiro`**  
• **Escopo:** competições nacionais (Série A/B), Copas, clubes, estádios, ídolos, regulamentos históricos estáveis.  
• **Exclusões:** números de temporada corrente, transferências em andamento, estatísticas “líderes do ano”.  
• **Exemplos (por tipo/dif.):**  
  - **Aberta D1:** “Qual clube manda seus jogos no Allianz Parque?”  
  - **Múltipla escolha D2:** “Quem foi o técnico do título do Penta em 2002? A) Luiz Felipe Scolari B) Carlos Alberto Parreira C) Tite D) Vanderlei Luxemburgo”  
  - **Verdadeiro/Falso D3:** “O Brasileirão adotou pontos corridos em 2003.”  
• **Fontes:** Wikipedia-EN/PT páginas específicas + CBF (histórico).

**b) Entretenimento → Anime e Mangá → *Dragon Ball* — `dragon_ball`**  
• **Escopo:** obras canônicas (mangá original, Z, Super), autores (Toriyama), arcos e personagens principais.  
• **Exclusões:** fanfics, jogos não canônicos, rumores.  
• **Exemplos:**  
  - **Aberta D1:** “Quem é o autor de *Dragon Ball*?”  
  - **Múltipla escolha D2:** “Qual saga apresenta Cell pela primeira vez? A) Saga Saiyajin B) Saga Freeza C) Saga Cell D) Saga Boo”  
  - **Verdadeiro/Falso D3:** “*Dragon Ball Super: Broly* é posterior a *Battle of Gods*.”  
• **Fontes:** Wikipedia-EN das obras, sites oficiais/Toei.

**c) História → História Antiga → *Roma Republicana* — `roma_republicana`**  
• **Escopo:** instituições (cônsules, Senado), guerras púnicas, reforma agrária dos Graco, expansão até 27 a.C.  
• **Exclusões:** Império Romano (fase imperial), mitologia pura.  
• **Exemplos:**  
  - **Aberta D1:** “Qual era o cargo máximo anual na República Romana?”  
  - **Múltipla escolha D2:** “A Primeira Guerra Púnica opôs Roma a… A) Cartago B) Macedônia C) Egito Ptolemaico D) Gália”  
  - **Verdadeiro/Falso D3:** “Os irmãos Graco propuseram reformas agrárias.”  
• **Fontes:** Wikipedia-EN tópicos + enciclopédias acadêmicas.

**d) História Natural → Dinossauros e Pré-História → *Terópodes* — `teropodes`**  
• **Escopo:** dinossauros terópodes, características diagnósticas, linhagem das aves.  
• **Exclusões:** pterossauros (não dinossauros), mamíferos mesozoicos.  
• **Exemplos:**  
  - **Aberta D1:** “Aves descendem de qual grande grupo de dinossauros?”  
  - **Múltipla escolha D2:** “Velociraptor pertence a que clado? A) Sauropodomorpha B) Ornithopoda C) Theropoda D) Thyreophora”  
  - **Verdadeiro/Falso D3:** “Nem todos os terópodes eram carnívoros.”

---

### 5.2 Transversais (vários temas)
**a) Geografia → Países, Capitais e Cidades Notáveis → *Capitais em Rios* — `capitais_em_rios`**  
• **Regra:** capital banhada por rio nomeado (Danúbio, Nilo, etc.).  
• **Exclusões:** cidades não-capitais; canais artificiais sem consenso.  
• **Exemplos:**  
  - **Aberta D1:** “O Danúbio banha qual capital?”  
  - **Múltipla escolha D2:** “Qual par rio→capital está correto? A) Sena→Roma B) Tâmisa→Londres C) Reno→Madri D) Nilo→Cartum”  
  - **Verdadeiro/Falso D3:** “Cartum situa-se na confluência do Nilo Branco e Azul.”

**b) Geografia → Países, Capitais e Cidades Notáveis → *Países sem Litoral (landlocked)* — `paises_encravados`**  
• **Regra:** país sem contato com mar/oceano; incluir duplamente encravados.  
• **Exclusões:** acesso por rios não conta como litoral.  
• **Exemplos:**  
  - **Aberta D1:** “A Suíça é litorânea?”  
  - **Múltipla escolha D2:** “Qual destes **não** é landlocked? A) Bolívia B) Paraguai C) Mongólia D) Argentina”  
  - **Verdadeiro/Falso D3:** “Liechtenstein é duplamente encravado.”

**c) Artes → Literatura → *Obras Clássicas (Idade Antiga e Medieval)* — `obras_classicas_antiga_medieval`**  
• **Regra:** obras literárias canônicas com datação situada na **Antiguidade** (≈ 800 a.C.–≈ 500 d.C.) ou na **Idade Média** (≈ 500–≈ 1500 d.C.), conforme referência consagrada.  
• **Escopo:** epopeias, tragédias, comédias, poemas, crônicas e romances medievais (p.ex., **Homero**, **Virgílio**, **Sófocles**, **Dante**, **Chaucer**, **Beowulf**, **A Canção de Rolando**).  
• **Exclusões:** obras renascentistas (> ≈ 1500 d.C.); peças “proto-modernas” pós-1500; textos de datação/canonicidade controversa sem consenso forte; adaptações modernas.  
• **Exemplos (por tipo/dif.):**  
  - **Aberta D1:** “Quem é o autor da *Eneida*?”  
  - **Múltipla escolha D2:** “Qual obra é medieval? A) *Ilíada* B) *Odisseia* C) *A Canção de Rolando* D) *Teogonia*”  
  - **Verdadeiro/Falso D3:** “Dante Alighieri escreveu *A Divina Comédia* durante o período medieval.”  
• **Fontes recomendadas:** Wikipedia-EN de cada obra/autor; enciclopédias literárias (Oxford/ Britannica).

**d) Ciências → Matemática → *História da Matemática* — `historia_da_matematica`**  
• **Regra:** fatos **históricos e estáveis** sobre marcos, obras e matemáticos (antiguidade ao séc. XX), com ênfase em **datas, autores, escolas e impacto** (não em demonstrações técnicas).  
• **Escopo:** escolas e personagens (pitagóricos, euclidianos, al-Khwarizmi, Fibonacci, Cardano, Newton, Leibniz, Gauss, Cantor, Hilbert), obras-marco (*Elementos*, *Al-jabr*, *Ars Magna*, *Principia*), institucionalização de áreas (cálculo, álgebra, teoria dos números, conjuntos).  
• **Exclusões:** controvérsias não consensuais; resultados recentes/abertos; provas avançadas; biografias especulativas sem fonte.  
• **Exemplos (por tipo/dif.):**  
  - **Aberta D1:** “Quem escreveu *Elementos*?”  
  - **Múltipla escolha D2:** “Qual obra introduz ‘álgebra’ no título? A) *Arithmetica* B) *Al-Kitāb al-mukhtaṣar fī ḥisāb al-jabr wa’l-muqābala* C) *Ars Magna* D) *Principia Mathematica*”  
  - **Verdadeiro/Falso D3:** “Leibniz e Newton desenvolveram, de forma independente, o cálculo no século XVII.”  
• **Fontes recomendadas:** Wikipedia-EN de autores/obras; MacTutor History of Mathematics (St Andrews); Stanford Encyclopedia of Philosophy (entradas relevantes).

**e) Entretenimento → Cinema → *Remakes Oficiais* — `remakes_oficiais`**  
• **Regra:** filme que reinterpreta obra anterior com crédito oficial como “remake”.  
• **Exclusões:** reboots vagos sem fonte, “inspirado em” sem crédito.  
• **Exemplos:**  
  - **Aberta D1:** “Qual remake de *Psycho* foi lançado em 1998?”  
  - **Múltipla escolha D2:** “Qual é remake de *Infernal Affairs*? A) *The Departed* B) *Heat* C) *Memento* D) *Collateral*”  
  - **Verdadeiro/Falso D3:** “*The Departed* é remake de um filme de Hong Kong.”

> **Nota sobre “Cidades com mais de 1 milhão”:** é um transversal **válido**, mas trate como *classificação por faixa* e **evite** perguntar contagens anuais. Prefira formulações estáveis (“É ≥1M segundo a fonte X?”; “Quais destas cidades **não** atingem ≥1M segundo X?”) e **fixe a referência** (censo/estimativa consolidada) no enunciado quando necessário.

---

## 6) Checklist antes de aprovar um microsubtema
- [ ] **Natureza** marcada (Temático ou Transversal).  
- [ ] **Título** e **slug** conformes.  
- [ ] **Escopo/Exclusões** claros, evitando sobreposição.  
- [ ] **Matriz de variação** cobre os três tipos (Aberta/MCQ/VF) e três níveis (D1/D2/D3).  
- [ ] **Fontes recomendadas** listadas e realistas para sustentar fatos.  
- [ ] **Critério estável** (especialmente em transversais) — sem depender de números “do ano”.
