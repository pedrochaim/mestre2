# Instruções do Projeto — Criação de Microsubtemas (versão reorganizada)

> **Propósito**. Este guia padroniza **como propor e redigir *microsubtemas*** para sustentar a geração de perguntas factuais e estáveis, validadas pelo schema do projeto. As orientações aqui **não alteram o schema** de perguntas — apenas estruturam o **documento de microsubtema** que servirá de base para gerar questões.

---

## 1) O que é um *microsubtema*

Um **microsubtema** é um recorte **operacional** dentro de um **subtema** que permite produzir **≥ 80 perguntas** (ideal: \~100) com **baixa sobreposição** com outros recortes, mantendo **fatos estáveis**, clareza de **escopo** e diversidade de itens (aberta, múltipla escolha, verdadeiro/falso).

* **Não é** uma lista fechada de tópicos: o escopo define **fronteiras e exemplos**, mas **é não exaustivo**. É permitido usar **personagens/assuntos não listados explicitamente**, desde que **coerentes com o escopo** e **sustentados por fontes confiáveis**.
* O microsubtema deve ser **reutilizável** e **longevo** (evitar fatos efêmeros, atualidades voláteis, placares de temporada, preços, etc.).

---

## 2) Naturezas válidas

* **Temático** — recorte por **assunto/obra/franquia/território** dentro do subtema.
  *Exs.*: *Futebol Brasileiro* (Esportes → Futebol), *Dragon Ball* (Entretenimento → Anime e Mangá), *Roma Republicana* (História → Roma Antiga).
* **Transversal** — recorte por **regra/propriedade/condição** que cruza entidades.
  *Exs.*: *Capitais em Rios* (Geografia), *Países sem Litoral* (Geografia), *Montanhas acima de 7.000 m* (Geografia).

---

## 3) Nomenclatura e metadados

* **Título curto** e claro.
* **`microsubtema_clean`**: minúsculas, **`_`** como separador, sem acentos (ex.: `capitais_em_rios`).
* Coloque o microsubtema no diretório correspondente **`microsubtemas_<tema_clean>_<subtema_clean>.md`**.

---

## 4) Estrutura padrão do documento de microsubtema

Cada microsubtema deve seguir, na ordem:

1. **Cabeçalho**: Título + código `microsubtema_clean`.
2. **Natureza**: *Temático* ou *Transversal*.
3. **Descrição**: objetivo e recorte em 2–4 linhas.
4. **Escopo** (com subtópicos padronizados):

   * **Inclusões (não exaustivo)**: itens elegíveis; pode citar **pessoas, obras, lugares, instituições**. *Atenção:* a lista é **aberta**; **não limita** a criação de perguntas a nomes citados.
   * **Exclusões**: o que fica de fora (p.ex., atualidades efêmeras, especulação, rankings anuais).
   * **Referências (exemplos)**: bases/entradas **prováveis** (preferência: **Wikipedia em inglês**), e **documentos oficiais** aplicáveis. Não precisa ser exaustivo nem incluir URL — são **sugestões** de onde ancorar fatos.
5. **Matriz de variação (eixos)**: parâmetros que fomentam diversidade (tempo, espaço, categorias, métricas, papéis de pessoas, etc.).
6. **Exemplos de enunciados** *(opcional)*: 2–4 **modelos** de itens (Aberta, Múltipla escolha, Verdadeiro/Falso). Os exemplos **não** vinculam o banco a esses nomes; servem apenas como **demonstração de formato**.
7. **Checklist**: validações antes de gerar perguntas.

> **Observação — Segurança Pública / True Crime.** Para microsubtemas sensíveis, aplicar o **Padrão metodológico**: priorizar fontes oficiais e Wikipedia; usar **casos encerrados** e informações **documentadas**; excluir especulações e detalhes mórbidos; redação **neutra e auditável**.

---

## 5) Exemplos (modelos completos)

> Os exemplos abaixo **incluem “Referências (exemplos)” no Escopo** e deixam explícito que **as listas são não exaustivas**.

### A) Serial Killers — `serial_killers`

**Natureza.** Temático
**Descrição.** Pessoas ligadas a casos seriais notórios, com ênfase em autores, vítimas, investigadores, promotores e **marcos processuais documentados**.

**Escopo**

