Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Futebol** (tema **Esportes**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Copa do Mundo FIFA de 1970",
      "descricao": "Nona Copa do Mundo, disputada no México e vencida pelo Brasil, seu terceiro título mundial."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na Copa de 1970, no México, qual jogador brasileiro marcou gol em todas as seis partidas da seleção?",
    "resposta": "Jairzinho",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jairzinho",
      "https://en.wikipedia.org/wiki/Jairzinho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jairzinho",
        "situacao": "ok",
        "texto": "Jair Ventura Filho (Rio de Janeiro, 25 de dezembro de 1944), mais conhecido como Jairzinho, é um ex-futebolista brasileiro que atuava como ponta-direita. Também trabalhou como treinador.\n[…]\nUm dos heróis da Copa do Mundo de 1970, ocasião em que o Brasil conquistou em definitivo a Taça Jules Rimet ao sagrar-se tricampeão, foi peça fundamental desta conquista, ganhando o apelido de Furacão da Copa por ter feito gols em todas as partidas — façanha até hoje não igualada por um brasileiro. Com nove gols marcados em 1966, 1970 e 1974 é, ao lado dos pernambucanos Vavá e Ademir de Menezes, o terceiro maior artilheiro da Seleção Brasileira na história das Copas do Mundo.\n[…]\nMuitos afirmam que Jairzinho foi, entre as Copas de 1966 e 1974, o melhor atacante do futebol mundial. As conquistas consecutivas no Brasil e as vitoriosas excursões ao exterior do Botafogo confirmam tal avaliação. Mesmo na Copa de 1974, quando o Brasil não mostrou um futebol comparável ao de 1970, a Seleção conquistou um honroso 4º lugar, classificação que as seleções de 1982, 1986, 1990, 2006 e 2010 nem de perto alcançaram.\n[…]\nJoão Saldanha, um dos maiores cronistas esportivos brasileiros, ao final da Copa de 1970 colocou Jairzinho como uma das três maiores estrelas do tricampeonato, ao lado de Pelé e Gérson.\n[…]\nSir Alf Ramsey, técnico da Seleção Inglesa campeã de 1966 e que fez o melhor jogo da Copa de 1970 justamente contra o Brasil, afirmou que mesmo Pelé não era tão difícil de ser marcado quanto Jairzinho, elegendo-o como o maior fator de desequilíbrio a favor do Brasil naquela memorável conquista.\n[…]\nSeleção Brasileira\n[…]\nCopa do Mundo FIFA: 1970\n[…]\n«Jairzinho» (em inglês). no International Football Hall of Fame"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jairzinho",
        "situacao": "ok",
        "texto": "Jair Ventura Filho (born 25 December 1944), better known as Jairzinho (Portuguese pronunciation: [ʒaˌiʁˈzĩɲu]), is a Brazilian former professional footballer. A quick, skillful, and powerful right winger known for his finishing ability and eye for goal, he was a key member and leading scorer of the Brazil national team that won the 1970 FIFA World Cup.\n[…]\nAfter Jairzinho's excellent display in Mexico at the 1970 FIFA World Cup more eyes of the world were focused on his Botofogo side. In the final four years of his time at Botafogo, he would go on to cement himself as one of the club's most prolific goalscorers in the history of the club, scoring 186 goals in 416 appearances with a goals per game ratio of 0,45. He ranks sixth in all-time top goal scorers for Botafogo.\n[…]\nWhen, after the tournament, Garrincha announced his retirement from international football, Jairzinho finally took over his idol's role for Brazil on the right wing. Jairzinho scored two goals out of the six 1970 FIFA World Cup qualification matches.\n[…]\nNow in his new position, Jairzinho became a more effective and consistent performer for country. At the 1970 FIFA World Cup in Mexico, Jairzinho was one of stars of the tournament. He scored in every game Brazil played in for the Seleção, for which he received the epithet \"Furacão da Copa\" (World Cup Hurricane).\n[…]\nJairzinho's movement off the ball was one of the key aspects on which he accumulated so many goals throughout his career. In the 1970 FIFA World Cup, he displayed his attacking instincts, especially with his goal against England, which earned Brazil the victory and broke the deadlock. The secondary run off Pelé for him to strike a powerful top left corner finish displayed his threat in front of goal as well as his overall attacking intelligence.\n[…]\nJairzinho – FIFA competition record (archived)\n[…]\nJairzinho at Sambafoot"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Copa do Mundo FIFA de 1970",
      "descricao": "Nona Copa do Mundo, disputada no México e vencida pelo Brasil, seu terceiro título mundial."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano os brasileiros puderam, pela primeira vez, assistir a uma Copa do Mundo ao vivo pela televisão?",
    "resposta": "1970",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Copa_do_Mundo_FIFA_de_1970"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_do_Mundo_FIFA_de_1970",
        "situacao": "ok",
        "texto": "A Copa do Mundo de 1970 foi a 9ª edição da Copa do Mundo FIFA, que ocorreu de 31 de maio até 21 de junho. A competição, conquistada pelo Brasil, foi sediada no México, tendo partidas realizadas nas cidades de Guadalajara, León, Cidade do México, Puebla e Toluca.\n[…]\nArgentina, Austrália, Colômbia, Japão, México e Peru foram considerados para serem anfitriões da Copa do Mundo FIFA de 1970. O México foi escolhido durante as Olimpíadas de Tóquio como a nação sede através de uma votação no congresso da FIFA em Tóquio, em 8 de outubro de 1964, vencendo a única outra proposta apresentada pela Argentina. O fato de a Cidade do México ser a sede dos Jogos de 1968 pesou favoravelmente — o país já teria estrutura suficiente para bancar uma Copa.\n[…]\nA Copa de 1970 foi, como de costume, precedida por disputas sobre sua organização. Esta Copa foi a primeira a ser televisionada em cores. Porém, para que as transmissões se encaixassem melhor nas programações da televisão europeia, algumas partidas começaram ao meio-dia. Esta foi uma decisão impopular entre muitos jogadores e treinadores por causa do intenso calor no México neste período do dia.\n[…]\nEsta Copa também foi a primeira a apresentar o uso dos cartões amarelo e vermelho para advertências e expulsões respectivamente (note que as advertências e expulsões já existiam antes de 1970). Cinco cartões amarelos foram mostrados na partida de abertura entre México e URSS (sendo o primeiro deles para o lateral-esquerdo soviético Evgeny Lovchev), enquanto nenhum cartão vermelho foi mostrado em todo o torneio.\n[…]\nA vitória consagrou o Brasil como a primeira equipe a conquistar três títulos na história das Copas.\n[…]\n«FIFA.com - 1970 FIFA World Cup Mexico» (em inglês)\n[…]\n«Uma experiencia pessoal da Copa do Mundo de 1970»"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Copa do Mundo FIFA de 1958",
      "descricao": "Sexta Copa do Mundo, disputada na Suécia e vencida pelo Brasil, seu primeiro título mundial."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre os títulos mundiais conquistados pelo Brasil de 1958 a 2002, qual foi o único vencido em solo europeu?",
    "resposta": "A Copa de 1958, na Suécia",
    "fonte": [
      "https://en.wikipedia.org/wiki/1958_FIFA_World_Cup",
      "https://en.wikipedia.org/wiki/Brazil_national_football_team"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1958_FIFA_World_Cup",
        "situacao": "ok",
        "texto": "The 1958 FIFA World Cup was the sixth FIFA World Cup, the quadrennial football tournament for senior national teams. It was played in Sweden from 8 to 29 June 1958. It remains the only Nordic country to have hosted a FIFA World Cup.\n[…]\nThe official ball was the \"Top-Star VM-bollen 1958\" model made by Sydsvenska Läder & Remfabriks AB (aka \"Remmen\" or \"Sydläder\") in Ängelholm. Four FIFA officials conducted a blind test to choose it from 102 candidates.\n[…]\nPreventing the defending champions from meeting the hosts in the group stage, either by seeding or predetermined group positions, was a practiced tradition throughout the history of the FIFA World Cup, with 1934 and 1954 being the only two exceptions. This tradition continued in 1958, with West Germany as defending champion and host nation Sweden both being allocated into the same Western European Pot, which kept them from meeting in the group stage.\n[…]\nFor a list of all squads that appeared in the final tournament, see 1958 FIFA World Cup squads.\n[…]\nFIFA selected the following players for the 1958 FIFA World Cup All-Star Team.\n[…]\nIn 1986, FIFA published a report that ranked all teams in each World Cup up to and including 1986, based on progress in the competition and overall results (not counting play-off results). The rankings for the 1958 tournament were as follows:\n[…]\nPer statistical convention in football, matches decided in extra time are counted as wins and losses. Per FIFA's ranking, the results of play-offs are not considered in the tournament ranking.\n[…]\nThe 1958 FIFA World Cup is depicted in the 2016 American film Pelé: Birth of a Legend which is centered around Pelé and the Brazilian team's journey to winning the tournament.\n[…]\n1958 FIFA World Cup Sweden, FIFA.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_national_football_team",
        "situacao": "ok",
        "texto": "The Brazil national football team (Portuguese: Seleção Brasileira de Futebol), nicknamed Canarinho, represents Brazil in men's international football and is administered by the Brazilian Football Confederation, the governing body of football in Brazil. It has been a member of FIFA since 1923 and was a founding member of CONMEBOL in 1916. It was also a member of PFC, the unified confederation of th\n[…]\nBrazil is the most successful national team in the FIFA World Cup, winning the tournament five times: 1958, 1962, 1970, 1994 and 2002. The Seleção also has the best overall performance in the World Cup competition with a record of 79 victories in 119 matches played and 135 goal difference. It is the only national team to have played in all World Cup editions without any absence nor need for playoffs, and the only team to have won the World Cup in four different continents.\n[…]\nThe use of blue and white as the second kit colors owes its origins to the defunct latter-day Portuguese monarchy and dates from the 1930s, but it became the permanent second choice accidentally in the 1958 FIFA World Cup final. Brazil's opponents were Sweden, who also wore yellow, and a draw gave the home team, Sweden, the right to play in yellow. Brazil, who traveled with no second kit, hurriedly purchased a set of blue shirts and sewed the badges taken from their yellow shirts on them.\n[…]\nMário Zagallo became the first person to win the FIFA World Cup both as a player (1958 and 1962) and as a manager (1970). In 1970, at the age of 38, he became the second-youngest coach to win the tournament. While still in Brazil as an assistant coach, the team won the 1994 FIFA World Cup.\n[…]\nChampions (5): 1958, 1962, 1970, 1994, 2002\n[…]\nCopa Confraternidad (1): 1923\n[…]\nCopa Emílio Garrastazú Médici (1): 1970\n[…]\nCopa Teixeira (1): 1990s\n[…]\nCopa 50imo Aniversario de Clarín (1): 1995\n[…]\nCopa America Fair Play Award (2): 2019, 2021\n[…]\nBrazil FIFA profile"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_do_Mundo_FIFA_de_1958",
        "situacao": "ok",
        "texto": "A Copa do Mundo FIFA de 1958 foi a sexta edição da Copa do Mundo FIFA de Futebol, que ocorreu de 10 de junho até 29 de junho de 1958. O evento foi sediado na Suécia, tendo partidas realizadas nas cidades de Borås, Eskilstuna, Estocolmo, Gotemburgo, Halmstad, Helsingborg, Malmö, Norrköping, Örebro, Sandviken, Solna, Uddevalla e Västerås.\n[…]\nDezesseis seleções nacionais foram qualificadas para participar desta edição do campeonato, sendo 12 delas europeias (Suécia, Alemanha Ocidental, Áustria, França, Tchecoslováquia, Hungria, União Soviética, Iugoslávia, Inglaterra, Irlanda do Norte, Escócia e País de Gales) e 4 americanas (Brasil, Argentina, Paraguai e México).\n[…]\nDepois do sucesso de transmitir a Copa anterior de 1954, esse torneio também foi televisionado. O que possibilitou a transmissão da copa foi o lançamento do satélite Sputnik III pelos soviéticos, que aconteceu em maio de 1958. A transmissão televisiva do torneio foi para os países europeus. No total, 11 países europeus aderiram ao consórcio liderado pela Sveriges Radio, estatal de Rádio e TV, que detinha os direitos de transmissão.\n[…]\nNo Grupo 3 a Suécia, dona da casa, passeou. Gales ficou em segundo. Assim, esta foi a única copa até hoje em que as quatro seleções britânicas participaram juntas (Escócia, Irlanda do Norte, País de Gales e Inglaterra), só a Inglaterra e a Escócia não se classificaram para as Quartas.\n[…]\nA Irlanda do Norte quase não participou da Copa. Tudo porque a religião anglicana proibia atividades físicas aos domingos. Foi necessário que o clero local autorizasse a participação dos jogadores, que assim viajaram para a Suécia com a consciência tranquila.\n[…]\nA Copa de 1958 foi a única que teve a presença de todas as seleções do Reino Unido (Inglaterra, País de Gales, Escócia e Irlanda do Norte).\n[…]\n«FIFA - 1958 FIFA World Cup Sweden» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Santos Futebol Clube",
      "descricao": "Clube de futebol da cidade de Santos, São Paulo, fundado em 1912 e onde Pelé fez carreira."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Em 1962, que clube se tornou o primeiro brasileiro a conquistar a Copa Libertadores da América?",
    "resposta": "Santos",
    "distratores": [
      "Palmeiras",
      "Cruzeiro",
      "Botafogo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1962_Copa_Libertadores",
      "https://pt.wikipedia.org/wiki/Santos_Futebol_Clube"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1962_Copa_Libertadores",
        "situacao": "ok",
        "texto": "The 1962 Copa de Campeones de América was the third edition of South America's premier club football tournament. Ten teams entered, one more than the previous season, with Venezuela again not sending a representative. This was the first edition in which the defending champions qualified automatically, allowing the nation which contained the holders to have an extra team in the tournament.\n[…]\nSantos ended the Carboneros' reign, as they defeated Peñarol 0–3 in the deciding playoff in Buenos Aires.\n[…]\n1962 Copa Libertadores at RSSSF"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santos_Futebol_Clube",
        "situacao": "ok",
        "texto": "Santos Futebol Clube, mais conhecido apenas como Santos, é um clube poliesportivo brasileiro da cidade homônima, do estado de São Paulo. Foi fundado em 14 de abril de 1912. Inicialmente suas cores seriam o branco, azul e dourado, mas um ano após a sua fundação, ficou decidido que as cores do clube passariam a ser branco e preto (alvinegro). O clube manda as suas partidas no Estádio Urbano Caldeira\n[…]\nAo longo de sua história, o Santos conquistou um grande número de títulos internacionais, com destaque para os mundiais de 1962 e 1963, as Copas Libertadores de 1962, 1963 e 2011, a Recopa dos Campeões Intercontinentais de 1968, a Copa CONMEBOL de 1998 e a Recopa Sul-Americana de 2012. No cenário nacional é octacampeão brasileiro: 1961, 1962, 1963, 1964, 1965, 1968, 2002 e 2004. Ainda no âmbito nacional, o clube possui uma Copa do Brasil vencida em 2010, totalizando nove conquistas nacionais.\n[…]\nAo lado de Pepe, Coutinho e Dorval, Pelé formou um ataque poderoso no Santos, com destaque para as duas conquistas da Copa Intercontinental e da Copa Libertadores da América, vencidas nos anos de 1962 e 1963.\n[…]\nA rivalidade contra os \"aurinegros\" teve inicio em 1962 na final da Libertadores daquele ano, o Santos conquistaria seu primeiro titulo da América contra o então bicampeão, o Peñarol. No primeiro jogo da final, vitória brasileira por 2 a 1 no Estádio Centenario, com dois gols de Coutinho.\n[…]\nLuís Alonso Pérez, o Lula, é considerado o treinador mais vitorioso da história do Santos, comandou o clube de 1954 a 1966 e conquistou ao todo 34 títulos, dentre os principais, o bicampeonato da Copa Intercontinental e da Copa Libertadores da América nos anos de 1962 e 1963. Também é o recordista em partidas como treinador do Santos com 943 jogos.\n[…]\nSantos Futebol Clube no Facebook\n[…]\nSantos Futebol Clube no X\n[…]\nSantos Futebol Clube no Instagram\n[…]\nSantos Futebol Clube no TikTok\n[…]\nSantos Futebol Clube no Flickr"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Ronaldo Fenômeno",
      "descricao": "Ex-atacante brasileiro, nascido em 1976, bicampeão mundial com a seleção e três vezes melhor jogador do mundo pela FIFA."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na Copa de 2002, no Japão e na Coreia do Sul, quem terminou como artilheiro do torneio, com oito gols?",
    "resposta": "Ronaldo Fenômeno",
    "fonte": [
      "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup",
      "https://en.wikipedia.org/wiki/Ronaldo_(Brazilian_footballer)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup",
        "situacao": "ok",
        "texto": "The 2002 FIFA World Cup (Korean: 2002 FIFA 월드컵 한국/일본; Japanese: 2002 FIFAワールドカップ 韓国/日本) also branded as Korea Japan 2002, was the 17th FIFA World Cup, the quadrennial football world championship for men's national teams organized by FIFA. It was held from 31 May to 30 June 2002 at sites in South Korea and Japan, with its final match hosted by Japan at International Stadium in Yokohama.\n[…]\nThe semi-finals saw two 1–0 games; the first, played in Seoul, saw Michael Ballack's goal suffice for Germany to eliminate South Korea. However, Ballack had already received a yellow card during the match before, which forced him to miss the final based on accumulated yellow cards. The next day in Saitama, Brazil's Ronaldo scored his sixth goal of the tournament to defeat Turkey.\n[…]\nIn the final match held in Yokohama, Japan, two goals from Ronaldo secured the World Cup for Brazil as they claimed victory over Germany. Ronaldo scored twice in the second half and, after the game, won the Golden Shoe award for the tournament's leading scorer with eight goals. This was the fifth time Brazil had won the World Cup, cementing their status as the most successful national team in the history of the competition.\n[…]\nRonaldo won the Golden Shoe after scoring eight goals. In total, 161 goals were scored by 109 players, with three of them credited as own goals. Two of those own goals were in the same match, marking the first time in FIFA World Cup history that own goals had been scored by both teams in the same match.\n[…]\nMost red cards (player): 1  Roberto Acuña, Beto, Claudio Caniggia, Nastja Čeh, Salif Diao, Thierry Henry, Rafael Márquez, Alpay Özalan, Carlos Paredes, João Pinto, Carsten Ramelow, Ronaldinho, Shao Jiayi, Patrick Suffo, Francesco Totti, Hakan Ünsal, Boris Živković\n[…]\n2002 FIFA World Cup Korea/Japan, FIFA.com\n[…]\n2002 FIFA World Cup Official Website (archived)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ronaldo_(Brazilian_footballer)",
        "situacao": "ok",
        "texto": "Ronaldo Luís Nazário de Lima (Brazilian Portuguese: [ʁoˈnawdu luˈiz‿naˈzaɾju dʒi ˈlimɐ]; born 18 September 1976), mononymously known as Ronaldo, is a Brazilian former professional footballer who played as a striker. He is the former owner and president of Segunda División club Real Valladolid. Nicknamed O Fenômeno and R9, he is widely regarded as one of the greatest players of all time.\n[…]\nLater in 2002, he won the FIFA World Player of the Year award for the third time, and transferred from Inter to Real Madrid. Ronaldo was given his most recognizable nickname, Il Fenomeno, by the Italian press while playing there. His Inter teammate Djorkaeff stated: \"when we were training, we would practically stop to watch him.\n[…]\nRonaldo finished with fifteen goals in nineteen World Cup matches, for an average of 0.79 per game. His teammate Kaká reflected, \"Ronaldo is the best player I have ever played with. I have seen il Fenomeno do things nobody else has ever done.\"\n[…]\nRonaldo is widely regarded as one of the greatest and most complete forwards of all time. Nicknamed Il (or O) Fenomeno (the phenomenon), he was a prolific goalscorer, and despite being more of an individualistic attacker, he was also capable of providing assists for his teammates, due to his vision, passing and crossing ability. He was an extremely powerful, fast, and technical player, with excellent movement, as well as being a composed finisher.\n[…]\nOnly Pelé, Diego Maradona and George Best can really compare.\" Asked to name the best player of his lifetime, José Mourinho said, \"Ronaldo, El Fenomeno. Cristiano Ronaldo and Leo Messi have had longer careers. They have remained at the top every day for 15 years.\n[…]\nRonaldo and Maria Beatriz Antony divorced in 2012.\n[…]\nBBC World Sport Star of the Year: 2002\n[…]\nRonaldo – FIFA competition record (archived)\n[…]\nRonaldo – UEFA competition record (archive)\n[…]\nRonaldo at National-Football-Teams.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_do_Mundo_FIFA_de_2002",
        "situacao": "ok",
        "texto": "Copa do Mundo (português brasileiro) ou Campeonato do Mundo de Futebol (português europeu) FIFA de 2002 foi a décima sétima edição da Copa do Mundo FIFA de Futebol que reuniu 32 equipes entre 31 de maio a 30 de junho. O Brasil conquistou pela quinta vez o título mundial, depois de derrotar a Alemanha na final.\n[…]\nFoi a primeira vez que dois países sediaram unidos o evento, a primeira vez que três seleções — França, Japão e Coreia do Sul — estavam classificadas automaticamente e a primeira vez que uma edição da Copa não aconteceu na Europa ou nas Américas.\n[…]\nUm total de 199 equipes tentaram a sua sorte para se classificar para o FIFA World Cup, processo que começou em 1999, um ano depois da Copa de 1998. A França, que estava defendendo o título de campeões do Mundial de 1998; e os co-anfitriões do Mundial de 2002, Coreia do Sul e Japão, classicaram-se automaticamente e não jogaram os jogos de classificação (sendo esta a última vez que os campeões se classificaram automaticamente).\n[…]\nO sorteio foi realizado no Busan Exhibition & Convention Centre (BEXCO) em Busan (Coreia do Sul), no dia 1 de dezembro de 2001. Coreia do Sul, Japão e França — a primeira e a segunda, ambas antrifiões e a última campeã — eram cabeças de chave por direito. Os cabeças de chave foram: Alemanha, Argentina, Brasil, Coreia do Sul, Espanha, França, Itália e Japão.\n[…]\nOs grupos A, B, C e D jogaram na Coreia do Sul, enquanto os grupos E, F, G e H jogaram no Japão.\n[…]\nA Rede Globo obteve exclusividade na TV aberta e transmitiu todos os jogos da Copa com vários narradores, e todos os dias a jornalista Fátima Bernardes apresentou o Jornal Nacional direto da concentração da seleção brasileira. O canal a cabo SporTV também transmitiu o torneio.\n[…]\n«FIFA.com - 2002 FIFA World Cup Korea/Japan» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Seleção Marroquina de Futebol",
      "descricao": "Seleção nacional de futebol do Marrocos, semifinalista da Copa do Mundo de 2022."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Na Copa de 2022, no Catar, que seleção se tornou a primeira africana a chegar a uma semifinal de Copa do Mundo?",
    "resposta": "Marrocos",
    "distratores": [
      "Senegal",
      "Gana",
      "Camarões"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Morocco_national_football_team",
      "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Morocco_national_football_team",
        "situacao": "ok",
        "texto": "The Morocco national football team has represented Morocco in men's international football since their first international match in 1957. It is controlled by the Royal Moroccan Football Federation (FRMF), the governing body for football in Morocco. It has been affiliated with FIFA since 1960, with the Confederation of African Football since 1959, and with the Union of North African Football since \n[…]\nIn 1972 Africa Cup of Nations qualification, the Atlas Lions ousted Algeria, then faced Egypt, defeating them 3–0 in the first leg and suffering a 3–2 defeat on the way back. However, the aggregate win meant they qualified for the final phase of the continental tournament for the first time. In the group stage, they accumulated three 1–1 draws against Congo, Sudan and Zaire and were eliminated in the first round. All three Moroccan goals were scored by Ahmed Faras.\n[…]\nMorocco filed an appeal, trying to get the match to be replayed; it was dismissed by FIFA. In protest, Morocco withdrew from the qualifiers causing the Atlas Lions to miss their final game at home against Zaire which had already qualified for the finals, with FIFA awarding Zaire a 2–0 win on walkover. For the same reason, Morocco also decided not to take part in the 1974 African Cup of Nations qualification.\n[…]\nThe following players were called up for the 2027 Africa Cup of Nations qualification matches with Gabon and Lesotho. On 22 September 2026 Ilias Akhomach was called up.\n[…]\nMorocco's national football team has participated in the World Cup seven times. Their best performance was in the 2022 tournament where they finished in fourth place, becoming the first African nation to reach the semi-finals of the tournament.\n[…]\nPrior to the Cairo 1991 campaign, the Football at the All-Africa Games was open to full senior national teams.\n[…]\nCultural significance of the Atlas lion"
      },
      {
        "url": "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup",
        "situacao": "ok",
        "texto": "The 2022 FIFA World Cup was the 22nd FIFA World Cup, the quadrennial world championship for national football teams organised by FIFA. It took place in Qatar from 20 November to 18 December 2022, after the country was awarded the hosting rights in 2010. It was the first World Cup to be held in the Middle East and the Arabian Peninsula, and the second in an Asian country after the 2002 tournament i\n[…]\nThe sponsors of the 2022 World Cup are divided into seven categories: FIFA Partners, FIFA World Cup Sponsors and African and Middle Eastern, Asian, European, North American and South American supporters. This marks the first time a FIFA World Cup is sponsored by supporters from seven different regions.\n[…]\nPhaedra Almajid, a former media officer for Qatar's 2022 World Cup bid, has alleged that three African football officials were offered bribes to support Qatar's bid. In a Netflix documentary series \"FIFA Uncovered,\" Almajid claims that Hassan Al Thawadi, who led Qatar's bid, offered €2.3 million each to Issa Hayatou of Cameroon, Jacques Anouma of Ivory Coast, and Amos Adamu of Nigeria in exchange for their votes.\n[…]\nQatar was competing with Australia, Japan, South Korea and the US for their bid for the 2022 World Cup. The alleged offer was made during a meeting of African football federations in January 2010. Almajid states that the money was intended for the football federations, not as personal bribes. She initially disclosed these allegations anonymously to the Sunday Times after being dismissed from her position, but later retracted her claims, citing threats from Qatar.\n[…]\nOn 30 November 2022, The Times published an interview with some female fans attending 2022 FIFA World Cup games, with some of them saying that less drunkenness among other attendees made them feel safer at the stadiums than they expected.\n[…]\n2022 FIFA World Cup Official Site (Archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Marroquina_de_Futebol",
        "situacao": "ok",
        "texto": "A Seleção Marroquina de Futebol (árabe: منتخب المغرب لكرة القدم, francês: Équipe du Maroc de football) representa o Marrocos nas competições internacionais de futebol masculino, sendo controlada pela Federação Real Marroquina de Futebol (FRMF). As cores da equipe são vermelho e verde. A equipe é membro da FIFA e da Confederação Africana de Futebol (CAF) e é amplamente considerada como uma das sele\n[…]\nO Marrocos venceu a Copa das Nações Africanas de 1976 e 2025, dois Campeonatos das Nações Africanas e a Copa das Nações Árabes uma vez. Eles participaram da Copa do Mundo da FIFA cinco vezes. Seu melhor resultado veio em 2022, quando conseguiu se classificar para às semifinais (onde foi derrotada pela França por 2 a 0), se tornando a primeira seleção africana a conseguir esse feito. Na disputa do 3° lugar, perdeu para a Croácia por 2 a 1, ficando com o 4° lugar.\n[…]\nFicou em 10º lugar no Ranking Mundial da FIFA em abril de 1998, a primeira seleção africana da história a ser classificada pela FIFA entre os dez melhores times nacionais de futebol. Em dezembro de 2022, o Marrocos é classificado como a 11ª melhor seleção nacional no mundo. Na Copa do Mundo FIFA de 2022, se tornou a primeira seleção africana a chegar às semifinais, após vencer Portugal por 1 a 0.\n[…]\nO Marrocos tornou-se assim a primeira seleção africana a se classificar para um campeonato mundial após ter disputado um torneio eliminatório. A seleção marroquina, orientada pelo iugoslavo Blagoje Vidinić, era composta inteiramente por jogadores do campeonato marroquino, entre eles Driss Bamous e Ahmed Faras.\n[…]\nMarrocos se tornou a primeira seleção africana e árabe a passar da primeira fase da Copa do Mundo.\n[…]\nIsso fez do Marrocos o primeiro time africano e árabe a se classificar para as semifinais.\n[…]\nCopa do Mundo Sub-20: 1 (2025)\n[…]\nCopa do Mundo:  4º lugar - 2022 | 7° lugar - 2026\n[…]\nSeleção Marroquina de Futebol Feminino",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Seleção Sul-Coreana de Futebol",
      "descricao": "Seleção nacional de futebol da Coreia do Sul, semifinalista da Copa do Mundo de 2002, que sediou junto com o Japão."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na Copa de 2002, qual dos dois países anfitriões foi mais longe, chegando à semifinal?",
    "resposta": "Coreia do Sul",
    "fonte": [
      "https://en.wikipedia.org/wiki/South_Korea_national_football_team",
      "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/South_Korea_national_football_team",
        "situacao": "ok",
        "texto": "The South Korea national football team (Korean: 대한민국 축구 국가대표팀; recognized as Korea Republic by FIFA) represents South Korea in men's international football and is governed by the Korea Football Association, a member of FIFA and the Asian Football Confederation (AFC).\n[…]\nSouth Korean journalists criticized Hiddink and gave him a nickname \"Oh-dae-ppang\", which means five to nothing in Korean, when South Korea lost 5–0 again in the friendly match against the Czech Republic after the Confederations Cup. At the 2002 CONCACAF Gold Cup, South Korea finished in fourth place with two draws and three losses without a win. However, they showed their improvement in friendly matches against European teams just before the World Cup.\n[…]\nSouth Korea co-hosted the 2002 World Cup tournament with Japan. Having never won a game in the World Cup previously, the South Korean team achieved their first ever victory in a World Cup with a 2–0 victory against Poland when the tournament began. Their next game was against the United States where they earned a 1–1 draw, with striker Ahn Jung-hwan scoring a late game equalizer. Their last game was against Portugal, who earned two red cards in the match, reducing them to nine men.\n[…]\nThe phenomenon of fans publicly gathering outside stadiums to watch matches together was first observed by FIFA during the 2002 FIFA World Cup in South Korea and Japan, which later inspired the official FIFA Fan Fest, introduced at the 2006 World Cup in Germany.\n[…]\nFootball at the Asian Games has been an under-23 tournament since 2002.\n[…]\nFIFA World Cup Most Entertaining Team: 2002\n[…]\nAFC National Team of the Year: 2002, 2009"
      },
      {
        "url": "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup",
        "situacao": "ok",
        "texto": "The 2002 FIFA World Cup (Korean: 2002 FIFA 월드컵 한국/일본; Japanese: 2002 FIFAワールドカップ 韓国/日本) also branded as Korea Japan 2002, was the 17th FIFA World Cup, the quadrennial football world championship for men's national teams organized by FIFA. It was held from 31 May to 30 June 2002 at sites in South Korea and Japan, with its final match hosted by Japan at International Stadium in Yokohama.\n[…]\nThe official mascots of the 2002 World Cup were Ato, Kaz and Nik (the Spheriks), orange, purple and blue (respectively) futuristic CGI creatures. Playing their own version of soccer called Atmoball, Ato is the coach while Kaz and Nik are players. The three individual names were selected from shortlists by users on the Internet and at McDonald's outlets in the host countries.\n[…]\nThe official FIFA cultural event of the 2002 World Cup was a flag festival called Poetry of the Winds. Held in Nanjicheon Park, an area of the World Cup Park close to Seoul World Cup Stadium, Poetry of the Winds was exhibited from 29 May to 25 June in order to wish success upon the World Cup and promote a festive atmosphere. During the flag art festival, hand-painted flags from global artists were displayed as a greeting to international guests in a manner that was designed to promote harmony.\n[…]\nThe tournament had a major economic impact on both South Korea and Japan, generating an estimated US$1.3 billion in revenue. Spending from World Cup tourists in South Korea created US$307 million in direct income and US$713 million in valued added. Japan spent an estimated US$5.6 billion on preparations for the event, which had a US$24.8 billion impact on the Japanese economy and accounted for 0.6% of their GDP in 2002.\n[…]\n2002 FIFA World Cup broadcasting rights\n[…]\nThe Official Album of the 2002 FIFA World Cup\n[…]\n2002 FIFA World Cup Korea/Japan, FIFA.com\n[…]\n2002 FIFA World Cup Official Website (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Sul-Coreana_de_Futebol",
        "situacao": "ok",
        "texto": "A Seleção Sul-Coreana de futebol (em coreano:  대한민국 축구 국가대표팀) representa a Coreia do Sul nas competições de futebol da FIFA. Filiou-se à FIFA em 1945. Tem sido uma dos mais bem sucedidos times asiáticos desde que fizeram sua estreia nos Jogos Olímpicos de Verão de 1948.\n[…]\nEm 1954, a Coreia do Sul fez sua primeira aparição em copas do mundo, mas acabou sendo eliminada na primeira fase de maneira vexatória, perdendo de 7x0 para a Turquia e por 9x0 para a Hungria, conseguindo o feito de ser a seleção com mais gols sofridos em um único mundial(16).\n[…]\nDesde os anos 1970 a Coreia emergiu como uma potência no futebol Asiático, ganhando diversos campeonatos de futebol de prestígio na Ásia. A Seleção Coreana jogou a Copa do Mundo por 5 vezes consecutivas, tornando seus jogadores os reis do futebol asiático. A Liga Coreana de futebol profissional foi lançada em 1983 como o primeiro de seu gênero na Ásia. Isso não apenas agradou os torcedores nativos, mas também incrementou o nível do futebol Coreano.\n[…]\nA Copa do Mundo de 2002 marcou um momento importante para o futebol sul-coreano. A realização do torneio em conjunto com o Japão refletiu o crescimento do interesse pelo esporte na região. Sob o comando do técnico neerlandês Guus Hiddink e com a participação de jogadores como Park Ji-sung, a Coreia do Sul alcançou sua melhor campanha na história da competição, eliminando a Itália nas oitavas de final e a Espanha nas quartas de final, em uma disputa por pênaltis.\n[…]\nCom esse resultado, tornou-se a primeira seleção asiática a chegar às semifinais de uma Copa do Mundo. A campanha contou com amplo apoio da torcida sul-coreana, incluindo os chamados \"Diabos Vermelhos\", e é frequentemente considerada um marco para o desenvolvimento e a popularização do futebol no país.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Sheffield FC",
      "descricao": "Clube de futebol inglês fundado em 1857 em Sheffield, reconhecido pela FIFA como o mais antigo do mundo."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Fundado em 1857, qual clube inglês é reconhecido pela FIFA como o mais antigo clube de futebol do mundo?",
    "resposta": "Sheffield FC",
    "distratores": [
      "Nottingham Forest",
      "Aston Villa",
      "Blackburn Rovers"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sheffield_F.C."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sheffield_F.C.",
        "situacao": "ok",
        "texto": "Sheffield Football Club is an English football club, currently based in Dronfield, Derbyshire. They compete in the United Counties League Premier Division North, at the ninth level of the English football pyramid. Founded in October 1857, the club is considered by FIFA as the oldest existing independent club still playing football in the world.\n[…]\nIn 1855, members of a Sheffield cricket club organised informal kick-abouts without any official rules. Subsequently, two members, Nathaniel Creswick and William Prest, formed the Sheffield Football Club.\n[…]\nThey became members of The Football Association on 30 November 1863 but continued to use their own set of rules. On 2 January 1865, the club played its first fixture outside Sheffield against Notts County, then known as Nottingham Football Club, at the Meadows Cricket Ground; the match was played eighteen-a-side under \"Nottingham Rules\". Sheffield won by a goal to nil.\n[…]\n2007 was a momentous year for Sheffield F.C. as they entered their 150th year. They finished as runners-up in the league to secure promotion to the Northern Premier League (NPL) for the first time. In October 2007, FIFA president Sepp Blatter attended the club's anniversary dinner, and the following month the club played anniversary celebration matches against Internazionale and Ajax at Bramall Lane.\n[…]\nThere was much reluctance from the owners of Bramall Lane to see the pitch used for football. They did not relent until a charity match between Sheffield and Hallam was suggested in late 1862. The ground was used by Sheffield for its more important fixtures but relations with the owners remained strained. They collapsed altogether in 1875 when the club vowed never to play at the ground again.\n[…]\nIn addition to the above, the following have played in the Football League either before or after playing for Sheffield:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sheffield_Football_Club",
        "situacao": "ok",
        "texto": "O Sheffield Football Club é um clube de futebol Inglês de Sheffield, South Yorkshire. O clube, fundado em 24 de outubro de 1857 é mais conhecido pelo fato de ser, segundo a FIFA, o clube de futebol mais antigo do mundo. O Sheffield Football Club joga atualmente na Northern Premier League Division One East.\n[…]\nO clube também é conhecido por participar da mais antiga rivalidade do futebol mundial entre Sheffield Football Club e Hallam Football Club. O primeiro confronto aconteceu no ano de 1860, no jogo conhecido como o \"Rules Derby\".\n[…]\nO clube recebeu a Ordem de Mérito da FIFA e comemorado pelo Football Hall of Fame Inglês como um destaque na história do futebol.\n[…]\nApós muitas discussões, ambos chegaram à conclusão de que tal desporto seria o futebol. Desta forma, a 24 de outubro de 1857, foi criado o primeiro clube da história, o Sheffield FC, ao redor do qual foram redigidos os primeiros regulamentos do futebol, conhecidos como \"Códigos de Sheffield\", que serviram para organizar as primeiras partidas: solteiros contra casados e profissionais contra amadores.\n[…]\nNo entanto, a paixão de seus adeptos e o orgulho da equipa trouxeram o velho Sheffield FC até o século XXI. Hoje o clube pertence a uma divisão de futebol amador perdida no complicado sistema organizativo do futebol britânico, e joga no Stadium of Bright, perante 1.500 orgulhosos torcedores.\n[…]\nApesar de não ter muitos troféus em sua sede, o Sheffield FC é, ao lado de Real Madrid e Milan, a única equipe do mundo a contar com a Ordem de Mérito da FIFA, que reconheceu oficialmente a equipe como \"decano do futebol universal\".\n[…]\nO Sheffield Football Club possui uma rivalidade com o Hallam Football Club chamada \"Rules Derby\" ambos são os clubes mais antigos do mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Copa da Inglaterra",
      "descricao": "Torneio eliminatório de clubes de futebol da Inglaterra, disputado desde a temporada de 1871 e 1872."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Disputado desde 1871, qual é o torneio nacional de futebol mais antigo do mundo?",
    "resposta": "Copa da Inglaterra",
    "fonte": [
      "https://en.wikipedia.org/wiki/FA_Cup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/FA_Cup",
        "situacao": "ok",
        "texto": "The Football Association Challenge Cup, more commonly known as the FA Cup, is an annual knockout football competition in domestic English football. First played during the 1871–72 season, it is the oldest national football competition in the world. It is organised by and named after the Football Association (the FA). A concurrent Women's FA Cup has been held since 1970.\n[…]\nIn 1863, the newly founded Football Association (the FA) published the Laws of the Game of Association Football, unifying the various different rules in use before then. On 20 July 1871, in the offices of The Sportsman newspaper, the FA Secretary C. W. Alcock proposed to the FA committee that \"it is desirable that a Challenge Cup should be established in connection with the Association for which all clubs belonging to the Association should be invited to compete\".\n[…]\nThe inaugural FA Cup tournament kicked off in November 1871. After thirteen games in all, Wanderers were crowned the winners in the final, on 16 March 1872. Wanderers retained the trophy the following year. The modern cup was beginning to be established by the 1888–89 season, when qualifying rounds were introduced."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_da_Inglaterra",
        "situacao": "ok",
        "texto": "The FA Cup, também chamada de Emirates FA Cup por motivos de patrocínio, e mais conhecida como Taça de Inglaterra ou Copa da Inglaterra em países lusófonos, é a mais antiga competição de futebol do mundo, organizada pela The Football Association (The FA), órgão máximo que controla o esporte na Inglaterra.\n[…]\nDisputada em formato de eliminatórias pelos clubes de futebol da Inglaterra, a FA Cup é a segunda mais importante competição do desporto no país, logo após a Premier League. Ditou o modelo de competição em mata-mata, seguido atualmente pela Copa do Brasil, Copa da Itália, Copa da Alemanha, Copa da França, Copa dos Países Baixos, Taça de Portugal, Copa do Rei da Espanha, U.S. Open Cup, entre outras.\n[…]\nNo passado, se a equipa vencedora da Copa da Inglaterra também se classificasse para a seguinte temporada da Liga dos Campeões da UEFA, a vaga seria dada ao vice-campeão do torneio, que deve, neste caso, passar pela fase preliminar da competição europeia. A partir da temporada 2015–16, a UEFA decidiu que nestas situações a vaga será atribuída ao sexto colocado do campeonato nacional, equipe que não se classificou para a Liga Europa.\n[…]\nO vencedor da Copa da Inglaterra também disputa a Supercopa da Inglaterra, o tradicional jogo de abertura da temporada contra o campeão da Premier League (ou o vice-campeão, se a mesma equipa ganhar os dois torneios).\n[…]\nTradicionalmente, a final da Copa da Inglaterra era disputada no antigo Estádio de Wembley. As eliminatórias eram disputadas em outros campos devido à preparação de Wembley para sediar a partida final. Entre 2001 e 2006, com a demolição do antigo estádio para a construção de um novo, os jogos da final ocorreram no Millennium Stadium, em Cardiff. A final voltou a ser disputada em Wembley em maio de 2007, já no novo Estádio de Wembley.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Trio MSN",
      "descricao": "Trio de ataque do Barcelona formado por Messi, Suárez e Neymar entre 2014 e 2017."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Barcelona, o trio de ataque conhecido como MSN juntava Messi, Neymar e qual atacante uruguaio?",
    "resposta": "Luis Suárez",
    "fonte": [
      "https://en.wikipedia.org/wiki/Luis_Su%C3%A1rez"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Luis_Su%C3%A1rez",
        "situacao": "desambiguacao",
        "texto": "Luis Suárez may refer to:\n\nLuis Suárez (bishop), Spanish Roman Catholic bishop, bishop of Dragonara, 1554–c. 1580\nLuis Suárez (baseball) (1916–1991), Cuban baseball player\nLuis Suárez (actor) (1945–1992), Spanish actor, appeared in La barraca (TV series) et al.\nLuis Mauricio Suárez (born 1979), Mexican baseball manager and player\nLuis Suárez Fernández (1924–2024), Spanish historian\nLuis Suárez (Ar"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Luis_Su%C3%A1rez",
        "situacao": "desambiguacao",
        "texto": "Luis Suárez pode referir-se a:\n\nLuis Alberto Suárez, futebolista uruguaio que atua como centroavante\nLuís Javier Suárez, futebolista colombiano que atua como atacante\nLuis Fernando Suárez, treinador e ex-futebolista colombiano\nLuis Suárez Miramontes, futebolista e treinador de futebol espanhol (1935–2023)\n\n\n== Ver também ==\n\nTodas as páginas cujo título começa por \"Luis Suárez\"\nTodas as páginas qu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Botafogo",
      "descricao": "Botafogo de Futebol e Regatas, clube carioca de camisa alvinegra e escudo com uma estrela."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que figura branca aparece no escudo preto do Botafogo e virou um dos apelidos do clube carioca?",
    "resposta": "A Estrela Solitária",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Botafogo_de_Futebol_e_Regatas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Botafogo_de_Futebol_e_Regatas",
        "situacao": "ok",
        "texto": "Botafogo de Futebol e Regatas é uma agremiação poliesportiva brasileira, com sede no bairro homônimo ao clube, na cidade do Rio de Janeiro. Nascido da fusão do Club de Regatas Botafogo (fundado para o remo em 1894) com o Botafogo Football Club (formado para o futebol em 1904), é um dos principais clubes do Brasil. Suas maiores glórias esportivas vêm principalmente do futebol, especialmente entre a\n[…]\nA Estrela Solitária, presente no escudo, na bandeira e na flâmula do clube, era o símbolo máximo do Club de Regatas Botafogo. Originalmente, possuía um formato diferente: tinha em cada ponta uma tonalidade, dividindo-as em preto e branco, dando efeito de sombra. Contudo, foi substituída nos primeiros anos pelo famoso modelo da estrela de cinco pontas branca em um fundo preto.\n[…]\nEra um escudo branco no estilo suíço, com o contorno em preto. Ao centro, as iniciais do clube BFC, entrelaçadas em preto. Em 1942, com o surgimento do Botafogo de Futebol e Regatas, manteve-se o formato do escudo do Botafogo Football Club, com a Estrela Solitária branca, do Club de Regatas Botafogo, no lugar das letras, em um fundo preto. Além disso, o escudo recebeu dois contornos: o de dentro branco e o de fora negro.\n[…]\nA bandeira do Botafogo de Futebol e Regatas surgiu após a fusão do Botafogo Football Club com o Club de Regatas Botafogo. O clube de futebol possuía uma bandeira com faixas horizontais pretas e brancas, com o escudo do clube ao centro. Foi bordada pela primeira vez pelas irmãs do ex-presidente Edwin Elkin Hime Júnior: Ruth, Hilda, May, Leah e Miriam. Já a bandeira do clube de regatas era branca, com um quadrilátero preto no canto superior esquerdo e a tradicional Estrela Solitária em branco.\n[…]\nCom a fusão, em 1942, permaneceram as faixas horizontais e o quadrilátero preto, com a Estrela Solitária branca no canto superior esquerdo.\n[…]\nBotafogo no X\n[…]\nBotafogo no Instagram\n[…]\nBotafogo no Flickr"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Taça FIFA",
      "descricao": "Troféu de ouro entregue ao campeão da Copa do Mundo desde 1974, sucessor da Taça Jules Rimet."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O troféu entregue ao campeão da Copa do Mundo desde 1974 mostra duas figuras humanas sustentando o quê?",
    "resposta": "O globo terrestre",
    "fonte": [
      "https://en.wikipedia.org/wiki/FIFA_World_Cup_Trophy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/FIFA_World_Cup_Trophy",
        "situacao": "ok",
        "texto": "The FIFA World Cup is a trophy made primarily of gold that is awarded to the winners of the FIFA World Cup association football tournament, which takes place every olympiad (four years). Since the advent of the World Cup in 1930, two different trophies have been used: the Jules Rimet Trophy from 1930 to 1970, and thereafter the FIFA World Cup Trophy from 1974 to the present day. As of June 2026, t\n[…]\nThe subsequent trophy, called the \"FIFA World Cup Trophy\", was introduced in 1974. Made of 18 karat gold with bands of malachite on its base, it stands 36.8 centimetres (14.5 in) high and weighs 6.175 kilograms (13.61 lb). The trophy was made by the GDE Bertoni company in Italy. It depicts two human figures holding up the Earth. The current holders of the trophy are Spain, winners of the 2026 World Cup.\n[…]\nThe trophy is kept at the FIFA World Football Museum in Zürich, Switzerland, and leaves there only on select occasions.\n[…]\nA replacement trophy was commissioned by FIFA for the 1974 World Cup. Fifty-three submissions were received from sculptors in seven countries. Italian artist Silvio Gazzaniga was awarded the commission. The trophy stands 36.8 centimetres (14.5 in) tall and is made of 18 karat gold. Its base is 13 centimetres (5.1 in) in diameter containing two layers of malachite, with the trophy weighing 6.175 kilograms (13.61 lb) in total.\n[…]\nThe trophy has the engraving \"FIFA World Cup\" on its base. After the 1994 FIFA World Cup, a plate was added to the bottom side of the trophy where the names of winning countries are engraved, names therefore not visible when the trophy is standing upright. The inscriptions state the year in figures and the name of the winning nation in its national language – for example, \"1974 Deutschland\" or \"1994 Brasil\".\n[…]\nHistoric list of all holders of the trophy (winners of the FIFA World Cup).\n[…]\nFIFA World Cup Trophy\n[…]\nFIFA Women's World Cup trophy"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trof%C3%A9u_da_Copa_do_Mundo_FIFA",
        "situacao": "ok",
        "texto": "O Troféu da Copa do Mundo FIFA é um troféu de ouro concedido aos vencedores da Copa do Mundo FIFA. Desde o advento do torneio em 1930, foram usadas duas versões: a Taça Jules Rimet, de 1930 a 1970, e o Troféu da Copa do Mundo, de 1974 até a atualidade.\n[…]\nO troféu subsequente, chamado de \"Troféu da Copa do Mundo da FIFA\", foi lançado em 1974. Feito de ouro de dezoito quilates com uma base de malaquita, tem 36,8 centímetros de altura e pesa 6,1 quilos. A taça foi feita pela empresa Stabilimento Artistico Bertoni, na Itália. Ela mostra duas figuras humanas segurando a Terra. Os atuais detentores do troféu são a Espanha, vencedores da Copa do Mundo de 2026.\n[…]\nDurante a Segunda Guerra Mundial, o troféu foi guardado pela Itália, campeã de 1938. O italiano Ottorino Barassi, vice-presidente da FIFA e presidente da Federação Italiana de Futebol (FIGC), transportou secretamente a taça de um banco em Roma e escondeu-o em uma caixa de sapatos debaixo da cama para impedir que os nazistas o levassem. A Copa do Mundo de 1958 na Suécia marcou o início de uma tradição em relação ao troféu.\n[…]\nUm novo troféu foi encomendado pela FIFA para a Copa do Mundo de 1974. Cinquenta e três submissões foram recebidas de escultores de sete países. O artista italiano Silvio Gazzaniga foi premiado com a comissão. O troféu tem 36,5 centímetros de altura e é feito de cinco quilos de ouro de dezoito quilates (75%), no valor aproximado de 161 000 dólares (2018), com uma base de 13 centímetros de diâmetro contendo duas camadas de malaquita.\n[…]\nTaça Jules Rimet\n[…]\nTroféu da Copa do Mundo\n[…]\nO Troféu da Copa do Mundo Arquivado em 27 de março de  2015, no Wayback Machine. no website da FIFA\n[…]\nTroféus da FIFA (PDF) Arquivado em 14 de junho de  2010, no Wayback Machine.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Clássico dos Milhões",
      "descricao": "Clássico do futebol carioca entre Flamengo e Vasco da Gama."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Rio de Janeiro, o Clássico dos Milhões é o duelo entre o Flamengo e qual rival?",
    "resposta": "Vasco da Gama",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Clássico_dos_Milhões"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Clássico_dos_Milhões",
        "situacao": "ok",
        "texto": "O Clássico dos Milhões é o tradicional confronto entre os clubes de futebol brasileiro Flamengo e Vasco da Gama, ambos da cidade do Rio de Janeiro, capital do estado homônimo. É o clássico de maior rivalidade e mais popular na cidade e no estado, já que reúne as duas maiores torcidas cariocas. Também é considerado um dos maiores clássicos do país devido ao grande número de torcedores dos dois club\n[…]\nEm Campeonatos Cariocas, um ficou na primeira e o outro na segunda colocação em 23 oportunidades, com ligeira vantagem para o rubro-negro: 13 títulos contra 10 dos cruz-maltinos. Destaca-se pelo Vasco da Gama o famoso título do Campeonato Carioca de 1958, conhecido também como Super Campeonato Carioca. O time do Vasco da Gama se consagraria campeão sobre o Flamengo nos anos de 1923, 1952, 1958, 1977, 1982, 1987, 1988, 1992, 1994 e 1998.\n[…]\nO Estádio Vasco da Gama, mais conhecido como São Januário, também marcou duelos importantes no clássico dos milhões. A maior goleada da história do confronto ocorreu no estádio, os vascaínos venceram os flamenguistas por 7–0 em partida válida pelo Campeonato Carioca de 1931, o jogo contou com uma grande atuação de Russinho, que marcou um poker-trick, e ficou marcado como uma das grandes atuações de um dos melhores elencos da história do clube.\n[…]\nFlamengo 4–1 Vasco, 121 007, 10 de janeiro de 1954, Campeonato Carioca\n[…]\nEm meados do ano de 2001, quando do final da fase mais áurea da história do Vasco da Gama, ocorrida entre 1997 e 2001, ambos os clubes ombreavam em número de conquistas oficiais relevantes. Com o conquista da Copa João Havelange, o Vasco ostentava 4 títulos da Série A do Campeonato Brasileiro de Futebol, em cotejo a 4 ou 5 do Flamengo (dependendo da interpretação que se atribua à Copa União de 1987), possuindo o Flamengo àquela altura 1 título da Copa do Brasil de Futebol.\n[…]\nClássico Vovô\n[…]\n«Estatísticas detalhadas». no sítio do Vasco da Gama"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Derby della Madonnina",
      "descricao": "Clássico de Milão entre os clubes Milan e Inter, que dividem o estádio San Siro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Itália, o clássico chamado Derby della Madonnina opõe o Milan a qual clube?",
    "resposta": "Inter de Milão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Derby_della_Madonnina"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Derby_della_Madonnina",
        "situacao": "ok",
        "texto": "The Derby della Madonnina (Italian pronunciation: [ˈdɛrbi della madonˈniːna]; named after the Madonnina statue on top of the Milan Cathedral), also known as the Derby di Milano (English: Milan Derby), is a derby football match between the two prominent Milanese clubs, Inter Milan and AC Milan. Both clubs are among the most successful in Italian football history.\n[…]\nTaking place at least twice during the year via the league fixtures, this cross-town rivalry has extended to the Coppa Italia, Champions League, and Supercoppa Italiana, as well as minor tournaments and friendlies. It is one of the two major crosstown derbies in association football that are always played in the same stadium, in this case the San Siro, as both Inter and AC Milan call San Siro \"home\", the other derby being Derby della Capitale.\n[…]\nThis era saw brilliant derby matches and an increasing rivalry: while Milan won the European Cup in 1962–63, Inter with one of the best teams in Italian football history followed with back-to-back success in 1964 and 1965 and with two consecutive Intercontinetal Cup win and with others two European Cup finals played in 1967 and 1972. Milan again won the title in 1968–69.\n[…]\nIn 2023–24, Inter defeated Milan 2–1 as the designated \"away\" side on 22 April 2024; the result confirmed they had won their 20th league title, marking the first time the Scudetto had been decided in a Derby della Madonnina. The title put Inter one clear of Milan's 19 titles, and ensured a second star on the club's badge; the game was also Inter's sixth successive win over Milan, the joint-longest winning streak of either side the derby's history.\n[…]\nMilan got revenge on Inter by winning the derby matchup in the 2024 Supercoppa Italiana after a 3–2 comeback victory.\n[…]\nMilan win\n[…]\nInter win\n[…]\nInter's archive about the Milan derby Deprecated link archived 19 July 2012 at archive.today"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Derby_della_Madonnina",
        "situacao": "ok",
        "texto": "O Derby della Madonnina, também conhecido como Derby di Milano (em português: Dérbi de Milão), é o confronto entre os clubes do futebol italiano de maior expressão da cidade de Milão, a Internazionale e o AC Milan. O nome do dérbi é uma referência à uma estátua da Virgem Maria no topo da Catedral de Milão, que é frequentemente referida como Madonnina (\"Pequena Madonna\" em italiano).\n[…]\nEm 13 de dezembro de 1899, Herbert Kilpin e outros fundaram o Milan Cricket and Football Club. Alfred Edwards, um ex-vice-cônsul britânico em Milão e uma personalidade bem conhecida da alta sociedade milanesa, foi o primeiro presidente eleito do clube. Inicialmente, o clube incluía uma seção de críquete, gerenciada por Edward Berra, e uma seção de futebol gerenciada por David Allison. O time de Milão logo ganhou notoriedade relevante sob a orientação de Herbert Kilpin.\n[…]\nO primeiro dérbi entre os dois rivais milaneses foi realizada na final da Taça Chiasso de 1908, um torneio de futebol disputado no Cantão do Ticino, na Suíça, em 18 de outubro daquele ano; o AC Milan venceu por 2 a 1. Enquanto a Inter e o Milan se enfrentavam esporadicamente nos primeiros anos, a rivalidade foi renovada anualmente desde a temporada inaugural de 1926–27 da Divisione Nazionale, a primeira liga italiana verdadeiramente nacional.\n[…]\nInternazionale eliminou o Milan na Terceira Fase da Copa da Itália de 1994-95\n[…]\nMilan eliminou a Internazionale nas Quartas-de-Finais da Copa da Itália de 1997-98\n[…]\nInternazionale eliminou o Milan nas Quartas-de-Finais da Copa da Itália de 1999-2000\n[…]\nMilan eliminou a Internazionale nas Quartas-de-Finais da Copa da Itália de 2017–18\n[…]\nInternazionale eliminou o Milan nas Quartas-de-Finais da Copa da Itália de 2020–21\n[…]\nInternazionale eliminou o Milan nas Semifinais da Copa da Itália de 2021–22\n[…]\nMilan eliminou a Internazionale nas Semifinais da Copa da Itália de 2024–25",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Old Firm",
      "descricao": "Clássico de Glasgow, na Escócia, entre os clubes Celtic e Rangers."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O Celtic, de Glasgow, enfrenta seu maior rival da mesma cidade no clássico chamado Old Firm. Qual é esse rival?",
    "resposta": "Rangers",
    "fonte": [
      "https://en.wikipedia.org/wiki/Old_Firm"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Old_Firm",
        "situacao": "ok",
        "texto": "The Old Firm is a collective term for the Scottish football clubs Celtic and Rangers, which are both based in Glasgow. The two clubs are the most successful and popular in Scotland, and the rivalry between them has become deeply embedded in Scottish culture. It has reflected and contributed to political, social and religious division and sectarianism in Scotland. As a result, matches between them \n[…]\nThe majority of Rangers and Celtic supporters do not get involved in sectarianism, but serious incidents do occur with a tendency for the actions of a minority to dominate the headlines. The Old Firm rivalry fuelled many assaults on derby days, and some deaths in the past have been directly related to the aftermath of Old Firm matches. An activist group that monitors sectarian activity in Glasgow has reported that on Old Firm weekends, violent attacks increase ninefold over normal levels.\n[…]\nOn just five occasions since 1891 have neither of the Glasgow giants been the league winner nor the runner-up. This includes 1964–65, the only season in which both Rangers and Celtic failed to finish in the top three places. The Old Firm have finished 1st and 2nd 55 times overall. Between the resurgence of Celtic in the mid-1990s and the liquidation of Rangers in 2012, '1–2' finishes were recorded in all but one of 17 SPL-era seasons, the exception being Hearts in 2005–06.\n[…]\nThe following season began with Rangers claiming their first SWPL Cup and ended with crowds of over 10,000 at both Celtic Park and Ibrox watching the final league fixtures – in which Glasgow City fended off their increasingly well-funded rivals and regained the championship in dramatic circumstances – quickly followed by another healthy attendance at Hampden in the first Old Firm cup final in the women's game (as well as the first to be held at the national stadium), with Celtic retaining the trophy."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Old_Firm",
        "situacao": "ok",
        "texto": "Old Firm (lit. \"Velha Firma\", em inglês) é o nome popularmente dado ao maior clássico do futebol escocês, que envolve o Celtic Football Club e o Rangers Football Club, equipes de Glasgow, maior cidade da Escócia, que se confrontam desde 28 de maio de 1888, quando o Celtic venceu por 5 a 2.\n[…]\nCuriosamente, embora dominem a liga escocesa, em somente cinco ocasiões o clássico serviu como jogo do título na competição: no jogo-desempate que decidiu a edição de 1904-05, em que a vitória por 2-1 do Celtic encerrou jejum de sete anos e abriu um hexacampeonato seguido ao clube; o 2-2 na temporada 1966-67, em que os alviverdes puderam mesmo dentro do estádio rival garantirem o troféu nacional em sua temporada mais gloriosa, semanas antes da conquista na Liga dos Campeões; o 4-2 da temporada 1978-79, no qual o Celtic superou com dez jogadores em campo (após uma expulsão) uma derrota parcial de 1-0, assinalando nos cinco minutos finais os dois últimos gols - em clássico que ganhou contornos míticos também pela ausência de maiores registros em vídeo em função de uma greve na imprensa; o 3-0 da temporada 1998-99, favorável ao Rangers dentro do estádio vizinho em um jogo tumultuado, repleto de expulsões, invasões de campo e necessidade de sutura no rosto do árbitro (cuja casa terminou vandalizada) no decorrer do chamado \"jogo da vergonha\".\n[…]\nOs recordes de público deste clássico são os confrontos de 1 de janeiro de 1938 com 92.000 espectadores no Celtic Park e de 118.567 espectadores no Ibroux Park (Rangers) em 1 de janeiro de 1939.\n[…]\nClássico (futebol)\n[…]\nSite do clássico escocês\n[…]\nMatéria sobre o Old Firm dentro e fora de campo\n[…]\nhttps://ge.globo.com/futebol/futebol-internacional/noticia/celtic-vence-rangers-em-classico-escoces-com-invasao-de-campo-sinalizadores-e-heroi-japones.ghtml",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Corinthians",
      "descricao": "Sport Club Corinthians Paulista, clube de futebol de São Paulo fundado em 1910."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O escudo do Corinthians traz dois remos cruzados e qual outro objeto ligado à navegação?",
    "resposta": "Uma âncora",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Sport_Club_Corinthians_Paulista"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Sport_Club_Corinthians_Paulista",
        "situacao": "ok",
        "texto": "Sport Club Corinthians Paulista (SCCP), comumente referido como Corinthians, é um clube poliesportivo brasileiro da cidade de São Paulo, capital do estado de São Paulo. Foi fundado como uma equipe de futebol no dia 1 de setembro de 1910 por um grupo de operários anarco-sindicalistas na região da Ponte Grande, no bairro do Bom Retiro. Seu nome foi inspirado no Corinthian Football Club de Londres, q\n[…]\nA influência do remo na história do clube modificou o escudo original, que aludia meramente ao futebol, com o acréscimo do par de remos e da âncora como aparecem até os dias de hoje.\n[…]\nEm 2025, o Corinthians conquistou seu 31º título do Campeonato Paulista e seu quarto título da Copa do Brasil\n[…]\nEm 1939, o escudo ganhou uma boia rodeando o círculo, além de um par de remos e a âncora, em alusão ao sucesso do clube nos esportes náuticos. O desenho foi criado pelo pintor modernista Francisco Rebolo, que foi jogador do segundo quadro do Corinthians na década de 1920. Depois disso, o símbolo corintiano passou por pequenas alterações ao longo do tempo, como na bandeira e na moldura.\n[…]\nLauro D'Ávila, radialista brasileiro, apresentou o programa de calouros: \"Quá-Quá Quarenta\", da Rádio Record, em São Paulo. Ávila compôs em 1952 os versos do atual hino oficial do Sport Club Corinthians Paulista e a composição logo conquistou a confiança dos torcedores. O total apoio dos torcedores transformou a composição em hino oficial do clube.\n[…]\nO recorde de público nos dois principais estádios do Estado de São Paulo, o Morumbi e o Pacaembu, foram registrados em partidas com a presença do Corinthians. No dia 9 de outubro de 1977, mais de 146 mil pessoas assistiram ao duelo entre Corinthians e Ponte Preta, o segundo das finais do Campeonato Paulista daquele ano, que encerraria o tabu do \"Timão\" de 23 anos sem títulos oficiais.[carece de fontes]?\n[…]\nJogadores que mais vezes atuaram com a camisa do Corinthians."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Fluminense",
      "descricao": "Fluminense Football Club, clube carioca fundado em 1902, conhecido como Tricolor das Laranjeiras."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O Fluminense é chamado de tricolor. Quais são as três cores do clube carioca?",
    "resposta": "Grená, verde e branco",
    "distratores": [
      "Vermelho, verde e branco",
      "Grená, azul e branco",
      "Vinho, preto e branco"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Fluminense_Football_Club"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Fluminense_Football_Club",
        "situacao": "ok",
        "texto": "Fluminense Football Club é um clube multidesportivo brasileiro sediado no bairro de Laranjeiras, localizado na Zona Sul da cidade do Rio de Janeiro, capital do estado homônimo. Fundado em 21 de julho de 1902, tem como principal atividade o futebol, mandando suas partidas no Maracanã. Disputa o Campeonato Carioca, a principal liga estadual do Rio de Janeiro, bem como o Campeonato Brasileiro, princi\n[…]\nEm 15 de julho de 1904, após leitura de carta de Oscar Cox e Mário Rocha, enviada da Inglaterra, na Assembleia Geral Extraordinária, o Fluminense trocou a camisa anterior, de cor cinza e branco, pela tricolor, devido à impossibilidade de conseguir tecido na cor cinza, porque ele existia em pouca quantidade no mercado. Então foram sugeridas as cores encarnado, branco e verde, a indicação foi posta em votação e aceita de imediato.\n[…]\nSegundo o estatuto do clube, as cores oficiais são encarnado, branco e verde, embora o primeiro normalmente seja referido como grená.\n[…]\nA camisa tricolor é muito marcante, tendo sido descrita pelo jornalista argentino Luis Paz, como \"La camiseta más linda del mundo\", em matéria para o jornal portenho Página/12 em 2015. Já o site inglês Football Shirt Collective, comentou que o lançamento das camisas do Fluminense é um dos eventos mais aguardados pela página, por conta da original combinação de cores do clube, e que o terceiro uniforme de 2020-21, predominante verde, era candidato a ser o mais bonito do ano de 2020.\n[…]\nJá a camisa número três de 2020, predominantemente verde e com detalhes em laranja, contém um selo em homenagem aos 125 anos do futebol no Brasil embaixo, do lado direito frontal, atendendo a campanha da Umbro e foi lançada em 18 de setembro de 2020.\n[…]\nCamisa com listras verticais em grená, branco e verde, calção e meias brancas;\n[…]\nCamisa laranja, calção verde e meias laranjas;\n[…]\nFluminense Football Club no Facebook\n[…]\nFluminense Football Club no X"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "AC Milan",
      "descricao": "Associazione Calcio Milan, clube de futebol de Milão, na Itália, fundado em 1899."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Milan do fim dos anos oitenta, o famoso trio holandês tinha Gullit, Van Basten e qual volante?",
    "resposta": "Frank Rijkaard",
    "fonte": [
      "https://en.wikipedia.org/wiki/AC_Milan",
      "https://en.wikipedia.org/wiki/Frank_Rijkaard"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/AC_Milan",
        "situacao": "ok",
        "texto": "Associazione Calcio Milan (Italian pronunciation: [assotʃatˈtsjoːne ˈkaltʃo ˈmiːlan]), commonly referred to as AC Milan or simply Milan (Italian pronunciation: [ˈmiːlan]) mainly outside of Italy, is an Italian professional football club based in Milan, Lombardy. Founded in 1899, the club competes in Serie A, the top tier of Italian football. In its early history, Milan played its home games in dif\n[…]\nDuring the 1991–92 season, the club notably achieved the feat of being the first team to win the Serie A title without losing a single game. Milan is home to multiple Ballon d'Or winners, and three of the club's players, Marco van Basten, Ruud Gullit, and Frank Rijkaard, were ranked in the top three on the podium for the 1988 Ballon d'Or, an unprecedented achievement in the history of the prize.\n[…]\nMilan is one of the wealthiest clubs in Italian and world football. It was a founding member of the now-defunct G-14 group of Europe's leading football clubs as well as its replacement, the European Club Association.\n[…]\nOn 20 February 1986, entrepreneur Silvio Berlusconi (who owned Fininvest and Mediaset) acquired the club and saved it from bankruptcy; he invested vast amounts of money, appointed rising manager Arrigo Sacchi at the helm of the Rossoneri and signed Dutch internationals Ruud Gullit, Marco van Basten and Frank Rijkaard. The Dutch trio added an attacking impetus to the team, and complemented the club's Italian internationals Paolo Maldini, Franco Baresi, Alessandro Costacurta and Roberto Donadoni.\n[…]\nAs a team based in the world's most important fashion capital, AC Milan is known for its partnerships with Italian high fashion brands. Dolce & Gabbana have been closely associated with the team since the Italian luxury brand designed AC Milan's official off-field suits in 2004. The collaboration continued for over 10 years.\n[…]\nMilan Lab\n[…]\nMedia related to AC Milan at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Frank_Rijkaard",
        "situacao": "ok",
        "texto": "Franklin Edmundo Rijkaard (Dutch pronunciation: [ˈfrɑŋklɪn ˈɛtmundoː ˈfrɑŋk ˈrɛikaːrt] ; born 30 September 1962) is a Dutch former football manager and player who primarily played as a defensive midfielder. He is regarded as one of the greatest midfielders of all time.\n[…]\nRijkaard played for Ajax, Real Zaragoza and AC Milan. With Ajax, he won five Eredivisie titles and the 1994–1995 Champions League. With AC Milan, he won Serie A titles, as well as the 1988–89 and 1989–90 European Cup (Champions League) titles.\n[…]\nIn September 1987, what would have been Rijkaard's third season (1987–88) under Dutchman Johan Cruyff as head coach, Rijkaard stormed off the training field and vowed never to play under him again. He was subsequently signed by Sporting CP, but he signed too late to be eligible to play in any competition. He was immediately loaned out to Real Zaragoza, but upon completing his first season at Zaragoza was signed by AC Milan.\n[…]\nRijkaard played for five seasons at Milan. Playing alongside fellow country-men Marco van Basten and Ruud Gullit, Rijkaard won the European Cup twice (in 1989 against Steaua București and 1990, against Benfica) and the domestic Serie A championship twice. In the 1990 European Cup Final, he scored the only goal to win the cup for Milan.\n[…]\nIn his final game, Rijkaard won the Champions League with a 1–0 victory over his former club Milan in the 1995 final at the Ernst-Happel-Stadion in Vienna.\n[…]\nScores and results list the Netherlands' goal tally first, score column indicates score after each Rijkaard goal.\n[…]\nAC Milan Hall of Fame\n[…]\nProfile at the AC Milan website\n[…]\nFrank Rijkaard at BDFutbol\n[…]\nFrank Rijkaard at National-Football-Teams.com\n[…]\nFrank Rijkaard – FIFA competition record (archived)\n[…]\nFrank Rijkaard – UEFA competition record (archive)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Associazione_Calcio_Milan",
        "situacao": "ok",
        "texto": "Associazione Calcio Milan, frequentemente abreviado como AC Milan ou Milan, é um clube de futebol italiano com sede em Milão. Devido às suas relevantes conquistas, o clube é considerado um dos mais importantes do mundo. Partilha com o seu maior rival, a Internazionale, o Estádio Giuseppe Meazza, também conhecido como San Siro, que tem capacidade para 80 018 espectadores e é o palco do clássico de \n[…]\nO Milan foi um dos fundadores do extinto G-14, um grupo que representa os dezoito principais clubes da Europa, e também é um dos membros fundadores da Associação Europeia de Clubes, seu substituto. O time foi eleito pela FIFA o nono maior clube de futebol do século XX.\n[…]\nEm 1938 o clube oficializou definitivamente seu nome como Associazione Calcio Milan.\n[…]\nSilvio Berlusconi também articulou a contratação de três jogadores holandeses, Marco van Basten, Ruud Gullit e Frank Rijkaard. E foi assim que o Milan começou a sua era dourada. O time conquistou quatro torneios europeus e duas Copas Intercontinentais. As partidas da equipe passaram a ser transmitidas para o mundo inteiro. Em 1991 o clube acertou com um novo técnico, Fabio Capello, que já tinha atuado pelo Milan como jogador. O reinado de Fabio Capello no Milan foi arrebatador.\n[…]\nO Milan se viu novamente associado a  outro escândalo de manipulação de resultados, tal como o famigerado Totonero, quando em 2006 o clube esteve envolvido no escândalo de manipulação de resultados da Serie A, que rebaixou a Juventus para a Serie B.\n[…]\nJogadores emprestados pelo Milan;\n[…]\nTreinadores do AC Milan de 1900 até o presente.\n[…]\nHistória do Associazione Calcio Milan\n[…]\nJuventus vs. Milan\n[…]\nAC Milan WFC\n[…]\n«Página da Milan na Serie A» (em inglês)\n[…]\n«Página da Milan na UEFA»\n[…]\nAC Milan no Facebook\n[…]\nAC Milan no X\n[…]\nAC Milan no Instagram\n[…]\nAC Milan no YouTube\n[…]\nAC Milan no TikTok\n[…]\nAC Milan na Twitch",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Futbol Club Barcelona",
      "descricao": "Clube de futebol da cidade de Barcelona, na Espanha, fundado em 1899."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Depois de mais de um século sem patrocínio na camisa, o Barcelona estampou em 2006, pagando em vez de receber, o nome de qual entidade?",
    "resposta": "Unicef",
    "fonte": [
      "https://en.wikipedia.org/wiki/FC_Barcelona"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/FC_Barcelona",
        "situacao": "ok",
        "texto": "Futbol Club Barcelona (Catalan pronunciation: [fudˈbɔl ˈklub bəɾsəˈlonə] ), commonly known as FC Barcelona and colloquially as Barça ([ˈbaɾsə]), is a professional football club based in Barcelona, Catalonia, Spain, that competes in La Liga, the top division of Spanish football.\n[…]\nAlthough Spanish clubs first began displaying sponsor names on their shirts in 1981, Barcelona held off having a name across the front of the shirt until 2006, when the club signed an agreement to have UNICEF's name on their front. Unlike traditional deals, this was not to have paying money to the club, but instead to have the club raise money for UNICEF. In 2011, the club signed its first commercial shirt sponsorship deal, when it reached an agreement with Qatar Foundation.\n[…]\nThe song was first performed on 27 November 1974 at the Camp Nou before the match between Barcelona and the East Germany national team by a 3,500-man choir led by Oriol Martorell. On November 28, 1988, in celebration of the club's centenary, the song was performed by Catalan singer-songwriter Joan Manuel Serrat at the end of the festival at Camp Nou. Since the 2008–09 season, the Cant del Barça has been featured on the official Barcelona jerseys.\n[…]\nIn December 2021, a record 88% of the club members voted in favor of the Espai Barça project to revamp the club's sporting facilities, being the first online referendum in Barcelona history. Originally projected to have been completed in 2021, renovation work on the Camp Nou began on 1 June 2023 and it is now aimed to finish by 2027, with an estimated €1.5 billion net funding. During the renovation period, Barcelona moved for 2 seasons to the Estadi Olímpic Lluís Companys in Montjuïc.\n[…]\nBarcelona on BBC Sport: Club news – Recent results and fixtures"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Futbol_Club_Barcelona",
        "situacao": "ok",
        "texto": "Futbol Club Barcelona (pronúncia catalã: /fubˈbɔɫ ˈkɫub bərsəˈɫonə/ ()), mais conhecido como Barcelona e coloquialmente como Barça, é um clube de futebol profissional sediado em Barcelona, na Catalunha, uma comunidade autônoma da Espanha. Compete na La Liga, a principal competição do sistema de ligas espanhol. Manda seus jogos em casa no Camp Nou para 99 535 pessoas, desde a inauguração em 1957.\n[…]\nUm curioso outro fator em comum é o fato de os dois também terem sido os últimos grandes times espanhóis a estamparem logotipos no abdômen das camisas — no Barcelona, a primeiramente o da Unicef (2006) e, no Athletic, o governo basco (2004).\n[…]\nTrês dos componentes do Dream Team do Barcelona também destacaram-se no clube basco: Andoni Zubizarreta, Ion Andoni Goikoetxea (que não é o mesmo Goikoetxea que fraturara Schuster e Maradona), Julio Salinas e Santiago Ezquerro. O último a ter vestido as duas camisas como jogador foi Iñigo Martínez. Já o nome em comum mais recente é o do técnico Ernesto Valverde, que também trabalhou em ambos como jogador.\n[…]\nPorém, em 1960 o Barça emitiu um comunicado no jornal La Vanguardia, para que os torcedores receberam a Franco na visita à Barcelona; coisa que nunca fez o RCD Espanyol.\n[…]\nMais de 1 000 jogadores vestiram a camisa azul e grená durante os 120 anos de história do time Barcelonista.Os jogadores de origem estrangeira, (não excluindo os jogadores espanhóis) sempre tiveram grande peso na história do clube e marcaram algumas das mais brilhantes eras do time catalão. Fundado por um grupo de estrangeiros estabelecidos em Barcelona, a equipe foi composta inicial e principalmente por jogadores de origem inglesa, suíça e alemã.\n[…]\nO Barcelona teve, desde então, vários jogadores estrangeiros de excepcional destaque, dos quais cinco chegaram a ganhar o prêmio individual mais cobiçado do futebol mundial, o FIFA World Player.\n[…]\nBarcelona C\n[…]\nBarcelona Basquete B",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Camisa canarinho",
      "descricao": "Uniforme amarelo da seleção brasileira de futebol, adotado a partir de 1954 no lugar da camisa branca."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na camisa amarela da seleção brasileira, o que representa cada estrela bordada acima do escudo?",
    "resposta": "Um título de Copa do Mundo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil_national_football_team"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_national_football_team",
        "situacao": "ok",
        "texto": "The Brazil national football team (Portuguese: Seleção Brasileira de Futebol), nicknamed Canarinho, represents Brazil in men's international football and is administered by the Brazilian Football Confederation, the governing body of football in Brazil. It has been a member of FIFA since 1923 and was a founding member of CONMEBOL in 1916. It was also a member of PFC, the unified confederation of th\n[…]\nBrazil then ended at third place at the 1979 Copa América, also without a single host country.\n[…]\nThe hosts reached the final once again, this time being defeated by Argentina 1–0 in the Maracanã Stadium; this was the first time Brazil failed to win the Copa América on home soil.\n[…]\nThe CBF then appointed Dorival Júnior as manager. At the 2024 Copa América held in the United States, Brazil tied 0–0 with Costa Rica, thrashed Paraguay 4–1 and tied 1–1 with Colombia. Brazil was eliminated on penalties by Uruguay in the quarter-finals following a 0–0 draw. Dorival was fired after losing 4–1 to Argentina at the Monumental de Nuñez, and in his place the federation appointed Italian manager Carlo Ancelotti as a replacement.\n[…]\nThe new colors were first used in March 1954 in a match against Chile, and have been used ever since. Topper were the manufacturers of Brazil's kit up to and including the match against Wales on 11 September 1991; Umbro took over before the next match, versus Yugoslavia in October 1991. Nike began making the kits for Brazil in late 1996, in time for the 1997 Copa América and the 1998 FIFA World Cup.\n[…]\nSouth American Championship / Copa América\n[…]\nCopa Rodrigues Alves (2): 1922, 1923\n[…]\nCopa Confraternidad (1): 1923\n[…]\nCopa Río Branco (7): 1931, 1932, 1947, 1950, 1967s, 1968, 1976\n[…]\nCopa Bernardo O'Higgins (4): 1955, 1959, 1961, 1966s\n[…]\nCopa Emílio Garrastazú Médici (1): 1970\n[…]\nCopa Teixeira (1): 1990s\n[…]\nCopa 50imo Aniversario de Clarín (1): 1995\n[…]\nCopa America Fair Play Award (2): 2019, 2021"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Brasileira_de_Futebol",
        "situacao": "ok",
        "texto": "Seleção Brasileira de Futebol, apelidada de Seleção Canarinho (em homenagem à camisa amarela), representa o Brasil no futebol internacional masculino e é administrada pela Confederação Brasileira de Futebol, a entidade máxima do futebol no Brasil. É membro da FIFA desde 1923 e membro fundador da CONMEBOL desde 1916. Também foi membro da Confederação Panamericana de Futebol (CPF) de 1946 a 1961.\n[…]\nA equipe jogou ainda naquele ano em dois jogos contra a Seleção Argentina, sendo um amistoso em 20 de setembro e outro oficialmente, valendo a Copa Roca em 27 de setembro, competição que visava a aproximar mais estes dois países. O Brasil venceu por 1 a 0 em Buenos Aires (gol de Rubens Salles), consagrando-se campeão do torneio, sendo esse o primeiro de vários títulos conquistados pela seleção Canarinho.\n[…]\nPara a Copa do Mundo FIFA de 1954, na Suíça, a equipe brasileira estava completamente renovada, para que a derrota do Maracanã pudesse ser esquecida, mas ainda tinha um bom grupo de jogadores, incluindo Nílton Santos, Djalma Santos, Julinho e Didi. Pela primeira vez usou o uniforme com a camisa amarela e o calção azul.\n[…]\nDepois da conquista em 1970, a seleção chegou a passar 24 anos sem conquistar uma Copa do Mundo e 19 anos sem conquistar um título. Em 1971, um ano após a conquista do Tricampeonato mundial, Pelé se aposentou da seleção brasileira em um amistoso contra a Iugoslávia, no Maracanã, que terminou empatado em 2 a 2.\n[…]\nO Grupo Globo detém a exclusividade dos jogos da seleção brasileira em amistosos e eliminatórias, transmitindo as partidas via TV Globo (na TV aberta), SporTV (na TV fechada) e, mais recentemente, a GETV (na TV fechada, no Streaming e no YouTube). Entretanto, nos torneios disputados, como Copa América e Copa do Mundo, essa exclusividade varia conforme as emissoras que transmitirão o campeonato.\n[…]\nCopa Sendai (Sub-19): 6 (2003, 2005, 2006, 2008, 2009 e 2010)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Garrincha",
      "descricao": "Manuel Francisco dos Santos, ponta-direita do Botafogo e da seleção brasileira, bicampeão mundial em 1958 e 1962."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Garrincha driblava como poucos, apesar de uma característica física que muitos médicos viam como defeito. Qual era?",
    "resposta": "Pernas tortas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Garrincha",
      "https://en.wikipedia.org/wiki/Garrincha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Garrincha",
        "situacao": "ok",
        "texto": "Manoel dos Santos (Magé, 28 de outubro de 1933 – Rio de Janeiro, 20 de janeiro de 1983), mais conhecido como Mané Garrincha (ou simplesmente Garrincha), foi um futebolista brasileiro que atuou como ponta-direita. Notabilizado pela grande habilidade e por seus dribles desconcertantes, é considerado por muitos como o mais célebre ponta-direita e o melhor driblador da história do futebol.\n[…]\nApesar de ter sido acometido por vários defeitos congênitos (tinha estrabismo, um desequilíbrio da pelve, seis centímetros de diferença de comprimento entre as pernas; o joelho direito tinha valgismo e o esquerdo varismo), Garrincha, o \"Anjo de Pernas Tortas\", foi um dos principais jogadores das conquistas da Copa do Mundo de 1958 e, principalmente, da Copa do Mundo de 1962 quando, após a contusão de Pelé, tornou-se o principal jogador do time brasileiro.\n[…]\nUma das características marcantes que envolvem a figura de Garrincha relaciona-se a uma distrofia física: as pernas tortas. Sua perna direita, seis centímetros mais curta que a esquerda, era flexionada para o lado esquerdo, e a perna esquerda apresentava o mesmo desenho. Ambas as pernas eram, pois, tortas para o seu lado esquerdo. Garrincha era destro.\n[…]\nO curioso é que Pelé também foi reprovado neste teste, e reza a lenda que Pelé chegou ao Doutor Carvalhaes e afirmou “você pode até estar certo, mas não entende nada de futebol”. Há relatos que dão conta também que antes dos testes serem realizados, o lateral Nílton Santos disse ao psicólogo: \"Olha, doutor, vem aí um sujeito de pernas tortas que não vai saber fazer nada disso. Mas tenha paciência com ele, doutor, pois ele joga demais\".\n[…]\nMané Garrincha (documentário de 1978) – documentário curta-metragem de Fábio Barreto\n[…]\nElza e Mané: Amor em linhas tortas (2022) – documentário do Globoplay\n[…]\n↑  O Anjo de Pernas Tortas é o título de uma poesia de Vinícius de Moraes."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Garrincha",
        "situacao": "ok",
        "texto": "Manuel Francisco dos Santos (28 October 1933 – 20 January 1983), nicknamed Mané Garrincha, best known as simply Garrincha (Portuguese pronunciation: [ɡaˈʁĩʃɐ], \"wren\"), was a Brazilian professional footballer who played as a right winger. He is widely regarded as one of the greatest players of all time, and by many, one of the greatest dribblers ever.\n[…]\nIn 1994, he was named in the FIFA World Cup All-Time Team. Brazil never lost a match while fielding both Garrincha and Pelé. In 1999, he came seventh in the FIFA Player of the Century grand jury vote. He is a member of the World Team of the 20th Century, and was inducted into the Brazilian Football Hall of Fame. Due to his immense popularity in Brazil, he was also called Alegria do Povo (People's Joy) and Anjo de Pernas Tortas (Bent-Legged Angel).\n[…]\nHis father was an alcoholic, drinking cachaça heavily, a problem which Garrincha would inherit. A boy with a carefree attitude, he was smaller than other kids his age, earning him the nickname Garrincha (meaning \"wren\") from his sister. The name stuck and by the age of four years he was known as Garrincha to his family and friends. Garrincha was also known as Mané (short for Manuel) by his friends. The combined Mané Garrincha is common among fans in Brazil.\n[…]\nHis epitaph reads: \"Here rests in peace the one who was the Joy of the People – Mané Garrincha.\" People had painted on the wall: Obrigado, Garrincha, por você ter vivido (Thank you, Garrincha, for having lived).\n[…]\nThe Estádio Nacional Mané Garrincha, inaugurated in 1974 and originally named \"Estádio Governador Hélio Prates da Silveira\", was renamed in honor of Garrincha shortly after his death.\n[…]\nThe Cachaça Supernova – In Defense of Football's Prophet of Absurdism, Mané Garrincha - Football Paradise\n[…]\nGarrincha – FIFA competition record (archived)"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Gol de ouro",
      "descricao": "Regra de morte súbita na prorrogação, usada no futebol nos anos 1990 e 2000, em que o primeiro gol encerrava a partida."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Pela regra do gol de ouro, usada nas Copas de 1998 e 2002, o que acontecia quando um time marcava na prorrogação?",
    "resposta": "O jogo terminava na hora",
    "fonte": [
      "https://en.wikipedia.org/wiki/Golden_goal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Golden_goal",
        "situacao": "ok",
        "texto": "The golden goal is a tie-breaking method used in association football, Australian rules football, bandy, field hockey, ice hockey, lacrosse, and rugby league to decide the winner of a match (typically a knock-out match) in which scores are tied at the end of regular time. It is a type of sudden death. Under this rule, the game ends when a goal is scored; the team that scores that goal during extra\n[…]\nIf there have been no goals scored after both periods of extra time, a penalty shoot-out decides the game. The golden goal was not compulsory, and individual competitions using extra time could choose whether to apply it during extra time. The first European Championship played with the rule was in 1996, as was the first MLS Cup that year; the first World Cup played with the rule was in 1998.\n[…]\nIn MLS Cup 1996, Eddie Pope scored 3:25 into extra time as D.C. United beat the LA Galaxy 3–2. The first golden goal in World Cup history took place in 1998, as Laurent Blanc scored to enable France to defeat Paraguay in the round of 16.\n[…]\nThe golden goal was used in the FIFA World Cup for the last time in 2002, when Turkey defeated Senegal in the quarter-finals when İlhan Mansız scored what would be the final golden goal in male tournaments. However, the 2003 Women's World Cup final was decided by a golden goal as Germany defeated Sweden 2–1 with a header by Nia Künzer in the 98th minute. It was the last golden goal in FIFA Women's World Cup history.\n[…]\nFor the 2002–03 season, UEFA introduced a new rule, the silver goal, to decide a competitive match. If a team leads after the first fifteen-minute half of extra time, it is the winner, but the game no longer ends the instant a team scores like it did under golden goal. Competitions that operated extra time would be able to decide whether to use the golden goal, the silver goal, or neither procedure.\n[…]\nGolden goal explained – UEFA.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Morte_s%C3%BAbita_%28futebol%29",
        "situacao": "ok",
        "texto": "Morte súbita, gol de ouro (português brasileiro) ou golo de ouro (português europeu) (em inglês golden goal) é um método utilizado no futebol para decidir o vencedor de partidas eliminatórias que terminam em empate. Consiste em adicionar dois tempos extras de 15 minutos cada após o término do tempo regulamentar de 90 minutos, e dar a vitória à primeira equipe que marcar um gol durante este período\n[…]\nO termo golden goal foi introduzido pela FIFA, em 1993, juntamente com a mudança de regra, porque o termo alternativo \"morte súbita\" tinha conotações negativas. O gol de ouro não era obrigatório, e as competições individuais usando o tempo extra poderiam escolher se aplicariam a regra do gol de ouro durante o tempo extra.\n[…]\nÉ acrescentado aos 90 minutos regulares duas metades de quinze minutos de tempo extra. Se alguma equipe marcar um gol durante o tempo extra, a equipe torna-se vencedora e o jogo termina imediatamente. Se não houver gols após dois períodos de tempo extra, a disputa de pênaltis decidirá o resultado do jogo. Ao final das cinco cobranças, caso a igualdade persista, é escolhido um jogador de cada equipe para bater de forma alternada.\n[…]\nApesar da regra ter sido introduzida para estimular o jogo ofensivo e reduzir o número de decisões por pênalti, as equipes passaram a jogar mais defensivamente para se proteger contra a eliminação. As equipes geralmente colocavam mais ênfase em não sofrer gols, e muitos períodos com o tempo extra permaneceram sem gols.\n[…]\nA Copa do Mundo de 2006 na Alemanha não empregou o gol de ouro no caso de um jogo empatado durante a fase eliminatória, mas reverteu para a regulamentação anterior: no caso de um jogo empatado durante os 90 minutos regulares, duas metades de 15 minutos de tempo extra seriam jogados. Então, se um empate persistir após os 30 minutos do tempo extra, o vencedor será decidido por disputa de pênaltis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Estádio Hernando Siles",
      "descricao": "Estádio nacional da Bolívia, em La Paz, situado a cerca de três mil e seiscentos metros de altitude."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O Estádio Hernando Siles, em La Paz, onde joga a seleção boliviana, castiga os visitantes por qual característica?",
    "resposta": "A altitude elevada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Estadio_Hernando_Siles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Estadio_Hernando_Siles",
        "situacao": "ok",
        "texto": "Hernando Siles Stadium (Spanish: Estadio Hernando Siles, [esˈtaðjo eɾˈnando ˈsiles]), also known as Estadio Olímpico La Paz, is a multi-purpose stadium in La Paz, Bolivia. It is the country's largest stadium, with a capacity of 41,143 seats. It is named after Hernando Siles Reyes (1882–1942), the 31st President of Bolivia (1926–1930). Its biggest attendance was in 03/03/1989 during the match betwe\n[…]\nEstadio Hernando Siles has been the site of significant moments in Bolivian football history, including Bolivia's 2–0 defeat of Brazil, which was Brazil's first defeat in 40 years of playing the qualifiers, and 7–0 defeat of Venezuela, both in the 1994 World Cup qualifiers; these results eventually helped Bolivia to historically qualify for the 1994 World Cup in USA. The stadium also hosted Bolivia's games in the 1997 Copa América, including the final, where Bolivia lost to Brazil.\n[…]\nUntil May 2007, FIFA, football's international governing body, accepted the stadium as a World Cup Qualifying venue, despite protests from visiting teams that the altitude gave Bolivia an unfair advantage against opponents who had only a few days to acclimatise before playing. On 27 May 2007, FIFA declared that no World Cup Qualifying matches could be played in stadiums above 2,500 meters (8,200 ft) above sea level.\n[…]\nSome, including Bolivian President Evo Morales and Diego Maradona, reacted by claiming the new measure discriminated primarily against high-altitude nations in Latin America, especially those in the Andes. The \"Hernando Siles\" became a symbol of the Bolivian struggle against FIFA's ban on games at high altitude. After a month of campaigning against the ban, FIFA raised the altitude limit from 2500 meters to 3000 meters on 27 June 2007.\n[…]\nList of football stadiums in Bolivia\n[…]\nMedia related to Estadio Hernando Siles at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1dio_Hernando_Siles",
        "situacao": "ok",
        "texto": "O Estádio Hernando Siles (em castelhano: Estadio Hernando Siles) é um estádio multiuso localizado na cidade de La Paz, capital da Bolívia. Oficialmente inaugurado em 16 de janeiro de 1930, é o maior estádio do país em capacidade de público e a principal casa onde a Seleção Boliviana de Futebol manda suas partidas amistosas e oficiais válidas por competições continentais.\n[…]\nEste comitê descobriu a existência de um terreno de 40 000 m² localizado no bairro de Miraflores e solicitou à presidência da República, à época governada por Hernando Siles Reyes, a concessão do referido terreno para a construção do estádio.\n[…]\nEm 16 de janeiro de 1930, o estádio foi oficialmente inaugurado, adquirindo sua atual denominação como forma de render homenagem ao presidente boliviano que viabilizou politicamente a construção da maior praça esportiva da Bolívia.\n[…]\nPara estar em condições de sediar os Jogos do Cruzeiro do Sul de 1978, o estádio foi fechado em 2 de janeiro de 1975 para reformas, levadas a cabo pela construtora boliviana López Videla. Tais reformas dobraram a capacidade de público do estádio graças à construção de dois novos aneis de arquibancadas, além de melhorias na iluminação do estádio através da instalação de novos refletores de luz. As arquibancadas inferiores e a entrada principal do estádio permaneceram os mesmos do estádio original.\n[…]\nLocalizado a 3 598 metros acima do nível do mar, figura na 7.ª colocação entre os estádios de futebol de maior altitude do mundo.\n[…]\nO estádio já foi sede de torneios importantes como o Campeonato Sul-Americano de Futebol de 1963 e a Copa América de 1997, além de ter protagonizado grandes feitos da história do futebol sul-americano, como a primeira derrota do Brasil em torneios eliminatórios para a Copa do Mundo, sendo derrotado pela Bolívia pelo placar de 2–0 em partida válida pelas Eliminatórias da Copa do Mundo de 1994.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Jabulani",
      "descricao": "Bola oficial da Copa do Mundo de 2010, na África do Sul, fabricada pela Adidas."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "A Jabulani, bola da Copa de 2010, foi muito criticada por goleiros por causa de qual característica?",
    "resposta": "Trajetória imprevisível",
    "distratores": [
      "Peso excessivo",
      "Cor difícil de enxergar",
      "Quique muito baixo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Adidas_Jabulani"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Adidas_Jabulani",
        "situacao": "ok",
        "texto": "The Jabulani ( JAB-yuu-LAH-nee, Zulu: [dʒaɓuˈlaːni]) was a football manufactured by Adidas. It was the official match ball for the 2010 FIFA World Cup.\n[…]\nIn July 2010, former Liverpool footballer Craig Johnston wrote a 12-page open letter to FIFA president Sepp Blatter outlining perceived failings of the Jabulani ball. He compiled feedback from professional players criticizing the ball for poor performance and asked that it be abandoned by FIFA.\n[…]\nAdidas has said that the ball had been used since January 2010, and that most feedback from players had been positive. A spokesperson said the company was \"surprised\" by the negative reaction to the ball, and highlighted that the frequent pre-tournament criticism a new ball receives inevitably dies down as the tournament proceeds.\n[…]\nOn 27 June 2010, FIFA acknowledged concerns about the ball, but also said that they would not act on the problem until after the tournament. According to secretary general Jérôme Valcke, FIFA will discuss the matter with coaches and teams after the World Cup, then meet with the manufacturer Adidas.\n[…]\nNASA scientists at the Fluid Mechanics Laboratory at NASA's Ames Research Center, Moffett Field, California tested the performance of the Jabulani design against the earlier 2006 design which had also received criticism of its behaviour in flight. In discussing the mechanics of the balls Rabi Mehta, an aerospace engineer at NASA Ames, described the unpredictable behaviour as \"a knuckle-ball effect\".\n[…]\nAdidas Tango 12\n[…]\n2010 FIFA World Cup\n[…]\nMoriarty, Philip; Clewett, James (2010). \"The Jabulani Football\". Sixty Symbols. Brady Haran for the University of Nottingham."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Adidas_Jabulani",
        "situacao": "ok",
        "texto": "Jabulani é a bola de futebol que foi utilizada na Copa do Mundo FIFA de 2010, realizada na África do Sul. Foi produzida pela Adidas e apresentada em 4 de dezembro de 2009, no sorteio dos grupos do torneio.\n[…]\nJabulani é uma palavra da língua Bantu isiZulu, um dos 11 idiomas oficiais da África do Sul. A bola da Copa 2010 tem apenas oito gomos em formato 3D. Seu design possui traços africanos, misturados numa diversificação de 11 cores - o branco predomina.\n[…]\nA bola foi usada no Mundial de Clubes da FIFA de 2009, realizado nos Emirados Árabes Unidos. Uma versão especial da bola, chamada Adidas Jabulani Angola, foi a bola oficial da Copa das Nações Africanas de 2010, esta versão tem uma coloração diferente, e representa as cores de Angola, sede do torneio. A bola também foi usada em diversos campeonatos europeus, dentre eles a Bundesliga 2009-10.\n[…]\nApós a Copa, a bola ainda foi usada no jogo amistoso entre Palmeiras e Boca Juniors, no dia 9 de julho de 2010.\n[…]\nA bola foi muito criticada por jogadores da seleção brasileira. Júlio César, Felipe Melo, Luís Fabiano, Júlio Baptista e Robinho qualificaram a bola da Copa como \"muito ruim\". Júlio César chegou a classificá-la como \"bola de mercado\".\n[…]\nA Adidas, porém, rebateu as críticas alegando que a bola foi feita após muitos anos de estudo e aprimoramentos tecnológicos e descartou a criação de uma nova bola para o torneio.[carece de fontes]?\n[…]\nMuitos analistas também classificaram as críticas como sem fundamento, e desconfiam que estas podem ter surgido da rivalidade comercial entre empresas de material esportivo, já que muitos dos jogadores que criticaram a bola são patrocinados pela maior rival da Adidas, a estadunidense Nike.[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Athletic Bilbao",
      "descricao": "Athletic Club, clube de futebol de Bilbao, na Espanha, fundado em 1898."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O Athletic Bilbao, da Espanha, é famoso por uma política de só escalar jogadores ligados a qual região?",
    "resposta": "País Basco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Athletic_Bilbao"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Athletic_Bilbao",
        "situacao": "ok",
        "texto": "Athletic Club (Basque: Athletic Kluba; Spanish: Athletic Club), commonly known as Athletic Bilbao (Spanish: Athletic de Bilbao), or simply Athletic, is a professional football club based in the city of Bilbao, Spain. They are known as Lehoiak (The Lions) because their stadium was built near a church called San Mamés, which was named after Saint Mammes, an early Christian thrown to the lions by the\n[…]\nAthletic began playing in an improvised white kit, but in the 1902–03 season, the club's first official strip became half-blue, half-white shirts similar to those worn by Blackburn Rovers, which were donated by Juan Moser. The accepted version of the story behind the major shift in the playing kit involves a young student from Bilbao named Juan Elorduy, who was spending Christmas 1909 in London, was charged by the club to buy 25 new shirts, but was unable to find enough.\n[…]\nWaiting for the ship back to Bilbao and empty handed, Elorduy realised that the colours of the local team Southampton matched the colours of the City of Bilbao, and bought 50 shirts to take with him. Upon arriving in Bilbao, the club's directors decided almost immediately to change the team's strip to the new colours, and since 1910, Athletic Club have played in red and white stripes.\n[…]\nOf the 50 shirts bought by Elorduy, half were then sent to Atlético Madrid, where Elorduy was a committee member and a former player; it had originally begun as a youth branch of Athletic Bilbao. An investigation in 2023 proposed an alternative kit origin location as Sunderland, a city which had connections for several club officials of the period and where their club also wore the same colours. Before the switch, only one other team in Spain wore red and white: Sporting de Gijón, since 1905.\n[…]\nAthletic Club at La Liga (in English and Spanish)\n[…]\nAthletic Club at UEFA\n[…]\nMedia related to Athletic Club de Bilbao at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Athletic_Club",
        "situacao": "ok",
        "texto": "O Athletic Club, popularmente conhecido como Athletic Bilbao ou simplesmente Athletic, é um clube de futebol profissional espanhol da cidade de Bilbau, País Basco. Compete na La Liga, a primeira divisão do sistema de ligas da Espanha, competição na qual tem oito títulos de campeão. O clube também tem vinte e quatro títulos de campeão da Copa Del Rey, a segunda competição espanhola em importância. \n[…]\nEm 2017, o historiador Ángel Iturriaga publicou o Diccionario de jugadores del Athletic Club, a listar todos os futebolistas que defenderam a equipe até então, mesmo que apenas em amistosos. Bixente Lizarazu seria o único proveniente do País Basco francês.\n[…]\nSegundo o livro, foram 60 os jogadores listados como nascidos fora do País Basco (seja na parte francesa ou na parte espanhola), além de quantidade paralela superior de jogadores sem local de nascimento conhecido, embora a maioria em ambos os casos tenha ao menos ascendência basca.\n[…]\nDentro do País Basco, seu maior rival é a Real Sociedad, da cidade de San Sebastián. Este clube é menos radical: admite livremente desde 1989 jogadores de outros países e desde 2002 começou a aceitar espanhóis, ainda que em pequena medida. A rivalidade é amplamente favorecedora ao Athletic, que possui mais títulos de expressão e maior número de vitórias, assim como é um dos três times a jamais ter sido rebaixado à segunda divisão, ao lado de Real Madrid e Barcelona.\n[…]\nO clássico já foi palco de uma das primeiras manifestações livres de nacionalismo basco após o franquismo: em 1976, um ano após a morte do ditador Francisco Franco, José Ángel Iríbar, ex-goleiro a atual presidente honorário do Athletic, entrou em campo empunhando uma bandeira do País Basco (proibida havia 40 anos) juntamente com o jogador rival Inaxio Kortabarría. Semanas depois, a bandeira, ainda muito relacionada ao grupo terrorista ETA, pôde ser legalizada.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Liverpool Football Club",
      "descricao": "Clube de futebol de Liverpool, na Inglaterra, fundado em 1892, que joga no estádio de Anfield."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Que canção, nascida num musical da Broadway, virou o hino entoado pela torcida do Liverpool?",
    "resposta": "You'll Never Walk Alone",
    "fonte": [
      "https://en.wikipedia.org/wiki/You%27ll_Never_Walk_Alone",
      "https://en.wikipedia.org/wiki/Liverpool_F.C."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/You%27ll_Never_Walk_Alone",
        "situacao": "ok",
        "texto": "\"You'll Never Walk Alone\", also known by its initials YNWA, is a show tune from the 1945 Rodgers and Hammerstein musical Carousel. In the second act of the musical, Nettie Fowler, the cousin of the protagonist Julie Jordan, sings \"You'll Never Walk Alone\" to comfort and encourage Julie when her husband, Billy Bigelow, the male lead, stabs himself with a knife whilst trying to run away after attemp\n[…]\nThe song is also sung at association football clubs around the world, where it is performed by a massed chorus of supporters on match day; this tradition developed at Liverpool F.C. after the UK chart-topping success of the 1963 single of the song by the local Liverpool group Gerry and the Pacemakers. In 2016, over 50 years after \"You'll Never Walk Alone\" was first sung on the Kop at Anfield, the governing body of the sport FIFA called it \"one of the game's most beloved anthems\".\n[…]\nAfter becoming a chart hit, the song gained popularity among Liverpool F.C. fans, and quickly became the football anthem of the club, which adopted \"You'll Never Walk Alone\" as its official motto on its coat of arms. The song is sung by its supporters before the start of each home game at Anfield with the Gerry and the Pacemakers version being played over the public address system.\n[…]\nIn 2016, the governing body of the sport FIFA stated, \"With scarves raised, banners aloft and flags flying, the Kop at Anfield has long held a standard for producing some of football's great sights and sounds. This is particularly so when Liverpool supporters stand and sing one of the game's most beloved anthems, 'You’ll Never Walk Alone'.\"\n[…]\nThere's not one club in Europe with an anthem like \"You'll Never Walk Alone.\" There's not one club in the world so united with the fans. I sat there watching the Liverpool fans and they sent shivers down my spine. A mass of 40,000 people became one force behind their team."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Liverpool_F.C.",
        "situacao": "ok",
        "texto": "Liverpool Football Club is a professional football club based in Liverpool, Merseyside, England. The club competes in the Premier League, the top tier of English football. Founded in 1892, the club joined the Football League the following year and has played its home games at Anfield since its formation. Liverpool is one of the most valuable and widely supported clubs in the world.\n[…]\nAlready nicknamed the Reds, it was under Shankly that the team first adopted the distinctive all-red home strip which has been used ever since. Also adopted under Shankly's tenure was the club's anthem \"You'll Never Walk Alone\". The Reds compete in the local Merseyside derby against Everton, often referred as the Blues. As the two most decorated clubs in England, and inter-city rivals, Liverpool also has a long-standing rivalry with Manchester United.\n[…]\nThe song \"You'll Never Walk Alone\", originally from the Rodgers and Hammerstein musical Carousel and later recorded by Liverpool musicians Gerry and the Pacemakers, is the club's anthem and has been sung by the Anfield crowd since the early 1960s.\n[…]\nSimon Hart of The Independent wrote: \"The pre-match, scarfs-raised, sing-it-loud ritual is as much a part of Liverpool's fabric as their red shirts.\" The song's title adorns the top of the Shankly Gates, which were unveiled on 2 August 1982 in memory of former manager Bill Shankly. The \"You'll Never Walk Alone\" portion of the Shankly Gates is also reproduced on the club's badge.\n[…]\nLiverpool fans featured in the Pink Floyd song \"Fearless\", in which they sang excerpts from \"You'll Never Walk Alone\". To mark the club's appearance in the 1988 FA Cup final, Liverpool released the \"Anfield Rap\", a song featuring John Barnes and other members of the squad.\n[…]\nKelly, Stephen F. (1988). You'll Never Walk Alone. Queen Anne Press. ISBN 0-356-19594-5.\n[…]\nLiverpool FC at Premier League\n[…]\nLiverpool FC at UEFA"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/You%27ll_Never_Walk_Alone",
        "situacao": "ok",
        "texto": "\"You'll Never Walk Alone\" é uma canção composta por Richard Rodgers e Oscar Hammerstein II para seu musical de 1945, Carousel. Foi cantada na apresentação original por Christine Johnson e depois Jan Clayton com coral. É cantada na versão cinematográfica por Claramae Turner (Shirley Jones tenta cantá-la primeiramente, mas não consegue) e depois é reprisada por Jones e um coral.\n[…]\nRapidamente a música se tornou um hino para o Liverpool Football Club e é invariavelmente cantada por seus torcedores antes do início e ao final de cada jogo pelo motivo de que os jogadores do Liverpool cantaram a música em 1963 no The Ed Sullivan Show e em outubro de 1963 estreou no top 10, então ia tocar em Anfield. As palavras You'll Never Walk Alone estão no escudo do clube e nos portões de entrada (Shankly Gates) do estádio Anfield.\n[…]\nA canção \"Fearless\", do Pink Floyd, do álbum de 1971 Meddle, inclui uma gravação da torcida organizada do Liverpool cantando \"You'll Never Walk Alone\" no fim da faixa.\n[…]\nApós testemunhar uma estrondosa interpretação de \"You'll Never Walk Alone\" em Anfield em 2007, o Presidente do Comitê Olímpico Espanhol, Alejandro Branco, se sentiu inspirado a procurar letras para seu hino nacional (o hino nacional espanhol não possui letra oficial), visando a candidatura de Madrid para sede dos Jogos Olímpicos de 2016.\n[…]\nTambém é tocada pela banda da Western Illinois University ao final de cada apresentação. A banda se entreolha formando um grande círculo com um quarteto ao centro. Os membros cantam e tocam \"Never Walk\" como um símbolo da força da união entre os membros. Essa tradição foi iniciada pelo já falecido Dale Hopper durante os anos 1970. A University of North Texas também segue a mesma prática. A banda da Mansfield University of Pennsylvania também segue o mesmo procedimento.\n[…]\nPink Floyd, como parte da canção Fearless",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Final da Copa do Mundo de 1958",
      "descricao": "Partida final da Copa do Mundo FIFA de 1958, em Solna, em que o Brasil venceu a Suécia por 5 a 2."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Na final da Copa de 1958, contra a anfitriã Suécia, de que cor era a camisa usada pelo Brasil?",
    "resposta": "Azul",
    "distratores": [
      "Amarela",
      "Branca",
      "Verde"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1958_FIFA_World_Cup_final"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1958_FIFA_World_Cup_final",
        "situacao": "ok",
        "texto": "The 1958 FIFA World Cup final took place in Råsunda Stadium, Solna (near Stockholm), Sweden, on 29 June 1958 to determine the champion of the 1958 FIFA World Cup. Brazil won the World Cup by defeating Sweden, and thus won their first World Cup title. Despite losing, the game remains Sweden’s best ever World Cup finish.\n[…]\nThe 1958 final holds the record for most goals scored in a World Cup Final, and it shares the record for the greatest winning margin (with the 1970 and 1998 tournaments). The records for both the youngest and oldest goalscorer in a World Cup final were set in this match by Pelé (17 years and 249 days) and Nils Liedholm (35 years, 263 days) respectively. The final also marked several firsts: It was the first final to be disputed between a European team and a team from the Americas.\n[…]\nThe last survivor on Brazil's side was Mário Zagallo, who died on 5 January 2024 at the age of 92. Nearly a month later, the last survivor of the game, Sweden's Kurt Hamrin, died on 4 February 2024 at the age of 89.\n[…]\nSweden took the lead after only 4 minutes after an excellent finish by captain Nils Liedholm. The lead did not last long, as Vavá equalised just 5 minutes later. On 32 minutes, Vavá scored a similar goal to his first to give Brazil a lead 2–1 at the break. 10 minutes into the second half, Brazil went further in front thanks to a brilliant goal scored by Pelé. He took control of the ball inside the penalty area, chipped the ball over the defender then smashed it past a helpless Kalle Svensson.\n[…]\nHalfway through the second half Brazil went 4–1 up with a goal scored by Mário Zagallo. Simonsson pulled one back for Sweden with 10 minutes remaining but it was far too late. Pelé sealed the 5–2 victory for Brazil with a headed goal in stoppage time.\n[…]\n1958 FIFA World Cup on FIFA.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Final_da_Copa_do_Mundo_FIFA_de_1958",
        "situacao": "ok",
        "texto": "A Final da Copa do Mundo FIFA de 1958 foi disputada em 29 de junho no Estádio Råsunda, na cidade de Solna na Suécia, entre a Seleção Sueca e a Seleção Brasileira. Foi a primeira vez que uma final de Copa do Mundo pôs frente a frente uma equipe europeia contra uma equipe sul-americana. Foi ainda a primeira vez que ambas as equipes chegaram a uma final de Copa do Mundo.\n[…]\nAo final dos 90 minutos, o Brasil derrotou a equipe anfitriã por 5–2, e se tornou pela primeira vez campeão do mundo de futebol. Desta forma, essa foi a primeira vez — e por enquanto única — que a equipe anfitriã foi derrotada numa Final de Copa do Mundo (já que em 1950 não houve uma final propriamente dita, e sim uma rodada final de um quadrangular), e também a única vez que uma equipe europeia não conquistou uma Copa do Mundo disputada na Europa.\n[…]\nAs Seleções do Brasil e da Suécia se enfrentaram em dois jogos oficiais das equipes nacionais adultas antes de jogarem a final da Copa do Mundo de 1958. Curiosamente, os dois compromissos anteriores entre as duas equipes eram válidos pela Copa do Mundo. A de 1938, na França, decidiu o terceiro lugar na Copa do Mundo, enquanto a de 1950 fazia parte do local final com o qual o campeão foi definido.\n[…]\nO sorteio definiu que a Suécia jogaria com o primeiro uniforme. Restava aos brasileiros definirem que cor de uniforme usariam naquele dia 28 de junho: branco, verde ou azul. O branco foi reprovado por maioria absoluta por ter sido a cor da camiseta símbolo do Maracanaço. O azul foi aprovado por todos por ser a cor do manto de Nossa Senhora Aparecida, a padroeira do Brasil.\n[…]\nA Suécia chegou a diminuir com Agne Simonsson, aos 35, mas Pelé, aos 45 do segundo tempo, deu números finais a partida: goleada brasileira por 5–2.\n[…]\nCopa do Mundo FIFA de 1958",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "José Luis Chilavert",
      "descricao": "Ex-jogador paraguaio dos anos 1990 e 2000, ídolo do Vélez Sarsfield, famoso por cobrar faltas e pênaltis."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O paraguaio José Luis Chilavert marcou dezenas de gols cobrando faltas e pênaltis, embora jogasse em qual posição?",
    "resposta": "Goleiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jos%C3%A9_Luis_Chilavert"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jos%C3%A9_Luis_Chilavert",
        "situacao": "ok",
        "texto": "José Luis Félix Chilavert González (Spanish pronunciation: [xoseˈlwis tʃilaˈβeɾt ɣonˈsales]; born 27 July 1965) is a Paraguayan former professional footballer who played as a goalkeeper for Sportivo Luqueño, Guaraní, San Lorenzo de Almagro, Real Zaragoza, Vélez Sarsfield, RC Strasbourg, Peñarol and the Paraguay national team.\n[…]\nIn total, Chilavert earned 74 international caps for Paraguay between 1989 and 2003, and achieved a goalkeeper record of eight international goals. He retired from international football in 2003.\n[…]\nDuring his career, Chilavert was touted as Paraguay's future president. Chilavert was labelled \"a revolutionary the kind of which South America has not seen since the days of Che Guevara.\"\n[…]\nChilavert refused to participate at the 1999 Copa América on home soil, complaining about the incompetence of the local directors. Despite being officially honoured by the government, he said that his country should invest money in education rather than football. Chilavert also routinely dismissed his country's politicians as corrupt, incompetent and responsible for keeping many Paraguayans in poverty.\n[…]\nIn 2009, Chilavert, along with Claudio Escauriza, Tomás Orué and lawyer Alejandro Rubin, attended a Press Conference at Asunción Shopping Centre Shopping del Sol, in support of Edgar Baumann, who had received a favourable ruling from the Paraguay Supreme Court in a case against the Paraguay Olympic Committee president Ramón Zubizarreta for robbing him the right of competing at the 2000 Summer Olympics and also taking his sums of money that he earned from his scholarship.\n[…]\nScores and results list Paraguay's goal tally first, score column indicates score after each Chilavert goal.\n[…]\nJosé Luis Chilavert – FIFA competition record (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jos%C3%A9_Luis_Chilavert",
        "situacao": "ok",
        "texto": "José Luis Félix Chilavert González (Luque, 27 de julho de 1965) é um ex-futebolista paraguaio que atuava como goleiro. Marcou época por suas defesas, a segurança que transmitia no gol e sua liderança sobre os companheiros, mas também por sua habilidade nas cobranças de falta e pênalti. Despediu-se dos gramados como o maior goleiro artilheiro da história, sendo posteriormente superado por Rogério C\n[…]\nEm 1997, quando foi considerado outra vez o melhor goleiro do mundo, levantou a Recopa Sul-Americana. Em 1998, ganhou novo Clausura, e seria outra vez eleito o melhor do planeta em sua posição.\n[…]\nE Chilavert seria um dos maiores destaques da digna campanha paraguaia na França: levando em consideração defesas, pênaltis defendidos, cruzamentos cortados e gols tomados, foi o goleiro mais eficiente da Copa.\n[…]\nCom a mesma base de sucesso de 1998 — ele, Francisco Arce, Celso Ayala, Carlos Gamarra, José Cardozo —, o Paraguai classificou-se pela segunda vez seguida (algo inédito) para uma Copa. Se Chilavert encantara na França, o mesmo não se deu na Ásia. Na Copa do Mundo de 2002, foi uma das maiores decepções do torneio. Após não jogar a primeira partida, contra a África do Sul — cumpria suspensão por ter cuspido em Roberto Carlos nas Eliminatórias —, o goleiro voltou para o restante da campanha.\n[…]\nO Paraguai conseguiu classificar-se novamente às oitavas, mas sem muita ajuda de sua maior estrela; Chilavert, visivelmente acima do peso, fez duas partidas desastrosas na primeira fase: contra a Espanha, saiu muito mal ao tentar interceptar cruzamento que resultaria no segundo gol adversário, que ali virava o placar; e, contra a Eslovênia, no único gol esloveno, o goleiro praticamente empurrou a bola na rede por baixo de seus pés, quando procurava cortar desprentensioso cruzamento de Milenko Ačimovič.\n[…]\nLista de goleiros artilheiros\n[…]\nMedia relacionados com José Luis Chilavert no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Final da Copa do Mundo de 2002",
      "descricao": "Partida final da Copa do Mundo FIFA de 2002, em Yokohama, em que o Brasil venceu a Alemanha por 2 a 0."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que a final da Copa de 2002, no Japão, e a semifinal da Copa de 2014, em Belo Horizonte, têm em comum?",
    "resposta": "O duelo Brasil contra Alemanha",
    "fonte": [
      "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup_final",
      "https://en.wikipedia.org/wiki/Brazil_v_Germany_(2014_FIFA_World_Cup)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup_final",
        "situacao": "ok",
        "texto": "The final match of the 2002 World Cup, the 17th edition of FIFA's competition for national football teams, was played at the International Stadium in Yokohama, Japan, on 30 June 2002, and was contested by Germany and Brazil.\n[…]\nBrazil had reached the final of the 1998 tournament, where they lost 3–0 to France. Between that defeat and 2002, Brazil went through a series of managers. The first was Vanderlei Luxemburgo, whose contract was terminated after the team lost another FIFA final at the Confederations Cup against another host of the tournament at the time Mexico in the final and were eliminated at the quarter-finals of the 2000 Olympic football tournament.\n[…]\nThe two teams had met previously in several friendlies as well as the 1980 World Champions' Gold Cup, the 1993 U.S. Cup and the 1999 FIFA Confederations Cup – their most recent meeting, which resulted in a 4–0 Brazil win – but the 2002 final was their first meeting at a World Cup.\n[…]\nGermany had another chance in the 83rd minute when Oliver Bierhoff, who had come on as a substitute, hit a first-time shot towards goal from the penalty spot, but Marcos was able to save the shot. Christian Ziege had a final shot for Germany in the third minute of stoppage time, but it was saved by Marcos and the game finished 2–0 to Brazil.\n[…]\nIn a game described by Simon Burnton of The Guardian as being \"of a savagery unwitnessed against significant opposition in the tournament's history\", Germany won the game 7–1. They went on to win the 2014 World Cup, their sole tournament victory since the 2002 final while for Brazil, 2002 remains their most recent World Cup title as of 2026."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_v_Germany_(2014_FIFA_World_Cup)",
        "situacao": "ok",
        "texto": "The Brazil versus Germany football match (also known by its score as 7–1, or Mineiraço in Brazil) was the first of two semi-final matches of the 2014 FIFA World Cup that took place on 8 July 2014 at the Mineirão stadium in Belo Horizonte, Brazil.\n[…]\nThe two teams had met in 21 previous matches, but their only previous encounter in the single-elimination round of the World Cup was the final of the 2002 FIFA World Cup that was a 2–0 victory for Brazil, which was Luiz Felipe Scolari's first tenure as manager of Brazil while Miroslav Klose was in Germany's starting lineup (being the only two remaining from that match).\n[…]\nIn Germany, the match's coverage by ZDF set a record for the country's most watched TV broadcast, with 32.57 million viewers (87.8% of all viewers), beating the Germany–Spain match at the 2010 World Cup. This record was beaten five days later with the final. In contrast, despite a weekly spike in audience, the broadcast by Brazilian TV Globo saw the viewers total fall with each German goal.\n[…]\nAs a result of being eliminated in the semi-finals, Brazil played in the match for third place at the Estádio Nacional Mané Garrincha in Brasília, and never played at their home stadium of the Maracanã in Rio de Janeiro for the entire tournament despite being hosts. Brazil finished fourth after being defeated 3–0 in the match for third place by the Netherlands on 12 July, where two of the three goals were conceded in the first 17 minutes.\n[…]\nIn 2014, shortly after the match, a humorous website, named \"Brasilalemanhaeterno\" (eternal Brazil and Germany), was created in Brazil that continuously counted the score as though the match had never ended, serving as an online joke about the result.\n[…]\n2014 FIFA World Cup knockout stage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Final_da_Copa_do_Mundo_FIFA_de_2002",
        "situacao": "ok",
        "texto": "A final da Copa do Mundo FIFA de 2002 foi a decisão da 17ª edição desta competição quadrienal de futebol organizada pela entidade envolvendo seleções masculinas de suas associações. Ela foi realizada em 30 de junho no Estádio Internacional de Yokohama, Japão, e foi disputada por Alemanha e Brasil. O torneio incluiu os anfitriões Japão e Coreia do Sul, a campeã França e outras 29 equipes que saíram\n[…]\nRudi Völler, técnico da Alemanha, disse: \"Quando você perde um jogo, a decepção é grande, é claro. Mas não é nenhuma vergonha perder contra um time como o Brasil.\" Na Copa do Mundo seguinte, na Alemanha, em 2006, o Brasil foi eliminado nas quartas de final pela França, enquanto a anfitriã chegou à fase semifinal e terminou em terceiro.\n[…]\nO Brasil fechou o grupo em primeiro lugar, com nove pontos e onze gols marcados.\n[…]\nCom exceção de 1978, Alemanha e Brasil participaram de todas as finais de Copa do Mundo desde 1950 até a de 2002. O Brasil era considerado favorito para vencer a partida pelas casas de apostas, com odds de 2–5 em comparação com 7–4 para a Alemanha.\n[…]\nNa Copa do Mundo seguinte, em 2006, a Alemanha – sede do torneio – chegou à semifinal, onde foram eliminados pela campeã Itália. O Brasil não conseguiu defender seu título, sendo eliminado nas quartas de final para a França. O próximo confronto entre as duas seleções por uma Copa do Mundo foi nas semifinais da edição de 2014, que foi sediada no Brasil.\n[…]\nEm um jogo que foi descrito por Simon Burnton, do The Guardian, como sendo \"de uma selvageria não-testemunhada contra um adversário significativo na história do torneio\", a Alemanha venceu por 7–1. Ela eventualmente venceu a Copa do Mundo de 2014, seu único título do torneio desde a final de 2002, enquanto para o Brasil, a edição de 2002 continua sendo sua conquista mundial mais recente.\n[…]\nAlemanha-Brasil em futebol\n[…]\nBrasil na Copa do Mundo FIFA\n[…]\nBrasil na Copa do Mundo FIFA de 2002",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Albert Camus",
      "descricao": "Escritor e filósofo francês nascido na Argélia, autor de O Estrangeiro e Nobel de Literatura em 1957."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o escritor Albert Camus, Nobel de Literatura, e o soviético Lev Yashin têm em comum no futebol?",
    "resposta": "Ambos foram goleiros",
    "fonte": [
      "https://en.wikipedia.org/wiki/Albert_Camus",
      "https://en.wikipedia.org/wiki/Lev_Yashin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Albert_Camus",
        "situacao": "ok",
        "texto": "Albert Camus ( kam-OO; French: [albɛʁ kamy] ; 7 November 1913 – 4 January 1960) was a French philosopher, writer, and political activist. He was the recipient of the 1957 Nobel Prize in Literature at the age of 44, the second-youngest recipient in history, and the first laureate in literature born in Africa. His works include The Stranger, The Plague, The Myth of Sisyphus, The Fall and The Rebel.\n[…]\nIn 1957, Camus received the news that he was to be awarded the Nobel Prize in Literature. This came as a surprise to him; he \"thought that the Nobel Prize...should crown an already completed life's work or at least one more advanced than mine\", like André Malraux. At age 44, he was the second-youngest recipient of the prize, after Rudyard Kipling, who was 41. After this he began working on his autobiography Le Premier Homme (The First Man) in an attempt to examine \"moral learning\".\n[…]\nSimpson, David (2019). \"Albert Camus (1913–1960)\". The Internet Encyclopedia of Philosophy. ISSN 2161-0002.\n[…]\nTodd, Olivier (2000). Albert Camus: A Life. Carroll & Graf. ISBN 978-0-7867-0739-3.\n[…]\nWillsher, Kim (7 August 2011). \"Albert Camus might have been killed by the KGB for criticising the Soviet Union, claims newspaper\". The Guardian.\n[…]\nZaretsky, Robert (2018). \"'No Longer the Person I Was': The Dazzling Correspondence of Albert Camus and Maria Casarès\". Los Angeles Review of Books.\n[…]\nThody, Philip Malcolm Waller (1957). Albert Camus: A Study of His Work. Hamish Hamilton.\n[…]\nParker, Emmett (1965). Albert Camus: The Artist in the Arena. Univ of Wisconsin Press. ISBN 978-0-299-03554-9.\n[…]\nKing, Adele (1964). Albert Camus. Grove Press.\n[…]\nBloom, Harold (2009). Albert Camus. Infobase Publishing. ISBN 978-1-4381-1515-3.\n[…]\nAlbert Camus. Selective and Cumulative Bibliography Archived 4 March 2016 at the Wayback Machine\n[…]\nAlbert Camus Society UK\n[…]\nWorks by Albert Camus at Faded Page (Canada)\n[…]\nAlbert Camus on Nobelprize.org"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lev_Yashin",
        "situacao": "ok",
        "texto": "Lev Ivanovich Yashin (Russian: Лев Иванович Яшин; 22 October 1929 – 20 March 1990) was a Soviet professional footballer who played as a goalkeeper. Widely regarded as one of the greatest goalkeepers in the history of the sport, he is the only player in his position to win the Ballon d'Or. He was known for his athleticism, positioning, imposing presence in goal, and acrobatic reflex saves. He also \n[…]\nDuring this period, Yashin also played for Dynamo's ice hockey team as a goaltender, winning the Soviet Ice Hockey Cup in 1953.\n[…]\nYashin made his fourth and last trip to the World Cup finals in 1970, held in Mexico, as the third-choice back-up and an assistant coach. The Soviet team again reached the quarter-finals. In 1971, in Moscow, he played his last match for Dynamo Moscow. Lev Yashin's FIFA testimonial match was held at the Lenin Stadium in Moscow with 100,000 fans attending and a host of football stars, including Pelé, Eusébio and Franz Beckenbauer.\n[…]\nIn 1986, after he contracted thrombophlebitis while he was in Budapest, Yashin underwent the amputation of one of his legs. He died in 1990 of stomach cancer, despite a surgical intervention in an attempt to save his life. He was given a state funeral as a Soviet Honoured Master of Sport.\n[…]\nYashin was survived by wife Valentina Timofeyevna and daughters Irina and Elena; when Russia hosted the 2018 FIFA World Cup, Valentina was still living in the Moscow apartment that the Soviet state had given her husband in 1964. Yashin has a granddaughter and one surviving grandson; another grandson died in 2002 at age 14 from injuries suffered in a bicycle accident.\n[…]\nYashin also played ice hockey (also as a goalie) and won the Soviet Cup in March 1953. He was even among the candidates for the country's ice hockey national team, but he stopped playing ice hockey in 1954 to concentrate on his football career.\n[…]\nLev Yashin Club\n[…]\nLev Yashin at Olympedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Albert_Camus",
        "situacao": "ok",
        "texto": "Albert Camus (francês: [al.'bɛʁ ka.'my] () (Mondovi, 7 de novembro de 1913 – Villeblevin, 4 de janeiro de 1960) foi um escritor, filósofo e jornalista franco-argelino, conhecido por suas contribuições à literatura e ao pensamento filosófico do século XX. Sua obra abrange romances, peças teatrais, ensaios e artigos, nos quais explorou temas como o absurdo da condição humana, a revolta e a busca por\n[…]\nAlbert Camus faleceu em um acidente de carro em 1960, aos 46 anos. Sua obra permanece influente na filosofia, na literatura e nos debates sobre moralidade e política.\n[…]\nA tuberculose também o impediu de continuar a praticar um desporto que amava e lhe ensinou tanto: Camus era o guarda-redes da seleção universitária. Conta-se que era um bom goleiro. O seu amor pelo futebol seguiu-o durante toda a vida. Uma das coisas que mais o impressionou quando da sua visita ao Brasil em 1949 foi o amor dos brasileiros pelo futebol.\n[…]\nCinquenta anos depois, revelações do escritor e tradutor checo Jan Zabrana, contidas em seu diário publicado postumamente, sugerem a possibilidade de que Camus tenha sido, de fato, assassinado, por ordem do Ministro das Relações Exteriores da URSS, Dmitri Shepilov, em retaliação à oposição aberta que o escritor vinha fazendo a Moscou - particularmente no artigo publicado na revista Franc-Tireur de março de 1957, em que atacava pessoalmente o ministro, responsabilizando-o pelo que chamou de \"massacre\", durante a repressão soviética à Revolução Húngara de 1956.\n[…]\n«Albert Camus em português. Página de divulgação e estudo da obra do escritor e filósofo argelino Albert Camus». Por  Jorge Luis Gutiérrez.\n[…]\n«Albert Camus» (em inglês). The Nobel Prize in Literature 1957\n[…]\nAlbert Camus, o grande mal-entendido, por Carlos Maria Bobone. Observador, 4 jan 2020]\n[…]\n«Extratos e textos completos do Albert Camus». (em português)\n[…]\n«The Albert Camus Society of the UK». (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Cesare Maldini",
      "descricao": "Zagueiro italiano (1932-2016), capitão do Milan e pai do também zagueiro Paolo Maldini."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Cesare e Paolo Maldini, pai e filho, compartilham um feito como capitães do Milan. Qual?",
    "resposta": "Levantaram a Copa dos Campeões",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cesare_Maldini",
      "https://en.wikipedia.org/wiki/Paolo_Maldini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cesare_Maldini",
        "situacao": "ok",
        "texto": "Cesare Maldini (Italian pronunciation: [ˈtʃeːzare malˈdiːni, ˈtʃɛː-]; 5 February 1932 – 3 April 2016) was an Italian professional football manager and player who played as a defender.\n[…]\nFather to Paolo Maldini and grandfather to Daniel Maldini, Cesare began his career with Italian side Triestina, before transferring to AC Milan in 1954, whom he captained to win four Serie A league titles, one European Cup and one Latin Cup during his twelve seasons with the club. He retired in 1967, after a season with Torino. Internationally, he played for Italy, earning 14 caps and participating in the 1962 World Cup. He served as team captain for both Milan and Italy.\n[…]\nDespite initially struggling in qualification, the Italian media and fans had great expectations of the 1998 side, which included a strong defence, and several prolific attacking players, such as Christian Vieri, Alessandro Del Piero and Filippo Inzaghi, among others, in their prime. Cesare Maldini's son, Paolo, was captain of the team. Italy were drawn in Group B of the tournament with Chile, Cameroon and Austria.\n[…]\nAfter serving as a head scout for his former team Milan from February 1999, Maldini briefly returned to coach the Milan first team in March 2001, serving as an interim manager for the club (whose captain was his son, Paolo) alongside youth coach Mauro Tassotti, following Alberto Zaccheroni's sacking, and led the squad for their final games of the season.\n[…]\nAC Milan\n[…]\nAC Milan Hall of Fame\n[…]\nAC Milan\n[…]\nProfile at the AC Milan website\n[…]\nCesare Maldini – FIFA competition record (archived)\n[…]\nCesare Maldini – UEFA competition record (archive)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Paolo_Maldini",
        "situacao": "ok",
        "texto": "Paolo Cesare Maldini (Italian pronunciation: [ˈpaːolo malˈdiːni]; born 26 June 1968) is an Italian football executive and former professional footballer who most recently served as the president of the technical sector of the Italian Football Federation. He spent his entire career playing as a left-back or as a centre-back for AC Milan and the Italy national team. He is widely regarded as one of t\n[…]\nMilan won the 2002–03 Champions League with Maldini as their captain for the first time in his career, in the first all-Italian final, against Juventus, on 28 May 2003 at Old Trafford. Maldini helped Milan keep a clean sheet, as they defeated Juventus 3–2 on penalties after a 0–0 deadlock following extra time. On that day, it was exactly 40 years since his father, Cesare, had also lifted the European Cup trophy as Milan's captain, also in England.\n[…]\nThroughout his career, Maldini was also a leader and captain for Milan and for the Italy national team, earning the nickname \"Il Capitano\" (\"The Captain\"). He was renowned for his vocal and commanding presence on the pitch and his ability to motivate his teammates and ensure they remained in position.\n[…]\nMaldini was born on 26 June 1968 in Milan to Cesare Maldini and Marisa Luisa De Mezzi. His paternal family was of mixed Italian-Slovenian descent. He has five siblings. In December 1994, he married Venezuelan former model Adriana Fossa. The couple have two sons, Christian (born 14 June 1996) and Daniel (born 11 October 2001), who both played for AC Milan's youth teams. His father Cesare played as a defender and also captained Milan and the Italy national team.\n[…]\nPaolo Maldini at AIC (in Italian)\n[…]\nPaolo Maldini at LegaSerieA.it. Archived 23 October 2018 at the Wayback Machine (in Italian).\n[…]\nPaolo Maldini – Hall of Fame profile at acmilan.com (in Italian and English)\n[…]\nPaolo Maldini at FIGC (in Italian)\n[…]\nPaolo Maldini at Italia1910.com (in Italian)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cesare_Maldini",
        "situacao": "ok",
        "texto": "Cesare Maldini (Trieste, 5 de fevereiro de 1932 — Milão, 3 de abril de 2016) foi um jogador de futebol do Milan e da seleção italiana de futebol e também treinador. É pai do também ex-jogador Paolo Maldini.\n[…]\nCesare Maldini fez parte do elenco da Seleção Italiana de Futebol na Copa do Mundo de 1962, no Chile, ele fez duas partidas.[carece de fontes]? Com a camisa do Milan, o ex-zagueiro foi o responsável por levantar o título da Taça dos Clubes Campeões Europeus em 1963, o primeiro da história da antiga versão da Liga dos Campeões do futebol italiano, após vitória do Milan sobre o Benfica em Wembley.\n[…]\nFoi treinador de alguns clubes, mas destacou-se na Seleção Italiana de Futebol, disputando a Copa do Mundo de 1998, e na Seleção Paraguaia de Futebol, ao disputar a Copa do Mundo de 2002.\n[…]\nMilan\n[…]\nCampeonato Italiano: 1954–55, 1956–57, 1958–59 e 1961–62\n[…]\nLiga dos Campeões da UEFA: 1962-63\n[…]\nMilan\n[…]\nCampeonato Europeu de Futebol Sub-21: 1992, 1994, 1996",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Elza Soares",
      "descricao": "Cantora brasileira (1930-2022) de samba e MPB, eleita pela BBC a cantora brasileira do milênio."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que relação pessoal existiu entre a cantora Elza Soares e o craque Garrincha, ídolo do Botafogo?",
    "resposta": "Foram casados",
    "fonte": [
      "https://en.wikipedia.org/wiki/Elza_Soares",
      "https://pt.wikipedia.org/wiki/Elza_Soares"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Elza_Soares",
        "situacao": "ok",
        "texto": "Elza da Conceição Soares (née Gomes; 23 June 1930 – 20 January 2022), known professionally as Elza Soares (Brazilian Portuguese: [ˈɛwzɐ ˈswaɾis]), was a Brazilian samba singer. In 1999, she was named Singer of the Millennium along with Tina Turner by BBC Radio.\n[…]\nElza Gomes da Conceição was born on 23 June 1930 in Padre Miguel, Rio de Janeiro. Her father Avelino Gomes was a factory worker and guitarist, and her mother Rosária Maria da Conceição was a washerwoman. She was born in the Moça Bonita, a favela in the Padre Miguel neighborhood of Rio de Janeiro. During her childhood, Soares played on the streets, spun wooden tops, flew kites, and fought with boys. Despite poverty and having to carry buckets of water on her head, she had a happy childhood.\n[…]\nFrom 1967 to 1969, Soares recorded three albums with the record label Odeon, partnering with singer Miltinho. The albums were titled Elza, Miltinho e Samba (Volumes 1–3). The songs in these albums were mostly in the potpourri style with duets. The albums were produced by Milton Miranda and Hermínio Bello de Carvalho and re-released on CD in 2003 by EMI-Odeon.\n[…]\nSoares scored a number of hits in Brazil throughout her career, including \"Se Acaso Você Chegasse\" (1960), \"Boato\" (1961), \"Cadeira Vazia\" (1961), \"Só Danço Samba\" (1963), \"Mulata Assanhada\" (1965), and \"Aquarela Brasileira\" (1974). Elza Pede Passagem produced no major hit singles but it was considered representative of the samba-soul of the early 1970s.\n[…]\nO Samba é Elza Soares (Odeon, 1961)\n[…]\nElza Soares e Wilson das Neves (Odeon, 1968)\n[…]\nElza Soares (Tapecar, 1974)\n[…]\nElza Negra, Negra Elza (CBS, 1980)\n[…]\nElza Canta e Chora Lupi (2016)\n[…]\nElza Soares & João de Aquino (Deckdisc, 2021)\n[…]\nGarrincha\n[…]\nElza Soares discography at Discogs\n[…]\nElza Soares at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Elza_Soares",
        "situacao": "ok",
        "texto": "Elza Soares, nome artístico de Elza Gomes da Conceição (Rio de Janeiro, 23 de junho de 1930 – Rio de Janeiro, 20 de janeiro de 2022), foi uma cantora, compositora e intérprete de samba-enredo brasileira, que flertou com vários gêneros musicais como samba, jazz, soul, rock, hip hop e música eletrônica.\n[…]\nAos dezoito anos, oficializou seu matrimônio, passando a assinar Elza da Conceição Soares, seu sobrenome artístico posteriormente, e aos vinte e um, ficou viúva, pois seu marido teve uma reicidiva da tuberculose e não resistiu. Outra fonte diz que ela se separou de Alaordes depois deste lhe dar dois tiros ao descobrir que ela trabalhava como cantora, e que ela não o viu mais até saber de sua morte no início de agosto de 1959, quando ela teria 29 anos.\n[…]\nElza conheceu Garrincha em 1962, e iniciaram um romance enquanto ele era casado. Após um ano juntos, ela pediu para que ele tomasse uma decisão: ou a assumiria ou ela o abandonaria. Meses depois, ele veio procurá-la, afirmando ter saído de casa e estar desquitado da esposa. Começaram a namorar, mas sem revelar nada à imprensa, sabendo da repercussão negativa que o evento teria. Quatro anos depois do namoro, em 1966, decidiram morar juntos.\n[…]\nRapidamente acionaram o médico de Elza, que enviou uma ambulância para a residência. Neste meio tempo, segundo o empresário, o semblante da cantora foi mudando, até que ela apagou. \"Foi uma morte tranquila, sem traumas, sem motivo. Morreu de causas naturais. Esse, aliás, era um grande medo dela: ter uma morte sofrida, por doença. Hoje, ela simplesmente desligou\", contou ele. Por coincidência, seu falecimento ocorreu exatos 39 anos após a morte de seu ex-marido Garrincha.\n[…]\nElza ao Vivo no Municipal (2022)\n[…]\nElza Soares no IMDb\n[…]\nElza Soares no Instagram\n[…]\nElza Soares no X\n[…]\nElza Soares no Facebook"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Mário Filho",
      "descricao": "Jornalista esportivo brasileiro (1908-1966) que dá nome oficial ao Maracanã."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O jornalista Mário Filho, que dá nome ao Maracanã, tinha qual parentesco com o dramaturgo Nelson Rodrigues?",
    "resposta": "Eram irmãos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mário_Filho",
      "https://en.wikipedia.org/wiki/Mário_Filho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mário_Filho",
        "situacao": "ok",
        "texto": "Mário Leite Rodrigues Filho, mais conhecido como Mário Filho (Recife, 3 de junho de 1908 — Rio de Janeiro, 16 de setembro de 1966), foi um jornalista, cronista esportivo e escritor brasileiro. Era irmão do também jornalista e escritor Nelson Rodrigues. É considerado o maior jornalista esportivo que o Brasil já teve.\n[…]\nA exemplo de outros pernambucanos como o seu irmão Nelson Rodrigues, Bezerra da Silva, Hilário Jovino Ferreira, Pedro Ernesto e Chacrinha, Mário Filho é uma figura emblemática do cenário cultural carioca. O nome oficial do Maracanã, \"Estádio Jornalista Mário Filho\", foi dado em reconhecimento pelo seu apoio à construção da arena, e a expressão \"Fla-Flu\", que designa o clássico do futebol brasileiro entre Flamengo e Fluminense, é de sua autoria.\n[…]\nConsagrado como o maior jornalista esportivo de todos os tempos, Mário faleceu de um ataque cardíaco em 1966, aos 58 anos. Meses depois Célia, sua mulher e paixão de toda uma vida — casaram-se quando ele tinha 18 anos —, se matou. Em sua homenagem, o antigo Estádio Municipal do Maracanã ganhou o nome de Estádio Jornalista Mário Filho.\n[…]\nO grande teatrólogo e cronista Nelson Rodrigues, irmão de Mário Filho, homenageou-o com o jargão \"o criador de multidões\", pela sua importância na popularização do futebol no Rio de Janeiro e no Brasil.\n[…]\n“Dondinho era preto, preta dona Celeste, preta vovó Ambrosina, preto o tio Jorge, pretos Zoca e Maria Lúcia. Como se envergonhar da cor dos pais, da avó que lhe ensinara a rezar, do bom tio Jorge que pegava o ordenado e entregava-o à irmã para inteirar as despesas da casa, dos irmãos que tinha de proteger? A cor dele era igual. Tinha de ser preto. Se não fosse preto não seria Pelé”\n[…]\nCrônica de Mário Filho publicada no Jornal dos Sports em 18 de agosto de 1956."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mário_Filho",
        "situacao": "ok",
        "texto": "Mário Rodrigues Filho, better known as Mário Filho (3 June 1908 – 17 September 1966), was a Brazilian journalist and writer.\n[…]\nMário Filho was born in Recife, capital of Northeast Brazilian state of Pernambuco, in 1908. He was the son of Mário Rodrigues, a journalist of the local daily Diário de Pernambuco. After conflicts with political opponents, the family moved in 1912 to the then capital of Brazil, Rio de Janeiro.\n[…]\nIn the late 1940s, Mário Filho was involved with the Jornal dos Sports initiative for building the main stadium of the Football World Cup 1950 not in Jacarepaguá about 20 kilometres west of central Rio, but in the relatively central neighbourhood Maracanã on the then orphaned grounds of the racecourse of Derby Clube. Its main adversary was the journalist and councilor Carlos Lacerda, later aspirant for president and governor of the state of Guanabara.\n[…]\nAlso in 1951, Copa Rio, a kind of Club World Cup, was launched based on an idea by Filho.\n[…]\nMário Filho died in 1966 at the age of 58 due to a heart attack, leaving behind his wife Célia, whom he had met on the beach of Copacabana and married at the age of 18 years. Célia committed suicide just a few months after his death. In his honor, the old Municipal Stadium Maracanã was named Journalist Mário Filho Stadium. As early as the 1950s, he let the readers of Journal dos Sports know, that his heart beat for Fluminense\n[…]\nThe great playwright and chronicler Nelson Rodrigues, brother of Mario Filho, honored him with the name \"o criador das multidões\", \"the creator of crowds\". The term has stuck."
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Zico",
      "descricao": "Arthur Antunes Coimbra, meia brasileiro ídolo do Flamengo e da seleção nos anos 1970 e 1980."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Zico, ídolo do Flamengo, ganhou o apelido de Galinho por causa do jeito franzino. Galinho de qual bairro carioca?",
    "resposta": "Quintino",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Zico"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Zico",
        "situacao": "ok",
        "texto": "Arthur Antunes Coimbra (Rio de Janeiro, 3 de março de 1953), mais conhecido como Zico, é um dirigente esportivo, ex-treinador e ex-futebolista luso-brasileiro que atuava como meio-campista.\n[…]\nEm 1969, aos 16 anos, Zico foi mandado para a Bahia com um grupo de jogadores cariocas para realizar uma avaliação no Fluminense de Feira, mas foi reprovado por seu porte físico voltando ao Flamengo logo em seguida. E devido ao seu franzino corpo de início de carreira e de seu bairro de origem (Quintino), ganhou o carinhoso apelido de \"Galinho de Quintino\".\n[…]\nZico descende de portugueses, tanto pelo lado materno como pelo lado paterno. O seu avô materno, Arthur Ferreira da Costa Silva era de Oliveira de Azeméis e emigrou para o Rio de Janeiro nos últimos anos do século XIX. Estabeleceu-se com uma fábrica de cerâmica no bairro de Quintino. A mãe de Zico, Matilde Ferreira da Costa Silva (19 de janeiro de 1919 – 17 de novembro de 2002), nasceu já no Brasil. O avô paterno, Fernando Antunes Coimbra, nasceu e viveu a maior parte da sua vida em Tondela.\n[…]\nZico nasceu na rua Lucinda Barbosa, número 7 em Quintino, às 7h00 de parto natural. O nome Arthur foi escolhido pela mãe por causa de seu avô (que viria a falecer um ano depois). Zico conheceu Sandra Carvalho de Sá, que vem a ser irmã de Sueli, a esposa de seu irmão Edu, em 1969, em treinamento do Flamengo: ela passava pela Gávea para suspirar por seu ídolo do elenco flamenguista, o galã argentino Narciso Doval.\n[…]\nFlamengão (Bebeto)\n[…]\nGalinho de Briga (Fagner, tema do filme Uma Aventura do Zico - 1998)\n[…]\nZico 60: o surgimento do Galinho de Quintino e a trajetória até o estrelato\n[…]\nDe Galinho de Quintino a ídolo de uma nação: nada além de ZICO"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Zico",
      "descricao": "Arthur Antunes Coimbra, meia brasileiro ídolo do Flamengo e da seleção nos anos 1970 e 1980."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Depois de brilhar no Flamengo, Zico virou ídolo e ajudou a profissionalizar o futebol de qual país asiático?",
    "resposta": "Japão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Zico",
      "https://pt.wikipedia.org/wiki/Zico"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zico",
        "situacao": "desambiguacao",
        "texto": "Zico may refer to:\n\n\n== People named Zico ==\n\n\n=== Nickname ===\nZico (footballer) (born 1953), Brazilian footballer and coach Arthur Antunes Coimbra\nZico (footballer, born 1954), Brazilian footballer who played as a goalkeeper\nZico (footballer, born 1966), Brazilian footballer and coach Milton Antonio Nunes Niemet\nZico (rapper), South Korean rapper Woo Ji-ho (born 1992)\n\n\n=== Given name ===\nZico B"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zico",
        "situacao": "ok",
        "texto": "Arthur Antunes Coimbra (Rio de Janeiro, 3 de março de 1953), mais conhecido como Zico, é um dirigente esportivo, ex-treinador e ex-futebolista luso-brasileiro que atuava como meio-campista.\n[…]\nSua passagem pelo Japão, junto com outros jogadores famosos já em fim de carreira ou em via de se aposentar, foi apontada como uma das maiores razões para a popularização e profissionalização do futebol no país, que finalmente promoveria a primeira edição profissional do Campeonato Japonês em 1993.\n[…]\nA partir de junho de 2002, passou a exercer o cargo de técnico da Seleção Japonesa, sucedendo ao francês Philippe Troussier, que treinara o país na Copa do Mundo daquele ano. Foi chamado logo como a primeira opção de Masaru Suzuki, presidente da Associação de Futebol do Japão — Suzuki fora o presidente do Kashima na época em que Zico teve bons resultados como técnico interino do clube.\n[…]\nNo dia 2 de setembro de 2014, em um projeto pioneiro de difundir o futebol pelo mundo, tal qual já havia feito no Japão, Zico assumiu o comando do Goa, da Índia. Logo após sua chegada, o clube postou em seu site oficial: \"A lenda está aqui. Seja bem vindo, Zico\".\n[…]\nZico nasceu na rua Lucinda Barbosa, número 7 em Quintino, às 7h00 de parto natural. O nome Arthur foi escolhido pela mãe por causa de seu avô (que viria a falecer um ano depois). Zico conheceu Sandra Carvalho de Sá, que vem a ser irmã de Sueli, a esposa de seu irmão Edu, em 1969, em treinamento do Flamengo: ela passava pela Gávea para suspirar por seu ídolo do elenco flamenguista, o galã argentino Narciso Doval.\n[…]\nSupercopa do Japão: 1997, 1998 e 1999\n[…]\nZico, o samurai de Quintino (documentário, partindo do período em que Zico jogou no Japão - 2026)"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Seleção Neerlandesa de Futebol",
      "descricao": "Seleção nacional de futebol dos Países Baixos, vice-campeã mundial em 1974, 1978 e 2010."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A seleção holandesa de 1974 ganhou um apelido emprestado do título de um filme de Stanley Kubrick. Qual?",
    "resposta": "Laranja Mecânica",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Seleção_Neerlandesa_de_Futebol"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Seleção_Neerlandesa_de_Futebol",
        "situacao": "ok",
        "texto": "A Seleção Neerlandesa de Futebol (em neerlandês: Nederlands voetbalelftal), representa os Países Baixos nas competições de futebol da UEFA e FIFA. A equipe é coloquialmente conhecida como Het Nederlands Elftal  (Os onze holandeses) ou Oranje, em homenagem à Casa de Orange-Nassau e suas distintas camisas laranja. Informalmente a seleção, assim como o próprio país, era chamada de Holanda. O fã-clube\n[…]\nUma das maiores seleções do futebol mundial, fortemente marcada pelo chamado \"Carrossel holandês\" comandado por Johan Cruyff na Copa do Mundo de 1974. A \"Laranja Mecânica\" já foi finalista em três oportunidades: 1974, 1978 e 2010, porém acabou desperdiçando as chances de ser campeã e acabou sendo vice em todas essas oportunidades – 2 a 1 para a Alemanha Ocidental em 1974, 3 a 1 para a Argentina em 1978 e 1 a 0 para Espanha em 2010.\n[…]\nApesar de não ter sido a grande campeã, encantou o mundo com uma maneira dinâmica de jogar futebol, onde os jogadores não guardavam posições e faziam a bola passar de pé em pé até chegar ao gol adversário. Esta tática, considerada revolucionária, foi denominada de \"carrossel\" e acabou apelidando carinhosamente aquela seleção de Laranja Mecânica, em homenagem ao clássico filme de Stanley Kubrick e sucesso cinematográfico da época.\n[…]\nA Holanda se classificou para a Copa do Mundo de 2006 sob o comando do novo técnico Marco van Basten. Eles foram eliminados nas oitavas depois de perder por 1-0 para Portugal. Foi apelidada de \"Batalha de Nuremberg\" pela imprensa. Apesar das críticas em torno de sua política de seleção e da falta de futebol de ataque de seu time, Van Basten recebeu uma oferta de dois anos de extensão de seu contrato pelo KNVB.\n[…]\nLista de jogadores da Seleção Neerlandesa de Futebol por data de estreia\n[…]\nLista de jogadores da Seleção Neerlandesa de Futebol por ordem alfabética\n[…]\n«História da Seleção Neerlandesa de Futebol» (em inglês e neerlandês)"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "René Higuita",
      "descricao": "Ex-goleiro colombiano dos anos 1980 e 1990, famoso pelo estilo ousado e pelas saídas do gol."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1995, em Wembley, o goleiro colombiano René Higuita defendeu um chute com os calcanhares, por cima das costas. Como o lance ficou conhecido?",
    "resposta": "Defesa escorpião",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ren%C3%A9_Higuita",
      "https://en.wikipedia.org/wiki/Scorpion_kick"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ren%C3%A9_Higuita",
        "situacao": "ok",
        "texto": "José René Higuita Zapata (Spanish pronunciation: [reˈne jˈɣita]; born 27 August 1966) is a Colombian former professional footballer who played as a goalkeeper. He was nicknamed El Loco (\"The Madman\") for his high-risk 'sweeper-keeper' playing style and his flair for the dramatic, and sometimes even scoring goals despite being a goalkeeper.\n[…]\nHiguita's most notable use of the scorpion was when he performed it while clearing a cross from Jamie Redknapp during a friendly against England at Wembley Stadium on 6 September 1995, earning him considerable media attention. It ranked 94th in Channel 4's 100 Greatest Sporting Moments in 2002.\n[…]\nHiguita has expressed a wish to coach the Colombia national team and in December 2008 he got the job of goalkeeper coach for his former club Real Valladolid.\n[…]\nRené Higuita's wife is Magnolia, and they have two children, Andrés and Pamela. He is also the father of Cindy Carolina, the daughter of his deceased first wife. He is also the grandfather of two girls and a boy.\n[…]\nIn the ESPN documentary \"The Two Escobars\", Higuita claimed that he was arrested for visiting Pablo during his time in prison with the desire to thank him for turning himself in, thus stabilizing Colombia for a short period. He supported this theory claiming that all he was asked during questioning was solely about Pablo Escobar himself and no kidnapping.\n[…]\nIn July 2024, the international online casino and sportsbook company Betsson, which has a large presence in his native Colombia, announced Higuita as a brand ambassador.\n[…]\nScores and results list Colombia's goal tally first, score column indicates score after each Higuita goal.\n[…]\nRene Higuita Career Info and Achievements\n[…]\nFIFA interview with René Higuita\n[…]\nBBC SPORT Tim Vickery The legacy of Rene Higuita\n[…]\nRené Higuita clips: Part 1; Part 2; Part 3; Part 4"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Scorpion_kick",
        "situacao": "ok",
        "texto": "The scorpion kick, also known as a reverse bicycle kick or back hammer kick, is a physical move in association football that is achieved by diving or throwing the body forwards and then placing the hands on the ground to lunge the back heels forward to kick an incoming ball.\n[…]\nAlthough René Higuita is often credited with popularising the move, the scorpion kick was first performed by Paraguayan forward Arsenio Erico on 12 August 1934, when he scored a goal for Independiente de Avellaneda in a match against Boca Juniors, in front of 50,000 spectators. Following a cross from Antonio Sastre, Erico attempted a header by diving forward, but as he failed to connect with the ball properly, he resolved the play with an aerial backheel, scoring a goal that surprised the crowd.\n[…]\nInitially referred to as the \"balancín\" (translated as 'seesaw' in English), the move was later associated with Higuita after his iconic performance in a 1995 international friendly match between Colombia and England at Wembley Stadium.\n[…]\nOn top of the regular diving scorpion kick, there are also other variations such as standing scorpion kick and spinning scorpion kick, neither of which necessarily result in the hands being placed on the ground. Swedish forward Zlatan Ibrahimović is a notable exponent for the standing scorpion kick, while the Italian defender Giuseppe Biava is a notable exponent of the spinning scorpion kick."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ren%C3%A9_Higuita",
        "situacao": "ok",
        "texto": "José René Higuita Zapata (Medellín, 27 de agosto de 1966) é um ex-futebolista colombiano que atuava como goleiro. Atualmente é preparador de goleiros do Atlético Nacional.\n[…]\nPor conta do longo cabelo cacheado, uniformes estranhos e um peculiar jeito para criar as maiores maluquices, logo tornou-se ícone da irreverência dentro de campo. Seu estilo louco de jogar, em que saía da grande área conduzindo a bola e driblando adversários, muitas vezes interferia no resultado do jogo (favorável ou desfavoravelmente). Higuita também ficou famoso por seus gols de falta, de pênalti, e pela folclórica \"defesa escorpião\", em que se joga para frente defendendo a bola com os pés.\n[…]\nEm uma partida contra a seleção de Antioquia, que recebeu um público de aproximadamente 21 mil pessoas ao Estádio Atanasio Girardot, casa do Nacional de Medellín — clube pelo qual obteve maior destaque em sua carreira — o goleiro deu o show que se esperava: fez maluquices, marcou um gol e repetiu a famosa defesa do escorpião, para delírio dos fãs que assistiram à partida.\n[…]\nEm 1995, num jogo amistoso contra a Inglaterra, Higuita fez uma das maiores defesas de todos os tempos: a \"defesa do escorpião\"', quando deu um pequeno salto e defendeu com as pernas por trás da cabeça, simbolizando o típico ataque do aracnídeo. Esta jogada foi eleita o melhor lance do futebol de todos os tempos pelo site inglês \"Footy Boots\". Além disso, aparece na 94.ª posição da Lista \"100 Greatest Sporting Moments\", feita pelo canal \"Channel 4\", em 2002.\n[…]\nCampeonato Colombiano: 1991 e 1994\n[…]\nCampeonato Colombiano - Série B: 2008\n[…]\nSeleção Colombiana de Todos os Tempos - IFFHS\n[…]\nLista de goleiros artilheiros",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Paulo Machado de Carvalho",
      "descricao": "Empresário e dirigente brasileiro, chefe da delegação da seleção nas Copas de 1958 e 1962, que dá nome oficial ao Pacaembu."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Homenageado no nome oficial do Pacaembu, Paulo Machado de Carvalho chefiou a seleção nas Copas de 1958 e 1962 e ganhou qual apelido?",
    "resposta": "Marechal da Vitória",
    "distratores": [
      "General do Bi",
      "Almirante da Copa",
      "Comandante Canarinho"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Paulo_Machado_de_Carvalho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Paulo_Machado_de_Carvalho",
        "situacao": "ok",
        "texto": "Paulo Machado de Carvalho (São Paulo, 9 de novembro de 1901 — São Paulo, 7 de março de 1992) foi um advogado e empresário brasileiro.\n[…]\nConhecido nacionalmente com o título de Marechal da Vitória por ter sido o chefe da delegação brasileira em duas Copas do Mundo, é considerado o maior responsável \"fora de campo\" pelas conquistas das Copas do Mundo de 1958 e de 1962; por causa disso, o Estádio do Pacaembu, em São Paulo é batizado oficialmente de Estádio Municipal Paulo Machado de Carvalho em sua homenagem.\n[…]\nAo lado de João Havelange, então presidente da Confederação Brasileira de Desportos (CBD), foi dirigente do futebol brasileiro, tendo sido chefe das delegações campeãs mundiais de 1958 (Suécia) e 1962 (Chile), o que lhe valeu o apelido de \"Marechal da Vitória\". Na ocasião da primeira conquista, foi convidado por Havelange e preparou o plano para a Copa desde meados de 1957. \"Olha, doutor Paulo\", pediu Havelange.\n[…]\n\"Preciso de uma seleção que faça o povo esquecer a de 1950, uma seleção vitoriosa, um time campeão. E porque eu preciso de tudo isso é que o quero como seu chefe. Arme tudo como quiser. Com carta branca\". O plano foi elaborado com a colaboração de jornalistas com experiência no futebol e foi transformado em um livro chamado O Plano Paulo Machado de Carvalho.\n[…]\nPaulo Machado de Carvalho Filho (São Paulo, 25 de abril de 1924–São Paulo, 14 de setembro de 2010).\n[…]\nEm 1988, Paulo Machado de Carvalho foi o o tema do enredo da escola de samba Rosas de Ouro para o Carnaval: \"Carvalho, madeira de lei — Paulo Machado de Carvalho.\" A escola da Brasilândia terminou o concurso na sexta colocação, entre doze escolas."
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Estádio Santiago Bernabéu",
      "descricao": "Estádio do Real Madrid, na capital espanhola, inaugurado em 1947."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O estádio do Real Madrid homenageia Santiago Bernabéu, que jogou no clube e depois ocupou qual cargo por mais de trinta anos?",
    "resposta": "Presidente do clube",
    "fonte": [
      "https://en.wikipedia.org/wiki/Santiago_Bernab%C3%A9u",
      "https://en.wikipedia.org/wiki/Santiago_Bernab%C3%A9u_Stadium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Santiago_Bernab%C3%A9u",
        "situacao": "ok",
        "texto": "Santiago Bernabéu de Yeste (Spanish pronunciation: [sanˈtjaɣo βeɾnaˈβew ˈʝeste]; 8 June 1895 – 2 June 1978) was a Spanish football player, coach, and administrator who played for Real Madrid as a forward, later serving as the club's manager and then president. He is widely regarded as one of the most important figures in the history of Real Madrid, having served as its president for 34 years and 2\n[…]\nIn 1943, Bernabéu was elected president of Real Madrid – a position he would occupy until his death on 2 June 1978, beginning to implant his ideas. He restructured the club at all levels, in what would become the normal operating structure of professional clubs in the future, giving every section and level of the club independent technical teams and recruiting people who were ambitious and visionary in their own right, such as Raimundo Saporta.\n[…]\nDuring Bernabéu's presidency many of Real Madrid's most legendary names played for the club, including Molowny, Muñoz, Di Stéfano, Gento, Rial, Santamaría, Kopa, Puskás, Amancio, Pirri, Netzer, Breitner, Santillana, Stielike, Juanito, Jensen, Camacho, and many others. With this team, Real Madrid would go on to usher in an unprecedented era of dominance both domestically and internationally, highlighted by its five consecutive European Cup triumphs and numerous domestic titles.\n[…]\nAt the time of his death, Bernabéu had been the club's president for nearly 35 years, during which his club won 6 European Cups, 2 Latin Cups, 1 Intercontinental Cup, 16 league titles, 6 Spanish Cups, and 1 Copa Eva Duarte. He died in 1978, while the World Cup was being played in Argentina. In his honour FIFA decreed three days of mourning during the tournament. In 2002, he was posthumously awarded the FIFA Order of Merit.\n[…]\nMadrid:\n[…]\nCampeonato Regional de Madrid:\n[…]\nReal Madrid:\n[…]\nReal Madrid Basketball:\n[…]\nReal Madrid Volleyball:\n[…]\nReal Madrid Handball:\n[…]\nProfile at Real Madrid"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Santiago_Bernab%C3%A9u_Stadium",
        "situacao": "ok",
        "texto": "Bernabéu, (Spanish: El Bernabéu [βeɾnaˈβew] ) formerly known as Santiago Bernabéu Stadium, is a retractable roof football stadium in the district of Chamartín, Madrid, Spain. With a seating capacity of 83,186 following its extensive renovation completed in late 2024, the stadium has the second-largest seating capacity for a football stadium in Spain, behind Camp Nou in Barcelona. It has been the h\n[…]\nNamed after former Real Madrid player and president Santiago Bernabéu (1895–1978), the stadium is one of the world's most famous football venues. It has hosted the final of the European Cup/UEFA Champions League on four occasions: in 1957, 1969, 1980 and 2010. The stadium also hosted the second leg of the 2018 Copa Libertadores Finals, making Santiago Bernabéu the only stadium to host finals of both competitions.\n[…]\nThe next step was crucial: Bernabéu presented this plan to Rafael Salgado, president of Banco Mercantil e Industrial and a Real Madrid supporter. Thanks to Bernabéu's passionate and detailed explanation, Salgado agreed to finance the project, convinced of the viability and potential of the new stadium. This decision was crucial for the project's realization, and in recognition of his support, one of the streets adjacent to the stadium bears his name.\n[…]\nThis is how Fernando de Cárcer Disdier, the club's first vice president, summarized the development of the construction in 1947:\n[…]\nIn 1997, with Lorenzo Sanz as president, UEFA required the Santiago Bernabéu to adopt an all-seating arrangement, bringing its capacity down from 106,000 to 74,328 spectators.\n[…]\nAs the club kept growing in all regards, thoughts for further changes to the stadium appeared. When Florentino Pérez became the president of the club, he launched a \"Master Plan\" with one goal: to improve the comfort of the Santiago Bernabéu and the quality of its facilities, and maximise revenue for the stadium.\n[…]\nBernabéu Tour"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santiago_Bernab%C3%A9u",
        "situacao": "ok",
        "texto": "Santiago Bernabéu Yeste, mais conhecido como Santiago Bernabéu (Almansa, 8 de junho de 1895 — Madrid, 2 de junho de 1978), foi um soldado, futebolista e empresário espanhol. Jogou como futebolista a carreira toda pelo Real Madrid. Depois, tornou-se presidente do clube, e até hoje segue sendo considerado como a pessoa mais importante da história da equipe. Também foi soldado pelos franquistas na Gu\n[…]\nNascido em Almansa, sua família mudou para Madrid quando Bernabéu era muito jovem. Em 1909, aos 14 anos, Bernabéu começa a jogar na equipe júnior do Real Madrid.\n[…]\nEm 1912, aos 17 anos, Bernabéu passa a integrar a equipe profissional do Real Madrid. Pelo Real Madrid, Bernabéu, que jogava como atacante, chegou a marcar cerca de 200 gols pelo clube e jogou por vários anos como capitão do time, até se aposentar em 1927.\n[…]\nAlguns anos depois, numa partida contra o FC Barcelona, em 1943, houve um duro confronto entre as torcidas. Por decisão do governo os presidentes dos dois times foram obrigados a deixarem o cargo. No Real Madrid, saiu o presidente Antonio Santos Peralba, depois, Bernabéu foi eleito o novo presidente do clube.\n[…]\nO Real Madrid ainda estava muito abaixo da estrutura de clubes como FC Barcelona e Athletic Bilbao. Então, Bernabéu começou a reestruturar todos os setores do clube e construiu um estádio que foi considerado como o maior da época - o estádio que viria a ter o seu nome no futuro.\n[…]\nComo presidente do Real Madrid, Bernabéu conseguiu diversos títulos de grande importância: 1 Taça Intercontinental, 6 Copas da Europa, 16 Campeonatos Espanhóis, e 6 Copas da Espanha.\n[…]\nBernabéu foi presidente do Real Madrid até quando faleceu, a 2 de junho de 1978, em Madrid.\n[…]\nEm sua homenagem, o Estádio do clube ganhou o seu nome: Estádio Santiago Bernabéu, hoje considerado um estádio 5 estrelas pela UEFA e um dos maiores estádios do mundo.\n[…]\nFoi o 11.º presidente do Real Madrid CF.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Lei Pelé",
      "descricao": "Lei brasileira do esporte, sancionada em 1998, que previu o fim do passe dos jogadores de futebol."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A Lei Pelé, de 1998, que previu o fim do passe dos jogadores, leva esse nome porque o Rei ocupava qual cargo no governo?",
    "resposta": "Ministro do Esporte",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lei_Pelé"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lei_Pelé",
        "situacao": "ok",
        "texto": "A Lei 9.615 de 24 de março de 1998, mais conhecida como Lei Pelé ou Lei do passe livre , é uma norma jurídica brasileira sobre desporto, com base nos princípios presentes na Constituição, e cujo efeito mais conhecido foi ter mudado a legislação sobre o passe de jogadores de futebol, revogando a chamada Lei Zico (Lei nº 8.672, de 6 de julho de 1993). Enquanto a Lei Zico era uma lei sugestiva, a Lei\n[…]\nFoi idealizada quando Pelé era Ministro do Esporte e presidente do Conselho do INDESP (Instituto Nacional de Desenvolvimento do Desporto), e Hélio Viana de Freitas era vice-presidente do Conselho Deliberativo do Instituto, cargo correspondente ao de Secretário Executivo do Ministério.\n[…]\nCriada com o intuito de dar mais transparência e profissionalismo ao esporte nacional, a Lei Pelé instituiu o fim do passe nos clubes de futebol do Brasil, instituiu o direito do consumidor nos esportes, disciplinou a prestação de contas por dirigentes de clubes e a criação de ligas, federações e associações de vários esportes. Também determinou a profissionalização, com a obrigatoriedade da transformação dos clubes em empresas. Criou verbas para o esporte olímpico e paraolímpico.\n[…]\nAntes da Lei Pelé, eram os clubes os detentores dos contratos dos atletas, que era chamado de \"passe\" - daí, decorre que chamada \"Lei do Passe\". O \"passe\" era um instrumento jurídico que prendia o jogador ao clube além do contrato de trabalho. Quando existia o passe, os jogadores não podiam deixar seus clubes sem autorização dos clubes nem mesmo estando sem contrato – e portanto sem salário.\n[…]\nAté mesmo Pelé criticou em 2014 essa situação: \"Antes, o jogador ficava cinco, dez anos jogando no mesmo clube. Hoje não é mais assim. Muito empresário leva o jogador para a Ásia, Rússia e esquece ele lá, faz o que quiser. Então tem essa parte ruim, que o clube não é mais dono do jogador, o empresário é que manda.\""
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Bebeto",
      "descricao": "José Roberto Gama de Oliveira, atacante brasileiro campeão mundial em 1994, parceiro de ataque de Romário."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na Copa de 1994, Bebeto comemorou um gol contra a Holanda balançando os braços como se embalasse um bebê. O que motivou o gesto?",
    "resposta": "O nascimento do filho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bebeto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bebeto",
        "situacao": "ok",
        "texto": "José Roberto Gama de Oliveira (born 16 February 1964), known as Bebeto (Brazilian Portuguese: [beˈbɛtu]), is a Brazilian former professional football player who played as a forward. He entered politics in the 2010 Brazilian general elections and was elected to the Legislative Assembly of Rio de Janeiro representing the Democratic Labour Party.\n[…]\nWith 39 goals in 75 appearances for Brazil, Bebeto is the sixth highest goalscorer for his national team. He was the top scorer for Brazil at the 1989 Copa América when they won the tournament. At the 1994 FIFA World Cup, he formed a formidable strike partnership with Romário to lead Brazil to a record fourth World Cup title.\n[…]\nDuring the 1994 World Cup, Bebeto formed a formidable partnership with Romário, after they succeeded in putting their personal differences aside. Bebeto and Romário were fierce rivals in the Spanish League. Bebeto led the Spanish first division with 29 goals in 1992–93 and Romário led it with 30 goals in 1993–94. It was Romário who gave Bebeto the nickname Chorao, or Crybaby, for his habit of pouting to referees.\n[…]\nBebeto became a household name for his goal celebration in the 1994 World Cup in the United States. His wife had delivered their third child two days before a quarter-final match against the Netherlands in the scorching heat of Dallas. After scoring, Bebeto ran to the sideline, brought his arms together and began rocking an imaginary baby. Teammates Romário and Mazinho quickly joined in.\n[…]\nBebeto is married to Denise Oliveira, who played volleyball for Flamengo in 1988, with whom he has two sons and one daughter, Stéphannie who is married to Carlos Eduardo. His son, Mattheus, is a professional footballer. Bebeto's brother-in-law, Luiz Fernando Petra, was murdered in 2002, during a federal deputy election in Rio de Janeiro.\n[…]\nCopa del Rey: 1994–95"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bebeto",
        "situacao": "ok",
        "texto": "José Roberto Gama de Oliveira, mais conhecido como Bebeto (Salvador, 16 de fevereiro de 1964) é um ex-futebolista, ex-treinador e político brasileiro que atuava como atacante. Foi membro do Conselho de Administração do Comitê Organizador Local da Copa do Mundo da FIFA Brasil 2014.\n[…]\nApós quatro anos afastado de torneios pela Seleção, foi chamado para a Copa do Mundo de 1994 pelo seu grande desempenho no Deportivo La Coruña, realizando grande dupla com Romário. Na partida contra Camarões, válida pela primeira fase, marcou seu primeiro gol em copas. Nas oitavas-de-final, contra os anfitriões dos Estados Unidos, fez o gol da vitória, realizada no dia da independência estadunidense. Na comemoração, disse um famoso \"Eu te amo\" para Romário, que lhe dera o passe.\n[…]\nA dupla marcou junta na partida seguinte, uma dura quartas de final contra os Países Baixos: após dar a assistência para Romário inaugurar o placar, o próprio Bebeto aproveitou lançamento de Aldair, driblou Ed de Goeij e marcou o segundo, realizando sua famosa comemoração em homenagem ao filho Mattheus.\n[…]\nBebeto é casado com Denise de Oliveira, que conheceu quando ela treinava vôlei no Flamengo, desde 1988. O casal teve três filhos, Roberto Newton \"Bebeto Júnior\" (n. 1989), a modelo Stéphannie (n. 1992), e o jogador Mattheus (n. 1994). Mattheus inspirou uma célebre comemoração onde Bebeto simulava embalar o filho após marcar o segundo gol do Brasil contra os Países Baixos na Copa de 1994.\n[…]\nEm entrevista feita pelo programa Tá na área, de 22 de março de 2009, realizado pelo canal SporTV, Bebeto disse que em sua casa apenas o filho primogênito Roberto Newton é vascaíno.\n[…]\nCopa do Rei: 1994-95\n[…]\nCopa do Mundo FIFA: 1994\n[…]\nCopa da Amizade: 1992\n[…]\n1989: Copa América — 6 gols\n[…]\nBebeto foi capa do jogo-eletrônico FIFA 97.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Seleção Italiana de Futebol",
      "descricao": "Seleção nacional de futebol da Itália, campeã mundial em 1934, 1938, 1982 e 2006."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A seleção italiana joga de azul em homenagem à cor de qual dinastia que reinou na Itália?",
    "resposta": "Casa de Savoia",
    "distratores": [
      "Casa de Médici",
      "Casa de Bourbon",
      "Casa de Habsburgo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Italy_national_football_team",
      "https://en.wikipedia.org/wiki/Savoy_blue"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Italy_national_football_team",
        "situacao": "ok",
        "texto": "The Italy national football team (Italian: Nazionale di calcio dell'Italia) has represented Italy in men's international football since its first match in 1910. The team is controlled by the Italian Football Federation (FIGC), the governing body for football in Italy and a founding member of UEFA. Italy plays its home matches at various stadiums across the country, while its training center and te\n[…]\nUnder the initial guide of Fulvio Bernardini and later that of head coach Enzo Bearzot, a new generation of Italian players came to the international stage in the second half of the 1970s. At the 1978 World Cup, Italy was the only team in the tournament to beat the eventual champions and host team Argentina, and the Azzurri made it to the third-place final, where they were defeated by Brazil 2–1.\n[…]\nAfter a scandal in Serie A, where some national team players such as Paolo Rossi were prosecuted and suspended for match fixing and illegal betting, the Azzurri qualified for the second round of the 1982 World Cup after three uninspiring draws against Poland, Peru, and Cameroon. Having been loudly criticised, the Italian team decided on a press black-out from then on, with only coach Enzo Bearzot and captain Dino Zoff appointed to speak to the press.\n[…]\nOn 9 July 2006, the Azzurri won their fourth World Cup title after defeating France in the final. French captain Zinedine Zidane opened the scoring from the penalty spot in the seventh minute before Marco Materazzi scored from a corner kick, twelve minutes later. The score remained level and during extra-time and Zidane was sent off for headbutting Materazzi. Italy went on to win the penalty shootout 5–3, with all Italian players scoring their kicks.\n[…]\nIn honour of Italy winning a fourth World Cup, members of the squad were awarded the Italian Order of Merit of Cavaliere."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Savoy_blue",
        "situacao": "ok",
        "texto": "Savoy blue (Italian: blu Savoia) or Savoy azure (azzurro Savoia), also known as Italian blue (blu italiano), is a shade of saturated blue between peacock blue and periwinkle, lighter than peacock blue. Since the Middle Ages, it has been the colour of the House of Savoy, the royal dynasty of the Kingdom of Italy from 1861 to 1946, as well as of its predecessor state, the Kingdom of Sardinia–Piedmon\n[…]\nFor the officers, a blue sash (Sciarpa azzurra) was provided in the outfit, worn passing over the right shoulder and knotted on the left side. In 1572 this use was made obligatory for all the officers by Emmanuel Philibert, Duke of Savoy. Through various transformations, the Savoy blue sash is still the main insignia of the Italian armed forces' officers, who dress it both in ceremonial services and, sometimes, on guard. The Soldiers of the Royal Sardinian Army before 1848 wore a blue cockade.\n[…]\nOther uses in the Republican era of Savoy blue are the edge of the Italian presidential standard as well as on the institutional flags of some primary public offices (Prime Minister of Italy, minister and undersecretary of defence, high degrees of the Italian Navy and of the Italian Air Force), as well as on the distinctions of the presidents of the Italian provinces and on the aircraft used by the Frecce Tricolori.\n[…]\nIn the sporting field, the Savoy blue distinguishes almost all of the athletes who represent Italy internationally in any discipline: the origin of the use of this colour dates back to 6 January 1911, when the Italy national football team faced in Milan the Hungary national football team. The term blue shirt by now represents for metonymy the international appearance for Italy, and the athletes who represent the country are called azzurri.\n[…]\nFurthermore, since 2021, the color has been chosen as the livery color of the aircraft of the Italian flag carrier ITA Airways."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Italiana_de_Futebol",
        "situacao": "ok",
        "texto": "A Seleção Italiana de Futebol (em italiano: Nazionale di calcio dell'Italia) representa a Itália no futebol internacional masculino desde sua primeira partida, em 1910. A seleção é administrada pela Federação Italiana de Futebol (FIGC), entidade responsável pelo futebol na Itália e cofundadora e integrante da UEFA.\n[…]\nA equipe é conhecida como gli Azzurri (\"os Azuis\"), pois o azul-saboia é a cor tradicional das seleções nacionais que representam a Itália, em referência à cor da Casa de Saboia, que reinou sobre o Reino de Itália. Entre suas duas primeiras conquistas da Copa do Mundo, a Itália venceu o torneio olímpico de futebol, em 1936, e também havia conquistado anteriormente duas edições da Copa Internacional — em 1927–30 e 1933–35.\n[…]\nQuando a Itália voltou para casa, torcedores enfurecidos atiraram frutas e tomates podres contra o ônibus que transportava a equipe no aeroporto.\n[…]\nEm junho de 2025, após uma derrota por 3–0 para a Noruega na primeira partida das eliminatórias da Copa do Mundo de 2026, em Oslo, Spalletti foi demitido, e o ex-campeão mundial Gennaro Gattuso assumiu seu lugar. A estreia de Gattuso como commissario tecnico da Itália ocorreu em 5 de setembro, em uma vitória por 5–0 sobre a Estônia. Em novembro do mesmo ano, a Itália se classificou para a repescagem pela terceira vez consecutiva, após uma derrota por 4–1 para a Noruega em casa.\n[…]\nA Itália foi sorteada no Caminho A da repescagem e derrotou a Irlanda do Norte por 2–0 na semifinal, mas, em 31 de março de 2026, não conseguiu se classificar para a Copa do Mundo FIFA de 2026 após perder fora de casa para a Bósnia e Herzegovina nos pênaltis, depois de um empate por 1–1, marcando a terceira Copa do Mundo consecutiva para a qual não se classificou.\n[…]\n«Site oficial» (em italiano)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Copa do Mundo FIFA de 1950",
      "descricao": "Quarta Copa do Mundo, disputada no Brasil e vencida pelo Uruguai."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A Copa de 1950, no Brasil, aconteceu doze anos depois da edição anterior. Que acontecimento causou esse longo intervalo?",
    "resposta": "Segunda Guerra Mundial",
    "fonte": [
      "https://en.wikipedia.org/wiki/1950_FIFA_World_Cup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1950_FIFA_World_Cup",
        "situacao": "ok",
        "texto": "The 1950 FIFA World Cup was the fourth edition of the FIFA World Cup, the quadrennial international football championship for senior men's national teams. It was held in Brazil from 24 June to 16 July 1950.\n[…]\nThe World Cup was at risk of not being held for sheer lack of interest from the international community, until Brazil presented a bid at the 1946 FIFA Congress, offering to host the event on condition that the tournament take place in 1950 rather than the originally proposed year of 1949.\n[…]\nBoth Germany (still occupied and partitioned) and Japan (still occupied) were unable to participate. The Japan Football Association (suspended for failure to pay dues in 1945) and the German Football Association (disbanded in 1945 and reorganised in January 1950) were not readmitted to FIFA until September 1950, while the Deutscher Fußball-Verband der DDR in East Germany was not admitted to FIFA until 1952. The French-occupied Saarland had been accepted by FIFA two weeks before the World Cup.\n[…]\nThe draw, held in Rio on 22 May 1950, allocated the fifteen remaining teams into four groups:\n[…]\nFIFA originally resisted this proposal, but reconsidered when Brazil threatened to back out of hosting the tournament if this format was not used.\n[…]\nFIFA selected the following players for the 1950 FIFA World Cup All-Star Team.\n[…]\nIn 1986, FIFA published a report that ranked all teams in each World Cup up to and including 1986, based on progress in the competition and overall results. The rankings for the 1950 tournament were as follows:\n[…]\n1950 FIFA World Cup on FIFA.com\n[…]\nDetails at RSSSF; note that they often disagree with FIFA on goal scorers and times"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_do_Mundo_FIFA_de_1950",
        "situacao": "ok",
        "texto": "A Copa do Mundo FIFA de 1950 (português brasileiro) ou  Campeonato do Mundo da FIFA 1950 (português europeu) foi a quarta edição deste evento esportivo, um torneio internacional de futebol masculino organizado pela Federação Internacional de Futebol (FIFA), que ocorreu no Brasil, anfitrião da competição pela primeira vez.\n[…]\nMuitos atribuem essa situação a Getúlio Vargas e sua administração, que incentivava o esporte como extensão da educação. Contudo, deve-se destacar que o Brasil viu, em 1947, a Fifa adiar a competição em um ano para que as seleções da Europa pudessem se reestruturar — a Segunda Guerra Mundial arrasou o continente e deixou o mundo sem Copas desde 1938.\n[…]\nOs destaques dessa Copa foram: Roque Máspoli, Obdulio Varela, Alcides Ghiggia e Juan Schiaffino do Uruguai e Ademir de Menezes, Zizinho, Jair da Rosa Pinto e José Carlos Bauer do Brasil.Durante a década de 1940, não houvera a realização das copas previstas, pois a tragédia da Segunda Guerra Mundial mobilizara o mundo para o esforço de guerra e impedira a realização dos certames.\n[…]\nPor causa da Segunda Guerra Mundial, a Copa do Mundo não vinha sendo disputada desde 1938; as Copas do Mundo de 1942 e 1946 foram canceladas. Após a guerra, a Federação Internacional de Futebol desejava ressuscitar a competição assim que possível, e começaram a planejar a próxima copa. No pós-guerra, a maior parte do continente europeu estava em ruínas.\n[…]\nO Estádio Paulo Machado de Carvalho (Pacaembu) foi o segundo maior estádio da Copa com capacidade, na época, de 60 mil pessoas. Recebeu 6 jogos, dentre elas 1 da Seleção Brasileira.\n[…]\nDurante a Segunda Guerra Mundial, Jules Rimet transferiu a sede da Fifa de Paris para Zurique como forma de evitar a influência nazista. Falava-se que havia um plano de Hitler para levar a entidade a Berlim.\n[…]\nBrasil vs. Uruguai",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Final da Copa do Mundo de 2006",
      "descricao": "Partida final da Copa do Mundo FIFA de 2006, em Berlim, em que a Itália venceu a França nos pênaltis."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na final da Copa de 2006, em Berlim, por que o francês Zinédine Zidane foi expulso na prorrogação?",
    "resposta": "Deu uma cabeçada em Materazzi",
    "fonte": [
      "https://en.wikipedia.org/wiki/2006_FIFA_World_Cup_final"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2006_FIFA_World_Cup_final",
        "situacao": "ok",
        "texto": "The final match of the 2006 FIFA World Cup, the 18th edition of FIFA's competition for national football teams, was played at the Olympiastadion in Berlin, Germany, on 9 July 2006, and was contested between Italy and France. The event comprised hosts Germany and 31 other teams who emerged from the qualification phase, organised by the six FIFA confederations. The 32 teams competed in a group stage\n[…]\nIn April 2006, France's Zinedine Zidane, who at the time played for Spanish league side Real Madrid and also previously served for the Italian league side Juventus, announced his retirement from football, saying his playing career would end after the World Cup.\n[…]\nThis isn't justification, this isn't an excuse, but my passion, temper and blood made me react.\" In December 2009 and March 2010 interviews, Zidane had said that he would \"rather die than apologise\" to Materazzi for the headbutt in the final, but also admitted that he \"could never have lived with himself\" had he been allowed to remain on the pitch and help France win the match.\n[…]\nIn a January 2010 interview with the Italian newspaper la Repubblica, Materazzi said that both the headbutt and Thierry Henry's hand ball against Ireland, an episode known as \"Le Hand of Frog\" that allowed France to qualify to the 2010 World Cup, showed the \"disgusting\" side of football. In a December 2009 interview with France Football magazine, Zidane thought that there had been an over-reaction to Henry's hand ball episode.\n[…]\nIn April 2024, Materazzi recalled, \"I don't like it, because it doesn't do justice to what my career was. That episode should never have happened. In the tension of that final in Berlin, amidst the bickering and insults, Zidane offered me his shirt, and I said no, that I preferred his sister. Then he turned around and reacted as everyone remembers. I never saw Zinedine again.\"\n[…]\nFrance at the FIFA World Cup"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Final_da_Copa_do_Mundo_FIFA_de_2006",
        "situacao": "ok",
        "texto": "A partida final da Copa do Mundo FIFA de 2006 foi disputada em 9 de julho no Olympiastadion, na cidade de Berlim na Alemanha. A Itália venceu a França nos pênaltis após empate por 1–1 em 120 minutos de jogo. Um dos momentos mais comentados da partida foi a expulsão de Zinedine Zidane após agredir o jogador Marco Materazzi com uma cabeçada.\n[…]\nFoi a primeira partida final desde a Copa de 1994 de que o Brasil não participou e foi primeira disputada por duas seleções europeias desde a Copa de 1982, também vencida pela Itália.\n[…]\nApós a conquista do título, a seleção italiana subiu ao topo do Ranking da FIFA em fevereiro de 2007, o que não acontecia desde novembro de 1993.\n[…]\nUma versão especial da Adidas Teamgeist chamada de +Teamgeist Berlin foi utilizada na final da Copa do Mundo de 2006. O design era o mesmo da Teamgeist utilizada nos outros jogos da competição, mas ela possuía detalhes de cor dourada. Apenas 1600 bolas +Teamgeist Berlin foram produzidas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Premier League",
      "descricao": "Primeira divisão do futebol inglês, criada em 1992 no lugar da antiga First Division."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A Premier League, que substituiu a antiga primeira divisão do futebol inglês, foi criada em qual ano?",
    "resposta": "1992",
    "fonte": [
      "https://en.wikipedia.org/wiki/Premier_League"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Premier_League",
        "situacao": "ok",
        "texto": "The Premier League is a professional association football league in England and the highest level of the English football league system. Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League (EFL). Seasons usually run from August to May, with each team playing 38 matches: two against each other team, one home and one away. Most games are played\n[…]\nThe league held its first season in 1992–93. The 22 inaugural members of the new Premier League were:\n[…]\nFifty-one clubs have played in the Premier League from its inception in 1992, up to and including the 2026–27 season.\n[…]\nStadium attendances are a significant source of regular income for Premier League clubs. For the 2022–23 season, average attendances across the league clubs were 40,235 for Premier League matches with an aggregate attendance of 15,289,340. This represents an increase of 19,109 from the average attendance of 21,126 recorded in the Premier League's first season (1992–93).\n[…]\nAt the inception of the Premier League in 1992–93, just 11 players named in the starting line-ups for the first round of matches hailed from outside of the United Kingdom or Ireland. By 2000–01, the number of foreign players participating in the Premier League was 36% of the total. In the 2004–05 season, the figure had increased to 45%.\n[…]\nThe Premier League Golden Boot is awarded each season to the top scorer in the division. Former Blackburn Rovers and Newcastle United striker Alan Shearer holds the record for most Premier League goals with 260. Thirty-five players have reached the 100-goal mark. Since the first Premier League season in 1992–93, 23 players from 11 clubs have won or shared the top scorer title. Thierry Henry won his fourth overall scoring title by scoring 27 goals in the 2005–06 season.\n[…]\nList of English Football League managers\n[…]\nMedia related to FA Premier League at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Premier_League",
        "situacao": "ok",
        "texto": "A Premier League é uma liga profissional de futebol da Inglaterra que representa o mais alto nível do sistema de ligas do futebol inglês. Disputada por 20 clubes, ela opera em um sistema de promoção e rebaixamento com a EFL Championship. As temporadas normalmente vão de agosto a maio, com cada equipe jogando 38 partidas: duas contra cada adversário, uma em casa e outra fora de casa. A maioria dos \n[…]\nA competição foi fundada como FA Premier League em 20 de fevereiro de 1992, após a decisão dos clubes da Primeira Divisão (a principal categoria desde 1888) de se desligarem da English Football League. Os times continuam sendo promovidos e rebaixados da EFL Championship a cada temporada. A Premier League é uma corporação gerida por um diretor executivo, com os clubes participantes atuando como acionistas.\n[…]\nA liga realizou sua primeira temporada em 1992–93. Os 22 membros inaugurais da nova Premier League foram:O primeiro gol da Premier League foi marcado por Brian Deane, do Sheffield United, em uma vitória por 2 a 1 contra o Manchester United. O Manchester United venceu a edição inaugural da nova liga, encerrando uma espera de 26 anos para voltar a ser campeão inglês.\n[…]\nFerguson esteve no comando do Manchester United desde novembro de 1986, sendo técnico por cinco anos da antiga Primeira Divisão da Football League e por todas as 21 primeiras temporadas da Premier League.\n[…]\nA Chuteira de Ouro da Premier League é concedida a cada temporada ao artilheiro da divisão. O ex-atacante do Blackburn Rovers e do Newcastle United, Alan Shearer, detém o recorde de mais gols marcados na Premier League, com 260 gols. Trinta e três jogadores já atingiram a marca de 100 gols. Desde a primeira temporada da Premier League, em 1992–93, 23 jogadores de 11 clubes diferentes conquistaram ou dividiram o título de artilheiro.\n[…]\nCampeonato Inglês - 4ª Divisão\n[…]\nCampeonato Inglês - 5ª Divisão\n[…]\nNorthern Premier League",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Futebol feminino no Brasil",
      "descricao": "Prática do futebol por mulheres no Brasil, proibida por decreto entre 1941 e 1979."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Proibido por decreto no Brasil em 1941, o futebol feminino só voltou a ser permitido em qual década?",
    "resposta": "Anos 1970, em 1979",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Futebol_feminino_no_Brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Futebol_feminino_no_Brasil",
        "situacao": "ok",
        "texto": "O futebol feminino no Brasil, embora não seja tão popular quanto o futebol masculino, cresce em popularidade desde os anos 2000.\n[…]\nDevido ao forte e contínuo estigma social, o futebol feminino brasileiro não contou durante boa parte de sua história com um grande apoio e visibilidade. Existe uma crença machista no país de que o futebol não é um esporte para mulheres. Era ilegal para as mulheres jogar futebol no Brasil de 1941 a 1979, por imposição do Decreto-Lei Federal do Brasil 3199 de 1941, publicado pelo então presidente Getúlio Vargas.\n[…]\nEsta lei não foi rigorosamente mantida, pois algumas mulheres continuaram a jogar. Na década de 1970, o futebol feminino estava ganhando popularidade em todo o mundo; isso inspirou vários protestos feministas no Brasil. Eventualmente, a proibição do futebol feminino no Brasil foi finalmente suspensa em 1979, após atletas de judô se inscreverem para o mundial da Argentina com nomes masculinos.\n[…]\nTaça Brasil de Futebol Feminino (descontinuado)\n[…]\nCopa do Brasil\n[…]\nSupercopa do Brasil\n[…]\nFutebol no Brasil\n[…]\nSeleção Brasileira de Futebol Feminino\n[…]\nCopa do Mundo FIFA de Futebol Feminino\n[…]\nCopa do Mundo de Futebol Feminino de 2027\n[…]\nBonfim, Aira Fernandes (6 de setembro de 2019). Football Feminino entre festas esportivas, circos e campos suburbanos: uma história social do futebol praticado por mulheres da introdução à proibição (1915-1941) (Dissertação de Mestrado). Centro de Pesquisa e Documentação de História Contemporânea do Brasil da Fundação Getúlio Vargas. Consultado em 27 de junho de 2025. Cópia arquivada em 9 de junho de 2025"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Copa do Mundo FIFA de 2010",
      "descricao": "Décima nona Copa do Mundo, disputada na África do Sul e vencida pela Espanha."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2010, qual país sediou a primeira Copa do Mundo disputada no continente africano?",
    "resposta": "África do Sul",
    "fonte": [
      "https://en.wikipedia.org/wiki/2010_FIFA_World_Cup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2010_FIFA_World_Cup",
        "situacao": "ok",
        "texto": "The 2010 FIFA World Cup was the 19th FIFA World Cup, the world championship for men's national football teams. It took place in South Africa from 11 June to 11 July 2010. The bidding process for hosting the tournament finals was open only to African nations. In 2004, the international football federation, FIFA, selected South Africa over Egypt and Morocco to become the first African nation to host\n[…]\nDuring 2006 and 2007, rumours circulated in various news sources that the 2010 World Cup could be moved to another country. Franz Beckenbauer, Horst R. Schmidt, and, reportedly, some FIFA executives expressed concern over the planning, organisation, and pace of South Africa's preparations. FIFA officials repeatedly expressed their confidence in South Africa as host, stating that a contingency plan existed only to cover natural catastrophes, as had been in place at previous FIFA World Cups.\n[…]\nOnly 145 goals were scored at South Africa 2010, the lowest of any FIFA World Cup since the tournament switched to a 64-game format. This continued a downward trend since the first 64-game finals were held 12 years earlier, with 171 goals at France 1998, 161 at Korea/Japan 2002 and 147 at Germany 2006.\n[…]\nSome local vendors felt cheated out of an opportunity for financial gain and spreading South African culture in favour of multinational corporations.\n[…]\nIn a December 2010 Quality Progress, FIFA President Blatter rated South Africa's organisational efforts a nine out of 10 scale, declaring that South Africa could be considered a plan B for all future competitions. The South African Quality Institute (SAQI) assisted in facility construction, event promotion, and organisations. The main issue listed in the article was lack of sufficient public transportation.\n[…]\nWaka Waka (This Time for Africa), the official song of the 2010 FIFA World Cup\n[…]\n2010 FIFA World Cup South Africa , FIFA.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_do_Mundo_FIFA_de_2010",
        "situacao": "ok",
        "texto": "Copa do Mundo (português brasileiro) ou Campeonato do Mundo de Futebol (português europeu) FIFA de 2010 foi a décima nona edição da Copa, que ocorreu de 11 de junho até 11 de julho. O evento foi sediado na África do Sul, tendo partidas realizadas em 9 cidades. Trinta e duas seleções nacionais foram qualificadas para participar desta edição do campeonato, sendo 13 delas europeias, 8 americanas, 6 a\n[…]\nA primeira Copa do Mundo FIFA sob rotação continental (processo de alternar o país ou países onde se realiza a prova entre membros de cada confederação) foi a Copa do Mundo FIFA de 2010.[carece de fontes]?\n[…]\nA Copa na África do Sul, por ser a primeira Copa do Mundo FIFA em continente africano, causou um grande impacto sócio-econômico no continente e principalmente no país sede.\n[…]\nA África do Sul construiu cinco novos estádios de futebol em preparação para a Copa do Mundo FIFA de 2010. Foi a primeira vez da história do país que a região teve estádios especialmente dedicados ao futebol. Sob o antigo governo do apartheid, os estádios eram construídos exclusivamente para o rúgbi e o críquete.\n[…]\nUma delegação da Federação Internacional de Futebol completou uma primeira visita à África do Sul depois que o país foi escolhido como sede da Copa do Mundo de 2010. Os dirigentes disseram em seguida que vários aspectos técnicos e legais foram debatidos antes de os membros da FIFA deixarem o país. Um comitê de quatro pessoas, do qual Jordaan era um dos integrantes, foi composto para acertar a organização local.\n[…]\nBlazer afirmou: \"Eu e outros do Comitê Executivo aceitamos receber propina em conjunção à eleição da África do Sul como país-sede da Copa do Mundo de 2010.\" Em 6 de junho de 2015, o jornal britânico The Daily Telegraph publicou uma matéria em que o Marrocos teria vencido a disputa em número de votos, mas teria sido substituído irregularmente pela África do Sul.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Tragédia do Sarriá",
      "descricao": "Derrota do Brasil para a Itália por 3 a 2 no estádio Sarriá, em Barcelona, na Copa do Mundo de 1982."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Na Copa de 1982, na Espanha, quem marcou os três gols da Itália na vitória por três a dois sobre o Brasil?",
    "resposta": "Paolo Rossi",
    "distratores": [
      "Marco Tardelli",
      "Alessandro Altobelli",
      "Francesco Graziani"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil_v_Italy_(1982_FIFA_World_Cup)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_v_Italy_(1982_FIFA_World_Cup)",
        "situacao": "ok",
        "texto": "Italy v Brazil was a football match that took place between Brazil and Italy at Estadio Sarriá, Barcelona on 5 July 1982. It was the final second round group stage match for Group C in the 1982 FIFA World Cup. The match was won by Italy 3–2, with Italian striker Paolo Rossi scoring a hat-trick. The result eliminated Brazil from the tournament while Italy would go on to win it. The match has been d\n[…]\nPaolo Rossi opened the scoring when he headed in Antonio Cabrini's cross with just five minutes played. Sócrates equalised for Brazil seven minutes later. In the twenty-fifth minute Rossi stepped past Júnior, intercepted a pass from Cerezo across the Brazilians' goal, and drilled the shot home. The Brazilians threw everything in search of another equaliser, while Italy defended bravely.\n[…]\nOn 68 minutes, Falcão collected a pass from Júnior and as Cerezo's dummy run distracted three defenders, fired home from 20 yards out. Now Italy had gained the lead twice thanks to Rossi's goals, and Brazil had come back twice.\n[…]\nAt 2–2, Brazil would have been through on goal difference, but in the 74th minute, a poor clearance from an Italian corner kick went back to the Brazilian six-yard line where Rossi and Francesco Graziani were waiting. Both aimed at the same shot, with Rossi connecting to score a hat-trick and send Italy into the lead for good. In the 86th minute, Giancarlo Antognoni scored a fourth goal for Italy, but it was wrongly disallowed for offside.\n[…]\nAccording to Luizinho, Brazil's centre back in 1982, the defeat changed Brazilian coaches' way of thinking, leading to a new, destructive philosophy based on more tactical, physical, defensive, and counterattacking football, possessing similarities with the style of football played by the Italians against the Brazilians.\n[…]\nThen Rossi had three touches and scored a hat-trick. Football as we know it died on that day.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trag%C3%A9dia_do_Sarri%C3%A1",
        "situacao": "ok",
        "texto": "Tragédia do Sarriá foi como ficou conhecida a partida Brasil 2 – 3 Itália, pela segunda fase da Copa do Mundo de 1982. O jogo, considerado um dos maiores da história do futebol, foi disputado em 5 de julho de 1982, no Estádio Sarriá, que deu origem ao seu apelido.\n[…]\nOutra corrente prefere dar crédito à qualidade da seleção italiana, defendendo a ideia de que era uma equipe melhor, apesar de seu futebol defensivo.\n[…]\nNa Copa do Mundo de 1982, as chamadas \"quartas de finais\" foi organizada de forma diferente do mata-mata tradicional. Foram formados quatro grupos com três equipes cada. O Brasil caiu no Grupo 3, ao lado de Itália e Argentina. A Argentina, do jovem Maradona, perdeu por 2x1 para os italianos e por 3x1 para os brasileiros. Por conta deste melhor saldo de gols, o Brasil começaria a partida com a vantagem de um empate para se classificar para as semifinais.\n[…]\nA Itália havia apresentado um futebol elogiado na Copa do Mundo FIFA de 1978, com diversos jogadores jovens e técnicos. Porém, em 1982, a Itália estava em crise com a torcida e imprensa. O técnico Enzo Bearzot foi criticado por não ter convocado para a copa Evaristo Beccalossi, da Inter, e Roberto Pruzzo, da Roma, o artilheiro dos dois últimos campeonatos italianos, preferindo Paolo Rossi que vinha de uma suspensão de dois anos, decorrente de seu envolvimento no escândalo Totonero 1980.\n[…]\nO Brasil era amplamente favorito. Antes do confronto, Bearzot afirmara que o \"Brasil é o único time com pelo menos 16 estrelas e sem fraquezas\".\n[…]\nPaolo Rossi descreveu o clima no vestiário italiano: \"A tensão antes do jogo. Eu estava nervoso, ansioso. Eu sabia que todos estavam esperando grandes coisas de mim, mas eu ainda não tinha conseguido fazer nada de bom. Apenas críticas, performances ruins.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Hino da Liga dos Campeões",
      "descricao": "Hino oficial da Liga dos Campeões da UEFA, composto por Tony Britten em 1992."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O hino da Liga dos Campeões da Europa foi adaptado de uma peça feita para a coroação de um rei inglês. Quem compôs essa peça?",
    "resposta": "Georg Friedrich Händel",
    "distratores": [
      "Johann Sebastian Bach",
      "Antonio Vivaldi",
      "Henry Purcell"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/UEFA_Champions_League_Anthem"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/UEFA_Champions_League_Anthem",
        "situacao": "ok",
        "texto": "The UEFA Champions League Anthem, officially titled as simply the \"Champions League\", is the official anthem of the UEFA Champions League, written by English composer Tony Britten in 1992, and based on George Frideric Handel's Zadok the Priest. It was also the official anthem of the UEFA Women's Champions League from its creation in 2001 to the 2021 creation of an independent anthem. The complete \n[…]\nThe anthem was written by English composer Tony Britten in 1992, adapted from George Frideric Händel's anthem Zadok the Priest, which is traditionally performed at the coronation of British monarchs. In a 2013 newspaper interview, Britten stated that \"I had a commercials agent and they approached me to write something anthemic and because it was just after The Three Tenors at the World Cup in Italy so classical music was all the rage.\n[…]\nHooliganism was a major, major problem and UEFA wanted to take the game into a completely different area altogether. There's a rising string phase which I pinched from Handel and then I wrote my own tune. It has a kind of Handelian feel to it but I like to think it's not a total rip-off.\" The composing process took \"just a matter of days\". Britten also mentioned that he does not own the rights to the anthem, which are retained by UEFA, but he receives royalties when it is used.\n[…]\nPrior to the 2024–25 edition, the anthem was slightly refined by Tony Britten and re-recorded as part of a new brand identity for the UEFA Champions League.\n[…]\nThe anthem's chorus is played before each UEFA Champions League game as the two teams are lined up, as well as at the beginning and end of television broadcasts of the matches, and when the winning team lifts the trophy after the final. From the 2024-25 season, an upbeat, triumphant version of the anthem is played when the trophy is lifted.\n[…]\nUEFA Europa League Anthem\n[…]\nUEFA Champions League anthem on the UEFA home page"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hino_da_Liga_dos_Campe%C3%B5es_da_UEFA",
        "situacao": "ok",
        "texto": "O hino da Liga dos Campeões da UEFA, que é intitulado simplesmente de \"Champions League\", é uma adaptação feita por Tony Britten da música \"Zadok the Priest\" de George Frideric Handel, hino de coroação do monarca britânico, que conta a história da unção do Rei Salomão na Bíblia. Em 1992, a UEFA contratou Britten para criar um hino para a instituição a Liga dos Campeões.\n[…]\nEntão Britten, junto com a Royal Philharmonic Orchestra e o coro da Academia de St. Martin criaram o hino. É cantado em três idiomas diferentes: Inglês, alemão e francês, pois são os idiomas oficiais usados pela UEFA.\n[…]\nThe Champions\n[…]\nThese are the champions\n[…]\nThe champions!\n[…]\nOs campeões!\n[…]\nEstes são os campeões\n[…]\nOs campeões!\n[…]\n«São os melhores  São os maiores... São eles os campeões... Os mestres  Melhores  As grandes equipas  Os campeões!»\n[…]\n«UEFA Champions League anthem» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Conmebol",
      "descricao": "Confederação Sul-Americana de Futebol, entidade que organiza a Copa América e a Libertadores."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "A Conmebol, entidade que comanda o futebol da América do Sul, reúne quantas seleções nacionais?",
    "resposta": "Dez",
    "fonte": [
      "https://en.wikipedia.org/wiki/CONMEBOL"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/CONMEBOL",
        "situacao": "ok",
        "texto": "CONMEBOL or CSF (lit. 'South American Football Confederation') is the governing body of football in South America, and is responsible for organizing the continent's major international tournaments. It is the oldest of the six continental confederations of FIFA, and with 10 member associations, it has the fewest members of all the confederations. It is the only fully continental, land-based confede\n[…]\nCONMEBOL's headquarters are in Luque, Paraguay.\n[…]\nIts creation was ratified on 15 December of the same year, at the first Constitutional Congress in Montevideo. Over the years, six additional South American football associations joined CONMEBOL, the last of which was Venezuela in 1952.\n[…]\nThe following sovereign states and dependent territories in South America are not members of CONMEBOL. They are members of other confederations or are not affiliated with any confederation.\n[…]\nThe most prestigious CONMEBOL competition for men's national teams is the Copa América, which was first held in 1916. It is the only continental tournament which can include teams from other continents and confederations. CONMEBOL usually invites several teams from the AFC or CONCACAF to participate.\n[…]\nCONMEBOL organises the two top competitions for men's club teams in South America: the Copa Libertadores and the Copa Sudamericana. The Copa Sudamericana was launched in 2002 as a successor to the Supercopa Libertadores. A third competition, the Copa CONMEBOL, was founded in 1992 and was abolished in 1999. CONMEBOL runs the Copa Libertadores Femenina for women's club teams.\n[…]\nCONMEBOL Jubilee Awards\n[…]\nConfederation of North, Central American and Caribbean Association Football (CONCACAF)\n[…]\nConfederation of African Football (CAF)\n[…]\nAsian Football Confederation (AFC)\n[…]\nOceania Football Confederation (OFC)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Confedera%C3%A7%C3%A3o_Sul-Americana_de_Futebol",
        "situacao": "ok",
        "texto": "A Confederação Sul-Americana de Futebol (em espanhol: Confederación Sudamericana de Fútbol), mais conhecida pelo acrônimo CONMEBOL ou CSF, é uma instituição esportiva internacional que organiza, desenvolve e controla competições de futebol na América do Sul. É a mais antiga das seis confederações continentais da FIFA. Os campeonatos mais conhecidos da CONMEBOL são a Copa Libertadores da América (d\n[…]\nEm 1916, após o sucesso de um campeonato realizado na Argentina em virtude das comemorações do centenário da independência desta, com a presença das seleções nacionais da Argentina, Chile, Uruguai e Brasil, o então dirigente uruguaio Héctor Rivadavia Gómez propõe a criação de uma entidade sul-americana de futebol. Assim, em 9 de julho de 1916, as confederações da Argentina, Chile, Uruguai e Brasil fundam a CONMEBOL.\n[…]\nApesar do caos social, econômico e político que o Chile passa nas últimas duas semanas, a entidade que organiza o futebol sul-americano não demonstra qualquer preocupação com a decisão de manter a final da Copa Libertadores da América no Estádio Nacional, em Santiago\".\n[…]\nDez associações nacionais de futebol pertencem à CONMEBOL, representando todos os estados independentes da América do Sul, exceto as federações ou associações nacionais do Suriname, da Guiana e da Guiana Francesa que estão afiliadas à CONCACAF (destas três, apenas as duas primeiras são afiliadas à FIFA).\n[…]\nDesde 2018, a CONMEBOL tenta viabilizar um projeto com a FIFA para aumentar o número de seleções afiliadas. Foram cogitados como possíveis novos membros a Guiana e o Suriname. Essa expansão está associada a alguns países da América do Sul querer ampliar a influência da CONMEBOL nos congressos da FIFA, já que, quanto mais membros, maior a quantidade de votos. É importante ressaltar que a CONMEBOL é a menor confederação de futebol em quantidade de membros (apenas 10).\n[…]\nConmebol TV\n[…]\nRanking CONMEBOL",
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
