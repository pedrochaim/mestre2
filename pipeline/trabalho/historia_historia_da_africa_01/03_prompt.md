Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **História da África** (tema **História**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Gana",
      "descricao": "País da África Ocidental, antiga colônia britânica da Costa do Ouro, independente desde 1957."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Ao se tornar independente em 1957, a Costa do Ouro adotou o nome de qual antigo império africano, que ficava a centenas de quilômetros dali?",
    "resposta": "Império de Gana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ghana"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ghana",
        "situacao": "ok",
        "texto": "Ghana, officially the Republic of Ghana, is a country in West Africa. It is situated with the Gulf of Guinea and the Atlantic Ocean to the south, and shares borders with Ivory Coast to the west, Burkina Faso to the north, and Togo to the east. Ghana covers an area of 239,567 km2 (92,497 sq mi), spanning various ecologies, from coastal savannas to tropical rainforests.\n[…]\nFollowing more than a century of colonial resistance, the later borders of the country took shape, encompassing four separate British colonial territories: Gold Coast, Ashanti, the Northern Territories, and British Togoland. These were unified as an independent dominion within the Commonwealth of Nations. On 6 March 1957, Ghana became the first colony in Sub-Saharan Africa to achieve sovereignty.\n[…]\nIn 1957, the Ghana Armed Forces (GAF) consisted of its headquarters, support services, three battalions of infantry and a reconnaissance squadron with armoured vehicles. President Nkrumah aimed at rapidly expanding the GAF to support the United States of Africa ambitions. Thus, in 1961, 4th and 5th Battalions were established, and in 1964 6th Battalion was established, from a parachute airborne unit originally raised in 1963. Today, Ghana is a regional power and regional hegemon.\n[…]\nThe military operations and military doctrine of the GAF are conceptualised in the constitution, Ghana's Law on Armed Force Military Strategy, and Kofi Annan International Peacekeeping Training Centre agreements to which GAF is attestator. GAF military operations are executed under the auspices and imperium of the Ministry of Defence. Ghana has experienced political violence in the past and 2017 has thus far seen an upward trend in incidents motivated by political grievances.\n[…]\nOutline of Ghana\n[…]\nGhana profile from ECOWAS\n[…]\nWikimedia Atlas of Ghana\n[…]\nGovernment of Ghana\n[…]\nParliament of Ghana\n[…]\nOfficial website of Visit Ghana"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gana",
        "situacao": "ok",
        "texto": "Gana (oficialmente República do Gana; em inglês: Republic of Ghana) é um país da África Ocidental, limitado a norte pela Burquina Fasso, a leste pelo Togo, a sul pelo Golfo da Guiné e a oeste pela Costa do Marfim. A capital e maior cidade do Gana é Acra. A palavra Gana significa \"guerreiro\" e é derivada do nome do antigo Império do Gana.\n[…]\nO Gana foi habitado em tempos pré-coloniais por antigos reinos dos acãs como o Reino Bono e o Império Axânti. Antes do contato com os europeus, o comércio entre os acãs e vários estados africanos floresceu devido à riqueza do ouro acã. O comércio com os países europeus começou após o contato com o Império Português nos séculos XV e XVII. Os ingleses estabeleceram a Costa do Ouro como colônia em 1874.\n[…]\nA Costa do Ouro alcançou a independência do Reino Unido em 1957, e se tornou a primeira nação africana a fazê-lo do colonialismo europeu. O nome \"Gana\" foi escolhido para a nova nação para refletir o antigo Império do Gana, que se estendia por grande parte da África Ocidental.\n[…]\nSegundo os griôs, após o Império do Gana ter sido dominado pelo Império do Mali, o povo de Gana fugiu para o sul, tentando manter suas tradições religiosas e não se converterem ao Islã, esta seria a origem mitológica do atual nome da República de Gana. Gana foi adotada como o nome legal para a Costa do Ouro combinado com a Togolândia britânica após a conquista da autonomia em 6 de Março de 1957.\n[…]\nEm 1957, Gana conquistou sua independência com o lema: \"É melhor ser independente para governar sozinho, bem ou mal, do que ser governados pelos outros\". O país foi renomeado para Gana devido às indicações que os atuais habitantes descendem de povos que se movimentaram para o sul do Império do Gana.\n[…]\nÁfrica\n[…]\nImpério Português\n[…]\nMissões diplomáticas do Gana\n[…]\nGoverno do Gana (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Grande Zimbábue",
      "descricao": "Ruínas de uma cidade medieval de pedra no sudeste do atual Zimbábue, capital de um reino entre os séculos onze e quinze."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do país Zimbábue foi tirado de umas ruínas medievais. Na língua xona, ele costuma ser traduzido como casas de quê?",
    "resposta": "Pedra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Zimbabwe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Zimbabwe",
        "situacao": "ok",
        "texto": "Great Zimbabwe was a city in the south-eastern hills of the modern country of Zimbabwe, near Masvingo. It was settled from around 1000 AD, and served as the capital of the Kingdom of Great Zimbabwe from the 13th century. It is the largest stone structure in precolonial Southern Africa. Major construction on the city began in the 11th century and continued until the 15th century. The city was aband\n[…]\nTraditional estimates are that Great Zimbabwe had as many as 18,000 inhabitants at its peak. However, a more recent survey concluded that the population likely never exceeded 10,000. The ruins that survive are built entirely of stone; they span 730 ha (1,800 acres). Great Zimbabwe covered a similar area to medieval London; while the density of buildings within the stone enclosures was high, in areas outside them it was much lower.\n[…]\nPortuguese traders heard about the remains of the medieval city in the early 16th century, and records survive of interviews and notes made by some of them, linking Great Zimbabwe to gold production and long-distance trade. Two of those accounts mention an inscription above the entrance to Great Zimbabwe, written in characters not known to the Arab merchants who had seen it.\n[…]\nA tower of the Great Zimbabwe is also depicted on the coat of arms of Zimbabwe.\n[…]\nRelated ruins outside Zimbabwe\n[…]\nManyikeni – a Mozambiquean archaeological site believed to be part of the Great Zimbabwe tradition of architecture\n[…]\nSimilar ruins outside Zimbabwe\n[…]\nGarlake, Peter (1973). Great Zimbabwe: New Aspects of Archaeology. London: Thames & Hudson. ISBN 978-0-8128-1599-3.\n[…]\nGarlake, Peter (1982). Great Zimbabwe. Harare: Zimbabwe Publishing House. ISBN 978-0-949932-18-1.\n[…]\nMatenga, Edward (2008). Soapstone Birds of Great Zimbabwe: Symbols of a Nation. Harare: African Publishing Group. ISBN 978-1-77901-135-0.\n[…]\nGreat Zimbabwe Ruins\n[…]\nGreat Zimbabwe entry on the UNESCO World Heritage site"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Zimb%C3%A1bue",
        "situacao": "ok",
        "texto": "O Grande Zimbábue, ou Grande Zimbabwe, é um complexo de amuralhados de pedra situados na região leste do Zimbábue, perto da fronteira com Moçambique. Este complexo é considerado um monumento nacional, que deu o nome ao país onde atualmente se situa. O \"Monumento Nacional do Grande Zimbábue\" foi inscrito pela UNESCO como Património Mundial em 1986. A cidade mais próxima e seu ponto de apoio turísti\n[…]\nTodas estas construções são formadas por blocos de pedra cortados de modo a estarem perfeitamente ajustados, sem ter sido usado qualquer material entre elas, como \"cimento\". Pensa-se que o Grande Zimbábue, tal como outras construções similares, não foi construído inicialmente com a forma atual, mas terá sido ampliado e reconstruído, ao longo de vários séculos.\n[…]\nAlém de sua relevância arquitetônica, o Grande Zimbábue desempenhou papel central na articulação de redes comerciais que conectavam o interior da África às rotas do oceano Índico. O sítio evidencia a existência de formações políticas complexas na África pré-colonial, sendo hoje amplamente reconhecido como produto das sociedades de língua xona, em contraste com interpretações coloniais que atribuíram sua origem a povos externos.\n[…]\nA ocupação da região remonta aproximadamente ao século IX, com o desenvolvimento progressivo de estruturas em pedra a partir do século XI. Entre os séculos XIII e XV, o Grande Zimbábue atingiu seu apogeu, consolidando-se como centro político e econômico regional.\n[…]\nEm regiões vizinhas, foram recuperadas oito esculturas que representam aves esculpidas em pedra-sabão, assentes em colunas, existindo provas de terem estado dentro do amuralhado principal. Pensa-se que estas esculturas, que combinam características de aves e de seres humanos — lábios em vez de bicos e pés com cinco dedos —, poderiam ser símbolos do poder real ou de outro poder.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Grande Zimbábue",
      "descricao": "Ruínas de uma cidade medieval de pedra no sudeste do atual Zimbábue, capital de um reino entre os séculos onze e quinze."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Os colonizadores europeus atribuíam o Grande Zimbábue a fenícios ou árabes. Que povo africano de fato construiu essas muralhas de pedra?",
    "resposta": "Ancestrais do povo xona",
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Zimbabwe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Zimbabwe",
        "situacao": "ok",
        "texto": "Great Zimbabwe was a city in the south-eastern hills of the modern country of Zimbabwe, near Masvingo. It was settled from around 1000 AD, and served as the capital of the Kingdom of Great Zimbabwe from the 13th century. It is the largest stone structure in precolonial Southern Africa. Major construction on the city began in the 11th century and continued until the 15th century. The city was aband\n[…]\nThe later Gumanye people are considered the ancestors of the Karanga (south-central Shona), who would construct Great Zimbabwe. Their culture developed and lasted centuries.\n[…]\nThe first scientific archaeological excavations at the site were undertaken by David Randall-MacIver for the British Association in 1905–1906. In Medieval Rhodesia, he rejected the claims made by Adam Render, Carl Peters and Karl Mauch, and instead wrote of the existence in the site of objects that were of Bantu origin. Randall-MacIver concluded that all available evidence led him to believe that the Zimbabwe structures were constructed by the ancestors of the Shona people.\n[…]\nLocal narratives, despite each clan claiming the site of Great Zimbabwe, are very similar in lamenting both the European antiquarians and the professional archaeologists for desecrating and appropriating a sacred site. They hold the government responsible for the \"silence\" and \"closure\" of Great Zimbabwe due to their refusal to \"acknowledge the ownership and control of the site by the ancestors and Mwari\".\n[…]\nIn 1902, during the colonial period, the Great Zimbabwe Hotel was constructed in order to provide accommodation for Rhodesians and other Europeans who were visiting the Great Zimbabwe Monuments. The hotel is located within the cultural landscape of Great Zimbabwe and has been the subject of ongoing tension among the hotel's management, the National Museums and Monuments of Zimbabwe (NMMZ), and surrounding local communities."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Zimb%C3%A1bue",
        "situacao": "ok",
        "texto": "O Grande Zimbábue, ou Grande Zimbabwe, é um complexo de amuralhados de pedra situados na região leste do Zimbábue, perto da fronteira com Moçambique. Este complexo é considerado um monumento nacional, que deu o nome ao país onde atualmente se situa. O \"Monumento Nacional do Grande Zimbábue\" foi inscrito pela UNESCO como Património Mundial em 1986. A cidade mais próxima e seu ponto de apoio turísti\n[…]\nOs povos xona parecem ter-se fixado nesta região durante o século V e, a partir dessa altura começaram a construir estes amuralhados que, na língua xona se chamam madzimbabawe. Encontraram-se outros complexos deste tipo em toda a região, o mais importante dos quais, pela quantidade de artefatos que continha na margem sul do rio Limpopo, na atual província do Limpopo, na África do Sul.\n[…]\nAlém de sua relevância arquitetônica, o Grande Zimbábue desempenhou papel central na articulação de redes comerciais que conectavam o interior da África às rotas do oceano Índico. O sítio evidencia a existência de formações políticas complexas na África pré-colonial, sendo hoje amplamente reconhecido como produto das sociedades de língua xona, em contraste com interpretações coloniais que atribuíram sua origem a povos externos.\n[…]\nDurante o período colonial, diversos estudiosos europeus atribuíram a construção do Grande Zimbábue a civilizações externas, como fenícios ou árabes, refletindo perspectivas eurocêntricas e raciais.\n[…]\nEssas interpretações foram contestadas no início do século XX por pesquisas arqueológicas que demonstraram a origem africana do sítio. Atualmente, há consenso acadêmico de que o complexo foi construído por populações bantu locais, especialmente ancestrais dos povos shona.\n[…]\nDepartment of Arts of Africa, Oceania, and the Americas. \"Great Zimbabwe (11th–15th century)\". In Heilbrunn Timeline of Art History. New York: The Metropolitan Museum of Art, 2000–. (October 2001) (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Burkina Faso",
      "descricao": "País da África Ocidental, chamado Alto Volta até 1984."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1984, o Alto Volta passou a se chamar Burkina Faso. O que significa esse novo nome?",
    "resposta": "Terra dos homens íntegros",
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
    "indice": 5,
    "ancora": {
      "nome": "Língua suaíli",
      "descricao": "Língua banta falada na costa e no interior da África Oriental, com forte influência do árabe."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome suaíli, dado a uma língua e a uma cultura do leste africano, vem de uma palavra árabe. O que ela significa?",
    "resposta": "Costas",
    "distratores": [
      "Comerciantes",
      "Ilhas",
      "Ventos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Swahili_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Swahili_language",
        "situacao": "ok",
        "texto": "Swahili, also known as Kiswahili, is a Bantu language of the Atlantic–Congo language family, originally spoken by the Swahili people, who are found primarily in Tanzania, Kenya, and Mozambique (along the East African coast and adjacent littoral islands). Estimates of the number of Swahili speakers, including both native and second-language speakers,  generally range from 40 million to 200 million.\n[…]\nAbout 40% of Swahili vocabulary consists of Arabic loanwords, including the name of the language itself (سَوَاحِلي sawāḥilī, a plural adjectival form of an Arabic word meaning 'of the coasts'). Swahili also has a significant number of loanwords from Portuguese, English and German. The Arabic loanwords date from the era of contact between Arab slave traders and the Bantu inhabitants of the east coast of Africa, which was also the time period when Swahili emerged as a lingua franca in the region.\n[…]\nSwahili played a major role in spreading both Christianity and Islam in East Africa. From their arrival in East Africa, Arabs brought Islam and set up madrasas, where they used Swahili to teach Islam to the natives. As the Arab population and influence expanded, a growing number of indigenous people converted to Islam and began receiving religious and cultural instruction in Swahili, which increasingly absorbed Arabic vocabulary.\n[…]\nWith the arrival of Europeans in East Africa, Christianity was introduced to the region, profoundly shaping the development of Swahili. While Arab influence remained concentrated along the coastal areas, European missionaries ventured further inland, establishing missions and promoting Christian teachings. Early outposts were located along the coast, where they encountered Swahili as a widely spoken lingua franca.\n[…]\nWhiteley, Wilfred (1969). Swahili: the rise of a national language. Studies in African History. London: Methuen.\n[…]\nList of Swahili Dictionaries"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_sua%C3%ADli",
        "situacao": "ok",
        "texto": "O suaíli ou suaíle (Kiswahili), também chamado de suahíli e conhecido pelas formas vernáculas Swahili ou Kiswahili, é a língua banta com o maior número de falantes. É uma das línguas oficiais do Quénia, de Ruanda, da Tanzânia e de Uganda, embora os seus falantes nativos, os povos suaílis, sejam originários apenas das regiões costeiras do oceano Índico. É uma das línguas de trabalho da União Africa\n[…]\nO suaíli é a língua nativa de diversos grupos que habitaram e habitam uma faixa de 2500 km da costa leste da África. Em função do contato dos povos dessa área com comerciantes e navegadores de Língua árabe durante alguns séculos, o suaíli tem cerca de um quarto de suas palavras originadas do árabe. Outras influências foram a língua persa, alemão, português, inglês e idiomas da Índia. É oficial e segundo idioma na Tanzânia, no Congo e no Quênia.\n[…]\nA palavra Kiswahili vem do árabe سواحل, transliterado como sawāhil; é o plural da palavra ساحل, sāhel, \"fronteira\" ou \"litoral\", usada como adjetivo de \"negociantes do litoral\" A adição do prefixo ki o define como um idioma. Waswahili se refere aos povos da \"costa suaíli\" e Uswahili indica a cultura dos suaíli.\" Sahel\" também é o nome que se dá à região austral do deserto do Saara.\n[…]\nComorense”, língua da Ilhas Comores.\n[…]\nHorários (África do Leste) Suaíli vão da aurora até o crepúsculo, em ligar de meia-noite até meio-dia, ou seja, nossas 7h e 19h são respectivamente 1h e 13h. Nossos meio-dia e meia-noite são respectivamente 6 e 18h. Palavras como asubuhi 'manhã', jioni 'tarde' e usiku 'noite' demarcam os períodos do dia. Há marcações mais específicas: adhuhuri 'início da tarde', alasiri 'fim de tarde', usiku wa manane 'tarde da noite, depois de meia-noite', 'aurora' macheo e anoitecer machweo.\n[…]\nWhiteley, Wilfred. 1969. Swahili: the rise of a national language. London: Methuen. Series: Studies in African History.\n[…]\nOmniglot Escrita Suaíli - inglês",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Nelson Mandela",
      "descricao": "Líder antiapartheid e primeiro presidente negro da África do Sul, de 1994 a 1999."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Nelson Mandela recebeu ao nascer o nome xossa Rolihlahla. Em linguagem coloquial, o que esse nome significa?",
    "resposta": "Encrenqueiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nelson_Mandela"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nelson_Mandela",
        "situacao": "ok",
        "texto": "Nelson Rolihlahla Mandela (18 July 1918 – 5 December 2013) was a South African anti-apartheid revolutionary, politician, and philanthropist, who served as President of South Africa from 1994 to 1999. He was the country's first black head of state and the first elected in a fully representative democratic election. His government focused on dismantling the legacy of apartheid by tackling institutio\n[…]\nMandela was born on 18 July 1918, in the village of Mvezo in Umtata, then part of South Africa's Cape Province. He was given the forename Rolihlahla, a Xhosa term colloquially meaning \"troublemaker\", and in later years became known by his clan name, Madiba. His patrilineal great-grandfather, Ngubengcuka, was ruler of the Thembu Kingdom in the Transkeian Territories of South Africa's modern Eastern Cape province.\n[…]\nIt called on individuals to donate 67 minutes to doing something for others, commemorating the 67 years that Mandela had been a part of the movement. In 2015 the UN General Assembly named the amended Standard Minimum Rules for the Treatment of Prisoners as \"the Mandela Rules\" to honour his legacy. The years 2019 to 2028 were also designated the United Nations Nelson Mandela Decade of Peace.\n[…]\nSome, such as the 2013 feature film Mandela: Long Walk to Freedom and the 2017 miniseries Madiba have focused on covering large periods of time in his adult life. Others, such as the 2009 feature film Invictus and the 2010 documentary The 16th Man, have focused on specific events. Lukhele has argued that in Invictus and other films, \"the America film industry\" has played a significant part in \"the crafting of Mandela's global image\".\n[…]\nNelson Mandela Centre of Memory\n[…]\nNelson Mandela Children's Fund\n[…]\nNelson Mandela Foundation\n[…]\nMandela Rhodes Foundation\n[…]\nNelson Mandela Museum\n[…]\nNelson Mandela Day (archived)\n[…]\nNelson Mandela's family tree\n[…]\nNelson Mandela at IMDb\n[…]\nNelson Mandela on Nobelprize.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nelson_Mandela",
        "situacao": "ok",
        "texto": "Nelson Rolihlahla Mandela (Mvezo, 18 de julho de 1918 – Joanesburgo, 5 de dezembro de 2013) foi um advogado, líder rebelde e presidente da África do Sul de 1994 a 1999, considerado como o mais importante líder da África Subsaariana, vencedor do Prêmio Nobel da Paz de 1993, e pai da moderna nação sul-africana, onde é normalmente referido como Madiba (nome do seu clã) ou \"Tata\" (\"Pai\").\n[…]\nRecebe o nome de Rolihlahla Dalibhunga Mandela (em Xhosa: [xoˈliːɬaɬa manˈdeːla]); seu primeiro nome significa, em xhosa, algo como \"agitador\" — o que pode ser considerado profético — já que a expressão quer dizer, no idioma natal zulu: \"aquele que ergue o galho de uma árvore\".\n[…]\nEmbora frequentasse os cultos cristãos semanalmente, Mandela também estudou o islamismo. Também estudou a língua africâner, esperando construir um respeito mútuo com os carcereiros e convertê-los em sua causa. Vários visitantes oficiais reuniram-se com Mandela, mais significativamente a representante parlamentar liberal Helen Suzman, do Partido Progressista, que defendeu a causa de Mandela fora da prisão. Em setembro de 1970, conheceu um membro do Partido Trabalhista Britânico, Dennis Healey.\n[…]\nDentre os filmes que tratam diretamente de Nelson Mandela tem-se:\n[…]\nMadiba: The Life and Times of Nelson Mandela (CBC, Canadá, 2004)\n[…]\nNelson Mandela inspirou diversas canções, dentre as quais:\n[…]\nOutras biografias: \"Nelson Mandela: a biography\" (Peter Limb - 2008 - 144 páginas); \"Nelson Mandela\" (Coleen Degnan-Veness, 2007); \"The Early Life of Rolihlahla Madiba Nelson Mandela\" (Jean Guiloineau, Bekerley, North Atlantic Books, 1998)\n[…]\n\"The Madiba Legacy Series\", série com coletâneas de cartuns sobre Mandela (Fundação Nelson Mandela, Joanesburgo, 2005-2006)\n[…]\n«Página oficial da Nelson Mandela Foundation» (em inglês)\n[…]\nAdeus, Nelson Mandela! - Especial da DW África sobre a morte do líder histórico da África do Sul",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Hailé Selassié",
      "descricao": "Imperador da Etiópia de 1930 a 1974, figura divina no movimento rastafári."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Tafari Makonnen reinou na Etiópia com seu nome de batismo, Hailé Selassié. O que esse nome significa?",
    "resposta": "Poder da Trindade",
    "distratores": [
      "Leão de Judá",
      "Luz do Mundo",
      "Eleito de Deus"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Haile_Selassie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Haile_Selassie",
        "situacao": "ok",
        "texto": "Haile Selassie I (born Tafari Makonnen or Lij Tafari; 23 July 1892 – 27 August 1975) was Emperor of Ethiopia from 1930 to 1974. He rose to power as the Regent Plenipotentiary of Ethiopia (Enderase) under Empress Zewditu between 1916 and 1930.\n[…]\nHaile Selassie was known as a child as Lij Tafari Makonnen (Amharic: ልጅ ተፈሪ መኮንን, romanized: Ləj Täfäri Mäkonnən). Lij is translated as \"child\" and serves to indicate that a youth is of noble blood. His given name Tafari means \"one who is respected or feared\". Like most Ethiopians, his personal name \"Tafari\" is followed by that of his father Makonnen and that of his grandfather Woldemikael.\n[…]\nRas Makonnen arranged for Tafari as well as his first cousin, Imru Haile Selassie, to receive instruction in Harar from Abba Samuel Wolde Kahin, an Ethiopian Capuchin friar, and from Dr. Vitalien, a surgeon from Guadeloupe. Tafari was named Dejazmach (literally \"commander of the gate\", roughly equivalent to \"count\") at the age of 13, on 1 November 1905. Shortly thereafter, his father Makonnen died at Kulibi, in 1906.\n[…]\nSelassie was an adherent of the Ethiopian Orthodox Tewahedo Church. He was raised following Ethiopia's traditional Christian background. He was born Tafari Makonnen; after his coronation, he adopted his baptismal name as his official and legal name. He participated in the 1966 Berlin Congress for World Evangelism organised by evangelist Billy Graham.\n[…]\nEthiopian Treasures – Emperor Haile Selassie I\n[…]\nHaile Selassie I Speaks – Text & Audio\n[…]\nCollection by Martin Rikli in 1935–1936, including photos of Haile Selassie, open access through the University of Florida Digital Collections\n[…]\nNewspaper clippings about Haile Selassie in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Haile_Selassie",
        "situacao": "ok",
        "texto": "Haile Selassie I ou Hailé Selassié (em\n[…]\nge'ez: ቀዳማዊ ኀይለ ሥላሴ, romanizado: Qädamawi Ḫäylä Śəllase, lit. 'Poder da Trindade; nascido Tafari Makonnen; Ejersa Goro, 23 de julho de 1892 – Adis Abeba, 27 de agosto de 1975) foi Imperador da Etiópia de 1930 a 1974. Ele subiu ao poder como Regente Plenipotenciário da Etiópia (Enderase) da Imperatriz Zauditu de 1916 a 1930.\n[…]\nNo entanto, a sua autoridade enfraqueceu enquanto o poder de Tafari aumentava, ela concentrou-se na oração e no jejum e muito menos nos seus deveres oficiais, o que permitiu a Tafari ter mais tarde uma influência maior do que a Imperatriz.\n[…]\n...a Etiópia corre a estender mãos cheias para Deus. – Salmo 68:31Hoje, Haile Selassie é adorado como Deus encarnado entre alguns seguidores do movimento Rastafári (retirado do nome pré-imperial de Haile Selassie, Ras — que significa Cabeça, um título que parece equivalente a Duque — Tafari Makonnen), que surgiu em Jamaica durante a década de 1930 sob a influência de Leonard Howell, um seguidor do movimento \"Redenção Africana\" de Marcus Garvey.\n[…]\nDurante a década de 1950, quando foi celebrado o Jubileu de Prata do reinado do Imperador, ele adotou a Constituição de 1955, que concedia legalmente mais direitos democráticos ao público e restringia legalmente o poder do monarca. Após o fim da Segunda Guerra Mundial, Haile Selassie trabalhou para limitar o poder da Igreja Ortodoxa Etíope. Ele foi amplamente visto como um líder modernizador e capaz na Etiópia durante a década de 1950.\n[…]\nGrande Cordão da Ordem da Santíssima Trindade",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Kinshasa",
      "descricao": "Capital da República Democrática do Congo, às margens do rio Congo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Até 1966, a capital do Congo levava o nome de um rei belga. Como a cidade se chamava então?",
    "resposta": "Léopoldville",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kinshasa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kinshasa",
        "situacao": "ok",
        "texto": "Kinshasa (; French: [kinʃasa]; Lingala: Kinsásá), formerly named Léopoldville (Dutch: Leopoldstad) from 1881 to 1966, is the capital and largest city of the Democratic Republic of the Congo. Kinshasa is one of the world's fastest-growing megacities, with an estimated population of 18.5 million in 2026.\n[…]\nBy 1923, the city was elevated to capital of the Belgian Congo, replacing the town of Boma in the Congo estuary, pursuant to the Royal Decree of 1 July 1923, countersigned by the Minister of the Colonies, Louis Franc. This transition, finalized on 31 October 1929, led to the development of a new administrative quartier located between Kinshasa, then emerging as a major commercial center, and Léopoldville-West, a preexisting settlement.\n[…]\nThe urban populace swelled in 1945 with the cessation of forced labor, facilitating the influx of native Africans from rural regions. Léopoldville then became predominantly inhabited by the Bakongo ethnic group.\n[…]\nFounded on 1 August 1881, as Léopold II's Station, Kinshasa has maintained a distinct administrative status over time, eventually becoming the administrative center for the Stanley Pool District, Haute-N'sele, and Panzi-Kasaï. A Royal Decree promulgated on 11 April 1914 instituted a territorial reform in the Belgian Congo, reaffirming Kinshasa's dual role as the colonial capital and the central administrative seat for the districts of Bas-Congo, Kwango, Kasaï, Sankuru, and Léopoldville.\n[…]\nSims Chapel (1891), built by Reverend Aaron Sims of the American Baptist Foreign Mission Society and regarded as Kinshasa's first Christian building; the Saint-Léopold Catholic parish founded in 1899; and the Institute of National Museums of Congo, which preserves and exhibits national artifacts and historical collections.\n[…]\nKinshasa palace\n[…]\nKinshasa Symphony"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quinxassa",
        "situacao": "ok",
        "texto": "Quinxassa, Quinxasa ou Kinshasa é a capital e maior cidade da República Democrática do Congo (ou Congo-Quinxassa). Quinxassa é o principal centro econômico, político e cultural do país, abrigando diversas indústrias, incluindo manufatura, telecomunicações, bancos e entretenimento.\n[…]\nO local onde hoje é Quinxassa foi habitado pelos povos teque-humbus por séculos e era conhecido como Nhasa antes de se transformar em um centro comercial nos séculos XIX e XX. A cidade foi batizada de Léopoldville por Henry Morton Stanley em homenagem a Leopoldo II da Bélgica. O nome foi alterado para Quinxassa em 1966, durante a campanha de zairização de Mobutu Sese Seko, como uma homenagem à antiga vila de Nshasa.\n[…]\nQuinxassa se tornou o nome oficial da cidade após a independência do Congo em 1966, substituindo nome \"Léopoldville\", que foi dado em 1881 pelo explorador Henry Morton Stanley em homenagem a Leopoldo II da Bélgica, a cujo serviço estava.\n[…]\nEm 1920, a cidade foi elevada a capital do Congo Belga, em substituição à cidade de Boma no estuário do Congo.\n[…]\nEm 1965, Mobutu Sese Seko tomou o poder no Congo, em seu segundo golpe de Estado e iniciou uma política de \"africanização\" (que ele chamou de \"Authenticité\") dos nomes das pessoas e lugares do país. Em 1966, Léopoldville foi rebatizada como Quinxassa, nome tirado de aldeia pesqueira chamada Kinchassa, que ficava perto do local.\n[…]\nEm 1945, como capital do Congo Belga, Leopoldville tinha cerca de 100 000 habitantes. Após a independência do país, em 1960, a população aumentou para cerca de 400 000 habitantes, transformando-se na principal cidade da África Central. Quinze anos mais tarde, depois que a cidade foi rebatizada como Quinxassa, em 1966, sua população havia alcançado um total de 2 milhões de habitantes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Zaire",
      "descricao": "Nome oficial da atual República Democrática do Congo de 1971 a 1997, sob o regime de Mobutu."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Zaire, que o ditador Mobutu deu ao Congo, deriva de uma palavra da língua quicongo. O que ela significa?",
    "resposta": "Rio",
    "distratores": [
      "Floresta",
      "Terra",
      "Liberdade"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Zaire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zaire",
        "situacao": "ok",
        "texto": "Zaire (spelt Zaïre in French, and sometimes in English), officially the Democratic Republic of the Congo from 1965 to 1971 and the Republic of Zaire from 1971 to 1997, was the Congolese state in Central Africa headed by Mobutu Sese Seko from 1965 to 1997. It was, by area, the third-largest country in Africa after Sudan and Algeria, and the 11th-largest country in the world from 1965 to 1991. With \n[…]\nThe country was a one-party totalitarian military dictatorship, run by Mobutu Sese Seko and his Popular Movement of the Revolution. Mobutu seized power in a military coup in 1965, after five years of political upheaval following independence from Belgium known as the Congo Crisis. Zaire had a strongly centralist constitution, and foreign assets were nationalised. The period is sometimes referred to as the Second Congolese Republic until 1990 and the Third Congolese Republic from 1990 onwards.\n[…]\nA wider campaign of authenticité, ridding the country of the influences from the colonial era of the Belgian Congo, was also launched under Mobutu's direction. Weakened by the termination of American support after the end of the Cold War, Mobutu was forced to declare a new republic in 1990 to cope with demands for change. By the time of its downfall, Zaire was characterised by widespread cronyism, corruption and economic mismanagement.\n[…]\nThe Tutsi militia was soon joined by various opposition groups and supported by several countries, including Rwanda and Uganda. This coalition, led by Laurent-Désiré Kabila, became known as the Alliance des Forces Démocratiques pour la Libération du Congo-Zaïre (AFDL). The AFDL, now seeking the broader goal of ousting Mobutu, made significant military gains in early 1997, and by the middle of 1997 had almost completely overrun the country.\n[…]\nOn 21 May, Kabila officially reverted the name of the country to the Democratic Republic of the Congo."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zaire",
        "situacao": "ok",
        "texto": "Zaire, oficialmente República do Zaire (em francês:  République du Zaïre), foi o nome da República Democrática do Congo de 1971 a 1997. O Zaire estava localizado na África Central e era, em área, o terceiro maior país da África (depois do Sudão e da Argélia) e o 11º maior país (de 1965 a 1997) do mundo. Com uma população de mais de 23 milhões de habitantes, o Zaire era o país oficialmente francófo\n[…]\nO nome do país, Zaïre, foi derivado do nome do rio Congo, às vezes chamado Zaire em português, que por sua vez foi derivado da palavra kikongo nzere ou nzadi (“rio que engole todos os rios”). O uso de Congo parece ter substituído Zaire gradualmente no uso inglês durante o século XVIII e Congo era o nome inglês preferido na literatura do século XIX, embora as referências a Zahir ou Zaire como o nome usado pela população local (ou seja, derivado do uso português) permaneceu comum.\n[…]\nA milícia tutsi logo se juntou a vários grupos de oposição e foi apoiada por vários países, incluindo Ruanda e Uganda. Esta coligação, liderada por Laurent-Désiré Kabila, ficou conhecida como Aliança das Forças Democráticas para a Libertação do Congo-Zaire (AFDL). A AFDL, que procura agora o objectivo mais amplo de expulsar Mobutu, obteve ganhos militares significativos no início de 1997 e, em meados de 1997, tinha quase completamente dominado o país.\n[…]\nEm 21 de maio, Kabila reverteu oficialmente o nome do país para República Democrática do Congo.\n[…]\nO conceito de autenticidade foi derivado da doutrina professada pelo MPR de \"autêntico nacionalismo zairense e condenação do regionalismo e do tribalismo\". Mobutu definiu-o como estar consciente da própria personalidade e dos próprios valores e de estar em casa na sua cultura. Em linha com os ditames de autenticidade, o nome do país foi alterado para República do Zaire em 27 de Outubro de 1971, e o das forças armadas para Forças Armadas Zairenses (FAZ).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Njinga Mbandi",
      "descricao": "Rainha dos reinos de Ndongo e Matamba, no atual território de Angola, que resistiu aos portugueses no século dezessete."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Ao ser batizada pelos portugueses em Luanda, a rainha Njinga, de Ndongo e Matamba, recebeu que nome cristão?",
    "resposta": "Ana de Sousa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nzinga_of_Ndongo_and_Matamba"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nzinga_of_Ndongo_and_Matamba",
        "situacao": "ok",
        "texto": "Nzinga or Njinga Ana de Sousa Mbande (; c. 1583 – 17 December 1663) was a southwest African paramount ruler who ruled as queen of the Ambundu Kingdoms of Ndongo (1624–1663) and Matamba (1631–1663), located in present-day northern Angola. Born into the ruling family of Ndongo, her grandfather Ngola Kilombo Kia Kasenda was the king of Ndongo, succeeded by her father.\n[…]\nCalled \"queen\" by the Portuguese, Njinga Mbande is known by many different names including both Kimbundu and Portuguese names, alternate spellings and various honorifics. Common spellings found in Portuguese and English sources include Nzinga, Nzingha, Njinga, and Njingha. In colonial documentation, including her own manuscripts, her name was also spelled Jinga, Ginga, Zinga, Zingua, Zhinga, and Singa. She was also known by her Christian name, Ana de Sousa.\n[…]\nAs a monarch of Ndongo and Matamba, her native name was Ngola Njinga. Ngola was the Ndongo name for the ruler and the etymological root of \"Angola\". In Portuguese, she was known as Rainha Nzinga/Zinga/Ginga (Queen Nzinga). According to the current Kimbundu orthography, her name is spelled Njinga Mbandi (the \"j\" is a voiced postalveolar fricative or \"soft j\" as in Portuguese and French, while the adjacent \"n\" prenasalizes the consonant).\n[…]\nFurther straining relations, in late 1624 de Sousa began an aggressive campaign to force Mbande nobles, sobas, to become Portuguese vassals. Sobas were traditionally vassals of the ruler of Ndongo, and provided as tribute the valuable provisions, soldiers, and slaves needed to control Angola – thus, by making the sobas vassals of Portugal, the Portuguese were able to undermine Nzinga's position as queen of Ndongo.\n[…]\nAn Angolan film, Njinga: Queen Of Angola (Portuguese: Njinga, Rainha de Angola), was released in 2013.\n[…]\nNzinga a Nkuwu\n[…]\nAna Nzinga: Queen of Ndongo at the Metropolitan Museum of Art"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mwene_Nzinga_Mbandi",
        "situacao": "ok",
        "texto": "Mwene Nzinga Mbandi (c. 1582 – 17 de dezembro de 1663) ou Ana de Sousa foi a rainha reinante (angola) do Reino do Dongo entre 1624 e 1626 e fundadora e rainha do Reino da Matamba, reconhecida por Portugal como Ana I e reinando de 1631 até sua morte em 1663.\n[…]\nNzinga Mbandi teve seu nome registrado na documentação colonial como Jinga, Ginga, Zinga, Zingua e Singa. Também era conhecida por seu nome de batismo cristão, Ana de Sousa. Este nome foi dado quando batizada, em homenagem à portuguesa que atuou como sua madrinha de batismo. Seu sobrenome veio em homenagem ao governador de Luanda em exercício, João Correia de Sousa.\n[…]\nComo rainha da Matamba, seu nome oficial foi Angola Nzinga. O nome \"angola\" era um título para o governante de Dongo e Matamba.\n[…]\nGinga foi batizada em Luanda, onde assumiu o nome cristão de Ana de Sousa, em homenagem a sua madrinha, Ana de Sousa, esposa do governador João Correia de Sousa, que também serviu como padrinho.[ligação inativa] Ela utilizaria este nome em muitas cartas nos anos posteriores e ainda assumiria que após sua conversão foi durante um tempo feliz de sua vida e deixou Luanda com a sensação de missão cumprida.\n[…]\nAngola Ambande tinha um rival na corte de Dongo, Hari que se opunha a uma liderança feminina e por isso jurou vassalagem aos portugueses, ainda se batizando e assumindo o nome de João. Com ajuda dos guerreiros jagas de Casange e de aliados do Dongo, Hari conseguiu a deposição de Ginga que fugiu para Luanda. Após fugir ela juntou seguidores e capturou a rainha de Matamba, assumindo esse posto e reunindo um grande exército na região. Logo após ela retornou o Dongo e reassumiu seu trono.\n[…]\nUm filme angolano, Njinga: Rainha de Angola foi lançado em 2013.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Costa dos Escravos",
      "descricao": "Trecho do litoral do golfo da Guiné, nos atuais Togo, Benim e oeste da Nigéria, grande centro do tráfico atlântico."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na época do tráfico atlântico, que nome os europeus davam ao litoral dos atuais Togo, Benim e oeste da Nigéria?",
    "resposta": "Costa dos Escravos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Slave_Coast_of_West_Africa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Slave_Coast_of_West_Africa",
        "situacao": "ok",
        "texto": "The Slave Coast is a historical region along the Atlantic coast of West Africa, encompassing parts of modern-day Togo, Benin, and Nigeria. It is located along the Bight of Biafra and the Bight of Benin that is located between the Volta River and the Lagos Lagoon.\n[…]\nThe name arose in the seventeenth century to differentiate it from the predominant trades in adjoining regions. For instance, the neighbouring Gold Coast (southern Ghana) was an important source of gold for European merchants, with any outward trade in slaves discouraged so as not to affect the main product of that area. The Slave Coast was a major source of African people sold into slavery during the Atlantic slave trade from the early 16th century to the late 19th century.\n[…]\nEuropean sources began documenting the development of trade in the \"Slave Coast\" region and its integration into the transatlantic slave trade around 1670.\n[…]\nThe extensive slave trade along the Slave Coast contributed to the development of a diverse population engaged in transatlantic commercial and social networks. This population played an influential role in shaping both Atlantic commerce and culture.\n[…]\nDutch Slave Coast\n[…]\nCommercial Agriculture, the Slave Trade and Slavery in Atlantic Africa. Boydell & Brewer. 2013. doi:10.7722/j.ctt31nj49.19. ISBN 978-1-84701-075-9\n[…]\nLaw, Robin. The Slave Coast of West Africa 1550–1750: The Impact of the Atlantic Slave Trade on an African Society. Clarendon Press, Oxford, 1991.\n[…]\nLaw, Robin; Mann, Kristin (1999). \"West Africa in the Atlantic Community: The Case of the Slave Coast\". The William and Mary Quarterly. 56 (2): 307–334. doi:10.2307/267412. ISSN 0043-5597\n[…]\nSt Clair, William. The Door of No Return: The History of Cape Coast Castle and the Atlantic Slave Trade. BlueBridge."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Costa_dos_Escravos",
        "situacao": "ok",
        "texto": "A Costa dos Escravos era o nome das áreas costeiras dos atuais Benim, Togo e Nigéria ocidental, na África Ocidental, entre os séculos XV e XIX.\n[…]\nNo período pré-colonial europeu, foi uma das regiões mais densamente povoadas do continente africano. Tornou-se um dos mais importantes centros de exportação do comércio atlântico de escravos de 1450 a 1600.\n[…]\nOutras regiões do oeste da África que foram nomeadas segundo seu principal item de exportação colonial são a Costa do Ouro (Gana nos dias atuais), Costa da Pimenta (Libéria) e Costa do Marfim.\n[…]\nSt Clair, William. The Door of No Return: The History of Cape Coast Castle and the Atlantic Slave Trade. BlueBridge.\n[…]\nLaw, Robin. The Slave Coast of West Africa 1550-1750: The Impact of the Atlantic Slave Trade on an African Society. Clarendon Press, Oxford, 1991.\n[…]\nLaw, Robin and Kristin Mann. “African and American Atlantic Worlds.” The William and Mary Quarterly, 3rd Ser., 56:2 Apr. 1999, pp307–334.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Monróvia",
      "descricao": "Capital da Libéria, fundada em 1822 por colonos afro-americanos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Monróvia, a capital da Libéria, tem esse nome em homenagem a qual presidente dos Estados Unidos?",
    "resposta": "James Monroe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Monrovia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monrovia",
        "situacao": "ok",
        "texto": "Monrovia is the administrative capital and largest city of Liberia. Founded in 1822, it is located on Cape Mesurado on the Atlantic coast and, as of the 2022 census, had a population of 1,761,032 residents. Its largely urbanized metropolitan area, including Montserrado and Margibi counties, was home to 2,225,911 inhabitants as of the 2022 census, representing 33.5% of Liberia’s total population.\n[…]\nMonrovia is named in honor of U.S. President James Monroe, a prominent supporter of the colonization of Liberia and the American Colonization Society (ACS). Along with Washington, D.C., it is one of two world capitals to be named after an American president. The original name of Monrovia was Christopolis until 1824, only two years after the city's founding.\n[…]\nIn 1824, the city was renamed Monrovia after James Monroe, president of the United States at the time. Monroe was a prominent supporter of plans to create a colony of some sort as a place to relocate African Americans from the United States of America and combat the Atlantic Slave Trade. He likewise signed into law the Anti-Slave Trading Act of 1819, which funded the ACS's mission to create such a colony in West Africa.\n[…]\nIn 2002 Leymah Gbowee organized the Women of Liberia Mass Action for Peace, a group consisting of local Monrovian women, who gathered in a fish market to pray and sing. This movement helped to end the war the following year and to bring about the election of Ellen Johnson Sirleaf as president of Liberia, which made it the first African nation to have a female president.\n[…]\nCharles Taylor, former president of Liberia\n[…]\nCultural attractions in Monrovia include the Liberian National Museum, the Masonic Temple, the Waterside Market, and several beaches. The city also houses Antoinette Tubman Stadium and the Samuel Kanyon Doe Sports Complex, with seats for 22,000.\n[…]\n\"Monrovia, Liberia\". Encyclopedia Americana. 1920."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monr%C3%B3via",
        "situacao": "ok",
        "texto": "Monróvia (em inglês: Monrovia) é a capital e a maior cidade da Libéria. Localiza-se na costa atlântica e do Cabo Mesurado, que se situa dentro do Montserrado, o condado mais populoso na Libéria. A área metropolitana, com uma população de 1 010 970 em Grande Distrito de Monróvia, segundo o censo de censo de 2008, contém 29% do total da população da Libéria e é a cidade mais populosa do país. Monróv\n[…]\nFundada em 1822, Monróvia é nomeada em honra de ex-presidente estadunidense James Monroe, um proeminente defensor da colonização da Libéria. Monróvia foi fundada trinta anos depois de Freetown, Serra Leoa. Foi o primeiro assentamento permanente africano norte-americano na África. A economia da cidade é dominada pelo porto e escritórios do governo.\n[…]\nA empresa foi uma confusão e muitos colonos morreram. Em 1822, um segundo navio salvou os colonos e levou-os para o Cabo Mesurado, que estabeleceu a resolução de Christopolis. Em 1824, a cidade foi renomeada para Monróvia homenageando James Monroe, presidente dos Estados Unidos na época, e um proeminente defensor da colônia no envio de escravos americanos libertos para a Libéria.\n[…]\nEm 1845, Monróvia foi o local da convenção constitucional realizada pela Sociedade Americana de Colonização que redigiu a Constituição que dois anos mais tarde seria a constituição de um estado independente e soberano, a República da Libéria .\n[…]\nNo início do século XX, Monróvia foi dividida em duas partes: Monróvia adequada, onde a população da cidade américo-liberiana residia e era uma reminiscência do sul dos Estados Unidos na arquitetura, e Krutown, que era habitada principalmente por conflitos étnicos Krus, mas também bassas, grebos e de outras tribos. Dos 4000 habitantes, 2500 eram américo-liberianos. Em 1926, os grupos étnicos do interior da Libéria começaram a migrar para Monróvia em busca de emprego.\n[…]\nhttp://www.fallingrain.com/world/LI/14/Monrovia.html",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Mansa Musa",
      "descricao": "Governante do Império do Mali no século quatorze, famoso pela riqueza em ouro e pela peregrinação a Meca."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1324, a caminho de Meca, Mansa Musa gastou e doou tanto ouro no Cairo que provocou que efeito na economia da cidade?",
    "resposta": "Queda do valor do ouro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mansa_Musa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mansa_Musa",
        "situacao": "ok",
        "texto": "Mansa Musa (c. 1280 – c. 1337) was the ninth Mansa of the Mali Empire, which reached its territorial peak during his reign. Musa's reign is often regarded as the zenith of Mali's power and prestige, although he features less in Mandinka oral traditions than his predecessors.\n[…]\nMusa went on Hajj to Mecca in 1324, traveling with an enormous entourage and a vast supply of gold. En route, he spent time in Cairo, where his lavish gift-giving is said to have noticeably affected the value of gold in Egypt and garnered the attention of the wider Muslim world. Musa expanded the borders of the Mali Empire, in particular incorporating the cities of Gao and Timbuktu into its territory.\n[…]\nAccording to Djibril Tamsir Niane, Musa's father was named Faga Leye and his mother may have been named Kanku. Faga Leye was the son of Abu Bakr, a brother of Sunjata, the first mansa of the Mali Empire. Ibn Khaldun does not mention Faga Leye, referring to Musa as Musa ibn Abu Bakr. This can be interpreted as either \"Musa son of Abu Bakr\" or \"Musa descendant of Abu Bakr.\" It is implausible that Abu Bakr was Musa's father, due to the amount of time between Sunjata's reign and Musa's.\n[…]\nMusa and his entourage arrived at the outskirts of Cairo in July 1324. They camped for three days by the Pyramids of Giza before crossing the Nile into Cairo on 19 July. While in Cairo, Musa met with the Mamluk sultan al-Nasir Muhammad, whose reign had already seen one mansa, Sakura, make the Hajj. Al-Nasir expected Musa to prostrate himself before him, which Musa initially refused to do. When Musa did finally bow he said he was doing so for God alone.\n[…]\nMansa Musa I at World History Encyclopedia\n[…]\nMansa Moussa: Pilgrimage of Gold (archived) at History Channel's History.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mansa_Mu%C3%A7a",
        "situacao": "ok",
        "texto": "Muça I (fl. c. 1312 - c. 1337), comumente referido como Mansa Muça, foi o nono mansa, que se traduz como \"rei dos reis\" ou \"imperador\", do Império do Mali, além de ser reconhecido como o homem mais rico da história nos últimos mil anos, conforme estudo publicado em 2012 e que procedeu à atualização monetária dos valores, onde Muça teria uma fortuna estimada, naquele ano, de quatrocentos bilhões de\n[…]\nMuça fez a sua peregrinação em 1324, relatou que sua procissão incluía 60 000 homens, 12 000 escravos negros, todos vestidos de seda que traziam vasos com ouro, cavalos e sacos. Muça forneceu todas as necessidades para a procissão, alimentando toda a companhia de homens e animais. Também havia 80 camelos, que carregavam entre 50 e 300 quilos de pó de ouro cada. Muça não só deu ouro para as cidades que passava a caminho de Meca, incluindo o Cairo e Medina, mas também negociou ouro por lembranças.\n[…]\nQuando ele chegou ao Egito, Muça acampou perto das Pirâmides por três dias. Ele, então, enviou um presente de 50 000 dinares ao sultão do Egito, no Cairo, antes de se decidir por três meses. O sultão lhe emprestou seu palácio para o verão e se certificou de que sua comitiva fosse muito bem tratada. Muça deu milhares de dinares de ouro, e os comerciantes egípcios aproveitaram cobrando cinco vezes o preço normal pelos seus bens. O valor do ouro no Egito diminuiu para menos de 25 por cento.\n[…]\nEstima-se que Mansa Muça acumulava sozinho entre 25% a 30% de todo o PIB global de sua era. Ao longo de sua peregrinação Muça fez diversas doações vultuosas aos pobres que cruzavam seu caminho. Durante a jornada, o rei fez uma parada na cidade de Cairo, no Egito, e decidiu fazer doações substanciais do ouro que carregava consigo. A quantidade de ouro doada foi tamanha que gerou inflação e reduziu o preço do metal a 25% de seu valor original, levando a economia da região ao colapso.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Levante de Soweto",
      "descricao": "Protestos de estudantes negros em Soweto, na África do Sul, iniciados em 16 de junho de 1976 e reprimidos pela polícia."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1976, milhares de estudantes de Soweto saíram às ruas contra a imposição do ensino em que língua?",
    "resposta": "Africâner",
    "distratores": [
      "Inglês",
      "Zulu",
      "Holandês"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Soweto_uprising"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Soweto_uprising",
        "situacao": "ok",
        "texto": "The Soweto uprising, also known as the Soweto riots or the Soweto rebellion, was a series of demonstrations and protests led by black school children in South Africa during apartheid that began on the morning of 16 June 1976.\n[…]\nMost of the bloodshed had abated by the end of 1976. According to The Times, by that time more than 700 people had been killed throughout the country in the violence that had begun with the student uprising in Soweto. The Cillie Commission set up to investigate the uprising and its aftermath estimated 575 deaths from violence up to 28 February 1977, including 390 in Transvaal province and 137 in Western Cape province. The breakdown was 496 black Africans, 75 coloured, 2 white and 2 Indians.\n[…]\nA week after the uprising began, US Secretary of State Henry Kissinger met South African State President Vorster in West Germany to discuss the situation in Rhodesia, but the Soweto uprising did not feature in the discussions. Kissinger and Vorster met again in Pretoria in September 1976, with students in Soweto and elsewhere protesting his visit and being fired on by police.\n[…]\nSampson linked extracts from the BBC Sound Archive that charted the long struggle against apartheid from the Sharpeville massacre of 1960 to the riots of 1976 and the murder of Steve Biko until Mandela's release from prison in 1990 and the future president's speech in which he acknowledged the debt owed by all black South Africans to the students who had given their lives in Soweto on 16 June 1976.\n[…]\nInternational Day of the African Child\n[…]\n\"S. Africa marking Soweto uprising\" – BBC\n[…]\nThe June 16 Soweto Youth Uprising, South African History Online\n[…]\nThe June 16 Soweto students' uprising – as it happened, South Africa Gateway"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Levante_de_Soweto",
        "situacao": "ok",
        "texto": "O Levante de Soweto foi um dos mais sangrentos episódios de rebelião negra desde o início da década de 1960, desencadeado pela repressão policial à passeata, em 16 de junho de 1976, de protesto contra a inferioridade das \"escolas negras\" na África do Sul. Estima-se que havia entre 15 000 a 20 000 estudantes no protesto.\n[…]\nA manifestação pacífica — os estudantes, cantando, marchavam por Soweto (subúrbio negro em Johanesburgo) em direção a um estádio aberto, onde fariam um comício — foi alvo de uma bomba de gás lacrimogêneo por um policial, para, em seguida, ser atingida por disparos das tropas de choque munidas de armas automáticas. O número de pessoas mortas oficialmente é de 95, mas normalmente é dito que foram 176, mas há estatísticas que foram 700.\n[…]\nUm dos mortos foi o estudante Hector Pieterson, aos 13 anos de idade, que se tornou símbolo do massacre.\n[…]\nEm memória desta data, a então OUA instituiu em 1991 o Dia da Criança Africana.\n[…]\nO sistema segregacionista sul-africano, instituído no final dos anos 1940, forçava os negros a pagar para frequentar escolas com classes superlotadas e professores sem qualificação adequada, ou mesmo inferior, enquanto a educação para os brancos era gratuita.\n[…]\nEm 1975, o governo decretou a obrigatoriedade do ensino no idioma africâner, antes em inglês, para as matérias acadêmicas nas escolas secundárias negras. Para os estudantes negros a medida era uma ponte para o fracasso: para ter sucesso precisava ser fluente nos idiomas oficiais do país — inglês e africâner.\n[…]\nA organização dos Estudantes Sul-Africanos (South African yy Organization) (1968) foi o primeiro grupo anti-apartheid de jovens negros e fazia parte do abrangente Movimento de Conscientização Negra que lutava para superar a opressiva sensação de inferioridade dos negros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Crise de Suez",
      "descricao": "Conflito de 1956 em que Reino Unido, França e Israel invadiram o Egito."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1956, que decisão do presidente egípcio Gamal Abdel Nasser provocou a invasão do Egito por britânicos, franceses e israelenses?",
    "resposta": "Nacionalização do Canal de Suez",
    "fonte": [
      "https://en.wikipedia.org/wiki/Suez_Crisis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Suez_Crisis",
        "situacao": "ok",
        "texto": "The Suez Crisis, also known as the second Arab–Israeli war, the Tripartite Aggression in the Arab world and the Sinai War in Israel, was a British–French–Israeli invasion of Egypt in 1956. Israel invaded on 29 October, with the primary objective of re-opening the Straits of Tiran and the Gulf of Aqaba as the recent tightening of the eight-year-long Egyptian blockade further prevented Israeli passa\n[…]\nAfter issuing a joint ultimatum for a ceasefire, the United Kingdom and France joined the Israelis on 31 October, seeking to depose Egyptian president Gamal Abdel Nasser and regain control of the Suez Canal, which Nasser had nationalised earlier in the year.\n[…]\nThe crisis demonstrated that the United Kingdom and France could no longer pursue their independent foreign policy without consent from the United States. Israel's four-month-long occupation of the Egyptian-occupied Gaza Strip and Egypt's Sinai Peninsula enabled it to attain freedom of navigation through the Straits of Tiran, but the Suez Canal was closed from October 1956 to March 1957.\n[…]\nAs a result, the British government concluded a secret military pact with France and Israel that was aimed at regaining control over the Suez Canal.\n[…]\nAnthony Eden announced a cease fire on 6 November, warning neither France nor Israel beforehand. Troops were still in Port Said and on operational manoeuvres. Port Said had been overrun, and the military assessment was that the Suez Canal could have been completely taken within 24 hours.\n[…]\nEgypt kept control of the Suez Canal. The British historian D. R. Thorpe wrote that the outcome gave Nasser \"an inflated view of his own power\", thinking he had overcome the combined forces of the United Kingdom, France and Israel, failing to attribute their withdrawal to pressure from the superpowers.\n[…]\n1956 riots in Iraq\n[…]\nClosure of the Suez Canal (1967–1975)\n[…]\nCanada and the Suez Crisis\n[…]\nJuly 2006, BBC, Suez 50 years on"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Crise_de_Suez",
        "situacao": "ok",
        "texto": "Crise de Suez, também conhecida como Guerra de Suez (ou ainda Guerra do Sinai), foi uma crise política que teve início em 29 de outubro de 1956, quando Israel, com o apoio da França e Reino Unido, que utilizavam o canal para ter acesso ao comércio oriental, declarou guerra ao Egito. O presidente do Egito, Gamal Abdel Nasser havia nacionalizado o canal de Suez, cujo controle ainda pertencia à Ingla\n[…]\nEm 1956, o  nacionalismo, a guerra fria e o conflito árabe-israelense estiveram reunidos como fatores de um curto e violento conflito nas regiões egípcias do Canal de Suez e da Península do Sinai. O Egito e outras nações árabes ganharam há pouco tempo a independência dos impérios controlados por potências europeias como Grã-Bretanha e França.\n[…]\nComo parte da agenda nacionalista, o presidente egípcio Gamal Abdel Nasser tomou controle do Canal de Suez, tomando-o das empresas britânicas e francesas, que o possuíam. Ao mesmo tempo, como parte de sua luta permanente com Israel, forças egípcias bloquearam o Estreito de Tiran, a hidrovia estreita que é a única saída de Israel ao Mar Vermelho.\n[…]\nGrã-Bretanha e França, ambos em processo de perder os seus seculares impérios, decidiram, em uma estratégia conjunta, a ocupação do Canal de Suez. Isto teve como objetivo reafirmar o controle dessa hidrovia vital para as empresas britânicas e francesas expulsas pela nacionalização realizada por Nasser.\n[…]\nPor sugestão da França, o planejamento foi coordenado com Israel, um fato que todas as três nações negaram por anos depois.Em 29 de outubro de 1956, tropas israelenses invadiram a Península do Sinai e rapidamente superaram a oposição das tropas egípcias. No dia seguinte, a Grã-Bretanha e França, se ofereceram para ocupar temporariamente a Zona do Canal e sugeriram uma zona de 16 km em cada lado, que iria separar as forças egípcias dos israelenses.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Massacre de Sharpeville",
      "descricao": "Ataque da polícia sul-africana contra manifestantes negros em Sharpeville, em 21 de março de 1960."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1960, a polícia sul-africana atirou numa multidão em Sharpeville. Contra que tipo de lei do apartheid essas pessoas protestavam?",
    "resposta": "Leis do passe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sharpeville_massacre"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sharpeville_massacre",
        "situacao": "ok",
        "texto": "The Sharpeville massacre occurred on 21 March 1960, when police opened fire on a crowd of people who had assembled outside the police station in the township of Sharpeville in the then Transvaal Province of the then Union of South Africa (today part of Gauteng) to protest against the apartheid system and its pass laws.\n[…]\nThe massacre was photographed by photographer Ian Berry, who initially thought the police were firing blanks. In present-day South Africa, 21 March is commemorated  as a public holiday in honour of human rights and to commemorate the Sharpeville massacre.\n[…]\nMany white South Africans were also horrified by the massacre. The poet Duncan Livingstone, a Scottish immigrant from the Isle of Mull who lived in Pretoria, wrote in response to the massacre the Scottish Gaelic poem \"Bean Dubh a' Caoidh  a Fir a Chaidh a Marbhadh leis a' Phoileas\" (\"A Black Woman Mourns her Husband Killed by the Police\").\n[…]\nA storm of international protest followed the Sharpeville shootings, including sympathetic demonstrations in many countries and condemnation by the United Nations. On 1 April 1960, the United Nations Security Council passed Resolution 134. Sharpeville marked a turning point in South Africa's history; the country found itself increasingly isolated in the international community. The event also played a role in South Africa's departure from the Commonwealth of Nations in 1961.\n[…]\nSouth African artist Gavin Jantjes dedicated several prints in his series A South African Colouring Book (1974–75) to the Sharpeville Massacre. Iconic reportage photographs of scattering protesters are arranged alongside stenciled and handwritten captions pulled from news reporting of the unfolding event.\n[…]\nMarikana massacre – August 2012 police shooting of approximately 34 striking miners widely compared to Sharpeville"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Massacre_de_Sharpeville",
        "situacao": "ok",
        "texto": "O Massacre de Sharpeville foi um episódio de assassinato em massa perpetrado pela Polícia Sul-Africana (SAP) — a força policial nacional da África do Sul durante o regime do apartheid. Ocorreu no dia 21 de março de 1960, no bairro de Sharpeville, na cidade de  Johanesburgo, na África do Sul, durante um protesto realizado pelo Congresso Pan-Africano (PAC).\n[…]\nO protesto pregava contra a Lei do Passe, que obrigava os negros da África do Sul a usarem uma caderneta na qual estava escrito onde poderiam ir.\n[…]\nCerca de vinte mil manifestantes reuniram-se em Sharpeville, um bairro negro nos arredores da cidade de Johanesburgo, e marcharam calmamente, num protesto pacífico. A Polícia Sul-Africana conteve o protesto com rajadas de metralhadora. Morreram 69 pessoas, e cerca de 180 ficaram feridas.\n[…]\nApós esse dia, a opinião pública mundial focou sua atenção pela primeira vez na questão do apartheid. No dia 21 de novembro de 1969, a Organização das Nações Unidas implementou o Dia Internacional Contra a Discriminação Racial, que passou a ser comemorado todo dia 21 de março, a partir do ano seguinte. E continua ainda nos dias de hoje mesmo após o fim do apartheid.\n[…]\nSeis de Sharpeville",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Libéria",
      "descricao": "País da África Ocidental, criado no século dezenove como colônia de negros libertos vindos dos Estados Unidos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No início do século dezenove, uma sociedade americana criou a colônia que deu origem à Libéria. Com que objetivo?",
    "resposta": "Assentar negros libertos americanos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Liberia",
      "https://en.wikipedia.org/wiki/American_Colonization_Society"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Liberia",
        "situacao": "ok",
        "texto": "Liberia, officially the Republic of Liberia, is a country on the West African coast. It is bordered by Sierra Leone to its northwest, Guinea to its north, Ivory Coast to its east, and the Atlantic Ocean to its south and southwest. It has a population of around 5.5 million and covers an area of 43,000 square miles (111,369 km2). The official language is English, though over 20 indigenous languages \n[…]\nThe ACS, supported by prominent American politicians such as Abraham Lincoln, Henry Clay, and James Monroe, believed \"repatriation\" was preferable to having emancipated slaves remain in the United States. Similar state-based organizations established colonies in Mississippi-in-Africa, Kentucky in Africa, and the Republic of Maryland, which Liberia later annexed.\n[…]\nThe United States did not recognize Liberia until 1862, after the Southern states, which had strong political power in the American government, declared their secession and the formation of the Confederacy.\n[…]\nBy 1877, the True Whig Party was the country's most powerful political entity. It was made up primarily of Americo-Liberians, who maintained social, economic and political dominance well into the 20th century, repeating patterns of European colonists in other nations in Africa. Competition for office was usually contained within the party; a party nomination virtually ensured election.\n[…]\nMost of these Christian denominations were brought by African-American settlers moving from the United States into Liberia via the American Colonization Society, while some are indigenous—especially Pentecostal and evangelical Protestant ones. Protestantism was originally associated with Black American settlers and their Americo-Liberian descendants, while native peoples initially held to their own animist forms of African traditional religion before largely adopting Christianity.\n[…]\nOutline of Liberia\n[…]\nLiberia Business Facts from Bizpages"
      },
      {
        "url": "https://en.wikipedia.org/wiki/American_Colonization_Society",
        "situacao": "ok",
        "texto": "The American Colonization Society (ACS), initially the Society for the Colonization of Free People of Color of America, was an American organization founded in 1816 by Robert Finley to encourage and support the repatriation of freeborn people of color and emancipated slaves to sub-Saharan Africa, particularly the Grain Coast. It was modeled on an earlier British Committee for the Relief of the Bla\n[…]\nFrederick Douglass condemned colonization: \"Shame upon the guilty wretches that dare propose, and all that countenance such a proposition. We live here—have lived here—have a right to live here, and mean to live here\". Martin Delany, who believed that Black Americans deserved \"a new country, a new beginning\", called Liberia a \"miserable mockery\" of an independent republic, a \"racist scheme of the ACS to rid the United States of free blacks\".\n[…]\nBesides not improving the lot of enslaved Africans, the colonization had made enemies of native people of Africa. Both he and Gerrit Smith were horrified when they learned that alcohol was being sold in Liberia. He questioned the wisdom of sending African Americans, along with white missionaries and agents, to such an unhealthy place.\n[…]\nIt is an oversimplication to say simply that the American Colonization Society founded Liberia. Much of what would become Liberia was a collection of settlements sponsored by state colonization societies: Mississippi in Africa, Kentucky in Africa, the Republic of Maryland, and several others. The most developed of these, the Republic of Maryland, had its own constitution, and statutes.\n[…]\nThe ACS continued to operate during the American Civil War and colonized 168 black people during the conflict. It sent 2,492 people of African descent to Liberia in the five years following the war. The federal government provided a small amount of support for these operations through the Freedmen's Bureau.\n[…]\nSamaná Americans"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lib%C3%A9ria",
        "situacao": "ok",
        "texto": "Libéria (em inglês: Liberia), oficialmente República da Libéria (em inglês: Republic of Liberia), é uma república presidencialista localizada na África Ocidental. Faz fronteira ao norte com a Serra Leoa e Guiné, a leste com a Costa do Marfim e a sul e oeste com o Oceano Atlântico. Segundo o censo de 2008, a população do país é de 3 955 000 habitantes, divididos em uma área de 111 369 km2. A cidade\n[…]\nEscravos libertos dos navios negreiros também foram enviados para a Libéria, em vez de serem repatriados para seus países de origem. Estes colonos criaram um grupo de elite da sociedade da Libéria, e, em 1847, fundaram a República da Libéria, que instituiu um governo inspirado nos Estados Unidos, nomeando Monróvia como sua capital, homenageando James Monroe, o quinto presidente dos Estados Unidos e um proeminente defensor da colonização.\n[…]\nO nascimento da Libéria ocorreu no século XIX em resultado da ação da Sociedade Americana de Colonização, organização criada por Robert Finley nos Estados Unidos em 1816, cujo objetivo era levar para a África negros livres ou negros que tinham sido libertos da escravatura. De acordo com uma opinião prevalecente em alguns setores da população dos Estados Unidos da época, os negros não seriam nunca capazes de se integrar na sociedade do país.\n[…]\nEm 1821, a Sociedade Americana de Colonização conseguiu adquirir uma parcela de terra perto da área do Cabo Mesurado, onde se fixariam os primeiros colonos negros oriundos dos Estados Unidos. Em 1824 a colónia recebeu o nome de Libéria (do latim, \"terra livre\").\n[…]\nCerca de 2,5% dos habitantes são descendentes dos negros dos Estados Unidos que se fixaram no país no século XIX, sendo conhecido como américo-liberianos (americo-liberians). Outros 2,5% descendem de negros das Caraíbas que foram escravos.\n[…]\nMissões diplomáticas da Libéria",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Genocídio em Ruanda",
      "descricao": "Massacre de tutsis e hutus moderados em Ruanda, entre abril e julho de 1994."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em abril de 1994, que acontecimento desencadeou o genocídio em Ruanda?",
    "resposta": "Derrubada do avião presidencial",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rwandan_genocide",
      "https://en.wikipedia.org/wiki/Assassination_of_Juv%C3%A9nal_Habyarimana_and_Cyprien_Ntaryamira"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rwandan_genocide",
        "situacao": "ok",
        "texto": "The Rwandan genocide, also known as the genocide against Tutsi, occurred from 7 April to 19 July 1994 during the Rwandan Civil War. Over a span of around 100 days, members of the Tutsi ethnic group, as well as some moderate Hutu and Twa, were systematically killed by Hutu militias. While the Rwandan Constitution states that over 1 million people were killed, most scholarly estimates suggest betwee\n[…]\nUnder these exceptions, longtime Rwandan president, Paul Kagame, asserted that any acknowledgment of the separate people was detrimental to the unification of post-genocide Rwanda and has created numerous laws to prevent Rwandans from promoting a \"genocide ideology\" and \"divisionism\". The law does not explicitly define such terms, nor does it state that one's beliefs must be spoken.\n[…]\nAmnesty International has criticized the Rwandan government for using these laws to \"criminalize legitimate dissent and criticism of the government\". In 2010, Peter Erlinder, an American law professor and attorney, was arrested in Kigali and charged with genocide denial while serving as defense counsel for presidential candidate Victoire Ingabire.\n[…]\nThe independent documentary film Earth Made of Glass (2010), which addresses the personal and political costs of the genocide, focusing on Rwandan President Paul Kagame and genocide survivor Jean-Pierre Sagahutu, premiered at the 2010 Tribeca Film Festival.\n[…]\nIn March 2019, President Félix Tshisekedi of the Democratic Republic of the Congo visited Rwanda to sign the Kigali Genocide Memorial Book, saying, \"The collateral effects of these horrors have not spared my country, which has also lost millions of lives.\" On 7 April the Rwandan Government initiated 100 days of mourning in observation of the 25th anniversary of the genocide by lighting a flame at the Kigali Genocide Memorial.\n[…]\nUnited Nations International Criminal Tribunal for Rwanda"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Assassination_of_Juv%C3%A9nal_Habyarimana_and_Cyprien_Ntaryamira",
        "situacao": "ok",
        "texto": "On the evening of 6 April 1994, the aircraft carrying Rwandan president Juvénal Habyarimana and Burundian president Cyprien Ntaryamira, both Hutu, was shot down with surface-to-air missiles as their jet prepared to land in Kigali, Rwanda; both were killed. The assassination set in motion the Rwandan genocide, one of the bloodiest events of the late 20th century.\n[…]\nJuvénal Habyarimana, President of Rwanda\n[…]\nDr. Emmanuel Akingeneye, personal physician to the Rwandan president\n[…]\nPresident of the UN Security Council Colin Keating appealed for peace in Rwanda and Burundi and sent condolences to the families of the late presidents.\n[…]\nKagame also ordered the formation of a commission of Rwandans that was \"charged with assembling proof of the involvement of France in the genocide\". The commission issued its report to Kagame in November 2007 and its head, Jean de Dieu Mucyo, stated that the commission would now \"wait for President Kagame to declare whether the inquiry was valid\".\n[…]\nIn January 2010, the Rwandan government released the \"Report of the Investigation into the Causes and Circumstances of and Responsibility for the Attack of 06/04/1994 Against The Falcon 50 Rwandan Presidential Aeroplane Registration Number 9XR-NN,\" known as the Mutsinzi Report. The multivolume report implicates proponents of Hutu Power in the attack.\n[…]\nNtaryamira's death is commemorated by the Burundian government on 6 April of each year. The death of the Burundian president and two of his ministers in the plane shootdown has generally been overshadowed in public memory by Habyarimana's death and the subsequent Rwandan genocide.\n[…]\nVideo Animation of the Crash - Synopsis of findings from Rwanda's Mutsinzi Report: Government of Rwanda Media Guide to the Committee of Experts Investigation of 6 April 1994 Crash of President Habyarimana's Dassault Falcon-50 Aircraft"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Genoc%C3%ADdio_em_Ruanda",
        "situacao": "ok",
        "texto": "O genocídio de Ruanda, também conhecido como genocídio tútsi, foi um massacre em massa de pessoas dos grupos étnicos tútsis, tuás e de hútus moderados em Ruanda, que ocorreu entre 7 de abril e 15 de julho de 1994 durante a Guerra Civil de Ruanda.\n[…]\nMesmo acuados, os tútsis e alguns hútus moderados se organizaram politicamente com o intuito de derrubar o governo do presidente Juvenal Habyarimana e retornar ao país. Com o passar do tempo, esta mobilização deu origem à Frente Patriótica Ruandense (FPR), liderada por Paul Kagame.\n[…]\nNa década de 1990, vários incidentes demarcavam a clara insustentabilidade da relação entre tútsis e hútus. No ano de 1993, um acordo de paz entre o governo e os membros do FPR não teve forças para resolver o conflito. O ponto alto dessa tensão ocorreu no dia 6 de abril de 1994, quando um atentado derrubou o avião que transportava o presidente Habyarimana. Imediatamente, a ação foi atribuída aos tútsis ligados ao FPR.\n[…]\nNa cidade de Quigali, capital da Ruanda, membros da guarda presidencial organizaram as primeiras perseguições contra os tútsis e hútus moderados que formavam o grupo de oposição política no país.\n[…]\nEm abril de 1994, o presidente ruandês Juvénal Habyarimana (um hútu) foi morto num atentado contra o avião em que viajava. Logo no dia seguinte, o genocídio começou. Sem apresentar provas, as lideranças hútus acusaram os tútsis pelo assassinato do presidente e conclamaram a população a iniciar a matança. Horas depois, as milícias hútus já avançaram contra vilarejos e cidades por todo o país, matando tudo que viam pela frente. Postos de controle foram estabelecidos nas ruas.\n[…]\nHotel Ruanda\n[…]\nMissão de Assistência das Nações Unidas para Ruanda\n[…]\nGenocídios na história\n[…]\nRwanda's Untold Story Documentary",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Bronzes de Benim",
      "descricao": "Milhares de placas e esculturas de metal do Reino de Benim, na atual Nigéria, levadas pelos britânicos em 1897."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1897, que acontecimento levou milhares de Bronzes de Benim, da atual Nigéria, para museus da Europa?",
    "resposta": "Expedição punitiva britânica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Benin_Bronzes",
      "https://en.wikipedia.org/wiki/Benin_Expedition_of_1897"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Benin_Bronzes",
        "situacao": "ok",
        "texto": "The Benin Bronzes are a group of several thousand metal plaques and sculptures that decorated the royal palace of the Kingdom of Benin, in what is now Edo State, Nigeria. The metal plaques were produced by the Guild of Benin Bronze Casters, now located in Igun Street, also known as Igun-Eronmwon Quarters. Collectively, the objects form the best examples of Benin art and were created from the fourt\n[…]\nMost of the plaques and other objects were taken by British forces during the Benin Expedition of 1897 as the British Empire's control was being consolidated in Southern Nigeria. This expedition was positioned by British sources as retaliation for a massacre of an unarmed party of British envoys and a large number of their African bearers in January 1897.\n[…]\nNews of the incident reached London eight days later and a naval punitive expedition was organized immediately, which was to be directed by Admiral Harry Rawson. British forces sacked and destroyed Benin City. Following the attack, the victors took the works of art decorating the Royal Palace and the residences of the nobility, which had been accumulated over many centuries.\n[…]\nThe Benin Bronzes that were part of the booty of the punitive expedition of 1897 had different destinations: one portion ended up in the private collections of various British officials; the Foreign and Commonwealth Office sold a large number, which later ended up in various European museums, mainly in Germany, and in American museums. The high quality of the pieces was reflected in the high prices they fetched on the market.\n[…]\nOn 19 June 2025, the Dutch government returned a group of 113 bronzes from its national collection and another six from the collection of the city of Rotterdam, \"the single largest return of Benin antiquities directly linked to the 1897 British punitive expedition\" to date.\n[…]\nArt of the Kingdom of Benin\n[…]\nDigital Benin online platform"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Benin_Expedition_of_1897",
        "situacao": "ok",
        "texto": "The Benin Expedition of 1897 was the conquest of the Kingdom of Benin by British forces that led to the annexation of Benin into colonial Nigeria.\n[…]\nWithin the week, news of the incident reached London. As a result of this attack, the Foreign Office authorized military action, leading to what the British called a \"punitive expedition\". British officials presented the expedition as both a response to the killings and as an intervention against practices in the kingdom.\n[…]\nOn 12 January 1897, Rear-Admiral Harry Rawson, commander of the Royal Navy forces at the Cape of Good Hope and West Coast of Africa Station, was appointed by the Admiralty to lead a force to invade the Kingdom of Benin and capture the Benin Oba. The British named the operation the \"Benin Punitive Expedition\".\n[…]\nAs we neared the city, sacrificed human beings were lying in the path and bush—even in the king's compound the sight and stench of them was awful. Dead and mutilated bodies were everywhere – by God! May I never see such sights again! . . .'\"Herbert Walker, a soldier serving in the punitive expedition, believed that the human sacrifices he saw were an attempt by Benin City residents to appease the Gods as they tried to defend themselves from the expedition.\n[…]\nEight members of the punitive force were recorded as being killed in action during the Benin Expedition; the number of military and civilian casualties amongst the Benin people was not estimated but is thought to have been very high.\n[…]\nThe Benin Expedition was described as such:\n[…]\nBenin Bronzes\n[…]\nHome, Robert (1982). City of Blood Revisited • A new look at the Benin expedition of 1897. London: Rex Collings, Ltd."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bronzes_do_Benim",
        "situacao": "ok",
        "texto": "Bronzes do Benim são uma coleção formada por mais de mil peças comemorativas que provêm dos palácios reais da cidade do Benim, capital do antigo Reino do Benim. Foram criadas pelos povos edos desde o século XIII e, kamal 1897, os britânicos apoderaram-se da maior parte delas. Várias centenas destas peças foram levadas para o Museu Britânico de Londres, enquanto o resto foi repartido entre outros m\n[…]\nAssim, as primeiras peças que realmente chamaram a atenção ocidental foram aquelas enviadas pelo Exército britânico a Londres em 1897, depois da sua expedição punitiva contra o reino do Benim. Tratava-se de um tesouro formado por esculturas de bronze e marfim, entre as quais salientavam cabeças de reis, figuras de leopardos, sinos e um grande número de placas com alto-relevo, todas elas realizadas com surpreendente mestria com a técnica da cera perdida.\n[…]\nOito dias depois, as notícias do incidente chegaram a Londres e, imediatamente, foi organizada uma expedição naval punitiva, dirigida pelo almirante Rawson. A expedição saqueou e destruiu por completo a cidade do Benim. Após a vitória britânica, os conquistadores levaram as obras de arte que decoravam o palácio real e as residências da nobreza, acumuladas durante muitos séculos. A versão oficial susteve que tal retaliação ocorrera porque as tribos emboscaram uma missão humanitária e pacífica.\n[…]\nOs bronzes do Benim que fizeram parte da pilhagem da expedição punitiva de 1897 tiveram diferentes destinos: uma parte terminou na coleção privada de diferentes oficiais britânicos; a Foreign Office vendeu uma quantidade importante que, posteriormente, acabaria em diferentes museus da Europa, principalmente na Alemanha, e dos Estados Unidos. A notável qualidade dos trabalhos viu-se refletida depressa nos altos preços que atingiram no mercado.\n[…]\n«Benin plaque: the oba with Europeans» (em inglês). As placas do Benim no Museu Britânico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Shaka",
      "descricao": "Rei zulu do início do século dezenove, que transformou os zulus num poderoso reino militar no sul da África."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Como se chama o período de guerras e migrações forçadas causado pela expansão do Reino Zulu de Shaka, no início do século dezenove?",
    "resposta": "Mfecane",
    "distratores": [
      "Grande Trek",
      "Ubuntu",
      "Indaba"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mfecane"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mfecane",
        "situacao": "ok",
        "texto": "The Mfecane was a historical period of heightened military conflict and migration associated with state formation and expansion in Southern Africa. It resulted from the complex interplay of pre-existing trends of political centralisation with the effects of international trade, environmental instability, and European colonisation. The exact range of dates that comprise the Mfecane varies between s\n[…]\nIn 1988, Rhodes University professor Julian Cobbing advanced a different hypothesis on the rise of the Zulu state; he contended the accounts of the Mfecane were a self-serving, constructed product of apartheid-era politicians and historians. According to Cobbing, apartheid-era historians had mischaracterised the Mfecane as a period of internally induced Black-on-Black destruction.\n[…]\nCobbing's hypothesis generated an immense volume of polemics among historians; the discussions were termed the \"Cobbing Controversy\". While historians had already embarked upon new approaches to the study of the Mfecane in the 1970s and 1980s, Cobbing's paper was the first major source that overtly defied the hegemonic \"Zulu-centric\" explanation at the time. This was followed by fierce discourse in the early 1990s prompted by Cobbing's hypothesis.\n[…]\nMany agree that Cobbing's analysis offered several key breakthroughs and insights into the nature of early Zulu society.\n[…]\nShe still agreed with Cobbing's overall sentiment in that the Zulu-centric explanation for the Mfecane is not reliable. By the early 2000s, a new historical consensus had emerged, recognising the Mfecane to be not simply a series of events resulting from the founding of the Zulu Kingdom but rather a multitude of factors caused before and after Shaka Zulu came into power.\n[…]\nWright, John (1989). \"Political Mythology and the Making of Natal's Mfecane\". Canadian Journal of African Studies. 23 (2). doi:10.2307/485525. hdl:10539/10253. JSTOR 485525."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mfecane",
        "situacao": "ok",
        "texto": "Mfecane (na língua zulu), também denominado Difaqane ou Lifaqane (nas línguas soto-tsuana), é a designação dada ao período de grande convulsão social que se viveu em grande parte da África Austral entre 1815 e cerca de 1835.\n[…]\nO Mfecane conduziu à formação e consolidação de diversas unidades políticas e grupos étnicos, entre os quais os matabeles, os fengos e os macololos, e à criação de Estados como o moderno Lesoto.\n[…]\nEmbora existam visões contraditórias sobre as causas do Mfecane, com alguns historiadores a atribuírem a sua origem à pressão do colonialismo europeu e ao esclavagismo, a visão mais consensual atribui o seu desencadear à subida ao poder de Shaka Zulu, o rei do Reino Zulu e grande líder militar que unificou os povos de línguas angunes entre os rios Tugela e Pongola nos primeiros anos do século XIX, criando uma grande potência militar na região.\n[…]\nEsta aliança interferiu com as rotas comerciais usada pelos povos anduandués, também eles agrupados numa aliança informal liderada por Zwide e centrada em terras mais a norte, nas margens do rio Pongola. Escaramuças entre forças de ambos os grupos começaram a ser cada vez mais frequentes, servindo de catalisador para a guerra generalizada que foi o Mfecane.\n[…]\nOs povos suázis que viviam no território do actual Essuatíni fixaram-se a sudoeste da região e mantiveram guerras periódicas com os anduandués. Sobhuza, um dos líderes suázis, por volta de 1820 conduziu o seu povo para as regiões montanhosas de maior altitude como forma de se proteger dos ataques dos zulus. Após esta migração, passaram a ser conhecidos por suázis (até então chamavam-se \"anguanes\"), e Sobhuza fundou o Reino Suázi naquilo que é hoje a região central de Essuatíni.\n[…]\nShaka Zulu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Independência de Angola",
      "descricao": "Fim do domínio colonial português em Angola, em 11 de novembro de 1975."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que acontecimento em Portugal, em abril de 1974, abriu caminho para a independência de Angola e Moçambique?",
    "resposta": "Revolução dos Cravos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Carnation_Revolution",
      "https://pt.wikipedia.org/wiki/Revolu%C3%A7%C3%A3o_dos_Cravos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carnation_Revolution",
        "situacao": "ok",
        "texto": "The Carnation Revolution (Portuguese: Revolução dos Cravos), code-named Operation Historic Turn, also known as the 25 April, and Portuguese Revolution  (Portuguese: Revolução Portuguesa) was a military coup in Portugal by officers that on 25 April 1974 overthrew Marcelo Caetano and the Estado Novo regime established by António de Oliveira Salazar (r. 1932–1968).\n[…]\nThe coup came in the midst of the Portuguese Colonial War (1961–1974) in its overseas colonies and produced major social, economic, territorial, demographic, and political changes in Portugal and in Angola, Guinea-Bissau, Mozambique, and other former Portuguese colonies through the Ongoing Revolutionary Process. It resulted in the Portuguese transition to democracy and an end to the Portuguese Colonial War.\n[…]\nThe revolution began as a coup organised by the Armed Forces Movement (MFA), composed of military officers who opposed the regime, but it was soon coupled with an unanticipated popular civil resistance campaign. Negotiations with African independence movements began, and by the end of 1974, Portuguese troops were withdrawn from Portuguese Guinea, which became a UN member state as Guinea-Bissau.\n[…]\nFreedom Day (25 April) is a national holiday, with state-sponsored and spontaneous commemorations of the civil liberties and political freedoms achieved after the revolution. It commemorates the 25 April 1974 revolution and Portugal's first free elections on that date the following year.\n[…]\nCravos de Abril (April Carnations), 1976 documentary, b/w and colour, 16 mm, 28 minutes, by Ricardo Costa – Depicts the revolutionary events from 24 April to 1 May 1974, illustrated by the French cartoonist Siné.\n[…]\nAster Revolution\n[…]\n5 October 1910 revolution\n[…]\nRobinson, Peter (2008). \"Portugal 1974-75: Popular power\". In Barker, Collin (ed.). Revolutionary Rehearsals. Haymarket Books. ISBN 978-1-931859-02-8."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Revolu%C3%A7%C3%A3o_dos_Cravos",
        "situacao": "ok",
        "texto": "A Revolução de 25 de Abril de 1974, também conhecida como Revolução dos Cravos, Revolução de Abril ou apenas por 25 de Abril, refere-se a um evento da história de Portugal resultante do movimento político e social, ocorrido a 25 de abril de 1974, que depôs o regime ditatorial do Estado Novo, vigente desde 1933, e que iniciou um processo que viria a terminar com a implantação de um regime democráti\n[…]\nO cravo vermelho tornou-se o símbolo indissolúvel da Revolução de Abril de 1974. Celeste Caeiro, que trabalhava num restaurante na Rua Braamcamp de Lisboa, tendo o restaurante permanecido encerrado pelos acontecimentos, transportava pelas ruas um ramo de cravos brancos e vermelhos nas mãos. Um soldado pediu-lhe um cigarro, mas ela só tinha flores e decidiu então iniciar a distribuição dos cravos aos soldados, que logo os colocaram nos canos das suas armas.\n[…]\nA Revolução dos Cravos foi amplamente coberta, além da RTP, por várias televisões estrangeiras, logo após ter sido notícia de interesse internacional. As primeiras imagens do 25 de Abril foram divulgadas na televisão alemã (ver Cravos de Abril). As televisões que mais deram cobertura aos acontecimentos foram as cadeias alemãs (ARD e ZDF) e, no final do PREC, com o Verão Quente, a norte-americana CBS, com a qual Ricardo Costa também colaborou.\n[…]\nEstado Novo (Portugal)\n[…]\nRevolução dos «Cravos», Áreamilitar\n[…]\nSob o Vermelho dos Cravos de Abril: literatura e revolução no Portugal contemporâneo- Resenha de Gerson Luiz Roani, Revista Letras, Curitiba, n. 64, p. 15–32. set./dez. 2004. Editora UFPR\n[…]\nCronologia da Revolução dos Cravos (24 e 25 de Abril)\n[…]\nCronologia da Revolução dos Cravos na pág. da Universidade de Évora (25 e 26 de Abril)\n[…]\nO Fim da Ditadura- Cronologia da Revolução dos Cravos de 25 de Abril a 31 de Dezembro de 1974 em C. M. Oeiras\n[…]\nCronologia da Revolução dos Cravos(25 de Abril de 1974 a 22 de Abril de 1976) em Fórum Cidadania"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Igrejas de Lalibela",
      "descricao": "Conjunto de igrejas monolíticas escavadas na rocha na cidade de Lalibela, na Etiópia, Patrimônio Mundial da UNESCO."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição, as igrejas de Lalibela foram feitas como uma Nova Jerusalém depois que a cidade santa caiu, em 1187, nas mãos de qual sultão?",
    "resposta": "Saladino",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lalibela"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lalibela",
        "situacao": "ok",
        "texto": "Lalibela (Amharic: ላሊበላ, romanized: Lalibäla) is a town in the Amhara Region of Ethiopia. Located in the Lasta district and North Wollo Zone, it is a tourist site for its  famous rock-cut monolithic churches designed in contrast to the earlier monolithic churches in Ethiopia. The whole of Lalibela is a large and important site for the antiquity, medieval, and post-medieval civilization of Ethiopia\n[…]\nThe layout and names of the major buildings in Lalibela are widely accepted, especially by local clergy, to be a symbolic representation of Jerusalem. This has led some experts to date the current church construction to the years following the capture of Jerusalem in 1187 by the Muslim leader Saladin.\n[…]\nLalibela is roughly 2,500 metres (8,200 ft) above sea level. It is the main town in Lasta, which was formerly part of the Bugna district. The rock-hewn churches were declared a World Heritage Site in 1978.\n[…]\nOn the other hand, local historian Getachew Mekonnen credits Queen Meskel Kibra, Lalibela's wife, with having one of the rock-hewn churches, Biete Abba Libanos, built as a memorial for her husband after his death.\n[…]\nAccording to the Futuh al-Habasha of Shihab al-Dīn Aḥmad ibn ʿAbd al-Qādir ibn Sālim ibn ʿUthmān, Ahmad ibn Ibrahim al-Ghazi burned one of the churches of Lalibela during his invasion of Ethiopia. Sihab ad-Din Ahmad (Arab Faqih) provided a detailed description of a rock-hewn church. \"It was carved out of the mountain.\n[…]\nThis rural town is known around the world for its churches carved from within the earth from \"living rock,\" which play an important part in the history of rock-cut architecture. Though the dating of the churches is not well established, most are thought to have been built during the reign of Lalibela, namely during the 12th and 13th centuries. Unesco identifies 11 churches, assembled in four groups:\n[…]\nMonolithic church\n[…]\nRock-Hewn Churches, Lalibela"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lalibela_%28cidade%29",
        "situacao": "ok",
        "texto": "Lalibela (em amárico: ላሊበላ) é uma cidade em Amhara, norte da Etiópia, onde se encontram igrejas monolíticas, esculpidas na rocha viva, por ordem do rei Lalibela (século XII da era cristã). A cidade oferece um vislumbre da civilização medieval na Etiópia.\n[…]\nÀquela altura, os cristãos tinham por tradição visitar ao menos uma vez na vida a cidade de Jerusalém (como hoje os muçulmanos fazem com a cidade de Meca, seu centro religioso). Como Jerusalém estava dominada pelos árabes, os cristãos não podiam exercer essa tradição.\n[…]\nAssim, enquanto os católicos europeus passaram a se voltar para Roma (até hoje, ocorrem peregrinações à cidade italiana a cada 25 anos, nos anos terminados em 0, 25, 50 e 75, de cada século), Lalibela decidiu construir uma réplica de Jerusalém em seu reino. A Etiópia tem uma das mais antigas tradições cristãs. Para seus fiéis, de tradição copta, a peregrinação a Lalibela tem o caráter de uma viagem a Jerusalém.\n[…]\nTrata-se de uma das cidades mais sagradas da para a Igreja Ortodoxa Etíope, junto com Axum.\n[…]\nIgrejas Escavadas na Rocha de Lalibela",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Igrejas de Lalibela",
      "descricao": "Conjunto de igrejas monolíticas escavadas na rocha na cidade de Lalibela, na Etiópia, Patrimônio Mundial da UNESCO."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na Etiópia, quantas igrejas medievais escavadas na rocha formam o conjunto de Lalibela?",
    "resposta": "Onze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rock-Hewn_Churches,_Lalibela"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rock-Hewn_Churches,_Lalibela",
        "situacao": "ok",
        "texto": "The eleven Rock-hewn Churches of Lalibela are monolithic churches located in the western Ethiopian Highlands near the town of Lalibela, named after the late-12th and early-13th century King Gebre Meskel Lalibela of the Zagwe dynasty, who commissioned the massive building project of 11 rock-hewn churches to recreate the holy city of Jerusalem in his own kingdom.\n[…]\nThe site remains in use by the Ethiopian Orthodox Christian Church to this day, and it remains an important place of pilgrimage for Ethiopian Orthodox worshipers. It took 24 years to build all the 11 rock hewn churches.\n[…]\nThe site of the rock-hewn churches of Lalibela was first included on the UNESCO World Heritage List in 1978.\n[…]\nThe rock-hewn churches at Lalibela are made through a subtractive processes in which space is created by removing material. Out of the 11 churches, 4 are free-standing (monolithic) and 7 share a wall with the mountain out of which they are carved. The churches are each unique, giving the site an architectural diversity that is evident by the human figures of bas-reliefs inside Bet Golgotha, and the colorful paintings of geometrical designs and biblical scenes in Bet Mariam.\n[…]\nThe Churches of Lalibela hold important religious significance for Ethiopian Orthodox Christians. Together they form a pilgrimage site with particular spiritual and symbolic value, with a layout representing the holy city of Jerusalem. The site continues to be used for daily worship and prayer, the celebration of religious festivals like Timkat and Genna, as a home to clergy, and as a place which increasingly brings together religious adherents and leaders every year.\n[…]\nThere has been a lack of adequate communication and sharing of information regarding project plans between  the Authority for Research and Conservation of Cultural Heritage (ARCCH) and the local committee and church."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Igrejas_rupestres_de_Lalibela",
        "situacao": "ok",
        "texto": "As igrejas escavadas na rocha de Lalibela constituem um Patrimônio Cultural da Humanidade situado na Etiópia, a 640 km ao norte da capital, Adis Abeba, e a 1 500 m de altitude.\n[…]\nOnze igrejas e um mosteiro, além de vários sepulcros e outros lugares sagrados formam uma cidade labiríntica escavada no subsolo. Cada um destes templos foi talhado na rocha da montanha, como se fossem esculturas. O templo de São Jorge, um monólito em forma de cruz grega, é o principal.\n[…]\nNo século XII, o rei Lalibela apresentou-se como herdeiro da dinastia salomónica — estirpe dinástica criada por Menelique I, filho do rei Salomão e da rainha de Sabá — e ordenou a escavação de vários templos na rocha vulcânica a muitos metros de profundidade, dando início às construções do local.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Dinastia salomônica",
      "descricao": "Casa imperial da Etiópia, que reinou de 1270 a 1974 e se dizia descendente do rei Salomão."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A dinastia imperial etíope, de Hailé Selassié, afirmava descender do rei Salomão e de qual rainha bíblica?",
    "resposta": "Rainha de Sabá",
    "fonte": [
      "https://en.wikipedia.org/wiki/Solomonic_dynasty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Solomonic_dynasty",
        "situacao": "ok",
        "texto": "The Solomonic dynasty was the ruling dynasty of the Ethiopian Empire from the thirteenth to twentieth centuries. The dynasty was founded by Yekuno Amlak, who overthrew the Zagwe dynasty in 1270. According to the dynasty's founding, he was descended from the legendary king Menelik I, the son of the biblical King Solomon and the Queen of Sheba of the Davidic line. The Solomonic dynasty remained in p\n[…]\nThis and the dynasty's continued propagation of the myth was reflected in the 1955 Ethiopian constitution, which declared that the emperor \"descends without interruption from the dynasty of Menelik I, son of Queen of Ethiopia, the Queen of Sheba and King Solomon of Jerusalem\".\n[…]\nThe male line, through the descendants of Menelik's cousin Dejazmatch Taye Gulilat, still existed, but had been pushed aside largely because of Menelik's personal distaste for this branch of his family. The Solomonic Dynasty continued to rule Ethiopia with few interruptions until 1974, when the last emperor, Haile Selassie, was deposed. The Imperial family is currently non-regnant.\n[…]\nThe Shewan line was next on the Imperial throne with the coronation of Menelik II, previously Menelik King of Shewa, in 1889. The Shewan Branch of the Imperial Solomonic dynasty, like the Gondarine line, could trace uninterrupted male line descent from King Yekonu Amlak, though Abeto Negassi Yisaq, the grandson of Dawit II by his youngest son Abeto Yaqob.\n[…]\nThe direct male line ended with Menelik II, who was succeeded first by the son of his daughter Lij Iyasu from 1913 to 1916, then by his daughter Zewditu until 1930, and finally by the son of a first cousin in the female line, Haile Selassie. Haile Selassie's reign lasted until 1974, when the dynasty was removed from power. His grandson Prince Zera Yacob is his legal heir and therefore the current head of the Imperial dynasty.\n[…]\nOrder of Solomon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dinastia_salom%C3%B3nica",
        "situacao": "ok",
        "texto": "A dinastia salomónica (português europeu) ou dinastia salomônica (português brasileiro) foi a antiga casa imperial da Abissínia (Etiópia), em que seus membros alegam descendência linear de Salomão de Israel e da Rainha de Sabá, sendo esta última, conforme o Kebra Nagast, a que deu à luz Menelique I depois de sua visita biblicamente descrita a Salomão, em Jerusalém.\n[…]\nEstas reivindicações de ascendência salomônica tornam a casa real da Etiópia entre as duas mais antigas do mundo (a outra é a Casa Imperial do Japão).\n[…]\nOs reis salomônicos são conhecidos pelo ritual de coroação, onde os reis axumitas não possuíam. Pelo contrário, a realeza posterior explorou o prestígio religioso e histórico da Igreja de Santa Maria de Sião axumita, tornando-o seu local de coroação cerimonial.\n[…]\nA dinastia salomônica governou a Etiópia com poucas interrupções até 1974, quando o último imperador, Haile Selassie I, foi deposto.\n[…]\nSolomonic Dynasty- EthiopianHistory.Com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Ilha de Moçambique",
      "descricao": "Ilha no norte de Moçambique, antiga capital da colônia portuguesa e Patrimônio Mundial da UNESCO."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que poeta português, voltando da Índia, viveu na pobreza na Ilha de Moçambique por volta de 1568?",
    "resposta": "Luís de Camões",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lu%C3%ADs_de_Cam%C3%B5es",
      "https://en.wikipedia.org/wiki/Island_of_Mozambique"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lu%C3%ADs_de_Cam%C3%B5es",
        "situacao": "ok",
        "texto": "Luís Vaz de Camões (European Portuguese: [luˈiʒ ˈvaʒ ðɨ kaˈmõjʃ]; c. 1524 or 1525 – 10 June 1580), sometimes rendered in English as Camoens or Camoëns ( KAM-oh-ənz), was a Portuguese poet, considered Portugal's and the Portuguese language's greatest poet. His mastery of verse has been compared to that of Shakespeare, Milton, Vondel, Homer, Virgil and Dante. He wrote a considerable amount of lyrica\n[…]\nHis collection of poetry The Parnasum of Luís de Camões was lost during his life. The influence of his masterpiece Os Lusíadas is so profound that Portuguese is sometimes called the \"language of Camões\".\n[…]\nOver the centuries the image of Camões was represented numerous times in engraving, painting and sculpture, by Portuguese and foreign artists, and several monuments were erected in his honor, notably the great Monument to Camões installed in 1867 in Praça de Luís de Camões, in Lisbon, by Victor Bastos, which is the center of official public ceremonies and popular demonstrations.\n[…]\nCamões' fame began to spread across Spain, where he had several admirers since the 16th century, with two translations of Os Lusíadas appearing in 1580, the year of the poet's death, possibly printed at the behest of Philip II of Spain, who at the time was also the king of Portugal. In Luis Gómez de Tápia's edition, Camões is already mentioned as \"famous\", and in Benito Caldera's he was compared to Virgil.\n[…]\nIn Goa (India) the Archeological Museum at Old Goa (which used to be a Franciscan monastery) houses a 3 meters high bronze statue of Luís de Camões. The statue was originally installed in the garden in year 1960 but was moved into the museum due to public protest after Goa's annexation to India. Another Camões monument in Goa, India – \"Jardim de Garcia da Orta Garden\" (popularly known as Panaji Municipal Garden) has a 12 meter high pillar in the center.\n[…]\nLuis Vaz de Camões – Catholic Encyclopedia article"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Island_of_Mozambique",
        "situacao": "ok",
        "texto": "The Island of Mozambique (Portuguese: Ilha de Moçambique) lies off northern Mozambique, between the Mozambique Channel and Mossuril Bay, and is part of Nampula Province. Prior to 1898, it was the capital of colonial Portuguese East Africa.\n[…]\nThe name of the island (Portuguese: Moçambique, pronounced [musɐ̃ˈbiki]) is derived from Ali Musa Mbiki (Mussa Bin Bique), sultan of the island in the times of Vasco da Gama. This name was subsequently also used for the mainland country Mozambique, and Ilha de ... (Island of ...) was added to the island's name. The Portuguese established a port and naval base in 1507 and built the Chapel of Nossa Senhora de Baluarte in 1522, now considered the oldest European building in the Southern Hemisphere.\n[…]\nDuring the 16th century, Fort São Sebastião was built, and the Portuguese settlement (now known as Stone Town) became the capital of Portuguese East Africa. The island also became an important missionary centre. It withstood Dutch attacks in 1607 and 1608, in a successful defense led by captain-general Dom Estêvão de Ataíde, and remained a major post for the Portuguese on their trips to India. It saw the trading of slaves, spices, and gold.\n[…]\nThe island is also close to two tourist highlights: Chocas Mar, a long beach about 40 km north of Ilha de Moçambique across the Mossuril Bay and Cabaceiras.\n[…]\nGoa Island (nearby)\n[…]\nO.J.O. Ferreira, Ilha de Moçambique byna Hollands: Portuguese inbesitname, Nederlandse veroweringspogings en die opbloei en verval van Mosambiek-eiland. Gordonsbaai & Jeffreysbaai: Adamastor: 2010\n[…]\nMalyn Newitt, Mozambique Island: The Rise and Decline of an East African Coastal City, 1500–1700. An article from Portuguese Studies.\n[…]\nIlha de Mozambique travel guide from Wikivoyage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lu%C3%ADs_de_Cam%C3%B5es",
        "situacao": "ok",
        "texto": "Luís Vaz de Camões (Lisboa?, c. 1524 – Lisboa, 10 de junho de 1579 ou 1580) foi um poeta e soldado português, considerado o poeta nacional de Portugal, o maior representante do renascimento português, o escritor mais importante da língua portuguesa e um dos grandes expoentes da literatura ocidental, famoso por sua epopeia Os Lusíadas (1572) e por seus sonetos (editados, postumamente, com outros po\n[…]\nAo longo dos séculos a imagem de Camões foi representada inúmeras vezes em gravura, pintura e escultura, por artistas portugueses e estrangeiros, e vários monumentos foram erguidos em sua honra, destacando-se o grande Monumento a Camões instalado em 1867 na Praça Luís de Camões, em Lisboa, de autoria de Victor Bastos, e que é o centro de cerimónias públicas oficiais e manifestações populares.\n[…]\nA fama de Camões iniciou a expandir-se através de Espanha, onde teve vários admiradores desde o século XVI, aparecendo duas traduções d'Os Lusíadas em 1580, ano da morte do poeta, impressas possivelmente a mando de Filipe II de Espanha, então rei também de Portugal. No título da edição de Luis Gómez de Tápia, Camões já é citado como \"famoso\", e na de Benito Caldera ele foi comparado a Virgílio, e dito quase digno de igualar Homero.\n[…]\nReunida em Macau em 1999, a Organização Mundial de Poetas homenageou o espírito universalista de Luís de Camões, celebrando-o como um autor que ultrapassou barreiras temporais e nacionais.\n[…]\nEntre as obras recentes dedicadas a Luís de Camões contam-se Fortuna, caso, tempo e sorte: biografia de Luís Vaz de Camões (2024), de Isabel Rio Novo, apresentada em junho de 2024 e assinalada pelo Camões, I.P. como um contributo relevante para a reconstituição biográfica do poeta, e O livro do império (2018), de João Morgado, romance biográfico centrado em Camões e na escrita e publicação de Os Lusíadas. que apresenta como \"livro político.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Albert Luthuli",
      "descricao": "Presidente do Congresso Nacional Africano e líder antiapartheid sul-africano, laureado com o Nobel da Paz de 1960."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que prêmio internacional une os sul-africanos Albert Luthuli, Desmond Tutu e Nelson Mandela?",
    "resposta": "Nobel da Paz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Albert_Luthuli",
      "https://en.wikipedia.org/wiki/List_of_Nobel_Peace_Prize_laureates"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Albert_Luthuli",
        "situacao": "ok",
        "texto": "Albert John Luthuli (c. 1898 – 21 July 1967) was a South African anti-apartheid activist, traditional leader, and politician who served as the President-General of the African National Congress from 1952 until his assassination in 1967.\n[…]\nIn December 1952, Albert Luthuli was elected president general of the ANC with the support of the ANC Youth League (ANCYL) and African communists. Nelson Mandela was elected as his deputy. The ANCYL's support for Luthuli reflected its desire for a leader who would enact its programmes and goals, and marked a pattern of younger, more militant members within the ANC ousting presidents they deemed inflexible.\n[…]\nThe Nobel Prize transformed Luthuli from being relatively unknown to a global celebrity. He received congratulatory letters from leaders of 25 countries, including U.S. President John F. Kennedy. In Groutville, journalists lined up to interview Luthuli who dedicated the award to the ANC and expressed gratitude to his wife Nokukhanya. He also used his newfound status as a global podium, and he pleaded to the UN and South Africa's trading partners to impose sanctions on Verwoerd's government.\n[…]\nWhile travelling to Oslo to receive his Nobel Peace Prize in 1964, King stopped in London to give an \"Address on South African Independence.\" The audience included Luthuli's exiled compatriots, citizens of different African countries, and human rights advocates from India, Pakistan, the West Indies, and the United States.\n[…]\nDuring King's Nobel Peace Prize acceptance speech on 10 December 1964, Luthuli received a special mention. King called Luthuli a \"pilot\" of the freedom movement and claimed South Africa was the \"most brutal expression of man's inhumanity to man\"."
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Nobel_Peace_Prize_laureates",
        "situacao": "ok",
        "texto": "The Norwegian Nobel Committee awards the Nobel Peace Prize annually \"to the person who shall have done the most or the best work for fraternity between nations, for the abolition or reduction of standing armies and for the holding and promotion of peace congresses.\" As dictated by Alfred Nobel's will, the award is administered by the Norwegian Nobel Committee and awarded by a committee of five peo\n[…]\nThe Peace Prize is presented annually in Oslo, in the presence of the King of Norway, on 10 December, the anniversary of Nobel's death, and is the only Nobel Prize not presented in Stockholm. Unlike the other prizes, the Peace Prize is occasionally awarded to an organisation (such as the International Committee of the Red Cross, a three-time recipient) rather than an individual.\n[…]\nThe International Committee of the Red Cross has received the most Nobel Peace Prizes, having been awarded the Prize three times for its humanitarian work.\n[…]\nAs of 2025, the Peace Prize has been awarded to 114 individuals and 28 organizations. Twenty women have won the Nobel Peace Prize, more than any other Nobel Prize. Only two recipients have won multiple Peace Prizes: the International Committee of the Red Cross has won three times (1917, 1944 and 1963) and the Office of the United Nations High Commissioner for Refugees has won twice (1954 and 1981). There have been 19 years in which the Peace Prize was not awarded.\n[…]\nList of Nobel laureates\n[…]\nList of organizations nominated for the Nobel Peace Prize\n[…]\nList of individuals nominated for the Nobel Peace Prize (1900–1999) and (2000–present)\n[…]\nL Machado gave her medal to U.S. President Donald Trump, though this is not recognized since \"a Nobel Prize can neither be revoked, shared, nor transferred to others. Once the announcement has been made, the decision stands for all time.\"\n[…]\nThe Nobel Peace Prize: Official website Archived 2 December 2023 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Albert_Lutuli",
        "situacao": "ok",
        "texto": "Albert John Mvumbi Lutuli (Rodésia do Sul, c. 1898 — Cuaducuza, 21 de julho de 1967) foi um professor, líder religioso e político da África do Sul, ativista anti-apartheid, presidiu o Congresso Nacional Africano (CNA) de 1952 até sua morte.\n[…]\nFoi laureado com o Nobel da Paz de 1961, por sua luta não-violenta contra o regime sul-africano.\n[…]\nEm 1928 tornou-se secretário da Associação Africana de Professores, e em 1933 seu presidente.\n[…]\nCom a morte de John Langalibalele Dube em 1946, Lutuli candidata-se à sua sucessão, procurando dotar o Conselho de Representação dos Nativos de maior coerência nas ações, até então dividido em disputas internas. É derrotado, contudo, por Selby Msimang; quando a instituição já estava quase acabada, em 1948, Lutuli é feito seu presidente.\n[…]\nMesmo sofrendo pena de restrição, foi autorizado a sair do país para que, em dezembro de 1961, fosse até Oslo receber o Prêmio Nobel da Paz, numa situação que o jornal Die Transvaler, de orientação conservadora e segregacionista, qualificou como um \"inexplicável fenômeno patológico\" por parte do parlamento norueguês. Na premiação Lutuli compareceu usando o tradicional chapéu de chefe tribal, e surpreendeu a plateia, ao final, entoando a canção Nkosi Sikelel' iAfrika.\n[…]\nMesmo com a oposição de Nelson Mandela, defendeu o ingresso de não-negros no CNA, que se deu em 1954 com a criação do Congresso do Povo; em sua presidência proibiu que a instituição adotasse a resistência armada ao regime; com o massacre de Sharpeville, contudo, deu carta-branca a Mandela para que este criasse um braço armado, desde que não houvesse vinculação com o Congresso, o que ocorreu com a criação do Lança da Nação, em 1961.\n[…]\n«Perfil no sítio oficial do Nobel da Paz 1960» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Amílcar Cabral",
      "descricao": "Líder anticolonial que fundou o partido da independência da Guiné-Bissau e de Cabo Verde, assassinado em 1973."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Sob a liderança de Amílcar Cabral, que país insular africano lutou pela independência no mesmo partido que a Guiné-Bissau?",
    "resposta": "Cabo Verde",
    "fonte": [
      "https://en.wikipedia.org/wiki/Am%C3%ADlcar_Cabral",
      "https://en.wikipedia.org/wiki/African_Party_for_the_Independence_of_Guinea_and_Cape_Verde"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Am%C3%ADlcar_Cabral",
        "situacao": "ok",
        "texto": "Amílcar Lopes Cabral (Portuguese: [ɐˈmilkaɾ ˈlɔpɨʃ kɐˈbɾal]; (1924-09-12)12 September 1924 – (1973-01-20)20 January 1973) was a Bissau-Guinean and Cape Verdean agricultural engineer, political organizer, diplomat, and half-brother of Luís Cabral. He was widely remembered as one of Africa's foremost anti-colonial leaders. He was also a pan-Africanist and intellectual nationalist revolutionary poet.\n[…]\nIn 1956, he was the founder of the PAIGC or Partido Africano da Independência da Guiné e Cabo Verde (African Party for the Independence of Guinea and Cape Verde). He was also one of the founding members of Movimento Popular Libertação de Angola (MPLA) later in the same year, together with Agostinho Neto, whom he met in Portugal, and other Angolan nationalists.\n[…]\nLater on 25 April 1974, the Carnation Revolution coup was carried out in Portugal, which was followed by a cease-fire in the various battle fronts and eventually by the independence of all of Portugal's former colonies in Africa. Cabral was assassinated prior to the independence of the Portuguese colonies in Africa and therefore died before he could see his homelands of Cape Verde and Guinea Bissau gain independence from Portugal.\n[…]\nAuthor António Tomás wrote a biography of Amílcar Cabral, entitled O Fazedor de Utopias: Uma Biografia de Amílcar Cabral, which offers an extensive overview of Amílcar's life in narrative form. It features a detailed account of Amílcar's family history in Portuguese. A large number of photographs were taken of him, and the work of the independence movement in Guinea-Bissau, by the Italian photographer Bruna Polimeni. These have been exhibited in Cape Verde, Portugal and Italy.\n[…]\nThe documentary film Cabralista, winner of the CVIFF (Cape Verde International Film Festival) prize for best documentary in 2011, puts Amílcar Cabral's political views and ideologies in the spotlight."
      },
      {
        "url": "https://en.wikipedia.org/wiki/African_Party_for_the_Independence_of_Guinea_and_Cape_Verde",
        "situacao": "ok",
        "texto": "The African Party for the Independence of Guinea and Cape Verde (Portuguese: Partido Africano para a Independência da Guiné e Cabo Verde, PAIGC) is a political party in Guinea-Bissau. Originally formed to peacefully campaign for independence from Portugal, the party turned to armed conflict in the 1960s and was one of the belligerents in the Guinea-Bissau War of Independence.\n[…]\nThe PAIGC also governed Cape Verde, from its independence in 1975 to 1980. After the 1980 coup d'état in Guinea-Bissau, the Cape Verdean branch of the PAIGC was converted into a separate party, the African Party for the Independence of Cape Verde.\n[…]\nThe party was established in Bissau on 19 September 1956 as the African Party of Independence (Partido Africano da Independência), and was based on the Movement for the National Independence of Portuguese Guinea (Movimento para Independência Nacional da Guiné Portuguesa) founded in 1954 by Henri Labéry and Amílcar Cabral. The party had six founding members; Cabral, his brother Luís, Aristides Pereira, Fernando Fortes, Júlio Almeida and Elisée Turpin.\n[…]\nRafael Paula Barbosa became its first president, whilst Amílcar Cabral was appointed secretary-general.\n[…]\nAfter achieving independence, the PAIGC was instituted as the sole legal political party of Guinea-Bissau and Cape Verde, with Luís Cabral becoming President of Guinea-Bissau. A second set of one-party elections were held in 1976 and 1977. Although the PAIGC strove for a union between Guinea-Bissau and Cape Verde, the union finally broke down following a military coup led by João Bernardo Vieira against Luís Cabral in November 1980.\n[…]\nThe Cape Verdean branch of PAIGC was subsequently converted into a separate party, the African Party for the Independence of Cape Verde (PAICV).\n[…]\nLiberated Zones (Guinea-Bissau) – territory controlled by the PAIGC\n[…]\nDecolonization of Africa"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Am%C3%ADlcar_Cabral",
        "situacao": "ok",
        "texto": "Amílcar Lopes da Costa Cabral GColL (Bafatá, Guiné Portuguesa, actual Guiné-Bissau, 12 de setembro de 1924 – Conacri, 20 de janeiro de 1973) foi um político, agrónomo e teórico marxista da Guiné-Bissau e de Cabo Verde.\n[…]\nFilho de Juvenal Lopes Cabral (cabo-verdiano), professor, e de Iva Pinhel Évora (caboverdiana natural da ilha de Santiago) nasceu em Bafatá, Guiné-Bissau, onde o seu pai foi colocado à época, como professor.\n[…]\nEm 1959 juntamente com Aristides Pereira, seu irmão Luís Cabral, Fernando Fortes, Júlio de Almeida e Elisée Turpin, funda o partido clandestino Partido Africano para a Independência da Guiné e Cabo Verde (PAIGC). Em 3 de agosto de 1959, o partido teve participação na greve de trabalhadores do porto de Pidjiguiti, fortemente reprimida pelo governo colonial, resultando na morte de 50 manifestantes e no ferimento de outras centenas.\n[…]\nEm 1970, Amílcar Cabral, fazendo-se acompanhar de Agostinho Neto e Marcelino dos Santos, é recebido pelo Papa Paulo VI em audiência privada. Em 21 de novembro do mesmo ano, o Governador português da Guiné-Bissau determina o início da Operação Mar Verde, com a finalidade de capturar ou mesmo eliminar os líderes do PAIGC, então aquartelados em Conacri. A operação não teve sucesso.\n[…]\n\"Nós, em princípio, o nosso problema não é o de nos desligarmos do povo português. Se porventura em Portugal houvesse um regime que estivesse disposto a construir não só o futuro e o bem-estar do povo de Portugal mas também o nosso, mas em pé de absoluta igualdade, quer dizer que o Presidente da República pudesse ser de Cabo Verde, da Guiné, como de Portugal, etc., que todas as funções estatais, administrativas, etc.\n[…]\nAlguns Princípios do Partido, Amilcar Cabral",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Zanzibar",
      "descricao": "Arquipélago na costa da Tanzânia, antigo sultanato e centro do comércio suaíli de especiarias e escravizados."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que astro do rock britânico nasceu em 1946 em Zanzibar, na costa da atual Tanzânia?",
    "resposta": "Freddie Mercury",
    "fonte": [
      "https://en.wikipedia.org/wiki/Freddie_Mercury"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Freddie_Mercury",
        "situacao": "ok",
        "texto": "Freddie Mercury (born Farrokh Bulsara; 5 September 1946 – 24 November 1991) was a British singer and songwriter who achieved global fame as the lead vocalist and pianist of the rock band Queen. Regarded as one of the greatest singers in the history of rock music, he is known for his flamboyant stage persona and four-octave vocal range. Mercury defied the conventions of a rock frontman with his the\n[…]\nElizabeth Taylor spoke of Mercury as \"an extraordinary rock star who rushed across our cultural landscape like a comet shooting across the sky\". The concert was broadcast live to 76 countries and had an estimated viewing audience of 1 billion people. The Freddie for a Day fundraiser on behalf of the Mercury Phoenix Trust takes place every year in London, with supporters of the charity including Monty Python comedian Eric Idle and Mel B of the Spice Girls.\n[…]\nOn 24 November 1997, a monodrama about Freddie Mercury's life, titled Mercury: The Afterlife and Times of a Rock God, opened in New York City. It presented Mercury in the hereafter: examining his life, seeking redemption and searching for his true self. The play was written and directed by Charles Messina and the part of Mercury was played by Khalid Gonçalves (né Paul Gonçalves) and then later, Amir Darvish.\n[…]\nFrom 4 August to 5 September 2023, an exhibition titled, Freddie Mercury: A World of His Own, saw almost 1,500 items of Mercury's, which he had given to his former partner Mary Austin, displayed at Sotheby's in New Bond Street, London before being sold across six auctions. Nearly 140,000 fans visited the exhibition, which Sotheby's had called \"the life and work of Britain's greatest rock showman of the 20th century\".\n[…]\nJones, Lesley-Ann (2011), Freddie Mercury: The Definitive Biography, London: Hachette UK, ISBN 9781444733709\n[…]\nFreddie Mercury discography at Discogs\n[…]\nFreddie Mercury at AllMusic\n[…]\nFreddie Mercury at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Freddie_Mercury",
        "situacao": "ok",
        "texto": "Farrokh Bulsara (Cidade de Pedra, 5 de setembro de 1946 – Londres, 24 de novembro de 1991), mais conhecido pelo nome artístico Freddie Mercury, foi um cantor, pianista e compositor britânico, conhecido pelo seu trabalho com a banda britânica de rock Queen, que integrou como vocalista de 1970 até o ano de sua morte, 1991. É considerado como um dos maiores cantores de todos os tempos.\n[…]\nFreddie Mercury, com seu verdadeiro nome Farrokh Bulsara, nasceu na colônia britânica Cidade de Pedra, em Zanzibar (hoje parte da Tanzânia), primeiro filho de Bomi e Jer Bulsara, parsis zoroastrianos de Guzerate, na Índia. A família Bulsara se mudou da Índia para Zanzibar para que Bomi pudesse manter seu emprego no Banco Colonial Inglês, e lá o casal também teve sua segunda filha, Kashmira.\n[…]\nO popular cantor David Bowie, que já gravou e se apresentou com o Queen, se referiu a Mercury dizendo que \"dentre todos os cantores teatrais de rock, ele foi o único a levar tudo a um outro nível [...] era alguém que podia, literalmente, ter a plateia na palma da mão\". O guitarrista Brian May declarou que Freddie \"conseguia fazer a última pessoa na última fileira do estádio se sentir incluída\".\n[…]\nEm novembro de 1997, um monodrama baseado na vida de Mercury, o Mercury: The Afterlife and Times of a Rock God, estreou em Nova Iorque, nos Estados Unidos. A peça apresenta \"Freddie\", interpretado por Khalid Gonçalves, examinando sua vida, em um texto de Charles Messina. Billy Squier abria a peça interpretando a canção acústica \"I Have Watched You Fly\", que ele escreveu.\n[…]\nEm setembro de 2012, foi lançado em DVD e Blu-ray pela Eagle Rock Entertainment, o documentário Freddie Mercury: The Great Pretender, exibido no mesmo ano pela rede britânica BBC One, e vencedor de um Emmy Internacional de melhor programa artístico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Império do Mali",
      "descricao": "Império da África Ocidental que dominou o Sahel do século treze ao dezesseis, famoso pelo ouro e por Tombuctu."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que viajante marroquino do século quatorze visitou o Império do Mali e deixou um relato sobre a sua corte?",
    "resposta": "Ibn Battuta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ibn_Battuta",
      "https://en.wikipedia.org/wiki/Mali_Empire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ibn_Battuta",
        "situacao": "ok",
        "texto": "Ibn Battuta (; 24 February 1304 – 1368/1369) was a Maghrebi Muslim traveller, explorer, and scholar from Tangier, Morocco. Over a 30-year period (1325-1354) he visited much of Africa, Asia, and the Iberian Peninsula. Near the end of his life, Ibn Battuta dictated an account of his journeys, titled A Gift to Those Who Contemplate the Wonders of Cities and the Marvels of Travelling, commonly known a\n[…]\nIbn Battuta's account of Orhan:\n[…]\nIbn Battuta first sailed for 21 days to a place called \"Mul Jawa\" (island of Java or Majapahit Java) which was a centre of a Hindu empire. The empire spanned 2 months of travel, and ruled over the country of Qaqula and Qamara. He arrived at the walled city named Qaqula/Kakula, and observed that the city had war junks for pirate raiding and collecting tolls and that elephants were employed for various purposes. He met the ruler of Mul Jawa and stayed as a guest for three days.\n[…]\nHe described floating through the Grand Canal on a boat watching crop fields, orchids, merchants in black silk, and women in flowered silk and priests also in silk. In Beijing, Ibn Battuta referred to himself as the long-lost ambassador from the Delhi Sultanate and was invited to the Yuan imperial court of Emperor Huizong (who according to Ibn Battuta was worshipped by some people in China).\n[…]\nFrom there, Ibn Battuta travelled southwest along a river he believed to be the Nile (it was actually the Niger River), until he reached the capital of the Mali Empire. There he met Mansa Suleyman, king since 1341. Ibn Battuta disapproved of the fact that female slaves, servants, and even the daughters of the sultan went about exposing parts of their bodies not befitting a Muslim.\n[…]\nList of places visited by Ibn Battuta\n[…]\nThe Longest Hajj: The Journeys of Ibn Battuta – Saudi Aramco World article by Douglas Bullis (July/August 2000).\n[…]\nWorks by Ibn Battuta at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mali_Empire",
        "situacao": "ok",
        "texto": "The Mali Empire was an empire in West Africa from c. 1235 to 1610. The empire was founded by Sundiata Keita (c. 1214 – c. 1255) and became renowned for the wealth of its monarchs, especially Mansa Musa (Musa Keita). At its peak, Mali was the largest empire in West Africa, widely influencing the culture of the region through the spread of its language, laws, and customs.\n[…]\nMuch of the recorded information about the Mali Empire comes from 14th century Tunisian historian Ibn Khaldun, 14th century Moroccan traveller Ibn Battuta and 16th century Andalusian traveller Leo Africanus. The other major source of information comes from Mandinka oral tradition, as recorded by storytellers known as griots. Imperial Mali is also known through the account of Shihab al-'Umari, written in about 1340 by a geographer-administrator in Mamluk Egypt.\n[…]\nCopper was also a valued commodity in imperial Mali. According to Ibn Battuta, copper was mined from Takedda in the north and traded by the bar in the south for gold. Contemporary sources claim 60 copper bars traded for 100 dinars of gold. The Akan would trade gold for two thirds its weight in copper. Copper was also traded to Benin, Ife and Nri.\n[…]\nWhile spears and bows were the mainstay of the infantry, swords and lances of local or foreign manufacture were the choice weapons of the cavalry. Ibn Battuta comments on festival demonstrations of swordplay before the mansa by his retainers including the royal interpreter. Another common weapon of Mandekalu warriors was the poison javelin used in skirmishes. Imperial Mali's horsemen also used iron helmet and mail armour for defence as well as shields similar to those of the infantry.\n[…]\nBamana Empire\n[…]\nIbn Battuta: Travels in Asia and Africa 1325–1354 – excerpts from H. A. R. Gibb's translation\n[…]\n\"The Empire of Mali, In Our Time – BBC Radio 4\". bbc.co.uk. Retrieved 29 October 2015."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ibne_Batuta",
        "situacao": "ok",
        "texto": "Ibne Batuta, nascido em Tânger, no Marrocos, em 24 de fevereiro de 1304, e morto em 1368 ou 1369, foi um viajante muçulmano marroquino com formação jurídica. Estudou o direito maliquita, deixou sua cidade aos 21 anos e passou quase três décadas em viagem. Entre 1325 e 1354, atravessou grande parte da África e da Ásia, além da Península Ibérica, num itinerário tradicionalmente calculado em cerca de\n[…]\nA viagem nasceu de uma peregrinação a Meca, mas Ibne Batuta não voltou para casa quando o rito terminou. Seguiu pelas rotas terrestres e marítimas do Norte da África, do Oriente Médio, da África Oriental e da Ásia. A narrativa também o leva até a China, numa das etapas mais discutidas de seu percurso. Depois de voltar ao Marrocos, visitou o reino muçulmano de Granada e cruzou o Saara até o Império do Mali.\n[…]\nEm 1976, a União Astronómica Internacional aprovou o nome Ibn Battuta para uma cratera lunar de 11,51 quilômetros de diâmetro.\n[…]\nO Ibn Battuta Mall, em Dubai, nos Emirados Árabes Unidos, é o maior centro comercial temático da cidade e recebeu o nome do viajante. O edifício tem áreas concebidas para recriar as terras que ele percorreu, além de conjuntos de estátuas com cenas de sua vida.\n[…]\nO docudrama em formato IMAX Journey to Mecca: In the Footsteps of Ibn Battuta dramatiza a primeira peregrinação do viajante, de Tânger a Meca, em 1325–1326, e a contrapõe a imagens documentais da haje filmadas no século XXI.\n[…]\nO Google celebrou o 708.º aniversário de Ibne Batuta em 25 de fevereiro de 2012 com um doodle dedicado a suas viagens. O viajante também aparece na animação infantil Xavier Riddle and the Secret Museum, no episódio I Am Ibn Battuta; I Am Beulah Louise Henry, em que ajuda o personagem Brad a terminar uma história em quadrinhos.\n[…]\nAmade ibne Fadlane, viajante e diplomata árabe do século X\n[…]\nLiteratura de viagem, gênero ao qual pertencem a rihla e outros relatos de viajantes",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Império do Mali",
      "descricao": "Império da África Ocidental que dominou o Sahel do século treze ao dezesseis, famoso pelo ouro e por Tombuctu."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que herói, celebrado numa epopeia cantada pelos griôs, fundou o Império do Mali no século treze?",
    "resposta": "Sundiata Keita",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sundiata_Keita",
      "https://en.wikipedia.org/wiki/Mali_Empire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sundiata_Keita",
        "situacao": "ok",
        "texto": "Sundiata Keita (Mandinka, Malinke: [sʊndʒæta keɪta]; c. 1217 – c. 1255, N'Ko spelling: ߛߏ߲߬ߖߘߊ߬ ߞߋߕߊ߬; also known as Manding Diara, Lion of Mali, Sogolon Djata, son of Sogolon, Nare Maghan and Sogo Sogo Simbon Salaba) was a prince and founder of the Mali Empire. He was also the great-uncle of the Malian ruler Mansa Musa, who is regarded as the wealthiest person of all time, although there are no r\n[…]\nAlthough the conquered states were answerable to the Mansa (king) of Mali, Sundiata was not an absolute monarch despite what the title implies. Though he probably wielded popular authority, the Mali Empire was reportedly run like a federation with each tribe having a chief representative at the court. The first tribes were Mandinka clans of Traore, Kamara, Koroma, Konde (or Conde), and of course Keita.\n[…]\nA strong army was a major contributor to the success of Imperial Mali during the reign of Mansa Sundiata Keita. Credit to Mali's conquests cannot all be attributed to Sundiata Keita but equally shared among his generals, and in this, Tiramakhan Traore stood out as one of the elite generals and warlords of Sundiata's Imperial Mali.\n[…]\nIt was during his reign that Mali first began to become an economic power, a trend continued by his successors and improved on thanks to the ground work set by Sundiata, who controlled the region's trade routes and gold fields. The social and political constitution of Mali were first being codified during the reign of Mansa Sundiata Keita.\n[…]\nSundiata Keita was not merely a conqueror who was able to rule over a large empire with different tribes and languages, but also developed Mali's mechanisms for agriculture, and is reported to have introduced cotton and weaving in Mali. Towards the end of his reign, \"absolute security\" is reported to have \"prevailed throughout his dominion.\"\n[…]\nThe True Lion King of Africa: The Epic History of Sundiata, King of Old Mali"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mali_Empire",
        "situacao": "ok",
        "texto": "The Mali Empire was an empire in West Africa from c. 1235 to 1610. The empire was founded by Sundiata Keita (c. 1214 – c. 1255) and became renowned for the wealth of its monarchs, especially Mansa Musa (Musa Keita). At its peak, Mali was the largest empire in West Africa, widely influencing the culture of the region through the spread of its language, laws, and customs.\n[…]\nThe first ruler for which there is accurate written information is Sundiata Keita, a warrior-prince of the Keita dynasty who was called upon to free the local people from the rule of the king of the Sosso Empire, Soumaoro Kanté. The conquest of Sosso in c. 1235 marked the emergence of Mali as a major power, with the Kouroukan Fouga as its constitution.\n[…]\nFollowing the death of Sundiata Keita, in c. 1255, the kings or emperors of Mali were referred to by the title mansa. In 1285, Sakura, a former slave of the imperial family who had risen to the rank of general, carried out a military coup. After his death, the lineage of the Keita dynasty was restored with the accession of Mansa Gao (c. 1300–1305). Mansa Musa took the throne in c. 1312.\n[…]\nKangaba became the last refuge of the Keita royal family after the collapse of the Mali Empire, and so has for centuries been associated with Sundiata in the cultural imagination of Mande peoples. If Dakajalan was, in fact, situated near Kangaba, this may also have contributed to their conflation, beginning with Delafosse's speculation that the latter may have begun as a suburb of the former.\n[…]\nDjibril Tamsir Niane has advanced the claim that, based on some griot accounts, the Keita dynasty claims descent from a man called \"Lawalo\", whom Niane claim was one of the sons of Bilal, the faithful muezzin of Islam's prophet Muhammad. The original epos, however, tends to portray Sundiata as a powerful sorcerer and hunter, rather than a devout Muslim."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sundiata_Queita",
        "situacao": "ok",
        "texto": "Sundiata Queita (em francês: Soundiata Keïta) foi o primeiro mansa e fundador do Império do Mali, governando de 1235 até 1255. Estabelece seu reino com a derrota de Sumangaru Cante na Batalha de Quirina de 1235. Sundiata Queita venceu Sumangaru após ter reunido vários clãs malinquês. Na ocasião de sua vitória reuniu a Grande Assembleia para preparar a chamada Carta de Curucã Fuga.\n[…]\nEpopeia de Sundiata\n[…]\n«Sundiata Keita: O lendário \"Rei Leão\" que governou o Império do Mali (DW África)»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Bolsa Rhodes",
      "descricao": "Bolsa de pós-graduação na Universidade de Oxford, criada em 1902 pelo testamento de Cecil Rhodes."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que a antiga Rodésia, na África, e uma famosa bolsa de estudos da Universidade de Oxford têm em comum?",
    "resposta": "O nome de Cecil Rhodes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rhodes_Scholarship",
      "https://en.wikipedia.org/wiki/Rhodesia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rhodes_Scholarship",
        "situacao": "ok",
        "texto": "The Rhodes Scholarship is a British-based international postgraduate award for students to study at the University of Oxford in Oxford, United Kingdom. The scholarship is open to people from all backgrounds around the world.\n[…]\nCecil Rhodes wished current scholars and Rhodes alumni (in the words of his will) to have \"opportunities of meeting and discussing their experiences and prospects\".\n[…]\nIn South Africa, the will of Cecil Rhodes expressly allocated scholarships to four all-male private schools. In 1992, one of the four schools partnered with an all-girls school in order to allow female applicants. In 2012, the three remaining schools followed suit to allow women to apply. Four of the nine scholarships allocated to South Africa are presently open only to students and alumni of these schools and partner schools.\n[…]\nA group of Rhodes Scholars also created the group Redress Rhodes whose mission was to \"attain a more critical, honest, and inclusive reflection of the legacy of Cecil John Rhodes\" and to \"make reparative justice a more central theme for Rhodes Scholars.\" Their demands include, among other things, shifting the Rhodes Scholarships awarded exclusively to previously all-white South African schools (rather than the at-large national pool), dedicating a \"space at Rhodes House for the critical engagement with Cecil Rhodes's legacy, as well as imperial history\", and ending a ceremonial toast Rhodes Scholars make to the founder.\n[…]\nR. I. Rotberg, The Founder: Cecil Rhodes and the Pursuit of Power. New York: Oxford University Press, 1988.\n[…]\nPhilip Ziegler, Cecil Rhodes, the Rhodes Trust and Rhodes Scholarships. New Haven, CT: Yale University Press, 2008.\n[…]\nBooks by former Wardens of Rhodes House, Oxford"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rhodesia",
        "situacao": "ok",
        "texto": "Rhodesia, officially the Republic of Rhodesia from 1970 onwards, was an unrecognised state in Southern Africa that existed from 1965 to 1979. Rhodesia was the de facto successor to the self-governing colony of Southern Rhodesia following its unilateral declaration of independence (UDI) from the United Kingdom in 1965. Throughout this fourteen-year period, Rhodesia faced internal conflict and polit\n[…]\nThe official name of the country, according to the constitution adopted concurrently with the UDI in November 1965, was Rhodesia, which derives from Cecil Rhodes. This was not the case under British law, however, which considered the territory's legal name to be Southern Rhodesia, the name given to the country in 1898 during the British South Africa Company's administration of the Rhodesias, and retained by the self-governing colony of Southern Rhodesia after the end of company rule in 1923.\n[…]\nThe work of journalists such as Lord Richard Cecil, son of Robert Gascoyne-Cecil, 6th Marquess of Salisbury, stiffened the morale of Rhodesians and their overseas supporters. Lord Richard produced news reports for ITN which typically contrasted the \"incompetent\" insurgents with the \"superbly professional\" government troops. A group of ZANLA fighters killed Lord Richard on 20 April 1978 when he was accompanying a Rhodesian airborne unit employed in Fire Force Operations.\n[…]\nFollowing Cecil Rhodes's dictum of \"equal rights for all civilised men\", there was an implicit, albeit not an overt, racial component to the franchise, which effectively excluded a majority of native black people from the electorate via such means as property qualifications.\n[…]\nMlombo, Abraham (2020). Southern Rhodesia–South Africa Relations, 1923–1953. doi:10.1007/978-3-030-54283-2. ISBN 978-3-030-54282-5. S2CID 226514581.\n[…]\nThe Brookings Institution : Managing Ethnic Conflict in Africa – Rhodesia/Zimbabwe"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bolsa_de_Estudos_Rhodes",
        "situacao": "ok",
        "texto": "A Bolsa de Estudos Rhodes é um prêmio internacional de pós-graduação para alunos que estudam na Universidade de Oxford. Fundada em 1903, é a bolsa de pós-graduação mais antiga do mundo. É considerado um dos programas internacionais de bolsas de estudo de maior prestígio do mundo. Seu fundador, Cecil John Rhodes, queria promover a unidade entre as nações de língua inglesa e incutir um senso de lide\n[…]\nInicialmente restrita a candidatos do sexo masculino de países que hoje fazem parte da Commonwealth, Alemanha e Estados Unidos, a bolsa agora está aberta a candidatos de todas as origens e de todo o mundo. Desde sua criação, a controvérsia cercou sua exclusão inicial das mulheres, o fracasso histórico em selecionar negros africanos e a própria posição de Cecil Rhodes como imperialista britânico.\n[…]\nO programa Rhodes era uma cópia que logo se tornou a versão mais conhecida. O Rhodes Trust estabeleceu as bolsas em 1902 sob os termos estabelecidos no testamento sexto e final de Cecil John Rhodes, datado de 1º de julho de 1899 e anexado por vários codicilos até março de 1902.\n[…]\nA bolsa de estudos de cada país varia em sua seletividade. Nos Estados Unidos, os candidatos devem primeiro passar por um processo de endosso interno da universidade e, em seguida, prosseguir para um dos 16 comitês de distritos dos EUA. Em 2020, cerca de 2.300 alunos buscaram o endosso de sua instituição para a bolsa americana Rhodes, entre os 953 de 288 instituições endossadas pela universidade, das quais 32 foram eleitos.\n[…]\nO caso da África do Sul foi especialmente difícil de resolver, porque em seu testamento estabelecendo as bolsas de estudo, ao contrário de outros constituintes, Rhodes alocou especificamente quatro bolsas para ex-alunos de quatro escolas secundárias particulares apenas para brancos.\n[…]\nDas cinco mil bolsas Rhodes concedidas entre 1903 e 1990, cerca de novecentas foram para estudantes da África.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Thomas Sankara",
      "descricao": "Militar e presidente revolucionário de Burkina Faso de 1983 a 1987, assassinado num golpe."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Pelo carisma e pelas ideias revolucionárias, o presidente Thomas Sankara, de Burkina Faso, era comparado a qual guerrilheiro latino-americano?",
    "resposta": "Che Guevara",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thomas_Sankara"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_Sankara",
        "situacao": "ok",
        "texto": "Thomas Isidore Noël Sankara (21 December 1949 – 15 October 1987) was a Burkinabé military officer, politician, Marxist and pan-Africanist revolutionary who served as the first president of Burkina Faso from 1983 until his assassination in 1987. Sankara previously served as the fifth prime minister of Upper Volta from January to May 1983.\n[…]\nSankara identified as a revolutionary and was inspired by the examples of Cuba's Fidel Castro and Che Guevara, and Ghana's military leader Jerry Rawlings. As President, he promoted the 'Democratic and Popular Revolution' (Révolution démocratique et populaire, or RDP). The ideology of the Revolution was defined by Sankara as anti-imperialist in a speech on 2 October 1983, the Discours d'orientation politique (DOP), written by his close associate Valère Somé.\n[…]\nThomas Sankara defined his program as anti-imperialist. In this respect, France became the main target of revolutionary statements. When President François Mitterrand visited Burkina Faso in November 1986, Sankara criticized the French for having received P. W. Botha, the Prime Minister of South Africa, which still enforced apartheid; and Jonas Savimbi, the leader of UNITA, in France, referring to both men as 'covered in blood from head to toe'.\n[…]\nSankara is often referred to as \"Africa's Che Guevara\". Sankara gave a speech marking and honouring the 20th anniversary of Che Guevara's 9 October 1967 execution, one week before his own assassination on 15 October 1987.\n[…]\nThomas Sankara Speaks: The Burkina Faso Revolution, 1983–87, Pathfinder Press: 1988. ISBN 0-87348-527-0.\n[…]\nSankara, Thomas (2007). Prairie, Michel (ed.). Thomas Sankara Speaks: the Burkina Faso Revolution: 1983–87. Pathfinder.\n[…]\nBurkina Faso's Pure President by Bruno Jaffré.\n[…]\nThomas Sankara Former Leader of Burkina Faso by Désiré-Joseph Katihabwa."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thomas_Sankara",
        "situacao": "ok",
        "texto": "Thomas Isidore Noël Sankara (21 de dezembro de 1949 – 15 de outubro de 1987) foi um oficial militar burquinês, revolucionário marxista e pan-africanista que serviu como Presidente de Burquina Fasso a partir de 1983, após assumir o poder em um golpe, até o seu assassinato em 1987.\n[…]\nAo longo de seus quatro anos no poder, Sankara pregou autossuficiência econômica de Burquina Fasso.\n[…]\nNascido em Yako, então Alto Volta, Thomas Isidore Noël Sankara era o terceiro de doze filhos da mossi Marguerite Sankara e do fula Sambo Joseph Sankara. O casamento entre membros desses grupos resultou na etnia Silmi-Mossi, que se situava em uma posição desfavorável dentro do sistema de castas mossi.\n[…]\nO regime sofria com os excessos e falhas do Comitês de Defesa da Revolução, ainda que o próprio Sankara fosse o primeiro a denunciar os diversos abusos dos CDR.\n[…]\nOs golpistas alegaram ter colocado \"fim ao regime autocrático de Thomas Sankara\", o qual teria desviado o rumo da revolução de 1983, conduzindo o país a um processo de restauração neocolonial. Após o golpe e embora se soubesse que Sankara estava morto, alguns CDRs (Comités de Défense de la Révolution) montaram uma resistência armada ao exército durante vários dias. Confrontos entre os golpistas e tropas leais aos ideais de Sankara resultaram na morte de aproximadamente 100 pessoas.\n[…]\nÍcone de muitos africanos na década de 1980, Thomas Sankara permanece como uma espécie de herói africano mesmo após sua morte, algumas vezes comparado a figura de Che Guevara. É tido como um dos grandes lideranças africanas do século XX, ao lado de outros figuras como Kwame Nkrumah, Patrice Lumuba, Samora Machel, Eduardo Mondlane, Amílcar Cabral, Steve Biko e Nelson Mandela.\n[…]\n«Thomas Sankara: O líder visionário (DW África)»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Luanda",
      "descricao": "Capital de Angola, fundada pelos portugueses em 1576 e ocupada pelos holandeses de 1641 a 1648."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1648, uma armada comandada por Salvador Correia de Sá retomou Luanda dos holandeses. De que cidade brasileira ela partiu?",
    "resposta": "Rio de Janeiro",
    "distratores": [
      "Salvador",
      "Santos",
      "São Luís"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Salvador_Correia_de_S%C3%A1",
      "https://en.wikipedia.org/wiki/Luanda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Salvador_Correia_de_S%C3%A1",
        "situacao": "ok",
        "texto": "Salvador Correia de Sá e Benevides (1594 – 1 January 1688) was a Portuguese admiral and crown administrator. In 1625 he fought the Dutch invasion of Salvador in Brazil and regained Angola and São Tomé Island from the Dutch in 1647. He was the governor of Rio de Janeiro, parts of Southern Brazil and Angola.\n[…]\nSalvador Correia de Sá was born in the family of the Sás, being the great-grandson of Mem de Sá, third Governor-General of Brazil, and of Estácio de Sá, founder of the city of Rio de Janeiro. In 1625 he fought the Dutch invasion of Salvador, joining a combined Spanish and Portuguese fleet of fifty-two ships that regained the control of the former capital of Brazil. He became governor of the Rio de Janeiro captaincy in 1637.\n[…]\nBoxer, Charles R.: Salvador de Sá and the struggle for Brazil and Angola, 1602-1686, Greenwood Press, 1975, ISBN 0837174112\n[…]\nCardozo, Manoel. \"Notes for a Biography of Salvador Correia de Sá e Benavides, 1594-1688.\" The Americas 7, no. 2 (1950), 135-170.\n[…]\nDutra, Francis A. \"Salvador correia de Sá e Benavides\" in Encyclopedia of Latin American History and Culture, vol. 5, p. 2. New York: Charles Scribner's Sons 1996.\n[…]\nNorton, Luis. A dinastia dos Sás no Brasil, 1558-1662. 2nd. ed. 1965.\n[…]\nRibeiro de Lessa, Clado. Salvador Correia de Sá e Benavides: vida e feitos principalmente no Brasil. 1940/"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Luanda",
        "situacao": "ok",
        "texto": "Luanda is the capital and largest city of Angola. It is Angola's primary port, and its major industrial, cultural and urban centre. Located on Angola's northern Atlantic coast, Luanda is Angola's administrative centre, its chief seaport, and also the capital of the Luanda Province. Luanda and its metropolitan area is the most populous Portuguese-speaking national capital in the world and the most \n[…]\nAmong the oldest colonial cities of Africa, Luanda was founded in January 1576 as São Paulo da Assunção de Loanda by Portuguese explorer Paulo Dias de Novais, being occasionally called \"Leonda\" or \"St Paul de Leonda\" by non-Portuguese sources. The city served as the centre of the slave trade to Brazil before the institution was prohibited.\n[…]\nPortuguese explorer Paulo Dias de Novais founded Luanda on 25 January 1576 as \"São Paulo da Assumpção de Loanda\". He had brought one hundred families of settlers and four hundred soldiers. Most of the Portuguese community lived within the fort. Several sources from as early as the 17th century called the city \"St. Paul de Leonda\".\n[…]\nLuanda is the seat of a Roman Catholic archbishop. It is also the location of most of Angola's educational institutions, including the private Catholic University of Angola and the public University of Agostinho Neto. It is also the home of the colonial Governor's Palace and the Estádio da Cidadela (the \"Citadel Stadium\"), Angola's main stadium, with a total seating capacity of 60,000.\n[…]\nLuanda International School\n[…]\nUniversity of Luanda\n[…]\nHigher Institute of Education Sciences of the Luanda\n[…]\nIn 2013 Luanda together with Namibe, today's Moçâmedes, hosted the 2013 FIRS Men's Roller Hockey World Cup, the first time that a World Cup of roller hockey was held in Africa. The city is home to the Desportivo do Bengo football club.\n[…]\nLuanda is twinned with:\n[…]\nPortal da Cidade de Luanda\n[…]\nwww.cidadeluanda.com - Luanda, city map, History, Photos"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Salvador_Correia_de_S%C3%A1_e_Benevides_%28militar%29",
        "situacao": "ok",
        "texto": "Salvador Correia de Sá y Benevides, o Moço (Cádis, 1602-1688) foi um militar do império ultramarino português que, durante a Guerra da Restauração, ao serviço do reino de Portugal, se destacou no comando da frota que, em 1647, reconquistou Angola e São Tomé e Príncipe, terminando a ocupação holandesa da armada de Witte de With.\n[…]\nA organização da armada portuguesa de defesa do Brasil se dividia desigualmente entre Recife e Rio de Janeiro, estando a capitania do Rio de Janeiro protegida por um único navio e 80 homens, comandado por Salvador Correia de Sá e Benevides, que partiu de Lisboa para este destino no dia 19 de agosto de 1624.\n[…]\nEm 1662, superou a chamada Revolta da Cachaça, no Rio de Janeiro.\n[…]\nSeu parente Duarte Correia Vasqueanes governou o Rio de Janeiro entre 1645 e 1648. Salvador, chegando ao Rio, se ocupou da armada que partiria para Angola, preparando mantimentos e completando as guarnições dos navios. Ficou no Governo da cidade entre janeiro e maio de 1648 e durante este tempo ainda enviou ao governador-geral na Bahia uma embarcação de mantimentos e despachou três navios com sal para a ilha de Santa Ana, onde deveriam ser preparadas as carnes para a viagem.\n[…]\nEm 1659, estando em Lisboa, Salvador se preparava para comandar uma expedição para voltar a ocupar seu posto de Governador de todas as Capitanias do Sul do Brasil, do Rio de Janeiro até Santa Catarina, sem nenhuma dependência do governador-geral, tendo tomado posse em 2 de setembro de 1659, ficando sob sua administração quase metade do Brasil. Partiu com reforços de gente e munições que obteve em Portugal e governou as Capitanias do Sul entre 1660 e 1662.\n[…]\nSalvador Correia de Sá e Benevides, faleceu no dia 1 de Janeiro de 1688 e jaz sepultado na sacristia do Convento dos Carmelitas Descalços de Nossa Senhora dos Remédios, em Lisboa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Batalha de Adwa",
      "descricao": "Vitória do Império Etíope sobre o exército italiano em 1º de março de 1896."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1896, que imperador etíope comandou a vitória sobre o exército italiano na Batalha de Adwa?",
    "resposta": "Menelik II",
    "fonte": [
      "https://en.wikipedia.org/wiki/Battle_of_Adwa",
      "https://en.wikipedia.org/wiki/Menelik_II"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_Adwa",
        "situacao": "ok",
        "texto": "The Battle of Adwa was the climactic battle of the First Italo-Ethiopian War. It was fought on 1 March 1896, near the town of Adwa between the Ethiopian Empire under Emperor Menelik II and an Italian colonial force led by General Oreste Baratieri.\n[…]\nThe Italian diplomats claimed that the original Amharic text included the clause and that Menelik II knowingly signed a modified copy of the Treaty.\n[…]\nBy late 1895, Italian forces had advanced deep into Ethiopian territory and occupied much of Tigray. In September 1895, Menelik issued an awaj, a formal call to arms addressed to the entire Ethiopian population, mobilising the provincial forces that would form the army at Adwa. On 7 December 1895, Ras Makonnen Wolde Mikael, Fitawrari Gebeyehu and Ras Mengesha Yohannes commanding a larger Ethiopian group of Menelik's vanguard annihilated a small Italian unit at the Battle of Amba Alagi.\n[…]\nRas Alula Engida, however, favored pursuing the invaders northward and expelling them permanently from the Eritrean colony. Menelik feared that Italy might dispatch a larger force than the one defeated at the Battle of Adwa; moreover, the Italian positions in Asmara and Massawa appeared too well fortified for further offensives. The imperial army, described as \"at the end of its rope,\" could not sustain further campaigning in Eritrea.\n[…]\nThe officer responsible for the massacre was reportedly imprisoned by Menelik.\n[…]\nOf particular note are Ejigayehu Shibabaw's ballad dedicated to the Battle of Adwa and Teddy Afro's popular song \"Tikur Sew\", which literally translates to \"black man or black person\" – a poetic reference to Emperor Menelik II's decisive African victory over Europeans, as well as the Emperor's darker skin complexion.\n[…]\nAdwa Zero KM Project"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Menelik_II",
        "situacao": "ok",
        "texto": "Menelik II (Ge'ez: ዳግማዊ ምኒልክ dagmawi mənilək; horse name Aba Dagnew (Amharic: አባ ዳኘው abba daññäw); 17 August 1844 – 12 December 1913), baptised as Sahle Maryam (ሣህለ ማርያም sahlä maryam), was king of Shewa from 1866 to 1889 and Emperor of Ethiopia from 1889 to his death in 1913. A member of the Solomonic dynasty, Menelik expanded the Ethiopian Empire to its greatest historical extent and defeated Ita\n[…]\nMenelik signed the Treaty of Wuchale with Italy in 1889; the Italian version implied a protectorate, while the Amharic allowed optional use of Italian diplomatic assistance. Recognizing this deception, Menelik formally rejected the treaty in 1891 leading to an Italian invasion in 1895. Mobilising a unified army of over 100,000, he crushed Italian forces at the Battle of Adwa on 1 March 1896, securing Ethiopia's independence and full European recognition.\n[…]\nMenelik's disagreement with Article 17 of the treaty led to the Battle of Adwa. Before the Italians could launch the invasion, Eritreans rebelled in an attempt to push the Italians out of Eritrea and prevent their invasion of Ethiopia. The rebellion was unsuccessful. However, some Eritreans managed to make their way to the Ethiopian camp and jointly fought the Italians at Adwa.\n[…]\nCrispi sent another 15,000 men to the Horn of Africa and ordered the main Italian commander, General Oreste Baratieri, to finish off the \"barbarians\". As Baratieri dithered, Menelik was forced to pull back on 17 February 1896 as his huge host was running out of food. After Crispi sent an insulting telegram accusing Baratieri of cowardice, on 28 February 1896 the Italians decided to seek battle with Menelik. On 1 March 1896, the two armies met at Adwa. The Ethiopians came out victorious.\n[…]\nEthiopian Treasures – Emperor Menelik II\n[…]\nNewspaper clippings about Menelik II in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_de_Adu%C3%A1",
        "situacao": "ok",
        "texto": "A Batalha de Aduá (Adwa), ocorreu a 1 de março de 1896 entre a Etiópia e Itália, perto da cidade de Aduá, na Etiópia.\n[…]\nA partir de 1870, a Abissínia passa a ser cobiçada pela Itália, que então procurava juntar-se às demais potências européias na corrida desenfreada pela repartição da África.\n[…]\nNo final do século XIX, todo continente africano estava sob o domínio europeu, com excepção da Etiópia e da Libéria. A Libéria havia se tornado independente em 1847 e na Etiópia, a independência foi garantida depois da Conferência de Berlim, com a vitória do exército do imperador Menelik II sobre tropas italianas na batalha de Aduá.\n[…]\nApós a Conferência de Berlim, em 26 de fevereiro de 1885, ingleses, franceses, alemães, belgas, italianos, espanhóis e portugueses já haviam conquistado e repartido entre si 90% da África.\n[…]\nEm 1895, a Etiópia foi invadida pela Itália, que pretendia anexar o país ao seu protetorado. Em 1896, os italianos subjugaram a parte oriental da região, estabelecendo a Colônia da Eritreia. No entanto, neste mesmo ano, em 1896, o exército etíope, sob a liderança de Menelique II da Abissínia, um dos grandes estadistas de história africana, que acompanhado da sua esposa, a imperatriz Taitu Bitul, derrotaram os italianos, na famosa batalha de Aduá.\n[…]\nBatalha de Isandhlwana",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Mesquita de Djinguereber",
      "descricao": "Mesquita de barro em Tombuctu, no Mali, construída no século quatorze."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Por volta de 1327, que governante do Mali mandou erguer a Mesquita de Djinguereber, em Tombuctu?",
    "resposta": "Mansa Musa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Djinguereber_Mosque"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Djinguereber_Mosque",
        "situacao": "ok",
        "texto": "The Djinguereber Mosque (Arabic: مسجد دجينجيربر; French: Mosquée de Djinguereber; from Koyra Chiini jiŋgar-ey beer 'grand mosque'), also known as Djingareyber or Djingarey Ber, is a famous learning center in Timbuktu, Mali. Built in 1327, it is one of three mosques associated with the historical community of scholars and students known today as the \"University of Timbuktu\". It was inscribed on the\n[…]\nThe design and construction of the Djinguereber mosque is traditionally credited to the Andalusi scholar Abu Ishaq Al Sahili. According to Ibn Khaldun, one of the best-known sources on 14th-century Mali, he was said to have received 12,000 mithkals of gold dust for the work.\n[…]\nThe creation of Djinguereber mosque is attributed to Mansa Musa in 1325. Its Sudano-Sahelian architecture differs stylistically from the mosques of North Africa and Andalusia.\n[…]\nThe mosque is sometimes credited to the Granadan poet Abū Isḥāq al-Sāḥilī, whom Mansa Musa brought to Mali after the 1324 hajj, but J. O. Hunwick has shown that al-Sāḥilī is firmly attested in the Arabic sources only as the designer of a royal audience chamber at the city of Mali, and that his role there appears to have been organisational rather than that of a structural architect.\n[…]\nDuring the reign of Askia Dawud of the Songhai Empire, Djinguereber mosque was renovated by the Qadi of Timbuktu Aqib ibn Mahmud beginning in 1570. The work was a source of conflict between the Askia and the Qadi, who resented the renovated mosque's association with a secular power.\n[…]\nThe Zamani Project documents cultural heritage sites in 3D to create a record for future generations. The documentation of the Djinguereber Mosque is based on terrestrial laser-scanning. The 3D documentation of the Djinguereber Mosque was carried out in 2005. A 3D model, plans and images can be viewed here.\n[…]\nLists of mosques\n[…]\nList of mosques in Egypt\n[…]\nPhotos/Pictures of Timbuktu, Mali"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mesquita_Djinguereber",
        "situacao": "ok",
        "texto": "A Mesquita Djinguereber ( em árabe: مسجد دجينجيربر; Francês: Mosquée de Djinguereber; do Koyra Chiini jiŋgar-ey beer  'grande mesquita') em Timbuctu, Mali é um famoso centro de aprendizagem do Mali.\n[…]\nConstruído em 1327 e citado como Djingareyber ou Djingarey Ber em vários idiomas, seu projeto é creditado a Abu Ishaq al-Sahili, que recebeu 200 kg (40.000 mithqals) de ouro como pagamento de Mansa Muça I do Mali, imperador do Império do Mali, de acordo com Ibne Caldune, uma das fontes mais conhecidas sobre o Mali do século XIV.\n[…]\nDjinguereber é uma das três madraças que compõem a Universidade de Timbuctu. Foi inscrito na lista do Patrimônio Mundial da UNESCO em 1988, e em 1990, foi considerado em perigo devido à invasão de areia. Um projeto de quatro anos para a restauração e reabilitação da Mesquita começou em Junho de 2006, conduzido e financiado pelo Fundo Aga Khan para a Cultura.\n[…]\nNo último Comité do Património Mundial, foi solicitado ao Estado Parte que fornecesse todos os documentos técnicos sobre o novo projeto de restauração, com a duração de 4 anos, proposto para a Mesquita Djinguereber, que seria executado pelo Fundo Aga Khan para a Cultura . No entanto, nenhum documento foi recebido e no seu relatório o Estado Parte forneceu poucos detalhes deste grande projeto.\n[…]\nO Projeto Zamani documenta locais de patrimônio cultural em 3D para criar um registro para as gerações futuras. A documentação da Mesquita Djinguereber foi feita a partir de uma digitalização a laser terrestre. A documentação 3D da Mesquita Djinguereber foi realizada em 2005. Um modelo 3D, plantas e imagens podem ser visualizados aqui.\n[…]\nFotos/Imagens de Tombuctu, Mali",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Castelo de São Jorge da Mina",
      "descricao": "Fortaleza construída pelos portugueses em 1482 na Costa do Ouro, depois usada no tráfico atlântico."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Erguido pelos portugueses em 1482, o Castelo de São Jorge da Mina fica em que país atual?",
    "resposta": "Gana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Elmina_Castle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Elmina_Castle",
        "situacao": "ok",
        "texto": "Elmina Castle, or Fort St. George, was erected by the Portuguese in 1482 as Castelo de São Jorge da Mina ('St. George of the Mine Castle'), also known as Castelo da Mina or simply Mina (or Feitoria da Mina), in present-day Elmina, Ghana, formerly the Gold Coast. It holds several profound distinctions: it was the first trading post built on the Gulf of Guinea and is the oldest extant European build\n[…]\nBecause Portuguese royalty had lost interest in African exploration as a result of meagre returns, the Guinea trade was put under the oversight of the Portuguese trader, Fernão Gomes. Upon reaching present-day Elmina, Gomes discovered a thriving gold trade already established among the natives and visiting Arab and Berber traders. He established his own trading post. It became known to the Portuguese as \"A Mina\" (the Mine) because of the gold that could be found there.\n[…]\nElmina Castle is preserved as a Ghanaian national museum. The monument was designated as a World Heritage Monument under UNESCO in 1979. It is a place of pilgrimage for many African Americans seeking to connect with their heritage.\n[…]\nScenes from a season 6 episode of the FX series Snowfall were shot in Elmina Castle. The title of the episode, \"Door of No Return\", is a reference to the symbolic door that millions of Africans were pushed through when they entered a life of slavery through castles like this.\n[…]\nElmina Castle also featured prominently in the 2015 Danish film Guldkysten (Gold Coast).\n[…]\nList of castles in Ghana\n[…]\nDutch government school of Elmina\n[…]\nHair, P. E. H. The Founding of the Castelo de São Jorge da Mina: an analysis of the sources. Madison: University of Wisconsin, African Studies Program, 1994. ISBN 0-942615-21-2\n[…]\nwww.zamaniproject.org Offers a 3D model, a panorama tour, elevations, sections and plans of Elmina Castle.\n[…]\nGhana-pedia webpage - São Jorge da Mina"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Castelo_de_S%C3%A3o_Jorge_da_Mina",
        "situacao": "ok",
        "texto": "O Castelo de São Jorge da Mina, também designado por Castelo da Mina, Feitoria da Mina, e posteriormente por Fortaleza de São Jorge da Mina, Fortaleza da Mina, ou simplesmente Mina, localiza-se na atual cidade de Elmina, no Gana, no litoral da África Ocidental. Após a sua ocupação pelos neerlandeses em 1637, o seu nome passou a figurar na cartografia apenas como Elmina.\n[…]\nPor esse instrumento, na primeira metade do século XVII foi conquistada a costa da Região Nordeste do Brasil e, em 29 de Agosto de 1637, a Fortaleza de São Jorge da Mina, na costa africana, após cinco dias de resistência. Na ocasião, o efetivo português na Mina era de cerca de quarenta homens, doentes e mal-armados. As tropas neerlandesas encontravam-se sob o comando do coronel Van Koin.\n[…]\nOs neerlandeses fizeram de São Jorge da Mina a capital da Costa do Ouro Holandesa, e, rebatizando o forte como Fort de Veer, Fort Java, Fort Scomarus e Fort Naglas, procederam-lhe obras de reforço e de ampliação. A partir de então, a Mina tornou-se um centro fornecedor de mão de obra escrava para o continente americano. Outros fortes portugueses na região foram também conquistados pelos holandeses em 1642, com a mesma finalidade.\n[…]\nO monumento sofreu uma ampla intervenção de restauração e conservação a cargo do governo de Gana na década de 1990 e, atualmente encontra-se aberto à visitação turística.\n[…]\nPorto de escala das embarcações da Carreira da Índia na costa ocidental africana, as iconografias do castelo, em mapas do século XVI (como o Planisfério de Cantino, 1502), mostram uma sólida estrutura acastelada dominada por uma torre de menagem de planta circular, tendo os muros reforçados por torreões, também no formato circular, semelhantes a outros erguidos em estilo manuelino em Portugal à época.\n[…]\nSão Jorge da Mina\n[…]\nCastelo da Mina no WikiMapia\n[…]\nMonumentos: Fortaleza de São Jorge da Mina - SIPA",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Pirâmides de Méroe",
      "descricao": "Conjunto de pirâmides núbias erguidas pelos reis de Cuxe perto da antiga cidade de Méroe."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "As pirâmides de Méroe, erguidas pelos reis de Cuxe, ficam em que país atual?",
    "resposta": "Sudão",
    "distratores": [
      "Etiópia",
      "Chade",
      "Líbia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mero%C3%AB"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mero%C3%AB",
        "situacao": "ok",
        "texto": "Meroë was an ancient city on the east bank of the Nile about 6 km north-east of the Kabushiya station near Shendi, Sudan, approximately 200 km north-east of Khartoum. Near the site is a group of villages called Bagrawiyah (Arabic: البجراوية). This city was the capital of the Kingdom of Kush for several centuries from around 590 BC, until its collapse in the 4th century AD.\n[…]\nThe site of the city of Meroë is marked by more than two hundred pyramids in three groups, of which many are in ruins. They have the distinctive size and proportions of Nubian pyramids.\n[…]\nRoyal burials formed the Pyramids of Meroë, containing the remains of the Kings and Queens of Meroë from c. 300 BC to about 350 AD.\n[…]\nMeroë is mentioned briefly in the 1st century AD Periplus of the Erythraean Sea:\n[…]\nAt its peak, the rulers of Meroë controlled the Nile Valley north to south, over a straight-line distance of more than 1,000 km (620 mi).\n[…]\nIt was found that the pyramids were regularly built over sepulchral chambers, containing the remains of bodies either burned or buried without being mummified. The most interesting objects found were the reliefs on the chapel walls, already described by Lepsius, and containing the names with representations of queens and some kings, with some chapters of the Book of the Dead; some steles with inscriptions in the Meroitic language, and some vessels of metal and earthenware.\n[…]\nIn June 2011, the Archeological Sites of Meroë were listed by UNESCO as World Heritage Sites.\n[…]\nSedeinga pyramids\n[…]\nShinnie, P. L. (1967). Meroe, a civilization of Sudan. Ancient People and Places. Vol. 55. London/New York: Thames and Hudson.\n[…]\nMedia related to Meroë at Wikimedia Commons\n[…]\nLabelled map of the pyramids at Meroe\n[…]\nSudan's forgotten pyramids – BBC News\n[…]\nPictures of Meroë – An online slide show as part of a detailed travelogue (in German)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mero%C3%A9",
        "situacao": "ok",
        "texto": "Méroe, ou Meroé, é uma antiga cidade na margem leste do rio Nilo, na Núbia, a região do vale do rio Nilo que atualmente é partilhada pelo Egito pelo Sudão, a cerca de 300 km a nordeste de Cartum, que foi a capital do Reino de Cuxe entre o século VII a.C. e o século IV da nossa era. Durante essa fase, os núbios inventaram uma escrita própria, chamada pelos estudiosos de “escrita mercado ”.\n[…]\nNo local onde se encontrava a cidade existem mais de 100 pirâmides em três grupos e é um dos lugares arqueológicos desta região inscritos pela Organização das Nações Unidas para a Educação, a Ciência e a Cultura (UNESCO), em 2003, na lista do Património Mundial.\n[…]\nHá estudos que dizem que o reino de Meroé era governado por rainhas que recebiam o nome-título de Candace, em que o poder seria passado aos descendentes pela via feminina; este mito foi associado, por alguns estudiosos, com a lenda da rainha de Sabá,porém, há um relato bíblico no livro de atos 8 quando o Evangelista Felipe encontra um eunuco chefe dos tesouros de \"Candace, rainha dos etíopes\", o que poderia reforçar a ideia anterior de que  eventualmente poderiam ser rainhas que governavam na época e que a sua linhagem passava para mãos femininas.\n[…]\nDiodoro Sículo   relata o costume dos reis da Etiópia (identificados no Livro III à cidade de Meroe) de reinarem até receberem ordens dos sacerdotes indicando que eles devem morrer. Este costume perdurou até o reinado de Ergamenes, contemporâneo de Ptolomeu II, um rei com educação grega e estudioso de filosofia, que desprezou o comando dos deuses, enviou seus soldados ao templo dourado dos etíopes e passou os sacerdotes ao fio da espada, abolindo este costume.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Ilha de Gorée",
      "descricao": "Pequena ilha diante de Dacar, símbolo do tráfico atlântico de escravizados e Patrimônio Mundial da UNESCO."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A Ilha de Gorée, símbolo do tráfico atlântico de escravizados, fica em que país?",
    "resposta": "Senegal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gor%C3%A9e"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gor%C3%A9e",
        "situacao": "ok",
        "texto": "Île de Gorée (French pronunciation: [ildəɡoʁe]; \"Gorée Island\"; Wolof: Beer Dun) is one of the 19 communes d'arrondissement (i.e. districts) of the city of Dakar, Senegal. It is an 18.2-hectare (45-acre) island located two kilometres (1.1 nmi; 1.2 mi) at sea from the main harbour of Dakar (14°40′N 17°24′W), famous as a destination for people interested in the  Atlantic slave trade.\n[…]\nThe Bambara people had an unfavorable stereotype; found in the mainland of Senegal and Mali, the Bambara were known for being excellent slaves. Brought to Gorée by the French, the Bambara people were set to build roads, forts and houses.\n[…]\nIn response to these accusations, several Senegalese and European researchers convened a symposium at the Sorbonne in April 1997, entitled \"Gorée dans la traite atlantique: mythes et réalités\", whose proceedings were published afterwards.\n[…]\nFor this reason Ndiaye exaggerated the importance of Senegal, and Gorée in particular, by claiming that no less than 20 million enslaved Africans were shipped from there.\n[…]\nAkon – \"Senegal\"\n[…]\nAlpha Blondy & Solar System– \"Goree (Senegal)\" on Dieu (1994)\n[…]\nNuru Kane – \"Goree\"\n[…]\nJacobs, Bart (2012). \"The Dutch in Seventeenth-Century Senegambia and the Emergence of Papiamentu\". In Green, Toby (ed.). Brokers of Change: Atlantic Commerce and Cultures in Pre-Colonial Western Africa. London: Proceedings of the British Academy.\n[…]\nThilmans, Guy (2006). Histoire militaire de Gorée: de l'arrivée des portugais (1444) au départ définitif des anglais (1817). Gorée [Senegal]: Éditions du Musée historique du Sénégal.\n[…]\nGuillaume Vial, Femmes d'influence. Les signares de Saint-Louis du Sénégal et de Gorée XVIIIe-XIXe siècle. Étude critique d'une identité métisse, Paris: Nouvelles Éditions Maisonneuve & Larose - Hémisphères Éditions, 2019, 381 p.\n[…]\nMairie de Gorée (in French)\n[…]\nGorée and the Slave Trade, Philip Curtin, African Threads, History Net"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Goreia",
        "situacao": "ok",
        "texto": "Ilha de Goreia ou Ilha de Gorée, localiza-se ao largo da costa do Senegal, em frente a Dacar, na África Ocidental. É um símbolo do tráfico negreiro.\n[…]\nFoi, entre os séculos XV e XIX, um dos maiores centros de comércio de escravos do continente, a partir de uma feitoria fundada pelos portugueses. Esse entreposto foi, ao longo dos séculos, conquistado e administrado por neerlandeses, ingleses e franceses.\n[…]\nA sua arquitetura é caracterizada pelo contraste entre as sombrias casernas dos escravos e as elegantes mansões dos seus mercadores. Goreia, classificada em 1978 como Patrimônio da Humanidade é um símbolo da exploração humana e uma escola para as gerações atuais, com grande importância para a Diáspora africana.\n[…]\nFortaleza da Ilha de Goreia\n[…]\nNúcleo urbano da Ilha de Gorée",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Kunta Kinte",
      "descricao": "Africano escravizado retratado por Alex Haley no livro Raízes, de 1976, como seu antepassado."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Kunta Kinte, protagonista do livro Raízes, de Alex Haley, nasceu numa aldeia de que país africano atual?",
    "resposta": "Gâmbia",
    "distratores": [
      "Senegal",
      "Gana",
      "Serra Leoa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kunta_Kinte"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kunta_Kinte",
        "situacao": "ok",
        "texto": "Kunta Kinte ( KOON-tah KIN-tay) is the main character from the 1976 novel Roots: The Saga of an American Family by American author Alex Haley. Kunta Kinte was based on family oral tradition accounts of one of Haley's ancestors, a Muslim Gambian man who was born around 1767, enslaved, and taken to America where he died around 1822. Haley said that his account of Kunta's life in Roots is a mixture o\n[…]\nAccording to the book Roots, Kunta Kinte was born circa 1750 in the Mandinka village of Jufureh, in The Gambia. He was raised in a Muslim family. In 1767, while Kunta was searching for wood to make a drum for his brother, four men chased him, surrounded him, and took him captive. Kunta awoke to find himself blindfolded, gagged, bound, and a prisoner. He and others were put on the slave ship the Lord Ligonier for a four-month Middle Passage voyage to North America.\n[…]\nThe latter part of the book tells of the generations between Kizzy and Alex Haley, describing their suffering, losses, and eventual triumphs in America. Alex Haley claimed to be a seventh-generation descendant of Kunta Kinte.\n[…]\nHaley claimed that his sources for the origins of Kinte were oral family tradition and a man he found in the Gambia named Kebba Kanga Fofana, who claimed to be a griot with knowledge about the Kinte clan. He described them as a family in which the men were blacksmiths, descended from a marabout named Kairaba Kunta Kinte, originally from Mauritania.\n[…]\nHowever, despite the inconsistencies with Haley's chronology, academics including historian John Thornton, director of the African American Studies program at Boston University, have noted that a person named Kunta Kinte could have lived in the Gambia in the 1700s and been enslaved.\n[…]\nThere is an annual Kunta Kinte Heritage Festival held in Maryland.\n[…]\nKunta Kinteh Island in the Gambia\n[…]\nThe Kunta Kinte-Alex Haley Foundation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kunta_Kinte",
        "situacao": "ok",
        "texto": "Kunta Kinte é o personagem central do romance \"Roots: The Saga of an American Family\" escrito pelo autor norte-americano Alex Haley. O livro virou uma minissérie de televisão em 1977 de muito sucesso e conquistou ao longo de seus 12 episódios cerca de 71% da audiência americana, com quase 100 milhões de telespectadores que acompanharam a minissérie. É considerada um dos fenômenos televisivos mais \n[…]\nDepois do livro, Haley se tornou nacionalmente famoso, e o autor americano Harold Courlander observou que a seção que descreve a vida de Kinte foi aparentemente tirado de livro de Courlander O Africano. Haley, no início, rejeitou a acusação, mas depois emitiu uma declaração pública afirmando que o livro Courlander tinha sido a sua fonte, e Haley atribuiu o erro a um dos seus pesquisadores assistentes.\n[…]\nHaley começa o romance com o nascimento de Kunta na vila de Juffure, em Gâmbia, na África Ocidental, em 1750. Kunta é o primeiro dos quatro filhos de Omoro Kinte e Binta Kebba, da tribo mandinga. Haley descreve as origens orgulhosas do sobrenome Kinte, a rigorosa educação Muçulmana de Kunta, os rigores do treinamento de iniciação nos caminhos mandinga, os testes de masculinidade por que ele passa, e a cerimônia de circuncisão.\n[…]\nKunta Kinte é retratado de forma heroica, inteligente, talentosa, introspectivo, e corajoso, um guerreiro mandinga.\n[…]\nEm relação ao ponto de vista histórico, a trama é uma ficção que o autor, Haley, se inspirou (copiou) do autor americano Harold Courlander, que posteriormente o processou por plágio, nos Estados Unidos e venceu, tendo chegado a um acordo recebendo uma quantia não revelada. Enfim, a história de Kunta Kinte em Raízes não é uma biografia, é ficção.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Obelisco de Axum",
      "descricao": "Estela de fonolito de 24 metros, do século quarto, na cidade de Axum, na Etiópia."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Levado pelas tropas de Mussolini em 1937, o obelisco de Axum ficou exposto em que cidade europeia até ser devolvido à Etiópia?",
    "resposta": "Roma",
    "fonte": [
      "https://en.wikipedia.org/wiki/Obelisk_of_Axum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Obelisk_of_Axum",
        "situacao": "ok",
        "texto": "The Obelisk of Axum (Tigrinya: ሓወልቲ ኣኽሱም, romanized: ḥawelti Akhsum; Amharic: የአክሱም ሐውልት, romanized: Ye’Åksum ḥāwelt) is a 4th-century CE, 24-metre (79 ft) tall phonolite stele, weighing 160 tonnes (160 long tons; 180 short tons), in the city of Axum in Ethiopia. It is ornamented with two false doors at the base and features decorations resembling windows on all sides. The obelisk ends in a semi-c\n[…]\nKing Ezana (c. 321 – c. 360), influenced by his childhood tutor Frumentius, introduced Christianity to Axum, precluding the pagan practice of erecting burial steles (it seems that at the feet of each obelisk, together with the grave, there was also a sacrificial altar.\n[…]\nThe Italian occupation of Ethiopia ended in 1937 with looting, in which the Obelisk of Axum was taken to Italy as war spoil. The monolith was cut into three pieces and transported by truck along the tortuous route between Axum and the port of Massawa, taking five trips over a period of two months. It travelled by the ship, Adwa, arriving in Naples on March 27, 1937.\n[…]\nWhen it was reassembled in Rome in 1937, three steel bars were inserted per section. When the obelisk was hit by lightning during a violent thunderstorm over Rome on 27 May 2002, this caused \"considerable\" damage. In the new reconstruction the three sections are fixed together by a total of eight aramid fiber (Kevlar) bars: four between the first and second and four between the second and third sections.\n[…]\nSeveral other similar stelae/obelisks exist in Ethiopia and Eritrea, such as the Hawulti in Metera. Like the Obelisk of Axum, the other stelae have a rectangular base with a false door carved on one side.\n[…]\nObelisks of Axum–North Ethiopia\n[…]\nObelisk arrives back in Ethiopia (BBC News)\n[…]\nThe Axum Obelisk (Ethiopian Embassy in the UK)\n[…]\nUNESCO says Axum obelisk to be put up before start of Ethiopian rainy season, People's Daily, 30 October 2005\n[…]\nAksum Obelisk Revisited"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Obelisco_de_Axum",
        "situacao": "ok",
        "texto": "O Obelisco de Axum é um grande obelisco de granito, com 24 metros de altura e 800 toneladas de peso. É decorado com duas portas falsas na base, e decorações semelhantes a janelas em todos os lados. O obelisco termina em uma parte semicircular superior, que costumavam ser fechadas por armações metálicas.\n[…]\nO monumento encontra-se na cidade de Axum, na Etiópia. Foi erguido há aproximadamente 1 700 anos, no auge do Império de Axum.\n[…]\nO obelisco foi esculpido e erigido na cidade de Axum (em nossos dias a Etiópia) durante o século IV por pessoas do Império de Axum, uma antiga civilização etíope. Mais tarde, ele desabou, quebrando em três partes, provavelmente depois de um terremoto (Axum está  localizada em uma zona sísmica). Nestas condições, foi levado como troféu de guerra pelos soldados italianos no final de 1937, após a Segunda Guerra Ítalo-Etíope.\n[…]\nVários outros obeliscos semelhantes existem na Etiópia e na Eritreia, tais como o Hawulti em Metera. Como o Obelisco de Axum, outros obeliscos têm uma base retangular com uma porta falsa esculpida em um lado.\n[…]\nFoi inaugurado em Roma em 1937. Foi devolvido e reinaugurado em 2008\n[…]\nObeliscos de Roma\n[…]\nObelisks of Axum-North Ethiopia\n[…]\nObelisk arrives back in Ethiopia (BBC News)\n[…]\nEthiopia starts restoring obelisk (BBC News]\n[…]\nThe Axum Obelisk (Ethiopian Embassy in the UK)\n[…]\nUNESCO says Axum obelisk to be put up before start of Ethiopian rainy season, People's Daily, 30 de outubro 2005",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Ano da África",
      "descricao": "O ano de 1960, em que dezessete países africanos se tornaram independentes."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Que ano ficou conhecido como Ano da África, porque dezessete países do continente se tornaram independentes?",
    "resposta": "1960",
    "fonte": [
      "https://en.wikipedia.org/wiki/Year_of_Africa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Year_of_Africa",
        "situacao": "ok",
        "texto": "The Year of Africa refers to a series of events that took place during the year 1960—mainly the independence of seventeen African nations—that highlighted the growing pan-African sentiments in the continent. The year brought about the culmination of African independence movements and the subsequent emergence of Africa as a major force in the United Nations.\n[…]\nO. H. Morris of the British Ministry of Colonies predicted in early January that \"1960 will be a year of Africa\". The phrase \"year of Africa\" was also used by Ralph Bunche on 16 February 1960. Bunche anticipated that many states would achieve independence in that year due to the \"well nigh explosive rapidity with which the peoples of Africa in all sectors are emerging from colonialism.\" The concept of a \"Year of Africa\" drew international media attention.\n[…]\nThe Sharpeville massacre in South Africa took place on 21 March 1960, triggering mass underground resistance as well as international solidarity demonstrations. This event is sometimes cited as the beginning of worldwide struggle against apartheid. South African activists and academics describe it as a turning point in the resistance, marking the end of nonviolence and liberalism.\n[…]\nIn the 1960 Summer Olympics in Rome, Ethiopian runner Abebe Bikila won the marathon and became the first Black African to receive an Olympic gold medal. His achievement intensified African pride and global focus on the continent.\n[…]\nMeriwether, looking back on the Year of Africa, writes: \"The events of 1960 strengthened links between African Americans and the worldwide struggle against white supremacy, while doing so on a more Africa-centered basis.\" More concretely, resisters to segregation in the Southern United States may have begun to look to South Africa for inspiration—and vice versa.\n[…]\nYear of return\n[…]\n1960: The year of independence on France24"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Ezana",
      "descricao": "Rei de Axum no século quarto, o primeiro governante do reino a adotar o cristianismo."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que século o rei Ezana, de Axum, na atual Etiópia, adotou o cristianismo?",
    "resposta": "Século quatro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ezana_of_Axum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ezana_of_Axum",
        "situacao": "ok",
        "texto": "Ezana (Ge'ez: ዔዛና, ‘Ezana, unvocalized ዐዘነ ‘zn); Ancient Greek: Ἠεζάνα, Aezana) was the ruler of the Kingdom of Aksum (320s – c. 360 AD). One of the best-documented rulers of Aksum, Ezana is important as the one who adopted both the religion of Christianity and the name of Ethiopia for that country when he conquered Aethiopia (Referring to the Kingdom of Kush, not to be confused with modern day Et\n[…]\nTradition states that Ezana succeeded his father Ella Amida (Ousanas) as king while still a child; his mother, Sofya, served as regent until he came of age.\n[…]\nA remarkable feature of the coins is a shift from a pagan motif with disc and crescent to a design with a cross. ‘Ezana is also credited for erecting several stelae and obelisks. An inscription in Greek gives the regnal claims of Ezana:\n[…]\nI, Ezana, King of the Kingdom of Aksum and Himyarites and of Reeidan and of the Ethiopians and of the Sabaites and of Sileel (?) and of Hasa and of the Bougaites and of Taimo...\n[…]\nEzana is unknown in the King Lists even though the coins bear this name. According to tradition, Emperors Abreha and Asbeha ruled Ethiopia when Christianity was introduced. It may be that these names were later applied to ‘Ezana and his brother or that these were their baptismal names.\n[…]\nAlong with his brother, Saizana (Sazan), Ezana (Aizan) is regarded as a saint by the Ethiopian Orthodox Tewahedo Church and Catholic Church, with a feast day of the first of October and on 27 October.\n[…]\nEzana Stone\n[…]\nFrancis Anfray, André Caquot, and Pierre Nautin, \"Une nouvelle inscription grecque d'Ezana, roi d'Axoum\", Journal des savants, (1970), pp. 260-274.\n[…]\nYuri M. Kobishchanov. Axum (Joseph W. Michels, editor; Lorraine T. Kapitanoff, translator). University Park, Pennsylvania: University of Pennsylvania, 1979. ISBN 0-271-00531-9\n[…]\nStuart Munro-Hay, \"The Dating of Ezana and Frumentius\", Rassegna di Studi Etiopici, 32 (1988), pp. 111-127"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ezana",
        "situacao": "ok",
        "texto": "Ezana (gueês: ዒዛና ‘Ezana, invocalizodo ዐዘነ ‘zn) foi um governante do Reino de Axum, que reinou aproximadamente entre 333 e 350. Em suas inscrições era proclamado \"Rei de Sabá e Salhem, Himiar e Du-Raidã\". A tradição afirma que \"Ezana sucedeu seu pai Ela Amida (Usanas) ainda criança e sua mãe, Sofia foi sua regente. Ezana também era conhecido pelo título de bisi alêne.\n[…]\nEzana foi o primeiro monarca do Reino de Axum a abraçar o cristianismo,  e o primeiro depois de Za Hacala (possivelmente Zoscales) ser mencionado pelos historiadores contemporâneos, uma situação que levou Munro-Hay a comentar que ele era \"o mais famoso dos reis axumitas antes de Elesbão (Calebe). \"  Seu tutor de infância, o cristão sírio Frumêncio, tornou-se chefe da Igreja etíope.\n[…]\nDiversas moedas cunhadas com seu nome foram encontradas no final dos anos 90 em sítios arqueológicos na Índia, indicando contatos comerciais naquele país. Uma característica notável das moedas é uma mudança do motivo pagão anterior com o disco solar e o crescente estilizados para o desenho com uma cruz cristã. Ezana também ficou conhecido por erguer várias estelas e obeliscos.\n[…]\nO nome Ezana não aparece nas listas de reis apesar de que foram feitas moedas com seu nome. Segundo a tradição, os imperadores Abrá (Abreha) e Asbá (Atzbeha), também chamados Aizana e Saizana, governaram a Etiópia quando o cristianismo foi introduzido. Pode ser que esses nomes tenham sido aplicados posteriormente a Ezana e seu irmão ou que esses fossem seus nomes batismais.\n[…]\nJunto com seu irmão, Saizana, Ezana é considerado santo pela Igreja Ortodoxa Etíope, sendo celebrado seu dia em 1º de outubro.\n[…]\nLista de reis de Axum",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Escravidão na Mauritânia",
      "descricao": "Prática da escravidão hereditária na Mauritânia, abolida oficialmente em 1981 e criminalizada em 2007."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A Mauritânia foi o último país do mundo a abolir oficialmente a escravidão. Em que ano isso aconteceu?",
    "resposta": "1981",
    "fonte": [
      "https://en.wikipedia.org/wiki/Slavery_in_Mauritania"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Slavery_in_Mauritania",
        "situacao": "ok",
        "texto": "Slavery has been called \"deeply rooted\" in the structure of the northwest African country of Mauritania and estimated to be \"closely tied\" to the ethnic composition of the country, although it has also been estimated that \"Widespread slavery was traditional among ethnic groups of the largely nonpastoralist south, where it had no racial origins or overtones; masters and slaves alike were black\", de\n[…]\nThe French colonial administration declared an end to slavery in Mauritania in 1905, but did little to enforce that ban. Mauritania ratified in 1961 the Forced Labour Convention, having already enshrined abolition of slavery, albeit implicitly, in its 1959 constitution. In 1981, Mauritania became the last country in the world to officially abolish slavery, when a presidential decree abolished the practice. However, no criminal laws were passed to enforce the ban.\n[…]\nIn 2015, the Mauritanian government expanded the definition of slavery to include child labor. Extreme poverty and Islamic norms discourage many slaves from attempting to escape. Racial and ethnic division plays a role in Mauritanian government and society, as most slaves in Mauritania are black Mauritanians while members of the ruling class tend to be Arab.\n[…]\nThe international community is increasingly pressuring Mauritania to enforce its anti-slavery laws. Along with the African Union's recent ruling, the United States in 2018 was reportedly considering downgrading its trade relations with Mauritania because of its poor record on enforcing its anti-slavery laws.\n[…]\nMedia related to Slavery in Mauritania at Wikimedia Commons\n[…]\nSlavery – Mauritania differentiating between facts and fiction Middle East Eye\n[…]\nAnti-Slavery International: Forced labour in Mauritania, Anti-Slavery International\n[…]\nAfrican Liberation Forces of Mauritania on opposition to slavery\n[…]\nFreedom from Slavery in Mauritania, BBC Radio\n[…]\nSlavery Lives on in Mauritania, NPR"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escravid%C3%A3o_na_Maurit%C3%A2nia",
        "situacao": "ok",
        "texto": "A escravidão foi chamada de \"profundamente enraizada\" na estrutura do país do noroeste da África, a Mauritânia, e estimada como \"estreitamente ligada\" à composição étnica do país, embora também tenha sido estimado que \"a escravidão generalizada era tradicional entre grupos étnicos do sul, em grande parte não pastorais, onde não tinha origens raciais ou conotações raciais, tanto os senhores quanto \n[…]\nA administração colonial francesa declarou o fim da escravidão na Mauritânia em 1905. A Mauritânia ratificou em 1961 a Convenção sobre o Trabalho Forçado, tendo já consagrado a abolição da escravatura, ainda que implicitamente, na sua constituição de 1959. Em 1981, a Mauritânia tornou-se o último país do mundo a abolir oficialmente a escravatura, quando um decreto presidencial aboliu a prática. No entanto, nenhuma lei criminal foi aprovada para fazer cumprir a proibição.\n[…]\nApesar da abolição oficial da escravatura, o Índice Global de Escravidão de 2018 estimou o número de escravos em 90.000 (ou 2,1% da população), uma redução dos 155.600 relatados no índice de 2014, no qual a Mauritânia ficou em 31º lugar de 167 países por número total de escravos e primeiro por prevalência, com 4% da população. O governo mauritano ocupa o 121º lugar entre 167 países na sua resposta a todas as formas de escravatura moderna.\n[…]\nEm 2017, a BBC afirmou que um total de 600.000 pessoas viviam em escravidão.\n[…]\nA posição oficial do governo mauritano é que a escravatura está \"totalmente acabada ... todas as pessoas são livres.\"  De acordo com o abolicionista Abdel Nasser Ould Ethmane, muitos mauritanos acreditam que falar de escravidão \"sugere manipulação pelo Ocidente, um ato de inimizade contra o Islã, ou influência da conspiração judaica mundial.\" Alguns grupos de direitos humanos afirmam que o governo pode ter prendido mais activistas anti-escravatura do que proprietários de escravos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Guerra da Argélia",
      "descricao": "Guerra de independência da Argélia contra a França, de 1954 a 1962."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Depois de cerca de oito anos de guerra, em que ano a Argélia conquistou a independência da França?",
    "resposta": "1962",
    "fonte": [
      "https://en.wikipedia.org/wiki/Algerian_War"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Algerian_War",
        "situacao": "ok",
        "texto": "The Algerian War, also known as the Algerian Revolution, the Franco-Algerian War, or the Algerian War of Independence, was an armed conflict between France and the Algerian National Liberation Front (FLN) from 1954 to 1962, which led to Algeria winning its independence from France. An important decolonization war, it was a complex conflict characterized by guerrilla warfare and war crimes. The con\n[…]\nIn the second referendum on the independence of Algeria, held in April 1962, 91 percent of the French electorate approved the Evian Accords. On 1 July 1962, some 6 million of a total Algerian electorate of 6.5 million cast their ballots. The vote was nearly unanimous, with 5,992,115 votes for independence, 16,534 against, with most Pied-Noirs and Harkis either having fled or abstaining. De Gaulle pronounced Algeria an independent country on 3 July.\n[…]\nAlgerian Communist Party member Raymonde Peschard was initially accused of being an accomplice to the bombing and was forced to flee from the colonial authorities. In September 1957, though, Drif and Saâdi were arrested and sentenced to twenty years hard labor in the Barbarossa prison. Drif was pardoned by Charles de Gaulle when Algeria gained independence in 1962.\n[…]\nAfter Algeria's independence was recognised, Ahmed Ben Bella quickly became more popular and thereby more powerful. In June 1962, he challenged the leadership of Premier Benyoucef Ben Khedda; this led to several disputes among his rivals in the FLN, which were quickly suppressed by Ben Bella's rapidly growing support, most notably within the armed forces.\n[…]\nOne of the first books about the war in English, A Scattering of Dust by the American journalist Herb Greer in 1962, depicted very favorably the Algerian struggle for independence.\n[…]\nCommando (1962 film)\n[…]\nHorne, Alistair (1978). A savage war of peace: Algeria 1954-1962. New York: Viking Press. ISBN 978-0-670-61964-1."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_de_Independ%C3%AAncia_Argelina",
        "situacao": "ok",
        "texto": "A Guerra de Independência Argelina, também conhecida como Revolução Argelina ou Guerra da Argélia (em árabe: الثورة الجزائرية‎ – Ath-Thawra Al-Jazā’iriyya; em francês:  Guerre d'Algérie), foi um movimento de libertação nacional da Argélia do domínio francês, que tomou curso entre 1954 e 1962.\n[…]\nO conflito levou, após os acordos de Évian de 18 de março de 1962, à independência total da Argélia 4 meses depois, e precipitou o êxodo de habitantes de origem europeia - milhares de europeus-argelinos fugiram para a França em poucos meses com medo da vingança da FLN. Desses, muitos, ao deixarem a Argélia, destruíram ou prejudicavam o que não podiam levar, o que incluía desde infraestruturas básicas e serviços públicos até móveis e automóveis.\n[…]\nPortanto, o massacre de Setife foi um dos acontecimentos que serviram de prelúdio à Revolução da Guerra de Independência de 1954-1962.\n[…]\nHORNE, Alistair (1977). A Savage War of Peace: Algeria 1954–1962. New York: The Viking Press.\n[…]\nMESSAOUDI, Alain. “L’effervescence de l’indépendance algérienne. À propos de : Malika Rahal, Algérie 1962. Une histoire populaire, La Découverte”. La vie des idées. Disponível em: <https://laviedesidees.fr/Rahal-Algerie-1962-Une-histoire-populaire.html>.\n[…]\nPERROTTI, Bruna. Assia Djebar na Guerra de Independência da Argélia (1954 – 1962). Trabalho de Conclusão de Curso (Bacharel em História) - Universidade Estadual de Campinas. Campinas, pp. 111. 2021.\n[…]\nSAMPAIO, Thiago Henrique. O discurso de Jean-Paul Sartre sobre o colonialismo francês e a Guerra de Independência da Argélia (1954-1962). Revista Filogênese. Disponível em: <https://www.marilia.unesp.br/Home/RevistasEletronicas/FILOGENESE/thiagosampaio.pdf> Acesso em: 2 de julho de 2022.\n[…]\n«Algerian National Liberation (1954-1962)» (em inglês). GlobalSecurity.org",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Conferência de Berlim",
      "descricao": "Reunião de potências em Berlim, entre 1884 e 1885, que estabeleceu regras para a ocupação colonial da África."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantos países participaram da Conferência de Berlim, entre 1884 e 1885, que regulou a partilha da África sem nenhum africano à mesa?",
    "resposta": "Catorze",
    "distratores": [
      "Sete",
      "Vinte",
      "Trinta e dois"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Berlin_Conference"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Berlin_Conference",
        "situacao": "ok",
        "texto": "The Berlin Conference of 1884–1885 was a meeting of colonial powers that concluded with the signing of the General Act of Berlin, an agreement regulating European colonisation and trade in Africa during the New Imperialism period. The conference of fourteen countries was organised by Otto von Bismarck, the first chancellor of Germany, at the request of Leopold II of Belgium at a building (No. 77, \n[…]\nThe Berlin Conference (1884–1885) formalised these ambitions by recognising territorial claims in resource-rich areas and establishing regulations to reduce conflict among competing colonial powers. Economic rivalries, particularly between Britain and France, heightened the urgency to secure colonies before monopolies could be established in strategic regions such as the Congo Basin.\n[…]\nAt the Berlin Conference (1884–1885), the interpretation of the Principle of Effective Occupation was a major point of contention, particularly between Germany, Britain, and France. At stake was the British distinction between territorial annexations and protectorates. Germany, as a relatively new colonial power in Africa, joined France in arguing that no state should hold legal rights to any territory unless it exercised strong and continuous political authority there.\n[…]\nCrowe, Sybil E. (1942). The Berlin West African Conference, 1884–1885. New York: Longmans, Green. ISBN 0-8371-3287-8 (1981, New ed. edition).\n[…]\nFörster, Stig, Wolfgang Justin Mommsen, and Ronald Edward Robinson, eds. Bismarck, Europe and Africa: The Berlin Africa conference 1884–1885 and the onset of partition (Oxford University Press, 1988) online; 30 topical chapters by experts.\n[…]\nShepperson, George. \"The Centennial of the West African Conference of Berlin, 1884–1885.\" Phylon 46#1 (1985), pp. 37–48. online\n[…]\n\"The Berlin Conference\", BBC In Our Time\n[…]\nGeneral Act of the Berlin Conference. South African History Online."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Confer%C3%AAncia_de_Berlim",
        "situacao": "ok",
        "texto": "A Conferência de Berlim, também conhecida como Conferência da África Ocidental ou Conferência do Congo, realizou-se em Berlim, de 15 de novembro de 1884 a 26 de fevereiro de 1885, marcando a colaboração europeia na partição e divisão territorial da África.\n[…]\nOrganizado pelo Chanceler do Império Alemão, Otto von Bismarck, o evento contou com a participação de países europeus (Alemanha, Áustria-Hungria, Bélgica, Dinamarca, Espanha, França, Grã-Bretanha, Itália, Noruega, Países Baixos, Portugal, Rússia e Suécia), mas também do Império Otomano e dos Estados Unidos. O objetivo declarado era o de \"regulamentar a liberdade do comércio nas bacias do Congo e do Níger, assim como novas ocupações de territórios sobre a costa ocidental da África\".\n[…]\nÉ de realçar a participação de estados que não possuíam colónias ou territórios em África na conferência, como os países escandinavos ou os Estados Unidos.\n[…]\nAdicionalmente, o tráfico de escravos, e a escravatura no geral constituíram pontos importantes na agenda da conferência.\n[…]\nComo resultado da conferência, a Grã-Bretanha passou a administrar toda a África Austral (com exceção das colônias alemã da Namíbia, portuguesas de Angola e Moçambique e da ilha francesa de Madagáscar) e o Sudoeste Africano, toda a África Oriental (com exceção da Tanganica) e partilhou a costa ocidental e o norte da África com a França, a Espanha e Portugal (Guiné-Bissau e Cabo Verde); o Congo – que estava no centro da disputa, o próprio nome da Conferência em alemão é \"Conferência do Congo\" – continuou como \"propriedade\" da Associação Internacional do Congo, cujo principal acionista era o rei Leopoldo II da Bélgica; este país passou ainda a administrar os pequenos reinos das montanhas a leste, o Ruanda e o Burundi.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Comércio transaariano",
      "descricao": "Rede de rotas de caravanas que cruzavam o Saara, ligando o norte da África aos reinos do Sahel."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No comércio transaariano medieval, que produto extraído do deserto era trocado pelo ouro dos reinos do Sahel?",
    "resposta": "Sal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Trans-Saharan_trade"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trans-Saharan_trade",
        "situacao": "ok",
        "texto": "Trans-Saharan trade is trade between North Africa and the rest of Africa that requires travel across the Sahara. Though this trade began in prehistoric times, the peak of trade extended from the 8th century until the early 17th century. The Sahara once had a different climate and environment. In Libya and Algeria, from at least 7000 BCE, pastoralism (the herding of sheep and goats), large settleme\n[…]\nThe western routes were the Walata Road past present-day Oualata, Mauritania, from the Sénégal River, and the Taghaza Trail, from the Niger River, past the salt mines of Taghaza, north to the great trading center of Sijilmasa, situated in Morocco just north of the desert. The growth of Aoudaghost, founded in the 5th century BCE, was stimulated by its position at the southern end of a trans-Saharan trade route.\n[…]\nAlthough much reduced, trans-Saharan trade continued. But trade routes to the West African coast became increasingly easy, particularly after the French invasion of the Sahel in the 1890s and subsequent construction of railways to the interior. With the independence of nations in the region in the 1960s, the north–south routes were severed by national boundaries.\n[…]\nMasonen, Pekka (1997). \"Trans-Saharan Trade and the West African Discovery of the Mediterranean World\". In Sabour, M'hammad; Vikør, Knut S. (eds.). Ethnic Encounter and Culture Change. Bergen. ISBN 1-85065-311-9. Archived from the original on 1998-12-06.{{cite book}}:  CS1 maint: location missing publisher (link)\n[…]\nRoss, Eric (2011). \"A historical geography of the trans-Saharan trade\". In Krätli, Graziano; Lydon, Ghislaine (eds.). The Trans-Saharan Book Trade: Manuscript Culture, Arabic Literacy and Intellectual History in Muslim Africa. Leiden: Brill. pp. 1–34. ISBN 978-90-04-18742-9.\n[…]\n\"The Trans-Saharan Gold Trade 7th–14th Century\". Museum of Modern Art. October 2000."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Com%C3%A9rcio_transaariano",
        "situacao": "ok",
        "texto": "O comércio transaariano, em suas diversas rotas, ligava as várias praças mercantis com as zonas de abastecimento, as minas de sal do Deserto do Saara, as regiões auríferas do Sael e as áreas de extração de pimenta e noz-de-cola das florestas tropicais.\n[…]\nO reino de Mali da mesma região de Gana, sendo mais poderoso, controlava o comércio transaariano e as rotas caravaneiras. Ele favoreceu a difusão do islamismo no norte da África e nos reinos e impérios do Sael (entre o deserto do Saara e as terras mais férteis, ao sul), onde eram comercializadas especiarias.\n[…]\nOs terminais norte do comércio transaariano eram formados pelos pontos mediterrânicos, como os de Túnis, Cairo e Argel, e por cidades como Marraquexe, Segelmeça e Fez. Os terminais sul dessas rotas eram as cidades saelianas de Audagoste, Ualata, Tombuctu, Gao, Tadmeca, e Agadez. A partir daí, os produtos trazidos pelas caravanas seguiam por redes transaelianas de comércio, tanto na direção leste como na oeste.\n[…]\nOs egípcios pré-dinásticos comercializavam com a Núbia ao sul, com os oásis do Deserto Ocidental a oeste e com as culturas do Mediterrâneo Oriental a leste. Muitas rotas comerciais iam de oásis a oásis para reabastecer alimentos e água. Cidades que datam da Primeira Dinastia do Egito surgiram ao longo das junções do Nilo e do Mar Vermelho, atestando a antiga popularidade da rota.\n[…]\nFundada por volta de 800 a.C., Cartago se tornou um terminal para ouro, marfim e escravos da África Ocidental. A África Ocidental recebia sal, tecidos, contas e produtos de metal. Shillington prossegue identificando essa rota comercial como a fonte da fundição de ferro da África Ocidental. O comércio continuou na época romana.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Grande Mesquita de Djenné",
      "descricao": "Mesquita de barro na cidade de Djenné, no Mali, reconstruída em 1907 e Patrimônio Mundial da UNESCO."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A Grande Mesquita de Djenné, no Mali, é reformada todo ano numa festa popular. De que material ela é feita?",
    "resposta": "Tijolos de barro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Mosque_of_Djenn%C3%A9"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Mosque_of_Djenn%C3%A9",
        "situacao": "ok",
        "texto": "The Great Mosque of Djenné in the Sudano-Sahelian architectural style is the largest adobe brick building in the world. The mosque is located in the city of Djenné, Mali, on the flood plain of the Bani River. The first mosque on the site was built around the 13th century, but the current structure dates from 1907. As well as being the centre of the community of Djenné, it is one of the most famous\n[…]\nElectrical wiring and indoor plumbing have been added to many mosques in Mali. In some cases, the original surfaces of mosques have even been tiled over, destroying their historical appearances and in some cases compromising the building's structural integrity. While the Great Mosque has been equipped with a loudspeaker system, the citizens of Djenné have resisted modernization in favor of the building's historical integrity.\n[…]\nThe original mosque presided over one of the most important Islamic learning centers in Africa during the Middle Ages, with thousands of students coming to study the Quran in Djenné's madrassas. The historic areas of Djenné, including the Great Mosque, were designated a World Heritage Site by UNESCO in 1988. While there are many mosques that are older than its current incarnation, the Great Mosque remains the most prominent symbol of both the city of Djenné and the nation of Mali.\n[…]\nThe mosque features on the coat of arms of Mali.\n[…]\nBourgeois, Jean-Louis (1987), \"The history of the great mosques of Djenné\", African Arts, 20 (3), UCLA James S. Coleman African Studies Center: 54–92, doi:10.2307/3336477, JSTOR 3336477.\n[…]\nSnelder, Raoul (1984). Hasan-Uddin, Khan (ed.). \"The Great Mosque at Djenné: Its impact as a model\". MIMAR: Architecture in Development. 12. Singapore: Concept Media: 66–74.\n[…]\nArchnet Digital Library: Djenné Great Mosque Restoration\n[…]\nIslamic Architecture in Mali\n[…]\nAdobe Mosques of Mali by Sebastian Schutyser Archived 3 March 2021 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Mesquita_de_Jen%C3%A9",
        "situacao": "ok",
        "texto": "A Grande Mesquita de Jené (em francês: Djenné) (em francês:  Grande mosquée de Djenné, em árabe: الجامع الكبير في جينيه) é o maior edifício em adobe do mundo, e é considerada por muitos arquitetos como a maior realização do estilo Sudano-Saheliano, embora tenha muitas influências islâmicas. Localiza-se na cidade de Jené, no Mali, a qual foi declarada como patrimônio mundial pela Unesco em 1988.\n[…]\nA mesquita original foi construída por volta de 1280 por Coi Comboro, o 26.º da rei de Jené, no lugar do seu antigo palácio. No final do século XIX, no entanto, à medida que o número de crentes diminuía a mesquita foi caindo em ruínas. A mesquita foi reconstruída com o seu aspecto original em 1906. Apesar de não haver nenhum documento relatando o aspecto da mesquita, através dos relatos de anciães foram iniciados os trabalhos na mesquita. A construção terminou no ano seguinte.\n[…]\nA mesquita tem muros espessos, nos quais estão enterrados pedaços de madeira de palma, e três torres com perto de 20 metros de altura, e robustos pilares pontiagudos inteiramente feitos de terra seca. Este material é denominado adobe e é fabricado com argila misturada com palha picada, excremento bovino, e, por vezes, manteiga de karité. Uma vez erguida, a parede é coberta com um revisto também de adobe.\n[…]\nA mesquita é danificada todos os anos pelas chuvas que ocorrem de Julho a Outubro, que levam uma parte do revestimento da mesquita, obrigando à manutenção regular do monumento. A esta manutenção dá-se o nome de \"rebocadura\" e tem lugar na estação seca, dando origem a uma grande festa. As mulheres trazem a água, os homens amassam o adobe com os pés e entregam-no aos pedreiros, que se empoleiram nas escadas para estendê-lo nas paredes. Os pedreiros mais velhos verificam a qualidade do trabalho.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Império de Gana",
      "descricao": "Império da África Ocidental, nas atuais Mauritânia e Mali, que prosperou com o comércio de ouro até o século treze."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes impérios da África Ocidental surgiu primeiro?",
    "resposta": "Império de Gana",
    "distratores": [
      "Império do Mali",
      "Império Songai",
      "Império Axante"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ghana_Empire",
      "https://en.wikipedia.org/wiki/Mali_Empire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ghana_Empire",
        "situacao": "ok",
        "texto": "The Ghana Empire (Arabic: غانا), also known as simply Ghana, Ghanata, or Wagadu, was an ancient western-Sahelian empire based in the modern-day southeast of Mauritania and western Mali.\n[…]\nIt is uncertain among historians when Ghana's ruling dynasty began. The first identifiable mention of the imperial dynasty in written records was made by Muḥammad ibn Mūsā al-Khwārizmī in 830. Further information about the empire was provided by the accounts of Cordoban scholar al-Bakri when he wrote about the region in the 11th century.\n[…]\nSince the 6th–7th centuries CE, the Ghana Empire was in charge of trade in central West Africa. They had their own precious resources such as gold, copper, ivory, and salt. Their control of regional trade led to West African trading with North African merchants that brought camel caravans across the Sahara. This established Trans-Saharan trade. Important gold trade routes passed through the capital of Ancient Ghana, Koumbi Saleh.\n[…]\nIn its last centuries, Ghana increasingly lost control of the gold trade to the Mali Empire and relied on slave raiding and trading as a principal economic activity.\n[…]\nGhana had developed higher learning institutions by the 11th century, with the first reference coming from Al-Bakri who mentioned the empire's scholars and jurists. Al-Zuhri stated that some of their scholars and lawyers had come to Al-Andalus and highly regarded them as being \"preeminent.\" The most well known of these was the West African poet and grammarian Abu Ishaq Ibrahim al-Kanemi, who is recorded as having received his education in the Ghana Empire.\n[…]\nGhana Empire – World History Encyclopedia\n[…]\nAfrican Kingdoms | Ghana\n[…]\nAncient Ghana — BBC World Service"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mali_Empire",
        "situacao": "ok",
        "texto": "The Mali Empire was an empire in West Africa from c. 1235 to 1610. The empire was founded by Sundiata Keita (c. 1214 – c. 1255) and became renowned for the wealth of its monarchs, especially Mansa Musa (Musa Keita). At its peak, Mali was the largest empire in West Africa, widely influencing the culture of the region through the spread of its language, laws, and customs.\n[…]\nMuch of the recorded information about the Mali Empire comes from 14th century Tunisian historian Ibn Khaldun, 14th century Moroccan traveller Ibn Battuta and 16th century Andalusian traveller Leo Africanus. The other major source of information comes from Mandinka oral tradition, as recorded by storytellers known as griots. Imperial Mali is also known through the account of Shihab al-'Umari, written in about 1340 by a geographer-administrator in Mamluk Egypt.\n[…]\nGhana (Ghāna): Corresponds to the former Ghana Empire.\n[…]\nNiani's reputation as an imperial capital may derive from its importance in the late imperial period, when the Songhai Empire to the northeast pushed Mali back to the Manding heartland. Several 21st century historians have firmly rejected Niani as a capital candidate based on a lack of archaeological evidence of significant trade activity, clearly described by Arab visitors, particularly during the 14th century, Mali's golden age.\n[…]\nMali's wealth in gold did not primarily come from direct rule of gold-producing regions, but rather from tribute and trade with the regions where gold was found. Gold nuggets were the exclusive property of the mansa and were illegal to trade within his borders. All gold was immediately handed over to the imperial treasury in return for an equal value of gold dust. Gold dust had been weighed and bagged for use at least since the time of the Ghana Empire.\n[…]\nBamana Empire\n[…]\nList of kingdoms and empires in African history\n[…]\nAfrican Kingdoms Mali"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Imp%C3%A9rio_do_Gana",
        "situacao": "ok",
        "texto": "O Império do Gana, Reino do Gana ou Império de Uagadu foi um antigo império que dominou a África Ocidental durante a Idade Média. Era localizado entre o deserto do Saara e os rios Níger e Senegal, muito para norte do atual país chamado Gana.\n[…]\nO império não tinha nome, então passou a ser chamado de \"Gana\" (que significa \"chefe guerreiro\"), o qual na verdade era o título do líder desse Império. Foi provavelmente fundado durante a década de 300, desde essa data até 770, os seus primeiros governantes constituíram a dinastia dos Magas, uma família berbere, apesar de o seu povo súdito ser constituído por negros das tribos soninquês.\n[…]\n1036), bem como Albacri, todos descrevendo a população e os governantes de Gana como \"negros\".\n[…]\nImportações provavelmente incluíam produtos como os têxteis, ornamentos e outros materiais. Muitos dos antigos produtos artesanais de couro encontrados em Marrocos podem ter suas origens no Império do Gana.\n[…]\nA maior parte do nosso conhecimento do império do Gana vem de escritores árabes. Alhamedani, por exemplo, descreve o Gana como tendo as minas mais ricas de ouro na terra, que estavam situadas em Bambuque, na porção superior do rio Senegal. Os soninquês também vendiam escravos, sal e cobre, em troca de tecidos, missangas e produtos acabados. A capital, Cumbi-Salé, se tornou o foco de todo o comércio, com uma forma sistemática de tributação.\n[…]\nMais tarde, Audagoste se tornou outro centro comercial importante do império.\n[…]\nApesar do nome, o antigo Império do Gana não é geograficamente relacionado com o moderno Gana. Ficava a cerca de 400 milhas ao noroeste da atual Gana. Gana antiga englobava o que é, hoje, o Mali e o sul da Mauritânia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Ilha Robben",
      "descricao": "Ilha na baía da Mesa, diante da Cidade do Cabo, usada como prisão de presos políticos durante o apartheid."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em que ilha diante da Cidade do Cabo Nelson Mandela passou dezoito dos seus vinte e sete anos de prisão?",
    "resposta": "Ilha Robben",
    "fonte": [
      "https://en.wikipedia.org/wiki/Robben_Island"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Robben_Island",
        "situacao": "ok",
        "texto": "Robben Island (Afrikaans: Robbeneiland) is an island in Table Bay, 6.9 kilometers (4.3 mi) west of the coast of Bloubergstrand, north of Cape Town, South Africa. It takes its name from the archaic Dutch word for seals (robben), hence the Dutch/Afrikaans name Robbeneiland, which translates to Seal(s) Island.\n[…]\nTwo other former inmates of Robben Island, in addition to Mandela, have been elected to the presidency since the late-1990s: Kgalema Motlanthe (2008–2009) and Jacob Zuma (2009–2018). Other former prisoners have held a variety of political positions in the democracy.\n[…]\nAs a tourist attraction in South Africa's national consciousness, today Robben Island is often regarded as \"a symbol of oppression\" by many black South Africans.\n[…]\nNelson Mandela's cell is shown.\n[…]\nIts causes are still largely unclear and likely to vary between colonies, but at Robben Island are probably related to a diminishing of the food supply (sardines and anchovies) through competition by fisheries. Easy to see in their natural habitat, the penguins have been a popular tourist attraction.\n[…]\nIn 2022, the IPCC Sixth Assessment Report included Robben Island in the list of African cultural sites which would be threatened by flooding and coastal erosion by the end of the century, but only if climate change followed RCP 8.5, which is the scenario of high and continually increasing greenhouse gas emissions associated with the warming of over 4 °C., and is no longer considered very likely.\n[…]\n1620 Robben Island earthquake\n[…]\nWeideman, Marinda (June 2004). \"ROBBEN ISLAND'S ROLE IN COASTAL DEFENCE, 1931–1960\". Military History Journal: The South African Military History Society. 13 (1). Retrieved 17 September 2012.\n[…]\nRobben Island Museum\n[…]\nRobben Island – UNESCO World Heritage Centre\n[…]\nRobben Island Museum at Google Cultural Institute"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ilha_Robben",
        "situacao": "ok",
        "texto": "A ilha Robben é uma ilha localizada à entrada da baía da Mesa, a 11 km da Cidade do Cabo, com 5,4 km de comprimento e 2,5 km de largura máxima. Foi “descoberta” por Bartolomeu Dias em 1488 e, durante muitos anos, foi utilizada por navegadores portugueses, mais tarde por britânicos e neerlandeses como posto de reabastecimento.\n[…]\nNelson Mandela — o primeiro presidente da África do Sul eleito por sufrágio universal em 1994 – e seus companheiros estiveram encarcerados durante mais de duas décadas na ilha Robben. A ilha foi inscrita pela UNESCO na lista do Património da Humanidade em 1999.\n[…]\nPara além de ser um museu que retrata uma parte da história da África do Sul, principalmente no que refere à luta contra o apartheid, a Ilha Robben é igualmente um santuário natural para muitas espécies, tanto marinhas, como terrestres.\n[…]\nO nome significa ilha das focas em neerlandês.\n[…]\nApesar de exposta aos fortes ventos do sul, a ilha Robben é um santuário da natureza – e a parte norte da ilha é oficialmente um santuário para aves, com cerca de 132 espécies, algumas das quais em risco de extinção. O Pinguim-africano, que já esteve ameaçado, neste momento reproduz-se em grandes números na ilha.\n[…]\nNo que respeita a outros tipos de animais, existem na ilha 23 espécies de mamíferos, avestruzes e vários tipos de lagartos, cobras e tartarugas. Do ponto de vista da fauna marinha, as águas à volta da ilha são ricas em focas, baleias e golfinhos.\n[…]\n«Página oficial da ilha Robben» (em inglês)\n[…]\n«About South Africa - Robben Island» (em inglês)\n[…]\nIlha Dassen",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Axum",
      "descricao": "Cidade no norte da Etiópia, antiga capital do Reino de Axum."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Que objeto bíblico a Igreja Ortodoxa Etíope afirma guardar numa capela da cidade de Axum?",
    "resposta": "Arca da Aliança",
    "fonte": [
      "https://en.wikipedia.org/wiki/Axum",
      "https://en.wikipedia.org/wiki/Church_of_Our_Lady_Mary_of_Zion"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Axum",
        "situacao": "ok",
        "texto": "Axum, also spelled Aksum ( ), is a town in the Tigray Region of Ethiopia with a population of 66,900 residents (as of 2015). It is the site of the historic capital of the Aksumite Empire.\n[…]\nAdal leader Ahmed ibn Ibrahim al-Ghazi led the conquest of Axum in the sixteenth century. Aksum was sacked and burned in 1535 by the troops of Ahmad ibn Ibrahim al-Ghazi who destroyed the church that Alvares had described. Before the city was sacked, a document in the Book of Aksum lists 1,705 golden objects as well as many other items from Aksum that Lebna Dengel distributed to various governors to save them from destruction, and it is recorded by Ahmad's chronicler that a large stone object\n[…]\nEarly in the Second Italo-Ethiopian War, Italian troops seized Aksum in October 1935. In 1937, a 24 m (79 ft) tall, 1,700-year-old Obelisk of Axum, was broken into five parts by the Italians and shipped to Rome to be erected. The obelisk is widely regarded as one of the finest examples of engineering from the height of the Axumite empire.\n[…]\nAksum University was established in May 2006 on a greenfield site, 4 km (2.5 mi) from Axum's central area. The inauguration ceremony was held on 16 February 2007 and the current area of the campus is 107 ha (260 acres), with ample room for expansion. The establishment of a university in Axum is expected to contribute much to the ongoing development of the country in general and of the region in particular.\n[…]\nOn Axum Archived 15 January 2010 at the Wayback Machine\n[…]\nMore on Axum\n[…]\nAxum from Catholic Encyclopedia\n[…]\nAxum Heritage Site on Aluka digital library[link removed]\n[…]\nAksum World Heritage Site in panographies[link removed] – 360 degree interactive imaging"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Church_of_Our_Lady_Mary_of_Zion",
        "situacao": "ok",
        "texto": "The Church of Our Lady, Mary of Zion is regarded as the holiest Ethiopian Orthodox Tewahedo Church which is claimed to contain the Ark of the Covenant.\n[…]\nThe church of Saint Mary of Zion was the traditional place where Ethiopian Emperors came to be crowned. Which indeed meant if an Emperor was not crowned at Axum, or did not at least have his coronation ratified by a special service at St. Mary of Zion, he could not be referred to by the title of \"Atse\".\n[…]\nA more recent report by Amnesty International points to war crimes committed by Eritrean troops in and around Aksum, and de facto desacralisation of the church, but these reports have not been confirmed by independent investigation or by the Ethiopian Human Rights Commission.\n[…]\nThe Ethiopian government has blocked forensic investigators from accessing the church grounds, and also blocked all external attempts at investigating human rights violations that occurred both at the church and in Axum.\n[…]\nAt present, only the guardian monk may view the Ark, in accordance with the Biblical accounts of the dangers of doing so for non-Kohanim. This lack of accessibility, and questions about the account as a whole, have led Ethiopians and foreign scholars alike to express doubt about the veracity of the claim. The guardian monk is appointed for life by his predecessor before the predecessor dies."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Axum",
        "situacao": "ok",
        "texto": "Axum ou Aksum (ou historicamente Acçum) é uma cidade do norte da Etiópia, localizada na Região Tigré. A localidade é de grande importância histórica por ter sido capital do antigo Império de Axum. As ruínas da antiga cidade foram inscritas pela UNESCO, em 1980, na lista do Património Mundial.\n[…]\nSegundo a tradição religiosa da Igreja Ortodoxa Etíope, recolhida na obra Kebra Nagast (século XIII), foi de Axum que partiu Makeda, a rainha de Sabá, para visitar o rei Salomão em Jerusalém. Ainda segundo a tradição, da união entre ambos nasceu Menelik, que após visitar o pai trouxe para a Etiópia a Arca da Aliança, que até hoje estaria numa capela do complexo da Igreja de Santa Maria de Sião.\n[…]\nApesar de ter mantido a sua importância simbólica, especialmente religiosa, os líderes da igreja etíope deixaram a cidade na metade do século X.\n[…]\nApós um longo período de obscuridade, Axum começa a reviver a partir do século XV. A Igreja de Santa Maria de Sião foi reconstruída em 1404, e novos bairros habitacionais foram criados no século XVI. Porém, em 1535, a cidade foi invadida e destruída pelo chefe militar somali Ahmad ibn Ibrihim al-Ghazi. Nos séculos seguintes, Axum foi vítima de pragas de gafanhotos, cólera e fome que dizimaram a população. A importância simbólica para a religião e realeza etíope, porém, nunca foi esquecida.\n[…]\nNo censo de 2007, a maioria da população era praticante da Igreja Ortodoxa Etíope (88,9%), enquanto que 10.9% eram muçulmanos.\n[…]\nAxum é considerada a cidade mais sagrada da Igreja Ortodoxa Etíope e é um importante destino de peregrinações. Alguns festivais religiosos dignos de mencionar são o Festival T'imk'et (equivalente à Epifania nas igrejas cristãs ocidentais), a 7 de Janeiro e o Festival de Maryam Zion nos finais de Novembro.[carece de fontes]?",
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
