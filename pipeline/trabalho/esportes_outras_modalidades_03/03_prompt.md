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
      "nome": "Nado peito",
      "descricao": "Estilo da natação competitiva em que o nadador fica de bruços e move braços e pernas ao mesmo tempo, com pernada de sapo."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Dos quatro estilos da natação competitiva, qual é o mais lento?",
    "resposta": "Nado peito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Breaststroke"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Breaststroke",
        "situacao": "ok",
        "texto": "Breaststroke is a swimming style in which the swimmer is on their chest and the torso does not rotate. It is the most popular recreational style due to the swimmer's head being out of the water a large portion of the time, and that it can be swum comfortably at slow speeds. In most swimming classes, beginners learn either the breaststroke or the freestyle (front crawl) first.\n[…]\nIn the pre-Olympic era, competitive swimming in Europe started around 1800, mostly using breaststroke. A watershed event was a swimming competition in 1844 in London, notable for the participation of some Native Americans. While the British raced using breaststroke, the Native Americans swam a variant of the front crawl. The British continued to swim only breaststroke until 1873.\n[…]\nThe 1904 Summer Olympics in St. Louis, Missouri, were the first Olympics to feature a separate breaststroke competition, over a distance of 440 yards (402 m). These games differentiated breaststroke, backstroke, and freestyle.\n[…]\nHowever, even though this technique was much faster than regular breaststroke, the dolphin fishtail kick violated the rules. Butterfly arms with a breaststroke kick were used by a few swimmers in the 1936 Summer Olympics in Berlin for the breaststroke competitions. In 1938, almost every breaststroke swimmer was using this butterfly style, yet this stroke was considered a variant of the breaststroke until 1952, when it was accepted as a separate style with its own set of rules.\n[…]\nThere are eight common distances swum in competitive breaststroke swimming, four in yards and four in meters. Twenty-five-yard pools are common in the United States and are routinely used in age group, high school and college competitions during the winter months.\n[…]\n100 m Breaststroke\n[…]\n200 m Breaststroke\n[…]\nThese are the official FINA rules. They apply to swimmers during official swimming competitions."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bru%C3%A7os_%28nata%C3%A7%C3%A3o%29",
        "situacao": "ok",
        "texto": "Bruços ou de peito é o mais antigo dos estilos de natação. Nesse estilo, o nadador está em seu peito e o torso não gira. É o estilo de recreação mais popular devido à cabeça do nadador estar fora da água durante uma grande parte do tempo e que pode nadar confortavelmente em baixa velocidade. Na maioria das aulas de natação, os iniciantes aprendem primeiro o bruço ou o rastreamento da frente.\n[…]\nNo entanto, no nível competitivo, nadar nado peito em velocidade requer resistência e força comparáveis a outros estilos. Algumas pessoas referem-se ao peito como o \"sapo\", como os braços e as pernas se movem um pouco como um sapo nadando na água. O traço em si é o mais lento de todos os golpes competitivos e é considerado o mais antigo de todos os traços de natação.\n[…]\nJá no século XVI, havia uma maneira de nadar com os movimentos dos braços parecidos com o estilo atual. Naquele período, no entanto, os pés ainda eram batidos alternadamente (semelhante a um pontapé). Desse método é que originou o nado de peito. Em 1798, o nado de peito já era o estilo mais praticado em toda a Europa.\n[…]\nA saída do nado de peito é feita do bloco de partida. Em comparação com os nados crawl e borboleta, o mergulho da saída do nado peito é um pouco mais profundo, para que o nadador aplique a braçada e a pernada ainda durante o mergulho, o que é chamado de filipina e garante melhor desenvoltura do nado. O nadador deve observar com atenção o posicionamento dos joelhos. Eles não podem estar muito a frente na preparação da pernada.\n[…]\nNo início da primeira braçada após a saída e a cada volta, o nadador deve estar sobre o peito. Ocasionalmente, o nadador pode ter um braço ligeiramente mais alto que o outro, mas se os movimentos dos braços são simultâneos e no mesmo plano horizontal, o estilo está correto.\n[…]\nNatação desportiva\n[…]\nCostas (natação)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Lançamento de dardo",
      "descricao": "Prova do atletismo em que o atleta arremessa uma lança leve, o dardo, o mais longe possível."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Nas provas masculinas de arremesso e lançamento do atletismo, qual implemento é o mais leve?",
    "resposta": "Dardo",
    "distratores": [
      "Disco",
      "Peso",
      "Martelo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Javelin_throw",
      "https://en.wikipedia.org/wiki/Discus_throw"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Javelin_throw",
        "situacao": "ok",
        "texto": "The javelin throw is a track and field event where the javelin, a spear about 2.5 m (8 ft 2 in) in length, is thrown as far as possible. The javelin thrower gains momentum by running within a predetermined area. Javelin throwing is an event of both the men's decathlon and the women's heptathlon.\n[…]\nThe first known women's javelin marks were recorded in Finland in 1909. Originally, women threw the same implement as men; a lighter, shorter javelin for women was introduced in the 1920s. Women's javelin throw was added to the Olympic program in 1932; Mildred \"Babe\" Didrikson of the United States became the first champion.\n[…]\nInstead of being confined to a circle, javelin throwers have a runway 4 m (13 ft) wide and at least 30 m (98 ft) in length, ending in an 8 m (26 ft) radius throwing arc from which their throw is measured; athletes typically use this distance to gain momentum in a \"run-up\" to their throw. Like the other throwing events, the competitor may not leave the throwing area (the runway) until after the implement lands.\n[…]\nThe javelin is almost always thrown outdoors, though it is rarely thrown indoors. The world record for men's indoor javelin throw is 85.78 metres (281.4 ft) by Matti Närhi in 1996.\n[…]\nThe javelin throw consists of three separate phases: the run-up, the transition, and the delivery. During each phase, the position of the javelin changes while the thrower changes his or her muscle recruitment. In the run-up phase as author Luann Voza states, \"your arm is bent and kept close to your head, keeping the javelin in alignment with little to no arm movement\". This allows the thrower's bicep to contract, flexing the elbow.\n[…]\nList of javelin throw national champions (men)\n[…]\nList of javelin throwers\n[…]\nIAAF list of javelin-throw records in XML"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Discus_throw",
        "situacao": "ok",
        "texto": "The discus throw (), also known as disc throw, is a track and field event in which the participant athlete throws an oblate spheroid weight –  called a discus –  in an attempt to achieve a farther distance than other competitors. It is an ancient sport originated in ancient Greece, as demonstrated by the fifth-century-BC Myron statue Discobolus.\n[…]\nFocusing on rhythm can bring about the consistency to get in the right positions that many throwers lack. Executing a sound discus throw with solid technique requires perfect balance. This is due to the throw being a linear movement combined with a one and a half rotation and an implement at the end of one arm. Thus, a good discus thrower needs to maintain balance within the circle.\n[…]\nThe critical stage is the delivery of the discus. From the 'power position' the hips drive through hard, and will be facing the direction of the throw on delivery. Athletes employ various techniques to control the end-point and recover from the throw, such as fixing feet (to pretty much stop dead), or an active reverse spinning onto the left foot (e.g. Virgilijus Alekna).\n[…]\nThe discus throw has been the subject of a number of well-known ancient Greek statues and Roman copies such as the Discobolus and Discophoros. The discus throw also appears repeatedly in ancient Greek mythology, featured as a means of manslaughter in the cases of Hyacinth, Crocus, Phocus, and Acrisius, and as a named event in the funeral games of Patroclus.\n[…]\nJohn Powell also threw 72.08 in Klagshamn on 11 September 1987, but the throw was made onto a sloping/downhill sector.\n[…]\nList of discus throw national champions (men)\n[…]\nUnited States champions in women's discus throw\n[…]\nIAAF list of discus-throw records in XML"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lan%C3%A7amento_de_dardo",
        "situacao": "ok",
        "texto": "Lançamento de dardo (português brasileiro) ou lançamento do dardo (português europeu) é uma modalidade olímpica do atletismo. Uma das mais nobres modalidades por sua antiguidade, integra o heptatlo e o decatlo, além de ter a sua própria prova individual. Assim como o lançamento de martelo e lançamento de disco, este esporte é chamado oficialmente de lançamento.\n[…]\nO dardo é um objeto em forma de lança, feito de metal, fibra de vidro ou fibra de carbono. Seu tamanho, tipo, peso mínimo e centro de gravidade foram definidos pela IAAF – Federação Internacional de Atletismo e variam do homem para a mulher. O homem usa um dardo de 2,7 metros de comprimento, pesando 800 gramas. A mulher usa um dardo um pouco mais leve, 600 gramas, e tem 2,3 metros de comprimento. Os dois modelos tem uma empunhadura feita de corda localizada no centro de gravidade.\n[…]\nA marca obtida pelo atleta é medida pelos oficiais, desde o limite da zona de lançamento até ao primeiro ponto onde o dardo tocou no chão, obrigatoriamente dentro de uma setor pré-marcado no campo com um ângulo de 29°.\n[…]\nEm abril de 1986, o dardo masculino foi redesenhado pelo Comitê Técnico da IAAF. Isto se deveu ao fato de que, além de várias aterrissagens começarem a ser feitas ao comprido, sem a ponta furar o solo, diversos lançamentos estavam sendo feitos no limite da área destinada a isto no campo de atletismo, colocando em perigo potencial as pessoas envolvidas e espectadores.\n[…]\nMesmo assim reconfigurado, o dardo voltou a ser lançado a distâncias proibitivas e em 2007 um atleta do salto em distância foi atingido na barriga por um dardo lançado do outro lado do campo, durante uma etapa da Golden League em Roma; com o atual recorde mundial masculino já novamente próximo dos 100 metros, nova mudança deve ser feita no implemento nos próximos anos.\n[…]\n«Federação Portuguesa de Atletismo»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Open Britânico",
      "descricao": "The Open Championship, torneio de golfe disputado no Reino Unido desde 1860, um dos quatro principais do golfe masculino."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Qual é o mais antigo dos quatro torneios principais do golfe masculino?",
    "resposta": "Open Britânico",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Open_Championship"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Open_Championship",
        "situacao": "ok",
        "texto": "The Open Championship, often referred to as The Open or the British Open outside of the UK, is the oldest golf tournament in the world, and one of the most prestigious. Founded in 1860, it was originally held annually at Prestwick Golf Club in Scotland. Later the venue rotated among a select group of coastal links golf courses in the United Kingdom. It is organised by The R&A.\n[…]\nIn 1921 eleven U.S.-based players travelled to Scotland financed by a popular subscription called the \"British Open Championship Fund\", after a campaign by the American magazine Golf Illustrated. Five of these players were British born, and had emigrated to America to take advantage of the high demand for club professionals as the popularity of golf grew. A match was played between the Americans and a team of British professionals, which is seen as a forerunner of the Ryder Cup.\n[…]\nOpen, and later many others. To distinguish it from their own national open, it became common in many countries to refer to the tournament as the \"British Open\". The R&A (the tournament's organiser) continued to refer to it as The Open Championship. During the interwar years, a period with many U.S.-based winners, the term British Open would occasionally be used during the trophy presentation and in British newspapers.\n[…]\nTournament partners, such as the PGA Tour, now refer to it without \"British\" in the title, media rightsholders are contractually required to refer to the event as The Open Championship, and the official website has released a statement titled \"Why it's called 'The Open' and not the 'British Open'\" stating that \"The Open is the correct name for the Championship. It is also the most appropriate\". The R&A's stance has attracted criticism from some commentators.\n[…]\nThe top 10 players, including ties, get entry to the next edition of The Open Championship.\n[…]\nOpen golf tournament"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aberto_Brit%C3%A2nico_de_Golfe",
        "situacao": "ok",
        "texto": "Aberto Britânico de Golfe (conhecido internacionalmente como The Open Championship e já chamado de British Open) é o mais antigo dos 4 principais torneios de golfe do mundo denominados de major. Acontece todos os anos em grandes clubes do Reino Unido e faz parte do circuito PGA Tour.\n[…]\nO Open é um dos quatro principais torneios de golfe masculinos, sendo os outros o Masters de Golfe, o PGA Championship e o US Open. Desde que o PGA Championship mudou para maio de 2019, o Open tem sido cronologicamente o quarto torneio importante do ano. O torneio acontece tradicionalmente durante quatro dias no verão, começando na véspera da terceira sexta-feira de julho.\n[…]\nDevido a um número crescente de participantes, um corte foi introduzido após duas rodadas em 1898. Em 1920, a responsabilidade total pelo The Open Championship foi entregue ao The Royal & Ancient Golf Club.\n[…]\nEnquanto estava longe de ser o primeiro americano a se tornar campeão aberto, foi o primeiro que muitos americanos viram ganhar o torneio na televisão, e seu sucesso carismático é frequentemente creditado como persuasivo aos principais golfistas americanos a fazerem do Open uma parte integral de sua programação ao invés de um torneio extra opcional. A melhoria das viagens transatlânticas também contribuiu para o aumento da participação americana.\n[…]\nEm 2009, Tom Watson, de 59 anos, fez uma das performances mais notáveis já vistas no The Open. Liderando o torneio com 71 buracos e precisando apenas de um par no último buraco para se tornar o mais velho vencedor de um grande campeonato, Watson desperdiçou a chance e precisou de um playoff de quatro buracos, que ele perderia para Stewart Cink. Em 2013, Phil Mickelson venceu seu primeiro campeonato aberto em Muirfield.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "110 metros com barreiras",
      "descricao": "Prova masculina de velocidade do atletismo com dez barreiras ao longo de cento e dez metros."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Em qual destas provas do atletismo os atletas saltam as barreiras mais altas?",
    "resposta": "110 metros com barreiras",
    "distratores": [
      "400 metros com barreiras",
      "100 metros com barreiras",
      "3000 metros com obstáculos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/110_metres_hurdles",
      "https://en.wikipedia.org/wiki/Hurdling"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/110_metres_hurdles",
        "situacao": "ok",
        "texto": "The 110 metres hurdles, or 110-metre hurdles, is a hurdling track and field event for men. It is included in the athletics programme at the Summer Olympic Games. The female counterpart is the 100 metres hurdles. As part of a racing event, ten hurdles of 106.7 centimetres (42 in) in height are evenly spaced along a straight course of 110 metres. They are positioned so that they will fall over if bu\n[…]\nFor the 110 m hurdles, the first hurdle is placed after a run-up of 13.72 metres (45 ft) from the starting line. The next nine hurdles are set at a distance of 9.14 metres (30 ft) from each other, and the home stretch from the last hurdle to the finish line is 14.02 metres (46 ft) long.\n[…]\nThe sprint hurdles are a very rhythmic race because both men and women take 3 steps (meaning 4 foot strikes) between each hurdle, no matter whether running 110/100 metres outdoors, or the shorter distances indoors (55 or 60 metres). In addition, the distance from the starting line to the first hurdle – while shorter for women – is constant for both sexes whether indoors or outdoors, so sprint hurdlers do not need to change their stride pattern between indoor and outdoor seasons.\n[…]\nIn American high school track and field and at many international Under-20 athletics competitions, the 110 metres hurdles are mostly the same as their professional counterparts. The main difference between the junior-level hurdles and professional hurdles is the height. Junior-level hurdles are 99.1 centimetres (39 in) tall while professional-level hurdles are 106.7 centimetres (42 in) tall.\n[…]\nThe world record in the 110m hurdles at the 99-cm height is 12.72 by Sasha Zhoya, achieved at the 2021 World Athletics U20 Championships – Men's 110 metres hurdles in Nairobi, Kenya on 21 August 2021. This time was matched by Le'Ezra Brown at the 2026 World Athletics U20 Championships.\n[…]\nIAAF list of 110-metres-hurdles records in XML"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hurdling",
        "situacao": "ok",
        "texto": "Hurdling is the act of jumping over an obstacle at a high speed or in a sprint. In the early 19th century, hurdlers ran at and jumped over each hurdle (sometimes known as 'burgles'), landing on both feet and checking their forward motion. Today, the dominant step patterns are the 3-step for high hurdles, 7-step for low hurdles, and 15-step for intermediate hurdles. Hurdling is a highly specialized\n[…]\nSome coaches suggest if you lightly \"kiss\" the hurdle with the side of the leg closest to the hurdle, it can help with the runner's speed by keeping the runner closer to the ground.\n[…]\nThe shuttle hurdle relay has a maximum of only 4 teams, since most tracks only have 8 lanes. Two lanes will be taken up by one team. The #1 and #3 runners on the team will run in one direction down one specific lane and the #2 and #4 runners will run in the opposite direction in the other lane. The runners on each team go in sequence from 1 to 4.\n[…]\nIn the United States, the men's team of Aries Merritt, Jason Richardson, Aleec Harris, and David Oliver, set the world record in the 440m shuttle hurdle relay race at a time of 52.94 seconds (set on April 25, 2015). On the women's side, Brianna Rollins, Dawn Harper-Nelson, Queen Harrison, Kristi Castlin, together ran a 400m shuttle hurdle race at a world record time of 50.50 seconds on August 24, 2015.\n[…]\nShuttle hurdle relay was introduced at the 2019 IAAF World Relays; it consists of a race in which two men and two women on each team are running a 110m hurdles leg.\n[…]\nList of hurdlers\n[…]\nWomen's 100 metres hurdles world record progression\n[…]\nWomen's 400 metres hurdles world record progression\n[…]\nMen's 110 metres hurdles world record progression\n[…]\nMen's 400 metres hurdles world record progression\n[…]\nTrackinfo explanation of hurdles\n[…]\nIAAF list of hurdles-records in XML\n[…]\n00. The Hurdler's Bible 2 by Wilbur L. Ross and Norma Hernandez de Ross, PH.D. Copyrighted 1966, 1978, and 1997."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/110_metros_com_barreiras",
        "situacao": "ok",
        "texto": "110 metros com barreiras é uma prova olímpica de atletismo disputada apenas por homens. Seu equivalente feminino são os 100 metros com barreiras. Disputada como competição individual, também integra o decatlo como uma de suas modalidades.\n[…]\nA prova é disputada numa reta onde raias de corrida estão demarcadas. A largada é feita a partir de blocos de partida no chão da pista, como as demais provas de velocidade do programa olímpico. Nos seus 110 metros de extensão são dispostas 10 barreiras; a primeira surge 13,72 m depois da linha de partida, as seguintes têm 9,14 metros de intervalo entre si e depois da última barreira há um percurso livre de 14,02 m até à linha da meta.\n[…]\nA história dos 100 m com barreiras remonta à Inglaterra dos anos 1830, quando corridas na distância de 100 jardas eram disputadas sobre barreiras de madeira. Os alunos de Oxford e Cambridge desenvolveram o evento, alongando a distância para 120 jardas (109.7m). Em 1888, a distância foi novamente alongada usando o sistema métrico, para 110 metros, pelos franceses e assim se estabeleceu.\n[…]\nMesmo com a introdução posterior de barreiras mais leves, o atleta que tocasse em três barreiras durante a corrida era desclassificado, regra que só mudou a partir de 1935, com a introdução das barreiras em \"L\", que caem para frente ao toque. \"Caminhar\" sobre as barreiras se tornou então a técnica mais comum e com o advento conjunto das pistas de atletismo sintéticas a partir dos anos 60, os recordes começaram a cair.\n[…]\n(*) - Tempo reconhecido pela Federação de Atletismo de Cabo Verde. A IAAF reconhece 13.78 de Henry Andrade em Modesto, 1996.\n[…]\n«CBAt - Confederação Brasileira de Atletismo»\n[…]\n«Federação Portuguesa de Atletismo»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Badminton",
      "descricao": "Esporte de raquete em que os jogadores rebatem um volante de penas por cima de uma rede alta."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estes esportes de raquete, em qual o objeto rebatido atinge as maiores velocidades?",
    "resposta": "Badminton",
    "distratores": [
      "Tênis",
      "Squash",
      "Tênis de mesa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Badminton",
      "https://en.wikipedia.org/wiki/Shuttlecock"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Badminton",
        "situacao": "ok",
        "texto": "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are \"singles\" (with one player per side) and \"doubles\" (with two players per side). Badminton is often played as a casual outdoor activity in a yard or on a beach; professional games are played on a rectangular indoor court.\n[…]\nWhile fans of badminton and tennis often claim that their sport is the more physically demanding, such comparisons are difficult to make objectively because of the differing demands of the games. No formal study currently exists evaluating the physical condition of the players or demands during gameplay.\n[…]\nFor strokes that require more power, a longer swing will typically be used, but the badminton racquet swing will rarely be as long as a typical tennis swing.\n[…]\nBall badminton\n[…]\nAdams, Bernard (1980), The Badminton Story, BBC Books, ISBN 0563164654\n[…]\nBoga, Steve (2008), Badminton, Paw Prints, ISBN 978-1439504789\n[…]\nChisholm, Hugh, ed. (1911), \"Badminton (game)\" , Encyclopædia Britannica, vol. 3 (11th ed.), Cambridge University Press, p. 189\n[…]\nDowney, Jake (1982), Better Badminton for All, Pelham Books, ISBN 978-0-7207-1438-8.\n[…]\nGrice, Tony (2008), Badminton: Steps to Success, Human Kinetics, ISBN 978-0-7360-7229-8\n[…]\nGuillain, Jean-Yves (2004), Badminton: An Illustrated History, Publibook, ISBN 2-7483-0572-8\n[…]\nJones, Henry (1878), \"Badminton\" , in Baynes, T. S. (ed.), Encyclopædia Britannica, vol. 3 (9th ed.), New York: Charles Scribner's Sons, p. 228\n[…]\nKim, Wangdo (2002), An Analysis of the Biomechanics of Arm Movement During a Badminton Smash (PDF), Nanyang Technological University, archived from the original (PDF) on 2 October 2008.\n[…]\nBadminton World Federation\n[…]\nLaws of Badminton\n[…]\nBadminton Asia Confederation\n[…]\nBadminton Pan Am\n[…]\nBadminton Oceania\n[…]\nBadminton Europe\n[…]\nBadminton Confederation of Africa (archived)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Shuttlecock",
        "situacao": "ok",
        "texto": "A shuttlecock (also called a birdie or shuttle, or ball) is a high-drag projectile, designed to decelerate very quickly, used in multiple sports, most notably badminton. It has an open conical shape formed by feathers or a synthetic material, such as plastic, embedded into a rounded cork (or rubber) base. The shuttlecock's shape makes it extremely aerodynamically stable. Regardless of initial orie\n[…]\nTo ensure satisfactory flight properties, it is considered preferable to use feathers from right or left wings only in each shuttlecock, and not mix feathers from different wings, as the feathers from different wings are shaped differently. Badminton companies make shuttlecock corks by sandwiching polyurethane between corks and/or using a whole piece of natural cork. With the first method, the cork becomes misshapen after use, while the cork in the latter method changes very little after use.\n[…]\nWorld Badminton Federation Rules say the shuttle should reach the far doubles service line plus or minus half the width of the tram. According to manufacturers proper shuttles will generally travel from the back line of the court to just short of the long doubles service line on the opposite side of the net, with a full underhand hit from an average player.\n[…]\nAir Badminton\n[…]\nBadminton\n[…]\nBattledore and shuttlecock – an ancient game similar to that of modern badminton"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Badm%C3%ADnton",
        "situacao": "ok",
        "texto": "Badmínton (do inglês, badminton) é um desporto individual ou de pares, semelhante ao ténis e ao volei de praia, praticado com raquete e um volante ou pena que deve passar por cima de uma rede. O plural de badmínton é badmíntones e o jogador de badmínton se chama badmintonista.\n[…]\nLogo no início, o jogo também era conhecido como Poona ou Poonah após a cidade guarnição de Pune, onde era particularmente popular e onde as primeiras regras para o jogo foram elaborados em 1873. Em 1875, os agentes regressaram e fundaram um clube de badmínton em Folkstone. Inicialmente, o esporte foi jogado com 1-4 jogadores de cada lado do campo, mas foi rapidamente estabelecido que os jogos entre dois ou quatro concorrentes funcionavam melhor.\n[…]\nO esporte foi jogado sob as regras Pune até 1887, quando o JHE Hart do Bath Badminton Clube elaborou regulamentos revisados. Em 1890, Hart e Bagnel Wild novamente revisaram as regras. A Associação de Badmínton da Inglaterra publicou estes regras em 1893 e foi lançado oficialmente o esporte em uma casa chamada \"Dunbar\".\n[…]\nO badmínton é um jogo de raqueta, que pode ser praticado em singulares ou em pares, sendo disputado num campo por dois ou quatro jogadores, respectivamente. O campo é dividido em duas áreas iguais por uma rede e os jogadores utilizam raqueta para bater o volante entre as duas partes, por cima da rede.\n[…]\nO campo de jogo de badmínton deve ter de comprimento 13,40 metros e deve ter de largura 5,18 metros (jogos singulares) e 6,10 metros (jogos de pares).\n[…]\nUma raquete de badmínton é um equipamento desportivo básico para a prática do badmínton. As raquetes de badmínton são leves e menores que as raquetes de ténis.\n[…]\nBadmínton nos Jogos Olímpicos\n[…]\nCampeonato Mundial de Badmínton\n[…]\nLeis do badmínton\n[…]\nBadmínton na Infopédia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Try (rúgbi)",
      "descricao": "Jogada do rúgbi em que o jogador apoia a bola no chão dentro da área de meta adversária."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "No rúgbi de quinze jogadores, os chutes valem dois ou três pontos. Qual jogada vale mais, cinco pontos?",
    "resposta": "Try",
    "fonte": [
      "https://en.wikipedia.org/wiki/Try_(rugby)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Try_(rugby)",
        "situacao": "ok",
        "texto": "A try is a way of scoring points in rugby union and rugby league football. A try is scored by grounding the ball in the opposition's in-goal area (on or behind the goal line). Rugby union and league differ slightly in defining \"grounding the ball\" and the \"in-goal\" area. In rugby union a try is worth 5 points, and in rugby league a try is worth 4 points."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Try_%28rugby%29",
        "situacao": "ok",
        "texto": "Try ou ensaio é uma forma de marcar pontos no rugby, o try é marcado quando o jogador encosta a bola no chão na área do in-goal adversário, se a bola cair ou não for encostada não vale pontos. Sempre após o try a equipe tem direito a uma conversão. No rugby union e no rugby sevens o try vale 5 pontos, no rugby league vale 4 pontos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Dardos",
      "descricao": "Jogo de salão em que os jogadores arremessam pequenos dardos contra um alvo circular dividido em vinte setores."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "No jogo de dardos, qual região do alvo vale mais pontos com um único dardo?",
    "resposta": "Triplo vinte",
    "distratores": [
      "O centro do alvo",
      "Duplo vinte",
      "Triplo dezenove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Darts"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Darts",
        "situacao": "ok",
        "texto": "Darts is a competitive sport in which two or more players bare-handedly throw small sharp-pointed projectiles known as darts at a round target known as a dartboard.\n[…]\nConsumer Product Safety Commission introduced an outright ban on metal-tipped lawn darts in the US after publicity of thousands of injuries and several deaths.\n[…]\nFor soft-tip darts, WSDA and DARTSLIVE run \"THE WORLD\", an international tour which serves as the Soft Darts World Championship, with the final tournament referred to as the Grand Final, with the circuit first taking place in 2011. Stages take place mostly in East Asia, with some rounds held in the United States and Europe.\n[…]\nTwo Dutch independently organised major tournaments, the International Darts League and the World Darts Trophy introduced a mix of BDO and PDC players in 2006 and 2007. Both organisations allocated rankings to the tournaments, but these two events are now discontinued.\n[…]\nDarts world rankings—current ranking lists for BDO and PDC\n[…]\nDarts tournaments—previous winners, history and information\n[…]\nDarts players profiles\n[…]\nNine dart finish—the \"perfect\" game in darts\n[…]\nHigh dart average—average score achieved with all three darts thrown\n[…]\nGlossary of darts\n[…]\nBullseye—a British game show based on darts\n[…]\nChaplin, Patrick (2010), Darts in England, 1900–39: A Social History, Manchester: Manchester University Press, distributed by Palgrave Macmillan, ISBN 978-0-7190-7803-3. Scholarly history showing how darts figured in publicans' efforts to improve their establishments, and how the sport moved from a working-class pursuit to gain middle- and upper-class players.\n[…]\nProfessional Darts Corporation\n[…]\nWorld Darts Federation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dardos",
        "situacao": "ok",
        "texto": "Dardos é um esporte que consiste no arremesso de dardos contra um alvo circular apoiado numa superfície vertical. O jogo de dardos é popular ao redor do mundo, e passou a ser praticado também profissionalmente. Pontos são somados ao atingir áreas específicas do alvo (ou board) e os objetivos variam dependendo da modalidade praticada. Apesar de ser muito praticado ao redor do mundo em grandes event\n[…]\nArtigo principal: Golfe do dardo\n[…]\nTambém cohecido como \"Killer\", é um jogo de nocaute para dois ou mais jogadores (na melhor das hipóteses, para 4-6 jogadores). Inicialmente, cada jogador lança um dardo no alvo com a mão não dominante para obter seu 'número'. Dois jogadores não podem ter o mesmo número. Uma vez que todos tenham um número, cada jogador deve acertar o seu número cinco vezes com seus três dardos (duplos contam duas vezes e triplos três vezes). Quando uma pessoa acerta 5 vezes, ela se torna um 'assassino'.\n[…]\nOutra versão do \"Killer\" é um jogo nocaute para três ou mais jogadores (quanto mais, melhor). Para começar, todo mundo tem um número predeterminado de vidas (geralmente 5) e um jogador escolhido aleatoriamente lança um único dardo no alvo para definir um número (por exemplo, um simples 18) e não joga até que esse número seja atingido. O jogador seguinte tem 3 dardos para tentar acertar o número (simples 18); se eles falharem, perdem uma vida e o jogador seguinte tenta.\n[…]\nXangai é jogado com pelo menos dois jogadores. A versão padrão é jogada em sete rodadas. Na primeira rodada, os jogadores jogam seus dardos visando a fatia do 1, a 2ª rodada, a fatia do 2 e assim sucessivamente até a 7ª rodada. Pontuação padrão é utilizada, ou seja, duplos e triplos contam com os  seus respectivos valores. O vencedor é a pessoa que tem mais pontos no final de sete rodadas de (1 a 7); ou quem marca um Xangai, que vence ganha instantaneamente.\n[…]\nVeja também: Lista de jogadores de dardos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Axel",
      "descricao": "Salto da patinação artística batizado em homenagem ao norueguês Axel Paulsen."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Dos saltos da patinação artística, qual é o único em que o patinador decola indo para a frente?",
    "resposta": "Axel",
    "fonte": [
      "https://en.wikipedia.org/wiki/Axel_jump"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Axel_jump",
        "situacao": "ok",
        "texto": "The Axel jump or Axel Paulsen jump, named after its inventor, Norwegian figure skater Axel Paulsen, is an edge jump performed in figure skating. It is the sport's oldest and most difficult jump, and the only basic jump in competition with a forward take-off, which makes it the easiest to identify. A double or triple Axel is required in both the short program and the free skating segment for junior\n[…]\nCompared with other basic figure skating jumps, the Axel requires an extra half revolution, which makes a triple Axel \"more a quadruple jump than a triple\".\n[…]\nThe Axel jump, also called the Axel Paulsen jump for its creator the Norwegian figure skater Axel Paulsen, is an edge jump in the sport of figure skating. According to figure skating historian James Hines, the Axel is \"figure skating's most difficult jump\". It is the only basic jump in competition that takes off forward, which makes it the easiest jump to identify. Skaters commonly perform a double or triple Axel, followed by a jump of lower difficulty in combination.\n[…]\nIt is the most studied jump in figure skating.\n[…]\nPaulsen was the first skater to accomplish an Axel, at the first international figure skating competition, which was held in Vienna in 1882, while wearing speed skates. Hines, who called Paulsen \"progressive\" for inventing it, stated that he did it \"as a special figure\". By the mid-1920s, the Axel was the only jump that was not being doubled.\n[…]\nAccording to Mexican skater Donovan Carrillo, accomplishing the quad Axel is \"an incredible feat\" because a skater must start the jump from one foot, complete four-and-a-half rotations in less than one second, and then land on the opposite foot.\n[…]\nMazurkiewicz, Anna; Iwańska, Dagmara; Urbanik, Czesław (27 July 2018). \"Biomechanics of the Axel Paulsen Figure Skating Jump\". Polish Journal of Sport and Tourism. 25 (2). Warsaw: 3–9. doi:10.2478/pjst-2018-0007."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Salto_Axel",
        "situacao": "ok",
        "texto": "O Axel é um salto da patinação artística em que o atleta salta de frente. Recebeu seu nome em homenagem ao patinador norueguês Axel Paulsen, que, em 1882, foi o primeiro a realizar o salto. Comparado com os outros tipos normais de salto, o Axel tem uma meia rotação extra no ar devido à sua decolagem de frente. A maioria dos patinadores realiza este salto com rotação no sentido anti-horário, saltan\n[…]\nO Axel também pode ser realizado como um salto duplo, com duas rotações e meia, como um salto triplo, com três rotações e meia, ou como um salto quádruplo, com quatro rotações e meia.\n[…]\nO Axel é considerado o salto com maior dificuldade técnica entre os seis tipos de saltos da patinação artística no gelo. No ISU Judging System, atual sistema de pontuação em competições oficiais, o Axel triplo tem um valor base de 8.5 pontos, enquanto o Axel duplo tem um valor base de 3.3 pontos. Isso faz o Axel triplo o salto triplo de valor base mais alto, maior que outros como o Lutz (6), flip (5.3),  loop (5.1), Salchow (4.2), e toe loop (4.1).\n[…]\nNancy Kerrigan, Artistry on Ice. ISBN 0-7360-3697-0.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Puro-sangue inglês",
      "descricao": "Raça de cavalo desenvolvida na Inglaterra, famosa pela velocidade e usada nas corridas de galope."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual raça de cavalo é a mais usada nas corridas de galope dos hipódromos?",
    "resposta": "Puro-sangue inglês",
    "distratores": [
      "Árabe",
      "Lusitano",
      "Mangalarga Marchador"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Thoroughbred"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thoroughbred",
        "situacao": "ok",
        "texto": "The Thoroughbred is a horse breed developed for horse racing. Although the word thoroughbred is sometimes used to refer to any breed of purebred horse, it technically refers only to the Thoroughbred breed. Thoroughbreds are considered \"hot-blooded\" horses that are known for their agility, speed, and spirit.\n[…]\nA high accident rate may also occur because Thoroughbreds, particularly in the United States, are first raced as 2-year-olds, well before they are completely mature. Though they may appear full-grown and are in superb muscular condition, their bones are not fully formed. However, catastrophic injury rates are higher in 4- and 5-year-olds than in 2- and 3-year-olds.\n[…]\nThe level of treatment given to injured Thoroughbreds is often more intensive than for horses of lesser financial value but also controversial, due in part to the significant challenges in treating broken bones and other major leg injuries. Leg injuries that are not immediately fatal still may be life-threatening because a horse's weight must be distributed evenly on all four legs to prevent circulatory problems, laminitis, and other infections.\n[…]\nWhenever a racing accident severely injures a well-known horse, such as the major leg fractures that led to the euthanization of 2006 Kentucky Derby winner Barbaro, or 2008 Kentucky Derby runner-up Eight Belles, the animal rights group People for the Ethical Treatment of Animals have denounced the Thoroughbred racing industry. Conversely, advocates of racing argue that without horse racing, far less funding and incentives would be available for medical and biomechanical research on horses.\n[…]\nThoroughbred breeding theories\n[…]\nThoroughbred racing in Australia\n[…]\nThoroughbred racing in New Zealand\n[…]\nThoroughbred Bloodlines"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Puro-sangue_ingl%C3%AAs",
        "situacao": "ok",
        "texto": "O puro-sangue inglês (PSI, em inglês:  thoroughbred) é uma raça de cavalos originária da Inglaterra. Sua principal utilização, devido à sua grande velocidade e estâmina, é em competições esportivas como o turfe (corridas) e o hipismo.\n[…]\nO puro-sangue inglês foi desenvolvido durante os séculos XVII e XVIII na Inglaterra, pelo cruzamento de éguas locais com garanhões árabes e berberes, muitas vezes trazidos das campanhas militares na Ásia. A necessidade da melhora do desempenho em pistas dos animais existentes nas ilhas britânicas derivou do gosto popular crescente pelas competições, originalmente restritas às propriedades rurais para distração dos landlords (senhores de terras).\n[…]\nHá três origens dos cavalos orientais que contribuíram na formação da raça:\n[…]\no cavalo árabe ou turco (Equus caballus aryanus).\n[…]\na sub-raça Nedjed do centro do deserto do Saara.\n[…]\nMais tarde, pelo estudo do General Stud Book, o número de famílias inglesas foi expandido por outros autores. E criaram-se as famílias norteamericana, australiana-neozelandeza (chamada colonial), argentina, polonesa. Também surgiram as famílias half-bred, com éguas base de meio sangue, e de outras origens. Com o passar do tempo, as famílias inglesas tornaram-se muito grandes e foram subdivididas tomando por base éguas mais recentes com letras minúsculas (1a, 1b, 2a, etc.).\n[…]\nO primeiro puro-sangue nascido no Brasil (em 1874) que tornou-se reprodutor registrado no antigo stud book nacional tinha o nome do país: Brasil.\n[…]\nLOUREIRO NETTO, Jayme. Tábua Genealógica de Cavalos de Corrida - Linhas Paternas 1680/1974. Associação Brasileira dos Criadores de Cavalos de Corrida (ABCCC), Rio de Janeiro, 1978.\n[…]\n«The Jockey Club (UK)» (em inglês). Principal associação que registra a raça",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Driver (golfe)",
      "descricao": "Taco de golfe de cabeça grande, o chamado madeira um, usado nas tacadas de saída."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na bolsa de um golfista, qual taco é feito para as tacadas mais longas, geralmente na saída do buraco?",
    "resposta": "Driver",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wood_(golf)",
      "https://en.wikipedia.org/wiki/Golf_club"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wood_(golf)",
        "situacao": "ok",
        "texto": "A wood is a type of club used in the sport of golf. Woods have longer shafts and larger, rounder heads than other club types, and are used to hit the ball longer distances than other types.\n[…]\nWoods are numbered in ascending order starting with the driver, or 1-wood, which has the lowest loft (usually between 9 and 13 degrees), and continuing with progressively higher lofts and numbers. Most modern woods are sold as individual clubs allowing the player to customize their club set, but matched sets of woods, especially as part of a complete club set, are readily available. Odd-numbered lofts are most common in players' bags, though 2- and 4-woods are available in many model lines.\n[…]\nThe 1-wood, or driver, is the lowest-lofted, longest, and often lightest club in a player's bag, and is meant to launch the ball the longest distance of any club.\n[…]\nBy the mid-2000s, titanium heads could be made to 1000 cc (Golfsmith Inc made 1,000 cc (61.0 cu in) in the mid-2000s). Around this time the USGA decided to limit the size of driver heads to 460 cc (28.1 cu in) since the rule requiring heads to be of a traditional shape was being unduly stretched.\n[…]\nToday, many metal wood clubfaces (and most driver clubfaces) are constructed out of titanium. Titanium has a higher strength to weight ratio than steel and has better corrosion resistance, so it is an ideal metal for golf club construction. Manufacturers can also make clubheads with greater volume, which increases the hitting area, and thinner faces, which reduces the weight."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Golf_club",
        "situacao": "ok",
        "texto": "A golf club is a club used to hit a golf ball in a game of golf. Each club is composed of a shaft with a grip and a club head. Woods are mainly used for long-distance fairway or tee shots; irons, the most versatile class, are used for a variety of shots; hybrids that combine design elements of woods and irons are becoming increasingly popular; putters are used mainly on the green to roll the ball \n[…]\nWidely overlooked as a part of the club, the shaft is considered by many to be the engine of the modern club head. Shafts range in price from a mere US$4 to over US$1200. Current graphite shafts weigh considerably less than their steel counterparts (sometimes weighing less than 50 grams (1.8 oz) for a driver shaft), allowing for lighter clubs that can be swung at greater speed. Beginning in the late 1990s, custom shafts have been integrated into the club-making process.\n[…]\nA driver, usually numbered a 1-wood regardless of actual loft, which varies from 8° up to 13°\n[…]\nAnother fairway wood, often a 5-wood lofted around 18°, to allow other options besides long irons in the 180–250 yard range,\n[…]\nSome consider the modern deep-faced driver to be equally irreplaceable; this is cause for some debate, as professional players including Tiger Woods have played and won tournaments without using a driver, instead using a 3-wood for tee shots and making up the difference on the approach using a lower-lofted iron.\n[…]\nOther clubs may be omitted as well. On courses where bags must be carried by the player, the player may take only the odd-numbered irons; without the 4, 6 or 8 irons (the 3 is sometimes removed instead of the 4) the bag's weight is considerably reduced. Carrying only a driver, 3-wood, 4-hybrid, 5–7–9 irons, pitching and sand wedges, and a putter reduces the number of clubs in the bag to 9; this is a common load-out for a \"Sunday bag\" taken to the driving range or to an informal game."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Heptatlo",
      "descricao": "Prova combinada do atletismo feminino, com sete provas disputadas em dois dias."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Além do salto em altura, qual outro salto faz parte das sete provas do heptatlo?",
    "resposta": "Salto em distância",
    "fonte": [
      "https://en.wikipedia.org/wiki/Heptathlon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Heptathlon",
        "situacao": "ok",
        "texto": "A heptathlon is a track and field combined events contest made up of seven events. The name derives from the Greek ἑπτά (hepta, meaning \"seven\") and ἄθλος (áthlos, or ἄθλον, áthlon, meaning \"competition\"). A competitor in a heptathlon is referred to as a heptathlete.\n[…]\nThere is also a Tetradecathlon, which is a double heptathlon, consisting of 14 events, seven events per day.\n[…]\nP is points, T is time in seconds, M is height or distance in centimeters and D is distance in meters. INT is the integer function, also known as the floor function, signifying that the result is rounded down to the nearest lower (or equal) whole number. a, b and c have different values for each of the events, as follows:\n[…]\nThe other heptathlon discipline is an indoor competition, normally contested by men only. It is the men's combined event in the IAAF World Indoor Championships in Athletics. The indoor heptathlon consists of the following events, with the first four contested on the first day, and remaining three on day two:\n[…]\nThe indoor heptathlon is also rarely contested by women; at the 2024 indoor X-Athletics meeting, French combined events athlete Noémi Desailly won the indoor women's heptathlon with 5761 points while Jordyn Bruce set an unofficial American record in 2nd. It was labeled the first indoor women's heptathlon.\n[…]\n(In completed heptathlons of more than 5200 points)\n[…]\nMen's heptathlon world record progression\n[…]\nWomen's heptathlon world record progression\n[…]\nIAAF list of heptathlon records in XML\n[…]\nHeptathlon all-time list\n[…]\nHeptathlon points counter (in Finnish)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Heptatlo",
        "situacao": "ok",
        "texto": "Heptatlo, do grego hepta (sete) e athlon (competição), é uma competição de atletismo com sete provas, tendo duas versões, uma feminina e outra masculina, esta apenas em pista coberta. A versão mais popular e a única disputada em Jogos Olímpicos e Campeonatos Mundiais ao ar livre é a feminina. Seu equivalente olímpico para os homens é o decatlo.\n[…]\nÉ a única modalidade olímpica disputada em estádios abertos. Consiste em dois dias de competições. No primeiro dia disputa-se, pela ordem, os 100 m com barreiras, salto em altura, arremesso de peso e 200 m rasos. No segundo ele é completado com o salto em distância, lançamento de dardo e os 800 m. A cada prova a atleta acumula um número determinado de pontos de acordo com seu aproveitamento e a vencedora é a que atinge o maior número de pontos somadas as sete modalidades ao final.\n[…]\nSaltos – altura e distância:\n[…]\nP é para pontos, T para tempo em segundos, M para altura ou distância em centímetros e D para distância em metros; a, b e c tem diferentes valores para cada um dos eventos. A tabela abaixo mostra os níveis de referência necessários para ganhar 1.000 pontos em cada prova do heptatlo feminino:\n[…]\nO heptatlo masculino é uma prova não-olímpica e realizado em pista coberta, sendo a prova combinada disputada no Campeonato Mundial de Atletismo em Pista Coberta. As primeiras quatro provas são realizadas no primeiro dia, pela ordem, 60 metros, salto em distância, arremesso de peso e salto em altura e as outras três no dia seguinte, 60 metros com barreiras, salto com vara e 1000 metros.\n[…]\nRefere-se apenas ao heptatlo feminino, a prova olímpica. As marcas abaixo são de acordo com a World Athletics.\n[…]\nRefere-se apenas ao heptatlo feminino, a prova olímpica. As marcas abaixo são de acordo com o Comitê Olímpico Internacional – COI.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Skate",
      "descricao": "Esporte praticado sobre uma prancha com quatro rodinhas, surgido na Califórnia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No skate, como se chamam as peças de metal, presas embaixo da prancha, onde ficam os eixos das rodinhas?",
    "resposta": "Trucks",
    "fonte": [
      "https://en.wikipedia.org/wiki/Skateboard"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Skateboard",
        "situacao": "ok",
        "texto": "A skateboard is a type of sports equipment used for skateboarding. It is usually made of a specially designed 7–8-ply maple plywood deck and has polyurethane wheels attached to the underside by a pair of skateboarding trucks.\n[…]\nThe wheels allow for movement on the skateboard and helps determine the speed while riding. There are typically four wheels on a skateboard that are attached to the trucks. Ranging in size from around 48mm to around 60mm, smaller wheels are lighter in weight and are used for shorter distances and tricks. The wheels are typically made of polyurethane (PU) and come in different grades of PU.\n[…]\nThe metal parts known as skateboard trucks are what hold a skateboard's wheels to the deck. They are made up of a hanger that holds the axle and wheels and a baseplate that is mounted to the board. The hanger and baseplate are joined by a kingpin, allowing the truck to swivel and turn.\n[…]\nTrucks for skateboards come in a variety of forms and sizes and can be modified to the rider's preferences. The truck's height can have an impact on the board's stability and turning ability. Many skateboarders choose trucks with width approximately equal to the width of the deck though wider trucks are sometimes chosen for more landing stability for those who perform vert or big air tricks.\n[…]\nTo manage the looseness or tightness of the trucks, the kingpin's tightness can also be changed. This is a matter of taste and has an impact on the board's stability and ability to turn.\n[…]\nWhile not part of a skateboard, an all-in-one skateboard tool capable of mounting and removing trucks & wheels and adjusting truck kingpins are commonly sold by skate shops."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Esqueite",
        "situacao": "ok",
        "texto": "O esqueite, também referido como prancha de skate ou skate (em inglês: skateboard), é um equipamento esportivo utilizado no esqueitismo (skate), esporte radical. É feito de madeira e tem vários tamanhos. Tanto uma criança como um adulto podem usar. Seus trucks são feitos de metal. Originalmente, não possuíam nose (parte inclinada da frente) nem tail (parte inclinada de trás), eram apenas uma tábua\n[…]\nTrucks são os eixos do skate, a parte onde se encaixam as rodas, os rolamentos e o amortecedor que ameniza os impactos de um pulo.\n[…]\nOs trucks são geralmente confeccionados em alumínio, mas podem ser de material plástico e até mesmo de poliuretano, que é o mesmo material utilizado para confecção de rodas de skate.\n[…]\nSão quatro (um par por truck) em cada skate: que são postos nas partes superiores pontiagudas dos trucks; dois em formatos circulares, que são postos entre a mesa e o truck; e outros dois de forma irregular - uma parte maior do que a outra - que são usados entre o truck e a porca do parafuso central. Os amortecedores recebem uma classificação: vão de 95 até 100. Noventa e cinco, ou mais próximo de 95(ex.:96,97), são mais macios. Cem, ou mais próximo de 100 (ex. 98,99), são mais duros.\n[…]\nPermitem as rodas girarem livremente e portanto o deslize do skate no solo.\n[…]\nResponsáveis por fixar partes do skate. São 4 em cada eixo (Truck), somando um total de 10 parafusos: oito para prender os dois eixos (quatro em cada eixo) e dois parafusos centrais (um em cada truck) - são aqueles parafusos grandes onde são também encaixados dois amortecedores - e uma porca em cada roda - que faz com que a roda não saia.\n[…]\nShock Pads aumentam o espaço entre o Shape e os Trucks. Isso possibilita ao Truck torcer ainda mais, sem causar a \"Mordida de Roda\" (quando a roda toca o Shape e para de girar). Os Pads também podem alterar o jeito de virar para os lados do Truck.\n[…]\nPrancha de surfe",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Prancha de surfe",
      "descricao": "Prancha alongada sobre a qual o surfista desliza em pé na onda."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Como se chamam as pequenas aletas presas embaixo da prancha de surfe, perto da rabeta, que dão direção ao surfista?",
    "resposta": "Quilhas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Surfboard"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Surfboard",
        "situacao": "ok",
        "texto": "A surfboard is a narrow plank used in surfing. Surfboards are relatively light, but are strong enough to support an individual standing on them while riding an ocean wave. They were invented in ancient Hawaii (known as papa heʻe nalu in Hawaiian) and were usually made of wood from local trees, such as koa. They were often over 460 cm (15 ft) in length and extremely heavy.\n[…]\nJack O'Neill lost his left eye in a surf leash accident as the surgical tubing used in the early designs allowed the leash to overstretch, causing the surfboard to fly back towards the surfer. Subsequent cords were made with less elastic materials.\n[…]\nIn Malibu (in Los Angeles county), the beach was so popular amongst the early surfers that it lent its name to the type of longboard, the Malibu Surfboard. In the 1920s boards made of plywood or planking called Hollowboards came into use. These were typically 460 to 610 cm (15 to 20 ft) in length and very light. During the 1950s, the surf trend took off dramatically as it obtained a substantial amount of popularity as a sport.\n[…]\nThe design and material of longboards in the 1950s changed from using solid wood to balsa wood. The length of the boards still remained the same at an average of 320 cm (10.5 ft), and had then become widely produced. It was not until the late 1950s and early 1960s when the surfboard design had closely evolved into today's modern longboard. The introduction of polyurethane foam and fiberglass became the technological leap in design.\n[…]\nA traditional finless wooden surfboard, typically ridden by ancient native Hawaiians, not of royal descent. The surfboard typically runs 520 cm (17 ft) 90 kg.\n[…]\nThe first stand up surfboard ridden in Australia by Duke Kahanamoku and Isabel Letham is an oversized longboard with enough buoyancy to support two people, tandem surfing."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Prancha_de_surfe",
        "situacao": "ok",
        "texto": "Uma prancha de surfe é uma plataforma alongada usada no desporto de surfe. As pranchas de surfe são relativamente leves, mas são fortes o suficiente para suportar uma pessoa de pé sobre elas, enquanto deslizam na crista da onda rompente. As pranchas podem-se classificar atendendo ao seu desenho, forma, tamanho e material. As diferentes características atendem a diferentes interesses e modalidades \n[…]\nNos anos 60 os californianos eram mestres no uso dessas pranchas, nomes como Mickey \"Mr. Malibu\" Dora, foi um dos primeiros atletas a incentivar a cultura do surfe durante as décadas de 50 e 60 e a sua fama de rebelde e carisma lhe renderam apelidos como \"Da Cat\" (o gato) e \"King of Malibu\" (rei de Malibu). Foi a época que surf era a graciosa arte de passear a prancha, onde o cutback era a maior manobra.\n[…]\nA medida que o surf evoluiu as pranchas se tornaram menores e o surf malibu foi desaparecendo gradualmente. Durante quase vinte anos a técnica original só pode ser vista na Califórnia, onde os surfistas dos velhos tempos ainda usam Malibu.\n[…]\nA fabricação de pranchas de surfe tradicionalmente começa por dar o formato à prancha pelo shaper e depois segue o acabamento recoberta de fibra de vidro e colocação de quilhas. Atualmente também se utiliza na fabricação de tábuas modernos processos de CNC, moldagem, assim como o crescente uso de materiais de engenharia como a fibra de carbono e outros plásticos mais resistentes e leves.\n[…]\nRecorte das sobras: após secas são cortadas as sobras ao redor das quilhas, rabeta e bico.\n[…]\nQuilha e presilha do strep: Uma vez pintada, a prancha é tracejada simetricamente em local próximo a rabeta para receber a quilha e a presilha do strep. Fazem-se duas ou três marcações para encaixar as quilhas que são fixadas com a própria resina do processo de fibra, assim como a presilha do strep.\n[…]\nSurfe",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Alvo de tiro com arco",
      "descricao": "Alvo oficial do tiro com arco, com dez anéis concêntricos em cinco cores."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No alvo olímpico de tiro com arco, o centro é amarelo. Qual é a cor dos anéis mais externos?",
    "resposta": "Branco",
    "distratores": [
      "Preto",
      "Azul",
      "Vermelho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Target_archery",
      "https://en.wikipedia.org/wiki/Archery"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Target_archery",
        "situacao": "ok",
        "texto": "Target archery is the most popular form of archery, in which members shoot at stationary circular targets at varying distances. All types of bow – longbow, barebow, recurve and compound – can be used. In Great Britain, imperial rounds, measured in yards, are still used for many tournaments and these have slightly different rules to metric (WA) rounds, which are used internationally. Archers are di\n[…]\nModern competitive target archery is governed by the World Archery Federation (abbreviated WA), formerly FITA – Fédération Internationale de Tir à l'Arc. WA is the International Olympic Committee's (IOC) recognized governing body for all of archery and Olympic rules are derived from the WA rules.\n[…]\nDistances are measured using Imperial rounds (measured in yards) and are mainly shot in the United Kingdom and with NFAA and Metric rounds, (measured in meters), are used for most other tournaments. The metered rounds are the main rounds that are able to be shot in target archery.\n[…]\nField rounds are used in the United States under the National Field Archery Association in the United States. Depending on the type of round during these competitions the target face is either the 5-color target face, a blue and white face, a black and white face, a paper animal face  or a 3D Animal. The blue & white and black & white faces score from 1-5 and are the same measurements as the 5-color face.\n[…]\nArchery was in the Olympics (and the 1906 Intercalated Games) between 1900, the second modern Olympics, and 1920. The sport was dropped from the program because there were no internationally recognized rules for the sport- each Olympics through 1920 held a different type of event. With the creation of FITA in the 1930s, set international rules were created. However, it was not until 1972 that Archery was re-introduced with the individual event, and in 1988 the team event was added to the program.\n[…]\nArchery"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Archery",
        "situacao": "ok",
        "texto": "Archery is the sport, practice, or skill of using a bow to shoot arrows at a target. The word comes from the Latin arcus, meaning bow. Historically, archery has been used for hunting and combat. In modern times, it is mainly a competitive sport and recreational activity. A person who practices archery is typically called an archer, bowman, or toxophilite.\n[…]\nWhen using short bows or shooting from horseback, it is difficult to use the sight picture. The archer may look at the target, but without including the weapon in the field of accurate view. Aiming then involves hand-eye coordination—which includes proprioception and motor-muscle memory, similar to that used when throwing a ball. With sufficient practice, such archers can normally achieve good practical accuracy for hunting or for war.\n[…]\nGap shooting is an aiming method used by instinctive shooters. It involves consciously focusing on the tip of the arrow while maintaining awareness of the target. The archer must adjust the arrow's trajectory by gauging the distance between the arrow tip and the target, ensuring accurate shots.\n[…]\nCompetitive archery involves shooting arrows at a target for accuracy from a set distance or distances. This is the most popular form of competitive archery worldwide and is called target archery. A form particularly popular in Europe and America is field archery or 3D Archery, shot at targets generally set at various distances in a wooded setting. Competitive archery in the United States is governed by USA Archery and National Field Archery Association (NFAA), which also certifies instructors.\n[…]\nThompson, Maurice (1878) The Witchery of Archery: a Complete Manual of Archery New York: Scribner & Sons\n[…]\nFITA-Style Archery Targets Bow and Arrow Targets\n[…]\nPara Archery at International Paralympic Committee\n[…]\nUSA Archery - National Governing Body"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tiro_com_arco",
        "situacao": "ok",
        "texto": "O tiro com arco é a prática de utilizar um arco e flechas para atingir um alvo, surgiu como atividade de caça e guerra nos primórdios da civilização, com indícios de sua prática ainda na pré-história. A introdução de armas de fogo retirou do arco e flecha sua função bélica, levando-o a um declínio em sua popularidade.\n[…]\nO tiro com arco foi introduzido nos Jogos Olímpicos modernos em 1900, sendo disputado até 1920. A discrepância entre as regras aplicadas nos diferentes países fez com que a modalidade ficasse ausente do evento por várias décadas. A partir de 1972, em Munique, com a adoção das regras da Federação Internacional de Tiro com Arco, (FITA), por um número suficiente de países, o tiro com arco voltou à condição de desporto olímpico, a qual mantém até hoje.\n[…]\nNas disputas com arcos recurvos e compostos, os alvos são feitos de papel simples ou entrelaçado, ou de materiais sintéticos, como o Tyvek®. Consiste em um diagrama de anéis concêntricos graduados de 10 a 1 a partir do centro, identificado pelas cores amarelo (10 e 9 pontos), vermelho (8 e 7) e azul (6 e 5 pontos), preto (4 e 3) e o branco (2 e 1). Nos torneios outdoor, o alvo é complementado com anéis no valor de 5 a 1, nas cores azul(5), preto (4 e 3) e branco (2 e 1).\n[…]\nEm alguns campeonatos é apenas feito o Fita Round. O título de Campeão Brasileiro de Tiro com Arco é atualmente dado ao vencedor do Fita Round. Outra modalidade aplicada ao tiro com arco, é a prova indoor, onde o arqueiro ou arqueira, a 18 metros do alvo, atira dez séries de três tiros em 2 rounds, perfazendo o total de sessenta tiros, podendo alcançar um máximo de 600 pontos.\n[…]\nRecordes brasileiros de tiro com arco\n[…]\nFederação Internacional de Tiro com Arco\n[…]\n«Federação Portuguesa de Tiro com Arco»\n[…]\n«Confederação Brasileira de Tiro Com Arco»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Ryder Cup",
      "descricao": "Competição bienal de golfe por equipes entre os Estados Unidos e uma seleção europeia, disputada desde 1927."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Desde 1979, a Ryder Cup de golfe opõe os jogadores dos Estados Unidos a uma seleção de qual continente?",
    "resposta": "Europa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ryder_Cup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ryder_Cup",
        "situacao": "ok",
        "texto": "The Ryder Cup is a biennial men's golf competition between teams from Europe and the United States, with hosting duties alternating between venues in Europe and the United States for each edition. The cup is named after the English businessman Samuel Ryder who donated the trophy, and it is jointly administered by the PGA of America and Ryder Cup Europe, the latter a joint venture of the PGA Europe\n[…]\nIn 1979, the first year continental European players participated, the format was changed to the 28-match version in use today, with eight foursomes/four-ball matches on the first two days and 12 singles matches on the last day.\n[…]\nThe team in place of the original \"Great Britain\" team has been referred to as \"Europe\" since 1979, when players from continental Europe were included. Since then, the \"United States\" team has won 9 matches and the \"Europe\" team has won 13 matches, while retaining the Ryder Cup once with a tie.\n[…]\nThe Ryder Cup matches were always covered by the BBC, whether in Britain or in the United States, even prior to the British team's merger with Europe. But in the 1970s ITV gained the rights to the Ryder Cup showing the 1973, 1975 (in the US), and 1977 cups. ITV had the 1979 rights (hosted in the US, and the first with a European team) but the 1979 Cup ended up not being televised in the UK due to the 1979 ITV strike.\n[…]\nIn 1989, USA Network began a long association with the Ryder Cup by televising all three days live from England, the first live coverage of a Ryder Cup from Europe. This led to a one-year deal for the 1991 matches in South Carolina to be carried by NBC live on the weekend, with USA Network continuing to provide live coverage of the first day. All five sessions were broadcast for the first time.\n[…]\nJunior Ryder Cup – A match between U.S. and European juniors involving both boys and girls.\n[…]\nList of American Ryder Cup golfers\n[…]\nList of European Ryder Cup golfers"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ryder_Cup",
        "situacao": "ok",
        "texto": "A Ryder Cup é uma competição bienal de golfe por equipes entre Europa e Estados Unidos.\n[…]\nApós mais de 45 anos de domínio americano (os britânicos venceram o torneio uma vez entre 1935 e 1973), a equipe britânica adotou em 1973 golfistas da Irlanda, e do restante da Europa, a partir de 1979. Desta forma, o torneio, que é administrado conjuntamente pela Circuito Europeu de Golfe e Professional Golfers' Association of America, tornou-se mais competitivo.\n[…]\nO local é alternado a cada edição entre Estados Unidos e Europa. Excetuando a edição de 1997 na Espanha e 2006 na Irlanda, todos os torneios na Europa foram realizados no Reino Unido. O troféu, de mesmo nome, tem origem Samuel Ryder, quem o doou.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Revezamento medley",
      "descricao": "Prova de natação por equipes em que cada um dos quatro nadadores nada um estilo diferente."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No revezamento medley da natação, ao contrário do medley individual, qual estilo abre a prova?",
    "resposta": "Costas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Medley_swimming"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Medley_swimming",
        "situacao": "ok",
        "texto": "Medley swimming is a combination of four different swimming strokes butterfly, backstroke, breaststroke, freestyle (usually front crawl), into one race. This race is either swum by one swimmer as individual medley (IM) or by four swimmers as a medley relay.\n[…]\nBackstroke performances (only) are eligible for backstroke records, as they are performed under normal controlled starting conditions (i.e., reflex latency for the starting gun makes the average split time marginally quicker); for example, Ryan Murphy set the world record for the 100 m backstroke during the first leg of the 4 × 100 m medley relay at the 2016 Summer Olympics.\n[…]\n4×100 m/yd medley relay: Swum in both short course and long course pools. This was the first Olympic medley competition and has been swum since the 1960 Summer Olympics, Rome, Italy. The first Olympic butterfly event itself was first swum in the previous 1956 Summer Olympics.\n[…]\nMany collegiate programs hold competition in the 4×50 medley relay, and 4×100 medley relay.\n[…]\nUntil 1952, the butterfly was not defined as a separate stroke from the breaststroke, and so medley races featured three styles: backstroke, breaststroke, and freestyle. The usual distance of both the IM and the medley relay was thus 300 metres or yards rather than 400. During a 150-meter Individual Medley race, Henry Myers was one of the first to use an overarm recovery while swimming breaststroke, becoming one of the earliest forms of butterfly.\n[…]\nFreestyle means that in an event so designated the swimmer may swim any style, except that in individual medley or medley relay events, freestyle means any style other than backstroke, breaststroke or butterfly.\n[…]\n400 metres individual medley\n[…]\n4 × 50 metres medley relay\n[…]\n4 × 100 metres medley relay"
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
    "indice": 17,
    "ancora": {
      "nome": "Combinado nórdico",
      "descricao": "Esporte olímpico de inverno que combina duas provas de esqui nórdico."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O combinado nórdico, dos Jogos de Inverno, junta o esqui cross-country com qual outra prova?",
    "resposta": "Salto de esqui",
    "distratores": [
      "Tiro com carabina",
      "Esqui alpino",
      "Patinação de velocidade"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nordic_combined"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nordic_combined",
        "situacao": "ok",
        "texto": "Nordic combined is a winter sport in which athletes compete in cross-country skiing and ski jumping. The Nordic combined at the Winter Olympics has been held since the first Winter Olympics in 1924, while the FIS Nordic Combined World Cup has been held since 1983. Many Nordic combined competitions use the Gundersen method, where placement in the ski jumping segment results in time (dis)advantages \n[…]\nMass Start: the only format in which the cross-country part takes place before the ski jumping. All competitors start into a 10 km (6.21 mi) for men or 5 km  for women cross-country race in free technique at the same time. The final cross-country times are then converted into points for the ski jumping part. The winner is determined in a points-based system. The Nordic Combined World Cup saw the return of the mass start format in 2018, following a ten-year hiatus.\n[…]\nThe Gundersen method was developed by Gunder Gundersen, a Nordic combined athlete from Norway, and was first used in the 1980s. In it, the ski jumping portion comes first, and points in the ski jump determine when individuals start the cross-country skiing portion, which is a pursuit race, so that whoever crosses the finish line first wins the competition.\n[…]\nFor cross-country a skating boot is used.\n[…]\nSkis: jumping skis may have a length of a maximum 145% of the total body height of the competitor. Cross-country skis may be up to 2 meters long.\n[…]\nSki wax: glide wax for speed is used in both types, and kick wax is used in cross-country.\n[…]\nBecause it's a combination of cross country and ski jumping, the health risks in Nordic combined, including injuries and the risk of eating disorders, are similar to them. The Swiss athlete Matthias Lötscher for example suffered serious spinal injuries and a paralysis of the leg after an accident at the hill of Kandersteg. His countryman Pascal Müller suffered from an eating disorder."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Combinado_n%C3%B3rdico",
        "situacao": "ok",
        "texto": "Combinado nórdico (em sueco:  Nordisk kombination) é uma disciplina de esporte de inverno disputada por homens (em alguns casos mulheres) e constituída por salto de esqui e esqui cross-country (7,5 ou 15 km).\n[…]\nEmbora a prática de esqui nórdico já existisse há mais tempo, o combinado nórdico foi criado na Noruega no final do século XIX como a junção de duas modalidades de esqui, o salto e o cross-country. Foi a atração principal da primeira edição do Holmenkollen Ski Festival, em 1892, nos arredores de Oslo. O festival foi ganhando importância e atraindo esquiadores de diversos países, levando o esporte a ser introduzido no programa da primeira edição dos Jogos Olímpicos de Inverno, Chamonix 1924.\n[…]\nEm 2011, a Federação Internacional de Esqui criou a Corrida de Penalização, fórmula na qual o vencedor da etapa do salto obtinha uma vantagem de dez segundos na largada do cross-country, sendo seguido por todos os outros, que largavam juntos. Estes, porém, deveriam cumprir durante a prova de zero a seis penalizações, cada uma de 150 metros, de acordo com seus resultados no salto. Essa fórmula é usada apenas em algumas etapas da Copa do Mundo.\n[…]\nHolmenkollen Ski Festival: competição mais tradicional do mundo, acontece desde 1892 na Noruega. Nos últimos anos tem sido parte da Copa do Mundo, mas já recebeu o Campeonato Mundial quatro vezes (a última em 2011) e os Jogos Olímpicos em 1952. Localizada dentro de um complexo de esportes de inverno, a pista, que já foi reconstruída e modernizada dezoito vezes, também sedia competições de salto de esqui.\n[…]\nEsqui alpino\n[…]\nEsqui estilo livre\n[…]\n«Site oficial da Federação Internacional de Esqui» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Oito com (remo)",
      "descricao": "Barco de remo com oito remadores, cada um com um remo, considerado a principal classe do remo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No barco de remo chamado oito com, além dos oito remadores, quem mais vai a bordo?",
    "resposta": "O timoneiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eight_(rowing)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eight_(rowing)",
        "situacao": "ok",
        "texto": "An eight, abbreviated as an 8+, is a racing shell used in competitive rowing (crew). It is designed for eight rowers, who propel the boat with sweep oars, and is steered by a coxswain, or \"cox\".\n[…]\nEach of the eight rowers has one oar. The rowers sit in a line in the centre of the boat and face the stern. They are usually placed alternately, with four on the port side (rower's right hand side – also traditionally known as \"stroke side\") and four on the starboard side (rower's lefthand side – known as \"bow side\"). The cox steers the boat using a rudder and is normally seated at the stern of the boat.\n[…]\n\"Eight\" is one of the classes recognized by the International Rowing Federation and one of the events in the Olympics. The first Olympic eights race was held in 1900 and won by the United States."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Ginástica artística",
      "descricao": "Modalidade de ginástica disputada em aparelhos como solo, argolas, barras e trave."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na ginástica artística feminina, os aparelhos são o salto, as barras assimétricas, a trave e qual outro?",
    "resposta": "Solo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Artistic_gymnastics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Artistic_gymnastics",
        "situacao": "ok",
        "texto": "Artistic gymnastics is a discipline of gymnastics in which athletes perform short routines on different types of apparatus. The sport is governed by World Gymnastics, which assigns the Code of Points used to score performances and regulates all aspects of elite international competition. Within individual countries, gymnastics is regulated by national federations such as British Gymnastics and USA\n[…]\nFor men's artistic gymnastics, the Olympic order is:\n[…]\nGoodwill Games: Artistic gymnastics was an event at this now-defunct competition.\n[…]\nMost of the top Soviet gymnasts were from the Russian SFSR, the Ukrainian SSR, and the Byelorussian SSR, with the most famous, Olga Korbut, hailing from the latter. The artistry and grace of Korbut, along with that of Nadia Comăneci of Romania, brought unprecedented global popularity to the sport in the early to mid-1970s.\n[…]\nLed by individuals such as 10-time Olympic medalist (with five golds) Ágnes Keleti, the Hungarian women's team medaled at the first four Olympics that included women's artistic gymnastics competitions (1936–1956), as well as at the 1954 World Championships. After a long decline, World and Olympic vault champion Henrietta Ónodi put them back on the map in the late 1980s and early 1990s.\n[…]\nGymnastics sits on many lists of the world's most dangerous sports. Artistic gymnastics carries an inherently high risk of spinal and other injuries, and in extremely rare cases, gymnasts have sustained fatal injuries. Julissa Gomez, an American gymnast, died in 1991 after breaking her neck while vaulting three years earlier. Several other gymnasts have been paralyzed from accidents in training or competition, including Elena Mukhina of the Soviet Union and Sang Lan of China.\n[…]\nArtistic gymnastics terms named after people\n[…]\nList of current female artistic gymnasts\n[…]\nList of notable artistic gymnasts\n[…]\nMedia related to Artistic gymnastics at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gin%C3%A1stica_art%C3%ADstica",
        "situacao": "ok",
        "texto": "A ginástica artística, também conhecida no Brasil como ginástica olímpica, é uma modalidade da ginástica formada por exercícios realizados em alguns aparelhos: cavalo, argola, solo e, barra (assimétrica e paralela). Esta modalidade entrou na primeira edição dos jogos olímpicos da era moderna.\n[…]\nSão abundantes os movimentos que podem ser realizados pelo atleta durante suas apresentações na ginástica artística. A variação se dá tanto no solo, quanto nos demais aparelhos. No entanto, tais movimentos possuem apenas duas variantes: longitudinal - girar em volta de si mesmo -  as piruetas; e transversal - de movimento, o mortais.\n[…]\nOs aparelhos da ginástica artística masculina (sigla em inglês: MAG) são diferentes dos aparelhos disputados na ginástica artística feminina (sigla em inglês: WAG). Enquanto os homens disputam provas em seis aparelhos diferentes, as mulheres as disputam em quatro. Os aparelhos (provas) masculinos são o solo, o salto sobre a mesa, o cavalo com alças (cavalo com arções), as barras paralelas, a barra fixa e as argolas.\n[…]\nTais aparelhos, durante as apresentações masculinas, procuram demonstrar a força e o domínio do ginasta. Os aparelhos (provas) femininos são a trave, o solo, o salto sobre a mesa e as barras assimétricas. Tais aparelhos, durante as apresentações femininas, colocam maior ênfase na vertente artística e de agilidade. Em comum, homens e mulheres possuem as provas de solo e salto, com nuances de diferenciação. Abaixo, estão descritos cada um dos eventos/aparelhos:\n[…]\nNas olimpíadas de Paris, em 2024, o país voltou a conquistar quatro  medalhas, sendo uma de bronze na competição feminina por equipes, duas de prata, no salto e no individual geral, e uma de ouro, no solo, as três últimas para Rebeca Andrade.\n[…]\nGinástica acrobática\n[…]\nGinástica aeróbica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Salto com vara",
      "descricao": "Prova do atletismo em que o atleta usa uma vara flexível para transpor um sarrafo alto."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No início do século vinte, antes do metal e da fibra de vidro, as varas do salto com vara eram feitas de qual planta?",
    "resposta": "Bambu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pole_vault"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pole_vault",
        "situacao": "ok",
        "texto": "Pole vaulting, also known as pole jumping, is a track and field event in which an athlete uses a long and flexible pole, usually made from fiberglass or carbon fiber, as an aid to jump over a bar. Pole jumping was already practiced by the ancient Egyptians, ancient Greeks and the ancient Irish people, although modern pole vaulting, an athletic contest where height is measured, was first establishe\n[…]\nPole vault was one of the athletics events of the inaugural Olympic Games in 1896.\n[…]\nThe equipment and rules for pole vaulting are similar to the high jump. Unlike high jump, however, the athlete in the vault has the ability to select the horizontal position of the bar, known as the standards, before each jump and can place it a distance beyond the back of the box, the metal pit that the pole is placed into immediately before takeoff. The range of distance the vaulter may place the standards varies depending on the level of competition.\n[…]\nA trapezoidal indentation in the ground with a metal or fiberglass covering at the end of the runway in which vaulters \"plant\" their pole. The back wall of the box is nearly vertical and is approximately 8 inches (20 cm) in depth. The bottom of the box gradually slopes upward approximately 3 feet (90 cm) until it is level with the runway. The covering in the box ensures the pole will slide to the back of the box without catching on anything.\n[…]\nThe mats used for landing in pole vault.\n[…]\nThe position a vaulter is in the moment the pole reaches the back of the box and the vaulter begins their vault. Their arms are fully extended and their drive knee begins to come up as they jump.\n[…]\nPole\n[…]\nList of pole vault national champions (women)\n[…]\nIAAF list of pole-vault records in XML\n[…]\nAll-time Masters men's Pole Vault list Archived 16 February 2020 at the Wayback Machine\n[…]\nAll-time Masters women's Pole Vault list Archived 29 September 2018 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Salto_com_vara",
        "situacao": "ok",
        "texto": "Salto com vara(pt-BR) ou salto à vara(pt-PT?) é uma modalidade esportiva de salto do atletismo (junto com salto em altura, salto em distância e salto triplo) onde os competidores usam uma vara longa e flexível para alcançar maior altura e passar por cima de uma barra ou sarrafo. Competições com varas já eram conhecidas na Grécia Antiga, entre os cretenses e os celtas.\n[…]\nUma das primeiras competições de salto com varas onde a altura foi medida aconteceu no Ulverston Football and Cricket Club, em Lancashire, Inglaterra, em 1843. A competição moderna começou por volta, de 1850 na Alemanha, quando o salto com vara foi adicionado como modalidade para a prática de exercícios em clubes de ginástica e, também na Inglaterra nesta época, onde as competições eram com varas de cinza sólida ou de nogueira com pontas de ferro.\n[…]\nA moderna técnica do salto foi desenvolvida nos Estados Unidos no fim do século XIX, onde inicialmente as varas eram feitas de material rígido como bambu – registrado pela primeira vez em 1857 –  ou alumínio. A partir do início da década de 1950 ocorreu a introdução de varas feitas de fiberglass e fibra de carbono; usando este novo material, os saltadores começaram a atingir alturas mais elevadas antes inalcançáveis.\n[…]\nA pista de corrida para o salto deve medir no mínimo 45 metros e ao fim dela se encontra o obstáculo, uma barra horizontal de 4,5 m de comprimento, 2,260 kg de peso máximo, sustentada por duas traves laterais que a elevam e apoiam à determinada altura. Exatamente ao fim da pista, ao nível do solo e à frente do obstáculo, existe centrada uma caixa de metal ou madeira, com 1 m de comprimento, 60 cm de largura no início e 15 cm junto ao obstáculo.\n[…]\nÉ nela que o saltador apoia a vara para conseguir a impulsão, realizar o salto e ultrapassar o sarrafo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Camisa de bolinhas do Tour de France",
      "descricao": "Camisa branca com bolinhas vermelhas vestida pelo líder da classificação de montanha do Tour de France."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No Tour de France, o melhor escalador veste uma camisa branca com bolinhas de qual cor?",
    "resposta": "Vermelha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mountains_classification_in_the_Tour_de_France"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mountains_classification_in_the_Tour_de_France",
        "situacao": "ok",
        "texto": "The mountains classification is a secondary competition in the Tour de France, that started in 1933. It is given to the rider that gains the most points for reaching mountain summits first. The leader of the classification is named the King of the Mountains, and since 1975 wears the polka dot jersey (French: maillot à pois rouges), a white jersey with red polka dots.\n[…]\nThe polka dot jersey is the third most important jersey in the Tour de France, third to yellow and green jerseys. If a rider is the leader in the general and/or points classifications and in the mountain classification he will wear the yellow or green jersey. The second rider (or the following eligible rider) in the mountain classification will wear polka dot jersey with some exceptions:\n[…]\nDuring the 2000s, the Tour de France organization decided to double the points awarded at the top of certain ascents:\n[…]\nHighest point in the Tour de France (1 climb in 2023, 2024 and 2025).\n[…]\nThis list shows the cyclists who were chosen meilleur grimpeur by the newspaper L'Auto. Although L'Auto was organising the Tour de France, the meilleur grimpeur title was not given by the tour organisation, so it is unofficial. However, it is a direct predecessor of the later King of the Mountains title.\n[…]\nafter the end of 2026 Tour de France\n[…]\nWoodland, Les (2000). The Unknown Tour De France: The Many Faces of the World's Biggest Bicycle Race. U.S.: Cycling Resources. ISBN 978-1-892495-26-6.\n[…]\nWoodland, Les (2007) [1st. pub. 2003]. The Yellow Jersey Companion to the Tour de France. London: Random House. ISBN 978-0-224-08016-3.\n[…]\nMcGann, Bill; McGann, Carol (2006). The Story of the Tour de France, Volume 1. Indianapolis, U.S.: Dog Ear Publishing. ISBN 978-1-59858-180-5.\n[…]\nMedia related to Mountains classification in the Tour de France at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_montanha_no_Tour_de_France",
        "situacao": "ok",
        "texto": "O Grande Prêmio da montanha do Tour de France é uma classificação secundária do Tour de France que recompensa o ciclista que obtém mais pontos ao passar pelas cimeiras dos diferentes portos de montanha de que consta a carreira. O líder desta classificação recebe o nome de \"Rei da montanha\", e desde 1975 é recompensado com um maillot de cor branca e pontos vermelhos, em francês chamado maillot à po\n[…]\nDesde o 1905, o diário organizador da volta, L'Équipe denominou um ciclista do Tour de France como meilleur grimpeur, o melhor escalador. Em 1933 Vicente Trueba foi o primeiro vencedor desta classificação. Com tudo, Trueba era muito mau nas descidas, pelo qual nunca ganhou nada de importando apesar de coroar em primeira posição a cimeira. Henri Desgrange, director do Tour de France, decidiu que os ciclistas tinham que receber um prêmio por ter chegado primeiros à cimeira.\n[…]\nApesar de que o melhor escalador foi reconhecido pela primeira vez em 1933, o maillot distintivo só se introduziu até 1975. As cores do maillot escolheram-se em função do patrocinador do momento, a marcha de chocolate Poulain, as barras de chocolate das quais tinham um envoltório branco a pontos vermelhos. Todo e a posterior mudança de patrocinador nesta classificação o maillot conservou as cores e inclusive se estendeu a outras provas ciclistas.\n[…]\nEntre 1905 e 1932, o diário L'Équipe designou na cada edição ao meilleur grimpeur, melhor escalador, do Tour. Este título não era dado pela organização da carreira e não está reconhecido oficialmente, mas é o precedente directo da classificação da montanha que se instaurou desde 1933.\n[…]\nAté 1975 o Grande Prêmio da Montanha não tinha nenhum maillot distintivo.\n[…]\nClassificação da montanha\n[…]\nMcGann, Bill; McGann, Carol. The Story of the Tour de France, Volume 1.[2]  Indianapolis, Um.S.: Dog Ear Publishing, 2006. ISBN 978-1-59858-180-5 [Consultado em 6 de maio de 2013].",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Canoa (canoagem de velocidade)",
      "descricao": "Barco da canoagem de velocidade, também chamado canoa canadense, impulsionado por remo de uma só pá."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na canoagem de velocidade, o atleta do caiaque rema sentado. Em que posição rema o atleta da canoa, como Isaquias Queiroz?",
    "resposta": "Ajoelhado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Canoe_sprint"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Canoe_sprint",
        "situacao": "ok",
        "texto": "Canoe sprint is a water sport in which athletes race in specially designed sprint canoes or sprint kayaks on calm water over a short distance. Prior to November 2008, canoe sprint was known as flatwater racing. The term is still in use today but is often used as a hypernym for both canoe marathon and canoe sprint. Similarly, the term 'canoeing' is used to describe both kayaking and canoeing."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canoagem_velocidade",
        "situacao": "ok",
        "texto": "A canoagem velocidade é um esporte aquático em que os atletas competem de canoa ou caiaque em águas calmas.\n[…]\nAs categorias de corrida variam de acordo com o número de atletas no barco, a duração do percurso e se o barco é uma canoa ou caiaque. As corridas de canoa às vezes são chamadas de corridas de águas planas. As distâncias reconhecidas pela ICF para corridas internacionais de canoagem são 200m, 500m e 1000m. Essas corridas acontecem em cursos retos com cada barco remando em sua própria raia designada.\n[…]\nEm uma canoa, o se ajoelha em um joelho com a outra perna para a frente e o pé apoiado no chão do barco, e rema um remo de lâmina única de um lado apenas com o que é conhecido como 'J-stroke' para controlar a direção do barco. No Canadá, existe uma classe de corrida para o C-15 ou WC ou \"War Canoe\", bem como um C-4 de design semelhante (que é muito mais curto e mais agachado do que um C-4 'Internacional').\n[…]\nUma classe de barcos antiquada é o C-7, assemelhando-se a um grande C4 que foi lançado pela ICF com pouco sucesso. Para canoas de corrida, a lâmina é tipicamente curta e larga, com uma 'face de força' em um lado que é plana ou recortada. O eixo será normalmente mais longo do que um remo de canoa, porque a posição ajoelhada coloca o remador mais alto acima da superfície da água.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Bicicleta de pista",
      "descricao": "Bicicleta de marcha fixa usada nas provas de ciclismo em velódromo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "As bicicletas de pista, usadas nos velódromos, têm marcha fixa e dispensam qual peça das bicicletas comuns?",
    "resposta": "Freios",
    "fonte": [
      "https://en.wikipedia.org/wiki/Track_bicycle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Track_bicycle",
        "situacao": "ok",
        "texto": "A track bicycle or track bike is a bicycle optimized for racing at a velodrome or outdoor track. Unlike road bicycles, the track bike is a fixed-gear bicycle; thus, it has only a single gear ratio and has neither a freewheel nor brakes. Tires are narrow and inflated to high pressure to reduce rolling resistance.\n[…]\nshorter chainstays and overall wheelbase – befitting the tight quarters of velodrome races\n[…]\nThese changes represent substantial compromises compared to a typical road bike. For example, even medium-sized track frames often have substantial toe overlap with the front wheel; while not an issue for velodrome riding, it can make slow-speed turns difficult if the bike were used on the road.\n[…]\nTrack bicycles have only one drive sprocket (or cog) and one chainring, so the size ratio is relevant. A lower gear ratio allows quicker acceleration or 'jump' but can limit top speed. A larger gear ratio makes sustained speed easier, important in pursuit racing, time trial and bunched races such as points or scratch events.\n[…]\nBicycle chains used in track, fixed gear and single speed cycling come in two common roller widths (the internal width between the inner plates), which is either 2.38 mm (3⁄32 in) or 3.18 mm (1⁄8 in). The chainring, sprocket and chain should all be the same width. Although a wider chain will work on a narrower chainring or sprocket, it is not ideal. A narrower chain will not work on a wider chainring or sprocket.\n[…]\nNewer bicycles with derailleur gears use bushingless 2.38 mm (3⁄32 in) chains which flex, making gear changing possible. There are also 3.2 mm (1⁄8 in) bushingless chains on the market, which can be lighter or cheaper. Track bicycles, however, need increased strength rather than a lightness or a flexibility, so most of the track chains still use the full-bushing design."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bicicleta_de_pista",
        "situacao": "ok",
        "texto": "Uma 'bicicleta de pista ou bicicleta de sprint é uma bicicleta de carreiras optimizada para ser utilizada num velódromo ou pista ao ar livre. A diferença de bicicletas de carreiras, a bicicleta de pista é uma bicicleta com um sistema de pinhão fixo que faz que se freie aplicando gradualmente menor pressão no pedaleiro. Os pneus são estreitos e enchem-se a alta pressão para reduzir a resistência da\n[…]\nA longitude máxima da bicicleta de pista é de 2 m, e pesa entre 7 e 8.5 kg. O marco é triangular, e o sillín tanto faz ao de qualquer bicicleta de carreira.\n[…]\nAs primeiras bicicletas de pista eram chamadas path, sendo o antigo termo Victoriano/Eduardiano para o ciclismo de pista, eram bicicletas de corrida com pelo geral tubulares de 26 x 1 ¼\" (32-597mm) de alta pressão. No entanto, seu homólogo, o path racer, é uma bicicleta com duplo propósito, tanto para estrada como para pista, os ângulos não são tão fechados e o pedalier se localiza mais baixo que uma pura path (pista).\n[…]\nAs bicicletas de pista são máquinas ultra–ligeiras de 7 e 8.5 kg com batalhas curtas, ângulos fechados e manillares de corridas muito curvados para agilizar o manejo. O eixo pedaleiro costuma estar situado mais alto que nas bicicletas de corrida, para que o pedal que fica ao interior da curva não toque a pista.\n[…]\nO cubo da roda traseira de uma bicicleta sprint é um pinhão fixo. As bielas não deixam de rodar até que a bicicleta não se detenha, de modo que o corredor não pode deixar de pedalear nem um instante. (ver → Bicicleta de pinhão fixo)\n[…]\nPára que seja legal em pista, uma bicicleta não deve ter nem travões nem mudanças de marcha, já que não há custas que escalar nem obstáculos ante os que se deter. Por outro lado, isto incrementa a segurança na pista quando há mas competidores, já que elimina as freadas bruscas e reduz a velocidade relativa entre as diferentes bicicletas.\n[…]\nCiclismo em pista\n[…]\nBicicleta monomarcha",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Skeleton",
      "descricao": "Esporte de inverno em que o atleta desce uma pista de gelo sobre um pequeno trenó."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "No skeleton, esporte dos Jogos de Inverno, em que posição o atleta desce a pista de gelo?",
    "resposta": "De bruços, cabeça à frente",
    "distratores": [
      "De costas, pés à frente",
      "Sentado, pés à frente",
      "Ajoelhado, cabeça à frente"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Skeleton_(sport)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Skeleton_(sport)",
        "situacao": "ok",
        "texto": "Skeleton is a winter sliding sport in which a person rides a small sled, known as a skeleton bobsled (or bobsleigh), down a frozen track while lying face down and head-first. The sport and the sled may have been named for the sled's resemblance to a ribcage.\n[…]\nAccording to the FIBT, \"The 'toboggans' used in Alpine countries at the end of the 19th century were inspired by Canadian/Indian sleds used for transport\". Various additions and redesigning efforts by athletes have led to the skeleton sleds used today. In 1892, L. P. Child introduced the \"America\", a new metal sled that revolutionized skeleton as a sport. The stripped-down design provided a compact sled with metal runners, and the design caught on quickly.\n[…]\nIn 2010, the FIBT restricted the materials with which skeleton sleds are permitted to be made. Sled frames must be made of steel and may not include steering or braking mechanisms. The base plate, however, may be made of plastics. The handles and bumpers found along the sides of the sled help secure the athlete during a run.\n[…]\nAlpine racing helmet with chin guard, or a skeleton-specific helmet\n[…]\nBoth skeleton and its sister sport, bobsledding, have been associated with traumatic brain injury, a phenomenon known as \"sled head\". Multiple suicides of former athletes have been linked to these sports.\n[…]\nList of Skeleton World Cup champions\n[…]\nTorino 2006 Skeleton rules\n[…]\nUSA Bobsled and Skeleton Federation (USBSF) Governing body for the sports of bobsled and skeleton in the US.\n[…]\nBobsleigh CANADA Skeleton Governing body for the sports of bobsled and skeleton in Canada.\n[…]\nAlberta Skeleton Association The Provincial governing body for the sport of Skeleton in Alberta."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Skeleton",
        "situacao": "ok",
        "texto": "Skeleton é um esporte olímpico de inverno criado na Suíça no final do século XIX e que fez parte das duas edições de Jogos Olímpicos de Inverno sediadas no país, em 1928 e 1948, antes de ser integrado ao programa dos Jogos a partir da edição de 2002.\n[…]\nAs competições acontecem em uma pista de gelo, geralmente construída artificialmente, em que os pilotos descem deitados de bruços sobre o trenó, que não possui freios. Por questões de segurança, os atletas devem utilizar capacete, traje com mangas e calças longas e sapatos com pregos, para evitar escorregões durante a corrida de largada (os cinquenta primeiros metros da pista).\n[…]\nApós a largada, o atleta deve obrigatoriamente manter contato físico com o trenó e permanecer deitado de bruços. Após autorizado pelo juiz de partida, o atleta tem trinta segundos para ativar o cronômetro, podendo correr enquanto empurra o trenó, mas devendo deitar sobre ele até o primeiro ponto de cronometragem. Um evento pode ser momentaneamente interrompido devido às condições climáticas, a danos na pista e a falhas dos equipamentos de cronometragem.\n[…]\nO traje do atleta deve conter mangas e calças longas, e podem ser integrados a um capuz, mas este deve cobrir a cabeça (não é permitido esconder, enrolar ou costurar o capuz). Os pilotos também utilizam luvas, joelheiras e cotoveleiras.\n[…]\nEm 2001, durante um treinamento na pista de Riga, na Letônia, Girts Ostenieks, atleta reserva da equipe de bobsleigh do país, fazia uma descida de skeleton quando foi atingido pela lâmina do trenó da equipe russa, que estava parado em um local errado e escorregou para dentro da pista segundos antes de Ostenieks passar. A lâmina perfurou seu crânio e ele morreu instantaneamente.\n[…]\nSkeleton nos Jogos Olímpicos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Frescobol",
      "descricao": "Jogo de praia criado no Rio de Janeiro, com raquetes de madeira e uma bolinha de borracha."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Diferente da maioria dos jogos de raquete, o frescobol carioca não tem adversários. Qual é o objetivo da dupla?",
    "resposta": "Não deixar a bola cair",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Frescobol"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Frescobol",
        "situacao": "ok",
        "texto": "Frescobol é um esporte tipicamente praiano, criado no Rio de Janeiro no século XX. É jogado por dois jogadores ou mais. É também comum sua prática em locais públicos. Também é conhecido como Matkot na língua inglesa e hebraica, e Racchettoni em italiano.\n[…]\nMuitas vezes confundido com o tênis de praia (ou beach tennis), o Frescobol se distingue basicamente pelo seu estilo cooperativo, em oposição ao estilo competitivo do tênis de praia - este se assemelha mais ao Tênis e que, inclusive, possui área precisamente delimitada e uma rede de separação. Apesar das diferenças, raquetes semelhantes às do Frescobol são utilizadas em várias partes do mundo, Israel, Irã, México, Peru, Espanha, Itália, EUA, etc.\n[…]\nNo estado do Rio de Janeiro,  no dia 10 de Julho, é comemorado o dia estadual do Frescobol.\n[…]\nSomente décadas depois o nome \"frescobol\" foi criado.\n[…]\nDurante a década de 80 foram realizadas muitas competições isoladas em vários estados do Brasil. Apesar disto, ainda não havia um grande intercâmbio entre os jogadores de diferentes naturalidades. Mais tarde, em 1994, foi realizado o I Circuito Brasileiro de Frescobol que percorreu nove estados brasileiros, possibilitando assim um grande intercâmbio entre os jogadores de vários estados.\n[…]\nFabricada com os seguintes materiais: madeira, polímeros - fibra de vidro, carbono e aramida - ou similar. A raquete pode ser oca ou maciça. Dimensões: comprimento máximo de 50 cm (a partir da ponta do cabo até a tangente perpendicular extrema da borda oval) e com a largura de 25 cm (contada entre as tangentes paralelas laterais da borda oval). O tamanho mais comumente encontrado é o de 45 cm de comprimento por 21 cm de largura.\n[…]\nEm outros países existe uma raquete similar, conhecida como Beach Bat."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Rúgbi",
      "descricao": "Esporte coletivo com bola oval, de origem inglesa."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No rúgbi, em que direção um jogador pode passar a bola com as mãos para um companheiro?",
    "resposta": "Para trás ou para o lado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rugby_union",
      "https://en.wikipedia.org/wiki/Forward_pass"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rugby_union",
        "situacao": "ok",
        "texto": "Rugby union football, commonly known simply as rugby union or often just rugby, is a close-contact team sport that originated at Rugby School in England in the first half of the 19th century. Rugby involves running with the ball in hand. In its most common form, the game is played between two teams of 15 players each, using an oval-shaped ball on a rectangular field called a pitch. The pitch has H\n[…]\nOther less formal variants include beach rugby and snow rugby.\n[…]\nSir Arthur Conan Doyle, in his 1924 Sherlock Holmes tale The Adventure of the Sussex Vampire, mentions that Dr Watson played rugby for Blackheath.\n[…]\nIn public art and sculpture, there are many works dedicated to the sport. There is a 27 feet (8.2 m) bronze statue of a rugby line-out by pop artist Gerald Laing at Twickenham and one of rugby administrator Sir Tasker Watkins at the Millennium Stadium. Rugby players to have been honoured with statues include Gareth Edwards in Cardiff and Danie Craven in Stellenbosch.\n[…]\nInternational Rugby Hall of Fame, now merged with the former IRB Hall of Fame\n[…]\nInternational rugby union eligibility rules\n[…]\nInternational rugby union player records\n[…]\nInternational rugby union team records\n[…]\nRugby World Cup\n[…]\nWomen's Rugby World Cup\n[…]\nList of international rugby union teams\n[…]\nList of oldest rugby union competitions\n[…]\nList of rugby union terms\n[…]\nWorld Rugby Hall of Fame, a merger of the IRB and International Rugby Halls of Fame\n[…]\nConcussions in rugby union\n[…]\nList of rugby union stadiums by capacity\n[…]\nHistory of the English rugby union system\n[…]\nHistory of the England national rugby union team\n[…]\n\"Laws of Rugby Union\". IRB. 2010. Archived from the original on 18 May 2011. Retrieved 16 January 2011.\n[…]\nScrum.com Rugby guide\n[…]\nInternational Rugby Board – official site of the sport's governing body\n[…]\nRugby Data – rugby union statistics\n[…]\nPlanet Rugby – news, fixtures, match reports, etc.\n[…]\nESPN Rugby – news, match reports and statistics database"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Forward_pass",
        "situacao": "ok",
        "texto": "In several forms of football, a forward pass is the throwing of the ball in the direction in which the offensive team is trying to move, towards the defensive team's goal line. The legal and widespread use of the forward pass distinguishes gridiron football (American football and Canadian football) from rugby football (union and league) in which the play is illegal.\n[…]\nIn the two codes of rugby (union and league), a forward pass is against the rules. Normally this results in a scrum to the opposing team, but on rare occasions a penalty may be awarded if the referee is of the belief that the ball was deliberately thrown forward.\n[…]\nUnlike in gridiron football, where the direction of a pass is judged strictly relative to the ground, in both codes of rugby the direction of the pass is relative to the player making the pass and not to the actual path relative to the ground. A forward pass occurs when the player passes the ball forward in relation to himself. (This applies only to the movement of the player, not to the direction in which the passer is facing, i.e.\n[…]\nif the player is facing backwards and passes toward their team's goal area, it is not forward; and conversely, if the player passes toward the opponent's goal area, it is forward.) In rugby league, the video referee may not make judgements on whether a pass is forward.\n[…]\nRugby league gameplay\n[…]\nRugby union gameplay"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rugby_union",
        "situacao": "ok",
        "texto": "O rugby union (rúgbi union), comumente conhecido simplesmente como rugby, é um esporte de equipe de contato próximo que se originou na Rugby School na primeira metade do século XIX. O rúgbi se baseia simplesmente em correr com a bola na mão. Em sua forma mais comum, um jogo é disputado entre duas equipes de 15 jogadores cada, usando uma bola oval em um campo retangular chamado de campo. O campo te\n[…]\nKicking conversion after a tryO passe para frente (jogar a bola para frente para outro jogador) não é permitido; a bola pode ser passada lateralmente ou para trás. A bola tende a ser movida para frente de três maneiras: por chute, por um jogador correndo com ela ou dentro de um scrum ou maul. Somente o jogador com a bola pode ser placado (tackled) ou rucked. Um \"knock-on\" é cometido quando um jogador derruba a bola para frente, e o jogo é reiniciado com um scrum.\n[…]\nAmbos os lados competem pela bola e os jogadores podem levantar seus companheiros de equipe. Um jogador que salta não pode ser placado até que esteja de pé e somente o contato ombro a ombro é permitido; a infração deliberada dessa lei é um jogo perigoso e resulta em um pênalti.\n[…]\nO time que ganha a posse de bola pode manter a bola sob os pés enquanto empurra o adversário para trás, a fim de ganhar terreno, ou transferir a bola para a parte de trás do scrum, onde ela pode ser apanhada pelo oitavo ou pelo meio scrum.\n[…]\nA variante mais antiga é o rúgbi sevens (às vezes 7s ou VIIs), um jogo de ritmo acelerado que se originou em Melrose, Escócia, em 1883. No rúgbi sevens, há apenas sete jogadores por lado, e cada tempo normalmente dura sete minutos. Os principais torneios incluem o Hong Kong Sevens e o Dubai Sevens, ambos realizados em áreas normalmente não associadas aos níveis mais altos do jogo de 15 jogadores.\n[…]\nUma variante mais recente do esporte é o rúgbi tens (10s ou Xs), uma invenção da Malásia com dez jogadores por lado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Marcha atlética",
      "descricao": "Prova de pedestrianismo do atletismo em que os atletas andam o mais rápido possível, sem correr."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na marcha atlética, que regra sobre os pés diferencia a prova de uma corrida comum?",
    "resposta": "Um pé sempre no chão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Racewalking"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Racewalking",
        "situacao": "ok",
        "texto": "Race walking, or racewalking, is a long-distance discipline within the sport of athletics. Although a foot race, it is different from running in that one foot must appear to be in contact with the ground at all times. Race judges carefully assess that this is maintained throughout the race. Races are typically held on either roads or running tracks. Common distances range from 3,000 metres (1.9 mi\n[…]\nCompared to other forms of foot racing, stride length is reduced; to achieve competitive speeds racewalkers must attain cadence rates comparable to those achieved by running.\n[…]\nUSA Track & Field offers racewalking at the Youth, Open, All-Comers, and Masters levels.\n[…]\nHigh School: Racewalking is sometimes included in high school indoor and outdoor track meets, the rules often more relaxed. The distances walked tend to be relatively short, with the 1500 m being the most commonly held event. Racing also occurs at 3 km, 5 km and 10 km, with records kept and annual rankings published.\n[…]\nDespite being one of the original disciplines of modern athletics, racewalking is sometimes derided as a contrived or \"artificial\" sport. In 1992, noted sportscaster and longtime Olympic commentator Bob Costas compared it to \"a contest to see who can whisper the loudest\".\n[…]\nIn the 1966 film Walk, Don't Run, Jim Hutton plays a racewalker competing in the Tokyo Olympics. Cary Grant and Samantha Eggar co-star.\n[…]\nIrish Olympian John Kelly appears briefly as a racewalker in the 1968 musical film Star!, starring Julie Andrews and Richard Crenna.\n[…]\nIn the 2021 film Queenpins, actress Kristen Bell plays a three-time gold medal Olympic racewalker and extreme couponer.\n[…]\nThe 2025 comedy film Racewalkers centres on a washed-up former baseball player who begins to train as a race walker.\n[…]\nRacewalk.com\n[…]\nWorld Class Racewalking\n[…]\nRace Walking Record – News, photos and reports all about racewalking"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Marcha_atl%C3%A9tica",
        "situacao": "ok",
        "texto": "Marcha atlética é uma modalidade do atletismo onde se executa uma progressão de passos de maneira que o atleta sempre mantenha contacto com o solo com, pelo menos, um dos pés. A perna que avança tem de estar reta, (ou seja, não flexionada) desde o momento do primeiro contato com o solo até que se encontre em posição vertical.\n[…]\nAs provas de marcha atlética são disputadas na distância de 20 km, feminino, e 20 km e 50 km masculino, que se realizam normalmente em um circuito na rua de no mínimo 1 km e no máximo 2,5 km. A marcha é uma atividade em que a resistência e a técnica do atleta são fundamentais.\n[…]\nO regulamento estabelece que os juízes de marcha têm que avisar aos atletas que por sua forma de marchar correm o risco de cometer alguma falta, e para isso utilizam placas amarelas com o símbolo de uma possível infração. No julgamento de Marcha, quando um atleta comete infração é anotado no quadro de advertências um cartão vermelho correspondente a infração cometida. Quando três juízes diferentes mostram os cartões vermelhos a um atleta, o juiz chefe procede a sua desqualificação.\n[…]\nO maior nome da marcha atlética em todos os tempos é o do polonês Robert Korzeniowski, tetracampeão olímpico e tricampeão mundial, nas duas distâncias, entre 1996 e 2004.\n[…]\nCaio Bonfim é o único esportista brasileiro e também o único lusófono até os dias de hoje a obter uma medalha olímpica nesse esporte, feito obtido nas olimpíadas de Paris 2024 na modalidade de 20 km marcha .\n[…]\n20 km marcha\n[…]\n50 km marcha\n[…]\n«CBAt - Confederação Brasileira de Atletismo»\n[…]\n«Federação Portuguesa de Atletismo»\n[…]\n«Atletismo Master»\n[…]\n«MARCHADORES.COM»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Half-pipe",
      "descricao": "Pista de rampas curvas usada no skate, no snowboard e no BMX para manobras aéreas."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A pista de skate e snowboard chamada half-pipe tem o formato de qual letra?",
    "resposta": "U",
    "fonte": [
      "https://en.wikipedia.org/wiki/Half-pipe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Half-pipe",
        "situacao": "ok",
        "texto": "A half-pipe is a structure used in gravity extreme sports such as skateboarding, snowboarding, skiing, freestyle BMX, skating, and scooter riding.\n[…]\nHalf-pipe applications include leisure recreation, skills development, competitive training, amateur and professional competition, demonstrations, and as an adjunct to other types of skills training.\n[…]\nFor winter sports such as freestyle skiing and snowboarding, a half-pipe can be dug out of the ground or snow perhaps combined with snow buildup. The plane of the transition is oriented downhill at a slight grade to allow riders to use gravity to develop speed and facilitate drainage of melt. In the absence of snow, dug out half-pipes can be used by dirt-boarders, motorcyclists, and mountain bikers.\n[…]\nCreating a spine ramp is another variation of the half-pipe. A spine ramp is basically two quarter pipes connected at the vertical edge.\n[…]\nHalf-pipes in snow were originally done in large part by hand or with heavy machinery. Pipes were cut into snow using an apparatus similar to a grain auger. Colorado farmer Doug Waugh created the Pipe Dragon used in both the 1998 and 2002 Winter Olympics. One current method of half-pipe cutting is by use of a Zaugg Pipe Monster, which uses five snow-cutting edges to create an elliptical shape that is purportedly safer and allows the rider to gain more speed.\n[…]\nThe current world record for highest jump in a half-pipe is held by freestyle skier Joffrey Pollet-Villard. He set the record at the FIS Freestyle Ski and Snowboarding World Championships in 2015, when he achieved a height of 8.04 meters (26ft, 3in) above a 22-ft superpipe."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Halfpipe",
        "situacao": "ok",
        "texto": "O halfpipe é uma estrutura em forma de U destinada a prática de desportos radicais, como o skate, snowboarding, ski, patins em linha ou BMX. É uma estrutura côncava, pode ser feita de madeira, ferro e outros materiais, como também pode ser esculpido em áreas de neve e terra.\n[…]\nRecebe este nome, cuja tradução em inglês significa meio-tubo, por ter o formato de um cano (pipe, em inglês) cortado ao meio (half, metade em inglês).\n[…]\nVert: É onde se localiza a parte mais inclinada, com 90 graus, alguns Half Pipes possuem cerca de 2 metros de vert.\n[…]\nSkate",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Peteca",
      "descricao": "Jogo brasileiro de origem indígena em que se rebate com a mão um objeto de base pesada e penas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A peteca é um jogo de origem indígena. Em tupi, o que significa a palavra peteca?",
    "resposta": "Bater com a mão",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Peteca"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Peteca",
        "situacao": "ok",
        "texto": "Peteca (do verbo tupi petek, bater, espalmar) é o nome dado tanto a um esporte quanto ao artefato esportivo utilizado em sua prática, sendo ambos de origem indígena brasileira.\n[…]\nO nome \"peteca\" vem do verbo petek do tupi e significa \"esbofetear, golpear com a mão espalmada\", junto com um -a final, que é um sufixo substantivador. No tupi moderno, ou nheengatu, falado atualmente em regiões da Amazônia, o verbo petek ainda é bastante usado, sendo elemento de várias composições e verbos derivados.\n[…]\nA forma de início do jogo é semelhante à do vôlei: Um jogador deve se posicionar atrás da linha de fundo e sacar a peteca, fazendo com que ela atravesse a rede e chegue ao campo da equipe adversária;\n[…]\nCoube a Minas Gerais a primazia de dar-lhe o formato da peteca típica de jogo, com quatro penas brancas presas a uma base e conectadas a um fundo feito com diversas camadas finas de borracha. Foi também em Minas Gerais que as regras do jogo foram criadas, assim como foi também no estado que surgiram as primeiras quadras e a prática ganhou sentido competitivo, com campeonatos internos em diversos clubes de Belo Horizonte.\n[…]\nEm 26 de maio de 2000, foi fundada uma federação mundial em Berlim que recebeu o nome de International Indiaca Association(IAA) (Associação Internacional de Indiaca, nome internacional da peteca). Essa federação se propôs como objetivo regulamentar as diferentes formas do jogo e promover torneios internacionais da modalidade. As maiores federações nacionais do esporte se encontram na Alemanha e Japão, mas também são membros da IAA: Suíça, Estônia, Eslováquia, Brasil e Luxemburgo.\n[…]\nFETOPE - Federação Tocantinense de Peteca"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Base goofy",
      "descricao": "Posição nos esportes de prancha em que o praticante vai com o pé direito à frente."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No surfe e no skate, a base com o pé direito à frente tem o nome inglês de um personagem da Disney que surfou assim em 1937. Qual?",
    "resposta": "Pateta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Goofy",
      "https://en.wikipedia.org/wiki/Hawaiian_Holiday"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Goofy",
        "situacao": "ok",
        "texto": "Goofy is a cartoon character created by the Walt Disney Company. He is a tall, anthropomorphic dog who typically wears a turtle neck and vest, with pants, shoes, white gloves, and a tall hat originally designed as a rumpled fedora. Goofy is a close friend of Mickey Mouse and Donald Duck, and is Max Goof's father.\n[…]\nPinto Colvig had a falling out with Disney in 1937 and left the studio, leaving Goofy without a voice. Kinney recalls \"so we had to use whatever was in the library; you know, his laugh and all those things. But he did have a hell of a library, of different lines of dialogue\". In addition, the studio had voice artist Danny Webb record new dialog. Kinney also paired Goofy with a narrator voiced by John McLeish: \"He had this deep voice, just a great voice, and he loved to recite Shakespeare.\n[…]\nHal Smith began voicing Goofy in 1967 after Pinto Colvig's death and voiced him until Mickey's Christmas Carol in 1983. Walker Edmiston voiced Goofy in the Disneyland record album An Adaptation of Dickens' Christmas Carol, Performed by The Walt Disney Players in 1974. Tony Pope voiced Goofy in the 1979 Disney album Mickey Mouse Disco for the song, \"Watch Out for Goofy\". He then voiced him in Sport Goofy in Soccermania in 1987 and Who Framed Roger Rabbit in 1988.\n[…]\nJack Wagner voiced Goofy and other Disney characters in the 1980s, primarily for live entertainment offerings in the parks, Disney on Ice shows, and live-action clips for television. Will Ryan did the voice for DTV Valentine in 1986 and Down and Out with Donald Duck in 1987. In the 2021 The Simpsons short Plusaversary (made to celebrate the 2nd anniversary of Disney+), Goofy was voiced by Hank Azaria.\n[…]\nDisney's bio of Goofy\n[…]\nGoofy on IMDb\n[…]\nGoofy at Don Markstein's Toonopedia. Archived[link removed] from the original on August 28, 2016."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hawaiian_Holiday",
        "situacao": "ok",
        "texto": "Hawaiian Holiday is a 1937 American animated short film produced by Walt Disney Productions and released by RKO Radio Pictures. The cartoon stars an ensemble cast of The Fabulous Five (Mickey Mouse, Minnie Mouse, Donald Duck, Goofy, and Pluto) while vacationing in Hawaii (at the time was an organized incorporated territory of the United States).\n[…]\nThe film was directed by Ben Sharpsteen, produced by John Sutherland and features the voices of Walt Disney as Mickey, Marcellite Garner as Minnie, Clarence Nash as Donald, and Pinto Colvig as Goofy and Pluto. It was Disney's first film to be released by RKO, ending a five-year distributing partnership with United Artists.\n[…]\nGoofy tries his luck with the waves again and is actually able to get a swell, but it breaks beneath him and washes his board away. As Goofy searches underwater for his board, another wave comes it and drives his board into his pants, leaving him struggling to get it out.\n[…]\nMeanwhile, Goofy tries one last time to catch a wave successfully, but the wave throws him off his board, hits him with it, and catapults him into the sand where he is stopped by his board, making it look as if it was his grave. Mickey, Minnie and Donald laugh at him, and when he pops out unharmed and happy, they continue enjoying their holiday.\n[…]\nWalt Disney as Mickey Mouse\n[…]\nPinto Colvig as Goofy and Pluto\n[…]\n1937 - theatrical release\n[…]\n1956 - Disneyland, episode #2.22: \"On Vacation\" (TV)\n[…]\n1997 - The Ink and Paint Club, episode #1.10: \"Mickey, Donald & Goofy: Friends to the End\" (TV)\n[…]\nThe short was released on December 4, 2001 on Walt Disney Treasures: Mickey Mouse in Living Color.\n[…]\n1978 - \"Walt Disney Presents On Vacation with Mickey Mouse and Friends\" (Discovision Laserdisc #D61-503)\n[…]\n2019 - Disney+\n[…]\nHawaiian Holiday on YouTube (official posting by Walt Disney Animation Studios)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pateta",
        "situacao": "ok",
        "texto": "Pateta (em inglês, Goofy) é um personagem de animação dos Estúdios Walt Disney criado em 1932. Ele é um cão antropomórfico da raça Bloodhound de aparência magra, esguia, alta, e desengonçada. É conhecido pelo público por seu jeito atrapalhado, engraçado e bondoso e por seu chapéu singular. Seu nome seria um apelido, pois nos curtas dos anos 50 e 60 era chamado \"George Geef\" ou \"G. G. Goof\". Fontes\n[…]\nPorém, o que parecia ser apenas um personagem mediano num papel insignificante acabou por levá-lo às graças de Walt Disney, justamente por sua risada característica, desenvolvida junto a Pinto Colvig (roteirista e palhaço), com quem trabalharia até 1965. A partir de então, Pateta começa a participar de um número cada vez maior de trabalhos e, rapidamente, torna-se um dos melhores amigos de Mickey Mouse.\n[…]\nEnquanto Dippy Dawg, o personagem atuou sempre como coadjuvante. Em 1934, porém, ao aparecer em \"The Orphan´s Benefit\", fixa sua imagem como personagem oficial do primeiro escalão da Turma do Mickey e muda seu nome para Goofy. Contudo, foi apenas no dia 17 de março de 1939 que Pateta conseguiu seu primeiro trabalho solo. É a animação \"Goofy and Wilbur\", dirigida por Dick Huemer. A história girava em torno de Pateta e seu animal de estimação Wilbur, um gafanhoto, em um dia de pescaria.\n[…]\nCom grande popularidade, Pateta tem sido presença constante nos quadrinhos Disney no Brasil. Devido a popularidade dos seus desenhos em que ensina a praticar esportes e que sempre são exibidos na TV, ele foi escolhido pelos artistas brasileiros como o protagonista da primeira história Disney especial publicada pela Editora Abril (de mais de 30 páginas e na qual aparecem todos os personagens Disney de destaque, exceto os clássicos históricos) sobre as Olimpíadas.\n[…]\n\"A Turma do Pateta\"\n[…]\n\"Pateta - O Filme\"(1995)\n[…]\n\"Pateta 2 - Radicalmente Pateta\"(2000)\n[…]\n\"Mickey, Donald e Pateta - Os Três Mosqueteiros\"(2004)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Snooker",
      "descricao": "Modalidade de bilhar com vinte e duas bolas, que deu origem à sinuca brasileira."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome snooker vem de uma gíria do exército britânico. A quem ela se referia?",
    "resposta": "Cadetes novatos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Snooker"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Snooker",
        "situacao": "ok",
        "texto": "Snooker (pronounced UK:  SNOO-kər, US:  SNUUK-ər) is a cue sport played on a rectangular billiards table covered with a green cloth called baize, with six pockets: one at each corner and one in the middle of each long side. First played by British Army officers stationed in India in the second half of the 19th century, the game is played with 22 balls: a white cue ball, 15 reds and six colours – y\n[…]\nSinuca brasileira (or \"Brazilian snooker\") is a variant of snooker played exclusively in Brazil, with fully divergent rules from the standard game and using only one red ball instead of fifteen. At the start of the game, the single red is positioned halfway between the pink ball and the side cushion, and the break-off shot cannot be used to pot the red or place the opponent in a snooker.\n[…]\nEverton, Clive (1986). The History of Snooker and Billiards (1st ed.). Haywards Heath: Partridge Press. ISBN 1-85225-013-5.\n[…]\nGadsby, Paul; Williams, Luke (2005). Masters of the Baize: Cue Legends, Bad Boys and Forgotten Men in Search of Snooker's Ultimate Prize. Edinburgh: Mainstream Publishing. ISBN 978-1-84018-872-1.\n[…]\nHayton, Eric N.; Dee, John (2004). The CueSport Book of Professional Snooker: The Complete Record & History. Lowestoft: Rose Villa Publications. ISBN 978-0-9548549-0-4.\n[…]\nMcCann, Liam (2013). Snooker: Player by Player. Woking: Demand Media. ISBN 978-1-90921-745-4.\n[…]\nMorrison, Ian (1987). The Hamlyn Encyclopedia of Snooker (Revised ed.). Twickenham: Hamlyn. ISBN 978-0-600-55604-6.\n[…]\nMorrison, Ian (1989). Snooker: Records, Facts and Champions. Enfield: Guinness Superlatives. ISBN 978-0-85112-364-6.\n[…]\nPeall, Arthur F. (2017) [1928]. Billiards and Snooker (Reprint ed.). Barzun Press. ISBN 978-1-44552515-0.\n[…]\nWorld Snooker Tour\n[…]\nWorld Professional Billiards & Snooker Association\n[…]\nWorld Women's Snooker\n[…]\nWorld Disability Billiards and Snooker\n[…]\nWorld Seniors Snooker\n[…]\nInternational Billiards & Snooker Federation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sinuca_inglesa",
        "situacao": "ok",
        "texto": "A sinuca inglesa ou sinuca internacional (em inglês: snooker)) é um jogo de mesa e taco (bilhar) muito popular sobretudo no Reino Unido e Irlanda e em outros países da Commonwealth. Possui também grande adesão em países asiáticos como a China e a Tailândia. O organismo internacional de regulação do jogo é a World Professional Billiards and Snooker Association (WPBSA).\n[…]\nA sinuca inglesa é geralmente vista como tendo a sua origem nos oficiais do Exército Britânico que estavam de serviço na Índia Britânica. Hoje em dia os profissionais de topo auferem prémios elevadíssimos ao longo da sua carreira, e muitos ultrapassam o milhão de libras.\n[…]\nÉ habitualmente aceite a hipótese de origem da sinuca inglesa na segunda metade do século XIX. O bilhar sempre fora um jogo popular entre os oficiais do Exército Britânico colocados na Índia, e aí terão desenvolvido variantes dos mais tradicionais jogos de bilhar. Uma variante, desenvolvida na mesa dos oficiais em Jabalpur em 1874 ou 1875, era adicionar bolas coloridas às vermelhas e negra que eram usadas no pyramid pool e life pool.\n[…]\nO termo snooker tem também origens militares, sendo um termo de calão para os cadetes do primeiro ano e para pessoal inexperiente na vida militar. Uma versão dos acontecimentos afirma que o Coronel Sir Neville Chamberlain do regimento de Devonshire estava a jogar este novo entretenimento quando o seu opositor falhou a colocação de uma bola e Chamberlain chamou-lhe snooker. Ficou assim o nome associado ao jogo de bilhar porque os jogadores com pouca prática eram chamados de snookers.\n[…]\nNome dado a um modo de jogo de snooker, ou bilhar, ou sinuca, no qual podem jogar até 7 jogadores em uma única mesa.\n[…]\n«World Snooker Association» (em inglês)\n[…]\n«International Billiards & Snooker Federation (IBSF)» (em inglês)\n[…]\n«Versão online desse jogo de sinuca (obedecendo as mesmas regras)»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Hat-trick",
      "descricao": "Expressão esportiva para três feitos seguidos de um mesmo atleta, como três gols numa partida, nascida no críquete."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A expressão hat-trick nasceu no críquete do século dezenove. O arremessador que eliminava três batedores seguidos ganhou o quê?",
    "resposta": "Um chapéu",
    "distratores": [
      "Uma bengala",
      "Uma medalha",
      "Um par de luvas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hat-trick"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hat-trick",
        "situacao": "ok",
        "texto": "A hat-trick or hat trick is the achievement of a generally positive feat three times in a match, or another achievement based on the number three.\n[…]\nIn handball, if a player scores thrice in a game, a hat-trick is made.\n[…]\nA Gordie Howe hat trick is a tongue-in-cheek play on the feat. It is achieved by scoring a goal, getting an assist, and getting into a fight, all in the same game. Namesake Gordie Howe himself only recorded two in his NHL career. Rick Tocchet accomplished the feat 18 times in his career, the most in NHL history.\n[…]\nEddie O'Brien scored a hat-trick for Cork against Wexford in the 1970 All-Ireland Senior Hurling Championship final.\n[…]\nLar Corbett scored a hat-trick for Tipperary in the 2010 All-Ireland Senior Football Championship final to deny Kilkenny what would have been a record-breaking fifth consecutive title.\n[…]\nShane O'Donnell scored a first-half hat-trick for Clare against Cork in the 2013 All-Ireland Senior Hurling Championship replay, despite not featuring at all in the drawn game.\n[…]\nIn lacrosse, like other sports with goal scoring, hat tricks occur when a player scores three goals in one game. Fans rarely throw hats onto the playing surface to acknowledge them due to their frequent occurrences in a game. When a player scores six goals in one game, it is referred to as a sock trick.\n[…]\nIn motor racing, three successive race wins, winning the same event three times in a row, or securing pole position, fastest lap and race victory in one event may all be referred to as a hat-trick.\n[…]\nIn water polo, if a player scores thrice in a game, a hat-trick is scored."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Triplete_%28desportos%29",
        "situacao": "ok",
        "texto": "Um triplete, também conhecido pelo seu nome em inglês hat-trick, é associado com algum feito positivo que ocorre três vezes dentro de uma partida em algum esporte.\n[…]\nNa era vitoriana, o termo \"hat-trick\" referia-se a um comum truque de magia, no qual o mágico aparecia envergando uma cartola. O truque consistia em colocar a cartola, com a abertura virada para cima, sobre uma mesa próxima. Depois, o mágico retiraria três coelhos, um depois do outro, de dentro da cartola.[carece de fontes]? Nos tempos modernos, esta expressão é muito utilizada como referência à marcação de três pontos num só encontro, tanto em futebol como em outras modalidades.\n[…]\nNo beisebol, quando um batedor é eliminado por strikes três vezes num único jogo, é, às vezes, jocosamente referido como um hat-trick. Quatro strikeouts num jogo são referidos como um \"sombreiro dourado\" (golden sombrero), e seis são conhecidos como um Horn, após Sam Horn, do Baltimore Orioles, ter conseguido a façanha num jogo de entradas extras em 1991. Alex S. Gonzalez, do Toronto Blue Jays, empatou o recorde em 1998.\n[…]\nNo hóquei no gelo, o hat-trick é quando um mesmo jogador marca três gols numa mesma partida. Se os gols são consecutivos, sem sequer um gol adversário entre eles, tem-se o chamado hat-trick natural. É comum em jogos da NHL que hat-tricks sejam seguidos por uma \"chuva\" de chapéus e bonés arremessados por torcedores. Em Pittsburgh, os bonés são recolhidos por uma tropa de escoteiros, que os distribui a entidades assistenciais para doação.\n[…]\nEm ambas as regras de rugby (Rugby union e Rugby league) um hat-trick é feito quando um jogador converte três ou mais ensaios em um só jogo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Frisbee",
      "descricao": "Disco plástico de arremesso, usado em brincadeiras e no esporte ultimate."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O disco Frisbee herdou o nome de uma padaria americana. Estudantes arremessavam as formas vazias de que produto dela?",
    "resposta": "Tortas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Frisbee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Frisbee",
        "situacao": "ok",
        "texto": "A  frisbee (pronounced  FRIZ-bee), also called a flying disc or simply a disc, is a gliding toy or sporting item generally made of injection-molded plastic and roughly 20 to 25 centimetres (8 to 10 in) in diameter with a pronounced lip. It is used recreationally and competitively for throwing and catching, as in flying disc games.\n[…]\nFrisbees were invented in the late 1930s by the American inventor Walter Frederick Morrison. Morrison and his future wife Lucile had fun tossing a popcorn can lid after a Thanksgiving Day dinner in 1937. They soon discovered a market for a light-duty flying disc when they were offered 25 cents (equivalent to $6 in 2025) for a cake pan that they were tossing back and forth on a beach near Los Angeles.\n[…]\nHeadrick became known as the father of Frisbee sports; he founded the International Frisbee Association and soon after recruited Harvey J. Kukuk (a shared persona often portrayed as a real person) from Eagle Harbor to serve as Executive Director. In 1975 he appointed Dan Roddick as its head. Roddick began establishing North American Series (NAS) tournament standards for various Frisbee sports, such as Freestyle, Guts, Double Disc Court, and overall events.\n[…]\nThe IFT guts competitions in Northern Michigan, the Canadian Open Frisbee Championships (1972), Toronto, Ontario, the Vancouver Open Frisbee Championships (1974), Vancouver, British Columbia, the Octad (1974), New Jersey, the American Flying Disc Open (1974), Rochester, New York, and the World Frisbee Championships (1974), Pasadena, California, are the earliest Frisbee competitions that presented the Frisbee as a new disc sport.\n[…]\nBefore these tournaments, the Frisbee was considered a toy and used for recreation.\n[…]\nHistory of Frisbee and Disc Sports\n[…]\nAll Frisbee Throw and catch techniques"
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
    "indice": 34,
    "ancora": {
      "nome": "Duke Kahanamoku",
      "descricao": "Nadador havaiano, campeão olímpico em 1912 e 1920, divulgador do surfe pelo mundo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Campeão olímpico de natação em 1912, o havaiano Duke Kahanamoku ajudou a popularizar pelo mundo qual esporte tradicional de sua terra?",
    "resposta": "Surfe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Duke_Kahanamoku"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Duke_Kahanamoku",
        "situacao": "ok",
        "texto": "Duke Paoa Kahinu Mokoe Hulikohola Kahanamoku (August 24, 1890 – January 22, 1968) was a Hawaiian competition swimmer, lifeguard, and popularizer of the sport of surfing. A Native Hawaiian, he was born three years before the overthrow of the Hawaiian Kingdom. He lived to see the territory's admission as a state and became a United States citizen.\n[…]\n\"Duke\" was not a title or a nickname, but a given name. He was named after his father, Duke Halapu Kahanamoku, who was christened by Bernice Pauahi Bishop in honor of Prince Alfred, Duke of Edinburgh, who was visiting Hawaii at the time. His father was a policeman. His mother Julia Paʻakonia Lonokahikina Paoa was a deeply religious woman with a strong sense of family ancestry.\n[…]\nBetween Olympic competitions, and after retiring from the Olympics, Kahanamoku traveled internationally to give swimming exhibitions. It was during this period that he popularized the sport of surfing, previously known only in Hawaii, by incorporating surfing exhibitions into his touring exhibitions as well. He attracted people to surfing in mainland America first in 1912 while in Southern California. He trained and loaned equipment to new surfers, such as Dorothy Becker.\n[…]\nHawaii music promoter Kimo Wilder McVay capitalized on Kahanamoku's popularity by naming his Waikiki showroom \"Duke Kahanamoku's\" at the International Market Place and giving Kahanamoku a financial interest in the showroom in exchange for the use of his name. It was a major Waikiki showroom in the 1960s and is remembered as the home of Don Ho & The Aliis from 1964 through 1969.\n[…]\nDuke Paoa Kahanamoku Lagoon\n[…]\nImage of Duke Kahanamoku surfing in Los Angeles, California, circa 1920. Los Angeles Times Photographic Archive (Collection 1429). UCLA Library Special Collections, Charles E. Young Research Library, University of California, Los Angeles."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Duke_Kahanamoku",
        "situacao": "ok",
        "texto": "Duke Kahanamoku (Oahu, 24 de agosto de 1890 — Honolulu, 22 de janeiro de 1968) foi um nadador, ator e surfista havaiano.\n[…]\nEle foi um dos idealizadores do surf moderno. Foi nos Jogos Olímpicos de Verão de 1912 em Estocolmo, como nadador, que começou a conquistar suas glórias olímpicas, que continuaram durante a Primeira Guerra Mundial e foram testadas mais uma vez nos Jogos Olímpicos de Verão de 1920 em Antuérpia e 1924 em Paris. No total, foram 5 medalhas conquistadas, sendo três de ouro e duas de prata.\n[…]\nDuke largou a carreira de desportista depois dos Jogos de 1924, mas no Havaí continuou muito famoso. Ele transformou o arquipélago, até o momento pouco conhecido, no lar mundialmente famoso do surf.\n[…]\nAntes de morrer, em 1968, ainda foi estrela de cinema e lançou uma grife de surfistas. Por sua causa, o surf espalhou-se pelo mundo e tornou-se um desporto muito praticado e famoso.\n[…]\nNos Jogos Olímpicos da Antuerpia-1920, Kahanamoku, então com 30 anos, tornou-se o nadador mais velho a ganhar uma medalha de ouro olímpica em provas individuais da natação. Este recorde só seria superado 96 anos depois, por Michael Phelps, que conquistou um ouro com 31 anos e 40 dias.\n[…]\nDuke Kahanamoku no IMDB",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Adhemar Ferreira da Silva",
      "descricao": "Atleta brasileiro do salto triplo, campeão olímpico em 1952 e 1956."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Bicampeão olímpico do salto triplo, Adhemar Ferreira da Silva atuou em qual filme, vencedor da Palma de Ouro em 1959?",
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
    "indice": 36,
    "ancora": {
      "nome": "Benjamin Spock",
      "descricao": "Pediatra americano, autor de um best-seller sobre cuidados com bebês e campeão olímpico em 1924."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O pediatra americano Benjamin Spock, autor de um best-seller sobre bebês, foi campeão olímpico em 1924 em qual esporte?",
    "resposta": "Remo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Benjamin_Spock"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Benjamin_Spock",
        "situacao": "ok",
        "texto": "Benjamin McLane Spock (May 2, 1903 – March 15, 1998), widely known as Dr. Spock, was an American pediatrician, Olympic medalist, and left-wing political activist. His book Baby and Child Care (1946) is one of the best-selling books of the 20th century, selling 500,000 copies in the six months after its initial publication and 50 million by the time of Spock's death in 1998.\n[…]\nIn 1946, Spock published The Common Sense Book of Baby and Child Care, which became a best-seller. Its message to parents is \"You know more than you think you do.\" By 1998, it had sold more than 50 million copies, and had been translated into 42 languages. According to The New York Times, Baby and Child Care was, throughout its first 52 years, the second-best-selling book, next to the Bible.\n[…]\nIn 1970, Dr. Benjamin Spock was active in The New Party serving as Honorary co-chairman with Gore Vidal.\n[…]\nSpock addressed these accusations in the first chapter of his 1994 book, Rebuilding American Family Values: A Better World for Our Children.\n[…]\nIn June 1992, Spock told Associated Press journalist David Beard there was a link between pediatrics and political activism: People have said, \"You've turned your back on pediatrics.\" I said, \"No. It took me until I was in my 60s to realize that politics was a part of pediatrics.\"\n[…]\nSpock was part of the all-Yale men's eight rowing team at the 1924 Summer Olympics, captained by James Rockefeller (later president of what would become Citigroup). Competing on the Seine, the team won the gold medal.\n[…]\nMaier, Thomas (1998). Doctor Spock: An American Life. New York: Houghton Mifflin Harcourt. ISBN 978-0151002030.\n[…]\nBenjamin Spock at IMDb\n[…]\nBenjamin Spock and Mary Morgan Papers at Syracuse University\n[…]\nAudio: Benjamin Spock speech at UC Berkeley Vietnam Teach-In, 1965 (in RealAudio and via UC Berkeley Media Resources Center)\n[…]\nBenjamin Spock at Find a Grave"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Benjamin_Spock",
        "situacao": "ok",
        "texto": "Benjamin McLane Spock (New Haven, 2 de maio de 1903 — La Jolla, 15 de março de 1998) foi um médico pediatra estadunidense, e campeão olímpico.\n[…]\nSpock foi o primeiro pediatra a estudar psicanálise para tentar entender as necessidades das crianças e a dinâmica familiar. Suas ideias sobre cuidados infantis influenciaram várias gerações de pais a serem mais flexíveis e afetuosos com seus filhos e a tratá-los como indivíduos. No entanto, suas teorias também foram amplamente criticadas por colegas por se basearem demais em evidências anedóticas, em vez de pesquisas acadêmicas sérias.\n[…]\nSpock defendeu que os bebês não deveriam ser colocados de costas ao dormir, comentando em sua edição de 1958 que \"se [um bebê] vomitar, é mais provável que ele engasgue com o vômito\". Este conselho foi extremamente influente nos prestadores de cuidados de saúde, com apoio quase unânime até a década de 1990.\n[…]\nNo entanto, na revisão de 1976 de Baby and Child Care, ele concordou com uma força-tarefa da Academia Americana de Pediatria de 1971 de que não havia razão médica para recomendar a circuncisão de rotina e, em um artigo de 1989 para a revista Redbook, ele afirmou que \"a circuncisão de homens é traumática, doloroso e de valor questionável.\" Ele recebeu o primeiro Prêmio de Direitos Humanos do Simpósio Internacional de Circuncisão (ISC) em 1991.\n[…]\nDr. Spock's the School Years: The Emotional and Social Development of Children 01 Edition (2001)\n[…]\nSpock foi um dos participantes da embarcação para oito competidores que conquistou a medalha de ouro nas provas de remo nas Olimpíadas de 1924 em Paris.\n[…]\nFotografia do Dr. Spock\n[…]\nBenjamin Spock no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Croqué",
      "descricao": "Jogo de gramado em que os jogadores batem bolas com malhos, fazendo-as passar por arcos fincados no chão."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Alice no País das Maravilhas, a Rainha de Copas joga croqué usando flamingos como tacos. Que animais fazem o papel de bolas?",
    "resposta": "Ouriços",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland",
        "situacao": "ok",
        "texto": "Alice's Adventures in Wonderland (also known as  Alice in Wonderland) is an 1865 English children's novel by Lewis Carroll. It tells the story of a little girl named Alice who falls through a rabbit hole into a fantasy world of anthropomorphic creatures. It is seen as an example of the literary nonsense genre. The artist John Tenniel provided 42 wood-engraved illustrations for the original edition\n[…]\nNoticing a door in a tree, Alice passes through and finds herself back in the room from the beginning of her journey. She takes the key and opens the door to the garden, which turns out to be the croquet court of the Queen of Hearts, whose guard consists of living playing cards. Alice participates in a croquet game, in which hedgehogs are used as balls, flamingos are used as mallets, and soldiers act as hoops. The Queen is short-tempered, constantly ordering beheadings.\n[…]\nMusical works inspired by Alice include the Beatles's song \"Lucy in the Sky with Diamonds\"; songwriter John Lennon attributed the song's fantastical imagery to his reading of Carroll's books. Argentine prog-rock band Seru Giran used Alice as a metaphor to represent the political climate in Argentina during the 1970s in their song \"Canción de Alicia en el país\".\n[…]\n(1886) Alice's Adventures Under Ground at Project Gutenberg\n[…]\n(1907) Alice's Adventures in Wonderland at Project Gutenberg\n[…]\n(1916) Alice's Adventures in Wonderland at Project Gutenberg\n[…]\nAlice's Adventures in Wonderland at Standard Ebooks\n[…]\nAlice's Adventures in Wonderland public domain audiobook at LibriVox\n[…]\nAlice's Adventures Underground public domain audiobook at LibriVox\n[…]\nTo all child-readers of \"Alice's adventures in Wonderland\" (Christmas 1871)\n[…]\nAlice in Wonderland: coloured lantern slides, 1910-1919\n[…]\n\"3 square blue boxes, each with 8 glass lantern slides and leaflet with abridged excerpt from 'Alice', 24 slides & 3 leaflets all\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alice_no_Pa%C3%ADs_das_Maravilhas",
        "situacao": "ok",
        "texto": "As Aventuras de Alice no País das Maravilhas, frequentemente abreviado para Alice no País das Maravilhas (Alice in Wonderland) é a obra infantil mais conhecida de Charles Lutwidge Dodgson, publicada a 4 de julho de 1865 sob o pseudônimo de Lewis Carroll. É uma das obras mais célebres do gênero literário nonsense.\n[…]\nEntretanto é convidada (ou ordenada) para jogar uma partida de críquete com a Rainha e o resto dos seus súbitos. Porém rapidamente instala-se o caos durante o jogo. São utilizados flamingos vivos como marretas, ouriços como bolas e cartas vivas como balizas. Na confusão Alice vê, para seu agrado, o Gato de Cheshire.\n[…]\nAlice  derruba acidentalmente os jurados e à ordem do Rei, os animais terão de ser colocados de volta aos seus lugares antes do julgamento continuar. Depois o Rei cita um artigo do seu caderno (Todas as pessoas mais de uma milha de altura devem deixar o órgão), mas Alice contesta a validade da restrição e recusa-se a sair. É provocada assim uma discussão de Alice com o Rei e com a Rainha de Copas, enfatizando as atitudes ridículas cometidas durante todo julgamento.\n[…]\nOnce Upon A Time In Wonderland - Série do canal ABC onde Alice cresce e é internada em um hospício por afirmar que foi a um lugar estranho (correspondente ao País das Maravilhas), sendo depois salva pelo Valete de Copas e pelo Coelho Branco, que a ajudam a encontrar seu verdadeiro amor, um gênio da lâmpada chamado Cyrus. Foi realizado pelos mesmos criadores de Once Upon A Time.\n[…]\nAlice no País das Maravilhas (filme de 2010)\n[…]\nCarroll, Lewis (2024). As Aventuras de Alice no País das Maravilhas. [S.l.]: Compêndio Nerd. ISBN 978-65-00-29866-6\n[…]\nLewis Carroll (2007). Alice no País das Maravilhas. [S.l.]: MARTIN CLARET. ISBN 85-7232-618-9\n[…]\nAlice no País das Maravilhas (em PDF) no site Biblioteca Mundial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Maratona",
      "descricao": "Corrida de longa distância do atletismo, com percurso oficial de 42,195 quilômetros."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A distância oficial da maratona vem dos Jogos de Londres, em 1908. O percurso saiu do Castelo de Windsor e terminou diante de quê, no estádio?",
    "resposta": "Do camarote real",
    "fonte": [
      "https://en.wikipedia.org/wiki/Marathon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marathon",
        "situacao": "ok",
        "texto": "The marathon is a long-distance foot race with a distance of 42.195 kilometres (c. 26.22 mi), usually run as a road race, but the distance can be covered on trail routes. The marathon can be completed by running or with a run/walk strategy. There are also wheelchair divisions. More than 800 marathons are held worldwide each year, with the vast majority of competitors being recreational athletes, a\n[…]\nThe Boston Marathon began on 19 April 1897 and was inspired by the success of the first marathon competition in the 1896 Summer Olympics. It is the world's oldest annual marathon and ranks as one of the world's most prestigious road racing events. Its course runs from Hopkinton in southern Middlesex County to Boylston Street in Boston. Johnny Hayes' victory at the 1908 Summer Olympics also contributed to the early growth of long-distance running and marathoning in the United States.\n[…]\nThe International Olympic Committee agreed in 1907 that the distance for the 1908 London Olympic marathon would be about 25 miles or 40 kilometers. The organizers decided on a course of 26 miles from the start at Windsor Castle to the royal entrance to the White City Stadium, followed by a lap (586 yards 2 feet; 536 m) of the track, finishing in front of the Royal Box.\n[…]\nThe modern 42.195 km (26.219 mi) standard distance for the marathon was set by the International Amateur Athletic Federation (IAAF) in May 1921 directly from the length used at the 1908 Summer Olympics in London.\n[…]\nThe current world record time for men over the distance is 1 hour, 59 minutes, and 30 seconds, set in the London Marathon by Sabastian Sawe of Kenya on 26 April 2026.\n[…]\nIn 2015 the Mars rover Opportunity attained the distance of a marathon from its starting location on Mars. The valley where it achieved this distance was named Marathon Valley, which it then explored.\n[…]\nPhysiology of marathons\n[…]\nIAAF list of marathon records in XML"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maratona",
        "situacao": "ok",
        "texto": "Maratona é uma corrida realizada na distância oficial de 42,195 km, normalmente em ruas e estradas. Única modalidade esportiva que se originou de uma lenda, seu nome foi instituído como uma homenagem à antiga lenda grega do soldado ateniense Fidípides, um mensageiro do exército de Atenas, que teria corrido 42 km entre o campo de batalha de Maratona até Atenas para anunciar aos cidadãos da cidade a\n[…]\nSeja como for, cerca de 2 400 anos mais tarde, em 1896, quando da criação dos primeiros Jogos Olímpicos da Era Moderna, Fidípides foi homenageado com a criação dessa prova, cuja distância foi estipulada em cerca de 40 km — a distância aproximada de Maratona a Atenas — mas que desde 1921 tornou-se oficialmente de 42,195 km, depois de ser disputada nesta distância em Londres 1908.\n[…]\nCom a largada marcada para ser em frente ao Castelo de Windsor e a linha de chegada em frente ao camarote real no Estádio Olímpico de White City, depois de uma volta inteira na pista de atletismo, o percurso inteiro mediu exatos 42,195 km. Disputada pela primeira vez nesta distância em Londres, acabou sendo assim oficializada em maio de 1921, pela Federação Internacional de Atletismo.\n[…]\nOficialmente, a IAAF reconhece a inglesa Violet Piercy como tal, que com sua marca extra-oficial de 3:40:22 na Polytechnic Marathon, entre Londres e Windsor, na Inglaterra de 1926, seria a primeira recordista mundial da distância para mulheres. Antes do reconhecimento da maratona como prova olímpica e prova oficial da IAAF, a norueguesa Grete Waitz quebrou por quatro vezes o recorde mundial.\n[…]\nA Maratona de Londres é disputada em dois hemisférios, ocidental e oriental, pois a cidade é cruzada pelo Meridiano de Greenwich, e o percurso da Detroit Free Press Marathon, nos Estados Unidos, cruza por duas vezes a fronteira entre o Canadá e os Estados Unidos.\n[…]\nMeia-maratona\n[…]\nMarathon42K — Maratona Ranking & Calendário",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Boliche",
      "descricao": "Boliche de dez pinos, jogo em que se rola uma bola pesada por uma pista para derrubar dez pinos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo uma explicação popular, o boliche americano ganhou um décimo pino no século dezenove para driblar o quê?",
    "resposta": "A proibição do jogo de nove pinos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ten-pin_bowling",
      "https://en.wikipedia.org/wiki/Nine-pin_bowling"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ten-pin_bowling",
        "situacao": "ok",
        "texto": "Tenpin bowling is a type of bowling in which a bowler rolls a bowling ball down a wood or synthetic lane toward ten pins positioned evenly in four rows in an equilateral triangle. The goal is to knock down all ten pins on the first delivery (a strike), or failing that, on the second delivery (a spare). While many people approach modern tenpin bowling simply as a recreational pastime, competitive b\n[…]\nSchool sport programs expanded, the USBC stating that more than 5,000 high schools offered bowling as a competitive sport, with 50,000 student bowlers participating in 2009–2010. In 2011, the Bowling Proprietor's Association of America stated that more than 60% of U.S. bowlers were under age 34, that 46% were girls and women, and that children participated in bowling at a higher rate than any other population group.\n[…]\nthe American Bowling Congress (ABC, an originally male-only organization founded in 1895),\n[…]\nIn the decade of the 2000s, the World Ranking Masters, owned by World Bowling, ranked standings in the Pan American Bowling Confederation (PABCON), Asian Bowling Federation (ABF), and European Tenpin Bowling Federation (ETBF).\n[…]\nWhat is believed to be the first bowling video game was released in the 1977, a built-in provided with the RCA Studio II console. A pseudo-3D game was released in 1982 for the Emerson Arcadia 2001 console, and a multi-player game was released by SNK in 1991, almost a decade before convincing 3D graphics arrived. Wii Sports, which was released in 2006, includes a bowling game for the 3D-motion-controlled console, and mobile-device bowling games have since become increasingly popular.\n[…]\nGlossary of bowling\n[…]\nList of world bowling champions\n[…]\nVogel, A. F. (December 1892). \"Bowling\" (PDF). Spalding's Athletic Library. Vol. 1, no. 3. New York: American Sports Publishing Company. Archived from the original (PDF) on March 27, 2020. Retrieved December 12, 2020."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nine-pin_bowling",
        "situacao": "ok",
        "texto": "Nine-pin bowling (also known as ninepin bowling, nine-pin,  kegel, or kegeln) is a bowling game played primarily in Europe. European championships are held each year. In Europe overall, there are some 130,000 players. Nine-pin bowling lanes are mostly found in Austria, Czech Republic, Slovakia, Belgium, Germany, Luxembourg, the Netherlands, Estonia, Switzerland, Serbia, Slovenia, Croatia, Poland, \n[…]\nIn English-speaking countries, where 10-pin bowling is dominant, facilities for nine-pin bowling are relatively uncommon, though it remains popular in areas such as the Barossa Valley in South Australia where many German people settled in the 19th century. In Australia, it predates 10-pin bowling. A modified version is played in the American state of Texas.\n[…]\nStandardized rules and organization of nine-pins were developed by the American Bowling Congress in 1895. Nine-pins was the most popular form of bowling in much of the United States from colonial times until the 1830s, when several cities in the United States banned nine-pin bowling out of moral panic over the supposed destruction of the work ethic, gambling, and organized crime.\n[…]\nTen-pin bowling is said to have been invented in order to meet the letter of these laws, even with evidence of outdoor bowling games in 1810 England being bowled with ten pins set in an equilateral triangle as is done today in ten-pin bowling.\n[…]\nThe American variation of nine-pin bowling is played with the same lane as in conventional ten-pin bowling. The difference is the lack of automatic pinsetter and electronic scoring system. Both of these are done manually, similar to how ten-pin bowling was in the early 20th century. The lane is usually under a dry lane condition (without oil), or rarely oiled in typical house shot, allowing players to release a hook ball in a similar fashion as ten-pin bowling.\n[…]\nBexar Bowling Society: History of 9-Pin Bowling"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Boliche",
        "situacao": "ok",
        "texto": "O boliche de dez pinos (português brasileiro) ou bólingue de dez pinos (português europeu) (em inglês, tenpin bowling) é um desporto da família dos esportes de boliche, cujo objetivo é derrubar, com uma bola, dez pinos dispostos em tetráctis ao fundo de uma pista. Derrubar todos os pinos no primeiro arremesso é chamado de strike. Caso o jogador não consiga um strike no primeiro arremesso, mas cons\n[…]\nÉ amplamente reconhecido como a variação mais popular dos jogos de derrubar pinos, e, muitas vezes, é chamado simplesmente de “boliche”. Trata-se de um esporte de precisão, e sua mais alta federação desportiva é a International Bowling Federation (IBF).\n[…]\nO boliche é um entretenimento milenar. Conta-se que foram encontradas em tumbas egípcias, pinos e bolas de um jogo de boliche primitivo. Outra lenda, um tanto macabra, conta que guerreiros de tribos antigas divertiam-se após as batalhas, usando os ossos das coxas de seus inimigos como alvo de crânios, que eram lançados colocando-se o polegar e outro dedo nas cavidades dos olhos.\n[…]\nNa Polinésia, um antigo jogo de arremesso de bolas chamado de “ula maika” também é considerado como a origem do boliche.\n[…]\nUm jogo perfeito corresponde a 10 strikes seguidos mais 2 arremessos extras do décimo frame que derrubem, ambos, todos os 10 pinos (nesse caso, esses arremessos extras também são strikes, mas não pedem por si só arremessos extras).\n[…]\nJoão e Maria: figura que resulta da posição de dois pinos, um atrás do outro, restantes após o primeiro lançamento (podem ser os pinos 1-5 ou 2-8 ou 3-9) os americanos chamam o pino escondido e esta figura de \"mother in law\" = \"sogra\".\n[…]\n\"poff\": quando restam dois pinos próximos um do outro e a segunda bola acerta apenas o pino da frente.\n[…]\n\"spare\": derrubar os pinos restantes na segunda jogadas (seu símbolo é um travessão \"/\").\n[…]\nboliche pinos de pato\n[…]\nboliche pinos de vela\n[…]\nboliche de nove pinos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Fosbury flop",
      "descricao": "Técnica do salto em altura em que o atleta passa sobre o sarrafo de costas, popularizada por Dick Fosbury."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O salto em altura de costas, popularizado por Dick Fosbury em 1968, só se tornou seguro graças a qual mudança na área de queda?",
    "resposta": "Colchões de espuma",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fosbury_flop"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fosbury_flop",
        "situacao": "ok",
        "texto": "The Fosbury flop is a jumping style used in the track and field event of high jump. It was popularized and perfected by American athlete Dick Fosbury, whose gold medal in the 1968 Summer Olympics in Mexico City brought it to the world's attention. The flop became the dominant style of the event, surpassing the straddle technique, Western roll, Eastern cut-off, or scissors jump to clear the bar.\n[…]\nThough the backwards flop technique had been known for years before Fosbury, landing surfaces had been sandpits or low piles of matting and high jumpers had to land on their feet or at least land carefully to prevent injury. With the advent of deep foam matting, high jumpers were able to be more adventurous in their landing styles and hence more experimental with jumping styles.\n[…]\nThe approach (or run-up) in the Fosbury flop is characterized by (at least) the final four or five steps being run in a curve, allowing the athlete to lean in to the turn, away from the bar. This allows the center of gravity to be lowered even before knee flexion, giving a longer time period for the take-off thrust. Additionally, on take-off, the sudden move from inward lean to outwards produces a rotation of the jumper's body along the bar's axis, aiding clearance.\n[…]\nFosbury himself cleared the bar with his hands by his sides, whereas some athletes cross the bar with their arms held out to the side or even above their heads, optimizing their mass-distribution. Studies show that variations in approach, arm technique, and other factors can be adjusted to achieve each athlete's best performance.\n[…]\nDick Fosbury revolutionised the high jump (from the International Olympic Committee web site)\n[…]\nRotation over the bar in the Fosbury Flop analysed & explained by Dr. Jesus Dapena Archived 2 December 2008 at the Wayback Machine."
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Bola de bilhar",
      "descricao": "Bola maciça usada nos jogos de bilhar, antigamente feita de marfim."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No século dezenove, a busca por um substituto do marfim nas bolas de bilhar levou o americano John Wesley Hyatt a desenvolver qual material?",
    "resposta": "Celuloide",
    "fonte": [
      "https://en.wikipedia.org/wiki/Billiard_ball",
      "https://en.wikipedia.org/wiki/Celluloid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Billiard_ball",
        "situacao": "ok",
        "texto": "A billiard ball is a small, hard ball used in cue sports, such as carom billiards, pool, and snooker. The number, type, diameter, color, and pattern of the balls differ depending upon the specific game being played. Various particular ball properties such as hardness, friction coefficient, and resilience are important to accuracy.\n[…]\nAlthough not the first artificial substance to be used for the balls (e.g. Sorel cement, invented in 1867, was marketed as an artificial ivory), John Wesley Hyatt patented an \"ivory imitation\" composite made of nitrocellulose, camphor, and ground cattle bone on May 4, 1869 (US patent 89582, the first US billiard ball patent).\n[…]\nThe material was a success, and was sold as Bonzoline, Crystalate, Ivorylene until the 1960s, and was used by prominent professional players such as John Roberts Jr (1847–1919), Charles Dawson (1866–1921), and Walter Lindrum (1898–1960). The ivory substitute was one of the most significant early reinforced plastics; induced the global growth of billiards, pool, and snooker; and helped create a modern idea that the artificial can surpass the natural.\n[…]\nThe exacting requirements of the billiard ball are met today with balls cast from plastic materials that are strongly resistant to cracking and chipping. Currently Saluc, under the brand name Aramith and other private labels, manufactures phenolic resin balls. Other plastics and resins such as polyester (similar to those used for bowling balls) and clear acrylic are also used.\n[…]\nThe phrase \"as smooth as a billiard ball\" is sometimes applied to describe a bald person, and the term \"cue ball\" is also slang for someone who sports a shaved head.\n[…]\nU.S. patent 50,359—Billiard ball c. 1865\n[…]\nU.S. patent 76,765—Billiard ball c. 1868\n[…]\nU.S. patent 88,634—Billiard ball c. 1869\n[…]\nU.S. patent 114,945—Billiard ball c. 1871"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Celluloid",
        "situacao": "ok",
        "texto": "Celluloids are a class of materials produced by mixing nitrocellulose and camphor, often with added dyes and other agents. Once much more common for its use as photographic film before the advent of safer methods, celluloid's common present-day uses are for manufacturing table tennis balls, musical instruments, combs, office equipment, fountain pen bodies, and guitar picks.\n[…]\nIn the 1860s, an American, John Wesley Hyatt, acquired Parkes's patent and began experimenting with cellulose nitrate with the intention of manufacturing billiard balls, which until that time were made from ivory. He used cloth, ivory dust, and shellac, and on April 6, 1869, patented a method of covering billiard balls with the addition of collodion.\n[…]\nWith assistance from Peter Kinnear and other investors, Hyatt formed the Albany Billiard Ball Company in Albany, New York, to manufacture the product. In 1870, John and his brother Isaiah patented a process of making a \"horn-like material\" with the inclusion of cellulose nitrate and camphor.\n[…]\nAlexander Parkes and Daniel Spill (see below) listed camphor during their earlier experiments, calling the resultant mix \"xylonite\", but it was the Hyatt brothers who recognized the value of camphor and its use as a plasticizer for cellulose nitrate. They used heat and pressure to simplify the manufacture of these compounds. Isaiah Hyatt dubbed the material \"celluloid\" in 1872. The Hyatts later moved their company, now called the Celluloid Manufacturing Company, to Newark, New Jersey.\n[…]\nThe reaction can produce mixed products, depending on the degree of substitution of nitrogen, or the percent nitrogen content on each cellulose molecule; cellulose nitrate has 2.8 molecule of nitrogen per molecule of cellulose."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Taco de golfe",
      "descricao": "Bastão usado para golpear a bola no golfe, como drivers, ferros e putters."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Pelas regras do golfe, quantos tacos, no máximo, um jogador pode levar na bolsa durante uma rodada?",
    "resposta": "Catorze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Golf_club"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Golf_club",
        "situacao": "ok",
        "texto": "A golf club is a club used to hit a golf ball in a game of golf. Each club is composed of a shaft with a grip and a club head. Woods are mainly used for long-distance fairway or tee shots; irons, the most versatile class, are used for a variety of shots; hybrids that combine design elements of woods and irons are becoming increasingly popular; putters are used mainly on the green to roll the ball \n[…]\nEach head has one face which contacts the ball during the stroke. Putters may have two striking faces, as long as they are identical and symmetrical. Some chippers (a club similar in appearance to a double-sided putter but having a loft of 35–45 degrees) have two faces, but are not legal. Page 135 of the 2009 USGA rules of golf states:\n[…]\nThe rules of golf limit each player to a maximum of 14 clubs in their bag. Strict rules prohibit sharing of clubs between players that each have their own set (if two players share clubs, they may not have more than 14 clubs combined), and while occasional lending of a club to a player is generally overlooked, habitual borrowing of other players' clubs or the sharing of a single bag of clubs slows play considerably when both players need the same club.\n[…]\nThe ruling authorities of golf, The R&A (formerly part of The Royal and Ancient Golf Club of St Andrews) and the United States Golf Association (USGA), reserve the right to define what shapes and physical characteristics of clubs are permissible in tournament play. The current rules for club design, including the results of various rulings on clubs introduced for play, are defined in Appendix II of the Rules of Golf.\n[…]\nGolf cart\n[…]\nGibson, Kevin H. The Encyclopedia of Golf. A. S. Barnes, New York, 1958.\n[…]\nMedia related to Golf clubs (equipment) at Wikimedia Commons\n[…]\nHow Zip Is Put Into Your Golf Clubs—detailed and well illustrated July 1951 Popular Science article on the manufacturing process for golf clubs"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Taco_de_golfe",
        "situacao": "ok",
        "texto": "Golfe é um esporte no qual os jogadores usam diversos tipos de tacos para arremessar uma bola para uma série de buracos numa vasta extensão de terreno (campo de golfe), usando o menor número possível de tacadas.\n[…]\nO golfe também pode ser jogado em duplas ou trios, com a somatória do resultado de cada jogador da equipe, duplas mistas, e uma infinidade de variações.\n[…]\nOs ferros 1 e 2 desapareceram, praticamente, do conjunto ou set e são comprados isoladamente à unidade. Os jogadores de nível médio, não costumam utilizá-los por ser difícil bater a bola com eles. Para efetuar uma boa tacada é preciso bater a bola no lugar exato da face do taco, no sweet-spot o que se torna tão mais difícil quanto maior for o comprimento da vareta. O loft dos ferros aumenta em função inversa do seu comprimento atingindo os 60.º e 61.º nossand-wedge e Lob-wedges.\n[…]\nO número máximo de tacos que um jogador, em competição, pode transportar no saco é de 14. O jogador não pode transportar os tacos na mão, daí que utilize para o efeito um saco, que poderá ser feito de material plástico ou cabedal. Os sacos apresentam-se com diversos tamanhos e modelos, com bolsas destinadas ao transporte de roupas, bolas, alimentos e bebidas, etc.\n[…]\nCaddie: Caddie ou cádi é o nome que recebe o carregador da bolsa com os tacos do golfista. Apenas em 1980 as mulheres passam a ser aceites como caddies. O conhecimento do campo de golfe e a observação constante dos jogadores permitiu que muitos deles se tornassem golfistas ou professores de golfe. Os caddies são considerados desportistas.\n[…]\n«Associação Paulista de Golfe»\n[…]\n«Federação Baiana de Golfe»\n[…]\n«Federação Portuguesa de Golfe»\n[…]\n«Portal Brasileiro do Golfe»\n[…]\n«Golfe e Turismo»\n[…]\nLisbon Sports Club",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Trave de equilíbrio",
      "descricao": "Aparelho da ginástica artística feminina formado por uma barra estreita e elevada."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na ginástica artística, quantos centímetros de largura tem a trave de equilíbrio?",
    "resposta": "Dez",
    "fonte": [
      "https://en.wikipedia.org/wiki/Balance_beam"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Balance_beam",
        "situacao": "ok",
        "texto": "The balance beam is a rectangular artistic gymnastics apparatus and an event performed using the apparatus. The apparatus and the event are sometimes simply called \"beam\". The English abbreviation for the event in gymnastics scoring is BB. The balance beam is performed competitively only by female gymnasts.\n[…]\nA beam routine must consist of:\n[…]\nA Hungarian gymnast, Gaki Mezsaros, drew notice by performing a split on the beam.\n[…]\nIn the early days of women's artistic gymnastics, beam was based more on dance than in tumbling. Even at the elite level, routines were composed of combinations of leaps, dance poses, handstands, rolls, and walkovers. In line with ideas that women should not perform feats of strength, the regulations for the 1948 Summer Olympics said that routines should not show the use of force, and gymnasts displayed little risk or complexity on the apparatus at the time.\n[…]\nThe first cartwheel performed on the balance beam in competition was done by Eva Bosáková at the 1956 Summer Olympics.\n[…]\nBalance beam difficulty began to increase dramatically in the 1970s. Olga Korbut and Nadia Comăneci pioneered advanced tumbling combinations and aerial skills on beam; other athletes and coaches began to follow suit. The change was also facilitated by transitioning from wooden beams to safer, less slippery models with suede-covered surfaces and elastic padding. By the mid-1980s, top gymnasts routinely performed flight series and multiple aerial elements on beam.\n[…]\nToday, balance beam routines still consist of a mixture of acrobatic skills, dance elements, leaps, and poses, but they are significantly more difficult. It is also an individual medal competition in the Olympics.\n[…]\nHistory of the balance beam (in German and English)\n[…]\nBalance Beam: The apparatus of physical skill and psychology (FIG)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trave_ol%C3%ADmpica",
        "situacao": "ok",
        "texto": "A trave olímpica ou trave de equilíbrio - popularmente chamada de trave - é um aparelho da ginástica artística, presente em todas as competições oficiais de senhoras.\n[…]\nEste aparelho faz parte da ginástica feminina competitiva. Os exercícios de equilíbrio são tão antigos quanto os livres, no solo. As primeiras práticas eram realizadas sobre um tronco de pinheiro e mais tarde, foram aprimoradas pelo alemão, \"pai\" da ginástica moderna, Friedrich Ludwig Jahn. Antes dele, o primeiro a formalizar interesse em relação a esta prática foi Johan Christoph GutsMuths (1759 - 1839) e sua trave possuía vinte metros de comprimento.\n[…]\nNo ano de 1936, já modernizados, os exercícios na trave fizeram a sua estreia em Jogos Olímpicos, ainda que não competitivamente. Anteriormente, em 1934, as primeiras provas neste aparelho foram realizadas no Campeonato Mundial em Budapeste. Nessa época, a trave possuía oito centímetros invés dos dez atuais. Desde então, material e taticamente, a trave evoluiu junto à prática da ginástica artística.\n[…]\nAinda que a dificuldade das execuções tenham aumentado com o passar dos anos, sua largura aumentou em apenas dois centímetros. Apesar disso, a trave é considerada um aparelho seguro dentro dos padrões que o esporte exige.\n[…]\nA trave em si é uma barra revestida com material aderente, situada a 1,25 metros do chão, com cinco metros de comprimento e dez centímetros de largura, onde a atleta deve equilibrar-se e realizar saltos e giros.\n[…]\nO sinal tocar pela segunda vez significa que a ginasta ultrapassou os 90 segundos.\n[…]\na.^ : a ginasta pode optar por uma saída mais simples, desde que a exigência seja cumprida na entrada do aparelho.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Boliche",
      "descricao": "Boliche de dez pinos, jogo em que se rola uma bola pesada por uma pista para derrubar dez pinos."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "No boliche, quantos pontos vale uma partida perfeita, com doze strikes seguidos?",
    "resposta": "300",
    "fonte": [
      "https://en.wikipedia.org/wiki/Perfect_game_(bowling)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Perfect_game_(bowling)",
        "situacao": "ok",
        "texto": "A perfect game is the highest score possible in a game of bowling, achieved by scoring a strike with every throw. In bowling games that use 10 pins, such as ten-pin bowling, candlepin bowling, and duckpin bowling, the highest possible score is 300, achieved by bowling 12 strikes in a row in a traditional single game: one strike in each of the first nine frames, and three more in the tenth frame.\n[…]\nAndy Varipapa, a standout bowler from the 1930s and 1940s, joked about a 300 game being twelve strikes in a row spanning two games. Hence, such a result is named after the veteran bowler.\n[…]\nIn an episode of Hill Street Blues, the roll call sergeant had bowled a 300 game. After the bowling alley burned down, the sergeant was an arson suspect because his 300 was not league certified.\n[…]\nIn a similar 2001 episode of the series According to Jim, Jim (James Belushi) bowls the first 11 strikes of a game when the power goes out at the bowling center. It is the day before Thanksgiving, and the proprietor tells Jim he cannot get credit for a 300 game (nor a photo on the center's \"wall of fame\") if he leaves and returns.\n[…]\nJim spends the night, and his wife, Cheryl (Courtney Thorne-Smith), surprises him by bringing Thanksgiving dinner to the bowling center while he waits for the power to return. Cheryl and Jim's family light the lane by placing candles in the gutters, and Jim rolls the final strike to complete the 300 game.\n[…]\nIn an episode \"Lawmen\" of the series Lethal Weapon, Roger (Damon Wayans) has his photo on the \"wall of fame\" in a local bowling center for a 300-game (which he admits was only a 290), but was pushed to roll a perfect game to prove it.\n[…]\nScoring a 300 game is a common objective in most bowling video games, which often offer unique or rare rewards for the player, as well as a large increase of the player's level."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Partida_perfeita_de_300_pontos",
        "situacao": "ok",
        "texto": "Partida perfeita de 300 pontos, ou Jogo de 300 Pontos, é um termo do boliche que é usado quando se consegue completar uma linha somente com \"strikes\" (ou 300 pontos), atingindo-se, assim, a pontuação perfeita deste esporte. O máximo que se consegue numa mesma linha são 12 \"strikes\", embora tenha 10 frames, o décimo \"strike\" consecutivo numa mesma linha dá o bônus de mais 2 jogadas extras. A pontua",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Bobsled",
      "descricao": "Esporte de inverno em que equipes descem uma pista de gelo num trenó com direção e freio."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O bobsled nasceu no fim do século dezenove numa famosa estação de inverno da Suíça. Qual?",
    "resposta": "St. Moritz",
    "distratores": [
      "Davos",
      "Zermatt",
      "Gstaad"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bobsleigh"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bobsleigh",
        "situacao": "ok",
        "texto": "Bobsleigh or bobsled is a winter sport in which individual athletes or teams of two to four athletes make timed speed runs down narrow, twisting, banked, iced tracks in a gravity-powered sleigh. International bobsleigh competitions are governed by the International Bobsleigh and Skeleton Federation (formerly the FIBT).\n[…]\nMoritz residents led to bobsledding being eventually banned from public highways. The Cresta Run remains the oldest in the world and is the home of the St. Moritz Tobogganing Club. It has hosted two Olympic Winter Games and is still in use.\n[…]\nAlthough sledding on snow or ice had long been popular in many northern countries, the origins of bobsleighing as a modern sport are relatively recent. It developed after hotelier Caspar Badrutt (1848–1904) convinced some wealthy English regular guests to remain through the entire winter at his hotel in the mineral spa town of St. Moritz, Switzerland. He had been frustrated that his hotel was only busy during the summer months.\n[…]\nHowever, when they began colliding with pedestrians in the icy lanes, alleyways and roads of St. Moritz, this led to the invention of \"steering means\" for the sleds. The basic bobsleigh (bobsled) consisted of two crestas (skeleton sleds) attached together with a board that had a steering mechanism at the front. The ability to steer meant the sleds could make longer runs through the town. Longer runs also meant higher speeds on curves.\n[…]\nMoritz, so he was not going to let boredom induce customers not to visit the area.\n[…]\nThe first club was formed in 1897, and the first purpose-built track solely for bobsleds opened in 1902 outside St. Moritz. Over the years, bobsleigh tracks evolved from straight runs to twisting and turning tracks. The original wooden sleds gave way to streamlined fiberglass and metal ones."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bobsleigh",
        "situacao": "ok",
        "texto": "O bobsleigh, bobsled ou bobsledge é um esporte de inverno no qual equipes de duas ou quatro pessoas realizam, por meio de um trenó, descidas cronometradas em uma pista de gelo sinuosa e estreita especialmente construída para a competição. O trenó é movido pela força da gravidade, e pode atingir velocidades de até 150 km/h.\n[…]\nDesde 1924, o bobsleigh faz parte dos Jogos Olímpicos de Inverno, como uma competição para equipes masculinas de quatro pessoas. Em 1932, foi adicionada uma segunda modalidade, para equipes compostas de dois homens.\n[…]\nCriado na Suíça, as primeiras corridas de bobsleigh foram disputadas em estradas cobertas por neve. A primeira pista feita especialmente para a competição foi inaugurada em 1902.\n[…]\nO bobsled passou a ser disputado por mulheres apenas nos Jogos Olímpicos de Inverno de 2002, realizado em Salt Lake City, Estados Unidos.\n[…]\nO bobsleigh era praticado no final do século XIX em duas regiões distintas: Albany, nos Estados Unidos (1882) e St. Moritz, na Suíça (1897) onde o esporte se desenvolveu primeiramente, e fundou o seu primeiro Clube de Bobsled em 1897. Já em 1914, as competições de bobsled eram organizadas em várias pistas pela Europa, principalmente na região dos alpes europeus.\n[…]\nEm 1923 foi fundada a Federação Internacional de Bobsleigh e Tobogã (FIBT). O bobsled de 4 pessoas (4-man) foi incluído na 1ª edição dos Jogos Olímpicos de Inverno de 1924, em Chamonix, França. Já a modalidade de bobsled de 2 pessoas (2-man) foi incluída nas Jogos Olímpicos de Inverno de 1932 em Lake Placid. Somente nos Jogos Olímpicos de Inverno de 2002 o bobsleigh feminino de 2 pessoas foi incluído como modalidade olímpica\n[…]\nFederação Internacional de Bobsleigh e de Tobogganing\n[…]\nCampeonato Mundial de Bobsleigh\n[…]\nCopa do Mundo de Bobsleigh\n[…]\nBobsleigh nos Jogos Olímpicos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Tiro com arco nos Jogos Olímpicos de 2016",
      "descricao": "Competição olímpica de tiro com arco dos Jogos do Rio de Janeiro."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Nos Jogos do Rio, em 2016, as provas de tiro com arco foram disputadas em qual famoso palco carioca?",
    "resposta": "Sambódromo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Archery_at_the_2016_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Archery_at_the_2016_Summer_Olympics",
        "situacao": "ok",
        "texto": "The archery events at the 2016 Summer Olympics in Rio de Janeiro were held over a seven-day period from 6 to 12 August. Four events took place, all were staged at the Sambadrome Marquês de Sapucaí.\n[…]\nAll four events were recurve archery events, held under the World Archery-approved 70-meter distance and rules. The competition started with an initial ranking round involving all 64 archers of each gender. Each archer would shoot a total of 72 arrows to be seeded from 1–64 according to their score.\n[…]\nEach match was scored using the Archery Olympic Round, consisting of the best-of-five sets, with three arrows per set. The winner of each set received two points, and if the scores in the set had tied then each archer would have received one point. If at the end of five sets the score had been tied at 5–5, a single arrow shoot-off would have held and the closest to the center would be declared the winner.\n[…]\nFor the first time, the team event has followed the same Archery Olympic Round set system as the individual event.\n[…]\nArchers from 56 nations participated at the 2016 Summer Olympics.\n[…]\nArchery at the 2016 Summer Paralympics\n[…]\n\"Archery at the 2016 Summer Olympics (Rio2016.com)\". Archived from the original on 26 August 2016. Retrieved 23 July 2018.{{cite web}}:  CS1 maint: bot: original URL status unknown (link)\n[…]\nArchery at the 2016 Summer Olympics at SR/Olympics (archived)\n[…]\nRio Replay: Men's Archery Individual Gold Medal Match on YouTube\n[…]\nRio Replay: Women's Individual Archery Final on YouTube\n[…]\nResults Book – Archery"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tiro_com_arco_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2016",
        "situacao": "ok",
        "texto": "As competições de tiro com arco nos Jogos Olímpicos de Verão de 2016 foram disputadas entre 5 e 12 de agosto no Sambódromo da Marquês de Sapucaí, no Rio de Janeiro. Contou com a disputa de quatro eventos e a participação de 128 competidores.\n[…]\nNas qualificatórias da competição individual masculina, o sul-coreano Kim Woo-jin marcou 700 em 720 pontos possíveis e ultrapassou o recorde anterior feito nos Jogos Olímpicos de 2012 pelo compatriota Im Dong-Hyun, naquele que foi o primeiro recorde mundial quebrado nestas Olimpíadas.\n[…]\nForam disponibilizadas 128 vagas para o tiro com arco nos Jogos Olímpicos de 2016: 64 para homens e 64 para mulheres. Cada Comitê Olímpico Nacional (CON) pode inscrever no máximo seis competidores, sendo três por gênero. Os CONs que qualificaram equipes puderam enviar três competidores para o evento em conjunto e também inscrever cada um dos membros no evento individual. Foram 12 vagas por equipes para cada gênero, qualificando 36 arqueiros por esse método.\n[…]\nPara se qualificar para participar dos Jogos Olímpicos após o CON obter uma vaga, todos os arqueiros deveriam ter alcançado a pontuação mínima de qualificação (MQS) de 630 para os homens e 600 para as mulheres. O MQS deveria ser alcançado entre 26 de julho de 2015 (começando no Campeonato Mundial de  2015) e 11 de julho de 2016 em um evento registrado da Federação Mundial de Tiro com Arco.\n[…]\n«Pagina oficial da Federação Internacional de Tiro com Arco» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Nado borboleta",
      "descricao": "Estilo da natação em que os braços se movem juntos por cima da água, com pernada de golfinho."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O nado borboleta começou como uma variação do nado peito. Em que década ele virou um estilo independente?",
    "resposta": "Anos cinquenta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Butterfly_stroke"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Butterfly_stroke",
        "situacao": "ok",
        "texto": "Butterfly (shortened to fly) is a swimming stroke swum on the front. Both the arms and the legs are symmetric, with the arms moving symmetrically down the front of the body and then over the water, and the legs moving up and down together in a dolphin kick.\n[…]\nThe butterfly arms and kick developed independently before being combined to form the butterfly stroke. The development of butterfly and its eventual inclusion as a separate stroke took just under 25 years.\n[…]\nIn the 200 m breaststroke at the 1948 London Olympics, all but one of the finalists used butterfly-breaststroke throughout, and the only finalist who did not use it on every stroke (Bob Bonte of the Netherlands) finished last.\n[…]\nThe stroke was not legal in any of the events of the time, so it was not until 1952, when the argument for separating the A and B styles of breaststroke was gaining traction, that FINA separated breaststroke into two different events: breaststroke (the previous style A), and butterfly (the previous style B). Furthermore, while traditional breaststroke required the whip kick, the new butterfly stroke allowed the use of the butterfly kick.\n[…]\nThe butterfly stroke was first seen in the Olympics at the 1956 Summer Games, where the men's 200 m butterfly event was won by William Yorzyk, and the women's 100 m butterfly event was won by Shelley Mann.\n[…]\n100 metres butterfly\n[…]\n200 metres butterfly\n[…]\nSeifert, L.; Boulesteix, L.; Chollet, D.; Vilas-Boas, J. P. (1 February 2008). \"Differences in spatial-temporal parameters and arm–leg coordination in butterfly stroke as a function of race pace, skill and gender\". Human Movement Science. 27 (1). doi:10.1016/j.humov.2007.08.001. ISSN 0167-9457 – via ScienceDirect.\n[…]\nMedia related to Butterfly (swimming style) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Borboleta_%28nata%C3%A7%C3%A3o%29",
        "situacao": "ok",
        "texto": "O estilo borboleta (também conhecido como golfinho ou mariposa) é um estilo de natação relativamente novo. Seu nascimento ocorreu em função das incertezas do regulamento do nado peito. Isso porque, até a década de 1950, o deslocamento dos braços para frente não estava previsto nas regras da Federação Internacional de Natação, gerando semelhança entre os dois estilos.\n[…]\nA invenção do estilo borboleta moderno, de maneira completa (com braços e pernas nadando como hoje), é creditada ao nadador japonês Jiro Nagasawa.\n[…]\nSegundo o mesmo Hall da Fama, o primeiro a unir braços e pernas para criar o estilo borboleta foi o japonês Jiro Nagasawa.\n[…]\nHistoricamente o nado atual nasceu do nado clássico (peito), evoluiu para o nado borboleta (com perna de peito e braço apresentando o movimento simultâneo com recuperação aérea) e, então, para o nado golfinho, com ondulação do corpo e movimentos simultâneos verticais das pernas. Em competição, as provas, no Brasil, são chamadas de borboleta, podendo também ser chamado de nado golfinho. O nado borboleta assemelha-se ao crawl.\n[…]\nNo nado borboleta, o nadador eleva o queixo para frente no começo da braçada para respirar. Quando os braços estiverem na sua máxima extensão, a meio do movimento aéreo, os ombros e a cabeça são levantados da água. Nesse momento, o nadador tem uma boa oportunidade para respirar. O rosto do nadador retorna a água um pouco antes das mãos completarem a braçada. Logo que as mãos entram na água, o nadador começa a expirar lentamente.\n[…]\nA saída do nado borboleta também é feita do bloco de partida. Após o mergulho, o nadador mantém os braços à frente e realiza uma forte batida de pernas.\n[…]\nPeito (natação)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Bob Beamon",
      "descricao": "Atleta americano do salto em distância, campeão olímpico na Cidade do México com um salto de 8,90 metros."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Na altitude da Cidade do México, o americano Bob Beamon saltou oito metros e noventa no salto em distância. Em que ano?",
    "resposta": "1968",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bob_Beamon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bob_Beamon",
        "situacao": "ok",
        "texto": "Robert Beamon (born August 29, 1946) is an American former track and field athlete, best known for his world record in the long jump at the Mexico City Olympics in 1968. By jumping 8.90 m (29 ft 2+1⁄4 in), he broke the existing record by a margin of 55 cm (21+3⁄4 in) and his world record stood for almost 23 years until it was broken in 1991 by Mike Powell. The jump is still the Olympic record and \n[…]\nBeamon entered the 1968 Summer Olympics in Mexico City as the favorite to win the gold medal, having won 22 of the 23 meets he had competed in that year, including a career-best of 8.33 m (27 ft 3+3⁄4 in) and a world's best of 8.39 m (27 ft 6+1⁄4 in) that was ineligible for the record books due to excessive wind assistance. That year, he won the AAU and NCAA indoor long jump and triple jump titles and the AAU outdoor long jump title.\n[…]\nHe came close to missing the Olympic final, overstepping on his first two attempts in qualifying. With only one chance left, Beamon re-measured his approach run from a spot in front of the board and made a fair jump that advanced him to the final. There, he faced the two previous gold-medal winners, fellow American Ralph Boston (1960) and Lynn Davies of Great Britain (1964), and twice bronze medallist Igor Ter-Ovanesyan of the Soviet Union.\n[…]\nOn October 18, Beamon set a world record for the long jump with a first jump of 8.90 m (29 ft 2+1⁄4 in), bettering the existing record by 55 cm (21+3⁄4 in). When the announcer called out the distance for the jump, Beamon—unfamiliar with metric measurements—still did not realize what he had done.\n[…]\nShortly after the Mexico City Olympics, Beamon was drafted by the Phoenix Suns in the 15th round of the 1969 NBA draft but never played in an NBA game. In 1972, he graduated from Adelphi University with a degree in sociology.\n[…]\nBob Beamon at the USATF Hall of Fame (archived)\n[…]\nBob Beamon at Olympics.com\n[…]\nBob Beamon at Olympedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bob_Beamon",
        "situacao": "ok",
        "texto": "Robert \"Bob\" Beamon (Nova Iorque, 29 de agosto de 1946) é um ex-atleta norte-americano.\n[…]\nEle venceu o salto em distância nos Jogos Olímpicos de Verão de 1968, batendo o recorde mundial com a expressiva marca de 8,90 m. O recorde mundial anterior era de 8,35 m. Como a Cidade do México fica na altitude, onde existe menos resistência do ar já que o mesmo é rarefeito, este fato colaborou para a obtenção da marca.\n[…]\nBob Beamon tinha apenas 22 anos quando conseguiu o recorde, às 16 horas do dia 18 de outubro de 1968.\n[…]\n«Perfil de Bob Beamon» (em inglês). no site da World Athletics\n[…]\n«Perfil de Bob Beamon» (em inglês). arquivado do sítio Sports-Reference.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "50 metros livre masculino nos Jogos Olímpicos de 2008",
      "descricao": "Prova olímpica de cinquenta metros nado livre masculino dos Jogos de Pequim."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Nos Jogos de Pequim, em 2008, quem conquistou o primeiro ouro olímpico da natação brasileira, nos cinquenta metros livre?",
    "resposta": "César Cielo",
    "fonte": [
      "https://en.wikipedia.org/wiki/C%C3%A9sar_Cielo",
      "https://pt.wikipedia.org/wiki/C%C3%A9sar_Cielo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/C%C3%A9sar_Cielo",
        "situacao": "ok",
        "texto": "César Augusto Cielo Filho (Portuguese pronunciation: [ˈsɛzɐʁ siˈelu ˈfiʎu], born 10 January 1987) is a Brazilian former competitive swimmer who specialized in sprint events. He is the most successful Brazilian swimmer in history, having obtained three Olympic medals, winning six individual World Championship gold medals and breaking two world records.\n[…]\nCielo is a former world record holder in the 50-metre freestyle and 100-metre freestyle events (both long course). He received induction into the International Swimming Hall of Fame in September 2023. César Cielo is the third Brazilian to enter the International Swimming Hall of Fame, after Maria Lenk and Gustavo Borges.\n[…]\nAfter the Olympics, in October, in the first stage of the 2008 FINA Swimming World Cup, held in Belo Horizonte, Brazil, Cielo equaled the short-course South American record in the 50-metre freestyle, with a time of 21.32 seconds.\n[…]\nAt the 2015 World Aquatics Championships in Kazan, Brazil finished 4th in the Men's 4 × 100 metre freestyle, in a relay composed by Bruno Fratus, Marcelo Chierighini, Matheus Santana and João de Lucca. César Cielo didn't swim in the final – despite being a participant in the championship, he was suffering with shoulder pain. According to the doctor of the Brazilian Aquatic Sports Confederation (CBDA), Gustavo Magliocca, Cielo had an inflammation of the supraspinatus tendon.\n[…]\nThe Olympic record for the 50-metre freestyle, set by Cielo in Beijing 2008 (21.30), was broken in Tokyo 2020.\n[…]\nMen's 50 m freestyle gold medal.\n[…]\nCesar Cielo official website (in Portuguese)\n[…]\nCesar Cielo at Auburn University at the Wayback Machine (archived 27 August 2011)\n[…]\nCesar Cielo Filho  at World Aquatics\n[…]\nCesar Cielo Filho at Olympics.comCesar Cielo Filho at Olympic.org (archived)\n[…]\nCésar Cielo Filho at Olympedia\n[…]\nCesar Cielo at the Comitê Olímpico do Brasil  (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A9sar_Cielo",
        "situacao": "ok",
        "texto": "César Augusto Cielo Filho (Santa Bárbara d'Oeste, 10 de janeiro de 1987) é um nadador brasileiro campeão olímpico. Atualmente, defende a equipe de natação do Clube Náutico Marcílio Dias. No ano de 2023 César Cielo foi induzido ao Hall da Fama da Natação Internacional, com cerimônia organizada para os dias 29 e 30 de setembro de 2023. Em toda carreira, César Cielo soma 38 medalhas (24 ouros, 4 prat\n[…]\nNa semifinal da prova, Cielo fez a marca de 22s09, melhorando o tempo de Xuxa, que era de agosto de 1998, em nove centésimos. Posteriormente, ajudou os revezamentos 4x100 metros livre e 4x100 metros medley brasileiros a se classificarem para as Olimpíadas de 2008. Ganhou três medalhas de ouro e uma medalha de prata nos Jogos Pan-Americanos de 2007 no Rio e, na ocasião, foi o primeiro nadador da América do Sul a nadar os 50 metros livre abaixo de 22 segundos.\n[…]\nAté a medalha de ouro de Cesar Cielo, os melhores resultados da natação do Brasil haviam sido obtidos por Ricardo Prado, que ganhou a medalha de prata nos 400 metros medley nos Jogos Olímpicos de Los Angeles, em 1984, e por Gustavo Borges, que ganhou a medalha de prata nos 100 metros livre nos Jogos Olímpicos de Barcelona, em 1992, e a medalha de prata nos 200 metros livre nos Jogos Olímpicos de Atlanta, em 1996.\n[…]\nNa final dos 50 metros livre, Cielo venceu o recordista mundial Frederick Bousquet e conquistou o ouro com 21s08, batendo o recorde da competição e o sul-americano. O brasileiro entrou para a história da natação, sendo o terceiro atleta a conquistar o ouro nos 50 metros livre nos Jogos Olímpicos e no Mundial de forma consecutiva. Somente o russo Alexander Popov e o norte-americano Anthony Ervin haviam conseguido esta marca.\n[…]\nO recorde olímpico dos 50 metros livre, estabelecido por Cielo em Pequim 2008 (21s30), só foi quebrado em Tóquio 2020, e apenas na final.\n[…]\nCésar Cielo no Instagram\n[…]\n«Entrevista com Cesar Cielo»"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Mr. Olympia",
      "descricao": "Principal concurso internacional de fisiculturismo profissional, criado em 1965."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Antes da fama no cinema, que austríaco venceu sete vezes o concurso de fisiculturismo Mr. Olympia?",
    "resposta": "Arnold Schwarzenegger",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mr._Olympia",
      "https://en.wikipedia.org/wiki/Arnold_Schwarzenegger"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mr._Olympia",
        "situacao": "ok",
        "texto": "Mr. Olympia is the title awarded to the winner of the professional men's bodybuilding contest in the open division at Olympia Fitness & Performance Weekend—an international bodybuilding competition that is held annually and is sanctioned by the IFBB Professional League. Joe Weider created the contest to enable the amateur Mr. Universe winners to continue competing and to earn money. The first Mr.\n[…]\nThe film Pumping Iron (1977) featured the buildup to the 1975 Mr. Olympia in Pretoria, South Africa, and helped launch the acting careers of Arnold Schwarzenegger, Lou Ferrigno, and Franco Columbu.\n[…]\nOliva would go on to win the Mr. Olympia competition in 1967, 1968 (uncontested), and 1969—where he would defeat Arnold Schwarzenegger four to three, marking Schwarzenegger's only loss in a Mr. Olympia competition.\n[…]\nFor example, Schwarzenegger and players on the Pittsburgh Steelers used performance enhancing drugs in the 1960s to 70s to improve both their physiques and performances.\n[…]\nAfter winning the 1975 competition, Schwarzenegger announced his retirement from competitive bodybuilding; this was also depicted in Pumping Iron.\n[…]\nIn 1980, Schwarzenegger came out of retirement to win the Olympia yet again, after a five-year hiatus. Schwarzenegger (who was supposedly training for the film Conan the Barbarian) had been a late entry into the competition, and his competitors did not know of his intentions to compete. This seventh victory was especially controversial, as most fellow competitors and observers felt that he lacked both muscle mass and conditioning, and shouldn't have won over Chris Dickerson or Mike Mentzer.\n[…]\nHeath won his seventh-consecutive Mr. Olympia in 2017, with Mamdouh Elssbiay taking second. With his 2017 win, Heath tied Arnold Schwarzenegger for second most Olympia victories, behind Lee Haney and Ronnie Coleman who won eight.\n[…]\nEvolutionofbodybuilding.net Mr. Olympia Winners"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Arnold_Schwarzenegger",
        "situacao": "ok",
        "texto": "Arnold Alois Schwarzenegger (born July 30, 1947) is an Austrian and American actor, businessman, film producer, politician, and former professional bodybuilder who served as the 38th governor of California from 2003 to 2011.\n[…]\nPresidential aspirations by the Austrian-born Schwarzenegger would be blocked by a constitutional hurdle; Article II, Section I, Clause V, prevents individuals who are not natural-born citizens of the United States from assuming the office. The Equal Opportunity to Govern Amendment in 2003 was widely accredited as the \"Amend for Arnold\" bill, which would have added an amendment to the U.S. Constitution allowing his run.\n[…]\nBaker published her memoir in 2006, Arnold and Me: In the Shadow of the Austrian Oak. Although Baker painted an unflattering portrait of her former lover at times, Schwarzenegger actually contributed to the tell-all book with a foreword, and also met with Baker for three hours. Baker claims that she only learned of his being unfaithful after they split, and talks of a turbulent and passionate love life. Schwarzenegger has made it clear that their respective recollection of events can differ.\n[…]\n\"A Day for Arnold\" on July 30, 2007, in Thal, Austria. For his 60th birthday, the mayor sent Schwarzenegger the enameled address sign (Thal 145) of the house where Schwarzenegger was born, declaring \"This belongs to him. No one here will ever be assigned that number again\".\n[…]\nSexton, Colleen A. (2005). Arnold Schwarzenegger. Minneapolis: Lerner Publications. ISBN 978-0-8225-1634-7.\n[…]\nZannos, Susan (2000). Arnold Schwarzenegger. Childs, Md.: Mitchell Lane. ISBN 978-1-883845-95-7.\n[…]\nArnold Schwarzenegger on WWE.com\n[…]\nArnold Schwarzenegger at the TCM Movie Database (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mr._Olympia",
        "situacao": "ok",
        "texto": "Mr. Olympia é o título concedido ao vencedor do concurso de fisiculturismo profissional masculino no Olympia Fitness & Performance Weekend de Joe Weider - uma competição internacional de fisiculturismo que é realizada anualmente pela Federação Internacional de Fisiculturismo (IFBB). Criada por Joe Weider, sua primeira edição remonta a 18 de setembro de 1965 em Nova Iorque.\n[…]\nO filme Pumping Iron (1977) apresentou a preparação para o Mr. Olympia de 1975 em Pretória, África do Sul, e ajudou a lançar as carreiras de ator de Arnold Schwarzenegger e Lou Ferrigno. Há também uma fisiculturista onde mulheres são premiadas, a Ms. Olympia, bem como as vencedoras do Fitness Olympia e Figure Olympia para competidores de fitness e figure. Todas as quatro competições ocorrem no mesmo fim de semana. De 1994 a 2003 e novamente em 2012, um Masters Olympia também foi coroado.\n[…]\nOliva venceria a competição Mr. Olympia em 1967, 1968 (sem contestação) e 1969 - onde derrotaria Arnold Schwarzenegger por quatro a três, marcando a única derrota de Schwarzenegger em uma competição Mr. Olympia.\n[…]\nSchwarzenegger derrotou Oliva no Mr. Olympia 1970, depois de terminar em segundo lugar no ano anterior, e também venceu em 1971 (sendo o único competidor). Ele derrotou Oliva novamente em 1972 e venceu as três competições seguintes do Mr. Olympia, incluindo a edição de 1975, que teve destaque no docudrama de 1977 Pumping Iron e apresentou outros culturistas notáveis ​​como Lou Ferrigno, Serge Nubret e Franco Columbu , que viria a ganhar as competições de 1976 e 1981.\n[…]\nHeath venceu seu sétimo Mr. Olympia consecutivo em 2017, com Mamdouh \"Big Ramy\" Elssbiay em segundo. Com sua vitória em 2017, Heath empatou com Arnold Schwarzenegger na segunda maior vitória do Olympia, atrás de Lee Haney e Ronnie Coleman, que conquistou oito.\n[…]\nMs. Olympia\n[…]\nMr. Olympia Brasil na Muscle Contest International",
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
