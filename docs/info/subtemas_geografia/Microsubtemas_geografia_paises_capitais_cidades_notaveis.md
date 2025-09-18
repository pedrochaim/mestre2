# Microsubtemas — Geografia / Países, Capitais e Cidades Notáveis

**Objetivo:** este documento organiza **14 microsubtemas** “densos” o suficiente para produzir **100 perguntas** variadas por microsubtema (tipos e dificuldades), com foco em **fatos estáveis** e fontes verificáveis.  

**Meta por microsubtema (100 itens):**
- **Tipos:** 50 abertas · 30 múltipla escolha · 20 verdadeiro/falso.  
- **Dificuldade:** D1=25 · D2=50 · D3=25.  
- **Rotina anti-repetição:** (1) não repetir enunciado nem resposta; (2) **máx. 5** itens sobre o mesmo país/fenômeno; (3) alternar direção das relações (p.ex., país→capital e capital→país); (4) distratores **próximos** (mesma região/idioma); (5) registrar hash do par central (p.ex., `pais|capital`) para deduplicação entre arquivos.

**Cobertura regional sugerida (por cada bloco de 20):** 5 Europa · 5 Ásia · 4 África · 4 Américas · 2 Oceania (ajuste conforme o microsubtema).

**Fontes recomendadas (sempre anexar 1–2 por item):** Wikipedia (inglês) da página específica + 1 fonte canônica (CIA World Factbook; UN Geospatial/UN M49; institutos nacionais, p.ex. IBGE; atlas oficiais).

---

## 1) País ↔ Capital — `pais_capital`

**Descrição.** Associação **país→capital** e **capital→país** em todos os continentes, priorizando entidades soberanas amplamente reconhecidas.  
**Escopo.** Países da ONU e casos amplamente consensuais; evitar territórios com status ambíguo quando isso afetar a resposta.    
**Matriz de variação.**
**Exemplos por tipo e dificuldade**
- **Aberta**
  - **D1:** Qual é a capital de *X*?
  - **D2:** Dê a capital de *X* **e** de *Y*.
  - **D3:** Entre *A, B, C, D*, identifique o **único** par país–capital correto e justifique em 1 frase.
- **Verdadeiro/Falso**
  - **D1:** “*X* tem capital *Y*.”
  - **D2:** “A capital de *X* é *Y* (não *Z*).”
  - **D3:** “*Y* é a capital oficial de *X*, enquanto *W* é a maior cidade.”
- **Múltipla escolha**
  - **D1:** Qual é a capital de *X*? (A) *Y* (B) *Z* (C) *W* (D) *V*
  - **D2:** Qual país tem como capital *Y*? (A) *X* (B) *Z* (C) *W* (D) *V*
  - **D3:** Qual alternativa apresenta o **único** par correto país–capital? (A) *X–Y* (B) *Z–W* (C) *V–T* (D) *R–S*
- **D1 (aberta):** “Qual é a capital de *X*?” · **VF:** “*X* tem capital *Y*.”  
- **D2 (MCQ):** escolha a capital correta entre 4–5 opções próximas.  
- **D3 (MCQ/aberta):** identificar o **único** par correto entre pares “quase certos” (distratores regionais).  
**Cobertura regional.** Distribuir proporcionalmente; rotacionar países grandes e pequenos.  
**Checklist.** Verificar ortografia; evitar países com mudança recente não consolidada; distratores do mesmo continente.  
**Fontes.** Wikipedia (country, capital pages), CIA World Factbook.

---

## 2) Capital ≠ maior cidade — `capital_nao_maior`

**Descrição.** Países cuja capital **não** é a metrópole demográfica.  
**Escopo.** Países com capital planejada/administrativa distinta da maior cidade; usar comparativos estáveis (não rankings anuais voláteis).   
**Matriz de variação.**
**Exemplos por tipo e dificuldade**
- **Aberta**
  - **D1:** Qual é a capital de *X*? (em país onde a capital não é a maior cidade)
  - **D2:** Cite a **maior cidade** de *X* (não a capital).
  - **D3:** Explique em 1 frase por que *Y* (maior cidade) **não** é a capital de *X*.
