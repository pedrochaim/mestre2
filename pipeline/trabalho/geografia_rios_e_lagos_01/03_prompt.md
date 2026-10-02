Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Rios e Lagos** (tema **Geografia**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Rio Amazonas",
      "descricao": "Rio da América do Sul que atravessa o norte do Brasil e deságua no oceano Atlântico."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do rio Amazonas veio de relatos espanhóis sobre mulheres guerreiras, comparadas a figuras de qual mitologia?",
    "resposta": "Mitologia grega",
    "fonte": [
      "https://en.wikipedia.org/wiki/Amazon_River",
      "https://pt.wikipedia.org/wiki/Rio_Amazonas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Amazon_River",
        "situacao": "ok",
        "texto": "The Amazon River in South America is the largest river in the world by discharge volume of water, and the second-longest or longest river system in the world, a title which is disputed with the Nile.\n[…]\nA 2014 study by Americans James Contos and Nicolas Tripcevich in Area, a peer-reviewed journal of the Royal Geographical Society, however, identifies the most distant source of the Amazon as actually being in the Río Mantaro drainage. A variety of methods were used to compare the lengths of the Mantaro river vs. the Apurímac river from their most distant source points to their confluence, showing the longer length of the Mantaro.\n[…]\nObtaining these measurements was difficult given the class IV–V nature of each of these rivers, especially in their lower \"Abyss\" sections. Ultimately, they determined that the most distant point in the Mantaro drainage is nearly 80 km farther upstream compared to Mt. Mismi in the Apurímac drainage, and thus the maximal length of the Amazon river is about 80 km longer than previously thought.\n[…]\nMore than 10% of all known species in the world live in the Amazon rainforest. It is the richest tropical forest in the world in terms of biodiversity. In addition to thousands of species of fish, the river supports crabs, algae, and turtles.\n[…]\nInformation on the Amazon from Extreme Science\n[…]\nA photographic journey up the Amazon River from its mouth to its source\n[…]\nAmazon Alive: Light & Shadow documentary film about the Amazon river\n[…]\nAmazon River Ecosystem\n[…]\nResearch on the influence of the Amazon River on the Atlantic Ocean at the University of Southern California Archived 9 November 2019 at the Wayback Machine\n[…]\nGeographic data related to Amazon River at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Amazonas",
        "situacao": "ok",
        "texto": "Rio Amazonas é o maior rio em vazão de água da Terra e o segundo mais extenso do mundo, após o Rio Nilo. Com 6 992,06 quilômetros, percorre o norte da América do Sul, a floresta amazônica e desagua no Oceano Atlântico. Possui mais de mil afluentes, sendo que alguns deles, como o Madeira, o Negro e o Japurá, estão entre os 10 maiores rios do planeta.\n[…]\nO rio foi inicialmente conhecido pelos europeus como Marañón (Maranhão) e a parte peruana do rio ainda é conhecida com esse nome até hoje. O nome Amazonas, no entanto, foi dado depois de guerreiros nativos terem atacado uma expedição do século XVI de Francisco de Orellana. Os guerreiros eram liderados por mulheres, lembrando Orellana das guerreiras amazônicas, uma tribo de mulheres guerreiras relacionadas aos citas e sármatas iranianos mencionados na mitologia grega.\n[…]\nA palavra Amazon em si pode ser derivada do composto iraniano *ha-maz-an-\"(um) lutando juntos\" ou etnônimo *ha-mazan- \"guerreiros\", uma palavra atestada indiretamente através de uma derivação, um verbo denominal em Hesíquio de Alexandria brilho \"ἁμαζακάραν · πολεμεῖν Πέρσαι.\" (\"hamazakaran: 'para fazer a guerra' em persa\"), onde ele aparece junto com o Indo-iranianas raiz *kar- \"make\" (a partir do qual sânscrito Carma é também derivado).\n[…]\nHá ampla evidência de que as áreas ao redor do Rio Amazonas abrigavam sociedades indígenas complexas e de grande escala, principalmente chefaturas que desenvolveram vilas e cidades. Os arqueólogos estimam que na época em que o conquistador espanhol Francisco de Orellana viajou pela Amazônia em 1541, mais de 3 milhões de indígenas já viviam na região. Estes assentamentos pré-colombianos criaram civilizações altamente desenvolvidas.\n[…]\nBacia do rio Amazonas\n[…]\nAmazônia\n[…]\nMedia relacionados com Rio Amazonas no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Rio Amazonas",
      "descricao": "Rio da América do Sul que atravessa o norte do Brasil e deságua no oceano Atlântico."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que explorador espanhol liderou, em 1542, a primeira navegação europeia do rio Amazonas até a foz no Atlântico?",
    "resposta": "Francisco de Orellana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Francisco_de_Orellana"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Francisco_de_Orellana",
        "situacao": "ok",
        "texto": "Francisco de Orellana (Spanish pronunciation: [fɾanˈθisko ðe oɾeˈʎana]; 1511 – November 1546) was a Spanish explorer and conquistador significant to the Spanish exploration and conquests in South America. In one of the most improbably successful voyages in known history, Orellana managed to sail the length of the Amazon, arriving at the river's mouth on 24 August 1542. He and his party sailed alon\n[…]\nThe name 'Amazon' is said to arise from a battle Francisco de Orellana fought with a tribe of Tapuyas. The women of the tribe fought alongside the men, as was the custom among the tribe. Orellana described the river as \"the river of the Amazons\", referring to the mythical Amazons of Asia described by Herodotus (see The Histories [4.110–116]) and Diodorus in Greek legends.\n[…]\nPuerto Francisco de Orellana, Ecuador\n[…]\nOrellana Province, Ecuador\n[…]\nFrancisco de Orellana, Maynas, Loreto, Peru\n[…]\nThe Amazon River was once called the Orellana River\n[…]\nOne of the campaigns of Age of Empires II: The Forgotten is called El Dorado and is about the quest of Francisco de Orellana and Francisco Pizarro to find El Dorado, the legendary Lost City of Gold, thought to be hidden somewhere in the vast Amazon rainforest. The campaign is based on De Orellana's first exploration.\n[…]\nLevy, Buddy (2011), River of Darkness: Francisco Orellana's Legendary Voyage of Death and Discovery Down the Amazon, New York: Bantam Books. ISBN 978-0-553-80750-9 (popular history)\n[…]\nMedina, José Toribio, The Discovery of the Amazon, 1934 (translation), 1894 (original) (collection of documents relating to Orellana)\n[…]\nWarêgne, Jean-Marie (2014); \"Francisco de Orellana découvreur de l'Amazone\"; Paris: L'Harmattan. ISBN 978-2-343-02742-5\n[…]\n(in Spanish) \"Francisco de Orellana: descubriendo el gran río\", article in viajeros.com Archived 2017-06-02 at the Wayback Machine\n[…]\n\"Birthplace of Francisco de Orellana. Discoverer of the Amazon River.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Francisco_de_Orellana",
        "situacao": "ok",
        "texto": "Francisco de Orellana (Trujillo, Extremadura; 1511 – c. entre o rio Amazonas e Orinoco?, novembro de 1546) foi um explorador, conquistador e corregedor espanhol na época da colonização hispânica na América. Participou da conquista do Império Inca e, posteriormente, da descoberta do Rio Amazonas. Foi nomeado governador em várias cidades, também foi considerado um dos mais ricos conquistadores de su\n[…]\nFrancisco de Orellana nasceu em Trujillo em 1511, era um amigo (possivelmente um parente, os relatos de alguns historiadores falam de primo) da família de Francisco Pizarro. Viajou para o Novo Mundo muito jovem (1527), serviu na Nicarágua, teve êxito ao reforçar o exército de Pizarro no Peru (1535) e o serviu em várias campanhas, uma das quais perdeu um olho.\n[…]\nEm 1540, Gonzalo Pizarro chegou a Quito como governador e foi comissionado por Francisco Pizarro para organizar uma expedição para o leste, em busca do “País de la Canela”. Orellana soube da expedição organizada pelos irmãos Pizarros e se juntou a ela. Em Quito, Gonzalo Pizarro reuniu uma força de 220 espanhóis e 4 mil índios, enquanto Orellana, segundo no comando, foi enviado para Guayaquil para recrutar mais tropas e obter cavalos.\n[…]\nDe Cubagua, Orellana partiu para a Espanha. Após uma jornada difícil chegou primeiro a Portugal, onde o rei lhe ofereceu hospitalidade e até recebeu ofertas para retornar à Amazônia com uma expedição abundantemente provida sob a bandeira portuguesa. O Tratado de Tordesilhas havia colocado toda a extensão da Amazônia sob soberania espanhola, enquanto os portugueses consideravam a costa brasileira como sua propriedade.\n[…]\nOs preparativos se alargaram devido à falta de fundos. Finalmente, graças ao financiamento de Cosmo de Chaves, padrasto de Orellana, a expedição pôde partir. Pouco antes Orellana se casa com Ana de Ayala, uma jovem de origem humilde que a acompanhara em sua nova jornada.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Rio Mississippi",
      "descricao": "Principal rio dos Estados Unidos, que deságua no golfo do México perto de Nova Orleans."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Dizer rio Mississippi é quase redundante, porque na língua indígena ojibwe o nome já significa o quê?",
    "resposta": "Grande rio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mississippi_River"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mississippi_River",
        "situacao": "ok",
        "texto": "The Mississippi River is the primary river of the largest drainage basin in the United States. It is the second-longest river in the U.S. after the Missouri. From its traditional source of Lake Itasca in northern Minnesota, it flows generally south for 2,340 mi (3,766 km) to the Mississippi River Delta in the Gulf of Mexico. With its many tributaries, the Mississippi's watershed drains all or part\n[…]\nIn the United States, the Mississippi River drains the majority of the area between the crest of the Rocky Mountains and the crest of the Appalachian Mountains, except for various regions drained to Hudson Bay by the Red River of the North; to the Atlantic Ocean by the Great Lakes and the Saint Lawrence River; and to the Gulf of Mexico by the Rio Grande, the Alabama and Tombigbee rivers, the Chattahoochee and Appalachicola rivers, and various smaller coastal waterways along the Gulf.\n[…]\nThe area of the Mississippi River basin was first settled by hunting and gathering Native American peoples and is considered one of the few independent centers of plant domestication in human history. Evidence of early cultivation of sunflower, a goosefoot, a marsh elder and an indigenous squash dates to the 4th millennium BC.\n[…]\nThe word Mississippi itself comes from Messipi, the French rendering of the Anishinaabe (Ojibwe or Algonquian) name for the river, Misi-ziibi (Great River). The Ojibwe called Lake Itasca Omashkoozo-zaaga'igan (Elk Lake) and the river flowing out of it Omashkoozo-ziibi (Elk River). After flowing into Lake Bemidji, the Ojibwe called the river Bemijigamaag-ziibi (River from the Traversing Lake).\n[…]\nThe Great Flood of 1993 was another significant flood, primarily affecting the Mississippi above its confluence with the Ohio River at Cairo, Illinois.\n[…]\nMississippi River Challenge – annual canoe & kayak event on the Twin Cities stretch\n[…]\nMississippi River Field Guide"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Mississippi",
        "situacao": "ok",
        "texto": "O rio Mississippi é o segundo mais longo curso de água dos Estados Unidos, perdendo a primeira posição para o rio Missouri, que é afluente do Mississippi. Considerados juntos, formam a maior bacia hidrográfica da América do Norte. Quando medido da nascente do Missouri, o comprimento total do conjunto Missouri-Mississippi é de aproximadamente 6 270 km. A origem do rio Mississippi vem da palavra da \n[…]\nA palavra Mississippi vem do nome na língua Ojibwe para o rio, \"Messipi\" (ou Misi-ziibi), o que significa grande rio, ou do Algonquin Missi Sepe, \"grande rio\", literalmente, \"pai das águas\". Os Ojibwe chamavam o lago Itasca, o lago fonte do rio Mississippi, Omashkoozo-zaaga'igan e o rio que fluía dele como Omashkoozo-ziibi. Após fluir para dentro lago Bemidji, os Ojibwe o chamava de rio Bemijigamaa-ziibi.\n[…]\nO Canal Sanitário e de navegação de Chicago ligou o rio Illinois com o lago Michigan, ele foi completado em 1900. Ele proveu uma ligação entre o rio Mississippi e os Grandes Lagos e substituiu o pequeno canal de Illinois e Michigan (1848).\n[…]\nO romance de Herman Melville The Confidence-Man registra o estilo de um grupo de passageiros de um navio a vapor cujas histórias interligadas são contadas enquanto eles viajam subindo o rio Mississippi. O romance é escrito tanto como uma sátira cultural como uma investigação metafísica. Como em Huckleberry Finn, usa-se o rio Mississippi como uma metáfora para um grande conjunto de aspectos dos EUA e identidade humana que unifica características que de outras formas seriam dissonantes.\n[…]\nO Mississippi tem vários nomes locais, incluindo: \"Father of Waters\", \"Gathering of Waters\", \"Big River\", \"Old Man River\", \"Great River\", \"Body of a Nation\", \"Mighty Mississippi\", \"el Grande\" (de Soto), \"Muddy Mississippi\", \"Old Blue\" e \"Moon River\".\n[…]\nDelta do Mississippi",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Rio Mississippi",
      "descricao": "Principal rio dos Estados Unidos, que deságua no golfo do México perto de Nova Orleans."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O pseudônimo Mark Twain vem de um grito que media a profundidade nos barcos a vapor de qual rio americano?",
    "resposta": "Mississippi",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mark_Twain"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mark_Twain",
        "situacao": "ok",
        "texto": "Samuel Langhorne Clemens (November 30, 1835 – April 21, 1910), known by the pen name Mark Twain, was an American writer, humorist, and essayist. He has been praised as the \"greatest humorist the United States has produced\", with William Faulkner calling him \"the father of American literature\". Twain's novels include The Adventures of Tom Sawyer (1876) and its sequel, Adventures of Huckleberry Finn\n[…]\nTwain's next work drew on his experiences on the Mississippi River. Old Times on the Mississippi was a series of sketches published in the Atlantic Monthly in 1875 featuring his disillusionment with Romanticism. Old Times eventually became the starting point for Life on the Mississippi.\n[…]\nNear the completion of Huckleberry Finn, Twain wrote Life on the Mississippi, which is said to have heavily influenced the novel. The travel work recounts Twain's memories and new experiences after a 22-year absence from the Mississippi River. In it, he also explains that \"Mark Twain\" was the call made when the boat was in safe water, indicating a depth of two (or twain) fathoms (12 feet or 3.7 metres).\n[…]\nTwain wrote glowingly about unions in the river boating industry in Life on the Mississippi, which was read in union halls decades later. He supported the labor movement, especially one of the most important unions, the Knights of Labor. In a speech to them, Twain said:\n[…]\nTwain said that his famous pen name was not entirely his invention. In Life on the Mississippi, Twain wrote:\n[…]\nIn his autobiography, Twain writes further of Captain Sellers's use of \"Mark Twain\": I was a cub pilot on the Mississippi River then, and one day I wrote a rude and crude satire which was leveled at Captain Isaiah Sellers, the oldest steamboat pilot on the Mississippi River, and the most respected, esteemed, and revered.\n[…]\nMark Twain's Mississippi at Northern Illinois University Libraries\n[…]\nWorks by Mark Twain at Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mark_Twain",
        "situacao": "ok",
        "texto": "Samuel Langhorne Clemens (Florida, Missouri, 30 de novembro de 1835 - Redding, Connecticut, 21 de abril de 1910), mais conhecido pelo pseudônimo Mark Twain, foi um escritor e humorista estadunidense crítico do racismo. É mais conhecido pelos romances As Aventuras de Tom Sawyer (1876) e sua sequência Aventuras de Huckleberry Finn (1885), este último frequentemente chamado de \"O Maior Romance Americ\n[…]\nTwain cresceu em Hannibal, Missouri, que mais tarde serviria de inspiração e cenário para inglês sankanka, Huckleberry Finn e Tom Sawyer. Após trabalhar como tipógrafo em diversas cidades, ajudou Orion, seu irmão mais velho, na administração de um jornal. Na ocasião, exerceu diferentes funções, como impressor, tipógrafo e colunista. Tornou-se em seguida piloto de barcos a vela no Rio Mississippi, antes de se dirigir ao oeste para juntar-se a Orion em diligências a serviço do governo.\n[…]\nEm uma viagem de barco pelo Mississippi em direção a Nova Orleans, Twain, inspirado pelo trabalho do piloto Horace E. Bixby, decidiu seguir a carreira de condutor de barco a vapor. Era uma ocupação bem remunerada, com salário estimado em 72 400 dólares anuais, mas que exigia amplo conhecimento do rio e seus diversos portos e paradas. Twain estudou meticulosamente os 3 200 km do Mississippi por mais de dois anos, até finalmente receber sua licença de piloto em 1859.\n[…]\nTwain previra o episódio em um sonho pelo menos um mês antes, o que por fim despertou seu interesse em parapsicologia. Devastado pela culpa, ele acabaria por responsabilizar-se pela morte do irmão pelo resto de sua existência. Continuou, contudo, a trabalhar no setor naval, servindo como piloto até que a Guerra Civil Americana estourou em 1861, o que restringiu o tráfego pelo Mississippi.\n[…]\n(1992) Mark Twain's Weapons of Satire: Anti-Imperialist Writings on the Philippine-American War (publicação póstuma)\n[…]\nObras de Mark Twain na Open Library",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Rio Grande",
      "descricao": "Rio da América do Norte que forma a fronteira entre o Texas, nos Estados Unidos, e o México."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Nos Estados Unidos ele se chama Rio Grande. Que nome os mexicanos dão ao rio que separa o Texas do México?",
    "resposta": "Rio Bravo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rio_Grande"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rio_Grande",
        "situacao": "ok",
        "texto": "The Rio Grande ( or ), in the United States, or the Río Bravo (del Norte), in Mexico (Spanish pronunciation: [ˈri.o ˈβɾaβo ðel ˈnoɾte]), also known as Tó Ba'áadi in Navajo, is one of the principal rivers (along with the Colorado River) in the Southwestern United States and in northern Mexico. The length of the Rio Grande is 1,896 miles (3,051 km), making it the fourth longest river in the United S\n[…]\nDuring the late 1830s and early 1840s, the river marked the disputed border between Mexico and the nascent Republic of Texas; Mexico marked the border at the Nueces River. The disagreement provided part of the rationale for the Mexican–American War in 1846, after Texas had been admitted as a new state. Since 1848, the Rio Grande has marked the boundary between Mexico and the United States from the twin cities of El Paso, Texas, and Ciudad Juárez, Chihuahua, to the Gulf of Mexico.\n[…]\nIn Mexico, it is known as Río Bravo or Río Bravo del Norte, bravo meaning (among other things) \"furious\", \"agitated\" or \"wild\".\n[…]\nHistorically, the Pueblo and Navajo peoples also have had names for the Rio Grande/Rio Bravo:\n[…]\nRio del Norte was most commonly used for the upper Rio Grande (roughly, within the present-day borders of New Mexico) from Spanish colonial times to the end of the Mexican period in the mid-19th century. This use was first documented by the Spanish in 1582. Early American settlers in South Texas began to use the modern 'English' name Rio Grande. By the late 19th century, in the United States, the name Rio Grande had become standard in being applied to the entire river, from Colorado to the sea.\n[…]\nBy 1602, Río Bravo had become the standard Spanish name for the lower river, below its confluence with the Rio Conchos.\n[…]\n1854 map of Rio Grande entrance (hosted by the Portal to Texas History).\n[…]\nRio Grande Cam – in Mission Texas. Mexico is on the left and the US is on the right."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Grande_%28Am%C3%A9rica_do_Norte%29",
        "situacao": "ok",
        "texto": "O rio Grande é um dos principais rios (junto com o Rio Colorado) no sudoeste dos Estados Unidos e no norte do México. O comprimento do Rio Grande é de 1.896 milhas (3.051 km), tornando-o o quarto maior rio dos Estados Unidos e da América do Norte em tronco principal. Ele nasce no centro-sul do Colorado, nos Estados Unidos, e flui para o Golfo do México.\n[…]\nA bacia hidrográfica do Rio Grande tem uma área de 182.200 milhas quadradas (472.000 km 2 ); no entanto, as bacias endorreicas adjacentes e dentro da bacia hidrográfica maior do Rio Grande aumentam a área total da bacia hidrográfica para 336.000 milhas quadradas (870.000 km 2).\n[…]\nO Rio Grande, com seu fértil vale, juntamente com seus afluentes, é uma fonte vital de água para sete estados dos EUA e do México, e flui principalmente por terras áridas e semiáridas. Após percorrer todo o Novo México, o Rio Grande torna-se a fronteira entre os dois países, entre o estado americano do Texas e os estados do norte mexicano Chihuahua, Coahuila, Nuevo León e Tamaulipas; um pequeno trecho do Rio Grande forma uma divisa parcial entre Novo México e Texas.\n[…]\nDesde meados do século XX, apenas 20% da água do Rio Grande chega ao Golfo do México, devido ao consumo volumoso de água necessário para irrigar terras agrícolas (como os vales de Mesilla e do Baixo Rio Grande) e para abastecer continuamente cidades (como Albuquerque); esses usos da água são adicionais aos reservatórios de água retidos por barragens. 260 milhas (418 km) do rio no Novo México e no Texas são designadas como Rio Grande Selvagem e Cênico .",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Rio Tejo",
      "descricao": "Maior rio da Península Ibérica, que nasce na Espanha e deságua no Atlântico em Lisboa."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Diante de Lisboa, o estuário do rio Tejo se alarga tanto que ganhou qual nome popular?",
    "resposta": "Mar da Palha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mar_da_Palha",
      "https://pt.wikipedia.org/wiki/Rio_Tejo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mar_da_Palha",
        "situacao": "ok",
        "texto": "O Mar da Palha é uma grande bacia no estuário do Rio Tejo próximo da sua foz, que no seu ponto mais largo atinge os 23 km de largura.\n[…]\nO Mar da Palha começa a sul do \"mouchão de Alhandra\", próximo de Alverca do Ribatejo, quando se começam a formar a \"Cala do Norte\" e a \"Cala das Barcas\" (ou Sul), em torno do \"mouchão da Póvoa\", na margem norte, e a Cala da Arrábida a sul do \"mouchão do Lombo do Tejo\", na margem Sul 38° 51′ 51″ N, 9° 01′ 13″ O, e termina quando o rio volta a estreitar entre o Terreiro do Paço, em Lisboa, na margem Norte, e Cacilhas (cidade de Almada) na margem Sul 38° 41′ 30″ N, 9° 08′ 00″ O.\n[…]\nEstão localizadas junto do Mar da Palha as seguintes localidades: Alcochete, Alverca do Ribatejo, Forte da Casa, Póvoa de Santa Iria, Sacavém, Lisboa, Montijo, Moita, Barreiro, Amora, Seixal e Almada.\n[…]\nToda a bacia do Mar da Palha se caracteriza pelos seus fundos baixos e em constante mutação. A navegação é feita pelas calas, e por canais mantidos às cotas necessárias através de dragagens, como é o caso do canal do Barreiro ou da CUF na margem sul.\n[…]\nNa origem do seu nome estão os resíduos vegetais arrastados pelo rio Tejo das lezírias ribatejanas a montante, que empurradas pelas correntes e ventos circulam em toda a sua extensão.\n[…]\n«Site da Reserva Natural do Estuário do Tejo - ICN»\n[…]\nRoteiro da Costa de Portugal, Marinha/Instituto Hidrográfico, 2ª edição, Lisboa 1990 (ISBN 972-9002-17-7)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Tejo",
        "situacao": "ok",
        "texto": "Rio Tejo (em castelhano Tajo, aragonês Tacho) é o rio mais extenso da Península Ibérica. A sua bacia hidrográfica é a terceira mais extensa na Península, atrás do rio Douro e do rio Ebro. Nasce em Espanha — onde é conhecido como Tajo — a 1 593 m de altitude na serra de Albarracim, e após um percurso de cerca de 1 007 km, desagua no oceano Atlântico formando um estuário em Lisboa.\n[…]\nDo estuário do Tejo partiram as naus e as caravelas dos descobrimentos portugueses. A onda que assolou Portugal no dia do terramoto de 1755 subiu o rio e inundou Lisboa e outras localidades na margem.\n[…]\nEm Lisboa, o estuário do Tejo é atravessado por duas pontes. A mais antiga é a Ponte 25 de Abril (inaugurada em 1966, então Ponte Salazar), uma das maiores pontes suspensas da Europa, e que liga a capital de Portugal a Almada. A outra é a Ponte Vasco da Gama, de cerca de 17 km de comprimento. Foi inaugurada em 1998 e liga Lisboa (Sacavém) a Alcochete, Moita e Montijo. O local mais largo deste rio chama-se Mar da Palha, um lago, e fica entre Lisboa, Vila Franca de Xira e Benavente.\n[…]\nTodos os anos no porto de Lisboa, atracam centenas de paquetes de luxo, principalmente na doca de Alcântara. No seu estuário existe uma reserva ecológica (Reserva Natural do Estuário do Tejo, com sede em Alcochete) onde nidificam várias espécies de aves. Devido à grande poluição do rio deixaram de existir golfinhos de forma permanente, mas nos últimos anos durante o Verão têm aparecido exemplares, que após uma boa pescaria retornam ao mar.\n[…]\nDesagua no oceano Atlântico, formando o chamado mar da Palha, o mais importante da Península Ibérica, tanto pelas dimensões como pela relevância sociodemográfica. Na parte norte, este espaço está protegido legalmente mediante a Reserva Natural do Estuário do Tejo, criada em 1916, com uma área de 14 560 hectares.\n[…]\nObservação de aves no estuário do Tejo (Lezírias)"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Lago Vitória",
      "descricao": "Maior lago da África, dividido entre Uganda, Quênia e Tanzânia."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em homenagem a quem o explorador britânico John Speke batizou, em 1858, o maior lago da África?",
    "resposta": "Rainha Vitória",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lake_Victoria"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Victoria",
        "situacao": "ok",
        "texto": "Lake Victoria is one of the African Great Lakes. With a surface area of approximately 59,947 km2 (23,146 sq mi), Lake Victoria is Africa's largest lake by area, the world's largest tropical lake, and the world's second-largest fresh water lake by surface area after Lake Superior in North America. In terms of volume, Lake Victoria is the world's ninth-largest continental lake, containing about 2,42\n[…]\nThough having multiple local language names (Swahili: Ziwa Nyanza; Dholuo: Nam Lolwe; Luganda: 'Nnalubaale; Kinyarwanda: Nyanza), the lake was renamed after Queen Victoria by the explorer John Hanning Speke, the first Briton to document it in 1858, while on an expedition with Richard Francis Burton.\n[…]\nPhotojournalist John Reader, writing in his Alan Paton Literary Award-winning Africa: A Biography of a Continent, describes Lake Victoria as being relatively geologically young at about 400,000 years old—having been formed as westward-flowing rivers were backed up \"when a fractured block of the Earth's crust tilted along the line of the Great Rift Valley, raising its western edge\".\n[…]\nMany Africans tribes lived in the catchment area around the lake. It was first sighted by a European in 1858 when the British explorer John Hanning Speke reached its southern shore while on his journey with Richard Francis Burton to explore central Africa and locate the Great Lakes. Believing he had found the source of the Nile on seeing this \"vast expanse of open water\" for the first time, Speke named the lake after Queen Victoria.\n[…]\nIn the adventure film Five Weeks in a Balloon (1962), Professor Ferguson and his companions fly across Lake Victoria by hot air balloon during an expedition from Zanzibar to West Africa, to the Volta River.\n[…]\nDecreasing levels of Lake Victoria Worry East African Countries\n[…]\nVideo of Lake Victoria\n[…]\nInstitutions of the East African Community: Lake Victoria Fisheries Organisation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lago_Vit%C3%B3ria",
        "situacao": "ok",
        "texto": "O lago Vitória (em língua suaíli: Victoria Nyanza) é um dos Grandes Lagos Africanos, localizado num planalto elevado na parte ocidental do Grande Vale do Rifte, na África Oriental, e está sujeito à administração territorial pela Tanzânia, Uganda e Quênia.\n[…]\nEm dezembro de 1856, o explorador britânico John Hanning Speke, a convite de Richard Francis Burton, tomou parte na sua expedição em busca do lago Niassa, que poderia ser a origem do Nilo. Eles deixaram Zanzibar em junho do ano seguinte para se tornarem os primeiros europeus a alcançar o lago Tanganica, já em fevereiro de 1858. Burton caiu enfermo, e durante a viagem de volta, Speke seguiu sozinho em direção ao norte.\n[…]\nEm julho de 1858, ele encontrou o lago que batizaria em homenagem à rainha Vitória, e alegou que o lago era a origem do rio Nilo, o que foi duramente contestado por Burton, pois ele não havia circum-navegado o lago. Speke retornou dois anos depois, desta vez com James Grant, e localizou a origem precisa do Nilo, que ele denominou de cataratas de Ripon.\n[…]\nOutra tentativa foi feita pelo explorador americano Henry Morton Stanley, que em 1877 confirmou a descoberta de Speke circum-navegando o lago e relatando o encontro das cataratas de Ripon, na costa norte. Desde então, predominou a teoria de que o lago Vitória era a origem do rio Nilo, embora o lago tenha vários afluentes. Em 2006, a nascente do Nilo foi determinada na floresta de Nyungwe, em Ruanda.\n[…]\nEm 1902, o governo do então protetorado da África Oriental Britânica inaugurou uma ferrovia ligando Mombaça até o lago Vitória. A ocupação europeia causou grande devastação à vegetação local. Grande parte da floresta que circundava o lago foi substituída por lavouras de chá, café, açúcar, tabaco e algodão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Lago Vitória",
      "descricao": "Maior lago da África, dividido entre Uganda, Quênia e Tanzânia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O maior lago da África, dividido entre Uganda, Quênia e Tanzânia, é a principal fonte de qual rio?",
    "resposta": "Nilo Branco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lake_Victoria",
      "https://en.wikipedia.org/wiki/White_Nile"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Victoria",
        "situacao": "ok",
        "texto": "Lake Victoria is one of the African Great Lakes. With a surface area of approximately 59,947 km2 (23,146 sq mi), Lake Victoria is Africa's largest lake by area, the world's largest tropical lake, and the world's second-largest fresh water lake by surface area after Lake Superior in North America. In terms of volume, Lake Victoria is the world's ninth-largest continental lake, containing about 2,42\n[…]\nEvarcha culicivora is a species of jumping spider (family Salticidae) found only around Lake Victoria in Kenya and Uganda. It feeds primarily on female mosquitos.\n[…]\nThe first introduction of Nile perch to the region, done by the Uganda Game and Fisheries Department (then part of the colonial government) and local African fish guards, happened upstream of Murchison Falls directly after the completion of the Owen Falls Dam in 1954. This allowed it to spread to Lake Kyoga where additional Nile perch were released in 1955, but not Victoria itself.\n[…]\nThe Lake Victoria basin, while generally rural, has many major centres of population. Its shores are dotted with key cities and towns, including Kisumu, Kisii, and Homa Bay in Kenya; Kampala, Jinja and Entebbe in Uganda; and Bukoba, Mwanza, and Musoma in Tanzania. These cities and towns are also home to many factories that discharge some chemicals directly into the lake or its influent rivers.\n[…]\nSince the 1900s, Lake Victoria ferries have been an important means of transport between Uganda, Tanzania, and Kenya. The main ports on the lake are Kisumu, Mwanza, Bukoba, Entebbe, Port Bell, and Jinja. Until 1963, the fastest and newest ferry, MV Victoria, was designated a Royal Mail Ship. In 1966, train ferry services between Kenya and Tanzania were established with the introduction of MV Uhuru and MV Umoja.\n[…]\nDecreasing levels of Lake Victoria Worry East African Countries\n[…]\nInstitutions of the East African Community: Lake Victoria Fisheries Organisation"
      },
      {
        "url": "https://en.wikipedia.org/wiki/White_Nile",
        "situacao": "ok",
        "texto": "The White Nile (Arabic: النيل الأبيض an-nīl al-'abyaḍ) is a river in North and East Africa. It is the less voluminous, but longer (and wider and shallower), of the two major tributaries of the Nile, the larger being the Blue Nile. The name \"White\" comes from the clay sediment carried in the water which gives the water a pale color.\n[…]\n\"White Nile\" may sometimes include the headwaters of Lake Victoria, the most remote of which being 3,700 km (2,300 mi) from the Blue Nile.\n[…]\nThese two feeder rivers meet near Rusumo Falls on the border between Rwanda and Tanzania. These waterfalls are known for an event on 28–29 April 1994, when 250,000 Rwandans crossed the bridge at Rusumo Falls into Ngara, Tanzania, in 24 hours, in what the United Nations High Commissioner for Refugees called \"the largest and fastest refugee exodus in modern times\". The Kagera forms part of the Rwanda–Tanzania and Tanzania–Uganda borders before flowing into Lake Victoria.\n[…]\nThe White Nile in Uganda goes under the name of \"Victoria Nile\" from Lake Victoria via Lake Kyoga to Lake Albert, and then as the \"Albert Nile\" from there to the border with South Sudan.\n[…]\nThe Victoria Nile starts at the outlet of Lake Victoria, at Jinja, Uganda, on the northern shore of the lake. Downstream from the Nalubaale Power Station and the Kiira Power Station at the outlet of the lake, the river goes over Bujagali Falls (the location of the Bujagali Power Station) about 15 km (9.3 mi) downstream from Jinja. The river then flows northwest through Uganda to Lake Kyoga in the centre of the country, thence west to Lake Albert.\n[…]\nThe White Nile is a navigable waterway from the Lake Albert to Khartoum via the Jebel Aulia Dam. However, only between Juba and Uganda requires the river upgrade or channel to make it navigable."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lago_Vit%C3%B3ria",
        "situacao": "ok",
        "texto": "O lago Vitória (em língua suaíli: Victoria Nyanza) é um dos Grandes Lagos Africanos, localizado num planalto elevado na parte ocidental do Grande Vale do Rifte, na África Oriental, e está sujeito à administração territorial pela Tanzânia, Uganda e Quênia.\n[…]\nCom 68 870 km² de área (quase a mesma da Irlanda), é o maior lago do continente africano, o maior lago tropical no mundo e o segundo maior lago de água doce no mundo em termos de área. Sendo relativamente raso, é considerado como o sétimo maior lago de água doce através do volume e contém 2760 km³ de água. É uma das nascentes do rio Nilo, o Nilo Branco.\n[…]\nA bacia hidrográfica inclui inúmeros cursos d'água, dentre os quais o mais importante é o rio Cagera da Tanzânia. Outros afluentes têm sua nascente no Burundi, Ruanda e Quênia. O Nilo Branco (Bahr-el-Abiad) é o único emissário do lago Vitória. Ele desce em direção ao norte para abastecer o lago Kyoga,  o lago Albert e, enfim, o rio Nilo. O trecho do Nilo Branco, entre o lago Vitória e o lago Kyoga é também chamado de Nilo Vitória, e surgiu entre 12 000 a.C. e 14 000 a.C.\n[…]\nOs afluentes, cujos fluxos variam bastante entre as estações, fornecem menos de 20% das águas do lago, o resto é proveniente das chuvas. As perdas vão de 31 a 124 milímetros por mês, em parte devido à saída do Nilo Branco, mas também devidas à evaporação, e dependendo da época e dos ventos.\n[…]\nAtualmente, a perca-do-nilo está sendo retirada, e é sabido que algumas das espécies nativas aumentaram novamente. Há ainda cerca de 200 espécies de peixes no lago Vitória, que abastece uma população de 30 milhões de pessoas que vivem ao seu redor, em uma das regiões mais povoadas da África.\n[…]\n«Vídeo sobre a redução do nível de água do lago Vitória» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Rio Tocantins",
      "descricao": "Rio brasileiro que nasce em Goiás, atravessa o estado do Tocantins e deságua perto de Belém, no Pará."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "De origem tupi, o nome do rio Tocantins faz referência ao bico de qual ave?",
    "resposta": "Tucano",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_Tocantins"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Tocantins",
        "situacao": "ok",
        "texto": "O Rio Tocantins (Paracatejê: Pyti [pɨˈti]; Xerente/Akwẽ Mrmẽze: Kâwawẽ) é um curso de água que tem como sua nascente geográfica mais distante o Rio Lagoinha, no estado de Goiás (entre os municípios de Ouro Verde de Goiás e Petrolina de Goiás), região central do estado e ao norte da capital, Goiânia.\n[…]\nO Rio Tocantins recebe essa denominação a partir da confluência dos rios Maranhão e Paranã, no Brasil Central. Soma cerca de 2.400 km de extensão até a foz, cortando o país no sentido sul-norte. Na divisa dos Estados do Tocantins e Pará (local conhecido por Bico do Papagaio), recebe as águas do rio Araguaia, a partir do qual pode ser chamado também de rio Tocantins-Araguaia.\n[…]\nO rio Tocantins é o segundo maior rio totalmente brasileiro (perde apenas para o rio São Francisco). É no vale localizado do médio Tocantins e baixo Tocantins que se encontrava a maior concentração de castanheiras da Amazônia.\n[…]\n\"Tocantins\" é um termo com origem na língua tupi: significa \"bico de tucano\", através da junção de tukana (tucano) e tim (bico), e também nomeou o estado brasileiro mais recente surgido.\n[…]\nO potencial energético instalado na bacia do rio Tocantins é superior a 10 500 MW, através de suas três usinas hidrelétricas:\n[…]\nUsina Hidrelétrica de São Salvador, localizada entre os municípios de São Salvador do Tocantins (TO) e Paranã (TO), com potência instalada de 243,2 MW;\n[…]\nUsina Hidrelétrica de Peixe Angical, localizada no município de Peixe em Tocantins, com potência instalada de 452MW.\n[…]\nUsina Hidrelétrica Luiz Eduardo Magalhães, localizada entre os municípios de Miracema do Tocantins (TO) e Lajeado (TO), com potência instalada de 902 MW;\n[…]\nUsina Hidrelétrica de Estreito, localizada na divisa entre os estados de Tocantins e Maranhão, com potência instalada de 1 087 MW."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Rio Iguaçu",
      "descricao": "Rio do Paraná que forma as Cataratas do Iguaçu e deságua no rio Paraná, na Tríplice Fronteira."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome guarani do rio Iguaçu junta duas palavras. Traduzido para o português, o que ele quer dizer?",
    "resposta": "Água grande",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_Igua%C3%A7u",
      "https://en.wikipedia.org/wiki/Iguazu_River"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Igua%C3%A7u",
        "situacao": "ok",
        "texto": "O rio Iguaçu é um curso de água que banha o estado do Paraná. É o maior rio do estado, sendo afluente do rio Paraná. É formado pelo encontro dos rios Iraí e Atuba na parte leste do município paranaense de Curitiba, junto à divisa deste com os municípios de Pinhais e São José dos Pinhais.\n[…]\nO termo \"Iguaçu\" é oriundo da língua guarani, significando \"rio grande\", através da junção de y (água, rio) e guasu (grande). Em espanhol, adotou-se a grafia Iguazú.\n[…]\nNo planalto de Guarapuava, chamado de \"terceiro planalto paranaense\", o Iguaçu aparece como um rio consequente, influenciado pela formação geológica, onde o mergulho dos derrames de basalto fazem ele apresentar-se com trechos encaixados, como seus afluentes, com vales estreitos e profundos, com corredeiras (rápidos), ilhas rochosas e quedas de água, que são conhecidos pelo nome de \"saltos\": Grande, Santiago, Osório, Caxias, Sampaio, Faraday e as cataratas do Iguaçu.\n[…]\nOs desníveis que fizeram aparecer este grande número de quedas d'água fizeram este rio ser um dos maiores rio brasileiros na contribuição da geração de energia elétrica. Existem no seu percurso seis represas para aproveitamento hidroelétrico, sendo elas:\n[…]\nsendo que o maior volume e força d’água encontram-se na queda denominada de Garganta do Diabo (Ricobom, 2001, p. 109 - \"O Parque do Iguaçu como Unidade de Conservação da Natureza. Dptº Geografia UFPR, Curitiba, 2001).\n[…]\nEm torno das quedas de água do rio Iguaçu estão as áreas preservadas da floresta estacional semidecidual (selva sub-tropical), que formam um dos mais belos parques naturais transfronteiriços da Terra, conhecido no Brasil como Parque Nacional do Iguaçu, e, na Argentina, como Parque Nacional Iguazú. Ambos os parques nacionais foram declarados pela UNESCO como Património Mundial."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Iguazu_River",
        "situacao": "ok",
        "texto": "The Iguazu River or Rio Iguassu (; Portuguese: Rio Iguaçu [ˈʁi.u iɡwaˈsu]; Spanish: Río Iguazú [ˈri.o iɣwaˈsu]; from Guarani  y guasú 'big water'), is a river in Brazil and Argentina. It is an important tributary of the Paraná River. The Iguazu River is 1,320 kilometres (820 mi) long, with a drainage basin of 62,000 km2 (24,000 mi2).\n[…]\nFor 1,205 kilometres (749 mi), to its confluence with the San Antonio River, the Iguazu flows west through Paraná State, Brazil. Downriver from the confluence, the Iguazu River forms the boundary between Brazil and Argentina's Misiones Province. Continuing west, the river drops off a plateau, forming Iguazu Falls. The falls are within national parks in both Brazil, Iguaçu National Park, and Argentina, Iguazú National Park.\n[…]\nUnlike tropical South American rivers, where the annual variations in temperature are relatively limited, the water in the subtropical Iguazu River varies significantly depending on season. At two sites, one located just above and another just below the falls, the water at both varied from about 15.5 to 29 °C (60–84 °F), and average was just below 22 °C (72 °F). The pH is typically near-neutral, ranging from 5.9 to 8.7.\n[…]\nAbout 100 fish species are native to the Iguazu River, and several undescribed species are known. Most fish species in the river are catfish, characiforms and cichlids. About 70% are endemic, which to a large extent is linked to the falls, serving both as a home for rheophilic species and isolating species above and below.\n[…]\nThis also means that, except for the threatened Steindachneridion melanodermatum in the lower part, large migratory fish known from much of the Paraná River Basin are naturally absent from Iguazu.\n[…]\nThe unusual Aegla crustacean are locally common in the Iguazu River Basin.\n[…]\nPuerto Iguazú\n[…]\nFoz do Iguaçu"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Rio Iguaçu",
      "descricao": "Rio do Paraná que forma as Cataratas do Iguaçu e deságua no rio Paraná, na Tríplice Fronteira."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Logo depois das cataratas, na Tríplice Fronteira, o rio Iguaçu deságua em qual outro grande rio?",
    "resposta": "Rio Paraná",
    "fonte": [
      "https://en.wikipedia.org/wiki/Iguazu_River"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iguazu_River",
        "situacao": "ok",
        "texto": "The Iguazu River or Rio Iguassu (; Portuguese: Rio Iguaçu [ˈʁi.u iɡwaˈsu]; Spanish: Río Iguazú [ˈri.o iɣwaˈsu]; from Guarani  y guasú 'big water'), is a river in Brazil and Argentina. It is an important tributary of the Paraná River. The Iguazu River is 1,320 kilometres (820 mi) long, with a drainage basin of 62,000 km2 (24,000 mi2).\n[…]\nThe Iguazu originates in the Serra do Mar coastal mountains of the Brazilian state of Paraná and close to Curitiba.\n[…]\nFor 1,205 kilometres (749 mi), to its confluence with the San Antonio River, the Iguazu flows west through Paraná State, Brazil. Downriver from the confluence, the Iguazu River forms the boundary between Brazil and Argentina's Misiones Province. Continuing west, the river drops off a plateau, forming Iguazu Falls. The falls are within national parks in both Brazil, Iguaçu National Park, and Argentina, Iguazú National Park.\n[…]\nIt empties into the Paraná River at the point where the borders of Argentina, Brazil, and Paraguay join, an area known as the Triple Frontier.\n[…]\nAbout 100 fish species are native to the Iguazu River, and several undescribed species are known. Most fish species in the river are catfish, characiforms and cichlids. About 70% are endemic, which to a large extent is linked to the falls, serving both as a home for rheophilic species and isolating species above and below.\n[…]\nThis also means that, except for the threatened Steindachneridion melanodermatum in the lower part, large migratory fish known from much of the Paraná River Basin are naturally absent from Iguazu.\n[…]\nThe unusual Aegla crustacean are locally common in the Iguazu River Basin.\n[…]\nIn July 2000 more than 4,000,000 litres (1,100,000 US gal) of crude oil spilled into the river from a state-run oil refinery in the municipality of Araucária near Curitiba.\n[…]\nPuerto Iguazú\n[…]\nFoz do Iguaçu"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Igua%C3%A7u",
        "situacao": "ok",
        "texto": "O rio Iguaçu é um curso de água que banha o estado do Paraná. É o maior rio do estado, sendo afluente do rio Paraná. É formado pelo encontro dos rios Iraí e Atuba na parte leste do município paranaense de Curitiba, junto à divisa deste com os municípios de Pinhais e São José dos Pinhais.\n[…]\nO curso do rio segue o sentido geral leste a oeste com algumas partes servindo de divisa natural entre o Paraná e Santa Catarina, bem como em certo trecho do seu baixo curso faz a fronteira entre o Brasil e Argentina (província de Misiones). Em 2008, o rio Iguaçu foi considerado o segundo rio mais poluído do Brasil, superado apenas do rio Tietê, em São Paulo.\n[…]\nNo planalto de Guarapuava, chamado de \"terceiro planalto paranaense\", o Iguaçu aparece como um rio consequente, influenciado pela formação geológica, onde o mergulho dos derrames de basalto fazem ele apresentar-se com trechos encaixados, como seus afluentes, com vales estreitos e profundos, com corredeiras (rápidos), ilhas rochosas e quedas de água, que são conhecidos pelo nome de \"saltos\": Grande, Santiago, Osório, Caxias, Sampaio, Faraday e as cataratas do Iguaçu.\n[…]\nApós as cataratas, o rio Iguaçu percorre por mais 23 km de extensão, fazendo a divisa entre o Brasil e a Argentina, em um vale encaixado numa falha tectônica, com largura variável entre 65 a 100 metros. Tem a sua foz no rio Paraná, na região conhecida como a Tríplice Fronteira, entre Brasil, Argentina e Paraguai.\n[…]\nEsse foi o maior barco já construído para o rio Iguaçu. Ele foi adquirido por Conrad Bührer na Alemanha e veio desmontado para o Paraná. Era um barco luxuoso, com tapetes e sala de estar, e, na inauguração da ponte em União da Vitória, na divisa entre o Paraná e Santa Catarina, transportou o presidente do estado general Carlos Cavalcanti de Albuquerque.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Rio Tâmisa",
      "descricao": "Rio da Inglaterra que atravessa Londres e Oxford e deságua no mar do Norte."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Ao passar pela cidade universitária de Oxford, o rio Tâmisa é tradicionalmente chamado pelo nome de qual deusa egípcia?",
    "resposta": "Ísis",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Isis",
      "https://en.wikipedia.org/wiki/River_Thames"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Isis",
        "situacao": "ok",
        "texto": "\"The Isis\" ( EYE-siss) is an alternative name for the River Thames, used from its source in the Cotswolds until it is joined by the River Thame at Dorchester-on-Thames in Oxfordshire. The Isis flows through Oxford and has given its name to several institutions and products of the city.\n[…]\nThe name \"Isis\" is also used for the men's second rowing eight of Oxford University Boat Club, who race against Goldie, the men's second crew of the Cambridge University Boat Club, before the annual Oxford vs. Cambridge Boat Race on the Thames in London.\n[…]\nThe name of the river likely has Brittonic origins, influenced in its evolution by later interest in the Egyptian goddess Isis.\n[…]\nUse of the modern form of the name Isis for the river was first recorded c.1540, and may have been influenced by the study of religion at the University of Oxford, the association of the Egyptian goddess with Christianity, and the association of the Thames with the Egyptian goddess. It may also have been influenced by the revival of interest in classical Roman antiquities during the Renaissance in the 16th century, and the conflation theory endorsed by the antiquarian John Leland.\n[…]\nHMP Isis is a Category C Young Offenders Institution in England operated by His Majesty's Prison Service, adjacent to HMP Belmarsh and HMP Thameside near the River Thames in the Woolwich area of South East London.\n[…]\nEach of the Formula Student cars manufactured by the Oxford Brookes University racing team used the name ISIS in the beginning of its chassis number. ISIS is then succeeded by the year number; for example, ISIS XII was the 2012 chassis, nicknamed \"Miss Piggy\". This continued until the 2016 season, when the naming convention changed to use an OBR prefix.\n[…]\nThe ISIS neutron source is named after the river Isis."
      },
      {
        "url": "https://en.wikipedia.org/wiki/River_Thames",
        "situacao": "ok",
        "texto": "The River Thames (  TEMZ), known alternatively in parts as the River Isis, is a river that flows through southern England including London. At 215 miles (346 km), it is the longest river entirely in England and the second-longest in the United Kingdom, after the River Severn.\n[…]\nThe river rises at Thames Head in Gloucestershire and flows into the North Sea near Tilbury, Essex and Gravesend, Kent, via the Thames Estuary. From the west, it flows through Oxford (where it is sometimes called the Isis), Reading, Henley-on-Thames and Windsor. The Thames also drains the whole of Greater London.\n[…]\nThe Thames through Oxford is sometimes called the Isis. Historically, and especially in Victorian times, gazetteers and cartographers insisted that the entire river was correctly named the Isis from its source down to Dorchester on Thames and that only from this point, where the river meets the Thame and becomes the \"Thame-isis\" (supposedly subsequently abbreviated to Thames) should it be so called. Ordnance Survey maps still label the Thames as \"River Thames or Isis\" down to Dorchester.\n[…]\nSince the early 20th century this distinction has been lost in common usage outside of Oxford, and some historians  suggest the name Isis is nothing more than a truncation of Tamesis, the Latin name for the Thames. Sculptures titled Tamesis and Isis by Anne Seymour Damer are located on the bridge at Henley-on-Thames, Oxfordshire (the original terracotta and plaster models were exhibited at the Royal Academy, London, in 1785. They are now (2018) on show at the River and Rowing Museum in Henley).\n[…]\nSinclair, Mick (2007). The Thames: a cultural history. Oxford; New York: Oxford University Press. ISBN 978-0-19-531492-2. OCLC 77520502.\n[…]\nThe River Thames Society\n[…]\nThames Path National Trail"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Rio Amarelo",
      "descricao": "Segundo rio mais longo da China, que corre pelo norte do país até o mar de Bohai."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por causa das enchentes devastadoras que provocou ao longo dos séculos, que apelido ganhou o rio Amarelo?",
    "resposta": "Tristeza da China",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yellow_River"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yellow_River",
        "situacao": "ok",
        "texto": "The Yellow River, also known as Huang he, is the second-longest river in China and the sixth-longest in the world, with an estimated length of 5,464 km (3,395 mi) and a drainage basin of 795,000 km2 (307,000 sq mi). Beginning in the Bayan Har Mountains, the river flows generally eastwards before entering the 1,500 km (930 mi) long Ordos Loop, which runs northeast at Gansu through the Ordos Plateau\n[…]\nDawen River\n[…]\nAs these often are released back into the wild, the Yellow River type of the Chinese giant salamander has spread to other parts of China, which represents a problem to the other types.\n[…]\nDuring the long history of China, the Yellow River has been considered a blessing as well as a curse and has been nicknamed both \"China's Pride\" and \"China's Sorrow\". In the twentieth-century, the river became a symbol of the rising Chinese nation in the face of Western and Japanese imperialism. Even before the twentieth-century civilizations have passed down via word-of-mouth poems and folktales involving the Yellow River showing the Yellow River itself has been an \"emblem of the Chinese spirit\"\n[…]\nDespite the Yellow River having a central role in the development of Chinese civilization on the North China Plain, flooding and constant rerouting of the river has also caused great disasters to populations along the river, hence it is also known as a River of disaster (Chinese: 灾难河). The management of the Yellow River has been a great political trouble to various Chinese dynasties throughout history.\n[…]\n\"The Yellow River running clear\" was reported as a good omen during the reign of the Yongle Emperor, along with the appearance of such auspicious legendary beasts as qilin (an African giraffe brought to China by a Bengal embassy aboard Zheng He's ships in 1414) and zouyu (not positively identified) and other strange natural phenomena.\n[…]\nWorks from the National Central Library about the Yellow River"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Amarelo",
        "situacao": "ok",
        "texto": "O rio Amarelo, (chinês simplificado: 黄河; chinês tradicional: 黃河; pinyin: Huáng Hé, AFI: [xwǎŋ xɤ̌]) também conhecido como Huang He ou Huang Ho, é o segundo mais longo rio da China e o 6.º maior do mundo, medindo 5.464 km, e tem uma bacia de 752.000 km².\n[…]\nAntes da criação de modernas barragens na China, o rio Amarelo era extremamente propenso a inundações. Nos anos de existência da civilização chinesa, esse rio mudou seu curso 26 vezes, com nove grandes inundações históricas. Estas inundações incluem alguns dos mais mortais desastres naturais já registrados.\n[…]\nA China tradicional, como tentativa de acabar com as inundações, construía diques mais altos e superiores ao longo das margens — o que por vezes também contribuiu para a gravidade das inundações: quando a água de uma inundação rompe o dique, a água não é drenada de volta para o leito do rio, como ocorreria no caso de uma enchente normal. Isso acaba aumentando o volume de água no leito do rio.\n[…]\nOs primeiros chineses provavelmente migraram do oeste para o leste a partir do neolítico da Ásia Central, mais antigo que o do vale do Mekong, estabelecendo-se nas terras férteis das proximidades do rio Amarelo compostas por um loess trazido e depositado pelas águas ao longo de milênios dos planaltos da China central e pelos ventos que vinham dos desertos a oeste.\n[…]\nO rio Amarelo recebe no verão um grande volume de águas originadas do degelo nas montanhas no oeste da China, e isso causava grandes inundações periódicas em toda a bacia. O loess trazido pelo rio sedimenta-se, causando seu assoreamento, agravando as enchentes. No início do estabelecimento humano, as enchentes repentinas causavam tantas mortes que os chineses ainda apelidavam o rio Amarelo de \"Rio das Lamentações\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Salto Ángel",
      "descricao": "Queda d'água do Parque Nacional Canaima, na Venezuela, que despenca do tepui Auyán."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do Salto Ángel, na Venezuela, não vem de anjos. Ele homenageia um americano de qual profissão?",
    "resposta": "Aviador",
    "distratores": [
      "Missionário",
      "Fotógrafo",
      "Botânico"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Angel_Falls",
      "https://en.wikipedia.org/wiki/Jimmie_Angel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Angel_Falls",
        "situacao": "ok",
        "texto": "Angel Falls   (Spanish: Salto Ángel; Pemon: Körepakupai Vená) is a waterfall in Venezuela.\n[…]\nThe common Spanish name Salto Ángel derives from his surname. In 2009, President Hugo Chávez announced his intention to change the name to the purported original indigenous Pemon term (\"Kerepakupai-Merú\", meaning \"waterfall of the deepest place\"), on the grounds that the nation's most famous landmark should bear an indigenous name. Explaining the name change, Chávez reportedly said, \"This is ours, long before Angel ever arrived there...\n[…]\nThe name of the waterfall—\"Salto del Ángel\"—was first published on a Venezuelan government map in December 1939.\n[…]\nThe first person to jump from Angel Falls was Max Botto of Venezuela in November 1983. The first person to complete a base jump from Angel Falls was American Jerry Bird; even though he leaped after Max Botto, he deployed his parachute later and subsequently landed first.\n[…]\nThe American fantasy-romance film What Dreams May Come (1998), starring Robin Williams, Cuba Gooding Jr, and Annabella Sciorra, is set in Venezuela and shows Angel Falls.\n[…]\nIn November 1983, Mark III Productions of Miami, Florida filmed a short documentary about an expedition to BASE jump from Angel Falls, led by American skydiver Jerry Bird. It was broadcast on ABC's Ripley's Believe It or Not! in 1985.\n[…]\nAngel Falls by Kathryn Casey (2023) is a historical fiction story inspired by the life of the photographer Ruth Robertson.\n[…]\nMedia related to Kerepakupai merú (category) at Wikimedia Commons\n[…]\nVideo Salto Angel filmed by Hakuna Matata. 2023"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jimmie_Angel",
        "situacao": "ok",
        "texto": "James Crawford Angel (August 1, 1899 – December 8, 1956) was an American aviator after whom Angel Falls in Venezuela, the tallest waterfall in the world, is named.\n[…]\nThe falls, which cascade from the top of Auyantepui in the remote Gran Sabana region of Venezuela, were not known to the outside world until Jimmie Angel flew over them on November 16, 1933, while searching for a valuable ore bed.\n[…]\nSpanish writer Alberto Vázquez-Figueroa covered Jimmie Angel's adventures in his 1998 novel Ícaro— ISBN 9788408025023, later translated into several foreign languages. There is also another book that details how Angel Falls got its name:  \"Truth or Dare: The Jimmie Angel Story\" written by Jan-Willem de Vries ISBN 9781419673665.\n[…]\nIn 2019, Angel's niece, Karen Angel, president of the  California-based nonprofit organization the Jimmie Angel Historical Project [JAHP], published \"Angel's Flight - The Life of Jimmie Angel - American Aviator-Explorer - Discoverer of Angel Falls\" [ISBN 978-1-4834-8948-3]. With over two-hundred photographs, the book is the result of twenty-three years of research by her and others. Research continues by the JAHP to verify the facts of his life.\n[…]\nAngel's Flight - The Life of Jimmie Angel - American Aviator-Explorer - Discoverer of Angel Falls, 2019,  by Karen Angel.\n[…]\nClover Air Field, Santa Monica, CA biography of Jimmy Angel\n[…]\nDavis-Monthan Aviation Field Register biography of Jimmy Angel\n[…]\nFlight to the Lost World of Venezuela on YouTube by Jake Howland describing visiting Angel Falls in the 1950s, including images of Angel's abandoned airplane.\n[…]\nJimmie Angel Historical Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Salto_%C3%81ngel",
        "situacao": "ok",
        "texto": "O Salto Ángel ou Cataratas Ángel (nome nativo Parekupa-meru) é o mais alto salto do mundo, com 979 metros de altura (807 metros de queda sem interrupção), gerada pela queda do rio Churún desde o Auyantepui, no Estado de Bolívar, sudeste da Venezuela, próximo da fronteira Brasil-Guiana. Seu nome é alusivo ao aviador estado-unidense James Crawford Angel.\n[…]\nO salto era conhecido pelos indígenas da zona, que o chamavam Kerepakupai-meru (\"queda de água até o lugar mais profundo\"), em idioma pemon, mas seu \"descobrimento\" pelos ocidentais é um assunto controvertido. Alguns historiadores atribuem-no a Ernesto Sánchez, explorador que em 1910 notificou o achado ao Ministério de Minas e Hidrocarburos em Caracas. Outros citam o capitão Félix Cardona Puig, que em 1927, junto a Mundó Freixas, divisou o grande salto no maciço de Auyantepuy.\n[…]\nOs artigos e mapas da Venezuela atraíram a curiosidade e o espírito de aventura do aviador Angel. Em 21 de maio de 1937, Cardona acompanhou Jimmy Angel no sobrevoo ao salto. Em setembro do mesmo ano, Jimmy Angel insiste em aterrissar sobre o Auyantepuy, o que consegue abruptamente, incrustando seu pequeno avião no solo. As notícias do acidente, sem vítimas, motivaram que o grande salto fosse batizado como Salto Ángel.\n[…]\nO Salto Ángel também é conhecido erroneamente como Churún-merú, nome que corresponde a outro salto de uns 400 metros de altura localizado no fim do cañón del Diablo, que ocupa o quarto lugar mundial.\n[…]\no Salto também foi inspirador na produção do filme animado Up - Altas Aventuras, que descreve o local do salto como o \"Paraíso das Cachoeiras\".\n[…]\nMedia relacionados com Salto Angel no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Rio Roosevelt",
      "descricao": "Afluente do rio Aripuanã, na Amazônia brasileira, antes chamado rio da Dúvida."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Explorado em 1914 por Rondon e um ex-presidente estrangeiro, o rio da Dúvida, na Amazônia, foi rebatizado com o nome de quem?",
    "resposta": "Theodore Roosevelt",
    "fonte": [
      "https://en.wikipedia.org/wiki/Roosevelt_River",
      "https://en.wikipedia.org/wiki/Roosevelt%E2%80%93Rondon_Scientific_Expedition"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roosevelt_River",
        "situacao": "ok",
        "texto": "The Roosevelt River (Rio Roosevelt, sometimes Rio Teodoro) is a Brazilian river, a tributary of the Aripuanã River about 760 km (470 mi) in length.\n[…]\nIt continues north until it joins the Aripuanã River.\n[…]\nThe Aripuanã then flows into the Madeira River, thence into the Amazon.\n[…]\nFormerly called Rio da Dúvida (“River of Doubt”), the river is named after Theodore Roosevelt, who traveled into the central region of Brazil during the Roosevelt–Rondon Scientific Expedition of 1913–14. The expedition, led by Roosevelt and Cândido Rondon, Brazil's most famous explorer and the river's discoverer, sought to determine where and by which course the river flowed into the Amazon.\n[…]\nThe Roosevelt-Rondon expedition was the first non-Amazonian-native party to travel and record what Rondon had named the \"Rio da Dúvida\", then one of the most unexplored and intimidating tributaries of the Amazon. Rondon had spent very little time on the river itself, only discovering its existence several years prior. Its end point was completely unknown. On top of this, sections of the river have impassable rapids and waterfalls, which hindered the expedition.\n[…]\nThe expedition members were awarded the Theodore Roosevelt Association's Distinguished Service Medal for their achievement. A documentary of the expedition was subsequently produced and aired on PBS called the New Explorers: The River of Doubt narrated by Bill Kurtis and Wilford Brimley. Since this time, the expedition has inspired others to undergo its challenges such as Materials Science Professor Marc A. Meyers, Col. Huram Reis, Col. Ivan Angonese, and Jeffery Lehmann."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Roosevelt%E2%80%93Rondon_Scientific_Expedition",
        "situacao": "ok",
        "texto": "The Roosevelt–Rondon Scientific Expedition (Portuguese: Expedição Científica Rondon–Roosevelt) was a survey expedition in 1913–14 to follow the path of the Rio da Dúvida (\"River of Doubt\") in the Amazon basin. The expedition was jointly led by Theodore Roosevelt, the former president of the United States, and Colonel Cândido Rondon, a Brazilian explorer who had discovered its headwaters in 1909.\n[…]\nRoosevelt, seeking adventure and challenge after his recent electoral defeat, agreed. Kermit Roosevelt, Theodore's son, had recently become engaged and did not plan on joining the expedition but did on the insistence of his mother Edith Roosevelt, in order to protect his father. The expedition started in Cáceres, a small town on the Paraguay River, in December 1913. They traveled to Tapirapuã, where Rondon had previously discovered the headwaters of the River of Doubt.\n[…]\nThe expedition members were awarded the Theodore Roosevelt Association's Distinguished Service Medal for their achievement. A documentary of the expedition was subsequently produced and aired on PBS called the New Explorers: The River of Doubt narrated by Bill Kurtis and Wilford Brimley. Since this time, the expedition has inspired others to undergo its challenges such as Materials Scientist Professor Marc A. Meyers, Col Huram Reis, Col Ivan Angonese, and Jeffery Lehmann.\n[…]\nOn September 26, 2021, The American Guest, a four-episode Brazilian miniseries, was released on HBO Latin America and later on HBO Max. The series written by Matthew Chapman and directed by Bruno Barreto follows the expedition of former U.S. president Theodore Roosevelt, played by Aidan Quinn, alongside Brazilian army officer Cândido Rondon, portrayed by Chico Diaz.\n[…]\nThe River of Doubt: Theodore Roosevelt's Darkest Journey\n[…]\nRoosevelt, Theodore (1914). Through the Brazilian Wilderness. New York: C. Scribner's Sons. OCLC 485541."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Roosevelt",
        "situacao": "ok",
        "texto": "O Rio Roosevelt, anteriormente conhecido como Rio da Dúvida é  um rio brasileiro que nasce no estado de Rondônia. O seu nome é em homenagem ao ex-presidente dos Estados Unidos Theodore Roosevelt, que participou da Expedição Científica Rondon-Roosevelt para definir se ele era ou não afluente do Amazonas.\n[…]\nGraças a Expedição Científica Rondon-Roosevelt realizada no início do século XX, seu verdadeiro curso foi conhecido e o rio foi rebatizado como rio Roosevelt.\n[…]\nEm visita ao Brasil, o ex-presidente americano Theodore Roosevelt, foi convidado a fazer parte da expedição, comandada pelo Marechal Cândido Rondon, cujo objetivo era explorar o curso do afluente pois, embora não existisse a hipotética passagem fluvial para o Prata, descobriu-se que o espaço compreendido entre os rios ainda era uma região inexistente nos mapas brasileiros e, segundo os cálculos de Euclides da Cunha, correspondia a uma área equivalente ao estado do Rio Grande do Sul ou Maranhão.\n[…]\nEm 1914, Roosevelt escreveu o livro Through the Brazilian Wilderness sobre suas experiências na expedição. A expedição também foi tema do livro da autora norte-americana Candice Millard, intitulado The River of Doubt, publicado em 2006. Um documentário sobre esse episódio foi realizado para a televisão pela National Geographic.\n[…]\nAtualmente, o rio enfrenta riscos pela ação do homem, mediante a exploração, mineração e desmatamentos frequentes na Amazônia.\n[…]\nRoosevelt, Theodore (1914) Through the Brazilian Wilderness.\n[…]\nTeddy Roosevelt and river of doubt\n[…]\nRoosevelt - Rondon Scientific Expedition",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Rio Madeira",
      "descricao": "Grande afluente da margem direita do rio Amazonas, que banha Porto Velho, em Rondônia."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O rio Madeira, que banha Porto Velho, ganhou esse nome dos portugueses por causa de quê?",
    "resposta": "Troncos arrastados pela correnteza",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_Madeira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Madeira",
        "situacao": "ok",
        "texto": "O rio Madeira é um rio da bacia do rio Amazonas que banha os estados de Rondônia e do Amazonas. É um dos afluentes principais do rio Amazonas. Tem extensão total aproximada de 3315 km, sendo o 17º maior do mundo em extensão.\n[…]\nO rio Madeira recebe este nome, pois no período de chuvas seu nível sobe e inunda grandes porções da planície florestal, trazendo troncos e restos de madeira da floresta, época em que são negociadas pelos madeireiros e transportadas às custas do rio.\n[…]\nO rio Mamoré ao encontrar-se pela margem esquerda o rio Beni e se juntar a ele, forma o rio Madeira. Da confluência, o Madeira faz a fronteira entre Brasil e Bolívia até o encontro deste rio com o rio Abunã. A partir daí, o rio segue em direção ao nordeste atravessando dezenas de corredeiras (provisórias) até chegar a Porto Velho, onde se iniciará a Hidrovia do Madeira. No delta do Madeira, fica a ilha Tupinambarana em uma região de alagados.\n[…]\nDurante as décadas de 1980 e 1990, a empresa brasileira PLANEL criou projeto de aproveitamento de potenciais do rio Madeira cuja concepção global era fusão hidrovia-hidrelétrica (no lado brasileiro de Porto Velho até Abunã (divisa Brasil e Bolívia) e no lado boliviano de Abunã a Esperanza) com três usinas hidrelétricas, duas no Brasil (na Cachoeira Santo Antônio e no Salto Jirau) e uma na Bolívia (na Cachuela Esperanza), geradoras de mais de 7 000 MW (no Brasil) e 1 000 MW (na Bolívia) de energia elétrica para as regiões Centro Oeste e Sudeste do Brasil a partir de Porto Velho, conhecido como Projeto Madeira.\n[…]\nAtualmente em Porto Velho, encontra-se o Grupo Camargo Corrêa, a responsável pela construção da Usina Hidrelétrica de Jirau, que beneficiará a capital do estado de Rondônia."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Encontro das Águas",
      "descricao": "Fenômeno perto de Manaus em que as águas escuras do rio Negro e as barrentas do Solimões correm lado a lado sem se misturar."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Perto de Manaus, as águas do rio Negro e do Solimões correm lado a lado por quilômetros sem se misturar. O que explica isso?",
    "resposta": "Temperatura, velocidade e densidade",
    "distratores": [
      "Rochas submersas entre eles",
      "Diferença de salinidade",
      "Ventos em sentidos opostos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Meeting_of_Waters",
      "https://pt.wikipedia.org/wiki/Encontro_das_%C3%81guas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Meeting_of_Waters",
        "situacao": "ok",
        "texto": "The Meeting of Waters (Portuguese: Encontro das Águas) is the confluence between the dark (blackwater) Rio Negro and the pale sandy-colored (whitewater) Amazon River, referred to as the Solimões River in Brazil upriver of this confluence. For 6 km (3.7 mi) the waters of the two rivers run side by side without mixing. This phenomenon is one of the main tourist attractions of Manaus.\n[…]\nThis phenomenon is due to the vast differences in temperature, speed, and amount of dissolved sediments in the waters of the two rivers. The Rio Negro flows at near 2 km/h (1.2 mph) at a temperature of 28 °C (82 °F), while the Rio Solimões flows between 4 and 6 km/h (2.5–3.7 mph) at a temperature of 22 °C (72 °F).\n[…]\nSmaller-scale meeting of waters of the Amazon river also occurs in the locations of Santarém (Brazil), Iquitos (Peru), Puerto Maldonado (Peru) and Coari (Brazil).\n[…]\nMedia related to Negro-Amazon confluence at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Encontro_das_%C3%81guas",
        "situacao": "ok",
        "texto": "O encontro das águas é um fenômeno natural facilmente visto em muitos rios da Amazônia. Os fatores para isso ocorrer na região variam desde questões geológicas, climáticas, termais ou até mesmo o tamanho ou a acidez dos rios. O mais famoso encontro das águas está localizado na frente da cidade de Manaus, entre os rios Negro e Solimões, sendo uma das principais atrações turísticas da capital amazon\n[…]\nO fenômeno também ocorre em outras cidades do Brasil, como em Santarém, no Pará, com o encontro das águas dos rios Tapajós e Amazonas, em Tefé no estado do Amazonas, entre os rios Tefé e Solimões e em Tapauá, Amazonas, o fenômeno também é visto na frente da cidade com o encontro dos rios amazônicos do Purus e Ipixuna, além de muitos outros municípios do interior da Amazônia brasileira e da Amazônia internacional como em Iquitos, Peru, e em outras localidades da Amazônia hispânica.\n[…]\nEm homenagem a esse fenômeno, o arquiteto Oscar Niemeyer elaborou um projeto de monumento ao encontro das águas, ainda em projeto em Manaus, foi um de seus últimos trabalhos antes de seu falecimento.\n[…]\nRio Negro\n[…]\nTurismo em Manaus\n[…]\nPasseio Fluvial ao Encontro das Águas"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Mar Morto",
      "descricao": "Lago salgado entre Israel, a Cisjordânia e a Jordânia, alimentado pelo rio Jordão."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que praticamente nenhum peixe consegue viver nas águas do Mar Morto, entre Israel e Jordânia?",
    "resposta": "Altíssima concentração de sal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dead_Sea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dead_Sea",
        "situacao": "ok",
        "texto": "The Dead Sea (Arabic: اَلْبَحْر الْمَيِّت, romanized: al-Baḥr al-Mayyit; or اَلْبَحْر الْمَيْت, al-Baḥr al-Mayt; Hebrew: יַם הַמֶּלַח, romanized: Yam hamMelaḥ), also known by other names, is a landlocked salt lake bordered by Jordan to the east, the West Bank to the west and Israel to the southwest. It lies in the endorheic basin of the Jordan Rift Valley, and its main tributary is the Jordan Rive\n[…]\nGiven the higher atmospheric pressure, the air has a slightly higher oxygen content (3.3% in summer to 4.8% in winter) as compared to oxygen concentration at sea level. Barometric pressures at the Dead Sea were measured between 1061 and 1065 hPa and clinically compared with health effects at higher altitude.\n[…]\nThe mineral content of the Dead Sea is very different from that of ocean water. The exact composition of the Dead Sea water varies mainly with season, depth and temperature. In the early 1980s, the concentration of ionic species (in g/kg) of Dead Sea surface water was Cl− (181.4), Br− (4.2), SO42− (0.4), HCO3− (0.2), Ca2+ (14.1), Na+ (32.5), K+ (6.2) and Mg2+ (35.2). The total salinity was 276 g/kg.\n[…]\nThe salt concentration of the Dead Sea fluctuates around 31.5%. This is unusually high and results in a nominal density of 1.24 kg/L. Anyone can easily float in the Dead Sea because of natural buoyancy. In this respect the Dead Sea is similar to the Great Salt Lake in Utah in the United States.\n[…]\nIn December 2013, Israel, Jordan and the Palestinian Authority signed an agreement for laying a water pipeline to link the Red Sea with the Dead Sea. The pipeline would be 180 km (110 mi) long and is estimated to take up to five years to complete. In January 2015 it was reported that the level of water was dropping by 1 m (3.3 ft) a year.\n[…]\nDead Sea travel guide from Wikivoyage   (Israeli and West Bank part and Jordanian part)\n[…]\nGeographic data related to Dead Sea at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mar_Morto",
        "situacao": "ok",
        "texto": "O mar Morto (em hebraico:  ים המלח, transl. ; em árabe: البحر الميت, transl. ) é um lago de água salgada do Oriente Médio.\n[…]\nO mar Morto tem esse nome devido à quase ausência de vida em suas águas que decorre da grande concentração de sal naquele repositório, cerca de dez vezes superior à dos outros oceanos. Entretanto existem alguns tipos de arqueobactérias e algas que sobrevivem naquelas águas.\n[…]\nO mar Morto perdeu 35% da sua superfície entre 1954 e 2014, em grande parte por causa do aumento na captação das águas de seu afluente, rio Jordão, por parte das autoridades de Israel e Jordânia, única fonte de água doce da região, além da natural evaporação das suas águas.\n[…]\nOutro fator importante para essa perda, além da captação da água do rio Jordão, tem sido a extração descontrolada principalmente de potássio por indústrias mineradoras e químicas como a Israel Chemicals Ltd., Dead Sea Works e Arab Potash Company, que se instalaram nas décadas de 1940 e 1950. Entre 1930 e 1997, o nível das águas do mar Morto diminuiu 21 metros.[carece de fontes]?\n[…]\nEm dezembro de 2013, Israel, Jordânia e Autoridade Nacional Palestina assinaram um acordo para construir um aqueduto transferindo a água do mar Vermelho para o mar Morto. Contudo, ambientalistas advertiram quanto ao risco de que essa transferência poderia afetar o ecossistema do mar Morto, cuja composição química é completamente diferente da dos mares \"abertos\".\n[…]\nFontes: Israel Oceanographic and Limnological Research  e BBC Brasil\n[…]\nMonitoramento do Mar Morto (em inglês) - Instituto Israelense de Oceanografia e Limnologia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Mar de Aral",
      "descricao": "Lago salgado da Ásia Central, entre Cazaquistão e Uzbequistão, que encolheu drasticamente desde o século vinte."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Na era soviética, os rios que abasteciam o mar de Aral foram desviados para irrigar qual cultura, o que ajudou a secá-lo?",
    "resposta": "Algodão",
    "distratores": [
      "Café",
      "Soja",
      "Cana-de-açúcar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Aral_Sea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aral_Sea",
        "situacao": "ok",
        "texto": "The Aral Sea was an endorheic salt lake lying between Kazakhstan to its north and Uzbekistan to its south, which began shrinking in the 1960s and had largely dried up into desert by 2007. It was in the Aktobe and Kyzylorda regions of Kazakhstan and the Karakalpakstan autonomous region of Uzbekistan. The name roughly translates from Mongolic and Turkic languages to \"Sea of Islands\", a reference to \n[…]\nFormerly the third-largest lake in the world with an area of 68,000 km2 (26,300 sq mi), the Aral Sea began shrinking in the 1960s after the rivers that fed it were diverted by Soviet irrigation projects. By 2007, it had declined to 10% of its original size, splitting into four lakes: the North Aral Sea, the eastern and western basins of the once far larger South Aral Sea, and the smaller intermediate Barsakelmes Lake.\n[…]\nIn the early 1960s, as part of the Soviet government plan for cotton, or \"white gold\", to become a major export, the Amu Darya river in the south and the Syr Darya river in the east were diverted from feeding the Aral Sea to irrigate the desert in an attempt to grow cotton, melons, rice and cereals. This plan was initially successful, and by 1988, Uzbekistan was the world's largest exporter of cotton.\n[…]\nThe International Fund for Saving the Aral Sea (IFAS) is an intergovernmental organization whose goal is to finance and support collaborative initiatives and ecological, social, and technical projects aimed at addressing the catastrophic environmental and human impacts caused by the Aral Sea's desiccation, attributed to unsustainable irrigation practices during the Soviet era.\n[…]\nIn 1948, a top-secret Soviet bioweapons laboratory was established on the island, in the centre of the Aral Sea which is now disputed territory between Kazakhstan and Uzbekistan.\n[…]\nAral Sea Foundation\n[…]\nQazaq Lens: \"The Aral Sea Is Not Simply Gone\" — sourced explainer including the northern recovery"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mar_de_Aral",
        "situacao": "ok",
        "texto": "O mar de Aral foi um lago de água salgada, localizado na Ásia Central, entre as províncias de Aqtöbe e Qyzylorda (ao norte), e a região autônoma usbeque de Caracalpaquistão (ao sul). O nome (em português, mar das Ilhas) refere-se à grande quantidade de ilhas presentes em seu leito (mais de 1500).\n[…]\nO governo soviético começou a desviar parte das águas dos rios que alimentavam o mar de Aral, o Amu Dária (ao sul) e o Sir Dária (no nordeste) em 1918. Com o fim da I Guerra Mundial havia a necessidade de aumentar a produção de alimentos, tais como arroz, cereais e melões. Havia também planos de se produzir algodão no deserto próximo ao lago; o algodão sempre valorizado era chamado “ouro branco”.\n[…]\nA quantidade de água retirada dos rios que abasteciam o mar de Aral duplicou entre 1960 e 2000, assim como a produção de algodão. No mesmo período, o Usbequistão tornou-se o 3º maior exportador de algodão do mundo. Como consequência da redução do volume de água, a salinidade do lago quase quintuplicou e matou a maior parte de sua fauna e flora naturais. A próspera indústria pesqueira faliu, assim como as cidades ao longo das margens. Houve desemprego e dificuldades econômicas.\n[…]\nEm torno de 2,7 bilhões de metros cúbicos de água transbordam da barragem de Kokaral para a parte sul do Mar de Aral, todos os anos. No entanto, a evaporação dessa água impede o aumento do nível do sul do lago. A necessidade econômica do rio Amu Dária para irrigação da produção de algodão no Usbequistão tem impedido a realização de projetos para a recuperação do sul do lago. Essa porção é constituída por uma faixa de água no oeste e uma bacia seca no leste.\n[…]\nPlantar cultivares de algodão que necessitem de menos água;\n[…]\nReduzir o número de fazendas de algodão próximas ao lago e afluentes;\n[…]\nAral Sea Foundation",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Mar de Aral",
      "descricao": "Lago salgado da Ásia Central, entre Cazaquistão e Uzbequistão, que encolheu drasticamente desde o século vinte."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que década do século vinte o mar de Aral, na Ásia Central, começou a encolher de forma acelerada?",
    "resposta": "Anos 1960",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aral_Sea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aral_Sea",
        "situacao": "ok",
        "texto": "The Aral Sea was an endorheic salt lake lying between Kazakhstan to its north and Uzbekistan to its south, which began shrinking in the 1960s and had largely dried up into desert by 2007. It was in the Aktobe and Kyzylorda regions of Kazakhstan and the Karakalpakstan autonomous region of Uzbekistan. The name roughly translates from Mongolic and Turkic languages to \"Sea of Islands\", a reference to \n[…]\nBy 1960, between 20 and 60 km3 (4.8 and 14.4 cu mi) of water each year was going to the land instead of the Aral Sea and the sea began to recede. From 1961 to 1970, the Aral's level fell an average of 20 cm (7.9 in) per year. In the 1970s the rate nearly tripled to 50–60 cm (20–24 in) per annum, and in the 1980s to 80–90 cm (31–35 in) per annum. The amount of water taken for irrigation from the rivers doubled between 1960 and 2000.\n[…]\nFrom 1960 to 1998, the sea's surface area shrank by 60%, and its volume by 80%. In 1960, the Aral Sea had been the world's fourth-largest lake with an area of 68,000 km2 (26,000 sq mi) and a volume of 1,100 km3 (260 cu mi). By 1998, it had dropped to 28,687 km2 (11,076 sq mi) and eighth largest. Its salinity increased; having originally been 10 g/L, by 1990 it was approximately 30 g/L. (By comparison, seawater is typically 35 g/L.)\n[…]\n\"Training systems for the water sector and the hydrometeorological services in Central Asia improved.\"\n[…]\nThe Interstate Commission for Water Coordination of Central Asia (ICWC) was formed on 18 February 1992 to formally unite Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan and Uzbekistan in the hopes of solving environmental, as well as socioeconomic problems in the Aral Sea region. The River Basin Organizations (the BVOs) of the Syr Darya and Amu Darya rivers were institutions called upon by the ICWC to help manage water resources. According to the ICWC, the main objectives of the body are:\n[…]\nAral Sea from Space (time lapse)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mar_de_Aral",
        "situacao": "ok",
        "texto": "O mar de Aral foi um lago de água salgada, localizado na Ásia Central, entre as províncias de Aqtöbe e Qyzylorda (ao norte), e a região autônoma usbeque de Caracalpaquistão (ao sul). O nome (em português, mar das Ilhas) refere-se à grande quantidade de ilhas presentes em seu leito (mais de 1500).\n[…]\nEste já foi o quarto maior lago do mundo com 68 000 km² de superfície e 1100 km³ de volume de água, mas tem encolhido gradualmente desde os anos 1960 após projetos de irrigação soviéticos terem desviado os rios que o alimentam. Em 2007 já havia se reduzido a apenas 10% de seu tamanho original, e em 2010 estava dividido em três porções menores, em avançado processo de desertificação.\n[…]\nNo início, a irrigação das plantações consumia aproximadamente 20 km³ de água a cada ano, porém, em ritmo crescente. Já na década de 1960, a maior parte do abastecimento de água do lago tinha sido desviado e o mar de Aral começou a perder tamanho. De 1961 a 1970 o lago baixou 20 cm por ano, e essa taxa cresceu 350% até 1990.\n[…]\nA quantidade de água retirada dos rios que abasteciam o mar de Aral duplicou entre 1960 e 2000, assim como a produção de algodão. No mesmo período, o Usbequistão tornou-se o 3º maior exportador de algodão do mundo. Como consequência da redução do volume de água, a salinidade do lago quase quintuplicou e matou a maior parte de sua fauna e flora naturais. A próspera indústria pesqueira faliu, assim como as cidades ao longo das margens. Houve desemprego e dificuldades econômicas.\n[…]\nEm 1960 o mar de Aral era o quarto maior lago do mundo, com uma área aproximada de 68 000 km ², e um volume de 1 100 km ³. Em 1998, caiu para 28 687 km ², o oitavo maior lago do mundo. Durante o mesmo período, a salinidade do mar aumentou cerca de 10 g/l para cerca de 45 g/l.\n[…]\nAral Sea Foundation",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Pororoca",
      "descricao": "Grande onda que sobe a foz de rios amazônicos quando a maré oceânica encontra a correnteza."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que encontro de forças provoca a pororoca, a onda que avança rio acima na foz do Amazonas?",
    "resposta": "Maré oceânica contra a correnteza",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pororoca",
      "https://en.wikipedia.org/wiki/Tidal_bore"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pororoca",
        "situacao": "ok",
        "texto": "Pororoca ou mupororoca é a forma como são denominados os macaréus que ocorrem na Amazônia. Trata-se de um fenômeno natural produzido pelo encontro das correntes fluviais com as águas oceânicas.\n[…]\nO termo \"pororoca\" origina-se do tupi pororoka, palavra composta pelo verbo pororok (explodir, rebentar, estrondar) e o sufixo substantivador -a. Deste modo, a palavra significa estrondo, explosão, ato de rebentar.\n[…]\nO fenômeno manifesta-se, no Brasil, na foz do rio Amazonas e afluentes do litoral paraense e amapaense (rio Araguari, rio Maiacaré, rio Guamá, Rio Capim, Rio Moju) e na foz do rio Mearim, no Maranhão. Esse choque das águas derruba árvores de grande porte e modifica o leito dos rios.\n[…]\nRecentemente, o fenômeno tem atraído praticantes de surfe, transformando-se numa atração turística regional amazônica.\n[…]\nEm julho de 2015, foi declarado oficialmente que o fenômeno já não ocorre no rio Araguari. A ocupação irregular de áreas nativas para a criação de búfalos foi um dos principais fatores que provocaram o fim do fenômeno da pororoca na bacia desse rio do extremo leste do Amapá.\n[…]\nFestival da Pororoca"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tidal_bore",
        "situacao": "ok",
        "texto": "A tidal bore, often simply given as bore in context, is a tidal phenomenon in which the leading edge of the incoming tide forms a wave (or waves) of water that travels up a river or narrow bay, reversing the direction of the river or bay's current. It is a strong tide that pushes up the river, against the current.\n[…]\nHistorically, the Colorado River had a tidal bore up to 6 feet, that extended 47 miles up river.\n[…]\nThe Shubenacadie River in Nova Scotia. When the tidal bore approaches, completely drained riverbeds are filled. It has caused the deaths of several tourists who were in the riverbeds when the bore came in. Tour boat operators offer rafting excursions in the summer.\n[…]\nHistorically, there was a tidal bore on the Gulf of California in Mexico at the mouth of the Colorado River. It formed in the estuary about Montague Island and propagated upstream. It was once very strong, but diversions of the river for irrigation have weakened the flow of the river to the point the tidal bore has nearly disappeared.\n[…]\nAmazon River in Brazil, up to 4 meters (13 ft) high, running at up to 13 mph (21 km/h). It is known locally as the pororoca.\n[…]\nNitinat Lake on Vancouver Island has a sometimes dangerous tidal bore at Nitinat Narrows where the lake meets the Pacific Ocean. The lake is popular with windsurfers due to its consistent winds.\n[…]\nIn the Dalemark Quartet by Diana Wynne Jones, the antagonist Kankredin is a tidal bore.\n[…]\nTidal race\n[…]\nTonlé Sap, a lake and river system in Cambodia where monsoon flooding can cause the river to flow backwards temporarily, albeit not as a tidal bore\n[…]\nAmateur video of the \"Wiggenhall Wave\" tidal bore\n[…]\nMascaret, Aegir, Pororoca, Tidal Bore. Quid ? Où? Quand? Comment? Pourquoi ? in Journal La Houille Blanche, No. 3, pp. 103–14\n[…]\nTidal bore research (2017) The University of Queensland."
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Lago Baikal",
      "descricao": "Lago de água doce no sul da Sibéria, na Rússia, o mais profundo do mundo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O lago Baikal, na Sibéria, é o mais profundo do mundo. Que fenômeno geológico explica tamanha profundidade?",
    "resposta": "Fenda entre placas tectônicas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lake_Baikal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Baikal",
        "situacao": "ok",
        "texto": "Lake Baikal is a rift lake and the deepest lake in the world. It is situated in southern Siberia, Russia, between the federal subjects of Irkutsk Oblast to the northwest and the Republic of Buryatia to the southeast.\n[…]\nThe lake became the site of the minor military engagement between the Czechoslovak legion and the Red Army in 1918. At times during winter freezes, the lake could be crossed on foot, though at risk of frostbite and deadly hypothermia from the cold wind moving unobstructed across flat expanses of ice. In the winter of 1920, the Great Siberian Ice March occurred, when the retreating White Russian Army crossed frozen Lake Baikal.\n[…]\nIn July 2008, Russia sent two small submersibles, Mir-1 and Mir-2, to descend 1,592 m (5,223 ft) to the bottom of Lake Baikal to conduct geological and biological tests on its unique ecosystem. Although originally reported as being successful, they did not set a world record for the deepest freshwater dive, reaching a depth of only 1,580 m (5,180 ft). That record is currently held by Anatoly Sagalevich, at 1,637 m (5,371 ft) (also in Lake Baikal aboard a Pisces submersible in 1990).\n[…]\nThe lake, nicknamed \"the Pearl of Siberia\", drew investors from the tourist industry as energy revenues sparked an economic boom. Viktor Grigorov's Grand Baikal in Irkutsk is one of the investors, who planned to build three hotels, creating 570 jobs. In 2007, the Russian government declared the Baikal region a special economic zone. A popular resort in Listvyanka is home to the seven-story Hotel Mayak.\n[…]\nHenschel, Detlev. Kayak Adventure in Siberia: The first solo circumnavigation of Lake Baikal. Dr. Detlev Henschel. ISBN 978-3-7394-8793-9.\n[…]\nLake Baikal on Vimeo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lago_Baical",
        "situacao": "ok",
        "texto": "Lago Baical ou Baikal (em russo: О́зеро Байка́л; romaniz.: Ozera Baykal) é um lago no sul da Sibéria, Rússia, entre o oblast de Ircutsque no noroeste e a Buriácia no sudeste, perto de Ircutsque. Com 636 km de comprimento e 80 km de largura, é o maior lago de água doce da Ásia, o maior em volume de água doce do mundo, o mais antigo (25 milhões de anos) e o mais profundo da Terra, com 1 680 m de pro\n[…]\nO lago Baical é um rifte onde a crosta está se separando. Com seus 636 km de comprimento e 79 km de largura, é a maior superfície de água doce da Ásia (31 722 km²), além de ser o mais profundo lago do mundo com seus 1 642 m de profundidade. O fundo do lago está a 1 186 m abaixo do nível do mar, mas abaixo ainda existem cerca de 7 km de sedimentos, o que coloca o fundo do rifte a 8 ou 11 km abaixo da superfície, sendo o mais profundo em rifte continental.\n[…]\nAlém de ser o mais profundo lago do mundo com seus 1 680 m de profundidade, levando em consideração que o lago está a 455 m acima do nível do mar e o ponto mais baixo está a 1 855 m abaixo do nível do mar, verifica-se que o Baical é uma das depressões mais profundas da Terra. A profundidade média do lago é de 744 m e supera a maioria dos lagos mais profundos.[carece de fontes]?\n[…]\nEmbora inicialmente relatado como sendo bem sucedido, não estabeleceram um recorde mundial para o mergulho mais profundo de água doce, atingindo uma profundidade de apenas 1 580 m. Esse recorde é atualmente detido por Anatoly Sagalevich, a 1637 m (também no Lago Baical a bordo do submersível Peixes em 1990) O cientista e político federal russo Artur Chilingarov, líder da missão, também participou dos mergulhos Mir.\n[…]\nEAWAG aquatic research: Lake Baikal Home Page, Abteilung Wasserressourcen und Trinkwasser(texto em inglês)\n[…]\nBaikal, lago mais profundo do mundo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Lago Baikal",
      "descricao": "Lago de água doce no sul da Sibéria, na Rússia, o mais profundo do mundo."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Aproximadamente que fração de toda a água doce superficial do planeta está guardada no lago Baikal?",
    "resposta": "Cerca de um quinto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lake_Baikal",
      "https://pt.wikipedia.org/wiki/Lago_Baikal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Baikal",
        "situacao": "ok",
        "texto": "Lake Baikal is a rift lake and the deepest lake in the world. It is situated in southern Siberia, Russia, between the federal subjects of Irkutsk Oblast to the northwest and the Republic of Buryatia to the southeast.\n[…]\nRegular winds exist in Baikal's rift valley.\n[…]\nThe most important local species for fisheries is the omul (Coregonus migratorius), an endemic whitefish. It is caught, smoked, and then sold widely in markets around the lake. Also, a second endemic whitefish inhabits the lake, C. baicalensis. The Baikal black grayling (Thymallus baicalensis), Baikal white grayling (T. brevipinnis), and Baikal sturgeon (Acipenser baerii baicalensis) are other important species with commercial value. They are also endemic to the Lake Baikal basin.\n[…]\nAs of 2006, almost 150 freshwater snails are known from Lake Baikal, including 117 endemic species from the subfamilies Baicaliinae (part of the Amnicolidae) and Benedictiinae (part of the Lithoglyphidae), and the families Planorbidae and Valvatidae. All endemics have been recorded between 20 and 30 metres (66 and 98 ft), but the majority mainly live at shallower depths.\n[…]\nAt least 18 species of sponges occur in the lake, including about 15 species from the endemic family Lubomirskiidae (the remaining are from the nonendemic family Spongillidae), which colonized the lake about 3.4 million years ago. The lake's sponges makes up around 44% of the benthic animal biomass. Lubomirskia baicalensis, Baikalospongia bacillifera, and B. intermedia are unusually large for freshwater sponges and can reach 1 m (3.3 ft) or more.\n[…]\nChasm, an episode of the fiction anthology podcast Knifepoint Horror, is set in Lake Baikal.\n[…]\nLake Baikal Ice Formations in Photos\n[…]\nLake Baikal on Vimeo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lago_Baikal",
        "situacao": "ok",
        "texto": "Lago Baical ou Baikal (em russo: О́зеро Байка́л; romaniz.: Ozera Baykal) é um lago no sul da Sibéria, Rússia, entre o oblast de Ircutsque no noroeste e a Buriácia no sudeste, perto de Ircutsque. Com 636 km de comprimento e 80 km de largura, é o maior lago de água doce da Ásia, o maior em volume de água doce do mundo, o mais antigo (25 milhões de anos) e o mais profundo da Terra, com 1 680 m de pro\n[…]\nO lago Baical é um rifte onde a crosta está se separando. Com seus 636 km de comprimento e 79 km de largura, é a maior superfície de água doce da Ásia (31 722 km²), além de ser o mais profundo lago do mundo com seus 1 642 m de profundidade. O fundo do lago está a 1 186 m abaixo do nível do mar, mas abaixo ainda existem cerca de 7 km de sedimentos, o que coloca o fundo do rifte a 8 ou 11 km abaixo da superfície, sendo o mais profundo em rifte continental.\n[…]\nEm termos geológicos este rifte é jovem e ativo, aumentando cerca de 2 cm/ano. A área da falha geológica também é sismicamente ativa, havendo fontes termais e terremotos a cada poucos anos. O único rio que provém do lago Baical é o rio Angara, um afluente do Ienissei.[carece de fontes]?\n[…]\nO Baical é também o único lago de água doce onde foram encontradas evidências diretas e indiretas da existência de hidrato de gás.\n[…]\nAs águas são bem misturadas e bem oxigenadas ao longo da coluna de água, apesar da sua grande profundidade, e em contraste com a estratificação que ocorre em grandes massas de água, tais como o Lago Tanganica ou o Mar Negro. Entre maio e junho e entre outubro e novembro, quando a temperatura do lago é de cerca de 4°C (temperatura na qual a densidade da água é máxima), há grandes movimentos de convecção que misturam a água naturalmente.\n[…]\nEAWAG aquatic research: Lake Baikal Home Page, Abteilung Wasserressourcen und Trinkwasser(texto em inglês)\n[…]\nBaikal, lago mais profundo do mundo"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Lago Nyos",
      "descricao": "Lago de cratera vulcânica no noroeste de Camarões, palco de uma tragédia em 1986."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1986, o lago Nyos, em Camarões, liberou de repente uma nuvem de gás que matou cerca de mil e setecentas pessoas. Que gás era?",
    "resposta": "Gás carbônico",
    "distratores": [
      "Metano",
      "Monóxido de carbono",
      "Gás sulfídrico"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lake_Nyos_disaster"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Nyos_disaster",
        "situacao": "ok",
        "texto": "On 21 August 1986, a limnic eruption at Lake Nyos in northwestern Cameroon killed 1,746 people and 3,500 livestock.\n[…]\nThe eruption triggered the sudden release of about 100,000–300,000 tons of carbon dioxide (CO2). The gas cloud initially rose at nearly 100 km/h (62 mph; 28 m/s) and then, being heavier than air, descended onto nearby villages, suffocating people and livestock within 25 km (16 miles) of the lake.\n[…]\nThe horizontal layering of the water column is due to the differential diffusion of CO2 and heat but, contrary to salt (which stabilises the thermohaline stratification of the oceans), carbon dioxide has a solubility that is limited by temperature, making the stratification intrinsically unstable. Thus, there is even no need of an external trigger (landslide, earthquake or heavy rain) to upset the stratification of the lake.\n[…]\nScientists concluded from evidence that a 100 metres (330 ft) column of water and foam formed at the surface of the lake, spawning a wave of at least 25 metres (82 ft) that swept the shore on one side.\n[…]\nSince carbon dioxide is 50% more dense than air, the cloud hugged the ground and moved down the valleys, where there were various villages. The mass was about 50 metres (160 ft) thick, and travelled downward at 20–50 kilometres per hour (12–31 mph; 5.6–13.9 m/s). For roughly 23 kilometres (14 mi), the gas cloud was concentrated enough to suffocate many people in their sleep in the villages of Nyos, Kam, Cha, and Subum.\n[…]\nGoogle Earth view of the area around Lake Nyos"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Desastre_do_Lago_Nyos",
        "situacao": "ok",
        "texto": "O desastre do Lago Nyos ocorreu em 21 de agosto de 1986, quando uma erupção límnica no Lago Nyos, no noroeste de Camarões, matou 1.746 pessoas e 3.500 cabeças de gado.\n[…]\nA erupção desencadeou a liberação repentina de cerca de 100 mil a 300 mil toneladas de dióxido de carbono (CO2). A nuvem de gás subiu inicialmente a quase 100 km/h e então, sendo mais pesada que o ar, desceu sobre aldeias próximas, sufocando pessoas e animais a até 25 km do lago.\n[…]\n“A estratificação horizontal da coluna d'água se deve à difusão diferencial de CO2 e calor, mas, ao contrário do sal (que estabiliza a estratificação termohalina dos oceanos), o dióxido de carbono tem uma solubilidade limitada pela temperatura, tornando a estratificação intrinsecamente instável. Assim, não há necessidade de um gatilho externo (deslizamento de terra, terremoto ou chuva forte) para perturbar a estratificação do lago.\n[…]\nComo o dióxido de carbono é 50% mais denso que o ar, a nuvem permaneceu próxima ao solo e desceu pelos vales, onde havia diversas aldeias. A massa era de cerca de 50 metros de espessura e desceu a uma velocidade de 20-50 quiômetros por hora. Por aproximadamente 23 quilômetros, a nuvem de gás estava concentrada o suficiente para sufocar muitas pessoas enquanto dormiam nas aldeias de Nyos, Kam, Cha e Subum.\n[…]\nEm The Exodus Decoded (2006), o jornalista Simcha Jacobovici faz referência ao desastre do Lago Nyos para explicar como as pragas bíblicas (como o Rio Nilo se transformando em \"sangue\", a morte em massa do gado, o surto de úlceras e a morte dos primogênitos) ocorreram devido à erupção minoica em Santorini por volta de 1600 a.C.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Rio Cuyahoga",
      "descricao": "Rio do estado de Ohio, nos Estados Unidos, que deságua no lago Erie em Cleveland."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1969, o poluído rio Cuyahoga, em Cleveland, virou símbolo da causa ambiental americana. O que aconteceu com ele?",
    "resposta": "Pegou fogo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cuyahoga_River"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cuyahoga_River",
        "situacao": "ok",
        "texto": "The Cuyahoga River (see § Pronunciation) is a river located in Northeast Ohio that feeds into Lake Erie.\n[…]\nThe Cuyahoga River bisects the city of Cleveland. As Cleveland emerged as a major manufacturing center, the river became heavily affected by industrial pollution, so much so that it caught fire at least 14 times. When it did so on June 22, 1969, news coverage of the event helped to spur the American environmental movement. For many Americans, the Cuyahoga's burning helped connect urban decay with the environmental crisis at the time in many American cities.\n[…]\nSince then, the river has been extensively cleaned up through the efforts of Cleveland's city government and the Ohio Environmental Protection Agency (OEPA). In 2019, the American Rivers conservation association named the Cuyahoga \"River of the Year\" in honor of \"50 years of environmental resurgence\".\n[…]\nOn August 25, 2020, a Holland Oil and Gas fuel tanker crashed on State Route 8 in Akron, killing one individual and causing a fire that leaked fuel into the southern section of the river. The fire was extinguished by the Akron Fire Department and the river section and surrounding area were promptly cleaned up. The fatal road crash marked the first and only river fire incident on the Cuyahoga since June 1969. However, as scholar Anne Jefferson notes:\n[…]\nList of crossings of the Cuyahoga River\n[…]\nCuyahoga River Community Planning Organization\n[…]\nFriends of the Crooked River\n[…]\nCuyahoga River Fire entry from the Encyclopedia of Cleveland History\n[…]\nYear of the River, The Plain Dealer special section commemorating the 40th anniversary of the 1969 fire"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Rio Doce",
      "descricao": "Rio do Sudeste brasileiro que nasce em Minas Gerais e deságua no Atlântico, no Espírito Santo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 2015, o rio Doce foi tomado por lama após o rompimento de uma barragem em Mariana. A barragem guardava rejeitos de qual atividade?",
    "resposta": "Mineração",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mariana_dam_disaster",
      "https://pt.wikipedia.org/wiki/Rompimento_de_barragem_em_Mariana"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mariana_dam_disaster",
        "situacao": "ok",
        "texto": "The Mariana dam disaster was an environmental disaster near Mariana, Minas Gerais, Brazil. On 5 November 2015, the Fundão tailings dam at the Germano iron ore mine of the Samarco Mariana Mining Complex near Mariana, suffered a catastrophic failure, resulting in flooding that devastated the downstream villages of Bento Rodrigues and Paracatu de Baixo (40 km (25 mi) from Bento Rodrigues), killing 19\n[…]\nAt around 6:30 pm on 5 November, the tailings of iron ore reached the Doce River. The river basin has a drainage area of about 86,700 km2 (33,500 sq mi), with 86% in Minas Gerais and Espírito Santo. In total, the river covers 230 municipalities that use its bed for subsistence. The waste also reached the hydroelectric power plant of Risoleta Neves in Santa Cruz do Escalvado within 100 kilometres of Mariana. According to the company that runs the power plant, its functioning was not affected.\n[…]\nOn 9 November, the city of Governador Valadares stopped the water intakes due to the mud on the Doce River. The next day, a State of Public Calamity was decreed in response to the water shortage in the city. According to analyses carried out in the city, the mud contains greater than acceptable concentrations of heavy metals, substances harmful to health, such as arsenic, lead and mercury.\n[…]\nThere are concerns about contamination of the nearby Rio Gualaxo do Norte, a tributary of the Doce River, due to the toxic substances stored at the facility.\n[…]\nA United Nations report shows evidence of the disaster, \"50 million tons of iron ore waste, contained high levels of toxic heavy metals and other toxic chemicals in the river Doce\". In fact, the scale of the environmental damage is the equivalent of 20,000 Olympic swimming pools of toxic mud waste contaminating the soil, rivers and water system of an area covering over 850 km.\n[…]\nRejeito, documentary by Pedro de Filippis about the fear of more disasters"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rompimento_de_barragem_em_Mariana",
        "situacao": "ok",
        "texto": "Rompimento da barragem em Mariana ocorreu na tarde de 5 de novembro de 2015 no subdistrito de Bento Rodrigues, a 35 km do centro do município brasileiro de Mariana, Minas Gerais. Rompeu-se uma barragem de rejeitos de mineração denominada \"Fundão\", controlada pela Samarco Mineração S.A., um empreendimento conjunto das maiores empresas de mineração do mundo, a brasileira Vale S.A. e a anglo-australi\n[…]\nInicialmente a mineradora Samarco informara que duas barragens haviam se rompido - a de Fundão e a de Santarém. Porém, no dia 16 de novembro, a Samarco retificou a informação, afirmando que apenas a barragem de Fundão havia se rompido. O rompimento de Fundão provocou o vazamento dos rejeitos que passaram por cima de Santarém, que, entretanto, não se rompeu. As barragens foram construídas para acomodar os rejeitos provenientes da extração do minério de ferro retirado de extensas minas na região.\n[…]\nControladas pela Samarco Mineração S.A. (um empreendimento conjunto entre a Vale S.A. e a BHP Billiton), as barragens de Fundão e Santarém fazem parte da Mina Germano, situada no distrito de Santa Rita Durão, município de Mariana, a 115 km de Belo Horizonte. Foram construídas para acomodar os rejeitos provenientes da extração do minério de ferro retirado de extensas minas na região.\n[…]\nA suspensão da licença ambiental da Samarco em dezembro de 2015 e subsequente embargo das atividades causou impacto negativo na economia de Mariana, com quedas de 60% no comércio e perdas de 5 milhões de reais em arrecadação. Moradores fizeram em março de 2016 protestos pedindo a volta das atividades da Samarco, que esperava ainda naquele ano reativar a mineração na região.\n[…]\nFrança: O país apresentou suas condolências. \"Nós nos inteiramos com emoção do rompimento das barragens mineradoras no estado de Minas Gerais\", declarou o porta-voz do ministério das Relações Exteriores, Romain Nadal."
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Lago Nasser",
      "descricao": "Lago artificial no rio Nilo, entre o Egito e o Sudão, formado pela represa alta de Assuã."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nos anos 1960, os templos egípcios de Abu Simbel foram cortados em blocos e remontados num ponto mais alto. O que os ameaçava?",
    "resposta": "Inundação pela represa de Assuã",
    "fonte": [
      "https://en.wikipedia.org/wiki/Abu_Simbel",
      "https://en.wikipedia.org/wiki/Lake_Nasser"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abu_Simbel",
        "situacao": "ok",
        "texto": "Abu Simbel is a historic site comprising two massive rock-cut temples in the village of Abu Simbel (Arabic: أبو سمبل), Aswan Governorate, Upper Egypt, near the border with Sudan. It is located on the western bank of Lake Nasser, about 230 km (140 mi) southwest of Aswan (about 300 km (190 mi) by road). Its latitude of 22° 20′ 13″ N (22.3369 °N) is 1.0978°, which are 122 km (75.8 ml), south of the t\n[…]\nThe complex was relocated in its entirety in 1968 to higher ground to avoid it being submerged by Lake Nasser, the Aswan Dam reservoir. As part of the International Campaign to Save the Monuments of Nubia, an artificial hill was made from a domed structure to house the Abu Simbel Temples, under the supervision of a Polish archaeologist, Kazimierz Michałowski, from the Polish Centre of Mediterranean Archaeology University of Warsaw.\n[…]\nIt is difficult to determine, whether these statues are in a sitting or standing posture; their backs adhere to a portion of rock, which projects from the main body, and which may represent a part of a chair, or may be merely a column for support.\n[…]\nTwo international committees containing archaeologists, architects and engineers provided technical advice to the joint venture, while the Egyptian government interests was represented on site by their own resident engineer who was supported by archaeologists from the Department of Antiquities. By the spring of 1964 approximately 1,000 people were being employed by the project at Abu Simbel.\n[…]\nBased on the proposed construction schedule for the Aswan Dam it was necessary for the temples to be removed from their existing location by 15 August 1966 if they were not to be inundated by the raising lake level. As it was expected that by the winter of 1964 that the lake level would be 16 feet (4.9 m) higher than the base of the Small Temple and 4 feet (1.2 m) higher than the base of the Great Temple."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Nasser",
        "situacao": "ok",
        "texto": "Lake Nasser (Egyptian Arabic: بحيرة ناصر Boħeiret Nāṣer, Egyptian Arabic: [boˈħeiɾet ˈnɑːseɾ]) is a large reservoir in southern Egypt and northern Sudan. It was created by the construction of the Aswan High Dam and is one of the largest man-made lakes in the world. Before its creation, the project faced opposition from Sudan as it would encroach on land in the northern part of the country, where m\n[…]\nThe lake is named after President Gamal Abdel Nasser, the second President of Egypt. Strictly speaking, Lake Nasser (Egyptian Arabic: بحيرة ناصر) refers only to the much larger portion of the lake that is in Egyptian territory (83% of the total), with the Sudanese preferring to call their smaller body of water Lake Nubia (Egyptian Arabic: بحيرة النوبية Boħēret Nubeya, [boˈħeːɾet nʊˈbejjæ]).\n[…]\nBefore the construction of the Aswan High Dam and the consequent creation of Lake Nasser, the area that the lake now occupies was a significant part of the region of Nubia, home to several pharaohs of Egypt and empires such as that of the Kush.\n[…]\nThe construction of the Aswan High Dam began in 1960 at the behest of Lake Nasser's namesake and the second president of Egypt, Gamal Abdel Nasser. It was President Anwar Sadat who inaugurated the lake and dam in 1971. Finished in 1970, the Aswan High Dam across the Nile was built to replace the insufficient Aswan Low Dam built in 1902.\n[…]\nThe most famous of those that were rescued were temples at Abu Simbel which were broken down and relocated safely off the coast of Lake Nasser.\n[…]\nLake Nasser has become a popular tourist destination for recreational fishing, sightseeing cruises, and many relocated monuments saved from the initial filling of Lake Nasser, especially examples such as the Abu Simbel temples.\n[…]\nAniba (Nubia), a region flooded by Lake Nasser\n[…]\nNubia, region flooded by Lake Nasser\n[…]\nLake Nasser at Encyclopædia Britannica\n[…]\nAbu Simbel: The Temples That Moved"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abul-Simbel",
        "situacao": "ok",
        "texto": "Os templos de Abul-Simbel são dois enormes templos esculpidos na rocha em Abu Simbel (em árabe: أبو سمبل), uma vila na província de Assuão, Alto Egito, perto da fronteira com o Sudão. Eles estão situados na margem oeste do Lago Nasser, cerca de 230 km sudoeste de Assuão (cerca de 300 km de carro). O complexo faz parte do Patrimônio Mundial da UNESCO conhecido como \"Monumentos Núbios\", que vão de A\n[…]\nOs templos mais proeminentes são os templos talhados na rocha perto da moderna vila de Abu Simbel, na Segunda Catarata do Nilo, a fronteira entre a Baixa Núbia e a Alta Núbia. Existem dois templos, o Grande Templo, dedicado ao próprio Ramessés II, e o Pequeno Templo, dedicado à sua esposa principal, a Rainha Nefertari.\n[…]\nEm 1959, uma campanha internacional de doações para salvar os monumentos da Núbia começou: as relíquias mais meridionais desta antiga civilização humana estavam sob a ameaça da elevação das águas do Nilo que estava prestes a resultar da construção da Grande Barragem de Assuã.\n[…]\nEntre 1964 e 1968, todo o sítio arqueológico foi cuidadosamente cortado em grandes blocos (até 30 toneladas, com média de 20 toneladas), desmontado, içado e remontado em um novo local 65 metros mais alto e 200 metros atrás do rio, em um dos maiores desafios da engenharia arqueológica na história.\n[…]\nAlgumas estruturas foram até salvas debaixo das águas do Lago Nasser. Hoje, algumas centenas de turistas visitam os templos diariamente. Muitos visitantes também chegam de avião a um campo de aviação que foi construído especialmente para o complexo do templo, ou por estrada saindo de Assuã, a cidade mais próxima.\n[…]\nO santuário talhado na rocha e as duas câmaras laterais são conectados ao vestíbulo transversal e alinhados com o eixo do templo. Os baixos-relevos nas paredes laterais do pequeno santuário representam cenas de oferendas a vários deuses feitas pelo faraó ou pela rainha.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Rio Tietê",
      "descricao": "Rio do estado de São Paulo que nasce em Salesópolis, atravessa a capital paulista e deságua no rio Paraná."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O rio Tietê nasce a cerca de vinte quilômetros do litoral paulista, mas corre para o interior. Que barreira natural explica isso?",
    "resposta": "Serra do Mar",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_Tiet%C3%AA",
      "https://en.wikipedia.org/wiki/Tiet%C3%AA_River"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Tiet%C3%AA",
        "situacao": "ok",
        "texto": "Rio Tietê é um curso de água do estado brasileiro de São Paulo, sendo um afluente do rio Paraná. É conhecido nacionalmente por atravessar, ao longo de seus 1 100 quilômetros de extensão, praticamente todo o estado de São Paulo, de leste a oeste, além de marcar a geografia urbana da maior cidade do país, São Paulo. O Tietê nasce no município de Salesópolis, a 22 km do oceano Atlântico, e corre para\n[…]\nA sua nascente fica a 1 120 metros de altitude, na Serra do Mar, mas apesar de estar a apenas 22 quilômetros do litoral, as escarpas da serra obrigam-no a fluir em sentido inverso, atravessando o estado de sudeste a noroeste até desaguar no lago formado pela barragem de Jupiá, no rio Paraná, na divisa com o estado de Mato Grosso do Sul, entre os municípios de Itapura e Castilho, cerca de 50 km a jusante da cidade de Pereira Barreto.\n[…]\nAs nascentes ficam no Parque Nascentes do Rio Tietê, situado no município de Salesópolis. São cerca de 134 hectares, dos quais 9,6 já estão sob controle ambiental, protegendo as diversas nascentes que formam o rio. O parque localiza-se no bairro da Pedra Rajada, a dezessete quilômetros do centro de Salesópolis, junto à divisa com o município de Paraibuna. O acesso se dá pela SP-88 (Estrada das Pitas), onde há uma estrada vicinal de seis quilômetros em terra batida que leva à nascente.\n[…]\nAlto Tietê - começa nas nascentes do rio, em Salesópolis, e vai até a cidade de Pirapora de Bom Jesus. Tem aproximadamente 250 km de extensão e 350 metros de desnível. O Alto Tietê percorre uma região de grande aglomeração populacional, tem boa parte de suas condições naturais modificadas intensamente pela ação humana, mas ainda corre em corrente livre.\n[…]\nParque Ecológico do Tietê\n[…]\nPágina do Departamento de Águas e Energia Elétrica do Estado de São Paulo - departamento do governo estadual paulista responsável pelo combate às enchentes no rio Tietê"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tiet%C3%AA_River",
        "situacao": "ok",
        "texto": "The  Tietê River (Portuguese: Rio Tietê [tʃi.eˈte]) is a Brazilian river in the state of São Paulo.\n[…]\nThe headwaters are in the Serra do Mar, to the east of São Paulo.\n[…]\nAbout 450 kilometres (280 mi) of the Tietê River is fully navigable\n[…]\nThe pollution of the Tietê River did not start long ago. Even in the 1960s, the river still had fish in the stretch within the capital. However, the environmental degradation of the Tietê River started subtly in the 1920s with the construction of the Guarapiranga Reservoir, by the Canadian firm  São Paulo Tramway, Light and Power Company, for the later generation of electrical energy in the hydroelectric power stations Edgar de Souza and Rasgão, situated in Santana de Parnaíba.\n[…]\nEven in the 1920s and 1930s, the river was utilised for fishing and sports activities were famous as were the nautical races on the river. During this period boat race clubs were created along the length of the river, such as the Club of the Tietê races and the Espéria, clubs that exist till now.\n[…]\nSeveral species from the Tietê River are considered threatened and one of these, the catfish Heptapterus multiradiatus, is possibly already extinct.\n[…]\nAfter more than 16 years, the cleaning up of the River Tietê is still far short of desired levels, but encouraging progress has been made. At the end of the 1990s, the capacity of sewage treatment has been expanded: Sabesp has expanded the treatment capacity of the Wastewater Treatment Plant in Barueri, and the Seasons of the Sewage Treatment at San Miguel, to treat the rest of the sewage of the city of São Paulo.\n[…]\nJacaré-Guaçu River"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Rio Danúbio",
      "descricao": "Rio da Europa Central e Oriental que nasce na Alemanha e deságua no mar Negro."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que rio europeu inspirou o título da valsa mais famosa de Johann Strauss Filho?",
    "resposta": "Danúbio",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Blue_Danube"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Blue_Danube",
        "situacao": "ok",
        "texto": "\"The Blue Danube\" (German: An der schönen blauen Donau, lit. 'By the Beautiful Blue Danube', Op. 314) is a waltz by the Austrian composer Johann Strauss II, composed in 1866. Originally performed on 15 February 1867 at a concert of the Wiener Männergesang-Verein (Vienna Men's Choral Association), it has been one of the most consistently popular pieces of music in the classical repertoire.\n[…]\nAfter the original music was written, the words were added by the Choral Association's poet, Joseph Weyl. Strauss later added more music, and Weyl needed to change some of the words. Strauss adapted it into a purely orchestral version for the 1867 Paris World's Fair, and it became a great success in this form. The instrumental version is by far the most commonly performed today. An alternate text was written by Franz von Gernerth, \"Donau so blau\" (Danube so blue).\n[…]\nWhen Strauss's stepdaughter, Alice von Meyszner-Strauss, asked the composer Johannes Brahms to sign her autograph-fan, he wrote down the first bars of \"The Blue Danube\", but added \"Leider nicht von Johannes Brahms\" (\"Unfortunately not by Johannes Brahms\").\n[…]\nThe Blue Danube is scored for the following orchestra:\n[…]\nThe \"Beautiful Blue Danube\" was first written as a song for a carnival choir (for bass and tenor), with rather satirical lyrics (Austria having just lost a war with Prussia). The original title was also referring to a poem about the Danube in the poet Karl Isidor Beck's hometown, Baja in Hungary, and not in Vienna. Later Franz von Gernerth wrote new, more \"official-sounding\" lyrics:\n[…]\nJeroen H. C. Tempelman, \"By the Beautiful Blue Danube in New York\", Vienna Music, no. 101 (Winter 2012), pp. 28–31\n[…]\nThe Blue Danube: Scores at the International Music Score Library Project\n[…]\nSheet music for \"On the Beautiful Blue Danube\", John Church Company, 1868; via Ball State University"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dan%C3%BAbio_Azul",
        "situacao": "ok",
        "texto": "Johann Strauss II (Viena, 25 de outubro de 1825 — Viena, 3 de junho de 1899), também conhecido como Johann Strauss, Jr., o mais novo, o Filho (alemão: Sohn), Johann Baptist Strauss, foi um compositor austríaco de música leve, particularmente música de dança e operetas, bem como violinista. Compôs mais de 500 valsas, polcas, quadrilhas, e outros tipos de música de dança, além de várias operetas e u\n[…]\nEm sua vida, ele era conhecido como \"O Rei da Valsa\" e foi o grande responsável pela popularidade da valsa em Viena durante o século XIX. Algumas das obras mais famosas de Johann Strauss incluem \"O Danúbio Azul\", \"Kaiser-Walzer\" (Valsa do Imperador), \"Contos dos Bosques de Viena\", \"Frühlingsstimmen\" e o \"Tritsch-Tratsch-Polka\". Entre suas operetas, Die Fledermaus e Der Zigeunerbaron são as mais conhecidas.\n[…]\nStrauss era filho de Johann Strauss I e sua primeira esposa Maria Anna Streim. Dois irmãos mais novos, Josef e Eduard Strauss, também se tornaram compositores de música leve, embora nunca tenham sido tão conhecidos quanto o irmão.\n[…]\nStrauss Jr. finalmente superou a fama de seu pai e se tornou um dos compositores de valsa mais populares da época, frequentemente percorrendo a Áustria, Polônia e Alemanha junto à sua orquestra. Ele se candidatou para a posição de Diretor Musical dos Bailes da Corte Real e acabou sendo nomeado em 1863.\n[…]\nMais tarde, na década de 1870, Strauss e sua orquestra viajaram pelos Estados Unidos. Lá participou do Festival Boston, a convite do maestro Patrick Gilmore, e foi o maestro principal em um \"Concerto Colossal\" de mais de 1 000 artistas no evento \"Júbilo pela Paz Mundial e Festival Internacional Musical\", apresentando a sua valsa \"Danúbio Azul\", entre outras peças, com grande sucesso.\n[…]\nAn der schönen blauen Donau op. 314 Danúbio Azul (1867)\n[…]\nDonauweibchen op. 427 Donzelas do Danúbio (1887)\n[…]\nPai Johann Strauss I\n[…]\nJohann Strauss en Viena\n[…]\nJohann Strauss Gallery",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Rio Danúbio",
      "descricao": "Rio da Europa Central e Oriental que nasce na Alemanha e deságua no mar Negro."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O rio Danúbio passa por quantas capitais de países europeus?",
    "resposta": "Quatro",
    "distratores": [
      "Duas",
      "Três",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Danube"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Danube",
        "situacao": "ok",
        "texto": "The Danube ( DAN-yoob; see also other names) is a river in Europe, the second-longest after the Volga. It flows through Central and Southeastern Europe, from the Black Forest of Germany south through the Danube Delta in Romania into the Black Sea. A large and historically important river, it was once a frontier of the Roman Empire. In the 21st century, it connects ten European countries, running t\n[…]\nIn Latin, the Danube was variously known as Danubius, Danuvius, Ister or Hister. The Latin name is masculine, as are all its Slavic names, except Slovene (the name of the Rhine is also masculine in Latin, most of the Slavic languages, as well as in German). The German Donau (Early Modern German Donaw, Tonaw, Middle High German Tuonowe) is feminine, as it has been re-interpreted as containing the suffix -ouwe \"wetland\".\n[…]\nImportant tourist and natural spots along the Danube include the Wachau Valley, the Nationalpark Donau-Auen in Austria, Gemenc in Hungary, the Naturpark Obere Donau in Germany, Kopački rit in Croatia, Iron Gate in Serbia and Romania, the Danube Delta in Romania, and the Srebarna Nature Reserve in Bulgaria.\n[…]\nIn medieval Regensburg, with its maintained old town, stone bridge and cathedral, the Route of Emperors and Kings begins. It continues to Engelhartszell, with the only Trappist monastery in Austria. Further highlight-stops along the Danube, include the \"Schlögener Schlinge\", the city of Linz, which was European Capital of Culture in 2009 with its contemporary art richness, the Melk Abbey, the university city of Krems and the cosmopolitan city of Vienna.\n[…]\nOne of Claudio Magris's masterpieces is called Danube (ISBN 1-86046-823-3). The book, published in 1986, is a large cultural-historical essay, in which Magris travels the Danube from the first sources to the delta, tracing the European ethnic and cultural heritage, literary and ideological history.\n[…]\nDanube Monarchy"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Dan%C3%BAbio",
        "situacao": "ok",
        "texto": "O rio Danúbio é o segundo rio mais longo da Europa (depois do Volga) com uma extensão estimada entre 2 845 e 2 888 km, atravessando o continente de oeste a leste, desde sua nascente na Floresta Negra (Alemanha) até desaguar no mar Negro, no delta do Danúbio (Romênia).\n[…]\nO rio passa por quatro europeis (Viena, Bratislava, Budapeste e Belgrado) e constitui a fronteira natural de dez nações. Além das capitais nacionais, outras importantes cidades estão às suas margens: Ulm, Ingolstadt, Ratisbona, Linz, Vukovar, Novi Sad, Ruse, Brăila e Galați.\n[…]\nO Danúbio passa a 1,4 quilômetro a leste de Donaueschingen, na Alemanha, na confluência de dois córregos do Brigach e Breg. O refrão  Brigach und Breg bringen die Donau zuweg (\"O Brigach e o Breg colocam o Danúbio em seu caminho\") é equivalente ao provérbio francês \"pequenos riachos fazem os grandes rios.\"\n[…]\nApós isso, o rio passa por cima de quase 36 km no meio de um vale mais do Danúbio, o Wachau (listado como Património Mundial pela UNESCO), que se estende desde Durnstein para Krems. Já perto da fronteira com a Eslováquia, o Danúbio atravessa ainda a capital austríaca, Viena. A cidade tem o título de \"cidade rio Danúbio\", que divide esse estatuto com Belgrado e Budapeste. Para reduzir os efeitos negativos das inundações, o rio foi artificialmente regulado.\n[…]\nViena é também a sede da Comissão Internacional para a Protecção do Danúbio (Kommission Internacional zum Schutz der Donau, IKSD), fundada em 1998.\n[…]\nQuando entra na Eslováquia, o Danúbio marca a primeira fronteira austríaca a apenas 45 km de Viena, cruzando Bratislava, capital eslovaca. Por fim, ele ainda passa entre a fronteira da Eslováquia com Hungria.\n[…]\n«Acompanhe o curso do Danúbio pela história». (Podcast/áudio)\n[…]\n«Rio Danúbio - Bregquelle (de)»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Riacho do Ipiranga",
      "descricao": "Curso d'água da cidade de São Paulo às margens do qual Dom Pedro proclamou a Independência do Brasil."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que riacho paulista, cenário do grito da Independência, aparece logo no primeiro verso do Hino Nacional Brasileiro?",
    "resposta": "Ipiranga",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Riacho_do_Ipiranga",
      "https://pt.wikipedia.org/wiki/Hino_Nacional_Brasileiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Riacho_do_Ipiranga",
        "situacao": "ok",
        "texto": "Riacho do Ipiranga é um córrego localizado na cidade de São Paulo, no Brasil. Dá o seu nome ao bairro onde se situa, ao Monumento do Ipiranga e ao Museu do Ipiranga, todos localizados em suas circunvizinhanças. Junto às margens desse curso d'água é que simbolicamente foi declarada a Independência do Brasil pelo então príncipe e herdeiro do trono de Portugal, Dom Pedro I, em 7 de setembro de 1822.\n[…]\nEm termos geográficos, o Ipiranga é um corpo d'água relativamente curto em extensão e estreito em largura; não obstante, por ter sido o local onde se deu o evento simbólico mais importante da história do Brasil, as referências ao Ipiranga são recorrentes na cultura brasileira, seja na literatura, na pintura histórica ou até na música nacional, ficando o termo vinculado permanentemente ao episódio da independência no imaginário coletivo, a começar pelo Hino Nacional Brasileiro, um dos quatro símbolos constitucionais do Brasil, cujos versos iniciais aludem diretamente ao referido corpo d'água: \"Ouviram do Ipiranga as margens plácidas / De um povo heroico o brado retumbante, / E o sol da liberdade, em raios fúlgidos, / Brilhou no céu da pátria nesse instante.\"\n[…]\nTendo em vista este paradoxo, segundo a historiadora Cecília Helena Salles Oliveira, docente da Universidade de São Paulo, parece que \"a relação do brasileiro com o riacho do Ipiranga é 'dupla'\", ou seja: \"Por um lado, há o reconhecimento de que é um lugar diferente, porque estas paragens simbolizam o nascimento de uma nação. [...] Mas por outro lado, é profundo desalento, porque o riacho está muito sujo, recebe águas servidas; nas épocas de grandes chuvas, ele alaga, continua alagando\".\n[…]\nIpiranga (distrito de São Paulo)\n[…]\nIpiranga (página de desambiguação)\n[…]\nIndependência do Brasil\n[…]\nHino Nacional Brasileiro\n[…]\nMonumento do Ipiranga\n[…]\nMuseu do Ipiranga"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hino_Nacional_Brasileiro",
        "situacao": "ok",
        "texto": "O Hino Nacional Brasileiro é um dos quatro símbolos oficiais da República Federativa do Brasil, conforme estabelece o art. 13, § 1.º, da Constituição do Brasil. Os outros símbolos da República são a Bandeira Nacional, as Armas Nacionais e o Selo Nacional. Tem letra de Joaquim Osório Duque-Estrada (1870–1927) e música de Francisco Manuel da Silva (1795–1865).\n[…]\nIpiranga — É o riacho junto ao qual D. Pedro I proclamou a Independência;\n[…]\nA primeira gravação brasileira do Hino Nacional foi feita em 1902. Instrumental, foi interpretada pela Banda da Casa Edison e lançada sob o disco Zon-o-phone 10187. No ano seguinte, foi feita outra gravação, também pela Banda da Casa Edison, e lançada no disco Zon-o-phone X-1051.\n[…]\nEm 1908 ou 1909, foi feita a primeira gravação vocal do Hino Nacional, mas surpreendentemente, não por um brasileiro; e sim por um cantor europeu de identidade desconhecida (identificado apenas como A. de Souza, um possível pseudônimo) para a companhia francesa Aérophone.\n[…]\nEm 1917 o cantor Vicente Celestino foi o primeiro brasileiro a gravar o Hino Nacional, tendo por acompanhamento a Banda do Batalhão Naval e, nas passagens de refrão, também por um coro; esta versão, em si bemol, deu um tom de difícil interpretação pelas pessoas; a Banda deu andamento mais lento e solene nas passagens do cantor, enquanto mantinha o estilo tradicional (mais rápido e vibrante) apenas durante os refrões - o que veio a motivar apreciação oficial por uma comissão de reavaliação do Hino em 1936 e, durante algum tempo, insatisfação por parte das bandas militares da época; a despeito disso essa versão foi oficializada em 1922.\n[…]\nIpiranga\n[…]\nHino da Independência do Brasil\n[…]\nHino Nacional do BrasilArquivo em mp3.\n[…]\nHino Nacional BrasileiroArquivo *.wav.\n[…]\nLei nº 5 700, de 1º de setembro de 1971Lei que trata dos Símbolos Nacionais, entre eles o Hino Nacional."
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Rio Niágara",
      "descricao": "Rio curto da fronteira entre Estados Unidos e Canadá, onde ficam as Cataratas do Niágara."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "As Cataratas do Niágara ficam no rio que liga o lago Erie a qual outro dos Grandes Lagos?",
    "resposta": "Lago Ontário",
    "fonte": [
      "https://en.wikipedia.org/wiki/Niagara_River"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Niagara_River",
        "situacao": "ok",
        "texto": "The Niagara River ( ny-AGG-ər-ə, -⁠grə) flows north from Lake Erie to Lake Ontario, forming part of the border between Ontario, Canada, to the west, and New York, United States, to the east. The river, occasionally described as a strait, is approximately 58 kilometres (36 miles) long and is known for the Niagara Falls. Over the past 12,000 years, the falls have moved roughly 11 kilometres (6.8 mi)\n[…]\nThe Welland Canals used the Welland River to connect to the Niagara River south of the falls, enabling water traffic to safely re-enter the river and continue to Lake Erie.\n[…]\nIn 1781, the Niagara Purchase was signed, involving a 6.5-kilometre-wide (4.0-mile) strip of land bordering the west bank of the Niagara River, connecting Lake Erie and Lake Ontario.\n[…]\nOn the Canadian side of the river the provincial agency Niagara Parks Commission maintains all of the shoreline property, including Fort Erie, except the sites of Fort George (a National Historic Site maintained federally by Parks Canada), as a public greenspace and environmental heritage.\n[…]\nUnited States Coast Guard Fort Niagara Station was once a United States Army post. There are no Canadian Coast Guard posts along the river. Fort Mississauga, Fort George and Fort Erie are former British and Canadian military forts (last used 1953, 1965 and 1923 respectively) and are now parks.\n[…]\nOn the Canadian side the Niagara Parkway travels along the River from Lake Ontario to Lake Erie.\n[…]\nList of Ontario rivers\n[…]\nTiplin, Albert H.; Seibel, George A. and Seibel, Olive M. (1988) Our romantic Niagara: a geological history of the river and the falls Niagara Falls Heritage Foundation, Niagara Falls, Ontario, Canada, ISBN 0-9690457-2-7\n[…]\nViews of the Niagara River Niagara Falls Public Library (Ontario)\n[…]\nDigital Images of the Islands of the Niagara River Niagara Falls Public Library (Ontario)\n[…]\n\"Niagara River\" from The Canadian Encyclopedia."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Ni%C3%A1gara",
        "situacao": "ok",
        "texto": "O rio Niágara é um rio que corre do Lago Erie até o Lago Ontário, num sentido de sul (montante) a norte (jusante). O rio age como uma fronteira natural entre o Canadá (província de Ontário), a oeste, e os Estados Unidos (Estado de Nova Iorque), a leste. No rio encontram-se as muito conhecidas Cataratas do Niágara.\n[…]\nO Niagara Gorge se estende a jusante das Cataratas e inclui o Niagara Whirlpool e outra seção de corredeiras.\n[…]\nAs usinas de energia no rio incluem as Centrais Hidrelétricas Sir Adam Beck (construídas em 1922 e 1954) no lado canadense, e a Usina Elétrica Robert Moses Niagara (construída em 1961) no lado americano. Juntos, eles geram 4,4 gigawatts de eletricidade. O International Control Works, construído em 1954, regula o fluxo do rio. Os navios nos Grandes Lagos usam o Welland Canal, parte do Saint Lawrence Seaway, no lado canadense do rio, para contornar as Cataratas do Niágara.\n[…]\nO rio Niágara e seus afluentes, o riacho Tonawanda e o rio Welland, faziam parte da última seção do canal Erie e do canal Welland. Depois de deixar Lockport, Nova York, o Canal Erie segue para o sudoeste até entrar no Tonawanda Creek. Depois de entrar no rio Niágara, as embarcações seguem para o sul até a eclusa final, onde uma pequena seção do canal permite que os barcos evitem as turbulentas águas rasas na entrada do rio e entrem no Lago Erie.\n[…]\nOs canais de Welland usaram o rio Welland como uma conexão com o rio Niagara ao sul das cataratas, permitindo que o tráfego de água reentrasse com segurança no rio Niagara e seguisse para o lago Erie.==Notas==\n[…]\nVistas do Rio Niágara Niagara Falls Public Library (Ontario)\n[…]\nImagens Digitais das Ilhas do Rio Niágar Niagara Falls Public Library (Ontario)\n[…]\nCataratas do Niágara As Ilhas Uma História das Ilhas do Rio Niágara\n[…]\n\"Niagara River\" da The Canadian Encyclopedia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Rio Paraguai",
      "descricao": "Rio sul-americano que nasce em Mato Grosso, atravessa o Pantanal e deságua no rio Paraná."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que rio, o principal do Pantanal, tem o mesmo nome de um país vizinho do Brasil?",
    "resposta": "Rio Paraguai",
    "fonte": [
      "https://en.wikipedia.org/wiki/Paraguay_River",
      "https://pt.wikipedia.org/wiki/Rio_Paraguai"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paraguay_River",
        "situacao": "ok",
        "texto": "The Paraguay River (Ysyry Paraguái in Guarani, Rio Paraguai in Portuguese, Río Paraguay in Spanish) is a major river in south-central South America, running through Brazil and Paraguay and forming parts of the Paraguay-Argentina, Brazil-Bolivia, and Brazil-Paraguay borders. It flows about 2,621 kilometres (1,629 mi) from its headwaters in the Brazilian state of Mato Grosso to its confluence with t\n[…]\nThe original inhabitants of the upper Paraguay River were the Guarani peoples.\n[…]\nThe Paraguay River is the primary waterway of the 147,629-square-kilometre (57,000 sq mi) Pantanal wetlands of southern Brazil, northern Paraguay and parts of Bolivia. The Pantanal is the world's largest tropical wetland and is largely dependent upon waters provided by the Paraguay River.\n[…]\nStudies indicated that the proposed river engineering of the Paraguay would have a devastating impact on the Pantanal wetlands. An effort by the Rios Vivos coalition to educate people on the effects of the project was successful in delaying the project, and the nations involved agreed to reformulate their plan. The final plan is still uncertain, along with the effect it will have on the Pantanal and the ecology of the entire Río de la Plata basin.\n[…]\nThe typical pH of the Paraguay River is 5.8—7.4 in the upper part (defined as the section before the inflow of the first non-Pantanal tributary, the Apa River) and 6.3—7.9 in the lower part.\n[…]\nThe peak of the flood season in the Paraguay River (measured at Corumbá) is delayed 4–6 months compared to the peak of the rainy season due to the slow passage of water through the Pantanal wetlands. There are significant temperature variations depending on the season.\n[…]\nThe upper part of the Paraguay River is warmer than the lower and generally its temperature does not fall below 22.5 °C (72.5 °F), although some upper Paraguay tributaries may fall below this.\n[…]\nParaguayan jaguar"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Paraguai",
        "situacao": "ok",
        "texto": "O rio Paraguai (em castelhano:  Río Paraguay; em guarani:  Ysyry Paraguái) é um curso de água da América do Sul que percorre Brasil, Bolívia, Paraguai e Argentina.\n[…]\nOs principais afluentes do Rio Paraguai são os rios Cabaçal, Jauru e Sepotuba na margem direita, e os rios Cuiabá, Taquari, Negro, Miranda e Apa na margem esquerda.\n[…]\nO Rio Paraguai possui importância e relevância desde a habitação por povos indígenas do seu entorno, formando uma grande sociodiversidade étnica. No século XVI, a Coroa espanhola inicia a fundação de províncias na região, mesmo com a dificuldade de navegação pelo seu despreparo com rios menores. No fim do século, inicia-se a fundação de cidades. Os espanhois escravizavam e dizimavam os indígenas da região.\n[…]\nOs limites da região só são definidos com os tratados de Madri e de Santo Ildefonso. Portugeses e espanhóis disputavam a região do Mato Grosso. Jesuítas espanhóis fundaram missões entre o Rio Paraguai e o Rio Paraná. Disputas políticas entre Paraguai e Brasil a respeito do uso do rio e da cobrança de impostos pelo seu uso, entre outras discordâncias, culminaram na Guerra do Paraguai.\n[…]\nAdministração da Hidrovia do Paraguai\n[…]\nZumak, André; Larcher, Letícia (2021). «O contexto histórico da BAP». Bacia do Alto Paraguai : uma viagem no tempo. Brasília: Instituto Brasileiro de Informação em Ciência e Tecnologia. ISBN 978-65-89167-35-8\n[…]\nZumak, André; Tolone, Wagner; Larcher, Letícia (2021). «Caracterização geográfica da BAP e do bioma Pantanal». Bacia do Alto Paraguai : uma viagem no tempo. Brasília: Instituto Brasileiro de Informação em Ciência e Tecnologia. ISBN 978-65-89167-35-8"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Rio Jordão",
      "descricao": "Rio do Oriente Médio que corre do mar da Galileia até o Mar Morto."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que rio, onde Jesus teria sido batizado segundo os Evangelhos, liga o mar da Galileia ao Mar Morto?",
    "resposta": "Rio Jordão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jordan_River"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jordan_River",
        "situacao": "ok",
        "texto": "The Jordan River or River Jordan (Arabic: نَهْر الْأُرْدُنّ, Nahr al-ʾUrdunn; Hebrew: נְהַר הַיַּרְדֵּן, Nəhar hayYardēn), also known as Nahr Al-Sharieat (Arabic: نهر الشريعة), is a 251-kilometre-long (156 mi) endorheic river in the Levant that flows roughly north to south through the Sea of Galilee and drains to the Dead Sea. The river passes by or through Jordan, Syria, Israel, and Palestine.\n[…]\nThe New Testament speaks several times about Jesus crossing the Jordan during his ministry (Matthew 19:1; Mark 10:1) and of believers crossing the Jordan to come hear him preach and to be healed of their diseases (Matthew 4:25; Mark 3:7–8). When his enemies sought to capture him, Jesus took refuge at the river in the place John had first baptised (John 10:39–40).\n[…]\nBecause of the baptism of Jesus, water from the Jordan is employed for the christening of children in several Christian royal houses, such as the cases of Prince George of Wales, Simeon of Bulgaria and James Ogilvy. Earlier, On 15 May 1717, the future empress, Maria Theresa, was baptised in Vienna by the Papal Nuntius Giorgio Spinola, representing Pope Clement XI, with baptismal water containing a few drops from the River Jordan.\n[…]\nThe Jordan River holds significant status in Islam as part of a \"blessed land\" (Ardh Mubaraka) referenced in the Quran, associated with prophets like Musa (Moses), Isa (Jesus), and Yaqub (Jacob). It is a site of historical battles, pilgrimage to the tombs of Prophet Muhammad’s companions, and is considered a sacred location.\n[…]\nList of rivers of Jordan\n[…]\n\"Map of the River Jordan and Dead Sea: And the Route of the Party Under the Command of Lieutenant W.F. Lynch, United States Navy\" is a map from the mid-19th century of the River Jordan and Dead Sea, made under the command of William F. Lynch.\n[…]\n\"The Jordan River\" in which John the Baptist baptized his cousin Jesus of Nazareth. (Yardenit.com)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Jord%C3%A3o",
        "situacao": "ok",
        "texto": "O rio Jordão (em hebraico:  נהר הירדן, nehar hayarden; em árabe: nahr al-urdun) é um rio do Médio Oriente com cerca de 250 km de extensão e que corre no sentido norte-sul. O rio Jordão tem grande importância religiosa, formando o talvegue do Vale do Jordão. A Jordânia faz fronteira com o rio a leste, enquanto a Palestina (Cisjordânia) e Israel fazem a oeste. Jordão significa aquele que desce ou ta\n[…]\nNasce no norte de Israel, na encosta do monte Hermon, na zona de Sde Nehemia, atravessa os lago Hula e segue depois até ao mar da Galileia, para desaguar no Mar Morto.\n[…]\nAtualmente, o Vale do Jordão constitui um significativo trecho da fronteira Israel-Jordânia e Palestina-Jordânia, constituindo um terço do território cisjordaniano. No seu trecho final, este rio corre entre margens desérticas.\n[…]\nO rio Jordão foi cenário para diversas histórias da narrativa bíblica. Dado o grande alcance das religiões abraâmicas no mundo, o rio Jordão assume grande importância histórico-cultural. Segundo a narrativa bíblica, os israelitas atravessaram o rio a seco, segundo o Livro de Josué (3:17). Também foi atravessado a seco pelos profetas Elias e Eliseu.\n[…]\nPor intermédio de Eliseu, segundo a Bíblia Hebraica, houve dois milagres no Jordão: a cura de Naamã, por ter mergulhado sete vezes no rio; e fez flutuar a cabeça de ferro de um machado (II Reis 5:14; II Reis 6:6). De acordo com os Evangelhos, São João Batista desenvolveu a sua pregação nas proximidades do Jordão, onde Jesus foi batizado e não terá sido longe daí que decorreu o período das suas tentações. Atualmente, o rio Jordão é uma das maiores fontes de água de Israel, Palestina e Jordânia.\n[…]\nVale do Jordão\n[…]\n\"Mapa do rio Jordão e do mar Morto: E a rota do grupo sob o comando do Tenente-WF Lynch, Marinha dos Estados Unidos\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Canal Casiquiare",
      "descricao": "Canal natural no sul da Venezuela que liga o rio Orinoco ao rio Negro, da bacia amazônica."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O canal Casiquiare, na Venezuela, liga naturalmente a bacia do Amazonas à de qual outro grande rio?",
    "resposta": "Orinoco",
    "distratores": [
      "Magdalena",
      "Paraná",
      "Essequibo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Casiquiare_canal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Casiquiare_canal",
        "situacao": "ok",
        "texto": "The Casiquiare river or canal (Spanish pronunciation: [kasiˈkjaɾe]) is a natural distributary of the upper Orinoco flowing southward into the Rio Negro in Venezuela. As such, it forms a unique natural canal between the Orinoco and Amazon river systems. It is the world's largest river of the kind that links two major river systems, a so-called bifurcation. The area forms a water divide, more dramat\n[…]\nThe Casiquiare is not a sluggish canal on a flat tableland but a rapid river which, if its upper waters had not found contact with the Orinoco, perhaps by cutting back, would belong entirely to the Rio Negro branch of the Amazon. To the west of the Casiquiare, there is a much shorter and easier portage between the Orinoco and Amazon basins, called the isthmus of Pimichin, which is reached by ascending the Temi branch of the Atabapo River, an affluent of the Orinoco.\n[…]\nThe Casiquiare canal – Orinoco River hydrographic divide is a representation of the water divide that delineates the separation between the Orinoco Basin and the Amazon Basin. (The Orinoco Basin flows west–north–northeast into the Caribbean; the Amazon Basin flows east into the western Atlantic in the northeast of Brazil.)\n[…]\nEssentially the river divide is a west-flowing, upriver section of the Orinoco with an outflow to the south into the Amazon Basin. This named outflow is the Casiquiare canal, which, as it heads downstream (southerly), picks up speed and also accumulates water volume. The greatest manifestation of the divide is during floods.\n[…]\nThe water divide is a \"south-bank Orinoco River strip\" at the exit point of the Orinoco, also the origin of the Casiquiare canal. However, during the Orinoco's flood stage, that single, simply defined \"origin of the canal\" is turned into a region, and an entire strip along the southern bank of the Orinoco River.\n[…]\nCrypturellus casiquiare, the barred tinamou."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canal_do_Cassiquiare",
        "situacao": "ok",
        "texto": "O canal do Cassiquiare, também designado por canal Casiquiare ou rio Cachequerique, é um canal natural e bifurcação fluvial com 326 km de comprimento que se desenvolve entre a margem esquerda do rio Orinoco, na Venezuela, e a margem esquerda do rio Negro, afluente do rio Amazonas, na fronteira entre a Venezuela e a Colômbia.\n[…]\nO canal é uma ocorrência geográfica raríssima, resultante da captura fluvial de uma bifurcação de outro curso de água, a qual faz da região do estado brasileiro do Amazonas ao nordeste dos rios Solimões e Amazonas, os estados brasileiros do Amapá e Roraima, a parte da Venezuela a leste do Orinoco e as três Guianas uma única e gigantesca ilha marítimo-fluvial, a Ilha das Guianas, tecnicamente a segunda maior ilha do mundo atrás somente da Groenlândia.\n[…]\nA comunicação das duas bacias através do canal natural do Cassiquiare torna possível a navegação fluvial entre o Brasil e a Venezuela, no trecho São Gabriel da Cachoeira-Puerto Ayacucho, podendo-se obter, nessas localidades, respectivamente, conexão para o delta do Amazonas, em terras brasileiras, ou para o delta do Orinoco, em terras venezuelanas.\n[…]\nOrellana, apesar de ter sido o primeiro europeu a navegar do Orinoco ao Amazonas, evidentemente não se apercebeu da incomum configuração do canal Cassiquiare.\n[…]\nMais tarde, sir Walter Raleigh, na sua expedição de 1596 pelo Orinoco em busca do El Dorado, recolheu informações entre os nativos sobre a interligação, que atribuiu à existência de um grande lago que poderia ser ou não o proprio Rio Amazonas, informação que disseminou nos seus relatos de viagem e acabou também por se difundir pela generalidades das publicações geográficas da época que também sugeriam a existência de outra ligação da bacia do Prata com o Amazonas.\n[…]\nConexão do canal com a bacia do Orinoco.\n[…]\nO canal todo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Rio São Francisco",
      "descricao": "Rio brasileiro que nasce na Serra da Canastra e deságua no Atlântico entre Alagoas e Sergipe."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que rio separa as cidades vizinhas de Petrolina, em Pernambuco, e Juazeiro, na Bahia?",
    "resposta": "Rio São Francisco",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_S%C3%A3o_Francisco",
      "https://en.wikipedia.org/wiki/Petrolina"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_S%C3%A3o_Francisco",
        "situacao": "ok",
        "texto": "O rio São Francisco (popularmente conhecido por Velho Chico) é um curso de água inteiramente em território brasileiro, sendo o quarto maior rio do Brasil e da América do Sul. Passa por cinco estados e 521 municípios do país, iniciando seu percurso no estado de Minas Gerais, atravessando a Bahia, determinando os limites interestaduais entre ela e Pernambuco e entre Sergipe e Alagoas para, por fim, \n[…]\nAs partes extremas superior e inferior da bacia apresentam bons índices pluviométricos, enquanto seus cursos médio e submédio atravessam áreas de clima bastante seco. Assim, cerca de 75% do deflúvio do São Francisco é gerado em Minas Gerais, cuja área da bacia, ali inserida, é de apenas 37% da área total. A área compreendida entre a fronteira Minas Gerais–Bahia e a cidade de Juazeiro (na Bahia), representa 45% do vale e contribui com apenas 20% do deflúvio anual.\n[…]\nO maior deles, entre Pirapora e Juazeiro–Petrolina, com 1 371 quilômetros de extensão, pode ser analisado em três subpartes, devido a algumas características distintas de seus percursos. O primeiro subtrecho, que se estende de Pirapora até a extremidade superior do reservatório de Sobradinho, próximo à cidade de Xique-Xique, tem 1 074 quilômetros de extensão. No médio São Francisco, a navegação é exercida pela FRANAVE, com frota de comboios adequada às atuais condições da via.\n[…]\nEm Paulo Afonso na Bahia existe um museu que reúne a biota do rio chamada \"Coleção de Referência do Rio São Francisco\", em Petrolina o Instituto Federal do Sertão Pernambucano também possui uma coleção exposta na sua sede.\n[…]\nO rio São Francisco é também o maior responsável pela prosperidade de suas áreas ribeirinhas compreendidas pela denominação de Vale do São Francisco, onde cidades experimentaram maior crescimento e progresso como Petrolina, Pernambuco, Juazeiro na Bahia devido a agricultura irrigada.\n[…]\nO São Francisco e seus números"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Petrolina",
        "situacao": "ok",
        "texto": "Petrolina (Central northeastern portuguese pronunciation: [pɛtɾɔˈlinɐ]) is a municipality located in the southernmost point of the state of Pernambuco, in Northeast Brazil, in the valley of the São Francisco River. The population was 418,444 in 2025, and the total area is 4,756.8 km2, making it the largest municipality in the state by area. The municipality is closely integrated with Juazeiro, Bah\n[…]\nFormerly called Passagem de Juazeiro (lit. 'Passage of Juazeiro'), there is no single story explaining the origin of the name Petrolina. One theory is that the name was in tribute of Brazilian emperor Pedro I and his consort Leopoldina, while another asserts that Petrolina was named for a 'beautiful rock' (Portuguese: Pedra linda) found on the banks of the São Francisco.\n[…]\nFor many years the economy of the Valley of the São Francisco was based on extensive cattle ranching and subsistence farming.\n[…]\nPetrolina is situated on the left (northern) bank of the São Francisco River, in the interior semi-arid Sertão subregion, at an elevation of 376 m.\n[…]\nPetrolina and Juazeiro, in Bahia, are part of a metropolitan area called a \"Region of Integrated Development\" (Brazilian Portuguese: Região Administrativa Integrada de Desenvolvimento), with a population of 686,410 in 2010.\n[…]\nAs of 2014, there were 185 elementary schools, and 56 high schools. Petrolina hosts campuses of the Federal University of Vale do São Francisco and the University of Pernambuco, as well as private universities.\n[…]\nPetrolina is on national highway BR-407, connecting Feira de Santana, near Salvador, and Picos located in the state of Piauí. Juazeiro, across the São Francisco River, is served by the Ferrovia Centro-Atlântica rail line, which is used only for freight. Petrolina Airport serves mainly regional flights (with flights to Recife, São Paulo, and Salvador) and international cargo flights of fresh fruit."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Rio São Francisco",
      "descricao": "Rio brasileiro que nasce na Serra da Canastra e deságua no Atlântico entre Alagoas e Sergipe."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O rio São Francisco, o Velho Chico, nasce na Serra da Canastra, em qual estado brasileiro?",
    "resposta": "Minas Gerais",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_S%C3%A3o_Francisco",
      "https://en.wikipedia.org/wiki/S%C3%A3o_Francisco_River"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_S%C3%A3o_Francisco",
        "situacao": "ok",
        "texto": "O rio São Francisco (popularmente conhecido por Velho Chico) é um curso de água inteiramente em território brasileiro, sendo o quarto maior rio do Brasil e da América do Sul. Passa por cinco estados e 521 municípios do país, iniciando seu percurso no estado de Minas Gerais, atravessando a Bahia, determinando os limites interestaduais entre ela e Pernambuco e entre Sergipe e Alagoas para, por fim, \n[…]\nAs partes extremas superior e inferior da bacia apresentam bons índices pluviométricos, enquanto seus cursos médio e submédio atravessam áreas de clima bastante seco. Assim, cerca de 75% do deflúvio do São Francisco é gerado em Minas Gerais, cuja área da bacia, ali inserida, é de apenas 37% da área total. A área compreendida entre a fronteira Minas Gerais–Bahia e a cidade de Juazeiro (na Bahia), representa 45% do vale e contribui com apenas 20% do deflúvio anual.\n[…]\nA alcunha «Rio da Integração Nacional» se deve às entradas e bandeiras que nos séculos XVII e XVIII usaram-no como rota para penetrar no interior. Outro nome, «rio dos Currais», se deve a ter servido de trilha para fazer descer o gado do Nordeste à região de Minas Gerais, sobretudo no início do século XVIII, quando se achava ali o ouro que fez afluir milhões de pessoas à terra, fazendo a fortuna de muita gente e, afinal, integrando a região Nordeste às regiões Centro-Oeste e Sudeste.\n[…]\nDevido à severa estiagem na Região Sudeste do Brasil em 2014, em 23 de setembro de 2014 o diretor do Parque Nacional da Serra da Canastra informou em entrevista que a principal nascente do rio São Francisco, localizada em São Roque de Minas, secou.\n[…]\nA Adutora do Algodão (oficialmente Sistema Integrado de Abastecimento de Água do Algodão - SIAA do Algodão), é o sistema de fornecimento hídrico a municípios do Alto Sertão do estado brasileiro da Bahia e que integram a sub-bacia do rio das Rãs a partir da captação de água no rio São Francisco."
      },
      {
        "url": "https://en.wikipedia.org/wiki/S%C3%A3o_Francisco_River",
        "situacao": "ok",
        "texto": "The São Francisco River (Portuguese: Rio São Francisco, pronounced [ˈʁiu sɐ̃w fɾɐ̃ˈsisku]), known in English as the San Francisco River, is a large river in Brazil. With a length of 2,914 kilometres (1,811 mi), it is the longest river that runs entirely in Brazilian territory, and the fourth longest in South America and overall in Brazil (after the Amazon, the Paraná and the Madeira). It is also l\n[…]\nThe São Francisco originates in the Canastra mountain range in the central-western part of the state of Minas Gerais. It runs generally north in the states of Minas Gerais and Bahia, behind the coastal range, draining an area of over 630,000 square kilometres (240,000 sq mi), before turning east to form the border between Bahia on the right bank and the states of Pernambuco and Alagoas on the left one.\n[…]\nThe high part, from its source to Pirapora in Minas Gerais\n[…]\nUrucuia River\n[…]\nCorrente River\n[…]\nGrande River\n[…]\nThe area crossed by the river is vast and sparsely populated, but several towns lie on the river. Beginning in Minas Gerais, the river passes by Pirapora, São Francisco, Januária, Bom Jesus da Lapa, the twin cities of Petrolina and Juazeiro, and Paulo Afonso. The hinterland is arid and underpopulated, so most of the towns are small and isolated. Only Petrolina and Juazeiro have grown into medium-sized cities and have become prosperous because of fruit production based on irrigation.\n[…]\nThe river's hydroelectric potential started being harnessed in 1955, when the Paulo Afonso dam was built between Bahia and Alagoas. The Paulo Afonso plant now provides electric power for the whole of Northeastern Brazil. Four other large hydroelectric plants were later built: Três Marias in Minas Gerais, built in 1961, Sobradinho in Bahia, built in 1977, Luiz Gonzaga (Itaparica), between Bahia and Pernambuco, in 1988 and the Xingó near Piranhas in 1994.\n[…]\nOrganization of American States' document on the river"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Lago Titicaca",
      "descricao": "Grande lago de altitude nos Andes, na fronteira entre o Peru e a Bolívia."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Nos Andes, o lago Titicaca é dividido entre a Bolívia e qual outro país?",
    "resposta": "Peru",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lake_Titicaca"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Titicaca",
        "situacao": "ok",
        "texto": "Lake Titicaca (; Spanish: Lago Titicaca [ˈlaɣo titiˈkaka]; Quechua: Titiqaqa and Aymara: Titiqaqa) is a large lake in the Andes mountains on the border of Bolivia and Peru. It is often called the highest navigable lake in the world. It is often listed as a freshwater lake, though its waters are slightly brackish. Titicaca is the largest lake in South America, both in terms of the volume of water a\n[…]\nThe lake is located at the northern end of the endorheic Altiplano basin high in the Andes on the border of Peru and Bolivia. The western part of the lake lies within the Puno Region of Peru, and the eastern side is located in the Bolivian La Paz Department.\n[…]\nLocally, the lake goes by several names. The southeast quarter of the lake is separate from the main body (connected only by the Strait of Tiquina) and the Bolivians call it Lago Huiñaymarca (also Wiñay Marka, which in Aymara means the Eternal City) and the larger part Lago Chucuito. The large lake also is occasionally referred to as Lago Mayor, and the small lake as Lago Menor. In Peru, these smaller and larger parts are referred to as Lago Pequeño and Lago Grande, respectively.\n[…]\nThe lake holds large populations of water birds and was designated as a Ramsar Site on August 26, 1998. It has also been designated an Important Bird Area (IBA), in both Bolivia and Peru, by BirdLife International because it supports significant populations of many bird species. Several threatened species such as the huge Titicaca water frog and the flightless Titicaca grebe are largely or entirely restricted to the lake.\n[…]\nSuriqui Island lies in the Bolivian part of lake Titicaca (in the southeastern part also known as lake Wiñaymarka).\n[…]\nTourism in Peru\n[…]\nLake Titicaca – The Highest Navigable Lake in the World\n[…]\nManagement issues in the Lake Titicaca and Lake Poopo system: Importance of developing a water budget\n[…]\nPeru Cultural Society – Lake Titicaca History"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lago_Titicaca",
        "situacao": "ok",
        "texto": "Titicaca (na grafia hispanizada) ou Titiqaqa (quéchua) é um lago nos Andes, na fronteira entre o Peru e a Bolívia. Em volume de água, é o maior lago da América do Sul. O Lago de Maracaibo, na Venezuela, tem uma área de superfície maior, mas é considerado uma grande baía salobra devido à sua ligação direta com o oceano.\n[…]\nO lago tem cerca de 8300 km² e situando-se a 3821 metros acima do nível do mar, é o lago comercialmente navegável mais alto do mundo e o segundo em extensão da América Latina, superado apenas pelo Lago de Maracaibo, na Venezuela. Localizado no altiplano dos Andes, na fronteira do Peru e da Bolívia, tem uma profundidade média de 140 a 180 m, e uma profundidade máxima de 280 m. Sua extensão e largura máximas são 190 km e 80 km, respectivamente.\n[…]\nNo Titicaca, há populações vivendo nos Uros, nove ilhas artificiais. Essas ilhas tornaram-se uma grande atração turística no Peru, trazendo excursões da cidade de Puno, no Peru. Outra ilha, Taquile, é outra grande atração turística, apresentando uma comunidade indígena. Os habitantes de Taquile são conhecidos pelos seus produtos têxteis feitos a mão, considerados entre as manufaturas de melhor qualidade do Peru.\n[…]\nA origem do nome Titicaca é desconhecida; foi traduzido como \"Pedra do Puma\", combinando palavras da língua local Quíchua e Aimará. Localmente, o lago é conhecido sob diversos nomes. Como a parte sudeste do lago é separada do resto do lago pelo estreito de Tiquina, os bolivianos chamam essa pequena parte de Lago Huinaymarca e a parte maior de Lago Chucuito. No Peru, essas partes pequena e grande são conhecidas como Lago Pequeño e Lago Grande, respectivamente.\n[…]\nManagement issues in the Lake Titicaca and Lake Poopo system: Importance of developing a water budget\n[…]\nSociedade Cultural Peruana - História do Lago Titicaca",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Lago Titicaca",
      "descricao": "Grande lago de altitude nos Andes, na fronteira entre o Peru e a Bolívia."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No lago Titicaca, o povo uro vive em ilhas flutuantes feitas de qual planta?",
    "resposta": "Totora",
    "distratores": [
      "Bambu",
      "Folha de palmeira",
      "Madeira de balsa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Uru_people",
      "https://en.wikipedia.org/wiki/Lake_Titicaca"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uru_people",
        "situacao": "ok",
        "texto": "The Uru or Uros (Uru: Qhas Qut suñi) are an indigenous people of Bolivia and Peru. They live on a still-growing group of about 120 self-fashioned floating islands in Lake Titicaca near Puno. They form three main groups: the Uru-Chipaya, Uru-Murato, and Uru-Iruito. The Uru-Iruito still inhabit the Bolivian side of Lake Titicaca and the Desaguadero River.\n[…]\nThe Uru use bundles of dried Totora reeds to make reed boats (balsas), and to make the islands themselves.\n[…]\nThe islets are made of multiple natural layers harvested in Lake Titicaca. The base is made of large pallets of floating totora roots, which are tied together with ropes and covered in multiple layers of totora reeds. These dense roots that the plants develop and interweave form a natural layer called khili (about one to two meters thick), which are the main flotation and stability devices of the islands.\n[…]\nIf it is hot outside, they sometimes roll the white part of the reed in their hands and split it open, placing the reed on their forehead. In this form, it is very cool to the touch. The white part of the reed is also used to help ease alcohol-related hangovers. The totora reeds are a primary source of food. The Uru also make a reed flower tea.\n[…]\nLocal residents fish ispi, carachi and catfish. Trout was introduced to the lake from Canada in 1940, and kingfish was introduced from Argentina. Uru also hunt birds such as seagulls, ducks and flamingos, and graze their cattle on the islets. They also run crafts stalls aimed at the numerous tourists who visit ten of the islands each year. They barter totora reeds on the mainland in Puno to get products they need, such as quinoa and other foods."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Titicaca",
        "situacao": "ok",
        "texto": "Lake Titicaca (; Spanish: Lago Titicaca [ˈlaɣo titiˈkaka]; Quechua: Titiqaqa and Aymara: Titiqaqa) is a large lake in the Andes mountains on the border of Bolivia and Peru. It is often called the highest navigable lake in the world. It is often listed as a freshwater lake, though its waters are slightly brackish. Titicaca is the largest lake in South America, both in terms of the volume of water a\n[…]\nThis phrase refers to the sacred carved rock found on the Isla del Sol. In addition to names including the term titi and/or caca, Lake Titicaca was also known as Chuquivitu in the 16th century. This name can be loosely translated as lance point. This name survives in modern usage in which the large lake is occasionally referred to as Lago Chucuito.\n[…]\nThe lake also has an endemic species flock of amphipods consisting of 11 Hyalella (an additional Titicaca Hyalella species is nonendemic).\n[…]\nReeds and other aquatic vegetation are widespread in Lake Titicaca. Totora sedges grow in water shallower than 3 m (10 ft), less frequently to 5.5 m (18 ft), but macrophytes, notably Chara and Potamogeton, occur down to 10 m (33 ft). In sheltered shallow waters, such as the harbour of Puno, Azolla, Elodea, Lemna and Myriophyllum are common.\n[…]\nThe \"Floating Islands\" are small, human-made islands constructed by the Uros (or Uru) people from layers of cut totora, a thick, buoyant sedge that grows abundantly in the shallows of Lake Titicaca. The Uros harvest the sedges that naturally grow on the lake's banks to make the islands by continuously adding sedges to the surface.\n[…]\nSuriqui Island lies in the Bolivian part of lake Titicaca (in the southeastern part also known as lake Wiñaymarka).\n[…]\nLake Titicaca – The Highest Navigable Lake in the World\n[…]\nManagement issues in the Lake Titicaca and Lake Poopo system: Importance of developing a water budget\n[…]\nPeru Cultural Society – Lake Titicaca History"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Uros",
        "situacao": "ok",
        "texto": "Os Uros ou Urus (Em uru: Qhas Qut suñi) são uma etnia que habita uma vasta região entre a Bolívia e o Peru.\n[…]\nNa Bolívia estão hoje cerca de 2600 indígenas que se estabeleceram nas bordas de rios e lagos. Do lado peruano são cerca de 2 mil Uros, que vivem principalmente no local denominado Ilhas Flutuantes dos Uros, sobre o Lago Titicaca ou às margens dele, próximo a cidade de Puno. Em princípio, os Uros falavam seu próprio idioma, o uruquilla, mas devido a terem assimilado a cultura dos Aimarás, pelos quais foram dominados por longo período, perderam sua língua própria.\n[…]\nA existência dos Uros naquela região já se verifica desde a era pré-colombiana, quando desenvolveram a habilidade de habitarem sobre as ilhas flutuantes, tendo em vista maior segurança. Desde tempos remotos, os Uros sobrevivem através da pesca, da caça de aves e da coleta de ovos de aves. Ultimamente têm se aplicado ao turismo, onde apresentam seu peculiar modo de vida e seu artesanato.\n[…]\nOs Uros possuem uma relação especial com o Lago Titicaca. De acordo com historiadores, para não serem escravizados, esses indígenas se embrenharam em meio a vegetação de totora no interior do Titicaca, escondendo-se em balsas. Posteriormente, tiveram a engenhosidade de construir plataformas artificiais, hoje comumente chamadas de ilhas flutuantes, com o abundante junco que predomina no lago.\n[…]\nUros - Ilhotas artificiais do lago Titicaca",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Lorelei",
      "descricao": "Rochedo à margem do rio Reno, na Alemanha, ligado à lenda de uma moça que atraía barqueiros para o naufrágio."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A lenda da Lorelei, moça cujo canto levava barqueiros a naufragar junto a um rochedo, se passa em qual rio alemão?",
    "resposta": "Reno",
    "distratores": [
      "Elba",
      "Danúbio",
      "Meno"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lorelei"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lorelei",
        "situacao": "ok",
        "texto": "The Lorelei (  LORR-ə-ly; German: Loreley or Lorelei, pronounced [loːʁəˈlaɪ̯]  or [ˈloːʁəlaɪ̯]; also found as Loreleï, Lore Lay, Lore-Ley, Lurley, Lurelei and Lurlei throughout history) is a 132-metre-high (433 ft), steep slate rock on the right bank of the River Rhine in the Rhine Gorge (or Middle Rhine) at Sankt Goarshausen in Germany, part of the Upper Middle Rhine Valley UNESCO World Heritage \n[…]\nThe Lorelei character, although originally imagined by Brentano, passed into German popular culture in the form described in the Heine–Silcher song and is commonly but mistakenly believed to have originated in an old folk tale. The French writer Guillaume Apollinaire took up the theme again in his poem \"La Loreley\", from the collection Alcools which is later cited in Symphony No. 14 (3rd movement) of Dmitri Shostakovich.\n[…]\nThe character continues to be referenced in pop culture, such as the 1969 Townes Van Zandt title track for \"Our Mother The Mountain,\" Roxy Music's 1973 \"Editions of You\", The Pogues's 1989 song \"Lorelei\", the 1998 Eagle-Eye Cherry single \"When Mermaids Cry\", David Gray's 2002 song \"Lorelei\" on the Japanese release of A New Day at Midnight. The 2004 Blackmore's Night album Ghost of a Rose includes a song \"Loreley\". In 2015 Fischer-Z released the song \"Lorelei\" on their album \"This Is My Universe\".\n[…]\nA barge carrying 2,400 tons of sulphuric acid capsized on 13 January 2011, near the Lorelei rock, blocking traffic on one of Europe's busiest waterways.\n[…]\nLoreley Information about the Lorelei rock and surrounding area\n[…]\nDie Lorelei – Heinrich Heine's poem with English translation\n[…]\nThe Lorelei – Translation of the tale, from Ludwig Bechstein's German Saga Book\n[…]\nRecordings from the Cylinder Preservation and Digitization Project; search results for Loreley and Lorelei"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lorelei",
        "situacao": "ok",
        "texto": "Lorelei (ou Loreley) é um rochedo localizado junto ao rio Reno, próximo da cidade de Sankt Goarshausen, no estado alemão de Renânia-Palatinado, elevando-se a 120 metros acima do nível do rio. O nome provém de lendas germânicas sobre ninfas que viviam nas águas.\n[…]\nO rochedo Lorelei situa-se na parte mais estreita do Reno entre a Suíça e o mar do Norte, e é o acidente geográfico mais conhecido do Vale do Alto Médio Reno, uma secção com 65 km do rio entre Coblença e Bingen que foi incluída em 2002 na lista de Património Mundial da UNESCO.\n[…]\nEste rochedo está associado a diversas lendas originárias do folclore alemão. Clemens Brentano, em 1801, escreveu a história \"Lore Lay\" (cf. Werner Bellmann, Brentanos Lore Lay-Ballade und der antike Echo-Mythos, en: Detlev Lüders (Ed.), Clemens Brentano. Beiträge des Kolloquiums im Freien Deutschen Hochstift 1978, Tübingen 1980) que logo foi convertida em um poema por Heinrich Heine. Heine e outros poetas utilizaram a palavra \"Lorelei\".\n[…]\nNo caminho até lá, acompanhado por três cavaleiros, ela chega à rocha de Lorelei. Ela pede permissão para subir e ver o Reno mais uma vez. Ela faz isso e pensando que ela vê seu amor no Reno, cai para a morte; a rocha ainda retinha um eco de seu nome depois. Brentano tinha se inspirado no Ovídio e no mito da Echo.\n[…]\nEm 1824, Heinrich Heine aproveitou e adaptou o tema de Brentano em um de seus poemas mais famosos, \"Die Lorelei\". Ele descreve a mulher de mesmo nome como uma espécie de sereia que, sentada no penhasco acima do Reno e penteando seus cabelos dourados, inconscientemente distraiu os marinheiros com sua beleza e música, fazendo-os colidir com as pedras. .\n[…]\nArtigo sobre o vale do Médio Reno com fotos bonitas (Alemão)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Rio Ganges",
      "descricao": "Rio sagrado do hinduísmo, que nasce no Himalaia e atravessa o norte da Índia até Bangladesh."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que cidade sagrada indiana, à beira do Ganges, os hindus cremam seus mortos em escadarias chamadas gates?",
    "resposta": "Varanasi (Benares)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Varanasi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Varanasi",
        "situacao": "ok",
        "texto": "Varanasi (Hindi pronunciation: [ʋaːˈɾaːɳəsi], also Benares, Banaras Hindustani pronunciation: [bəˈnaːɾəs]), or Kashi, is a city on the Ganges river in northern India that has a central place in the traditions of pilgrimage, death, and mourning in the Hindu world. The city also has a syncretic tradition of Islamic artisanship that underpins its religious tourism. Located in the middle-Ganges valley\n[…]\nMuch of modern Varanasi was built during this time, especially financed during the 18th century by the Maratha and Bhumihar rulers.The kings governing Varanasi continued to wield power and importance through much of the British Raj period, including the Maharaja of Benares, or simply called by the people of Benares as Kashi Naresh.\n[…]\nAn exhausting guerrilla war, waged by the Benares ruler against the Oudh camp, using his troops, forced the Nawab to withdraw his main force. The region was eventually ceded by the Nawab of Oudh to the Benares State, a subordinate of the East India Company, in 1775, who recognised Benares as a family dominion. In 1791 under the rule of the British, resident Jonathan Duncan founded a Sanskrit College in Varanasi.\n[…]\nBenares became a princely state in 1911, with Ramnagar as its capital, but with no jurisdiction over the city proper. The religious head, Kashi Naresh, has had his headquarters at the Ramnagar Fort since the 18th century, also a repository of the history of the kings of Varanasi, which is situated to the east of Varanasi, across the Ganges. The Kashi Naresh is deeply revered by the local people and the chief cultural patron; some devout inhabitants consider him to be the incarnation of Shiva.\n[…]\nSarnath is located 10 kilometres north-east of Varanasi near the confluence of the Ganges and the Varuna rivers in Uttar Pradesh, India.\n[…]\nNew Delhi-Varanasi High Speed Rail Corridor\n[…]\nOfficial website of Varanasi District\n[…]\nVaranasi Documentary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Varanasi",
        "situacao": "ok",
        "texto": "Varanasi ou Varanássi (em sânscrito:  वाराणसी, Vārāṇasī, AFI:), comumente conhecida como Benares (em hindi:  बनारस e em urdu:  بنارس, transl. Banāras, AFI:) e, localmente, como Kashi (em hindi:  काशी, em urdu:  کاشی, Kāśī, AFI:), é uma cidade do estado de Utar Pradexe, na Índia. Localizada às margens do rio Ganges, tem mais de 3 000 000 de habitantes e é uma das cidades continuamente habitadas mai\n[…]\nA data exata da fundação de Varanasi é desconhecida, já que as únicas fontes de informações partem das tradições hindus. Segundo os brâmanes, Varanasi foi fundada por Xiva há mais de 5 000 anos, o que a faz uma das sete cidades sagradas do hinduísmo. Contudo, estudiosos consideram a hipótese de que a cidade tenha surgido há cerca de 3 000 anos.[carece de fontes]?\n[…]\nPor volta do ano 635 DC foi visitada pelo monge chinês Xuanzang, que registrou que a cidade era um centro religioso, artístico e educacional, e que se estendia por 5 km ao longo da margem ocidental do rio Ganges.\n[…]\nEm 1737, formou-se o Reino de Benares quando o Império Mogol reconheceu oficialmente sua independência. Entre 1775 e 1947 esteve sob controle colonial como um estado tributário, primeiro da Companhia Britânica das Índias Orientais, e após 1858 do Raj britânico, mas sempre mantendo a autonomia dos rajás e marajás, chamados de Kashi Maresh.\n[…]\nBenares obteve o status de estado principesco em 1911, que manteve até a independência da Índia em 1947, quando o reino foi dissolvido e se uniu ao Domínio da Índia, passando a compor o estado de Utar Pradexe. Mesmo sem o controle político da cidade, o Kashi Maresh ainda é reverenciado em Varanasi e atua como uma liderança religiosa, sendo considerado a reencarnação de Xiva. O título continua sendo passado hereditariamente pela dinastia Narayan.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Rio Volga",
      "descricao": "Rio da Rússia europeia, o mais longo da Europa."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O rio Volga, o mais longo da Europa, deságua em que corpo d'água, considerado o maior lago do mundo?",
    "resposta": "Mar Cáspio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volga",
      "https://en.wikipedia.org/wiki/Caspian_Sea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volga",
        "situacao": "ok",
        "texto": "The Volga (Russian: Волга, pronounced [ˈvolɡə] ) is the longest river in Europe and the longest endorheic basin river in the world. Situated in Russia, it flows through Central Russia to Southern Russia and into the Caspian Sea. The Volga has a length of 3,531 km (2,194 mi), and a catchment area of 1,360,000 km2 (530,000 sq mi).\n[…]\nThe Volga, widened for navigation purposes with construction of huge dams during the years of Joseph Stalin's industrialization, is of great importance to inland shipping and transport in Russia: all the dams in the river have been equipped with large (double) ship locks, so that vessels of considerable dimensions can travel from the Caspian Sea almost to the upstream end of the river.\n[…]\n\"On the Volga\" – a poem by Nikolay Nekrasov\n[…]\n\"Volga and Vazuza\" – a poem by Samuil Marshak\n[…]\nVolga Se Ganga - a novel by Hindi language writer Rahul Sankrityayan\n[…]\nVolga-Volga (1938) – a Soviet film comedy directed by Grigori Aleksandrov\n[…]\nThe Bridge Is Built (1965) – a Soviet film about the construction of a road bridge across the Volga in Saratov by Oleg Efremov and Gavriil Egiazarov\n[…]\n\"The Song of the Volga Boatmen\"\n[…]\nMetro Exodus – Volga is one of main levels of the game\n[…]\nHartley, J. M. (2021). The Volga: A History. New Haven: Yale University Press.\n[…]\nSunderland, Willard (2021). \"Reviewed work: The Volga: A History of Russia's Greatest River, Hartley, Janet M\". The Slavonic and East European Review. 99 (4): 761–763. doi:10.1353/see.2021.0094. JSTOR 10.5699/slaveasteurorev2.99.4.0761. S2CID 259804772.\n[…]\nKropotkin, Peter Alexeivitch; Bealby, John Thomas (1911). \"Volga\" . Encyclopædia Britannica. Vol. 28 (11th ed.). pp. 193–195.\n[…]\nVolga Delta from Space\n[…]\nPhotos of the Volga coasts\n[…]\nGeographic data related to Volga at OpenStreetMap\n[…]\nVideo about the source of the Volga"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Caspian_Sea",
        "situacao": "ok",
        "texto": "The Caspian Sea is the world's largest inland body of water, also described as the world's largest lake and usually referred to as a full-fledged sea. An endorheic basin, it is situated in both Europe and Asia: east of the Caucasus, west of the broad steppe of Central Asia, south of the fertile plains of Southern Russia in Eastern Europe, and north of the mountainous Iranian Plateau.\n[…]\nThe sea's basin (including associated waters such as rivers) has 160 native species and subspecies of fish in more than 60 genera. About 62% of the species and subspecies are endemic, as are 4–6 genera (depending on taxonomic treatment). The lake proper has 115 natives, including 73 endemics (63.5%). Among the more than 50 genera in the lake proper, 3–4 are endemic: Anatirostrum, Caspiomyzon, Chasar (often included in Ponticola) and Hyrcanogobius.\n[…]\nThe two modern canal systems that connect the Volga Basin, and hence the Caspian Sea, with the ocean are the Volga–Baltic Waterway and the Volga–Don Canal.\n[…]\nThe proposed Pechora–Kama Canal was a project that was widely discussed between the 1930s and 1980s. Shipping was a secondary consideration. Its main goal was to redirect some of the water of the Pechora River (which flows into the Arctic Ocean) via the Kama River into the Volga. The goals were both irrigation and the stabilization of the water level in the Caspian, which was thought to be falling dangerously fast at the time.\n[…]\nAlthough the canal would traverse Russian territory, it would benefit Kazakhstan through its Caspian Sea ports. The most likely route for the canal, the officials at the Committee on Water Resources at Kazakhstan's Agriculture Ministry say, would follow the Kuma–Manych Depression, where currently a chain of rivers and lakes is already connected by an irrigation canal (the Kuma–Manych Canal). Upgrading the Volga–Don Canal would be another option."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Volga",
        "situacao": "ok",
        "texto": "O rio Volga (em russo:  Во́лга, em tártaro:  Идел, İdel, línguas mordóvicas: Рав, Rav, mari Юл, Iul), é, com os seus 3688 km, o mais longo rio da Europa, e também o maior do continente em caudal e na área de bacia hidrográfica. Nasce no planalto de Valdai, no norte da Rússia, corre pela planície russa e desagua no mar Cáspio.\n[…]\nO rio Volga é uma importante via fluvial de comércio. Atravessa as grandes planícies da Rússia, indo desaguar em forma de um grande delta. Por meio de canais, interliga os mares Branco, Báltico, Cáspio, Azove e Negro, formando uma via fluvial importante para o transporte de bens no interior da Rússia. O Volga possui grandes trechos navegáveis, e também desníveis que permitem o uso da força de suas águas para a geração de energia elétrica.\n[…]\nApós Kimry, o rio atinge a albufeira da barragem de Ouglitch, e dirige-se para norte até ao lago formado pela barragem de Rybinsk, a primeira a ser construída no rio. Neste lago juntam-se também dois afluentes do Volga, o Mologa e o Cheksna, bem como o canal Volga-Báltico.\n[…]\nKazan, capital do Tartaristão, é também banhada pelo Volga, cerca de 150 km a leste, onde o curso do rio se inclina para sul. A cidade de Kazan fica junto do início de outra albufeira, a da barragem de Samara, que, com os seus 6450 km2 de área e 550 km de comprimento, é a maior albufeira da Europa. O Kama junta-se ao Volga neste enorme lago, em cujas margens se encontram as cidades de Ulianovsk e Togliatti.\n[…]\nA navegação do Volga ampliou-se durante o governo de Stalin com a construção de grandes barragens, e é de grande importância para a navegação fluvial e dos transportes na Rússia: todas as barragens no rio foram equipadas com grandes bloqueios navais, de modo que os navios de grandes dimensões podem realmente viajar a partir do mar Cáspio em percursos longos para montante.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Usina de Belo Monte",
      "descricao": "Usina hidrelétrica no município de Altamira, no Pará, construída na década de 2010."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A polêmica usina hidrelétrica de Belo Monte, no Pará, foi construída em qual rio?",
    "resposta": "Rio Xingu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Belo_Monte_Dam"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Belo_Monte_Dam",
        "situacao": "ok",
        "texto": "The Belo Monte Dam (formerly known as Kararaô) is a hydroelectric dam complex on the northern part of the Xingu River in the state of Pará, Brazil.\n[…]\nPlans for what would eventually be called the Belo Monte Dam Complex began in 1975 during Brazil's military dictatorship, when Eletronorte contracted the Consórcio Nacional de Engenheiros Consultores (CNEC) to realize a hydrographic study to locate potential sites for a hydroelectric project on the Xingu River. CNEC completed its study in 1979 and identified the possibility of constructing five dams on the Xingu River and one dam on the Iriri River.\n[…]\nThe Belo Monte Dam (AHE Belo Monte) is a complex of three dams, numerous dykes and a series of canals in order to supply two different power stations with water. The Pimental Dam (3°27′33″S 51°57′31″W) on the Xingu would be 36 metres (118 ft) tall; 6,248 metres (20,499 ft) long and have a structural volume of 4,768,000 cubic metres (168,400,000 ft3).\n[…]\nBeyond its quantitative ecological footprint, the Belo Monte Dam has been linked to larger socio-environmental impacts on communities along the Xingu River. Scholars report that large-scale infrastructure projects in Brazil frequently reflect patterns of internal colonialism, which is described as \"a structure of social relations based on domination and exploitation among heterogeneous, distinct groups\" within a country.\n[…]\nHowever, Norte Energía, the company assigned with the construction of the Belo Monte Dam, has the possibility of an appeal to the Supreme Court.\n[…]\nXingu-Estreito HVDC transmission line\n[…]\nXingu-Rio HVDC transmission line\n[…]\nBuilding Belo Monte, a photographic documentary series"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Usina_Hidrel%C3%A9trica_de_Belo_Monte",
        "situacao": "ok",
        "texto": "A Usina Hidrelétrica de Belo Monte é uma usina hidrelétrica (UHE) brasileira da bacia do Rio Xingu, próximo ao município de Altamira, no norte do estado Pará. A capacidade instalada da usina é de 11 233 MW e sua quantidade média de geração de energia é de 4 571 MW por mês.\n[…]\nDesde seu início, o projeto de Belo Monte encontrou forte oposição de ambientalistas brasileiros e internacionais, de algumas comunidades indígenas locais e de membros da Igreja Católica. Essa oposição levou a sucessivas reduções do escopo do projeto, que originalmente previa outras barragens rio acima e uma área alagada total muito maior. Em 2008, o CNPE decidiu que Belo Monte seria a única usina hidrelétrica do Rio Xingu.\n[…]\n1975: iniciados os Estudos de Inventário Hidrelétrico da Bacia Hidrográfica do Rio Xingu.\n[…]\n1989: durante o 1º Encontro dos Povos Indígenas do Xingu, realizado em fevereiro em Altamira (PA), a índia Tuíra Kayapó, em sinal de protesto, levanta-se da plateia e encosta a lâmina de seu facão no rosto do presidente da Eletronorte, José Antônio Muniz, que fala sobre a construção da usina Kararaô (atual Belo Monte). A cena é reproduzida em jornais e torna-se histórica. O encontro teve a presença do cantor Sting. O nome Kararaô foi alterado para Belo Monte em sinal de respeito aos índios.\n[…]\nEm agosto de 2001, o coordenador do Movimento pela Transamazônica e do Xingu, Ademir Federicci, foi morto com um tiro na boca enquanto dormia ao lado da esposa e do filho caçula, após ter participado de um debate de resistência contra a Usina de Belo Monte. Ameaçada de morte desde 2004, a coordenadora do Movimento de Mulheres do Campo e da Cidade do Pará e do Movimento Xingu Vivo para Sempre, Antônia Melo, também é contrária à instalação da usina e não sai mais às ruas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Rio Nilo",
      "descricao": "Grande rio do nordeste da África que atravessa o Sudão e o Egito até o mar Mediterrâneo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que historiador grego da Antiguidade escreveu que o Egito é uma dádiva do Nilo?",
    "resposta": "Heródoto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nile",
      "https://en.wikipedia.org/wiki/Herodotus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nile",
        "situacao": "ok",
        "texto": "The Nile is a major north-flowing river in northeast Africa which empties into the Mediterranean Sea. At 7,088 kilometers (4,404 mi) long, it is the longest river in the world, although the volume of water it carries is much smaller than other major rivers such as the Amazon or the Congo. The Nile has played a central role in the environmental, economic, and cultural history of Africa for millenni\n[…]\nWhite Nile – One of the two major tributaries of the Nile\n[…]\nHistorically, the water of the Nile was noted for being drinkable, but in the late 20th century, it became less healthy in certain areas. Pollution is most pronounced in Lake Tana, near major cities, and in the Nile Delta.\n[…]\nSince the time of the ancient Greeks, Europeans have been curious about the source of the Nile and the origin of its floods. Herodotus was a Greek historian who visited Egypt in 457 BCE and traveled up the Nile to Aswan; he was puzzled by the Nile floods, which began in the summer – a season when Egypt had no rainfall. Geographers in Europe, Africa, and Arabia – dating back to Eratosthenes in the second century BCE – speculated that the source was a collection of lakes in central Africa.\n[…]\nThe source of the Blue Nile was established as a result of Portuguese interest in Ethiopia: the Jesuit missionary Pedro Páez visited the source – Gish Abay – in the early 17th century, and wrote História da Etiópia describing his time in Ethiopia. His accounts do not contain a specific date for his visit to Gish Abay.\n[…]\nThe Aswan High Dam flooded a large area of the Nile Valley, and would have submerged several important historical monuments. An international campaign to save some monuments from becoming submerged by the new reservoir successfully saved some monuments, including the Abu Simbel temples. The Aswan High Dam also forced the relocation of many Nubians that lived in the valley inundated by the new reservoir."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Herodotus",
        "situacao": "ok",
        "texto": "Herodotus (Ancient Greek: Ἡρόδοτος, romanised: Hēródotos; c. 484 – c. 425 BC) was a Greek historian and geographer from the Greek city of Halicarnassus (now Bodrum, Turkey), under Persian control in the 5th century BC, and a later citizen of Thurii in modern Calabria, Italy. He wrote the Histories, a detailed account of the Greco-Persian Wars, among other subjects such as the rise of the Achaemeni\n[…]\nHerodotus announced the purpose and scope of his work at the beginning of his Histories:\n[…]\nC. Hude (ed.) Herodoti Historiae. Tomvs prior: Libros I–IV continens. (Oxford 1908)\n[…]\nC. Hude (ed.) Herodoti Historiae. Tomvs alter: Libri V–IX continens. (Oxford 1908)\n[…]\nH. B. Rosén (ed.) Herodoti Historiae. Vol. I: Libros I–IV continens. (Leipzig 1987)\n[…]\nH. B. Rosén (ed.) Herodoti Historiae. Vol. II: Libros V–IX continens indicibus criticis adiectis (Stuttgart 1997)\n[…]\nN. G. Wilson (ed.) Herodoti Historiae. Tomvs prior: Libros I–IV continens. (Oxford 2015)\n[…]\nN. G. Wilson (ed.) Herodoti Historiae. Tomvs alter: Libri V–IX continens. (Oxford 2015)\n[…]\nSeveral English translations of Herodotus's Histories are available in multiple editions, including:\n[…]\nWalter Blanco, Herodotus: The Histories: The Complete Translation, Backgrounds, Commentaries. Edited by Jennifer Tolbert Roberts. New York: W. W. Norton, 2013.\n[…]\nTom Holland, The Histories, Herodotus. Introduction and notes by Paul Cartledge. New York, Penguin, 2013.\n[…]\nThe History of Herodotus, at The Internet Classics Archive (translation by George Rawlinson).\n[…]\nParallel Greek and English text of the History of Herodotus at the Internet Sacred Text Archive\n[…]\nHerodotus Histories on the Perseus Project\n[…]\nHerodotus Histories on the Scaife Viewer\n[…]\nThe Histories of Herodotus, A.D. Godley translation with footnotes (\"Direct link to PDF\" (PDF). Archived from the original on 15 July 2011. (14 MB))\n[…]\n\"Herodotus\" . Encyclopædia Britannica. Vol. 13 (11th ed.). 1911. pp. 381–384."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Nilo",
        "situacao": "ok",
        "texto": "O Nilo é um rio do continente africano, considerado o segundo mais extenso curso d'água do mundo. Situado no nordeste do continente africano, sua nascente está a sul da linha do Equador e sua foz ocorre no mar Mediterrâneo. Ele segue essa trajetória há 30 milhões de anos.\n[…]\nA palavra Nilo (em árabe: nīl), deriva do grego Νεῖλος (Neilos), que seria uma transcrição deformada do termo egípcio Na-eiore, plural de eior designando o delta. Em árabe escreve-se النيل‎ (An-Nil).\n[…]\nO Nilo possui várias cataratas, mas na antiguidade distinguiam-se seis cataratas clássicas do Nilo que estavam situadas entre Assuão e Cartum.\n[…]\nA primeira catarata situa-se em Assuão, constituindo hoje em dia a única catarata do Nilo em território egípcio. Esta catarata era na Antiguidade a fronteira sul do Antigo Egito, pois a partir dali começava a Núbia.\n[…]\nEm meados do século V a.C., o historiador grego Heródoto realizou uma viagem ao Egito, tendo percorrido o rio até Assuão, a fronteira tradicional do Antigo Egito.\n[…]\nEm 66 d.C., na época do imperador Nero, o exército romano tentou encontrar a nascente do rio. Porém, e segundo Séneca, o pântano Sudd, impediu o exército de avançar. Ainda no século I um mercador grego chamado Diógenes relatou ao geógrafo Marino de Tiro que durante uma viagem pela costa oriental africana decidiu penetrar pelo continente, tendo ao fim de vinte e cinco dias chegado junto a dois grandes lagos e a uma cadeia de montanhas cobertas de neve de onde o Nilo nasceria.\n[…]\nNo entanto novos estudos efectuados no Nilo apontam para que este tenha uma extensão maior, mais precisamente 7 088 km. Nenhum destes valores até ao momento foi aceito como correto, pelo que o verdadeiro tamanho de ambos continua em aberto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Rio Rubicão",
      "descricao": "Pequeno rio do norte da Itália que marcava o limite da Itália romana e foi cruzado por Júlio César em 49 antes de Cristo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 49 antes de Cristo, que general atravessou o rio Rubicão com suas tropas, desafiando o Senado romano?",
    "resposta": "Júlio César",
    "fonte": [
      "https://en.wikipedia.org/wiki/Crossing_the_Rubicon",
      "https://en.wikipedia.org/wiki/Rubicon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Crossing_the_Rubicon",
        "situacao": "ok",
        "texto": "The phrase \"crossing the Rubicon\" is an idiom meaning \"passing the point of no return\". Its meaning comes from the crossing of the Rubicon river by Julius Caesar in January 49 BC at the head of the 13th Legion. Caesar was not allowed to command an army within Italy proper, and by crossing the river with his forces was defying law and risking death. The crossing precipitated a civil war, which even\n[…]\nCaesar had previously been appointed governor of a region that stretched from southern Gaul to Illyricum. As his term was coming to an end, the Senate ordered him to disband his army and return to Rome. Caesar defied the order, and instead brought his army to Rome, occupying the city of Ariminum then crossing the Rubicon towards the south.\n[…]\nIn January 49 BC, Julius Caesar led a Roman legion, Legio XIII, south over the Rubicon from Cisalpine Gaul to Italy to make his way to Rome. In doing so, he deliberately broke the law on imperium and made armed conflict inevitable. Roman historian Suetonius depicts Caesar as undecided as he approached the river and attributes the crossing to a supernatural apparition.\n[…]\nAccording to Suetonius, Caesar uttered the famous phrase ālea iacta est (\"the die has been cast\"). The phrase \"crossing the Rubicon\" has survived to refer to any individual or group committing itself  to a risky or revolutionary course of action, similar to the modern phrase \"passing the point of no return\". Caesar's decision for swift action forced Pompey, the consuls, and a large part of the Roman Senate to flee Rome.\n[…]\nRubicon speech\n[…]\n\"Rubico\" on Livius.org Archived 2012-12-22 at the Wayback Machine\n[…]\nRubicon at Reference.com\n[…]\nPearce, M., R. Peretto, P. Tozzi, R. Talbert, T. Elliott, S. Gillies (15 November 2020). \"Places: 393484 (Rubico fl.)\". Pleiades. Retrieved March 8, 2012.{{cite web}}:  CS1 maint: multiple names: authors list (link)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rubicon",
        "situacao": "ok",
        "texto": "The Rubicon (Latin: Rubico; Italian: Rubicone [rubiˈkoːne]; Romagnol: Rubicôn [rubiˈkoːŋ]) is a shallow river in northeastern Italy, just south of Cesena and north of Rimini. It was known as Fiumicino until 1933, when it was identified with the ancient river Rubicon, crossed by Julius Caesar in 49 BC.\n[…]\nIn 49 BC, perhaps on 10 January, Julius Caesar led a single legion, Legio XIII Gemina, south over the Rubicon from Cisalpine Gaul to Italy to make his way to Rome. In doing so, he deliberately broke the law limiting his imperium, making armed conflict inevitable. Suetonius (\"Divus Julius\" 32) depicts Caesar as undecided as he approached the river, and attributes the crossing to a supernatural apparition (thus also in Lucan, 1.185-203).\n[…]\nThe song Crossing the Rubicon by Sabaton and Nothing More collaboration has the Rubicon take center stage, with the song being about Julius Caesar's crossing of the Rubicon River in 49 BC.\n[…]\nThe 1983 album Frontiers by Journey includes a song called \"Rubicon\".\n[…]\nThe Jeep Wrangler off-road SUV features a trim level named after the Rubicon Trail in Northern Califonia, with “Rubicon” branding on both sides of the hood.\n[…]\nThe Swell Season's, Glen Hansard to be specific, song with \"Stuck In Reverse\" title goes as \"(...) So many bridges still to get over, Rubicons still to cross (...)\"\n[…]\nMedia related to Rubicone at Wikimedia Commons\n[…]\nChisholm, Hugh, ed. (1911). \"Rubicon\" . Encyclopædia Britannica (11th ed.). Cambridge University Press.\n[…]\nLivius.org: Rubico Archived 2012-12-22 at the Wayback Machine\n[…]\nRubicon in dictionary\n[…]\nPearce, M., R. Peretto, P. Tozzi, R. Talbert, T. Elliott, S. Gillies (15 November 2020). \"Places: 393484 (Rubico fl.)\". Pleiades. Retrieved March 8, 2012.{{cite web}}:  CS1 maint: multiple names: authors list (link)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Travessia_do_Rubic%C3%A3o",
        "situacao": "ok",
        "texto": "A \"travessia do Rubicão\" ou a frase \"cruzando o Rubicão\", \"atravessou o Rubicão\", é uma expressão idiomática que significa que se está passando por um ponto sem retorno. Seu significado vem da alusão à travessia do Rubicão por Júlio César no início de janeiro de 49 a.C.\n[…]\nSua travessia do rio precipitou a guerra civil de César, que acabou levando César a se tornar ditador vitalício (ditador perpétuo). César havia sido nomeado governador de uma região que ia do sul da Gália ao Ilírico. Quando seu mandato de governador terminou, o Senado ordenou a César que dissolvesse seu exército e voltasse a Roma.\n[…]\nEm janeiro de 49 a.C. Júlio César liderou uma única legião, a Legio XIII, ao sul sobre o Rubicão da Gália Cisalpina até a Itália para chegar a Roma. Ao fazer isso, ele deliberadamente infringiu a lei do imperium e tornou o conflito armado inevitável. O historiador romano Suetônio descreve César indeciso ao se aproximar do rio e atribui a travessia a uma aparição sobrenatural.\n[…]\nFoi relatado que César jantou com Sallust, Hirtius, Oppio, Lucius Balbus e Sulpicus Rufus na noite após sua famosa travessia para a Itália em 10 de janeiro.\n[…]\nDe acordo com Suetônio, César pronunciou a famosa frase ālea iacta est (\"a sorte foi lançada\"). A frase \"atravessar o Rubicão\" sobreviveu para se referir a qualquer indivíduo ou grupo que se compromete irrevogavelmente com um curso de ação arriscado ou revolucionário, semelhante à frase moderna \"passar do ponto sem retorno\". A decisão de César de ação rápida forçou Pompeu, os cônsules e grande parte do Senado romano a fugir de Roma.\n[…]\nLivius.org: Rubico Arquivado em 22 de dezembro de  2012, no Wayback Machine.\n[…]\nRubicon in dictionary",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Usina de Itaipu",
      "descricao": "Usina hidrelétrica binacional de Brasil e Paraguai, no rio Paraná."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A usina de Itaipu, no rio Paraná, começou a gerar energia em que década do século vinte?",
    "resposta": "Anos 1980",
    "fonte": [
      "https://en.wikipedia.org/wiki/Itaipu_Dam",
      "https://pt.wikipedia.org/wiki/Usina_Hidrel%C3%A9trica_de_Itaipu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Itaipu_Dam",
        "situacao": "ok",
        "texto": "The Itaipu Dam (Guarani: Yjoko Itaipu [itajˈpu]; Portuguese: Barragem de Itaipu [itajˈpu]; Spanish: Represa de Itaipú [itajˈpu]) is a hydroelectric dam on the Paraná River located on the border between Brazil and Paraguay. It is the third-largest hydroelectric dam in the world in terms of produced energy.\n[…]\nIn 1970, the consortium formed by the companies ELC Electroconsult S.p.A. (from Italy) and IECO (from the United States)  won the international competition for the realization of the viability studies and for the elaboration of the construction project. Design studies began in February 1971. On April 26, 1973, Brazil and Paraguay signed the Itaipu Treaty, the legal instrument for the hydroelectric exploitation of the Paraná River by the two countries.\n[…]\nOn May 17, 1974, the Itaipu Binacional entity was created to administer the plant's construction. The construction began in January of the following year. Brazil's (and Latin America's) first electric car was introduced in late 1974; it received the name Itaipu in honor of the project.\n[…]\nThe total volume of excavation of earth and rock in Itaipu is 8.5 times greater than that of the Channel Tunnel, while the volume of concrete is 15 times greater.\n[…]\nItaipu is one of the most expensive objects ever built.\n[…]\nElectricity is 55% cheaper when made by the Itaipu Dam than by the other types of power plants in the area.\n[…]\nIn the period 2012–2021, the Itaipu Dam maintained the second-highest average annual hydroelectric production in the world, averaging 89.22 TWh per year, second to the 97.22 TWh per year average of the Three Gorges Dam in that period.\n[…]\nItaipu Company Site (in Portuguese, English, and Spanish)\n[…]\nThe Itaipu Transmission System[link removed]\n[…]\nPanoramic – Itaipu Binacional – Foz do Iguaçu – Brazil Archived 2019-06-28 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Usina_Hidrel%C3%A9trica_de_Itaipu",
        "situacao": "ok",
        "texto": "Usina Hidrelétrica de Itaipu (em castelhano:  Itaipú, em guarani:  Itaipu) é uma hidrelétrica binacional localizada no Rio Paraná, na fronteira entre o Brasil e o Paraguai. A barragem foi construída pelos dois países entre 1975 e 1982. O nome Itaipu foi tirado de uma ilha que existia perto do local de construção. Na língua tupi, o termo significa \"pedra na qual a água faz barulho\", através da junç\n[…]\nEm termos de recorde anual de produção de energia, a usina de Itaipu ocupa o primeiro lugar ao superar seu próprio recorde que era de 98,6 milhões de MWh. Em 2016, a usina de Itaipu Binacional realizou um feito histórico ao produzir, em um único ano calendário, mais de 100 milhões de MWh de energia limpa e renovável. No total, em 2016, foram produzidos 103 098 366 MWh de energia.\n[…]\nA usina hidrelétrica de Itaipu começou a ser pensada ainda na década de 1960, quando foram assinados os primeiros acordos de cooperação entre Brasil e Paraguai.\n[…]\nEm 2004, quando completou 20 anos de atividade, a usina já havia gerado energia suficiente para abastecer o mundo durante 36 dias.\n[…]\nO início do blecaute se deu às 22h13 em uma subestação de energia elétrica de Furnas, localizada no município de Ivaiporã, no Paraná, devido a problemas em três linhas de transmissão nos estados de São Paulo e Paraná, impedindo que a energia gerada pela usina de Itaipu pudesse ser transmitida para os consumidores brasileiros. O blecaute afetou vários municípios de 18 estados.\n[…]\nApesar de gerar menos do que em anos de recorde, Itaipu atingiu em 2014 o melhor índice de eficiência operacional dos 32 anos, com 99,3%. Na prática, isso significa que a operação da usina, que tem o objetivo de maximizar a utilização da água (energia disponível), atendendo as demandas dos sistemas elétricos brasileiro e paraguaio, teve quase zero de perdas. Ou seja, da água que poderia ser turbinada, quase nada foi vertido em 2014."
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Rio da Prata",
      "descricao": "Estuário sul-americano entre a Argentina e o Uruguai, às margens do qual ficam Buenos Aires e Montevidéu."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O estuário do rio da Prata, onde ficam Buenos Aires e Montevidéu, é formado pelo encontro de quais dois rios?",
    "resposta": "Paraná e Uruguai",
    "distratores": [
      "Paraná e Paraguai",
      "Paraguai e Iguaçu",
      "Paraná e Iguaçu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/R%C3%ADo_de_la_Plata"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/R%C3%ADo_de_la_Plata",
        "situacao": "ok",
        "texto": "The Río de la Plata (Spanish pronunciation: [ˈri.o ðe la ˈplata] ; lit. 'River of Silver'), also called the River Plate or La Plata River in English, is the estuary formed by the confluence of the Uruguay River and the Paraná River at Punta Gorda. It empties into the Atlantic Ocean and forms a funnel-shaped indentation on the southeastern coastline of South America. Depending on the geographer, th\n[…]\nThe river is about 290 kilometres (180 mi) long and widens from about 2 kilometres (1.2 mi) at its source to about 220 kilometres (140 mi) at its mouth. It forms part of the border between Argentina and Uruguay. The name Río de la Plata is also used to refer to the populations along the estuary, especially the main port cities of Buenos Aires and Montevideo, where Rioplatense Spanish is spoken and tango culture developed.\n[…]\nThe Río de la Plata begins at the confluence of the Uruguay and Paraná rivers at Punta Gorda and flows eastward into the South Atlantic Ocean. No clear physical boundary marks the river's eastern end; the International Hydrographic Organization defines the eastern boundary of the Río de la Plata as \"a line joining Punta del Este, Uruguay and Cabo San Antonio, Argentina\".\n[…]\nThe Río de la Plata behaves as an estuary in which freshwater and seawater mix. The freshwater comes principally from the Paraná River (one of the world's longest rivers and La Plata's main tributary) as well as from the Uruguay River and other smaller streams. Currents in the Río de la Plata are dominated by tides reaching to its sources and beyond, into the Uruguay and Paraná rivers. Both rivers are tidally influenced for about 190 kilometres (120 mi).\n[…]\nThe main rivers of the La Plata basin are the Paraná River, the Paraguay River (the Paraná's main tributary), and the Uruguay River.\n[…]\nArgentina–Uruguay relations\n[…]\n1973 Boundary Treaty between Uruguay and Argentina\n[…]\n1888 Río de la Plata earthquake"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_da_Prata",
        "situacao": "ok",
        "texto": "O rio da Prata é o estuário criado pelo deságue das águas dos rios Paraná e Uruguai e do oceano, formando sobre a costa atlântica da América do Sul uma muesca triangular de 290 quilômetros de largura. A bacia hidrográfica combinada do rio da Prata e seus afluentes (os rios Lujan, Matanza, Samborombón e Salado do Sul) possui uma superfície de aproximadamente 3 200 000 km².\n[…]\nO estuário do rio da Prata foi também palco de muitos conflitos entre as nações fronteiriças a ele. A livre navegação do rio era o objetivo do Império do Brasil e do Uruguai, contrariando os interesses das Províncias Unidas do Rio da Prata (atual Argentina) e do Paraguai. Isso gerou diversos conflitos entre os estados após sua independência. Para o Brasil, significaria bloquear suas comunicações com a Província de Mato Grosso e um perigo às suas fronteiras.\n[…]\nO nome refere-se à lendária Sierra de Plata (\"Serra de Prata\"), que foi procurada por Aleixo Garcia, Sebastião Caboto e outros que subiram os rios da Prata, Paraná, Paraguai e Uruguai e que realizaram expedições terrestres até o Chaco e Chiquitos. É possível que a tal Sierra de Plata tenha sido uma evocação remota ao Cerro Rico de Potosí que os indígenas transmitiam boca a boca, ou que tal informação seja uma referência ao império dos incas no Peru.\n[…]\nÉ parte do limite entre Argentina e Uruguai. A costa uruguaia é, em geral, alta, apresentando praias arenosas. Os principais afluentes pela costa uruguaia são os rios San Juan, Rosario, Santa Lucía e Solís. A costa argentina é em geral baixa, formada por limos, sendo abundantes os camalotes e juncais. Nela se destaca a Baía de Samborombón, cuja costa possui 180 km de longitude. Nesta baía desembocam vários cursos de água, muitas vezes canalizados, sendo os principais os rios Samborombón e Salado.\n[…]\nParaná\n[…]\nProjeto FREPLATA: \"Proteção Ambiental do Rio da Prata e sua Frente Marítima\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Rio Sena",
      "descricao": "Rio do norte da França que atravessa Paris e deságua no canal da Mancha."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Paris, em qual ilha do rio Sena fica a catedral de Notre-Dame?",
    "resposta": "Île de la Cité",
    "fonte": [
      "https://en.wikipedia.org/wiki/%C3%8Ele_de_la_Cit%C3%A9"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/%C3%8Ele_de_la_Cit%C3%A9",
        "situacao": "ok",
        "texto": "The Île de la Cité (French: [il d(ə) la site]; lit. \"Island of the City\") is one of two natural islands on the Seine River (alongside Île Saint-Louis) in central Paris. It spans 22.5 hectares (56 acres) of land. In the 4th century, it was the site of the fortress of the area governor for the Roman Empire. In 508, Clovis I, the first King of the Franks, established his castle on the island. An earl\n[…]\nAn academic debate about the original location of Lutetia began in 2006, following the excavation in 1994–2005 of a large Gallic necropolis, with residences and temples, at Nanterre, along the Seine in the Paris suburbs. Some historians have put forward this settlement at Nanterre as the Lutetia of the Gauls, rather than Île de la Cité.\n[…]\nThe Hôtel-Dieu, located between the Parvis of Notre-Dame on the south and the Quai de la Corse on the north, is the oldest hospital in Paris. It is reputed to be the oldest still-functioning hospital in the world. Tradition says it was founded in 651 by Saint Landry, Bishop of Paris. It was originally located on the other side of the Parvis, along the river, with a second building on the left Bank of the Seine. The old hospital was famous for its overcrowding, with several patients in each bed.\n[…]\nThe island has one Paris Métro station: Cité. There is also one RER station: Saint-Michel-Notre-Dame, although on the Left Bank, has an exit on the island in front of the cathedral.\n[…]\nde Finance, Laurence (2012). La Sainte-Chapelle- Palais de la Cité (in French). Éditions du Patrimoine, Centre des Monuments Nationaux. ISBN 978-2-7577-0246-8.\n[…]\nDelon, Monique (2000). La Conciergerie - Palais de la Cité (in French). Editions du Patrimoine. ISBN 978-2-85822298-8.\n[…]\nLecompte, Francis (2013). Notre-Dame, Île de la Cité et Île Saint-Louis (in English and French). Massin. ISBN 978-2-7072-0835-4.\n[…]\nL'Île de la Cité- current photographs and of the years 1900."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%8Ele_de_la_Cit%C3%A9",
        "situacao": "ok",
        "texto": "A Île de la Cité (Ilha da Cidade em português) é uma de duas ilhas no rio Sena (a outra é a Île Saint-Louis) que pertencem à cidade de Paris, na França. É o centro da capital francesa e foi onde a cidade medieval de Paris foi fundada.\n[…]\nNa ponta Oeste da ilha encontra-se um palácio merovíngio; na ponta Este, desde essa mesma época, tem sido reservada para edifícios de cariz religioso, principalmente depois do século X, com a construção da conhecida Catedral de Notre-Dame.\n[…]\nEntre esses dois extremos da ilha, a partir de 1850, foi desenvolvendo áreas residenciais e comerciais; contudo, esse pedaço de terra foi preenchido com o Conciergerie, a Préfecture de Police, o Palais de Justice, o Hôtel-Dieu de Paris e com o Tribunal de Commerce. Apenas as zonas a norte e a oeste continuam a ter residências.\n[…]\nÉ a ilha onde Jacques de Molay foi queimado vivo publicamente em 18 de março de 1314 por ordens do rei Filipe IV, o Belo. Hoje, no local de sua execução, existe uma placa em homenagem ao último homem a receber o Grão-Mestrado, cuja tradução é: \"Nesse local, Jacques de Molay, último Grão-Mestre da Ordem dos Templários, foi queimado, em 18 de março de 1314.\"\n[…]\nEstes são os pontos turísticos da Île de la Cité:\n[…]\nCatedral de Notre-Dame de Paris\n[…]\nHôtel-Dieu de Paris\n[…]\nPalais de la Cité",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Lago Superior",
      "descricao": "Um dos cinco Grandes Lagos da América do Norte, na fronteira entre os Estados Unidos e o Canadá."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Em área, qual é o maior dos cinco Grandes Lagos da América do Norte?",
    "resposta": "Lago Superior",
    "distratores": [
      "Lago Huron",
      "Lago Michigan",
      "Lago Ontário"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lake_Superior",
      "https://en.wikipedia.org/wiki/Great_Lakes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Superior",
        "situacao": "ok",
        "texto": "Lake Superior is a lake in central North America. The northernmost, westernmost, and highest of the Great Lakes, Lake Superior straddles the Canada–United States border with the Canadian province of Ontario to the north and east and the U.S. states of Minnesota to the west and Michigan and Wisconsin to the south. It is the largest freshwater lake in the world by surface area and the third-largest \n[…]\nThere is enough water in Lake Superior to cover the entire land mass of North and South America to a depth of 30 centimetres (12 in). The shoreline of the lake stretches 2,726 miles (4,387 km) (including islands). The lake boasts a very small ratio (1.55) of catchment area to surface area, which indicates minimal terrestrial influence.\n[…]\nThe largest island in Lake Superior is Isle Royale in Michigan. Isle Royale contains several lakes, some of which also contain islands. Other well-known islands include Madeline Island in Wisconsin, Michipicoten Island in Ontario, and Grand Island (the location of the Grand Island National Recreation Area) in Michigan.\n[…]\nThey soon became the dominant Native American nation in the region: they forced out the Sioux and Fox and won a victory against the Iroquois west of Sault Ste. Marie in 1662. By the mid-18th century, the Ojibwe occupied all of Lake Superior's shores.\n[…]\nThe southern shore of Lake Superior between Grand Marais, Michigan, and Whitefish Point is known as the \"Graveyard of the Great Lakes\"; more ships have been lost around the Whitefish Point area than any other part of Lake Superior. These shipwrecks are now protected by the Whitefish Point Underwater Preserve. Storms that claimed multiple ships include the Mataafa Storm in November 1905 and the Great Lakes Storm of 1913.\n[…]\nParks Canada - Lake Superior National Marine Conservation Area\n[…]\nLake Superior Bathymetry Archived January 16, 2009, at the Wayback Machine\n[…]\nLake Superior Trials"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Great_Lakes",
        "situacao": "ok",
        "texto": "The Great Lakes, also called the Great Lakes of North America, are a series of large interconnected freshwater lakes spanning the Canada–United States border. The five lakes are Superior, Michigan, Huron, Erie, and Ontario (though hydrologically, Michigan and Huron are a single body of water, joined at the Straits of Mackinac). The Great Lakes Waterway enables modern travel and shipping by water a\n[…]\nThough the five lakes lie in separate basins, they form a single, naturally interconnected body of fresh water, within the Great Lakes Basin. As a chain of lakes and rivers, they connect the east-central interior of North America to the Atlantic Ocean. From the interior to the outlet at the Saint Lawrence River, water flows from Superior to Huron and Michigan, southward to Erie, and finally northward to Lake Ontario.\n[…]\nKeweenaw Bay is an arm of Lake Superior southeast of the Keweenaw Peninsula.\n[…]\nWhitefish Bay is a large bay on the eastern end of Lake Superior which leads to the outflow of the lake into the St. Marys River.\n[…]\nLake Michigan\n[…]\nLake Ontario\n[…]\nLake Superior\n[…]\nHistorically, the Great Lakes, in addition to their lake ecology, were surrounded by various forest ecoregions (except in a relatively small area of southeast Lake Michigan where savanna or prairie occasionally intruded). Logging, urbanization, and agriculture uses have changed that relationship. In the early 21st century, Lake Superior's shores are 91% forested, Lake Huron 68%, Lake Ontario 49%, Lake Michigan 41%, and Lake Erie, where logging and urbanization has been most extensive, 21%.\n[…]\nThe Lake Superior shipwreck coast from Grand Marais, Michigan, to Whitefish Point became known as the \"Graveyard of the Great Lakes\". More vessels have been lost in the Whitefish Point area than any other part of Lake Superior. The Whitefish Point Underwater Preserve serves as an underwater museum to protect the many shipwrecks in this area."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lago_Superior",
        "situacao": "ok",
        "texto": "O lago Superior é o maior dos cinco Grandes Lagos, e o maior lago de água doce do mundo em extensão territorial (e o terceiro em volume), detendo 10% da água doce superficial do mundo. Localiza-se entre o Canadá (província de Ontário) e os Estados Unidos (estados de Michigan, Minnesota e Wisconsin). Com uma área de 82 414 km², o lago Superior situa-se na área menos densamente habitada dos cinco Gr\n[…]\nO limnologista norte-americano J. Val Klump foi a primeira pessoa a alcançar o ponto mais profundo do leito do Lago Superior, em 30 de julho de 1985, em missão de pesquisa científica com submersível tripulado.\n[…]\nAs formações rochosas da margem setentrional do Lago Superior remontam aos primórdios da história geológica da Terra. Durante o Pré-Cambriano (entre 4,5 bilhões e 540 milhões de anos atrás), intrusões de magma formaram os granitos do Escudo Canadense. A orogenia Penokeana, integrante do processo que moldou a zona tectônica dos Grandes Lagos, propiciou a concentração de expressivas jazidas minerais.\n[…]\nO Lago Superior constitui uma artéria estratégica da Via Navegável dos Grandes Lagos, propiciando o escoamento a granel de minério de ferro, grãos agrícolas, carvão e manufaturas industriais por meio de cargueiros especializados (*lake freighters* e navios de padrão *Seawaymax*). O transporte marítimo comercial teve início em 1847 com a introdução do barco a vapor Independence.\n[…]\nO litoral sul do Lago Superior compreendido entre Grand Marais e o Cabo Whitefish é historicamente conhecido como o \"Cemitério dos Grandes Lagos\" (Graveyard of the Great Lakes), concentrando a maior densidade de naufrágios catalogados do lago. As áreas submersas encontram-se sob proteção da Reserva Subaquática de Whitefish Point. Tempestades severas provocaram perdas maciças de embarcações, destacando-se a Tempestade de Mataafa em novembro de 1905 e a célebre Tempestade de 1913 nos Grandes Lagos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Rio Congo",
      "descricao": "Grande rio da África Central que deságua no oceano Atlântico, entre Angola e a República Democrática do Congo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O rio Congo, na África Central, faz um grande arco e cruza duas vezes qual linha imaginária?",
    "resposta": "Linha do Equador",
    "fonte": [
      "https://en.wikipedia.org/wiki/Congo_River"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Congo_River",
        "situacao": "ok",
        "texto": "The Congo River, formerly also known as the Zaire River, is the second-longest river in Africa, shorter only than the Nile, as well as the third largest river in the world by discharge volume, following the Amazon and Ganges–Brahmaputra rivers. It is the world's deepest recorded river, with measured depths of around 220 m (720 ft). The Congo–Lualaba–Luvua–Luapula–Chambeshi River system has an over\n[…]\nAlthough the Livingstone Falls prevent access from the sea, nearly the entire Congo above them is readily navigable in sections, especially between Kinshasa and Kisangani. Large river steamers worked the river until quite recently. The Congo River still is a lifeline in a land with few roads or railways. Railways now bypass the three major falls, and much of the trade of Central Africa passes along the river, including copper, palm oil (as kernels), sugar, coffee, and cotton.\n[…]\nSeveral species of turtles and the slender-snouted, Nile and dwarf crocodile are native to the Congo River Basin. African manatees inhabit the lower parts of the river.\n[…]\nThe Kingdom of Kongo was formed in the late 14th century from a merging of the kingdoms of Mpemba Kasi and Mbata Kingdom on the left banks of the lower Congo River. Its territorial control along the river remained limited to what corresponds to the modern Kongo Central province.\n[…]\nThe Europeans had not reached the central regions of the Congo basin from either the east or west, until Henry Morton Stanley's expedition of 1876–77, supported by the Committee for Studies of the Upper Congo. At the time one of the last open questions of the European exploration of Africa was whether the Lualaba River fed the Nile (Livingstone's theory), the Congo, or even the Niger River.\n[…]\n2021 Congo River disaster\n[…]\nList of crossings of the Congo River\n[…]\nList of rivers of Africa\n[…]\nThe River Congo Basin\n[…]\nMap of the Congo River basin at Water Resources eAtlas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Congo",
        "situacao": "ok",
        "texto": "Rio Congo, também conhecido como Rio Zaire, é o segundo maior rio da África (após o rio Nilo) e o sétimo do mundo, com uma extensão total de 4 700 km. É o primeiro da África e o segundo do mundo em volume de água, chegando a debitar algo com um caudal de 67 000 m³/s de água no oceano Atlântico.\n[…]\nEm termos de vida aquática, a bacia do rio Congo tem uma grande riqueza de espécies, e é onde estão as mais altas concentrações endêmicas conhecidas. Até hoje, quase 700 espécies de peixes foram registrados na Bacia do Congo, e grandes partes permanecem praticamente intocáveis. Devido a esta e as grandes diferenças ecológicas entre as regiões da bacia, é muitas vezes dividida em várias ecorregiões (em vez ser uma única ecorregião).\n[…]\nQuando o Lualaba encontra-se com o rio Lindi, recebe definitivamente o nome de rio Congo. No médio Lualaba, recebe as águas do Lago Tanganica, guiadas pelo seu escape (rio Lukuga). Os seus principais afluentes são: o rio Ubangui, pela margem direita, e o rio Cassai, pela margem esquerda. O seu regime depende das chuvas equatoriais e quase toda a sua bacia é coberta por impenetráveis florestas equatoriais. É o único rio da Terra que atravessa duas vezes a linha do Equador.\n[…]\nBanha duas capitais nacionais: Brazavile, na República do Congo e Quinxassa, na República Democrática do Congo.\n[…]\nEm fevereiro de 2005, a Eskom (uma empresa estatal da África do Sul), anunciou uma proposta de parceria com a Sociedade Nacional de Eletricidade para aumentar a capacidade das duas centrais hidrelétricas de Inga que já estão em operação, além da construção de uma nova barragem. O projeto daria ao país 40 GW de potência instalada, o dobro da Hidrelétrica de Três Gargantas, na China.\n[…]\nFrançois Neyt (2010). Fleuve Congo. Bruxelas: Mercator",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.42 — 2026-10-02**
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
