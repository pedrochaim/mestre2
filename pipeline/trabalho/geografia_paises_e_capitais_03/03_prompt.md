Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Países e Capitais** (tema **Geografia**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Suriname",
      "descricao": "País do norte da América do Sul, ex-colônia holandesa, com capital em Paramaribo."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Em área, qual é o menor país independente da América do Sul?",
    "resposta": "Suriname",
    "distratores": [
      "Uruguai",
      "Guiana",
      "Equador"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Suriname",
      "https://pt.wikipedia.org/wiki/Suriname"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Suriname",
        "situacao": "ok",
        "texto": "Suriname,  officially the Republic of Suriname, is a country on the northern coast of South America, also considered part of the Caribbean region. Situated slightly north of the equator, over 90% of its territory is covered by rainforest, the second-highest proportion of forest cover in the world. Suriname is bordered by the Atlantic Ocean to the north, French Guiana to the east, Brazil to the sou\n[…]\nAt the 1988 Summer Olympics in Seoul, Suriname became the smallest independent South American state to win its first ever Olympic medal as Anthony Nesty won gold in the 100-metre butterfly.\n[…]\nSuriname is the smallest sovereign country in South America. Situated on the Guiana Shield, it lies mostly between latitudes 1° and 6°N, and longitudes 54° and 58°W. The country can be divided into two main geographic regions. The northern, lowland coastal area (roughly above the line Albina-Paranam-Wageningen) has been cultivated, and most of the population lives here.\n[…]\nSurinam Airways (SLM)\n[…]\nSuriname is one of three Dutch-speaking sovereign countries in the world (the others being the Netherlands and Belgium). It is also the only area in the Americas where Dutch is spoken by a majority of the population (as territories in the Dutch Caribbean all have other majority languages).\n[…]\nLikewise, almost all practitioners of Hinduism are found among the Indo-Surinamese population. Suriname has the highest proportion of Muslims (13.9%) in the Americas. They are largely of Javanese or Indian descent.\n[…]\nIn the sport of badminton, another popular sport in Suriname especially with the youth, the local heroes are Virgil Soeroredjo,   Mitchel Wongsodikromo, Sören Opti and also Crystal Leefmans. All winning medals for Suriname at the Carebaco Caribbean Championships, the Central American and Caribbean Games (CACSO Games) and also at the South American Games, better known as the ODESUR Games.\n[…]\nOutline of Suriname"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Suriname",
        "situacao": "ok",
        "texto": "Suriname (pronúncia em português europeu: [suɾiˈnɐm(ɨ)]; pronúncia em português brasileiro: [suɾi'nɐmi]; pronúncia em neerlandês: [ˌsyːriˈnaːmə]; pronúncia em surinamês:  [sraˈnãŋ]), oficialmente chamado de República do Suriname (em neerlandês: Republiek Suriname), é um país do norte da América do Sul, limitado a norte pelo oceano Atlântico, a leste pela França (Guiana Francesa), a sul pelo Brasil\n[…]\nDepois de se tornar numa parte autônoma do Reino dos Países Baixos, em 1954, o Suriname conseguiu a independência em 25 de novembro de 1975. Um regime militar dirigido por Desi Bouterse governou o país nos anos 80 até que a democracia foi restabelecida em 1988. É um país de baixa densidade demográfica.\n[…]\nO Suriname é o menor país independente na América do Sul. Situado no Planalto das Guianas, encontra-se principalmente entre as latitudes 1° e 6° N e longitudes 54° e 58° W. O país pode ser dividido em duas principais regiões geográficas. A área costeira do norte, formada por planície, é onde se registra as maiores áreas de cultivos e onde a maioria da população vive.\n[…]\nA Holanda concedeu a independência do Suriname em 1975. Uma das heranças deixada pelo colonizador foi a estrutura educacional eficiente, sobretudo em relação a alfabetização. Contudo, existe uma deficiência em relação ao ensino superior, o que impede o desenvolvimento científico e tecnológico do país.\n[…]\nO Suriname, por influência da Guiana, tem mão de direção inglesa, sendo estes dois países os únicos da América continental a ter esta característica. Os visitantes deste país devem se atentar a este fato se desejarem alugar um carro ou mesmo dirigir no Suriname. Apesar de a Permissão Internacional de Dirigir tecnicamente habilitar brasileiros e portugueses a dirigir no Suriname, o visitante deve considerar se irá se adaptar a esta característica do trânsito local.\n[…]\n«Constituição do Suriname» (em inglês)"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Gâmbia",
      "descricao": "País da África Ocidental formado por uma faixa estreita ao longo do rio Gâmbia, com capital em Banjul."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Sem contar os países insulares, qual é o menor país do continente africano em área?",
    "resposta": "Gâmbia",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Gambia",
      "https://pt.wikipedia.org/wiki/G%C3%A2mbia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Gambia",
        "situacao": "ok",
        "texto": "The Gambia, officially the Republic of The Gambia, is a country in West Africa. Geographically, the Gambia is the smallest country in continental Africa; it is bounded by Senegal on all sides except for the western part, which is bordered by the Atlantic Ocean.\n[…]\nArab traders provided the first written accounts of the Gambia area in the ninth and tenth centuries. During the tenth century, Muslim merchants and scholars established communities in several West African commercial centres. Both groups established trans-Saharan trade routes. They carried out a large export trade of local people taken captive in raids and sold as slaves. Gold and ivory were also exported, and the trade routes were used to import manufactured goods to these areas.\n[…]\nThe Gambia is less than 50 kilometres (31 miles) wide at its widest point, with a total area of 11,295 km2 (4,361 sq mi). About 1,300 square kilometres (500 square miles) (11.5%) of the Gambia's area are covered by water. It is the smallest country on the African mainland. In comparative terms, the Gambia has a total area slightly more than that of the island of Jamaica.\n[…]\nAfrican Union\n[…]\nEuropeans also figure prominently in Gambian history because the River Gambia is navigable deep into the continent, a geographic feature that made this area one of the most profitable sites for the slave trade from the 15th through the 17th centuries. (It also made it strategic to the halt of this trade once it was outlawed in the 19th century.) Some of this history was popularised in the Alex Haley book and TV series Roots, which was set in the Gambia.\n[…]\nThe Gambia featured a national team in beach volleyball that competed at the 2018–2020 CAVB Beach Volleyball Continental Cup in both the women's and the men's section."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/G%C3%A2mbia",
        "situacao": "ok",
        "texto": "Gâmbia (em inglês: The Gambia) oficialmente República da Gâmbia (em inglês: Republic of The Gambia), é um país da África Ocidental que rodeia o curso inferior do Rio Gâmbia. É rodeado pelo Senegal por todos os lados exceto a oeste, onde faz fronteira marítma com o Oceano Atlântico. A sua capital é Banjul, que tem a área metropolitana mais extensa em todo o país.\n[…]\nApós a independência do país em 1965, o nome Gâmbia foi conservado. Após a proclamação da república em 1970, o nome oficial do país tornou-se República d'A Gâmbia, inserindo-se formalmente o artigo definido \"A\" antes de Gâmbia, com o nome do país ficando como \"A Gâmbia\". A Gâmbia é um dos poucos países para os quais o artigo definido é comumente usado em seu nome e no qual o nome não é plural nem descritivo (por exemplo, \"as Filipinas\" ou \"o Reino Unido\").\n[…]\nA Gâmbia é um dos menores países da África. Trata-se de uma longa faixa de terra pantanosa que se estende ao longo de cerca de 320 km para o interior da África ocidental mas nunca atinge os 50 km de largura, ao longo das duas margens do rio Gâmbia, navegável em todo o seu curso gambiano. O país também inclui a ilha de Saint Mary, na foz do Gâmbia, onde se ergue a capital, Banjul, e a ilha James, que foi declarada Património Mundial pela UNESCO.\n[…]\nEis alguns dados sobre a demografia gambiana:\n[…]\nA produção de literatura em língua inglesa na Gâmbia tem sido mais limitada do que em outros países anglófonos da África. Os autores que escrevem sobre literatura africana tendem a ignorar a literatura gambiana ou declararam abertamente que não existe literatura gambiana.\n[…]\nJohn Povey, no volume de 1986 Literaturas africanas no século XX, afirmou que a Gâmbia tem \"uma base mínima para qualquer literatura nacional identificável ou sustentada\", visto que o próprio país existe como resultado da \"indiferença colonial às fronteiras naturais\"."
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Ucrânia",
      "descricao": "País do Leste Europeu, às margens do Mar Negro, cuja capital é Kiev."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Depois da Rússia, qual é o maior país do continente europeu em área?",
    "resposta": "Ucrânia",
    "distratores": [
      "Espanha",
      "Suécia",
      "Alemanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ukraine",
      "https://pt.wikipedia.org/wiki/Ucr%C3%A2nia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ukraine",
        "situacao": "ok",
        "texto": "Ukraine is a country in Eastern Europe. It is the second-largest country in Europe after Russia, which borders it to the east and northeast. Ukraine also borders Belarus to the north; Poland and Slovakia to the west; Hungary, Romania and Moldova to the southwest; and the Black Sea and the Sea of Azov to the south and southeast. Kyiv is Ukraine's capital and largest city, followed by Kharkiv, Odesa\n[…]\nUkraine is the second-largest European country, after Russia, and the largest country entirely in Europe. Lying between latitudes 44° and 53° N, and longitudes 22° and 41° E., it is mostly in the East European Plain. Ukraine covers an area of 603,550 square kilometres (233,030 sq mi), with a coastline of 2,782 kilometres (1,729 mi).\n[…]\nUkraine long had close ties with all its neighbours, but Russia–Ukraine relations rapidly deteriorated in 2014 due to the annexation of Crimea, energy dependence and payment disputes.The Deep and Comprehensive Free Trade Area (DCFTA), which entered into force in January 2016 following the ratification of the Ukraine–European Union Association Agreement, formally integrates Ukraine into the European Single Market and the European Economic Area.\n[…]\nIn early 2022 Ukraine and Moldova decoupled their electricity grids from the Integrated Power System of Russia and Belarus; and the European Network of Transmission System Operators for Electricity synchronised them with continental Europe.\n[…]\nThe war with Russia worsened Ukrainian children physical and mental health.\n[…]\nThen, in 1863, the use of the Ukrainian language in print was effectively prohibited by the Russian Empire. This severely curtailed literary activity in the area, and Ukrainian writers were forced to either publish their works in Russian or release them in Austrian controlled Galicia. The ban was never officially lifted, but it became obsolete after the revolution and the Bolsheviks' coming to power."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ucr%C3%A2nia",
        "situacao": "ok",
        "texto": "Ucrânia (em ucraniano:  Україна, Ukrayïna, pronunciado: [ukrɑˈjinɑ] ()) é um país do Leste Europeu. É o segundo maior país em área da Europa depois da Rússia, que faz fronteira a leste e nordeste. Também faz fronteira com a Bielorrússia ao norte; Polônia, Eslováquia e Hungria a oeste; Romênia e Moldávia ao sul; e tem um litoral ao longo do mar de Azov e do mar Negro. Abrange uma área de 603 628 km\n[…]\nCom uma área de 603 700 km², a Ucrânia é o 44.° país do mundo em território, um pouco maior que o estado brasileiro de Minas Gerais ou que a soma das áreas da Espanha e de Portugal. É o segundo maior país da Europa, atrás da Rússia Europeia e à frente da França metropolitana.\n[…]\nApós a dissolução da União Soviética, a Ucrânia herdou uma força militar de 780 mil homens em seu território, equipada com o terceiro maior arsenal de armas nucleares do mundo. Em maio de 1992, no entanto, a Ucrânia assinou o Protocolo de Lisboa, no qual o país concordou em entregar todas as armas nucleares à Rússia para descarte e aderir ao Tratado de Não-Proliferação Nuclear como um Estado sem armas nucleares.\n[…]\nA Ucrânia é um dos países europeus que mais consome energia, consome o dobro de energia consumida na Alemanha, por unidade do PIB. Uma grande parte da energia produzida no país é por meio de usinas nucleares, e a Ucrânia recebe a maioria dos serviços e combustíveis nucleares da Rússia. O petróleo e o gás, são na maioria importados da Rússia. A Ucrânia é pesadamente dependente de sua energia nuclear. A maior usina nuclear na Europa, a Usina Nuclear de Zaporijia, é localizada na Ucrânia.\n[…]\nO país vem tentando diversificar a sua matriz energética, como forma de diminuir sua dependência da Rússia neste setor, através da adoção de parcerias comerciais com outros países europeus. A Ucrânia é, contudo, autossuficiente em termos de produção elétrica, devido a usinas nucleares e hidrelétricas."
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Angola",
      "descricao": "País da costa ocidental da África Austral, de língua portuguesa, cuja capital é Luanda."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Depois do Brasil, qual é o maior país de língua portuguesa em área?",
    "resposta": "Angola",
    "fonte": [
      "https://en.wikipedia.org/wiki/Angola",
      "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_area"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Angola",
        "situacao": "ok",
        "texto": "Angola, officially the Republic of Angola, is a country on the western coast of Southern Africa. It is the second-largest Portuguese-speaking (Lusophone) country after Brazil in both total area and population and is the seventh-largest country in Africa. It is bordered by Namibia to the south, the Democratic Republic of the Congo to the north, Zambia to the east, and the Atlantic Ocean to the west\n[…]\nPortuguese explorer Diogo Cão reached the area in 1484. The previous year, the Portuguese had established relations with the Kingdom of Kongo, which stretched at the time from modern Gabon in the north to the Kwanza River in the south. The Portuguese established their primary early trading post at Soyo, which is now the northernmost city in Angola apart from the Cabinda exclave.\n[…]\nAccording to the 2024 census, Portuguese is spoken natively by 45.5% of Angolans, Umbundu by 17.1%, Kimbundu by 10.8%, Chokwe by 6.9%, Kikongo by 6.9%, Nyaneka by 4.3%, Kwanyama by 2.9%, Ngangela by 2.0%, Fiote by 1.1%, Muhumbi by 0.7%, Luvale by 0.5%, and other languages by 0.6%.\n[…]\nAngolan culture has been heavily influenced by Portuguese culture, especially in language and religion, and the culture of the indigenous ethnic groups of Angola, predominantly Bantu culture.\n[…]\nIn this urban culture, Portuguese heritage has become more and more dominant. African roots are evident in music and dance and is moulding the way in which Portuguese is spoken. This process is well reflected in contemporary Angolan literature, especially in the works of Angolan authors.\n[…]\nKapuściński, Ryszard. Another Day of Life, Penguin, 1975. ISBN 978-0-14-118678-8. A Polish journalist's account of Portuguese withdrawal from Angola and the beginning of the civil war.\n[…]\nMacQueen, Norrie An Ill Wind? Rethinking the Angolan Crisis and the Portuguese Revolution, 1974–1976, Itinerario: European Journal of Overseas History, 26/2, 2000, pp. 22–44"
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_area",
        "situacao": "ok",
        "texto": "This is a list of the world's countries and their dependencies, ranked by total area, including land and water.\n[…]\nThis list includes three measurements of area:\n[…]\nTotal area: the sum of land and water areas within international boundaries and coastlines.\n[…]\nLand area: the aggregate of all land within international boundaries and coastlines, excluding water area.\n[…]\nInland water area: the sum of the surface areas of all inland water bodies (lakes, reservoirs, and rivers) within international boundaries and coastlines. Coastal internal waters may be included. Territorial seas, contiguous zones and exclusive economic zones are not included unless otherwise noted.\n[…]\nTotal area is taken from the United Nations Statistics Division unless otherwise noted. Land and water are taken from the Food and Agriculture Organization unless otherwise noted. The CIA World Factbook is most often used when different UN departments disagree. Other sources and details for each entry may be specified in the relevant footnote.\n[…]\nLists of political and geographic subdivisions by total area\n[…]\nOrders of magnitude (area)\n[…]\nList of African countries by area\n[…]\nList of Asian countries by area\n[…]\nList of European countries by area\n[…]\nList of North American countries by area\n[…]\nList of Oceanian countries by area\n[…]\nList of South American countries by area\n[…]\nEncyclopaedia Britannica: List of the world's countries, dependencies, and territories by total area\n[…]\nhttps://www.nationsonline.org/oneworld/countries_by_area.htm"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Angola",
        "situacao": "ok",
        "texto": "Angola, oficialmente República de Angola, é um país da costa ocidental da África Austral, cujo território tem uma área total de 1 246 700 km², sendo o sétimo maior país de África e o vigésimo segundo do mundo, com uma população estimada em 36,6 milhões de pessoas em 2024. A capital e maior cidade é Luanda, centro económico e político do país.\n[…]\nDesde 2003, mais de 400 000 imigrantes congoleses foram expulsos de Angola. Antes da independência, em 1975, Angola tinha uma comunidade lusitana de cerca de 350 000 pessoas; em 2013 existiam cerca de 200 000 portugueses registados com os consulados. A população chinesa é de 258 920 pessoas, em sua maioria composta por migrantes temporários. A taxa de fecundidade total do país é de 5,54 filhos por mulher (estimativas de 2012), a 11ª maior do mundo.\n[…]\nO português é a língua oficial de Angola. Dentre as línguas africanas faladas no país, algumas têm o estatuto de língua nacional. Essas, assim como as outras línguas africanas, são faladas pelas respectivas etnias e têm dialectos correspondentes aos subgrupos étnicos. A língua étnica com mais falantes em Angola é o umbundo, falado pelos ovimbundos na região centro-sul de Angola e em muitos meios urbanos. É língua materna de cerca de um terço dos angolanos.\n[…]\nEmbora as línguas étnicas sejam as habitualmente faladas pela maioria da população, o português é a primeira língua de 40% da população angolana — proporção que se apresenta muito superior na capital do país —, enquanto cerca de 71% dos angolanos afirmam usá-la como primeira ou segunda língua. Seis línguas étnicas têm o estatuto oficial de \"língua nacional\": por ordem de importância numérica são o umbundo, o quimbundo, o quicongo, o chócue, o ganguela e o cuanhama.\n[…]\nReconquista de Angola\n[…]\n«Portal de República de Angola»\n[…]\n«Embaixada de Angola no Brasil»\n[…]\n«Embaixada de Angola em Portugal»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Indonésia",
      "descricao": "País arquipélago do Sudeste Asiático, entre os oceanos Índico e Pacífico."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Espalhado por milhares de ilhas entre a Ásia e a Oceania, qual é o maior país arquipélago do mundo?",
    "resposta": "Indonésia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Indonesia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Indonesia",
        "situacao": "ok",
        "texto": "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania, between the Indian and Pacific oceans. Comprising between 13,000 and 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea, it is the world's largest archipelagic state and the 14th-largest country by area. Indonesia has extensive tropical forests and marine ecosystems that \n[…]\nIndonesia has been a member of the United Nations since 1950, apart from an absence in 1965–66. It participates in multilateral forums including the Non-Aligned Movement, the Organisation of Islamic Cooperation, and the East Asia Summit. After decades as a major recipient of foreign aid, Indonesia has been providing development assistance since 2015 and established a foreign aid agency in 2019. Since 1957, it has sent military and police personnel to UN peacekeeping missions.\n[…]\nIndonesia has a mixed economy in which the private sector and the government both have large roles. It is the only G20 member state in Southeast Asia. In 2025, Indonesia's gross domestic product was Rp23.821 quadrillion (US$1.45 trillion) at current prices, making it Southeast Asia's largest economy and placing it among the world's top 20 by nominal GDP and top 10 by GDP at purchasing power parity.\n[…]\nNatural-resource industries affect both investment and economic growth, which can rise or fall with commodity prices. Policies since 2020 have encouraged more processing of commodities at home, particularly nickel. Indonesia's exports include coal and petroleum gas, as well as palm oil, coffee and spices. Its main trading partners are mostly in Asia, with the United States also among the largest.\n[…]\nOutline of Indonesia\n[…]\nWonderful Indonesia Archived 27 April 2025 at the Wayback Machine – Indonesia's official tourism portal\n[…]\nWikimedia Atlas of Indonesia\n[…]\nGeographic data related to Indonesia at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Indon%C3%A9sia",
        "situacao": "ok",
        "texto": "Indonésia (em indonésio: Indonesia, pronunciado: [ɪndonesia]), oficialmente República da Indonésia (em indonésio: Republik Indonesia; pronunciado: [rɛpublik ɪndonesia]), é um país localizado entre o Sudeste Asiático e a Austrália, sendo o maior arquipélago do mundo, composto pelas Ilhas de Sonda, a metade ocidental da Nova Guiné e compreendendo no total 17 508 ilhas.\n[…]\nO tamanho, o clima tropical e a geografia do arquipélago da Indonésia são a base para o segundo maior nível de biodiversidade do mundo (depois do Brasil) e sua fauna e flora são uma mistura de espécies provenientes da Ásia e da Australásia. As ilhas da Plataforma Sunda (Sumatra, Java, Bornéu e Bali) foram uma vez ligadas ao continente asiático e têm parte da riqueza da fauna asiática.\n[…]\nO desmatamento e a destruição de turfeiras fazem da Indonésia o terceiro maior emissor mundial de gases do efeito estufa.\n[…]\nEm junho de 2011, durante o Fórum Econômico Mundial sobre a Ásia Oriental, o presidente da Indonésia disse que o país estará entre as dez maiores economias do mundo até a próxima década. O setor industrial é o maior da economia indonésia e respondia por 46,4% do PIB (2012), seguido por serviços (38,6%) e pela agricultura (14,4%). Em 2019, a Indonésia tinha a 11.ª indústria mais valiosa do mundo (US$ 220,5 bilhões), segundo o Banco Mundial.\n[…]\nTanto a natureza quanto as culturas locais são componentes principais da indústria do turismo da Indonésia. O patrimônio natural é privilegiado por uma combinação única de clima tropical e um vasto arquipélago formado por 17 508 ilhas, sendo que 6 mil delas habitadas, além disso o país tem o terceiro litoral mais longo do mundo (54 716 km), atrás apenas do Canadá e da União Europeia. A Indonésia é o maior arquipélago do mundo e o mais populoso país situado apenas em ilhas.\n[…]\nLíngua de sinais indonésia\n[…]\nMissões diplomáticas da Indonésia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Nicarágua",
      "descricao": "País da América Central entre Honduras e Costa Rica, cuja capital é Manágua."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual é o maior país da América Central em área?",
    "resposta": "Nicarágua",
    "distratores": [
      "Honduras",
      "Guatemala",
      "Panamá"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nicaragua"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nicaragua",
        "situacao": "ok",
        "texto": "Nicaragua, officially the Republic of Nicaragua, is a country in Central America, comprising 130,370 square kilometers (50,340 sq mi). With a population of 7,097,329 as of 2026, it is the third-most populous country in Central America after Guatemala and Honduras, and the largest by area in all of Central America.\n[…]\nMany Nicaraguans live abroad, particularly in Costa Rica, the United States, Spain, Canada, and other Central American countries.\n[…]\nThe central region and the Caribbean coast of Nicaragua were inhabited by indigenous peoples who were Macro-Chibchan language groups that had migrated to and from South America in ancient times, primarily what is now Colombia and Venezuela.\n[…]\nAlthough Nicaragua's health outcomes have improved over the past few decades with the efficient utilization of resources relative to other Central American nations, healthcare in Nicaragua still confronts challenges responding to its populations' diverse healthcare needs.\n[…]\nNicaraguan music is a mixture of indigenous and Spanish influences. Musical instruments include the marimba and others common across Central America. The marimba of Nicaragua is played by a sitting performer holding the instrument on his knees. He is usually accompanied by a bass fiddle, guitar and guitarrilla (a small guitar like a mandolin). This music is played at social functions as a sort of background music.\n[…]\nNicaragua's national basketball team had some recent success as it won the silver medal at the 2017 Central American Games. They took part in the FIBA AmeriCup for the first time when Nicaragua hosted in 2025. The women's national basketball team will make their debut at the FIBA Women's AmeriCup in 2029.\n[…]\nNational Assembly of Nicaragua\n[…]\nThe State of the World's Midwifery – Nicaragua Country Profile Archived 12 May 2013 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nicar%C3%A1gua",
        "situacao": "ok",
        "texto": "A Nicarágua (em castelhano: Nicaragua; pronunciado: [nikaˈɾaɣwa] ()), oficialmente República da Nicarágua (em castelhano: República de Nicaragua), é um país da América Central, limitado ao norte pelo Golfo de Fonseca (através do qual faz fronteira marítima com El Salvador) e fronteira terrestre com Honduras.\n[…]\nA população da Nicarágua é estimada em 6 038 652 habitantes sendo, em sua maior parte, multiétnica. Sua capital, Manágua, é a terceira maior cidade da América Central. A língua principal é o espanhol, embora outras línguas nativas sejam faladas por tribos da costa oriental, como o misquito, sumo e rama, além de um inglês crioulo.\n[…]\nA Nicarágua é a maior das repúblicas da América Central em território, com 130 373 km², situada entre o Caribe e o Pacífico. Há montanhas vulcânicas ativas paralelas à costa ocidental. O sul é dominado pelos lagos Manágua e Nicarágua. O clima é tropical, com chuvas em maio e outubro. A agricultura é a principal atividade econômica com algodão, café, cana-de-açúcar e frutas como principais exportações.\n[…]\nA Nicarágua é um dos primeiros países da América Central em criação de gado; em 2003 o país contava com 3,5 milhões de cabeças de gado, 4 350 de bovinos, 405 mil de suínos e 6 800 de caprinos.\n[…]\nEm setembro de 1980, a UNESCO concedeu à Nicarágua o prêmio Nadezhda Krupskaya pela campanha de alfabetização promovida pelo país.\n[…]\nA música nicaraguense é conhecida por sua complexidade e riqueza, apresentando vários artistas conhecidos na América Central, como Carlos Mejía Godoy, Camilo Zapata, Luís Enrique Mejía Godoy (ganhador do prêmio Grammy), Duo Guardabarranco, Clara Grun e Perrozompopo.\n[…]\nMedia relacionados com Nicarágua no Wikimedia Commons\n[…]\nWikimedia Atlas of Nicaragua\n[…]\n«Ortega declara Nicarágua \"livre de analfabetismo\", certificado pela Unesco»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Maldivas",
      "descricao": "País insular do Oceano Índico, formado por atóis a sudoeste da Índia, com capital em Malé."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Com altitude média de cerca de um metro e meio acima do mar, qual país tem a menor altitude média do mundo?",
    "resposta": "Maldivas",
    "distratores": [
      "Países Baixos",
      "Bangladesh",
      "Dinamarca"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Maldives"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maldives",
        "situacao": "ok",
        "texto": "The Maldives, officially the Republic of Maldives, and historically known as the Maldive Islands, is an archipelagic country in South Asia, located in the Indian Ocean, near the southeastern boundary of the Arabian Sea. The Maldives is located southwest of India and Sri Lanka, about 750 kilometres (470 miles; 400 nautical miles) from the Asian continent's mainland. The Maldives' chain of 26 atolls\n[…]\nThe largest and the only ethnic group in the country are Maldivians (Dhivehin), native to the historic region of the Maldive Islands comprising today's Republic of Maldives and the island of Minicoy in Union territory of Lakshadweep, India. They share the same culture and speak the Dhivehi language. They are principally an Indo-Aryan people, having traces of Middle Eastern, South Asian, Austronesian and African genes in the population.\n[…]\nPSM news serves as the country's main media, owned by the government of the Maldives. The newspaper was founded on 3 May 2017, in the celebration of World Press Freedom Day. The Maldives has been ranked one–hundred in the World Press Freedom Index 2023 and 106 in 2024. The country's first daily newspaper, Haveeru Daily News was the first and longest–serving newspaper in the history of the Maldives, which was registered on 28 December 1978, and dissolved in 2016.\n[…]\nHowever, this protection is compromised by the Evidence Act, which came into effect in January 2023 and grants courts the authority to compel journalists to reveal their confidential sources. Maldives Media Council (MMC) and Maldives Journalists Association (MJA) serve as crucial watchdogs in addressing and combating these threats. Newspapers Sun Online, Mihaaru and its English edition named The Edition, and Avas serve as well–known private news outlets.\n[…]\nWikimedia Atlas of Maldives\n[…]\nGeographic data related to Maldives at OpenStreetMap\n[…]\nConstitution of the Republic of Maldives"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maldivas",
        "situacao": "ok",
        "texto": "A República das Maldivas (em divehi:  ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާ, transl. Dhivehi Raajjeyge Jumhooriyya) é um pequeno país insular situado no oceano Índico ao sudoeste do Sri Lanca e da Índia, ao sul do continente asiático, constituído por 1 196 ilhas, das quais 203 são habitadas, localizadas a cerca de 450 km ao sul da península do Decão.\n[…]\nO país foi governado como um sultanato islâmico independente na maior parte de sua história entre 1153 e 1968. Foi um protetorado britânico desde 1887 até 25 de julho de 1965. Em 1953, por um breve período, implantou-se uma república mas o sultanato se restabeleceu. Os maldívios seguiam o budismo antes de se converterem ao islamismo, conversão esta explicada em uma controvertida história mitológica acerca de um demônio chamado Rannamaari.\n[…]\nAs Maldivas consistem de, aproximadamente, 1 190 ilhas de coral, agrupadas em uma cadeia de 26 atóis, ao longo da direção norte-sul, espalhados por cerca de 90 000 km², tornando-as um dos países mais dispersos do mundo. Situa-se entre as latitudes 1ºS e 8ºN e as longitudes 72ºE e 74ºE. Os atóis são compostos de recifes de corais e barras de areia, situados no topo de uma cordilheira submarina de 960 km de comprimento que se ergue no oceano Índico e corre do norte para o sul.\n[…]\nAs Maldivas tem um recorde mundial de ser o país com a mais baixa altitude do mundo, o ponto mais elevado está a 2,3 metros do nível do mar, e a altitude média do país é de 1,5 metros e a maioria do território habitado está apenas a um metro de altitude. A capital, Malé, está a 90 centímetros do nível do mar e vivem 100 mil pessoas.\n[…]\nAs Maldivas são uma república presidencialista na qual o presidente é o chefe de estado e governo. O presidente é eleito por cinco anos, por voto secreto do parlamento e depois referendado pela população.\n[…]\nMaldivas Turismo\n[…]\nFotos das Maldivas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Canadá",
      "descricao": "País da América do Norte cuja capital é Ottawa."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Somando o continente e suas milhares de ilhas, qual país tem o litoral mais extenso do mundo?",
    "resposta": "Canadá",
    "fonte": [
      "https://en.wikipedia.org/wiki/Geography_of_Canada",
      "https://en.wikipedia.org/wiki/List_of_countries_by_length_of_coastline"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Geography_of_Canada",
        "situacao": "ok",
        "texto": "Canada has a vast geography that occupies much of the continent of North America, sharing a land border with the contiguous United States to the south and the U.S. state of Alaska to the northwest. Canada stretches from the Atlantic Ocean in the east to the Pacific Ocean in the west; to the north lies the Arctic Ocean. Greenland is to the northeast, with a shared border on Tartupaluk/Hans Island.\n[…]\nThe fisheries industry has historically been one of Canada's strongest. Unmatched cod stocks on the Grand Banks of Newfoundland launched this industry in the 16th century. Today these stocks are nearly depleted, and their conservation has become a preoccupation of the Atlantic Provinces. On the West Coast, tuna stocks are now restricted. The less depleted (but still greatly diminished) salmon population continues to drive a strong fisheries industry.\n[…]\nCanada claims 22 km (12 nmi) of territorial sea, a contiguous zone of 44 km (24 nmi), an exclusive economic zone of 5,599,077 km2 (2,161,816 mi2) with 370 km (200 nmi) and a continental shelf of 370 km (200 nmi) or to the edge of the continental margin.\n[…]\nCanada's mineral resources are diverse and extensive. Across the Canadian Shield and in the north there are large iron, nickel, zinc, copper, gold, lead, molybdenum, and uranium reserves. Large diamond concentrations have been recently developed in the Arctic, making Canada one of the world's largest producers. Throughout the Shield there are many mining towns extracting these minerals. The largest, and best known, is Sudbury, Ontario.\n[…]\nCanada's many rivers have afforded extensive development of hydroelectric power. Extensively developed in British Columbia, Ontario, Quebec and Labrador, the many dams have long provided a clean, dependable source of energy.\n[…]\nRural Canada\n[…]\nCartography of Canada – The Canadian Map Online\n[…]\n\"Canada\". The World Factbook. Central Intelligence Agency."
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_countries_by_length_of_coastline",
        "situacao": "ok",
        "texto": "This article contains a list of countries and dependencies by length of coastline, in kilometers. Though the coastline paradox stipulates that coastlines do not have a well-defined length, there are various methods in use to measure coastlines through ratios and other metrics. A coastline of zero indicates that the country is landlocked."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Geografia_do_Canad%C3%A1",
        "situacao": "ok",
        "texto": "O Canadá ocupa a região norte da América, mais precisamente, 42% da América do Norte. Seu único vizinho é os Estados Unidos, que se limita ao sul com os Estados Unidos Continentais e ao noroeste com o estado do Alasca. Na costa sul da Terra Nova e Labrador localiza-se São Pedro e Miquelão, um território ultramarino da França. O Canadá estende-se desde o oceano Atlântico, a leste, até o Oceano Pací\n[…]\nO Canadá é o segundo maior país em área do mundo, atrás somente da Rússia. Muito do Canadá localiza-se em regiões árticas, assim, possui apenas a quarta maior quantidade de área arável do mundo, perdendo para a Rússia, China e os Estados Unidos. Enquanto o Canadá ocupa uma área maior de que os EUA, possui apenas um nono de sua população. Cerca da metade do país está coberto por florestas boreais.\n[…]\nCerca de 60% da população do país vive na região dos Grandes Lagos/Vale do Rio São Lourenço. Ao norte desta região densamente habitada localiza-se o Canadian Shield, que estende-se ao longo do norte do país, cobrindo cerca de 55% do Canadá. O solo da região fora pesadamente erodida por geleiras e ventos fortes na Idade do gelo. Este solo caracteriza-se por ser constituídas por rochas extremamente duras, e por ser rica em minerais.\n[…]\nA Terra Nova localiza-se na foz do Golfo de São Lourenço, o maior estuário do mundo. Já as províncias do Novo Brunswick e Nova Escócia estão divididas pela Baía de Fundy, local onde ocorrem as maiores variações de marés. Na região também localiza-se a Ilha do Príncipe Eduardo, a menor província do Canadá.\n[…]\nAo oeste de Ontário, e a leste das Montanhas Rochosas, localizam-se os Campos do Canadá (Canadian Praires), que caracteriza-se pelo seu terreno pouco acidentado e pelo seu solo relativamente fértil.\n[…]\nO extremo norte do Canadá é formado por um vasto arquipélago, contendo várias das maiores ilhas do mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Ulan Bator",
      "descricao": "Capital e maior cidade da Mongólia."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Pela temperatura média ao longo do ano, qual é a capital nacional mais fria do mundo?",
    "resposta": "Ulan Bator",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ulaanbaatar",
      "https://pt.wikipedia.org/wiki/Ulan_Bator"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ulaanbaatar",
        "situacao": "ok",
        "texto": "Ulaanbaatar is the capital and largest city of Mongolia. It has a population of 1.79 million, and is the coldest capital city in the world by average yearly temperature. The municipality is located in north central Mongolia at an elevation of about 1,300 metres (4,300 ft) in a valley on the Tuul River. The city was founded in 1639 as a nomadic Buddhist monastic centre, changing location 29 times, \n[…]\nWhen the city became the capital of the new Mongolian People's Republic on 29 October 1924, its name was changed to Ulaanbaatar (lit. 'Red Hero'), possibly in honor of Damdin Sükhbaatar. At the meeting of the 1st Great People's Khural in 1924, the majority of delegates voted in favor of renaming the capital of Mongolia to Bator-khoto (\"City of the Hero,\" implicitly referring to the figure of Genghis Khan).\n[…]\nNevertheless, at the insistence of the Comintern representative, Soviet-Kazakhstan political figure T. R. Ryskulov, who previously had no connection to Mongolia, the city was named Ulan Bator Khoto (\"City of the Red Hero\"). After the vote, he gave a speech:\n[…]\nGenghis Khan was a national hero, but he was a conqueror. Present-day People's Mongolia has no imperialistic goals; it wants to liberate itself and develop independently, along revolutionary lines. Therefore, the name Ulaanbaatar-Khoto will be a revolutionary name, and it will be understandable to everyone. The prefix Ulan (\"red\") gives this name a revolutionary character, symbolizing the revolutionary steadfastness of the Mongolian people in their struggle for independence.\n[…]\nIn the Western world, Ulaanbaatar continued to be generally known as Urga or Khuree until 1924, and afterward as Ulan Bator (Russian: Улан-Батор, romanized: Ulan-Bator). Although related to the Russian form, Ulan Bator was approved by the Mongolian Post Office.\n[…]\nGeneral information about Ulaanbaatar, up-to-date\n[…]\nShort BBC piece on modern Ulaanbaatar [2]"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ulan_Bator",
        "situacao": "ok",
        "texto": "Ulã Bator ou Ulan Bator (em mongol: Улаанбаатар; romaniz.: Ulaanbaatar; pronunciado: [ʊɮɑːɴ.pɑːtʰɑ̆r]) é a capital e a maior cidade da Mongólia. Tem cerca de 1,3 milhão de  habitantes, segundo números oficiais e estima-se que existam mais 150 mil habitantes não recenseados. Foi fundada em 1649 e designou-se Urga até 1924. A partir desse ano, a cidade ganhou o nome atual, que significa \"herói verme\n[…]\nNo período socialista, e especialmente após a Segunda Guerra Mundial, a maioria dos antigos bairros foram substituídos por blocos de apartamento em estilo soviético, muitas vezes financiados pela União Soviética. O planejamento urbano começou na década de 1950, e a maior parte da cidade é hoje o resultado da construção resultante entre 1960-1985. O Transmongolian Railway, ligando Ulan Bator com Moscou e Pequim, foi concluído em 1956, e cinemas, teatros e museus foram também construídos.\n[…]\nUlã Bator localiza-se na região centro-leste do país, a uma altitude média de 1 350 metros, e possui um rigoroso clima semiárido frio (BSk), próximo do clima subpolar — ou subártico — (Dwb/Dwc), com verões frescos e relativamente chuvosos e invernos longos, secos e gelados. A temperatura média anual de Ulã Bator é de aproximadamente 0 °C, sendo, desta forma, a capital nacional mais fria do mundo.\n[…]\nUlã Bator possui ao todo, oito cidades-irmãs, a saber:\n[…]\nA Biblioteca Nacional da Mongólia tem uma vasta seleção de textos em língua inglesa sobre temas da Mongólia.\n[…]\nEm 1986, o governo de Ulã Bator criou um sistema centralizado para todas as bibliotecas públicas da cidade, conhecido como Sistema Metropolitano das Bibliotecas de Ulã Bator (MLSU). Este sistema coordena a gestão, aquisições, finanças e política entre as bibliotecas públicas da capital, além de fornecer apoio para escolas e bibliotecas infantis. Para além da Biblioteca Central Metropolitana, a MLSU tem quatro bibliotecas filiais."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Fronteira entre Brasil e França",
      "descricao": "Fronteira terrestre entre o Brasil e a Guiana Francesa, departamento ultramarino da França."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Por causa de um território francês na América do Sul, qual país tem a fronteira terrestre mais longa com a França?",
    "resposta": "Brasil",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil%E2%80%93France_border"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazil%E2%80%93France_border",
        "situacao": "ok",
        "texto": "The Brazil–France border is the line, located in the Amazon rainforest, that demarcates the borders of the Brazilian state of Amapá and French Guiana.\n[…]\nThe basis of this border dates back to the Peace Treaty of Utrecht signed between France and Portugal in 1713, which established the border between both the colonial holdings of both kingdoms in South America. Despite the treaty specifying the Japoc River as the border, disagreement between France and Brazil (as the heir of the Portuguese Empire) continued into the following centuries due to uncertainty regarding the river's location.\n[…]\nThe dispute went on for two centuries as France and Brazil set up military posts and religious missions in what would spark the Amapá Question, an event which saw French troops invade Brazilian territory up to the Araguari river occupying approximately 260,000 km2 (100,000 sq mi) of Brazilian territory.\n[…]\nThe territorial dispute was resolved in Brazil's favor in 1900 through an international arbitration in Switzerland. The international court took documents and texts collected by France and Portugal at the time and determined that those collected by the Portuguese gave more credence towards the Brazilian claim of the border being set at the Oiapoque River. Additionally, they took the history of the territory and its inhabitants into consideration.\n[…]\nAside from small coastal French settlements, this region of South America was entirely populated by Brazilians and indigenous peoples who saw themselves as Brazilian nationals.\n[…]\nBrazil–France relations"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fronteira_Brasil%E2%80%93Fran%C3%A7a",
        "situacao": "ok",
        "texto": "Fronteira entre Brasil e França é a linha que limita os territórios da República Federativa do Brasil e da República Francesa (através da Guiana Francesa). Sua extensão é de 730,4 km, dos quais 427,2 km são por rios e 303,2 km por divisor de águas (fronteira seca), o que constitui a segunda menor fronteira terrestre do Brasil e a maior fronteira terrestre da França com outro país.\n[…]\nEssa fronteira é a única ligação terrestre entre o Mercosul e a União Europeia (via Ponte Binacional Franco-Brasileira).\n[…]\nA fronteira franco-brasileira começa no planalto das Guianas numa tríplice fronteira onde se encontram a fronteira Brasil-Suriname e a fronteira França-Suriname. Esse ponto é chamado \"Koulimapopann\" nos mapas do Instituto Geográfico Nacional Francês, e tem como coordenadas 2° 20' 15,2\" N, 54° 26' 04,4\" W.\n[…]\nPor fim, chega à foz do rio a oeste do cabo Orange em 4° 30' 30\" N, 51° 38' 12\" W. Desse ponto, situado na baía de Oiapoque, prolonga-se por uma fronteira marítima de duzentas milhas náuticas traçada em 1981 e que separa as águas territoriais dos dois países por linha loxodrômica, a qual leva em conta o ponto mais norte do cabo Oiapoque (Brasil) e as ilhas Connetable (Guiana Francesa).\n[…]\nAlguns marcos de fronteira materializam a fronteira terrestre.\n[…]\nFinalmente, uma arbitragem internacional feita pela Suíça deu razão ao Brasil em 1900: bem preparada, a delegação brasileira chefiada pelo Barão de Rio Branco, que já tinha obtido uma arbitragem favorável em litígio contra a Argentina, ganhou o arbítrio enquanto a França secundarizou a preparação dos documentos, pois estava mais preocupada com a colonização em África, enviando diplomatas com pouco conhecimento da questão: como resultado, 260 000 km² de territórios que teriam multiplicado por quatro a superfície do território da Guiana passaram para a soberania do Brasil.\n[…]\nO Contestado franco-brasileiro",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Dinamarca",
      "descricao": "País nórdico do norte da Europa, ao norte da Alemanha, cuja capital é Copenhague."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Além de centenas de ilhas, o território principal da Dinamarca ocupa qual península, que faz fronteira com a Alemanha?",
    "resposta": "Jutlândia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jutland",
      "https://pt.wikipedia.org/wiki/Jutl%C3%A2ndia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jutland",
        "situacao": "ok",
        "texto": "Jutland () is a peninsula in Northern Europe that forms the continental portion of Denmark and part of northern Germany (Schleswig-Holstein). It stretches from the Grenen spit in the north to the confluence of the Elbe and the Sude in the southeast. The historic southern border river of Jutland as a cultural-geographical region, which historically also included Southern Schleswig, is the Eider.\n[…]\nJutland as a cultural-geographical term mostly only refers to the Danish part of the peninsula, from Grenen to the Danish-German border. Sometimes, the northern part of Schleswig-Holstein down to the Eider (Southern Schleswig), is also included in the cultural-geographical definition of Jutland, because the Eider was historically the southern border of Denmark and the cultural and linguistic boundary between the Nordic countries and Germany from c. 850 to the 18th century.\n[…]\nMore recent is the designation Central Jutland (Midtjylland) for parts of traditionally West and East Jutish areas. Subregions of Northern Jutland include the peninsulas of Djursland with Mols, and Salling. Also in Northern Jutland is the Søhøjlandet, which is the highest elevated Danish region, and at the same time, the region with the highest density of lakes in Denmark. Denmark's longest river, the Gudenå, flows through Northern Jutland.\n[…]\nthe North Jutland Region (Region Nordjylland)\n[…]\nThe ten largest cities on the Jutland peninsula are:\n[…]\nThe distinctive Jutish (or Jutlandic) dialects differ substantially from the standard Danish language, especially those in the West Jutland and South Jutland parts. The Peter Skautrup Centre maintains and publishes an official dictionary of the Jutlandic dialects. Dialect usage, although in decline, is better preserved in Jutland than in eastern Denmark, and Jutlander speech remains a stereotype among many Copenhageners and eastern Danes.\n[…]\nJutland travel guide from Wikivoyage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jutl%C3%A2ndia",
        "situacao": "ok",
        "texto": "A Jutlândia (em dinamarquês Jylland  PRONÚNCIA e em alemão Jütland  PRONÚNCIA) é uma península que contém territórios da Dinamarca e do extremo norte da Alemanha. A porção dinamarquesa tem 29 775 km² e uma população de 2 599 104 habitantes (2016).\n[…]\nA Jutlândia estende-se entre o rio Eider, no extremo norte da Alemanha, e o cabo Skagens Rev, estando separada da Noruega pelo Escagerraque e da Suécia pelo Categate. A Jutlândia é muito plana, alcançando apenas 173 metros  no Yding Skovhoej. No centro há a destacar os lagos Julsø e Møssø. A região setentrional (ilha de Vendsyssel-Thy) está separada do resto pelo fiorde de Lim.\n[…]\nA Jutlândia é banhada pelos rios Gudena, Skjern, Storå e Varde, e suas cidades mais importantes são Århus, Ålborg, Esbjerg, Randers, Kolding, Horsens e Vejle.\n[…]\nNa Antiguidade chamou-se \"península Címbrica\", porque nela viveram os Címbrios antes dos Jutos e Dinamarqueses (Daneses). Durante a Primeira Guerra Mundial, teve lugar nesta província a chamada Batalha da Jutlândia. O nome da Jutlândia (do latim Iutum) vem da transliteração das formas como os jutos eram chamados. Levando-se em consideração a antiga obra Beowulf nota-se uma forma diferente de se referir a este povo, denominados no livro como Eotenas.\n[…]\nA península da Jutlândia é famosa por exportação de produtos farmacêuticos, motores, peixes e laticínios."
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Malta",
      "descricao": "País insular do Mar Mediterrâneo, ao sul da Sicília, cuja capital é Valeta."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O país Malta é um arquipélago no Mediterrâneo. Depois da ilha de Malta, qual é a maior ilha do país?",
    "resposta": "Gozo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gozo",
      "https://en.wikipedia.org/wiki/Malta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gozo",
        "situacao": "ok",
        "texto": "Gozo (Maltese: Għawdex [ˈɐːˤʊ̯dɛʃ]), known in antiquity as Gaulos, is an island in the Maltese archipelago in the Mediterranean Sea. The island is part of the Republic of Malta. After the island of Malta itself, it is the second-largest island in the archipelago.\n[…]\nHowever, as from October 2022, riding a bus in both Malta and Gozo has become free for residents of Malta. The Explorer Card is valid for 7-days, costs 35€ and gives you unlimited travel by bus. The user can hop on and off anytime and has some benefits like cheaper Tallinja bikes.\n[…]\nGozo covers 67 square kilometres (26 mi2), approximately the same area as New York City's Manhattan island. It lies approximately 6 kilometres (4 mi) northwest of Malta, is of oval form, and is 14 kilometres (8.7 mi) long and 7.25 kilometres (4.50 mi) wide.\n[…]\nThe island of Gozo has its own national football team. Because Gozo is a part of Malta and not an independent state, this team is not official and is thereby on the N.F.-Board. Gozo F.C. used to represent Gozo in the Maltese League, whilst a Gozo Football League is also maintained. Football on the island is managed by the Gozo Football Association.\n[…]\nThere is also a rugby club in Gozo; the Gozo Rugby Club opened its doors in 2011 and nowadays competes in the Malta Rugby Football Union and Malta Rugby League competition.\n[…]\nThe Malta campus of Queen Mary University of London is based in Gozo. It is designated an undergraduate medical school, with the same curriculum taught as the main UK campus. There is a branch of MCAST in Għajnsielem as well.\n[…]\nTwo days of shooting in Gozo's strong Mediterranean light provided shots used to represent the desolate surface of the alien planet in the 1981 British horror film Inseminoid.\n[…]\nGozo farmhouse\n[…]\nGozo Region"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Malta",
        "situacao": "ok",
        "texto": "Malta, officially the Republic of Malta, is an island country located in the central Mediterranean Sea. It consists of a number of islands, of which Malta and Gozo are the two main ones—south of Italy, east of Tunisia, and north of Libya. Valletta is the country's capital. Malta is the world's tenth-smallest country by area, ninth-most densely populated, and 166th most populated. It consists of a \n[…]\nIn 1266, the kingdom passed to the French Capetian House of Anjou, but high taxes made the dynasty unpopular in Malta, due in part to Charles of Anjou's war against the Republic of Genoa, and the island of Gozo was sacked in 1275.\n[…]\nMalta is an archipelago in the eastern basin of the central Mediterranean Sea, some 80 km (50 mi) from southern Italy across the Malta Channel. Only the three largest islands—Malta, Gozo, and Comino— have permanent residences, though Comino is practically uninhabited. The islands of the archipelago lie on the Malta plateau, a shallow shelf formed from the high points of a land bridge between Sicily and North Africa that became isolated as sea levels rose after the last ice age.\n[…]\nA variety of grapes is common in Malta, including Girgentina and Ġellewża. There is a large wine industry, with significant production using these native grapes. A number of wines have achieved Protected Designation of Origin with wines produced from grapes cultivated in Malta and Gozo designated as \"DOK\" wines (Denominazzjoni ta' l-Oriġini Kontrollata). Although beer is not a popular beverage in Malta, there is a common one called Cisk.\n[…]\nOutline of Malta\n[…]\n\"Map of Malta and Gozo\". Street Map of Malta and Gozo. Archived from the original on 16 July 2009. Retrieved 10 April 2009.\n[…]\n\"Photos of Gozo sister island of Malta\". Photos of Gozo. Archived from the original on 23 October 2008. Retrieved 17 November 2006.\n[…]\nWikimedia Atlas of Malta\n[…]\nGeographic data related to Malta at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gozo_%28ilha%29",
        "situacao": "ok",
        "texto": "Gozo é uma ilha no Mar Mediterrâneo, parte da República de Malta, e a segunda maior ilha em extensão territorial do arquipélago que forma aquele país.\n[…]\nA ilha tornou-se despovoada em 1551 quando toda a população de aproximadamente 6 000 habitantes foi escravizada por soldados otomanos e piratas muçulmanos.\n[…]\nHistória de Malta\n[…]\nGeografia de Malta\n[…]\nMedia relacionados com Gozo (ilha) no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Bélgica",
      "descricao": "País da Europa Ocidental cuja capital é Bruxelas."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A Bélgica se divide em três regiões: Flandres, ao norte, a região de Bruxelas e qual outra, ao sul?",
    "resposta": "Valônia",
    "distratores": [
      "Lorena",
      "Picardia",
      "Alsácia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Communities,_regions_and_language_areas_of_Belgium",
      "https://en.wikipedia.org/wiki/Wallonia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Communities,_regions_and_language_areas_of_Belgium",
        "situacao": "ok",
        "texto": "Belgium is a federal state comprising three communities and three regions that are based on four language areas. For each of these subdivision types, the subdivisions together make up the entire country; in other words, the types overlap.\n[…]\nthe Brussels-Capital Region (Brussels; French: Région de Bruxelles-Capitale, Dutch: Brussels Hoofdstedelijk Gewest)\n[…]\nThe State is responsible for the obligations of Belgium and its federalized institutions towards the European Union and NATO. It controls substantial parts of public health, home affairs and foreign affairs.\n[…]\nThe Flemish Region or Flanders (Dutch: Vlaams Gewest or Vlaanderen) occupies the northern part of Belgium. It has a surface area of 13,626 km2 (5,261 sq mi), or 44.4% of Belgium, and is divided into 5 provinces which contain a total of 300 municipalities.\n[…]\nThe Brussels-Capital Region (Dutch: Brussels Hoofdstedelijk Gewest, French: Région de Bruxelles-Capitale, German: Die Region Brüssel-Hauptstadt) or Brussels Region is centrally located and completely surrounded by the province of Flemish Brabant and thus by the Flemish Region. With a surface area of 162.4 km2 (62.7 sq mi), or 0.53% of Belgium, it is the smallest of the three regions. It contains the City of Brussels, which acts both as federal and regional capital, and 18 other municipalities.\n[…]\nThe Walloon Region or Wallonia (French: Région Wallonne or Wallonie) occupies the southern part of Belgium. It has a surface area of 16,901 km2 (6,526 sq mi), or 55.1% of Belgium, and is also divided into 5 provinces which contain a total of 262 municipalities. Its capital is Namur.\n[…]\nLanguage legislation in Belgium"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wallonia",
        "situacao": "ok",
        "texto": "Wallonia (French: Wallonie; German: Wallonie or Wallonien), officially the Walloon Region (French: Région wallonne; German: Wallonische Region) is one of the three regions of Belgium—along with Flanders and Brussels. Covering the southern portion of the country, Wallonia is primarily French-speaking. It accounts for 55% of Belgium's territory, but only 31% of its population.\n[…]\nWallonia now suffers from high unemployment and has a significantly lower GDP per capita than Flanders. The economic inequalities and linguistic divide between the two are major sources of political conflicts in Belgium and a major factor in Flemish separatism.\n[…]\nIn the 19th century, the area began to industrialize, and Wallonia was the first fully industrialized area in continental Europe. This brought the region great economic prosperity, which was not mirrored in poorer Flanders and the result was a large amount of Flemish immigration to Wallonia. Belgium was divided into two divergent communities.\n[…]\nWallonia is also home to the last bastion of traditional rustic saison, most notably those produced at the Brasserie de Silly and the Brasserie Dupont (located in Tourpes, in the region of Western Hainaut Province historically known for its production of rustic farmhouse ales). Jupiler, the best-selling beer in Belgium, is brewed in Jupille-sur-Meuse in Liège. Wallonia also home to a Jenever called Peket, and a May wine called Maitrank.\n[…]\nEven if Wallonia does not have direct access to the sea, it is very well connected to the major ports thanks to an extensive network of navigable waterways that pervades Belgium, and it has effective river connections to Antwerp, Rotterdam and Dunkirk.\n[…]\nThe Walloon Export and Foreign Investment Agency (AWEX) is the Wallonia Region of Belgium's government agency in charge of foreign trade promotion and foreign investment attraction."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Comunidades%2C_regi%C3%B5es_e_%C3%A1reas_lingu%C3%ADsticas_da_B%C3%A9lgica",
        "situacao": "ok",
        "texto": "A Bélgica é um estado federal constituído por três regiões, três comunidades e quatro regiões ou zonas linguísticas. Duas das regiões se dividem em províncias e estas, por sua vez, em municípios ou municipalidades.\n[…]\nAs comunidades, regiões, províncias e regiões lingüísticas são as quatro mais importantes subdivisões da Bélgica e estão previstas na Constituição. Os municípios estão definidos em lei. Todas estas subdivisões possuem limites geográficos definidos, inclusive as comunidades.\n[…]\nA Bélgica está subdividida em três regiões, capitais entre parênteses:\n[…]\nRegião da Flandres (Vlaams Gewest em neerlandês) (Bruxelas)\n[…]\nRegião da Valônia (Région Wallonne em francês) (Namur)\n[…]\nRegião de Bruxelas-Capital (Région de Bruxelles-Capitale em francês; Brusses Hoofdstedelijk Gewest, em neerlandês)\n[…]\nAs regiões de Flandres e Valônia estão subdivididas em cinco províncias cada, capitais entre parênteses:\n[…]\nRegião da Flandres:\n[…]\nRegião da Valônia:\n[…]\nRegião Linguística Flamenga (equivalente à Região de Flandres)\n[…]\nRegião Linguística Francesa (correspondente a quase toda a Região da Valônia)\n[…]\nRegião Linguística Alemã (apenas uma pequena parte da província de Liège - Valônia, no extremo leste da Bélgica, fronteira com a Alemanha)\n[…]\nRegião Linguística Bilíngue da Capital Bruxelas (Os habitantes de língua flamenga pertencem a Comunidade flamenga e os de língua francesa a Comunidade francesa)\n[…]\nA Comunidade flamenga é competente na Região Linguística Flamenga e na Região Linguística Bilíngue da Capital Bruxelas; a Comunidade francesa na Região Linguística Francesa e na Região Bilíngue da Capital de Bruxelas; e a Comunidade alemã na Região Linguística Alemã.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Reino dos Países Baixos",
      "descricao": "Estado soberano formado pelos Países Baixos e por três países constituintes no Caribe."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O Reino dos Países Baixos reúne quatro países: os Países Baixos, Curaçao, São Martinho e qual ilha caribenha?",
    "resposta": "Aruba",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kingdom_of_the_Netherlands"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kingdom_of_the_Netherlands",
        "situacao": "ok",
        "texto": "The Kingdom of the Netherlands, commonly known simply as the Netherlands, is a sovereign state consisting of a collection of constituent territories united under the monarch of the Netherlands, who functions as head of state. The realm is a unitary monarchy with its largest subdivision, the eponymous Netherlands, predominantly located in Northwestern Europe and with three smaller island territorie\n[…]\nThe Kingdom negotiates and concludes international treaties and agreements. Those that do not affect Aruba, Curaçao, or Sint Maarten directly are dealt with by the provisions of the Constitution (in fact by the Netherlands alone). Article 24 of the Charter specifies that when an international treaty or agreement affects Aruba, Curaçao, or Sint Maarten, the treaty or agreement concerned shall be submitted to their representative assemblies.\n[…]\nLast, but not least, the Netherlands can, according to article 14 of the Charter, conduct Kingdom affairs on its own if conducting such affairs does not affect Aruba, Curaçao, or Sint Maarten. Aruba, Curaçao, and Sint Maarten do not have this right.\n[…]\nUnder these reforms, the Netherlands Antilles were dissolved and Curaçao and Sint Maarten became constituent countries within the Kingdom of the Netherlands, obtaining the same status as Aruba which seceded from the Netherlands Antilles in 1986.\n[…]\nApart from the fact that referring to the Kingdom of the Netherlands as the \"Netherlands\" can be confusing, the term \"Kingdom\" is also used to prevent any feelings of ill will that could be associated with the use of the term \"Netherlands.\" The use of the term \"Netherlands\" for the Kingdom as a whole might imply that Aruba, Curaçao, and Sint Maarten are not equal to the Kingdom's country in Europe and that the three island countries have no say in affairs pertaining to the Kingdom but are instead subordinate to the European country."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Reino_dos_Pa%C3%ADses_Baixos",
        "situacao": "ok",
        "texto": "O Reino dos Países Baixos (em neerlandês: Koninkrijk der Nederlanden AFI: [ˈkoːnɪŋkrɛiɡ dɛr ˈneːdərlɑndə(n)] (); em papiamento: Reino Hulandes; em inglês: Kingdom of the Netherlands) ou Neerlândia (do neerlandês: Nederland; \"neder\": \"baixo\" e \"land\": \"terra\") é um Estado soberano que, desde 2010, é composto por quatro nações: os Países Baixos (na Europa), Aruba, Curaçau e São Martinho (nas Caraíba\n[…]\na Constituição de Aruba — a staatsregeling de Aruba.\n[…]\nO Reino dos Países Baixos passou por um processo de reestruturação naquilo que se refere as Antilhas Neerlandesas, ou seja, as ilhas de Curaçau, São Martinho, Bonaire, Santo Eustáquio e Saba. Aruba manterá o mesmo estado de país dentro do reino.\n[…]\nNa atual situação, o Reino é formado por quatro países em condições de igualdade: Aruba, Curaçau, São Martinho e os Países Baixos Europeus. Os territórios caribenhos do Reino não são considerados como territórios ultramarinos, e sim, países plenos e autônomos dos Países Baixos dentro do Reino. Os quatro países tem um alto grau de autonomia interna, porém assuntos atrelados a política externa, relações internacionais e defesa são assuntos do Reino.\n[…]\nO governo do Reino é formado pelo Conselho de Ministros, que se reúne em Haia e no qual cada país caribenho é representado por seu primeiro ministro. A sede do governo nacional de Curaçau encontra-se em Willemstad, a de Aruba, em Oranjestad e a de São Martinho em Philipsburg.\n[…]\nNa nova estrutura, a partir de outubro de 2010, as duas maiores ilhas das antigas Antilhas Neerlandesas, Curaçau e São Martinho, evoluíram para o status de país dentro do Reino, comparável ao que têm, atualmente, os Países Baixos e Aruba. O território das “Antilhas Neerlandesas” deixou de existir assim que a estrutura atual entrou em vigor. A partir de então, o Reino passou a ser composto por quatro países em vez de três: Países Baixos, Aruba, Curaçau e São Martinho.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Hispaniola",
      "descricao": "Ilha do Caribe, nas Grandes Antilhas, dividida entre dois países."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O Haiti ocupa a parte oeste da ilha caribenha de Hispaniola. Qual país ocupa o restante da ilha?",
    "resposta": "República Dominicana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hispaniola"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hispaniola",
        "situacao": "ok",
        "texto": "Hispaniola is an island in the Greater Antilles of the Caribbean, located between Cuba and Puerto Rico. It is the most populous island in the West Indies and the second-largest by land area, after Cuba. Covering an area of 76,192-square-kilometre (29,418 sq mi), it is divided into two separate sovereign countries: the Spanish–speaking Dominican Republic (48,445 km2 (18,705 sq mi)) to the east and \n[…]\nIn 1844, the first Substantive Charter of the new country stated: \"The Spanish part of the island of Santo Domingo and its adjacent islands form the territory of the Dominican Republic.\"  Western Hispaniola remained as the country of Haiti with the official name of Empire of Haiti or Republic of Haiti.\n[…]\nFrance would never regain control of the island, and after some 12 years of Spanish dominion, the leaders in Santo Domingo revolted again, and eastern Hispaniola was declared independent as the Republic of Spanish Haiti in 1821. Fearing the influence of a society of slaves that had successfully revolted against their owners, the United States and European powers refused to recognize Haiti, the second republic in the Western Hemisphere.\n[…]\nThe Hispaniolan pine forests occupy the mountainous 15% of the island, above 850 metres (2,790 ft) elevation. The flooded grasslands and savannas ecoregion in the south central region of the island surrounds a chain of lakes and lagoons, the most notable of which are Etang Saumatre and Trou Caïman in Haiti and the nearby Lake Enriquillo in the Dominican Republic.\n[…]\nAccording to reports in the Dominican Republic and Haiti, the flora in this naturally protected area consists of 621 species of vascular plants, of which 153 are highly endemic to Hispaniola. The most prominent endemic species of flora that abound in the area are ebano verde (green ebony), Magnolia pallescens, a highly endangered hardwood.\n[…]\nDominican Republic–Haiti relations\n[…]\nGeology of Haiti"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ilha_de_S%C3%A3o_Domingos",
        "situacao": "ok",
        "texto": "Ilha de São Domingos, Hispaniola ou Espanhola (Santo Domingo ou La Española, em espanhol) é uma das maiores ilhas das Antilhas, localizada no mar das Caraíbas a sudeste de Cuba e oeste de Porto Rico.\n[…]\nSão Domingos é a segunda maior ilha do Caribe depois de Cuba, com uma superfície de cerca de 76 000 km², comprimento de 650 km e largura máxima de 241 km. Politicamente, divide-se entre dois países: a República Dominicana, a leste, e o Haiti, que ocupa o terço ocidental da ilha. A ilha está separada de Cuba pelo canal de Barlavento e da Jamaica pelo canal da Jamaica.\n[…]\nA ilha de São Domingos ou La Española é a segunda maior ilha do Caribe (depois de Cuba), com uma área de 76 480 km² (29 530 mi2). A ilha tem cinco grandes cadeias de montanhas: a Cordilheira Central, que abrange a parte central da ilha, que se estende desde a costa sul da República Dominicana, no noroeste do Haiti, aonde ele é conhecido como o Maciço do Norte. Esta cordilheira tem o pico mais alto das Antilhas, Pico Duarte, que é 3 087 memros (10 128 ft) acima do nível do mar.\n[…]\nA ilha de São Domingos é caracterizada pela dualidade política, cultural e econômica. Politicamente, a ilha está dividida em dois Estados: A República Dominicana, que ocupa a maior parte da ilha e é o herdeiro da província espanhola de São Domingos (Santo Domingo); e a República do Haiti ocupa o terço ocidental da ilha, herdeiro da província francesa de São Domingos (Saint-Domingue).\n[…]\nA República Dominicana é um país de 10,41 milhões de pessoas, faz parte da América Latina, todos os dominicanos têm o espanhol como sua primeira língua, a maioria é católica e o país é o ponto crucial para se entender os hispano-americanos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "França",
      "descricao": "País da Europa Ocidental cuja capital é Paris, com diversos territórios ultramarinos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Terra natal de Napoleão, qual ilha do Mar Mediterrâneo faz parte do território francês?",
    "resposta": "Córsega",
    "fonte": [
      "https://en.wikipedia.org/wiki/Corsica",
      "https://pt.wikipedia.org/wiki/C%C3%B3rsega"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Corsica",
        "situacao": "ok",
        "texto": "Corsica is an island in the Mediterranean Sea and one of the 18 regions of France. It is the fourth-largest island in the Mediterranean and lies southeast of the French mainland, west of the Italian Peninsula and immediately north of the Italian island of Sardinia, the nearest land mass. A single chain of mountains makes up two-thirds of the island. As of January 2026, it had a population of 365,6\n[…]\nCorsica was ruled by the Republic of Genoa from 1284 to 1755, when it seceded to become a self-proclaimed, Italian-speaking republic. In 1768, Genoa officially ceded it to Louis XV of France as part of a pledge for the debts incurred after enlisting French military help in suppressing the Corsican revolt; as a result, France annexed the island in 1769. The future Emperor of the French, Napoleon Bonaparte, was a native Corsican, born that same year in Ajaccio.\n[…]\nThe reasons for that are manifold: the knowledge of the French language, which thanks to the mandatory primary school started to penetrate among the local youth, the high prestige of French culture, the awareness of being part of a big, powerful state, the possibility of well-paid jobs as civil servants, both in the island, in the mainland and in the colonies, the prospect of serving the French army during the wars for the conquest of the colonial empire, the introduction of steamboats, which reduced the travel time between mainland France and the island drastically, and – last but not least – Napoleon himself, whose existence alone constituted an indissoluble link between France and Corsica.\n[…]\nAjaccio Napoleon Bonaparte Airport\n[…]\nOn 13 December 2015, the regionalist coalition Pè a Corsica (English: For Corsica), supported by both Femu a Corsica and Corsica Libera and led by Gilles Siméoni, won the territorial elections with a percentage of 36.9%."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%B3rsega",
        "situacao": "ok",
        "texto": "A Córsega (em corso, Corsica; em francês, Corse) é a quarta maior ilha do mar Mediterrâneo por extensão (depois da Sicília, Sardenha e Chipre) e a maior ilha da França. Localiza-se a oeste da Itália, na zona geográfica italiana, constituindo uma coletividade territorial única. É dividida em dois departamentos: Alta Córsega e Córsega do Sul.\n[…]\nCom cerca de um terço do seu território protegido como parque nacional, e muito do belo litoral continuando imune do cimento que mudou grande parte da costa mediterrânica, a Córsega, quase despovoada (31 hab./km2), com base da sua economia em boa parte no turismo, pode praticamente duplicar a sua população no verão.\n[…]\nA relação não resolvida entre a Córsega e a França, que a governa há 258 anos, manifesta-se não só a partir do apego de seu povo às suas tradições e sua língua (u Corsu, \"linguagem poderosa, e o mais italiano entre os dialetos da Itália\", segundo Niccolò Tommaseo), mas por indicadores estatísticos que revelam a crise econômica e social (perene último colocado do país francês por nascimento e emprego) e por seus fortes impulsos de autonomia e independência, representados pelo nacionalismo corso, que colidem com a constituição francesa.\n[…]\nA história da Córsega era italiana até o ano 1768, quando a França invadiu a ilha. O mais ilustre e conhecido habitante corso foi Napoleão Bonaparte, nascido em Ajaccio no ano de 1769. A casa onde nasceu está preservada e, na cidade, encontram-se várias referências à figura histórica, como praças e ruas. Apesar disso, o antigo imperador da França é menosprezado pelo seu próprio povo, que, historicamente, tem desejado uma maior autonomia ou mesmo a independência da ilha perante o domínio francês.\n[…]\nCom 8.681 km² de área, a Córsega surge no mar Mediterrâneo logo ao norte da Sardenha na zona geográfica italiana.\n[…]\nReino da Córsega (1736)"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Japão",
      "descricao": "País insular do Leste Asiático, cuja capital é Tóquio."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Das quatro ilhas principais do Japão, qual é a maior, onde ficam Tóquio, Osaka e Quioto?",
    "resposta": "Honshu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Honshu",
      "https://pt.wikipedia.org/wiki/Honshu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Honshu",
        "situacao": "ok",
        "texto": "Honshu (Japanese: 本州, Hepburn: Honshū; pronounced [hó̞ɰ̃̀.ɕɨ̀ɨ̀] ; lit. 'main province'), historically known as Akitsushima (秋津島; lit. 'dragonfly island') or Hondo (本土; lit. 'mainland'), is the largest of Japan's four main islands. It lies between the Pacific Ocean (east) and the Sea of Japan (west). It is the seventh-largest island in the world, and the second-most populous after the Indonesian i\n[…]\nMost of Japan's industry is located in a belt running along Honshu's southern coast, from Tokyo to Nagoya, Kyoto, Osaka, Kobe, and Hiroshima. The island is linked to the other three major Japanese islands by a number of bridges and tunnels. The island primarily shares two climates, with Northern Honshu having four seasons with largely varying temperatures while the south experiences long, hot summers and cool to mild winters.\n[…]\nThese are notable flora and fauna of Honshu.\n[…]\nHonshu island generates around US$3.5 trillion or more than 80% of Japan's GDP.\n[…]\nMost of Japan's tea and silk is from Honshu. Japan's three largest industrial regions are all located on Honshu: the Keihin region, the Hanshin Industrial Region, and the Chūkyō Industrial Area.\n[…]\nHonshu is home to a large portion of Japan's minimal mineral reserves, including small oil and coal deposits. Several coal deposits are located in the northern part of the island, concentrated in Fukushima Prefecture and Niigata Prefecture, though Honshu's coal production is negligible in comparison to Hokkaido and Kyushu. Most of Japan's oil reserves are also located in northern Honshu, along the west coast, spanning Niigata, Yamagata, and Akita Prefectures.\n[…]\nMost of Japan's copper, lead, zinc and chromite is located on Honshu, along with smaller, scattered deposits of gold, silver, arsenic, sulfur and pyrite.\n[…]\nGeography of Japan\n[…]\nMedia related to Honshu at Wikimedia Commons\n[…]\nHonshu travel guide from Wikivoyage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Honshu",
        "situacao": "ok",
        "texto": "Honshu ou Honxu (本州, Honshū; lit.\"região principal\"), antigamente chamada Hondô, é a maior das ilhas do arquipélago japonês.\n[…]\nCom cerca de 28 000 km² de área, Honxu é o centro nervoso do Japão. Correspondendo a praticamente 60% da área do território do país, a ilha é a sétima maior do mundo, e a segunda em termos de concentração populacional, ficando atrás apenas de Java. Honxu tem o formato de um arco, com aproximadamente 1 300 km de comprimento e não mais que 230 km de largura.\n[…]\nAlém da capital japonesa, Tóquio, em Honxu também estão localizadas as três maiores cidades após a capital: Iocoama — onde se encontra o maior porto japonês, que serve à região de Tóquio — , Osaca e Nagoia. Outras cidades importantes, como Quioto, antiga capital do país, Cobe — local do segundo maior porto japonês, que atende à região industrial de Osaka — e Hiroxima, a sudoeste, primeira cidade a sofrer um ataque nuclear, também se encontram em Honxu.\n[…]\nA planície de Kanto, onde se encontra Tóquio, é a maior da ilha, e também a maior do Japão, com 13 000 km² de extensão. A planície de Nōbi, situada ao redor da cidade de Nagoia, a planície de Kinki, em que estão Osaca, Quioto, e a planície de Sendai, a nordeste de Honxu são outras planícies importantes, com grande importância histórica por serem áreas cultiváveis e, portanto, alvo de diversas disputas.\n[…]\nA ilha contém 34 prefeituras, incluindo a Região Metropolitana de Tóquio. Algumas ilhas menores também são administradas pelas prefeituras, incluindo as Ilhas Ogasawara, Sado, Izu Ōshima, e Awaji.\n[…]\nOsaka"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Andorra",
      "descricao": "Pequeno principado sem litoral nos Pireneus, entre a Espanha e a França, com capital em Andorra-a-Velha."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Andorra tem dois chefes de Estado, os copríncipes. Um deles é o bispo de Urgell, na Espanha. Qual é o cargo do outro?",
    "resposta": "Presidente da França",
    "fonte": [
      "https://en.wikipedia.org/wiki/Co-princes_of_Andorra",
      "https://en.wikipedia.org/wiki/Andorra"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Co-princes_of_Andorra",
        "situacao": "ok",
        "texto": "The co-princes of Andorra are jointly the heads of state (Catalan: cap d'estat) of the Principality of Andorra, a landlocked microstate lying in the Pyrenees between France and Spain. The co-princes are the bishop of Urgell and the president of France.\n[…]\nThrough inheritance, the Foix title to Andorra passed to the kings of Navarre. After Henry III of Navarre was crowned Henry IV of France, he issued an edict in 1607 establishing the king of France and the Bishop of Urgell as co-lords of Andorra.\n[…]\nIn 2009, French president Nicolas Sarkozy threatened to abdicate as lay co-prince if the principality did not change its banking laws to eliminate its longstanding status as a tax haven. The European Union also applied pressure to bring its tax laws into alignment with its taxation norms, and from 2013 to 2016 Andorra made reforms, including a personal income tax, a general indirect tax, and an end to its banking secrecy policies.\n[…]\nThe Constitution of Andorra carefully defines the contemporary role and prerogatives of the co-princes of Andorra. The Constitution establishes Andorra as a \"parliamentary coprincipality\", providing for the bishop of Urgell and the president of France to serve together as joint heads of state.\n[…]\nIn case of vacancy of either co-prince, the Constitution \"recognizes the validity of the interim procedures foreseen by their respective statuses, in order for the normal function of Andorran institutions not to be interrupted\". Thus, when a vacancy befalls the French presidency, the president of the French Senate acts as lay co-prince until a successor is duly chosen by the French electorate.\n[…]\nRepresentació de S.E. El Copríncep Francés\n[…]\nEl Copríncep d'Urgell\n[…]\nRulers.org – Andorra list of rulers for Andorra"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Andorra",
        "situacao": "ok",
        "texto": "Andorra, officially the Principality of Andorra, is a landlocked country on the Iberian Peninsula, in the eastern Pyrenees in southwestern Europe, bordered by France to the north and Spain to the south. Believed to have been created by Charlemagne, Andorra was ruled by the count of Urgell until 988, when it was transferred to the Diocese of Urgell. Andorra was formed as a polity by a charter in 12\n[…]\nIt is currently headed by two co-princes: the Bishop of Urgell in Catalonia, Spain, and the president of France. Its capital and largest city is Andorra la Vella.\n[…]\nRoger-Bernard II and Ermessenda shared rule over Andorra with the bishop of Urgell.\n[…]\nUnder the 1993 Constitution, Andorra is a parliamentary co-principality in which sovereignty is vested in the Andorran people. The Bishop of Urgell and the president of France serve as the co-princes, who jointly and indivisibly constitute the head of state and have equal constitutional powers. They represent the state and arbitrate and moderate the functioning of its public authorities.\n[…]\nAndorra is a unitary state and a constitutional diarchy. Its political system is also described as a parliamentary monarchy. The French co-prince holds the office by virtue of being the elected president of France, whereas Andorran voters do not participate in selecting either co-prince.\n[…]\nOn 31 May 2013, it was announced that Andorra intended to legislate for the introduction of an income tax by the end of June, against a background of increasing dissatisfaction with the existence of tax havens among EU members. The announcement was made following a meeting in Paris between the Prime Minister Antoni Martí and the French President and Prince of Andorra François Hollande.\n[…]\nButler, Graham (2025). \"The Legal Relations of the European Union with the Principality of Andorra\". European Foreign Affairs Review. 30 (4): 527–552. doi:10.54648/EERR2025035."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copr%C3%ADncipes_de_Andorra",
        "situacao": "ok",
        "texto": "Os copríncipes de Andorra são os chefes de Estado do principado de Andorra, um microestado encravado na cordilheira dos Pirenéus, entre a França e a Espanha. O principado segue este arranjo diárquico único, que persiste desde a época medieval até os dias de hoje.\n[…]\nAtualmente, o bispo de Urgel (Josep-Lluís Serrano Pentinat) e o presidente da França (Emmanuel Macron) são copríncipes de Andorra, na sequência da transferência das pretensões do conde de Foix à Coroa da França e, daí, ao presidente da França.\n[…]\nA Baixa Navarra integrou-se ao Reino da França em 1589, com a chegada ao trono de Henrique IV, momento a partir do qual os reis sucessivos também titularam-se de France et de Navarre. Em 1620, Luís XIII decidiu unir o título de rei de Navarra e seus direitos transmitidos de coprincipado de Andorra, na coroa da França.\n[…]\nApós a revolução francesa de 1789, a I República renunciou ao coprincipado até que em 1806, o imperador Napoleão Bonaparte voltou a exercer o papel de copríncipe, considerando que o decreto real de 1620 havia transmitido a parte da soberania francesa de Andorra ao estado francês, qualquer que fora sua forma de regime. Seguindo este princípio, os atuais presidentes da República Francesa são copríncipes de Andorra.\n[…]\nSegundo a Constituição, os copríncipes são a representação suprema do Estado e simbolizam a continuidade, independência e espírito de equilíbrio nas relações com os estados vizinhos da França e Espanha, desde a tradição medieval dos acordos de Pareatge.\n[…]\nNomear o chefe de governo de Andorra de acordo com as disposições constitucionais;\n[…]\nDesde a adoção da Constituição em 1993, ocuparam o cargo de copríncipes andorranos:\n[…]\nCopríncipe\n[…]\nLista de copríncipes de Andorra\n[…]\nLista de chefes de governo de Andorra",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Países bálticos",
      "descricao": "Grupo de três países do norte da Europa, na costa leste do Mar Báltico, que se separaram da União Soviética em 1991."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Os três países bálticos, que deixaram a União Soviética em 1991, são a Estônia, a Lituânia e qual outro?",
    "resposta": "Letônia",
    "distratores": [
      "Finlândia",
      "Bielorrússia",
      "Moldávia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Baltic_states"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Baltic_states",
        "situacao": "ok",
        "texto": "The Baltic states or the Baltic countries is a geopolitical term encompassing Estonia, Latvia, and Lithuania. All three countries are members of NATO, the European Union, the Eurozone, the Baltic Assembly, and the OECD. The three sovereign states on the eastern coast of the Baltic Sea are sometimes referred to as the \"Baltic nations\", less often and in historical circumstances also as the \"Baltic \n[…]\nThis process contributed to the dissolution of the Soviet Union, setting a precedent for the other Soviet republics to secede from the USSR. The Soviet Union recognized the independence of three Baltic states on 6 September 1991. Troops were withdrawn from the region (starting from Lithuania) from August 1993. The last Russian troops were withdrawn from there in August 1994. Skrunda-1, the last Russian military radar in the Baltics, officially suspended operations in August 1998.\n[…]\nAll three Baltic countries are today liberal democracies, with unicameral parliaments elected by popular vote for four-year terms: Riigikogu in Estonia, Saeima in Latvia and Seimas in Lithuania. In Latvia and Estonia, the president is elected by parliament, while Lithuania has a semi-presidential system whereby the president is elected by popular vote. All are part of the European Union (EU) and members of the North Atlantic Treaty Organization (NATO), being the only post-Soviet states to be so.\n[…]\nThe same legal interpretation is shared by the United States, the United Kingdom, and most other Western democracies, who held the forcible incorporation of Estonia, Latvia, and Lithuania into the Soviet Union to be illegal. At least formally, most Western democracies never considered the three Baltic states to be constituent parts of the Soviet Union.\n[…]\nThe Baltic Times, an independent weekly newspaper that covers the latest political, economic, business, and cultural events in Estonia, Latvia and Lithuania"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pa%C3%ADses_b%C3%A1lticos",
        "situacao": "ok",
        "texto": "Os países bálticos ou estados bálticos constituem uma região a nordeste da Europa, limita-se a leste do mar Báltico, onde estão localizados os Estados modernos da Estônia, Letônia e Lituânia.\n[…]\nOs estados bálticos permaneceram parte integrante do Império Russo até 1918 quando ocorreu a revolução russa e, aproveitando-se da debilidade do novo regime comunista, a República da Lituânia, Letônia e Estônia declaram-se estados independentes da influência russa e comunista.\n[…]\nA soberania durou entre 1918 e 1940, ano no qual foram reanexados, desta vez pela União Soviética como parte do acordo com a Alemanha Nazista, seguido por um período de ocupação alemã entre 1941 e 1944-1945 (RSS da Lituânia, RSS da Letônia e RSS da Estônia). Somente em 1991, com o colapso da União Soviética, os três países restauram a sua independência 46 anos depois. As três repúblicas eram chamadas \"Tribálticas\", um termo depreciativo na língua russa que significa \"territórios bálticos\".\n[…]\nOs habitantes dos três países preferiam o termo \"bálticas\".\n[…]\nA maioria dos países ocidentais considerou que a incorporação da Lituânia, Letônia e Estônia na URSS tinha sido ilegal, e formalmente não as consideravam parte da União Soviética. Esta interpretação legal mantém-se hoje em dia e é partilhada pelos governos e pela maior parte da população dos três países.\n[…]\nOs três estados são repúblicas unitárias, ingressaram na União Europeia em 1 de maio de 2004, usam o fuso horário EET/EEST, têm o euro como moeda e fazem parte do Espaço Schengen.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Bornéu",
      "descricao": "Grande ilha do Sudeste Asiático, a terceira maior do mundo, dividida entre três países."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Três países dividem a ilha de Bornéu: a Indonésia, a Malásia e qual pequeno sultanato?",
    "resposta": "Brunei",
    "fonte": [
      "https://en.wikipedia.org/wiki/Borneo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Borneo",
        "situacao": "ok",
        "texto": "Borneo () is the third-largest island in the world, with an area of 748,168 km2 (288,869 sq mi), and population of 23,053,723 (2020 national censuses). Situated at the geographic centre of Maritime Southeast Asia, it is one of the Greater Sunda Islands, located north of Java, west of Sulawesi, and east of Sumatra. The island is crossed by the equator, which divides it roughly in half.\n[…]\nSince decolonisation, Borneo has been politically divided among three sovereign states. Approximately 73% of the island forms part of Indonesia, comprising the five provinces collectively known as Kalimantan. About 26% consists of the Malaysian states of Sabah and Sarawak, while the sovereign state of Brunei occupies a small area on the island's northwestern coast.\n[…]\nAs of 2020, Indonesian Borneo accounts for 72% of the island's tree cover, Malaysian Borneo 27%, and Brunei 1%. Primary forest in Indonesia accounts for 44% of Borneo's overall tree cover.\n[…]\nAzahari desired to reunify Brunei, Sarawak and North Borneo into one federation known as the North Borneo Federation (Malay: Kesatuan Negara Kalimantan Utara), where the sultan of Brunei would be the head of state for the federation—though Azahari had his own intention to abolish the Brunei monarchy, to make Brunei more democratic, and to integrate the territory and other former British colonies in Borneo into Indonesia, with the support from the latter government.\n[…]\nBrunei occupies only a small proportion of Borneo's present-day land area, but the Sultanate of Brunei played a substantially larger role in the island's pre-colonial history. For several centuries it was one of the principal maritime states of northern Borneo, and its political and commercial influence extended beyond the boundaries of modern Brunei.\n[…]\nThe independent sultanate of Brunei (main part and eastern exclave of Temburong)\n[…]\nBorneo travel guide from Wikivoyage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Born%C3%A9u",
        "situacao": "ok",
        "texto": "Bornéu (em Malaio: Pulau Borneo; e em Indonésio: Kalimantan, aportuguesado para Calimantã) é uma grande ilha localizada na Ásia, na região das grandes Ilhas da Sonda, sendo considerada  a terceira ilha maior do mundo. Situada em meio às grandes rotas marítimas do Sudeste Asiático, está ao norte de Java, a oeste de Celebes, a leste de Sumatra e da península da Malásia, e ao sul do mar do Sul da Chi\n[…]\nEstá dividida em três partes, com soberania, respectivamante, da Indonésia, ao sul; da Malásia e de Brunei, ao norte.\n[…]\nA Indonésia tem soberania sobre, aproximadamente, 73% da área de Bornéu, enquanto os estados malaios de Sabá e Sarawak, ao norte, ocupam 26% da ilha. Além disso, o território federal de Labuan, também pertencente à Malásia, situa-se numa pequena ilha próxima à costa de Bornéu. Já o sultanato de Brunei tem seu território inteiramente em 1% da área da ilha.\n[…]\nO Sultanato de Brunei inicialmente recebeu bem a proposta de uma federação com Malásia. Enquanto isso, o Partido Popular de Brunei, liderado por A. M.\n[…]\nAzahari, desejava reunificar Brunei, Sarawak e Bornéu Setentrional em uma apenas federação chamada Federação do Bornéu do Norte (em Malaio: Kesatuan Negara Kalimantan Utara), onde o Sultão de Brunei seria o Chefe de Estado da federação - embora Azahari tinha suas próprias intenções de abolir a monarquia em Brunei, para fazer do país mais democrático e integrar o território, juntamente com as colônias britânicas, à Indonésia, com o apoio deste governo.\n[…]\nIsso diretamente levou a uma revolta em Brunei, a qual dificultou a tentativa de Azahari e o forçou a escapar para a Indonésia. Brunei então desistiu de ser parte da nova federação com a Malásia devido a alguns desacordos em questões diversas enquanto os líderes em Sarawak e Bornéu Setentrional continuaram a ser a favor da inclusão na federação.\n[…]\nA ilha de Bornéu é divida administrativamente por três países.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Panamá",
      "descricao": "País da América Central, no istmo entre as Américas, cuja capital é a Cidade do Panamá."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No Panamá, o dólar americano circula ao lado de uma moeda local que homenageia um explorador espanhol. Qual é essa moeda?",
    "resposta": "Balboa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Panamanian_balboa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Panamanian_balboa",
        "situacao": "ok",
        "texto": "The balboa (sign: B/.; ISO 4217: PAB) is, along with the United States dollar, one of the official currencies of Panama. It is named in honor of the Spanish explorer and conquistador Vasco Núñez de Balboa. The balboa is subdivided into 100 centésimos.\n[…]\nThe balboa replaced the Colombian peso in 1904 following the country's independence. The balboa has been tied to the United States dollar (which is also legal tender in Panama) at an exchange rate of 1:1 since its introduction and always circulated alongside dollars.\n[…]\nIn 1966, Panama followed the U.S. in changing the composition of their silver coins, with copper-nickel-clad 1⁄10 and 1⁄4 balboa, and .400 fineness 1⁄2 balboa. One-balboa coins, at .900 fineness silver, were issued that year for the first time since 1947. In 1973, copper-nickel-clad 1⁄2 balboa coins were introduced. 1973 also saw the revival of the 2+1⁄2 centésimos coin, which had a size similar to that of the U.S.\n[…]\nModern 1, 5 centésimo, 1⁄10, 1⁄4, and 1⁄2 balboa coins are the same weight, dimensions, and composition as the U.S. cent, nickel, dime, quarter, and half dollar, respectively. However, U.S. coins are not legal tender in Panama. In 2011, new 1-balboa bimetallic coins were issued that are the same dimensions as the U.S. dollar coin.\n[…]\nIn addition to circulating issues, commemorative coins in denominations of 5, 10, 20, 50, 75, 100, 150, 200, and 500 balboas have also been issued. At the time the .925 fineness sterling silver 20 balboa coin honoring Simón Bolívar was introduced in 1971, it was the largest legal tender silver coin in the world, with a 61 mm diameter and containing 3.85 ozt silver.\n[…]\nU.S. banknotes are legal tender in Panama as the main form of cash in the country.\n[…]\nEconomy of Panama"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Balboa_%28moeda%29",
        "situacao": "ok",
        "texto": "O balboa é a moeda oficial do Panamá, conjuntamente com o dólar dos Estados Unidos. Seu código ISO 4217 é PAB.\n[…]\nDenominada em homenagem ao conquistador espanhol, Vasco Núñez de Balboa, o balboa é ancorado ao Dólar americano / dólar estadunidense que tem curso legal no Panamá, com uma taxa de câmbio de 1:1 desde 1903, por isso balboas podem ser trocados por dólares no Panamá em qualquer momento a essa taxa paritária.\n[…]\nO balboa está dividido em 100 centésimos; as moedas modernas de 1, 5, 10, 25, e 50 centésimos têm o mesmo peso, dimensões e composição metálica das moedas estadunidenses de penny, nickel, dime, quarter e meio dólar respectivamente. O Banco Nacional do Panamá, em certas ocasiões, coloca moedas de 1 balboa em circulação, que têm as mesmas dimensões do dólar Eisenhower.\n[…]\nAs notas panamenhas em balboas não são impressas, só o foram por breve período em 1941, e não estão em circulação: para notas ou papel-moeda, o Panamá usa o dólar dos Estados Unidos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Paraguai",
      "descricao": "País sem litoral da América do Sul, com capital em Assunção."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Ao lado do espanhol, qual língua indígena é oficial no Paraguai e falada pela maioria da população?",
    "resposta": "Guarani",
    "fonte": [
      "https://en.wikipedia.org/wiki/Paraguay",
      "https://en.wikipedia.org/wiki/Guarani_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paraguay",
        "situacao": "ok",
        "texto": "Paraguay, officially the Republic of Paraguay, is a landlocked country located in the central region of South America. It borders Bolivia to the northwest and north, Brazil to the northeast and east, and Argentina to the southeast, south, and west. Paraguay has access to the Atlantic Ocean via the Paraná–Paraguay Waterway, a system of navigable channels shared by five countries. The country is gov\n[…]\nThe majority of Paraguay's 6 million people are mestizo, and Guarani culture remains widely influential; more than 90% of the population speak various dialects of the Guarani language alongside Spanish, the highest rate of fluency in an indigenous language in Latin America. In a 2014 Positive Experience Index based on global polling data, Paraguay ranked as the \"world's happiest place\", and in 2024, placed 24th in the progress rankings of the World Happiness Report.\n[…]\nAsunción airport is an important stopover for international airlines and Guaraní International Airport is an important international air cargo hub.\n[…]\nSpanish and Guaraní are the two main languages in Paraguay, with both having official status. The Guaraní language is a remarkable trace of the indigenous Guaraní culture that has endured in Paraguay. Guaraní is one of the last commonly used indigenous national languages in South America. In 2015, Spanish was spoken by about 87% of the population, while Guaraní is spoken by more than 90%, or slightly more than 5.8 million speakers. Of rural Paraguayans, 52% are bilingual in Guaraní and Spanish.\n[…]\nThe most popular instruments in Paraguayan music are the harp and the guitar. The native genres are the Paraguayan polka and the guarania, characterized by a slow song that was developed by José Asunción Flores around the 1920s.\n[…]\n\"Exchange rate of the Guaraní – Paraguayan currency\". Tipo de Cambio de Monedas. 10 March 2019. Archived from the original on 14 April 2019."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Guarani_language",
        "situacao": "ok",
        "texto": "Guarani (avañe'ẽ) is a Tupian language belonging to the Tupi–Guarani branch of South America. It is one of the two official languages of Paraguay (along with Spanish), where it is spoken by the majority of the population, and where half of the rural population are monolingual speakers of the language.\n[…]\nIn South America, the indigenous language that is most widely spoken amongst non-indigenous communities is Guaraní. South America is home to more than 280,000 Guaraní people, 51,000 of whom reside in Brazil. The Guaraní people inhabit regions in Brazil, Paraguay, Bolivia, as well as Argentina. There are more than four million speakers of Guaraní across these regions.\n[…]\nDuring the autocratic regime of Alfredo Stroessner, his Colorado Party used the language to appeal to common Paraguayans although Stroessner himself never gave an address in Guarani. Upon the advent of Paraguayan democracy in 1992, Guarani was established in the new constitution as a language equal to Spanish.\n[…]\nJopara, a mixture of Spanish and Guarani, is spoken by an estimated 90% of the population of Paraguay. Code-switching between the two languages takes place on a spectrum in which more Spanish is used for official and business-related matters, and more Guarani is used in art and in everyday life.\n[…]\nGuarani and the Importance of Maintaining Indigenous Culture Through Language Archived 29 April 2015 at the Wayback Machine\n[…]\nA Grammar of Paraguayan Guarani – by Bruno Estigarribia, UCL Press (open access, Creative Commons license)\n[…]\nGuaraní (Intercontinental Dictionary Series)\n[…]\n1983: Natalia Krivoshein de Canese, Gramática de la lengua guaraní\n[…]\n1990: Natalia Krivoshein de Canese, Feliciano Acosta Alcatraz, Ñe'ẽryru. diccionario guaraní-español (Paraguayan Guaraní: Ñe'eryru: avañe'e-karaiñe'e, karaiñe'e-avañe'e)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paraguai",
        "situacao": "ok",
        "texto": "Paraguai (pronunciado em português europeu: [pɐɾɐˈgwaj]; pronunciado em português brasileiro: [paɾaˈgwaj]; em castelhano:  Paraguay , pronunciado: [paɾaˈɣwaj]; em guarani:  Paraguái), oficialmente República do Paraguai (em castelhano: República del Paraguay; em guarani: Tavakuairetã Paraguái), é um país sem costa marítima localizado no centro da América do Sul. É limitado a norte e oeste pela Bolí\n[…]\nO guarani é reconhecido como língua oficial, junto com o espanhol, e ambos os idiomas são falados pela população. Os nativos guaranis viviam no atual território paraguaio por pelo menos um milênio antes dos espanhóis conquistarem o território no século XVI. Os colonizadores espanhóis e missões jesuíticas introduziram o cristianismo e a cultura espanhola para a colônia. O Paraguai estava na periferia do Império Espanhol, com poucos centros urbanos e uma população escassa.\n[…]\nO guarani, língua falada pela maioria da população, e o espanhol são os idiomas oficiais, sendo que 95% da população é bilingue. O dialeto falado no país é o espanhol paraguaio. Há também dezenas de milhares de falantes puramente indígenas de dialetos guaranis no Paraguai.\n[…]\nOs termos ladino e mestizo não são usados no espanhol paraguaio e não existem conceitos sobre mistura cultural ou racial, como existem em outros países latino-americanos. No entanto, apesar da espanholização da maioria dos moradores, noventa por cento da população é falante da língua indígena guarani. Por esse motivo, o Paraguai é único no hemisfério e o país é, frequentemente, citado como uma das poucas nações bilíngues no mundo.\n[…]\nA característica marcante da cultura paraguaia é a persistência da tradição guarani, entrelaçada com a hispânica. Embora as publicações em guarani sejam numerosas, a maioria da população conhece os dois idiomas. O guarani é empregado como linguagem doméstica e o espanhol na vida oficial e comercial.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Cabo Verde",
      "descricao": "País insular africano de língua portuguesa, no oceano Atlântico, a oeste do Senegal."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Qual é a moeda de Cabo Verde, cujo nome lembra a antiga moeda de Portugal?",
    "resposta": "Escudo cabo-verdiano",
    "distratores": [
      "Kwanza",
      "Metical",
      "Dobra"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cape_Verdean_escudo",
      "https://pt.wikipedia.org/wiki/Escudo_cabo-verdiano"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cape_Verdean_escudo",
        "situacao": "ok",
        "texto": "The escudo (sign: ; ISO 4217: CVE) is the currency of the Republic of Cape Verde. One escudo is subdivided into one hundred centavos.\n[…]\nThe escudo became the currency of Cape Verde in 1914. It replaced the Cape Verdean real at a rate of 1000 réis = 1 escudo. Until 1930, Cape Verde used Portuguese coins, although banknotes were issued by the Banco Nacional Ultramarino specifically for Cape Verde beginning in 1865.\n[…]\nUntil independence in 1975, the Cape Verde escudo was equal to the Portuguese escudo. Subsequently, it depreciated, declining by about 30 per cent in 1977–78 and by a further 40 per cent in 1982–84. Thereafter, it remained fairly stable against the Portuguese escudo.\n[…]\nIn mid-1998 an agreement with Portugal established a pegged rate of 1 Portuguese escudo = 0.55 Cape Verdean escudos. Since the replacement of the Portuguese escudo with the euro, the Cape Verdean escudo has been pegged to the euro at a rate of 1 EUR = 110.265 CVE. This peg is supported by a credit facility from the Portuguese government.\n[…]\nThe third series was introduced in 1992 in denominations of 200, 500, 1000, with the addition in 1999 of 2000 and 5000 escudo notes. In 2005, the 200 escudo note was redesigned, followed by the 500 and 1000 in 2007.\n[…]\nOn 22 December 2014, the Banco de Cabo Verde introduced a new series of banknotes that honor Cape Verdean figures in the fields of literature, music, and politics. It consists of denominations of 200, 1,000 and 2,000 escudos issued in 2014, with the former now printed on polymer, and banknotes of 500 and 5,000 escudos issued in 2015.\n[…]\nBanknotes of Cape Verde (in English and German)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escudo_cabo-verdiano",
        "situacao": "ok",
        "texto": "O escudo cabo-verdiano  (ISO 4217: CVE, abreviado como $ ou Esc) é a unidade monetária oficial de Cabo Verde desde 1914, quando substituiu o então utilizado real de Cabo Verde.\n[…]\nA moeda cabo-verdiana esteve, desde meados de 1998 e até à criação do euro, indexada ao escudo português em resultado de um acordo de cooperação cambial com Portugal, que garantia a convertibilidade a uma paridade fixa em escudos portugueses e que criava igualmente uma linha de crédito com a finalidade de reforçar as reservas cambiais de Cabo Verde. A cotação fixa em relação ao escudo português era de 1 PTE = 0,55 CVE.\n[…]\nExistem atualmente cinco denominações de cédulas em circulação: 200$00, 500$00, 1000$00, 2000$00 e 5000$00. As notas de 500$00, 1000$00, 2000$00 e 5000$00 escudos são todas impressas em substrato de algodão, e a nota de 200 escudos, em substrato de polímero. Já as moedas em circulação têm as seguintes denominações: 1$00, 5$00, 10$00, 20$00, 50$00 e 100$00, reproduzidas em 3 séries.\n[…]\n«Banco de Cabo Verde, Notas e moedas»\n[…]\n«Notas de Cabo Verde» (em alemão e inglês)"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Nova Zelândia",
      "descricao": "País insular da Oceania, no sudoeste do Pacífico, cuja capital é Wellington."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Desde 1987, qual língua polinésia, falada pelo povo nativo das ilhas, é língua oficial da Nova Zelândia?",
    "resposta": "Maori",
    "fonte": [
      "https://en.wikipedia.org/wiki/M%C4%81ori_language",
      "https://en.wikipedia.org/wiki/Languages_of_New_Zealand"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/M%C4%81ori_language",
        "situacao": "ok",
        "texto": "Māori (Māori: [ˈmaːɔɾi] ; endonym: te reo Māori [tɛ ɾɛɔ ˈmaːɔɾi], 'the Māori language', also shortened to te reo) is an Eastern Polynesian language and the language of the Māori people, the indigenous population of mainland New Zealand. The southernmost member of the Austronesian language family, it is related to Cook Islands Māori, Moriori, Tuamotuan, and Tahitian. The Māori Language Act 1987 gav\n[…]\nNew Zealand has three official languages; New Zealand Sign Language, te reo Māori, and English. Te reo Māori gained its official status with the passing of the Māori Language Act 1987.\n[…]\nThe official status of Māori, and especially its use in official names and titles, is a political issue in New Zealand. In 2022 a 70,000-strong petition from Te Pāti Māori went to Parliament calling for New Zealand to be officially renamed Aotearoa, and was accepted for debate by the Māori Affairs select committee.\n[…]\nA considerable number of governmental and non-governmental organisations continue to use the older spelling of ⟨roopu⟩ ('association') in their names rather than the more modern form ⟨rōpū⟩. Examples include Te Roopu Raranga Whatu o Aotearoa ('the national Māori weavers' collective') and Te Roopu Pounamu (a Māori-specific organisation within the Green Party of Aotearoa New Zealand).\n[…]\nMāori Language Day\n[…]\nBenton, R. A. (1997). The Maori Language: Dying or Reviving?. NZCER, Distribution Services, Wellington, New Zealand.\n[…]\nHolmes, J. (1997). \"Maori and Pakeha English: Some New Zealand Social Dialect Data\". Language in Society, 26(1), 65–101. JSTOR 4168750. doi:10.1017/S0047404500019412.\n[…]\nA Dictionary of the Maori Language by Herbert W. Williams, at the New Zealand Electronic Text Collection, Te Pūhikotuhi o Aotearoa\n[…]\nMaori Phonology\n[…]\nMaori Language Week at NZHistory – includes a history of the Māori language, the Treaty of Waitangi Māori Language claim and 100 words every New Zealander should know"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Languages_of_New_Zealand",
        "situacao": "ok",
        "texto": "English is the predominant language and the primary official language of New Zealand. Almost the entire population speak it either as native speakers or proficiently as a second language. The New Zealand English dialect is most similar to Australian English in pronunciation, with some key differences. The Māori language of the indigenous Māori people was made the first de jure official language in\n[…]\nNew Zealand has three official languages: English, Māori and New Zealand Sign Language.\n[…]\nNew Zealanders often reply to a question or emphasise a point by adding a rising intonation at the end of the sentence. New Zealand English has also borrowed words and phrases from Māori, such as haka (war dance), kia ora (a greeting), mana (power or prestige), puku (stomach), taonga (treasure) and waka (canoe).\n[…]\nThe Māori language of the indigenous Māori people has been an official language by statute since 1987, with rights and obligations to use it defined by the Maori Language Act 1987. It can, for example, be used in legal settings, such as in court, but proceedings are only recorded in English, unless private arrangements are made and agreed by the judge.\n[…]\nAccording to the 2023 census, English is the most-spoken language in all 67 territorial authority areas in New Zealand. Māori is the second-most spoken language in 57 territorial authority areas. Areas where Māori is not the second-most spoken language are:\n[…]\nCook Islands Māori and Pukapukan – spoken in the New Zealand associated state of the Cook Islands\n[…]\nNiuean language – spoken in the New Zealand associated state of Niue\n[…]\nTokelauan language – spoken in the New Zealand dependent territory of Tokelau\n[…]\n\"Te Ture mō Te Reo Māori 2016 No 17 (as at 05 April 2023), Public Act Contents – New Zealand Legislation\". www.legislation.govt.nz.\n[…]\nLanguages of New Zealand at Ethnologue: Languages of the World"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_maori",
        "situacao": "ok",
        "texto": "A língua maori (em maori: te reo Māori ou apenas te reo) é um idioma pertencente ao ramo polinésio oriental da família austronésia. Utilizada sobretudo pelo povo maori, nativo da Nova Zelândia (em maori: Aotearoa \"a terra da grande nuvem branca\"), representa uma das línguas oficiais do país, juntamente com o inglês e a língua de sinais neozelandesa.\n[…]\nAo longo dos séculos XIII e XIV, navegadores polinésios desembarcaram e se estabeleceram nas ilhas da atual Nova Zelândia, dando origem aos povos, à cultura e à língua maori. Por muitos séculos, apesar do idioma não possuir uma forma escrita, os maori realizavam registros em entalhes, nós e tecidos, com símbolos cujo significado era amplamente conhecido entre os povos nativos.\n[…]\nMesmo assim, a recuperação da língua e da cultura maori como um todo enfrentam desafios. Um deles é o reconhecimento do nome nativo do país (Aotearoa, 'a terra da grande nuvem branca') que, apesar de ter se tornado mais e mais popular desde o renascimento maori, ainda enfrenta obstáculos em sua oficialização, como a resistência de Ministros do Parlamento e a falta de referendos oficiais para consultar a opinião dos neozelandeses, ainda divididos sobre o assunto.\n[…]\nA primeira gramática que pautou a escrita do maori com o alfabeto latino foi A Grammar and Vocabulary of the Language of New Zealand (Gramática e Vocabulário da Língua da Nova Zelândia), publicada pelo linguista Samuel Lee da Universidade de Cambridge, juntamente com o reverendo Thomas Kendall, o líder maori Hongi Hika e o jovem Waikato (ambos do povo Ngātahui, da Ilha Norte) em 1820.\n[…]\nEm 1987, a Comissão da Língua Maori oficializou o uso do mácron, que atualmente representa o registro escrito mais usado, porém a duplicação de vogais ainda permanece comum na região de Waikato.\n[…]\nKia ora! '(Que você) tenha saúde!' (cumprimento maori mais utilizado)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Luxemburgo",
      "descricao": "Grão-ducado sem litoral da Europa Ocidental, entre Bélgica, França e Alemanha, com capital de mesmo nome."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Luxemburgo tem três línguas oficiais: o luxemburguês, o francês e qual outra?",
    "resposta": "Alemão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Languages_of_Luxembourg"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Languages_of_Luxembourg",
        "situacao": "ok",
        "texto": "The linguistic situation in Luxembourg is characterized by the practice and the recognition of three official languages: French, German, and the national language Luxembourgish, established in law in 1984. These three languages are also referred to as the three administrative languages, as the constitution does not specify them as being \"official\".\n[…]\nLuxembourgish (Lëtzebuergesch), a Rhinelandic language of the Moselle region similar to German and Dutch, was introduced in primary school in 1912. It is similar to Moselle-Frankish dialects like the dialects in Germany bordering Luxembourg, and the dialects in Moselle, France. Unlike its German counterparts, it uses many French loanwords and is recognized as a separate language rather than a German dialect.\n[…]\nOptionally Latin, Spanish and/or Italian in the Lycée Classique where most subjects are taught in French after 4e. At the university level, multilingualism makes it possible for Luxembourgish students to continue their higher education in French, German or English-speaking countries.\n[…]\nForeign-born people and guest workers make up almost half (47%) of the population of Luxembourg. The most common languages spoken by them, other than German and French, are Portuguese, English\n[…]\nIn addition to Luxembourgish, French, and German, English is frequently an acceptable language for use in and with government services.\n[…]\nAccording to 2021 census data, 48.9% of citizens claimed Luxembourgish as their main language, 15.4% Portuguese, 14.9% French, 3.6% English, 3.6% Italian, 2.9% German and 10.8% different languages (the most spoken ones being Spanish, Arabic, Dutch, Russian, Polish and Romanian).\n[…]\nConstitution of Luxembourg\n[…]\nMultilingualism in Luxembourg\n[…]\nClaims of Luxembourgish being an endangered language"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADnguas_de_Luxemburgo",
        "situacao": "ok",
        "texto": "A situação linguística em Luxemburgo caracteriza-se pela prática e o reconhecimento de três línguas oficiais: o francês, o alemão e o luxemburguês, a língua nacional estabelecida em lei em 1984. Esses idiomas também são referidos como as três línguas administrativas.\n[…]\nApós a fundação do país, o francês desfrutou o maior prestígio e, portanto, ganhou uso preferencial como língua oficial e administrativa. O alemão foi usado no campo político para comentar as leis e as ordenanças, a fim de torná-las compreensíveis por todos. No ensino, o ensino básico era limitado ao alemão, enquanto o francês era ministrado no ensino secundário. A lei de 26 de julho de 1843, reforçou o bilinguismo através da introdução do ensino do francês nas escolas primárias.\n[…]\nA população de origem estrangeira e trabalhadores convidados representam mais de um terço (cerca de 40%) da população de Luxemburgo. As línguas, não oficiais, mais faladas neste segmento da população são o português, o italiano e o inglês.\n[…]\nA língua portuguesa é o segundo idioma mais falado no Grão-Ducado como língua nativa, atrás apenas do luxemburguês, de acordo com o Gabinete de Estatísticas de Luxemburgo (STATEC), em 2013, o português era a língua principal de 15,7% da população, atrás apenas do luxemburguês (55,8%).\n[…]\nSegundo dados do Ministério da Educação de Luxemburgo, o português é a segunda língua materna mais falada nas escolas do país, com 28,9% dos falantes, atrás do luxemburguês, com 39,8%, mas à frente das outras duas línguas oficiais do Grão-Ducado, francês (11,9% dos falantes) e alemão (2%). O país recebeu o estatuto de observador associado da Comunidade dos Países de Língua Portuguesa (CPLP) durante a Cimeira de Santa Maria, Cabo Verde, que foi realizada em julho de 2018.\n[…]\nLínguas por país",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Haiti",
      "descricao": "País caribenho na porção oeste da ilha de Hispaniola, com capital em Porto Príncipe."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Além do francês, qual é a outra língua oficial do Haiti, falada por praticamente toda a população?",
    "resposta": "Crioulo",
    "distratores": [
      "Espanhol",
      "Inglês",
      "Iorubá"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Haitian_Creole",
      "https://en.wikipedia.org/wiki/Haiti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Haitian_Creole",
        "situacao": "ok",
        "texto": "Haitian Creole (Haitian Creole: kreyòl ayisyen, [kɣejɔl ajisjɛ̃]), or simply Creole (kreyòl), is a French-based creole language. It is spoken by over 13 million people worldwide, primarily Haitian citizens and the Haitian diaspora. It is one of the two official languages of Haiti (the other being French), where it is the native language of the vast majority of the population. It is also the most w\n[…]\nThe word creole comes from the Portuguese term crioulo, which means \"a person raised in one's house\" and from the Latin creare, which means \"to create, make, bring forth, produce, beget\". In the New World, the term originally referred to Europeans born and raised in overseas colonies (as opposed to the European-born peninsulares).\n[…]\nHaiti, 1st year, 5th day of independence.\n[…]\nYou will pay only half directly to us.\" Do you believe my dear mother, that we accepted the deal? Our President hugged the good papa Makau (the French ambassador). They drank to the health of the King of France, to the health of Boyer, to the health of Christophe, to the health of Haiti, to independence. Then they danced Balcindé and Bai chi ca colé with Haitian women. I can't tell you how beautiful and noble all of this is.\n[…]\nWhen Haiti was still a colony of France, edicts by the French government were often written in a French-lexicon creole and read aloud to the slave population. The first written text of Haitian Creole was composed in the French-lexicon in a poem called Lisette quitté la plaine in 1757 by Duvivier de la Mahautière, a white Creole planter.\n[…]\nAs of 2012, the language was also spoken by over 450,000 Haitians who reside in the neighboring Dominican Republic, although the locals do not speak it. However, some estimates suggest that there are over a million speakers due to a huge population of undocumented immigrants from Haiti.\n[…]\nRadio Haiti-Inter"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Haiti",
        "situacao": "ok",
        "texto": "Haiti, officially the Republic of Haiti, is a country in the Caribbean on the island of Hispaniola in the Caribbean Sea, east of Cuba and Jamaica and south of The Bahamas. It occupies the western side of the island, which it shares with the Dominican Republic. Haiti is the third largest country in the Caribbean by area, and with an estimated population of 11.4 million, it is the most populous Cari\n[…]\nUnder colonial rule, Haitian mulattoes were generally privileged above the black majority, though they possessed fewer rights than the white population. Following the country's independence, they became the nation's social elite. Numerous leaders throughout Haiti's history have been mulattoes.\n[…]\nHaiti is one of two independent nations in the Americas (along with Canada) to designate French as an official language; the other French-speaking areas are all overseas départements, or collectivités, of France, such as French Guiana. Haitian Creole is spoken by nearly all of the Haitian population. French, the base language for Haitian Creole, is popular among the Haitian elite and upper classes.\n[…]\nMonuments include the Sans-Souci Palace and the Citadelle Laferrière, inscribed as a World Heritage Site in 1982. Situated in the Northern Massif du Nord, in the National History Park, the structures date from the early 19th century. The buildings were among the first built after Haiti's independence from France.\n[…]\nFootball (soccer) is the most popular sport in Haiti with hundreds of small clubs competing at the local level. Basketball and baseball are growing in popularity. Stade Sylvio Cator is the multi-purpose stadium in Port-au-Prince, currently used mostly for association football matches. In 1974, the Haiti national football team were only the second Caribbean team to make the World Cup, returned to the tournament in 2026 after 52 years of absence.\n[…]\nHaiti profile from the BBC News."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_crioula_haitiana",
        "situacao": "ok",
        "texto": "O crioulo haitiano (kreyòl ayisyen), também conhecida como créole, é uma língua natural falada por quase toda a população do Haiti (9,2 milhões), havendo ainda cerca de 4,5 milhões de imigrantes que falam o crioulo haitiano em outros países, tais como Canadá, Estados Unidos, França, República Dominicana, Cuba, Bahamas e outros.\n[…]\nApresenta dois dialetos distintos: o fablas e o plateau. Muitos haitianos falam quatro línguas: crioulo, francês, espanhol e inglês.\n[…]\nA outra língua oficial do Haiti é o francês, idioma no qual o crioulo do Haiti se baseia, sendo que 90% do seu vocabulário vem dessa língua. Outros idiomas também influenciaram o crioulo haitiano, dentre os quais o taino (nativo da ilha) e algumas línguas do oeste da África (iorubá, fon, jeje).\n[…]\nDesde 1961, por esforços de Félix Morisseau-Leroy e outros, o crioulo haitiano foi reconhecido como língua oficial ao lado do francês, que fora único até então como idioma literário desde a independência dessa nação em 1804. Desde o escritor Morisseau-Leroy, seu uso literário vem crescendo, embora ainda seja pequeno.\n[…]\nA gramática do crioulo haitiano é bem mais simples do que a do francês; os verbos não variam por tempo e pessoa, e não há gênero gramatical. Assim nem artigos, nem adjetivos, variam com o substantivo. A ordem das palavras, Sujeito-Verbo-Objeto (SVO) é a mesma do francês, mas as orações são bem mais simples.\n[…]\nMuitos dos verbos do crioulo haitiano têm pronúncia bastante similar aos correspondentes franceses no infinitivo, porém são escritos foneticamente, não como em francês. Não há conjugação e as indicações dos tempos são com marcadores.\n[…]\nNão há conjugação no crioulo haitiano. No presente de verbos estativos (que não denotam ação) é usada forma básica do verbo. Mwen pale kreyòl - \"Eu falo o crioulo\" (presente contínuo).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Montenegro",
      "descricao": "País dos Bálcãs, na costa do Mar Adriático, com capital em Podgorica."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em 2002, mesmo sem acordo formal com a União Europeia, Montenegro passou a usar oficialmente qual moeda?",
    "resposta": "Euro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Montenegro_and_the_euro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Montenegro_and_the_euro",
        "situacao": "ok",
        "texto": "Montenegro is a country in Southeast Europe that is neither a member of the European Union (EU) nor the Eurozone, nor does it have a formal monetary agreement with the EU. However, it is one of the two territories (along with Kosovo) that has unilaterally adopted the euro in 2002 as its de facto domestic currency and legal tender.\n[…]\nOn 1 January 2002, the euro notes and coins were officially introduced into circulation in many European countries, including Germany, where the Deutsche Mark used to be the official currency. Thus the Deutsche Mark ceased to be legal tender immediately upon the adoption of the euro. Following these events at the beginning of 2002, Montenegro decided to officially and unilaterally adopt the euro, first as a parallel legal tender to the Deutsche Mark, and since March 2002 as the only legal tender.\n[…]\nThe use was eventually acknowledged by the European Commission through a specific approach, which took into consideration that euroisation happened due to \"exceptional circumstances\" present in the country when the euro was introduced. As a result of that, Montenegro still continues to use the euro currency as its legal tender.\n[…]\nInstead, he hopes that Montenegro will be allowed to keep the euro, and he promised \"the government of Montenegro will meet some important conditions to keep the euro, such as fiscal compliance\". Similarly, in 2025, President Jakov Milatović described adopting a different interim currency before formally entering the Eurozone as \"out of question\".\n[…]\nThe Maastricht Treaty provides that all members of the European Union will eventually join the euro area, once the convergence criteria have been met.\n[…]\nInternational status and usage of the euro\n[…]\nKosovo and the euro\n[…]\nAccession of Montenegro to the European Union"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Montenegro_e_o_euro",
        "situacao": "ok",
        "texto": "Montenegro não possui moeda própria. Antes da introdução do Euro no ano de 2002, o Marco alemão era a moeda utilizada em todas as transações e nas operações bancárias desde 1996; foi formalmente adotada como moeda do país em novembro de 1999. O marco foi substituído pelo euro em 2002, sem nenhuma objeção do Banco Central Europeu.\n[…]\nA Comissão Europeia e o BCE, tem expressado seu descontentamento com o uso unilateral do euro por Montenegro, em várias ocasiões Amélia Torres, porta-voz da Comissão Europeia, disse \"As condições para a adoção do euro são claras. Isto significa, em primeiro lugar e acima de tudo, para ser um membro da UE\". A declaração anexa no Acordo de Estabilização e Associação com a UE ler-se: \".. introdução unilateral do euro não é compatível com o Tratado\".\n[…]\nEm 17 de dezembro de 2010 foi concedido ao Montenegro o estatuto de candidato à adesão à União Europeia. A questão deverá ser resolvida através do processo de negociações. O BCE afirmou que as implicações da adoção do euro unilateral \"seriam definidas, o mais tardar, em caso de eventuais negociações de adesão à UE.\"Diplomatas têm sugerido que é improvável Montenegro será forçado a retirar a circulação do euro no seu país.\n[…]\nRadoje Žugić, Ministro das Finanças do Montenegro, afirmou que \"seria economicamente irracional  retornar à nossa própria moeda e em seguida, voltar novamente para o euro.\" Em vez disso, ele espera que  Montenegro tenha permissão para manter o euro e prometeu \"o governo de Montenegro adotará alguns elementos que devem preencher as condições para uma maior utilização da euro, tais como a adoção de regras fiscais\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Costa Rica",
      "descricao": "País da América Central entre Nicarágua e Panamá, cuja capital é San José."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Desde 1949, por determinação da constituição, a Costa Rica vive sem qual instituição que quase todos os países mantêm?",
    "resposta": "Exército",
    "fonte": [
      "https://en.wikipedia.org/wiki/Military_of_Costa_Rica",
      "https://pt.wikipedia.org/wiki/Costa_Rica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Military_of_Costa_Rica",
        "situacao": "ok",
        "texto": "The Public Force of Costa Rica (Spanish: Fuerza Pública de Costa Rica) is the national law enforcement agency of Costa Rica, whose duties include internal security and border control.\n[…]\nOn 1 December 1948, the President of Costa Rica, José Figueres Ferrer, abolished the Costa Rican military after his victory in the Costa Rican Civil War.\n[…]\nIn a ceremony at the national capital of San José, Figueres symbolically broke a wall with a mallet, symbolizing an end to the military's existence. In 1949, the abolition of the Costa Rican military was introduced in Article 12 of the Constitution of Costa Rica. The budget previously dedicated to the military is now dedicated to security, education and culture. Costa Rica maintains Police Guard forces.\n[…]\nThe museum Museo Nacional de Costa Rica was placed in the Cuartel Bellavista as a symbol of commitment to culture. In 1986, President Oscar Arias Sánchez declared December 1 as the Día de la Abolición del Ejército (Military abolition day) with Law #8115. Unlike its neighbors, Costa Rica has not endured a civil war since 1948. Costa Rica maintains small forces capable of law enforcement, but has no permanent standing army.\n[…]\nThe Costa Rica Coast Guard also operates directly under the Ministry but is not a part of the Public Force proper.\n[…]\nSpecial Intervention Unit (Costa Rica)\n[…]\nFuerza Pública de Costa Rica.\n[…]\nEl Espíritu del 48: Abolición del Ejército Archived 2013-08-01 at the Wayback Machine A brief history of the abolition of the military in Costa Rica."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Costa_Rica",
        "situacao": "ok",
        "texto": "Costa Rica (pronunciado em português europeu: [ˈkɔʃtɐ ˈʁikɐ]; pronunciado em português brasileiro: [ˈkɔstɐ ˈʁikɐ]; pronunciado em castelhano: [ˈkosta ˈrika] ()), oficialmente República da Costa Rica (em espanhol: República de Costa Rica), é um país da América Central, limitado a norte pela Nicarágua, a leste pelo mar do Caribe, a sudeste pelo Panamá e a oeste pelo Oceano Pacífico. O país possui en\n[…]\nApós a breve Guerra Civil Costarriquenha, o país aboliu permanentemente seu exército em 1949, tornando-se um dos poucos países soberanos sem forças armadas permanentes.\n[…]\nA Costa Rica é uma república organizada sob um sistema presidencialista unitário, de acordo com a sua constituição, promulgada em 1949. O Presidente da República, é eleito por voto popular direto, secreto e por sufrágio universal para um mandato de 4 anos. O presidente é responsável por nomear os governadores das províncias e o Conselho de Ministros. A atual presidência é ocupada por Laura Fernández Delgado, desde 8 de maio de 2026.\n[…]\nA Costa Rica não tem exército, pois foi abolido em 1.º de dezembro de 1948, abolição que foi perpetuada no artigo 12 da Constituição do país, promulgada em 1949. Esse mesmo artigo contempla a formação de um exército por acordo continental ou por defesa nacional, que sempre estará subordinado ao poder civil.\n[…]\nA taxa de alfabetização na Costa Rica é de aproximadamente 97% e o inglês é amplamente falado principalmente devido à indústria do turismo da Costa Rica. Quando o exército foi abolido em 1949, dizia-se que o \"exército seria substituído por um exército de professores\". A educação pública universal é garantida na constituição; a educação primária é obrigatória e a pré-escola e a escola secundária são gratuitas.\n[…]\nWikimedia Atlas of Costa Rica\n[…]\n«Imagens e informação da Costa Rica»\n[…]\n«Costa Rica Fotos e mais ...»\n[…]\n«Curso em Costa Rica  Curso ao Paraíso»\n[…]\nDicas para surf trip na Costa Rica"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Butão",
      "descricao": "Reino do Himalaia Oriental, sem litoral, entre a China e a Índia."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em vez de medir o sucesso só pela riqueza produzida, o Butão ficou conhecido por adotar qual índice de bem-estar?",
    "resposta": "Felicidade Interna Bruta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gross_National_Happiness",
      "https://pt.wikipedia.org/wiki/Felicidade_Interna_Bruta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gross_National_Happiness",
        "situacao": "ok",
        "texto": "Gross National Happiness, (GNH; Dzongkha: རྒྱལ་ཡོངས་དགའ་སྐྱིད་དཔལ་འཛོམས།) sometimes called Gross Domestic Happiness (GDH), is a philosophy that the government of Bhutan follows. It includes an index for measuring a population's collective happiness and well-being. The Gross National Happiness Index was instituted as the goal of the government of Bhutan in the Constitution of Bhutan, enacted on 18 \n[…]\nIn 2012, Bhutan's Prime Minister Jigme Y Thinley and the Secretary-General Ban Ki-moon of the United Nations convened the High-Level Meeting: Well-being and Happiness: Defining a New Economic Paradigm to encourage the spread of Bhutan's GNH philosophy. At the meeting, the first World Happiness Report was issued. Shortly afterward, 20 March was declared to be the International Day of Happiness by the UN in 2012 with resolution 66/28.\n[…]\nBhutan's Prime Minister Tshering Tobgay proclaimed a preference for focusing on more concrete goals instead of promoting GNH when he took office in 2013, but subsequently has protected the GNH of his country and promoted the concept internationally. Other Bhutanese officials also promote the spread of GNH at the UN and internationally.\n[…]\nAccording to Human Rights Watch, \"Over 100,000 or 1/6 of the population of Bhutan of Nepalese origin and Hindu faith were expelled from the country because they would not integrate with Bhutan's Buddhist culture.\" The Refugee Council of Australia stated that \"it is extraordinary and shocking that a nation can get away with expelling one sixth of its people and somehow keep its international reputation largely intact.\n[…]\nThe Government of Bhutan should be known not for Gross National Happiness but for Gross National Hypocrisy.\"\n[…]\nInternational Institute of Management – US based GHN research, GNH policy white paper\n[…]\nBhutan 2008 Paeans to the King\n[…]\nBhutan, Gross National Happiness and Sustainable Development – YouTube (12:31)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Felicidade_Interna_Bruta",
        "situacao": "ok",
        "texto": "A felicidade interna bruta (FIB) ou Gross National Happiness (GNH) é um conceito de desenvolvimento social criado em contrapartida ao produto interno bruto (PIB).\n[…]\nO termo foi criado pelo rei do Butão Jigme Singye Wangchuck, em 1972, em resposta a críticas que afirmavam que a economia do seu país crescia miseravelmente. Esta criação assinalou o seu compromisso de construir uma economia adaptada à cultura do país, baseada nos valores espirituais budistas. Assim como diversos outros valores morais, o conceito de Felicidade Interna Bruta é mais facilmente entendido a partir de comparações e exemplos do que definido especificamente.\n[…]\nIDH — Índice de Desenvolvimento Humano\n[…]\nHappy Planet Index — Índice do Planeta Feliz\n[…]\nFelicidade\n[…]\nBem-estar\n[…]\n«The International Conference on Gross National Happiness» (em inglês)\n[…]\n«The Gross International Happiness Project» (em inglês)\n[…]\n«Site sobre Felicidade Interna Bruta da Icatu Seguros»\n[…]\n«Site sobre o V Congresso Internacional sobre Felicidade Interna Bruta, ocorrido no Brasil em 2009»"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Quetzal guatemalteco",
      "descricao": "Moeda oficial da Guatemala."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A moeda da Guatemala tem o nome de qual ave de penas verdes, símbolo nacional do país?",
    "resposta": "Quetzal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Guatemalan_quetzal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guatemalan_quetzal",
        "situacao": "ok",
        "texto": "The quetzal (locally [keˈtsal]; code: GTQ) is the currency of Guatemala, named after the national bird of Guatemala, the resplendent quetzal. In ancient Mayan culture, the quetzal bird's tail feathers were used as currency. It is divided into 100 centavos, or len (plural lenes) in Guatemalan slang. The plural is quetzales.\n[…]\nThe quetzal was introduced in 1925 during the term of President José María Orellana, whose image appears on the obverse of the one-quetzal bill. It replaced the Guatemalan peso at the rate of 60 pesos = 1 quetzal. Until 1987, the quetzal was pegged to and domestically equal to the United States dollar. The currency was named after the country's famous bird, the Quetzal, which is also on the flag of Guatemala.\n[…]\n1 quetzal: a stylized dove, the word \"Paz (Peace)\", and the date “29 de Diciembre de 1996 (29 December 1996)”\n[…]\nThe first banknotes were issued by the Central Bank of Guatemala in denominations of 1, 2, 5, 10, 20 and 100 quetzales, with 1⁄2 quetzal notes added in 1933. In 1946, the Bank of Guatemala took over the issuance of paper money, with the first issues being overprints on notes of the Central Bank. Except for the introduction of 50 quetzal notes in 1967, the denominations of banknotes remained unchanged until 1⁄2 and 1 quetzal coins replaced notes at the end of the 1990s.\n[…]\nThe Bank of Guatemala has introduced a polymer banknote of 1 quetzal on August 20, 2007, followed by a 5 quetzal polymer banknote on November 14, 2011. Both the 1 and 5 quetzal notes are once again on a paper substrate as of 2024.\n[…]\nThe fifty-cent quetzal bill is out of circulation, but it still has value.\n[…]\nEconomy of Guatemala\n[…]\nBanco de Guatemala (in Spanish)\n[…]\nBanco de Guatemala currency in circulation Archived 2015-10-01 at the Wayback Machine\n[…]\nThe banknotes of Guatemala (in English, German, and French)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quetzal_%28moeda%29",
        "situacao": "ok",
        "texto": "O quetzal (plural em português: quetzais; código ISO 4217: GTQ) é a moeda nacional da Guatemala. Recebeu o nome da ave da Guatemala, o quetzal. Divide-se em 100 centavos. O plural é quetzales. Na antiga Civilização Maia, as penas da cauda do quetzal eram usadas como moeda. Ela se subdivide em 100 centavos, que na gíria local são chamados de lenes.\n[…]\nEsta moeda foi introduzida em 1925, durante o mandato do presidente José María Orellana, cuja imagem aparece no anverso da nota de 1 quetzal. Substituiu o antigo peso guatemalteco. Até 1987, o quetzal era indexado ao de valor interno igual ao dólar americano e antes de ser indexado ao dólar era indexado ao franco francês, assim como utilizava ao padrão ouro.\n[…]\n1 quetzal\n[…]\nAs primeiras cédulas foram emitidas pelo Banco Central da Guatemala nas denominações de 1, 2, 5, 10, 20 e 100 quetzales, com a inclusão da nota de ½ quetzal em 1933. Em 1946, o Banco da Guatemala assumiu a emissão de papel-moeda, remarcando as antigas cédulas emitidas pelo Banco Central da Guatemala.\n[…]\nO Banco da Guatemala introduziu a nota de 1 quetzal em polímero, impressa na Canadian Banknote Company em 20 de agosto de 2007.\n[…]\nA adoção das cédulas de 500 e 1 000 quetzales estão em estudo no congresso nacional. Sua aparência pode ser presumida no site :\n[…]\nA cédula de 500 quetzales terá como tema principal uma alegoria maia do mito de Popol Vuh e literatura guatemalteca, enquanto Miguel Ángel Asturias aparecerá na outra face. A cor predominante deverá ser cinza.\n[…]\nA cédula de 1 000 quetzales terá como tema no reverso a alegoria representando as raízes guatemaltecas. O anverso mostrará imagens de quatro povos pertencentes às \"raças guatemaltecas\" (Povo Ladino, Civilização Maia, Garifuna e povo Xinca). A cor predominante deverá ser Ocre.\n[…]\nConvert Guatemalan quetzal to British Pounds - Em Inglês\n[…]\nBanco de Guatemala - Em Espanhol",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Burkina Faso",
      "descricao": "País sem litoral da África Ocidental, antes chamado Alto Volta, com capital em Uagadugu."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 1984, o Alto Volta mudou de nome para Burkina Faso, expressão que significa terra de quê?",
    "resposta": "Dos homens íntegros",
    "distratores": [
      "Dos grandes rios",
      "Do sol nascente",
      "Dos antepassados"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Burkina_Faso"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Burkina_Faso",
        "situacao": "ok",
        "texto": "Burkina Faso is a landlocked country in West Africa. It is bordered by Mali to the northwest, Niger to the northeast, Benin to the southeast, Togo and Ghana to the south, and Ivory Coast to the southwest. It covers an area of 274,223 km2 (105,878 sq mi). In 2024, the country had an estimated population of approximately 23,286,000. Its citizens are known as Burkinabes, and its capital and largest c\n[…]\nFormerly the Republic of Upper Volta, the country was renamed \"Burkina Faso\" on 4 August 1984 by then-President Thomas Sankara. The words \"Burkina\" and \"Faso\" stem from different languages spoken in the country: \"Burkina\" comes from Mooré and means \"upright\", showing how the people are proud of their integrity. \"Faso\" comes from the Dyula language, as written in N'Ko: ߝߊ߬ߛߏ߫ faso, and means \"fatherland\", literally, \"father's house\".\n[…]\nThe Franco-British Convention of 14 June 1898 created the country's modern borders. In the French territory, a war of conquest against local communities and political powers continued for about five years. In 1904, the largely pacified territories of the Volta basin were integrated into the Upper Senegal and Niger colony of French West Africa as part of the reorganization of the French West African colonial empire. The colony had its capital in Bamako.\n[…]\nOn 2 August 1984, on Sankara's initiative, the country's name changed from \"Upper Volta\" to \"Burkina Faso\", or land of the honest men; (the literal translation is land of the upright men). The presidential decree was confirmed by the National Assembly on 4 August 1984.\n[…]\nBurkina Faso is an ethnically integrated, secular state where most people are concentrated in the south and centre, where their density sometimes exceeds 48 inhabitants per square kilometre (120/sq mi). Hundreds of thousands of Burkinabè migrate regularly to Ivory Coast and Ghana, mainly for seasonal agricultural work."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Burquina_Fasso",
        "situacao": "ok",
        "texto": "Burquina Fasso, Burquina Faso, Burkina Faso ou simplesmente Burquina, é um país africano limitado a oeste e a norte pelo Mali, a leste pelo Níger, e a sul pelo Benim, pelo Togo, por Gana e pela Costa do Marfim. Sua capital é a cidade de Uagadugu (em francês: Ouagadougou). Sua área territorial abrange 274 200 km2 com uma população estimada de mais de 15 757 000 de habitantes.\n[…]\nEntre 1960 e 1984 foi conhecido como República do Alto Volta. Em 4 de agosto de 1984 abandonou a denominação herdada do período colonial, passando a se chamar Burquina Fasso. A nova designação foi cunhada pelo então chefe de Estado, Thomas Sankara, que criou o novo nome a partir das palavras Burkina ('homens íntegros', em more) e Faso ('terra natal' em diúla), o que resulta em \"terra das pessoas íntegras\".\n[…]\nO país foi renomeado para \"Burquina Fasso\" em 4 de agosto de 1984, pelo então presidente Thomas Sankara. As palavras \"Burkina\" e \"Faso\" provêm de diferentes línguas faladas no país: \"Burkina\" vem do more e significa \"direito\" ou \"íntegro\", mostrando como o povo se orgulha de sua honradez, enquanto \"Faso\" vem da língua diúla e significa \"pátria\" (literalmente, \"casa do pai\"). A junção das palavras gera o termo \"terra dos homens íntegros\" ou \"pátria das pessoas honradas\".\n[…]\nO sufixo \"-bè\" adicionado a \"Burkina\" para formar o adjetivo pátrio \"burkinabè\" ou \"burquinabé\" vem da língua fula e significa tanto \"homem\" quanto \"mulher\" íntegra.\n[…]\nO Burquina Fasso está dividido em 13 regiões, 45 províncias e 351 departamentos.\n[…]\nEm 2016, a expectativa média de vida foi estimada em 60 anos para homens e 61 para mulheres. Em 2018, a taxa de mortalidade entre a população com menos de cinco anos e a taxa de mortalidade infantil foi de 76‰ de nascidos vivos. Em 2014, a idade média dos burquineses era de 17 anos e a taxa de crescimento populacional estimada era de 3,05%.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Honduras",
      "descricao": "País da América Central, com costa no Caribe e no Pacífico, cuja capital é Tegucigalpa."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em espanhol, a palavra que deu nome a Honduras, referência às águas da sua costa, significa o quê?",
    "resposta": "Profundezas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Honduras"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Honduras",
        "situacao": "ok",
        "texto": "Honduras, officially the Republic of Honduras, is a country in Central America. It is bordered to the west by Guatemala, to the southwest by El Salvador, to the southeast by Nicaragua, to the south by the Pacific Ocean at the Gulf of Fonseca, and to the north by the Gulf of Honduras, a large inlet of the Caribbean Sea. Its capital and largest city is Tegucigalpa.\n[…]\nThe country is one of the most economically unequal in Latin America. Honduran society is predominantly Mestizo; however, there are also significant Indigenous, Black, and White communities.\n[…]\nIt was not until the end of the 16th century that Honduras was used for the whole province. Prior to 1580, Honduras referred to only the eastern part of the province, and Higueras referred to the western part. Another early name is Guaymuras, revived as the name for the political dialogue in 2009 that took place in Honduras as opposed to Costa Rica.\n[…]\nIn June 2009 a coup d'état ousted President Zelaya; he was taken in a military aircraft to Costa Rica. The General Assembly of the United Nations voted to denounce the coup and called for the restoration of Zelaya. Several Latin American nations, including Mexico, temporarily severed diplomatic relations with Honduras. In July 2010, full diplomatic relations were once again re-established with Mexico. The United States sent out mixed messages after the coup; U.S.\n[…]\nThe Honduran Supreme Court agreed, saying that the constitution had put the Supreme Electoral Tribunal in charge of elections and referendums, not the National Statistics Institute, which Zelaya had proposed to have run the count. Whether or not Zelaya's removal from power had constitutional elements, the Honduran constitution explicitly protects all Hondurans from forced expulsion from Honduras.\n[…]\nWater crisis in Honduras\n[…]\nThe Honduran Institute of Tourism (IHT), Official tourism site"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Honduras",
        "situacao": "ok",
        "texto": "Honduras, oficialmente República das Honduras (português europeu) ou República de Honduras (português brasileiro) (em espanhol: República de Honduras), é um país da América Central, limitado a norte pelo Golfo das Honduras, e a leste pelo Mar do Caribe (por onde possui fronteira marítima com o território colombiano de San Andrés e Providencia), a sul pela Nicarágua, pelo Golfo de Fonseca e por El \n[…]\nO território de Honduras é muito acidentado, formando-se por montanhas, planaltos, vales profundos e planícies extensas e férteis, atravessadas ​​por rios navegáveis. Tudo isso contribui para a sua rica biodiversidade. Estima-se que existam cerca de 8 000 espécies de plantas, 276 répteis, 153 anfíbios, 771 aves e 220 espécies de mamíferos, distribuídos em diferentes regiões ecológicas em Honduras.\n[…]\nA palavra Honduras vem do espanhol e significa \"profundezas\" (no singular, hondura), em referência às águas profundas no litoral sul do país.\n[…]\nCerca de 83,6% da população é alfabetizada. Em 2014, a taxa líquida de escolarização primária era de 94% e a taxa de conclusão da escola primária era de 90,7%. Honduras tem escolas bilíngues (espanhol e inglês) e até trilíngues (espanhol com inglês, árabe ou alemão) e várias universidades. O ano letivo se inicia em fevereiro e termina em novembro, o que compreende um total de quarenta semanas de aulas e um mínimo de cerca de duzentos dias letivos, no nível da rede pública de ensino.\n[…]\nO ensino superior é administrado pela Universidade Nacional Autônoma de Honduras, que tem centros nas cidades hondurenhas mais importantes.\n[…]\nA culinária hondurenha é uma fusão da culinária indígena Lenca, espanhola, caribenha e africana. Também há pratos do povo Garifuna. Coco e leite de coco são destaques em pratos doces e salgados. As especialidades regionais incluem peixe frito, tamales e carne assada.\n[…]\nMissões diplomáticas de Honduras",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Camarões",
      "descricao": "País da África Central, no golfo da Guiné, cuja capital é Iaundé."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do país africano Camarões vem dos crustáceos que navegadores de qual país europeu encontraram num rio local, no século quinze?",
    "resposta": "Portugal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cameroon",
      "https://pt.wikipedia.org/wiki/Camar%C3%B5es"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cameroon",
        "situacao": "ok",
        "texto": "Cameroon, officially the Republic of Cameroon, is a country in Central Africa. It shares boundaries with Nigeria to the west and north, Chad to the northeast, the Central African Republic to the east, and Equatorial Guinea, Gabon, and the Republic of the Congo to the south. Its coastline lies on the Bight of Biafra, part of the Gulf of Guinea, and the Atlantic Ocean.\n[…]\nEarly inhabitants of the territory included the Sao civilisation around Lake Chad and the Baka hunter-gatherers in the southeastern rainforest. Portuguese explorers reached the coast in the 15th century. Fulani soldiers founded the Adamawa Emirate in the north in the 19th century, and various ethnic groups of the west and northwest established powerful chiefdoms and fondoms.\n[…]\nOriginally, Cameroon was the exonym given by the Portuguese to the Wouri River, which they called Rio dos Camarões meaning 'river of shrimps' or 'shrimp river', referring to the then abundant Cameroon ghost shrimp. The country's name in Portuguese remains Camarões.\n[…]\nPortuguese sailors reached the coast in 1472. They noted an abundance of the ghost shrimp Lepidophthalmus turneranus in the Wouri River and named it Rio dos Camarões (Shrimp River), which became Cameroon in English. Over the following few centuries, European interests regularised trade with the coastal peoples, and Christian missionaries pushed inland.\n[…]\nThree trans-African automobile routes pass through Cameroon:\n[…]\nCameroonian literature has concentrated on both European and African themes. Colonial-era writers such as Louis-Marie Pouka and Sankie Maimo were educated by European missionary societies and advocated assimilation into European culture to bring Cameroon into the modern world. After World War II, writers such as Mongo Beti and Ferdinand Oyono analysed and criticised colonialism and rejected assimilation.\n[…]\nNational Assembly of Cameroon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Camar%C3%B5es",
        "situacao": "ok",
        "texto": "Camarões, oficialmente República dos Camarões (em francês:  République du Cameroun; em inglês:  Republic of Cameroon), é um país da região ocidental da África Central. Faz fronteira com a Nigéria a oeste; Chade a nordeste;[carece de fontes]? República Centro-Africana a leste; e Guiné Equatorial, Gabão e República do Congo, ao sul. O litoral dos Camarões encontra-se no Golfo do Biafra, parte do Gol\n[…]\nOs antigos habitantes do território incluem a civilização Sao em torno do Lago Chade e os caçadores-coletores Baka nas florestas tropicais do sudeste. Exploradores portugueses chegaram ao litoral no século XV e nomearam a área de Rio dos Camarões, que se tornou Cameroon em Inglês. Os soldados fulas fundaram o Emirado Adamawa, no norte, durante o século XIX, e vários grupos étnicos do oeste e noroeste estabeleceram tribos poderosas e fondoms.\n[…]\nExistem provas de que os primeiros povos que habitavam os Camarões foram os pigmeus, seguidos por vários povos que habitavam a África central. Entre esses povos citam-se em destaque os bantos e os fulas. O navegador português Fernão do Pó (ou Fernando Pó) chegou ao estuário do rio Wouri em 1472 e chamou-o \"rio dos Camarões\", devido à abundância de crustáceos da espécie Lepidophthalmus turneranus na região.\n[…]\nNaquela região, desde o século XVI, os portugueses  estabeleceram entrepostos de onde os escravos foram vendidos para o Novo Mundo. Os britânicos foram o primeiro povo a colonizar o sertão. Porém, em 1884, a região tornou-se  protetorado da Alemanha, passando a ser chamada  Kamerun.\n[…]\nOs estilos de música popular incluem o ambasse bey na costa litorânea, assiko, no sul do país, mangambeu, do grupo étnico Bamileke e o tsamassi. A música nigeriana influenciou artistas anglófonos camaroneses, e o hit \"Sweet Mother\", de Prince Nico Mbarga, é o disco africano mais vendido na história.\n[…]\nPolítica dos Camarões\n[…]\nInvestigações antropológicas nos Camarões"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Camarões",
      "descricao": "País da África Central, no golfo da Guiné, cuja capital é Iaundé."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Assim como o Canadá, o país africano Camarões tem duas línguas oficiais herdadas de colonizadores europeus. Quais são elas?",
    "resposta": "Francês e inglês",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cameroon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cameroon",
        "situacao": "ok",
        "texto": "Cameroon, officially the Republic of Cameroon, is a country in Central Africa. It shares boundaries with Nigeria to the west and north, Chad to the northeast, the Central African Republic to the east, and Equatorial Guinea, Gabon, and the Republic of the Congo to the south. Its coastline lies on the Bight of Biafra, part of the Gulf of Guinea, and the Atlantic Ocean.\n[…]\nWith the defeat of Germany in World War I, Kamerun became a League of Nations mandate territory and was split into French Cameroon (French: Cameroun) and British Cameroon in 1919. France integrated the economy of Cameroon with that of France and improved the infrastructure with capital investments and skilled workers, modifying the colonial system of forced labour.\n[…]\nIts foreign policy closely follows that of its main ally, France (one of its former colonial rulers). Cameroon relies heavily on France for its defence, although military spending is high in comparison to other sectors of government.\n[…]\nCameroon's per capita GDP (Purchasing power parity) was estimated at US$5.760 in 2025. Major export markets include the Netherlands, France, China, Belgium, Italy, Algeria, and Malaysia.\n[…]\nPopular music styles include ambasse bey of the coast, assiko of the Bassa, mangambeu of the Bangangte, and tsamassi of the Bamileke. Nigerian music has influenced Anglophone Cameroonian performers, and Prince Nico Mbarga's highlife hit \"Sweet Mother\" is the top-selling African record in history.\n[…]\nCameroonian literature has concentrated on both European and African themes. Colonial-era writers such as Louis-Marie Pouka and Sankie Maimo were educated by European missionary societies and advocated assimilation into European culture to bring Cameroon into the modern world. After World War II, writers such as Mongo Beti and Ferdinand Oyono analysed and criticised colonialism and rejected assimilation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Camar%C3%B5es",
        "situacao": "ok",
        "texto": "Camarões, oficialmente República dos Camarões (em francês:  République du Cameroun; em inglês:  Republic of Cameroon), é um país da região ocidental da África Central. Faz fronteira com a Nigéria a oeste; Chade a nordeste;[carece de fontes]? República Centro-Africana a leste; e Guiné Equatorial, Gabão e República do Congo, ao sul. O litoral dos Camarões encontra-se no Golfo do Biafra, parte do Gol\n[…]\nO país é muitas vezes referido como \"África em miniatura\", pela sua diversidade geológica e cultural. Recursos naturais incluem praias, desertos, montanhas, florestas tropicais e savanas. O ponto mais alto é o Monte Camarões no sudoeste, e as cidades mais populosas são Douala, a capital Iaundé (em francês, Yaoundé) e Garoua. Os Camarões são o lar de mais de 200 grupos linguísticos diferentes.\n[…]\nO país é conhecido por seus estilos musicais nativos, especialmente makossa e bikutsi, e pela sua bem-sucedida seleção nacional de futebol. Francês e inglês são as línguas oficiais.\n[…]\nTanto inglês quanto francês são línguas oficiais, apesar de o francês ser muito mais compreendido (mais de 80%). O alemão, a língua dos colonizadores originais, há muito tempo foi substituída pelo francês e inglês.\n[…]\n(No Entanto O Alemão Cresceu Como Língua Estrangeira Na Última Década Tendo Cerca De 230.000 Camaroneses Falando Alemão como Língua Estrangeira Hoje, Sendo A Língua Estrangeira Mais Falada E Aprendida Nos Camarões Hoje) O pidgin inglês dos Camarões é a franca nos territórios antigamente administrados pela Inglaterra. Uma mistura de inglês, francês chamada FrancAnglais foi ganhando popularidade nos centros urbanos desde o meio da década de 1970.\n[…]\nO governo encoraja o bilinguismo de inglês e francês e os documentos oficiais do governo são escritos nas duas línguas. Como parte da iniciativa de encorajar o bilinguismo nos Camarões, seis das oito universidades do país são inteiramente bilíngues.\n[…]\nÁfrica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Paquistão",
      "descricao": "País do sul da Ásia criado em 1947 na partição da Índia britânica, com capital em Islamabad."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em urdu e em persa, o nome Paquistão significa terra de quê?",
    "resposta": "Dos puros",
    "fonte": [
      "https://en.wikipedia.org/wiki/Names_of_Pakistan",
      "https://en.wikipedia.org/wiki/Pakistan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Names_of_Pakistan",
        "situacao": "ok",
        "texto": "Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the fifth-most populous country, with a population of over 241.5 million, having the second-largest Muslim population in the world as of 2023. Islamabad is the nation's capital, while Karachi is its largest city and financial centre. Pakistan is the 33rd-largest country by area.\n[…]\nThe national poet of Pakistan, Muhammad Iqbal, wrote influential poetry in Urdu and Persian, advocating for Islamic civilisational revival. Notable figures in contemporary Urdu literature include Josh Malihabadi, Faiz Ahmed Faiz, and Saadat Hasan Manto. Popular Sufi poets like Shah Abdul Latif and Bulleh Shah are revered. Mirza Kalich Beg is hailed as the father of modern Sindhi prose.\n[…]\nThe Lollywood, Punjabi, and Pashto film industry is centered in Karachi, Lahore, and Peshawar. Although Bollywood films were banned from public cinemas from 1965 to 2008, they remained influential in Pakistani popular culture. However, in 2019, the screening of Bollywood movies faced an indefinite ban. Despite challenges faced by the Pakistani film industry, Urdu televised dramas and theatrical performances remain popular, frequently broadcast by many entertainment media outlets.\n[…]\nUrdu dramas dominate the television entertainment industry, renowned for their quality since the 1990s. Pakistani music encompasses diverse forms, from provincial folk music and traditional styles like Qawwali and Ghazal Gayaki to modern fusions of traditional and western music. Pakistan boasts numerous renowned folk singers, and the arrival of Afghan refugees in western provinces has sparked interest in Pashto music, despite occasional intolerance.\n[…]\nPakistan from BBC News\n[…]\nWikimedia Atlas of Pakistan\n[…]\nKey Development Forecasts for Pakistan from International Futures\n[…]\nGeographic data related to Pakistan at OpenStreetMap"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pakistan",
        "situacao": "ok",
        "texto": "Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the fifth-most populous country, with a population of over 241.5 million, having the second-largest Muslim population in the world as of 2023. Islamabad is the nation's capital, while Karachi is its largest city and financial centre. Pakistan is the 33rd-largest country by area.\n[…]\nThe national poet of Pakistan, Muhammad Iqbal, wrote influential poetry in Urdu and Persian, advocating for Islamic civilisational revival. Notable figures in contemporary Urdu literature include Josh Malihabadi, Faiz Ahmed Faiz, and Saadat Hasan Manto. Popular Sufi poets like Shah Abdul Latif and Bulleh Shah are revered. Mirza Kalich Beg is hailed as the father of modern Sindhi prose.\n[…]\nThe Lollywood, Punjabi, and Pashto film industry is centered in Karachi, Lahore, and Peshawar. Although Bollywood films were banned from public cinemas from 1965 to 2008, they remained influential in Pakistani popular culture. However, in 2019, the screening of Bollywood movies faced an indefinite ban. Despite challenges faced by the Pakistani film industry, Urdu televised dramas and theatrical performances remain popular, frequently broadcast by many entertainment media outlets.\n[…]\nUrdu dramas dominate the television entertainment industry, renowned for their quality since the 1990s. Pakistani music encompasses diverse forms, from provincial folk music and traditional styles like Qawwali and Ghazal Gayaki to modern fusions of traditional and western music. Pakistan boasts numerous renowned folk singers, and the arrival of Afghan refugees in western provinces has sparked interest in Pashto music, despite occasional intolerance.\n[…]\nPakistan from BBC News\n[…]\nWikimedia Atlas of Pakistan\n[…]\nKey Development Forecasts for Pakistan from International Futures\n[…]\nGeographic data related to Pakistan at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paquist%C3%A3o",
        "situacao": "ok",
        "texto": "Paquistão (em urdu: پاکستان|پاكستان; romaniz.: Pākistān; pronunciado: [pɑːkɪst̪ɑːn]), oficialmente República Islâmica do Paquistão (em urdu: اسلامی جمہوریۂ پاكستان; romaniz.: Islāmī Jumhūriyah-yi Pākistān; pronunciado: [ɪslɑːmiː d͡ʒʊmɦuːriəɪh pɑːkɪst̪ɑːn]), é um país soberano do Sul da Ásia. Com uma população superior a 200 milhões de pessoas, é o quinto país mais populoso do mundo e, com uma área\n[…]\nSegundo J.P. Machado, o topônimo \"Paquistão\" foi criado em 1933 por Chaudhary Rahmat Ali para designar as regiões muçulmanas a noroeste da Índia, a partir das iniciais de Pandjab (Panjabe), Afghan (para os povos afegãos da área) e Kashmir (Caxemira), com o sufixo-stan (que representa o Baluchistão e significa \"terra\" em persa), formando PAKSTAN. Os paquistaneses relacionam o topônimo com o vocábulo pak (\"puro\", em persa e urdu), que daria ao nome do país o sentido de \"Terra dos Puros\".\n[…]\nCaxemira Livre (ou Azad Kashmir: \"azad\" significa \"livre\" em urdu)\n[…]\nA música paquistanesa vai de melodias folclóricas provinciais e estilos tradicionais até formas modernas que fundem música ocidental e tradicional. A chegada de refugiados afegãos nas províncias ocidentais reavivou a música pastó e persa e transformou Pexauar num foco para músicos afegãos e num centro de distribuição da música do Afeganistão.\n[…]\nA atual literatura paquistanesa é composta em urdu, sindi, panjabi, pastó, balúchi e inglês. No passado, também era expressa em persa. Antes do século XIX, constituía-se de poesia lírica e material religioso, místico e popular. Atualmente, o gênero de contos é particularmente popular. O poeta nacional paquistanês, Muhammad Iqbal, escreveu principalmente em persa, além de urdu, tratando de temas da filosofia islâmica.\n[…]\nMissões diplomáticas do Paquistão\n[…]\nPakistan no The World Factbook\n[…]\nHuman Rights Commission of Pakistan",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Zimbábue",
      "descricao": "País sem litoral do sul da África, antiga Rodésia do Sul, cuja capital é Harare."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Zimbábue, tirado de ruínas medievais do país, significa na língua xona casas de quê?",
    "resposta": "Pedra",
    "distratores": [
      "Barro",
      "Ouro",
      "Madeira"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Zimbabwe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zimbabwe",
        "situacao": "ok",
        "texto": "Zimbabwe, officially the Republic of Zimbabwe, is a landlocked country in Southeast Africa, between the Zambezi and Limpopo River, bordered by South Africa to the south, Botswana to the southwest, Zambia to the north, and Mozambique to the east. The capital and largest city is Harare, and the second largest is Bulawayo.\n[…]\nThe name \"Zimbabwe\" stems from a Shona term for Great Zimbabwe, a medieval city (Masvingo) in the country's south-east. Two different theories address the origin of the word. Many sources hold that \"Zimbabwe\" derives from dzimba-dza-mabwe, translated from the Karanga dialect of Shona as \"houses of stones\" (dzimba = plural of imba, \"house\"; mabwe = plural of ibwe, \"stone\"). The Karanga-speaking Shona people live around Great Zimbabwe in the modern-day Masvingo province.\n[…]\nZimbabwe is unusual in Africa in that there are a number of ancient and medieval ruined cities built in a unique dry stone style. Among the most famous of these are the Great Zimbabwe ruins in Masvingo. Other ruins include Khami, Dhlo-Dhlo and Naletale. The Matobo Hills are an area of granite kopjes and wooded valleys commencing some 35 km (22 mi) south of Bulawayo in southern Zimbabwe.\n[…]\nRugby union is a significant sport in Zimbabwe. The national side have represented the country at two Rugby World Cup tournaments in 1987 and 1991 and have qualified for 2027.\n[…]\nOutline of Zimbabwe\n[…]\nOfficial Government of Zimbabwe web portal. Archived 23 December 2017 at the Wayback Machine.\n[…]\nParliament of Zimbabwe Archived 30 October 2022 at the Wayback Machine\n[…]\nZimbabwe profile from the BBC News\n[…]\nWikimedia Atlas of Zimbabwe\n[…]\nZimbabwe. The World Factbook. Central Intelligence Agency.\n[…]\nZimbabwe from UCB Libraries GovPubs\n[…]\nKey Development Forecasts for Zimbabwe from International Futures\n[…]\nWorld Bank Summary Trade Statistics Zimbabwe"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zimbabwe",
        "situacao": "ok",
        "texto": "O Zimbábue, Zimbabué ou Zimbabwe (em xona:  Zimbabwe), oficialmente República do Zimbábue, é um país encravado no sul da África, entre os rios Zambeze e Limpopo. É limitado a norte pela Zâmbia, a norte e a leste por Moçambique, a sul pela África do Sul e a sul e oeste pelo Botsuana. A capital do país é a cidade de Harare. Com uma população de cerca de 15 milhões de habitantes, o Zimbábue tem 16 id\n[…]\nO nome \"Zimbábue\" deriva de um termo da língua xona primeiramente empregado para denominar o Grande Zimbábue, um complexo de amuralhados de pedra situados na região leste do país. Duas teorias diferentes abordam a origem da palavra. A mais comumente aceita sustenta que \"Zimbábue\" deriva de dzimba-dza-mabwe, traduzido do dialeto caranga do xona como \"casas de pedras\" (dzimba = plural de imba, \"casa\"; mabwe = plural de ibwe, \"pedra\").\n[…]\nOs registos arqueológicos datam de 500.000 anos os fragmentos da Idade da Pedra encontrados no atual Zimbábue. Os primeiros habitantes conhecidos do Zimbábue foram provavelmente o povo coissã, que deixou um legado de pontas de flechas e pinturas rupestres. Aproximadamente 2.000 anos atrás os primeiros agricultores de língua banta chegaram durante a expansão banta.\n[…]\nEste foi o precursor das civilizações xonas mais impressionantes que dominariam a região durante os séculos XIII a XV. O Mapungubue foi substituído pelo Reino do Zimbábue, que existiu de aproximadamente 1200 até 1450. Este reino ainda mais refinado e expandido, desenvolveu uma impressionante arquitetura de pedra evidenciada pelas ruínas no Grande Zimbábue, sua capital, localizada perto de Masvingo, além de inúmeras outras localidades menores.\n[…]\nEssas ruínas fazem parte de um dos principais sítios arqueológicos da parte sul da África e possui uma arquitetura de pedra seca única.\n[…]\nO Zimbábue está dividido em oito províncias e duas cidades com estatuto de província:\n[…]\nMissões diplomáticas do Zimbabwe",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Singapura",
      "descricao": "Cidade-Estado insular do Sudeste Asiático, na ponta sul da Península Malaia."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em sânscrito, o nome Singapura significa cidade de qual animal?",
    "resposta": "Leão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Names_of_Singapore",
      "https://en.wikipedia.org/wiki/Singapore"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Names_of_Singapore",
        "situacao": "ok",
        "texto": "The names of Singapore include the various historical appellations as well as contemporary names and nicknames in different languages used to describe the island, city or country of Singapore. A number of different names have been given to the settlement or the island of Singapore throughout its history.\n[…]\nThe name Singapura and its many variants were used from the 1500s onwards in Europeans sources. Early 16th century European maps such as Cantino planisphere, showing the knowledge of Malay Peninsula before the actual arrival of the Portuguese in the region, give names such as bargimgaparaa or ba(r)xingapara and ba(r)cingapura, where the Persian or Arabic bar is added before the name. The use of the term Singapore however was inexact, and can refer to a number of geographical areas or entities.\n[…]\nThe Strait of Singapore in the early period may refer to the southern portion of the Strait of Malacca or other stretches of water, and maps of the 16th century may use Cingaporla, Cincapula, Cingatola, Cinghapola and many other variations to refer to island as well as the various straits or the southern portion of the Malay peninsula.\n[…]\nVietnamese either uses the word Singapore, Xin-ga-po, or Xinh-ga-po for the country (and Cộng hòa Singapore or Cộng hòa Xin-ga-po for \"Republic of Singapore\") but has used versions taken from the chữ Hán 新加坡, namely Tân Gia Ba. Vietnamese has also used other Sino-Vietnamese names other for historical names including Chiêu Nam for Shōnan (昭南) and Hạ Châu (賀州). There is also the transcription, 撑歌哺 Xinh Ca Bô, which was especially used in the newspaper Thanh Nghệ Tĩnh tân văn 清乂静新聞.\n[…]\nLikewise, Korea formerly used a Hanja-derived name for Singapore, Singapa (신가파; 新嘉坡), but now uses Singgaporeu (싱가포르)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Singapore",
        "situacao": "ok",
        "texto": "Singapore, officially the Republic of Singapore, is an island country in Southeast Asia. Its territory comprises a main island, over 60 satellite islands and islets, and one outlying islet.\n[…]\nLee's government capitalised on Singapore's favourable geographical position to develop the Port of Singapore into one of the world's busiest ports, while the service and tourism industries also expanded significantly during this period.\n[…]\nMany significant works have been translated and showcased in publications such as the literary journal Singa, published in the 1980s and 1990s with editors including Edwin Thumboo and Koh Buck Song, as well as in multilingual anthologies such as Rhythms: A Singaporean Millennial Anthology Of Poetry (2000), in which the poems were all translated three times each. A number of Singaporean writers such as Tan Swie Hian and Kuo Pao Kun have contributed work in more than one language.\n[…]\nSingapore has a diverse music culture that ranges from pop and rock, to folk and classical. Western classical music plays a significant role in the cultural life in Singapore, with the Singapore Symphony Orchestra (SSO) instituted in 1979. Other notable western orchestras in Singapore include Singapore National Youth Orchestra and the community-based Braddell Heights Symphony Orchestra. Many orchestras and ensembles are also found in secondary schools and junior colleges.\n[…]\nReligious dietary strictures exist (Muslims do not eat pork and Hindus do not eat beef), and there is also a significant group of vegetarians. The Singapore Food Festival which celebrates Singapore's cuisine is held annually in July.\n[…]\nSingapore Department of Statistics\n[…]\nSingapore profile from the BBC News"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "El Salvador",
      "descricao": "País da América Central, na costa do Pacífico, cuja capital é San Salvador."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que El Salvador e o Equador passaram a ter em comum na economia no início dos anos dois mil?",
    "resposta": "O dólar americano como moeda",
    "fonte": [
      "https://en.wikipedia.org/wiki/El_Salvador",
      "https://en.wikipedia.org/wiki/Dollarization"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/El_Salvador",
        "situacao": "ok",
        "texto": "El Salvador, officially the Republic of El Salvador, is a sovereign nation in Central America. Situated along the Pacific coast, it is bounded by Guatemala to the northwest and Honduras to the northeast. The country's political, economic, and cultural center is its capital and largest municipality, San Salvador. As of 2024, El Salvador's population was estimated at approximately 6 million inhabita\n[…]\nSocioeconomic indicators from the late 2010s reflected that El Salvador maintained one of the lowest levels of income inequality in Central America. Concurrently, international studies assessing economic complexity ranked the country among the less complex market systems globally for commercial enterprise.\n[…]\nAn active participant in the Summit of the Americas process, El Salvador chairs a working group on market access under the Free Trade Area of the Americas initiative.\n[…]\nAs of 2004, there were approximately 3.2 million Salvadorans living outside El Salvador, with the United States traditionally being the destination of choice for Salvadoran economic migrants. By 2012, there were about 2.0 million Salvadoran immigrants and Americans of Salvadoran descent in the U.S., making them the sixth largest immigrant group in the country. The second destination of Salvadorans living outside is Guatemala, with more than 111,000 persons, mainly in Guatemala City.\n[…]\nFootball is the most popular sport in El Salvador. The El Salvador national football team qualified for the FIFA World Cup in 1970 and 1982. Their qualification for the 1970 tournament was marred by the Football War, a war against Honduras, whose team El Salvador's had defeated. The national football team play at the Estadio Cuscatlán in San Salvador. It opened in 1976 and seats 53,400, making it the largest stadium in Central America and the Caribbean.\n[…]\nSalvadoran American Humanitarian Foundation (SAHF)\n[…]\nTeaching Central America"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dollarization",
        "situacao": "ok",
        "texto": "Currency substitution, also known as dollarization, is the use of a foreign currency in parallel to or instead of a domestic currency.\n[…]\ncurrency boards) or relinquish control over their own currency (such as currency unions) while \"soft pegs\" are more flexible and floating exchange rate regimes. The collapse of \"soft\" pegs in Southeast Asia and Latin America in the late 1990s led to currency substitution becoming a serious policy issue.\n[…]\nEcuador and El Salvador became fully dollarized economies in 2000 and 2001 respectively, for different reasons. Ecuador underwent currency substitution to deal with a widespread political and financial crisis resulting from massive loss of confidence in its political and monetary institutions. By contrast, El Salvador's official currency substitution was a result of internal debates and in a context of stable macroeconomic fundamentals and long-standing unofficial currency substitution.\n[…]\nFull currency substitution has mostly occurred in Latin America, the Caribbean and the Pacific, as many countries in those regions see the United States Dollar as a stable currency compared to the national one. For example, Panama underwent full currency substitution by adopting the US dollar as legal tender in 1904. This type of currency substitution is also known as de jure currency substitution.\n[…]\nEl Salvador (uses alongside bitcoin) (see Bitcoin Law and Bitcoin in El Salvador)\n[…]\nSavastano, Miguel (1996). \"Dollarization in Latin America: Recent Evidence and Some Policy Issues\". IMF Working Paper. WP/96/4. SSRN 882905."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/El_Salvador",
        "situacao": "ok",
        "texto": "El Salvador ou Salvador (pronunciado em português europeu: [ɛɫ saɫvɐˈdoɾ]; pronunciado em português brasileiro: [ɛw sawvaˈdoʁ]; pronunciado em castelhano: [el salβaˈðoɾ]), oficialmente República de El Salvador ou República do Salvador (em castelhano: República de El Salvador), é um país da América Central. Limita-se com o Oceano Pacífico, a sul, a Guatemala a oeste e Honduras a norte e leste. Sua \n[…]\nO colón, a moeda oficial de El Salvador desde 1892, foi substituída pelo dólar dos EUA em 2001.\n[…]\nEm 1823, quando o império mexicano se dissolveu, El Salvador tornou-se um dos estados membros da Federação das Províncias Unidas da América Central (juntamente com Guatemala, Honduras, Nicarágua e Costa Rica) e, com a ruptura da entidade, em 1838, tornou-se uma república independente.\n[…]\nA história de El Salvador no século XX foi regida por uma série de presidentes militares. Entre 1931 e 1944, o país esteve sob a ditadura de Maximiliano Hernández Martínez. Sucederam-se vários outros governos militares, em meio a uma crise econômica que provocou a emigração de milhares de salvadorenhos e, em 1969, uma breve guerra com a vizinha Honduras, apaziguada pela intervenção da Organização dos Estados Americanos com a criação de uma zona desmilitarizada (1971).\n[…]\nNo dia 8 de junho de 2021, El Salvador tornou-se no primeiro país a declarar Bitcoin como moeda de troca legal. A chamada \"Lei Bitcoin\" foi aprovada, no Parlamento, com 62 votos de um total de 84 deputados. Esta legislação estabeleceu que todos os agentes económicos podiam e deviam passar a receber Bitcoin como forma de pagamento, quando oferecido pela pessoa que adquire um bem ou serviço.\n[…]\nA seleção nacional de futebol joga no Estádio Cuscatlán, em San Salvador. Foi inaugurado em 1976 e tem 53 400 lugares, tornando-o o maior estádio da América Central e do Caribe.\n[…]\nRepública Federal da América Central\n[…]\nRepública Maior da América Central",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Guiné Equatorial",
      "descricao": "País da África Central, ex-colônia espanhola, formado por uma porção continental e ilhas no golfo da Guiné."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Colonizada pela Espanha, a Guiné Equatorial também adotou como oficial uma língua que ela compartilha com o Brasil. Qual?",
    "resposta": "Português",
    "fonte": [
      "https://en.wikipedia.org/wiki/Equatorial_Guinea",
      "https://pt.wikipedia.org/wiki/Guin%C3%A9_Equatorial"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Equatorial_Guinea",
        "situacao": "ok",
        "texto": "Equatorial Guinea, officially the Republic of Equatorial Guinea, is a country on the west coast of Central Africa and the only Spanish-speaking country in Africa. It has an area of 28,000 square kilometres (11,000 sq mi). Formerly the colony of Spanish Guinea, its post-independence name refers to its location both near the Equator and in the African region of Guinea.\n[…]\nThe Portuguese-speaking island nation of São Tomé and Príncipe is located between Bioko and Annobón. The Equator runs through Equatorial Guinea's territorial waters, about 1.4° north of Annobón.\n[…]\nSome of the motivations for Equatorial Guinea's pursuit of membership in the Community of Portuguese Language Countries (CPLP) included access to several professional and academic exchange programmes and facilitated cross-border circulation of citizens. The adoption of Portuguese as an official language was the primary requirement to apply for CPLP acceptance. In addition, the country was told it must adopt political reforms allowing effective democracy and respect for human rights.\n[…]\nIn February 2012, Equatorial Guinea's foreign minister signed an agreement with the IILP on the promotion of Portuguese in the country. In July 2012, the CPLP refused Equatorial Guinea full membership, primarily because of its continued serious violations of human rights. The government responded by legalising political parties, declaring a moratorium on the death penalty, and starting a dialogue with all political factions.\n[…]\nAdditionally, the IILP secured land from the government for the construction of Portuguese language cultural centres in Bata and Malabo. At its tenth summit in Dili in July 2014, Equatorial Guinea was admitted as a CPLP member. Abolition of the death penalty and the promotion of Portuguese as an official language were preconditions of the approval.\n[…]\nWikimedia Atlas of Equatorial Guinea"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guin%C3%A9_Equatorial",
        "situacao": "ok",
        "texto": "A Guiné Equatorial, oficialmente República da Guiné Equatorial, é um país da África Central dividido em vários territórios descontínuos no golfo da Guiné: um continental, Mbini (antiga colónia espanhola de Rio Muni), e outros insulares. As ilhas são Bioco (antiga Fernando Pó), no norte do Golfo do Biafra, Ano-Bom, a sul de São Tomé e Príncipe, e Corisco, Elobey Grande e Elobey Pequeno (e ilhotas a\n[…]\nEm troca, Portugal recebia garantias de paz em diversas zonas de influência da América do Sul, como a retirada espanhola da Ilha de Santa Catarina e a demarcação de fronteiras no Brasil, mas renunciava à Colônia do Sacramento e aos direitos sobre as Ilhas Marianas e Filipinas. Em 1909, as colónias espanholas de Elobey, Ano Bom, Corisco, Fernando Pó e Guinea Continental Española foram unidas sob uma administração única, formando os Territorios Españoles del Golfo de Guinea ou Guinea Española.\n[…]\nA Guiné Equatorial é o único país da África de língua oficial castelhana. Os idiomas mais falados na Guiné Equatorial, o fang e o inglês pidgin, não são línguas oficiais. Apesar de a Guiné Equatorial ter decretado a língua francesa e, mais recentemente, a língua portuguesa como línguas oficiais, elas não são faladas no território.\n[…]\nO presidente da Guiné Equatorial, Teodoro Obiang Nguema Mbasogo, decretou que o português seria uma das línguas oficiais, ao lado do espanhol e do francês.\n[…]\nO país deseja ainda o apoio dos oito países membros da Comunidade dos Países de Língua Portuguesa (CPLP) (Angola, Brasil, Cabo Verde, Guiné-Bissau, Moçambique, Portugal, São Tomé e Príncipe e Timor-Leste) para difundir o ensino da língua portuguesa no país, para formação profissional e acolhimento dos seus estudantes pelos países da comunidade lusófona. Essa proposta ainda não foi, no entanto, validada pelo parlamento, como se pode ver no sítio oficial do governo.\n[…]\nMissões diplomáticas de Guiné Equatorial"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Turquia",
      "descricao": "País entre a Ásia Ocidental e a Europa, de capital Ancara."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que a Turquia e a Rússia têm em comum quanto à localização do seu território?",
    "resposta": "Ficam na Europa e na Ásia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Transcontinental_country",
      "https://en.wikipedia.org/wiki/Turkey"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Transcontinental_country",
        "situacao": "ok",
        "texto": "This is a list of countries with territory that straddles more than one continent, known as transcontinental states or intercontinental states.\n[…]\nRussia, the largest country in the world, spans most of northern Eurasia, stretching over a vast expanse of Eastern Europe and North Asia. Its sparsely populated Asian territory (which covers 77% of Russia) was historically incorporated into the Tsardom of Russia in the 17th century by conquests. Russia is considered a European country, as it has historical, cultural, ethnic, and political ties to the continent.\n[…]\nTurkey's largest city Istanbul spans both sides of the Bosphorus, making it a transcontinental city in both Europe and Asia, while the country's capital Ankara is located in Asia. The territory of the current Turkish state is the core territory of the previous Ottoman Empire that was also transcontinental in the same geographic region, which itself had also supplanted the earlier, similarly transcontinental Byzantine Empire.\n[…]\nHistorically and ethnically, its native population is of North American tradition, although it also shares cultural links with other native peoples bordering the Arctic Sea in Northern Europe and Asia (today in Norway, Sweden, Finland and Russia), as well as in North America (Alaska in the U.S., Northwest Territories, Nunavut and northern parts of Quebec and Labrador in Canada).\n[…]\nThe British Indian Ocean Territory are geologically part of South Asia, but geopolitically in East Africa. South Georgia and the South Sandwich Islands are associated with South America but straddle the plate boundary with and are closer to Antarctica.\n[…]\nDependent territory"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Turkey",
        "situacao": "ok",
        "texto": "Turkey, officially the Republic of Türkiye, is a country mainly located in Anatolia in West Asia, with a smaller part called East Thrace in Southeast Europe. It borders the Black Sea to the north; Georgia, Armenia, Azerbaijan, and Iran to the east; Iraq, Syria, and the Mediterranean Sea to the south; and the Aegean Sea, Greece, and Bulgaria to the west. Turkey is home to over 86 million people; mo\n[…]\nTurkey covers an area of 783,562 square kilometres (302,535 square miles). With Turkish straits and Sea of Marmara in between, Turkey bridges Western Asia and Southeastern Europe. Turkey's Asian side covers 97% of its surface, and is often called Anatolia. Another definition of Anatolia's eastern boundary is an imprecise line from the Black Sea to Gulf of Iskenderun. Eastern Thrace, Turkey's European side, includes around 15% of the population and covers 3% of the surface area.\n[…]\nOverall, Turkey aims for good relations with Central Asia, the Caucasus, Russia, the Middle East, and Iran. With the West, Turkey also aims to keep its arrangements. By trading with the east and joining the EU, Turkey pursues economic growth. Turkey joined the European Union Customs Union in 1995, but its EU accession talks are frozen.\n[…]\nTurkey has made energy security a top priority, given its heavy reliance on gas and oil imports. Turkey's main energy supply sources are Russia, West Asia, and Central Asia. Gas production began in 2023 in the recently discovered Sakarya gas field. When fully operational, it will supply about 30% of the natural gas needed domestically. Turkey aims to become a hub for regional energy transportation.\n[…]\nIt is part of various routes that connect Asia and Europe, including the Middle Corridor. In 2024, Turkey, Iraq, UAE, and Qatar signed an agreement to link Iraqi port facilities to Turkey via road and rail connections.\n[…]\nOfficial website of the Grand National Assembly of Türkiye"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Bonn",
      "descricao": "Cidade alemã às margens do Reno, capital da Alemanha Ocidental de 1949 a 1990."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Capital da Alemanha Ocidental durante a Guerra Fria, Bonn perdeu o posto de capital para Berlim por causa de qual acontecimento de 1990?",
    "resposta": "Reunificação da Alemanha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bonn"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bonn",
        "situacao": "ok",
        "texto": "Bonn (German pronunciation: [bɔn] ), officially the Federal City of Bonn (German: Bundesstadt Bonn), is a federal city in the German state of North Rhine-Westphalia, located on the banks of the Rhine. With a population exceeding 320,000, it lies about 24 km (15 mi) south-southeast of Cologne, in the southernmost part of the Rhine-Ruhr region.\n[…]\nBonn served as the capital of West Germany from 1949 until 1990 and was the seat of government for reunified Germany until 1999, when the government relocated to Berlin. The city holds historical significance as the birthplace of Germany's current constitution, the Basic Law.\n[…]\nFollowing the German reunification, a political compromise known as the Berlin-Bonn Act ensured that the German federal government retained a significant presence in Bonn. As of 2019, approximately one-third of all ministerial jobs remain in the city. Bonn is considered an unofficial secondary capital of Germany and is the location of the secondary seats of the president, the chancellor, and the Bundesrat.\n[…]\nBonn Minster\n[…]\nJust as Bonn's other four major museums, the Haus der Geschichte or Museum of the History of the Federal Republic of Germany, is located on the so-called Museumsmeile (\"Museum Mile\"). The Haus der Geschichte is one of the foremost German museums of contemporary German history, with branches in Berlin and Leipzig. In its permanent exhibition, the Haus der Geschichte presents German history from 1945 until the present, also shedding light on Bonn's own role as former capital of West Germany.\n[…]\nThe successful German Baseball team Bonn Capitals are also found in the city of Bonn.\n[…]\nBonn city district is twinned with:\n[…]\nJohannes B. Kerner (born 1964), TV presenter, Abitur at the Aloisiuskolleg, and studied in Bonn\n[…]\nJonas Wohlfarth-Bottermann (born 1990), basketball player\n[…]\nGermany's Museum of Art in Bonn"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bona",
        "situacao": "ok",
        "texto": "Bona (português europeu) ou Bonn (português brasileiro) (em alemão: Bonn; em latim: Bonna) é uma cidade alemã situada no estado de Renânia do Norte-Vestfália, cerca de 30 km a sul de Colônia e cerca de 60 km a norte de Coblença. Tem pouco mais de 300 000 habitantes.\n[…]\nCom o fim da Segunda Guerra Mundial, Bona tornou-se parte da zona ocupada pelas tropas britânicas e foi então incorporada no estado da Renânia do Norte-Vestfália. Em 1949 a cidade se tornou a capital provisória da Alemanha Ocidental por iniciativa do chanceler Konrad Adenauer, natural de Colônia, que morava desde 1937 a poucos quilômetros de lá, no outro lado do rio Reno, na pequena localidade de Rhöndorf, uma freguesia da vila de Bad Honnef.\n[…]\nNa praça da catedral (Münsterplatz), encontra-se a famosa estátua de Beethoven, ao lado da Catedral de Bona ou Catedral de São Martinho, uma das mais antigas da Alemanha.\n[…]\nMaritim Bonn. Hotel 5 estrelas mais famoso da cidade, sede de numerosos congressos e exposições\n[…]\nKunst- und Ausstellungshalle der Bundesrepublik Deutschland (Salão de arte e de exposições da República Federal da Alemanha)\n[…]\nKunstmuseum Bonn (Museu de arte moderna)\n[…]\nHaus der Geschichte der Bundesrepublik Deutschland (Museu de história da República Federal de Alemanha)\n[…]\nMuseum Koenig (Museu de história natural e etnologia de Bona), após a Segunda Guerra Mundial nesse local se reuniu pela primeira vez o parlamento alemão.\n[…]\nRheinisches Landesmuseum Bonn, Museu Regional Renano de Bona\n[…]\nUniversidade de Bona (Rheinische Friedrich Wilhems Universität Bonn)\n[…]\nUniversidade de Ciências Aplicadas Bonn-Rhein-Sieg (Hochschule Bonn-Rhein-Sieg)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Uruguai",
      "descricao": "País do sudeste da América do Sul entre Argentina e Brasil, cuja capital é Montevidéu."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1828, o Uruguai se tornou independente ao fim de qual guerra entre o Império do Brasil e as Províncias Unidas do Rio da Prata?",
    "resposta": "Guerra da Cisplatina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cisplatine_War",
      "https://pt.wikipedia.org/wiki/Guerra_da_Cisplatina"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cisplatine_War",
        "situacao": "ok",
        "texto": "The Cisplatine War was an armed conflict fought in the 1820s between the Empire of Brazil and the United Provinces of the Río de la Plata over control of the Banda Oriental following its annexation by Brazil as the Cisplatina province. It was fought in the aftermath of the United Provinces' and Brazil's independence from Spain and Portugal, respectively, and resulted in the independence of Cisplat\n[…]\nFollowing the United Province's recognition of Brazil's independence on 25 June 1823, the country immediately began diplomatic talks with the Empire regarding Cisplatina, which the Argentine government considered theirs and wanted to gain possession of. In 1823, the Argentines sent José Valentín Gómez to the Brazilian court in Rio de Janeiro in order to negotiate a peaceful Brazilian withdrawal from the region.\n[…]\nThe Argentine Congress proclaimed the Cisplatina province reintegrated into the United Provinces on 25 October 1825, declaring that it would help the insurgents against Brazil by all means; this decision was communicated to the Minister of Foreign Affairs of Brazil by means of a note on 3 November. The following day, the Argentine government broke off diplomatic relations with Brazil, claiming that the Imperial Navy had engaged in acts of hostility in the River Plate.\n[…]\n1828\n[…]\nGiven the high cost of the war for both sides and the threat it posed to trade between the United Provinces and the United Kingdom, the latter pressed the two belligerent parties to engage in peace negotiations in Rio de Janeiro. Under British mediation, the United Provinces and the Empire of Brazil signed the 1828 Treaty of Montevideo, which acknowledged the independence of Cisplatina under the name Eastern Republic of Uruguay.\n[…]\nBrazil–Uruguay relations\n[…]\nArgentina–Uruguay relations\n[…]\nMedia related to Cisplatine War at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_da_Cisplatina",
        "situacao": "ok",
        "texto": "A Guerra da Cisplatina (1825–1828), denominada na historiografia argentina e uruguaia como Guerra do Brasil ou Guerra argentino-brasileira, foi um conflito armado entre o Império do Brasil e as Províncias Unidas do Rio da Prata, com a participação de forças políticas e militares da Banda Oriental, pela posse da Província Cisplatina, território correspondente em grande parte ao atual Uruguai.\n[…]\nA guerra teve origem na incorporação da Cisplatina ao Reino Unido de Portugal, Brasil e Algarves em 1821, mantida após a Independência do Brasil, e na insurreição de 1825 liderada pelos Trinta e Três Orientais, que proclamaram a separação da província e a sua união às Províncias Unidas.\n[…]\nA guerra expressou também a oposição entre distintos projetos de organização política do espaço platino. O Império do Brasil procurava consolidar a Cisplatina como província integrada ao seu sistema monárquico e centralizado, enquanto setores dirigentes das Províncias Unidas defendiam a sua reintegração ao antigo território do Vice-Reino do Rio da Prata.\n[…]\nAs forças mobilizadas durante a Guerra da Cisplatina refletiam as limitações estruturais dos Estados envolvidos, que ainda se encontravam em processo de consolidação política e militar. Tanto o Império do Brasil quanto as Províncias Unidas do Rio da Prata enfrentaram dificuldades para organizar exércitos permanentes, financiar a guerra e estabelecer mecanismos eficientes de recrutamento e comando.\n[…]\nAs operações militares da Guerra da Cisplatina desenvolveram-se em dois eixos principais — terrestre e naval — e foram marcadas por um prolongado impasse estratégico nos anos de 1827 e 1828. Enquanto o Império do Brasil manteve o controlo das principais cidades da província e a supremacia marítima, as forças republicanas obtiveram êxitos em batalhas campais e dominaram amplas áreas rurais.\n[…]\nCisplatina (província)\n[…]\nGuerra contra Artigas\n[…]\nHistória do Uruguai"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Wellington",
      "descricao": "Capital da Nova Zelândia, no extremo sul da Ilha Norte."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1865, a capital da Nova Zelândia saiu de Auckland e foi para Wellington. Que vantagem geográfica motivou a troca?",
    "resposta": "Posição central no país",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wellington",
      "https://pt.wikipedia.org/wiki/Wellington"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wellington",
        "situacao": "ok",
        "texto": "Wellington is the capital city of New Zealand. It is located at the southwestern tip of the North Island, between Cook Strait and the Remutaka Range. Wellington is the third-largest city in New Zealand (second largest in the North Island), and is the administrative centre of the Wellington Region. It is the world's southernmost capital of a sovereign state. Wellington features a temperate maritime\n[…]\nSeveral commissioners (delegates) invited from Australia, chosen for their neutral status, declared that the city was a suitable location because of its central location in New Zealand and its good harbour; it was believed that the whole Royal Navy fleet could fit into the harbour. Wellington's status as the capital is a result of constitutional convention rather than statute.\n[…]\nCentral Pulse – netball team representing the Lower North Island in the ANZ Championship, primarily based in Wellington\n[…]\nWellington lies at the southern end of the North Island Main Trunk railway (NIMT) and the Wairarapa Line, converging on Wellington railway station at the northern end of central Wellington. Two long-distance services leave from Wellington: the Capital Connection, for commuters from Palmerston North, and the Northern Explorer to Auckland.\n[…]\nToday, Wellington city is supplied from four Transpower substations: Takapu Road, Kaiwharawhara, Wilton, and Central Park (Mount Cook). Wellington Electricity owns and operates the local distribution network.\n[…]\nTelevision broadcasts began in Wellington on 1 July 1961 with the launch of channel WNTV1, becoming the third New Zealand city (after Auckland and Christchurch) to receive regular television broadcasts. WNTV1's main studios were in Waring Taylor Street in central Wellington and broadcast from a transmitter atop Mount Victoria. In 1967, the Mount Victoria transmitter was replaced with a more powerful transmitter at Mount Kaukau.\n[…]\nWellington City Council"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wellington",
        "situacao": "ok",
        "texto": "Wellington (pronunciado em inglês: [ˈwɛlɪŋtən]) é a capital da Nova Zelândia e também da região de Wellington, localizada ao sul da Ilha Norte, da qual Wellington é a cidade principal. Tinha aproximadamente 393 mil habitantes em 2011.\n[…]\nA cidade é um importante centro financeiro e comercial na Nova Zelândia. Também é um importante polo cultural do país, abrigando o museu Te Papa (\"nosso lugar\", em língua maori), o balé, a orquestra sinfônica, e a produção cinematográfica neozelandesas.\n[…]\nWellington foi fundada no final da década de 1830. O distrito comercial formou-se inicialmente junto à costa, porém está hoje afastado 100 a 200 metros do porto, devido à elevação do solo causada pelos terremotos. A cidade também se expandiu devido a aterros na faixa costeira. Wellington tornou-se capital da Nova Zelândia em 1865, substituindo Auckland.\n[…]\nWellington, situada a 41 graus de latitude sul, é a capital nacional mais meridional do mundo.\n[…]\nWellington também recebe inúmeros apelidos como The Harbour Capital, Wellywood e (agora raramente) Windy City.\n[…]\nA Praça Cívica está rodeada pela câmara municipal, pelo Centro Michael Fowler, pela Biblioteca Central de Wellington e pela Galeria da Cidade.\n[…]\nSendo a capital, há muitos edifícios governamentais em Wellington. Tanto a Biblioteca Nacional da Nova Zelândia como o edifício Te Puni Kōkiri são esteticamente únicos. Os Edifícios do Parlamento da Nova Zelândia foram construídos em meados dos anos 1960. Do outro lado da estrada em que está o Beehive situa-se o maior edifício de madeira no Hemisfério Sul, parte dos Antigos Edifícios do Governo, e que atualmente alberga parte da Universidade de Vitória de Wellington.\n[…]\nO Museu da Nova Zelândia Te Papa Tongarewa localiza-se perto da marina."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Moçambique",
      "descricao": "País lusófono do sudeste da África, banhado pelo Índico."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Moçambique e Angola conquistaram a independência de Portugal no mesmo ano. Que ano foi esse?",
    "resposta": "1975",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mozambique",
      "https://en.wikipedia.org/wiki/Angola"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mozambique",
        "situacao": "ok",
        "texto": "Mozambique, officially the Republic of Mozambique, is a country in Southeast Africa bordered by the Indian Ocean to the east, Tanzania to the north, Malawi and Zambia to the northwest, Zimbabwe to the west, and Eswatini and South Africa to the south and southwest. The sovereign state is separated from the Comoros, Mayotte, and Madagascar through the Mozambique Channel to the east. The capital and \n[…]\nWithin a year, most of the 250,000 Portuguese in Mozambique had left—some expelled by the government of the nearly independent territory, some left the country to avoid possible reprisals from the unstable government—and Mozambique became independent from Portugal on 25 June 1975. A law had been passed on the initiative of the relatively unknown Armando Guebuza of the FRELIMO party, ordering the Portuguese to leave the country in 24 hours with only 20 kilograms (44 pounds) of luggage.\n[…]\nDuring Portuguese colonial rule, a large minority of people of Portuguese descent lived permanently in almost all areas of the country, and Mozambicans with Portuguese heritage at the time of independence numbered about 360,000. Many of these left the country after independence from Portugal in 1975. There are various estimates for the size of Mozambique's Chinese community, ranging from 7,000 to 12,000 as of 2007.\n[…]\nThere are also institutes that give more vocational training, specialising in agricultural, technical or pedagogical studies, which students may attend after grade 10 in lieu of a pre-university school. After independence from Portugal in 1975, a number of Mozambican pupils continued to be admitted every year at Portuguese high schools, polytechnical institutes and universities, through bilateral agreements between the Portuguese government and the Mozambican government.\n[…]\nOutline of Mozambique\n[…]\nMozambique Population Worldometer\n[…]\nThe State of the World's Midwifery – Mozambique Country Profile"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Angola",
        "situacao": "ok",
        "texto": "Angola, officially the Republic of Angola, is a country on the western coast of Southern Africa. It is the second-largest Portuguese-speaking (Lusophone) country after Brazil in both total area and population and is the seventh-largest country in Africa. It is bordered by Namibia to the south, the Democratic Republic of the Congo to the north, Zambia to the east, and the Atlantic Ocean to the west\n[…]\nBefore independence in 1975, Angola was a bread-basket of southern Africa and a major exporter of bananas, coffee and sisal, but three decades of civil war destroyed fertile countryside, left it littered with landmines and drove millions into the cities. The country now depends on expensive food imports, mainly from South Africa and Portugal, while more than 90% of farming is done at the family and subsistence level. Thousands of Angolan small-scale farmers are trapped in poverty.\n[…]\nSince 2003, more than 400,000 Congolese migrants have been expelled from Angola. Prior to independence in 1975, Angola had a community of approximately 350,000 Portuguese, but the vast majority left after independence and the ensuing civil war. However, Angola has recovered its Portuguese minority in recent years; currently, there are about 200,000 registered with the consulates, and increasing due to the debt crisis in Portugal and the relative prosperity in Angola.\n[…]\nAccording to estimates by the UNESCO Institute for Statistics, the adult literacy rate in 2011 was 70.4%. By 2015, this had increased to 71.1%. 82.9% of men and 54.2% of women are literate as of 2001. Since independence from Portugal in 1975, a number of Angolan students continued to be admitted every year at high schools, polytechnical institutes and universities in Portugal and Brazil through bilateral agreements; in general, these students belong to the elites.\n[…]\nBertelsmann Transformation Index 2012 – Angola Country Report"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mo%C3%A7ambique",
        "situacao": "ok",
        "texto": "Moçambique, oficialmente designado como República de Moçambique, é um país localizado no sudeste do continente africano, banhado pelo Oceano Índico a leste e que faz fronteira com a Tanzânia ao norte; Maláui e Zâmbia a noroeste; Zimbábue a oeste e Essuatíni e África do Sul a sudoeste. A capital e maior cidade do país é Maputo, anteriormente chamada de Lourenço Marques, durante o domínio português.\n[…]\nApós a independência, a maioria dos 250 mil portugueses que viviam em Moçambique deixaram o país, alguns expulsos pelo governo, outros fugindo com medo.\n[…]\nDurante o governo colonial português, uma grande minoria de pessoas de ascendência portuguesa vivia permanentemente em quase todas as regiões do país e moçambicanos com sangue português, no momento da independência do país, eram cerca de 360 mil pessoas. Muitos deles deixaram a região após a independência moçambicana em 1975. Há várias estimativas para o tamanho da comunidade chinesa em Moçambique, sete mil a doze mil pessoas.\n[…]\nApós a sua independência de Portugal em 1975, o governo de Moçambique estabeleceu um sistema de assistência médica primária, que foi citado pela Organização Mundial da Saúde (OMS) como um modelo para outros países em desenvolvimento. Mais de 90% da população havia sido vacinada. Durante o período do início dos anos 1980, cerca de 11% do orçamento do governo era voltado para gastos com saúde. No entanto, a guerra civil moçambicana levou o sistema de saúde primária a um grande retrocesso.\n[…]\nDesde a independência do domínio português em 1975, a construção e a formação de professores escolares não acompanharam o aumento da população. Especialmente após a Guerra Civil de Moçambique (1977–1992), com matrículas no pós-guerra atingindo máximos históricos devido à estabilidade e o crescimento da população jovem, a qualidade da educação ainda é precária.\n[…]\nPortuguês moçambicano\n[…]\n«Presidência da República de Moçambique»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Macau",
      "descricao": "Região administrativa especial da China, na costa sul do país, administrada por Portugal até o fim do século vinte."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Depois de mais de quatro séculos de presença portuguesa, Macau passou à soberania da China em que ano?",
    "resposta": "1999",
    "fonte": [
      "https://en.wikipedia.org/wiki/Transfer_of_sovereignty_over_Macau",
      "https://en.wikipedia.org/wiki/Macau"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Transfer_of_sovereignty_over_Macau",
        "situacao": "ok",
        "texto": "The handover of Macau from the Portuguese Republic to the People's Republic of China (PRC) officially occurred at midnight on 20 December 1999. This event ended 442 years of Portuguese rule in the former settlement, which began in 1557.\n[…]\nMacau was settled by Portuguese merchants that year during the Ming dynasty era and was subsequently under various degrees of Portuguese rule until 1999. Portugal's involvement in the region was formally recognised by the Qing dynasty in 1749. The Portuguese governor João Maria Ferreira do Amaral, emboldened by British actions in the First Opium War and the Treaty of Nanking, attempted to annex the territory by expelling Qing authorities in 1846, but was assassinated in 1849.\n[…]\nThe colony remained under de jure Portuguese rule until 20 December 1999, when its handover to China took place and became the Macau Special Administrative Region (SAR) of the PRC. The handover marked the end of almost six centuries of the Portuguese Empire since 1415.\n[…]\nHowever, China insisted for a year before 2000 as the Sino-British Joint Liaison Group in Hong Kong would be dissolved in 2000 as envisioned in 1986 (the Joint Liaison Group would ultimately be dissolved in 1999). Eventually, the year 1999 was agreed upon.\n[…]\nThe twelve years between the signing of the \"Sino-Portuguese Declaration\" on 13 April 1987 and the handover on 20 December 1999 were known as \"the transition\".\n[…]\n(17:00 Macau Time/9:00 Lisbon Time) – Lowering of the national flag of Portugal at Praia Grande Palace, during which the Governor receives the flag.\n[…]\nFor Portugal, the handover of Macau to China marked the end of the Portuguese Empire and its decolonisation process and also the end of European imperialism in China and Asia."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Macau",
        "situacao": "ok",
        "texto": "Macau or Macao is a special administrative region of China. It consists of the Macau Peninsula, the islands of Taipa and Coloane, the Cotai reclamation zone between Taipa and Coloane, and several smaller islets. It borders Zhuhai to the north and west, and it lies west of Hong Kong, separated by the Pearl River estuary. With a population of about 720,000 people and a land area of 32.9 square kilom\n[…]\nFormerly a Portuguese colony, the territory of Portuguese Macau was first leased to Portugal by the Ming dynasty as a trading post in 1557. Portugal paid an annual rent and administered the territory under Chinese sovereignty until 1887, when Portugal gained perpetual colonial rights with the signing of the Sino-Portuguese Treaty of Peking. The colony remained under Portuguese rule until the 1999 handover to China.\n[…]\nThese concluded with the signing of the 1987 Joint Declaration on the Question of Macau, in which Portugal agreed to the handover of the colony in 1999 and China guaranteed Macau's political and economic systems for 50 years after the handover. In the waning years of colonial rule, Macau rapidly urbanised and constructed large-scale infrastructure projects, including the Macau International Airport and a new container port.\n[…]\nThe handover of Macau was at midnight on 20 December 1999, after 442 years of Portuguese rule.\n[…]\nMacau has generally congenial relations with China's central government.\n[…]\nAlong with an easing of travel restrictions on mainland Chinese visitors, this triggered a period of rapid economic growth; from 1999 to 2016, Macau's gross domestic product multiplied by 7 and the unemployment rate dropped from 6.3 to 1.9 percent. The Sands Macao, Wynn Macau, MGM Macau, and Venetian Macau were all opened during the first decade after liberalisation of casino concessions. Casinos employ about 24 per cent of the total workforce in the region.\n[…]\nWikimedia Atlas of Macau"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Transfer%C3%AAncia_da_soberania_de_Macau",
        "situacao": "ok",
        "texto": "A transferência da soberania de Macau de Portugal para a República Popular da China (RPC) foi um evento ocorrido oficialmente em 20 de dezembro de 1999, conforme previsto na Declaração Conjunta Sino-Portuguesa, assinada em 13 de abril de 1987.\n[…]\nApós a Segunda Guerra do Ópio, o governo português, juntamente com um representante britânico, assinou o Tratado de Amizade e Comércio Sino-Português que deu a soberania a Portugal sobre Macau, sob a condição de que Portugal cooperasse nos esforços para acabar com o contrabando de ópio.\n[…]\nTendo sido derrubado o Estado Novo português pela Revolução dos Cravos, um golpe ocorrido em 1974, o governo socialista de Portugal, em um ano, retirou tropas de Macau, retirou o reconhecimento da República da China (Taiwan) e tentou iniciar negociações com a China Comunista sobre a transferência de Macau, que no entanto recusou.\n[…]\nNo quadro das negociações para o reconhecimento da RPC por Portugal em 1979, houve um acordo secreto em que Portugal reconhecia o estatuto de Macau como \"um território chinês sob administração portuguesa\". Só depois da assinatura da declaração conjunta sino-britânica sobre a questão de Hong Kong é que a China e Portugal discutiram o estatuto de Macau. Quatro conferências, de junho de 1986 a março de 1987, resultaram na Declaração Conjunta Sino-Portuguesa assinada em 13 de abril de 1987.\n[…]\nA colónia permaneceu sob domínio português de jure até 20 de dezembro de 1999, altura em que foi transferida para a China, tornando-se a Região Administrativa Especial (RAE) de Macau da República Popular da China. É concedida pela RPC um elevado nível de autonomia e a manutenção do seu sistema legal pela Lei Básica de Macau.\n[…]\nHistória de Macau\n[…]\nPolítica de Macau",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Tombuctu",
      "descricao": "Cidade histórica da África Ocidental, às portas do Saara, antigo centro de comércio e de estudos islâmicos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Famosa como sinônimo de lugar remoto, a cidade histórica de Tombuctu fica em qual país africano?",
    "resposta": "Mali",
    "fonte": [
      "https://en.wikipedia.org/wiki/Timbuktu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Timbuktu",
        "situacao": "ok",
        "texto": "Timbuktu (  TIM-buk-TOO; French: Tombouctou; Koyra Chiini: Tunbutu; Tuareg: ⵜⵏⵀⵗⵜ, romanized: Tin Bukt) is an ancient city in Mali, situated 20 kilometres (12 miles) north of the Niger River. It is the capital of the Tombouctou Region, one of the 19 administrative regions of Mali, with a population of around eighty-four thousand people in the 2023 census.\n[…]\nNotable historical writers, such as Shabeni and Leo Africanus, wrote about the city. These stories fuelled speculation in Europe, where the city's reputation shifted from being rich to mysterious. The city's golden age as a major learning and cultural centre of the Mali Empire was followed by a long period of decline. Different tribes governed until the French took over Mali in 1893. The colonial regime lasted until the country became the Republic of Mali in 1960.\n[…]\nThe scholars focused not only on Islamic studies, but also history, rhetoric, law, science, and, most notably, medicine. Mansa Mūsā also introduced Timbuktu, and the Mali Empire in general, to the rest of the medieval world through his Hajj, as his time in Mecca would soon inspire Arab travelers to visit North Africa. Europeans, however, would not reach the city until much later, due to the difficult and lengthy journey, thus garnering the city an aura of mystery.\n[…]\nTimbuktu has featured in Disney media several times, serving a similar role. It was featured often in Donald Duck comics, and was often used as a hideout. It is also featured in The Aristocats, in which the butler Edgar plans to send the cats there, but ends up getting sent there himself. It mistakenly lists the location of Timbuktu as in French Equatorial Africa, when Mali was actually part of French West Africa.\n[…]\nList of cities in Mali\n[…]\nHistory of Timbuktu\n[…]\nTimbuktu manuscripts: Africa's written history unveiled, The UNESCO Courier, 2007–5, pp. 7–9"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tombuctu",
        "situacao": "ok",
        "texto": "Tombuctu ou Timbukto (em francês: Tombouctou; em songai: Tumbutu; também conhecida por seu nome em inglês, Timbuktu) é uma cidade no centro do Mali, capital da região de mesmo nome.\n[…]\nTombuctu foi fundada cerca do ano 1100 pela sua proximidade com o rio Níger para servir às caravanas que traziam sal das minas do deserto do Saara para trocar por ouro e escravos trazidos do sul por aquele rio. Em 1330, Tombuctu fazia parte do poderoso império do Mali, que controlava o lucrativo negócio do sal por ouro em toda a região, estando ligada à cidade de Jené através do comércio do sal, de cereais e do ouro. A sua função comercial era acompanhada de uma função militar.\n[…]\nAs culturas locais - songai, tuaregue e árabe– misturaram-se, mas conservaram as suas distintas tradições. Essa idade de ouro terminou no século XVI, quando um exército marroquino destruiu o Império Songai. O domínio do comércio com África pelos navegadores europeus foi mais uma razão para o declínio de Tombuctu. O plano actual da cidade é do século XIX. Cinco bairros repartem-se no espaço urbano rodeado por uma muralha de cinco quilómetros.\n[…]\nA desertificação e a acumulação de areia trazida pelo vento seco harmattan já destruíram a vegetação, o abastecimento em água e muitas estruturas históricas da cidade. Depois de Tombuctu ter sido inscrita na lista do Património Mundial em Perigo, a UNESCO iniciou um programa para conservar e proteger a cidade.\n[…]\n«A Guide to Timbuktu, Mali». National Geographic (em inglês). 25 de julho de 2018. Consultado em 14 de junho de 2023\n[…]\n«Tombuctu, o Património Cultural da Humanidade no Mali». DW (Deutsche Welle). 19 de abril de 2013. Consultado em 14 de junho de 2023",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Ilha de Páscoa",
      "descricao": "Ilha isolada no sudeste do Oceano Pacífico, famosa pelas estátuas de pedra chamadas moais."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No meio do Pacífico, a Ilha de Páscoa, famosa pelas estátuas de pedra chamadas moais, pertence a qual país?",
    "resposta": "Chile",
    "fonte": [
      "https://en.wikipedia.org/wiki/Easter_Island"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Easter_Island",
        "situacao": "ok",
        "texto": "Easter Island (Spanish: Isla de Pascua, [ˈisla ðe ˈpaskwa]; Rapa Nui: Rapa Nui, [ˈɾapa ˈnu.i]) is an island and special territory of Chile in the southeastern Pacific Ocean, at the southeasternmost point of the Polynesian Triangle in Oceania. The island is renowned for its nearly 1,000 extant monumental statues, called moai, which were created by the early Rapa Nui people. In 1995, UNESCO named Ea\n[…]\nChile annexed Easter Island in 1888. In 1966, the Rapa Nui were granted Chilean citizenship. In 2007, the island gained the constitutional status of \"special territory\" (Spanish: territorio especial). Administratively, it belongs to the Valparaíso Region, constituting a single commune (Isla de Pascua) of the Province of Isla de Pascua. The 2017 Chilean census registered 7,750 people on the island, of which 3,512 (45%) identified as Rapa Nui.\n[…]\nOn 30 July 2007, a constitutional reform gave Easter Island (commune of Isla de Pascua) and the Juan Fernández Islands (commune of Juan Fernández) the status of \"special territories\" of Chile. Pending the enactment of a special charter, the island continues to be governed as a province of the V Region of Valparaíso.\n[…]\nEaster Island's traditional language is Rapa Nui, an Eastern Polynesian language, sharing some similarities with Hawaiian and Tahitian. However, as in the rest of Chile, the official language used is Spanish. Easter Island is the only territory in Polynesia where Spanish is an official language.\n[…]\nSince 1966 rape, sexual abuse and crimes against property in Easter Island had lower sentences than corresponding offences in mainland Chile. This law was repealed in 2021 by a Constitutional Court decree.\n[…]\nHotu Matuꞌa, island founder\n[…]\nEaster Island is served by Mataveri International Airport, with jet service (currently Boeing 787s) from LATAM Chile and, seasonally, subsidiaries such as LATAM Perú.\n[…]\nChile Cultural Society – Easter Island"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ilha_de_P%C3%A1scoa",
        "situacao": "ok",
        "texto": "A Ilha de Páscoa (em castelhano:  Isla de Pascua), também denominada, na língua rapanui, Rapa Nui (\"Ilha Grande\"), Te Pito O Te Henúa (\"Umbigo Do Mundo\") e Mata Ki Te Rangi (\"Olhos Fixos No Céu\"), é uma ilha da Polinésia oriental, localizada no sul do Oceano Pacífico (27º 7' latitude Sul e 109º 22' longitude Oeste). Está situada a 3 700 km de distância da costa oeste do Chile e constitui a provínc\n[…]\nEm 2002, sua população era de 3 791 habitantes, 3 304 dos quais viviam na capital Hanga Roa. É famosa pelas suas enormes estátuas de pedra, os moais. No Chile, faz parte da Região de Valparaíso. Seus dois idiomas oficiais são o espanhol e o rapanui.\n[…]\nA 5 de abril de 1722, o explorador neerlandês Jacob Roggeveen atravessou o Pacífico partindo do Chile em três grandes navios europeus, e após dezessete dias de viagem desembarcou na ilha num domingo de Páscoa, daí o seu nome, que permaneceu até hoje.\n[…]\nA população da ilha no censo de 2002 foi de 3 791. 60% eram rapanuis, os chilenos de ascendência europeia ou castiza eram 39% da população e 1% restantes eram nativos americanos do Chile continental. Castizos podem incluir pessoas descendentes de europeus e rapanuis ou descendentes de europeus, nativos americanos e rapanui. Os rapanuis também têm migrado para fora da ilha. A densidade populacional na Ilha de Páscoa é de apenas 23 hab./km2.\n[…]\nA Ilha de Páscoa divide com o Arquipélago Juan Fernández o estatuto constitucional sui generis de \"território especial \" do Chile, concedido em 2007. A partir desse momento uma constituição especial para a ilha estava sob discussão: por isso, continuou a ser considerada uma província da região de Valparaíso contendo uma única comuna. Este é um caso único no Chile, uma vez que todas as outras províncias são compostas por mais de um município.\n[…]\nRapa Nui, filme de 1994.\n[…]\n«Ilha de Páscoa»\n[…]\n«Mapa Interativo de Ilha de Páscoa»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Etiópia",
      "descricao": "País sem litoral do Chifre da África, com capital em Adis Abeba."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "O calendário oficial da Etiópia, que conta os anos com alguns anos de atraso em relação ao nosso, tem quantos meses?",
    "resposta": "Treze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ethiopian_calendar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ethiopian_calendar",
        "situacao": "ok",
        "texto": "The Geʽez calendar or Geʽez calendar is the official state civil calendar of Ethiopia and serves as Orthodox calendar in Eritrea, and among Ethiopians and Eritreans in the diaspora. It is also an ecclesiastical calendar for Ethiopian Christians and Eritrean Christians belonging to the Orthodox Tewahedo, Eastern Catholic, and P'ent'ay churches.\n[…]\nThe Ethiopian calendar years 1992 and 1996, however, began on the Gregorian dates of 12 September in 1999 and 2003, respectively.\n[…]\nBishop Anianos preferred the Annunciation as New Year's Day, 25 March. Thus he shifted the Panodoros era by about six months (to begin on 25 March 5492 BC). In the Ethiopian calendar this was equivalent to 15 Magabit 5501 B.C. (E.C.). The Anno Mundi era remained in usage until the late 19th century.\n[…]\nThese Gregorian dates are valid only from March 1900 to February 2100. This is because 1900 and 2100 are not leap years in the Gregorian calendar, while they are in the Ethiopian calendar, meaning dates before 1900 and after 2100 will be offset.\n[…]\nEgyptian calendar\n[…]\nCoptic calendar\n[…]\nAdoption of the Gregorian calendar\n[…]\nChaîne, Marius, La chronologie des temps chrétiens de l'Égypte et de l'Éthiopie; historique et exposé du calendrier et du comput de l'Égypte et de l'Éthiopie depuis les débuts de l'ère chrétienne à nous jours, accompagnés de tables donnant pour chaque année, avec les caractéristiques astronomiques du comput alexandrin, les années correspondantes des principales ères orientales, suivis d'une concordance des années juliennes, grégoriennes, coptes et éthiopiennes avec les années musulmanes, et de plusieurs appendices, pour servir à la chronologie (Paris: Librairie Orientaliste Paul Geuthner, 1925) online link.\n[…]\n\"The Ethiopian Calendar\", Appendix IV, C.F. Beckingham and G.W.B. Huntingford, The Prester John of the Indies (Cambridge: Hakluyt Society, 1961)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Calend%C3%A1rio_et%C3%ADope",
        "situacao": "ok",
        "texto": "O calendário etíope, também chamado de Calendário Eritreu (em amárico: የኢትዮጵያ ዘመን አቆጣጠር; yä'Ityoṗṗya zëmän aḳoṭaṭär), é o calendário principal usado na Etiópia e também serve como o ano litúrgico para os cristãos na Eritreia e Etiópia pertencentes à Igreja Eritreia Ortodoxa Tewahedo, Igreja Ortodoxa Etíope Tewahedo, Igrejas Orientais Católicas, a Igreja Ortodoxa Copta de Alexandria, e Evangelismo \n[…]\nEnkutatash é a palavra para o Ano Novo Etíope em Amárico, a língua oficial da Etiópia, enquanto é chamada de Ri'se Awde Amet (\"Aniversário da Cabeça\") em Ge'ez, o termo preferido pelas Igrejas Ortodoxas Etíopes e Eritréias Tewahedo. Ocorre em 11 de setembro no calendário gregoriano; exceto no ano anterior a um ano bissexto, quando ocorre em 12 de setembro. O Ano do Calendário Etíope de 1998 Amätä Məhrät (\"Ano da Misericórdia\") começou no Ano Gregoriano em 11 de setembro de 2005.\n[…]\nO início do ano etíope (Festa de El-Nayrouz) ocorre em 29 ou 30 de agosto (no ano anterior ao ano bissexto juliano). Esta data corresponde ao calendário juliano à moda antiga; portanto, o início do ano foi transferido para a frente no Calendário Gregoriano atualmente usado para 11 ou 12 de setembro (no ano anterior ao ano bissexto juliano)\n[…]\nEssas datas são válidas apenas de março de 1900 a fevereiro de 2100. Isso ocorre porque 1900 e 2100 não são anos bissextos no calendário gregoriano, enquanto ainda são anos bissextos no calendário etíope, ou seja, datas anteriores a 1900 e após 2100 serão compensadas.\n[…]\nTodos os meses no Calendário Etíope tem 30 dias, exceto o último mês que possui 5 ou 6 dias, dependendo se o ano é bissexto ou não.\n[…]\nCalendário juliano\n[…]\nCalendário gregoriano",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Alemanha",
      "descricao": "País da Europa Central e Ocidental cuja capital é Berlim."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "No coração da Europa, a Alemanha faz fronteira terrestre com quantos países?",
    "resposta": "Nove",
    "fonte": [
      "https://en.wikipedia.org/wiki/Germany",
      "https://pt.wikipedia.org/wiki/Alemanha"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Germany",
        "situacao": "ok",
        "texto": "Germany, officially the Federal Republic of Germany, is a country in Western and Central Europe. It lies between the Baltic Sea and the North Sea to the north with the Alps to the south. Its 16 constituent states have a total population of over 83 million, making it the most populous member state of the European Union (EU).\n[…]\nEuropa-Park near Freiburg is Europe's second-most popular theme park resort.\n[…]\nIn 2013, Germany was the second-largest music market in Europe, and fourth-largest in the world. German popular music of the 20th and 21st centuries includes the movements of Neue Deutsche Welle, pop, Ostrock, heavy metal/rock, punk, pop rock, indie, Volksmusik (folk music), schlager pop and German hip hop. German electronic music gained global influence, with Kraftwerk and Tangerine Dream pioneering in this genre.\n[…]\nThere are more than 300 public and private radio stations in Germany; Germany's national radio network is the Deutschlandradio, while the public Deutsche Welle is the main radio and television broadcaster in foreign languages. Germany's print media market is the largest in Europe. The German newspapers with the highest circulation are Bild, Süddeutsche Zeitung, Frankfurter Allgemeine Zeitung and Die Welt. The largest German magazines include ADAC Motorwelt and Der Spiegel.\n[…]\nFootball is the most popular sport in Germany. With more than 7 million official members, the German Football Association (Deutscher Fußball-Bund) is the largest single-sport organisation worldwide, and the German top league, the Bundesliga, attracts the second-highest average attendance of all professional sports leagues in the world.\n[…]\nOutline of Germany\n[…]\nGermany from BBC News\n[…]\nGermany. The World Factbook. Central Intelligence Agency.\n[…]\nGermany from the OECD\n[…]\nGermany at the EU\n[…]\nGeographic data related to Germany at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alemanha",
        "situacao": "ok",
        "texto": "Alemanha (em alemão: Deutschland), oficialmente República Federal da Alemanha (em alemão: Bundesrepublik Deutschland, AFI: [ˈbʊndəsʁepuˌblik ˈdɔʏtʃlant]  ouça), é um país localizado na Europa Central. É limitado, a norte, pelo mar do Norte, Dinamarca e mar Báltico; a leste, pela Polônia e Chéquia; a sul, pela Áustria e Suíça e, a oeste, pela França, Luxemburgo, Bélgica e Países Baixos. O territóri\n[…]\nO termo \"Alemanha\" deriva do francês Allemagne — terra dos alamanos — em referência ao povo germânico de mesmo nome que vivia na atual região fronteiriça entre a França e a Alemanha e que durante o século V cruzou o rio Reno e invadiu a Gália Romana. O país também é conhecido por Germânia, que deriva do latim Germania — terra dos germanos. Na língua alemã, o país é chamado de Deutschland, nome que deriva do alto-alemão antigo diutisc, termo que significava \"do povo\" ou \"popular\".\n[…]\nZonas com uma população predominantemente católica são a Baviera e a zona da Renânia. O Papa Bento XVI nasceu na Baviera. Zonas com uma população predominantemente luterana são os estados do leste e do norte. No norte, ao longo da fronteira com os Países Baixos, há também a presença de calvinistas. Pessoas não religiosas, incluindo ateus e agnósticos, são crescentes em número e proporção, uma tendência constatada tanto na Alemanha quanto em outros países europeus.\n[…]\nA Alemanha é historicamente chamada de Das Land der Dichter und Denker (\"A terra dos poetas e pensadores\"). Desde 2006, o país tem se autodenominado Terra das ideias. A cultura alemã tem seu início muito antes do surgimento da Alemanha como um estado-nação e abrange todo o mundo falante do alemão. De suas raízes, a cultura na Alemanha tem sido moldada pelas principais tendências intelectuais e populares da Europa, tanto religiosas quanto seculares.\n[…]\nNatal na Alemanha\n[…]\n«www.deutschland.de» (em alemão). - Portal atual da Alemanha em várias línguas"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "São Petersburgo",
      "descricao": "Cidade russa às margens do rio Neva, no golfo da Finlândia, capital do Império Russo por cerca de dois séculos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Capital da Rússia por cerca de dois séculos, a cidade de São Petersburgo foi fundada em 1703 por qual czar?",
    "resposta": "Pedro, o Grande",
    "fonte": [
      "https://en.wikipedia.org/wiki/Saint_Petersburg",
      "https://pt.wikipedia.org/wiki/S%C3%A3o_Petersburgo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saint_Petersburg",
        "situacao": "ok",
        "texto": "Saint Petersburg, formerly known as Petrograd (Петроград), and later Leningrad (Ленинград), is the second-largest city in Russia, after Moscow, the nation's capital. Situated on the Neva River at the head of the Gulf of Finland on the Baltic Sea, its area of 1,439 square kilometers (556 sq mi) makes it the smallest administrative division of Russia by area. The city had a population of 5,601,911 r\n[…]\nThe city was founded by Tsar Peter the Great on 27 May 1703 on the site of a captured Swedish fortress, and was named after the apostle Saint Peter. In Russia, Saint Petersburg is historically and culturally associated with the birth of the Russian Empire and Russia's entry into modern history as a European great power. It served as a capital of the Tsardom of Russia, and the subsequent Russian Empire, from 1712 to 1918 (being replaced by Moscow for a short period between 1728 and 1730).\n[…]\nThe historic architecture of Saint Petersburg's city centre, mostly Baroque and Neoclassical buildings of the 18th and 19th centuries, has been largely preserved; although a number of buildings were demolished after the Bolsheviks' seizure of power, during the Siege of Leningrad and in recent years. The oldest of the remaining buildings is a wooden house built for Peter I in 1703 on the shore of the Neva near Trinity Square.\n[…]\nSeveral museums provide insight into the Soviet history of Saint Petersburg, including the Museum of the Blockade, which describes the Siege of Leningrad and the Museum of Political History of Russia, which explains many authoritarian features of the USSR.\n[…]\nSister cities of Saint Petersburg (not included on official government list)\n[…]\nAtchinson, Bob (2010). \"Saint Petersburg, 1900: a photographic travelogue of the capital of Imperial Russia\". Retrieved 9 February 2011. 50 photographs of St. Petersburg from \"Travelogues\" of Burton Holmes (Vol. 8, 1914) and other sources"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%A3o_Petersburgo",
        "situacao": "ok",
        "texto": "São Petersburgo ou Sampetersburgo (russo:  Санкт-Петербу́рг, tr. Sankt-Peterburg) é a segunda maior cidade da Rússia, politicamente incorporada como uma cidade autônoma (ou cidade federal). Ela está localizada ao longo do rio Neva, na entrada do Golfo da Finlândia, no Mar Báltico. Em 1914, o nome da cidade foi mudado para Petrogrado (russo:  Петроград) e, em 1924, para Leningrado (russo:  Ленингра\n[…]\nSão Petersburgo foi fundada pelo czar Pedro, o Grande em 27 de maio de 1703. Entre 1713–1728 e 1732–1918, foi a capital do Império Russo. Em 1918, as instituições da administração central mudaram-se de São Petersburgo (então denominada Petrogrado) para Moscou. Com 5 milhões de habitantes (2012) é a quarta subdivisão federal mais populosa do país. A cidade é um grande centro cultural europeu e também um importante porto russo no Báltico.\n[…]\nO czar Pedro I, o Grande era um grande interessado pela marinha, e aspirava pela construção de um novo porto para o Império Russo, já que a principal cidade portuária do país, Archangelsk, localizava-se no mar Branco, que era bloqueado para navegação durante os meses de inverno rigoroso. Em 12 de maio de 1703, durante a Grande Guerra do Norte, Pedro capturou a cidade de Nyenskans das mãos dos suecos.\n[…]\nEm 27 de maio de 1703, próximo do estuário da ilha de Hare, o czar estabeleceu o Forte de Pedro e Paulo, que daria início à construção da cidade.[carece de fontes]?\n[…]\nO primeiro evento de remo da cidade ocorreu em 1703, por incentivo do czar Pedro, o Grande, após a vitória contra a frota sueca. Os eventos navais eram organizados pela marinha desde a fundação da cidade. O principal grupo marítimo da cidade, o Yacht Club do Neva, é o mais velho do mundo. Mesmo no inverno, quando as superfícies dos rios e lagos se congelam, os praticantes não abandonam as atividades, e navegam sobre o gelo.\n[…]\nArtigo sobre São Petersburgo\n[…]\nLista telefônica de São Petersburgo"
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
