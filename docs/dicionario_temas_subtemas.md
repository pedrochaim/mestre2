# Dicionário de Temas e Subtemas

Este documento contém uma lista de temas e seus respectivos subtemas. Cada tema é uma categoria ampla, enquanto os subtemas são tópicos mais específicos dentro dessa categoria.

Cada `<subtema>` é organizado em subcategorias, cada uma um `<microsubtema>`. O detalhamento dos microsubtemas é fornecido no momento do prompt para geração de perguntas.

Os valores `<tema>` e `<subtema>` são campos nos arquivos de formato JSON (detalhado no documento `./docs/pergunta.schema.json`) que são utilizados para armazenar perguntas e respostas.

As perguntas serão inicialmente organizadas em arquivos por `<microsubtema>`, depois os arquivos concatenados em arquivos JSON por `<subtema>`, e então finalmente em um único arquivo JSON por `<tema>`.

`<tema_clean>` é o nome do tema sem espaços, acentos ou caracteres especiais, utilizado para nomear os arquivos JSON.

`<subtema_clean>` é o nome do subtema sem espaços, acentos ou caracteres especiais, utilizado para nomear os arquivos JSON.

A nomenclatura dos arquivos será no formato `<tema_clean>_<subtema_clean>.json`, onde `<tema_clean>` e `<subtema_clean>` são é o nome do tema e subtema sem espaços, acentos ou caracteres especiais, utilizado para nomear os arquivos JSON.

**Estrutura do Documento:**

* Cada `<tema>` é seguido por uma breve descrição com no máximo 300 palavras.
* Então é enumerado cada `<subtema>` relacionado a esse `<tema>`.
* Um exemplo de JSON é fornecido para cada `<subtema>`, com o formato:

```json
{
  "tema": "<tema>",
  "tema_clean": "<tema_clean>",
  "subtema": "<subtema>",
  "subtema_clean": "<subtema_clean>"
}
```

* Então inclui uma breve descrição de cada `<subtema>`.

## Tema: Geografia

A geografia é a ciência que estuda a superfície terrestre, suas características físicas, humanas e as interações entre elas. Ela abrange desde o estudo de formações naturais como montanhas, rios e climas, até a análise de como as sociedades humanas se organizam e interagem com o meio ambiente. A geografia é fundamental para entender questões como urbanização, migrações, uso dos recursos naturais e mudanças climáticas.

### Subtema: Países, Capitais e Cidades Notáveis

Exemplo JSON:

```json
{
  "tema": "Geografia",
  "subtema": "Países, Capitais e Cidades Notáveis",
  "subtema_clean": "paises_capitais_e_cidades_notaveis"
}
```

Este subtema abrange o estudo de países ao redor do mundo, suas capitais e cidades notáveis. Inclui informações sobre localização geográfica, características culturais, econômicas e políticas de cada país, bem como dados sobre as principais cidades que se destacam por sua importância histórica, econômica ou cultural. Inclui curiosidades e fatos interessantes sobre esses lugares, como monumentos famosos, tradições locais e eventos históricos significativos.

### Subtema: Maravilhas Naturais

Exemplo JSON:

```json
{
  "tema": "Geografia",
  "subtema": "Maravilhas Naturais",
  "subtema_clean": "maravilhas_naturais"
}
```

Este subtema explora as maravilhas naturais do mundo, incluindo formações geológicas impressionantes, ecossistemas únicos e fenômenos naturais extraordinários. Abrange desde montanhas majestosas, como o Everest, até florestas tropicais exuberantes, como a Amazônia. Também inclui rios famosos, como o Nilo e o Amazonas, e desertos icônicos, como o Saara.

### Subtema: Geopolítica

Exemplo JSON:

```json
{
  "tema": "Geografia",
  "subtema": "Geopolítica",
  "subtema_clean": "geopolitica"
}
```

A geopolítica é o estudo das relações entre geografia e política, analisando como a localização geográfica de países e regiões influencia suas políticas externas, conflitos e alianças. Este subtema abrange tópicos como disputas territoriais, zonas de influência, recursos naturais estratégicos e a importância de rotas comerciais. Inclui também a análise de blocos econômicos, como a União Europeia e o Mercosul, e como as características geográficas moldam as dinâmicas de poder global.

### Subtema: Economia Regional

Exemplo JSON:

```json
{
  "tema": "Geografia",
  "subtema": "Economia Regional",
  "subtema_clean": "economia_regional"
}
```

A economia regional estuda as características econômicas de diferentes regiões do mundo, analisando como fatores geográficos, culturais e históricos influenciam o desenvolvimento econômico local. Este subtema inclui a análise de setores econômicos predominantes, como agricultura, indústria e serviços, bem como a distribuição de recursos naturais e a infraestrutura de transporte. Também abrange questões como desigualdade econômica entre regiões, políticas de desenvolvimento regional e impactos ambientais das atividades econômicas.

### Subtema: Vegetação e Biomas

Exemplo JSON:

```json
{
  "tema": "Geografia",
  "subtema": "Vegetação e Biomas",
  "subtema_clean": "vegetacao_e_biomas"
}
```

Este subtema examina a diversidade de vegetação terrestre e biomas do planeta — florestas tropicais e temperadas, taiga, savanas, estepes, pradarias, desertos, chaparral/mediterrâneo e tundra — excluindo ecossistemas marinhos. Cada bioma combina clima (temperatura, precipitação, sazonalidade), solo (fertilidade, drenagem), relevo/altitude e regimes de fogo, moldando fisionomias vegetais e endemismos. Aborda espécies dominantes, zonas de transição (ecótonos) e serviços ecossistêmicos. Permite perguntas sobre localização global, fatores limitantes, adaptações, pressões humanas (desmatamento, fragmentação) e conservação (e.g., hotspots, áreas protegidas), incluindo comparações entre continentes e dentro de países.

### Subtema: Oceanos e Mares

Exemplo JSON:

```json
{
  "tema": "Geografia",
  "subtema": "Oceanos e Mares",
  "subtema_clean": "oceanos_e_mares"
}
```

Os oceanos e mares são vastas extensões de água salgada que cobrem cerca de 71% da superfície da Terra. Este subtema abrange a geografia dos oceanos, suas correntes, marés e ecossistemas marinhos. Inclui o estudo das zonas oceânicas, como a zona pelágica, batial e abissal, bem como a importância dos oceanos para o clima global, biodiversidade e economia. Também aborda questões como poluição marinha, pesca sustentável e conservação dos habitats marinhos.

### Subtema: Relevo e Formações Geológicas

Exemplo JSON:

```json
{
  "tema": "Geografia",
  "subtema": "Relevo e Formações Geológicas",
  "subtema_clean": "relevo_e_formacoes_geologicas"
}
```

O relevo terrestre é a configuração da superfície da Terra, incluindo montanhas, vales, planícies e outras formações geológicas. Este subtema explora os processos que moldam o relevo, como tectônica de placas, erosão e sedimentação. Inclui o estudo de cadeias montanhosas, como os Andes e o Himalaia, bem como formações geológicas únicas, como cânions, cavernas e vulcões.

### Subtema: Hidrografia Continental

Exemplo JSON:

```json
{
  "tema": "Geografia",
  "subtema": "Hidrografia Continental",
  "subtema_clean": "hidrografia_continental"
}
```

A hidrografia continental estuda as águas doces presentes na superfície terrestre, incluindo rios, lagos, aquíferos e geleiras. Este subtema abrange a análise dos principais sistemas fluviais, como o Amazonas, Nilo e Yangtze, bem como a importância dos lagos e reservatórios para o abastecimento de água e ecossistemas locais. Inclui também o estudo das bacias hidrográficas, drenagem e os impactos das atividades humanas, como poluição e desmatamento, sobre os recursos hídricos.

### Subtema: Clima

```json
{
  "tema": "Geografia",
  "subtema": "Clima",
  "subtema_clean": "clima"
}
```

