Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Vôlei** (tema **Esportes**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Mintonette",
      "descricao": "Nome original dado por William G. Morgan, em 1895, ao jogo que viria a ser o vôlei."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 1895, o vôlei nasceu com o nome Mintonette, inspirado em outro esporte jogado com rede. Qual?",
    "resposta": "Badminton",
    "distratores": [
      "Tênis",
      "Pelota basca",
      "Tênis de mesa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball",
        "situacao": "ok",
        "texto": "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the program at the Atlanta 1996 Summer Olympics. The adapted version of volleyball at the Su\n[…]\nVolleyball was invented in 1895 by the American educator William G. Morgan, a YMCA physical education director in Holyoke, Massachusetts. Morgan intended the game, which he originally called \"mintonette\", to be an alternative to basketball that was less physically demanding. It spread rapidly through YMCA networks in the United States and abroad.\n[…]\nWilliam G. Morgan invented the sport in 1895 while he was the YMCA physical education director in Holyoke, Massachusetts. Because he originally derived the game from badminton, he initially named the sport mintonette. He was a one-time student of basketball inventor James Naismith and invented the game for his clients at the YMCA, most of whom were middle-aged businessmen for whom the physical demands of basketball were too great."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol",
        "situacao": "ok",
        "texto": "Voleibol, também conhecido pelas formas reduzidas vôlei (português brasileiro) e vólei (português europeu), é um esporte praticado numa quadra dividida em duas partes por uma rede, possuindo duas equipes de seis jogadores em cada lado. O voleibol foi originalmente chamado de Mintonette, devido à sua semelhança com o Badminton. Ele também tem alguns elementos de tênis e handebol e até beisebol porq\n[…]\nO vôlei foi criado em 9 de fevereiro de 1895 por William George Morgan nos Estados Unidos. O objetivo de Morgan, que trabalhava na \"Associação Cristã de Moços\" (ACM), era criar um esporte de equipes sem contato físico entre os adversários, de modo a minimizar os riscos de lesões. Inicialmente jogava-se com uma câmara de ar da bola de basquetebol e foi chamado Mintonette, mas rapidamente ganhou popularidade com o nome de volleyball.\n[…]\nO jogador não pode encostar na rede e, caso isso ocorra, o ponto será para o outro time. O mesmo jogador não pode dar 2 ou mais toques seguidos na bola, exceção no caso do toque de Bloqueio.\n[…]\nO jogador encosta na borda superior da rede.\n[…]\nAtaque do fundo: ataque realizado por um jogador que não se encontra na rede, ou seja, por um jogador que não ocupa as posições 2-4. O atacante não pode pisar na linha de três metros ou na parte frontal da quadra antes de tocar a bola, embora seja permitido que ele aterrisse nesta área após o ataque.\n[…]\nBola de xeque: refere-se à cortada realizada por um dos jogadores que está na rede quando a equipe recebe uma \"bola de graça\" (ver passe, acima).\n[…]\nO bloqueio refere-se às ações executadas pelos jogadores que ocupam a parte frontal da quadra (posições 2-3-4) e que têm por objetivo impedir ou dificultar o ataque da equipe adversária. Elas consistem, em geral, em estender os braços acima do nível da rede com o propósito de interceptar a trajetória ou diminuir a velocidade de uma bola que foi cortada pelo oponente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Mintonette",
      "descricao": "Nome original dado por William G. Morgan, em 1895, ao jogo que viria a ser o vôlei."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Mintonette foi pensado como um jogo menos bruto para os sócios mais velhos da associação, em vez de que esporte recém-inventado?",
    "resposta": "Basquete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball",
        "situacao": "ok",
        "texto": "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the program at the Atlanta 1996 Summer Olympics. The adapted version of volleyball at the Su\n[…]\nVolleyball was invented in 1895 by the American educator William G. Morgan, a YMCA physical education director in Holyoke, Massachusetts. Morgan intended the game, which he originally called \"mintonette\", to be an alternative to basketball that was less physically demanding. It spread rapidly through YMCA networks in the United States and abroad.\n[…]\nWilliam G. Morgan invented the sport in 1895 while he was the YMCA physical education director in Holyoke, Massachusetts. Because he originally derived the game from badminton, he initially named the sport mintonette. He was a one-time student of basketball inventor James Naismith and invented the game for his clients at the YMCA, most of whom were middle-aged businessmen for whom the physical demands of basketball were too great.\n[…]\n9-man: A variant invented by Chinese immigrants to the United States in the 1930s. 9-man is still played in Asian countries and North America, being recognized for its historic and cultural significance. In 2014, a documentary was produced about the sport, and a YouTube documentary was made in 2017.\n[…]\nBiribol: an aquatic variant, played in shallow swimming pools. The name comes from the Brazilian city where it was invented, Birigui. It is similar to water volleyball.\n[…]\nEcua-volley: A variant invented in Ecuador, with some significant variants, such as number of players, and a heavier ball.\n[…]\nAmerican Volleyball Coaches Association"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol",
        "situacao": "ok",
        "texto": "Voleibol, também conhecido pelas formas reduzidas vôlei (português brasileiro) e vólei (português europeu), é um esporte praticado numa quadra dividida em duas partes por uma rede, possuindo duas equipes de seis jogadores em cada lado. O voleibol foi originalmente chamado de Mintonette, devido à sua semelhança com o Badminton. Ele também tem alguns elementos de tênis e handebol e até beisebol porq\n[…]\nO vôlei foi criado em 9 de fevereiro de 1895 por William George Morgan nos Estados Unidos. O objetivo de Morgan, que trabalhava na \"Associação Cristã de Moços\" (ACM), era criar um esporte de equipes sem contato físico entre os adversários, de modo a minimizar os riscos de lesões. Inicialmente jogava-se com uma câmara de ar da bola de basquetebol e foi chamado Mintonette, mas rapidamente ganhou popularidade com o nome de volleyball.\n[…]\nAo contrário de muitos esportes, tais como o futebol ou o basquetebol, o voleibol é jogado por pontos, e não por tempo. Cada partida é dividida em sets que terminam quando uma das duas equipes conquista 25 pontos. Deve haver também uma diferença de no mínimo dois pontos com relação ao placar do adversário - caso contrário, a disputa prossegue até que tal diferença seja atingida. O vencedor será aquele que conquistar primeiramente três sets.\n[…]\nA manchete é o tipo de defesa mais usado no jogo de voleibol. Ela é usada em bolas que vem em baixa altitude, e que não tem chance de ser devolvida com o toque. O movimento da manchete tem início nas pernas e é realizado de baixo para cima numa posição mais ou menos cômoda, é importante que a perna seja flexionada na hora do movimento, garantindo maior precisão e comodidade no movimento.\n[…]\nExplorar o bloqueio: refere-se a um ataque em que o jogador não pretende fazer a bola tocar a quadra adversária, mas antes atingir com ela o bloqueio oponente de modo a que ela, posteriormente, aterrise em uma área fora de jogo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "William G. Morgan",
      "descricao": "Professor de educação física americano que criou o vôlei em 1895."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que cidade do estado americano de Massachusetts William Morgan criou o vôlei, em 1895?",
    "resposta": "Holyoke",
    "fonte": [
      "https://en.wikipedia.org/wiki/William_G._Morgan",
      "https://en.wikipedia.org/wiki/Volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/William_G._Morgan",
        "situacao": "ok",
        "texto": "William George Morgan (January 23, 1870 – December 27, 1942) was an American sports educator and the inventor of volleyball, originally called \"Mintonette\", a name derived from the game of badminton which he later agreed to change to better reflect the nature of the sport. He was born in Lockport, New York, U.S.\n[…]\nHe met James Naismith, inventor of basketball, while Morgan was studying at Springfield College in 1892. Like Naismith, Morgan pursued a career in Physical Education at the YMCA. Influenced by Naismith and basketball, in 1895, in Holyoke, Massachusetts, Morgan invented \"Mintonette\" a less vigorous team sport more suitable for older members of the YMCA but one that still required athletic skill. Later Alfred S. Halstead watched it being played and renamed it \"Volleyball\".\n[…]\nDuring the summer of 1895, Morgan moved to Holyoke, Massachusetts, where he continued to work for the YMCA, becoming the Director of Physical Education. With Morgan being the Director, it allowed him to devise workout plans and teach sports in depth to the young male adults.\n[…]\nAs he worked as the Director of Physical Education at the YMCA in Holyoke, he noticed the game of basketball was not meant for everyone to play. The weaker young men, non-athletic adults, and the older adults were unable to keep up with running up and down the court, along with the amount of contact they would occasionally run into. Morgan then had to think of a game in which everyone would have an equal amount of participation but also had similar objectives to basketball.\n[…]\nIn 1995, The Morgan Trophy Award was created. The Award is presented annually to the most outstanding male and female collegiate volleyball player in the US. An elementary school in Holyoke, William Morgan School, bears his name."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball",
        "situacao": "ok",
        "texto": "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the program at the Atlanta 1996 Summer Olympics. The adapted version of volleyball at the Su\n[…]\nVolleyball was invented in 1895 by the American educator William G. Morgan, a YMCA physical education director in Holyoke, Massachusetts. Morgan intended the game, which he originally called \"mintonette\", to be an alternative to basketball that was less physically demanding. It spread rapidly through YMCA networks in the United States and abroad.\n[…]\nWilliam G. Morgan invented the sport in 1895 while he was the YMCA physical education director in Holyoke, Massachusetts. Because he originally derived the game from badminton, he initially named the sport mintonette. He was a one-time student of basketball inventor James Naismith and invented the game for his clients at the YMCA, most of whom were middle-aged businessmen for whom the physical demands of basketball were too great.\n[…]\nIn the early 1900s, Spalding, through its publishing company American Sports Publishing Company, produced books with complete instruction and rules for the sport.\n[…]\nIn 1919, about 16,000 volleyballs were distributed by the American Expeditionary Forces to their troops and allies, which sparked the growth of volleyball in new countries.\n[…]\n9-man: A variant invented by Chinese immigrants to the United States in the 1930s. 9-man is still played in Asian countries and North America, being recognized for its historic and cultural significance. In 2014, a documentary was produced about the sport, and a YouTube documentary was made in 2017.\n[…]\nAmerican Volleyball Coaches Association"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/William_George_Morgan",
        "situacao": "ok",
        "texto": "William George Morgan (Lockport, 23 de janeiro de 1870 — Lockport, 27 de dezembro de 1942) foi o inventor do voleibol, originalmente chamado \"Mintonette\", nome derivado do jogo badminton que ele resolveu mudar para melhor refletir a natureza do esporte.\n[…]\nNascido na pequena cidade de Lockport em Niagara County, a oeste do estado de Nova Iorque (Estados Unidos) e cerca de 30 km a leste da queda. Filho de George Henry Morgan e Nancy Chatfield, é o mais velho de seus quatro irmãos. Família de imigrantes galeses, trabalha no negócio da família de barcos com destino a construção de canais na região. Jogador de futebol americano, é contratado por James Naismith para o YMCA Springfield College, em Massachusetts.\n[…]\nApós a formatura, Morgan continuou um ano na YMCA, em Auburn, Maine e foi para o cargo de Diretor de Educação Física da ACM (Associação Cristã de Moços) de Holyoke, em sugestão do pastor Lawrence Rinder Morgan idealizou um jogo menos fatigante para os associados mais velhos da ACM, em 1895 organizou as primeiras manifestações de voleibol. Em busca de um esporte mais \"suave\" do que o basquete, no vôlei combinava elementos de outros esportes como handebol, tênis ou basquete.\n[…]\nMorgan se casou com a pianista Mary King em 7 de outubro de 1893 em West Northfield, Massachusetts. Ambos tiveram cinco filhos: Lillian  Morgan (Springfield, 1894-1989), Rufus George Morgan (Auburn, 1895-1925), Robert William Morgan (New Haven, Connecticut, 1897-1968), James Phillip Morgan (Lockport, 1899-1972) e Richard Morgan Caldwell (1911-1982).\n[…]\nEm 1995 foi criada uma fundação que leva o nome de William George Morgan em sua homenagem, o troféu de vôlei do centenário foi instituído para os jovens jogadores.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "William G. Morgan",
      "descricao": "Professor de educação física americano que criou o vôlei em 1895."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "William Morgan, criador do vôlei, e James Naismith, criador do basquete, eram professores ligados a que mesma organização?",
    "resposta": "Associação Cristã de Moços",
    "fonte": [
      "https://en.wikipedia.org/wiki/William_G._Morgan",
      "https://en.wikipedia.org/wiki/James_Naismith"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/William_G._Morgan",
        "situacao": "ok",
        "texto": "William George Morgan (January 23, 1870 – December 27, 1942) was an American sports educator and the inventor of volleyball, originally called \"Mintonette\", a name derived from the game of badminton which he later agreed to change to better reflect the nature of the sport. He was born in Lockport, New York, U.S.\n[…]\nHe met James Naismith, inventor of basketball, while Morgan was studying at Springfield College in 1892. Like Naismith, Morgan pursued a career in Physical Education at the YMCA. Influenced by Naismith and basketball, in 1895, in Holyoke, Massachusetts, Morgan invented \"Mintonette\" a less vigorous team sport more suitable for older members of the YMCA but one that still required athletic skill. Later Alfred S. Halstead watched it being played and renamed it \"Volleyball\".\n[…]\nWilliam George Morgan graduated from high school at Northfield Mount Hermon School and moved on to attend the YMCA International Training School (Later renamed Springfield College) in Massachusetts with James Naismith, the inventor of basketball. Both Morgan and Naismith pursued careers in Physical Education at the YMCA (Young Men’s Christian Association). Auburn, Maine, at the YMCA, was where Morgan spent one year working prior to graduating from Springfield College.\n[…]\nMorgan continued to tweak the rules of the game until July 1896, where his sport was added into the first official handbook of the North American YMCA Athletic League.\n[…]\nMorgan died on December 27, 1942, in Lockport, New York where he was born.\n[…]\nIn 1995, The Morgan Trophy Award was created. The Award is presented annually to the most outstanding male and female collegiate volleyball player in the US. An elementary school in Holyoke, William Morgan School, bears his name.\n[…]\nMedia related to William G. Morgan at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/James_Naismith",
        "situacao": "ok",
        "texto": "James Naismith ( NAY-smith; November 6, 1861 – November 28, 1939) was a Canadian-American physical educator, physician, Christian chaplain, and sports coach, best known as the inventor of the game of basketball.\n[…]\nIn 1935, the National Association of Basketball Coaches (founded by Naismith's pupil Phog Allen) collected money so the 74-year-old Naismith could witness the introduction of basketball into the official Olympic sports program of the 1936 Summer Olympic Games in Berlin. There, Naismith handed out the medals to three North American teams: the United States, for the gold medal, Canada, for the silver medal, and Mexico, for their bronze medal.\n[…]\nDuring the Olympics, he was named the honorary president of the International Basketball Federation. When Naismith returned, he commented that seeing the game played by many nations was the greatest compensation he could have received for his invention. In 1937, Naismith played a role in the formation of the National Association of Intercollegiate Basketball, which later became the National Association of Intercollegiate Athletics (NAIA).\n[…]\nThe National Collegiate Athletic Association rewards its best players and coaches annually with the Naismith Awards, among them the Naismith College Player of the Year, the Naismith College Coach of the Year, and the Naismith Prep Player of the Year. After the Olympic introduction to men's basketball in 1936, women's basketball became an Olympic event in Montreal during the 1976 Summer Olympics.\n[…]\nRains, Rob; Carpenter, Hellen (2009). James Naismith : the man who invented basketball. Philadelphia: Temple University Press. ISBN 9781439901359. JSTOR j.ctt14btb6m. OCLC 489150081.\n[…]\nJames Naismith at Find a Grave"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/William_George_Morgan",
        "situacao": "ok",
        "texto": "William George Morgan (Lockport, 23 de janeiro de 1870 — Lockport, 27 de dezembro de 1942) foi o inventor do voleibol, originalmente chamado \"Mintonette\", nome derivado do jogo badminton que ele resolveu mudar para melhor refletir a natureza do esporte.\n[…]\nNascido na pequena cidade de Lockport em Niagara County, a oeste do estado de Nova Iorque (Estados Unidos) e cerca de 30 km a leste da queda. Filho de George Henry Morgan e Nancy Chatfield, é o mais velho de seus quatro irmãos. Família de imigrantes galeses, trabalha no negócio da família de barcos com destino a construção de canais na região. Jogador de futebol americano, é contratado por James Naismith para o YMCA Springfield College, em Massachusetts.\n[…]\nApós a formatura, Morgan continuou um ano na YMCA, em Auburn, Maine e foi para o cargo de Diretor de Educação Física da ACM (Associação Cristã de Moços) de Holyoke, em sugestão do pastor Lawrence Rinder Morgan idealizou um jogo menos fatigante para os associados mais velhos da ACM, em 1895 organizou as primeiras manifestações de voleibol. Em busca de um esporte mais \"suave\" do que o basquete, no vôlei combinava elementos de outros esportes como handebol, tênis ou basquete.\n[…]\nMorgan se casou com a pianista Mary King em 7 de outubro de 1893 em West Northfield, Massachusetts. Ambos tiveram cinco filhos: Lillian  Morgan (Springfield, 1894-1989), Rufus George Morgan (Auburn, 1895-1925), Robert William Morgan (New Haven, Connecticut, 1897-1968), James Phillip Morgan (Lockport, 1899-1972) e Richard Morgan Caldwell (1911-1982).\n[…]\nEm 1995 foi criada uma fundação que leva o nome de William George Morgan em sua homenagem, o troféu de vôlei do centenário foi instituído para os jovens jogadores.\n[…]\nJames Naismith",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Líbero",
      "descricao": "Jogador especialista em defesa no vôlei, que usa camisa de cor diferente da dos companheiros."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O jogador de defesa que usa camisa de cor diferente no vôlei tem um nome vindo do italiano. O que essa palavra significa?",
    "resposta": "Livre",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball",
      "https://en.wiktionary.org/wiki/libero"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball",
        "situacao": "ok",
        "texto": "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the program at the Atlanta 1996 Summer Olympics. The adapted version of volleyball at the Su\n[…]\nThe libero is generally the most skilled defensive player on the team. Additionally, there is a libero tracking sheet, where the referees or officiating team keep track of whom the libero substitutes in and out for.\n[…]\nLiberos are defensive players who are responsible for receiving the attack or serve. They are usually the players on the court with the quickest reaction time and best passing skills. Libero means 'free' in Italian—they receive this name as they have the ability to substitute for any other player on the court during each play (usually the middle blocker).\n[…]\nAt some levels where substitutions are unlimited, teams will make use of a defensive specialist in place of or in addition to a libero. This position does not have unique rules like the libero position; instead, these players are used to substitute out a poor back row defender using regular substitution rules. A defensive specialist is often used if a team has a particularly poor back court defender in their right side or left side, but is already using a libero to take out their middles.\n[…]\n9-man: A variant invented by Chinese immigrants to the United States in the 1930s. 9-man is still played in Asian countries and North America, being recognized for its historic and cultural significance. In 2014, a documentary was produced about the sport, and a YouTube documentary was made in 2017.\n[…]\nEcua-volley: A variant invented in Ecuador, with some significant variants, such as number of players, and a heavier ball."
      },
      {
        "url": "https://en.wiktionary.org/wiki/libero",
        "situacao": "ok",
        "texto": "From Italian libero ( literally “ free one ” ) . So called because he has no direct opponent to mark and is therefore free to join in the offensive. The volleyball use is younger.\n[…]\nFrench: libero   (fr)   m , libéro   (fr)   m\n[…]\n( soccer ) a libero , a sweeper [from 1960s]\n[…]\nInflection of libero ( Kotus type 2/ palvelu , no gradation)\n[…]\nPossessive forms of libero ( Kotus type 2/ palvelu , no gradation)\n[…]\nlibero ( feminine libera , masculine plural liberi , feminine plural libere , superlative liberissimo )\n[…]\nIl passaggio era libero . ― The passage was clear .\n[…]\nSono libero stasera. ― I am free this evening.\n[…]\n“ libero ”, in Vocabolario Treccani on line (in Italian), Istituto dell'Enciclopedia Italiana, 2026\n[…]\n( modern Italianate Ecclesiastical ) IPA ( key ) : [ˈliː.be.ro]\n[…]\nlīberō ( present infinitive līberāre , perfect active līberāvī , supine līberātum ) ; first conjugation\n[…]\nConjugation of līberō ( first conjugation )\n[…]\n“ libero ”, in Charlton T. Lewis and Charles Short ( 1879 ), A Latin Dictionary , Oxford: Clarendon Press\n[…]\n“ libero ”, in Gaffiot, Félix ( 1934 ), Dictionnaire illustré latin-français , Hachette.\n[…]\nlibero in Georges, Karl Ernst; Georges, Heinrich ( 1913–1918 ), Ausführliches lateinisch-deutsches Handwörterbuch , 8th edition, volume 2, Hahnsche Buchhandlung\n[…]\nlibero in Academia Română, Micul dicționar academic, ediția a II-a , Bucharest: Univers Enciclopedic, 2010. →ISBN\n[…]\nRetrieved from \" https://en.wiktionary.org/w/index.php?title=libero&oldid=93086355 \"\n[…]\nCategories : English terms borrowed from Italian\n[…]\nItalian terms derived from Proto-Indo-European\n[…]\nItalian terms derived from the Proto-Indo-European word *h₁léwdʰeros\n[…]\nItalian terms derived from the Proto-Indo-European root *h₁lewdʰ-"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol",
        "situacao": "ok",
        "texto": "Voleibol, também conhecido pelas formas reduzidas vôlei (português brasileiro) e vólei (português europeu), é um esporte praticado numa quadra dividida em duas partes por uma rede, possuindo duas equipes de seis jogadores em cada lado. O voleibol foi originalmente chamado de Mintonette, devido à sua semelhança com o Badminton. Ele também tem alguns elementos de tênis e handebol e até beisebol porq\n[…]\nAs partidas de voleibol são confrontos envolvendo duas equipes disputados em ginásio coberto ou ao ar livre conforme desejado.\n[…]\nO líbero é um atleta especializado nos fundamentos que são realizados com mais frequência no fundo da quadra, isto é, recepção e defesa. Esta função foi introduzida pela FIVB em 1998, com o propósito de permitir disputas mais longas de pontos e tornar o jogo deste modo mais atraente para o público. Um conjunto específico de regras se aplica exclusivamente a este jogador.\n[…]\nO líbero deve utilizar uniforme diferente dos demais, antes não podia ser capitão mas desde de 2022 essa regra mudou, não pode atacar, bloquear ou sacar. Quando a bola não está em jogo, ele pode trocar de lugar com qualquer outro jogador sem notificação prévia aos árbitros, e suas substituições não contam para o limite que é concedido por set a cada técnico.\n[…]\nA posição da manchete deve ser executada com eficiência. É considerada um princípio de defesa. O líbero é o que fica encarregado de pegar saques e cortes, usando a manchete. E no caso de alguns levantadores a manchete é usada para uma melhor colocação da bola para o atacante.\n[…]\nLargada: refere-se a um ataque em que jogador não acerta a bola com força, mas antes toca-a levemente, procurando direcioná-la para uma região da quadra adversária que não esteja bem coberta pela defesa.\n[…]\nAtaque sem força: o jogador acerta a bola mas reduz a força e consequentemente sua aceleração, numa tentativa de confundir a defesa adversária.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Líbero",
      "descricao": "Jogador especialista em defesa no vôlei, que usa camisa de cor diferente da dos companheiros."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Com que objetivo a federação internacional criou, no fim dos anos noventa, a posição do líbero?",
    "resposta": "Fortalecer a defesa e alongar os ralis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball",
        "situacao": "ok",
        "texto": "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the program at the Atlanta 1996 Summer Olympics. The adapted version of volleyball at the Su\n[…]\nAn international governing body, the Fédération Internationale de Volleyball (FIVB), was established in 1947, and the sport grew into a global phenomenon. Its social history has included diverse communities such as Christian members of the YMCA, nudists and, more recently, debates over inclusion and fairness regarding transgender athletes.\n[…]\nAn international federation, the Fédération Internationale de Volleyball (FIVB), was founded in 1947, and the first World Championships were held in 1949 for men and 1952 for women. The sport is now popular in Brazil, Europe(where especially Italy, the Netherlands, and Eastern Europe have been major forces since the late 1980s), Russia, Asia including China, and the United States.\n[…]\nThe libero player was introduced internationally in 1998, and made its debut for NCAA competition in 2002. The libero is a player specialized in defensive skills: the libero must wear a contrasting jersey color from their teammates and cannot block or attack the ball when it is entirely above net height. When the ball is not in play, the libero can replace any back-row player, without prior notice to the officials.\n[…]\nSnow volleyball: a variant of beach volleyball that is played on snow. The Fédération Internationale de Volleyball has announced its plans to make snow volleyball part of the future Winter Olympic Games programme.\n[…]\nFédération Internationale de Volleyball – FIVB"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol",
        "situacao": "ok",
        "texto": "Voleibol, também conhecido pelas formas reduzidas vôlei (português brasileiro) e vólei (português europeu), é um esporte praticado numa quadra dividida em duas partes por uma rede, possuindo duas equipes de seis jogadores em cada lado. O voleibol foi originalmente chamado de Mintonette, devido à sua semelhança com o Badminton. Ele também tem alguns elementos de tênis e handebol e até beisebol porq\n[…]\nO líbero é um atleta especializado nos fundamentos que são realizados com mais frequência no fundo da quadra, isto é, recepção e defesa. Esta função foi introduzida pela FIVB em 1998, com o propósito de permitir disputas mais longas de pontos e tornar o jogo deste modo mais atraente para o público. Um conjunto específico de regras se aplica exclusivamente a este jogador.\n[…]\nA posição da manchete deve ser executada com eficiência. É considerada um princípio de defesa. O líbero é o que fica encarregado de pegar saques e cortes, usando a manchete. E no caso de alguns levantadores a manchete é usada para uma melhor colocação da bola para o atacante.\n[…]\nA manchete é o tipo de defesa mais usado no jogo de voleibol. Ela é usada em bolas que vem em baixa altitude, e que não tem chance de ser devolvida com o toque. O movimento da manchete tem início nas pernas e é realizado de baixo para cima numa posição mais ou menos cômoda, é importante que a perna seja flexionada na hora do movimento, garantindo maior precisão e comodidade no movimento.\n[…]\nA defesa consiste em um conjunto de técnicas que têm por objetivo evitar que a bola toque a quadra após o ataque adversário. Além da manchete e do toque, já discutidos nas seções relacionadas ao passe e ao levantamento, algumas das ações específicas que se aplicam a este fundamento são:\n[…]\nPosição de expectativa: Estratégia ou tática adotada antes do saque adversário de posicionamento da defesa, podendo ser no centro ou antecipado em uma das metades da quadra.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Sistema de pontuação por rali",
      "descricao": "Regra do vôlei em que todo rali vale ponto, independentemente de quem sacou, adotada pela FIVB em 1999."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Até 1999, no vôlei, só pontuava quem estava sacando. Por que se passou a dar ponto em todo rali?",
    "resposta": "Partidas com duração previsível para a TV",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball",
        "situacao": "ok",
        "texto": "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the program at the Atlanta 1996 Summer Olympics. The adapted version of volleyball at the Su\n[…]\nThe team may touch the ball up to three times to return the ball to the other side of the court, but individual players may not touch the ball twice consecutively. Typically, the first two touches are used to set up for an attack. An attack is an attempt to direct the ball back over the net in such a way that the team receiving the ball is unable to pass the ball and continue the rally, thus, losing the point.\n[…]\nThe team that wins the rally is awarded a point and serves the ball to start the next rally. A few of the most common faults include:\n[…]\nHitting the ball into the net was considered a foul (with loss of the point or a side-out)—except in the case of the first-try serve.\n[…]\nBefore 1999, points could be scored only when a team had the serve (side-out scoring) and all sets went up to only 15 points. The FIVB changed the rules in 1999 (with the changes being compulsory in 2000) to use the current scoring system (formerly known as rally point system), primarily to make the length of the match more predictable and to make the game more spectator- and television-friendly. The final year of side-out scoring at the NCAA Division I Women's Volleyball Championship was 2000.\n[…]\nRally point scoring debuted in 2001, and games were played to 30 points through 2007. For the 2008 season, games were renamed \"sets\" and reduced to 25 points to win. Most high schools in the U.S. changed to rally scoring in 2003, and several states implemented it the previous year on an experimental basis."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol",
        "situacao": "ok",
        "texto": "Voleibol, também conhecido pelas formas reduzidas vôlei (português brasileiro) e vólei (português europeu), é um esporte praticado numa quadra dividida em duas partes por uma rede, possuindo duas equipes de seis jogadores em cada lado. O voleibol foi originalmente chamado de Mintonette, devido à sua semelhança com o Badminton. Ele também tem alguns elementos de tênis e handebol e até beisebol porq\n[…]\nA Seleção Masculina de Voleibol do Brasil possui os dois recordes mundiais de público na história do voleibol: em 26 de Julho de 1983, no Estádio do Maracanã, no Rio de Janeiro, 95 887 pessoas viram O Grande Desafio de Vôlei – Brasil X URSS, uma partida amistosa na qual o Brasil derrotou a então campeã olímpica e mundial, União Soviética, por 3-1, num recorde absoluto da história do esporte.\n[…]\nAs partidas de voleibol são confrontos envolvendo duas equipes disputados em ginásio coberto ou ao ar livre conforme desejado.\n[…]\nAo contrário de muitos esportes, tais como o futebol ou o basquetebol, o voleibol é jogado por pontos, e não por tempo. Cada partida é dividida em sets que terminam quando uma das duas equipes conquista 25 pontos. Deve haver também uma diferença de no mínimo dois pontos com relação ao placar do adversário - caso contrário, a disputa prossegue até que tal diferença seja atingida. O vencedor será aquele que conquistar primeiramente três sets.\n[…]\nComo o jogo termina quando um time completa três sets vencidos, cada partida de voleibol dura no máximo cinco sets. Se isto ocorrer, o último recebe o nome de tie-break e termina quando um dos times atinge a marca de 15, e não 25 pontos. Como no caso dos demais, também é necessária uma diferença de dois pontos com relação ao placar do adversário.\n[…]\nDurante uma partida, um jogador dá de sessenta a oitenta saltos entre os saques, ataques e bloqueios. Alguns podem chegar a cem saltos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Sinais de mão no vôlei de praia",
      "descricao": "Gestos feitos com os dedos atrás das costas pelos jogadores de vôlei de praia para orientar o parceiro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No vôlei de praia, antes do saque, um jogador faz sinais com os dedos atrás das costas. Para quê?",
    "resposta": "Combinar a jogada sem o rival ver",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beach_volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball",
        "situacao": "ok",
        "texto": "Beach volleyball or beach volley for short, is a team sport played by two teams of two to six players each on a sand court divided by a net. Similar to indoor volleyball, the objective of the game is to send the ball over the net and to ground it on the opponent's side of the court. Each team also works together to prevent the opposing team from grounding the ball on their side of the court.\n[…]\nFor each point, a player from the serving team initiates the serve by tossing the ball into the air and attempting to hit the ball so it passes over the net on a course such that it will land in the opposing team's court. The opposing team must use a combination of no more than three contacts with the ball to return the ball to the opponent's side of the net, and individual players may not touch the ball twice consecutively except after a block touch.\n[…]\nBlock signals may also be given during a rally while the opposing team is preparing their attack.\n[…]\nTraining in beach volleyball typically combines technical repetition of the core contacts (serve, pass, set, attack, block and dig) with practice tasks designed to resemble match play and its constraints, including wind and sun. A common structure is to start with a warm-up, progress to targeted skill work, and then integrate those skills into serve–receive, transition and modified-game situations so that players practice decision-making and partner coordination under realistic conditions.\n[…]\nBeyond professional competition, beach volleyball has developed a recreational travel culture, with casual and amateur players participating in beach volleyball camps and training holidays at coastal destinations worldwide. These programs typically combine coaching, skill development, and social activities, allowing players to improve their game while experiencing the sport in different international locations."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_de_praia",
        "situacao": "ok",
        "texto": "Voleibol de praia (chamado frequentemente no Brasil de vôlei de praia e em Portugal de vólei de praia) é um desporto praticado na areia da praia ou numa quadra de areia dividida em duas metades por uma rede. É praticado por duas equipes, cada uma composta de dois jogadores.\n[…]\nA equipe que vencer a disputa marca um ponto e fará o próximo saque, dando início à próxima disputa. Todos os quatro jogadores sacam. Os sacadores devem se alternar toda vez que sua equipe pontuar, após um ponto da equipe adversária. Tendo surgido na Califórnia e no Havaí (Estados Unidos), o voleibol de praia atingiu popularidade mundial.\n[…]\nA invasão por baixo da rede não é considerada falta, desde que não atrapalhe a jogada do rival.\n[…]\nIsto é comum no voleibol de praia porque há menos jogadores, portanto áreas maiores ficam desprotegidas.\n[…]\nO bloqueio é uma tentativa de impedir que um ataque adversário passe por cima da rede. Os jogadores pulam e estendem os braços, tentando fazer com que a bola os atinja e volte para a área do adversário, preferencialmente caindo no chão. Entretanto, o jogador que está atacando pode tentar jogar a bola de tal maneira que ela bata nos braços do bloqueador e vá para fora, o que configura ponto para a equipe do atacante. É uma jogada difícil, mas muitos jogadores conseguem.\n[…]\nA bola pode tocar qualquer parte do corpo dos atletas, mas deve ser atingida, nunca agarrada ou arremessada. Quando o jogador está se defendendo de uma bola atacada em alta velocidade, a bola pode ser retida entre os dedos, desde que seja de maneira momentânea, muito rápida.\n[…]\nDe acordo com a FIVB, as mulheres jogadoras de voleibol de praia podem escolher entre jogar de shorts ou com um traje único. Entretanto, a maior parte das jogadoras preferem o biquíni.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Vôlei de praia",
      "descricao": "Modalidade de vôlei disputada na areia por duplas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No vôlei de praia, as duplas trocam de lado da quadra várias vezes durante cada set. Por quê?",
    "resposta": "Equilibrar o efeito do vento e do sol",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beach_volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball",
        "situacao": "ok",
        "texto": "Beach volleyball or beach volley for short, is a team sport played by two teams of two to six players each on a sand court divided by a net. Similar to indoor volleyball, the objective of the game is to send the ball over the net and to ground it on the opponent's side of the court. Each team also works together to prevent the opposing team from grounding the ball on their side of the court.\n[…]\nConfederación Sudamericana de Voleibol (CSV) organizes the South American Beach Volleyball Circuit (since 2005).\n[…]\nIn Brazil, the FIVB-approved Brazilian Beach Volleyball Circuit (pt:Circuito Brasileiro de Voleibol de Praia) is the main national tour. It has been organized by the Brazilian Volleyball Confederation since 1991. The tour consists of the main Open Circuit\n[…]\nBeach volleyball is also contested at the Youth Olympic Games (since 2014).\n[…]\nInterest in this tape has surged after American beach volleyball player and three-time Olympic gold medalist Kerri Walsh wore it at the 2008 Beijing Olympics.\n[…]\nSnow volleyball is a winter sport played by two teams on a snow court divided by a net. Originating as a variant of beach volleyball, the rules of snow volleyball are similar to the beach game, with the main differences being the playing surface, the scoring system and the number of players. As in the beach version, matches were originally best of 3 sets played to 21 points, with two players in a team.\n[…]\nIn December 2018, the FIVB approved new rules for snow volleyball which changed the scoring system to a best of 3 sets played to 15 points, and the number of players to three starters and one substitute in a team. Another difference is that unlike beach volleyball, a touch off block does not count as one of the three allowed touches, and any player may make the subsequent touch after the block.\n[…]\nBeach handball\n[…]\nBeach volleyball at the Summer Olympics\n[…]\nList of American beach volleyball players"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_de_praia",
        "situacao": "ok",
        "texto": "Voleibol de praia (chamado frequentemente no Brasil de vôlei de praia e em Portugal de vólei de praia) é um desporto praticado na areia da praia ou numa quadra de areia dividida em duas metades por uma rede. É praticado por duas equipes, cada uma composta de dois jogadores.\n[…]\nAssim como no voleibol, o objetivo do jogo é jogar a bola por cima da rede para fazê-la cair na quadra do adversário, bem como evitar que o adversário consiga fazer o mesmo. Cada equipe pode tocar na bola três vezes antes de jogá-la para o outro lado. A bola é posta em jogo com um saque (ou serviço) — um golpe dado pelo sacador de trás da linha que delimita o fim de sua quadra. Ele deve jogá-la para o outro lado por cima da rede, e assim começa a disputa de cada um dos pontos.\n[…]\nDurante os dois primeiros sets, as equipes trocam de lados da quadra a cada sete pontos disputados. Durante o set de desempate, elas fazem isso a cada cinco pontos disputados;\n[…]\nSacar é o ato de colocar a bola em jogo, golpeando-a desde atrás do fim da quadra e fazendo-a passar por cima da rede. Esta habilidade é bastante similar no voleibol e no voleibol de praia, com a exceção de que na praia o vento pode ter uma influência muito significativa na trajetória da bola.\n[…]\nO passe é o primeiro dos três toques que cada equipe pode fazer, e também é bastante similar ao do voleibol de quadra. No entanto, os padrões são mais restritos na praia. Os jogadores não podem usar o passe para fazer um levantamento. Os jogadores raramente fazem o primeiro toque com as mãos abertas, exceto quando para defender-se de um ataque.\n[…]\nVoleibol de praia nos Jogos Olímpicos\n[…]\nMedalhistas olímpicos do voleibol de praia\n[…]\nCampeonato Mundial de Voleibol de Praia\n[…]\nCircuito Mundial de Voleibol de Praia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Vôlei de praia",
      "descricao": "Modalidade de vôlei disputada na areia por duplas."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No vôlei de praia, ao contrário do vôlei de quadra, que fundamento passa a contar como um dos três toques da equipe?",
    "resposta": "Bloqueio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beach_volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball",
        "situacao": "ok",
        "texto": "Beach volleyball or beach volley for short, is a team sport played by two teams of two to six players each on a sand court divided by a net. Similar to indoor volleyball, the objective of the game is to send the ball over the net and to ground it on the opponent's side of the court. Each team also works together to prevent the opposing team from grounding the ball on their side of the court.\n[…]\nBeach volleyball is fundamentally similar to indoor volleyball. However, there are several differences between the two games that affect players' strategies, gameplay and techniques.\n[…]\nEurope – European Volleyball Confederation (CEV)\n[…]\nConfederación Sudamericana de Voleibol (CSV) organizes the South American Beach Volleyball Circuit (since 2005).\n[…]\nIn Brazil, the FIVB-approved Brazilian Beach Volleyball Circuit (pt:Circuito Brasileiro de Voleibol de Praia) is the main national tour. It has been organized by the Brazilian Volleyball Confederation since 1991. The tour consists of the main Open Circuit\n[…]\nSnow volleyball is a winter sport played by two teams on a snow court divided by a net. Originating as a variant of beach volleyball, the rules of snow volleyball are similar to the beach game, with the main differences being the playing surface, the scoring system and the number of players. As in the beach version, matches were originally best of 3 sets played to 21 points, with two players in a team.\n[…]\nIn December 2018, the FIVB approved new rules for snow volleyball which changed the scoring system to a best of 3 sets played to 15 points, and the number of players to three starters and one substitute in a team. Another difference is that unlike beach volleyball, a touch off block does not count as one of the three allowed touches, and any player may make the subsequent touch after the block.\n[…]\nBeach handball\n[…]\nBeach volleyball at the Summer Olympics\n[…]\nList of American beach volleyball players"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_de_praia",
        "situacao": "ok",
        "texto": "Voleibol de praia (chamado frequentemente no Brasil de vôlei de praia e em Portugal de vólei de praia) é um desporto praticado na areia da praia ou numa quadra de areia dividida em duas metades por uma rede. É praticado por duas equipes, cada uma composta de dois jogadores.\n[…]\nAssim como no voleibol, os jogadores precisam dominar várias habilidades: o saque, o passe, o levantamento, o ataque, o bloqueio e a defesa.\n[…]\nO passe é o primeiro dos três toques que cada equipe pode fazer, e também é bastante similar ao do voleibol de quadra. No entanto, os padrões são mais restritos na praia. Os jogadores não podem usar o passe para fazer um levantamento. Os jogadores raramente fazem o primeiro toque com as mãos abertas, exceto quando para defender-se de um ataque.\n[…]\nO ataque pode ser feito de três formas: o jogador pode atingir bruscamente a bola, fazendo-a seguir uma trajetória descendente bem íngreme. Ele também pode atacar de maneira mais suave, fazendo a bola seguir uma trajetória em arco. Uma terceira opção (bem pouco comum no voleibol mas quase uma marca registrada do voleibol de praia) é quando o jogador dá um toque suave na bola, fazendo-a subir, passar por cima do bloqueador e cair lentamente na quadra adversária.\n[…]\nO bloqueio é uma tentativa de impedir que um ataque adversário passe por cima da rede. Os jogadores pulam e estendem os braços, tentando fazer com que a bola os atinja e volte para a área do adversário, preferencialmente caindo no chão. Entretanto, o jogador que está atacando pode tentar jogar a bola de tal maneira que ela bata nos braços do bloqueador e vá para fora, o que configura ponto para a equipe do atacante. É uma jogada difícil, mas muitos jogadores conseguem.\n[…]\nCampeonato Mundial de Voleibol de Praia\n[…]\nCircuito Mundial de Voleibol de Praia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Futevôlei",
      "descricao": "Esporte criado no Rio de Janeiro que mistura regras do vôlei de praia com os fundamentos do futebol."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nos anos sessenta, em Copacabana, banhistas passaram a chutar a bola por cima das redes de vôlei, criando o futevôlei. Que proibição motivou isso?",
    "resposta": "Proibição do futebol na praia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Footvolley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Footvolley",
        "situacao": "ok",
        "texto": "Footvolley (Portuguese: Futevôlei [futʃiˈvolej] in Brazil, Futevólei [ˌfutɨˈvɔlɐj] in Portugal) (first known as pevoley) is a sport which combines aspects of beach volleyball, tennis, and association football. The sport is similar to kick volleyball and futnet.\n[…]\nAfrican Footvolley League\n[…]\nFootvolley was created by Octavio de Moraes in 1965 on Rio de Janeiro's Copacabana Beach. The game of footvolley was first called 'pévolei' (from pé=foot and vôlei=volley), but the name was discarded in favor of \"futevôlei\" (cf. Portuguese futebol, \"association football\"). Footvolley began in Rio de Janeiro, according to a player because football was banned on the beach, but volleyball courts were open.\n[…]\nThe Pro Footvolley Tour is America's professional touring series, established in March 2008. The Tour began regionally and expanded nationally in 2011. In 2011 and 2012, the Tour was sponsored by Bud Light Lime and in 2013 by Coors Light. There have been events in Santa Barbara; Virginia Beach, Virginia, Seaside Heights, New Jersey; Pompano Beach, Florida; Hollywood Beach, Florida; Lauderdale-by-the-Sea, Florida; Daytona Beach, Florida; Panama City, Florida, and Miami Beach.\n[…]\nThe Tour is the world's number one distributor of professional footvolley content broadcasting on major broadcast networks around the world. The Tour has aired over 300 hours of professional footvolley since 2013. The Tour counts ESPN, BeinSports, Spectrum Sports, Root Sports, AT&T Sports, WAPA Deportes, and Eleven Sports as broadcast partners.\n[…]\nIn 2015, Pro Footvolley Tour launched the world's first footvolley purpose ball. U.S. Footvolley used the ball during the 2016 U.S. Olympic qualifiers. To date, this footvolley-only specific ball is used on the Pro Footvolley Tour."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Futev%C3%B4lei",
        "situacao": "ok",
        "texto": "O futevôlei (português brasileiro) ou futevólei (português europeu) é uma modalidade de esporte de areia praticada em quadras montadas nas orlas. O esporte foi originado nas praias do Rio de Janeiro por volta de 1960 e, ao longo do tempo, cresceu dentro do Brasil, assim como na Europa, na Ásia e nos Estados Unidos.\n[…]\n. Este grupo de amigos decidiu então continuar o seu entretenimento favorito na zona de areia fina, perto do calçadão da famosa Praia de Copacabana no Rio de Janeiro, onde se encontravam os campos de Voleibol de Praia. Neste cenário, e com a inclusão de uma rede a separar os praticantes, decidiram formar duas equipes e jogarem com a rede no meio, surgindo assim uma nova modalidade: o futevólei. A partir deste momento a modalidade ganhou inúmeros praticantes na terra onde a viu nascer.\n[…]\nA quantidade de praticantes e ex-praticantes e o enorme transfer das técnicas e controle de bola do Futebol para o futevólei, leva-nos a concluir a garantia da existência de um mercado enorme de potenciais praticantes de futevólei em Portugal. Atendendo ao elevado mediatismo das estrelas de Futebol, o envolvimento dos mesmos na prática do futevólei poderá contribuir de uma forma significativa para o crescimento, expansão e popularidade da modalidade.\n[…]\nO Campeonato Mundial de Futevôlei 4x4 de 2011 foi realizado na Praia de Copacabana no Rio de Janeiro. Teve seu início no dia 31 de março de 2011. A equipe paraguaia derrotou os anfitriões, com grande superioridade no campo, por 2 sets a 0. O paraguaio Jesús Penayo foi considerado o melhor jogador do torneio, que também contou com a participação das equipes da Argentina, Itália, Portugal, França e Espanha. O Brasil disputou o torneio com duas equipes.\n[…]\nFutebol\n[…]\nVôlei\n[…]\n«GFV - Associação de Futevôlei da Baixada Fluminense». (Brasil)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Futevôlei",
      "descricao": "Esporte criado no Rio de Janeiro que mistura regras do vôlei de praia com os fundamentos do futebol."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Quem é apontado como o criador do futevôlei, no Rio de Janeiro, em 1965?",
    "resposta": "Octávio de Moraes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Footvolley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Footvolley",
        "situacao": "ok",
        "texto": "Footvolley (Portuguese: Futevôlei [futʃiˈvolej] in Brazil, Futevólei [ˌfutɨˈvɔlɐj] in Portugal) (first known as pevoley) is a sport which combines aspects of beach volleyball, tennis, and association football. The sport is similar to kick volleyball and futnet.\n[…]\nFootvolley was created by Octavio de Moraes in 1965 in Rio de Janeiro. Footvolley combines field rules which are based beach volleyball rules with ball-touch rules taken from association football. Essentially footvolley is beach volleyball except players are not allowed to use their hands and a football replaces the volleyball.\n[…]\nAfrican Footvolley League\n[…]\nFootvolley was created by Octavio de Moraes in 1965 on Rio de Janeiro's Copacabana Beach. The game of footvolley was first called 'pévolei' (from pé=foot and vôlei=volley), but the name was discarded in favor of \"futevôlei\" (cf. Portuguese futebol, \"association football\"). Footvolley began in Rio de Janeiro, according to a player because football was banned on the beach, but volleyball courts were open.\n[…]\nThe first International Footvolley event to occur outside of Brazil was in 2003 by the United States Footvolley Association in Miami Beach at the 2003 Fitness Festival. The event led to international players and teams in pursuit of federation status. A tournament was held during the 2016 Summer Olympics in Rio de Janeiro, as a demonstration sport.\n[…]\nIn 2011 Corona FootVolley European Tour was upgraded to Corona FootVolley World Tour inviting teams from all over the world to play.\n[…]\nIn 2015, Pro Footvolley Tour launched the world's first footvolley purpose ball. U.S. Footvolley used the ball during the 2016 U.S. Olympic qualifiers. To date, this footvolley-only specific ball is used on the Pro Footvolley Tour."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Futev%C3%B4lei",
        "situacao": "ok",
        "texto": "O futevôlei (português brasileiro) ou futevólei (português europeu) é uma modalidade de esporte de areia praticada em quadras montadas nas orlas. O esporte foi originado nas praias do Rio de Janeiro por volta de 1960 e, ao longo do tempo, cresceu dentro do Brasil, assim como na Europa, na Ásia e nos Estados Unidos.\n[…]\nNasceu nas praias do Rio de Janeiro, no Brasil, no ano de 1965, quando um grupo de amigos, acostumados a dar toques à beira-mar (como é usual vermos nas praias), foram proibidos pela polícia por desrespeitarem uma lei da época[carece de fontes]?\n[…]\nO futevôlei foi idealizado por Nubar Salibian, na Escola Técnica do Paraná (atual UTFPR), em Curitiba, no ano de 1967. O introdutor do futevôlei nas praias do Rio de Janeiro foi o arquiteto e ex-jogador Octavio Sergio de Moraes.\n[…]\nO Campeonato Mundial de Futevôlei 4x4 de 2011 foi realizado na Praia de Copacabana no Rio de Janeiro. Teve seu início no dia 31 de março de 2011. A equipe paraguaia derrotou os anfitriões, com grande superioridade no campo, por 2 sets a 0. O paraguaio Jesús Penayo foi considerado o melhor jogador do torneio, que também contou com a participação das equipes da Argentina, Itália, Portugal, França e Espanha. O Brasil disputou o torneio com duas equipes.\n[…]\nO Brasileiro de Futevôlei, em 2013, foi disputado por 16 equipes. A final foi conquistada pelo Esporte Clube Bahia, numa vitória de 21 a 15 contra o Náutico, na cidade goiana de Caldas Novas. A partida final teve transmissão nacional ao vivo pelo canal fechado SporTV 2. A equipe campeã era formada pelos jogadores Leandro, Marcelinho, Guga e Café e assegurou vaga para disputar o Mundial de Futevôlei 4 por 4 em março de 2013 no Rio de Janeiro.\n[…]\n«FUTERJ - Federação de Futevôlei do Estado do Rio de Janeiro». (Brasil)\n[…]\n«ACAF - Associação Carioca de Futevôlei». (Brasil)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Seleção Cubana de Voleibol Feminino",
      "descricao": "Seleção feminina de vôlei de Cuba, tricampeã olímpica em 1992, 1996 e 2000."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que apelido em espanhol ganhou a seleção feminina de vôlei de Cuba, tricampeã olímpica entre 1992 e 2000?",
    "resposta": "Morenas del Caribe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cuba_women's_national_volleyball_team"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cuba_women's_national_volleyball_team",
        "situacao": "ok",
        "texto": "The Cuba women's national volleyball team was the first team to break the domination of the USSR and Japan in the world women's volleyball by winning the 1978 World Women's Volleyball Championship.\n[…]\nThe Cuba women's national volleyball team dominated the world in the last decade of the 20th century (1991–2000), winning eight times in a row as FIVB World Champions in straight (6th World Cup in 1991, Barcelona Olympic Games in 1992, 12th World Championship in 1994, 7th World Cup in 1995, Atlanta Olympic Games in 1996, 13th World Championship in 1998, 8th World Cup in 1999, Sydney Olympic Games in 2000).\n[…]\nThe team's nickname was  Las Espectaculares Morenas del Caribe (\"The Spectacular Caribbean Girls\" in English).\n[…]\n1992 –  Gold Medal\n[…]\n2000 –  Gold Medal\n[…]\n2000 –  Gold Medal\n[…]\n1992 Olympic Games –  Gold medal\n[…]\n2000 Olympic Games –  Gold medal\n[…]\nCuba women's national under-23 volleyball team\n[…]\nCuba women's national under-20 volleyball team\n[…]\nCuba women's national under-18 volleyball team"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Cubana_de_Voleibol_Feminino",
        "situacao": "ok",
        "texto": "A Seleção Cubana de Voleibol Feminino representa Cuba em competições internacionais e jogos amistosos. Ela é tricampeã olímpica (1992 , 1996 e 2000), medalhista de bronze em Atenas 2004, multicampeã Pan-Americana, tricampeã mundial (1978, 1994 e 1998), entre outros títulos.\n[…]\nO time nacional de Cuba foi o primeiro a quebrar a dominação da URSS e do Japão no voleibol feminino mundial ganhando o Campeonato Mundial de 1978.\n[…]\nCuba dominou o mundo do vôlei nos anos 1990 (1991-2000), ganhando oito vezes seguidas torneios da FIVB (a Copa do Mundo de Voleibol em 1991, os Jogos Olímpicos de Barcelona em 1992, o  Campeonato Mundial de Voleibol em 1994, a Copa do Mundo em 1995, os Jogos Olímpicos de Atlanta em 1996, o Campeonato Mundial em 1998, a Copa do Mundo em 1999 e os Jogos Olímpicos de Sydney em 2000).\n[…]\nO time também tem o apelido de \"Las Espectacutulares Morenas del Caribe\" (\"As Espetaculares Morenas do Caribe\", em português).\n[…]\n1992 –  Medalha de Ouro\n[…]\n2000 –  Medalha de Ouro\n[…]\nO primeiro encontro entre brasileiras e cubanas em 1991 aconteceu na primeira fase dos Jogos Panamericanos de Havana, onde as cubanas venceram por 3 sets a 0 a equipe brasileira com parciais de 16/14, 15/05 e 15/10, Alguns dias depois, Cuba ficaria com a medalha de ouro dos Jogos, mas tomando um pequeno susto das brasileiras, que haviam vencido de forma dramática a rival seleção peruana na semifinal.\n[…]\nAs chances de classificação para a fase seguinte da competição dependiam de uma vitória sobre Cuba. E ela quase aconteceu. Se em Havana, as cubanas tomaram um pequeno susto contra a seleção de Wadson Lima, no Japão, as brasileiras demonstravam todo o potencial que tinham para integrarem definitivamente a elite do voleibol feminino mundial.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Seleção Cubana de Voleibol Feminino",
      "descricao": "Seleção feminina de vôlei de Cuba, tricampeã olímpica em 1992, 1996 e 2000."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A seleção feminina de vôlei de Cuba ficou fora dos Jogos Olímpicos de 1984 e de 1988. Por quê?",
    "resposta": "Cuba boicotou os dois Jogos",
    "fonte": [
      "https://en.wikipedia.org/wiki/1984_Summer_Olympics_boycott",
      "https://en.wikipedia.org/wiki/1988_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1984_Summer_Olympics_boycott",
        "situacao": "ok",
        "texto": "The boycott of the 1984 Summer Olympics in Los Angeles followed four years after the American-led boycott of the 1980 Summer Olympics in Moscow. The boycott involved nineteen countries: fifteen from the Eastern Bloc led by the Soviet Union, which initiated the boycott on May 8, 1984; and four non‑aligned countries which boycotted on their own initiatives.\n[…]\nIn August 1983, a military coup led by Thomas Sankara overthrew the Upper Voltan government in favor of a left-wing military junta advocating a neocolonialist platform of anti-imperialism and agrarian reform. As an official member of the Non-Aligned Movement, Upper Volta enjoyed diplomatic relations with Non-Aligned and Bloc‑affiliated countries—Libya, the Soviet Union, Cuba, Benin, and the People's Republic of Congo—but was not, itself, part of the Eastern Bloc.\n[…]\nCuba\n[…]\nDavid Israel, director of Peter Ueberroth's office at the LAOOC who accompanied Ueberroth on his unsuccessful trip to Cuba in June 1984 in an attempt at convincing President Fidel Castro to rescind his boycott decision, said the reason Castro gave for the boycott was that \"in the 1960s, during the American embargo, when we stopped having diplomatic relations with the Americans, the only teams they could find to compete with were the Eastern Bloc teams, and out of a sense of loyalty and to show solidarity, he [Castro] was going to boycott.\"\n[…]\nSeychelles indicated on June 4, 1984, two days after the June 2 deadline passed, that it would be sending a five-man team to Los Angeles. President of the Seychellois NOC, John Mascarenhas, blamed a \"mistake somewhere\" as the reason why their acceptance of the invitation was not transmitted by the deadline. The Seychelles, along with Madagascar and Nicaragua, would go on to boycott the 1988 Summer Olympic Games in Seoul."
      },
      {
        "url": "https://en.wikipedia.org/wiki/1988_Summer_Olympics",
        "situacao": "ok",
        "texto": "The 1988 Summer Olympics (Korean: 1988년 하계 올림픽), officially the Games of the XXIV Olympiad (제24회 올림픽경기대회) and officially branded as Seoul 1988 (서울 1988), were an international multi-sport event held from 17 September to 2 October 1988 in Seoul, South Korea. 159 nations were represented at the games by a total of 8,391 athletes (6,197 men and 2,194 women). 237 events were held and 27,221 volunteers\n[…]\nCompared to the 1980 Summer Olympics (Moscow) and the 1984 Summer Olympics (Los Angeles), which were divided into two camps by ideology, the 1988 Seoul Olympics was a competition in which the boycotts virtually disappeared, although they were not completely over. A boycott of the 1988 Seoul Olympics took place, with North Korea along with its allies Cuba, Ethiopia, Nicaragua, and Madagascar taking part. Albania and the Seychelles did not respond to invitations sent by the IOC.\n[…]\nIndonesia gained its first medal in Olympic history when the women's team won a silver medal in archery.\n[…]\nThe games were boycotted by North Korea and its allies Cuba, Nicaragua, Ethiopia, and Madagascar.\n[…]\nCuba made its boycott announcement on January 16, 1988, where it stated \"Cuba deeply laments this decision, but our people and our athletes live by profound ethical norms and a great sense of honor\".\n[…]\nEthiopia announced on January 20, 1988, that it would boycott the 1988 Summer Olympics in solidarity with North Korea, Cuba, Nicaragua, and Madagascar, which had all criticized the decision disallowing North Korea to jointly organize the Games.\n[…]\nWhen the team from the Dominican Republic marched in during the Parade of Nations, the superimposed map erroneously showed the location of Cuba, a nation that did not take part at the Games.\n[…]\nThese are the top ten nations that won medals at the 1988 Games.\n[…]\n\"1988 Seoul Olympic Archive\". Seoul Olympic Sports Promotion Foundation. Archived from the original on 14 August 2009."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Bola de vôlei",
      "descricao": "Bola esférica oficial usada nas partidas de vôlei de quadra."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No fim dos anos noventa, a bola oficial do vôlei deixou de ser toda branca e ganhou cores. Com que objetivo?",
    "resposta": "Ficar mais visível na TV",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball_(ball)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball_(ball)",
        "situacao": "ok",
        "texto": "A volleyball is a ball used to play indoor volleyball, beach volleyball, or other less common variations of the sport. Volleyballs are spherical in shape and typically comprise eighteen nearly rectangular panels made from synthetic or genuine leather. These panels are organized into six identical sections, each consisting of three panels. They are carefully wrapped around a bladder to form the com\n[…]\nIndoor volleyballs are specifically designed for the indoor version of the sport, while beach volleyballs are tailored for the beach game.\n[…]\nIndoor volleyballs come in either a solid white color or the brightest shade of yellow. They are produced in two variations: a youth version, slightly smaller and lighter than adult volleyballs, and a heavier \"medicine ball\" type designed for setters to enhance finger strength.\n[…]\nBeach volleyballs are slightly larger than standard indoor balls, featuring a coarser external texture and lower internal pressure. They come in vibrant colors or a solid white option. The earliest volleyballs were crafted using leather panels over a rubber carcass.\n[…]\nThere are several brands of competitive volleyballs in use, including, but not limited to:\n[…]\nNIVIA Volleyball\n[…]\nMikasa makes the official balls of the Fédération Internationale de Volleyball and the CEV - European Volleyball Confederation (beach and indoor).\n[…]\nMolten makes the official ball of USA Volleyball.\n[…]\nMolten makes the official ball of NCAA indoor volleyball.\n[…]\nWilson makes the official ball of the Association of Volleyball Professionals (beach) and NCAA beach volleyball.\n[…]\nIn 1895, the initial development of the Volleyball ball was made of a basket bladder according to William G. Morgan, the inventor of Volleyball.\n[…]\nOfficial ball supplier\n[…]\nCEV and Mikasa unveil new Champions League volleyball in Vienna\n[…]\nCEV Website - Confederation Europeenne de Volleyball"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Bernard Rajzman",
      "descricao": "Ex-jogador brasileiro de vôlei, medalha de prata nos Jogos de Los Angeles em 1984."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O saque altíssimo do brasileiro Bernard Rajzman, nos anos oitenta, ganhou o nome de que série de ficção científica da TV?",
    "resposta": "Jornada nas Estrelas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bernard_Rajzman"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bernard_Rajzman",
        "situacao": "ok",
        "texto": "Bernard Rajzman ComMM (Rio de Janeiro, 25 de abril de 1957) é um ex-jogador de voleibol brasileiro.\n[…]\nFicou conhecido pelo saque Jornada nas Estrelas (nome oriundo do título da série de TV da década de 1960), jogada que adaptou do voleibol de areia, que consistia em sacar a bola à uma altura considerável, com força e efeito, dificultando a recepção do adversário.\n[…]\nApós deixar as quadras, entrou para a política. Foi Secretário Nacional de Esportes do Governo Collor e Deputado Estadual eleito em 1994, então pelo PPB, da Assembleia Legislativa do Estado do Rio de Janeiro. Tentou reeleger-se em 1998 e obteve a suplência. Assumiu eventualmente até 2002. Seria filiado ainda ao PSDB e PSB. Em 1992, Rajzman foi admitido pelo presidente Fernando Collor à Ordem do Mérito Militar no grau de Comendador especial.\n[…]\nAtualmente, Bernard Rajzman é membro do Comitê Olímpico Brasileiro, membro da Câmara Setorial dos Esportes (Coordenador do Desenvolvimento Esportivo), Presidente da Comissão Nacional de Atletas e Subsecretário do Pan-Americano Rio (2007).\n[…]\nEm 27 outubro de 2005, foi o primeiro brasileiro indicado para integrar o Hall da Fama do vôlei mundial em Massachusetts, Estados Unidos.\n[…]\nSeu filho, Phil Rajzman, é campeão mundial de surf, na categoria Longboard. Seu filho mais novo, Bernardo Rajzman, é jogador de basquete\n[…]\nÍdolos – Bernard"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Seleção Brasileira de Voleibol Masculino",
      "descricao": "Seleção masculina de vôlei de quadra do Brasil."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Bernard, Renan, William e Montanaro levaram o vôlei masculino brasileiro ao pódio em Los Angeles, em 1984. Como essa equipe ficou conhecida?",
    "resposta": "Geração de Prata",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Seleção_Brasileira_de_Voleibol_Masculino"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Seleção_Brasileira_de_Voleibol_Masculino",
        "situacao": "ok",
        "texto": "A seleção brasileira de voleibol masculino é a seleção nacional de voleibol adulta profissional brasileira, organizada e gerenciada pela Confederação Brasileira de Voleibol (CBV). Sua estreia em competições internacionais foi no Campeonato Sul-Americano de 1951, antes mesmo da fundação da CBV. Seus resultados esportivos começaram a aparecer de forma consistente na década de 1980, que configurou o \n[…]\nA partir da década de oitenta, com a chamada Geração de prata, o voleibol brasileiro começou a obter resultados importantes, como o título nos Jogos Pan-Americanos de 1983 e a medalha de prata nas Olimpíadas de Los Angeles em 1984. Esses resultados, aliados a investimentos de marketing e formação de base, melhoraram sensivelmente o nível do voleibol nacional.\n[…]\nCom a saída de Bernardinho em 2017, a seleção passou a ser treinada por Renan Dal Zotto e o time passou a enfrentar uma certa queda de rendimento com a renovação. Em 2018, foi novamente vice-campeã do Campeonato Mundial de Voleibol, perdendo a final para a Polônia pela segunda vez em quatro anos. Na Liga das Nações, o Brasil ficou de fora por duas vezes seguidas da fase final, além de terminar em quarto lugar, perdendo as disputas do bronze para os Estados Unidos (2018) e a Polônia (2019).\n[…]\nNo entanto, nos Jogos Olímpicos de Verão de 2021 (que usaram a marca Tóquio 2020 por questões de patrocínio), os brasileiros enfrentariam aquele que seria o início da maior crise da história da seleção desde o início do auge da geração de prata ao ser eliminados pela Rússia (que disputou como Comitê Olímpico Russo devido as punições pelo uso de doping) na semifinal, chegando a tomar uma virada na parcial do segundo set que estava em 20 a 14 para os brasileiros.\n[…]\ne três de prata conquistadas:\n[…]\nSeleção Brasileira de Voleibol Feminino\n[…]\nSeleção Brasileira de Voleibol Sentado Masculino\n[…]\nSeleção Brasileira de Voleibol Sentado Feminino\n[…]\nGeração de Prata"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Seleção Brasileira de Voleibol Masculino",
      "descricao": "Seleção masculina de vôlei de quadra do Brasil."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Nas finais olímpicas de Atenas 2004 e do Rio 2016, a seleção masculina brasileira de vôlei derrotou o mesmo país. Qual?",
    "resposta": "Itália",
    "distratores": [
      "Rússia",
      "Estados Unidos",
      "Sérvia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Seleção_Brasileira_de_Voleibol_Masculino",
      "https://en.wikipedia.org/wiki/Brazil_men's_national_volleyball_team"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Seleção_Brasileira_de_Voleibol_Masculino",
        "situacao": "ok",
        "texto": "A seleção brasileira de voleibol masculino é a seleção nacional de voleibol adulta profissional brasileira, organizada e gerenciada pela Confederação Brasileira de Voleibol (CBV). Sua estreia em competições internacionais foi no Campeonato Sul-Americano de 1951, antes mesmo da fundação da CBV. Seus resultados esportivos começaram a aparecer de forma consistente na década de 1980, que configurou o \n[…]\nNo entanto, o desfecho de 2016 acabaria sendo positivo para os brasileiros, que conquistariam o tricampeonato olímpico ao vencer a Itália na grande decisão pela segunda vez, repetindo a final de 2004.\n[…]\nO ano de 2023 marcaria o agravamento da crise no voleibol masculino do Brasil. Na VNL, perdeu para a Polônia na casa dos maiores rivais nas quartas. No Campeonato Sul-Americano, a seleção perderia a sua hegemonia estabelecida desde 1951 para a Argentina, causando forte repercussão. Apesar de todos os problemas, a equipe conquistou a vaga para os Jogos Olímpicos de Verão de 2024 no pré-olímpico no Rio de Janeiro, fechando o torneio com apenas uma derrota, para a Alemanha.\n[…]\n• Itália e Bulgária (2018).\n[…]\nA seleção masculina de voleibol do Brasil possui os dois recordes mundiais de público na história do voleibol. Em 26 de julho de 1983, no estádio do Maracanã, no Rio de Janeiro, 95.887 pagantes viram O Grande Desafio de Vôlei – Brasil X URSS, uma partida amistosa na qual o Brasil derrotou a então campeã olímpica e mundial, União Soviética, por 3-1, num recorde absoluto da história do esporte.\n[…]\nNo dia 6 de julho de 1995, no ginásio do Mineirinho, em Belo Horizonte, foi batido o recorde de público numa partida indoor. 25.326 torcedores superlotaram o ginásio para ver a Itália bater o Brasil por 3-2, na fase decisiva de classificação para as finais da Liga Mundial daquele ano. E em Valinhos em 2001.\n[…]\nSeleção Brasileira de Voleibol Sentado Masculino\n[…]\nSeleção Brasileira de Voleibol Sentado Feminino"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_men's_national_volleyball_team",
        "situacao": "ok",
        "texto": "The Brazil men's national volleyball team is governed by the Confederação Brasileira de Voleibol (Brazilian Volleyball Confederation) and takes part in international volleyball competitions. Brazil has won three gold medals at the Olympic Games, has won the World Championship three times, and the World League nine times.\n[…]\nIn 2004, Bernardinho led the Brazilian team to a fourth title of the World League. In August, the Brazilian men's team won the second Olympic gold medal of its history, which happened in Athens in 2004 (the first one was conquered in Barcelona in 1992). In the final, Brazil beat Italy 3–1.\n[…]\nBernardo Rezende (2001–2016)\n[…]\nPrimary sponsors include: main sponsors like Banco do Brasil, Nivea, other sponsors: Globoesporte, Gatorade, Gol Transportes Aereos, Delta Air Lines, Mikasa, Ernst & Young and Asics."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Seleção Brasileira de Voleibol Feminino",
      "descricao": "Seleção feminina de vôlei de quadra do Brasil, campeã olímpica em 2008 e 2012."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Pequim 2008 e Londres 2012 repetiram a mesma final olímpica do vôlei feminino: o Brasil campeão diante de que adversário?",
    "resposta": "Estados Unidos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Seleção_Brasileira_de_Voleibol_Feminino",
      "https://en.wikipedia.org/wiki/Brazil_women's_national_volleyball_team"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Seleção_Brasileira_de_Voleibol_Feminino",
        "situacao": "ok",
        "texto": "Seleção Brasileira de Voleibol Feminino é a seleção nacional feminina de voleibol do Brasil. É administrada pela Confederação Brasileira de Voleibol (CBV) e representa o Brasil nas competições internacionais de vôlei.\n[…]\nEm 2016, jogando em casa, com a torcida lotando o ginásio, nas Olimpíadas do Rio de Janeiro, a equipe feminina foi eliminada nas quartas de final, em jogo contra a China. Foi o pior resultado da seleção nos últimos ciclos olímpicos, mas ela permanece com ótimo retrospecto nos últimos 30 anos, ocupando lugar de destaque entre as melhores seleções do mundo, rivalizando com adversários tradicionais como China, Rússia, Japão, Estados Unidos e Itália.\n[…]\nApesar de seguir um período de renovação, o Brasil acabaria em 2021 voltando ao pódio na Olímpiada de Tóquio, com uma prata após perder a final para os Estados Unidos.\n[…]\nA seleção brasileira já conquistou os principais campeonatos de voleibol, com exceção apenas do Campeonato Mundial e da Copa do Mundo, nos quais o Brasil acabou levando a medalha de prata em três oportunidades em cada competição. Nos Jogos Olímpicos, o Brasil possui seis medalhas: duas de ouro conquistadas em Pequim (2008) e Londres (2012), uma de prata em Tóquio (2020) e três de bronze conquistadas em Atlanta (1996), Sydney (2000) e Paris (2024).\n[…]\nNos Jogos Olímpicos de Pequim, o Brasil realizou oito jogos vencendo todos e perdendo apenas um set na final contra as americanas. Na final dos Jogos Olímpicos de Londres, venceu novamente a equipe americana pelo mesmo placar da final de 2008. Já em Atlanta e Sydney foi barrado nas semi finais por Cuba, porém, conquistou o bronze enfrentando respectivamente a Rússia e os Estados Unidos.\n[…]\nSeleção Brasileira de Voleibol Masculino"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_women's_national_volleyball_team",
        "situacao": "ok",
        "texto": "The Brazil women's national volleyball team is administered by the Confederação Brasileira de Voleibol (CBV) and takes part in international volleyball competitions. With a tally of 47 titles, the Brazil women's volleyball national team is one of the most successful national teams of all time. They have won 6 olympic medals including two gold medals, in the 2008 Summer Olympics and in 2012 Summer \n[…]\nGold: 1972, 1974, 1976, 1978, 1984, 1990, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016\n[…]\nGold: 1982, 1984, 1986, 1988, 1990, 1992, 1994, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2014, 2016\n[…]\nSilver: 1978, 1980, 1996, 2012"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Vôlei masculino nos Jogos Olímpicos de 1992",
      "descricao": "Torneio masculino de vôlei de quadra dos Jogos de Barcelona, vencido pelo Brasil."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que técnico liga o ouro do vôlei masculino brasileiro em Barcelona 1992 aos ouros da seleção feminina em 2008 e 2012?",
    "resposta": "José Roberto Guimarães",
    "fonte": [
      "https://pt.wikipedia.org/wiki/José_Roberto_Guimarães",
      "https://en.wikipedia.org/wiki/José_Roberto_Guimarães"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/José_Roberto_Guimarães",
        "situacao": "ok",
        "texto": "José Roberto Lages Guimarães (Quintana, 31 de julho de 1954), conhecido como Zé Roberto Guimarães ou simplesmente Zé Roberto, é um ex-jogador de vôlei e atual técnico da Seleção Brasileira de Voleibol Feminino. Considerado legendário pela Federação Internacional de Voleibol, é o único técnico no mundo campeão olímpico com seleções de ambos os sexos: a seleção masculina em Barcelona 1992 e a seleçã\n[…]\nÉ irmão do técnico da Seleção Brasileira de Vôlei Sentado Fernando Guimarães.\n[…]\nTécnico\n[…]\nA partir do ano de 1992 José Roberto começou a treinar equipes nacionais masculinas. Daí surgiu a oportunidade de comandar a Seleção Brasileira de Voleibol Masculino, onde conquistou os resultados mais expressivos do voleibol masculino brasileiro como a medalha de ouro na Olimpíadas de Barcelona em 1992, dentre outros títulos de Liga Mundial, Sul-americano e Copa do Mundo de Voleibol. José Roberto permaneceu na Seleção Masculina até a Olimpíada de Atlanta em 1996.\n[…]\nNo ano de 2003, ele assumiu a Seleção Brasileira de Voleibol Feminino, promovendo uma renovação. Conquistou inúmeros títulos como Grand Prix, Sul-americano, Montreux Volley Masters e Copa dos Campeões. Mas também acumulou alguns fracassos como o da Olimpíadas de Atenas de 2004, Campeonato Mundial de Voleibol de 2006 e Jogos Pan-americanos de 2007. Em 2008, José Roberto conquista o heptacampeonato do Grand Prix e a primeira medalha de ouro olímpica do voleibol feminino brasileiro.\n[…]\nEm Londres 2012, José Roberto se tornou o primeiro técnico de voleibol do mundo a conquistar três medalhas de ouro olímpicas: uma no masculino e duas no feminino. O time brasileiro comandado por ele, após um início de competição difícil - na fase de grupos a seleção não foi bem e quase ficou de fora da etapa de chaves - chegou à final batendo os EUA por 3x1.\n[…]\nPela Seleção\n[…]\nMedalha de Ouro nos Jogos Olímpicos de Barcelona 1992\n[…]\n«Trajetória de José Roberto Guimarães»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/José_Roberto_Guimarães",
        "situacao": "ok",
        "texto": "José Roberto Lages Guimarães (Brazilian Portuguese pronunciation: [ʒoˈzɛ ʁoˈbɛʁtu ˈlaɡiz ɡimaˈɾɐ̃js]; born 31 July 1954), known as Zé Roberto, is a Brazilian former volleyball player and current coach. He currently coaches Grêmio Recreativo Barueri. He played volleyball between years 1967–1988 as a professional player and has coached since 1988. He first coached Brazilian women team Eletropaulo. H\n[…]\nHe is the brother of the coach of the Brazilian National Sitting Volleyball Team Fernando Guimarães.\n[…]\nHe coached Brazil Men team between 1992–96, winning an olympic gold medal in Barcelona 1992. Since 2003 he has coached the Brazil Women team, winning two gold medals, in Beijing 2008 and London 2012, a silver medal in Tokyo 2020, and a bronze medal in Paris 2024.\n[…]\nHe was inducted into the International Volleyball Hall of Fame in 2024.\n[…]\n2013 - Brazilian Olympic Committee - Best Coach of Year\n[…]\n(in Turkish) Fenerbahçe Women's Volleyball Official Web Page\n[…]\nMedia related to José Roberto Guimarães at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Bruninho",
      "descricao": "Levantador brasileiro de vôlei, campeão olímpico nos Jogos do Rio em 2016."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Filho do técnico Bernardinho, o levantador Bruninho também é filho de que ex-jogadora da seleção feminina de vôlei?",
    "resposta": "Vera Mossa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bruno_Rezende"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bruno_Rezende",
        "situacao": "ok",
        "texto": "Bruno Mossa de Rezende (Rio de Janeiro, 2 de julho de 1986), mais conhecido como Bruno ou Bruninho, é um jogador de voleibol brasileiro que atuou na posição de levantador pela seleção brasileira e atualmente joga pelo Vôlei Renata/Campinas.\n[…]\nEntrou no time principal em 2007 após polêmica envolvendo o levantador campeão olímpico Ricardinho, que foi cortado dois dias antes da estreia nos Jogos Pan-Americano do Rio por indisciplina. Na época, isso gerou controvérsia na imprensa por Bruninho ser filho do treinador Bernardinho. Jogando no banco daquela competição, a seleção brasileira sagrou-se campeã sem perder nenhum set durante todo o torneio.\n[…]\nEm 2016, Bruninho viu a chance de conquistar mais um título da Liga Mundial ser desperdiçada após sofrer uma derrota por 3 a 0 para a seleção da Sérvia. Ganhou a tão esperada medalha de ouro durante os Jogos Olímpicos do Rio em 2016 em 2016, vencendo a final contra a seleção italiana e sagrando-se o melhor levantador da competição.\n[…]\nE pela primeira vez desde que começou a disputar Olimpíadas, Bruninho e a seleção brasileira não subiram ao pódio, ficando em quarto lugar. Em setembro do mesmo ano, sagrou-se campeão do Campeonato Sul-Americano, sendo premiado tanto como melhor levantador quanto como MVP.\n[…]\nBruninho é filho dos famosos ex-jogadores de voleibol Bernardinho e Vera Mossa. Vivendo por quase três anos na Itália para atuar por clubes locais, o atleta é fluente em italiano.\n[…]\nVôlei Taubaté\n[…]\n«Bruno Rezende»  no Volleybox\n[…]\n«Bruno Rezende» (em italiano)  no Lega Volley\n[…]\n«Bruno Rezende»  no Olympics\n[…]\n«Bruno Rezende»  no Comitê Olímpico do Brasil\n[…]\nBruno Rezende na Olympedia (em inglês)\n[…]\nBruno Rezende no Facebook\n[…]\nBruno Rezende no Instagram\n[…]\nBruno Rezende no X\n[…]\n«Quadro de Medalhas.com - Bruno Rezende»"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Bernardinho",
      "descricao": "Técnico brasileiro de vôlei, campeão olímpico com a seleção masculina em 2004 e 2016."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Antes de ser campeão olímpico como técnico, Bernardinho subiu ao pódio olímpico como levantador. Em que edição dos Jogos?",
    "resposta": "Los Angeles 1984",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bernardinho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bernardinho",
        "situacao": "ok",
        "texto": "Bernardo Rocha de Rezende (Rio de Janeiro, 25 de agosto de 1959), conhecido como Bernardinho, é um ex-jogador, treinador de voleibol, economista, e empresário brasileiro. Atualmente, treina o Sesc-Flamengo e a Seleção Brasileira de Voleibol Masculino.\n[…]\nComo treinador, Bernardinho é um dos maiores campeões da história do voleibol, acumulando mais de trinta títulos importantes em vinte e dois anos de carreira dirigindo as seleções brasileiras feminina e masculina. Entre 2001 e 2017, foi o técnico da Seleção Brasileira de Voleibol Masculino, tendo conquistado dois ouros olímpicos (2004 e 2016), três Campeonatos Mundiais, duas Copas do Mundo, três Copas dos Campeões e oito Ligas Mundiais.\n[…]\nBernardo Rocha de Rezende, mais conhecido como Bernardinho, nasceu em 25 de agosto de 1959. Formado em economia pela PUC-Rio, jogou vôlei de 1979 até 1986, defendendo times do Rio de Janeiro e a seleção brasileira. Em 1988, parou de jogar, começando a carreira de treinador como assistente-técnico da seleção Bebeto de Freitas, nas Olimpíadas de Seul. Dois anos depois, treinou a equipe feminina do Perugia, na Itália, onde ficou até 1992. No ano seguinte, dirigiu a equipe masculina do Modena.\n[…]\nÀs vésperas do início dos Jogos Pan-Americanos do Rio de Janeiro, em 2007, Bernardinho envolveu-se em uma polêmica ao optar pela escalação de última hora de seu filho Bruno no lugar do titular Ricardinho. A decisão levantou suspeitas de nepotismo sobre o treinador e seu filho, que enfrentaram resistência de parte do público e vaias da torcida brasileira em sua estreia na competição.\n[…]\n1984 - Prata na Olimpíada de Los Angeles\n[…]\nJogos Pan-Americano: 1999\n[…]\nJogos Olímpicos: 2004 e 2016\n[…]\n2016 - Vice-campeão da Liga Mundial na Polônia\n[…]\n2016 - Ouro na Olimpíada do Rio, no Brasil"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Bruno Schmidt",
      "descricao": "Jogador brasileiro de vôlei de praia, campeão olímpico com Alison em 2016."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que parentesco liga Bruno Schmidt, campeão olímpico de vôlei de praia em 2016, ao Mão Santa do basquete brasileiro?",
    "resposta": "É sobrinho dele",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bruno_Oscar_Schmidt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bruno_Oscar_Schmidt",
        "situacao": "ok",
        "texto": "Bruno Oscar Schmidt (born 6 October 1986) is a Brazilian beach volleyball player\n[…]\n. Bruno is the nephew of the former Brazilian basketball player Oscar Schmidt and of the TV news announcer Tadeu Schmidt. In 2010, he was named the FIVB Beach Volleyball World Tour Most Improved Player. He was also named the Best Defensive Player in 2013, 2014, 2015, and 2016. Schmidt won the gold medal at the 2015 World Championships with his teammate Alison Cerutti in the Netherlands. He won the gold medal at the 2016 Rio Olympics with Alison Cerutti.\n[…]\nAt the beginning of the 2016 season, Alison / Bruno won the Vitória Open in the final against Nicolai / Lupo after finishing in fifth place in Rio de Janeiro. In the finals of the Grand Slams in Moscow and Olsztyn, they lost against Nummerdor / Varenhorst and the Latvians Samoilovs / Šmēdiņš. They succeeded in Poreč against the Austrian duo Doppler / Horst in the next tournament victory. As world champions, they were set for the Olympic Games in Rio.\n[…]\nAfter staying behind their previous World Tour successes, Alison and Bruno parted in May 2018. After that, Bruno played until January 2019 again at the side of Pedro Solberg and, since then, with Evandro.\n[…]\nBruno Oscar Schmidt at FIVB.com\n[…]\nBruno Oscar Schmidt at the Beach Volleyball Database\n[…]\nBruno Schmidt at Olympics.com\n[…]\nBruno Schmidt at Olympedia\n[…]\nBruno Schmidt at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nBruno Schmidt at Confederação Brasileira de Voleibol (in Brazilian Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bruno_Schmidt",
        "situacao": "ok",
        "texto": "Bruno Oscar Schmidt (Brasília, 6 de outubro de 1986) é um jogador de vôlei de praia brasileiro. Atualmente, joga com Evandro.\n[…]\nMembro de conhecida família do Rio Grande do Norte, Bruno Schmidt é sobrinho do ex-jogador de basquete Oscar Schmidt (1958–2026) e do jornalista Tadeu Schmidt. Nasceu em Brasília, Distrito Federal, e começou a jogar vôlei durante a infância em Cabo Frio, no Rio de Janeiro. Sua primeira grande competição foi o Campeonato Mundial Sub-21, em 2005, realizado no Rio de Janeiro, no Brasil. Na ocasião, ao lado do parceiro Vinícius de Almeida, ficou na nona colocação.\n[…]\nMesmo com os bons resultados ao lado de Pedro Solberg, em 2014, Bruno formou uma nova parceria com Alison Cerutti, o Mamute. Alison vinha de uma parceria muito bem sucedida com Emanuel, o jogador de vôlei de praia mais vencedor de todos os tempos. A nova dupla não decepcionou. Mesmo com pouco tempo de entrosamento, foram campeões dos Jogos Sul-Americanos e do Grand Slam de Klagenfurt, na Áustria.\n[…]\nEm 2015, foram campeões do Campeonato Mundial, do Circuito Mundial e do World Tour Finals, conquistando os três principais títulos da temporada. Nas Olimpíadas do Rio, tornou-se campeão olímpico ao lado de Alison ao vencer por dois sets a zero a parceria italiana formada por Paolo Nicolai e Daniele Lupo. Essa foi a segunda vez que uma dupla brasileira venceu o torneio olímpico masculino de vôlei de praia. Com 1,85 m, Bruno é o menor campeão olímpico do voleibol de praia.\n[…]\nEm seguida, Bruno e Alison conquistaram o título do World Tour Finals, disputado em Toronto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Alison Cerutti",
      "descricao": "Jogador brasileiro de vôlei de praia, campeão olímpico com Bruno Schmidt em 2016."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Pelo tamanho e pela força, o campeão olímpico de vôlei de praia Alison Cerutti ganhou o apelido de que animal pré-histórico?",
    "resposta": "Mamute",
    "distratores": [
      "Tiranossauro",
      "Dente-de-sabre",
      "Megatério"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Alison_Cerutti"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Alison_Cerutti",
        "situacao": "ok",
        "texto": "Alison Conte Cerutti (Cachoeiro de Itapemirim, 7 de dezembro de 1985) é um jogador de vôlei de praia brasileiro.\n[…]\nEm março de 2011, venceu pela primeira vez em sua carreira o Rei da Praia. Em junho do mesmo ano, tornou-se campeão mundial de vôlei de praia ao lado do parceiro Emanuel Rego, em Roma, derrotando os também brasileiros Márcio Araújo e Ricardo Santos. Em agosto de 2011, tornou-se campeão antecipado do circuito mundial de vôlei de praia ao lado do parceiro Emanuel, na Finlândia. No ano posterior, vence novamente o Rei da Praia, conquistando o bicampeonato.\n[…]\nAtual campeão olímpico ao lado de Bruno Schmidt, tendo conquistado a medalha de ouro nos Jogos Olímpicos de 2016.\n[…]\nRei da Praia (2011, 2012, 2013, 2014)"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Adriana Samuel",
      "descricao": "Ex-jogadora brasileira de vôlei de praia, medalha de prata em Atlanta 1996 e de bronze em Sydney 2000."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Adriana Samuel, prata no vôlei de praia em Atlanta 1996, é irmã de que campeão olímpico de vôlei de Barcelona 1992?",
    "resposta": "Tande",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Adriana_Samuel"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Adriana_Samuel",
        "situacao": "ok",
        "texto": "Adriana Samuel Del Negro Gonçalves (Resende, 12 de abril de 1966) é uma ex-jogadora de voleibol de praia brasileira, duas vezes medalhista olímpica. Atualmente, é empresária, palestrante e empreendedora social, sendo responsável pela fundação e gestão de diversos projetos de natureza socioesportiva.\n[…]\nUma das grandes pioneiras do vôlei de praia feminino no Brasil, Adriana entrou para a história ao conquistar a inédita Medalha de Prata na Olimpíada de Atlanta, em 1996, e a Medalha de Bronze na Olimpíada de Sydney, em 2000.\n[…]\nNa Olimpíada de Atlanta, esta mesma parceria as levaria à grande final olímpica do vôlei de praia, enfrentando outra dupla brasileira, composta por Jackie Silva e Sandra Pires. Nesta feita, Adriana e Mônica subiriam ao pódio junto à dupla desafiante, ostentando a Medalha de Prata e consagrando-se, assim, como as primeiras mulheres do Brasil a conquistar medalhas na história das Olimpíadas.\n[…]\nCuriosamente, anos mais tarde, Adriana declararia em entrevista orgulhar-se ainda mais da conquista da sua Medalha de Bronze em Sydney que da sua própria Medalha de Prata conquistada em Atlanta:\n[…]\nCampeã mundial em Haia em 1993 e duas vezes medalhista olímpica, nas Olimpíadas de Atlanta (1996) e de Sydney (2000), Adriana Samuel legou, através da sua trajetória vitoriosa, uma contribuição fundamental para a consolidação do vôlei de praia e do movimento olímpico no Brasil.\n[…]\nIrmã do também jogador profissional de voleibol Tande e do empresário Marcelo Samuel, Adriana é discreta no concernente à sua vida pessoal. Casada desde 1995 com o treinador profissional de voleibol Marcelo \"Alemão\", é mãe de dois filhos: Tom, nascido em 15 de Janeiro de 2004, e Mila, nascida em 29 de Janeiro de 2006.\n[…]\nPerfil de Adriana Samuel no Instagram\n[…]\nPágina de Adriana Samuel no LinkedIn"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Sandra Pires",
      "descricao": "Ex-jogadora brasileira de vôlei de praia, campeã olímpica com Jacqueline Silva em 1996."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Atlanta 1996, Jacqueline Silva e Sandra Pires conquistaram algo que nenhuma brasileira tinha conquistado antes. O quê?",
    "resposta": "Medalha de ouro olímpica",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Sandra_Pires",
      "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_1996_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Sandra_Pires",
        "situacao": "ok",
        "texto": "Sandra Pires Tavares (Rio de Janeiro, 16 de junho de 1973) é uma ex-voleibolista indoor e ex-jogadora de voleibol de praia brasileira.\n[…]\nDestacou-se no vôlei de praia e nesta modalidade conquistou a medalha de ouro no primeiro Campeonato Mundial de Vôlei de Praia em 1997 nos Estados Unidos, também foi medalhista de prata na edição de 2001 na Áustria; participou de três edições olímpicas, obtendo a primeira medalha de ouro nos Jogos Olímpicos de Verão de 1996, a medalha de bronze na edição de 2000 e participou dos Jogos Olímpicos de Atenas em 2004.Também foi medalhista de ouro no Goodwill Games de 2001 nos Estados Unidos.\n[…]\nSua consagração definitiva como atleta aconteceu então na Olimpíada de Atlanta em 1996, estreia da modalidade como esporte olímpico, quando ela e sua parceira Jackie Silva tornaram-se as primeiras mulheres brasileiras a conquistarem uma medalha de ouro olímpica em cem anos de história dos jogos olímpicos Olimpíadas; no primeiro jogo deste torneio, Jackie e Sandra vencem com facilidade a dupla da Indonésia, Kayze e Rayhaku por 15-2.\n[…]\nAlém de se tornar a mulher brasileira com o maior número de medalhas em Olimpíadas em todos os tempos, Sandra foi também escolhida como a primeira mulher do país para ser porta-bandeira no desfile de abertura, nos Jogos de 2000.\n[…]\nEm 2001, Sandra jogou com Tatiana Minello com quem conquistou a medalha de ouro nos Goodwill Games, disputado em Brisbane, Austrália e a medalha de prata na edição do Campeonato Mundial de Vôlei de Praia de 2001, realizado em Klagenfurt, Áustria. No ano seguinte inicia a parceria com Leila Barros\n[…]\nPorta-bandeira na Olimpíada de Sydney 2000"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_1996_Summer_Olympics",
        "situacao": "ok",
        "texto": "Volleyball at the 1996 Summer Olympics featured Men's and Women's beach volleyball for the first time as an official Olympic sport. Men's and Women's indoor volleyball tournaments also took place."
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Carol Solberg",
      "descricao": "Jogadora brasileira de vôlei de praia, filha de Isabel Salgado."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A jogadora de vôlei de praia Carol Solberg é filha de que estrela da seleção feminina de quadra dos anos oitenta?",
    "resposta": "Isabel Salgado",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Isabel_Salgado"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Isabel_Salgado",
        "situacao": "ok",
        "texto": "Maria Isabel Barroso Salgado Alencar (Rio de Janeiro, 2 de agosto de 1960 – São Paulo, 16 de novembro de 2022), foi uma jogadora e e treinadora de voleibol brasileira. Foi também defensora dos direitos da mulher, a primeira atleta a jogar grávida, em alto nível, até os seis meses de gravidez e uma das pioneiras a discutir a relação entre mulheres, esporte e maternidade. Destacou-se ainda por ser a\n[…]\nIsabel Salgado foi mãe de cinco filhos, três dos quais foram bem sucedidos jogadores de vôlei de praia. Maria Clara e Carolina Solberg começaram em 2005. Isabel foi técnica da dupla pela primeira vez no Circuito Mundial em 2008, e ganhou sua primeira medalha de ouro em Myslowice. Já seu filho Pedro Solberg ganhou mais de dez torneios e foi eleito em 2008, com seu parceiro, a dupla do ano e campeão do Circuito Mundial.\n[…]\nApós jogar por mais de trinta anos, ser técnica tanto na quadra quanto na praia, Isabel trocou de função e passou a trabalhar na gestão e supervisão da carreira dos filhos esportistas. Formou dupla com sua filha Maria Clara e, já próximo do fim da carreira, com Carolina, então com 17 anos.\n[…]\nCarol Solberg, assim como a mãe, ainda jovem teve dois filhos e continuou atuando como jogadora de praia, sem interromper a carreira.\n[…]\nIsabel foi casada duas vezes. A primeira com ex-tenista Thomaz Koch e a segunda com cineasta Ruy Solberg. Em 2012, Isabel Salgado reatou seu casamento com seu ex-marido, o cineasta Ruy Solberg, irmão da filmmaker cinemanovista Helena Solberg, com quem foi casada até 15 anos antes. Ruy é pai dos seus filhos Carol e Pedro. Já os pais das primogênitas Pilar e Maria Clara, até hoje, são desconhecidos do grande público, mas sabe-se que foram frutos de breves relacionamentos.\n[…]\n1996-9ºLugar- FIVB- Dupla com Gerusa da Costa (Carolina Beach, Porto Rico)\n[…]\n«Isabel Salgado in der Beachvolleyball Database». www.bvbinfo.com\n[…]\nIsabel no Sports Reference (em inglês)"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Fofão",
      "descricao": "Levantadora brasileira de vôlei, campeã olímpica em Pequim 2008."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por que apelido ficou conhecida a levantadora Hélia Souza, campeã olímpica com a seleção brasileira em Pequim 2008?",
    "resposta": "Fofão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hélia_Souza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hélia_Souza",
        "situacao": "ok",
        "texto": "Hélia Rogério de Souza (born 10 March 1970), nicknamed Fofão, is a Brazilian female retired volleyball player who competed for her country's national team in five consecutive Summer Olympics, starting in 1992. She won a gold medal in 2008 and twice won a bronze medal, in 1996 and 2000. She also claimed the gold medal at the 1999 Pan American Games.\n[…]\nShe is nicknamed Fofão because of her large cheeks similar to a famous character of a 1980s children's TV program in Brazil named \"Fofão\".\n[…]\nFofão retired from the Brazil national team on 7 September 2008, after helping her country beat Dominican Republic 3-0 and won the Final Four competition. From 1991, when she played her first game for Brazil, to 2008, she played 340 games for the national team.\n[…]\nFofão signed with the Turkish club Fenerbahçe Acıbadem since 4 July 2010.\n[…]\nFofão won the bronze medal at the 2010–11 CEV Champions League with Fenerbahçe Acıbadem.\n[…]\nFofão won the silver medal at the 2013 Club World Championship playing with Unilever Vôlei.\n[…]\nDuring the 2015 FIVB Club World Championship, Fofão played with the Brazilian club Rexona Ades Rio and her team lost the bronze medal match to the Swiss Voléro Zürich. At age 45, this was Fofao's last match, after which she announced her retirement.\n[…]\nHelia Rogerio de Souza Pinto at the European Volleyball Confederation\n[…]\nHelia Rogerio de Souza Pinto at FIVB.com\n[…]\nFofão (Hélia Rogério de Souza) at FIVB.org (2008 Women's Volleyball Olympic Games)\n[…]\nFofão (Hélia Rogério de Souza) at Italian League at the Wayback Machine (archived 5 July 2011) (in Italian)\n[…]\nFofão (Hélia Rogério de Souza) at UOL at the Wayback Machine (archived 30 November 2005) (in Portuguese)\n[…]\nFofão (Hélia Rogério de Souza) at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nFofão (Hélia Rogério de Souza) at Olympedia\n[…]\nHelia Souza at Olympics.com\n[…]\nHélia Souza (Fofão) at Volleybox.net"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fof%C3%A3o_%28voleibolista%29",
        "situacao": "ok",
        "texto": "Hélia Rogério de Souza Pinto, mais conhecida como Fofão (São Paulo, 10 de março de 1970), é uma ex-jogadora de voleibol brasileira que atuava como levantadora. Pela Seleção Brasileira, de 1991 a 2008, disputou 340 partidas e esteve presente em cinco edições consecutivas dos Jogos Olímpicos, iniciando em 1992. É uma das atletas mais vitoriosas do vôlei brasileiro e junto de Thaísa Daher uma das dua\n[…]\nFilha de um sapateiro e uma dona de casa, com seis irmãos, Hélia Souza chegou a jogar basquetebol e no começo do voleibol era atacante, até que aos 17 anos no clube Pão de Açúcar teve que substituir uma levantadora e descobriu sua posição ideal. Teve lições com o técnico José Roberto Guimarães, que a apelidou de \"Fofão\" em alusão ao personagem interpretado por Orival Pessini. Jogou por vários clubes da Superliga e também em Itália e Espanha, se aposentando apenas aos 45 anos.\n[…]\nComo diversas outras integrantes da equipe de voleibol feminino que atuou ao longo dos anos 90, Fofão começou a participar de forma sistemática da seleção brasileira a partir de 1993, quando o técnico Bernardo Rezende assumiu o comando da equipe. Durante muitos anos, ela permaneceu como reserva da levantadora Fernanda Venturini, então titular absoluta da posição, inclusive em sua primeira medalha olímpica em Atlanta 1996.\n[…]\nAssim Fofão foi capitã e uma das principais atletas em uma sequência vitoriosa da seleção, culminando no ouro olímpico nos Jogos Olímpicos de Pequim 2008, em vários torneios sendo eleita melhor levantadora. Fofão despediu-se da Seleção Brasileira Feminina de Vôlei em setembro de 2008 conquistando a medalha de ouro no Torneio de Voleibol Final Four, em Fortaleza (Brasil), vencendo a equipe da República Dominicana por 3 x 0. Este foi o seu 340° jogo defendendo a camisa verde e amarela.\n[…]\nFofão foi eleita a melhor levantadora e a MVP do torneio.\n[…]\nMelhor Levantadora dos Jogos Olímpicos-Pequim 2008",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Seleção Italiana de Voleibol Masculino",
      "descricao": "Seleção masculina de vôlei de quadra da Itália."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Como ficou conhecida a seleção masculina da Itália que dominou o vôlei mundial nos anos noventa, sob o comando de Julio Velasco?",
    "resposta": "Geração de Fenômenos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Italy_men's_national_volleyball_team",
      "https://en.wikipedia.org/wiki/Julio_Velasco"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Italy_men's_national_volleyball_team",
        "situacao": "ok",
        "texto": "The Italy men's national volleyball team represents the country in international competitions and friendly matches. The national team is controlled by the Italian Volleyball Federation, the governing body for Volleyball in Italy.\n[…]\nIt is one of the most successful national teams in the history of volleyball, having won five World Championships (1990, 1994, 1998, 2022 and 2025), seven European Championships (1989, 1993, 1995, 1999, 2003, 2005, and 2021), one World Cup (1995), and eight World Leagues (1990, 1991, 1992, 1994, 1995, 1997, 1999, and 2000). Italy is the reigning world champion, having won the 2025 FIVB Volleyball Men's World Championship on 28 September 2025.\n[…]\nUntil the late 1980s, Italy's best results were a silver medal in the home-held 1978 World Championships and a bronze medal at the 1984 Olympic Games. Two years later, Italy classified only 12th at the 1986 World Championships. Subsequenrtly, Italy finished 9th at both the 1987 European championships and the 1988 Summer Olympics. The Italian federation decided for a hiring Julio Velasco as coach, after his successful tenure at Panini Modena.\n[…]\nStarting at the 1990 World Championships and the 1990 Goodwill Games, the Italian National team swept the world volleyball events for five years. They won a gold medal in the World Championships in 1990 and 1994, the World League in 1990, 1991, 1992, 1994 and 1995, the 1991 Mediterranean Games, and the 1993 Grand Champions Cup. They won a silver medal at the 1996 Olympic Games. Julio Velasco left the Italian National Men's Team in 1996.\n[…]\nJulio Velasco (1988-1996)\n[…]\nAntonio Valentini (2021 - Volley Nations League)\n[…]\nThe table below shows the history of kit providers for the Italy national volleyball team."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Julio_Velasco",
        "situacao": "ok",
        "texto": "Julio Velasco (born 9 February 1952) is an Argentine-Italian volleyball coach and former professional player who is the head coach of the Italy women's national volleyball team, which he led to victory at the 2024 Paris Olympics and the 2025 World Championship.\n[…]\nVelasco became an assistant coach of the Argentina men's national volleyball team from 1981 to 1983. In 1983, he was invited to coach Tre Valli Jesi in Italy, where he remained until 1985. He then coached Panini Modena from 1985 to 1989, leading them to four consecutive Italian national championships from 1986 to 1989. In 1989, he was appointed head coach of the Italy men's national volleyball team, leading them to unprecedented success.\n[…]\nAfter the 1996 Olympics, Velasco transitioned to coaching the Italy women's national volleyball team from 1996 to 1997, leading them to a gold medal at the 1997 Mediterranean Games. He coached the Czech Republic men's national volleyball team in 2001 and returned to Italy to coach Copra Piacenza in 2002. In 2008, he became head coach of the Spain men's national volleyball team, which he led to two finals in the European Volleyball League and to a final at the Mediterranean Games.\n[…]\nVelasco subsequently led the Argentina men's team to a gold medal at the 2015 Pan American Games. After the experience with the national team of his home country, Velasco was appointed head coach of Modena Volley for the 2018–2019 season. In 2024, he was formally appointed head coach of the Italy women's national volleyball team. Since his arrival, the Italian national team has won the gold medal at the 2024 Summer Olympics, the  2025 World Championship, and two  Nations League titles.\n[…]\nItaly men's national team\n[…]\nItaly women's national team\n[…]\nArgentina men's national team"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Italiana_de_Voleibol_Masculino",
        "situacao": "ok",
        "texto": "A Seleção Italiana de Voleibol Masculino é a equipe que representa o país supracitado em competições internacionais de voleibol, normalmente organizadas pela Confederação Europeia ou pela Federação Internacional. Tem seu gerenciamento ligado à Federação Italiana de Voleibol (em italiano:  Federazione Italiana Pallavolo, FIPAV), entidade fundada na comuna de Bolonha em 31 de março de 1946 e que reg\n[…]\nO voleibol italiano começou a crescer significativamente em 1989, ano em que o argentino Julio Velasco assumiu o cargo de treinador da seleção. O primeiro desafio de Velasco foi o Campeonato Europeu, realizado na Suécia, onde os italianos venceram os anfitriões e conquistaram a primeira medalha de ouro no certame continental. No mesmo ano, surpreenderam norte-americanos e soviéticos na sexta edição da Copa do Mundo; contudo, a seleção não conseguiu superar Cuba e ficou na segunda colocação.\n[…]\nO ano seguinte marcou o início do ápice mais vitorioso do país, denominado pela imprensa como a \"geração de fenômenos\". O alto rendimento resultou nos títulos da primeira edição da Liga Mundial de Voleibol e dos Jogos da Boa Vontade. Porém, a conquista histórica ocorreu em outubro, mês em que a Itália venceu o Campeonato Mundial sobre Cuba.\n[…]\nEm Jogos Olímpicos, a Itália tem seis medalhas, sendo três pratas e três bronzes. A primeira medalha obtida foi um bronze em Los Angeles, 1984, edição marcada pela ausência da União Soviética e das demais nações do leste europeu. Os outros dois bronzes foram conquistados em 2000 e 2012. Já as medalhas de pratas foram obtidas em 1996, 2004 e 2016. Em campeonatos mundiais, tem cinco pódios: o primeiro aconteceu em 1978, quando a geração il gabbiano d’argento conquistou uma inédita medalha de prata.\n[…]\nA Itália também possui 15 medalhas na Liga Mundial, incluindo oito ouros conquistados nas edições de 1990, 1991, 1992, 1994, 1995, 1997, 1999 e 2000.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Julio Velasco",
      "descricao": "Técnico de vôlei que comandou a seleção masculina da Itália nos anos noventa e a feminina campeã olímpica em 2024."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Julio Velasco, técnico que transformou o vôlei masculino italiano nos anos noventa, nasceu em que país?",
    "resposta": "Argentina",
    "distratores": [
      "Uruguai",
      "Espanha",
      "Cuba"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Julio_Velasco"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Julio_Velasco",
        "situacao": "ok",
        "texto": "Julio Velasco (born 9 February 1952) is an Argentine-Italian volleyball coach and former professional player who is the head coach of the Italy women's national volleyball team, which he led to victory at the 2024 Paris Olympics and the 2025 World Championship.\n[…]\nIn club competitions, Velasco has won four Argentine championships, four Italian championships, three Italian Cups, one Italian Super Cup, and one CEV Cup Winners' Cup. In 2005, he was inducted into the International Volleyball Hall of Fame.\n[…]\nVelasco became an assistant coach of the Argentina men's national volleyball team from 1981 to 1983. In 1983, he was invited to coach Tre Valli Jesi in Italy, where he remained until 1985. He then coached Panini Modena from 1985 to 1989, leading them to four consecutive Italian national championships from 1986 to 1989. In 1989, he was appointed head coach of the Italy men's national volleyball team, leading them to unprecedented success.\n[…]\nVelasco subsequently led the Argentina men's team to a gold medal at the 2015 Pan American Games. After the experience with the national team of his home country, Velasco was appointed head coach of Modena Volley for the 2018–2019 season. In 2024, he was formally appointed head coach of the Italy women's national volleyball team. Since his arrival, the Italian national team has won the gold medal at the 2024 Summer Olympics, the  2025 World Championship, and two  Nations League titles.\n[…]\nItalian Super Cup: 2018\n[…]\nArgentina men's national team\n[…]\nWhile Velasco was living in Italy, Guardiola once travelled hundreds of kilometres to meet the Argentine volleyball coach in person, simply because he had seen him in a television interview and wanted to learn from him.\n[…]\nCoach profile at LegaVolley.it (in Italian)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Julio_Velasco",
        "situacao": "ok",
        "texto": "Julio Velasco (La Plata, 9 de fevereiro de 1952) é um treinador e ex-voleibolista ítalo-argentino.\n[…]\nDirigiu as seleções de Espanha, a Argentina, o Irã e a Itália.\n[…]\nJulio Velasco comandou a seleção argentina de voleibol masculino. Em 2016, representou seu país nos Jogos Olímpicos de Verão no Rio de Janeiro, que ficou em quinto lugar, e em 2024 comandou a seleção italiana feminina que ganhou a VNL e ganhou a medalha de ouro nos jogos Olímpicos de Verão em Paris.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Vôlei feminino nos Jogos Olímpicos de 2024",
      "descricao": "Torneio feminino de vôlei de quadra dos Jogos de Paris, em 2024."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que país conquistou o ouro no vôlei feminino de quadra nos Jogos de Paris, em 2024?",
    "resposta": "Itália",
    "distratores": [
      "Estados Unidos",
      "Brasil",
      "Turquia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball_at_the_2024_Summer_Olympics",
      "https://en.wikipedia.org/wiki/Julio_Velasco"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball_at_the_2024_Summer_Olympics",
        "situacao": "ok",
        "texto": "The volleyball tournaments at the 2024 Summer Olympics in Paris were held from 27 July to 11 August 2024. 24 volleyball teams and 48 beach volleyball teams participated in the tournament. Indoor volleyball competitions occurred at Paris Expo Porte de Versailles with the beach volleyball tournament staged at the Eiffel Tower Stadium in Champ de Mars.\n[…]\nOn 6 April 2022, Fédération Internationale de Volleyball welcomed the International Olympic Committee's decision to approve several changes to the Olympic volleyball program and its qualification system, particularly on the rules of the allocation of the quota places for Paris 2024. Twelve teams per gender will participate in the indoor volleyball tournament. As the host nation, France, the reigning men's champions, reserves a direct spot each for both the men's and women's teams.\n[…]\nThe remainder of the twelve-team field per gender must endure a dual qualification pathway to secure the quota places for Paris 2024. First, the winners and runners-up from each of the three Olympic qualification tournaments will qualify directly for the Games.\n[…]\nTwenty-four teams per gender will participate in the beach volleyball tournament with a maximum of two per NOC. As the host nation, France reserves the direct spot for both the men's and women's beach volleyball teams.\n[…]\nThe initial spot will be directly awarded to the men's and women's winners, respectively, from the 2023 FIVB World Championships, scheduled for 6 to 15 October in Tlaxcala, Mexico, with the seventeen highest-ranked eligible pairs joining them in the field through the FIVB Olympic ranking list (based on the twelve best performances achieved as a pair) between 1 January 2023 and 10 June 2024.\n[…]\nBeach volleyball at the 2023 Pan American Games\n[…]\nVolleyball at the 2023 Pan American Games\n[…]\nSitting volleyball at the 2024 Summer Paralympics"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Julio_Velasco",
        "situacao": "ok",
        "texto": "Julio Velasco (born 9 February 1952) is an Argentine-Italian volleyball coach and former professional player who is the head coach of the Italy women's national volleyball team, which he led to victory at the 2024 Paris Olympics and the 2025 World Championship.\n[…]\nIn club competitions, Velasco has won four Argentine championships, four Italian championships, three Italian Cups, one Italian Super Cup, and one CEV Cup Winners' Cup. In 2005, he was inducted into the International Volleyball Hall of Fame.\n[…]\nHis first trophy with the Italian side came at the 1989 Men's European Volleyball Championship in Sweden, where they topped their preliminary group with only one loss, advanced through the knockout stage, and defeated the host nation Sweden 3–1 in the final to win their first official international title.\n[…]\nHe also secured several other honours, including the FIVB World Grand Champions Cup, Mediterranean Games, FIVB World Cup, and the World Super Challenge. Under his leadership, the Italian men's team also won their first Olympic silver medal at the 1996 Summer Olympics, a historic moment for the Italian Volleyball Federation (FIPAV).\n[…]\nVelasco subsequently led the Argentina men's team to a gold medal at the 2015 Pan American Games. After the experience with the national team of his home country, Velasco was appointed head coach of Modena Volley for the 2018–2019 season. In 2024, he was formally appointed head coach of the Italy women's national volleyball team. Since his arrival, the Italian national team has won the gold medal at the 2024 Summer Olympics, the  2025 World Championship, and two  Nations League titles.\n[…]\nPresident of Italy: Grand Cross of the Order of Merit of the Italian Republic: 2019\n[…]\nCoach profile at LegaVolley.it (in Italian)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2024",
        "situacao": "ok",
        "texto": "Os torneios de voleibol nos Jogos Olímpicos de Verão de 2024 em Paris, na França foram disputados entre 27 de julho e 11 de agosto na Arena 1 Paris Sul. Um total de 311 competidores pertencentes à 17 CONs participaram do evento.\n[…]\nForam vinte e quatro equipes nos torneios de voleibol, sendo doze por gênero. A qualificação para o voleibol foi dividida em três partes. Primeiro, o país-sede garantiu vagas para equipes masculinas e femininas. Em segundo lugar, seis equipes masculinas e seis femininas se classificaram por meio de seis torneios de qualificação olímpica pelos vencedores e vice-campeões de cada torneio.\n[…]\nFinalmente, as últimas cinco equipes masculinas e cinco femininas se classificaram com base no ranking mundial da Federação Internacional de Voleibol (FIVB) após o término das rodadas preliminares da Liga das Nações de 2024. No entanto, para garantir que todos os continentes participassem das Olimpíadas, foi considerado os continentes que ainda não haviam classificado nenhuma equipe.\n[…]\nFeminino\n[…]\nA competição masculina iniciou as disputas do voleibol em 27 de julho e duraram 16 dias até a disputa da medalha de ouro do torneio feminino em 11 de agosto de 2024.\n[…]\nVoleibol nos Jogos Pan-Americanos de 2023\n[…]\nVoleibol sentado nos Jogos Paralímpicos de Verão de 2024",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Seleção Japonesa de Voleibol Feminino",
      "descricao": "Seleção feminina de vôlei do Japão, campeã olímpica em casa em 1964."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que apelido ganhou a seleção feminina de vôlei do Japão, campeã olímpica em casa em 1964 e famosa pelos treinos duríssimos?",
    "resposta": "Bruxas do Oriente",
    "fonte": [
      "https://en.wikipedia.org/wiki/Japan_women's_national_volleyball_team",
      "https://en.wikipedia.org/wiki/Hirobumi_Daimatsu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Japan_women's_national_volleyball_team",
        "situacao": "ok",
        "texto": "The Japan women's national volleyball team (Hinotori Nippon, 火の鳥NIPPON), or All-Japan women's volleyball team, is currently ranked 7th in the world by FIVB. The head coach is Ferhat Akbaş.\n[…]\nJapan was qualified for the 2004 Summer Olympics by winning the Women's Olympic Qualifier that was held from 8 May to 16 May in Tokyo, Japan. In Athens, Greece the team took fifth place in the overall-rankings.\n[…]\nJapan qualified for the 2012 Summer Olympics as the best Asian team in the 2012 FIVB Women's World Olympic Qualification Tournament. In the 2012 Olympics, Japan had been placed on Group A with Russian Federation, Italy, Dominican Republic, the host Great Britain and Algeria. Japan finished third in the Group. In the quarter-finals, Japan faced their old Asian rival China. Saori Kimura and Yukiko Ebata each scored 33 points in this thrilling game in which China were beaten by 3–2.\n[…]\nOn August 13, 2012, Japan Women's Team was ranked 3rd in the world behind United States women's national volleyball team and Brazil women's national volleyball team.\n[…]\n(World Women's Volleyball Championship, World Cup, Olympic Games)\n[…]\nThis page shows Japan women's national volleyball team's Head-to-head record at the Volleyball at the Summer Olympics, FIVB Women's Volleyball Nations League.\n[…]\nThe following is the Japan roster in the 2025 FIVB Women's Volleyball Nations League\n[…]\nJapan women's national under-23 volleyball team\n[…]\nJapan women's national under-20 volleyball team\n[…]\nJapan women's national under-18 volleyball team\n[…]\nJapan men's national volleyball team\n[…]\nVideo of the moments of victory and of awarding gold medal in 1964 Tokyo Olympics"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hirobumi_Daimatsu",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Japonesa_de_Voleibol_Feminino",
        "situacao": "ok",
        "texto": "A seleção japonesa de voleibol feminino é uma equipe asiática composta pelas melhores jogadoras de voleibol do Japão. A equipe é mantida pela Associação Japonesa de Voleibol (em língua japonesa, 日本バレーボール協会). Encontra-se na quinta posição do ranking mundial da FIVB segundo dados de 7 de setembro de 2025.\n[…]\nCom a escolha de Tóquio, em 1959, como sede das Olimpíadas de 1964, o Japão, mesmo sem tradição no vôlei internacional (só em 1955 adotou a regra de seis jogadores em quadra – regra criada nos anos 20), entendeu que não poderia fazer feio como anfitrião. Passou, então, a ambicionar a medalha de ouro em casa. E começou a montar um time para isso.\n[…]\nEste estilo de jogo fez a equipe dominar o cenário mundial do voleibol durante os anos 1960 e 1970 com grandes atletas de raríssimas habilidades. Em 1962, por exemplo, foram responsáveis pela primeira derrota da URSS em partidas oficiais. Nos Jogos Olímpicos conquistaram duas medalhas de ouro, em Tóquio-1964 e Montreal-1976\n[…]\nAlém disso conquistaram por três vezes o Campeonato Mundial de Voleibol Feminino  em 1962 na União Soviética, 1967 no Japão, e 1974 no México, e o o vice-campeonato em 2 oportunidades: 1970 e 1978.\n[…]\nEm 2009, Masayoshi Manabe, assumiu a equipe e provocou uma revolução tática. Como suas jogadoras são baixas (a média de altura das centrais japonesas, é em torno de 1m78, e a média de altura das centrais das principais seleções, gira em torno de 1m95), ele joga sem nenhuma central, tendo em quadra um time com quatro pontas. Com isso, Manabe prioriza a principal característica do vôlei asiático: a capacidade de defender.\n[…]\nConvocadas para a disputa do Campeonato Mundial de 2025 pela seleção japonesa:\n[…]\nConvocadas para a disputa da Liga das Nações de 2025 pela Seleção Japonesa:\n[…]\nSeleção Japonesa de Voleibol Masculino",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Seleção Japonesa de Voleibol Feminino",
      "descricao": "Seleção feminina de vôlei do Japão, campeã olímpica em casa em 1964."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A maioria das jogadoras da seleção japonesa campeã olímpica de vôlei em 1964 trabalhava em que tipo de fábrica?",
    "resposta": "Fábrica têxtil",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hirobumi_Daimatsu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hirobumi_Daimatsu",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Voleibol nos Jogos Olímpicos",
      "descricao": "Presença do vôlei de quadra no programa dos Jogos Olímpicos de Verão."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em que cidade o vôlei de quadra estreou nos Jogos Olímpicos, em 1964?",
    "resposta": "Tóquio",
    "distratores": [
      "Roma",
      "Cidade do México",
      "Melbourne"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball_at_the_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball_at_the_Summer_Olympics",
        "situacao": "ok",
        "texto": "Volleyball has been part of the Summer Olympics program for both men and women consistently since 1964.\n[…]\nThe history of Olympic volleyball can be traced back to the 1924 Summer Olympics in Paris, where it was an unofficial demonstration event. Its addition to the Olympic program, however, was given only after World War II, with the foundation of the FIVB and of some of the continental confederations. In 1957, a special tournament was held during the 53rd IOC session in Sofia, Bulgaria, to support such request. The competition was a success, and the sport was officially introduced in 1964.\n[…]\nIn 1980, many of the strongest teams in men's volleyball belonged to the Eastern Bloc, so the American-led boycott of the 1980 Summer Olympics did not have as great an effect on these events as it had on the women's. The Soviet Union collected their third Olympic gold medal with a 3–1 victory over Bulgaria. With a Soviet-led boycott in 1984, the United States confirmed their new volleyball leadership in the Western World by sweeping smoothly over Brazil in the finals.\n[…]\nThe opening edition of the volleyball Olympic tournament, in 1964, was won by the host nation Japan. There followed two victories in a row by the Soviet Union, in 1968 and 1972. South Korea were expected to get their first gold after beating Japan in the 1975 Pre-Olympic Games, but Japan came back again in 1976 for one last Olympic gold before losing their status of women's volleyball superpowers.\n[…]\nBeach volleyball at the Summer Olympics\n[…]\nOlympic Volleyball History– Comprehensive results for all tournaments."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "O voleibol nos Jogos Olímpicos existe desde Tóquio 1964, quando o esporte foi incorporado oficialmente ao programa olímpico. A partir de Atlanta 1996 também foi introduzido o voleibol de praia.\n[…]\nO voleibol foi jogado pela primeira vez nos Jogos Olímpicos em 1924, como parte de um evento especial onde foram apresentados esportes americanos. Apenas após a Segunda Guerra Mundial, começou-se a considerar a possibilidade de adicioná-lo ao programa das Olimpíadas, sob a pressão da recém-formada Federação Internacional (1947) e algumas das confederações continentais.\n[…]\nO número de times disputando os jogos também cresceu em ritmo constante desde 1964. Desde 1996, 12 equipes tem participado do torneio, tanto no masculino e no feminino. Cada uma das confederações continentais de voleibol é representada por no mínimo uma equipe nas Olimpíadas.\n[…]\nAs primeiras duas edições do torneio olímpico de voleibol masculino foram vencidas pela União Soviética. Medalha de bronze em 1964 e vice-campeão em 1968, o Japão finalmente conquistou o ouro em 1972. Em 1976, a Polônia conseguiu vencer as finais da competição contra os soviéticos em cinco sets bastante disputados e introduzindo uma inovação: o ataque do fundo, com o jogador saltando sem tocar a linha de três metros antes de fazer contato com a bola.\n[…]\nDeste modo, das quinze edições do Torneio Olímpico Feminino de Voleibol disputadas até o momento, sete times conquistaram a medalha de ouro: União Soviética (4), China (3), Cuba (3), Brasil (2), Japão (2), Estados Unidos (1) e Itália (1).\n[…]\nO Torneio Olímpico de Voleibol tem um formato bastante estável. As seguintes regras se aplicam a até os Jogos Olímpicos de Verão de 2020:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Lang Ping",
      "descricao": "Ex-jogadora e técnica chinesa de vôlei, campeã olímpica como atleta em 1984 e como treinadora em 2016."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Pela potência de seu ataque, a chinesa Lang Ping, campeã olímpica de vôlei em 1984, ganhou que apelido?",
    "resposta": "Martelo de Ferro",
    "distratores": [
      "Muralha da China",
      "Dragão Vermelho",
      "Punho de Aço"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lang_Ping"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lang_Ping",
        "situacao": "ok",
        "texto": "\"Jenny\" Lang Ping (Chinese: 郎平; pinyin: Láng Píng; born 10 December 1960) is a Chinese former volleyball player and coach. She is the former head coach of the Chinese women's national volleyball team and U.S. women's national volleyball team. As a player, Lang won the most valuable player award in women's volleyball at the 1984 Olympics.\n[…]\nNicknamed the \"Iron Hammer\", Lang was a member of the Chinese national team that won the gold medal over the United States at the 1984 Summer Olympics in Los Angeles. She was also a member of the team that won the World Championship crown in 1982 in Peru and won World Cup titles in 1981 and 1985 in Japan. She captained the 1985 World Cup team and was named the most valuable player of the tournament. The Chinese women's volleyball team won multiple World Championships during Lang's career.\n[…]\nIn 1995, Lang became the head coach of the Chinese national team and eventually guided the squad to the silver medal at the 1996 Summer Olympics in Atlanta and second place at the 1998 World Championships in Japan. Lang Ping resigned from the Chinese national team in 1998 for health reasons. In the following year, she took a head coaching position in the Italian professional volleyball league and enjoyed great success there, winning various honours and the coach of the year award multiple times.\n[…]\nOn 21 August 2016, Lang Ping guided the Chinese national team to the gold medal at 2016 Rio Olympics. With this victory, Lang Ping became the first person in volleyball history, male or female, to win a gold medal at the Olympic Games as a player with the Chinese national team in Los Angeles 1984 and as the Chinese national team head coach in Rio 2016.\n[…]\nOlympedia profile: Lang Ping\n[…]\nLang Ping: Iron Hammer Nailing Gold (FIVB)\n[…]\nLang Ping's profile at Chinese Olympic Committee (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lang_Ping",
        "situacao": "ok",
        "texto": "\"Jenny\" Lang Ping (em chinês: 郎 平; Pequim, 10 de dezembro de 1960) é uma ex-voleibolista chinesa e treinadora de voleibol. Como jogadora foi campeã olímpica com a seleção chinesa nos Jogos Olímpicos de Los Angeles, em 1984, e 32 anos depois foi técnica da seleção campeã nos Jogos Olímpicos do Rio de Janeiro.\n[…]\nLang Ping  ficou conhecida como   a  \"Martelo de Ferro\"  devido aos poderosos  ataques, provenientes por altos saltos, com elegância no movimento do braço , com rapidez e fortes socos para baixo, demonstrando uma variação estupenda e  muita  tática com altos índices de aproveitamento.\n[…]\nNo referido Grand Prix de Voleibol  estava no Grupo C que jogavam suas partidas em   Ningbo - Zhejiang  estava seu país pela primeira vez como treinadora da equipe americana   e chamou atenção de  uma legião de fãs chineses no ginásio com capacidade  de mais de 7000 espectadores, estava lotado elogiando-a e  com frases de elogios e motivacionais , tais como:  \"Lang Ping, Eu te amo\",  \"Vamos, Ping Lang!\"  e \"Vamos, Martelo de Ferro!\", graças a sua presença  tinham mais de 150 jornalistas cobrindo a partida, ingressos vendidos até pelo valor de 180 dólares, fato inusitado para uma cidade de médio porte.Com tamanha manifestação ficou comovida juntamente com sua equipe; um atleta chegou afirmar para um repórter: \"Agora eu acredito que eles disseram ...\n[…]\nLang Ping é   Michael Jordan  da China\" , pois para os chineses ela não representava apenas uma atleta de alto nível e sim um símbolo grandioso para seu povo.Após o 8º Lugar no Grand Prix de Voleibol de 2005  sua meta era classificar para o Jogos Olímpicos de Verão de 2008.Ainda em 2005 conquistou a prata na Copa dos Campeões de Voleibol Feminino de 2005 e o título do Campeonato Norseca de Voleibol Feminino de 2005 e em 2007 o vice-campeonato.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Lang Ping",
      "descricao": "Ex-jogadora e técnica chinesa de vôlei, campeã olímpica como atleta em 1984 e como treinadora em 2016."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Lang Ping foi campeã olímpica de vôlei como jogadora em 1984. Em que edição dos Jogos ela venceu como técnica da China?",
    "resposta": "Rio 2016",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lang_Ping"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lang_Ping",
        "situacao": "ok",
        "texto": "\"Jenny\" Lang Ping (Chinese: 郎平; pinyin: Láng Píng; born 10 December 1960) is a Chinese former volleyball player and coach. She is the former head coach of the Chinese women's national volleyball team and U.S. women's national volleyball team. As a player, Lang won the most valuable player award in women's volleyball at the 1984 Olympics.\n[…]\nIn 2002, Lang became an inductee of the International Volleyball Hall of Fame in Holyoke, Massachusetts. She coached the U.S. women's national team to a silver medal at the 2008 Beijing Olympics in her home country. Lang later coached the gold medal-winning Chinese women's national team at the 2016 Rio Olympics, becoming the first person in volleyball history, male or female, to have won Olympic gold both as a player and as a coach.\n[…]\nLang Ping was born in Tianjin. She was married to Chinese former handball player \"Frank\" Bai Fan from 1987 to 1995. In 1992, they had a daughter named Lydia Lang Bai, who played volleyball for Stanford University and played the young version of Lang Ping in the film Leap. Lang is currently married to Wang Yucheng, a professor at the China Academy of Social Science.\n[…]\nOn 21 August 2016, Lang Ping guided the Chinese national team to the gold medal at 2016 Rio Olympics. With this victory, Lang Ping became the first person in volleyball history, male or female, to win a gold medal at the Olympic Games as a player with the Chinese national team in Los Angeles 1984 and as the Chinese national team head coach in Rio 2016.\n[…]\nOn 29 September 2019, after China swept all eleven matches to defend the World Cup title, Lang Ping also became the first person to win the back-to-back World Cup champions both as a player (1981, 1985) and as a coach (2015, 2019).\n[…]\n2016 Olympic Games Rio -  Gold Medal\n[…]\nLang Ping's profile at Chinese Olympic Committee (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lang_Ping",
        "situacao": "ok",
        "texto": "\"Jenny\" Lang Ping (em chinês: 郎 平; Pequim, 10 de dezembro de 1960) é uma ex-voleibolista chinesa e treinadora de voleibol. Como jogadora foi campeã olímpica com a seleção chinesa nos Jogos Olímpicos de Los Angeles, em 1984, e 32 anos depois foi técnica da seleção campeã nos Jogos Olímpicos do Rio de Janeiro.\n[…]\nEm 1981 conduziu  Seleção Chinesa de Voleibol Feminino  na conquista do  primeiro título a nível mundial na 3ª edição da Copa do Mundo de Voleibol Feminino de 1981. Em 1982, seguiu colecionando títulos importantes como  ouro no Campeonato Mundial de Voleibol Feminino de 1982, Jogos Olímpicos de Verão de 1984  e  o bicampeonato  da  Copa do Mundo de Voleibol Feminino de 1985, um retrospecto de quatro vitórias consecutivas em 5 anos.\n[…]\nEm 1986 atuou  como Assistente Técnica da  China no Campeonato Mundial de Voleibol Feminino de 1986 sagrando-se campeã e neste ano marcava sua aposentadoria como jogadora e  decidiu cursar  Inglês na  Universidade Normal de Pequim. Em 1987 se casa com Feng Bai, formador de handebol e voleibol  e seu casamento fora televisionado na China.\n[…]\nLang Ping é   Michael Jordan  da China\" , pois para os chineses ela não representava apenas uma atleta de alto nível e sim um símbolo grandioso para seu povo.Após o 8º Lugar no Grand Prix de Voleibol de 2005  sua meta era classificar para o Jogos Olímpicos de Verão de 2008.Ainda em 2005 conquistou a prata na Copa dos Campeões de Voleibol Feminino de 2005 e o título do Campeonato Norseca de Voleibol Feminino de 2005 e em 2007 o vice-campeonato.\n[…]\nJogos Olímpicos\n[…]\nJogos Olímpicos\n[…]\n2016- Ouro (Rio de Janeiro,  Brasil)\n[…]\n1984-MVP dos Jogos Olímpicos de 1984\n[…]\n1999-Nomeada como uma das melhores atletas do século, em uma seleção nacional organizada conjuntamente pelo Comitê Olímpico Chinês, Fok Fundação Henry e Desportos China Imprensa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Maracanãzinho",
      "descricao": "Ginásio poliesportivo vizinho ao estádio do Maracanã, no Rio de Janeiro, palco tradicional do vôlei."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O ginásio carioca apelidado de Maracanãzinho, palco histórico do vôlei, tem que nome oficial?",
    "resposta": "Ginásio Gilberto Cardoso",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Maracanãzinho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Maracanãzinho",
        "situacao": "ok",
        "texto": "O Maracanãzinho é um ginásio inaugurado em 1954 com o nome Ginásio Gilberto Cardoso. Está localizado na cidade do Rio de Janeiro, Brasil e possui capacidade de público atual de 14 000 espectadores, com uma área total de ocupação de 22 940 m².\n[…]\nFoi palco para diversos espetáculos, como os de Aline Barros, Engenheiros do Hawaii, Cyndi Lauper, Dalva de Oliveira, Milton Nascimento, Circo de Moscou, Earth, Wind & Fire, Disney on Ice, Holiday on Ice, Genesis, Dionne Warwick, Midnight Oil, Jackson Five, The Police, Jonas Brothers, Peter Frampton, Roberto Carlos, Gilberto Gil, Rita Lee, Legião Urbana, Alice Cooper, Deep Purple, Trazendo a Arca, Emilinha Borba, Geraldo Vandré e Wilson Simonal; Em fevereiro de 1974, o grupo Secos & Molhados obteve um recorde de público que lotou o ginásio em um show histórico que trouxe aproximadamente 30 mil pessoas dentro do ginásio, sendo que 20 mil pessoas ficaram do lado externo.\n[…]\nEm 1981, a cantora Simone foi a primeira cantora a superlotar sozinha o ginásio.\n[…]\nEm 1955, Gilberto Cardoso, presidente do Flamengo, assistia à final do campeonato de basquete, quando uma cesta no último segundo do jogo, que deu o título ao seu time, fulminou o coração do torcedor que morreu a caminho do hospital. A partir daí o Maracanãzinho recebeu o nome de Ginásio Gilberto Cardoso, por meio da Lei Municipal. É considerado o templo do voleibol no Brasil.\n[…]\nEm 2016, após impasse entre a Concessionária administradora do ginásio e a Rio 2016, voltou a ser fechado para reformas que viriam a atender os Jogos Olímpicos de Verão de 2016.\n[…]\nA calçada da fama do Maracanãzinho, foi inaugurada no dia 18 de abril de 2009, visando homenagear atletas que passaram (e fizeram história) pelo ginásio, em diversas modalidades."
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Wilson",
      "descricao": "Bola de vôlei que se torna companheira do personagem de Tom Hanks no filme Náufrago, de 2000."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No filme Náufrago, por que a bola de vôlei que vira a única companhia de Tom Hanks na ilha se chama Wilson?",
    "resposta": "É a marca da bola",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cast_Away"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cast_Away",
        "situacao": "ok",
        "texto": "Cast Away is a 2000 American survival drama film directed and co-produced by Robert Zemeckis, written by William Broyles Jr. and starring Tom Hanks, Helen Hunt, and Nick Searcy. Hanks plays a FedEx troubleshooter who is stranded on a deserted island after his plane crashes in the South Pacific, and the plot focuses on his desperate attempts to survive and return home. Filming took place from Janua\n[…]\nIn the film, Wilson the volleyball serves as Chuck Noland's personified friend and only companion during the four years that Noland spends alone on a deserted island. Named after the volleyball's manufacturer, Wilson Sporting Goods, the character was created by screenwriter William Broyles Jr.\n[…]\nWhen the idea was presented to Tom Hanks, he happily agreed on the volleyball as a memento to his wife, Rita Wilson, knowing he would be away from home for a long period for filming. From a screenwriting point of view, Wilson also serves to realistically allow dialogue to take place in a solitary scenario.\n[…]\nIt is rumored, but not true, that one of the original volleyball props was sold at an auction for $18,500 to the ex-CEO of FedEx Office, Ken May. At the time of the film's release, Wilson launched its own joint promotion centered on its products \"co-starring\" with Tom Hanks. Wilson manufactured a volleyball with a reproduction of the bloodied handprint face on one side. It was sold for a limited time during the film's initial release and continues to be offered on the company's website.\n[…]\nAn original Wilson the volleyball prop sold via Heritage Auctions on December 7, 2024, for $162,500.\n[…]\nThe second episode of the seventh season of It's Always Sunny in Philadelphia, \"The Gang Goes to the Jersey Shore\", refers to a Cast Away scene. When Frank loses his \"rum ham\" while floating on a raft in the Atlantic Ocean, his anguish resembles that of Tom Hanks' character losing Wilson the volleyball."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cast_Away",
        "situacao": "ok",
        "texto": "Cast Away (bra: Náufrago; prt: Cast Away – O Náufrago ou O Náufrago) é um filme dramático de sobrevivência americano de 2000 dirigido e produzido por Robert Zemeckis e estrelado por Tom Hanks, Helen Hunt e Nick Searcy. Narra a história de um empregado da FedEx que sofre um acidente aéreo e vai parar numa ilha deserta no Pacífico Sul. A trama se concentra em suas tentativas desesperadas de sobreviv\n[…]\nWilson é o amigo imaginário criado pelo personagem Chuck Noland no filme. Wilson é uma bola de vôlei na qual Chuck, em um acesso de raiva, a pega com sua mão sangrando e a joga para longe, fazendo assim com que permanecesse na mesma uma mancha similar a um rosto humano. Chuck a tratava como um amigo nos momentos de solidão. O nome se deve ao fato da marca da bola ser Wilson.\n[…]\nWilson como Bola de Vôlei Wilson Cataway\n[…]\nNo filme, a bola de vôlei Wilson serve como amigo personificado de Chuck Noland e é seu único companheiro durante os quatro anos que Noland passa sozinho na ilha deserta. Nomeado em homenagem ao fabricante do voleibol, Wilson Sporting Goods, o personagem foi criado pelo roteirista William Broyles, Jr..\n[…]\nHá rumores inverídicos que um dos adereços de voleibol originais foi vendido em leilão por US$ 18 500 para o ex-CEO da FedEx Office, Ken May. Na época do lançamento do filme, Wilson lançou sua própria promoção conjunta centrada no fato de que um de seus produtos era \"co-estrelado\" com Tom Hanks. Wilson fabricou uma bola de vôlei com uma reprodução da marca da mão ensanguentada em um dos lados.\n[…]\nO segundo episódio da sétima temporada de It's Always Sunny in Philadelphia, \"The Gang Goes to the Jersey Shore\" faz referência a uma das cenas mais famosas de Cast Away. Quando Frank, flutuando em uma jangada no Oceano Atlântico, perde seu “presunto de rum”; sua angústia lembra a do personagem de Tom Hanks perdendo uma bola de vôlei que ele chamou de \"Wilson\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Wilson",
      "descricao": "Bola de vôlei que se torna companheira do personagem de Tom Hanks no filme Náufrago, de 2000."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Náufrago, o rosto da bola Wilson nasce de uma marca de mão deixada pelo personagem de Tom Hanks. Feita com quê?",
    "resposta": "Sangue",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cast_Away"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cast_Away",
        "situacao": "ok",
        "texto": "Cast Away is a 2000 American survival drama film directed and co-produced by Robert Zemeckis, written by William Broyles Jr. and starring Tom Hanks, Helen Hunt, and Nick Searcy. Hanks plays a FedEx troubleshooter who is stranded on a deserted island after his plane crashes in the South Pacific, and the plot focuses on his desperate attempts to survive and return home. Filming took place from Janua\n[…]\nIn the film, Wilson the volleyball serves as Chuck Noland's personified friend and only companion during the four years that Noland spends alone on a deserted island. Named after the volleyball's manufacturer, Wilson Sporting Goods, the character was created by screenwriter William Broyles Jr.\n[…]\nWhen the idea was presented to Tom Hanks, he happily agreed on the volleyball as a memento to his wife, Rita Wilson, knowing he would be away from home for a long period for filming. From a screenwriting point of view, Wilson also serves to realistically allow dialogue to take place in a solitary scenario.\n[…]\nIt is rumored, but not true, that one of the original volleyball props was sold at an auction for $18,500 to the ex-CEO of FedEx Office, Ken May. At the time of the film's release, Wilson launched its own joint promotion centered on its products \"co-starring\" with Tom Hanks. Wilson manufactured a volleyball with a reproduction of the bloodied handprint face on one side. It was sold for a limited time during the film's initial release and continues to be offered on the company's website.\n[…]\nAn original Wilson the volleyball prop sold via Heritage Auctions on December 7, 2024, for $162,500.\n[…]\nThe second episode of the seventh season of It's Always Sunny in Philadelphia, \"The Gang Goes to the Jersey Shore\", refers to a Cast Away scene. When Frank loses his \"rum ham\" while floating on a raft in the Atlantic Ocean, his anguish resembles that of Tom Hanks' character losing Wilson the volleyball."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cast_Away",
        "situacao": "ok",
        "texto": "Cast Away (bra: Náufrago; prt: Cast Away – O Náufrago ou O Náufrago) é um filme dramático de sobrevivência americano de 2000 dirigido e produzido por Robert Zemeckis e estrelado por Tom Hanks, Helen Hunt e Nick Searcy. Narra a história de um empregado da FedEx que sofre um acidente aéreo e vai parar numa ilha deserta no Pacífico Sul. A trama se concentra em suas tentativas desesperadas de sobreviv\n[…]\nDurante a primeira tentativa de fazer fogo, Chuck produz um corte profundo na mão. Com raiva e dor, ele joga vários objetos, incluindo um Wilson, uma bola de voleibol, de um dos pacotes. Mais tarde, ele desenha um rosto na bola, que ele nomeou como Wilson, com o sangue da mão machucada. Uma noite, Chuck calcula que, para  ser resgatado, os resgatistas teriam que procurar uma área duas vezes maior que o Texas, o que tornava  seu resgate improvável.\n[…]\nWilson é o amigo imaginário criado pelo personagem Chuck Noland no filme. Wilson é uma bola de vôlei na qual Chuck, em um acesso de raiva, a pega com sua mão sangrando e a joga para longe, fazendo assim com que permanecesse na mesma uma mancha similar a um rosto humano. Chuck a tratava como um amigo nos momentos de solidão. O nome se deve ao fato da marca da bola ser Wilson.\n[…]\nNo filme, a bola de vôlei Wilson serve como amigo personificado de Chuck Noland e é seu único companheiro durante os quatro anos que Noland passa sozinho na ilha deserta. Nomeado em homenagem ao fabricante do voleibol, Wilson Sporting Goods, o personagem foi criado pelo roteirista William Broyles, Jr..\n[…]\nO segundo episódio da sétima temporada de It's Always Sunny in Philadelphia, \"The Gang Goes to the Jersey Shore\" faz referência a uma das cenas mais famosas de Cast Away. Quando Frank, flutuando em uma jangada no Oceano Atlântico, perde seu “presunto de rum”; sua angústia lembra a do personagem de Tom Hanks perdendo uma bola de vôlei que ele chamou de \"Wilson\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Vôlei de praia nos Jogos Olímpicos de 2016",
      "descricao": "Torneios olímpicos de vôlei de praia disputados no Rio de Janeiro em 2016."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na Olimpíada do Rio, em 2016, em que praia carioca foi montada a arena do vôlei de praia?",
    "resposta": "Copacabana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2016_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2016_Summer_Olympics",
        "situacao": "ok",
        "texto": "The volleyball tournaments at the 2016 Summer Olympics in Rio de Janeiro was played between 6 and 21 August. 24 volleyball teams and 48 beach volleyball teams, total 386 athletes, participated in the tournament. The indoor volleyball competition took place at Ginásio do Maracanãzinho in Maracanã, and the beach volleyball tournament was held at Copacabana Beach, in the temporary Copacabana Stadium.\n[…]\nIndoor volleyball – men (12 teams, 144 athletes)\n[…]\nIndoor volleyball – women (12 teams, 144 athletes)\n[…]\nBeach volleyball – men (24 teams, 48 athletes)\n[…]\nBeach volleyball – women (24 teams, 48 athletes)\n[…]\nEach National Olympic Committee was allowed to enter one men's and one women's qualified team in the volleyball tournaments and two men's and two women's qualified teams in the beach volleyball.\n[…]\nVolleyball at the 2016 Summer Paralympics\n[…]\nVolleyball:\n[…]\n\"Volleyball at the 2016 Summer Olympics (Rio2016.com)\". Archived from the original on 26 August 2016. Retrieved 23 July 2018.\n[…]\nVolleyball at the 2016 Summer Olympics at SR/Olympics (archived)\n[…]\nVolleyball qualification process (olympics.com.au)\n[…]\nVolleyball qualification website (fivb.com)\n[…]\nResults Book – Volleyball\n[…]\nBeach volleyball:\n[…]\n\"Beach Volleyball at the 2016 Summer Olympics (Rio2016.com)\". Archived from the original on 26 August 2016. Retrieved 23 July 2018.\n[…]\nBeach Volleyball at the 2016 Summer Olympics at SR/Olympics (archived)\n[…]\nBeach Volleyball qualification process (olympics.com.au)\n[…]\nBeach Volleyball qualification website (fivb.com)\n[…]\nResults Book – Beach Volleyball"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2016",
        "situacao": "ok",
        "texto": "Os torneios de voleibol nos Jogos Olímpicos de Verão de 2016 ocorreram entre 6 e 21 de agosto no Ginásio do Maracanãzinho, no Rio de Janeiro. Um total de 288 atletas, sendo 144 de cada sexo e 12 equipes em cada naipe, estiveram nas disputas.\n[…]\nPela primeira vez um torneio olímpico de voleibol contou com a tecnologia do sistema de desafio (challenge), que é usado quando um time contesta a decisão do árbitro. Foram instaladas cerca de 10 câmeras em quadra e na rede para tirar dúvidas da arbitragem e também do público.\n[…]\nDois eventos da modalidade distribuíram medalhas nos Jogos:\n[…]\nFoi permitido para cada Comitê Olímpico Nacional (CON) competir com apenas um time em cada torneio (masculino e feminino). Como país-sede, o Brasil teve garantida uma vaga em cada um dos torneios.\n[…]\n↑1  O Qualificatório Mundial e o Torneio Pré-Olímpico Asiático foram disputados concomitantemente.\n[…]\nO Brasil foi campeão olímpico de voleibol masculino pela terceira vez, derrotando a Itália na final. Os Estados Unidos ganharam o bronze frente à Rússia. No feminino, a China, que eliminou as anfitriãs brasileiras nas quartas de final, superou a Sérvia para ganhar a medalha de ouro e seu terceiro título no torneio feminino (depois de 1984 e 2004), enquanto a seleção dos Estados Unidos foi bronze ao derrotar os Países Baixos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Vôlei de praia nos Jogos Olímpicos de 2024",
      "descricao": "Torneios olímpicos de vôlei de praia disputados em Paris em 2024."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Paris 2024, a arena temporária do vôlei de praia foi erguida aos pés de que monumento?",
    "resposta": "Torre Eiffel",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2024_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2024_Summer_Olympics",
        "situacao": "ok",
        "texto": "The volleyball tournaments at the 2024 Summer Olympics in Paris were held from 27 July to 11 August 2024. 24 volleyball teams and 48 beach volleyball teams participated in the tournament. Indoor volleyball competitions occurred at Paris Expo Porte de Versailles with the beach volleyball tournament staged at the Eiffel Tower Stadium in Champ de Mars.\n[…]\nOn 6 April 2022, Fédération Internationale de Volleyball welcomed the International Olympic Committee's decision to approve several changes to the Olympic volleyball program and its qualification system, particularly on the rules of the allocation of the quota places for Paris 2024. Twelve teams per gender will participate in the indoor volleyball tournament. As the host nation, France, the reigning men's champions, reserves a direct spot each for both the men's and women's teams.\n[…]\nThe remainder of the twelve-team field per gender must endure a dual qualification pathway to secure the quota places for Paris 2024. First, the winners and runners-up from each of the three Olympic qualification tournaments will qualify directly for the Games.\n[…]\nThe remainder of the twenty-four team field must endure a tripartite qualification pathway to obtain a ticket for Paris 2024, abiding by the universality principle and respecting the two-team NOC limit.\n[…]\nThe initial spot will be directly awarded to the men's and women's winners, respectively, from the 2023 FIVB World Championships, scheduled for 6 to 15 October in Tlaxcala, Mexico, with the seventeen highest-ranked eligible pairs joining them in the field through the FIVB Olympic ranking list (based on the twelve best performances achieved as a pair) between 1 January 2023 and 10 June 2024.\n[…]\nBeach volleyball at the 2023 Pan American Games\n[…]\nVolleyball at the 2023 Pan American Games\n[…]\nSitting volleyball at the 2024 Summer Paralympics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2024",
        "situacao": "ok",
        "texto": "Os torneios de voleibol nos Jogos Olímpicos de Verão de 2024 em Paris, na França foram disputados entre 27 de julho e 11 de agosto na Arena 1 Paris Sul. Um total de 311 competidores pertencentes à 17 CONs participaram do evento.\n[…]\nForam vinte e quatro equipes nos torneios de voleibol, sendo doze por gênero. A qualificação para o voleibol foi dividida em três partes. Primeiro, o país-sede garantiu vagas para equipes masculinas e femininas. Em segundo lugar, seis equipes masculinas e seis femininas se classificaram por meio de seis torneios de qualificação olímpica pelos vencedores e vice-campeões de cada torneio.\n[…]\nFinalmente, as últimas cinco equipes masculinas e cinco femininas se classificaram com base no ranking mundial da Federação Internacional de Voleibol (FIVB) após o término das rodadas preliminares da Liga das Nações de 2024. No entanto, para garantir que todos os continentes participassem das Olimpíadas, foi considerado os continentes que ainda não haviam classificado nenhuma equipe.\n[…]\nA competição masculina iniciou as disputas do voleibol em 27 de julho e duraram 16 dias até a disputa da medalha de ouro do torneio feminino em 11 de agosto de 2024.\n[…]\nVoleibol nos Jogos Pan-Americanos de 2023\n[…]\nVoleibol sentado nos Jogos Paralímpicos de Verão de 2024",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Vôlei de praia nos Jogos Olímpicos de 2024",
      "descricao": "Torneios olímpicos de vôlei de praia disputados em Paris em 2024."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Nos Jogos de Paris, em 2024, que dupla brasileira ficou com o ouro no vôlei de praia feminino?",
    "resposta": "Ana Patrícia e Duda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2024_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2024_Summer_Olympics",
        "situacao": "ok",
        "texto": "The volleyball tournaments at the 2024 Summer Olympics in Paris were held from 27 July to 11 August 2024. 24 volleyball teams and 48 beach volleyball teams participated in the tournament. Indoor volleyball competitions occurred at Paris Expo Porte de Versailles with the beach volleyball tournament staged at the Eiffel Tower Stadium in Champ de Mars.\n[…]\nOn 6 April 2022, Fédération Internationale de Volleyball welcomed the International Olympic Committee's decision to approve several changes to the Olympic volleyball program and its qualification system, particularly on the rules of the allocation of the quota places for Paris 2024. Twelve teams per gender will participate in the indoor volleyball tournament. As the host nation, France, the reigning men's champions, reserves a direct spot each for both the men's and women's teams.\n[…]\nThe remainder of the twelve-team field per gender must endure a dual qualification pathway to secure the quota places for Paris 2024. First, the winners and runners-up from each of the three Olympic qualification tournaments will qualify directly for the Games.\n[…]\nThe remainder of the twenty-four team field must endure a tripartite qualification pathway to obtain a ticket for Paris 2024, abiding by the universality principle and respecting the two-team NOC limit.\n[…]\nThe initial spot will be directly awarded to the men's and women's winners, respectively, from the 2023 FIVB World Championships, scheduled for 6 to 15 October in Tlaxcala, Mexico, with the seventeen highest-ranked eligible pairs joining them in the field through the FIVB Olympic ranking list (based on the twelve best performances achieved as a pair) between 1 January 2023 and 10 June 2024.\n[…]\nBeach volleyball at the 2023 Pan American Games\n[…]\nVolleyball at the 2023 Pan American Games\n[…]\nSitting volleyball at the 2024 Summer Paralympics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2024",
        "situacao": "ok",
        "texto": "Os torneios de voleibol nos Jogos Olímpicos de Verão de 2024 em Paris, na França foram disputados entre 27 de julho e 11 de agosto na Arena 1 Paris Sul. Um total de 311 competidores pertencentes à 17 CONs participaram do evento.\n[…]\nForam vinte e quatro equipes nos torneios de voleibol, sendo doze por gênero. A qualificação para o voleibol foi dividida em três partes. Primeiro, o país-sede garantiu vagas para equipes masculinas e femininas. Em segundo lugar, seis equipes masculinas e seis femininas se classificaram por meio de seis torneios de qualificação olímpica pelos vencedores e vice-campeões de cada torneio.\n[…]\nFinalmente, as últimas cinco equipes masculinas e cinco femininas se classificaram com base no ranking mundial da Federação Internacional de Voleibol (FIVB) após o término das rodadas preliminares da Liga das Nações de 2024. No entanto, para garantir que todos os continentes participassem das Olimpíadas, foi considerado os continentes que ainda não haviam classificado nenhuma equipe.\n[…]\nFeminino\n[…]\nA competição masculina iniciou as disputas do voleibol em 27 de julho e duraram 16 dias até a disputa da medalha de ouro do torneio feminino em 11 de agosto de 2024.\n[…]\nVoleibol nos Jogos Pan-Americanos de 2023\n[…]\nVoleibol sentado nos Jogos Paralímpicos de Verão de 2024",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Vôlei de praia nos Jogos Olímpicos de 2004",
      "descricao": "Torneios olímpicos de vôlei de praia disputados em Atenas em 2004."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em Atenas 2004, o ouro do vôlei de praia masculino ficou com Emanuel e com que parceiro brasileiro?",
    "resposta": "Ricardo Santos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2004_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2004_Summer_Olympics",
        "situacao": "ok",
        "texto": "Volleyball at the 2004 Summer Olympics consisted of indoor volleyball held at the Peace and Friendship Stadium and beach volleyball held at the Faliro Olympic Beach Volleyball Centre, in the southern portion of the Roth Pavilion; both were located at the Faliro Coastal Zone Olympic Complex.\n[…]\nVolleyball Archived 23 April 2013 at the Wayback Machine\n[…]\nOfficial result book – Beach Volleyball\n[…]\nOfficial result book – Volleyball"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2004",
        "situacao": "ok",
        "texto": "O voleibol nos Jogos Olímpicos de Verão de 2004 foi disputado no Estádio da Paz e da Amizade em Atenas, tendo como campeões o Brasil no masculino e a China no feminino.\n[…]\nDois eventos da modalidade distribuíram medalhas nos Jogos:\n[…]\nTorneio masculino (12 equipes)\n[…]\nFoi permitido para cada Comitê Olímpico Nacional (CON) competir com apenas um time em cada torneio (masculino e feminino). Como país-sede, a Grécia teve garantida uma vaga em cada um dos torneios.\n[…]\nMasculino\n[…]\n↑1  O Segundo Qualificatório Mundial e o Torneio Pré-Olímpico Asiático foram disputados concomitantemente.\n[…]\nO Brasil foi campeão olímpico de voleibol masculino pela segunda vez, derrotando a Itália na final. A Rússia ganhou o bronze frente aos Estados Unidos. No feminino, a China superou a Rússia para ganhar a medalha de ouro e seu segundo título no torneio, enquanto a seleção de Cuba foi bronze ao derrotar o Brasil.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Vôlei de praia nos Jogos Olímpicos",
      "descricao": "Presença do vôlei de praia no programa dos Jogos Olímpicos de Verão."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Depois de aparecer como exibição em Barcelona 1992, o vôlei de praia passou a valer medalha olímpica em que edição dos Jogos?",
    "resposta": "Atlanta 1996",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_Summer_Olympics",
        "situacao": "ok",
        "texto": "Beach volleyball was introduced at the Summer Olympic Games in the 1992 Games as a demonstration event, and has been an official Olympic sport since  1996.\n[…]\nIn the first tournament, played in the 1996 Olympics, the matches were played at \"Atlanta Beach\" in Jonesboro, Georgia. The winners of the semifinals played for the gold and silver medals. The losers of the semifinal played for third and fourth places. The final was contested between the Americans Karch Kiraly and Kent Steffes versus Mike Dodd and Mike Whitmarsh.\n[…]\nIn Atlanta, Georgia, in 1996, there were eighteen teams entered, and the championship match was played between two Brazilian teams: Jackie Silva and Sandra Pires versus Mônica Rodrigues and Adriana Samuel. The Australians Natalie Cook and Kerri Pottharst edged out the Americans for the bronze medal.\n[…]\nAt the Sydney Olympics of 2000, the number of teams was increased to 24. One of the two Australian teams, Natalie Cook and Kerri Pottharst, won the gold medal over the Brazilians Adriana Behar and Shelda Bede, four years after winning the bronze medal in Atlanta. Another Brazilian team, featuring 1996 champion Sandra Pires and runner-up Adriana Samuel, edged out the Japanese for the bronze medal.\n[…]\nTalita and Larissa also lost the bronze medal to the United States, making Walsh Jennings the only player to win four beach volleyball Olympic medals. The defeat also broke a streak where every tournament had one country winning medals with both their teams: Brazil in 1996 (gold and silver) and 2000 (silver and bronze), United States in 2004 (gold and bronze) and 2012 (gold and silver), and China in 2008 (silver and bronze)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_de_praia_nos_Jogos_Ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "O voleibol de praia foi integrado ao programa dos Jogos Olímpicos na edição de Atlanta 1996, sendo disputado ininterruptamente desde então.\n[…]\nEm Barcelona 1992, já havia sido disputado como esporte de demonstração, portanto, os resultados não são computados para o quadro geral de medalhas.\n[…]\nAté 2016, o Brasil e os Estados Unidos haviam sido medalhistas no mínimo uma vez em todas as edições, seja na categoria masculina ou feminina. Em Tóquio 2020, o Brasil perdeu a sequência de seis edições consecutivas entre os três primeiros, enquanto os Estados Unidos ficaram fora do pódio em Paris 2024.\n[…]\nCampeonato Mundial de Voleibol de Praia\n[…]\nCircuito Mundial de Voleibol de Praia\n[…]\n«Informações do voleibol de praia no site do COI» (em inglês)\n[…]\n«Informações do voleibol de praia na Olympedia» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Vôlei sentado",
      "descricao": "Variante do vôlei para pessoas com deficiência, jogada com os atletas sentados no chão."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O vôlei sentado, jogado por atletas com deficiência e hoje paralímpico, surgiu em 1956 em que país europeu?",
    "resposta": "Holanda",
    "distratores": [
      "Alemanha",
      "Inglaterra",
      "Suécia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sitting_volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sitting_volleyball",
        "situacao": "ok",
        "texto": "Sitting volleyball is a form of volleyball for athletes with a disability organized by World ParaVolley. As opposed to standing volleyball, sitting volleyball players must sit on the floor to play.\n[…]\nSitting volleyball was invented in the Netherlands by the Dutch Sport Committee in 1956 as a rehabilitation sport for injured soldiers.\n[…]\nAthletes with the following disabilities are eligible to compete in sitting volleyball: athletes with amputations, spinal cord injuries, cerebral palsy, brain injuries and stroke. Classifications of these athletes by disability are placed into two categories: VS1 and VS2 formerly D and MD.\n[…]\nList of sitting volleyball national teams\n[…]\nSitting volleyball was first demonstrated at the Summer Paralympic Games in 1976 and was introduced as a full Paralympic event in 1980. The 2000 games was the last time standing volleyball appeared on the Paralympic programme. The women's sitting volleyball event introduction followed in the 2004 Paralympic Games.\n[…]\nWomen's European Sitting Volleyball Championships\n[…]\nMen's European Sitting Volleyball Championships\n[…]\nVolleyball variations\n[…]\nVolleyball at the Summer Paralympics\n[…]\nWorld Para Volleyball Championship\n[…]\n2022 Sitting Volleyball World Championships – Men's event\n[…]\n2022 Sitting Volleyball World Championships – Women's event\n[…]\n2023 Asia and Oceania Sitting Volleyball Championships\n[…]\nSitting volleyball at the Asian Para Games\n[…]\n2023 Sitting Volleyball World Cup – Men's event\n[…]\n2023 Sitting Volleyball World Cup – Women's event\n[…]\nSitting volleyball at the International Paralympic Committee\n[…]\nVolleySlide\n[…]\nBeijing 2008 Paralympic Sitting Volleyball Information with an Australian slant from accessibility.com.au at the Wayback Machine (archived 23 July 2008)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_sentado",
        "situacao": "ok",
        "texto": "O voleibol sentado é uma modalidade de voleibol para atletas com deficiência — física ou relacionada à locomoção — organizada pela World ParaVolley. Ao contrário do voleibol em pé, os jogadores de voleibol sentado devem sentar no chão para jogar.\n[…]\nO voleibol sentado foi inventado nos Países Baixos em 1956, pelo Comitê Esportivo Holandês, como um esporte de reabilitação para soldados feridos. Em 1958, o primeiro contato internacional de voleibol sentado foi realizado entre times de clubes alemães e holandeses.\n[…]\nFoi criado como uma combinação de voleibol e sitzball, um esporte alemão sem rede e jogadores sentados. Em Paralimpíadas, o voleibol sentado apareceu pela primeira vez nos Jogos Paralímpicos de Toronto de 1976 como um esporte de demonstração para atletas com mobilidade reduzida, e, assim como o voleibol em pé, foi oficialmente incluído como esporte de medalha nos Jogos de Arnhem em 1980. O voleibol sentado feminino foi adicionado para as Paralimpíadas de Atenas de 2004.\n[…]\nAtletas com as seguintes deficiências são elegíveis para competir no vôlei sentado: atletas com amputações, lesões na medula espinhal, paralisia cerebral, lesões cerebrais e derrame. As classificações desses atletas por deficiência são colocadas em duas categorias: MD e D. MD significa \"Minimamente Incapacitado\" e D significa \"Desabilitado\".\n[…]\nVoleibol em pé é o único esporte de equipe que pode ser jogado \"em pé\" por pessoas com deficiências físicas. Os atletas amputados têm a opção de jogar com ou sem próteses. Dependendo do senso de equilíbrio, alguns amputados acima do joelho escolhem jogar sem uma prótese, pulando em uma perna. O vôlei em pé é jogado em regras integradas da Federação Internacional de Voleibol (FIVB).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Federação Internacional de Voleibol",
      "descricao": "Entidade que governa o vôlei de quadra e de praia no mundo, conhecida pela sigla FIVB."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A Federação Internacional de Vôlei foi fundada em 1947 em que capital europeia?",
    "resposta": "Paris",
    "distratores": [
      "Londres",
      "Roma",
      "Bruxelas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fédération_Internationale_de_Volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fédération_Internationale_de_Volleyball",
        "situacao": "ok",
        "texto": "The Fédération Internationale de Volleyball (French for 'International Volleyball Federation'), commonly known by the acronym FIVB, is the international governing body for all forms of volleyball. Its headquarters are located in Lausanne, Switzerland, and its current president is Fabio Azevedo of Brazil.\n[…]\nBefore the FIVB was founded volleyball was part of the International Amateur Handball Federation. The FIVB was founded in France in April 1947. In the late 1940s, some of the European national federations began to address the issue of creating an international governing body for the sport of volleyball. Initial discussions eventually lead to the installation of a Constitutive Congress in 1947.\n[…]\nIn 1964, the IOC endorsed the addition of volleyball to the Olympic programme. By this time, the number of national federations affiliated to the FIVB had grown to 89. Later in that year (1969), a new international event, the World Cup was introduced. It would be turned into a qualifying event for the Olympic Games in 1991.\n[…]\nFollowing Libaud's retirement and the election of Mexican Rubén Acosta Hernandez for the position of president in 1984, the FIVB moved its headquarters from Paris, France to Lausanne, Switzerland and intensified to an unprecedented level its policy of promoting volleyball on a worldwide basis.\n[…]\nIn response to the 2022 Russian invasion of Ukraine, the Fédération Internationale de Volleyball suspended all Russian national teams, clubs, and officials, as well as beach and snow volleyball athletes, from all events, and stripped Russia of the right to host the 2022 FIVB Volleyball Men's World Championship in August 2022, and relocated games that were to be in Russia in June and July.\n[…]\nFIVB Tribunal\n[…]\nList of international sports federations\n[…]\nFIVB Sports Regulations - Volleyball"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Federa%C3%A7%C3%A3o_Internacional_de_Voleibol",
        "situacao": "ok",
        "texto": "Federação Internacional de Voleibol (FIVB) (francês: Fédération Internationale de Volleyball) é a instituição que coordena as atividades de voleibol em nível internacional cuja sede está localizada em Lausanne, Suíça.\n[…]\nA FIVB foi fundada em Paris, França\n[…]\nNo final da década de 1940, algumas dentre as federações nacionais europeias começaram a colocar-se a questão sobre a possibilidade de criar um órgão internacional para coordenar o desenvolvimento do voleibol.\n[…]\nEm 1964, o COI endossou o acréscimo do voleibol ao programa de esportes dos Jogos Olímpicos. Nesta época, o número de federações filiadas à FIVB já havia pulado para 89 e cinco anos mais tarde, foi introduzido um novo evento internacional, a Copa do Mundo, o qual se tornaria em 1991 torneio qualificatório para as Olimpíadas.\n[…]\nApós a aposentadoria de Paul Libaud e a eleição do mexicano Rubén Acosta Hernández para o cargo de presidente em 1984, a FIVB mudou sua sede de Paris, França para Lausanne, Suíça e intensificou significativamente sua política de promover o esporte voleibol ao redor do mundo.\n[…]\nDiversas medidas foram tomadas neste sentido, como por exemplo: o estabelecimento de torneios internacionais anuais (para os homens, a Liga Mundial, em 1990, e para as mulheres, o Grand Prix, em 1993); a indicação do Voleibol de praia como esporte olímpico (1996); e uma série de mudanças nas regras do jogo com o objetivo de aumentar o interesse do público. Em 2020, a FIVB atinge o número de 222 federações filiadas.\n[…]\nEntre outros, a FIVB organiza os seguintes eventos internacionais:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Misty May-Treanor",
      "descricao": "Jogadora americana de vôlei de praia, campeã olímpica com Kerri Walsh em 2004, 2008 e 2012."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Ao lado de Kerri Walsh, quantos ouros olímpicos seguidos a americana Misty May-Treanor conquistou no vôlei de praia?",
    "resposta": "Três",
    "fonte": [
      "https://en.wikipedia.org/wiki/Misty_May-Treanor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Misty_May-Treanor",
        "situacao": "ok",
        "texto": "Misty Elizabeth May-Treanor (; née May; born July 30, 1977) is an American retired professional beach volleyball player. She is a three-time Olympic gold medalist, and the second most successful female beach volleyball player as of January 2026, having won 112 tournaments in domestic and international competition.\n[…]\nMay-Treanor and teammate Kerri Walsh Jennings were gold medalists in beach volleyball at the 2004, 2008 and 2012 Summer Olympics. They also won the FIVB Beach Volleyball World Championships in 2003, 2005 and 2007. The pair set various records throughout their partnership, including a win streak of 112 consecutive matches (19 consecutive tournament titles) in 2007–2008, breaking their own previous record of 89 consecutive match wins.\n[…]\nMay-Treanor, just prior to teaming with Kerri Walsh Jennings for a third straight gold medal at the 2012 London Olympics, announced that she was retiring from beach volleyball. She confirmed this shortly after the Olympics victory.\n[…]\nMay-Treanor and Walsh Jennings defeated fellow Americans April Ross and Jennifer Kessy in the final to claim the gold medal (21–16, 21–16).\n[…]\nAVP Crocs Cup Champion (3): 2006–2008 (all with Kerri Walsh)\n[…]\nAVP Team of the Year (6): 2003–2008 (all with Kerri Walsh)\n[…]\nFIVB Tour Champion (1): 2002 (with Kerri Walsh)\n[…]\nSportswoman of the Year Award (2): 2004, 2006 (with Kerri Walsh)\n[…]\nMay-Treanor, Misty; Lieber Steeg, Jill (2010). Misty: Digging Deep in Volleyball and Life. Scribner. ISBN 978-1439148549.\n[…]\nMisty May-Treanor at the Team USA Hall of Fame (archive April 8, 2023)\n[…]\nMisty May-Treanor at Team USA (archived April 8, 2023)\n[…]\nMisty May-Treanor at Olympedia\n[…]\nMisty May-Treanor at Olympics.com Misty May-Treanor at Olympic.org (archived)\n[…]\nMisty May-Treanor at IMDb\n[…]\nMay, Walsh Reflect on Olympic Journey at the Wayback Machine (archived August 17, 2013)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Misty_May-Treanor",
        "situacao": "ok",
        "texto": "Misty Erie May-Treanor (Costa Mesa, 30 de julho de 1977) é uma jogadora de voleibol de praia norte-americana. Faz dupla com Kerri Walsh.\n[…]\nDisputou três edições de Jogos Olímpicos: em 2000, jogando ao lado de Holly McPeak, 2004 e 2008. Ganhou a medalha de ouro em Atenas 2004, Pequim 2008 e Londres 2012 junto com Kerry Walsh.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Rede de vôlei",
      "descricao": "Rede que divide a quadra de vôlei, com altura oficial diferente para homens e mulheres."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Qual é a altura oficial da rede no vôlei de quadra masculino adulto?",
    "resposta": "2,43 metros",
    "distratores": [
      "2,24 metros",
      "2,35 metros",
      "2,50 metros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball",
        "situacao": "ok",
        "texto": "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the program at the Atlanta 1996 Summer Olympics. The adapted version of volleyball at the Su\n[…]\nA volleyball court is 9 m × 18 m (29.5 ft × 59.1 ft), divided into equal square halves by a net with a width of one meter (39.4 in). The top of the net is 2.43 m (7 ft 11+11⁄16 in) above the center of the court for men's competition, and 2.24 m (7 ft 4+3⁄16 in) for women's competition, varied for veterans and junior competitions.\n[…]\nIn the 6–2 formation, a player always comes forward from the back row to set. The three front row players are all in attacking positions. As a result, all six players act as hitters at one time or another, while two can act as setters. So the 6–2 formation is now a 4–2 system, but the back-row setter penetrates to set. The 6–2 lineup thus requires two setters, who line up opposite to each other in the rotation.\n[…]\nThere is another advantage, the same as that of a 4–2 formation: as a front-row player the setter is allowed to jump and \"dump\" the ball onto the opponent's side. Thus the setter can confuse the opponent's blocking players; they have the option to jump and dump or set to one of the hitters. A good setter knows and they are able to jump to dump or to set for a quick hit as well as when setting outside, thus they are able to confuse the opponent.\n[…]\nThe 5–1 offence is a mix of 6–2 and 4–2: when the setter is in the front row, the offense looks like a 4–2; when the setter is in the back row, the offense looks like a 6–2.\n[…]\n2.43: Seiin High School Boys Volleyball Team (2021): A Japanese anime about a high school boys volleyball team's journey to victory."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol",
        "situacao": "ok",
        "texto": "Voleibol, também conhecido pelas formas reduzidas vôlei (português brasileiro) e vólei (português europeu), é um esporte praticado numa quadra dividida em duas partes por uma rede, possuindo duas equipes de seis jogadores em cada lado. O voleibol foi originalmente chamado de Mintonette, devido à sua semelhança com o Badminton. Ele também tem alguns elementos de tênis e handebol e até beisebol porq\n[…]\nÉ retangular, com a dimensão de 18 x 9 metros, com uma rede no meio colocada a uma altura variável, conforme o sexo e a categoria dos jogadores (exemplo dos seniores e juniores: masculino 2,43 metros e feminino 2,24 metros).\n[…]\nAcima da linha central, é postada uma rede de material sintético a uma altura de 2,43 m para homens ou 2,24 m para mulheres (no caso de competições juvenis, infanto-juvenis e mirins, as alturas são diferentes). Cada quadra é por sua vez dividida em duas áreas de tamanhos diferentes (usualmente denominadas \"rede\" e \"fundo\") por uma linha que se localiza, em cada lado, a três metros da rede (\"linha de 3 metros\").\n[…]\nPostado dentro da zona de ataque da quadra ou tocando a linha de três metros, o líbero realiza um levantamento de toque que é posteriormente atacado acima da altura da rede.\n[…]\nAtaque do fundo: ataque realizado por um jogador que não se encontra na rede, ou seja, por um jogador que não ocupa as posições 2-4. O atacante não pode pisar na linha de três metros ou na parte frontal da quadra antes de tocar a bola, embora seja permitido que ele aterrisse nesta área após o ataque.\n[…]\nO bloqueio refere-se às ações executadas pelos jogadores que ocupam a parte frontal da quadra (posições 2-3-4) e que têm por objetivo impedir ou dificultar o ataque da equipe adversária. Elas consistem, em geral, em estender os braços acima do nível da rede com o propósito de interceptar a trajetória ou diminuir a velocidade de uma bola que foi cortada pelo oponente.\n[…]\nVoleibol de praia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Karch Kiraly",
      "descricao": "Ex-jogador americano de vôlei, campeão olímpico na quadra em 1984 e 1988 e na areia em 1996."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O americano Karch Kiraly foi campeão olímpico de vôlei de quadra em 1984 e 1988. Em 1996, voltou a ser campeão olímpico em que modalidade?",
    "resposta": "Vôlei de praia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Karch_Kiraly"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Karch_Kiraly",
        "situacao": "ok",
        "texto": "Charles Frederick \"Karch\" Kiraly ( KARCH kirr-EYE; born November 3, 1960) is an American volleyball player, coach, and broadcast announcer. He was a central part of the U.S National Team that won gold medals at the 1984 and 1988 Olympic Games. He went on to win the gold medal again at the 1996 Olympic Games, the first Olympic competition to feature beach volleyball. He is the only player (man or w\n[…]\nNational Team to the gold medal at the 1984 Summer Olympics, overcoming a pool play loss to Brazil to defeat Brazil in the finals. Kiraly was the youngest player on the gold medal team.\n[…]\nIn 1996 Kiraly returned to the Olympics, this time competing in beach volleyball with his partner, Steffes. Kiraly and Steffes won the gold medal, the first ever awarded for men's beach volleyball.\n[…]\nKiraly is the author of three books, Karch Kiraly's Championship Volleyball, co-authored with Jon Hastings and published by Simon and Schuster in 1996,  Beach Volleyball, co-authored with Byron Shewman and published by Human Kinetics in 1999, and Chasing Greatness, co-authored with Don Patterson and published by Total Sports LLC in 2023.\n[…]\nOlympic Games (1984, 1988, 1996)\n[…]\nPan American Games (1987)\n[…]\nAcademic All-America Hall of Fame inducted 2009.\n[…]\nCouvillon, Arthur R. (January 19, 2008). Karch Kiraly: A Tribute to Excellence. Hermosa Beach, Calif: Information Guides. ISBN 978-0-938329-11-4.\n[…]\nKiraly, Karch; Hastings, Jon (June 13, 1996). Karch Kiraly's Championship Volleyball. New York: Touchstone. ISBN 978-0-684-81466-7.\n[…]\nKiraly, Karch; Shewman, Byron (1999). Beach Volleyball. Champaign, IL: Human Kinetics. ISBN 978-0-88011-836-1.\n[…]\nKarch Kiraly Volleyball Academy Archived November 26, 2020, at the Wayback Machine\n[…]\nKarch Kiraly at the Beach Volleyball Database\n[…]\nKarch Kiraly at the Team USA Hall of Fame (archive September 3, 2023)\n[…]\nKarch Kiraly at Olympics.com Karch Kiraly at Olympic.org (archived)\n[…]\nKarch Kiraly at Olympedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Karch_Kiraly",
        "situacao": "ok",
        "texto": "Charles Frederick \"Karch\" Kiraly (Jackson, Michigan, 3 de Novembro de 1960) é um ex-jogador de voleibol dos Estados Unidos da América. É o único jogador deste desporto - tanto masculino quanto feminino - a ter ganhado a medalha de ouro olímpica nas variantes indoor (quadra) e de praia. É tido por muitos admiradores e jogadores de voleibol como o maior jogador de todos os tempos. Não à toa, no ano \n[…]\nSua conquista no vôlei de praia foi lograda jogando em parceria com Kent Steffes. Após se aposentar como atleta, Kiraly dedicou-se à carreira de treinador. Como assistente-técnico, participou da campanha que levou a seleção feminina dos EUA à prata em Londres-2012 – derrotada pelo Brasil na final. Já como técnico do time, comandou a equipe no título mundial em 2014 e o olímpico em 2022, igualando a chinesa Lang Ping com ouro olímpico como atleta e treinador.\n[…]\nSeus pais fugiram da Hungria para os Estados Unidos em 1956, no ano da Invasão Soviética. A família montou acampamento em Jackson, no estado norte-americano de Michigan, e quatro anos depois nascia o filho Karch, forma húngara de dizer Charles.\n[…]\nBicampeão olímpico voleibol de quadra - Los Angeles 1984 e Seul 1988\n[…]\nCampeão olímpico Voleibol de praia - Atlanta 1996\n[…]\nPrimeiro - e por enquanto único - jogador de vôlei, tanto masculino quanto feminino, a ter ganhado a medalha de ouro olímpica nas variantes indoor (quadra) e de praia.\n[…]\n1988 - FIVB Best Player in the World\n[…]\n1998 - American Volleyball Professionals (AVP) Sportsman of the Year\n[…]\n1998 - American Volleyball Professionals (AVP) Most Valuable Player\n[…]\n2002 - American Volleyball Professionals (AVP) Best Defensive Player\n[…]\n2004 - American Volleyball Professionals (AVP) Outstanding Achievement Award\n[…]\n2009 - Induzido ao College Sports Information Directors of America (COSIDA) Academic All-America Hall of Fame.\n[…]\nLista de atletas com medalhas olímpicas em diferentes esportes",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Ana Moser",
      "descricao": "Ex-jogadora brasileira de vôlei, medalha de bronze olímpica em Atlanta 1996."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Ana Moser, bronze olímpico com a seleção feminina de vôlei em 1996, assumiu em 2023 que ministério do governo federal?",
    "resposta": "Ministério do Esporte",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ana_Moser"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ana_Moser",
        "situacao": "ok",
        "texto": "Ana Beatriz Moser (Blumenau, 14 de agosto de 1968) é uma ex-voleibolista brasileira e ex-ministra do Esporte do Brasil, cargo que exerceu de janeiro a setembro de 2023 - foi a primeira mulher a exercer o cargo desde a criação da pasta em 1995. Atualmente, Ana Moser ocupa um cargo de membro titular do conselho fiscal do Serviço Social do Comércio (Sesc).\n[…]\nAna Moser serviu à seleção brasileira que trouxe a primeira medalha olímpica para o voleibol feminino, a medalha de bronze, em Atlanta, 1996. Ela fez parte de uma geração de grandes jogadoras, dentre elas Fofão e Leila, que foi tricampeã do Grand Prix de Vôlei, e abriu caminho para conquistas futuras no esporte, inclusive a medalha de ouro, ao motivar outras jogadoras .A maior parte do tempo que esteve em quadra, atuando pela seleção, Ana Moser ocupou o posto de capitã.\n[…]\nAo assumir o comando do Ministério do Esporte no Governo Lula, tornou-se a primeira mulher a assumir a pasta e a primeira ministra abertamente lésbica do Brasil. É formada em educação física e sua experiência como atleta a levou a fundar o Instituto Esporte & Educação, uma organização que tem por missão transformar a vida de crianças e adolescentes por meio do esporte e da educação.\n[…]\nEm 14 de novembro de 2022, Moser foi uma das especialistas designadas para integrar o Grupo Técnico de Esporte do Gabinete de Transição Governamental, grupo responsável por avaliar a situação das políticas públicas no país e, então, propor soluções para eventuais problemas identificados e aperfeiçoamentos das ações existentes ao subsidiar o relatório final da Equipe de Transição Governamental 2022-2023.\n[…]\nEm 13 de setembro de 2023, foi publicado o ato de sua exoneração do cargo de Ministra dos Esportes,, num esforço efetuado pelo governo Lula para atrair o apoio político do Centrão. Ela foi sucedida pelo deputado federal André Fufuca."
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
