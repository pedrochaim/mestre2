Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Ecossistemas e Ambientes Extremos** (tema **Natureza**). Avalie **cada uma**, independentemente, e decida:

- **aprovar:** passa em todos os critérios.
- **reescrever:** tem um problema corrigível. Devolva em `reescrita` a versão corrigida **completa** (`angulo`, `tipo`, `pergunta`, `resposta`, `fonte` e, se o tipo for `multipla`, exatamente 3 `distratores`). **Toda decisão `reescrever` precisa vir com `reescrita` preenchida**, mesmo quando a correção é pequena, como trocar um distrator ou encurtar a resposta: sem ela, a pergunta se perde. Nas decisões `aprovar` e `descartar`, `reescrita` é `null`.
- **descartar:** o problema não tem conserto, ou o fato é fraco demais para valer uma pergunta.

Em `motivo`, explique a decisão em uma frase curta. Na dúvida entre reescrever e descartar, descarte: o MANIFESTO diz "menos e melhor".

# O que verificar

1. **Precisão literal (obrigatório):** leia o enunciado palavra por palavra. Cada verbo, adjetivo e afirmação precisa ser **literalmente** verdadeiro, e não só a resposta. Desconfie especialmente de verbos como *batizou*, *inventou*, *descobriu*, *fundou*, *criou*, e de palavras como *único*, *primeiro*, *maior*, *sempre*, *nunca*. Exemplo: dizer que Colombo *batizou* a Colômbia é falso, porque o país recebeu o nome *em homenagem* a ele. Se houver qualquer imprecisão, reescreva.
2. **Fato e fonte (obrigatório):** você não tem acesso à internet. Cada pergunta traz em `trechos` o que o pipeline baixou das URLs de `fonte`: a abertura de cada página e as passagens mais ligadas à pergunta, separadas por `[…]`. Quando as fontes estão em inglês, pode vir também o artigo equivalente da Wikipédia em português, marcado em `observacao`: ele serve para conferir o fato, mas não é fonte da pergunta. Confira o fato nesses trechos e informe em `apoio`:
   - `trecho`: um trecho sustenta a resposta e o enunciado;
   - `conhecimento`: os trechos não mostram o fato, mas ele é amplamente documentado e você tem certeza dele. Use com parcimônia; na dúvida, descarte;
   - `contradito`: um trecho contradiz o enunciado ou a resposta. Reescreva de acordo com o trecho, ou descarte.

   Se uma fonte vier com `situacao` `inexistente` ou `desambiguacao`, troque-a na `reescrita` por uma URL da Wikipédia de que você tenha alta confiança (ela será conferida depois). Fonte `inacessivel` não é defeito da pergunta: confira o fato nas outras fontes.