Este subtema aborda os padrões climáticos de longo prazo da Terra, seus controles e classificações, em diferentes escalas (global, regional e local/microclimas). Cobre elementos do clima (temperatura, precipitação, radiação, pressão, ventos e umidade) e os fatores que os modulam: latitude, altitude, relevo, continentalidade, correntes oceânicas, cobertura vegetal e uso do solo. Inclui a circulação geral da atmosfera (células de Hadley/Ferrel/Polar, jatos, alísios e o escoamento de oeste), zonas de convergência (ITCZ) e regimes climáticos como monções. Contempla teleconexões e variabilidade natural (ENSO/El Niño–Oscilação Sul, NAO, PDO) e seus efeitos climáticos típicos. Abrange climas zonais (tropical, árido, temperado, continental, polar, de montanha) e conceitos como normais climatológicas (médias de 30 anos). Também inclui extremos climáticos (ondas de calor/frio, secas) como manifestações estatísticas do clima, não como eventos do dia.
Exclusões: previsão do tempo e boletins em tempo real; estatísticas conjunturais do “ano atual”; cobertura marinha detalhada própria de “Oceanos e Mares”; debates opinativos sobre políticas. Foco em fatos estáveis e definições aceitas.

## Tema: História Natural

A história natural é o estudo das origens e desenvolvimento da vida na Terra, abrangendo desde os primeiros organismos unicelulares até a diversidade atual de espécies. Ela inclui a paleontologia, que estuda fósseis e a evolução das espécies, bem como a ecologia, que analisa as interações entre organismos e seus ambientes. No nosso escopo, História Natural engobla também a interação entre seres vivos hoje, como ecologia, ecossistemas, taxonomia, etc. Incluir subtemas que interessariam uma pessoa que assiste documentários sobre natureza. Evitar sobreposição de assuntos com o tema Ciências.

### Subtema: Dinossauros

Exemplo JSON:

```json
{
  "tema": "História Natural",
  "tema_clean": "historia-natural",
  "subtema": "Dinossauros",
  "subtema_clean": "dinossauros"
}
```

Este subtema foca nos dinossauros do Mesozoico (Triássico, Jurássico e Cretáceo): origens, diversificação, anatomia, locomoção, dieta, crescimento e comportamento. Usa evidências do registro fóssil — ossos, dentes, pegadas, ovos, ninhos e impressões de pele/penas — para reconstruir paleoecologia, interações tróficas e adaptações. Aborda a relação com aves (terópodes), contextos paleoambientais e o evento de extinção do fim do Cretáceo (K–Pg). Distingue dinossauros de outros répteis contemporâneos (pterossauros, plesiossauros etc.). Gera perguntas factuais sobre cronologia, grupos, características diagnósticas e ambientes, sem detalhar técnicas laboratoriais.

---

### Subtema: Ecossistemas e Biodiversidade: Animais

Exemplo JSON:

```json
{
  "tema": "História Natural",
  "tema_clean": "historia-natural",
  "subtema": "Ecossistemas e Biodiversidade: Animais",
  "subtema_clean": "ecossistemas_e_biodiversidade_animais"
}
```

Este subtema foca exclusivamente nos **animais** e suas interações ecológicas. Abrange diversidade taxonômica em diferentes biomas, papéis tróficos (predadores, herbívoros, detritívoros), estratégias de sobrevivência (camuflagem, mimetismo, venenos), reprodução e cuidado parental, **comportamento** (território, comunicação, cooperação), migrações e espécies-chave que estruturam comunidades. Explora **relações entre espécies** — predação, competição, mutualismo, parasitismo — e como alterações de habitat influenciam populações e redes alimentares. Não inclui fisiologia molecular nem biologia humana. Gera perguntas factuais sobre distribuições, adaptações, ciclos de vida e interdependências faunísticas, comparando grupos e ambientes sem cobrir plantas ou fungos.

### Subtema: Ecossistemas e Biodiversidade: Plantas e Fungos

Exemplo JSON:

```json
{
  "tema": "História Natural",
  "tema_clean": "historia-natural",
  "subtema": "Ecossistemas e Biodiversidade: Plantas e Fungos",
  "subtema_clean": "ecossistemas_e_biodiversidade_plantas_e_fungos"
}
```

Este subtema trata exclusivamente de **plantas e fungos**. Enfatiza a base produtiva dos ecossistemas (fotossíntese, produtividade primária), **adaptações vegetais** a clima e solo (xeromorfia, epifitismo, carnívoras), reprodução por flores, sementes e esporos, **polinização** e **dispersão**. Para fungos, destaca decomposição, ciclos de nutrientes, **micorrizas** e líquens como engenheiros de habitat. Aborda sucessão ecológica, espécies dominantes e formas de vida (árvores, arbustos, gramíneas, musgos, cogumelos). Não cobre animais, genética molecular nem biologia humana. Gera perguntas objetivas sobre identificação de formações, funções ecológicas, relações planta–fungo e padrões de distribuição, complementando o subtema de Animais sem sobreposição.

### Subtema: Antropologia e Evolução Humana

Exemplo JSON:

```json
{
  "tema": "História Natural",
  "tema_clean": "historia-natural",
  "subtema": "Antropologia e Evolução Humana",
  "subtema_clean": "antropologia_e_evolucao_humana"
}
```

Este subtema investiga a origem e o desenvolvimento da nossa espécie, do aparecimento dos primeiros hominínios às populações humanas modernas. O foco recai sobre o registro fóssil, sítios arqueológicos, ferramentas de pedra, fogo, arte, adornos e vestígios de moradia, que ajudam a reconstruir dieta, mobilidade, divisão de tarefas, cooperação e linguagem emergente. Aborda grandes etapas: bipedalismo, expansão do cérebro, fabricação de instrumentos, dispersões “para fora da África”, convivência e cruzamentos com outros humanos antigos e a ocupação de ambientes extremos. Considera também modos de vida de caçadores-coletores, rotas migratórias, domesticação inicial de plantas e animais e mudanças culturais que acompanham climas variáveis. Não entra em genética molecular, medicina ou fisiologia detalhada (para evitar sobreposição com Ciências). Dá ênfase a perguntas factuais e comparativas sobre cronologias, culturas materiais, tecnologias líticas, paleodietas, arte rupestre e contatos entre grupos, sempre com base em evidências datáveis e bem documentadas, em diversas regiões do mundo.

### Subtema: Terra Primitiva e Formação do Planeta

Exemplo JSON:

```json
{
  "tema": "História Natural",
  "subtema": "Terra Primitiva e Formação do Planeta",
  "subtema_clean": "terra_primitiva_e_formacao_do_planeta"
}
```

Este subtema apresenta como a Terra se formou e como passou de um mundo incandescente a um ambiente com água líquida e atmosfera capazes de sustentar a vida. Explica a origem do Sol e dos planetas em linhas gerais, a junção de materiais que deram corpo ao nosso planeta e a separação entre núcleo, rochas e oceanos. Aborda calor interno, vulcões e o movimento lento das placas que levantam cadeias de montanhas e abrem vales. Descreve a formação do ar primitivo e dos primeiros mares, as fontes de água e de energia da superfície, e o papel de impactos de cometas e asteroides. Discute cenários para o aparecimento de moléculas simples que, ao longo do tempo, deram origem aos primeiros microrganismos. Não entra em química ou astronomia avançadas nem em biologia humana; o foco é contar a sequência de eventos que preparou o planeta para a vida.

### Subtema: Formação do Universo

Exemplo JSON:

```json
{
  "tema": "História Natural",
  "subtema": "Formação do Universo",
  "subtema_clean": "formacao_do_universo"
}
```

Este subtema apresenta, em linguagem acessível, como o universo surgiu e se organizou ao longo do tempo, do início quente e denso (Big Bang) ao aparecimento de estrelas, galáxias e sistemas planetários. Explica a expansão e o resfriamento do cosmos, a “luz antiga” registrada como radiação cósmica de fundo e a formação dos primeiros elementos leves. Mostra como as primeiras estrelas acenderam, como explosões estelares reciclaram matéria e produziram elementos mais pesados, e como nuvens de gás e poeira formaram discos que deram origem a planetas. Aborda a diversidade de galáxias, o papel de buracos negros massivos em seus centros e a evolução de estruturas em grande escala. Conecta a história cósmica à História Natural ao destacar quando e onde surgem os ingredientes necessários à vida. Evita matemática e física avançadas; privilegia marcos cronológicos claros e evidências observáveis. Não trata de biologia humana.