- **Verdadeiro/Falso**
  - **D1:** “*X* tem capital *Y*, mas *Z* é sua maior cidade.”
  - **D2:** “Em *X*, capital e maior cidade são a mesma.”
  - **D3:** “*Y* foi escolhida como capital por motivos administrativos, enquanto *Z* é a maior cidade.”
- **Múltipla escolha**
  - **D1:** Qual destas é a **capital** de *X*? (A) *Y* (B) *Z* (C) *W* (D) *V*
  - **D2:** Qual é a **maior cidade** de *X*? (A) *Y* (B) *Z* (C) *W* (D) *V*
  - **D3:** Marque a alternativa com o pareamento correto **capital × maior cidade**: (A) *X*: *Y* × *Z* (B) ...
- **D1 (aberta):** “Qual é a capital da Austrália?”  
- **D2 (MCQ):** “Qual destas é a **maior cidade** do país *X* (não a capital)?”  
- **D3 (VF):** afirmações cruzando capital vs. maior cidade.  
**Cobertura regional.** Equilibrar por continentes; incluir casos clássicos e menos óbvios.  
**Checklist.** Evitar números populacionais; focar só no status “capital” vs. “maior cidade”.  
**Fontes.** Wikipedia (capital, major city), sites estatísticos nacionais.

---

## 3) Países encravados (landlocked) e duplamente encravados — `paises_encravados`

**Descrição.** Países sem litoral marítimo; casos de dupla enclausura.  
**Escopo.** Classificar condição litorânea; identificar capitais e vizinhos de países encravados.  
**Matriz de variação.**
**Exemplos por tipo e dificuldade**
- **Aberta**
  - **D1:** *X* é litorâneo? (responda “sim” ou “não”).
  - **D2:** Cite **dois** países que fazem fronteira com *X*.
  - **D3:** Liste **todos** os países que cercam *X* (2–4 vizinhos).
- **Verdadeiro/Falso**
  - **D1:** “*X* não tem saída para o mar.”
  - **D2:** “*X* faz fronteira com *Y*.”
  - **D3:** “*X* é **duplamente** encravado.”
- **Múltipla escolha**
  - **D1:** Qual país **não** é landlocked? (A) *X* (B) *Y* (C) *Z* (D) *W*
  - **D2:** Qual capital pertence a um país **landlocked**? (A) *C1* (B) *C2* (C) *C3* (D) *C4*
  - **D3:** Qual alternativa lista **apenas** países landlocked? (A) *X, Y* (B) *Z, W* (C) ...
- **D1 (VF):** “*X* é litorâneo.”  
- **D2 (MCQ):** “Qual destes **não** é landlocked?”  
- **D3 (aberta/MCQ):** “Quais países cercam *X*?” (2–4 vizinhos)  
**Cobertura regional.** África, Ásia Central, Europa Central; também Américas/Oceania quando aplicável.  
**Checklist.** Conferir mudanças de litoral (independências, acordos).  
**Fontes.** Wikipedia (Landlocked countries), CIA World Factbook, mapas oficiais.

---

## 4) Países transcontinentais — `paises_transcontinentais`

**Descrição.** Estados que se estendem por mais de um continente e a localização de suas capitais.  
**Escopo.** Definições geográficas aceitas (Eurásia, Oriente Médio, Cáucaso, Norte da África, etc.).  
**Matriz de variação.**
**Exemplos por tipo e dificuldade**
- **Aberta**
  - **D1:** *X* é transcontinental? (sim/não)
  - **D2:** Em quais continentes *X* se estende?
  - **D3:** Em que porção continental se localiza a **capital** de *X*?
- **Verdadeiro/Falso**
  - **D1:** “*X* se estende por mais de um continente.”
  - **D2:** “A capital de *X* está no continente *Y*.”
  - **D3:** “*X* tem território principal em *A* e porção secundária em *B*.”
