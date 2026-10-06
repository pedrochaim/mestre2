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
      "nome": "Rio Mekong",
      "descricao": "Grande rio do Sudeste Asiático que nasce no planalto do Tibete e deságua no mar da China Meridional."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Depois de nascer no Tibete e passar por Laos e Camboja, o rio Mekong forma seu grande delta em qual país?",
    "resposta": "Vietnã",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mekong",
      "https://en.wikipedia.org/wiki/Mekong_Delta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mekong",
        "situacao": "ok",
        "texto": "The Mekong or Mekong River (UK:  mee-KONG, US:  may-KAWNG) is a transboundary river in East Asia and Southeast Asia. It is the world's twelfth-longest river and the third-longest in Asia with an estimated length of 4,909 km (3,050 mi) and a drainage area of 795,000 km2 (307,000 sq mi), discharging 475 km3 (114 cu mi) of water annually.\n[…]\nThe endangered Siamese crocodile (Crocodylus siamensis) occurs in small isolated pockets within the northern Cambodian and Laotian portions of the Mekong River. The saltwater crocodile (Crocodylus porosus) once ranged from the Mekong Delta up the river into Tonle Sap and beyond but is now extinct in the river, along with being extinct in all of Vietnam and possibly even Cambodia.\n[…]\nThe low tide level of the river in Cambodia is lower than the high tide level out at sea, and the flow of the Mekong inverts with the tides throughout its stretch in Vietnam and up to Phnom Penh. The very flat Mekong delta area in Vietnam is thus prone to flooding, especially in the provinces of An Giang and Dong Thap (Đồng Tháp), near the Cambodian border.\n[…]\nThailand will be impacted, as its fish stocks in the Mekong will decline by 55%, Laos will be reduced by 50%, Cambodia by 35%, and Vietnam by 30%.\n[…]\nNew Agreement on Waterway Transportation between Vietnam and Cambodia, signed in Phnom Penh, 17 December 2009.\n[…]\nSand mining of the Mekong River in the countries Laos, Cambodia and Vietnam has led to various environmental impacts on both areas local and downstream to these operations due to the disturbance of the river's natural flow. These impacts include river embankment instability, reduced supply of vital floodwater and sediments to floodplains, increased salinity levels and both the disturbance and displacement of various species.\n[…]\nThe WISDOM Project, a Water related Information System for the Mekong Delta"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mekong_Delta",
        "situacao": "ok",
        "texto": "The Mekong Delta, also known as the South-western Region (Vietnamese: Tây Nam Bộ) or the Western Region (Vietnamese: Miền Tây), is the region in southwestern Vietnam where the Mekong River approaches and empties into the sea through a network of distributaries. The Mekong delta region encompasses a large portion of south-western Vietnam, of an area of over 40,500 km2 (15,600 sq mi). The size of th\n[…]\nThe Vietnamese acquisition of the Mekong Delta can be divided into two phases:\n[…]\nThe Mekong Delta is not strongly industrialized, but is still the third out of seven regions in terms of industrial gross output. The region's industry accounts for 10% of Vietnam's total as of 2011. Almost half of the region's industrial production is concentrated in Cần Thơ, Long An province and Cà Mau province. Cần Thơ is the economic center of the region and more industrialized than the other provinces.\n[…]\nThe region is home to cải lương, a form of Kinh/Vietnamese folk opera. Cai Luong Singing appeared in Mekong Delta in the early 20th century. Cai Luong Singing is often performed to the accompaniment of guitar and zither. Cai Luong is a kind of play telling a story. This often includes two main parts: the dialogue part and the singing part to express their thoughts and emotions.\n[…]\nSome Vietnamese films on the topic of life in the Mekong Delta attract the attention of a large audience: Tình Mẫu Tử (Mother and child love, 2019), Phận làm dâu (Bride's fate, 2018), etc.\n[…]\nGebhardt, S., J. Huth, N. Lam Dao, A. Roth and C. Kuenzer (2012): A comparison of TerraSAR-X Quadpol backscattering with RapidEye multispectral vegetation indices over rice fields in the Mekong Delta, Vietnam. In: International Journal of Remote Sensing 33 (24), pp. 7644–7661.\n[…]\nFruits found at Mekong Delta\n[…]\nRelease of arsenic to deep groundwater in the Mekong Delta, Vietnam, linked to pumping-induced land subsidence."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Mecom",
        "situacao": "ok",
        "texto": "Mecom ou Mecão (Mekong) é um dos maiores rios do mundo e está localizado no Sudeste da Ásia.\n[…]\nCom um comprimento variável entre 4 350 e 4 990 km, é o 13.° mais longo e 10.° mais volumoso (descarrega 475 km³ de água anualmente) rio do mundo, drenando uma área de 795 000 km². Nasce no Planalto do Tibete e depois percorre a província chinesa de Iunã, além de Mianmar, Tailândia, Laos, Camboja e Vietname.\n[…]\nNo Mecom superior, ao longo da porção nordeste, na fronteira com o Laos, o rio é relativamente limpo e possui uma fluidez considerável. A água tende a ser neutra com um pH variando de 6,9 a 8,2 e o nível de nutrientes é baixo. Na parte baixa do Mecom, a água é turva, especialmente durante a época de chuvas. Devido a erosão dos barrancos ao longo da margem, a água passa a ter uma coloração amarelada, cor de terra. A temperatura do rio varia de 21,1 a 27,8 °C e o pH entre 6,2 e 6,5.\n[…]\nNesse rio, à altura da Tailândia com o Laos ocorre um fenômeno em que esferas flamejantes saem dele e ascendem ao céu. Esse evento é associado à serpente mitológica Naga. Os cientistas tailandeses não chegaram a uma explicação plausível sobre as bolas de fogo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Rio Capibaribe",
      "descricao": "Rio de Pernambuco que atravessa a cidade do Recife até o oceano Atlântico."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Chamada de Veneza brasileira, que capital nordestina é cortada pelos rios Capibaribe e Beberibe?",
    "resposta": "Recife",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_Capibaribe",
      "https://pt.wikipedia.org/wiki/Recife"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Capibaribe",
        "situacao": "ok",
        "texto": "O rio Capibaribe é um curso d'água que banha o estado brasileiro de Pernambuco. Seu curso é dividido em alto e médio cursos, situados no Polígono das Secas, onde o rio apresenta regime temporário, e o baixo curso, onde se torna perene, a partir do município de Limoeiro, no agreste do estado. Antes de desaguar no Oceano Atlântico, ele serpenteia a Região Metropolitana de Recife passando em seu curs\n[…]\nÉ a ele que é dada voz no poema \"O Rio\", de João Cabral de Melo Neto. Sua família viveu por anos próximo às margens do Capibaribe, onde o poeta costumava brincar.\n[…]\nCapibaribe é um termo proveniente do tupi antigo e significa \"no rio das capivaras\", pela composição dos termos kapibara, \"capivara\", 'y, \"rio, e pe, \"em\".\n[…]\nO rio Capibaribe foi um fator geográfico determinante na história de Pernambuco e do Nordeste brasileiro, pois foi na sua várzea que se formaram os primeiros engenhos de cana-de-açúcar, em virtude de seu solo de massapê, próprio para o cultivo.\n[…]\nO Capibaribe nasce na serra de Jacarará, no município de Poção, tem 248 quilômetros de extensão e sua bacia detém aproximadamente 7.454,88 quilômetros quadrados. O Capibaribe tem cerca de 74 afluentes e banha 42 municípios pernambucanos, entre eles Caruaru, Toritama, Santa Cruz do Capibaribe, Surubim, Cumaru, Salgadinho, Limoeiro, Carpina, Paudalho, São Lourenço da Mata e Recife. Próximo à foz, divide a área central da cidade do Recife.\n[…]\nPor fim, faz confluência com o rio Beberibe atrás do Palácio do Campo das Princesas antes de desaguar no oceano Atlântico. Seu braço sul passa pelos bairros de Afogados, ilha do Retiro, rumo à ilha Joana Bezerra, juntando-se ao rio Tejipió e chegando à foz no porto do Recife.\n[…]\nO Capibaribe também dá nome ao Clube Náutico Capibaribe, que nasceu em 1901 às suas margens como um clube de remo. Ao longo do tempo, o adjetivo \"náutico\" prevaleceu como nome principal do clube."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Recife",
        "situacao": "ok",
        "texto": "Recife é a capital do estado brasileiro de Pernambuco, na Região Nordeste do país. Com área territorial de aproximadamente 218 km², é formado por uma planície aluvial, tendo as ilhas, penínsulas e manguezais como suas principais características geográficas.\n[…]\nO Recife é conhecido como \"Veneza Brasileira\" graças à semelhança fluvial de sua área mais central com a cidade europeia de Veneza. Cercado por rios e cortado por pontes, é cheio de ilhas e mangues. Na cidade acontece o encontro dos rios Beberibe e Capibaribe que deságuam no Oceano Atlântico. O município conta com dezenas de pontes, entre elas a mais antiga da América Latina, a Ponte Maurício de Nassau.\n[…]\nO RioMar Shopping, localizado na Zona Sul do Recife, é o maior centro de compras do Norte-Nordeste e o terceiro maior do Brasil. Pertence ao Grupo JCPM, conglomerado sediado no Recife, que é proprietário, dentre outros centros comerciais, do Shopping Recife (também localizado na capital pernambucana e sétimo maior do Brasil).\n[…]\nO Recife é conhecido como a \"Capital Brasileira dos Naufrágios\", e atrai mergulhadores de todo o mundo por sua rica vida marinha e suas águas calmas e cristalinas com temperaturas próximas dos 30 graus.\n[…]\nA capital pernambucana é também conhecida como a \"Capital das Assombrações\", e possui um roteiro turístico chamado \"Recife Mal Assombrado\", no qual se visita monumentos como a Cruz do Patrão, que, segundo a tradição, é o local mais mal-assombrado do Recife. Outro dentre os muitos roteiros turísticos da cidade é o \"Passeio de Catamarã pelo Rio Capibaribe\", no qual se pode visualizar pontos de interesse como o Parque das Esculturas Francisco Brennand, pontes e edifícios históricos do Recife.\n[…]\nBairros do Recife\n[…]\nPernambucanos naturais do Recife\n[…]\nRecife no TripAdvisor"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Lago Guaíba",
      "descricao": "Corpo d'água do Rio Grande do Sul, formado pelo encontro de vários rios, que deságua na Lagoa dos Patos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Famoso pelo pôr do sol, o Guaíba banha qual capital brasileira?",
    "resposta": "Porto Alegre",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lago_Gua%C3%ADba",
      "https://pt.wikipedia.org/wiki/Porto_Alegre"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lago_Gua%C3%ADba",
        "situacao": "ok",
        "texto": "O Guaíba é um corpo hídrico, classificado tanto como lago quanto rio, localizado entre o Delta do Jacuí e a Laguna dos Patos, no estado do Rio Grande do Sul, Brasil.\n[…]\nFica na região metropolitana de Porto Alegre, banhando a capital estadual, Porto Alegre, bem como as cidades de Eldorado do Sul, Guaíba, Barra do Ribeiro e Viamão.\n[…]\nO Guaíba possui área de 496 km², comprimento máximo de 50 km (entre o Delta do Jacuí e o exutório para Laguna dos Patos) e largura variável, entre 900 m (na altura do Gasômetro) e 19 km (ao sul do lago). Banha os municípios de Porto Alegre, Eldorado do Sul, Guaíba, Barra do Ribeiro e Viamão.\n[…]\nPraia de Ipanema (Porto Alegre)\n[…]\nPraia das Pombas (Porto Alegre)\n[…]\nPraia de Belém Novo (Porto Alegre)\n[…]\nPraia do Lami (Porto Alegre)\n[…]\nO Guaíba enfrentou duas grandes cheias em sua história. A enchente de 1941, que deixou diversas ruas do Centro Histórico de Porto Alegre debaixo d'água por dias, foi superada em 2024 por uma grande enchente, advinda de intensas chuvas nos vales do Taquari e Caí cujas águas desembocaram no Guaíba dias depois. A enchente de 2024 fez o Guaíba atingir a marca catastrófica de 5,37 metros, o que deixou diversos bairros da cidade completamente inundados.\n[…]\nQuase a totalidade das casas de bombas de esgoto pluvial na cidade foram desligadas preventivamente, para que as águas não invadissem seus motores. Regiões inteiras tiveram de ser evacuadas, como a parte baixa do Centro Histórico e os bairros Farrapos, Humaitá e Sarandi. Pontos importantes de Porto Alegre sofreram inundação, como o Aeroporto Salgado Filho, a Estação Rodoviária e ambos os estádios dos grandes clubes da Capital, a Arena do Grêmio e o Beira-Rio."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Porto_Alegre",
        "situacao": "ok",
        "texto": "Porto Alegre ([ˈpoʁtu aˈlɛɡɾi] ()) é a capital do estado brasileiro do Rio Grande do Sul. Com uma área de quase 500 km², encontra-se sobre um terreno diversificado, com morros, baixadas e um grande lago: o Guaíba. Está a 2 027 km da capital nacional, Brasília.\n[…]\nEm dados da ANATEL, em julho de 2010 Porto Alegre possuía 393 607 telefones fixos (referentes apenas às concessionárias do STFC) e, em 2008, um índice por área de DDD (051) de 90,34 aparelhos celulares a cada 100 habitantes. Há fácil acesso à internet na cidade, e como disse André Kulczynski, diretor da Procempa, pode ser considerada, entre as capitais brasileiras, privilegiada nesse aspecto.\n[…]\nEntre 2021 e 2022 a violência policial aumentou 41%, em 2023 Porto Alegre foi avaliada pelo Anuário Brasileiro de Segurança Pública como a capital mais violenta das regiões Sul, Sudeste e Centro-Oeste, em 2024 foram registrados 7.714 casos de violência contra a mulher, a população negra continua sendo proporcionalmente mais afetada pela violência do que a branca, e permanece uma alta porcentagem de homicídios de adolescentes e jovens, havendo também uma relação direta entre mortalidade juvenil e desigualdade social, sendo em sua maioria jovens do sexo masculino, negros e moradores de territórios com acesso precário às políticas públicas.\n[…]\nHá importante movimentação também na literatura e teatro da capital. Seguindo uma tradição consolidada entre outros pelos falecidos Mario Quintana e Érico Veríssimo, que tornaram Porto Alegre uma referência como centro produtor e até a tomaram como sujeito de suas obras, vários outros escritores ganharam renome na cidade, como Luís Fernando Veríssimo, Lya Luft, João Gilberto Noll, Moacyr Scliar e Luiz Antonio de Assis Brasil.\n[…]\n«Porto Alegre na WikiMapia»"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Voo US Airways 1549",
      "descricao": "Voo comercial que, em janeiro de 2009, fez um pouso de emergência na água em Nova York após perder os dois motores, sem nenhuma morte."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2009, o comandante Sully pousou um avião de passageiros sem motores num rio de Nova York, sem nenhuma morte. Que rio era esse?",
    "resposta": "Rio Hudson",
    "fonte": [
      "https://en.wikipedia.org/wiki/US_Airways_Flight_1549"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/US_Airways_Flight_1549",
        "situacao": "ok",
        "texto": "US Airways Flight 1549 was a regularly scheduled US Airways domestic flight from New York City's LaGuardia Airport to Charlotte and Seattle, that ditched onto the Hudson River shortly after takeoff on January 15, 2009, due to a double engine failure caused by a bird strike. The Airbus A320 operating the flight, registered N106US, struck a flock of Canada geese shortly after takeoff from LaGuardia,\n[…]\nThe then-governor of New York State, David Paterson, called the incident a \"Miracle on the Hudson\" and a National Transportation Safety Board (NTSB) official described it as \"the most successful ditching in aviation history\". Flight simulations showed that the aircraft could have returned to LaGuardia, had it turned toward the airport immediately after the bird strike.\n[…]\nOn January 15, 2009, US Airways Flight 1549 with call sign \"CACTUS 1549\" was scheduled to fly from New York City's LaGuardia Airport (LGA) to Seattle–Tacoma International Airport (SEA), with a planned intermediate stop at Charlotte Douglas International Airport (CLT) in Charlotte, North Carolina.\n[…]\nAn NTSB board member called the ditching \"the most successful ... in aviation history. These people knew what they were supposed to do and they did it and as a result, no lives were lost.\" New York State Governor David Paterson called the incident \"a Miracle on the Hudson\". U.S. President George W. Bush said he was \"inspired by the skill and heroism of the flight crew\", and praised the emergency responders and volunteers.\n[…]\nIn August 2010, aeronautical chart publisher Jeppesen issued a humorous approach plate titled \"Hudson Miracle APCH\", dedicated to the five crew of Flight 1549 and annotated \"Presented with Pride and Gratitude from your friends at Jeppesen\".\n[…]\nTACA Flight 110\n[…]\n\"Captain C.B. Sully Sullenberger Flight 1549 live ATC communication . Hudson River force water landing after losing both engines\". Facebook."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voo_US_Airways_1549",
        "situacao": "ok",
        "texto": "O Voo US Airways 1549 foi um voo comercial de passageiros rotineiro, que iria de Nova Iorque para Charlotte, Carolina do Norte, que, em 15 de janeiro de 2009, pousou na água do rio Hudson, adjacente a Manhattan, seis minutos após decolar do Aeroporto LaGuardia.\n[…]\nEnquanto ganhava altitude, o Airbus A320 atingiu um grupo de gansos-do-canadá, que resultou numa imediata perda de potência de ambos os motores. Quando a tripulação determinou que a aeronave não poderia alcançar de sua posição, logo a nordeste da ponte George Washington, nenhum campo de pouso, decidiram guiar a aeronave para sul e estabeleceu seu curso para o rio Hudson, e então pousou o avião virtualmente intacto perto do Intrepid Sea-Air-Space Museum, no centro de Manhattan.\n[…]\nTendo duas vezes checado toda a cabine para verificar se havia algum passageiro remanescente para confirmar a total evacuação da aeronave, o comandante Sully foi a última pessoa a deixar a aeronave.\n[…]\nEm 19 de fevereiro de 2009, o Channel 4 (Reino Unido) exibiu um documentário intitulado The Miracle of the Hudson Plane Crash (O Milagre da Queda do Avião no Hudson), que incluiu a primeira testemunha do acidente, além de relatos de outras testemunhas, incluindo passageiros e pessoas que participaram diretamente do resgate.\n[…]\nEm 4 de março de 2009, o Discovery Channel exibiu um documentário intitulado Hudson Plane Crash - What Really Happened (Acidente de Avião no Hudson - O que Aconteceu realmente) pela primeira vez. O documentário de TV de uma hora examinou as circunstâncias que rodeavam o acidente e o resgate; o filme destacou animações geradas por computador e novas entrevistas com os passageiros, a tripulação, testemunhas, pessoas diretamente envolvidas no resgate e especialistas em segurança na aviação.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Delta do Okavango",
      "descricao": "Grande delta interior do rio Okavango, que se espalha e evapora no deserto do Kalahari, no sul da África."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O delta do rio Okavango nunca chega ao mar: suas águas se espalham e evaporam no deserto do Kalahari. Em que país fica esse delta?",
    "resposta": "Botsuana",
    "distratores": [
      "Namíbia",
      "Zâmbia",
      "Angola"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Okavango_Delta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Okavango_Delta",
        "situacao": "ok",
        "texto": "The Okavango Delta or Okavango Grassland is a vast inland delta in Botswana formed where the Okavango River reaches a tectonic trough at an elevation of 930–1,000 m (3,050–3,280 ft) in the central part of the endorheic basin of the Kalahari Desert.\n[…]\nThe inflow channels of the Okavango Delta originate primarily from the Okavango River, which is formed by the confluence of the Cubango and Cuito rivers in Angola before flowing through Namibia into Botswana. Upon entering the delta near Mohembo, the river divides into an intricate network of distributary channels, floodplains, lagoons, and permanent swamps that sustain one of the world's largest inland deltas.\n[…]\nThe Okavango catchment is projected to experience decreasing annual rainfall as well as increasing temperatures as a result of global warming. The effects of global warming are likely to result in reductions in the extent of floodplains in the Okavango Delta, which will have significant impacts on water availability as well as livestock rearing and agricultural activities in the region.\n[…]\nConservation work by Conservation International Botswana in the Okavango Delta region has included education and policy engagement as well as research and monitoring such as aerial wildlife surveys and rapid biological appraisal work.\n[…]\nKalahari Basin\n[…]\nBock, J. (2002). \"Learning, Life History, and Productivity: Children's lives in the Okavango Delta of Botswana\". Human Nature. 13 (2): 161–198. doi:10.1007/s12110-002-1007-4. PMID 26192757. S2CID 28985956.\n[…]\nOkavango Delta concession areas\n[…]\nOfficial Botswana Government site on Moremi Game Reserve, inside the Okavango Delta\n[…]\nDiscovery Channel - Kalahari Flood\n[…]\nFlood-recession cropping in the molapos of the Okavango Delta\n[…]\nOkavango Research Institute"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Delta_do_Cubango",
        "situacao": "ok",
        "texto": "O Delta do Cubango, também chamado de Delta do Okavango, é o maior delta interior do mundo, formado onde o rio Cubango encontra uma placa tectônica, no deserto do Calaári, em território da Botsuana. Toda a água que atinge o delta é evaporada e transpira, e não chega a nenhum mar ou oceano. A cada ano aproximadamente 11 quilômetros cúbicos de água passam nessa região. Parte do rio chega ao lago Nga\n[…]\nO Delta do Cubango é produzido por inundações sazonais. O rio Cubango drena a chuva de verão (janeiro-fevereiro) dos planaltos de Angola. A água se espalha por uma área de 250km x 150km no delta por cerca de quatro meses (março-junho). A alta temperatura do delta causa rápida evaporação e transpiração, resultando um ciclo de aumento e queda do nível de água que não era completamente entendido até o começo do século XX.\n[…]\nA inundação atinge seu pico entre junho e agosto, durante os meses de inverno seco de Botsuana, quando o delta aumenta três vezes em seu tamanho permanente, atraindo animais localizados a quilômetros dali e criando uma das maiores concentrações de vida selvagem da África.\n[…]\nO Delta do Cubango é a morada permanente e sazonal de uma grande variedade de animais, muito populares como atração turística.\n[…]\nAs plantas do delta têm um papel importante para a coesão da areia. Os bancos de areia de um rio normalmente têm um conteúdo alto de lama e esta combinação com a areia leva a construção dos bancos de areia. No delta, devido às águas límpidas do rio Cubango, não há lama e o rio é formado totalmente por areia. As plantas capturam a areia, que age como uma cola, criando ilhas, onde mais plantas podem se criar raízes.\n[…]\nJ. Bock. 2002. Learning, Life History, and Productivity: Children’s lives in the Okavango Delta of Botswana. Human Nature 13(2). 161-198. online\n[…]\nCecil Keen. 1997. Okavango Delta\n[…]\nWildlife in Okavango Delta\n[…]\nOkavango Research Institute",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Barragem das Três Gargantas",
      "descricao": "Grande usina hidrelétrica da província de Hubei, na China, concluída no início do século vinte e um."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A gigantesca hidrelétrica das Três Gargantas, na China, foi construída em qual rio?",
    "resposta": "Rio Yangtzé",
    "fonte": [
      "https://en.wikipedia.org/wiki/Three_Gorges_Dam"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Three_Gorges_Dam",
        "situacao": "ok",
        "texto": "The Three Gorges Dam, officially known as Yangtze River Three Gorges Water Conservancy Project is a hydroelectric gravity dam that spans the Yangtze River near Sandouping in Yiling District, Yichang, Hubei province, central China, downstream of the Three Gorges. It is also the world's largest power station by installed capacity (22,500 MW); it generates 95±20 TWh of electricity per year on average\n[…]\nPower generation is managed by China Yangtze Power, a listed subsidiary of China Three Gorges Corporation (CTGC), a Central Enterprise administered by SASAC. The Three Gorges Dam is the world's largest capacity hydroelectric power station, with 34 generators: 32 main generators, each with a capacity of 700 MW, and two plant power generators, each with capacity of 50 MW, for a total of 22,500 MW.\n[…]\nThis accelerated after the 1998 Yangtze River floods convinced the government that it should restore tree cover, especially in the Yangtze's basin upstream of the Three Gorges Dam.\n[…]\nThis is particularly detrimental to the region's ecosystem because the Yangtze River basin is home to 361 different fish species and accounts for 27% of China's endangered freshwater fish species. Other aquatic species have been endangered by the dam, particularly the baiji, or Chinese river dolphin, now extinct. In fact, Chinese Government scholars even claim that the Three Gorges Dam directly caused the extinction of the baiji.\n[…]\nDuring the South China floods in July 2010, inflows at the Three Gorges Dam reached a peak of 70,000 m3/s (2.5 million cu ft/s), exceeding the peak inflow during the 1998 Yangtze River floods. The dam's reservoir rose nearly 3 m (9.8 ft) in 24 hours and reduced the outflow to 40,000 m3/s (1.4 million cu ft/s) in discharges downstream, preventing any significant impact on the middle and lower river.\n[…]\nList of power stations in China\n[…]\nList of dams and reservoirs in China\n[…]\nThree Gorges Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hidrel%C3%A9trica_das_Tr%C3%AAs_Gargantas",
        "situacao": "ok",
        "texto": "A Barragem das Três Gargantas é uma barragem hidrelétrica de gravidade que atravessa o rio Yangtze pela cidade de Sandouping, na prefeitura de Yichang, província de Hubei, China. Três Gargantas é a maior usina do mundo em termos de capacidade instalada (22.500 MW) desde 2012.\n[…]\nAlém de produzir eletricidade, a barragem visa aumentar a capacidade de transporte do rio Yangtze e reduzir o potencial de inundações. A China considera o projeto monumental como bem-sucedido social e economicamente, com o design de grandes turbinas de última geração e um movimento para limitar as emissões de gases de efeito estufa.\n[…]\nA grande barragem sobre o rio Yangtzé foi originalmente concebida por Sun Yat-sen em O Desenvolvimento Internacional da China, em 1919. Ele afirmou que uma represa capaz de gerar 30 milhões de cavalos-vapor (22 GW) era possível a jusante das Três Gargantas (região ao longo do rio Yangtzé).\n[…]\nA construção da Usina de Três Gargantas foi iniciada em 3 de dezembro de 1992, e esteve envolta em polêmica pelo seu imenso impacto ambiental. Até fins de 2004, quatro turbinas entraram em funcionamento. Em 2009, com 26 turbinas instaladas, a capacidade concebida da barragem deverá ser de 18 200 megawatts, ultrapassando a potência de Itaipu, até então a maior usina hidrelétrica em potência instalada no mundo.\n[…]\nInterativo: China’s three gorges dam („The Guardian“, 16 de Junho 2006 em inglês – Fash-show para a conclusão)\n[…]\nChina Yangtze Projeto Três Gargantas (TGP), Site oficial\n[…]\n3 Gargantas Projeto Rio Yangtze, especificações técnicas e desenhos na talsperrenkomitee.de, 2002 (alemão)\n[…]\nJ. Akkermann/Th. Runte/D. Krebs · Ship lift at Three Gorges Dam, China – design of steel structures Ênfase de: Steel Construction 2 (2009), No. 2, recuperado 30 de Março 2010",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Ponte Vecchio",
      "descricao": "Ponte medieval de Florença, na Itália, coberta de lojas, sobretudo joalherias."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Florença, a medieval Ponte Vecchio, tomada por lojas de joias, atravessa qual rio?",
    "resposta": "Rio Arno",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ponte_Vecchio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ponte_Vecchio",
        "situacao": "ok",
        "texto": "The Ponte Vecchio (Italian pronunciation: [ˈponte ˈvɛkkjo]; \"Old Bridge\") is a medieval stone closed-spandrel segmental arch bridge over the Arno, in Florence, Italy. The only bridge in Florence spared from destruction during World War II, it is noted for the shops built along it; building shops on such bridges was once a common practice. Butchers, tanners, and farmers initially occupied the shops\n[…]\nThis location marks one of the earliest crossings of the Arno in Florence, possibly originating from Roman times or even before. Although floods have repeatedly damaged it, the current bridge has stood since approximately 1339-1345. For many years, the only older bridge in the city was the Rubaconte bridge, built nearly a century earlier.\n[…]\nDuring World War II, the Ponte Vecchio was not destroyed by the German army during their retreat at the advance of the British 8th Army on 4 August 1944, unlike all the other bridges in Florence. This was, according to many locals and tour guides, because of an express order by Hitler. German authorities decided to mine all the bridges except for Ponte Vecchio, which was instead surrounded by rubble, to stop crossings and gain more time to deploy the troops along the famous Gothic Line.\n[…]\nThe bridge was severely damaged in the 1966 flood of the Arno.\n[…]\nWall mural in Grossi Florentino, executed by students of Napier Waller under supervision\n[…]\nChiarugi, Andrea, Foraboschi, Paolo, \"Maintenance of the Ponte Vecchio historical bridge in Florence,\" in: Extending the Lifespan of Structures, Vol. 2,  IABSE Symposium Report, San Francisco 1995, pp. 1479–1484\n[…]\nFlanigan, Theresa (2008). \"The Ponte Vecchio and the Art of Urban Planning in Late Medieval Florence\". Gesta. 47: 1–15.\n[…]\nPonte Vecchio at Structurae\n[…]\n\"Ponte Vecchio, Florence\" on travel website Numberonestars.com (archived in 2007)\n[…]\nShort text about Ponte Vecchio on private tourist website Travel-to-Florence.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ponte_Vecchio",
        "situacao": "ok",
        "texto": "A Ponte Vecchio (Ponte Velha) é uma Ponte em arco medieval sobre o Rio Arno, em Florença, na Itália, famosa por ter uma quantidade de lojas (principalmente ourivesarias e joalharias) ao longo de todo o tabuleiro.\n[…]\nAcredita-se que tenha sido construída ainda na Roma Antiga e era feita originalmente de madeira. Foi destruída pelas cheias de 1333 e reconstruída em 1345, com projecto da autoria de Taddeo Gaddi. Consiste em três arcos, o maior deles com 30 metros de diâmetro. Desde sempre alberga lojas e mercadores, que mostravam as mercadorias sobre bancas, sempre com a autorização do Bargello, a autoridade municipal de então. Diz-se que a palavra bancarrota teve ali origem.\n[…]\nDurante a Segunda Guerra Mundial, a ponte não foi danificada pelos alemães. Acredita-se que tenha sido uma ordem direta de Hitler.\n[…]\nAo longo da ponte, há vários cadeados, especialmente no gradeamento em torno da estátua de Benvenuto Cellini. O facto é ligado à antiga ideia do amor e dos amantes: ao trancar o cadeado e lançar a chave ao rio, os amantes tornavam-se eternamente ligados. Graças a essa tradição e ao turismo desenfreado, milhares de cadeados tinham de ser removidos com frequência, estragando a estrutura da ponte.\n[…]\nDevido a isso, o município estipulou uma multa de 50 euros para quem for apanhado, em flagrante, a colocar cadeados na ponte.\n[…]\nExiste uma referência à ponte e ao Rio Arno na famosa ária O Mio Babbino Caro, da ópera Gianni Schicchi de Giacomo Puccini.\n[…]\nPonte Pulteney\n[…]\nEstudo independente da Ponte Vecchio com fotos\n[…]\nPonte Vecchio, Florença\n[…]\nVisão Geral da Ponte Vecchio\n[…]\nTour Virtual da Ponte Vecchio",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Rio Kwai",
      "descricao": "Rio do oeste da Tailândia cruzado pela Ferrovia da Morte, construída por prisioneiros dos japoneses na Segunda Guerra Mundial."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Na Segunda Guerra, prisioneiros dos japoneses construíram a ponte sobre o rio Kwai, que inspirou um filme famoso. Em que país fica esse rio?",
    "resposta": "Tailândia",
    "distratores": [
      "Mianmar",
      "Vietnã",
      "Malásia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Khwae_Yai_River",
      "https://en.wikipedia.org/wiki/Burma_Railway"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Khwae_Yai_River",
        "situacao": "ok",
        "texto": "The Khwae Yai River (Thai: แม่น้ำแควใหญ่, RTGS: Maenam Khwae Yai, IPA: [mɛ̂ːnáːm kʰwɛː jàj]), also known as the Si Sawat (แม่น้ำศรีสวัสดิ์ [mɛ̂ː náːm sǐː sa.wàt]), is a river in western Thailand. It has its source in the Tenasserim Hills and flows for about 380 kilometres (240 mi) through Sangkhla Buri, Si Sawat, and Mueang Districts of Kanchanaburi Province, where it merges with the Khwae Noi to \n[…]\nThe famous bridge of the Burma Railway crosses the river at Tha Makham Subdistrict of the Mueang District. However, this is not the same bridge as depicted in The Bridge over the River Kwai by Pierre Boulle and in its film adaptation. A bridge was built of wood approximately 100 metres (330 ft) upriver from the current bridge, during the construction of the iron and concrete bridge (which runs in a NNE-SSW direction) and also rebuilt in 1945 when the iron bridge was bombed.\n[…]\nNo remnants of the wooden bridge remain. That wooden bridge was also not the bridge depicted in the film as the river was not called the Kwai Yai at that time. A wooden trestle bridge was built over the Kwai Noi many miles upstream in the jungle and it would more closely resemble the bridge in the film. However, the film is really a fictional depiction of the events with many inaccuracies and neither bridge can really be said to be that depicted in the film.\n[…]\nUp until the 1960s, the river was considered part of the Mae Klong itself, but this part of the Mae Klong was then renamed Khwae Yai to bring geographical fact more in line with the fictional association with the name River Kwai. The main cemetery of prisoners who died during the railway's construction is nearby and is called the Kanchanaburi War Cemetery.\n[…]\nMedia related to River Kwai Bridge at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Burma_Railway",
        "situacao": "ok",
        "texto": "The Burma Railway, also known as the Siam–Burma Railway, Thai–Burma Railway and similar names, or locally as the Death Railway (Thai: ทางรถไฟสายมรณะ), is a 415 km (258 mi) railway between Ban Pong, Thailand, and Thanbyuzayat, Burma (now Myanmar). It was built from 1940 to 1943 by abducted Southeast Asian civilians and captured Allied soldiers forced to work by the Japanese, to supply troops and we\n[…]\nThe construction of the Burma Railway is considered a war crime committed by Japan.\n[…]\nA key feature of the line is Bridge 277 built over a stretch of the river then known as part of the Mae Klong River. The greater part of the Thai section of the river's route followed the valley of the Khwae Noi River (Thai: แควน้อย: khwae (แคว), 'stream, river' or 'tributary'; noi (น้อย), 'small'. Khwae was frequently mispronounced by the British as kwai (ควาย), or 'buffalo' in Thai). This gave rise to the name of \"River Kwai\" amongst the British.\n[…]\nPhilip Toosey, senior Allied officer at the Bridge on the River Kwai\n[…]\nReg Twigg (1913–2013), British author Survivor on the River Kwai: Life on the Burma Railway, Private in the Leicestershire Regiment\n[…]\nKratosk and The Thai Resistance Movement during the Second World War by Eiji Murashima provide a social and economic analysis of the railway's construction and its civilian builders. The book Through the Valley of the Kwai is an autobiography of British Army captain Ernest Gordon. James D.\n[…]\nThe construction of the railway was the subject of a fictional award-winning 1957 film, The Bridge on the River Kwai (itself an adaptation of the French language novel The Bridge over the River Kwai); a novel, The Narrow Road to the Deep North by Richard Flanagan.\n[…]\nConstruction of the Burma Railway\n[…]\nFrom Burma to the River Kwai, a film documentary made by Nick Lera in 1999 showing Burmese and Thai steam locomotives operating local services on the historic railway"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Dia do Elba",
      "descricao": "Encontro de tropas americanas e soviéticas em Torgau, na Alemanha, em 25 de abril de 1945, no fim da Segunda Guerra Mundial."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em abril de 1945, soldados americanos e soviéticos se encontraram pela primeira vez na Alemanha, às margens de qual rio?",
    "resposta": "Rio Elba",
    "fonte": [
      "https://en.wikipedia.org/wiki/Elbe_Day"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Elbe_Day",
        "situacao": "ok",
        "texto": "Elbe Day, April 25, 1945, commemorates the day Soviet and American troops first made contact near the Elbe River in Germany, including the link-up at Torgau. This contact between the Soviets, advancing from the east, and the Americans, advancing from the west, meant that the two powers had effectively cut Germany in two.\n[…]\nElbe Day has never been observed as an official holiday in any country. In the years following 1945, however, the memory of the American–Soviet link-up acquired renewed significance within the context of the emerging Cold War.\n[…]\nThe “Spirit of the Elbe” refers to the brief period of cooperation and mutual recognition between American and Soviet forces at the time of their meeting on 25 April 1945. It has been used to characterize the ability of individuals from opposing political and ideological systems to identify shared purpose in the defeat of Nazi Germany.\n[…]\nDuring the Cold War the meeting of the two armies was often recalled as a symbol of peace and friendship between the people of the two antagonistic superpowers. For example, in 1961 the popular Russian song \"Do the Russians Want War?\" evoked the memory of American and Soviet soldiers embracing at the Elbe River.\n[…]\nJoseph Polowsky, an American soldier who met Soviet troops on Elbe Day, was deeply affected by the experience and devoted much of his life to opposing war. He commemorated Elbe Day each year in his hometown of Chicago and unsuccessfully petitioned the United Nations to make April 25 a \"World Day of Peace\". His remains are buried in a cemetery in Torgau.\n[…]\nAmerican singer-songwriter Fred Small commemorated Joseph Polowsky and Elbe Day in his song \"At The Elbe\".\n[…]\n\"Remembering War\" simulcast between US and USSR / Satellite Linkup to Reunite Soviet and American WW II Vets - UCSD press release April 29, 1985"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Ilha do Bananal",
      "descricao": "Grande ilha fluvial no estado do Tocantins, cercada por braços de um rio do Centro-Oeste brasileiro."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No Tocantins, a ilha do Bananal, uma das maiores ilhas fluviais do mundo, é cercada pelos braços de qual rio?",
    "resposta": "Rio Araguaia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ilha_do_Bananal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ilha_do_Bananal",
        "situacao": "ok",
        "texto": "A Ilha do Bananal é a maior ilha genuinamente fluvial do mundo, com cerca de vinte mil quilômetros quadrados de área (1 916 225 hectares), cercada pelos rios Araguaia e Javaés. Reserva ambiental brasileira desde 1959, é considerada Reserva da Biosfera pela UNESCO desde 1993, sendo também uma das zonas úmidas de importância internacional, classificadas pela Convenção de Ramsar.\n[…]\nA ilha localiza-se no estado brasileiro do Tocantins, estando subdividida entre os municípios de Formoso do Araguaia, Lagoa da Confusão e Pium. Bananal está na divisa de Tocantins com os estados do Mato Grosso (no rio Araguaia) e de Goiás (na porção sul do rio Javaés). Na foz do rio Javaés, localizada no extremo norte da ilha, está a tríplice divisa entre os estados de Tocantins, Mato Grosso e Pará.\n[…]\nAs estradas que dão acesso ao interior da Ilha do Bananal são a rodovia BR-242 (mais conhecida neste trecho como Transbananal), a Transaraguaia (extensão não oficial da TO-255), além de uma estrada sem nome que liga a Aldeia Santa Isabel do Morro ao extremo sul da ilha, margeando o rio Araguaia e o rio Caracol.\n[…]\nDesde antes da descoberta do Brasil, Bananal é habitada por nativos. No presente, existem alguns grupos indígenas presentes nas aldeias da ilha, especialmente das etnias Karajá-Javaé, Avá-Canoeiro e Tapirapé, que ocupam a Terra Indígena Parque do Araguaia e a Terra Indígena Inãwébohona.\n[…]\nNa Ilha do Bananal, a BR-242 faz a ligação entre a Aldeia Txuiri (no rio Javaés), a Aldeia Imotxi (no rio Riozinho) e as aldeias Watau e JK (no rio Araguaia), havendo ainda uma pequena extensão não oficial que segue até a Aldeia Santa Isabel do Morro. Nos últimos anos, a Transbananal vem se tornando alvo de uma grande polêmica, já que há um projeto orçado em 650 milhões de reais para pavimentar este trecho da BR-242 que passa por dentro da Terra Indígena Parque do Araguaia.\n[…]\nRio Araguaia"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Rio Nilo",
      "descricao": "Grande rio do nordeste da África que atravessa o Sudão e o Egito até o mar Mediterrâneo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Nilo Branco e o Nilo Azul se encontram para formar o Nilo propriamente dito em qual capital africana?",
    "resposta": "Cartum",
    "fonte": [
      "https://en.wikipedia.org/wiki/Khartoum",
      "https://pt.wikipedia.org/wiki/Rio_Nilo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Khartoum",
        "situacao": "ok",
        "texto": "Khartoum, also spelled Khartum, is the capital and most populous city of Sudan as well as Khartoum State. With an estimated population of 7.1 million people, Greater Khartoum is the largest urban area in Sudan.\n[…]\nIn 1977, the first oil pipeline between Khartoum and Port Sudan was completed. The Organization of African Unity summit of 18–22 July 1978 was held in Khartoum, during which Sudan was awarded the OAU presidency.\n[…]\nThe sudden death of SPLA head and vice-president of Sudan John Garang in late July 2005, was followed by three days of violent riots in the capital. Order was finally restored after southern Sudanese politicians and tribal leaders sent strong messages to the rioters. The death toll was at least 24, as youths from southern Sudan attacked northern Sudanese and clashed with security forces.\n[…]\nThe African Union summit of 16–24 January 2006 was held in Khartoum; as was the Arab League summit of 28–29 March 2006, during which they elected Sudan the Arab League presidency.\n[…]\nKhartoum is home to one of the oldest botanical gardens in Africa, National Botanical Garden in the Mogran district of the city.\n[…]\nKhartoum's unique history and cultural significance have inspired literary works that explore its past, present, and future. For example, in \"Reading Khartoum\", the city is depicted as a space shaped by movement, political instability, and socio-cultural changes, resulting in underlying layers of meanings and ambiguity. Arabic-written poetry also offers a personalized glimpse of the city, reflecting its distinct cultural appearance and setting it apart from other Arab and African cities."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Nilo",
        "situacao": "ok",
        "texto": "O Nilo é um rio do continente africano, considerado o segundo mais extenso curso d'água do mundo. Situado no nordeste do continente africano, sua nascente está a sul da linha do Equador e sua foz ocorre no mar Mediterrâneo. Ele segue essa trajetória há 30 milhões de anos.\n[…]\nÉ formado pela confluência de três outros rios, o Nilo Branco (Bahr-el-Abiad), o Nilo Azul (Bahr-el-Azrak) e o rio Atbara. O Nilo Azul (Bahr-el-Azrak) nasce no lago Tana (Etiópia), confluindo com o Nilo Branco em Cartum, capital do Sudão.\n[…]\nEntre Malacal e Cartum, o Nilo é conhecido como o Nilo Branco. Em Cartum o Nilo Branco recebe as águas do Nilo Azul, oriundo dos altos planaltos da Etiópia.\n[…]\nA 322 quilómetros a norte de Cartum, o Nilo recebe o seu último grande afluente, o rio Atbara, oriundo igualmente do planalto abissínio. O rio avança então pelos penhascos da região da Núbia até chegar a Assuão no Egipto. A partir de Assuão o vale alarga até se atingir o Delta, desaguando no mar Mediterrâneo.\n[…]\nO Nilo possui várias cataratas, mas na antiguidade distinguiam-se seis cataratas clássicas do Nilo que estavam situadas entre Assuão e Cartum.\n[…]\nEntre 1899 e 1902, construiu-se, com recurso de capitais ingleses, a primeira barragem de Assuão, que foi alargada em 1911 e 1934.\n[…]\nJulga-se que os antigos Egípcios conheciam o Nilo até ao ponto de confluência do Nilo Branco com o Nilo Azul, em Cartum. Embora não tenham explorado o Nilo Branco, acredita-se que conheceriam o Nilo Azul até à  sua nascente no lago Tana.\n[…]\nNo século II a.C. Eratóstenes desenhou um mapa que mostrava de forma bastante precisa o percurso do Nilo até Cartum, no qual também se mostravam dois afluentes, o Atbara e o Nilo Azul. Eratóstenes foi o primeiro a postular que a nascente do Nilo estaria em lagos equatoriais."
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Travessia do rio Delaware",
      "descricao": "Operação militar em que George Washington cruzou o rio Delaware com o Exército Continental para atacar Trenton, na Guerra de Independência dos Estados Unidos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Na noite de Natal de que ano George Washington atravessou com suas tropas o rio Delaware, cheio de gelo, para um ataque surpresa?",
    "resposta": "1776",
    "fonte": [
      "https://en.wikipedia.org/wiki/George_Washington%27s_crossing_of_the_Delaware_River"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/George_Washington%27s_crossing_of_the_Delaware_River",
        "situacao": "ok",
        "texto": "George Washington's crossing of the Delaware River, on the night of December 25–26, 1776, during the American Revolutionary War, was the first move in a complex and surprise military maneuver organized by George Washington, the commander-in-chief of the Continental Army, which culminated in their attack on Hessian forces garrisoned at Trenton. Washington and his troops successfully attacked the He\n[…]\nWashington's army then crossed the Delaware River a third time at the end of 1776 under difficult circumstances by the uncertain thickness of the ice on the river. They defeated British reinforcements under Lord Cornwallis at Trenton on January 2, 1777, and were also triumphant over his rear guard at Princeton the following day prior to retreating to his winter quarters in Morristown, New Jersey.\n[…]\nOn December 19, 1776, just a week prior to Washington's covert crossing of the Delaware River, the morale of the Continental Army was lifted by the publication of The American Crisis, a pamphlet authored by Thomas Paine, the author of Common Sense. In The American Crisis, Paine wrote the famed phrase:\n[…]\nA final planning meeting took place that day, with all of the general officers present. Washington outlined the detailed plans for the crossing of the river and planned attacks on the Hessians in Trenton on December 25, 1776\n[…]\nA marble statue of George Washington, displayed at the Centennial Exposition in 1876, is located near the Douglass House in the Mill Hill neighborhood of Trenton. He is shown standing on a boat, symbolically representing the crossing. An image of Washington Crossing the Delaware has also appeared on the 1999 New Jersey State Quarter and on the reverse of the 2021 Quarter.\n[…]\nDoan Outlaws, who may have attempted to warn the British of Washington's crossing\n[…]\n\"Washington Crossing the Delaware\" (sonnet), written in 1936 by David Shulman"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Rompimento de barragem em Brumadinho",
      "descricao": "Desastre em que uma barragem de rejeitos da mineradora Vale se rompeu em Brumadinho, Minas Gerais, matando centenas de pessoas."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano a barragem da Vale em Brumadinho, Minas Gerais, se rompeu e despejou lama no rio Paraopeba?",
    "resposta": "2019",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rompimento_de_barragem_em_Brumadinho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rompimento_de_barragem_em_Brumadinho",
        "situacao": "ok",
        "texto": "Rompimento de barragem em Brumadinho em 25 de janeiro de 2019 foi o maior acidente de trabalho no Brasil em perda de vidas humanas e o segundo maior desastre industrial do século. Foi um dos maiores desastres ambientais da mineração do país, depois do rompimento de barragem em Mariana.\n[…]\nIsso é um genocídio. A impunidade é causa exclusiva dessa tragédia se repetir em Minas Gerais. Se o presidente da Vale tivesse sido preso pelo desastre de Mariana, esse desastre (Brumadinho) certamente não aconteceria\n[…]\nNo dia 25 de janeiro, quando aconteceu o desastre, a Assembleia Legislativa de Minas Gerais (Almg) emitiu uma nota oficial \"lamentando profundamente o rompimento de barragem de rejeitos da mineradora Vale em Brumadinho\" e que presidência formaria uma comissão de deputados para acompanhar os desdobramentos do desastre. No dia da posse dos deputados estaduais eleitos nas eleições de 2018 houve um minuto de silêncio dedicado às vitimas.\n[…]\nSegundo as investigações realizadas pela polícia civil de Minas Gerais, uma detonação feita na mina no dia da tragédia, a cerca de 1 300 metros da barragem, poderia ter contribuído para o colapso. Uma placa no local indicava que a detonação ocorreria entre 11 e 12 horas do dia 25 de janeiro de 2019, e o colapso ocorreu às 12h28.\n[…]\nNo dia 21 de janeiro de 2020, quase um ano depois da tragédia, o Ministério Público de Minas Gerais, com base nos resultados do inquérito da Polícia Civil, apresentou denúncia contra o presidente da Vale à época do rompimento, Fabio Schvartsman, outros dez funcionários da mineradora e cinco da empresa de consultoria alemã TÜV Süd, que passaram a responder por homicídio duplamente qualificado por cada uma das 270 mortes causadas pelo rompimento da barragem B1 em Brumadinho.\n[…]\nDefesa Civil de Minas Gerais"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Lago Ness",
      "descricao": "Grande lago de água doce nas Terras Altas da Escócia, famoso pela lenda do monstro de Nessie."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A fama mundial do monstro do lago Ness começou depois que abriram uma estrada à margem do lago. Em que década do século vinte?",
    "resposta": "Anos 1930",
    "fonte": [
      "https://en.wikipedia.org/wiki/Loch_Ness_Monster"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Loch_Ness_Monster",
        "situacao": "ok",
        "texto": "The Loch Ness Monster (Scottish Gaelic: Uilebheist Loch Nis), known affectionately as Nessie, is a mythical creature in Scottish folklore that is said to inhabit Loch Ness in the Scottish Highlands. It is often described as large, long-necked, and with one or more humps protruding from the water. Popular interest and belief in the creature has varied since it was brought to worldwide attention in \n[…]\nWhile this supports the idea that a Plesiosaur could handle the environment of Loch Ness, it doesn't support the idea that Nessie is one.\n[…]\nBauer, Henry H. The Enigma of Loch Ness: Making Sense of a Mystery, Chicago, University of Illinois Press, 1986\n[…]\nBinns, Ronald, The Loch Ness Mystery Solved, Great Britain, Open Books, 1983, ISBN 0-7291-0139-8 and Star Books, 1984, ISBN 0-352-31487-7\n[…]\nBinns, Ronald, The Loch Ness Mystery Reloaded, London, Zoilus Press, 2017, ISBN 9781999735906\n[…]\nBurton, Maurice, The Elusive Monster: An Analysis of the Evidence from Loch Ness, London, Rupert Hart-Davis, 1961\n[…]\nCampbell, Steuart. The Loch Ness Monster – The Evidence, Buffalo, New York, Prometheus Books, 1985.\n[…]\nDinsdale, Tim, Loch Ness Monster, London, Routledge & Kegan Paul, 1961, SBN 7100 1279 9\n[…]\nHarrison, Paul The encyclopaedia of the Loch Ness Monster, London, Robert Hale, 1999\n[…]\nGould, R. T., The Loch Ness Monster and Others, London, Geoffrey Bles, 1934 and paperback, Lyle Stuart, 1976, ISBN 0-8065-0555-9\n[…]\nHoliday, F. W., The Great Orm of Loch Ness, London, Faber & Faber, 1968, SBN 571 08473 7\n[…]\nPerera, Victor, The Loch Ness Monster Watchers, Santa Barbara, Capra Press, 1974.\n[…]\nWhyte, Constance, More Than a Legend: The Story of the Loch Ness Monster, London, Hamish Hamilton, 1957\n[…]\nSecrets of Loch Ness. Produced & Directed by Christopher Jeans (ITN/Channel 4/A&E Network, 1995).\n[…]\nDarnton, John (20 March 1994). \"Loch Ness: Fiction Is Stranger Than Truth\". The New York Times. Retrieved 29 May 2009."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monstro_do_lago_Ness",
        "situacao": "ok",
        "texto": "O monstro do lago Ness, monstro de Loch Ness, também conhecido simplesmente por Nessie, é um criptídeo aquático que alegadamente foi visto no Loch Ness (Lago Ness), nas Terras Altas da Escócia, no Reino Unido. A sua existência (ou não) continua a suscitar debate entre os cépticos e os crentes, e é um dos mistérios da criptozoologia. O monstro de Loch Ness é descrito como uma espécie de monstro ou \n[…]\nReal ou imaginário, o monstro de Loch Ness faz parte do imaginário popular e da cultura da Escócia e do resto do mundo ocidental. É recorrente o seu \"uso\" pelas indústrias de televisão, cinema e videojogos. É ainda, um dos motores da indústria de turismo da zona, atraindo ao Loch Ness inúmeros curiosos em busca da oportunidade de tirarem uma fotografia.\n[…]\nNessie também foi parodiada no desenho Phineas e Ferb como o \"Monstro do lago Naso\". No desenho Kid vs. Kat Nessie é parodiada como o \"Monstro do lago Coruja\". Carl Barks retratou Nessie na história O Mistério do Lago, Obras Completas de Carl Barks 33. Nesta história, o protagonista Donald decide fotografar o monstro no interior do lago Less (paródia para o lago Ness), mas é engolido pelo bicho.\n[…]\nEm Arquivo X no Episódio O Monstro do Lago um monstro marinho apareceu sendo responsável por várias mortes. Mesmo não sendo o Monstro do Lago Ness, durante o episódio várias referências são feitas ao Monstro do Lago Ness.\n[…]\nEm EarthBound na fase Winters e sem esquecer o filme Meu Monstro de Estimação, em Mega Man Star Force 2, há uma cidade chamada Loch Mess, onde segundo a lenda, vive uma criatura chamada Dossy (Messy), que na verdade é a forma de vida eletromagnética Brachio Wave (Plesio Surf). Em Top Gear de Super Nintendo, na pista \"Loch Ness\", um suposto Nessie aparece ao fundo do cenário num lago. Também é possível ver placas na beira da pista com a frase \"Beware the Monster!\" (Cuidado com o Monstro!).\n[…]\nMonstro",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Batalha Naval do Riachuelo",
      "descricao": "Combate naval de 11 de junho de 1865, no rio Paraná, perto de Corrientes, vencido pela Marinha do Brasil."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A Batalha do Riachuelo, vencida pela Marinha brasileira nas águas do rio Paraná em 1865, aconteceu durante qual guerra?",
    "resposta": "Guerra do Paraguai",
    "distratores": [
      "Guerra da Cisplatina",
      "Guerra dos Farrapos",
      "Guerra do Prata"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Batalha_Naval_do_Riachuelo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_Naval_do_Riachuelo",
        "situacao": "ok",
        "texto": "A Batalha Naval do Riachuelo, ou simplesmente Batalha do Riachuelo, travou-se a 11 de junho de 1865 às margens do arroio Riachuelo, um afluente do rio Paraná, na província de Corrientes, na Argentina. Foi evento decisivo e vitorioso, o marco da vitória brasileira na guerra sendo considerada pelos historiadores militares como uma das mais importantes batalhas da Guerra do Paraguai (1864-1870).\n[…]\nCoube ao Almirante Joaquim Marques Lisboa, Visconde de Tamandaré, depois Marquês de Tamandaré, o comando das Forças Navais do Brasil em Operações de Guerra contra o Governo do Paraguai. A Marinha do Brasil representava praticamente a totalidade do Poder Naval presente no teatro de operações. O Comando-Geral dos Exércitos Aliados era exercido pelo Presidente da República da Argentina, General Bartolomeu Mitre.\n[…]\nCom o avanço das tropas paraguaias ao longo da margem esquerda do Paraná, na Província de Corrientes, Tamandaré resolveu designar seu Chefe do Estado-Maior o Chefe de Divisão (posto que correspondia a comodoro, ou almirante de uma estrela em outras Marinhas) Francisco Manuel Barroso da Silva, para comandar a força naval que estava rio acima. Barroso partiu de Montevidéu em 28 de abril de 1865, na Fragata Amazonas, e se juntou à força naval em Bela Vista.\n[…]\nA esquadra paraguaia desce o rio, faz a volta um pouco abaixo do Riachuelo, torna águas acima e encosta-se na curva do Riachuelo a jusante das suas baterias de terra; as chatas, fundeadas e preparadas, aguardam a resposta brasileira. Descendo, a frota paraguaia se estira ao longo e perto da margem esquerda do Paraná, entre a boca do Riachuelo e a saliência do Rincão de La Graña, a jusante dos 22 canhões inimigos assestados em terra.\n[…]\nDoratioto, Francisco Fernando Monteoliva. Maldita Guerra: Nova História da Guerra do Paraguai. São Paulo: Companhia das Letras, 2002.\n[…]\nBatalha Naval do Riachuelo, Marinha do Brasil."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Enchentes no Rio Grande do Sul em 2024",
      "descricao": "Grandes inundações que atingiram a maior parte do Rio Grande do Sul e o centro de Porto Alegre, com cheia recorde do Guaíba."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "As enchentes que inundaram o centro de Porto Alegre e superaram a histórica cheia do Guaíba de 1941 aconteceram em que ano?",
    "resposta": "2024",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Enchentes_no_Rio_Grande_do_Sul_em_2024",
      "https://en.wikipedia.org/wiki/2024_Rio_Grande_do_Sul_floods"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Enchentes_no_Rio_Grande_do_Sul_em_2024",
        "situacao": "ok",
        "texto": "Enchentes no Rio Grande do Sul em 2024 referem-se às inundações que ocorreram no estado brasileiro do Rio Grande do Sul entre o final de abril e início de maio de 2024. O governo gaúcho classificou a situação como \"a maior catástrofe climática\" da história do estado.\n[…]\nNa tarde do dia 5 de maio, a inundação do Guaíba, lago que cerca a capital Porto Alegre, atingiu a marca de 5,37 metros, superando as históricas enchentes de 1941 e 2023. No mesmo dia, o Governo Federal decretou estado de calamidade pública. O volume de chuva no mês de maio bateu todos os recordes históricos de Porto Alegre e Caxias do Sul.\n[…]\nEm 14 de junho de 2024, a Secretaria Municipal de Saúde de Porto Alegre divulgou que havia recebido 1556 notificações de suspeitas de leptospirose, sendo 1309 casos suspeitos em investigação, 195 descartados e 52 casos confirmados. Em relação aos óbitos por leptospirose em Porto Alegre, até 14 de junho de 2024 haviam sido confirmados 2 óbitos entre residentes do município e outros 2 seguem em investigação.\n[…]\nO Aeroporto Internacional de Porto Alegre foi atingido pelas águas provenientes das enchentes no Rio Grande do Sul. A pista de decolagem e os prédios foram inundados e a água atingiu 2,5 metros de altura em alguns pontos do aeroporto. Diante da situação, a Fraport, administradora do complexo aeroportuário, suspendeu por tempo indeterminado todos os voos que passam pelo terminal.\n[…]\nNos dias 7 e 9 de agosto de 2024 aconteceu o Festival Salve o Sul, no Allianz Parque, liderado por Amigos, Pedro Sampaio e Luísa Sonza, com todo o valor arrecadado com os ingressos destinado para ajudar as vítimas das enchentes no Rio Grande do Sul.\n[…]\nEnchentes em Porto Alegre em 1941\n[…]\nMedia relacionados com Enchentes no Rio Grande do Sul em 2024 no Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/2024_Rio_Grande_do_Sul_floods",
        "situacao": "ok",
        "texto": "The 2024 Rio Grande do Sul floods were severe floods caused by heavy rains and storms that hit the Brazilian state of Rio Grande do Sul, and the adjacent Uruguayan cities of Treinta y Tres, Paysandú, Cerro Largo, and Salto. From 29 April through to May, it resulted in 181 fatalities (as of 7 July 2024), widespread landslides, and a dam collapse. It is considered the country's worst flooding in ove\n[…]\nAcross all regions of the state of Rio Grande do Sul, at least 169 people were killed, 806 others were injured, and 56 were left missing in the floods. At least 580,000 others were displaced from their homes, around 68,500 of whom were in shelters. Agence France-Presse (AFP) reported that two more people died in an explosion at a flooded gas station in Porto Alegre, where rescue crews were attempting to refuel their vehicles.\n[…]\nIn Porto Alegre, the Guaíba Lake rose up to 5.31 m (17.4 ft), thus beating the previous record 4.76 m (15.6 ft) set during the 1941 floods, as most areas of the city were flooded, with more than 60 streets becoming completely inaccessible and more than 10 being partially blocked; rescue workers used four-wheel-drive vehicles, boats, and jet skis in order to maneuver through flooded streets in search of stranded and missing people.\n[…]\nAs a measure to speed up rescues, a group from Centro Universitário Ritter dos Reis voluntarily and independently created an internet platform as a way of centralizing rescue efforts and also making it possible to make requests for help, with requests for help being transformed into geolocation points with routes to the location. As of 9 May 2024, it had already collaborated with more than 12,000 rescues.\n[…]\n2023 Rio Grande do Sul floods\n[…]\nWeather of 2024\n[…]\nCaramelo (horse), a horse known for having spent at least four days on a roof during the floods\n[…]\nMedia related to 2024 Rio Grande do Sul floods at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Admiral Graf Spee",
      "descricao": "Encouraçado de bolso da Marinha alemã afundado pela própria tripulação diante de Montevidéu, em dezembro de 1939."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O encouraçado alemão Graf Spee foi afundado pela própria tripulação no estuário do rio da Prata, diante de Montevidéu, durante qual guerra?",
    "resposta": "Segunda Guerra Mundial",
    "distratores": [
      "Primeira Guerra Mundial",
      "Guerra do Chaco",
      "Guerra das Malvinas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/German_cruiser_Admiral_Graf_Spee",
      "https://en.wikipedia.org/wiki/Battle_of_the_River_Plate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/German_cruiser_Admiral_Graf_Spee",
        "situacao": "ok",
        "texto": "Admiral Graf Spee (German pronunciation: [admiˈʁaːl ɡʁäːf ʃpeː]) was a Deutschland-class Panzerschiff (armored ship, nicknamed \"pocket battleships\" by the British) which served with the Kriegsmarine of Nazi Germany during World War II. The vessel was named after World War I Admiral Maximilian von Spee, commander of the East Asia Squadron who fought the battles of Coronel and the Falkland Islands, \n[…]\nAt 07:25, Admiral Graf Spee scored a hit on Ajax that disabled her aft turrets. Both sides broke off the action, Admiral Graf Spee retreating into the River Plate estuary, while Harwood's battered cruisers remained outside to observe any possible breakout attempts. In the course of the engagement, Admiral Graf Spee had been hit approximately 70 times; 36 men were killed and 60 more were wounded, including Langsdorff, who had been wounded twice by splinters while standing on the open bridge.\n[…]\nUnder Article 17 of the Hague Convention of 1907, neutrality restrictions limited Admiral Graf Spee to a period of 72 hours for repairs in Montevideo, before she would be interned for the duration of the war. On 17 December 1939, Langsdorff ordered the destruction of all important equipment aboard the ship. The ship's remaining ammunition supply was dispersed throughout the ship, in preparation for scuttling.\n[…]\nOn 20 December, in his room in a Buenos Aires hotel, Langsdorff shot himself in full dress uniform while lying on the ship's battle ensign. In late January 1940, the neutral American cruiser USS Helena arrived in Montevideo and the crew was permitted to visit the wreck of Admiral Graf Spee. The Americans met the German crewmen, who were still in Montevideo. In the aftermath of the scuttling, the ship's crew were taken to Argentina, where they were interned for the remainder of the war.\n[…]\n\"Graf Spee and the Battle of the River Plate (Audio recordings, 1960s)\". Nga Taonga (NZ). 2023."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_the_River_Plate",
        "situacao": "ok",
        "texto": "The Battle of the River Plate was fought in the South Atlantic on 13 December 1939 as the first British naval battle of the Second World War.\n[…]\nDuring the battle, a total of 108 men had been killed on both sides, including 36 on Admiral Graf Spee.\n[…]\nThe port of Mar del Plata on the Argentine coast and 200 mi (170 nmi; 320 km) south of Montevideo would have been a better choice for Admiral Graf Spee.\n[…]\nThe crew of Admiral Graf Spee were taken to Buenos Aires, Argentina, where Captain Langsdorff shot himself on 19 December. He was buried there with full military honours, and several British officers attended. Many of the crew members made their homes in Montevideo with the help of local people of German origin. The German dead were buried in the Cementerio del Norte, Montevideo.\n[…]\nPrisoners taken from merchant ships captured by Admiral Graf Spee who had been transferred to her supply ship Altmark were freed by a boarding party from the British destroyer HMS Cossack in the Altmark incident (16 February 1940) in the Jøssingfjorden, at the time neutral Norwegian waters. Prisoners who had not been transferred to Altmark had remained aboard Admiral Graf Spee during the battle; they were released on arrival in Montevideo.\n[…]\nIn 1964, on the 25 anniversary of the battle, a memorial to the ship was erected in Montevideo's port. Part of it is Admiral Graf Spee's anchor.\n[…]\nIn 1997, one of Admiral Graf Spee's 150 mm (5.9 in) secondary gun mounts was raised and restored; it can now be seen outside Montevideo's National Maritime Museum.\n[…]\n\"Graf Spee and the Battle of the River Plate (Audio recordings, 1960s)\". Nga Taonga (NZ). 2023."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Admiral_Graf_Spee",
        "situacao": "ok",
        "texto": "O Admiral Graf Spee foi um cruzador pesado operado pela Kriegsmarine e a terceira e última embarcação da Classe Deutschland, depois do Deutschland e Admiral Scheer. Sua construção começou no início de outubro de 1932 nos estaleiros da Reichsmarinewerft Wilhelmshaven e foi lançado ao mar no final de junho de 1934, sendo comissionado na frota alemã no início de janeiro de 1936.\n[…]\nO Admiral Graf Spee realizou cinco patrulhas de não-intervenção durante a Guerra Civil Espanhola entre 1936 e 1938. Ele foi enviado para o sul do Oceano Atlântico pouco antes do início da Segunda Guerra Mundial em 1939 com o objetivo de atacar navios mercantes assim que a guerra fosse declarada. Afundou nove embarcações entre setembro e dezembro, totalizando cerca de cinquenta mil toneladas, até enfrentar três cruzadores britânicos na Batalha do Rio da Prata em 13 de dezembro.\n[…]\nA Segunda Guerra Mundial começou em setembro de 1939 e o ditador Adolf Hitler ordenou que a Kriegsmarine começasse a atacar embarcações mercantes Aliadas. Hitler mesmo assim adiou emitir a ordem até que ficasse claro que o Reino Unido não iria procurar um tratado de paz depois da conquista da Polônia.\n[…]\nDurante o confronto, o Admiral Graf Spee foi atingido aproximadamente setenta vezes, com 36 mortos e sessenta feridos. O próprio Langsdorff foi ferido duas vezes por estilhaços enquanto estava na ponte de comando aberta.\n[…]\nLangsborff se suicidou em 20 de dezembro dentro de seu quarto de hotel em Buenos Aires usando um uniforme formal completo em cima do estandarte de batalha do Admiral Graf Spee. O cruzador rápido norte-americano USS Helena chegou em Montevidéu no final de janeiro de 1940 e sua tripulação pode visitar os destroços. Os tripulantes alemães e norte-americanos também se encontraram. Depois disso os alemães foram levados para a Argentina, onde permaneceram pelo restante da guerra.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Rio Sena",
      "descricao": "Rio do norte da França que atravessa Paris e deságua no canal da Mancha."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Depois de cerca de um século de proibição de nadar no rio Sena, Paris usou suas águas para provas olímpicas de triatlo. Em que ano?",
    "resposta": "2024",
    "fonte": [
      "https://en.wikipedia.org/wiki/Triathlon_at_the_2024_Summer_Olympics",
      "https://en.wikipedia.org/wiki/Seine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Triathlon_at_the_2024_Summer_Olympics",
        "situacao": "ok",
        "texto": "The triathlon competitions at the 2024 Summer Olympics in Paris ran from 31 July to 5 August at Pont Alexandre III, featuring a total of 110 athletes who were to compete in each of the men's and women's events. After a successful debut at the 2020 Summer Olympics, the mixed relay competition will remain in the triathlon program for the second time.\n[…]\nThe qualification period commenced on 27 May 2022 and concluded on the same day in 2024. 110 athletes (55 for each gender) vied for the coveted spots with a maximum of three per gender for each NOC. As the host country, France automatically receives four quota places (two per gender) while the highest-ranked eligible NOC will each obtain two men's and two women's spots at the 2022 and 2023 Mixed Relay World Championships.\n[…]\nSix highest-ranked eligible NOCs will be awarded two quota places per gender based on the World Triathlon Mixed Relay Olympic Qualification Rankings of 25 March 2024, with two more from the Mixed Relay Olympic Qualification Event held between 15 April and 27 May 2024. The qualification period concludes with the top 26 individuals per gender securing a coveted place, subject to the limit of three per NOC and ignoring the first two from each NOC that qualified through the mixed relays.\n[…]\nThe men's individual event was originally scheduled for 30 July 2024 but was postponed when the water quality in the Seine failed a safety test for levels of pollution.\n[…]\nParatriathlon at the 2024 Summer Paralympics"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Seine",
        "situacao": "ok",
        "texto": "The Seine ( sayn, sen; French: [sɛn] ) is a 777-kilometre-long (483 mi) river in northern France. Its drainage basin is in the Paris Basin (a geological relative lowland) covering most of northern France. It rises at Source-Seine, 30 kilometres (19 mi) northwest of Dijon in northeastern France in the Langres plateau, flowing through Paris and into the English Channel at Le Havre (and Honfleur on t\n[…]\nIn 1988, then-mayor of Paris and future president Jacques Chirac first called for the lifting of a swimming ban that had been in place since 1923 due to polluted waters. In 2018, a €1.4 billion ($1.55 billion) cleanup programme called the \"Swimming Plan\" was launched with the aim of making the river safe to use for the 2024 Summer Olympics. The project included constructing a basin to store rainwater, which would then be slowly released into the sewer system, preventing overflow.\n[…]\nTo demonstrate the river's improved cleanliness, Mayor Anne Hidalgo and President Emmanuel Macron both pledged to take a swim in the waters, and Hidalgo did so on July 17, 2024.\n[…]\nSome of the Algerian victims of the 1961 Paris massacre drowned in the Seine after being thrown by French policemen from the Pont Saint-Michel and other locations in Paris.\n[…]\nAt the 1900 Summer Olympics, the river hosted the rowing, swimming, and water polo events. Twenty-four years later, it hosted the rowing events again at Bassin d'Argenteuil, along the Seine north of Paris.\n[…]\nMore than a century later, during the 2024 Summer Olympics, the Seine hosted a boat parade with boats for each national delegation during the opening ceremony.\n[…]\nIn 1991 (and 2024), UNESCO added the banks of the Seine in Paris—the Rive Gauche and Rive Droite—to its list of World Heritage Sites in Europe.\n[…]\nAnother song titled \"La Seine\", by Vanessa Paradis featuring Matthieu Chedid, formed part of the original soundtrack for the 2011 film A Monster in Paris."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Triatlo_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2024",
        "situacao": "ok",
        "texto": "As competições de triatlo nos Jogos Olímpicos de Verão de 2024 foram disputadas entre 31 de julho e 5 de agosto de 2024 na Ponte Alexandre III, em Paris. Após estrear nos Jogos Olímpicos de 2020, a prova do revezamento misto permaneceu no programa da modalidade, ao lado das competições masculina e feminina.\n[…]\nO período de qualificação começou em 27 de maio de 2022 e terminou no mesmo dia de 2024. 110 atletas (55 para cada gênero) disputaram as vagas com um máximo de três por gênero para cada Comitê Olímpico Nacional (CON). Como país anfitrião, a França recebeu automaticamente quatro vagas de cota (duas por gênero), enquanto o CON elegível com melhor classificação obteve, cada um, duas vagas masculinas e duas femininas nos Campeonatos Mundiais de Revezamento Misto de 2022 e 2023.\n[…]\nOs seis CONs elegíveis com melhor classificação receberam duas vagas por gênero com base no ranking de qualificação olímpica da World Triathlon de 25 de março de 2024, com mais duas do evento de qualificação olímpica de revezamento misto a ser realizado entre 15 de abril e 27 de maio de 2024.\n[…]\nO triatlo olímpico contém três fases; um nado em águas abertas de 1,5 quilômetros (0,93 milhas), um ciclismo de 40 km (25 mi) e uma corrida de 10 km (6,2 mi). As competições são disputadas num único evento entre todos os competidores, sem fases eliminatórias.\n[…]\nO evento individual masculino estava originalmente programado para 30 de julho, mas foi adiado em um dia após a qualidade da água do Rio Sena não passar em um teste de segurança para níveis de poluição.\n[…]\nAo todo, 42 CONs tiveram triatletas qualificados. Entre parênteses encontra-se representada a quantidade de competidores.\n[…]\nTriatlo nos Jogos Pan-Americanos de 2023\n[…]\nTriatlo nos Jogos Paralímpicos de Verão de 2024",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Rio Mississippi",
      "descricao": "Principal rio dos Estados Unidos, que deságua no golfo do México perto de Nova Orleans."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1541, que conquistador espanhol se tornou o primeiro europeu registrado a alcançar o rio Mississippi?",
    "resposta": "Hernando de Soto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mississippi_River",
      "https://en.wikipedia.org/wiki/Hernando_de_Soto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mississippi_River",
        "situacao": "ok",
        "texto": "The Mississippi River is the primary river of the largest drainage basin in the United States. It is the second-longest river in the U.S. after the Missouri. From its traditional source of Lake Itasca in northern Minnesota, it flows generally south for 2,340 mi (3,766 km) to the Mississippi River Delta in the Gulf of Mexico. With its many tributaries, the Mississippi's watershed drains all or part\n[…]\nc. 1000 AD: The Mississippi's present course took over.\n[…]\nFort Madison Toll Bridge – Connects Fort Madison, Iowa, and unincorporated Niota, Illinois; also known as the Santa Fe Swing Span Bridge; at the time of its construction the longest and heaviest electrified swing span on the Mississippi River. Listed in the National Register of Historic Places since 1999.\n[…]\nHernando de Soto Bridge – A through arch bridge carrying Interstate 40 across the Mississippi between West Memphis, Arkansas, and Memphis, Tennessee.\n[…]\nThe most prominent of these, now called Cahokia, was occupied between about 600 and 1400 AD and at its peak numbered between 8,000 and 40,000 inhabitants, larger than London, England of that time. At the time of first contact with Europeans, Cahokia and many other Mississippian cities had dispersed, and archaeological finds attest to increased social stress.\n[…]\nIn 1519 Spanish explorer Alonso Álvarez de Pineda became the first recorded European to reach the Mississippi River, followed by Hernando de Soto who reached the river on May 8, 1541, and called it Río del Espíritu Santo (\"River of the Holy Spirit\"), in the area of what is now Mississippi. In Spanish, the river is called Río Mississippi.\n[…]\nFlood management in the Mississippi River (PDF). Archived August 18, 2018, at the Wayback Machine.\n[…]\nFriends of the Mississippi River Archived March 14, 2022, at the Wayback Machine\n[…]\nMississippi River Challenge – annual canoe & kayak event on the Twin Cities stretch\n[…]\nMississippi River Field Guide"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hernando_de_Soto",
        "situacao": "ok",
        "texto": "Hernando de Soto (; Spanish: [eɾˈnando ðe ˈsoto]; c. 1497 – 21 May 1542) was a Spanish explorer and conquistador, who was involved in expeditions in Nicaragua and the Yucatan Peninsula.\n[…]\nAfter defeating the resisting Timucuan warriors, Hernando de Soto had 200 executed, in what was to be called the Napituca Massacre, the first large-scale massacre by Europeans in the current United States. One of Soto's most important battles with the natives, along his conquest of Florida, was a 1539 battle with Chief Vitachuco.\n[…]\nThousands were killed during the 3 hours battle and 900 survivors took refuge in the pond, specifically Two-mile Pond in Melrose, where they continued to fight, while swimming. Due to De Narvaez mutilating an Indian chief, when Hernando de Soto was then met by that same chief, he was forced to fight with them despite attempts to not pursue a fight. This came to be common with many other Indian tribes who had previously encountered Narvaez.\n[…]\nOn 8 May 1541, de Soto's troops reached the Mississippi River.\n[…]\nDe Soto's men were both the first and nearly the last Europeans to witness the villages and civilization of the Mississippian culture.\n[…]\nMany parks, towns, counties, and institutions have been named after Hernando de Soto, to include:\n[…]\nDe Soto, Mississippi\n[…]\nDeSoto County, Mississippi, and its county seat, Hernando\n[…]\nDe Soto National Forest, in Mississippi\n[…]\nHernando, Mississippi\n[…]\nHernando, Florida\n[…]\nHernando de Soto Bridge, which carries Interstate 40 across the Mississippi River at Memphis (opened in 1973)\n[…]\nList of sites and peoples visited by the Hernando de Soto Expedition\n[…]\nHernando de Soto Profile and Videos – Chickasaw.TV\n[…]\nHernando de Soto in the Conquest of Central America"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Mississippi",
        "situacao": "ok",
        "texto": "O rio Mississippi é o segundo mais longo curso de água dos Estados Unidos, perdendo a primeira posição para o rio Missouri, que é afluente do Mississippi. Considerados juntos, formam a maior bacia hidrográfica da América do Norte. Quando medido da nascente do Missouri, o comprimento total do conjunto Missouri-Mississippi é de aproximadamente 6 270 km. A origem do rio Mississippi vem da palavra da \n[…]\nEm 8 de maio de 1541, Hernando de Soto tornou-se o primeiro explorador europeu a atingir o rio Mississippi, o qual ele chamou de \"Rio do Espírito Santo\". Os exploradores franceses Louis Joliet e Jacques Marquette começaram a explorar o Mississippi, que era conhecido pelo nome Sioux \"Ne Tongo\" (grande rio), em 17 de maio de 1673. Em 1682, René Robert Cavelier e Henri de Tonty reclamaram todo o vale do rio Mississippi para França, batizando de Louisiana, para Luís XIV.\n[…]\nA zona do delta do Mississippi foi profundamente afectada pela passagem dos furacões Katrina e Rita em agosto e setembro de 2005.\n[…]\nO mesmo autor já tinha escrito sobre o rio em obra anterior, com o título Life On the Mississippi.\n[…]\nAntes de ser chamado Mississippi pelos europeus, tinha o nome de \"rio de Espiritu Santo\" dado por Hernando de Soto (o primeiro explorador europeu do rio, em 1541) e \"Rivière Colbert\" (dado pelos exploradores de la Salle e de Tonty, em 1682).\n[…]\nO Mississippi tem vários nomes locais, incluindo: \"Father of Waters\", \"Gathering of Waters\", \"Big River\", \"Old Man River\", \"Great River\", \"Body of a Nation\", \"Mighty Mississippi\", \"el Grande\" (de Soto), \"Muddy Mississippi\", \"Old Blue\" e \"Moon River\".\n[…]\nO esqui aquático foi inventado em 1922 no lago Pepin, parte do rio Mississippi entre Minnesota e Wisconsin. Ralph Samuelson, o seu inventor, fez no rio o primeiro salto de esqui aquático em 1925.\n[…]\nDelta do Mississippi",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Rio Zambeze",
      "descricao": "Grande rio do sul da África que forma as Cataratas Vitória e deságua no oceano Índico, em Moçambique."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Nos anos 1850, que missionário escocês explorou o rio Zambeze e foi o primeiro europeu a ver as cataratas que batizou de Vitória?",
    "resposta": "David Livingstone",
    "fonte": [
      "https://en.wikipedia.org/wiki/David_Livingstone",
      "https://en.wikipedia.org/wiki/Zambezi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/David_Livingstone",
        "situacao": "ok",
        "texto": "David Livingstone (; 19 March 1813 – 1 May 1873) was a Scottish doctor, Congregationalist, pioneer Christian missionary with the London Missionary Society, and an explorer in Africa. Livingstone was married to Mary Moffat Livingstone, from the prominent 18th-century Moffat missionary family.\n[…]\nNeil Livingstone was a Sunday school teacher and teetotaller who handed out Christian tracts on his travels as a door-to-door tea salesman. He read books on theology, travel, and missionary enterprises extensively. This rubbed off on the young David, who became an avid reader, but he also loved scouring the countryside for animal, plant, and geological specimens in local limestone quarries.\n[…]\nOn 11 November 2011, Livingstone's 1871 Field Diary and other original works were published online for the first time by the David Livingstone Spectral Imaging Project. Papers relating to Livingstone's time as a LMS missionary (including hand-annotated maps of South East Africa) are held by the Archives of the School of Oriental and African Studies.\n[…]\nDavid Livingstone Memorial Church of the Church of Scotland in Blantyre.\n[…]\nDavid Livingstone Primary School in Thornton Heath, South London.\n[…]\nDavid Livingstone Elementary School, Vancouver.\n[…]\nDavid Livingstone Community School, Winnipeg.\n[…]\nLivingstone Online\n[…]\nLivingstone Online – Explore the manuscripts of David Livingstone Images of original documents alongside transcribed, critically edited versions\n[…]\nDavid Livingstone (c. 1956) Archived 1 April 2012 at the Wayback Machine. Archive film from the National Library of Scotland: Scottish Screen Archive\n[…]\nWorks by David Livingstone at Project Gutenberg\n[…]\nThe Personal Life of David Livingstone\n[…]\nWorks by or about David Livingstone at the Internet Archive\n[…]\nWorks by David Livingstone at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Zambezi",
        "situacao": "ok",
        "texto": "The Zambezi (also spelled Zambeze and Zambesi) is the fourth-longest river in Africa, the longest east-flowing river in Africa and the largest flowing into the Indian Ocean from Africa. Its drainage basin covers 1,390,000 km2 (540,000 mi2), slightly less than half of the Nile's.\n[…]\nDavid Livingstone, who reached the upper Zambezi in 1853, refers to it as \"Zambesi\", but also makes note of the local name \"Leeambye\" used by the Lozi people, which he says means \"large river or river par excellence\".\n[…]\nThe first recorded exploration of the upper Zambezi was made by David Livingstone in his exploration from Bechuanaland between 1851 and 1853. Two or three years later, he descended the Zambezi to its mouth and in the course of this journey found the Victoria Falls. During 1858–60, accompanied by John Kirk, Livingstone ascended the river by the Kongone mouth as far as the falls, and also traced the course of its tributary the Shire and reached Lake Malawi.\n[…]\nCommunities by the river fish it extensively, and many people travel from far afield to fish. Some Zambian towns on roads leading to the river levy unofficial \"fish taxes\" on people taking Zambezi fish to other parts of the country. Game fishing, as well as fishing for food, is a significant activity on some parts of the river. Between Mongu and Livingstone, several safari lodges cater to tourists who want to fish for exotic species, and many also catch fish to sell to aquaria.\n[…]\nThe river is frequently interrupted by rapids, so has never been an important long-distance transport route. David Livingstone's Zambezi expedition attempted to open up the river to navigation by paddle steamer, but was defeated by the Cahora Bassa rapids.\n[…]\nLivingstone, Mongu, Lukulu, Senanga and Sesheke (Zambia)\n[…]\nThe Zambezi Society"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/David_Livingstone",
        "situacao": "ok",
        "texto": "David Livingstone (Blantyre, Escócia, 19 de março de 1813 – Aldeia do Chefe Chitambo, Rodésia do Nordeste, 1 de maio de 1873) foi um missionário e explorador britânico que se tornou famoso por ter sido um dos primeiros europeus a terem explorado o interior da África.\n[…]\nAo longo de sua vida, David Livingstone empreendeu diversas expedições missionárias pelo interior do continente africano, sendo que em muitas delas, Livingstone foi o primeiro homem branco a ter visitado determinadas regiões da África.\n[…]\nEssa enorme expedição contribuiu para o preenchimento das lacunas do conhecimento ocidental sobre a África central e do sul. Em 1855, Livingstone descobriu uma espetacular catarata ou cachoeira, a qual chamou de Cataratas Vitória (Victoria Falls). Chegou também à foz do Rio Zambeze sobre o Oceano Índico, em maio de 1856, tornando-se o primeiro europeu a atravessar a largura da África meridional.\n[…]\nDavid Livingstone não foi o primeiro, mas foi certamente o maior explorador da África. Quando embarcou pela primeira vez para o continente negro, em 1841, pretendia atuar principalmente como missionário. Constatou logo que as missões em território pouco povoado não seriam promissoras, se não viajasse muito e visitasse os \"selvagens\" – como os negros eram chamados pelos colonizadores. Ao todo, percorreu 48 000 km em terras africanas.\n[…]\nLivingstone, Eu presumo?\", tendo Livingstone respondido: \"Sim, e eu me sinto grato por eu estar aqui para recebê-lo\".\n[…]\nMedalha Centenário de David Livingstone\n[…]\n\"What About Livingstone\", canção do grupo sueco ABBA\n[…]\n«Artigo sobre David Livingstone na Encyclopædia Britannica» (em inglês)\n[…]\n«Livingstone Online: Explore os manuscritos de David Livingstone» (em inglês)\n[…]\nDeutsche Welle - 1873: Morre David Livingstone",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Canal Casiquiare",
      "descricao": "Canal natural no sul da Venezuela que liga o rio Orinoco ao rio Negro, da bacia amazônica."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1800, que naturalista alemão navegou pelo canal Casiquiare e confirmou que ele liga as bacias do Orinoco e do Amazonas?",
    "resposta": "Alexander von Humboldt",
    "fonte": [
      "https://en.wikipedia.org/wiki/Casiquiare_canal",
      "https://en.wikipedia.org/wiki/Alexander_von_Humboldt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Casiquiare_canal",
        "situacao": "ok",
        "texto": "The Casiquiare river or canal (Spanish pronunciation: [kasiˈkjaɾe]) is a natural distributary of the upper Orinoco flowing southward into the Rio Negro in Venezuela. As such, it forms a unique natural canal between the Orinoco and Amazon river systems. It is the world's largest river of the kind that links two major river systems, a so-called bifurcation. The area forms a water divide, more dramat\n[…]\nLittle credence was given to Román's statement until it was verified in 1756 by the Spanish boundary-line commission of José Yturriaga and Solano. In 1800 German scientist Alexander von Humboldt and French botanist Aimé Bonpland explored the river. During a 1924–25 expedition, Alexander H. Rice Jr. of Harvard University traveled up the Orinoco, traversed the Casiquiare canal, and descended the Rio Negro to the Amazon at Manaus.\n[…]\nwhat currently is the uppermost Orinoco basin, including Cunucunuma River, eventually will be entirely diverted by the Casiquiare into the Amazon basin.\n[…]\nThe Casiquiare canal – Orinoco River hydrographic divide is a representation of the water divide that delineates the separation between the Orinoco Basin and the Amazon Basin. (The Orinoco Basin flows west–north–northeast into the Caribbean; the Amazon Basin flows east into the western Atlantic in the northeast of Brazil.)\n[…]\nEssentially the river divide is a west-flowing, upriver section of the Orinoco with an outflow to the south into the Amazon Basin. This named outflow is the Casiquiare canal, which, as it heads downstream (southerly), picks up speed and also accumulates water volume. The greatest manifestation of the divide is during floods.\n[…]\nVARESCHI, Volkmar. Orinoco arriba. A través de Venezuela siguiendo a Humboldt. Caracas: Ediciones Lectura, 1959\n[…]\nWikimapia satellite image displaying locations of both the beginning (principio) and the end (desague) of the Casiquiare Canal."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alexander_von_Humboldt",
        "situacao": "ok",
        "texto": "Friedrich Wilhelm Heinrich Alexander von Humboldt (14 September 1769 – 6 May 1859) was a German polymath, geographer, naturalist, explorer, and proponent of Romantic philosophy and science. He was the younger brother of the Prussian minister, philosopher, and linguist Wilhelm von Humboldt (1767–1835).\n[…]\nIn February 1800, Humboldt and Bonpland left the coast with the purpose of exploring the course of the Orinoco River and its tributaries. This trip, which lasted four months and covered 1,725 miles (2,776 km) of wild and largely uninhabited country, had an aim of establishing the existence of the Casiquiare canal (a communication between the water systems of the rivers Orinoco and Amazon).\n[…]\n4877 Humboldt (asteroid)\n[…]\nHumboldtian science\n[…]\nWorks by Alexander von Humboldt at the Biodiversity Heritage Library\n[…]\nWorks by Alexander von Humboldt at Project Gutenberg\n[…]\nWorks by Alexander von Humboldt at LibriVox (public domain audiobooks)\n[…]\nWorks by or about Alexander von Humboldt at the Internet Archive\n[…]\n\"Alexander von Humboldt\". In Our Time. 28 September 2006. BBC Radio 4.\n[…]\n\"Alexander von Humboldt featured on the East German 5 Marks banknote from 1964\". Banknotes featuring Scientists and Mathematicians.\n[…]\nAlexander von Humboldt and the United States: Art, Nature, and Culture 2020-2021 exhibition at the Smithsonian American Art Museum\n[…]\nRaat, A.J.P. (1976). \"Alexander von Humboldt and Coenraad Jacob Temminck\". Zoologische Bijdragen. 21 (1): 19–38. ISSN 0459-1801.\n[…]\nBois-Reymond, Emil du (December 1883). \"Alexander von Humboldt\" . Popular Science Monthly. Vol. 24. pp. 145–160.\n[…]\n\"Humboldt, Friedrich Heinrich Alexander von\" . Appletons' Cyclopædia of American Biography. 1900.\n[…]\nKellner, L. (1960). \"Alexander Von Humboldt and the history of international scientific collaboration\". Scientia (95): 252–256. ISSN 0036-8687."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canal_do_Cassiquiare",
        "situacao": "ok",
        "texto": "O canal do Cassiquiare, também designado por canal Casiquiare ou rio Cachequerique, é um canal natural e bifurcação fluvial com 326 km de comprimento que se desenvolve entre a margem esquerda do rio Orinoco, na Venezuela, e a margem esquerda do rio Negro, afluente do rio Amazonas, na fronteira entre a Venezuela e a Colômbia.\n[…]\nA comunicação das duas bacias através do canal natural do Cassiquiare torna possível a navegação fluvial entre o Brasil e a Venezuela, no trecho São Gabriel da Cachoeira-Puerto Ayacucho, podendo-se obter, nessas localidades, respectivamente, conexão para o delta do Amazonas, em terras brasileiras, ou para o delta do Orinoco, em terras venezuelanas.\n[…]\nOrellana, apesar de ter sido o primeiro europeu a navegar do Orinoco ao Amazonas, evidentemente não se apercebeu da incomum configuração do canal Cassiquiare.\n[…]\nA existência de um lago na região ainda constava dos mapas utilizados pela expedição de Alexander von Humboldt no início do século XIX.\n[…]\nEspantado com a continuidade entre as bacias hidrográficas que tal implicava, o padre Román acompanhou-os ao longo do Cassiquiare até ao rio Negro, regressando depois pela mesma via ao Orinoco.\n[…]\nPouco depois, a 10 de Maio de 1800, o explorador alemão Alexander von Humboldt e o botânico francês Aimé Bonpland atingem a desembocadura do Cassiquiare no rio Negro e exploraram detalhadamente o rio. Na ocasião procedem ao levantamento do seu curso recorrendo à fixação das suas coordenadas através de observações astronómicas.\n[…]\nHumboldt, Alexander von. Personal Narrative of Travels to the Equinoctial Regions of America. Volume 2. Thomasina Ross, translation. 1852: London.\n[…]\nMeyer-Abich, Adolf. Alexander von Humboldt. 1969: Bonn.\n[…]\nCarta do Canal elaborada por Alexander von Humboldt\n[…]\nAlexander von Humboldt e o Casiquiare\n[…]\nReserva de Biosfera Alto Orinoco-Casiquiare",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Parque Indígena do Xingu",
      "descricao": "Terra indígena criada em 1961 no norte de Mato Grosso, às margens do rio Xingu e seus formadores."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que trio de irmãos sertanistas paulistas liderou a campanha que levou à criação do Parque Indígena do Xingu, em 1961?",
    "resposta": "Irmãos Villas-Bôas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Parque_Ind%C3%ADgena_do_Xingu",
      "https://pt.wikipedia.org/wiki/Irm%C3%A3os_Villas-B%C3%B4as"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Ind%C3%ADgena_do_Xingu",
        "situacao": "ok",
        "texto": "O Parque Indígena do Xingu, anteriormente Parque Nacional Indígena do Xingu, é uma terra indígena brasileira, considerada a maior e uma das mais famosas reservas do gênero no mundo.\n[…]\nO parque foi criado em 1961 pelo então presidente brasileiro Jânio Quadros, tendo sido a primeira terra indígena homologada pelo governo federal. Seus principais idealizadores foram os irmãos Villas Bôas, mas quem redigiu o projeto foi o antropólogo e então funcionário do Serviço de Proteção ao Índio, Darcy Ribeiro.\n[…]\nO Parque Indígena do Xingu é considerado a maior e uma das mais famosas reservas do gênero no mundo. Criado em 1961, durante o governo de Jânio Quadros, foi resultado de vários anos de trabalho e luta política, envolvendo os irmãos Villas-Bôas, ao lado de personalidades como o Marechal Rondon, Darcy Ribeiro, Noel Nutels, Café Filho e muitos outros.\n[…]\nCriado o Parque Nacional do Xingu, posteriormente denominado Parque Indígena do Xingu, em 1961, Orlando Villas-Bôas foi nomeado seu administrador-geral. No exercício dessa função, pôde melhorar a assistência aos índios, garantir a preservação da fauna e da flora da região e reaparelhar os postos de assistência.\n[…]\nA épica empreitada dos irmãos Villas-Bôas é um dos mais importantes e polêmicos episódios da antropologia brasileira e da história indígena. A concepção do Parque Indígena do Xingu, os custos para sua implementação e suas drásticas consequências, o constante ataque de madeireiros e latifundiários e as políticas indigenistas do estado brasileiro são temas importantes para a reflexão sobre o significado de toda esta experiência.\n[…]\nEntrevista com Orlando Villas Boas sobre a história do Parque Indígena do Xingu"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Irm%C3%A3os_Villas-B%C3%B4as",
        "situacao": "ok",
        "texto": "Os Irmãos Villas-Bôas, Orlando (1914-2002), Cláudio (1916-1998) e Leonardo Villas-Bôas (1918-1961), foram importantes sertanistas brasileiros.\n[…]\nComo decorrência dos esforços envidados pelos irmãos Villas-Bôas e pelo auxílio das personalidades citadas, foi criado, em 1961, o Parque Nacional do Xingu, a mais importante reserva indígena das Américas.\n[…]\nAo contrário, a partir dos contatos e das relações privilegiadas que tiveram com as populações indígenas do Xingu, os irmãos Villas-Bôas puderam apreender toda a riqueza cultural das mesmas, o que os levou a defender não apenas a sua integridade física, mas também sua integridade cultural.\n[…]\nNo aspecto dos índios, os irmãos Villas-Bôas implantaram uma nova política indigenista, que, basicamente, consiste na defesa dos valores culturais dos índios, como único meio de evitar a marginalização e o desaparecimento dos grupos tribais. A partir da máxima segundo a qual “O índio só sobrevive na sua própria cultura”, os irmãos Villas-Bôas conseguiram implantar uma nova forma de relacionamento entre nossa sociedade e as comunidades indígenas brasileiras.\n[…]\nApós encerrarem suas atividades no Parque Indígena do Xingu, os dois Villas-Bôas (Orlando e Cláudio), aposentados, continuaram atuando como assessores da presidência da Fundação Nacional do Índio (Funai).\n[…]\n1961\t  Criação do Parque Indígena do Xingu e morte de Leonardo Villas-Bôas, de miocardite reumática\n[…]\nEm abril de 2012 foi lançado o longa-metragem Xingu, sobre a vida dos três irmãos. Os irmãos Villas-Bôas foram interpretados por Felipe Camargo, João Miguel e Caio Blat. Cao Hamburger dirigiu o longa.\n[…]\nPágina sobre Orlando Villas-boas"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Rio Niágara",
      "descricao": "Rio curto da fronteira entre Estados Unidos e Canadá, onde ficam as Cataratas do Niágara."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1859, diante de milhares de espectadores, que equilibrista francês atravessou a garganta do rio Niágara andando sobre uma corda bamba?",
    "resposta": "Charles Blondin",
    "distratores": [
      "Harry Houdini",
      "Philippe Petit",
      "Jules Léotard"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_Blondin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_Blondin",
        "situacao": "ok",
        "texto": "Charles Blondin (born Jean François Gravelet, 28 February 1824 – 22 February 1897) was a French tightrope walker and acrobat who achieved international fame in the mid-19th century. Known for crossing the Niagara Gorge on a tightrope, he toured the United States and beyond.\n[…]\nBlondin was born on 28 February 1824 in Hesdin, Pas-de-Calais, France. His birth name was Jean-François Gravelet. He performed professionally as Blondin, although the British press frequently referred to him as \"Charles Blondin\", a name not used in his own publicity. He was also billed as Jean-François Blondin, Chevalier Blondin, and The Great Blondin.\n[…]\nBlondin died from complications of diabetes at his \"Niagara House\" in Ealing, London, on 22 February 1897, at age 72 and was buried in Kensal Green Cemetery. His estate at death was valued at £1,832 (£255,000 as of 2024).\n[…]\nCharles Blondin married Marie Blancherie on 6 August 1846, legitimising their son Aime Leopold, after which they had two more children. He was still legally married to Blancherie when he moved to America.\n[…]\nTwo streets in Northfields, London, are named in his honour: Blondin Avenue and Niagara Avenue; they were formerly the site of part of Hugh Ronalds' renowned nursery. Blondin Park in the same area is also named after him.\n[…]\nBlondin (quarry equipment), a form of aerial ropeway used in Welsh quarries, and named after Charles Blondin, for the resemblance of its high cables to a tightrope.\n[…]\nFind images at the Historic Niagara Digital Collections at Niagara Falls Public Library by using keyword 'Blondin'\n[…]\n\"Blondin\". Theatre and Performance. Victoria and Albert Museum. Archived from the original on 9 January 2011. Retrieved 15 February 2011.\n[…]\nBlondin and his imitators by Andrew McConville"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Charles_Blondin",
        "situacao": "ok",
        "texto": "Jean François Gravelet-Blondin (Hesdin, 28 de fevereiro de 1824 – Londres, 22 de fevereiro de 1897), mais conhecido por Charles Blondin, foi um equilibrista de corda e acrobata de circo francês.\n[…]\nApós um período de afastamento, Blondin reapareceu em 1880, incluindo uma performance como protagonista na temporada de 1893/4 da pantomima \"Jack and the Beanstalk\" no Crystal Palace, organizado por Oscar Barrett. Sua última apresentação foi em Belfast, em 1896. Ele morreu vítima de diabetes em sua \"casa no Niagara\" em Ealing, Londres, em 22 de fevereiro de 1897, aos 73 anos. Charles Blondin está enterrado no Cemitério de Kensal Green.\n[…]\nA prática que se tornou tão popular era também perigosa e, o correspondente pensou ser provavelmente ilegal, particularmente no risco de prejudicar os outros. Ao relatar o caso da queda de uma mulher de uma corda bamba durante uma apresentação em 1869 no circo de Pablo Fanque em Bolton, o The Illustrated London News descreveu a equilibrista, Madame Caroline, como \"Blondin fêmea\".\n[…]\nO cantor e compositor australiano Gareth Liddiard do The Drones escreveu a canção \"Blondin Makes an Omelette\", inspirado na travessia do Niagra por Charles Blondin. Foi relatado que em uma travessia posterior de Blondin, ele empurrou um carrinho de mão contendo um pequeno fogão feito de lâminas de ferro através do desfiladeiro.\n[…]\nDurante a campanha para a eleição presidencial de 1864, Abraham Lincoln se comparou a Blondin na corda bamba, com tudo o que era valioso para a América no carrinho de mão que ele estava empurrando diante dele.\n[…]\nCharles Blondin (em inglês) no Find a Grave",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Represa Alta de Assuã",
      "descricao": "Grande barragem no rio Nilo, no sul do Egito, concluída em 1970, que formou o lago Nasser."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em plena Guerra Fria, que potência financiou e ajudou o Egito a construir a represa alta de Assuã, no rio Nilo?",
    "resposta": "União Soviética",
    "distratores": [
      "Estados Unidos",
      "Reino Unido",
      "França"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Aswan_Dam"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aswan_Dam",
        "situacao": "ok",
        "texto": "The Aswan High Dam, often called simply Aswan Dam, was built between 1960 and 1970 across the Nile in Aswan, Egypt. One of the world's largest embankment dams, it was developed by the Egyptian government with the help of the Soviet Union to control flooding, increase water storage for irrigation, and generate hydroelectricity. The dam was seen as pivotal to the country's industrialization plans.\n[…]\nIn June 1956, the Soviets offered Nasser $1.12 billion at 2% interest for the construction of the dam. On 19 July the U.S. State Department announced that American financial assistance for the High Dam was \"not feasible in present circumstances.\"\n[…]\nThe Soviets also provided technicians and heavy machinery. The enormous rock and clay dam was designed by Nikolai Aleksandrovich Malyshev of the Moscow-based Hydroproject Institute, along with some Egyptian engineers. 25,000 Egyptian engineers and workers contributed to the construction of the dams.\n[…]\nOriginally designed by West German and French engineers in the early 1950s and slated for financing with Western credits, the Aswan High Dam became the USSR's largest and most famous foreign aid project after the United States, the United Kingdom, and the International Bank for Reconstruction and Development (IBRD) withdrew their support in 1956. The first Soviet loan of $100 million to cover construction of coffer dams for diversion of the Nile was extended in 1958.\n[…]\nAn additional $225 million was extended in 1960 to complete the dam and construct power-generating facilities, and subsequently about $100 million was made available for land reclamation. These credits of some $425 million covered only the foreign exchange costs of the project, including salaries of Soviet engineers who supervised the project and were responsible for the installation and testing of Soviet equipment.\n[…]\nAswan Dam Sixth biggest dam"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Represa_Alta_de_Assu%C3%A3o",
        "situacao": "ok",
        "texto": "A Represa Alta de Assuã ou Assuã Alta é uma barragem egípcia localizada no rio Nilo, próxima à cidade de Assuã, que tem a serventia de barreira artificial para a retenção e controle de fluxo fluvial, bem como para produção hidroelétrica.\n[…]\nOs planos para construir sua própria \"Represa Alta\" começaram em 1954, seguindo a revolução, e mudaram as prioridades de desenvolvimento. Inicialmente, tanto os Estados Unidos como a União Soviética estavam interessados na construção da represa, mas isso ocorreu durante o período de tensão crescente da Guerra Fria e também das crescentes rivalidades árabes.\n[…]\nOs Estados Unidos e o Reino Unido ofereceram financiamento à construção da represa alta, por meio de um empréstimo de 270 milhões de dólares, em troca da liderança de Nasser na resolução do conflito árabe-israelense. Como se opunha tanto ao comunismo como ao imperialismo, Nasser apresentava-se como um não alinhado, e buscava trabalhar tanto com os Estados Unidos quanto com a União Soviética pelo benefício dos árabes e egípcios.\n[…]\nEm junho de 1956, os soviéticos ofereceram a Nasser 1,12 bilhão de dólares, à taxa anual de 2 %, para a construção da represa. Em 19 de julho, o departamento de Estado dos Estados Unidos anunciaram que a ajuda financeira estadunidense para a represa \"não era viável nas presentes circunstâncias\".\n[…]\nQuando a Guerra de Suez foi deflagrada, Reino Unido, França e Israel foram bem sucedidos nos ataques aos seus objetivos militares imediatos, mas a pressão dos Estados Unidos e da União Soviética junto às Nações Unidas e em outras instâncias forçaram-nos a desistirem.\n[…]\nEm 1958, a União Soviética liberou o financiamento para o projeto da represa.\n[…]\n«Represa de Assuã no Google Maps»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Rio Congo",
      "descricao": "Grande rio da África Central que deságua no oceano Atlântico, entre Angola e a República Democrática do Congo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que explorador, famoso por ter encontrado Livingstone na África, concluiu em 1877 uma expedição que seguiu o rio Congo até o Atlântico?",
    "resposta": "Henry Morton Stanley",
    "fonte": [
      "https://en.wikipedia.org/wiki/Henry_Morton_Stanley",
      "https://en.wikipedia.org/wiki/Congo_River"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Henry_Morton_Stanley",
        "situacao": "ok",
        "texto": "Sir Henry Morton Stanley (born John Rowlands; 28 January 1841 – 10 May 1904) was a Welsh-American explorer, journalist, soldier, colonial administrator, author, and politician famous for his exploration of Central Africa and search for missionary and explorer David Livingstone.\n[…]\nMainly at his wife's behest, Stanley took up British citizenship and entered Parliament as a Liberal Unionist member for Lambeth North, serving from 1895 to 1900. He disliked politics and made little impression on Parliament. He became Sir Henry Morton Stanley when he was made a Knight Grand Cross of the Order of the Bath in the 1899 Birthday Honours, in recognition of his service to the British Empire in Africa. In 1890, he was given the Grand Cordon of the Order of Leopold by King Leopold II.\n[…]\nStanley died at his home at 2 Richmond Terrace (nowadays part of Richmond House), Whitehall, London on 10 May 1904. At his funeral, he was eulogised by Daniel P. Virmar. His grave is in the churchyard of St Michael and All Angels' Church in Pirbright, Surrey, marked by a large piece of granite inscribed with the words \"Henry Morton Stanley, Bula Matari, 1841–1904, Africa\". Bula Matari translates as \"Breaker of Rocks\" or \"Breakstones\" in Kongo and was Stanley's name among locals in Congo.\n[…]\nfreshwater snail Gabbiella stanleyi (E. A. Smith, 1877)\n[…]\nWorks by Henry Morton Stanley at Project Gutenberg\n[…]\nWorks by or about Henry Morton Stanley at the Internet Archive\n[…]\nWorks by Henry Morton Stanley at LibriVox (public domain audiobooks)\n[…]\nSir Henry Morton Stanley (1841–1904), Explorer and journalist Sitter associated with 27 portraits\n[…]\nCollected journalism of Henry Stanley at The Archive of American Journalism\n[…]\nNewspaper clippings about Henry Morton Stanley in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Congo_River",
        "situacao": "ok",
        "texto": "The Congo River, formerly also known as the Zaire River, is the second-longest river in Africa, shorter only than the Nile, as well as the third largest river in the world by discharge volume, following the Amazon and Ganges–Brahmaputra rivers. It is the world's deepest recorded river, with measured depths of around 220 m (720 ft). The Congo–Lualaba–Luvua–Luapula–Chambeshi River system has an over\n[…]\nThe Congo flows generally toward the northwest from Kisangani just below the Boyoma Falls, then gradually bends southwestward, passing by Mbandaka, joining with the Ubangi River and running into the Pool Malebo (Stanley Pool).\n[…]\nThe Europeans had not reached the central regions of the Congo basin from either the east or west, until Henry Morton Stanley's expedition of 1876–77, supported by the Committee for Studies of the Upper Congo. At the time one of the last open questions of the European exploration of Africa was whether the Lualaba River fed the Nile (Livingstone's theory), the Congo, or even the Niger River.\n[…]\nFrom this point, the tribes were no longer cannibals but possessed firearms, apparently as a result of Portuguese influence. Some four weeks and 1,900 kilometres (1,200 mi) later he reached Stanley Pool (now Pool Malebo), the site of the present day cities Kinshasa and Brazzaville. Further downstream were the Livingstone Falls, misnamed as Livingstone had never been on the Congo: a series of 32 falls and rapids with an elevation change of 270 metres (900 ft) over 350 kilometres (220 mi).\n[…]\nJeal, Tim (2007). Stanley: The Impossible Life of Africa's Greatest Explorer. London: Faber & Faber. ISBN 978-0-571-22102-8.\n[…]\nAudio slideshow: The River Congo: Following in Explorer Sir Henry Morton Stanley's Footsteps—Tim Butcher recounts his trip through the Congo on the route of 19th-century explorer Sir Henry Morgan Stanley.\n[…]\nThe Congo Project, American Museum of Natural History"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Henry_Morton_Stanley",
        "situacao": "ok",
        "texto": "Henry Morton Stanley (Denbigh, País de Gales, 28 de janeiro de 1841 – Londres, 10 de maio de 1904) foi um jornalista que se tornou famoso pela sua viagem através da África em busca do explorador britânico David Livingstone e pelo seu papel na criação do Estado Livre do Congo.\n[…]\nComo correspondente do Herald, Stanley foi instruído em 1869 pelo filho de Bennett (que tinha substituído o pai na gestão do jornal) para descobrir o missionário e explorador David Livingstone, que tinha chegado a África à procura da nascente do rio Nilo e de quem não havia notícias havia algum tempo. Stanley perguntou quanto poderia gastar e a resposta foi \"Levante £ 1 000 agora e, quando as gastar, levante mais mil e quando as terminar, mais mil e continue a gastar — MAS ENCONTRE LIVINGSTONE!\"\n[…]\nNesta segunda expedição (1874-1877), Stanley chegou ao Lago Tanganica onde ele já sabia existir uma das nascentes do Congo e daí navegou por 1 600 km Lualaba abaixo (alto Congo) até ao grande lago no rio que ele chamou de Stanley Pool (agora chamado de Lago Malebo, junto do qual se encontram as cidades de Brazavile e Quinxassa).\n[…]\nNo entanto, estas aparentes vitórias não pouparam Stanley de muita controvérsia sobre violência e brutalidade durante as suas expedições a África. Apesar dos seus esforços para se defender, ficou patente sua opinião de que \"o selvagem só respeita a força, a intrepidez e o poder de decisão.\" Esta opinião pode ter sido a causa de Stanley ser conhecido no Congo como Bula Matari, ou “O Destruidor de Rochas”).\n[…]\nO bisneto de Henry, Richard Stanley, é um conhecido realizador de cinema sul-africano.\n[…]\nThe Autobiography of Henry M. Stanley (ed. por Dorothy Stanley) Nova Iorque, 1909 e 1969.\n[…]\nArquivo Henry Morton Stanley, Museu real da África central",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Rio Hudson",
      "descricao": "Rio do estado de Nova York que deságua no Atlântico junto à ilha de Manhattan."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1609, a serviço de uma companhia holandesa, que navegador inglês subiu o grande rio de Nova York que hoje leva o seu nome?",
    "resposta": "Henry Hudson",
    "fonte": [
      "https://en.wikipedia.org/wiki/Henry_Hudson",
      "https://en.wikipedia.org/wiki/Hudson_River"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Henry_Hudson",
        "situacao": "ok",
        "texto": "Henry Hudson (c. 1565 – disappeared 23 June 1611) was an English sea explorer and navigator during the early 17th century, best known for his explorations of present-day Canada and parts of the Northeastern United States.\n[…]\nIn 1607 and 1608, Hudson made two attempts on behalf of English merchants to find a rumoured Northeast Passage to Cathay via a route above the Arctic Circle. In 1609, he landed in North America on behalf of the Dutch East India Company and explored the region around the modern New York metropolitan area.\n[…]\nOn 6 September 1609, John Colman of his crew was killed by natives with an arrow to his neck. Hudson sailed into the Upper New York Bay on 11 September, and the following day encountered a large group of 28 Lenape canoes occupied by Lenape Natives, from whom he bought oysters and beans. He then began a journey up what is now known as the Hudson River. Over the next ten days his ship ascended the river, reaching a point near Stuyvesant Landing (Old Kinderhook).\n[…]\nIn 1612, Nicolas de Vignau claimed he saw wreckage of an English ship on the shores of James Bay, located on the southern end of Hudson Bay—while this was discounted at the time by Samuel de Champlain, historians believe it may have credence.\n[…]\nAlong with Hudson Bay and Hudson Strait in Canada, many other topographical features and landmarks are named for Hudson. The Hudson River in New York and New Jersey is named after him, as are Hudson County, New Jersey, the Henry Hudson Bridge, the Henry Hudson Parkway, and the city of Hudson, New York.\n[…]\n\"Henry Hudson\" . Encyclopædia Britannica. Vol. XII (9th ed.). 1881. pp. 332–333.\n[…]\nWorks about Henry Hudson at Open Library\n[…]\nWorks by or about Henry Hudson at the Internet Archive"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hudson_River",
        "situacao": "ok",
        "texto": "The Hudson River is a 315-mile (507 km) river that flows from north to south largely through eastern New York state. It originates in the Adirondack Mountains at Henderson Lake in the town of Newcomb, and flows south to New York Bay, a tidal estuary between New York City and Jersey City, before draining into the Atlantic Ocean. The river marks out the border between the U.S. states of New York and\n[…]\nThe Hudson River runs through the Munsee (Lenape), Mohican, and Mohawk (Haudenosaunee) homelands. Prior to European exploration, the river was known as the Mahicannittuk by the Mohicans, Ka'nón:no by the Mohawks, and Muhheakantuck by the Lenape. The river was subsequently named after Henry Hudson, an Englishman sailing for the Dutch East India Company who explored it in 1609, and after whom Hudson Bay in Canada is also named.\n[…]\nIn 1609 the Dutch East India Company financed English navigator Henry Hudson in his search for the Northeast Passage, but thwarted by sea ice in that direction, he sailed westward across the Atlantic in pursuit of a Northwest Passage. During the search, Hudson sailed up the river that would later be named after him.\n[…]\nIn general, Hudson River School artists believed that nature in the form of the American landscape was an ineffable manifestation of God, though the artists varied in the depth of their religious conviction. Their reverence for America's natural beauty was shared with contemporary American writers such as Henry David Thoreau and Ralph Waldo Emerson.\n[…]\nThe Hudson River Day Line offered passenger service on steamboats from New York City to Albany from 1863 until 1962 when it was purchased by Circle Line Sightseeing Cruises.\n[…]\nAdams, Arthur G. (1996). The Hudson River Guidebook (Second ed.). New York: Fordham University Press. ISBN 0-8232-1679-9. LCCN 96-1894. For a comprehensive guide to aspects of the river.\n[…]\nHudson River Maritime Museum"
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
    "indice": 27,
    "ancora": {
      "nome": "Lago Nasser",
      "descricao": "Lago artificial no rio Nilo, entre o Egito e o Sudão, formado pela represa alta de Assuã."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O enorme lago artificial formado pela represa de Assuã, no Nilo, homenageia qual presidente egípcio?",
    "resposta": "Gamal Abdel Nasser",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lake_Nasser"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Nasser",
        "situacao": "ok",
        "texto": "Lake Nasser (Arabic: بحيرة ناصر Boħeiret Nāṣer, Egyptian Arabic: [boˈħeiɾet ˈnɑːseɾ]) is a large reservoir in southern Egypt and northern Sudan. It was created by the construction of the Aswan High Dam and is one of the largest man-made lakes in the world. The lake has become an important economic resource in Egypt, improving agriculture and supporting  robust fishing and tourism industries. The l\n[…]\nThe construction of the Aswan High Dam began in 1960 at the behest of Lake Nasser's namesake and the second president of Egypt, Gamal Abdel Nasser. It was President Anwar Sadat who inaugurated the lake and dam in 1971. Finished in 1970, the Aswan High Dam across the Nile was built to replace the insufficient Aswan Low Dam built in 1902.\n[…]\nThe most famous of those that were rescued were temples at Abu Simbel which were broken down and relocated safely off the coast of Lake Nasser.\n[…]\nWith the beginning of construction of the Grand Ethiopian Renaissance Dam (GERD) in 2011, Egypt faced the threat of water shortage as the new upstream dam would reduce the amount of water flowing downstream to Lake Nasser. As this flow of water from the Nile into Egypt and Sudan constitutes a major part in their economy, it's reduction due to the construction of the GERD could potentially be devastating for the nations.\n[…]\nIf Egypt, Sudan, and Ethiopia are unable to work out possible solutions for this water problem, the GERD could pose an existential threat to Lake Nasser, having a destabilizing effect on Egypt and Sudan who rely on it for many sectors in their economies.\n[…]\nAniba (Nubia), a region flooded by Lake Nasser\n[…]\nNubia, region flooded by Lake Nasser\n[…]\nAswan High Dam, dam that created Lake Nasser\n[…]\nToshka Lakes, recently formed endorheic lakes caused by periodic overflow from Lake Nasser\n[…]\nLake Nasser at Encyclopædia Britannica\n[…]\n360 Degree Panorama of Lake Nasser Archived 1 February 2014 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lago_Nasser",
        "situacao": "ok",
        "texto": "O lago Nasser (em árabe: بحيرة ناصر Boħēret Nāṣer, Árabe egípcio: [boˈħeːɾet ˈnɑːsˤeɾ]) é um vasto reservatório situado no sul do Egito e no norte do Sudão. É um dos maiores lagos artificiais do mundo. Originalmente, o Sudão era contra a construção do lago, porque invadiria terras no norte, onde vivia o povo núbio. Eles teriam que ser reassentados. No final, as terras do Sudão perto da área do lag\n[…]\nO lago foi criado como resultado da construção da Represa Alta de Assuã através das águas do Nilo entre 1958 e 1970.\" O lago recebeu o nome de Gamal Abdel Nasser, um dos líderes da Revolução Egípcia de 1952 e o segundo Presidente do Egito, que iniciou o projeto de Alta Barragem. Foi o presidente Anwar Al Sadat quem inaugurou o lago e a represa em 1970.\n[…]\nO suprimento de água do lago Nasser produz eletricidade, e existe a preocupação de que a diminuição da água que flui para o lago Nasser afete adversamente a capacidade da represa de Assuã de gerar eletricidade. Existem estações de bombeamento que controlam a água que entra no lago Nasser, e atualmente esse projeto gera dez bilhões de quilowatt-hora de energia hidrelétrica a cada ano para os egípcios.\n[…]\nUm recinto de peixes foi construído no lago Nasser. A pesca entre os turistas, especialmente a perca-do-nilo, tornou-se cada vez mais popular, tanto na costa quanto nos barcos. Embora o Abul-Simbel e outros templos tenham sido fisicamente movidos para terrenos mais altos e para diferentes locais para impedir sua destruição pelo novo lago, outros locais antigos do Egito, como a enorme fortaleza de Buém, foram inundados e agora estão debaixo d'água.\n[…]\nHabib, O.A.; Shehata, M.; Zaki, M.; Ammar, H.; Rahman, S.H. (2009). Building Fish Enclosure in Lake Nasser. [S.l.]: Autoridade de Desenvolvimento do Lago Nasser. Consultado em 15 de outubro de 2016\n[…]\nLake Nasser (em inglês) na Encyclopædia Britannica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Represa Hoover",
      "descricao": "Grande barragem no rio Colorado, na divisa entre Nevada e Arizona, que forma o lago Mead."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A represa no rio Colorado que forma o lago Mead, na divisa de Nevada com o Arizona, leva o nome de qual presidente americano?",
    "resposta": "Herbert Hoover",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hoover_Dam"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hoover_Dam",
        "situacao": "ok",
        "texto": "The Hoover Dam is a concrete arch–gravity dam in the Black Canyon of the Colorado River, on the boundary between the U.S. states of Nevada and Arizona. Constructed between 1931 and 1936, during the Great Depression, it was dedicated on September 30, 1935, by President Franklin D. Roosevelt. Its construction was the result of a massive effort involving thousands of workers, and cost over 96 lives.\n[…]\nBills passed by Congress during its construction referred to it as Hoover Dam (after President Herbert Hoover), but the Roosevelt administration named it Boulder Dam. In 1947, Congress reinstated the name Hoover Dam.\n[…]\nHoover Dam impounds Lake Mead and is located near Boulder City, Nevada, a municipality originally constructed for workers on the construction project, about 30 mi (48 km) southeast of Las Vegas, Nevada. The dam's generators provide power for public and private utilities in Nevada, Arizona, and California. Hoover Dam is a major tourist attraction, with 7 million tourists a year. The heavily traveled U.S.\n[…]\nIn 1922, representatives of seven states met with then-Secretary of Commerce Herbert Hoover. Initial talks produced no result, but when the Supreme Court handed down the Wyoming v. Colorado decision undermining the claims of the upstream states, they became anxious to reach an agreement. The resulting Colorado River Compact was signed on November 24, 1922.\n[…]\nLake Mead and downstream releases from the dam also provide water for both municipal and irrigation uses. Water released from the Hoover Dam eventually reaches several canals. The Colorado River Aqueduct and Central Arizona Project branch off Lake Havasu while the All-American Canal is supplied by the Imperial Dam. In total, water from Lake Mead serves 18 million people in Arizona, Nevada, and California and supplies the irrigation of over 1,000,000 acres (400,000 ha) of land.\n[…]\nHoover Dam at Structurae"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Represa_Hoover",
        "situacao": "ok",
        "texto": "A Barragem Hoover ou Represa Hoover (em inglês: Hoover Dam) é uma represa localizada entre os estados de Nevada e Arizona, nos Estados Unidos, no rio Colorado. A represa, localizada a 48 km de Las Vegas, foi nomeada em homenagem a Herbert Hoover, o 31.º Presidente dos Estados Unidos, que foi muito importante no processo de construção da represa.\n[…]\nA albufeira (ou \"açude\" em português brasileiro) que funciona como reservatório é o Lago Mead, que presta uma homenagem a Elwood Mead. A Barragem de Hoover é considerada o maior projeto dos Estados Unidos da América.\n[…]\nA represa foi designada, em 8 de abril de 1981, uma estrutura do Registro Nacional de Lugares Históricos bem como, em 20 de agosto de 1985, um Marco Histórico Nacional.\n[…]\nA cidade de Boulder City foi construída pelo Gabinete de Reclamações dos EUA para abrigar os trabalhadores que auxiliavam na construção da represa. Uma lembrança dos tempos da construção da represa é a proibição dos jogos de azar no território da cidade, sendo que somente Panaca também proíbe o jogo no estado de Nevada. Outra lei que havia na cidade era a proibição das bebidas alcoólicas, derrubada em 1969.\n[…]\nA construção foi iniciada em 20 de abril de 1931 e terminada em 1 de março de 1936, dois anos antes do prazo estipulado, custou 48 milhões de dólares, aproximadamente 676 milhões de dólares atuais (devido à inflação) e morreram 96 pessoas durante todo o processo. A represa mede 221,4 m de altura, 379,2 m de largura, 200 m de espessura na base e 15 m no topo. Sua capacidade instalada de produção é de 2 078 MW.\n[…]\nMarco Histórico Nacional no Arizona\n[…]\nMarco Histórico Nacional em Nevada",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Baía de Guanabara",
      "descricao": "Baía do litoral fluminense, às margens da qual ficam as cidades do Rio de Janeiro e de Niterói."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em janeiro de 1502, navegadores portugueses entraram numa baía que tomaram pela foz de um rio. Que nome deram ao lugar?",
    "resposta": "Rio de Janeiro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ba%C3%ADa_de_Guanabara",
      "https://pt.wikipedia.org/wiki/Rio_de_Janeiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ba%C3%ADa_de_Guanabara",
        "situacao": "ok",
        "texto": "Baía de Guanabara é uma baía oceânica localizada no estado do Rio de Janeiro, no sudeste do Brasil.\n[…]\nO relevo que a enquadra, de contornos irregulares, conforma um porto de abrigo natural, favorável à atividade económica humana, da qual são exemplos as cidades do Rio de Janeiro e de Niterói.\n[…]\nA bacia que drena para a Baía de Guanabara tem uma superfície de 4 000 km², integrada pelos municípios de Duque de Caxias, São João de Meriti, Belford Roxo, Nilópolis, São Gonçalo, Magé, Guapimirim, Itaboraí, Tanguá e partes dos municípios do Rio de Janeiro, Niterói, Nova Iguaçu, Cachoeiras de Macacu, Rio Bonito e Petrópolis, a maioria localizada na Região Metropolitana do Rio de Janeiro.\n[…]\nEsta região abriga cerca de dez milhões de habitantes, o equivalente a 80 por cento da população do estado do Rio de Janeiro e apresentou, no período 1980-1991, a maior taxa de crescimento do País. Mais de 2/3 dessa população, 7,6 milhões de habitantes, habitam na bacia da Baía de Guanabara. A partir da década de 1990, começou a ser objeto de um grande projeto de recuperação ambiental, com verbas do Banco Interamericano de Desenvolvimento e do Governo do Japão.\n[…]\nComo exemplo, ocorreu em janeiro de 2000 um vazamento de 1,3 milhão de litros de óleo na Baía de Guanabara, causando grandes danos aos manguezais, praias e à população de pescadores, ou em março de 2006, diante de uma mortandade de peixes e óleo invadindo a praia de Ramos, os moradores da região acusando o Aeroporto Internacional Antônio Carlos Jobim por lavar os aviões e deixar óleo escoar para as águas da baía.\n[…]\nBatalhas do Rio de Janeiro"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "Rio de Janeiro, simplesmente referido como Rio, é a capital do estado brasileiro do Rio de Janeiro. Um dos maiores destinos turísticos internacionais no Brasil, na América Latina e também do Hemisfério Sul, é uma das primeiras cidades do país. É a segunda maior metrópole do Brasil (depois de São Paulo), a sétima maior da América e a décima oitava do mundo. Sua população segundo o censo de 2022 do \n[…]\nA Baía de Guanabara, à margem da qual a cidade se organizou, foi descoberta pelo explorador português Gaspar de Lemos em 1 de janeiro de 1502. Embora se afirme que o nome \"Rio de Janeiro\" tenha sido escolhido em virtude de os portugueses acreditarem tratar-se a baía da foz de um rio, na verdade, à época, não havia qualquer distinção de nomenclatura entre rios, sacos e baías — motivo pelo qual foi o corpo d'água corretamente designado como rio.\n[…]\nO litoral do atual estado do Rio de Janeiro era habitado por índios do tronco linguístico macro-jê há milhares de anos. Por volta do ano 1000, a região foi conquistada por povos de língua tupi procedentes da Amazônia. Um destes povos, os tamoios, também conhecidos como tupinambás, ocupava a região ao redor da Baía de Guanabara no século XVI, quando os portugueses chegaram à região.\n[…]\nA Baía de Guanabara, à margem da qual a cidade foi fundada, foi descoberta pelo explorador português Gaspar de Lemos em 1.º de janeiro de 1502. No entanto, em 1.º de novembro de 1555, os franceses, capitaneados por Nicolas Durand de Villegagnon, apossaram-se da Baía da Guanabara, estabelecendo uma colônia na ilha de Sergipe (atual ilha de Villegagnon). Lá, ergueram o Forte Coligny, enquanto consolidavam alianças com os índios tupinambás locais.\n[…]\nFluminenses da cidade do Rio de Janeiro\n[…]\nPlanejamento estratégico do Rio de Janeiro\n[…]\nLista de consulados no Rio de Janeiro"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Rio Paraná",
      "descricao": "Grande rio sul-americano formado no Brasil, onde fica a usina de Itaipu, que segue pelo Paraguai e pela Argentina até o rio da Prata."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na língua tupi, o nome do rio Paraná quer dizer que ele é semelhante a quê?",
    "resposta": "Ao mar",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_Paran%C3%A1"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Paran%C3%A1",
        "situacao": "ok",
        "texto": "Rio Paraná é o principal curso de água formador da Bacia do rio Prata. É considerado, em sua extensão total até a foz do Estuário da Prata, o oitavo maior rio do mundo em extensão (4.880 km) e o maior da América do Sul depois do Amazonas. Sua bacia hidrográfica abrange mais de 10% de todo o território brasileiro, sendo a continuação do rio Grande, recebendo o nome de rio Paraná na confluência com \n[…]\nO topônimo \"Paraná\" é procedente do termo da língua geral paraná, que significa \"rio\". Na língua tupi-guarani, significa \"como o mar\".\n[…]\nO nome da bacia sedimentar, bacia do Paraná, é derivado do rio Paraná.\n[…]\nForam criadas as APAs Intermunicipais, a Estação Ecológica de Ilha Grande, O Parque Nacional de Ilha Grande, a Área de Proteção Ambiental das Ilhas e Várzeas do Rio Paraná e o Parque Estadual das Várzeas do Rio Ivinhema.\n[…]\nAinda nos anos 1990, durante o I Congresso Brasileiro de Unidades de Conservação, os pesquisadores do Nupelia João Batista Campos e Ângelo Agostinho apresentaram a primeira proposta de Corredor de Biodiversidade do Rio Paraná conectando o mosaico de áreas protegidas no remanescente do rio Paraná ao Parque Nacional do Iguaçu.\n[…]\nNo início do movimento pela preservação do remanescente do rio Paraná, havia apenas 6% de floresta nativa na região. Vinte anos depois da criação das primeiras unidades de conservação, em 2014,  as áreas de floresta já ocupavam 11% do território protegido. Os impactos da ocupação irregular decorrente das invasões das ilhas por veranistas foram substancialmente revertidos até por volta de 2017.\n[…]\nAproximadamente 270 casas foram demolidas pelo Instituto Chico Mendes de Conservação da Biodiversidade e Instituto Ambiental do Paraná em parceria com o Ministério Público Federal.\n[…]\nInformações e mapas da bacia do rio Paraná"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Riacho do Ipiranga",
      "descricao": "Curso d'água de São Paulo às margens do qual Dom Pedro proclamou a Independência do Brasil em 1822."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em tupi, o nome Ipiranga, do riacho da Independência, quer dizer rio de que cor?",
    "resposta": "Vermelho",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Riacho_do_Ipiranga"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Riacho_do_Ipiranga",
        "situacao": "ok",
        "texto": "Riacho do Ipiranga é um córrego localizado na cidade de São Paulo, no Brasil. Dá o seu nome ao bairro onde se situa, ao Monumento do Ipiranga e ao Museu do Ipiranga, todos localizados em suas circunvizinhanças. Junto às margens desse curso d'água é que simbolicamente foi declarada a Independência do Brasil pelo então príncipe e herdeiro do trono de Portugal, Dom Pedro I, em 7 de setembro de 1822.\n[…]\n\"Ipiranga\" é uma palavra de origem tupi que significa \"rio vermelho\", através da junção dos termos 'y (rio), pirang (vermelho), e o sufixo substantivador -a, que não se traduz. Recebeu esse nome certamente devido a suas águas turvas, enlamaçadas.\n[…]\nAlém disso, o referido riacho também é retratado na icônica pintura Independência ou Morte, de Pedro Américo, estando reposicionado à frente na tela, de maneira a receber certo destaque na cena representada.\n[…]\nNos dias atuais, assim como todos os demais rios metropolitanos de São Paulo, o córrego sofre com a poluição, por receber altas quantidades de dejetos industriais e domésticos ao longo de seu curto trajeto de aproximadamente nove quilômetros. Em 2012, foi divulgado que o riacho estava tomado por sujeira e lixo, e a qualidade da água foi considerada \"péssima\" pela Companhia Ambiental do Estado de São Paulo naquele ano; a poluição do riacho também foi noticiada em 2017.\n[…]\nTendo em vista este paradoxo, segundo a historiadora Cecília Helena Salles Oliveira, docente da Universidade de São Paulo, parece que \"a relação do brasileiro com o riacho do Ipiranga é 'dupla'\", ou seja: \"Por um lado, há o reconhecimento de que é um lugar diferente, porque estas paragens simbolizam o nascimento de uma nação. [...] Mas por outro lado, é profundo desalento, porque o riacho está muito sujo, recebe águas servidas; nas épocas de grandes chuvas, ele alaga, continua alagando\".\n[…]\nIndependência do Brasil\n[…]\nMonumento do Ipiranga\n[…]\nMuseu do Ipiranga"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Rio Piracicaba",
      "descricao": "Rio do interior paulista, afluente do Tietê, que atravessa a cidade de Piracicaba."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome tupi de Piracicaba, rio e cidade do interior paulista, descreve o lugar onde o quê para?",
    "resposta": "O peixe",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Piracicaba",
      "https://pt.wikipedia.org/wiki/Rio_Piracicaba"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Piracicaba",
        "situacao": "ok",
        "texto": "Piracicaba é um município brasileiro no interior do estado de São Paulo, Região Sudeste do país. É a principal cidade da Região Metropolitana de Piracicaba (RMP) e está situada a cerca de 150 km a noroeste da capital paulista. Ocupa uma área de pouco mais de 1 378 km², sendo aproximadamente 245 km² em área urbana e população de 438 827 habitantes, sendo assim o 13.º município mais populoso do esta\n[…]\nO nome do município vem da língua geral paulista e significa \"o lugar de chegada do peixe\", através da junção dos termos pirá (\"peixe\"), syk (\"chegar\") , ab (sufixo que significa o lugar em que algo é feito ou acontece) e -a (sufixo substantivador). É uma referência às quedas do rio Piracicaba, que bloqueiam a migração (piracema) dos peixes.\n[…]\nÉ relevante notar que, conforme Eduardo Navarro em seu Dicionário de Tupi Antigo (2013), o termo provém da língua geral, que é um desenvolvimento histórico do tupi antigo e, portanto, mais recente. No tupi antigo, syk significava apenas chegar por terra (chegar por água, como no caso dos peixes, seria îepotar). O século em que foi dado o nome de Piracicaba ao lugar (século XVIII) coincide com a época em que a língua geral paulista era falada, e não mais o tupi antigo ou clássico.\n[…]\nPiracicaba tem uma boa malha rodoviária que a liga a várias cidades do interior paulista e até a capital, tendo acesso a rodovias de importância estadual e até nacional através de rodovias vicinais pavimentadas e com pista dupla, como a Rodovia dos Bandeirantes e a Rodovia Anhanguera. O Terminal Rodoviário de Piracicaba é um dos principais de sua região, sendo que foi inaugurado na década de 1990 e em feriados e períodos de alta temporada para viagens o movimento chega a crescer entre 30% e 40%.\n[…]\nPiracicaba conta também com revistas criadas na cidade, como a revista Trifatto, e a revista Arraso.\n[…]\nPaulistas de Piracicaba\n[…]\n«Diocese de Piracicaba»\n[…]\n«Piracicaba.Tur»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Piracicaba",
        "situacao": "desambiguacao",
        "texto": "Piracicaba ou Rio de Piracicaba pode referir-se a:\n\nBrasil\nPiracicaba — município do estado de São Paulo\nRio Piracicaba (município) — município do estado de Minas Gerais\nRio de Lágrimas — música sertaneja, conhecida como \"O Rio de Piracicaba\"\nRio Piracicaba (São Paulo) — rio de São Paulo\nRio Piracicaba (rio de Minas Gerais) — rio de Minas Gerais\n\n\n== Ver também ==\nTodas as páginas cujo título come"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Delta do Nilo",
      "descricao": "Grande planície em forma de leque no norte do Egito, onde o rio Nilo se divide antes de chegar ao Mediterrâneo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra delta, usada para certas fozes, nasceu porque os gregos acharam a foz de qual rio parecida com essa letra?",
    "resposta": "Nilo",
    "fonte": [
      "https://en.wikipedia.org/wiki/River_delta",
      "https://en.wikipedia.org/wiki/Nile_Delta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/River_delta",
        "situacao": "ok",
        "texto": "A river delta is a landform, typically triangular, created by the deposition of the sediments that are carried by the waters of a river, where the river merges with a body of slow-moving water or with a body of stagnant water. The creation of a river delta occurs at the river mouth, where the river merges into an ocean, a sea, or an estuary, into a lake, a reservoir, or (more rarely) into another \n[…]\nA river delta is so named because the shape of the Nile Delta approximates the triangular uppercase Greek letter delta. The triangular shape of the Nile Delta was known to audiences of classical Athenian drama; the tragedy Prometheus Bound by Aeschylus refers to it as the \"triangular Nilotic land\", though not as a \"delta\".\n[…]\nThe Greek historian Polybius likened the land between the Rhône and Isère rivers to the Nile Delta, referring to both as islands, but did not apply the word delta. According to the Greek geographer Strabo, the Cynic philosopher Onesicritus of Astypalaea, who accompanied Alexander the Great's conquests in India, reported that Patalene (the delta of the Indus River) was \"a delta\" (Koine Greek: καλεῖ δὲ τὴν νῆσον δέλτα, romanized: kalei de tēn nēson délta, lit. 'he calls the island a delta').\n[…]\nWhile nearly all deltas have been impacted to some degree by humans, the Nile Delta and Colorado River Delta are some of the most extreme examples of the devastation caused to deltas by damming and diversion of water.\n[…]\nNile Delta – African river delta bordering the Mediterranean\n[…]\nRegressive delta\n[…]\nClaudia Kuenzer,  Valentin Heimhuber, Juliane Huth, Stefan Dech: Remote Sensing for the Quantification of Land Surface Dynamics in Large River Delta Regions - A Review. Remote Sensing, 11(17), 2019, S. 1-42. doi: 10.3390/rs11171985. ISSN 2072-4292.\n[…]\nhttp://www.wisdom.eoc.dlr.de WISDOM Water-related Information System for the Sustainable Development of the Mekong Delta"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nile_Delta",
        "situacao": "ok",
        "texto": "The Nile Delta (Arabic: دلتا النيل, Delta an-Nīl or simply الدلتا, ad-Delta) is the delta formed in Lower Egypt where the Nile River spreads out and drains into the Mediterranean Sea. It is one of the world's largest deltas. From Alexandria in the west to Port Said in the east; it covers 240 km (150 mi) of the Mediterranean coastline and is a rich agricultural region. From north to south the delta\n[…]\nThe delta experiences its hottest temperatures in July and August, with a maximum average of 34 °C (93 °F). Winter temperatures normally range from 9 °C (48 °F) at nights to 19 °C (66 °F) in the daytime. With cooler temperatures and some rain, the Nile Delta region becomes quite humid during the winter months.\n[…]\nA 30 cm (12 in) rise in sea level could affect about 6.6% of the total land cover area in the Nile Delta region. At 1 m (3 ft 3 in) sea level rise, an estimated 887 thousand people could be at risk of flooding and displacement and about 100 km2 (40 sq mi) of vegetation, 16 km2 (10 sq mi) wetland, 402 km2 (160 sq mi) cropland, and 47 km2 (20 sq mi) of urban area land could be destroyed, flooding about 450 km2 (170 sq mi).\n[…]\nSome areas of the Nile Delta's agricultural land have been rendered saline by sea level rise; farming has been abandoned in some places, while in others sand has been brought in to reduce the effect. In addition to agriculture, the delta's ecosystems and tourist industry could be hurt by global warming. Food shortages resulting from climate change could lead to seven million \"climate refugees\" by the end of the 21st century.\n[…]\nThe Nile Delta forms part of these governorates:\n[…]\nLarge cities located in the Nile Delta:\n[…]\n\"Nile Delta flooded savanna\". Terrestrial Ecoregions. World Wildlife Fund.\n[…]\nAdaptationlearning.net: UN project for managing sea level rise risks in the Nile Delta\n[…]\n\"The Nile Delta\". Keyway Bible Study. Archived from the original on 2 August 2010."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Delta",
        "situacao": "ok",
        "texto": "Em geografia, o delta é o local formado por vários canais (braços do leito do rio) onde um rio deságua em outro. Esse tipo de foz é comum em rios de planícies, devido à pequena declividade e, consequentemente, pequena capacidade de descarga de água, o que favorece o acúmulo de areia e aluviões na foz do rio.\n[…]\nUm delta típico é o do rio Nilo (no Egito) que tem a perfeita forma de um leque, ou triângulo, que é o mesmo formato da letra grega maiúscula com esse nome (Δ), de onde provém esta designação.\n[…]\nNem todos os deltas se situam em costas marítimas: o delta do rio Okavango, em Botswana, por exemplo, é um delta interior.\n[…]\nNesses casos os rios dividem-se em múltiplos ramos para mais tarde se reunirem e continuarem para o mar. Outros exemplos são o delta interior do Níger e o delta Peace–Athabasca. O rio Amazonas também tem um delta interior antes da ilha de Marajó, e o rio Danúbio tem um no vale junto da fronteira Eslováquia-Hungria, entre Bratislava e Iža.\n[…]\nDelta do Nilo\n[…]\nDelta do Danúbio\n[…]\nDelta do Zambeze\n[…]\nDelta do Ganges–Brahmaputra\n[…]\nDelta do Mississippi\n[…]\nDelta do Parnaíba\n[…]\nDelta do Amazonas\n[…]\nDelta do Jacuí\n[…]\nDelta do Okavango (delta interior)\n[…]\nDelta do Níger\n[…]\nDelta interior do Níger (delta interior)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Salto Ángel",
      "descricao": "Queda d'água no Parque Nacional Canaima, na Venezuela, considerada a mais alta queda ininterrupta do mundo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O Salto Ángel, cachoeira altíssima da Venezuela, não deve seu nome a um anjo. Ele homenageia quem?",
    "resposta": "Jimmie Angel, aviador americano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Angel_Falls"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Angel_Falls",
        "situacao": "ok",
        "texto": "Angel Falls   (Spanish: Salto Ángel; Pemon: Körepakupai Vená) is a waterfall in Venezuela.\n[…]\nThey were not known to the outside world until American aviator Jimmie Angel flew over them on 16 November 1933 on a flight while he was searching for a valuable ore bed.\n[…]\nThe name of the waterfall—\"Salto del Ángel\"—was first published on a Venezuelan government map in December 1939.\n[…]\nThe first person to jump from Angel Falls was Max Botto of Venezuela in November 1983. The first person to complete a base jump from Angel Falls was American Jerry Bird; even though he leaped after Max Botto, he deployed his parachute later and subsequently landed first.\n[…]\nThe American fantasy-romance film What Dreams May Come (1998), starring Robin Williams, Cuba Gooding Jr, and Annabella Sciorra, is set in Venezuela and shows Angel Falls.\n[…]\nIn November 1983, Mark III Productions of Miami, Florida filmed a short documentary about an expedition to BASE jump from Angel Falls, led by American skydiver Jerry Bird. It was broadcast on ABC's Ripley's Believe It or Not! in 1985.\n[…]\nThe 1990 film Arachnophobia was partly set at Angel Falls.\n[…]\nIn 1997, Folco Quilici wrote Cielo verde a novel – long present in the bestseller list in Italy. Spanish writer Alberto Vázquez-Figueroa covered Jimmie Angel's adventures in his 1998 novel Ícaro— ISBN 9788408025023, later translated into several foreign languages. Another book that details how Angel Falls got its name is Truth or Dare: The Jimmie Angel Story, written by Jan-Willem de Vries ISBN 9781419673665.\n[…]\nVideo Salto Angel filmed by Hakuna Matata. 2023"
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
    "indice": 35,
    "ancora": {
      "nome": "Rio Moldava",
      "descricao": "Rio mais longo da República Tcheca, que atravessa a cidade de Praga."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O rio que atravessa Praga dá título ao trecho mais famoso de um ciclo de poemas sinfônicos. Que compositor tcheco o escreveu?",
    "resposta": "Bedřich Smetana",
    "distratores": [
      "Antonín Dvořák",
      "Leoš Janáček",
      "Bohuslav Martinů"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/M%C3%A1_vlast",
      "https://en.wikipedia.org/wiki/Vltava"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/M%C3%A1_vlast",
        "situacao": "ok",
        "texto": "Má vlast (Czech pronunciation: [maː vlast]), also known as My Fatherland, is a set of six symphonic poems composed between 1874 and 1879 by the Czech composer Bedřich Smetana. The six pieces, conceived as individual works, are often presented and recorded as a single work in six movements. They premiered separately between 1875 and 1880. The complete set premiered on 5 November 1882 in Žofín Palac\n[…]\nVltava (The Moldau)\n[…]\nThe first poem, Vyšehrad (The High Castle), composed between the end of September and 18 November 1874 and premiered on 14 March 1875 at the [Prague] Philharmonic, describes the Vyšehrad castle in Prague which was the seat of the earliest Czech kings. During the summer of 1874, Smetana began to lose his hearing, and total deafness soon followed; he described the gradual, but rapid loss of his hearing in a letter of resignation to the director of the Royal Provincial Czech Theatre, Antonín Čížek.\n[…]\nConceived between 1872 and 1874, it is the only piece in the cycle to be mostly completed before Smetana began to go noticeably deaf in the summer of 1874. Most performances last about fifteen minutes.\n[…]\nIn this piece, Smetana uses tone painting to evoke the sounds of one of Bohemia's great rivers. In his own words:\n[…]\nVltava contains Smetana's most famous tune. It is an adaptation of the melody La Mantovana, attributed to the Italian Renaissance tenor Giuseppe Cenci, which, in a borrowed Romanian form, was also the basis for the Israeli national anthem Hatikvah.\n[…]\nSmetana finished composing this piece, commonly translated as \"From Bohemia's Woods and Fields\" or \"From Bohemian Fields and Groves\", on 18 October 1875, and it received its first public performance nearly eight weeks later, on 10 December. A depiction of the beauty of the Czech countryside and its people, the tone poem tells no real story.\n[…]\nSheet music of piano duet version (arranged by the composer)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Vltava",
        "situacao": "ok",
        "texto": "The Vltava ( VU(U)L-tə-və, Czech: [ˈvl̩tava] ; German: Moldau) is the longest river in the Czech Republic, a left tributary of the Elbe River. It runs southeast along the Bohemian Forest and then north across Bohemia, through Český Krumlov, České Budějovice, and Prague. It is commonly referred to as the \"Czech national river\".\n[…]\nBoth the Czech name Vltava and the German name Moldau are believed to originate from the old Germanic words *wilt ahwa 'wild water' (compare Latin aqua). In the Annales Fuldenses (872 AD) it is called Fuldaha; from 1113 AD it is attested as Wultha. In the Chronica Boemorum (1125 AD) it is attested for the first time in its Bohemian form, Wlitaua.\n[…]\nOne of the best-known works of classical music by a Czech composer is Bedřich Smetana's Vltava, sometimes called The Moldau in English. It is from the Romantic era of classical music and is a musical description of the river's course through Bohemia.\n[…]\nSmetana's symphonic poem also inspired a song of the same name by Bertolt Brecht. An English version of it, by John Willett, features the lyrics Deep down in the Moldau the pebbles are shifting / In Prague three dead emperors moulder away.\n[…]\nThe Vltava River has been used as the setting for a number of films, including the 1942 Czech drama The Great Dam. More recently, the Vltava has been used as a film location for such films as Amadeus in 1984 and Mission: Impossible in 1996. The river also appeared in the 2002 film xXx. During filming, Vin Diesel's stunt double, Harry O'Connor, was tragically killed when he parasailed into the Palacký Bridge while filming an action sequence.\n[…]\nA minor planet, 2123 Vltava, discovered in 1973 by Soviet astronomer Nikolai Stepanovich Chernykh, is named after the river.\n[…]\nMoldavite\n[…]\nGeographic data related to Vltava at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%C3%A1_Vlast",
        "situacao": "ok",
        "texto": "Má Vlast (em checo, Minha Terra) é um conjunto de seis poemas sinfônicos escritos por Bedřich Smetana. De inspiração nacionalista, este poema tem por objetivo retratar cenas da região da Boémia, de onde o compositor era oriundo.\n[…]\nEmbora seja frequente apresentar a obra como um poema sinfónico de seis andamentos, e, com a exceção de Vltava, ser quase sempre gravada assim, as seis peças foram concebidas como obras individuais. A estreia das obras foi feita em 1875 e 1880; a estreia do conjunto completo ocorreu em 5 de novembro de 1882 no Palácio Žofín, em Praga, sob direção de Adolf Čech, que também foi o maestro na estreia de duas delas apresentadas individualmente.\n[…]\nOs poemas sinfônicos, são, por ordem:\n[…]\nVltava (O Moldava)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Lago de Genebra",
      "descricao": "Grande lago alpino na fronteira entre a Suíça e a França, às margens do qual fica a cidade de Genebra."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Numa casa às margens do lago de Genebra, no sombrio verão de 1816, que escritora inglesa concebeu o romance Frankenstein?",
    "resposta": "Mary Shelley",
    "fonte": [
      "https://en.wikipedia.org/wiki/Villa_Diodati",
      "https://en.wikipedia.org/wiki/Frankenstein"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Villa_Diodati",
        "situacao": "ok",
        "texto": "The Villa Diodati is a mansion in the village of Cologny near Lake Geneva in Switzerland, notable because Lord Byron rented it and stayed there with Dr. John Polidori in the summer of 1816. Percy Bysshe Shelley, Shelley's partner Mary Godwin (later Mary Shelley), and Mary’s stepsister Claire Clairmont, who had rented a house nearby, were frequent visitors.\n[…]\nBecause of poor weather, in June 1816 the group famously spent three days together inside the house creating stories to tell each other, two of which were developed into landmark works of the Gothic horror genre: Frankenstein by Mary Shelley and The Vampyre, the first modern vampire story, by Polidori.\n[…]\nLord Byron rented the villa from 10 June to 1 November 1816. The scandal of his separation from his wife, rumours of an affair with his half-sister, and ever-increasing debt, had forced him to leave England, never to return, in April of that year. Byron arrived at Lake Geneva in May where he met and befriended the poet Percy Bysshe Shelley who was travelling with his future wife Mary Godwin (now better known as Mary Shelley).\n[…]\nByron settled at the Villa Diodati with his personal physician, John William Polidori, and Shelley rented a smaller house called \"Maison Chapuis\" on the waterfront nearby. The group was also joined by Mary's stepsister, Claire Clairmont, with whom Byron had had an affair in London.\n[…]\nThe weather was unseasonably cold and stormy, and Mary Shelley later described the \"incessant rain\" of that \"wet, ungenial summer\". When the rain kept them indoors at the Villa Diodati over three days in June, the five turned to reading fantastical stories, including Fantasmagoriana, and then devising their own tales. Mary Shelley wrote the first draft of what would become Frankenstein, or The Modern Prometheus. She was just 18 years old at the time."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Frankenstein",
        "situacao": "ok",
        "texto": "Frankenstein; or, The Modern Prometheus is an 1818 Gothic novel written by English author Mary Shelley. It tells the story of Victor Frankenstein, a young scientist who creates a sapient creature from different body parts in an unorthodox scientific experiment. Shelley started writing the story when she was 18 and staying in Bath, and the first edition was published anonymously in London on 1 Janu\n[…]\nMary Shelley read The Empire of the Nairs (1811), James Henry Lawrence's utopian romance abolishing marriage and paternity, in late September 1814. David S. Neff has read Frankenstein as a reply to that utopia, its bachelor scientist a \"Lawrentian motherson\" whose flight from fatherhood destroys those around him, and has connected the novel's De Lacey family to Lawrence's character Lacy; the historian Anne Verjus, while confirming the 1814 reading, considers the influence unproven.\n[…]\nDuring the rainy summer of 1816, the \"Year Without a Summer\", the world was locked in a long, cold volcanic winter caused by the eruption of Mount Tambora in 1815. Mary Shelley, aged 18, and her lover (and future husband), Percy Bysshe Shelley, visited Lord Byron at the Villa Diodati by Lake Geneva, in the Swiss Alps. The weather was too cold and dreary that summer to enjoy the outdoor holiday activities they had planned, so the group retired indoors until dawn.\n[…]\nShelley's manuscripts for the first three-volume edition in 1818 (written 1816–1817), as well as the fair copy for her publisher, are now housed in the Bodleian Library in Oxford. The Bodleian acquired the papers in 2004, and they belong now to the Abinger Collection. In 2008, the Bodleian published a new edition of Frankenstein, edited by Charles E. Robinson, that contains comparisons of Mary Shelley's original text with Percy Shelley's additions and interventions alongside.\n[…]\nShelley's notebooks with her handwritten draft of Frankenstein"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Lagoa dos Patos",
      "descricao": "Grande laguna do litoral do Rio Grande do Sul, ligada ao oceano Atlântico por um canal junto à cidade de Rio Grande."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Navegadores portugueses tomaram por rio o canal que liga a Lagoa dos Patos ao oceano. Esse engano acabou dando nome a qual estado?",
    "resposta": "Rio Grande do Sul",
    "distratores": [
      "Rio Grande do Norte",
      "Santa Catarina",
      "Paraná"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_Grande_do_Sul"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Grande_do_Sul",
        "situacao": "ok",
        "texto": "Rio Grande do Sul é uma das 27 unidades federativas do Brasil. Encontra-se situado na região Sul do país. Tem como limites: ao norte, com Santa Catarina. Ao sul, com os departamentos uruguaios de Artigas, Rivera, Cerro Largo, Treinta y Tres e Rocha. A leste, com o Oceano Atlântico. A oeste, com as províncias argentinas de Misiones e Corrientes.\n[…]\nConforme Antenor Nascentes, autor do Dicionário etimológico da língua portuguesa, é a tradicional designação da foz do Rio Grande, o escoadouro da lagoa dos Patos, e estado brasileiro. Capitania colonial em 1760, província imperial em 1822 e unidade federativa em 1889. A denominação se origina do canal que conecta a laguna dos Patos com o oceano Atlântico (Henrique Martins, autor de Corografia do Brasil, 17).\n[…]\nA bacia hidrográfica do Atlântico Sul compreende toda a metade leste do estado. Esta é irrigada por rios cujas águas, antes de alcançar o mar, vão chegar a uma das lagoas da costa. Dessa forma, a lagoa Mirim recebe as águas do rio Jaguarão, a dos Patos, as dos rios Turuçu, Camaquã e Jacuí. A lagoa dos Patos recebe as águas deste último através do estuário do Guaíba. A lagoa dos Patos se liga com a lagoa Mirim por meio do canal de São Gonçalo, e com o mar através da barra do rio Grande.\n[…]\nO Rio Grande do Sul constitui um dos poucos estados que usam regularmente a comunicação fluvial. Além da navegação nas águas do rio Uruguai, em que merecem destaque os portos fluviais de São Borja e Uruguaiana, usam-se os rios Jacuí e Taquari. Estes perfazem o total de 430 km de hidrovias. A malha de navegação estadual se prolonga até o extremo sul, por intermédio das lagoas dos Patos e Mirim.\n[…]\nProvíncia de São Pedro do Rio Grande do Sul\n[…]\nSímbolos oficiais do Rio Grande do Sul\n[…]\n«Assembleia Legislativa do estado do Rio Grande do Sul»\n[…]\n«Tribunal de Justiça do estado do Rio Grande do Sul»"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Lago Titicaca",
      "descricao": "Grande lago de altitude nos Andes, na fronteira entre o Peru e a Bolívia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Segundo a lenda inca, que herói, filho do deus Sol, surgiu das águas do lago Titicaca e depois fundou Cusco?",
    "resposta": "Manco Cápac",
    "fonte": [
      "https://en.wikipedia.org/wiki/Manco_C%C3%A1pac"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Manco_C%C3%A1pac",
        "situacao": "ok",
        "texto": "Manco Cápac (Quechua: Manqu Qhapaq, Cusco Quechua: [ˈmaɴqɔ ˈqʰapaχ]; born before c. 1200 – c. 1230) , also known as Manco Inca and Ayar Manco, was, according to some historians, the first governor and founder of the Inca civilisation in Cusco, possibly in the early 13th century. He is also a main figure of Inca mythology, being the protagonist of the two best known legends about the origin of the \n[…]\nManco Cápac is the protagonist of the two main legends that explain the origin of the Inca Empire. Both legends state that he was the founder of the city of Cusco and that his wife was Mama Uqllu.\n[…]\nThis legend also incorporates the golden staff, thought to have been given to Manco Cápac by his father. Accounts vary, but according to some versions of the legend, the Manco got rid of his three brothers, trapping them or turning them into stone, thus becoming the leader of Cusco. He married his older sister, Mama Ocllo, and they begot a son named Sinchi Roca.\n[…]\nFelipe Guaman Poma de Ayala mentions legend according to which Manco Capac was child of sorceress Mama Waqu who managed to enchant people of Cusco to make her their Queen regnant or \"Quya\". Mama Waqu afterwards had sexual relationships with multiple men and eventually gave birth to her son, Manco. The Queen ordered her servant to hide a child and then declared to her subjects that one day the new king, a son of the Sun and the Moon, will emerge from Paqariq Tampu.\n[…]\nAfter two years, Manco Capac was smuggled out from it and recognized as Sapa Inca. Mama Waqu afterwards married her son and the two ruled jointly.\n[…]\nKuzco, the main character from The Emperor's New Groove, in the first version of the movie Kingdom of the Sun was supposed to be named Manco Cápac.\n[…]\nThe car float Manco Capac operates across Lake Titicaca between PeruRail's railhead at Puno and the port of Guaqui in Bolivia.\n[…]\nKingdom of Cusco\n[…]\nInca Empire"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Manco_Capac",
        "situacao": "ok",
        "texto": "Manco Capac (Quíchua: Manqu Qhapaq, O fundador real, também conhecido como Manco Inca e Ayar Manco) segundo vários cronistas foi o primeiro governante de Cusco e fundador do Império Inca, nasceu no século XIII, havendo várias lendas que recontam sua história:\n[…]\nManco Capac reinou em Cusco por aproximadamente trinta anos estabelecendo um código de leis no qual proibiu o sacrifício humano, o homicídio, o adultério e o furto. Instituiu que os nobres se casassem com membros da própria família, mas as esposas não deveriam ter menos de 20 anos, ele próprio desposou sua irmã Mama Ocllo com a qual teve um filho chamado Sinchi Roca que se tornou o próximo Supa Inca.\n[…]\nManco Capac morreu em 1230 de causas naturais. Seu corpo foi mumificado e permaneceu na cidade até o reinado de Pachacuti, que ordenou a sua mudança para a Tiwanaku (Tiauanaco), o templo no Lago Titicaca. Em Cusco só permaneceu uma estátua erguida em sua homenagem. Manco Capac reinou antes de ser criado o título Supa Inca, tanto que seu nome incorpora o título Capac que até então se usava e que grosseiramente pode ser traduzido como senhor da guerra.\n[…]\nNeste mito, Manco Capac é tido como filho de Inti, o deus do sol e irmão de Pacha Kamaq. Ele  foi enviado pelo deus sol e emergiu neste mundo no Lago Titicaca trazendo um cajado dourado chamado de Tapac-yauri. Ele teria sido instruído a construir um templo para o deus Sol no lugar onde emergiu da terra mas o lugar não era apropriado e então ele viajou por túneis subterrâneos até Cusco onde erigiu um templo em homenagem a Inti.\n[…]\nSegundo a lenda durante a viagem para Cuzco, um de seus irmãos (Ayar Anca) e também uma de suas irmãs se transformaram em Huacas (locais sagrados).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Rio Tâmisa",
      "descricao": "Rio da Inglaterra que atravessa Londres e Oxford e deságua no mar do Norte."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Desde 1829, uma famosa regata de remo no rio Tâmisa opõe as equipes de quais duas universidades inglesas?",
    "resposta": "Oxford e Cambridge",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Boat_Race"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Boat_Race",
        "situacao": "ok",
        "texto": "The Boat Race is an annual set of rowing races between the Cambridge University Boat Club and the Oxford University Boat Club, traditionally rowed between open-weight eights on the River Thames in London, England. It is also known as the University Boat Race and the Oxford and Cambridge Boat Race.\n[…]\nThe tradition was started in 1829 by Charles Merivale, a student at St John's College, Cambridge, and his Old Harrovian school friend Charles Wordsworth who was studying at Christ Church, Oxford. The University of Cambridge challenged the University of Oxford to a race at Henley-on-Thames but Oxford won easily. Oxford raced in dark blue because five members of the crew, including the stroke, were from Christ Church, then Head of the River, whose colours were dark blue.\n[…]\nOlympic gold medallists from 2000 – James Cracknell (Cambridge 2019), Tim Foster (Oxford 1997), Luka Grubor (Oxford 1997), Andrew Lindsay (Oxford 1997, 1998, 1999) and Kieran West (Cambridge 1999, 2001, 2006, 2007), 2004 – Ed Coode (Oxford 1998), and 2008 – Jake Wetzel (Oxford 2006) and Malcolm Howard (Oxford 2013, 2014) have also rowed for their university.\n[…]\nAlthough the Boat Race crews are the best-known, the universities both field reserve crews. The reserves race takes place on the same day as the main race. The Oxford men's reserve crew is called Isis (after the Isis, a section of the River Thames which passes through Oxford), and the Cambridge reserve men's crew is called Goldie (the name comes from rower and Boat Club president John Goldie, 1849–1896, after whom the Goldie Boathouse is named).\n[…]\nThe women's reserve crews are Osiris (Oxford) and Blondie (Cambridge). A veterans' boat race, usually held on a weekday before the main Boat Race, takes place on the Thames between Putney and Hammersmith."
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Rio Douro",
      "descricao": "Rio da Península Ibérica que nasce na Espanha e deságua no Atlântico entre Porto e Vila Nova de Gaia, em Portugal."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que famoso vinho licoroso português é produzido nos vales do rio Douro e leva o nome da cidade junto à sua foz?",
    "resposta": "Vinho do Porto",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vinho_do_Porto",
      "https://pt.wikipedia.org/wiki/Rio_Douro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vinho_do_Porto",
        "situacao": "ok",
        "texto": "O Vinho do Porto é um vinho licoroso, produzido na Região Demarcada do Douro, sob condições peculiares derivadas de fatores naturais e humanos. O processo de fabrico, baseado na tradição, inclui a paragem da fermentação do mosto pela adição de aguardente vínica (benefício ou aguardentação), a lotação de vinhos e o envelhecimento.\n[…]\nO vinho do Porto é produzido a partir de uvas provenientes da Região Demarcada do Douro, no norte de Portugal a cerca de 100 km a leste da cidade do Porto. Lamego, São João da Pesqueira, Régua e Pinhão são os principais centros de produção, mas algumas das melhores vinhas ficam na zona mais a leste.\n[…]\nS. João da Pesqueira é o concelho com maior produção de vinho do Porto a nível nacional. Esta bebida é produzida com uvas do Douro e armazenada nas caves de Vila Nova de Gaia, esta bebida alcoólica ficou conhecida como \"vinho do Porto\" a partir da segunda metade do século XVII por ser exportada para todo o mundo a partir desta cidade.\n[…]\nO Colheita 1994 é famoso por ter sido produzido num dos melhores anos de sempre para os vinhos do Porto.\n[…]\nNos primórdios da história do comércio do vinho do Porto, os ingleses eram das famílias mais influentes no negócio, uma vez que o mercado inglês era o maior consumidor mundial do famoso néctar português. Com o passar dos anos outras nacionalidades — tais como holandeses, alemães e escoceses — prevaleceram igualmente no comércio deste produto português. As principais casas portuguesas eram a casa Ferreira — detida por D. Antónia Ferreira —, Ramos Pinto e a Real Companhia Velha\n[…]\nDouro Vinhateiro\n[…]\nInstituto do Vinho do Porto\n[…]\nHistória do Vinho do Porto em ThePORTWINE.com\n[…]\nAssociação de Empresas de Vinho do Porto\n[…]\n«Lista de Vinhos e Adegas do Porto». [ligação inativa]\n[…]\nDouro Valley — Vinho do Porto\n[…]\nDouro Valley — História do Vinho do Porto"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Douro",
        "situacao": "ok",
        "texto": "O rio Douro (em castelhano: Duero) é um rio que nasce nos picos da serra de Urbión, na província espanhola de Sória, a 2;160 m de altitude, e atravessa o norte de Portugal até a sua foz junto às cidades do Porto e Vila Nova de Gaia. É o terceiro rio mais extenso da Península Ibérica. Tem 897 km de comprimento, 572 km em território espanhol, 213 km navegáveis em território português e 112 km de car\n[…]\nA bacia hidrográfica do Douro tem 97 603 km² de área, 19,1% (18 643 km²) em território português, o que corresponde a cerca de 19,1% da área total. A sua altitude média é 700 m. No início do seu curso é um rio largo e pouco caudaloso. De Samora à sua foz, corre entre fraguedos em canais profundos. O forte declive do rio, as curvas apertadas, as rochas salientes, os caudais violentos, as múltiplas irregularidades, os rápidos e os inúmeros \"saltos\" ou \"pontos\" tornavam este rio indomável.\n[…]\nViajando até junto do Douro, que serpenteia entre as arribas, pode ver-se onde vivem e/ou nidificam abutres, grifos, águias, pombos bravos, andorinhas, etc., e nas ladeiras do mesmo, a perdiz, a rola, o estorninho, o melro, o papa-figos, etc.\n[…]\nA Via Navegável do Douro foi inaugurada em toda a sua extensão em 1990. São 210 km desde Barca d’Alva até ao Porto.\n[…]\nEm 2014 passaram pela via navegável 600 000 passageiros. Os cruzeiros na mesma albufeira representam 64% da totalidade de passageiros, movimentando cerca de 400 000 pessoas em 2014. Trata-se de viagens com duração variável, de meia ou uma hora, e que se concentram principalmente nas zonas do Porto-Gaia, e depois também, em menor escala, em Entre-os-Rios, Régua, Pinhão, Foz do Sabor e Pocinho. O barco hotel alcançou 55 000 passageiros nos 13 barcos a operar.\n[…]\nOs cruzeiros de um dia ultrapassaram os 160 000 passageiros. Estes barcos navegam principalmente nos trajectos Porto–Régua–Porto, Régua–Pinhão–Régua e Régua–Barca d’Alva–Régua."
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Tonlé Sap",
      "descricao": "Sistema de lago e rio no Camboja ligado ao rio Mekong, cuja correnteza muda de sentido conforme a estação."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na estação das chuvas, o rio Tonlé Sap, no Camboja, inverte o sentido da correnteza e enche um enorme lago. O que provoca essa inversão?",
    "resposta": "A cheia do rio Mekong",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tonl%C3%A9_Sap"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tonl%C3%A9_Sap",
        "situacao": "ok",
        "texto": "Tonle Sap (; Khmer: ទន្លេសាប, Tônlé Sab [tɔnleː saːp]; lit. 'Fresh River' or commonly translated as 'Great Lake') is a lake in central Cambodia. Belonging to the Mekong river system, Tonle Sap is the largest freshwater lake in Southeast Asia and one of the most diverse and productive ecosystems in the world. It was designated as a Biosphere Reserve by UNESCO in 1997 due to its high biodiversity.\n[…]\nAs a natural flood reservoir for the entire Mekong river system, Tonle Sap Lake regulates floods in the lower reaches of Phnom Penh during the rainy season, and is also an important supplement to the dry season flow of the Mekong Delta.\n[…]\nThe Mekong giant catfish, which lives in Tonle Sap, is one of the largest freshwater fish in the world. The fish can grow to 8 to 10 feet (2.4 to 3.0 m) long and can weigh anywhere between 250 and 500 pounds (110 and 230 kg). The largest of these catfish ever caught weighed 306 kilograms (674 lb). Its population has been declining since the mid-1970s. It is currently illegal for fishermen to catch and retain Mekong giant catfish, and only a few are used for scientific research.\n[…]\nThe Tonle Sap Lake District has always been a vital fishing and agricultural production area for Cambodia, and it has largely maintained Angkor, the largest pre-industrial settlement complex in history. While many fish left lakes and ponds to spawn in flooded forests at the onset of floods, the inflow of Mekong floods brought large numbers of fry, which found shelter and food in flooded forests and floodplains.\n[…]\nAfter two days of racing all the canoes come together to celebrate the Naga, the water serpent, who supposedly spit out the lake into the sea at the end of the rainy season, while bringing fish into the Mekong through the Tonle Sap River.\n[…]\nTHE STRATEGIC SIGNIFICANCE OF THE MEKONG By: Osborne, Milton\n[…]\nTonle Sap Modelling project (WUP-FIN) under Mekong River Commission"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tonle_Sap",
        "situacao": "ok",
        "texto": "O lago Sap (Tonle Sap) encontra-se no Camboja e tem uma extensão de 2.590 km², que pode chegar até os 24.605 km² durante a estação das chuvas. Representa a maior extensão de água doce do sudeste asiático e se localiza na planície central do país. As províncias que rodeiam o lago são, ao norte Siem Riep e Kompung Thom, e ao sul as províncias de Battambang, Pursat e Kompung Chinang. O lago está loca\n[…]\nTonlé Sap significa na língua khmer: Lago de água fresca, ainda que, com frequência se traduz em idiomas ocidentais como: \"Grande Lago\".\n[…]\nDurante a estação de seca, o lago fica bem reduzido, com 2.590 km² de extensão e apenas um metro de profundidade. Mas durante as monções, ocorre um fenómeno que só Camboja e Egito, com o Nilo, pode presenciar: os rios Sap e Mecom caminham na direção da corrente para o noroeste, em outras palavras, devolvem-se. Este fenómeno acontece devido à abundância das chuvas que começam em junho e terminam em dezembro, o que cria um crescimento no volume das águas.\n[…]\nAs águas são literalmente represadas pelo mar. O lago alcança, na temporada das chuvas, uma extensão de 24.605 km², em outras palavras, aumenta mais de dez vezes seu tamanho. Bosques e campos convertem-se, literalmente, no descanso do lago até que a corrente dos rios normalizem seu curso, o qual é celebrado no Camboja, como o \"Festival da Água\". O fenómeno atrai como consequência, grandes benefícios, porque fertiliza as terras e incrementam a atividade pesqueira.\n[…]\nReserva da biosfera de Tonle Sap\n[…]\nMilton Osborne, The Mekong, Turbulent Past, Uncertain Future (Atlantic Monthly Press, 2000) ISBN 0-87113-806-9\n[…]\nTHE STRATEGIC SIGNIFICANCE OF THE MEKONG By: Osborne, Milton[ligação inativa]\n[…]\nPerfil do Camboja\n[…]\nInternational Journal of Water Resources Development - Tonle Sap Special Issue Arquivado em 9 de agosto de  2020, no Wayback Machine.\n[…]\nTonle Sap Modelling project (WUP-FIN) under Mekong River Commission",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Grande Fedor",
      "descricao": "Episódio do verão de 1858 em que o mau cheiro do rio Tâmisa, poluído por esgoto, tomou conta de Londres."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1858, o insuportável mau cheiro do Tâmisa, apelidado de Grande Fedor, levou Londres a construir o quê?",
    "resposta": "Uma rede de esgotos moderna",
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Stink"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Stink",
        "situacao": "ok",
        "texto": "The Great Stink was an event in Central London during July and August 1858 in which the hot weather exacerbated the smell of untreated human waste and industrial effluent that was present on the banks of the River Thames. The problem had been mounting for several years, with an ageing and inadequate sewer system that emptied directly into the Thames.\n[…]\nThe miasma from the effluent was thought to transmit contagious diseases, and three outbreaks of cholera before the Great Stink were blamed on the ongoing problems with the river.\n[…]\nThe press soon began calling the event \"The Great Stink\"; the leading article in the City Press observed that \"Gentility of speech is at an end—it stinks, and whoso once inhales the stink can never forget it and can count himself lucky if he lives to remember it\". A writer for The Standard concurred with the opinion.\n[…]\nOne of the cement manufacturers commented that the MBW were the first public body to use such testing processes. The progress of Bazalgette's works was reported favourably in the press. Paul Dobraszczyk, the architectural historian, describes the coverage as presenting many of the workers \"in a positive, even heroic, light\", and in 1861 The Observer described the progress on the sewers as \"the most expensive and wonderful work of modern times\".\n[…]\nConstruction costs were so high that in July 1863 an additional £1.2 million was lent to the MBW to cover the cost of the work.\n[…]\nThe obituarist for The Times opined that \"when the New Zealander comes to London a thousand years hence ... the magnificent solidity and the faultless symmetry of the great granite blocks which form the wall of the Thames-embankment will still remain.\" He continued, \"the great sewer that runs beneath Londoners ... has added some 20 years to their chance of life\".\n[…]\nGreat Smog\n[…]\nThe Great Stink"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Fedor",
        "situacao": "ok",
        "texto": "O Grande Fedor (em inglês: Great Stink) foi um evento ocorrido no centro da cidade de Londres em julho e agosto de 1858, durante o qual o clima quente exacerbou o cheiro de dejeto humano não tratado e efluentes industriais presentes nas margens do Rio Tâmisa. O problema vinha aumentando há alguns anos, com um sistema de esgoto envelhecido e inadequado que era despejado diretamente no Tâmisa.\n[…]\nDa culpa do velho infrator, Padre Tâmisa, havia a evidência mais ampla\".\n[…]\nNo auge do fedor, entre 200 e 250 toneladas de deslocamento (220 a 280 toneladas curtas) de cal estavam sendo usadas perto das bocas dos esgotos que desembocavam no Tâmisa, e homens foram empregados para espalhar cal na costa do Tâmisa na maré baixa; o custo era de 1.500 libras por semana.\n[…]\nEle arquitetou os esgotos ao longo das margens do Tâmisa, construindo muros na costa, passando os canos de esgoto por dentro e preenchendo ao redor deles. As obras reivindicaram mais de 52 acre (21,0 ha) do Tâmisa; o Victoria Embankment teve o benefício adicional de aliviar o congestionamento nas estradas preexistentes entre Westminster e a Cidade de Londres.\n[…]\nO primeiro barco, empregado em 1887, foi nomeado SS Bazalgette; o procedimento permaneceu em serviço até dezembro de 1998, quando o despejo foi interrompido e um incinerador foi usado para descartar os resíduos. Os esgotos foram expandidos no final do século XIX e novamente no início do século XX. A rede de drenagem é, à data de 2015, gerenciada pela Thames Water e é usada por até oito milhões de pessoas por dia.\n[…]\nO obituarista do The Times opinou que \"quando o neozelandês chegar a Londres daqui a mil anos […] a magnífica solidez e a simetria irrepreensível dos grandes blocos de granito que formam a parede do dique do Tâmisa ainda permanecerão\". Ele continuou: \"o grande esgoto que corre sob os londrinos […] acrescentou cerca de 20 anos à sua chance de vida\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Rio Pinheiros",
      "descricao": "Rio da cidade de São Paulo, afluente do Tietê, que teve o curso retificado e invertido no século vinte."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na primeira metade do século vinte, o rio Pinheiros, em São Paulo, teve o sentido da correnteza invertido. Com que objetivo principal?",
    "resposta": "Gerar energia elétrica",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_Pinheiros",
      "https://pt.wikipedia.org/wiki/Usina_Henry_Borden"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Pinheiros",
        "situacao": "ok",
        "texto": "Rio Pinheiros é um curso de água que banha a cidade de São Paulo, no Brasil. Nasce do encontro do rio Guarapiranga com o rio Jurubatuba e deságua no rio Tietê.\n[…]\nO objetivo destas obras era acabar com as inundações, canalizar as águas e direcioná-las para a Represa Billings, invertendo o sentido do rio, com a Usina Elevatória de Traição. Com isso, foram criadas condições para a instalação da Usina Hidrelétrica Henry Borden, em Cubatão, que recebia água do rio Tietê pelo rio Pinheiros e pela Billings, aproveitando o grande desnível da serra do Mar, de mais de setecentos metros, para gerar energia elétrica.\n[…]\nSegundo dados da Secretaria de Saneamento e Energia do Estado de São Paulo, o rio Pinheiros tem uma vazão reduzida, de apenas 10 mil litros por segundo (média anual), ao passo que o rio e sua bacia recebem 10,9 mil litros de esgoto (sendo, de acordo com a Sabesp, 82% do esgoto tratados). O grande volume de água aparente do rio se deve às represas presentes no mesmo, fazendo com que o rio Pinheiros seja na realidade uma série de lagoas, que transfere água lentamente ao rio Tietê.\n[…]\nO programa estadual é coordenado pela Secretaria de Infraestrutura e Meio Ambiente, com a participação das empresas Companhia Ambiental do Estado de São Paulo (CETESB), Departamento de Águas e Energia Elétrica (DAEE), Empresa Metropolitana de Águas e Energia (EMAE) e Companhia de Saneamento Básico do Estado de São Paulo (SABESP), além da Prefeitura de São Paulo.\n[…]\nMarginal Pinheiros\n[…]\nFotos de São Paulo e do rio Pinheiros, no Wikimedia commons\n[…]\nRio Pinheiros no Projeto São Paulo 450 Anos, página educacional sobre a cidade de São Paulo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Usina_Henry_Borden",
        "situacao": "ok",
        "texto": "A Usina Hidrelétrica Henry Borden é um complexo localizado no sopé da Serra do Mar em Cubatão, composto por duas usinas de alta queda (720 m) denominadas de Externa e Subterrânea, com 14 grupos de geradores acionados por turbinas Pelton (turbina essa específica para altas quedas perfazendo uma capacidade instalada de 889 MW, para uma vazão de 157m³/s).\n[…]\nO fornecimento de água é feito mudando o curso natural das águas da bacia do alto Tietê, que corre para o interior, para descer a Serra do Mar. As águas do Rio Pinheiros na cidade de São Paulo são bombeadas para a Represa Billings, que por sua vez transfere as águas para a Represa Rio das Pedras (o reservatório da usina), descendo as águas por túneis abertos na serra até a usina em Cubatão.\n[…]\nA mais antiga das usinas possui oito condutos forçados externos e uma casa de força convencional. A primeira unidade foi inaugurada em 1926, as demais instaladas até 1950, num total de oito grupo geradores, com capacidade instalada de 469 MW.\n[…]\nO primeiro grupo gerador entrou em operação em 1956. Cada gerador é movido por uma turbina Pelton acionada por quatro jatos d'água.\n[…]\nDesde outubro de 1992, a operação desse sistema vem atendendo às condições estabelecidas na Resolução Conjunta SMA/SES 03/92, de 4 de outubro de 1992, atualizada pela Resolução SMA-SSE-02, de 19 de fevereiro de 2010, que só permite o bombeamento das águas do Rio Pinheiros para o Reservatório Billings para controle de cheias, reduzindo em 75% aproximadamente a energia produzida em Henry Borden.\n[…]\nA Represa Billings também atende ao fornecimento de água a cidade de São Paulo, e como o período de funcionamento da usina Henry Borden coincide com o período de seca dos reservatórios, o uso da água para fornecimento de energia é visto como pouco eficiente.[carece de fontes]?"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Rio Negro",
      "descricao": "Grande rio de águas escuras da Amazônia, que nasce na Colômbia e se junta ao Solimões perto de Manaus."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O rio Negro, na Amazônia, tem águas escuras, cor de chá forte. O que dá essa cor a elas?",
    "resposta": "Matéria orgânica de plantas decompostas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rio_Negro_(Amazon)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rio_Negro_(Amazon)",
        "situacao": "ok",
        "texto": "The Rio Negro (Spanish: Río Negro [ˈri.o ˈneɣɾo], Portuguese: Rio Negro [ˈʁi.u ˈneɡɾu], \"Black River\"), or Guainía as it is known in its upper part, is the largest left tributary of the Amazon River (accounting for about 14% of the water in the Amazon basin), the largest blackwater river in the world, and one of the world's ten largest rivers by average discharge. It originates in the tepuis of th\n[…]\nThe source of the Rio Negro lies in Colombia, in the Department of Guainía where the river is known as the Guainía River. The young river generally flows in an east-northeasterly direction through the Puinawai National Reserve, passing several small indigenous settlements on its way, such as Cuarinuma, Brujas, Santa Rosa and Tabaquén. After roughly 400 km (250 mi) the river starts forming the border between Colombia's Department of Guainía and Venezuela's Amazonas State.\n[…]\nThis area was the filming location for Survivor: The Amazon in 2003.\n[…]\nThe sixth season of Survivor, Survivor: The Amazon was filmed in Rio Negro in 2003. Also Meeting of the Waters by Animal Collective was recorded in Rio Negro in 2016.\n[…]\nGoulding, M., Carvalho, M. L., & Ferreira, E. J. G. (1988). Rio Negro, Rich Life in Poor Water : Amazonian Diversity and Foodchain Ecology as seen through Fish Communities. The Hague: SPB Academic Publishing. ISBN 90-5103-016-9\n[…]\nSioli, H. (1955). \"Beiträge zur regionalen Limnologie des Amazonasgebietes. III. Über einige Gewässer des oberen Rio Negro-Gebietes.\" Arch. Hydrobiol., 50(1), 1-32.\n[…]\nWallace, A. R. (1853). A narrative of travels on the Amazon and Rio Negro, with an account of the native tribes, and observations on the climate, geology, and natural history of the Amazon Valley. London: Reeve.\n[…]\nWright, R. (2005). História indígena e do indigenismo no Alto Rio Negro. São Paulo, Brazil: UNICAMP & Instituto Socioambiental. ISBN 85-7591-042-6."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Negro_%28Amazonas%29",
        "situacao": "ok",
        "texto": "O rio Negro é o maior afluente da margem esquerda do rio Amazonas, na Amazônia, na América do Sul. É o sétimo maior rio do mundo em volume de água. Tem a sua origem entre os tepuis da Reserva Nacional Natural Puinawai, no departamento colombiano de Guainía, na fronteira entre este país e o Brasil. Conecta-se com o Orinoco através do canal do Cassiquiare. Na Colômbia, onde tem a sua nascente, també\n[…]\nO rio Negro era chamado pelos indígenas de rio Quiary, Guriguacurú ou Ueneyá.\n[…]\nO rio Negro nasce na Colômbia, onde é conhecido como rio Guainía, que flui na direção leste-nordeste. Após cerca de 400 km, o rio vira para o sudeste e passa a formar a fronteira entre o departamento de Guainía da Colômbia e o estado do Amazonas, na Venezuela, e chega à Piedra del Cocuí, uma formação rochosa ígnea da era pré-cambriana, parte do Escudo das Guianas, que serve de triple fronteira.\n[…]\nDesde ai, entra no Brasil pela localidade de Cucuí, um distrito de São Gabriel da Cachoeira, no Amazonas.\n[…]\nPróximo ao Carvoeiro, o último grande afluente do rio Negro, o rio Branco se junta ao Negro, que toma um curso mais sudeste, tornando-se muito largo em muitos trechos antes de atingir a cidade de Manaus. Abaixo do Parque Nacional de Anavilhanas encontra o rio Solimões para formar o rio Amazonas, criando o fenômeno conhecido como Encontro das águas.\n[…]\nO encontro das águas é um fenômeno que acontece na confluência entre o rio Negro, de água preta, e o rio Solimões, de água barrenta, onde as águas dos dois rios correm lado a lado sem se misturar por uma extensão de mais de 6 km. É uma das principais atrações turísticas da cidade de Manaus.\n[…]\nEsse fenômeno acontece em decorrência da diferença entre a temperatura e densidade das águas e, ainda, à velocidade de suas correntezas: o rio Negro corre cerca de 2 km/h a uma temperatura de 28°C, enquanto que o Rio Solimões corre de 4 a 6 km/h a uma temperatura de 22°C.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Rio Paraná",
      "descricao": "Grande rio sul-americano formado no Brasil, onde fica a usina de Itaipu, que segue pelo Paraguai e pela Argentina até o rio da Prata."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na divisa entre Minas Gerais, São Paulo e Mato Grosso do Sul, o rio Paraná nasce do encontro de quais dois rios?",
    "resposta": "Grande e Paranaíba",
    "distratores": [
      "Tietê e Paranapanema",
      "Iguaçu e Paraguai",
      "Grande e Tietê"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_Paran%C3%A1"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Paran%C3%A1",
        "situacao": "ok",
        "texto": "Rio Paraná é o principal curso de água formador da Bacia do rio Prata. É considerado, em sua extensão total até a foz do Estuário da Prata, o oitavo maior rio do mundo em extensão (4.880 km) e o maior da América do Sul depois do Amazonas. Sua bacia hidrográfica abrange mais de 10% de todo o território brasileiro, sendo a continuação do rio Grande, recebendo o nome de rio Paraná na confluência com \n[…]\nO rio Paraná em sua parte alta, separa os estados de Mato Grosso do Sul, Minas Gerais e São Paulo também este último estado com o Paraná, além de demarcar a fronteira entre Brasil e Paraguai numa extensão de 190 quilômetros até a foz do rio Iguaçu. A partir deste ponto marca o início da fronteira entre Argentina e Paraguai. O rio continua correndo para o sul até próximo a cidade de Posadas onde  muda para direção oeste.\n[…]\nO nome da bacia sedimentar, bacia do Paraná, é derivado do rio Paraná.\n[…]\nGrande parte da extensão do Paraná é navegável, e o rio serve como uma importante via navegável que liga cidades do interior da Argentina e Paraguai ao oceano, fornecendo portos de águas profundas em algumas dessas cidades. A construção de enormes barragens hidrelétricas ao longo do rio bloqueou seu uso como corredor marítimo para cidades mais a montante, mas o impacto econômico dessas barragens compensa isso.\n[…]\nEm razão dos grandes impactos ambientais causados pelo conjunto de barragens instaladas ao longo de todo o curso do rio Paraná, pela ocupação desordenada e pela pecuária extensiva em seu arquipélago, deu-se início na década de 1990 a um intenso movimento pela conservação do último trecho do rio Paraná livre de barragens.\n[…]\nForam criadas as APAs Intermunicipais, a Estação Ecológica de Ilha Grande, O Parque Nacional de Ilha Grande, a Área de Proteção Ambiental das Ilhas e Várzeas do Rio Paraná e o Parque Estadual das Várzeas do Rio Ivinhema.\n[…]\nRio Grande\n[…]\nInformações e mapas da bacia do rio Paraná"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Delta do Ganges",
      "descricao": "Imenso delta na Índia e em Bangladesh, formado pelos rios Ganges e Brahmaputra antes do golfo de Bengala."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Bangladesh, o Ganges une suas águas às de qual grande rio vindo do Tibete, formando um imenso delta?",
    "resposta": "Brahmaputra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ganges_Delta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ganges_Delta",
        "situacao": "ok",
        "texto": "The Ganges Delta (also known the Ganges-Brahmaputra Delta, the Sundarbans Delta or the Bengal Delta) is a river delta predominantly covering the Bengal region of the Indian subcontinent, consisting of Bangladesh and the Indian state of West Bengal. It is the world's largest river delta and it empties into the Bay of Bengal with the combined waters of several river systems, mainly those of the Brah\n[…]\nThe Ganges Delta has the shape of a triangle and is considered to be \"arcuate\" (arc-shaped). It covers more than 105,000 km2 (41,000 sq mi) and lies mostly in Bangladesh and India, with rivers from Bhutan, Tibet, and Nepal draining into it from the north. 67% of the delta is inside Bangladesh and only 33% belongs to West Bengal. Most of the delta is composed of alluvial soils made up of small sediment particles that finally settle down as river currents slow in the estuary.\n[…]\nAround 273.6 million (173.6 million Bangladesh and 100 million West Bengal, India) people live on the delta, despite risks from floods caused by monsoons, heavy run-off from the melting snows of the Himalayas, and North Indian Ocean tropical cyclones. 80% of the nation of Bangladesh lies in the Ganges Delta; many of the country's people depend on the delta for survival.\n[…]\nIndian rhinos (Rhinoceros unicornis) were once present in the Sundarbans, but became locally extinct before 1920–1925 due to intensive hunting. Today, there are no rhino populations in the Sundarbans. The Ganges–Brahmaputra basin has tropical deciduous forests that yield valuable timber: sal, teak, and peepal trees are found in these areas.\n[…]\nIn 1998, the Ganges flooded the delta, killing about 1,000 people and leaving more than 30 million people homeless. The Bangladesh government asked for $900 million to help feed the people of the region, as the entire rice crop was lost.\n[…]\nBay of Bengal\n[…]\nBengal tiger"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Delta_do_Ganges",
        "situacao": "ok",
        "texto": "O delta do Ganges (também conhecido como Delta sunderbhan - Delta Bengala) é um Delta na região do Sul da Ásia, mais especificamente na região de Bengala que abrange o Bangladesh e o estado indiano de Bengala Ocidental. O delta do Ganges é o maior delta do mundo e desemboca no Golfo de Bengala. A região é também uma das áreas mais férteis do mundo, desta forma ganhando o apelido de O Delta Verde.\n[…]\nO delta, também conhecido como o delta do Ganges-Brahmaputra, estendendo-se desde o Rio Hugli a oeste até o Rio Meghna a leste. O delta do Ganges ocupa cerca de 350 km da costa do Golfo de Bengala. Calcutá e Haldia, na Índia e Mongla, no Bangladesh.\n[…]\nO delta do Ganges, na verdade, é formado pela confluência dos rios Padma (Baixo Ganges), Jamurra (Baixo Brahmaputra) e Meghna.\n[…]\nO Delta do Ganges tem a forma de um triângulo e é considerado um delta \"arqueado\" (em forma de arco). Cobre mais de 105 000 km2 (41 000 sq mi) e fica principalmente em Bangladesh e Índia, com rios do Butão, Tibete e Nepal drenando para ele a partir do norte. A maior parte do delta é composta por solos aluviais formados por pequenas partículas de sedimentos que finalmente se depositam à medida que as correntes fluviais diminuem no estuário.\n[…]\nCerca de 280 milhões (180 milhões de Bangladesh e 100 milhões de Bengala Ocidental, Índia) vivem no delta, apesar dos riscos de inundações causadas por monções, escoamento intenso das neves derretidas do Himalaia e ciclones tropicais do Oceano Índico Norte. Uma grande parte da nação de Bangladesh encontra-se no delta do Ganges; Muitas das pessoas do país dependem da Delta para sobreviver.\n[…]\nUma forte crítica aos estudiosos da história ambiental em relação ao delta de Bengala/Ganges é que a maior parte dos estudos se limita aos séculos 18 a 21, com uma escassez geral de história ecológica da região antes do século XVIII.\n[…]\nRio Ganges\n[…]\nBangladesh\n[…]\nBengala Ocidental\n[…]\nGolfo de Bengala",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Cataratas do Niágara",
      "descricao": "Grupo de três quedas d'água no Rio Niágara, na fronteira entre Ontário e Nova York."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Das três quedas que formam as Cataratas do Niágara, qual é a maior, situada quase toda do lado canadense?",
    "resposta": "Horseshoe, a Queda da Ferradura",
    "fonte": [
      "https://en.wikipedia.org/wiki/Horseshoe_Falls",
      "https://en.wikipedia.org/wiki/Niagara_Falls"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Horseshoe_Falls",
        "situacao": "ok",
        "texto": "Horseshoe Falls is the largest of the three waterfalls that collectively form Niagara Falls on the Niagara River along the Canada–United States border. Approximately 90% of the Niagara River, after around half the water (75% at night and in winter) is diverted for hydropower generation, flows over Horseshoe Falls. The remaining 10% flows over American Falls and Bridal Veil Falls.\n[…]\nIt is located between Terrapin Point on Goat Island in the US state of New York, and Table Rock in the Canadian province of Ontario. These falls are also referred to as the Canadian Falls.\n[…]\nWhen the boundary line between the United States and Canada was determined in 1819, based on the Treaty of Ghent, the northeastern end of the Horseshoe Falls was in New York, United States, flowing around the Terrapin Rocks, which were once connected to Goat Island by a series of bridges. In 1955, the area between the rocks and Goat Island was filled in, creating Terrapin Point.\n[…]\nIn the early 1980s the United States Army Corps of Engineers filled in more land and built diversion dams and retaining walls to force the water away from Terrapin Point. Altogether, 400 ft (120 m) of the Horseshoe Falls was eliminated. Due to erosion, the Falls will continue to move in relation to the boundary line in the future, possibly altering territorial boundaries between the two countries.\n[…]\nThe official national maps for both Canada and the United States indicate that a smaller portion of the Horseshoe Falls currently is located within the United States.\n[…]\nNiagara Parks Commission"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Niagara_Falls",
        "situacao": "ok",
        "texto": "Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the Canadian province of Ontario and the U.S. state of New York. The largest of the three is Horseshoe Falls, which straddles the international border of the two countries. It is also known as the Canadian Falls. The smaller American Falls and Bridal Veil Falls lie within the United State\n[…]\nOn July 8, 2019, at roughly 4 am, officers responded to a report of a person in crisis at the brink of the Canadian side of the falls. Once officers got to the scene, the man climbed the retaining wall, jumped into the river and went over Horseshoe Falls. Authorities subsequently began to search the lower Niagara River basin, where the man was found alive but injured sitting on the rocks at the water's edge.\n[…]\nOn the Canadian side, Queen Victoria Park features manicured gardens, platforms offering views of American, Bridal Veil, and Horseshoe Falls, and underground walkways leading into observation rooms that yield the illusion of being within the falling waters. Along the Niagara River, the Niagara River Recreational Trail runs 56 km (35 mi) from Fort Erie to Fort George, and includes many historical sites from the War of 1812.\n[…]\nThe Whirlpool Aero Car, built in 1916 from a design by Spanish engineer Leonardo Torres Quevedo, is a cable car that takes passengers over the Niagara Whirlpool on the Canadian side. The Journey Behind the Falls consists of an observation platform and series of tunnels near the bottom of the Horseshoe Falls on the Canadian side. There are two casinos on the Canadian side of Niagara Falls, the Niagara Fallsview Casino Resort and Casino Niagara.\n[…]\nIllusionist David Copperfield performed a trick in which he appeared to travel over Horseshoe Falls in 1990.\n[…]\nHolley, George Washington (1882). The Falls of Niagara and Other Famous Cataracts. Hodder and Stoughton."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cataratas_Canadenses",
        "situacao": "ok",
        "texto": "As Cataratas Canadenses, Cataratas Canadianas ou Cataratas Horseshoe (em inglês:  Horseshoe Falls), é a maior das três cachoeiras que formam coletivamente as Cataratas do Niágara no rio Niágara ao longo da fronteira Canadá-Estados Unidos. Aproximadamente 90% do rio Niagara, após desvios para geração de energia hidrelétrica, flui sobre Horseshoe Falls. Os 10% restantes fluem sobre American Falls e \n[…]\nEle está localizado entre Terrapin Point em Goat Island, no estado americano de Nova York, e Table Rock, na província canadense de Ontário.\n[…]\nCataratas do Niágara\n[…]\nCataratas Americanas\n[…]\nCataratas Bridal Veil\n[…]\nRio Niágara",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Lago Natron",
      "descricao": "Lago salgado e muito alcalino no norte da Tanzânia, perto da fronteira com o Quênia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "De águas muito alcalinas e avermelhadas, o lago Natron, na Tanzânia, é o principal local de reprodução de qual ave?",
    "resposta": "Flamingo-pequeno",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lake_Natron"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Natron",
        "situacao": "ok",
        "texto": "Lake Natron is a highly alkaline salt lake located in north Ngorongoro District of Arusha Region in Tanzania with its far northern end crossing into Kajiado County and Narok County in Kenya. It is in the Gregory Rift, which is the eastern branch of the East African Rift. The lake is within the Lake Natron Basin, a Ramsar Site wetland of international significance.\n[…]\nThe lake is the only regular breeding area in East Africa for the 2.5 million lesser flamingoes, whose status of \"near threatened\" results from their dependence on this one location. When salinity increases, so do cyanobacteria, and the lake can also support more nests. These flamingoes, the single large flock in East Africa, gather along nearby saline lakes to feed on Spirulina (a blue-green algae with red pigments).\n[…]\nLake Natron is a safe breeding location because its caustic environment is a barrier against predators trying to reach their nests on seasonally forming evaporite islands. Greater flamingoes also breed on the mud flats.\n[…]\nThe lake has inspired the nature documentary The Crimson Wing: Mystery of the Flamingos by Disneynature, for its close relationship with the Lesser flamingoes as their only regular breeding area.\n[…]\nAccording to Chris Magin, the RSPB's international officer for Africa, \"The chance of the lesser flamingoes continuing to breed in the face of such mayhem are next to zero. This development will leave lesser flamingoes in East Africa facing extinction\". Seventy-five percent of the world's lesser flamingoes are born on Lake Natron.\n[…]\nThe Crimson Wing: Mystery of the Flamingos\n[…]\nThink Pink – Save Africa's Flamingos\n[…]\nNBC article about Nick Brandt's photos of petrified animals at Natron lake\n[…]\n\"Lake Natron, Tanzania\". Earth Observatory Newsroom. Archived from the original on 1 October 2006. Retrieved 17 April 2018."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lago_Natron",
        "situacao": "ok",
        "texto": "O Lago Natron é um lago salgado alcalino situado no norte da Tanzânia, próximo da fronteira deste país com o Quénia, no Grande Vale do Rifte. Trata-se de um lago endorreico, de origem tectónica e com menos de três metros de profundidade.\n[…]\nAs suas águas apresentam um pH elevado, entre 9 e 10.5, e apresentam uma cor característica de lagos com elevadas taxas de evaporação. À medida que a água evapora durante a estação seca, os níveis de salinidade aumentam até ao ponto em que os microrganismos adaptados a ambientes salinos (ou halófilos) começam a desenvolver-se.\n[…]\nEntre estes contam-se algumas cianobactérias, cujo pigmento vermelho dá origem aos tons profundos de vermelho apresentados pelas águas mais profundas do lago e pelos alaranjados nas zonas menos profundas.\n[…]\nO lago Natron é também o único local de reprodução dos flamingos-pequenos (Phoenicopterus minor) que vivem nesta região e que se alimentam das cianobactérias do lago. Quanto mais elevada for a salinidade, maior é a quantidade de cianobactérias que se desenvolvem no lago e, por conseguinte, maior é o número de ninhos de flamingos-pequenos que o lago pode suportar.\n[…]\nAlém do flamingo-pequeno habitam este lago tilápias (Oreochromis alcalica), que ocupam as zonas adjacentes às nascentes de água quente que brotam nalgumas partes lago.\n[…]\nnoticias.seuhistory.com/ O lago que transforma animais em pedras",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Lago Michigan",
      "descricao": "Um dos cinco Grandes Lagos da América do Norte, às margens do qual fica Chicago."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Dos cinco Grandes Lagos da América do Norte, qual é o único que fica inteiramente em território dos Estados Unidos?",
    "resposta": "Lago Michigan",
    "distratores": [
      "Lago Superior",
      "Lago Huron",
      "Lago Erie"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lake_Michigan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Michigan",
        "situacao": "ok",
        "texto": "Lake Michigan (  MISH-ig-ən) is one of the five Great Lakes of North America. It is the second-largest of the Great Lakes by volume (1,180 cu mi; 4,900 km3) and depth (923 ft; 281 m) after Lake Superior and the third-largest by surface area (22,300 square miles; 57,757 km2), after Lake Superior and Lake Huron.\n[…]\nSome of the most well-studied early human inhabitants of the Lake Michigan region were the Hopewell Native Americans. Their culture declined after 800 AD, when, for the following few hundred years, the region was the home of peoples known as the Late Woodland Native Americans.\n[…]\nIn the early 17th century, when Western European explorers made their first forays into the region, they encountered descendants of the Late Woodland Native Americans, mainly the historic Ojibwe, Menominee, Noquet, Sauk, Meskwaki, Ho-Chunk, Miami, Odawa and Potawatomi peoples. The French explorer Jean Nicolet is believed to have been the first European to reach Lake Michigan, possibly in 1634 or 1638.\n[…]\nIn 1673, Jacques Marquette, Louis Jolliet, and their crew of five Métis voyageurs followed Lake Michigan to Green Bay and up the Fox River, nearly to its headwaters, in their search for the Mississippi River. By the late 18th century, the eastern portions of the straits were controlled by Fort Mackinac on Mackinac Island, a British colonial and early American military base and fur trade center, founded in 1781.\n[…]\nGeographic data related to Lake Michigan at OpenStreetMap\n[…]\nBathymetry of Lake Michigan\n[…]\n\"Michigan, Lake\" . Collier's New Encyclopedia. 1921.\n[…]\nAnderson, William P. (1911). \"Michigan, Lake\" . Encyclopædia Britannica (11th ed.).\n[…]\n\"Michigan, Lake\" . New International Encyclopedia. 1905.\n[…]\nInteractive map of lighthouses in area (northern Lake Michigan)\n[…]\nInteractive map of lighthouses in area (southern Lake Michigan)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lago_Michigan",
        "situacao": "ok",
        "texto": "Lago Michigan, Míchigan ou Michigão é um dos cinco Grandes Lagos da América do Norte. É o único dos cinco Grandes Lagos completamente dentro das fronteiras dos Estados Unidos; os outros quatro são partilhados com o Canadá. O lago Michigan limita-se, em sentido horário a partir do sul, pelos estados americanos de Indiana, Illinois, Wisconsin, e Michigan, cujo nome deriva do lago.\n[…]\nCom uma superfície de 57 750 km², é o maior lago de água doce nos Estados Unidos, e o quinto no mundo. O seu ponto mais profundo é a 281 m e contém um volume de cerca de 4 918 km³ de água. A sua superfície fica a 580 pés acima do nível do mar, o mesmo que o lago Huron, com que está ligado através dos estreitos de Mackinac. Geologicamente, o Michigan e o Huron formam uma única massa de água.\n[…]\nMichigan City\n[…]\nCerca de 12 milhões de habitantes vivem em redor do lago Michigan, cujo extremo sul está densamente industrializado.\n[…]\nAs praias do Lago Michigan, especialmente as praias do oeste do estado de Michigan e do norte de Indiana, são famosas pela sua beleza. A areia é macia e branca, e é frequente encontrar altas dunas de areia cobertas com ervas, e a água é fresca e surpreendentemente límpida. Da maioria das praias de Michigan, não é possível distinguir o Estado de Wisconsin, do outro lado do lago.\n[…]\nNas margens do lago estão localizados alguns parques naturais, como o Sleeping Bear Dunes National Lakeshore e Indiana Dunes National Lakeshore. Parte das margens pertencem também às reservas de Hiawatha National Forest e Manistee National Forest. Parte do Michigan Islands National Wildlife Refuge está localizado no lago Michigan.\n[…]\nAs águas do lago Michigan desembocam no lago Huron, pelo estreito de Mackinac, e é parte da Hidrovia dos Grandes Lagos.\n[…]\nQuem viajar de carro e desejar atravessar o lago Michigan, pode fazê-lo através do serviço de ferries que opera entre Ludington e Manitowoc.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Rio Missouri",
      "descricao": "Grande rio dos Estados Unidos que nasce nas Montanhas Rochosas e deságua no Mississippi perto de Saint Louis."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Qual é o rio mais longo dos Estados Unidos, um afluente que nasce nas Montanhas Rochosas e deságua no Mississippi perto de Saint Louis?",
    "resposta": "Rio Missouri",
    "fonte": [
      "https://en.wikipedia.org/wiki/Missouri_River"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Missouri_River",
        "situacao": "ok",
        "texto": "The Missouri River is a river in the Central and Mountain West regions of the United States. The nation's longest, it rises in the eastern Centennial Mountains of the Bitterroot Range of the Rocky Mountains of southwestern Montana, then flows east and south for 2,341 mi (3,767 km) before entering the Mississippi River north of St. Louis, Missouri. The river drains a semi-arid watershed of more tha\n[…]\nThe Missouri accounts for 45 percent of the annual flow of the Mississippi past St. Louis, and as much as 70 percent in certain droughts.\n[…]\nLouis metropolitan area, south of the Missouri River just below the latter's mouth, on the Mississippi. In contrast, the northwestern part of the watershed is sparsely populated. However, many northwestern cities, such as Billings, Montana, are among the fastest growing in the Missouri basin.\n[…]\nDuring the early 19th century, at the height of the fur trade, steamboats and keelboats travelled nearly the whole length of the Missouri from Montana's rugged Missouri Breaks to the mouth, carrying beaver and buffalo furs to and from the areas the trappers frequented. This resulted in the development of the Missouri River mackinaw, which specialized in carrying furs. Since these boats could only travel downriver, they were dismantled and sold for lumber upon their arrival at St. Louis.\n[…]\nFor navigation purposes, the Missouri River is divided into two main sections. The Upper Missouri River is north of Gavins Point Dam, the last hydroelectric dam of fifteen on the river, just upstream from Sioux City, Iowa. The Lower Missouri River is the 840 miles (1,350 km) of river below Gavins Point until it meets the Mississippi just above St. Louis.\n[…]\nThe Missouri flows through or past many National Historic Landmarks, which include Three Forks of the Missouri, Fort Benton, Montana, Big Hidatsa Village Site, Fort Atkinson, Nebraska and Arrow Rock Historic District."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Missouri",
        "situacao": "ok",
        "texto": "O rio Missouri é um afluente do rio Mississippi e o mais longo rio totalmente incluído no território dos Estados Unidos, com 3 767 km.\n[…]\nO Missouri surge na confluência dos rios Madison, Jefferson e Gallatin, no Montana, e encontra o Mississippi ao norte de St. Louis.\n[…]\nO sistema formado pelos rios Missouri-Mississippi forma o quarto rio mais longo do mundo. A bacia hidrográfica do rio Missouri cobre um sexto de todo o continente norte-americano.\n[…]\nNo seu estado original, com meandros, o rio Missouri era o rio mais longo da América do Norte. Cerca de 110 km foram entretanto encurtados por canais e o seu comprimento é comparável ao do Mississippi.\n[…]\nNa confluência destes dois grandes rios, o Missouri quase que duplica o volume do Mississippi, pois é responsável por 45% do fluxo em St. Louis em época normal e 70% em épocas secas. Apenas outro afluente do Mississippi, o rio Ohio, contribui com mais volume de água.",
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