### Subtema: Ambientes Extremos e Vida

Exemplo JSON:

```json
{
  "tema": "História Natural",
  "subtema": "Ambientes Extremos e Vida",
  "subtema_clean": "ambientes_extremos_e_vida"
}
```

Como a vida consegue existir em lugares “impossíveis”? Este subtema explora organismos e comunidades que vivem sob calor ou frio intensos, grande pressão, falta de luz, pouca água, muita salinidade ou acidez. Aborda fontes do fundo do mar, desertos hiperáridos, geleiras, cavernas, lagos salgados e topos de montanhas. O foco está em exemplos, locais e relações ecológicas — sem entrar em química ou genética avançadas, e sem biologia humana. Ideal para perguntas factuais sobre onde esses ambientes ocorrem, que tipos de seres os habitam e que estratégias gerais permitem sobreviver ali.

### Subtema: Biologia Animal

Exemplo JSON:

```json
{
  "tema": "História Natural",
  "subtema": "Biologia Animal",
  "subtema_clean": "biologia_animal"
}
```

Este subtema apresenta a diversidade de formas corporais e funções dos animais, do simples ao complexo. Cobre planos corporais, simetria, tecidos, cavidades e esqueleto (hidrostático, externo, interno); alimentação e digestão; trocas gasosas (cutânea, branquial, traqueal, pulmonar); circulação (aberta/fechada), excreção e osmorregulação; reprodução (assexual/sexual, ovíparos/vivíparos) e desenvolvimento (metamorfose, padrões de segmentação). Aborda grandes grupos (poríferos, cnidários, moluscos, anelídeos, artrópodes, equinodermos, cordados) por características diagnósticas simples e exemplos clássicos. Trata de estratégias gerais de proteção e locomoção (conchas, espinhos, nado, voo, escavação) e de como a temperatura corporal é regulada (ectotermia/endotermia), sem entrar em fisiologia molecular. Não inclui comportamento, ecologia ou evolução humana. Visa perguntas diretas sobre “quem tem o quê” (órgãos, tecidos, tipo de simetria), “como funciona” (respira, circula, se reproduz) e “quando surgiu” em linhas evolutivas amplas, com traços fáceis de observar e comparar. Evita perguntas sobre seres humanos.

### Subtema: Biologia Vegetal

Exemplo JSON:

```json
{
  "tema": "História Natural",
  "subtema": "Biologia Vegetal",
  "subtema_clean": "biologia_vegetal"
}
```

Este subtema apresenta como as plantas são construídas e funcionam, da briófita à árvore. Cobre órgãos e tecidos (raiz, caule, folha; xilema e floema) e suas funções; formas de reprodução (esporos, sementes; flores e frutos) e ciclos de vida (alternância de gerações). Distingue grupos principais — briófitas, pteridófitas, gimnospermas e angiospermas — por traços simples e exemplos conhecidos. Inclui adaptações morfológicas a luz, água e solo (cutículas espessas, folhas reduzidas, suculência, epifitismo, lianas, plantas carnívoras) e estruturas de suporte e condução. Trata de crescimento (meristemas, anéis de crescimento), dispersão de pólen e sementes em linguagem leiga e sem biologia molecular. Não aborda ecologia de comunidades nem evolução humana. Visa perguntas factuais sobre identificação de grupos, partes e funções, tipos de sementes e frutos, formas de reprodução e marcos evolutivos gerais que permitiram a conquista de ambientes terrestres.

## Tema: Variedades

**Variedades** reúne tópicos amplos e atemporais que não se encaixam diretamente em outras áreas. Abrange cultura, lazer, hobbies, culinária, moda, crenças, idiomas e costumes, priorizando fatos estáveis e verificáveis. Diferencia-se de **Cotidiano** por evitar atualidades efêmeras: aqui o foco está em tradições consolidadas, conceitos duradouros e práticas culturais reconhecidas. As perguntas devem ser neutras, factuais e auditáveis (preferindo enciclopédias e obras de referência), com atenção à diversidade regional e à clareza terminológica. Quando houver fronteira com Artes/História/Esportes, trate o assunto pelo ângulo cultural e social (não estético, historiográfico ou competitivo). Evite modismos sazonais, números “do ano” e controvérsias sem consenso acadêmico. Valorize definições, origens, finalidades, rituais, nomenclatura, relações entre categorias e contextos de uso.

### Subtema: Folclore

Exemplo JSON:

```json
{
  "tema": "Variedades",
  "tema_clean": "variedades",
  "subtema": "Folclore",
  "subtema_clean": "folclore"
}
```

Abrange lendas, mitos, contos, provérbios, festas e personagens que expressam a memória cultural de povos e regiões. Inclui narrativas de origem, heróis culturais, seres fantásticos, folguedos, cantigas. Valoriza variantes regionais e registros consagrados (coletas etnográficas, enciclopédias, museus). Foque em nomes, lugares, motivos recorrentes e traços distintivos; esclareça quando houver múltiplas versões. Evite datas móveis “do ano” e versões controversas sem fonte canônica.

### Subtema: Mitologia

Exemplo JSON:

```json
{
  "tema": "Variedades",
  "tema_clean": "variedades",
  "subtema": "Mitologia",
  "subtema_clean": "mitologia"
}
```

A **Mitologia** estuda os grandes ciclos narrativos de povos e civilizações — deuses, deusas, heróis, monstros, cosmogonias e teogonias — bem como seus símbolos e funções (origem do mundo, legitimidade de reis, ética, natureza e destino). Abrange, entre outras, as tradições **grega**, **egípcia**, **nórdica**, **chinesa**, **japonesa**, **mesoamericana** (maia, asteca) e **mesopotâmica**, priorizando fontes clássicas e compêndios (p. ex., *Teogonia* de Hesíodo, *Eddas*, *Kojiki*, *Popol Vuh*).
**Diferença para Religiões:** aqui o foco não é doutrina, culto, liturgia ou prática de fé contemporânea, mas as **narrativas** e personagens canônicos em perspectiva histórico-cultural. Questões sobre dogmas, ritos, instituições religiosas vivas e suas correntes pertencem ao subtema **Religiões**.
**Diferença para Folclore:** enquanto *Folclore* cobre lendas locais, festas, provérbios e seres regionais transmitidos pela tradição popular, *Mitologia* trata de **corpos narrativos clássicos e sistematizados** (panteões, genealogias divinas, épicos), ainda que tenham influenciado tradições folclóricas posteriores.


### Subtema: Religiões

Exemplo JSON:

```json
{
  "tema": "Variedades",
  "tema_clean": "variedades",
  "subtema": "Religiões",
  "subtema_clean": "religioes"
}
```

Panorama neutro e descritivo de crenças, práticas, calendários, textos sagrados, autoridades, templos e correntes internas. Abrange tradições abraâmicas, dhármicas, religiosidades indígenas e novos movimentos. Priorize terminologia reconhecida, datas de fundação, locais de culto, rituais marcantes e passagens canônicas, evitando proselitismo e polêmica conjuntural. Diferencie doutrina, prática e organização; indique nomes originais (língua e transliteração) quando pertinente.

### Subtema: Idiomas

Exemplo JSON:

```json
{
  "tema": "Variedades",
  "tema_clean": "variedades",
  "subtema": "Idiomas",
  "subtema_clean": "idiomas"
}
```

Cobre famílias linguísticas, sistemas de escrita (alfabeto, abjad, abugida), línguas oficiais, dialetos, topônimos e expressões idiomáticas. Inclui contato linguístico, empréstimos e etimologias consolidadas. Prefira fatos estáveis (classificações, estatuto oficial, escrita), evitando cifras anuais de falantes. Traduções de palavras/frases curtas são permitidas quando sustentadas por fonte enciclopédica.

### Subtema: Costumes

Exemplo JSON:

```json
{
  "tema": "Variedades",
  "tema_clean": "variedades",
  "subtema": "Costumes",
  "subtema_clean": "costumes"
}
```