- **Múltipla escolha**
  - **D1:** Qual país é transcontinental? (A) *X* (B) *Y* (C) *Z* (D) *W*
  - **D2:** *X* se estende por quais continentes? (A) *A–B* (B) *A–C* (C) *B–C* (D) *A–D*
  - **D3:** Onde fica a **capital** de *X*? (A) porção *A* (B) porção *B* (C) ilha *C* (D) península *D*
- **D1 (VF):** “*X* é transcontinental.”  
- **D2 (MCQ):** “Em quais continentes *X* se estende?”  
- **D3 (aberta):** “A capital de *X* fica em qual porção continental?”  
**Cobertura regional.** Europa–Ásia; África–Ásia; casos ilhéus limítrofes.  
**Checklist.** Ancorar na definição usada pela fonte; evitar debates políticos.  
**Fontes.** Wikipedia (Transcontinental countries), UN Geospatial notes.

---

## 5) Capitais costeiras vs. interiores — `capitais_costeiras_interiores`

**Descrição.** Classificação binária duradoura quanto ao contato direto com o mar/oceano.  
**Escopo.** Considerar **estuários** costeiros como “costeir@s” se conexão marítima direta; rios profundos sem estuário contam como **interior**.    
**Matriz de variação.**
**Exemplos por tipo e dificuldade**
- **Aberta**
  - **D1:** *X* é uma capital **costeira**? (sim/não)
  - **D2:** Cite uma capital **de interior** na região *R*.
  - **D3:** Entre as capitais *A, B, C, D*, indique as **duas** costeiras.
- **Verdadeiro/Falso**
  - **D1:** “*X* é capital costeira.”
  - **D2:** “*Y* é capital de interior conectada ao mar apenas por rio navegável.”
  - **D3:** “*Z* situa-se em um estuário com saída direta ao oceano.”
- **Múltipla escolha**
  - **D1:** Qual capital abaixo é **de interior**? (A) *A* (B) *B* (C) *C* (D) *D*
  - **D2:** Qual é a **única** costeira no Atlântico entre as opções? (A) *A* (B) *B* (C) *C* (D) *D*
  - **D3:** Assinale o par **capital → classificação** correto: (A) *X → costeira* (B) *Y → interior* (C) ...
- **D1 (VF):** “*X* é capital costeira.”  
- **D2 (MCQ):** “Qual capital abaixo é de **interior**?”  
- **D3 (MCQ):** “Qual é a **única** costeira no Atlântico entre as opções?”  
**Cobertura regional.** Rotação por todos os continentes.  
**Checklist.** Conferir mapas de estuário/costa; atenção a baías fechadas.  
**Fontes.** Wikipedia (capital pages), atlas oficiais.

---

## 6) Capitais e rios — `capitais_em_rios`

**Descrição.** Capitais às margens de rios notáveis (Danúbio, Nilo, Sena, Tejo, Tâmisa, Mekong, etc.).  
**Escopo.** Relação **capital↔rio**; incluir confluências urbanas importantes.    
**Matriz de variação.**
**Exemplos por tipo e dificuldade**
- **Aberta**
  - **D1:** O rio *R* banha qual capital?
  - **D2:** Cite **duas** capitais banhadas pelo rio *R*.
  - **D3:** Em qual **confluência** fluvial se localiza *X*? (nomeie os rios)
- **Verdadeiro/Falso**
  - **D1:** “O rio *R* passa por *X*.”
  - **D2:** “*X* fica às margens do rio *R*, não do *S*.”
  - **D3:** “*Y* está no encontro dos rios *R* e *S*.”
- **Múltipla escolha**
  - **D1:** Qual par **rio → capital** está correto? (A) *R–X* (B) *S–Y* (C) *T–Z* (D) *U–W*
  - **D2:** Qual capital é banhada pelo **R**? (A) *X* (B) *Y* (C) *Z* (D) *W*
  - **D3:** Qual alternativa contém o par **incorreto**? (A) *R–X* (B) *S–Y* (C) *T–Z* (D) *U–W*
