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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6). Uma pergunta `aberta` cuja resposta é um ano ou uma data deve ser reescrita como `multipla`, com 3 anos ou datas próximos e críveis (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Venezuela",
      "descricao": "País no litoral norte da América do Sul, cuja capital é Caracas."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Ao ver casas indígenas sobre palafitas no lago de Maracaibo, navegadores europeus deram à Venezuela um nome que lembra qual cidade?",
    "resposta": "Veneza",
    "distratores": [
      "Gênova",
      "Sevilha",
      "Lisboa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Venezuela"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Venezuela",
        "situacao": "ok",
        "texto": "Venezuela, officially the Bolivarian Republic of Venezuela, is a country on the northern coast of South America, consisting of a continental landmass and various islands and islets in the Caribbean Sea. It comprises an area of 912,050 km2 (352,140 sq mi), with a population estimated at 31.8 million in 2025. The capital and largest urban agglomeration is Caracas.\n[…]\nThe war continued until full victory and sovereignty was attained after the Battle of Carabobo on 24 June 1821. On 24 July 1823, José Prudencio Padilla and Rafael Urdaneta helped seal Venezuelan independence with their victory in the Battle of Lake Maracaibo. New Granada's congress gave Bolívar control of the Granadian army; leading it, he liberated several countries and founded the Republic of Colombia (Gran Colombia).\n[…]\nVenezuela's history of devaluation of the hard and sovereign bolívar currency continued and food shortages became widespread.\n[…]\nAmong Indigenous people, 58% were Wayúu, 7% Warao, 5% Kariña, 4% Pemón, 3% Piaroa, 3% Jivi, 3% Añú, 3% Cumanágoto, 2% Yukpa, 2% Chaima and 1% Yanomami; the remaining 9% consisted of other Indigenous nations. According to an autosomal DNA study conducted in 2008 by the University of Brasília, the composition of Venezuela's population is 60.60% European, 23% Indigenous, and 16.30% African.\n[…]\nDuring the 20th century, Venezuela, along with the rest of Latin America, received millions of immigrants from Europe. This was especially true post-World War II, as a consequence of war-ridden Europe. During the 1970s, while experiencing an oil-export boom, Venezuela received millions of immigrants from Ecuador, Colombia, and the Dominican Republic. Due to the belief that this immigration influx depressed wages, some Venezuelans opposed European immigration.\n[…]\nOutline of Venezuela\n[…]\nWikimedia Atlas of Venezuela\n[…]\nVenezuela situation – emergency appeal"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Venezuela",
        "situacao": "ok",
        "texto": "Venezuela (pronúncia espanhola: [be.neˈswe.la] ), oficialmente República Bolivariana da Venezuela (em castelhano:  República Bolivariana de Venezuela), é um país localizado na porção norte da América do Sul, constituído por uma parte continental e inúmeras pequenas ilhas no Mar do Caribe. Possui uma área de 916 445 km², sendo o 32.º maior país no mundo em território, e sua capital e maior aglomera\n[…]\nSegundo a versão mais popular e aceita, em 1499, uma expedição liderada por Alonso de Ojeda visitou a costa venezuelana. As casas sobre palafitas na área do Lago Maracaibo lembraram ao navegador italiano, Américo Vespúcio, a cidade de Veneza, na Itália, por isso ele deu à região o nome de Veneziola, ou \"Pequena Veneza\". A versão espanhola de Veneziola é Venezuela.\n[…]\nCristóvão Colombo chegou ao litoral venezuelano em 1498, durante sua terceira viagem à América. Batizou a região de Venezuela (“pequena Veneza”), em razão das palafitas sobre o Lago de Maracaibo, que se assemelhavam à cidade italiana. No início, a Espanha não teve grandes interesses nessa área, limitando-se à caça de escravos e pesca de pérolas. O primeiro assentamento espanhol permanente, Cumaná, foi fundado em 1523.\n[…]\nNa Venezuela, os afrodescendentes estão concentrados em regiões próximas à costa, enquanto os indígenas residem, na maioria, em regiões remotas do interior do país, como florestas próximas ao Lago de Maracaibo e a Floresta Amazônica.\n[…]\nO cinema venezuelano iniciou sua produção em 1896, apenas um ano após a primeira produção dos irmãos Lumière na França.Predefinição:Demonstrar O cinema nacional deu um dos seus passos mais importantes em 1934, ao instalar-se na cidade de Maracay a sede dos laboratórios nacionais e da Maracay Films. Nesse laboratório, foi filmado El milagro del lago, o primeiro documentário colorido realizado na Venezuela e na América Latina.\n[…]\n«República Bolivariana de Venezuela» (em espanhol)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Filipinas",
      "descricao": "País arquipélago do Sudeste Asiático, no Pacífico ocidental, cuja capital é Manila."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No século dezesseis, o arquipélago das Filipinas recebeu seu nome em homenagem a qual futuro rei da Espanha?",
    "resposta": "Filipe II",
    "distratores": [
      "Carlos V",
      "Fernando II",
      "Filipe III"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Philippines"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Philippines",
        "situacao": "ok",
        "texto": "The Philippines, officially the Republic of the Philippines, is an archipelagic country in Southeast Asia. Located in the western Pacific Ocean, it consists of about 7,641 islands, with a total area of about 300,000 square kilometers. The islands are broadly categorized into three main geographical divisions: from north to south, Luzon, Visayas, and Mindanao. With a population of over 114 million,\n[…]\nLocal film-making began in 1919 with the release of the first Filipino-produced feature film: Dalagang Bukid (A Girl from the Country), directed by Jose Nepomuceno. Production companies remained small during the silent film era, but sound films and larger productions emerged in 1933. The postwar 1940s to the early 1960s are considered a high point for Philippine cinema. The 1962–1971 decade saw a decline in quality films, although the commercial film industry expanded until the 1980s.\n[…]\nThe Philippine population are the world's top Internet users. In early 2021, 67 percent of Filipinos (73.91 million) had Internet access; the overwhelming majority used smartphones.\n[…]\nFrom its Malayo-Polynesian origins, traditional Philippine cuisine has evolved since the 16th century. It was primarily influenced by Hispanic, Chinese, and American cuisines, which were adapted to the Filipino palate. Filipinos tend to prefer robust flavors, centered on sweet, salty, and sour combinations. Regional variations exist throughout the country; rice is the general staple starch but cassava is more common in parts of Mindanao. Adobo is the unofficial national dish.\n[…]\nThe generous use of condiments such as patis, bagoong, and toyo impart a distinctive Philippine flavor.There are vegan filipino food and they include laing, lumpiang gulay, ensaladang talong, turon, ginataang bilo-bilo, biko, espasol, banana cue, camote cue, taho, suman, carioca, and lumpiang sariwa.\n[…]\nWikimedia Atlas of Philippines"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Filipinas",
        "situacao": "ok",
        "texto": "Filipinas (em filipino: Pilipinas, pronunciado: [ˌpɪlɪˈpinɐs]; em inglês:  Philippines, pronunciado: [ˈfɪlɨpiːnz]), oficialmente República das Filipinas (em filipino: Repúbliká ng̃ Pilipinas; em inglês: Republic of the Philippines), é um país localizado no Arquipélago Malaio, no Sudeste Asiático. O arquipélago é delimitado pelo Mar das Filipinas a leste, Mar de Celebes e Mar de Sulu a sul e Mar da\n[…]\nA chegada de Fernão de Magalhães, em 1521, marcou o início da colonização europeia. Em 1543, o explorador espanhol Ruy López de Villalobos deu ao arquipélago o nome de Las Islas Filipinas, em honra de Filipe II de Espanha. Com a chegada de Miguel López de Legazpi, em 1565, o primeiro assentamento espanhol no arquipélago foi estabelecido, e as Filipinas se tornaram parte do Império Espanhol por mais de 300 anos.\n[…]\nO explorador espanhol Ruy López de Villalobos, durante sua expedição em 1542, chamou as ilhas de Leyte e Samar de \"Felipinas\" em homenagem a Filipe II da Espanha, então Príncipe das Astúrias. No fim, o nome \"Las Islas Filipinas\" seria usado para cobrir as possessões espanholas do arquipélago.\n[…]\nAo mesmo tempo que os portos filipinos abriam-se para o exterior, a identidade social do arquipélago mudou. O termo “filipino” passou a designar todos os seus residentes, ao invés de apenas os espanhóis nascidos ali. Ao mesmo tempo, surgiram movimentos pela independência das Filipinas. Nas últimas décadas do século, se intensificaram os movimentos pela independência, sobretudo entre uma elite educada na Europa, que retornava à terra natal com ideias liberais e separatistas.\n[…]\nA música filipina pode ser classificada em três grupos principais: música folclórica, música de influência espanhola e música contemporânea.​ A música folclórica abrange todas as tradições que perduram entre os grupos indígenas do país.\n[…]\nMissões diplomáticas das Filipinas\n[…]\nEmbaixada do Brasil nas Filipinas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Burkina Faso",
      "descricao": "País da África Ocidental, chamado Alto Volta até 1984."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Adotado em 1984 no lugar de Alto Volta, o nome Burkina Faso significa terra de quem?",
    "resposta": "Dos homens íntegros",
    "distratores": [
      "Dos grandes guerreiros",
      "Dos antigos reis",
      "Dos caçadores"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Burkina_Faso"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Burkina_Faso",
        "situacao": "ok",
        "texto": "Burkina Faso is a landlocked country in West Africa. It is bordered by Mali to the northwest, Niger to the northeast, Benin to the southeast, Togo and Ghana to the south, and Ivory Coast to the southwest. It covers an area of 274,223 km2 (105,878 sq mi). In 2024, the country had an estimated population of approximately 23,286,000. Its citizens are known as Burkinabes, and its capital and largest c\n[…]\nThe country was renamed \"Burkina Faso\" on 4 August 1984 by then-President Thomas Sankara. The words \"Burkina\" and \"Faso\" stem from different languages spoken in the country: \"Burkina\" comes from Mooré and means \"upright\", showing how the people are proud of their integrity. \"Faso\" comes from the Dyula language, as written in N'Ko: ߝߊ߬ߛߏ߫ faso, and means \"fatherland\", literally, \"father's house\".\n[…]\nOn 2 August 1984, on Sankara's initiative, the country's name changed from \"Upper Volta\" to \"Burkina Faso\", or land of the honest men; (the literal translation is land of the upright men). The presidential decree was confirmed by the National Assembly on 4 August 1984.\n[…]\nBurkina Faso is an ethnically integrated, secular state where most people are concentrated in the south and centre, where their density sometimes exceeds 48 inhabitants per square kilometre (120/sq mi). Hundreds of thousands of Burkinabè migrate regularly to Ivory Coast and Ghana, mainly for seasonal agricultural work.\n[…]\nThe government of Burkina Faso's 2019 census reported that 63.8% of the population practiced Islam, and that the majority of this group belong to the Sunni branch, while a small minority adheres to Shia Islam. A significant number of Sunni Muslims identify with the Tijaniyah Sufi order.\n[…]\nOutline of Burkina Faso\n[…]\nBurkina Faso profile from ECOWAS\n[…]\nBurkina Faso profile from the BBC News.\n[…]\nWikimedia Atlas of Burkina Faso\n[…]\nBurkina Faso, Democracy Now!\n[…]\nBurkina Faso Business Facts from Bizpages"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Burquina_Fasso",
        "situacao": "ok",
        "texto": "Burquina Fasso, Burquina Faso, Burkina Faso ou simplesmente Burquina, é um país africano limitado a oeste e a norte pelo Mali, a leste pelo Níger, e a sul pelo Benim, pelo Togo, por Gana e pela Costa do Marfim. Sua capital é a cidade de Uagadugu (em francês: Ouagadougou). Sua área territorial abrange 274 200 km2 com uma população estimada de mais de 15 757 000 de habitantes.\n[…]\nEntre 1960 e 1984 foi conhecido como República do Alto Volta. Em 4 de agosto de 1984 abandonou a denominação herdada do período colonial, passando a se chamar Burquina Fasso. A nova designação foi cunhada pelo então chefe de Estado, Thomas Sankara, que criou o novo nome a partir das palavras Burkina ('homens íntegros', em more) e Faso ('terra natal' em diúla), o que resulta em \"terra das pessoas íntegras\".\n[…]\nO país foi renomeado para \"Burquina Fasso\" em 4 de agosto de 1984, pelo então presidente Thomas Sankara. As palavras \"Burkina\" e \"Faso\" provêm de diferentes línguas faladas no país: \"Burkina\" vem do more e significa \"direito\" ou \"íntegro\", mostrando como o povo se orgulha de sua honradez, enquanto \"Faso\" vem da língua diúla e significa \"pátria\" (literalmente, \"casa do pai\"). A junção das palavras gera o termo \"terra dos homens íntegros\" ou \"pátria das pessoas honradas\".\n[…]\nO sufixo \"-bè\" adicionado a \"Burkina\" para formar o adjetivo pátrio \"burkinabè\" ou \"burquinabé\" vem da língua fula e significa tanto \"homem\" quanto \"mulher\" íntegra.\n[…]\nEm 2016, a expectativa média de vida foi estimada em 60 anos para homens e 61 para mulheres. Em 2018, a taxa de mortalidade entre a população com menos de cinco anos e a taxa de mortalidade infantil foi de 76‰ de nascidos vivos. Em 2014, a idade média dos burquineses era de 17 anos e a taxa de crescimento populacional estimada era de 3,05%.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Tailândia",
      "descricao": "País do Sudeste Asiático com capital em Bangkok, antes chamado Sião."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 1939, o reino de Sião passou a se chamar Tailândia, nome geralmente traduzido como terra de quem?",
    "resposta": "Dos livres",
    "distratores": [
      "Dos elefantes",
      "Dos monges",
      "Dos reis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Thailand"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thailand",
        "situacao": "ok",
        "texto": "Thailand, officially the Kingdom of Thailand, and formerly known as Siam, is a country located in Mainland Southeast Asia. It shares land borders with Myanmar to the west and northwest, Laos to the east and northeast, Cambodia to the southeast, and Malaysia to the south. Its maritime boundaries include the Gulf of Thailand and the Andaman Sea, and it shares maritime borders with Vietnam, Indonesia\n[…]\nBefore 1939, Thailand was known internationally as Siam. The word Thai (ไทย) is traditionally interpreted to mean 'free man' in the Thai language, distinguishing the Thai from serfs in historical society. However, other scholars suggest the term originally meant simply 'people' or 'human being', noting its historical use in rural areas.\n[…]\nThe name Siam gained official status in international relations during the 19th century, notably appearing in the Bowring Treaty under the signature of King Mongkut (r. 1851–1868), who signed as Mongkut Rex Siamensium (Mongkut, King of the Siamese). Following the transition to a constitutional monarchy, the country was officially renamed Thailand on 24 June 1939.\n[…]\nOutline of Thailand\n[…]\nThailand Internet information Archived 18 September 2008 at the Wayback Machine – National Electronics and Computer Technology Center\n[…]\n\"Thailand\". The World Factbook (2025 ed.). Central Intelligence Agency.\n[…]\nThailand entry in Library of Congress Country Studies. 1987\n[…]\nThailand from UCB Libraries GovPubs (archived 7 February 2009)\n[…]\nThailand from the BBC News\n[…]\nThailand Encyclopædia Britannica entry\n[…]\nWikimedia Atlas of Thailand\n[…]\nLongdo Map – Thailand maps in English and Thai\n[…]\nKey Development Forecasts for Thailand from International Futures\n[…]\n2010 Thailand population census by Economic and Social statistics Bureau (archived 16 January 2013)\n[…]\nTourism Authority of Thailand – official tourism website\n[…]\nThailand Country Fact Sheet from the Common Language Project (archived 31 July 2014)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tail%C3%A2ndia",
        "situacao": "ok",
        "texto": "Tailândia, oficialmente Reino da Tailândia (em tailandês: ราชอาณาจักรไทย; romaniz.: , pronunciado: [râːtɕʰa-ʔaːnaːtɕɑ̀k-tʰɑj]), anteriormente conhecida como Sião (em tailandês: สยาม) é um estado soberano no centro da península da Indochina, no Sudeste asiático. É limitado a norte por Myanmar e Laos, a leste por Laos e Camboja, a sul pelo Golfo da Tailândia e pela Malásia, e a oeste pelo Mar de And\n[…]\nA dinastia Chacri foi fundada por Rama I, o Grande e Banguecoque foi elevada à capital em 1782. Em meio à revolução, o país passou de monarquia absoluta a monarquia constitucional em 1932 e, em 23 de junho de 1939, deixou de chamar-se Sião e adotou seu nome atual, Tailândia. Atualmente, o país é regido por uma junta militar, que tomou o poder em maio de 2014, através de um golpe de Estado. É liderada pelo rei Maha Vajiralongkorn, que ascendeu ao trono em 2016.\n[…]\nMas os birmaneses não conseguiram sustentar o domínio sob o território, o que possibilitou que Taksin, o Grande, restabelecesse a ordem no reino e transferisse a capital siamesa para Thonburi, em 1769. Taksin passou a governar Sião de forma rígida, e os ministros que não aprovavam seus feitos eram depostos ou executados.\n[…]\nO reino possui 3.219 quilômetros de faixa litorânea, a 36ª maior entre os países.\n[…]\nDesde a reforma política da monarquia absoluta em 1932, a Tailândia teve 17 constituições. Ao longo deste tempo, a forma de governo variou de ditadura militar para a democracia eleitoral, mas todos os governos reconheceram um monarca hereditário como o chefe de Estado. Antes de 1932, o Reino de Sião não possuía uma legislação, com todos os poderes legislativos concentrados na pessoa do monarca. Esta era a política adotada desde a fundação do Reino de Sucotai, no século XII.\n[…]\nA Tailândia é muitas vezes referida como a \"terra dos sorrisos\" em folhetos turísticos.\n[…]\nAs datas consideradas feriados oficiais no reino são as seguintes:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Kiribati",
      "descricao": "País insular do Oceano Pacífico formado por atóis espalhados em torno do equador, cuja capital é Tarawa do Sul."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Kiribati, pronunciado quiribás na língua local, é a adaptação do nome colonial de quais ilhas?",
    "resposta": "Ilhas Gilbert",
    "distratores": [
      "Ilhas Marshall",
      "Ilhas Carolinas",
      "Ilhas Cook"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kiribati"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kiribati",
        "situacao": "ok",
        "texto": "Kiribati, officially the Republic of Kiribati, is an archipelagic country spanning the Micronesia and Polynesia sub-regions of Oceania in the central Pacific Ocean. The state comprises 32 atolls and other islands and one remote raised coral island, Banaba. Its total land area is 811 km2 (313 sq mi) dispersed over 3,441,810 km2 (1,328,890 sq mi) of ocean. The spread of the country's islands, from B\n[…]\nRadio Kiribati, based on Tarawa and operated by the government's Broadcasting and Publications Authority (BPA) on 1440 kHz AM, is the only form of mass media that reaches all the major islands. Transmission hours are limited and local content in Gilbertese is supplemented by English summaries and BBC News. The BPA and a private broadcaster also operate FM stations accessible on Tarawa.\n[…]\nSeveral words in Gilbertese have been adopted from European settlers, for instance, kamea is one of the Gilbertese words for 'dog', kiri being the Oceanic one, which has its origins in the I-Kiribati people hearing the European settlers saying \"come here\" to their dogs, and adopting that as kamea.\n[…]\nThe Gilbert Islands where 90% of the Kiribati population live, boast some of the highest population densities in the Pacific, rivalling cities like Hong Kong or Singapore without any skyscrapers or other forms of conventional high-density housing. This overcrowding produces a great amount of pollution, worsening the quality and length of life.\n[…]\nEdward Carlyon Eliot, who was Resident Commissioner of the Gilbert and Ellice Islands (now Kiribati and Tuvalu) from 1913 to 1920, describes this period in his autobiography Broken Atoms.\n[…]\nSir Arthur Grimble wrote about his time working in the British colonial service in Kiribati (then the Gilbert Islands) from 1914 to 1932 in two popular books A Pattern of Islands (1952) and Return to the Islands (1957). He also undertook academic studies of Gilbertese culture."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kiribati",
        "situacao": "ok",
        "texto": "Kiribati, Quiribáti ou Quiribati (pronunciado em português: [kiɾiˈbati]; em inglês: Kiribati, pronunciado: [ˌkɪrɪˈbæs] ou [ˌkɪrɪˈbɑːti]; em gilbertês, Kiribati, pronunciado: [ˌkiɾiˈbæs]), oficialmente República de Kiribati (em inglês: Republic of Kiribati; em gilbertês: Ribaberiki Kiribati), é um país insular na sub-região da Micronésia, na Oceania. O estado compreende 33 ilhas, com atóis e recife\n[…]\nAs Ilhas Gilbert eram habitadas há pelo menos 4 mil ou 5 mil anos por alguns habitantes da Ásia que falavam a atual língua oficial de Kiribati, o gilbertês, antes de terem qualquer contacto com europeus, provavelmente espanhóis, no século XVI. As ilhas foram \"batizadas\" em 1820 por um almirante da Estónia, Adam Johann von Krusenstern e pelo seu capitão francês Louis Duperrey, em homenagem ao capitão britânico Thomas Gilbert, que tinha \"descoberto\" o arquipélago em 1788.\n[…]\nNorthern Gilberts\n[…]\nSouthern Gilberts\n[…]\nIlhas Gilbert\n[…]\nIlhas da Linha e Fênix\n[…]\nA República de Kiribati é membro das Nações Unidas e da Commonwealth (a Comunidade de Nações, antiga Comunidade Britânica). Consiste num conjunto de 33 atóis de coral, agrupados em três grupos de ilhas, no centro do Oceano Pacífico. De oeste para este temos o grupo das ilhas de Gilbert (17), as Ilhas Fénix (8) e as ilhas da Linha (8), excluindo três da parte norte deste grupo que são território dos Estados Unidos.\n[…]\nTaraua (em inglês e quiribati/gilbertês, Tarawa) é a capital (com 25 154 habitantes), dividida em três centros administrativos: Bairiki (executivo), Ambo (legislativo) e Betio (judiciário). Fica situada no atol de Taraua, no norte das Ilhas Gilbert.\n[…]\nO país tem uma população de 120 mil habitantes (censo 2020) que vivem principalmente no grupo das ilhas Gilbert, no atol de Taraua. Os povos nativos são majoritariamente micronésios, existindo uma pequena minoria polinésia. A etnia majoritária é a dos i-kiribati, ou gilberteses.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Vietnã",
      "descricao": "País do Sudeste Asiático com litoral no Mar da China Meridional, capital Hanói."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 1976, após a reunificação do Vietnã, a maior cidade do país passou a homenagear Ho Chi Minh. Como ela se chamava antes?",
    "resposta": "Saigon",
    "distratores": [
      "Hué",
      "Da Nang",
      "Haiphong"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ho_Chi_Minh_City"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ho_Chi_Minh_City",
        "situacao": "ok",
        "texto": "Ho Chi Minh City (HCMC; Vietnamese: Thành phố Hồ Chí Minh, [tʰaɲ˨˩ fow˦˥ ho˨˩ cɪj˦˥ mɨn˧˧] ), formerly Saigon (Sài Gòn, [ʂaj˨˩ ɣɔŋ˨˩]), is the most populous city and centrally-governed city of Vietnam, with a population of more than 14 million in 2025. Its geography is defined by rivers and canals, of which the largest is the Saigon River.\n[…]\nThe name Ho Chi Minh City was given after reunification in 1976 to honour the late Ho Chi Minh. The informal name of Sài Gòn remains in daily speech. There is a technical difference between the two terms: Sài Gòn is used to refer to the city centre, aptly named Saigon and the adjacent neighborhoods of Bến Thành, Tân Định, Xuân Hòa while Ho Chi Minh City refers to all of its urban and rural area.\n[…]\nOn 2 November of the same year, Diệm was assassinated in Saigon, in a successful coup by Dương Văn Minh.\n[…]\nIn July 1976, upon the establishment of the unified Socialist Republic of Vietnam, the city of Saigon (including the Cholon area), the province of Gia Ðịnh and two suburban districts of two other nearby provinces were combined to create Ho Chi Minh City, in honour of the late Communist leader Ho Chi Minh. At the time, the city covered an area of 1,295.5 square kilometres (500.2 sq mi) with eight districts and five rurals: Thủ Đức, Hóc Môn, Củ Chi, Bình Chánh, and Nhà Bè.\n[…]\nThe city is home to a number of association football clubs. Ho Chi Minh City F.C. is based at Thống Nhất Stadium, formerly as Cảng Sài Gòn, it was four-time champions of Vietnam's V.League 1 (in 1986, 1993–94, 1997, and 2001–02). Navibank Saigon F.C., founded as Quân Khu 4, was also based at Thống Nhất Stadium, emerged as champions of the First Division in the 2008 season, and was promoted to the V-League in 2009, the club has since been dissolved during a corruption scandal."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cidade_de_Ho_Chi_Minh",
        "situacao": "ok",
        "texto": "A Cidade de Ho Chi Minh (em vietnamita:  Thành phố Hồ Chí Minh), e comumente conhecida e nomeada até 1975 como Saigon(pt-BR) ou Saigão(pt-PT?), é a maior cidade e principal centro financeiro, corporativo e mercantil do Vietname. Situa-se no sul do país e tem cerca de 8,5 milhões de habitantes. É uma cidade histórica e portuária, recebendo a classificação de cidade global beta, por parte do Globali\n[…]\nEste nome permaneceu até o momento da conquista francesa na década de 1860, quando a força de ocupação europeia adotou o nome de Saigon para a cidade, uma forma ocidentalizada do nome tradicional, embora a cidade ainda tenha sido identificada como 嘉 定 em mapas chineses até pelo menos o ano de 1891. Após a tomada comunista no Vietnã do Sul, em 1975, um governo provisório renomeou a cidade para Ho Chi Minh, homenageando o falecido líder norte-vietnamita Hồ Chí Minh.\n[…]\nEntre as comunidades da diáspora vietnamita e particularmente os Estados Unidos (que havia lutado contra os comunistas), este evento é comumente chamado de \"Queda de Saigon\", enquanto a República Socialista do Vietname se refere a ela como a \"Libertação de Saigon.\" Em 1976, quando da unificação do Vietname do Norte e Vietname do Sul sob o regime comunista, e a criação da República Socialista do Vietname, a cidade de Saigon - incluindo a pequena cidade próxima de Cholon, a província de Gia Dịnh e dois bairros suburbanos de duas outras províncias vizinhas - foi renomeada para Ho Chi Minh, em homenagem ao líder comunista Hồ Chí Minh, morto em 1969.\n[…]\nEntretanto, o antigo nome de Saigon ainda é amplamente utilizado por muitos vietnamitas, especialmente em contextos informais.\n[…]\nOs habitantes da cidade são geralmente conhecidos como \"Saigonese\" em inglês, \"Saigonnais\" em francês e \"Dan Sai Gon\" em vietnamita. Um grau variável do idioma inglês é falado, especialmente nos setores de turismo e comércio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "China",
      "descricao": "País da Ásia Oriental, oficialmente República Popular da China, cuja capital é Pequim."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em mandarim, Zhongguo, o nome que os chineses dão ao próprio país, é tradicionalmente traduzido como quê?",
    "resposta": "Reino do Meio",
    "distratores": [
      "Reino do Céu",
      "Terra do Dragão",
      "Império do Sol"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Names_of_China"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Names_of_China",
        "situacao": "ok",
        "texto": "China has many contemporary and historical designations given in various languages for the East Asian country known as 中国; 中國; Zhōngguó  ('Central State' or 'Middle Kingdom') in Standard Chinese, a form based on the Beijing dialect of Mandarin.\n[…]\nBut after the founding of the Republic of China in 1912, Zhongguo was also adopted as the abbreviation of Zhonghua minguo, and most Chinese considered Shina foreign and demanded that even the Japanese replace it with Zhonghua minguo, or simply Zhongguo.\n[…]\nThe Republic of China and the People's Republic of China both used Zhonghua in their official names. Thus, Zhongguo became the common name for both governments and Zhōngguó rén (中国人; 中國人) for their citizens. Overseas Chinese are referred to as huáqiáo (华侨; 華僑; 'Chinese overseas'), or huáyì (华裔; 華裔; 'Chinese descendants'), i.e. Chinese children born overseas.\n[…]\nSun Yat-sen coined the English name \"Republic of China\" in a 1904 pamphlet, The True Solution of the Chinese Question.\n[…]\nTaiwanese politician Mei Feng had criticised the official English name of the state, \"Republic of China\", for failing to translate the Chinese character Min (Chinese: 民; English: people) according to Sun Yat-sen's original interpretations. According to him, the name should instead be translated as \"the People's Republic of China\", which confuses with the current official name of China under communist control.\n[…]\nSinologists usually use \"Chinese\" in a more restricted sense, akin to the classical usage of Zhongguo, to the Han ethnic group, which makes up the bulk of the population in China and of the overseas Chinese.\n[…]\nHowever, its use by Turkic speakers within China, such as the Uyghurs, is considered pejorative by the Chinese authority who tried to ban it."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nomes_da_China",
        "situacao": "ok",
        "texto": "O nome China, similar na maioria das línguas europeias, parece haver chegado à Europa desde o sul da Ásia, ainda que não haja evidências concluintes, o nome poderia ser precedido da Dinastia Qin, a primeira dinastia imperial. Na antiguidade, utilizou-se também o termo Catay, que tem a sua origem do povo altaico kitan, que fundou a Dinastia Liao no século X. Este é o nome no qual se chamava a China\n[…]\nUtiliza-se normalmente o termo China continental administrado pela República Popular da China, sem incluir as antigas colônias europeias de Macau e Hong Kong. Nota-se que esta terminação tem um sentido geopolítico, e não estreitamente geográfico; a ilha de Hainan, por exemplo, é considerada como parte da China continental, enquanto que a Península de Macau ou os novos territórios de Hong Kong não o são.\n[…]\nDevido à ambiguidade atual no uso do termo \"China\", às vezes se usa a expressão Grande China (Dà Zhōnghuá, 大中华 / 大中華, en chinês), para se referir ao conjunto da China continental, Taiwan (República da China), Hong Kong e Macau.\n[…]\nNa língua chinesa, o país era antigamente denominado mediante o nome da dinastia governante. Desde a queda da última dinastia (a Dinastia Qing), o nome habitual do país é Zhongguó (simplificado: 中国, tradicional: 中國), que pode ser traduzido como \"o país do centro\".\n[…]\nOutra variante do nome é Zhōnghuá (中华 / 中華), utilizado em nomes oficiais tanto da República Popular da China quanto da República da China, que pode ser abreviado simplesmente como Huá, como nome da agência chinesa oficial de notícias Xinhua (新华 / 新華 - \"Nova China\"). Ademais, também existem os nomes poéticos Huáxià (华夏 / 華夏) e Shénzhōu (神州).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Japão",
      "descricao": "País insular do Leste Asiático, cuja capital é Tóquio."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Nihon, como os japoneses chamam seu país, significa literalmente o quê?",
    "resposta": "Origem do sol",
    "distratores": [
      "Terra das ilhas",
      "Reino do Leste",
      "Montanha sagrada"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Names_of_Japan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Names_of_Japan",
        "situacao": "ok",
        "texto": "The word Japan is an exonym, and is used (in one form or another) by many languages. The Japanese names for Japan are Nihon ([ɲi.hoꜜɴ] , hiragana: にほん) and Nippon ([ɲip.poꜜɴ]  hiragana: にっぽん). They are both written in Japanese using the kanji 日本.\n[…]\nBoth Nippon and Nihon literally mean \"the sun's origin\", that is, where the sun originates, and are often translated as the Land of the Rising Sun. This nomenclature comes from Imperial correspondence with the Chinese Sui dynasty and refers to Japan's eastern position relative to China. Before Nihon came into official use, Japan was known as Wa (倭) or Wakoku (倭国). Wa was a name early China used to refer to an ethnic group living in Japan around the time of the Three Kingdoms period.\n[…]\nIn English, the modern official title of the country is simply \"Japan\", one of the few countries to have no \"long form\" name. The official Japanese-language name is Nippon-koku or Nihon-koku (日本国), literally \"Nation of Japan\". As an adjective, the term \"Dai-Nippon\" remains popular with Japanese governmental, commercial, or social organizations whose reach extend beyond Japan's geographic borders (e.g., Dai Nippon Printing, Dai Nippon Butoku Kai, etc.).\n[…]\nThe Japanese name for Japan, 日本, can be pronounced either Nihon or Nippon. Both readings come from the on'yomi.\n[…]\nWhile both pronunciations are correct, Nippon is frequently preferred for official purposes, including money, stamps, and international sporting events, as well as the Nippon-koku, literally the \"State of Japan\" (日本国).\n[…]\nis rarely used. In other cases, uses are variable. The name for the Bank of Japan (日本銀行), for example, is given as NIPPON GINKO on banknotes but is often referred to, such as in the media, as Nihon Ginkō.\n[…]\nNihon-kai (Sea of Japan)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nomes_do_Jap%C3%A3o",
        "situacao": "ok",
        "texto": "Há muitos nomes do Japão em português, japonês e outras línguas. A palavra \"Japão\" (ou \"Japon\") é um exônimo, e é usado (de uma forma ou de outra) por um grande número de idiomas. Os nomes japoneses para Japão são Nippon (にっぽん ) e Nihon (にほん ). Ambos são escritos em japonês usando o kanji 日本. O nome japonês Nippon é usado para a maioria dos fins oficiais, inclusive sobre a moeda japonesa, selos po\n[…]\nTanto Nippon quanto Nihon significam, literalmente, \"origem do sol\", isto é, onde o sol se origina, e são muitas vezes traduzidos como a Terra do Sol Nascente. Esta nomenclatura vem de correspondência imperial com a Dinastia Sui chinesa e refere-se a posição do Japão ao oriente em relação à China. Antes de Nihon entrar em uso oficial, o Japão era conhecido como Wa (倭) ou Wakoku (倭国).\n[…]\nNo entanto, a pronúncia Yamato não pode ser formada a partir dos sons dos caracteres que a constituem; refere-se a um lugar no Japão e é especulado como originalmente significando \"Portal da Montanha\" (山戸). Outros nomes originais em textos chineses incluem o país de Yamatai (邪马台国), onde a Rainha Himiko viveu. Quando hi no moto, a maneira indígena japonesa de dizer \"origem do sol\", foi escrito em kanji, foi lhe dado os caracteres 日本.\n[…]\nNippon apareceu na história só no final do séc. VII. O Livro antigo de Tang (舊唐書), uma das Vinte e Quatro Histórias, afirma que o emissário japonês não gostava do nome de seu país Woguo (倭國), e o mudou para Nippon (日本), ou \"Origem do Sol\". Outra crônica do séc. VIII O Verdadeiro Significado de Shiji (史記正義), no entanto, afirma que a Imperatriz chinesa Wu Zetian ordenou que um emissário japonês alterasse o nome do país para Nippon.\n[…]\nA transcrição em katakana ジャパン da palavra inglesa Japan é às vezes encontrada em japonês, por exemplo, nos nomes das organizações que procuram projetar uma imagem internacional.\n[…]\nLíngua japonesa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Uruguai",
      "descricao": "País do sudeste da América do Sul entre Argentina e Brasil, cuja capital é Montevidéu."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome oficial do Uruguai inclui uma palavra que indica sua posição em relação ao rio de mesmo nome. Que palavra é essa?",
    "resposta": "Oriental",
    "distratores": [
      "Ocidental",
      "Austral",
      "Setentrional"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Uruguay"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uruguay",
        "situacao": "ok",
        "texto": "Uruguay, officially the Oriental Republic of Uruguay,is a country in southeastern South America. It shares borders with Argentina to its west and southwest and Brazil to its north and northeast, while bordering the Río de la Plata to the south and the Atlantic Ocean to the southeast. It is part of the Southern Cone region of South America. Uruguay covers an area of approximately 176,215 square kil\n[…]\nSince its independence, the country has been known as \"República Oriental del Uruguay\", which literally translates to \"Republic East of the Uruguay [River]\". However, it is officially translated either as the \"Oriental Republic of Uruguay\" or the \"Eastern Republic of Uruguay\".\n[…]\n25 August is celebrated as Independence Day, a national holiday. The nation's first constitution was adopted on 18 July 1830. The country was officially the Oriental State of Uruguay.\n[…]\nSince May 2009, homosexuals have been allowed to serve in the military after the defence minister signed a decree stating that military recruitment policy would no longer discriminate on the basis of sexual orientation. In the fiscal year 2010, the United States provided Uruguay with $1.7 million in military assistance, including $1 million in Foreign Military Financing and $480,000 in International Military Education and Training.\n[…]\nIn 2010, Uruguay's export-oriented agricultural sector contributed to 9.3% of the GDP and employed 13% of the workforce. Official statistics from Uruguay's Agriculture and Livestock Ministry indicate that meat and sheep farming in Uruguay occupies 59.6% of the land. The percentage further increases to 82.4% when cattle breeding is linked to other farm activities such as dairy, forage, and rotation with crops such as rice.\n[…]\nOutline of Uruguay\n[…]\nUruguay – Official website of the Oriental Republic of Uruguay\n[…]\nWikimedia Atlas of Uruguay\n[…]\nGeographic data related to Uruguay at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Uruguai",
        "situacao": "ok",
        "texto": "Uruguai (em castelhano: Uruguay, pronunciado: [uɾuˈɣwaj]), oficialmente República Oriental do Uruguai (em castelhano:  República Oriental del Uruguay, pronunciado: [reˈpuβlika oɾjenˈtal del uɾuˈɣwai]), é um país localizado na parte sudeste da América do Sul. Sua população é de cerca de 3,5 milhões de habitantes, dos quais 1,8 milhão vivem na capital, Montevidéu, e em sua área metropolitana. Estima\n[…]\nLa República Oriental del Uruguay originalmente significa a república a leste do [rio] Uruguai e é geralmente traduzida em português como República Oriental do Uruguai, enquanto o governo normalmente utiliza apenas Uruguay para se referir ao país. A etimologia do nome do rio homônimo, que vem da língua guarani, é incerta, mas o significado oficial é \"rio dos pássaros pintados\".\n[…]\nDesde maio de 2009, os homossexuais estão autorizados a servir abertamente nas forças armadas do país, após o ministro da defesa assinar um decreto afirmando que a política de recrutamento militar já não é mais discriminatória com base na orientação sexual das pessoas. No ano fiscal de 2010, os Estados Unidos forneceram ao Uruguai 1,7 milhão de dólares em ajuda militar, incluindo 1 milhão de dólares em financiamento e 480 mil dólares em educação e formação militar.\n[…]\nEm 2010, o setor agrícola orientado para exportação do Uruguai contribuiu com 9,3% do PIB e empregava 13% da força de trabalho do país. As estatísticas oficiais do Ministério da Agricultura e Pecuária do Uruguai indicam que a carne e criação de ovinos ocupam 59,6% do território. Os percentuais aumentam para 82,4% quando a pecuária está ligada a outras atividades agrícolas, como laticínios, forragem e rotação de culturas de arroz.\n[…]\nBanda Oriental do Uruguai\n[…]\nMissões diplomáticas do Uruguai\n[…]\n«Página oficial da Presidência da República do Uruguai» (em espanhol)\n[…]\n«Página oficial do Estado Uruguaio» (em espanhol)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Astana",
      "descricao": "Capital do Cazaquistão desde 1997, chamada Nur-Sultan entre 2019 e 2022."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Entre 2019 e 2022, a capital do Cazaquistão levou o nome de qual político, o primeiro presidente do país?",
    "resposta": "Nursultan Nazarbayev",
    "distratores": [
      "Kassym-Jomart Tokayev",
      "Islam Karimov",
      "Saparmurat Niyazov"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Astana"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Astana",
        "situacao": "ok",
        "texto": "Astana is the capital city of Kazakhstan. With a population of 1.7 million within the city limits, it is the second-largest in the country after Almaty,  the national capital until 1997. The city lies on the banks of the Ishim river in the north of Kazakhstan and is located within the Akmola Region but is self-administering. Initially founded as Aqmoly in 1830, the city was later renamed Akmolinsk\n[…]\nIn 2019, the city adopted the name Nur-Sultan in honor of former president Nursultan Nazarbayev, but it reverted to the name Astana in 2022.\n[…]\nIn December 1997, the city replaced Almaty as the capital of Kazakhstan, and in May 1998, it was renamed Astana, which means \"capital city\" in Kazakh. In March 2019, the capital was renamed to Nur-Sultan (; Kazakh: Нұр-Сұлтан / Nūr-Sūltan [ˌnʊrsʊɫˈtɑn]) in honor of the long-ruling President Nursultan Nazarbayev, shortly after his resignation. In September 2022, President Kassym-Jomart Tokayev signed a constitutional amendment to revert to the name Astana.\n[…]\nIn March 2019, the Kazakhstani government renamed the city Nur-Sultan to honour the country's outgoing long-term authoritarian president, Nursultan Nazarbayev. In September 2022, after a number of controversies and unrest resulting in Nazarbayev's resignation from the Security Council of Kazakhstan, the name of the capital was changed back to Astana.\n[…]\nNursultan Nazarbayev International Airport (IATA: NQZ, ICAO: UACC), located 17 kilometres (11 mi) south-east of the city center, is the main gateway for the city's domestic and international civilian air traffic. It is the second-busiest airport in Kazakhstan, with 8,315,108 passengers passing through it in 2024. The airport hosts 21 airlines operating regular passenger flights inside the country and internationally. Air Astana maintains its second-largest hub at the airport.\n[…]\nAstana also cooperates with:\n[…]\nList of people from Astana"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Astana",
        "situacao": "ok",
        "texto": "Astana (em cazaque e russo: Астана, pronunciado: [ɑstɑˈnɑ] ()) é a capital do Cazaquistão. Conhecida até 1998 como Aqmola, foi rebatizada em 2019 para Nur-Sultã, mas voltou a ser renomeada para seu nome anterior, Astana, em 2022. Ela está localizada ao longo do rio Ishim no norte do país, na região Aqmola, embora seja administrada separadamente como uma entidade independente.\n[…]\nEm 1992, seu nome foi novamente alterado para Aqmola (em cazaque:  Ақмола), o nome original modificado que significa \"vala branca\". Em 10 de dezembro de 1997, Aqmola se tornou a capital do Cazaquistão. Em 6 de maio de 1998, a cidade foi rebatizada para Astana, que significa \"capital\" em cazaque. Em 20 de março de 2019, foi oficialmente renomeada para Nur-Sultã, uma homenagem ao ex-presidente e \"pai da nação\", Nursultan Nazarbaev. Porém, essa decisão foi revertida em 2022.\n[…]\nEm 23 de novembro de 2016, o Parlamento do Cazaquistão votou unanimemente uma lei para dar o nome do presidente Nursultan Nazarbaev à capital do país. No entanto, o presidente já havia rejeitado uma proposta similar em 2008. Em 19 de março de 2019, o presidente Nazarbaev renunciou e em 23 de março a cidade foi rebatizada de Nur-Sultã.\n[…]\nEm setembro de 2022, o presidente cazaque Kassym-Jomart Tokayev anunciou que a cidade voltaria ao antigo nome Astana. Em 17 de setembro, ele assinou uma lei que alterou a constituição para restaurar o antigo nome.\n[…]\nEm 20 de março de 2019, foi decidido que o nome da cidade, que antes significava apenas \"capital do país\" foi rebatizada para Nur-Sultã em homenagem ao presidente que renunciou.\n[…]\nAstana é cidade-irmã de:\n[…]\nAstana é um ponto importante nos caminhos-de-ferro, não só em sentido norte-sul (de Petropavl, ou Petropavlovsk, para Tasquente e Almati), mas também oeste-leste (de Moscovo para a China). A cidade é servida pelo Aeroporto Internacional Nursultan Nazarbayev.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Suíça",
      "descricao": "País sem litoral da Europa Central, confederação de 26 cantões."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Confederação Suíça é formada por quantos cantões?",
    "resposta": "Vinte e seis",
    "distratores": [
      "Dezoito",
      "Vinte",
      "Trinta e dois"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cantons_of_Switzerland"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cantons_of_Switzerland",
        "situacao": "ok",
        "texto": "The 26 cantons of Switzerland are the member states of the Swiss Confederation. The nucleus of the Swiss Confederacy in the form of the first three confederate allies used to be referred to as the Waldstätte. Two important periods in the development of the Old Swiss Confederacy are summarized by the terms Acht Orte ('Eight Cantons'; from 1353 to 1481) and Dreizehn Orte ('Thirteen Cantons', from 15\n[…]\nThe two-letter abbreviations for Swiss cantons are widely used, e.g. on car license plates. They are also used in the ISO 3166-2 codes of Switzerland with the prefix \"CH-\" (Confœderatio Helvetica — Helvetian Confederation — Helvetia having been the ancient Roman name of the region). CH-SZ, for example, is used for the canton of Schwyz.\n[…]\nThe historical canton of Appenzell divided itself into \"inner\" and \"outer\" halves as a consequence of the Reformation in Switzerland in 1597: Appenzell Innerrhoden (Catholic) and Appenzell Ausserrhoden (Protestant).\n[…]\nBetween 1831 and 1833 the canton of Schwyz was divided into half-cantons: (Inner) Schwyz and the break-away Outer Schwyz; in this instance, the half-cantons were forced by the Confederation to settle their disputes and reunite.\n[…]\nThe enlargement of Switzerland by way of the admission of new cantons ended in 1815. The latest formal attempt considered by Switzerland was in 1919 from Vorarlberg but subsequently rejected. A few representatives submitted in 2010 a parliamentary motion to consider enlargement although it was widely seen as anti-EU rhetoric rather than a serious proposal. The motion was eventually dropped and not even examined by the parliament.\n[…]\nData codes for Switzerland § Cantons\n[…]\nFlags and arms of cantons of Switzerland\n[…]\nList of cantons of Switzerland by elevation\n[…]\nSpatial planning in Switzerland\n[…]\nSwissworld.org – The cantons of Switzerland\n[…]\nSwisskarte.ch – Maps of the Cantons of Switzerland"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cant%C3%B5es_da_Su%C3%AD%C3%A7a",
        "situacao": "ok",
        "texto": "Cantão Suíço historicamente é considerado um Estado soberano, com fronteiras próprias, além do exército e moeda. A estrutura federal recente foi estabelecida em 1848, e mesmo atualmente Genebra refere-se a si mesmo como República e Cantão de Genebra (ver: GE.ch).\n[…]\nA Confederação Helvética (comumente Suíça) é constituída por 26 cantões suíços iguais em direito, dos quais três (Appenzell, Basileia e Unterwalden) estão subdivididos em semicantões que se chamam respectivamente: Appenzell Exterior e Appenzell Interior, Basileia-Cidade e Basileia-Campo, e Obwalden e Nidwalden.\n[…]\nDurante o século XVI, a Confederação Helvética foi constituída por 13 estados autônomos, os quais foram denominados cantões. Embora cada um destes fizesse parte do Sacro Império Romano-Germânico, eles haviam conquistado uma quase completa independência quando os suíços derrotaram o imperador Maximiliano I em 1499.\n[…]\nDesde 1848, os cantões são os membros federativos do Estado Federal, mantêm uma larga autonomia, dispõem da soberania em todos os domínios que não são da competência exclusiva da Confederação Suíça e constituem a base para a criação das sete grandes regiões.\n[…]\nAlguns cantões possuem enclaves em outros cantões como:\n[…]\nA ordem tradicional, pela qual são apresentados em toda documentação oficial suíça, é a seguinte. A abreviatura dos cantões constitui o código ISO 3166-2:CH.\n[…]\nOs cantões estão divididos num total de 2 767 comunas (1 de janeiro de 2005)\n[…]\nEste mapa dos cantões da Suíça mostra a última alteração ocorreu em 1979, com a desagregação do cantão do Jura do cantão de Berna:\n[…]\nLocalização dos cantões e respectivas abreviações:\n[…]\nComunas da Suíça\n[…]\nDistritos da Suíça\n[…]\nLínguas da Suíça",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "China",
      "descricao": "País da Ásia Oriental, oficialmente República Popular da China, cuja capital é Pequim."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Com quantos países a China faz fronteira por terra?",
    "resposta": "Quatorze",
    "distratores": [
      "Nove",
      "Onze",
      "Dezessete"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Borders_of_China"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Borders_of_China",
        "situacao": "ok",
        "texto": "The People's Republic of China (PRC) shares land borders with 14 countries (tied with Russia for the most in the world): North Korea, Russia, Mongolia, Kazakhstan, Kyrgyzstan, Tajikistan, Afghanistan, Pakistan, India, Nepal, Bhutan, Myanmar, Laos, and Vietnam, and with two Special administrative regions of China, Hong Kong and Macao.\n[…]\nTo the west, China has maritime borders with South Korea, Japan, and contested limits with Taiwan and other countries in the South China Sea, among other territorial disputes.\n[…]\nAt 22,457 kilometres (13,954 mi), China has the longest land borders of any country.\n[…]\nBelow is a table of countries and territories that share a land border with China around its perimeter. In parentheses are their lengths in miles.\n[…]\nThe region of all countries bordering China is sometimes referred to by scholars as the China Rim, or simply as China's periphery (Chinese: 中国周边). The China Rim plays a significant role in competition between other countries and China, as is the case with America's China Containment Policy. Significant competition took place between America and China in the region after the middle of the 20th century.\n[…]\nSince 1689, the relevant treaties on the boundary of China are:\n[…]\nPorts of entry of China\n[…]\nTerritorial changes of the People's Republic of China\n[…]\nTerritorial disputes of the People's Republic of China\n[…]\nMedia related to Borders of China at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Canadá",
      "descricao": "País da América do Norte cuja capital é Ottawa."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Além de dez províncias, o Canadá tem quantos territórios, todos no norte do país?",
    "resposta": "Três",
    "distratores": [
      "Dois",
      "Quatro",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Provinces_and_territories_of_Canada"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Provinces_and_territories_of_Canada",
        "situacao": "ok",
        "texto": "Canada has ten provinces and three territories that are sub-national administrative divisions under the jurisdiction of the Canadian Constitution. In the 1867 Canadian Confederation, three provinces of British North America—New Brunswick, Nova Scotia, and the Province of Canada (which upon Confederation was divided into Ontario and Quebec)—united to form a federation, becoming a fully independent \n[…]\n(In 1949, this land returned to Canada as part of the province of Newfoundland.) In 1999, Nunavut was created from the northern and eastern portions of the Northwest Territories.\n[…]\nSince Confederation in 1867, there have been several proposals for new Canadian provinces and territories. The Constitution of Canada requires an amendment for the creation of a new province. The creation of a new territory requires only an act of Parliament, a legislatively simpler process.\n[…]\nIn late 2004, Prime Minister Paul Martin surprised some observers by expressing his personal support for all three territories gaining provincial status \"eventually\". He cited their importance to Canada as a whole and the ongoing need to assert sovereignty in the Arctic, particularly as global warming could make that region more open to exploitation, leading to more complex international waters disputes.\n[…]\nLanguage policies of Canada's provinces and territories\n[…]\nProvincial and territorial museums of Canada\n[…]\nList of Canada-related topics by provinces and territories\n[…]\nPopulation of Canada by province and territory\n[…]\nProvincial and territorial government web sites[link removed] – Service Canada (archived August 6, 2013)\n[…]\nProvincial and territorial legislature web sites – Parliament of Canada\n[…]\nProvincial and territorial statistics Archived April 25, 2016, at the Wayback Machine – Statistics Canada\n[…]\nProvincial and territorial immigration information – Citizenship and Immigration Canada (archived November 22, 2017)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Prov%C3%ADncias_e_territ%C3%B3rios_do_Canad%C3%A1",
        "situacao": "ok",
        "texto": "O Canadá é um país da América do Norte, constituído por dez províncias e por três territórios diferentes. Cada uma das províncias possui um certo grau de autonomia em relação ao governo federal, podendo criar leis e impostos provinciais. Além disso, as províncias são responsáveis pelo fornecimento de serviços como educação e saúde pública, por exemplo. Cada província possui um certo número de repr\n[…]\nExistem atualmente três territórios no Canadá. Ao contrário das províncias, os territórios do Canadá não possuem jurisdição inerente (jurisdição própria), e só têm os poderes que lhes foram delegados pelo governo federal. Incluem todo o território continental canadense a norte da latitude 60° N e a oeste da Baía de Hudson, bem como essencialmente todas as ilhas a norte do continente canadense (desde as da Baía de James até o Arquipélago Ártico Canadiano).\n[…]\nEm 1999, Nunavut foi criada a partir da porção oriental do Territórios do Noroeste. Yukon encontra-se na porção ocidental do norte do Canadá, enquanto Nunavut está no leste. Todos os três territórios combinados são a mais escassamente povoada região no Canadá, com cerca de 100 000 habitantes espalhados por uma vasta área. Elas são muitas vezes referida como uma única região, a região norte, para fins organizacionais.\n[…]\nNo final de 2004, o primeiro-ministro Paul Martin surpreendeu alguns observadores, manifestando o seu apoio pessoal a todos os três territórios provinciais ganhando status \"eventualmente\". Ele citou a sua importância para o país como um todo e da constante necessidade de fazer valer a soberania no Ártico, nomeadamente com o aquecimento global poderia tornar essa região mais aberta à exploração.\n[…]\nFederal, provincial e territorial\n[…]\nEvolução territorial do Canadá\n[…]\nProvincial and territorial statistics – Statistics Canada\n[…]\nProvincial and territorial immigration information – Citizenship and Immigration Canada (22 Nov. 2017)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Malásia",
      "descricao": "País do Sudeste Asiático dividido entre a Península Malaia e a ilha de Bornéu, com capital em Kuala Lumpur."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na Malásia, o rei é escolhido em rodízio entre os governantes de nove estados. Quantos anos dura cada reinado?",
    "resposta": "Cinco anos",
    "distratores": [
      "Três anos",
      "Sete anos",
      "Dez anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Yang_di-Pertuan_Agong"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yang_di-Pertuan_Agong",
        "situacao": "ok",
        "texto": "The King of Malaysia, officially Yang di-Pertuan Agong (lit. 'He who is made Lord', Jawi: يڠ دڤرتوان اݢوڠ‎), is the constitutional monarch and ceremonial head of state of Malaysia. The office was established in 1957, when the Federation of Malaya gained independence from the United Kingdom.\n[…]\nAs an elective monarchy, there is no line of succession to the throne of Malaysia.\n[…]\nFormal address to the King is taken seriously in Malaysia. There are two ways of addressing the King:\n[…]\nThe King's Official Birthday is recognized by law as one of the official federal holidays of Malaysia. While it warrants government offices, including schools to be closed and banks and other offices would follow suit, most of it falls on Saturday which is the nation's common weekend day so no additional leave day will be given and premises would already be closed for the weekend. This was before the amendments made it a weekday holiday.\n[…]\nThe 2013 edition was held on the second Saturday of June for the first time, while the 2016 parade was held on the fourth Friday of July (22 July) for the first time in National Heroes Square, Putrajaya, the national seat of government. Since then the ceremony were held there and is not open to general public until today.\n[…]\nRegalia of Malaysia\n[…]\nOfficial state car § Malaysia\n[…]\nVisu Sinnadurai, \"His Majesty Sultan Azlan Shah: The Yang di-Pertuan Agong IX Malaysia\", The Supreme Court Journal, Kuala Lumpur, ISSN 0128-066X. (Special issue to commemorate the installation of His Majesty Sultan Azlan Shah as the Yang di-Pertuan Agong IX Malaysia, with a lengthy description of the functions of the office.)\n[…]\nHis Majesty The Yang Di-Pertuan Agong on Malaysian government website\n[…]\nMalaysia National Library's Yang di-Pertuan Agong page"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Yang_di-Pertuan_Agong",
        "situacao": "ok",
        "texto": "Yang di-Pertuan Agong é, em língua malaia, um título habitualmente traduzido como \"Ele Que Foi Feito Senhor\" dado ao chefe de estado da federação de Estados da Malásia. Este cargo é frequentemente categorizado como \"Rei\" uma vez que a Malásia é uma monarquia constitucional tendo um monarca como chefe de estado. O Yang di-Pertuan Agong é um dos raros exemplos de monarcas eleitos no mundo.\n[…]\nDepois do primeiro ciclo de nove Yang di-Pertuan Agong (1957–1994), a ordem de eleição foi estabelecida como segue:\n[…]\nLista de primeiros-ministros da Malásia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Bósnia e Herzegovina",
      "descricao": "País dos Bálcãs, com capital em Sarajevo, surgido da antiga Iugoslávia."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Criada pelo acordo que encerrou a guerra dos anos noventa, a presidência da Bósnia e Herzegovina é exercida por quantas pessoas ao mesmo tempo?",
    "resposta": "Três",
    "distratores": [
      "Duas",
      "Quatro",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Presidency_of_Bosnia_and_Herzegovina"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Presidency_of_Bosnia_and_Herzegovina",
        "situacao": "ok",
        "texto": "The Presidency of Bosnia and Herzegovina (Bosnian: Predsjedništvo Bosne i Hercegovine) is a three-member body that collectively serves as the head of state of Bosnia and Herzegovina. Under Article V of the Constitution of Bosnia and Herzegovina, defined by the Dayton Agreement in 1995, it consists of one Bosniak and one Croat member directly elected from the Federation of Bosnia and Herzegovina, a\n[…]\nThe Presidency is responsible for conducting the foreign policy of Bosnia and Herzegovina and representing the country in international relations. Its powers include appointing ambassadors and other international representatives, representing the state in European and international organizations, and seeking membership in organizations of which the country is not a member.\n[…]\nThe presidency also negotiates, denounces, and, subject to the consent of the Parliamentary Assembly of Bosnia and Herzegovina, ratifies international treaties.\n[…]\nThe presidency executes decisions of the Parliamentary Assembly and proposes the annual state budget to the assembly upon the recommendation of the Council of Ministers of Bosnia and Herzegovina. It is also required to report to the Parliamentary Assembly, at least annually, on its expenditures and may coordinate with international and non-governmental organizations operating in the country.\n[…]\nThe presidency nominates the Chair of the Council of Ministers, who assumes office after approval by the House of Representatives of Bosnia and Herzegovina. Each member of the presidency also exercises civilian command authority over the Armed Forces of Bosnia and Herzegovina by virtue of their office.\n[…]\nChairman of the Presidency of Bosnia and Herzegovina\n[…]\nList of members of the Presidency of Bosnia and Herzegovina\n[…]\nWebsite of the Presidency\n[…]\nArticle V of the Constitution of Bosnia and Herzegovina\n[…]\nHolding Bosnian presidents accountable, ISN Security Watch, 21 December 2006"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Presid%C3%AAncia_da_B%C3%B3snia_e_Herzegovina",
        "situacao": "ok",
        "texto": "O Presidente da Bósnia e Herzegovina (Predsjedništvo Bosne i Hercegovine/Предсједништво Босне и Херцеговине) é o chefe de Estado conjunto do referido país.\n[…]\nDe acordo com o artigo V da Constituição, a Presidência consiste de três membros: um bosníaco e um croata eleitos pela Federação da Bósnia e Herzegovina e um membro sérvio eleito pela República Sérvia. Juntos, servem durante um mandato de quatro anos.\n[…]\nconduzir a política externa da Bósnia e Herzegovina;\n[…]\ncoordenar quando necessário com as organizações internacionais e não governamentais na Bósnia e Herzegovina, e;\n[…]\nPresidente do Conselho Anti-Fascista da Libertação Popular da Bósnia e Herzegovina\n[…]\nNo decorrer da Guerra da Bósnia, a Presidência sofreu várias alterações: os membros sérvios Plavšić e Koljević, bem como o membro croata Boras, saíram e foram substituídos por Nenad Kecmanović, Mirko Pejanović e Ivo Komšić, respetivamente. Kecmanović também sairia, e seria substituído por Tatjana Ljujić-Mijatović. Passado um tempo, Abdić foi substituído por Nijaz Duraković.\n[…]\nAlija Izetbegović pelos bosníacos, desde 5 de outubro de 1996 (presidente entre 14 de fevereiro e 14 de outubro de 2000)\n[…]\nAnte Jelavić acabou por ser substituído por Jozo Križanović para o resto do seu mandato por decisão de Wolfgang Petrisch, Alto Representante para a Bósnia e Herzegovina.\n[…]\nMirko Šarović com 35,5% dos votos sérvios foi eleito presidente da Presidência coletiva para os primeiros oito meses; Dragan Čović teve 61,5% dos votos croatas e Sulejman Tihić teve 37% dos votos bosníacos.\n[…]\nPresidente da Presidência da Bósnia e Herzegovina\n[…]\nPresidente do Conselho de Ministros da Bósnia e Herzegovina",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "San Marino",
      "descricao": "Pequena república sem litoral encravada no centro-norte da Itália, com capital na Cidade de San Marino."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em San Marino, dois capitães regentes chefiam o Estado ao mesmo tempo. Quanto tempo dura o mandato deles?",
    "resposta": "Seis meses",
    "distratores": [
      "Três meses",
      "Um ano",
      "Dois anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Captains_Regent"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Captains_Regent",
        "situacao": "ok",
        "texto": "Captains Regent (Italian: Capitani Reggenti; Romagnol: Capitèn Regìnt) are the two heads of state of the Republic of San Marino. They are elected every six months by the Great and General Council, the country's legislative body. Normally the Captains Regent are chosen from parties in coalition and serve a six-month term. The investiture of the Captains Regent takes place on 1 April and 1 October e\n[…]\nThe practice of dual heads of government (diarchy) is derived directly from the customs of the Roman Republic, equivalent to the consuls of ancient Rome, except the Captains Regent hold no executive power.\n[…]\nThe outgoing Captains Regent place the collar of the Order of San Marino on the new Captains Regent, finalizing the transfer of power. The swearing in ends as the band plays the national anthem and the outgoing Captains Regent afterward take their leave. The procession then heads to Palazzo Valloni for the assumption of the Captains' throne and the residency.\n[…]\nThe Regency is considered the supreme office of the Republic. The Captains Regent are the heads of state, a function which they carry out as a single body, with a reciprocal right of veto. They have the right to be addressed with the honorific title of Excellency.\n[…]\nThe Captains Regent cannot be prosecuted in any way during their mandate, at the end of which they are subject to the Regency Syndicate. This judgement, established by the Statutes of 1499, is now fulfilled by the Guarantors' Panel on the Constitutionality of Rules, following the revision of the Declaration on the Citizens' Rights.\n[…]\nThe procedure provides that, within fifteen days after the conclusion of their mandate, every citizen registered in the electoral lists may submit claims against the Captains Regent \"for what they have and have not done\" during their mandate.\n[…]\nCapitano del popolo\n[…]\nSan Marino\n[…]\nPolitics of San Marino\n[…]\nRepublic of San Marino – Captains Regent"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Capit%C3%A3o-regente",
        "situacao": "ok",
        "texto": "Capitão-regente é a denominação do cargo de cada um dos líderes máximos do Poder Executivo da República de San Marino, cabendo a eles as funções de Chefes de Estado e de Governo. A cada seis meses, em abril e outubro, são eleitos dois capitães-regentes pelo Legislativo entre seus membros.\n[…]\nOs primeiros Capitães-regentes - Filippo da Sterpeto e Oddone Scarito - foram eleitos em 1243, ainda na condição de \"Cônsules\", inspirados nos cargos equivalentes da antiga República Romana. Somente em 1499, foi instituída a Reggenza, que corresponde ao cargo atual.\n[…]\nSan Marino\n[…]\nHistória de San Marino\n[…]\nLista de capitães-regentes de São Marinho",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Alemanha",
      "descricao": "País da Europa Central e Ocidental cuja capital é Berlim."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Alemanha é uma república federal formada por quantos estados?",
    "resposta": "Dezesseis",
    "distratores": [
      "Doze",
      "Quatorze",
      "Vinte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/States_of_Germany"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/States_of_Germany",
        "situacao": "ok",
        "texto": "The Federal Republic of Germany is a federation and consists of sixteen partly sovereign \"states\" (German: Länder, sing. Land). Of the 16 states, 13 are so-called \"area-states\" (Flächenländer); in these, below the level of the state government, there is a division into local authorities (counties and county-level cities) that have their own administration. Two states, Berlin and Hamburg, are city-\n[…]\nThe Treaty of Versailles at the end of World War I stripped the former German Empire of 12 to 13 percent of its land area and population, the majority of it from Prussia. Only Alsace–Lorraine, which had never attained full statehood, was wholly lost to Germany. The new Weimar Republic remained federal in nature, with a total of 17 states.\n[…]\nThe rejection of the plan by the Saarlanders was interpreted as support for the Saar to join the Federal Republic of Germany.\n[…]\nAfter reunification, the constitution was amended to state that the citizens of the 16 states had successfully achieved the unity of Germany in free self-determination and that the West German constitution thus applied to the entire German people. Article 23, which had allowed \"any other parts of Germany\" to join, was rephrased. It had been used in 1957 to reintegrate the Saar Protectorate as the Saarland into the Federal Republic, and this was used as a model for German reunification in 1990.\n[…]\nSome states call themselves a \"free state\" (Freistaat). It is merely a historic synonym for \"republic\" and was a description used by most German states after the abolition of monarchy after World War I. Today, Freistaat is associated emotionally with a more independent status, especially in Bavaria. However, it has no legal significance. All sixteen states are represented at the federal level in the Bundesrat (Federal Council), where their voting power depends on the size of their population.\n[…]\nList of German states by poverty rate"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Estados_da_Alemanha",
        "situacao": "ok",
        "texto": "A Alemanha é uma república parlamentar composta por 16 estados federados, denominados Bundesländer (no singular Bundesland). O termo Land (no plural Länder) é usado no mesmo sentido na Alemanha e na Áustria.\n[…]\nDurante a ocupação aliada da Alemanha após a Segunda Guerra Mundial, as fronteiras internas foram redesenhadas pelos governos militares aliados. Nenhum estado único compreendia mais de 30% de qualquer população ou território; isso pretendia impedir que qualquer estado fosse tão dominante na Alemanha quanto a Prússia havia sido no passado.\n[…]\nA criação da República Federal da Alemanha em 1949 deu-se pela unificação dos estados mais a oeste, que estavam sob administração dos Estados Unidos, Reino Unido e França após a Segunda Guerra Mundial. Inicialmente, em 1949, os estados da República Federal eram Baden, Baviera, Bremen, Hamburgo, Hesse, Baixa Saxônia, Renânia do Norte-Vestfália, Renânia-Palatinado, Schleswig-Holstein, Württemberg-Baden e Württemberg-Hohenzollern.\n[…]\nEm 1952, Baden, Württemberg-Baden e Württemberg-Hohenzollern se fundiram no estado de Baden-Württemberg. Em 1957, o Sarre reunificou-se à Alemanha Ocidental.\n[…]\nA Reunificação da Alemanha (formalmente foi uma adesão da República Democrática Alemã, conhecida como Alemanha Oriental, à República Federal da Alemanha) em 1990 resultou na incorporação dos estados orientais de Brandemburgo, Mecklemburgo-Pomerânia Ocidental, Saxônia, Saxônia-Anhalt e Turíngia, bem como a reunificação de Berlim e seu estabelecimento como um Land de pleno direito.\n[…]\nO federalismo é um dos princípios fundamentais da constituição e da vida político-administrativa da República Federal da Alemanha.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Guiné Equatorial",
      "descricao": "País da África Central, antiga colônia espanhola, membro da Comunidade dos Países de Língua Portuguesa"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Antiga colônia espanhola, o que a Guiné Equatorial passou a ter em comum com Angola e Moçambique no início do século vinte e um?",
    "resposta": "Português como língua oficial",
    "distratores": [
      "Mesma moeda oficial",
      "Litoral no oceano Índico",
      "Ex-colônias da França"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Equatorial_Guinea",
      "https://en.wikipedia.org/wiki/Community_of_Portuguese_Language_Countries"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Equatorial_Guinea",
        "situacao": "ok",
        "texto": "Equatorial Guinea, officially the Republic of Equatorial Guinea, is a country on the west coast of Central Africa and the only Spanish-speaking country in Africa. It has an area of 28,000 square kilometres (11,000 sq mi). Formerly the colony of Spanish Guinea, its post-independence name refers to its location both near the Equator and in the African region of Guinea.\n[…]\nThe Portuguese-speaking island nation of São Tomé and Príncipe is located between Bioko and Annobón. The Equator runs through Equatorial Guinea's territorial waters, about 1.4° north of Annobón.\n[…]\nPygmies likely once lived in the continental region but are today found only in isolated pockets in southern Río Muni. Bantu migrations likely started around 2000 BC from between south-east Nigeria and north-west Cameroon (the Grassfields). They must have settled continental Equatorial Guinea around 500 BC at the latest. The earliest settlements on Bioko are dated to AD 530. The Annobón population, originally native to Angola, was introduced by the Portuguese via São Tomé island.\n[…]\nThere was also a trickle of immigration from the neighbouring Portuguese islands, escaped slaves, and prospective planters. Although a few of the Fernandinos were Catholic and Spanish-speaking, about nine-tenths of them were Protestant and English-speaking on the eve of the First World War, and pidgin English was the lingua franca of the island. The Sierra Leoneans were particularly well placed as planters while labour recruitment on the Windward coast continued.\n[…]\nThe Annobonese ethnic community tried to gain membership in the Community of Portuguese Language Countries (CPLP). The government financed an Instituto Internacional da Língua Portuguesa (IILP) sociolinguistic study in Annobón. It documented strong links with the Portuguese creole populations in São Tomé and Príncipe, Cape Verde and Guinea-Bissau."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Community_of_Portuguese_Language_Countries",
        "situacao": "ok",
        "texto": "The Community of Portuguese Language Countries (Portuguese: Comunidade dos Países de Língua Portuguesa; abbr. : CPLP), also known as the Lusophone Commonwealth or Lusophone Community (Portuguese: Comunidade Lusófona), is an international organization and political association of Lusophone nations across four continents, where Portuguese is an official language.\n[…]\nThe Community of Portuguese Language Countries relies on six operating agencies to carry out its mandate: Universidade da Integração Internacional da Lusofonia Afro-Brasileira, União das Cidades Capitais Luso-Afro-Américo-Asiáticas, Associação das Universidades de Língua Portuguesa, Instituto Internacional da Língua Portuguesa, União dos Advogados de Língua Portuguesa and TV CPLP via Web.\n[…]\nThere are nine full member states of the CPLP. Seven were founding members of the CPLP: Angola, Brazil, Cape Verde, Guinea-Bissau, Mozambique, Portugal, and São Tomé and Príncipe; Timor-Leste joined in 2002 after achieving independence, and Equatorial Guinea joined in 2014.\n[…]\nWhen the CPLP was formed, Equatorial Guinea asked for observer status. Equatorial Guinea (Portuguese: Guiné Equatorial) was a Portuguese colony from the 15th to 18th centuries and has some territories where Portuguese-based creole languages are spoken and cultural connections with São Tomé and Príncipe and Portugal are felt, namely Annobón, where Annobonese Creole is spoken.\n[…]\nThe Conference of Heads of State and Government of the CPLP (Portuguese: Conferência de Chefes de Estado e de Governo da Comunidade dos Países de Língua Portuguesa; CCEG), commonly known as the CPLP Summit (Cimeira da CPLP) is a biennial meeting of heads of state and heads of government of the member states of the CPLP. It is considered one of the fundamental pillars of the CPLP's structure.\n[…]\nUCCLA Union of the Capital Cities of Portuguese language"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guin%C3%A9_Equatorial",
        "situacao": "ok",
        "texto": "A Guiné Equatorial, oficialmente República da Guiné Equatorial, é um país da África Central dividido em vários territórios descontínuos no golfo da Guiné: um continental, Mbini (antiga colónia espanhola de Rio Muni), e outros insulares. As ilhas são Bioco (antiga Fernando Pó), no norte do Golfo do Biafra, Ano-Bom, a sul de São Tomé e Príncipe, e Corisco, Elobey Grande e Elobey Pequeno (e ilhotas a\n[…]\nNo dia 23 de julho de 2014, a Guiné Equatorial entrou na Comunidade dos Países de Língua Portuguesa e em 2017, as Nações Unidas deixou de designar o país como subdesenvolvido e o elevou ao status de país em desenvolvimento.\n[…]\nA Guiné Equatorial é o único país da África de língua oficial castelhana. Os idiomas mais falados na Guiné Equatorial, o fang e o inglês pidgin, não são línguas oficiais. Apesar de a Guiné Equatorial ter decretado a língua francesa e, mais recentemente, a língua portuguesa como línguas oficiais, elas não são faladas no território.\n[…]\nNo entanto, na ilha de Ano-Bom, ainda se usa o chamado Fá d'Ambô, ou seja o Falar de Ano Bom, uma língua crioula de base portuguesa que mantém uma semelhança muito grande com o são-tomense falada nas ilhas vizinhas de São Tomé e Príncipe.\n[…]\nO presidente da Guiné Equatorial, Teodoro Obiang Nguema Mbasogo, decretou que o português seria uma das línguas oficiais, ao lado do espanhol e do francês.\n[…]\nO país deseja ainda o apoio dos oito países membros da Comunidade dos Países de Língua Portuguesa (CPLP) (Angola, Brasil, Cabo Verde, Guiné-Bissau, Moçambique, Portugal, São Tomé e Príncipe e Timor-Leste) para difundir o ensino da língua portuguesa no país, para formação profissional e acolhimento dos seus estudantes pelos países da comunidade lusófona. Essa proposta ainda não foi, no entanto, validada pelo parlamento, como se pode ver no sítio oficial do governo.\n[…]\nMissões diplomáticas de Guiné Equatorial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Timor-Leste",
      "descricao": "País do Sudeste Asiático, antiga colônia portuguesa, independente desde 2002"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O que o Timor-Leste e a Papua-Nova Guiné têm em comum em relação à Indonésia?",
    "resposta": "Dividem uma ilha com ela",
    "distratores": [
      "Foram colônias holandesas",
      "Usam a mesma moeda",
      "Falam a mesma língua"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Timor",
      "https://en.wikipedia.org/wiki/New_Guinea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Timor",
        "situacao": "ok",
        "texto": "Timor (Indonesian: Pulau Timor; Portuguese: Ilha de Timor; Tetun: Illa Timór) is an island at the southern end of Maritime Southeast Asia, in the north of the Timor Sea. The name is a variant of timur, Malay for \"east\"; it is so called because it lies at the eastern end of the Lesser Sunda Islands. Mainland Australia is less than 500 km away, separated by the Timor Sea. The island covers an area o\n[…]\nWith a population of over 3 million people, the island is divided between the sovereign states of Timor-Leste in the eastern part and Indonesia in the western part. The Indonesian part, known as West Timor, is inhabited by around 2 million people and constitutes part of the province of East Nusa Tenggara. Timor-Leste, previously under Indonesian occupation from 1975 to 1999, has a population of around 1.3 million. Within West Timor lies an exclave of Timor-Leste called Oecusse District.\n[…]\nThe island has been politically divided in two parts for centuries. The Dutch and Portuguese fought for control of the island until it was divided by treaty in 1859, but they still did not formally resolve the matter of the boundary until 1912. West Timor, was known as Dutch Timor until 1949 when it became Indonesian Timor, a part of the nation of Indonesia which was formed from the old Netherlands East Indies; while East Timor was known as Portuguese Timor, a Portuguese colony until 1975.\n[…]\nThe UN then temporarily governed East Timor until it became independent as Timor-Leste in 2002 under the presidency of Falintil leader Xanana Gusmão. Political strife continued, as the new nation coped with poverty. Nevertheless, the UN presence was much reduced.\n[…]\nTimor-Leste is divided into thirteen municipalities, which in turn are subdivided into 65 administrative posts, 442 sucos (villages), and 2,225 aldeias (hamlets).\n[…]\nTimor-Leste (most of state)\n[…]\nIndonesian occupation of East Timor\n[…]\nList of divided islands"
      },
      {
        "url": "https://en.wikipedia.org/wiki/New_Guinea",
        "situacao": "ok",
        "texto": "New Guinea (also known as Papua or historically Irian) is the world's second-largest island, with an area of 785,753 km2 (303,381 sq mi). It has the third-largest remaining rainforest globally, and the highest plant biodiversity of any island.\n[…]\nThe island of New Guinea is divided politically into roughly equal halves across a north–south line:\n[…]\nThe western portion of the island located west of 141°E longitude (except for a small section of territory to the east of the Fly River which belongs to Papua New Guinea) was formerly a Dutch colony, part of the Dutch East Indies. After the West New Guinea dispute it is now six Indonesian provinces:\n[…]\nEthnologue's 14th edition lists 826 languages of Papua New Guinea and 257 languages of Western New Guinea, total 1073 languages, with 12 languages overlapping. They can be divided into two groups, the Austronesian languages, and all the others placed in the catch-all category of Papuan languages, most of which are unrelated.\n[…]\nAccording to the WWF, New Guinea can be divided into twelve terrestrial ecoregions:\n[…]\nThe WWF and Nature Conservancy divide New Guinea into five freshwater ecoregions:\n[…]\nSoutheast Papua New Guinea\n[…]\nGulf of Papua\n[…]\nBy 1849, Tidore's borders had been extended to the proximity of the current international border between Indonesia and Papua New Guinea, as it formed extensive trade pact and custom of Uli-Siwa ( federation of nine ).\n[…]\nFollowing the return to civil administration after World War II, the Australian section was known as the Territory of Papua-New Guinea from 1945 to 1949 and then as Territory of Papua and New Guinea. Although the rest of the Dutch East Indies achieved independence as Indonesia on 27 December 1949, the Netherlands regained control of western New Guinea."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Timor",
        "situacao": "ok",
        "texto": "Timor é uma ilha da Insulíndia, politicamente repartida em duas metades: Timor Ocidental (ou Sonda Oriental), que constitui uma província da Indonésia, e Timor-Leste, outrora uma colónia portuguesa, proclamou unilateralmente a sua independência no dia 28 de novembro de 1975, foi mais tarde ocupada e anexada pela Indonésia em 7 de dezembro de 1975, e que restaurou a sua independência no dia 20 de m\n[…]\nEm Timor-Leste a língua portuguesa é falada por cerca de 5% da população. A língua tétum predomina e é língua cooficial, junto com o português.\n[…]\nA história da criação de Timor baseia-se na figura de um crocodilo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Butão",
      "descricao": "Reino do Himalaia Oriental, sem litoral, entre a China e a Índia."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O Nepal e o Butão, no Himalaia, têm apenas dois vizinhos cada um, e são os mesmos dois. Quais são eles?",
    "resposta": "China e Índia",
    "distratores": [
      "China e Paquistão",
      "Índia e Bangladesh",
      "China e Mianmar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bhutan",
      "https://en.wikipedia.org/wiki/Nepal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bhutan",
        "situacao": "ok",
        "texto": "Bhutan, officially the Kingdom of Bhutan, is a landlocked country in South Asia, located in the Eastern Himalayas, bordering China's Tibet Autonomous Region to the north and northwest and India to the south and southeast. With a population of over 800,000 (800,871) and a territory of 38,394 square kilometres (14,824 sq mi), Bhutan ranks 133rd in land area and 160th in population.\n[…]\nIn the early 20th century, Bhutan became a de facto protectorate of the British Empire under the Treaty of Punakha in 1910. British protection guarded Bhutan from Tibet and Qing China. In the aftermath of the Chinese Communist Revolution, Bhutan signed a friendship treaty with the newly independent Dominion of India in 1949. Its concerns were exacerbated after the annexation of Tibet by the People's Republic of China. However, Bhutan was never directly colonised.\n[…]\nHong Kong (30.1 per cent) and Bangladesh (7.3 per cent) are the other two top export partners. As its border with Tibet Autonomous Region is closed, trade between Bhutan and China is now almost non-existent. Bhutan's import partners include India (74.5 per cent), Japan (7.4 per cent) and Sweden (3.2 per cent).\n[…]\nThe country became one of a handful of countries to hold over US$1 billion worth of bitcoin as of 15 November 2024, with around 12,206 BTC. Bhutan is the fifth-largest state holder of bitcoin, behind the US, China, the UK and Ukraine.\n[…]\nBhutan's largest export is hydroelectricity. As of 2015, it generates about 2,000 MW of hydropower from dams in Himalayan river valleys. The country has a potential to generate 30,000 MW of hydropower. Power is supplied to various states in India. Future projects are being planned with Bangladesh. Hydropower has been the primary focus for the country's five-year plans. As of 2015, the Tala Hydroelectric Power Station is its largest power plant, with an installed capacity of 1,020 MW."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nepal",
        "situacao": "ok",
        "texto": "Nepal is a landlocked country in South Asia. It is mainly situated in the Himalayas, but also includes parts of the Indo-Gangetic Plain. It borders the Tibet Autonomous Region of China to the north, and India to the south, east, and west, while it is narrowly separated from Bangladesh by the Siliguri Corridor, and from Bhutan by the Indian state of Sikkim.\n[…]\nChina is viewed favourably in Nepal owing to the absence of any border disputes or serious interference in internal politics, coupled with its assistance in infrastructure development and aid during emergencies; favourability has increased since China helped Nepal during the 2015 economic blockade imposed by India. Subsequently, China granted Nepal access to its ports for third-country trade, and Nepal joined China's Belt and Road Initiative.\n[…]\nThe distribution of wealth among the Nepalis is consistent with that in many developed and developing countries: the highest 10% of households control 39.1% of the national wealth and the lowest 10% control only 2.6%. European Union (EU) (46.13%), the US (17.4%), and Germany (7.1%) are its main export partners; they mainly buy Nepali ready-made garments (RMG). Nepal's import partners include India (47.5%), the United Arab Emirates (11.2%), China (10.7%), Saudi Arabia (4.9%), and Singapore (4%).\n[…]\nNepal depends almost entirely on assistance from countries like China, India and Japan, for building, maintenance and expansion of the road network. The only practical seaport of entry for goods bound for Kathmandu is Kolkata in India. The national carrier, Nepal Airlines, is in poor shape due to mismanagement and corruption, and has been blacklisted by the EU. Internally, the poor state of development of the road system makes access to markets, schools, and health clinics a challenge.\n[…]\nKey Development Forecasts for Nepal from International Futures"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/But%C3%A3o",
        "situacao": "ok",
        "texto": "Butão (em butanês: འབྲུག་ཡུལ་; romaniz.: Dru Ü, pronúncia: [ʈʂɦu yː], lit. \"Terra do Dragão\"), oficialmente Reino do Butão (འབྲུག་རྒྱལ་ཁབ་ Druk Gyal Khap), é um país interior localizado no sul da Ásia, no extremo leste dos Himalaias. Faz fronteira a norte com a China e para o sul, leste e oeste pela Índia. Mais a oeste, está separado do Nepal pelo estado indiano de Siquim, enquanto mais ao sul est\n[…]\nDesde sempre que o Butão só mantinha relações com os seus vizinhos na esfera cultural do Tibete (Tibete, Ladaque e Siquim) e com o reino de Cooch Behar na sua fronteira sul. Com a presença dos ingleses na Índia, no século XIX, e após alguns conflitos relacionados com direitos de comércio, dá-se a guerra de Duar em que o Butão perdeu uma faixa de terra fértil ao longo da sua fronteira sul.\n[…]\nO Butão e a Tailândia são os últimos reinos budistas do mundo.\n[…]\nEm 2004, o Butão foi o primeiro país do mundo a banir o consumo público e a venda de cigarros.\n[…]\nA taxa de alfabetização no país, em 2017, era de 66,6%, sendo maior entre os homens (75%) do que entre as mulheres (57,1%). A expectativa de vida escolar no Butão, compreendida do ensino primário ao ensino superior, atinge o total de 13 anos de estudos (2018), sendo superior à média registrada em países vizinhos como Índia e Bangladesh. Entre todos os países asiáticos, é o Butão que registra o maior investimento em educação, em caráter proporcional à sua economia.\n[…]\nA entrada é gratuita para os cidadãos da Índia e Bangladesh, mas os estrangeiros de outros países são obrigados a inscrever-se com um operador turístico butanês e pagar cerca de US$ 250 dólares americanos por cada dia em que permanecer no país, embora esta taxa cobre a maioria das despesas de viagem, alojamento e refeições. O país recebeu por volta de 71 mil visitantes de fora da SAARC em 2017, sendo um total de 254 mil visitante no país em 2017.\n[…]\nMissões diplomáticas do Butão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Namíbia",
      "descricao": "País do sudoeste da África, banhado pelo Atlântico, cuja capital é Windhoek."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O que a Namíbia, Camarões, o Togo e a Tanzânia continental têm em comum no passado?",
    "resposta": "Foram colônias alemãs",
    "distratores": [
      "Foram colônias portuguesas",
      "Foram colônias italianas",
      "Foram colônias belgas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/German_colonial_empire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/German_colonial_empire",
        "situacao": "ok",
        "texto": "The German colonial empire (German: deutsches Kolonialreich) constituted the overseas colonies, dependencies, and territories of the German Empire. Unified in 1871, the chancellor of this time period was Otto von Bismarck. Short-lived attempts at colonization by individual German states had occurred in preceding centuries, but Bismarck resisted pressure to construct a colonial empire until the Scr\n[…]\nOnce war was declared in late July 1914 Britain and its allies promptly moved against the colonies.\n[…]\nThey argue that the limited successes of German colonialism overseas led to a decision to shift the main focus of German expansionism into Central and Eastern Europe, with the Mitteleuropa plan. German colonialism, therefore, turned to the European continent.\n[…]\nRegaining the former German colonies played no significant role in the politics of Post-war Germany. However, individual West German politicians proposed undertaking late or postcolonial enterprises, especially the management of trusts in Tanganyika or Togo. Even within the African freedom movement, these suggestions co-existed with calls for decolonization.\n[…]\nThe final remains of the Protectorate Law survived until the legal expiration of the Colonial Society in 1975 and fiscal adjustments in 1992. Colonial history continues to be commemorated by colonial monuments, street names, and buildings related to German colonial history. In many places this has led to discussions about cultural memory and to calls for modification or renaming.\n[…]\nAt the same time, however, when West Germany's Goethe Institute was founded to encourage German-language learning and cultural diplomacy worldwide, the first foreign branches were founded in 1961, in the last Kaiser's former African colonies of Cameroon and Togo. Tanzania opened a Goethe Institute branch immediately after achieving independence from the British Empire later in that same year."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Imp%C3%A9rio_colonial_alem%C3%A3o",
        "situacao": "ok",
        "texto": "Império Colonial Alemão foi o termo empregado para designar uma área ultramarina  formada no final do século XIX como parte do Império Alemão, governados por um Kaiser da dinastia Hohenzollern.\n[…]\nEntre as colônias da Alemanha estavam o Togo, Camarões, a África Alemã do Sudoeste (atualmente a Namíbia), a África Alemã Oriental (atualmente Tanzânia), três territórios que estão atualmente na Papua-Nova Guiné (Kaiser-Wilhelmsland, o Arquipélago de Bismarck, e as Ilhas Salomão alemãs), e vários territórios no Pacífico: as Ilhas Marshall, Ias lhas Caroline (atualmente os Estados Federados da Micronésia), Palau, as Marianas Alemãs (atualmente território dos Estados Unidos), e Samoa.\n[…]\nOutras ilhas da região iriam passar pelo mesmo processo em 1878 e substituiriam Vauva'u em 1879, seguindo o tratado de amizade que surgiria com George Tupou I, rei do arquipélago. As primeiras colônias de facto seriam Makada, Mioko e o Arquipélago Duque de York, na zona marítima de Nova Guiné. Nova Guiné seria finalmente colonizada em 1884, mesmo ano de aquisição da África Sudoeste Alemã (Abril), Camarões e Togolândia (Ambas em Julho). As Ilhas Marshall seguiriam o padrão em 1885.\n[…]\nA maior parte dos territórios adquiridos pelo Reino Unido foi depois repassada às várias colônias que pertenciam à Comunidade Britânica. A Namíbia foi transferida para o controle da África do Sul com um mandato assegurado pela Liga das Nações. Samoa Ocidental foi entregue à Nova Zelândia em uma outro mandato da Liga, assim como Rabaul passou ao controle australiano pelos mesmos termos. Todos estes acordos fizeram com que as próprias colônias britânicas tivessem também suas colônias.\n[…]\nLista de ex-colônias alemãs",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Moçambique",
      "descricao": "País lusófono do sudeste da África, banhado pelo Índico."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Sem nunca terem sido colônias britânicas, Moçambique e Ruanda entraram em qual organização de países ligados ao antigo Império Britânico?",
    "resposta": "Commonwealth (Comunidade das Nações)",
    "distratores": [
      "Liga Árabe",
      "Opep",
      "Otan"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Member_states_of_the_Commonwealth_of_Nations"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Member_states_of_the_Commonwealth_of_Nations",
        "situacao": "ok",
        "texto": "The Commonwealth of Nations is a voluntary association of 56 sovereign states, referred to as Commonwealth countries. Most of them were British colonies or dependencies of those colonies.\n[…]\nNo government in the Commonwealth exercises power over the others, as is the case in a political union. Rather, the Commonwealth is an international organisation in which countries with diverse social, political, and economic backgrounds are regarded as equal in status, and cooperate within a framework of common values and goals, as outlined in the Singapore Declaration issued in 1971.\n[…]\nThe Commonwealth was first officially formed in 1926 when the Balfour Declaration of the Imperial Conference recognised the full sovereignty of Dominions. Known as the British Commonwealth of Nations, the original and therefore earliest members were Australia, Canada, the Irish Free State, Newfoundland, New Zealand, South Africa, and the United Kingdom.\n[…]\nThe most recent members to join were the Francophone African nations of Gabon and Togo on 29 June 2022, who along with Mozambique and Rwanda, are unusual in not having a historical constitutional relationship with the United Kingdom or other Commonwealth states.\n[…]\n^B. Not a member of the Commonwealth Foundation.\n[…]\nOther states which have expressed an interest in joining the Commonwealth over the years include:\n[…]\nCommonwealth of Nations membership criteria\n[…]\nZimbabwe and the Commonwealth of Nations\n[…]\nCommonwealth timeline\n[…]\n\"Members\". Commonwealth Secretariat. Retrieved 15 February 2008.\n[…]\n\"Commonwealth of Nations\". Commonwealth of Nations. Retrieved 15 February 2008.\n[…]\n\"The Commonwealth\". Directgov. Retrieved 15 February 2008."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_membros_da_Commonwealth",
        "situacao": "ok",
        "texto": "A Commonwealth é uma associação voluntária de 56 estados soberanos. A maioria são ex-colônias britânicas, com exceção de Gabão e Togo (ex-colônias francesas), Moçambique (ex-colônia portuguesa) e Ruanda (ex-colônia alemã e belga).\n[…]\nAtualmente, os estados soberanos membros da Comunidade das Nações são divididos por continente, sendo 3 na Europa, 13 na América, 21 na África, 8 na Ásia e 11 na Oceania (incluindo um membro suspenso, readmitido em 2014, Fiji). Têm uma população combinada de 2,1 bilhões de pessoas, quase um terço da população mundial, dos quais 1,17 bilhão vivem na Índia e 94% vivem na Ásia e África juntas.\n[…]\nAtualmente, 15 dos Estados-Membros são reinos da Commonwealth, que têm o monarca do Reino Unido como seu chefe de Estado. Outros cinco países são monarquias independentes, com seus próprios monarcas, são eles: (Brunei, Essuatíni, Lesoto, Malásia, e Tonga), o restante dos países são repúblicas.\n[…]\nTodas as informações da tabela têm base em dados fornecidos pela Commonwealth of Nations, a população está baseada em estimativas de 2007, salvo indicação em contrário.\n[…]\n↑ A. Salvo disposição em contrário, a independência foi obtida a partir do Reino Unido na data de adesão à Commonwealth, como mostrado na coluna 2.\n[…]\nLista dos países que possuem o inglês como idioma oficial\n[…]\nSociedade Federal da Comunidade Britânica\n[…]\nJogos da Commonwealth\n[…]\n«Members». Commonwealth Secretariat. Consultado em 15 de fevereiro de 2008\n[…]\n«Commonwealth of Nations». Commonwealth of Nations. Consultado em 15 de fevereiro de 2008\n[…]\n«The Commonwealth». Directgov. Consultado em 15 de fevereiro de 2008",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Abuja",
      "descricao": "Cidade planejada no centro da Nigéria, capital do país desde 1991."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O que Abuja, na Nigéria, tem em comum com Brasília e Camberra?",
    "resposta": "Foram planejadas para ser capitais",
    "distratores": [
      "Ficam no litoral",
      "Fundadas por portugueses",
      "Já sediaram Olimpíadas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_purpose-built_national_capitals",
      "https://en.wikipedia.org/wiki/Abuja"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_purpose-built_national_capitals",
        "situacao": "ok",
        "texto": "This is a list of capital cities that were specially designed, planned, and built to be a national or regional capital.\n[…]\nWelthauptstadt Germania was the proposed renewal of Berlin, (Nazi Germany) as a planned \"world capital\", although only a small portion was built between 1937 and 1943. Many of the plans were designed by Albert Speer. Progress was halted by the failure of Operation Barbarossa during World War II.\n[…]\nAl-Karamah was intended to be the permanent capital of the United Arab Emirates located between Abu Dhabi and Dubai, but it was never built.\n[…]\nViedma, the capital of the Río Negro Province, was proposed by President Raúl Alfonsín as a new capital for Argentina in 1986, replacing Buenos Aires. The idea was to change the centralization in the port of Buenos Aires, and promote development in Patagonia. The economic collapse of the Alfonsín government halted the project that had been approved by Law.\n[…]\nList of national capitals"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Abuja",
        "situacao": "ok",
        "texto": "Abuja () is the capital city of Nigeria, strategically situated at the geographic midpoint of the country within the Federal Capital Territory (FCT). As the seat of the Federal Government of Nigeria, it hosts key national institutions, landmarks, and buildings spread across its over 50 districts. It replaced Lagos (the most populous city in Nigeria) as the capital on 12 December 1991.\n[…]\nAnother impetus for Abuja came because of Lagos' population boom that made that city overcrowded and conditions squalid. As Lagos was already undergoing rapid economic development, the Nigerian government felt the need to expand the economy towards the inner part of the country, and hence decided to move its capital to Abuja. The logic used was similar to the way Brazil planned its capital, Brasília.\n[…]\nMost countries relocated their embassies to Abuja, and many maintain their former embassies as consulates in Lagos, the commercial capital of Nigeria. Abuja is the headquarters of the Economic Community of West African States (ECOWAS) and the regional headquarters of OPEC. Abuja and the FCT have experienced huge population growth; it has been reported that some areas around Abuja have been growing at 20% to 30% per year.\n[…]\nAbuja is home to several parks and green areas, with the largest one being Millennium Park. Millennium Park was designed by architect Manfredi Nicoletti and was officially opened by the United Kingdom's Queen Elizabeth II (the former Queen of Nigeria) in December 2003. Another open area park is located in Lifecamp Gwarimpa; near the residence of the Minister of the Federal Capital Territory.\n[…]\nNnamdi Azikiwe International Airport is the main airport serving Abuja and the surrounding capital region. It was named after Nigeria's first president, Nnamdi Azikiwe. The airport has international and domestic terminals.\n[…]\nPeople awarded the honorary citizenship of Abuja are:"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Estados Unidos",
      "descricao": "República federal da América do Norte com 50 estados e capital em Washington, D.C."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1867, os Estados Unidos compraram o território que viria a ser o Alasca. Qual país o vendeu?",
    "resposta": "Rússia",
    "distratores": [
      "Reino Unido",
      "Canadá",
      "Espanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alaska_Purchase"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alaska_Purchase",
        "situacao": "ok",
        "texto": "The Alaska Purchase in 1867 resulted in the transfer of Russian America to the United States for $7.2 million (equivalent to $136 million in 2025). On April 9 of that year, the United States Senate ratified a bilateral treaty that had been signed on March 30, and American sovereignty became legally effective across the territory on October 18.\n[…]\nThe Russian government discussed the proposal in 1857 and 1858 and offered to sell the territory to the United States, hoping that its presence in the region would offset the plans of Britain. However, no deal was reached, as the risk of an American Civil War was a more pressing concern in Washington.\n[…]\nRussia continued to see an opportunity to weaken British power by causing British Columbia, including the Royal Navy base at Esquimalt, to be surrounded or annexed by American territory. Following the Union victory in the Civil War in 1865, the Tsar instructed Stoeckl to re-enter into negotiations with William H. Seward in the beginning of March 1867.\n[…]\nThe transfer ceremony took place in Sitka on October 18, 1867. Russian and American soldiers paraded in front of the governor's house; the Russian flag was lowered and the American flag raised amid peals of artillery.\n[…]\nAfter the flag transition was completed, Captain of 2nd Rank Aleksei Alekseyevich Peshchurov said, \"General Rousseau, by authority from His Majesty, the Emperor of Russia, I transfer to the United States the territory of Alaska.\" General Lovell Rousseau accepted the territory. (Peshchurov had been sent to Sitka as commissioner of the Russian government in the transfer of Alaska.) A number of forts, blockhouses and timber buildings were handed over to the Americans.\n[…]\nJensen, Ronald J. (1975). The Alaska purchase and Russian-American relations. Seattle: University of Washington Press. ISBN 978-0-295-95376-2."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Compra_do_Alasca",
        "situacao": "ok",
        "texto": "Em 1867, os Estados Unidos compraram o território do Alasca, que antes era do Império Russo. A operação foi conduzida pelo Secretário de Estado norte-americano William H. Seward.\n[…]\nÀ época, a transação foi considerada absurda e era referida como \"a loucura de Seward\". O território comprado, com área aproximada de 1 600 000 km² (600 000 milhas quadradas), constitui o atual estado americano do Alasca.\n[…]\nO Império Russo estava em dificuldades financeiras e em vias de perder o território do Alasca sem compensação em algum futuro conflito, sobretudo para o rival da época, o Império Britânico, que detinha o vizinho Canadá e cuja possante Royal Navy poderia facilmente tomar o controle das costas, de defesa difícil para a Rússia.\n[…]\nO nome aleúte Alasca foi escolhido pelos americanos. A cerimónia de transferência teve lugar em Sitka em 18 de outubro de 1867. Soldados russos e americanos desfilaram junto à casa do governador; a bandeira russa foi arriada e a americana hasteada e saudada por salvas de artilharia. O capitão Alexis Pestchouroff disse \"General Rousseau, pela autoridade de sua Majestade, o Imperador da Rússia, transfiro aos Estados Unidos da América o território do Alasca\".\n[…]\nKushner, Howard. \"The significance of the Alaska purchase to American expansion.\" in S. Frederick Starr, ed., Russia's American Colony. (1987): 295–315.\n[…]\nPierce, Richard: Russian America: A Biographical Dictionary, p. 395. Alaska History no. 33, The Limestone Press; Kingston, Ontario & Fairbanks, Alaska, 1990.\n[…]\nJensen, Ronald (1975). The Alaska Purchase and Russian-American Relations. [S.l.: s.n.]\n[…]\n(em inglês) Text of Treaty with Russia (Alaska Purchase)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Hungria",
      "descricao": "País sem litoral da Europa Central, na Bacia dos Cárpatos, com capital em Budapeste."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Até o fim da Primeira Guerra Mundial, a Hungria e qual país vizinho formavam uma monarquia dupla, com o mesmo monarca?",
    "resposta": "Áustria",
    "distratores": [
      "Alemanha",
      "Polônia",
      "Romênia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Austria-Hungary"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Austria-Hungary",
        "situacao": "ok",
        "texto": "Austria-Hungary, also referred to as the Austro-Hungarian Empire and officially as the Austro-Hungarian Monarchy, was a multi-national empire in Central Europe under a constitutional dual monarchy that existed between 1867 and 1918. A military and diplomatic real union, it consisted of two largely self governing states with a single monarch who was titled both the Emperor of Austria and the Aposto\n[…]\nSeveral central banks or banks of issue were founded, including the Wiener Stadtbank then the Austrian National Bank in 1816. In 1878 after a decade of negotiations, the monarchy established the Austro-Hungarian Bank with principal offices in both Vienna and Budapest. The central bank was governed by alternating Austrian or Hungarian governors and vice-governors.\n[…]\nHowever, since the turn of the twentieth century, the Austrian half of the Monarchy could preserve its dominance within the empire in the sectors of the Industrial Revolution, but Hungary had a better position in the modern industries of the Second Industrial Revolution, in these modern sectors of the second industrial revolution (like machine building industry and electric industry) the Austrian competition could not become dominant.\n[…]\nThe common minister of war was the head for the administration of all military affairs, except those of the Austrian Landwehr and of the Hungarian Honved, which were committed to the ministries for national defence of the two respective states. But the supreme command of the army was nominally vested in the monarch, who had the power to take all measures regarding the whole army. In practice, the emperor's nephew Archduke Albrecht was his chief military advisor and made the policy decisions.\n[…]\nArticles relating to Austria–Hungary at the International Encyclopedia of the First World War.\n[…]\nAustria–Hungary, Dual Monarchy\n[…]\nMap of Europe and the collapse of Austria–Hungary at omniatlas.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81ustria-Hungria",
        "situacao": "ok",
        "texto": "Áustria-Hungria, muitas vezes referida como Império Austro-Húngaro ou Monarquia Dual, foi uma monarquia constitucional multinacional na Europa Central  entre 1867 e 1918. A Áustria-Hungria foi uma aliança militar e diplomática de dois estados soberanos com um único monarca que foi intitulado imperador da Áustria e rei da Hungria.\n[…]\nNesse período, a maioria dos judeus na Áustria-Hungria vivia em pequenas cidades (shtetls) na Galiza e em áreas rurais da Hungria e da Boémia; no entanto, tinham grandes comunidades e até maiorias locais nos distritos centrais de Viena, Budapeste, Praga, Cracóvia e Lwów. Das forças militares anteriores à Primeira Guerra Mundial das principais potências europeias, o exército austro-húngaro estava quase sozinho na sua promoção regular de judeus para posições de comando.\n[…]\nEm 1914, os militantes eslavos na Bósnia rejeitaram o plano da Áustria de absorver totalmente a área; eles assassinaram o herdeiro austríaco e precipitaram a Primeira Guerra Mundial.\n[…]\nEmbora o Reino da Hungria compreendesse apenas 42% da população da Áustria-Hungria, a pequena maioria – mais de 3,8 milhões de soldados – das forças armadas austro-húngaras foram recrutados do Reino da Hungria durante a Primeira Guerra Mundial. Aproximadamente 600 000 soldados foram mortos em combate e 700 000 soldados ficaram feridos na guerra.\n[…]\nA Áustria-Hungria resistiu durante anos, enquanto a metade húngara fornecia suprimentos suficientes para os militares continuarem a travar a guerra. Isto foi demonstrado numa transição de poder após a qual o primeiro-ministro húngaro, o conde István Tisza, e o ministro dos Negócios Estrangeiros, o conde István Burián, tiveram influência decisiva sobre os assuntos internos e externos da monarquia.\n[…]\nArtigos relacionados à Áustria-Hungria na Enciclopédia Internacional da Primeira Guerra Mundial.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Afeganistão",
      "descricao": "País sem litoral da Ásia Central e do Sul, cuja capital é Cabul."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "No fim do século dezenove, o estreito corredor de Wakhan foi incorporado ao Afeganistão para separar quais dois impérios?",
    "resposta": "Britânico e Russo",
    "distratores": [
      "Otomano e Persa",
      "Chinês e Russo",
      "Britânico e Chinês"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wakhan_Corridor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wakhan_Corridor",
        "situacao": "ok",
        "texto": "The Wakhan Corridor is a protruding strip of territory mostly in the Wakhan District of Badakhshan Province in northeastern Afghanistan. Smaller parts of it are within the Gorno-Badakhshan in eastern Tajikistan. It begins east of Ishkashim District and stretches eastward to the Wakhjir Pass, which connects by road Afghanistan with the Xinjiang Uygur Autonomous Region of China. The strip narrowly s\n[…]\nAs of 2024, Afghanistan's Wakhan District has an estimated population of 18,000 residents. The northern part of the Wakhan, populated by the Wakhi, Pamiri and Kyrgyz peoples, is also referred to as the Pamir. The closest major airport is Fayzabad Airport in the city of Fayzabad to the west, which is accessible by a road network.\n[…]\nAt its western entrance, near the Afghan town of Ishkashim, the corridor is 18 km (11 mi) wide. The western third of the corridor varies in width (13–30 km (8–19 mi)) and widens to 65 km (40 mi) in the central Wakhan. At its eastern end, the corridor forks into two prongs that wrap around a salient of Chinese territory, forming the 92 km (57 mi) boundary between the two countries.\n[…]\nThe corridor is higher in the east than in the west; (the Wakhjir Pass is 4,923 m (16,152 ft) in elevation) and descends to about 3,037 m (9,964 ft) at Ishkashim. The Wakhjir River emerges from an ice cave on the Afghan side of the Wakhjir Pass and flows west, joining the Bozai Darya near the village of Bazai Gumbad to form the Wakhan River. The Wakhan River then joins the Pamir River near Qala-i-Panjah to form the Panj River, which then flows out of the Wakhan Corridor at Ishkashim.\n[…]\nLife on the Edge of China: The Remote Wakhan Corridor & Pamir Tajik Villages on YouTube\n[…]\n\"In Photos: Wakhan Corridor, Afghanistan\". Nicole L. Smoot. Retrieved 21 December 2022.\n[…]\nWakhan & the Afghan Pamir – In the footsteps of Marco Polo – Brochure of the region by Aga Khan Foundation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Corredor_de_Wakhan",
        "situacao": "ok",
        "texto": "O Corredor de Wakhan (também chamado de Corredor de Vakhan) é um estreito corredor (um cabo de frigideira) na província de Badaquexão no Afeganistão. Está localizado na cordilheira de Pamir, fazendo fronteira com o Tajiquistão a norte, Paquistão a sul e a China a leste, na região de Wakhan.\n[…]\nFoi criado no final do século XIX pelo Império Britânico para impedir a Rússia de chegar à Índia (que na época abrangia o atual Paquistão) durante o Grande Jogo.\n[…]\nO corredor é escassamente povoado, tendo como principal residente o povo Wakhi e um pequeno número de quirguizes. No seu extremo leste, o Wakhjir é um passo de montanha através do Indocuche, que atinge um máximo de 4.923 m de altitude, e tem a maior diferença horária fronteiriça no mundo, de (UTC+4:30 no Afeganistão para UTC+8 na República Popular da China).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Áustria",
      "descricao": "País sem litoral da Europa Central, nos Alpes orientais, com capital em Viena."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A Áustria perdeu sua saída para o mar Adriático com o fim de qual conflito?",
    "resposta": "Primeira Guerra Mundial",
    "distratores": [
      "Segunda Guerra Mundial",
      "Guerras Napoleônicas",
      "Guerra dos Trinta Anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Treaty_of_Saint-Germain-en-Laye_(1919)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Treaty_of_Saint-Germain-en-Laye_(1919)",
        "situacao": "ok",
        "texto": "The Treaty of Saint-Germain-en-Laye (French: Traité de Saint-Germain-en-Laye) was signed on 10 September 1919 by the victorious Allies of World War I on one side and by the Republic of German-Austria on the other. Like the Treaty of Trianon with Hungary and the Treaty of Versailles with the Weimar Republic, it contained the Covenant of the League of Nations and as a result was not ratified by the \n[…]\nAustria-Hungary's only overseas possession, its concession in Tianjin, was turned over to China.\n[…]\nArticle 88 of the treaty required Austria to refrain from directly or indirectly compromising its independence, which meant that Austria could not enter into political or economic union with the Weimar Republic without the agreement of the council of the League of Nations. Accordingly, the new republic's initial self-chosen name of German-Austria (German: Deutschösterreich) had to be changed to Austria.\n[…]\nMany Austrians would come to find this term harsh (especially among the Austrian Germans being a vast majority who would support a single German nation state), due to Austria's later economic weakness, which was caused by loss of land. Because of this, support for the idea of Anschluss (political union) with Nazi Germany later proved popular.\n[…]\nConscription was abolished and the Austrian Army was limited to a force of 30,000 volunteers. There were numerous provisions dealing with Danubian navigation, the transfer of railways, and other details involved in the breakup of a great empire into several small independent states.\n[…]\nThe vast reduction of population, territory and resources of the new Austria relative to the old empire wreaked havoc on the economy of the old nation, most notably in Vienna, an imperial capital now without an empire to support it. For a time, the country's very existence was called into question.\n[…]\nUS–Austrian Peace Treaty (1921)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tratado_de_Saint-Germain-en-Laye",
        "situacao": "ok",
        "texto": "O Tratado de Saint-Germain-en-Laye foi celebrado em 10 de setembro de 1919 pelos Aliados, vitoriosos, de um lado, e, de outro, pela nova República da Áustria, na cidade de Saint-Germain-en-Laye, França, após o término da Primeira Guerra Mundial. Da mesma forma que o Tratado de Versalhes concluído com a Alemanha contém o Pacto da Liga das Nações e, por este motivo, o tratado de Saint-Germain não fo\n[…]\nO acordo declarava dissolvida a Monarquia Austro-Húngara. A nova República da Áustria, que incluía a maior parte dos territórios de língua alemã do antigo Império Austríaco, reconheceu a independência da Hungria, da Checoslováquia, da Polônia e do Reino dos Sérvios, Croatas e Eslovenos.\n[…]\nA Boêmia, a Morávia e algumas comunas da Baixa Áustria passaram para a recém-constituída Checoslováquia.\n[…]\nFoi estabelecido um referendo para decidir se o território de Klagenfurt na Caríntia devia pertencer à Áustria ou à Eslovênia, a qual posteriormente optou por permanecer na Áustria.\n[…]\nParte do território ocidental da Hungria passou à Áustria com o nome de Burgenland.\n[…]\nProibiu-se a Áustria de comprometer a sua independência, o que impedia aquele país de unir-se política ou economicamente à Alemanha sem prévia anuência do Conselho da Liga das Nações.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Essuatíni",
      "descricao": "Reino sem litoral do sul da África, antes chamado Suazilândia."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Ao trocar o nome da Suazilândia para Essuatíni, o rei disse que, no exterior, o país era confundido com qual outro?",
    "resposta": "Suíça",
    "distratores": [
      "Suécia",
      "Suriname",
      "Zâmbia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Eswatini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eswatini",
        "situacao": "ok",
        "texto": "Eswatini, formally the Kingdom of Eswatini (historically called KaNgwane), also known by its former official names Swaziland and the Kingdom of Swaziland, is a landlocked country in Southern Africa. It is bordered by South Africa on all sides except the east, where it shares a border with Mozambique. At no more than 200 km (120 mi) north to south and 130 km (81 mi) east to west, Eswatini is the se\n[…]\nThe names \"Swaziland\" and \"Eswatini\" both derive from a later king named Mswati II. KaNgwane, named for Ngwane III, is an alternative name for Eswatini, the surname of whose royal house remains Nkhosi Dlamini. Mswati II was the greatest of the fighting kings of Swaziland, and he greatly extended the area of the country to twice its current size. The Emakhandzambili clans were initially incorporated into the kingdom with wide autonomy, often including grants of special ritual and political status.\n[…]\nOn 19 April 2018, Mswati III announced that the Kingdom of Swaziland had been renamed as the Kingdom of Eswatini, reflecting the extant Swazi name for the state eSwatini, to mark the 50th anniversary of Swazi independence. The name Eswatini means \"land of the Swazis\" in the Swazi language and was partially intended to prevent confusion with the similarly named Switzerland.\n[…]\nEighty-three percent of the total population adheres to Christianity in Eswatini. Anglican, Protestant and indigenous African churches, including African Zionist (37.6%), constitute the majority of Christians, followed by Catholicism at 3.7% of the population. On 18 July 2012, Ellinah Wamukoya was elected Anglican Bishop of Swaziland, becoming the first woman to be a bishop in Africa and serving in that position until her death in 2021.\n[…]\nWikimedia Atlas of Eswatini\n[…]\nGovernment of Eswatini\n[…]\nSwaziland from UCB Libraries GovPubs\n[…]\nEswatini from the BBC News\n[…]\nKey Development Forecasts for Swaziland from International Futures"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Essuat%C3%ADni",
        "situacao": "ok",
        "texto": "O Essuatíni (em suázi: eSwatini; em inglês:  Eswatini), oficialmente Reino de Essuatíni (em suázi: Umbuso weSwatini; em inglês:  Kingdom of Eswatini), tradicionalmente Ngwane (Derivado do Epónimo rei Ngwane III) e anteriormente conhecido como Suazilândia, é um país da África Austral, limitado a leste por Moçambique e em todas as outras direções pela África do Sul. Suas capitais são Mebabane (admin\n[…]\nComo membro da União Aduaneira da África Austral e do Mercado Comum da África Oriental e Austral, o seu principal parceiro comercial local é a África do Sul (a fim de garantir a estabilidade econômica, a moeda essuatiniana, o lilanguéni, está indexada ao rand sul-africano, que também é moeda oficial de Essuatíni). Os principais parceiros comerciais no exterior são os Estados Unidos e a União Europeia. A maior parte do emprego do país é fornecida pelos setores agrícola e manufatureiro.\n[…]\nEm abril de 2018, o país mudou o seu nome de Reino da Suazilândia para Reino de Essuatíni, que significa \"terra dos suázi\" na língua suázi (ao invés de Swaziland, proveniente do inglês), durante os eventos de comemoração dos 50 anos de independência do país.\n[…]\nA etimologia de \"Essuatíni\" está ligada à etnia suazi, que é a população predominante no país. O nome \"Essuatíni\" é uma tradução do inglês \"Eswatini\", que significa \"terra dos suazi\". O nome \"Essuatíni\", por sua vez, é a forma suazi do mesmo conceito, também significando \"terra dos suazi\".\n[…]\nEm 19 de abril de 2018, Mswati oficialmente mudou o nome da Suazilândia para Essuatíni durante as comemorações do quinquagésimo aniversário da independência do país. O novo nome, Essuatíni, significa \"terra dos suázis\" em suázi.\n[…]\nO evento cultural mais conhecido de Essuatíni, é o anual Reed Dance. O país foi submetido ao rito da castidade o \"umchwasho\" até 19 de agosto de 2005.\n[…]\nThe Kingdom of Eswatini — Site oficial do turismo do país (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Macedônia do Norte",
      "descricao": "País dos Bálcãs sem litoral, com capital em Skopje, que mudou o nome oficial em 2019."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 2019, a Macedônia adotou o nome Macedônia do Norte para encerrar uma longa disputa com qual país vizinho?",
    "resposta": "Grécia",
    "distratores": [
      "Bulgária",
      "Albânia",
      "Sérvia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Prespa_Agreement"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Prespa_Agreement",
        "situacao": "ok",
        "texto": "The Prespa Agreement, also known as the Treaty of Prespa, the Prespes deal or the Prespa accord, is an agreement reached in 2018 between Greece and the then-Republic of Macedonia, under the auspices of the United Nations, resolving a long-standing naming dispute between the two countries. Apart from resolving the terminological differences, the agreement also covers areas of cooperation between th\n[…]\nThe Greek Prime Minister Alexis Tsipras announced on 12 June 2018 that an agreement had been reached with his Macedonian counterpart Zoran Zaev on the dispute, \"which covers all the preconditions set by the Greek side\". The agreement was signed at Lake Prespa, a body of water which forms a partial common border between the Republic of North Macedonia, Greece and Albania.\n[…]\nOn 11 January 2019, the Macedonian Parliament completed the legal implementation of the Prespa Agreement by approving the constitutional changes for renaming the country to North Macedonia with a two-thirds parliamentary majority (81 MPs).\n[…]\nIn a February 2019 survey, a public opinion poll done for Sitel TV channel in North Macedonia showed 44.6% of respondents were positive about the Prespa agreement, while 45.6% were negative toward the accord. A majority, 59.5%, expressed that the agreement would positively impact relations between both countries and 57.7% felt that the two states would implement the accord.\n[…]\nOn 6 February 2019, NATO's 29 members signed the accession protocol with North Macedonia.\n[…]\nMacedonia naming dispute\n[…]\nMerlicco, Giordano (2018). \"La Grecia e la Macedonia (del Nord): storia, politica e geopolitica di una contesa balcanica\". Rivista di Studi Politici. 3–4: 157–76.\n[…]\nNimetz, M. (2020). The Macedonian \"Name\" Dispute: The Macedonian Question—Resolved? Nationalities Papers, 48(2), 205–214.\n[…]\nAgreement text in English, and translations in Macedonian and Greek."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Acordo_de_Prespa",
        "situacao": "ok",
        "texto": "Acordo de Prespa ou Acordo de Prespes é um acordo internacional assinado pelos chefes da diplomacia da República da Macedônia Nikola Dimitrov e da Grécia Nikos Kotzias em 17 de junho de 2018 na cidade de Psarades, Grécia, localizada nas margens do Lago Prespa que é a fronteira natural entre os dois países.\n[…]\nA assinatura teve a participação também do primeiro-ministro grego Aléxis Tsípras e do primeiro-ministro macedônio Zoran Zaev, além do negociador da Nações Unidas Matthew Nimetz e da chefe da diplomacia europeia Federica Mogherini.\n[…]\nO primeiro-ministro da Grécia Alexis Tsipras depois de conversar com o seu homólogo da Macedônia, Zoran Zaev, em 12 de junho de 2018 anunciou que foi alcançado um acordo após quase três décadas de disputa sobre o nome da Macedônia e esclareceu que este acordo atenderia a todas as condições do lado grego.\n[…]\nFoi acordado que a República da Macedônia aceitaria uma mudança da designação para \"República da Macedônia do Norte\", enquanto a Grécia reconheceria a língua oficial do país vizinho como idioma macedônio \"pertencendo à família das línguas eslavas do sul\".\n[…]\nO acordo representa uma solução para a disputa do nome da Macedônia e estabelece uma parceria estratégica entre a Macedônia e Grécia. Após a assinatura, o acordo ainda precisava da a aprovação formal de ambos os congressos e um referendo na Macedônia.\n[…]\nA mudança de nome entrou em vigor oficialmente em 12 de Fevereiro de 2019.\n[…]\nA aprovação gerou protestos na Grécia, já na Macedônia do Norte, a eleição presidencial resultou na troca de um presidente contrário ao acordo por um favorável. O estreitamento da relação dos dois países, e a aproximação à União Europeia foram consequencias diretas desse acordo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Mônaco",
      "descricao": "Principado na costa mediterrânea, cercado pela França, perto da fronteira com a Itália."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Depois do Vaticano, qual é o menor país do mundo em área?",
    "resposta": "Mônaco",
    "distratores": [
      "San Marino",
      "Liechtenstein",
      "Malta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Monaco"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monaco",
        "situacao": "ok",
        "texto": "Monaco, officially the Principality of Monaco, is a sovereign city-state and microstate in Western Europe. Situated on the French Riviera, it is a semi-enclave bordered by France to the north, east, and west, with the Mediterranean Sea to the south; the Italian region of Liguria is about 15 km (9.3 mi) east. With a population of 38,423 living in an area of 2.08 km2 (0.80 sq mi), Monaco is the seco\n[…]\nIn 1993, the Principality of Monaco became a member of the United Nations, with full voting rights.\n[…]\nMonaco is the second-smallest country by area in the world; only Vatican City is smaller. Monaco is the most densely populated country in the world. The state consists of only one municipality (commune), the Municipality of Monaco. There is no geographical distinction between the State and City of Monaco, although responsibilities of the government (state-level) and of the municipality (city-level) are different.\n[…]\nThe Blancs had already set up a highly successful casino (in fact the largest in Europe) in Bad-Homburg in the Grand Duchy of Hesse-Homburg, a small German principality comparable to Monaco, and quickly petitioned Charles III to rename a depressed seaside area known as \"Les Spelugues (Den of Thieves)\" to \"Monte Carlo (Mount Charles).\" They then constructed their casino in the newly dubbed \"Monte Carlo\" and cleared out the area's less-than-savoury elements to make the neighbourhood surrounding the establishment more conducive to tourism.\n[…]\nThe Principality of Monaco hosts major international events such as :\n[…]\nWikimedia Atlas of Monaco\n[…]\nThe Monaco Times Archived 25 April 2012 at the Wayback Machine – A regular feature in The Riviera Times is the English language newspaper for the French–Italian Riviera and the Principality of Monaco provides monthly local news and information about the business, art and culture, people and lifestyle, events and also the real estate market."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%C3%B3naco",
        "situacao": "ok",
        "texto": "Mónaco, oficialmente Principado do Mónaco (português europeu) ou Principado de Mônaco (português brasileiro) (em francês:  Principauté de Monaco AFI: [pʁɛ̃sipote də monako]; em dialeto monegasco: Principatu de Múnegu), é uma cidade-estado soberana, e, portanto, um microestado, situado ao sul da França.\n[…]\nOcupada pelos espanhóis em 1605, ganhou os senhorios de Roquebrune e Menton, que perderam com a Revolução de 1848. Até 1847, o Principado do Mónaco, ocupou uma área total de 24 km² dividida em três distritos: Mónaco (1 250 habitantes), Roquebrune (Roquebrune-Cap-Marin hoje) (850 habitantes) e Menton (4 900 habitantes).\n[…]\nO Principado de Mônaco é uma cidade-estado localizado na Riviera Francesa, no oeste da Europa, fazendo fronteira com a França e o Mar Mediterrâneo. Dividido em 10 distritos e 4 áreas tem uma população de 37 308 habitantes e se estende por 2 km2, sendo assim o segundo menor estado soberano no mundo, atrás apenas do Vaticano, e o mais densamente povoado.\n[…]\nO dialeto monegasco, uma variedade do liguriano, também é amplamente falado no país, com 89 378 de origem monegasca, sendo ensinado nas escolas em Mônaco e falado principalmente por idosos.\n[…]\nO país tem a menor taxa de pobreza no mundo, e a maior taxa de milionários per capita, com uma taxa de pobreza de zero e uma em cada três pessoas milionárias. Em 2016, haviam um total de 52 447 pessoas trabalhando em Mônaco, das quais 4 528 no setor público e 47 919 no setor privado, a maioria desses trabalhadores vindos de cidades francesas. A taxa de desemprego em 2019 era de 3,2%.\n[…]\nO país tem um dos mercados mobiliários mais caros do mundo, com a média de preço por um metro quadrado em Mônaco sendo de mais de 57 800 USD por metro quadrado, e com o terceiro apartamento mais caro do mundo se localizando em Mônaco.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Bolívia",
      "descricao": "País sem litoral da América do Sul, com capital constitucional em Sucre e sede de governo em La Paz."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "A cerca de três mil e seiscentos metros de altitude, qual cidade é a sede de governo nacional mais alta do mundo?",
    "resposta": "La Paz",
    "distratores": [
      "Quito",
      "Bogotá",
      "Sucre"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/La_Paz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/La_Paz",
        "situacao": "ok",
        "texto": "La Paz (Spanish: [la ˈpas]; lit. 'the peace'), officially Nuestra Señora de La Paz (Aymara: Chuqi Yapu, pronounced [ˈtʃoqɛ ˈjapʊ]), is the seat of government of Bolivia. With 755,732 residents as of 2024, it is the third-most populous city in Bolivia. Its metropolitan area, which includes the neighboring city of El Alto, and other smaller towns, is the second most populous urban area in Bolivia, w\n[…]\nAs the seat of the government of Bolivia, La Paz is the site of the Palacio Quemado, the presidential palace. It is also the seat of the Bolivian legislature, the Plurinational Legislative Assembly, and numerous government departments and agencies. The constitutional capital of Bolivia, Sucre, retains the judicial power. The city hosts all the foreign embassies as well as international missions in the country.\n[…]\nLocated in the 7th District, is the historic and ancient center of La Paz. It now houses museums, hotels, shops and buildings as the Mayor City of La Paz and the Central Bank of Bolivia. In the Old Quarter is the Plaza Murillo, which is home to the Government Palace and the National Congress.\n[…]\nLocated in the 2nd and 3rd districts, it has a significant industrial activity (mainly food), being the Cervecería Boliviana Nacional (Bolivian National Brewery) the most significant industry founded by Germans, and one of the city's biggest companies in the country. It connects La Paz with the city of El Alto by the autopista (highway).\n[…]\nThe home of the Bolivian government is located on Murillo Square and is known as \"Palacio Quemado\" (Burnt Palace) as it has been on fire several times. The palace has been restored many times since, but the name has remained untouched.\n[…]\nLuis Adolfo Siles Salinas (1925–2005), lawyer, politician and former President of Bolivia\n[…]\nGualberto Vega (d. 1980 at La Paz), Bolivian trade unionist\n[…]\nBolivia Weekly Archived 27 February 2010 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/La_Paz",
        "situacao": "ok",
        "texto": "La Paz (pronunciado em português europeu: [la paʃ]; pronunciado em português brasileiro: [la pas]; pronunciado em castelhano: [la pas] () ; em aimará-Chuqi Yapu), oficialmente conhecida como Nuestra Señora de La Paz, é uma das capitais da Bolívia e é a sede do governo do Estado Plurinacional da Bolívia. Com uma estimativa de 816.044 residentes em 2020, La Paz é a terceira cidade mais populosa da B\n[…]\nA uma altitude de aproximadamente 3.650 metros acima do nível do mar, La Paz é a capital mais alta do mundo. Devido à sua altitude, La Paz possui um clima subtropical de terras altas incomum, com verões chuvosos e invernos secos.\n[…]\nComo sede do governo da Bolívia, La Paz é o local do Palacio Quemado, o palácio presidencial. É também a sede da legislatura boliviana, da Assembleia Legislativa Plurinacional e de vários departamentos e agências governamentais. A capital constitucional da Bolívia, Sucre, mantém o poder judicial. A cidade abriga todas as embaixadas estrangeiras, bem como missões internacionais no país.\n[…]\nZona Norte: com importante actividade industrial (principalmente alimentar). A mais significativa é a Cervejaria Boliviana Nacional. Aqui está a auto-estrada que comunica La Paz com a cidade de El Alto.\n[…]\nChacaltaya: a estação de esqui mais alta do mundo;\n[…]\nNo dia 20 de maio de 2014 foi inaugurada uma linha de teleférico entre as cidades de El Alto e La Paz, com um percurso de 2.664 m de extensão, que pode ser percorrido em 9 min e 50 s. Trata-se da linha vermelha, que tem condições de transportar até 18.000 passageiros por hora e liga a Avenida Panorâmica Norte em El Alto à Empresa Nacional de Ferrocarriles (ENFE), na zona norte de La Paz, passando pela sede da Yacimientos Petrolíferos Fiscales Bolivianos (YPFB) na Avenida Entre Ríos.\n[…]\nLa Paz também é o local onde a equipa nacional boliviana trabalha, e é ao mesmo tempo o local de vários jogos internacionais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Canadá",
      "descricao": "País da América do Norte cuja capital é Ottawa."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Depois da Rússia, qual é o segundo maior país do mundo em área total?",
    "resposta": "Canadá",
    "distratores": [
      "China",
      "Estados Unidos",
      "Brasil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_area"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_area",
        "situacao": "ok",
        "texto": "This is a list of the world's countries and their dependencies, ranked by total area, including land and water.\n[…]\nThis list includes three measurements of area:\n[…]\nTotal area: the sum of land and water areas within international boundaries and coastlines.\n[…]\nLand area: the aggregate of all land within international boundaries and coastlines, excluding water area.\n[…]\nInland water area: the sum of the surface areas of all inland water bodies (lakes, reservoirs, and rivers) within international boundaries and coastlines. Coastal internal waters may be included. Territorial seas, contiguous zones and exclusive economic zones are not included unless otherwise noted.\n[…]\nTotal area is taken from the United Nations Statistics Division unless otherwise noted. Land and water are taken from the Food and Agriculture Organization unless otherwise noted. The CIA World Factbook is most often used when different UN departments disagree. Other sources and details for each entry may be specified in the relevant footnote.\n[…]\nLists of political and geographic subdivisions by total area\n[…]\nOrders of magnitude (area)\n[…]\nList of African countries by area\n[…]\nList of Asian countries by area\n[…]\nList of European countries by area\n[…]\nList of North American countries by area\n[…]\nList of Oceanian countries by area\n[…]\nList of South American countries by area\n[…]\nEncyclopaedia Britannica: List of the world's countries, dependencies, and territories by total area\n[…]\nhttps://www.nationsonline.org/oneworld/countries_by_area.htm"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Estados_por_%C3%A1rea_territorial",
        "situacao": "ok",
        "texto": "Esta é uma lista de Estados ordenados por área territorial. A lista inclui os Estados soberanos que são membros das Nações Unidas e exclui subdivisões nacionais e territórios sem reconhecimento internacional. A área total mostrada inclui extensões de água internas (mares interiores, lagos, rios, etc.), mas águas marítimas, territoriais e zonas econômicas exclusivas não estão incluídas, nem as pret",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Lisboa",
      "descricao": "Capital de Portugal, às margens do rio Tejo."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Sem contar as ilhas, qual é a capital nacional situada mais a oeste no continente europeu?",
    "resposta": "Lisboa",
    "distratores": [
      "Madri",
      "Paris",
      "Bruxelas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lisbon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lisbon",
        "situacao": "ok",
        "texto": "Lisbon (  LIZ-bən; Portuguese: Lisboa [liʒˈβoɐ] ) is the capital and most populous city of Portugal, with an estimated population of 658,236 as of 2025, within its administrative limits and 3,353,000 within the metropolis, as of 2025. The city lies in the western part of the Iberian Peninsula, fronting the northern shore of the River Tagus.\n[…]\nLisbon has been the site for many international events and programmes. In 1994, Lisbon was the European Capital of Culture. On 3 November 2005, Lisbon hosted the MTV European Music Awards. On 7 July 2007, Lisbon held the ceremony of the \"New 7 Wonders Of The World\" election, in the Luz Stadium, with live transmission for millions of people all over the world. Every two years, Lisbon hosts the Rock in Rio Lisboa Music Festival, one of the largest in the world.\n[…]\nThe Lisbon metropolitan area incorporates two NUTS III (European statistical subdivisions): Grande Lisboa (Greater Lisbon), along the northern bank of the Tagus River, and Península de Setúbal (Setúbal Peninsula), along the southern bank. These two subdivisions make for the Região de Lisboa (Lisbon Region).\n[…]\nThe city hosts three association football clubs in Portugal's highest league, the Primeira Liga. Sport Lisboa e Benfica, commonly known as simply Benfica, has won 38 league titles in addition to two European Cups. Lisbon's second-most successful club is Sporting Clube de Portugal (commonly known as Sporting and often referred to as Sporting Lisbon abroad to prevent confusion with other teams with the same name), winner of 20 league titles and the UEFA Cup Winners' Cup. A third club, C.F.\n[…]\nAssociação de Turismo de Lisboa – Official site of the Lisbon Tourism Association\n[…]\nPortal das Nações Official site of Parque das Nações in Lisbon\n[…]\nLisbon voted European City of the Year 2012 – Award – Portuguese American Journal\n[…]\nTVL—Lisbon TV"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lisboa",
        "situacao": "ok",
        "texto": "Lisboa é a capital e maior cidade de Portugal, com uma população estimada de 548 703 habitantes em 2022 dentro dos seus limites administrativos numa área de cerca de 100 quilómetros quadrados. É a capital mais ocidental da Europa continental (a segunda no geral, depois de Reiquiavique). A cidade situa-se na parte ocidental da Península Ibérica, na margem norte do rio Tejo.\n[…]\nEm 1385, Lisboa substitui Coimbra como capital do reino.\n[…]\nLisboa continua a desenvolver-se ao ritmo das mais importantes capitais europeias, melhorando as suas infraestruturas e construindo novas, remodelando o sistema de transportes urbanos, de segurança e saúde. Em 1998 inaugura a sua segunda ponte, na altura a mais longa de toda a Europa e a quarta maior do mundo, a Ponte Vasco da Gama. Nesse mesmo ano organiza a EXPO 98, no Parque das Nações.\n[…]\nA cidade de Lisboa fica situada a oeste de Portugal na margem direita do estuário do Tejo, a 38º42' N e a 9º00' W, com altitude máxima na serra de Monsanto (226 metros de altitude), sendo a capital mais ocidental da Europa continental. Os limites da cidade, ao contrário do que ocorre em grandes cidades, encontram-se bem delimitados dentro dos limites do perímetro histórico.\n[…]\nA cidade de Lisboa faz parte da região estatística NUTS de nível 2 da Grande Lisboa. Esta é a região estatística de nível 2 mais rica de Portugal e produz um produto interno bruto (PIB) per capita acima da média da União Europeia, além de ser responsável pela produção de 45% do PIB português. A economia da cidade baseia-se principalmente no sector terciário.\n[…]\nApesar da rede de transportes, todos os dias se deslocam para Lisboa mais de 3 milhões de automóveis.\n[…]\nA Moda Lisboa aquece o Inverno mais suave de todas as capitais europeias com vários desfiles de moda, onde vários criadores portugueses e estrangeiros mostram as suas tendências.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Andorra",
      "descricao": "Pequeno principado sem litoral nos Pireneus, entre a Espanha e a França, com capital em Andorra-a-Velha."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "A pouco mais de mil metros de altitude, nos Pireneus, qual é a capital nacional mais alta da Europa?",
    "resposta": "Andorra-a-Velha",
    "distratores": [
      "Vaduz",
      "Berna",
      "Madri"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Andorra_la_Vella"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Andorra_la_Vella",
        "situacao": "ok",
        "texto": "Andorra la Vella is the capital and largest city of Andorra. It is located high in the east Pyrenees, between France and Spain. It is also the name of the Andorran parish that surrounds the capital.\n[…]\nAndorra la Vella means \"the city of Andorra\", to distinguish it from the Principality of Andorra as a whole. Although in Catalan the word vella (like French vieille) is derived from the Latin word vetula which means \"old\", the Vella here (like French ville and Catalan vila) is derived from the Latin word villa, meaning \"city\".\n[…]\nThe settlement of Andorra la Vella has been the principal city of Andorra since 1278 when the French and the Episcopal co-princes agreed to joint suzerainty. Andorra la Vella's old town—the Barri Antic—includes streets and buildings dating from this time. Its most notable building is the Casa de la Vall—constructed in the early sixteenth century—which has been the state's parliamentary house since 1702.\n[…]\nAndorra la Vella was, during this period, the capital of a largely isolated and feudal lordship within the Principality of Catalonia, which retained its existence due to this principle of co-sovereignty.\n[…]\nAndorra la Vella has an oceanic climate (Köppen climate classification: Cfb), with warm days and cool nights in summer, and chilly to cold, snowy winters. The average annual precipitation is 812.3 mm (32 in). Temperatures in the city are lowered by the altitude (1,075 metres) compared with lowland areas.\n[…]\nAndorra la Vella is twinned with the following cities:\n[…]\nAndorra la Vella has been part of the Union of Ibero-American Capital Cities since 2008, establishing brotherly relations with the following cities:\n[…]\nCity council of Andorra la Vella (in Catalan)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Andorra-a-Velha",
        "situacao": "ok",
        "texto": "Andorra-a-Velha (em catalão:  Andorra la Vella, AFI: [ənˈdorə ɫə ˈβeʎə], localmente: [anˈdɔra la ˈβeʎa]), é a capital e a mais populosa cidade do Principado de Andorra, pequeno país europeu situado entre a França e a Espanha. Com uma população de 19 383 habitantes (em 2019), recebe mais de 10 milhões de turistas anualmente. Situada a 1 023 metros de altitude, é um importante destino turístico nos \n[…]\nA denominação adicionada à cidade \"la Vella\" não significava originalmente \"a velha\", mas sim uma forma arcaica da palavra \"vila\". O nome pretendia distinguir entre a localidade e o país homónimo ou demonstrar a sua condição de capital do principado. Contudo, hoje em dia, nas principais línguas latinas, incluindo em espanhol, os exónimos usados para a localidade traduzem sempre o para \"a Velha\": Andorra la Vieja (em espanhol), Andorre-la-Vieille (em francês), Andorra-a-Velha (em português).\n[…]\nAs áreas próximas aos vales do rio Valira foram povoadas entre 3 500 e 2 500 a.C. e mais tarde grupos de pessoas migraram para as zonas mais baixas das montanhas. O local de Andorra-a-Velha foi fundado no século IX.\n[…]\nCom 19 383 habitantes (est. 2019), Andorra-a-Velha é a capital do coprincipado de Andorra e está localizada nos Pirenéus Orientais, entre a Espanha e a França a uma altitude de 1 023 metros. É também a sede de uma paróquia de Andorra com o mesmo nome (30 km²), onde se situa também o povoado de Santa Coloma d'Andorra. É banhada na sua margem direita pelo rio Valira.\n[…]\nAndorra-a-Velha tem um clima oceânico (Classificação climática de Köppen-Geiger: Cfb), com dias quentes e noites frescas no verão e invernos frios com neve. A precipitação média anual é de 812,3 mm. As temperaturas da cidade são baixas devido à altitude de 1 023 metros.\n[…]\nA cidade possui um dos poucos heliportos de Andorra e abriga a Biblioteca Nacional de Andorra.\n[…]\nAndorra-a-Velha é uma cidade geminada de:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Japão",
      "descricao": "País insular do Leste Asiático, cuja capital é Tóquio."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O Japão tem quatro ilhas principais: Honshu, Hokkaido, Kyushu e qual outra?",
    "resposta": "Shikoku",
    "distratores": [
      "Okinawa",
      "Tsushima",
      "Sado"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shikoku",
      "https://en.wikipedia.org/wiki/Japan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shikoku",
        "situacao": "ok",
        "texto": "Shikoku (四国, Shikoku; pronounced [ɕi̥.kó̞.kɯ̈̀, -kò̞-] , lit. 'four provinces') is the smallest of the four main islands of Japan. It is 225 kilometres (140 miles) long and between 50 and 150 kilometres (30 and 95 miles) wide. It has a population of 3.4 million, the least of Japan's four main islands. It is south of Honshu and northeast of Kyushu.\n[…]\nShikoku Island, comprising Shikoku and its surrounding islands, covers about 18,800 square kilometres (7,259 sq mi) and consists of four prefectures: Ehime, Kagawa, Kōchi, and Tokushima. Across the Seto Inland Sea lie Wakayama, Osaka, Hyōgo, Okayama, Hiroshima, and Yamaguchi Prefectures on Honshu. To the west lie Ōita and Miyazaki Prefectures on Kyushu.\n[…]\nShikoku has historically been quite isolated and therefore it has kept the original characteristics of Japan for a longer period, especially in regards to vegetation and some architectural techniques. There are many Buddhist temples.\n[…]\nShikoku is connected to Honshu by three expressways, which together form the Honshū–Shikoku Bridge Project.\n[…]\nNishiseto Expressway (Western Shikoku)\n[…]\nSeto-Chūō Expressway (Central Shikoku)\n[…]\nThe central part of Shikoku is connected to Honshu by ferry, air, and – since 1988 – by the Great Seto Bridge network. Until completion of the bridges, the region was isolated from the rest of Japan. The freer movement between Honshu and Shikoku was expected to promote economic development on both sides of the bridges, which has not materialized yet.\n[…]\nThe Shikoku Railway Company (JR Shikoku) serves the island and connects to Honshu via the Great Seto Bridge. JR lines include:\n[…]\nPrivate railway lines operate in each of the four prefectures on Shikoku.\n[…]\nFerries link Shikoku to destinations including Honshu, Kyushu, and islands around Shikoku.\n[…]\nGeography of Japan\n[…]\nRegions of Japan\n[…]\nShikoku dialect\n[…]\nKitaro Shikoku Peace Bell Project"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Japan",
        "situacao": "ok",
        "texto": "Japan is an island country in East Asia. Located in the Pacific Ocean off the northeast coast of the Asian mainland, it is bordered to the west by the Sea of Japan, the Sea of Okhotsk in the north, and the East China Sea in the south. The Japanese archipelago consists of four major islands alongside over 14,000 smaller islands. Japan is divided into 47 administrative prefectures and eight traditio\n[…]\nJapan comprises 14,125 islands that extend along the Pacific coast of Asia. It stretches over 3000 km (1900 mi) northeast–southwest from the Sea of Okhotsk to the East China Sea. The country's five main islands, from north to south, are Hokkaido, Honshu, Shikoku, Kyushu and Okinawa. The Ryukyu Islands, which include Okinawa, are a chain to the south of Kyushu. The Nanpō Islands are south and east of the main islands of Japan. Together they are often known as the Japanese archipelago.\n[…]\nThe Japanese archipelago is 67% forests and 14% agricultural. The primarily rugged and mountainous terrain is restricted for habitation. Thus the habitable zones, mainly in the coastal areas, have very high population densities: Japan is the 40th most densely populated country even without considering that local concentration. Honshu has the highest population density at 450 persons/km2 (1200/sq mi) as of 2010, while Hokkaido has the lowest density of 64.5 persons/km2 as of 2016.\n[…]\nIn the Sea of Japan region on Honshu's west coast, northwest winter winds bring heavy snowfall during winter. In the summer, the region sometimes experiences extremely hot temperatures because of the Foehn. The Central Highland has a typical inland humid continental climate, with large temperature differences between summer and winter. The mountains of the Chūgoku and Shikoku regions shelter the Seto Inland Sea from seasonal winds, bringing mild weather year-round.\n[…]\nGeographic data related to Japan at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shikoku",
        "situacao": "ok",
        "texto": "Shikoku ou Xicocu (四国, Shikoku; \"quatro países; 四(Quatro), 国(País, nação)\") é a menor e menos populosa das quatro ilhas principais do arquipélago japonês, sendo a 50ª maior ilha do mundo em área. Está localizada a sul da ilha de Honshu, a leste da ilha de Kyushu e envolvido em parte pelo Mar Interior de Seto, sendo formada por quatro prefeituras:\n[…]\nA região de Shikoku, compreendendo a ilha principal e suas pequenas ilhas em volta, cobre uma área aproximada de 18800 km2, sendo formada por quatro prefeituras: Ehime, Kagawa, Kochi e Tokushima. Do outro lado do mar interior, estão as prefeituras de Wakayama, Osaka, Hyogo, Okayama, Hiroshima e Yamaguchi, na ilha de Honshu. Ao oeste, encontra-se Oita e Miyazaki, em Kyushu.\n[…]\nMontanhas cruzam Shikoku de leste a oeste, dividindo a ilha em uma estreita região norte, de frente para o mar interior, e uma outra região ao sul de frente para o Oceano Pacífico. A maioria de seus 4 500 000 habitantes vivem no norte, e todas exceto uma das grandes cidades estão localizadas ali. O Monte Ishizuchi (石鎚山), em Ehime, com 1 982 metros, é a mais alta montanha da ilha. Indústrias são bem razoavelmente desenvolvidas, incluindo o processamento de minérios, principalmente de cobre.\n[…]\nShikoku tem quatro importantes cabos. Gamoda, em Anan, Tokushima, é o ponto mais a leste da ilha e Sada, em Ikata, Ehime é o ponto mais a oeste. Muroto, em Kochi e Ashizuri, os pontos mais ao sul de Shikoku, junto com Tosashimizu, Kochi. O ponto mais ao norte é Takamatsu, Kagawa. Ao contrário das outras três grandes ilhas do Japão, Shikoku não tem vulcões.\n[…]\nA região de Shikoku é constituída de quatro prefeituras e 35 cidades:\n[…]\nPrefeitura de Ehime: Imabari, Iyo, Iyomishima, Kawanoe, Matsuyama (capital), Niihama, Ozu, Saijo, Seiyo, Shikokuchuo, Toon, Toyo, Uwajima, Yawatahama\n[…]\nLista de ilhas do Japão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Equador",
      "descricao": "País da América do Sul, na costa do Pacífico, cuja capital é Quito."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Famoso pelos estudos de Charles Darwin, qual arquipélago do Pacífico pertence ao Equador?",
    "resposta": "Ilhas Galápagos",
    "distratores": [
      "Ilhas Marquesas",
      "Juan Fernández",
      "Ilhas Malvinas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gal%C3%A1pagos_Islands"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gal%C3%A1pagos_Islands",
        "situacao": "ok",
        "texto": "The Galápagos Islands (Spanish: Islas Galápagos) are an archipelago of volcanic islands in the Eastern Pacific, located around the equator, 485 nautical miles (898 km; 558 mi) west of the mainland of South America. They form the Galápagos Province of the Republic of Ecuador, with a population of slightly over 33,450 in 2020. The province is divided into the cantons of San Cristóbal, Santa Cruz, an\n[…]\nThe Galápagos are famous for their large number of endemic species, which were studied by Charles Darwin in the 1830s and inspired his theory of evolution by means of natural selection. All of these islands are protected as part of Ecuador's Galápagos National Park and Marine Reserve.\n[…]\nIn 1959, the centenary year of Charles Darwin's publication of The Origin of Species, the Ecuadorian government declared 97.5% of the archipelago's land area a national park, excepting areas already colonised. The Charles Darwin Foundation (CDF) was founded the same year. The core responsibility of CDF, an international nongovernmental organization (NGO) constituted in Belgium, is to conduct research and provide the research findings to the government for effective management of Galápagos.\n[…]\nCDF's research efforts began with the establishment of the Charles Darwin Research Station on Santa Cruz Island in 1964. During the early years, conservation programs, such as eradication of introduced species and protection of native species, were carried out by research station personnel. Now much of that work is accomplished by the Galápagos National Park Service using the research findings and methodologies developed by CDF.\n[…]\nGalápagos Province\n[…]\nBlack, Juan (1973), Galápagos, Archipiélago del Ecuador (in Spanish), Quito: Imprenta Europa, a comprehensive monograph by a former officer of the Galápagos National Park financed by the World Wildlife Fund and the Charles Darwin Foundation for the Galápagos Islands"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gal%C3%A1pagos",
        "situacao": "ok",
        "texto": "As ilhas Galápagos, cujo nome oficial é Arquipélago de Colón, localiza-se no Oceano Pacífico a cerca de mil quilômetros da costa da América do Sul e fazem parte do território do Equador sendo, administrativamente, uma das 24 províncias do país (Província de Galápagos).\n[…]\nO arquipélago que compreende o conjunto das ilhas Galápagos, que são de origem vulcânica, é formado por dezenas de ilhas e rochedos, sendo treze ilhas maiores (entre 14 a 4 588 km²), seis ilhas menores, e dezenas de ilhotas e rochedos, que totalizam uma área terrestre de 8 010 km². O arquipélago se distribuí por uma área oceânica de 59 500 km², somando  140 555 km² de mar territorial ao Equador.\n[…]\nApresenta uma biodiversidade elevada e é o habitat de uma fauna peculiar, que inclui muitas espécies endémicas como as tartarugas das Galápagos. A totalidade das ilhas constitui uma reserva de vida selvagem, administrada pelo governo do Equador e que é, desde a visita de Charles Darwin, o principal laboratório vivo de biologia do mundo.\n[…]\nO arquipélago de Galápagos é um conjunto de 58 ilhas a cerca de 965 quilômetros da costa continental do país.\n[…]\nA fauna galapaguenha é extremamente rica e única em termos de biodiversidade. No arquipélago abundam espécies endémicas, com variações marcadas de ilha para ilha. Tais características são desde há muito tempo foco do interesse de zoólogos, entre os quais Charles Darwin, que visitou as Galápagos em 1831, durante sua viagem no navio Beagle.\n[…]\nA fauna das ilhas inclui a tartaruga-das-galápagos, a iguana-marinha, o pinguim-das-galápagos, o cormorão-das-galápagos, o falcão-das-galápagos, a fragata, entre outros.\n[…]\nParque Nacional Galápagos\n[…]\nParque Nacional Galápagos\n[…]\n«Novas espécies de coral são achadas em Galápagos». notícia publicada no UOL Ciência e Saúde.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Portugal",
      "descricao": "País do sudoeste da Europa, na Península Ibérica, de capital Lisboa."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Além dos Açores, qual arquipélago no Atlântico é uma região autônoma de Portugal?",
    "resposta": "Madeira",
    "distratores": [
      "Canárias",
      "Cabo Verde",
      "Bermudas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Madeira"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Madeira",
        "situacao": "ok",
        "texto": "Madeira, officially the Autonomous Region of Madeira, is an autonomous region of Portugal, in the Atlantic Ocean about 805 km (500 miles) southwest of mainland Portugal. Together with the Azores, it is one of the two autonomous regions of Portugal and a special territory of the European Union. It is the southernmost point and region of Portugal.\n[…]\nDue to its distinct geography, economy, social and cultural situation, and the historical autonomous aspirations of its population, the Autonomous Region of Madeira was established in 1976. Although it is a politico-administrative autonomous region, the Portuguese constitution specifies both a regional and national connection, obliging their administrations to maintain democratic principles and promote regional interests, while reinforcing national unity.\n[…]\nThe sovereignty of the Portuguese Republic is represented in Madeira by the Representative of the Republic, appointed by the President of the Republic on the advice of the Government of the Republic. The tasks of the Representative of the Republic are to sign and order the publication of regional legislative decrees and regional regulatory decrees or to exercise the right of veto over regional laws, should these laws be unconstitutional.\n[…]\nSeveral large Madeiran communities continue around the world, including in the UK and Jersey. The Portuguese British community on Jersey, made up mostly of Madeirans, celebrates Madeira Day annually on 1 July, marking both the anniversary of Portugal's grant of autonomy to the island in 1976 and the arrival of Portuguese explorers in Machico Bay in 1419.\n[…]\nPortugal has issued postage stamps for Madeira during several periods, beginning in 1868.\n[…]\nWorld History Encyclopedia – The Portuguese Colonization of Madeira. Archived 21 May 2021 at the Wayback Machine.\n[…]\nWikimedia Atlas of Madeira"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Madeira_%28regi%C3%A3o_aut%C3%B3noma%29",
        "situacao": "ok",
        "texto": "A Madeira (oficialmente Região Autónoma da Madeira) é uma região e arquipélago situada no Oceano Atlântico, com a capital localizada na cidade do Funchal, tendo 266.130 habitantes em 2025, sendo a sexta região mais populosa do país, com uma densidade populacional de 332,2 hab./km2, sendo a segunda maior área urbana do país, e uma área total de 801 km2, sendo a sétima região mais extensa do país.\n[…]\nO território do arquipélago contém duas ilhas principais: a Ilha da Madeira e a ilha do Porto Santo; além destas, existem dois grupos de ilhas, as Ilhas Desertas e as Selvagens.\n[…]\nDe acordo com as estimativas da população residente, em 31 de dezembro de 2014, residiam na Região Autónoma da Madeira (RAM) 258 686 pessoas, das quais 121 068 eram homens e 137 618 mulheres, traduzindo uma taxa de crescimento efetivo de -1,0%. Mantém-se, assim, a tendência de decrescimento populacional encetada em 2011, que, neste período, significou uma redução de 2 627 pessoas face a 2013.\n[…]\nDesde 1976, a Madeira é uma região autónoma da República Portuguesa. Possui órgãos de governo como a Assembleia Legislativa da Madeira e o Governo Regional. O Estado Português é representado na região pelo Representante da República para a Região Autónoma da Madeira, cargo ocupado por Pedro Barreto Ferreira.\n[…]\nOs partidos presentes na Região Autónoma da Madeira encontram-se ligados aos grandes partidos do espectro político português.\n[…]\nO arquipélago da Madeira possui as seguintes geminações:\n[…]\n«Governo Regional da Região Autónoma da Madeira»\n[…]\n«A Madeira na Construção, da Europa e do Mundo, por Alberto Vieira, Texto que serviu de base à conferência proferida na sessão solene do dia da Região Autónoma da Madeira, organizada pela Assembleia Legislativa Regional da Madeira, que teve lugar na vila da Ponta de Sol no dia 1 de julho de 2013»\n[…]\n«Jornais da Região Autónoma da Madeira»\n[…]\n«Lista de governadores da Ilha da Madeira» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Espanha",
      "descricao": "País do sudoeste da Europa que ocupa a maior parte da Península Ibérica, com capital em Madri."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Situado diante da costa do Marrocos e do Saara Ocidental, qual arquipélago atlântico pertence à Espanha?",
    "resposta": "Ilhas Canárias",
    "distratores": [
      "Madeira",
      "Açores",
      "Cabo Verde"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Canary_Islands"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Canary_Islands",
        "situacao": "ok",
        "texto": "The Canary Islands ( ; Spanish: Canarias [kaˈnaɾjas] ) or Canaries are an archipelago in the Atlantic Ocean and the southernmost autonomous community of Spain, located about 100 kilometres (60 mi) off the northwest coast of Africa. The archipelago has a population of over 2.2 million inhabitants, making it the most populous overseas special territory of the European Union.\n[…]\nAt present, the Canary Islands is the only autonomous community in Spain that has two capitals: Santa Cruz de Tenerife and Las Palmas de Gran Canaria, since the Statute of Autonomy of the Canary Islands was created in 1982.\n[…]\nThis VAT plus transportation costs make it very difficult for small Canarian shops to sell to the rest of Spain.\n[…]\nCanarian time is Western European Time (WET), or GMT. In summer, one hour ahead of GMT. Canarian time is one hour behind mainland Spain, and the same time as the UK, Ireland and mainland Portugal all year round.\n[…]\nThe Canary Islands have eight airports altogether, two of the main ports of Spain, and an extensive network of autopistas (highways) and other roads. For a road map see multimap. Traffic congestion is sometimes a problem in Tenerife and on Gran Canaria.\n[…]\nThe latter is one of the seven institutions of the Red de Investigación de Centros de Enfermedades Tropicales (RICET, \"Network of Research of Centers of Tropical Diseases\"), located in various parts of Spain. The Instituto Volcanológico de Canarias (Volcanological Institute of the Canary Islands) is based in Tenerife.\n[…]\nMisa Rodríguez, born in Las Palmas de Gran Canaria in 1999, plays association football for Real Madrid Femenino. Member of the 2023 Women's World Cup winning Spain women's national football team.\n[…]\nSergio Hanquet, Diving in Canaries, Litografía A. ROMERO, 2001. ISBN 84-932195-0-9\n[…]\nCloud vortices near the Canaries, March 2023. NASA Earth Observatory POTD for 15 April 2023."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Can%C3%A1rias",
        "situacao": "ok",
        "texto": "As Ilhas Canárias (em castelhano:  Canarias) são um arquipélago espanhol no Oceano Atlântico, a oeste da costa de Marrocos. Constituem uma Região Autónoma do Reino da Espanha. É também uma das oito regiões com uma consideração especial da Nacionalidade histórica reconhecidas como tal pelo Governo espanhol. A área é de 7 447 km², sendo assim a décima-terceira comunidade espanhola em área, a populaç\n[…]\nDevido à riqueza do arquipélago proveniente do comércio com a América espanhola, as ilhas eram frequentemente atacadas por piratas e corsários. Havia também corsários nativos do arquipélago, como Amaro Pargo, que participaram na Frota da prata (a rota comercial hispano-americana) no século XVIII, atacando navios inimigos de Espanha tanto nas águas das Canárias como ao longo da costa do Novo Mundo.\n[…]\nComo ocorre no resto da Espanha, a sociedade da Ilhas Canárias é predominantemente cristã, principalmente católica. A religião católica tem sido, desde a conquista do arquipélago das Canárias, a religião da maioria da população. Nas Ilhas Canárias nasceram dois grandes santos católicos: Pedro de Betancur e José de Anchieta. Ambos nascidos na ilha de Tenerife, foram, respetivamente, missionários na Guatemala e no Brasil. Nossa Senhora da Candelária é a padroeira das Ilhas Canárias.\n[…]\n15 de agosto: Assunção da Virgem Maria. Este dia é um feriado no arquipélago como em toda a Espanha. Popularmente, nas Ilhas Canárias, é conhecido como o dia em que se celebra a Nossa Senhora da Candelária (Padroeira das Ilhas Canárias);\n[…]\nAs festividades mais famosas e internacionais do arquipélago são o carnaval. O carnaval é comemorado em todas as ilhas e todos os seus municípios, mas os dois mais freqüentados são os das duas capitais das Ilhas Canárias; o Carnaval de Santa Cruz de Tenerife e o Carnaval de Las Palmas de Gran Canaria.\n[…]\nGran Canaria\n[…]\nO sitio oficial de turismo das Ilhas Canárias na Internet",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Tanzânia",
      "descricao": "País da África Oriental formado em 1964 pela união de Tanganica e Zanzibar."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Embora Dar es Salaam seja a maior cidade da Tanzânia, qual cidade do interior é a capital oficial do país?",
    "resposta": "Dodoma",
    "distratores": [
      "Arusha",
      "Zanzibar",
      "Mwanza"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dodoma"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dodoma",
        "situacao": "ok",
        "texto": "Dodoma  (lit. 'It has sunk' in Gogo), officially Dodoma City (Jiji Kuu la Dodoma, in Swahili), is the capital city of Tanzania. With a population of 765,179 as of 2022 which is projected to reach 1,000,000 by the end of 2026 (given the current pace of relocation of government organizations and NGOs),  it is also the administrative capital of both Dodoma Municipal Council and the entire Dodoma Regi\n[…]\nIn July 2024, Dodoma officially surpassed Arusha to become Tanzania's third-largest city by both infrastructure and population measures. In 1974, the Tanzanian government announced that the national capital would move from Dar es Salaam to Dodoma for social and economic reasons and to centralise the capital within the country. It became the official capital in 1996.\n[…]\nIn 2023, the national government under President Samia Suluhu unveiled the new State House in Dodoma, marking the relocation of government duties to the city. Nevertheless, Dar es Salaam has remained Tanzania's commercial and maritime capital while also retaining the state house, Ikulu, and a number of government functions.\n[…]\nAs much of the initial design never came to fruition over the past 40 years, government offices and embassies have resisted moving offices to Dodoma. As a result, many government offices remain in Dar es Salaam, which remains Tanzania's commercial and de facto capital.\n[…]\nThe SGR line through Dodoma forms part of Tanzania's wider standard gauge railway network intended to connect Dar es Salaam with Mwanza, Kigoma, and neighboring countries, including Rwanda and Burundi.\n[…]\nIn 2019, Tanzania Railways commissioned a study into a Dodoma commuter rail network.\n[…]\nTanzanian wine – produced near Dodoma\n[…]\nKironde, J.M. Lusugga (November 1993). \"Will Dodoma ever be the new capital of Tanzania?\". Geoforum. 24 (4): 435–453. doi:10.1016/0016-7185(93)90006-4.\n[…]\nPictures of Dodoma and its surroundings on Flickr"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dodoma",
        "situacao": "ok",
        "texto": "Dodoma é capital da Tanzânia e da Região de Dodoma (em inglês: Dodoma Region). O distrito da capital tem uma superfície de 2576 km² e uma população de 410 956 (censo de 2012).\n[…]\nDodoma foi fundada em 1907, na época da colonização alemã, ao mesmo tempo em que a construção da linha férrea 'Linha Central'.\n[…]\nUm plebiscito em 1974 decidiu mudar a capital da Tanzânia para Dodoma, embora a transferência não esteja até hoje completa. A estrutura governamental continua localizada principalmente em Dar es Salaam.\n[…]\nExistem duas universidades em Dodoma: a Universidade de St Johns da Tanzânia e a Universidade de Dodoma.\n[…]\nDodoma é geminada com:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Sri Lanka",
      "descricao": "País insular do sul da Ásia, no Oceano Índico, antes chamado Ceilão."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Na ilha antes chamada Ceilão, a capital oficial do Sri Lanka é uma cidade vizinha de Colombo. Qual é ela?",
    "resposta": "Sri Jayawardenepura Kotte",
    "distratores": [
      "Kandy",
      "Galle",
      "Jaffna"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sri_Jayawardenepura_Kotte"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sri_Jayawardenepura_Kotte",
        "situacao": "ok",
        "texto": "Sri Jayawardenepura Kotte (Sinhala pronunciation: [ʃriː dʒajəʋard̪ənəpurə ko̞ːʈːe̞ː]), also known as Kotte, is the legislative capital city of Sri Lanka. Sri Jayawardenepura Kotte is located adjacent to the urban area of Sri Lanka's de facto economic capital, Colombo.\n[…]\nIn 1391, following the conquest of the Kingdom of Jaffna by Prince Sapumal (Sembahap Perumal), Kotte was given the epithet 'Sri Jayawardenepura' ('resplendent city of growing victory'). It became the capital of the ancient Kingdom of Kotte, which it remained until the end of the 16th century.\n[…]\nSri Lanka formally changed its administrative capital from Colombo to Sri Jayawardenepura Kotte in 1982. While designated as the new capital in 1977 to relieve congestion in Colombo, the official relocation was marked by the inauguration of the new Parliament building in Kotte on 29 April 1982.\n[…]\nThe Kotte Urban Council became the Sri Jayawardenepura Kotte Municipal Council in 1997, with Chandra Silva as the first Mayor.\n[…]\nEthul Kotte\n[…]\nSri Jayawardenepura Kotte is a multi-ethnic, multi-religious urban centre. According to the census of 2012, the demographics by ethnicity and religion is as follows:\n[…]\nThere are a number of state and private schools in Kotte. They are either \"national schools\" (run by the central government; Main School President's College, Sri Jayawardenepura Kotte), \"government schools\" (run by the Provincial Councils), semi-government/private schools, or International schools (run by trusts and individuals; Gateway College Colombo is an example of the latter class of school).\n[…]\nHowever, since none of the average monthly precipitation falls below 60 mm (2.4 in), Sri Jayawardenepura Kotte falls under the tropical rainforest climate category.\n[…]\nSri Jayawardanapura Kotte Municipal Council"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Seri_Jaiavardenapura-Cota",
        "situacao": "ok",
        "texto": "Seri Jaiavardenapura-Cota, Sri Jaiavardenapura-Cota ou Sri Jayawardenapura-Kotte (em cingalês: ශ්‍රී ජයවර්ධනපුර කෝට්ටේ; em tâmil: ஸ்ரீ ஜயவர்த்தனபுரம் கோட்டே), ou simplesmente Cota, ou Kotte, (significando \"fortaleza\"), é a capital oficial do Sri Lanka, sendo chamada \"Nova Capital\".\n[…]\nEstá situada na parte ocidental do país, a 6° 54' Norte (latitude) e 79° 54' Este (longitude), na zona suburbana da capital económica e principal cidade da ilha de Ceilão, Colombo, da qual dista cerca de 8 km, a Sudeste. Em 2001, Cota tinha 115 826 habitantes.\n[…]\nO parlamento do Sri Lanka está em Kotte desde a inauguração do seu novo prédio, em 29 de abril de 1982. Assim, a cidade tornou-se a capital administrativa, permanecendo Colombo como capital económica.\n[…]\nJaiavardenapura foi o nome dado à cidade por seu fundador, Alagakkonara. Em 1979, com a decisão de reurbanizar a cidade e seu entorno para, ali, estabelecer a administração do país, Cota recuperou seu antigo nome — Sri-Jaya-Vardhana-Pura-Kotte (em português, \"a abençoada cidade fortificada da crescente vitória\").\n[…]\nCota já havia sido, por 150 anos, a capital do reino cingalês que unificou a ilha no século XV. Foi também a principal base portuguesa do Ceilão Português no século XVI. Foram os portugueses que promoveram a mudança da capital para Colombo, em 1565, devido à fraca capacidade de defesa do local.\n[…]\nApós a independência do Sri Lanka, no século XX, o processo de urbanização de Cota foi intensificado, visando a absorver o excedente de população de Colombo. Ainda assim, parte do seu território continua ocupada por áreas de produção agrícola, nomeadamente campos de arroz.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Malta",
      "descricao": "País insular do Mar Mediterrâneo, ao sul da Sicília, cuja capital é Valeta."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "A língua maltesa, oficial em Malta, é escrita no alfabeto latino, mas descende de qual idioma?",
    "resposta": "Árabe",
    "distratores": [
      "Italiano",
      "Grego",
      "Latim"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Maltese_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maltese_language",
        "situacao": "ok",
        "texto": "Maltese (Maltese: Malti, also L-Ilsien Malti or Lingwa Maltija) is a Central Semitic language derived from late medieval Sicilian Arabic. It is the only Semitic language officially written in the Latin script. It is spoken by the Maltese people and is a national language of Malta, and is the only official Semitic and Afroasiatic language of the European Union.\n[…]\nThe pioneering Maltese linguists Canon Giovanni Pietro Francesco Agius de Soldanis and Mikiel Anton Vassalli both mistakenly hypothesised that Maltese originated from the Punic language. Later scholars like John L. Hayes considered it to be descended from a North African dialect of Colloquial Arabic, which was introduced to Malta when the Aghlabids captured it in the 9th century.\n[…]\nAt the time Malta was thoroughly Arabized, the conquerors brought to the island the vulgar (colloquial) variant of Arabic, not the classical one (Classical Arabic); therefore, the Maltese language differs from Classical Arabic in the same way as the Arabic dialects differ from Classical Arabic.\n[…]\nSiculo-Arabic dialect which was spoken in Sicily and Malta is the ancestor of the Maltese language, some Siculo-Arabic words are still used in modern Sicilian (a Romance language spoken in Sicily):\n[…]\nAs Malta is a multilingual country, the use of Maltese in the mass media is shared with other European languages, namely English and Italian. The majority of television stations broadcast from Malta in English or Maltese, although broadcasts from Italy in Italian are also received on the islands. Similarly, there are more Maltese-language radio programs than English ones broadcast from Malta, but again, Italian broadcasts are also picked up.\n[…]\nLanguages of Malta\n[…]\nMaltese people\n[…]\nMaltese travel guide from Wikivoyage\n[…]\nMaltese languages and literatures Archived 2023-02-01 at the Wayback Machine collection of L-Università ta' Malta"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_maltesa",
        "situacao": "ok",
        "texto": "A língua maltesa (Lingwa Maltija; Malti) é uma das línguas semíticas e única dessa família de línguas que usa o alfabeto latino. É falada na ilhas de Malta, Gozo e Comino. São 387 mil os falantes como língua materna.\n[…]\nO maltês é a língua oficial e nacional de Malta, onde também o inglês goza de status oficial. É também uma das línguas oficiais da União Europeia, a única das línguas semíticas com essa consideração. O maltês tem origem no sículo-árabe, dialeto árabe que se desenvolveu na Sicília, sul da Itália e Malta. Cerca de metade do vocabulário vem do italiano e do siciliano, cerca de 20% vem do inglês. É a única língua semítica escrita na sua forma padrão com o alfabeto latino.\n[…]\nO maltês é uma língua semítica derivada do sículo-árabe, a qual no curso da história de Malta foi influenciada pelo italiano e pelo siciliano. Numa menor extensão foi influenciada pelo Francês e mais recentemente pelo inglês. Hoje, o vocabulário base e as \"palavras gramaticais\" (artigos, pronomes, conjunções, interjeições, verbos auxiliares, demonstrativos, etc) são semíticas, com muitas palavras de origem externa.\n[…]\nO reconhecimento do maltês como língua oficial foi em 1934. Desde o século XIX, filólogos e acadêmicos, como Mikiel Anton Vassalli, haviam feito esforços para transcrever o maltês falado numa forma escrita compreensível. Há muitos documentos desse período, com o maltês já escrito em alfabeto latino.\n[…]\nSículo-Árabe a língua da qual se originou a língua Maltesa. De 32% a 40% das palavras maltesas de hoje têm origem árabe.\n[…]\nA gramática maltesa é derivada do sículo-árabe, embora a pluralização (muitas com \"i\" ou s final) das palavras de origem externa siga a padrão das línguas românicas e do inglês.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "África do Sul",
      "descricao": "País do extremo sul da África com três capitais: Pretória, Cidade do Cabo e Bloemfontein."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Qual é a moeda da África do Sul, cujo nome vem de uma região de minas de ouro perto de Joanesburgo?",
    "resposta": "Rand",
    "distratores": [
      "Kwanza",
      "Pula",
      "Kwacha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/South_African_rand"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/South_African_rand",
        "situacao": "ok",
        "texto": "The South African rand, or simply the rand, (sign: R; code: ZAR) is the official currency of South Africa. It is subdivided into 100 cents (sign: \"c\"), a comma separates the rand and cents.\n[…]\nThe rand depreciation was exacerbated by the Eskom electricity crisis, which arose from the utility's inability to meet the country's rapidly growing energy demands.\n[…]\nIn 2010, the South African Reserve Bank and commercial banks withdrew all 1994 series 200-rand banknotes due to relatively high-quality counterfeit notes in circulation.\n[…]\nIn 2011, the South African Reserve Bank issued defective 100 rand banknotes that lacked fluorescent printing visible under UV light. In June, the printing of this denomination was moved from the South African Bank Note Company to Crane Currency's Swedish division (Tumba Bruk), which reportedly produced 80 million 100 rand notes.\n[…]\nThe South African Reserve Bank shredded 3.6 million 100-rand banknotes printed by Crane Currency because they had the same serial numbers as a batch printed by the South African Bank Note Company. In addition, the notes printed in Sweden were not the correct colour and were 1 mm short.\n[…]\nOn 3 May 2023, the South African Reserve Bank announced that a new series of banknotes would retain the image of Nelson Mandela on the obverse while showing the Big 5 in a family depiction on the reverse. This series contains the same denominations of 10, 20, 50, 100, and 200 rand.\n[…]\nFinancial rand\n[…]\nCoins of the South African rand\n[…]\nEconomy of South Africa\n[…]\nDecimal Coinage (1962): Newsreel of South Africa's conversion to the Rand, British Pathé\n[…]\nSouth African Currency Page (old rand), a short description of pre-1994 (apartheid-era) notes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rand",
        "situacao": "ok",
        "texto": "O rand ou, em uma forma aportuguesada, rande (no plural, randes) é a moeda corrente oficial da África do Sul. Seu nome vem da palavra em língua africâner Witwatersrand, abreviação de Wit-waters-rand, que traduzindo ao português significa \"cumes das águas brancas\" ou \"bordas altas das águas brancas\"; montanha essa que tem a cidade de Joanesburgo construída e onde era a maior reserva de ouro da Áfri\n[…]\nO rand teve início em 1961, coincidindo com a instituição da República da África do Sul, substituindo o peso sul-africano a uma taxa de dois rands por peso. Com o símbolo R, o rand pode ser dividido em 100 centavos – símbolo ‘c’, e está disponível em 5 notas, (R10, R20, R50, R100 e R200) e sete moedas (5c, 10c, 20c, 50c, R1, R2 e R5).\n[…]\nAs moedas de um e dois centavos também foram disponibilizadas até suas descontinuações, em Abril de 2002, mas devido à inflação que as desvalorizaram, e os preços que foram arredondados para 5c, elas não estão mais em circulação. As primeiras cédulas do rand tinham a imagem do Jan Van Riebeeck, o primeiro administrador da Cidade do Cabo, e na década de 1990 as notas foram redesenhadas com a imagem dos big five, cinco animais selvagens mais difíceis de serem caçados.\n[…]\nAs novas cédulas e moedas também foram impressas nas 11 línguas oficiais na África do Sul.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Portugal",
      "descricao": "País do sudoeste da Europa, na Península Ibérica, de capital Lisboa."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Entre 1808 e 1821, fugindo das tropas de Napoleão, a corte portuguesa governou o império a partir de qual cidade?",
    "resposta": "Rio de Janeiro",
    "distratores": [
      "Salvador",
      "Luanda",
      "Goa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Transfer_of_the_Portuguese_court_to_Brazil",
      "https://pt.wikipedia.org/wiki/Transfer%C3%AAncia_da_corte_portuguesa_para_o_Brasil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Transfer_of_the_Portuguese_court_to_Brazil",
        "situacao": "ok",
        "texto": "The Portuguese royal court transferred from Lisbon to the Portuguese colony of Brazil in a strategic retreat of Queen Maria I, Prince Regent John (the future King John VI), the Braganza royal family, its court, and senior officials, totaling nearly 10,000 people, on 27 November 1807. The embarkment took place on 27 November, but due to weather conditions, the ships were only able to depart on 29 N\n[…]\nIn Rio de Janeiro, he also established a powder factory, a botanical garden, an art academy, and an opera house. All these measures advanced Brazil's independence from Portugal. Less beneficial were the crown's policies continuing the Atlantic slave trade, attacks on indigenous peoples, and land grants to court favorites. He blocked the entry of ideas of political independence expressed in the U.S. and the former Spanish American colonies, now independent republics.\n[…]\nThis was an embodiment of Brazil's growing independence from Portugal, which intensified after the royal family's return to Europe in 1821.\n[…]\nThe relocation of the Portuguese nobility and administrative core to Brazil in 1808 had tremendous ramifications and resulted in a multi-faceted approach to change. Brazilian politics were initiated and affected, society and demographics were altered, the economy developed, and the city of Rio de Janeiro physically changed. The impact was felt in different ways and degrees by different sections of the population: nobility, wealthy families, Brazilians, indigenous peoples, and enslaved Africans.\n[…]\nThis was in part because its burgeoning independent identity had had an effect on Pedro, King John's oldest son and first emperor of Brazil. Pedro was nine years old when the family fled Portugal, meaning he was raised in Rio de Janeiro. Coming of age in Brazil rather than Portugal led to Pedro identifying as a Brazilian, a sentiment which influenced his defiance of the Cortes in 1821."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Transfer%C3%AAncia_da_corte_portuguesa_para_o_Brasil",
        "situacao": "ok",
        "texto": "A transferência da corte portuguesa para o Brasil foi o deslocamento da sede da monarquia portuguesa de Lisboa para o Rio de Janeiro, realizado entre o final de 1807 e o início de 1808, no contexto das Guerras Napoleônicas e da invasão francesa de Portugal. A operação envolveu a família real, membros da corte, funcionários régios, militares e outros agentes ligados ao funcionamento da monarquia.\n[…]\nNa formulação de Novais, 1808 marca uma \"inversão do pacto\": a América portuguesa, até então subordinada à metrópole, passa a ocupar posição central na preservação da própria monarquia portuguesa. Essa interpretação teve grande influência na historiografia brasileira posterior, embora tenha sido objeto de revisões e críticas por estudos que ressaltaram a diversidade regional do mundo luso-brasileiro e os diferentes interesses envolvidos na instalação da Corte no Rio de Janeiro.\n[…]\nEm 27 de novembro de 1807, o príncipe regente João e a família real embarcaram em Lisboa. O decreto pelo qual o príncipe regente declarou ter resolvido partir para o Rio de Janeiro foi preservado pela Biblioteca Nacional em exemplar digitalizado. O documento formalizava a decisão de transferir a residência da Corte para o Brasil e estabelecia providências para o governo do Reino durante a ausência do soberano.\n[…]\nLight, Kenneth (2008). A viagem marítima da família real: a transferência da Corte portuguesa para o Brasil. Rio de Janeiro: Zahar. 284 páginas\n[…]\nSchultz, Kirsten (2008). Versalhes tropical: império, monarquia e a Corte real portuguesa no Rio de Janeiro, 1808-1821. Rio de Janeiro: Civilização Brasileira. 444 páginas\n[…]\nWilcken, Patrick (2005). Império à deriva: a Corte portuguesa no Rio de Janeiro, 1808-1821. Rio de Janeiro: Objetiva\n[…]\nNeves, Lúcia Maria Bastos Pereira das (2014). «Ler, contar e escrever: educação e livros no Rio de Janeiro joanino (1808-1821)». História: Questões & Debates. 60 (1)"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Armênia",
      "descricao": "País sem litoral do Cáucaso, na Ásia Ocidental, com capital em Yerevan."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Símbolo nacional da Armênia e visível da capital Yerevan, o Monte Ararat fica dentro do território de qual país?",
    "resposta": "Turquia",
    "distratores": [
      "Geórgia",
      "Irã",
      "Azerbaijão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Ararat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Ararat",
        "situacao": "ok",
        "texto": "Mount Ararat, officially Mount Ağrı, also known as Masis, is a snow-capped and dormant compound volcano and a stratovolcano in easternmost Turkey. It consists of two major volcanic cones: Greater Ararat and Little Ararat. Greater Ararat is the highest peak in Turkey and the Armenian highlands with an elevation of 5,137 m (16,854 ft); Little Ararat's elevation is 3,896 m (12,782 ft). The Ararat mas\n[…]\nToday, Masis and Ararat are interchangeably used in Armenian.\n[…]\n[...] it connects Armenians to the biblical narrative of human development. [...] it makes Mount Ararat the national symbol of all Armenians, and the territory around it the Armenian homeland from time immemorial.\"\n[…]\nAdriaans noted that Ararat is featured as a sanctified territory for the Armenians in everyday banal irredentism.\n[…]\nLevon Abrahamian noted that Ararat is visually present for Armenians in reality (it can be seen from many houses in Yerevan and settlements in the Ararat plain), symbolically (through many visual representations, such as on Armenia's coats of arms), and culturally—in numerous and various nostalgic poetical, political, architectural representation. Hotels in Yerevan often advertise the visibility of Ararat from their rooms, which is seen as a major advantage for tourists.\n[…]\nDuring his travels to Armenia, Soviet Russian writer Vasily Grossman observed Mount Ararat from Yerevan standing \"high in the blue sky\". He wrote that \"with its gentle, tender contours, it seems to grow not out of the earth but out of the sky, as if it has condensed from its white clouds and its deep blue. It is this snowy mountain, this bluish-white sunlit mountain that shone in the eyes of those who wrote the Bible.\"\n[…]\nIn Armenia\n[…]\nThe name is also used in two dioceses of the Armenian Apostolic Church: the Araratian Pontifical Diocese and the Diocese of Masyatsotn, encompassing capital Yerevan and the Ararat province, respectively."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Ararate",
        "situacao": "ok",
        "texto": "O Ararate (em turco: Ağrı Dağı; em armênio: Մասիս; romaniz.: Masis ou Արարատ, Ararat; em curdo: Çiyayê Agirî; em persa: کوه آرارات; romaniz.: Kuh-e Ararat) é a mais alta montanha da Turquia moderna. Tem dois picos: Grande Ararate (o pico mais alto da Turquia e de todo o planalto armênio com altitude de 5 137 m) e o Baixo Ararate (com uma altitude de 3 896 m). O maciço do Ararate tem de cerca de 40\n[…]\nA fronteira entre o Irã e a Turquia fica a leste do Baixo Ararate, o pico mais baixo do maciço do Ararate. Nesta área, pela Convenção de Teerã de 1932, realizou-se a mudança das fronteiras em favor da Turquia, permitindo a ela ocupar o flanco leste do maciço. O Monte Ararate, na tradição judaico-cristã, está associado com as \"Montanhas do Ararate\" onde, segundo o livro do Gênesis, a Arca de Noé estaria supostamente localizada.\n[…]\nTambém desempenha um papel significativo no nacionalismo e irredentismo armênio.\n[…]\nO Monte Ararate está situado na região leste da Anatólia, Turquia, entre as províncias de Eder e Are, perto da fronteira com o Irã e a Armênia, entre os rios Aras e Murat. O seu cume fica a cerca de 16 km ao oeste do Irã e 32 km ao sul da fronteira com a Armênia. O exclave de Naquichevão pertencente ao Azerbaijão também está nas proximidades da montanha.\n[…]\nO Ararate domina o horizonte da capital da Armênia, Erevã. A montanha é reverenciada pelos armênios como um símbolo de sua identidade nacional e de seu irredentismo. O Ararate é o símbolo nacional da República da Armênia desde 1991, sendo apresentado no centro de seu brasão de armas. Em 1937, ele passou a figurar no brasão da República Socialista Soviética da Armênia, que caracterizava o Monte Ararat, juntamente com o martelo soviético e a foice com uma estrela vermelha atrás dele.\n[…]\nExpedições ao Mt. Ararate - Turquia\n[…]\nWebcam do Ararate\n[…]\nTHE BOUNDARIES OF URARTU/ARARAT, By Rex Geissler, Gordon Franz, and Bill Crouse, Dez. 24, 2008",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Estados Unidos",
      "descricao": "República federal da América do Norte com 50 estados e capital em Washington, D.C."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Durante a maior parte da década de 1790, enquanto Washington ainda era construída, qual cidade serviu de capital dos Estados Unidos?",
    "resposta": "Filadélfia",
    "distratores": [
      "Boston",
      "Baltimore",
      "Richmond"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Residence_Act",
      "https://en.wikipedia.org/wiki/Philadelphia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Residence_Act",
        "situacao": "ok",
        "texto": "The Residence Act of 1790, officially titled An Act for establishing the temporary and permanent seat of the Government of the United States (1 Stat. 130), is a United States federal statute adopted during the second session of the 1st United States Congress and signed into law by President George Washington on July 16, 1790.\n[…]\nCongress agreed to the compromise, which narrowly passed as the Residence Act. Jefferson got the Virginia delegates to support the bill with the debt provisions, and Hamilton convinced the New York delegates to agree to the Potomac site for the capital. The bill was approved by the Senate by a vote of 14 to 12 on July 1, 1790, and by the House of Representatives by a vote of 31 to 29 on July 9, 1790. Washington signed the act into law one week later on July 16.\n[…]\nWashington returned to Philadelphia in late November 1790 to meet with Jefferson. Then, the decision was reached to locate the capital at or adjacent to Georgetown, just below the Fall Line and the farthest inland point for navigation.\n[…]\nThe original intention of the Residence Act was to use proceeds from selling lots in the District to cover the costs of constructing federal buildings in the capital. However, few were interested in purchasing lots. A shortage of funds further contributed to the delays and problems in building the Capitol and other federal buildings in Washington.\n[…]\nBowling, Kenneth R. (2005). Establishing Congress: The Removal to Washington, D.C., and the Election of 1800. Ohio University Press. ISBN 0-8214-1619-7.\n[…]\nReps, John William (1965). \"Planning the National Capital\". The Making of Urban America: A History of City Planning in the United States. Princeton University Press. ISBN 0-691-00618-0.\n[…]\n\"Residence Act: Primary Documents in American History\". Library of Congress Research Guides. Library of Congress."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Philadelphia",
        "situacao": "ok",
        "texto": "Philadelphia (  FIL-ə-DEL-fee-ə), colloquially referred to as Philly, is the most populous city in the U.S. state of Pennsylvania and the sixth-most populous city in the United States. Its population was 1.60 million at the 2020 census and estimated at 1.57 million in 2025. The Philadelphia metropolitan area, also known as the Delaware Valley, is located in both the Mid-Atlantic and northeastern U\n[…]\nFollowing the end of the Revolutionary War, the U.S. Constitution was ratified at the Philadelphia Convention. Philadelphia remained the largest U.S. city until 1790, and it served as the nation's first capital from May 10, 1775, until December 12, 1776, and on four subsequent occasions until 1800, when construction of the new national capital in Washington, D.C. was completed.\n[…]\nPhiladelphia was represented by the Washington Grays in the American Civil War. The African-American population of Philadelphia increased from 31,699 to 219,559 between 1880 and 1930, largely stemming from the Great Migration from the South.\n[…]\nPhiladelphia's economic sectors include financial services, health care, biotechnology, information technology, trade and transportation, manufacturing, oil refining, food processing, and tourism. Metropolitan Philadelphia is one of the top five American venture capital hubs, credited to its proximity to New York City's financial and tech and biotechnology ecosystems.\n[…]\nPhiladelphia is a hub for information technology and biotechnology. Philadelphia and Pennsylvania are attracting new life sciences ventures. As of 2024, the Philadelphia metropolitan area ranks as one of the Big Five U.S. venture capital hubs, enabled by its proximity to both the entrepreneurial and financial ecosystems of New York City and to the federal regulatory environment of Washington, D.C.\n[…]\nMetropolitan areas in the Americas"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Groenlândia",
      "descricao": "A maior ilha do mundo, no Atlântico Norte, coberta em grande parte por uma camada de gelo."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Segundo as sagas nórdicas, qual viking chamou a Groenlândia de terra verde, para atrair colonos?",
    "resposta": "Erik, o Vermelho",
    "distratores": [
      "Leif Erikson",
      "Harald Cabelo Belo",
      "Ragnar Lodbrok"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Erik_the_Red"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Erik_the_Red",
        "situacao": "ok",
        "texto": "Erik Thorvaldsson (c. 950 – c. 1003), known as Erik the Red (Norwegian: Eirik Raude), was a Norse explorer, described in medieval and Icelandic saga sources as having founded the first European settlement in Greenland. He most likely earned the epithet \"the Red\" for the color of his hair and beard.\n[…]\nWhile Erik's wife took heartily to Christianity, even commissioning Greenland's first church, Erik greatly disliked it and stuck to his Norse gods—which, the sagas relate, led Þjódhild to withhold intercourse from her husband.\n[…]\nIt has been a common mistake for popular history to occasionally credit Erik as being the first European to discover Greenland, however, the Icelandic sagas suggest that earlier Norsemen discovered and attempted to settle it before him. Tradition credits Gunnbjörn Ulfsson (also known as Gunnbjörn Ulf-Krakuson) with the first sighting of the land-mass.\n[…]\nNumerous parallels exist between the Saga of Erik the Red and the Greenland saga, including recurring characters and recountings of the same expeditions, though with a few notable differences. The saga of Erik the Red portrays a number of the expeditions in the Greenland saga as just one expedition led by Thorfinn Karlsefni, although Erik's son Thorvald, his daughter Freydís and Karlsefni's wife Gudrid play key roles in the retelling.\n[…]\nAnother notable difference is the location of their settlements. According to the Grœnlendinga saga, Karlsefni and the others settled in a place that is referred to only as Vinland, while in Erik the Red's saga they formed two base settlements: Straumfjǫrðr where they spent the winter and the following spring, and Hop where they later settled but ran into problems with the natives they called Skrælings, as depicted in the Greenland saga.\n[…]\n\"The Fate of Greenland's Vikings\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eir%C3%ADkr",
        "situacao": "ok",
        "texto": "Érico Torvaldsson (nórdico antigo: Eiríkr Þorvaldsson), também conhecido como Eric, o Vermelho, Érico, o Vermelho, Erik, o Vermelho ou Érico, o Ruivo (nórdico antigo: Eiríkr hinn rauði), foi um viquingue, comerciante e explorador norueguês em finais do século X, que estabeleceu o primeiro assentamento europeu na Gronelândia (c.985). Era pai de Leif Ericson, um dos primeiros europeus a chegar à Amé\n[…]\nAs principais fontes de pesquisa sobre a sua vida são as sagas islandesas de Érico, o Vermelho e dos Gronelandeses.\n[…]\nSem poder morar na Noruega ou na Islândia, Érico e alguns seguidores seus navegaram durante dois anos para descobrir novas terras, e assim desembarcaram na Groenlândia por volta de 985. Com a ideia de criar seu reino, independente da Noruega, Érico voltou à Islândia para buscar novas pessoas, e de regresso à Groenlândia fundou a cidade de Gardar e a propriedade rural de Brattalid (Brattahlid) em 985. Aos poucos foram chegando pessoas e a Groenlândia foi cada vez sendo mais habitada.\n[…]\nO seu filho, Leif Ericsson, que ajudou sempre o pai, introduziu o Cristianismo na Groenlândia, apesar da forte oposição deste. Cerca do ano 1000, chegou à América do Norte que foi batizada de Vinlândia, em virtude de por ali haver cepas bravas. Érico morreu no ano 1000, deixando seu filho Leif Ericsson como seu sucessor em Bratalida.\n[…]\nÉrico o Vermelho está referido na Saga de Érico, o Vermelho e na Saga dos Groenlandeses, ambas escritas no século XIII, assim como no manuscrito Landnámabók do século XII.\n[…]\nEm 2003, a banda feroesa Týr lançou um álbum de nome Eric, The Red, onde presta uma homenagem a Érico, o Vermelho. A faixa-título do álbum fala a respeito da vida do viking.\n[…]\nSaga de Érico, o Vermelho\n[…]\nSaga dos Groenlandeses\n[…]\n\"The Fate of Greenland's Vikings\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Canberra",
      "descricao": "Cidade planejada que é a capital da Austrália."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Qual arquiteto americano venceu, com a esposa Marion Mahony, o concurso para projetar Camberra, a capital australiana?",
    "resposta": "Walter Burley Griffin",
    "distratores": [
      "Frank Lloyd Wright",
      "Daniel Burnham",
      "Louis Sullivan"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Walter_Burley_Griffin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Walter_Burley_Griffin",
        "situacao": "ok",
        "texto": "Walter Burley Griffin (November 24, 1876 – February 11, 1937) was an American architect and landscape architect. He designed Canberra, Australia's capital city,  the New South Wales towns of Griffith and Leeton, and, with his wife, the Sydney suburb of Castlecrag.\n[…]\nGriffin, Marion Mahony; Griffin, Walter Burley (1998). Beyond Architecture: Marion Mahony and Walter Burley Griffin : America, Australia, India. University of Illinois Press. ISBN 978-1-86317-068-0. OCLC 40398084.\n[…]\nMcGregor, Alasdair, 'Grand Obsessions: The life and work of Walter Burley Griffin and Marion Mahony Griffin, Penguin/Lantern, Camberwell, Victoria, 2009\n[…]\nTownsend, Danielle, ed. (December 2008). \"Walter Burley Griffin Lodge\". Australian Period Style (3). Universal Magazines: 80–85. ISSN 1441-5259.\n[…]\nMcGregor, Alasdair, 'Grand Obsessions: The life and work of Walter Burley Griffin and Marion Mahony Griffin', Penguin/Lantern, Camberwell, Victoria, 2009 ISBN 978-1-920989-38-5\n[…]\nTurnbull, J. and Navaretti, P. (eds), The Griffins in Australia and India: the complete works of Walter Burley Griffin and Marion Mahony Griffin, Miegunyah Press, Melbourne 1998; ISBN 0-5228-4830-3\n[…]\nWalter Burley Griffin Society (Australia) Archived May 21, 2019, at the Wayback Machine\n[…]\nWalter Burley Griffin and Marion Mahony Griffin architectural drawings, circa 1909–1937.Held by the Department of Drawings & Archives, Avery Architectural & Fine Arts Library, Columbia University.\n[…]\nThe Walter Burley Griffin Society of America\n[…]\nPapers of Walter Burley Griffin and Marion Mahony collected by Eric Nicholls, 1900–1947\n[…]\nThe work of Walter Burley Griffin and Marion Mahony Griffin in Melbourne, 1975 a collection of photographs by Wolfgang Sievers of works by Walter Burley Griffin and Marion Mahony Griffin taken in 1975"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Walter_Burley_Griffin",
        "situacao": "ok",
        "texto": "Walter Burley Griffin (Maywood, 24 de novembro de 1876 - Lucknow, 11 de fevereiro de 1937) foi um arquiteto e paisagista estadunidense, conhecido principalmente pelo projeto da cidade de Canberra, capital da Austrália, Foi um dos primeiros a utilizar garagens residenciais sem paredes e é responsável por inovações na utilização do concreto armado.\n[…]\nRock Crest Rock Glen em Mason City, Iowa, um projeto com diversas casas de Walter Burley Griffin e Marion Mahony, é encarado como o trabalho mais dramático da década deste estilo e permanece como a maior coleção de casas, em ambiente natural, no estilo Prairie.\n[…]\nO relacionamento entre Griffin e Frank Lloyd Wright esfriou após a sua demissão do escritório em 1906. Com o casamento de Walter e Marion, Wright passou a considerá-los seus adversários. Depois que Griffin venceu a competição para o projeto de Canberra, e como resultado da cobertura em primeira página do New York Times, Wright e Griffin nunca se falaram novamente.\n[…]\nEm 1919 os Griffins fundaram a Greater Sydney Development Association (GSDA), e em 1921 compraram 259 hectares de terra em North Sydney. O objetivo da GSDA era o desenvolvimento de uma comunidade idílica com arquitetura consistente em um ecossistema conhecido como bushland. Walter Burley Griffin como diretor da GSDA projetou todos os edifícios construídos no local até 1935. Castlecrag foi o primeiro subúrbio a ser desenvolvido pela GSDA.\n[…]\nWalter Burley Griffin Society (Australia)\n[…]\nWalter Burley Giffiin, The Prairie School Of Architecture\n[…]\nThe Walter Burley Griffin Society of America\n[…]\nPapers of Walter Burley Griffin and Marion Mahony collected by Eric Nicholls, 1900-1947\n[…]\nThe work of Walter Burley Griffin and Marion Mahony Griffin in Melbourne, 1975 coleção de fotos de Wolfgang Sievers sobre trabalhos de Walter Burley Griffin e Marion Mahony Griffin tiradas em 1975",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Islândia",
      "descricao": "País insular no Atlântico Norte, entre a Groenlândia e a Noruega, conhecido por vulcões e gêiseres."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O Althing, parlamento da Islândia e um dos mais antigos do mundo ainda em funcionamento, foi criado em que século?",
    "resposta": "Século dez",
    "distratores": [
      "Século oito",
      "Século doze",
      "Século quatorze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Althing"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Althing",
        "situacao": "ok",
        "texto": "The Alþingi (Icelandic: [ˈalˌθiɲcɪ]; Icelandic for 'general meeting', anglicised as Althing or Althingi) is the national legislature of Iceland, which is also known in the English language as the Icelandic Parliament or as the Parliament of Iceland. Established in 930, it is the oldest legislature in the world.\n[…]\nA supplementary session was first held in 1886, and these became more frequent in the 20th century. The Althing met from 1881 in the newly built Parliament House. The Governor-General (landshöfðingi) was the highest representative of the government in Iceland and was responsible to the Advisor for Iceland (Íslandsráðgjafi) in Copenhagen.\n[…]\nThe Act of Union (which took effect on 1 December 1918) made Iceland a state in personal union with the Kingdom of Denmark. It was set to expire after 25 years, when either state could choose to leave the union. The Althing was granted unrestricted legislative power. In 1920, the number of members of the Althing was increased to 42. Since 1945, the Althing has customarily assembled in the autumn.\n[…]\nThe union with Iceland was effectively made inoperable when the Kingdom of Denmark was occupied by Germany on 9 April 1940. On the following day, the Althing passed two resolutions, investing the Icelandic cabinet with the power of Head of State and declaring that Iceland would accept full responsibility for both foreign policy and coastal surveillance. A year later, the Althing adopted a law creating the position of Regent to represent the Crown.\n[…]\nThis position continued until the Act of Union was repealed, and the Republic of Iceland established, at a session of the Althing held at Þingvellir on 17 June 1944.\n[…]\nAlthingi's English website\n[…]\nalthingi.ai – Open data platform with MP voting records, bills, government payments and conflict-of-interest data"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parlamento_da_Isl%C3%A2ndia",
        "situacao": "ok",
        "texto": "O Parlamento da Islândia (Alþingi Íslendinga, em islandês, transliterado como Althingi ou Althing) é o órgão que detém o poder legislativo na Islândia. Fundado em 930, na região de Þingvellir, é o parlamento nacional mais antigo da história da humanidade em atividade.\n[…]\nA constituição islandesa estabelece seis círculos eleitorais (kjördæmi), com a possibilidade de criar um sétimo. Cada uma destas divisões territoriais elege nove membros. Além destes 54 parlamentares, cada um dos grupos políticos recebe uma quantidade de lugares proporcional à percentagem obtida a nível nacional. Para poder recorrer a este círculo extra, o partido em causa deverá ter tido mais de 5% de todos os votos válidos no processo eleitoral.\n[…]\nO Althing afirma ser o parlamento mais antigo do mundo. Seu estabelecimento como uma assembleia ao ar livre ou coisa realizada nas planícies de Þingvellir ('Campos de Coisa' ou 'Campos de Assembleia') por volta de 930, lançou as bases para uma existência nacional independente na Islândia. Para começar, o Althing era uma assembleia geral da Comunidade Islandesa , onde os líderes mais poderosos do país (goðar) se reuniam para decidir sobre legislação e administrar justiça .\n[…]\nO centro da reunião era o Lögberg , ou Rocha da Lei, um afloramento rochoso no qual o Orador da Lei (lögsögumaður) tomava seu assento como presidente da assembleia. Suas responsabilidades incluíam recitar em voz alta as leis em vigor na época. Era seu dever proclamar a lei processual do Althing para aqueles que compareciam à assembleia a cada ano.\n[…]\nPolítica da Islândia\n[…]\nEleições na Islândia\n[…]\nSite oficial em islandês",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Hong Kong",
      "descricao": "Região administrativa especial da China, no litoral sul do país, antiga colônia britânica."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Depois de mais de cento e cinquenta anos sob domínio britânico, Hong Kong passou à soberania chinesa em que ano?",
    "resposta": "1997",
    "distratores": [
      "1984",
      "1989",
      "1999"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Handover_of_Hong_Kong"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Handover_of_Hong_Kong",
        "situacao": "ok",
        "texto": "The handover of Hong Kong from the United Kingdom of Great Britain and Northern Ireland to the People's Republic of China occurred at midnight on 1 July 1997. This event ended 156 years of British rule, dating back to the capture of Hong Kong Island in 1841 during the First Opium War.\n[…]\nConsequently, because ceding Hong Kong came at the end of half a century of decolonisation, and because the handover meant that the United Kingdom became without significant overseas territories, dominions, or colonies for the first time in its history (Great Britain, having been bequeathed the incipient domains of its later empire by inheriting the colonial possessions of the Kingdom of England upon the passing of the Acts of Union 1707, always having been an imperial power, ab initio), the handover of Hong Kong to China is regarded by many (including King Charles III) as marking the conclusion of the British Empire, with 1 July 1997 being its end date and the handover ceremony being its last diplomatic act.\n[…]\nCui Jian's 1997 single \"Get Over That Day\" tells the story of a man who learns about the impending return of his never-before-met sister to their dysfunctional family, alluding to the handover of Hong Kong.\n[…]\nChinese American rapper Jin Auyeung has a song called \"1997\" in his Cantonese album ABC, which he makes references to the handover, ten years since Hong Kong's return to China.\n[…]\nThe handover of Hong Kong is referenced multiple times and witnessed in the 1997 film Chinese Box, starring Jeremy Irons and Gong Li. The film itself was filmed leading up to and during the handover.\n[…]\nThe Hong Kong handover at the Wayback Machine (archived 16 June 1997) – BBC World Service – On Air – January and May 1997\n[…]\nHong Kong: The Return to China – Washington Post Special Report"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Transfer%C3%AAncia_da_soberania_de_Hong_Kong",
        "situacao": "ok",
        "texto": "A transferência da soberania de Hong Kong, também conhecida como \"o retorno\" na China continental, foi a transferência de Hong Kong do Reino Unido para a China em uma cerimônia em 30 de junho de 1997. O território de Hong Kong compreendia a Ilha de Hong Kong e a Península de Kowloon, que foram cedidas à Grã-Bretanha em 1842 e 1860, respectivamente, e os Novos Territórios, que foram arrendados por \n[…]\nCom uma população de cerca de 6,5 milhões de pessoas em 1997, Hong Kong constituía 97 por cento da população total de todos os Territórios Dependentes da Grã-Bretanha na época e foi um dos últimos territórios coloniais significativos do Reino Unido. A transferência é frequentemente considerada como o marco do fim definitivo do Império Britânico.\n[…]\nEm 1997, a colônia tinha uma população de aproximadamente 6,5 milhões, o que representava cerca de 97% da população dos Territórios Dependentes Britânicos como um todo naquela época (a segunda maior, Bermuda, tendo uma população de aproximadamente 62 000 em 1997). Com um produto interno bruto de aproximadamente US$ 180 bilhões no último ano de domínio britânico, a economia de Hong Kong era cerca de 11% do tamanho da Grã-Bretanha.\n[…]\nConsequentemente, porque a cessão de Hong Kong ocorreu no final de meio século de descolonização e porque a transferência significou que o Reino Unido ficou sem territórios ultramarinos, domínios ou colônias significativas pela primeira vez em sua história (a Grã-Bretanha, tendo sido legada os domínios incipientes de seu posterior império ao herdar as possessões coloniais do Reino da Inglaterra após a aprovação dos Atos de União de 1707, sempre tendo sido uma potência imperial, ab initio), a transferência de Hong Kong para a China é considerada por alguns como marcando a conclusão do Império Britânico, sendo 1 de julho de 1997 sua data de término e a cerimônia de entrega seu último ato diplomático.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Índia",
      "descricao": "País do sul da Ásia, o mais populoso do mundo."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Depois de décadas de luta pela independência, com Gandhi entre os líderes, a Índia se libertou do domínio britânico em que ano?",
    "resposta": "1947",
    "distratores": [
      "1945",
      "1950",
      "1957"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Indian_Independence_Act_1947"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Indian_Independence_Act_1947",
        "situacao": "ok",
        "texto": "The Indian Independence Act 1947 (10 & 11 Geo. 6. c. 30) is an act of the Parliament of the United Kingdom that partitioned British India into the two new independent dominions of India and Pakistan. On 15 July 1947 the House of Commons voted for the bill and the House of Lords gave its consent on the next day. The act received Royal Assent on 18 July 1947 and thus India and Pakistan (the latter i\n[…]\nDivision of British India into the two new dominions – the Dominion of India and the Dominion of Pakistan – with effect from 15 August 1947;\n[…]\nTermination of British suzerainty over the princely states, with effect from 15 August 1947. These states could decide to join either India or Pakistan;\n[…]\nCivil servants: Section 10 provided for the continuance of service of the government servants appointed on or before 15 August 1947 under the Governments of new Dominions with full benefits.\n[…]\nOn 25 July 1947, Lord Mountbatten addressed a special full meeting of the Chamber of Princes concerning the future of the princely states, which he described as numbering something as \"565\". Under the Indian Independence Act 1947, India and Pakistan became independent Dominions on 15 August 1947.\n[…]\nBetween October 1947 and March 1948 the rulers of several Muslim-majority states signed instruments of accession to join Pakistan. These included Amb, Bahawalpur, Chitral, Dir, Kalat, Khairpur, Kharan, Las Bela, Makran, and Swat. The Khanate of Kalat initially elected to resume its independence, until 27 March 1948 when its ruler acceded to Pakistan.\n[…]\nCeylon Independence Act 1947\n[…]\nText of the Indian Independence Act 1947 as in force today (including any amendments) within the United Kingdom, from legislation.gov.uk.\n[…]\nText of the Indian Independence Act 1947 as originally enacted or made within the United Kingdom, from legislation.gov.uk.\n[…]\nIndian Independence Bill,1947 Archived 3 May 2017 at the Wayback Machine"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.94 — 2026-11-02**
>
> Este documento define **o que é uma boa pergunta** no Mestre2 e **como o banco de perguntas é organizado e produzido**. Vale para qualquer pessoa ou modelo que crie, revise ou processe perguntas.
>
> Ele tem duas partes:
> - **Parte I — Regras de conteúdo (§1 a §9):** o que uma pergunta deve ser. É a parte que o gerador e o crítico automáticos recebem.
> - **Parte II — Organização e processo (§10 a §18):** esquemas, fluxo de produção, decisões, pendências, o jogo, o app e a programação até 10 000 e até 20 000 perguntas. É a referência de quem mantém o projeto.
>
> Arquivos relacionados:
> - [`pergunta.schema.json`](pergunta.schema.json) e [`ancora.schema.json`](ancora.schema.json): esquemas
> - [`temas_subtemas.json`](temas_subtemas.json): lista canônica de temas e subtemas
> - [`exemplos_perguntas.json`](exemplos_perguntas.json) · [`exemplos_ancoras.json`](exemplos_ancoras.json)
> - [`proposta_temas_subtemas.md`](proposta_temas_subtemas.md): histórico da revisão da lista canônica
> - [`../pipeline/README.md`](../pipeline/README.md): o pipeline que produz as perguntas
> - [`../app/`](../app/): o app que usa as perguntas numa partida (§16)
> - [`modo_trilha_da_vida.md`](modo_trilha_da_vida.md): rascunho do segundo modo de jogo, em concepção (§15)
> - [`modo_pokemon.md`](modo_pokemon.md): o modo Pokémon e a coleção de perguntas de pokémon (§6, §15, §16, §17)

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
- **Dificuldade percebida** (2026-10-12): no app, quem lê pode avaliar a pergunta em cinco níveis, de muito fácil a muito difícil (§16, "Avaliação"). Essa avaliação poderá mudar o campo `dificuldade`, como **informação adicional à popularidade**, e não no lugar dela. **Por enquanto só é registrada:** não altera o campo, e a dificuldade, estimada ou percebida, **não orienta a criação de perguntas**. A ideia é coletar dados antes de decidir como usá-los.
- **Uso apenas ilustrativo:** a dificuldade só é **exibida**, na ficha da pergunta no app. Ela **não é usada** para nenhuma decisão do projeto: nem no sorteio, nem em proporções do banco, encomendas, regras de variedade, crítica, pontuação ou tabuleiro. Também não é enviada ao gerador nem ao crítico.
- **Limites:** é uma estimativa da **fama da âncora**, e não da pergunta. Não enxerga o ângulo, então um fato obscuro sobre algo famoso continua difícil. Também confunde interesse com conhecimento: um conceito conhecido de todos, mas pouco pesquisado, como os cartões amarelo e vermelho, sai difícil.

**Limites por âncora** (o pipeline descarta o que passar deles):
- no máximo **3 perguntas por âncora** em cada lote (2 até 2026-10-27), nunca com o mesmo ângulo;
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro;
- no máximo **8 perguntas por âncora** no banco inteiro (3 até 2026-10-23, 5 até 2026-10-27), somando texto e figura, e no máximo **3 com figura** (2 até 2026-10-27). As exclusivas de uma coleção têm conta à parte (§6, "Coleções");
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
- **Resposta que é um ano ou uma data: sempre `multipla`.** Quando a resposta é um ano específico ("1969") ou uma data mais detalhada ("15 de novembro de 1889", "2 de fevereiro"), a pergunta é obrigatoriamente de múltipla escolha, com ou sem figura. Os distratores são anos (ou datas) próximos e críveis, no mesmo formato da resposta, nenhum deles também correto. A regra vale só quando **a resposta é o próprio ano ou a data**: século e década ("século dezenove", "década de 1970") e respostas em que o ano identifica outra coisa, como uma edição de Olimpíada ou de Copa ("Londres 2012", "1970, no México"), podem continuar abertas. Essas perguntas têm um teto no jogo original (§9).
- **Metade aberta, metade múltipla escolha** (desde 2026-10-27). O jogo original busca as duas formas na mesma proporção, em cada tema, para que um modo só de múltipla escolha tenha perguntas de todos os temas. Vale para texto e figura. Cada lote recebe a quantidade de `multipla` que aproxima o seu tema dessa meta (§17), e a pergunta segue a quantidade pedida, salvo quando a outra forma for claramente melhor.

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
- no máximo **três perguntas com figura por âncora**, de famílias diferentes e com imagens diferentes (a obra inteira e um detalhe, a fachada e uma vista aérea).

**7. Imagens que pedem observação.** Além da imagem principal do Wikidata, valem um detalhe recortado de uma obra, um ângulo menos visto de um lugar ou uma foto histórica. O recorte é permitido (§6). A imagem nunca pode ser ambígua: se o detalhe também existe em outra obra, a pergunta está errada.

**8. Distratores de figura** (múltipla escolha): do mesmo catálogo e **visualmente parecidos** com a resposta (outro felino de manchas, outra catedral gótica, outro pintor impressionista), e nenhum deles pode também descrever a imagem.

**Critérios da figura**, além dos de §8:
- [ ] **Nada na imagem entrega a resposta:** placas, legendas, letreiros, marcas d'água, bandeiras.
- [ ] **Resposta única diante da imagem:** atenção a réplicas, paisagens parecidas e monumentos que ficam entre duas cidades. A Ponte Luís I liga o Porto a Vila Nova de Gaia, por isso a pergunta é pela cidade "do outro lado da ponte".
- [ ] **Legível num celular** a um braço de distância.
- [ ] **O enunciado é verdadeiro para esta foto específica**, e não só para o assunto: o ponto de vista, o lado e o que aparece nela.
- [ ] **Nem óbvia nem impossível:** a Torre Eiffel de frente é fácil demais; um bairro qualquer de uma cidade grande, difícil demais. A imagem precisa ter o que permite reconhecer o assunto (a silhueta, o monumento, a pelagem). Para assuntos menos conhecidos, use `multipla`.

### Coleções

Uma **coleção** é um conjunto de perguntas sobre um mesmo universo, com um modo de jogo próprio (decidido em 2026-10-13). Cada coleção tem um documento próprio com as diretrizes dela; a única até agora é a de **pokémon**, do modo Pokémon, em [`modo_pokemon.md`](modo_pokemon.md).

- A pergunta da coleção tem o campo `colecao`. O modo da coleção sorteia só as perguntas dela, de qualquer tema.
- **Exclusiva** (campo `exclusiva`): a pergunta sai **só no modo da coleção**, nunca no jogo original (Master e Linear).
- **Subtema da coleção** (campo `subtema_colecao`): uma coleção pode ter subtemas próprios, definidos no documento dela, que dividem as perguntas dentro do modo. Eles não substituem tema e subtema, e a lista canônica (§3) não muda. A folga para sobreposição entre eles também é definida no documento da coleção.
- As perguntas da coleção seguem esta Parte I: tema e subtema, âncora, fontes, redação e critérios. Podem ser com ou sem figura.
- **Regras de conteúdo próprias:** o documento de uma coleção pode ter regras de conteúdo para as exclusivas dela, que partem desta Parte I e prevalecem sobre ela onde divergirem. Nos lotes exclusivos, o gerador e o crítico recebem esta Parte I e, depois dela, essas regras.
- **Saturação das exclusivas:** é contada só dentro da coleção, com o limite definido no documento dela, e as exclusivas não contam na saturação do jogo original, porque uma partida nunca sorteia os dois conjuntos.
- As exclusivas não contam nas metas do jogo original (§17), e o autopiloto não as produz: os lotes delas são rodados à mão.

### Perguntas com áudio

Uma pergunta de qualquer tipo pode ter um **trecho de áudio** (campo `audio`), decidido em 2026-10-12. O questionador lê o enunciado e manda o trecho tocar **na tela grande** (modo mesa), para todos ouvirem; o celular de quem lê não toca o som. **Até segunda ordem, as perguntas com áudio ficam fora do jogo:** o app não as sorteia em nenhum modo (§16), enquanto os trechos são revistos.

- **De reconhecimento**, como as figuras: a pergunta pede para reconhecer o que se ouve ("De que país é este hino nacional?", "Que música é esta?", "Que animal faz este som?", "Que instrumento é este?", "De que compositor é esta peça?"). O enunciado nunca diz o que toca; pode trazer uma pista que ajude sem entregar ("Que ave do Cerrado…").
- **Categorias:** hinos nacionais (Geografia › Bandeiras e Símbolos); música clássica e ópera (Artes e Pensamento › Música Clássica, Teatro e Ópera); música brasileira antiga (Entretenimento › Música Brasileira); sons de animais (Natureza, no subtema do bicho); instrumentos (Música Clássica, Música Brasileira ou Música Internacional, conforme o instrumento).
- **Só áudio livre**, porque o repositório e o site são públicos: domínio público, CC0, CC BY ou CC BY-SA, sem NC nem ND. Gravações comerciais de música popular **não entram**: a composição fica protegida até 70 anos depois da morte do autor, e a gravação, até 70 anos depois de publicada. Na música brasileira antiga, a composição e a gravação precisam estar em domínio público no Brasil: autores mortos há mais de 70 anos (Chiquinha Gonzaga, Ernesto Nazareth, Zequinha de Abreu, Catulo da Paixão Cearense, Carlos Gomes) e gravação publicada há mais de 70 anos. *Pelo Telefone*, de Donga (morto em 1974), por exemplo, fica de fora. Boas fontes: os hinos da Banda da Marinha dos EUA e os sons do Serviço de Pesca e Vida Selvagem dos EUA (obras do governo americano, em domínio público), o Musopen e as gravações antigas da Casa Edison, todos no Wikimedia Commons.
- **O LLM não ouve áudio.** A pergunta sai dos metadados do arquivo (título, descrição, categorias, origem) e das fontes, e **uma pessoa ouve o trecho** antes de ele entrar no banco, na página que o pipeline gera (§17).
- **O trecho:** de 6 a 30 segundos, escolhido para ser reconhecível (o tema famoso de uma peça, o começo de um hino, o canto típico de uma ave), com entrada e saída suaves e volume igualado. Nas gravações antigas, o trecho pula o anúncio do locutor, que muitas vezes diz o nome da música.
- **Saturação:** o áudio conta no limite de 8 perguntas por âncora, e cada âncora tem no máximo 1 pergunta com áudio.
- **Resposta específica e justa:** o nome da música, do país, do animal ou do instrumento. Quando o som não permite distinguir a espécie ou o instrumento exato de outros parecidos (uma coruja de outra, o acordeão do bandoneón), a pergunta é `multipla`, sem distratores que soem igual.

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
- **Respostas que são um ano específico** ("1969", "800 a.C."), somando abertas e múltiplas: no máximo **9%** das perguntas do lote, e no máximo **uma** num lote de figuras, que tem 12 itens (desde 2026-10-30, só no jogo original). Para pedir a época, prefira o século, a década ou a ordem entre dois fatos. O registro descarta o que passar do teto; as perguntas que já estavam no banco ficam.
- No máximo **3 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras centrais e conhecidas**, mesmo que já tenham perguntas, a âncoras novas e obscuras (desde 2026-10-27; antes, "prefira âncoras novas"). O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para aprofundá-las com fatos e ângulos novos, sem repetir fatos.
- **Tentar incluir uma âncora nova a cada 50 perguntas**, tão conhecida quanto as centrais, para manter alguma variedade. Se for difícil achar uma assim, o lote fica sem: uma âncora nova obscura não vale a troca.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
