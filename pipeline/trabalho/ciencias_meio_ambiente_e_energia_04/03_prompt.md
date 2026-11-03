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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6). Uma pergunta `aberta` cuja resposta é um ano ou uma data deve ser reescrita como `multipla`, com 3 anos ou datas próximos e críveis (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Usina de Itaipu",
      "descricao": "Usina hidrelétrica binacional de Brasil e Paraguai, no rio Paraná."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A usina de Itaipu, no rio Paraná, tem quantas unidades geradoras?",
    "resposta": "Vinte",
    "distratores": [
      "Doze",
      "Trinta e duas",
      "Oito"
    ],
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
        "texto": "Usina Hidrelétrica de Itaipu (em castelhano:  Itaipú, em guarani:  Itaipu) é uma hidrelétrica binacional localizada no Rio Paraná, na fronteira entre o Brasil e o Paraguai. A barragem foi construída pelos dois países entre 1975 e 1982. O nome Itaipu foi tirado de uma ilha que existia perto do local de construção. Na língua tupi, o termo significa \"pedra na qual a água faz barulho\", através da junç\n[…]\nO seu lago possui uma área de 1 350 km2, indo de Foz do Iguaçu, no Brasil e Ciudad del Este, no Paraguai, até Guaíra e Salto del Guairá, 150 km ao norte. Possuindo 20 unidades geradoras de 700 MW cada e projeto hidráulico de 118 m, Itaipu tem uma potência de geração (capacidade) de 14 mil MW. É um empreendimento binacional administrado por Brasil e Paraguai no rio Paraná na seção de fronteira entre os dois países, a 15 km ao norte da Ponte da Amizade.\n[…]\nEntretanto, caso houvesse o rompimento da represa de Itaipu, na verdade boa parte da água seria absorvida pela profunda calha do Rio Paraná poucos quilômetros depois da barragem e a Argentina ainda estaria protegida pela represa da Usina de Yacyretá, localizada 400 km abaixo de Itaipu.\n[…]\nA Itaipu Binacional é uma entidade binacional pertencente à República Federativa do Brasil e à República do Paraguai. Foi constituída pelo Tratado de Itaipu para a operação da usina hidrelétrica. Seu aspecto de empresa jurídica de direito privado binacional deve-se às ordens jurídicas de ambos os países às quais está submetida.\n[…]\nEm 32 anos de operação, a Itaipu Binacional é líder mundial em produção de energia limpa e renovável, tendo produzido mais de 2,5 bilhões de MWh. Com 20 unidades geradoras e 14 mil MW de potência instalada, fornece cerca de 17% da energia consumida no Brasil e 75% no Paraguai. Sua maior produção anual foi estabelecida em 2016, com 103 068 366 de MWh. O recorde anterior ocorreu em 2013, com a geração de 98 630 035 de MWh."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Usina de Itaipu",
      "descricao": "Usina hidrelétrica binacional de Brasil e Paraguai, no rio Paraná."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em tupi, o nome Itaipu, da usina binacional no rio Paraná, significa o quê?",
    "resposta": "Pedra que canta",
    "distratores": [
      "Rio que corre",
      "Água grande",
      "Pedra furada"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Usina_Hidrel%C3%A9trica_de_Itaipu",
      "https://en.wikipedia.org/wiki/Itaipu_Dam"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Usina_Hidrel%C3%A9trica_de_Itaipu",
        "situacao": "ok",
        "texto": "Usina Hidrelétrica de Itaipu (em castelhano:  Itaipú, em guarani:  Itaipu) é uma hidrelétrica binacional localizada no Rio Paraná, na fronteira entre o Brasil e o Paraguai. A barragem foi construída pelos dois países entre 1975 e 1982. O nome Itaipu foi tirado de uma ilha que existia perto do local de construção. Na língua tupi, o termo significa \"pedra na qual a água faz barulho\", através da junç\n[…]\nItaipu é uma palavra de origem tupi-guarani que significa \"pedra que canta\", através da junção de itá = pedra e ipo'ú = cantora, ou então \"pedra na qual a água faz barulho\", através da junção de itá (pedra), y (água, rio), e pu (barulho). Era o nome da pequena ilha que havia no atual local da usina, antes da obra.\n[…]\nAs primeiras pesquisas de campo para a elaboração do projeto foram feitas em pequenas balsas por técnicos brasileiros e paraguaios. O local escolhido para a construção foi um ponto do rio conhecido como Itaipu, que em tupi quer dizer \"a pedra que canta\". As dimensões do projeto também foram traçadas desde o início: a área da hidrelétrica vai de Foz do Iguaçu, no Brasil, e Ciudad del Este, no sul do Paraguai, até Guaíra e Salto del Guairá, no norte deste país.\n[…]\nO início do blecaute se deu às 22h13 em uma subestação de energia elétrica de Furnas, localizada no município de Ivaiporã, no Paraná, devido a problemas em três linhas de transmissão nos estados de São Paulo e Paraná, impedindo que a energia gerada pela usina de Itaipu pudesse ser transmitida para os consumidores brasileiros. O blecaute afetou vários municípios de 18 estados.\n[…]\nA Itaipu Binacional é uma entidade binacional pertencente à República Federativa do Brasil e à República do Paraguai. Foi constituída pelo Tratado de Itaipu para a operação da usina hidrelétrica. Seu aspecto de empresa jurídica de direito privado binacional deve-se às ordens jurídicas de ambos os países às quais está submetida."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Itaipu_Dam",
        "situacao": "ok",
        "texto": "The Itaipu Dam (Guarani: Yjoko Itaipu [itajˈpu]; Portuguese: Barragem de Itaipu [itajˈpu]; Spanish: Represa de Itaipú [itajˈpu]) is a hydroelectric dam on the Paraná River located on the border between Brazil and Paraguay. It is the third-largest hydroelectric dam in the world in terms of produced energy.\n[…]\nIn 1970, the consortium formed by the companies ELC Electroconsult S.p.A. (from Italy) and IECO (from the United States)  won the international competition for the realization of the viability studies and for the elaboration of the construction project. Design studies began in February 1971. On April 26, 1973, Brazil and Paraguay signed the Itaipu Treaty, the legal instrument for the hydroelectric exploitation of the Paraná River by the two countries.\n[…]\nOn May 17, 1974, the Itaipu Binacional entity was created to administer the plant's construction. The construction began in January of the following year. Brazil's (and Latin America's) first electric car was introduced in late 1974; it received the name Itaipu in honor of the project.\n[…]\nThe total volume of excavation of earth and rock in Itaipu is 8.5 times greater than that of the Channel Tunnel, while the volume of concrete is 15 times greater.\n[…]\nItaipu is one of the most expensive objects ever built.\n[…]\nElectricity is 55% cheaper when made by the Itaipu Dam than by the other types of power plants in the area.\n[…]\nIn the period 2012–2021, the Itaipu Dam maintained the second-highest average annual hydroelectric production in the world, averaging 89.22 TWh per year, second to the 97.22 TWh per year average of the Three Gorges Dam in that period.\n[…]\nItaipu Company Site (in Portuguese, English, and Spanish)\n[…]\nThe Itaipu Transmission System[link removed]\n[…]\nPanoramic – Itaipu Binacional – Foz do Iguaçu – Brazil Archived 2019-06-28 at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Central Nuclear Almirante Álvaro Alberto",
      "descricao": "Complexo de usinas nucleares de Angra dos Reis, no estado do Rio de Janeiro."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "As usinas nucleares de Angra dos Reis ficam numa praia cujo nome tupi significa pedra podre. Que praia é essa?",
    "resposta": "Itaorna",
    "distratores": [
      "Itacoatiara",
      "Itaúna",
      "Itapema"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Central_Nuclear_Almirante_%C3%81lvaro_Alberto",
      "https://en.wikipedia.org/wiki/Angra_Nuclear_Power_Plant"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Central_Nuclear_Almirante_%C3%81lvaro_Alberto",
        "situacao": "ok",
        "texto": "Central Nuclear Almirante Álvaro Alberto (CNAAA) é o complexo nuclear da praia de Itaorna, em Angra dos Reis, que reúne as usinas Angra 1 e Angra 2, em operação, e Angra 3, em construção. As instalações pertencem à Eletronuclear, empresa controlada pela estatal ENBPar desde a capitalização da Eletrobras em 2022. A central recebeu o nome do almirante Álvaro Alberto da Mota e Silva, ligado à formaçã\n[…]\nAs unidades da central são:\n[…]\nAngra 1 foi a primeira usina nuclear do Brasil. Sua construção começou em 1972 na Praia de Itaorna, em Angra dos Reis, e a Comissão Nacional de Energia Nuclear (CNEN) concedeu a licença para operação comercial em dezembro de 1984. A usina usa um reator de água pressurizada, no qual água leve desmineralizada resfria o núcleo. Fabricada pela Westinghouse, é operada pela Eletronuclear e tem potência elétrica bruta nominal de 640 MW.\n[…]\nA usina Angra 2 está situada na Praia de Itaorna, em Angra dos Reis, e entrou em operação comercial em 2001. É uma usina do tipo PWR - Pressurized Water Reactor, com o núcleo refrigerado a água leve desmineralizada. Foi fornecida pela Siemens - KWU da Alemanha, no âmbito do Acordo Nuclear Brasil-Alemanha e é operada pela Eletronuclear. Sua potência elétrica nominal atual é de 1.350 MW brutos e 1.280 MW líquidos. Em 2008, produziu 10.488.289 MWh de energia bruta.\n[…]\nAngra 3 ocupa a praia de Itaorna e foi projetada como uma usina de reator de água pressurizada, semelhante a Angra 2, com potência elétrica prevista de 1.405 MW. O projeto recebeu equipamentos adquiridos durante o acordo com a Alemanha e armazenados por décadas. Em 2010, uma notícia da World Nuclear News estimava que entre 60% e 70% dos materiais já tinham sido comprados. Em 2010, o valor já investido na fase inicial era estimado em R$ 600 milhões, e a conclusão demandaria outros R$ 8,4 bilhões.\n[…]\nFábrica de Combustível Nuclear de Resende\n[…]\nIndústrias Nucleares do Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Angra_Nuclear_Power_Plant",
        "situacao": "ok",
        "texto": "Angra Nuclear Power Plant is Brazil's only nuclear power plant. It is located at the Central Nuclear Almirante Álvaro Alberto (CNAAA) on the Itaorna Beach in Angra dos Reis, Rio de Janeiro. It consists of two pressurized water reactors (PWR), Angra I, with a net output of 609 MWe, first connected to the power grid in 1985 and Angra II, with a net output of 1,275 MWe, connected in 2000.\n[…]\nThe Central Nuclear Almirante Álvaro Alberto complex is administered by Eletronuclear, a state company with the monopoly in nuclear power generation in Brazil. The complex employs some 3,000 people and generates another 10,000 indirect jobs in Rio de Janeiro state.\n[…]\nThe purchase did not include the transfer of sensitive reactor technology. As a result, Angra II was built with pre-Konvoi German technology, as part of a comprehensive nuclear agreement between Brazil and West Germany signed by President Ernesto Geisel in 1975. The complex was designed to have three PWR units with a total output of around 3,000 MWe and was to be the first of 4 nuclear plants that would be built up to 1990.\n[…]\nThe development of Angra III began in 1984 as a Siemens/KWU pressurized water reactor but was halted in 1986. About 70% of the plant's equipment was purchased in 1985 but has been in storage ever since. In June 2007, restarting of work on was approved by the National Council for Energy Policy but was halted again. On 31 May 2010, the National Nuclear Energy Commission granted a licensee for construction of the third reactor.\n[…]\nIn November 2021, the Brazilian government rescheduled the conclusion of Angra III for 2026–27, and announced the construction of a fourth nuclear power plant, to be inaugurated in 2031. In February 2022, the consortium that will complete the reactor agreed a contract, which is planned to enable reactor operations to start in 2026.\n[…]\nAngra-3 PWR Nuclear, Brazil"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Pré-sal",
      "descricao": "Camada de rochas sob uma espessa camada de sal no litoral brasileiro, que guarda grandes reservas de petróleo."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome pré-sal indica que essas rochas com petróleo se formaram quando, em relação à camada de sal que as cobre?",
    "resposta": "Antes dela",
    "distratores": [
      "Depois dela",
      "Ao mesmo tempo",
      "Dentro dela"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pr%C3%A9-sal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pr%C3%A9-sal",
        "situacao": "ok",
        "texto": "Em geologia e na indústria do petróleo, pré-sal designa conjuntos de rochas e reservatórios situados abaixo de espessas camadas de sal. No Atlântico Sul, essas formações estão associadas à separação da América do Sul e da África e à abertura do oceano, ocorrida a partir do Cretáceo. Sedimentos ricos em matéria orgânica, rochas carbonáticas que funcionam como reservatórios e a cobertura de sal form\n[…]\nAlém do Atlântico Sul, especificamente nas áreas atlânticas da América do Sul e da África, também existem camadas de rochas pré-sal sendo mapeadas à procura de petróleo no Golfo do México e no Mar Cáspio, na zona marítima pertencente ao Cazaquistão.\n[…]\nNos primórdios, formaram-se vários mares rasos e áreas semi-pantanosas, algumas de água salgada e salobra do tipo mangue, onde proliferaram algas e microrganismos chamados de fitoplâncton e zooplâncton. Estes microrganismos se depositavam continuamente no leito marinho na forma de sedimentos, misturando-se a outros sedimentos, areia e sal, formando camadas de rochas impregnadas de matéria orgânica, que dariam origem às rochas geradoras.\n[…]\nA partir delas, o petróleo migrou para cima e ficou aprisionado nas rochas reservatórios, de onde é hoje extraído. Ao longo de milhões de anos e sucessivas Eras glaciais, ocorreram grandes oscilações no nível dos oceanos, inclusive com a deposição de grandes quantidades de sal, que formaram as camadas de sedimento salino, geralmente acumulado pela evaporação da água nestes mares rasos.\n[…]\nEm 2025, o Brasil chegou, pela primeira vez, à marca de 5 milhões de barris de petróleo e gás. O recorde foi registrado em julho, pela ANP. 79% desse total foi extraído dos campos do pré-sal. A Petrobras, maior petrolífera do país, aumentou sua produção em 11% em relação a 2024, chegando a 2,40 milhões de barris por dia (bpd), 82% representados por óleo e gás das camadas ultraprofundas.\n[…]\n«Petróleo e o pré-sal»"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Represa de Assuã",
      "descricao": "Grande barragem no rio Nilo, no sul do Egito, construída nos anos 1960, que formou o lago Nasser."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O enorme lago formado pela represa de Assuã, no Egito, leva o nome de que presidente egípcio?",
    "resposta": "Gamal Abdel Nasser",
    "distratores": [
      "Anwar Sadat",
      "Hosni Mubarak",
      "Rei Faruk"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lake_Nasser",
      "https://pt.wikipedia.org/wiki/Lago_Nasser"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Nasser",
        "situacao": "ok",
        "texto": "Lake Nasser (Arabic: بحيرة ناصر Boħeiret Nāṣer, Egyptian Arabic: [boˈħeiɾet ˈnɑːseɾ]) is a large reservoir in southern Egypt and northern Sudan. It was created by the construction of the Aswan High Dam and is one of the largest man-made lakes in the world. The lake has become an important economic resource in Egypt, improving agriculture and supporting  robust fishing and tourism industries. The l\n[…]\nThe construction of the Aswan High Dam began in 1960 at the behest of Lake Nasser's namesake and the second president of Egypt, Gamal Abdel Nasser. It was President Anwar Sadat who inaugurated the lake and dam in 1971. Finished in 1970, the Aswan High Dam across the Nile was built to replace the insufficient Aswan Low Dam built in 1902.\n[…]\nAs a result of the construction of Aswan High Dam and the subsequent filling of Nasser Lake, tens of thousands of native Nubians were forced to relocate from their homes and migrate elsewhere. Though some have been able to resettle on the shores of the new lake, their original homes have been flooded and lost to the lake.\n[…]\nThe construction of the Aswan High Dam and Nasser Lake sparked an international movement to preserve the history of the region. Due to the filling of the new Lake Nasser, much of the region would be flooded and as such, the ancient monuments and artifacts that lay there would have been lost.\n[…]\nThe habitat of several native animal species past Lake Nasser and the Aswan High Dam, such as that of the Nile crocodile, have also been greatly affected as the reduction of water levels that came with the construction of the dam rendered these habitats uninhabitable.\n[…]\nThe Aswan High Dam which holds Lake Nasser produces about 2.1 gigawatts of hydroelectricity, providing a significant percentage of Egypt's electricity needs (up to half when it was completed in 1970).\n[…]\nAswan High Dam, dam that created Lake Nasser"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lago_Nasser",
        "situacao": "ok",
        "texto": "O lago Nasser (em árabe: بحيرة ناصر Boħēret Nāṣer, Árabe egípcio: [boˈħeːɾet ˈnɑːsˤeɾ]) é um vasto reservatório situado no sul do Egito e no norte do Sudão. É um dos maiores lagos artificiais do mundo. Originalmente, o Sudão era contra a construção do lago, porque invadiria terras no norte, onde vivia o povo núbio. Eles teriam que ser reassentados. No final, as terras do Sudão perto da área do lag\n[…]\nO lago foi criado como resultado da construção da Represa Alta de Assuã através das águas do Nilo entre 1958 e 1970.\" O lago recebeu o nome de Gamal Abdel Nasser, um dos líderes da Revolução Egípcia de 1952 e o segundo Presidente do Egito, que iniciou o projeto de Alta Barragem. Foi o presidente Anwar Al Sadat quem inaugurou o lago e a represa em 1970.\n[…]\nO suprimento de água do lago Nasser produz eletricidade, e existe a preocupação de que a diminuição da água que flui para o lago Nasser afete adversamente a capacidade da represa de Assuã de gerar eletricidade. Existem estações de bombeamento que controlam a água que entra no lago Nasser, e atualmente esse projeto gera dez bilhões de quilowatt-hora de energia hidrelétrica a cada ano para os egípcios.\n[…]\nUm recinto de peixes foi construído no lago Nasser. A pesca entre os turistas, especialmente a perca-do-nilo, tornou-se cada vez mais popular, tanto na costa quanto nos barcos. Embora o Abul-Simbel e outros templos tenham sido fisicamente movidos para terrenos mais altos e para diferentes locais para impedir sua destruição pelo novo lago, outros locais antigos do Egito, como a enorme fortaleza de Buém, foram inundados e agora estão debaixo d'água.\n[…]\nAs estátuas de Ramessés II e outras, no Templo de Abul-Simbel, têm vista para o lago Nasser e os turistas podem apreciar a vista em navios de cruzeiros.\n[…]\nEncyclopedia of Architectural and Engineering Feats. [S.l.]: ABC-CLIO. 2001. p. 23. ISBN 9781576071120. president nasser, high dam project."
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Tokamak",
      "descricao": "Máquina que confina plasma em forma de toro com campos magnéticos para obter fusão nuclear controlada."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra tokamak, nome das máquinas de fusão nuclear em forma de rosca, é uma sigla de que idioma?",
    "resposta": "Russo",
    "distratores": [
      "Japonês",
      "Alemão",
      "Inglês"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tokamak",
      "https://pt.wikipedia.org/wiki/Tokamak"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tokamak",
        "situacao": "ok",
        "texto": "A tokamak  (; Russian: токамáк) is a machine which uses a powerful magnetic field generated by external magnets to confine plasma in the shape of an axially-symmetric torus. The tokamak is the leading candidate of magnetic confinement fusion designs being developed to produce controlled thermonuclear fusion power.\n[…]\nTokamaks use a combination of a central solenoid and toroidal and poloidal magnets to shape a ring of plasma. This is heated by a range of methods, including neutral-beam injection, electron and ion cyclotron resonance, and lower hybrid resonance. Nuclear fusion may be achieved, measured by neutron detectors. Due to requiring a continuously changing magnetic field, modern tokamaks sustain \"plasma discharges\" on the timescales of seconds or minutes.\n[…]\n1991: ISTTOK, at the Instituto de Plasmas e Fusão Nuclear, Lisbon, Portugal\n[…]\n1983–2000: Novillo Tokamak, at the Instituto Nacional de Investigaciones Nucleares, in Mexico City, Mexico\n[…]\n1994–2001: HL-1M Tokamak, in Chengdu, China\n[…]\nSmirnov, Vladimir (30 December 2009). \"Tokamak foundation in USSR/Russia 1950–1990\" (PDF). Nuclear Fusion. 50 (1) 014003. Bibcode:2010NucFu..50a4003S. doi:10.1088/0029-5515/50/1/014003. S2CID 17487157.\n[…]\nUnofficial ITER fan club – fans of the biggest tokamak planned to be built in near future.\n[…]\nAll-the-Worlds-Tokamaks Extensive list of current and historic tokamaks from around the world.\n[…]\nSSTC-1 Archived 25 October 2014 at the Wayback Machine Overview video of a small scale tokamak concept.\n[…]\nSSTC-2 on YouTube Section View Video of a small scale tokamak concept.\n[…]\nSSTC-3 on YouTube Fly Through Video of a small scale tokamak concept.\n[…]\nLAP Tokamak Development Information on conditions necessary for nuclear reaction in a tokamak reactor\n[…]\nObserver Newspaper Article on Tokomak Nuclear fusion and the promise of a brighter tomorrow"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tokamak",
        "situacao": "ok",
        "texto": "Um tokamak é uma máquina que confina plasma em uma configuração aproximadamente toroidal por meio de campos magnéticos. Seu campo resulta da combinação dos campos produzidos por bobinas externas com o campo gerado por uma corrente elétrica no próprio plasma. O tokamak é uma das configurações mais estudadas de confinamento magnético para fusão e é desenvolvido como possível base para a produção de \n[…]\nProjetos menores, entre eles tokamaks esféricos como o MAST Upgrade, no Reino Unido, investigam parâmetros de desempenho e problemas de engenharia. Empresas privadas de fusão nuclear também trabalham com tokamaks. A Commonwealth Fusion Systems constrói o SPARC em Devens, Massachusetts, com a meta de demonstrar ganho de energia de fusão superior à unidade em 2027.\n[…]\nEssas máquinas também expuseram problemas de confinamento, estabilidade e engenharia que exigiam novos experimentos. O projeto internacional ITER surgiu após o apoio dado à cooperação em fusão por Ronald Reagan e Mikhail Gorbachev na reunião de Genebra de novembro de 1985. Seus estudos conceituais começaram em 1988. A montagem do tokamak em Cadarache começou em 2020.\n[…]\nA palavra tokamak é uma transliteração do russo токамак. Uma expansão do acrônimo é:\n[…]\nO nome foi proposto por Igor Golovin, colaborador de Igor Kurchatov, inicialmente na forma tokamag, formada a partir de palavras russas correspondentes a \"câmara toroidal magnética\". Natan Yavlinsky propôs a terminação -mak, que se tornou a forma adotada.\n[…]\nNovillo Tokamak, do Instituto Nacional de Investigaciones Nucleares, México.\n[…]\nO ISTTOK funciona no Instituto de Plasmas e Fusão Nuclear do Instituto Superior Técnico, em Lisboa. É um pequeno tokamak de seção circular construído a partir de componentes do antigo TORTUR. Sua construção começou em 1990 e a operação indutiva em fevereiro de 1991.\n[…]\nFusão nuclear, processo de combinação de núcleos estudado nos tokamaks"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Tokamak",
      "descricao": "Máquina que confina plasma em forma de toro com campos magnéticos para obter fusão nuclear controlada."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Ao fundir núcleos de hidrogênio, as máquinas tokamak tentam reproduzir na Terra o processo que gera a energia de que astro?",
    "resposta": "O Sol",
    "distratores": [
      "A Lua",
      "Júpiter",
      "Vênus"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fusion_power",
      "https://en.wikipedia.org/wiki/Tokamak"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fusion_power",
        "situacao": "ok",
        "texto": "Fusion power is a potential method of electric power generation from heat released by nuclear fusion reactions. In fusion, two light atomic nuclei combine to form a heavier nucleus and release energy. Devices that use this process are known as fusion reactors.\n[…]\nIn the 2000s, privately backed fusion companies entered the race, including TAE Technologies, General Fusion, and Tokamak Energy.\n[…]\nThe granted companies are tasked with addressing the scientific and technical challenges to create viable fusion pilot plant designs in the next 5–10 years. The recipient firms include Commonwealth Fusion Systems, Focused Energy Inc., Princeton Stellarators Inc., Realta Fusion Inc., Tokamak Energy Inc., Type One Energy Group, Xcimer Energy Inc., and Zap Energy Inc.\n[…]\nIn December 2023, the largest and most advanced tokamak JT-60SA was inaugurated in Naka, Japan. The reactor is a joint project between Japan and the European Union. The reactor had achieved its first plasma in October 2023.\n[…]\nSubsequently, South Korea's fusion reactor project, the Korean Superconducting Tokamak Advanced Research, successfully operated for 102 seconds in a high-containment mode (H-mode) containing high ion temperatures of more than 100 million degrees in plasma tests conducted from December 2023 to February 2024.\n[…]\nIn January 2025, EAST fusion reactor in China was reported to maintain a steady-state high-confinement plasma operation for 1066 seconds (nearly 18 minutes). In February 2025, the French Alternative Energies and Atomic Energy Commission (CEA) announced that its WEST tokamak had maintained a stable plasma for 1,337 seconds—over 22 minutes. In March Energy Singularity announced that a magnet that produce a magnetic field of 21.7 T."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tokamak",
        "situacao": "ok",
        "texto": "A tokamak  (; Russian: токамáк) is a machine which uses a powerful magnetic field generated by external magnets to confine plasma in the shape of an axially-symmetric torus. The tokamak is the leading candidate of magnetic confinement fusion designs being developed to produce controlled thermonuclear fusion power.\n[…]\nOnce the neutral beam enters the tokamak, interactions with the main plasma ions occur. This has two effects. One is that the injected atoms re-ionize and become charged, thereby becoming trapped inside the reactor and adding to the fuel mass. The other is that the process of being ionized occurs through impacts with the rest of the fuel, and these impacts deposit energy in that fuel, heating it.\n[…]\nPlasma discharges within the tokamak's vacuum chamber consist of energized ions and atoms. The energy from these particles eventually reaches the inner wall of the chamber through radiation, collisions, or lack of confinement. The heat from the particles is removed via conduction through the chamber's inner wall to a water-cooling system, where the heated water proceeds to an external cooling system through convection.\n[…]\nOnce freed, the neutron has a half-life of about 10 minutes before it decays into a proton, electron, and antineutrino with the emission of energy. When the time comes to actually try to make electricity from a tokamak-based reactor, some of the neutrons produced in the fusion process would be absorbed by a liquid-metal blanket, and their kinetic energy would be used in heat-transfer processes to ultimately turn a generator.\n[…]\nSSTC-2 on YouTube Section View Video of a small scale tokamak concept.\n[…]\nSSTC-3 on YouTube Fly Through Video of a small scale tokamak concept.\n[…]\nLAP Tokamak Development Information on conditions necessary for nuclear reaction in a tokamak reactor"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Energia_de_fus%C3%A3o",
        "situacao": "ok",
        "texto": "Energia de fusão é uma forma proposta de geração de energia que geraria eletricidade usando o calor das reações de fusão nuclear. Em um processo de fusão, dois núcleos atômicos mais leves se combinam para formar um núcleo mais pesado, enquanto liberam energia. Dispositivos projetados para aproveitar essa energia são conhecidos como reatores de fusão.\n[…]\nOs processos de fusão requerem combustível e um ambiente confinado com temperatura, pressão e tempo de confinamento suficientes para criar um plasma no qual a fusão possa ocorrer. A combinação desses fatores que resulta em um sistema produtor de energia é conhecida como critério de Lawson. Nas estrelas, o combustível mais comum é o hidrogênio, e a gravidade proporciona tempos de confinamento extremamente longos que atingem as condições necessárias para a produção de energia de fusão.\n[…]\nAlém disso, algumas universidades também operam experimentos nessa área como na Universidade de São Paulo, Unicamp e Universidade Federal do Rio Grande, por exemplo (com o país possuindo, ao todo, três tokamaks).\n[…]\nA fusão nuclear é sustentável, (não gera resíduos radioativos e dióxido de carbono, pois o resultado da reação é o Hélio-4, um gás inerte), não gera riscos de explosão (caso aconteça algum problema durante a operação de um reator de fusão nuclear, como o rompimento de uma proteção, por exemplo, o plasma onde o processo ocorre esfriaria e a reação seria interrompida imediatamente).\n[…]\nÉ eficiente, a fusão de 1 kg de deutério e trítio, produz 93,6 GWh, ou seja, é quatro vezes mais eficiente que a fissão nuclear da mesma quantidade de urânio-235. Com apenas 5 kg de água do mar por hora, seria possível abastecer a demanda energética do Brasil inteiro e com 2x10-9 % do deutério presente na Terra, seria possível abastecer a demanda mundial por energia durante um ano.<\n[…]\nEnergia renovável",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "WALL-E",
      "descricao": "Robô protagonista do filme de animação da Pixar de 2008, deixado sozinho numa Terra abandonada."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No nome do robô Wall-E, da Pixar, que é uma sigla em inglês, a letra E final indica o quê?",
    "resposta": "Terra",
    "distratores": [
      "Energia",
      "Eletrônico",
      "Ecológico"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/WALL-E"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/WALL-E",
        "situacao": "ok",
        "texto": "WALL-E (stylized with an interpunct as WALL·E) is a 2008 American animated science fiction film directed by Andrew Stanton, who co-wrote the screenplay with Jim Reardon, based on a story by Stanton and Pete Docter. Produced by Pixar Animation Studios for Walt Disney Pictures, the film stars the voices of Ben Burtt, Elissa Knight, Jeff Garlin, John Ratzenberger, Kathy Najimy, and Sigourney Weaver, \n[…]\nThe website's consensus reads: \"Wall-E's stellar visuals testify once again to Pixar's ingenuity, while its charming star will captivate younger viewers—and its timely story offers thought-provoking subtext.\" At Metacritic, which assigns a normalized rating to reviews from mainstream critics, the film has an average score of 95 out of 100 based on 39 reviews, indicating \"universal acclaim\". Audiences polled by CinemaScore gave the film an average rating of \"A\" on an A+ to F scale.\n[…]\nIn 2021, WALL-E became the second Pixar feature film (after Toy Story), as well as the second animated film in the 21st century after Shrek, to be selected for preservation in the United States National Film Registry by the Library of Congress as being \"culturally, historically, or aesthetically significant\".\n[…]\nIn 2012, Mike McMaster, an American robotics hobbyist, began working on his own model of WALL-E. The final product was built with more moving parts than the WALL-E which roams around Disneyland. McMaster's four-foot robot made an appearance at the Walt Disney Family Museum and was featured during the opening week of Tested.com a project headed up by Jamie Hyneman and Adam Savage of MythBusters. Since WALL-E's creation, Mike and the popular robot have made dozens of appearances at various events.\n[…]\nHauser, Tim (2008). The Art of WALL-E. San Francisco: Chronicle Books. ISBN 978-0-8118-6235-6. OCLC 377889575.\n[…]\nWALL-E at IMDb\n[…]\nWALL-E at Rotten Tomatoes\n[…]\nWALL-E at the TCM Movie Database (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/WALL-E",
        "situacao": "ok",
        "texto": "WALL-E (estilizado como WALL·E) é um filme de animação americano de 2008 produzido pela Pixar Animation Studios e dirigido por Andrew Stanton. A história segue um robô chamado WALL-E, criado no ano de 2100 para limpar a Terra coberta por lixo. Ele se apaixona por um outro robô, chamado EVA, que tem a missão de encontrar pelo menos uma planta na superfície do planeta Terra. Ele a segue para o espaç\n[…]\nTodavia, Auto ordena que o GO-4, o robô assistente do capitão, roube a planta como parte de uma diretriz final para manter a humanidade longe da Terra, já que a vida foi incorretamente considerada insustentável cerca de 700 anos antes.\n[…]\nAndrew Stanton concebeu WALL-E durante um almoço com os parceiros John Lasseter, Pete Docter e Joe Ranft em 1994. Toy Story estava quase completo e eles tiveram as ideias para os próximos projetos—A Bug's Life, Monsters, Inc. e Finding Nemo—nesse almoço. Stanton perguntou, \"E se a humanidade tivesse de deixar a Terra e alguém se esquecesse de desligar o último robô?\".\n[…]\nStanton também modificou o momento em que WALL-E revela sua planta (que ele havia tirado da nave em autodestruição) para imediatamente após sua escapada, fazendo EVA ficar ainda mais feliz e dando um motivo maior para eles dançarem ao redor da Axiom. Stanton achou que metade do público da exibição teste não acreditava que os humanos conseguiriam recolonizar a Terra, morrendo após o final do filme.\n[…]\nA Pixar estudou Chernobyl e a cidade de Sófia para criar um mundo arruinado; o desenhista de produção Anthony Christov era da Bulgária e lembra que Sófia tinha problemas em guardar seu lixo. Eggleston desbotou os brancos da Terra para fazer WALL-E parecer vulnerável. A luz superexposta faz a locação parecer mais vasta. Devido a bruma, os cubos que constituem as torres de lixo tinham de ser bem grandes, de outra forma eles perderiam o formato (em troca, isso reduzia o tempo de renderização).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Albedo",
      "descricao": "Fração da luz solar que uma superfície reflete, importante para o equilíbrio de temperatura da Terra."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O termo albedo, que mede quanto uma superfície reflete a luz do Sol, vem de uma palavra latina que significa o quê?",
    "resposta": "Brancura",
    "distratores": [
      "Espelho",
      "Calor",
      "Céu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Albedo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Albedo",
        "situacao": "ok",
        "texto": "Albedo (  al-BEE-doh; from Latin  albedo 'whiteness') is the fraction of sunlight that is diffusely reflected by a body. It is measured on a scale from 0 (corresponding to a black body that absorbs all incident radiation) to 1 (corresponding to a body that reflects all incident radiation). Surface albedo is defined as the ratio of radiosity Je to the irradiance Ee (flux per unit area) received by \n[…]\nIn the case of evergreen forests with seasonal snow cover, albedo reduction may be significant enough for deforestation to cause a net cooling effect. Trees also impact climate in extremely complicated ways through evapotranspiration. The water vapor causes cooling on the land surface, causes heating where it condenses, acts as strong greenhouse gas, and can increase albedo when it condenses into clouds.\n[…]\nResearch in 2023, drawing from 176 flux stations globally, revealed a climate trade-off: increased carbon uptake from afforestation results in reduced albedo. Initially, this reduction may lead to moderate global warming over a span of approximately 20 years, but it is expected to transition into significant cooling thereafter.\n[…]\nTwo common optical albedos that are used in astronomy are the (V-band) geometric albedo (measuring brightness when illumination comes from directly behind the observer) and the Bond albedo (measuring total proportion of electromagnetic energy reflected). Their values can differ significantly, which is a common source of confusion.\n[…]\nis the astronomical albedo,\n[…]\nThe term albedo was introduced into optics by Johann Heinrich Lambert in his 1760 work Photometria.\n[…]\nAlbedo Project Archived 3 April 2019 at the Wayback Machine. Additional archives: 3 March 2024.\n[…]\nAlbedo – Encyclopedia of Earth\n[…]\nNASA MODIS BRDF/albedo product site\n[…]\nOcean surface albedo look-up-table\n[…]\nSurface albedo derived from Meteosat observations\n[…]\nA discussion of Lunar albedos"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Albedo",
        "situacao": "ok",
        "texto": "Albedo ou coeficiente de reflexão (do latim albedo: 'brancura' ou luz solar refletida; de albus: 'branco') é a refletividade difusa ou poder de reflexão de uma superfície. É a razão entre a radiação refletida pela superfície e a radiação incidente sobre ela.\n[…]\n, e a refletância bi-hemisférica,\n[…]\nO albedo\n[…]\nDois albedos comuns que são usados em astronomia são o albedo geométrico (que mede o brilho quando a iluminação vem diretamente por trás do observador) e o albedo de Bond (que mede a proporção total de energia eletromagnética refletida). Os seus valores podem diferir significativamente, o que é uma fonte comum de confusão.\n[…]\nEm estudos detalhados, as propriedades de refletância direcional de corpos astronômicos são frequentemente expressas em termos dos cinco parâmetros de Hapke, que semiempiricamente descrevem a variação do albedo com o ângulo de fase, inclusive com uma caracterização do efeito da oposição de superfícies do regolito.\n[…]\né o albedo astronômico,\n[…]\nMais recentemente, o estudo foi estendido para os efeitos de desvio espectral devidos à refletividade especular de 22 materiais superficiais que ocorrem comumente (naturais e artificiais), e analisa os efeitos do albedo sobre o desempenho de sete materiais fotovoltaicos cobrindo três topologias comuns de sistemas fotovoltaicos: industriais (fazendas solares), telhados de edifícios comerciais e aplicações residenciais.\n[…]\nDeve-se notar que as coberturas brancas das ondas parecem brancas (e têm alto albedo) porque a água está com espuma, de modo que há muitas superfícies de bolhas superpostas que refletem a luz, adicionando a sua refletividade. Gelo “negro” recente exibe a reflexão de Fresnel.\n[…]\nFeedback do gelo-albedo\n[…]\n«O que é o albedo? - 30 segundos de explicação»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "COP30",
      "descricao": "Trigésima Conferência das Nações Unidas sobre Mudanças Climáticas, realizada em novembro de 2025."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na sigla COP, das conferências do clima da ONU, as letras significam Conferência das quê?",
    "resposta": "Partes",
    "distratores": [
      "Potências",
      "Parcerias",
      "Pátrias"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/United_Nations_Climate_Change_Conference",
      "https://en.wikipedia.org/wiki/2025_United_Nations_Climate_Change_Conference"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/United_Nations_Climate_Change_Conference",
        "situacao": "ok",
        "texto": "The United Nations Climate Change Conferences are yearly conferences held in the framework of the United Nations Framework Convention on Climate Change (UNFCCC). They serve as the formal meeting of the UNFCCC parties—the conference of the parties (COP)—to assess progress in dealing with climate change, and beginning in the mid-1990s, to negotiate the Kyoto Protocol to establish legally binding obl\n[…]\nThe first UN Climate Change Conference (COP 1) was held in 1995 in Berlin.\n[…]\nCOP28 took place at Expo City Dubai, in the United Arab Emirates, from 30 November to 12 December 2023.\n[…]\nThe first time this globally significant annual event has been hosted in a post-Soviet country. Also for the first time since the Taliban takeover in 2021, a delegation from Afghanistan has been invited to the United Nations signature climate conference.\n[…]\nOn 11 January 2023, President Lula and the Ministry of Foreign Affairs announced the city of Belém in the state of Pará as the Brazil's candidate host city of the event. On 26 May 2023, it was claimed that a UN Latin America regional group endorsed the city chosen to host the COP 30, a first for a city in the Amazon region.\n[…]\nBelém was officially chosen as the COP 30 host during the COP 28 in Dubai on 11 December 2023.\n[…]\nAustralia and Turkey continued to be locked in negotiations about hosting rights until the last days of COP 30 in November 2025, which was attended by Australian Minister for Climate Change and Energy Chris Bowen. On 20 November 2025, it was announced that Turkey would be hosting the conference, but with Bowen acting as leader of negotiations, and an event held immediately before COP 31 hosted by a Pacific nation.\n[…]\nOnce representatives are registered successfully, they can then be permitted to enter the venue premises, participate in the negotiation process and actively engage in conference sessions and discussions.\n[…]\nConference of the parties"
      },
      {
        "url": "https://en.wikipedia.org/wiki/2025_United_Nations_Climate_Change_Conference",
        "situacao": "ok",
        "texto": "The 2025 United Nations Climate Change Conference or Conference of the Parties to the UNFCCC, more commonly known as COP30, was the 30th session of the United Nations Climate Change Conference. It was held at the Hangar Convention Centre in Belém, Brazil, from 10 to 21 November 2025.\n[…]\nCritics noted that while the project had been discussed since 2012, the conference may have provided a final justification to begin construction. The state of Pará had also previously cited COP30 as one of the interests served by the project.\n[…]\nLocal groups from Pará, such as Cordão da Bicharada, a traditional carnival group from the state, participated in the conference, as well as renowned artists from the Brazilian scene such as Ney Matogrosso, Fafá de Belém, Lenine, Gilberto Gil, Anitta, Gaby Amarantos, Seu Jorge and British artist Chris Martin.\n[…]\nAfter returning from Belém, German Chancellor Friedrich Merz drew controversy when he compared Germany and Brazil during a trade conference in Berlin. Merz remarked that Germans lived in “one of the most beautiful countries in the world” and stated that he and the journalists who accompanied him on the return flight were “delighted to be back in Germany and to have left that place.” His comments were widely criticized by Brazilian officials.\n[…]\nAmid the backlash, Germany's Federal Minister for the Environment, Carsten Schneider, sought to ease tensions, describing Brazil as “a wonderful country” and expressing regret that he had not stayed longer after the conference. Shortly afterward, the German government announced a commitment of €1 billion to the Tropical Forest Forever Facility, a Brazilian proposal introduced during COP30. Merz later stated that he would not apologize for his remarks."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Confer%C3%AAncias_das_Na%C3%A7%C3%B5es_Unidas_sobre_as_Mudan%C3%A7as_Clim%C3%A1ticas",
        "situacao": "ok",
        "texto": "As Conferências das Nações Unidas sobre Mudanças Climáticas, ou Conferência das Partes, são eventos anuais da Organização das Nações Unidas realizados no âmbito da Convenção-Quadro das Nações Unidas sobre a Mudança do Clima (UNFCCC). Eles servem como reunião formal dos integrantes da UNFCCC (a Conferência das Partes – COP) para avaliar o progresso no enfrentamento das mudanças climáticas.\n[…]\nO resultado da cimeira foi um acordo adoptado pelos Estados Partes que previa o \"Fundo Verde para o Clima\" de 100 mil milhões de dólares por ano, um \"Centro de Tecnologia Climática\" e uma rede. No entanto, o financiamento do Green Climate Fund não foi acordado. Também não foi acordado um compromisso com um segundo período do Protocolo de Quioto, mas concluiu-se que o ano-base será 1990 e os potenciais de aquecimento global serão os fornecidos pelo IPCC.\n[…]\nA COP19 foi a 19ª sessão anual da Conferência das Partes (COP) da Convenção-Quadro das Nações Unidas sobre Mudança do Clima (UNFCCC) de 1992 e a 9ª sessão da Reunião das Partes (CMP) do Protocolo de Quioto de 1997 (o protocolo tendo sido desenvolvido sob a carta da UNFCCC). A conferência foi realizada em Varsóvia, Polônia, de 11 a 23 de novembro de 2013. O resultado mais proeminente foi a adoção da Estrutura de Varsóvia para REDD-plus.\n[…]\nDe 1 a 12 de dezembro de 2014, Lima, Peru, sediou a 20ª sessão anual da Conferência das Partes (COP) da Convenção-Quadro das Nações Unidas sobre Mudança do Clima de 1992 (UNFCCC) e a 10ª sessão da Reunião das Partes (CMP ) ao Protocolo de Kyoto de 1997 (o protocolo foi desenvolvido sob a carta da UNFCCC). A conferência pré-COP foi realizada na Venezuela.\n[…]\nA 25ª sessão da Conferência das Partes (COP25) da UNFCCC foi planejada para ocorrer de 11 a 22 de novembro de 2019 no Brasil. Após a eleição como presidente do Brasil, Jair Bolsonaro retirou o Brasil como candidato para sediar o evento.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Poço de Drake",
      "descricao": "Poço de petróleo perfurado por Edwin Drake em 1859, perto de Titusville, nos Estados Unidos."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Edwin Drake, que perfurou o famoso poço de petróleo de 1859 na Pensilvânia, era chamado por um título militar que nunca teve. Qual?",
    "resposta": "Coronel",
    "distratores": [
      "General",
      "Capitão",
      "Major"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Edwin_Drake",
      "https://en.wikipedia.org/wiki/Drake_Well"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Edwin_Drake",
        "situacao": "ok",
        "texto": "Edwin Laurentine Drake (March 29, 1819 – November 9, 1880), also known as Colonel Drake, was an American businessman and the first American to drill the first successful commercial oil well.\n[…]\nClaims of prior art exist, including in Bóbrka, Poland, in 1854; Wietze, Germany, in 1857; and Oil Springs, Ontario, Canada, in 1858. The importance of the Drake Well near Titusville was that it prompted the first great wave of investment and additional drilling that established petroleum as a major industry. Within a day of Drake's striking oil, Drake's methods were being imitated by others along Oil Creek and in the immediate area.\n[…]\nThis culminated with the establishment of several oil boom towns along the creek. Drake's well produced 25 barrels (4.0 m3) of oil a day. By 1872, the entire area was producing 15.9 thousand barrels (2,530 m3) a day.\n[…]\nIn 1934, the Drake Well Museum was opened in Titusville, Pennsylvania, highlighting Drake's career and role as the nation's first successful oil driller.\n[…]\nIn 1954, Drake was portrayed by Vincent Price in Born In Freedom: The Story of Colonel Drake, sponsored by the American Petroleum Institute.\n[…]\nThe 13th episode of The Great Adventure (1963), \"The Colonel from Connecticut\", sees Drake, looking to find purpose in his life, travel to Titusville to discover a way to extract petroleum from the ground in a way never done before.\n[…]\nDrake Well Museum\n[…]\nDrake Well\n[…]\nPbs.org: Edwin Drake\n[…]\nHistoric American Buildings Survey (HABS) No. PA-5108, \"Colonel Drake House, Titusville, Crawford County, PA\", 1 photo, supplemental material"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Drake_Well",
        "situacao": "ok",
        "texto": "The Drake Well is a 69.5-foot-deep (21.2 m) oil well in Cherrytree Township, Pennsylvania, the success of which sparked the first oil boom in the United States. The well is the centerpiece of the Drake Well Museum located 3 miles (5 km) south of Titusville.\n[…]\nDrilled by Edwin Drake in 1859, along the banks of Oil Creek, it is the first commercial oil well in the United States. Drake Well was listed on National Register of Historic Places and designated a National Historic Landmark in 1966. It was designated a Historic Mechanical Engineering Landmark in 1979. The well was designated a National Historic Chemical Landmark in 2009, on the sesquicentennial of the strike.\n[…]\nSmith visited the well the next day and found oil visible on top of the water 5 inches (13 cm) from the top of the well. The original structures at the well caught fire in October 1859 and were rebuilt by Drake a month later. The well produced 12 to 20 barrels (2 to 3 m3) a day, but, after the price of oil plummeted from the resulting boom, it was never profitable. The well stopped producing in 1861 and the Seneca Oil Company sold the property in 1864.\n[…]\nThe chapter erected a limestone boulder with a bronze plaque at the well in 1914 to commemorate the site. In 1931, the American Petroleum Institute donated $60,000 for the creation of a museum and library, as well as a dike to protect Drake Well from flooding by Oil Creek. The Institute stipulated that when the Commonwealth of Pennsylvania took ownership of the site during the Diamond Jubilee of Drake Well in 1934, it was to be made a state park.\n[…]\nThe American Chemical Society designated the Drake Well a National Historic Chemical Landmark on August 27, 2009, the 150th anniversary of the strike.\n[…]\nDrake Well Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Edwin_Laurentine_Drake",
        "situacao": "ok",
        "texto": "Edwin Laurentine Drake (Greenville, Nova Iorque, 29 de março de 1819 – Bethlehem, 9 de novembro de 1880), também conhecido como Coronel Drake, foi um perfurador de poços de petróleo estado-unidense, popularmente considerado o primeiro a perfurar poços de petróleo nos Estados Unidos da América.\n[…]\nEdwin Drake perfurou o primeiro poço de petróleo em 1859, na Pensilvânia. A técnica que utilizou, desenvolvida a partir das técnicas de exploração das minas de sal, consistia em abrir um furo batendo no solo com uma ferramenta suspensa da extremidade de um cabo.\n[…]\nDrake se interessou pela Seneca Oil e comprou algumas ações. Townsend precisava de alguém para ir para Titusville inspecionar a terra e contratar trabalhadores. Contratou Drake por mil dólares anuais, e o enviou à cidade em dezembro de 1857. Drake logo se mudou para lá, e começou a trabalhar. Para impressionar a população local, Townsend escrevia a Drake tratando-o pelo título de \"Coronel\".\n[…]\nDrake e Billy aplicaram seu sistema de perfuração (coluna de tubos de diâmetro pequeno evitando a invasão da água), que a cética população de Titusville logo apelidou de a Loucura de Drake (\"Drake’s Folly\"). Nem a Seneca Oil Company acreditou naquela forma de extração de petróleo e cessou o envio de dinheiro para Drake mandando que ele voltasse para casa. Drake insistiu e auto-financiou seu poço com a ajuda de outras pessoas da cidade e empréstimos bancários.\n[…]\nO segundo poço de Drake produziu 25 barris/dia. A Seneca Oil demorou a pagá-lo. Só o fez em 1864. Os dias de auge da cidade foram mais impressionantes do que a Febre do ouro, na Califórnia. Hordas de investidores, perfuradores e mineradores vieram para Titusville, que logo se tornou a primeira capital do petróleo do mundo.\n[…]\n«Drake Well» (em inglês)\n[…]\n«pbs.org: Edwin Drake» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Acidente nuclear de Fukushima",
      "descricao": "Acidente na usina nuclear de Fukushima Daiichi, no Japão, em março de 2011."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No nome da usina japonesa de Fukushima Daiichi, a palavra daiichi significa o quê?",
    "resposta": "Número um",
    "distratores": [
      "Número dois",
      "Grande",
      "Litoral"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fukushima_Daiichi_Nuclear_Power_Plant",
      "https://en.wikipedia.org/wiki/Fukushima_Daini_Nuclear_Power_Plant"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fukushima_Daiichi_Nuclear_Power_Plant",
        "situacao": "ok",
        "texto": "The Fukushima Daiichi Nuclear Power Plant (福島第一原子力発電所, Fukushima Daiichi Genshiryoku Hatsudensho; Fukushima number 1 nuclear power plant) is a disabled nuclear power plant located on a 350-hectare (860-acre) site in the towns of Ōkuma and Futaba in Fukushima Prefecture, Japan. The plant suffered major damage from the magnitude 9.1 earthquake and tsunami that hit Japan on March 11, 2011.\n[…]\nOn April 5, 2011, TEPCO vice-president Takashi Fujimoto announced that the company was canceling plans to build units 7 and 8. On May 20 TEPCO's board of directors' officially voted to decommission units 1 through 4 of the Fukushima Daiichi nuclear power plant and to cancel plans to build units 7 and 8. It refused however to make a decision regarding units 5 and 6 of the station or units 1 to 4 of the Fukushima Daini nuclear power station until a detailed investigation is made.\n[…]\nJapanese wheelchair basketball player Akira Toyoshima revealed that he was working as an accountant at the Fukushima Daiichi Nuclear Power Plant at the time of the earthquake, tsunami, and nuclear disaster. Toyoshima was focused on organizing a set of important and urgent documents in the main office building of the Fukushima Daiichi Nuclear Power Plant as a member of the accounting team when it happened.\n[…]\nThe cost of decommissioning and decontamination of the Fukushima Daiichi nuclear power plant has been estimated at $195 billion, which includes compensation payouts to victims of the disaster. The amount also includes decommissioning of Fukushima Daiichi reactors, which is estimated at $71 billion. TEPCO will shoulder $143 billion of decommissioning and decontamination, while the Ministry of Finance of Japan will provide $17 billion. Other power companies will also contribute to the cost.\n[…]\nRadiation effects from the Fukushima nuclear accident\n[…]\nData from Fukushima Daiichi ALPS Treated Water Discharge | IAEA"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fukushima_Daini_Nuclear_Power_Plant",
        "situacao": "ok",
        "texto": "The Fukushima Daini Nuclear Power Plant (福島第二原子力発電所, Fukushima Daini () Genshiryoku Hatsudensho; Fukushima II NPP, 2F) is a nuclear power plant located on a 150 ha (370-acre) site in the town of Naraha and Tomioka in the Futaba District of Fukushima Prefecture, Japan. The Tokyo Electric Power Company (TEPCO) runs the plant.\n[…]\nAfter the 2011 Tōhoku earthquake and tsunami, the four reactors at Fukushima Daini automatically shut down. While the sister plant Fukushima Daiichi Nuclear Power Plant, approximately 12 km (7.5 mi) to the north, suffered extensive damage, the Daini Plant was back under control within two days, reaching cold shutdown.\n[…]\nAll reactors in the Fukushima II Nuclear Power Plant are BWR-5 type with electric power of 1,100 MW each (net output: 1,067 MW each).\n[…]\nOther sources give the tsunami height at Fukushima Daini plant at 9-meter-high, while the Fukushima Daiichi plant was hit by a 13-meter-high tsunami.\n[…]\nThese zones were later superseded by the 20 km evacuation and 30 km no-fly zones around Fukushima Daiichi on March 12 and 15, respectively.\n[…]\nOn December 26, 2011, the Prime Minister officially cancelled the nuclear emergency declaration for the Fukushima Daini plant officially ending the incident.\n[…]\nThough a warning of a possible tsunami of 3 m (9.8 ft) in height was issued, a 60 cm (24 in) wave was reported by NHK in the port of Onahama of Iwaki, Fukushima; a 90 cm (35 in) wave hit Sōma, Fukushima; and another wave 1 m (3 ft 3 in) in height struck the Fukushima Daiichi Nuclear Power Plant site after the 6.9 shock.\n[…]\nNuclear power in Japan\n[…]\nFukushima Daiichi nuclear disaster\n[…]\nList of nuclear power plants in Japan\n[…]\nLists of nuclear disasters and radioactive incidents\n[…]\nList of civilian nuclear accidents\n[…]\nWebcam showing Fukushima I Nuclear Power Plant\n[…]\nAll Things Nuclear"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Central_Nuclear_de_Fukushima_I",
        "situacao": "ok",
        "texto": "Central Nuclear de Fukushima I é uma central nuclear localizada na cidade de Okuma, no distrito de Futaba, na Prefeitura de Fukushima na ilha de Honshu, Japão. Foi a primeira central nuclear construída e administrada pela The Tokyo Electric Power Company (Tepco), e é formada por seis reatores de água fervente. Esses reatores de água leve têm uma capacidade combinada de 4,7 GW, fazendo de Fukushima\n[…]\nA Central Nuclear de Fukushima II, situada 11,5 km ao sul, também é a administrada pela Tepco.\n[…]\nUm dos efeitos do sismo e tsunami de Sendai (ou de Tōhoku), ocorrido no dia 11 de março de 2011, foi a explosão ocorrida no dia 12 de março na Central Nuclear de Fukushima I. O tsunami atingiu-a e provocou uma avaria no sistema de refrigeração. O corte de eletricidade impediu a recuperação desse sistema, permitindo que os bastões de combustível continuassem a aquecer, aumentando a pressão e originando uma explosão.\n[…]\nO primeiro-ministro japonês, Naoto Kan, falou ao país após o sismo, lamentando o sucedido e oferecendo as suas condolências às famílias das vítimas. Indicou igualmente que já estaria em marcha a construção de um quartel-general para as operações de emergência e assegurou que não havia sido detectada nenhuma fuga radioactiva nas centrais nucleares do país.\n[…]\nForam os mais altos níveis de césio apresentados desde o desastre de março de 2011.\n[…]\nEm agosto de 2013, quase dois anos e meio após o acidente nuclear, verificaram-se vários vazamentos de material radioativo e, ainda, a possibilidade de um grande transbordamento de água contaminada com material radioativo para o oceano Pacífico, colocando em estado de emergência o complexo nuclear de Fukushima e acirrando as pressões sobre a Tepco. O governo do Japão acredita que os vazamentos de água estejam ocorrendo há dois anos.\n[…]\nEnergia nuclear no Japão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Novo Confinamento Seguro de Chernobyl",
      "descricao": "Estrutura gigante concluída em 2016 para cobrir o reator 4 destruído da usina de Chernobyl e o antigo sarcófago."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Antes do grande arco de 2016, o reator destruído de Chernobyl foi coberto às pressas por uma estrutura de concreto apelidada de quê?",
    "resposta": "Sarcófago",
    "distratores": [
      "Cúpula",
      "Bunker",
      "Colmeia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chernobyl_New_Safe_Confinement",
      "https://en.wikipedia.org/wiki/Chernobyl_Nuclear_Power_Plant_sarcophagus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chernobyl_New_Safe_Confinement",
        "situacao": "ok",
        "texto": "The New Safe Confinement (NSC or New Shelter; Ukrainian: Новий безпечний конфайнмент, romanized: Novyy bezpechnyy konfaynment) is a structure put in place in 2016 to confine the remains of the number 4 reactor unit at the Chernobyl Nuclear Power Plant, in Ukraine, which was destroyed during the Chernobyl disaster in 1986. The structure also encloses the temporary Shelter Structure (sarcophagus) th\n[…]\nConvert the destroyed Chernobyl Nuclear Power Plant reactor 4 into an environmentally safe system (i.e., confine the radioactive materials at the site to prevent further environmental contamination).\n[…]\nReinforced concrete\n[…]\nFor the removal and storage of nuclear waste within the New Safe Confinement area, the strategies for removing waste are split into three systems. Disposal of solid nuclear waste had the Vector Radioactive Waste Storage Facility built near to the Chernobyl site, consisting of the Industrial Complex for Solid Radwaste Management (ICSRM), a nuclear waste storage site.\n[…]\nEven with the distance given from the main reactor during construction of the New Safe Confinement, construction workers were still subject to radiation. Before the slippage procedure began, construction workers may only have been able to stay on the site for 30 minutes at a time due to radiation. The concrete foundation reduced radiation to workers when assembling the structure, and workers were provided decontaminated housing during construction.\n[…]\nDescription of the New Safe Confinement. Design of the new protective shield under Sarcophagus. Archived January 27, 2009, at the Wayback Machine\n[…]\nNew Safe Confinement site live camera\n[…]\nUnique engineering feat concluded as Chernobyl arch has reached resting place on YouTube showing of New Safe Confinement being slid into position, 14–29 November 2016, European Bank for Reconstruction and Development channel archived at Ghostarchive.org on 6 May 2022"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chernobyl_Nuclear_Power_Plant_sarcophagus",
        "situacao": "ok",
        "texto": "The Chernobyl Nuclear Power Plant sarcophagus, also known as the Object Shelter or Shelter Object (Ukrainian: Об'єкт \"Укриття\", romanized: Ob'yekt \"Ukryttya\", Russian: Объект «Укрытие», romanized: Ob\"yekt «Ukrytiye») is a massive steel and concrete structure covering the nuclear reactor number 4 building of the Chernobyl Nuclear Power Plant.\n[…]\nBy 2017, the sarcophagus was surrounded by the New Safe Confinement structure, which is designed to protect the environment while the sarcophagus undergoes demolition and the nuclear cleanup continues. The reactor site is located within a large restricted area known as the Chernobyl Exclusion Zone.\n[…]\nErection of initial reinforced concrete protective walls around the perimeter\n[…]\nIn February 2013, a 600 square metres (6,458 sq ft) portion of the roof and wall adjacent to the covered part of the turbine hall collapsed into the entombed area of the turbine hall. The collapse did not affect any other part of the Object Shelter (sarcophagus) or the New Safe Confinement. No variances in radiation levels as a result of the incident were detected. The collapsed roof was built after the Chernobyl disaster and was later repaired.\n[…]\nThe Chernobyl New Safe Confinement, rolled into place in November 2016, allows for the dismantling of the sarcophagus and for radioactive material to be removed. The containment was expected to cover the existing sarcophagus in 2015. However, delays and a €100 million funding gap caused a year-long delay, before being moved into place in November 2016. The current deadline to dismantle the sarcophagus is 31 October 2029.\n[…]\nAs of 2025, the New Safe Confinement was completed and in operation; it was damaged by a drone attack in February 2025.\n[…]\n\"Chernobyl 25 years on: New Safe Confinement and Spent Fuel Storage Facility\" (PDF). European Bank for Reconstruction & Development."
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Banco Mundial de Sementes de Svalbard",
      "descricao": "Cofre escavado numa montanha do arquipélago de Svalbard que guarda cópias de sementes de plantas do mundo inteiro."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Por guardar sementes para replantar o mundo após uma catástrofe, o banco de sementes de Svalbard ganhou que apelido?",
    "resposta": "Cofre do Juízo Final",
    "distratores": [
      "Jardim do Éden",
      "Caixa de Pandora",
      "Torre de Babel"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Svalbard_Global_Seed_Vault",
      "https://pt.wikipedia.org/wiki/Banco_Mundial_de_Sementes_de_Svalbard"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Svalbard_Global_Seed_Vault",
        "situacao": "ok",
        "texto": "The Svalbard Global Seed Vault (Norwegian: Svalbard globale frøhvelv) is a secure backup facility for the Earth's crop diversity on the Norwegian island of Spitsbergen in the remote Arctic Svalbard archipelago. The Seed Vault provides long-term storage for duplicates of seeds from around the world, conserved in gene banks. The Seed Vault is managed under terms spelled out in a tripartite agreement\n[…]\nThe Seed Vault's mission is to provide a backup against accidental loss of diversity in traditional genebanks. While the popular press has emphasized its possible utility in the event of a major regional or global catastrophe, the Seed Vault will be more frequently accessed when genebanks lose samples due to mismanagement, accident, equipment failures, funding cuts, and natural disasters. These events occur with some regularity. War and civil strife have a history of destroying some genebanks.\n[…]\nThe Svalbard Global Seed Vault ranked at No. 6 on Time's Best Inventions of 2008. It was awarded the Norwegian Lighting Prize for 2009. It was ranked the 10th most influential project of the past 50 years by the Project Management Institute. In 2026 it received the Princess of Asturias Award for International Cooperation.\n[…]\nThere are several children’s books about the seed vault, including The Garden at the End of the World, and Just in Case: Saving Seeds in the Svalbard Global Seed Vault. The seed vault has  also been the subject of two feature length documentaries: Seeds of Time and Seed Battles, as well as Forever Securing the World Food Supply.\n[…]\nIn 2011, Norway issued a postage stamp to honor the seed vault.\n[…]\nIndian Seed Vault\n[…]\nOrthodox seed\n[…]\nRecalcitrant seed\n[…]\nSvalbard Global Seed Vault by the Norwegian Ministry of Agriculture and Food\n[…]\nSvalbard Global Seed Vault by the Crop Trust\n[…]\nSvalbard Global Seed Vault by the Nordic Genetic Resource Center (NordGen)\n[…]\n\"Inside the Svalbard Seed Vault\" on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Banco_Mundial_de_Sementes_de_Svalbard",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Metano",
      "descricao": "Gás inflamável formado por um carbono e quatro hidrogênios, principal componente do gás natural."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O cientista italiano que identificou o gás metano em 1776, recolhendo bolhas de pântanos, dá nome a que unidade de medida elétrica?",
    "resposta": "Volt",
    "distratores": [
      "Watt",
      "Ampere",
      "Ohm"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alessandro_Volta",
      "https://en.wikipedia.org/wiki/Volt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alessandro_Volta",
        "situacao": "ok",
        "texto": "Alessandro Giuseppe Antonio Anastasio Volta (18 February 1745 – 5 March 1827) was an Italian chemist and physicist who was a pioneer of electricity and power, and is credited as the inventor of the electric battery and the discoverer of methane. He invented the voltaic pile in 1799, and reported the results of his experiments in a two-part letter to the president of the Royal Society in London, wh\n[…]\nDespite his professional success, Volta was inclined towards domestic life and this was more apparent in his later years when he tended to live secluded from public life and more for the sake of his family. He died in 1827 from a series of illnesses which began in 1823. The SI unit of electric potential is named the volt in his honour.\n[…]\nVolta also studied what we now call electrical capacitance, developing separate means to study both electrical potential difference (V) and charge (Q), and discovering that for a given object, they are proportional. This is called Volta's Law of Capacitance, and for this work, the unit of electrical potential has been named the volt.\n[…]\nHe replaced the frog's leg with brine-soaked paper and detected the flow of electricity by other means familiar to him from his previous studies. In this way, he discovered the electrochemical series, and the law that the electromotive force (emf) of a galvanic cell, consisting of a pair of metal electrodes separated by electrolyte, is the difference between their two electrode potentials (thus, two identical electrodes and a common electrolyte give zero net emf).\n[…]\nHis image was depicted on the Italian Lire 10,000 note (1990–1997) along with a sketch of his voltaic pile."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Volt",
        "situacao": "ok",
        "texto": "The volt (symbol: V), named after Alessandro Volta, is the unit of measurement of electric potential, electric potential difference (voltage), and electromotive force in the International System of Units (SI).\n[…]\nFor the Josephson constant, KJ = 2e/h (where e is the elementary charge and h is the Planck constant), a \"conventional\" value KJ-90 = 0.4835979 GHz/μV was used for the purpose of defining the volt. As a consequence of the 2019 revision of the SI, as of 2019 the Josephson constant has an exact value of KJ = 483597.84841698... GHz/V, which replaced the conventional value KJ-90.\n[…]\nBy 1873, the British Association for the Advancement of Science had defined the volt, ohm, and farad. In 1881, the International Electrical Congress, now the International Electrotechnical Commission (IEC), approved the volt as the unit for electromotive force. They made the volt equal to 108 cgs units of voltage, the cgs system at the time being the customary system of units in science.\n[…]\nThey chose such a ratio because the cgs unit of voltage is inconveniently small and one volt in this definition is approximately the emf of a Daniell cell, the standard source of voltage in the telegraph systems of the day. At that time, the volt was defined as the potential difference [i.e., what is nowadays called the \"voltage (difference)\"] across a conductor when a current of one ampere dissipates one watt of power.\n[…]\nThe \"international volt\" was defined in 1893 as 1⁄1.434 of the emf of a Clark cell. This definition was abandoned in 1908 in favor of a definition based on the international ohm and international ampere until the entire set of \"reproducible units\" was abandoned in 1948."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alessandro_Volta",
        "situacao": "ok",
        "texto": "Alessandro Giuseppe Antonio Anastasio Volta (18 de fevereiro de 1745 – 5 de março de 1827) foi um químico, físico e pioneiro da eletricidade e da potência, creditado como o inventor da pilha voltaica e o descobridor do metano. Ele inventou a pilha voltaica em 1799 e relatou os resultados de suas experiências em 1800 em uma carta de duas partes para o presidente da Royal Society.\n[…]\nApesar de seu sucesso profissional, Volta tendeu a ser uma pessoa inclinada para uma vida fechada e isso foi mais aparente em seus últimos anos. Nesta época, ele tendia a viver isolado da vida pública e mais para o bem de sua família até a sua morte em 1827, a partir de uma série de doenças que começaram em 1823. A unidade SI de tensão elétrica é nomeada em sua homenagem como o volt.\n[…]\nEstudou a química de gases entre 1776 e 1778. Após ler um ensaio de Benjamin Franklin sobre \"ar inflamável\", cuidadosamente procurou-o em Itália. Em novembro de 1776, Volta encontrou metano no Lago Maior, e em 1778 ele conseguiu isolar esse gás.\n[…]\nExperimentos envolvendo estímulos elétricos em tecidos humanos utilizando pilhas voltaicas também foram realizados pelo cientista italiano Giovanni Aldini, sobrinho de Galvani, em 1802. Ele aplicava correntes elétricas em cabeças de cadáveres em espetáculos públicos demonstrando que olhos piscavam e arregalavam, as línguas se movimentavam e as expressões faciais se alteravam.\n[…]\nEm 1881, uma unidade eléctrica fundamental, o volt, foi nomeada em homenagem a Volta. Volta aparecia nas antigas notas de dez mil liras italianas, hoje fora de circulação. Também em sua homenagem, uma cratera lunar recebeu o seu nome.\n[…]\nDe vi attractiva ignis electrici, ac phaenomenis inde pendentibus [A força de atração de um fogo elétrico e os fenômenos resultantes] (em latim). Novo Comi: Typis Octavii Staurenghi. 1769. OCLC 1419897",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Moinho de vento",
      "descricao": "Máquina de torre movida pela força do vento sobre pás ou velas, usada para moer grãos."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em que romance espanhol o protagonista ataca moinhos de vento achando que são gigantes?",
    "resposta": "Dom Quixote",
    "distratores": [
      "Lazarilho de Tormes",
      "A Celestina",
      "O Burlador de Sevilha"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dom_Quixote",
      "https://en.wikipedia.org/wiki/Don_Quixote"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dom_Quixote",
        "situacao": "ok",
        "texto": "Don Quixote, cujo título completo é O Engenhoso Fidalgo Dom Quixote da Mancha, é um romance espanhol de Miguel de Cervantes. Publicado originalmente em duas partes, em 1605 e 1615, o romance é considerado uma obra fundadora da Literatura ocidental e o primeiro romance moderno. O romance foi classificado por muitos autores conhecidos como o \"melhor romance de todos os tempos\" e a \"obra melhor e mai\n[…]\nDom Quixote pede ao seu vizinho, o pobre trabalhador rural Sancho Pança, que seja seu escudeiro, prometendo-lhe o governo de uma ínsula. Sancho concorda e eles fogem ao amanhecer. Suas aventuras juntos começam com o ataque de Quixote a alguns moinhos de vento que ele acredita serem gigantes ferozes. Em seguida, encontram dois frades beneditinos e, por perto, uma senhora em uma carruagem.\n[…]\nHarold Bloom diz que Dom Quixote é o primeiro romance moderno, e que o protagonista está em guerra com o princípio de realidade de Freud, que aceita a necessidade de morrer. Bloom diz que o romance tem uma gama infinita de significados, mas que um tema recorrente é a necessidade humana de suportar o sofrimento.\n[…]\nPersonagens como Sancho Pança e a montaria de Dom Quixote, Rocinante, são emblemas da cultura literária ocidental. A frase \"Lutar contra moinhos de vento\" para descrever um ato de atacar inimigos imaginários (ou um ato de idealismo extremo), deriva de uma cena icônica do livro.\n[…]\nLutar contra moinhos de vento é uma expressão idiomática que significa \"atacar inimigos imaginários\". A expressão deriva de Dom Quixote, e a palavra \"tilt\" (justar) neste contexto em inglês refere-se à justa medieval. Esta frase é por vezes também expressa como \"atacar moinhos de vento\".\n[…]\nMonsenhor Quixote, um romance de Graham Greene\n[…]\nBelianís de Grécia – um dos romances de cavalaria encontrados na biblioteca de Dom Quixote.\n[…]\nTirante o Branco – um dos romances de cavalaria mencionados por Dom Quixote."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Don_Quixote",
        "situacao": "ok",
        "texto": "Don Quixote is a novel by Miguel de Cervantes, written in Early Modern Spanish and published in two parts in 1605 and 1615. It is considered a founding work of Western literature and the first modern novel. It is also one of the most-translated books in the world and one of the best-selling books in history.\n[…]\nHarold Bloom says Don Quixote is the first modern novel, and that the protagonist is at war with Freud's reality principle, which accepts the necessity of dying. Bloom says that the novel has an endless range of meanings, but that a recurring theme is the human need to withstand suffering.\n[…]\nEven faithful and simple Sancho is forced to deceive him at certain points. In exploring the individualism of his characters, Cervantes helped lead literary practice beyond the narrow convention of the chivalric romance. He spoofs the chivalric romance through a straightforward retelling of a series of acts that redound to the knightly virtues of the hero. The character of Don Quixote became so well known in its time that the word quixotic was quickly adopted by many languages.\n[…]\nIt stands in a unique position between medieval romance and the modern novel. The former consists of disconnected stories featuring the same characters and settings with little exploration of the inner life of even the main character. The latter are usually focused on the psychological evolution of their characters. In Part I, Quixote imposes himself on his environment. By Part II, people know about him through \"having read his adventures\", and so, he needs to do less to maintain his image.\n[…]\nDon Quixote on In Our Time at the BBC\n[…]\nMiguel de Cervantes Collection has rare first volumes in multiple languages of Don Quixote. From the Rare Book and Special Collections Division at the Library of Congress."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Salto de Sete Quedas",
      "descricao": "Conjunto de cachoeiras do rio Paraná, na fronteira entre Brasil e Paraguai, submerso em 1982."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1982, quando as cachoeiras de Sete Quedas iam sumir sob uma represa, que poeta mineiro publicou o poema Adeus a Sete Quedas?",
    "resposta": "Carlos Drummond de Andrade",
    "distratores": [
      "Adélia Prado",
      "Ferreira Gullar",
      "Affonso Romano de Sant'Anna"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gua%C3%ADra_Falls",
      "https://pt.wikipedia.org/wiki/Carlos_Drummond_de_Andrade"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gua%C3%ADra_Falls",
        "situacao": "ok",
        "texto": "The Guairá Falls (Spanish: Saltos del Guairá) or Guaíra Falls (Portuguese: Salto das Sete Quedas do Guaíra) were a series of immense waterfalls on the Paraná River along the border between Paraguay and Brazil. The falls ceased to exist in 1982 when they were inundated by the impoundment of the Itaipu Dam reservoir.\n[…]\nThe falls comprised 18 cataracts clustered in seven groups—hence their Portuguese name, Sete Quedas (Seven Falls)—near the Brazilian municipality of Guaíra, Paraná and Salto del Guairá, the easternmost city in Paraguay. The falls were located at a point where the Paraná River was forced through a narrow gorge. At the head of the falls, the river narrowed sharply from a width of about 380 m (1,250 ft) to 60 m (200 ft).\n[…]\nA tourist attraction and a favorite of locals, the falls were completely submerged under the artificial lake created by the Itaipu Dam upon its completion in 1982. The building of the dam, authorized by a 1973 bilateral agreement between the Paraguayan and Brazilian regimes of the time, marked a new era of cooperation between the countries, both of which had claimed ownership of Guaíra Falls.\n[…]\nBrazilian poet Carlos Drummond de Andrade wrote a poem expressing his dismay at the destruction of Guaíra Falls. Set in large type, the poem filled an entire page in the Jornal do Brasil newspaper:Here seven visions, seven liquid sculpturesvanished through the computerized calculationsof a country ceasing to be humanin order to become a chilly corporation, nothing more.A movement becomes a dam.—Carlos Drummond de Andrade, \"Farewell to Seven Falls\" (excerpt, translated from the Portuguese)\n[…]\nSalto de Sete Quedas photoset\n[…]\nSalto de Sete Quedas - Brasil, December 1978 by Mario Cesar Mendonça Gomes\n[…]\nSalto de Sete Quedas - Brasil, December 1978 by Mario Cesar Mendonça Gomes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carlos_Drummond_de_Andrade",
        "situacao": "ok",
        "texto": "Carlos Drummond de Andrade (Itabira, 31 de outubro de 1902 – Rio de Janeiro, 17 de agosto de 1987) foi um poeta, contista e cronista brasileiro, considerado por muitos o mais influente poeta brasileiro do século XX.\n[…]\nDrummond foi um dos principais poetas da segunda geração do modernismo brasileiro, embora sua obra não se restrinja a formas e temáticas de movimentos específicos.\n[…]\nNos anos 1940, Drummond ingressou nas fileiras do Partido Comunista Brasileiro (PCB) e chegou a dirigir um jornal do Partido no Rio de Janeiro, onde realizou uma entrevista com o dirigente do partido Luis Carlos Prestes ainda na cadeia. Existe colaboração de sua autoria no semanário Mundo Literário (1946–1948) e na revista luso-brasileira Atlântico.\n[…]\nDurante a maior parte da vida, Drummond foi funcionário público, embora tenha começado a escrever cedo e prosseguisse escrevendo até sua morte, que se deu em 1987 no Rio de Janeiro, doze dias após a morte de sua filha. Além de poesia, produziu livros infantis, contos e crônicas. Sua morte ocorreu por infarto do miocárdio e insuficiência respiratória.\n[…]\nDrummond, como os modernistas, segue a libertação proposta por Mário de Andrade e Oswald de Andrade; com a instituição do verso livre, mostrando que este não depende de um metro fixo. Se dividirmos o modernismo numa corrente mais lírica e subjetiva e outra mais objetiva e concreta, Drummond faria parte da segunda, ao lado do próprio Oswald de Andrade.\n[…]\nQuando se diz que Drummond foi o primeiro grande poeta a se afirmar depois das estreias modernistas, não se está querendo dizer que Drummond seja um modernista. De fato, herda a liberdade linguística, o verso livre, o metro livre, as temáticas cotidianas."
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Doença de Minamata",
      "descricao": "Síndrome neurológica causada por envenenamento por mercúrio de efluentes industriais, identificada nos anos 1950."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Assinado em 2013, o tratado internacional que controla o uso do mercúrio leva o nome de que cidade japonesa?",
    "resposta": "Minamata",
    "distratores": [
      "Quioto",
      "Hiroshima",
      "Nagasaki"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Minamata_Convention_on_Mercury"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Minamata_Convention_on_Mercury",
        "situacao": "ok",
        "texto": "The Minamata Convention on Mercury is an international treaty designed to protect human health and the environment from anthropogenic emissions and releases of mercury and mercury compounds. The convention was a result of three years of meeting and negotiating, after which the text of the convention was approved by delegates representing close to 140 countries on 19 January 2013 in Geneva and adop\n[…]\nThe objective of the Minamata Convention is to protect the human health and the environment from anthropogenic emissions and releases of mercury and mercury compounds. It contains, in support of this objective, provisions that relate to the entire life cycle of mercury, including controls and reductions across a range of products, processes and industries where mercury is used, released or emitted.\n[…]\nThe Minamata Convention provides controls over a myriad of products containing mercury, the manufacture, import and export of which will be altogether prohibited by 2020, except where countries have requested an exemption for an initial 5-year period. These products include certain types of batteries, compact fluorescent lamps, relays, soaps and cosmetics, thermometers, and blood pressure devices.\n[…]\nMercury and mercury compounds have long been known to be toxic to human health and the environment. Large-scale public health crises due to mercury poisoning, such as Minamata disease and Niigata Minamata disease, drew attention to the issue. In 1972, delegates to the Stockholm Conference on the Human Environment witnessed Japanese junior high school student Shinobu Sakamoto, disabled as the result of methylmercury poisoning in utero.\n[…]\nThe first meeting of Conference of the Parties to the Minamata Convention on Mercury (COP1) took place from 24 to 29 September 2017 at the International Conference Center in Geneva.\n[…]\nMercury cycle\n[…]\nOfficial website of the Minamata Convention on Mercury"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Poço de Lobato",
      "descricao": "Poço no bairro do Lobato, em Salvador, na Bahia, onde o petróleo jorrou pela primeira vez no Brasil, em 1939."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1939, o petróleo jorrou pela primeira vez no Brasil num bairro de Salvador com o mesmo nome de um escritor que defendia sua exploração. Que bairro?",
    "resposta": "Lobato",
    "distratores": [
      "Pituba",
      "Itapuã",
      "Rio Vermelho"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lobato_(Salvador)",
      "https://pt.wikipedia.org/wiki/Petrobras"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lobato_(Salvador)",
        "situacao": "ok",
        "texto": "Lobato é um bairro de Salvador, capital da Bahia. Este bairro soteropolitano ficou conhecido nacionalmente como o local onde foi descoberto o primeiro poço de petróleo reconhecido pelo governo brasileiro no ano de 1939. O bairro é também onde se inicia o subúrbio ferroviário de Salvador. O bairro do Lobato é subdividido em núcleos, como Alto do Cabrito, Lobato e Boa Vista do Lobato.\n[…]\nConsiderando que no período colonial a cidade do Salvador era dividida em freguesias, as terras que compõem o atual bairro de Lobato integrava inicialmente a antiga freguesia de Nossa Senhora do Ó de Paripe. Esta freguesia foi estabelecida por causa da construção, em meados de 1560, do primeiro templo da Igreja Católica situado na área que compõe o contemporâneo Subúrbio Ferroviário que se chamava originalmente de Igreja de Santa Cruz das Torres.\n[…]\nEm 1938, a Estação de Lobato foi inaugurada visando uma remodelação nas estações do trecho de subúrbio, Salvador-Paripe, pela Companhia Leste Brasileiro. Esta Estação seria substituída por outra construída em 1981.\n[…]\nEm 21 de janeiro de 1939, por iniciativa governamental diante dos relatórios produzidos nos anos anteriores, houve a perfuração do poço por meio de uma sonda que confirmou a existência de petróleo na região de Lobato.\n[…]\nNas proximidades do bairro do Lobato se encontra o Acervo da Laje, o primeiro e único museu criado na região do Subúrbio Ferroviário que apresenta diversas exposições de artistas locais suburbanos trabalhando com espaços que pretendem romper com a lógica tradicional das instituições museológicas.\n[…]\nA principal praia existente no bairro é justamente a Praia (ou \"Prainha\") do Lobato, que oferece uma vista para a Enseada dos Tainheiros que banha a Península de Itapagipe e o Subúrbio Ferroviário de Salvador."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Petrobras",
        "situacao": "ok",
        "texto": "Petróleo Brasileiro S.A. (Petrobras; pronunciado Petrobrás) é uma empresa de capital aberto, cujo acionista majoritário é o Governo do Brasil (União), sendo, portanto, uma empresa estatal de economia mista. Com sede no Rio de Janeiro, opera atualmente em seis países, no segmento de energia, prioritariamente nas áreas de exploração, produção, refino, comercialização e transporte de petróleo, gás na\n[…]\nPara defender a tese do monopólio estatal do petróleo organizaram um amplo movimento popular, a campanha \"O petróleo é nosso!\", em que se destacou, entre outros, o nome do escritor Monteiro Lobato. A mobilização popular conseguiu impedir a tramitação do Anteprojeto do Estatuto do Petróleo no Congresso Nacional e muito contribuiu para a aprovação da Lei 2 004 de 3 de outubro de 1953, que estabeleceu o monopólio estatal do petróleo e instituiu a Petrobras.\n[…]\nEm 2000, foi lançado o PROCAP-3000 (Programa de Capacitação Tecnológica em Águas Profundas), que visava desenvolver as tecnologias necessárias para explorar petróleo e gás a 3000 metros de lâmina d'água e culminou na descoberta do Pré-Sal em 2007. Em 2001, a empresa recebeu da Agência Nacional do Petróleo, Gás Natural e Biocombustíveis (ANP) a concessão para explorar o bloco BM-S-10 na Bacia de Santos, onde perfuraria o primeiro poço do Pré-sal, com mais de 5 mil metros de profundidade.\n[…]\nColômbia: a estatal opera ativos no segmento de exploração offshore, no Bloco GUA-OFF. A Petrobras também descobriu, junto a parceiros (Ecopetrol, Repsol e Statoil), petróleo no pré-sal colombiano, em 2014. Foi a primeira descoberta em águas profundas do Caribe colombiano. Posteriormente, em 2022, junto com a Ecopetrol, foi realizada a maior descoberta de gás natural do país com a perfuração do poço Sirius-1.\n[…]\nEm 2025, 79,63% da produção de petróleo bruto do Brasil veio de águas profundas e do pré-sal.\n[…]\nMonopólio estatal do petróleo no Brasil"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Carvão mineral",
      "descricao": "Rocha sedimentar combustível formada por restos vegetais soterrados, usada em usinas termelétricas."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Um período geológico de cerca de trezentos milhões de anos atrás ganhou seu nome por causa das grandes camadas de carvão formadas nele. Qual?",
    "resposta": "Carbonífero",
    "distratores": [
      "Jurássico",
      "Cretáceo",
      "Devoniano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Carboniferous",
      "https://pt.wikipedia.org/wiki/Carbon%C3%ADfero"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carboniferous",
        "situacao": "ok",
        "texto": "The Carboniferous ( KAR-bə-NIF-ər-əs) is a geologic period and system of the Paleozoic era that spans 60 million years, from the end of the Devonian Period 358.86 Ma (million years ago) to the beginning of the Permian Period, 298.9 Ma. It is the fifth period of the Phanerozoic eon. In North America, the Carboniferous is often treated as two separate geological periods, the earlier Mississippian an\n[…]\nTrilobites are rarer than in previous periods, on a steady trend towards extinction, represented only by the proetid group. Ostracoda, a class of crustaceans, were abundant as representatives of the meiobenthos; genera included Amphissites, Bairdia, Beyrichiopsis, Cavellina, Coryellina, Cribroconcha, Hollinella, Kirkbya, Knoxiella, and Libumella. Crinoids were highly numerous during the Carboniferous, though they suffered a gradual decline in diversity during the Middle Mississippian.\n[…]\nCarboniferous amphibians were diverse and common by the middle of the period, more so than they are today; some were as long as 6 meters, and those fully terrestrial as adults had scaly skin. They included basal tetrapod groups classified in early books under the Labyrinthodontia. These had a long body, a head covered with bony plates, and generally weak or undeveloped limbs. The largest were over 2 meters long.\n[…]\nList of Carboniferous tetrapods – Amphibians and reptiles of the period\n[…]\n\"The Carboniferous Period\". www.ucmp.berkeley.edu. Archived from the original on 2012-02-10.\n[…]\nCossey, P.J.; Adams, A.E.; Purnell, M.A.; Whiteley, M.J.; Whyte, M.A.; Wright, V.P. (2004). British Lower Carboniferous Stratigraphy. Geological Conservation Review. Peterborough: Joint Nature Conservation Committee. p. 3. ISBN 1-86107-499-9.\n[…]\nKazlev, M. Alan (1998). \"The Carboniferous Period of the Paleozoic Era: 299 to 359 million years ago\". Palaeos.org. Archived from the original on 2008-06-21. Retrieved 2008-06-23."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carbon%C3%ADfero",
        "situacao": "ok",
        "texto": "Na escala de tempo geológico, o Carbonífero, Carbónico (português europeu) ou Carbônico (português brasileiro) é o período da Era Paleozoica do Éon Fanerozoico, compreendido entre há 358,86 milhões e 298,9 milhões de anos, aproximadamente. O período Carbonífero sucede o período Devoniano e precede o período Permiano, ambos de sua era.\n[…]\nNa América do Norte o período é dividido em dois, o Mississípico (há entre cerca de 358,86 milhões e 323,4 milhões de anos) e o Pensilvânico (há entre cerca de 323,4 milhões e 298,9 milhões de anos), sendo que em alguns outros locais estes \"períodos\" são considerados como épocas e consequentes subdivisões do período Carbonífero.\n[…]\nO Carbonífero tem este nome devido às grandes quantidades de carvão mineral encontradas em formações rochosas da época na Inglaterra, onde foram datadas pela primeira vez as rochas deste período. Estas grandes formações de carvão têm origem, segundo creem os especialistas, nas grandes florestas e pântanos que cobriam a maior parte das terras emersas do período.\n[…]\nGrande parte de Gondwana situava-se na região polar sul durante o Carbonífero. Conforme a placa se movia, o Polo Sul derivava do sul da África, no início do período, para o leste da Antártida no final. Depósitos glaciais (tilitos) são comuns em Gondwana e indicam múltiplos centros de gelo e movimentos de longa distância das geleiras.\n[…]\nMuitos peixes habitavam os mares carboníferos; predominantemente elasmobrânquios (tubarões e seus parentes). Estes incluíam alguns, como o Psammodus, com dentes de pavimentação adaptados para esmagar as conchas de braquiópodes, crustáceos e outros organismos marinhos. Outros grupos de elasmobrânquios, como os Ctenacanthiformes, atingiram tamanhos grandes, com alguns gêneros como o Saivodus chegando a cerca de 6–9 metros (20–30 ft).\n[…]\nTetrápodes do Período Carbonífero"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Gasolina com chumbo",
      "descricao": "Gasolina com o aditivo antidetonante chumbo tetraetila, criada nos anos 1920 e depois banida por sua toxicidade."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Ao medir a idade da Terra nos anos 1950, o geoquímico americano Clair Patterson percebeu uma contaminação que o fez combater que produto?",
    "resposta": "Gasolina com chumbo",
    "distratores": [
      "Inseticida DDT",
      "Gás de geladeira",
      "Cigarro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Clair_Cameron_Patterson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Clair_Cameron_Patterson",
        "situacao": "ok",
        "texto": "Clair Cameron Patterson (born Claire Cameron Patterson Jr.; June 2, 1922 – December 5, 1995) was an American geochemist. Born in Des Moines and raised in nearby Mitchellville, Iowa, he graduated from Grinnell College. He later received his Ph.D. from the University of Chicago and spent his entire professional career at the California Institute of Technology (Caltech).\n[…]\nPatterson first encountered ubiquitous lead contamination in the late 1940s as a graduate student at the University of Chicago. Later, his work on this subject led to a major reevaluation in the United States and worldwide of the unregulated growth of industrial lead concentrations in the atmosphere and human body. His activism on this issue proved seminal in the banning of leaded gasoline and leaded solder in food cans.\n[…]\nIn his campaign to have lead removed from gasoline (petrol), Patterson took on the lobbying power of the Ethyl Corporation (which employed Kehoe), and the legacy of the late Thomas Midgley Jr. (who invented tetraethyllead (TEL) and chlorofluorocarbons), as well as the additive-lead industry as a whole. Following his criticism of the lead industry, he was refused contracts by several supposedly-neutral research organizations, including the United States Public Health Service.\n[…]\nDavidson, Cliff I., ed. (1998). Clean Hands: Clair Patterson's Crusade against Environmental Lead Contamination. New York: Nova Science Publishers. pp. xxxiv+162. ISBN 978-1-56072-568-8.\n[…]\nMcGrayne, S. Bertsch (2002). \"Ch. 9: Lead-Free Gasoline and Clair C. Patterson\". Prometheans in the Lab. New York: McGraw-Hill. ISBN 978-0-07-140795-3.\n[…]\nRebelsky, Samuel A., \"Grinnellians you should know (or know about): Clair Patterson '43\", SamR's Assorted Musings and Rants, retrieved October 9, 2022\n[…]\nClair Cameron Patterson at Find a Grave\n[…]\nClair Cameron Patterson (Geochemist) at The Caltech Archives"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Clair_Patterson",
        "situacao": "ok",
        "texto": "Clair Cameron Patterson (Mitchellville, 2 de junho de 1922 — Sea Ranch, 5 de dezembro de 1995) foi um geoquímico estadunidense.\n[…]\nClair também foi o primeiro a se deparar com a contaminação por chumbo nos anos 1940, ainda como estudante de graduação da Universidade de Chicago. Seu trabalho levou a uma reavaliação do crescimento de uso e concentração de chumbo industrial na atmosfera e no corpo humano, e sua campanha e estudos levaram ao banimento do tetraetilchumbo da gasolina e das soldas em latas de alimentos.\n[…]\nClair e George tinham que medir a concentração e composição isotópicas dos elementos dentro dos zircões. George deveria medir a quantidade de urânio, Clair a de chumbo. Seu principal objetivo era o de descobrir a composição primordial de chumbo no planeta. E ao fazer isso, ele poderia estimar a idade do sistema solar e assim a da Terra, usando a mesma técnica com meteoritos.\n[…]\nPartindo para locais ermos a fim de coletar amostras, como na Groenlândia, ele determinou, através de núcleos de gelo, que os níveis atmosféricos de chumbo começaram a crescer vertiginosa e perigosamente logo após a adição do tetraetilchumbo na gasolina, já que ele reduzia o choque da combustão no núcleo do motor. Clair logo descobriu que ao longo da cadeia de fabricação, o chumbo vinha contaminando suas amostras.\n[…]\nOs Estados Unidos estabeleceram que gasolina sem chumbo passasse a entrar em uso em todos os carros que fossem lançados a partir de 1975, mas os esforços de Clair só foram concretizados em 1986. No final de 1990, os níveis de chumbo no sangue dos norte-americanos caiu em 80%.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Rompimento da barragem de Mariana",
      "descricao": "Rompimento da barragem de rejeitos de Fundão, da mineradora Samarco, em Mariana, Minas Gerais, em novembro de 2015."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Uma das donas da Samarco, cuja barragem se rompeu em Mariana em 2015, tinha no nome antigo o próprio rio arrasado pela lama. Que empresa é essa?",
    "resposta": "Vale (antiga Vale do Rio Doce)",
    "distratores": [
      "CSN",
      "Usiminas",
      "Gerdau"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mariana_dam_disaster",
      "https://pt.wikipedia.org/wiki/Vale_S.A."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mariana_dam_disaster",
        "situacao": "ok",
        "texto": "The Mariana dam disaster was an environmental disaster near Mariana, Minas Gerais, Brazil. On 5 November 2015, the Fundão tailings dam at the Germano iron ore mine of the Samarco Mariana Mining Complex near Mariana, suffered a catastrophic failure, resulting in flooding that devastated the downstream villages of Bento Rodrigues and Paracatu de Baixo (40 km (25 mi) from Bento Rodrigues), killing 19\n[…]\nIn June 2016, an AUD$8 billion civil suit which was reinstated by Brazil's Superior Court after the original agreement was suspended. BHP, along with its Samarco joint venture partner Vale, face a separate $55 billion suit lodged by federal prosecutors.\n[…]\nIn June 2018, Samarco, Vale and BHP signed an agreement to drop a US$7 billion lawsuit and allow two years for the companies to address the greater US$55 billion suit seeking social, environmental and economic compensation.\n[…]\nIn August 2025, BHP Group and Vale had offered US$1.4 billion to settle the case.\n[…]\nOn 25 October 2024, mining companies BHP and Vale signed an agreement with the Brazilian government to pay nearly US$30 billion in compensation over the Mariana Dam collapse. The terms include $18 billion in funding for public authorities and $5.6 billion in additional compensation, resettlement, and environment restoration. The signing ceremony was attended by Brazilian President Luiz Inacio Lula de Silva.\n[…]\nThe authors stressed that actions taken by the Brazilian government, Vale and BHP Billiton to prevent harm were insufficient. On the other hand, BHP claims that although heavy metals were found, the difference in concentration was found not to differ significantly from that found in the 2010 geologic survey. The company said the tailings that entered the Rio Doce were composed of clay and silt from the processing of earth containing iron ore, which is naturally abundant in the region."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vale_S.A.",
        "situacao": "ok",
        "texto": "Vale é uma mineradora multinacional brasileira e uma das maiores operadoras de logística do país. É uma das maiores empresas de mineração do mundo e também a maior produtora de minério de ferro, de pelotas e de níquel. Também produz cobre, cobalto e outros metais preciosos. No setor de energia elétrica, participa em consórcios e atualmente opera nove usinas hidrelétricas, no Brasil, no Canadá e na\n[…]\nEm 2022, a Vale atuava na mineração de cobre na Serra dos Carajás (minas Salobo e Sossego), no Brasil, e no Canadá (Ontário, Terra Nova e Labrador). A empresa produziu 253 mil toneladas de cobre em 2022.\n[…]\nO rompimento de barragem em Mariana ocorreu na tarde de 5 de novembro de 2015 no subdistrito de Bento Rodrigues, a 35 km do centro do município brasileiro de Mariana, Minas Gerais. Rompeu-se uma barragem de rejeitos de mineração denominada \"Fundão\", controlada pela Samarco Mineração, um empreendimento conjunto das maiores empresas de mineração do mundo, a brasileira Vale e a anglo-australiana BHP Billiton.\n[…]\nO rompimento da barragem de Fundão é considerado o desastre industrial que causou o maior impacto ambiental da história brasileira e o maior do mundo envolvendo barragens de rejeitos, com um volume total despejado de 62 milhões de metros cúbicos. A lama chegou ao rio Doce, cuja bacia hidrográfica abrange 230 municípios dos estados de Minas Gerais e Espírito Santo, muitos dos quais abastecem sua população com a água do rio.\n[…]\nO rompimento de barragem em Brumadinho em 25 de janeiro de 2019 foi o maior acidente de trabalho no Brasil em perda de vidas humanas e o segundo maior desastre industrial do século. Foi um dos maiores desastres ambientais da mineração do país, depois do rompimento de barragem em Mariana. Controlada pela Vale, a barragem de rejeitos denominada barragem da Mina Córrego do Feijão, era classificada como de \"baixo risco\" e \"alto potencial de danos\" pela empresa."
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Rompimento da barragem de Mariana",
      "descricao": "Rompimento da barragem de rejeitos de Fundão, da mineradora Samarco, em Mariana, Minas Gerais, em novembro de 2015."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 2015, a lama da barragem rompida em Mariana, Minas Gerais, desceu por que rio até chegar ao mar no Espírito Santo?",
    "resposta": "Rio Doce",
    "distratores": [
      "Rio São Francisco",
      "Rio Paraopeba",
      "Rio Jequitinhonha"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rompimento_de_barragem_em_Mariana",
      "https://en.wikipedia.org/wiki/Mariana_dam_disaster"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rompimento_de_barragem_em_Mariana",
        "situacao": "ok",
        "texto": "Rompimento da barragem em Mariana ocorreu na tarde de 5 de novembro de 2015 no subdistrito de Bento Rodrigues, a 35 km do centro do município brasileiro de Mariana, Minas Gerais. Rompeu-se uma barragem de rejeitos de mineração denominada \"Fundão\", controlada pela Samarco Mineração S.A., um empreendimento conjunto das maiores empresas de mineração do mundo, a brasileira Vale S.A. e a anglo-australi\n[…]\nO rompimento da barragem de Fundão é considerado o desastre industrial que causou o maior impacto ambiental da história brasileira e o maior do mundo envolvendo barragens de rejeitos, com um volume total despejado de 62 milhões de metros cúbicos. A lama chegou ao rio Doce, cuja bacia hidrográfica abrange 230 municípios dos estados de Minas Gerais e Espírito Santo, muitos dos quais abastecem sua população com a água do rio.\n[…]\nPor volta de 18h30 do dia 5 de novembro, os rejeitos de minério de ferro chegaram ao Rio Doce. A bacia do rio tem uma área de drenagem de cerca de 86 715 quilômetros quadrados, sendo 86% em Minas Gerais e o restante no Espírito Santo. No total, o rio abrange 230 municípios que utilizam o seu leito como subsistência.\n[…]\nNo dia 16 de novembro, a onda de lama e rejeitos de minério chegou ao município de Baixo Guandu, no noroeste do Espírito Santo. A prefeitura suspendeu o abastecimento pelo Rio Doce.\n[…]\nApós a assinatura de um Termo de Transação de Ajustamento de Conduta (TTAC) entre a Samarco e suas controladoras, Vale e BHP Billiton, com os governos federal e dos Estados de Minas Gerais e Espírito Santo, foi criada a Fundação Renova, instituição responsável por conduzir os programas de reparação, restauração e recuperação socioeconômica e socioambiental nas áreas impactadas pelo rompimento da barragem de Fundão.\n[…]\nRompimento de barragem em Brumadinho\n[…]\nRompimento de barragem em Itabirito\n[…]\nMedia relacionados com Rompimento de barragem do Fundão no Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mariana_dam_disaster",
        "situacao": "ok",
        "texto": "The Mariana dam disaster was an environmental disaster near Mariana, Minas Gerais, Brazil. On 5 November 2015, the Fundão tailings dam at the Germano iron ore mine of the Samarco Mariana Mining Complex near Mariana, suffered a catastrophic failure, resulting in flooding that devastated the downstream villages of Bento Rodrigues and Paracatu de Baixo (40 km (25 mi) from Bento Rodrigues), killing 19\n[…]\nAt around 6:30 pm on 5 November, the tailings of iron ore reached the Doce River. The river basin has a drainage area of about 86,700 km2 (33,500 sq mi), with 86% in Minas Gerais and Espírito Santo. In total, the river covers 230 municipalities that use its bed for subsistence. The waste also reached the hydroelectric power plant of Risoleta Neves in Santa Cruz do Escalvado within 100 kilometres of Mariana. According to the company that runs the power plant, its functioning was not affected.\n[…]\nThere are concerns about contamination of the nearby Rio Gualaxo do Norte, a tributary of the Doce River, due to the toxic substances stored at the facility.\n[…]\nOn the first quarter of November 2015, the Brazilian Chamber of Deputies and the state chambers of Minas Gerais and Espírito Santo each created a special commission to investigate the collapse. According to the media reports, many of the deputies that composed such commissions had received donations from Vale to finance their campaigns. Such donations, up to R$2.6 million are legal, and were reported by the then-candidates to the Brazilian Election Justice.\n[…]\nThe Minas Gerais government suspended Samarco's activities immediately after the disaster.\n[…]\nOn 6 November 2024, the Supreme Federal Court (STF) unanimously validated the agreement reached by the federal government, the states of Minas Gerais, Espírito Santo and mining companies to repair the damage caused by the Mariana dam collapse."
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Mar de Aral",
      "descricao": "Lago salgado da Ásia Central, entre Cazaquistão e Uzbequistão, que encolheu drasticamente desde o século vinte."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O mar de Aral encolheu porque os rios que o alimentavam foram desviados para irrigar grandes plantações de quê?",
    "resposta": "Algodão",
    "distratores": [
      "Café",
      "Cana-de-açúcar",
      "Chá"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Aral_Sea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aral_Sea",
        "situacao": "ok",
        "texto": "The Aral Sea was an endorheic salt lake lying between Kazakhstan to its north and Uzbekistan to its south, which began shrinking in the 1950s - 1960s and had largely dried up into desert by 2007. It was in the Aktobe and Kyzylorda regions of Kazakhstan and the Karakalpakstan autonomous region of Uzbekistan. The name roughly translates from Mongolic and Turkic languages to \"Sea of Islands\", a refer\n[…]\nIn the first half of the 20th century prior to the irrigation, the sea's water level above sea level held steady at 53 m. By 2010, the large Aral was 27 m and the small Aral 43 m above sea level.\n[…]\nIn 1997, a new plan was conceived which would continue with the previous restoration efforts of the Aral Sea. The main aims of this phase are to improve the irrigation systems currently in place, whilst targeting water management at a local level. The largest project in this phase is the North Aral Sea Project, a direct effort to recover the northern region of the Aral Sea.\n[…]\nWork is being done to restore in part the North Aral Sea. Irrigation works on the Syr Darya have been repaired and improved to increase its water flow, and in October 2003, the Kazakh government announced a plan to build Dike Kokaral, a concrete dam separating the two halves of the Aral Sea. Work on this dam was completed in August 2005; since then, the water level of the North Aral has risen, and its salinity has decreased.\n[…]\nDiscussions had been held on recreating a channel between the somewhat improved North and the desiccated South, along with uncertain wetland restoration plans throughout the region, but political will is lacking. Unlike Kazakhstan, which has partially revived its part of the Aral Sea, Uzbekistan shows no signs of abandoning the Amu Darya river to irrigate their cotton, and is moving toward oil exploration in the drying South Aral seabed.\n[…]\nAral Sea Foundation\n[…]\nAral Sea from Space (time lapse)"
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
    "indice": 25,
    "ancora": {
      "nome": "Grande Nevoeiro de Londres",
      "descricao": "Episódio de poluição atmosférica que cobriu Londres em dezembro de 1952 e causou milhares de mortes."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O Grande Nevoeiro de Londres, em 1952, levou o Parlamento britânico a aprovar em 1956 que lei?",
    "resposta": "Lei do Ar Limpo",
    "distratores": [
      "Lei da Água Limpa",
      "Lei do Carvão",
      "Lei das Fábricas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Smog_of_London",
      "https://en.wikipedia.org/wiki/Clean_Air_Act_1956"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Smog_of_London",
        "situacao": "ok",
        "texto": "The Great Smog was a severe air pollution event that affected London, England, in December 1952. A period of unusually cold weather, combined with an anticyclone and windless conditions, collected airborne pollutants—mostly arising from the use of coal—to form a thick layer of smog over the city. It lasted from Friday, 5 December, to Tuesday, 9 December 1952, then dispersed quickly when the weathe\n[…]\nOn 4 December 1952, an anticyclone settled over a windless London, causing a temperature inversion with relatively cool, stagnant air trapped under a layer of warmer air. The resultant fog, mixed with smoke from home and industrial chimneys, particulates such as those from motor vehicle exhausts, and other pollutants such as sulphur dioxide, formed a persistent smog, which blanketed the capital the following day.\n[…]\nHowever, it was in London that the smog's effects were the greatest.\n[…]\nEnvironmental legislation since 1952, such as the City of London (Various Powers) Act 1954 and the Clean Air Acts of 1956 and 1968, led to a reduction in air pollution. Financial incentives were offered to householders to replace open coal fires with alternatives (such as gas fires), or to burn coke instead, which produces minimal smoke. Central heating (using gas, electricity, oil, or permitted solid fuel) was rare in most dwellings at that time, not finding favour until the late 1960s onwards.\n[…]\nThe Great Smog is the setting of the Doctor Who audio play The Creeping Death and the novel Amorality Tale. The Boris Starling novel Visibility is set in the 1952 smog event. In C. J. Sansom's 2012 alternate reality book Dominion a key plot point develops during the event. The video game Reverse: 1999 version 2.3 story \"London Dawning\" features a setting heavily inspired by the Great Smog, including characters who are inspired by it and having the smog as the main antagonist.\n[…]\nGreat Stink"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Clean_Air_Act_1956",
        "situacao": "ok",
        "texto": "The Clean Air Act 1956 (4 & 5 Eliz. 2. c. 52) was an act of the Parliament of the United Kingdom enacted principally in response to London's Great Smog of 1952. It was sponsored by the Ministry of Housing and Local Government in England and the Department of Health for Scotland, and was in effect until 1993.\n[…]\nWhen the \"Great Smog\" fell over the city in December 1952 the effects were unprecedented: More than 4,000 people are thought to have died in the immediate aftermath, raising public concern, with fog so thick it stopped trains, cars, and public events. A further 8,000 died in following weeks and months. Today, the total death toll is believed to be around 12,000.\n[…]\nThe 1952 smog gave a momentum for tougher action: as well as the Clean Air Act, its effects also led to the introduction of the City of London (Various Powers) Act 1954, and later the Clean Air Act 1968.\n[…]\nSmog and its health effects continued to be a problem in London. During the London fog of 2–5 December 1957 smoke and sulphur dioxide concentrations reached levels comparable to 1952 and there were 760–1,000 deaths. Another episode in 1962 resulted in 750 deaths. Particulate pollution was greatly reduced over the late 20th century, dropping from 200 μg/m³ in 1952 to 27 μg/m³ by the time of the 1993 Clean Air Act.\n[…]\nThe 1956 and 1968 acts were repealed by the Clean Air Act 1993, which extended the provisions of the earlier legislation. The provisions of the acts were consolidated into the following parts:\n[…]\nText of the Clean Air Act 1956 as in force today (including any amendments) within the United Kingdom, from legislation.gov.uk.\n[…]\nText of the Clean Air Act 1956 as originally enacted or made within the United Kingdom, from legislation.gov.uk.\n[…]\nSmog in 1956 and the Clean Air Act at BBC On This Day"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Nevoeiro_de_1952",
        "situacao": "ok",
        "texto": "O Nevoeiro de 1952, conhecido também como The Great Smog, foi um período de severa poluição atmosférica, entre os dias 5 e 9 de dezembro de 1952 que encobriu a cidade de Londres. O fenômeno foi considerado como um dos piores impactos ambientais até então, sendo causado pelo crescimento incontrolado da queima de combustíveis fósseis na indústria e nos transportes. Acredita-se que o nevoeiro tenha c\n[…]\nEm dezembro de 1952, uma frente fria chegou a Londres e fez com que as pessoas queimassem mais carvão que o usual no inverno. O aumento na poluição do ar foi agravado por uma inversão térmica, causada pela densa massa de ar frio. O acúmulo de poluentes foi crescente, especialmente de fumaça e partículas do carvão que era queimado.\n[…]\nInicialmente, não houve pânico, pois os nevoeiros em Londres, conhecidos por fog, são comuns e famosos. Porém, nas semanas seguintes as estatísticas compiladas pelos serviços médicos descobriram que o nevoeiro já havia matado 4 000 pessoas. A maioria das vítimas foram crianças muito novas, idosos e pessoas com problemas respiratórios preexistentes.\n[…]\nO grande número de mortes deu um importante impulso aos movimentos ambientais, e levou a uma reflexão acerca da poluição do ar, pois a fumaça havia demonstrado grande potencial letal. Então, novas regulamentações legais foram baixadas, restringindo o uso de combustíveis sujos na indústria e banindo a fumaça negra. Nos anos seguintes, uma série de normas legais como o Clean Air Act 1956 e o Clean Air Act 1968, restringiram a poluição do ar.\n[…]\nMecanismo de Desenvolvimento Limpo\n[…]\n«London Fog»\n[…]\n«The Great Smog of 1952»\n[…]\n«Historic smog death toll rises»  BBC, 2002-12-02.\n[…]\n«1952: London fog clears after days of chaos»  BBC News, 1952-12-09.\n[…]\n«Pollution call on smog anniversary»\n[…]\n«Description of smog»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Chuva ácida",
      "descricao": "Precipitação com acidez elevada causada por óxidos de enxofre e de nitrogênio lançados na atmosfera."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Além de rios e florestas, a chuva ácida corrói monumentos e estátuas feitos de que rocha clara?",
    "resposta": "Mármore",
    "distratores": [
      "Granito",
      "Basalto",
      "Quartzito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Acid_rain",
      "https://pt.wikipedia.org/wiki/Chuva_%C3%A1cida"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Acid_rain",
        "situacao": "ok",
        "texto": "Acid rain is rain or any other form of precipitation that is unusually acidic, meaning that it has elevated levels of hydrogen ions (low pH). Most water, including drinking water, has a neutral pH that exists between 6.5 and 8.5, but acid rain has a pH level lower than this and ranges from 4–5 on average. The more acidic the acid rain is, the lower its pH is. Acid rain can have harmful effects on \n[…]\nNAPAP also assessed the effects of acid rain on historical buildings, monuments, and building materials. It also funded extensive studies on atmospheric processes and potential control programs.\n[…]\nThe spread of acid rain over India was first studied by a team of researchers in 1989.\n[…]\nAcid rain can damage buildings, historic monuments, and statues, especially those made of carbonate rocks, such as limestone and marble. Acids in the rain react with the calcium compounds in the stones to create gypsum, which then flakes off.\n[…]\nCitizen science – one of two 'first uses' of the term was in an acid rain campaign in 1989.\n[…]\nRitchie, Hannah, \"What We Learned from Acid Rain: By working together, the nations of the world can solve climate change\", Scientific American, vol. 330, no. 1 (January 2024), pp. 75–76. \"[C]ountries will act only if they know others are willing to do the same. With acid rain, they did act collectively.... We did something similar to restore Earth's protective ozone layer.... [T]he cost of technology really matters....\n[…]\nAcid rain for schools\n[…]\nAcid rain for schools – Hubbard Brook\n[…]\nUnited States Environmental Protection Agency – New England Acid Rain Program (superficial)\n[…]\nAcid Rain (more depth than ref. above)\n[…]\nU.S. Geological Survey – What is acid rain?\n[…]\nAcid Rain: A Continuing National Tragedy – a report from The Adirondack Council on acid rain in the Adirondack region (1998)\n[…]\nWhat Happens to Acid Rain?\n[…]\nAcid Rain and how it affects fish and other aquatic organisms"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chuva_%C3%A1cida",
        "situacao": "ok",
        "texto": "Chuva ácida é a designação dada à chuva, ou qualquer outra forma de precipitação atmosférica, cuja acidez seja substancialmente maior do que a resultante do dióxido de carbono (CO2) atmosférico dissolvido na água precipitada. A principal causa daquela acidificação é a presença, na atmosfera terrestre, de gases e partículas ricos em enxofre e azoto reativo cuja hidrólise no meio atmosférico produz \n[…]\nEstudos ecotoxicológicos demonstraram que a precipitação ácida têm impactos adversos sobre as florestas, as massas de água doce e os solos, matando plânctons, insetos, peixes e anfíbios. Também demonstraram efeitos negativos sobre a saúde humana. Para além disso, a precipitação ácida aumenta a corrosividade da atmosfera, causando danos em edifícios e outras estruturas e equipamentos expostos ao ar.\n[…]\nOs efeitos adversos sobre as florestas resultam dos impactes directo e indirecto da acidez, incluindo os efeitos sobre a mobilização de iões nos solos e as altas concentrações no ar de gases precursores da chuva ácida. As florestas situadas a grande altitude são particularmente vulneráveis pois estão frequentemente imersas em nevoeiros e nuvens cujas gotículas são mais ácidas do que a chuva.\n[…]\nPelas mesmas razões, a precipitação oculta tende a ser mais ácida do que a chuva, afectando particularmente as florestas de montanha.\n[…]\nA precipitação ácida pode causar danos nos edifícios e estruturas expostas ao ar, com destaque para os edifícios históricos e monumentos, especialmente os construídos ou revestidos com calcários e mármores. Esse aumento da corrosividade resulta da reacção do ácido sulfúrico contido na precipitação com os compostos de cálcio contidos na pedra, formando gesso que é solubilizado ou se desagrega da estrutura:\n[…]\nChuva alcalina\n[…]\n«Assortment of Summaries on Acid Rain» (em inglês)\n[…]\n«Acid rain linked to decline of the wood thrush, a songbird of the Eastern Forest» (em inglês)"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Branqueamento de corais",
      "descricao": "Fenômeno em que os corais perdem a cor ao expulsar as algas que vivem em seus tecidos."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Qual é a principal causa dos grandes episódios de branqueamento de corais nos recifes?",
    "resposta": "Aquecimento da água do mar",
    "distratores": [
      "Excesso de plâncton",
      "Ataque de estrelas-do-mar",
      "Ondas de tempestade"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coral_bleaching"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coral_bleaching",
        "situacao": "ok",
        "texto": "Coral bleaching is the process where corals become white due to loss of symbiotic algae and photosynthetic pigments. This loss of pigment can be caused by various stressors, such as changes in water temperature, light, salinity, or nutrients. A bleached coral is under stress, more vulnerable to starvation and disease, and at risk of death. The leading cause of coral bleaching is rising ocean tempe\n[…]\nElevated sea water temperatures are the main cause of mass bleaching events. Sixty major episodes of coral bleaching have occurred between 1979 and 1990, with the associated coral mortality affecting reefs in every part of the world. In 2016, the longest coral bleaching event was recorded. The longest and most destructive coral bleaching event was because of the El Niño that occurred from 2014 to 2017. During this time, over 70 percent of the coral reefs around the world have become damaged.\n[…]\nLowered numbers of grazing species after coral bleaching in the Caribbean has been likened to sea-urchin-dominated systems which do not undergo regime shifts to fleshy macroalgae dominated conditions.\n[…]\nMarine Protected Areas (MPAs) are sectioned-off areas of the ocean designated for protection from human activities such as fishing and un-managed tourism. According to NOAA, MPAs currently occupy 26% of U.S. waters. MPAs have been documented to improve and prevent the effects of coral bleaching in the United States.\n[…]\nHigher populations of young coral increase the longevity of a reef, as well as its ability to recover from extreme bleaching events.\n[…]\nThere are a number of stressors locally impacting coral bleaching, including sedimentation, continual support of urban development, land change, increased tourism, untreated sewage, and pollution. To illustrate, increased tourism is good for a country, however, it also comes with costs.\n[…]\nCurrent global map of bleaching alert areas."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Branqueamento_do_coral",
        "situacao": "ok",
        "texto": "O branqueamento do coral é um fenômeno que ocorre quando os pólipos do coral expelem as zooxantelas, dinoflagelados fotossintetizantes que vivem dentro de seus tecidos. Normalmente, os pólipos dos corais vivem em íntima associação com as zooxantelas, em um processo conhecido como simbiose. Nessa relação simbiótica os corais oferecem às zooxantelas abrigo, nutrientes e dióxido de carbono e, em troc\n[…]\nAs temperaturas elevadas da água são a principal causa dos eventos de branqueamento em massa. Sessenta grandes eventos de branqueamento dos corais ocorreram entre 1979 e 1990, com a associada mortalidade dos corais afetando os recifes em todas as partes do mundo. Em 2016, foi registrado o mais longo evento de branqueamento dos corais. Esse evento, o mais longo e destrutivo, foi causado pelo El Niño ocorrido entre 2014 e 2017.\n[…]\nOs cenários de aquecimento moderado do IPCC preveem que os corais da Grande Barreira de Recifes são muito propensos a experimentar regularmente temperaturas de verão altas o suficiente para induzir o branqueamento.\n[…]\nO Brasil tem sido considerado um refúgio para os recifes de coral, principalmente pela maior turbidez do seu mar tropical do outono ao meio da primavera, protegendo os corais do efeito combinado da luz e temperatura, combinação que favorece o branqueamento. Mesmo assim, a costa brasileira foi atingida por fortes ondas de calor com episódios de branqueamento nos anos de 1994, 1998, 2003, 2005, 2010, 2016, 2019 e 2020.\n[…]\nAtualmente, 190 recifes ao redor do mundo são monitorados pelo NOAA, que envia alertas para os pesquisadores e gestores dos recifes por meio do site NOAA Coral Reef Watch (CRW). Por monitorar o aquecimento dos oceanos, os primeiros avisos de branqueamento dos corais alertam os gestores a se prepararem e ficarem atentos a futuros eventos de branqueamento.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Proálcool",
      "descricao": "Programa Nacional do Álcool, lançado pelo governo brasileiro em 1975 para substituir a gasolina por etanol de cana-de-açúcar."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O Proálcool, programa brasileiro que incentivou carros a álcool a partir de 1975, foi criado como resposta a que crise?",
    "resposta": "Crise do petróleo de 1973",
    "distratores": [
      "Crise de 1929",
      "Crise do apagão",
      "Crise da dívida externa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ethanol_fuel_in_Brazil",
      "https://pt.wikipedia.org/wiki/Pr%C3%B3-%C3%81lcool"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ethanol_fuel_in_Brazil",
        "situacao": "ok",
        "texto": "Brazil is the world's second largest producer of ethanol fuel. Brazil and the United States have led the industrial production of ethanol fuel for several years, together accounting for 85 percent of the world's production in 2017. Brazil produced 26.72 billion liters (7.06 billion U.S. liquid gallons), representing 26.1 percent of the world's total ethanol used as fuel in 2017.\n[…]\nThe National Alcohol Program -Pró-Álcool- (Portuguese: Programa Nacional do Álcool), launched in 1975, was a nationwide program financed by the government to phase out automobile fuels derived from fossil fuels, such as gasoline, in favor of ethanol produced from sugar cane.\n[…]\nSince 2009 the Brazilian ethanol industry has experienced a crisis due to multiple causes. They include the 2008 financial crisis; poor sugarcane harvests due to unfavorable weather; high sugar prices in the world market that made more attractive to produce sugar rather than ethanol; a freeze imposed by the Brazilian government on the petrol and diesel prices. Brazilian ethanol fuel production in 2011 was 21.1 billion liters (5.6 billion U.S.\n[…]\nA 2009 study published in Energy Policy found that the use of ethanol fuel in Brazil has allowed to avoid over 600 million tons of CO2 emissions since 1975, when the Pró-Álcool Program began. The study also concluded that the neutralization of the carbon released due to land-use change was achieved in 1992.\n[…]\nThe use of ethanol-only vehicles has also reduced CO emissions drastically. Before the Pró-Álcool Program started, when gasoline was the only fuel in use, CO emissions were higher than 50 g/km driven; they had been reduced to less than 5.8 g/km in 1995. Several studies have also shown that São Paulo has benefit with significantly less air pollution thanks to ethanol's cleaner emissions."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pr%C3%B3-%C3%81lcool",
        "situacao": "ok",
        "texto": "O Brasil é o segundo maior produtor mundial de etanol combustível e segundo maior exportador mundial. Juntos, Brasil e Estados Unidos lideram a produção industrial de etanol, representando em conjunto 82,4% da produção mundial em 2021.\n[…]\nOs primeiros usos práticos do etanol deram-se entre meados dos anos 1920 e início dos anos 1930. Mas somente nos anos 1970, com a crise do petróleo, o Brasil passou a usar maciçamente o etanol como combustível. Na segunda metade da década de 1980 por diversos motivos ocorreu uma forte retração no consumo de álcool combustível.\n[…]\nA grande disponibilidade de álcool nesse período rendeu a pesquisadores a possibilidade de estudos da alcoolquímica, análoga da petroquímica baseada no petróleo, como, por exemplo, estudos sobre a viabilidade da produção de óxido de etileno e monômeros a partir do etanol, matérias-primas básicas para a produção de uma gama de compostos químicos usados no dia a dia.\n[…]\nDiante de uma situação nacional antiga e inconstante, justamente causada pelas altas e baixas do petróleo, as grandes montadoras brasileiras aprofundaram-se em pesquisas e, dessa forma, lançaram uma tecnologia revolucionária: os carros dotados de motor bicombustível, fabricados tanto para o uso de gasolina quanto de álcool.\n[…]\nCom a deflagração da Segunda Grande Guerra, o etanol combustível ganhou ainda mais proeminência, mas com o fim do conflito em 1945, e a normalização da produção e do comércio de combustíveis, em especial a gasolina ele viria a perder parte da importância adquirida na década anterior. Foi somente em 1974 com a Crise do Petróleo que o governo militar brasileiro enxergou a necessidade de solucionar o problema do Brasil em relação à importação de combustíveis."
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Usina de Belo Monte",
      "descricao": "Grande usina hidrelétrica construída no rio Xingu, no estado do Pará, e inaugurada na década de 2010."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A usina hidrelétrica de Belo Monte, no Pará, uma das maiores do Brasil, foi construída em que rio?",
    "resposta": "Rio Xingu",
    "distratores": [
      "Rio Tapajós",
      "Rio Tocantins",
      "Rio Madeira"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Usina_Hidrel%C3%A9trica_de_Belo_Monte",
      "https://en.wikipedia.org/wiki/Belo_Monte_Dam"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Usina_Hidrel%C3%A9trica_de_Belo_Monte",
        "situacao": "ok",
        "texto": "A Usina Hidrelétrica de Belo Monte é uma usina hidrelétrica (UHE) brasileira da bacia do Rio Xingu, próximo ao município de Altamira, no norte do estado Pará. A capacidade instalada da usina é de 11 233 MW e sua quantidade média de geração de energia é de 4 571 MW por mês.\n[…]\nDesde seu início, o projeto de Belo Monte encontrou forte oposição de ambientalistas brasileiros e internacionais, de algumas comunidades indígenas locais e de membros da Igreja Católica. Essa oposição levou a sucessivas reduções do escopo do projeto, que originalmente previa outras barragens rio acima e uma área alagada total muito maior. Em 2008, o CNPE decidiu que Belo Monte seria a única usina hidrelétrica do Rio Xingu.\n[…]\n1975: iniciados os Estudos de Inventário Hidrelétrico da Bacia Hidrográfica do Rio Xingu.\n[…]\n1989: durante o 1º Encontro dos Povos Indígenas do Xingu, realizado em fevereiro em Altamira (PA), a índia Tuíra Kayapó, em sinal de protesto, levanta-se da plateia e encosta a lâmina de seu facão no rosto do presidente da Eletronorte, José Antônio Muniz, que fala sobre a construção da usina Kararaô (atual Belo Monte). A cena é reproduzida em jornais e torna-se histórica. O encontro teve a presença do cantor Sting. O nome Kararaô foi alterado para Belo Monte em sinal de respeito aos índios.\n[…]\nEm agosto de 2001, o coordenador do Movimento pela Transamazônica e do Xingu, Ademir Federicci, foi morto com um tiro na boca enquanto dormia ao lado da esposa e do filho caçula, após ter participado de um debate de resistência contra a Usina de Belo Monte. Ameaçada de morte desde 2004, a coordenadora do Movimento de Mulheres do Campo e da Cidade do Pará e do Movimento Xingu Vivo para Sempre, Antônia Melo, também é contrária à instalação da usina e não sai mais às ruas."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Belo_Monte_Dam",
        "situacao": "ok",
        "texto": "The Belo Monte Dam (formerly known as Kararaô) is a hydroelectric dam complex on the northern part of the Xingu River in the state of Pará, Brazil.\n[…]\nPlans for what would eventually be called the Belo Monte Dam Complex began in 1975 during Brazil's military dictatorship, when Eletronorte contracted the Consórcio Nacional de Engenheiros Consultores (CNEC) to realize a hydrographic study to locate potential sites for a hydroelectric project on the Xingu River. CNEC completed its study in 1979 and identified the possibility of constructing five dams on the Xingu River and one dam on the Iriri River.\n[…]\nThe Belo Monte Dam (AHE Belo Monte) is a complex of three dams, numerous dykes and a series of canals in order to supply two different power stations with water. The Pimental Dam (3°27′33″S 51°57′31″W) on the Xingu would be 36 metres (118 ft) tall; 6,248 metres (20,499 ft) long and have a structural volume of 4,768,000 cubic metres (168,400,000 ft3).\n[…]\nBeyond its quantitative ecological footprint, the Belo Monte Dam has been linked to larger socio-environmental impacts on communities along the Xingu River. Scholars report that large-scale infrastructure projects in Brazil frequently reflect patterns of internal colonialism, which is described as \"a structure of social relations based on domination and exploitation among heterogeneous, distinct groups\" within a country.\n[…]\nHowever, Norte Energía, the company assigned with the construction of the Belo Monte Dam, has the possibility of an appeal to the Supreme Court.\n[…]\nXingu-Estreito HVDC transmission line\n[…]\nXingu-Rio HVDC transmission line\n[…]\nBuilding Belo Monte, a photographic documentary series"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Rompimento da barragem de Brumadinho",
      "descricao": "Rompimento da barragem de rejeitos da mina Córrego do Feijão, em Brumadinho, Minas Gerais."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 2019, a lama da barragem rompida em Brumadinho atingiu que rio, afluente do São Francisco?",
    "resposta": "Rio Paraopeba",
    "distratores": [
      "Rio das Velhas",
      "Rio Doce",
      "Rio Pará"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rompimento_de_barragem_em_Brumadinho",
      "https://en.wikipedia.org/wiki/Brumadinho_dam_disaster"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rompimento_de_barragem_em_Brumadinho",
        "situacao": "ok",
        "texto": "Rompimento de barragem em Brumadinho em 25 de janeiro de 2019 foi o maior acidente de trabalho no Brasil em perda de vidas humanas e o segundo maior desastre industrial do século. Foi um dos maiores desastres ambientais da mineração do país, depois do rompimento de barragem em Mariana.\n[…]\nNo momento do rompimento, trabalhadores estavam na área administrativa da mina, que foi atingida, assim como parte da comunidade da Vila Ferteco, ambas a cerca de um quilômetro a jusante da barragem. Às 15h50min os rejeitos que vazaram da Mina de Feijão atingiram o rio Paraopeba. Até as 16h49min ainda não havia confirmação de mortes segundo o Corpo de Bombeiros de Minas Gerais. Às 17h07min, uma estimativa do corpo de bombeiros apontou quatro vítimas feridas e duzentas pessoas desaparecidas.\n[…]\nDepois do rompimento da barragem, seis prefeituras de municípios da Bacia do Paraopeba emitiram alertas para que a população se mantivesse longe do leito do rio.\n[…]\nNo relatório \"O retrato da qualidade da água nas bacias da Mata Atlântica\", publicado em 22 de março de 2019 pela Fundação SOS Mata Atlântica, constatou que os rejeitos da barragem já haviam contaminado o rio São Francisco, do qual o rio Paraopeba é um afluente. As concentrações de ferro, manganês, cromo e cobre estava acima dos limites permitidos por lei.\n[…]\nNo sexto dia após o desastre, o IGAM confirmou que os rejeitos de minério atingiram o município de Pará de Minas, o maior em população no percurso do rio Paraopeba. Como o rio é a principal fonte de captação de água para abastecimento no município, a Agência Reguladora dos Serviços de Água e Esgoto de Pará de Minas (ARSAP) informou que o município conseguiria suprir o fornecimento de água inicialmente, pois existem três mananciais, Paraopebas, Paivas e Paciência."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brumadinho_dam_disaster",
        "situacao": "ok",
        "texto": "The Brumadinho dam disaster occurred on 25 January 2019 when a tailings dam at the Córrego do Feijão iron ore mine suffered a catastrophic failure. The dam, located 9 kilometres (5.6 mi) east of Brumadinho in Minas Gerais, Brazil, is owned by the mining company Vale, which was also involved in the Mariana dam disaster of 2015.\n[…]\nAccording to her assessment, the flow of waste through the valley of the Serra dos Dois Irmãos would cross the road that links Belo Horizonte to Brumadinho and continue toward the Paraopeba River valley, an important conservation area of the endangered Atlantic Forest and its endemic fauna. That meant the toxic waste would certainly destroy part of the forest, killing many wild animals until it reached the river.\n[…]\nFollowing assessment by state and federal health, environment, and agriculture agencies, the Minas Gerais Government announced on 31 January that raw water from the Paraopeba River, from its confluence with Ribeirão Ferro-Carvão to Pará de Mina, posed risks to human and animal health and should not be consumed. Tests demonstrated that twenty other municipalities were affected by the dam's collapse. The effects of the pollution impacted communities at least 120 km (75 mi) beyond Brumadinho.\n[…]\nNogueira, Elton P. (17 March 2021). \"Judicial rulings Minas Gerais State x Vale S. A. Brumadinho Dam judicial procedure\". Decisões Judiciais No Processo Entre O Ministério Público e Estado de Minas Gerais Contra a Vale S. A. Pelo Rompimento da Barragem de Brumadinho (Mg) (in Portuguese). Retrieved 19 November 2021.\n[…]\n\"The safety business: TÜV SÜD's role in the Brumadinho dam failure in Brazil\". ECCHR. Berlin: European Center for Constitutional and Human Rights. 17 October 2019. Retrieved 19 November 2021.\n[…]\nMedia related to Brumadinho dam disaster at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Acidente radiológico de Goiânia",
      "descricao": "Contaminação por césio-137 ocorrida em 1987, a partir de um aparelho de radioterapia abandonado."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os rejeitos radioativos do acidente com césio em Goiânia ficam guardados num depósito em que município vizinho?",
    "resposta": "Abadia de Goiás",
    "distratores": [
      "Anápolis",
      "Trindade",
      "Aparecida de Goiânia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Acidente_radiol%C3%B3gico_de_Goi%C3%A2nia",
      "https://pt.wikipedia.org/wiki/Abadia_de_Goi%C3%A1s"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Acidente_radiol%C3%B3gico_de_Goi%C3%A2nia",
        "situacao": "ok",
        "texto": "Acidente radiológico de Goiânia, amplamente conhecido como acidente com o césio-137, foi um grave episódio de contaminação por radioatividade ocorrido na cidade de Goiânia, Goiás, Brasil. A contaminação teve início em 13 de setembro de 1987, quando um aparelho de radioterapia foi encontrado dentro de uma clínica abandonada.\n[…]\nA limpeza produziu 13 500 quilogramas de lixo atômico, que necessitou ser acondicionado em 14 contêineres que foram totalmente lacrados. Dentro destes estão 1 200 caixas e 2 900 tambores, que permanecerão perigosos para o meio ambiente por 180 anos. Para armazenar esse lixo atômico, e atendendo às recomendações do IBAMA, da CNEN e da CEMAM, o Parque Estadual Telma Ortegal foi criado em Goiânia, hoje pertencente ao município de Abadia de Goiás.\n[…]\nNo início de 2006, a prefeitura de Goiânia resolveu revitalizar o antigo Mercado Popular, sendo reinaugurado em novembro de 2006 com a edição 2007 da Casa Cor Goiás, com a presença de autoridades municipais e estaduais. Em fevereiro de 2007, o Mercado Popular passou a ser um ponto turístico da cidade, por possuir uma feira gastronômica todas as sextas-feiras à noite, sempre acompanhada de música ao vivo.\n[…]\nO acidente foi descrito em vários documentários internacionais, além de filmes, programas de televisão, canções, artigos acadêmicos, teses, dissertações e livros. O acidente radioativo é mencionado no premiado curta-metragem Ilha das Flores, escrito e dirigido por Jorge Furtado. Em 1990, Roberto Pires dirigiu o filme Césio 137 - O Pesadelo de Goiânia, que faz uma dramatização do acidente.\n[…]\nUm episódio do programa Linha Direta, exibido em 2007, relembrou o acidente radioativo com Césio-137 em Goiânia.\n[…]\nImagem de satélite da montanha de concreto com o lixo radioativo, em Abadia de Goiás\n[…]\nCésio 137:  A tragédia radioativa do Brasil"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abadia_de_Goi%C3%A1s",
        "situacao": "ok",
        "texto": "Abadia de Goiás é um município brasileiro do estado de Goiás, Região Centro-Oeste do país. Pertence à Região Metropolitana de Goiânia, estando situado a cerca de 23 km do centro da capital Goiânia, partindo da praça civica, e a 12 km do anel viário da capital, se localizando a sudoeste da capital do estado.\n[…]\nDesmembrado de Aragoiânia, Goiânia, Guapó e Trindade, o território que hoje ocupa Abadia de Goiás foi emancipado em 1995 por meio de um plebiscito. No município estão armazenados os rejeitos do acidente radiológico de césio-137, os quais não apresentam nenhum nivel de radiação, conforme relata a CNEN.\n[…]\nElevado à categoria de município com a denominação de Abadia de Goiás, pela Lei Estadual nº 12799, de 27 de dezembro de 1995, desmembrado de Aragoiânia, Goiânia, Guapó e Trindade. Sede no Distrito de Abadia de Goiás, Constituído do Distrito Sede. Instalado em 1 de janeiro de 1997.\n[…]\nO município de Abadia de Goiás é regido por sua lei orgânica, promulgada em 18 de dezembro de 1997. A cidade pertence à 56ª zona eleitoral do estado de Goiás e possuía, em abril de 2020, 8 375 eleitores, de acordo com o Tribunal Superior Eleitoral (TSE), o que representa 0,188% do eleitorado goiano.\n[…]\nNa área da educação, o Índice de Desenvolvimento da Educação Básica (IDEB) obtido por alunos do 5º ano das escolas públicas de Abadia de Goiás foi de 6,1 em 2017, enquanto que do 9º ano foi de 4,6 (numa escala de avaliação que vai de nota 1 a 10). Em 2010, 97,2% das crianças entre sete e 14 anos estavam matriculadas em instituições de ensino. O município contava, em 2018, com 2 664 matrículas nas instituições de educação infantil e ensinos fundamental e médio da cidade.\n[…]\nLista de municípios de Goiás\n[…]\nLista de municípios do Brasil\n[…]\n«Página da Rádio Sol Fm de Abadia de Goiás»"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Organização dos Países Exportadores de Petróleo",
      "descricao": "Organização intergovernamental de países produtores de petróleo, fundada em 1960 para coordenar suas políticas petrolíferas."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A Opep, organização dos países exportadores de petróleo, foi fundada em 1960 em que capital do Oriente Médio?",
    "resposta": "Bagdá",
    "distratores": [
      "Riad",
      "Teerã",
      "Cidade do Kuwait"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/OPEC",
      "https://pt.wikipedia.org/wiki/Organiza%C3%A7%C3%A3o_dos_Pa%C3%ADses_Exportadores_de_Petr%C3%B3leo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/OPEC",
        "situacao": "ok",
        "texto": "The Organization of the Petroleum Exporting Countries (OPEC  OH-pek) is an intergovernmental cartel enabling the co-operation of leading oil-producing and oil-dependent countries in order to collectively influence the global oil market and maximize profit. It was founded on 14 September 1960 in Baghdad by the first five members: Iran, Iraq, Kuwait, Saudi Arabia and Venezuela.\n[…]\nInternational commodity agreements covering products such as coffee, sugar, tin and more recently oil (OPEC: Organisation of Petroleum Exporting Countries) are examples of international cartels which have publicly entailed agreements between different national governments.\n[…]\nAn organization set up in 1960 to coordinate petroleum policies among its member countries, initially with the aim of securing a regular supply to consuming countries at a price that gave a fair return on capital investment.\n[…]\nDespite strong US opposition: \"Together with Arab and non-Arab producers, Saudi Arabia formed the Organization of Petroleum Export Countries (OPEC) to secure the best price available from the major oil corporations.\"\n[…]\nAustria was keen to attract international organizations and offered attractive terms to the OPEC.\n[…]\nIn October 1973, the Organization of Arab Petroleum Exporting Countries (OAPEC, consisting of the Arab majority of OPEC plus Egypt and Syria) declared significant production cuts and an oil embargo against the United States and other industrialized nations that supported Israel in the Yom Kippur War. A previous embargo attempt was largely ineffective in response to the Six-Day War in 1967.\n[…]\nQatar left OPEC on 1 January 2019, after joining the organization in 1961, to focus on natural gas production, of which it is the world's largest exporter in the form of liquified natural gas (LNG).\n[…]\nOrganization of Arab Petroleum Exporting Countries\n[…]\nList of intergovernmental organizations"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Organiza%C3%A7%C3%A3o_dos_Pa%C3%ADses_Exportadores_de_Petr%C3%B3leo",
        "situacao": "ok",
        "texto": "Organização dos Países Exportadores de Petróleo (OPEP ou, pelo seu nome em inglês, OPEC) é uma organização intergovernamental de 13 nações, fundada em 15 de setembro de 1960 em Bagdá pelos cinco membros fundadores (Irã, Iraque, Kuwait, Arábia Saudita e Venezuela), com sede desde 1965 em Viena, na Áustria.\n[…]\nNo mês seguinte, de 10 a 14 de setembro de 1960, a Conferência de Bagdá foi realizada por iniciativa de Tariki, Pérez Alfonzo e do primeiro-ministro iraquiano Abd al-Karim Qasim, cujo país havia faltado ao congresso de 1959. Representantes dos governos do Irã, Iraque, Kuwait, Arábia Saudita e Venezuela se reuniram em Bagdá para discutir formas de aumentar o preço do petróleo bruto produzido por seus países e formas de responder às ações unilaterais das MOCs.\n[…]\nApesar da forte oposição dos EUA: \"Juntamente com produtores árabes e não árabes, a Arábia Saudita formou a Organização dos Países Exportadores de Petróleo (OPEP) para garantir o melhor preço disponível das grandes corporações petrolíferas.\"\n[…]\nOs membros do Oriente Médio originalmente pediram que a sede da OPEP fosse em Bagdá ou Beirute. A Venezuela argumentou a favor de um local neutro e, assim, a organização escolheu Genebra, Suíça. Em 1º de setembro de 1965, a OPEP mudou-se para Viena, Áustria, depois que a Suíça se recusou a estender privilégios diplomáticos. Na época, a Suíça tentava reduzir sua população estrangeira e a OPEP foi o primeiro órgão intergovernamental a deixar o país devido às restrições aos estrangeiros.\n[…]\nRelatórios subsequentes de 2022 indicam que os países membros da OPEP eram então responsáveis por cerca de 38% da produção total de petróleo bruto mundial. Estima-se que estes países detenham 79,5% das reservas comprovadas de petróleo do globo, com o Oriente Médio representando 67,2% das reservas da OPEP."
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Tetra Pak",
      "descricao": "Empresa e tipo de embalagem cartonada para alimentos líquidos, como o leite longa vida, criada por Ruben Rausing."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A Tetra Pak, criadora das caixinhas de leite longa vida, foi fundada em que país europeu?",
    "resposta": "Suécia",
    "distratores": [
      "Dinamarca",
      "Alemanha",
      "Holanda"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tetra_Pak"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tetra_Pak",
        "situacao": "ok",
        "texto": "Tetra Pak is a Swedish multinational food packaging and processing company headquartered in Switzerland. The company offers packaging, filling machines and processing for dairy, beverages, cheese, ice cream and prepared food, including distribution tools like accumulators, cap applicators, conveyors, crate packers, film wrappers, line controllers and straw applicators.\n[…]\nJönsson perceived the PET bottle as Tetra Pak's biggest threat in the European market at the time. The Norwegian company Elopak/Pure-Pak produces similar style carton packages and has historically been Tetra Pak's principal competitor. The Chinese packaging company Greatview has begun challenging Tetra Pak, both in the Chinese market and in Europe.\n[…]\nUsed Tetra Pak packages have been recycled as construction material in design projects, with varying results.\n[…]\nIn 2018, Tetra Pak signed an agreement with the environmental services company Veolia \"to recycle all the components of used beverage cartons collected within the EU by 2025.\" Tetra Pak has also partnered with the Certified Renovated Equipment organization to refurbish old equipment so it can be resold as part of a circular economy initiative.\n[…]\nTetra Pak has occasionally been subject to controversy, most notably regarding its near-monopoly position on certain markets for many years. Especially attempts at mergers have been subject to scrutiny. Its merger with French PET-production company Sidel in 2001 drew anti-competition allegations from the European Commission. The court case was drawn out for many years and twice appealed to the European Court of First Instance before the European Court of Justice ruled in favour of Tetra Laval.\n[…]\nIn 2004, Tetra Pak was accused of using its near-monopoly in China, where it owned 95 percent of the market for aseptic carton packaging. The allegations were contested by Tetra Pak."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tetra_Pak",
        "situacao": "ok",
        "texto": "A Tetra Pak é uma multinacional sueca especializada em embalagens e processamento de alimentos, com sede na Suíça. A empresa oferece soluções de embalagens, máquinas de enchimento e processamento para laticínios, bebidas, queijos, sorvetes e alimentos preparados, além de ferramentas de distribuição, como acumuladores, aplicadores de tampas, transportadores, embaladores de caixas, embaladores com f\n[…]\nEm 1951, já de volta à Suécia, Dr. Ruben Rausing idealizou a embalagem, em formato de tetraedro (quatro faces, triangular, com base horizontal). O primeiro produto da Tetra Pak foi revolucionário, em cartão de papel, usado para guardar e transportar leite. Esta embalagem foi chamada de Tetra Classic. Rausing começou a idealizar o desenho (este projeto) em 1943. Em 1950 havia criado técnicas de fabricação de cartões herméticos, usando um sistema de cartolina forrada em plástico.\n[…]\nEm 1952, a empresa já comercializava sua primeira máquina de embalagens cartonadas. O creme de leite foi o primeiro produto a ser embalado pela Tetra Pak. Três anos depois as embalagens da Tetra Pak começaram a acondicionar leite pasteurizado. A embalagem tipo longa vida, no entanto, seria criada apenas em 1961. Foi neste ano que Dr.\n[…]\nHoje, a Tetra Pak está presente em mais de 165 países - é uma organização global que produz sistemas integrados para processamento, embalagem, distribuição e embalagens cartonadas para alimentos como leite e derivados, sucos, chás, derivados de tomate, cremes, molhos e etc.\n[…]\nA Tetra Pak é a maior fornecedora do mundo em embalagens cartonadas (Tetra Brik) para o leite, sopas, sucos e outros produtos líquidos (alimentares). A empresa também fabrica equipamentos usados no envase de alimentos e o seu processamento. Oferece uma vasta gama de alternativas de embalagens, desde embalagens cartonadas às garrafas de plástico de PET e EBM.\n[…]\nReciclagem de embalagens longa vida",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Angra 1",
      "descricao": "Primeira usina nuclear brasileira, unidade da central de Angra dos Reis, construída com tecnologia americana."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A usina nuclear Angra 1, primeira do Brasil, foi construída com um reator de que empresa americana?",
    "resposta": "Westinghouse",
    "distratores": [
      "General Electric",
      "Babcock e Wilcox",
      "DuPont"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Angra_1",
      "https://en.wikipedia.org/wiki/Angra_Nuclear_Power_Plant"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Angra_1",
        "situacao": "ok",
        "texto": "Central Nuclear Almirante Álvaro Alberto (CNAAA) é o complexo nuclear da praia de Itaorna, em Angra dos Reis, que reúne as usinas Angra 1 e Angra 2, em operação, e Angra 3, em construção. As instalações pertencem à Eletronuclear, empresa controlada pela estatal ENBPar desde a capitalização da Eletrobras em 2022. A central recebeu o nome do almirante Álvaro Alberto da Mota e Silva, ligado à formaçã\n[…]\nAngra 1 foi ligada à rede elétrica em 1982 e iniciou a operação comercial em 1985. A usina foi fornecida pela Westinghouse e operada inicialmente por Furnas. Problemas em equipamentos limitaram a produção em seus primeiros anos, até serem resolvidos em meados da década de 1990. Em 1987, a Assembleia Nacional Constituinte solicitou informações ao Executivo sobre uma ação judicial de Furnas contra a Westinghouse, relacionada aos equipamentos fornecidos para Angra 1.\n[…]\nAngra 2 iniciou a operação comercial em fevereiro de 2001, com tecnologia alemã Siemens/KWU desenvolvida no âmbito do Acordo Nuclear Brasil-Alemanha. Em seu primeiro ano, alcançou fator de capacidade de 91%.\n[…]\nAngra 1 foi a primeira usina nuclear do Brasil. Sua construção começou em 1972 na Praia de Itaorna, em Angra dos Reis, e a Comissão Nacional de Energia Nuclear (CNEN) concedeu a licença para operação comercial em dezembro de 1984. A usina usa um reator de água pressurizada, no qual água leve desmineralizada resfria o núcleo. Fabricada pela Westinghouse, é operada pela Eletronuclear e tem potência elétrica bruta nominal de 640 MW.\n[…]\nAngra 2 foi a primeira usina construída a partir do Acordo nuclear Brasil-Alemanha, firmado em 1975. A Construtora Norberto Odebrecht, atual OEC, foi contratada para as obras civis. O estaqueamento começou em 1976 e a construção do prédio do reator em setembro de 1981. A partir de 1983, a redução dos recursos financeiros desacelerou o empreendimento.\n[…]\nIndústrias Nucleares do Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Angra_Nuclear_Power_Plant",
        "situacao": "ok",
        "texto": "Angra Nuclear Power Plant is Brazil's only nuclear power plant. It is located at the Central Nuclear Almirante Álvaro Alberto (CNAAA) on the Itaorna Beach in Angra dos Reis, Rio de Janeiro. It consists of two pressurized water reactors (PWR), Angra I, with a net output of 609 MWe, first connected to the power grid in 1985 and Angra II, with a net output of 1,275 MWe, connected in 2000.\n[…]\nWork on a third reactor, Angra III, with a projected output of 1,245 MWe, began in 1984 but was halted in 1986. Work started again on 1 June 2010 for entry into service in 2015 and later delayed into the 2020s. Construction resumed in November 2022.\n[…]\nAngra I was purchased from Westinghouse of the USA (its sister power plant is Krško Nuclear Power Plant in Slovenia). The balance of plant design was subcontracted to Gibbs and Hill (USA) in association with PROMON Engenharia S.A. and construction to Brasileira de Engenharia S.A.\n[…]\nThe development of Angra III began in 1984 as a Siemens/KWU pressurized water reactor but was halted in 1986. About 70% of the plant's equipment was purchased in 1985 but has been in storage ever since. In June 2007, restarting of work on was approved by the National Council for Energy Policy but was halted again. On 31 May 2010, the National Nuclear Energy Commission granted a licensee for construction of the third reactor.\n[…]\nConstruction of the reactor, which has a capacity of 1,350 MWe, begun on 1 June 2010 and was predicted to be operational by 2018.\n[…]\nIn November 2021, the Brazilian government rescheduled the conclusion of Angra III for 2026–27, and announced the construction of a fourth nuclear power plant, to be inaugurated in 2031. In February 2022, the consortium that will complete the reactor agreed a contract, which is planned to enable reactor operations to start in 2026.\n[…]\nNuclear activities in Brazil\n[…]\nAngra-3 PWR Nuclear, Brazil"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Petrobras",
      "descricao": "Empresa estatal brasileira de petróleo, criada em 1953 no governo Getúlio Vargas."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1953, que presidente sancionou a lei que criou a Petrobras?",
    "resposta": "Getúlio Vargas",
    "distratores": [
      "Juscelino Kubitschek",
      "Eurico Gaspar Dutra",
      "Café Filho"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Petrobras",
      "https://en.wikipedia.org/wiki/Petrobras"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Petrobras",
        "situacao": "ok",
        "texto": "Petróleo Brasileiro S.A. (Petrobras; pronunciado Petrobrás) é uma empresa de capital aberto, cujo acionista majoritário é o Governo do Brasil (União), sendo, portanto, uma empresa estatal de economia mista. Com sede no Rio de Janeiro, opera atualmente em seis países, no segmento de energia, prioritariamente nas áreas de exploração, produção, refino, comercialização e transporte de petróleo, gás na\n[…]\nA empresa foi instituída pela Lei nº 2 004, sancionada pelo então presidente da República, Getúlio Vargas, em 3 de outubro de 1953. A lei dispunha sobre a política nacional do petróleo, definindo as atribuições do Conselho Nacional do Petróleo (CNP), estabelecendo o monopólio estatal do petróleo e a criação da Petrobras.\n[…]\nOs militares, que passaram a ter participação destacada na política brasileira desde o Tenentismo e no triunfo da Aliança Liberal liderada por Getúlio Vargas em 1930, dedicaram muitos dos seus esforços ao desenvolvimento da indústria do petróleo no Brasil e seus oficiais exerceram a Presidência do Conselho Nacional do Petróleo e com a participação dos setores nacionalistas dos militares na criação da Petrobras durante a campanha O petróleo é nosso.\n[…]\nDepois de exercer por mais de 40 anos, em regime de monopólio, o trabalho de exploração, produção, refino e transporte do petróleo no Brasil, a Petrobras passou a competir com outras empresas estrangeiras e nacionais em 1997, quando o presidente Fernando Henrique Cardoso sancionou a Lei N° 9.478, de 6 de agosto de 1997.\n[…]\nREPAR — Refinaria Presidente Getúlio Vargas — Araucária (Paraná) - 207 563 bpd\n[…]\nEm 28 de novembro de 2013, uma explosão seguida de incêndio na unidade de destilação da Refinaria Presidente Getúlio Vargas (Repar) interrompeu parte das atividades da refinaria. Não houve feridos.\n[…]\nLista de presidentes da Petrobras\n[…]\nMonopólio estatal do petróleo no Brasil\n[…]\nPetrobras no Twitter\n[…]\nCanal de Petrobras no YouTube"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Petrobras",
        "situacao": "ok",
        "texto": "Petróleo Brasileiro S.A., better known by and trading as the portmanteau Petrobras (Portuguese pronunciation: [ˌpɛtɾoˈbɾas, pet-]), is a Brazilian majority state-owned multinational corporation in the petroleum industry, which is headquartered in Rio de Janeiro. The company's name translates to Brazilian Petroleum Corporation.\n[…]\nPetrobras was created in 1953 under the government of Brazilian president Getúlio Vargas with the slogan \"The Oil is Ours\" (Portuguese: \"O petróleo é nosso\"). It was given a legal monopoly in Brazil. In 1953, Brazil produced only 2,700 barrels of oil per day. In 1961, the company's REDUC refinery began operations near Rio de Janeiro, and in 1963, its Cenpes research center opened in Rio de Janeiro; it remains one of the world's largest centers dedicated to energy research.\n[…]\nREPAR – Presidente Getúlio Vargas Refinery – Araucária (Paraná) – 207,563 bpd\n[…]\n(PUDSA), by indirect subsidiary (Petrobras Uruguay Sociedad Anónima de Inversión -PUSAI), in Uruguay, to Mauruguay S.A., an indirect wholly owned subsidiary of Disa Corporación Petrolífera S.A. (DISA).\n[…]\nIn January 2020, Petroleo Brasileiro stated that it ended all of its business in Africa after completing the sale of a 50% stake in Petrobras Oil & Gas BV.\n[…]\nOn 8 March 2016, Marcelo Odebrecht, CEO of Odebrecht and grandson of the company's founder, was sentenced to 19 years in prison after being convicted of paying more than $30 million in bribes to Petrobras executives. Eduardo Cunha, president of the Chamber of Deputies from 2015 to 2016, was convicted of taking approximately $40 million in bribes and hiding funds in secret bank accounts and sentenced to 15 years in prison.\n[…]\nPetrobras sponsored the Brazilian Série A from 2009 to 2012.\n[…]\nThe sauropod dinosaur Petrobrasaurus is named after the company.\n[…]\nPetrobras' News Agency\n[…]\nPetrobras Magazine"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Capitão Planeta e os Planetários",
      "descricao": "Desenho animado ambientalista americano dos anos 1990, em que cinco jovens com anéis mágicos invocam o herói Capitão Planeta."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que magnata americano da televisão, fundador da CNN, idealizou o desenho ambientalista Capitão Planeta?",
    "resposta": "Ted Turner",
    "distratores": [
      "Rupert Murdoch",
      "Michael Eisner",
      "Steven Spielberg"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Captain_Planet_and_the_Planeteers",
      "https://en.wikipedia.org/wiki/Ted_Turner"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Captain_Planet_and_the_Planeteers",
        "situacao": "ok",
        "texto": "Captain Planet and the Planeteers, commonly referred to as simply Captain Planet, is an American animated environmentalist superhero television series created by Barbara Pyle and Ted Turner and developed by Pyle, Nicholas Boxer, Thom Beers, Andy Heyward, Robby London, Bob Forward, and Cassandra Schafausen. The series was produced by Turner Program Services and DIC Enterprises and broadcast on TBS \n[…]\nIn 1993, the show switched production companies to Hanna-Barbera Cartoons, which had been acquired by Turner in 1991. The title changed to The New Adventures of Captain Planet. During this time, it aired as part of TBS'  Sunday Morning in Front of the TV  block, alongside other H-B series SWAT Kats: The Radical Squadron and 2 Stupid Dogs. The revamped series revealed more of the past of each of the characters and expanded on them dramatically.\n[…]\nIn 2007, CPF acquired the rights to exhibit previous episodes of Captain Planet and the Planeteers online and on-air, thus \"allowing this valuable resource to reach out and educate the children of today!\" As of 2017, the organization's board is chaired by Laura Turner Seydel, daughter of Ted Turner; the board includes Barbara Pyle.\n[…]\nShout! Factory under license from Turner and Warner Home Video released a DVD set of the complete first season in the U.S. on April 19, 2011. The DVD packaging is made of 100% recycled paper.\n[…]\nMultiple attempts have been made to create a film adaptation of the series. The first occurred in 1996 when Boxer and Pyle wrote a film adaptation of Captain Planet originally titled Planet. Five years later, Michael Reaves revised the concept as Dark Planet or Planet. The storyline was darker than the series, and set in a post-apocalyptic time period. However, the script was lost when Turner and Warner Bros. merged in 1996. The film reached the design stage before it was abandoned.\n[…]\nCaptain Planet and the Planeteers at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ted_Turner",
        "situacao": "ok",
        "texto": "Robert Edward Turner III (November 19, 1938 – May 6, 2026) was an American businessman, television producer, media proprietor, and philanthropist. He founded CNN, the first 24-hour cable news channel, and WTBS, which pioneered the superstation concept in cable television.\n[…]\nTurner produced the television series Captain Planet and the Planeteers and its later sequel series with Captain Planet as the featured character.\n[…]\nTEI works closely with Turner's philanthropic and charitable interests, including the founding and ongoing operations of the United Nations Foundation, Nuclear Threat Initiative, Turner Foundation, Captain Planet Foundation, and the Turner Endangered Species Fund. Turner Enterprises is headquartered in the Turner Building (formerly the Bona Allen Office Building) in Atlanta, Georgia, also home to the Ted's Montana Grill restaurant chain, Ted Turner Reserves, and Turner Renewable Energy.\n[…]\nIn 1991, some Native Americans and Native advocacy groups expressed anger after Turner and his then-wife Jane Fonda were shown on national television doing a \"tomahawk chop\" team cheer during the World Series. Subsequently, Fonda pledged to refrain from the cheer, while Turner said that he had been unaware of the reaction it would cause.\n[…]\nFollowing his death, Turner was eulogized by The New York Times as the creator of the \"24-Hour News Cycle\" while also regarding him as one of the most important figures in media history and describing his business career as having had an impact on American culture. In their obituary, CNN also called Turner a \"pioneer\" of cable television who revolutionized television news. The BBC noted that Turner's career was a \"central part of the media landscape\". U.S.\n[…]\nTed Turner at The Interviews: An Oral History of Television"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Capit%C3%A3o_Planeta",
        "situacao": "ok",
        "texto": "Capitão Planeta (no original em inglês Captain Planet And The Planeteers) é um super-herói estadunidense-canadense criado no começo da década de 1990 pelo empresário americano Ted Turner como uma forma de alerta e interação para com seus telespectadores, que em sua maioria são crianças e adolescentes.\n[…]\nCapitão Planeta (Captain Planet): o super-herói da série, o Capitão Planeta surge após a combinação dos poderes dos cinco Protetores - terra, fogo, vento, água e coração - com sua frase introdutória \"Pela união de seus poderes, eu sou o Capitão Planeta!\". Ele obtém forças a partir dos elementos naturais e enfraquece ao ser exposto a poluentes de qualquer tipo.\n[…]\nEstes são os que fazem o mal, ou seja, espalham poluição e destruição pelo mundo, portanto sendo inimigos diretos do Capitão Planeta e os Protetores.\n[…]\nCapitão Poluição (Captain Pollution): este \"doppelgänger corrupto\" é um tipo de contraparte poluída do Capitão Planeta, combinando os poderes poluentes dos anéis malignos criados por Blight para ela mesma, Dr. Duke Nukem, Matreiro, Verminoso Escória e Looten Plunder - ele tem sua própria frase introdutória \"Pela união de seus poderes poluidores, eu sou o Capitão Poluição!\", contrária ao Capitão Planeta.\n[…]\nEm uma inversão plena ao herói, o Capitão Poluição se fortalece com poluidores tóxicos e enfraquece com os elementos puros do planeta. Como o Planeta, ele também tem sua frase-tema, mas invertida: \"O poder da poluição é de vocês!\"Representa: a destruição global.\n[…]\nEm outubro de 2016 foi anunciada uma parceria entre o ator Leonardo DiCaprio e a Paramount Pictures para produzir um filme baseado no desenho.\n[…]\nO Capitão planeta fez uma participação especial em um episódio de OK K.O.\n[…]\nCapitão Planeta no IMDb\n[…]\nCapitão Planeta no TV.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Painel solar",
      "descricao": "Equipamento com células fotovoltaicas que converte luz solar em eletricidade."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A grande maioria das células dos painéis solares é feita de que elemento químico, obtido da areia de quartzo?",
    "resposta": "Silício",
    "distratores": [
      "Cobre",
      "Lítio",
      "Germânio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Solar_cell",
      "https://en.wikipedia.org/wiki/Crystalline_silicon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Solar_cell",
        "situacao": "ok",
        "texto": "A solar cell, also known as a photovoltaic cell (PV cell), is an electronic device that converts the energy of light directly into electricity by using the photovoltaic effect. It is a type of photoelectric cell, a device whose electrical characteristics (such as current, voltage, or resistance) vary when it is exposed to light. Individual solar cell devices are often the electrical building block\n[…]\nPhotonic front contacts for light management can improve the perovskite cells' performance, via enhanced broadband absorption, while allowing better operational stability due to protection against the harmful high-energy (above Visible) radiation. The inclusion of the toxic element lead in the most efficient perovskite solar cells is a potential problem for commercialisation.\n[…]\nResearch has been conducted into structuring the encapsulant to provide further collection of light. Such encapsulants have included roughened glass surfaces, diffractive elements, prism arrays, air prisms, v-grooves, diffuse elements, as well as multi-directional waveguide arrays. Prism arrays show an overall 5% increase in the total solar energy conversion.\n[…]\nSolar cell manufacturing techniques\n[…]\nSolar Energy Laboratory at University of Southampton\n[…]\nGreen, M. A.; Emery, K.; Hishikawa, Y.; Warta, W. (2010). \"Solar cell efficiency tables (version 36)\". Progress in Photovoltaics: Research and Applications. 18 (5): 346. doi:10.1002/pip.1021.\n[…]\n\"Electric Energy From Sun Produced by Light Cell\" Popular Mechanics, July 1931 article on various 1930s research on solar cells\n[…]\nWong, Lydia H.; Zakutayev, Andriy; Major, Jonathan D.; Hao, Xiaojing; Walsh, Aron; Todorov, Teodor K.; Saucedo, Edgardo (2019). \"Emerging inorganic solar cell efficiency tables (Version 1)\". Journal of Physics: Energy. 1 (3): 032001. Bibcode:2019JPEn....1c2001W. doi:10.1088/2515-7655/ab2338. hdl:10044/1/70500. S2CID 250871748."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Crystalline_silicon",
        "situacao": "ok",
        "texto": "Crystalline silicon or (c-Si) is the crystalline forms of silicon, either polycrystalline silicon (poly-Si, consisting of small crystals), or monocrystalline silicon (mono-Si, a continuous crystal). Crystalline silicon is the dominant semiconducting material used in photovoltaic technology for the production of solar cells. These cells are assembled into solar panels as part of a photovoltaic syst\n[…]\nBoth-sides-contacted silicon solar cells as of 2021: 26% and possibly above.\n[…]\nThis tandem assembly of solar cells allows one to obtain a thin-film material with a bandgap of around 1.12 eV (the same as single-crystal silicon) compared to the bandgap of amorphous silicon of 1.7–1.8 eV bandgap. Tandem solar cells are then attractive since they can be fabricated with a bandgap similar to single-crystal silicon but with the ease of amorphous silicon.\n[…]\nProtocrystalline Si also has a relatively low absorption near the band gap owing to its more ordered crystalline structure. Thus, protocrystalline and amorphous silicon can be combined in a tandem solar cell where the top layer of thin protocrystalline silicon absorbs short-wavelength light whereas the longer wavelengths are absorbed by the underlying a-Si substrate.\n[…]\nFlexible solar cells have been a topic of interest for less conspicuous-integrated power generation than solar power farms. These modules may be placed in areas where traditional cells would not be feasible, such as wrapped around a telephone pole or cell phone tower. In this application, a photovoltaic material may be applied to a flexible substrate, often a polymer. Such substrates cannot survive the high temperatures experienced during traditional annealing.\n[…]\nPolymer-backed solar cells are of interest for seamlessly integrated power production schemes that involve placing photovoltaics on everyday surfaces.\n[…]\nList of types of solar cells"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A9lula_solar",
        "situacao": "ok",
        "texto": "Uma célula solar ou célula fotovoltaica é um dispositivo elétrico de estado sólido capaz de converter a luz proveniente do Sol (energia solar) diretamente em energia elétrica por intermédio do efeito fotovoltaico.\n[…]\nA segunda geração de materiais fotovoltaicos está baseada no uso de filmes finos de semicondutores. A vantagem  de utilizar estes filmes é a de reduzir a quantidade de materiais necessárias para as produzir, bem como de custos. Existem diferentes tecnologias e materiais semicondutores em investigação ou em produção de massa, como o silício amorfo, silício policristalino ou microcristalino, telureto de cádmio e  célula solar CIGS.\n[…]\nTipicamente, as eficiências das células solares de filme fino são baixas quando comparadas com as células tradicionais de silício cristalino, mas os custos de manufatura são também mais baixos, pelo que se pode atingir um preço de instalação mais reduzido por watt. Outra vantagem da reduzida massa é o menor suporte necessário quando se colocam os painéis nos telhados e permite arrumá-los e dispô-los em materiais flexíveis, como os têxteis, plásticos ou integração direta nos edifícios.\n[…]\nSilício cristalino (c-Si) - É a tecnologia mais empregada no mercado atualmente, com uma participação de 95% do mercado de células fotoelétricas. Atualmente apresenta um rendimento de 15 a 21% em suas células; painéis solares feitos de células de silício cristalino tem rendimento de 13 a 17%;\n[…]\nSilício amorfo (a-Si) - Participação de cerca de 3,7% do mercado de células fotoelétricas, tem rendimento de cerca de 7%;\n[…]\nCélula solar CIGS\n[…]\nCélula solar polimérica\n[…]\nCélula solar sensibilizada corante\n[…]\nEnergia solar",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Incêndio florestal",
      "descricao": "Fogo não planejado e descontrolado em vegetação combustível, como florestas e matas."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Para um incêndio florestal existir, o chamado triângulo do fogo precisa de combustível, calor e que terceiro elemento?",
    "resposta": "Oxigênio",
    "distratores": [
      "Vento",
      "Umidade",
      "Luz solar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fire_triangle",
      "https://pt.wikipedia.org/wiki/Tri%C3%A2ngulo_do_fogo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fire_triangle",
        "situacao": "ok",
        "texto": "The fire triangle or combustion triangle is a simple model for understanding the necessary ingredients for most fires.\n[…]\nThe triangle illustrates the three elements a fire needs to ignite: heat, fuel, and an oxidizing agent (usually oxygen). A fire naturally occurs when the elements are present and combined in the right mixture. A fire can be prevented or extinguished by removing any one of the elements in the fire triangle. For example, covering a fire with a fire blanket blocks oxygen and can extinguish a fire.\n[…]\nCombustion is a chemical reaction that feeds a fire more heat and allows it to continue. Once a fire has started, the resulting exothermic chain reaction sustains the fire and allows it to continue until or unless at least one of the elements of the fire is blocked:\n[…]\ndry sand) must be used to break the chain reaction of metallic combustion.\n[…]\nIn the same way, as soon as one of the four elements of the tetrahedron is (entirely) removed, combustion stops.\n[…]\nTo stop a combustion reaction, one of the three elements of the fire triangle must be removed.\n[…]\nAt the smallest scale, the combustion fire triangle, individual fuel particles are ignited once at a critical temperature, and fire transfers energy to the nearest surroundings. Combustion events range on the scale of several seconds to a couple of days and their effects are monitored at the quadrant scale. The largest scale, in contrast, describes the fire regime concept. Global climate change drives many of the factors involved in the 'wildfire' and the 'fire regime' triangles."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tri%C3%A2ngulo_do_fogo",
        "situacao": "ok",
        "texto": "O triângulo do fogo é a representação dos três elementos necessários para que haja uma combustão. Esses elementos são: o combustível, que fornece energia para a queima; o comburente, que é a substância que reage quimicamente com o combustível; e o calor, que é necessário para iniciar a reação entre combustível e comburente. Hoje em dia usa-se também o Tetraedro do Fogo, no qual a reação em cadeia "
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Parque Nacional do Itatiaia",
      "descricao": "Parque nacional criado em 1937 entre os estados do Rio de Janeiro e de Minas Gerais."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que pico, um dos pontos mais altos do Sudeste brasileiro, fica dentro do Parque Nacional do Itatiaia?",
    "resposta": "Pico das Agulhas Negras",
    "distratores": [
      "Pico da Bandeira",
      "Pico do Marumbi",
      "Pedra Azul"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Parque_Nacional_do_Itatiaia",
      "https://pt.wikipedia.org/wiki/Pico_das_Agulhas_Negras"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_do_Itatiaia",
        "situacao": "ok",
        "texto": "O Parque Nacional do Itatiaia é uma unidade de conservação brasileira de proteção integral da natureza localizada no maciço do Itatiaia, na serra da Mantiqueira, entre os estados do Rio de Janeiro e Minas Gerais. Itatiaia é o parque nacional mais antigo do Brasil, tendo sido criado em 14 de junho de 1937, numa área de 11 943 hectares (119 km²), que antes de ser adquirida pela Fazenda Federal, em 1\n[…]\nNo interior do parque encontram-se alguns dos picos mais altos do Brasil, beirando os 2 800 m de altitude. A fauna e a flora do parque são bastante diversificadas, devido principalmente à diferença de altitude de seu relevo e ao clima variado. Itatiaia é administrado atualmente pelo Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio). A BR-485, que atravessa o parque, tem o seu ponto culminante a 2 460 m de altitude no seu interior e é assim considerada a estrada mais alta do Brasil.\n[…]\nNa primeira metade do século XX, o INMET (Instituto Nacional de Meteorologia) tinha uma estação meteorológica dentro do parque, provando o clima frio da região. A partir de junho de 2013, uma nova estação meteorológica automática de última geração foi instalada a uma altitude de 2451 metros pelo fórum Brasil Abaixo de Zero.[carece de fontes]?\n[…]\nO Pico do Itatiaiaçu localizado nas Agulhas Negras com 2 791,55 m de altitude.\n[…]\nO pico da Montanha do Couto o segundo ponto mais alto do parque com 2 680,99 m de altitude.\n[…]\nA Pedra do Sino de Itatiaia, o terceiro ponto mais alto do parque com 2 670 m de altitude.\n[…]\nJorge Pádua, Maria Tereza e Coimbra Filho, Adelmar F. - Os Parques Nacionais do Brasil. Instituto de Cooperação Iberoamericana. Madrid. José Olympio Editora, 1989. ISBN 84-85389-19-0, pág. 122 a 129\n[…]\nLeite, Helton Perillo Ferreira - Planalto do Itatiaia - Região das Agulhas Negras. Rio de Janeiro. Montanhar / Publit, 2007. ISBN 978-85-7773-076-6, 232 páginas."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pico_das_Agulhas_Negras",
        "situacao": "ok",
        "texto": "O pico das Agulhas Negras, com 2 790,94 m de altitude, é o ponto culminante do estado do Rio de Janeiro, o terceiro ponto mais alto do estado de Minas Gerais, e o quinto mais alto do Brasil.\n[…]\nO pico das Agulhas Negras está localizado na parte alta do Parque Nacional de Itatiaia, no maciço de mesmo nome, parte da serra da Mantiqueira, entre o município mineiro de Bocaina de Minas e os municípios fluminenses de Itatiaia e Resende.\n[…]\nO rio Preto, que tem 222 km de extensão e serve de divisa natural entre os estados do Rio de Janeiro e de Minas Gerais, tem sua nascente no pico das Agulhas Negras. No interior do parque, o mais antigo do Brasil, existem várias outras montanhas com altitude superior aos dois mil metros.\n[…]\nA altitude do pico das Agulhas Negras foi então corrigida oficialmente para 2790,94 m, ou 61 cm menos que a medição de 2004.\n[…]\nO acesso ao pico das Agulhas Negras é feito pela rodovia BR-354, que liga a Via Dutra no município de Resende (Rio de Janeiro) à cidade de Itamonte (Minas Gerais), através de um passo de montanha denominado Garganta do Registro. No alto do passo, do lado mineiro, poucos metros após a divisa, começa a rodovia BR-485, que leva à parte alta do Parque Nacional de Itatiaia.\n[…]\nDo cume do pico das Agulhas Negras é possível avistar vários pontos da região, como o morro do Couto, a segunda montanha mais alta do parque. Também podem ser avistadas a Represa do Funil, a serra Fina, a região de Visconde de Mauá, a vasta região do Vale do Paraíba, onde estão localizadas as cidades do eixo mais populoso do Brasil, o eixo Rio-São Paulo, e o rio Paraíba, do qual origina o nome do vale.\n[…]\nAcademia Militar das Agulhas Negras\n[…]\nParque Nacional de Itatiaia"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Acidente nuclear de Chernobyl",
      "descricao": "Explosão do reator 4 da usina nuclear de Chernobyl, na então União Soviética, em abril de 1986."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em abril de 1986, na usina de Chernobyl, qual dos reatores explodiu?",
    "resposta": "O reator número quatro",
    "distratores": [
      "O reator número um",
      "O reator número dois",
      "O reator número três"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chernobyl_disaster"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chernobyl_disaster",
        "situacao": "ok",
        "texto": "On 26 April 1986, reactor 4 of the Chernobyl Nuclear Power Plant, located near Pripyat in the Ukrainian SSR of the Soviet Union, exploded. The accident resulted in dozens of direct deaths and a major release of radioactive material into the environment, causing widespread health effects and requiring the establishment of the Chernobyl exclusion zone. The response involved more than 500,000 personn\n[…]\nFrom May 5, 1986, workers from NIKIET and the V. G. Khlopin Radium Institute collaborated under the name Field Integrated Scientific and Technical Brigade No. 9 (PKNTB-9) to work at the Chernobyl Nuclear Power Plant, led by G. S. Sinitsyna and S. S. Kovalenko. Their job was to conduct dosimetric surveys of Unit 3, Unit 4, the vent block, and the deaerator block, as well as assessing the damage and finding nuclear fuel.\n[…]\nThe government cover-up of the Chernobyl disaster was a catalyst for glasnost, which \"paved the way for reforms leading to the Soviet collapse.\" Numerous structural and construction quality issues, as well as deviations from the original plant design, had been known to the KGB since at least 1973 and passed on to the Central Committee, which took no action and classified the information.\n[…]\nIn direct response to the Chernobyl disaster, a conference to create a Convention on Early Notification of a Nuclear Accident was called in 1986 by the International Atomic Energy Agency. The resulting treaty has bound members to provide notification of any nuclear and radiation accidents that occur that could affect other states, along with the Convention on Assistance in the Case of a Nuclear Accident or Radiological Emergency.\n[…]\nIndividual involvement in the Chernobyl disaster – People involved in the nuclear accident\n[…]\nList of Chernobyl-related articles – 1986 nuclear accident in the Soviet UnionPages displaying short descriptions of redirect targets\n[…]\nOfficial UN Chernobyl site"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Acidente_nuclear_de_Chernobil",
        "situacao": "ok",
        "texto": "Desastre de Chernobil (em ucraniano:  Чорнобильська катастрофа, Tchornobylska katastrofa – Catástrofe de Chernobil; também conhecido como acidente de Chernobil) foi um acidente nuclear catastrófico ocorrido em 26 de abril de 1986 no reator nuclear n.º 4 da Usina Nuclear de Chernobil, perto da cidade de Pripiate, no norte da Ucrânia Soviética, próximo da fronteira com a Bielorrússia Soviética.\n[…]\nNa época do desastre, a usina tinha quatro reatores RBMK-1000 operacionais, capazes de gerar 1 000 megawatts (MW) de energia elétrica (3 200 MW de energia térmica) e era responsável por 10% da energia da Ucrânia. Paralelamente à construção da usina, a partir de 1970 foi erguida a cidade de Pripiat para servir como lar dos trabalhadores da usina e suas famílias.\n[…]\nO desastre começou durante um teste em 26 de abril de 1986 no reator 4 da Usina Nuclear V. I. Lenin, perto de Pripiate e nas proximidades da fronteira administrativa com a Bielorrússia e o rio Dnieper. Houve um pico repentino e inesperado de energia. Quando os operadores tentaram um desligamento de emergência, ocorreu um aumento muito maior na produção de energia. Este segundo pico levou a uma ruptura do vaso do reator e a uma série de explosões de vapor.\n[…]\nApós o desastre, quatro quilômetros quadrados de floresta de pinheiros, diretamente na direção do reator, tornaram-se marrom-avermelhados e morreram, ganhando o nome de \"Floresta Vermelha\". Alguns animais nas áreas mais atingidas também morreram ou pararam de se reproduzir.\n[…]\nApós o acidente, surgiram dúvidas sobre o futuro da usina e seu eventual destino. Todo o trabalho nos reatores inacabados 5 e 6 foi interrompido três anos depois. No entanto, o problema na usina de Chernobil não terminou com o desastre no reator 4. O reator danificado foi vedado e 200 metros cúbicos de concreto foram colocados entre o local do desastre e nos prédios operacionais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Césio-137",
      "descricao": "Isótopo radioativo do césio, produzido na fissão nuclear, com meia-vida de cerca de trinta anos."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O césio-137, que contaminou Goiânia, perde metade da sua radioatividade em cerca de quanto tempo?",
    "resposta": "Trinta anos",
    "distratores": [
      "Três dias",
      "Trezentos anos",
      "Três mil anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Caesium-137"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caesium-137",
        "situacao": "ok",
        "texto": "Caesium-137 (13755Cs), cesium-137 (US), or radiocaesium, is a radioactive isotope of caesium that is formed as one of the more common fission products by the nuclear fission of uranium-235 and other fissionable isotopes in nuclear reactors and nuclear weapons. Trace quantities also originate from spontaneous fission of uranium-238. It is among the most problematic of the short-to-medium-lifetime f\n[…]\nCaesium-137, along with other radioactive isotopes caesium-134, iodine-131, xenon-133, and strontium-90, were released into the environment during nearly all atmospheric nuclear weapon tests, and more recently some nuclear accidents, most notably the Chernobyl disaster, the Goiânia Accident and the Fukushima Daiichi disaster.\n[…]\nIn the Acerinox accident of 1998, the Spanish recycling company Acerinox accidentally melted down a mass of radioactive caesium-137 that came from a gamma-ray generator.‍\n[…]\nOn 3 and 4 March 2016, unusually high levels of caesium-137 were detected in the air in Helsinki, Finland. According to Finland's Radiation and Nuclear Safety Authority (STUK), measurements showed 4000 μBq/m3—approximately 1,000 times the usual background level. A STUK investigation traced the source to a building from which STUK itself and a radioactive waste treatment company operate.‍‍\n[…]\nPublic health authorities in Western Australia issued an emergency alert for a stretch of road measuring about 1,400 kilometres (870 miles) after a capsule containing caesium-137 was lost in transport on 25 January 2023. The 8 millimetres (0.3 inches) capsule contained a small quantity of the radioactive material when it disappeared from a truck.\n[…]\nOn 20 March, the Secretary-General of the OAP and the governor of Prachinburi held a press conference stating that they had found caesium-137 contaminated furnace dust at a steel melting plant in Kabin Buri district.‍"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A9sio-137",
        "situacao": "ok",
        "texto": "Césio-137, ou radiocésio, é um isótopo radioativo de césio que é formado como um dos produtos de fissão mais comuns pela fissão nuclear de urânio-235 e outros isótopos fissionáveis em reatores nucleares e armas nucleares, podendo ser usado em alguns equipamentos médicos, como o que provocou o acidente radiológico de Goiânia. As quantidades vestigiais também se originam da fissão espontânea do urân\n[…]\nComo um isótopo quase puramente artificial, o césio-137 tem sido usado para datar vinho e detectar falsificações  e como um material de datação relativa para avaliar a idade da sedimentação que ocorreu após 1945. O césio-137 também é usado como traçador radioativo na pesquisa geológica para medir a erosão e a deposição do solo.\n[…]\nO césio-137 reage com a água, produzindo um composto solúvel em água (hidróxido de césio). O comportamento biológico do césio é semelhante ao do potássio e do rubídio. Depois de entrar no corpo, o césio fica distribuído mais ou menos uniformemente por todo o corpo, com as maiores concentrações nos tecidos moles.A meia-vida biológica do césio é de cerca de 70 dias.\n[…]\nUm experimento de 1961 mostrou que camundongos dosados com 21,5 μCi /g teve uma fatalidade de 50% em 30 dias (implicando um LD 50 de 245 µg/kg). Um experimento semelhante em 1972 mostrou que quando os cães são submetidos a uma carga corporal total de 3800 μCi/kg (140 MBq/kg, ou aproximadamente 44 μg/kg) de césio-137 (e 950 a 1400 rads), eles morrem em 33 dias, enquanto os animais com metade dessa carga sobreviveram por um ano.\n[…]\nA ingestão acidental de césio-137 pode ser tratada com azul da prússia, que se liga a ele quimicamente e reduz a meia-vida biológica para 30 dias.\n[…]\nAcidente radiológico de Goiânia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Camada de ozônio",
      "descricao": "Região da atmosfera com alta concentração de ozônio, que absorve grande parte da radiação ultravioleta do Sol."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A molécula de ozônio, gás que forma a camada protetora da atmosfera, tem quantos átomos de oxigênio?",
    "resposta": "Três",
    "distratores": [
      "Dois",
      "Quatro",
      "Seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ozone",
      "https://pt.wikipedia.org/wiki/Oz%C3%B4nio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ozone",
        "situacao": "ok",
        "texto": "Ozone ( ), also called trioxygen, is an inorganic molecule with the chemical formula O3. It is a pale-blue gas with a distinctively pungent odour. It is an allotrope of oxygen that is much less stable than the diatomic allotrope O2, breaking down in the lower atmosphere to O2 (dioxygen). Ozone is formed from dioxygen by the action of ultraviolet (UV) light and electrical discharges within the Eart\n[…]\nwhere \"M\" denotes the third body that carries off the excess energy of the reaction. The ozone molecule can then absorb a UV-C photon and dissociate\n[…]\nOzone, along with other reactive forms of oxygen such as superoxide, singlet oxygen, hydrogen peroxide, and hypochlorite ions, is produced by white blood cells and other biological systems (such as the roots of marigolds) as a means of destroying foreign bodies. Ozone reacts directly with organic double bonds. Also, when ozone breaks down to dioxygen it gives rise to oxygen free radicals, which are highly reactive and capable of damaging many organic molecules.\n[…]\nTemperature and humidity play a large role in how much ozone is being produced using traditional generation methods (such as corona discharge and ultraviolet light). Old generation methods will produce less than 50% of nominal capacity if operated with humid ambient air, as opposed to very dry air. New generators, using electrolytic methods, can achieve higher purity and dissolution through using water molecules as the source of ozone production.\n[…]\nElectrolytic ozone generation (EOG) splits water molecules into H2, O2, and O3.\n[…]\nOzone is similarly formed in the Catatumbo lightning storms phenomenon on the Catatumbo River in Venezuela, though ozone's instability makes it dubious that it has any effect on the ozonosphere.\n[…]\nProvide an aid to flocculation (agglomeration of molecules, which aids in filtration, where the iron and arsenic are removed)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Oz%C3%B4nio",
        "situacao": "ok",
        "texto": "O ozônio ou ozono, também chamado trioxigênio, é uma molécula inorgânica com a fórmula química O3. É um gás azul-claro de odor nitidamente pungente. Constitui um alótropo do oxigênio muito menos estável que o alótropo diatômico O2, decompondo-se na baixa atmosfera em O2, ou dioxigênio. O ozônio forma-se a partir do dioxigênio pela ação da radiação ultravioleta e de descargas elétricas na atmosfera\n[…]\nOs três átomos da molécula de ozônio podem participar da reação, como ocorre entre cloreto de estanho(II), ácido clorídrico e ozônio:\n[…]\nO ozônio é uma molécula triatômica angular com três modos vibracionais: estiramento simétrico, em 1.103,157 cm−1, flexão, em 701,42 cm−1, e estiramento antissimétrico, em 1.042,096 cm−1. O estiramento simétrico e a flexão apresentam absorção fraca. O estiramento antissimétrico é intenso e está relacionado à capacidade do ozônio de absorver radiação infravermelha, uma das razões pelas quais o gás participa do efeito estufa.\n[…]\nAs maiores concentrações atmosféricas de ozônio encontram-se na estratosfera, em uma região chamada camada de ozônio, entre aproximadamente 10 e 50 km acima da superfície. Mesmo nessa camada, as concentrações de ozônio são de apenas duas a oito partes por milhão, enquanto o oxigênio molecular corresponde a cerca de 210.000 partes por milhão em volume.\n[…]\nA energia cinética adicional aquece a estratosfera quando os átomos e moléculas resultantes colidem com outras partículas. Os átomos de oxigênio produzidos pela fotólise do ozônio podem reagir novamente com O2 e formar mais ozônio. Em uma atmosfera contendo apenas nitrogênio e oxigênio, o ozônio também reage com oxigênio atômico:\n[…]\nNa reação global, três equivalentes de água são convertidos em um equivalente de ozônio e três equivalentes de hidrogênio. A formação de oxigênio compete com a formação do ozônio.\n[…]\nOzonosfera, região estratosférica com maior concentração de ozônio"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Turbina eólica",
      "descricao": "Máquina de eixo horizontal com três pás que converte a energia cinética do vento em energia elétrica."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A maioria das grandes turbinas eólicas modernas, de eixo horizontal, tem quantas pás?",
    "resposta": "Três",
    "distratores": [
      "Duas",
      "Quatro",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wind_turbine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wind_turbine",
        "situacao": "ok",
        "texto": "A wind turbine is a device that converts the kinetic energy of wind into electrical energy. As of 2024, hundreds of thousands of large turbines, in installations known as wind farms, were generating over 1,136 gigawatts of power, with 117 GW added each year. Wind turbines are an increasingly important source of intermittent renewable energy, and are used in many countries to lower energy costs and\n[…]\nVertical turbine designs have much lower efficiency than standard horizontal designs.\n[…]\nWind turbines convert wind energy to electrical energy for distribution. Conventional horizontal-axis turbines can be divided into three components:\n[…]\nModern turbines use some two tons of copper for wiring, generators, transformers, and grounding systems due to its exceptional electrical conductivity\n[…]\nA few localities have exploited the attention-getting nature of wind turbines by placing them on public display, either with visitor centers around their bases, or with viewing areas farther away. The wind turbines are generally of conventional horizontal-axis, three-bladed design and generate power to feed electrical grids, but they also serve the unconventional roles of technology demonstration, public relations, and education.\n[…]\nOn most horizontal wind turbine farms, a spacing of about 6–10 times the rotor diameter is often upheld. However, for large wind farms, distances of about 15 rotor diameters should be more economical, taking into account typical wind turbine and land costs.\n[…]\nModern turbines usually have a small onboard crane for hoisting maintenance tools and minor components. However, large, heavy components like generators, gearboxes, blades, and so on are rarely replaced, and a heavy lift external crane is needed in those cases. If the turbine has a difficult access road, a containerized crane can be lifted up by the internal crane to provide heavier lifting.\n[…]\nWorld's Largest Wind Turbine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aerogerador",
        "situacao": "ok",
        "texto": "Um aerogerador, turbina eólica ou sistema de geração eólica é um gerador elétrico integrado ao eixo de um cata-vento e que converte energia eólica em energia elétrica. É um equipamento que tem se popularizado rapidamente por ser uma fonte de energia renovável e não poluente.\n[…]\nOs rotores de eixo horizontal são os mais conhecidos e os mais utilizados pela sua maior eficiência, compensando o seu custo maior.\n[…]\nUma recente abordagem, ainda em desenvolvimento para a exploração da energia eólica, propõe uma forma inovadora de aproveitar a energia do vento a grandes altitudes.\n[…]\nEm janeiro de 2014, foi apresentada a Vestas V164, uma turbina eólica de três lâminas, produzida pela Vestas, capaz de produzir 216.000 kWh num dia. A primeira unidade protótipo foi instalada no norte da Dinamarca, em Janeiro de 2014, e as primeiras unidades industriais começaram no verão de 2016 a ser instaladas ao largo da costa do Reino Unido.\n[…]\nEm outubro de 2022, um protótipo de turbina eólica offshore da Siemens Gamesa bateu o recorde mundial de maior produção de energia por uma única turbina em 24 horas ao produzir 359 megawatts-hora (MWh).\n[…]\nA turbina em questão foi uma SG 14-222 com pás de 108 metros.\n[…]\nEm setembro de 2023, durante o tufão Haikui, uma turbina eólica offshore em Fujian, China alcançou um recorde mundial de geração de energia num único dia, produzindo 384 100 kWh, sendo suficiente para abastecer quase 170 mil residências.\n[…]\nEm 2026, a China instalou a maior turbina eólica flutuante offshore do mundo com uma capacidade de 16 megawatts. Foi instalada a mais de 70 quilómetros da costa de Yangjiang, na província de Guangdong. A estrutura atinge cerca de 270 metros de altura, enquanto o rotor apresenta um diâmetro de 252 metros.\n[…]\nEnergia eólica\n[…]\nUsinas eólicas do Brasil\n[…]\nAerogeradores",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Usina nuclear de Zaporíjia",
      "descricao": "Maior usina nuclear da Europa, com seis reatores VVER-1000, em Enerhodar, no sudeste da Ucrânia."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A usina nuclear de Zaporíjia, no sudeste da Ucrânia, tem quantos reatores?",
    "resposta": "Seis",
    "distratores": [
      "Dois",
      "Quatro",
      "Dez"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Zaporizhzhia_Nuclear_Power_Plant"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zaporizhzhia_Nuclear_Power_Plant",
        "situacao": "ok",
        "texto": "The Zaporizhzhia Nuclear Power Station (Ukrainian: Запорізька атомна електростанція; Zaporiz'ka atomna elektrostancija) in southeastern Ukraine is the largest nuclear power plant in Europe and among the 10 largest in the world. It has been under Russian control since 2022. It was built by the Soviet Union near the city of Enerhodar, on the southern shore of the Kakhovka Reservoir on the Dnieper ri\n[…]\nThe plant has six VVER-1000 pressurized light water nuclear reactors (PWR), each fueled with 235U (LEU) and generating 950 MWe, for a total power output of 5,700 MWe. The first five were successively brought online between 1985 and 1989, and the sixth was added in 1995. In 2020, the plant generated nearly half of the country's electricity derived from nuclear power, and more than a fifth of total electricity generated in Ukraine. The Zaporizhzhia thermal power station is nearby.\n[…]\nThe Zaporizhzhia power plant is located around 200 kilometres (120 mi) from the war in Donbas combat zone, where fighting started in 2014.\n[…]\nOn 3 December 2014, Prime Minister Arseny Yatseniuk announced the occurrence of an incident several days before at the Zaporizhzhia Nuclear Power Plant. The cause of the incident was reported as a short circuit in the power outlet system and was not linked to the site's production. One of the six reactors of the plant was shut down twice in December 2014.\n[…]\nUkrayinska Pravda reported on 12 March 2022 that the plant's management was told by Russian authorities that the plant now belonged to Rosatom, Russia's state nuclear power company. It continued to operate and supply data, including from a remote monitoring system, to the IAEA, and continued to be operated by Ukrainian staff, under Russian control.\n[…]\nNuclear power in Ukraine\n[…]\nZaporizhzhia Nuclear Power Plant crisis\n[…]\nInformation about the plant from INSC website\n[…]\nIAEA updates: Nuclear Safety and Security in Ukraine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Usina_Nuclear_de_Zapor%C3%ADjia",
        "situacao": "ok",
        "texto": "A Usina Nuclear de Zaporíjia (em ucraniano:  Запорізька АЕС) em Enerhodar, no oblast de Zaporíjia, Ucrânia, é a maior usina nuclear da Europa e está entre as 10 maiores usinas nucleares do mundo em capacidade instalada e em produção de energia.\n[…]\nA usina está localizada na Ucrânia central, próxima da cidade de Enerhodar, nos bancos do Reservatório Kakhovka no Rio Dnieper. Ela tem 6 reatores de água pressurizada do tipo VVER-1000, cada qual gerando 950 MWe, para um total de 5 700 MW e. de capacidade instalada. Os primeiros cinco reatores foram conectados entre 1985 e 1989, o sexto foi adicionado em 1995. A usina produz quase metade da eletricidade do país derivada de energia nuclear e mais de um quinto da eletricidade gerada na Ucrânia.\n[…]\nEm 3 de dezembro de 2014, o Primeiro Ministro da Ucrânia Arseny Yatseniuk anunciou a ocorrência de um acidente vários dias atrás na usina. A causa do acidente reportado foi um curto circuito no sistema de tomada de energia e não estava relacionado com o local de produção de energia em si. Um dos seis reatores da usina foi desligado duas vezes em dezembro de 2014. Isso e a falta de carvão para as usinas de carvão da Ucrânia levou a apagões por todo o país, do início até o fim de 2014.\n[…]\nEm 3 de março de 2022, as forças russas tentaram assumir o controle da usina. Orlov anunciou mais tarde no Telegram que alguns dos edifícios localizados na usina nuclear estão queimando devido a ataques de artilharia realizados pelas forças russas. O ministro das Relações Exteriores ucraniano, Dmytro Kuleba, alertou que, se a usina explodisse, a precipitação poderia ser 10 vezes maior do que o desastre de Chernobyl.\n[…]\nEnergia nuclear na Ucrânia\n[…]\nInformation about the plant from INSC website",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Petróleo",
      "descricao": "Mistura oleosa e inflamável de hidrocarbonetos, extraída do subsolo e usada como fonte de combustíveis."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O barril, unidade usada no comércio mundial de petróleo, equivale a cerca de quantos litros?",
    "resposta": "Cento e cinquenta e nove litros",
    "distratores": [
      "Cem litros",
      "Duzentos litros",
      "Duzentos e cinquenta litros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Barrel_(unit)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Barrel_(unit)",
        "situacao": "ok",
        "texto": "A barrel is one of several units of volume applied in various contexts: there are dry barrels; fluid barrels, such as the British beer barrel and American beer barrel; oil barrels, etc. For historical reasons, the volumes of some barrel units are roughly double the volumes of others; volumes in common use range approximately from 100 to 200 litres (22 to 44 imp gal; 26 to 53 US gal). In many conne\n[…]\nDue to the risk of confusion the Society of Petroleum Engineers recommends in their style guide that abbreviations or prefixes M or MM not be used for barrels of oil or barrel of oil equivalent, but rather that thousands, millions or billions be spelled out.\n[…]\nThe measurement of an \"oil barrel\" originated in the early Pennsylvania oil fields. The Drake Well, the first oil well in the US, was drilled in Pennsylvania in 1859, and an oil boom followed in the 1860s. When oil production began, there was no standard container for oil, so oil and petroleum products were stored and transported in barrels of different shapes and sizes. Some of these barrels would originally have been used for other products, such as beer, fish, molasses, or turpentine.\n[…]\nWhereas, It is conceded by all producers of crude petroleum on Oil Creek that the present system of selling crude oil by the barrel, without regard to the size, is injurious to the oil trade, alike to the buyer and seller, as buyers, with an ordinary sized barrel cannot compete with those with large ones. We, therefore, mutually agree and bind ourselves that from this date we will sell no crude by the barrel or package, but by the gallon only.\n[…]\nBy 1872, the standard oil barrel was firmly established as 42 US-gallons. The 42 gallon standard oil barrel was officially adopted by the Petroleum Producers Association in 1872 and by the U.S. Geological Survey and the U.S. Bureau of Mines in 1882."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Barril_%28unidade%29",
        "situacao": "ok",
        "texto": "O barril é uma unidade de medida de volume aplicada geralmente ao petróleo líquido (em geral, ao petróleo cru). Por razões históricas, a correspondência em litros varia entre cerca de 100 litros (22 galões imperiais ou 26 galões americanos) a cerca de 200 litros (44 galões imperiais ou 53 galões americanos), havendo ainda correspondências em que o barril é igual a 158,987 litros (se for o barril e\n[…]\nUm barril de petróleo também equivale a 5.614 pés cúbicos de gás natural e 0,22 toneladas de hulha.\n[…]\nO barril é representado por bbl. As empresas petrolíferas listadas publicamente nos Estados Unidos geralmente relatam sua produção usando os múltiplos unitários kbbl ou Mbbl (um quilobarril, mil barris) ou MMbbl (um milhão de barris) e ocasionalmente (para estatísticas abrangentes mais amplas) Gbbl (ou às vezes Gbl) para giga-barril (um bilhão de barris).\n[…]\nBarril britânico ou imperial. É igual a:\n[…]\n159,11315 litros\n[…]\nBarril estadunidenses. É igual a:\n[…]\n158,987294928 litros\n[…]\nBarris de petróleo:\n[…]\nBarril de petróleo cru estadunidense: 42 galões estadunidenses; 158,987294928 litros\n[…]\nBarril de petróleo cru britânico ou imperial: 35 galões britânicos ou imperiais; 159,11315 litros\n[…]\nBOE (sigla para Barrel of Oil Equivalent, em português: Barril equivalente de petróleo (BEP)): unidade de medição de consumo de energia. Equivalente a 1,68 x 103 kWh ou 5,8 x 106 BTUs.\n[…]\nTEP (Tonelada equivalente de petróleo): unidade de medição de consumo de energia. Equivalente a 41,8 x 109 J ou 11,6 x 103 kWh.\n[…]\nBarril\n[…]\nUnidade inglesa\n[…]\nUnidades de volume",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Gás liquefeito de petróleo",
      "descricao": "Mistura de gases derivados do petróleo, sobretudo propano e butano, vendida em botijões como gás de cozinha."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O botijão de gás de cozinha mais comum nas casas brasileiras guarda quantos quilos de gás?",
    "resposta": "Treze quilos",
    "distratores": [
      "Cinco quilos",
      "Vinte quilos",
      "Quarenta e cinco quilos"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/G%C3%A1s_liquefeito_de_petr%C3%B3leo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/G%C3%A1s_liquefeito_de_petr%C3%B3leo",
        "situacao": "ok",
        "texto": "O gás liquefeito de petróleo (GLP), também chamado de gás de petróleo liquefeito (GPL) e conhecimento coloquialmente como gás de cozinha no Brasil, é uma mistura de gases de hidrocarbonetos utilizado como combustível em aplicações de aquecimento (como em fogões) e veículos.\n[…]\nO propano e o butano estão presentes no petróleo (crude, bruto) e no gás natural, embora uma parte se obtenha durante a refinação de petróleo, sobretudo como subproduto do processo de craqueamento catalítico (FCC, da sigla em inglês Fluid Catalytic Cracking).\n[…]\nO GLP é um dos subprodutos do petróleo, como a gasolina, diesel e os óleos lubrificantes, sendo retirado do mesmo através de refino em uma refinaria de petróleo. Torna-se liquefeito apenas quando é armazenado em bilhas/botijões ou tanques de aço em pressões de 6 a 8 atmosferas (6 a 8 kgf/cm²).\n[…]\nA vaporização também é diretamente proporcional à quantidade de superfície de contato do recipiente com o GLP (parede molhada). Por exemplo: um botijão de 13 kg de GLP, considerada uma temperatura externa constante, vaporizará mais gás quando cheio do que quando estiver com 50% de sua carga, pois o GLP terá apenas a metade da superfície de contato com o recipiente para a sua possível troca de calor e eventual vaporização do líquido.\n[…]\nAo percentual de mistura desses gases chama-se no jargão densidade (relacionado ao conceito de densidade, relacionado à massa por volume). Quanto maior a presença percentual de propano na mistura, menor a densidade do produto e consequentemente menor o peso do mesmo. Ao contrário, quanto maior o percentual de butano na mistura maior a densidade e consequentemente o seu peso.\n[…]\nGás natural liquefeito\n[…]\nLiquefação de gases\n[…]\nGás liquefeito de petróleo (GLP) Petrobras"
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
    "pergunta": "Daí vem a expressão ponta do iceberg: cerca de quanto do volume de um iceberg fica escondido debaixo da água?",
    "resposta": "Cerca de noventa por cento",
    "distratores": [
      "Cerca de metade",
      "Cerca de um terço",
      "Cerca de dez por cento"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Iceberg",
      "https://pt.wikipedia.org/wiki/Iceberg"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iceberg",
        "situacao": "ok",
        "texto": "An iceberg is a piece of fresh water ice more than 15 meters (16 yards) long that has broken off a glacier or an ice shelf and is floating freely in open water. Smaller chunks of floating glacially derived ice are called \"growlers\" or \"bergy bits\". Much of an iceberg is below the water's surface, which led to the expression \"tip of the iceberg\" to illustrate a small part of a larger unseen issue. \n[…]\nTypically about one-tenth of the volume of an iceberg is above water, which follows from Archimedes's Principle of buoyancy; the density of pure ice is about 920 kg/m3 (57 lb/cu ft), and that of seawater about 1,025 kg/m3 (64 lb/cu ft). The contour of the underwater portion can be difficult to judge by looking at the portion above the surface.\n[…]\nIcebergs deteriorate through melting and fracturing, which changes the mass m, as well as the surface area, volume, and stability of the iceberg. Iceberg deterioration and drift, therefore, are interconnected. Fracturing must be considered when modelling iceberg drift.\n[…]\nAir trapped in snow forms bubbles as the snow is compressed to form firn and then glacial ice. Icebergs can contain up to 10% air bubbles by volume. These bubbles are released during melting, producing a fizzing sound that some may call \"Bergie Seltzer\". This sound results when the water-ice interface reaches compressed air bubbles trapped in the ice. As each bubble bursts it makes a \"popping\" sound and the acoustic properties of these bubbles can be used to study iceberg melt.\n[…]\n2019, Iceberg D-28, 1,636 km2 (632 sq mi)\n[…]\nBecause much of an iceberg is below the water's surface and not readily visible, the expression \"tip of [an] iceberg\" is often used to illustrate that what is visible or addressable is a small part of a larger unseen issue.\n[…]\nIceberg Finder Service for east coast of Canada\n[…]\nIcebergs of The Arctic and Antarctic\n[…]\nWorks related to Iceberg at Wikisource"
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
      "nome": "Pluviômetro",
      "descricao": "Instrumento cilíndrico de coleta e medição da chuva, aqui com tubo graduado interno, montado num poste."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quando o pluviômetro marca um milímetro de chuva, quantos litros de água caíram em cada metro quadrado?",
    "resposta": "Um litro",
    "distratores": [
      "Dez litros",
      "Cem mililitros",
      "Mil litros"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pluvi%C3%B4metro",
      "https://en.wikipedia.org/wiki/Rain_gauge"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pluvi%C3%B4metro",
        "situacao": "ok",
        "texto": "O pluviômetro é um aparelho de meteorologia usado para recolher e medir, em milímetros lineares, a quantidade de líquidos ou sólidos (chuva, neve, granizo) precipitados durante um determinado tempo e local. É muito usado em estações meteorológicas.\n[…]\nMedido em milímetros, é o somatório da precipitação num determinado local durante um período de tempo estabelecido.\n[…]\nConsiste basicamente na distribuição das chuvas durante os 12 meses do ano. Tanto o regime quanto o índice pluviométrico são representados nos climogramas por colunas mensais. Pela análise das colunas, é possível caracterizar o regime e, com isso, caracterizar também o índice pluviométrico."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rain_gauge",
        "situacao": "ok",
        "texto": "A rain gauge (also known as udometer, ombrometer, pluviometer and hyetometer) is an instrument used by meteorologists and hydrologists to gather and measure the amount of liquid precipitation in a predefined area, over a set period of time. It is used to determine the depth of precipitation (usually in mm) that occurs over a unit area and measure rainfall amount.\n[…]\nThe tipping bucket rain gauge is not as accurate as the standard rain gauge, because the rainfall may stop before the lever has tipped. When the next period of rain begins it may take no more than one or two drops to tip the lever. This would then indicate that a pre-set amount has fallen when only a fraction of that amount has actually fallen. Tipping buckets also tend to underestimate the amount of rainfall, particularly in snowfall and heavy rainfall events.\n[…]\nThe advantage of the tipping bucket rain gauge is that the character of the rain (light, medium, or heavy) may be easily obtained. Rainfall character is decided by the total amount of rain that has fallen in a set period (usually 1 hour) by counting the number of pulses during that period. Algorithms may be applied to the data as a method of correcting the data for high-intensity rainfall.\n[…]\nAcoustic disdrometers, also referred to as hydrophones, are able to sense the sound signatures for each drop size as rain strikes a water surface within the gauge. Since each sound signature is unique, it is possible to invert the underwater sound field to estimate the drop-size distribution within the rain. Selected moments of the drop-size distribution yield rainfall rate, rainfall accumulation, and other rainfall properties.\n[…]\nDeposit gauge\n[…]\nVideo of a tipping bucket rain gauge in action"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Crise do apagão",
      "descricao": "Crise de abastecimento de energia elétrica no Brasil, que levou a um racionamento obrigatório no governo Fernando Henrique Cardoso."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No racionamento de energia de 2001, as famílias brasileiras tinham como meta reduzir o consumo de eletricidade em cerca de quanto?",
    "resposta": "Vinte por cento",
    "distratores": [
      "Cinco por cento",
      "Dez por cento",
      "Cinquenta por cento"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Crise_do_apag%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Crise_do_apag%C3%A3o",
        "situacao": "ok",
        "texto": "A crise do apagão foi uma crise nacional ocorrida no Brasil, que afetou o fornecimento e distribuição de energia elétrica. Ocorreu  entre 1 de julho de 2001 e 19 de fevereiro de 2002, durante o segundo mandato do presidente Fernando Henrique Cardoso.\n[…]\nFoi editada a Medida Provisória nº 2.147/2001, criando a Câmara de Gestão da Crise de Energia Elétrica, do Conselho de Governo, e estabelecendo diretrizes para programas de enfrentamento da crise de energia.A situação energética levou à necessidade urgente de cortar em 20% o consumo de eletricidade consumidores residenciais e industriais no Distrito Federal e em mais 16 estados das regiões Sudeste, Centro-Oeste e Nordeste, e parte da região Norte.\n[…]\nEm 21 de janeiro de 2002, um blecaute na região centro-sul causado pelo rompimento de um cabo entre a Usina Hidrelétrica de Ilha Solteira e Araraquara deixou o Distrito Federal e dez estados brasileiros sem energia elétrica por algumas horas. Tal evento não teve qualquer relação causal com a falta de água e o racionamento ainda em vigor no país.\n[…]\nO bom resultado da campanha de racionamento foi suficiente para evitar os cortes de energia.Embora os cortes não tenham acontecido, o termo apagão foi popularizado pela oposição ao governo. A crise energética somada à crise financeira então vigente no país contribuiu para a perda de popularidade de Fernando Henrique, que culminou com a eleição de Luiz Inácio Lula da Silva na eleição presidencial de 2002.\n[…]\nApós a crise do apagão, o governo investiu na construção de linhas de transmissão de energia elétrica. Durante a crise, não havia linhas de transmissão suficientes para levar a energia da Região Sul, onde os reservatórios estavam cheios, para o Sudeste e o Nordeste.\n[…]\nLista de blecautes no Brasil"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Chico Mendes",
      "descricao": "Seringueiro, sindicalista e ambientalista acreano, assassinado em dezembro de 1988."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em 1987, Chico Mendes recebeu um prêmio ambiental da ONU chamado Global e mais que número?",
    "resposta": "Quinhentos",
    "distratores": [
      "Cem",
      "Mil",
      "Cinquenta"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chico_Mendes",
      "https://en.wikipedia.org/wiki/Global_500_Roll_of_Honour"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chico_Mendes",
        "situacao": "ok",
        "texto": "Francisco Alves \"Chico\" Mendes Filho (Xapuri, 15 de dezembro de 1944 – Xapuri, 22 de dezembro de 1988) foi um seringueiro, sindicalista, ativista político brasileiro. Lutou a favor dos seringueiros da Bacia Amazônica, cuja subsistência dependia da preservação da floresta e das seringueiras nativas. Seu ativismo lhe trouxe reconhecimento internacional, ao mesmo tempo em que provocou a ira dos grand\n[…]\nEntre 1987 e 1988, Chico Mendes foi premiado por seu ativismo, recebendo o Global 500 da Organização das Nações Unidas (ONU), na Inglaterra, e a Medalha de Meio Ambiente da Better World Society, nos Estados Unidos. Após a sua morte, prêmios, parques, institutos e memoriais foram criados para divulgar seu legado e homenagear o líder seringueiro, cujo legado vêm influenciando uma geração de conservacionistas e legisladores em todo o mundo.\n[…]\nOs financiamentos a tais projetos acabaram sendo suspensos e Chico Mendes foi acusado por fazendeiros e políticos locais de \"prejudicar o progresso\", acusações que não convencem a opinião pública internacional. Alguns meses depois, recebeu vários prêmios internacionais, dentre eles o Global 500, oferecido pela ONU por sua luta em defesa do meio ambiente.\n[…]\nApós o assassinato do líder extrativista, mais de trinta entidades — sindicalistas, religiosas, políticas, de direitos humanos e ambientalistas — se reuniram para formar o Comitê Chico Mendes. Elas exigiam, através de articulação nacional e internacional e de pressão aos órgãos estatais, que os autores do crime fossem punidos. Em dezembro de 1990, a justiça condenou os fazendeiros Darly Alves da Silva e seu filho, Darcy Alves Ferreira a 19 anos de prisão pela morte de Chico Mendes.\n[…]\nChico Mendes: eu quero viver (1987): produzido pelo cineasta Adrian Cowell, após ter acompanhado o cotidiano do sindicalista em Xapuri. Uma das obras mais conhecidas, com alcance internacional."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Global_500_Roll_of_Honour",
        "situacao": "ok",
        "texto": "The Global 500 Roll of Honour was an award given from 1987 to 2003 by the United Nations Environment Programme (UNEP). The award recognized the environmental achievements of individuals and organizations around the world. A successor system of UNEP awards called Champions of the Earth started in 2005.\n[…]\nSince the inception of the award in 1987, over 719 individuals and organizations, in adult and youth categories, have been honoured with the Global 500 award. Among prominent winners are:\n[…]\nIdelisa Bonnelly, 1987 Dominican Republic marine biologist who created the first humpback whale sanctuary\n[…]\nFrancisco \"Chico\" Mendes, Brazilian rubber tapper who was murdered during his fight to save the Amazon rainforest\n[…]\nGlobal Environmental Citizen Award\n[…]\nWebsite of the Global 500 Laureate Roll of Honour Archived 2020-05-28 at the Wayback Machine"
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