- **D1 (aberta):** “O Danúbio banha qual capital?”  
- **D2 (MCQ):** pares rio→capital; capital→rio.  
- **D3 (MCQ/VF):** identificar o par **incorreto** entre opções próximas.  
**Cobertura regional.** Europa central/oriental; África do Norte/Oriente Médio; Ásia do Sul/SE.  
**Checklist.** Validar trechos fluviais; evitar confusão com bacias distintas.  
**Fontes.** Wikipedia (List of national capitals on rivers), páginas das cidades.

---

## 7) Capitais em paralelos/meridianos marcantes — `capitais_paralelos_meridianos`

**Descrição.** Capitais sobre/ao redor do **Equador**, **Trópicos** e **Greenwich**; hemisférios N/S e E/O.  
**Escopo.** Classificação posicional sem exigir valores numéricos exatos.    
**Matriz de variação.**
**Exemplos por tipo e dificuldade**
- **Aberta**
  - **D1:** *X* está no hemisfério **sul**? (sim/não)
  - **D2:** Cite uma capital **ao sul** do Equador e outra **ao norte**.
  - **D3:** Entre *A–D*, qual fica **mais próxima** do Meridiano de Greenwich? Justifique em 1 frase.
- **Verdadeiro/Falso**
  - **D1:** “*X* está no hemisfério norte.”
  - **D2:** “*Y* fica **ao sul** do Trópico de Capricórnio.”
  - **D3:** “*Z* cruza o **Meridiano de Greenwich**.”
- **Múltipla escolha**
  - **D1:** Qual capital está **ao norte** do Trópico de Câncer? (A) *A* (B) *B* (C) *C* (D) *D*
  - **D2:** Qual par **capital → hemisfério** está correto? (A) *X → N* (B) *Y → S* (C) *Z → N* (D) *W → S*
  - **D3:** Qual fica **mais próxima** do Equador? (A) *A* (B) *B* (C) *C* (D) *D*
- **D1 (VF):** “*X* está no hemisfério sul.”  
- **D2 (MCQ):** “Qual capital está ao **norte** do Trópico de Câncer?”  
- **D3 (MCQ):** “Qual fica **mais próxima** do Meridiano de Greenwich?”  
**Cobertura regional.** Global; incluir casos de borda de trópicos.  
**Checklist.** Usar lat/long aproximadas apenas para ordenar; sem valores decimais.  
**Fontes.** Wikipedia (city coordinates), UN Geospatial.

---

## 8) Altitude de capitais — `capitais_altitude`

**Descrição.** Capitais de **alta** e **baixa** altitude (planaltos andinos/africanos/asiáticos, litorâneas).  
**Escopo.** Comparação qualitativa (alta/baixa) ou ordens relativas entre opções próximas.    
**Matriz de variação.**
**Exemplos por tipo e dificuldade**
- **Aberta**
  - **D1:** *X* é uma capital de **alta** altitude? (sim/não)
  - **D2:** Entre *A* e *B*, qual está **mais elevada**? (resposta qualitativa)
  - **D3:** Entre *A–D*, indique a **mais elevada** e justifique (planalto, Andes, etc.).
- **Verdadeiro/Falso**
  - **D1:** “*X* situa-se em planalto elevado.”
  - **D2:** “*Y* é capital **litorânea** (baixa altitude).”
  - **D3:** “*Z* excede ~2.000 m de altitude.”
- **Múltipla escolha**
  - **D1:** Qual capital está em **baixa altitude**? (A) *A* (B) *B* (C) *C* (D) *D*
  - **D2:** Qual das opções está **acima** de ~1.500 m? (A) *A* (B) *B* (C) *C* (D) *D*
  - **D3:** Qual é a **mais elevada** entre capitais andinas? (A) *A* (B) *B* (C) *C* (D) *D*
- **D1 (VF):** “La Paz é uma capital de alta altitude.”  
- **D2 (MCQ):** “Entre as opções, qual está acima de ~2.000 m?”  
- **D3 (MCQ):** “Qual é a **mais elevada** entre quatro capitais andinas?”  
**Cobertura regional.** Andes; África oriental; Ásia Central; litorâneas globais.  
**Checklist.** Usar faixas (≈); evitar números exatos que variam por fonte.  
**Fontes.** Wikipedia (Elevation of cities), atlas topográficos.