Hábitos culturais, etiqueta, ritos de passagem e festas que estruturam a vida social (saudações, presentes, mesa, vestimentas tradicionais, casamentos, funerais). Contextualize variações regionais, significados de gestos e cores, tabus e calendários festivos. Evite modismos; privilegie práticas consolidadas com referência etnográfica ou enciclopédica.

### Subtema: Culinária

Exemplo JSON:

```json
{
  "tema": "Variedades",
  "tema_clean": "variedades",
  "subtema": "Culinária",
  "subtema_clean": "culinaria"
}
```

Arte e prática de ingredientes, técnicas e pratos em tradições regionais e nacionais. Inclui métodos (assar, brasear, curar), utensílios clássicos, preparações-base, denominações protegidas e contextos festivos. Use nomes consagrados, origens reconhecidas e distinções claras entre pratos similares; evite dietas da moda e alegações nutricionais controversas.

### Subtema: Teorias da Conspiração

Exemplo JSON:

```json
{
  "tema": "Variedades",
  "tema_clean": "variedades",
  "subtema": "Teorias da Conspiração",
  "subtema_clean": "teorias_da_conspiracao"
}
```

Tratamento descritivo de alegações populares (p.ex., Área 51, “alienígenas do passado”, JFK, 11/9), sempre rotuladas como **alegações**. Mapeie origem, difusão, conteúdo central e refutações reconhecidas, distinguindo fato documentado de especulação. Priorize fontes críticas/enciclopédicas e evite promover desinformação.

### Subtema: Sociedades Secretas

Exemplo JSON:

```json
{
  "tema": "Variedades",
  "tema_clean": "variedades",
  "subtema": "Sociedades Secretas",
  "subtema_clean": "sociedades_secretas"
}
```

Organizações com rituais, símbolos e membros parcialmente reservados (Maçonaria, Illuminati históricos, *Skull and Bones*, Carbonários), tratadas com enfoque histórico-documental. Descreva origem, objetivos, estrutura, símbolos, influências e confusões comuns com teorias especulativas. Diferencie documentação primária de mito popular.

## Tema: Artes

**Artes** cobre criações visuais, sonoras, literárias e cênicas, com foco em obras, autores, técnicas, estilos, períodos e instituições. Priorize dados estáveis (datas, escolas, materiais, formas), títulos originais e termos consagrados. Evite juízos de valor e métricas voláteis; destaque contexto histórico e circulação (patrimônio, coleções, edições, montagens). Diferencie áreas afins (História trata processos; Entretenimento cobre indústria e mercado). Use classificações reconhecidas (movimentos, gêneros, tipologias) e descreva funções, materiais e técnicas sem aprofundar teoria estética.

### Subtema: Arquitetura

```json
{
  "tema": "Artes",
  "tema_clean": "artes",
  "subtema": "Arquitetura",
  "subtema_clean": "arquitetura"
}
```

Estuda projetos e construções no tempo: estilos, técnicas, materiais, sistemas estruturais e funções. Considera períodos (antiga, medieval, renascentista, barroca, neoclássica, moderna e contemporânea) e escolas regionais. Mapeia tipologias (templos, catedrais, mesquitas, palácios, teatros, pontes, habitação), elementos (colunas e ordens, arco, abóbada, cúpula), urbanismo (praças, eixos, traçados) e instituições (ateliês, academias, patrimônios). Valoriza datas de projeto/inauguração, autoria coletiva ou de mestres, técnicas (alvenaria, concreto armado, aço, vidro), restauração e conservação. Diferencia arquitetura vernácula da erudita, obras originais de reconstruções e ampliações. Evita julgamentos estéticos, preferindo informações auditáveis: planta, seção, fachada, modulação, escala, materialidade, programa e contexto urbano/territorial. Útil para perguntas sobre identificação de estilos, autoria e cronologia, elementos técnicos e funções de edifícios emblemáticos, além de relações entre forma, técnica e uso.

### Subtema: Música Clássica

```json
{
  "tema": "Artes",
  "tema_clean": "artes",
  "subtema": "Música Clássica",
  "subtema_clean": "musica_classica"
}
```

Abrange tradições eruditas do Ocidente (Medieval a Contemporânea), destacando formas (sinfonia, concerto, sonata, suíte, quarteto), gêneros vocais (ópera, oratório, cantata) e práticas de performance. Considera períodos (Medieval, Renascença, Barroco, Clássico, Romântico, Moderno), sistemas (modalidade, tonalidade, atonalidade) e instrumentação (famílias orquestrais, teclados, vozes). Mapeia autores, obras, datas de composição/estreia, catálogos (BWV, K., Op.), versões e revisões. Inclui instituições (teatros de ópera, orquestras, conservatórios), edições críticas e tratados históricos. Evita rankings, vendagens ou charts; privilegia fontes sobre partituras, manuscritos, libretos e contextos de encomenda. Útil para perguntas sobre identificação de formas, períodos estilísticos, instrumentações típicas, estreia de obras e vínculos entre compositores, escolas e centros musicais, bem como evolução de técnicas de escrita e prática interpretativa.

### Subtema: Pintura

```json
{
  "tema": "Artes",
  "tema_clean": "artes",
  "subtema": "Pintura",
  "subtema_clean": "pintura"
}
```

Estuda imagens bidimensionais em suportes variados (tela, madeira, gesso, papel), técnicas (têmpera, óleo, afresco, aquarela, guache, acrílica, encáustica) e procedimentos (camadas, veladuras, impasto). Considera gêneros (retrato, paisagem, natureza-morta, história), movimentos (Renascimento, Maneirismo, Barroco, Neoclassicismo, Romantismo, Impressionismo, Modernismos, Vanguardas) e escolas regionais. Valoriza autoria, datas, dimensões, coleção (museu, galeria), proveniência e estado de conservação. Distingue esboço, estudo, versão e réplica; registra técnicas diagnósticas (sem detalhamento técnico) e intervenções. Evita avaliações críticas, priorizando dados verificáveis sobre iconografia, composição e materialidade. Útil para perguntas de identificação de obras e autores, contexto de produção, circulação museológica, relações entre movimentos e técnicas, bem como terminologia de ateliê, suportes e pigmentos.

### Subtema: Escultura

```json
{
  "tema": "Artes",
  "tema_clean": "artes",
  "subtema": "Escultura",
  "subtema_clean": "escultura"
}
```

Analisa obras tridimensionais, materiais (mármore, bronze, madeira, terracota, gesso, ferro, aço, resinas) e técnicas (talha, modelagem, fundição em cera perdida, montagem). Mapeia categorias (estátua, busto, alto/baixo-relevo, grupos), escalas (de miniaturas a monumentos públicos) e funções (religiosas, civis, memoriais, decorativas). Considera tradições clássicas e não ocidentais, períodos e escolas, oficinas e patronos. Registra autoria, datas, dimensões, local original, deslocamentos, coleções e restauros. Diferencia original, cópia antiga, fundição posterior e reinterpretações. Evita juízo estético; privilegia informação técnica e histórica verificável. Útil para perguntas sobre identificação de materiais/técnicas, iconografia, proveniência, cronologia e inserção urbana/paisagística, além de relações entre tecnologia, forma e significado.

### Subtema: Literatura

```json
{
  "tema": "Artes",
  "tema_clean": "artes",
  "subtema": "Literatura",
  "subtema_clean": "literatura"
}
```

Cobre produção verbal em prosa e verso, gêneros (épico, lírico, dramático), formas (romance, novela, conto, poesia, ensaio), movimentos e escolas (clássicos, romantismos, realismos, vanguardas). Valoriza autores, obras, datas de publicação, línguas, editoras, edições, traduções e prêmios. Distingue versões, revisões, ciclos narrativos e séries; registra contextos de circulação (periódicos, folhetins, editoras) e recepção histórica. Evita crítica interpretativa; foca dados verificáveis (estrutura, paratextos, dedicatórias, prefácios). Útil para perguntas de autoria, cronologia, gênero, pertença a movimentos e trajetórias editoriais, bem como relações entre obra, contexto cultural e formas de publicação.

### Subtema: Teatro

