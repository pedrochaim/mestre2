Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Meio Ambiente e Energia** (tema **Ciências**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Petróleo",
      "descricao": "Mistura oleosa e inflamável de hidrocarbonetos, extraída do subsolo e usada como fonte de combustíveis."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Vindo do latim, o nome petróleo significa literalmente o quê?",
    "resposta": "Óleo de pedra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Petroleum",
      "https://pt.wikipedia.org/wiki/Petr%C3%B3leo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Petroleum",
        "situacao": "ok",
        "texto": "Petroleum, also known as crude oil or simply oil, is a natural resource that appears as a yellowish-black liquid chemical mixture found in geological formations, consisting primarily of hydrocarbons. The term petroleum refers to both naturally occurring unprocessed crude oil, as well as to petroleum products that consist of refined crude oil.\n[…]\nIn 1858, Georg Christian Konrad Hunäus found a significant amount of petroleum while drilling for lignite in Wietze, Germany. Wietze later provided about 80% of German consumption in the Wilhelmine Era. The production stopped in 1963, but Wietze has hosted a petroleum museum since 1970. Oil sands have been mined since the 18th century. In Wietze, natural asphalt/bitumen has been explored since the 18th century.\n[…]\nPetroleum coke, used in speciality carbon products or as solid fuel.\n[…]\nIn petroleum industry parlance, production refers to the quantity of crude extracted from reserves, not the literal creation of the product.\n[…]\nControl of petroleum production has been a significant driver of international relations during much of the 20th and 21st centuries. Organizations like OPEC have played an outsized role in international politics. Some historians and commentators have called this the \"Age of Oil\" With the rise of renewable energy and addressing climate change some commentators expect a realignment of international power away from petrostates.\n[…]\n\"Oil rents\" have been described as connected with corruption in political literature. A 2011 study suggests that increases in oil rents increased corruption in countries with heavy government involvement in the production of oil. The study found that increases in oil rents \"significantly deteriorates political rights\".\n[…]\n\"Petroleum\" . The American Cyclopædia. 1879.\n[…]\n\"A Short History of Petroleum\", Scientific American, August 10, 1878, p. 85"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Petr%C3%B3leo",
        "situacao": "ok",
        "texto": "Petróleo (do latim petroleum; petrus [pedra] + oleum [óleo]; do grego: πετρέλαιον; romaniz.: petrélaion, [óleo da pedra]; do grego clássico: πέτρα;  petra [pedra] + έλαιον; elaion [azeite]; qualquer substância oleosa, no sentido de \"óleo bruto\") é uma mistura inflamável de substâncias oleosas, geralmente menos densa que a água, com cheiro característico e coloração que pode variar desde o incolor \n[…]\nA extração do petróleo é simplesmente a remoção do recurso a partir da reserva. O petróleo é frequentemente recuperado como uma emulsão de água e óleo. Produtos químicos especiais, chamados demulsificadores, são utilizados para separar o petróleo da água.\n[…]\nOs derrames de petróleo no mar são geralmente muito mais prejudicial do que aqueles em terra, uma vez que eles podem se espalhar por centenas de milhas náuticas em uma mancha de óleo que pode cobrir praias com uma fina camada de óleo. Isso pode matar aves marinhas, mamíferos, moluscos e outros organismos c.\n[…]\nOs derramamentos de petróleo em terra são mais facilmente controláveis se uma barragem de terra improvisada ser rapidamente construída em torno do local do derramamento antes que a maioria do petróleo escape. Além disso, os animais terrestres podem evitar o óleo com mais facilidade.\n[…]\nEmbora o petróleo bruto é predominantemente composto de vários hidrocarbonetos, certos compostos heterocíclicos de azoto, tais como piridina, picolina e quinolina, que são relatados como contaminantes associados com o petróleo bruto, assim como as instalações de processamento de óleo de xisto ou carvão. Estes compostos têm uma solubilidade muito elevada na água e, assim, tendem a mover-se com a água.\n[…]\nJames S. Robbins argumenta que o advento do querosene refinado do petróleo salvou algumas espécies de grandes baleias da extinção, fornecendo um substituto barato para o óleo de baleia e eliminando assim o imperativo econômico da baleação."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Usina Hidrelétrica de Itaipu",
      "descricao": "Usina hidrelétrica binacional no rio Paraná, na fronteira entre Brasil e Paraguai."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em guarani, o nome Itaipu, tirado de uma ilha que existia no local da usina, significa o quê?",
    "resposta": "Pedra que canta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Itaipu_Dam"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Itaipu_Dam",
        "situacao": "ok",
        "texto": "The Itaipu Dam (Guarani: Yjoko Itaipu [itajˈpu]; Portuguese: Barragem de Itaipu [itajˈpu]; Spanish: Represa de Itaipú [itajˈpu]) is a hydroelectric dam on the Paraná River located on the border between Brazil and Paraguay. It is the third-largest hydroelectric dam in the world in terms of produced energy.\n[…]\nThe name \"Itaipu\" is from an island that near the construction site, named in the Guarani language after the concept of a \"sounding stone.\" As of 2020, the Itaipu Dam's hydroelectric power plant produced the second-largest amount of electricity of any hydroelectric power plant in the world, only surpassed by the Three Gorges Dam plant in China. Itaipu also holds the 45th largest reservoir in the world.\n[…]\nOn May 17, 1974, the Itaipu Binacional entity was created to administer the plant's construction. The construction began in January of the following year. Brazil's (and Latin America's) first electric car was introduced in late 1974; it received the name Itaipu in honor of the project.\n[…]\nOn November 10, 2009, transmission from the plant was completely disrupted, possibly due to a storm damaging up to three high-voltage transmission lines. Itaipu itself was not damaged. This caused massive power outages in Brazil and Paraguay, blacking out the entire country of Paraguay for 15 minutes, and plunging Rio de Janeiro and São Paulo into darkness for more than 2 hours. 50 million people were reportedly affected. The blackout occurred at 22:13 local time.\n[…]\nThe Santa Maria Ecological Corridor now connects the Iguaçu National Park with the protected margins of Lake Itaipu, and via these margins with the Ilha Grande National Park.\n[…]\nThe Itaipu Transmission System[link removed]\n[…]\nPanoramic – Itaipu Binacional – Foz do Iguaçu – Brazil Archived 2019-06-28 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Usina_Hidrel%C3%A9trica_de_Itaipu",
        "situacao": "ok",
        "texto": "Usina Hidrelétrica de Itaipu (em castelhano:  Itaipú, em guarani:  Itaipu) é uma hidrelétrica binacional localizada no Rio Paraná, na fronteira entre o Brasil e o Paraguai. A barragem foi construída pelos dois países entre 1975 e 1982. O nome Itaipu foi tirado de uma ilha que existia perto do local de construção. Na língua tupi, o termo significa \"pedra na qual a água faz barulho\", através da junç\n[…]\nItaipu é uma palavra de origem tupi-guarani que significa \"pedra que canta\", através da junção de itá = pedra e ipo'ú = cantora, ou então \"pedra na qual a água faz barulho\", através da junção de itá (pedra), y (água, rio), e pu (barulho). Era o nome da pequena ilha que havia no atual local da usina, antes da obra.\n[…]\nAs primeiras pesquisas de campo para a elaboração do projeto foram feitas em pequenas balsas por técnicos brasileiros e paraguaios. O local escolhido para a construção foi um ponto do rio conhecido como Itaipu, que em tupi quer dizer \"a pedra que canta\". As dimensões do projeto também foram traçadas desde o início: a área da hidrelétrica vai de Foz do Iguaçu, no Brasil, e Ciudad del Este, no sul do Paraguai, até Guaíra e Salto del Guairá, no norte deste país.\n[…]\nEm 17 de maio de 1974, foi criada a entidade Itaipu Binacional, para gerenciar a construção da usina. O início efetivo das obras ocorreu em janeiro de 1975. Um consórcio de construtoras, liderado pela Andrade Gutierrez, executou o projeto.\n[…]\nA Itaipu Binacional é uma entidade binacional pertencente à República Federativa do Brasil e à República do Paraguai. Foi constituída pelo Tratado de Itaipu para a operação da usina hidrelétrica. Seu aspecto de empresa jurídica de direito privado binacional deve-se às ordens jurídicas de ambos os países às quais está submetida.\n[…]\nNa área afetada estavam diversos territórios considerados sagrados pelos índios guaranis, como os Salto de Sete Quedas.\n[…]\nTratado de Itaipu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Usina Hidrelétrica de Itaipu",
      "descricao": "Usina hidrelétrica binacional no rio Paraná, na fronteira entre Brasil e Paraguai."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na fronteira entre Brasil e Paraguai, a usina de Itaipu represa as águas de que rio?",
    "resposta": "Rio Paraná",
    "fonte": [
      "https://en.wikipedia.org/wiki/Itaipu_Dam",
      "https://pt.wikipedia.org/wiki/Itaipu_Binacional"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Itaipu_Dam",
        "situacao": "ok",
        "texto": "The Itaipu Dam (Guarani: Yjoko Itaipu [itajˈpu]; Portuguese: Barragem de Itaipu [itajˈpu]; Spanish: Represa de Itaipú [itajˈpu]) is a hydroelectric dam on the Paraná River located on the border between Brazil and Paraguay. It is the third-largest hydroelectric dam in the world in terms of produced energy.\n[…]\nThis was a joint declaration of the mutual interest in studying the exploitation of the hydro resources that the two countries shared in the section of the Paraná River starting from and including the Salto de Sete Quedas, to the Iguaçu River watershed. The treaty that gave origin to the power plant was signed in 1973.\n[…]\nIn 1970, the consortium formed by the companies ELC Electroconsult S.p.A. (from Italy) and IECO (from the United States)  won the international competition for the realization of the viability studies and for the elaboration of the construction project. Design studies began in February 1971. On April 26, 1973, Brazil and Paraguay signed the Itaipu Treaty, the legal instrument for the hydroelectric exploitation of the Paraná River by the two countries.\n[…]\nOn October 14, 1978, the Paraná River had its route changed, which allowed a section of the riverbed to dry so the dam could be built there.\n[…]\nWhen construction of the dam began in 1971, approximately 10,000 families living beside the Paraná River were displaced because of the construction.\n[…]\nThe Guaíra Falls was an effective barrier that separated freshwater species in the upper Paraná basin (with its many endemics) from species found below it, and the two are recognized as different ecoregions. After the falls disappeared, many species formerly restricted to one of these areas have been able to invade the other, causing problems typically associated with introduced species.\n[…]\nThe Itaipu Transmission System[link removed]"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Itaipu_Binacional",
        "situacao": "ok",
        "texto": "A Itaipu Binacional é uma entidade binacional pertencente à República Federativa do Brasil e à República do Paraguai. Foi constituída pelo Tratado de Itaipu para a operação da Usina Hidrelétrica de Itaipu. Seu aspecto de empresa jurídica de direito privado binacional deve-se às ordens jurídicas de ambos os países às quais está submetida.\n[…]\nEm 22 de julho de 1966, os ministros das Relações Exteriores do Brasil, Juracy Magalhães, e do Paraguai, Sapena Pastor, assinaram a \"Ata do Iguaçu\", uma declaração conjunta de interesse mútuo para estudar o aproveitamento dos recursos hídricos dos dois países, no trecho do Rio Paraná \"desde e inclusive o Salto de Sete Quedas até a foz do Rio Iguaçu\".\n[…]\nEm 1970, o consórcio formado pelas empresas PNC e ELC Electroconsult (da Itália) venceu a concorrência internacional para a realização dos estudos de viabilidade e para a elaboração do projeto da obra. O início do trabalho se deu em fevereiro de 1971. Em 26 de abril de 1973, Brasil e Paraguai assinaram o Tratado de Itaipu, instrumento legal para o aproveitamento hidrelétrico do Rio Paraná pelos dois países.\n[…]\nNo dia 14 de outubro de 1978, foi aberto o canal de desvio do Rio Paraná, que permitiu secar um trecho do leito original do rio para ali ser construída a barragem principal, em concreto. Outro marco importante, na área diplomática, foi a assinatura do Acordo Tripartite entre Brasil, Paraguai e Argentina, em 19 de outubro de 1979, para aproveitamento dos recursos hidráulicos no trecho do Rio Paraná desde as Sete Quedas até a foz do Rio da Prata.\n[…]\nEm abril de 2014, foi celebrado o Acordo de Cooperação entre Itaipu Binacional e a Administración Nacional de Electricidad (ANDE) para reforçar o Sistema Elétrico do Alto Paraná, no Paraguai."
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Smog",
      "descricao": "Tipo de poluição atmosférica urbana que forma uma névoa de fumaça e poluentes sobre as cidades."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra inglesa smog, usada para a névoa de poluição sobre as cidades, junta fumaça e que outra palavra?",
    "resposta": "Neblina (fog)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Smog"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Smog",
        "situacao": "ok",
        "texto": "Smog, or smoke fog, is a type of intense air pollution. The word \"smog\" was coined in the early 20th century, and is a portmanteau of the words smoke and fog to refer to smoky fog due to its opacity, and odour. The word was then intended to refer to what was sometimes known as pea soup fog, a familiar and serious problem in London from the 19th century to the mid-20th century, where it was commonl\n[…]\nThe severity of smog is often measured using automated optical instruments such as nephelometers, as haze is associated with visibility and traffic control in ports. Haze, however, can also be an indication of poor air quality, though this is often better reflected using accurate purpose-built air indexes such as the American Air Quality Index, the Malaysian API (Air Pollution Index), and the Singaporean Pollutant Standards Index.\n[…]\nIn the 1957 Warner Brothers cartoon, What's Opera, Doc, Elmer Fudd called for various calamities to befall Bugs Bunny, ending in a screamed \"SMOG!!\"\n[…]\nThe 1970 made-for-TV movie A Clear and Present Danger was one of the first American television network entertainment programs to warn about the problem of smog and air pollution, as it dramatized a man's efforts toward clean air after emphysema killed his friend.\n[…]\nThe history of smog in LA is detailed in Smogtown by Chip Jacobs and William J. Kelly.\n[…]\nThe 2025 documentary series Clearing the Air: The War on Smog follows the history of smog in Los Angeles, from the first sudden appearance of smoky clouds over the city in 1943, to the decades of scientific investigation and public pressure, to the creation of the US EPA and passage of the Clean Air Act, to current day with pollution less than 1% of what it was at its worst.\n[…]\nUpadhyay, Harikrishna (2016-11-07)\"All You Need To Know About Delhi Smog / Air Pollution – 10 Questions Answered\", Dainik Bhaskar. Retrieved on 7 November 2016."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Smog",
        "situacao": "ok",
        "texto": "Smog, ou nevoeiro de fumaça, é um tipo de poluição atmosférica intensa. A criação da palavra costuma ser atribuída ao início do século XX. Trata-se de uma aglutinação das palavras inglesas smoke (fumaça) e fog (nevoeiro), empregada para designar um nevoeiro impregnado de fumaça, por sua opacidade e seu odor.\n[…]\nO smog fotoquímico, observado, por exemplo, em Los Angeles, é uma forma de poluição atmosférica derivada das emissões de veículos com motores de combustão interna e de emissões industriais. Esses poluentes reagem na atmosfera sob a ação da luz solar, formando poluentes secundários que, juntamente com as emissões primárias, compõem o smog fotoquímico. Em outras cidades, como Deli, a intensidade do fenômeno pode ser agravada pela queima de resíduos agrícolas nas áreas vizinhas.\n[…]\nA edição de 26 de julho de 1905 do jornal londrino Daily Graphic citou Des Voeux: \"Ele disse que não era preciso recorrer à ciência para perceber que nas grandes cidades se produzia algo que não existia no campo: um nevoeiro enfumaçado, ou aquilo que se conhecia como 'smog'.\" No dia seguinte, o jornal afirmou que \"o doutor Des Voeux prestou um serviço público ao criar uma nova palavra para o nevoeiro de Londres\".\n[…]\nOs compostos orgânicos voláteis também chegam à atmosfera sem passar pela combustão. A evaporação de combustíveis nos tanques dos veículos e durante seu armazenamento libera precursores do smog fotoquímico. O uso de solventes orgânicos é outra fonte desses compostos. Por isso, as emissões que alimentam o smog não se limitam à fumaça ou aos gases que saem dos escapamentos e das chaminés.\n[…]\nA névoa carregada de poluentes permaneceu sobre a cidade enquanto persistiram essas condições meteorológicas.\n[…]\nGrande Nevoeiro de 1952, episódio de smog que causou milhares de mortes em Londres.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Chernobyl",
      "descricao": "Cidade do norte da Ucrânia que deu nome à usina nuclear onde ocorreu o acidente de 1986."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome da cidade ucraniana de Chernobyl é também o nome local de que planta?",
    "resposta": "Artemísia",
    "distratores": [
      "Urtiga",
      "Camomila",
      "Hortelã"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chernobyl"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chernobyl",
        "situacao": "ok",
        "texto": "Chernobyl, also known as Chornobyl, is a partially abandoned city in Vyshhorod Raion, Kyiv Oblast, Ukraine. It is located within the Chernobyl Exclusion Zone, 90 kilometres (60 mi) to the north of Kyiv and 160 kilometres (100 mi) to the southwest of Gomel in neighbouring Belarus. Prior to being evacuated in the aftermath of the Chernobyl disaster in 1986, it was home to approximately 14,000 reside\n[…]\nFirst mentioned as a ducal hunting lodge in Kievan Rus' in 1193, the city has changed hands multiple times over the course of its history. In the 16th century, Jews began moving into Chernobyl, and at the end of the 18th century, it had become a major centre of Hasidic Judaism under the Twersky dynasty. During the early 20th century, pogroms and associated emigration caused the local Jewish community to dwindle significantly.\n[…]\nThe names Chernobyl and Chornobyl are identical in form to the Russian and Ukrainian words for mugwort, which literally mean \"black stem\". It is likely, however, that the city's name in fact derives from the Old East Slavic personal name Чьрнобыль (Čǐrnobylǐ), combined with the possessive suffix -jь.\n[…]\nJews were brought to Chernobyl by Filon Kmita, during the Polish campaign of colonization. The first mentioning of Jewish community in Chernobyl is in the 17th century. In 1600 the first Roman Catholic church was built in the town. Local population was persecuted for holding Eastern Orthodox rite services. The traditionally Eastern Orthodox Ukrainian peasantry around the town were forcibly converted, by Poland, to the Ruthenian Uniate Church.\n[…]\nAaron Twersky of Chernobyl (1784–1871), rabbi\n[…]\nList of Chernobyl-related articles\n[…]\nChristopher, Matthew (11 December 2024). \"Tragedy Lingers Inside Chornobyl's Abandoned City\". Atlas Obscura.\n[…]\nMedia related to Chornobyl at Wikimedia Commons\n[…]\nChernobyl travel guide from Wikivoyage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chernobil",
        "situacao": "ok",
        "texto": "Chernobil, Chernóbil, Chernobyl, Tchernobil ou Tchernóbil (em ucraniano Чорнобиль, transl. Tchornobil') é uma cidade fantasma localizada no Raion Vyshhorod, ao norte do Óblast de Kiev, na Ucrânia.\n[…]\nA palavra Tchornobyl (também traduzida como Čornobyl') pode ter surgido a partir da união das palavras чорний (tchorny, \"preto\") e билля (billya, \"grama\" ou \"folhas\"), portanto, pode significar grama preta ou folhas pretas.[carece de fontes]? Há também especulações de que o nome da cidade tenha derivado da planta Artemisia vulgaris.\n[…]\nEm 26 de abril de 1986, ocorreu o acidente nuclear de Chernobil. O reator número 4 da central de Chernobil teve problemas técnicos e liberou uma nuvem radioativa contaminando pessoas, animais e o meio ambiente de uma vasta extensão de terras.\n[…]\nChernobilite é o nome descrito por duas fontes de mídia para formações cristalinas altamente radioativas e incomuns encontradas na usina nuclear de Chernobil após a explosão. Foi descoberto devido ao acidente nuclear de Chernobil.\n[…]\nDurante a Invasão da Ucrânia pela Rússia em 2022, a usina de Chernobil foi palco de um confronto entre as forças russas e ucranianas, conhecido como a Batalha de Chernobil. Chernobil é um corredor importante para a capital Kiev, onde as tropas russas podem vir da Bielorrússia até a capital do país, a menos de 100 km de distancia. Dando início assim a Batalha de Kiev.\n[…]\nUsina Nuclear de Chernobil\n[…]\nZona de exclusão de Chernobil\n[…]\nUnited Nations Chernobyl Recovery and Development Programme",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Central Nuclear Almirante Álvaro Alberto",
      "descricao": "Complexo de usinas nucleares de Angra dos Reis, no estado do Rio de Janeiro."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome oficial da central nuclear de Angra dos Reis homenageia que almirante, pioneiro da energia nuclear no Brasil?",
    "resposta": "Álvaro Alberto",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Central_Nuclear_Almirante_%C3%81lvaro_Alberto"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Central_Nuclear_Almirante_%C3%81lvaro_Alberto",
        "situacao": "ok",
        "texto": "Central Nuclear Almirante Álvaro Alberto (CNAAA) é o complexo formado pelo conjunto das usinas nucleares Angra 1, Angra 2 e Angra 3 (em construção), de propriedade da Eletronuclear, subsidiária da Eletrobras. Elas são o resultado de um longo programa nuclear brasileiro que remonta à década de 1950 com a criação do Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq) liderado na épo\n[…]\nEm 2010, foram produzidos na CNAAA 14 415 gigawatts-hora (GWh), correspondendo a três por cento do consumo de energia elétrica do Sistema Interligado Nacional. De 1985, quando entrou em operação comercial a usina Angra 1, até 2005, a produção acumulada de energia das usinas nucleares Angra 1 e 2 somam 100 000 GWh, o que equivale à produção anual da usina hidrelétrica Itaipu Binacional, na fronteira Brasil-Paraguai.\n[…]\nA área da Central abriga, ainda, duas subestações elétricas (138 e 500 kV) operadas por Furnas Centrais Elétricas S.A., os depósitos de armazenamento de rejeitos de baixa e média atividade e diversas instalações auxiliares (prédios de engenharia, almoxarifados etc.). A potência total das usinas é de 2007 MW, dos quais 657MW em Angra 1 e 1350MW em Angra 2. Adicionalmente, está em construção a usina nuclear Angra 3, com capacidade maior que a Angra 2.\n[…]\nUsinas nucleares da  Central Nuclear Almirante Álvaro Alberto:[carece de fontes]?\n[…]\nAngra 1 - 657 MW\n[…]\nAngra 2 - 1350 MW\n[…]\nA usina Angra 1 está situada na Praia de Itaorna, em Angra dos Reis, foi a primeira usina do programa nuclear brasileiro, que atualmente conta também com Angra 2 em operação, Angra 3 em construção, conforme o planejamento da Empresa de Pesquisa Energética - EPE. Angra 1 teve sua construção iniciada em 1972, tendo recebido licença para operação comercial da Comissão Nacional de Energia Nuclear - CNEN em dezembro de 1984.\n[…]\nIndústrias Nucleares do Brasil\n[…]\nBrasil e as armas de destruição em massa\n[…]\n«Página oficial»"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Central Nuclear Almirante Álvaro Alberto",
      "descricao": "Complexo de usinas nucleares de Angra dos Reis, no estado do Rio de Janeiro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que elemento químico é usado como combustível nos reatores das usinas nucleares de Angra dos Reis?",
    "resposta": "Urânio",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Central_Nuclear_Almirante_%C3%81lvaro_Alberto"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Central_Nuclear_Almirante_%C3%81lvaro_Alberto",
        "situacao": "ok",
        "texto": "Central Nuclear Almirante Álvaro Alberto (CNAAA) é o complexo formado pelo conjunto das usinas nucleares Angra 1, Angra 2 e Angra 3 (em construção), de propriedade da Eletronuclear, subsidiária da Eletrobras. Elas são o resultado de um longo programa nuclear brasileiro que remonta à década de 1950 com a criação do Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq) liderado na épo\n[…]\nEm 2001, entrou em operação a usina Angra 2 com 1350 MW. Essa usina foi construída com tecnologia alemã Siemens/KWU, ainda no âmbito do Acordo Nuclear Brasil-Alemanha. Em seu primeiro ano de operação, Angra 2 atingiu um fator de capacidade de quase noventa por cento.\n[…]\nA área da Central abriga, ainda, duas subestações elétricas (138 e 500 kV) operadas por Furnas Centrais Elétricas S.A., os depósitos de armazenamento de rejeitos de baixa e média atividade e diversas instalações auxiliares (prédios de engenharia, almoxarifados etc.). A potência total das usinas é de 2007 MW, dos quais 657MW em Angra 1 e 1350MW em Angra 2. Adicionalmente, está em construção a usina nuclear Angra 3, com capacidade maior que a Angra 2.\n[…]\nUsinas nucleares da  Central Nuclear Almirante Álvaro Alberto:[carece de fontes]?\n[…]\nEntre os argumentos favoráveis à continuidade da obra estão a estabilidade e proximidade dos centros consumidores (não sendo intermitentes como as fontes eólica e solar), a contribuição para a descarbonização por não emitir gases de efeito estufa, possibilitando ao país cumprir metas climáticas e fornecer energia limpa em grande escala, o aproveitando das reservas de urânio do Brasil, além de fatores estratégicos, como a ampliação das fontes de energia nuclear no mundo, com o desenvolvimento dos pequenos reatores modulares (SMRs), com a maior demanda de energia global,  evitando a perda da expertise acumulada no país e mantendo o Brasil no clube dos países com domínio da tecnologia nuclear."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Cubatão",
      "descricao": "Município industrial da Baixada Santista, em São Paulo, famoso pela poluição dos anos oitenta."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Nos anos oitenta, por causa da poluição das suas indústrias, a cidade paulista de Cubatão ganhou que apelido sombrio?",
    "resposta": "Vale da Morte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cubat%C3%A3o",
      "https://pt.wikipedia.org/wiki/Cubat%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cubat%C3%A3o",
        "situacao": "ok",
        "texto": "Cubatão is a city in the state of São Paulo, Brazil, 12 kilometers away from Santos seaport, the largest in Latin America. It is part of the Metropolitan Region of the Baixada Santista. The population is 112,476 (2022 Census) in an area of 143.649 km2. It hosts industries, refining oil, steel mills and fertilizers.\n[…]\nIn the early 1980s, Cubatão was one of the most polluted cities in the world, nicknamed \"Valley of Death\", due to births of brainless children and respiratory, hepatic and blood illnesses. High air pollution was killing forest over hills around the city. It was ranked the top ten dirtiest cities in the world by Popular Science.\n[…]\nStrong efforts were made to diminish pollution in the city, costing US$ 1.2 billion so far. Although conditions have improved, it is impossible to completely clean the contaminated soil and groundwater. Furthermore, as long as large industries continue to work in such a small area, there will always be some pollution.\n[…]\nCubatão was mentioned as the \"world's most polluted town\" in the Jello Biafra-Sepultura collaboration \"Biotech is Godzilla\" on the group's 1993 album Chaos A.D.\n[…]\nCubatão is the name of an A La Carte song from 1981.\n[…]\nPiaçaguera is a location within the city of Cubatão in the state of São Paulo, Brazil. The Rodovia Cônego Domênico Rangoni highway, formerly known as the Piaçaguera-Guarujá highway, starts there. It connects the Via Anchieta to Guarujá, crossing the Bertioga canal. It is there that the climb through the Serra do Mar escarpment begins by way of the Santos-Jundiaí railway line.\n[…]\nCubatão web site\n[…]\nEncontraCubatão – Find everything about Cubatão city"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cubat%C3%A3o",
        "situacao": "ok",
        "texto": "Cubatão é um município do estado brasileiro de São Paulo, na Região Metropolitana da Baixada Santista, microrregião de Santos. O município ocupa 142,879 km² de área e sua população, conforme estimativas do IBGE de 2025, era de 114 870 habitantes.\n[…]\nCom um grande parque industrial, Cubatão enfrentou no passado a ameaça constante da poluição. Na década de 1980, foi considerada pela ONU como a cidade mais poluída do mundo. Contudo, com a união de indústrias, comunidade e governo, a cidade conseguiu controlar 98% do nível de poluentes no ar. Por isso, em 1992 recebeu da ONU o título de \"Cidade-símbolo da Recuperação Ambiental\".\n[…]\nCom a morte do prefeito, assumiu seu vice, José Rodrigues Lopes, que terminou seu mandato em 1965, sendo sucedido pelo médico Luís Camargo. Nesta fase, a do endurecimento do Regime Militar iniciado em 1964, o Governo Federal tornou Cubatão Área de Segurança Nacional com a Lei 5 449, em vista de seu interesses estratégicos industrial, elétrico e de fornecimento hídrico. Começou a fase dos interventores.\n[…]\nNesta fase, a industrialização começa a cobrar seu alto preço ambiental: Cubatão tem uma degeneração violenta e começa o mito do \"Vale da Morte\"; com o incêndio da Vila Socó, em 25 de fevereiro de 1984, a tragédia ganha contornos nacionais e mundiais, pois a explosão dos dutos da Petrobras, sobre os quais se erguia uma favela que foi pulverizada, pôs a nu os problemas advindos de políticas energéticas não planejadas e de erros.\n[…]\nFerreira, Lúcia da Costa (2006). «OS FANTASMAS DO VALE: conflitos em torno do desastre ambiental de Cubatão, SP». REVISTA DE CIÊNCIAS SOCIAIS - POLÍTICA & TRABALHO. 25 (0): 165–188. ISSN 1517-5901"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Rio+20",
      "descricao": "Conferência das Nações Unidas sobre Desenvolvimento Sustentável, realizada no Rio de Janeiro em 2012."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A conferência da ONU de 2012 no Rio de Janeiro se chamou Rio mais vinte porque aconteceu vinte anos depois de que encontro?",
    "resposta": "Eco-92 (Rio-92)",
    "fonte": [
      "https://en.wikipedia.org/wiki/United_Nations_Conference_on_Sustainable_Development"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/United_Nations_Conference_on_Sustainable_Development",
        "situacao": "ok",
        "texto": "The United Nations Conference on Sustainable Development (UNCSD), also known as Rio 2012, Rio+20 (Portuguese pronunciation: [ˈʁi.u ˈmajʒ ˈvĩtʃi]), or Earth Summit 2012 was the third international conference on sustainable development aimed at reconciling the economic and environmental goals of the global community.\n[…]\nDuring the final three days of the Conference, from 20 to 22 June 2012, world leaders and representatives met for intense meetings which culminated in finalizing the non-binding document, \"The Future We Want\", which opens with: \"We the Heads of State and Government and high-level representatives, having met at Rio de Janeiro, Brazil, from 20 to 22 June 2012, with the full participation of civil society, renew our commitment to sustainable development and to ensuring the promotion of an economically, socially and environmentally sustainable future for our planet and for present and future generations.\"\n[…]\nAt the Rio+20 Conference in June 2012, the heads of state of the 192 governments in attendance, renewed their political commitment to sustainable development and declared their commitment to the promotion of a sustainable future through the 49-page nonbinding document,  \"The Future We Want: Outcome document of the United Nations Conference on Sustainable Development Rio de Janeiro, Brazil, 20–22 June 2012.\" The dates 20 to 22 June reflect the three-day meeting of world leaders, the culmination of Rio+20.\n[…]\nThe Danish artist Jens Galschiøt, the leader of the group AIDOH, and the Group 92 used his Freedom to Pollute sculptures to focus on global warming and its resulting increased flow of refugees. About 20,000 flyers about Freedom to Pollute were distributed during Rio+20 and a related television program was produced in Denmark.\n[…]\nInternational Conference on Sustainable Development"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio%2B20",
        "situacao": "ok",
        "texto": "A Conferência das Nações Unidas sobre Desenvolvimento Sustentável (CNUDS), conhecida também como Rio+20, foi uma conferência realizada entre os dias 13 e 22 de junho de 2012 na cidade do Rio de Janeiro, cujo objetivo era discutir sobre a renovação do compromisso político com o desenvolvimento sustentável.\n[…]\nDe acordo com o historiador Felix Dodds, em seu livro de 2014, de sua coautoria, intitulado From Rio+20 to a New Development Agenda: Building a Bridge to a Sustainable Future, o processo preparatório formal da Conferência das Nações Unidas sobre Desenvolvimento Sustentável – Rio+20 pode ser dividido em três fases.\n[…]\nDe 20 a 22 de junho de 2012, líderes e representantes mundiais se reuniram para intensas reuniões que culminaram na finalização do documento não vinculativo, \"O Futuro que Queremos: Documento Final da Conferência das Nações Unidas sobre Desenvolvimento Sustentável Rio de Janeiro, Brasil, 20–22 de junho de 2012\", que abre com, \"Nós, Chefes de Estado e de Governo e representantes de alto nível\", reunidos no Rio de Janeiro, Brasil, de 20 a 22 de junho de 2012, com a plena participação da sociedade civil, renovamos o nosso compromisso com o desenvolvimento sustentável e com a garantia da promoção de um futuro economicamente, socialmente e ambientalmente sustentável para o nosso planeta e para as gerações presentes e futuras.\"\n[…]\nNa Conferência Rio+20, em junho de 2012, os chefes de Estado dos 192 governos presentes renovaram o seu compromisso político com o desenvolvimento sustentável e declararam o seu compromisso com a promoção de um futuro sustentável através do documento não vinculativo de 49 páginas, \"O Futuro que Queremos: Documento Final da Conferência das Nações Unidas sobre Desenvolvimento Sustentável Rio de Janeiro, Brasil, 20-22 de junho de 2012\".\n[…]\nECO-92",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Eco-92",
      "descricao": "Conferência das Nações Unidas sobre Meio Ambiente e Desenvolvimento, realizada no Rio de Janeiro em 1992."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Realizada no Rio de Janeiro em 1992, a conferência ambiental conhecida aqui como Eco-92 ganhou que nome no exterior?",
    "resposta": "Cúpula da Terra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Earth_Summit"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Earth_Summit",
        "situacao": "ok",
        "texto": "The United Nations Conference on Environment and Development (UNCED), also known as the Rio de Janeiro Conference or the Earth Summit (Portuguese: ECO92, Cúpula da Terra), was a major United Nations conference held in Rio de Janeiro from 3 to 14 June 1992.\n[…]\nAlthough President George H. W. Bush signed the Earth Summit's Convention on Climate, his EPA Administrator William K. Reilly acknowledges that U.S. goals at the conference were difficult to negotiate and the agency's international results were mixed, including the U.S. failure to sign the proposed Convention on Biological Diversity.\n[…]\nCritics point out that many of the agreements made in Rio have not been realized regarding such fundamental issues as fighting poverty and cleaning up the environment. Malaysia was successful at blocking the US-proposed convention on forests and its prime-minister Mahathir Mohamad accused later the global North of exercising eco-imperialism at this summit. According to Vandana Shiva, Earth Summit create a \"moral base for green imperialism\".\n[…]\nTwo years prior to UNCED youth organized internationally to prepare for the Earth Summit. Youth concerns were consolidated at a World Youth Environmental Meeting, Juventud (Youth) 92, held in Costa Rica, before the Earth Summit.\n[…]\nEarth Summits - list of the other summits before and after Rio 1992 (the first one in 1972)\n[…]\nDocuments from the United Nations Conference on Environment and Development (also known as UNCED or the Earth Summit) Archived 19 January 2012 at the Wayback Machine held in Rio de Janeiro, Brazil, 1992\n[…]\nUnited Nations Conference on Environment and Development, Rio de Janeiro, Brazil, 3–14 June 1992\n[…]\nA critical New Internationalist keynote about the 1992 Rio Earth Summit"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Confer%C3%AAncia_das_Na%C3%A7%C3%B5es_Unidas_sobre_Meio_Ambiente_e_Desenvolvimento",
        "situacao": "ok",
        "texto": "A Conferência das Nações Unidas sobre Meio Ambiente e Desenvolvimento (CNUMAD), também conhecida como Eco-92, Cúpula da Terra, Cimeira do Verão, Conferência do Rio de Janeiro e Rio 92, foi uma conferência de chefes de estado organizada pelas Nações Unidas e realizada de 3 a 14 de junho de 1992 na cidade do Rio de Janeiro, no Brasil. Seu objetivo foi debater os problemas ambientais mundiais.\n[…]\nA conferência de Estocolmo, realizada em junho de 1972, foi o primeiro grande evento sobre meio ambiente realizado no mundo. Seu objetivo era basicamente o mesmo da Cúpula da Terra de 1992. Esta conferência, bem como o relatório Relatório Brundtland, publicado em 1987, pelas Nações Unidas, lançaram as bases para a ECO-92.\n[…]\nDurante o Fórum Global, foi aprovado o Tratado de Educação Ambiental para Sociedades Sustentáveis e Responsabilidade Global. No dia 6 de junho de 1992, educadores e educadoras presentes na Rio 92 aprovaram o Tratado no Fórum Global que foi entregue em 9 de junho para as autoridades governamentais presentes na Conferência, juntamente com outros tratados da sociedade civil.\n[…]\nDez anos após a ECO-92, a ONU realizou a Cúpula Mundial sobre Desenvolvimento Sustentável em Joanesburgo (África do Sul), a chamada Rio+10 ou conferência de Joanesburgo. O objetivo principal da Conferência seria rever as metas propostas pela Agenda 21 e direcionar as realizações às áreas que requerem um esforço adicional para sua implementação, porém, o evento tomou outro direcionamento, voltado para debater quase que exclusivamente os problemas de cunho social.\n[…]\nAs três convenções multilaterais sobre temas ambientais criadas na Rio-92, receberam o nome \"Convenções do Rio\". Após alguns anos da criação das convenções, a comunidade internacional e especialistas começaram a reforçar a importância delas trabalharem de maneira conjunta e integrada, algo conhecido como \"buscar as sinergias\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Primavera Silenciosa",
      "descricao": "Livro de 1962 da bióloga americana Rachel Carson sobre os efeitos dos pesticidas no ambiente."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O título do livro Primavera Silenciosa, de Rachel Carson, evoca uma primavera sem o som de que animais, mortos por pesticidas?",
    "resposta": "Pássaros",
    "fonte": [
      "https://en.wikipedia.org/wiki/Silent_Spring"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Silent_Spring",
        "situacao": "ok",
        "texto": "Silent Spring is an environmental science book by Rachel Carson. Published on September 27, 1962, the book documented the environmental harm caused by the indiscriminate use of DDT, a pesticide used by soldiers during World War II. Carson accused the chemical industry of spreading disinformation and public officials of accepting the industry's marketing claims unquestioningly.\n[…]\nIn the late 1950s, Carson began to work on environmental conservation, especially environmental problems that she correctly believed were caused by synthetic pesticides. The result of her research was Silent Spring, which brought environmental concerns to the American public.\n[…]\nPesticide use became a major public issue after a CBS Reports television special, The Silent Spring of Rachel Carson, which was broadcast on April 3, 1963. The program included segments of Carson reading from Silent Spring and interviews with other experts, mostly critics including White-Stevens. According to biographer Linda Lear, \"in juxtaposition to the wild-eyed, loud-voiced Dr.\n[…]\nRuckelshaus' conclusion was that DDT could not be used safely. History professor Gary Kroll wrote, \"Rachel Carson's Silent Spring played a large role in articulating ecology as a 'subversive subject'—as a perspective that cuts against the grain of materialism, scientism, and the technologically engineered control of nature.\"\n[…]\nFormer Vice President of the United States and environmentalist Al Gore wrote an introduction to the 1992 edition of Silent Spring. He wrote: \"Silent Spring had a profound impact ... Indeed, Rachel Carson was one of the reasons that I became so conscious of the environment and so involved with environmental issues  ... [she] has had as much or more effect on me than any, and perhaps than all of them together.\"\n[…]\nRachel Carson's Silent Spring Turns 50 – Elizabeth Grossman – The Atlantic\n[…]\nThe Rachel Carson Council"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Silent_Spring",
        "situacao": "ok",
        "texto": "Silent Spring (no Brasil/Portugal: Primavera Silenciosa) é um livro escrito por Rachel Carson e publicado pela editora Houghton Mifflin em Setembro de 1962. O livro é amplamente creditado como tendo ajudado no lançamento do movimento ambientalista.\n[…]\nO New Yorker começou a editar Silent Spring em Junho de 1962, tendo sido publicado em forma de livro mais tarde nesse ano. Quando o livro Silent Spring foi publicado, Rachel Carson era já uma escritora bem conhecida na área da história natural, mas não tinha sido previamente uma crítica social.\n[…]\nO livro foi amplamente lido, especialmente após a seleção pelo Book-of-the-Month Club e após a presença na lista de best-sellers, tendo inspirado ampla preocupação pública com os pesticidas e poluição do ambiente natural. Silent Spring facilitou o banimento do pesticida DDT em 1969 na Suíça e  em 1972 nos Estados Unidos.\n[…]\nO livro documentou o efeitos deletérios dos pesticidas no ambiente, particularmente em aves. Carson disse que tinha sido descoberto que o DDT causava a diminuição da espessura das cascas de ovos, resultando em problemas reprodutivos e em morte. Também acusou a indústria química de disseminar desinformação e de se aceitar as argumentações dessa indústria de maneira pouco crítica.\n[…]\nUma sequência, Beyond Silent Spring, com co-autoria de H.F. van Emden e David Peakall, foi publicada em 1996.\n[…]\nTexto inicialmente baseado na tradução do artigo «Silent Spring» na Wikipédia em inglês (acessado nesta versão).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Primavera Silenciosa",
      "descricao": "Livro de 1962 da bióloga americana Rachel Carson sobre os efeitos dos pesticidas no ambiente."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Lançado em 1962, o livro Primavera Silenciosa ajudou a levar à proibição agrícola de que inseticida nos Estados Unidos?",
    "resposta": "DDT",
    "fonte": [
      "https://en.wikipedia.org/wiki/Silent_Spring"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Silent_Spring",
        "situacao": "ok",
        "texto": "Silent Spring is an environmental science book by Rachel Carson. Published on September 27, 1962, the book documented the environmental harm caused by the indiscriminate use of DDT, a pesticide used by soldiers during World War II. Carson accused the chemical industry of spreading disinformation and public officials of accepting the industry's marketing claims unquestioningly.\n[…]\nMost of the book's scientific chapters were reviewed by scientists with relevant expertise, among whom Carson found strong support. Carson attended the White House Conference on Conservation in May 1962; Houghton Mifflin distributed proof copies of Silent Spring to many of the delegates and promoted the upcoming serialization in The New Yorker. Carson also sent a proof copy to Supreme Court Associate Justice William O.\n[…]\nThough Silent Spring had generated a fairly high level of interest based on pre-publication promotion, this became more intense with its serialization, which began in the June 16, 1962, issue. This brought the book to the attention of the chemical industry and its lobbyists, as well as the American public.\n[…]\nIn the weeks before the September 27, 1962, publication, there was strong opposition to Silent Spring from the chemical industry. DuPont, a major manufacturer of DDT and 2,4-D, and Velsicol Chemical Company, the only manufacturer of chlordane and heptachlor, were among the first to respond. DuPont compiled an extensive report on the book's press coverage and estimated impact on public opinion.\n[…]\nDoyle, Jack “Power in the Pen”: Silent Spring: 1962 (Publishing, Politics, Ecology) pophistorydig.com\n[…]\nSilent Spring, A Visual History curated by the Michigan State University Museum\n[…]\nRachel Carson's Silent Spring Turns 50 – Elizabeth Grossman – The Atlantic\n[…]\nGriswold, Eliza; How Silent Spring Ignited the Environmental Movement The New York Times September 21, 2012"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Silent_Spring",
        "situacao": "ok",
        "texto": "Silent Spring (no Brasil/Portugal: Primavera Silenciosa) é um livro escrito por Rachel Carson e publicado pela editora Houghton Mifflin em Setembro de 1962. O livro é amplamente creditado como tendo ajudado no lançamento do movimento ambientalista.\n[…]\nO New Yorker começou a editar Silent Spring em Junho de 1962, tendo sido publicado em forma de livro mais tarde nesse ano. Quando o livro Silent Spring foi publicado, Rachel Carson era já uma escritora bem conhecida na área da história natural, mas não tinha sido previamente uma crítica social.\n[…]\nO livro foi amplamente lido, especialmente após a seleção pelo Book-of-the-Month Club e após a presença na lista de best-sellers, tendo inspirado ampla preocupação pública com os pesticidas e poluição do ambiente natural. Silent Spring facilitou o banimento do pesticida DDT em 1969 na Suíça e  em 1972 nos Estados Unidos.\n[…]\nSilent Spring tem sido colocado em muitas listas de melhores livros não-ficcionais do século XX. No Modern Library List of Best 20th-Century Nonfiction era número 5 e número 78 no conservador National Review. Mais recentemente, Silent Spring foi nomeado um dos 25 maiores livros de ciência de todos os tempos pelos editores da Discover Magazine.\n[…]\nUma sequência, Beyond Silent Spring, com co-autoria de H.F. van Emden e David Peakall, foi publicada em 1996.\n[…]\nTexto inicialmente baseado na tradução do artigo «Silent Spring» na Wikipédia em inglês (acessado nesta versão).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Instituto Chico Mendes de Conservação da Biodiversidade",
      "descricao": "Autarquia federal brasileira, criada em 2007, que administra as unidades de conservação federais."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Criado em 2007, o órgão federal que cuida das unidades de conservação do Brasil leva o nome de que seringueiro acreano?",
    "resposta": "Chico Mendes",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Instituto_Chico_Mendes_de_Conserva%C3%A7%C3%A3o_da_Biodiversidade"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Instituto_Chico_Mendes_de_Conserva%C3%A7%C3%A3o_da_Biodiversidade",
        "situacao": "ok",
        "texto": "Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio) é uma autarquia brasileira criado em 2007 (lei n°11.516), vinculada ao Ministério do Meio Ambiente e integrada ao Sistema Nacional do Meio Ambiente (SISNAMA). Possui as atribuições de planejar e fiscalizar as unidades de conservação federais, também de aumentar e executar pesquisas, além de proteger a biodiversidade no Brasil.\n[…]\nÓrgãos finalísticos especializados, como a Diretoria de Criação e Manejo de Unidades de Conservação, a Diretoria de Ações Socioambientais e Consolidação Territorial, e a Diretoria de Pesquisa, Avaliação e Monitoramento da Biodiversidade;\n[…]\nUnidades descentralizadas de execução territorial, incluindo Gerências Regionais, Coordenações Territoriais, Unidades de Conservação Federais (UCs), Centros Nacionais de Pesquisa e Conservação e o Centro de Formação em Conservação da Biodiversidade;\n[…]\nÓrgão colegiado, representado pelo Comitê Gestor do ICMBio.\n[…]\nO ICMBio edita desde 2011 a revista científica eletrônica Biodiversidade Brasileira, destinada a divulgar resultados de pesquisas, manejos, monitoramento e gestão de unidades de conservação federais. Em 12 de maio de 2025, a revista teve seus objetivos, princípios e estrutura editorial reformulados pela Portaria ICMBio nº 1.742, visando ampliar a disseminação de conhecimento científico sobre conservação da biodiversidade e práticas de proteção ambiental no Brasil.\n[…]\nEm 2023, o instituto é responsável pela gestão e proteção de 335 unidades de conservação federais em todo o território nacional, abrangendo áreas que somam milhões de hectares e contemplam diferentes biomas brasileiros. Até então, a autarquia já havia avaliado mais de 12.262 espécies que vivem nestas áreas protegidas, reforçando seu papel central na conservação da biodiversidade nacional.\n[…]\nCentro Nacional de Pesquisa e Conservação de Cavernas, (ICMBio-Cecav)"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Acidente nuclear de Chernobyl",
      "descricao": "Explosão do reator 4 da usina nuclear de Chernobyl, na então União Soviética, em abril de 1986."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em abril de 1986, a explosão do reator de Chernobyl aconteceu durante que tipo de procedimento?",
    "resposta": "Um teste de segurança",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chernobyl_disaster"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chernobyl_disaster",
        "situacao": "ok",
        "texto": "On 26 April 1986, reactor 4 of the Chernobyl Nuclear Power Plant, located near Pripyat in the Ukrainian SSR of the Soviet Union, exploded. The accident resulted in dozens of direct deaths and a major release of radioactive material into the environment, causing widespread health effects and requiring the establishment of the Chernobyl exclusion zone. The response involved more than 500,000 personn\n[…]\nIn direct response to the Chernobyl disaster, a conference to create a Convention on Early Notification of a Nuclear Accident was called in 1986 by the International Atomic Energy Agency. The resulting treaty has bound members to provide notification of any nuclear and radiation accidents that occur that could affect other states, along with the Convention on Assistance in the Case of a Nuclear Accident or Radiological Emergency.\n[…]\nA photographic essay by photojournalist Paul Fusco documents problems in the children in the Chernobyl region. No evidence is offered to suggest these problems are in any way related to the nuclear incident The work of photojournalist Michael Forster Rothbart documents the human impact of the disaster on residents who stayed in the affected area.\n[…]\nIndividual involvement in the Chernobyl disaster – People involved in the nuclear accident\n[…]\nList of Chernobyl-related articles – 1986 nuclear accident in the Soviet UnionPages displaying short descriptions of redirect targets\n[…]\nConsequences of the Chernobyl disaster in France\n[…]\nOe, Misari; Takebayashi, Yui; Sato, Hideki; Maeda, Masaharu (13 July 2021). \"Mental Health Consequences of the Three Mile Island, Chernobyl, and Fukushima Nuclear Disasters: A Scoping Review\". International Journal of Environmental Research and Public Health. 18 (14): 7478. doi:10.3390/ijerph18147478. PMC 8304648. PMID 34299933.\n[…]\nFootage and documentary films about Chernobyl disaster on Net-Film Newsreels and Documentary Films Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Acidente_nuclear_de_Chernobil",
        "situacao": "ok",
        "texto": "Desastre de Chernobil (em ucraniano:  Чорнобильська катастрофа, Tchornobylska katastrofa – Catástrofe de Chernobil; também conhecido como acidente de Chernobil) foi um acidente nuclear catastrófico ocorrido em 26 de abril de 1986 no reator nuclear n.º 4 da Usina Nuclear de Chernobil, perto da cidade de Pripiate, no norte da Ucrânia Soviética, próximo da fronteira com a Bielorrússia Soviética.\n[…]\nO acidente ocorreu durante um teste de segurança ao início da madrugada que simulava uma falta de energia da estação, durante a qual os sistemas de segurança de emergência e de regulagem de energia foram intencionalmente desligados. Uma combinação de falhas inerentes no projeto do reator, bem como dos operadores dos reatores que organizaram o núcleo de uma maneira contrária à lista de verificação para o teste, resultou em condições de reação descontroladas.\n[…]\nO desastre começou durante um teste em 26 de abril de 1986 no reator 4 da Usina Nuclear V. I. Lenin, perto de Pripiate e nas proximidades da fronteira administrativa com a Bielorrússia e o rio Dnieper. Houve um pico repentino e inesperado de energia. Quando os operadores tentaram um desligamento de emergência, ocorreu um aumento muito maior na produção de energia. Este segundo pico levou a uma ruptura do vaso do reator e a uma série de explosões de vapor.\n[…]\nAnatoly Diatlov acabou virando uma das faces do desastre, já que foi sob sua supervisão que o teste de segurança fracassou, levando ao acidente. Ele foi condenado por \"má gestão criminosa de empreendimentos potencialmente explosivos\" e sentenciado a dez anos de prisão — mas ele serviu apenas três. Diatlov, contudo, negou a responsabilidade pelo acidente. Ele se dizia assombrado pelo que aconteceu e botou a culpa do ocorrido em falhas mecânicas e de design dos reatores RBMK e não em falha humana.\n[…]\nJornal do Brasil de 29 de Abril de 1986: Acidente na URSS leva radiação à Suécia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Acidente radiológico de Goiânia",
      "descricao": "Contaminação radioativa ocorrida em Goiânia em 1987, a partir de um aparelho de radioterapia abandonado."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1987, em Goiânia, que material radioativo, retirado de um aparelho de radioterapia abandonado, contaminou mais de duzentas pessoas?",
    "resposta": "Césio-137",
    "fonte": [
      "https://en.wikipedia.org/wiki/Goi%C3%A2nia_accident"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Goi%C3%A2nia_accident",
        "situacao": "ok",
        "texto": "The Goiânia accident (Brazilian Portuguese: [ɡo(j)ˈjɐniɐ]), also known locally as the caesium-137 accident/caesium-137 Goiânia, was a radioactive contamination accident that occurred on September 13, 1987, in Goiânia, Goiás, Brazil, after an unsecured radiotherapy source, inside a lead-and-steel medical device, was found by scavenger thieves at an abandoned hospital site in the city.\n[…]\nThe radiation source in the Goiânia accident was a small capsule containing about 93 grams (3.3 oz) of highly radioactive caesium chloride (a caesium salt) made with the radioactive isotope caesium-137, and encased in a shielding canister made of lead and steel. The source was positioned in a container of the wheel type, where the wheel turns inside the casing to move the source between the storage and irradiation positions.\n[…]\nThe Instituto Goiano de Radioterapia (IGR), a private radiotherapy institute in Goiânia, was one kilometre (0.6 mi) northwest of Praça Cívica, the administrative center of the city. In 1985, IGR moved to new premises, but left behind a caesium-137-based radiotherapy unit purchased in 1977. In 1986, the fate of the abandoned site was disputed in the Court of Goiás between IGR and the Society of Saint Vincent de Paul, then owner of the premises.\n[…]\nThe Goiânia accident spread significant radioactive contamination throughout the Aeroporto, Central, and Ferroviários districts. Even after the cleanup, 7 TBq of radioactivity remained unaccounted for.\n[…]\nThe 1990 film, Césio 137 – O Pesadelo de Goiânia (Caesium-137 – The Nightmare of Goiânia), is a Brazilian dramatisation of the incident by Roberto Pires. It won several awards at the 1990 Festival de Brasília. On his 1992 album Amor y Control, Rubén Blades dedicated the song \"El Cilindro\" to the Goiânia tragedy. Cesium Fallout, a 2024 Hong Kong disaster thriller film, was partially inspired by the Goiânia accident."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Acidente_radiol%C3%B3gico_de_Goi%C3%A2nia",
        "situacao": "ok",
        "texto": "Acidente radiológico de Goiânia, amplamente conhecido como acidente com o césio-137, foi um grave episódio de contaminação por radioatividade ocorrido na cidade de Goiânia, Goiás, Brasil. A contaminação teve início em 13 de setembro de 1987, quando um aparelho de radioterapia foi encontrado dentro de uma clínica abandonada.\n[…]\nDesconfiada, a esposa de Devair levou o material à Vigilância Sanitária, e, em 29 de setembro, foi identificado como césio-137.\n[…]\nA Associação das Vítimas do Césio 137, no entanto, afirma que 104 pessoas morreram até 2012 em decorrência da contaminação radioativa e que cerca de 1,6 mil pessoas foram diretamente afetadas.\n[…]\nA contaminação em Goiânia originou-se de uma cápsula que continha cloreto de césio — um sal obtido a partir do radioisótopo 137 do elemento químico césio. A cápsula radioativa era parte de um equipamento radioterapêutico, dentro do qual se encontrava revestida por uma caixa protetora de aço e chumbo.\n[…]\nA Associação das Vítimas do Césio 137 afirma que até o ano de 2012, quando o acidente completou 25 anos, cerca de 104 pessoas morreram nos anos seguintes pela contaminação, decorrente de câncer e outros problemas, e cerca de 1 600 tenham sido afetadas diretamente.\n[…]\nO acidente foi descrito em vários documentários internacionais, além de filmes, programas de televisão, canções, artigos acadêmicos, teses, dissertações e livros. O acidente radioativo é mencionado no premiado curta-metragem Ilha das Flores, escrito e dirigido por Jorge Furtado. Em 1990, Roberto Pires dirigiu o filme Césio 137 - O Pesadelo de Goiânia, que faz uma dramatização do acidente.\n[…]\nUm episódio do programa Linha Direta, exibido em 2007, relembrou o acidente radioativo com Césio-137 em Goiânia.\n[…]\nCésio 137:  A tragédia radioativa do Brasil\n[…]\nCésio 137 - 20 anos de descaso - Greenpeace Brasil",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Acidente radiológico de Goiânia",
      "descricao": "Contaminação radioativa ocorrida em Goiânia em 1987, a partir de um aparelho de radioterapia abandonado."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "No acidente radioativo de Goiânia, o pó retirado da cápsula atraiu curiosos porque brilhava no escuro com que cor?",
    "resposta": "Azul",
    "distratores": [
      "Verde",
      "Amarelo",
      "Vermelho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Goi%C3%A2nia_accident"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Goi%C3%A2nia_accident",
        "situacao": "ok",
        "texto": "The Goiânia accident (Brazilian Portuguese: [ɡo(j)ˈjɐniɐ]), also known locally as the caesium-137 accident/caesium-137 Goiânia, was a radioactive contamination accident that occurred on September 13, 1987, in Goiânia, Goiás, Brazil, after an unsecured radiotherapy source, inside a lead-and-steel medical device, was found by scavenger thieves at an abandoned hospital site in the city.\n[…]\nThe radiation source in the Goiânia accident was a small capsule containing about 93 grams (3.3 oz) of highly radioactive caesium chloride (a caesium salt) made with the radioactive isotope caesium-137, and encased in a shielding canister made of lead and steel. The source was positioned in a container of the wheel type, where the wheel turns inside the casing to move the source between the storage and irradiation positions.\n[…]\nIn 2007, the Oswaldo Cruz Foundation determined that the rate of caesium-137 related diseases are the same in Goiânia accident survivors as they are in the population at large. Nevertheless, compensation is still distributed to survivors, who suffer radiation-related prejudices in everyday life.\n[…]\nThe Goiânia accident spread significant radioactive contamination throughout the Aeroporto, Central, and Ferroviários districts. Even after the cleanup, 7 TBq of radioactivity remained unaccounted for.\n[…]\nThe 1990 film, Césio 137 – O Pesadelo de Goiânia (Caesium-137 – The Nightmare of Goiânia), is a Brazilian dramatisation of the incident by Roberto Pires. It won several awards at the 1990 Festival de Brasília. On his 1992 album Amor y Control, Rubén Blades dedicated the song \"El Cilindro\" to the Goiânia tragedy. Cesium Fallout, a 2024 Hong Kong disaster thriller film, was partially inspired by the Goiânia accident.\n[…]\nSamut Prakan radiation accident\n[…]\nGlobo Repórter – Goiânia accident on YouTube\n[…]\nThe Goiânia Radiation Incident\n[…]\nSimilar accidents over the world (short overview)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Acidente_radiol%C3%B3gico_de_Goi%C3%A2nia",
        "situacao": "ok",
        "texto": "Acidente radiológico de Goiânia, amplamente conhecido como acidente com o césio-137, foi um grave episódio de contaminação por radioatividade ocorrido na cidade de Goiânia, Goiás, Brasil. A contaminação teve início em 13 de setembro de 1987, quando um aparelho de radioterapia foi encontrado dentro de uma clínica abandonada.\n[…]\nDois catadores de material reciclável encontraram o instrumento abandonado que pensaram tratar-se de sucata e o venderam a um ferro-velho cujo dono, Devair Alves Ferreira, abriu a cápsula e encontrou um pó azul brilhante, que passou a mostrar a familiares e conhecidos, sem saber que se tratava de material radioativo. Com o tempo, ele e outras pessoas que tiveram contato com a substância começaram a apresentar sintomas graves de contaminação, como tonturas, náuseas e queimaduras.\n[…]\nFoi no ferro-velho de Devair Ferreira que a cápsula de césio foi aberta para o reaproveitamento do chumbo. O dono do ferro-velho expôs ao ambiente 19,26 g de cloreto de césio-137 (CsCl), um sal muito parecido com o sal de cozinha (NaCl), mas que emite um brilho azulado quando em local desprovido de luz. Devair ficou encantado com o pó que emitia um brilho azul no escuro. Ele mostrou a descoberta para sua esposa, Maria Gabriela, bem como o distribuiu para familiares e amigos.\n[…]\nO acidente foi descrito em vários documentários internacionais, além de filmes, programas de televisão, canções, artigos acadêmicos, teses, dissertações e livros. O acidente radioativo é mencionado no premiado curta-metragem Ilha das Flores, escrito e dirigido por Jorge Furtado. Em 1990, Roberto Pires dirigiu o filme Césio 137 - O Pesadelo de Goiânia, que faz uma dramatização do acidente.\n[…]\nUm episódio do programa Linha Direta, exibido em 2007, relembrou o acidente radioativo com Césio-137 em Goiânia.\n[…]\nAcidente nuclear de Fukushima",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Proálcool",
      "descricao": "Programa Nacional do Álcool, lançado pelo governo brasileiro em 1975 para substituir a gasolina por etanol de cana."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1975, o Brasil lançou o Proálcool para depender menos da gasolina. Que crise mundial motivou o programa?",
    "resposta": "Crise do petróleo de 1973",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ethanol_fuel_in_Brazil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ethanol_fuel_in_Brazil",
        "situacao": "ok",
        "texto": "Brazil is the world's second largest producer of ethanol fuel. Brazil and the United States have led the industrial production of ethanol fuel for several years, together accounting for 85 percent of the world's production in 2017. Brazil produced 26.72 billion liters (7.06 billion U.S. liquid gallons), representing 26.1 percent of the world's total ethanol used as fuel in 2017.\n[…]\nThe National Alcohol Program -Pró-Álcool- (Portuguese: Programa Nacional do Álcool), launched in 1975, was a nationwide program financed by the government to phase out automobile fuels derived from fossil fuels, such as gasoline, in favor of ethanol produced from sugar cane.\n[…]\nSince 2009 the Brazilian ethanol industry has experienced a crisis due to multiple causes. They include the 2008 financial crisis; poor sugarcane harvests due to unfavorable weather; high sugar prices in the world market that made more attractive to produce sugar rather than ethanol; a freeze imposed by the Brazilian government on the petrol and diesel prices. Brazilian ethanol fuel production in 2011 was 21.1 billion liters (5.6 billion U.S.\n[…]\nA 2009 study published in Energy Policy found that the use of ethanol fuel in Brazil has allowed to avoid over 600 million tons of CO2 emissions since 1975, when the Pró-Álcool Program began. The study also concluded that the neutralization of the carbon released due to land-use change was achieved in 1992.\n[…]\nThe use of ethanol-only vehicles has also reduced CO emissions drastically. Before the Pró-Álcool Program started, when gasoline was the only fuel in use, CO emissions were higher than 50 g/km driven; they had been reduced to less than 5.8 g/km in 1995. Several studies have also shown that São Paulo has benefit with significantly less air pollution thanks to ethanol's cleaner emissions."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Etanol_como_combust%C3%ADvel_no_Brasil",
        "situacao": "ok",
        "texto": "O Brasil é o segundo maior produtor mundial de etanol combustível e segundo maior exportador mundial. Juntos, Brasil e Estados Unidos lideram a produção industrial de etanol, representando em conjunto 82,4% da produção mundial em 2021.\n[…]\nOs primeiros usos práticos do etanol deram-se entre meados dos anos 1920 e início dos anos 1930. Mas somente nos anos 1970, com a crise do petróleo, o Brasil passou a usar maciçamente o etanol como combustível. Na segunda metade da década de 1980 por diversos motivos ocorreu uma forte retração no consumo de álcool combustível.\n[…]\nPara a realização dessa competição, Miguel Mauricio da Rocha Neto, diretor da TENENGE, solicitou autorização do presidente do Conselho Nacional do Petróleo (CNP) no governo Geisel, General Oziel Almeida Costa e do presidente do Instituto do Açúcar e do Álcool (IAA), General Alvarez Tavares do Carmo.\n[…]\nO programa substituiu por álcool etílico a gasolina, o que gerou 10 milhões de automóveis a gasolina a menos rodando no Brasil, diminuindo a dependência do país ao petróleo importado. A decisão de produzir etanol a partir da cana-de-açúcar por via fermentativa foi por causa da baixa nos preços do açúcar na época. Foram testadas outras alternativas de fonte de matéria-prima, como por exemplo a mandioca.\n[…]\nCom a deflagração da Segunda Grande Guerra, o etanol combustível ganhou ainda mais proeminência, mas com o fim do conflito em 1945, e a normalização da produção e do comércio de combustíveis, em especial a gasolina ele viria a perder parte da importância adquirida na década anterior. Foi somente em 1974 com a Crise do Petróleo que o governo militar brasileiro enxergou a necessidade de solucionar o problema do Brasil em relação à importação de combustíveis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Grande Nevoeiro de Londres",
      "descricao": "Episódio de poluição atmosférica que cobriu Londres em dezembro de 1952 e causou milhares de mortes."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em dezembro de 1952, um nevoeiro tóxico matou milhares de pessoas em Londres. A fumaça vinha sobretudo da queima de quê?",
    "resposta": "Carvão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Smog_of_London"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Smog_of_London",
        "situacao": "ok",
        "texto": "The Great Smog was a severe air pollution event that affected London, England, in December 1952. A period of unusually cold weather, combined with an anticyclone and windless conditions, collected airborne pollutants—mostly arising from the use of coal—to form a thick layer of smog over the city. It lasted from Friday, 5 December, to Tuesday, 9 December 1952, then dispersed quickly when the weathe\n[…]\nA period of unusually cold weather preceding and during the Great Smog led Londoners to burn much more coal than usual to keep themselves warm. While better-quality \"hard\" coals (such as anthracite) tended to be exported to pay off World War II debts, post-war domestic coal tended to be of a relatively low-grade, sulphurous variety called \"nutty slack\" (similar to lignite) which increased the amount of sulphur dioxide in the smoke.\n[…]\nOn 4 December 1952, an anticyclone settled over a windless London, causing a temperature inversion with relatively cool, stagnant air trapped under a layer of warmer air. The resultant fog, mixed with smoke from home and industrial chimneys, particulates such as those from motor vehicle exhausts, and other pollutants such as sulphur dioxide, formed a persistent smog, which blanketed the capital the following day.\n[…]\nHowever, it was in London that the smog's effects were the greatest.\n[…]\nThe Great Smog is the setting of the Doctor Who audio play The Creeping Death and the novel Amorality Tale. The Boris Starling novel Visibility is set in the 1952 smog event. In C. J. Sansom's 2012 alternate reality book Dominion a key plot point develops during the event. The video game Reverse: 1999 version 2.3 story \"London Dawning\" features a setting heavily inspired by the Great Smog, including characters who are inspired by it and having the smog as the main antagonist.\n[…]\nGreat Stink"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Nevoeiro_de_1952",
        "situacao": "ok",
        "texto": "O Nevoeiro de 1952, conhecido também como The Great Smog, foi um período de severa poluição atmosférica, entre os dias 5 e 9 de dezembro de 1952 que encobriu a cidade de Londres. O fenômeno foi considerado como um dos piores impactos ambientais até então, sendo causado pelo crescimento incontrolado da queima de combustíveis fósseis na indústria e nos transportes. Acredita-se que o nevoeiro tenha c\n[…]\nEm dezembro de 1952, uma frente fria chegou a Londres e fez com que as pessoas queimassem mais carvão que o usual no inverno. O aumento na poluição do ar foi agravado por uma inversão térmica, causada pela densa massa de ar frio. O acúmulo de poluentes foi crescente, especialmente de fumaça e partículas do carvão que era queimado.\n[…]\nDevido aos problemas econômicos no pós-guerra, o carvão de melhor qualidade para o aquecimento havia sido exportado. Como resultado, os londrinos usaram o carvão de baixa qualidade, rico em enxofre, o que agravou muito o problema.\n[…]\nO nevoeiro resultante, uma mistura de névoa natural com muita fumaça negra, tornou-se muito denso, chegando a impossibilitar o trânsito de automóveis nas ruas. Muitas sessões de filmes e concertos foram canceladas, uma vez que a plateia não podia ver o palco ou a tela, pois a fumaça invadiu facilmente os ambientes fechados.\n[…]\nInicialmente, não houve pânico, pois os nevoeiros em Londres, conhecidos por fog, são comuns e famosos. Porém, nas semanas seguintes as estatísticas compiladas pelos serviços médicos descobriram que o nevoeiro já havia matado 4 000 pessoas. A maioria das vítimas foram crianças muito novas, idosos e pessoas com problemas respiratórios preexistentes.\n[…]\nO carvão além de enxofre, contém metais pesados e altamente tóxicos como mercúrio, cádmio, níquel, arsênio, entre outros.\n[…]\n«London Fog»\n[…]\n«The Great Smog of 1952»\n[…]\n«1952: London fog clears after days of chaos»  BBC News, 1952-12-09.\n[…]\n«Description of smog»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Doença de Minamata",
      "descricao": "Síndrome neurológica identificada em Minamata, no Japão, causada por contaminação industrial de peixes e frutos do mar."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No Japão, a doença de Minamata foi causada pelo despejo no mar de resíduos industriais com que metal?",
    "resposta": "Mercúrio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Minamata_disease"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Minamata_disease",
        "situacao": "ok",
        "texto": "Minamata disease (Japanese: 水俣病, Hepburn: Minamata-byō) is a neurological disease caused by severe mercury poisoning. Symptoms include ataxia, numbness in the hands and feet, general muscle weakness, loss of peripheral vision, and damage to hearing and speech. In extreme cases, insanity, paralysis, coma, and death follow within weeks of the onset of symptoms.\n[…]\nMinamata disease was first discovered in the city of Minamata, Kumamoto Prefecture, Japan, in 1956. It was caused by the release of methylmercury in the industrial wastewater from a chemical factory owned by the Chisso Corporation, which continued from 1932 to 1968. It has also been suggested that some of the mercury sulfate in the wastewater was also metabolized to methylmercury by bacteria in the sediment.\n[…]\nIn 1978, the National Institute for Minamata Disease was established in Minamata. It consists of four departments: The Department of Basic Medical Science, The Department of Clinical Medicine, The Department of Epidemiology and The Department of International Affairs and Environmental Sciences. In 1986, The Institute became a WHO Collaborating Centre for Studies on the Health Effects of Mercury Compounds.\n[…]\nThe Institute seeks to improve medical treatment of Minamata disease patients and conducts research on mercury compounds and their impact on organisms as well as potential detoxification mechanisms. In April, 2008 the Institute invented a method for absorbing gaseous mercury in order to prevent air pollution and enable recycling of the metal.\n[…]\nTheir 2000 accounts also show that the Japanese and Kumamoto prefectural governments waived an enormous US$560 million in related liabilities. Their FY2004 and FY2005 reports refer to Minamata disease as \"mad hatter's disease\", a term coined from the mercury poisoning experienced by hat-makers of the last few centuries (cf. Erethism)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Doen%C3%A7a_de_Minamata",
        "situacao": "ok",
        "texto": "Doença de Minamata é uma doença neurológica causada pela intoxicação por mercúrio severa. Sinais e sintomas incluem ataxia, hipoestesia nas mãos e pés, fraqueza muscular geral, perda de visão periférica, danos à audição e fala. Em casos extremos, insanidade, paralisia, coma, e morte, ocorrem em semanas a partir do início dos sintomas. Uma forma congênita da doença afeta fetos no útero, causando mi\n[…]\nA doença de Minamata foi descoberta pela primeira vez em Minamata, Kumamoto, Japão, em 1956. Causada pela contaminação por metil mercúrio através da água residual liberada da indústria química Chisso, que durou de 1932 à 1968. Também foi sugerido que parte do sulfato de mercurio(II) nas águas residuais foi também metabolizado para metil mercúrio pela bactéria no sedimento.\n[…]\nThallium, selênio, e múltiplos contaminantes foram avaliados, mas em março de 1958, o neurologia britânico Douglas McAlpine, que visitava a região, sugeriu que os sintomas de Minamata se assemelhavam aos da intoxicação por mercúrio, o que motivou um novo foco nas investigações.\n[…]\nEm fevereiro de 1959, a distribuição de mercúrio na Baia de Minamata foi investigada. Os resultados chocaram os pesquisadores envolvidos. Densas quantidades foram detectadas em peixes, frutos do mar, e no lodo da baia. A maior concentração ocorria entorno do canal de água residual da fábrica Chisso, no porto de Hyakken, e decrescia em direção ao oceano, claramente identificando a fábrica como fonte da contaminação.\n[…]\nAmostras de cabelo foram retiradas de indivíduos com a doença, e também da população de Minamata em geral. Em paciente, o maior nível de mercúrio registrado foi de 105 partes por milhão, indicando uma exposição pesada, enquanto que em residentes não-sintomáticos, o nível era de 191 ppm, comparado com o nível médio de 4 ppm para pessoas vivendo fora de Minamata.\n[…]\nNational Institute for Minamata Disease\n[…]\nMinamata disease",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Petrobras",
      "descricao": "Empresa estatal brasileira de petróleo, criada em 1953 no governo Getúlio Vargas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que campanha nacionalista, de lema famoso, mobilizou o país e levou à criação da Petrobras em 1953?",
    "resposta": "O petróleo é nosso",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Petrobras",
      "https://en.wikipedia.org/wiki/Petrobras"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Petrobras",
        "situacao": "ok",
        "texto": "Petróleo Brasileiro S.A. (Petrobras; pronunciado Petrobrás) é uma empresa de capital aberto, cujo acionista majoritário é o Governo do Brasil (União), sendo, portanto, uma empresa estatal de economia mista. Com sede no Rio de Janeiro, opera atualmente em seis países, no segmento de energia, prioritariamente nas áreas de exploração, produção, refino, comercialização e transporte de petróleo, gás na\n[…]\nPara defender a tese do monopólio estatal do petróleo organizaram um amplo movimento popular, a campanha \"O petróleo é nosso!\", em que se destacou, entre outros, o nome do escritor Monteiro Lobato. A mobilização popular conseguiu impedir a tramitação do Anteprojeto do Estatuto do Petróleo no Congresso Nacional e muito contribuiu para a aprovação da Lei 2 004 de 3 de outubro de 1953, que estabeleceu o monopólio estatal do petróleo e instituiu a Petrobras.\n[…]\nA empresa foi instituída pela Lei nº 2 004, sancionada pelo então presidente da República, Getúlio Vargas, em 3 de outubro de 1953. A lei dispunha sobre a política nacional do petróleo, definindo as atribuições do Conselho Nacional do Petróleo (CNP), estabelecendo o monopólio estatal do petróleo e a criação da Petrobras.\n[…]\nOs militares, que passaram a ter participação destacada na política brasileira desde o Tenentismo e no triunfo da Aliança Liberal liderada por Getúlio Vargas em 1930, dedicaram muitos dos seus esforços ao desenvolvimento da indústria do petróleo no Brasil e seus oficiais exerceram a Presidência do Conselho Nacional do Petróleo e com a participação dos setores nacionalistas dos militares na criação da Petrobras durante a campanha O petróleo é nosso.\n[…]\nApesar de a Petrobras ter deixado por lei (de jure) de monopolizar a indústria petroleira no Brasil em 1997, a estatal continuava de fato a monopolizar o setor, concentrando controle majoritário sobre a cadeia produtiva dos combustíveis.\n[…]\nO petróleo é nosso"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Petrobras",
        "situacao": "ok",
        "texto": "Petróleo Brasileiro S.A., better known by and trading as the portmanteau Petrobras (Portuguese pronunciation: [ˌpɛtɾoˈbɾas, pet-]), is a Brazilian majority state-owned multinational corporation in the petroleum industry, which is headquartered in Rio de Janeiro. The company's name translates to Brazilian Petroleum Corporation.\n[…]\nPetrobras was created in 1953 under the government of Brazilian president Getúlio Vargas with the slogan \"The Oil is Ours\" (Portuguese: \"O petróleo é nosso\"). It was given a legal monopoly in Brazil. In 1953, Brazil produced only 2,700 barrels of oil per day. In 1961, the company's REDUC refinery began operations near Rio de Janeiro, and in 1963, its Cenpes research center opened in Rio de Janeiro; it remains one of the world's largest centers dedicated to energy research.\n[…]\nIn 1997, the government approved Law N.9.478, which broke Petrobras's monopoly and allowed competition in Brazil's oilfields, and also created the national petroleum agency, Agência Nacional do Petróleo (ANP), responsible for the regulation and supervision of the petroleum industry, and the National Council of Energy Policies, a public agency responsible for developing public energy policy.\n[…]\nLUBNOR – Lubrificantes e Derivados de Petróleo do Nordeste – Fortaleza (Ceará) – 8,000 bpd\n[…]\nThe Bolivian government demanded an increase in royalty payments from foreign petroleum companies to 82%, but eventually settled for a 50% royalty interest.\n[…]\n(PUDSA), by indirect subsidiary (Petrobras Uruguay Sociedad Anónima de Inversión -PUSAI), in Uruguay, to Mauruguay S.A., an indirect wholly owned subsidiary of Disa Corporación Petrolífera S.A. (DISA).\n[…]\nIn January 2020, Petroleo Brasileiro stated that it ended all of its business in Africa after completing the sale of a 50% stake in Petrobras Oil & Gas BV.\n[…]\nPetrobras Magazine"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Salto de Sete Quedas",
      "descricao": "Conjunto de cachoeiras do rio Paraná, na fronteira entre Brasil e Paraguai, submerso em 1982."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1982, as cachoeiras de Sete Quedas, na fronteira com o Paraguai, desapareceram sob as águas do reservatório de que obra?",
    "resposta": "Usina de Itaipu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gua%C3%ADra_Falls",
      "https://pt.wikipedia.org/wiki/Salto_de_Sete_Quedas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gua%C3%ADra_Falls",
        "situacao": "ok",
        "texto": "The Guairá Falls (Spanish: Saltos del Guairá) or Guaíra Falls (Portuguese: Salto das Sete Quedas do Guaíra) were a series of immense waterfalls on the Paraná River along the border between Paraguay and Brazil. The falls ceased to exist in 1982 when they were inundated by the impoundment of the Itaipu Dam reservoir.\n[…]\nThe falls comprised 18 cataracts clustered in seven groups—hence their Portuguese name, Sete Quedas (Seven Falls)—near the Brazilian municipality of Guaíra, Paraná and Salto del Guairá, the easternmost city in Paraguay. The falls were located at a point where the Paraná River was forced through a narrow gorge. At the head of the falls, the river narrowed sharply from a width of about 380 m (1,250 ft) to 60 m (200 ft).\n[…]\nA tourist attraction and a favorite of locals, the falls were completely submerged under the artificial lake created by the Itaipu Dam upon its completion in 1982. The building of the dam, authorized by a 1973 bilateral agreement between the Paraguayan and Brazilian regimes of the time, marked a new era of cooperation between the countries, both of which had claimed ownership of Guaíra Falls.\n[…]\nAs construction of the Itaipu Dam progressed, thousands of visitors flocked to the area to see the falls before they disappeared forever. Disaster struck on January 17, 1982, when a suspended footbridge affording access to a particularly spectacular view of the falls collapsed, killing dozens of tourists.\n[…]\nThe director of the company that built the dam was quoted as saying, \"We're not destroying Seven Falls. We're just going to transfer it to Itaipu Dam, whose spillway will be a substitute for [the falls'] beauty\".\n[…]\nItaipu Lake\n[…]\nSalto de Sete Quedas - Brasil, December 1978 by Mario Cesar Mendonça Gomes\n[…]\nSalto de Sete Quedas - Brasil, December 1978 by Mario Cesar Mendonça Gomes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Salto_de_Sete_Quedas",
        "situacao": "ok",
        "texto": "O Salto de Sete Quedas, também chamado Sete Quedas do Rio Paraná (em castelhano:  Saltos del Guairá), foram as maiores cachoeiras do mundo em volume de água com 13,3 mil m³/segundo, sendo o dobro de volume d'água das Cataratas do Niágara, na divisa EUA/Canadá, e treze vezes mais caudalosas que as Victoria Falls na Zâmbia. Seu som poderia ser ouvido a 30 km de distância, seu canal principal possuía\n[…]\nEm 1966 foi decretada a submersão do Salto das Sete Quedas através da Ata do Iguaçu, onde ocorreria o seu desaparecimento com a formação do lago da Usina hidrelétrica de Itaipu. O governo havia decretado que a construção da Usina de Itaipu iria alagar as Setes Quedas, uma área em litígio entre Brasil e Paraguai devido a uma demarcação territorial sob a serra de Maracaju.\n[…]\nAs negociações entre o Brasil e o Paraguai para a construção da Usina de Itaipu se iniciaram na década de 60. Após seis anos de negociações, em 1966 foi firmado um tratado para a construção de uma usina hidrelétrica que aproveitasse o potencial hídrico de Sete Quedas. Além do aproveitamento econômico, a construção da hidrelétrica pôs fim a um litígio fronteiriço entre Brasil e Paraguai, que tinha pretensões sobre a posição exata da fronteira.\n[…]\nApesar do nome, eram constituídas por 19 cachoeiras principais, sendo agrupadas em sete grupos de quedas. Recordistas mundiais em volume d'água, as Sete Quedas eram o principal atrativo turístico da cidade de Guaíra, que, à época, chegou a ter 60 mil habitantes, rivalizando em importância com as cataratas de Foz do Iguaçu. (Foz do Iguaçu, antes da Usina de Itaipu, contava com aproximadamente 20 mil habitantes) À época, Guaíra era um dos destinos brasileiros mais visitados por estrangeiros.\n[…]\n1982 - Em 14 de outubro ocorre o fechamento das comportas de Itaipu.\n[…]\n1982 - Em 27 de outubro as Sete Quedas de Guaíra já não estavam mais expostas.\n[…]\nSalto de Sete Quedas\n[…]\nÁlbum de 7 Quedas"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Grande Porção de Lixo do Pacífico",
      "descricao": "Grande acúmulo de detritos, sobretudo plásticos, que flutua no oceano Pacífico Norte."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O lixo plástico se acumula numa grande mancha no Pacífico Norte porque fica preso em que tipo de sistema de correntes?",
    "resposta": "Um giro oceânico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Pacific_garbage_patch"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Pacific_garbage_patch",
        "situacao": "ok",
        "texto": "The Great Pacific Garbage Patch (also Pacific trash vortex and North Pacific Garbage Patch) is a garbage patch, a gyre of marine debris particles, in the central North Pacific Ocean. It is located roughly from 135°W to 155°W and 35°N to 42°N. The collection of plastic and floating trash originates from the Pacific Rim, including countries in Asia, North America, and South America.\n[…]\nThe patch was predicted in a 1988 paper published by the National Oceanic and Atmospheric Administration (NOAA). The description was based on research by several Alaska-based researchers in 1988 who measured neustonic plastic in the North Pacific Ocean.\n[…]\nIn a 2021 study, researchers who examined plastic from the patch identified more than 40 animal species on 90 percent of the debris they studied. Discovery of a thriving ecosystem of life at the Great Pacific garbage patch in 2022 suggested that cleaning up garbage here may adversely remove this plastisphere.\n[…]\nIn a 2016 article for Slate, Daniel Engber discussed the misconception that the Great Pacific Garbage Patch is a giant floating island of garbage and described how the image differs from the actual nature of the marine debris accumulation.\n[…]\nIn July 2022, the Ocean Cleanup announced that they had reached a milestone of removing the first 100,000 kilograms (220,000 lb; 100 t; 110 short tons) of plastic from the Great Pacific Garbage Patch using \"System 002\" and announced its transition to \"System 03\", which is claimed to be 10 times as effective as its predecessor. In April 2024, they celebrated a milestone of 10 million kg of trash extracted and just 7 months later (November 2024), they have reached 20 million kg of trash removed.\n[…]\nPacific Garbage Patch – Smithsonian Ocean Portal\n[…]\nPlastic Paradise Movie – independent documentary by Angela Sun uncovering the mystery of the Great Pacific Garbage Patch known as the Plastic Paradise"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Por%C3%A7%C3%A3o_de_Lixo_do_Pac%C3%ADfico",
        "situacao": "ok",
        "texto": "A Grande Porção de Lixo do Pacífico, Grande Ilha de Lixo do Pacífico ou Grande Sopa de Lixo do Pacífico, tal como descrita principalmente pelo pesquisador Charles J. Moore desde 1997, em fevereiro de 2008 no site da BBC e no jornal britânico The Independent. É uma região do oceano Pacífico, na qual estimou-se que, em 2013, tinha o tamanho aproximado de 3,4 milhões km².\n[…]\nÉ composta principalmente de plástico, proveniente das costas marítimas, e é de difícil detecção, já que os satélites não conseguem captar sua presença, sendo possível avistá-la somente a partir de embarcações marítimas. Esta \"massa plástica\" flutua e se envolve no giro oceânico devido às correntes oceânicas.\n[…]\nDuarte  e Cózar concordam em dizer que estes resíduos plásticos estão concentrados em cinco grandes zonas de acumulação relativamente isoladas, onde a circulação oceânica introduz a poluição, e que a contaminação de plástico ali foi calculada em torno de 200 gramas por quilômetro quadrado,  onde por tanto, para Duarte, seria um exagero dizer que exista ilha ou ilhas de resíduos plásticos.\n[…]\nEm 2017, um movimento liderado pela organização de defesa ambiental Plastic Oceans Foundation lançou uma campanha para tornar a ilha de lixo do Pacífico um país oficial. A organização apresentou o projeto à ONU, para o reconhecimento do que seria o 196.º país do mundo a integrá-la. O nome proposto para o território é Trash Isles (Ilhas de Lixo) e tem bandeira, passaporte, selos e moeda, chamada debris (melhor traduzido como entulho).\n[…]\nGrande Porção de Lixo do Atlântico Norte\n[…]\nLixo marinho\n[…]\nBen Segall (Produção, Animação e Roteiro); Kyoung Kim (Roteiro); Olivia Sandoval (Narração) (13 de maio de 2010). The Great Pacific Garbage Patch on Vimeo (em inglês). Vimeo. Consultado em 30 de abril de 2013",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Grande Porção de Lixo do Pacífico",
      "descricao": "Grande acúmulo de detritos, sobretudo plásticos, que flutua no oceano Pacífico Norte."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1997, voltando de uma regata, que capitão americano encontrou e divulgou ao mundo a mancha de lixo do Pacífico?",
    "resposta": "Charles Moore",
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Pacific_garbage_patch"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Pacific_garbage_patch",
        "situacao": "ok",
        "texto": "The Great Pacific Garbage Patch (also Pacific trash vortex and North Pacific Garbage Patch) is a garbage patch, a gyre of marine debris particles, in the central North Pacific Ocean. It is located roughly from 135°W to 155°W and 35°N to 42°N. The collection of plastic and floating trash originates from the Pacific Rim, including countries in Asia, North America, and South America.\n[…]\nCharles J. Moore, returning home through the North Pacific Gyre after competing in the Transpacific Yacht Race in 1997, claimed to have come upon an enormous stretch of floating debris. Moore alerted the oceanographer Curtis Ebbesmeyer, who subsequently dubbed the region the \"Eastern Garbage Patch\" (EGP). The area is frequently featured in media reports as an exceptional example of marine pollution.\n[…]\nThe Great Pacific Garbage Patch formed gradually as a result of ocean or marine pollution gathered by ocean currents. It occupies a relatively stationary region of the North Pacific Ocean bounded by the North Pacific Gyre in the horse latitudes. The gyre's rotational pattern draws in waste material from across the North Pacific, incorporating coastal waters off North America and Japan.\n[…]\nIn July 2022, the Ocean Cleanup announced that they had reached a milestone of removing the first 100,000 kilograms (220,000 lb; 100 t; 110 short tons) of plastic from the Great Pacific Garbage Patch using \"System 002\" and announced its transition to \"System 03\", which is claimed to be 10 times as effective as its predecessor. In April 2024, they celebrated a milestone of 10 million kg of trash extracted and just 7 months later (November 2024), they have reached 20 million kg of trash removed.\n[…]\nPacific Garbage Patch – Smithsonian Ocean Portal\n[…]\nPlastic Paradise Movie – independent documentary by Angela Sun uncovering the mystery of the Great Pacific Garbage Patch known as the Plastic Paradise"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Por%C3%A7%C3%A3o_de_Lixo_do_Pac%C3%ADfico",
        "situacao": "ok",
        "texto": "A Grande Porção de Lixo do Pacífico, Grande Ilha de Lixo do Pacífico ou Grande Sopa de Lixo do Pacífico, tal como descrita principalmente pelo pesquisador Charles J. Moore desde 1997, em fevereiro de 2008 no site da BBC e no jornal britânico The Independent. É uma região do oceano Pacífico, na qual estimou-se que, em 2013, tinha o tamanho aproximado de 3,4 milhões km².\n[…]\nEntre 2010 e 2011 ocorreu a Expedição Malaspina 2010, uma expedição científica que deu a volta ao mundo a bordo de dois navios oreográficos, com uma equipe de cientistas que puderam estudar e avaliar o impacto e quantidade de lixo plástico que flutua no Oceano Pacífico.\n[…]\nPara Cózar, uma das importantes conclusões do projeto é que este é um problema de escala global, onde por exemplo, 88% de todas as amostras recolhidas continham contaminação por resíduos de plásticos, resultado este que possibilitou ter um melhor panorama da magnitude do problema, que segundo Cózar, [mesmo não sendo uma ilha ou ilhas de lixo plástico] é grande.\n[…]\nEm 2017, um movimento liderado pela organização de defesa ambiental Plastic Oceans Foundation lançou uma campanha para tornar a ilha de lixo do Pacífico um país oficial. A organização apresentou o projeto à ONU, para o reconhecimento do que seria o 196.º país do mundo a integrá-la. O nome proposto para o território é Trash Isles (Ilhas de Lixo) e tem bandeira, passaporte, selos e moeda, chamada debris (melhor traduzido como entulho).\n[…]\nGrande Porção de Lixo do Atlântico Norte\n[…]\nLixo marinho\n[…]\nBen Segall (Produção, Animação e Roteiro); Kyoung Kim (Roteiro); Olivia Sandoval (Narração) (13 de maio de 2010). The Great Pacific Garbage Patch on Vimeo (em inglês). Vimeo. Consultado em 30 de abril de 2013",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Máquina de Newcomen",
      "descricao": "Máquina a vapor atmosférica construída por Thomas Newcomen em 1712, na Inglaterra."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na Inglaterra de 1712, a máquina a vapor de Thomas Newcomen foi construída principalmente para fazer o quê?",
    "resposta": "Bombear água das minas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Newcomen_atmospheric_engine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Newcomen_atmospheric_engine",
        "situacao": "ok",
        "texto": "The atmospheric engine was invented by Thomas Newcomen in 1712, and is sometimes referred to as the Newcomen fire engine (see below) or Newcomen engine. The engine was operated by condensing steam being drawn into the cylinder, thereby creating a partial vacuum which allowed atmospheric pressure to push the piston into the cylinder. It is significant as the first practical device to harness steam \n[…]\nNewcomen engines were used throughout Britain and Europe, principally to pump water out of mines. Hundreds were constructed during the 18th century. James Watt's later engine design was an improved version of the Newcomen engine that roughly doubled fuel efficiency. Many atmospheric engines were converted to the Watt design. As a result, Watt is today better known than Newcomen in relation to the origin of the steam engine.\n[…]\n\"Several of his papers were put before the Royal Society between 1707 and 1712 [including] a description of his 1690 atmospheric steam engine, similar to that built and [subsequently] put into use by Thomas Newcomen in 1712.\"\n[…]\nThere is a common legend that in 1713 a cock boy named Humphrey Potter, whose duty it was to open and shut the valves of an engine he attended, made the engine self-acting by causing the beam itself to open and close the valves by suitable cords and catches (known as the \"potter cord\"); however the plug tree device (the first form of valve gear) was very likely established practice before 1715, and is clearly depicted in the earliest known images of Newcomen engines by Henry Beighton (1717) (believed by Hulse to depict the 1714 Griff colliery engine) and by Thomas Barney (1719) (depicting the 1712 Dudley Castle engine).\n[…]\nReprint: Rolt, L. T. C.; J. S. Allen (1998). The Steam Engine of Thomas Newcomen. Ashbourne Derbs: Landmark Publishing. p. 160. ISBN 1-901522-44-X.\n[…]\nEnglish Heritage – National Monuments Record for Elsecar Newcomen engine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Motor_a_vapor_de_Newcomen",
        "situacao": "ok",
        "texto": "O Motor a vapor de Newcomem foi inventado por Thomas Newcomen em 1712, muitas vezes chamado como Máquina atmosférica Newcomen. O motor é operado pelo vapor de condensação introduzido no cilindro, criando assim um vácuo parcial, permitindo assim que a pressão atmosférica empurre o pistão para dentro do cilindro. Foi o primeiro dispositivo prático a aproveitar o vapor para produzir trabalho mecânico\n[…]\nOs motores Newcomen foram usados em toda a Grã-Bretanha e Europa, principalmente para bombear água para fora das minas. Centenas foram construídas ao longo do século XVIII.\n[…]\nOs primeiros exemplos para os quais existem registros confiáveis foram dois motores no Black Country, dos quais o mais famoso foi erguido em 1712 no Conygree Coalworks perto de Dudley, Isso geralmente é aceito como o primeiro motor e Newcomen de sucesso, mas pode ter sido precedido por um construído a uma milha e meia a leste de Wolverhampton. Ambos foram usados por Newcomen e seu parceiro, John Calley, para bombear minas de carvão inundadas com água.\n[…]\nEmbora o seu primeiro uso tenha sido em áreas de mineração de carvão, o motor de Newcomen também foi usado para bombear água para fora das minas de metal em seu país nativo, como as minas de estanho de Cornwall. Antes da sua morte, Newcomen e outros instalaram mais de uma centena de seus motores, não só no West Country e nos Midlands, mas também no norte do País de Gales, perto de Newcastle e Cumbria.\n[…]\nEm 1725, o motor Newcomen era de uso comum na mineração, em particular em minas carvão. Ele manteve seu lugar com pouca mudança material para o resto do século. O uso do motor Newcomen foi ampliado em alguns locais para bombear o abastecimento de água municipal; Por exemplo, o primeiro motor Newcomen na França foi construído em Passy em 1726 para bombear água do rio Sena para a cidade de Paris.\n[…]\nLinha do tempo do motor a vapor",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Símbolo da reciclagem",
      "descricao": "Símbolo universal formado por três setas dobradas em ciclo, criado em 1970 para indicar materiais recicláveis."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O símbolo da reciclagem, com três setas dobradas em ciclo, tem a forma de que figura matemática famosa?",
    "resposta": "Faixa de Möbius",
    "distratores": [
      "Garrafa de Klein",
      "Triângulo de Penrose",
      "Espiral de Arquimedes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Recycling_symbol"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Recycling_symbol",
        "situacao": "ok",
        "texto": "The universal recycling symbol (U+2672 ♲ UNIVERSAL RECYCLING SYMBOL or U+267B ♻ BLACK UNIVERSAL RECYCLING SYMBOL in Unicode) is a symbol consisting of three chasing arrows folded in a Möbius strip. It is an internationally recognized symbol for recycling. The symbol originated on the first Earth Day in 1970, created by Gary Anderson, then a 23-year-old student, for the Container Corporation of Ame\n[…]\nThe logo is usually displayed with the arrows circulating clockwise, but the underlying Möbius strip exists in two topologically distinct mirror-image forms of opposite handedness.\n[…]\nThe American Paper Institute originally promoted four different variants of the recycling symbol for different purposes. The plain Möbius loop, either white with an outline or solid black, was to be used to indicate that a product was recyclable.\n[…]\nThe other two variants had the Möbius loop inside a circle—either white on black or black on white—and were meant for products made of recycled materials, with the white-on-black version to be used for 100% recycled fiber, and the black-on-white version for products containing both recycled and unrecycled fiber. For example, a paper envelope might have both the first and last of these four symbols to indicate that it was recyclable and made from both recycled and unrecycled fibers.\n[…]\nU+2672 ♲ UNIVERSAL RECYCLING SYMBOL\n[…]\nU+267B ♻ BLACK UNIVERSAL RECYCLING SYMBOL\n[…]\nThe SPI symbols are loosely based on the Möbius loop symbol, but feature simpler bent (rather than folded over) arrows that can be embossed on plastic surfaces without loss of detail. The arrows are formed into a flat, two-dimensional triangle rather than the pseudo-three-dimensional triangle used in the original recycling logo.\n[…]\nU+2679 ♹ RECYCLING SYMBOL FOR TYPE-7 PLASTICS\n[…]\nJapanese recycling symbols\n[…]\n44 Recycle Logos and Symbols\n[…]\nMedia related to Recycling symbols (3 arrows - folded) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%ADmbolo_da_reciclagem",
        "situacao": "ok",
        "texto": "O símbolo da reciclagem é um símbolo internacional que indica que um material é reciclável. É um simbolo de domínio público, não constituindo marca comercial. Foi desenhado em 1971 por Gary Anderson, arquiteto e designer, que na época era estudante da Universidade do Sul da Califórnia.\n[…]\nO símbolo é um triângulo, formado por três setas, desenhadas no sentido horário.\n[…]\nAs setas representam um ciclo, sendo que a primeira seta representa a indústria, que produz um determinado produto (uma garrafa PET, por exemplo), a segunda refere-se ao consumidor, que utiliza esse produto (a pessoa que consome um refrigerante) e a terceira seta representa a reciclagem, que permite a reutilização da matéria-prima (a garrafa, que volta a ser matéria-prima, dando origem a novas garrafas em PET e outros produtos).\n[…]\nCada tipo de material - plástico, vidro, metal e papel - tem um símbolo de cor própria. Esses símbolos podem ser encontrados nas embalagens dos produtos recicláveis e mostram o que pode ser reaproveitado como matéria-prima.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Símbolo da reciclagem",
      "descricao": "Símbolo universal formado por três setas dobradas em ciclo, criado em 1970 para indicar materiais recicláveis."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1970, que estudante universitário americano venceu o concurso que deu origem ao símbolo das três setas da reciclagem?",
    "resposta": "Gary Anderson",
    "fonte": [
      "https://en.wikipedia.org/wiki/Recycling_symbol"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Recycling_symbol",
        "situacao": "ok",
        "texto": "The universal recycling symbol (U+2672 ♲ UNIVERSAL RECYCLING SYMBOL or U+267B ♻ BLACK UNIVERSAL RECYCLING SYMBOL in Unicode) is a symbol consisting of three chasing arrows folded in a Möbius strip. It is an internationally recognized symbol for recycling. The symbol originated on the first Earth Day in 1970, created by Gary Anderson, then a 23-year-old student, for the Container Corporation of Ame\n[…]\nWorldwide attention to environmental issues led to the first Earth Day in 1970. Container Corporation of America, a large producer of recycled paperboard, sponsored a contest for art and design students at high schools and colleges across the country to raise awareness of environmental issues. The contest, which drew more than 500 submissions, was won by Gary Anderson, whose entry was the image now known as the universal recycling symbol.\n[…]\nAnderson, then a 23-year-old college student at the University of Southern California, was awarded a $2,500 scholarship. The public-domain status of the symbol has been challenged, but this challenge was unsuccessful owing to the wide use of the symbol.\n[…]\nBoth Anderson's proposal and CCA's designs form a Möbius strip with one half-twist by having two of the arrows fold over each other and one fold under, thereby canceling out one of the other folds. However, most variants of the symbol used today have all the arrows folding over themselves, producing a Möbius strip with three half-twists. Existing single half-twist variants of the logo do not generally agree on which of the arrows is the one to fold underneath.\n[…]\nU+2672 ♲ UNIVERSAL RECYCLING SYMBOL\n[…]\nU+267B ♻ BLACK UNIVERSAL RECYCLING SYMBOL\n[…]\nGreen Dot symbol\n[…]\nJones, Penny; Powell, Jerry. \"Gary Anderson has been found!\". Resource Recycling: North America's Recycling and Composting Journal, May 1999.\n[…]\n44 Recycle Logos and Symbols\n[…]\nMedia related to Recycling symbols (3 arrows - folded) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%ADmbolo_da_reciclagem",
        "situacao": "ok",
        "texto": "O símbolo da reciclagem é um símbolo internacional que indica que um material é reciclável. É um simbolo de domínio público, não constituindo marca comercial. Foi desenhado em 1971 por Gary Anderson, arquiteto e designer, que na época era estudante da Universidade do Sul da Califórnia.\n[…]\nO símbolo é um triângulo, formado por três setas, desenhadas no sentido horário.\n[…]\nAs setas representam um ciclo, sendo que a primeira seta representa a indústria, que produz um determinado produto (uma garrafa PET, por exemplo), a segunda refere-se ao consumidor, que utiliza esse produto (a pessoa que consome um refrigerante) e a terceira seta representa a reciclagem, que permite a reutilização da matéria-prima (a garrafa, que volta a ser matéria-prima, dando origem a novas garrafas em PET e outros produtos).\n[…]\nCada tipo de material - plástico, vidro, metal e papel - tem um símbolo de cor própria. Esses símbolos podem ser encontrados nas embalagens dos produtos recicláveis e mostram o que pode ser reaproveitado como matéria-prima.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Usina nuclear",
      "descricao": "Usina que gera eletricidade a partir do calor liberado pela fissão nuclear num reator."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Usinas nucleares e usinas a carvão aquecem água para gerar a mesma coisa que gira suas turbinas. O que é?",
    "resposta": "Vapor d'água",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nuclear_power_plant"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nuclear_power_plant",
        "situacao": "ok",
        "texto": "A nuclear power plant (NPP), also known as a nuclear power station (NPS), nuclear generating station (NGS) or atomic power station (APS) is a thermal power station in which the heat source is a nuclear reactor. As is typical of thermal power stations, heat is used to generate steam that drives a steam turbine connected to a generator that produces electricity.\n[…]\nThe nuclear reactor is the heart of the station. In its central part, the reactor's core produces heat due to nuclear fission. With this heat, a coolant is heated as it is pumped through the reactor and thereby removes the energy from the reactor. The heat from nuclear fission is used to raise steam, which runs through turbines, which in turn power the electrical generators.\n[…]\nThe main condenser is a large cross-flow shell and tube heat exchanger that takes wet vapor, a mixture of liquid water and steam at saturation conditions, from the turbine-generator exhaust and condenses it back into sub-cooled liquid water so it can be pumped back to the reactor by the condensate and feedwater pumps.\n[…]\nIn the main condenser, the wet vapor turbine exhaust come into contact with thousands of tubes that have much colder water flowing through them on the other side. The cooling water typically come from a natural body of water such as a river or lake.\n[…]\nContinuous power supply to the plant is critical to ensure safe operation. Most nuclear stations require at least two distinct sources of offsite power for redundancy. These are usually provided by multiple transformers that are sufficiently separated and can receive power from multiple transmission lines. In addition, in some nuclear stations, the turbine generator can power the station's loads while the station is online, without requiring external power.\n[…]\nList of nuclear power stations\n[…]\nNon Destructive Testing for Nuclear Power Plants"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Central_nuclear",
        "situacao": "ok",
        "texto": "Central nuclear (português europeu) ou usina nuclear (português brasileiro) é uma instalação industrial empregada para produzir eletricidade a partir da energia nuclear, pondo em prática o uso de materiais radioativos dos quais produzem calor como resultado da reação nuclear. O calor é usado para gerar vapor de água, obtido com o aquecimento da respetiva, para depois este fazer girar as turbinas a\n[…]\nExistem vários tipos de usinas nucleares, porém as mais usadas são as PWR Reator de água pressurizada e as BWR.\n[…]\nEsse segundo tanque garante que a água que entra de fora do sistema não entre em contato com a água no interior do reator, permanecendo assim limpa, pois a água de rios usadas para resfriar o reator não é usada nem nas turbinas, ele é somente usado para resfriar o vapor de água do segundo tanque após o mesmo já ter passado pelas turbinas.\n[…]\nAs usinas nucleares de água fervida, também chamadas de BWR (boiling water reactors - \"reator de água fervente\") faz com que a água que tem contato com o reator passe pelas turbinas diretamente, e seja resfriada externamente igual a água da usina PWR, porém o risco de contaminação, ainda assim muito pequeno, é maior do que em usinas PWR. Elas são menos eficientes que suas contrapartes PWR.\n[…]\nNo caso das usinas de água pressurizada, a água quente vinda do reator passa por muitos canos para que aqueça um segundo tanque. A água desse tanque não está sobre tanta pressão, acabando por evaporar e passar por turbinas que, ao serem giradas, produzem grandes quantidades de eletricidade. O vapor de água do segundo tanque passa por uma série de tubulações até ser resfriado pela proveniente do exterior, seja de rios, mares ou lagos.\n[…]\nA água vinda do ambiente não sofre contaminação pois esta não entra em contato com o reator e volta para o ambiente logo após ser usada para resfriar o vapor das turbinas.\n[…]\nLista de usinas nucleares\n[…]\nFórum Nuclear (Espanha)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Síndrome da China",
      "descricao": "Filme americano de 1979, com Jane Fonda, sobre o encobrimento de falhas de segurança numa usina nuclear."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O filme Síndrome da China, sobre falhas numa usina nuclear, estreou em 1979, apenas doze dias antes de que acidente real?",
    "resposta": "Three Mile Island",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_China_Syndrome"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_China_Syndrome",
        "situacao": "ok",
        "texto": "The China Syndrome is a 1979 American thriller film directed by James Bridges and written by Bridges, Mike Gray, and T. S. Cook. The film stars Jane Fonda, Jack Lemmon, and Michael Douglas (who also produced). It follows a television reporter and her cameraman who discover safety coverups at a nuclear power plant.\n[…]\nThe China Syndrome premiered at the 1979 Cannes Film Festival, where it competed for the Palme d'Or while Lemmon received the Best Actor Prize. It was theatrically released on March 16, 1979, twelve days before the Three Mile Island nuclear accident in Dauphin County, Pennsylvania, which gave the film's subject matter an unexpected prescience. It became a critical and commercial success.\n[…]\n[...] a terrific thriller that incidentally raises the most unsettling questions about how safe nuclear power plants really are [...] The movie is [...] well-acted, well-crafted, scary as hell. The events leading up to the \"accident\" in The China Syndrome are indeed based on actual occurrences at nuclear plants. Even the most unlikely mishap (a stuck needle on a graph causing engineers to misread a crucial water level) really happened at the Dresden plant outside Chicago.\n[…]\nThe March 1979 release was met with backlash from the nuclear power industry which called it \"sheer fiction\" and a \"character assassination of an entire industry\". Twelve days later, the Three Mile Island nuclear accident occurred in Dauphin County, Pennsylvania. While some credit the accident's timing in helping to sell tickets, the studio attempted to avoid appearing as if they were exploiting the accident, including pulling the film from some theaters.\n[…]\nThe China Syndrome at IMDb\n[…]\nThe China Syndrome at the TCM Movie Database (archived)\n[…]\nThe China Syndrome at the AFI Catalog of Feature Films"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_China_Syndrome",
        "situacao": "ok",
        "texto": "The China Syndrome (br: Síndrome da China / pt: O síndroma da China) é um filme estadunidense de 1979, do gênero drama, dirigido por James Bridges.\n[…]\nO filme foi lançado nos Estados Unidos no dia 16 de março de 1979 e, por ironia do destino, o acidente com a usina nuclear de Three Mile Island, na Pensilvânia, aconteceu no dia 28 de março, exatamente treze dias depois do lançamento do filme.\n[…]\nUma repórter e seu cinegrafista presenciam um estranho acontecimento em uma usina nuclear da Califórnia. Após a matéria feita por eles ter sido recusada pela emissora de televisão, começam a investigar o porquê do segredo em torno do assunto, com a ajuda de um engenheiro da usina que gradativamente toma consciência da gravidade da situação.\n[…]\nRecebeu cinco indicações, nas categorias de melhor filme - drama, melhor diretor, melhor ator - drama (Jack Lemmon), melhor atriz - drama (Jane Fonda) e melhor roteiro.\n[…]\nIndicado também nas categorias de melhor filme e melhor roteiro.\n[…]\nFestival de Cannes 1979 (França)\n[…]\nCartaz do filme Síndrome da China\n[…]\nGaleria de imagens do filme Síndrome da China no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Gelo-seco",
      "descricao": "Dióxido de carbono em estado sólido, usado para refrigeração e para criar efeitos de fumaça."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o gelo-seco, que solta fumaça em festas, tem em comum com o principal gás do efeito estufa emitido pelo homem?",
    "resposta": "Ambos são gás carbônico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dry_ice"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dry_ice",
        "situacao": "ok",
        "texto": "Dry ice is the solid form of carbon dioxide. It is commonly used for temporary refrigeration as CO2  does not have a liquid state at normal atmospheric pressure and sublimes directly from the solid state to the gas state. It is used primarily as a cooling agent, but is also used in fog machines at theatres for dramatic effects. Its advantages include lower temperature than that of water ice and no\n[…]\nDry ice can be used to flash-freeze food or laboratory biological samples, carbonate beverages, make ice cream, solidify oil spills and stop ice sculptures and ice walls from melting.\n[…]\nDry ice can be used as bait to trap mosquitoes, bedbugs, and other insects, due to their attraction to carbon dioxide.\n[…]\nIn 2012, the European Space Agency's Venus Express probe detected a cold layer in the atmosphere of Venus where temperatures are close to the triple point of carbon dioxide –hence it is possible that flakes of dry ice precipitate.\n[…]\nVoyager 2 observations of Neptune's moon Triton suggested the presence of dry ice on the surface, though followup observations indicate that the carbon ices on the surface are carbon monoxide but that the moon's crust is composed of a significant quantity of dry ice.\n[…]\nProlonged exposure to dry ice can cause severe skin damage through frostbite, and the fog produced may also hinder attempts to withdraw from contact in a safe manner. Because it sublimes into large quantities of carbon dioxide gas, which could pose a danger of hypercapnia, dry ice should only be exposed to open air in a well-ventilated environment.\n[…]\nAt least one person has been killed by carbon dioxide gas subliming off dry ice in coolers placed in a car. In 2020, three people were killed at a party in Moscow after 25 kg of dry ice was dumped in a pool; carbon dioxide is heavier than air, and so can linger near the ground, just above water level."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gelo_seco",
        "situacao": "ok",
        "texto": "Gelo-seco é o nome popular para o dióxido de carbono solidificado ao ser resfriado a uma temperatura inferior a -78 °C. Ao ser aquecido na pressão atmosférica, torna-se imediatamente gás de dióxido de carbono, sem passar pelo estado líquido (processo conhecido por sublimação). O estado líquido só pode existir numa pressão superior a 5 atmosferas. Se o ar quente sopra sobre o gelo-seco, forma-se um\n[…]\nO gelo seco sublima a 194,7 K (-78,5 ° C; -109,2 ° F) à pressão atmosférica da Terra . Este frio extremo torna o sólido perigoso de manusear sem proteção contra ferimentos por congelamento . Embora geralmente não seja muito tóxico, a liberação de gases pode causar hipercapnia (níveis anormalmente elevados de dióxido de carbono no sangue) devido ao acúmulo em locais confinados.\n[…]\nÀ medida que o gelo-seco aquece, ele transforma-se em dióxido de carbono gasoso - e não em líquido. A temperatura muito gelada e a característica de passar diretamente para o estado gasoso (característica também conhecida como sublimação) fazem do gelo-seco uma excelente opção para refrigeração. Por exemplo, se você quer atravessar de um ponto a outro do Brasil com uma carne (ou outro produto) congelada, você pode cobri-la com gelo-seco.\n[…]\nEm tanques de alta pressão ou extintores de incêndio contêm dióxido de carbono líquido.\n[…]\nPara se produzir gelo-seco, é preciso um recipiente de alta pressão com dióxido de carbono líquido. Quando se liberta o dióxido de carbono líquido do tanque, a expansão do líquido e a alta velocidade de evaporação do dióxido de carbono gasoso esfriam o resto do líquido até o ponto de congelamento, no qual ele se transforma diretamente em sólido (ressublimação). Se você já viu um extintor de incêndio de dióxido de carbono em ação, viu uma espécie de \"neve\" se formar no bocal.\n[…]\nEssa \"neve\" é o dióxido de carbono (líquido) começando a virar um bloco de \"gelo-seco\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Carvão mineral",
      "descricao": "Rocha sedimentar combustível formada por restos vegetais soterrados, usada em usinas termelétricas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O carvão mineral, que alimenta usinas termelétricas, e o diamante das joias são formados principalmente pelo mesmo elemento. Qual?",
    "resposta": "Carbono",
    "fonte": [
      "https://en.wikipedia.org/wiki/Coal",
      "https://en.wikipedia.org/wiki/Diamond"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coal",
        "situacao": "ok",
        "texto": "Coal is a combustible black or brownish-black sedimentary rock, formed as layers called coal seams. Coal is mostly carbon with variable amounts of other elements, chiefly hydrogen, sulfur, oxygen, and nitrogen. It is a fossil fuel, formed when plants decay into peat which is converted into coal by the heat and pressure of deep burial over millions of years. Vast deposits formed from wetlands calle\n[…]\nCarbonization proceeds primarily by dehydration, decarboxylation, and demethanation. Dehydration removes water molecules from the maturing coal via reactions such as\n[…]\nDecarboxylation removes carbon dioxide from the maturing coal:\n[…]\nFor bituminous coal, the elemental composition on a dry, ash-free basis is 84.4% carbon, 5.4% hydrogen, 6.7% oxygen, 1.7% nitrogen, and 1.8% sulfur by weight. This composition partly reflects the composition of the precursor plants. The second main fraction of coal is ash, an undesirable, noncombustable mixture of inorganic minerals. The composition of ash is often discussed in terms of oxides obtained after combustion in air:\n[…]\nSince the mid-1980s, the term \"clean coal\" has been widely used with various meanings. Initially, \"clean coal technology\" referred to scrubbers and catalytic converters that reduced the pollutants that cause acid rain. The scope then expanded to include reduction of other pollutants such as mercury. Recently, the term has come to encompass the use of carbon capture and storage to reduce greenhouse gas emissions.\n[…]\nIn the long term coal and oil could cost the world trillions of dollars per year. Coal alone may cost Australia billions, whereas costs to some smaller companies or cities could be on the scale of millions of dollars. The economies most damaged by coal (via climate change) may be India and the US as they are the countries with the highest social cost of carbon. Bank loans to finance coal are a risk to the Indian economy."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Diamond",
        "situacao": "ok",
        "texto": "Diamond is a mineral form of the element carbon with its atoms arranged in a crystal structure called diamond cubic. Diamond is a tasteless, odorless, strong, brittle solid, a poor conductor of electricity, colorless in pure form, and insoluble in water. Another solid form of carbon known as graphite is the chemically stable form of carbon at room temperature and pressure, but diamond is metastabl\n[…]\nA common misconception is that diamonds form from highly compressed coal. Coal is formed from buried prehistoric plants, and most diamonds that have been dated are far older than the first land plants. It is possible that diamonds can form from coal in subduction zones, but diamonds formed in this way are rare, and the carbon source is more likely carbonate rocks and organic carbon in sediments, rather than coal.\n[…]\nThey are a mixture of xenocrysts and xenoliths (minerals and rocks carried up from the lower crust and mantle), pieces of surface rock, altered minerals such as serpentine, and new minerals that crystallized during the eruption. The texture varies with depth. The composition forms a continuum with carbonatites, but the latter have too much oxygen for carbon to exist in a pure form. Instead, it is locked up in the mineral calcite (CaCO3).\n[…]\nDiamonds in the mantle form through a metasomatic process where a C–O–H–N–S fluid or melt dissolves minerals in a rock and replaces them with new minerals. (The vague term C–O–H–N–S is commonly used because the exact composition is not known.) Diamonds form from this fluid either by reduction of oxidized carbon (e.g., CO2 or CO3) or oxidation of a reduced phase such as methane.\n[…]\nDiamonds may exist in carbon-rich stars, particularly white dwarfs. One theory for the origin of carbonado, the toughest form of diamond, is that it originated in a white dwarf or supernova. Diamonds formed in stars may have been the first minerals."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carv%C3%A3o_mineral",
        "situacao": "ok",
        "texto": "O carvão mineral é uma rocha sedimentar combustível, de cor preta ou marrom, que ocorre em estratos chamados camadas de carvão. As formas mais duras, como o antracito, podem ser consideradas rochas metamórficas devido à posterior exposição à temperatura e pressão elevadas. É composto basicamente por carbono, enxofre, hidrogênio, oxigênio e nitrogênio, além de elementos vestigiais.[carece de fontes\n[…]\nExistem quatro tipos principais de carvão mineral: turfa, linhito, hulha e antracito (em ordem crescente do teor de carbono). É extraído do solo por mineração a céu aberto ou subterrânea.\n[…]\nEntre os diversos combustíveis produzidos e conservados pela natureza sob a forma fossilizada, acredita-se ser o carvão mineral o mais abundante. Com o coque e o alcatrão de hulha, seus subprodutos são vitais para muitas indústrias modernas.\n[…]\nO carvão fóssil foi formado pelos restos soterrados de plantas tropicais e subtropicais, especialmente durante os períodos Carbonífero e Permiano.\n[…]\nAs alterações climáticas registradas no mundo explicam porque o carvão ocorre em todos os continentes, até mesmo na Antártida. Segundo a visão tradicional, os depósitos carboníferos se formaram de restos de plantas acumuladas em pântanos, que se decompuseram, fazendo surgir as camadas de turfa.\n[…]\nA queima de carvão para obtenção de energia produz efluentes altamente tóxicos como por exemplo o mercúrio e outros metais pesados como vanádio, cádmio, arsênio e chumbo. Além disso, a libertação de dióxido de carbono causa poluição na atmosfera, agravando o aquecimento global e contribuindo para a chuva ácida. Na década de 1950, a poluição atmosférica devido ao uso do carvão causou elevado número de mortes e deixou milhares de doentes em Londres, durante \"o grande nevoeiro de 1952\".\n[…]\nEtanol de carvão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Dia Mundial do Meio Ambiente",
      "descricao": "Data comemorativa da ONU celebrada todo cinco de junho."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Dia Mundial do Meio Ambiente, em cinco de junho, lembra a abertura de que conferência da ONU, realizada em 1972?",
    "resposta": "Conferência de Estocolmo",
    "fonte": [
      "https://en.wikipedia.org/wiki/World_Environment_Day"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/World_Environment_Day",
        "situacao": "ok",
        "texto": "World Environment Day (WED) is celebrated annually on 5 June and encourages awareness and action for the protection of the environment. It is supported by many non-government organizations, businesses, government entities, and represents the primary United Nations outreach day supporting the environment.\n[…]\nWorld Environment Day was established in 1972 by the United Nations at the Stockholm Conference on the Human Environment (5–16 June 1972), following discussions on integrating human activities with the environment. One year later, in 1973, the first WED was held with the theme \"Only one earth\".\n[…]\nThe 2013 theme for World Environment Day was \"Think.Eat.Save\".\n[…]\nIn Réunion Island, Miss Earth 2018 Nguyễn Phương Khánh from Vietnam delivered her speech during World Environment Day with the theme \"How to fight global warming\".\n[…]\nThe theme for 2022 was \"Only One Earth\", and Sweden hosted the event. 2022 marks 50 years since the Stockholm Conference, which led to the designation of 5 June as World Environment Day.\n[…]\nWorld Environment Day campaigns in recent years have focused on raising awareness about plastic consumption, waste management practices, and the need for sustainable alternatives. These campaigns often encourage governments, industries, and individuals to reduce plastic use, improve recycling systems, and support circular-economy models.\n[…]\nEnvironmental research indicates that reducing plastic pollution requires coordinated efforts involving policy measures, corporate responsibility, and behavioral change. As a result, plastic pollution has become a recurring theme in environmental awareness initiatives associated with World Environment Day.\n[…]\nList of environmental protests\n[…]\nUnited Nations Conference on the Human Environment\n[…]\nWorld Environment Day 2019\n[…]\nWorld Environment Day 2018 Theme"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_Mundial_do_Ambiente",
        "situacao": "ok",
        "texto": "O Dia Mundial do Meio Ambiente é celebrado no dia 5 de junho, foi criado pela Assembleia Geral das Nações Unidas na resolução (XXVII) de 15 de dezembro de 1972 com a qual foi aberta a Conferência de Estocolmo, na Suécia, cujo tema central foi o Ambiente Humano. Todos os anos, nesse dia, diversas organizações da sociedade civil lançam manifestos e tomam medidas para relembrar o público geral da nec\n[…]\nEm 2019, a China sediou a conferência internacional do Dia Mundial do Ambiente com o principal objetivo de combate à poluição, em uma iniciativa promovida pela Organização das Nações Unidas no quadro da Convenção-Quadro das Nações Unidas sobre a Mudança do Clima.\n[…]\n«Dia Mundial do Meio ambiente 2009». www.unep.org\n[…]\n«World Environment Day 07». www.unep.org\n[…]\n«Programa das Nações Unidas para o Meio ambiente». www.unep.org",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Gasolina com chumbo",
      "descricao": "Gasolina com o aditivo antidetonante chumbo tetraetila, criada nos anos 1920 e depois banida por sua toxicidade."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O químico americano que criou a gasolina com chumbo também desenvolveu que gases de geladeira, que mais tarde atacaram a camada de ozônio?",
    "resposta": "CFCs (clorofluorcarbonetos)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thomas_Midgley_Jr."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_Midgley_Jr.",
        "situacao": "ok",
        "texto": "Thomas Midgley Jr. (May 18, 1889 – November 2, 1944) was an American mechanical and chemical engineer. He played a major role in developing leaded gasoline (tetraethyl lead) and some of the first chlorofluorocarbons (CFCs), better known in the United States by the brand name Freon; both products were later banned from common use due to their harmful impact on human health and the environment. He w\n[…]\nWhile the harmful effects of CFCs were not understood until decades after Midgley's death, tetraethyl lead was known to be acutely toxic by those involved in the development of leaded gasoline. This included Midgley, who publicly insisted that there was nonetheless no health hazard posed by the use of leaded gasoline in internal combustion engines.\n[…]\nFreon and other CFCs soon largely replaced other refrigerants, but also had other applications. A notable example was their use as a propellant in aerosol products and asthma inhalers. The Society of Chemical Industry awarded Midgley the Perkin Medal in 1937 for this work. In 1941, the American Chemical Society gave Midgley its highest award, the Priestley Medal. This was followed by the Willard Gibbs Award in 1942.\n[…]\nUse of leaded gasoline, which he invented, released large quantities of lead into the atmosphere all over the world. High atmospheric lead levels have been linked with serious long-term health problems from childhood, including neurological impairment, and with increased levels of violence and criminality in America and around the world. Time magazine included both leaded gasoline and CFCs on its list of \"The 50 Worst Inventions\".\n[…]\nMidgley died three decades before the ozone-depleting and greenhouse gas effects of CFCs in the atmosphere became widely known. In 1987, the Montreal Protocol phased out the use of CFCs like Freon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thomas_Midgley",
        "situacao": "ok",
        "texto": "Thomas Midgley Junior (Beaver Falls, 18 de maio de 1889 — Worthington, Ohio, 2 de novembro de 1944) foi um engenheiro mecânico e químico americano.\n[…]\nMidgely foi uma figura chave em uma equipe de químicos, liderados por Charles Kettering, que desenvolveu o tetraetilchumbo (TEL) aditivo à gasolina, bem como alguns dos clorofluorocarbonos (CFCs). Ao longo de sua carreira,foi concedida a Midgely  mais de uma centena de patentes.\n[…]\nMidgley morreu três décadas antes dos efeitos do CFC na camada de ozônio e na atmosfera se tornarem amplamente conhecidos. Outro efeito negativo do trabalho Midgely foi a liberação de grandes quantidades de chumbo na atmosfera, como resultado da combustão em larga escala de gasolina com chumbo em todo o mundo.\n[…]\nAltos níveis de chumbo na atmosfera tem sido associada com sérios problemas de saúde, uma vez que o chumbo se acumula no corpo humano (estima-se que um estadunidense tenha em seu sangue hoje 625 vezes mais chumbo do que uma pessoa que tenha vivido antes de 1923 - data do início da adição de chumbo à gasolina).\n[…]\nCom pouco tempo no mercado, foram observados casos de intoxicação e morte em trabalhadores que atuavam na linha de produção do tetraetilchumbo. A produção do antidetonante foi interrompida entre os anos 1925 e 1926. No entanto, a Ethyl Corporation financiou uma equipe multidisciplinar para analisar os riscos do tetraetilchumbo, obtendo resultados que indicavam que o chumbo disperso pelos gases de escape dos automóveis não eram prejudiciais à saúde pública. ==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Ford Modelo T",
      "descricao": "Automóvel lançado pela Ford em 1908, o primeiro carro produzido em massa em linha de montagem."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Ford Modelo T, de 1908, tinha em comum com os carros flex brasileiros a capacidade de rodar com que combustível?",
    "resposta": "Etanol",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ford_Model_T",
      "https://en.wikipedia.org/wiki/Ethanol_fuel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ford_Model_T",
        "situacao": "ok",
        "texto": "The Ford Model T is an automobile that was produced by the Ford Motor Company from October 1, 1908, to May 26, 1927. It is generally regarded as the first mass-affordable automobile, which made car travel available to middle-class Americans. The relatively low price was partly the result of Ford's efficient fabrication, including assembly line production instead of individual handcrafting.\n[…]\nThe first production Model T was built on August 12, 1908, and left the factory on September 27, 1908, at the Ford Piquette Avenue Plant in Detroit, Michigan. On May 26, 1927, Henry Ford watched the 15 millionth Model T Ford roll off the assembly line at his factory in Highland Park, Michigan.\n[…]\nThe Model T was designed by Childe Harold Wills, and Hungarian immigrants Joseph A. Galamb (main engineer) and Eugene Farkas. Henry Love, C. J. Smith, Gus Degner and Peter E. Martin were also part of the team, as were Galamb's fellow Hungarian immigrants Gyula Hartenberger and Károly Balogh. Henry Ford supervised the designers himself. Production of the Model T began in the third quarter of 1908.\n[…]\nFord created a massive publicity machine in Detroit to ensure every newspaper carried stories and advertisements about the new product. Promotion began well in advance for the introduction of the Model T, with advertisements appearing in newspapers in January 1908. Ford's network of local dealers made the car ubiquitous in virtually every city in North America.\n[…]\nNew Zealand RM class (Model T Ford) – a 1925 experimental railcar based on a Model T powertrain\n[…]\nClymer, Floyd (1955). Henry's wonderful Model T, 1908–1927. New York, NY, U.S.: McGraw-Hill. LCCN 55010405.\n[…]\nMcCalley, Bruce W. (1994). Model T Ford: The Car That Changed the World. Iola, WI, U.S.: Krause Publications. ISBN 0-87341-293-1.\n[…]\nModel T Ford Club of America (USA)\n[…]\nModel T Ford Club International\n[…]\nFord Model T at the Internet Movie Cars Database"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ethanol_fuel",
        "situacao": "ok",
        "texto": "Ethanol fuel is an alcohol-based fuel commonly produced by fermenting sugars from crops such as corn, sugarcane, and other biomass, although it can also be synthesized from petroleum derivatives. While it is the same type of alcohol as found in alcoholic beverages, it is most often used as an alternative to gasoline in transportation, either as a pure fuel or blended into gasoline mixtures as a bi\n[…]\nThis provision is particularly necessary for users of Brazil's southern and central regions, where temperatures normally drop below 15 °C (59 °F) during the winter. An improved flex engine generation was launched in 2009 that eliminates the need for the secondary gas storage tank. In March 2009 Volkswagen do Brasil launched the Polo E-Flex, the first Brazilian flex fuel model without an auxiliary tank for cold start.\n[…]\nThe reduction from corn ethanol in GHG is estimated to be 7.4%. A National Geographic overview article (2007) puts the figures at 22% less CO2 emissions in production and use for corn ethanol compared to gasoline and a 56% reduction for cane ethanol. Carmaker Ford reports a 70% reduction in CO2 emissions with bioethanol compared to petrol for one of their flexible-fuel vehicles.\n[…]\nFor each billion ethanol-equivalent gallons of fuel produced and combusted in the US, the combined climate-change and health costs are $469 million for gasoline, $472–952 million for corn ethanol depending on biorefinery heat source (natural gas, corn stover, or coal) and technology, but only $123–208 million for cellulosic ethanol depending on feedstock (prairie biomass, Miscanthus, corn stover, or switchgrass).\n[…]\nAustralia's V8 Supercar championship uses Shell E85 for its racing fuel, and Stock Car Brasil Championship runs on neat ethanol, E100. Ethanol fuel may also be utilized as a rocket fuel. As of 2010, small quantities of ethanol are used in lightweight rocket-racing aircraft."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ford_Model_T",
        "situacao": "ok",
        "texto": "Ford Modelo T é um automóvel que foi desenvolvido e fabricado pela empresa norte-americana Ford Motor Company, de 1908 a 1927. Vigésimo modelo da marca, popularizou e revolucionou a indústria automobilística.\n[…]\nEm 1° outubro de 1908, a Ford lançou no mercado dos Estados Unidos o seu Modelo T, um veículo confiável, robusto, seguro, simples de dirigir e, principalmente, barato.\n[…]\nPor estas razões, o \"T\" conquistou o público americano e de outros países. Em 1914 iniciou-se a sua fabricação na Argentina. Em 1917 foi lançado o caminhão Modelo TT. Em 1919, a Ford se tornou o primeiro fabricante de automóveis no Brasil, com a produção do carro e do caminhão dessa linha. Em 1920, mais da metade dos veículos que circulavam ao redor do mundo eram modelos \"T\", que eram vistos até em países distantes, como Turquia e Etiópia.\n[…]\nComo parte das comemorações de seu centenário, em 2003, a Ford restaurou seis unidades. Uma versão de 2003, denominada Modelo T-100, foi fabricada totalmente à mão, sendo idêntica à original de 1914.\n[…]\nPrimeiro carro da Ford com volante no lado esquerdo. Era considerado leve em relação a outros modelos. Como no câmbio, a redução se fazia por meio de uma engrenagem helicoidal. No painel havia amperímetro e hodômetro.\n[…]\nAinda não era com o sistema de pedal, mas com uma alavanca junto ao volante, que formava par com outra, para ajustar o avanço de ignição. As duas alavancas, opostas, formavam a figura de um bigode, o que levou o \"T\" a ser chamado, no Brasil, de \"Ford Bigode\". Quando o nome pegou, os modelos fabricados no Brasil passaram a mostrar no ornamento do capô a figura de um bigode.\n[…]\nCronologia do modelo T\n[…]\nFord Hemp Body Car",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Chuva ácida",
      "descricao": "Precipitação com acidez elevada causada por óxidos de enxofre e de nitrogênio lançados na atmosfera."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "No século dezenove, estudando o ar poluído de Manchester, que químico escocês criou a expressão chuva ácida?",
    "resposta": "Robert Angus Smith",
    "distratores": [
      "Joseph Black",
      "Thomas Graham",
      "William Ramsay"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Acid_rain",
      "https://en.wikipedia.org/wiki/Robert_Angus_Smith"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Acid_rain",
        "situacao": "ok",
        "texto": "Acid rain is rain or any other form of precipitation that is unusually acidic, meaning that it has elevated levels of hydrogen ions (low pH). Most water, including drinking water, has a neutral pH that exists between 6.5 and 8.5, but acid rain has a pH level lower than this and ranges from 4–5 on average. The more acidic the acid rain is, the lower its pH is. Acid rain can have harmful effects on \n[…]\nSince the Industrial Revolution, emissions of sulfur dioxide and nitrogen oxides into the atmosphere have increased. In 1852, Robert Angus Smith was the first to show the relationship between acid rain and atmospheric pollution in Manchester, England. Smith coined the term \"acid rain\" in 1872.\n[…]\nThe spread of acid rain over India was first studied by a team of researchers in 1989.\n[…]\nAcid rain is now as severe a threat to the developing world, especially India and China, as it was earlier to some of the developed countries.\n[…]\nCitizen science – one of two 'first uses' of the term was in an acid rain campaign in 1989.\n[…]\nRitchie, Hannah, \"What We Learned from Acid Rain: By working together, the nations of the world can solve climate change\", Scientific American, vol. 330, no. 1 (January 2024), pp. 75–76. \"[C]ountries will act only if they know others are willing to do the same. With acid rain, they did act collectively.... We did something similar to restore Earth's protective ozone layer.... [T]he cost of technology really matters....\n[…]\nAcid rain for schools\n[…]\nAcid rain for schools – Hubbard Brook\n[…]\nUnited States Environmental Protection Agency – New England Acid Rain Program (superficial)\n[…]\nAcid Rain (more depth than ref. above)\n[…]\nU.S. Geological Survey – What is acid rain?\n[…]\nAcid Rain: A Continuing National Tragedy – a report from The Adirondack Council on acid rain in the Adirondack region (1998)\n[…]\nWhat Happens to Acid Rain?\n[…]\nAcid Rain and how it affects fish and other aquatic organisms"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Robert_Angus_Smith",
        "situacao": "ok",
        "texto": "Robert Angus Smith FRS (15 February 1817 – 12 May 1884), commonly referred to as Angus Smith, was a Scottish chemist, who investigated numerous environmental issues. He is known for his research on air pollution in 1852, in the course of which he discovered what came to be known as acid rain. He is sometimes referred to as the 'Father of Acid Rain'.\n[…]\nOn returning to England the same year, he again considered Holy Orders but instead was attracted to Manchester to join the chemical laboratory of Lyon Playfair at the Royal Manchester Institution. Here he became involved in some of the environmental issues of the world's first industrial city (see History of Manchester). Playfair left for greener pastures in 1845 and Smith worked at making a living as an independent analytical chemist.\n[…]\nIn 1872 Smith published the book Air and Rain: The Beginnings of a Chemical Climatology, which presents his studies of the chemistry of atmospheric precipitation. These studies include the discovery, in 1852, of acid rain in northern British cities, a consequence of the burning of coal rich in sulfur. He was conferred with Honorary Membership of the Institution of Engineers and Shipbuilders in Scotland in 1884.\n[…]\nSmith was elected a Fellow of the Royal Society (FRS) in 1857. He was elected to membership of The Manchester Literary and Philosophical Society on 29 January 1845, becoming Secretary of the Society1852–57 and President Society 1864–66\n[…]\nA Centenary of Science in Manchester (1883)\n[…]\nEyler, J. (1980). \"The Conversion of Angus Smith: the Changing Role of Chemistry and Biology in Sanitary Science, 1850–1880\". Bulletin of the History of Medicine. 54 (2): 216–34. PMID 6994850.\n[…]\nReed, Peter. Acid rain and the rise of the environmental chemist in nineteenth-century Britain: the life and work of Robert Angus Smith (Routledge, 2016)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chuva_%C3%A1cida",
        "situacao": "ok",
        "texto": "Chuva ácida é a designação dada à chuva, ou qualquer outra forma de precipitação atmosférica, cuja acidez seja substancialmente maior do que a resultante do dióxido de carbono (CO2) atmosférico dissolvido na água precipitada. A principal causa daquela acidificação é a presença, na atmosfera terrestre, de gases e partículas ricos em enxofre e azoto reativo cuja hidrólise no meio atmosférico produz \n[…]\nAssumem particular importância os compostos azotados (NOx) gerados pelas altas temperaturas de queima dos combustíveis fósseis e os compostos de enxofre (SOx) produzidos pela oxidação das impurezas sulfurosas existentes na maior parte dos carvões e petróleos. Quimicamente, chuva ácida não seria uma expressão adequada, porque para a Química toda chuva é ácida devido à presença do ácido carbônico (H2CO3), mas para a Geografia toda chuva com pH abaixo do N.T.\n[…]\nAs emissões de dióxido de enxofre e de óxidos de azoto têm crescido quase continuamente desde o início da Revolução Industrial. Robert Angus Smith, num estudo realizado em Manchester, Inglaterra, fez em 1852 a primeira demonstração da relação entre a acidez da chuva e a poluição industrial, cunhando em 1872 a designação chuva ácida.\n[…]\nNa ausência de qualquer contaminante atmosférico, a água precipitada pela chuva é levemente ácida, sendo de esperar um pH de aproximadamente 5,2 a 20 ºC, valor inferior ao que resultaria se a solução ocorresse em água destilada (pH = 5,6) devido à presença de outros compostos na atmosfera terrestre não poluída.\n[…]\n«Acid rain for schools» (em inglês)\n[…]\n«CBC Digital Archives – Acid Rain: Pollution and Politics» (em inglês)\n[…]\n«Acid Rain: A Continuing National Tragedy» (PDF) (em inglês). - a report from The Adirondack Council on acid rain in the Adirondack region\n[…]\n«Assortment of Summaries on Acid Rain» (em inglês)\n[…]\n«Acid rain linked to decline of the wood thrush, a songbird of the Eastern Forest» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Metano",
      "descricao": "Gás inflamável formado por um carbono e quatro hidrogênios, principal componente do gás natural."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1776, recolhendo bolhas nos pântanos do lago Maggiore, que cientista italiano identificou o metano?",
    "resposta": "Alessandro Volta",
    "distratores": [
      "Luigi Galvani",
      "Amedeo Avogadro",
      "Lazzaro Spallanzani"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Methane"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Methane",
        "situacao": "ok",
        "texto": "Methane (US:  METH-ayn, UK:  MEE-thayn) is a chemical compound that has the chemical formula CH4 (one carbon atom bonded to four hydrogen atoms). It is a group-14 hydride, the simplest alkane, and the main constituent of natural gas. The abundance of methane on Earth makes it an economically attractive fuel, although capturing and storing it is difficult because it is a gas at standard temperature\n[…]\nAs a refrigerant, methane has the ASHRAE designation R-50.\n[…]\nThe discovery of methane is credited to Italian physicist Alessandro Volta, who characterized numerous properties including its flammability limit and origin from decaying organic matter.\n[…]\nVolta was initially motivated by reports of \"inflammable air\" present in marshes by his friend Father Carlo Giuseppe Campi. While on a fishing trip to Lake Maggiore straddling Italy and Switzerland in November 1776, he noticed the presence of bubbles in the nearby marshes and decided to investigate. Volta collected the gas rising from the marsh and showed that the gas would catch fire if exposed to a flame or spark.\n[…]\nVolta notes similar observations of \"inflammable air\" were present previously in scientific literature, including a letter written by Benjamin Franklin.\n[…]\nMethane is an asphyxiant gas, meaning that it is non-toxic and the primary health hazard is displacement of oxygen in high enough concentrations, potentially causing death by asphyxiation. No systemic toxicity has been detected at 5% concentration in air.\n[…]\nMethane at The Periodic Table of Videos (University of Nottingham)\n[…]\nGas (Methane) Hydrates – A New Frontier – United States Geological Survey (archived 6 February 2004)\n[…]\nLunsford, Jack H. (2000). \"Catalytic conversion of methane to more useful chemicals and fuels: A challenge for the 21st century\". Catalysis Today. 63 (2–4): 165–174. doi:10.1016/S0920-5861(00)00456-9.\n[…]\nCDC – Handbook for Methane Control in Mining (PDF)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Metano",
        "situacao": "ok",
        "texto": "O metano é um gás incolor, sua molécula é tetraédrica e apolar (\n[…]\nfontes naturais (ex: pântanos);\n[…]\nIndustrialmente, o metano pode ser produzido e utilizado na indústria, assim como na natureza (vulcões e campos geológicos), em processos químicos, como processo Sabatier, Fischer-Tropsch, e reforma de vapor. Recentemente, experimentos científicos tiveram vastos resultados apontando para o fato de que todas as plantas produzem metano, e que com o clima mais quente elas produzem mais.\n[…]\nSe houvesse na atmosfera quantidades iguais de metano e de dióxido de carbono o planeta seria inabitável. O metano é às vezes chamado de gás dos pântanos, por ser um subproduto da deterioração. É também chamado de gás natural, porque exsuda das paredes das minas de carvão e pode ser coletado como combustível fóssil.\n[…]\nNós, seres humanos, lançamos metano no ar sobretudo pela mineração de bolsas de gás natural e pela queima de petróleo; as bactérias lançam metano no ar por decomporem folhas caídas, o humo e outros detritos orgânicos de pântanos, charcos e arrozais.\n[…]\nPlantas vivas (e.g. florestas) tem sido recentemente identificadas como uma importante fonte potencial de metano. Um artigo de 2006 calculou uma emissão de 62-236 Tg/a, e \"essa recente fonte identificada pode ter importantes implicações\". No entanto os autores enfatizam \"nossos resultados são preliminares relação ao potencial da emissão de metano\".\n[…]\nO metano foi primeiro identificado por Alessandro Volta em 1788 nos pântanos da Itália.\n[…]\nGrupo metila, a um grupo funcional similar ao metano\n[…]\nHidrato de metano",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Destruição da camada de ozônio",
      "descricao": "Redução da camada de ozônio da estratosfera causada por gases industriais, como os CFCs."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que químico mexicano dividiu o Nobel de Química de 1995 por seus estudos sobre a destruição da camada de ozônio?",
    "resposta": "Mario Molina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mario_Molina",
      "https://en.wikipedia.org/wiki/Ozone_depletion"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mario_Molina",
        "situacao": "ok",
        "texto": "Mario José Molina-Pasquel Henríquez (19 March 1943 – 7 October 2020) was a Mexican physical chemist. He played a pivotal role in the discovery of the Antarctic ozone hole, and was a co-recipient of the 1995 Nobel Prize in Chemistry for his role in discovering the threat to the Earth's ozone layer from chlorofluorocarbon (CFC) gases. He was the first Mexican-born scientist to receive a Nobel Prize \n[…]\nFollowing this in 1985, after Joseph Farman discovered a hole in the ozone layer in Antarctica, Mario Molina led a research team to further investigate the cause of rapid ozone depletion in Antarctica. It was found that the stratospheric conditions in Antarctica were ideal for chlorine activation, which ultimately causes ozone depletion.\n[…]\nMolina received numerous awards and honors, including sharing the 1995 Nobel Prize in chemistry with Paul J. Crutzen and F. Sherwood Rowland for their discovery of the role of CFCs in ozone depletion.\n[…]\nMario Molina is a visionary chemist and environmental scientist. Born in Mexico, Dr. Molina came to [The United States] to pursue his graduate degree. He later earned the Nobel Prize in Chemistry for discovering how chlorofluorocarbons deplete the ozone layer. Dr. Molina is a professor at the University of California, San Diego; Director of the Mario Molina Center for Energy and Environment; and a member of the President's Council of Advisors on Science and Technology.\n[…]\nMolina was one of twenty-two Nobel Laureates who signed the third Humanist Manifesto in 2003.\n[…]\nMario Molina is the recipient of the Lifetime Achievement Award (Champions of the Earth) in 2014.\n[…]\nCentro Mario Molina (in Spanish)\n[…]\nCenter for Oral History. \"Mario J. Molina\". Science History Institute.\n[…]\nMario Molina on Nobelprize.org  including the Nobel Lecture on 8 December 1995 \"Polar Ozone Depletion\"\n[…]\nOral history interview with Mario J. Molina in Science History Institute Digital Collections"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ozone_depletion",
        "situacao": "ok",
        "texto": "Ozone depletion in the stratosphere (the ozone layer) consists of two related phenomena observed since the late 1970s: a lowered total amount of ozone in Earth's upper stratosphere, and a much larger springtime decrease in around Earth's polar regions. The latter phenomenon over the south pole is referred to as the ozone hole. There are also springtime polar tropospheric ozone depletion events in \n[…]\nIn 1974 Frank Sherwood Rowland, Chemistry Professor at the University of California at Irvine, and his postdoctoral associate Mario J. Molina suggested that long-lived organic halogen compounds, such as CFCs, might behave in a similar fashion as Crutzen had proposed for nitrous oxide. James Lovelock had recently discovered, during a cruise in the South Atlantic in 1971, that almost all of the CFC compounds manufactured since their invention in 1930 were still present in the atmosphere.\n[…]\nNevertheless, within three years most of the basic assumptions made by Rowland and Molina were confirmed by laboratory measurements and by direct observation in the stratosphere.\n[…]\nMcElroy and Wofsy extended the work of Rowland and Molina by showing that bromine atoms were even more effective catalysts for ozone loss than chlorine atoms and argued that the brominated organic compounds known as halons, widely used in fire extinguishers, were a potentially large source of stratospheric bromine. In 1976 the United States National Academy of Sciences released a report concluding that the ozone depletion hypothesis was strongly supported by the scientific evidence.\n[…]\nCrutzen, Molina, and Rowland were awarded the 1995 Nobel Prize in Chemistry for their work on stratospheric ozone.\n[…]\n\"WMO/UNEP Scientific Assessments of Ozone Depletion (Latest Report 2022)\". Chemical Sciences Laboratory, National Oceanic and Atmospheric Administration (NOAA). NOAA/ESRL Ozone Depletion\n[…]\nNOAA/ESRL Ozone Depleting Gas Index"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mario_Molina",
        "situacao": "ok",
        "texto": "Mario José Molina-Pasquel Henríquez (Cidade do México, 19 de março de 1943 – Cidade do México, 7 de outubro de 2020), conhecido como Mario Molina, foi um químico mexicano que se tornou conhecido por seu trabalho pioneiro na pesquisa de substâncias químicas que destroem a camada de ozônio na atmosfera.\n[…]\nMario Molina, Andrés Manuel del Río e Luis Ernesto Miramontes são três químicos mexicanos de destaque. Integrou a Pontifícia Academia das Ciências em 2000.\n[…]\nEle realizou investigações no campo da química ambiental sobre o problema do meio ambiente. Em 1974, Rowland e Molina relataram os resultados de suas pesquisas em um artigo publicado na revista Nature. Nele eles alertaram sobre a crescente ameaça de que o uso de gases CFC para a camada de ozônio, note que na época foi criticada e considerada exagerada por parte de seus colegas pesquisadores.\n[…]\nEm 11 de outubro de 1995, junto com Sherwood Rowland, foram agraciados com o Prêmio Nobel de Química, por terem sido os pioneiros na implantação do relação entre o buraco de ozônio e os compostos de cloro e brometo na estratosfera. O prêmio também foi concedido ao holandês Paul J. Crutzen, do Instituto de Química Max Planck de Mainz, que constatou em 1970 que gases poluentes têm efeito destrutivo nesta camada, sem se decompor.\n[…]\nMolina, Luisa T., Molina, Mario J. e Renyi Zhang. \"Laboratory Investigation of Organic Aerosol Formation from Aromatic Hydrocarbons\", Massachusetts Institute of Technology (MIT), United States Department of Energy, (Ago. 2006).\n[…]\nMolina, Luisa T., Molina, Mario J., et al. \"Characterization of Fine Particulate Matter (PM) and Secondary PM Precursor Gases in the Mexico City Metropolitan Area\", Massachusetts Institute of Technology (MIT), United States Department of Energy, (Out. 2008).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Destruição da camada de ozônio",
      "descricao": "Redução da camada de ozônio da estratosfera causada por gases industriais, como os CFCs."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Todo ano, na primavera do hemisfério sul, o buraco na camada de ozônio se abre sobre que continente?",
    "resposta": "Antártida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ozone_depletion"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ozone_depletion",
        "situacao": "ok",
        "texto": "Ozone depletion in the stratosphere (the ozone layer) consists of two related phenomena observed since the late 1970s: a lowered total amount of ozone in Earth's upper stratosphere, and a much larger springtime decrease in around Earth's polar regions. The latter phenomenon over the south pole is referred to as the ozone hole. There are also springtime polar tropospheric ozone depletion events in \n[…]\nThe Antarctic ozone hole is expected to continue for decades. Ozone concentrations in the lower stratosphere over Antarctica increased by 5–10 percent by 2020 and will return to pre-1980 levels by about 2060–2075. This is 10–25 years later than predicted in earlier assessments, because of revised estimates of atmospheric concentrations of ozone-depleting substances, including a larger predicted future usage in developing countries.\n[…]\nIn response the United States, Canada and Norway banned the use of CFCs in aerosol spray cans in 1978. Early estimates were that, if CFC production continued at 1977 levels, the total atmospheric ozone would after a century or so reach a steady state, 15 to 18 percent below normal levels. By 1984, when better evidence on the speed of critical reactions was available, this estimate was changed to 5 to 9 percent steady-state depletion.\n[…]\nThere are various areas of linkage between ozone depletion and global warming science:\n[…]\nDrew Schindell and Paul Newman of Goddard Space Flight Center proposed a theory in the late 1990s, using computational modeling methods to model ozone destruction, which accounted for 78 percent of the ozone destroyed. Further refinement of that model accounted for 89 percent of the ozone destroyed, but pushed back the estimated recovery of the ozone hole from 75 years to 150 years. (The model includes the lack of stratospheric flight due to depletion of fossil fuels.)\n[…]\nNOAA/ESRL Ozone Depleting Gas Index"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rarefa%C3%A7%C3%A3o_da_Camada_de_Ozono",
        "situacao": "ok",
        "texto": "A Rarefação da Camada de Ozono[pt] ou Rarefação da camada de ozônio[br] refere-se ao lento e constante declínio de aproximadamente 4 porcento por década no volume total de ozono na estratosfera da Terra (a camada de ozono) desde o final da década de 1970, e um muito maior, mas sazonal, declínio na camada estratosférica de ozono sobre as regiões polares da Terra durante o mesmo período. Este segund\n[…]\nNo entanto, em 1985, Joe Farman publicou um estudo revelando uma descoberta surpreendente: uma redução quase completa do ozônio sobre o Polo Sul na primavera antártica, que pela primeira vez chamou a atenção mundial para o \"buraco\" na camada de ozônio. Esse buraco corresponde a uma área onde a concentração total de ozônio cai para menos de 220 unidades Dobson.\n[…]\nNo inverno de 2010-2011, um dos mais frios registrados no Ártico, cerca de metade do ozônio da região foi destruída, criando um \"buraco\" semelhante ao que ocorre regularmente na Antártica.\n[…]\nO buraco na camada de ozônio sobre a Antártica não se deve a uma maior presença de CFCs na região, mas sim às temperaturas extremamente baixas, que favorecem a formação de nuvens estratosféricas polares. Essas nuvens são cruciais para a conversão de gases de reservatório em gases reativos, intensificando a destruição do ozônio na primavera polar.\n[…]\nReações provocadas por gases residuais, sejam de origem natural ou antropogênica, que resultam na destruição da camada de ozônio.\n[…]\nDepois de o menor buraco na camada de ozônio da Antártica desde 1982 ser registrado em 2019, em setembro de 2023, ele alcançou 26 milhões de quilômetros quadrados, tornando-se o 12º maior desde 1979. Esse aumento foi possivelmente influenciado pela pluma de vapor d’água emitida pela erupção do Hunga Tonga. O excesso de água na atmosfera aumentou a concentração de radicais hidroxila, o que contribuiu para a destruição da camada de ozônio na estratosfera superior.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Cavalo-vapor",
      "descricao": "Unidade de potência criada no século dezoito para comparar máquinas a vapor com a força de cavalos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No século dezoito, que engenheiro escocês adotou a unidade cavalo-vapor para comparar suas máquinas com a força dos animais de tração?",
    "resposta": "James Watt",
    "fonte": [
      "https://en.wikipedia.org/wiki/Horsepower"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Horsepower",
        "situacao": "ok",
        "texto": "Horsepower (hp) is a unit of measurement of power, or the rate at which work is done, usually in reference to the output of engines or motors. There are many different standards and types of horsepower. Two common definitions used today are the imperial horsepower, abbreviated hp or bhp, which is about 745.7 watts, and the metric horsepower, also represented as cv or PS, which is approximately 735\n[…]\nThe term was adopted in the late 18th century by Scottish engineer James Watt to compare the output of steam engines with the power of draft horses. It was later expanded to include the output power of other power-generating machinery such as piston engines,  turbines, and electric motors. The definition of the unit varied among geographical regions. Most countries now use the SI unit watt for measurement of power.\n[…]\nEngineering in History recounts that John Smeaton initially estimated that a horse could produce 22,916 ft⋅lb (31,070 J) per minute. John Desaguliers had previously suggested 44,000 ft⋅lb (59,700 J) per minute, and Thomas Tredgold suggested 27,500 ft⋅lb (37,300 J) per minute. \"Watt found by experiment in 1782 that a 'brewery horse' could produce 32,400 ft⋅lb [43,929 J] per minute.\" James Watt and Matthew Boulton standardized that figure at 33,000 ft⋅lb (44,742.0 J) per minute the next year.\n[…]\nBrake refers to the device which is used to provide an equal braking force, load to balance, or equal an engine's output force and hold it at a desired rotational speed. During testing, the output torque and rotational speed are measured to determine the brake horsepower. Horsepower was originally measured and calculated by use of the \"indicator diagram\" (a James Watt invention of the late 18th century), and later by means of a Prony brake connected to the engine's output shaft.\n[…]\nHorsepower-hour\n[…]\nBrain, Marshall; Homer, Talon (23 May 2024). \"How Horsepower Works\". How Stuff Works."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cavalo-vapor",
        "situacao": "ok",
        "texto": "Cavalo (em inglês: Horsepower (hp)) é uma unidade de medida de potência, ou a taxa na qual o trabalho é feito, geralmente em referência à produção de máquinas ou motores. Existem muitos padrões e tipos diferentes de cavalos. Duas definições comuns usadas hoje são a potência mecânica (ou potência imperial), que é cerca de 745,7 watts, e a potência métrica, que é de aproximadamente 735,5 watts.\n[…]\nO termo foi adoptado no final do século XVIII pelo engenheiro escocês James Watt para comparar a produção das máquinas a vapor com a potência dos cavalos de tração. Posteriormente, foi expandido para incluir a potência de saída de outros tipos de motores a pistão, bem como turbinas, motores eléctricos e outras máquinas. A definição da unidade variou entre as diversas regiões geográficas do globo. A maioria dos países agora usa a unidade de watt do SI para medir a potência.\n[…]\nCom a implementação da Diretiva 80/181 / EEC da UE no dia 1 de janeiro de 2010, o uso de cavalos na UE é permitido apenas como uma unidade suplementar.\n[…]\nO hp (horse-power em inglês) é uma unidade de origem inglesa. Fora dos países de língua inglesa, criou-se a unidade de medida cv (cavalo-vapor), porém não são iguais.\n[…]\nAssim, é habitual referir à potência dos motores de automóveis, embarcações etc. em cavalos-vapor, mas sem aclarar que nos países onde o Sistema Internacional é o único legal, se utiliza o quilowatt (kW) como unidade de potência, ainda que se acompanhe de sua equivalência em cv ou hp (na Europa, exceto Reino Unido e Irlanda, normalmente cv).\n[…]\nNo sistema Pés-Libras-Segundo ou FPS, a unidade básica de potência é pés-libras por segundo; entretanto, o horsepower (hp) é usado comumente na engenharia, sendoː\n[…]\nConvertendo para o sistema MKS de unidades: 1 lb·ft (0,138248 kgf-m), ou seja:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Usina maremotriz de La Rance",
      "descricao": "Usina que gera eletricidade com a força das marés no estuário do rio Rance, inaugurada em 1966."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A usina de La Rance, que gera eletricidade com a força das marés desde 1966, fica em que país?",
    "resposta": "França",
    "distratores": [
      "Reino Unido",
      "Canadá",
      "Coreia do Sul"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rance_Tidal_Power_Station"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rance_Tidal_Power_Station",
        "situacao": "ok",
        "texto": "The Rance Tidal Power Station is a tidal power station located on the estuary of the Rance River in Brittany, France.\n[…]\nOpened in 1966 as the world's first tidal power station, the 240-megawatt (MW) facility was the largest such power station in the world by installed capacity for 45 years until the 254-MW South Korean Sihwa Lake Tidal Power Station surpassed it in 2011.\n[…]\nThe idea of constructing a tidal power plant on the Rance dates to Gerard Boisnoer in 1921. The site was attractive because of the wide average-range between low and high tide levels, 8 m (26.2 ft) with a maximum perigean spring tide range of 13.5 m (44.3 ft). The first studies which envisaged a tidal plant on the Rance were done by the Society for the Study of Utilization of the Tides in 1943. Nevertheless, work did not actually commence until 1961.\n[…]\nConstruction took three years and was completed in 1966. Charles de Gaulle, then President of France, inaugurated the plant on 26 November of the same year. Inauguration of the road crossing the plant took place on 1 July 1967, and connection of the plant to the French National Power Grid was carried out on 4 December 1967. In total, the plant cost ₣620 million (approximately €94.5 million). It took almost 20 years for the La Rance to pay for itself.\n[…]\nList of tidal power stations\n[…]\nH. André (1978), \"Ten Years of Experience at the \"La Rance'\" Tidal Power Plant\", Ocean Management (4): 165–178, doi:10.1016/0302-184X(78)90023-9\n[…]\n\"Barrage de l'usine marémotrice de la Rance\" (PDF). French committee of dams and reservoirs.\n[…]\n\"The Rance tidal power plant\" (PDF). La Houille Blanche (2). 1962."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Usina_maremotriz_de_La_Rance",
        "situacao": "ok",
        "texto": "A Usina maremotriz de La Rance é uma estação de energia maremotriz localizada no estuário do rio Rance, em Bretanha, França. Foi inaugurada em 26 de novembro de 1966, a primeira estação do tipo a ser construída no mundo, sendo operada pela Électricité de France. Foi, por 45 anos, a central de maior por capacidade instalada no mundo, até ser ultrapassada pela Usina maremotriz do lago Sihwa, na Core\n[…]\nSuas 24 turbinas alcançam um pico de 240 megawatts e uma média de 62 megawatts, um fator de capacidade de aproximadamente 26%. Com uma entrega anual de 540 GWh, ela provê 0.12% da demanda de energia do país.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Usina de Três Gargantas",
      "descricao": "Grande usina hidrelétrica e barragem na província de Hubei, na China."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A gigantesca usina hidrelétrica chinesa de Três Gargantas represa as águas de que rio?",
    "resposta": "Yangtzé",
    "distratores": [
      "Rio Amarelo",
      "Mekong",
      "Amur"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Three_Gorges_Dam"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Three_Gorges_Dam",
        "situacao": "ok",
        "texto": "The Three Gorges Dam, officially known as Yangtze River Three Gorges Water Conservancy Project is a hydroelectric gravity dam that spans the Yangtze River near Sandouping in Yiling District, Yichang, Hubei province, central China, downstream of the Three Gorges. It is also the world's largest power station by installed capacity (22,500 MW); it generates 95±20 TWh of electricity per year on average\n[…]\nThis is particularly detrimental to the region's ecosystem because the Yangtze River basin is home to 361 different fish species and accounts for 27% of China's endangered freshwater fish species. Other aquatic species have been endangered by the dam, particularly the baiji, or Chinese river dolphin, now extinct. In fact, Chinese Government scholars even claim that the Three Gorges Dam directly caused the extinction of the baiji.\n[…]\nOf the 3,000 to 4,000 remaining critically endangered Siberian crane, many spend the winter in wetlands that the Three Gorges Dam will destroy. Populations of the Yangtze sturgeon are guaranteed to be \"negatively affected\" by the dam. In 2022 the Chinese paddlefish was declared extinct, with the last confirmed sighting in 2003.\n[…]\nThe Three Gorges project includes locks to enable ships to pass the dam. Since the undammed gorges had been dangerous to navigate, officials said, the project would  enable shipping on the Yangtze to rise from ten million to 100 million tonnes annually and would reduce shipping costs by roughly one-third.\n[…]\nIn order to maximize the utility of the Three Gorges Dam and cut down on sedimentation from the Jinsha River, the upper course of the Yangtze River, authorities are building a series of dams on the Jinsha, including the now completed Wudongde, Baihetan, Xiluodu, and Xiangjiaba dams. The total capacity of those four dams is 38,500 MW, almost double the capacity of the Three Gorges.\n[…]\nThree Gorges Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hidrel%C3%A9trica_das_Tr%C3%AAs_Gargantas",
        "situacao": "ok",
        "texto": "A Barragem das Três Gargantas é uma barragem hidrelétrica de gravidade que atravessa o rio Yangtze pela cidade de Sandouping, na prefeitura de Yichang, província de Hubei, China. Três Gargantas é a maior usina do mundo em termos de capacidade instalada (22.500 MW) desde 2012.\n[…]\nA grande barragem sobre o rio Yangtzé foi originalmente concebida por Sun Yat-sen em O Desenvolvimento Internacional da China, em 1919. Ele afirmou que uma represa capaz de gerar 30 milhões de cavalos-vapor (22 GW) era possível a jusante das Três Gargantas (região ao longo do rio Yangtzé).\n[…]\nEm 1944, o engenheiro-chefe do Bureau of Reclamation dos Estados Unidos, John L. Savage, examinou a área e elaborou uma proposta de represa para o \"Projeto do Rio Yangtzé\". Cerca de 54 engenheiros chineses foram para os EUA para treinamento.\n[…]\nA construção da Usina de Três Gargantas foi iniciada em 3 de dezembro de 1992, e esteve envolta em polêmica pelo seu imenso impacto ambiental. Até fins de 2004, quatro turbinas entraram em funcionamento. Em 2009, com 26 turbinas instaladas, a capacidade concebida da barragem deverá ser de 18 200 megawatts, ultrapassando a potência de Itaipu, até então a maior usina hidrelétrica em potência instalada no mundo.\n[…]\nO construtor Wu Chuanlin, com cerca de 50 anos, começou a lidar com a obra em 1996. \"Participei da construção de várias obras, e a usina das Três Gargantas é a maior que vi até agora. Tenho honra e orgulho por ter participado desta gigante obra que marca a história chinesa.\" Segundo o cronograma de construção, em novembro de 2006, foi efetuada a segunda represa provisória, e em 2005, o reservatório começou a encher.\n[…]\nHidrelétrica de Itaipu\n[…]\nChina Yangtze Projeto Três Gargantas (TGP), Site oficial\n[…]\nThree Gorges de International Rivers Network (inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Curva de Keeling",
      "descricao": "Gráfico das medições contínuas da concentração de gás carbônico na atmosfera, iniciadas em 1958 por Charles David Keeling."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A curva de Keeling, que registra o gás carbônico do ar desde 1958, vem de um observatório num vulcão de que arquipélago?",
    "resposta": "Havaí",
    "distratores": [
      "Galápagos",
      "Canárias",
      "Açores"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Keeling_Curve"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Keeling_Curve",
        "situacao": "ok",
        "texto": "The Keeling Curve is a graph of the annual variation and overall accumulation of carbon dioxide in the Earth's atmosphere based on continuous measurements taken at the Mauna Loa Observatory on the island of Hawaii from 1958 to the present day. The curve is named for the scientist Charles David Keeling, who started the monitoring program and supervised it until his death in 2005.\n[…]\nKeeling's measurements showed the first significant evidence of rapidly increasing carbon dioxide (CO2) levels in the atmosphere. According to Naomi Oreskes, Professor of History of Science at Harvard University, the Keeling Curve is one of the most important scientific works of the 20th century. Many scientists credit the Keeling Curve with first bringing the world's attention to the current increase of CO2 in the atmosphere.\n[…]\nThe Integrated Carbon Observation System gathers data from 38 monitoring sites across Europe in a curve similar to the Keeling Curve. It is dubbed the \"ICOS Curve\". It shows an average CO2 concentration that is slightly higher than the global average, since Europe is densely populated and still emits high levels of CO2.\n[…]\nIn 2015, the Keeling Curve was designated a National Historic Chemical Landmark by the American Chemical Society. Commemorative plaques were installed at Mauna Loa Observatory and at the Scripps Institution of Oceanography at the University of California, San Diego.\n[…]\nThis level of carbon dioxide, causing climate change, suggests a continued worsening in natural and ecological disasters, which increasingly threatens human and animal habitats on Earth, if greenhouse gas emissions are not significantly reduced.\n[…]\nOfficial Keeling Curve website. Scripps Institution of Oceanography, UC San Diego\n[…]\nCO2 Earth: Annually-updated version of the Keeling Curve\n[…]\nScripps Institution of Oceanography CO2-Program: Home of the Keeling Curve"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Curva_de_Keeling",
        "situacao": "ok",
        "texto": "A Curva de Keeling é um gráfico do acúmulo de dióxido de carbono na atmosfera da Terra com base em medições contínuas feitas no Observatório Mauna Loa, na ilha do Havaí, de 1958 até os dias atuais. A curva leva o nome do cientista Charles David Keeling, que iniciou o programa de monitoramento e o supervisionou até sua morte em 2005.\n[…]\nCharles David Keeling, do Instituto de Oceanografia Scripps da Universidade da Califórnia em San Diego, foi a primeira pessoa a fazer medições regulares e frequentes de concentrações de CO2 na Antártica e em Mauna Loa, Havaí, de março de 1958 em diante. Keeling já havia testado e empregado técnicas de medição em locais como Big Sur perto de Monterey, florestas tropicais da Península Olímpica no estado de Washington e florestas de alta montanha no Arizona.\n[…]\nEm 1957–1958, o Ano Geofísico Internacional, Keeling obteve financiamento do Weather Bureau para instalar analisadores de gás infravermelho em locais remotos, incluindo o Pólo Sul e o vulcão Mauna Loa, na ilha do Havaí. Mauna Loa foi escolhido como local de monitoramento de longo prazo devido à sua localização remota, longe dos continentes, e devido à sua falta de vegetação.\n[…]\nDevido em parte à importância das descobertas de Keeling, NOAA começou a monitorar níveis de CO2 em todo o mundo na década de 1970. Hoje, níveis de gás carbônico são monitorados em cerca de 100 locais em todo o mundo por meio da Rede Global de Referência de Gases de Efeito Estufa. As medições em muitos outros locais isolados confirmaram a tendência de longo prazo mostrada pela Curva de Keeling, embora nenhum local tenha um registro tão longo quanto Mauna Loa.\n[…]\nCharles David Keeling\n[…]\nRalph Keeling\n[…]\nObservatório Mauna Loa\n[…]\nSite oficial da Curva de Keeling",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Parque Nacional do Itatiaia",
      "descricao": "Parque nacional criado em 1937 entre os estados do Rio de Janeiro e de Minas Gerais."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Criado em 1937, o Parque Nacional do Itatiaia, o mais antigo do Brasil, fica em que serra?",
    "resposta": "Serra da Mantiqueira",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Parque_Nacional_do_Itatiaia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_do_Itatiaia",
        "situacao": "ok",
        "texto": "O Parque Nacional do Itatiaia é uma unidade de conservação brasileira de proteção integral da natureza localizada no maciço do Itatiaia, na serra da Mantiqueira, entre os estados do Rio de Janeiro e Minas Gerais. Itatiaia é o parque nacional mais antigo do Brasil, tendo sido criado em 14 de junho de 1937, numa área de 11 943 hectares (119 km²), que antes de ser adquirida pela Fazenda Federal, em 1\n[…]\nNo interior do parque encontram-se alguns dos picos mais altos do Brasil, beirando os 2 800 m de altitude. A fauna e a flora do parque são bastante diversificadas, devido principalmente à diferença de altitude de seu relevo e ao clima variado. Itatiaia é administrado atualmente pelo Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio). A BR-485, que atravessa o parque, tem o seu ponto culminante a 2 460 m de altitude no seu interior e é assim considerada a estrada mais alta do Brasil.\n[…]\nO parque nacional do Itatiaia foi criado através do Decreto Nº 1.713, emitido em 14 de junho de 1937 por Getúlio Vargas, a partir da Estação Biológica de Itatiaia. O decreto de criação previa a transferência das benfeitorias existentes no local à época, pertencentes à Estação Biológica, ao recém-criado parque nacional.\n[…]\nO parque está localizado no maciço do Itatiaia, na serra da Mantiqueira, no sul dos estados do Rio de Janeiro e de Minas Gerais, com território abrangendo os municípios de Alagoa, Bocaina de Minas, Itamonte, Itatiaia e Resende. O território do parque é cortado pela BR-485. Esta, por cruzar por regioes de até 2 350 m de altitude, é considerada a estrada mais alta do Brasil. O parque se divide em dois ambientes distintos:\n[…]\nTrês picos, local ao meio da mata Atlântica a 1 622 m de altitude, com vista para o vale do rio Paraíba, da Serra da Mantiqueira e da serra do Mar.\n[…]\nA Serra do Maromba com 2 607 m de altitude."
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Derramamento do Exxon Valdez",
      "descricao": "Vazamento de petróleo causado pelo encalhe do petroleiro Exxon Valdez em março de 1989."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1989, o petroleiro Exxon Valdez encalhou e despejou milhões de litros de óleo na costa de que estado americano?",
    "resposta": "Alasca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Exxon_Valdez_oil_spill"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Exxon_Valdez_oil_spill",
        "situacao": "ok",
        "texto": "The Exxon Valdez oil spill was a major environmental disaster that occurred in Alaska's Prince William Sound on March 24, 1989. The spill occurred when Exxon Valdez, an oil supertanker owned by Exxon Shipping Company, bound for Long Beach, California, struck Prince William Sound's Bligh Reef, 6 mi (9.7 km) west of Tatitlek, Alaska, at 12:04 a.m. The tanker spilled more than 10 million US gallons (\n[…]\nAccording to a report by David Kirby for TakePart, the main component of the Corexit formulation used during cleanup, 2-butoxyethanol, was identified as \"one of the agents that caused liver, kidney, lung, nervous system, and blood disorders among cleanup crews in Alaska following the 1989 Exxon Valdez spill\".\n[…]\nA 1989 report by the Coast Guard's U.S. National Response Center summarized the event and made many recommendations, including that neither Exxon, Alyeska Pipeline Service Company, the State of Alaska, nor the federal government were prepared for a spill of this magnitude.\n[…]\nIn 2010, CNN reported on studies concluding that many oil spill cleanup workers involved in the Exxon Valdez response had subsequently become sick, and warned those exposed to the Deepwater Horizon oil spill to take heed. Anchorage lawyer Dennis Mestas found that this was true for 6,722 of 11,000 worker files he was able to inspect, despite access to the records being controlled by Exxon. Exxon denied this in a statement to CNN:\n[…]\nIn season 2, episode 8, of Breaking Bad, entitled \"Better Call Saul\", Walter White tells Jesse Pinkman that Jesse's friend Badger, who had been caught in a drug deal with their methamphetamine and placed under arrest, is going to spill [information] like the Exxon Valdez.\n[…]\nDead Ahead: The Exxon Valdez Disaster, 1992 HBO movie\n[…]\nMartin County coal slurry spill\n[…]\nExxon Valdez Oil Spill Trustee Council Archived April 22, 2015, at the Wayback Machine\n[…]\nExxonMobil updates and news on Valdez"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Derramamento_de_petr%C3%B3leo_do_Exxon_Valdez",
        "situacao": "ok",
        "texto": "O derramamento de petróleo do Exxon Valdez foi um grande desastre ambiental que ganhou as manchetes mundiais na primavera de 1989 e ocorreu na Enseada do Príncipe Guilherme, no Alasca, em 24 de março de 1989. O derramamento ocorreu quando o Exxon Valdez, um superpetroleiro de propriedade da Exxon Mobil Corporation, com destino a Long Beach, Califórnia, atingiu o Recife Bligh da Enseada do Príncipe\n[…]\nO Estado do Alasca contestou essa alegação, afirmando que havia um acordo de longa data que permitia o uso de dispersantes para limpar derramamentos, portanto, a Exxon não precisava de permissão para usá-los e que, de fato, a Exxon não tinha dispersantes suficientes para lidar efetivamente com um derramamento do tamanho criado pelo Exxon Valdez.\n[…]\nUm relatório de 1989 do Centro Nacional de Resposta da Guarda Costeira dos EUA resumiu o evento e fez muitas recomendações, incluindo o fato de que nem a Exxon, nem a Alyeska Pipeline Service Company, nem o Estado do Alasca, nem o governo federal estavam preparados para um derramamento dessa magnitude.\n[…]\nA Exxon negou o fato em uma declaração à CNN:Após 20 anos, não há evidências que sugiram que os trabalhadores da limpeza ou os residentes das comunidades afetadas pelo derramamento de Valdez tenham tido quaisquer efeitos adversos à saúde como resultado do derramamento ou de sua limpeza.Os ativistas ambientais e as autoridades estaduais ficaram preocupados com o fato de a BP usar técnicas semelhantes para minimizar a responsabilidade e não enfatizar os impactos à saúde:Os sintomas que estão sendo relatados nos estados do Golfo são os mesmos que atingiram os trabalhadores no Alasca.\n[…]\nEm 1992, a Exxon lançou um vídeo intitulado Scientists and the Alaska Oil Spill (Cientistas e o derramamento de petróleo no Alasca) para ser distribuído nas escolas. Os críticos disseram que o vídeo deturpava o processo de limpeza.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Dia da Terra",
      "descricao": "Data anual de mobilização ambiental criada nos Estados Unidos em 1970."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Criado nos Estados Unidos em 1970, o Dia da Terra é comemorado no mesmo dia em que Cabral chegou ao Brasil. Que data é essa?",
    "resposta": "22 de abril",
    "fonte": [
      "https://en.wikipedia.org/wiki/Earth_Day"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Earth_Day",
        "situacao": "ok",
        "texto": "Earth Day is an annual event on April 22 to demonstrate support for environmental protection. First held on April 22, 1970, it now includes a wide range of events coordinated globally through earthday.org (formerly Earth Day Network) including 1 billion people in more than 193 countries.\n[…]\nA month later, United States senator Gaylord Nelson proposed the idea to hold a nationwide environmental teach-in on April 22, 1970, and hired a young activist, Denis Hayes, to be the national coordinator. The name \"Earth Day\" was coined by the advertising writer Julian Koenig. Hayes and his staff grew the event beyond the original idea for a teach-in to include the entire United States.\n[…]\nEarthday.org also organized the second-annual Earth Day Live livestream event (April 22, 2021) featuring global activists, international leaders, and influencers.\n[…]\nOn April 22, Wynn Alan Bruce self-immolated in front of the United States Supreme Court Building in an act of protest against climate inaction.\n[…]\nThe National Park Service, John Muir National Historic Site, has a celebration every year on or around Earth Day (April 21, 22 or 23), called Birthday–Earth Day, in recognition of Earth Day and John Muir's contribution to the collective consciousness of environmentalism and conservation.\n[…]\nUnbeknownst to Nelson, April 22, 1970, was coincidentally the 100th anniversary of the birth of Vladimir Lenin, when translated to the Gregorian calendar (which the Soviets adopted in 1918). Time reported that some suspected the date was not a coincidence, but a clue that the event was \"a Communist trick\", and quoted a member of the Daughters of the American Revolution as saying, \"subversive elements plan to make American children live in an environment that is good for them.\" J.\n[…]\nEarth Day at The History Channel"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_da_Terra",
        "situacao": "ok",
        "texto": "O Dia Internacional da Mãe Terra, ou Dia da Terra, cuja finalidade é criar uma consciência comum aos problemas da contaminação, importância da conservação da biodiversidade e outras preocupações ambientais para proteger a Terra, foi criado pelo senador norte-americano Gaylord Nelson, no dia 22 de abril de 1970.\n[…]\nDesde 2009, é considerado pela ONU como o Dia Internacional da Mãe Terra.\n[…]\nA primeira manifestação teve lugar em 22 de abril de 1970. Foi iniciada pelo senador Gaylord Nelson, ativista ambiental, para a criação de uma agenda ambiental. Para esta manifestação participaram duas mil universidades, dez mil escolas primárias e secundárias e centenas de comunidades. A pressão social teve seus sucessos e levou o governo dos Estados Unidos a criar a Agência de Proteção Ambiental (Environmental Protection Agency) e uma série de leis destinadas à proteção do meio ambiente.\n[…]\nNo Dia da Terra todos estão convidados a participar em atividades que promovam a saúde do nosso planeta. tanto em nível global como regional e local;\n[…]\nSurgido como um movimento universitário, o Dia da Terra converteu-se em um importante acontecimento educativo e informativo. Os grupos ecologistas o utilizam como ocasião para avaliar os problemas do meio ambiente do planeta: a contaminação do ar, da água e dos solos, a destruição de ecossistemas, centenas de milhares de plantas e espécies animais dizimadas e o esgotamento de recursos não renováveis.\n[…]\nEm 2009, o estado da Bolívia levou para a ONU a proposta – que foi aceita – de renomear o Dia da Terra para Dia Internacional da Mãe Terra, para romper com o paradigma de que a Terra pertence à humanidade: na verdade, os humanos pertencem à Mãe Terra.\n[…]\nHistória do Dia da Terra\n[…]\nAmbiente Brasil: Portal Ambiental\n[…]\n«Site sobre o documentário \"Dia da Terra\"»\n[…]\n«Documentário o \"Dia da Terra\"»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Efeito fotovoltaico",
      "descricao": "Fenômeno em que certos materiais geram tensão elétrica ao serem expostos à luz, base das células solares."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que século o físico francês Edmond Becquerel descobriu o efeito fotovoltaico, princípio dos painéis solares?",
    "resposta": "Século dezenove (1839)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Photovoltaic_effect"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Photovoltaic_effect",
        "situacao": "ok",
        "texto": "The photovoltaic effect is a physical phenomenon in which a semiconductor material generates electric energy upon being exposed to light.\n[…]\nThe first demonstration of the photovoltaic effect, by Edmond Becquerel in 1839, used an electrochemical cell. He explained his discovery in Comptes rendus de l'Académie des sciences, \"the production of an electric current when two plates of platinum or gold immersed in an acid, neutral, or alkaline solution are exposed in an uneven way to solar radiation.\"\n[…]\nIn addition to the direct photovoltaic excitation of free electrons, an electric current can also arise through the Seebeck effect. When a conductive or semiconductive material is heated by absorption of electromagnetic radiation, the heating can lead to increased temperature gradients in the semiconductor material or differentials between materials.\n[…]\nThese thermal differences in turn may generate a voltage because the electron energy levels are shifted differently in different areas, creating a potential difference between those areas which in turn create an electric current. The relative contributions of the photovoltaic effect versus the Seebeck effect depend on many characteristics of the constituent materials.\n[…]\nAll above effects generate direct current, the first demonstration of the alternating current photovoltaic effect (AC PV) was done by Dr. Haiyang Zou and Prof. Zhong Lin Wang at the Georgia Institute of Technology in 2017. The AC PV effect is the generation of alternating current (AC) in the nonequilibrium states when the light periodically shines at the junction or interface of material.\n[…]\nPhotoelectric effect"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Efeito_fotovoltaico",
        "situacao": "ok",
        "texto": "O efeito fotovoltaico é a criação de tensão elétrica ou de uma corrente elétrica correspondente num material, após a sua exposição à luz. Embora o efeito fotovoltaico esteja diretamente relacionado com o efeito fotoelétrico, trata-se de processos diferentes. No efeito fotoelétrico, os elétrons são ejetados da superfície de um material após exposição a radiação com energia suficiente.\n[…]\nO efeito fotovoltaico é diferente porque os elétrons gerados são transferidos entre bandas diferentes (i.e., da banda de valência para a banda de condução) dentro do próprio material, resultando no aparecimento de tensão elétrica entre dois eletrodos.\n[…]\nNa maioria das aplicações fotovoltaicas a radiação é a luz solar e, por esta razão, os dispositivos são conhecidos como células solares. No caso de uma célula solar de junção PN, a iluminação do material cria uma corrente elétrica à medida que os elétrons excitados e os buracos remanescentes são arrastados em sentidos opostos pelo campo elétrico da região de depleção.\n[…]\nO efeito fotovoltaico foi observado pela primeira vez por Alexandre-Edmond Becquerel em 1839.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Efeito estufa",
      "descricao": "Aquecimento da superfície de um planeta causado por gases da atmosfera que retêm o calor irradiado."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Além do gás carbônico, que gás, liberado em grande quantidade pelo arroto do gado, é um importante gás do efeito estufa?",
    "resposta": "Metano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Methane",
      "https://en.wikipedia.org/wiki/Greenhouse_gas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Methane",
        "situacao": "ok",
        "texto": "Methane (US:  METH-ayn, UK:  MEE-thayn) is a chemical compound that has the chemical formula CH4 (one carbon atom bonded to four hydrogen atoms). It is a group-14 hydride, the simplest alkane, and the main constituent of natural gas. The abundance of methane on Earth makes it an economically attractive fuel, although capturing and storing it is difficult because it is a gas at standard temperature\n[…]\nAs the major constituent of natural gas, methane is important for electricity generation by burning it as a fuel in a gas turbine or steam generator. Compared to other hydrocarbon fuels, methane produces less carbon dioxide for each unit of heat released.\n[…]\nHydrogen can also be produced via the direct decomposition of methane, also known as methane pyrolysis, which, unlike steam reforming, produces no greenhouse gases (GHG). The heat needed for the reaction can also be GHG emission free, e.g. from concentrated sunlight, renewable electricity, or burning some of the produced hydrogen. If the methane is from biogas then the process can be a carbon sink.\n[…]\nMethane is an important greenhouse gas, responsible for around 30% of the rise in global temperatures since the industrial revolution.\n[…]\nMethane has a global warming potential (GWP) of 29.8 ± 11 compared to CO2 (potential of 1) over a 100-year period, and 82.5 ± 25.8 over a 20-year period. This means that, for example, a leak of one tonne of methane is equivalent to emitting 82.5 tonnes of carbon dioxide. Burning methane and producing carbon dioxide also reduces the greenhouse gas impact compared to simply venting methane to the atmosphere.\n[…]\nThe 2015–2016 methane gas leak in Aliso Canyon, California was considered to be the worst in terms of its environmental effect in American history. It was also described as more damaging to the environment than Deepwater Horizon's leak in the Gulf of Mexico."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Greenhouse_gas",
        "situacao": "ok",
        "texto": "Greenhouse gases (GHGs) are the gases in an atmosphere that trap heat, raising the surface temperature of astronomical bodies such as Earth. Unlike other gases, greenhouse gases absorb the radiations that a planet emits, resulting in the greenhouse effect. The Earth is warmed by sunlight, causing its surface to radiate heat, which is then mostly absorbed by greenhouse gases.\n[…]\nThis table shows the most important contributions to the overall greenhouse effect, without which the average temperature of Earth's surface would be about −18 °C (0 °F), instead of around 15 °C (59 °F). This table also specifies tropospheric ozone, because this gas has a cooling effect in the stratosphere, but a warming influence comparable to nitrous oxide and CFCs in the troposphere.\n[…]\nWater vapor is the most important greenhouse gas overall, being responsible for 41–67% of the greenhouse effect, but its global concentrations are not directly affected by human activity. While local water vapor concentrations can be affected by developments such as irrigation, it has little impact on the global scale due to its short residence time of about nine days.\n[…]\nThe contribution of each gas to the enhanced greenhouse effect is determined by the characteristics of that gas, its abundance, and any indirect effects it may cause. For example, the direct radiative effect of a mass of methane is about 84 times stronger than the same mass of carbon dioxide over a 20-year time frame.\n[…]\nChanges to any of these variables can alter the atmospheric lifetime of a greenhouse gas. For instance, methane's atmospheric lifetime is estimated to have been lower in the 19th century than now, but to have been higher in the second half of the 20th century than after 2000. Carbon dioxide has an even more variable lifetime, which cannot be specified down to a single number."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Metano",
        "situacao": "ok",
        "texto": "O metano é um gás incolor, sua molécula é tetraédrica e apolar (\n[…]\nA combustão completa do metano é altamente exotérmica e libera 280,4 mil calorias por mol queimado:\n[…]\nAcredita-se que vastas quantidades de metano estejam presentes no interior da Terra (manto). A migração até níveis menos profundos ou na superfície é dado através de grandes estruturas geológicas (falhas), sobretudo nos limites de placas tectônicas. Por vezes o metano primordial é acompanhado de hélio e ou nitrogênio. Nas áreas vulcânicas o metano reage com o oxigênio formando o dióxido de carbono que é expelido pelos vulcões.\n[…]\nÉ considerado o terceiro gás que provoca efeito estufa (depois do dióxido de carbono e vapor d'água). Ele possui um menor tempo de residência na atmosfera, quando comparado com o CO2. No entanto, possui um potencial de aquecimento 60 vezes maior. Além da alta capacidade de absorção radiação infravermelha (calor), o metano gera outros gases do efeito estufa - CO2 e O3 troposférico e vapor de água estratosférico (CICERONE e OREMLAND,1988;DUXBURY et al.,1993;KHALIL e RASMUSSEN,1995).\n[…]\nO metano pode polimerizar no interior da terra, através de reações Fischer-Tropsch, formando hidrocarbonetos líquidos (petróleo) com serpentinização de peridotitos do manto que produz hidrogênio, na presença de metais catalisadores como níquel, ferro, etc. O metano reage com oxigênio e cálcio formando cimentos carbonáticos em reservatórios de petróleo. Deslocamentos de grandes quantidades de metano no interior da terra podem ser causa de grandes terremotos.\n[…]\nHidrato de metano",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Motor a diesel",
      "descricao": "Motor de combustão interna em que o combustível se inflama pela compressão do ar, inventado por Rudolf Diesel."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Exposição Universal de Paris, em 1900, um motor a diesel foi apresentado funcionando com óleo de que planta?",
    "resposta": "Amendoim",
    "fonte": [
      "https://en.wikipedia.org/wiki/Biodiesel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Biodiesel",
        "situacao": "ok",
        "texto": "Biodiesel is a renewable biofuel, a form of diesel fuel, derived from biological sources like vegetable oils, animal fats, or recycled greases, and consisting of long-chain fatty acid esters. It is typically made from fats.\n[…]\nThe roots of biodiesel as a fuel source can be traced back to when J. Patrick and E. Duffy first conducted transesterification of vegetable oil in 1853, predating Rudolf Diesel's development of the diesel engine. Diesel's engine, initially designed for mineral oil, successfully ran on peanut oil at the 1900 Paris Exposition. This landmark event highlighted the potential of vegetable oils as an alternative fuel source.\n[…]\nIt is often reported that Diesel designed his engine to run on peanut oil, but this is not the case. Diesel stated in his published papers, \"at the Paris Exhibition in 1900 (Exposition Universelle) there was shown by the Otto Company a small Diesel engine, which, at the request of the French government ran on arachide (earth-nut or pea-nut) oil (see biodiesel), and worked so smoothly that only a few people were aware of it.\n[…]\nOn 8 July 2014, the then Indian Railway Minister D.V. Sadananda Gowda announced in Railway Budget that 5% bio-diesel will be used in Indian Railways' Diesel Engines.\n[…]\nA University of Idaho study compared biodegradation rates of biodiesel, neat vegetable oils, biodiesel and petroleum diesel blends, and neat 2-D diesel fuel.\n[…]\nAs of 2020, researchers at Australia's CSIRO have been studying safflower oil from a specially-bred variety as an engine lubricant, and researchers at Montana State University's Advanced Fuel Centre in the US have been studying the oil's performance in a large diesel engine, with results described as a \"game-changer\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Biodiesel",
        "situacao": "ok",
        "texto": "Biodiesel, também grafado como biodísel, refere-se ao biocombustível formado por ésteres de ácidos graxos, ésteres alquila (metila, etila ou propila) de ácidos carboxílicos de cadeia longa e hidrocarbonetos de origem vegetal. É um combustível renovável e biodegradável, obtido comumente a partir da reação química de lipídios, óleos ou gorduras, de origem animal ou vegetal, com um álcool na presença\n[…]\nA transesterificação de um óleo vegetal foi realizado primeiramente em 1853 pelos cientista Patrick Duffy, muitos anos antes do primeiro motor diesel tornar-se funcional. O primeiro modelo de Rudolf Diesel, um único cilindro de ferro de 3 m com um volante em sua base, funcionou pela primeira vez em Augsburg, Alemanha, em 10 de agosto de 1893, sendo abastecido com nada além de óleo de amendoim.\n[…]\nÉ freqüentemente relatado que o Diesel projetou seu motor para funcionar com óleo de amendoim, mas este não é o caso. Diesel afirmou em seus artigos publicados, \"na Exposição de Paris em 1900 (Exposition Universelle) que foi mostrado pela Companhia Otto um pequeno motor diesel, que, a pedido do governo francês funcionou com óleo de amendoim arachide, e trabalhou de forma tão suave que somente poucas pessoas tinham conhecimento disto.\n[…]\nPara países do dito \"Terceiro Mundo\", ou mais adequadamente, países subdesenvolvidos, as fontes de biodiesel que usam terras marginais poderiam fazer mais sentido; por exemplo, óleo honge, de amêndoas de Millettia pinnata crescidas ao longo das estradas ou jatropha crescido ao longo das linhas ferroviárias..\n[…]\nA produção do biodiesel pode cooperar com o desenvolvimento econômico de diversas regiões do Brasil, uma vez que é possível explorar a melhor alternativa de matéria-prima, no caso fontes de óleos vegetais tais como óleo de amendoim, soja, mamona, dendê, girassol, algodão etc., dependendo da região.\n[…]\nMotocicleta a diesel\n[…]\n«H-BIO: O novo diesel da Petrobras»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Reciclagem de alumínio",
      "descricao": "Processo de reaproveitamento de sucata de alumínio, como latas de bebida, para fabricar novas peças."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Reciclar alumínio consome cerca de quanto da energia gasta para produzi-lo a partir do minério?",
    "resposta": "Cinco por cento",
    "distratores": [
      "Vinte e cinco por cento",
      "Cinquenta por cento",
      "Setenta e cinco por cento"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Aluminium_recycling"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aluminium_recycling",
        "situacao": "ok",
        "texto": "Aluminium recycling is the process in which secondary commercial aluminium is created from scrap or other forms of end-of-life or otherwise unusable aluminium. It involves re-melting the metal, which is cheaper and more energy-efficient than the production of virgin aluminium by electrolysis of alumina (Al2O3) refined from raw bauxite by use of the Bayer and Hall–Héroult processes.\n[…]\nProper sorting is essential for producing high-quality recycled aluminium.\n[…]\nBrazil recycles 98.2% of its aluminium can production, equivalent to 14.7 billion beverage cans per year, ranking first in the world, more than Japan's 82.5% recovery rate. Brazil has topped the aluminium can recycling charts eight years in a row.\n[…]\nAside from recycled aluminium beverage cans, the majority of recycled aluminium comes in a mixture of different alloys. Those alloys generally have high percentages of silicon (Si) and require additional refinement during the shredding, sorting, and refining process to reduce impurities. Due to the levels of impurities found after refinement, the applications of recycled aluminium alloys are limited to castings and extrusions.\n[…]\nBeverage can top uses a different alloy blend than the body. As of 2020, this limits the recycled content to about 90%. The addition of new primary aluminum is needed to maintain the alloying composition in the recycled product.\n[…]\nWhite dross, a residue from primary aluminium production and secondary recycling operations, usually classified as waste, still contains useful quantities of aluminium which can be extracted industrially. The process produces aluminium billets, together with a highly complex waste material. This waste is difficult to manage.\n[…]\nFerrous metal recycling\n[…]\nSecondary Aluminum Smelters of the World - A list of companies who produce secondary aluminium (i.e., recycled or remelted from scrap metal)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Reciclagem_de_alum%C3%ADnio",
        "situacao": "ok",
        "texto": "A reciclagem do alumínio é o processo pelo qual o alumínio pode ser reutilizado em determinados produtos, após ter sido inicialmente produzido. O processo resume-se no derretimento do metal, o que é muito menos dispendioso e consome muito menos energia do minério do que produzir o alumínio. A produção de alumínio pela reciclagem de metal consume 95% menos energia do que a produção de alumínio a pa\n[…]\nPor exemplo, a bauxita consume 15,613 Mw/hora por tonelada mas a sucata de alumínio consume 0,7069 Mw/hora por tonelada. Assim, tanto para o desenvolvimento mais sustentável, quanto para a economizar a gaste para fins lucrativas, a reciclagem de alumínio é importante.\n[…]\n«revistas.unifacs.br - RECICLAGEM DE ALUMÍNIO E ESTIMATIVA DE POUPANÇA DE ENERGIA NO BRASIL»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Atmosfera de Vênus",
      "descricao": "Camada densa de gases, quase toda de gás carbônico, que envolve o planeta Vênus."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Por causa de um efeito estufa extremo, que planeta é o mais quente do Sistema Solar, mesmo não sendo o mais próximo do Sol?",
    "resposta": "Vênus",
    "distratores": [
      "Mercúrio",
      "Marte",
      "Júpiter"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Atmosphere_of_Venus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atmosphere_of_Venus",
        "situacao": "ok",
        "texto": "The atmosphere of Venus is the very dense layer of gases surrounding the planet Venus. Venus's atmosphere is composed of 96.5% carbon dioxide and 3.5% nitrogen, with other chemical compounds present only in trace amounts. It is much denser and hotter than that of Earth; the temperature at the surface is 740 K (467 °C, 872 °F), and the pressure is 93 bar (9.3 MPa; 1,350 psi), roughly the pressure f\n[…]\nThe upper atmosphere of Venus can be measured from Earth when the planet crosses the sun in a rare event known as a solar transit. The last solar transit of Venus occurred in 2012. Using quantitative astronomical spectroscopy, scientists were able to analyze sunlight that passed through the planet's atmosphere to reveal chemicals within it.\n[…]\nAs the technique to analyse light to discover information about a planet's atmosphere only first showed results in 2001, this was the first opportunity to gain conclusive results in this way on the atmosphere of Venus since observation of solar transits began. This solar transit was a rare opportunity considering the lack of information on the atmosphere between 65 and 85 km.\n[…]\nThe solar transit in 2004 enabled astronomers to gather a large amount of data useful not only in determining the composition of the upper atmosphere of Venus, but also in refining techniques used in searching for extrasolar planets. The atmosphere of mostly CO2, absorbs near-infrared radiation, making it easy to observe. During the 2004 transit, the absorption in the atmosphere as a function of wavelength revealed the properties of the gases at that altitude.\n[…]\nA solar transit of Venus is an extremely rare event, and the last solar transit of the planet before 2004 was in 1882. The most recent solar transit was in 2012; the next one will not occur until 2117.\n[…]\nMedia related to Atmosphere of Venus at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atmosfera_de_V%C3%AAnus",
        "situacao": "ok",
        "texto": "A atmosfera de Vênus (português brasileiro) ou Vénus (português europeu) compreende a camada de gases que recobre a superfície do segundo planeta do Sistema Solar. É muito mais densa e quente do que a terrestre: a temperatura na superfície é de 740 K (467 °C, 872 °F), enquanto que a pressão é de 93 bar. A atmosfera venusiana possui nuvens opacas compostas de ácido sulfúrico, o que tornam impossíve\n[…]\nApesar das condições extremas na superfície de Vênus, a pressão atmosférica e temperatura entre 50 km e 65 km acima da superfície do planeta são aproximadamente as mesmas da Terra, fazendo de sua atmosfera superior a área mais parecida à Terra no Sistema Solar, mais parecida com ela do que a superfície de Marte.\n[…]\nA maior quantidade de CO2 na atmosfera de Vênus juntamente com vapor de água e dióxido de enxofre cria um poderoso efeito estufa, aprisionando a energia solar e aumentando a temperatura superficial a 740 K (467 °C), mais quente que qualquer outro planeta no Sistema Solar, inclusive Mercúrio, apesar de estar localizado ao dobro de distância ao Sol e receber apenas 25% da energia solar que Mercúrio recebe.\n[…]\nVênus acabou perdendo toda a sua água, possivelmente por sua dissociação pela forte radiação solar, cindindo as moléculas em oxigênio, que se agregou às rochas, e hidrogênio, que foi jogado para o espaço. A surpreendente escassez de hidrogênio em Vênus apóia essa teoria. Outro resultado desse processo foi a concentração de dióxido de carbono na sua atmosfera, o que gerou um efeito estufa, responsável pela elevada temperatura superficial do planeta.\n[…]\nO efeito Doppler dos gases também permitiu modificar padrões para serem medidos.\n[…]\nO trânsito solar de Vênus é um evento extremamente raro, e o último trânsito antes de 2004 foi em 1882. Apesar do próximo trânsito ser em 2012, o seguinte será em 2117.\n[…]\nTerraformação de Vênus\n[…]\nAtmosfera extraterrestre",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Eunice Foote",
      "descricao": "Cientista e ativista americana do século dezenove que estudou o aquecimento de gases expostos ao Sol."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em 1856, que cientista americana mostrou em experimentos que o ar com gás carbônico esquenta mais quando exposto ao Sol?",
    "resposta": "Eunice Foote",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eunice_Newton_Foote"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eunice_Newton_Foote",
        "situacao": "ok",
        "texto": "Eunice Newton Foote (born Eunice Newton; July 17, 1819 – September 30, 1888) was an American scientist, inventor, and women's rights campaigner. She was the first scientist to identify the insulating effect of certain gases and to posit that therefore rising carbon dioxide (CO2) levels could increase atmospheric temperature and affect climate, a phenomenon now referred to as the greenhouse effect.\n[…]\nBecause of the limits of her experimental design, and possibly a lack of knowledge of infrared radiation, Foote did not examine or detect the absorption and emission of radiant energy within the thermal infrared range, which is the cause of the greenhouse effect. In 2022, the American Geophysical Union instituted The Eunice Newton Foote Medal for Earth-Life Science in her honor to recognize outstanding scientific research.\n[…]\nBoth the Giessen and Edinburgh summaries omitted her direct conclusions about the impact of carbon dioxide on climate. The summary written in the Edinburgh New Philosophical Journal indicated that two papers had been written, one by Elisha and one by Mrs. Elisha Foote, but the title of Elisha's paper, \"On the Heat in the Sun's Rays\", was given for both articles, although the summary was entirely devoted to Eunice's paper. Foote was praised in the September 13, 1856, issue of Scientific American.\n[…]\nLois Barber Arnold, who taught in the Science Education Department of the Teachers College, Columbia University, described Foote's experiments and participation in the AAAS conferences in detail in 1984, but noted that biographical data on her was lacking. Elizabeth Wagner Reed, a geneticist and scholar who studied biases against women in science, included a chapter \"Eunice Newton Foote: 1819–1888\" in her 1992 book American Women in Science Before the Civil War.\n[…]\n\"A forgotten founder of climate science: Eunice Newton Foote\", 40-minute BBC World podcast, September 2022"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eunice_Newton_Foote",
        "situacao": "ok",
        "texto": "Eunice Newton Foote (Goshen, 17 de julho de 1819 — Lenox, 30 de setembro de 1888) foi uma cientista, inventora e activista dos direitos das mulheres americana. Foi a primeira cientista a concluir que certos gases aqueciam quando expostos à luz solar, e que o aumento dos níveis de dióxido de carbono (CO2) mudaria a temperatura atmosférica e poderia afetar o clima, um fenômeno agora conhecido como e\n[…]\nNewton frequentou essas escolas entre 1836 e 1838.\n[…]\nEm 1902, Susan B. Anthony fez um discurso a convocar as feministas mais jovens a assumirem as rédeas das fundadoras do movimento como \"Elizabeth Cady Stanton, Lucretia Mott, Eunice Newton Foote, Mary Livermore e Isabella Beecher Hooker\". A negligência institucionalizada da história das mulheres e a distorção do registo histórico por historiadores que não analisaram ou incluíram as experiências das mulheres levaram a que pouco se soubesse sobre as primeiras feministas.\n[…]\nO capítulo de Reed forneceu detalhes biográficos sobre Eunice e a sua família, e apresentou uma análise detalhada do seu trabalho científico. Ela reconheceu que as experiências de Foote confirmaram que, quando submetido à luz solar, o dióxido de carbono tornou-se mais quente que o ar, \"demonstrando assim o que hoje chamamos de efeito de estufa\".\n[…]\nA publicação do seu artigo de 1857 no Proceedings of the American Association for the Advancement of Science daquele ano é reconhecida como a primeira vez que o trabalho de uma mulher americana foi publicado na revista. Em 2022 a União de Geofísica dos Estados Unidos instituiu a Medalha Eunice Newton Foote para Ciências da Vida na Terra, cujo objectivo é reconhecer realizações científicas excepcionais em pesquisas que se concentram na convergência da Terra e das ciências da vida.\n[…]\n\"Uma fundadora esquecida da ciência climática: Eunice Newton Foote\", podcast da BBC World de 40 minutos, setembro de 2022",
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