---

## 9) Países com múltiplas capitais / sedes de poderes — `multiplas_capitais`

**Descrição.** Países com capital legislativa, judicial e executiva distintas; arranjos constitucionais.  
**Escopo.** Identificar cidade-função; capital constitucional x sede do governo.  
**Matriz de variação.**
**Exemplos por tipo e dificuldade**
- **Aberta**
  - **D1:** Qual país mantém **três** capitais oficiais?
  - **D2:** Indique as **sedes** do poder **executivo** e **legislativo** de *X*.
  - **D3:** Relacione **cidade → poder** (executivo/legislativo/judiciário) de *X*.
- **Verdadeiro/Falso**
  - **D1:** “Em *X*, a capital **constitucional** difere da sede do governo.”
  - **D2:** “A cidade *Y* abriga o **Judiciário** de *X*.”
  - **D3:** “*X* possui exatamente **três** capitais funcionais.”
- **Múltipla escolha**
  - **D1:** Qual país tem **múltiplas** capitais? (A) *A* (B) *B* (C) *C* (D) *D*
  - **D2:** Qual é a **capital legislativa** de *X*? (A) *A* (B) *B* (C) *C* (D) *D*
  - **D3:** Assinale o pareamento **cidade → poder** correto para *X*. (A) ...
- **D1 (aberta):** “Qual país mantém **três** capitais oficiais?”  
- **D2 (MCQ):** “Qual é a **capital legislativa** de *X*?”  
- **D3 (VF/MCQ):** pares cidade→poder correto.  
**Cobertura regional.** África Austral, Europa, Ásia do Sul.  
**Checklist.** Checar redações constitucionais atuais.  
**Fontes.** Wikipedia (political system), constituições/sítios oficiais.

---

## 10) Capitais insulares — `capitais_insulares`

**Descrição.** Capitais situadas em ilhas (oceânicas ou em ilhas costeiras/continentais).  
**Escopo.** Associação capital→ilha/arquipélago; exceções de penínsulas não contam.  
**Matriz de variação.**
**Exemplos por tipo e dificuldade**
- **Aberta**
  - **D1:** *X* fica em **qual ilha**?
  - **D2:** *X* pertence a **qual arquipélago**?
  - **D3:** Explique em 1 frase por que *X* é considerada **insular** (ilha oceânica vs. costeira).
- **Verdadeiro/Falso**
  - **D1:** “*X* está em uma **ilha**.”
  - **D2:** “*Y* situa-se em uma **península**, não em ilha.”
  - **D3:** “*Z* fica numa ilha do **Mediterrâneo**.”
- **Múltipla escolha**
  - **D1:** Qual capital fica **em uma ilha**? (A) *A* (B) *B* (C) *C* (D) *D*
  - **D2:** Qual par **ilha → capital** está correto? (A) *I–X* (B) *J–Y* (C) *K–Z* (D) *L–W*
  - **D3:** Qual alternativa contém a **intrusa** (não insular)? (A) *A* (B) *B* (C) *C* (D) *D*
- **D1 (MCQ):** “Qual capital fica **em uma ilha**?”  
- **D2 (aberta):** “A qual arquipélago pertence *X*?”  
- **D3 (MCQ):** escolher o par ilha→capital correto.  
**Cobertura regional.** Caribe, Pacífico, Mediterrâneo, Índico.  
**Checklist.** Validar limites insulares; evitar áreas metropolitanas “semi-insulares”.  
**Fontes.** Wikipedia (List of island countries and territories), páginas das cidades.

---

## 11) Enclaves, exclaves e cidades fronteiriças — `enclaves_exclaves_fronteiras`

**Descrição.** Porções territoriais separadas (exclaves/enclaves) e **cidades-gêmeas** binacionais.  
**Escopo.** Identificar a situação territorial e parear cidades em fronteiras.   
**Matriz de variação.**
**Exemplos por tipo e dificuldade**
- **Aberta**
  - **D1:** *Kaliningrado* pertence a qual país?
  - **D2:** Classifique *X* como **enclave**, **exclave** ou nenhum.
  - **D3:** Cite um par de **cidades-gêmeas** e o país de cada.