```json
{
  "tema": "Artes",
  "tema_clean": "artes",
  "subtema": "Teatro",
  "subtema_clean": "teatro"
}
```

Estuda arte cênica: dramaturgia, encenação, atuação, cenografia, figurino, iluminação e música de cena. Considera tradições (tragédia e comédia antigas, teatro medieval, renascentista, neoclássico, realista, épico, simbolista, do absurdo, contemporâneo) e espaços (anfiteatro, palco italiano, arena, rua). Registra autores, peças, datas de estreia, companhias, diretores, teatros, festivais e prêmios. Diferencia texto dramático de montagem; documenta versões, cortes e traduções. Evita resenhas; prioriza dados estáveis sobre repertórios, convenções de cena e história das companhias. Útil para perguntas de identificação de autores/obras, formas cômicas e trágicas, dispositivos cênicos, cronologias e instituições teatrais.

## Tema: Cotidiano

O tema **Cotidiano** abrange eventos, práticas e fenômenos que fazem parte da vida diária das pessoas, com foco em aspectos contemporâneos e atuais. Inclui tópicos como tecnologia, saúde, educação, trabalho, transporte, comunicação, mídia, política e questões sociais. Este tema é ideal para perguntas que exploram como as pessoas vivem, trabalham e interagem no mundo moderno, refletindo mudanças culturais e sociais recentes. O escopo é limitado a eventos e práticas dos últimos 40 anos para garantir relevância temporal.

### Subtema: Bens de Consumo

Exemplo JSON:

```json
{
  "tema": "Cotidiano",
  "tema_clean": "cotidiano",
  "subtema": "Bens de Consumo",
  "subtema_clean": "bens_de_consumo"
}
```

Este subtema explora os produtos e serviços que as pessoas compram e utilizam no dia a dia, abrangendo desde alimentos e roupas até eletrônicos e automóveis. Cobre aspectos como tendências de consumo, marketing, sustentabilidade, impacto ambiental e inovações tecnológicas. Inclui também a análise de hábitos de compra, influências culturais e econômicas, além de questões relacionadas à produção e distribuição de bens. Ideal para perguntas sobre marcas, tipos de produtos, práticas de consumo consciente e mudanças no mercado.

### Subtema: Polêmicas de Celebridades

Exemplo JSON:

```json
{
  "tema": "Cotidiano",
  "tema_clean": "cotidiano",
  "subtema": "Polêmicas de Celebridades",
  "subtema_clean": "polemicas_de_celebridades"
}
```

Este subtema aborda controvérsias e escândalos envolvendo figuras públicas, como atores, músicos, atletas e influenciadores digitais. Cobre eventos que geraram repercussão na mídia, incluindo questões legais, comportamentais, políticas e sociais. Inclui também a análise do impacto dessas polêmicas na carreira das celebridades, na opinião pública e nas redes sociais. Ideal para perguntas sobre incidentes específicos, reações do público, consequências para a imagem das celebridades e o papel da mídia na divulgação dessas histórias. Talvez as fontes não sejam tão confiáveis, mas o tema é popular, expandir o escopo das fontes para sites de fofoca.

### Subtema: Segurança Pública e True Crime

Exemplo JSON:

```json
{
  "tema": "Cotidiano",
  "tema_clean": "cotidiano",
  "subtema": "Segurança Pública e True Crime",
  "subtema_clean": "seguranca_publica_e_true_crime"
}
```

Este subtema investiga questões relacionadas à segurança pública, criminalidade e justiça criminal, com foco em casos reais de crimes que geraram grande repercussão. Cobre tópicos como tipos de crimes, perfis criminais, investigações policiais, sistemas judiciais e medidas de prevenção. Inclui também a análise de fatores sociais, econômicos e culturais que influenciam a criminalidade, bem como o impacto dos crimes na sociedade. Ideal para perguntas sobre casos específicos, estatísticas de criminalidade, políticas de segurança e o papel das instituições na manutenção da ordem pública. Inclui facções criminosas globais, como máfias, cartéis e gangues.

### Subtema: Televisão e Streaming

Exemplo JSON:

```json
{
  "tema": "Cotidiano",
  "tema_clean": "cotidiano",
  "subtema": "Televisão e Streaming",
  "subtema_clean": "televisao_e_streaming"
}
```

Este subtema explora o mundo da televisão e das plataformas de streaming, abrangendo desde a história da TV até as tendências atuais em conteúdo digital. Cobre gêneros televisivos, programas populares, séries originais de streaming, mudanças na forma de consumo de mídia e o impacto dessas plataformas na indústria do entretenimento. Inclui também a análise de audiência, estratégias de marketing e a influência cultural da televisão e do streaming. Ideal para perguntas sobre programas específicos, evolução tecnológica, hábitos de consumo e o futuro da mídia audiovisual.

### Subtema: Premiações

Exemplo JSON:

```json
{
  "tema": "Cotidiano",
  "tema_clean": "cotidiano",
  "subtema": "Premiações",
  "subtema_clean": "premiacoes"
}
```

Este subtema abrange eventos e cerimônias de premiação em diversas áreas, como cinema, música, literatura, esportes e outras formas de arte e entretenimento. Cobre a história e a importância de prêmios renomados, como o Oscar, Grammy, Nobel, entre outros, bem como os critérios de seleção, categorias e vencedores notáveis. Inclui também a análise do impacto dessas premiações na carreira dos indicados e vencedores, além de discussões sobre controvérsias e críticas relacionadas ao processo de escolha. Ideal para perguntas sobre eventos específicos, ganhadores históricos, tendências em premiações e curiosidades sobre as cerimônias.

## Tema: Ciências

O tema **Ciências** reúne os fundamentos e aplicações de Matemática, Física, Química, Biologia Humana, Astronomia e Ciência da Computação, além de áreas aplicadas como Engenharia, Economia, Materiais, Ciências da Terra, Energia e Medicina. Para orientar subtemas, priorize conceitos estáveis, leis e modelos, grandezas e unidades, métodos de medição, instrumentos e histórias de descobertas que expliquem o “como funciona” do mundo natural e tecnológico. Em Matemática, ideias centrais (funções, probabilidade, lógica, grafos, otimização) e sua modelagem. Em Física, movimento e energia, ondas e luz, eletricidade e magnetismo, termodinâmica e materiais. Em Química, tabela periódica e ligações, reações e soluções, polímeros e ligas. Em Biologia Humana, sistemas do corpo, homeostase, diagnóstico por imagem, vacinas e saúde pública (sem fauna/flora). Em Astronomia, observação do céu, sistema solar, estrelas/galáxias, instrumentos e missões. Em Computação, algoritmos e estruturas de dados, complexidade, redes, segurança e IA em nível conceitual. Em aplicações, princípios de engenharia, energia e sustentabilidade, economia e tomada de decisão baseada em dados. Evite sobreposição com História Natural: não tratar ecossistemas, biomas, animais, plantas ou paleontologia; manter foco em processos físicos, químicos, matemáticos, humanos e tecnológicos.

### Subtema: História da Ciência

Exemplo JSON:

```json
{
  "tema": "Ciências",
  "subtema": "História da Ciência",
  "subtema_clean": "historia_da_ciencia"
}
```

A história da ciência investiga como ideias, métodos e instituições científicas se transformaram do mundo antigo à era digital. Mapeia descobertas, teorias e instrumentos — da geometria e astronomia clássicas aos telescópios, microscópios, aceleradores e computadores — e como mudaram maneiras de medir, provar e publicar (acadêmias, revistas, revisão por pares). Aborda momentos-chave como a Revolução Científica, o Iluminismo, a industrialização, a “Big Science” do século XX e a ciência aberta contemporânea, destacando contribuições de diferentes culturas. Examina controvérsias, mudanças de paradigma e o papel de financiamento, guerra, indústria e Estado. Discute impactos sociais, econômicos e éticos de tecnologias (vacinas, eletricidade, nuclear, espaço, informática e IA), bem como educação científica e popularização. Subtema ideal para perguntas sobre quem fez o quê, quando, com que evidências e por que isso importou.

### Subtema: Matemática

Exemplo JSON:

```json
{
  "tema": "Ciências",
  "subtema": "Matemática",
  "subtema_clean": "matematica"
}
```

A Matemática é a ciência dos números, formas e padrões, essencial para descrever e entender o mundo. Este subtema abrange conceitos fundamentais como aritmética, álgebra, geometria, trigonometria, cálculo, estatística, e probabilidade. Inclui história da matemática, desde os antigos babilônios e egípcios até os matemáticos modernos, destacando descobertas e teoremas importantes. Não incluir perguntas envolvendo cálculos numéricos.

### Subtema: Física

Exemplo JSON:

```json
{
  "tema": "Ciências",
  "subtema": "Física",
  "subtema_clean": "fisica"
}
```

A Física é a ciência que estuda as propriedades e interações da matéria e energia. Este subtema abrange conceitos fundamentais como mecânica, termodinâmica, eletromagnetismo, óptica, física moderna (relatividade e mecânica quântica) e astrofísica. Inclui também a história da Física, desde os primeiros filósofos gregos até os avanços tecnológicos contemporâneos. O foco é entender como as leis da natureza governam o comportamento do universo, sem entrar em cálculos complexos.

### Subtema: Química

Exemplo JSON:

```json
{
  "tema": "Ciências",
  "subtema": "Química",
  "subtema_clean": "quimica"
}
```

A Química é a ciência que estuda a composição, estrutura, propriedades e transformações da matéria. Este subtema abrange conceitos fundamentais como átomos, moléculas, reações químicas, estados da matéria, tabela periódica, ligações químicas e estequiometria. Inclui também a história da Química, desde os alquimistas até os avanços modernos em química orgânica e inorgânica. O foco é entender como as substâncias interagem e se transformam, sem entrar em cálculos complexos.

### Subtema: Biologia Humana

Exemplo JSON:

```json
{
  "tema": "Ciências",
  "subtema": "Biologia Humana",
  "subtema_clean": "biologia_humana"
}
```

A Biologia Humana é o estudo dos sistemas biológicos que compõem o corpo humano, incluindo anatomia, fisiologia, genética e desenvolvimento. Este subtema abrange os principais sistemas do corpo, como circulatório, respiratório, digestivo, nervoso, endócrino e imunológico. Inclui também tópicos como homeostase, metabolismo, reprodução e desenvolvimento humano. A história da Biologia Humana é explorada desde os primeiros estudos anatômicos até as descobertas modernas em genética e biotecnologia. O foco é entender como o corpo humano funciona e se adapta ao ambiente, sem entrar em detalhes sobre ecossistemas ou fauna/flora.

### Subtema: Astronomia

Exemplo JSON:

```json
{
  "tema": "Ciências",
  "tema_clean": "ciencias",
  "subtema": "Astronomia",
  "subtema_clean": "astronomia"
}
```

A Astronomia estuda o céu e o universo: fases da Lua, eclipses, estações, o Sistema Solar (planetas, satélites, asteroides, cometas), o Sol como estrela, outras estrelas e seus ciclos, exoplanetas, a Via Láctea e as galáxias, além de fenômenos como nebulosas, supernovas, buracos negros e aglomerados. Aborda como surgem sistemas planetários, como as estrelas nascem, vivem e “morrem”, e como a gravidade organiza escalas do local ao cosmológico. Inclui leis clássicas (Kepler, Newton) em nível conceitual, a luz e o espectro para descobrir composição e movimento, e os instrumentos de observação (telescópios terrestres e espaciais, sondas, radiotelescópios). Valoriza linhas do tempo de descobertas e missões, marcos observacionais e comparações entre objetos. Evita matemática pesada: prioriza definições, classificações, causas e consequências observáveis, gerando subtemas claros e férteis para perguntas factuais.

### Subtema: Ciências da Computação

```json
{
  "tema": "Ciências",
  "tema_clean": "ciencias",
  "subtema": "Ciências da Computação",
  "subtema_clean": "ciencias_da_computacao"
}
```

## Tema: Entretenimento

**Entretenimento** abarca TV, cinema, séries, jogos eletrônicos, anime/mangá, música popular e jogos de mesa/cartas. Priorize dados estáveis (créditos, ano, estúdio, editora, prêmios, formatos) e títulos oficiais, evitando métricas voláteis.

### Subtema: Programas de Televisão

```json
{
  "tema": "Entretenimento",
  "tema_clean": "entretenimento",
  "subtema": "Programas de Televisão",
  "subtema_clean": "programas_de_televisao"
}
```

Abrange gêneros e formatos televisivos (telejornais, variedades, reality, game/talk shows, documentais), com foco em criação, produção e circulação. Considera país de origem, emissoras/redes, licenciamento e adaptações, apresentadores e elencos fixos, datas de estreia, temporadas e reformulações. Explora relação entre formato e grade (diária, semanal, sazonal), papéis de diretores/showrunners/produtoras e diferenças entre conteúdos roteirizados e não roteirizados. Inclui prêmios setoriais, padrões técnicos (classificação indicativa, duração, intervalos), estúdios e locações. Evita audiência semanal e “trend” momentâneo, privilegiando marcos institucionais e mudanças duradouras. Útil para perguntas sobre origem de formatos, versões locais de programas, evolução de quadros, regras de competições e identificação de créditos principais. Quando houver múltiplos títulos em países distintos, prioriza o nome original e a tradução consagrada, registrando também canais de exibição e eventuais mudanças de casa ao longo das temporadas.

### Subtema: Filmes

```json
{
  "tema": "Entretenimento",
  "tema_clean": "entretenimento",
  "subtema": "Filmes",
  "subtema_clean": "filmes"
}
```

Foca obras cinematográficas como produtos culturais e industriais: diretores, roteiristas, elencos, produtores, estúdios, distribuidoras, trilhas, direções de fotografia e de arte. Considera cronologias de lançamento, cortes e versões (cinema, diretor, restaurada), gêneros e subgêneros, franquias e universos compartilhados. Aborda classificação indicativa, formatos de exibição (35 mm, digital, IMAX), idiomas e países de produção. Explora festivais e premiações canônicas (Cannes, Veneza, Berlim, Oscars) e critérios de elegibilidade. Evita bilheterias semanais e recepção volátil, priorizando marcos estáveis, prêmios, datas e créditos oficiais. Útil para perguntas sobre autoria, ordem de trilogias, relação com estúdios/selos, primeiras aparições de personagens, inspirações literárias e técnicas recorrentes. Indica títulos originais e traduções consagradas, distinguindo curtas, longas e animações, e registrando relançamentos e restaurações relevantes.

### Subtema: Séries

```json
{
  "tema": "Entretenimento",
  "tema_clean": "entretenimento",
  "subtema": "Séries",
  "subtema_clean": "series"
}
```

Trata séries para TV e streaming, destacando showrunners, criadores, roteiristas, diretores, elenco, canais e plataformas. Cobre temporadas, número e ordem de episódios, calendários de exibição, hiatos e mudanças de casa. Diferencia minisséries, antologias, sitcoms, dramas, procedurais e animações seriadas, além de spin-offs, reboots e crossovers. Explora bíblia da série, ambientação, trilha de abertura e identidade visual, evitando spoilers recentes; quando inevitáveis, sinalize. Considera prêmios (Emmys e afins), classificações etárias e versões internacionais (dublagem, legendagem, cortes regionais). Prioriza dados estáveis: datas de estreia/final, créditos oficiais e ordem canônica de visualização. Útil para perguntas sobre origem, equipe de criação, mudanças de elenco/showrunner, relação com obras-fonte (livros, HQs) e diferenças entre versões, sem recorrer a métricas voláteis de audiência semanal.

### Subtema: Jogos Eletrônicos

```json
{
  "tema": "Entretenimento",
  "tema_clean": "entretenimento",
  "subtema": "Jogos Eletrônicos",
  "subtema_clean": "jogos_eletronicos"
}
```

