Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Idade Moderna** (tema **História**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Santa Maria (nau de Colombo)",
      "descricao": "Nau capitânia de Cristóvão Colombo na viagem de 1492, que encalhou no litoral do Haiti no Natal daquele ano."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Das três embarcações da primeira viagem de Colombo, em 1492, qual era a maior e servia de nau capitânia?",
    "resposta": "Santa Maria",
    "fonte": [
      "https://en.wikipedia.org/wiki/Santa_Mar%C3%ADa_(ship)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Santa_Mar%C3%ADa_(ship)",
        "situacao": "ok",
        "texto": "La Santa María de la Inmaculada Concepción (Spanish: [la ˈsãn̪.t̪a maˈɾi.a ð̞e̞ la ĩm.ma.kuˈla.ð̞a kõn̟.θeβ̞ˈθjõn] lit. 'The Holy Mary of the Immaculate Conception'), or La Santa María (Spanish: [la ˈsãn̪.t̪a maˈɾi.a]), originally La Gallega (Spanish: [la ɡaˈʝe.ɣ̞a]), The Galician, was the largest of the three small ships sailed by Christopher Columbus in his first expedition across the Atlantic O\n[…]\nLa Santa María was the slowest of Columbus's vessels but performed well in the Atlantic Ocean crossing. During the exploration of the discovered islands, La Santa María was sailing off the coast of Hispaniola. An analysis of the tides using the Julian calendar, which was used in Iberia in 1492, indicates that on the night of 24–25 December 1492, the moon was a waxing crescent five days past new (new moon 19 December, first quarter moon 26 December).\n[…]\nSanta María carried several anchors, possibly six. One of the anchors now rests in the Musée du Panthéon National Haïtien in Port-au-Prince, Haiti.\n[…]\nA functional replica was built on the Portuguese island of Madeira, between July 1997 and July 1998, by craftsmen from the fishing village of Câmara de Lobos. The ship is 22 m (72 ft) long and 7 m (23 ft) wide. In 1998 Santa María represented the Madeira Wine Expo 98 in Lisbon, where she was visited by over 97,000 people in 25 days. Since then thousands more have sailed and continue to sail aboard that Santa María replica which is located in Funchal.\n[…]\nA full-scale, seaworthy replica of the Santa María was built in 2018 by the Fundación Nao Victoria to commemorate the 525th anniversary of Christopher Columbus's voyage. Constructed over a period of 14 months by master shipwrights in Punta Umbría, Spain, the 200-ton vessel features a modern structural core of fiberglass coated with traditional iroko and pine wood cladding.\n[…]\nSanta María Rupes, a ridge on planet Mercury named after this ship"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santa_Maria_%28nau%29",
        "situacao": "ok",
        "texto": "A Santa Maria, anteriormente chamada de La Gallega, foi a nau, do tipo carraca, capitânia do Almirante Cristóvão Colombo na viagem em que, navegando para Oeste pelo Oceano Atlântico, veio a descobrir o continente americano (1492).\n[…]\nDe propriedade do mestre Juan de la Cosa, morador das vizinhanças do porto de Palos de la Frontera, e que a pilotava nesta viagem, era considerada pelo Almirante como uma embarcação pesada.\n[…]\nA embarcação veio a encalhar num banco de areia, na ilha de Hispaniola (atual baía do Caracol, no Haiti), na noite de 25 de dezembro de 1492. Foram em vão as providências empreendidas para o seu resgate, tendo sido abatido o mastro e o porão esvaziado de mantimentos, sem sucesso.\n[…]\nNo local de seu naufrágio, graças ao auxílio dos indígenas, foi providenciado o transbordo da carga e tripulantes para a Niña, tendo Colombo fundado, no local, o Fuerte Navidad, que deixou guarnecido com trinta e nove homens.\n[…]\nEm maio de 2014, foi anunciado na imprensa que investigadores norte-americanos acreditam ter encontrado a nau \"Santa Maria\" nas profundidades do mar das Caraíbas, próximo do Haiti.\n[…]\nCOLOMBO, Cristóvâo. Diários da Descoberta da América: as quatro viagens e o testamento. Porto Alegre: L&PM, 1998. 200p. il. mapas. ISBN 85-254-0938-3",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Santa Maria (nau de Colombo)",
      "descricao": "Nau capitânia de Cristóvão Colombo na viagem de 1492, que encalhou no litoral do Haiti no Natal daquele ano."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na noite de Natal de 1492, a nau Santa Maria, de Colombo, encalhou no litoral do Haiti. O que foi feito com a madeira dela?",
    "resposta": "Um forte, chamado La Navidad",
    "fonte": [
      "https://en.wikipedia.org/wiki/Santa_Mar%C3%ADa_(ship)",
      "https://en.wikipedia.org/wiki/La_Navidad"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Santa_Mar%C3%ADa_(ship)",
        "situacao": "ok",
        "texto": "La Santa María de la Inmaculada Concepción (Spanish: [la ˈsãn̪.t̪a maˈɾi.a ð̞e̞ la ĩm.ma.kuˈla.ð̞a kõn̟.θeβ̞ˈθjõn] lit. 'The Holy Mary of the Immaculate Conception'), or La Santa María (Spanish: [la ˈsãn̪.t̪a maˈɾi.a]), originally La Gallega (Spanish: [la ɡaˈʝe.ɣ̞a]), The Galician, was the largest of the three small ships sailed by Christopher Columbus in his first expedition across the Atlantic O\n[…]\nPosition fixes in the Diario place the grounding a few kilometers east of Cap-Haïtien, not on the reef immediately off the village. This is about 1.5 Portuguese leagues west of the excavated La Navidad site, which also matches the Diario's description of the distance to En Bas Saline.\n[…]\nRealizing that the ship was beyond repair, Columbus ordered his men to strip the timbers from the ship. The timbers were later used to build a fort near the modern town of Limonade that Columbus named La Navidad (Christmas) because the wreck occurred on Christmas Day.\n[…]\nSanta María carried several anchors, possibly six. One of the anchors now rests in the Musée du Panthéon National Haïtien in Port-au-Prince, Haiti.\n[…]\nRodrigo de Gallego\n[…]\nLittle is definitively known about the actual dimensions of Santa María, since no documentation or illustration has survived from that era. Since the 19th century, various notable replicas have been publicly commissioned or privately constructed.\n[…]\nA functional replica was built on the Portuguese island of Madeira, between July 1997 and July 1998, by craftsmen from the fishing village of Câmara de Lobos. The ship is 22 m (72 ft) long and 7 m (23 ft) wide. In 1998 Santa María represented the Madeira Wine Expo 98 in Lisbon, where she was visited by over 97,000 people in 25 days. Since then thousands more have sailed and continue to sail aboard that Santa María replica which is located in Funchal.\n[…]\nSanta María Rupes, a ridge on planet Mercury named after this ship"
      },
      {
        "url": "https://en.wikipedia.org/wiki/La_Navidad",
        "situacao": "ok",
        "texto": "La Navidad (\"The Nativity\", i.e. Christmas) was a Spanish fort that Christopher Columbus and his crew built on the northwest coast of Hispaniola (near present day Caracol, Nord-Est Department, Haiti) in 1492 from the remains of the Spanish ship the Santa María during his first voyage. La Navidad was the first European settlement established in the New World during the Age of Discovery, although it\n[…]\nWhen Columbus returned to Navidad on 27 Nov 1493, his second voyage from Spain, he \"found it burned to the ground ... nobody in the vicinity.\" In the fields nearby, however, he discovered the \"bodies of eight Christians.\" Columbus later discovered that, soon after his departure, his \"men began to quarrel among themselves, each taking as many women and as much gold as he could.\" Gutiérrez and Escobedo left with nine others, along with their women, for the gold mines.\n[…]\nHowever, the \"lord of the mines\" turned, killed them and then marched back to Navidad, defended by Arana with ten others, and Guacanagari. Caonabo set fire to houses, forcing Columbus' men into the sea, where eight drowned, and three were killed onshore.\n[…]\nAfter Columbus sailed away a second time, the site apparently was forgotten until a Haitian farmer led William Hodges to a location in 1977. Hodges, an amateur archaeologist and American medical missionary, received permission from the Haitian government to excavate a tennis-court-size section of the marshland, and he and his helpers found some artifacts of La Navidad. Despite the finds, no conclusive evidence has been discovered yet to pinpoint the exact location of La Navidad."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santa_Maria_%28nau%29",
        "situacao": "ok",
        "texto": "A Santa Maria, anteriormente chamada de La Gallega, foi a nau, do tipo carraca, capitânia do Almirante Cristóvão Colombo na viagem em que, navegando para Oeste pelo Oceano Atlântico, veio a descobrir o continente americano (1492).\n[…]\nA embarcação veio a encalhar num banco de areia, na ilha de Hispaniola (atual baía do Caracol, no Haiti), na noite de 25 de dezembro de 1492. Foram em vão as providências empreendidas para o seu resgate, tendo sido abatido o mastro e o porão esvaziado de mantimentos, sem sucesso.\n[…]\nNo local de seu naufrágio, graças ao auxílio dos indígenas, foi providenciado o transbordo da carga e tripulantes para a Niña, tendo Colombo fundado, no local, o Fuerte Navidad, que deixou guarnecido com trinta e nove homens.\n[…]\nEm maio de 2014, foi anunciado na imprensa que investigadores norte-americanos acreditam ter encontrado a nau \"Santa Maria\" nas profundidades do mar das Caraíbas, próximo do Haiti.\n[…]\nDependendo do estado da madeira, poderá ser possível retirar do fundo do mar os restos da nau para que sejam expostos num museu do Haiti.\n[…]\nCOLOMBO, Cristóvâo. Diários da Descoberta da América: as quatro viagens e o testamento. Porto Alegre: L&PM, 1998. 200p. il. mapas. ISBN 85-254-0938-3",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Império Português",
      "descricao": "Império colonial de Portugal, iniciado com a conquista de Ceuta em 1415 e encerrado com a entrega de Macau à China em 1999."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Dos grandes impérios coloniais europeus da era moderna, qual foi o mais duradouro, com quase seis séculos de existência?",
    "resposta": "Império Português",
    "fonte": [
      "https://en.wikipedia.org/wiki/Portuguese_Empire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Portuguese_Empire",
        "situacao": "ok",
        "texto": "The Portuguese Empire was the first and longest lasting of the European colonial empires. Initiated during the Age of Discovery, at one point territories included parts of the Americas and Africa, along with ports and trading posts throughout Asia and Oceania.\n[…]\nThe Dutch took their fight overseas, attacking Spanish and Portuguese colonies and beginning the Dutch–Portuguese War, which would last for over sixty years (1602–1663). Other European nations, such as Protestant England, assisted the Dutch Empire in the war.\n[…]\nintercontinental trade had a substantial and increasingly positive impact on economic growth. In the heyday of colonial expansion, eliminating the economic links to empire would have reduced Portugal's per capita income by roughly a fifth. While the empire helped the domestic economy it was not sufficient to annul the tendency towards decline in relation to Europe's advanced core which set in from the 17th century onwards.\n[…]\nAt the height of European colonialism in the 19th century, Portugal focused on expanding its outposts in Africa to compete with other European powers. The Portuguese pressed into the hinterland of Angola and Mozambique, and explorers Serpa Pinto, Hermenegildo Capelo and Roberto Ivens were among the first Europeans to cross subsaharan Africa west to east. Joaquim Rodrigues Graça crossed the interior of Angola between 1846 and 1848 and reached the Lunda Empire.\n[…]\nIn the wake of World War II, decolonisation movements began to gain momentum in the empires of the European powers. The ensuing Cold War also created instabilities among Portuguese overseas populations, as the United States and Soviet Union vied to increase their spheres of influence.\n[…]\nPortuguese Empire Timeline"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Imp%C3%A9rio_Portugu%C3%AAs",
        "situacao": "ok",
        "texto": "Império Português ou Império Colonial Português foi o primeiro império global da história, sendo considerado o mais antigo dos impérios coloniais europeus modernos e uma das hiperpotências mais antigas do mundo, abrangendo quase seis séculos de existência, a partir da Conquista de Ceuta, em 1415, até à devolução da soberania sobre Macau à China, em 1999. O império espalhou-se ao longo de um vasto \n[…]\nO Brasil, que se havia tornado a colónia mais valiosa de Portugal, tornou-se independente em 1822, como parte de uma onda de movimentos independentistas que varreu a América no início do século XIX. O Império Português foi então reduzido às suas colónias no litoral africano (que foram expandidas para o interior durante a partilha de África, no final do século XIX), Timor-Leste e enclaves na Índia (Goa, Damão e Diu) e na China (Macau).\n[…]\nApós a Segunda Guerra Mundial, o então líder de Portugal, António Salazar, tentou manter intacto o que restava do império pluricontinental, num momento em que outros países europeus estavam já a iniciar a descolonização dos seus territórios. Em 1961, as tropas portuguesas em Goa foram incapazes de impedir o avanço das tropas indianas que marcharam para a colónia em número superior. Nesta década de 60 teve início a Guerra Colonial Portuguesa, a qual durou até à queda do regime português em 1974.\n[…]\nNo contexto da Dinastia Filipina, o império português sofreu grandes reveses ao ser envolvido nos conflitos que a Espanha travava com a Inglaterra, a França e a Holanda, que tentavam estabelecer os seus próprios impérios. Portugal seria arrastado, sem verbas e sem capacidade para enviar exércitos para as regiões atacadas por forças bem-preparadas. Os holandeses, envolvidos na Guerra dos Oitenta Anos com Espanha desde 1568, atacavam por mar colónias e navios.\n[…]\nActo Colonial\n[…]\nComunidade dos Países de Língua Portuguesa\n[…]\nLista de territórios do Império Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Colônia de Rhode Island",
      "descricao": "Colônia inglesa da Nova Inglaterra, fundada por Roger Williams em 1636, uma das Treze Colônias."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual das Treze Colônias britânicas da América do Norte era a menor em território?",
    "resposta": "Rhode Island",
    "distratores": [
      "Delaware",
      "Connecticut",
      "Nova Jersey"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Colony_of_Rhode_Island_and_Providence_Plantations",
      "https://en.wikipedia.org/wiki/Rhode_Island"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Colony_of_Rhode_Island_and_Providence_Plantations",
        "situacao": "ok",
        "texto": "The Colony of Rhode Island and Providence Plantations was an English colony on the eastern coast of North America, founded in 1636 on former land of the Narragansett tribe by Puritan minister Roger Williams, at a settlement he originally called Providence Plantations, after his exile from the Massachusetts Bay Colony.\n[…]\nRhode Island continued as a self-governing colony until 1776, when it declared independence from Great Britain during the American Revolution, becoming the State of Rhode Island and Providence Plantations.\n[…]\nOn May 29, 1790, Rhode Island became the 13th state and the last of the former colonies to ratify the Constitution.\n[…]\nThe boundaries of Rhode Island underwent numerous changes from early Colonial times well after American independence, including repeated disputes with Massachusetts and Connecticut who contested for control of territory that ultimately belonged to Rhode Island. Rhode Island's early compacts did not stipulate the boundary on the eastern shore of Narrangansett Bay, and did not include any of Washington County, land that belonged to the Narragansett people.\n[…]\nFrom 1640 to 1774, the population of Rhode Island grew from 300 to 59,607, but then declined during the American Revolutionary War to 52,946 in 1780. William Coddington and a group of 13 other men bought Aquidneck Island from the Narragansett Indians in 1639, and the population of Newport, Rhode Island, grew from 96 in 1640 to 7,500 in 1760 (making Newport the fifth-largest city in the Thirteen Colonies at the time), and Newport grew further to 9,209 by 1774.\n[…]\nList of colonial governors of Rhode Island\n[…]\nArnold, Samuel Greene (1991) [1859]. History of the State of Rhode Island and Providence Plantations. Vol. 1: 1636–1700. Applewood Books. ISBN 9781429022774.\n[…]\nJames, Sydney V. (1975). Colonial Rhode Island: A History."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rhode_Island",
        "situacao": "ok",
        "texto": "Rhode Island (  ROHD) is a state in the New England region of the Northeastern United States. It borders Connecticut to its west; Massachusetts to its north and east; and the Atlantic Ocean to its south via Rhode Island Sound and Block Island Sound; and shares a small maritime border with New York, east of Long Island. Rhode Island is the smallest U.S. state by area and the seventh-least populous,\n[…]\nAt the onset of European colonization what is now Rhode Island was inhabited mainly by five Native American tribes — by far most of the state's territory was inhabited by the Narragansett, eastern borderlands were occupied by the Wampanoag, south-western coast by the Niantic, western borderlands by the Pequot and northern borderlands by the Nipmuc.\n[…]\nBrown University was founded in 1764 as the college in the British Colony of Rhode Island and Providence Plantations. It was one of nine Colonial colleges granted charters before the American Revolution and was the first college in America to accept students regardless of religious affiliation.\n[…]\nRhode Island's tradition of independence and dissent gave it a prominent role in the American Revolution. At approximately 2 a.m. on June 10, 1772, a band of Providence residents attacked the grounded revenue schooner HMS Gaspée, burning it to the waterline for enforcing unpopular trade regulations within Narragansett Bay. Rhode Island was the first of the thirteen colonies to renounce its allegiance to the British Crown on May 4, 1776.\n[…]\nRhode Island has been the first in a number of initiatives. The Colony of Rhode Island and Providence Plantations enacted the first law prohibiting slavery in America on May 18, 1652.\n[…]\nJohn Clarke (1609–1676) – Baptist minister, co-founder of the Colony of Rhode Island and Providence Plantations, author of its influential charter, and a leading advocate of religious freedom in America\n[…]\nOutline of Rhode Island"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Col%C3%B4nia_de_Rhode_Island_e_Planta%C3%A7%C3%B5es_de_Providence",
        "situacao": "ok",
        "texto": "A Colônia de Rhode Island e Plantações de Providence foi uma das Treze Colônias originais estabelecidas na costa leste da América banhada pelo Oceano Atlântico. Foi uma colônia inglesa de 1636 a 1707, e depois uma colônia da Grã-Bretanha até a Revolução Americana em 1776, quando se tornou o Estado de \"Rhode Island and Providence Plantations\" (conhecido simplesmente como Rhode Island).\n[…]\nA território que se tornou a Colônia de Rhode Island, foi o primeiro lar dos índios Narragansett, o que deu origem ao nome da atual cidade de Narragansett, Rhode Island. Os assentamentos europeus começaram por volta de 1622 com um posto comercial em Sowams, hoje em dia a cidade de Warren, Rhode Island.[carece de fontes]?\n[…]\nEle batizou o assentamento de \"Providence Plantations\", acreditando que Deus os havia trazido para lá. O termo \"plantation\" (\"plantação\") era usado no século XVII como sinônimo de \"assentamento\" ou \"colônia\". Williams nomeou as ilhas da Baía de Narragansett em homenagem às virtudes cristãs: paciência, prudência e esperança.\n[…]\nEm 1637, outro grupo de dissidentes de Massachusetts comprou terras dos índios em Aquidneck Island, na época chamada Rhode Island, e estabeleceram um assentamento chamado Pocasset. O grupo incluía William Coddington, John Clarke, Anne e William Hutchinson, entre outros. Esse acordo, no entanto, rapidamente se dividiu em dois acordos separados.\n[…]\nSamuel Gorton e outros permaneceram para estabelecer o assentamento de Portsmouth (que anteriormente era Pocasset) em 1638, enquanto Coddington e Clarke se estabeleceram nas proximidades de Newport em 1639. Ambos os assentamentos estavam situados em Rhode Island (Aquidneck).\n[…]\nAmérica Britânica\n[…]\nColônias da Nova Inglaterra\n[…]\nRhode Island\n[…]\nRhode Island Colony\n[…]\nRhode Island’s Royal Charter\n[…]\nHow Rhode Island Colony Was Founded\n[…]\nThe Colonies - Rhode Island (Est. 1636)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Ana de Cleves",
      "descricao": "Nobre alemã que foi a quarta esposa de Henrique VIII da Inglaterra, num casamento anulado em 1540."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Das seis esposas de Henrique Oitavo, qual teve o casamento mais curto, anulado depois de cerca de seis meses?",
    "resposta": "Ana de Cleves",
    "distratores": [
      "Catarina Howard",
      "Ana Bolena",
      "Joana Seymour"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Anne_of_Cleves",
      "https://en.wikipedia.org/wiki/Wives_of_Henry_VIII"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Anne_of_Cleves",
        "situacao": "ok",
        "texto": "Anne of Cleves (German: Anna von Kleve; 28 June or 22 September 1515 – 16 July 1557) was a German princess who briefly became Queen of England in 1540 as the fourth wife of Henry VIII, from their marriage on 6 January until its annulment on 12 July.\n[…]\nAnne had been given dower lands in January 1540 to fund her household, including manors in Hampshire formerly owned by Breamore Priory and Southwick Priory. Following the annulment she received a generous settlement, including Richmond Palace, and Hever Castle, home of Henry's former in-laws, the Boleyns. Anne of Cleves House, in Lewes, East Sussex, is just one of many properties she owned, though she never lived there.\n[…]\nOn 4 August 1553, Anne wrote to Mary I to congratulate her on her marriage to Philip of Spain. On 28 September 1553, when Mary left St James's Palace for Whitehall, she was accompanied by her sister Elizabeth and Anne of Cleves. Anne also took part in Mary I's coronation procession, and may have been present at her coronation at Westminster Abbey.\n[…]\nAfter a brief return to prominence, she lost royal favour in 1554, following Wyatt's rebellion. According to Simon Renard, the Imperial ambassador, Anne's close association with Elizabeth had convinced the Queen that \"the Lady [Anne] of Cleves was of the plot and intrigued with the Duke of Cleves to obtain help for Elizabeth: matters in which the king of France was the prime mover\". There is no evidence that Anne was invited back to court after 1554.\n[…]\nThe role of Anne of Cleves was played by:\n[…]\nElvi Hale in the episode Anne of Cleves in the 1971 television series The Six Wives of Henry VIII.\n[…]\nAnne of Cleves from the online Encyclopædia Britannica.\n[…]\nPortraits of Anne of Cleves at the National Portrait Gallery, London"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wives_of_Henry_VIII",
        "situacao": "ok",
        "texto": "King Henry VIII of England had six wives between 1509 and his death in 1547. In legal terms (de jure), Henry had only three wives and no divorces during his life. Instead, three of his marriages were annulled by the Church of England, declaring that a true marriage never took place (unlike a divorce, in which a married couple end their union).\n[…]\nA mnemonic device to remember the order of Henry's consorts is \"Arrogant Boys Seem Clever, Howard Particularly\", indicating their \"last names\", as known to popular culture: Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, Catherine Parr.\n[…]\nAs a child, Anne was betrothed to Francis, the future Duke of Lorraine, though the plans never came to fruition. In 1539, Henry VIII's chief minister Thomas Cromwell formed an alliance between England and Cleves, and Henry began considering Anne as his fourth wife. Anne of Cleves' portrait was painted by Hans Holbein the Younger and sent to King Henry to evaluate.\n[…]\nAnne did not resist the annulment, claiming the marriage had not been consummated, and was rewarded with a generous settlement including Hever Castle, the former home of the Boleyns. She was given the title of \"The King's Beloved Sister\" and was a lifelong friend to him and his children; Anne of Cleves was approximately the same age as Henry VIII's eldest surviving daughter Mary.\n[…]\nHer uncle the Duke of Norfolk was a prominent politician at Henry's court; and he secured her a place in the household of Henry's fourth wife, Anne of Cleves, in 1540, where Catherine caught the King's interest. She married him on 28 July 1540 at Oatlands Palace in Surrey, just 19 days after the annulment of his marriage to Anne. He was 49, and she was still a teenager, about 16–18 years old."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ana_de_Cleves",
        "situacao": "ok",
        "texto": "Ana (Düsseldorf, 22 de setembro de 1515 – Londres, 16 de julho de 1557) foi a quarta esposa do rei Henrique VIII e Rainha Consorte do Reino da Inglaterra de janeiro de 1540 até a anulação de seu casamento em julho do mesmo ano. Após a separação, Ana permaneceu na Inglaterra e recebeu o título honorário de \"Irmã do Rei\".\n[…]\nEm Guilherme, o Rico, Cromwell encontrou um possível aliado contra o imperador Carlos V e Francisco I da França. Guilherme governava, desde 1538, o Ducado de Gueldres, contrariando a vontade do imperador, e controlava assim o maior território no norte da Alemanha. Hans Holbein retratou Ana de Cleves e sua irmã mais nova e também solteira, Amália de Cleves (1517–1586). Henrique escolheu a segunda filha mais velha, pois o retrato de Ana pintado por Holbein lhe agradou.\n[…]\nApós a assinatura do contrato de casamento, buscou-se uma maneira segura de transportar Ana de Düsseldorf até Londres. Havia um risco elevado de que a noiva de Henrique fosse interceptada por algum de seus adversários. Inicialmente, Henrique planejou uma viagem marítima rápida de Ana até Londres. No entanto, os embaixadores de Cleves recusaram uma longa travessia marítima durante o inverno.\n[…]\nAna de Cleves sobreviveu a Henrique VIII e a todas as outras esposas do rei. Após a morte de Henrique, em 1547, sua situação se deteriorou. A partir de 1552, durante o reinado do filho do rei, Eduardo VI, sua pensão foi reduzida e ela perdeu sua residência em Bletchingley. Embora desejasse retornar a Cleves, não lhe foi permitido deixar a Inglaterra. Seu último ato público ocorreu durante a cerimônia de coroação de sua enteada, Maria I.\n[…]\nRick Wakeman gravou a peça \"Anne of Cleves\" para seu álbum de 1973 The Six Wives of Henry VIII.\n[…]\nO papel de Ana de Cleves foi interpretado por Genesis Lynea no musical britânico Six: The Musical.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Emirado de Granada",
      "descricao": "Último reino muçulmano da Península Ibérica, governado pela dinastia nacérida e conquistado pelos Reis Católicos em 1492."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Em 1492, os Reis Católicos tomaram o último reino muçulmano da Península Ibérica. Que reino era esse?",
    "resposta": "Granada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Emirate_of_Granada",
      "https://en.wikipedia.org/wiki/Fall_of_Granada"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Emirate_of_Granada",
        "situacao": "ok",
        "texto": "The Emirate of Granada, also known as the Nasrid Kingdom of Granada, was an Islamic polity in the southern Iberian Peninsula during the Late Middle Ages, ruled  by the Arab Nasrid dynasty. It was the last independent Muslim state in Western Europe.\n[…]\nMuhammad XI, the last Nasrid ruler, formally surrendered Granada in January 1492, marking the end of independent Muslim rule in the Iberian Peninsula.\n[…]\nAbout 200,000 Muslims are thought to have emigrated to North Africa after the fall of Granada. It is known that many Muslims emigrated to Morocco after the departure of their emir, and some of them successively emigrated to Egypt and the Levant. For Jews as well, a period of tolerance under Muslim rule in the Iberian Peninsula came to an end with their expulsion by the Christian monarchy in 1492. The Christian conquest of Granada did not extinguish the spirit of the Reconquista.\n[…]\nAs the Strait of Gibraltar became more open to commercial ships towards the end of the 13th century, maritime navigation around the Iberian Peninsula became cheaper and faster, accelerating the development of trade networks between the Mediterranean (particularly Italy and the regions of Catalonia and Provence) and northern Europe. Granada benefited from its location near the Strait.\n[…]\nBorder of Granada\n[…]\nCristobal Torrez Delgado (1982). El Reino Nazari de Granada (in Spanish).\n[…]\nGranada – The Last Refuge of Muslims in Spain by Salah Zaimeche\n[…]\n(in Spanish) Al-Ándalus III: el Sultanato De Granada (1232–1492) y Una Breve Reseña Sobre la Alhambra\n[…]\n(in Spanish) Nicolás Homar Vives, Genealogy of the Nasrid Kingdom of Granada\n[…]\n(in Spanish) R. H. Shamsuddín Elía, Historia de Al-Andalus, Boletín N° 53 -08/2006 Al-Ándalus III: El Sultanato De Granada (1232–1492)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fall_of_Granada",
        "situacao": "ok",
        "texto": "The Granada War was a series of military campaigns between 1482 and 1492 during the reign of the Catholic Monarchs, Isabella I of Castile and Ferdinand II of Aragon, against the Nasrid dynasty's Emirate of Granada. It ended with the defeat of Granada and its annexation by Castile, ending the last remnant of Islamic rule on the Iberian peninsula.\n[…]\nThe aftermath of war brought to an end coexistence between religions in the Iberian peninsula: Jews were forced to convert to Christianity or be exiled in 1492, and by 1501, all of Granada's Muslims were obliged to convert to Christianity, become slaves, or be exiled; by 1526 this prohibition spread to the rest of Spain. \"New Christians\" (conversos) came to be accused of crypto-Islam and crypto-Judaism.\n[…]\nTimeline of the Muslim presence in the Iberian peninsula § Castile-Aragón conquers the kingdom of Granada (1481–1491)\n[…]\nBorder of Granada\n[…]\nDelgado, Cristóbal Torres (1997). El Reino Nazarí de Granada (1482 - 1492): Muerte y Resurrección?. Granada: Albaida. ISBN 978-84-86521-38-7.\n[…]\nGarcía de Gabiola, Javier (2015). \"La guerra que puso fin al medievo, Granada (1482-1492)\". Arqueología, historia y viajes sobre el mundo medieval. No. 55. pp. 8–17. ISSN 1698-0387.\n[…]\nGabiola, Javier García de (2015). \"Los ejércitos en la guerra de Granada (1482-1492): la génesis del estado moderno\". Medievalia (in Spanish) (47): 34–42. doi:10.19130/medievalia.47.2015.305 (inactive 2 September 2025). ISSN 2448-8232.{{cite journal}}:  CS1 maint: DOI inactive as of September 2025 (link)\n[…]\nGarcía de Gabiola, Javier (2008). \"Todo empezó en Granada (1482-92)\". Historia de Iberia Vieja. No. 116. pp. 40–41. ISSN 1699-7913.\n[…]\nPrescott, William Hickling (1995). McJoynt, Albert D. (ed.). The Art of War in Spain: The Conquest of Granada, 1481-1492. London : Pennsylvania: Greenhill Books; Stackpole Books. ISBN 978-1-85367-193-7."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Reino_Nac%C3%A9rida",
        "situacao": "ok",
        "texto": "Reino Nacérida, Emirado Nacérida de Granada ou Sultanato Nacérida de Granada  (em árabe: إمارة غرناطة; romaniz.: Imarat Gharnāṭah) foi uma unidade política que existiu na Península Ibérica entre 1238 e 1492. Incluía as atuais províncias espanholas de Granada, Almeria, Málaga e uma parte das províncias de Sevilha, Córdova e Xaém (Jaén).\n[…]\nAs origens do reino de Granada encontram-se no desmembramento do Califado Almóada perante o avanço das tropas castelhanas. Em 1232 Maomé I (r. 1232–1273) declarou-se sultão e tornou-se o fundador da dinastia nacérida, que governaria o reino de Granada. Este rei ordenou a construção do Palácio da Alhambra onde se instalou com a sua corte.\n[…]\nPara além de lutas internas (conspirações, rebeliões, guerra civil em 1427) e de falta de apoios do mundo árabe, Granada, apesar de conseguir suster alguns avanços de Castela e obter algumas tréguas, não conseguiu reestruturar-se internamente e começou a ceder aos ataques cristãos.\n[…]\nAinda desencadeou um contra-ataque entre 1433 e 1440, recuperando praças de Castela, mas a partir daqui a história de Granada foi de defesa contra Castela, bloqueios econômicos, tréguas e devolução de cativos, até a \"guerra de Granada\", uma série de campanhas militares entre 1482 e 1492 que culminariam a 2 de Janeiro de 1492, com a rendição negociada mediante capitulação do rei Maomé XII, conhecido entre os espanhóis como Boabdil.\n[…]\nNo século XVI, apesar do embelezamento e da valorização cultural da cidade e da região pelos espanhóis, ainda havia, na minoria mourisca, sentimentos saudosistas do antigo Reino Nacérida, que se manifestaram em movimentos como os levantamentos nas Alpujarras, último foco de resistência mourisca.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Delaware",
      "descricao": "Estado da costa leste dos Estados Unidos, antiga colônia britânica, apelidado de Primeiro Estado."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Em 1787, qual dos futuros estados americanos foi o primeiro a ratificar a Constituição dos Estados Unidos?",
    "resposta": "Delaware",
    "distratores": [
      "Virgínia",
      "Massachusetts",
      "Pensilvânia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Delaware"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Delaware",
        "situacao": "ok",
        "texto": "Delaware (  DEL-ə-wair) is a state in the Mid-Atlantic and South Atlantic regions of the United States. It borders Maryland to its south and west, Pennsylvania to its north, New Jersey to its northeast, and the Atlantic Ocean to its east. The state's name derives from the adjacent Delaware Bay, which in turn was named after Thomas West, 3rd Baron De La Warr, an English nobleman and the Colony of V\n[…]\nBefore the Delaware coastline was explored and developed by Europeans in the 17th century, the state was inhabited by several Native American tribes, including the Lenape in the north and Nanticoke in the south. The state was first colonized by Dutch traders at Zwaanendael, near present-day Lewes, Delaware, in 1631. Delaware was one of the Thirteen Colonies that participated in the American Revolution against Great Britain, which established the United States as an independent nation.\n[…]\nOn December 7, 1787, Delaware was the first state to ratify the Constitution of the United States, earning it the nickname \"The First State\".\n[…]\nIn June 2018, Delaware became the first U.S. state to legalize sports betting following the Supreme Court ruling to overturn the Professional and Amateur Sports Protection Act of 1992 (PASPA).\n[…]\nAs Delaware has no franchises in the major American professional sports leagues, many Delawareans follow either Philadelphia or Baltimore teams. In the WNBA, the Washington Mystics enjoy a major following due to the presence of Wilmington native and University of Delaware product Elena Delle Donne. The University of Delaware's football team has a large following throughout the state, with the Delaware State University and Wesley College teams also enjoying a smaller degree of support.\n[…]\nDelaware State Databases—Annotated list of searchable databases produced by Delaware state agencies and compiled by the Government Documents Roundtable of the American Library Association"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Delaware",
        "situacao": "ok",
        "texto": "Delaware (em sua forma aportuguesada Delauare) é um dos 50 estados dos Estados Unidos, localizado na Região Nordeste do país. É o segundo menor estado americano em extensão territorial, apenas Rhode Island é menor, e também é o sexto estado menos populoso do país. Apenas Dakota do Sul, Alasca, Dakota do Norte, Vermont e Wyoming possuem menos habitantes.\n[…]\nPor causa disso, Delaware é um dos maiores centros bancários dos Estados Unidos. O estado também possui uma forte indústria petroquímica.\n[…]\nDelaware foi inicialmente colonizado pelos neerlandeses e pelos suecos. Após isto, tornou-se uma das Treze Colônias do Reino Unido. Após a Guerra da Independência dos Estados Unidos, tornou-se o primeiro estado americano a ratificar a Constituição dos Estados Unidos, em 7 de dezembro de 1787. Por causa disso, o estado é conhecido nacionalmente como The First State (\"O Primeiro estado\"). O nome do estado vem do rio Delaware.\n[…]\nEm 1776, no início da Guerra da Independência dos Estados Unidos, oficiais dos três condados de Delaware se reuniram em New Castle, com o intuito de organizar um governo estadual. O estado foi criado, e o nome Delaware, que já era amplamente utilizado para designar a região, foi adotado em caráter oficial. No mesmo ano, Delaware adotou sua primeira Constituição. John McKinly foi o primeiro governador de Delaware.\n[…]\nEm 22 de fevereiro de 1779, Delaware ratificou os Artigos da Confederação. Sete anos depois, em 7 de dezembro de 1787, Delaware ratificou a Constituição dos Estados Unidos, tendo sido o primeiro estado americano a fazer isto, e portanto, oficialmente, o primeiro estado da União.\n[…]\nEm 1865, após o final da Guerra Civil, a décima terceira emenda à Constituição americana aboliu oficialmente o uso do trabalho escravo no estado. Delaware tentou continuar com o uso do trabalho escravo após a Guerra Civil, sem sucesso.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Rafael Sanzio",
      "descricao": "Pintor e arquiteto do Alto Renascimento italiano (1483–1520), autor de A Escola de Atenas."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes grandes mestres do Renascimento italiano era o mais novo?",
    "resposta": "Rafael",
    "distratores": [
      "Leonardo da Vinci",
      "Michelangelo",
      "Sandro Botticelli"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Raphael",
      "https://en.wikipedia.org/wiki/Michelangelo",
      "https://en.wikipedia.org/wiki/Leonardo_da_Vinci"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Raphael",
        "situacao": "ok",
        "texto": "Raffaello Sanzio da Urbino (Italian: [raffaˈɛllo ˈsantsjo da urˈbiːno]; March 28 or 6 April 1483 – 6 April 1520), now generally known in English as Raphael (UK:  RAF-ay-əl, US:  RAF-ee-əl, RAY-fee-, RAH-fy-EL), was an Italian painter and architect of the High Renaissance. His work is admired for its clarity of form, ease of composition, and visual achievement of the Neoplatonic ideal of human gran\n[…]\nOther pupils or assistants include Raffaellino del Colle, Andrea Sabbatini, Bartolommeo Ramenghi, Pellegrino Aretusi, Vincenzo Tamagni, Battista Dossi, Tommaso Vincidor, Timoteo Viti (the Urbino painter), and the sculptor and architect Lorenzetto (Giulio's brother-in-law). The printmakers and architects in Raphael's circle are discussed below.\n[…]\nRaphael made no prints himself, but entered into a collaboration with Marcantonio Raimondi to produce engravings to Raphael's designs, which created many of the most famous Italian prints of the century, and was important in the rise of the reproductive print. His interest was unusual in such a major artist; from his contemporaries it was only shared by Titian, who had worked much less successfully with Raimondi.\n[…]\nSir Joshua Reynolds in his Discourses praised his \"simple, grave, and majestic dignity\" and said he \"stands in general foremost of the first [i.e., best] painters\", especially for his frescoes (in which he included the \"Raphael Cartoons\"), whereas \"Michael Angelo claims the next attention. He did not possess so many excellences as Raffaelle, but those he had were of the highest kind...\" Echoing the sixteenth-century views above, Reynolds goes on to say of Raphael:\n[…]\nPon, Lisa, Raphael, Dürer, and Marcantonio Raimondi, Copying and the Italian Renaissance Print, 2004, Yale UP, ISBN 978-0-300-09680-4\n[…]\nRaphael Santi at ColourLex.\n[…]\nMiddleton, John Henry (1911). \"Raphael Sanzio\" . Encyclopædia Britannica. Vol. 22 (11th ed.). pp. 900–908."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Michelangelo",
        "situacao": "ok",
        "texto": "Michelangelo di Lodovico Buonarroti Simoni (6 March 1475 – 18 February 1564), known mononymously as Michelangelo, was an Italian sculptor, painter, architect, and poet of the High Renaissance. He was born in the Republic of Florence but was mostly active in Rome from his 30s onwards. His work was inspired by models from classical antiquity and had a lasting influence on Western art.\n[…]\nMichelangelo was a devout Catholic whose faith deepened at the end of his life. Along with Raphael, he was enrolled in the Secular Franciscan Order.\n[…]\nMichelangelo commented that he thought he had encountered the chief of police with such an assemblage, and Raphael replied that he thought he had met an executioner, as they are wont to walk alone.\n[…]\nMichelangelo, with Leonardo da Vinci and Raphael, is one of the three giants of the Florentine High Renaissance. Although their names are often cited together, Michelangelo was younger than Leonardo by 23 years, and eight years older than Raphael. Because of his reclusive nature, he had little to do with either artist and outlived both of them by more than 40 years. Michelangelo took few sculpture students.\n[…]\nArtists who were directly influenced by Michelangelo include Raphael, whose monumental treatment of the figure in the School of Athens and The Expulsion of Heliodorus from the Temple owes much to Michelangelo, and whose fresco of Isaiah in Sant'Agostino closely imitates the older master's prophets. Other artists, such as Pontormo, drew on the writhing forms of the Last Judgment and the frescoes of the Cappella Paolina.\n[…]\nThe Sistine Chapel ceiling was a work of unprecedented grandeur, both for its architectonic forms, to be imitated by many Baroque ceiling painters, and also for the wealth of its inventiveness in the study of figures. Vasari wrote:\n[…]\nItalian Renaissance sculpture\n[…]\nItalian Renaissance painting"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
        "situacao": "ok",
        "texto": "Leonardo di ser Piero da Vinci (15 April 1452 – 2 May 1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. While his fame initially rested on his achievements as a painter, he has also become known for his notebooks, in which he made drawings and notes on a variety of subjects, including anatomy, ast\n[…]\nBorn out of wedlock to a successful notary and a lower-class woman in (or near) Vinci in Tuscany, he was educated in Florence by the Italian painter and sculptor Andrea del Verrocchio. He began his career in the city, but then spent much time in the service of Ludovico Sforza in Milan. Later, he worked in Florence and Milan again, as well as briefly in Rome, all while attracting a large following of imitators and students.\n[…]\nIn March 1513, Lorenzo de' Medici's son Giovanni assumed the papacy (as Leo X); Leonardo went to Rome that September, where he was received by the pope's brother Giuliano. From September 1513 to 1516, Leonardo spent much of his time living in the Belvedere Courtyard in the Apostolic Palace, where Michelangelo and Raphael were both active. Leonardo was given an allowance of 33 ducats a month and, according to Vasari, decorated a lizard with scales dipped in quicksilver.\n[…]\nShe leans forward to restrain the Christ Child as he plays roughly with a lamb, the sign of his own impending sacrifice. This painting, which was copied many times, influenced Michelangelo, Raphael, and Andrea del Sarto, and through them Pontormo and Correggio. The trends in composition were adopted in particular by the Venetian painters Tintoretto and Veronese.\n[…]\nBiblioteca Leonardiana, online bibliography (in Italian)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rafael",
        "situacao": "ok",
        "texto": "Rafael Sanzio (em italiano:  Raffaello Sanzio; Urbino, 6 de abril de 1483 — Roma, 6 de abril de 1520), frequentemente referido apenas como Rafael, foi um mestre da pintura e da arquitetura da escola de Florença durante o Renascimento italiano, celebrado pela perfeição e suavidade de suas obras.\n[…]\nSegundo historiadores e mestres da arte, o mais adequado é chamá-lo de Raffaello Santi, já que Sanzio fazia referência apenas ao seu local de nascimento e Santi era o sobrenome de seu pai, Giovanni Santi, nascido em Lucca, na Toscana. Junto com Michelangelo e Leonardo da Vinci forma a tríade de grandes mestres do Alto Renascimento.\n[…]\nEm 1514, com a morte de Bramante, Rafael foi nomeado para suceder-lhe como arquiteto do Vaticano e assumiu as obras em curso na Basílica de São Pedro, onde substituiu a planta em cruz grega, ou radial, por outra mais simples, em cruz latina, ou longitudinal. Sucedeu também a Bramante na decoração das loggias (galerias) do Vaticano, aí realizando composições de lírica simplicidade que pareciam contrabalançar a aterradora grandeza da capela Sistina pintada por Michelangelo.\n[…]\nVilla Madona – a mais antiga, foi projecto inacabado de Rafael, onde repete com muito cuidado aquilo que vinha descrito nos textos. O projecto original era majestoso e complexo, envolvendo uma ampla extensão de terreno que seria necessário graduar com uma sucessão de terraços, perspectivas renascentistas e jardins à italiana até o rio Tibre.\n[…]\nDiz a lenda que seu grande amor foi \"Fornarina\" (padeirinha), mas sua existência jamais foi confirmada. Segundo Vasari, a morte prematura de Rafael foi causada por excesso de amor.\n[…]\nRafael foi enterrado no Panteão de Roma, o mais honorável mausoléu na Itália, atendendo seu próprio pedido.\n[…]\nSalas de Rafael\n[…]\nPintura da Renascença Italiana\n[…]\nRenascimento",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Terceiro Estado",
      "descricao": "Ordem da sociedade francesa do Antigo Regime que reunia todos os que não eram clero nem nobreza."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na França de 1789, a sociedade se dividia em três ordens. Qual delas reunia mais de noventa por cento da população?",
    "resposta": "Terceiro Estado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Estates_of_the_realm",
      "https://en.wikipedia.org/wiki/What_Is_the_Third_Estate%3F"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Estates_of_the_realm",
        "situacao": "ok",
        "texto": "The estates of the realm, or three estates, were the broad orders of social hierarchy used in Christendom from the Middle Ages to early modern Europe. Different systems for dividing society members into estates developed and evolved over time.\n[…]\nOne of the earliest political pamphlets to address these ideas was called \"What Is the Third Estate?\" (French: Qu'est-ce que le tiers-état?) It was written by Abbé Emmanuel Joseph Sieyès in January 1789, shortly before the start of the French Revolution.\n[…]\nThe \"lower clergy\" (about equally divided between parish priests, monks, and nuns) constituted about 90 percent of the First Estate, which in 1789 numbered around 130,000 (about 0.5% of the population).\n[…]\nThe Third Estate (Tiers état) comprised all of those who were not members of either of the above, and can be divided into two groups, urban and rural, together making up over 98% of France's population. The urban included wage-labourers. The rural included free peasants (who owned their own land and could be prosperous) and villeins (serfs, or peasants working on a noble's land).\n[…]\nThere was also a population outside the estates. Unlike in other areas, people had no \"default\" estate, and were not peasants unless they came from a land-owner's family. A summary of this division is:\n[…]\nThe members of the General Court of Catalonia were organized in the Three Estates (Catalan: Tres Estats or Tres Braços):\n[…]\nthe \"royal estate\" (braç reial or braç popular) with representatives of the free municipalities under royal privilege\n[…]\nWhat Is the Third Estate?\n[…]\nAbbé Sieyès : Qu'est-ce que le Tiers-Etat ? Tout. Qu'a-t-il été jusque-là dans l'ordre politique ? Rien. Que demande-t-il ? A être quelque chose. for French-language original of this quotation."
      },
      {
        "url": "https://en.wikipedia.org/wiki/What_Is_the_Third_Estate%3F",
        "situacao": "ok",
        "texto": "Qu'est-ce que le Tiers-État? (transl. What Is the Third Estate?) is an influential political pamphlet published in January 1789, shortly before the outbreak of the French Revolution, by the French writer and clergyman Abbé Emmanuel Joseph Sieyès (1748–1836). Written during the Assembly of Notables between 6 November and 12 December 1788, it was sent to the printer by 27 December 1788 for publicati\n[…]\nThere were eventually four editions of the text; initially published anonymously as a 127 page pamphlet, Sieyès revealed himself as the author after its third edition in May 1789.\n[…]\nIn the pamphlet, Sieyès argues that the third estate – the common people of France – constituted a complete nation within itself, providing in the end all the men necessary to man the army, to staff the churches, to administer the law, and every other operation of society. It therefore had no need of the dead weight of the two other orders – the first and second estates of the, respectively, clergy and aristocracy – which Sieyès suggested abolishing.\n[…]\nBefore all else Sieyès argued for the sovereignty of the nation, unfettered by ancient constitutional niceties, represented by its people and empowered to re-establish the political system. He saw this actualised with genuine representatives in the Estates-General, equal representation to the other two orders taken together, and votes taken by heads and not by orders.\n[…]\nWhat is the Third Estate? Everything.\n[…]\nThroughout the pamphlet, Sieyès argues that the first and second estates are simply unnecessary, and that the Third Estate is in truth France's only legitimate estate, representing as it does the entire population. Thus, he asserts, it should replace the other two estates entirely.\n[…]\nEstates of the realm\n[…]\n\"Abbé Sieyes, What is the Third Estate? excerpts\". Internet History Sourcebooks. Fordham University. Retrieved 2023-07-31."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Estamento",
        "situacao": "ok",
        "texto": "Estamento ou ordem  é um estrato social mais fechado do que uma classe social, e mais aberto do que uma casta. Um sistema social baseado em estamentos permite, portanto, maior mobilidade social do que um sistema de  castas, e menor mobilidade do que um sistema de classes. Estamentos ainda estão presentes em algumas sociedades.\n[…]\nA sociedade medieval era uma sociedade de ordens bem demarcadas: havia os oratores (clérigos e religiosos, que tinham a função de mediadores entre os homens e Deus), os bellatores (cavaleiros e guerreiros, a quem competia defender a cidade e sua população) e os laboratores (artesãos e trabalhadores rurais, cuja obrigação era trabalhar para sustentar os outros).\n[…]\nPor exemplo, na  sociedade feudal, os direitos e deveres de um nobre eram diferentes dos direitos e deveres de um servo. E, embora a lei não previsse a mudança de status social, ela também não a torna impossível, como na casta. Por exemplo, um servo pode se tornar um pequeno comerciante ou um membro do clero. Isso dá ao sistema de estamentos uma mobilidade social maior do que nas castas, mas não tão alta quanto nas classes sociais, onde todos, em teoria, são iguais perante a lei.\n[…]\nAssim, já não é o mercado que estrutura as relações de poder, mas sim a disputa em torno da \"honra social\". Sendo geralmente comunidades  mais fechadas do que as classes, uma sociedade estamental permite aos indivíduos menor mobilidade do que sociedade de classes.\n[…]\nAtuar diretamente ou mediante incentivos serão técnicas desenvolvidas dentro de um só escopo. Nas suas relações com a sociedade, o estamento diretor provê acerca das oportunidades de ascensão política, ora dispensando prestígio, ora reprimindo transtornos sediciosos, que buscam romper o esquema de controle\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Saint-Domingue",
      "descricao": "Colônia francesa no oeste da ilha de Hispaniola, de 1697 a 1804, que se tornou o Haiti independente."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "No século dezoito, que colônia do Caribe, apelidada de Pérola das Antilhas, era a mais rica de todas as colônias francesas?",
    "resposta": "Saint-Domingue, atual Haiti",
    "fonte": [
      "https://en.wikipedia.org/wiki/Saint-Domingue"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saint-Domingue",
        "situacao": "ok",
        "texto": "Saint-Domingue (French: [sɛ̃ dɔmɛ̃ɡ] ) was a French colony in the western portion of the Caribbean island of Hispaniola, in the area of modern-day Haiti, from 1659 to 1803. The name derives from the Spanish main city on the island, Santo Domingo, which came to refer specifically to the Spanish-held Captaincy General of Santo Domingo, now the Dominican Republic.\n[…]\nSaint-Domingue became known as the \"Pearl of the Antilles\" – one of the richest colonies in the world in the 18th-century French empire. It was the greatest jewel in imperial France's mercantile crown. By the 1780s, Saint-Domingue produced about 40 percent of all the sugar and 60 percent of all the coffee consumed in Europe. By 1789, Saint Domingue was made up of about 8,000 plantations ..., producing one-half of all the sugar and coffee that was consumed in Europe and the Americas.\n[…]\nToday, the former Spanish possession contemporary with the early period of the French colony corresponds mostly with the Dominican Republic, whose capital is Santo Domingo. The name of Saint-Domingue was changed to Hayti (Haïti) when Jean-Jacques Dessalines declared the independence of all Hispaniola from the French in 1804.\n[…]\nLike the name Haiti itself, Saint-Domingue may refer to all of Hispaniola, or the western part in the French colonial period, while the Spanish version Hispaniola or Santo Domingo is often used to refer to the Spanish colonial period or the Dominican nation.\n[…]\nList of colonial governors of Saint-Domingue\n[…]\nDayan, Joan (1998). Haiti, History, and the Gods. University of California Press. ISBN 978-0-520-21368-5.\n[…]\nGarrigus, John (2002). Before Haiti: Race and Citizenship in Saint-Domingue. New York: Palgrave-Macmillan. ISBN 0-230-10837-7. OCLC 690382111.\n[…]\nThe Louverture Project: Saint-Domingue – Saint-Domingue page on Haitian history Wiki.\n[…]\nThe Louverture Project: Slavery in Saint-Domingue"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%A3o_Domingos_%28col%C3%B4nia_francesa%29",
        "situacao": "ok",
        "texto": "São Domingos (em francês:  Saint-Domingue) foi uma colônia francesa nas Antilhas, mais precisamente na ilha de Hispaniola de 1659 a 1804, quando se tornou a nação independente do Haiti.\n[…]\nOs povos arauaques, caribes e tainos ocuparam a ilha antes da chegada dos espanhóis. Quando Cristóvão Colombo tomou posse da ilha em 5 de dezembro de 1492, ele a nomeou-a La Española, significando \"A (Ilha) Espanhola\". A tradução lusófona de uso comum foi logo Hispaniola.\n[…]\nHistória do Haiti\n[…]\nColonização francesa das Américas\n[…]\nCapitania-Geral de São Domingos\n[…]\n«The Louverture Project». : Saint-Domingue - Saint-Domingue page on Haitian history Wiki.\n[…]\n«The Louverture Project». : Slavery in Saint-Domingue",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "O Espírito das Leis",
      "descricao": "Tratado de filosofia política de Montesquieu, publicado em 1748, que defende a separação dos poderes."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1748, no livro O Espírito das Leis, Montesquieu propôs dividir o poder do Estado em Executivo, Legislativo e qual outro?",
    "resposta": "Judiciário",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Spirit_of_Law",
      "https://en.wikipedia.org/wiki/Separation_of_powers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Spirit_of_Law",
        "situacao": "ok",
        "texto": "The Spirit of Law (French: De l'esprit des lois, originally spelled De l'esprit des loix), also known in English as The Spirit of [the] Laws, is a treatise on political theory, as well as a pioneering work in comparative law by Montesquieu, published in 1748. Originally published anonymously, as was the norm, its influence outside France was aided by its rapid translation into other languages.\n[…]\nBuilding on and revising a discussion in John Locke's Second Treatise of Government, Montesquieu argues that the executive, legislative, and judicial functions of government should be assigned to different bodies, so that attempts by one branch of government to infringe on political liberty might be restrained by the other branches.\n[…]\n(Habeas corpus is an example of a check that the judicial branch has on the executive branch of government.) In a lengthy discussion of the English political system, he tries to show how this might be achieved and liberty secured, even in a monarchy. He also notes that liberty cannot be secure where there is no separation of powers, even in a republic.\n[…]\nLetter and spirit of the law\n[…]\nVickie B. Sullivan, Montesquieu and the Despotic Ideas of Europe: an interpretation of \"The Spirit of the laws\", University of Chicago Press, 2017.\n[…]\nde Secondat, Charles, Baron de Montesquieu, \"The Spirit of Laws\" (Free – The Internet Archive, High Resolution)\n[…]\nde Secondat, Charles, Baron de Montesquieu, \"The Spirit of Laws: Volume 1 \", 1793 (Free – Librivox, Audiobook)\n[…]\nde Secondat, Charles, Baron de Montesquieu,  \"The Spirit of Laws\"  2 vols. Originally published anonymously. 1748; Crowder, Wark, and Payne, 1777. Trans. Thomas Nugent (1750). Rev. J. V. Prichard. (\"Based on a public domain edition published in 1914 by G. Bell & Sons, Ltd., London. Rendered into HTML and text by Jon Roland of The Constitution Society.\")  Accessed May 16, 2007."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Separation_of_powers",
        "situacao": "ok",
        "texto": "The separation of powers principle functionally differentiates several types of state power (usually legislation, adjudication, and execution) and requires these operations of government to be conceptually and institutionally distinct and clearly articulated, thereby maintaining the integrity of each branch.\n[…]\nThe term \"tripartite system\" is commonly ascribed to French Enlightenment political philosopher Montesquieu, although he did not use such a term but referred to the \"distribution\" of powers. In The Spirit of Law (1748), Montesquieu described the various forms of distribution of political power among a legislature, an executive, and a judiciary.\n[…]\nMontesquieu argues that each Power should only exercise its own functions, or \"there would be an end to everything\". If the same person or body of magistrates held legislative and executive powers, liberty would be lost since the same monarch or senate could both enact and execute tyrannical laws. Similarly, a political entity holding both judiciary and legislative powers would exert arbitrary control over subjects, and one holding both judiciary and executive powers would be oppressive.\n[…]\nSeparation of powers requires a different source of legitimization, or a different act of legitimization from the same source, for each of the separate powers. If the legislative branch appoints the executive and judicial powers, as Montesquieu indicated, there will be no separation or division of its powers, since the power to appoint carries with it the power to revoke.\n[…]\nSeparation of judicial powers from the executive and legislative branches is the norm in modern democracies.\n[…]\nThey may or may not also hold a seat in the legislature.\n[…]\nEvan C. Zoldan, Is the Federal Judiciary Independent of Congress?, 70 Stan. L. Rev. Online 135 (2018)."
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "A Escola de Atenas",
      "descricao": "Afresco de Rafael pintado entre 1509 e 1511 numa sala do Palácio Apostólico, no Vaticano, com filósofos da Antiguidade."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No centro do afresco A Escola de Atenas, pintado por Rafael no Vaticano, aparecem Aristóteles e que outro filósofo grego?",
    "resposta": "Platão",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_School_of_Athens"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_School_of_Athens",
        "situacao": "ok",
        "texto": "The School of Athens (Italian: Scuola di Atene) is a fresco by the Italian Renaissance artist Raphael. It was painted between 1509 and 1511 as part of a commission by Pope Julius II to decorate the rooms now called the Stanze di Raffaello in the Apostolic Palace in Vatican City.\n[…]\nHowever, to Heinrich Wölfflin, \"it is quite wrong to attempt interpretations of the School of Athens as an esoteric treatise ... The all-important thing was the artistic motive which expressed a physical or spiritual state, and the name of the person was a matter of indifference\" in Raphael's time.\n[…]\nA number of drawings made by Raphael as studies for the School of Athens are extant. A study for the Diogenes is in the Städel in Frankfurt while a study for the group around Pythagoras, in the lower left of the painting, is preserved in the Albertina Museum in Vienna.\n[…]\nOther reproductions include: in Königsberg Cathedral, Kaliningrad by Neide, in the University of North Carolina at Asheville's Highsmith University Student Union, and a recent one in the seminar room at Baylor University's Brooks College. A copy of Raphael's School of Athens was painted on the wall of the ceremonial stairwell that leads to the famous, main-floor reading room of the Sainte-Geneviève Library in Paris.\n[…]\nGertrude Garrigues, \"Raphael's 'School of Athens'\", The Journal of Speculative Philosophy Vol. 13, No. 4 (October 1879), pp. 406–420.\n[…]\nThe School of Athens at the Web Gallery of Art\n[…]\nThe School of Athens (interactive map)\n[…]\nCartoon of The School of Athens\n[…]\nThe School of Athens reproduction at UNC Asheville\n[…]\n3 Cool Things You Might Not Know About Raphael's School of Athens\n[…]\nThe School of Athens in Britannica.\n[…]\nMedia related to The School of Athens by Raphael at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escola_de_Atenas",
        "situacao": "ok",
        "texto": "A Escola de Atenas (Scuola di Atene no original) é uma das mais famosas pinturas do renascentista italiano Rafael e representa a Academia de Atenas. Foi pintada entre 1509 e 1510 na Stanza della Segnatura sob encomenda do Vaticano. A pintura já foi descrita como \"a obra-prima de Rafael e a personificação perfeita do espírito clássico da Renascença\".\n[…]\nA \"Escola de Atenas\" é um dos painéis que compõem um grupo de quatro afrescos principais que retratam ramos distintos do conhecimento. Cada tema é identificado acima por um tondo em separado contendo uma figura feminina majestosa sentada nas nuvens, com putti carregando frases como: “Buscar o conhecimento das causas”, “Inspiração Divina”, “Conhecimento das coisas divinas” (Disputa), “Para cada um o que lhe é devido”.\n[…]\nNo entanto, o afresco foi até recentemente interpretado como uma exortação à filosofia e, de maneira mais profunda, como uma representação visual do papel do amor em elevar as pessoas para o conhecimento superior, em grande parte em dívida com as teorias contemporâneas de Marsilio Ficino e outros pensadores neoplatônicos ligados a Rafael.\n[…]\nA identidade de alguns dos filósofos como Platão ou Aristóteles, são inegáveis. Além disso, as identificações de figuras de Rafael tem sido sempre hipotéticas. Para complicar, além de Vasari alguns receberam múltiplas identificações, não só com antigos, mas também com figuras contemporâneas a Rafael.\n[…]\nLuitpold Dussler conta entre aqueles que podem ser identificados com alguma certeza: Platão, Aristóteles, Sócrates, Pitágoras, Euclides, Ptolomeu, Zoroastro, o próprio Rafael, Il Sodoma e Diógenes. Outras identificações ele assegura serem \"mais ou menos especulativas\".\n[…]\n14: Platão segurando o Timeu (Leonardo da Vinci).\n[…]\n15: Aristóteles segurando Ética a Nicômaco\n[…]\nR: Apeles (Rafael).\n[…]\nSalas de Rafael\n[…]\nPinturas de Rafael",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Atos de União de 1707",
      "descricao": "Leis aprovadas pelos parlamentos da Inglaterra e da Escócia que criaram, em 1707, o Reino da Grã-Bretanha."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1707, os Atos de União criaram o Reino da Grã-Bretanha, juntando a Inglaterra a que outro reino?",
    "resposta": "Escócia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Acts_of_Union_1707"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Acts_of_Union_1707",
        "situacao": "ok",
        "texto": "The Acts of Union refer to two acts of Parliament, one by the Parliament of Scotland in March 1707, followed shortly thereafter by an equivalent act of the Parliament of England. They put into effect the international Treaty of Union agreed on 22 July 1706, which politically joined the Kingdom of England and Kingdom of Scotland into a single \"political state\" named Great Britain, with Queen Anne a\n[…]\nThe English and Scottish acts of ratification took effect on 1 May 1707, creating the new kingdom,  with its parliament based in the Palace of Westminster.\n[…]\nEnshrined in the Union with England Act 1707:\n[…]\nSoon after the Union, the Act 6 Ann. c. 40—later named the Union with Scotland (Amendment) Act 1707—united the Privy Council of England and Privy Council of Scotland and decentralised Scottish administration by appointing justices of the peace in each shire to carry out administration. In effect it took the day-to-day government of Scotland out of the hands of politicians and into those of the College of Justice.\n[…]\nIn the first few decades after the union, England did not end up becoming the main trading partner of Scotland, as other European powers became the primary source of imported goods for Scotland. For at least the first 40 years after the union, Scotland persisted in its traditional trade patterns, and the economic situation of Scotland was not as dire as that described in the months leading up to the Acts of Union.\n[…]\nActs of Union 1800 (Kingdom of Great Britain with Kingdom of Ireland)\n[…]\nThe full text of Act of Union 1707 at Wikisource\n[…]\nText of the Union with Scotland Act 1706 as in force today (including any amendments) within the United Kingdom, from legislation.gov.uk.\n[…]\nText of the Union with England Act 1707 as in force today (including any amendments) within the United Kingdom, from legislation.gov.uk.\n[…]\nUnion with England Act 1707, from Records of the Parliaments of Scotland"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atos_de_Uni%C3%A3o_de_1707",
        "situacao": "ok",
        "texto": "Os Atos de União de 1707 foram um par de atos do parlamento que unificou os reinos da Inglaterra e da Escócia em um estado unitário. Os atos, promulgados pelo Parlamento da Escócia e pelo Parlamento da Inglaterra, ratificaram o Tratado de União acordado entre os dois reinos em 1706.\n[…]\nA criação do novo Reino Unido da Grã-Bretanha: Inglaterra e Escócia encontravam-se até então sob um regime de união pessoal das coroas; agora, a independência formal dos dois países desapareceria em favor do novo Estado. O País de Gales, por sua vez, já havia sido anexado à Inglaterra no século XVI;\n[…]\nEste evento histórico também é conhecido como \"Atos de União de 1707\" (Acts of Union, em inglês), uma referência às ratificações do tratado pelos parlamentos dos dois países.\n[…]\nAntes de 1603, Inglaterra e Escócia possuíam monarcas distintos; como Isabel I nunca havia se casado, após 1567, seu primo protestante Jaime VI da Escócia assumiu a condição de herdeiro presuntivo do trono inglês. Após a morte da monarca, as duas coroas foram mantidas em união pessoal por Jaime que reinou como Jaime I na Inglaterra e Jaime VI na Escócia.\n[…]\nLíderes presbiterianos como Archibald Campbell viam a união das coroas como uma forma de garantir o livre comércio entre a Inglaterra e a Escócia e preservar uma estrutura eclesiástica presbiteriana.\n[…]\nSob a Liga e Pacto Solene de 1643, os Covenanters concordaram em fornecer apoio militar ao Parlamento inglês em troca da unificação religiosa. Embora o tratado se referisse repetidamente à \"união\" entre Inglaterra, Escócia e Irlanda, a união política teve pouco apoio fora do Kirk. Mesmo a união religiosa foi contestada pela maioria da estrutura episcopal na Igreja da Inglaterra e por figuras independentes como Oliver Cromwell, que liderava o Exército Novo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Liberdade, Igualdade, Fraternidade",
      "descricao": "Lema surgido na Revolução Francesa e adotado depois como divisa oficial da República Francesa."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O lema nascido na Revolução Francesa, e hoje oficial da França, é Liberdade, Igualdade e o quê?",
    "resposta": "Fraternidade",
    "fonte": [
      "https://en.wikipedia.org/wiki/Libert%C3%A9,_%C3%A9galit%C3%A9,_fraternit%C3%A9"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Libert%C3%A9,_%C3%A9galit%C3%A9,_fraternit%C3%A9",
        "situacao": "ok",
        "texto": "Liberté, égalité, fraternité (French pronunciation: [libɛʁte eɡalite fʁatɛʁnite]; French for 'liberty, equality, fraternity', Latin: Libertas, aequalitas, fraternitas; Haitian Creole: Libète, egalite, fratènite), is the national motto of France and the Republic of Haiti, and is an example of a tripartite motto.\n[…]\n\"Fraternity\" was thus issued from \"liberty\", and oriented by a common cause.\n[…]\nWith the 1848 February Revolution, the motto was officially adopted, mainly under the pressure of the people who had attempted to impose the red flag over the tricolor flag. The 1791 red flag was the symbol of martial law and of order, not of insurrection. Alphonse de Lamartine opposed popular aspirations, and in exchange of the maintaining of the tricolor flag, conceded the Republican motto of liberté, égalité, fraternité, written on the flag, on which a red rosette was added.\n[…]\nJean-Nicolas Pache, mayor of the Paris Commune, painted the formula liberté, égalité, fraternité, ou la mort (\"Liberty, Equality, Fraternity, or Death\") on the walls of the commune. It was under the French Third Republic that the motto was made official. It was then not dissociated with insurrection and revolutionary ardours, Opportunist Republicans such as Jules Ferry or Léon Gambetta adapting it to the new political conditions.\n[…]\nMathijsen, Marita. \"The emancipation of the past, as due to the Revolutionary French ideology of Liberté, Egalité, Fraternité.\" Free Access to the Past ed Lotte Jensen (Brill, 2010). 20–40.\n[…]\nSénac, Réjane. \"The Contemporary Conversation about the French Connection \"Liberté, égalité, fraternité\": Neoliberal Equality and \"Non-brothers.\" Revue Française de Civilisation Britannique. French Journal of British Studies 21.XXI-1 (2016). online\n[…]\nLiberty, Equality, Fraternity on the website of the French Presidency"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Libert%C3%A9%2C_%C3%A9galit%C3%A9%2C_fraternit%C3%A9",
        "situacao": "ok",
        "texto": "Liberté, égalité, fraternité (francês para 'liberdade, igualdade, fraternidade', em latim: Libertas, aequalitas, fraternitas; em crioulo haitiano: Libète, egalite, fratènite), é o lema nacional da França e da República do Haiti, e é um exemplo de lema tripartite. Embora suas origens possam ser rastreadas até a Revolução Francesa, era então apenas um lema entre vários popularizados pelos revolucion\n[…]\nMuitas outras nações adotaram o lema francês de \"liberdade, igualdade e fraternidade\" como um ideal. Desde a sua fundação, \"Liberdade, Igualdade e Fraternidade\" tem sido o lema dos Social-Democratas da Dinamarca. No Reino Unido, os Liberais Democratas referem-se aos \"valores fundamentais da liberdade, igualdade e comunidade\" no preâmbulo da Constituição Federal do partido, e isto está impresso nos cartões de filiação do partido.\n[…]\nO lema checo de rovnost, volnost, bratrství (\"Igualdade, Liberdade, Fraternidade\") era um lema do movimento Sokol, uma organização nacional checa de ginástica, no final do século XIX. Os valores liberais da organização fraternal manifestaram-se no movimento de independência checo durante a Primeira Guerra Mundial, quando muitos membros do Sokol se juntaram aos exércitos dos Aliados e formaram a Legião Checoslovaca para formar a Checoslováquia independente em 1918.\n[…]\nAlgumas ex-colônias da República Francesa, como Chade, Níger e Gabão, adotaram lemas nacionais semelhantes, também com três palavras. O Haiti o utiliza em suas moedas desde 1872, tendo usado \"Liberté Égalité\" em moedas anteriores desde 1828. A ideia do lema \"Liberdade, Igualdade, Fraternidade\" influenciou, como princípio fundamental, o Artigo 1.º da Declaração Universal dos Direitos Humanos:\n[…]\nTodos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir uns para com os outros em espírito de fraternidade.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Os Lusíadas",
      "descricao": "Poema épico de Luís de Camões, publicado em 1572, sobre a viagem de Vasco da Gama à Índia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Os Lusíadas, de Camões, que gigante assustador personifica o Cabo das Tormentas e ameaça a frota de Vasco da Gama?",
    "resposta": "Adamastor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Adamastor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Adamastor",
        "situacao": "ok",
        "texto": "Adamastor is a mythological character created by the Portuguese poet Luís de Camões in his epic poem Os Lusíadas (first printed in 1572), as a personification of the Cape of Good Hope, symbolizing the dangers of the sea and the formidable forces of nature challenged and ultimately overcome by the Portuguese during the Age of Discovery. Adamastor manifests itself out of a storm.\n[…]\nCamões gave his creation a backstory as one of the Giants of Greek mythology, banished to the Cape of Good Hope by sea goddess Doris for falling in love with her daughter Tethis, now appearing out of a storm cloud and threatening to ruin anyone hardy enough to attempt passing the Cape and penetrate the Indian Ocean, which was Adamastor's domain. Adamastor became the spirit of the Cape of Good Hope, a hideous phantom of unearthly pallor:\n[…]\nVasco da Gama, ahead of the Portuguese expedition, confronts the creature by asking \"Who are you?\", prompting Adamastor to tell his story.\n[…]\nAdamastor represented the dangers Portuguese sailors faced when trying to round the Cape of Storms – Cabo das Tormentas – henceforth called the Cape of Good Hope.\n[…]\nAdamastor is also mentioned in the opera L'Africaine (1865) about Vasco da Gama by the composer Giacomo Meyerbeer. The slave Nelusko sings a song about Adamastor while he deliberately steers the ship into a storm and it sinks.\n[…]\nAdamastor is also the name of a sauropod dinosaur, Angolatitan adamastor, found in Angola, named by the paleontologist Octávio Mateus.\n[…]\nThe name Adamastor is an adaptation for the Portuguese language from the Greek word for \"Untamed\" or \"Untameable\" (Adamastos) (which the Portuguese did tame).\n[…]\nCyril Coetzee, \"Myth of Adamastor revisited\"\n[…]\nFerreira, Ockert Jacobus Olivier (1940- ), \"Adamastor, Spirit of the Cape of Storms\"/ \"Adamastor, Espírito do Cabo das Tormentas\"/ \"Adamastor, Gees van die Stormkaap\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Adamastor_%28mitologia%29",
        "situacao": "ok",
        "texto": "Adamastor é um gigante mitológico. Sidónio Apolinário cita este gigante pela primeira vez como um dos filhos de Gaia, que se rebelaram contra Zeus e por isso foram fulminados, ficaram dispersos e reduzidos a promontórios, ilhas e fraguedos. Também é citado por Fernando Pessoa no poema O Mostrengo e por Rabelais, em Gargantua e Pantagruel.\n[…]\nSua menção mais memorável, no entanto é feita por Luís de Camões no Canto V da epopeia portuguesa Os Lusíadas, como o gigante do Cabo das Tormentas, que afundava as naus. Como ele foi \"jogado ao fundo dos mares\", desfazia-se em lágrimas, as águas salgadas que banhavam a confluência dos oceanos Atlântico e Índico, e revoltava-se sob a forma de uma tempestade ameaçando a ruína daquele que tentasse dobrar o Cabo das Tormentas, os alegados domínios de Adamastor.\n[…]\nO episódio do Adamastor representa, assim, em figuração grandiosa e comovente, as forças da natureza, a sua oposição à audácia dos navegadores portugueses comandados por Vasco da Gama e a predição da história trágico-marítima que se lhe seguiria. Os Lusíadas ilustra a superação do povo português sobre o medo de navegar em mares desconhecidos, onde este medo é sintetizado pela figura do gigante.\n[…]\nÀ custa de uma experimentação contínua, os marinheiros portugueses aprenderam a recusar esses mitos e chegaram com Bartolomeu Dias ao Cabo das Tormentas, conhecido pela impossibilidade de se navegar, e que, passando a se chamar Cabo da Boa Esperança, lhes abria as portas da Índia. Os mares desse cabo serviram muitas vezes de sepultura a navios carregados de riquezas e de desilusões, como que comprovando as profecias do Adamastor.\n[…]\nBem te vingaste em nós do afouto Gama!Pelos nossos desastres és famoso:Maldito Adamastor! Maldita fama!",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Capela Sistina",
      "descricao": "Capela do Palácio Apostólico, no Vaticano, mandada construir pelo papa Sisto IV e famosa pelos afrescos de Michelangelo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No teto da Capela Sistina, que cena pintada por Michelangelo mostra os dedos de Deus e do primeiro homem quase se tocando?",
    "resposta": "A Criação de Adão",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Creation_of_Adam",
      "https://en.wikipedia.org/wiki/Sistine_Chapel_ceiling"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Creation_of_Adam",
        "situacao": "ok",
        "texto": "The Creation of Adam (Italian: Creazione di Adamo), also known as The Creation of Man, is a fresco painting by Italian artist Michelangelo, which forms part of the Sistine Chapel's ceiling, painted 1508–1512. It illustrates the Biblical creation narrative from the Book of Genesis in which God gives life to Adam, the first man. The fresco is part of a complex  scheme and is chronologically the four\n[…]\nDuring the same period, Michelangelo painted the ceiling of the Sistine Chapel, which took approximately four years to complete (1508–1512). According to Condivi's account, Bramante, who was working on the building of St Peter's Basilica, resented Michelangelo's commission for the Pope's tomb and convinced the Pope to commission him in a medium with which he was unfamiliar, in order that he might fail at the task.\n[…]\nMichelangelo completed two sketches in Rome in preparation for the Creation of Adam scene. They are both in the British Museum in London, revealing Michelangelo's in depth planning process for the Sistine Chapel ceiling composition, and his serious attention to perspective and shadowing.\n[…]\nThe first is a Scheme for the Decoration of the Vault of the Sistine Chapel: Studies of Arms and Hands. The right side of the page was sketched in 1508 with black chalk, and is a study of Adam's limp hand, before it is ignited with the gift of life from God, in the Creation of Adam scene. Michelangelo sketched this over a previous brown, lead point stylus study of the vaulted Sistine Chapel ceiling. The entire composition is 274 millimeters in height and 386 millimeters in width.\n[…]\nList of works by Michelangelo\n[…]\nSistine Chapel of Football\n[…]\nMedia related to Sistine Chapel ceiling - Creation of Adam at Wikimedia Commons\n[…]\nModels of wax and clay used by Michelangelo in making his sculpture and paintings"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sistine_Chapel_ceiling",
        "situacao": "ok",
        "texto": "The Sistine Chapel ceiling (Italian: Soffitto della Cappella Sistina), painted in fresco by Michelangelo between 1508 and 1512, is a cornerstone work of High Renaissance art.\n[…]\nMichelangelo painted the Sistine Chapel ceiling when Renaissance puzzle culture was at its height. There is evidence to show that Michelangelo - like Leonardo da Vinci - engaged in the production of intellectual, visual puzzles. It has been suggested, for instance, that along the spine of the ceiling, Michelangelo created compositions that mapped to anatomic structures of the human body.\n[…]\nMichelangelo's mentor Domenico Ghirlandaio painted Sibyls on the ceiling of Santa Trinita's Sassetti Chapel approximately 20 years prior to the start of the Sistine Chapel ceiling.\n[…]\nMichelangelo was the artistic heir to the great 15th-century sculptors and painters of Florence. He learned his trade first under the direction of a masterly fresco painter, Domenico Ghirlandaio, known for two great fresco cycles in the Sassetti Chapel and Tornabuoni Chapel, and for his contribution to the cycle of paintings on the walls of the Sistine Chapel.\n[…]\nIt seems that Michelangelo, in his own way, allowed himself to be guided by the evocative words of the Book of Genesis which, as regards the creation of the human being, male and female, reveals: \"The man and his wife were both naked, yet they felt no shame\". The Sistine Chapel is precisely – if one may say so – the sanctuary of the theology of the human body.\n[…]\nList of works by Michelangelo\n[…]\nMichelangelo's Ceiling of the Sistine Chapel, Smarthistory video (22:03)\n[…]\nSistine Chapel Panoramas View\n[…]\nThe Sistine Ceiling and the Holy Spirit"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Cria%C3%A7%C3%A3o_de_Ad%C3%A3o",
        "situacao": "ok",
        "texto": "A Criação de Adão é um afresco de 280 cm x 570 cm, pintado por Michelangelo Buonarroti por volta de 1511, que fica no teto da Capela Sistina. A cena representa um episódio do Livro do Gênesis no qual Deus cria o primeiro homem a partir do pó da terra: Adão.\n[…]\nOs dedos de Adão e de Deus estão separados por uma pequena distância.\n[…]\nA composição é obviamente artística e não literal, já que Adão é capaz de alcançar Deus mesmo antes de ter ganho vida. Pela mesma razão, Eva é vista representada antes de sua própria criação. Esse motivo levou algumas pessoas a acreditar que a figura feminina fosse a suposta primeira esposa de Adão, Lilith; entretanto, essa interpretação não faz o menor sentido, já que, em sua lenda, Lilith também teria sido criada depois de Adão.\n[…]\nAs posições de Deus e Adão, a pintura do braço direito de Deus e esquerdo de Adão são quase idênticas e representam o fato de que, como diz o Gênesis 1,27, \"Deus criou o homem à sua imagem e semelhança\".\n[…]\nPor outra perspectiva, alguns estudiosos das artes dizem que uma mensagem é imposta subliminarmente. Quando, olhado de forma diferente, Deus estaria representado dentro de um cérebro e, com o seu toque à Adão, o racionalismo seria representado de forma escondida.\n[…]\nExistem várias teorias sobre o significado da composição original de \"A Criação de Adão\", levantadas principalmente por causa do amplo conhecimento que Michelangelo possuía em Anatomia. Em 1990, um médico chamado Frank Lynn Meshberger, em artigo no Journal of the American Medical Association, afirma que a figura em que Deus está apoiado tem o formato anatómico de um cérebro, incluindo o lobo frontal, nervo ótico, glândula pituitária e o cerebelo.\n[…]\nCapela Sistina\n[…]\nStokes, Adrian (1956). Michelangelo: A Study in the Natpenis",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Palácio de Versalhes",
      "descricao": "Palácio e residência real barroco-clássico em Versalhes, perto de Paris, construído por Luís XIV."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em que salão do Palácio de Versalhes foi assinado, em 1919, o tratado de paz que encerrou a Primeira Guerra Mundial?",
    "resposta": "Galeria dos Espelhos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hall_of_Mirrors"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hall_of_Mirrors",
        "situacao": "ok",
        "texto": "The Hall of Mirrors (French: Grande Galerie, Galerie des Glaces, Galerie de Louis XIV) is a grand Baroque style gallery and one of the most emblematic rooms in the royal Palace of Versailles near Paris, France. The grandiose ensemble of the hall and its adjoining salons was intended to illustrate the power of the absolutist monarch Louis XIV. Located on the first floor (piano nobile) of the palace\n[…]\nThe Hall of Mirrors is—besides the Palace Chapel, completed in the early 18th century, the Court Opera and the Galerie des Batailles—one of the largest rooms in the palace. It is 73 m (240 ft) long and 10.50 m (34.4 ft) deep. With its height of 12.30 m (40.4 ft) it reaches to the Attic floor of the Corps de Logis. The square windows on the upper floor, which can be seen from the outside, only serve aesthetic purposes, as there are no rooms inside.\n[…]\nA few decades later French Prime Minister Georges Clemenceau consciously chose the Hall of Mirrors as the site to sign the Treaty of Versailles on 28 June 1919, that officially ended World War I. Thus, the Entente dismantled the German Empire in the very room where it had been proclaimed."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Galeria_dos_Espelhos",
        "situacao": "ok",
        "texto": "A Galeria dos Espelhos (Galerie des Glaces) é uma das principais galerias do Palácio de Versalhes, em Versalhes, França. A sua construção data de 1678, no reinado de Luís XIV.\n[…]\nUma das características da galeria, são os 17 arcos revestidos com espelho que refletem as 17 janelas em arco viradas para o jardim. Cada arco contém 21 espelhos, num total de 357, utilizados para decorar a galeria. Os arcos estão fixados entre pilastras de mármore cujos capitéis ilustram os símbolos da França. Estes capiteis revestidos a bronze incluem a flor-de-lis e o galo gaulês.\n[…]\nJacquiot, Joseph (1985). «Remarques critiques sur les inscriptions de la galerie de Versailles, par Boileau-Despéaux». Colloque de Versailles\n[…]\nKimball, Fiske (março de 1940). «Mansart and LeBrun and the Genesis of the Grand Galerie de Versailles». The Art Bulletin. 22 (1): 1–6. JSTOR 3046675. doi:10.2307/3046675\n[…]\nLangner, Johannes (1982). «Le Brun interprête de l'histoire de Louis XIV: à propos d'un tableau de la Galerie des Glaces à Versailles». Formes. Spring: 21–26\n[…]\nMontagu, Jenifer (novembro de 1992). «Le Brun's Early Designs for the Grand Galerie: some comments on the drawings». Gazette des Beaux-Arts. 6 pér., tome 120: 195–206\n[…]\nSabatier, Gérard (1985). «Versailles, ou le sens perdu, manière de montrer la galerie des glaces aux 17e et 18e siècles». Colloque de Versailles\n[…]\nVerlet, Pierre (1985). «Les guéridons de la Galerie des Glaces». Bulletin de la société de l'art français: 129–135.\n[…]\n(em francês) Galerie des Glaces\n[…]\n(em francês) La galerie des Glaces em Chateau Versailles",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Guerra de Independência dos Estados Unidos",
      "descricao": "Conflito de 1775 a 1783 em que as Treze Colônias conquistaram a independência da Grã-Bretanha."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1778, durante a guerra de independência americana, que reino europeu assinou uma aliança formal com os rebeldes contra a Grã-Bretanha?",
    "resposta": "França",
    "fonte": [
      "https://en.wikipedia.org/wiki/Treaty_of_Alliance_(1778)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Treaty_of_Alliance_(1778)",
        "situacao": "ok",
        "texto": "The Treaty of Alliance (French: traité d'alliance (1778)), also known as the Franco-American Treaty, was a defensive alliance between the Kingdom of France and the United States formed amid the American Revolutionary War with Great Britain.\n[…]\nIt was signed by delegates of King Louis XVI and the Second Continental Congress in Paris on February 6, 1778, along with the Treaty of Amity and Commerce and a secret clause providing for the entry of other European allies; together these instruments are sometimes known as the Franco-American Alliance or the Treaties of Alliance. The agreements marked the official entry of the United States on the world stage, and formalized French recognition and support of U.S.\n[…]\nOn February 6, 1778, Benjamin Franklin and the two other commissioners, Arthur Lee and Silas Deane, signed the treaty on behalf of the United States, and Conrad Alexandre Gérard signed on behalf of France. On March 13, 1778, France informed Britain of its signing of the treaties and subsequent recognition of the United States as an independent nation; four days later, Britain declared war on France, thereby bringing the French into the American Revolutionary War.\n[…]\nFrench seizures of American naval vessels during the French Revolutionary Wars led to the Quasi-War and further tensions between the erstwhile allies; the Treaty of Mortefontaine of 1800, which brought an end to the conflict, also formally abrogated the Treaty of Alliance.\n[…]\nHoffman, Ronald; Albert, Peter J., eds. Diplomacy and Revolution : the Franco–American Alliance of 1778 (Charlottesville: Univ. Press of Virginia, 1981); ISBN 978-0-8139-0864-9.\n[…]\nCorwin, Edward Samuel. French Policy and the American Alliance of 1778 (New York: B. Franklin, 1970)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tratado_de_Alian%C3%A7a_%281778%29",
        "situacao": "ok",
        "texto": "O Tratado da Aliança (francês: traité d'alliance (1778)), também conhecido como Tratado Franco-Americano, foi uma aliança defensiva entre o Reino da França e os Estados Unidos da América formada em meio à Guerra Revolucionária Americana com a Grã-Bretanha.\n[…]\nOs acordos marcaram a entrada oficial dos Estados Unidos no cenário mundial e formalizaram o reconhecimento e apoio francês à independência dos EUA que seria decisiva para a vitória da América.\n[…]\nOs artigos 1-3 estipulam que, no caso de uma guerra entre a França e a Grã-Bretanha durante as contínuas hostilidades da Guerra Revolucionária Americana, uma aliança militar seria formada entre a França e os Estados Unidos, que combinaria cada força militar e esforços para o objetivo direto de manter a \"liberdade, Soberania e independência absoluta e ilimitada dos referidos Estados Unidos, tanto em Assuntos de Governo como de comércio\".\n[…]\nO Artigo 11 prometia honrar as reivindicações de terras de ambas as nações para sempre no futuro, com os Estados Unidos garantindo total apoio às atuais reivindicações de terras da França e quaisquer terras adquiridas durante a guerra contra todas as outras nações e a França, por sua vez, prometeu apoio ao reivindicações de terras americanas e garantidas para ajudar a preservar a \"liberdade, soberania e independência absolutas e ilimitadas do país, tanto em questões de governo quanto em comércio\".\n[…]\nO Artigo 12 estabelece o acordo como um tratado condicional que só entraria em vigor após uma declaração de guerra entre a França e a Grã-Bretanha, e tornou a terra e as garantias diplomáticas estabelecidas no tratado dependentes da conclusão da Guerra Revolucionária Americana e de uma paz tratado que estabelece formalmente as posses de terra de cada nação.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Festa do Chá de Boston",
      "descricao": "Protesto de 1773 em que colonos americanos jogaram no porto de Boston carregamentos de chá da Companhia Britânica das Índias Orientais."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em 1773, na Festa do Chá de Boston, colonos jogaram no mar caixas de chá britânico. De que muitos deles estavam disfarçados?",
    "resposta": "De indígenas mohawks",
    "fonte": [
      "https://en.wikipedia.org/wiki/Boston_Tea_Party"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Boston_Tea_Party",
        "situacao": "ok",
        "texto": "The Boston Tea Party was an act of protest that took place on December 16, 1773, during the American Revolution. Initiated by the Sons of Liberty in Boston, the capital of Massachusetts, one of the Thirteen Colonies of British America, it escalated tensions between Great Britain and the Patriots, who opposed British policy towards its American colonies.\n[…]\nThe protest movement that culminated with the Boston Tea Party was not a dispute about high taxes. The price of legally imported tea was actually reduced by the Tea Act of 1773. Protesters were instead concerned with a variety of other issues. The familiar \"no taxation without representation\" argument, along with the question of the extent of Parliament's authority in the colonies, remained prominent.\n[…]\nWhile Samuel Adams tried to reassert control of the meeting, people poured out of the Old South Meeting House to prepare to take action. In some cases, this involved donning what may have been elaborately prepared Mohawk costumes. While disguising their individual faces was imperative, because of the illegality of their protest, dressing as Mohawk warriors was a specific and symbolic choice.\n[…]\nThat evening about 6 or 7 o'clock a large group of 30 to 130 men or more, armed with axes and some dressed in the Mohawk warrior disguises, went to the wharves where the tea ships were and boarded the three vessels. Over the course of three hours they dumped all 340 or 342 chests of tea into the water.\n[…]\nOn March 7, Sons of Liberty once again dressed as Mohawks, broke into the shop, and dumped the last remaining tea into the harbor.\n[…]\nJohn Adams, Samuel's second cousin and also a Founding Father, wrote in his diary on December 17, 1773, that the Boston Tea Party proved a historical moment in the American Revolution, writing:\n[…]\nNew York Tea Party\n[…]\nEyewitness to History: The Boston Tea Party, 1773"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Festa_do_Ch%C3%A1_de_Boston",
        "situacao": "ok",
        "texto": "Festa do Chá de Boston (Boston Tea Party, em inglês) é a designação dada a uma ação de protesto executada pelos norte americanos contra o governo britânico, no qual se lançou o carregamento de chá de três navios pertencentes à Companhia Britânica das Índias Orientais às águas do Porto de Boston, em Massachussets.\n[…]\nO incidente, que teve lugar a 16 de dezembro de 1773, constituiu-se como um evento-chave no desenrolar da Revolução Americana e permanece como um acontecimento-chave na História dos Estados Unidos. Os colonos disfarçaram-se de indígenas para invadir os navios da Companhia e atirar a carga de chá ao mar. Os protestos foram levados a cabo pelos Sons of Liberty, uma associação secreta criada pelos colonos contra os britânicos.\n[…]\nO Boston Tea Party era uma forma de os colonos mostrarem aos britânicos que achavam que os britânicos os taxavam injustamente.\n[…]\nEnquanto Samuel Adams tentava reafirmar o controle da reunião, as pessoas saíam do Old South Meeting House para se prepararem para agir. Em alguns casos, isso envolvia vestir o que pode ter sido elaboradamente elaborado com roupas de Mohawk. Embora disfarçar seus rostos individuais fosse imperativo, por causa da ilegalidade de seu protesto, vestir-se como guerreiros mohawk era uma escolha específica e simbólica.\n[…]\nNaquela noite, um grupo de 30 a 130 homens, alguns vestidos com os disfarces dos guerreiros mohawk, abordaram os três navios e, ao longo de três horas, jogaram todos os 342 baús de chá na água. A localização precisa do local de Griffin's Wharf do Tea Party tem estado sujeita a incertezas prolongadas; um estudo abrangente coloca-o perto do pé da Hutchinson Street (a atual Pearl Street).\n[…]\nNavios e Museu da Festa do Chá de Boston (em inglês)\n[…]\nEyewitness to History: A Festa do Chá de Boston, 1773 (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Ilha Run",
      "descricao": "Pequena ilha das ilhas Banda, na atual Indonésia, disputada por ingleses e holandeses no século dezessete."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em 1667, pelo Tratado de Breda, os ingleses ficaram com Manhattan e os holandeses com a pequena ilha Run, produtora de que especiaria?",
    "resposta": "Noz-moscada",
    "distratores": [
      "Cravo",
      "Canela",
      "Pimenta-do-reino"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Run_(island)",
      "https://en.wikipedia.org/wiki/Treaty_of_Breda_(1667)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Run_(island)",
        "situacao": "ok",
        "texto": "Run (also known as Pulau Run, Pulo Run, Puloroon,  Polo or Rhun – pulau is 'island' in Indonesian) is one of the smallest islands of the Banda Islands, which are a part of the Moluccas, Indonesia. It is located within Banda District (kecamatan) in Central Maluku Regency.\n[…]\nRun is the westernmost island of the Banda Islands, with a length of 3 kilometres (1.9 mi) and width of 1 kilometre (0.62 mi). The neighbouring island of Pulau Ay is about 7 km east and the small islet of Pulau Naijalaka is 0.7 km north.\n[…]\nA small settlement was first attempted on the islet of Pulau Naijalaka off the north end of Pulau Rhun.\n[…]\nAfter the Second Anglo-Dutch War (1665–1667), England and the United Provinces of the Netherlands agreed in the Treaty of Breda to the status quo: the English kept the island of Manhattan, which the Duke of York (the future James II, brother of Charles II), had occupied in 1664, renaming the city on that island from New Amsterdam to New York. In return, Run was formally abandoned to the Dutch."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Treaty_of_Breda_(1667)",
        "situacao": "ok",
        "texto": "The Peace of Breda, or Treaty of Breda was signed in the Dutch city of Breda, on 31 July 1667. It consisted of three separate treaties between England and each of its opponents in the Second Anglo-Dutch War: the Dutch Republic, France, and Denmark–Norway. It also included a separate Anglo-Dutch commercial agreement.\n[…]\nAfter the treaties were signed on 31 July, they were sent to each country for ratification, a process which was completed by 24 August and followed by public celebrations in Breda.\n[…]\nOverall, the Dutch considered Breda and the creation of the Alliance a diplomatic triumph; the period immediately following is often considered the high point of the Dutch Golden Age.\n[…]\nBoniface, Patrick (14 June 2017). \"The Royal Navy's Darkest Day: Medway 1667\". Military History. Retrieved 25 October 2019.\n[…]\nBritannica.com. \"Treaty of Breda\". Britannica.com. Retrieved 26 October 2019.\n[…]\nGooskens, Frans (2016). Sweden and the Treaty of Breda in 1667 – Swedish diplomats help to end naval warfare between the Dutch Republic and England (PDF). De Oranje-boom; Historical and Archeology Circle of the City and Country of Breda.\n[…]\nHaythornthwaite, Shavana. \"The Peace of Breda (1667)\". OPIL. Retrieved 23 October 2019.\n[…]\nLesaffer, Randall (2016). De Vrede van Breda en de Europese traditie van vredesverdragen in Ginder 't Vreêverbont bezegelt : Essays over de betekenis van de Vrede van Breda 1667. Van Kemenade.\n[…]\nLynn, John (1996). The Wars of Louis XIV, 1667–1714 (Modern Wars in Perspective). Longman. ISBN 978-0582056299.\n[…]\nPepys, Samuel (8 September 1667). \"The Diary of Samuel Pepys; 8 September 1667\". PepysDiary.com. Retrieved 26 October 2019.\n[…]\nRommelse, Gijs (2006). The Second Anglo-Dutch War (1665-1667): raison d'état, mercantilism and maritime strife. Uitgeverij Verloren. ISBN 978-9065509079."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Run_%28ilha%29",
        "situacao": "ok",
        "texto": "Run é uma das menores ilhas de Banda, na Indonésia. Mede aproximadamente 3 km de comprimento e 1 km de largura.\n[…]\nNo século XVII apresentava grande importância econômica em função da produção de diversas especiarias, sobretudo a noz-moscada, que era obtida a partir da Myristica fragans, uma árvore muito abundante nessa ilha. Tanta importância que ela foi trocada pela cidade de Nova Amsterdã, que viria a ser renomeada Nova Iorque num acordo com a Inglaterra após as Guerras Anglo-Holandesas.\n[…]\nAtualmente, sua economia é baseada na pesca e na produção de noz-moscada . Apesar de possuir amplo potencial turístico, uma vez que conta com a presença de mares tropicais cercados por recifes de corais, a ilha é pouco visitada por turistas estrangeiros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Bíblia de Gutenberg",
      "descricao": "Primeiro grande livro impresso com tipos móveis na Europa, produzido por Johannes Gutenberg em Mainz nos anos 1450."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em que língua foi impressa a famosa Bíblia de Johannes Gutenberg, nos anos 1450?",
    "resposta": "Latim",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gutenberg_Bible"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gutenberg_Bible",
        "situacao": "ok",
        "texto": "The Gutenberg Bible, also known as the 42-line Bible, the Mazarin Bible or the B42, is the earliest major book printed in Europe using mass-produced metal movable type. It marked the start of the \"Gutenberg Revolution\" and the age of printed books in the West. The book is valued and revered for its high aesthetic and artistic qualities and its historical significance.\n[…]\nPreparation of the Bible probably began soon after 1450, and the first finished copies were available in 1454 or 1455. It is not known exactly how long the Bible took to print. The first precisely datable printing is Gutenberg's 31-line Indulgence which certainly existed by 22 October 1454.\n[…]\nIn a legal paper, written after completion of the Bible, Johannes Gutenberg refers to the process as Das Werk der Bücher (\"the work of the books\"). He had introduced the printing press to Europe and created the technology to make printing with movable types finally efficient enough to facilitate the mass production of entire books.\n[…]\nThe Gutenberg Bible is printed in the blackletter type styles that would become known as Textualis (Textura) and Schwabacher. The name Textura refers to the texture of the printed page: straight vertical strokes combined with horizontal lines, giving the impression of a woven structure. Gutenberg already used the technique of justification, that is, creating a vertical, not indented, alignment at the left and right-hand sides of the column.\n[…]\n1462 The Gutenberg Bible Latin Vulgate – via archive.org.\n[…]\nFragment of the Gutenberg Bible, Biblia Latina [Armoire S], at the Library of Trinity College Dublin\n[…]\nFragment of the Gutenberg Bible, A Noble Fragment: Being a Leaf of the Gutenberg Bible (1450–55), at the Clark Library of the University of California, Los Angeles\n[…]\nFragment of the Gutenberg Bible at the John Carter Brown Library of the Early Americas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/B%C3%ADblia_de_Gutenberg",
        "situacao": "ok",
        "texto": "A Bíblia de Gutenberg (também conhecida como Bíblia de Mazari ou Bíblia de 42 linhas) é o incunábulo impresso da tradução em latim da Bíblia, por Johannes Gutenberg, em Mogúncia (atual Mainz), Alemanha. A produção da Bíblia começou em 1450, tendo Gutenberg usado uma prensa de tipos móveis. Calcula-se que tenha terminado em 1455. Essa Bíblia é considerada o incunábulo mais importante, pois marca o \n[…]\nA preparação da Bíblia provavelmente começou logo após 1450, e os primeiros exemplares finalizados ficaram prontos em 1454 ou 1455. Não se sabe exatamente quanto tempo levou para imprimir a Bíblia. A primeira impressão com data precisa é a Indulgência de Gutenberg, com 31 linhas, que certamente existia em 22 de outubro de 1454.\n[…]\nA Bíblia de 42 linhas foi impressa em um papel do tamanho conhecido como 'Real'. Uma folha inteira de papel Real mede 42 cm × 60 cm (17 pol × 24 pol) e uma única folha fólio não aparada mede 42 cm × 30 cm (17 pol × 12 pol). Um único exemplar completo da Bíblia de Gutenberg tem 1.288 páginas (4×322 = 1288) (geralmente encadernado em dois volumes); com quatro páginas por folha fólio, são necessárias 322 folhas de papel por exemplar.\n[…]\nA Bíblia de Gutenberg é impressa nos estilos de tipografia gótica que ficariam conhecidos como Textualis (Textura) e Schwabacher. O nome Textura refere-se à textura da página impressa: traços verticais retos combinados com linhas horizontais, dando a impressão de uma estrutura tecida. Gutenberg já utilizava a técnica de justificação, ou seja, criar um alinhamento vertical, sem recuo, nos lados esquerdo e direito da coluna.\n[…]\nA Biblioteca Nacional do Brasil, no Rio de Janeiro, possui uma cópia de uma bíblia do início da produção em Mainz, mas ela foi produzida por dois ex-sócios de Gutenberg, os alemães Johann Fust e Peter Schoffer, e não é uma bíblia de Gutenberg, como é frequentemente divulgado. ==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Leonardo da Vinci",
      "descricao": "Pintor, inventor e cientista do Renascimento italiano (1452–1519), autor da Mona Lisa e da Última Ceia."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Leonardo da Vinci tinha um jeito curioso de escrever em seus cadernos de anotações. Como era essa escrita?",
    "resposta": "Espelhada, da direita para a esquerda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
      "https://en.wikipedia.org/wiki/Mirror_writing"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
        "situacao": "ok",
        "texto": "Leonardo di ser Piero da Vinci (15 April 1452 – 2 May 1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. While his fame initially rested on his achievements as a painter, he has also become known for his notebooks, in which he made drawings and notes on a variety of subjects, including anatomy, ast\n[…]\nLeonardo da Vinci, properly named Leonardo di ser Piero da Vinci (\"Leonardo, son of ser Piero from Vinci\"), was born on 15 April 1452 in, or close to, the Tuscan hill town of Vinci, about 35 kilometres (22 miles) from Florence. He was born out of wedlock to Piero da Vinci (Ser Piero da Vinci d'Antonio di ser Piero di ser Guido; 1426–1504), a Florentine legal notary, and Caterina di Meo Lippi (c. 1434–1494), from the lower class.\n[…]\nIn 1863, fine-arts inspector general Arsène Houssaye received an imperial commission to excavate the site and discovered a partially complete skeleton with a bronze ring on one finger, white hair, and stone fragments bearing the inscriptions \"EO\", \"AR\", \"DUS\", and \"VINC\" –  interpreted as forming \"Leonardus Vinci\".\n[…]\nIn 2019, documents were published revealing that Houssaye had kept the ring and a lock of hair. In 1925, his great-grandson sold these to an American collector. Sixty years later, another American acquired them, leading to their being displayed at the Leonardo Museum in Vinci beginning on 2 May 2019, the 500th anniversary of the artist's death.\n[…]\nLeonardo polyhedron\n[…]\nLeonardo da Vinci's Notebooks\n[…]\nUniversal Leonardo, a database of Leonardo's life and works maintained by Martin Kemp and Marina Wallace\n[…]\nLeonardo da Vinci on the National Gallery website\n[…]\nBiblioteca Leonardiana, online bibliography (in Italian)\n[…]\nWorks by Leonardo da Vinci at Project Gutenberg\n[…]\nWorks by Leonardo da Vinci at LibriVox (public domain audiobooks)\n[…]\nThe Notebooks of Leonardo da Vinci"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mirror_writing",
        "situacao": "ok",
        "texto": "Mirror writing is formed by writing in the direction that is the reverse of the natural way for a given language, such that the result is the mirror image of normal writing: it appears normal when reflected in a mirror. It is sometimes used as an extremely primitive form of cipher.\n[…]\nSome people are able to produce handwritten mirrored text. Notably, Leonardo da Vinci wrote most of his personal notes in this way. Mirror writing calligraphy was popular in the Ottoman Empire, where it often carried mystical associations.\n[…]\nLeonardo da Vinci wrote most of his personal notes in mirror writing, using standard writing only if he intended his texts to be read by others. The purpose of this practice by Leonardo remains unknown, though several possible reasons have been suggested. For example, writing left handed from left to right would have been messy because the ink just put down would smudge as his hand moved across it. Writing in reverse would prevent such smudging."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Leonardo_da_Vinci",
        "situacao": "ok",
        "texto": "Leonardo di Ser Piero da Vinci (), ou simplesmente Leonardo da Vinci (Anchiano, 15 de abril de 1452 — Amboise, 2 de maio de 1519), foi um polímata nascido na atual Itália, uma das figuras mais importantes do Alto Renascimento, que se destacou como cientista, matemático, engenheiro, inventor, anatomista, pintor, escultor, arquiteto, botânico, poeta e músico. É ainda conhecido como o precursor da av\n[…]\nNa inscrição no topo do papel, Leonardo descreve o vestuário do executado, incluindo as cores com sua típica escrita invertida. Na margem inferior direita do trabalho aparece ainda uma cabeça. Referência notável para o seu trabalho é a facilidade e o domínio do traço, que revelaria mais tarde no pincel. Duas outras pinturas parecem datar deste seu período no ateliê de Verrocchio, ambas Anunciações.\n[…]\nEm ambas as Anunciações Leonardo utilizou-se de um arranjo formal (como nas célebres pinturas de Fra Angelico sobre o mesmo assunto), da Virgem Maria sentada ou ajoelhada à direita do quadro, com um anjo de perfil se aproximando pela esquerda, com as asas eretas e portando um lírio em um cenário aberto, com um rico jogo de perspectiva linear. Embora tenha sido atribuído anteriormente a Ghirlandaio, a maior das duas obras é considerada de maneira unânime nos dias de hoje como sendo de Leonardo.\n[…]\nA maioria dos escritos de Leonardo está em escrita cursiva em escrita especular. Como Leonardo escrevia com a mão esquerda, provavelmente era mais fácil para ele escrever da direita para a esquerda.\n[…]\nOs cadernos são, em sua maioria, escritos de forma invertida (da direita para a esquerda). A razão pode ter sido mais uma oportunidade prática, do que por razões de sigilo como muitas vezes é sugerido. Sendo Leonardo provavelmente canhoto, é possível que lhe era mais fácil escrever da direita para a esquerda.\n[…]\nLeonardo da Vinci no Projeto Gutenberg\n[…]\nObras de ou sobre Leonardo da Vinci no Internet Archive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Ivan, o Terrível",
      "descricao": "Ivan IV, grão-príncipe de Moscou a partir de 1533 e coroado czar de toda a Rússia em 1547."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em 1547, Ivan, o Terrível, tornou-se o primeiro governante russo coroado com que título?",
    "resposta": "Czar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ivan_the_Terrible"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ivan_the_Terrible",
        "situacao": "ok",
        "texto": "Ivan IV Vasilyevich (Russian: Иван IV Васильевич; 25 August 1530 – 28 March [O.S. 18 March] 1584), commonly known as Ivan the Terrible, was Grand Prince of Moscow and all Russia from 1533 to 1547 and the first Tsar and Grand Prince of all Russia from 1547 until his death in 1584. Ivan's reign was characterised by Russia's transformation from a medieval state to a fledgling empire, but at an immens\n[…]\nIn September or October 1575, Ivan IV unexpectedly proclaimed Simeon Bekbulatovich, a statesman of Tatar origin, as Grand Prince of All Russia. Simeon served as a nominal ruler for about a year, while Ivan retained de facto control of the government. According to the English envoy Giles Fletcher the Elder, Simeon—acting on Ivan’s instructions—confiscated lands belonging to monasteries, while Ivan publicly feigned opposition to the measure.\n[…]\nIvan completely altered Russia's governmental structure, establishing the character of modern Russian political organisation. Ivan's creation of the oprichnina, answerable only to him, afforded him personal protection and curtailed the traditional powers and rights of the boyars. Henceforth, tsarist autocracy and despotism would lie at the heart of the Russian state. Ivan bypassed the mestnichestvo system and offered positions of power to his supporters among the minor gentry.\n[…]\nIvan's management of Russia's economy had negative consequences, both in his lifetime and afterwards. He had inherited a government in debt, and in an effort to raise more revenue for his expansionist wars, he instituted a series of taxes on the peasantry and urban population. Martin (2007) stated: \"The reign of Ivan IV the Terrible was, in short, a disaster for Muscovy. (...) his subjects were impoverished, his economic resources depleted, his army weakened, and his realm militarily defeated.\n[…]\nIvan the Czar., versions of a poem by Felicia Hemans."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Iv%C3%A3_IV_da_R%C3%BAssia",
        "situacao": "ok",
        "texto": "Ivã IV Vasilyeviche (Kolomenskoye, 25 de agosto de 1530 – Moscou, 28 de março de 1584), apelidado de Ivã, o Terrível, foi o último Grão-Príncipe de Moscou de 1533 até a fundação do Czarado da Rússia em 1547, continuando a reinar como seu czar até sua morte. Era filho do Grão-príncipe Basílio III e sua segunda esposa Helena Glinskaia.\n[…]\nEm 16 de Janeiro de 1547, quando Ivã tinha 16 anos, foi coroado com o gorro Monômaco na Catedral da Dormição. Ivã IV foi a primeira pessoa a receber o título de czar e grão-príncipe de toda a Rússia, afirmando sua ascendência Rus. Antes disso, os governantes da Moscóvia eram coroados apenas como grão-príncipes, apesar de Ivã III, seu avô, também ser denominado \"czar\". O título czar foi adoptado por Ivã IV da Rússia como um símbolo da natureza da monarquia russa.\n[…]\nAo ser coroado czar, Ivã introduziu a monarquia czarista na Rússia enviando uma mensagem para todo o mundo e para toda a Rússia: seria o único governante supremo do país, e a sua vontade não deveria ser questionada. O novo título simbolizava uma assunção de poderes equivalentes aos de imperador bizantino e paralelos aos do tártaro cã. O efeito político foi para a elevação da posição de Ivã.\n[…]\nFilho de Ivã e Anastácia Romanova Zacarina foi o último czar russo da dinastia ruríquida, de 1594 a 1598.\n[…]\nA imagem criada de Ivã IV da Rússia ao longo do folclore russo é um contraste directo com o que normalmente é descrito dele e seu governo pelos historiadores. Como o folclorista Jack V. Haney afirma, os contos \"sobre Ivã IV, conhecido como o Terrível, são especialmente interessantes em que eles retratam o primeiro czar Ortodoxo de todas as Rússias sob uma luz muito diferente da que os historiadores fazem\".\n[…]\nIvã, o primeiro czar, por Laurence Catinot-Crost, História Viva, Ed. nº 113\n[…]\n«Os ancestrais do czar Ivã IV» (em russo)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Queixo dos Habsburgos",
      "descricao": "Prognatismo mandibular hereditário que marcou vários membros da dinastia Habsburgo, associado aos casamentos entre parentes."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Que traço físico, herdado por gerações graças a casamentos entre parentes, ficou famoso nos retratos dos reis Habsburgos?",
    "resposta": "O queixo proeminente",
    "fonte": [
      "https://en.wikipedia.org/wiki/Prognathism",
      "https://en.wikipedia.org/wiki/Charles_II_of_Spain"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Prognathism",
        "situacao": "ok",
        "texto": "Prognathism is a positional relationship of the mandible or maxilla to the skeletal base where either of the jaws protrudes beyond a predetermined imaginary line in the coronal plane of the skull.\n[…]\nIn the case of mandibular prognathism (never maxillary prognathism), this is often also referred to as Habsburg chin, Habsburg's chin, Habsburg jaw or Habsburg's jaw especially when referenced with the context of its prevalence amongst historical members of the House of Habsburg.\n[…]\nMandibular prognathism is a protrusion of the mandible, affecting the lower third of the face.\n[…]\nMandibular prognathism is a potentially disfiguring genetic disorder where the lower jaw outgrows the upper, resulting in an extended chin and a crossbite. In both humans and animals, it can be the result of inbreeding.\n[…]\nUnlike alveolar or maxillary prognathism, which are common traits in some populations, mandibular prognathism is typically pathological. However, it is more common among East Asian populations but overall, the condition is polygenic.\n[…]\nPrior to the development of modern dentistry, there was no treatment for this condition; those who had it simply endured it. Today, the most common treatment for mandibular prognathism is a combination of orthodontics and orthognathic surgery. The orthodontics can involve braces, removal of teeth, or a mouthguard.\n[…]\nWolff, G; Wienker, T F; Sander, H (1 February 1993). \"On the genetics of mandibular prognathism: analysis of large European noble families\". Journal of Medical Genetics. 30 (2): 112–116. doi:10.1136/jmg.30.2.112. PMC 1016265. PMID 8445614.\n[…]\nThe dictionary definition of prognathism at Wiktionary"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Charles_II_of_Spain",
        "situacao": "ok",
        "texto": "Charles II (6 November 1661 – 1 November 1700) was King of Spain from 1665 to 1700. The last monarch from the House of Habsburg, which had ruled Spain since 1516, his death without children resulted in the 1701 to 1714 War of the Spanish Succession.\n[…]\nBorn on 6 November 1661, Charles was the only surviving son of Philip IV of Spain and his second wife, his niece Mariana of Austria. Marriage within the same extended family was then common among the nobility, but the Spanish and Austrian Habsburgs were unusual in the extent to which they followed this practice.\n[…]\nIntramarriage accentuated the so-called \"Habsburg jaw\", a physical characteristic common in both Spanish and Austrian Habsburgs. One contemporary reported this was so pronounced in Charles that he swallowed his food without thoroughly chewing, leading to frequent stomach problems. A 2019 study based on an analysis of Habsburg portraits concluded this feature was likely due to a recessive trait, but in the absence of genetic material, such claims remain speculative.\n[…]\nTraditional historiography portrayed Charles as both ineffectual and mentally disabled, emblematic of the decline of Habsburg Spain after the wars of the 17th century. However, more recent scholarship argues these views were heavily influenced by their Bourbon successors, who used propaganda to diminish the previous dynasty."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Prognatismo_mandibular",
        "situacao": "ok",
        "texto": "Em antropologia e medicina, chama-se prognatismo (do grego pro, \"movimento para a frente\", + gnathós \"mandíbula\") à proeminência dos dentes em relação ao plano  da face. Em animais com crânio o prognatismo é resultado de uma hipotrofia óssea da maxila ou hipertrofia óssea da mandíbula - a mandíbula é mais longa que a maxila. Artrópodes também podem ser apontados como prognatas, como por exemplo as\n[…]\nNo caso de prognatismo mandibular (nunca prognatismo maxilar), este também é frequentemente referido como mandíbula de Habsburgo, mandíbula de Áustria, maxilar de Habsburgo, maxilar de Áustria, lábio de Habsburgo ou lábio de Áustria, especialmente quando referenciado no contexto de sua prevalência entre os membros históricos da Casa de Habsburgo.\n[…]\nEm medicina, esta proeminência pode ser considerada uma afeção esquelética, ou seja, uma deformação da face, causada por um acidente, ou de origem genética, como o “famoso” prognatismo mandibular.\n[…]\nCostuma-se referir a esta condição, em termos informais, como mandíbula de Habsburgo, mandíbula de Áustria, maxilar de Habsburgo, maxilar de Áustria, lábio de Habsburgo ou lábio de Áustria, devido à prevalência desta manifestação nessa família real europeia, através da endogamia, isto é, dos casamentos interconsanguíneos realizados.\n[…]\nMuitas vezes por motivos políticos, os casamentos dinásticos dos Habsburgos eram arranjados entre primos muito próximos, ou tios e sobrinhos - donde resultou esta condição, quase sem paralelo noutra casa europeia, pois os Habsburgos eram a casa com mais casamentos interconsanguíneos ao longo dos séculos XVI e XVII; a partir do século XVIII, tornou-se gradualmente menos evidente.\n[…]\nFernando II de Habsburgo\n[…]\nFernando III de Habsburgo\n[…]\nLeopoldo I de Habsburgo\n[…]\nMaximiliano I de Habsburgo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Janízaros",
      "descricao": "Corpo de infantaria de elite do Império Otomano, formado a partir do século catorze e extinto em 1826."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Os janízaros, tropa de elite do Império Otomano, eram recrutados ainda meninos em famílias de que religião?",
    "resposta": "Cristã",
    "fonte": [
      "https://en.wikipedia.org/wiki/Janissary",
      "https://en.wikipedia.org/wiki/Devshirme"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Janissary",
        "situacao": "ok",
        "texto": "A janissary (UK:  JAN-iss-ər-ee, US:  -⁠err-ee; Ottoman Turkish: یڭیچری, romanized: yeñiçeri, IPA: [jeˈɲit͡ʃeɾ̞i], lit. 'new soldier') was a member of the elite infantry units that formed the Ottoman sultan's household troops. They were one of the first modern standing armies, and perhaps the first infantry force in the world to be equipped primarily with firearms, adopted during the reign of Mura\n[…]\nJanissaries began as an elite corps made up through the devşirme system of child levy enslavement, by which Christian boys, chiefly from the Balkans, were taken, levied, subjected to forced circumcision and forced conversion to Islam, and incorporated into the Ottoman army. They became famed for internal cohesion cemented by strict discipline and order. Unlike typical slaves, they were paid regular salaries.\n[…]\nJews were not allowed to join the Janissary Corps, and so in suspected cases the entire batch would be sent to the Imperial Arsenal as indentured laborers. Ottoman documents from the levy of the winter of 1603–1604 from Bosnia and Albania wrote to draw attention to some children as \"possibly being Jewish\" (şekine-i arz-ı yahudi). According to the Encyclopedia Britannica, \"in early days, all Christians were enrolled indiscriminately.\n[…]\nLater, those from what is now Albania, Bosnia, Serbia, Greece, Bulgaria and Hungary were preferred.\" The Bektashi Order became the official religious and spiritual institution of the Janissaries in the 15th century.\n[…]\nGreek historian Dimitri Kitsikis in his book Türk Yunan İmparatorluğu (\"Turco-Greek Empire\") states that many Bosnian Christian families were willing to comply with the devşirme because it offered a possibility of social advancement. Conscripts could one day become Janissary colonels, statesmen who might one day return to their home region as governors, or even Grand Viziers or beylerbey (\"governor generals\")."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Devshirme",
        "situacao": "ok",
        "texto": "Devshirme (Ottoman Turkish: دوشیرمه, romanized: devşirme, lit. 'collecting', usually translated as \"child levy\" or \"blood tax\") was the Ottoman practice of forcibly recruiting soldiers and bureaucrats from among the children of their Balkan Christian subjects and raising them in the religion of Islam. Those coming from the Balkans came primarily from noble Balkan families and rayah classes. It is \n[…]\nGreek scholar Janus Lascaris visited Constantinople in 1491 and met many janissaries who not only remembered their former religion and their native land but also favored their former coreligionists. The renegade Hersek, the sultan's relative by marriage, told him that he regretted having left the religion of his fathers and that he prayed at night before the cross which he kept carefully concealed.\n[…]\nTavernier noted in 1678 that the janissaries looked more like a religious order than a military corps. The members of the organization were not banned from marriage, as Tavernier further noted, but it was very uncommon for them. He went on to write that their numbers had increased to a hundred thousand but only due to a degeneration of regulations, with many of them in fact being \"fake\" janissaries, posing as such for tax exemptions and other social privileges.\n[…]\nthe periodic conscription of 'tribute boys', by which the children of Christians were wrung from their families, churches, and communities to be molded into Ottoman praetorians owing their allegiance to the Sultan and the official faith of Islam.\" This system as explained by Çandarlı Kara Halil Hayreddin Pasha, founder of the Janissaries: \"The conquered are slaves of the conquerors, to whom their goods, their women, and their children belong as lawful possession\".\n[…]\nNasuh, Matrakci (1588). \"Janissary Recruitment in the Balkans\". Süleymanname, Topkapi Sarai Museum, Ms Hazine 1517."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jan%C3%ADzaro",
        "situacao": "ok",
        "texto": "Os janízaros, janizaros ou janíçaros (do turco Yeniçeri, ou \"Nova Força\") constituíram a elite do exército dos sultões otomanos. A força, criada pelo sultão Murade I, cerca de 1365, era constituída de crianças cristãs capturadas em batalha, levadas como escravas e convertidas ao Islã.\n[…]\nDeviam ainda aceitar certas condições:\n[…]\nOs janízaros ainda tinham o hábito de levar consigo símbolos ou citações cristãs para a batalha, com consentimento de seus superiores.\n[…]\nAssim, tornou-se uma prática comum nas campanhas empreendidas pelos otomanos na Europa capturar meninos nas cidades conquistadas e levá-los para os centros de treinamento turcos. Quando não estavam em guerra, os sultões exigiam de seus estados vassalos cristãos nos Bálcãs uma remessa de jovens para compor o corpo de janízaros.\n[…]\nEmbora tenha sido criação de Murad I, somente cinquenta anos depois, esse costume tornou-se uma tributação regular, o devsirme: a cada cinco anos, os camponeses cristãos deviam informar o número de filhos. Então um em cada cinco meninos, em geral em torno de seis ou sete anos, era levado pelos oficiais do sultão e obrigado a tornar-se muçulmano. Em teoria era um imposto cobrado a todas as regiões cristãs do Império Otomano, mas recaiu mais pesadamente na Bósnia, Albânia e Bulgária.\n[…]\nOs janízaros permaneceram por muito tempo como a elite do exército turco, entrando em batalha em momentos decisivos ou apenas como último recurso para garantir a segurança do sultão. Ao longo do século XIX perderam sua força, em parte porque o recrutamento de jovens cristãos tornava-se cada vez mais difícil frente à oposição de potências igualmente fortes militarmente, como Reino Unido e França, e também devido à progressiva retração territorial do Império Otomano na Europa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Mercantilismo",
      "descricao": "Conjunto de ideias e práticas econômicas dominante na Europa entre os séculos dezesseis e dezoito, voltado ao acúmulo de riqueza pelo Estado."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Para o mercantilismo, doutrina econômica da Idade Moderna, a riqueza de um país se media pelo acúmulo de quê?",
    "resposta": "Ouro e prata",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mercantilism"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mercantilism",
        "situacao": "ok",
        "texto": "Mercantilism is an economic system and type of nationalist economic policy that is designed to maximize exports and minimize imports of an economy. It seeks to maximize the accumulation of resources within the country and use those resources for one-sided trade. Mercantilist policies have contributed to armed conflict and motivated colonial expansion. Economic intervention – especially in industri\n[…]\nMercantilist ideas were the dominant economic ideology of all of Europe in the early modern period, and most states embraced it to a certain degree. Mercantilism was centred on England and France, and it was in these states that mercantilist policies were most often enacted. The United States, a former British colony, has also employed mercantilist policies at times in its economic history.\n[…]\nMercantilism as a weapon has continued to be used by countries through the 21st century by way of modern tariffs, as it puts smaller economies in a position where they may need to conform to the larger economies' goals or risk economic ruin due to an imbalance in trade. Trade wars are often dependent on such tariffs and restrictions hurting an opposing economy.\n[…]\nMercantilism developed at a time of transition for the European economy. Isolated feudal estates were being replaced by centralized nation-states as the focus of power. Technological changes in shipping and the growth of urban centers led to a rapid increase in international trade. Mercantilism focused on how this trade could best aid the states. Another important change was the introduction of double-entry bookkeeping and modern accounting.\n[…]\nHeckscher, Eli F. (1936) \"Revisions in Economic History: V. Mercantilism.\" Economic History Review, 7#1 1936, pp. 44–54. online\n[…]\nVaggi, Gianni; Groenewegen, Peter (2003), A Concise History of Economic Thought: From Mercantilism to Monetarism, New York: Palgrave Macmillan, ISBN 978-0-333-99936-3"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mercantilismo",
        "situacao": "ok",
        "texto": "Mercantilismo é um conjunto de práticas econômicas desenvolvido na Europa na Idade Moderna, entre o século XV e o final do século XVIII. O mercantilismo originou um conjunto de medidas econômicas diversas de acordo com os Estados. Caracterizou-se por uma forte intervenção do Estado na economia. Consistiu numa série de medidas tendentes a unificar o mercado interno e teve como finalidade a formação\n[…]\nAs políticas mercantilistas partilhavam a crença de que a riqueza de uma nação residia na acumulação de metais preciosos (ouro e prata), advogando que estes se atrairiam através do incremento das exportações e da restrição das importações (procura de uma balança comercial favorável). Essa crença é conhecida como bulionismo ou metalismo.\n[…]\nA prosperidade de um Estado mede-se, segundo os bullionistas, pela riqueza acumulada pelo governo, sem mencionar a Renda Nacional. Este interesse para as reservas de ouro e prata é explicado em parte pela importância dessas matérias-primas na época de guerra. Os exércitos, que contavam com muitos mercenários, eram pagos com ouro e exceto os poucos países europeus que controlavam as minas de ouro e prata, a principal maneira de obter essas matérias-primas era o comércio internacional.\n[…]\nQue sejam procuradas constantemente as oportunidades para vender o excedente de manufaturas de um país aos estrangeiros, na medida necessária, em troca de ouro e prata;\n[…]\nOutro dos objetivos principais à hora de criticar as teorias do mercantilismo foi a importância que dada aos metais preciosos, mesmo quando alguns mercantilistas começaram a tirar a importância do ouro e a prata. Adam Smith apontou que os metais preciosos eram exatamente iguais que qualquer outro bem de consumo, e que não havia razão alguma para lhe dar um tratamento especial. O ouro não era mais do que um metal de cor amarela que era valioso simplesmente por não ser abundante.\n[…]\nIdade Moderna",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Maria Antonieta",
      "descricao": "Arquiduquesa austríaca que foi rainha da França como esposa de Luís XVI e foi guilhotinada em 1793."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Pelos gastos luxuosos numa França endividada, que apelido pejorativo ligado às finanças a rainha Maria Antonieta recebeu?",
    "resposta": "Madame Déficit",
    "fonte": [
      "https://en.wikipedia.org/wiki/Marie_Antoinette"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marie_Antoinette",
        "situacao": "ok",
        "texto": "Marie Antoinette (Marie Antoinette Josèphe Jeanne; 2 November 1755 – 16 October 1793) was Queen of France as the wife of Louis XVI from 10 May 1774 until the abolition of the French monarchy in 1792 during the French Revolution.\n[…]\nShe was falsely accused of defrauding the Crown's jewelers in the Affair of the Diamond Necklace, but the accusations still damaged her reputation. During the French Revolution, she became known as Madame Déficit because the country's financial crisis was blamed on her lavish spending and her opposition to social and financial reforms proposed by Anne Robert Jacques Turgot and Jacques Necker.\n[…]\nMaria Antonia had a difficult but ultimately loving relationship with her mother, who referred to her as \"the little Madame Antoine\".\n[…]\nAs a result of the public perception that she had single-handedly ruined the national finances, Marie Antoinette was given the nickname of \"Madame Déficit\" in the summer of 1787. While the sole fault for the financial crisis did not lie with her, Marie Antoinette was the biggest obstacle to any major reform effort. She had played a decisive role in the disgrace of the reformer ministers of finance, Anne-Robert-Jacques Turgot (in 1776), and Jacques Necker (first dismissal in 1781).\n[…]\nIn addition, at the insistence of Marie Antoinette, Louis vetoed several measures that would have further restricted his power, earning the royal couple the nicknames \"Monsieur Veto\" and \"Madame Veto\", nicknames then prominently featured in different contexts, including La Carmagnole.\n[…]\nThe marais of Marie-Antoinette on parismarais.com\n[…]\nCelebrating Marie-Antoinette blog article on waddesdon.org.uk\n[…]\nMarie Antoinette: a childhood overshadowed by politics on habsburger.net"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maria_Antonieta",
        "situacao": "ok",
        "texto": "Maria Antonieta (em alemão:  Maria Antonia Josepha Johanna von Österreich-Lothringen; em francês: Marie Antoinette Josèphe Jeanne de Habsbourg-Lorraine; Viena, 2 de novembro de 1755 — Paris, 16 de outubro de 1793) foi uma arquiduquesa da Casa de Habsburgo-Lorena e rainha consorte da França e Navarra entre 1774 e 1792, como esposa do rei Luís XVI de França.\n[…]\nEm agosto, o rei presenteou a esposa com o Petit Trianon, um anexo construído anos antes para a Madame de Pompadour que a rainha havia restaurado de acordo com seu pessoal gosto neoclássico, onde prevalecia a simplicidade e a elegância. Pouco depois a França mergulhou numa crise financeira: à dívida contraída durante a Guerra dos Sete Anos foram adicionadas as despesas da participação na Guerra de Independência Americana.\n[…]\nBrienne não obteve melhores resultados que seu antecessor e, em 25 de maio, a Assembleia de Notáveis ​​foi dissolvida. Considerada responsável por esses fracassos, Maria Antonieta tentou em vão reagir com a sua ingênua propaganda, deixando-se retratar por Madame Vigée Le Brun junto aos filhos, como a mãe da França. No mesmo período, Jeanne de La Motte-Valois escapou da prisão e fugiu para Londres onde, sob a proteção de Calonne, publicou suas memórias contra a rainha.\n[…]\nPor ordem dele, foram erguidas duas capelas: a primeira, na Praça Luís XVI, foi projetada como um mausoléu e marcou o lugar onde os restos mortais de Luís XVI e Maria Antonieta foram originalmente enterrados, chamada de Chapelle Expiratoire, hoje um monumento nacional da França. A segunda capela foi erguida na cela de Maria Antonieta na Conciergerie, onde, na parede estão escritos os nomes dos três mártires reais: Luís XVI, Maria Antonieta e Madame Isabel.\n[…]\nJan Ladislav Dussek compôs em 1793 uma obra para piano dedicada à história de Maria Antonieta, a Tableau Marie Antoinette op. 23.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Maximilien de Robespierre",
      "descricao": "Advogado e líder jacobino da Revolução Francesa, figura central do período do Terror, guilhotinado em 1794."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que apelido o líder jacobino Maximilien de Robespierre ganhou de seus admiradores durante a Revolução Francesa?",
    "resposta": "O Incorruptível",
    "fonte": [
      "https://en.wikipedia.org/wiki/Maximilien_Robespierre"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maximilien_Robespierre",
        "situacao": "ok",
        "texto": "Maximilien François Marie Isidore de Robespierre (; French: [maksimiljɛ̃ ʁɔbɛspjɛʁ]; 6 May 1758 – 28 July 1794) was a French lawyer and statesman, widely recognised as one of the most influential figures of the French Revolution. Robespierre fervently campaigned for the voting rights of all men and their unimpeded admission to the National Guard. Additionally, he advocated the right to petition, t\n[…]\nMadame Roland labelled Pétion de Villeneuve, François Buzot, and Robespierre the \"incorruptibles\" in honour of their principles, their modest ways of living, and their refusal to take bribes.\n[…]\nThe risks of Caesarism were clear: \"in troubled periods of history, generals often became the arbiters of the fate of their countries.\" Robespierre failed to gather a majority, but his speech was nevertheless published and sent to all clubs and Jacobin societies of France.\n[…]\nAfter publishing his speech \"A Maximilien Robespierre et à ses royalistes (accusation)\", Louvet was no longer admitted to the Jacobin Club. Condorcet considered the French Revolution as a religion and believed that Robespierre had all the characteristics of a leader of a sect, or a cult. As his opponents knew well, Robespierre had a strong base of support among the women of Paris called tricoteuses (knitters).\n[…]\nRobespierre's quest for revolutionary change extended beyond politics to his opposition to the Catholic Church and its policies, particularly clerical celibacy. Despite denouncing excesses in the dechristianisation efforts of his political adversaries, he aimed to rejuvenate spirituality in France through deist beliefs. On 6 May 1794, Robespierre announced the Committee of Public Safety's recognition of the existence of God and the immortality of the human soul.\n[…]\nAndrzej Seweryn in La Révolution française (1989)\n[…]\n1792–1793 – Lettres de Maximilien Robespierre, membre de la Convention nationale de France, à ses commettans"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maximilien_de_Robespierre",
        "situacao": "ok",
        "texto": "Maximilien François Marie Isidore de Robespierre ([ˈoʊbzpjɛər]; fr; 6 de maio de 1758 – 28 de julho de 1794) foi um advogado e estadista francês, amplamente reconhecido como uma das figuras mais influentes da Revolução Francesa. Robespierre fez campanha fervorosa pelos direitos de voto de todos os homens e por sua admissão sem impedimentos na Guarda Nacional.\n[…]\nApós publicar seu discurso \"A Maximilien Robespierre et à ses royalistes (accusation)\", Louvet não foi mais admitido no Clube Jacobino. Condorcet considerava a Revolução Francesa como uma religião e acreditava que Robespierre tinha todas as características de um líder de uma seita, ou de um culto. Como seus oponentes sabiam bem, Robespierre tinha uma forte base de apoio entre as mulheres de Paris chamadas tricoteuses (tricoteiras).\n[…]\nA reputação de Robespierre passou por vários ciclos de reavaliação. Seu nome atingiu picos de interesse público em meados do século XIX, particularmente sob a Segunda República Francesa, e novamente entre 1880 e 1910, e por volta de 1940. Durante as décadas de 1830 e 1840, socialistas cristãos como Philippe Buchez retrataram-no como um profeta moral e uma figura messiânica de virtude cívica, o redentor sacrificial da Revolução.\n[…]\nMathiez argumentou que ele era um porta-voz eloquente para os pobres e oprimidos, um inimigo das intrigas monarquistas, um adversário vigilante de políticos desonestos e corruptos, um guardião da Primeira República Francesa, um líder intrépido do governo revolucionário francês e um profeta de um estado socialmente responsável. Lenin referiu-se a Robespierre como um \"Bolchevique antes da letra\" (antes de o termo ser cunhado) e ergueu o Monumento a Robespierre em sua honra em 1918.\n[…]\n1792–1793 – Lettres de Maximilien Robespierre, membre de la Convention nationale de France, à ses commettans",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Carlos II da Espanha",
      "descricao": "Último rei Habsburgo da Espanha, de 1665 a 1700, cuja morte sem herdeiros causou a Guerra de Sucessão Espanhola."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que apelido recebeu Carlos Segundo, último rei Habsburgo da Espanha, cuja saúde frágil muitos atribuíam a bruxaria?",
    "resposta": "O Enfeitiçado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_II_of_Spain"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_II_of_Spain",
        "situacao": "ok",
        "texto": "Charles II (6 November 1661 – 1 November 1700) was King of Spain from 1665 to 1700. The last monarch from the House of Habsburg, which had ruled Spain since 1516, his death without children resulted in the 1701 to 1714 War of the Spanish Succession.\n[…]\nBorn on 6 November 1661, Charles was the only surviving son of Philip IV of Spain and his second wife, his niece Mariana of Austria. Marriage within the same extended family was then common among the nobility, but the Spanish and Austrian Habsburgs were unusual in the extent to which they followed this practice.\n[…]\nThe autopsy records his \"heart was the size of a peppercorn; his lungs corroded; his intestines rotten and gangrenous; he had a single testicle, black as coal, and his head was full of water.\" The latter suggests hydrocephalus, a disease often associated with childhood measles, one of many illnesses contracted by Charles. Philip was proclaimed king of Spain on 16 November 1700, and the War of the Spanish Succession formally began on 9 July 1701.\n[…]\nThe Caroline Islands were named after Charles in 1666, as was the town of Charleroi in modern Belgium in 1686. Decrees were also issued in his name approving universities in South America that still exist. In Peru, they included San Cristóbal, established in 1680, and the National University; in Guatemala, the Universidad de San Carlos de Guatemala, the fourth-oldest university on the continent.\n[…]\nTraditional historiography portrayed Charles as both ineffectual and mentally disabled, emblematic of the decline of Habsburg Spain after the wars of the 17th century. However, more recent scholarship argues these views were heavily influenced by their Bourbon successors, who used propaganda to diminish the previous dynasty."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carlos_II_de_Espanha",
        "situacao": "ok",
        "texto": "Carlos II (Madrid, 6 de novembro de 1661 – Madrid, 1 de novembro de 1700), também conhecido como Carlos, o Enfeitiçado, foi o Rei da Espanha de 1665 até sua morte, sendo o último monarca espanhol da Casa de Habsburgo. Seus domínios incluíam os Países Baixos Espanhóis e o império espanhol de além-mar, indo das Américas até as Índias Orientais Espanholas.\n[…]\nNascido em 6 de novembro de 1661 no Real Alcázar de Madrid, Carlos foi o último filho e único sobrevivente de Filipe IV da Espanha e sua segunda esposa, Maria Ana da Áustria. Apesar de fraco e doentio, seu nascimento foi recebido com grande alegria, já que os outros herdeiros de Filipe IV se encontravam mortos: Filipe Prospero, Príncipe das Astúrias, morrera aos 4 anos de idade, e antes dele haviam morrido Fernando Tomas e Baltasar Carlos, este em 1646, com dezessete anos de idade.\n[…]\nAlém disso, o rei era frequentemente atingido por ataques muito fortes de enxaqueca, epilepsia e doenças contínuas como gripe, que a crença popular atribuía a uma maldição. Por esse motivo, ele entrou para a história como O Enfeitiçado. Sobre essa crença, o próprio soberano disse:\n[…]\nDesde a morte de Filipe IV, o trono da Espanha havia sido objeto de intensas relações diplomáticas entre Luís XIV de França e o imperador Leopoldo I de Habsburgo, primos e cunhados de Carlos II, a fim de impedir que uma eventual morte do soberano sem herdeiros legítimos levasse a uma guerra.\n[…]\nDe fato, dois partidos foram criados na corte: o primeiro, que contou com o apoio da rainha Maria Ana, apoiou-se nas reivindicações do ramo austríaco de Habsburgo, representado pelo arquiduque Carlos, filho do imperador Leopoldo I e Leonor Madalena de Neuburgo e, portanto, sobrinho de parte do pai de Fernando III e de Maria Ana da Espanha e, ao mesmo tempo, primo de Carlos II.\n[…]\npara o arquiduque Charles:\n[…]\nEspanha;\n[…]\nPaíses Baixos espanhóis;",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Vasco Núñez de Balboa",
      "descricao": "Conquistador espanhol que, em 1513, atravessou o istmo do Panamá e chegou ao oceano Pacífico."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1513, ao avistar o oceano Pacífico do istmo do Panamá, que nome Vasco Núñez de Balboa deu a ele?",
    "resposta": "Mar do Sul",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vasco_N%C3%BA%C3%B1ez_de_Balboa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vasco_N%C3%BA%C3%B1ez_de_Balboa",
        "situacao": "ok",
        "texto": "Vasco Núñez de Balboa (Spanish pronunciation: [ˈbasko ˈnuɲeθ ðe βalˈβo.a]; c. 1475 – around January 12–21, 1519) was a Spanish explorer, governor, conquistador, adelantado, and a pirate. He is best known for being the first European to discover the Pacific Ocean while crossing the Isthmus of Panama in 1513.\n[…]\nAlthough Balboa was executed by Spanish authorities, operated as a pirate, and is alleged to have used dogs to commit brutal executions against indigenous people, his actions and deeds are remembered by history as the first European to cross America. Several parks and avenues throughout Panama bear the name \"Vasco Núñez de Balboa\", and a number of monuments honour his discovery of the South Sea.\n[…]\nOne of the highest orders granted by the Panamanian government to distinguished and outstanding figures, foreign and domestic, is the Orden Vasco Núñez de Balboa, in various degrees, as established by Law 27 from 28 January 1933.\n[…]\nVasco Núñez de Balboa was featured on the 1-cent denomination of the Panama-Pacific Exposition of 1913. The 1-cent Balboa paid the one-cent card rate, and it was used in combination with other denominations to meet large weight and foreign destinations. The Bureau of Engraving and Printing issued over 330 million of these to the public.\n[…]\nSENAN's Base Naval Vasco Núñez de Balboa in Panama City is named for Balboa.\n[…]\nGarrison, Omar V. (1977). Balboa el conquistador: La odisea de Vasco Núñez, descubridor del Pacífico. Barcelona: Editorial Grijalbo. ISBN 84-253-0748-1.\n[…]\n(In Spanish) Discoverers from Jerez: Vasco Núñez de Balboa\n[…]\n(In Spanish) Vasco Núñez de Balboa\n[…]\n(In Spanish) Biography of Vasco Núñez de Balboa\n[…]\n(In Spanish) Vasco Núñez de Balboa and the discovery of the South Sea\n[…]\n(In Spanish) Death of Vasco Núñez de Balboa\n[…]\n(In Spanish) The Balboa monument, Panama City"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vasco_N%C3%BA%C3%B1ez_de_Balboa",
        "situacao": "ok",
        "texto": "Vasco Núñez de Balboa (Jerez de los Caballeros, 1475 – Acla, no Panamá, 21 de janeiro de 1519) foi um explorador e fidalgo espanhol que teria nascido em Jerez de los Caballeros (na atual província de Badajoz), na Espanha e que faleceu em Acla, no atual Panamá. De origem galega e de linhagem incerta, é provável que tenha sido filho do fidalgo Nuño Arias de Balboa e de uma dama de Badajoz.\n[…]\nEm 1511, Núñez de Balboa obteve o cargo de governador. Movido pelo propósito de descobrir o mar de que falavam os indígenas, entrou pelo continente dentro em 25 de setembro de 1513 num périplo de mais de 30 dias que culminou numa das maiores façanhas da conquista espanhola da América: o descobrimento, por terra, do Mar del Sur, nome que deram ao atual Oceano Pacífico.\n[…]\nReza a lenda que terá subido a um monte indicado pelos índios apenas na companhia do seu cão Leoncito, tornando-se no primeiro europeu a avistar o maior Oceano da Terra por via ocidental. Antes, por via oriental, navegando por mares do Oceano Pacífico , os portugueses já tinham chegado à Tailândia em 1511, às Molucas (ilhas das especiarias) em 1512 e à China, zona da atual Hong Kong, em junho de 1513.\n[…]\nEm Darien, Balboa ganhou a lealdade e respeito dos indígenas de Santa Maria. Como resultado, conseguiu descobrir o Mar do Sul. Em 25 de setembro de 1513, avistou o mar cobiçado, que chamou de Mar del Sur por causa da direção seguida pela expedição do ponto de partida, mas foi mais tarde chamado de Oceano Pacífico por Fernão de Magalhães (1520) por causa dos suaves ventos alísios que sopram na região.\n[…]\nEnquanto isso, o bacharel Enciso tinha chegado ao Tribunal, onde se dedicou a denunciar Balboa diante do rei. Até à chegada do novo governador Pedro Arias Dávila, Balboa conservou os cargos de Adelantado de la Mar del Sur e Gobernador de Panamá y Coiba, e empreendeu a exploração da costa do Pacífico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Sublime Porta",
      "descricao": "Nome pelo qual a diplomacia europeia designava o governo central do Império Otomano, em Constantinopla."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na diplomacia europeia, o governo do Império Otomano era chamado por um nome que lembra a entrada de um palácio. Qual?",
    "resposta": "Sublime Porta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sublime_Porte"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sublime_Porte",
        "situacao": "ok",
        "texto": "The Sublime Porte, also known as the Ottoman Porte or High Porte (Ottoman Turkish: باب عالی, romanized: Bâb-ı Âlî or Babıali; Turkish pronunciation: [baːbɯˈaːliː]), was a metonymy used to refer collectively to the central government of the Ottoman Empire in Istanbul. It is particularly referred to the building which housed the office of the Grand Vizier, Ministry of Foreign Affairs, Ministry of th\n[…]\nToday it houses the office of the Istanbul governorate.\n[…]\nAfter the Ottomans had conquered Constantinople, now Istanbul, the gate now known as the Imperial Gate (Turkish: Bâb-ı Hümâyûn), leading to the outermost courtyard of the Topkapı Palace, first became known as the \"High Gate\", or the \"Sublime Porte\".\n[…]\nFrench being the language of diplomacy, the French translation Sublime Porte was soon adopted in most other European languages, including English, to refer not only to the actual gate but as a metonymy for the Ottoman Empire.\n[…]\nIn the 18th century, a new great Italian-styled office building was built just west of Topkapı Palace area, on the other side of Alemdar Caddesi (Alemdar street). This became the location of the Grand Vizier and many ministries. Thereafter, this building, and the monumental gate leading to its courtyards, became known as the Sublime Porte (Bâb-ı Âlî); colloquially it was also known as the Gate of the Pasha (paşa kapusu).\n[…]\n\"Sublime Porte\" was used in the context of diplomacy by Western states, as their diplomats were received at the porte (meaning \"gate\"). During the Second Constitutional Era of the Empire after 1908 (see Young Turk Revolution), the functions of the classical Divan-ı Hümayun were replaced by the reformed Imperial Government, and \"porte\" came to refer to the Foreign Ministry.\n[…]\nRaid on the Sublime Porte\n[…]\nCourt of St James's, another synecdochic term, for the United Kingdom in diplomatic relations\n[…]\nKremlin, synecdochic term for the Russian government"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sublime_Porta",
        "situacao": "ok",
        "texto": "Sublime Porta, Porta Otomana, Porta Alta ou simplesmente Porta era a designação corrente dada entre 1718 e 1922 ao governo otomano, particularmente ao gabinete do grão-vizir e ao das relações exteriores. O termo é uma tradução da expressão turca Bab-ı Ali (literalmente, 'porta alta', 'grande portão' ou 'portão principal') referente ao monumental portão de entrada no palácio que alojava os principa\n[…]\nO uso da locução 'Sublime Porta' se manteve nas chancelarias europeias até a queda do Império Otomano e a abolição do sultanato, em 1922.\n[…]\nDepois que os otomanos conquistaram Constantinopla (atual Istambul), o portão agora conhecido como \"Porta Imperial\" (em turco, Bâb-ı Hümâyûn), que levava ao pátio externo do Palácio de Topkapı, ficou conhecido como \"Porta Alta\" ou \"Sublime Porta\".\n[…]\nA Sublime Porta dava acesso ao pátio externo onde o sultão recebia os embaixadores e onde se realizavam reuniões protocolares e recepções envolvendo o sultão ou o grão-vizir (cargo equivalente ao de primeiro-ministro). Era uma prática oriental comum realizar reuniões ou recepções junto das portas das cidades ou dos palácios reais.\n[…]\nO facto de os embaixadores apresentarem credenciais e serem recebidos no pátio, junto ao grande portão do palácio que alojava a corte otomana, levou a expressão Sublime Porta a designar, por sinédoque, o Império como um todo.\n[…]\nEm 1911, o edifício onde está a Sublime Porta foi seriamente danificado por um incêndio e, com o fim do Império Otomano, foi transformado em sede do Ministério das Relações Exteriores da Turquia. Após a mudança da capital para Ancara, a edificação passou a alojar o governo provincial de Istambul, função que ainda mantém.\n[…]\nUma interpretação alternativa, segundo a qual a expressão Sublime Porta seria uma referência ao papel de porta de entrada na Ásia (epíteto atribuído durante séculos à cidade de Istambul) carece de fundamento.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Sans-culottes",
      "descricao": "Revolucionários populares de Paris, trabalhadores e artesãos, que tiveram papel ativo na Revolução Francesa."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os revolucionários populares de Paris eram chamados de sans-culottes porque não usavam os calções curtos da aristocracia. O que vestiam no lugar deles?",
    "resposta": "Calças compridas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sans-culottes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sans-culottes",
        "situacao": "ok",
        "texto": "The sans-culottes (French: [sɑ̃kylɔt]; lit. 'without breeches') were the common people of the lower classes in late 18th-century France, a great many of whom became radical and militant partisans of the French Revolution in response to their poor quality of life under the Ancien Régime.\n[…]\nThe height of their influence spanned roughly from the original overthrow of the monarchy in 1792 to the Thermidorian Reaction in 1794.Throughout the revolution, the sans-culottes provided much of the popular support for radical factions in Paris, particularly the Enragés and the Hébertists. Revolutionaries such as Jacques Roux and Jacques Hébert acted as influential spokesmen for their political and economic demands.\n[…]\nThe execution of radical leader Jacques Hébert spelled the decline of the sans-culottes, and with the successive rise of even more conservative governments, the Thermidorian Convention and the French Directory, they were definitively silenced as a political force. After the defeat of the 1795 popular revolt in Paris, the sans-culottes ceased to play any effective political role in France until the July Revolution of 1830.\n[…]\nThe working class was especially hurt by a hail storm which damaged grain crops in 1788, which caused bread prices to skyrocket. While the peasants of rural France could sustain themselves with their farms, and the wealthy aristocracy could still afford bread, the urban workers of France, the group that comprised the sans-culottes, suffered.\n[…]\nSonenscher, Michael. Sans-Culottes: An Eighteenth-Century Emblem in the French Revolution (Princeton University Press, 2008). Pp. 493.\n[…]\nWilliams, Gwyn A (1969), Artisans and Sans-culottes: Popular Movements in France and Britain during the French Revolution. Foundations of Modern History. New York: Norton."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sans-culottes",
        "situacao": "ok",
        "texto": "Sans-culotte foi a denominação dada pelos aristocratas aos artesãos, trabalhadores e até pequenos proprietários participantes da Revolução Francesa, principalmente em Paris. Livremente traduzido da língua francesa como \"sem calção\", o culote era uma espécie de calções justos que se apertavam na altura dos joelhos, vestimenta típica da nobreza naquele país à época da Revolução.\n[…]\nEm seu lugar, os sans-culottes vestiam uma calça comprida de algodão grosseiro, traje tipicamente utilizado pelos burgueses. Estes eram, normalmente, os líderes das manifestações nas ruas.\n[…]\nPode se dizer que os sans-culottes eram uma camada popular urbana que atuou principalmente em Paris durante a Revolução Francesa. Eles pertenciam a um movimento heterogêneo em sua formação, mas eram, no geral, compostos por populações subalternas, que incluía os artesãos, trabalhadores especializados, lojistas, dentre outros, que foram fortemente ativos durante o processo revolucionário. Além do mais, pode-se também afirmar que alguns desses se situavam entre a burguesia e os novos proletários.\n[…]\nOs sans-culottes passaram a ser diferenciados por esse termo vindo da aristocracia francesa, cuja vestimenta marcava a distinção social. Desse modo, diferente da nobreza que possuía trajes de tecidos com alta qualidade, bordados a ouro e calças apertadas que seguiam a moda da época, os sans-culottes utilizavam um vestuário modesto: casacos curtos e estreitos, sapatos de madeira e suspensórios junto com suas calças largas — fato que os denominou como sans-culottes.\n[…]\nBURSTIN, Haim. L'invention du sans-culotte: regards sur le Paris révolutionnaire. Odile Jacob, 2005. ISBN 978-2738116857.\n[…]\nSOBOUL, Albert. The Sans-culottes: The Popular Movement and Revolutionary Government, 1793-1794. Princeton University Press, 1980. ISBN 0-691-05320-0.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Mona Lisa",
      "descricao": "Retrato pintado por Leonardo da Vinci no início do século dezesseis."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na Itália, a Mona Lisa, de Leonardo da Vinci, também é chamada de Gioconda. De onde vem esse nome?",
    "resposta": "Do sobrenome do marido da retratada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mona_Lisa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mona_Lisa",
        "situacao": "ok",
        "texto": "The Mona Lisa is a half-length portrait painting by the Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as \"the best known, the most visited, the most written about, the most sung about, [and] the most parodied work of art in the world\". The painting's novel qualities include the subject's enigmatic expression, the monumental\n[…]\nIn French, the title La Joconde has the same meaning. Vasari's account of the Mona Lisa comes from his biography of Leonardo published in 1550, 31 years after the artist's death. It has long been the best-known source of information on the provenance of the work and identity of the sitter. Leonardo's assistant Salaì, at his death in 1524, owned a portrait which in his personal papers was named la Gioconda, a painting bequeathed to him by Leonardo.\n[…]\nThe catalogue raisonné Leonardo da Vinci (2019) confirms that the painting probably depicts Lisa del Giocondo, with Isabella d'Este being the only plausible alternative. Scholars have developed several alternative views, arguing that Lisa del Giocondo was the subject of a different portrait, and identifying at least four other paintings referred to by Vasari as the Mona Lisa.\n[…]\nOf Leonardo da Vinci's works, the Mona Lisa is the only portrait whose authenticity has never been seriously questioned, and one of four works‍—‍‌the others being Saint Jerome in the Wilderness, Adoration of the Magi and The Last Supper⁠ —‍‌whose attribution has avoided controversy. He had begun working on a portrait of Lisa del Giocondo, the sitter for the Mona Lisa, by October 1503. It is believed by some that the Mona Lisa was begun in 1503 or 1504 in Florence.\n[…]\nMale Mona Lisa theories\n[…]\nTwo-Mona Lisa theory\n[…]\nLeonardo's Mona Lisa Archived 4 November 2014 at the Wayback Machine, Smarthistory (video)\n[…]\nSecrets of the Mona Lisa, Discovery Channel documentary on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mona_Lisa",
        "situacao": "ok",
        "texto": "Mona Lisa (\"Senhora Lisa\") é um retrato de meio-corpo do artista italiano Leonardo da Vinci. Considerada uma obra-prima arquetípica da Renascença italiana, foi descrita como \"a obra de arte mais conhecida, mais visitada, sobre a qual mais se escreveu, mais se cantou [e] que mais foi parodiada no mundo\". Entre as características inovadoras da pintura estão a expressão enigmática da modelo, a monume\n[…]\nEm resposta ao anúncio da descoberta do documento, Vincent Delieuvin, representante do Louvre, declarou: \"Leonardo da Vinci estava pintando, em 1503, o retrato de uma dama florentina chamada Lisa del Giocondo. Disso temos agora certeza. Infelizmente, não podemos ter certeza absoluta de que esse retrato de Lisa del Giocondo seja a pintura do Louvre\".\n[…]\nO catálogo raisonné Leonardo da Vinci (2019) confirma que a pintura provavelmente retrata Lisa del Giocondo, sendo Isabel d'Este a única alternativa plausível. Pesquisadores desenvolveram várias interpretações alternativas, argumentando que Lisa del Giocondo teria sido retratada em outro quadro e identificando pelo menos quatro outras pinturas às quais Vasari teria se referido como a Mona Lisa.\n[…]\nEntre as obras de Leonardo da Vinci, a Mona Lisa é o único retrato cuja autenticidade nunca foi seriamente questionada e uma de quatro obras‍—‍‌as outras são São Jerônimo no Deserto, A Adoração dos Magos e A Última Ceia⁠ —‍‌cuja atribuição permaneceu livre de controvérsias. Leonardo já havia começado a trabalhar em um retrato de Lisa del Giocondo, a modelo da Mona Lisa, em outubro de 1503. Alguns acreditam que a Mona Lisa tenha sido iniciada em 1503 ou 1504, em Florença.\n[…]\nO filme de mistério de 2022 Glass Onion: Um Mistério Knives Out, que retrata a destruição da Mona Lisa, emprestada de seu local de exposição a um bilionário.\n[…]\nLeonardo's Mona Lisa Arquivado em 2014-11-04 no Wayback Machine, Smarthistory (vídeo em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Colônia de Plymouth",
      "descricao": "Colônia inglesa fundada em 1620 pelos peregrinos do Mayflower na atual Massachusetts."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que nome têm em comum o porto inglês de onde o Mayflower zarpou em 1620 e a colônia que os peregrinos fundaram na América?",
    "resposta": "Plymouth",
    "fonte": [
      "https://en.wikipedia.org/wiki/Plymouth_Colony",
      "https://en.wikipedia.org/wiki/Mayflower"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Plymouth_Colony",
        "situacao": "ok",
        "texto": "Plymouth Colony (sometimes spelled Plimouth) was the first permanent English colony in New England, founded in 1620, and the third permanent English colony in America, after Newfoundland and the Jamestown Colony. It was settled by the passengers on the Mayflower at a location that had previously been surveyed and named by Captain John Smith. The settlement served as the capital of the colony and d\n[…]\nSome of the wealthier families in Plymouth Colony enslaved Black people and Native Americans. Colonists considered slaves to be the property of their owners, able to be passed on to heirs, unlike indentured servants. Slave ownership was not widespread and very few families possessed the wealth necessary to acquire slaves. In 1674, the inventory of Capt. Thomas Willet of Marshfield includes \"8 Negroes\" at a value of £200.\n[…]\nThe democratic setup of Plymouth Colony had a strong influence on shaping democracy in both England and America. William Bradford's Of Plimoth Plantation was widely read in England. It influenced the political thought of Puritan politician and poet John Milton, assistant to Oliver Cromwell, and philosopher John Locke. For example, Locke referred to the Mayflower Compact in his Letters Concerning Toleration.\n[…]\nThe General Society of Mayflower Descendants, or The Mayflower Society, is a genealogical organization of individuals who have documented their descent from one or more of the 102 passengers who arrived on the Mayflower in 1620. The Society was founded at Plymouth in 1897 and claims that tens of millions of Americans are descended from these passengers, and it offers research services for people seeking to document their descent.\n[…]\nColonial America: Plymouth Colony 1620 – A short history of Plymouth Colony hosted at U-S-History.com, includes a map of all of the New England colonies.\n[…]\nHistory of the Town of Plymouth 1620... – Free Google eBook; PDF format"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mayflower",
        "situacao": "ok",
        "texto": "Mayflower was an English square-rigged merchant sailing ship, active from before 1609 until 1622. Her tonnage was 180+, and she was 110 feet (34 meters) long and 25 feet (7.5 meters) in the beam, with several decks. She was notable in that she transported a group of English families, known today as the Pilgrims, from England to the New World in 1620.\n[…]\nStarting in 1608, a group of English families departed England for the Netherlands, where they could worship freely. By 1620, the community resolved to cross the Atlantic Ocean for America, which they considered a \"new Promised Land\" where they would establish Plymouth Colony.\n[…]\nJones was one of the owners of the ship by 1620, along with Christopher Nichols, Robert Child and Thomas Short. Thomas Weston chartered Mayflower from Child and Short in the summer of 1620 to undertake the Pilgrims' voyage. Weston played a significant role in the Mayflower's voyage, as he was a member of the Company of Merchant Adventurers of London, and he eventually traveled to the Plymouth Colony himself.\n[…]\nAnother ship called Mayflower voyaged from London to Plymouth Colony in May 1629, arriving in August with 35 passengers aboard, many of whom were from the Pilgrim congregation in Leiden that organized the first voyage. This ship also traveled from England to America in 1630 (as part of the Winthrop Fleet), 1633, 1634 and 1639. It attempted the trip again in October 1641, with 140 passengers bound for Virginia, but it was lost at sea.\n[…]\nPilgrims (Plymouth Colony)\n[…]\nMayflower and Plymouth History\n[…]\nWomen of The Mayflower and Plymouth Colony by Mary Soule Googins, read before the Medford Historical Society, December 19, 1921\n[…]\nThe Mayflower II\n[…]\nContemporary photos of Plymouth's Barbican and the Mayflower Steps\n[…]\nPilgrims Point, Plymouth (UK)[link removed] A photo of the modern-day Mayflower Steps Arch and Pilgrims Point"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Col%C3%B4nia_de_Plymouth",
        "situacao": "ok",
        "texto": "A Colônia de Plymouth, foi um empreendimento colonial inglês na América, de 1620 a 1691, em um local que havia sido previamente pesquisado e batizado pelo capitão John Smith. O assentamento serviu como a capital da colônia e se desenvolveu como a cidade de Plymouth, Massachusetts. Em seu auge, a Colônia de Plymouth ocupava a maior parte do Sudeste de Massachusetts.\n[…]\nApesar da existência relativamente curta da colônia, Plymouth tem um papel especial na história americana. A maioria dos cidadãos de Plymouth estava fugindo da perseguição religiosa e procurando um lugar para praticar sua religião como quisessem, em vez de ser empreendedores como muitos dos colonos de Jamestown, na Virgínia. Os sistemas sociais e legais da colônia ficaram estreitamente ligados às suas crenças religiosas, bem como aos costumes ingleses.\n[…]\nA Colônia de Plymouth foi fundada por um grupo de separatistas puritanos inicialmente conhecidos como Brownistas, que passaram a ser conhecidos como Peregrinos. O grupo principal (aproximadamente 40% dos adultos e 56% dos agrupamentos familiares) fazia parte de uma congregação liderada por William Bradford. Eles começaram a sentir as pressões da perseguição religiosa enquanto ainda estavam na vila inglesa de Scrooby, perto de East Retford, Nottinghamshire. [carece de fontes]?\n[…]\nNo dia 11 de novembro de 1620, o Mayflower ancorou no porto de Provincetown. Os peregrinos não tinham uma patente para colonizar esta área, e alguns passageiros começaram a questionar seu direito à terra, reclamando que não havia permissão legal para estabelecer uma colônia.\n[…]\nColônias da Nova Inglaterra\n[…]\nDeetz, James; Deetz, Patricia E. Scott (2000). The times of their lives : life, love, and death in Plymouth Colony (em inglês). New York: W.H. Freeman. 366 páginas. ISBN 978-0-71673-830-5. Consultado em 30 de outubro de 2019\n[…]\nColonial America: Plymouth Colony 1620",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Província da Carolina",
      "descricao": "Colônia inglesa da América do Norte criada em 1663, depois dividida em Carolina do Norte e Carolina do Sul."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que têm em comum os nomes das antigas colônias britânicas da Carolina e da Geórgia, na América do Norte?",
    "resposta": "Homenageiam reis britânicos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Province_of_Carolina",
      "https://en.wikipedia.org/wiki/Province_of_Georgia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Province_of_Carolina",
        "situacao": "ok",
        "texto": "The Province of Carolina was a colony of the Kingdom of England (1663–1707) and later the Kingdom of Great Britain (1707–1712) that existed in North America from 1663 until the Carolinas were partitioned into North and South in 1712. However, the two parts did not become separate and administrative royal colonies until 1729.\n[…]\nThe original North American Carolina province of 1663 consisted of all or parts of present-day Alabama, Florida, Georgia, Mississippi, North Carolina, South Carolina, and Tennessee.\n[…]\nIn early 1670 the Lords Proprietors founded a sturdier new settlement named Charles Town (present-day Charleston) when they sent 150 colonists to the province, landing them on the south bank of the Ashley River, South Carolina. The town moved across the river to a more defensible site on the peninsula between the Ashley and Cooper Rivers in 1680.\n[…]\nIn 1670, William Sayle, then in his eighties, became the first Colonial Governor of the colony of Carolina.\n[…]\nDuring this period, the two halves of the province began increasingly to be known as North Carolina and South Carolina.\n[…]\nIn 1712, the two provinces became separate colonies, the colony of North Carolina (formerly Albemarle province) and the colony of South Carolina (formerly Clarendon province).\n[…]\nCarolina was the first of three colonies in North America settled by the English to have a comprehensive plan. Known as the Grand Model, or Grand Modell, it was composed of a constitution and detailed guidelines for settlement and development. The constitution, titled Fundamental Constitutions of Carolina, was drafted by the philosopher John Locke under the direction of Anthony Ashley Cooper (later made Earl of Shaftesbury).\n[…]\nBibliography of South Carolina history\n[…]\nHistory of South Carolina\n[…]\nWorks by or about Province of Carolina at the Internet Archive"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Province_of_Georgia",
        "situacao": "ok",
        "texto": "The Province of Georgia (also Georgia Colony) was one of the Southern Colonies in colonial-era British America. Founded as a British proprietary colony in 1732, in 1751 it became a royal colony. In 1775 it was the last of the Thirteen Colonies to support the American Revolution.\n[…]\nAnother reason for the founding of the colony was as a buffer state and a \"garrison province\" which would defend the southern British colonies from Spanish Florida. Oglethorpe imagined a province populated by \"sturdy farmers\" who could guard the border; because of this, the colony's charter prohibited slavery. The ban on slavery was lifted by 1751 and the colony became a royal colony by 1752, taking over from the Trustees for the Establishment of the Colony of Georgia in America.\n[…]\nJames Wright, the last Royal Governor of the Province of Georgia, dismissed the royal assembly in 1775. He was briefly a prisoner of the revolutionaries before escaping to a British warship in February 1776. During the American Revolutionary War Wright was the only royal governor to regain control of part of his colony after British forces captured Savannah on December 29, 1778.\n[…]\nCashin, Edward J. Guardians of the valley: Chickasaws in colonial South Carolina and Georgia (U of South Carolina Press, 2009) online.\n[…]\nHarrold, Frances. \"Colonial Siblings: Georgia's Relationship with South Carolina During the Pre-Revolutionary Period.\" Georgia Historical Quarterly 73.4 (1989): 707-744. online\n[…]\nMcIlvenna, Noeleen. The short life of free Georgia: Class and slavery in the colonial south (Chapel Hill, NC: University of North Carolina Press, 2015). online\n[…]\nRussell, David Lee. Oglethorpe and Colonial Georgia: A History, 1733-1783 (McFarland, 2006) online.\n[…]\nColonial Will Books, 1754-1779 from the Georgia Archives"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Prov%C3%ADncia_da_Carolina",
        "situacao": "ok",
        "texto": "A Província da Carolina foi uma das Colônias do Sul na América Britânica, primeiramente subordinada à Inglaterra (até 1707) e depois disso, ao Império Britânico, até 1712, quando houve a separação entre Norte e Sul.\n[…]\nEm 1712, as duas províncias se separaram: a Província da Carolina do Norte (antiga província de Albemarle) e a Província da Carolina do Sul (antiga província de Clarendon).\n[…]\nEmbora a divisão entre os governos do Norte e do Sul tenha sido concluída em 1712, as duas colônias continuaram nas mãos do mesmo grupo de proprietários. Uma rebelião contra os proprietários eclodiu em 1719, o que levou à nomeação de um governador real para a Carolina do Sul em 1720. Depois de quase uma década em que o governo britânico procurou localizar e comprar os proprietários, tanto a Carolina do Norte quanto a Carolina do Sul se tornaram colônias reais em 1729.\n[…]\nAlguns consideram esse período o estabelecimento de colônias separadas, mas isso não ocorreu oficialmente até 1729, o sentimento anti-britânico nas Carolina do Norte e do Sul aumentou, e a Carolina do Sul derrubou o domínio britânico em 1719, elegendo seu próprio governador.\n[…]\nEm um movimento para impedir a expansão francesa e espanhola nas colônias britânicas, o rei Jorge I comprou a Carolina do Norte dos Senhores Proprietários em 1729 e a transformou em uma colônia da Coroa, permitindo que a Carolina do Sul se limitasse a se auto-governar como um estado-tampão.\n[…]\nEm 1732, uma carta corporativa da Província da Geórgia foi concedida pelo rei Jorge II, sobre uma porção mais ao Sul da Carolina do Sul, que posteriormente se tornou parte da colônia britânica da Geórgia em 1732.\n[…]\nColônias do Sul\n[…]\nProvíncia da Carolina do Norte\n[…]\nColonização britânica da América",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Filipe II da Espanha",
      "descricao": "Rei da Espanha de 1556 a 1598 e de Portugal a partir de 1580."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Décadas antes de mandar a Invencível Armada contra a Inglaterra, que laço Filipe Segundo da Espanha teve com a rainha inglesa Maria Primeira?",
    "resposta": "Foi marido dela",
    "fonte": [
      "https://en.wikipedia.org/wiki/Philip_II_of_Spain",
      "https://en.wikipedia.org/wiki/Mary_I_of_England"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Philip_II_of_Spain",
        "situacao": "ok",
        "texto": "Philip II (21 May 1527 – 13 September 1598), sometimes known in Spain as Philip the Prudent (Spanish: Felipe el Prudente), was King of Spain from 1556, King of Portugal from 1580, and King of Naples and Sicily from 1554 until his death in 1598. He was also jure uxoris King of England and Ireland from his marriage to Queen Mary I in 1554 until her death in 1558. Further, he was Duke of Milan from 1\n[…]\nEventually, the Spanish attempted two further Armadas, in October 1596 and October 1597. The 1596 Armada was destroyed in a storm off northern Spain; it had lost as many as 72 of its 126 ships and suffered 3,000 deaths. The 1597 Armada was frustrated by adverse weather as it approached the English coast undetected. This Anglo-Spanish War (1585–1604) would be fought to a grinding end, but not until both Philip II (d. 1598) and Elizabeth I (d. 1603) were dead.\n[…]\nEnglish-speaking historians tend to show Philip II as a fanatical, despotical, criminal, imperialist ruler, minimising his military victories (Battle of Lepanto, Battle of Saint Quentin, Fall of Antwerp, English Armada, etc...) to mere anecdotes, and magnifying his defeats (Battle of Djerba, Ottoman conquest of Tunis, Dutch Revolt, Armada, etc...) even though at the time those defeats did not result in great political or military changes in the balance of power in Europe.\n[…]\nPhilip's first wife was his double first cousin, Maria Manuela, Princess of Portugal. She was the daughter of Philip's maternal uncle, John III of Portugal, and paternal aunt, Catherine of Austria. They were married at Salamanca on 12 November 1543. The marriage produced one son in 1545, after which Maria died four days later due to haemorrhage:\n[…]\nThis marriage produced four sons and one daughter. Anna died of heart failure 8 months after giving birth to Maria in 1580.\n[…]\nMaria (14 February 1580 – 5 August 1583)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mary_I_of_England",
        "situacao": "ok",
        "texto": "Mary I (18 February 1516 – 17 November 1558) was Queen of England and Ireland from July 1553 and Queen of Spain as the wife of King Philip II from January 1556 until her death in 1558. She made vigorous attempts to reverse the English Reformation, which had begun during the reign of her father, King Henry VIII.\n[…]\nContradicting the Act of Succession 1544, which restored Mary and Elizabeth to the line of succession, Edward named Northumberland's daughter-in-law Lady Jane Grey, the granddaughter of Henry VIII's younger sister Mary, as his successor. Lady Jane's mother was Frances Brandon, Mary's cousin and goddaughter.\n[…]\nThe Spanish prince had been widowed a few years before by the death of his first wife, Maria Manuela of Portugal, mother of his son Carlos, and was heir apparent to vast territories in Continental Europe and the New World. Both Philip and Mary were descendants of John of Gaunt. As part of the marriage negotiations, a portrait of Philip by Titian was sent to Mary in the latter half of 1553.\n[…]\nPhilip returned to England from March to July 1557 to persuade Mary to support Spain in a renewed war against France. Mary was in favour of declaring war, but her councillors opposed it because French trade would be jeopardised, it contravened the foreign war provisions of the marriage treaty, and a bad economic legacy from Edward VI's reign and a series of poor harvests meant England lacked supplies and finances.\n[…]\nThe inscription on their tomb, affixed there by James I when he succeeded Elizabeth, is Regno consortes et urna, hic obdormimus Elizabetha et Maria sorores, in spe resurrectionis (\"Consorts in realm and tomb, we sisters Elizabeth and Mary here lie down to sleep in hope of the resurrection\")."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Filipe_II_de_Espanha",
        "situacao": "ok",
        "texto": "Filipe II & I (em castelhano:  Felipe II; 21 de maio de 1527 – 13 de setembro de 1598) foi Rei da Espanha (1556-1598), Rei de Portugal e Algarves (1580-1598), Rei de Nápoles, Sicília e Sardenha (ambos de 1554) e jure uxoris Rei da Inglaterra e Irlanda (durante seu casamento com Maria I de 1554 a 1558). Ele também foi Duque de Milão, e a partir de 1555, Senhor dos Países Baixos.\n[…]\nVer Também: Guerra Anglo-Espanhola (1585-1604)\n[…]\nA execução de Maria, rainha da Escócia, em 1587, encerrou as esperanças de Filipe de colocar um católico no trono inglês. Ele se voltou para planos mais diretos de invadir a Inglaterra e devolver o país ao catolicismo. Em 1588, ele enviou uma frota, a Armada Espanhola, para se encontrar com o exército do duque de Parma e transportá-lo através do Canal da Mancha.\n[…]\nAssim, embora a Marinha Real Inglesa possa ter conquistado apenas uma leve vitória tática sobre os espanhóis, ela teve uma importante vitória estratégica — impedindo a invasão da Inglaterra. Durante uma semana de luta, os espanhóis gastaram 100 mil balas de canhão, mas nenhum navio inglês ficou seriamente danificado. No entanto, mais de 7 mil marinheiros ingleses morreram de doenças durante o tempo em que a Armada estava na água inglesa.\n[…]\nA segunda esposa de Filipe foi sua prima em primeiro grau, a rainha Maria I de Inglaterra. O casamento, que ocorreu em 25 de julho de 1554 na Catedral de Winchester, foi político. Por esse casamento, Filipe tornou-se jure uxoris rei da Inglaterra e da Irlanda, embora o casal se separasse mais do que junto ao governar seus respectivos países.\n[…]\nO casamento não teve filhos, embora tenha havido duas gravidezes psicológicas, e Maria morreu em 1558, terminando o reinado de Filipe na Inglaterra e na Irlanda. Após a morte de sua segunda esposa, Filipe teria pedido sua cunhada Isabel I em casamento, recebendo uma negativa.[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Carlos V",
      "descricao": "Monarca Habsburgo do século dezesseis, rei da Espanha como Carlos I e imperador do Sacro Império Romano-Germânico."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Qual era o parentesco entre o imperador Carlos Quinto e os Reis Católicos, Isabel de Castela e Fernando de Aragão?",
    "resposta": "Era neto deles",
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_V,_Holy_Roman_Emperor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_V,_Holy_Roman_Emperor",
        "situacao": "ok",
        "texto": "Charles V (24 February 1500 – 21 September 1558) was Holy Roman Emperor and Archduke of Austria from 1519 to 1556, King of Spain (as Charles I) from 1516 to 1556, King of Sicily and Naples from 1516 to 1554, and also Lord of the Netherlands and titular Duke of Burgundy (as Charles II) from 1506 to 1555. He was heir to and then head of the rising House of Habsburg.\n[…]\nIn 1501, his parents, Philip and Joanna, left Charles in the care of Philip's step-grandmother, Margaret of York, in Mechelen and went to Spain. The main goal of their Spanish mission was the recognition of Joanna as Princess of Asturias, following Prince Miguel's death a year earlier. They succeeded despite facing some opposition from the Castilian Cortes, which were reluctant to create the premises for Habsburg succession. In 1504, when her mother Isabella died, Joanna became Queen of Castile.\n[…]\nOn one side of the Basilica are bronze effigies of Charles and Isabella, with effigies of their daughter Maria of Austria and Charles's sisters Eleanor of Austria and Maria of Hungary behind them. Adjacent to them on the opposite side of the Basilica are effigies of their son Philip with three of his wives and their ill-fated grandson Carlos, Prince of Asturias.\n[…]\nA marriage to Isabella was more beneficial for Charles, as she was closer to him in age, was fluent in Spanish and provided him with a very handsome dowry of 900,000 doblas de oro castellanas, which would help to solve the financial problems brought on by the Italian Wars.\n[…]\nCharles V is the main subject of the TVE series Carlos, Rey Emperador and is portrayed by Álvaro Cervantes;\n[…]\nD'Amico, Juan Carlos. Charles Quint, Maître du Monde: Entre Mythe et Réalité, 2004, 290 p. (in French)\n[…]\nManuel Fernández Álvarez: Imperator mundi: Karl V. – Kaiser des Heiligen Römischen Reiches Deutscher Nation.. Stuttgart 1977, ISBN 3763011781 (in German)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carlos_V_do_Sacro_Imp%C3%A9rio_Romano-Germ%C3%A2nico",
        "situacao": "ok",
        "texto": "Carlos V (Gante, 24 de fevereiro de 1500 – Cuacos de Yuste, 21 de setembro de 1558) foi o Sacro Imperador Romano e Arquiduque da Áustria a partir de 1519, Rei da Espanha como Carlos I a partir de 1516 e Senhor dos Países Baixos como Duque da Borgonha a partir de 1506.\n[…]\nNascido na Flandres, foi o filho primogênito de Filipe, o Belo (filho de Maximiliano I, Sacro Imperador Romano e Maria da Borgonha), da Casa de Habsburgo, e de Joana de Castela (filha de Isabel I de Castela e Fernando II de Aragão), da Casa de Trastâmara. Carlos herdou todos os domínios de sua família ainda jovem, devido à morte prematura de seu pai e à doença mental de sua mãe.\n[…]\nCarlos nasceu em 24 de fevereiro de 1500 na cidade flamenga de Gante, parte dos Países Baixos Habsburgos no Sacro Império Romano. Ele era o filho mais velho de Filipe, o Belo da Casa Austríaca de Habsburgo (filho de Maximiliano I da Áustria e Maria da Borgonha) e Joana, a Louca da Casa Espanhola de Trastámara (filha de Fernando de Aragão e Isabel de Castela).\n[…]\nApós sua ascensão ao trono espanhol, as negociações para o casamento de Carlos começaram logo após sua chegada a Castela, com os nobres castelhanos expressando seus desejos para que ele se casasse com sua prima em primeiro grau Isabel de Portugal, filha do rei Manuel I de Portugal e tia de Carlos, Maria de Aragão. Os nobres desejavam o casamento de Carlos com uma princesa de sangue castelhano, e um casamento com Isabel teria assegurado uma aliança entre Castela e Portugal.\n[…]\nExatamente ao lado deles, no lado oposto da Basílica, estão as efígies de seu filho Filipe, com três de suas esposas e seu infeliz neto Carlos, príncipe das Astúrias.\n[…]\n1530–1558: Sacra Cesárea Católica Real Majestade, o Imperador Romano-Germânico e Rei da Espanha",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Henry Hudson",
      "descricao": "Navegador inglês do início do século dezessete que explorou a região de Nova York e o norte do Canadá em busca de uma passagem para a Ásia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O rio que banha Nova York e uma enorme baía do norte do Canadá levam o nome do mesmo navegador inglês. Qual?",
    "resposta": "Henry Hudson",
    "fonte": [
      "https://en.wikipedia.org/wiki/Henry_Hudson",
      "https://en.wikipedia.org/wiki/Hudson_Bay"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Henry_Hudson",
        "situacao": "ok",
        "texto": "Henry Hudson (c. 1565 – disappeared 23 June 1611) was an English sea explorer and navigator during the early 17th century, best known for his explorations of present-day Canada and parts of the Northeastern United States.\n[…]\nThe whaling industry was built by neither Hudson nor Poole—both were dead by 1612.\n[…]\nOn 6 September 1609, John Colman of his crew was killed by natives with an arrow to his neck. Hudson sailed into the Upper New York Bay on 11 September, and the following day encountered a large group of 28 Lenape canoes occupied by Lenape Natives, from whom he bought oysters and beans. He then began a journey up what is now known as the Hudson River. Over the next ten days his ship ascended the river, reaching a point near Stuyvesant Landing (Old Kinderhook).\n[…]\nThe bay visited by and named after Hudson is three times the size of the Baltic Sea, and its many large estuaries afford access to otherwise landlocked parts of Western Canada and the Arctic. This allowed the Hudson's Bay Company to exploit a lucrative fur trade along its shores for more than two centuries, growing powerful enough to influence the history and present international boundaries of western North America.\n[…]\nAlong with Hudson Bay and Hudson Strait in Canada, many other topographical features and landmarks are named for Hudson. The Hudson River in New York and New Jersey is named after him, as are Hudson County, New Jersey, the Henry Hudson Bridge, the Henry Hudson Parkway, and the city of Hudson, New York.\n[…]\n\"Henry Hudson\" . Encyclopædia Britannica. Vol. XII (9th ed.). 1881. pp. 332–333.\n[…]\nWorks about Henry Hudson at Open Library\n[…]\nWorks by or about Henry Hudson at the Internet Archive"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hudson_Bay",
        "situacao": "ok",
        "texto": "Hudson Bay, sometimes called Hudson's Bay (usually historically), is a large body of saltwater in northeastern Canada with a surface area of 1,230,000 km2 (470,000 sq mi). It is located north of Ontario, west of Quebec, northeast of Manitoba, and southeast of Nunavut, but politically entirely part of Nunavut. It is an inland marginal sea of the Arctic Ocean.\n[…]\nThe search for a western route to Cathay and the East Indies, which had been actively pursued since the days of Christopher Columbus and John Cabot, in the latter part of the 15th century, directly resulted in the first sighting of Hudson Bay by Europeans. English explorers and colonists named Hudson Bay after Sir Henry Hudson who explored the bay beginning 2 August 1610, on his ship Discovery.\n[…]\nOn his fourth voyage to North America, Hudson worked his way around Greenland's west coast and into the bay, mapping much of its eastern coast. Discovery became trapped in the ice over the winter, and the crew survived onshore at the southern tip of James Bay. In the spring, as the ice receded, Henry Hudson expressed a desire to continue exploring the uncharted region. However, on 22 June 1611, the crew mutinied. They left Hudson and others adrift in a small boat.\n[…]\nThe fate of Hudson and the other men stranded with him remains undetermined. Nevertheless, there is little evidence in historical documents to suggest that they persisted for a long time thereafter. In May 1612, Sir Thomas Button sailed from England with two ships to look for Henry Hudson, and to continue the search for the Northwest Passage to Asia.\n[…]\nFrench concessions in North America as outlined in the Treaty of Utrecht included: Hudson Bay region, Nova Scotia, and Newfoundland.\n[…]\nTyrrell Sea – Prehistoric sea covering Hudson Bay\n[…]\nAtlas of Canada, online version.\n[…]\n\"Hudson Bay\" . Encyclopædia Britannica. Vol. 13 (11th ed.). 1911."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Henry_Hudson",
        "situacao": "ok",
        "texto": "Henry Hudson (c. 1550 — desaparecido em 23 de junho de 1611) foi um explorador e navegador marítimo inglês no início do século XVII, mais conhecido por suas explorações do atual Canadá e partes do nordeste dos Estados Unidos.\n[…]\nEm 1607 e 1608, Hudson fez duas tentativas em nome de mercadores ingleses para encontrar uma passagem do nordeste para Cathay através de uma rota acima do Círculo Polar Ártico. Em 1609, ele desembarcou na América do Norte em nome da Companhia Holandesa das Índias Orientais e explorou a região ao redor da moderna área metropolitana de Nova York .\n[…]\nProcurando uma passagem do noroeste para a Ásia em seu navio Halve Maen (\"Meia Lua\"), ele navegou pelo rio Hudson, que mais tarde recebeu seu nome, e assim lançou as bases para a colonização holandesa da região.\n[…]\nEm sua expedição final, enquanto ainda procurava a Passagem do Noroeste, Hudson se tornou o primeiro europeu a ver o Estreito de Hudson e a imensa Baía de Hudson. Em 1611, depois de passar o inverno na costa da baía de James, Hudson queria avançar para o oeste, mas a maioria de sua tripulação se amotinou. Os amotinados deixaram Hudson, seu filho e sete outros à deriva; os Hudsons e seus companheiros nunca mais foram vistos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Noventa e Cinco Teses",
      "descricao": "Lista de proposições escritas por Martinho Lutero em 1517 contra abusos da Igreja, marco inicial da Reforma Protestante."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que prática da Igreja Católica Martinho Lutero atacou em suas noventa e cinco teses?",
    "resposta": "A venda de indulgências",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ninety-five_Theses"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ninety-five_Theses",
        "situacao": "ok",
        "texto": "The  Ninety-five Theses or  Disputation on the Power and Efficacy of Indulgences is a list of propositions for an academic disputation written in 1517 by Martin Luther, then a professor of moral theology at the University of Wittenberg, Germany. The Theses are retrospectively considered to have launched the Protestant Reformation and the birth of Protestantism, despite various quasi- or proto-Prot\n[…]\nMartin Luther, professor of moral theology at the University of Wittenberg and town preacher, wrote the Ninety-five Theses against the contemporary practice of the church with respect to indulgences. In the Roman Catholic Church, which was practically the only Christian church in Western Europe at the time, indulgences were part of the economy of salvation.\n[…]\nHe taught that receiving an indulgence presupposed that the penitent had confessed and repented; otherwise, it was worthless. A truly repentant sinner would also not seek an indulgence because they loved God's righteousness and desired the inward punishment of their sin. These sermons seem to have ceased from April to October 1517, presumably while Luther was writing the Ninety-five Theses. He composed a Treatise on Indulgences, apparently in early autumn 1517.\n[…]\nIn theses 53–55, Luther critiques the restrictions on preaching while the indulgence was being offered.\n[…]\nIn February 1518, Pope Leo asked the head of the Augustinian Hermits, Luther's religious order, to convince him to stop spreading his ideas about indulgences. Sylvester Mazzolini was also appointed to write an opinion which would be used in the trial against him. Mazzolini wrote A Dialogue against Martin Luther's Presumptuous Theses concerning the Power of the Pope, which focused on Luther's questioning of the pope's authority rather than his complaints about indulgence preaching.\n[…]\nNinety-five Theses public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/95_Teses",
        "situacao": "ok",
        "texto": "As 95 Teses ou Disputação do Doutor Martinho Lutero sobre o Poder e Eficácia das Indulgências (em latim: Disputatio pro declaratione virtutis indulgentiarum) são uma lista de proposições para uma disputa acadêmica escrita em 1517 por Martinho Lutero, professor de teologia moral da Universidade de Vitemberga, Alemanha, as quais iniciaram a Reforma Protestante, um cisma da Igreja Católica que mudou \n[…]\nTais teses discorrem sobre as posições de Lutero contra o que ele viu como práticas abusivas por pregadores que realizavam a venda de indulgências, que tinham por finalidade reduzir a punição temporal de pecados cometidos pelos próprios compradores ou por algum de seus entes queridos no purgatório. Nas Teses, Lutero afirmou que o arrependimento requerido por Cristo para que os pecados sejam perdoados envolve o arrependimento espiritual interior e não meramente uma confissão sacramental externa.\n[…]\nEmbora a publicação das Teses seja o início da Reforma Protestante, Lutero não considerava as indulgências tão importantes como outras questões teológicas que dividiriam a igreja, como a justificação pela fé e o livre arbítrio. Sua descoberta acerca destas questões viria mais tarde, sendo que ele não via a escrita das Teses como o ponto em que suas crenças divergiram daquelas da Igreja Católica.\n[…]\nMartinho Lutero, professor de teologia moral da Universidade de Vitemberga e pregador na cidade, escreveu as 95 Teses contra a prática contemporânea da igreja com respeito às indulgências. Na Igreja Católica, praticamente a única igreja cristã na Europa na época, as indulgências faziam parte do que era chamado de economia da salvação.\n[…]\nA controvérsia sobre as indulgências desencadeada pelas Teses marcou o início da Reforma Protestante, um cisma na Igreja Católica que iniciou profundas e duradouras mudanças sociais e políticas na Europa.\n[…]\n95 Teses no Projeto Gutenberg\n[…]\n«95 Teses». no Portal Luteranos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Noventa e Cinco Teses",
      "descricao": "Lista de proposições escritas por Martinho Lutero em 1517 contra abusos da Igreja, marco inicial da Reforma Protestante."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano Martinho Lutero divulgou suas noventa e cinco teses, marco inicial da Reforma Protestante?",
    "resposta": "1517",
    "distratores": [
      "1505",
      "1521",
      "1534"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ninety-five_Theses"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ninety-five_Theses",
        "situacao": "ok",
        "texto": "The  Ninety-five Theses or  Disputation on the Power and Efficacy of Indulgences is a list of propositions for an academic disputation written in 1517 by Martin Luther, then a professor of moral theology at the University of Wittenberg, Germany. The Theses are retrospectively considered to have launched the Protestant Reformation and the birth of Protestantism, despite various quasi- or proto-Prot\n[…]\nHe taught that receiving an indulgence presupposed that the penitent had confessed and repented; otherwise, it was worthless. A truly repentant sinner would also not seek an indulgence because they loved God's righteousness and desired the inward punishment of their sin. These sermons seem to have ceased from April to October 1517, presumably while Luther was writing the Ninety-five Theses. He composed a Treatise on Indulgences, apparently in early autumn 1517.\n[…]\nAndreas Karlstadt had written a set of such theses in April 1517, more radical in theological terms than Luther's, and posted them on the door of All Saints' Church, as Luther was alleged to have done with the Ninety-five Theses. Karlstadt posted his theses at a time when the relics of the church were placed on display, and this may have been considered a provocative gesture.\n[…]\n31 October 1517, the day Luther sent the Theses to Albert, was commemorated as the beginning of the Reformation as early as 1527, when Luther and his friends raised a glass of beer to commemorate the \"trampling out of indulgences\". The posting of the Theses was established in the historiography of the Reformation as the beginning of the movement by Philip Melanchthon in his 1548 Historia de vita et actis Lutheri.\n[…]\nNinety-five Theses at Project Gutenberg\n[…]\nNinety-five Theses Archived 24 January 2021 at the Wayback Machine Modern English translation with commentary and notes\n[…]\nNinety-five Theses public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/95_Teses",
        "situacao": "ok",
        "texto": "As 95 Teses ou Disputação do Doutor Martinho Lutero sobre o Poder e Eficácia das Indulgências (em latim: Disputatio pro declaratione virtutis indulgentiarum) são uma lista de proposições para uma disputa acadêmica escrita em 1517 por Martinho Lutero, professor de teologia moral da Universidade de Vitemberga, Alemanha, as quais iniciaram a Reforma Protestante, um cisma da Igreja Católica que mudou \n[…]\nLutero enviou as Teses anexadas a uma carta a Alberto de Mainz, o Arcebispo de Mainz, em 31 de outubro de 1517, data que é considerada o início da Reforma Protestante e que é comemorada anualmente como o Dia da Reforma Protestante. Lutero também pode ter afixado as Teses na porta da Igreja do Castelo de Vitemberga e de outras igrejas em Vitemberga, de acordo com o costume da Universidade, em 31 de outubro, ou em meados de novembro.\n[…]\nAndreas Karlstadt havia escrito um conjunto dessas teses em abril de 1517, e estas eram mais radicais em termos teológicos do que as de Lutero. Ele as postou na porta da Igreja do Castelo, como Lutero teria feito com as Noventa e Cinco Teses. Karlstadt postou suas teses num momento em que as relíquias da igreja foram colocadas em exibição, e isso pode ter sido considerado um gesto provocativo.\n[…]\nDa mesma forma, Lutero publicou as Noventa e Cinco Teses no Dia de Todos-os-Santos, o dia mais importante do ano para a exibição de relíquias na Igreja do Castelo.\n[…]\n31 de outubro de 1517, o dia em que Lutero enviou suas teses à Alberto, foi comemorado como o início da Reforma já em 1527, momento em que Lutero e seus amigos brindaram com um copo de cerveja para comemorar o \"pisoteio das indulgências\". A publicação das Teses foi estabelecida na historiografia da Reforma como o início do movimento por Filipe Melâncton na obra Historia de vita et actis Lutheri de 1548.\n[…]\n95 Teses no Projeto Gutenberg\n[…]\n«95 Teses». no Portal Luteranos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Terremoto de Lisboa de 1755",
      "descricao": "Terremoto seguido de tsunami e incêndios que destruiu grande parte de Lisboa em 1º de novembro de 1755."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Depois do terremoto de 1755, os prédios da Baixa de Lisboa foram reconstruídos com que inovação contra tremores de terra?",
    "resposta": "A gaiola pombalina",
    "fonte": [
      "https://en.wikipedia.org/wiki/1755_Lisbon_earthquake",
      "https://en.wikipedia.org/wiki/Pombaline_style"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1755_Lisbon_earthquake",
        "situacao": "ok",
        "texto": "The 1755 Lisbon earthquake, also known as the Great Lisbon earthquake, occurred in the Iberian Peninsula and Northwest Africa area on the morning of Saturday, 1 November, 1755 (on the Christian Feast of All Saints); it took place at approximately 09:40 local time. In combination with subsequent fires and a tsunami, the earthquake almost completely destroyed Lisbon and adjoining areas.\n[…]\nThe Pombaline buildings are among the earliest seismically protected constructions in Europe. Small wooden models were built for testing, and earthquakes were simulated by marching troops around them. Lisbon's \"new\" Lower Town, known today as the Pombaline Lower Town (Baixa Pombalina), is one of the city's famed attractions. Sections of other Portuguese cities, such as the Vila Real de Santo António in Algarve, were also rebuilt along Pombaline principles.\n[…]\nBefore 1 November 1755, there had been a constant struggle for power and royal favour, but the competent response of the Marquis of Pombal effectively severed the power of the old aristocratic factions. However, silent opposition and resentment against King Joseph I began to rise, culminating in his attempted assassination in 1758 and the subsequent reprisals eliminating the powerful Duke of Aveiro and the Távora family.\n[…]\nThe priests' answers are still archived in the Torre do Tombo national archive, enabling modern scientists to reconstruct the event. Because Pombal was the first to attempt a large-scale objective investigation of an earthquake, he is regarded as a forerunner of modern seismology.\n[…]\nChase, J. \"The Great Earthquake at Lisbon (1755)\". Colliers Magazine, 1920.\n[…]\nFonseca, J. D. 1755, O Terramoto de Lisboa, The Lisbon Earthquake. Argumentum, Lisbon, 2004.\n[…]\nImages and historical depictions of the 1755 Lisbon earthquake from the University of California\n[…]\nThe Lisbon Earthquake (1755) from European History Online"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pombaline_style",
        "situacao": "ok",
        "texto": "The Pombaline style was a Portuguese architectural style of the 18th century, named after Sebastião José de Carvalho e Melo, the first Marquês de Pombal, who was instrumental in reconstructing Lisbon after the earthquake of 1755. Pombal supervised the plans drawn up by the military engineers Manuel da Maia, Eugénio dos Santos and Elias Sebastião Pope (later succeeded by Carlos Mardel).\n[…]\nThe new city (mostly the Baixa area now called Baixa Pombalina) was laid out on a grid plan with roads and pavements fixed at 40 ft wide (12 m). The previously standing Royal Palace was replaced with the Praça do Comércio which, along with square Rossio, defines the limits of the new city.\n[…]\nThe Pombaline style introduced early anti-seismic design features and early prefabricated building methods. A flexible wooden structure implanted on the walls, floors and roofs and later covered by pre-manufactured building materials \"shakes but doesn’t fall.\" Lisbon’s downtown, called Baixa, the area most affected by the earthquake, is built over unstable ground, and it is thus necessary to reinforce the whole area.\n[…]\nLarge spaces, gorgeous light and good ventilation, missing in the medieval city, became features of the new Lisbon.\n[…]\nThe Pombaline building is a structure of up to four floors, with arcades on the ground floor to allow for shops and balconies on the first and uppermost floor. All of the buildings follow that general typology, but the small decorative details in the façade depend on the building's significance and use. Each building is isolated by walls to stop the spread of fires.\n[…]\nVila Real de Santo António, in the Algarve, is an example of a village built after the Pombaline style.\n[…]\nDavid Kendrick Underwood: The Pombaline Style and International Neoclassicism in Lisbon and Rio de Janeiro, 1988, PhD thesis U of Penn."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sismo_de_Lisboa_de_1755",
        "situacao": "ok",
        "texto": "O Sismo de Lisboa de 1755, também conhecido como o Grande Terramoto de Lisboa de 1755 (português europeu) ou Grande Terremoto de Lisboa de 1755 (português brasileiro), atingiu a Península Ibérica e o noroeste de África na manhã de sábado, de 1 de novembro de 1755, Dia de Todos-os-Santos, por volta das 9h40, hora local.\n[…]\nChegou este terremoto e cheia, não com notável espanto em França, Castela, e Roma, e consequentemente aos mais estados da Europa; porém no império Otomano se sentiu muito principalmente no Salé, Maníquez, e Marrocos, e em outras muitas cidades, e províncias suas com que morreram tantas mil pessoas, como também nas grandes cheias do mar tanto no terremoto do dia l.º de Novembro, que não foi 1á o maior, mas no do dia 18 do mês, que indo de Maniquez para outra cidade fugindo muitos com camelos e mulas carregadas do mais precioso, se abriu a terra e desapareceu e subverteu tudo, e em cerco em que estavam 16 mil Judeus só 8 escaparam; e estas e outras muitas que aqui se não podem relatar vieram e as vi escritas em uma carta que enviou o guardião do convento de Maniquez ao seu comissário de Castela.\n[…]\nA competência do ministro não se limitou à ação de reconstrução da cidade. O Marquês de Pombal ordenou um inquérito, enviado a todas as paróquias do país para apurar a ocorrência e efeitos do sismo. O questionário incluía as seguintes questões:\n[…]\nPor quanto tempo a terra tremeu?\n[…]\nAs respostas ainda se encontram arquivadas na Torre do Tombo. O inquérito do Marquês de Pombal foi a primeira iniciativa de descrição objetiva no campo da sismologia, razão pela qual é considerado um precursor da ciência da sismologia.\n[…]\nTsunâmi no Brasil em 1755",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Guerra dos Sete Anos",
      "descricao": "Conflito mundial de 1756 a 1763 entre as grandes potências europeias, com combates na Europa, na América e na Ásia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Derrotada na Guerra dos Sete Anos, a França cedeu à Grã-Bretanha, em 1763, que grande colônia da América do Norte?",
    "resposta": "O Canadá",
    "fonte": [
      "https://en.wikipedia.org/wiki/Treaty_of_Paris_(1763)",
      "https://en.wikipedia.org/wiki/Seven_Years%27_War"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Treaty_of_Paris_(1763)",
        "situacao": "ok",
        "texto": "The Treaty of Paris, also known as the Treaty of 1763, was signed on 10 February 1763 by the kingdoms of Great Britain, France and Spain, with Portugal in agreement, following Great Britain and Prussia's victory over France and Spain during the Seven Years' War.\n[…]\nIn Canada, France wanted open emigration for those, such as the nobility, who would not swear allegiance to the British Crown. Finally, France required toleration for Roman Catholics in North America.\n[…]\nAcross the Thirteen Colonies, Protestant colonists were disappointed by the toleration granted to Catholicism in the Treaty of Paris. American colonists who had moved to Quebec were additionally displeased with the fact that French law was preserved in the lower courts there and that Catholics in Canada would be allowed to serve as jurymen.\n[…]\nArticle IV has also been cited as the basis for Quebec's unique legal code that differs from the rest of Canada. There was a general constitutional principle in Britain which allowed colonies acquired through conquest from other European powers to maintain pre-conquest laws. This was limited by royal prerogative, which allowed the British monarch to change the existing legislation in colonies.\n[…]\nThe Acadians, French settlers living in the colony of Acadia and other parts of The Maritimes, were deported from the region by British authorities during the Seven Years' War. Following the signing of the treaty, which granted certain rights to Catholics, a number of Acadians returned to Canada. As they were no longer welcome in Nova Scotia, the returning Acadians settled in New Brunswick, which became a bilingual colony.\n[…]\nGreat Britain in the Seven Years' War\n[…]\nDull, Jonathan R. (2005). The French Navy and the Seven Years' War. University of Nebraska."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Seven_Years%27_War",
        "situacao": "ok",
        "texto": "The Seven Years' War, 1756 to 1763, was a global conflict fought by numerous great powers, primarily in Europe, with significant subsidiary campaigns in North America and the Indian subcontinent. The primary warring states were Great Britain and Prussia fighting against France and Austria, with other countries joining these coalitions: Portugal, Spain, Sweden, and Russia, plus Saxony and many othe\n[…]\nAs the Seven Years War was not yet over in Europe, the British put all of New France under a military regime while awaiting the results. This regime would last from 1760 to 1763.\n[…]\nBetween September 1762 and April 1763, Spanish forces led by don Pedro Antonio de Cevallos, Governor of Buenos Aires (and later first Viceroy of the Rio de la Plata) undertook a campaign against the Portuguese in the Banda Oriental, now Uruguay and south Brazil. The Spanish conquered the Portuguese settlement of Colonia do Sacramento and Rio Grande de São Pedro and forced the Portuguese to surrender and retreat.\n[…]\nUnder the Treaty of Paris, Spain had to return to Portugal the settlement of Colonia do Sacramento, while the vast and rich territory of the so-called \"Continent of S. Peter\" (the present-day Brazilian state of Rio Grande do Sul) would be retaken from the Spanish army during the undeclared Hispano-Portuguese war of 1763–1777.\n[…]\nThe novel The Last of the Mohicans (1826) by James Fenimore Cooper, and its subsequent adaptations, are set in the North American theatre of the Seven Years' War.\n[…]\nIn the video game Assassin's Creed III (2012), primarily set during the American Revolution, the early missions following Haytham Kenway are set during the North American campaigns of the French and Indian War from 1754 to 1755. The second half of Assassin's Creed Rogue (2014) is also set within the timescale of the Seven Years' War, from 1756 to 1760.\n[…]\nFrance in the Seven Years' War"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tratado_de_Paris_%281763%29",
        "situacao": "ok",
        "texto": "O Tratado de Paris (em francês: Traité de paix entre le Roi, le roi d'Espagne et le roi de la Grande-Bretagne, 1763) é um tratado de paz assinado em 10 de fevereiro de 1763 entre França e Espanha e Grã-Bretanha e Portugal, com a finalidade principal de encerrar as hostilidades da Guerra dos Sete Anos (1756–1763) e reorganizar os territórios coloniais de cada nação na Ásia e na América do Norte.\n[…]\nNo contexto do continente americano, o conflito (estudado separadamente como Guerra Franco-Indígena) envolveu nações indígenas locais em alianças estratégicas com franceses e britânicos em meio à disputa por territórios no Vale do Rio Ohio, Acádia e Canadá.\n[…]\nDurante a guerra, a Grã-Bretanha conquistou as colônias francesas do Canadá, Guadalupe, Santa Lúcia, Martinica, Dominica, Granada, São Vicente, Granadinas e Tobago (na América). Os principais vencedores do conflito, os britânicos também tomaram os postos comerciais franceses na Índia, Goreia e Senegal e as colônias espanholas de Manila e Havana. A França, por sua vez, havia conseguido a célebre captura de Minorca e de diversos postos comerciais britânicos em Sumatra.\n[…]\nNa negociação do Tratado de Paris, a Grã-Bretanha optou por devolver a ilha de Guadalupe, uma lucrativa colônia açucareira no Caribe, e manter suas possessões conquistas na América do Norte. Sob a liderança do Duque de Choiseul, a França – que enfrentava um cenário de devastação financeira e esgotamento social severos – relutantemente aceitou os termos e cedeu grande parte do Canadá.\n[…]\nNos artigos 10 ao 14, Grã-Bretanha e França estabelecem diversos acordos sobre a devolução de territórios em outros teatros operacionais do conflito. Apesar de a América, em especial a América do Norte, ter sido o cerne e palco principal da guerra, os confrontos estenderam-se para as colônias de todos os países envolvidos na África atlântica e no Sudoeste asiático.\n[…]\nRevolução Americana",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Conspiração da Pólvora",
      "descricao": "Plano fracassado de católicos ingleses, em 1605, para explodir o Parlamento e matar o rei Jaime I."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que festa britânica com fogueiras e fogos de artifício, celebrada todo 5 de novembro, nasceu do fracasso da Conspiração da Pólvora, de 1605?",
    "resposta": "Noite de Guy Fawkes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Guy_Fawkes_Night",
      "https://en.wikipedia.org/wiki/Gunpowder_Plot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guy_Fawkes_Night",
        "situacao": "ok",
        "texto": "Guy Fawkes Night, also known as Guy Fawkes Day, Bonfire Night and Fireworks Night, is an annual commemoration observed on 5 November, primarily in Great Britain, involving bonfires and fireworks displays. Its history begins with the events of 5 November 1605 O.S., when Guy Fawkes, a member of the Gunpowder Plot, was arrested while guarding explosives the plotters had placed beneath the House of Lo\n[…]\nGuy Fawkes Night originates from the Gunpowder Plot of 1605, a failed conspiracy by a group of provincial English Catholics to assassinate the Protestant King James I of England and VI of Scotland and replace him with a Catholic head of state.\n[…]\nIn the immediate aftermath of the 5 November arrest of Guy Fawkes, caught guarding a cache of explosives placed beneath the House of Lords, James's Council allowed the public to celebrate the king's survival with bonfires, so long as they were \"without any danger or disorder\". This made 1605 the first year the plot's failure was celebrated.\n[…]\nit might be observed that Guy Fawkes' Day is finally declining, having lost its connection with politics and religion. But we have heard that many times before.\"\n[…]\nCiting Cressy's work, Ronald Hutton agrees with his conclusion, writing, \"There is, in brief, nothing to link the Hallowe'en fires of North Wales, Man, and central Scotland with those which appeared in England upon 5 November.\" Further confusion arises in Northern Ireland, where some communities celebrate Guy Fawkes Night; the distinction there between the Fifth and Halloween is not always clear.\n[…]\nSome measure of celebration remains in New Zealand, Canada, and South Africa. On the Cape Flats in Cape Town, South Africa, Guy Fawkes day has become associated with youth hooliganism. In Canada in the 21st century, celebrations of Bonfire Night on 5 November are largely confined to the province of Newfoundland and Labrador."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gunpowder_Plot",
        "situacao": "ok",
        "texto": "The Gunpowder Plot of 1605, in earlier centuries often called the Gunpowder Treason Plot or the Jesuit Treason, was an unsuccessful attempted regicide against King James VI of Scotland and I of England by a group of English Catholics, led by Robert Catesby.\n[…]\nOn 26 October 1605, an anonymous letter of warning was sent to William Parker, 4th Baron Monteagle, a Catholic member of Parliament, who immediately showed it to the authorities. During a search of the House of Lords on the evening of 4 November, Fawkes was discovered guarding 36 barrels of gunpowder—enough to reduce the House of Lords to rubble—and arrested. Hearing that the plot had been discovered, most of the conspirators fled from London while trying to enlist support along the way.\n[…]\nAccording to Fawkes, 20 barrels of gunpowder were brought in at first, followed by 16 more on 20 July. The supply of gunpowder was theoretically controlled by the government, but it was easily obtained from illicit sources. On 28 July, the ever-present threat of the plague again delayed the opening of Parliament, this time until Tuesday 5 November. Fawkes left the country for a short time. The King, meanwhile, spent much of the summer away from the city, hunting.\n[…]\nIt is uncertain when Fawkes returned to England, but he was back in London by late August, when he and Wintour discovered that the gunpowder stored in the undercroft had decayed. More gunpowder was brought into the room, along with firewood to conceal it. The final three conspirators were recruited in late 1605. At Michaelmas, Catesby persuaded the staunchly Catholic Ambrose Rookwood to rent Clopton House near Stratford-upon-Avon.\n[…]\nThe story of Guy Fawkes and The Gunpowder Plot from BBC History, with archive video clips"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Noite_de_Guy_Fawkes",
        "situacao": "ok",
        "texto": "A noite de Guy Fawkes refere-se ao episódio em que o soldado católico inglês Guy Fawkes, membro da chamada \"conspiração da pólvora\", tentou explodir o Parlamento Inglês e matar o rei protestante Jaime I da Inglaterra, na noite do dia 5 de novembro de 1605. Contudo,  seu grupo foi descoberto e Fawkes e seus companheiros foram torturados durante quatro dias na Torre de Londres antes de serem executa\n[…]\nA data foi instituída na Inglaterra como uma festividade pela sobrevivência do rei que é chamada de Bonfire Night, normalmente com a presença de fogos de artifício e de uma grande fogueira.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Tratado de Tordesilhas",
      "descricao": "Acordo assinado em 1494 entre Portugal e Castela que dividiu as terras descobertas e a descobrir fora da Europa."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Pelo Tratado de Tordesilhas, de 1494, a linha que dividia o mundo entre Portugal e Espanha ficava a quantas léguas a oeste de Cabo Verde?",
    "resposta": "370 léguas",
    "distratores": [
      "100 léguas",
      "270 léguas",
      "470 léguas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Treaty_of_Tordesillas",
      "https://pt.wikipedia.org/wiki/Tratado_de_Tordesilhas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Treaty_of_Tordesillas",
        "situacao": "ok",
        "texto": "The Treaty of Tordesillas, signed in Tordesillas, Spain, on 7 June 1494, and ratified in Setúbal, Portugal, divided the newly discovered lands outside Europe between the Kingdom of Portugal and the Crown of Castile, along a meridian 370 leagues (c. 2,100 km or 1,300 mi) west of the Cape Verde islands, off the west coast of Africa.\n[…]\nThe lands to the east would belong to Portugal and the lands to the west to Castile, modifying an earlier bull by Pope Alexander VI. The treaty was signed on 7 June 1494, then ratified by Spain on 2 July 1494, by Portugal on 5 September 1494, and by Pope Julius II on 24 January 1506. The other side of the world was divided a few decades later by the Treaty of Zaragoza, signed on 22 April 1529, which specified the antimeridian to the line of demarcation specified in the Treaty of Tordesillas.\n[…]\nThe Treaty of Zaragoza did not modify or clarify the line of demarcation provided by the Treaty of Tordesillas, nor did it validate Spain's claim to equal hemispheres (180° each), so the two lines divided the earth into unequal hemispheres. Portugal's portion was roughly 191° whereas Spain's portion was roughly 169°. Both portions have a large uncertainty of ±4° because of the wide variation in the opinions regarding the location of the Tordesillas line.\n[…]\nOn 13 January 1750, King John V of Portugal and Ferdinand VI of Spain signed the Treaty of Madrid, in which both parties sought to establish the borders between Brazil and Spanish America, admitting that the Treaty of Tordesillas, as it had been envisioned in 1494, had been superseded, and was considered void. Spanish sovereignty was acknowledged over the Philippines, while Portugal would get the territory of the Amazon River basin.\n[…]\nHouses of Treaty of Tordesillas\n[…]\nTreaty of Tordesillas (Portuguese) from Archivo General de Indias"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tratado_de_Tordesilhas",
        "situacao": "ok",
        "texto": "Tratado de Tordesilhas foi um acordo internacional assinado na povoação castelhana de Tordesilhas em 7 de junho de 1494, celebrado entre o Reino de Portugal e a Coroa de Castela para dividir as terras \"descobertas e por descobrir\" por ambas as Coroas fora da Europa.\n[…]\nO tratado definia como linha de demarcação o meridiano 370 léguas a oeste da ilha de Santo Antão no arquipélago de Cabo Verde. Esta linha estava situada a meio caminho entre estas ilhas (então portuguesas) e as ilhas das Caraíbas descobertas por Colombo, no tratado referidas como \"Cipango\" e Antília. Os territórios a leste deste meridiano pertenceriam a Portugal e os territórios a oeste, a Castela. O tratado foi ratificado por Castela a 2 de julho e por Portugal a 5 de setembro de 1494.\n[…]\nO Tratado estabelecia a divisão das áreas de influência dos países ibéricos, cabendo a Portugal as terras \"descobertas e por descobrir\" situadas antes da linha imaginária que demarcava 370 léguas (1 770 km) a oeste das ilhas de Cabo Verde, e a Castela as terras que ficassem além dessa linha.\n[…]\nComo resultado das negociações, os termos do tratado foram ratificados por Castela a 2 de julho de 1494 e, por Portugal, a 5 de setembro do mesmo ano. Contrariando a bula anterior de Alexandre VI, Inter Coetera (1493), que atribuía a Castela a posse das terras localizadas a partir de uma linha demarcada a 100 léguas de Cabo Verde, o novo tratado foi aprovado pelo Papa Júlio II em 1506. Na América do Sul a linha passava entre Belém do Pará (PA) e Cananéia (SP). (Marco de Cananéia).\n[…]\nMas a descoberta pelos portugueses em 1512 das valiosas \"ilhas das Especiarias\", as Molucas, desencadeou a contestação espanhola, argumentando que o Tratado de Tordesilhas dividia o mundo em dois hemisférios equivalentes."
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Galileu Galilei",
      "descricao": "Astrônomo, físico e engenheiro italiano (1564–1642), pai da astronomia observacional."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Em 1610, apontando sua luneta para Júpiter, quantas luas do planeta Galileu Galilei descobriu?",
    "resposta": "Quatro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Galilean_moons"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Galilean_moons",
        "situacao": "ok",
        "texto": "The Galilean moons (), or Galilean satellites, are the four largest moons of Jupiter. They are, in descending-size order, Ganymede, Callisto, Io, and Europa. They are the most readily visible Solar System objects after Saturn, the dimmest of the classical planets; though their closeness to bright Jupiter makes naked-eye observation very difficult, they are readily seen with common binoculars, even\n[…]\nBy January 15, Galileo concluded that the stars were actually bodies orbiting Jupiter. He continued to observe these celestial orbs to 2 March 1610.\n[…]\nIn 1605, Galileo had been employed as a mathematics tutor for Cosimo de' Medici. In 1609, Cosimo became Grand Duke Cosimo II of Tuscany. Galileo, seeking patronage from his now-wealthy former student and his powerful family, used the discovery of Jupiter's moons to gain it. On 13 February 1610, Galileo wrote to the Grand Duke's secretary:\n[…]\nOn 12 March 1610, Galileo wrote his dedicatory letter to the Duke of Tuscany, and the next day sent a copy to the Grand Duke, hoping to obtain the Grand Duke's support as quickly as possible. On 19 March, he sent the telescope he had used to first view Jupiter's moons to the Grand Duke, along with an official copy of Sidereus Nuncius (The Starry Messenger) that, following the secretary's advice, named the four moons the Medician Stars. In his dedicatory introduction, Galileo wrote:\n[…]\nGanymede (Jupiter III), the third Galilean moon, is named after the mythological Ganymede, cupbearer of the Greek gods and Zeus's beloved. Ganymede is the largest natural satellite in the Solar System at 5262.4 kilometers in diameter, which makes it larger than the planet Mercury – although only at about half of its mass since Ganymede is an icy world. It is the only satellite in the Solar System known to possess a magnetosphere, likely created through convection within the liquid iron core.\n[…]\nJupiter's moons in fiction"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Luas_de_Galileu",
        "situacao": "ok",
        "texto": "As Luas de Galileu (ou luas galileanas) [ɡælᵻˈliːən] são as quatro maiores luas de Júpiter, Io, Europa, Ganímedes e Calisto. Foram vistos pela primeira vez por Galileo Galilei em dezembro de 1609 ou janeiro de 1610, e reconhecidos por ele como satélites de Júpiter em março de 1610. Foram os primeiros objetos encontrados a orbitar um planeta diferente da Terra.\n[…]\nAs quatro luas galileanas eram as únicas luas conhecidas de Júpiter até a descoberta de Amalteia, a \"quinta lua de Júpiter\", em 1892.\n[…]\nEm 7 de janeiro de 1610, Galileu escreveu uma carta contendo a primeira menção às luas de Júpiter. Na época, ele viu apenas três delas e acreditou que fossem estrelas fixas próximas a Júpiter. Ele continuou a observar essas orbes celestes de 8 de janeiro a 2 de março de 1610. Nessas observações, ele descobriu um quarto corpo e também observou que as quatro não eram estrelas fixas, mas em órbita de Júpiter.\n[…]\nEm 12 de março de 1610, Galileu escreveu sua carta dedicatória ao duque da Toscana e, no dia seguinte, enviou uma cópia ao grão-duque, na esperança de obter o apoio do grão-duque o mais rápido possível. Em 19 de março, ele enviou o telescópio que havia usado para ver as luas de Júpiter pela primeira vez ao grão-duque, junto com uma cópia oficial de Sidereus Nuncius que, seguindo o conselho do secretário, chamou as quatro luas de Estrelas Medician. Em sua introdução dedicatória, Galileu escreveu:\n[…]\nTodas as quatro luas galileanas são brilhantes o suficiente para serem vistas da Terra sem um telescópio, se apenas pudessem aparecer mais longe de Júpiter. (Eles são, no entanto, facilmente distinguidos até mesmo com binóculos de baixa potência). Têm magnitudes aparentes entre 4,6 e 5,6 quando Júpiter está em oposição ao Sol, e são cerca de uma unidade de magnitude mais fraca quando Júpiter está em conjunção.\n[…]\nA Beginner's Guide to Jupiter's Moons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Calendário gregoriano",
      "descricao": "Calendário instituído em 1582 pelo papa Gregório XIII para corrigir o calendário juliano, hoje usado em quase todo o mundo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em 1582, ao reformar o calendário, o papa Gregório Treze mandou eliminar de uma só vez quantos dias?",
    "resposta": "Dez dias",
    "distratores": [
      "Cinco dias",
      "Onze dias",
      "Quinze dias"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gregorian_calendar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gregorian_calendar",
        "situacao": "ok",
        "texto": "The Gregorian calendar is the calendar currently used in most parts of the world. It went into effect in October 1582 following the papal bull Inter gravissimas issued by Pope Gregory XIII, which introduced it as a modification of, and replacement for, the Julian calendar.\n[…]\nThe Gregorian calendar was a reform of the Julian calendar. It was instituted by the papal bull Inter gravissimas dated 24 February 1582 by Pope Gregory XIII, after whom the calendar is named. The motivation for the adjustment was to bring the date for the celebration of Easter to the time of year in which it was celebrated when it was introduced by the early Church.\n[…]\n\"Old Style\" (O.S.) and \"New Style\" (N.S.) indicate dating systems before and after a calendar change, respectively. Usually, this is the change from the Julian calendar to the Gregorian calendar as enacted in various European countries between 1582 and the early 20th century.\n[…]\nExtending the Gregorian calendar backwards to dates preceding its official introduction in a particular jurisdiction produces a proleptic calendar, which should be used with some caution. For ordinary purposes, the dates of events occurring prior to 15 October 1582 are generally shown as they appeared in the Julian calendar, with the year starting on 1 January, and no conversion to a putative Gregorian equivalents.\n[…]\nFor example, in the case of the few countries that adopted the reformed calendar on the date proposed by Gregory XIII for the calendar's adoption, Friday, 15 October 1582, the preceding date was Thursday, 4 October 1582 (Julian calendar).\n[…]\nThe following are proposed reforms of the Gregorian calendar:\n[…]\nGregorian calendar on In Our Time at the BBC\n[…]\nWorld records for mentally calculating the day of the week in the Gregorian Calendar"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Calend%C3%A1rio_gregoriano",
        "situacao": "ok",
        "texto": "O calendário gregoriano é o sistema usado na maior parte do mundo, inclusive no Brasil e em Portugal, para organizar os dias em anos, meses e semanas. É a principal referência internacional para datas civis, administrativas e comerciais. Em 2026, o calendário gregoriano fazia parte da vida de cerca de 8 bilhões de pessoas, mais de 96% da população mundial.\n[…]\nA reforma recebeu o nome do papa Gregório XIII, que promulgou a bula Inter gravissimas em 24 de fevereiro de 1582. Seu objetivo era corrigir o calendário juliano e devolver a celebração da Páscoa à época do ano em que ocorria quando a festividade foi introduzida pela Igreja primitiva. Como o sistema juliano considerava que o ano durava exatamente 365,25 dias, a data do equinócio havia se afastado aos poucos daquela observada no céu, afetando também o cálculo da Páscoa.\n[…]\nA reforma de 1917 fez 15 de fevereiro rumi ser seguido por 1.º de março, eliminou a diferença de treze dias e alinhou as datas rumi às gregorianas; em 1.º de janeiro de 1918, o começo do ano passou para janeiro. Em 1.º de janeiro de 1926, a Turquia adotou a era internacional na numeração oficial dos anos, embora o calendário islâmico continuasse permitido em situações especiais.\n[…]\nA maior parte da Europa Ocidental transferiu o início do ano para 1.º de janeiro antes de adotar o calendário gregoriano. A Escócia começou o Ano-Novo nessa data em 1600, fazendo de 1599 um ano curto. Inglaterra, Irlanda e as colônias britânicas mudaram em 1752, e 1751 teve apenas 282 dias. Em setembro daquele ano, o calendário gregoriano entrou em vigor em toda a Grã-Bretanha e suas colônias, como se detalha em Adoção. As duas reformas decorreram da Lei do Calendário de 1750.\n[…]\nCalendário juliano, sistema substituído pela reforma gregoriana\n[…]\nCalendário perpétuo, calendário concebido para conservar a mesma relação entre datas e dias da semana",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Concílio de Trento",
      "descricao": "Concílio ecumênico da Igreja Católica realizado entre 1545 e 1563, base da Contrarreforma."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Que cidade do norte da Itália sediou o concílio que, entre 1545 e 1563, organizou a reação católica à Reforma Protestante?",
    "resposta": "Trento",
    "fonte": [
      "https://en.wikipedia.org/wiki/Council_of_Trent"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Council_of_Trent",
        "situacao": "ok",
        "texto": "The Council of Trent (Latin: Concilium Tridentinum), held between 1545 and 1563 in Trent (or Trento), in Northern Italy, was the 19th ecumenical council of the Catholic Church.\n[…]\nA comprehensive history is found in Hubert Jedin's The History of the Council of Trent (Geschichte des Konzils von Trient) with about 2,500 pages in four volumes: The History of the Council of Trent: The fight for a Council (Vol I, 1951); The History of the Council of Trent: The first Sessions in Trent (1545–1547) (Vol II, 1957); The History of the Council of Trent: Sessions in Bologna 1547–1548 and Trento 1551–1552 (Vol III, 1970, 1998); The History of the Council of Trent: Third Period and Conclusion (Vol IV, 1976).\n[…]\nOut of 87 books written between 1546 and 1564 attacking the Council of Trent, 41 were written by Pier Paolo Vergerio, a former papal nuncio turned Protestant Reformer. The 1565–73 Examen decretorum Concilii Tridentini (Examination of the Council of Trent) by Martin Chemnitz was the main Lutheran response to the Council of Trent.\n[…]\nCouncil of Jerusalem-Bethlehem\n[…]\nPaolo Sarpi, Historia del Concilio Tridentino, London: John Bill,1619 (History of the Council of Trent, English translation by Nathaniel Brent, London 1620, 1629 and 1676)\n[…]\nFrancesco Sforza Pallavicino, Istoria del concilio di Trento. In Roma, nella stamperia d'Angelo Bernabò dal Verme erede del Manelfi: per Giovanni Casoni libraro, 1656–57\n[…]\nMullett, Michael A. \"The Council of Trent and the Catholic Reformation\", in his The Catholic Reformation (London: Routledge, 1999, ISBN 0-415-18915-2, pbk.), pp. 29–68. N.B.: The author also mentions the Council elsewhere in his book.\n[…]\nDocuments of the Council in Latin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Conc%C3%ADlio_de_Trento",
        "situacao": "ok",
        "texto": "O Concílio de Trento, realizado de 13 de dezembro de 1545 a 4 de dezembro de 1563, foi o 19.º concílio ecumênico da Igreja Católica. Foi convocado pelo Papa Paulo III para assegurar a unidade da fé e a disciplina eclesiástica, no contexto da Reforma da Igreja Católica e da reação à divisão então vivida na Europa devido à Reforma Protestante, razão pela qual é denominado também de Concílio da Contr\n[…]\nPara opor-se ao protestantismo, o concílio emitiu numerosos decretos disciplinares e especificou claramente as doutrinas católico‐romanas quanto à salvação, os sete sacramentos (como por exemplo, confirmou a presença de Cristo na Eucaristia), o Cânone de Trento (reafirmou como autêntica a Vulgata) e a Tradição, a doutrina da graça e do pecado original, a justificação, a liturgia e o valor e importância da Missa (unificou o ritual da missa de rito romano, abolindo as variações locais, instituindo a chamada \"Missa Tridentina\"), o celibato clerical, a hierarquia católica, o culto dos santos, das relíquias e das imagens, as indulgências e a natureza da Igreja.\n[…]\n2.º Período (1551-1552) — Celebraram-se 6 sessões, continuando a promulgar-se, simultaneamente, decretos de reforma e doutrinais ainda sobre sacramentos, particularmente sobre a Eucaristia (nomeadamente sobre a questão da transubstanciação), a penitência, e a extrema-unção. A guerra entre Carlos V e os príncipes protestantes constituiu um perigo para os padres conciliares de Trento;\n[…]\nA história completa é encontrada em Hubert Jedin 's A História do Concílio de Trento (Geschichte des Konzils von Trient) com cerca de 2 500 páginas em quatro volumes: A História do Conselho de Trent: a luta por um Conselho (Vol I de 1951); A História do Concílio de Trento: as primeiras sessões em Trento (1545–1547) (Vol. II, 1957); A História do Concílio de Trento: Sessões em Bolonha 1547–1548 e Trento 1551–1552 (Vol.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Galeões de Manila",
      "descricao": "Navios espanhóis que, de 1565 a 1815, cruzavam o Pacífico entre as Filipinas e a Nova Espanha levando prata e mercadorias asiáticas."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Por cerca de duzentos e cinquenta anos, os galeões de Manila cruzaram o Pacífico ligando as Filipinas a que porto do México?",
    "resposta": "Acapulco",
    "distratores": [
      "Veracruz",
      "Mazatlán",
      "Tampico"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Manila_galleon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Manila_galleon",
        "situacao": "ok",
        "texto": "The Manila galleon trade route was a Spanish trade route linking the Philippines in the Spanish East Indies to Mexico (New Spain), across the Pacific Ocean, in use from 1565 to 1815. This route was plied by sailing ships or galleons i.e. the Manila galleons (Spanish: Galeón de Manila; Tagalog: Galeon ng Maynila) that made one or two round-trip voyages per year between Manila and Acapulco.\n[…]\nThe route was inaugurated in 1565 after the Augustinian friar and navigator Andrés de Urdaneta pioneered the tornaviaje or return route from the Philippines to Mexico. Urdaneta and Alonso de Arellano made the first successful round trips that year, by taking advantage of the Kuroshio Current. The galleons set sail from Cavite, in Manila Bay, at the end of June or the first week of July, sailing through the northern Pacific and reaching Acapulco in March to April of the next calendar year.\n[…]\nIt took at least four months to sail across the Pacific Ocean from Manila to Acapulco, and the galleons were the main link between the Philippines and the viceregal capital at Mexico City and thence to Spain itself. Many of the so-called \"Kastilas\" or Spaniards in the Philippines were actually of Mexican descent, and the Hispanic culture of the Philippines is influenced by Spanish and Mexican culture in particular.\n[…]\nIn 2014, the idea to nominate the Manila–Acapulco Galleon Trade Route as a World Heritage Site was initiated by the Mexican and Filipino ambassadors to UNESCO. Spain has also backed the nomination and suggested that the archives related to the route under the possession of the Philippines, Mexico, and Spain be nominated as part of another UNESCO list, the Memory of the World Register.\n[…]\nIn 2017, the Philippines established the Manila–Acapulco Galleon Museum in Metro Manila, one of the necessary steps in nominating the trade route to UNESCO.\n[…]\nManila Galleons along the Californian coasts"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gale%C3%A3o_de_Manila",
        "situacao": "ok",
        "texto": "Os galeões de Manila eram navios comerciais espanhois que atravessavam o oceano Pacífico, uma ou duas vezes por ano, navegando entre Manila nas Filipinas e Acapulco no México, então Vice-Reino da Nova Espanha. Esta rota de comércio espanhola foi criada em 1565 como alternativa ao domínio português e holandês no oriente, e  acabaria por realizar, quase 50 anos após a sua morte, a ambição inicial de\n[…]\nO galeão de Manila resultou da descoberta de Andrés de Urdaneta que, velejando na frota de Miguel López de Legazpi, descobriu um caminho de retorno de Cebu para o México, em 1565. Tentando o regresso a frota separou-se, com parte navegando para sul. Urdaneta deduziu que os ventos do Pacífico girassem como acontecia no Atlântico.\n[…]\nOs produtos orientais viajavam, cruzando o oceano Pacífico das Filipinas para Acapulco, no Vice-Reino da Nova Espanha, uma travessia de 4 meses. Eram então transportados por terra até à costa oeste, e de Acapulco ou Veracruz eram reembarcados, seguindo a \"rota da prata\" com destino a Sevilha e Cádiz, em Espanha.\n[…]\nNos 250 anos da rota Manila-Acapulco, de 1565 a 1815, partiram de Manila um total de 110 galeões. No século XVI tinham em média de 1,700 a 2,000 toneladas, feitos de madeiras filipinas, podendo transportar mil passageiros. O Concepción, naufragado em 1638, tinha 43 a 49 m de comprimento, e 2,000 toneladas. O Santísima Trinidad tinha 51.5 m.\n[…]\nA viagem pelo Pacífico durava quatro meses, e os galeões de Manila eram o principal contacto entre Manila e o México, e portanto a Espanha. Mesmo após a independência o México manteria relações culturais e comerciais com as Filipinas.\n[…]\nMartín-Ramos, Clara. Las Huellas de la Nao de la China en México (La Herencia del Galeón de Manila). 2007.\n[…]\n«Metropolitan Museum: Manila Galleon». : illus. Spanish American arts influenced by the wares of China\n[…]\n«Manila Galleons along the Californian coasts»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Companhia Holandesa das Índias Orientais",
      "descricao": "Companhia comercial neerlandesa fundada em 1602, que dominou o comércio de especiarias na Ásia nos séculos dezessete e dezoito."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na Ásia, a Companhia Holandesa das Índias Orientais tinha sua sede na cidade de Batávia. Que capital ocupa hoje esse lugar?",
    "resposta": "Jacarta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Batavia,_Dutch_East_Indies",
      "https://en.wikipedia.org/wiki/Dutch_East_India_Company"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Batavia,_Dutch_East_Indies",
        "situacao": "ok",
        "texto": "Batavia was an imperial Dutch port city that eventually, after two centuries of Dutch occupation, became the capital of the Dutch East Indies. The area corresponds to modern Jakarta, Indonesia. Batavia can refer to the city proper or its suburbs and hinterland, the Ommelanden, which included the much larger area of the Residency of Batavia in the modern Indonesian provinces of Jakarta Banten and W\n[…]\nThe founding of Batavia by the Dutch in 1619, on the site of the ruins of Jayakarta, led to the establishment of a Dutch colony; Batavia became the center of the Dutch East India Company's trading network in Asia. Monopolies on local produce were augmented by non-indigenous cash crops. To safeguard their commercial interests, the company and the colonial administration absorbed surrounding territory.\n[…]\nAfter the VOC went bankrupt and was dissolved in 1800, the Batavian Republic nationalized its debts and possessions and expanded its territorial claims into a colony known as the Dutch East Indies. Batavia evolved from a regional company headquarters into the colony's capital.\n[…]\nThe 1870 abolition of the Cultivation System led to the rapid development of private enterprise in the Dutch East Indies. A number of trading companies and financial institutions were established on Java, particularly in Batavia. The Old Town's deteriorating structures were replaced with offices, usually along the Ciliwung River. Private companies owned (or managed) plantations, oil fields, and mines.\n[…]\nSchools, hospitals, factories, offices, trading companies, and post offices were established throughout the city. Improvements in Batavia's transportation, health, and technology encouraged more Dutch people to move to the capital, and Batavian society became increasingly Dutch. The city traded with Europe, and increased shipping led to the construction of a new harbor at Tanjung Priok between 1877 and 1883."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dutch_East_India_Company",
        "situacao": "ok",
        "texto": "The United East India Company (Dutch: Vereenigde Oostindische Compagnie [vərˈeːnɪɣdə oːstˈɪndisə kɔmpɑˈɲi]; abbr. VOC [veː(j)oːˈseː]), commonly known as the Dutch East India Company, was a chartered trading company and one of the first joint-stock companies in the world. Established on 20 March 1602 by the States General of the Netherlands amalgamating existing companies, it was granted a 21-year \n[…]\nIn Dutch, the name of the company was the Vereenigde Nederlandsche Geoctroyeerde Oostindische Compagnie, abbreviated as the VOC, literally the 'United Dutch Chartered East India Company' (the United East India Company). The company's monogram logo consisted of a large capital 'V' with an O on the left and a C on the right half and was possibly the first globally recognised corporate logo. It appeared on corporate items, such as flags, cannons, and coins.\n[…]\nThe company's alternative names that have been used include the 'Dutch East Indies Company', 'United East India Company', 'Jan Company', or 'Jan Compagnie'.\n[…]\nThe six chambers raised the start-up capital of the Dutch East India Company:\n[…]\nBatavia, corresponding to present day Jakarta, was the headquarters of the Dutch East India Company, and had a strict social hierarchy in the colony. According to Marsely L. Kahoe in The Journal of Historians of Netherlandish Art, \"it is misleading to understand Batavia, as some scholars have, as representing a pragmatic and egalitarian order that was later corrupted by the colonial situation.\n[…]\nIn fact, the social stratification and segregation of Batavia derived in certain ways directly from its Dutch plan.\"\n[…]\n10649 VOC, a minor planet, the asteroid VOC (Dutch: Vereeniging van de Oostindische Compagnie, lit. 'East India Company'), the 10649th asteroid registered, a main-belt asteroid\n[…]\n(in Dutch) Database of VOC crew members Archived 22 March 2016 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batavia",
        "situacao": "desambiguacao",
        "texto": "Batávia ou Batavia pode referir-se a:\n\n\n== História ==\nBatávia (região) — região histórica dos Países Baixos\nBatavos — povo germânico da Antiguidade que vivia na região de Batávia\nNimega — cidade dos Países Baixos chamada Ópido dos Batavos pelos romanos\nPassau — cidade alemã da Baviera chamada Batávia pelos romanos\nRepública Batava — ou Batávia; Estado neerlandês que existiu entre 1795 e 1806\nBatá",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Luís XVI",
      "descricao": "Último rei da França antes da queda da monarquia na Revolução Francesa, casado com Maria Antonieta."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano o rei Luís Dezesseis foi guilhotinado numa praça de Paris?",
    "resposta": "1793",
    "distratores": [
      "1789",
      "1791",
      "1795"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Execution_of_Louis_XVI"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Execution_of_Louis_XVI",
        "situacao": "ok",
        "texto": "Louis XVI, the deposed king of France, was publicly executed on 21 January 1793 during the French Revolution at the Place de la Révolution in Paris. At his trial four days prior, the National Convention had convicted Louis of high treason in a near-unanimous vote; while no one voted \"not guilty\", several deputies abstained. Ultimately, they condemned him to death by a simple majority of one vote.\n[…]\nSanson responded to reports that Louis XVI had resisted the execution by publishing his own account in a letter dated 20 February 1793. Historian Reising argues that the letter reflects more than a factual account of the execution. She interprets Sanson's emphasis on Louis XVI's composure, innocence and religious conviction and relates them to the influence of Cesare Beccaria's ideas on justice and punishment. In the autograph letter Sanson wrote:\n[…]\nIn his letter, published in full in the Thermomètre du Jour of Thursday, 21 February 1793, Sanson emphasises that the King \"bore all this with a composure and a firmness which has surprised us all. I remained strongly convinced that he derived this firmness from the principles of the religion by which he seemed penetrated and persuaded as no other man.\"\n[…]\nSpeaking to Victor Hugo in 1840, a man called Leboucher, who had arrived in Paris from Bourges in December 1792 and was present at the execution of Louis XVI, recalled vividly:\n[…]\nIn Le nouveau Paris, Mercier describes the execution of Louis XVI in these words:\n[…]\nThe area where Louis XVI and later (16 October 1793) Marie Antoinette were buried, in the cemetery of the Church of the Madeleine, is today the \"Square Louis XVI\" greenspace, containing the classically self-effacing Expiatory Chapel completed in 1826 during the reign of Louis's youngest brother Charles X. The crypt altar stands above the exact spot where the remains of the royal couple were originally laid to rest."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Execu%C3%A7%C3%A3o_de_Lu%C3%ADs_XVI",
        "situacao": "ok",
        "texto": "A Execução de Luís XVI na guilhotina é um dos acontecimentos mais importantes da Revolução Francesa. A execução ocorreu em 21 de janeiro de 1793, às 10h20m, em Paris, na Praça da Revolução (a antiga Praça Luís XV, renomeada, em 1795, como Praça da Concórdia).\n[…]\nNa sequência dos acontecimentos da Jornada de 10 de Agosto de 1792 e do ataque ao Palácio das Tulherias, residência da família real, pelo povo parisiense, Luís XVI é preso na Prisão do Templo com a sua família, por alta traição. Ao final de seu processo, Luís XVI é condenado à morte por conta da maioria (apenas um voto de diferença), em 15 de Janeiro de 1793.\n[…]\nSanson, o carrasco do rei, reage à versão do jornal \"Thermomètre du Jour\", dando o seu próprio testemunho sobre a execução, em carta datada de 20 de fevereiro de 1793ː\n[…]\nChegado ao pé da guilhotina, Luís XVI considerou um instante os instrumentos de seu suplício e perguntou a Sanson se os tambores cessariam de bater. Ele se aproximou para falar. Foi dito aos carrascos que fizessem seu dever. Enquanto lhe colocavam as cilhas, ele gritou : \"Povo, eu morro inocente!\". De seguida, virando-se para os carrascos, Luís XVI declara: \"Senhores, sou inocente de tudo o que me inculpam. Espero que meu sangue possa cimentar a felicidade dos Franceses\". O cutelo caiu.\n[…]\nO lugar onde foi inumado Luís XVI e, mais tarde, Maria Antonieta (16 de outubro de 1793) no cemitério da Madeleine é hoje o \"Square Louis XVI\". O altar da cripta marca o local exato onde Luís XVI foi inumado.\n[…]\nPaul e Pierrette Girault de Coursac escreveram um conjunto de obras sobre Luís XVI, entre eles:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.73 — 2026-10-19**
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
- no máximo **2 perguntas por âncora** em cada lote, nunca com o mesmo ângulo;
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro;
- no máximo **3 perguntas por âncora** no banco inteiro, somando texto e figura, e no máximo **2 com figura**. As exclusivas de uma coleção têm conta à parte (§6, "Coleções");
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
- **Resposta que é um ano ou uma data: sempre `multipla`.** Quando a resposta é um ano específico ("1969") ou uma data mais detalhada ("15 de novembro de 1889", "2 de fevereiro"), a pergunta é obrigatoriamente de múltipla escolha, com ou sem figura. Os distratores são anos (ou datas) próximos e críveis, no mesmo formato da resposta, nenhum deles também correto. A regra vale só quando **a resposta é o próprio ano ou a data**: século e década ("século dezenove", "década de 1970") e respostas em que o ano identifica outra coisa, como uma edição de Olimpíada ou de Copa ("Londres 2012", "1970, no México"), podem continuar abertas.

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

### Coleções

Uma **coleção** é um conjunto de perguntas sobre um mesmo universo, com um modo de jogo próprio (decidido em 2026-10-13). Cada coleção tem um documento próprio com as diretrizes dela; a única até agora é a de **pokémon**, do modo Pokémon, em [`modo_pokemon.md`](modo_pokemon.md).

- A pergunta da coleção tem o campo `colecao`. O modo da coleção sorteia só as perguntas dela, de qualquer tema.
- **Exclusiva** (campo `exclusiva`): a pergunta sai **só no modo da coleção**, nunca no jogo original (Master, Trilha da Vida, Linear).
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
- **Saturação:** o áudio conta no limite de 3 perguntas por âncora, e cada âncora tem no máximo 1 pergunta com áudio.
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
- No máximo **2 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras novas.** O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para não repetir.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