- **Verdadeiro/Falso**
  - **D1:** “Ceuta e Melilla pertencem à Espanha.”
  - **D2:** “*X* forma um **enclave** totalmente rodeado por *Y*.”
  - **D3:** “*A–B* são cidades-gêmeas em lados opostos da fronteira.”
- **Múltipla escolha**
  - **D1:** Qual opção descreve um **exclave**? (A) *A* (B) *B* (C) *C* (D) *D*
  - **D2:** Ceuta e Melilla pertencem a… (A) Marrocos (B) Espanha (C) Portugal (D) França
  - **D3:** Qual par de **cidades-gêmeas** está correto? (A) *C1–C2* (B) *C3–C4* (C) *C5–C6* (D) *C7–C8*
- **D1 (aberta):** “Kaliningrado pertence a qual país?”  
- **D2 (MCQ):** “Ceuta e Melilla pertencem a…?”  
- **D3 (MCQ/VF):** qual par de **cidades-gêmeas** está correto/errado.  
**Cobertura regional.** Europa, Norte da África, Américas.  
**Checklist.** Evitar disputas ativas; focar em status amplamente reconhecido.  
**Fontes.** Wikipedia (exclave/enclave), órgãos fronteiriços.

---

## 12) Capitais e mares adjacentes — `capitais_e_mares`

**Descrição.** Capitais banhadas por mares regionais (Mediterrâneo, Báltico, Negro, Adriático, Caribe etc.).  
**Escopo.** Relação capital→mar; identificar **intrusas** fora do mar citado.   
**Matriz de variação.**
**Exemplos por tipo e dificuldade**
- **Aberta**
  - **D1:** *X* é banhada por **qual mar**?
  - **D2:** Cite **duas** capitais banhadas pelo mar *Y*.
  - **D3:** Justifique por que *X* **não** é banhada pelo *Y* (intrusa comum).
- **Verdadeiro/Falso**
  - **D1:** “*X* é banhada pelo *Y*.”
  - **D2:** “*Z* fica no **Adriático**, não no **Jônico**.”
  - **D3:** “*W* não tem costa no **Caribe**.”
- **Múltipla escolha**
  - **D1:** Qual capital é banhada pelo **Báltico**? (A) *A* (B) *B* (C) *C* (D) *D*
  - **D2:** Qual par **capital → mar** está correto? (A) *X → Y* (B) *Z → W* (C) *V → T* (D) *R → S*
  - **D3:** Qual é a **intrusa** entre capitais do Mediterrâneo? (A) *A* (B) *B* (C) *C* (D) *D*
- **D1 (VF):** “*X* é banhada pelo mar *Y*.”  
- **D2 (MCQ):** capital→mar correto.  
- **D3 (MCQ):** “Qual **não** é banhada pelo *Y*?”  
**Cobertura regional.** Europa, Oriente Médio, Caribe.  
**Checklist.** Confirmar limites de mares/estuários.  
**Fontes.** Wikipedia (Seas and capitals), atlas náuticos.

---

## 13) Renomeações e mudanças de capital — `renomeacoes_capitais_transferencias`

**Descrição.** Cidades/capitais que mudaram de nome e países que trocaram a sede administrativa.  
**Escopo.** Usar **nomes atuais** e ano de mudança **consolidado**.   
**Matriz de variação.**
**Exemplos por tipo e dificuldade**
- **Aberta**
  - **D1:** Qual é o **nome atual** de *X*?
  - **D2:** Em que **ano** (aproximado) *X* mudou de nome?
  - **D3:** Qual país **transferiu** a capital de *A* para *B*?
- **Verdadeiro/Falso**
  - **D1:** “*X* mudou de nome.”
  - **D2:** “*A* passou a chamar-se *B* após 1990.”
  - **D3:** “A capital de *X* foi transferida de *A* para *B*.”
