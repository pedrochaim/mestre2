Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Outras Modalidades** (tema **Esportes**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Maratona",
      "descricao": "Prova de corrida de rua de 42,195 quilômetros do atletismo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome da prova de maratona vem de um lugar da Grécia onde, em 490 antes de Cristo, aconteceu o quê?",
    "resposta": "Uma batalha entre gregos e persas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Marathon",
      "https://en.wikipedia.org/wiki/Battle_of_Marathon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marathon",
        "situacao": "ok",
        "texto": "The marathon is a long-distance foot race with a distance of 42.195 kilometres (c. 26.22 mi), usually run as a road race, but the distance can be covered on trail routes. The marathon can be completed by running or with a run/walk strategy. There are also wheelchair divisions. More than 800 marathons are held worldwide each year, with the vast majority of competitors being recreational athletes, a\n[…]\nThe name Marathon comes from the legend of Pheidippides, the Greek messenger. The legend states that while he was taking part in the Battle of Marathon, which took place in August or September 490 BC, he witnessed a Persian vessel changing its course towards Athens as the battle was near a victorious end for the Greek army. He interpreted this as an attempt by the defeated Persians to rush into the city to claim a false victory or simply raid, hence claiming their authority over Greek land.\n[…]\nThe Athens Classic Marathon traces the route of the 1896 Olympic course, starting in Marathon on the eastern coast of Attica, site of the Battle of Marathon of 490 BC, and ending at the Panathenaic Stadium in Athens.\n[…]\nMountain marathon\n[…]\nSki marathon\n[…]\n100 Marathon Club\n[…]\nWorld Peace Marathon\n[…]\nMan versus Horse Marathon\n[…]\nMarathons at the Paralympics\n[…]\nPhysiology of marathons\n[…]\nHans-Joachim Gehrke, \"From Athenian identity to European ethnicity: The cultural biography of the myth of Marathon,\" in Ton Derks, Nico Roymans (ed.), Ethnic Constructs in Antiquity: The Role of Power and Tradition (Amsterdam, Amsterdam University Press, 2009) (Amsterdam Archaeological Studies, 13), 85–100.\n[…]\nHans W. Giessen: Mythos Marathon. Von Herodot über Bréal bis zur Gegenwart. (= Landauer Schriften zur Kommunikations- und Kulturwissenschaft. Band 17). Verlag Empirische Pädagogik, Landau 2010\n[…]\nTom Derderian, Boston Marathon: History of the World's Premier Running Event, Human Kinetics, 1994, 1996\n[…]\nIAAF list of marathon records in XML"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_Marathon",
        "situacao": "ok",
        "texto": "The Battle of Marathon took place in 490 BC during the first Persian invasion of Greece. It was fought between the citizens of Athens, aided by Plataea, against a Persian force commanded by Datis and Artaphernes. The battle was the culmination of the first attempt by Persia under King Darius I to subjugate Greece. The Greek army inflicted a crushing defeat on the more numerous Persians, marking a \n[…]\nThe most famous legend associated with Marathon is that of the runner Pheidippides (or Philippides) bringing news to Athens of the battle, which is described below.\n[…]\nNike of Marathon\n[…]\nFink, Dennis L. The Battle of Marathon in Scholarship: Research, Theories and Controversies since 1850 (McFarland, 2014). 240 pp. online review\n[…]\nThe Importance of the Battle of Marathon (Archived 2016-10-19 at the Wayback Machine) on The History Notes website.\n[…]\nBlack-and-white photo-essay of Marathon.\n[…]\nCreasy, Edward Shepherd (June 1851). \"I. The Battle of Marathon\". The Fifteen Decisive Battles of the World: From Marathon to Waterloo.\n[…]\nHood, E. The Greek Victory at Marathon (Archived 2017-08-14 at the Wayback Machine), Clio History Journal, 1995.\n[…]\nBattle of Marathon (in Greek) by e-marathon.gr.\n[…]\nThe Battle of Marathon September 490 BC (in Greek). Archived 2016-10-19 at the Wayback Machine .\n[…]\nThe Battle of Marathon September 490 BC, by Major General Dimitris Gedeon, HEAR.\n[…]\nLieutenant Colonel Siegfried, Edward J. (March 2010). Analytical Study of Battle Strategies Used At Marathon (490 BCE) (Strategy Research Project). U.S. Army. Archived from the original on 8 April 2013. Retrieved 14 March 2013.\n[…]\nDigital representation of the Battle of Marathon 490 BC.\n[…]\nMarathon, the beginning of history (in Greek). A documentary from ET1, 2011.\n[…]\nDoenges, N. A. \"The Campaign and Battle of Marathon\". Historia, vol. 47 (1998): 1–17."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maratona",
        "situacao": "ok",
        "texto": "Maratona é uma corrida realizada na distância oficial de 42,195 km, normalmente em ruas e estradas. Única modalidade esportiva que se originou de uma lenda, seu nome foi instituído como uma homenagem à antiga lenda grega do soldado ateniense Fidípides, um mensageiro do exército de Atenas, que teria corrido 42 km entre o campo de batalha de Maratona até Atenas para anunciar aos cidadãos da cidade a\n[…]\nReza a lenda que, no ano de 490 a.C., quando os soldados atenienses partiram para a planície de Marathónas para combater os persas na Primeira Guerra Médica, suas mulheres ficaram ansiosas pelo resultado porque os inimigos haviam jurado que, depois da batalha, marchariam sobre Atenas, violariam suas mulheres e sacrificariam seus filhos.\n[…]\nAo saberem dessa ameaça, os gregos deram ordem a suas esposas para, se não recebessem a notícia da sua vitória em 24 horas, matar seus filhos e, em seguida, suicidarem-se.\n[…]\nNo entanto, Heródoto conta — no que é considerada por historiadores modernos como apenas uma versão romanceada — que, na realidade, Fidípedes foi enviado antes da batalha a Esparta e outras cidades gregas para pedir ajuda, e que tivera de correr duzentos e quarenta quilômetros em dois dias, voltando à batalha com os reforços necessários para vencer os persas. Só depois disso, teria corrido até Atenas para anunciar a vitória e então morrer pelo esforço.\n[…]\nQuando os Jogos Olímpicos da Era Moderna tiveram início em 1896, seus criadores e organizadores procuravam por algum grande evento popular que relembrasse a antiga glória da Grécia. A ideia de organizar uma maratona veio de Michel Bréal, um amigo do barão Pierre de Coubertin, que queria que tal prova fizesse parte do evento inaugural, no que foi apoiado por Coubertin e pelos gregos.\n[…]\nCampeões olímpicos da maratona\n[…]\nMeia-maratona\n[…]\nRaid - A versão da maratona para remadores\n[…]\nMarathon42K — Maratona Ranking & Calendário",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Albatroz (golfe)",
      "descricao": "Termo do golfe para terminar um buraco com três tacadas a menos que o par."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No golfe, os resultados abaixo do par têm nomes de aves. Como se chama terminar um buraco com três tacadas a menos que o par?",
    "resposta": "Albatroz",
    "distratores": [
      "Águia",
      "Falcão",
      "Gaivota"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Glossary_of_golf"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Glossary_of_golf",
        "situacao": "ok",
        "texto": "The following is a glossary of the terminology currently used in the sport of golf. Where words in a sentence are also defined elsewhere in this article, they appear in italics. Old names for clubs can be found at Obsolete golf clubs.\n[…]\nalbatross\n[…]\nSee double eagle.\n[…]\ndouble eagle\n[…]\nAlso albatross.\n[…]\nA stroke in which the club makes contact with the turf long before the ball, resulting in a poor contact and significant loss of distance.\n[…]\nTo skull the ball means to contact the ball with the leading edge of the iron, often resulting in a low shot that goes further than expected with little to no spin. A skulled shot is almost always due to a mishit by the golfer. The terms \"blade\" and \"thin\" are also used interchangeably with skull.\n[…]\nA fade is often intentionally used by above-average players to achieve a certain type of spin. The curved shape of the ball-flight is the result of sideways spin. For that reason a \"slice\" does not refer to a putt.\n[…]\nThe location on the club-face where the optimal ball-striking results are achieved. The closer the ball is struck to the sweet-spot, the higher the power transfer ratio will be. Hitting it in the sweet-spot is also referred to as hitting it in the screws.\n[…]\nUsually, an unintentional, poor shot where the club-head strikes too high on the ball. When taken to an extreme but still at or below the center-line of the ball, it is known \"blading\" the ball. Sometimes, when the ball is lying a certain way around the green, advanced players will intentionally hit a thin shot to achieve certain results.\n[…]\nA bad shot that has hit the trees' leaves, branches, and/or trunk and has resulted in a negative situation, i.e., going out of bounds, into a hazard, or leaving the ball much shorter than anticipated."
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Ollie",
      "descricao": "Manobra básica do skate em que o skatista salta com a prancha sem usar as mãos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O americano Alan Gelfand, nos anos setenta, emprestou seu apelido à manobra mais básica do skate, o salto sem usar as mãos. Que apelido é esse?",
    "resposta": "Ollie",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alan_Gelfand",
      "https://en.wikipedia.org/wiki/Ollie_(skateboarding)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alan_Gelfand",
        "situacao": "ok",
        "texto": "Alan \"Ollie\" Gelfand (born January 1, 1963) is an influential American skateboarder, racing driver, and entrepreneur credited with inventing the ollie, the foundational skateboarding trick.\n[…]\nDuring his tours, Gelfand's style and technical skills left an indelible mark on the international skateboarding scene. He participated in significant events such as the Super Skate Show in Caracas, Venezuela, in 1979, which featured prominent skaters of the time and was a key venue for Gelfand to demonstrate the ollie to a wider audience. Rodney Mullen reported in skateboarding.com that event was the first time he and Gelfand performed the Pop Shove It trick.\n[…]\nAlan \"Ollie\" Gelfand's name and contribution to skateboarding were immortalized when the term \"ollie,\" was added to the Oxford English Dictionary. This inclusion not only acknowledges his invention but cements his legacy within the English language as both a noun and an intransitive verb. This recognition highlights the widespread impact of his innovation on skateboarding and popular culture, illustrating how a sport's technical term can become embedded in everyday language.\n[…]\nGelfand also featured in Dogtown and Z-Boys, another documentary by Stacy Peralta. Originally filmed in the 1970s, but released officially in 2001, these two films examine the skate and surf culture of 1970s Venice, California, highlighting the innovations brought by the Zephyr Skateboard Team. Gelfand's involvement in the documentary underscores the revolutionary changes in skateboarding during this era, including his invention of the ollie which can be seen on video for the first time.\n[…]\nAlan Ollie Gelfand's \"German Car Depot\" in Hollywood Florida"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ollie_(skateboarding)",
        "situacao": "ok",
        "texto": "The ollie is a skateboarding trick where the rider and board leap into the air without the use of the rider's hands. It is the combination of stomping (also known as popping) the tail of the skateboard off the ground to get the board mostly vertical, jumping, and sliding the front foot forward to level out the skateboard at the peak of the jump.\n[…]\nIn 1978 Alan Gelfand, who was given his nickname \"Ollie\" by Scott Goodman, learned to perform frontside no-handed aerials in bowls and pools using a gentle raising of the nose and scooping motion to keep the board with the feet. There are numerous references to Alan Gelfand's ollie, most notably pictures in the 1970s skateboarding magazine Skateboarder. Jeff Tatum is credited as the first person to perform a backside ollie in a bowl, which he initially named a \"JT air\".\n[…]\nAn April 1981 issue of the skateboarding magazine Thrasher notes the vert ollie was quickly adapted to flatground use, observing that \"skaters now hop effortlessly from street to sidewalk with just a tap of the tail.\" In 1982, while competing in the Rusty Harris contest in Whittier, California, Rodney Mullen debuted an ollie on flat ground, which he had adapted from Gelfand's vertical version by combining the motions of some of his existing tricks.\n[…]\nThe flat ground ollie technique is strongly associated with street skateboarding; mini ramp and vert riders can also use this technique to gain air and horizontal distance from the coping, but half-pipe riders typically rely more on the board's upward momentum to keep it with the rider, more similar to Gelfand's original technique.\n[…]\nOllie North:  the original name for the one foot\n[…]\nHop Ollie: an Ollie using only one foot, such as a \"Hop Nollie\"  (not the same as a no-comply)\n[…]\nHow to Ollie Video\n[…]\nHow to Ollie tutorial with pictures\n[…]\nOllie Trick Tip with video\n[…]\nHow To Ollie"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Frisbee",
      "descricao": "Disco de plástico arremessado em brincadeiras e em esportes como o ultimate."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Frisbee vem de uma fábrica americana cujas formas de metal os universitários arremessavam por diversão. O que essa fábrica produzia?",
    "resposta": "Tortas",
    "distratores": [
      "Pneus",
      "Chapéus",
      "Refrigerantes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Frisbee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Frisbee",
        "situacao": "ok",
        "texto": "A  frisbee (pronounced  FRIZ-bee), also called a flying disc or simply a disc, is a gliding toy or sporting item generally made of injection-molded plastic and roughly 20 to 25 centimetres (8 to 10 in) in diameter with a pronounced lip. It is used recreationally and competitively for throwing and catching, as in flying disc games.\n[…]\nIn June 1957, Wham-O co-founders Richard Knerr and Arthur \"Spud\" Melin gave the disc the brand name \"Frisbee\" after learning college students were calling the Pluto Platter by that term, which was derived from the Connecticut-based pie manufacturer Frisbie Pie Company, a supplier of pies to Yale University, where students started a campus craze tossing empty pie tins stamped with the company's logo—the way Morrison and his wife had in 1937.\n[…]\nHeadrick became known as the father of Frisbee sports; he founded the International Frisbee Association and recruited Harvey J. Kukuk from Eagle Harbor to serve as Executive Director. In 1975 he appointed Dan Roddick as its head. Roddick began establishing North American Series (NAS) tournament standards for various Frisbee sports, such as Freestyle, Guts, Double Disc Court, and overall events.\n[…]\nThe IFT guts competitions in Northern Michigan, the Canadian Open Frisbee Championships (1972), Toronto, Ontario, the Vancouver Open Frisbee Championships (1974), Vancouver, British Columbia, the Octad (1974), New Jersey, the American Flying Disc Open (1974), Rochester, New York, and the World Frisbee Championships (1974), Pasadena, California, are the earliest Frisbee competitions that presented the Frisbee as a new disc sport.\n[…]\nBefore these tournaments, the Frisbee was considered a toy and used for recreation.\n[…]\nHistory of Frisbee and Disc Sports\n[…]\nAll Frisbee Throw and catch techniques"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Frisbee",
        "situacao": "ok",
        "texto": "Frisbee ou disco voador é um objeto em forma de disco, geralmente feito de plástico com diâmetro entre 20 a 25 centímetros. Seu formato permite o voo quando são lançados em rotação. Frysbiees são jogados como parte de diferentes jogos, nos quais diversas pessoas e cães podem participar. Estes jogos em geral consistem de lançar o disco e pegá-lo ainda nos ares.\n[…]\nNa forma como hoje é conhecido, o Frisbee surgiu em 1957, sendo produzido pela empresa Wham-O toy company. Porém, a história do Frysbeie começou antes, em Bridgeport, Connecticut, onde William Frisbie abriu a Frisbie Pie Company em 1871. Estudantes de universidades próximas jogavam as latas de torta vazias entre si, gritando \"Frisbie!\".\n[…]\nEm 1948, Walter Frederick Morrison e seu parceiro Warren Franscyony inventaram uma versão plástica do disco chamada \"Disco Voador\" que podia voar mais longe e com mais precisão do que as placas de torta de estanho.\n[…]\nDepois de se separar de Franscioni, Morrison fez um modelo melhorado em 1955 e o vendeu para a empresa de brinquedos Wham-O como \"Pluto Platter\" - uma tentativa de lucrar com o sucesso relacionado a temáticas como o espaço sideral e OVNI. Em 1958, um ano após o primeiro lançamento do brinquedo, a Whoam-O mudou seu nome para o disco Frisbee.\n[…]\nAmerican Ultimate Disc League\n[…]\nFederação Paulista de Disco",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "As Cinzas (críquete)",
      "descricao": "Série de partidas de críquete disputada entre Inglaterra e Austrália desde 1882."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A rivalidade de críquete entre Inglaterra e Austrália se chama As Cinzas por causa de um obituário satírico de 1882. Quem tinha morrido?",
    "resposta": "O críquete inglês",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Ashes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Ashes",
        "situacao": "ok",
        "texto": "The Ashes is a Test cricket series played biennially between England and Australia. The term originated in a satirical obituary published in a British newspaper, The Sporting Times, immediately after Australia's 1882 victory at The Oval, its first Test win on English soil. The obituary stated that English cricket had died, and that \"the body will be cremated and the ashes taken to Australia\".\n[…]\nThe Hon. Ivo Bligh promised that on the 1882–83 tour of Australia, he would, as England's captain, \"recover those Ashes\". He spoke of them several times over the course of the tour, and the Australian media quickly caught on. The three-match series resulted in a two-one win to England, notwithstanding a fourth match, won by the Australians, whose status remains the subject of ardent dispute.\n[…]\nIn 1882, it was first spoken of when The Sporting Times, after the Australians had thoroughly beaten the English at The Oval, wrote an obituary in affectionate memory of English cricket \"whose demise was deeply lamented and the body would be cremated and taken to Australia\". Her husband, then Ivo Bligh, took a team to Australia in the following year. Punch had a poem containing the words \"When Ivo comes back with the Urn\" and when Ivo Bligh wiped out the defeat Lady Clarke, wife of Sir W. J.\n[…]\nLater in 1882, following the famous Australian victory at The Oval, Bligh led an England team to Australia, as he said, to \"recover those ashes\". Publicity surrounding the series was intense, and it was at some time during this series that the Ashes urn was crafted. Australia won the First Test by nine wickets, but in the next two England were victorious. At the end of the Third Test, England were generally considered to have \"won back the Ashes\" 2–1.\n[…]\nSoccer Ashes\n[…]\nMunns, J. (1994). Beyond Reasonable Doubt – Rupertswood, Sunbury – The Birthplace of the Ashes. Australia: Joy Munns. ISBN 0-646-22153-1."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Ashes",
        "situacao": "ok",
        "texto": "The Ashes é uma série de partidas de test cricket disputada a cada dois anos entre a Inglaterra [en] e a Austrália [en]. O termo originou-se em um obituário satírico publicado em um jornal britânico, The Sporting Times, imediatamente após a vitória da Austrália em 1882 no The Oval, sua primeira vitória em um jogo de teste em solo inglês. O obituário afirmava que o críquete inglês havia morrido e q\n[…]\nEm 1882, falou-se pela primeira vez sobre isso quando o The Sporting Times, após os australianos terem derrotado completamente os ingleses no The Oval, escreveu um obituário em memória afetuosa do críquete inglês, “cuja morte foi profundamente lamentada e cujo corpo seria cremado e levado para a Austrália”. Seu marido, então chamado Ivo Bligh, levou uma equipe para a Austrália no ano seguinte.\n[…]\nApós a guerra, a Austrália assumiu o controle absoluto tanto do Ashes quanto do críquete mundial. A tática de usar dois lançadores velozes em conjunto deu certo, com Jack Gregory e Ted McDonald prejudicando o ataque inglês regularmente. A Austrália registrou vitórias esmagadoras tanto na Inglaterra quanto em casa. Venceu as primeiras oito partidas consecutivas, incluindo uma vitória por 5 a 0 em 1920-1921 contra a equipe de Warwick Armstrong.\n[…]\nA WSC surgiu após uma era em que o duopólio do domínio australiano e inglês se dissipou; a série Ashes era vista há muito tempo como um campeonato mundial de críquete, mas a ascensão das Índias Ocidentais no final da década de 1970 desafiou essa visão. As Índias Ocidentais registrariam vitórias retumbantes em séries de Teste contra a Austrália e a Inglaterra e dominariam o críquete mundial até a década de 1990.\n[…]\nFinalmente, a Inglaterra venceu o quinto Teste em The Oval por uma margem de 197 corridas, recuperando as Ashes. Andrew Flintoff se aposentou do críquete de teste logo depois.\n[…]\nCríquete\n[…]\nOuça um jovem Don Bradman falando após a turnê Ashes de 1930",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Lanterna vermelha",
      "descricao": "Apelido dado ao último colocado na classificação geral do Tour de France."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No Tour de France, o último colocado é chamado de lanterna vermelha. De onde vem esse apelido?",
    "resposta": "Último vagão do trem",
    "distratores": [
      "Popa dos navios",
      "Traseira das bicicletas",
      "Carro de apoio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lanterne_rouge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lanterne_rouge",
        "situacao": "ok",
        "texto": "The lanterne rouge (French pronunciation: [lɑ̃tɛʁn ʁuʒ]) is the competitor in last place in the Tour de France. The phrase comes from the French for \"Red Lantern\" and refers to the red lantern hung on the rear vehicle of a passenger railway train or the brake van of a freight train, which signalmen would look for in order to make sure none of the couplings had become disconnected.\n[…]\nIn the Tour de France the rider who finishes last, rather than dropping out along the way, is accorded the distinction of lanterne rouge. Because of the popularity it affords, riders may compete for the last position rather than settling for a place near the back. Often the rider who comes last is remembered while those a few places ahead are forgotten.\n[…]\nIn the 1979 Tour de France, Gerhard Schönbacher and Philippe Tesnière were on the last two spots in the general classification, less than one minute apart. Tesnière had already finished last in the 1978 Tour, so he was aware of the publicity associated with being the lanterne rouge.\n[…]\nRed lantern holders are often great  sprinters or great riders of shorter races who are not fit enough for such a long race as the Tour de France, or who try to finish the race despite injury, as in the case of Sam Bennett, who finished last after breaking a finger in the opening stage of the 2016 Tour, but eventually won the green jersey in  2020.\n[…]\nIn 2018 Lawson Craddock became the first rider in the history of the Tour de France to have the distinction of lanterne rouge for all stages of the entire tour. He crashed in the 1st stage resulting in facial lacerations and a fractured scapula. Despite his left eye being smashed and the pain of fractured scapula, he continued to race and finished the stage which led to a picture of his bloodied and grimacing face going viral.\n[…]\nIditarod Trail Sled Dog Race - last-placed competitor is known as the red lantern"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lanterne_rouge",
        "situacao": "ok",
        "texto": "Denomina-se Farol vermelho (em francês, Lanterne Rouge) ao ciclista que ocupa a última posição ao finalizar o Tour de France. A frase parece ter a sua origem nas luzes vermelhas que se costumam encontrar no último vagão dos comboios. Por extensão, atualmente denomina-se \"farol vermelho\", ou \"lanterna\" aquele que ocupa a última posição em qualquer outro tipo de competição.\n[…]\nArtigo sobre o farol vermelho do Tour (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Super Bowl",
      "descricao": "Partida final da liga de futebol americano dos Estados Unidos, a NFL."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os filhos do dirigente Lamar Hunt brincavam com uma bolinha saltitante de borracha. Que final esportiva americana ganhou o nome inspirado nesse brinquedo?",
    "resposta": "Super Bowl",
    "fonte": [
      "https://en.wikipedia.org/wiki/Super_Bowl",
      "https://en.wikipedia.org/wiki/Super_Ball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Super_Bowl",
        "situacao": "ok",
        "texto": "The Super Bowl is the league championship final game of the National Football League (NFL) of the United States. It has served as the final game of every NFL season since 1966 replacing the NFL Championship Game and also served as the final game of every American Football League season from 1966 to 1967 prior to the AFL–NFL merger replacing the AFL championship game. Since 2022, the game has been \n[…]\nThe Super Bowl is among the top-ten world's most-watched sporting events and frequently commands the largest audience among all American broadcasts during the year. Its viewership is bested by the UEFA Champions League final, FIFA World Cup, Tour de France, Cricket World Cup, FIFA Women's World Cup, Summer Olympic Games, and the Winter Olympic games as the most watched sporting event worldwide, and the seven most-watched broadcasts in American television history are Super Bowls.\n[…]\nIn the mid-1960s, Lamar Hunt, owner of the AFL's Kansas City Chiefs, first used the term \"Super Bowl\" to refer to the AFL–NFL championship game in the merger meetings. Hunt later said the name was likely in his head because his children had been playing with a Super Ball toy; a vintage example of the ball is on display at the Pro Football Hall of Fame in Canton, Ohio.\n[…]\nBeginning with Super Bowl LV in 2021, \"Lift Every Voice and Sing\" is sung prior to \"America the Beautiful\" in honor of Black History Month,  although initially it was sung in memory of those who died during the Coronavirus pandemic in the United States, during which Super Bowl LV was played.\n[…]\nUnique among the major North American professional sports leagues, the NFL uses Roman numerals to designate its championship Super Bowl game. It was first used for Super Bowl V and applied retroactively to the preceding four editions. An exception to this rule occurred in Super Bowl 50 for marketing purposes.\n[…]\nSuper Bowl curse\n[…]\nSuper Bowl indicator"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Super_Ball",
        "situacao": "ok",
        "texto": "A Super Ball or Superball is a toy bouncy ball based on a type of synthetic rubber invented in 1964 by chemist Norman Stingley. It is an extremely elastic ball made of Zectron, which contains the synthetic polymer polybutadiene as well as hydrated silica, zinc oxide, stearic acid, and other ingredients. This compound is  vulcanized with sulfur at a temperature of 165 °C (329 °F) and formed at a pr\n[…]\nLamar Hunt, founder of the American Football League (AFL) and owner of the Kansas City Chiefs, watched his children play with a Super Ball and then coined the term Super Bowl.\n[…]\nHe wrote a letter to National Football League (NFL) commissioner Pete Rozelle dated July 25, 1966: \"I have kiddingly called it the 'Super Bowl,' which obviously can be improved upon.\" The league's franchise owners had decided on the name AFL–NFL World Championship Game, but the media immediately picked up on Hunt's Super Bowl name, which became official beginning with the third annual game in 1969.\n[…]\nHigh school physics teachers use Super Balls to educate students on usual and unusual models of impacts.\n[…]\nThe \"rough\" nature of a Super Ball makes its impact characteristics different from those of otherwise similar smooth balls. The resulting behavior is quite complex. The Super Ball has been used as an illustration of the principle of time reversal invariance.\n[…]\nA Super Ball is observed to reverse the direction of spin on each bounce. This effect depends on the tangential compliance and frictional effect in the collision. It cannot be explained by rigid body impact theory, and would not occur were the ball perfectly rigid. Tangential compliance is the degree to which one body clings to rather than slips over another at the point of impact."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Super_Bowl",
        "situacao": "ok",
        "texto": "O Super Bowl é o jogo anual do campeonato da National Football League (NFL), a principal liga de futebol americano dos Estados Unidos, que decide o campeão da temporada regular. De fato, tem servido como o jogo final de cada temporada da NFL desde 1966, substituindo o NFL Championship Game. Desde 2022, a partida tem sido disputado no segundo domingo de fevereiro.\n[…]\nO Super Bowl está entre os eventos esportivos únicos mais assistidos do mundo e frequentemente atrai a maior audiência entre todas as transmissões americanas durante o ano. Ele só fica atrás da final da Liga dos Campeões da UEFA como o evento esportivo anual de clubes mais assistido no mundo e as sete transmissões mais assistidas na história da televisão dos Estados Unidos são Super Bowls.\n[…]\nNesse meio tempo, a constante disputa por jogadores e outras questões estratégicas levou ambas as ligas a negociar, em 1966, uma fusão completa, que seria concretizada em 1970. Foi então levada a diante a ideia de uma final unificada, com a liderança de ambas as ligas organizando um \"grande jogo\" para definir qual era o melhor time de futebol americano dos Estados Unidos e nesta ideia o Super Bowl foi concebido.\n[…]\nNo meio da década de 1960, Lamar Hunt, proprietário do Kansas City Chiefs da AFL, usou pela primeira vez o termo \"Super Bowl\" para se referir ao jogo da decisão do campeonato AFL-NFL nas reuniões de fusão. Hunt posteriormente disse que o nome provavelmente estava em sua cabeça porque seus filhos estavam brincando com um brinquedo chamado Super Ball; um exemplo vintage da bola está em exibição no Pro Football Hall of Fame em Canton, Ohio.\n[…]\nO Super Bowl é, desde sua primeira edição em 1967, o evento esportivo anual mais assistido nos Estados Unidos. Em termos de campeonatos nacionais entre clubes, a NFL só perde para a final da UEFA em audiência global.\n[…]\nLista de vencedores do Super Bowl",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Tiger Woods",
      "descricao": "Golfista americano, nascido Eldrick Tont Woods, um dos maiores vencedores de torneios principais."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O golfista Eldrick Woods ganhou o apelido Tiger em homenagem a um companheiro de farda de seu pai. Em que guerra eles se conheceram?",
    "resposta": "Guerra do Vietnã",
    "distratores": [
      "Guerra da Coreia",
      "Segunda Guerra Mundial",
      "Guerra do Golfo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tiger_Woods"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tiger_Woods",
        "situacao": "ok",
        "texto": "Eldrick Tont \"Tiger\" Woods (born December 30, 1975) is an American professional golfer. He is widely regarded as one of the greatest golfers of all time and as one of the most famous athletes in modern history. Woods is tied for first in PGA Tour wins, ranks second in men's major championships, holds numerous golf records, and is an inductee of the World Golf Hall of Fame.\n[…]\nWoods was born on December 30, 1975, in Cypress, California, a suburb of Los Angeles. He is the only child of Earl and Kultida \"Tida\" Woods (née Punsawad). He has two half‑brothers and a half‑sister from his father's first marriage. Earl, a retired U.S. Army officer and Vietnam War veteran, was born to African-American parents and was also described as having European, Chinese, and Native American (Cherokee) ancestry.\n[…]\nHis mother chose his first name, Eldrick, because it began with \"E\" (for Earl) and ended with \"K\" (for Kultida). His middle name, Tont, is a traditional Thai name. He was nicknamed Tiger in honor of his father's friend, South Vietnamese colonel Vuong Dang Phong, who was also known as \"Tiger\". Woods's niece, Cheyenne Woods, played collegiate golf at Wake Forest University and turned professional in 2012, making her debut at the LPGA Championship.\n[…]\nIn November 2006, Woods announced his intention to begin designing golf courses around the world through a new company, Tiger Woods Design. A month later, he announced that the company's first course would be in Dubai as part of a 25.3-million-square-foot development, The Tiger Woods Dubai. The Al Ruwaya Golf Course was initially expected to finish construction in 2009.\n[…]\nTiger Woods at the PGA Tour official site\n[…]\nTiger Woods at the European Tour official site\n[…]\nTiger Woods at the Japan Golf Tour official site\n[…]\nTiger Woods at the Official World Golf Ranking official site\n[…]\nTiger Woods at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tiger_Woods",
        "situacao": "ok",
        "texto": "Eldrick Tont \"Tiger\" Woods (Cypress, 30 de dezembro de 1975) é um golfista profissional norte-americano. Amplamente considerado um dos maiores jogadores de golfe de todos os tempos e um dos atletas mais famosos da história, foi eleito para o Hall da Fama do Golfe Mundial. Além disso, está empatado em primeiro lugar nas vitórias do PGA Tour, ocupa o segundo lugar nos principais campeonatos masculin\n[…]\nWoods detém vários recordes de golfe. Ele tem sido o jogador número um do mundo por mais semanas consecutivas e pelo maior número total de semanas de qualquer jogador de golfe na história. Foi premiado com o PGA Player of the Year, um recorde de 11 vezes, e ganhou o prêmio Byron Nelson pela menor média de pontuação ajustada, um recorde de oito vezes. Woods tem o recorde de liderar a lista de dinheiro em dez temporadas diferentes.\n[…]\nEle ganhou 15 grandes campeonatos profissionais de golfe (atrás apenas de Jack Nicklaus, que lidera com 18) e 82 eventos do PGA Tour (empatado em primeiro lugar com Sam Snead). Woods lidera todos os jogadores de golfe ativos em vitórias importantes na carreira e vitórias no PGA Tour. É também o quinto jogador (depois de Gene Sarazen, Ben Hogan, Gary Player e Jack Nicklaus) a alcançar o Grand Slam da carreira, e o mais jovem a fazê-lo.\n[…]\nWoods ganhou 18 campeonatos mundiais de golfe. Ele também fez parte da equipe americana vencedora da Ryder Cup de 1999. Em maio de 2019, recebeu a Medalha Presidencial da Liberdade de Donald Trump, sendo o quarto jogador de golfe a receber a homenagem.\n[…]\nEm 20 de agosto de 2006, o governador Arnold Schwarzenegger da Califórnia anunciou que o nome de Tiger Woods seria introduzido no California Hall of Fame.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "America's Cup",
      "descricao": "Troféu e competição de regatas de vela disputados desde 1851."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O troféu de vela America's Cup não homenageia um continente nem um país. De onde vem o seu nome?",
    "resposta": "Da escuna America, vencedora em 1851",
    "fonte": [
      "https://en.wikipedia.org/wiki/America%27s_Cup",
      "https://en.wikipedia.org/wiki/America_(yacht)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/America%27s_Cup",
        "situacao": "ok",
        "texto": "The America's Cup is a sailing competition and the oldest international competition still operating in any sport. America's Cup match races are held between two sailing yachts: one from the yacht club that currently holds the trophy (known as the defender) and the other from the yacht club that is challenging for the cup (the challenger). The winner is awarded the America's Cup trophy, informally \n[…]\nThe America's Cup is the oldest competition in international sport, and the fourth oldest continuous sporting trophy of any kind. The cup itself was manufactured in 1848 and first called the \"RYS £100 Cup\". It was first raced for on 22 August 1851 around the Isle of Wight off Southampton and Portsmouth in Hampshire, England, in a fleet race between the New York Yacht Club's America and 15 yachts of the Royal Yacht Squadron.\n[…]\nThe cup was originally known as the 'R.Y.S. £100 Cup', awarded in 1851 by the British Royal Yacht Squadron for a race around the Isle of Wight in the United Kingdom. The winning yacht was a schooner called America, owned by a syndicate of members from the New York Yacht Club (NYYC).\n[…]\nIt was originally known as the \"R.Y.S. £100 Cup\", standing for a cup of a hundred GB Pounds or \"sovereigns\" in value. The cup was subsequently mistakenly engraved as the \"100 Guinea Cup\" by the America syndicate, but was also referred to as the \"Queen's Cup\" (a guinea is an old monetary unit of one pound and one shilling, now £1.05). Today, the trophy is officially known as the \"America's Cup\" after the 1851 winning yacht, and is affectionately called the \"Auld Mug\" by the sailing community.\n[…]\nChevalier, François; Taglang, Jacques (1987). America's Cup Yacht Designs, 1851–1986. Paris, France: François Chevalier & Jacques Taglang. ISBN 978-2-9502105-0-0. LCCN 88214406. OL 2143913M.\n[…]\nHeckstall-Smith, Brooke (1911). \"Yachting § The America's Cup.\" . Encyclopædia Britannica (11th ed.)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/America_(yacht)",
        "situacao": "ok",
        "texto": "America was a 19th-century racing yacht and first winner of the America's Cup international sailing trophy.\n[…]\nCrewed by Brown and eight professional sailors, with George Steers, his older brother James, and James' son George as passengers, America left New York on June 21, 1851, and arrived at Le Havre on July 11. They were joined there by Commodore Stevens. After drydocking and repainting America left for Cowes, Isle of Wight, on July 30. While there the crew enjoyed the hospitality of the Royal Yacht Squadron while Stevens searched for someone who would race against his yacht.\n[…]\nThe race was held on August 22, 1851, with a 10:00 AM start for a line of seven schooners and another line of eight cutters. America had a slow start due to a fouled anchor and was well behind when she finally got under way. Within half an hour however, she was in 5th place and gaining.\n[…]\nJohn Cox Stevens and the syndicate from the New York Yacht Club owned the America from the time that she was launched on May 3, 1851, until ten days after she won the regatta that made her famous. On September 1, 1851, the yacht was sold to John de Blaquiere, 4th Baron de Blaquiere. In late July 1852, America ran aground at Portsmouth, Hampshire and was damaged.\n[…]\nTom Cunliffe (2001). Pilot Schooners of North America and Great Britain. Woodenboat publications. ISBN 978-0-937822-69-2. - accurate lines of the America (1851)\n[…]\n\"AMERICA Cup 1851 AMERICA\" (in German). Klaus Kramern.\n[…]\nGendell, David (2024). The Last Days of the Schooner America: A Lost Icon at the Annapolis Warship Factory. Lyons Press."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/America%27s_Cup",
        "situacao": "ok",
        "texto": "A America’s Cup (Copa AméricaPB, Taça AméricaPE) e informalmente conhecida como Auld Mug, é a mais famosa e prestigiada regata do iatismo, e o mais antigo troféu do esporte internacional depois do jeu de paume, antecedendo os Jogos Olímpicos modernos de 45 anos. O esporte atrai os principais navegadores e projetistas de iates do mundo por causa da sua longa história e prestígio como o \"cálice sagr\n[…]\nA taça era originalmente conhecida como 'RYS £ 100 Cup', concedida em 1851 pelo British Royal Yacht Squadron para uma corrida ao redor da Ilha de Wight, no Reino Unido. O iate vencedor foi uma escuna chamada America, de propriedade de um sindicato de membros do New York Yacht Club (NYYC).\n[…]\nEra originalmente conhecido como o \"RYS £ 100 Cup\", representando um copo de cem libras ou \"soberanos\" em valor. A taça foi posteriormente gravada erroneamente como a \"100 Guinea Cup\" pelo sindicato da América, mas também foi chamada de \"Queen's Cup\" (uma guiné é uma antiga unidade monetária de uma libra e um xelim, agora £ 1,05). Hoje, o troféu é oficialmente conhecido como \"America's Cup\" em homenagem ao iate vencedor de 1851, e é carinhosamente chamado de \"Auld Mug\" pela comunidade de vela.\n[…]\nAshbury entrou com Cambria na corrida da NYYC Queen's Cup em Nova York em 8 de agosto contra uma frota de dezessete escunas. O Cambria ficou apenas em oitavo lugar, atrás do envelhecido America (178,6 toneladas, 1851) em quarto lugar e Magic (92,2 toneladas, 1857) na liderança da frota.\n[…]\nHenry \"Hank\" Coleman Haff, foi introduzido no Hall da Fama da Copa América em 2004 por sua partida do Defender em 1895 e trazer a taça de volta. Aos 58 anos, Hank Haff foi o vencedor da taça mais velho da história da corrida.\n[…]\nRegistros de clubes e capitães com mais vitórias na America's Cup.\n[…]\nHerreshoff Marine Museum / America’s Cup Hall of Fame (em inglês)\n[…]\nCupInfo.com Detalhes da história da America's Cup (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Copa Stanley",
      "descricao": "Troféu da liga norte-americana de hóquei no gelo, a NHL."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A Copa Stanley, do hóquei no gelo, leva o nome de um lorde britânico. Que cargo ele ocupava no Canadá?",
    "resposta": "Governador-geral",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stanley_Cup",
      "https://pt.wikipedia.org/wiki/Copa_Stanley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stanley_Cup",
        "situacao": "ok",
        "texto": "The Stanley Cup (French: La Coupe Stanley) is the championship trophy awarded annually to the National Hockey League (NHL) playoff champion. It is the oldest existing trophy to be awarded to a professional sports franchise in North America, and the International Ice Hockey Federation (IIHF) considers it to be one of the \"most important championships available to the sport\".\n[…]\nThe trophy was commissioned in 1892 as the Dominion Hockey Challenge Cup and is named after Lord Stanley of Preston, the governor general of Canada, who donated it as an award to Canada's top-ranking amateur ice hockey club. The entire Stanley family supported the sport, the sons and daughters all playing and promoting the game. The first Cup was awarded in 1893 to the Montreal Hockey Club, and winners from 1893 to 1914 were determined by challenge games and league play.\n[…]\nAfter Frederick Stanley, 1st Baron Stanley of Preston (later the 16th Earl of Derby) was appointed by Queen Victoria as governor general of Canada on June 11, 1888, he and his family became highly enthusiastic about ice hockey. Stanley was first exposed to the game at Montreal's 1889 Winter Carnival, where he saw the Montreal Victorias play the Montreal Hockey Club. The Montreal Gazette reported that he \"expressed his great delight with the game of hockey and the expertise of the players\".\n[…]\nA website known as freestanley.com (since closed) was launched, asking fans to write to the Cup trustees and urge them to return to the original Challenge Cup format. Adrienne Clarkson, then governor general of Canada, alternately proposed that the Cup be presented to the top women's hockey team in lieu of the NHL season. This idea was so unpopular that the Clarkson Cup was created instead.\n[…]\nList of awards named after governors general of Canada\n[…]\nList of awards presented by the governor general of Canada"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_Stanley",
        "situacao": "ok",
        "texto": "A Copa Stanley (Stanley Cup, em inglês; Coupe Stanley, em francês) é o troféu dado à equipe vencedora da NHL, principal liga de hóquei no gelo do mundo. É disputado desde 1893, sendo uma das taças em disputa há mais tempo. O campeão de 2025-26 é o Carolina Hurricanes.\n[…]\nTudo começou em 18 de março de 1892, em um jantar da Associação Atlética Amadora de Ottawa. Lord Kilcoursie, um jogador do Ottawa Rebels, um clube de hóquei, entregava a seguinte mensagem em nome de Lord Stanley, Governador-geral do Canadá:\n[…]\nLogo depois disso, Lord Stanley comprou uma taça de prata que mede sete polegadas e meia de altura por onze polegadas e meia transversalmente pela soma de dez guineas (aproximadamente cinquenta dólares). Apontando dois senhores de Ottawa, o xerife John Sweetland e Philip D. Ross, como guardiães (trustees) dessa taça, combinou as seguintes circunstâncias preliminares, para administração da competição, com período anual:\n[…]\nO primeiro vencedor da Copa Stanley foi o Clube Atlético Amador de Hóquei da Associação de Montreal (AAA), campeão da Associação Amadora de Hóquei de Canadá em 1893. Ironicamente, Lord Stanley nunca testemunhou um jogo do torneio, retornando a sua Inglaterra natal no meio da temporada 1893. Não obstante, o legado do seu troféu tornou a NHL uma das mais prestigiadas ligas do mundo.\n[…]\nA Copa Stanley é o único troféu de ligas profissionais norte-americanos que pode ser tocado por torcedores comuns.\n[…]\nAbaixo segue a lista de campeões da Copa Stanley e seus registros nas finais desde 1915, ano em que a taça passou a ser disputada anualmente. Antes de 1915, quando era um Challenger, diversas equipes poderiam desafiar o campeão do ano anterior, assim não havia um claro vencedor anual."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Sepak takraw",
      "descricao": "Esporte do Sudeste Asiático, parecido com o vôlei, jogado com os pés e uma bola de vime."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome sepak takraw mistura malaio e tailandês. Takraw é a bola de vime. E sepak, em malaio, significa o quê?",
    "resposta": "Chutar",
    "distratores": [
      "Saltar",
      "Rede",
      "Cabecear"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sepak_takraw"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sepak_takraw",
        "situacao": "ok",
        "texto": "Sepak takraw (also mononymously as Sepaktakraw) is a Southeast Asian team sport. It is played with a ball made of rattan or plastic between two teams of two to four players on a court resembling a badminton court. It is similar to volleyball and footvolley in its use of a rattan ball and players using only their feet, knees, shoulders, chest, and head to touch the ball.\n[…]\nThe Sepak Takraw ball should be spherical, made of synthetic fibre or one woven layer.\n[…]\nSepak Takraw balls without synthetic rubber covering must have 12 holes and 20 intersections, must have a circumference measuring from 42 to 44 cm (16.5–17.3 in) for men or from 43 to 45 cm (16.9–17.7 in) for women, with a weight that ranges from 170 to 180 g (6.0–6.3 oz) for men or from 150 to 160 g (5.3–5.6 oz) for women.\n[…]\nThe Sepak Takraw ball can also be constructed of synthetic rubber or soft durable material for covering the ball, for the purpose of softening the impact of the ball on the player's body. The type of material and method used for constructing the ball or for covering the ball with rubber or soft durable covering must be approved by ISTAF before it can be used for any competition.\n[…]\nAll world, international, and regional competitions sanctioned by International Sepaktakraw Federation, including but not limited to, the Olympic Games, World Games, Commonwealth Games, Asian Games, and SEA Games, must be played with ISTAF approved Sepak Takraw balls.\n[…]\nIn the second episode of Nichijou, Mio Naganohara's mother fails to wake her daughter up for school because she went out to play Sepak Takraw with the neighborhood association.\n[…]\nSepak Takraw was featured in the episode Temple Frogs from the Disney animated show Amphibia, where Sprig stumbles upon a match played at the Thai Temple.\n[…]\nPredecessors to modern game of Sepak Takraw\n[…]\nTAKRAW ASSOCIATION OF THAILAND"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sepak_takraw",
        "situacao": "ok",
        "texto": "O sepak takraw (pronunciado de preferência AFI: [seˈpak taˈkro]) (voleibol de pontapé, ou simplesmente takraw) é um desporto nativo do Sudeste Asiático, similar ao voleibol, mas no qual se utiliza uma bola de Ratã (espécie de bambu) e não é permitido usar as mãos ou o braço. Misto entre futebol e voleibol, é um desporto muito popular na Tailândia, Camboja, Malásia, Laos e Indonésia. O desporto ter\n[…]\nTradicionalmente o takraw, como também é conhecido, era jogado em círculo onde um jogador passava a bola a outro sem deixá-la cair. No primeiro quarto do século passado, um grupo de entusiastas do esporte introduziu o uso da rede e estabeleceu regras para torná-lo mais atrativo.\n[…]\nDevido às características do jogo o Brasil possui grandes jogadores “importados” de outras modalidades esportivas como o futevôlei, capoeira e também do futebol. Essa facilidade em dominar a bola e executar acrobacias fez com que, por três ocasiões 2000, 2003 e 2007, o Brasil se tornasse campeão mundial em sua categoria na Copa do Rei da Tailândia, maior evento da modalidade.\n[…]\nO destaque é a bola, originalmente feita de rattan (um tipo de bambu). Em 1982, foi lançada a bola de tecido sintético (plástico). Os principais fabricantes das bolas sintéticas são Gajah Emas e Marathon que se encontram respectivamente na Malásia e Tailândia. Nas competições oficiais são utilizadas as bolas de material sintético.\n[…]\nAssociação Brasileira de Takraw (ABT) - www.takraw.com.br - Pioneiros no esporte no âmbito nacional, os Pernambucanos contam com a Associação Brasileira de Takraw (ABT), que tem sua sede na cidade de Olinda, estado de Pernambuco, onde é possível encontrar também a primeira quadra para prática do esporte do Estado.\n[…]\nFederação Paulista de Sepak Takraw (FPST)\n[…]\n«Associação Brasileira de Takraw». www.takraw.com.br\n[…]\n«Explicação do jogo». no site oficial dos Jogos Asiáticos de 2006",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Rayssa Leal",
      "descricao": "Skatista maranhense, medalhista olímpica no skate street."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Aos sete anos, a maranhense Rayssa Leal viralizou num vídeo em que andava de skate fantasiada. Que apelido ela ganhou?",
    "resposta": "Fadinha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rayssa_Leal",
      "https://en.wikipedia.org/wiki/Rayssa_Leal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        "situacao": "ok",
        "texto": "Jhúlia Rayssa Mendes Leal (Imperatriz, 4 de janeiro de 2008) é uma skatista brasileira, vice-campeã olímpica nos Jogos Olímpicos de Verão de 2020 em Tóquio, sendo a mais jovem medalhista olímpica brasileira. Em 2024, conquistou o bronze nos Jogos Olímpicos de Paris. Além disso, é campeã pan-americana, vencendo a medalha de ouro no skate street dos Jogos Pan-Americanos de 2023, realizados em Santia\n[…]\nPopularmente chamada de “Fadinha do Skate”, Rayssa ganhou esse apelido após seu vídeo fazendo manobras de skate fantasiada de fada viralizar na internet aos sete anos de idade. Desde então, ela se tornou conhecida na cena do skate brasileira e nas redes sociais. Seu sucesso nas competições fez dela uma atleta reconhecida no skate mundial.\n[…]\nRayssa, filha de Lilian e Haroldo Leal, nasceu em 4 de janeiro de 2008 e mora em Imperatriz, segunda maior cidade do Maranhão, e alterna os estudos escolares com os treinamentos. Começou a treinar o esporte aos seis anos de idade, após receber um skate de aniversário de um amigo de seu pai. Apesar de não se importar de ser chamada de “Fadinha”, a atleta prefere ser chamada de Rayssa Leal.\n[…]\nRayssa fechou o ano de 2021 competindo no Skate Total Urbe (STU), realizado em dezembro na cidade de São Paulo, pela primeira vez, se tornou campeã da competição open, isto é, aberta para competidores de todos os países.\n[…]\nSeguindo a tradição americana, para um skatista receber o título de profissional (pro) naquele país, ele precisa assinar um shape de skate profissional com o seu nome. Por essa lógica, Rayssa Leal tornou-se profissional em maio de 2022, ao receber seu primeiro modelo pro da marca April Skateboards, do skatista australiano Shane O'Neill. O modelo recebido pela atleta, batizado de \"Fadinha\", relembra e exalta o início de seu carreira.\n[…]\nRayssa Leal no X\n[…]\nRayssa Leal no Facebook\n[…]\nRayssa Leal no Instagram\n[…]\nRayssa Leal no YouTube\n[…]\nRayssa Leal em Olympics.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rayssa_Leal",
        "situacao": "ok",
        "texto": "Jhulia Rayssa Mendes Leal (born 4 January 2008) is a Brazilian professional skateboarder who won a silver medal in women's street skateboarding at the 2020 Summer Olympics and a bronze medal at the 2024 Summer Olympics.\n[…]\nLeal was born in Imperatriz, the second largest city in Maranhão, Brazil, to parents Haraldo Oliveira Leal and Lilian Mendes. She has a younger brother, Arthur. She started skateboarding at the age of six, after getting her first skateboard as a gift from a family friend.\n[…]\nLeal first gained attention at the age of 7, when a video of her skating in a tutu and jumping off tall structures on her skateboard went viral online. Leal's mother filmed the video on September 7, 2015, and sent it to American professional skateboarder Tony Hawk. The next day, Hawk reposted on Twitter and commented: \"I don't know anything about it, but it's amazing: a fairytale-style heelflip in Brazil\". At that time, she always made a post with the best maneuver of the day.\n[…]\nShe was dubbed \"A Fadinha do Skate\", translated roughly as \"The Little Fairy of Skateboarding\".\n[…]\nIn December 2025, Leal won the 2025 SLS Super Crown in São Paulo, her forth consecutive win at SLS.\n[…]\nLeal is set to appear as one of the new playable skaters in the 2025 video game Tony Hawk's Pro Skater 3 + 4, a remake of the third and fourth entries in the series.\n[…]\nRayssa Leal at World Skate (alternative link)\n[…]\nRayssa Leal at The Boardr\n[…]\nRayssa Leal at SPoT\n[…]\nRayssa Leal at the X Games\n[…]\nRayssa Leal at Olympics.com\n[…]\nRayssa Leal at Olympedia\n[…]\nRayssa Leal at InterSportStats\n[…]\nRayssa Leal at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nRayssa Leal on Instagram"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Claret Jug",
      "descricao": "Troféu do Open Championship, o mais antigo torneio de golfe."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O primeiro troféu do Open Britânico de golfe era um cinturão. Por que ele precisou ser substituído pela Claret Jug?",
    "resposta": "Young Tom Morris ficou com ele",
    "fonte": [
      "https://en.wikipedia.org/wiki/Claret_Jug",
      "https://en.wikipedia.org/wiki/Young_Tom_Morris"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Claret_Jug",
        "situacao": "ok",
        "texto": "The Golf Champion Trophy, commonly known as the Claret Jug, is the trophy presented to the winner of The Open Championship (also called the \"British Open\"), one of the four major championships in golf.\n[…]\nThe awarding of the Claret Jug dates from 1872, when a new trophy was needed after Young Tom Morris had won the original Challenge Belt (presented by Prestwick Golf Club) outright in 1870 by winning the Championship three consecutive seasons. Prestwick had both hosted and organised the Championship from 1860 to 1870.\n[…]\nEach club contributed £10 to the cost of the new trophy, which is inscribed 'The Golf Champion Trophy', and was made by Mackay Cunningham & Company of Edinburgh.\n[…]\nWhen played the 1872 event trophy was unready to be presented to Morris (his fourth consecutive title), although his name was the first to be engraved on it. In 1872, Morris was presented with a medal as have all subsequent winners. In 1873 Tom Kidd became the first winner to be actually presented with the Claret Jug after winning the Championship.\n[…]\nThe original Claret Jug has been on permanent display at the clubhouse of the Royal and Ancient Golf Club of St Andrews since 1928. The original Challenge Belt is also on display at the same site, having been donated in 1908 by the Morris family.\n[…]\nThe current Claret Jug was first awarded to Walter Hagen for winning the 1928 Open. The winner must return the trophy before the next year's Open, and receives a replica to keep permanently. Three other replicas exist: one in the R&A World Golf Museum at St Andrews, and two used for travelling exhibitions.\n[…]\nThe history of the Challenge Belt and the Claret Jug"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Young_Tom_Morris",
        "situacao": "ok",
        "texto": "Thomas Morris (20 April 1851 – 25 December 1875), better known as Young Tom Morris, was a Scottish professional golfer. He is considered one of the pioneers of professional golf, and was the first young prodigy in golf history. He won four consecutive titles in the Open Championship, and did this by the age of 21.\n[…]\nMorris was born in St Andrews, the \"Home of Golf\", and died there on Christmas Day, 1875, aged 24. His father, Old Tom Morris, was the greenkeeper and professional of the St Andrews Links, and himself won four of the first eight Open Championships. Young Tom's first Open Championship win – in 1868 at age 17 – made him the youngest major champion, a record which still stands.\n[…]\nMorris learned golf from a young age over the Prestwick Golf Club links, which had been laid out by his father, the club's professional and greenkeeper, in 1851. He bypassed the caddying and clubmaking roles, which were the usual entry to golf for young players at that time; he was the first future top player to do this.\n[…]\nMorris won this match decisively and was awarded a prize of five pounds, a significant amount at the time; the two young stars had been followed by a large gallery. His match score would have won the professional tournament.\n[…]\n1872 Open Championship\n[…]\nThe 2016 film Tommy's Honour depicts the lives and careers of Old Tom (Peter Mullan) and Young Tom (Jack Lowden), and focuses on their complex and bittersweet relationship. It is based on Kevin Cook's Herbert Warren Wind Book Award–winning 2007 biography, Tommy's Honor: The Story of Old Tom Morris and Young Tom Morris, Golf's Founding Father and Son.\n[…]\nStephen Proctor (11 April 2019). Monarch of the Green: Young Tom Morris: Pioneer of Modern Golf. Birlinn. ISBN 978-1-78885-166-4.\n[…]\n'Young' Tom Morris at the Scottish Sports Hall of Fame"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Disco de hóquei",
      "descricao": "Disco de borracha usado no hóquei no gelo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Antes das partidas de hóquei no gelo, os discos ficam guardados num congelador. Para que serve isso?",
    "resposta": "Para quicarem menos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hockey_puck"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hockey_puck",
        "situacao": "ok",
        "texto": "A hockey puck is either an open or closed disk used in a variety of sports and games. There are designs made for use on an ice surface, such as in ice hockey, and others for the different variants of floor hockey which includes the wheeled skate variant of inline hockey (a.k.a. roller hockey). They are all designed to serve the same function a ball does in ball games.\n[…]\nA smaller and lighter version of the standard puck exists for junior competition and is approximately 1 lb 12 oz (0.80–0.85 kg) and of similar construction to the standard puck.\n[…]\nSpongee a.k.a. \"sponge hockey\", is an organized recreational cult game that emerged in Canada around the 1950s and is played in the Canadian city of Winnipeg. It gets its name from the puck that is used: instead of the hard vulcanized rubber puck used in regular ice hockey, a softer sponge puck is used. At one point, some locals referred to it as \"tweeter\" based on the sound the original pucks made.\n[…]\nThe spongee puck originated when someone took a toy red-white-and-blue handball and cut out the center, leaving a rude approximation of a standard hockey puck. Eventually manufactured types of sponge pucks came into use, some of which were developed in Slovakia and had a spring core. Spongee pucks are softer than ice hockey pucks and have more bounce.\n[…]\nThe term \"puck\" is sometimes also applied to similar (though often smaller) gaming discs in other sports and games, including novuss, shuffleboard, table shuffleboard, box hockey, floor hockey, and air hockey.\n[…]\nA very common use of a slotted hockey puck is as an adaptor between the metal foot of a trolley jack and the sill (rocker panel) of an automobile. The sill has a spot-welded lip which fits into the slot of the puck and would otherwise be bent or marked by the metal foot."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Puck_%28h%C3%B3quei%29",
        "situacao": "ok",
        "texto": "O puck, ou mais conhecido em português como disco ou pastilha, é o elemento fundamental de vários esportes, sendo o mais conhecido o hóquei no gelo. É utilizado batendo-se nele com o taco, com o objetivo de introduzi-lo na baliza adversária.\n[…]\nO disco é fabricado em borracha vulcanizada e tem uma espessura de 2,54 cm (1 polegada) e 7,62 cm de diâmetro (3 polegadas). Seu peso varia entre 156 e 170 gramas (5,5 a 6 onças).\n[…]\nO disco de hóquei no gelo foi criado em 1877 por William F. Robertson, cortando uma bola duas vezes, para evitar o rebote incessante que uma bola esférica causava, saindo em várias ocasiões disparada em direção ao público.\n[…]\nA velocidade máxima registrada por um tiro de disco de hóquei foi de 170 km/h (105,4 mph).\n[…]\nA rede de televisão Fox, com o objetivo de tornar os jogos da NHL mais fáceis de acompanhar pela televisão, inventou o chamado FoxTrax, um disco que incluía LEDs em sua fabricação.\n[…]\nVariantes do disco são utilizadas em outros esportes além do hóquei no gelo. É o caso do hóquei subaquático, cuja diferença fundamental em relação ao hóquei convencional é que ele possui um núcleo de chumbo de aproximadamente um quilo e meio para facilitar seu deslocamento debaixo d'água, sendo revestido de teflon ou outro material plástico.\n[…]\nObjetos semelhantes também são utilizados nos jogos de tejo ou hóquei de ar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Pentatlo moderno",
      "descricao": "Modalidade olímpica criada por Pierre de Coubertin, que combina esgrima, natação, hipismo, tiro e corrida."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Ao criar o pentatlo moderno, Pierre de Coubertin quis reproduzir as provações de que personagem do século dezenove?",
    "resposta": "Soldado de cavalaria atrás das linhas inimigas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Modern_pentathlon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Modern_pentathlon",
        "situacao": "ok",
        "texto": "The modern pentathlon is an Olympic multisport that consists of five events: fencing (one-touch épée followed by direct elimination), freestyle swimming, obstacle course racing, laser pistol shooting, and cross country running.\n[…]\nMost sources state that the creator of the modern pentathlon was Baron Pierre de Coubertin, the founder of the modern Olympic Games. One alternative view is provided by researcher Sandra Heck, who concluded that Viktor Balck, the President of the Organizing Committee for the 1912 Games, made use of the long tradition of Swedish military multi-sports events to create the modern pentathlon.\n[…]\nThe laser run is organized as a pursuit race: athletes start with a handicap based on the summed points gathered in the previous disciplines; as such it determines the overall outcome of the modern pentathlon event. The rest of the field face a one-second handicap for each pentathlon point by which they trail the leader. This ensures that the first person to cross the finish line wins the Gold medal.\n[…]\nІn August 2023 during the 2023 UIPM Pentathlon and Laser Run World Championships, the UIPM signed a memorandum of understanding with World Obstacle to collaborate on the integration of obstacle racing into the modern pentathlon at the senior level; UIPM president Klaus Schormann stated that the federation was \"want[ing] to bring a different challenge to the Olympic Movement, to be more urban and provide something that young generations will love.\" The MoU was criticised by Pentathlon United, who questioned World Obstacle's finances (in particular, being funded solely by one person with no other commercial revenue).\n[…]\nModern pentathlon at the Summer Olympics\n[…]\nLasers make modern pentathlon more modern"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pentatlo_moderno",
        "situacao": "ok",
        "texto": "Pentatlo moderno é um desporto olímpico praticado por homens e por mulheres, individualmente ou em equipes. Compõe-se de cinco modalidades diferentes: hipismo, esgrima, natação, tiro esportivo e corrida. É proclamado vencedor aquele que obtiver o melhor desempenho geral ao somar mais pontos. Por essa variedade de esportes, o vencedor do pentatlo é considerado o atleta mais completo.\n[…]\nNo início do século XX, o Barão de Coubertin, fundador dos Jogos Olímpicos da Era Moderna,  decidiu estimular a realização do pentatlo moderno. O pentatlo estreou nas Olimpíadas de 1912, em Estocolmo, Suécia.\n[…]\nO pentatlo moderno é uma prova criada pelo Barão Pierre de Coubertin, fundador dos Jogos Olímpicos da era moderna, baseada na filosofia por detrás do pentatlo disputado nos Jogos Olímpicos antigos. Na Grécia Antigamente, o pentatlo era constituído por provas que pretendiam demonstrar todas as aptidões físicas. Aquando da invenção da versão moderna, Coubertin inspirou-se nos soldados da cavalaria do século XIX, que deveriam saber montar um cavalo desconhecido, disparar, esgrimir, correr e nadar.\n[…]\nO pentatlo moderno consiste em cinco provas:\n[…]\nEm 2012, apenas 18 países possuíam alguma medalha olímpica no pentatlo moderno. As extintas União Soviética e Checoslováquia e a Equipe Unificada também conquistaram medalhas em Olimpíadas. Estados Unidos e China, as duas maiores potências olímpicas do mundo na atualidade, ainda não obtiveram medalha de ouro, e o Brasil é o único país da América do Sul que subiu ao pódio no esporte.\n[…]\nA China e o Brasil obtiveram suas primeiras medalhas olímpicas do pentatlo moderno nas Olimpíadas de 2012, e a Austrália e o México nas Olimpíadas de 2016.\n[…]\nPentatlo moderno nos Jogos Olímpicos\n[…]\nCampeonato Mundial de Pentatlo Moderno\n[…]\n«Federação Internacional de Pentatlo Moderno»\n[…]\n«Confederação Brasileira de Pentatlo Moderno»\n[…]\n«COI Pentatlo Moderno»\n[…]\n«COI Pentatlo Moderno»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Skate",
      "descricao": "Esporte praticado sobre uma prancha com quatro rodinhas, surgido na Califórnia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na Califórnia de meados do século vinte, o skate nasceu como passatempo de quem queria fazer o quê nos dias sem ondas?",
    "resposta": "Surfar no asfalto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Skateboarding"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Skateboarding",
        "situacao": "ok",
        "texto": "Skateboarding is an action sport that involves riding and performing tricks using a skateboard, as well as a recreational activity, an art form, an entertainment industry job, and a method of transportation. Originating in the United States, skateboarding has been shaped and influenced by many skateboarders throughout the years. A 2009 report found that the skateboarding market is worth an estimat\n[…]\nWhile the main event was won by freestyle spinning skate legend Russ Howell, a local skate team from Santa Monica, California, the Zephyr team, ushered in a new era of surfer style skateboarding during the competition that would have a lasting impact on skateboarding's history.\n[…]\nManufacturers started to experiment with more exotic composites and metals, like fiberglass and aluminum, but the common skateboards were made of maple plywood. The skateboarders took advantage of the improved handling of their skateboards and started inventing new tricks. Skateboarders, most notably Ty Page, Bruce Logan, Bobby Piercy, Kevin Reed, and the Z-Boys started to skate the vertical walls of swimming pools that were left empty in the 1976 California drought.\n[…]\nOne of the early leading trends associated with the sub-culture of skateboarding itself was the sticky-soled slip-on skate shoe, most popularized by Sean Penn's skateboarding character from the 1982 film Fast Times at Ridgemont High.\n[…]\nMany professional skateboarders are designed a pro-model skate shoe, with their name on it, once they have received a skateboarding sponsorship after becoming notable skateboarders. Some shoe companies involved with skateboarding, like Sole Technology, an American footwear company that makes the etnies skate shoe brand, further distinguish themselves in the market by collaborating with local cities to open public skateparks, such as the etnies Skatepark in Lake Forest, California.\n[…]\nList of skateboarding companies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Skate",
        "situacao": "ok",
        "texto": "Skate (em inglês: skateboarding, skating), também denominado no Brasil por esqueitismo ou simplesmente Skate, é uma expressão cultural que manifesta-se de diferentes formas  e um esporte  que possui diferentes vertentes, as quais em suma se caracterizam por em deslizar sobre o solo equilibrando-se em algum tipo de skateboard ou simplesmente skate no Brasil (implemento usado para a prática).\n[…]\nNo Brasil, o praticante de skate recebe o nome de «skatista», enquanto que, em  outros países pode ser chamado de skateboarder ou skater.\n[…]\nO esporte foi inventado na Califórnia, nos Estados Unidos. O crescimento do \"sidewalk surfing\", ou em português \"surfe no asfalto\", se deu de uma maneira tão grande que muitos dos jovens da época se renderam ao novo esporte chamado \"skate\". Surgiam, então, os primeiros skatistas da época.\n[…]\nNo início da década de 1960, os surfistas da Califórnia mais ou menos na cidade de Los Angeles queriam fazer das pranchas um divertimento também nas ruas, em uma época de marés baixas e secas na região. Inicialmente, a nova \"maneira de surfar\" foi chamada de sidewalk surfing. Em 1965, surgiram os primeiros campeonatos, mas o skate só ficou mais reconhecido uma década depois.\n[…]\nEm março de 1999, foi fundada em Curitiba a Confederação Brasileira de Skate (CBSk), a entidade que regulamenta as normas e políticas voltadas ao desenvolvimento do skate (skateboard) no território brasileiro.\n[…]\nAlém do livro A Onda Dura, existem dois documentários importantes para a história do skateboarding brasileiro: Dirty Money - que conta a história de como surgiu a iniciativa de se editar o primeiro vídeo de skate no país - e Vida Sobre Rodas - que conta a histórias do skate brasileiro, da segunda metade da década de 1980 até os dias de hoje, sob o ponto de vista de quatro importantes skatistas brasileiros: Bob Burnquist, Sandro Dias \"Mineirinho\", Felipe Lima e Alan Patrick.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Ironman",
      "descricao": "Triatlo de longa distância criado no Havaí em 1978, com natação, ciclismo e corrida."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Ironman nasceu no Havaí, em 1978, para encerrar uma discussão entre atletas. O que eles discutiam?",
    "resposta": "Que tipo de atleta era mais preparado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ironman_World_Championship"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ironman_World_Championship",
        "situacao": "ok",
        "texto": "The Ironman World Championship is a triathlon held annually in Hawaii, United States from 1978 to 2022, with no race in 2020 and an additional race in 1982. It is owned and organized by the World Triathlon Corporation. It is the annual culmination of a series of Ironman triathlon qualification races held throughout the world. From 2023 to 2025, the Men's and Women's Ironman World Championships wer\n[…]\nThe 2022 Ironman World Championship was split with a men's and women's race and the Women's Championship on October 6 followed by the Men's Championship two days later. Also from 2022, Vietnam's automobile maker VinFast was the first ever naming rights partner for 2022 Ironman World Championship and 2023 Ironman 70.3 World Championship.\n[…]\nSince 2023 the men's and women's Ironman World Championships have been split and alternated between Nice, France, and Kona, Hawaii. In 2023, the men's event held on September 10 in Nice, France, and the women's on October 14 in Kona, Hawaii. The men's and women's Championships alternate between these venues until 2026.\n[…]\nQualifying for the World Championship is achieved through placement in one of the other Ironman races or some Ironman 70.3 races.\n[…]\nUntil 2015, individuals could enter a lottery for the chance to participate in the Ironman World Championship. The lottery entry fee was $50 and afforded the chance to win one of 100 berths in the championship race. If selected the winners then had to pay the normal entry fee.\n[…]\nHowever, according to a sworn complaint filed with the U.S. District Court in Tampa, Florida, Ironman illegally charged athletes for a chance to win the opportunity to compete in the Ironman World Championship. According to Florida law, the state where the World Triathlon Corporation resides, it is illegal to set up and charge for a lottery.\n[…]\nIronman.com"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Praia do Norte (Nazaré)",
      "descricao": "Praia da vila portuguesa de Nazaré, famosa pelas ondas gigantes surfadas no inverno."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "As ondas gigantes da Praia do Norte, em Nazaré, Portugal, são amplificadas por qual formação no fundo do mar?",
    "resposta": "Um cânion submarino",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nazar%C3%A9_Canyon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nazar%C3%A9_Canyon",
        "situacao": "ok",
        "texto": "The Nazaré Canyon is a submarine canyon just off the coast of Nazaré in the Oeste region of Portugal, in the eastern North Atlantic Ocean. It is the largest submarine canyon in Europe, reaching depths of about 5,000 metres (16,000 ft) and a length of about 230 kilometres (140 mi).\n[…]\nThe Nazaré Canyon functions as a ripple polarizer. Waves are able to travel at a much greater speed due to the geological fault, arriving at the coast with virtually no dissipation of energy. Praia do Norte consistently presents waves significantly larger than the rest of the Portuguese coast due to the canyon.\n[…]\nThe importance and interest in the natural phenomenon led the Portuguese Hydrographic Institute (IH), in collaboration with the Municipality of Nazaré, to install an exhibition that illustrates the knowledge acquired from the research carried out in the area.\n[…]\nThe Nazaré Canyon Interpretive Center, installed in one of the fort's rooms, houses informational posters, a three-dimensional model of the underwater valley and images and information about the German submarine U-963, which sank in Nazaré's waters at the end of World War II.\n[…]\nOne of the most distinct features of this canyon is the high breaking waves it forms. This makes Nazaré, specifically Praia do Norte, a hotspot for big wave surfing.\n[…]\nNazaré, Portugal\n[…]\nPraia do Norte (Nazaré)\n[…]\n[1] BBC - Garrett McNamara surfs 'highest ever' wave off Portugal.\n[…]\nPhysical processes in the Nazare Canyon area and related sedimentary impacts Archived 2020-10-17 at the Wayback Machine Vitorino, J., A. Oliveira and J. Beja, Geophysical Research Abstracts, Vol. 7, 10187, 2005 SRef-ID: 1607-7962/gra/EGU05-A-10187"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canh%C3%A3o_da_Nazar%C3%A9",
        "situacao": "ok",
        "texto": "O Canhão da Nazaré ou Cana da Nazaré é um desfiladeiro submarino  de origem tectónica situado ao largo da costa da Nazaré na região Oeste de Portugal, relacionado com a falha da Nazaré-Pombal, começa a definir-se a cerca de 500 metros da costa.\n[…]\nO Canhão de Nazaré também funciona como um polarizador de ondulações. As ondas conseguem viajar a uma velocidade muito maior pela falha geológica, chegando na costa praticamente sem dissipação de energia. A Praia do Norte, na vila de Nazaré, apresenta consistentemente ondas significativamente maiores do que o restante da costa portuguesa por conta do Canhão de Nazaré.\n[…]\nEste desfiladeiro submarino provoca grandes alterações ao nível do trânsito sedimentar litoral, uma vez que este vale é um autêntico sumidouro para os sedimentos provenientes de norte, da deriva litoral, o que justifica a inexistência de grandes extensões de areia nas praias a sul da Nazaré.\n[…]\nO Centro Interpretativo do Canhão da Nazaré, instalado numa das salas do forte, oferece aos visitantes a possibilidade de ler e observar vários cartazes, uma maqueta tridimensional do vale submarino e ainda imagens e informação sobre o submarino alemão U-963, afundado ao largo da Nazaré no final da Segunda Guerra Mundial.\n[…]\nNo dia 1 de novembro de 2011, o surfista havaiano, Garrett McNamara surfou (na região conhecida como Norte do Canhão), uma onda medida pelo Billabong XXL Global Big Wave Award de 2011 com 78 pés, entrando para Guiness Book of Records, mostrando como o canhão de Nazaré tem potencial para a prática de tow-in em ondas gigantes.\n[…]\nO surfista Márcio Freire, de 47 anos, de nacionalidade brasileira morreu em 5 de janeiro de 2023 na Praia do Norte, na Nazaré, enquanto praticava surf de tow-in.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Proibição escocesa do golfe de 1457",
      "descricao": "Lei do parlamento escocês, sob o rei Jaime Segundo, que proibiu o golfe e o futebol."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1457, o rei Jaime Segundo da Escócia proibiu o golfe porque o jogo afastava os súditos do treino de quê?",
    "resposta": "Arco e flecha",
    "fonte": [
      "https://en.wikipedia.org/wiki/History_of_golf"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/History_of_golf",
        "situacao": "ok",
        "texto": "The origins of golf are unclear and much debated. However, it is generally accepted that modern golf developed in Scotland from the Middle Ages onwards. The game did not find international popularity until the late 19th century, when it spread into the rest of the United Kingdom and then to the British Empire and the United States.\n[…]\nThe first documented mention of golf in Scotland appears in a 1457 Act of the Scottish Parliament, an edict issued by King James II of Scotland prohibiting the playing of the games of gowf and futball as these were a distraction from archery practice for military purposes. Bans were again imposed in Acts of 1471 and 1491, with golf being described as \"an unprofitable sport\".\n[…]\nThe word golf was first mentioned in writing in 1457 on a Scottish statute on forbidden games as gouf, possibly derived from the Scots word goulf (variously spelled) meaning \"to strike or cuff\". This word may, in turn, be derived from the Dutch word kolf, meaning \"bat\" or \"club\", and the Dutch sport of the same name.\n[…]\nThe history of golf is preserved and represented at several golf museums around the world, notably the R&A World Golf Museum in the town of St Andrews in Fife, Scotland, which is the home of The Royal and Ancient Golf Club of St Andrews, and the United States Golf Association Museum, located alongside the United States Golf Association headquarters in Far Hills, New Jersey.\n[…]\nThe World Golf Hall of Fame in St. Augustine, Florida, also presents a history of the sport, as does the Canadian Golf Hall of Fame in Oakville, Ontario, and the American Golf Hall of Fame in Foxburg, Pennsylvania, at the Foxburg Country Club.\n[…]\nTimeline of golf history (1353–1850)\n[…]\nTimeline of golf history (1851–1945)\n[…]\nTimeline of golf history (1945–1999)\n[…]\nTimeline of golf (2000–present)\n[…]\nR&A World Golf Museum"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Escudo do São Paulo Futebol Clube",
      "descricao": "Distintivo do clube paulista, com estrelas que homenageiam títulos e recordes."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que o escudo do São Paulo Futebol Clube tem duas estrelas vermelhas?",
    "resposta": "Recordes mundiais de Adhemar Ferreira da Silva",
    "fonte": [
      "https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo_Futebol_Clube",
      "https://pt.wikipedia.org/wiki/Adhemar_Ferreira_da_Silva"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo_Futebol_Clube",
        "situacao": "ok",
        "texto": "São Paulo Futebol Clube, ou simplesmente São Paulo, é um clube poliesportivo brasileiro da cidade de São Paulo, capital do estado homônimo. Foi fundado em 25 de janeiro de 1930, tendo interrompido suas atividades em maio de 1935, e as retomado em dezembro do mesmo ano.\n[…]\nA agremiação também possui tradição em outros esportes que não o futebol, como no atletismo, no qual seu atleta na modalidade salto triplo, Adhemar Ferreira da Silva, foi o primeiro bicampeão olímpico do país (Olimpíadas de Helsinque em 1952 – em que superou o recorde mundial na modalidade – e Olimpíadas de Melbourne em 1956). Depois de Helsinque, Adhemar superou pela segunda vez o recorde mundial na modalidade, nos Jogos Pan-Americanos do México em 1955.\n[…]\nEsses recordes são representados pelas duas estrelas douradas no escudo do clube.\n[…]\nAs estrelas foram introduzidas posteriormente e também têm um significado especial. As duas douradas, gravadas no escudo em 1955 e, posteriormente, no uniforme em 1997, representam os recordes mundiais e olímpicos conquistados por Adhemar Ferreira da Silva nas Olimpíadas de 1952 em Helsinque e nos Jogos Pan-Americanos de 1955 no México.\n[…]\nO São Paulo contou, ao longo de sua história, com jogadores e técnicos de destaque no futebol brasileiro e mundial.\n[…]\nApesar de ter sido criado como clube de futebol, o São Paulo possui diversos outros esportes tais como atletismo, basquete, boxe, ginástica, handebol, tênis e vôlei, mas nenhum deles alcança a projeção do futebol por, entre outros motivos, serem amadores e provenientes do complexo social do clube. Assim, esporadicamente, tomam proporções maiores ao alçar esportistas do calibre de Adhemar Ferreira da Silva e Éder Jofre sem ter, porém, a mesma força e investimento do futebol.\n[…]\nSão Paulo Futebol Clube no X"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Adhemar_Ferreira_da_Silva",
        "situacao": "ok",
        "texto": "Adhemar Ferreira da Silva (São Paulo, 29 de setembro de 1927 – São Paulo, 12 de janeiro de 2001) foi um atleta brasileiro, primeiro bicampeão olímpico do país, primeiro atleta sul-americano bicampeão olímpico em eventos individuais, recordista mundial do salto triplo cinco vezes e primeiro atleta a quebrar a barreira dos 16m no salto triplo.\n[…]\nNo ano de 1955, o esportista chegou ao Vasco para brilhar no atletismo do clube. Depois de sagrar-se campeão olímpico em 1952, bicampeão panamericano e recordista mundial de salto triplo. Além de treinar na pista de atletismo que circundava o campo, Adhemar também estudava na Escola de Educação Física do Exército e trabalhava no jornal Última Hora.\n[…]\nEle só seria igualado 48 anos depois pelos iatistas Robert Scheidt, Torben Grael, Marcelo Ferreira e pelos jogadores de voleibol Giovanni e Maurício, todos bicampeões olímpicos em Atenas 2004. Pela vitória na Austrália, Adhemar recebeu o apelido de Canguru Brasileiro.\n[…]\nNo escudo do São Paulo Futebol Clube as duas estrelas douradas que estão na parte de cima foram adotadas em sua homenagem. Elas se referem aos recordes mundiais batidos por ele em Helsinque 1952 e nos Jogos Pan americanos da Cidade do México em 1955, quando conseguiu a melhor marca de sua vida, 16,56m, quebrando pela quinta vez o recorde mundial.\n[…]\nTeve dois filhos, Adhemar Júnior (1958-1986) e Adyel.\n[…]\nOs saltos de Adhemar inauguraram a tradição brasileira nas provas de salto triplo. Depois dele, surgiram Nelson Prudêncio, prata na Cidade do México 1968 e bronze em Munique 1972, João Carlos de Oliveira, o João do Pulo, bronze em Montreal 1976 e Moscou 1980 e ex-recordista mundial, e Jadel Gregório, atual recordista brasileiro e sul-americano, com 17,90m.\n[…]\n«Adhemar Ferreira da Silva». na Confederação Brasileira de Atletismo"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "João do Pulo",
      "descricao": "João Carlos de Oliveira, atleta brasileiro do salto triplo, recordista mundial em 1975."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1981, o recordista mundial do salto triplo João do Pulo teve de abandonar o atletismo. Por quê?",
    "resposta": "Perdeu uma perna num acidente de carro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jo%C3%A3o_do_Pulo",
      "https://en.wikipedia.org/wiki/Jo%C3%A3o_Carlos_de_Oliveira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jo%C3%A3o_do_Pulo",
        "situacao": "ok",
        "texto": "João Carlos de Oliveira, conhecido como João do Pulo (Pindamonhangaba, 28 de maio de 1954 — São Paulo, 29 de maio de 1999), foi um atleta, político e militar brasileiro, especializado em saltos, sendo ex-recordista mundial do salto triplo, medalhista olímpico e tetracampeão panamericano no triplo e no salto em distância, militar e político brasileiro.\n[…]\nMilitar por formação profissional, após abandonar o atletismo em virtude de um desastre automobilístico em que perdeu uma perna, tornou-se político, sendo eleito para dois mandatos como deputado estadual em seu estado natal, São Paulo.\n[…]\nEm contraponto à falta de sorte em Olimpíadas, na era pré-Campeonato Mundial de Atletismo, João do Pulo foi tricampeão mundial do salto triplo em 1977 (em Düsseldorf), 1979 (em Montreal) e 1981 (em Roma, com 17,37 m, vencendo Jack Uudmae, um ano depois dos Jogos Olímpicos, e o futuro recordista mundial Willie Banks, dos Estados Unidos).\n[…]\nJoão Carlos de Oliveira teve a carreira de atleta brutalmente interrompida em 22 de dezembro de 1981, quando sofreu um grave acidente automobilístico na Via Anhanguera, na altura do quilômetro 86, no sentido Campinas-São Paulo. O veículo Passat no qual estava com seu irmão, Francisco, e um amigo foi atingido por uma Variant.\n[…]\nApós quase um ano de internação na UTI do Hospital Irmãos Penteado, em Campinas, ter passado por 16 cirurgias e quatro paradas cardiorrespiratórias, sua perna direita teve de ser amputada no final de 1982, no que significou o encerramento de sua carreira de atleta. O então presidente da República, João Figueiredo, chegou a visitá-lo no hospital.\n[…]\nEleito pela Federação Mundial de Atletismo como o 4.º maior triplista da história, João também teve seu nome marcado na MPB: foi homenageado pelos compositores Aldir Blanc e João Bosco com a canção \"João do Pulo\"."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jo%C3%A3o_Carlos_de_Oliveira",
        "situacao": "ok",
        "texto": "João Carlos de Oliveira, also known as \"João do Pulo\" (May 28, 1954 – May 29, 1999) was a Brazilian athlete who competed in the triple jump and the long jump.\n[…]\nBorn in Pindamonhangaba, São Paulo De Oliveira won two Olympic bronze medals. His personal best of 17.89 metres, set on October 15, 1975, in Pan American Games, stood as the world record until 1985. As of today, it is still in the top twenty of all-time best results in the event.\n[…]\nThere exists some doubt on the judging of the 1980 Olympic men's triple jump final. Several jumps of winning distance by both Oliveira and Ian Campbell of Australia were adjudged as fouls by the all-Soviet judging panel, despite video replays showing this was not the case. One of Oliveira's jumps was estimated to be a new world record beyond eighteen metres.\n[…]\nIn contrast to the lack of luck in the Olympics, in the pre-World Championships in Athletics, João do Pulo was three-time world champion in the triple jump in 1977 (in Düsseldorf), 1979 (in Montreal) and 1981 (in Rome, with 17.37 m, beating Jaak Uudmäe, a year after the Olympics, and future world record holder Willie Banks of the United States). Flag bearer of Brazil in the opening parade in Montreal 1976 and in Moscow 1980, João was the main idol of the Brazilian sport between 1975 and 1981.\n[…]\nHis world record was only broken almost ten years later, by the North American Willie Banks, with 17.97 m, in Indianapolis, on June 16, 1985. His Brazilian and South American record was only broken more than twenty-one years later, by Jadel Gregório, with 17.90 m, in Belém, on May 20, 2007 (who coincidentally was also an athlete of João do Pulo's former coach)."
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Bola de golfe",
      "descricao": "Pequena bola com covinhas na superfície usada no golfe."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "As bolas de golfe têm centenas de covinhas na superfície. Que efeito elas produzem no voo da bola?",
    "resposta": "Fazem a bola ir mais longe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Golf_ball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Golf_ball",
        "situacao": "ok",
        "texto": "A golf ball is a ball designed to be used in golf. Under the rules of golf, a golf ball has a mass no more than 1.620 oz (45.93 g), has a diameter not less than 1.680 inches (42.67 mm), and performs within specified velocity, distance, and symmetry limits.\n[…]\nPractice balls conform to all applicable requirements of the Rules of Golf, and as such are legal for use on the course, but as the hitting characteristics are not ideal, players usually opt for a better-quality ball for actual play.\n[…]\nGolf balls with embedded radio transmitters to allow lost balls to be located were first introduced in 1973, only to be rapidly banned for use in competition. More recently RFID transponders have been used for this purpose, though these are also illegal in tournaments. This technology can however be found in some computerized driving ranges. In this format, each ball used at the range has an RFID with its own unique transponder code.\n[…]\nWhen dispensed, the range registers each dispensed ball to the player, who then hits them towards targets in the range. When the player hits a ball into a target, they receive distance and accuracy information calculated by the computer. The use of this technology was first commercialized by World Golf Systems Group to create TopGolf, a brand and chain of computerized ranges now owned by Callaway Golf.\n[…]\nCanadian long drive champion Jason Zuback broke the world ball speed record on an episode of Sport Science with a golf ball speed of 328 km/h (204 mph). The previous record of 302 km/h (188 mph) was held by José Ramón Areitio, a Jai Alai player.\n[…]\nAir flow ball\n[…]\nOnline golf ball museum with more than 1000 different golf balls\n[…]\nA history of the golf ball Archived 2013-05-17 at the Wayback Machine\n[…]\nAll about Golf Balls"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Alan Shepard",
      "descricao": "Astronauta americano, primeiro dos Estados Unidos no espaço e comandante da Apollo 14."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1971, na missão Apollo 14, que esporte o astronauta Alan Shepard praticou na superfície da Lua?",
    "resposta": "Golfe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alan_Shepard",
      "https://en.wikipedia.org/wiki/Apollo_14"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alan_Shepard",
        "situacao": "ok",
        "texto": "Alan Bartlett Shepard Jr. (November 18, 1923 – July 21, 1998) was an American astronaut. In 1961, he became the second person and the first American to travel into space and, in 1971, he became the fifth and oldest person to walk on the Moon, at age 47.\n[…]\nShepard was designated as the commander of the first crewed Project Gemini mission, but was grounded in October 1963 due to Ménière's disease, an inner-ear ailment that caused episodes of extreme dizziness and nausea. This was surgically corrected in 1968, and in 1971, Shepard commanded the Apollo 14 mission, piloting the Apollo Lunar Module Antares. He was the only one of the Mercury Seven astronauts to walk on the Moon. During the mission, he hit two golf balls on the lunar surface.\n[…]\nShepard made his second space flight as commander of Apollo 14 from January 31 to February 9, 1971. It was America's third successful lunar landing mission. Shepard piloted the Lunar Module Antares. He became the fifth and, at the age of 47, the oldest man to walk on the Moon, and the only one of the Mercury Seven astronauts to do so. He was also the oldest astronaut to travel beyond low Earth orbit until 50-year-old Artemis II commander Reid Wiseman in 2026.\n[…]\nFollowing Apollo 14, Shepard returned to his position as Chief of the Astronaut Office in June 1971. In July 1971 President Richard Nixon appointed him as a delegate to the 26th United Nations General Assembly, a position in which he served from September to December 1971. He was promoted to rear admiral by Nixon on August 26, 1971, the first astronaut to reach this rank. He was succeeded as Chief of the Astronaut Office by John Young on April 30, 1974.\n[…]\nAlan Shepard at IMDb\n[…]\nAlan Shepard Memorial Service, August 1, 1998. C-SPAN."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Apollo_14",
        "situacao": "ok",
        "texto": "Apollo 14 (January 31 – February 9, 1971) was the eighth crewed mission in the United States Apollo program operated by NASA, the third to land on the Moon, and the first to land in the lunar highlands. It was the last of the \"H missions\", landings at specific sites of scientific interest on the Moon for two-day stays with two lunar extravehicular activities (EVAs or moonwalks).\n[…]\nThe mission commander of Apollo 14, Alan Shepard, one of the original Mercury Seven astronauts, became the first American to enter space with a suborbital flight on May 5, 1961. Thereafter, he was grounded by Ménière's disease, a disorder of the ear, and served as Chief Astronaut, the administrative head of the Astronaut Office. He had experimental surgery in 1968 which was successful and allowed his return to flight status. Shepard, at age 47, was the oldest U.S.\n[…]\nOnce the astronauts returned to the vicinity of the LM and were again within view of the television camera, Shepard performed a stunt he had been planning for years in the event he reached the Moon, and which is probably what Apollo 14 is best remembered for. Shepard brought along a Wilson six iron golf club head, which he had modified to attach to the handle of the contingency sample tool, and two golf balls.\n[…]\nThey remained there until their release from quarantine on February 27, 1971. The Apollo 14 astronauts were the last lunar explorers to be quarantined on their return from the Moon. They were the only Apollo crew to be quarantined both before and after the flight.\n[…]\n\"Apollo 14\" at Encyclopedia Astronautica\n[…]\n\"Apollo 14: Shepard, Roosa, Mitchell\". Archived from the original on May 4, 2011. Retrieved July 4, 2011. – slideshow by Life magazine\n[…]\n\"The Apollo Astronauts\" – Interview with the Apollo 14 astronauts, March 31, 1971, from the Commonwealth Club of California Records at the Hoover Institution Archives"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alan_Shepard",
        "situacao": "ok",
        "texto": "Alan Bartlett Shepard Jr. (Derry, 18 de novembro de 1923 – Pebble Beach, 21 de julho de 1998) foi um aviador naval, piloto de teste, astronauta e executivo estadunidense. Ele se tornou o primeiro estadunidense a chegar no espaço em 1961 na missão Mercury-Redstone 3 e depois foi a quinta pessoa a pisar na superfície da Lua durante a Apollo 14 em 1971.\n[…]\nA primeira atividade extraveicular da Apollo 14 começou quase cinco horas e meia após a alunissagem. Shepard foi o primeiro a sair do Antares, tornando-se a quinta pessoa a pisar na superfície lunar e, aos 47 anos de idade, a mais velha. Também foi o único dos astronautas do Grupo 1 a chegar na Lua. Suas primeiras palavras ao sair foram \"E foi um longo caminho, mas estamos aqui\". Mitchell se juntou a ele cinco minutos depois.\n[…]\nShepard, pouco antes do fim da atividade extraveicular, sacou um taco de golfe que tinha escondido no módulo lunar e realizou três tacadas na superfície, acertando duas bolas que estavam em seus bolsos. Ele brincou na última tacada que a bola tinha viajado \"milhas e milhas e milhas\". Shepard tentou fazer as tacadas com as duas mãos, porém a pouca mobilidade do traje espacial o forçou a bater com apenas uma.\n[…]\nEle foi condecorado com sua segunda Medalha de Serviços Distintos da NASA depois da missão, além de uma Medalha de Serviço Distinto da Marinha. Sua citação para esta última afirmava que seu desempenho na Apollo 14 fora \"brilhante\". Shepard voltou para seu posto como Chefe do Escritório dos Astronautas em junho. No mês seguinte o presidente Richard Nixon o nomeou como representante na 26ª Assembleia Geral das Nações Unidas, posição que exerceu entre setembro e dezembro.\n[…]\nHá ainda o foguete suborbital turístico New Shepard da companhia Blue Origin, que foi nomeado em sua homenagem em 2015.\n[…]\nMedia relacionados com Alan Shepard no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Duke Kahanamoku",
      "descricao": "Havaiano considerado o pai do surfe moderno."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Duke Kahanamoku, o havaiano considerado o pai do surfe moderno, ganhou medalhas olímpicas em que esporte?",
    "resposta": "Natação",
    "fonte": [
      "https://en.wikipedia.org/wiki/Duke_Kahanamoku"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Duke_Kahanamoku",
        "situacao": "ok",
        "texto": "Duke Paoa Kahinu Mokoe Hulikohola Kahanamoku (August 24, 1890 – January 22, 1968) was a Hawaiian competition swimmer, lifeguard, and popularizer of the sport of surfing. A Native Hawaiian, he was born three years before the overthrow of the Hawaiian Kingdom. He lived to see the territory's admission as a state and became a United States citizen.\n[…]\nHe was born into a family of Native Hawaiians headed by Duke Halapu Kahanamoku and Julia Paʻakonia Lonokahikina Paoa. He had five brothers, and three sisters. His brothers were Sargent, Samuel, David, William and Louis, all of whom participated in competitive aquatic sports. His sisters were Bernice, Kapiolani and Maria.\n[…]\n\"Duke\" was not a title or a nickname, but a given name. He was named after his father, Duke Halapu Kahanamoku, who was christened by Bernice Pauahi Bishop in honor of Prince Alfred, Duke of Edinburgh, who was visiting Hawaii at the time. His father was a policeman. His mother Julia Paʻakonia Lonokahikina Paoa was a deeply religious woman with a strong sense of family ancestry.\n[…]\nHis parents were from prominent Hawaiian ohana (families). The Kahanamoku and the Paoa ohana were considered to be lower-ranking nobles, who were in service to the aliʻi nui, or royalty. His paternal grandfather was Kahanamoku and his grandmother, Kapiolani Kaoeha (sometimes spelled Kahoea), a descendant of Alapainui. They were kahu, retainers and trusted advisors of the Kamehamehas, to whom they were related.\n[…]\nDuke Paoa Kahanamoku Lagoon\n[…]\nDuke Kahanamoku at Olympedia\n[…]\nDuke Kahanamoku at IMDb\n[…]\nDuke Kahanamoku at IMDb\n[…]\nDuke Kahanamoku discography at Discogs\n[…]\nImage of Duke Kahanamoku surfing in Los Angeles, California, circa 1920. Los Angeles Times Photographic Archive (Collection 1429). UCLA Library Special Collections, Charles E. Young Research Library, University of California, Los Angeles."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Duke_Kahanamoku",
        "situacao": "ok",
        "texto": "Duke Kahanamoku (Oahu, 24 de agosto de 1890 — Honolulu, 22 de janeiro de 1968) foi um nadador, ator e surfista havaiano.\n[…]\nEle foi um dos idealizadores do surf moderno. Foi nos Jogos Olímpicos de Verão de 1912 em Estocolmo, como nadador, que começou a conquistar suas glórias olímpicas, que continuaram durante a Primeira Guerra Mundial e foram testadas mais uma vez nos Jogos Olímpicos de Verão de 1920 em Antuérpia e 1924 em Paris. No total, foram 5 medalhas conquistadas, sendo três de ouro e duas de prata.\n[…]\nDuke largou a carreira de desportista depois dos Jogos de 1924, mas no Havaí continuou muito famoso. Ele transformou o arquipélago, até o momento pouco conhecido, no lar mundialmente famoso do surf.\n[…]\nNos Jogos Olímpicos da Antuerpia-1920, Kahanamoku, então com 30 anos, tornou-se o nadador mais velho a ganhar uma medalha de ouro olímpica em provas individuais da natação. Este recorde só seria superado 96 anos depois, por Michael Phelps, que conquistou um ouro com 31 anos e 40 dias.\n[…]\nDuke Kahanamoku no IMDB",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Adhemar Ferreira da Silva",
      "descricao": "Atleta brasileiro bicampeão olímpico do salto triplo, em 1952 e 1956."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O bicampeão olímpico do salto triplo Adhemar Ferreira da Silva interpretou a Morte em qual filme premiado com o Oscar?",
    "resposta": "Orfeu Negro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Adhemar_da_Silva",
      "https://en.wikipedia.org/wiki/Black_Orpheus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Adhemar_da_Silva",
        "situacao": "ok",
        "texto": "Adhemar Ferreira da Silva (September 29, 1927 – January 12, 2001) was a Brazilian triple jumper. He won two Olympic gold medals and set five world records, the last being 16.56 metres in 1955 Pan American Games. In his early career he also competed in the long jump, placing fourth at the 1951 Pan American Games. He broke world records in triple jump on five occasions during his illustrious career.\n[…]\nIn 1959, Adhemar acted in the musical film Orfeu Negro (Black Orpheus) based on a play titled Orfeu da Conceição by Vinicius de Moraes. He portrayed the role as Death and the film received positive reviews from critics. The film also won the Golden Palm of the Cannes Film Festival and an Academy Award for Best Foreign Language Film. It was revealed that he received the film offer while he was studying for a physical education degree.\n[…]\nHe was preferred for the acting role due to his athletic body and he did not act in any other films as he did not have much interest in doing films which ultimately ended his film acting career. American anthropologist Ann Dunham who is also the mother of former American President Barack Obama insisted that Orfeu Negro was her favorite film. He is still recognized as one of only few Olympic gold medalists to have played a major role in films.\n[…]\nAdhemar's daughter Adyel initiated 'Jump for Life' project on remembrance of her father and also to help people from underprivileged and deprived areas to athletics.\n[…]\nMedia related to Adhemar da Silva at Wikimedia Commons\n[…]\nAdhemar Ferreira da Silva at World Athletics\n[…]\nAdhemar Ferreira da Silva at Olympics.com\n[…]\nAdhemar da Silva at Olympedia\n[…]\nAdhemar da Silva at InterSportStats\n[…]\nAdhemar Ferreira da Silva at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nAdhemar Ferreira da Silva at Confederação Brasileira de Atletismo at the Wayback Machine (archived 8 January 2019)\n[…]\nAdhemar Ferreira da Silva at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Black_Orpheus",
        "situacao": "ok",
        "texto": "Black Orpheus (Portuguese: Orfeu Negro [ɔhˈfew ˈnegɾu]) is a 1959 romantic tragedy film directed by French filmmaker Marcel Camus and starring Marpessa Dawn and Breno Mello. It is based on the play Orfeu da Conceição by Vinicius de Moraes, which set the Greek legend of Orpheus and Eurydice in a contemporary favela in Rio de Janeiro during Carnaval. The film was an international co-production among\n[…]\nWhen Serafina's sailor boyfriend Chico shows up, Orfeu offers to let Eurydice sleep in his home, while he takes the hammock outside. Eurydice invites him to her bed, and they have sex.\n[…]\nOrfeu wanders in mourning. He retrieves Eurydice's body from the city morgue and carries her in his arms across town and up the hill toward his home, where his shack is burning. A vengeful Mira flings a stone that hits him in the head and knocks him over a cliff to his death, with Eurydice still in his arms.\n[…]\nTwo children, Benedito and Zeca – who have followed Orfeu throughout the film – believe Orfeu's tale that his guitar playing causes the sun to rise every morning. After Orfeu's death, Benedito insists that Zeca pick up the guitar and play so that the sun will rise. Zeca plays, and the sun comes up. A little girl appears, gives Zeca a single flower, and the three children dance.\n[…]\nBreno Mello as Orfeu\n[…]\nAdhemar da Silva as Death\n[…]\nBreno Mello was a soccer player with no acting experience at the time he was cast as Orfeu. Mello was walking on the street in Rio de Janeiro when director Marcel Camus stopped him and asked if he would like to be in a film.\n[…]\nHowever, the film has been criticized, especially in Brazil. Vinicius de Moraes, author of the 1956 play Orfeu da Conceição upon which the film was based, was outraged and left the theater in the middle of the screening.\n[…]\nOrfeu, a 1999 film adapted from the same source material"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Adhemar_Ferreira_da_Silva",
        "situacao": "ok",
        "texto": "Adhemar Ferreira da Silva (São Paulo, 29 de setembro de 1927 – São Paulo, 12 de janeiro de 2001) foi um atleta brasileiro, primeiro bicampeão olímpico do país, primeiro atleta sul-americano bicampeão olímpico em eventos individuais, recordista mundial do salto triplo cinco vezes e primeiro atleta a quebrar a barreira dos 16m no salto triplo.\n[…]\nNo ano de 1955, o esportista chegou ao Vasco para brilhar no atletismo do clube. Depois de sagrar-se campeão olímpico em 1952, bicampeão panamericano e recordista mundial de salto triplo. Além de treinar na pista de atletismo que circundava o campo, Adhemar também estudava na Escola de Educação Física do Exército e trabalhava no jornal Última Hora.\n[…]\nEm 1956, interpretou a Morte na peça Orfeu da Conceição, de Vinicius de Moraes e no filme franco-italiano Orfeu Negro, de 1959, feito a partir do texto teatral, que venceu o Oscar de melhor filme estrangeiro[carece de fontes]? e a Palma de Ouro no Festival de Cannes. Foi revelado que ele recebeu a oferta do filme enquanto estudava educação física.\n[…]\nEle foi preferido para o papel de ator devido ao seu corpo atlético e não atuou em nenhum outro filme, pois não tinha muito interesse em fazer filmes que acabaram encerrando sua carreira de ator. A antropóloga americana Ann Dunham afirma que Orfeu Negro era o filme favorito de seu filho, o ex-presidente Barack Obama.\n[…]\nAdhemar se transferiu para o carioca Club de Regatas Vasco da Gama em 1955, conquistou o bicampeonato olímpico quando era atleta do clube carioca e por ele encerrou sua carreira em 1960. Vencedor até a sua última prova, encerrou sua última competição oficial como campeão carioca no salto triplo com a marca de 15,58 m, disputada no Estádio Célio de Barros em 1 de outubro de 1960.\n[…]\n«Adhemar Ferreira da Silva». na Confederação Brasileira de Atletismo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Camisa rosa do Giro d'Italia",
      "descricao": "Camisa do líder da classificação geral da volta ciclística da Itália."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que a camisa rosa do Giro d'Italia e a camisa amarela do Tour de France têm em comum na origem de suas cores?",
    "resposta": "A cor do papel dos jornais organizadores",
    "fonte": [
      "https://en.wikipedia.org/wiki/Maglia_rosa",
      "https://en.wikipedia.org/wiki/General_classification_in_the_Tour_de_France"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maglia_rosa",
        "situacao": "ok",
        "texto": "The general classification in the Giro d'Italia is the most important classification of the Giro d'Italia, which determines who is the overall winner. It is therefore considered more important than secondary classifications as the points classification or the mountains classification.\n[…]\nSince 1931, the leader of the general classification has been identified by a pink jersey (Italian: maglia rosa [ˈmaʎʎa ˈrɔːza]). Prior to that year and since the creation of the race, no colour was used to distinguish the winner at the top of the classification. The first rider to wear the maglia rosa was Learco Guerra following the first stage of the 1931 Giro d'Italia. The first jersey was entirely pink and made from wool. It had a roll-neck collar and front pockets.\n[…]\nOther designers that have designed a maglia rosa include Paul Smith and Fergus Niland, the latter of which made all the classification jerseys have a shamrock pattern while the 2014 race raced throughout Ireland.\n[…]\nIn the first editions of the Giro d'Italia, a points system was used for the calculation of the general classification, but since 1914 a time system is used. All stage results are added together, taking into account time bonuses for high finishes and intermediate sprints, and time penalties for breaking the rules.\n[…]\nThe color pink was chosen because La Gazzetta dello Sport, the sports newspaper that created the Giro, was (and, as of 2025, is) printed on pink paper. In comparison, the leader of the general classification in the Tour de France is awarded a yellow jersey, which originally corresponds with the yellow newsprint of L'Auto, the newspaper that created the Tour de France.\n[…]\nList of Giro d'Italia general classification winners"
      },
      {
        "url": "https://en.wikipedia.org/wiki/General_classification_in_the_Tour_de_France",
        "situacao": "ok",
        "texto": "The general classification of the Tour de France is the most important classification of the race and determines the winner of the race. Since 1919, the leader of the general classification has worn the yellow jersey (French: maillot jaune [majo ʒon]).\n[…]\nThere is doubt over when the yellow jersey began. The Belgian rider Philippe Thys, who  won the Tour in 1913, 1914 and 1920, recalled in the Belgian magazine Champions et Vedettes when he was 67 that he was awarded a yellow jersey in 1913 when the organiser, Henri Desgrange, asked him to wear a coloured jersey. Thys declined, saying making himself more visible in yellow would encourage other riders to ride against him. He saidHe then made his argument from another direction.\n[…]\nIn 2005, Lance Armstrong refused to start in the yellow jersey after the previous owner, David Zabriskie, was eliminated by a crash, but put it on after the neutral zone on request of the race organizers.\n[…]\nIn 2008, the runner-up from the previous year, Cadel Evans, was given the race number \"1\" when the 2007 winner, Alberto Contador was unable to defend his title due to a dispute between the organisers ASO and his new team Astana barring that team from riding the Tour.\n[…]\nIn 1988, Pedro Delgado of Spain won the Tour despite a drug test showing he had taken a drug that could be used to hide the use of steroids. News of the test was leaked to the press by the former organiser of the Tour Jacques Goddet. Delgado was allowed to continue because the drug, probenecid, was not banned by the Union Cycliste Internationale.\n[…]\nList of Tour de France general classification winners\n[…]\nMedia related to General classification in the Tour de France at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maglia_rosa",
        "situacao": "ok",
        "texto": "A maglia rosa,  como em português malha) (em francês: maillot rosa) é a camisola de cor-de-rosa distintiva do líder da classificação geral de certas corridas ciclistícas por etapas, especialmente o Giro d'Italia.\n[…]\nA maglia rosa ou maillot rosa é o distintivo que leva o ciclista que ocupa a primeira posição da classificação geral do Giro d'Italia desde 1931. A cor foi elegida por ser o mesmo que emprega o diário desportivo La Gazzetta dello Sport para as suas páginas. Learco Guerra foi o primeiro em levar este maglia, depois da sua vitória na primeira etapa do Giro d'Italia de 1931.\n[…]\nO recorde de 76 dias em corrida com a maglia rosa em poder de Eddy Merckx.\n[…]\nA maglia rosa distingue ao líder da classificação geral dos Quatro Dias de Dunquerque.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Rebeca Andrade",
      "descricao": "Ginasta brasileira, campeã olímpica no salto e no solo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Nos Jogos de Tóquio, a ginasta Rebeca Andrade apresentou sua série de solo ao som de qual funk de MC João?",
    "resposta": "Baile de Favela",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
      "https://en.wikipedia.org/wiki/Rebeca_Andrade"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        "situacao": "ok",
        "texto": "Rebeca Rodrigues de Andrade (Guarulhos, 8 de maio de 1999) é uma ginasta artística brasileira, bicampeã olímpica e a maior medalhista da história do Brasil nos Jogos Olímpicos, com 6 medalhas (2 ouros, 3 pratas e 1 bronze). Também foi bicampeã mundial no salto (2021 e 2023) e campeã mundial individual geral de 2022.\n[…]\nRebeca mais uma vez começou sua temporada no Trofeo di Jesolo, onde a equipe brasileira conquistou a medalha de prata, ficando atrás apenas dos Estados Unidos. Andrade ganhou a medalha de prata no individual geral, atrás da ginasta americana Riley McCusker. Nas finais por aparelhos, ela terminou em quinto lugar nas barras assimétricas, sexto na trave de equilíbrio e quarto no exercício de solo.\n[…]\nEm junho de 2021, a ginasta conquistou a vaga olímpica ao receber a medalha de ouro individual geral no Campeonato Panamericano, realizado no Rio de Janeiro. No mês seguinte, durante os Jogos Olímpicos de Verão de 2020, realizado em Tóquio, no Japão, Rebeca fez história ao conquistar uma inédita primeira medalha da ginástica feminina em Olimpíadas, ao receber a prata na disputa Individual Geral.\n[…]\nOutro feito histórico foi garantido na final do salto, disputa na qual Rebeca foi medalhista de ouro, tornando-se a primeira mulher ginasta campeã olímpica do Brasil e a primeira atleta brasileira com duas medalhas em uma mesma Olímpiada. Rebeca foi confirmada como porta-bandeira da delegação brasileira na cerimônia de encerramento dos Jogos de Tóquio.\n[…]\nEm 06 de fevereiro de 2026, Rebeca participou da Cerimônia de abertura dos Jogos Olímpicos de Inverno de 2026 como portadora da Bandeira Olímpica.\n[…]\nRebeca Andrade no Instagram\n[…]\nRebeca Andrade em Olympics.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rebeca_Andrade",
        "situacao": "ok",
        "texto": "Rebeca Rodrigues de Andrade (Brazilian Portuguese pronunciation: [ʁeˈbɛkɐ ʁoˈdɾiɡiz dʒ(i)ɐ̃ˈdɾadʒ(i)]; born 8 May 1999) is a Brazilian artistic gymnast. Having won a total of six Olympic and nine World medals, she is the most decorated Brazilian and Latin American gymnast of all time, as well as the most decorated Brazilian Olympian in any discipline.\n[…]\nAndrade underwent three ACL reconstruction surgeries, all on her right knee. Her main idol in gymnastics is the Brazilian world champion Daiane dos Santos.\n[…]\nIn December 2024, Rebeca Andrade was included on the BBC's 100 Women list.\n[…]\nIn late 2025, Rebeca Andrade was honored with a mural at CEU Butantã, in the western part of São Paulo. The artwork, titled “Rebeca Andrade: Body that Flies, Root that Remains,” is part of the MAR 2025 program of the São Paulo City Hall, which aims to promote urban art in public spaces.\n[…]\nOn September 12, 2025, the sportswear brand Adidas released a documentary that centers on Andrade’s long-standing working relationship with her coach, Francisco Porath, commonly known as Xico. According to a press release issued by Adidas, the production offers a personal perspective on the people who support the athlete and serve as a consistent and positive influence throughout her career.\n[…]\nThe documentary was released on YouTube and highlights their professional collaboration within the context of Andrade’s achievements at the international level. The film is part of Illuminated, a documentary series produced by Adidas that profiles elite athletes and the individuals who play significant roles in their professional journeys.\n[…]\nRebeca Andrade at World Gymnastics\n[…]\nRebeca Andrade at Olympics.com\n[…]\nRebeca Andrade at the Brazilian Olympic Committee (in Portuguese)\n[…]\nRebeca Andrade at Olympedia\n[…]\nRebeca Andrade at InterSportStats"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Johnny Weissmuller",
      "descricao": "Nadador americano cinco vezes campeão olímpico nos anos 1920, depois ator de cinema."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O nadador americano Johnny Weissmuller, cinco vezes campeão olímpico, ficou famoso no cinema interpretando qual personagem?",
    "resposta": "Tarzan",
    "fonte": [
      "https://en.wikipedia.org/wiki/Johnny_Weissmuller"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Johnny_Weissmuller",
        "situacao": "ok",
        "texto": "Johnny Weissmuller ( WYSSE-mul-ər; born Johann Peter Weißmüller, German: [ˈjoːhan ˈpeːtɐ ˈvaɪsmʏlɐ]; June 2, 1904 – January 20, 1984) was an American Olympic swimmer, water polo player and actor. He set world records alongside winning five gold medals in the Olympics. He won the 100m freestyle and the 4 × 200 m relay team event in the 1924 Summer Olympics in Paris and the 1928 Summer Olympics in A\n[…]\nDuring the 1930s, before he acted as Tarzan, Weissmuller was a swimming instructor at the Miami Biltmore Hotel. He broke a world record at the Biltmore pool.\n[…]\nWeissmuller's first film was the non-speaking role of Adonis in the movie Glorifying the American Girl. He appeared wearing only a fig leaf while hoisting actress Mary Eaton on his shoulders. He was noticed by the writer Cyril Hume, which led to his big break playing Tarzan in Tarzan the Ape Man in 1932.\n[…]\nOn January 20, 1984, Weissmuller died of pulmonary edema at the age of 79. He was buried just outside Acapulco, Valle de La Luz, at the Valley of the Light Cemetery. As his coffin was lowered into the ground, a recording of the Tarzan yell he invented was played three times, at his request. He was honored with a 21-gun salute, befitting a head of state, which was arranged by Senator Ted Kennedy and President Ronald Reagan.\n[…]\nEdgar Rice Burroughs himself paid tribute to Weissmuller's powerful screen persona in the last Tarzan novel that he completed\n[…]\nSuddenly recognition lighted the eyes of Jerry Lucas. \"John Clayton,\" he said, \"Lord Greystoke—Tarzan of the Apes!\" Shrimp's jaw dropped. \"Is dat Johnny Weismuller? [sic]\" he demanded. Tarzan shook his head as though to clear his brain of an obsession. His thin veneer of civilization had been consumed by the fires of battle. ...\n[…]\nJohnny Weissmuller at IMDb\n[…]\n\"Serbia: Monument to Tarzan\", The New York Times, February 17, 2007. The article states that Johnny Weissmuller was born in Serbia."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Johnny_Weissmuller",
        "situacao": "ok",
        "texto": "Johnny Weissmuller, nascido János Weißmüller (Timișoara, 2 de junho de 1904 — Acapulco, México, 20 de janeiro de 1984) foi um atleta e ator estadunidense, famoso por interpretar Tarzan, o personagem de ficção criado pelo escritor estadunidense Edgar Rice Burroughs.\n[…]\nAntes de entrar para o cinema, Weissmuller teve uma carreira excepcional como desportista, tendo conquistado cinco medalhas de ouro nos Jogos Olímpicos de 1924 e 1928. Ele estabeleceu 67 recordes mundiais de natação e ganhou 52 campeonatos nacionais, sendo considerado um dos melhores nadadores de todos os tempos.\n[…]\nEm 1934 imortalizou no cinema a famosa personagem Tarzan. O cinema transformou Tarzan, já conhecido através dos romances de Edgar Rice Burroughs, em mito universal e Weissmuller fez doze filmes como o homem macaco, celebrizando o famoso e estilizado grito da personagem.\n[…]\nDepois de Tarzan, ele interpretou com sucesso a personagem Jim das Selvas na série do mesmo nome, feita para a Columbia entre 1948 e 1955. Foram dezesseis filmes ao todo, com duração média de setenta minutos cada. Em 1955, a série transferiu-se para a TV, tendo sido feitos vinte e seis episódios de meia hora cada. Já envelhecido e obeso, Weissmuller tentava dar vida a uma personagem atlética e aventureira, calcada na legendária figura de Tarzan.\n[…]\nNo final dos anos 1950, Weissmuller mudou-se para Chicago, onde fundou uma empresa de piscinas. Seguiram-se outros empreendimentos, a maioria envolvendo Tarzan ou a natação de uma forma ou de outra, mas sem grandes resultados. Aposentou-se em 1965 e no ano seguinte juntou-se aos ex-Tarzans Jock Mahoney e James Pierce para a campanha publicitária de lançamento da série de TV Tarzan, estrelada por Ron Ely. Em 1967 sua imagem foi imortalizada na capa do LP Sgt.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Diplomacia do pingue-pongue",
      "descricao": "Troca de visitas de mesatenistas entre Estados Unidos e China, em 1971, que precedeu a reaproximação dos dois países."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1971, a reaproximação entre Estados Unidos e China começou com a visita de atletas americanos de qual esporte?",
    "resposta": "Tênis de mesa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ping-pong_diplomacy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ping-pong_diplomacy",
        "situacao": "ok",
        "texto": "Ping-pong diplomacy (Chinese: 乒乓外交; pinyin: Pīngpāng wàijiāo) refers to the exchange of table tennis (ping-pong) players between the United States and the People's Republic of China in the early 1970s. Considered a turning point in relations between the United States and the People's Republic of China, it began during the 1971 World Table Tennis Championships in Nagoya, Japan, as a result of an en\n[…]\nChina diplomatically extended its approval of Leah Neuberger's application for a visa to the entire American team.\n[…]\nEfforts to employ \"ping-pong diplomacy\" were not always successful, such as when the All Indonesia Table Tennis Association (PTMSI) refused China's invitation in October 1971, claiming that accepting the PRC's offer would improve the PRC's reputation. Because neither Soviet athletes nor journalists appeared in China following the appearance of the American players and journalists, one speculation is that the act showed the equal scorn of both countries towards the USSR.\n[…]\nDuring the week of July 8, 2011, a three-day ping-pong diplomacy event was held at the Richard Nixon Presidential Library and Museum in Yorba Linda, California. Original members of both the Chinese and American ping-pong teams from 1971 were present and competed again.\n[…]\nEckstein, Ruth (Fall 1993). \"Ping Pong Diplomacy: A View from behind the Scenes\". Journal of American-East Asian Relations. 2 (3): 327–342. doi:10.1163/187656193X00202. ISSN 1058-3947. JSTOR 23612842.\n[…]\nMillwood, Pete (2022). Improbable Diplomats: How Ping-Pong Players, Musicians, and Scientists Remade US-China Relations. Cambridge Studies in US foreign relations. Cambridge; New York, NY: Cambridge University Press. ISBN 978-1-108-83743-9.\n[…]\nXu, Guoqi (2008). \"The Sport of Ping-Pong Diplomacy\". Olympic Dreams: China and Sports, 1895–2008. Cambridge, Mass: Harvard University Press. pp. 117–163. ISBN 978-0-674-02840-1. OCLC 174112722."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Diplomacia_do_pingue-pongue",
        "situacao": "ok",
        "texto": "Diplomacia do pingue-pongue (em chinês: 乒乓外交; hanyu pinyin: Pīngpāng wàijiāo) foi como ficou conhecida uma série de eventos entre os Estados Unidos (EUA) e a República Popular da China no início dos anos 1970 que resultou na primeira visita de uma delegação estadunidense a China desde 1949.\n[…]\nO evento que abriu a porta para uma relação que estava interrompida há 22 anos entre os dois países foi o Campeonato Mundial de Tênis de Mesa de 1971 em Nagoya, Japão, como resultado de um encontro entre os jogadores Glenn Cowan (dos EUA) e Zhuang Zedong (da China). O intercâmbio e a sua promoção ajudaram a humanizar as pessoas de cada país após um período de isolamento e desconfiança.\n[…]\nAbriu caminho à visita do presidente Richard Nixon a Pequim em 1972 e é considerado um ponto de viragem nas relações entre os Estados Unidos e a República Popular da China.\n[…]\nEm 1988, o tênis de mesa tornou-se um esporte olímpico.\n[…]\nO evento foi referenciado no filme Forrest Gump, de 1994. Depois de sofrer ferimentos em batalha, Forrest desenvolve aptidão para o esporte e se junta à equipe do Exército dos EUA – eventualmente competindo contra equipes chinesas em uma viagem de boa vontade.\n[…]\nDurante a semana de 9 de junho de 2011, a “diplomacia do ping-pong” foi comemorada em um evento de três dias realizado na Biblioteca Richard Nixon, na cidade californiana de Yorba Linda, cidade onde nasceu este falecido ex-presidente americano. Membros originais das equipes de pingue-pongue chinesa e americana de 1971 estiveram presentes e competiram novamente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Tony Hawk",
      "descricao": "Skatista profissional americano, um dos nomes mais famosos do skate vertical."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O skatista americano Tony Hawk dá nome a uma série famosa lançada em 1999. Série de quê?",
    "resposta": "Videogames",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tony_Hawk%27s_Pro_Skater",
      "https://en.wikipedia.org/wiki/Tony_Hawk"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tony_Hawk%27s_Pro_Skater",
        "situacao": "ok",
        "texto": "Tony Hawk's Pro Skater, released as Tony Hawk's Skateboarding in the United Kingdom, Australia, New Zealand, and parts of Europe, is a 1999 skateboarding video game developed by Neversoft and published by Activision. It is the first installment in the Tony Hawk's series. It was released for the PlayStation on September 29, 1999 and was later ported to the Nintendo 64, Game Boy Color, Dreamcast, an\n[…]\nTony Hawk's Pro Skater was the third highest-selling PlayStation game of November 1999 in the United States. From its release date to late-December 1999, the game shipped in excess of 350,000 units and was available in over 10,000 retailers nationwide. The PlayStation version of Tony Hawk's Pro Skater received a \"Platinum\" sales award from the Entertainment and Leisure Software Publishers Association (ELSPA), indicating sales of at least 300,000 copies in the United Kingdom.\n[…]\nThe game resulted in a successful franchise, receiving eight annualized sequels developed by Neversoft from Pro Skater 2 (2000) to Proving Ground (2007), and a 2020 remake along with the sequel, Tony Hawk's Pro Skater 1 + 2.\n[…]\nTony Hawk's Pro Skater is credited with introducing skateboarding to a more mainstream global audience.\n[…]\nbecame popular because it invited skaters and nonskaters alike to feel the thrill of getting air, doing a kick flip or landing a trick by the thinnest margin.\" In 2023, the book Right, Down + Circle: Tony Hawk’s Pro Skater by Cole Nowicki was released, tackling and analyzing Tony Hawk's Pro Skater's meaning and impact.\n[…]\nIn 2020, a documentary film Pretending I'm Superman: The Tony Hawk Video Game Story from Swedish director Ludvig Gür was released, chronicling the development and impact of the game.\n[…]\nAgnello, Anthony John (August 30, 2019). \"The Oral History of 'Tony Hawk's Pro Skater'\". The Ringer. Retrieved October 4, 2023.\n[…]\nTony Hawk's Pro Skater at MobyGames"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tony_Hawk",
        "situacao": "ok",
        "texto": "Anthony Frank Hawk (born May 12, 1968), nicknamed Birdman, is an American professional skateboarder, entrepreneur, and the owner of the skateboard company Birdhouse. A pioneer of modern vertical skateboarding, Hawk completed the first documented \"900\" skateboarding trick in 1999. He also licensed a skateboarding video game series named after him, published by Activision that same year.\n[…]\nAnthony Frank Hawk was born on May 12, 1968, in San Diego, California, to Nancy (1924–2019) and Frank Hawk (1923–1995), and was raised in San Diego. He has two older sisters, Pat and Lenore, and an older brother, Steve.\n[…]\nA video game series based on Hawk's skateboarding, titled Tony Hawk's Pro Skater, debuted in 1999. Since then, the series has spawned 18 titles so far, including ten main-series titles, four spin-offs, and four repackages.\n[…]\nIn 2010, Six Flags cancelled its license and the rides were renamed to Pandemonium. The ride at Six Flags Discovery Kingdom was moved to Six Flags Mexico in 2012. Additionally, a water park ride called Tony Hawk's Half pipe (renamed The Half pipe in 2011) was opened at Six Flags America in Bowie, Maryland.\n[…]\nNominee: 1999\n[…]\nAcademy of Interactive Arts & Sciences D.I.C.E. Awards – Tony Hawk's Video Games\n[…]\nShacknews Hall of Fame Class of 2024 – Tony Hawk's Pro Skater\n[…]\nHawk created the Tony Hawk Foundation in 2002 in response to the lack of safe and legal skateparks in America. As of June 2018, his foundation has awarded US$5.8 million, aiding 596 skatepark projects. In 2015, the foundation received the Robert Wood Johnson Sports award, which honors recipients for their innovative and influential approaches to using sports to build a culture of health in their communities.\n[…]\nHawk, Tony (2000). Hawk – Occupation: Skateboarder. New York, New York: ReganBooks. ISBN 0-06-019860-5.\n[…]\nTony Hawk's\n[…]\nTony Hawk at IMDb\n[…]\nTony Hawk at the X Games (archived former page)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tony_Hawk%27s_Pro_Skater",
        "situacao": "ok",
        "texto": "Tony Hawk's Pro Skater (chamado de Tony Hawk's Skateboarding no Reino Unido, Austrália, Nova Zelândia e em algumas partes da Europa) é um jogo eletrônico de skate desenvolvido pela Neversoft e publicado pela Activision. Foi lançado em 29 de setembro de 1999 para PlayStation, sendo depois portado para Nintendo 64, Game Boy Color e Dreamcast em 2000, e para N-Gage em 2003.\n[…]\nA pré-venda do jogo ficou disponível duas semanas antes de seu lançamento; quem o encomendou na Electronics Boutique ou na Funcoland, respectivamente, recebeu uma réplica em miniatura do skate Birdhouse de Tony Hawk, uma folha de adesivos com os dez skatistas profissionais do jogo e uma dica diferente do jogo na parte de trás de cada adesivo. Uma segunda demonstração jogável foi incluída em um disco promocional lançado pela Pizza Hut em 14 de novembro de 1999.\n[…]\nA versão de N-Gage estava programada para ser lançada em outubro de 2003 em 16 de maio de 2003. O jogo veio com o N-Gage QD, lançado em 2004.\n[…]\nA versão de N-Gage foi desenvolvida pela Ideaworks3D e lançada em 13 de outubro de 2003, uma semana após o lançamento do N-Gage. O jogo é um porte fiel da versão de PlayStation e mantém a maioria dos personagens, fases, esquema de controles e música original, além de adicionar fases de Tony Hawk's Pro Skater 2 e dois modos multijogador; esses modos funcionam através do recurso Bluetooth do N-Gage.\n[…]\nUma recriação do jogo e de Tony Hawk's Pro Skater 2, chamada Tony Hawk's Pro Skater HD, foi desenvolvida pela Robomodo e lançada em julho de 2012 para Xbox 360, em agosto para PlayStation 3 e em setembro para Microsoft Windows. Uma remasterização de Tony Hawk's Pro Skater e Pro Skater 2, intitulada Tony Hawk's Pro Skater 1 + 2, foi desenvolvida pela Vicarious Visions e lançado em 4 de setembro de 2020 para Microsoft Windows, PlayStation 4 e Xbox One.\n[…]\nTony Hawk's Pro Skater no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Surfe nos Jogos Olímpicos de 2024",
      "descricao": "Competição de surfe dos Jogos de Paris, disputada na onda de Teahupo'o."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Nos Jogos de Paris 2024, as provas de surfe foram disputadas a mais de quinze mil quilômetros da capital francesa. Em que ilha?",
    "resposta": "Taiti",
    "fonte": [
      "https://en.wikipedia.org/wiki/Surfing_at_the_2024_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Surfing_at_the_2024_Summer_Olympics",
        "situacao": "ok",
        "texto": "Surfing at the 2024 Summer Olympics took place 27 July – 5 August 2024 in Teahupoʻo reef pass, Tahiti, French Polynesia, breaking the record for the farthest away a medal competition has been staged from the host city. A total of 48 surfers (24 for the men's and women's competitions each) competed in the shortboard events, eight more than in Tokyo 2020.\n[…]\nThe surfing competition was staged in Teahupo'o, Tahiti, in the French overseas collectivity of French Polynesia in the southern Pacific. The decision was made to hold the surfing competition in the French territory instead of continental Europe because of the famous massive waves on the island suitable for the surfing competitions.\n[…]\nTahiti is 15,000 km (9,300 miles) from Paris, setting a new record for greatest physical distance of a medal event from the host city, a record that was last set in 1956 when the equestrian events of the 1956 Summer Olympics in Melbourne, Australia, had to be held in Stockholm, Sweden, because Australia had strict quarantine rules for animals coming from overseas.\n[…]\nParticipants in the surf competitions were the only ones not staying at the Paris Olympic Village on L'Île-Saint-Denis, and stayed instead on the ship M/V Aranui 5 anchored off Tahiti as the first floating Olympic village. The surfing competition was also the only event held without spectators.\n[…]\nThe qualification system for Paris 2024 built on the previous format used for Tokyo 2020, ensuring the participation of the world's best professional surfers, along with the vast promotion of geographical universal opportunities for surfers around the world at the Games. While the quota of two male and two female surfers per country remains intact, two exceptions to this rule have been introduced for the ISA World Surfing Games 2022 and 2024 team champions.\n[…]\n*   Host nation (France)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Surfe_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2024",
        "situacao": "ok",
        "texto": "As competições de surfe nos Jogos Olímpicos de Verão de 2024 estavam originalmente programados para acontecer entre 27 a 30 de julho, mas por conta das condições das ondas se estendeu até 5 de agosto de 2024 em Teahupo'o, Taiti, na Polinésia Francesa, quebrando o recorde de competição por medalhas mais longe da cidade-sede, neste caso, Paris.\n[…]\nA competição de surfe foi realizada em Teahupo'o, no Taiti, território ultramarino francês da Polinésia. A decisão de realizar a competição no sul do Oceano Pacífico ao invés da Europa continental foi por conta das famosas ondas enormes na ilha, adequadas para as competições de surfe.\n[…]\nO Taiti fica a 15 mil quilômetros (9,300 milhas) de Paris, estabelecendo um novo recorde para a maior distância física de um evento de medalha da cidade-sede, recorde que foi estabelecido pela última vez em 1956, quando os eventos equestres das Olimpíadas de Melbourne, na Austrália, tiveram que ser realizados em Estocolmo, na Suécia, por conta das regras rígidas de quarentena na Austrália para animais vindos do exterior.\n[…]\nPor conta da distância, os participantes das competições não ficaram na vila olímpica de L'Île-Saint-Denis e, em vez disso, ficaram no navio M/V Aranui 5 ancorado no Taiti, sendo essa a primeira vila olímpica flutuante. A competição de surfe também foi o único evento realizado sem espectadores.\n[…]\nVaga de universalidade – Pela primeira vez, uma vaga adicional por gênero deu direito aos CON elegíveis interessados ​​em ter seus surfistas competindo em Paris 2024. Para se inscrever em uma vaga concedida pelo princípio da universalidade, o surfista deveria terminar entre os 50 primeiros em seu respectivo evento de surfe nos ISA World Surfing Games de 2023 ou 2024.\n[…]\nSurfe nos Jogos Pan-Americanos de 2023\n[…]\n«Pagina oficial da Associação Internacional de Surfe» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Polo",
      "descricao": "Esporte coletivo jogado a cavalo, em que os jogadores conduzem a bola com tacos."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O polo, esporte jogado a cavalo com tacos, surgiu em qual civilização antiga?",
    "resposta": "Pérsia Antiga",
    "distratores": [
      "Egito Antigo",
      "Roma Antiga",
      "Grécia Antiga"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Polo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Polo",
        "situacao": "ok",
        "texto": "Polo is a stick and ball game that is played on horseback as a traditional field sport, and is one of the oldest known team sports in the world.\n[…]\nThe progenitor of polo and its variants was an equestrian game named chovgan (Persian: چوگان), which was played from the 6th century BCE to the 1st century CE in Persia (Iran) and Central Asia. Its modern form developed in India, and was later adopted by the Western world.\n[…]\nDuring the period of the Parthian Empire (247 BCE to 224 CE), the sport had great patronage under the kings and noblemen. According to The Oxford Dictionary of Late Antiquity, the Persian ball game was an important pastime in the court of the Sasanian Empire (224–651 CE). It was also part of the royal education for the Sasanian ruling class. Emperor Shapur II learnt to play polo at age seven in 316 CE.\n[…]\nAbbasid Baghdad had a large polo ground outside its walls, and one of the city's early 13th-century gates, the Bab al Halba, was named after these nearby polo grounds. The game continued to be supported by Mongol rulers of Persia in the 13th century, as well as under the Safavid dynasty. In the 17th century, Naqsh-i Jahan Square in Isfahan was built as a polo field by King Abbas I. The game was also learned by the neighboring Byzantine Empire at an early date.\n[…]\nThe Arena Polo European Championship. The first tournament of this championship was held in 2015. Alongside the Equestrian Federation of Azerbaijan Republic (ARAF) the tournament was organized by the team of World Polo\n[…]\nWorld Polo Championship\n[…]\nSantiago Novillo-Astrada; Raphael De Oliveira; Uwe Seebacher (2009). Simply Polo. Munich: BookRix. ASIN B00XKVIYOK."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Polo_%28esporte%29",
        "situacao": "ok",
        "texto": "O polo é um esporte que se joga a cavalo, no qual quatro jogadores por equipe se enfrentam golpeando uma pequena bola de plástico ou madeira, com um taco longo, com o objetivo de marcar gols contra a equipe adversária. Os jogos são disputados em tempos de sete minutos e meio, denominados chukkers (ocasionalmente denominados chukkas, devido à má interpretação do som escutado pelo sotaque padrão do \n[…]\nA origem da prática do polo ainda não é bem definida, apesar de as evidências apontarem que tenha sido praticado primeiramente na Ásia, inicialmente pelos reis aquemênidas na antiga Pérsia.\n[…]\nA modalidade foi tornando-se cada vez mais popular ao redor do planeta, principalmente na Argentina, onde conquistou muitos adeptos devido às condições topográficas e climatéricas para a sua prática. É neste país que se produzem os melhores cavalos para este esporte e onde encontram-se os melhores jogadores do mundo.\n[…]\nAs medidas de um campo de polo são de 275x180m, e os cavalos utilizados caracterizam-se por ter uma altura que varia entre 1,52 metros e 1,60 metros. A bola para jogar polo é branca e feita de madeira ou plástico.\n[…]\nO polo tem uma particularidade que o diferencia dos outros esportes, que consiste no fato de as equipes terem de mudar de campo, e consequentemente de baliza, a cada gol que marcam. Isto acontece para que nenhuma das equipes seja beneficiada do estado do campo e das condições atmosféricas.\n[…]\nO polo em arena é uma variação do polo tradicional jogado em campo aberto. É disputado em um espaço fechado, geralmente cercado por paredes ou tábuas de aproximadamente 1,5 metro de altura, que influenciam o jogo ao permitir que a bola rebata.\n[…]\nO primeiro Campeonato do Mundo de Polo foi realizado em 1987;\n[…]\nCampeonato do Mundo de Polo\n[…]\nFederação Internacional de Polo\n[…]\nPolo nos Jogos Olímpicos\n[…]\nCavalo\n[…]\nConfederação Brasileira de Polo\n[…]\nFederação Paulista de Polo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Snooker",
      "descricao": "Modalidade de bilhar com vinte e duas bolas, que deu origem à sinuca brasileira."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O snooker, que deu origem à sinuca brasileira, foi criado no século dezenove por oficiais do exército britânico servindo em qual país?",
    "resposta": "Índia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Snooker"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Snooker",
        "situacao": "ok",
        "texto": "Snooker (pronounced UK:  SNOO-kər, US:  SNUUK-ər) is a cue sport played on a rectangular billiards table covered with a green cloth called baize, with six pockets: one at each corner and one in the middle of each long side. First played by British Army officers stationed in India in the second half of the 19th century, the game is played with 22 balls: a white cue ball, 15 reds and six colours – y\n[…]\nIn 1875, army officer Neville Chamberlain, stationed in India, devised a set of rules that combined black pool and pyramids. The word snooker was a well-established derogatory term used to describe inexperienced or first-year military personnel. In the early 20th century, snooker was predominantly played in the United Kingdom, where it was considered a \"gentleman's sport\" until the early 1960s before growing in popularity as a national pastime and eventually spreading overseas.\n[…]\nSnooker originated in the second half of the 19th century in India during the British Raj. In the 1870s, billiards was popular among British Army officers stationed in Jubbulpore (now Jabalpur), India, and several variations of the game were devised during this time.\n[…]\nSnooker was further developed in 1882 when its first set of rules was finalised by British Army officer Neville Chamberlain, who helped devise and popularise the game at Stone House in Ootacamund, on a table built by Burroughes & Watts that had been sent to India by sea.\n[…]\nSinuca brasileira (or \"Brazilian snooker\") is a variant of snooker played exclusively in Brazil, with fully divergent rules from the standard game and using only one red ball instead of fifteen. At the start of the game, the single red is positioned halfway between the pink ball and the side cushion, and the break-off shot cannot be used to pot the red or place the opponent in a snooker.\n[…]\nWorld Women's Snooker\n[…]\nWorld Seniors Snooker\n[…]\nInternational Billiards & Snooker Federation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sinuca_inglesa",
        "situacao": "ok",
        "texto": "A sinuca inglesa ou sinuca internacional (em inglês: snooker)) é um jogo de mesa e taco (bilhar) muito popular sobretudo no Reino Unido e Irlanda e em outros países da Commonwealth. Possui também grande adesão em países asiáticos como a China e a Tailândia. O organismo internacional de regulação do jogo é a World Professional Billiards and Snooker Association (WPBSA).\n[…]\nA sinuca inglesa é geralmente vista como tendo a sua origem nos oficiais do Exército Britânico que estavam de serviço na Índia Britânica. Hoje em dia os profissionais de topo auferem prémios elevadíssimos ao longo da sua carreira, e muitos ultrapassam o milhão de libras.\n[…]\nÉ habitualmente aceite a hipótese de origem da sinuca inglesa na segunda metade do século XIX. O bilhar sempre fora um jogo popular entre os oficiais do Exército Britânico colocados na Índia, e aí terão desenvolvido variantes dos mais tradicionais jogos de bilhar. Uma variante, desenvolvida na mesa dos oficiais em Jabalpur em 1874 ou 1875, era adicionar bolas coloridas às vermelhas e negra que eram usadas no pyramid pool e life pool.\n[…]\nA sinuca inglesa é jogada por dois jogadores (ou dupla de jogadores), numa mesa com um pano de baeta de dimensões variáveis com 22 bolas: 15 vermelhas, 1 amarela, 1 verde, 1 castanha, 1 azul, 1 rosa, 1 preta e 1 branca, sendo a bola branca a única passível de ser tacada (em mesas menores, o número de bolas vermelhas pode ser reduzido, como no Brasil onde se joga com seis ou 10 bolas dessa cor, em mesas com as medidas habituais do país).\n[…]\nNome dado a um modo de jogo de snooker, ou bilhar, ou sinuca, no qual podem jogar até 7 jogadores em uma única mesa.\n[…]\nSinuca, variante praticada no Brasil\n[…]\n«World Snooker Association» (em inglês)\n[…]\n«Liga Ibérica de Snooker (LASE)» (em espanhol)\n[…]\n«International Billiards & Snooker Federation (IBSF)» (em inglês)\n[…]\n«História da sinuca e variantes no Brasil»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "The Boat Race",
      "descricao": "Regata anual de remo entre as universidades de Oxford e Cambridge."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A tradicional regata de remo entre as universidades de Oxford e Cambridge é disputada em qual rio?",
    "resposta": "Tâmisa",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Boat_Race"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Boat_Race",
        "situacao": "ok",
        "texto": "The Boat Race is an annual set of rowing races between the Cambridge University Boat Club and the Oxford University Boat Club, traditionally rowed between open-weight eights on the River Thames in London, England. It is also known as the University Boat Race and the Oxford and Cambridge Boat Race.\n[…]\nThe second race was in 1836, with the venue moved to a course from Westminster to Putney. Over the next two years, there was disagreement over where the race should be held, with Oxford preferring Henley and Cambridge preferring London. Following the official formation of the Oxford University Boat Club, racing between the two universities resumed in 1839 on the Tideway and the tradition continues to the present day, with the loser challenging the winner to a rematch annually.\n[…]\nThe race first appeared in a short film of the 1895 race entitled The Oxford and Cambridge University Boat Race, directed and produced by Birt Acres. Consisting of a single shot of around a minute, it was the first film to be commercially screened in the UK outside London. The men's race was first broadcast on BBC Radio in 1927, with BBC Television first covering the men's race in 1938.\n[…]\nAlthough the Boat Race crews are the best-known, the universities both field reserve crews. The reserves race takes place on the same day as the main race. The Oxford men's reserve crew is called Isis (after the Isis, a section of the River Thames which passes through Oxford), and the Cambridge reserve men's crew is called Goldie (the name comes from rower and Boat Club president John Goldie, 1849–1896, after whom the Goldie Boathouse is named).\n[…]\nOxford–Cambridge rivalry\n[…]\nYork and Lancaster Universities Roses Race – a boat race between University of York and Lancaster University\n[…]\nThe CHANEL J12 Boat Race YouTube website"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Gertrude Ederle",
      "descricao": "Nadadora americana que, em 1926, foi a primeira mulher a atravessar o Canal da Mancha a nado."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1926, a americana Gertrude Ederle se tornou a primeira mulher a atravessar a nado qual braço de mar europeu?",
    "resposta": "Canal da Mancha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gertrude_Ederle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gertrude_Ederle",
        "situacao": "ok",
        "texto": "Gertrude Caroline Ederle (; October 23, 1905 – November 30, 2003) was an American competition swimmer, Olympic champion, and world record-holder in five events. On August 6, 1926, she became the first woman to swim across the English Channel with her finish time of 14 hours and 45 minutes, beating the record set by Enrique Tirabocchi in 1923 by one hour, 48 minutes. Among other nicknames, the pres\n[…]\nEderle joined the club when she was only twelve and immediately took to learning the American crawl, developed at the WSA by Head Coach Louis Handley. The same year, she set her first world record in the 880-yard freestyle, becoming the youngest world record holder in swimming. She set eight more world records after that, seven of them in 1922 at Brighton Beach. In total, Ederle held 29 US national and world records from 1921 until 1925.\n[…]\nShe bitterly disagreed with Wolffe's decision, and it was speculated that he did not want Ederle to succeed.\n[…]\nThe Gertrude Ederle Recreation Center, which opened in 2013 and is located on the Upper West Side of Manhattan, was named for her, and includes an indoor swimming pool.\n[…]\nA memorial to Gertrude Ederle's historic channel swim was installed in Kingsdown in 2023. The memorial plaque marks the Oldstairs Bay beach where Ederle came ashore.\n[…]\nDahlberg, Tim (2009). America's Girl: The Incredible Story of How Swimmer Gertrude Ederle Changed the Nation. Ward, Mary Ederle., Greene, Brenda (1st ed.). New York: St. Martin's Press. ISBN 978-0-312-38265-0. OCLC 269455470.\n[…]\nStout, Glenn (2009). Young Woman and the Sea: How Trudy Ederle Conquered the English Channel and Inspired the World. Boston: Houghton Mifflin Harcourt. ISBN 978-0-618-85868-2. OCLC 288377749.\n[…]\nManchester Guardian report on the day after her English Channel swim, 7 August 1926 (this is the predecessor of The Guardian newspaper).\n[…]\nGertrude Ederle at Olympics.com\n[…]\nGertrude Ederle at Olympedia"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Rúgbi",
      "descricao": "Esporte coletivo com bola oval, de origem inglesa."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Segundo a lenda, que estudante da escola de Rugby, na Inglaterra, pegou a bola com as mãos numa partida de futebol em 1823?",
    "resposta": "William Webb Ellis",
    "fonte": [
      "https://en.wikipedia.org/wiki/William_Webb_Ellis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/William_Webb_Ellis",
        "situacao": "ok",
        "texto": "William Webb Ellis (24 November 1806 – 24 February 1872) was an English Anglican clergyman who has been credited as the inventor of rugby football while a pupil at Rugby School. According to accounts by Matthew Bloxam, Webb Ellis caught the ball and ran with it during a school football match in 1823, thus creating the \"rugby\" style of play.\n[…]\nThe Webb Ellis Cup is presented to the winners of the Rugby World Cup.\n[…]\nHe attended the school in Town House from 1816 to 1825 and was recorded as being a good scholar and cricketer, although it was noted that he was \"rather inclined to take unfair advantage at cricket\". The incident in which William Webb Ellis supposedly caught the ball in his arms during a football match (which was allowed) and ran with it (which was not) is supposed to have happened in the latter half of 1823.\n[…]\nA boy of the name of Ellis, William Webb Ellis, a town boy and a foundationer, who at the age of nine entered the School after the midsummer holidays in 1816, who in the second half year of 1823, was, I believe, a praepostor, whilst playing Bigside at football in that half year, caught the ball in his arms.\n[…]\nFollowing the investigation and the published report in 1897, the old Rugbeian Society concluded that Matthew Bloxam's account, written in 1880, was correct and placed a plaque on the Close in 1900 stating William Webb Ellis's actions originated the distinctive feature of the game in 1823.\n[…]\nEngland Rugby says that William Webb Ellis's action did not lead to any immediate change in the rules but may well have inspired later imitators, though not Mackie, as Thomas Hughes said the Webb Ellis story had not survived into his own time.\n[…]\nWebb Ellis Rugby Football Museum, museum in Rugby named after Ellis\n[…]\nWilliam Webb Ellis at Cricinfo\n[…]\nWilliam Webb Ellis at the World Rugby Hall of Fame"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/William_Webb_Ellis",
        "situacao": "ok",
        "texto": "William Webb Ellis (24 de novembro de 1806 em Salford, Lancashire — 24 de janeiro de 1872 em Menton) foi um inventor britânico do rugby moderno.\n[…]\nEle foi filho de James Ellis, um oficial de Dragoon Guards, e de Ann Webb que se  casou em Exeter em 1804.\n[…]\nDepois que James Ellis morreu na batalha de Albuera, em 1812, Ann Webb e seus dois filhos (Thomas e William Webb Ellis) foram deixados totalmente desprovido de exceto por um pequeno exército de pensão de 10 libras por ano para cada criança.\n[…]\nEla se muda para Rugby, Warwickshire para que William e seu irmão mais velho pudessem  receber uma boa educação na Escola de Rugby com nenhum custo como uma foundationer local (ou seja, um aluno vivendo dentro de um raio de 10 quilômetros da Torre do Relógio Rugby). William Webb Ellis se matricula na Escola de Rugby sob a supervisão do Dr. Wooll e estava na casa da cidade.\n[…]\nWilliam freqüentou a escola 1816-1825 e foi apontado como um bom estudante e um jogador de críquete bom. Apesar de ter sido notado que ele estava \"bastante inclinado a tirar vantagem desleal no futebol. O incidente em que Webb Ellis pegou e correu com a bola em seus braços durante uma partida de futebol é suposto ter acontecido na segunda metade de 1823.\n[…]\nDepois de deixar o Rugby foi a Universidade de Oxford, em 1826, com 18 anos. Aqui ele jogou críquete para Brasenose College, em Oxford, ele foi em número de 3 para Oxford em Lords Cricket Ground e tem 12 corridas.\n[…]\nDe acordo com um artigo do Times \"O Mistério de Futebol Rugby\", publicado 3 de março de 1965, ele é pensado para involuntariamente ter contribuído para um livro chamado:\n[…]\nRugby\n[…]\nRugby School",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Duplo twist carpado",
      "descricao": "Salto acrobático do solo da ginástica artística, registrado no código de pontuação com o nome de uma ginasta brasileira."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O duplo twist carpado, salto do solo da ginástica, leva no código de pontuação o nome de qual ginasta brasileira?",
    "resposta": "Daiane dos Santos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Daiane_dos_Santos",
      "https://en.wikipedia.org/wiki/Daiane_dos_Santos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Daiane_dos_Santos",
        "situacao": "ok",
        "texto": "Daiane Garcia dos Santos (Porto Alegre, 10 de fevereiro de 1983) é uma ex-ginasta brasileira que competiu em provas de ginástica artística. Conquistou nove medalhas de ouro em etapas de copas do mundo de ginástica artística.\n[…]\nDaiane foi a primeira ginasta brasileira, entre homens e mulheres, a conquistar uma medalha de ouro em uma edição do Campeonato Mundial. Daiane dos Santos fez parte da primeira seleção brasileira completa a disputar uma edição olímpica, nos Jogos de Atenas, repetindo a presença nas edições seguintes, nas Olimpíadas de Pequim e Olimpíadas de Londres.\n[…]\nDaiane possui ainda dois movimentos nomeados após ser a primeira  ginasta no mundo a realizá-los: o duplo twist carpado, ou Dos Santos I, e a evolução deste primeiro: o duplo twist esticado, ou Dos Santos II.\n[…]\nNa sequência, competindo no Mundial de Anaheim, na Califórnia, conquistou a primeira medalha de ouro brasileira desta competição: Na final do solo, superou a romena Catalina Ponor e a espanhola Elena Gómez, executando, pela primeira vez, o movimento que recebeu seu nome – o duplo twist carpado ou Dos Santos , desenvolvido com o auxílio do técnico Oleg Ostapenko, seu treinador até então.\n[…]\nEm 2007, submeteu-se a um exame de ancestralidade genética para descobrir seus ascendentes. Assim como resposta, Daiane apresentou as proporções equilibradas entre os três principais grupos que deram origem à população brasileira. A ex-atleta gaúcha tem 39,7% de ancestralidade africana, 40,8% europeia e 19,6% ameríndia. Santos é descendente de angolanos, portugueses, italianos e indígenas.\n[…]\nDaiane dos Santos na Federação Internacional de Ginástica\n[…]\n«Página oficial». www.daianedossantos.com\n[…]\ndos Santos(habilidades vault)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Daiane_dos_Santos",
        "situacao": "ok",
        "texto": "Daiane Garcia dos Santos (born February 10, 1983) is a retired Brazilian artistic gymnast. She is the 2003 world champion on the floor apparatus. On doing so, she became the first black gymnast to ever win an event at the World Championships as well as the first Brazilian and South American to win the competition. She represented Brazil at the 2004, 2008, and 2012 Summer Olympics.\n[…]\nDaiane's breakthrough came at the 2003 World Artistic Gymnastics Championships in Anaheim, California, US. There, she won the gold medal on floor exercise, defeating Romania's Cătălina Ponor, who would become the Olympic champion on the event the following year. She opened her routine with a piked double Arabian: a half twist into a double front flip in a piked position.\n[…]\nRound-off + back handspring + laid-out double Arabian (Dos Santos II); round-off + back handspring + piked double Arabian (Dos Santos I); double turn; tour jeté 1/1; round-off + back handspring + double layout; cat leap 3/2 + cat leap 1/1; front pike + round-off + back handspring + double pike.\n[…]\nRound-off + back handspring + full-twisting double layout; front pike + round-off + back handspring + piked double Arabian (Dos Santos I); double turn with leg at horizontal; jump 1/1 with leg at horizontal + tour jeté 1/1; switch leap + switch side leap + tour jeté; front pike + round-off + back handspring + double pike.\n[…]\nRound-off + back handspring + full-twisting double layout; round-off + back handspring + piked double Arabian (Dos Santos I); full turn with leg at horizontal; tour jeté 1/2; front pike + round-off + back handspring + double pike; leap jump + tour jeté 1/1; switch leap; round-off + back handspring + double layout.\n[…]\nDaiane dos Santos at World Gymnastics\n[…]\nDos Santos2 (Floor Exercise Skill)\n[…]\nDaiane dos Santos at Olympics.comDaiane dos Santos at Olympic.org (archived)\n[…]\nDaiane dos Santos at Olympedia"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Corrida de São Silvestre",
      "descricao": "Corrida de rua disputada em São Paulo todo 31 de dezembro, desde 1925."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1925, que jornalista paulista criou a Corrida de São Silvestre?",
    "resposta": "Cásper Líbero",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Corrida_Internacional_de_S%C3%A3o_Silvestre",
      "https://pt.wikipedia.org/wiki/C%C3%A1sper_L%C3%ADbero"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Corrida_Internacional_de_S%C3%A3o_Silvestre",
        "situacao": "ok",
        "texto": "A Corrida Internacional de São Silvestre é uma corrida de rua realizada anualmente na cidade de São Paulo, Brasil, em 31 de dezembro, dia de São Silvestre (data de morte do Papa da Igreja Católica, canonizado também neste dia, anos depois, no quarto século da Era Cristã) e de onde vem o seu nome.\n[…]\nA Corrida Internacional de São Silvestre é transmitida ao vivo pela televisão para o Brasil e para o mundo pela TV Gazeta e pela TV Globo desde 1982.\n[…]\nCásper Líbero, um jornalista e advogado paulista milionário que fez fortuna no início do século XX no setor de imprensa, era um apaixonado por esportes, tanto que ele foi o idealizador da Gazeta Esportiva, que havia sido lançada inicialmente como coluna do jornal A Gazeta e posteriormente, em 1947, foi lançada como jornal (4 anos após a morte de Cásper). Em uma viagem que fez a Paris, ficou maravilhado com uma corrida realizada à noite, em que os corredores carregavam tochas ao longo do percurso.\n[…]\nEm 1967 a corrida passou a ser uma atração turística. No dia 10 de dezembro, a prova passou a integrar o calendário turístico paulista graças ao Decreto de Oficialização da Corrida Internacional de São Silvestre, que foi assinado pelo então governador de São Paulo, Roberto Costa de Abreu Sodré.\n[…]\nNo ano de 1968, O cantor e compositor Jorge Ben Jor tentou correr no pelotão de elite masculino. O brasileiro se inscreveu na XV Preliminar Paulista da Corrida Internacional de São Silvestre. Nessa prova, Jorge Ben estava entre os 700 atletas inscritos, mas havia apenas 250 vagas. O músico não conseguiu garantir o seu lugar.\n[…]\nRua Líbero Badaró;\n[…]\nA 24ª edição da corrida infanto-juvenil, organizada pela Fundação Cásper Líbero, ocorreu no dia 16 de Dezembro de 2017. Naquele ano puderam participar atletas nascidos entre os anos de 2001 e 2011."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A1sper_L%C3%ADbero",
        "situacao": "ok",
        "texto": "Cásper Líbero (Bragança Paulista, 2 de março de 1889 — Rio de Janeiro, 27 de agosto de 1943) foi um jornalista e empresário brasileiro, fundador do jornal Última Hora no Rio de Janeiro, e proprietário A Gazeta em São Paulo. Seu legado é mantido pela Fundação Cásper Líbero, que hoje mantém a Rádio Gazeta Online, a Faculdade Cásper Líbero, a TV Gazeta, além da extinta Gazeta Esportiva. É formado pel\n[…]\nFilho de Honório Líbero, médico e político republicano, e de dona Zerbina de Toledo Líbero, senhora muito respeitada em Bragança, Cásper Líbero, mudou-se para a cidade de São Paulo.\n[…]\nAos 29 anos, no dia 14 de julho de 1918, Antônio Augusto de Covello, o terceiro dono do jornal A Gazeta, resolve vendê-lo a Cásper Líbero. Este tornou-se diretor e proprietário, transformando-o em um dos maiores órgãos de imprensa da época. Cásper modernizou o jornal implementando novas tecnologias, instalando uma nova dinâmica na sua distribuição, e conseguiu organizá-lo de maneira a obter lucros, mas promovendo um jornalismo correto e ético.\n[…]\nEm 1939, inaugurou o Palácio da Imprensa, como viria a ser chamada a sede do jornal A Gazeta na antiga Rua da Conceição, atual Avenida Cásper Líbero. Foi o primeiro edifício erguido no país com as características apropriadas para redação, gravura, composição, impressão e distribuição de um jornal.\n[…]\nCásper Líbero foi um grande entusiasta da Revolução Constitucionalista de 32. Com o fim da revolução e a derrota dos paulistas, Cásper se exila temporariamente na Europa, voltando ao Brasil após o perdão do governo.\n[…]\nA Fundação Cásper Líbero administra seus bens, e atendendo à sua vontade, criou a primeira escola de Jornalismo do país, a Faculdade Cásper Líbero. A TV Gazeta, que já fazia parte dos seus planos, também foi um dos legados que foram deixados."
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Salto Fosbury",
      "descricao": "Técnica de salto em altura em que o atleta passa de costas sobre o sarrafo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Nos Jogos do México, em 1968, que americano ganhou o ouro saltando de costas sobre o sarrafo e mudou o salto em altura?",
    "resposta": "Dick Fosbury",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dick_Fosbury",
      "https://en.wikipedia.org/wiki/Fosbury_flop"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dick_Fosbury",
        "situacao": "ok",
        "texto": "Richard Douglas Fosbury (March 6, 1947 – March 12, 2023) was an American high jumper, who is considered one of the most influential athletes in the history of track and field. He won a gold medal at the 1968 Summer Olympics, revolutionizing the high jump event with a \"back-first\" technique now known as the Fosbury flop. His method was to sprint diagonally towards the bar, then curve and leap backw\n[…]\nFosbury later recalled:\n[…]\nAt the 1968 Olympics in Mexico City, Fosbury took the gold medal and set a new Olympic record at 2.24 m (7 ft 4+1⁄4 in), displaying the potential of the new technique. Despite the initial skeptical reactions from the high-jumping community, the \"Fosbury Flop\" quickly gained acceptance. In the Finals competition, only three jumpers cleared 2.20 m (7 ft 2+5⁄8 in), and Fosbury was in the lead by virtue of having cleared every height on his first attempt.\n[…]\nHaving won the gold medal and broken the American record, Fosbury asked the bar to be raised to 2.29 m (7 ft 6+1⁄8 in) for his final three attempts, hoping to break Valeriy Brumel's five-year-old world record of 2.28 m (7 ft 5+3⁄4 in). All three attempts were unsuccessful.\n[…]\nAt the next Olympics in 1972 at Munich, 28 of the 40 competitors used Fosbury's technique, although gold medalist Jüri Tarmak used the straddle technique. In the women's event, the winner Ulrike Meyfarth used Fosbury's technique. By 1980, 13 of the 16 Olympic finalists used it. Of the 36 Olympic medalists in the event from 1972 through 2000, 34 used \"the Flop\", making it the most popular technique in high jumping.\n[…]\nIn January 2019, Fosbury succeeded Larry Schoen as Blaine County Commissioner.\n[…]\nDick Fosbury at World Athletics\n[…]\nDick Fosbury at the USATF Hall of Fame (archived)\n[…]\nDick Fosbury at the Team USA Hall of Fame (archive July 20, 2023)\n[…]\nRichard Douglas Fosbury at Olympics.comDick Fosbury at Olympic.org (archived)\n[…]\nDick Fosbury at Olympedia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fosbury_flop",
        "situacao": "ok",
        "texto": "The Fosbury flop is a jumping style used in the track and field event of high jump. It was popularized and perfected by American athlete Dick Fosbury, whose gold medal in the 1968 Summer Olympics in Mexico City brought it to the world's attention. The flop became the dominant style of the event, surpassing the straddle technique, Western roll, Eastern cut-off, or scissors jump to clear the bar.\n[…]\nThough the backwards flop technique had been known for years before Fosbury, landing surfaces had been sandpits or low piles of matting and high jumpers had to land on their feet or at least land carefully to prevent injury. With the advent of deep foam matting, high jumpers were able to be more adventurous in their landing styles and hence more experimental with jumping styles.\n[…]\nThe approach (or run-up) in the Fosbury flop is characterized by (at least) the final four or five steps being run in a curve, allowing the athlete to lean in to the turn, away from the bar. This allows the center of gravity to be lowered even before knee flexion, giving a longer time period for the take-off thrust. Additionally, on take-off, the sudden move from inward lean to outwards produces a rotation of the jumper's body along the bar's axis, aiding clearance.\n[…]\nFosbury himself cleared the bar with his hands by his sides, whereas some athletes cross the bar with their arms held out to the side or even above their heads, optimizing their mass-distribution. Studies show that variations in approach, arm technique, and other factors can be adjusted to achieve each athlete's best performance.\n[…]\nDick Fosbury revolutionised the high jump (from the International Olympic Committee web site)\n[…]\nRotation over the bar in the Fosbury Flop analysed & explained by Dr. Jesus Dapena Archived 2 December 2008 at the Wayback Machine."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dick_Fosbury",
        "situacao": "ok",
        "texto": "Richard 'Dick' Douglas Fosbury (Portland, 6 de Março de 1947 – Salt Lake  City, 12 de março de 2023) foi um atleta americano que revolucionou o salto em altura criando uma técnica de saltar de costas, atualmente conhecida como Salto Fosbury.\n[…]\nDick Fosbury experimentou pela primeira vez esta nova técnica aos dezesseis anos, enquanto fazia o ensino médio em Medford. Ele não gostava do estilo predominante até então, o \"método straddle,\" e começou a saltar com o ultrapassado \"salto tesoura\".\n[…]\nDepois de se formar na Medford High School em 1965, ele se inscreveu na Universidade do Estado do Oregon em Corvallis. Fosbury venceu em 1968 o campeonato da NCAA usando sua nova técnica, assim como as seletivas olímpicas.\n[…]\nNos Jogos Olímpicos de 1968 na Cidade do México, ele ganhou a medalha de ouro e estabeleceu um novo recorde olímpico ao saltar 2,24 m e mostrando o potencial de sua nova técnica. Apesar das reações da comunidade do Salto em altura terem sido céticas no início, o \"Salto Fosbury\" rapidamente se tornou popular.\n[…]\nQuatro anos depois, nas Olimpíadas de Munique 1972, 28 dos quarenta competidores utilizaram-se da técnica de Fosbury. Nos 1980, treze dos dezesseis finalistas olímpicos utilizaram esta técnica. Dos 36 medalhistas olímpicos no evento, de 1972 até 2000, 34 utilizaram o \"Salto Fosbury\". Hoje esta técnica é a mais popular.\n[…]\nFosbury morreu em 12 de março de 2023, aos 76 anos, devido ao linfoma.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Circuito Mundial de Surfe de 2014",
      "descricao": "Temporada de 2014 do campeonato mundial de surfe profissional."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 2014, quem se tornou o primeiro brasileiro campeão mundial de surfe?",
    "resposta": "Gabriel Medina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gabriel_Medina",
      "https://pt.wikipedia.org/wiki/Gabriel_Medina"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gabriel_Medina",
        "situacao": "ok",
        "texto": "Gabriel Medina Pinto Ferreira (born 22 December 1993) is a Brazilian professional surfer. He won the 2014, 2018 and 2021 WSL World Championships. In two appearances at the Olympic surfing tournament, Medina won a bronze medal at the 2024 Olympic Games.\n[…]\nIn 2013, Medina went on to win the World Junior Tour (ASP) in 2013 at age 19.\n[…]\nIn the 2021 season, Medina managed to clinch his 3rd world title in definitive fashion by winning 3 of the 8 tour events and placing runner-up in three events. The win saw Medina join Tom Curren, Andy Irons and Mick Fanning with three World Titles. With 16 WSL Championship Tour (CT) event wins and 29 final appearances under his belt, Medina is one of the most experienced surfers when it comes to producing the best surfing under pressure.\n[…]\nMedina is 2nd only to Kelly Slater for the most World Titles among surfers currently on the CT.\n[…]\nMedina then beat Alonso Correa to get the bronze medal.\n[…]\nOn 11 January 2025, Medina announced on his Instagram that he sustained a pectoral injury during a session in Maresias, Brazil, forcing Medina to withdraw from an unspecified number of events in the 2025 WSL Championship Tour. The World Surf League later confirmed that Medina withdrew from the first three events of the 2025 World Surf League Championship Tour in Hawaii, Abu Dhabi, and Portugal.\n[…]\nMedina occasionally rides boards shaped by Wade Tokoro for Triple Crown events.\n[…]\nGabriel Medina (2020)\n[…]\nMundo Medina (2019)\n[…]\nASP World Surf Tour (2014)\n[…]\nGabriel Medina at the World Surf League\n[…]\nGabriel Medina at br.ripcurl.com at the Wayback Machine (archived 1 April 2013) (in Portuguese)\n[…]\nGabriel Medina at Olympics.com\n[…]\nGabriel Medina at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nGabriel Medina at Olympedia\n[…]\nGabriel Medina on Instagram"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gabriel_Medina",
        "situacao": "ok",
        "texto": "Gabriel Medina Pinto Ferreira (São Sebastião, 22 de dezembro de 1993) é um surfista profissional e medalhista olímpico brasileiro. Mais conhecido por ser o tricampeão mundial de surf da ASP World Tour de 2014, 2018 e 2021, sendo o primeiro brasileiro a vencer um mundial de Surf. Em 2009, assinou contrato com a empresa australiana Rip Curl e se profissionalizou. Aos 17 anos ingressou na ASP World T\n[…]\nEm julho de 2009, Gabriel Medina fechou um contrato com a empresa australiana Rip Curl e profissionalizou-se. Dez dias depois, venceu a etapa do Mundial Profissional.\n[…]\nEm 2017 foi vice-campeão mundial de surfe em uma batalha contra o seu grande rival John John Florence, após um inicio de temporada com uma lesão no joelho, Gabriel se recuperou durante a temporada, vencendo inclusive duas etapas consecutivas ( França e Portugal) no circuito mundial, chegando a Pipe Master como um dos postulantes ao titulo, após grandes baterias, Medina foi eliminado nas quartas de final do evento  para Jérémy Flores, perdendo o titulo mundial para Florence.\n[…]\nApós um 2020 sem surf devido a pandemia, a temporada de 2021 de Gabriel Medina foi marcada por altos e baixos. Nos Jogos Olímpicos de Tóquio, Medina chegou como favorito, mas acabou perdendo na semifinal para o japonês Kanoa Igarashi. Na disputa pelo bronze, ele foi derrotado pelo australiano Owen Wright e ficou fora do pódio. Apesar da decepção olímpica, Medina deu a volta por cima e se tornou tricampeão mundial de surf.\n[…]\nJá no ano de 2023, Gabriel retornou saudável, o tricampeão mundial acumulou nonas colocações nas quatro primeiras etapas desta temporada. Porém, no quinto evento em Margaret River, Medina deu show.\n[…]\nO brasileiro nunca tinha conseguido passar das quartas de final em Margaret, dessa forma, Gabriel Medina mostrou mais uma vez seu talento e venceu pela primeira vez em um dos picos mais desafiadores do mundo.\n[…]\n2014\n[…]\nGabriel Medina no X"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Tour de France",
      "descricao": "Volta ciclística da França, a mais tradicional das grandes voltas do ciclismo."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano foi disputada a primeira edição do Tour de France?",
    "resposta": "1903",
    "fonte": [
      "https://en.wikipedia.org/wiki/1903_Tour_de_France",
      "https://en.wikipedia.org/wiki/Tour_de_France"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1903_Tour_de_France",
        "situacao": "ok",
        "texto": "The 1903 Tour de France was the first cycling race set up and sponsored by the newspaper L'Auto, ancestor of the current daily, L'Équipe. It ran from 1 to 19 July in six stages over 2,428 km (1,509 mi), and was won by Maurice Garin.\n[…]\nWhen Desgrange and young employee Géo Lefèvre were returning from the Marseille–Paris cycling race, Lefèvre suggested holding a race around France, similar to the popular six-day races on the track. Desgrange proposed the idea to the financial controller Victor Goddet, who gave his approval, and on 19 January 1903, the Tour de France was announced in L'Auto.\n[…]\nThe 1903 Tour de France was run in six stages. Compared to modern stage races, the stages were extraordinarily long, with an average distance of over 400 km (250 mi), compared to the 171 km (106 mi) average stage length in the 2004 Tour de France; cyclists had one to three rest days between each stage, and the route was largely flat, with only one stage featuring a significant mountain.\n[…]\nThe cyclists had also become national heroes. Maurice Garin returned for the 1904 Tour de France  but his title defence failed when he was disqualified. With the prize money that he won in 1903, which totalled 6,075 francs, (approximately US$40,000 and GBP£23,000 in 2006 values) Garin later bought a gas station, where he worked for the rest of his life.\n[…]\nMcGann, Bill; McGann, Carol (2006). The Story of the Tour de France: 1903–1964. Vol. 1. Indianapolis, IN: Dog Ear Publishing. ISBN 978-1-59858-180-5.\n[…]\nFacchinetti, Paolo (2003). Tour de France 1903: la nascita della Grande Boucle (in Italian). Ediciclo Editore. ISBN 88-85318-88-6.\n[…]\nMedia related to Tour de France 1903 at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tour_de_France",
        "situacao": "ok",
        "texto": "The Tour de France (pronounced [tuʁ də fʁɑ̃s]; lit. 'Tour of France') is an annual men's multiple-stage road cycling race held primarily in France. It is the oldest and most prestigious of the three Grand Tours, which include the Giro d'Italia and the Vuelta a España.\n[…]\nThe Tour de France was created in 1903. The roots of the Tour de France trace back to the emergence of two rival sports newspapers in the country. On one hand was Le Vélo, the first and the largest daily sports newspaper in France, on the other was L'Auto, which had been set up by journalists and businesspeople including Comte Jules-Albert de Dion, Adolphe Clément, and Édouard Michelin in 1899. The rival paper emerged following disagreements over the Dreyfus Affair.\n[…]\nThe first Tour de France was staged in 1903. The plan was a five-stage race from 31 May to 5 July, starting in Paris and stopping in Lyon, Marseille, Bordeaux, and Nantes before returning to Paris. Toulouse was added later to break the long haul across southern France from the Mediterranean to the Atlantic.\n[…]\nThe first Tour de France started almost outside the Café Reveil-Matin at the junction of the Melun and Corbeil roads in the village of Montgeron. It was waved away by the starter, Georges Abran, at 3:16 p.m. on 1 July 1903. L'Auto had not featured the race on its front page that morning.\n[…]\nCyclists who have died during the Tour de France:\n[…]\nThe smallest margins between the winner and the second placed cyclists at the end of the Tour is 8 seconds between winner Greg LeMond and Laurent Fignon in 1989. The largest margin, by comparison, remains that of the first Tour in 1903: 2h 49m 45s between Maurice Garin and Lucien Pothier.\n[…]\nTour de France palmares at Cycling Archives (archived, or current page in French)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tour_de_France_de_1903",
        "situacao": "ok",
        "texto": "O Tour de France 1903, foi a primeira versão da Volta da França realizada entre os dias 1 de julho e 18 de julho de 1903.\n[…]\nA prova foi uma ação publicitária do diário francês \"L'Auto\", que o foi o antecessor do jornal esportivo diário l'Équipe. O percurso foi desenhado pelo diretor do jornal, Henri Desgrange. É atribuido a Géo Lefèvre jornalista francês, a ideia da competição.\n[…]\n«The Origins of the Tour de France, Tom James, Velo Archive.» (em inglês)  Arquivado em 9 de abril de  2009, no Wayback Machine.\n[…]\n«1903: Maurice Garin wint eerste Tour, Tourdefrance.nl.» (em alemão)\n[…]\n«Site oficial do Tour de France.» (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Roger Bannister",
      "descricao": "Atleta e médico britânico que correu a primeira milha abaixo de quatro minutos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que década o britânico Roger Bannister se tornou o primeiro a correr uma milha em menos de quatro minutos?",
    "resposta": "Anos 1950",
    "fonte": [
      "https://en.wikipedia.org/wiki/Roger_Bannister",
      "https://en.wikipedia.org/wiki/Four-minute_mile"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roger_Bannister",
        "situacao": "ok",
        "texto": "Sir Roger Gilbert Bannister (23 March 1929 – 3 March 2018) was an English neurologist and middle-distance athlete who ran the first sub-4-minute mile.\n[…]\nThe year 1950 saw more improvements as he finished a relatively slow 4:13-mile on 1 July with an impressive 57.5 last quarter. Then, he ran the AAA 880 in 1:52.1, losing to Arthur Wint, and then ran 1:50.7 for the 800 m at the European Championships on 26 August, placing third. Chastened by this lack of success, Bannister started to train harder and more seriously.\n[…]\nBannister, Roger (2004). The First Four Minutes. Sutton. ISBN 978-0-7509-3530-2.\n[…]\nBale, John. Roger Bannister and the four-minute mile: Sports myth and sports history (Routledge, 2012). excerpt\n[…]\nBale, John. \"Amateurism, Capital and Roger Bannister.\" Sport in History 26.3 (2006): 484–501.\n[…]\nBannister, Roger (1955), The Four-Minute Mile. Revised and enlarged 50th anniversary (of the race) edition, 2004, The Lyons Press.\n[…]\nFreeman, Roy; Low, Philip; Joyner, Mike (January 2019). \"Obituary: Sir Roger Bannister (1929–2018)\". Autonomic Neuroscience. 216: iii–v. doi:10.1016/j.autneu.2018.09.007.\n[…]\nPortraits of Roger Bannister at the National Portrait Gallery, London\n[…]\nRoger Bannister at World Athletics\n[…]\nRoger Bannister at Olympics.com\n[…]\nRoger Bannister at Olympedia\n[…]\nNewsreel footage of Roger Bannister achieving the four-minute mile\n[…]\nRoger Bannister and the Four-Minute Mile, original reports from The Times (archived)\n[…]\nImages of Roger Bannister in the Queen Square Archives (10 images)\n[…]\nSir Roger Bannister Biography and Interview by American Academy of Achievement\n[…]\nRoger Bannister on the History of Modern Biomedicine Research Group website (3 images)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Four-minute_mile",
        "situacao": "ok",
        "texto": "A four-minute mile is the completion of a mile run (1.609 km) in four minutes or less, translating to an average speed of 15 miles per hour (24.1 km/h).\n[…]\nThe four-minute barrier was first broken on 6 May 1954 at Oxford University's Iffley Road Track, by British athlete Roger Bannister, with the help of fellow runners Chris Chataway and Chris Brasher as pacemakers.\n[…]\nIn 1955 Putnam & Co. Ltd. published Roger Bannister's account of the events in First Four Minutes. This was later adapted as \"The Four-Minute Mile\" by Reader's Digest in 1958.\n[…]\nIn 2004, Neal Bascomb wrote a book entitled The Perfect Mile about Roger Bannister, John Landy, and Wes Santee, portraying their individual attempts to break the four-minute mile and the context of the sport of mile racing. A second film version (entitled Four Minutes) was made in 2005, starring Jamie Maclachlan as Bannister.\n[…]\nIn 2005, ESPN released a television adaptation of the event called \"Four Minutes\" featuring Jamie Maclachlan as Roger Bannister and Christopher Plummer as his wheelchair-using coach, Archie Mason.\n[…]\nIn July 2016, the BBC broadcast the documentary Bannister: Everest on the Track, The Roger Bannister Story with firsthand interviews from Bannister and various other figures on the first sub-4-minute mile.\n[…]\nBannister, Roger (1955). The First Four Minutes. Putnam.\n[…]\nRoger Bannister and the Four-Minute Mile Original reports from The Times\n[…]\nOfficial website for documentary – Franz Stampfl: The Man Behind the Miracle Mile – a film about the coach behind Bannister's successful mile record attempt Archived 19 April 2021 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roger_Bennister",
        "situacao": "ok",
        "texto": "Roger Bennister (Londres, 23 de março de 1929 – 3 de março de 2018) foi um atleta olímpico e neurologista britânico. Ele ficou conhecido por ter sido a primeira pessoa a correr uma milha (1,6 quilômetros) em menos de 4 minutos.\n[…]\nNas Olimpíadas de 1952 em Helsinque, Bannister estabeleceu um recorde britânico nos 1 500 metros e terminou em quarto lugar. Essa conquista fortaleceu sua determinação de se tornar o primeiro atleta a terminar a corrida de uma milha em menos de quatro minutos. Ele realizou essa façanha em 6 de maio de 1954 na pista de Iffley Road em Oxford, com Chris Chataway e Chris Brasher fornecendo o ritmo.\n[…]\nQuando o locutor, Norris McWhirter, declarou \"Eram três...\", os aplausos da multidão abafaram o tempo exato de Bannister, que era de 3 minutos e 59,4 segundos. Ele alcançou esse recorde com treinamento mínimo, enquanto praticava como médico júnior. O recorde de Bannister durou apenas 46 dias.\n[…]\nBannister tornou-se neurologista e mestre do Pembroke College, Oxford, antes de se aposentar em 1993. Como mestre de Pembroke, ele fez parte do corpo diretivo da Abingdon School de 1986 a 1993. Quando perguntado se a milha de 4 minutos foi sua conquista de maior orgulho, ele disse que se sentia mais orgulhoso de sua contribuição para a medicina acadêmica por meio da pesquisa sobre as respostas do sistema nervoso. Bannister era patrono do MSA Trust.\n[…]\nBannister, Roger; Brain, Walter Russell, eds. (1992). Brain and Bannister's clinical neurology. 7th ed. Oxford: Oxford University Press. ISBN 9780192619136. OCLC 24318711",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Maratona de Boston",
      "descricao": "Maratona anual disputada em Boston, nos Estados Unidos, desde 1897."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A Maratona de Boston é corrida num feriado de abril que relembra as primeiras batalhas da independência americana. Que feriado é esse?",
    "resposta": "Dia dos Patriotas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Boston_Marathon",
      "https://en.wikipedia.org/wiki/Patriots%27_Day"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Boston_Marathon",
        "situacao": "ok",
        "texto": "The Boston Marathon is an annual marathon race hosted by eight cities and towns in greater Boston in eastern Massachusetts, United States. It is traditionally held on Patriots' Day, the third Monday of April. First held in 1897, the event was inspired by the success of the first marathon competition in the 1896 Summer Olympics. The Boston Marathon is the world's oldest annual marathon and ranks as\n[…]\nThe event was scheduled for the recently established holiday of Patriots' Day, with the race linking the Athenian and American struggles for liberty. The race, which became known as the Boston Marathon, has been held in some form every year since then, even during the World War years and the Great Depression, making it the world's oldest annual marathon. In 1924, the starting line was moved from Metcalf's Mill in Ashland to the neighboring town of Hopkinton.\n[…]\nThe race has traditionally been held on Patriots' Day, a state holiday in Massachusetts. Through 1968, the holiday was observed on April 19, with the event held that day, unless it fell on a Sunday, in which case the race was held on Monday. Since 1969, the holiday has been observed on the third Monday in April, with the event held then, often referred to locally as \"Marathon Monday\".\n[…]\nIn 2021, when City Connect uniforms were introduced, the Red Sox chose a design inspired by the marathon. The colors were yellow and blue, and a number \"617\" - the area code for Boston - was added to the left sleeve in a way reminiscent of a racing bib. They were worn on the weekend leading up to Patriots' Day; on the holiday itself, the Boston Strong uniforms commemorating the 2013 bombing were worn.\n[…]\n\"Boston Marathon\". MarathonGuide.com.\n[…]\nBoston Marathon: What to Expect on Race Day\n[…]\nBoston Marathon Course Pace Band\n[…]\nThe 1918 Boston Marathon Military Relay\n[…]\nBoston Marathon Photos-2005\n[…]\nBoston Marathon Course Photos: Runner's View from Start to Finish"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Patriots%27_Day",
        "situacao": "ok",
        "texto": "Patriots' Day (Patriot's Day in Maine) is an annual event, formalized as a legal holiday or a special observance day in eight U.S. states, commemorating the battles of Lexington, Concord, and Menotomy, the inaugural battles of the American Revolutionary War. The holiday occurs annually on the third Monday in April in four states and on April 19 in four, with celebrations including battle reenactme\n[…]\nThe day is a public school observance day in Wisconsin. Florida law also encourages people to celebrate it, though it is not treated as a legal holiday. Connecticut began observance in 2018 and North Dakota in 2019. Utah recognized April 19th as Patriot's Day in 2025.\n[…]\nUp to 60 events take place before and during the Patriots' Day weekend. Battle re-enactments are held in several locations including Boston, Cambridge, Arlington, Medford, Lexington, Concord, and Lincoln, plus a few others. Parades are held in Lexington, Concord, Boston, Bedford, and Arlington. Other observances of the weekend include tours of historic houses and pancake breakfasts.\n[…]\nThe most significant celebration of Patriots' Day is the Boston Marathon, which has been run every Patriots' Day since April 19, 1897 (except in 2020 and 2021) to mark the then-recently established holiday, with the race linking the Athenian and American struggles for liberty.\n[…]\nThe Boston Red Sox have been scheduled to play at home in Fenway Park on Patriots' Day every year since 1959. The game was postponed due to weather in 1959, 1961, 1965, 1967, 1984, and 2018. It was canceled in 1995 due to the baseball strike, and again in 2020 due to COVID-19. The game was played in 2013 despite the Boston Marathon bombing because it had finished before the bombs went off. From 1968 to 2006 the games started early, in the morning, around 11:00 am.\n[…]\nPatriots' Day information, via North of Boston Library Exchange"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maratona_de_Boston",
        "situacao": "ok",
        "texto": "Maratona de Boston é a mais famosa e tradicional corrida de longa distância realizada anualmente em todo o mundo, disputada em 42,195 km entre as cidades de Hopkinton e Boston, no estado de Massachusetts, Estados Unidos.\n[…]\nÉ a segunda mais antiga das maratonas, atrás apenas da maratona olímpica disputada pela primeira vez em Atenas 1896, mas a pioneira de todas as disputadas anualmente, existindo desde o ano de 1897, sem interrupção. Organizada pela B.A.A – Boston Atlethics Association, entre 1897 e 1968 a prova foi sempre disputada no dia 19 de abril, o Dia do Patriota, um feriado em comemoração ao início da revolução americana contra o domínio inglês, reconhecido apenas nos estados do Maine e de Massachussets.\n[…]\nTradicionalmente, desde sua criação, a maratona era disputada no Dia do Patriota, um feriado estadual em Massachusetts onde se localiza a região. Até 1969 o feriado era em 19 de abril, independente do dia de semana em que caísse. A partir daquele ano, ele passou a ser decretado na terceira segunda-feira de cada mês de abril e nesse dia a prova é realizada. Esta terceira segunda-feira de abril passou a ser chamada pelos moradores de Boston e adjacências de \"Segunda-feira da Maratona\".\n[…]\nApenas três anos após a B.A.A. passar a aceitar oficialmente a presença de mulheres na maratona, em 1975 a fundista alemã-ocidental Liane Winter estabeleceu uma nova marca mundial ali, de 2 h 42 min 24 s. Em 1983 foi a vez da corredora da casa, a campeã olímpica norte-americana Joan Benoit, que um ano antes de ganhar a medalha de ouro na primeira maratona feminina olímpica da história, em Los Angeles 1984, estabeleceu nova marca mundial em Boston – 2 h 22 min 43 s.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Tony Hawk",
      "descricao": "Skatista profissional americano, um dos nomes mais famosos do skate vertical."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Em 1999, Tony Hawk acertou numa competição a manobra de duas voltas e meia no ar, conhecida pelo total de graus. Que número é esse?",
    "resposta": "900",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tony_Hawk"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tony_Hawk",
        "situacao": "ok",
        "texto": "Anthony Frank Hawk (born May 12, 1968), nicknamed Birdman, is an American professional skateboarder, entrepreneur, and the owner of the skateboard company Birdhouse. A pioneer of modern vertical skateboarding, Hawk completed the first documented \"900\" skateboarding trick in 1999. He also licensed a skateboarding video game series named after him, published by Activision that same year.\n[…]\nTony Hawk is a trailblazer in vertical, or \"vert\", skateboarding, and remains one of the most iconic figures in the sport's history. He got his first skateboard at age nine, a gift from his older brother. Hawk then began to practice at the now-defunct Oasis Skatepark, where he started attracting attention by performing advanced maneuvers for his age. By the age of 12, he was already dominating amateur competitions across California.\n[…]\nOn June 27, 1999, at that years X Games, Hawk became the first skateboarder to land a \"900\", a trick involving the completion of two-and-a-half mid-air revolutions on a skateboard, in which he was successful on his twelfth attempt. After completing the trick, Hawk said, \"This is the best day of my life.\" Hawk captured double gold at that year's events in the vertical doubles and verts best trick.\n[…]\nOn June 27, 2016, at age 48, Hawk performed what he claimed would be his final 900. In a video posted on the YouTube RIDE Channel, Hawk said, \"Spencer was there on my first one, and now he was there on my last\", after successfully landing a 900.\n[…]\nA video game series based on Hawk's skateboarding, titled Tony Hawk's Pro Skater, debuted in 1999. Since then, the series has spawned 18 titles so far, including ten main-series titles, four spin-offs, and four repackages.\n[…]\nNominee: 1999\n[…]\nHawk, Tony (2000). Hawk – Occupation: Skateboarder. New York, New York: ReganBooks. ISBN 0-06-019860-5.\n[…]\nTony Hawk's\n[…]\nTony Hawk at IMDb\n[…]\nTony Hawk at the X Games (archived former page)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tony_Hawk",
        "situacao": "ok",
        "texto": "Anthony Frank \"Tony\" Hawk (Carlsbad, 12 de maio de 1968) é um skatista norte-americano de base goofy de grande destaque na modalidade vertical do esporte radical, um dos fundadores da marca Birdhouse Skateboards e o primeiro atleta a realizar a manobra \"900\". Também é muito conhecido por dar nome a franquia de jogos digitais Tony Hawk's, originalmente desenvolvida pela Neversoft.\n[…]\nApresentando grande habilidade desde jovem, Tony Hawk tornou-se profissional aos quatorze anos (nesta época o necessário para se tornar profissional era apenas entrar em um campeonato profissional, ao contrário dos padrões atuais em que se necessita de patrocínio de uma companhia de skate). Com seu primeiro skate, fabricado pela No Rules, o atleta conquistou seu primeiro título em 1980.[carece de fontes]?\n[…]\nEm 1999, após onze tentativas mal sucedidas, o atleta realizou o primeiro giro de 900 graus completos em pleno X Games e ganhou o prêmio na competição de melhor manobra. Logo em seguida se aposenta oficialmente para dedicar sua vida a divulgação do esporte. No mesmo ano, a empresa de desenvolvimento de jogos de computador, Neversoft, aproveita o estouro de popularidade do atleta e o convida para dar nome ao seu novo jogo que então foi chamado de Tony Hawk's Pro Skater.\n[…]\nCom a criação da Tony Hawk Foundation, Hawk tem trabalhado para retribuir ao desporto que o esporte radical tanto lhe deu. Criada para promover e financiar pistas públicas em comunidades carentes, a fundação distribuiu mais de um milhão de dólares para entidades sem fim lucrativo construírem parques e pistas por todo os Estados Unidos.[carece de fontes]?\n[…]\nSeu filho, Riley Hawk, é casado com Frances Bean Cobain, filha de Kurt Cobain.\n[…]\nBrooke, Michael (1999). Concrete Wave: The History Of Skateboarding. ISBN 1-894020-54-5.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Wayne Gretzky",
      "descricao": "Jogador canadense de hóquei no gelo, apelidado de The Great One."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Que número de camisa a liga norte-americana de hóquei no gelo aposentou para todos os times em homenagem a Wayne Gretzky?",
    "resposta": "99",
    "distratores": [
      "66",
      "87",
      "9"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wayne_Gretzky"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wayne_Gretzky",
        "situacao": "ok",
        "texto": "Wayne Douglas Gretzky ( GRET-skee; born January 26, 1961) is a Canadian former professional ice hockey player and head coach. He played 20 seasons in the National Hockey League (NHL) for four teams from 1979 to 1999. Nicknamed \"the Great One\", he has been called the greatest ice hockey player ever by the NHL based on surveys of hockey writers, ex-players, general managers and coaches.\n[…]\nThe 1998–99 season was his last as a professional player. He reached one milestone in this last season, breaking the professional total (regular season and playoffs) goal-scoring record of 1,071, which Gordie Howe had held.\n[…]\nIn October 1999, Edmonton honoured Gretzky by renaming one of Edmonton's busiest freeways, Capilano Drive—which passes by Northlands Coliseum—to Wayne Gretzky Drive. Also in Edmonton, the local transit authority assigned a rush-hour bus route numbered No. 99 which also runs on Wayne Gretzky Drive for its commute.\n[…]\nIn 2017, as part-owner with Andrew Peller Ltd., Gretzky opened a winery and distillery named Wayne Gretzky Estates in Niagara-on-the-Lake, Ontario, with products labelled by the trademark No. 99. From 1993 to 2020, Gretzky and a business partner operated the Wayne Gretzky's restaurant near the Rogers Centre in downtown Toronto. Gretzky has other restaurants opened in 2016 at the Edmonton International Airport and named No.\n[…]\n99 Gretzky's Wine & Whisky, and in 2018 called Studio 99 at Rogers Place in Edmonton, Alberta.\n[…]\nThe Wayne Gretzky International Award is presented by the United States Hockey Hall of Fame to honour international individuals who have made major contributions to the growth and advancement of hockey in the United States. The Wayne Gretzky 99 Award is awarded annually to the Most Valuable Player in the Ontario Hockey League playoffs. The Wayne Gretzky Trophy is awarded annually to the playoff champion of the OHL's Western Conference."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wayne_Gretzky",
        "situacao": "ok",
        "texto": "Wayne Douglas Gretzky (Brantford, Ontário, 26 de janeiro de 1961) é um atleta canadense, foi jogador profissional de hóquei sobre o gelo. Seu apelido é \"O Grande\" (The Great One), e é considerado por muitos como o melhor jogador de hóquei da história. Gretzky, em sua carreira, foi primariamente um centro-avante. O número de seu uniforme era 99.\n[…]\nNeto de um imigrante bielorrusso (de quem herdou seu sobrenome \"Gretzky\", uma adaptação de Грэцкі, Hretski) e uma polonesa, é filho do também ex-jogador da NHL Walter Gretzky. Seus irmãos Brent e Keith também jogaram hóquei profissionalmente.\n[…]\nWayne foi uma criança prodígio. Aos seis anos, já jogava com crianças com dez anos de idade. Aos dez anos de idade, fez 378 gols em 78 jogos da liga infantil, tornando-se matéria da revista Toronto Telegram, o atual Toronto Sun. Aos 14 anos, saiu da cidade em busca de melhorar sua carreira. Passou a jogar em ligas amadoras, ao lado de jogadores com 20 anos de idade. Jogou um ano na Ontario Hockey League, na Sault Ste. Marie Greyhounds, onde queria jogar com o uniforme numerado 9.\n[…]\nPor esta já estar em uso, seu técnico convenceu-no a usar o número 99.\n[…]\nGretzky jogou por vinte anos na NHL, a maior e mais reconhecida liga profissional de hóquei sobre o gelo do mundo. Rompeu vários recordes de pontuação, foi tetracampeão da Copa Stanley com o Edmonton Oilers, e eleito oito anos seguidos o melhor jogador da liga. Parou de jogar profissionalmente em 1999. Seu número 99 foi aposentado por todos os times da NHL.\n[…]\n1998 - Eleito como o número 1 pela The Hockey News em uma lista com os 100 melhores jogadores de hockey de todos os tempos.\n[…]\n1996 - 2o Lugar Copa do Mundo de Hóquei sobre Gelo.\n[…]\nMaior Número de Assistências: 1,962\n[…]\nFonte: «hockeydb.com: Wayne Gretzky's profile». hockeydb.com. Consultado em 5 de maio de 2008",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Volante (badminton)",
      "descricao": "Peteca de penas usada no badminton."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O volante oficial de badminton feito de penas de ganso tem quantas penas?",
    "resposta": "Dezesseis",
    "distratores": [
      "Doze",
      "Vinte",
      "Vinte e quatro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shuttlecock"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shuttlecock",
        "situacao": "ok",
        "texto": "A shuttlecock (also called a birdie or shuttle, or ball) is a high-drag projectile, designed to decelerate very quickly, used in multiple sports, most notably badminton. It has an open conical shape formed by feathers or a synthetic material, such as plastic, embedded into a rounded cork (or rubber) base. The shuttlecock's shape makes it extremely aerodynamically stable. Regardless of initial orie\n[…]\nTo ensure satisfactory flight properties, it is considered preferable to use feathers from right or left wings only in each shuttlecock, and not mix feathers from different wings, as the feathers from different wings are shaped differently. Badminton companies make shuttlecock corks by sandwiching polyurethane between corks and/or using a whole piece of natural cork. With the first method, the cork becomes misshapen after use, while the cork in the latter method changes very little after use.\n[…]\nWorld Badminton Federation Rules say the shuttle should reach the far doubles service line plus or minus half the width of the tram. According to manufacturers proper shuttles will generally travel from the back line of the court to just short of the long doubles service line on the opposite side of the net, with a full underhand hit from an average player.\n[…]\nA feathered shuttlecock will still feel dull and heavy while in play because of the feathers, but a synthetic cannot maintain energy in flight in the same manner.\n[…]\nAir Badminton\n[…]\nBadminton\n[…]\nBattledore and shuttlecock – an ancient game similar to that of modern badminton\n[…]\nJianzi – a traditional Asian game in which players aim to keep a heavily weighted shuttlecock (Jian) from touching the ground\n[…]\nThe Corsican Shuttlecock – a satirical cartoon from 1814 featuring Napoleon as a shuttlecock\n[…]\nShuttlecock at the 2009 Asian Indoor Games\n[…]\nMedia related to Shuttlecocks at Wikimedia Commons\n[…]\nThe dictionary definition of shuttlecock at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Volante_%28badm%C3%ADnton%29",
        "situacao": "ok",
        "texto": "Um volante, pena ou peteca (Brasil) é o  utilizado no badminton. Tem uma forma cônica aberta: o cone é formado por dezesseis plumas inseridas à volta de uma base de cortiça semiesférica coberta por uma capa delgada de couro.\n[…]\nO projétil do badminton é conhecido como peteca no Brasil, porém peteca também é o nome de um jogo similar ao badminton jogado nesse país.\n[…]\nCBP - Confederação Brasileira de Peteca",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Ironman",
      "descricao": "Triatlo de longa distância criado no Havaí em 1978, com natação, ciclismo e corrida."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Ironman, depois de nadar cerca de quatro quilômetros e pedalar cento e oitenta, o atleta ainda corre que distância clássica?",
    "resposta": "Uma maratona",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ironman_Triathlon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ironman_Triathlon",
        "situacao": "ok",
        "texto": "An Ironman Triathlon is one of a series of long-distance triathlon races organized by the World Triathlon Corporation (WTC), consisting of a 2.4-mile (3.9 km) swim, a 112-mile (180.2 km) bicycle ride and a marathon 26.22-mile (42.2 km) run completed in that order, a total of 140.6 miles (226.3 km). It is widely considered one of the most difficult one-day sporting events in the world.\n[…]\nOver time, the popularity of the triathlon grew, and the annual race on the Big Island became The Ironman World Championship. In 1983, admission to the race began following a qualification-based system, whereby athletes had to obtain entry to the race by competing in another Ironman race and gaining a slot allocated on a proportional basis.\n[…]\nAmateur triathletes can qualify for the World Championship by placing in one of the other Ironman series races. Entry into the race can also be obtained through various contests and promotions or through the Ironman Foundation's charitable eBay auction.\n[…]\nThere are over three dozen Ironman Triathlon races throughout the world that enable qualification for the Ironman World Championships. Professional athletes qualify for the championship through a point ranking system, where points are earned based on their final placement in Ironman and Ironman 70.3 events. The top 50 male and top 35 female professionals in points qualify for the championship.\n[…]\nFastest female Ironman distance triathlon marathon run time: 2:44:35 (Roth, 2011)\n[…]\nUndefeated over the Ironman distance triathlon\n[…]\nFirst winner of the Ironman World Championship from the United Kingdom\n[…]\nOn top of the Ironman World Championship, the Ironman Pro Series was launched in 2024. The Pro Series is a year long competition aimed at professional triathletes only. Participants collect points throughout a year and compete for the Pro Series champion title and a prize pool of US$1.7 million.\n[…]\nXTERRA Triathlon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ironman_Triathlon",
        "situacao": "ok",
        "texto": "Ironman (muitas vezes estilizado como IRONMAN) é um tipo de prova de triatlo de longa distância, composta por 3,8 km de natação, 180,2 km de ciclismo e 42,195 km de corrida, realizados nessa ordem, totalizando 226 km, distância que é frequentemente chamada de \"um Ironman\" pela associação a este que é um dos formatos mais exigentes de competição de triatlo de um dia.\n[…]\nA proposta consistia em combinar três competições já existentes na ilha: a Waikiki Roughwater Swim, de aproximadamente 3,8 km; a Around-Oahu Bike Race, volta ciclística com cerca de 185 km e disputada em dois dias; e a Maratona de Honolulu, com a distância tradicional de 42,195 km.\n[…]\nAs imagens de Moss se tornaram uma das cenas mais conhecidas da história do triatlo, ajudando a projetar o Ironman para um público ainda mais amplo: em 1983, mais de mil pessoas não conseguiram se inscrever devido à grande procura, e 1200 atletas participam.Em dezembro de 1989, James P. Gills e David Voth adquiriram a Hawaii Triathlon Corporation, então proprietária da marca Ironman.\n[…]\nPosteriormente, a empresa passou a operar sob a denominação World Triathlon Corporation (WTC), criada para desenvolver a marca Ironman, ampliar a realização de provas e aumentar a premiação destinada aos atletas profissionais.\n[…]\nEm 2019, a World Triathlon Corporation passou a utilizar o nome The Ironman Group, colocando no nome a expansão da empresa para além do triatlo e mantendo o Ironman como principal identidade da empresa, ainda que World Triathlon Corporation permaneça como nome jurídico.\n[…]\nUm estudo publicado em 2021 investigou a relação entre volume de treinamento, experiência no triatlo, tempo de sono e desempenho de atletas amadores na distância de um Ironman. O estudo também analisou a relação entre essas variáveis e sinais de treinamento excessivo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Decatlo",
      "descricao": "Prova combinada do atletismo masculino, com dez provas disputadas em dois dias."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Depois de dois dias de competição, qual é a última das dez provas do decatlo?",
    "resposta": "1500 metros",
    "distratores": [
      "400 metros",
      "Salto com vara",
      "Lançamento de dardo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Decathlon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Decathlon",
        "situacao": "ok",
        "texto": "The decathlon is a combined event in athletics consisting of 10 track and field events. The word was formed in analogy to the word \"pentathlon\", from Greek δέκα (déka 'ten') and ἆθλον (áthlon 'contest, prize'). Events are held over two consecutive days and the winners are determined by the combined performance in all. Performance is judged not by the position achieved but rather on a points system\n[…]\nIn modern athletics, the 10 events are: 100 metres, long jump, shot put, high jump, 400 metres, 110 metres hurdles, discus throw, pole vault, javelin throw, and 1500 metres. The current official decathlon world record holder is French athlete Kevin Mayer, who scored a total of 9126 points at the 2018 Décastar in France.\n[…]\nA ten-event competition known as the \"all-around\" or \"all-round\" championship, similar to the modern decathlon, was first contested at the United States amateur championships in 1884 and reached a consistent form by 1890. While an all-around event was held at the 1904 Summer Olympics, whether it was an official Olympic event has been disputed.\n[…]\nThis rule was initially instituted to avoid scheduling conflicts when men's and women's decathlon competitions take place simultaneously, however by 2024 the rule was revised to allow conducting the women's decathlon using the men's event order. The inaugural Women's Decathlon World Championships used the men's ordering of events.\n[…]\nThe one-hour decathlon is a special type of decathlon in which the athletes have to start the last of ten events (1500 m) within sixty minutes of the start of the first event. The world record holder is Czech decathlete Robert Změlík, who achieved 7897 points at a meeting in Ostrava, Czechoslovakia, in 1992.\n[…]\nDecathlon bests are only recognized when an athlete completes the ten-event competition with a score of over 7000 points.\n[…]\nDecathlon splits of Olympic, World and European medalists"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Decatlo",
        "situacao": "ok",
        "texto": "Decatlo é uma competição de atletismo composta por dez provas. Nos Jogos Olímpicos, é exclusivamente praticada por homens. O equivalente feminino desta prova é o heptatlo, com sete provas. Os atletas inscritos competem num programa de dois dias, que inclui as seguintes modalidades: 100 metros rasos; salto em distância, arremesso de peso, salto em altura, 400 metros rasos (1.º dia); 110 metros com \n[…]\nA especial importância do decatlo deve-se a que o vencedor dessa modalidade é considerado \"o atleta mais completo do mundo\", por causa do conjunto de provas que a modalidade exige, ao mesmo tempo, resistência extraordinária e o desenvolvimento harmônico de diferentes aptidões físicas.\n[…]\nOs competidores recebem pontos por seu desempenho em cada uma das provas, de acordo com uma tabela elaborada pela Associação Internacional de Federações de Atletismo (IAAF). Essa tabela já foi modificada várias vezes, a fim de se adaptar à evolução do desempenho dos atletas. Desde 1912 ela foi modificada seis vezes, em 1920, 1934, 1950, 1962, 1977 — para incorporar o uso crescente da cronometragem eletrônica — e mais recentemente em 1985.\n[…]\nUm evento com dez modalidades chamado \"All-around\", similar ao decatlo moderno, foi disputado no Campeonato de Atletismo Amador dos Estados Unidos em 1884 e tomou uma forma consistente a partir de 1890. Várias versões de decatlo foram disputadas durante o século XIX e ele foi passou a fazer parte do programa olímpico em St. Louis 1904, como um \"All-Around Championship\". O evento foi disputado por sete atletas de duas nações e, segundo as regras da época, durava três dias.\n[…]\nO primeiro campeão olímpico da Era Moderna foi o britânico Thomas Kiely. Nesta primeira participação, o decatlo era composto por:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Medley individual",
      "descricao": "Prova de natação em que um mesmo nadador percorre os quatro estilos em sequência."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na prova de medley individual da natação, qual é o primeiro estilo nadado?",
    "resposta": "Borboleta",
    "distratores": [
      "Costas",
      "Peito",
      "Crawl"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Individual_medley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Individual_medley",
        "situacao": "ok",
        "texto": "Medley swimming is a combination of four different swimming strokes butterfly, backstroke, breaststroke, freestyle (usually front crawl), into one race. This race is either swum by one swimmer as individual medley (IM) or by four swimmers as a medley relay.\n[…]\n100 m/yd individual medley: Swum in short-course (25 m/yd pool) competition only. This is not an Olympic event.\n[…]\nThe technique for medley relay events does not differ much from the technique for the separate events for the four strokes and the basic set of relay rules. The only difference between the Medley Relay and the Individual Medley is the order of the strokes and the number of swimmers. The order for the medley relay is: backstroke, breaststroke, butterfly, and freestyle.\n[…]\nUntil 1952, the butterfly was not defined as a separate stroke from the breaststroke, and so medley races featured three styles: backstroke, breaststroke, and freestyle. The usual distance of both the IM and the medley relay was thus 300 metres or yards rather than 400. During a 150-meter Individual Medley race, Henry Myers was one of the first to use an overarm recovery while swimming breaststroke, becoming one of the earliest forms of butterfly.\n[…]\nIn individual medley events, the swimmer covers the four swimming styles in the following order: butterfly, backstroke, breaststroke and freestyle.\n[…]\nFreestyle means that in an event so designated the swimmer may swim any style, except that in individual medley or medley relay events, freestyle means any style other than backstroke, breaststroke or butterfly.\n[…]\nWhile swimming the Individual Medley, para-swimmers are put into different categories depending on their physical disability. They are listed below:\n[…]\n200 metres individual medley\n[…]\n400 metres individual medley"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Medley_%28nata%C3%A7%C3%A3o%29",
        "situacao": "ok",
        "texto": "O medley, ou estilos, é uma modalidade (prova) que durante seu percurso engloba todos os 4 estilos da natação. Se a prova for disputada como revezamento (estafeta), a ordem é essa: costas, peito, borboleta e crawl (livre). Casa seja disputada de forma individual, a ordem será a seguinte: borboleta, costas, peito e crawl (livre). A ordem dos estilos difere-se devido a partida de costas que deve ser\n[…]\nAs regras para saídas são as mesmas, mas nas viradas o nadador deve completar a piscina dentro da regra de cada estilo que esteja nadando naquele momento (por exemplo, não pode virar-se de frente para a água antes que termine a piscina referente ao nado Costas - diferentemente da regra de virada do estilo Costas).\n[…]\nNo caso de uma equipe, os nadadores vão saindo na medida em que os outros vão chegando, por exemplo, quando é dada a saída, o primeiro nadador (costas), quando completa sua prova, deve bater com a mão na borda e somente neste momento o próximo poderá sair.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Paris-Roubaix",
      "descricao": "Clássica de ciclismo de um dia no norte da França, famosa pelos trechos de calçamento de pedra."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Lembrando os trechos de pedra do percurso, que objeto incomum o vencedor da clássica de ciclismo Paris-Roubaix recebe como troféu?",
    "resposta": "Um paralelepípedo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Paris%E2%80%93Roubaix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paris%E2%80%93Roubaix",
        "situacao": "ok",
        "texto": "Paris–Roubaix [pa.ʁi.ʁu.bɛ] is a one-day professional bicycle road race in France, held on the first Sunday in April and starting north of Paris and finishing in Roubaix, at the border with Belgium. It is one of cycling's oldest races, and is one of the 'Monuments' or classics of the European calendar, and contributes points towards the UCI World Ranking.\n[…]\nParis–Roubaix is famous for rough terrain and cobblestones, or pavé (setts), being, with the Tour of Flanders, E3 Harelbeke and Gent–Wevelgem, one of the cobbled classics. It has been called the Hell of the North, a Sunday in Hell (also the title of a film about the 1976 race), the Queen of the Classics or la Pascale: the Easter race. Since 1977, the winner of Paris–Roubaix has received a sett (cobble stone) as part of his prize.\n[…]\nNo, these are members of the \"Amis de Paris Roubaix\", trying to clean off the mud and crusted earth left on the cobbles by farm work. They are on an important section of Paris–Roubaix and, without their intervention, the greatest of cycling classics, due to be held in only a few days, will not be able to come through... And without these cobbled routes, the Paris–Roubaix would disappear, depriving the whole world of one of sport's most intense and gripping events.\n[…]\nIn addition to Paris–Roubaix and the Tour of Flanders, called the cobbled classics, other spring races like Omloop Het Nieuwsblad and Gent–Wevelgem feature extensive cobbles.\n[…]\nThe U23 Paris–Roubaix or Paris–Roubaix Espoirs is raced in the early summer.\n[…]\nThe Paris–Roubaix Skoda Classic Challenge is organised the day before the pro race in April.\n[…]\nWoodland, Les (2013). Paris–Roubaix, the Inside Story: All the Bumps of Cycling's Cobbled Classic. Cherokee Village, Arkansas: McGann Publishing. ISBN 978-0-9859636-1-3.\n[…]\nParis–Roubaix palmares at Cycling Archives (archived, or current page in French)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paris%E2%80%93Roubaix",
        "situacao": "ok",
        "texto": "Paris–Roubaix é uma prova de ciclismo de estrada que acontece em apenas um dia no norte da França, próximo a fronteira com a Bélgica. Desde o seu início em 1896 até 1967 ela tinha sua largada em Paris e sua chegada em Roubaix, daí a origem do seu nome. A partir de 1968 a cidade de largada foi alterada para Compiègne, a aproximadamente 60 km do centro de Paris, sendo mantida a cidade da chegada.\n[…]\nFamosa pelo terreno difícil e seus trechos de paralelepípedos, ela faz parte da chamadas corridas clássicas do calendário europeu e distribui pontos para o ranking mundial da UCI. Ela é conhecida como Inferno do Norte, Um Domingo no Inferno, Rainha das Clássicas ou La Pascale. A prova acontece anualmente em meados de abril e é organizada pelo grupo de mídia Amaury Sport Organisation.\n[…]\nA Paris-Roubaix é uma das mais antigas corridas de ciclismo de estrada, com sua primeira edição acontecendo em 1896. Ela é conhecida por possuir vários trechos em que a estrada é pavimentada com paralelepípedos, sendo considerada uma das clássicas de paralelepípedo juntamente com a Ronde van Vlaanderen e Gent-Wevelgem.\n[…]\nO percurso é mantido pelo Les Amis de Paris-Roubaix, um grupo de fans da prova formado em 1983. Os forçats du pavé mantém os trechos de paralelepípedo o mais seguro possível para os ciclistas, ao mesmo tempo que mantém a sua dificuldade.\n[…]\n1989–2008: Velódromo de Roubaix\n[…]\nLes Amis de Paris-Roubaix - os \"amigos\" da prova - é um grupo de entusiastas fundado por Jean-Claude Vallaeys em 1983. Ele tem sua base na França, no entanto é aberto para membros de todo o mundo. Suas raízes remetem à Paris-Roubaix Cyclo-Touriste de 1972. Em 1982 já eram 7.242 participantes. Neste e em outros eventos que utilizam o percurso, uma petição para o salvamento dos paralelepípedos conseguiu coletar 10.000 assinaturas.\n[…]\n«Descrição dos setores de paralelepípedo da Paris-Roubaix na cyclingnews.com» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.34 — 2026-10-01**
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
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro.

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

> **Por enquanto, o gerador automático não cria perguntas com figura.** Elas só são escritas por quem tem a imagem em mãos e a examinou. Uma pergunta sem o campo `imagem` nunca se refere a uma foto ou figura.

- **A figura é a pergunta.** A resposta sai de **reconhecer o que a imagem mostra**: "Que cidade é esta?", "Que animal é este?", "Qual é este pokémon?", "Quem pintou este quadro?", "Em que museu fica este quadro?". Teste: se trocar "este animal" pelo nome dele deixasse a pergunta igualmente boa, a figura é só enfeite, e a pergunta está errada.
- **O enunciado é curto** e diz o que se deve reconhecer (cidade, animal, monumento). Pode trazer uma pista que ajude, desde que não entregue a resposta.
- **Âncora e ângulo:** a âncora é o que aparece na figura. Perguntar o que ela é dá o ângulo `identidade`; perguntar algo que só se sabe depois de reconhecê-la usa o ângulo correspondente (`autoria` para o pintor, `lugar` para o museu). As regras de variedade (§9), que limitam `identidade`, valem para os lotes do gerador e não para as perguntas com figura.
- **Tipos de figura:** lugares (cidades, monumentos, paisagens), animais, plantas, objetos e artesanato, festas populares, contornos de mapa, personagens de lendas e obras de arte em domínio público (pinturas, gravuras). Obras com direitos autorais, como as de Tarsila do Amaral, Portinari ou Dalí, ficam de fora.
- **Um único assunto por imagem:** nada de montagens nem pranchas com várias espécies. Vale foto; ilustração ou escultura só para o que não pode ser fotografado, como os personagens de lendas (Saci, Mula sem cabeça).
- **Pessoas:** figuras públicas, ou brincantes e participantes de festas públicas (Parintins, bumba meu boi, cavalhadas). Fotos de pessoas comuns em outros contextos continuam proibidas.
- **Recorte permitido:** uma placa ou legenda que entregue a resposta pode ser cortada da imagem, já que as licenças livres permitem obras derivadas.
- **Só imagens do Wikimedia Commons**, com licença livre (CC BY, CC BY-SA ou domínio público). Autor e licença são sempre registrados.
- **Exceção, Pokémon:** a arte oficial, com o crédito "© Nintendo / Creatures / GAME FREAK", e a Bulbapedia como fonte da âncora e da pergunta. A imagem vem do Bulbagarden Archives ou, como a Bulbapedia bloqueia acesso automatizado, da mesma arte oficial no repositório público do PokéAPI (`raw.githubusercontent.com/PokeAPI/sprites`), que fica registrado em `origem`. É uso privado, num jogo entre amigos, e não licença livre.
- **Proibido:** capas de álbuns, pôsteres, logotipos e fotos de imprensa.

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
- num lote de figuras de um tema, **pelo menos três famílias** e **pelo menos três catálogos**;
- nenhum catálogo passa de **40%** das perguntas com figura do seu tema;
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