Abrange títulos, franquias e estúdios, com ênfase em ano de lançamento, publishers, plataformas (PC, consoles, mobile), gêneros/subgêneros (ação, RPG, estratégia, simulação) e modos (single, cooperativo, competitivo). Considera motores de jogo, remasters, remakes, ports e coleções, classificações etárias (ESRB, PEGI) e acessibilidade. Explora design de níveis, narrativa interativa, trilha e dublagem, conquistas e conteúdo adicional (DLCs, expansões), evitando notas de review e patches voláteis. Reconhece comunidades e cenas estabelecidas (speedrunning, modding) em perspectiva histórica. Útil para perguntas sobre plataformas originais, estúdios responsáveis, mudanças entre versões, cronologias internas de franquias e inovações de mecânica. Prioriza títulos oficiais, edições definitivas e dados canônicos de crédito e lançamento, incluindo compilações e remasterizações.

### Subtema: Anime e Mangá

```json
{
  "tema": "Entretenimento",
  "tema_clean": "entretenimento",
  "subtema": "Anime e Mangá",
  "subtema_clean": "anime_e_manga"
}
```

Cobre mangás (autores, editoras, revistas de serialização, demografias — shōnen, shōjo, seinen, josei — volumes e status) e animes (estúdios, diretores, roteiristas, temporadas, cour, filmes, OVAs, ONAs). Registra títulos originais em japonês com transliteração e traduções consagradas, além de datas de estreia e conclusão. Aborda selos editoriais, premiações do setor e blocos de exibição, distinguindo cânone de material adicional. Considera diferenças entre obra-base e adaptação, trilhas de abertura/encerramento, dublagem e distribuição internacional. Evita rankings semanais e “hype” passageiro, priorizando marcos estáveis, créditos oficiais e cronologias de publicação/transmissão. Útil para perguntas sobre origem editorial, equipe principal, estúdio, ordem canônica de leitura/visualização, arcos e filmes vinculados.

### Subtema: Música Popular

```json
{
  "tema": "Entretenimento",
  "tema_clean": "entretenimento",
  "subtema": "Música Popular",
  "subtema_clean": "musica_popular"
}
```

Envolve artistas, bandas, compositores e produtores, com foco em álbuns, EPs e singles, selos/distribuidoras, gêneros/subgêneros, anos de lançamento, colaborações e prêmios (Grammy, BRIT, VMA). Prioriza discografias oficiais, créditos de composição/produção, versões e relançamentos, certificações (ouro/platina) e edições especiais. Evita paradas semanais e números voláteis, privilegiando marcos estáveis e influências documentadas. Considera formatos físicos e digitais, remasterizações, capas icônicas e turnês históricas como contexto. Útil para perguntas sobre autoria de canções, ordem de discos, mudanças de formação, selos responsáveis e impacto reconhecido, distinguindo álbuns de estúdio, ao vivo e coletâneas.

### Subtema: Jogos de Tabuleiro e Cartas

```json
{
  "tema": "Entretenimento",
  "tema_clean": "entretenimento",
  "subtema": "Jogos de Tabuleiro e Cartas",
  "subtema_clean": "jogos_de_tabuleiro_e_cartas"
}
```

Abrange jogos clássicos e modernos, enfatizando designers, editoras, ano da primeira edição, mecânicas (worker placement, deck-building, draft, controle de área), tempo médio, número de jogadores e escalabilidade. Considera modos competitivos/cooperativos, variações solo, expansões, reimplementações e edições revisadas. Distingue “core rules” de módulos opcionais, componentes (tabuleiros, miniaturas, cartas, dados, marcadores) e ambientações. Inclui cartas clássicas (bridge, pôquer), TCGs e LCGs, evitando preços e mercado secundário. Útil para perguntas sobre autoria, mecânicas principais, editoras originais, linhas de expansão, prêmios setoriais e diferenças entre edições, com base em regras oficiais e dados de publicação estáveis.

Perfeito — removi os subtemas novos e reequilibrei o texto para dar **mais espaço a pessoas** (atletas, técnicos, árbitros) **sem perder o escopo institucional** (regras, clubes, arenas, entidades, competições). Segue a versão revisada:

---

## Tema: Esportes

**Esportes** estuda práticas competitivas e recreativas, suas **pessoas** (atletas, técnicos, árbitros) e seu **escopo institucional** (regras oficiais, entidades, clubes, arenas e competições). Priorize **fatos estáveis**: biografias consolidadas (nome completo, nacionalidade, posição/função), **títulos/medalhas homologados**, prêmios canônicos, **Hall of Fame**, números de camisa **aposentados**, datas/lugares de eventos históricos, além de fundações, sedes, regulamentos e **formatos consagrados**. Evite números sazonais (estatísticas “da temporada”), **transferências em andamento**, rumores e rankings do momento. Para *microsubtemas*, recorte por modalidade/competição, posições/táticas clássicas, **elencos campeões**, arbitragem, instalações e cronologias institucionais.

---

### Subtema: Futebol

```json
{
  "tema": "Esportes",
  "tema_clean": "esportes",
  "subtema": "Futebol",
  "subtema_clean": "futebol"
}
```

Associação (association football): **Leis do Jogo** (IFAB), posições e sistemas clássicos, **jogadores e técnicos históricos**, árbitros de finais, estádios, clubes e seleções, competições tradicionais e entidades (FIFA/confederações). Valorize **marcos biográficos e institucionais** (estreias, títulos oficiais, prêmios canônicos, fundações, formatos, sedes), evitando estatísticas/rumores de mercado.

### Subtema: Basquete

```json
{
  "tema": "Esportes",
  "tema_clean": "esportes",
  "subtema": "Basquete",
  "subtema_clean": "basquete"
}
```

Fundamentos, posições, dimensões de quadra, diferenças **FIBA/NBA**, infrações e **figuras centrais** (jogadores, técnicos, árbitros). Inclui **franquias e torneios históricos**, prêmios clássicos (MVP de finais/temporadas **históricas**), **Hall of Fame**, números aposentados e **formatos de playoffs** — sempre com foco em fatos consolidados.

### Subtema: Tênis

```json
{
  "tema": "Esportes",
  "tema_clean": "esportes",
  "subtema": "Tênis",
  "subtema_clean": "tenis"
}
```

Pontuação, superfícies, **Grand Slams**, Copa Davis/Billie Jean King Cup, equipamentos e **tenistas notáveis** (estilo, mão dominante, títulos de Slam, rivalidades clássicas), além de **técnicos relevantes**. Evite rankings correntes; foque **títulos e sedes históricas** e a organização do calendário.

### Subtema: Automobilismo

```json
{
  "tema": "Esportes",
  "tema_clean": "esportes",
  "subtema": "Automobilismo",
  "subtema_clean": "automobilismo"
}
```

Categorias (F1, Indy, Endurance, Rally), bandeiras, procedimentos, boxes, safety car, **pilotos e chefes de equipe**, diretores de prova, circuitos icônicos, regulamentos técnicos de alto nível e entidades (FIA). Priorize **títulos mundiais**, equipes, números de carro marcantes, **estreias e eras** homologadas.

### Subtema: Olimpíadas

```json
{
  "tema": "Esportes",
  "tema_clean": "esportes",
  "subtema": "Olimpíadas",
  "subtema_clean": "olimpiadas"
}
```

História dos Jogos (verão/inverno), símbolos, cerimônias, sedes, programa esportivo, estrutura do **COI** e **atletas olímpicos** (modalidade/país, **medalhas oficiais**, porta-bandeiras, recordes olímpicos homologados). Diferencie edições, boicotes e marcos institucionais.

### Subtema: Esportes Radicais

```json
{
  "tema": "Esportes",
  "tema_clean": "esportes",
  "subtema": "Esportes Radicais",
  "subtema_clean": "esportes_radicais"
}
```

Skate, surf, BMX, escalada, paraquedismo: ambientes, manobras, equipamentos, eventos clássicos e **atletas referência** (pioneiros de manobras, campeões de X Games/Mundiais). Combine **terminologia padronizada** com conquistas **homologadas**.

### Subtema: Artes Marciais

```json
{
  "tema": "Esportes",
  "tema_clean": "esportes",
  "subtema": "Artes Marciais",
  "subtema_clean": "artes_marciais"
}
```