- **Múltipla escolha**
  - **D1:** Qual é o **nome atual** de *A*? (A) *B* (B) *C* (C) *D* (D) *E*
  - **D2:** Qual par **antigo → atual** está correto? (A) *A→B* (B) *C→D* (C) *E→F* (D) *G→H*
  - **D3:** Qual alternativa indica corretamente a **nova capital** de *X*? (A) *A* (B) *B* (C) *C* (D) *D*
- **D1 (aberta):** “Qual é o **nome atual** de *X*?”  
- **D2 (MCQ):** país→capital **antiga→atual**.  
- **D3 (VF):** afirmações com ano aproximado da mudança.  
**Cobertura regional.** Global; atenção especial a África e Ásia.  
**Checklist.** Conferir data oficial e nomenclatura corrente em fontes confiáveis.  
**Fontes.** Wikipedia (city name changes), diários oficiais.



## 14) Extremos geográficos de capitais por continente — `extremos_capitais`

**Descrição.** Capitais mais ao **norte/sul/leste/oeste** dentro de cada continente.  
**Escopo.** Comparação relativa entre capitais do mesmo continente; sem números exatos.   
**Matriz de variação.**
**Exemplos por tipo e dificuldade**
- **Aberta**
  - **D1:** Qual é a capital **mais ao norte** da Europa?
  - **D2:** Entre *A–D*, qual é a **mais a oeste** nas Américas?
  - **D3:** Explique qual capital, entre *A–D*, está **mais ao sul** e justifique (hemisfério/latitude relativa).
- **Verdadeiro/Falso**
  - **D1:** “*X* é uma das capitais mais ao **leste** da Ásia.”
  - **D2:** “*Y* fica **mais ao norte** que *Z* no mesmo continente.”
  - **D3:** “*W* é a **mais a oeste** do seu continente.”
- **Múltipla escolha**
  - **D1:** Qual é a capital **mais ao norte** da Europa? (A) *A* (B) *B* (C) *C* (D) *D*
  - **D2:** Qual das opções é a **intrusa** entre as mais a leste da Ásia? (A) *A* (B) *B* (C) *C* (D) *D*
  - **D3:** Qual é a **mais ao sul** entre as quatro capitais listadas? (A) *A* (B) *B* (C) *C* (D) *D*
- **D1 (MCQ):** “Qual é a capital **mais ao norte** da Europa?”  
- **D2 (MCQ):** escolher a **mais a oeste** entre quatro nas Américas.  
- **D3 (VF):** afirmações de extremo correto/incorreto.  
**Cobertura regional.** Um conjunto de extremos por continente.  
**Checklist.** Apoiar-se em latitude/longitude relativas; evitar empates duvidosos.  
**Fontes.** Wikipedia (Lists of capitals by geographic extremes), UN Geospatial.

---

## Apêndice A — Template de enunciado por tipo/dificuldade

- **Aberta (D1):** “Qual é a capital de *X*?” · “*X* é litorânea?”  
- **Aberta (D2):** “Indique **duas** capitais banhadas pelo Danúbio.”  
- **Aberta (D3):** “Entre *A, B, C, D*, explique qual é a **única** capital transcontinental e justifique em 1 frase.”  
- **Múltipla escolha (D1/D2):** 1 correta + 3–4 distratores próximos (mesma região/idioma).  
- **Múltipla escolha (D3):** pares quase corretos (troca de país/ilha/função de poder).  
- **Verdadeiro/Falso:** blocos de 10 afirmações curtas (50% verdadeiras).

## Apêndice B — Checklist de qualidade (usar em cada lote de 20)
1. Cobertura regional respeitada?  
2. Repetição de resposta ou enunciado? (bloquear se sim)  
3. Máximo de 5 itens sobre o mesmo país/fenômeno respeitado?  
4. Distratores “próximos” e plausíveis?  
5. Fontes anexadas (Wikipedia EN + fonte canônica)?  
6. Termos e topônimos na ortografia atual?  
7. Evitou indicadores voláteis (população, rankings anuais, áreas urbanas “maiores”)?