* **Inclusões (não exaustivo)**: autores (p.ex., Jeffrey Dahmer, Ted Bundy, John Wayne Gacy, Dennis Rader, Harold Shipman, Andrei Chikatilo, Aileen Wuornos, **Francisco de Assis Pereira**), casos históricos de autoria desconhecida (p.ex., *Jack the Ripper*), **investigadores** (p.ex., Frederick Abberline), promotores, juízes e **peritos** associados.
* **Exclusões**: especulações sobre autoria/culpa; detalhes gráficos; informações de vítimas menores; casos **em andamento**.
* **Referências (exemplos)**: Wikipedia (EN): *Jack the Ripper*, *Jeffrey Dahmer*, *Ted Bundy*, *John Wayne Gacy*; Wikipedia (PT): *Maníaco do Parque*; acórdãos/sentenças criminais; relatórios de procuradorias/forças policiais.

**Matriz de variação (eixos)**: pessoa→papel (autor/vítima/investigador) | caso→época/lugar | decisão→pena | status→resolvido/identidade desconhecida.

**Checklist**: fatos estáveis; fonte verificável; nada de especulação; linguagem neutra; **no máximo 5 perguntas por indivíduo/caso**.

---

### B) Facções Criminosas Brasileiras — `faccoes_criminosas_brasileiras`

**Natureza.** Temático
**Descrição.** Pessoas e organizações criminosas brasileiras, com foco em **lideranças/fundadores**, decisões judiciais e **marcos institucionais documentados** (formação, presídios, eventos históricos).

**Escopo**

* **Inclusões (não exaustivo)**: organizações (PCC, Comando Vermelho, Terceiro Comando Puro, Amigos dos Amigos, Família do Norte, Guardiões do Estado, Bonde dos 40, Primeiro Grupo Catarinense, Os Manos), lideranças/alcunhas (Marcola, Fernandinho Beira-Mar, Marcinho VP, Elias Maluco, Nem da Rocinha, Rogério 157, William da Silva Lima, Rogério Lemgruber, Fuminho, André do Rap, Gegê do Mangue), **instituições/eventos documentados** (p.ex., **Massacre do Carandiru (1992)**; sistemas prisionais estaduais).
* **Exclusões**: endereços/contatos; táticas operacionais; especulação sobre cadeias de comando; casos **em andamento**.
* **Referências (exemplos)**: Wikipedia (EN/PT): *Primeiro Comando da Capital*, *Comando Vermelho*; páginas de líderes notórios; relatórios do MJSP; decisões de tribunais; relatórios de Defensorias/MP; CPIs relevantes.

**Matriz de variação (eixos)**: pessoa→organização | organização→origem/ano | decisão→efeito | região→facção | instituição/evento→impacto/documentação.

**Checklist**: fatos estáveis, documentos citáveis, redação neutra, **no máximo 5 perguntas por indivíduo/facção**.

---

### C) Futebol Brasileiro — `futebol_brasileiro`

**Natureza.** Temático
**Descrição.** Clubes, competições, estádios, regulamentos e marcos históricos do futebol no Brasil.

**Escopo**

* **Inclusões (não exaustivo)**: Campeonatos (Brasileirão, Copa do Brasil), federações (CBF), estádios (Maracanã, Mineirão), clubes históricos, artilharias **históricas** (análogos estáveis), **jogadores, treinadores, narradores e árbitros** (pessoas relevantes ao futebol brasileiro), dirigentes com passagens marcantes, regras **estáveis** do jogo.
* **Exclusões**: tabelas **de temporada**; transferências recentes; notícias efêmeras; estatísticas “do ano”.
* **Referências (exemplos)**: Wikipedia (EN): *Campeonato Brasileiro Série A*, *Copa do Brasil*; Wikipedia de clubes; site oficial **CBF**; regulamentos permanentes.

**Matriz de variação (eixos)**: competição→era | clube→título/estádio | regra→aplicação | técnico→campanha histórica.

**Checklist**: foco em marcos clássicos; evitar atualidades; 2+ referências quando possível.

---

### D) Dragon Ball — `dragon_ball`

**Natureza.** Temático
**Descrição.** Obra, personagens, transformações, arcos narrativos e publicações da franquia *Dragon Ball*.

**Escopo**

* **Inclusões (não exaustivo)**: autor (Akira Toriyama), linhas de publicação (mangá/anime), sagas, personagens principais/antagonistas, obras derivadas **canônicas**.
* **Exclusões**: rumores; materiais **não canônicos** sem respaldo editorial; cronologias fanmade.
* **Referências (exemplos)**: Wikipedia (EN): *Dragon Ball*, *Akira Toriyama*, *List of Dragon Ball characters*; sites oficiais da Shueisha/Toei para canonicidade.

**Matriz de variação (eixos)**: saga→evento | personagem→arco | publicação→data/formato.

**Checklist**: checar canonicidade; evitar boatos; priorizar publicações oficiais.