Tradições e esportivizações (judô, karatê, taekwondo, BJJ, muay thai): origens, graduações, **lutadores/professores notáveis**, regras de competição, federações e eventos canônicos. Distinguir arte marcial de esporte de combate quando preciso, priorizando **títulos oficiais** e marcos institucionais.

### Subtema: Esportes Diversos

```json
{
  "tema": "Esportes",
  "tema_clean": "esportes",
  "subtema": "Esportes Diversos",
  "subtema_clean": "esportes_diversos"
}
```

Modalidades **não** cobertas acima (atletismo, natação, vôlei, handebol, rugby, beisebol/softbol, hóqueis, ginástica, ciclismo, halterofilismo). Valorize **regras oficiais**, medidas e formatos de competição, **instituições e arenas**, e **atletas de destaque com feitos estáveis** (títulos/recordes **homologados**).


## Tema: História

**História** estuda mudanças e permanências nas sociedades humanas no tempo, por meio de fontes (textos, objetos, imagens, arquitetura, mapas) e métodos críticos. Privilegia fatos estáveis, cronologias claras, contextos regionais e interpretações amplamente aceitas. Diferencia-se de **Geografia** (ênfase espacial), **Ciências** (métodos e teorias científicas) e **História Natural** (processos naturais). Para criar *microsubtemas*, delimite recortes nítidos por período, região, civilização, tema institucional (leis, religião, economia, guerra) ou gênero de fonte, evitando sobreposições e modismos. Prefira registros canônicos (crônicas, inscrições, códigos legais, tratados, obras clássicas), identifique atores, datas, lugares e consequências, e explicite fronteiras (o que entra e o que fica para outro subtema).

### Subtema: Filosofia

```json
{
  "tema": "História",
  "tema_clean": "historia",
  "subtema": "Filosofia",
  "subtema_clean": "filosofia"
}
```

Desenvolvimento histórico do pensamento filosófico: escolas, movimentos, obras e autores da Antiguidade à contemporaneidade. Foco em correntes (estoicismo, escolástica, iluminismo, idealismo, existencialismo, analítica), textos fundacionais, contextos institucionais (acadêmias, universidades, mosteiros), circulação de ideias e disputas canônicas. Evitar tratamento técnico de lógica ou metafísica; priorizar o **contexto histórico** de produção, recepção e influência (traduções, censuras, polêmicas).

### Subtema: Pré-História

```json
{
  "tema": "História",
  "tema_clean": "historia",
  "subtema": "Pré-História",
  "subtema_clean": "pre_historia"
}
```

Abrange a história humana **antes da escrita**, com ênfase arqueológica: Paleolítico a Neolítico, indústrias líticas, arte rupestre e móvel, domicílios, megalitos, domesticação inicial, transições de caça-coleta para agricultura e formação de aldeias/complexidade social. Valoriza cronologias regionais, ambientes e rotas de difusão. Usa datação relativa/absoluta sem técnica laboratorial detalhada. Evita filogenia de hominínios (tratada em “Antropologia e Evolução Humana”).

### Subtema: Idade Antiga

```json
{
  "tema": "História",
  "tema_clean": "historia",
  "subtema": "Idade Antiga",
  "subtema_clean": "idade_antiga"
}
```

Do surgimento das primeiras civilizações urbanas ao declínio do Império Romano do Ocidente. Inclui Mesopotâmia, Egito, Levante, Pérsia, Grécia, Roma, Índia antiga, China antiga e outras tradições afro-eurasiáticas. Temas: Estados, leis, impérios, comércio, religiões, literatura, artes e tecnologias. Diferenciar de Pré-História (sem escrita) e de Idade Média (novas formações políticas e religiosas).

### Subtema: Idade Média

```json
{
  "tema": "História",
  "tema_clean": "historia",
  "subtema": "Idade Média",
  "subtema_clean": "idade_media"
}
```

Aproximadamente sécs. V–XV, abrangendo Bizâncio, Europa latina, mundo islâmico, impérios e redes afro-eurasiáticas (Sahel, Índico, Rota da Seda) e Leste Asiático. Temas: feudalismos, cidades e corporações, monaquismo e escolástica, cruzadas, califados e sultanatos, rotas comerciais, cultura material e arte sacra. Marcar transições para Idade Moderna (Renascimentos, expansão marítima, reformas).

### Subtema: Idade Moderna

```json
{
  "tema": "História",
  "tema_clean": "historia",
  "subtema": "Idade Moderna",
  "subtema_clean": "idade_moderna"
}
```

C. sécs. XV–XVIII: Renascimentos, expansão atlântica, contatos intercontinentais, Reforma e Contrarreforma, absolutismos, economias mercantis e escravização atlântica. Destacar transformações culturais e institucionais, Estados fiscais-militares, diplomacia e circulação de saberes. Diferenciar da História das Ciências (aspectos técnicos) ao tratar a **contextualização histórica**.

### Subtema: Idade Contemporânea

```json
{
  "tema": "História",
  "tema_clean": "historia",
  "subtema": "Idade Contemporânea",
  "subtema_clean": "idade_contemporanea"
}
```

Do final do séc. XVIII ao presente: Revoluções atlânticas, industrializações, nacionalismos e imperialismos, guerras mundiais, descolonizações, Guerra Fria, integrações regionais e globalização. Priorizar marcos institucionais (constituições, tratados, organizações), movimentos sociais, transformações econômicas e culturais. Evitar atualidades efêmeras; focar processos consolidados.

### Subtema: História do Brasil

```json
{
  "tema": "História",
  "tema_clean": "historia",
  "subtema": "História do Brasil",
  "subtema_clean": "historia_do_brasil"
}
```

Da diversidade indígena pré-colonial à República contemporânea: colonização portuguesa, economia colonial e escravização, Independência, Império, Abolição, República, reformas políticas, ciclos econômicos, urbanização, regimes e redemocratização. Destacar constituições, leis fundamentais, conflitos, imigração e formação territorial. Evitar política muito recente; privilegiar sínteses documentadas.

### Subtema: Segunda Guerra Mundial

```json
{
  "tema": "História",
  "tema_clean": "historia",
  "subtema": "Segunda Guerra Mundial",
  "subtema_clean": "segunda_guerra_mundial"
}
```

Conflito global (1939–1945): origens, alianças, frentes de combate, operações decisivas, economia de guerra, diplomacia, genocídios (Holocausto) e consequências geopolíticas. Foco em datas, tratados, campanhas, lideranças e documentos; evitar estimativas controvertidas. Considerar dimensões civil e colonial, resistência e reconstrução pós-guerra.

### Subtema: Primeira Guerra Mundial

```json
{
  "tema": "História",
  "tema_clean": "historia",
  "subtema": "Primeira Guerra Mundial",
  "subtema_clean": "primeira_guerra_mundial"
}
```

Conflito (1914–1918): alianças, mobilização, frentes ocidental/oriental/colonial, guerra de trincheiras, tecnologia militar, colapsos imperiais, conferências de paz e redesenho territorial. Enfatizar causas de longa duração, cronologia de 1914, tratados (Versalhes e correlatos) e impactos sociais.

### Subtema: Roma Antiga

```json
{
  "tema": "História",
  "tema_clean": "historia",
  "subtema": "Roma Antiga",
  "subtema_clean": "roma_antiga"
}
```

Da monarquia à República e ao Império: instituições (senado, magistraturas, direito), expansão, administração provincial, exército, urbanismo, religião, cultura escrita e monumentalidade. Marcar cronologias (Reformas Gracanas, Principado, Dominate), crises e continuidades. Evitar recepções modernas; privilegiar fontes antigas e arqueologia.

### Subtema: Civilização Chinesa

```json
{
  "tema": "História",
  "tema_clean": "historia",
  "subtema": "Civilização Chinesa",
  "subtema_clean": "civilizacao_chinesa"
}
```

Longa duração das dinastias e Estados na China: formação imperial (Qin–Han), períodos de divisão, reunificações (Sui–Tang), transformações Song–Yuan–Ming–Qing e repúblicas/repensões modernas. Temas: burocracia, exames imperiais, classicismo, religiões/filosofias, tecnologias, comércio interno/externo e relações tributo-diplomáticas. Diferenciar narrativa interna de influências e contatos regionais.