3. **Todos os critérios de qualidade** do MANIFESTO §8: resposta única, sem vazamento, atemporal, verificável, precisa, justa, interessante, audível e bem classificada.
4. **Redação para voz** do MANIFESTO §7, incluindo resposta **específica** (o nome da coisa, e não a categoria).
5. **Âncora:** respeita a regra de granularidade (MANIFESTO §4) e é de fato a entidade sobre a qual está o fato perguntado? Se a granularidade estiver errada, descarte.
6. **Ângulo:** é o mais específico que serve (MANIFESTO §5)? Se não for, reescreva com o ângulo correto.
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Deserto do Atacama",
      "descricao": "Deserto costeiro do norte do Chile, entre a Cordilheira dos Andes e o Oceano Pacífico, conhecido pela aridez extrema."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Que deserto do norte do Chile, com lugares onde quase nunca chove, é considerado o deserto não polar mais seco do mundo?",
    "resposta": "Deserto do Atacama",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Deserto_do_Atacama",
      "https://en.wikipedia.org/wiki/Atacama_Desert"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Deserto_do_Atacama",
        "situacao": "ok",
        "texto": "Deserto de Atacama está localizado na região norte do Chile até a fronteira com o Peru. Com cerca de 1 000 km de extensão, é considerado o deserto mais alto do mundo. É o deserto não polar mais seco do mundo, pois chove raramente na região, em consequência de as correntes marítimas do Oceano Pacífico não conseguirem passar para o deserto, por causa de sua altitude.\n[…]\nAs temperaturas no deserto variam entre 0 °C à noite a 40 °C durante o dia. Em função destas condições existem poucas cidades e vilas no deserto; uma delas, muito conhecida, é São Pedro de Atacama, que tem pouco mais de 5 000 habitantes e está a 2 400 metros de altitude.\n[…]\nJá foi registrado como o menor índice pluviométrico do planeta. A Cordilheira dos Andes impede a chegada de ar úmido da Amazônia, pois funciona como uma barreira para a corrente de ar. O Oceano Pacífico seria então o encarregado de umidificar a região do deserto de Atacama mas, por ser uma corrente marítima fria não ocorre evaporação da água sendo que o ar que vai em direção ao deserto é seco.\n[…]\nO deserto de Atacama em geral apresenta um terreno rochoso muito seco e pouco propicio a brotar algumas plantas. Em alguns lugares próximos à região de Antofagasta existem grandes áreas de deserto absoluto, onde o solo é completamente desprovido de vegetação.\n[…]\nO deserto do Atacama é muito visado por turistas, para prática do trekking, montanhismo, montaria, off-road, mountain bike, e arqueólogos, devido ao fato da região possuir interessantes artefatos arqueológicos e históricos, além de salinas, gêiseres, vulcões, lagoas coloridas, vales verdejantes e cânions de água cristalina. Também há múmias com mais de 1 000 anos deixadas pelos Chinchorros (antigos habitantes da área).\n[…]\nJorge Durán filmou Romance Policial no Deserto do Atacama."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Atacama_Desert",
        "situacao": "ok",
        "texto": "The Atacama Desert (Spanish: Desierto de Atacama [ataˈkama]) is a desert plateau on the Pacific coast of South America, stretching along a 1,600-kilometre-long (1,000-mile) strip of land in northern Chile, west of the Andes. It covers an area of 105,000 km2 (41,000 mi2), rising to 128,000 km2 (49,000 mi2) if the barren lower slopes of the Andes are included.\n[…]\nAccording to the World Wide Fund for Nature, the Atacama Desert ecoregion occupies a continuous strip for nearly 1,600 kilometres (1,000 mi) along the narrow coast of the northern third of Chile, from near Arica (18°24′S) southward to near La Serena (29°55′S). The National Geographic Society considers the coastal area of southern Peru to be part of the Atacama Desert and includes the deserts south of the Ica Region in Peru.\n[…]\nThe Atacama Desert is popular with all-terrain sports enthusiasts. Various championships have taken place here, including the Lower Atacama Rally, Lower Chile Rally, Patagonia-Atacama Rally, and the latter Dakar Rally's editions. The rally was organized by the Amaury Sport Organisation and held in 2009, 2010, 2011, and 2012. The dunes of the desert are ideal rally races located in the outskirts of the city of Copiapó.\n[…]\nThe 2013 Dakar 15-Day Rally started on 5 January in Lima, Peru, through Chile, Argentina and back to Chile finishing in Santiago. Visitors also use the Atacama Desert sand dunes for sandboarding (Spanish: duna).\n[…]\nAn event called Volcano Marathon takes place near the Lascar volcano in the Atacama Desert.\n[…]\nMost people who go to tour the sites in the desert stay in the town of San Pedro de Atacama. The Atacama Desert is in the top three tourist locations in Chile. The specially commissioned ESO hotel is reserved for astronomers and scientists.\n[…]\n\"Mars-like Soils in the Atacama Desert, Chile, and the Dry Limit of Microbial Life\", NASA press release"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Deserto do Atacama",
      "descricao": "Deserto costeiro do norte do Chile, entre a Cordilheira dos Andes e o Oceano Pacífico, conhecido pela aridez extrema."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O deserto chileno do Atacama abriga alguns dos maiores observatórios astronômicos do mundo. O que torna esse lugar tão bom para observar o céu?",
    "resposta": "Ar seco, céu limpo e altitude",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atacama_Desert"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atacama_Desert",
        "situacao": "ok",
        "texto": "The Atacama Desert (Spanish: Desierto de Atacama [ataˈkama]) is a desert plateau on the Pacific coast of South America, stretching along a 1,600-kilometre-long (1,000-mile) strip of land in northern Chile, west of the Andes. It covers an area of 105,000 km2 (41,000 mi2), rising to 128,000 km2 (49,000 mi2) if the barren lower slopes of the Andes are included.\n[…]\nThe desert borders Peru to the north and the Chilean Matorral ecoregion to the south, with the less arid Central Andean dry puna to the east. Its high altitude, dry air, and near-total absence of light pollution make it one of the world's premier sites for astronomical observation, hosting several major observatories including the Atacama Large Millimeter Array (ALMA) and the Very Large Telescope.\n[…]\nBirds are one of the most diverse animal groups in the Atacama. Humboldt penguins live year-round along the coast, nesting in desert cliffs overlooking the ocean. Inland, high-altitude salt flats are inhabited by Andean flamingos, while Chilean flamingos can be seen along the coast. Other birds (including species of hummingbirds and rufous-collared sparrow) visit the lomas seasonally to feed on insects, nectar, seeds, and flowers.\n[…]\nBecause of its high altitude, nearly nonexistent cloud cover, dry air, and freedom from light pollution and radio interference from widely populated cities and towns, this desert is one of the best places in the world to conduct astronomical observations. Hundreds of thousands of stars can be viewed via telescope since the desert experiences more than 200 cloudless nights each year. A number of telescopes have been installed to help astronomers from across the globe study the universe.\n[…]\nAtacama Giant\n[…]\n\"Roving robot finds desert life\", article in Nature\n[…]\nAtacama Desert Photo Gallery, photos of many different landscapes, flora and fauna of the Atacama Desert"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Deserto_de_Atacama",
        "situacao": "ok",
        "texto": "Deserto de Atacama está localizado na região norte do Chile até a fronteira com o Peru. Com cerca de 1 000 km de extensão, é considerado o deserto mais alto do mundo. É o deserto não polar mais seco do mundo, pois chove raramente na região, em consequência de as correntes marítimas do Oceano Pacífico não conseguirem passar para o deserto, por causa de sua altitude.\n[…]\nAs temperaturas no deserto variam entre 0 °C à noite a 40 °C durante o dia. Em função destas condições existem poucas cidades e vilas no deserto; uma delas, muito conhecida, é São Pedro de Atacama, que tem pouco mais de 5 000 habitantes e está a 2 400 metros de altitude.\n[…]\nPossui clima quente durante o dia e frio à noite, mas ao longo do ano é seco, apresentando variações de temperatura que vão de 0 °C a 40 °C. A falta de chuva nessa região é devida às correntes marinhas do Pacífico. A corrente marinha de Humboldt, deixa o ar muito frio, que ao se chocar com as correntes quentes do Pacífico geram condensação e consequentemente chuva. Porém, até chegar no deserto, as nuvens se descarregam chegando lá já vazias, fazendo com que não chova lá.\n[…]\nJá foi registrado como o menor índice pluviométrico do planeta. A Cordilheira dos Andes impede a chegada de ar úmido da Amazônia, pois funciona como uma barreira para a corrente de ar. O Oceano Pacífico seria então o encarregado de umidificar a região do deserto de Atacama mas, por ser uma corrente marítima fria não ocorre evaporação da água sendo que o ar que vai em direção ao deserto é seco.\n[…]\nO deserto de Atacama em geral apresenta um terreno rochoso muito seco e pouco propicio a brotar algumas plantas. Em alguns lugares próximos à região de Antofagasta existem grandes áreas de deserto absoluto, onde o solo é completamente desprovido de vegetação.\n[…]\nJorge Durán filmou Romance Policial no Deserto do Atacama.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Antártida",
      "descricao": "Continente que cerca o Polo Sul, quase todo coberto por um manto de gelo."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Se deserto é toda região que recebe pouquíssima chuva ou neve, qual é o maior deserto do planeta?",
    "resposta": "Antártida",
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_deserts_by_area",
      "https://en.wikipedia.org/wiki/Antarctica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_deserts_by_area",
        "situacao": "ok",
        "texto": "This article provides a list of deserts ranked by the total area that they cover on Earth. Only deserts greater than 50,000 km2 (19,300 sq mi) are included in this ranking.\n[…]\nList of deserts (all deserts and pseudo-deserts by continent)\n[…]\nDesertification\n[…]\nPolar desert\n[…]\nUnited Nations Convention to Combat Desertification\n[…]\nDesert greening"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Antarctica",
        "situacao": "ok",
        "texto": "Antarctica ( ) is Earth's southernmost and least-populated continent. Situated almost entirely south of the Antarctic Circle and surrounded by the Southern Ocean (also known as the Antarctic Ocean), it contains the geographic South Pole. Antarctica is the fifth-largest continent, being about 40% larger than Europe, and has an area of 14,200,000 km2 (5,500,000 sq mi). Most of Antarctica is covered \n[…]\nThe name given to the continent originates from the word antarctic, which comes from Middle French antartique or antarctique ('opposite to the Arctic') and the Latin antarcticus ('opposite to the north'). Antarcticus is derived from the Greek ἀντι- ('anti-') and ἀρκτικός (arktikos, 'of the Bear [Ursa Major], northern'). The Greek philosopher Aristotle wrote in Meteorology about an \"Antarctic region\" in c. 350 BC.\n[…]\nThe Greek geographer Marinus of Tyre reportedly used the name in his world map in the second century AD. The Roman authors Gaius Julius Hyginus and Apuleius used for the South Pole the romanised Greek name polus antarcticus, from which derived the Old French pole antartike (modern pôle antarctique) attested in 1270, and from there the Middle English pol antartik, found first in a treatise written by the English author Geoffrey Chaucer.\n[…]\nAntarctica provides a unique environment for the study of meteorites: the dry polar desert preserves them well, and meteorites older than a million years have been found. They are relatively easy to find, as the dark stone meteorites stand out in a landscape of ice and snow, and the flow of ice accumulates them in certain areas. The Adelie Land meteorite, discovered in 1912, was the first to be found. Meteorites contain clues about the composition of the Solar System and its early development.\n[…]\nIndex of Antarctica-related articles\n[…]\nAntarctica. on In Our Time at the BBC\n[…]\nBritish Antarctic Survey (BAS)\n[…]\nU.S. Antarctic Program Portal"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_desertos_por_%C3%A1rea",
        "situacao": "ok",
        "texto": "Segue-se abaixo a Lista de desertos por área.\n[…]\nLista de Desertos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Andorinha-do-mar-ártica",
      "descricao": "Ave marinha Sterna paradisaea, que se reproduz no Ártico e passa o verão austral perto da Antártida."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Que ave marinha vive dois verões por ano, migrando entre o Ártico e a Antártida, e vê mais luz do dia que qualquer outro animal?",
    "resposta": "Andorinha-do-mar-ártica",
    "distratores": [
      "Albatroz-errante",
      "Petrel-gigante",
      "Gaivota-prateada"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Arctic_tern"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arctic_tern",
        "situacao": "ok",
        "texto": "The Arctic tern (Sterna paradisaea) is a tern in the family Laridae. This bird has a circumpolar breeding distribution covering the Arctic and subarctic regions of Europe (as far south as Brittany), Asia, and North America (as far south as Massachusetts). The species is strongly migratory, seeing two summers each year as it migrates along a convoluted route from its northern breeding grounds to th\n[…]\nThe genus name Sterna is derived from Old English \"stearn\", \"tern\". The specific paradisaea is from Late Latin paradisus, \"paradise\".\n[…]\nThe immature plumages of the Arctic tern were originally described as separate species, Sterna portlandica and Sterna pikei.\n[…]\nWhile nesting, Arctic terns are vulnerable to predation by cats and other animals. Besides being a competitor for nesting sites, the larger herring gull steals eggs and hatchlings. Camouflaged eggs help prevent this, as do isolated nesting sites. Scientists have experimented with bamboo canes erected around tern nests. Although they found fewer predation attempts in the caned areas than in the control areas, canes did not reduce the probability of predation success per attempt.\n[…]\nThe Arctic tern has appeared on the postage stamps of several countries and dependent territories. The territories include Åland, Alderney, and Faroe Islands. Countries include Canada, Finland, Iceland, and Cuba.\n[…]\nThe Arctic tern was featured prominently in a sketch on the improv comedy television show Whose Line Is It Anyway? involving Colin Mochrie and Ryan Stiles. In the sketch, Colin compared the call of the Arctic tern to the sound of the band name Backstreet Boys.\n[…]\nArctic tern – Species text in The Atlas of Southern African Birds\n[…]\n\"Arctic tern media\". Internet Bird Collection.\n[…]\nArctic tern images at ARKive[link removed]\n[…]\nArctic tern photo gallery at VIREO (Drexel University)\n[…]\nAudio recordings of Arctic tern on Xeno-canto."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gaivina-do-%C3%A1rtico",
        "situacao": "ok",
        "texto": "Sterna paradisaea Pontoppidan, 1763 é uma espécie de aves marinhas da família Laridae (antes Sternidae), conhecida pelos nomes comuns de gaivina-do-ártico, caracterizada pela plumagem branca, barrete preto e patas e bico vermelhos. A espécie tem distribuição natural circumpolar, nidificando em colónias nas zonas costeiras do Oceano Árctico e nas regiões subárcticas da Europa, Ásia e América do Nor\n[…]\nA espécie é célebre pela extensão da sua migração anual, voando anualmente desde a sua área de nidificação no Árctico até ao Arquipélago da Terra do Fogo e regressando. Esta viagem expõe a ave a dois verões por ano em latitudes elevadas, e, por essa razão, a mais luz do dia que qualquer outra criatura do planeta. Nesta migração, cada ave viajará em média ao longo da sua vida uma distância equivalente a uma ida e volta à Lua, cerca de 800 000 km.\n[…]\nOs parentes filogeneticamente mais próximos desta ave são um grupo de espécies do hemisfério sul: o trinta-réis Sterna hirundinacea, a espécie de garajau das ilhas Kerguelen (Sterna virgata) e o garajau antártico (Sterna vittata). É fácil distinguir S. paradisae dos seus parentes dependendo da área de invernagem, sendo que a diferença de seis meses na mudança de plumas é o melhor indício, posto que os garajaus-árticos apresentam plumagem invernal durante o verão austral.\n[…]\nA dieta base da espécie depende do lugar e da estação do ano, mas é sempre carnívora. Na maioria dos casos, alimenta-se de pequenos peixes ou de crustáceos marinhos. Os peixes representam a parte mais importante da dieta e, quando medidos em termos de biomassa, superam qualquer outro alimento.\n[…]\n«Onde observar a andorinha-do-mar-árctica». www.avesdeportugal.info\n[…]\n«Arctic tern – Species text in The Atlas of Southern African Birds» (PDF). sabap2.adu.org.za\n[…]\nArctic tern videos, photos, and sounds at the Internet Bird Collection\n[…]\nAudio recordings of Arctic tern em Xeno-canto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Caatinga",
      "descricao": "Bioma semiárido do sertão nordestino brasileiro, de vegetação que perde as folhas na seca."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Dos seis biomas terrestres do Brasil, qual é o único que existe apenas em território brasileiro?",
    "resposta": "Caatinga",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Caatinga",
      "https://en.wikipedia.org/wiki/Caatinga"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Caatinga",
        "situacao": "ok",
        "texto": "Caatinga (do tupi: ka'a [mata] + ting [branco] + -a [sufixo substantivador] = mata branca) é o único bioma brasileiro exclusivamente dentro do território nacional, o que significa que grande parte do seu patrimônio biológico não pode ser encontrado em nenhum outro país do planeta. Seu nome decorre da alusão à paisagem esbranquiçada apresentada pela vegetação durante o período seco. A maioria das p\n[…]\nA caatinga, que ocupa uma área de cerca de 734.478 km², o equivalente a 10% do território nacional, ocorre nos estados da Paraíba, Piauí, Ceará, Rio Grande do Norte, Pernambuco, Alagoas, Sergipe, Bahia, Maranhão (em áreas muito pequenas próximas ao rio Parnaíba) e parte do norte de Minas Gerais (região Sudeste do Brasil).\n[…]\nA caatinga é um dos grandes biomas brasileiros mais fragilizados. O uso insustentável de seus solos e recursos naturais ao longo de centenas de anos de ocupação faz com que a caatinga esteja bastante degradada. É comum a associação da imagem da caatinga a local pobre e seco pela mídia e por filmes.\n[…]\nO bioma, foi ocupado por dois grandes grupos indígenas: Os Macro-Jês e os Kariris, estes grupos estão na Caatinga a pelo menos dois mil anos. Existem poucos registros coloniais e estudos que expliquem a relação ou origem dos primeiros indígenas que habitaram a Caatinga. Além desses, outro grupo de origem misteriosa são os povos Tremembés, do litoral. Após o século XI, os povos tupis, originários da Amazônia Central, chegaram na região, vieram do sudeste brasileiro, subindo pelo litoral.\n[…]\nAlguns povos extintos que habitaram a Caatinga são os tokarijús, karatiús, panatis, icós, icózinhos, guanacés, aconguaçús e outros. Na defesa de seus territórios, os indígenas protagonizaram grandes conflitos na história brasileira como a Confederação dos Cariris, resistindo aos avanços lusitanos.\n[…]\nAs aves da Caatinga - Associação Mãe-da-lua\n[…]\nONG Associação Caatinga\n[…]\nCaatinga - WWF Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Caatinga",
        "situacao": "ok",
        "texto": "Caatinga (; [kaaˈt͡ʃĩɡɐ]) is a type of semi-arid tropical vegetation, and an ecoregion characterized by this vegetation in interior northeastern Brazil. The name \"Caatinga\" comes from the Old Tupi word ka'atinga, meaning 'white forest' (ka'a = 'forest, vegetation'; tinga = 'white').\n[…]\nThe Caatinga falls entirely within earth's tropical zone and is one of six major biomes of Brazil. It covers 912,529 km², nearly 10% of Brazil's territory. It is home to 26 million people and over 2,000 species of plants, fish, reptiles, amphibians, birds, and mammals.\n[…]\nThe Caatinga has enough endemic species to constitute a floristic province.\n[…]\nThe caatinga was inhabited by two major indigenous groups, the Macro-Jê and the Kariris, who have been in the Caatinga for at least two thousand years. After the 11th century, the Tupis arrived in the region, coming from the southeast and through the Atlantic coast. Contact with colonizers starting in the 16th century decimated numerous indigenous nations and tribes through diseases, enslavement, and invasion of territories for cattle ranching, sugar mills, and new settlements.\n[…]\nConversely, fossil evidence suggests that the Caatinga may historically have been part of a much larger dry belt.\n[…]\nEconomic development has fragmented the native biome. Estimates on the amount of Caatinga transformed affected by economic development range 25-50%, making Caatinga the most degraded ecosystem in Brazil, following the Atlantic Forest, which has lost over 80% of its original cover.\n[…]\nCaatinga moist-forest enclaves\n[…]\nList of plants of Caatinga vegetation of Brazil\n[…]\nMedia related to Caatinga at Wikimedia Commons\n[…]\n\"Caatinga\". Terrestrial Ecoregions. World Wildlife Fund.\n[…]\nCaatinga: Brazilian national heritage threatened Archived 2010-10-25 at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Caatinga",
      "descricao": "Bioma semiárido do sertão nordestino brasileiro, de vegetação que perde as folhas na seca."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Vindo do tupi, o nome caatinga, do bioma do sertão nordestino, significa o quê?",
    "resposta": "Mata branca",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Caatinga",
      "https://en.wikipedia.org/wiki/Caatinga"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Caatinga",
        "situacao": "ok",
        "texto": "Caatinga (do tupi: ka'a [mata] + ting [branco] + -a [sufixo substantivador] = mata branca) é o único bioma brasileiro exclusivamente dentro do território nacional, o que significa que grande parte do seu patrimônio biológico não pode ser encontrado em nenhum outro país do planeta. Seu nome decorre da alusão à paisagem esbranquiçada apresentada pela vegetação durante o período seco. A maioria das p\n[…]\nDeste modo, ka'a + ting pode ser traduzido como mata branca, ou, mais precisamente, como mata clara. A tradução mata branca, contudo, não está errada, pois em português brasileiro a palavra \"branco\" nem sempre tem sentido literal (fala-se em vinho branco, ou pessoa branca).\n[…]\nMata seca (= Floresta Estacional Decídua Montana, ou Floresta Tropical Caducifólia)\n[…]\nNa Caatinga vive a ararinha-azul, ameaçada de extinção. O último exemplar da espécie vivendo na natureza não foi mais visto desde o final de 2000. Outros animais da região são o sapo-cururu, asa-branca, cutia, gambá, preá, veado-catingueiro, tatu-peba e o sagui-de-tufos-brancos, entre outros.\n[…]\nAtualmente, a Caatinga ainda conta com vários povos indígenas, sendo o maior deles, os Potyguaras, de origem Tupi e também nativos da Mata Atlântica, somando mais de 20 mil indígenas. No interior, os maiores grupos são os Xukurus e Pankarus, da caatinga pernambucana, totalizando 12 mil e 7 mil indígenas respectivamente, provavelmente são de origem Macro-Jê.\n[…]\nA principal causa apontada é o uso da mata para abastecer siderúrgicas de Minas Gerais e Espírito Santo e indústrias de gesso e cerâmica do semiárido. Os dois estados com maior incidência de desmatamento deste tipo de bioma são Bahia e Ceará. A caatinga perdeu 45% da área original. Estes números conferem à caatinga a condição de ecossistema menos preservado e um dos mais degradados conforme o biólogo Guilherme Fister explicou em um recente estudo realizado na Universidade de Oxford."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Caatinga",
        "situacao": "ok",
        "texto": "Caatinga (; [kaaˈt͡ʃĩɡɐ]) is a type of semi-arid tropical vegetation, and an ecoregion characterized by this vegetation in interior northeastern Brazil. The name \"Caatinga\" comes from the Old Tupi word ka'atinga, meaning 'white forest' (ka'a = 'forest, vegetation'; tinga = 'white').\n[…]\nMost authors divide the Caatinga into two different subtypes: dry (\"sertão\") and humid (\"agreste\"), but categorizations vary to as many as eight different vegetative regimes.\n[…]\nCurrently, the Caatinga still has indigenous peoples, the largest of which are the Potyguaras, of Tupi origin and also native to the Atlantic Forest, totaling more than 20,000 indigenous peoples. In the interior, the largest groups are the Xukurus and Pankarus, from the Pernambuco Caatinga, totaling 12,000 and 7,000 indigenous peoples, possibly of Macro-Jê origin.\n[…]\nEconomic development has fragmented the native biome. Estimates on the amount of Caatinga transformed affected by economic development range 25-50%, making Caatinga the most degraded ecosystem in Brazil, following the Atlantic Forest, which has lost over 80% of its original cover.\n[…]\nIrrigation along the São Francisco River enables larger-scale agriculture, with existing irrigation infrastructure supporting the cultivation and export of grapes, papayas and melons in the São Francisco Valley region. Although the soil is fertile, saline water and salt pans near the water table mean that salinization of soil due to irrigation is a significant ongoing concern.\n[…]\nCaatinga moist-forest enclaves\n[…]\nSertão\n[…]\nList of plants of Caatinga vegetation of Brazil\n[…]\nMedia related to Caatinga at Wikimedia Commons\n[…]\n\"Caatinga\". Terrestrial Ecoregions. World Wildlife Fund.\n[…]\nCaatinga: Brazilian national heritage threatened Archived 2010-10-25 at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Salar de Uyuni",
      "descricao": "Imensa planície de sal no altiplano do sudoeste da Bolívia."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Que planície de sal dos Andes bolivianos, a maior do mundo, vira um espelho gigante quando fica coberta por uma fina camada de água da chuva?",
    "resposta": "Salar de Uyuni",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Salar_de_Uyuni",
      "https://en.wikipedia.org/wiki/Salar_de_Uyuni"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Salar_de_Uyuni",
        "situacao": "ok",
        "texto": "Salar de Uyuni (ou Salar de Tunupa) é o maior e mais alto deserto de sal do mundo, com 10 582 quilômetros quadrados e a 3 656 metros acima do nível médio do mar. Ele está localizado nos departamentos de Potosí e Oruro, no sudoeste da Bolívia, perto da borda da Cordilheira dos Andes. O salar é também o único ponto natural brilhante que pode ser visto do espaço. Ele serviu de guia para os astronauta\n[…]\nHá cerca de 40 mil anos a área do atual deserto de sal fazia parte do Lago Michin, um gigantesco lago pré-histórico. Quando o lago secou, deixou como remanescentes os atuais lagos Poopó e Uru Uru, e dois grandes desertos salgados, Coipasa (o menor) e o extenso Uyuni. O Salar de Uyuni tem aproximadamente 10 582 km² de área, ou seja, é maior que o lago Titicaca, situado na fronteira Bolívia-Peru e que apresenta aproximadamente 8 300 km².\n[…]\nAlém da extração de sal, o Salar de Uyuni é também um importante destino turístico. No período de chuvas, o Salar se assemelha a um enorme espelho que se confunde no horizonte com o céu. Assim os passeios ficam restritos a algumas áreas. Entretanto, entre abril e novembro todo o deserto de sal fica acessível, pois torna-se um imenso deserto seco com uma paisagem ainda mais exótica.[carece de fontes]?\n[…]\nOutros atrativos do Salar são o Hotel de Sal Playa Blanca, uma construção no meio do deserto, toda feita com blocos de sal, dos tijolos aos móveis, que encontra-se no meio do salar;[carece de fontes]? a Praça das Bandeiras, que fica em frente ao hotel desativado e contém várias bandeiras, desde bandeiras de países, até bandeiras de clubes de futebol; e o \"Monumento ao Rally Dakar\", construído de sal para representar a passagem do Rally Dakar pelo Salar de Uyuni.\n[…]\nPor conta dessa lenda, a população local considera Tunupa uma importante divindade e argumentam que a região deveria se chamar Salar de Tunupa, em vez de Salar de Uyuni.[carece de fontes]?"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Salar_de_Uyuni",
        "situacao": "ok",
        "texto": "Salar de Uyuni is the largest salt flat in the world, with an area of approximately 10,582 square kilometres (4,086 mi2). It is situated in southwestern Bolivia, within the Daniel Campos Province of the Potosí Department, near the crest of the Andes Mountains, at an elevation of 3,656 m (11,995 ft) above sea level.\n[…]\nAymara legend tells that the mountains Tunupa, Kusku, and Kusina, which surround the Salar, were giants. Tunupa married Kusku, but Kusku ran away from her with Kusina. Grieving Tunupa started to cry while breastfeeding her son. Her tears mixed with milk and formed the Salar. Many locals consider the Tunupa an important deity and say that the place should be called Salar de Tunupa rather than Salar de Uyuni.\n[…]\nThe Salar de Uyuni is part of the Altiplano of Bolivia in South America. The Altiplano is a high plateau, which was formed during the uplift of the Andes mountains. The plateau includes fresh and saltwater lakes as well as salt flats and is endorheic.\n[…]\nLocated in the Lithium Triangle, the Salar contains a large amount of sodium, potassium, lithium and magnesium (all in the chloride forms of NaCl, KCl, LiCl and MgCl2, respectively), as well as borax. As of 2024, with an estimated 23 mln. t, Bolivia holds about 22% of the world's known lithium resources (105 mln. tons); most of those are in the Salar de Uyuni.\n[…]\nSalar de Uyuni is estimated to contain 10 billion tonnes (9.8 billion long tons; 11 billion short tons) of salt, of which less than 25,000 t is extracted annually. All miners working in the Salar belong to Colchani's cooperative. Because of its location, large area, and flatness, the Salar is a major car transport route across the Bolivian Altiplano, except when seasonally covered with water.\n[…]\nSalar de Uyuni travel guide from Wikivoyage\n[…]\nSalar de Uyuni official website"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Taiga",
      "descricao": "Bioma de florestas de coníferas das altas latitudes do Hemisfério Norte, também chamado floresta boreal."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Formado por florestas de pinheiros e abetos que cobrem o norte da Rússia e do Canadá, qual é o maior bioma terrestre do planeta?",
    "resposta": "Taiga",
    "distratores": [
      "Tundra",
      "Savana",
      "Floresta tropical"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Taiga",
      "https://pt.wikipedia.org/wiki/Taiga"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Taiga",
        "situacao": "ok",
        "texto": "Taiga or tayga (, TY-gə; Russian: тайга́, IPA: [tɐjˈɡa]), also known as boreal forest or snow forest, is a biome characterized by coniferous forests consisting mostly of pines, spruces, and larches.\n[…]\nThe taiga, or boreal forest, is the world's largest land biome. In North America, it covers most of inland Canada, Alaska, and parts of the northern contiguous United States. In Eurasia, it covers most of Sweden, Finland, much of Russia from Karelia in the west to the Pacific Ocean (including much of Siberia), much of Norway, some lowland/coastal areas of Iceland,areas of northern Kazakhstan, northern Mongolia, and northern Japan (on the island of Hokkaido).\n[…]\nTaiga covers 17 million square kilometres (6.6 million square miles) or 11.5% of the Earth's land area, second only to deserts and xeric shrublands. The largest areas are located in Russia and Canada. In Sweden, taiga is associated with the Norrland terrain.\n[…]\nAmiro et al. (2001) calculated the mean fire cycle for the period 1980 to 1999 in the Canadian boreal forest (including taiga) at 126 years. Increased fire activity has been predicted for western Canada, but parts of eastern Canada may experience less fire in future because of greater precipitation in a warmer climate.\n[…]\nWhile the majority of studies on boreal forest transitions have been done in Canada, similar trends have been detected in the other countries. Summer warming has been shown to increase water stress and reduce tree growth in dry areas of the southern boreal forest in central Alaska and portions of far eastern Russia. In Siberia, the taiga is converting from predominantly needle-shedding larch trees to evergreen conifers in response to a warming climate."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Taiga",
        "situacao": "ok",
        "texto": "A taiga (do russo тайга́), também conhecida por floresta de coníferas, ou ainda floresta boreal, é um bioma predominante das regiões localizadas em elevadas latitudes cujo clima típico é o continental frio e polar, comumente encontrado no norte do Alasca, Canadá, sul da Groenlândia, parte da Noruega, Suécia, Finlândia, Sibéria e Japão.\n[…]\nNo Canadá, usa-se o termo floresta boreal para designar a parte meridional desse bioma, e o termo taiga é usado para designar as áreas menos arborizadas ao sul da linha de vegetação arbórea do Ártico.\n[…]\nNa taiga, diferente da tundra, o solo descongela por completo no verão permitindo a formação de florestas aciculifoliadas e há migração de animais de grande e médio portes. É uma região biogeográfica subártica setentrional e seca, na qual as formas de vida vegetal principais são larícios, abetos, pinheiros e espruces, que estão adaptadas ao clima frio. Também ocorrem algumas árvores de folha larga, nomeadamente vidoeiros, faias, salgueiros e sorveiras.\n[…]\nOs pauis e as plantas a eles associadas também são comuns nesta zona, que ocupa a maior parte do interior do Canadá e do norte da Rússia.\n[…]\nEmbora haja precipitação, o solo gela durante os meses de Inverno e as raízes das plantas não conseguem água. A adaptação das folhas à forma de agulhas limita, então, a perda de água, por transpiração. Também a forma cónica das árvores da taiga contribui para evitar a acumulação da neve e a subsequente destruição de ramos e folhas.\n[…]\nOs animais da taiga são carcajus, alces, renas, veados, ursos, lobos, raposas, linces, martas, esquilos, lebres, castores e aves diversas.\n[…]\nLocalização da taiga: zona temperada do norte e zona Antártida, com altas latitudes (60 a 80 graus);\n[…]\nOcorrência da floresta: Alasca, Canadá, sul da Groenlândia, parte da Noruega, Suécia, Finlândia, Sibéria e Japão."
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Pinguim-de-galápagos",
      "descricao": "Pinguim Spheniscus mendiculus, endêmico do arquipélago de Galápagos, no Equador."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Que espécie de pinguim vive mais ao norte de todas, chegando a ultrapassar a linha do equador?",
    "resposta": "Pinguim-de-galápagos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gal%C3%A1pagos_penguin",
      "https://pt.wikipedia.org/wiki/Pinguim-de-gal%C3%A1pagos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gal%C3%A1pagos_penguin",
        "situacao": "ok",
        "texto": "The Galápagos penguin (Spheniscus mendiculus) is a penguin endemic to the Galápagos Islands of Ecuador. It is the only penguin found north of the equator. Most inhabit Fernandina Island and the west coast of Isabela Island. The cool waters of the Humboldt and Cromwell Currents allow it to survive despite the tropical latitude. The Galápagos penguin is one of the banded penguins, the other species \n[…]\nAir temperatures in the Galápagos remain in the range 15–28 °C (59–82 °F). During El Niño seasons, the penguins defer breeding; their food becomes less abundant, which makes the chance of successfully raising offspring unfavorable compared to the chance of dying in the attempt. This was especially detrimental during the 1982-83 El Niño, when a 77% decline in their population was observed. The penguins usually breed when the sea surface temperature is below 25 °C (77 °F).\n[…]\nThese impacts are particularly threatening because of the population structure of the Galápagos penguin. The Galápagos penguin consists of two geographic subpopulations, but studies suggest that there is sufficient gene flow between these populations to treat them together when considering conservation strategies. Additionally, the Galápagos penguin demonstrates relatively low genetic diversity, making it especially vulnerable to disease, predation, and other environmental changes.\n[…]\nConservation efforts are crucial for protecting these penguins, which are classified as endangered by the IUCN Red List. Measures include monitoring population trends, habitat preservation, and mitigating human impacts. These efforts are essential to ensure the survival of the Galápagos penguin, a species integral to the biodiversity and ecological balance of the Galápagos Islands.\n[…]\nGalápagos penguins from the International Penguin Conservation website\n[…]\nPenguin World: Galápagos penguin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pinguim-de-gal%C3%A1pagos",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Tubarão-da-groenlândia",
      "descricao": "Tubarão Somniosus microcephalus, de águas frias e profundas do Atlântico Norte e do Ártico, de crescimento muito lento."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Que tubarão de águas geladas e profundas, que pode viver mais de dois séculos e meio, é o vertebrado de vida mais longa conhecido?",
    "resposta": "Tubarão-da-groenlândia",
    "distratores": [
      "Tubarão-frade",
      "Tubarão-branco",
      "Tubarão-baleia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Greenland_shark",
      "https://pt.wikipedia.org/wiki/Tubar%C3%A3o-da-groenl%C3%A2ndia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Greenland_shark",
        "situacao": "ok",
        "texto": "The Greenland shark (Somniosus microcephalus), also known as the grey shark or gurry shark, is a large shark of the family Somniosidae (\"sleeper sharks\"), closely related to the Pacific and southern sleeper sharks. Inhabiting the North Atlantic and Arctic Oceans, they are notable for their exceptional longevity, although they are poorly studied because of the depth and remoteness of their natural \n[…]\nIn April 2022, a large Somniosus shark was caught and subsequently released on Glover's Reef off the coast of Belize. This shark was identified as being either a Greenland shark or hybrid; Greenland × Pacific sleeper shark.\n[…]\nHerbert, N.A.; Skov, P.V.; Tirsgaard, B.; Bushnell, P.G.; Brill, R.W.; Harvey Clark, C.; Steffensen, J.F. (2017). \"Blood O2 affinity of a large polar elasmobranch, the Greenland shark Somniosus microcephalus\". Polar Biology. 40 (11): 2297–2305. Bibcode:2017PoBio..40.2297H. doi:10.1007/s00300-017-2142-z. S2CID 206954171.\n[…]\nNielsen, J.; Schou Christiansen, J.; Grønkjær, P.; Bushnell, P.G.; Steffensen, J.F.; Overgaard Kiilerich, H.; et al. (2019). \"Greenland shark (Somniosus microcephalus) stomach contents and stable isotope values reveal an ontogenetic dietary shift\". Marine Megafauna. Frontiers in Marine Science. 6 125. Bibcode:2019FrMaS...6..125N. doi:10.3389/fmars.2019.00125. hdl:10037/15917.\n[…]\nNielsen, J.; Hedeholm, R.B.; Lynghammar, A.; McClusky, L.M.; Berland, B.; Steffensen, J.F.; Christiansen, J.S. (2020). \"Assessing the reproductive biology of the Greenland shark (Somniosus microcephalus)\". PLOS ONE. 15 (10) e0238986. Bibcode:2020PLoSO..1538986N. doi:10.1371/journal.pone.0238986. PMC 7540863. PMID 33027263.\n[…]\nOld and Cold: Biology of the Greenland shark - project at Univ Copenhagen (mbl.ku.dk)\n[…]\nThe Greenland shark (Somniosus microcephalus) genome provides insights into extreme longevity - BioArchives Sept 2024 - the first report of the Greenland shark genome"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tubar%C3%A3o-da-groenl%C3%A2ndia",
        "situacao": "ok",
        "texto": "Somniosus microcephalus (Bloch & Schneider,  1801), conhecido pelo nome comum de tubarão-da-groenlândia, é um dos maiores tubarões do mundo, chegando a medir mais de 6,5 metros de comprimento. Os tubarões da Groenlândia são os vertebrados com maior longevidade conhecida.\n[…]\nUm espécime com 7,3 m é frequentemente mencionado na literatura especializada, e passou a ser aceito como o maior tamanho já notificado de um tubarão da Groenlândia. Em Janeiro de 1985 foi capturado na Ilha de May, Escócia, um indivíduo com 6,4m de comprimento e pesando 1,021 kg.\n[…]\nEsse animal é conhecido por sua aparência e movimentos indolentes se deslocando lentamente pela coluna d'água, diferentemente das outras espécies, que são mais agressivas. Possui migração batimétrica passado o dia e a noite em profundidades distintas, e é geralmente cego, pois possui um parasita (espécie de crustáceo) associado que se alimenta de seus fluidos oculares.\n[…]\nÉ a espécie de vertebrado com a maior expectativa de vida conhecida com uma média estimada de 400 anos (entre 250 e 500 anos). (as lentes oculares sugerem que uma fêmea morreu com cerca de 392 anos) e está entre as maiores espécies existentes de tubarão. Atingem a maturidade sexual por volta dos 150 anos de idade e seus filhotes nascem vivos após um período de gestação estimado de 8 a 18 anos.\n[…]\nAlimentam-se principalmente de peixes, e algumas vezes até focas. Já foram encontradas partes de cavalos, ursos-polares e alces em estômagos de tubarões da Groenlândia.\n[…]\nEste tubarão faz parte da gastronomia da Islândia, sendo o Hákarl a iguaria mais conhecida com ele confeccionada. Consiste em peixe putrefacto e seco.\n[…]\nTanto na Groenlândia como na Islândia, a carne do tubarão-da-groenlândia é também utilizada como comida para cão, depois de seca."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Albatroz-errante",
      "descricao": "Grande ave marinha Diomedea exulans, que plana sobre o Oceano Austral."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Que ave do Oceano Austral, capaz de planar horas nos ventos fortíssimos sem bater as asas, tem a maior envergadura entre as aves vivas?",
    "resposta": "Albatroz-errante",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wandering_albatross",
      "https://pt.wikipedia.org/wiki/Albatroz-errante"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wandering_albatross",
        "situacao": "ok",
        "texto": "The snowy albatross (Diomedea exulans), also known as the wandering albatross, white-winged albatross, or goonie, is a large seabird from the family Diomedeidae; they have a circumpolar range in the Southern Ocean. It is the largest species of albatross and was long considered to be the same species as the Tristan albatross and the Antipodean albatross. Together with the Amsterdam albatross, it fo\n[…]\nSome experts considered there to be four subspecies of D. exulans, which they elevated to species status, and use the term wandering albatross to refer to a species complex that includes the proposed species D. antipodensis, D. dabbenena, D. exulans, and D. a. gibsoni.\n[…]\nImmature birds have been recorded weighing as much as 16.1 kg (35 lb) during their first flights (at which time they may still have fat reserves that will be shed as they continue to fly). On South Georgia, fledglings were found to average 10.9 kg (24 lb). Albatrosses from outside the \"snowy\" wandering albatross group (D. exulans) are smaller but are now generally deemed to belong to different species.\n[…]\nThe snowy albatross mates for life and breeds every other year. At breeding time they occupy loose colonies on isolated island groups in the Southern Ocean. When courting they will spread their wings, wave their heads, and rap their bills together while braying. Wanderers have a large range of displays from screams and whistles to grunts and bill clapping. They lay one egg that is white, with a few spots, and is about 10 cm (3.9 in) long. They lay between 10 December and 5 January.\n[…]\nLindsey, Terence (1986). The Seabirds of Australia. Angus & Robertson. ISBN 978-0-207-15192-7.\n[…]\nLindsey, Terence (22 June 2008). Albatrosses. Csiro Publishing. ISBN 978-0-643-09852-7.\n[…]\nDo albatrosses have personalities? – YouTube video, Museum of New Zealand Te Papa Tongarewa"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Albatroz-errante",
        "situacao": "ok",
        "texto": "Albatroz-errante, albatroz-gigante  ou albatroz-viageiro (Diomedea exulans) é uma ave da família Diomedeidae que ocorre na maior parte do oceano austral, das margens do gelo que circunda a Antártica (68°S) até o Trópico de Capricórnio (23°S) e, ocasionalmente, até mais ao norte, com alguns registros fora da Califórnia e no Atlântico Norte. Durante o inverno, a maior parte das aves se concentra ao \n[…]\nAs crias de albatroz-errante são quase totalmente marrons ao deixarem o ninho mas com a idade adquirem a plumagem branca e cinzenta, sendo machos mais brancos que as fêmeas. Os machos das ilhas Geórgia do Sul pesam entre 8,2 e 11,9 kg, enquanto as fêmeas, mais leves, pesam entre 6,4 e 8,7 kg. Este animal partilha com o Marabu e o condor-dos-andes a distinção de possuir a maior envergadura de asas das aves terrestres, variando de 2,90 a 3,50 metros.\n[…]\nO albatroz-errante nidifica em colônias dispersas com posturas que ocorrem entre dezembro e fevereiro e que resultam num único ovo. A incubação, partilhada por ambos os pais, dura cerca de 11 semanas e o filhote resultante leva 40 semanas para deixar o ninho (entre novembro e fevereiro). O período reprodutivo é longo (55 semanas) e bi-anual. Os albatrozes-errantes têm uma esperança de vida elevada e é provável que alguns indivíduos ultrapassem os 50 anos de idade.\n[…]\nEsta ave forrageia no talude ou fora da plataforma continental, daí seu nome de errante, onde captura presas principalmente na superfície, dada a limitada capacidade de submergir. Alimentam-se principalmente de lulas (35% da massa consumida pelos filhotes) e peixes (45%) mas também podem consumir carniça (como mamíferos marinhos mortos), tunicados, águas-vivas e crustáceos. A maior parte do alimento é obtida durante o dia, embora ocorra algum forrageamento durante as noites."
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Camelo",
      "descricao": "Mamífero do gênero Camelus, adaptado aos desertos, com uma ou duas corcovas nas costas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Ao contrário do que muita gente pensa, a corcova do camelo não guarda água. O que ela armazena?",
    "resposta": "Gordura",
    "fonte": [
      "https://en.wikipedia.org/wiki/Camel",
      "https://pt.wikipedia.org/wiki/Camelo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Camel",
        "situacao": "ok",
        "texto": "A camel (from Latin: camelus and Ancient Greek: κάμηλος (kamēlos) from Ancient Semitic: gāmāl) is an even-toed ungulate in the genus Camelus that bears distinctive fatty deposits known as \"humps\" on its back. Camels have long been domesticated and, as livestock, they provide food (camel milk and meat) and textiles (fiber and felt from camel hair). Camels are working animals especially suited to th\n[…]\nOf the 8 species placed in the genus Camelus, only three are extant. Fossils have been discovered of the five extinct species.\n[…]\nThe extinct species of Camelus discovered so far are:\n[…]\nThe last camel native to North America was Camelops hesternus, which vanished along with horses, short-faced bears, mammoths and mastodons, ground sloths, sabertooth cats, and many other megafauna as part of the Quaternary extinction event, coinciding with the migration of humans from Asia at the end of the Pleistocene, around 13–11,000 years ago.\n[…]\nAn extinct giant camel species, Camelus knoblochi, roamed Asia during the Late Pleistocene, before becoming extinct around 20,000 years ago.\n[…]\nThe introduction of the dromedary camel (Camelus dromedarius) as a pack animal to the southern Levant ... substantially facilitated trade across the vast deserts of Arabia, promoting both economic and social change (e.g., Kohler 1984; Borowski 1998: 112–116; Jasmin 2005). This ...\n[…]\nRamet, J. P. (2011). The Technology of Making Cheese from Camel Milk (Camelus Dromedarius). FAO Animal Production and Health Paper. Rome: Food and Agriculture Organization of the United Nations. ISBN 978-92-5-103154-4. ISSN 0254-6019. OCLC 476039542. Retrieved 6 December 2012."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Camelo",
        "situacao": "ok",
        "texto": "Os camelos (Camelus) constituem um género de ungulados artiodáctilos (com um par de dedos de apoio em cada pata) que contém duas espécies: o camelo-árabe, camelo-doméstico ou dromedário  (Camelus dromedarius), de uma corcova, e o camelo-bactriano (Camelus bactrianus), de duas corcovas. Ambos são nativos de áreas secas e desérticas da Ásia. Ambas as espécies são domesticadas, fornecendo leite e car\n[…]\nNa Austrália, em 2020, mais de 10 000 camelos selvagens serão mortos por atiradores profissionais porque bebem muita água, um bem necessário num momento em que o país está a ser devastado por incêndios, em parte porque os camelos usam muito dos limitados recursos necessários para os criadores de ovinos.\n[…]\nOs camelos não armazenam água em suas corcovas como comumente se acredita. As corcovas são realmente um reservatório de tecido adiposo. Concentrando-se a gordura corporal em suas corcovas minimizam o calor isolando todo o resto do seu corpo, que é uma das adaptações para viver em climas quentes. Quando este tecido é metabolizado, ele age como uma fonte de energia, e produz mais de 1 g de água para cada 1 g de gordura convertido por reação com o oxigênio do ar.\n[…]\nEste processo de metabolização de gordura gera uma perda líquida de água através da respiração para o oxigênio necessário para converter a gordura.\n[…]\nOs camelos têm bolsas onde guardam  substâncias nutritivas em forma de tecido adiposo.[carece de fontes]? Além disso a concentração de gordura no topo do corpo, em vez de distribuída, faz com que se evite a retenção de energia térmica.\n[…]\nÉ muito parecido com a outra espécie da família Camelidae que se pode encontrar atualmente no Velho Mundo, o camelo-árabe ou dromedário (Camelus dromedarius). O camelo-bactriano distingue-se do dromedário pelo seu tamanho maior e pela presença de duas bossas. Pensa-se que este último poderá ser um descendente do camelo-bactriano."
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Cacto",
      "descricao": "Planta da família Cactaceae, típica das Américas, de caule suculento que armazena água."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nos cactos, os espinhos são, na verdade, que parte da planta transformada?",
    "resposta": "Folhas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cactus",
      "https://pt.wikipedia.org/wiki/Cactaceae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cactus",
        "situacao": "ok",
        "texto": "A cactus (pl.: cacti, cactuses, or less commonly, cactus) is a member of the plant family Cactaceae (), a family of the order Caryophyllales comprising about 127 genera with some 1,750 known species. The word cactus derives, through Latin, from the Ancient Greek word κάκτος (káktos), a name originally used by Theophrastus for a spiny plant whose identity is now not certain. Cacti occur in a wide r\n[…]\nIt did, however, conserve the name Cactaceae, leading to the unusual situation in which the family Cactaceae no longer contains the genus after which it was named.\n[…]\nThe only genus in the ICSG classification was Pereskia. It has features considered closest to the ancestors of the Cactaceae. Plants are trees or shrubs with leaves; their stems are smoothly round in cross section, rather than being ribbed or having tubercles. Two systems may be used in photosynthesis, both the \"normal\" C3 mechanism and crassulean acid metabolism (CAM)—an \"advanced\" feature of cacti and other succulents that conserves water.\n[…]\nA 2005 study suggested the genus Pereskia as then circumscribed (Pereskia sensu lato) was basal within the Cactaceae, but confirmed earlier suggestions it was not monophyletic, i.e., did not include all the descendants of a common ancestor. The Bayesian consensus cladogram from this study is shown below with subsequent generic changes added.\n[…]\nNine tribes are recognized within Cactoideae in the International Cactaceae Systematics Group (ICSG) classification; one, Calymmantheae, comprises a single genus, Calymmanthium. Only two of the remaining eight – Cacteae and Rhipsalideae – were shown to be monophyletic in a 2011 study by Hernández-Hernández et al. For a more detailed discussion of the phylogeny of the cacti, see Classification of the Cactaceae.\n[…]\nCactaceae Programme at Rhodes University (2018-05-14; accessed 2021-12-02)\n[…]\nCactaceae observations at iNaturalist"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cactaceae",
        "situacao": "ok",
        "texto": "As cactáceas (Cactaceae) são uma família botânica de arbustos, árvores, ervas, lianas e subarbustos representada pelos cactos ou catos. São aproximadamente 142 gêneros e 1793 espécies aceitas. Os ramos longos, geralmente suculentos e alguns até comestíveis, produzem folhas fotossintéticas e os caules curtos produzem folhas modificadas em espinhos ou conjunto deles; estípulas ausentes e fruto tipo \n[…]\nA família cactaceae apresenta diferenciação de ramos, sendo eles curtos ou longos. As folhas presentes nos ramos longos são fotossintéticas, alternas e espiraladas, com venação perinérvea ou inconspícua, variando desde reduzidas á ausentes. Já as folhas dos ramos curtos são modificadas em espinhos, frequentemente produzindo pelos irritantes (gloquídeos), com metabolismo ácido das crassuláceas (CAM)\n[…]\nOs cactus apresentam numerosas adaptações a ambientes secos. Ramos dimórficos e folhas reduzidas, alguns caules são fotossintéticos e apresentam tecidos que estocam ou acumulam água; outros apresentam folhas reduzidas e modificadas em espinhos protetores. O metabolismo CAM permite que os estômatos se abram durante a noite (economia de água) de modo a captar o dióxido de carbono que é estocado na forma de ácido málico e utilizado na fotossíntese durante o próximo dia.\n[…]\nCactaceae é uma família monofilética, sendo que tal colocação é sustentada por numerosos caracteres morfológicos e dados de sequências de DNA. O gênero Pereskia retém inúmeros estados de caráter plesiomórfico como caules não suculentos, folhas bem desenvolvidas e persistentes, inflorescências cinosas, muitos estiletes e em algumas espécies ovário súpero com placentação basal. Todos esses estados estão ausentes nos outros integrantes da família.\n[…]\nO povo Moche do antigo Peru louvava a agricultura e frequentemente representava os cactos em sua arte."
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Rato-toupeira-pelado",
      "descricao": "Roedor sem pelos Heterocephalus glaber, que vive em colônias subterrâneas no leste da África."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Numa colônia de ratos-toupeira-pelados, que cavam túneis sob o solo seco da África Oriental, só uma fêmea tem filhotes. Como ela é chamada?",
    "resposta": "Rainha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Naked_mole-rat",
      "https://pt.wikipedia.org/wiki/Rato-toupeira-pelado"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Naked_mole-rat",
        "situacao": "ok",
        "texto": "The naked mole-rat (Heterocephalus glaber), also known as the sand puppy, is a burrowing rodent native to the Horn of Africa and parts of Kenya, notably in Somali regions. It is the only species in the genus Heterocephalus.\n[…]\nAlthough closely related to the blesmols, more recent investigation places it in a separate, exclusive family, Heterocephalidae, and no longer in the same family as other African mole-rats, Bathyergidae.\n[…]\nNaked mole-rats choose hypoxic environments over normoxic air when given a choice, behaviour not commonly observed among mammals.\n[…]\nThe naked mole-rat's subterranean habitat imposes constraints on its circadian rhythm. Living in constant darkness, most individuals possess a free-running activity pattern and are active both day and night, sleeping for short periods several times in between. However, colonies do not exhibit synchrony in circadian sleep-wake cycles.\n[…]\nThe naked mole-rat is native to the drier parts of the tropical grasslands of East Africa, predominantly southern Ethiopia, Kenya, and Somalia.\n[…]\nIn lab experiments, reproductively active female naked mole rats tended to associate with unfamiliar males (usually non-kin) when given a choice, whereas reproductively inactive females did not discriminate. The preference of queens for unfamiliar males likely is an adaptation to reduce inbreeding; however, within established colonies queens rarely have opportunities to express such preferences.\n[…]\nNaked mole-rats are not threatened. They are widespread and numerous, but, being subterranean, they are essentially unnoticeable in the drier regions of East Africa (except for their small \"volcanoes\" of ejected earth).\n[…]\nKim Possibles sidekick Ron Stoppables pet Rufus is a naked mole rat."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rato-toupeira-pelado",
        "situacao": "ok",
        "texto": "O rato-toupeira-nu (português europeu) ou rato-toupeira-pelado (português brasileiro) (Heterocephalus glaber) é um roedor da família Bathyergidae e a única espécie do gênero Heterocephalus.\n[…]\nOs ratos-toupeiros-nus vivem de forma muito similar às formigas. Essa espécie de rato é conhecida por viver a vida inteira (ou maior parte dela), por debaixo do solo, raramente sendo vistos na superfície. A rainha do grupo acasala-se com um único macho, é ela quem comanda os outros membros do grupo, ela mantém o controle através dos feromônios que libera em sua urina, quando os outros entram em contato com a urina ficam suscetíveis a ela.\n[…]\nCada colônia possui seu próprio dialeto,o mesmo é decidido pela rainha.[carece de fontes]?\n[…]\nA rainha impede qualquer membro do grupo de acasalar, as fêmeas são impedidas através dos feromônios, os machos são surrados e empurrados por ela quando estão com interesses reprodutivos. A reprodução por parte dos membros do grupo só é feita quando um macho sai da toca, a procura de outra para poder acasalar.[carece de fontes]?==Referências==\n[…]\nMAREE, S.; FAULKES, C. 2008. Heterocephalus glaber. In: IUCN 2008. 2008 IUCN Red List of Threatened Species. <www.iucnredlist.org>. Acessado em 10 de novembro de 2008.\n[…]\nBRIGGS, H. \"Naked mole-rat gives cancer clues\". In: BBC News Health. [1][ligação inativa]. Acessado em 20 de junho de 2013.\n[…]\ncaracteristicas: https://www.maisconhecer.com/mundo/2801/Revelados-segredos-da-resistencia-ao-cancer-de-ratos-toupeira-nus\n[…]\n«DNA de 'rato pelado' traz pistas para estudos antivelhice»"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Coral",
      "descricao": "Animal marinho colonial do filo Cnidaria, formado por pólipos, que constrói os recifes de coral."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Muitos corais devem suas cores e boa parte do alimento a algas microscópicas que vivem dentro de seus tecidos. Como se chamam essas algas?",
    "resposta": "Zooxantelas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Zooxanthellae",
      "https://pt.wikipedia.org/wiki/Zooxantela"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zooxanthellae",
        "situacao": "ok",
        "texto": "Zooxanthellae (; sing. zooxanthella) is a colloquial term for photosynthetic single-celled organisms capable of symbiosis with diverse marine invertebrates such as corals, jellyfish, demosponges, and nudibranchs. Most known zooxanthellae are in the dinoflagellate genus Symbiodinium, but some are known from the genus Amphidinium, and other taxa, as yet unidentified, may have similar endosymbiont af\n[…]\nSuch indirect acquisition can result in the new host being infected by a species of zooxanthella different from that present in its parent.\n[…]\nThis in turn strips the coral of its color, in this phenomenon known as coral bleaching, where the now-transparent tissues of the coral reveal its white internal skeletal structure. Variations in salinity, light intensity, temperature, pollution, sedimentation, and disease can all impact the photosynthetic efficiency of zooxanthellae or result in expulsion from their mutualistic relationships.\n[…]\nCoral is not the only aquatic organism to be affected by bleaching and the expulsion of zooxanthellae; clams have also been found to undergo a similar process when temperatures become too high. However, clams discard zooxanthellae that are still alive and have been observed being able to recover them. This not only has positive indications for the clams themselves, but also the surrounding ecosystem. For many organisms, clams are a vital part of the food chain.\n[…]\nThe relationship between jellyfish and zooxanthellae is affected a little differently than coral in terms of climate change despite both of them being a part of the cnidaria family. One study suggested that certain species of jellyfish and their symbiotic zooxanthellae may have some type of resistance to decreasing pH caused by climate change to a certain point. Although, jellyfish bleaching events have been documented during extreme heat events."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zooxantela",
        "situacao": "ok",
        "texto": "Zooxantela, por vezes simplesmente xantela ou zoox, é a designação dada ao conjunto de organismos unicelulares fotossintéticos de coloração amarelada ou acastanhada (quando verdes são geralmente referidos por zooclorelas), pertencentes a diversos taxa, que vivem em endossimbiose com os corais, nudibrânquios e outros animais e protistas heterotróficos marinhos.\n[…]\nAs zooxantelas vivem no interior do corpo do hospedeiro, imersas no protoplasma celular ou ocupando o espaço intercelular, e través da fotossíntese alimentam o hospedeiro com açúcares, aminoácidos e outros produtos orgânicos e recebendo dele dióxido de carbono e nutrientes. Esta relação simbiótica favorece ambos os organismos, permitindo manter o crescimento num meio pobre em nutrientes dissolvidos e em suspensão e por isso com baixa produtividade primária planctónica.\n[…]\nTodos os corais envolvidos na construção dos recifes de coral tropicais têm zooxantelas como endossimbiontes, devendo à sua presença a coloração que ostentam.\n[…]\nNos foraminíferos a simbiose é opcional, sendo que, em princípio, ambas as espécies podem viver isoladas, mas no caso dos corais hermatípicos (os corais que criam os recifes de coral tropicais) a simbiose é obrigatória, já que a perda das zooxantelas leva à descoloração dos corais (o branqueamento dos corais) e à sua morte. Essa dependência resulta das zooxantelas absorverem o dióxido de carbono libertado pelos corais e fornecerem diversos nutrientes de volta.\n[…]\nOs aminoácidos produzidos pelos pólipos estimulam a produção de glicerol, composto directamente relacionada com a respiração do coral. A redução da vitalidade ou o desaparecimento das zooxantelas está na origem do colapso de alguns ecossistemas coralinos dos trópicos e subtrópicos.\n[…]\nWhat are Zooxanthellae?\n[…]\nH. G. Smith, \"The Significance of the relationship between actinians and zooxanthellae\""
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Tundra",
      "descricao": "Bioma frio e sem árvores das regiões árticas e das altas montanhas, de vegetação rasteira."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na tundra, abaixo da camada de solo que descongela no verão, existe um chão que fica congelado o ano inteiro. Como ele se chama?",
    "resposta": "Permafrost",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tundra",
      "https://pt.wikipedia.org/wiki/Permafrost"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tundra",
        "situacao": "ok",
        "texto": "In physical geography, a tundra () is a type of biome where tree growth is hindered by frigid temperatures and short growing seasons. There are three regions and associated types of tundra: Arctic, Alpine, and Antarctic.\n[…]\nTundra vegetation is composed of dwarf shrubs, sedges, grasses, mosses, and lichens. Scattered trees grow in some tundra regions. The ecotone (or ecological boundary region) between the tundra and the forest is known as the tree line or timberline. The tundra soil is rich in nitrogen and phosphorus. The soil also contains large amounts of biomass and decomposed biomass that has been stored as methane and carbon dioxide in the permafrost, making the tundra soil a carbon sink.\n[…]\nArctic tundra occurs in the far Northern Hemisphere (Arctic), north of the taiga belt. The word \"tundra\" usually refers only to the areas where the subsoil is permafrost, or permanently frozen soil. (It may also refer to the treeless plain in general so that northern Sápmi would be included.) Permafrost tundra includes vast areas of northern Russia and Canada.\n[…]\nThe polar tundra is home to several peoples who are mostly nomadic reindeer herders, such as the Nganasan and Nenets in the permafrost area (and the Sámi in Sápmi).\n[…]\nA severe threat to tundra is climate change, which causes permafrost to thaw. The thawing of the permafrost in a given area on human time scales (decades or centuries) could radically change which species can survive there. It also represents a significant risk to infrastructure built on top of permafrost, such as roads and pipelines.\n[…]\nTundra of North America\n[…]\nInternational Tundra Experiment\n[…]\nArctic Feedbacks to Global Warming: Tundra Degradation in the Russian Arctic\n[…]\nWorld Map of Tundra"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Permafrost",
        "situacao": "ok",
        "texto": "O permafrost ou pergelissolo (em português) é uma camada do subsolo da crosta terrestre que está permanentemente congelada. A maior parte está localizada no hemisfério norte, concentrando-se, principalmente, na região do Ártico, sobretudo em partes da Rússia (Sibéria), Estados Unidos (Alasca), Canadá e Dinamarca (Groenlândia).\n[…]\nO permafrost é o solo que permanece a 0°C ou abaixo dele por pelo menos dois anos consecutivos. Foi originalmente concebido como solo perenemente congelado, mas a definição atualmente adotada é baseada na temperatura e não no estado de congelamento-descongelamento da água no meio.\n[…]\nPela mesma razão, existe uma camada na base do permafrost, conhecida como criopega, que tem temperatura abaixo de 0°C, mas com água ainda descongelada. Talik ou zona perenemente descongelada é encontrada abaixo do permafrost, mas também pode estar localizada dentro ou acima do permafrost.\n[…]\nO desenvolvimento do permafrost também é prejudicado por inundações, que podem adicionar calor ao solo e também podem depositar sedimentos que destroem qualquer cobertura isolante de líquen e musgo.\n[…]\nSolos e rochas: diferentes materiais de rocha e solo possuem distintas características de condutividade térmica e capacidade de calor. Isso resulta em uma variação significativa na espessura da camada ativa e pode até determinar se o permafrost está presente ou ausente em zonas descontínuas de permafrost.\n[…]\nO permafrost é definido como um solo permanentemente congelado que permanece a zero ou abaixo de zero graus Celsius por dois anos ou mais. Ele contém material orgânico que normalmente se decompõe lentamente. Mas quando o permafrost derrete, bactérias e fungos decompõem o carbono contido na matéria orgânica muito mais rapidamente, liberando-o na atmosfera como dióxido de carbono ou metano - gases de efeito estufa."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Polo Norte",
      "descricao": "Polo Norte geográfico, ponto mais ao norte da Terra, no meio do Oceano Ártico."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Ao contrário do Polo Sul, que fica sobre um continente, o que existe debaixo do gelo do Polo Norte?",
    "resposta": "Oceano Ártico",
    "fonte": [
      "https://en.wikipedia.org/wiki/North_Pole",
      "https://pt.wikipedia.org/wiki/Polo_Norte"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/North_Pole",
        "situacao": "ok",
        "texto": "The North Pole, also known as the Geographic North Pole or Terrestrial North Pole, is the point in the Northern Hemisphere where the Earth's axis of rotation meets its surface. It is called the True North Pole to distinguish from the Magnetic North Pole.\n[…]\nIn May 1937 the world's first North Pole ice station, North Pole-1, was established by Soviet scientists 20 kilometres (13 mi) from the North Pole after the ever first landing of four heavy and one light aircraft onto the ice at the North Pole. The expedition members — oceanographer Pyotr Shirshov, meteorologist Yevgeny Fyodorov, radio operator Ernst Krenkel, and the leader Ivan Papanin — conducted scientific research at the station for the next nine months.\n[…]\nDiscounting Peary's disputed claim, the first men to set foot at the North Pole were a Soviet party including geophysicists Mikhail Ostrekin and Pavel Senko, oceanographers Mikhail Somov and Pavel Gordienko, and other scientists and flight crew (24 people in total) of Aleksandr Kuznetsov's Sever-2 expedition (March–May 1948). It was organized by the Chief Directorate of the Northern Sea Route.\n[…]\nOn 7 September 1991 the German research vessel Polarstern and the Swedish icebreaker Oden reached the North Pole as the first conventional powered vessels. Both scientific parties and crew took oceanographic and geological samples and had a common tug of war and a football game on an ice floe. Polarstern again reached the pole exactly 10 years later, with the Healy.\n[…]\nVideo of the Nuclear Icebreaker Yamal visiting the North Pole in 2001 Archived 1 January 2020 at the Wayback Machine\n[…]\nPolar Discovery: North Pole Observatory Expedition Archived 23 February 2008 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Polo_Norte",
        "situacao": "ok",
        "texto": "O Polo Norte, também chamado Polo Norte Geográfico ou Polo Norte Terrestre, é o ponto do Hemisfério Norte onde o eixo de rotação da Terra encontra sua superfície. Também é chamado Polo Norte verdadeiro para distingui-lo do Polo Norte Magnético.\n[…]\nEnquanto o Polo Sul fica sobre a massa continental da Antártida, o Polo Norte está no meio do Oceano Ártico, em águas quase permanentemente cobertas por gelo marinho em constante movimento. A profundidade do mar no Polo Norte foi medida em 4.261 m pelo submersível russo Mir em 2007, durante a Arktika 2007, e em 4.087 m pelo USS Nautilus em 1958. Isso torna impraticável a construção de uma estação permanente no Polo Norte, ao contrário do que ocorre no Polo Sul.\n[…]\nEm 2 de agosto de 2007, a expedição científica russa Arktika 2007 realizou a primeira descida tripulada ao fundo oceânico no Polo Norte, a uma profundidade de 4,3 km. A operação fazia parte de um programa de pesquisa relacionado à reivindicação russa de 2001 para extensão da plataforma continental sobre uma grande área do fundo do Oceano Ártico. A descida foi feita em dois submersíveis MIR e liderada pelo explorador polar soviético e russo Artur Chilingarov.\n[…]\nEm 1.º de março de 2013, a Marine Live-Ice Automobile Expedition russa, MLAE 2013, liderada por Vasily Elagin e formada por Afanasy Makovnev, Vladimir Obikhod, Alexey Shkrabkin, Andrey Vankov, Sergey Isayev e Nikolay Kozlov, partiu da Ilha Golomyanny, no arquipélago de Severnaya Zemlya, em direção ao Polo Norte. O grupo usava dois veículos 6×6 de pneus de baixa pressão construídos especialmente para a viagem, Yemelya-3 e Yemelya-4, e avançou sobre o gelo à deriva do Oceano Ártico.\n[…]\nÁrtico, região polar que circunda o Polo Norte\n[…]\nFAQ on the Arctic and the North Pole"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Estalactite",
      "descricao": "Formação mineral que pende do teto de cavernas, depositada pela água que goteja."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Nas cavernas de calcário, estalactites e estalagmites são formadas principalmente por que mineral?",
    "resposta": "Calcita",
    "distratores": [
      "Quartzo",
      "Gipsita",
      "Halita"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Stalactite",
      "https://pt.wikipedia.org/wiki/Estalactite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stalactite",
        "situacao": "ok",
        "texto": "A stalactite (UK: , US: ; from Ancient Greek  σταλακτός (stalaktós) 'dripping', from  σταλάσσειν (stalássein) 'to drip') is a mineral formation that hangs from the ceiling of caves, hot springs, or man-made structures such as bridges and mines. Any material that is soluble and that can be deposited as a colloid, or is in suspension, or is capable of being melted, may form a stalactite.\n[…]\nStalactites may be composed of lava, minerals, mud, peat, pitch, sand, sinter, and amberat (crystallized urine of pack rats). A stalactite is not necessarily a speleothem, though speleothems are the most common form of stalactite because of the abundance of limestone caves.\n[…]\nAll limestone stalactites begin with a single mineral-laden drop of water. When the drop falls, it deposits the thinnest ring of calcite. Each subsequent drop that forms and falls deposits another calcite ring. Eventually, these rings form a very narrow (≈4 to 5 mm diameter), hollow tube commonly known as a \"soda straw\" stalactite. Soda straws can grow quite long, but are very fragile.\n[…]\nIf they become plugged by debris, water begins flowing over the outside, depositing more calcite and creating the more familiar cone-shaped stalactite.\n[…]\nThe same water drops that fall from the tip of a stalactite deposit more calcite on the floor below, eventually resulting in a rounded or cone-shaped stalagmite. Unlike stalactites, stalagmites never start out as hollow \"soda straws\". Given enough time, these formations can meet and fuse to create a speleothem of calcium carbonate known as a pillar, column, or stalagnate.\n[…]\nOne of the longest stalactites viewable by the general public is in Pol an Ionain (Doolin Cave), County Clare, Ireland, in a karst region known as The Burren; what makes it more impressive is the fact that the stalactite is held on by a section of calcite less than 0.3 m2 (3.2 sq ft)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Estalactite",
        "situacao": "ok",
        "texto": "Estalactites são formações rochosas sedimentares, mais explicitamente rochas sedimentares quimiogénicas, que se originam no teto de uma gruta ou caverna, crescendo para baixo, em direção ao chão, pela deposição (precipitação) lenta e contínua de carbonato de cálcio arrastado pela água que goteja do teto ou que sofre evaporação enquanto ainda no estalactite. Apresentam muito frequentemente uma form\n[…]\nEstalagmite"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Neve marinha",
      "descricao": "Chuva contínua de partículas orgânicas que desce das camadas superiores do oceano para as profundezas."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Nas profundezas do oceano, cai sem parar uma neve marinha que alimenta muitos seres do fundo. Do que ela é feita?",
    "resposta": "Restos orgânicos",
    "distratores": [
      "Cristais de sal",
      "Cinza vulcânica",
      "Bolhas de gás"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Marine_snow"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marine_snow",
        "situacao": "ok",
        "texto": "In the deep ocean, marine snow is a continuous shower of mostly organic detritus falling from the upper layers of the water column. It is a significant means of exporting energy from the light-rich photic zone to the aphotic zone below, which is referred to as the biological pump. Export production is the amount of organic matter produced in the ocean by primary production that is not recycled (re\n[…]\nAs illustrated in the diagram, phytoplankton fix carbon dioxide in the euphotic zone using solar energy and produce particulate organic carbon. The particulate organic carbon formed in the euphotic zone is processed by marine microorganisms (microbes), zooplankton and their consumers into organic aggregates (marine snow), which is then exported to the mesopelagic (200–1000 m depth) and bathypelagic zones by sinking and vertical migration by zooplankton and fish.\n[…]\nThe largest component of biomass are marine protists (eukaryotic microorganisms). Marine snow aggregates collected from the bathypelagic zone were found to consist largely of fungi and labyrinthulomycetes. Smaller aggregates do not harbor as many eukaryotic organisms which is similar to what is found in the deep ocean. The bathypelagic aggregates mostly resembled those found in the surface ocean. It implies higher rates of remineralization in the bathypelagic zone.\n[…]\nConsequently, enhancing the quantity of marine snow that reaches the deep ocean is the basis of several geoengineering schemes to enhance carbon sequestration by the ocean. Ocean nourishment and iron fertilisation seek to boost the production of organic material in the surface ocean, with a concomitant rise in marine snow reaching the deep ocean. These efforts have not yet produced a sustainable fertilization that effectively transports carbon out of the system.\n[…]\nParticulate organic matter\n[…]\nU. Bangor, Marine Snow: Formation and composition"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Neve_marinha",
        "situacao": "ok",
        "texto": "A neve marinha é formada por pequenas partículas de matéria orgânica que caem no fundo do mar em altas concentrações e dão a impressão de que são neve, daí o seu nome. É um meio importante de exportação de energia rica em luz da zona eufótica para a zona afótica. O termo foi inventado primeiramente pelo explorador William Beebe quando ele observava o mar de sua batisfera.\n[…]\nÉ constituída por uma variedade de Micro-organismos, como bactérias e células de fitoplâncton, bem como restos de outros organismos, restos fecais, partículas de areia fina, massas de matéria orgânica e plantas que vivem na parte mais próxima da superfície do mar, como algas, que ao cairem para o fundo do mar servem de alimento para os organismos que ali vivem.\n[…]\nÉ um processo em que a matéria orgânica das partículas da neve marinha se transformam na parte superior do mar e iluminada atingem as camadas intermediárias e até mesmo na profunda e escura zona abissal. Com uma queda média de 20 metros por dia, leva semanas até chegar ao fundo.\n[…]\nConstituem uma parte importante da cadeia alimentar de muitos animais da zona abissal, que se alimentam de restos de organismos mortos que descem entre as correntes pela neve marinha até chegar as profundezas do oceano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Pamukkale",
      "descricao": "Sítio no sudoeste da Turquia com terraços brancos de fontes termais, ao lado das ruínas de Hierápolis."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Os terraços brancos de Pamukkale, na Turquia, parecem neve, mas foram formados por fontes termais. De que rocha eles são feitos?",
    "resposta": "Travertino",
    "distratores": [
      "Mármore",
      "Gipsita",
      "Sal-gema"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pamukkale",
      "https://pt.wikipedia.org/wiki/Pamukkale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pamukkale",
        "situacao": "ok",
        "texto": "Pamukkale, (Turkish pronunciation: [pa.mukˈka.le]) meaning \"cotton castle\" in Turkish, is a natural site in Denizli Province in southwestern Turkey. The area is famous for a carbonate mineral left by the flowing of thermal spring water. It is located in Turkey's Inner Aegean region, in the River Menderes valley, which has a temperate climate for most of the year.\n[…]\nThe ancient Greek city of Hierapolis was built on top of the travertine formation which is in total about 2,700 metres (8,860 ft) long, 600 m (1,970 ft) wide and 160 m (525 ft) high. It can be seen from the hills on the opposite side of the valley in the town of Denizli, 20 km away. This area has been drawing visitors to its thermal springs since the time of classical antiquity.\n[…]\nPamukkale's terraces are made of travertine, a sedimentary rock deposited by mineral water from the hot springs. In this area, there are 17 hot springs with temperatures ranging from 35 °C (95 °F) to 100 °C (212 °F). The water that emerges from the spring is transported 320 metres (1,050 ft) to the head of the travertine terraces and deposits calcium carbonate on a section 60 to 70 metres (200 to 230 ft) long covering an expanse of 24 metres (79 ft) to 30 metres (98 ft).\n[…]\nPamukkale is one of the most visited natural sites in Turkey, attracting more than two million visitors annually. Tourists can bathe in designated thermal pools, including the famous Cleopatra’s Pool, where ancient marble columns lie submerged. To protect the delicate travertine terraces, UNESCO and local authorities regulate the water flow and periodically close certain sections, allowing the formations to regenerate naturally.\n[…]\nThese locations are also well known for their travertine formations:\n[…]\nHierapolis-Pamukkale at NASA Earth Observatory\n[…]\nTop Tips For Visiting Pamukkale In The Summer\n[…]\nPlaces to visit in Pamukkale\n[…]\nPamukkale otelleri"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pamukkale",
        "situacao": "ok",
        "texto": "Pamukkale, (\"castelo de algodão\") em turco está situado em Denizli, Turquia. É um conjunto de piscinas termais de origem calcária que com o passar dos séculos formaram bacias gigantescas de água que descem em cascata numa colina. A formação do Pamukkale deve-se aos locais térmicos quentes por baixo do monte que provocam o derrame de carbonato de cálcio, que depois solidifica como mármore travertin\n[…]\nPamukkale, castelo de algodão - Thewotme travel blog"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Pamukkale",
      "descricao": "Sítio no sudoeste da Turquia com terraços brancos de fontes termais, ao lado das ruínas de Hierápolis."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em turco, o nome Pamukkale, dos terraços brancos formados por fontes termais, significa castelo de quê?",
    "resposta": "Algodão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pamukkale",
      "https://pt.wikipedia.org/wiki/Pamukkale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pamukkale",
        "situacao": "ok",
        "texto": "Pamukkale, (Turkish pronunciation: [pa.mukˈka.le]) meaning \"cotton castle\" in Turkish, is a natural site in Denizli Province in southwestern Turkey. The area is famous for a carbonate mineral left by the flowing of thermal spring water. It is located in Turkey's Inner Aegean region, in the River Menderes valley, which has a temperate climate for most of the year.\n[…]\nPamukkale's terraces are made of travertine, a sedimentary rock deposited by mineral water from the hot springs. In this area, there are 17 hot springs with temperatures ranging from 35 °C (95 °F) to 100 °C (212 °F). The water that emerges from the spring is transported 320 metres (1,050 ft) to the head of the travertine terraces and deposits calcium carbonate on a section 60 to 70 metres (200 to 230 ft) long covering an expanse of 24 metres (79 ft) to 30 metres (98 ft).\n[…]\nPamukkale is one of the most visited natural sites in Turkey, attracting more than two million visitors annually. Tourists can bathe in designated thermal pools, including the famous Cleopatra’s Pool, where ancient marble columns lie submerged. To protect the delicate travertine terraces, UNESCO and local authorities regulate the water flow and periodically close certain sections, allowing the formations to regenerate naturally.\n[…]\nPamukkale is recognized as a World Heritage Site together with Hierapolis. Hierapolis-Pamukkale was made a World Heritage Site in 1988. It is a tourist attraction because of this status and its natural beauty.\n[…]\nThe city of Pamukkale has two sister cities:\n[…]\nPink and White Terraces in New Zealand\n[…]\nPamukkale official site\n[…]\nPamukkale—spherical 360 degree panorama\n[…]\nThe Marble Stairs of Heaven on Earth: Pamukkale\n[…]\nHierapolis-Pamukkale at NASA Earth Observatory\n[…]\nVideo from Pamukkale (4k, UltraHD)\n[…]\nTop Tips For Visiting Pamukkale In The Summer\n[…]\nPlaces to visit in Pamukkale\n[…]\nPamukkale otelleri"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pamukkale",
        "situacao": "ok",
        "texto": "Pamukkale, (\"castelo de algodão\") em turco está situado em Denizli, Turquia. É um conjunto de piscinas termais de origem calcária que com o passar dos séculos formaram bacias gigantescas de água que descem em cascata numa colina. A formação do Pamukkale deve-se aos locais térmicos quentes por baixo do monte que provocam o derrame de carbonato de cálcio, que depois solidifica como mármore travertin\n[…]\nPamukkale, castelo de algodão - Thewotme travel blog"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Sucessão ecológica",
      "descricao": "Processo de mudança gradual das comunidades de seres vivos num lugar ao longo do tempo, desde a colonização inicial."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Numa rocha nua, ainda sem solo, que organismos costumam chegar primeiro e abrir caminho para a sucessão ecológica?",
    "resposta": "Liquens",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pioneer_species",
      "https://pt.wikipedia.org/wiki/Sucess%C3%A3o_ecol%C3%B3gica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pioneer_species",
        "situacao": "ok",
        "texto": "Pioneer species are resilient species that are the first to colonize barren environments, or to repopulate disrupted biodiverse steady-state ecosystems as part of ecological succession.\n[…]\nPioneer species eventually die, create plant litter, and break down as \"leaf mold\" after some time, making new soil for secondary succession, and releasing nutrients for small fish and aquatic plants in adjacent bodies of water.\n[…]\nThe concept of ecologic succession also applies to underwater habitats. If a space becomes newly available in a reef surrounding, haplosclerid and calcareous sponges are the first animals to initially occur in this environment in greater numbers than other species. These types of sponges grow faster and have a shorter life-span than the species which follow them in this habitat.\n[…]\nDue to harsh impacts from grazing livestock in certain areas, soils may be degraded by erosion, resulting in shallow soils. In restoration efforts, certain pioneer species are used which can withstand poor growing conditions. Black locust (Robinia pseudoacacia) is often used to restore post-grazing pastures, because it can grow in eroded environments and has nitrogen-fixing abilities, which add nutrients to the soil and improve the chance of success for other plant species.\n[…]\nOver time, black locust adds organic matter and increases the depth of soil, which helps other species of plants reestablish.\n[…]\nThe term pioneer species is also used to refer to the first species, usually plants, to return to an area after disturbance as part of the process of secondary succession. Disturbances may include floods, tornadoes, forest fires, deforestation, or clearing by other means."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sucess%C3%A3o_ecol%C3%B3gica",
        "situacao": "ok",
        "texto": "Sucessão ecológica é a sequência de comunidades, desde a colonização até à comunidade clímax, de um determinado  ecossistema. Estas comunidades vão sofrendo mudanças ordenadas e graduais.\n[…]\nAs primeiras plantas que se estabelecem (líquens, gramíneas) são denominadas pioneiras, e vão gradualmente sendo substituídas por outras espécies de porte médio (arbustos), até que as condições ambientais chegam a uma comunidade clímax (árvores grandes), apresentando uma diversidade compatível com as características daquele ambiente. Nesta fase, o ecossistema apresenta um equilíbrio com o meio.\n[…]\nUma teoria apresentada recentemente, chamada Teoria Alternativa dos Estados Estáveis, sugere que não há um ponto final na sucessão, mas muitos estados de transição ao longo do tempo ecológico (Jackson, 2003).\n[…]\nA sucessão não é iniciada por espécies que normalmente ocupam áreas abertas (como as gramíneas). Devido às barreiras dentro de uma floresta, existe a dificuldade de disseminação destes propágulos pelo vento, e as espécies próximas, ou disseminadas por animais são as pioneiras nestas áreas. Sementes que ficam por anos em estado de dormência no solo da floresta são denominados de bancos de semente.\n[…]\nO estudo das características da dinâmica da sucessão ecológica é de suma importância para recuperação de áreas degradadas, como as áreas exploradas por mineração, das matas ciliares destruídas, para recomposição de áreas de preservação, etc. Uma vez conhecendo as plantas pioneiras que oferecem condições de implantação das espécies intermediárias e tardias, o ecossistema tende a alcançar a comunidade clímax em um menor espaço de tempo.\n[…]\nUSP - Sucessão Ecológica"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Urso-polar",
      "descricao": "Urso das regiões árticas, espécie Ursus maritimus."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Debaixo do pelo que parece branco, de que cor é a pele do urso-polar?",
    "resposta": "Preta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Polar_bear",
      "https://pt.wikipedia.org/wiki/Urso-polar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Polar_bear",
        "situacao": "ok",
        "texto": "The polar bear (Ursus maritimus) is a large bear native to the Arctic and nearby areas. It is closely related to the brown bear, and the two species can interbreed. The polar bear is the largest extant species of bear and land carnivore by body mass, with adult males weighing 300–800 kg (660–1,760 lb). The species is sexually dimorphic, as adult females are much smaller. The polar bear is white or\n[…]\nCarl Linnaeus classified the polar bear as a type of brown bear (Ursus arctos), labelling it as Ursus maritimus albus-major, arcticus ('mostly-white sea bear, arctic') in the 1758 edition of his work Systema Naturae. Constantine John Phipps formally described the polar bear as a distinct species, Ursus maritimus in 1774, following his 1773 voyage towards the North Pole.\n[…]\nBecause of its adaptations to a marine environment, some taxonomists, such as Theodore Knottnerus-Meyer, have placed the polar bear in its own genus, Thalarctos. However Ursus is widely considered to be the valid genus for the species on the basis of the fossil record and the fact that it can breed with the brown bear.\n[…]\nDifferent subspecies have been proposed including Ursus maritimus maritimus and U. m. marinus. However, these are not supported, and the polar bear is considered to be monotypic. One possible fossil subspecies, U. m. tyrannus, was posited in 1964 by Björn Kurtén, who reconstructed the subspecies from a single fragment of an ulna which was approximately 20 percent larger than expected for a polar bear.\n[…]\n2011 Svalbard polar bear attack\n[…]\nInternational Polar Bear Day\n[…]\nList of individual bears – includes individual captive polar bears\n[…]\nPolar Bears International – conservation organization\n[…]\nPolar Bear Shores – an exhibit featuring polar bears at Sea World in Australia\n[…]\nPolar Bears International website\n[…]\nARKive—images and movies of the polar bear (Ursus maritimus)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Urso-polar",
        "situacao": "ok",
        "texto": "O urso-polar (nome científico: Ursus maritimus), também conhecido como urso-branco, é uma espécie de mamífero carnívoro da família Ursidae encontrada no círculo polar Ártico. Ele é o maior carnívoro terrestre conhecido e também o maior urso, juntamente com o urso-de-kodiak, uma subespécie do urso-pardo, que tem aproximadamente o mesmo tamanho.\n[…]\nA espécie foi descrita como Ursus maritimus por Constantine John Phipps, 2º Barão de Mulgrave, em seu livro \"A voyage towards the North Pole\" publicado em 1774. (a) Em 1825, John Edward Gray cunhou o termo genérico Thalarctos(b) para o urso-polar levando em conta as diferenças na coloração, formato do crânio, número de pré-molares e nos hábitos.\n[…]\nEntretanto, a subdivisão do urso-polar em duas subespécies não têm justificativa. Uma subespécie fóssil, Ursus maritimus tyrannus, foi identificada por Björn Kurtén em 1964, baseada em uma única ulna encontrada em Kew Bridge, Londres, datada do Pleistoceno. Entretanto, uma reanálise feita por pesquisadores do Museu de História Natural de Londres concluiu que o espécime de Kew é na verdade um variedade de Ursus arctos.\n[…]\nA pelagem tem geralmente uma aparência branca, mas pode ser amarelada no verão, devido à oxidação provocada pelo sol ou pode até parecer cinzenta ou castanha, dependendo da estação e das condições de iluminação. A pele é preta, assim como o focinho e os lábios, e o pelo é incolor devido a falta de pigmento. A aparência branca é o resultado da luz sendo refletida a partir dos pelos transparentes.\n[…]\nO urso-polar também é usado como mascote por algumas empresas, como a Fox's Glacier Mints, que tem como mascote \"Peppy\" desde 1922, a Bundaberg Rum usa o \"Bundy bear\" desde 1961, e a Polar Beverages que usa o urso \"Orson\" desde 1902.\n[…]\n«WWF's Polar Bear Tracker» (em inglês)\n[…]\n«Polar Cam ao vivo do Zoológico de San Diego» (em inglês)"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Pinguim-imperador",
      "descricao": "Maior e mais pesado dos pinguins (Aptenodytes forsteri), endêmico da Antártida, com manchas amarelas nos lados da cabeça."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Durante o inverno antártico, quem choca o ovo do pinguim-imperador, equilibrando-o sobre os pés por cerca de dois meses?",
    "resposta": "O macho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Emperor_penguin",
      "https://pt.wikipedia.org/wiki/Pinguim-imperador"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Emperor_penguin",
        "situacao": "ok",
        "texto": "The emperor penguin (Aptenodytes forsteri) is the tallest and heaviest of all living penguin species and is endemic to Antarctica. The male and female are similar in plumage and size, reaching 100 cm (39 in) in length and weighing from 22 to 45 kg (49 to 99 lb). Feathers of the head and back are black and sharply delineated from the white belly, pale-yellow breast and bright-yellow ear patches.\n[…]\nEmperor penguins were described in 1844 by English zoologist George Robert Gray, who created the generic name from Ancient Greek word elements, ἀ-πτηνο-δύτης [a-ptēno-dytēs], \"without-wings-diver\". Its specific name is in honour of the German naturalist Johann Reinhold Forster, who accompanied Captain James Cook on his second voyage and officially named five other penguin species.\n[…]\nForster may have been the first person to see emperor penguins in 1773–74, when he recorded a sighting of what he believed was the similar king penguin (A. patagonicus) but, given the location, may very well have been the emperor penguin (A. forsteri).\n[…]\nTogether with the king penguin, the emperor penguin is one of two extant species in the genus Aptenodytes. Fossil evidence of a third species—Ridgen's penguin (A. ridgeni)—has been found from the late Pliocene, about three million years ago, in New Zealand. Studies of penguin behaviour and genetics have proposed that the genus Aptenodytes is basal; in other words, that it split off from a branch which led to all other living penguin species.\n[…]\nDC Comics' crime boss character Oswald Chesterfield Cobblepot, aka \"The Penguin\", styles himself after an emperor penguin, a fact which is often referenced in stories, e.g., in his occasional alias \"Forster Aptenodytes\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pinguim-imperador",
        "situacao": "ok",
        "texto": "Pinguim-imperador (Aptenodytes forsteri) é a maior ave da família Spheniscidae (pinguins). Os adultos podem medir até 1,22 metros de altura e pesar até 37 kg. Os machos desta espécie são um dos poucos animais que passam o inverno na Antártida.\n[…]\nO padrão reprodutivo é bastante característico. As fêmeas põem um único ovo em maio/junho, no final do outono, que abandonam imediatamente para passar o inverno no mar. O ovo é incubado pelo macho durante cerca de 65 dias, que correspondem ao inverno antártico. Para superar temperaturas de -40 °C e ventos de 200 km/h, os machos amontoam-se e passam a maior parte do tempo dormindo para poupar energia.\n[…]\nEles nunca abandonam o ovo, que congelaria, e sobrevivem à base da camada de gordura acumulada durante o verão. A fêmea substitui o macho apenas quando regressa no princípio da primavera. Se a cria choca antes do regresso da mãe, o macho do pinguim-imperador alimenta o filho com secreções de uma glândula especial existente no seu esôfago.\n[…]\nO macho incuba o ovo numa bolsa de pele, ventral, balanceando-o com as patas, durante 64 dias consecutivos até a cria irromper do ovo. O pinguim-imperador é a única espécie onde este comportamento é observado; em outras espécies de pinguins, ambos os progenitores alternam a incubação do ovo. Por altura do nascimento da cria, o macho encontra-se sem comer por cerca de 115 dias, desde a sua chegada à colónia.\n[…]\nPara sobreviver ao frio e aos ventos de até 200 km/h, os machos formam agregados, andando às voltas dentro deles. Também foram observados expondo as costas em direcção ao vento, com vista a conservarem o calor corporal. Durante os quatro meses de incubação, o macho pode perder até cerca de 20 kg, dos 38 kg iniciais até aos 18 kg finais."
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Besouro-da-neblina",
      "descricao": "Besouro Stenocara gracilipes, do deserto do Namibe, que coleta água das gotas de neblina sobre o próprio corpo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No deserto do Namibe, um besouro sobe as dunas de madrugada e inclina o corpo contra o vento. O que ele está coletando para beber?",
    "resposta": "Gotas de neblina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stenocara_gracilipes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stenocara_gracilipes",
        "situacao": "ok",
        "texto": "Stenocara gracilipes, the racingstripe darkling beetle, is a species of beetle that is native to the Namib Desert in southern Africa. This is one of the most arid areas of the world, receiving only 1.4 centimetres (0.55 in) of rain per year. The beetle is able to survive by collecting water on its bumpy back surface from early morning fogs.\n[…]\nTo drink water, the S. gracilipes stands on a small ridge of sand using its long, spindly legs. Facing into the breeze, with its body angled at 45°, the beetle catches fog droplets on its hardened wings, or elytra. Its head faces upwind, and its stiff, bumpy elytra are spread against the damp breeze. Minute water droplets (15-20 μm in diameter) from the fog gather on its wings; there the droplets stick to hydrophilic bumps, which are surrounded by waxy, hydrophobic troughs.\n[…]\nOnymacris unguicularis, another fog-basking Namib desert beetle\n[…]\nPhysosterna cribripes, another fog-basking Namib desert beetle\n[…]\nParker, A. R. & C. R. Lawrence (2001). \"Water capture by a desert beetle\". Nature. 414 (6859): 33–34. Bibcode:2001Natur.414...33P. doi:10.1038/35102108. PMID 11689930. S2CID 34785113.\n[…]\nGuadarrama-Cetina, J.M.; et al. (2014). \"Dew condensation on desert beetle skin\". Eur. Phys. J. E. 37 (11) 109. doi:10.1140/epje/i2014-14109-y. hdl:10171/37082. PMID 25403836. S2CID 21054231.\n[…]\nHarries-Rees, Karen (August 31, 2005). \"Desert beetle provides model for fog-free nanocoating\". Chemistry World News. Royal Society of Chemistry.\n[…]\n\"Stenocara beetle\". Biomimicry Guild. Archived from the original on 2006-12-08. Retrieved 2006-12-14."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Baleia-azul",
      "descricao": "Cetáceo Balaenoptera musculus, o maior animal que já existiu."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A baleia-azul, o maior animal que já existiu, se alimenta quase só de quê?",
    "resposta": "Krill",
    "fonte": [
      "https://en.wikipedia.org/wiki/Blue_whale",
      "https://pt.wikipedia.org/wiki/Baleia-azul"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Blue_whale",
        "situacao": "ok",
        "texto": "The blue whale (Balaenoptera musculus) is a species of baleen whale and the largest marine mammal in the rorqual family Balaenopteridae. Reaching a maximum confirmed length of 29.9–30.5 m (98–100 ft) and weighing up to 190–200 t (190–200 long tons; 210–220 short tons), it is the largest animal known to have ever existed. The blue whale's long and slender body can be of various shades of greyish-bl\n[…]\nWhile pursuing krill patches, blue whales maximize their calorie intake by increasing the number of lunges while selecting the thickest patches. This provides them enough energy for everyday activities while storing additional energy necessary for migration and reproduction. Due to their size blue whales have larger energetic demands than most animals, resulting in their need for this specific feeding habit.\n[…]\nBlue whales have to engulf densities greater than 100 krill/m3 to maintain the cost of lunge feeding. They can consume 34,776–1,912,680 kJ (8,312–457,141 kcal) from one mouthful of krill, which can provide up to 240 times more energy than used in a single lunge. It is estimated that an average-sized blue whale must consume 1,120 ± 359 kg (2,469 ± 791 lb) of krill a day. On average, a blue whale eats 4 t (3.9 long tons; 4.4 short tons) each day.\n[…]\nBlue whales appear to avoid directly competing with other baleen whales. Different whale species select different feeding spaces and times as well as different prey species. In the Southern Ocean, baleen whales appear to feed on Antarctic krill of different sizes, which may lessen competition between them.\n[…]\nBlue whales produce some of the loudest and lowest frequency vocalizations in the animal kingdom, and their inner ears appear well adapted for detecting low-frequency sounds. The fundamental frequency for blue whale vocalizations ranges from 8 to 25 Hz. The maximum loudness is 188 dB. Blue whale songs vary between populations."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Baleia-azul",
        "situacao": "ok",
        "texto": "A baleia-azul (nome científico: Balaenoptera musculus) é um mamífero marinho pertencente à subordem dos misticetos (Mysticeti) dos cetáceos. Com até 32 metros de comprimento e até 240 toneladas de peso, são os maiores animais que já existiram em relação ao seu peso e tamanho. Longo e esguio, o corpo das baleias-azuis apresenta seu dorso em diferentes tons azuis-acinzentados, enquanto seu ventre é \n[…]\nComo é o caso das outras espécies pertencentes à subordem dos misticetos, a dieta das baleias-azuis consiste quase que exclusivamente de pequenos crustáceos conhecidos como krill, os quais filtram da água do mar usando lâminas córneas em sua cavidade bucal. Porém, elas também podem se alimentar de pequenos peixes e lulas.\n[…]\nAs baleias-azuis alimentam-se quase que exclusivamente de krill, podendo ainda ingerir um pequeno número de copépodes. As espécies de plâncton\n[…]\nUma baleia-azul adulta pode comer até 40 milhões krill  em um dia. As baleias sempre alimentam-se nas áreas de maior concentração de krill, podendo comer até 3 600 quilos de krill num único dia. Isso equivale a uma dieta de aproximadamente 1,5 milhões de quilocalorias diárias.\n[…]\nNa sequência, a água é pressionada para fora com ajuda da bolsa ventral e da língua, passando por suas lâminas córneas. Assim que toda a água é empurrada para fora da boca, o krill remanescente, preso às lâminas córneas, é engolido. Baleias-azuis podem também consumir peixes pequenos, crustáceos e lulas capturadas junto com o krill.\n[…]\nA acidificação do oceano pode afetar adversamente as presas da baleia-azul, como o desenvolvimento embrionário do krill, as taxas de eclosão e a fisiologia metabólica pós-larval.\n[…]\nNo Oceano Antártico, descobriu-se que as baleias de barbatanas se alimentam preferencialmente de krill antártico de tamanhos específicos, o que resultaria em competição interespecífica reduzida.\n[…]\nFotografias da baleia-azul de OceanLight.com"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Pica-boi",
      "descricao": "Ave africana do gênero Buphagus que vive pousada sobre grandes mamíferos da savana."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na savana africana, o pica-boi passa o dia pousado sobre búfalos, girafas e rinocerontes. O que ele procura neles para comer?",
    "resposta": "Carrapatos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Oxpecker"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Oxpecker",
        "situacao": "ok",
        "texto": "The oxpeckers are two species of bird which make up the genus Buphagus, from Ancient Greek βοῦς (boûs), meaning \"ox\", and φάγος (phágos), meaning \"eater\", and family Buphagidae. The oxpeckers were formerly usually treated as a subfamily, Buphaginae, within the starling family, Sturnidae, but molecular phylogenetic studies have consistently shown that they form a separate lineage that is basal to t\n[…]\nOxpeckers are endemic to the savanna of Sub-Saharan Africa.\n[…]\nThe genus Buphagus was introduced in 1760 by the French zoologist Mathurin Jacques Brisson with the yellow-billed oxpecker as the type species. The family name comes from Ancient Greek βοῦς (boûs), meaning \"ox\", and φάγος (phágos), meaning \"eater\".\n[…]\nThe oxpeckers are endemic to sub-Saharan Africa, where they occur in most open habitats. They are absent from the driest deserts and the rainforests. Their distribution is restricted by the presence of their preferred prey, specific species of ticks, and the animal hosts of those ticks. The two species of oxpecker are sympatric over much of East Africa and may even occur on the same host animal. The nature of the interactions between the two species is unknown.\n[…]\nHowever there have been noted instances of elephants allowing oxpeckers to eat parasites off of them. Other species tolerate oxpeckers while they search for ticks on their faces, which one author says \"appears ... to be an uncomfortable and invasive process.\"\n[…]\nThe typical clutch is between two and three eggs, but the red-billed oxpecker may lay up to five eggs.\n[…]\nRed-billed oxpeckers have been known to roost in reeds and trees. Studies of large savanna herbivores using cameras at night have shown that both species of oxpecker (but more often in yellow-billed oxpecker) may also roost on the bodies of herbivores, hanging under the insides of the thighs of giraffe and on top of impala and buffalo."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Buphagidae",
        "situacao": "ok",
        "texto": "A família dos Bufagídeos (Buphagidae, anteriormente Sturnidae, ordem Passeriformes) compreende duas espécies: o pica-boi-de-bico-amarelo (Buphagus africanus) e o pica-boi-de-bico-vermelho (Buphagus erythrorhynchus). São pássaros marrons com 20 cm de comprimento, com bicos robustos, caudas duras e garras afiadas que se atrelam ao gado e aos grandes animais de caça selvagens para remover carrapatos,\n[…]\nQuando alarmados, os pássaros sibilam, alertando seus hospedeiros para um possível perigo. Embora eles livrem animais de pragas, os pica-bois também bebem o sangue das feridas, que podem demorar a cicatrizar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Proteína anticongelante",
      "descricao": "Proteína que impede a formação de cristais de gelo nos fluidos corporais de peixes, insetos e plantas de ambientes gelados."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nas águas abaixo de zero da Antártida, muitos peixes têm no sangue proteínas especiais. Qual é a função delas?",
    "resposta": "Impedir o congelamento do sangue",
    "fonte": [
      "https://en.wikipedia.org/wiki/Antifreeze_protein",
      "https://en.wikipedia.org/wiki/Notothenioidei"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Antifreeze_protein",
        "situacao": "ok",
        "texto": "Antifreeze proteins (AFPs) or ice structuring proteins refer to a class of polypeptides produced by certain animals, plants, fungi and bacteria that permit their survival in temperatures below the freezing point of water. AFPs bind to small ice crystals to inhibit the growth and recrystallization of ice that would otherwise be fatal. There is also increasing evidence that AFPs interact with mammal\n[…]\nAttempts have been made to relabel antifreeze proteins as ice structuring proteins to more accurately represent their function and to dispose of any assumed negative relation between AFPs and automotive antifreeze, ethylene glycol. These two things are completely separate entities, and show loose similarity only in their function.\n[…]\nUnilever has obtained UK, US, EU, Mexico, China, Philippines, Australia and New Zealand approval to use a genetically modified yeast to produce antifreeze proteins from fish for use in ice cream production. They are labeled \"ISP\" or ice structuring protein on the label, instead of AFP or antifreeze protein.\n[…]\nThere is concern from organizations opposed to genetically modified organisms (GMOs) who believe that antifreeze proteins may cause inflammation. Intake of AFPs in diet is likely substantial in most northerly and temperate regions already. Given the known historic consumption of AFPs, it is safe to conclude their functional properties do not impart any toxicologic or allergenic effects in humans.\n[…]\nIn 2021, EPFL and Warwick scientists have found an artificial imitation of antifreeze proteins.\n[…]\nCold, Hard Fact: Fish Antifreeze Produced in Pancreas\n[…]\nAntifreeze Proteins: Molecule of the Month Archived 2015-11-04 at the Wayback Machine, by David Goodsell, RCSB Protein Data Bank\n[…]\nOverview of all the structural information available in the PDB for UniProt: Q9GTP0 (Thermal hysteresis or Antifreeze protein) at the PDBe-KB."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Notothenioidei",
        "situacao": "ok",
        "texto": "Notothenioidei is one of 19 suborders of the order Perciformes. The group is found mainly in Antarctic and Subantarctic waters, with some species ranging north to southern Australia and southern South America. Notothenioids constitute approximately 90% of the fish biomass in the continental shelf waters surrounding Antarctica.\n[…]\nMany notothenioid fishes are able to survive in the freezing, ice-laden waters of the Southern Ocean because of the presence of an antifreeze glycoprotein in blood and body fluids. Although many of the Antarctic species have antifreeze proteins in their body fluids, not all of them do. Some non-Antarctic species either produce no or very little antifreeze, and antifreeze concentrations in some species are very low in young, larval fish.\n[…]\nThey also possess aglomerular kidneys, an adaptation that aids the retention of these antifreeze proteins.\n[…]\nWhile the majority of animal species have up to 45% of hemoglobin (or other oxygen-binding and oxygen-transporting pigments) in their blood, the notothenioids of the family Channichthyidae do not express any globin proteins in their blood. As a result, the oxygen-carrying capacity of their blood is reduced to less than 10% that of other fishes. This trait likely arose due to the high oxygen solubility of the Southern Ocean waters. At cold temperatures, the oxygen solubility of water is enhanced.\n[…]\nThe loss of hemoglobin is partially compensated in these species by the presence of a large, slow-beating heart and enlarged blood vessels that transport a large volume of blood under low pressure to enhance cardiac output. Despite these compensations, the loss of globin proteins still results in reduced physiological performance."
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Rato-canguru",
      "descricao": "Roedor saltador do gênero Dipodomys, dos desertos da América do Norte."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O rato-canguru, dos desertos norte-americanos, pode passar a vida sem beber água. De onde ele tira a água de que precisa?",
    "resposta": "Das sementes que come",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kangaroo_rat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kangaroo_rat",
        "situacao": "ok",
        "texto": "Kangaroo rats, small mostly nocturnal rodents of genus Dipodomys, are native to arid areas of western North America. The common name derives from their bipedal form. They hop in a manner similar to the much larger kangaroo, but developed this mode of locomotion independently, like several other clades of rodents (e.g., dipodids and hopping mice).\n[…]\nThe gestation period of kangaroo rats lasts 22–27 days.\n[…]\nSubfamily Dipodomyinae\n[…]\nDipodomys agilis (Agile kangaroo rat)\n[…]\nDipodomys californicus (California kangaroo rat)\n[…]\nDipodomys compactus (Gulf Coast kangaroo rat)\n[…]\nDipodomys deserti (Desert kangaroo rat)\n[…]\nDipodomys elator (Texas kangaroo rat)\n[…]\nDipodomys gravipes (San Quintin kangaroo rat)\n[…]\nDipodomys heermanni (Heermann's kangaroo rat)\n[…]\nDipodomys heermanni berkeleyensis (Berkeley kangaroo rat)\n[…]\nDipodomys ingens (Giant kangaroo rat)\n[…]\nDipodomys merriami (Merriam's kangaroo rat)\n[…]\nDipodomys microps (Chisel-toothed kangaroo rat)\n[…]\nDipodomys nelsoni (Nelson's kangaroo rat)\n[…]\nDipodomys nitratoides (Fresno kangaroo rat)\n[…]\nDipodomys ordii (Ord's kangaroo rat)\n[…]\nDipodomys panamintinus (Panamint kangaroo rat)\n[…]\nDipodomys phillipsii (Phillips's kangaroo rat)\n[…]\nDipodomys simulans (Dulzura kangaroo rat)\n[…]\nDipodomys spectabilis (Banner-tailed kangaroo rat)\n[…]\nDipodomys stephensi (Stephens's kangaroo rat)\n[…]\nDipodomys venustus (Narrow-faced kangaroo rat)\n[…]\nDipodomys venustus venustus (Santa Cruz kangaroo rat)\n[…]\nDipodomys venustus elephantinus (Elephant-eared or big-eared kangaroo rat)\n[…]\nDipodomys venustus sanctiluciae (Santa Lucia kangaroo rat)\n[…]\nJumping mouse – a non-desert-dwelling dipodid rodent native to China and North America\n[…]\nKangaroo mouse – a closely related heteromyid rodent of North America\n[…]\nLife History of the Kangaroo Rat at Project Gutenberg--United States Department of Agriculture Bulletin No. 1091, from September 1922"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dipodomys",
        "situacao": "ok",
        "texto": "Dipodomys é um gênero de roedores da família Heteromyidae.\n[…]\nAs espécies que habitam em áreas desérticas são conhecidas por serem capazes de poder obter sua hidratação exclusivamente da produção de água metabólica (ou seja, água proveniente do metabolismo da glicose, que em seres humanos fornece apenas de 8 a 10% da hidratação). Apesar disso, a afirmação de que não bebem água se conseguirem encontra-la é falsa.\n[…]\nDipodomys agilis Gambel, 1848\n[…]\nDipodomys californicus Merriam, 1890\n[…]\nDipodomys compactus True, 1889\n[…]\nDipodomys deserti Stephens, 1887\n[…]\nDipodomys elator Merriam, 1894\n[…]\nDipodomys gravipes Huey, 1925\n[…]\nDipodomys heermanni Le Conte, 1853\n[…]\nDipodomys ingens (Merriam, 1904)\n[…]\nDipodomys merriami Mearns, 1890\n[…]\nDipodomys microps (Merriam, 1904)\n[…]\nDipodomys nelsoni Merriam, 1907\n[…]\nDipodomys nitratoides Merriam, 1894\n[…]\nDipodomys ordii Woodhouse, 1853\n[…]\nDipodomys panamintinus (Merriam, 1894)\n[…]\nDipodomys phillipsii Gray, 1841\n[…]\nDipodomys simulans (Merriam, 1904)\n[…]\nDipodomys spectabilis Merriam, 1890\n[…]\nDipodomys stephensi (Merriam, 1907)\n[…]\nDipodomys venustus (Merriam, 1904)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Diabo-espinhoso",
      "descricao": "Lagarto australiano Moloch horridus, coberto de espinhos, que vive em desertos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O diabo-espinhoso, lagarto dos desertos australianos, consegue beber água de um jeito surpreendente. Por onde a água entra?",
    "resposta": "Pela pele",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thorny_devil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thorny_devil",
        "situacao": "ok",
        "texto": "The thorny devil (Moloch horridus), also known commonly as the mountain devil, thorny lizard, thorny dragon, and moloch, is a species of lizard in the family Agamidae. The species is endemic to Australia. It is the sole species in the genus Moloch. It grows up to 21 cm (8.3 in) in total length (including tail), with females generally larger than males.\n[…]\nThe thorny devil usually lives in the arid scrubland and desert that covers most of central Australia, sandplain and sandridge desert in the deep interior and the mallee belt.\n[…]\nThe popular appeal of the thorny devil is the basis of an anecdotal petty scam. American servicemen stationed in Southwest Australia decades ago (such as during World War II) were supposedly sold the thorny fruits of a species of weeds, the so-called \"double gee\" (Emex australis), but those were called \"thorny devil eggs\" as a part of the scam. Thorny devils have been kept in captivity.\n[…]\nClemente, Christofer; Thompson, Graham G.; Withers, Philip C; Lloyd, David (2004). \"Kinematics, maximal metabolic rate, sprint and endurance for a slow-moving lizard, the thorny devil (Moloch horridus)\". Australian Journal of Zoology. 52 (5): 487–503. doi:10.1071/ZO04026.\n[…]\nGray JE (1841). \"Description of some new Species and four Genera of Reptiles from Western Australia discovered by John Gould, Esq.\" The Annals and Magazine of Natural History, [First Series ] 7: 86–91. (Moloch, new genus pp. 88–89; M. horridus, new species, p. 89).\n[…]\nWilson, Steve; Swan, Gerry (2023). A Complete Guide to Reptiles of Australia, Sixth Edition. Sydney: Reed New Holland Publishers. ISBN 978-1-92554-671-2. 688 pp. (Moloch horridus, pp. 482–483).\n[…]\nDigimorph: Moloch horridus, thorny dragon body structure\n[…]\nAustralia's Thorny Devil by Eric R. Pianka Archived 10 October 2011 at the Wayback Machine\n[…]\nThorny Devil, www.kidcyber.com.au"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Diabo-espinhoso",
        "situacao": "ok",
        "texto": "O Lagarto-espinhoso australiano (Moloch horridus) é a única espécie do gênero Moloch. É um pequeno réptil existente na Austrália cuja dieta consiste somente em formigas.\n[…]\nO lagarto-espinhoso australiano não ultrapassa os 20 cm de comprimento. As fêmeas são maiores que os machos. A sua coloração, que eles próprios controlam, tal como o camaleão, varia entre o amarelo e o castanho-escuro, conforme o tipo de solo e serve-lhe de camuflagem.\n[…]\nO lagarto-espinhoso australiano é aparentado com o lagarto de chifres da América do Norte do género Phrynosoma, sendo este um exemplo da evolução convergente.\n[…]\nO lagarto-espinhoso australiano se alimenta apenas de formigas, especialmente as do género Iridomyrmex. Só come uma formiga de cada vez, que captura com a sua língua pegajosa, mas pode comê-las a um ritmo de 45 por minuto. Podem comer entre 600 a 3000 só numa refeição e mais de 10 000 por dia.\n[…]\nPara beber, o lagarto-espinhoso australiano condensa o humidade existente na noite fria nas escamas e canaliza-a até à boca através de sulcos hidroscópicos existentes por entre os espinhos. O mesmo acontece em dias de chuva ou se ele encontrar uma poça.\n[…]\nSe os predadores o tentarem rolar para expor a sua barriga, a zona mais desprotegida do seu corpo, o lagarto-espinhoso australiano contra-ataca fazendo pressão com os espinhos e com a cauda. Para assustar os predadores pode também inchar para dar a impressão de ser maior.\n[…]\nO acasalamento e a postura dos ovos ocorre entre Setembro e Janeiro. São postos de 3 a 10 ovos que eclodem 3 a 4 meses depois. O diabo-espinhoso atinge a maturidade aos 3 anos e crê-se que vive 20 anos em estado selvagem.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Saúva",
      "descricao": "Formiga cortadeira do gênero Atta, que corta folhas para cultivar fungos no formigueiro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "As saúvas cortam e carregam pedaços de folhas para o formigueiro, mas não os comem. Para que elas usam essas folhas?",
    "resposta": "Para cultivar um fungo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Leafcutter_ant",
      "https://pt.wikipedia.org/wiki/Sa%C3%BAva"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leafcutter_ant",
        "situacao": "ok",
        "texto": "Leafcutter ants are several species of fungus-growing ants that share the behaviour of cutting leaves which they carry back to their nests to farm fungus. Next to humans, leafcutter ants form some of the largest and most complex animal societies on Earth.\n[…]\nThese species of tropical, fungus-growing ants are all endemic to South and Central America, Mexico, and parts of the southern United States. Leafcutter ants can carry up to 50 times their body weight and cut and process fresh vegetation (leaves, flowers, and grasses) to serve as the nutritional substrate for their fungal cultivates. The leaf cutter ant species has a bite force of 800 mN, which is 2600 times their body weight, which allows them to cut leaves as well as defend the nest.\n[…]\nTheir societies are based on an ant–fungus mutualism. The only two other groups of insects to use fungus-based agriculture are ambrosia beetles and termites. Different species of ants use different species of fungus, but all of the fungi the ants use are members of the family Lepiotaceae. The ants actively cultivate their fungus, feeding it with freshly cut plant material and keeping it free from pests and molds.\n[…]\nThe fungus cultivated by the adults is used to feed the ant larvae, and the adult ants feed on leaf sap. The fungus needs the ants and the larvae need the fungus; mutualism is obligatory.\n[…]\nAlso, the wrong type of fungus can grow during cultivation. Escovopsis, a highly virulent fungus, has the potential to devastate an ant garden, as it is horizontally transmitted. Escovopsis was cultured, during colony foundation, in 6.6% of colonies. However, in one- to two-year-old colonies, almost 60% had Escovopsis growing in the fungal garden.\n[…]\nAtta sexdens"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sa%C3%BAva",
        "situacao": "ok",
        "texto": "Chamam-se saúvas as formigas-cortadeiras no Brasil, especialmente as rainhas do gênero Atta, insetos da família dos formicídeos. Conta atualmente com cerca de duzentas espécies, todas nativas do Novo Mundo e mais abundantes na Região Neotropical. No Brasil, as saúvas constam como uma das mais importantes pragas agrícolas, sendo tão abundantes e ativas nas lavouras que os primeiros colonizadores as\n[…]\nEstas formigas-cortadeiras cortam pedaços de folhas, que carregam para seus formigueiros a propósito de criarem um fungo que constitui o seu alimento exclusivo. As folhas e outras partes de plantas (tanto mono como dicotiledôneas) cortadas pelas saúvas, depois de levadas para o interior do formigueiro servem de substrato para o cultivo de um fungo mutualista do qual as formigas se alimentam.\n[…]\nSão chamadas ainda, entre outros nomes, de saúba, formiga-cortadeira, formiga-carregadeira, formiga-de-mandioca, formiga-cabeçuda, formiga-de-roça, roceira, cabeçuda, caçapó, maniuara, caiapó, carregadeira, cortadeira, formiga-caiapó, formiga-da-roça, formiga-de-nós, formiga-saúva, lavradeira, manhuara, tanajura, picadeira e formiga-de-taboca.\n[…]\nCortadeiras: seu trabalho é carregar as folhas para o formigueiro.\n[…]\nA fêmea guarda uma bolota de fungo que é alimento para as saúvas.\n[…]\nA tanajura, como é conhecida a rainha, e o içá, bitu, vitu, cabitu, savitu, içabitu, sabitu ou escumana, como são conhecidos os machos, revoam para copular em dias claros no início do verão e no começo da estação chuvosa. Após a rainha ser fecundada, ela pode voltar ao solo para fundar um novo sauveiro. Traz consigo, no aparelho bucal, uma pelota de fungo de seu formigueiro natal que será usada como base inicial para o novo sauveiro, adubada com matéria fecal.\n[…]\nAtta bisphaerica  Forel, 1908 - saúva-amarela ou saúva-mata-pasto\n[…]\nAtta capiguara Gonçalves, 1944 - saúva-dos-pastos ou saúva-parda"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Lençóis Maranhenses",
      "descricao": "Parque nacional no litoral do Maranhão, com dunas brancas e lagoas de água da chuva."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Apesar das dunas de areia a perder de vista, os Lençóis Maranhenses não são considerados um deserto. Por quê?",
    "resposta": "Chove muito na região",
    "fonte": [
      "https://en.wikipedia.org/wiki/Len%C3%A7%C3%B3is_Maranhenses_National_Park",
      "https://pt.wikipedia.org/wiki/Parque_Nacional_dos_Len%C3%A7%C3%B3is_Maranhenses"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Len%C3%A7%C3%B3is_Maranhenses_National_Park",
        "situacao": "ok",
        "texto": "Lençóis Maranhenses National Park (, Parque Nacional dos Lençóis Maranhenses) is a national park in Maranhão state in northeastern Brazil, just east of the Baía de São José. Protected on June 2, 1981, the 155,000 ha (380,000-acre) park includes 70 km (43 mi) of coastline, and an interior composed of rolling sand dunes. During the rainy season, the valleys among the dunes fill with freshwater lagoo\n[…]\nThe park is located on the northeastern coast of Brazil in the state of Maranhão along the eastern coast, bordered by 70 kilometres (43 mi) of beaches along the Atlantic Ocean. Inland, it is bordered by the Parnaíba River, the São José Basin, and the rivers of Itapecuru, Munim, and Periá. The park encompasses an area of 155,000 hectares (380,000 acres), composed mainly of expansive coastal dune fields (composed of barchanoid dunes), which formed during the late Quaternary period.\n[…]\nWhile much of the park has the appearance of a desert, the area receives about 1,200 millimetres (47 in) of rain per year, while deserts, by definition, receive less than 250 millimetres (10 in) annually. About 70% of this rainfall occurs between the months of January and May.\n[…]\nLençóis Maranhenses National Park receives as many as 60,000 visitors a year. Common activities within the park include surfing, canoeing and horse riding.\n[…]\nCarcross Desert\n[…]\nFormer Lençóis Maranhenses National Park's Official site"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_dos_Len%C3%A7%C3%B3is_Maranhenses",
        "situacao": "ok",
        "texto": "O Parque Nacional dos Lençóis Maranhenses é uma unidade de conservação brasileira de proteção integral à natureza localizada na região nordeste do estado do Maranhão. O território do parque, com uma área de 156 584 ha, está distribuído pelos municípios de Barreirinhas, Primeira Cruz e Santo Amaro do Maranhão. O parque foi criado com a finalidade precípua de \"proteger a flora, a fauna e as belezas \n[…]\nA faixa de dunas avança, a partir da costa, de 5 a 25 km em direção ao interior. Na região encontra-se a nascente do rio Preguiças, que corta o parque até a sua foz no oceano Atlântico. A praia dos Grandes Lençóis que inicia na foz do Rio Preguiças no Canto de Atins no Município de Barreirinhas e finaliza no outro extremo, com 72 quilômetros de extensão, do Parque Nacional na Barra da Baleia no município de Primeira Cruz.\n[…]\nO clima é sub-úmido seco, com temperatura média anual de 26 °C. Apesar da aparência desértica da área do parque, o clima da região tem duas estações bem definidas: uma chuvosa, que vai de janeiro a julho, e outra seca, de agosto a dezembro. As chuvas contribuem para o controle da umidade da região e formação de lagos.\n[…]\nO Parque Nacional dos Lençóis Maranhenses recebe mais de cem mil visitantes por ano, tendo alcançado o número de 280 878 visitas em 2021, e cerac de 408 mil turistas em 2023, segundo o Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio). Atividades comuns dentro do parque incluem surfe, canoagem e passeios a cavalo.\n[…]\nO local foi cenário do filme Casa de Areia. Um dos episódios da série Largados e Pelados, um reality show de sobrevivência exibido pelo Discovery Channel, foi filmado na região. Os filmes Avengers: Infinity War e Avengers: Endgame (2019) usaram o local como cenário para o planeta Vormir.\n[…]\nParques nacionais do Brasil\n[…]\nParque dos Lençóis, Secretaria de Turismo do Maranhão.\n[…]\nParque Nacional dos Lençóis Maranhenses na UNESCO"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Cerrado",
      "descricao": "Bioma de savana do Brasil Central, com árvores baixas e retorcidas e estação seca marcada."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Muitas árvores do Cerrado têm casca grossa, parecida com cortiça. Que ameaça frequente nesse bioma essa casca ajuda a suportar?",
    "resposta": "O fogo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cerrado",
      "https://en.wikipedia.org/wiki/Cerrado"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cerrado",
        "situacao": "ok",
        "texto": "Cerrado é bioma brasileiro de savanas, sendo o segundo maior em extensão territorial depois da Amazônia, ocupando uma área de mais de dois milhões de quilômetros quadrados. O termo \"cerrado\" pode ser utilizado em três sentidos O primeiro, a \"fisionomia do cerrado sensu stricto\" é uma das fisionomias do bioma savana e parte da província florística cerrado sensu lato.\n[…]\nAssim como em outros campos e savanas, o fogo é importante para a manutenção e a formação da paisagem do Cerrado; muitas plantas do Cerrado são adaptadas ao fogo, exibindo características como casca grossa e suberosa para suportar o calor.\n[…]\nEmbora quase sempre apresentado como danoso aos ambientes naturais, o fogo é, no entanto, indispensável para a preservação das formações abertas (campestres e savânicas) do Cerrado. As espécies e vegetações do Cerrado não são exatamente adaptadas ao fogo, mas sim a diferentes regimes de fogo.\n[…]\nFrequências maiores do fogo tendem a promover a ocorrência de vegetações campestres (campos limpos) ou savânicas (como o cerrado sensu stricto), com suas plantas herbáceas e lenhosas de baixo porte, ao invés das vegetações florestais (cerradão), com suas plantas lenhosas de alto porte.\n[…]\nLogo, alterações no regime natural de fogo (sejam pela sua indução em frequência e intensidade muito altas, ou pela sua supressão completa), podem ter efeitos negativos para a biodiversidade no Cerrado.\n[…]\nPrimeiramente, as unidades estão localizadas em áreas centrais e apresentam altitudes variadas, o que as torna importantes refúgios para as espécies. Em segundo lugar, as unidades representam de forma excelente a biodiversidade do bioma Cerrado, abrigando mais de 60% de todas as espécies vegetais e quase 80% de todas as espécies de vertebrados existentes na região. Muitas espécies ameaçadas de extinção ocorrem nessas unidades, tornando-as alvos importantes para a conservação."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cerrado",
        "situacao": "ok",
        "texto": "The Cerrado (Portuguese pronunciation: [seˈʁadu]) is a vast ecoregion of tropical savanna in central Brazil, being present in the states of Goiás, Mato Grosso do Sul, Mato Grosso, Tocantins, Maranhão, Piauí, Bahia, Minas Gerais, São Paulo, Paraná and the Federal District. The core areas of the Cerrado biome are the Brazilian Highlands – the Planalto. The main habitat types of the Cerrado consist o\n[…]\nThe Cerrado also includes savanna wetlands and gallery forests.\n[…]\nIndigenous lands (IL) remain an important sector for biodiversity conservation in the Cerrado. The government of Brazil has recognized 4.8% of the Cerrado’s area as IL. In 2019, 6.72% of remaining native vegetation occurred within IL, compared to the 2.27% that was preserved within conservation units. Indigenous lands also effectively represent the ecosystem services and biodiversity characteristic of the Cerrado biome and are efficient in reducing habitat conversion and deforestation.\n[…]\n\"Cerrado biodiversity hotspot\". BiodiversityHotspots.org. Conservation International. Archived from the original on 5 March 2007.\n[…]\n\"The Chapada dos Veadeiros, Cerrado de Altitude\". guiadachapada.com.br. Archived from the original on 30 January 2009.\n[…]\n\"Bioma Cerrado\". www.agencia.cnptia.embrapa.br. EMBRAPA (in Portuguese). Brazilian Government. Archived from the original on 15 June 2020. Retrieved 30 April 2007.\n[…]\n\"The Cerrado\". Nature Conservancy in Brazil. Archived from the original on 3 July 2010.\n[…]\n\"The Biodiversity of the Brazilian Cerrado\". Archived from the original on 11 November 2007.\n[…]\n\"Cerrado\". Brazilian Government. Archived from the original on 24 December 2005.\n[…]\n\"Cerrado\". Terrestrial Ecoregions. World Wildlife Fund.\n[…]\nCaton, Peter (1 June 2011). Guardians of the Cerrado. petercaton.co.uk (photo story). Aoki, Chris (contrib.); do Vale, João (music). Archived from the original on 2 September 2011 – via foto8.com."
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Lago Retba",
      "descricao": "Lago salgado de águas cor-de-rosa no Senegal, perto de Dacar, conhecido como Lago Rosa."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O lago Retba, no Senegal, tem água cor-de-rosa. O que dá essa cor ao lago?",
    "resposta": "Uma alga de água salgada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lake_Retba"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Retba",
        "situacao": "ok",
        "texto": "Lake Retba, also known as Lac Rose (meaning \"pink lake\"), lies north of the Cape Verde peninsula in Senegal, some 35 km (22 mi) north-east of the capital, Dakar. It is named for its pink waters caused by Dunaliella salina algae and is known for its high salt content, up to 40% in some areas. Its colour is usually particularly strong from late January to early March, during the dry season.\n[…]\nSalt is exported across the region by up to 3,000 collectors, men and women from all over western Africa, who work 6–7 hours a day. They protect their skin with beurre de Karité (shea butter), an emollient produced from shea nuts which helps avoid tissue damage. The salt is used by Senegalese fishermen to preserve fish, which is an ingredient in many traditional recipes, including the national dish, which is a fish and rice combination called thieboudienne.\n[…]\nAbout 38,000 tonnes of salt are harvested from this lake each year, which contributes to Senegal's salt production industry. Senegal is the number-one producer of salt in Africa.\n[…]\nLake Retba has been under consideration by UNESCO as a World Heritage Site since October 2005, and remains so as of 2026.\n[…]\nSir Michael Tippett, whose composition The Rose Lake was inspired by his visit to Lake Retba\n[…]\n\"A Look at Lake Retba, Senegal's Pink Lake\". Edward Asare. 5 May 2021.\n[…]\nLake Retba\n[…]\nSenegal’s Pink Lake. Al Jazeera English, October 2021 (video, 46 mins)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lago_Retba",
        "situacao": "ok",
        "texto": "O Lago Retba fica ao norte da península de Cap Vert, no Senegal, a cerca de 30 km a nordeste da capital, Dakar, no noroeste da África. É nomeado de Lago Rosa por suas águas rosadas causadas pelas algas Dunaliella salina e é conhecido por seu alto teor de sal, até 40% em algumas áreas.\n[…]\nO lago é conhecido por seu alto teor de sal, até 40% em algumas áreas, devido principalmente à entrada de água do mar e sua subsequente evaporação. Como o Mar Morto, o lago é suficientemente fluido para que as pessoas possam flutuar facilmente.\n[…]\nO sal é exportado para toda a região por até 3.000 colecionadores, homens e mulheres de toda a África Ocidental, que trabalham de 6 a 7 horas por dia, e protegem a pele com beurre de Karité (manteiga de karité), um emoliente produzido a partir de nozes de karité que ajuda a evitar danos nos tecidos. O sal é usado pelos pescadores senegaleses para preservar o peixe, um componente de muitas receitas tradicionais, incluindo o prato nacional, uma refeição de peixe e arroz chamada thieboudienne.\n[…]\nOs peixes no lago se adaptaram ao seu alto teor de sal, desenvolvendo maneiras de bombear sal extra e manter seus níveis de água equilibrados. Os peixes são aproximadamente quatro vezes menores do que aqueles que vivem em um ambiente normal, como resultado do nanismo dos peixes de água salgada.\n[…]\nO lago era frequentemente o ponto de chegada do Rally Dakar, antes que o rali se mudasse para a América do Sul em 2009.\n[…]\nEste artigo foi inicialmente traduzido, total ou parcialmente, do artigo da Wikipédia em inglês cujo título é «Lake Retba».",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Flamingo",
      "descricao": "Ave pernalta da família Phoenicopteridae, de plumagem rosada, que vive em lagoas salgadas e alcalinas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Flamingos nascem com penas cinzentas e só depois ficam cor-de-rosa. O que causa essa cor?",
    "resposta": "Pigmentos da alimentação",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flamingo",
      "https://pt.wikipedia.org/wiki/Flamingo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flamingo",
        "situacao": "ok",
        "texto": "Flamingos or flamingoes () are a type of wading bird in the family Phoenicopteridae, which is the only extant family in the order Phoenicopteriformes. There are four flamingo species distributed throughout the Americas (including the Caribbean), and two species native to Afro-Eurasia.\n[…]\nSix extant flamingo species are accepted by all recent sources. They were formerly placed in one genus (have common characteristics) Phoenicopterus. As a result of a 2014 publication, the family was reclassified into two genera. In 2020, the family had three recognised genera, according to HBW.\n[…]\nThe pink or reddish colour of flamingos comes from carotenoids in their diet of animal and plant plankton. American flamingos are a brighter red colour because of the beta carotene availability in their food while the lesser flamingos are a paler pink due to ingesting a smaller amount of this pigment. These carotenoids are broken down into pigments by liver enzymes. The source of this varies by species, and affects the colour saturation.\n[…]\nMartial, the poet, devoted an ironic epigram, alluding to flamingo tongues:\n[…]\nFlamingos are the national bird of the Bahamas.\n[…]\nAndean miners have killed flamingos for their fat, believing that it would cure tuberculosis.\n[…]\nIn the United States, pink plastic flamingos are sometimes used as lawn ornaments. They were first designed by Don Featherstone in 1957. Their popularity was influenced in part by the prevalence of flamingo souvenirs in Florida along with the Flamingo grand hotel in Miami Beach, prompting the correlation of flamingos with style and wealth.\n[…]\nIn 2026, the flamingo became a symbol of the anti-government protests in Albania known as the Flamingo Revolution.\n[…]\nFlamingo Resource Centre\n[…]\nFlamingo videos and photos on the Internet Bird Collection"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Flamingo",
        "situacao": "ok",
        "texto": "Flamingo é uma ave pertencente à família Phoenicopteridae da ordem Phoenicopteriformes. Anteriormente pertencia a ordem Ciconiiformes. Tradicionalmente todas as espécies eram incluídas no género Phoenicopteruss,  mas actualmente o flamingo-andino e o flamingo-de-james são considerados um gênero à parte, Phoenicoparrus, por causa de certas diferenças no bico, e o flamingo-pequeno também foi incluíd\n[…]\nOs flamingos são aves pernaltas, de bico encurvado, que medem entre 90 e 150 cm. Sua coloração vem da alimentação rica em carotenos, que são pigmentos que eles conseguem através de algas e camarões, por exemplo.\n[…]\nOs flamingos são aves gregárias, que vivem em bandos numerosos junto a zonas aquáticas. Algumas espécies conseguem inclusivamente habitar zonas de salinidade extrema, como os lagos africanos do Vale do Rift. É a ave nacional das Bahamas.\n[…]\nAté 2021, só nasceram flamingos em cativeiro, nomeadamente no Zoo de Lourosa e no Jardim Zoológico de Lisboa.\n[…]\nEm 2021, pela primeira vez, existem duas colónias de flamingos a nidificar em duas áreas protegidas sob a gestão do ICNF, onde se estima um valor considerável de ninhos nas duas colónias\n[…]\nA população de flamingos tem vindo a aumentar no país, mesmo em zonas húmidas onde antes era pouco observada. No entanto, a espécie continuava sem nidificar em Portugal, por razões científicas desconhecidas.\n[…]\nA diminuição da actividade humana devida às restrições impostas pela pandemia de covid-19, aliada ao aumento das áreas de alimentação e repouso da espécie em Portugal – constatada por vigilantes da natureza e técnicos do Centro de Estudos de Migrações e Protecção de Aves do ICNF –, podem ter contribuído para facilitar a sua reprodução.\n[…]\nFlamingos em Portugal\n[…]\nOnde observar o flamingo"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Pulgão",
      "descricao": "Pequeno inseto da superfamília Aphidoidea que suga a seiva das plantas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Formigas protegem pulgões de predadores, como pastores cuidando de um rebanho. O que elas ganham em troca?",
    "resposta": "Melada, um líquido açucarado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aphid",
      "https://en.wikipedia.org/wiki/Honeydew_(secretion)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aphid",
        "situacao": "ok",
        "texto": "Aphids are small sap-sucking insects in the family Aphididae of the order Hemiptera. Common names include greenfly and blackfly, although individuals within a species can vary widely in color. The group includes the fluffy white woolly aphids. A typical life cycle involves flightless females giving live birth to female nymphs—who may also be already pregnant, an adaptation scientists call telescop\n[…]\nThe wild potato, Solanum berthaultii, produces an aphid alarm pheromone, (E)-β-farnesene, as an allomone, a pheromone to ward off attack; it effectively repels the aphid Myzus persicae at a range of up to 3 millimetres. S. berthaultii and other wild potato species have a further anti-aphid defence in the form of glandular hairs which, when broken by aphids, discharge a sticky liquid that can immobilise some 30% of the aphids infesting a plant.\n[…]\nThe soldiers of gall-forming aphids also carry out the job of cleaning the gall. The honeydew secreted by the aphids is coated in a powdery wax to form \"liquid marbles\" that the soldiers roll out of the gall through small orifices. Aphids that form closed galls use the plant's vascular system for their plumbing: the inner surfaces of the galls are highly absorbent and wastes are absorbed and carried away by the plant.\n[…]\nSequenced Genome of Pea Aphid, Agricultural Research Service\n[…]\nInsect Olfaction of Plant Odour: Colorado Potato Beetle and Aphid Studies\n[…]\nAsian woolly hackberry aphid, Center for Invasive Species Research\n[…]\nDysaphis plantaginea (Rosy apple aphid), InfluentialPoints – identification, images, ecology, control\n[…]\nAphis gossypii, melon or cotton aphid\n[…]\nAphis nerii, oleander aphid\n[…]\nHyadaphis coriandri, coriander aphid\n[…]\nLongistigma caryae, giant bark aphid\n[…]\nMyzus persicae, green peach aphid\n[…]\nSarucallis kahawaluokalani, crapemyrtle aphid\n[…]\nShivaphis celti, an Asian woolly hackberry aphid\n[…]\nToxoptera citricida, brown citrus aphid"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Honeydew_(secretion)",
        "situacao": "ok",
        "texto": "Honeydew is a sugar-rich sticky liquid that is excreted by aphids, some scale insects, many other true bugs, and some other insects as they feed on plant sap. When their mouthpart penetrates the phloem, the sugary, high-pressure liquid is forced out of the anus of the insects, allowing them to rapidly process the large volume of sap required to extract essential nutrients present at low concentrat\n[…]\nHoneydew is an excretion, because it is unused food that is expelled through the insect's anus. The food is plant sap, very rich in sugar but low in protein, so excess sugar must be excreted. While honeydew is often called \"secretion\" because sugary liquid does not sound like a typical excreta, \"secretions\" come from specialized glands."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Af%C3%ADdio",
        "situacao": "ok",
        "texto": "Os afídios, afídeos, pulgões ou piolhos-das-plantas são insetos diminutos que se alimentam da seiva de plantas, da superfamília dos afidoídeos, ou Aphidoidea (algumas fontes registam Apidoidea) na divisão Homoptera da ordem dos Hemiptera. Cerca de 250 espécies constituem sérias pragas para a agricultura, floresta e jardinagem ao sugarem a seiva das plantas e servindo como vetor de transmissão de v\n[…]\nTal como os afídeos, a filoxera (inseto que causou uma grande praga que devastou a viticultura europeia no século XIX) alimenta-se da seiva que corre nas raízes, folhas e galhos (de videira), mas não produz, ao contrário dos afídeos, nem melada nem secreções das cornículas.\n[…]\nComo a proporção de açúcares na seiva é muito maior que a de compostos azotados, e acima das necessidades dos afídeos, estes vão necessitar de ingerir grandes quantidades de seiva, de modo a obter a quantidade necessária de compostos azotados. O que não é digerido, vai constituir a melada, rica em açúcares e que é particularmente procurada pelas formigas.\n[…]\nAlgumas espécies de formigas criam afídeos, protegendo-os dos seus predadores naturais, de modo a recolher deles a melada que produzem, o que constitui uma forma de mutualismo. É por essa razão que são, por vezes, designados como \"vaca-das-formigas\" De modo a obter a melada, as formigas acariciam os afídeos com as suas antenas, comportamento que algumas também estabelecem, visando o mesmo fim, com cochonilhas-farinhentas.\n[…]\nNesse caso, as formigas não defendem os afídeos, mas levam as lagartas para o seu formigueiro, onde serão alimentadas e onde serão elas a produzir melada utilizada pelas formigas. Quando as lagartas atingem o seu tamanho máximo, arrastam-se para a entrada da colónia onde se transformam em pupas, dentro de casulos. Duas semanas depois, as borboletas emergem dos casulos e levantam voo.\n[…]\nPulgão-negro-do-pessegueiro - Anuraphis persicae",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Cratera de Darvaza",
      "descricao": "Cratera de gás em chamas no deserto de Caracum, no Turcomenistão, apelidada de Porta do Inferno."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A cratera de Darvaza, no deserto do Turcomenistão, ganhou o apelido de Porta do Inferno por causa das chamas que saem dela. O que queima ali?",
    "resposta": "Gás natural",
    "fonte": [
      "https://en.wikipedia.org/wiki/Darvaza_gas_crater",
      "https://pt.wikipedia.org/wiki/Cratera_de_Darvaza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Darvaza_gas_crater",
        "situacao": "ok",
        "texto": "The Darvaza gas crater (Turkmen: Garagum ýalkymy), also known as the Door to Hell or Gates of Hell, officially the Shining of Karakum, is a burning natural gas field collapsed into a cavern near Darvaza, Turkmenistan. Hundreds of natural gas fires illuminate the floor and rim of the crater. The crater has been burning since 1971. Drilling punctured a natural-gas cavern, the cavern's roof collapsed\n[…]\nThe crater is near the village of Darvaza in the middle of the Karakum Desert. Located about 260 kilometres (160 mi) north of Ashgabat, the capital of Turkmenistan, it has a diameter of 60–70 metres (200–230 ft) and a depth of about 30 metres (98 ft). Another nearby gas crater is fenced off and has a distinct odor.\n[…]\nIn April 2010, President Gurbanguly Berdimuhamedow recommended that measures be taken to limit the crater's influence on the develop­ment of other natural gas fields in the area. In January 2022, Berdi­muha­medow announced plans to extinguish the crater, citing deleterious effects on local health, the environment, and the natural gas industry. A commission was established to find the optimal technique. Despite Berdimuhamedow's intentions, the crater remains open and burning.\n[…]\nThe intensity of heat from the flames has diminished by more than 75 percent over the last three years, according to an analysis by Capterio, a company that monitors natural gas flares.\n[…]\nThe crater is difficult to visit. All foreigners need a visa to enter Turkmenistan, and the crater is approximately a four hour drive from the capital Ashgabat. Nevertheless, in post-Soviet Turkmenistan, the crater has become a major tourist attraction, perhaps aided by the declaration of the region as a natural reserve in 2013. A crude road without signage runs out to the crater, and yurts have been set up nearby.\n[…]\nBatagaika crater – expanding permafrost crater in Siberia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cratera_de_Darvaza",
        "situacao": "ok",
        "texto": "A Cratera de Darvaza, também chamada de Porta para o Inferno, é um campo de gás natural localizado em Darvaza (ou Derweze) (que significa \"porta\"), na província de Ahal, no Turcomenistão. A cratera é conhecida por suas chamas, que vêm queimando continuamente desde 1971, alimentada pelos ricos depósitos de gás natural na área. Ela exala um forte cheiro de enxofre que pode ser sentido à distância.\n[…]\nA aldeia de Darvaza, também conhecida como Derweze (que significa \"o portão\", em turcomano), com 350 habitantes, está localizada a cerca de 260 km ao norte de Asgabade, no meio do deserto de Caracum, que ocupa mais de 70% da área do país e é rico em petróleo, enxofre e gás natural. A reserva de gás encontrada alí é uma das maiores no mundo.\n[…]\nO nome \"Porta para o Inferno\" foi dado pela população local referindo-se ao fogo, lama fervente e as chamas alaranjadas na cratera que tem um diâmetro de 70m propiciando um cenário que faz lembrar a descrição popular do acesso principal ao  Reino de Hades. Seus habitantes são principalmente turcomanos da tribo Teke, que conservam um estilo de vida semi-nômade.\n[…]\nNaquele tempo, as expectativas eram de que o gás iria queimar por alguns dias, mas ainda está queimando décadas depois de ter sido incendiado. Não há nenhuma previsão de quando as labaredas vão finalmente cessar, já que a quantidade de gás que ainda existe nas profundezas da cratera é incerta.\n[…]\nNo entanto, mesmo com a tentativa do presidente, a ideia não deu certo. O forte apelo turístico da \"Porta do Inferno\" fez com que o governante mudasse de ideia e deixasse a cratera se apagar sozinha quando o gás acabar. Em janeiro de 2022, o governo turcomeno, agora governado por Gurbanguly Berdimuhammedow, novamente ordenou que especialistas encontrem uma maneira de extinguir o incêndio da cratera."
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Mandacaru",
      "descricao": "Cacto colunar Cereus jamacaru, símbolo da caatinga nordestina."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Numa canção de Luiz Gonzaga, o mandacaru que floresce na seca é o sinal de que a chuva vai chegar ao sertão. Que canção é essa?",
    "resposta": "Xote das Meninas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Xote_das_Meninas",
      "https://pt.wikipedia.org/wiki/Mandacaru"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Xote_das_Meninas",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mandacaru",
        "situacao": "ok",
        "texto": "O mandacaru (Cereus jamacaru), também conhecido como cardeiro e jamacaru, Planta da família das Cactaceae, gênero cactus. Arbustiva, xerófita, nativa do Brasil, disseminada no Semiárido do Nordeste. Mandacaru e jamacaru vêm do tupi antigo îamakaru, também chamado nhamandakaru.\n[…]\nDenominada cientificamente de Cereus hildmannianus K. Schum, essa variedade foi proveniente de uma mutação genética do Mandacaru (Cereus jamacaru), onde alguns genótipos não desenvolveram os espinhos, ocorrendo naturalmente em alguns estados do Nordeste, principalmente no Rio Grande do Norte e no litoral do Estado do Ceará onde foi encontrado vegetando.\n[…]\nA utilização da planta se deu primeiramente pelos povos indígenas da Caatinga, sendo usado na alimentação ou em tradições. Atualmente, o povo Fulni-Ô, de Pernambuco, ainda usa o mandacaru na sua dieta e na sua medicina tradicional, mantendo um conhecimento milenar.\n[…]\nEm um hectare de caatinga, no espaçamento de 100 metros por 100 metros, é possível cultivar cerca de dez mil plantas e colher 78 toneladas de matéria verde ou 13,26 toneladas (17%) de matéria seca.[carece de fontes]?\n[…]\nRito, Kátia F.; Rocha, Emerson A.; Leal, Inara R.; Meiado, Marcos V. (16 de abril de 2009). «As sementes de mandacaru têm memória hídrica?». Bol. Soc. Latin. Carib. Cact. Suc. 6 (1). Consultado em 13 de janeiro de 2017\n[…]\nMeiado, Marcos Vinicius; De Albuquerque, Larissa Simões Corrêa; Rocha, Emerson Antônio; Rojas-Aréchiga, Mariana; Leal, Inara Roberta (1 de maio de 2010). «Seed germination responses of Cereus jamacaru DC. ssp. jamacaru (Cactaceae) to environmental factors». Plant Species Biology (em inglês). 25 (2): 120–128. ISSN 1442-1984. doi:10.1111/j.1442-1984.2010.00274.x\n[…]\nMedia relacionados com Mandacaru no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Manguezal",
      "descricao": "Ecossistema costeiro de transição entre rio e mar, com árvores adaptadas à água salobra e solo lamacento."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Nos anos noventa, Chico Science e Nação Zumbi lançaram no Recife um movimento musical com o caranguejo como símbolo. O nome dele vem de que ecossistema?",
    "resposta": "Manguezal",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Manguebeat",
      "https://en.wikipedia.org/wiki/Manguebeat"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Manguebeat",
        "situacao": "ok",
        "texto": "Manguebeat (também grafado como manguebit ou mangue beat) é um movimento de contracultura brasileiro. Surgiu a partir de 1991, na cidade de Recife, e se destaca pela combinação original de diversos gêneros musicais, unindo ritmos regionais, como o maracatu, o rock, o hip hop, o funk e a música eletrônica.\n[…]\nÉ representado por um caranguejo, animal típico dos mangues e fonte de alimentação para as comunidades locais, sendo o início do movimento marcado pelo manifesto Caranguejos com Cérebro — é interessante observar que no manifesto, a imagem símbolo descrita pelo seu autor, Fred Zero Quatro, é uma antena parabólica enfiada na lama e não um caranguejo). Alcançou sucesso internacional com a banda Chico Science & Nação Zumbi.\n[…]\nSegundo o grupo Nação Zumbi o movimento foi pensado simplesmente como \"mangue\", tendo sido apelidado de manguebeat pela mídia à época.\n[…]\nFred Zero Quatro falaria sobre este \"ciclo do caranguejo\" e seu eventual colapso em Sob o Calçamento, presente no álbum Samba Esquema Noise, enquanto Chico Science abordaria a dinâmica em Manguetown, lançada no álbum de 1996, Afrociberdelia, mas já performada em shows da Nação Zumbi desde antes de seu álbum de estreia.\n[…]\nAo ouvir Chico Science pela primeira vez em uma performance mashup de Loustal e Lamento Negro, Fred 04 pensou que a combinação da justaposição local/global, bem como a localização geográfica, poderia lançar o que viria a ser o movimento Mangue em algo que destacaria a diversidade do Recife.\n[…]\nO mangue beat, movimento musical e estético que nasceu em Pernambuco nos anos 1990, mudou a visibilidade das periferias e das manifestações culturais da Região Metropolitana do Recife e colocou o estado na rota do mercado musical mundial, após o lançamento de bandas como Chico Science e Nação Zumbi e Mundo Livre S.A."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Manguebeat",
        "situacao": "ok",
        "texto": "Manguebeat, alternatively known as mangue beat or mangue bit, is a social and artistic movement with origins in northeastern Brazilian city Recife, Pernambuco in the early 1900s, in reaction to the economic and cultural stagnation of the capital.\n[…]\nDespite being both being cited as founders for the Mangue movement, Chico Science and Nação Zumbi (CSNZ), and Mundo Livre S/A have different influences and backgrounds. Chico Science was born to a lower-middle-class family in the neighborhood of Rio Doce in the city of Olinda.\n[…]\nWhen first hearing Chico Science in a mashup performance of Loustal and Lamento Negro, he thought the combination of the local/global juxtaposition, as well as the difference in geographical location, could launch what would become the Mangue movement into something that would highlight Recife's diversity.\n[…]\ndescribes Mangue as  \"a label that we used for a type of cultural cooperative . . . that united some bands [particularly Nação Zumbi and Mundo Livre S/A], some visual artists, some journalists, some unemployed. And the idea, the label mangue emerged because Recife is a city that is constructed on top of the manguezais [\"mangrove swamps\"].\n[…]\nAs a result of the manifesto being published, in 1992 MTV visited Recife to interview both Chico Science and Fred 04. The resulting footage played on MTV in Brazil, in January 1993, causing Mangue to gain traction in the south of Brazil. That same year, Paulo Andre Pires launched the first Abril pro Rock festival in Recife featuring CSNZ and Mundo Livre S/A as well as Nacão Pernambuco, a maracatu band that was gaining attention and growing quickly in popularity.\n[…]\nMovimento Manguebit (Wayback Machine archive of the MangueBit movement website) (in Portuguese)"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Ophiocordyceps unilateralis",
      "descricao": "Fungo parasita de florestas tropicais que infecta formigas e altera seu comportamento antes de matá-las."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Um fungo que invade formigas e controla seu comportamento antes de matá-las inspirou que jogo de videogame, depois virado série, sobre uma pandemia?",
    "resposta": "The Last of Us",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ophiocordyceps_unilateralis",
      "https://en.wikipedia.org/wiki/The_Last_of_Us"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ophiocordyceps_unilateralis",
        "situacao": "ok",
        "texto": "Ophiocordyceps unilateralis, commonly known as zombie-ant fungus, is an insect-pathogenic fungus, discovered by the British naturalist Alfred Russel Wallace in 1859. Zombie ants, infected by the Ophiocordyceps unilateralis fungus, are predominantly found in tropical rainforests.\n[…]\nThe fungus's scientific name is sometimes written as Ophiocordyceps unilateralis sensu lato, which means 'in the broad sense', because the species actually represents a complex of many species within O. unilateralis.\n[…]\nSpecies within the O. unilateralis core clade as described in 2018:\n[…]\nMany studies describe Ophiocordyceps unilateralis distribution as pantropical since it occurs mainly in tropical forest ecosystems. However, there are some reports of the zombie-ant fungus in warm-temperate ecosystems.\n[…]\nIn the video game series The Last of Us, Ophiocordyceps unilateralis has evolved to infect humans, thus creating  zombie-like enemies in the game. Also, in episode two of the 2023 television series The Last of Us on HBO Max, Ophiocordyceps unilateralis is revealed to be the primary cause of the infected outbreak and subsequent collapse of human civilization.\n[…]\nThe video game Cult of the Lamb features an ant character named Sozo who is implied to be under the influence of a parasitic fungus similar in nature to Ophiocordyceps unilateralis. A mushroom grows out of his head, causing him to act erratically and obsess over hallucinogenic mushrooms. Upon returning to his lair after completing his quest line, the player finds him dead on the ground, with the fungus on his head split in two to spread its spores.\n[…]\nThe creatures in the 2021 South African horror film Gaia are also inspired by Ophiocordyceps unilateralis.\n[…]\nOphiocordyceps unilateralis at UniProt.org. Accessed on 2010-08-22."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Last_of_Us",
        "situacao": "ok",
        "texto": "The Last of Us is an action-adventure video game series and media franchise created by Naughty Dog and published by Sony Interactive Entertainment. The series is set in a post-apocalyptic United States ravaged by cannibalistic humans infected by a mutated fungus in the genus Cordyceps.\n[…]\nThe Last of Us was released for the PlayStation 3 on June 14, 2013. A remastered version, titled The Last of Us Remastered, was released for the PlayStation 4 in July 2014. Twenty years after losing his daughter Sarah during the outbreak of the mutant Cordyceps fungus, Joel is tasked with escorting Ellie, a teenage girl who is immune to the infection, across a post-apocalyptic United States so the revolutionary group Fireflies can potentially create a cure.\n[…]\nFor the final months of development, due to the COVID-19 pandemic, the team operated via remote work arrangements. In total, approximately 2,169 developers across 14 studios worked on the game.\n[…]\nThe Last of Us Part II was announced at the PlayStation Experience event on December 3, 2016. The game missed its original projected release date of February 21, 2020, pushed to May for extra polishing, and later to June 19 due to logistical problems caused by the COVID-19 pandemic. In late April, several videos leaked online, showing cutscenes, gameplay, and significant plot details. Druckmann tweeted he was \"heartbroken\" for fans and for the team, who had devoted years to development.\n[…]\nThe Last of Us is the first live-action video game adaptation to receive major awards consideration. The first season received 24 nominations at the 75th Primetime Emmy Awards, with a leading eight wins at the Creative Arts Emmy Awards, while the second season earned 17 nominations at the 77th Primetime Emmy Awards."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ophiocordyceps_unilateralis",
        "situacao": "ok",
        "texto": "Ophiocordyceps unilateralis, comumente conhecido como fungo zumbi de formiga, é um fungo patogênico de insetos, descoberto pelo naturalista britânico Alfred Russel Wallace em 1859. Formigas infectadas pelo fungo Ophiocordyceps unilateralis, conhecidas como \"formigas zumbis\", são encontradas predominantemente em florestas tropicais.\n[…]\nMuitos estudos descrevem a distribuição de Ophiocordyceps unilateralis como pantropical, uma vez que ocorre principalmente em ecossistemas de florestas tropicais. No entanto, existem alguns relatos do fungo formiga zumbi em ecossistemas temperados quentes.\n[…]\nunilateralis controla o comportamento da formiga e essa manipulação representa uma adaptação para o fungo onde a seleção natural atua sobre seus genes, aumentando a aptidão do fungo.\n[…]\nNa série de videogames The Last of Us, Ophiocordyceps unilateralis evoluiu para infectar humanos, criando inimigos semelhantes a zumbis no jogo. Além disso, no episódio dois da série de televisão de 2023 The Last of Us na HBO Max, Ophiocordyceps unilateralis é revelado como a causa primária do surto de infecção e do subsequente colapso da civilização humana.\n[…]\nO videogame Cult of the Lamb apresenta um personagem formiga chamado Sozo, que supostamente está sob a influência de um fungo parasita de natureza semelhante ao Ophiocordyceps unilateralis. Um cogumelo cresce em sua cabeça, fazendo com que ele aja de forma errática e fique obcecado por cogumelos alucinógenos. Ao retornar ao seu covil após completar sua missão, o jogador o encontra morto no chão, com o fungo em sua cabeça dividido em dois para espalhar seus esporos.\n[…]\nO videogame Grounded da Obsidian Entertainment tem um tipo semelhante de infecção fúngica, conhecido como “Crescimento Fúngico”, que retrata alguns comportamentos do Ophiocordyceps unilateralis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Pinguim-imperador",
      "descricao": "Maior e mais pesado dos pinguins (Aptenodytes forsteri), endêmico da Antártida, com manchas amarelas nos lados da cabeça."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que documentário francês vencedor do Oscar acompanha aves antárticas caminhando dezenas de quilômetros pelo gelo até o local onde se reproduzem?",
    "resposta": "A Marcha dos Pinguins",
    "fonte": [
      "https://en.wikipedia.org/wiki/March_of_the_Penguins",
      "https://pt.wikipedia.org/wiki/A_Marcha_dos_Pinguins"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/March_of_the_Penguins",
        "situacao": "ok",
        "texto": "March of the Penguins (French: La Marche de l'empereur; French pronunciation: [la maʁʃ də lɑ̃ˈpʁœʁ]) is a 2005 French nature documentary film directed and written by Luc Jacquet. The documentary depicts the yearly journey of the emperor penguins of Antarctica. In autumn, all the penguins of breeding age (five years old and over) leave the ocean, which is their normal habitat, to walk inland to the\n[…]\nThe French release was handled by Buena Vista International France, a division of Walt Disney Studios. Disney also attempted to get American distribution rights to the film, but their bid ultimately failed; the English-language distribution rights were later acquired at the Sundance documentary festival in January 2005 by Adam Leipzig of National Geographic Films, who had forged a distribution partnership with Warner Bros.\n[…]\nThe first screening of the documentary was at the Sundance Film Festival in the United States on 21 January 2005. It was released in France the next week, on 26 January, where it earned a 4-star rating from AlloCiné, and was beaten at the box office only by The Aviator during its opening week.\n[…]\nThe French version of the documentary was released on DVD in France by Buena Vista Home Entertainment France on 26 July 2005 with a Blu-Ray release from Walt Disney Studios Home Entertainment France on 31 October 2008. It was later reissued on DVD on 1 June 2010 as a Disneynature product. The DVD extras address some of the criticisms the documentary had attracted, most notably by reframing the documentary as a scientific study and adding facts to what would otherwise have been a family film.\n[…]\nMarch of the Penguins 2: The Next Step (French: L'Empereur) was released by Disneynature in France on 15 February 2017, with narration by Lambert Wilson. The film was alternatively titled March of the Penguins 2: The Call.\n[…]\nList of highest-grossing documentary films"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Marcha_dos_Pinguins",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Ararinha-azul",
      "descricao": "Pequena arara azul (Cyanopsitta spixii) da caatinga do norte da Bahia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que animação de 2011, dirigida pelo brasileiro Carlos Saldanha, tem como protagonista uma ararinha-azul criada nos Estados Unidos?",
    "resposta": "Rio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rio_(2011_film)",
      "https://pt.wikipedia.org/wiki/Rio_(filme)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rio_(2011_film)",
        "situacao": "ok",
        "texto": "Rio is a 2011 American animated musical adventure comedy film directed by Carlos Saldanha and written by Don Rhymer, Joshua Sternin, Jennifer Ventimilia, and Sam Harper. The title refers to the Brazilian city of Rio de Janeiro, where the film is set. Produced by 20th Century Fox Animation and Blue Sky Studios, the film features the voices of Anne Hathaway, Jesse Eisenberg, Jemaine Clement, Leslie \n[…]\nThe film was also dedicated to the memory of Clymene Campos Saldanha, the mother of Carlos Saldanha who died on December 11, 2010, during production.\n[…]\nA sequel, titled Rio 2, was released on April 11, 2014. Carlos Saldanha, the creator and director of the first film, returned as director. All of the main cast—Anne Hathaway, Jesse Eisenberg, Jemaine Clement, Jamie Foxx, will.i.am, Tracy Morgan, George Lopez, Jake T. Austin, Leslie Mann, and Rodrigo Santoro—reprised their roles. New cast includes Andy García, Bruno Mars, Kristin Chenoweth, Rita Moreno, Amandla Stenberg, Rachel Crow, Pierce Gagnon, and Natalie Morales.\n[…]\nThe sequel follows Blu, Jewel, and their three kids on a venture into the Amazon where they try to live like real birds. Eventually, they find Jewel's long-lost father, Eduardo, who is in hiding with a tribe of other Spix's macaw. At first everything seems perfect, but Blu is having trouble adapting to the wild. Eventually, they discover that the Amazon is under threat, and that Blu and Jewel's old nemesis, Nigel the cockatoo, is back for revenge.\n[…]\nDirector Carlos Saldanha had kept the possibility for a third Rio film open. In an April 2014 interview, he stated, \"Of course, I have a lot of stories to tell, so we're [starting to] prepare for it.\" In a press kit released by Disney for the 2022 film The Ice Age Adventures of Buck Wild, it is mentioned that \"the next installment in the Rio franchise\" is in development, with Ray DeLaurentis writing the screenplay."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_(filme)",
        "situacao": "desambiguacao",
        "texto": "Rio pode referir-se a:\n\n\n== Geografia ==\nRio — curso de água\n\n\n=== Brasil ===\nRio de Janeiro — cidade\nRio de Janeiro (estado)\n\n\n=== Estados Unidos ===\nRio (Flórida) — cidade no condado de Martin\nRio (Illinois) — vila no condado de Knox\nRio (Wisconsin) — vila no condado de Columbia\n\n\n== Arte ==\nRio (álbum) — álbum de 1982 da banda de rock/new wave Duran Duran\nRio (canção) — canção-título do álbum h"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Micorriza",
      "descricao": "Associação simbiótica entre fungos do solo e as raízes de plantas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Micorriza, a parceria entre fungos e plantas no solo, junta duas palavras gregas. Uma quer dizer fungo. O que quer dizer a outra?",
    "resposta": "Raiz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mycorrhiza",
      "https://pt.wikipedia.org/wiki/Micorriza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mycorrhiza",
        "situacao": "ok",
        "texto": "A mycorrhiza (from Ancient Greek  μύκης (múkēs) 'fungus' and  ῥίζα (rhíza) 'root'; pl. mycorrhizae, mycorrhiza, or mycorrhizas) is a symbiotic association between a fungus and a plant, in which fungal hyphae and plant roots become interconnected and form an interface on the cellular level. The term mycorrhiza refers to the role of the fungus in the plant's rhizosphere, the plant root system and it\n[…]\nAlthough salinity can negatively affect mycorrhizal fungi, many reports show improved growth and performance of mycorrhizal plants under salt stress conditions.\n[…]\nGases such as SO2, NOx, and O3 produced by human activity may harm mycorrhizae, causing reduction in \"propagules, the colonization of roots, degradation in connections between trees, reduction in the mycorrhizal incidence in trees, and reduction in the enzyme activity of ectomycorrhizal roots.\"\n[…]\nA company in Israel, Groundwork BioAg, has discovered a method of using mycorrhizal fungi to increase agricultural crops while sequestering greenhouse gases and eliminating CO2 from the atmosphere.\n[…]\nIn 2021, the Society for the Protection of Underground Networks was launched. SPUN is a science-based initiative to map and protect the mycorrhizal networks regulating Earth's climate and ecosystems. Its stated goals are mapping, protecting, and harnessing mycorrhizal fungi.\n[…]\nMycorrhizal fungi and soil carbon storage\n[…]\nMycorrhizal Network (Wood Wide Web)\n[…]\nInternational Mycorrhiza Society International Mycorrhiza Society\n[…]\nMohamed Hijri: A simple solution to the coming phosphorus crisis video recommending agricultural mycorrhiza use to conserve phosphorus reserves & 85% waste problem @Ted.com\n[…]\nMycorrhizal Associations: The Web Resource Comprehensive illustrations and lists of mycorrhizal and nonmycorrhizal plants and fungi\n[…]\nMycorrhizas – a successful symbiosis Biosafety research into genetically modified barley"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Micorriza",
        "situacao": "ok",
        "texto": "Micorriza ou Micorrhyzum é uma associação mutualística do tipo simbiótico, existente entre certos fungos e raízes de algumas plantas.\n[…]\nMicorrizas são associações entre fungos e raízes de determinadas plantas. As hifas do fungo associam-se às raízes das plantas e vão auxiliar na absorção de água e sais minerais do solo (principalmente fósforo e nitrogênio), já que aumentam a superfície de absorção ou rizosfera.\n[…]\n6 - Micorrizas Ericóides\n[…]\n7 - Micorrizas orquidóides.\n[…]\nEndomicorrizas-Essas associações, também chamadas micorrizas arbusculares, são formadas por fungos da ordem Glomales, classe dos Zigomicetos. São fungos com hifas asseptadas que colonizam as raízes de plantas de quase todos os gêneros das Gimnospermas e Angiospermas, além de alguns representantes das Briófitas e Pteridófitas.\n[…]\nO fungo coloniza as células do córtex radicular tanto internamente quanto extracelularmente, formando os chamados arbúsculos, estruturas altamente ramificadas, típicas das endomicorrizas. Nessas micorrizas podem ser encontradas também, em algumas espécies de fungos, hifas com dilatações terminais denominadas vesículas, razão pela qual as endomicorrizas eram anteriormente denominadas micorrizas vesiculares-arbusculares.\n[…]\nEctendomicorrizas - É um tipo intermediário entre as endomicorrizas e as ectomicorrizas. Essas associações possuem muitas das características das ectomicorrizas, apresentando rede de Hartig grossa e alto grau de penetração intracelular, especialmente nas partes mais velhas da raíz. Ocorrem principalmente em membros das coníferas como no gênero Pinus e o fungo da classe dos ascomicetos do gênero Tricharina."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Proteu",
      "descricao": "Salamandra cega e despigmentada Proteus anguinus, que vive em cavernas dos Alpes Dináricos, sobretudo na Eslovênia."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na Eslovênia, o proteu, uma salamandra cega e branca das cavernas, já foi tido como filhote de que criatura lendária?",
    "resposta": "Dragão",
    "distratores": [
      "Basilisco",
      "Serpente marinha",
      "Grifo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Olm"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olm",
        "situacao": "ok",
        "texto": "Olms (German: [ɔlm] ) are the nine species in the genus Proteus. They are aquatic salamanders, and the only exclusively cave-dwelling chordate genus found in Europe. The genus is assigned to the family Proteidae, along with Necturus. In contrast to most amphibians, this genus is entirely aquatic; eating, sleeping, and breeding underwater.\n[…]\nProteus anguinus (Laurenti, 1768), with the common name Stična's olm\n[…]\nIt has several features separating it from the nominotypical subspecies (Proteus a. anguinus):\n[…]\nA potential species, Proteus bavaricus, is speculated to be closely related to P. anguinus. The species was described from a single bone by George Brunner, and the holotype is housed in his private collection. It was found in Bavaria's Devil's Cave, in the Pleistocene layer. In his 1998 book, J. Alan Hollman described the species as a \"problematic\" taxon, saying that Brunner's drawing of the bone does not adequately show the differences between P. bavaricus and P. anguinus.\n[…]\nThe first researcher to retrieve a live olm was a physician and researcher from Idrija, Giovanni Antonio Scopoli, who sent dead specimens and drawings to colleagues and collectors. Josephus Nicolaus Laurenti, though, was the first to briefly describe the olm in 1768 and give it the scientific name Proteus anguinus. It was not until the end of the century that Carl Franz Anton Ritter von Schreibers from the Naturhistorisches Museum of Vienna started to look into this animal's anatomy.\n[…]\nA Dr Edwards was quoted in a book of 1839 as believing that \"...the Proteus Anguinis is the first stage of an animal prevented from growing to perfection by inhabiting the subterraneous waters of Carniola.\"\n[…]\nFlora and Fauna of Caves: Proteus anguinus\n[…]\nSlovenian practice example: Human Fish (Proteus anguinus)\n[…]\nThe Global Amphibian Assessment – Proteus anguinus"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Proteus_anguinus",
        "situacao": "ok",
        "texto": "O proteus (Proteus anguinus) é um anfíbio cego endémico às águas subterrâneas das cavernas dos carstes dináricos do sul da Europa. O seu habitat inclui as águas que fluem debaixo do solo através da extensa região calcária que inclui as águas da bacia do rio Soča, perto de Trieste, Itália, através do sul da Eslovénia, sudoeste da Croácia, e a Herzegovina.\n[…]\nO proteus é a única espécie no seu género, Proteus, o único representante europeu da família Proteidae, e o único Cordado europeu que habita exclusivamente nas zonas sem luz de cavernas. É por vezes chamado de peixe humano pelos habitantes locais devido à parecença da sua pele com a dos humanos, assim como salamandra das cavernas ou salamandra branca.\n[…]\nA primeira menção escrita do proteus é na obra de Janez Vajkard Valvasor, A Glória do Ducado de Carniola (1689) como um dragão bebé. Isto é uma referência a um folclore em que ele próprio não acreditava. O primeiro investigador a recuperar um proteus vivo foi um médico e investigador de Idrija, Giovanni Antonio Scopoli; ele mandou espécimens mortos e desenhos a colegas e colecionadores.[carece de fontes]?\n[…]\nO proteus está incluído na lista vermelha de espécies em perigo de extinção da Eslovénia. As cavernas de Postojna e outras habitadas por proteus foram também incluídas na parte eslovena da rede Natura 2000.\n[…]\nO proteus é o símbolo da biodiversidade eslovena. O entusiasmo de cientistas e do público em geral acerca deste habitante das cavernas eslovenas é ainda forte 300 anos depois da sua descoberta. A caverna de Postojna é um dos locais de nascimentos da espeleobiologia devido ao proteus e outros habitantes das cavernas. A imagem do proteus contribuiu significativamente para a fama da caverna Postojna, que é usada para promoção do eco-turismo em Postojna e outras partes do karst esloveno.\n[…]\n«Revista Proteus» (em esloveno)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Osedax",
      "descricao": "Gênero de vermes marinhos sem boca que vivem nos ossos de carcaças de baleias no fundo do mar."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os vermes do gênero Osedax, que vivem em carcaças de baleias no fundo do mar, têm um nome latino que significa devorador de quê?",
    "resposta": "Ossos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Osedax"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Osedax",
        "situacao": "ok",
        "texto": "Osedax is a genus of siboglinid polychaetes, commonly called snot worms, bone-eating worms, or zombie worms. Osedax is Latin for 'bone devourer', derived from the worms' unique ecological niche of bone-boring. Osedax settle on a bone, then secrete an acid through specialized root tissues to dissolve the bone's external layers in order to access the lipids within.\n[…]\nLike other siboglinids, Osedax lacks a mouth, gut, or anus, and instead depends on colonies of endosymbiont microbes housed inside a trophosome for nutrition. Unlike other siboglinids, however, this trophosome takes the form of a vascularized root system which penetrates bone. These microbes, of the order Oceanospirillales, produce enzymes which hydrolyze collagen from bones, yielding nutrition to the worms.\n[…]\nOsedax rely on symbiotic species of bacteria that aid in the digestion of whale proteins and lipids and release nutrients that the worms can absorb. Osedax have colorful feathery plumes that also act as gills and unusual root-like structures that absorb nutrients. The Osedax secrete acid (rather than rely on teeth) to bore into bone to access the nutrients. High concentrations of carbonic anhydrase are found in the roots of Osedax.\n[…]\nMature female Osedax worms spawn eggs into the mucus attached to their tubes, where the embryos develop for 3 days.\n[…]\nOsedax and their borings enhance local biodiversity by dissolving the tough external cortical bone and tunneling through their internal layers, increasing structural complexity and providing new regions for microfauna to colonize. As such, Osedax are considered ecosystem engineers. However, these borings compromise the structural integrity of the bones, causing them to collapse after extensive boring, rendering these new habitats temporary.\n[…]\nBBC website – link to story about discovery of Osedax worms in the North Sea"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Osedax",
        "situacao": "ok",
        "texto": "Osedax é um gênero de poliquetas Siboglinidaes de regiões abissais do mar profundo, popularmente chamados de vermes zumbis. Osedax significa \"comedor de osso\". O nome faz alusão  a forma como os vermes penetram nos ossos de carcaças de baleias para chegar até o lipídio enclausurado de onde retiram o seu sustento. Cientistas do  Monterey Bay Aquarium Research Institute usando o submarino ROV Tiburo\n[…]\nOs vermes foram achados vivendo nos ossos decadentes de uma baleia-cinzenta no Cânion Monterey, a uma profundidade de 2.893 m.\n[…]\nOs vermes parecem ser altamente fecundos e se reproduzirem continuamente. Isso pode ajudar a explicar porque Osedax é um gênero tão diverso, embora tenha-se uma raridade de ossos em carcaças de baleias no oceano.\n[…]\nO papel dos Osedax na degradação de vertebrados marinhos continua sendo controverso. Alguns cientistas acreditam que eles são especializados em ossos de baleias, enquanto outros pensam que é mais generalista. Essa controvérsia ocorre devido ao paradoxo biogeográfico: apesar da raridade e natureza efêmera das carcaças de baleias, o gênero Osedax tem um grande alcance biogeográfico e é surpreendentemente diverso.\n[…]\nOutros cientistas vão de encontro a essa teoria, apontando que os ossos de vaca do experimento não combinam com qualquer habitat natural e a baixa probabilidade de carcaças de animais mamíferos terrestres chegarem ao fundo do oceano em quantidades significantes. Também mostram que os restos desaparecem rápido demais para os Osedax colonizaram e a falta de qualquer colônia observada em casos semelhantes.\n[…]\nO verdade papel dos Osedax na degradação de vertebrados marinhos é importante para a tafonomia de vertebrados marinhos. Buracos similares aos feitos por espécies de Osedax tem sido achadas em ossos de pássaros marinhos antigos e plesiossauria, sugerindo que o gênero teve um leque maior de comida.\n[…]\nImprensa relatando a descoberta dos Osedax",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Erva-de-passarinho",
      "descricao": "Nome popular de plantas hemiparasitas que crescem sobre galhos de árvores, cujas sementes são espalhadas por aves."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por que a erva-de-passarinho, planta que vive como parasita nos galhos de árvores, tem esse nome?",
    "resposta": "As aves espalham suas sementes",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Erva-de-passarinho",
      "https://en.wikipedia.org/wiki/Mistletoe"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Erva-de-passarinho",
        "situacao": "ok",
        "texto": "Erva-de-passarinho, visco, ou guirarepoti, são as plantas arbustivas hemiparasitas das famílias Loranthaceae e Santalaceae, pertencentes à Ordem das Santalales. Nativa em todos os continentes do mundo, parasita diversas espécies de árvores de grande porte.\n[…]\nConforme o Dicionário Michaelis, a planta possui frutos \"muito apreciados pelos pássaros\" e que \"contêm sementes que estes disseminam com as fezes que depositam sobre a casca das plantas hospedeiras\". Isso explica o nome nativo da planta, guirarepoti, que em tupi antigo significava \"fezes de passarinho\" (guirá, ave, pássaro; e repoti, fezes).\n[…]\nVisco é a denominação popular mais comum em Portugal, mas a planta também é conhecida como visgo ou agárico. No Brasil, ela é amplamente conhecida como erva-de-passarinho ou enxerto-de-passarinho.\n[…]\nOs indígenas brasileiros, contudo, a conheciam como guirarepoti, que em língua tupi significa “excremento de aves” (guira = ave, repoti ou tepoti = excremento). Isso indica que os povos indígenas do Brasil já conheciam as ervas-de-passarinho muito antes de ela ser descrita pela taxonomia oficial.\n[…]\nAcredita-se que os índios provavelmente observaram alguma espécie de ave, como os gaturamos do gênero Euphonia, defecando as pequenas sementes de alguma erva-de-passarinho, como as do gênero Phoradendron.\n[…]\nViscum album abietis, o visco dos abetos.\n[…]\nAs ervas-de-passarinho são plantas cuja dispersão de sementes se dá a partir da planta-mãe, sendo feita por aves frugívoras ou morcegos através de defecação ou regurgitação sobre as futuras plantas hospedeiras ou sobre seus galhos, como ocorre nos gêneros Struthanthus e Psittacanthus.\n[…]\nNa série em quadrinhos Asterix, o druida Panoramix colhia o gui (“visco” em francês) das árvores."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mistletoe",
        "situacao": "ok",
        "texto": "Mistletoe is the common name for obligate hemiparasitic plants in the order Santalales. They are attached to their host tree or shrub by a structure called the haustorium, through which they extract water and nutrients from the host plant. There are hundreds of species which mostly live in tropical regions.\n[…]\nOver the centuries, the term mistletoe has been broadened to include many other species of parasitic plants with similar habits, found in other parts of the world, that are classified in different genera and families such as the Misodendraceae of South America and the mainly southern hemisphere tropical Loranthaceae.\n[…]\nParasitism has evolved at least twelve times among the vascular plants. Molecular data show the mistletoe habit has evolved independently five times within the Santalales—first in the Misodendraceae, but also in the Loranthaceae and three times in the Santalaceae (in the former Santalalean families Eremolepidaceae and Viscaceae, and the tribe Amphorogyneae).\n[…]\nMistletoe species grow on a wide range of host trees, some of which experience side effects including reduced growth, stunting, and loss of infested outer branches. A heavy infestation may also kill the host plant. Viscum album successfully parasitizes more than 200 tree and shrub species.\n[…]\nAll mistletoe species are hemiparasites because they do perform some photosynthesis for some period of their life cycle. However, in some species its contribution is very nearly zero. For example, some species, such as Viscum minimum, that parasitize succulents, commonly species of Cactaceae or Euphorbiaceae, grow largely within the host plant, with hardly more than the flower and fruit emerging.\n[…]\n\"Mistletoe\" . The New Student's Reference Work . 1914.\n[…]\nANBG: Mistletoe Accessed 22 January 2018."
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Iceberg",
      "descricao": "Grande bloco de gelo de água doce desprendido de uma geleira ou plataforma de gelo, que flutua no mar."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Que parte de um iceberg costuma ficar escondida debaixo d'água?",
    "resposta": "Cerca de nove décimos",
    "distratores": [
      "Cerca de metade",
      "Cerca de um terço",
      "Cerca de três quartos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Iceberg",
      "https://pt.wikipedia.org/wiki/Iceberg"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iceberg",
        "situacao": "ok",
        "texto": "An iceberg is a piece of fresh water ice more than 15 meters (16 yards) long that has broken off a glacier or an ice shelf and is floating freely in open water. Smaller chunks of floating glacially derived ice are called \"growlers\" or \"bergy bits\". Much of an iceberg is below the water's surface, which led to the expression \"tip of the iceberg\" to illustrate a small part of a larger unseen issue. \n[…]\nDome: An iceberg with a rounded top.\n[…]\nOne of the most infamous icebergs in history is the iceberg that sank the Titanic. The catastrophe led to the establishment of an International Ice Patrol shortly afterwards. Icebergs in both the northern and southern hemispheres have often been compared in size to multiples of the 59.1 square kilometres (22.8 sq mi)-area of Manhattan Island.\n[…]\nAlbert Bierstadt made studies on arctic trips aboard steamships in 1883 and 1884 that were the basis of his paintings of arctic scenes with colossal icebergs made in the studio.\n[…]\nAmerican poet, Lydia Sigourney, wrote the poem \"Icebergs\". While on a return journey from Europe in 1841, her steamship encountered a field of icebergs overnight, during an Aurora Borealis. The ship made it through unscathed to the next morning, when the sun rose and \"touched the crowns, Of all those arctic kings\".\n[…]\nBecause much of an iceberg is below the water's surface and not readily visible, the expression \"tip of [an] iceberg\" is often used to illustrate that what is visible or addressable is a small part of a larger unseen issue.\n[…]\nMetaphorical references to icebergs include the iceberg theory or theory of omission in writing adopted, for example, by Ernest Hemingway, Sigmund Freud's iceberg model of the psyche, the \"behavioural iceberg\", and models analysing the frequencies of accidents and underlying errors.\n[…]\nIceberg Finder Service for east coast of Canada\n[…]\nIcebergs of The Arctic and Antarctic\n[…]\nWorks related to Iceberg at Wikisource"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Iceberg",
        "situacao": "ok",
        "texto": "Um iceberg, aicebergue, icebergue (do inglês iceberg, em última análise do holandês ijsberg, literalmente \"montanha de gelo\") ou geleira, é um bloco ou massa de gelo de grandes proporções que, tendo-se desprendido de uma geleira (por exemplo, das existentes nas calotas polares, originárias da era glacial), de um glaciar ou de uma plataforma de gelo continental, vagueia pelo mar, levado pelas águas\n[…]\nDe cada icebergue, apenas cerca de 10% da sua massa (ou volume, dado que a massa específica da água, mesmo no estado sólido, é significantemente próxima de 1 g.cm−3) emerge à superfície. A rigor, a massa específica do gelo em condições polares vale 0,917 g.cm−3, e permanece essencialmente constante durante toda a \"vida\" útil do bloco como tal, embora lenta, mas progressivamente crescente com o decurso do tempo e o contato com o meio por onde flutua.\n[…]\nOs demais cerca de 90% permanecem submersos, donde o enorme perigo que conferem especialmente à navegação. Em se tratando de dimensões lineares, notadamente a altura, tem-se que, em média, cerca de 1/7 do iceberg aflora, emerso à superfície, enquanto os demais 6/7 constituem a porção oculta, o lastro submerso da massa polar flutuante.\n[…]\nA flutuação do iceberg decorre do fato físico que o gelo polar (de água doce) possui massa específica (ou densidade absoluta) de cerca de 0,917 g.cm−3, enquanto a água do mar, por ser solução salina, apresenta massa específica necessariamente maior do que 1 g.cm−3 (em média, 1,025 g.cm−3). Assim, pelo Princípio de Arquimedes, o iceberg necessariamente flutua na água do mar. As dimensões lineares (alturas) e as massas e os volumes emerso e imerso (submerso) calculam-se pelas leis da hidrostática.\n[…]\nO exemplo mais conhecido de colisão naval com um iceberg é o episódio do naufrágio do transatlântico RMS Titanic em 14 de abril de 1912."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Regra dos dez por cento",
      "descricao": "Princípio ecológico segundo o qual só cerca de dez por cento da energia de um nível trófico passa para o nível seguinte."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Numa cadeia alimentar, que parte da energia de um nível costuma passar para o nível seguinte?",
    "resposta": "Cerca de dez por cento",
    "distratores": [
      "Cerca de metade",
      "Cerca de um quarto",
      "Quase toda"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ten_percent_law",
      "https://en.wikipedia.org/wiki/Trophic_level"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ten_percent_law",
        "situacao": "ok",
        "texto": "Ecological efficiency is the efficiency with which energy is transferred from one trophic level to the next. It is determined by a combination of efficiencies relating to organismic resource acquisition and assimilation in an ecosystem.\n[…]\nOut of a total of 28,400 terawatt-hours (96.8×10^15 BTU) of energy used in the US in 1999, 10.5% was used in food production, with the percentage accounting for food from both producer and primary consumer trophic levels. In comparing the cultivation of animals versus plants, there is a clear difference in magnitude of energy efficiency.\n[…]\nThe ten percent law of transfer of energy from one trophic level to the next can be attributed to Raymond Lindeman (1942),  although Lindeman did not call it a \"law\" and cited ecological efficiencies ranging from 0.1% to 37.5%. According to this law, during the transfer of organic food energy from one trophic level to the next higher level, only about ten percent of the transferred energy is stored as flesh.\n[…]\nThe ten percent law provides a basic understanding on the cycling of food chains. Furthermore, the ten percent law shows the inefficiency of energy capture at each successive trophic level. The rational conclusion is that energy efficiency is best preserved by sourcing food as close to the initial energy source as possible.\n[…]\nMarine environments exhibit some differences from terrestrial environments, and transfer efficiencies between marine trophic levels are generally higher. Compared to the 10% transfer efficiency in the terrestrial environment suggested by the \"ten percent law\", the transfer efficiency between marine primary producers (phytoplankton) and primary consumers (herbivorous zooplankton) is estimated to be at about 20%."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Trophic_level",
        "situacao": "ok",
        "texto": "The trophic level of an organism is the position it occupies in a food web. Within a food web, a food chain is a succession of organisms that eat other organisms and may, in turn, be eaten themselves. The trophic level of an organism is the number of steps it is from the start of the chain. A food web starts at trophic level 1 with primary producers such as plants, can move to herbivores at level "
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Caranguejo-vermelho-da-ilha-christmas",
      "descricao": "Caranguejo terrestre Gecarcoidea natalis, famoso pela migração em massa até o mar para desovar."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Todo ano, milhões de caranguejos-vermelhos cobrem estradas e florestas a caminho do mar para desovar. Em que ilha australiana do Oceano Índico isso acontece?",
    "resposta": "Ilha Christmas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Christmas_Island_red_crab"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Christmas_Island_red_crab",
        "situacao": "ok",
        "texto": "The Christmas Island red crab (Gecarcoidea natalis) is a species of land crab that is endemic to Christmas Island and Cocos (Keeling) Islands in the Indian Ocean. Although restricted to a relatively small area, an estimated 43.7 million adult red crabs once lived on Christmas Island alone, but the accidental introduction of the yellow crazy ant is believed to have reduced the population by about a\n[…]\nAdult red crabs have no natural predators on Christmas Island. The yellow crazy ant, an invasive species accidentally introduced to Christmas Island and Australia from Africa, is believed to have killed 10–15 million red crabs (one-quarter to one-third of the total population) in recent years. In total (including killed), the ants are believed to have displaced 15–20 million red crabs on Christmas Island.\n[…]\nDuring their larval stage, millions of red crab larvae are eaten by fish and large filter-feeders such as manta rays and whale sharks which visit Christmas Island during the red crab breeding season.\n[…]\nCoconut crabs (alternatively known as robber crabs) have also been filmed on Christmas Island preying on red crabs.\n[…]\nEarly inhabitants of Christmas Island rarely mentioned these crabs. It is possible that their current large population size was caused by the extinction of the endemic Maclear's rat (Rattus macleari) in 1903, which may have limited the crab's population.\n[…]\nIn recent years, the human inhabitants of Christmas Island have become more tolerant and respectful of the crabs during their annual migration and are now more cautious while driving, which helps to minimise crab casualties. Their small size, high water content and poor meat quality mean they are not considered edible by humans.\n[…]\nChristmas Island National Park Website\n[…]\nWebpage about Christmas Island, describes crisis of Yellow Crazy ants\n[…]\nWebsite showing the crabs of Christmas Island including the red crab migration"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Ijen",
      "descricao": "Complexo vulcânico em Java Oriental, com lago de cratera ácido e chamas azuis de enxofre."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O vulcão Ijen, onde mineiros extraem enxofre e o gás em chamas forma um fogo azul à noite, fica em que país?",
    "resposta": "Indonésia",
    "distratores": [
      "Filipinas",
      "Japão",
      "Islândia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ijen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ijen",
        "situacao": "ok",
        "texto": "The Ijen volcano complex is a group of composite volcanoes located on the border between Banyuwangi Regency and Bondowoso Regency of East Java, Indonesia. It is known for its blue fire, acidic crater lake, and labour-intensive sulfur mining.\n[…]\nIt is inside an eponymous larger caldera Ijen, which is about 20 kilometres (12 mi) wide. The Gunung Merapi stratovolcano is the highest point of that complex. The name \"Gunung Merapi\" means 'mountain of fire' in the Indonesian language; Mount Merapi in central Java and Marapi in Sumatra have the same etymology.\n[…]\nMany other post-caldera cones and craters are located within the caldera or along its rim. The largest concentration of post-caldera cones runs east–west across the southern side of the caldera. The active crater at Kawah Ijen has a diameter of 722 metres (2,369 ft) and a surface area of 0.41 square kilometres (0.16 sq mi). It is 200 metres (660 ft) deep and has a volume of 36 cubic hectometres (29,000 acre⋅ft).\n[…]\nIjen Express\n[…]\nList of volcanoes in Indonesia\n[…]\nIjen Gallery\n[…]\nVolcanological Survey of Indonesia Archived 15 June 2006 at the Wayback Machine\n[…]\nOfficial website of Indonesian volcanoes at USGS Archived 15 May 2011 at the Wayback Machine\n[…]\nLarge photogallery from Kawah Ijen Archived 1 August 2020 at the Wayback Machine\n[…]\nSulfur mining in Kawah Ijen (The Big Picture photo gallery at Boston.com)\n[…]\n\"Traditional sulfur mining in Kawah Ijen\". Yahoo! News. 11 October 2013.\n[…]\nMore sulfur mining pictures at Ijen Archived 24 September 2010 at the Wayback Machine\n[…]\nSpectacular Neon Blue Lava Pours From Indonesia's Kawah Ijen Volcano At Night (PHOTOS)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ijen",
        "situacao": "ok",
        "texto": "Ijen é um complexo vulcânico composto por um grupo de estratovulcões situado perto da costa oriental da ilha indonésia de Java, nas regência de Bondowoso e Banyuwangi da província de Java Oriental.\n[…]\nA pouca distância a oeste do Merapi situa-se o vulcão Kawah Ijen, no qual existe um lago de cratera de cor turquesa, com diâmetro de 722 m, 0,41 km² de área, 200 m de profundidade e 36 000 000 m³ de volume, considerado o maior lago fortemente ácido do mundo.\n[…]\nO lago de Kawah Ijen é explorado intensivamente para extração de enxofre, o qual é extraído à mão do fundo da cratera e depois transportado em cestos carregados às costas de trabalhadores ao longo de três quilómetros, até ao vale de Paltuding. O lago é também a nascente do rio Banyupahit, um curso de água muito ácida e carregada de metais que tem efeitos significativamente prejudiciais nos ecossistemas a jusante.\n[…]\nHá um fenómeno na cratera, denominado lava azul, que se tornou uma atração turística, principalmente desde que a National Geographic se referiu a ele. Trata-se das chamas azul-elétrico visíveis à noite, devidas ao gás sulfúrico (que é emanado de rachaduras) a arder a temperaturas que chegam aos 600 °C.\n[…]\nCada mineiro carrega entre 75 e 90 kg ao longo da encosta de 300 metros do bordo da cratera, com uma inclinação de 45 a 60 graus, e depois durante três quilómetros montanha abaixo. Muitos dos mineiros fazem este percurso duas vezes por dia.\n[…]\nUma refinaria de açúcar próxima paga o enxofre aos mineiros ao quilograma; em setembro de 2010, o rendimento típico diário dos mineiros não chegava aos 10 €  e a proteção enquanto trabalhavam no vulcão era muito insuficiente, o que provocava muitos problemas respiratórios.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.44 — 2026-10-02**
>
> Este documento define **o que é uma boa pergunta** no Mestre2 e **como o banco de perguntas é organizado e produzido**. Vale para qualquer pessoa ou modelo que crie, revise ou processe perguntas.
>
> Ele tem duas partes:
> - **Parte I — Regras de conteúdo (§1 a §9):** o que uma pergunta deve ser. É a parte que o gerador e o crítico automáticos recebem.
> - **Parte II — Organização e processo (§10 a §18):** esquemas, fluxo de produção, decisões, pendências, o jogo, o app e a programação até 10 000 perguntas. É a referência de quem mantém o projeto.
>
> Arquivos relacionados:
> - [`pergunta.schema.json`](pergunta.schema.json) e [`ancora.schema.json`](ancora.schema.json): esquemas
> - [`temas_subtemas.json`](temas_subtemas.json): lista canônica de temas e subtemas
> - [`exemplos_perguntas.json`](exemplos_perguntas.json) · [`exemplos_ancoras.json`](exemplos_ancoras.json)
> - [`proposta_temas_subtemas.md`](proposta_temas_subtemas.md): histórico da revisão da lista canônica
> - [`../pipeline/README.md`](../pipeline/README.md): o pipeline que produz as perguntas
> - [`../app/`](../app/): o app que usa as perguntas numa partida (§16)
> - [`modo_trilha_da_vida.md`](modo_trilha_da_vida.md): rascunho do segundo modo de jogo, em concepção (§15)

---

# Parte I — Regras de conteúdo

## 1. Princípios

1. **As perguntas vêm antes das regras.** O banco não depende de nenhuma regra de jogo. Um bom banco serve a qualquer regra, e o contrário não é verdade.
2. **A pergunta é ouvida, não lida.** Quem responde nunca vê o texto, e só vê uma figura quando a pergunta tiver uma (§6). Quem lê é um jogador comum, não um apresentador, e o papel muda a cada pergunta (§15). Se não funciona em voz alta, não funciona.
3. **Uma pergunta, uma resposta.** Se duas respostas podem ser defendidas, a pergunta está errada.
4. **Profundidade vem do fato, não da obscuridade.** Uma pergunta surpreendente sobre algo famoso vale mais que uma pergunta sobre algo que ninguém conhece.
5. **A variedade é medida, não esperada.** Cada pergunta tem uma âncora e um ângulo, e o equilíbrio do banco é conferido com números.
6. **Toda pergunta tem fonte e resiste ao tempo.** Nada de "atual", "recente" ou recordes que ainda podem ser batidos.
7. **Errar deve ser interessante.** Quem erra deve pensar "que legal", e não "que injusto".
8. **Menos e melhor.** Na dúvida, descarte.
9. **O esquema é estável.** Ele só muda por acréscimo de campos opcionais, nunca por remoção, renomeação ou mudança de tipo (§10).
10. **O fluxo é automático.** Nenhuma etapa depende de aprovação humana. A revisão humana é uma auditoria opcional, não um gargalo (§11).

---

## 2. Como uma pergunta é classificada

Cada pergunta tem quatro coordenadas:

| Coordenada | Responde a | Origem dos valores |
|---|---|---|
| `tema` | Qual área do conhecimento? | Lista fechada (§3) |
| `subtema` | Qual recorte dentro do tema? | Lista fechada (§3) |
| `ancora` | Sobre quem ou o quê, especificamente? | Cadastro de âncoras (§4) |
| `angulo` | Que tipo de coisa se pergunta? | Lista fechada (§5) |

- **`tema` e `subtema`** organizam o banco e permitem encomendar lotes.
- **`ancora`** controla a **profundidade** e a **repetição**: quantas perguntas existem sobre cada entidade.
- **`angulo`** controla a **variedade**: a mesma âncora, perguntada de ângulos diferentes, gera perguntas genuinamente diferentes.

---

## 3. Temas e subtemas

A lista canônica tem **8 temas e 73 subtemas** e fica em [`temas_subtemas.json`](temas_subtemas.json):

| Tema | Subtemas |
|---|---|
| Geografia | Países e Capitais · Cidades e Monumentos · Relevo e Maravilhas Naturais · Rios e Lagos · Oceanos, Mares e Ilhas · Clima e Biomas · Povos e Idiomas · Bandeiras e Símbolos · Geografia do Brasil |
| História | Pré-História e Idade do Bronze · Egito Antigo · Grécia Antiga · Roma Antiga · Antigas Civilizações do Oriente · Américas Pré-Colombianas · Idade Média · Idade Moderna · Idade Contemporânea · Primeira Guerra Mundial · Segunda Guerra Mundial · História do Brasil · História da África |
| Natureza | Mamíferos · Aves, Répteis e Anfíbios · Vida Marinha · Insetos e Invertebrados · Plantas e Fungos · Dinossauros e Fósseis · Evolução Humana · Ecossistemas e Ambientes Extremos · Geologia e História da Terra |
| Ciências | Astronomia e Espaço · Física · Química · Matemática · Corpo Humano e Medicina · Tecnologia e Computação · Invenções e História da Ciência · Biologia e Genética · Meio Ambiente e Energia |
| Artes e Pensamento | Literatura Brasileira · Literatura Mundial · Pintura · Escultura e Arquitetura · Música Clássica · Teatro e Ópera · Mitologia · Religiões · Filosofia |
| Entretenimento | Cinema · Séries e TV · Música Brasileira · Música Internacional · Jogos Eletrônicos · Anime e Mangá · Quadrinhos · Jogos de Tabuleiro e Cartas |
| Esportes | Futebol · Vôlei · Basquete · Tênis · Automobilismo · Olimpíadas · Lutas e Artes Marciais · Outras Modalidades |
| Cotidiano | Culinária e Bebidas · Língua Portuguesa e Expressões · Marcas e Produtos · Folclore e Tradições Brasileiras · Costumes pelo Mundo · Objetos do Dia a Dia · Moda e Vestuário · Transportes |

- Cada pergunta tem **um tema e um subtema**, escritos **exatamente** como na lista, com acentos e maiúsculas.
- Uma **pequena sobreposição** entre subtemas é tolerada.
- **A lista só cresce por acréscimo.** Nenhum subtema é renomeado, dividido ou fundido, para não reclassificar perguntas já existentes.
- **Escopo dos subtemas acrescentados em 2026-10-01:**
  - *Geografia do Brasil:* estados, capitais, regiões, relevo e rios do Brasil. Países e Capitais fica com os outros países.
  - *História da África:* reinos, impérios e personagens africanos, da Antiguidade à descolonização. O Egito faraônico continua em Egito Antigo.
  - *Biologia e Genética:* células, DNA, hereditariedade, evolução e classificação dos seres vivos. O corpo humano e as doenças continuam em Corpo Humano e Medicina.
  - *Meio Ambiente e Energia:* fontes de energia, poluição, reciclagem, aquecimento global e conservação. Climas e biomas continuam em Geografia › Clima e Biomas.
- **Regra de desempate:** quando dois subtemas servem, vale **o mais específico**. Uma pergunta sobre o Dia D é *Segunda Guerra Mundial*, e não *Idade Contemporânea*.

---

## 4. Âncoras

A âncora é **a entidade sobre a qual a pergunta é feita**: uma pessoa, lugar, obra, evento, espécie, objeto ou conceito específico.

- **A âncora é o assunto, não necessariamente a resposta.** Em "Quem fundou o Império Mongol?", a âncora é *Império Mongol*, e a resposta é Gengis Khan.
- **Uma única âncora por pergunta:** a entidade sobre a qual está o fato perguntado. Em perguntas de `comparacao` e `conexao`, escolha a entidade **menos óbvia**, porque é nela que está o conhecimento. Em "O que o planeta anão Plutão e o elemento plutônio têm em comum?", a âncora é *Plutônio*.
- **Regra de granularidade:** a âncora é **uma entidade específica**, com nome próprio ou como um conceito bem delimitado, e **nunca uma área inteira**.

| ✅ Âncora | ❌ Não é âncora (é tema ou subtema) |
|---|---|
| Copa do Mundo FIFA de 1970 | Futebol |
| Pelé | Futebolistas brasileiros |
| Penicilina | Medicina |
| Império Mongol | Idade Média |

Cada âncora é registrada com:
- **`nome`:** forma preferida em português;
- **`descricao`:** uma frase que identifica a entidade sem ambiguidade. É o que separa *Mercúrio, o planeta* de *Mercúrio, o elemento químico*;
- **`variantes`:** outras grafias e nomes da entidade, como "Genghis Khan" para Gengis Khan. São variantes do **nome da âncora**, e não respostas aceitas para uma pergunta;
- **`fontes`:** uma ou mais URLs confiáveis sobre a entidade, em qualquer idioma.

**Popularidade e dificuldade estimada.** O pipeline mede quanto cada âncora é procurada na Wikipédia e usa isso para estimar a dificuldade das perguntas sobre ela. O LLM não participa dessa estimativa (§12).
- **Medida:** média mensal de visitas de pessoas (sem robôs) aos artigos da âncora na Wikipédia em **português** e em **inglês**, nos últimos 12 meses completos. Os dois artigos são ligados pelo item do Wikidata.
- **Pontuação:** média geométrica que dá 2/3 do peso ao português, o público do jogo, e 1/3 ao inglês, a fama mundial. O inglês é antes convertido para a escala do português (÷15). Se faltar o artigo numa das línguas, vale só a outra.
- **Dificuldade**, de 1 (fácil) a 5 (difícil), por faixas fixas da pontuação: ≥ 20 000 visitas por mês → 1 · ≥ 5 000 → 2 · ≥ 1 500 → 3 · ≥ 500 → 4 · abaixo → 5. As faixas são fixas para que a dificuldade de uma pergunta não mude quando o banco cresce.
- **Uso apenas ilustrativo:** a dificuldade só é **exibida**, na ficha da pergunta no app. Ela **não é usada** para nenhuma decisão do projeto: nem no sorteio, nem em proporções do banco, encomendas, regras de variedade, crítica, pontuação ou tabuleiro. Também não é enviada ao gerador nem ao crítico.
- **Limites:** é uma estimativa da **fama da âncora**, e não da pergunta. Não enxerga o ângulo, então um fato obscuro sobre algo famoso continua difícil. Também confunde interesse com conhecimento: um conceito conhecido de todos, mas pouco pesquisado, como os cartões amarelo e vermelho, sai difícil.

**Limites por âncora** (o pipeline descarta o que passar deles):
- no máximo **2 perguntas por âncora** em cada lote, nunca com o mesmo ângulo;
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro;
- no máximo **3 perguntas por âncora** no banco inteiro, somando texto e figura, e no máximo **2 com figura**;
- uma pergunta nova não pode perguntar **o mesmo fato** que outra já existente sobre a mesma âncora, mesmo com outras palavras.

**Homônimos são âncoras diferentes.** Nome igual não basta: Pelé e a pele, o clube Cruzeiro e a constelação do Cruzeiro do Sul, a cidade de Washington e George Washington, um país e a sua bandeira ou a sua seleção são entidades distintas. É a `descricao` que decide.

---

## 5. Ângulos

O ângulo é **o tipo de conhecimento pedido**. Ele é definido pela **relação entre a resposta e a âncora**: para classificar uma pergunta, complete a frase *"a resposta é ___ da âncora"*.

| `angulo` | A resposta é… | Exemplo |
|---|---|---|
| `autoria` | Quem criou, descobriu, fundou ou venceu a âncora | "Em 1928, quem descobriu a penicilina?" |
| `tempo` | Quando ela ocorreu, ou a ordem em relação a outra coisa | "Em que século caiu Constantinopla?" |
| `lugar` | Onde ela está, ocorreu ou surgiu | "Em que país fica Machu Picchu?" |
| `numero` | Uma quantidade ou medida dela | "Quantos ossos tem o corpo humano adulto?" |
| `nome` | A origem do nome, um apelido ou um significado | "O nome Venezuela significa pequena versão de qual cidade?" |
| `causa` | O porquê dela, ou uma consequência dela | "Que doença matou boa parte da população da Europa no século quatorze?" |
| `composicao` | Uma parte, um membro ou um ingrediente dela | "Que fruta é a base do guacamole?" |
| `atributo` | Uma característica, propriedade ou função dela | "Qual é a moeda do Japão?" |
| `comparacao` | A que se destaca num grupo por um critério | "Qual é o maior oceano do mundo?" |
| `conexao` | O traço comum entre ela e outra entidade | "O que o planeta anão Plutão e o elemento plutônio têm em comum?" |
| `identidade` | A própria âncora, a partir de uma descrição | "Em que livro uma raposa ensina que somos responsáveis por aquilo que cativamos?" |

- **Prioridade:** quando mais de um ângulo servir, vale o **mais específico**. `identidade` e `atributo` são os mais genéricos e só valem **quando nenhum outro serve**.
- **Variedade dentro do ângulo:** perguntas do mesmo ângulo não devem seguir o mesmo molde de frase. Cinco perguntas do tipo "X é a cidade famosa, mas qual é a capital?" cansam, mesmo que cada uma seja boa.
- Os ângulos `conexao` e `nome` costumam produzir as perguntas mais memoráveis e devem ser **encomendados ativamente**.

---

## 6. Tipos de pergunta

| `tipo` | Como é jogada | Campo extra |
|---|---|---|
| `aberta` | O questionador lê e o respondente responde livremente | — |
| `multipla` | O questionador lê a pergunta e depois as alternativas | `distratores`: exatamente 3 |

- Os valores fixos, como os de `tipo` e `angulo`, são sempre minúsculos e sem acento. O app traduz para exibição.
- **Verdadeiro ou falso não existe.** Funciona mal em voz alta e dá 50% de acerto no chute.

### Distratores

- São as **alternativas erradas**. Ficam **separadas** da resposta, e **o app embaralha** as quatro opções na hora de exibir.
- Devem ser **críveis**: da mesma categoria, época e escala da resposta. Em obras de ficção, pelo menos um vem da mesma franquia.
- Cada alternativa tem **no máximo 4 palavras**, porque ninguém guarda quatro frases longas de memória.
- Só existem em perguntas do tipo `multipla`.

### Perguntas com figura

Uma pergunta de qualquer tipo pode ter uma **figura** (campo `imagem`). O questionador lê o enunciado em voz alta e **mostra a figura** ao respondente. O texto e a resposta continuam fora da vista dele.

> **Só escreve uma pergunta com figura quem examinou a imagem.** O gerador de texto nunca cria perguntas com figura: elas saem da etapa de figuras, em que o LLM abre cada imagem antes de escrever (§17). Uma pergunta sem o campo `imagem` nunca se refere a uma foto ou figura.

- **A figura é a pergunta.** A resposta sai de **reconhecer o que a imagem mostra**: "Que cidade é esta?", "Que animal é este?", "Qual é este pokémon?", "Quem pintou este quadro?", "Em que museu fica este quadro?". Teste: se trocar "este animal" pelo nome dele deixasse a pergunta igualmente boa, a figura é só enfeite, e a pergunta está errada.
- **O enunciado é curto** e diz o que se deve reconhecer (cidade, animal, monumento). Pode trazer uma pista que **ajude a distinguir**, mas que **não identifique sozinha**. Teste: cubra a imagem e leia só o enunciado; se dá para responder, a pista entrega a resposta, e a figura virou enfeite. Pistas que entregam: "Que estadista, chamado de Chanceler de Ferro, é este?" (Bismarck), "Que astro é este, o único satélite natural da Terra?" (Lua), "Que prato, feito com feijão preto e carnes, é este?" (feijoada), "Quem é esta jogadora, apelidada de Rainha?" (Hortência). Pistas que ajudam sem entregar: a época, o país, o grupo ("Que pintor holandês do século dezessete…", "Que felino africano é este?").
- **Âncora e ângulo:** a âncora é o que aparece na figura. Perguntar o que ela é dá o ângulo `identidade`; perguntar algo que só se sabe depois de reconhecê-la usa o ângulo correspondente (`autoria` para o pintor, `lugar` para o museu). As regras de variedade (§9), que limitam `identidade`, valem para os lotes do gerador e não para as perguntas com figura.
- **Tipos de figura:** lugares (cidades, monumentos, paisagens), animais, plantas, objetos e artesanato, festas populares, contornos de mapa, personagens de lendas, obras de arte em domínio público (pinturas, gravuras), pokémon e personagens de anime, mangá, quadrinhos e desenhos animados. Pinturas com direitos autorais, como as de Tarsila do Amaral, Portinari ou Dalí, ficam de fora por enquanto, porque não há fonte boa de imagem para elas.
- **Um único assunto por imagem:** nada de montagens nem pranchas com assuntos diferentes, como várias espécies ou várias obras. **Exceção:** uma montagem com cenas ou com o elenco de **uma única obra** vale, porque o assunto continua sendo um só (os retratos dos protagonistas de *Os Normais*, por exemplo), desde que não tenha texto. Montagens de pôster, com título ou créditos, continuam proibidas. Vale foto; ilustração ou escultura só para o que não pode ser fotografado, como os personagens de lendas (Saci, Mula sem cabeça).
- **Pessoas:** figuras públicas, ou brincantes e participantes de festas públicas (Parintins, bumba meu boi, cavalhadas). Fotos de pessoas comuns em outros contextos continuam proibidas.
- **Recorte permitido:** uma placa ou legenda que entregue a resposta pode ser cortada da imagem, já que as licenças livres permitem obras derivadas.
- **Política de imagens:** por padrão, imagens do Wikimedia Commons com licença livre (CC BY, CC BY-SA ou domínio público). **Enquanto o jogo não tiver fins comerciais, a arte oficial também é aceita** onde não existe imagem livre: pokémon e personagens de anime, mangá e quadrinhos. Autor, licença ou crédito e a página de origem são sempre registrados. Se o jogo passar a ter fins comerciais, essas imagens precisam ser revistas.
- **Exceção, Pokémon:** a arte oficial, com o crédito "© Nintendo / Creatures / GAME FREAK", e a Bulbapedia como fonte da âncora e da pergunta. A imagem vem do Bulbagarden Archives ou, como a Bulbapedia bloqueia acesso automatizado, da mesma arte oficial no repositório público do PokéAPI (`raw.githubusercontent.com/PokeAPI/sprites`), que fica registrado em `origem`. É arte oficial, aceita pela política de imagens acima, e não licença livre.
- **Pokémon em silhueta:** como na vinheta "Quem é esse pokémon?" do desenho, a figura da pergunta é a **silhueta preta** da arte oficial sobre raios azuis e amarelos, e a arte colorida, sobre o mesmo fundo, só aparece em "Mostrar resposta" (campo `revelacao` da imagem). A silhueta precisa ser reconhecível pela forma; se for uma mancha, ou se puder ser confundida com outro pokémon, a pergunta é reprovada.
- **Variedade dos pokémon:** "Quem é esse pokémon?" não deve ficar só nos muito conhecidos (Pikachu, os iniciais, os lendários famosos). Entram também pokémon de **todas as gerações**, **formas básicas e intermediárias**, e não só a evolução final (Charmeleon, Ivysaur, Pupitar, Grovyle), e pokémon **menos conhecidos**, que só quem jogou aquela geração reconhece. Os emblemáticos continuam, mas como uma parte pequena do catálogo. Para os menos conhecidos, a múltipla escolha com distratores de silhueta parecida deixa a pergunta justa.
- **Personagens de anime, mangá e quadrinhos:** a arte oficial do personagem, com o crédito "Arte oficial dos detentores dos direitos, via <fonte>". As fontes, em ordem: os wikis de fãs do **Fandom** (que costumam ter arte de corpo inteiro com fundo transparente), o **AniList** (anime e mangá), o **superhero-api** (heróis e vilões da Marvel e da DC) e a **Wikipédia** (a imagem do quadro de informações). A fonte da pergunta é a página do personagem no Fandom, no AniList ou na Wikipédia.
  - **Silhueta quando a imagem permite:** com fundo transparente, **um personagem sozinho**, de corpo inteiro e contorno característico, a figura vira silhueta com revelação, como nos pokémon. Senão, a pergunta mostra a imagem colorida e vai além do nome (a obra, o autor, o grupo) ou pede o nome em múltipla escolha, com distratores parecidos. Quem decide é o redator que abre a imagem.
  - **Variedade:** a mesma regra dos pokémon. No máximo 1 em cada 5 personagens é um protagonista emblemático (Goku, Naruto, Mônica, Homem-Aranha). Os outros são coadjuvantes, vilões e personagens de obras menos famosas, de várias épocas e países, com uma boa parte de quadrinhos brasileiros.
- **Cinema e TV:** três tipos de figura.
  - **Cenas de filmes e séries** (catálogo `cenas`): imagens de cena do **TMDB** (The Movie Database), só as **sem texto**, e, como reserva, trailers e fotos de divulgação em domínio público do Commons. Perguntas: de que filme ou série é a cena, quem dirigiu, em que década se passa ou foi lançado, que ator interpreta o personagem que aparece. A fonte da pergunta é o artigo da Wikipédia, com a página do TMDB.
  - **Personagens de filmes e séries** (catálogo `personagens`, o mesmo de anime e quadrinhos): Darth Vader, Chaves, Harry Potter. A imagem precisa mostrar **o personagem pedido**: um redirecionamento pode trocá-lo por outro (no Fandom, "Darth Vader" leva à página de Anakin Skywalker, com o Anakin sem máscara).
  - **Atores e atrizes** (catálogo `musicos_atores`): fotos livres do Commons, de preferência com uma pergunta que vai além do nome (o filme pelo qual ganhou um prêmio, o personagem que marcou a carreira).
  - **Variedade:** no máximo 1 em cada 5 é um emblemático (O Poderoso Chefão, Star Wars, Friends). Cerca de **um terço é brasileiro** (filmes, novelas, humorísticos, séries), e o resto varia de décadas e de países, e não fica só em Hollywood.
  - **Sem spoilers:** nada de perguntar sobre o final, a reviravolta ou a morte de um personagem.
  - **Crédito do TMDB:** o app informa que usa a API do TMDB e não é endossado nem certificado por ele, como pedem os termos de uso.
- **Proibido:** capas de álbuns, pôsteres, telas de título, logotipos, fotos de imprensa e cenas com legenda ou com o nome da obra escrito. O texto entrega a resposta.

### Diretrizes de criação das perguntas com figura

O objetivo é variedade e profundidade: o banco não deve virar uma sequência de "que animal é este?" sobre os bichos mais famosos.

**1. Catálogos de figura.** As perguntas com figura saem de **catálogos**, que são listas de entidades do mesmo tipo: bandeiras, mamíferos, pinturas, estádios, retratos, pokémon. Um catálogo não pertence a um subtema. Cada entidade vai para o subtema em que ela se encaixa melhor, e o mesmo catálogo pode alimentar vários temas:
- **Retratos:** História (governantes, líderes), Ciências (cientistas), Artes e Pensamento (escritores, compositores, filósofos), Esportes (atletas), Entretenimento (músicos, atores).
- **Pinturas:** Artes e Pensamento › Pintura, ou História, quando retratam um acontecimento.
- **Bandeiras:** Geografia › Bandeiras e Símbolos (as atuais) e História (as históricas).
- **Edifícios:** Geografia › Cidades e Monumentos, Escultura e Arquitetura, ou o subtema histórico da época.

Um subtema não precisa ter perguntas de texto para receber perguntas com figura, e a âncora de uma figura não precisa ter perguntas de texto.

**2. A âncora é o que aparece na imagem**, mesmo quando a pergunta vai além do reconhecimento. A saturação por âncora (§17) soma perguntas de texto e com figura.

**3. Famílias de pergunta.** Toda pergunta com figura começa por reconhecer a imagem. O que muda é o que se pergunta depois:

| Família | Ângulo | O que se pergunta | Exemplos |
|---|---|---|---|
| **O que é** | `identidade` | O nome do que aparece | "Que animal é este?", "Qual é este pokémon?", "Que estádio é este?" |
| **Quem fez** | `autoria` | O autor da obra, do projeto ou da invenção | "Quem pintou este quadro?", "Que arquiteto projetou este prédio?" |
| **Onde** | `lugar` | Onde o assunto fica ou de onde vem | "Que cidade é esta?", "De que país é esta bandeira?", "Em que museu fica este quadro?" |
| **Quando** | `tempo` | A época ou o acontecimento | "Que acontecimento este quadro retrata?", "Em que século esta igreja foi construída?" |
| **Que parte** | `composicao` | Uma parte ou detalhe destacado | "De que quadro é este detalhe?", "Como se chama esta peça do motor?" |
| **Que tipo** | `atributo` | O estilo, a técnica, a categoria | "Que estilo arquitetônico é este?", "Que técnica de pintura é esta?" |
| **Com o que se liga** | `conexao` | Um segundo fato, que só se alcança depois de reconhecer a imagem | "Em que pokémon este evolui?", "Que clube manda os jogos neste estádio?" |

**4. Três níveis de profundidade**, definidos pela pergunta e não pela fama da âncora:
- **Nível 1, reconhecer:** o assunto é emblemático e a pergunta é direta ("Que pintura é esta?" para a Mona Lisa). Em geral, aberta.
- **Nível 2, distinguir:** é preciso separar o assunto de outros parecidos, como a espécie exata, a cidade a partir de um bairro, o pintor entre contemporâneos, ou um detalhe em vez da obra inteira. Em geral, múltipla escolha com distratores do mesmo tipo.
- **Nível 3, ir além:** reconhecer e dar um passo de conhecimento (a família "com o que se liga", "quando" ou "que tipo"). O enunciado nunca nomeia o assunto da imagem.

Em cada catálogo, a mistura alvo é de **40% no nível 1, 40% no nível 2 e 20% no nível 3**. O nível é escolhido na hora de escrever a pergunta, e não estimado depois (§4).

**5. Escolha das entidades em camadas.** Cada catálogo é uma lista **curada**, montada a partir de listas da Wikipédia e do Wikidata e revisada pelo LLM ou por uma pessoa, em três camadas: **emblemáticos** (o que quase todo mundo reconhece), **conhecidos** (o que o público informado reconhece) e **de aficionado** (o que só quem gosta do assunto reconhece). Cada lote de figuras tira entidades das três camadas, para não esgotar primeiro os emblemáticos. A popularidade na Wikipédia não decide a escolha (§4).

**6. Regras de variedade das perguntas com figura**, além das de §9:
- num lote de figuras, **pelo menos duas famílias**, quando o catálogo permite mais de uma;
- nas perguntas com figura de um tema, **pelo menos três catálogos**, e nenhum catálogo passa de **40%** delas (as metas dos catálogos respeitam esse teto, e o autopiloto faz os catálogos de um tema crescerem juntos);
- uma família não passa de **60%** de um catálogo (por exemplo, nem toda pintura é "quem pintou?");
- no máximo **duas perguntas com figura por âncora**, de famílias diferentes e com imagens diferentes (a obra inteira e um detalhe, a fachada e uma vista aérea).

**7. Imagens que pedem observação.** Além da imagem principal do Wikidata, valem um detalhe recortado de uma obra, um ângulo menos visto de um lugar ou uma foto histórica. O recorte é permitido (§6). A imagem nunca pode ser ambígua: se o detalhe também existe em outra obra, a pergunta está errada.

**8. Distratores de figura** (múltipla escolha): do mesmo catálogo e **visualmente parecidos** com a resposta (outro felino de manchas, outra catedral gótica, outro pintor impressionista), e nenhum deles pode também descrever a imagem.

**Critérios da figura**, além dos de §8:
- [ ] **Nada na imagem entrega a resposta:** placas, legendas, letreiros, marcas d'água, bandeiras.
- [ ] **Resposta única diante da imagem:** atenção a réplicas, paisagens parecidas e monumentos que ficam entre duas cidades. A Ponte Luís I liga o Porto a Vila Nova de Gaia, por isso a pergunta é pela cidade "do outro lado da ponte".
- [ ] **Legível num celular** a um braço de distância.
- [ ] **O enunciado é verdadeiro para esta foto específica**, e não só para o assunto: o ponto de vista, o lado e o que aparece nela.
- [ ] **Nem óbvia nem impossível:** a Torre Eiffel de frente é fácil demais; um bairro qualquer de uma cidade grande, difícil demais. A imagem precisa ter o que permite reconhecer o assunto (a silhueta, o monumento, a pelagem). Para assuntos menos conhecidos, use `multipla`.

---

## 7. Redação para voz

**Enunciado (`pergunta`):**
1. **No máximo 30 palavras**, idealmente até 20.
2. **O contexto vem primeiro e a pergunta por último:** "Em 1928, num laboratório de Londres, quem descobriu a penicilina?".
3. **Nada que dependa de ver o texto:** sem parênteses, aspas, travessões, siglas impronunciáveis, símbolos (%, °, &) ou fórmulas.
4. **Números e séculos por extenso quando a leitura é ambígua:** "no século quatorze", e não "no séc. XIV".
5. **Sem perguntas de grafia**, como "como se escreve…".
6. **Sem negação**, como "qual destes NÃO…". Em voz alta, o "não" se perde.
7. **Sem vazamento:** o enunciado não contém a resposta, parte dela nem palavra derivada dela.
   - ❌ "O que significam os nomes das **capitais** Seul e Astana?" → "Capital"
   - ❌ "Palmeiras e Cruzeiro, fundados por imigrantes **italianos**, tinham que nome?" → "Palestra Itália"
8. **Público informado, mas leigo:** evite termos técnicos desnecessários.

**Resposta (`resposta`):**
- É **direta**: uma palavra, um termo ou uma frase curta, com no máximo cerca de 5 palavras.
- É **específica**: o nome da coisa, e não a categoria. "Corruíra", e não "um pássaro".
- **Não há lista de variantes.** A resposta é a forma mais completa e mais conhecida, e o questionador julga com bom senso.
- **Parênteses só quando for muito apropriado**, com uma observação curta que evite uma injustiça evidente, como um nome de nascimento muito conhecido: `"Gengis Khan (nascido Temujin)"`. Na maioria das perguntas, não há parênteses.
- Não traz explicações nem justificativas.

**Fontes (`fonte`):**
- São URLs puras, e não links em markdown.
- São específicas: a página que sustenta **aquele fato**, e não a página inicial de um site.

---

## 8. Critérios de qualidade

Toda pergunta precisa passar em **todos** os critérios abaixo:

- [ ] **Resposta única:** não existe outra resposta defensável. Atenção a apelidos, cargos e títulos: Yashin tinha mais de um apelido, e Weah teve mais de um cargo político.
- [ ] **Sem vazamento:** nem pelo enunciado, nem pelos distratores.
- [ ] **Atemporal:** continua correta daqui a 10 anos.
- [ ] **Verificável:** a fonte citada sustenta a resposta.
- [ ] **Precisa:** cada afirmação do enunciado é **literalmente** verdadeira, e não só a resposta. Desconfie de verbos como *batizou*, *inventou*, *fundou* e de palavras como *único*, *primeiro*, *maior*. "O navegador que batizou a Colômbia" é falso: o país recebeu o nome em homenagem a Colombo.
- [ ] **Justa:** um especialista diria "boa pergunta", e não "que detalhe arbitrário".
- [ ] **Interessante:** acertar dá prazer, ou errar ensina algo.
- [ ] **Audível:** cabe na memória de quem ouve e segue §7.
- [ ] **Bem classificada:** tema, subtema, âncora e ângulo são coerentes com o conteúdo.

---

## 9. Regras de variedade

**Em cada lote (tipicamente 20 a 50 perguntas de um subtema):**
- No máximo **25% num mesmo ângulo**.
- Pelo menos **6 ângulos diferentes**.
- `identidade` + `atributo` somam no máximo **30%**.
- No máximo **2 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras novas.** O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para não repetir.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