---

### E) Roma Republicana — `roma_republicana`

**Natureza.** Temático
**Descrição.** Instituições, conflitos, personalidades e reformas da **República Romana** (c. 509–27 a.C.).

**Escopo**

* **Inclusões (não exaustivo)**: guerras púnicas, magistraturas (cônsules, tribunos), reformas (Gracos, Mário, Sula), figuras (Cícero, Júlio César), direito e cidadania.
* **Exclusões**: Império Romano **posterior** (salvo transição), mitologia **não histórica**.
* **Referências (exemplos)**: Wikipedia (EN): *Roman Republic*, *Punic Wars*, *Gaius Marius*, *Lucius Cornelius Sulla*; *Julius Caesar*; corpora epigráficos e textos clássicos com edição crítica.

**Matriz de variação (eixos)**: instituição→função | guerra→frente | personagem→reforma.

**Checklist**: distinguir República vs. Império; citar datas aproximadas aceitas.

---

### F) Terópodes (Dinossauros) — `teropodes`

**Natureza.** Temático
**Descrição.** Clado Theropoda: anatomia, filogenia, paleoecologia e registros fósseis clássicos.

**Escopo**

* **Inclusões (não exaustivo)**: táxons (Tyrannosaurus, Velociraptor, Allosaurus), evidências (pegadas, ovos, penas), depósitos fossilíferos notáveis.
* **Exclusões**: pterossauros e plesiossauros (não são dinossauros); especulações sem respaldo.
* **Referências (exemplos)**: Wikipedia (EN): *Theropoda*, *Tyrannosaurus*, *Velociraptor*; *Paleobiology Database*; museus/coleções com catálogos públicos.

**Matriz de variação (eixos)**: período geológico | táxon→características | sítio→formação.

**Checklist**: usar diagnósticos aceitos; evitar hipóteses marginais.

---

### G) Capitais em Rios — `capitais_em_rios`

**Natureza.** Transversal
**Descrição.** Capitais nacionais/localizadas **à beira de rios** ou cortadas por cursos fluviais significativos.

**Escopo**

* **Inclusões (não exaustivo)**: capitais e seus rios (p.ex., Cairo–Nilo; Londres–Tâmisa; Budapeste–Danúbio; Brasília–Paranoá **não elegível** por ser lago artificial).
* **Exclusões**: capitais apenas litorâneas sem rio expressivo; corpos **artificiais** (canais/represas) quando descaracterizam o critério.
* **Referências (exemplos)**: Wikipedia (EN): *List of national capitals*, páginas de cada capital, páginas dos rios correspondentes; anuários geográficos oficiais.

**Matriz de variação (eixos)**: continente | bacia hidrográfica | papel do rio (transporte, história, fronteira).

**Checklist**: validar se o curso é natural e relevante.

---

### H) Países sem Litoral — `paises_sem_litoral`

**Natureza.** Transversal
**Descrição.** Estados soberanos **sem acesso direto ao mar** (landlocked) e suas características geopolíticas/geográficas.

**Escopo**

* **Inclusões (não exaustivo)**: lista de países landlocked (p.ex., Bolívia\*, Paraguai, Níger, Laos, Suíça), enclaves/dobramente landlocked, acordos de livre trânsito.
* **Exclusões**: territórios dependentes; dúvidas de reconhecimento **não pacificadas**.
* **Referências (exemplos)**: Wikipedia (EN): *Landlocked country* e páginas dos países; ONU (estatísticas geográficas); bancos de dados regionais.

**Matriz de variação (eixos)**: continente | regime de trânsito | vizinhança marítima mais próxima.

**Checklist**: checar status estatal e fronteiras reconhecidas.

---

## 6) Checklist geral (antes de gerar perguntas)

* [ ] O recorte permite ≥ 80 perguntas estáveis e variadas.
* [ ] **Escopo com Inclusões/Exclusões explícitas** e nota de **não exaustividade**.
* [ ] **Referências (exemplos)** listadas (Wikipedia-EN preferencial, + documentos oficiais quando cabível).
* [ ] **Matriz de variação** define eixos claros para diversidade.
* [ ] Sem sobreposição indevida com outros microsubtemas (ou com exclusões bem definidas).
* [ ] Evita atualidades efêmeras e dados sazonais.
* [ ] Para temas sensíveis (True Crime/Segurança), aplica o **Padrão metodológico**.

> **Lembrete final**: As listas em **Escopo** são **não exaustivas**. Você **pode usar** outras pessoas, obras, lugares e fatos **não listados**, desde que **coerentes** com o recorte e **bem referenciados**.
