Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Basquete** (tema **Esportes**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Jogo de cem pontos de Wilt Chamberlain",
      "descricao": "Partida de 2 de março de 1962 em que Wilt Chamberlain, do Philadelphia Warriors, marcou cem pontos contra o New York Knicks."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1962, Wilt Chamberlain marcou cem pontos num só jogo, disputado numa cidade da Pensilvânia famosa pelo chocolate. Que cidade é essa?",
    "resposta": "Hershey",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wilt_Chamberlain%27s_100-point_game"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wilt_Chamberlain%27s_100-point_game",
        "situacao": "ok",
        "texto": "Wilt Chamberlain set the single-game scoring record in the National Basketball Association (NBA) by scoring 100 points for the Philadelphia Warriors in a 169–147 win over the New York Knicks on March 2, 1962, at Hershey Sports Arena in Hershey, Pennsylvania, United States. It is widely considered one of the greatest records in basketball history.\n[…]\nPomerantz in his book Wilt, 1962: The Night of 100 Points and the Dawn of a New Era wrote that Chamberlain's usual \"Dipper Dunk\" was \"a considerably less emphatic basket stuff, like a rock that barely ripples the pond.\" With less than a minute left in the game, Chamberlain set up in the post. Ruklick passed to Rodgers, who passed to Chamberlain close to the basket, but he missed the shot. Ted Luckenbill rebounded and passed it back to Chamberlain, who missed again.\n[…]\nThe radio postgame show reported the Warriors defeating the Knicks 169–150. However, the official scorer's report recorded the game as 169–147, a discrepancy that has never been explained. Chamberlain made 36 of 63 field-goals and 28 of 32 free throws, the latter a far better rate than his roughly 50% career average. In two earlier games at Hershey that season, Chamberlain had made a combined 27 of 38 free throws, 71 percent. The basket rims at the arena were aged, flimsy, and forgiving.\n[…]\nBalls would bounce off of typical firm rims, whereas balls near the rim in Hershey were apt to get a good roll and fall in. Playing all 48 minutes of the game, Chamberlain set NBA records for field goals attempted (63) and made (36), free throws made (28), most points in a quarter (31), and half (59). He averaged 73 points in four games that week, exceeding 60 in all of them.\n[…]\nKobe Bryant's 81-point game\n[…]\nBam Adebayo's 83-point game\n[…]\nList of career achievements by Wilt Chamberlain\n[…]\nVideo: Wilt's 100 Point Game at NBA.com. (Adobe Flash)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogo_de_100_pontos_de_Wilt_Chamberlain",
        "situacao": "ok",
        "texto": "Wilt Chamberlain estabeleceu o recorde de pontuação em jogo único da National Basketball Association (NBA) fazendo 100 pontos jogando pelo Philadelphia Warriors na vitória por 169 a 147 sobre o New York Knicks em 2 de março de 1962, na Hershey Sports Arena em Hershey, Pensilvânia. É amplamente considerado um dos maiores recordes no basquetebol.\n[…]\nCom 2:12 restantes, Chamberlain tinha 94 pontos e marcou em um fadeaway seu 96º ponto. Sua próxima cesta faltando 1:19 veio de um passe alto de York Larese para uma forte enterrada que era rara para Chamberlain. Gary M. Pomerantz em seu livro Wilt, 1962: The Night of 100 Points and the Dawn of a New Era escreveu que o comum \"Dipper Dunk\" de Chamberlain era \"consideravelmente menos enfático.\" Com menos de um minuto para o fim do jogo, Chamberlain se postou no garrafão.\n[…]\nRuklick disse que planejou perder o segundo lance livre na esperança que Chamberlain pudesse pegar o rebote e conseguir 102 pontos.\n[…]\nAs bordas da cesta na arena eram envelhecidas e frágeis. As bolas rebateriam em aros mais firmes, enquanto que bolas próximas do aro em Hershey eram capazes de rolar e cair para dentro da cesta. Jogando todos os 48 minutos do jogo, Chamberlain estabeleceu os recordes da NBA para tentativas de arremessos de quadra (63) e convertidos (36), lances livres convertidos (28), mais pontos em um quarto (31) e na metade do jogo (59).\n[…]\nRodgers terminou com 20 assitências no jogo e posteriormente disse: \"Foi o jogo mais fácil em conseguir assistências, tudo que eu tinha fazer era passar para o Wilt.\" Attles era especialista defensivo que raramente anotava pontos, ainda assim converteu 8 de 8 de quadra e um único lance livre. Posteriormente ele lamentou: \"No jogo onde eu literalmente não podia faltar, Wilt foi e marcou 100.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Primeiro jogo da história da NBA",
      "descricao": "Partida entre Toronto Huskies e New York Knickerbockers, em 1º de novembro de 1946, a primeira da liga que deu origem à NBA."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O primeiro jogo da história da NBA, em novembro de 1946, aconteceu fora dos Estados Unidos. Em qual cidade?",
    "resposta": "Toronto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Toronto_Huskies",
      "https://en.wikipedia.org/wiki/Basketball_Association_of_America"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toronto_Huskies",
        "situacao": "ok",
        "texto": "The Toronto Huskies were a team in the Basketball Association of America (BAA), which was a forerunner of the National Basketball Association (NBA), during the 1946–47 season. They were based in Toronto, Canada. The team compiled a 22–38 win–loss record in its only season before disbanding in the summer of 1947.\n[…]\nOn November 1, 1946, they hosted the first game in BAA history, losing 68–66 to the New York Knickerbockers before an opening night crowd of 7,090. Ossie Schectman scored the opening basket for the New York Knickerbockers against the Toronto Huskies.\n[…]\nNeither of the Huskies' head coaches (or their interim coaches) would coach another game in the BAA/NBA after their time in Toronto. Of the 20 players to make it to the floor for the Huskies, only five would go on to play 10 or more games in the BAA/NBA following the 1946–47 season: Sadowski, Mogus, Hermsen, Nostrand, and Dick Schulz. Hermsen was the last active NBA player from the Huskies roster, retiring in 1953 as a member of the Indianapolis Olympians.\n[…]\nReviving the Huskies name was originally considered at the time of selecting a name for Toronto's new NBA team in 1995 (marking a return of professional basketball to the city after a 48-year absence). However, management ruled that option out when it became apparent there was no way to design a suitable logo that didn't resemble that of the Minnesota Timberwolves, so they became the Toronto Raptors instead.\n[…]\nNevertheless, a group of fans have created a 'Bring back the Huskies' campaign, complete with a website, TorontoHuskies.org, with the intent of having the franchise revert to the historical 'Huskies' name.\n[…]\nToronto Raptors\n[…]\nToronto Huskies history and pictures.\n[…]\n\"1946–47 Toronto Huskies,\" Basketball-Reference.com, retrieved November 1, 2006"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Basketball_Association_of_America",
        "situacao": "ok",
        "texto": "The Basketball Association of America (BAA) was a professional basketball league in North America, founded in 1946 by team owners from the National Hockey League (NHL) and American Hockey League (AHL) at the time. Following its third season, the 1948–49 BAA season, the BAA merged with the National Basketball League (NBL) to form the National Basketball Association (NBA).\n[…]\nThe Philadelphia Warriors won the inaugural BAA championship in 1947, followed by the Baltimore Bullets and the Minneapolis Lakers in 1948 and 1949, respectively. Six teams from the BAA remain in operation in the NBA as of the 2024–25 season: three that co-founded the league in 1946 (Boston Celtics, New York Knicks, and Philadelphia Warriors) and three that joined it from the NBL in 1948 (Fort Wayne Pistons, Minneapolis Lakers, and Rochester Royals).\n[…]\nOn November 1, 1946, at Maple Leaf Gardens in Toronto, the Toronto Huskies hosted the New York Knickerbockers, which the NBA now regards as the league's first official game. In the opening game of the BAA, Ossie Schectman scored the opening basket for the Knickerbockers. The Eastern Division winner, the Washington Capitols, who had the best record with 49 wins, were defeated in the best-of-7 semifinal by the Western Division winner, the Chicago Stags.\n[…]\nBefore the season started, the Cleveland Rebels, Detroit Falcons, Pittsburgh Ironmen and Toronto Huskies folded, leaving the BAA with only seven teams. The Baltimore Bullets joined the league from the ABL, and were assigned to the Western Division along with the Washington Capitols to even the divisions. Prior to the start of the season, the league held its inaugural college draft on July 1, 1947. Each team played 48 regular season games.\n[…]\nNBA History at NBA.com\n[…]\nBAA history NBAHoopsonline"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Toronto_Huskies",
        "situacao": "ok",
        "texto": "O Toronto Huskies foi um time de basquetebol localizado em Toronto, Ontário, Canadá. Esteve ativo somente em uma temporada, a de 1946-47, onde disputou jogos na Basketball Association of America (predecessora da National Basketball Association), onde obteve uma sequência de 22-38. Contém a distinção de ter jogado a primeira partida da liga, quando perdeu 68-66 para o New York Knicks. Foi substituí",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Utah Jazz",
      "descricao": "Franquia da NBA sediada em Salt Lake City, fundada em 1974 em Nova Orleans."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Utah Jazz, de Salt Lake City, herdou o nome da cidade onde foi fundado, em 1974. Que cidade é essa, berço do jazz?",
    "resposta": "Nova Orleans",
    "fonte": [
      "https://en.wikipedia.org/wiki/Utah_Jazz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Utah_Jazz",
        "situacao": "ok",
        "texto": "The Utah Jazz are an American professional basketball team based in Salt Lake City. The Jazz compete in the National Basketball Association (NBA) as a member of the Northwest Division of the Western Conference. Since the 1991–92 season, the team has played its home games at the Delta Center, an arena they share with the Utah Mammoth of the National Hockey League (NHL).\n[…]\nThe franchise began as an expansion team in the 1974–75 season as the New Orleans Jazz, paying homage to New Orleans as the origin and cultural center of the jazz music genre. The Jazz relocated from New Orleans to Salt Lake City on June 8, 1979.\n[…]\nDeciding the Jazz were no longer viable in New Orleans, Battistone decided to move elsewhere. After scouting several new homes, he decided on Salt Lake City, even though it was a smaller market. Salt Lake City had previously been home to the Utah Stars of the American Basketball Association (ABA) from 1970 to 1976. The Stars had been extremely popular in the city and had even won an ABA title in their first season after moving from Los Angeles.\n[…]\nThe Jazz's attendance declined slightly after the team's move from New Orleans to Utah, partly because of a late approval for the move (June 1979) and also poor marketing in the Salt Lake City area.\n[…]\nList of the last five seasons completed by the Jazz. For the full season-by-season history, see List of Utah Jazz seasons.\n[…]\nThe name \"Jazz\" and the \"J\" musical note in the logo pay homage to New Orleans as the origin and cultural center of the jazz music genre. The franchise's original colors of purple, gold, and green are those most associated with Mardi Gras in New Orleans. During the Jazz's time in New Orleans from 1974 to 1979, the home uniform was white with gold trim, a purple \"Jazz\" script, and purple numbers. The road uniform was purple with gold trim, a white \"Jazz\" script, and white numbers."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Utah_Jazz",
        "situacao": "ok",
        "texto": "O Utah Jazz é um time norte-americano de basquete profissional com sede em Salt Lake City. O Jazz compete na National Basketball Association (NBA) como membro da Divisão Noroeste da Conferência Oeste. Desde a temporada de 1991-92, o time joga em casa no Delta Center.\n[…]\nA franquia começou a jogar como uma equipe de expansão na temporada de 1974-75 como o New Orleans Jazz (como uma homenagem à história do jazz em Nova Orleans). O Jazz se mudou de New Orleans para Salt Lake City em 8 de junho de 1979.\n[…]\nAlém disso, a equipe havia desistido dos direitos de Moses Malone para recuperar uma das três escolhas da primeira rodada usadas para a troca de Goodrich; a combinação de Johnson e Malone florescendo e os poucos anos ineficazes e arruinados por lesões de Goodrich em Nova Orleans tornaram essa transação uma das mais erradas da história da NBA.\n[…]\nDecidindo que o Jazz não era mais viável em Nova Orleans, Battistone decidiu se mudar para outro lugar. Depois de procurar várias casas novas, decidiu-se por Salt Lake City, embora fosse um mercado menor. Salt Lake City já havia sido a casa do Utah Stars da American Basketball Association (ABA) de 1970 a 1976. Os Stars eram extremamente populares na cidade e até ganharam um título da ABA em sua primeira temporada após se mudarem de Los Angeles.\n[…]\nO comparecimento de público diminuiu ligeiramente após a mudança da equipe de New Orleans para Utah, em parte devido a uma aprovação tardia para a mudança (junho de 1979) e também ao marketing ruim na área de Salt Lake City. A gestão da equipe fez a primeira de várias mudanças em 1979, trazendo Adrian Dantley em troca de Spencer Haywood. Dantley teve média de 28 pontos durante a temporada de 1979-80, permitindo ao time dispensar Pete Maravich no início do ano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Memphis Grizzlies",
      "descricao": "Franquia da NBA sediada em Memphis, no Tennessee, fundada em 1995 em Vancouver."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "De 1995 a 2001, antes de se mudar para o Tennessee, o Memphis Grizzlies foi sediado em qual cidade canadense?",
    "resposta": "Vancouver",
    "fonte": [
      "https://en.wikipedia.org/wiki/Memphis_Grizzlies"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Memphis_Grizzlies",
        "situacao": "ok",
        "texto": "The Memphis Grizzlies (referred to locally as the Grizz) are an American professional basketball team based in Memphis, Tennessee. The Grizzlies compete in the National Basketball Association (NBA) as a member of the Southwest Division of the Western Conference. The Grizzlies play their home games at FedExForum.\n[…]\nThe team was originally established in Canada as the Vancouver Grizzlies in the city of Vancouver, British Columbia, an expansion team that joined the NBA for the 1995–96 season. After the 2000–01 season concluded, the Grizzlies left Vancouver and moved to Memphis.\n[…]\nThe Vancouver Grizzlies applied to the NBA to relocate to Memphis, Tennessee on March 26, 2001, which was granted on July 3 leaving the Toronto Raptors as the only Canadian basketball team in the NBA. The team relocated following the 2000–01 season and were renamed the Memphis Grizzlies. After moving to Memphis, the team explored the possibility of changing \"Grizzlies\" to another name that better reflected the Memphis area. However, the community strongly supported the existing name.\n[…]\nIn the 2001 NBA draft, the Atlanta Hawks chose Pau Gasol as the third overall pick, trading him to the Grizzlies. Forward Shane Battier was selected with the sixth pick in the same draft by the Vancouver Grizzlies. They also acquired Jason Williams from the Sacramento Kings in exchange for Mike Bibby that same year. After the Grizzlies' first season in Memphis, Gasol won the NBA Rookie of the Year Award. However, despite the strong draft class, general manager Billy Knight was let go.\n[…]\nGeneral Motors (GM) Place (1995–2001)\n[…]\nPyramid Arena (2001–2004)\n[…]\nGrizz is the official mascot of the Memphis Grizzlies. He was first introduced in 1995 when the team was in Vancouver, British Columbia. Grizz was named 2011 NBA Mascot of the Year."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Memphis_Grizzlies",
        "situacao": "ok",
        "texto": "O Memphis Grizzlies é um time de basquete da National Basketball Association localizado em Memphis, Tennessee. O time foi fundado em 1995, como Vancouver Grizzlies, e esteve no Canadá de 1995 a 2001. As cores do uniforme são azul claro, azul médio, azul escuro, branco  e amarelo. O time nunca ganhou um campeonato da NBA.\n[…]\nÉ o único time do Tennessee nas quatro ligas norte-americanas que joga em Memphis (os outros três são de Nashville, o Nashville SC da MLS, o Tennessee Titans da NFL e o Nashville Predators da NHL).\n[…]\nEm 1993, a NBA resolveu expandir-se para o Canadá, onde a liga estava ausente desde o Toronto Huskies em 1946-7. Naquele mesmo ano Toronto ganhou o direito de ter outro time - mais tarde batizado Toronto Raptors - e em fevereiro de 1994, Arthur Griffiths, dono do time da NHL Vancouver Canucks, recebeu uma franquia para Vancouver, a jogar em um novo ginásio estava sendo construído, o General Motors Place.\n[…]\nApesar do nome inicial para o time ser Mounties, após reclamações da Real Polícia Montada do Canadá foram batizados Vancouver Grizzlies, inspirados no urso-cinzento que habita a Colúmbia Britânica. Ambos os times homenagearam o inventor do basquete, James Naismith com uma cor de uniforme (os Raptors com \"prata Naismith\" e os Grizzlies com \"azul Naismith\"). Antes da inauguração, Griffiths se associou ao empresário de Seattle John McCaw, Jr.\n[…]\nAssim, ao final da temporada da NBA de 2000-01 Heisley resolveu relocar o time. Após considerar propostas de Nova Orleans, St. Louis, Louisville, Anaheim e Dixmoor (um subúrbio de Chicago), o time se realojou em Memphis, Tennessee, após a liga aprovar a mudança em julho de 2001. Foi a primeira relocação desde 1985, quando o Sacramento Kings saiu de Kansas City para a Califórnia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Campeonato Mundial de Basquete Masculino de 1959",
      "descricao": "Terceira edição do Mundial masculino da FIBA, vencida pela seleção brasileira."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1959, a seleção brasileira masculina conquistou seu primeiro título mundial de basquete. Em que país foi disputado esse Mundial?",
    "resposta": "Chile",
    "fonte": [
      "https://en.wikipedia.org/wiki/1959_FIBA_World_Championship"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1959_FIBA_World_Championship",
        "situacao": "ok",
        "texto": "The 1959 FIBA World Championship was the 3rd FIBA World Championship—the international basketball world championship for men's national teams. It was hosted by Chile from 16 to 31 January 1959. Amaury Antônio Pasos was named the MVP.\n[…]\nThe final games were supposed to be conducted at the newly constructed Metropolitan Indoor Stadium, but because the venue was not finished in time, competition was postponed by a year from the original date. Organizers moved outdoors to the Estadio Nacional de Chile, where the events were watched at by a crowd of at least 16,000.\n[…]\nFinal round: All top two from preliminary round group play each other once. The team with the best record wins the championship.\n[…]\nFIBA official website\n[…]\nFIBA WC 1959\n[…]\nEuroBasket.com FIBA Basketball World Cup Page\n[…]\nFIBA profile"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campeonato_Mundial_de_Basquetebol_Masculino_de_1959",
        "situacao": "ok",
        "texto": "O Campeonato Mundial de Basquetebol de 1959 foi o terceiro torneio mundial de basquetebol organizado pela FIBA (Federação Mundial de Basquetebol). Foi sediado em Chile entre 16 e 31 de janeiro de 1959. As cidades-sedes foram: Antofagasta, Concepción, Temuco, Valparaíso e Santiago (Que realizou a final).\n[…]\nPrevisto para ser disputado em 1958, o Mundial só se realizou em 1959 porque o Chile não conseguiu concluir as obras para abrigar o torneio, que foi disputado numa quadra montada em cima da grama do Estádio Nacional.\n[…]\nA União Soviética, que pela primeira vez disputou a competição, só foi derrotada pelo Canadá, mas no Octogonal Final se negou a entrar em quadra para enfrentar Formosa ou China Nacionalista, assim como também o fez a Bulgária, por questões políticas, pois a China comunista reivindicava a Ilha de Formosa como território chinês. Com a recusa, os dois países, ambos sob o regime comunista, foram eliminados da competição pela FIBA.\n[…]\nCom isso, um dos favoritos ao título estava fora, e acabou sendo conquistado pelo Brasil.\n[…]\nDisputada em Temuco\n[…]\n25 de Janeiro (Disputa 12º lugar)\n[…]\n25 de Janeiro (Disputa 10º lugar)\n[…]\n25 de Janeiro (Disputa 8º lugar)\n[…]\nDisputado em Santiago, no estadio Nacional\n[…]\nAs seleções da União Soviética e Bulgária recusaram-se a enfrentar a seleção de Formosa por não reconhecerem o país. Com isso, foram eliminadas da competição.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Yao Ming",
      "descricao": "Pivô chinês de dois metros e vinte e nove que jogou na NBA pelo Houston Rockets de 2002 a 2011."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Antes de brilhar na NBA pelo Houston Rockets, o pivô chinês Yao Ming jogava no Sharks, time de qual cidade?",
    "resposta": "Xangai",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yao_Ming"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yao_Ming",
        "situacao": "ok",
        "texto": "Yao Ming (Chinese: 姚明; born September 12, 1980) is a Chinese basketball executive and former professional player. He played for the Shanghai Sharks of the Chinese Basketball Association (CBA), and then spent his entire nine-year National Basketball Association (NBA) career with the Houston Rockets. He was an eight-time NBA All-Star, and was named to the All-NBA Team five times. At 7 feet 6 inches \n[…]\nHe was also voted to be the starting center for the Western Conference in the 2004 NBA All-Star Game for the second straight year. Yao finished the season averaging 17.5 points and 9.0 rebounds a game. The Rockets made the playoffs for the first time in Yao's career, claiming the seventh seed in the Western Conference. In the first round, however, the Los Angeles Lakers eliminated Houston in five games. Yao averaged 15.0 points and 7.4 rebounds in his first playoff series.\n[…]\nOn November 9, 2007, Yao played against fellow Chinese NBA and Milwaukee Bucks player Yi Jianlian for the first time. The game, which the Rockets won 104–88, was broadcast on 19 networks in China, and was watched by over 200 million people in China alone, making it one of the most-watched NBA games in history. In the 2008 NBA All-Star Game, Yao was once again voted to start at center for the Western Conference.\n[…]\nFacing the Portland Trail Blazers in the first round, Yao finished with 24 points on 9-of-9 shooting in the first game, and the Rockets won 108–81, in Portland. The Rockets won all their games in Houston, and advanced to the second round of the playoffs for the first time since 1997, and the first time in Yao's career.\n[…]\nOn September 9, 2016, Yao was inducted into the Hall of Fame along with 4-time NBA champion Shaquille O'Neal and Allen Iverson. Continuing with the honors, on February 3, 2017, Yao's Number 11 jersey was retired by the Houston Rockets.\n[…]\nThe Yao Ming Foundation official website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Yao_Ming",
        "situacao": "ok",
        "texto": "Yao Ming (chinês: 姚明, pinyin: Yáo Míng; Xangai, 12 de setembro de 1980) é um ex-jogador de basquetebol chinês que atuava na NBA. Com 2,29 m de altura, ano de 2008, considerado um dos jogadores mais altos da história da NBA, atuando no time dos Houston Rockets. Foi a 1ª escolha do draft em 2002 pelo Houston. Em 2003 foi eleito o rookie do mesmo ano. Desde 2003 até 2007 participou em todos os All-St\n[…]\nYao, que nasceu em Xangai, começou a jogar pelos Sharks Xangai na época de juvenil, em 1997 ficando cinco temporadas seguidas, ate conseguir sua liberação junto a Associação Chinesa de Basquete (CBA).\n[…]\nO anúncio gerou mais de 1 milhão de comentários na rede social chinesa Weibo. Ao saber do anúncio, David Stern comentaria que Yao havia sido \"a ponte entre Estados Unidos e China\" e uma \"extraordinária mistura de talento, dedicação e aspirações humanitárias\" Yao foi escolhido para a turma de 2016 do Hall da fama do basquete de Springfield.\n[…]\nYao participou das Olimpíadas de 2000 e 2004 e na edição de 2008. Carregou a tocha olímpica na edição de 2008 e levou a bandeira da delegação chinesa na edição de 2004.\n[…]\nGanhou três vezes o FIBA Campeonato Asiático, nas edições de 2001(Xangai), 2003(Harbin) e 2005(Doha).\n[…]\nApós sua aposentadoria do basquete, Yao foi estudar Economia na Universidade Jiao Tong de Xangai. Ele se formou em 2018.\n[…]\nDurante uma entrevista coletiva, Yao Ming não conteve o riso. Sua fisionomia no momento do riso foi capturada em imagem e virou um  meme difundido na Internet.\n[…]\nSegundo time: 2007, 2009\n[…]\nTerceiro time: 2004, 2006, 2008\n[…]\nSegundo time: 2004, 2006\n[…]\nPrimeiro time: 2003\n[…]\nVencedor da medalha de ouro pela Seleção Chinesa 2001, 2003, 2005 Campeonato FIBA Asia\n[…]\nChinese Basketball Association Campeão: 2001-02",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Dennis Rodman",
      "descricao": "Ala-pivô americano, especialista em rebotes, campeão da NBA com o Detroit Pistons e o Chicago Bulls."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 2013, o ex-astro do Chicago Bulls Dennis Rodman fez uma visita polêmica a qual país, governado por um ditador fã de basquete?",
    "resposta": "Coreia do Norte",
    "distratores": [
      "Cuba",
      "Irã",
      "Rússia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dennis_Rodman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dennis_Rodman",
        "situacao": "ok",
        "texto": "Dennis Keith Rodman (born May 13, 1961) is an American former professional basketball player, professional wrestler, and actor. Renowned for his defensive and rebounding abilities, his biography on the official NBA website states that he is \"arguably the best rebounding forward in NBA history\". Nicknamed \"the Worm\", he played for the Detroit Pistons, San Antonio Spurs, Chicago Bulls, Los Angeles L\n[…]\nBefore the 1995–96 season, Rodman was traded to the Chicago Bulls for center Will Perdue to fill a void at power forward left by Horace Grant, who had left the team before the 1994–95 season. Rodman could not wear No. 10 jersey because the Bulls had retired it for Bob Love, and the NBA denied him the reversion 01, Rodman instead picked the number 91, whose digits add up to 10.\n[…]\nAfter the 1997–98 season, where Rodman and the Chicago Bulls defeated Karl Malone and the Utah Jazz in the 1998 NBA Finals, Rodman and Malone squared off again, this time in a tag team match at the July 1998 Bash at the Beach event. He fought alongside Hulk Hogan, and Malone tagged along with Diamond Dallas Page. In a poorly received match, the two power forwards exchanged \"rudimentary headlocks, slams and clotheslines\" for 23 minutes. Rodman bested Malone again as he and Hogan picked up the win.\n[…]\nIn July 2013, Rodman told Sports Illustrated: \"My mission is to break the ice between hostile countries. Why it's been left to me to smooth things over, I don't know. Dennis Rodman, of all people. Keeping us safe is really not my job; it's the black guy's [Obama's] job. But I'll tell you this: If I don't finish in the top three for the next Nobel Peace Prize, something's seriously wrong.\" On September 3, 2013, Rodman flew to Pyongyang for another meeting with Kim Jong Un.\n[…]\nRodman, Dennis (2013). Dennis the Wild Bull. Neighborhood Publishers. ISBN 978-0-61575-249-5.\n[…]\nDennis Rodman at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dennis_Rodman",
        "situacao": "ok",
        "texto": "Dennis Keith Rodman (Trenton, 13 de maio de 1961) é um ex-basquetebolista norte-americano que atuava como ala-pivô.\n[…]\nEsteve envolvido em relacionamentos de alto perfil com a cantora Madonna e a atriz Carmen Electra, e ganhou atenção internacional por sua amizade com o líder norte-coreano Kim Jong Un. Além de sua carreira na NBA, Rodman também disputou basquete profissional na Itália, Finlândia e Inglaterra, participou de eventos de luta profissional e de reality shows televisivos.\n[…]\nUma das facetas mais inusitadas de Rodman foi sua amizade com o líder norte-coreano Kim Jong Un, fã declarado de basquete americano. Entre 2013 e 2017, Rodman fez múltiplas visitas à Coreia do Norte.\n[…]\nEm 2013, após uma visita à Coreia do Norte, Rodman foi criticado quando afirmou em entrevista à cadeia televisiva CNN que Kenneth Bae, cidadão norte-americano detido na Coreia do Norte desde 2012, merecia a sentença de 15 anos de prisão.\n[…]\nRodman apareceu em diversos filmes e programas de TV, frequentemente representando a si mesmo. Também apareceu em vários reality shows e documentários, incluindo o aclamado documentário The Last Dance da Netflix, que detalhou a última temporada dos Chicago Bulls em 1997-98.\n[…]\nDennis Rodman é considerado por muitos especialistas como um dos maiores defensores da história do basquete profissional. Sua influência se estendeu além de suas estatísticas individuais, transformando a forma como o basquete defensivo era compreendido e apreciado.\n[…]\nChicago Bulls\n[…]\nhttp://www.dennisrodman.com/   Dennis Rodman - Website Oficial\n[…]\nDennis Rodman no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Dikembe Mutombo",
      "descricao": "Pivô congolês da NBA, famoso pelos tocos e pelo gesto de balançar o dedo indicador."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O pivô Dikembe Mutombo, famoso por balançar o dedo depois de cada toco, construiu um hospital em qual país, sua terra natal?",
    "resposta": "República Democrática do Congo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dikembe_Mutombo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dikembe_Mutombo",
        "situacao": "ok",
        "texto": "Dikembe Mutombo Mpolondo Mukamba Jean-Jacques Wamutombo (June 25, 1966 – September 30, 2024) was a Congolese-American professional basketball player who played center in the National Basketball Association (NBA) for 18 seasons. Nicknamed \"Mt. Mutombo\", he is commonly regarded as one of the best shot-blockers and defensive players of all time. Outside of basketball, he was known for his humanitaria\n[…]\nDikembe Mutombo Mpolondo Mukamba Jean-Jacques Wamutombo was born on June 25, 1966, in Kinshasa, Democratic Republic of the Congo to Samuel and Biamba Marie Mutombo. Dikembe had 9 siblings. His father worked as a school principal and then in Congo's department of education. Dikembe spoke French, Spanish, Portuguese and five Central African languages including Lingala and Tshiluba. He was a member of the Luba ethnic group.\n[…]\nOn April 13, 2011, the Johns Hopkins Bloomberg School of Public Health gave Mutombo the Goodermote Humanitarian Award \"for his efforts to reduce polio globally as well as his work improving the health of neglected and underserved populations in the Democratic Republic of Congo.\" Michael J. Klag, dean of the Bloomberg School of Public Health, said \"Mr. Mutombo is a winner in many ways—on the court and as a humanitarian.\n[…]\nHis work has improved the health of the people of the Democratic Republic of the Congo, and the Biamba Marie Mutombo Hospital and Research Center is a model for the region. Likewise, Mr. Mutombo has been instrumental in the fight against polio by bolstering vaccination efforts and bringing treatment to victims of the disease.\"\n[…]\nIn 2020, the Mutombo Foundation began construction of a modern pre-K through 6th-grade school in the Democratic Republic of Congo, named for his father, who died in 2003. The Samuel Mutombo Institute of Science & Entrepreneurship is located outside the city of Mbuji-Mayi.\n[…]\nDikembe Mutombo at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dikembe_Mutombo",
        "situacao": "ok",
        "texto": "Dikembe Mutombo Mpolondo Mukamba Jean-Jacques Wamutombo (Léopoldville, 25 de junho de 1966 – Atlanta, 30 de setembro de 2024) foi um basquetebolista congolês-americano que atuou como pivô.\n[…]\nDikembe acabou se casando com sua esposa, Rose, que também é da República Democrática do Congo. Eles têm seis filhos, quatro dos quais são adotados.\n[…]\nUm humanitário conhecido, Mutombo fundou a Fundação Dikembe Mutombo para melhorar as condições de vida em sua terra natal, a República Democrática do Congo, em 1997. Seus esforços renderam-lhe o Prêmio de Cidadania J. Walter Kennedy da NBA em 2001 e 2009. Por seus feitos, a Sporting News nomeou ele como um dos \"Bons rapazes do esporte\" em 1999 e 2000 e, em 1999, foi eleito um dos 20 vencedores do Prêmio de Serviço do Presidente, a maior homenagem do país para serviço voluntário.\n[…]\nMutombo juntou-se à sua segunda equipe da Unity Cup em 2012.\n[…]\nEm 13 de abril de 2011, a Escola de Saúde Pública Johns Hopkins Bloomberg concedeu a Mutombo o Prêmio Humanitário Goodermote \"por seus esforços para reduzir a poliomielite globalmente, bem como seu trabalho para melhorar a saúde de populações negligenciadas e carentes na República Democrática do Congo\". Michael J. Klag, reitor da Escola de Saúde Pública Bloomberg, disse: \"O Sr. Mutombo é um vencedor em muitos aspectos - na quadra e como humanitário.\n[…]\nSeu trabalho melhorou a saúde do povo da República Democrática do Congo e o Hospital e Centro de Pesquisa Biamba Marie Mutombo é um modelo para a região. Da mesma forma, o Sr. Mutombo tem sido fundamental na luta contra a pólio, reforçando os esforços de vacinação e levando tratamento às vítimas da doença.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "The Decision",
      "descricao": "Programa da ESPN, exibido ao vivo em julho de 2010, em que LeBron James anunciou o time que defenderia."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2010, num programa de TV ao vivo chamado The Decision, LeBron James anunciou que deixaria Cleveland para jogar em qual cidade?",
    "resposta": "Miami",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Decision_(TV_program)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Decision_(TV_program)",
        "situacao": "ok",
        "texto": "The Decision is a 2010 American television special that aired on ESPN on July 8, 2010, in which National Basketball Association (NBA) player LeBron James announced which team he would join for the 2010–11 season. James was an unrestricted free agent after playing his first seven NBA seasons for the Cleveland Cavaliers; he was a two-time NBA Most Valuable Player and a six-time All-Star. He grew up \n[…]\nDuring the special, James revealed that he would be signing with the Miami Heat.\n[…]\nOn July 8, 2010, ESPN aired a live special named The Decision that ran 75 minutes with commercials. At 9:28 p.m EDT, James announced that he would play with Miami in the 2010–11 season, teaming with the Heat's other All-Star free agent signees Dwyane Wade and Chris Bosh (who had joined from the Toronto Raptors).\n[…]\nAmong those in attendance for James' decision were Kanye West and a then 13-year-old Donovan Mitchell.\n[…]\nFollowing The Decision, Forbes listed him as one of the world's most disliked athletes. James relented about the TV special before the 2011–12 season: \"if the shoe was on the other foot and I was a fan, and I was very passionate about one player, and he decided to leave, I would be upset too about the way he handled it.\" James won two NBA championships with Miami: the first in 2011–12 in his second season with the Heat, and again the following season in 2012–13.\n[…]\nA poll by Davie-Brown Index after the special found that James's overall appeal dropped 11 percent, while his endorsement appeal dropped 2 percent, and trust in James dropped 3 percent. Another poll from ESPN and Seton Hall taken in October 2010 found that 51.6% of basketball fans said that James move to Miami didn't impact how they viewed him, with 32% of white fans and 65% of Black fans viewing James favorably.\n[…]\nLeBron James' The Decision on YouTube\n[…]\nESPN documentary to explore LeBron James' \"Decision\" — The Denver Post"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Regras originais do basquete",
      "descricao": "Documento datilografado de 1891 em que James Naismith estabeleceu as treze regras do basquete."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Leiloado em 2010, o documento original com as regras do basquete hoje fica em qual universidade americana, onde Naismith foi técnico?",
    "resposta": "Universidade do Kansas",
    "fonte": [
      "https://en.wikipedia.org/wiki/James_Naismith",
      "https://en.wikipedia.org/wiki/Kansas_Jayhawks_men%27s_basketball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/James_Naismith",
        "situacao": "ok",
        "texto": "James Naismith ( NAY-smith; November 6, 1861 – November 28, 1939) was a Canadian-American physical educator, physician, Christian chaplain, and sports coach, best known as the inventor of the game of basketball.\n[…]\nThe University of Kansas men's basketball program officially began following Naismith's arrival in 1898, seven years after Naismith drafted the sport's first official rules. Naismith was not initially hired to coach basketball, but rather as a chapel director and physical-education instructor. In those early days, the majority of the basketball games were played against nearby YMCA teams, with YMCAs across the nation having played an integral part in the birth of basketball.\n[…]\nThe original rules of basketball written by Naismith in 1891, considered to be basketball's founding document, were auctioned at Sotheby's, New York, in December 2010. Josh Swade, a University of Kansas alumnus and basketball enthusiast, went on a crusade in 2010 to persuade moneyed alumni to consider bidding on and hopefully winning the document at auction to give it to the University of Kansas. Swade eventually persuaded David G.\n[…]\nSwade's project and eventual success are chronicled in a 2012 ESPN 30 for 30 documentary \"There's No Place Like Home\" and in a corresponding book, The Holy Grail of Hoops: One Fan's Quest to Buy the Original Rules of Basketball. The University of Kansas constructed an $18 million building named the Debruce Center, which houses the rules and opened in March 2016.\n[…]\nJames Naismith's Original Rules of Basketball\n[…]\nBasketball scorekeeping\n[…]\nReprinted: Naismith, James (1996). Basketball : its origin and development. Lincoln: University of Nebraska Press. ISBN 9780803283701. OCLC 604260339."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kansas_Jayhawks_men%27s_basketball",
        "situacao": "ok",
        "texto": "The Kansas Jayhawks men's basketball program is the intercollegiate men's basketball program of the University of Kansas. The program is classified in the NCAA's Division I and the team competes in the Big 12 Conference. Kansas is renowned for having one of the most prestigious and historic intercollegiate basketball programs in North America.\n[…]\nIn 2008, ESPN ranked Kansas second on a list of the most prestigious programs of the modern college basketball era.\n[…]\nDuring the programs early years, the majority of the university's basketball games were played against nearby YMCA teams, with YMCAs across the nation having played an integral part in the birth of basketball. Other common opponents were Haskell and William Jewell. Under Naismith, the team began their rivalries with Kansas State, later deemed the Sunflower Showdown and Missouri, later deemed the Border War (officially changed to Border Showdown in 2004).\n[…]\nIn October 2010, lifelong Kansas basketball fan Josh Swade went on a mission to raise money to win James Naismith's original rules of basketball, which were put up for auction. Swade met Kansas alumnus David Booth who on December 10, 2010, purchased Dr. James Naismith's 13 original rules of the game at a Sotheby's auction in New York City for the sum of $4.3 million. The story was told in a documentary film called There's No Place Like Home, which was part of ESPN's 30 for 30 series.\n[…]\nHoch Auditorium was a 3,500 seat multi-purpose arena in Lawrence, Kansas. It opened in 1927. It was home to the University of Kansas Jayhawks basketball teams until Allen Fieldhouse opened in 1955.\n[…]\nThe Presidential Medal of Freedom is the highest civilian honor in the United States and is awarded by the president. The award has been given to two former Kansas basketball players for contributions outside of the University of Kansas."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/James_Naismith",
        "situacao": "ok",
        "texto": "James Naismith (Almonte, 6 de novembro de 1861 - Lawrence, 28 de novembro de 1940) foi um professor de educação física canadense e inventor do basquetebol.\n[…]\nImaginou um alvo que não ficasse no chão, para diferenciar-se do hóquei e o futebol. Foi então que Naismith inventou o  basquetebol. Sua invenção foi aperfeiçoada em 15 de janeiro de 1892, quando publicou as 13 regras para jogar basquetebol. No início pendurou um cesto de pêssegos a uma altura que julgou adequada, a 3,05 metros, altura que se mantém até hoje; já a quadra possuía, aproximadamente, metade do tamanho da atual.\n[…]\nFoi convidado pela Universidade do Kansas, no Kansas, para ser diretor da faculdade de Educação Física, mudando-se para Lawrence com a família em 1898. Em 1910 conseguiu o diploma de professor de educação física, foi designado Secretário da ACM e se mudou para Paris em 1917, onde residiu por 19 meses. Publicou o livro \"Les bases de la vie saine\".\n[…]\nPara as mulheres, o basquete veio um ano mais tarde, iniciou em 1892. Naquela época, a professora de educação física do Smith College, Senda Berenson, fez algumas adaptações às regras criadas por James Naismith. A primeira partida se deu em 1896.\n[…]\nEm 1898, Naismith se tornou o primeiro treinador de basquete da Universidade do Kansas. Ele compilou um recorde de 55-60 e é ironicamente o único treinador perdedor na história do Kansas. Naismith está no início de uma enorme e prestigiosa árvore de treinamento, já que ele treinou o treinador do Hall da Fama do Naismith Memorial Basketball: Phog Allen, que treinou os treinadores do Hall da Fama: Dean Smith, Adolph Rupp e Ralph Miller, que treinaram futuros treinadores.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Kobe Bryant",
      "descricao": "Ala-armador americano que jogou toda a carreira na NBA pelo Los Angeles Lakers, de 1996 a 2016."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Antes de virar astro do Lakers, Kobe Bryant passou boa parte da infância em qual país europeu, onde seu pai jogava basquete?",
    "resposta": "Itália",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kobe_Bryant"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kobe_Bryant",
        "situacao": "ok",
        "texto": "Kobe Bean Bryant (August 23, 1978 – January 26, 2020) was an American professional basketball player. Nicknamed \"the Black Mamba\", he played his entire 20-year career with the Los Angeles Lakers in the National Basketball Association (NBA). Bryant was a five-time NBA champion, two-time NBA Finals MVP, the 2008 NBA MVP, and two-time gold medal recipient on the 2008 and 2012 U.S. Olympic teams. He i\n[…]\nHe was fluent in English, Italian, and Spanish. The Lakers were his favorite team when he was growing up. He was also a fan of the New York Mets, wanting to be like Darryl Strawberry, and his hometown NFL team, the Philadelphia Eagles.\n[…]\nWhen Bryant was six years old, his father retired from the NBA and moved his family to Rieti, Italy to continue his professional basketball career for the team AMG Sebastiani Rieti. After two years, they moved to Reggio Calabria, then to Pistoia and Reggio Emilia. He became accustomed to his new lifestyle and learned to speak fluent Italian. He was especially fond of Reggio Emilia, which he described as a loving place and the source of some of his fondest childhood memories.\n[…]\n2 and appeared in commercials for Guitar Hero World Tour in 2008 and Call of Duty: Black Ops in 2010.\n[…]\nHe was on numerous video game covers including Kobe Bryant in NBA Courtside, NBA Courtside 2: Featuring Kobe Bryant, NBA Courtside 2002, NBA 3 on 3 featuring Kobe Bryant, NBA '07: Featuring the Life Vol. 2, NBA 09: The Inside, NBA 2K10 NBA 2K17 (Legend Edition; Legend Edition Gold) NBA 2K21 (Mamba Forever Edition), and NBA 2K24 (Kobe Bryant Edition and Black Mamba Edition).\n[…]\nIn 2009, Bryant signed a deal with Nubeo to market the Black Mamba Collection, sports/luxury watches ranging from $25,000 to $285,000. On February 9, 2009, he was featured on the cover of ESPN The Magazine. CNN estimated Bryant's endorsement deals in 2007 to be worth $16 million a year.\n[…]\nKobe Bryant at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kobe_Bryant",
        "situacao": "ok",
        "texto": "Kobe Bean Bryant (Filadélfia, 23 de agosto de 1978 — Calabasas, 26 de janeiro de 2020) foi um jogador profissional de basquetebol estadunidense. Jogou toda sua carreira como ala-armador no Los Angeles Lakers da National Basketball Association (NBA). Filho de Joe Bryant, ex-jogador do Philadelphia 76ers e antigo técnico do time Los Angeles Sparks da WNBA, é considerado um dos maiores jogadores de t\n[…]\nAos seis anos, Kobe mudou-se com a família para a Itália, quando o pai deixou a NBA para jogar na Europa. Kobe recebeu influências fortes do basquete, além disso, passou a falar italiano e espanhol fluentemente. Lá conheceu a estrela do basquete brasileiro Oscar Schmidt e virou fã do ala da Seleção Brasileira. Kobe também teve contato com o futebol e passou a torcer para o time do Milan.\n[…]\nO ex-jogador Jerry West era o General Manager do Los Angeles Lakers e, impressionado com a habilidade de Bryant, tratou logo de levá-lo ao time californiano. Kobe foi trocado pelo pivô Vlade Divac, ídolo do Lakers aquela época. Uma vez que Kobe ainda tinha 17 anos de idade, os pais tiveram que assinar com ele o contrato junto ao Los Angeles.\n[…]\nSua camisa nos Lakers era a número 8, mas a partir da temporada 2006–07 passou a ser a 24. Alguns dizem que por causa do número de Michael Jordan ter sido o 23, outros dizem que foi apenas uma \"volta no tempo\" do astro, que já havia utilizado essa numeração anteriormente na High School.\n[…]\nEm 13 de abril de 2016, jogou sua última partida na NBA contra o Utah Jazz, onde marcou 60 pontos (a melhor marca da temporada), na vitória dos Lakers por 101 a 96. Bryant ainda quebrou um recorde em sua despedida; tornou-se o jogador mais velho a anotar pelo menos 50 pontos num jogo na NBA. Após sua aposentadoria do basquete, Kobe continuou sua carreira como investidor e empresário, fundando sua própria marca de produtos esportivos, a Kobe Inc.\n[…]\nKobe Bryant no X",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Finais da NBA de 2019",
      "descricao": "Série decisiva da NBA de 2019, disputada entre Toronto Raptors e Golden State Warriors."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 2019, que time se tornou o primeiro de fora dos Estados Unidos a conquistar o título da NBA?",
    "resposta": "Toronto Raptors",
    "fonte": [
      "https://en.wikipedia.org/wiki/2019_NBA_Finals"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2019_NBA_Finals",
        "situacao": "ok",
        "texto": "The 2019 NBA Finals was the championship series of the National Basketball Association's (NBA) 2018–19 season and conclusion of the season's playoffs. In the best-of-seven playoff series, the Eastern Conference champion Toronto Raptors defeated the two-time defending NBA champion and Western Conference champion Golden State Warriors in six games to win their first NBA championship. The Raptors' vi\n[…]\nThe Raptors won the regular season series 2–0.\n[…]\nThompson scored a team-high 25 points, and the Warriors outscored the Raptors 18–0 to start the second half before holding off a late Toronto rally to win 109–104. Thompson had 18 points in the first half to keep Golden State in the game. They trailed by 11 with almost two minutes left until halftime before cutting it to 59–54 at the half. The Warriors' 18 unanswered points to begin the second half were the most in NBA Finals history to start a half.\n[…]\nNurse was criticized for calling a timeout with Toronto up 103–97 after going on a 12–2 run; the Splash Brothers' three 3-pointers came after the break. In its Last Two Minutes report, the NBA stated that Cousins should have been called for a shooting foul on Gasol with 49 seconds left in the game, which would have given Gasol two free throws with the Raptors trailing 106–103 at the time.\n[…]\nToronto Raptors\n[…]\n2 Toronto Transit Events Support buses along with a few bus shelters and police cars were destroyed.[1]\n[…]\nIn the 2019 offseason, Kawhi Leonard signed with the Los Angeles Clippers after only one season in Toronto. Nevertheless, the Raptors still finished the 2019–20 season 53–19 and were invited to the Orlando bubble during the summer. However, they lost in seven games to the Boston Celtics in the second round of the playoffs. The following season, the Raptors were forced to play all of their home games at Amalie Arena in Tampa due to Canadian travel restrictions brought on by the pandemic."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Finais_da_NBA_de_2019",
        "situacao": "ok",
        "texto": "As Finais da NBA de 2019 é a série final do campeonato dos playoffs de 2019 da National Basketball Association (NBA) para determinar o campeão da temporada 2018–19 .\n[…]\nNas finais, os campeões da Conferência Leste, o Toronto Raptors, enfrentaram os campeões da Conferência Oeste, o Golden State Warriors . A série \"melhor de sete\" começou em 30 de maio, com o sétimo e último jogo, se necessário, em 16 de junho. Os Raptors venceram a série por 4–2 em 13 de junho, conquistando o primeiro título da história da franquia.\n[…]\nOs Warriors terminaram a temporada regular de 2018-19 com um recorde de 57-25, vencendo a Divisão do Pacífico e assegurando a 1ª semente na Conferência Oeste. Durante uma derrota de prorrogação para o Los Angeles Clippers em novembro, Draymond Green amaldiçoou o companheiro de equipe Kevin Durant, que se tornou um agente livre após a temporada, e ele foi suspenso pela muito divulgada explosão.\n[…]\nDurante a offseason, os Raptors demitiram o treinador Dwayne Casey e substituíram-no por Nick Nurse . Eles também trocaram DeMar DeRozan e Jakob Pöltl por Kawhi Leonard e Danny Green . Leonard, que disputou apenas nove jogos pelo San Antonio Spurs em 2017-18 devido a uma tendinopatia no quadríceps esquerdo, tornou a temporada saudável e foi sistematicamente descansado por 22 jogos. Durante a temporada, Toronto também convocou Jonas Valanciunas para Marc Gasol .",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Finais da NBA de 2016",
      "descricao": "Série decisiva da NBA de 2016, disputada entre Cleveland Cavaliers e Golden State Warriors."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Nas finais da NBA de 2016, que time virou uma desvantagem de três jogos a um contra o Golden State Warriors e foi campeão?",
    "resposta": "Cleveland Cavaliers",
    "fonte": [
      "https://en.wikipedia.org/wiki/2016_NBA_Finals"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2016_NBA_Finals",
        "situacao": "ok",
        "texto": "The 2016 NBA Finals was the championship series of the National Basketball Association's (NBA) 2015–16 season and conclusion of the season's playoffs. In this best-of-seven series, the Eastern Conference champion Cleveland Cavaliers defeated the defending champion and Western Conference champion Golden State Warriors in seven games to win their first championship in franchise history. The series b\n[…]\nThe Warriors defeated the Cavaliers 110–77 in Game 2 to take a 2–0 series lead. Cleveland took a 28–22 lead about two minutes into the second quarter, but Golden State answered with a 20–2 run while outscoring the Cavs 30–16 the rest of the period. During the run, the Cavaliers' Kevin Love suffered a head injury while attempting to grab a defensive rebound. Love stayed throughout the remainder of the period but did not play the second half.\n[…]\nThe Cavaliers avenged their lopsided defeat to Golden State by routing the Warriors 120–90 in Game 3 to cut the series deficit to 2–1. Cleveland scored the game's first nine points en route to outscoring the Warriors 33–16 after one quarter, but Golden State rallied to trim Cleveland's lead as low as seven points on a couple of occasions before the Cavaliers settled for a 51–43 halftime lead. In the second half, Cleveland continued to extend their lead and outscored Golden State 69–47.\n[…]\nThe Cavaliers defeated the Warriors 115–101 in Game 6 to even the series 3–3. Cleveland scored the game's first eight points en route to outscoring Golden State 31–11 after the first quarter. The Warriors rallied to trim the Cavaliers' lead as low as eight points on a couple of occasions before the Cavs settled for a 59–43 halftime lead, with Tristan Thompson having his best performance of the series, registering a double-double in the first half alone.\n[…]\nCleveland Cavaliers\n[…]\nGolden State Warriors\n[…]\nCavaliers–Warriors rivalry\n[…]\nCleveland sports curse"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Copa Intercontinental de Basquete de 1979",
      "descricao": "Torneio mundial de clubes da FIBA disputado em 1979, em São Paulo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1979, com Oscar Schmidt no elenco, qual clube paulista foi campeão mundial interclubes de basquete?",
    "resposta": "Sírio",
    "fonte": [
      "https://en.wikipedia.org/wiki/1979_FIBA_Intercontinental_Cup",
      "https://pt.wikipedia.org/wiki/Esporte_Clube_S%C3%ADrio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1979_FIBA_Intercontinental_Cup",
        "situacao": "ok",
        "texto": "The 1979 FIBA Intercontinental Cup William Jones was the 13th edition of the FIBA Intercontinental Cup for men's basketball clubs. It took place at Ginásio do Ibirapuera, São Paulo, Brazil.\n[…]\nDay 1, October 2 1979\n[…]\nDay 2, October 3 1979\n[…]\nDay 3, October 4 1979\n[…]\nDay 4, October 5 1979\n[…]\nDay 5, October 6 1979\n[…]\n1979 Intercontinental Cup William Jones"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Esporte_Clube_S%C3%ADrio",
        "situacao": "ok",
        "texto": "O Esporte Clube Sírio é um clube esportivo, recreativo e social, e foi fundado como clube de futebol em 14 de julho de 1917 na cidade São Paulo. É um dos mais tradicionais clubes do país, e suas cores são vermelho e branco. Seu departamento de futebol para disputas oficiais foi desativado em 1935.\n[…]\nEsforço e dedicação de diretores e associados, com decisivo suporte de grandes beneméritos, fizeram do Sírio um patrimônio respeitável. As conquistas esportivas sucederam-se, especialmente as das equipes de basquete, culminando com a conquista do Campeonato Mundial Interclubes em 1979, com a grande equipe liderada por Oscar, Marcel e Marquinhos. Um título que certamente motivou muitos outros jovens dentro e fora do Sírio para a saudável prática esportiva.\n[…]\nEm 2000, o Esporte Clube Sírio concretizou uma importante etapa da sua trajetória com a inauguração do prédio de sua nova sede, incorporando mais 11.000m² à sua área construída. Atualmente, com 8.000 associados e integrado à vida paulistana, o clube é reconhecido entre os principais centros socioculturais e esportivos de São Paulo. Ocupa 56 mil metros quadrados em localização privilegiada, dispondo de ampla infraestrutura esportiva, uma sede social imponente e instalações completas para eventos.\n[…]\nO Esporte Clube Sírio, oferece uma ampla gama de modalidades esportivas para seus associados. Dentre as opções, destacam-se o basquetebol, modalidade que o clube possui grande tradição e reconhecimento, o futebol, tanto de campo quanto de salão, a natação, com diversas piscinas e programas para todas as idades, e o tênis, com quadras e aulas para iniciantes e avançados.\n[…]\nVice-campeão do Campeonato Mundial Interclubes: 2 vezes (1973 e 1981)\n[…]\nVice-campeão do Campeonato Brasileiro: 4 vezes (1969, 1971, 1981 e 1987).\n[…]\nPágina oficial do Sírio"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Basquete masculino nos Jogos Olímpicos de 2004",
      "descricao": "Torneio olímpico de basquete masculino disputado em Atenas, em 2004."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Nos Jogos de Atenas, em 2004, qual seleção sul-americana conquistou a medalha de ouro no basquete masculino?",
    "resposta": "Argentina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Basketball_at_the_2004_Summer_Olympics_%E2%80%93_Men%27s_tournament"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Basketball_at_the_2004_Summer_Olympics_%E2%80%93_Men%27s_tournament",
        "situacao": "ok",
        "texto": "The men's basketball tournament at the 2004 Summer Olympics in Athens, Greece began on 15 August and ended on 28 August, when Argentina defeated Italy 84–69 for the gold medal. The games were held at the Helliniko Olympic Indoor Arena and Olympic Indoor Hall.\n[…]\nArgentina, led by 13 points from both Manu Ginóbili and Fabricio Oberto, disposed of the home squad, led by the 12 points from Nikos Chatzivrettas.\n[…]\nThe United States was defeated by Argentina, suffering its third loss of the tournament, the most losses ever by the U.S. men's Olympic basketball team. Following the loss to Argentina, it was the first U.S. team to fail to win a gold medal since the 1988 Olympics. The United States would not lose three games in a major tournament again until the 2023 FIBA World Cup.\n[…]\nArgentina won its first ever Olympic gold medal in basketball and became the first Latin and Hispanic nation to obtain an Olympic gold medal in men's basketball.\n[…]\n2004 Olympics: Tournament for Men, FIBA Archive. Accessed June 24, 2011."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Basquete feminino nos Jogos Olímpicos de 1996",
      "descricao": "Torneio olímpico de basquete feminino disputado em Atlanta, em 1996, em que o Brasil ganhou a prata."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Nos Jogos de Atlanta, em 1996, a seleção feminina de Hortência e Paula ficou com a prata. Que seleção venceu a final?",
    "resposta": "Estados Unidos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Basketball_at_the_1996_Summer_Olympics_%E2%80%93_Women%27s_tournament"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Basketball_at_the_1996_Summer_Olympics_%E2%80%93_Women%27s_tournament",
        "situacao": "ok",
        "texto": "The women's tournament of basketball at the 1996 Olympics at Atlanta, United States began on July 21 and ended on August 4, when the United States defeated Brazil 111–87 for the gold medal.\n[…]\n1996 Olympic Games: Tournament for Women, FIBA Archive. Accessed June 25, 2011.\n[…]\nBasketball at the 1996 Summer Olympics – Women's basketball at Sports Reference"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Troféu Larry O'Brien",
      "descricao": "Troféu entregue ao time campeão da NBA, em forma de bola sobre uma cesta."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que joalheria de Nova York fabrica o troféu Larry O'Brien, entregue ao campeão da NBA?",
    "resposta": "Tiffany",
    "distratores": [
      "Cartier",
      "Bulgari",
      "Harry Winston"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Larry_O%27Brien_Championship_Trophy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Larry_O%27Brien_Championship_Trophy",
        "situacao": "ok",
        "texto": "The Larry O’Brien Championship Trophy is the championship trophy awarded annually by the National Basketball Association (NBA) to the winner of the NBA Finals since its introduction in 1977. The trophy depicts a basketball over a hoop and basket. It is named after Larry O'Brien, who served as NBA commissioner from 1975 to 1984, and as United States Postmaster General under President Lyndon B. John\n[…]\nThe trophy is two feet tall and is made of 15.5 pounds of sterling silver and vermeil with a 24 karat gold overlay. The basketball depicted on top is the same size as a real basketball. The trophy was designed by artist Victor Solomon for the NBA's 75th anniversary season and is manufactured by Tiffany & Co. The championship team maintains permanent possession of the trophy (although one exception exists, as described below).\n[…]\nThus, the team commissioned Tiffany to create replica versions of both Larry O'Brien trophies (and replacing the 1993–94 trophy, which was unexpectedly dropped and dented by reserve center Richard Petruška during the celebration), which were publicly unveiled on September 20, 2018.\n[…]\nIt was escorted by many former players, including Julius Erving, Kareem Abdul-Jabbar and Bill Russell. In May 2007, the NBA unveiled the NBA Headquarters on Second Life, an Internet-based virtual reality environment. With this launch, fans could take pictures with the championship trophy in the virtual Toyota Larry O'Brien Trophy Room. In August 2007, the trophy traveled to Hong Kong for the first time as part of the NBA Madness Asia Tour.\n[…]\nThis table lists the 18 teams that have won the Larry O' Brien Championship Trophy since it was introduced in 1977. It includes trophies awarded before it was renamed in 1984. For a complete history of NBA championship teams, see List of NBA champions.\n[…]\nList of NBA champions\n[…]\nMedia related to Larry O'Brien Championship Trophy at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Larry_O%27Brien_Championship_Trophy",
        "situacao": "ok",
        "texto": "O Larry O'Brien Championship Trophy (em português Troféu Larry O'Brien) é um troféu da National Basketball Association (NBA) concedido ao time que vence as finais da NBA e termina campeão da temporada.\n[…]\nO atual troféu foi criado em 1977 substituindo o seu predecessor, Walter A. Brown Trophy. O nome e o design novos começaram a ser utilizados a partir das finais da temporada de 1983-84, quando foi renomeado em homenagem a Larry O'Brien, comissionário da NBA entre 1975 e 1983. Antes de ingressar na NBA, O'Brien foi \"correio-mor\" dos Estados Unidos sob o comando de Lyndon B. Johnson entre 1965 e 1968.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Slam Dunk",
      "descricao": "Mangá japonês de basquete publicado de 1990 a 1996, sobre o time do colégio Shohoku."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Quem criou o mangá Slam Dunk, sobre um time de basquete de colégio no Japão?",
    "resposta": "Takehiko Inoue",
    "fonte": [
      "https://en.wikipedia.org/wiki/Slam_Dunk_(manga)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Slam_Dunk_(manga)",
        "situacao": "ok",
        "texto": "Slam Dunk (stylized in all caps) is a Japanese manga series written and illustrated by Takehiko Inoue. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from October 1990 to June 1996, with the chapters collected into 31 tankōbon volumes. The story follows Hanamichi Sakuragi, a brash and impulsive high school student who joins a basketball team at Shohoku High School, locate\n[…]\nTakehiko Inoue was inspired to create Slam Dunk from his love of basketball, which he has had since high school. Before starting Slam Dunk, he created a one-shot manga titled Aka ga Suki (赤が好き), which was published in Weekly Shōnen Jump Summer Special in 1990. The one-shot featured an early prototype of Hanamichi Sakuragi and Haruko Akagi, with a story and character dynamics that laid the groundwork for Slam Dunk.\n[…]\nWritten and illustrated by Takehiko Inoue, Slam Dunk was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from October 1, 1990, to June 17, 1996. The 276 individual chapters were originally collected in 31 tankōbon volumes under Shueisha's Jump Comics imprint, with the first being published on February 8, 1991, and the final volume on October 3, 1996. It was later reassembled into 24 kanzenban volumes under the Jump Comics Deluxe imprint from March 19, 2001, to February 2, 2002.\n[…]\nA novel depicting an original story written by Yoshiyuki Suga was published on December 2, 1994. Illustrations from Slam Dunk are included in the art book Inoue Takehiko Illustrations, which was published on June 4, 1997, and Plus/Slam Dunk Illustrations 2, which followed on April 3, 2020. Slam Dunk Shōri-gaku, a book written by sports psychologist Shuichi Tsuji on the \"Psychology of Winning\" and using Slam Dunk as a reference, was published on October 5, 2000.\n[…]\nSlam Dunk Scholarship website at Shueisha (in Japanese)\n[…]\nSlam Dunk (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Slam_Dunk",
        "situacao": "ok",
        "texto": "Slam Dunk (スラムダンク, Suramu Danku) é uma série de mangá escrita e ilustrada por Takehiko Inoue. A história é sobre um time de basquete da escola secundária japonesa Shōhoku. O mangá foi serializado na revista Weekly Shōnen Jump de 1990 até 1996, com os capítulos compilados em 31 volumes tankōbon e publicados pela editora Shueisha.\n[…]\nEm 2010, Inoue recebeu elogios especiais da Associação de Basquetebol do Japão por ajudar a popularizar o basquete no Japão.\n[…]\nInoue tornou-se inspirado para fazer Slam Dunk porque ele gostava de basquete desde seus anos de colégio. Depois que Inoue começou Slam Dunk, ele ficou surpreso quando ele começou a receber cartas de leitores que diziam que começaram a jogar o esporte devido ao mangá. Seu editor disse-lhe o mesmo \"basquete era um tabu neste mundo\". Devido a estas cartas, decidiu que queria desenhar os melhores jogos de basquete na série.\n[…]\nCom a série, Inoue queria que os leitores se sentissem realizados, bem como o amor para o esporte. Pensando que o seu sucesso como um artista de mangá era sendo em grande parte devido ao basquete, Inoue organizou um projeto intitulado Slam Dunk Scholarship que dá bolsas de estudo para estudantes japoneses, assim aumentando sua popularidade no Japão.\n[…]\nContudo, quando perguntado sobre a resposta dos leitores para o basquetebol, Inoue comentou que apesar de Slam Dunk é tecnicamente um mangá de basquete, a sua história poderia ter sido feita com outros esportes como futebol. Ele também acrescentou que a obra de arte para o mangá foi muito típico em comparação com seus trabalhos mais recentes, como Real.\n[…]\nEm 2018 recebeu uma Nova Edição Especial completa em 20 volumes contendo novas ilustrações de capa desenhadas pelo próprio Takehiko Inoue.\n[…]\nSlam Dunk (mangá) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Seleção Lituana de Basquete nos Jogos de 1992",
      "descricao": "Equipe da Lituânia que ganhou o bronze no basquete masculino em Barcelona, em 1992, logo após a independência."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1992, a seleção da Lituânia subiu ao pódio olímpico com camisetas coloridas pagas por qual banda de rock americana?",
    "resposta": "Grateful Dead",
    "distratores": [
      "The Doors",
      "Jefferson Airplane",
      "Aerosmith"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Other_Dream_Team",
      "https://en.wikipedia.org/wiki/Lithuania_men%27s_national_basketball_team"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Other_Dream_Team",
        "situacao": "ok",
        "texto": "The Other Dream Team (Lithuanian: Kita svajonių komanda) is a documentary film directed by Marius A. Markevičius. It covers the inspirational story of the 1992 Lithuania national basketball team and their journey to the bronze medal at the 1992 Summer Olympics in Barcelona. The film not only looks at the Lithuanian team but also at the broader historical events. The fall of the Soviet Union allowe\n[…]\nThe film includes interviews with many famous basketball figures, such as Arvydas Sabonis, David Stern, Jim Lampley, Bill Walton, and Šarūnas Marčiulionis. The title is an allusion to the Dream Team, the first American Olympic basketball team to feature active NBA players.\n[…]\nThe Lithuanian team had little money allocated to them for the 1992 Olympics in Barcelona. Because of an article written in a local newspaper, the Grateful Dead was moved by the team's plight and funded their trip to the Olympics. Artist Greg Speirs  from New York was also moved by the team's plight and created the iconic Slam-Dunking Skeleton on tie-dye shirts which were made in the colors of the Lithuanian flag.\n[…]\nThe Lithuanian team had no illusions of beating the American Dream Team in the semifinals, and the U.S. ended up winning 127–76. In the bronze medal game, however, Lithuania was pitted against the Unified Team, made up of all of the post-Soviet states except the Baltic states of Lithuania, Estonia and Latvia. The game became a larger symbol of a reborn Lithuania fighting for its freedom and recognition. It was a close, nerve-wracking game that the Lithuanians desperately wanted to win.\n[…]\nIn the end, the Lithuanians defeated the Unified Team 82–78. The team wore their slam dunking skeleton tie-dye uniforms to accept their bronze medals.\n[…]\nThe Other Dream Team at IMDb\n[…]\nThe Other Dream Team at Rotten Tomatoes\n[…]\nThe Other Dream Team at Metacritic"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lithuania_men%27s_national_basketball_team",
        "situacao": "ok",
        "texto": "The Lithuania men's national basketball team (Lithuanian: Lietuvos nacionalinė vyrų krepšinio rinktinė) represents Lithuania in international basketball competitions. They are controlled by the Lithuanian Basketball Federation, the governing body for basketball in Lithuania. Despite Lithuania's small size, with a population of less than 3 million, the country's devotion to basketball has made them\n[…]\nConsequently, he, along with Donnie Nelson (son of Marčiulionis' then-coach Don Nelson), searched for financial supporters that could finance Lithuania's participation in the international games and the 1992 Summer Olympics. George Shirk wrote a story about this on the San Francisco Chronicle, and once American rock band Grateful Dead read the newspaper, they decided to help the team.\n[…]\nDuring the awarding ceremony, Lithuanians decided to dress up the colorful Skeleton Jerseys in order to show their newly reborn country national colors and to show their gratitude to Greg Speirs and the Grateful Dead for their financial support. Rimas Kurtinaitis characterized the emotional awarding ceremony by saying: \"Well, we cried. It was really from joy. Words cannot even express feelings like that. You need to be there\".\n[…]\nDonnie Nelson, American, son of Hall of Famer coach Don Nelson, helped Lithuania's funding for Barcelona 1992 and became assistant coach for many years later. After Lithuania nearly upset the US at Sydney 2000, Nelson declared that he would never help Lithuania in matches against the USA.\n[…]\nThere are several documentaries about the national team, the most notable one being The Other Dream Team, released in 2013 and focusing on the 1992 Barcelona Olympic team. Another that saw international release was 2012's Game of the Nation (Mes už... Lietuvą), about Lithuania's experience hosting EuroBasket 2011.\n[…]\nLithuanian National Team – Men at Eurobasket.com"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Copa do Mundo de Basquete Masculino de 2023",
      "descricao": "Mundial masculino da FIBA disputado em 2023 nas Filipinas, no Japão e na Indonésia."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 2023, qual seleção europeia foi campeã mundial de basquete masculino pela primeira vez, ao vencer a Sérvia na final?",
    "resposta": "Alemanha",
    "fonte": [
      "https://en.wikipedia.org/wiki/2023_FIBA_Basketball_World_Cup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2023_FIBA_Basketball_World_Cup",
        "situacao": "ok",
        "texto": "The 2023 FIBA Basketball World Cup was the 19th tournament of the FIBA Basketball World Cup for men's national basketball teams, held from 25 August to 10 September 2023. The tournament was the second to feature 32 teams and was hosted by multiple nations for the first time in its history—the Philippines, Japan, and Indonesia.\n[…]\nOn 7 June 2016, FIBA approved the bidding process for the 2023 FIBA Basketball World Cup.\n[…]\nDuring the FIBA Executive Committee's meeting on 31 January 2020, International Olympic Committee and FIBA Executive Committee member Richard Carrión was appointed as the Chairman of the FIBA Basketball World Cup 2023 Board. FIBA Oceania Executive Director David Crocker will also be the tournament's Executive Director. The first meeting of the board took place on the final week of May 2020.\n[…]\nBoomers vs World\n[…]\nThe official ball used for the World Cup was unveiled on 29 April 2023 during the Draw Festival at the Bonifacio Global City in Taguig. Similar to 2019, the Molten BG5000 was used for the tournament but with a design inspired by wave and gold elements and hearts. Nicknamed \"The Passion Wave\", it represents a heartbeat birthed out of passion for basketball that reverberates throughout the world. Another version of the ball, intended to be used in the final was also unveiled.\n[…]\nTwo-time NBA champion and 2006 World Cup winner Pau Gasol joined Scola as one of the tournament's Global Ambassadors on 6 February 2023. Gasol served as an Ambassador for the 2022 FIBA Women's Basketball World Cup in Australia months prior. Ten-time NBA All-Star and three-time Olympic Gold Medalist Carmelo Anthony was also named a Global Ambassador on 24 February 2023.\n[…]\nPricing for the 2023 FIBA Basketball World Cup game tickets were determined by the local organizing committees and was reviewed by FIBA."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_do_Mundo_de_Basquetebol_Masculino_de_2023",
        "situacao": "ok",
        "texto": "A Copa do Mundo de Basquetebol Masculino de 2023 (em inglês: 2023 FIBA Basketball World Cup) foi a 19.ª edição do torneio da FIBA e a primeira a ser sediada em mais de um país, num total de cinco cidades, ocorrendo pela primeira vez na Indonésia e a segunda no Japão (primeira em 2006) e nas Filipinas (primeira em 1978).\n[…]\nA Alemanha conquistou seu primeiro título em mundiais a derrotar a Sérvia por 83–77 na final. Na disputa do terceiro lugar, o Canadá venceu os Estados Unidos por 127–118, obtendo sua primeira medalha em Copas do Mundo.\n[…]\nEm 7 de junho de 2016, a FIBA aprovou o processo de seleção do anfitrião para a Copa do Mundo de Basquetebol Masculino. Em 1 de Junho de 2017, a FIBA confirmou a lista de candidatos para sediar a competição.\n[…]\nUma cerimônia foi realizada na final da copa do mundo de basquetebol masculino de 2019 entre a Argentina e a Espanha no Wukesong Arena, em Pequim, para oficialmente transferir os direitos de organização da FIBA Basketball World Cup da China para as Filipinas, Japão e Indonésia.\n[…]\nAs datas da competição foram anunciadas em 11 de maio de 2020 e o torneio ocorrerá entre 25 de agosto e 10 de setembro de 2023.\n[…]\nJazz, Magic, Timberwolves e Thunder têm cinco jogadores cada na Copa do Mundo de Basquete da FIBA de 2023. Não muito atrás estão Mavericks e Knicks, cada um com quatro jogadores na Copa do Mundo.\n[…]\nA Liga Endesa teve muito de seus atletas na Copa do Mundo 2023, 37 jogadores no total que lutaram pelo ouro mundial. Sendo a segunda liga que mais cedeu atletas a Copa do Mundo,  a Liga ACB teve representação que abrangeu 16 das equipes participantes: Brasil, Canadá, Cabo Verde, Finlândia, França, Geórgia, Alemanha, Grécia, Itália, Letônia, Lituânia, Montenegro, Porto Rico, República Dominicana e Sérvia.\n[…]\nFonte: Basket News.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "National Basketball Association",
      "descricao": "Principal liga profissional de basquete dos Estados Unidos e do Canadá."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A principal liga americana de basquete passou a se chamar NBA depois da fusão de duas ligas rivais. Em que ano?",
    "resposta": "1949",
    "fonte": [
      "https://en.wikipedia.org/wiki/National_Basketball_Association",
      "https://en.wikipedia.org/wiki/Basketball_Association_of_America"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/National_Basketball_Association",
        "situacao": "ok",
        "texto": "The National Basketball Association (NBA) is a professional basketball league in North America composed of 30 teams (29 in the United States and 1 in Canada). The NBA is one of the major professional sports leagues in the United States and Canada and is considered the premier basketball league in the world. The league is headquartered in New York City and Secaucus, New Jersey.\n[…]\nThe NBA was created on August 3, 1949, with the merger of the Basketball Association of America (BAA) and the National Basketball League (NBL). The league later adopted the BAA's history and considers its founding on June 6, 1946, as its own. In 1976, the NBA and the American Basketball Association (ABA) merged, adding four franchises to the NBA. The NBA's regular season runs from October to April, with each team playing 82 games.\n[…]\nThe NBA also operates the NBA G League, NBA 2K League, and the Basketball Africa League.\n[…]\nThe NBL hit back by outbidding the BAA for the services of several players, including Al Cervi, rookie Dolph Schayes and five stars from the University of Kentucky, while also gaining the upper hand in Indianapolis with the creation of the Indianapolis Olympians while the Kautskys folded. With several teams facing financial difficulties, the BAA and the NBL agreed to merge on August 3, 1949, to create the National Basketball Association.\n[…]\nThe Syracuse Nationals and Tri-Cities Blackhawks joined the NBA in 1949 as part of the BAA-NBL merger.\n[…]\nLists of National Basketball Association players\n[…]\nKirchberg, Connie (2007). Hoop Lore: A History of the National Basketball Association. McFarland & Company. ISBN 9780786426737.\n[…]\nSurdam, David George (2012). The Rise of the National Basketball Association. University of Illinois Press. ISBN 9780252037139.\n[…]\n\"Constitution and By-Laws of the National Basketball Association\" (PDF). NBA. May 29, 2012. Retrieved February 23, 2026."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Basketball_Association_of_America",
        "situacao": "ok",
        "texto": "The Basketball Association of America (BAA) was a professional basketball league in North America, founded in 1946 by team owners from the National Hockey League (NHL) and American Hockey League (AHL) at the time. Following its third season, the 1948–49 BAA season, the BAA merged with the National Basketball League (NBL) to form the National Basketball Association (NBA).\n[…]\nThe inaugural BAA season began with 11 teams, of which four dropped out before the second season. One team joined from the American Basketball League (ABL) to provide 8 teams for 1947–48 and four NBL teams joined to provide 12 for 1948–49. The records and statistics of the BAA and NBL prior to the merger in 1949 are considered in official NBA history only if a player, coach or team participated in the newly formed NBA after 1949 for one or more seasons.\n[…]\nFor instance, both the 1948 and 1949 titles were won by teams that had played in other leagues during the previous year, the Baltimore Bullets from the American Basketball League in 1948 and the Minneapolis Lakers from the National Basketball League in 1949.\n[…]\nOn August 3, 1949, the BAA agreed to merge with the NBL, creating the National Basketball Association (NBA). Seven NBL teams, including the expansion team Indianapolis Olympians, joined with the ten BAA teams; the Indianapolis Jets and the Providence Steamrollers folded prior to the merger. In total, the new league had 17 teams located in a mix of large and small cities, as well as large arenas, smaller gymnasiums, and armories.\n[…]\nPrior to the merger, the BAA held their 1949 college draft on March 21, which was the last event officially held under the BAA name."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/National_Basketball_Association",
        "situacao": "ok",
        "texto": "A National Basketball Association (em português:  Associação Nacional de Basquetebol; abreviação oficial: NBA) é a principal liga de basquetebol profissional da América do Norte. Com 30 franquias (29 nos Estados Unidos e 1 no Canadá), a NBA também é considerada a principal liga de basquete do mundo. É um membro ativo da USA Basketball (USAB), que é reconhecida pela FIBA (a Federação Internacional \n[…]\nA liga foi fundada na cidade de Nova Iorque em 6 de Junho de 1946, como a Basketball Association of America (BAA). A liga adotou o nome de National Basketball Association em 1949 quando se fundiu com a rival National Basketball League (NBL). A liga tem diversos escritórios ao redor do mundo, além de vários dos próprios clubes fora da sede principal na Olympic Tower localizada na Quinta Avenida 645. Os estúdios da NBA Entertainment e da NBA TV são localizados em Secaucus, Nova Jérsia.\n[…]\nPor exemplo, o finalista da ABL de 1948, Baltimore Bullets, mudou-se para a BAA e conquistou o título da liga em 1948, e o Minneapolis Lakers, campeão da NBL em 1948, ganhou o título da BAA em 1949.\n[…]\nEm 3 de agosto de 1949, a BAA aceitou se fundir com a NBL, criando a nova National Basketball Association (NBA). A nova liga tinha 17 franquias localizadas em uma mistura de cidades grandes e pequenas, bem como grandes e pequenos ginásios.\n[…]\nNo ano de 1967, a NBA começou a ser desafiada por uma liga rival, com o surgimento da American Basketball Association (ABA). As ligas começaram uma guerra de ofertas à jogadores. Quem lucrou com isso foram os jogadores, que puderam fazer verdadeiros leilões entre as duas ligas para conseguir contratos milionários. A NBA ganhou a estrela do basquete universitário da época, Kareem Abdul-Jabbar (na época conhecido como Lew Acindor).\n[…]\nc  Até 1963, Syracuse Nationals.\n[…]\nWomen's National Basketball Association\n[…]\nPágina oficial do National Basketball Association (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Basquete 3x3",
      "descricao": "Modalidade de basquete jogada em meia quadra, com três jogadores de cada lado e uma só cesta."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O basquete três contra três, jogado em meia quadra e com uma só cesta, estreou nos Jogos Olímpicos em qual edição?",
    "resposta": "Tóquio 2020",
    "fonte": [
      "https://en.wikipedia.org/wiki/3x3_basketball",
      "https://en.wikipedia.org/wiki/Basketball_at_the_2020_Summer_Olympics_%E2%80%93_Men%27s_3x3_tournament"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/3x3_basketball",
        "situacao": "ok",
        "texto": "3x3 basketball (stylized as ƐX3, pronounced three-ex-three) is a variation of basketball played three-a-side, with one backboard and in a half-court setup. This basketball game format is currently being promoted and structured by FIBA, the sport's governing body. Its primary competition is an annual FIBA 3X3 World Tour, comprising a series of Masters and one Final tournament, and awarding six-figu\n[…]\nFIBA developed 3x3 as a standalone discipline with its own format and regular international competitions. 3x3 basketball made its Olympic debut at the 2020 Summer Olympics in Tokyo.\n[…]\nThe aforementioned FIBA executive, when asked about the prospect of the 2020 Olympic debut of 3x3 potentially lacking any participation from the US, admitted that \"a lot of teams want to beat the US. Beating the US teams is an achievement.\"\n[…]\nAfter the 2010 Summer Youth Olympics, FIBA established a regular World Cup that always includes men and women competing simultaneously in open, U23 and U18 categories. World Cups are played every year, except in years when there are Youth Olympic Games or Olympic Games. The COVID-19 pandemic caused the cancellation of the 2020 event.\n[…]\n3x3 basketball made a debut in Olympic programme for the 2020 Summer Olympics in Tokyo, Japan, for both men and women.\n[…]\n3x3 basketball was included in 2022 Commonwealth Games in Birmingham, England.\n[…]\nAfter the 2022 Russian invasion of Ukraine, FIBA banned Russian teams and officials from participating in FIBA 3x3 Basketball competitions.\n[…]\n3x3 basketball at the Summer Olympics\n[…]\nBasketball at the Commonwealth Games\n[…]\nBIG3 – 3x3 basketball league played mostly by retired NBA players, using different rules and a different ball from FIBA-sanctioned 3x3\n[…]\nTwenty-one – a variation of basketball where teams must score exactly 21 points to win\n[…]\nMario Hoops 3-on-3 – a 3x3 basketball video game featuring Mario and Final Fantasy characters"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Basketball_at_the_2020_Summer_Olympics_%E2%80%93_Men%27s_3x3_tournament",
        "situacao": "ok",
        "texto": "The 2020 Summer Olympics men's 3x3 basketball tournament in Tokyo, began on 24 and ended on 28 July 2021. All games were played at the Aomi Urban Sports Park.\n[…]\nIt was originally scheduled to be held in 2020, but on 24 March 2020, the Olympics were postponed to 2021 due to the COVID-19 pandemic. As a result of this pandemic, the games were played behind closed doors."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Basquetebol_3x3",
        "situacao": "ok",
        "texto": "O Basquete 3x3 (pronunciado Basquete três contra três), inicialmente chamado FIBA33, é um esporte relativamente novo, praticado por equipes compostas por três jogadores(as) e um(a) reserva cada, em um espaço de jogo similar a uma meia quadra de Basquete\n[…]\nAlguns marcos temporais importantes relacionados a origem e desenvolvimento deste esporte são:  1) 1° evento realizado nos Jogos Asiáticos em Recinto Coberto de 2007, em Macau; 2) Jogos Asiáticos da Juventude de 2009, em Singapura; 3) Sua estreia em eventos globais deu-se nos Jogos Olímpicos da Juventude de 2010, em Singapura;  4) consolidação como esporte olímpico nos Jogos de Tóquio 2020 ( realizado em 2021por causa da Pandemia de Covid-19)\n[…]\nA FIBA vê o 3x3 como um grande veículo de promoção do jogo à volta do mundo. Como Baumann afirmou em 2008, \"O conceito 3 por 3 tem todos os elementos e capacidades requeridas para o basquetebol, inspirou e continuará a inspirar alguns grandes jogadores no futuro. Ao mesmo tempo, é a mais fácil e uma das mais efectivas formas de trazer os mais jovens para o basquetebol, mantê-los e promover o nosso jogo.\n[…]\nPor fim, o FIBA 3x3 pode e irá promover valores-chave educacionais e sociais para as próximas gerações.\". Como esperava Baumann, o Basquete 3x3 foi incluído nas Olimpíadas de Verão , com sua estreia realizada em 2020.\n[…]\nPor fim, pode se dizer que no que se refere a história e desenvolvimento do Basquete 3x3, seu ápice foi sua inclusão nos Jogos Olímpicos, cuja estreia ocorreu nos Jogos Olímpicos de Toquio 2020, realizado em 2021 em virtude da pandemia de COVID-19, o  que para além de regras e características de jogo, reforça a diferença e singularidade do Basquete 3x3 frente as outras vertentes institucionalizadas ou informais do Basquete.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Arremesso Final",
      "descricao": "Série documental de 2020 sobre o Chicago Bulls de Michael Jordan, produzida pela ESPN e pela Netflix."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A série documental Arremesso Final, ou The Last Dance, acompanha a última conquista do Chicago Bulls de Michael Jordan. Em qual temporada?",
    "resposta": "1997–98",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Last_Dance_(miniseries)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Last_Dance_(miniseries)",
        "situacao": "ok",
        "texto": "The Last Dance is a 2020 American sports television documentary miniseries co-produced by ESPN Films and Netflix. Directed by Jason Hehir, the series revolves around Michael Jordan's career, with particular focus on the 1997–98 season, his final season with the Chicago Bulls.\n[…]\nHowever, The Last Dance received heavy criticism from many of Jordan’s former Bulls teammates, who disputed the series's accuracy and focus on Jordan. Much of the hostility stemmed from the expectation that the documentary would center exclusively on the 1997–98 Bulls season rather than be an account of Jordan's life and career. The series's creators were also accused of portraying multiple key players of that era in an unfairly negative fashion while being excessively deferential to Jordan.\n[…]\nThe docuseries gives an account of Michael Jordan's career and the Chicago Bulls, using never-before aired footage from the 1997–98 Bulls season, his final season with the team.\n[…]\nThe Last Dance features interviews and never-released footage from the 1997–98 Chicago Bulls season. Over 500 hours of all-access footage was filmed and used to create the 10-part documentary series. According to Adam Silver (now NBA Commissioner, but then the head of NBA Entertainment), Jordan allowed the filming with the agreement that the footage would only be used with his direct permission.\n[…]\nCraig Hodges, a member of the first two championship seasons with the Bulls, said he felt disappointed about not getting an opportunity to be interviewed for the documentary, and further criticized Jordan for discussing the team's use of cocaine during the 1980s, which was also another subject that was not related to the Last Dance season.\n[…]\nLast Dance shoes\n[…]\nThe Last Dance at IMDb\n[…]\nThe Last Dance at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Last_Dance",
        "situacao": "ok",
        "texto": "The Last Dance (Arremesso Final, no Brasil) é uma minissérie-documentário de 10 episódios coproduzida pela ESPN Films e Netflix. Dirigida por Jason Hehir, a série gira em torno da carreira de Michael Jordan, com foco principal na última temporada, na qual uma equipe de filmagem teve acesso total, revelando imagens inéditas dos bastidores do Chicago Bulls. A série mostra entrevistas exclusivas de v\n[…]\nA série foi ao ar originalmente nos Estados Unidos pela ESPN entre 19 de abril e 17 de maio de 2020, enquanto internacionalmente os episódios foram disponibilizados pelo Netflix sempre no dia seguinte a exibição na televisão americana. O documentário recebeu críticas positivas da imprensa especializada por sua qualidade na direção e edição.\n[…]\nMichael Jordan\n[…]\nMichael Wilbon\n[…]\nDeloris Jordan\n[…]\nThe Last Dance no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Cesta de três pontos",
      "descricao": "Arremesso feito de trás de uma linha distante do aro, que vale três pontos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Depois de surgir nas ligas americanas, a cesta de três pontos foi adotada pela FIBA, nas competições internacionais, em que ano?",
    "resposta": "1984",
    "fonte": [
      "https://en.wikipedia.org/wiki/Three-point_field_goal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Three-point_field_goal",
        "situacao": "ok",
        "texto": "A three-point field goal (also 3-pointer, three, trey, or triple) is a field goal in a basketball game made from beyond the three-point line, a designated arc surrounding the basket. A successful basket is worth three points, in contrast to the two points awarded for field goals made within the three-point line and the one point for each made free throw.\n[…]\nThe distance from the basket to the three-point line varies by competition level: in the National Basketball Association (NBA) the arc is 23 feet 9 inches (7.24 m) from the center of the basket; in the International Basketball Federation (FIBA), the Women's National Basketball Association (WNBA), the National Collegiate Athletic Association (NCAA) (all divisions), and the National Association of Intercollegiate Athletics (NAIA), the arc is 6.75 m (22 ft 1.75 in) from the center of the basket; and in the National Federation of State High School Associations (NFHS) the arc is 19 ft 9 in (6.02 m) from the center of the basket.\n[…]\nThe NCAA and NAIA arc is the same distance from the center of the basket as the FIBA arc, but is 3 feet 4 inches (1.02 m) from each sideline because the North American court is slightly wider than the FIBA court.\n[…]\nThe sport's international governing body, FIBA, introduced the three-point line in 1984, at 6.25 m (20 ft 6 in), and it made its Olympic debut in 1988 in Seoul, South Korea.\n[…]\nThe NCAA experimented with the 6.75 m (22 ft 1+3⁄4 in) FIBA three-point line distance in the National Invitation Tournament (NIT) in 2018 and 2019, then adopted that distance for all men's play with a phased conversion that began with Division I in the 2019–20 season. The NAIA and other American associations also adopted the new NCAA distance for their respective men's play."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Linha_dos_tr%C3%AAs_pontos",
        "situacao": "ok",
        "texto": "A Linha dos 3 Pontos é uma linha em formato de arco presente na quadra de basquetebol designada para um arremesso de três pontos. Para valer os 3 pontos, o arremessador tem que estar antes dessa linha. Caso um dos pés toque essa linha, o arremesso é considerado de 2 pontos;.\n[…]\nA distância da cesta até a linha de três pontos varia de acordo com o nível da competição: na NBA, o arco fica a 23 pés 9 polegadas (7,24 m) do centro da cesta; na FIBA, o jogo masculino da Divisão I da WNBA e da NCAA é de 6,75 m (22 pés 1,75 pol); e nas peças femininas nas três divisões da NCAA, além das peças masculinas nas divisões II e III da NCAA, o arco mede 6,32 m.\n[…]\nNa (W) NBA e FIBA, a linha de três pontos se torna paralela a cada linha lateral nos pontos em que o arco está a 3 pés (0,91 m) de cada linha lateral; Como resultado, a distância da cesta diminui gradualmente para um mínimo de 22 pés (6,71 m). Nas divisões II e III da NCAA, o arco é contínuo a 180 ° ao redor da cesta. Existem mais variações (consulte o artigo principal).\n[…]\nNo basqeuetbol 3x3, uma variante sancionada pela FIBA, a mesma linha existe, mas os chutes por trás dele valem apenas 2 pontos e os outros chutes valem 1 ponto.\n[…]\nO lançamento de três pontos foi popularizado graças à American Basketball Association (ABA) (ABA), uma liga com o mesmo nome do início dos anos 1960, mas que nada tinha a ver com isso, que o introduziu em 1968. Durante o Nos anos 70, a ABA criou o Triple Contest ao lado do Matte Contest como uma ferramenta de marketing para competir contra a onipotente NBA.\n[…]\nNas regras da FIBA, a Linha dos 3 Pontos só foi introduzida, após o fim dos Jogos Olímpicos de Verão de 1984 em Los Angeles, nos Estados Unidos.\n[…]\nLinha dos 4 pontos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "LeBron James",
      "descricao": "Astro americano do basquete da NBA, conhecido como King James."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano LeBron James ultrapassou Kareem Abdul-Jabbar e se tornou o maior cestinha da história da NBA?",
    "resposta": "2023",
    "fonte": [
      "https://en.wikipedia.org/wiki/LeBron_James"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/LeBron_James",
        "situacao": "ok",
        "texto": "LeBron Raymone James (born December 30, 1984) is an American professional basketball player who plays as a forward for the Philadelphia 76ers of the National Basketball Association (NBA). Nicknamed \"LBJ\" and \"King James\", he is the NBA's all-time leading scorer and has won four NBA championships from 10 NBA Finals appearances, including eight consecutive appearances between 2011 and 2018. He has w\n[…]\nDuring January 2023, James recorded a string of accomplishments.\n[…]\nHe received his 66th Player of the Week award; became the second player in NBA history to reach 38,000 points; achieved his 100th career game with 40 or more points scored; became the first player with a 40-point game against every NBA team; was named as a starter at the 2023 NBA All-Star Game, tying Kareem Abdul-Jabbar's record for the most All-Star selections with 19; and became the first player in NBA history to post a triple-double in his 20th season.\n[…]\nA biography of James, titled LeBron, was published on April 11, 2023, by Jeff Benedict. The book was based on three years of research and more than 250 interviews. In 2025, Mattel announced that it was adding a Ken doll modeled after James to its Barbie toy line. The doll is an inch taller than a standard Ken doll. The same year, James was named an honorary co-chair of the Met Gala in Manhattan, but he did not attend due to a knee injury.\n[…]\nIn September 2023, new client names from the Biogenesis scandal were released, including that of Ernest \"Randy\" Mims, a longtime friend and business manager of James, and David Alexander, a well-known trainer of prominent athletes who co-owned a cold-pressed juice and smoothie business with Savannah and also served as her personal trainer. The DEA determined that there \"was never any indication that LeBron James did anything wrong.\"\n[…]\nNBA Cup winner: 2023\n[…]\n2023 Outstanding Long Documentary (as executive producer of The Redeem Team)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/LeBron_James",
        "situacao": "ok",
        "texto": "LeBron Raymone James (Akron, 30 de dezembro de 1984) é um basquetebolista norte-americano que atua como ala no Philadelphia 76ers da National Basketball Association. Apelidado de King James, é amplamente reconhecido como um dos melhores jogadores de basquetebol de todos os tempos, tendo sido classificado pela ESPN e The Athletic em 2022 como o segundo maior jogador da história, atrás apenas de Mic\n[…]\nEm 2020, ele liderou os Lakers ao título da NBA, tornando-se o primeiro jogador a ser campeão e MVP de Finais da NBA por três equipes diferentes da NBA. Em 2023, na derrota dos Lakers para o Oklahoma City Thunder por 133–130, ele se tornou o maior pontuador da história da temporada regular com 38.390 pontos, superando os 38.387 pontos de Kareem Abdul-Jabbar. No mesmo ano, LeBron foi campeão e nomeado melhor jogador da primeira edição da Copa da NBA.\n[…]\nEm 18 de agosto de 2022, James renovou com o Los Angeles Lakers em um contrato de US$ 97,1 milhões por dois anos. A extensão do contrato fez de James o atleta mais bem pago da história da NBA com US$ 528,9 milhões, superando Kevin Durant em ganhos de todos os tempos. Em 7 de fevereiro, James marcou seu 38 388.º ponto na carreira em um jogo contra o Oklahoma City Thunder, ultrapassando Kareem Abdul-Jabbar e tornando-se o maior artilheiro de todos os tempos na história da NBA.\n[…]\nEm março de 2023, o ex-lutador de MMA Chael Sonnen afirmou que Lebron era usuário regular de Eritropoietina, também conhecida como EPO. A EPO tem o objetivo de aumentar a capacidade do corpo de transportar oxigênio pelo corpo, o que pode melhorar a resistência e o desempenho durante o treinamento e a competição. De acordo com Sonnen, ele saberia disso porque ele e James “compram suas drogas do mesmo traficante”. No entanto, Sonnen não apresentou nenhuma evidência para comprovar a acusação.\n[…]\nMVP da Copa NBA: 2023\n[…]\nTerceiro Time: 2019, 2022, 2023 e 2024",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Senda Berenson",
      "descricao": "Professora de educação física lituano-americana que adaptou o basquete para mulheres no Smith College."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A professora Senda Berenson adaptou o basquete para suas alunas do Smith College. Em que ano ela organizou ali o primeiro jogo feminino universitário?",
    "resposta": "1893",
    "distratores": [
      "1903",
      "1912",
      "1921"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Senda_Berenson",
      "https://en.wikipedia.org/wiki/Women%27s_basketball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Senda_Berenson",
        "situacao": "ok",
        "texto": "Senda Berenson Abbott (March 19, 1868 – February 16, 1954) was a Russian-American figure of women's basketball and the author of the first Basketball Guide for Women (1901–07). She was inducted into the Basketball Hall of Fame as a contributor on July 1, 1985, the International Jewish Sports Hall of Fame in 1987,  and the Women's Basketball Hall of Fame in 1999.\n[…]\nBerenson was the first person to introduce and adapt rules for women's basketball to Smith College in 1899, modifying the existing men's rules.\n[…]\nBerenson would write, in 1894,\n[…]\nBerenson attended the Royal Central Institute of Gymnastic in Stockholm and organized the Gymnastics and Field Association at Smith in 1893. After her return from Stockholm, she started a folk dance program at Smith and introduced fencing to the school in 1895. In 1901, she introduced field hockey with the help of Lady Constance Applebee of England. She later also adapted volleyball for women.\n[…]\nIn 1911, she married a professor of English at Smith, Herbert Vaughan Abbott. Soon afterward, Berenson resigned from her position, although she continued her interest in sport by serving as the Director of Physical Education at the Mary A. Burham School located in Northampton, Massachusetts. Senda Berenson died in Santa Barbara, California, on February 16, 1954.\n[…]\nMelnick, Ralph (2007). Senda Berenson : the unlikely founder of women's basketball. Amherst: University of Massachusetts Press. ISBN 978-1-55849-568-5.\n[…]\nStillman, Agnes CoraRuth (1971). Senda Berenson Abbott, her life and contributions to Smith College and the physical Education profession. Northampton, Massachusetts: Master's Thesis, presented to the Faculty of the Department of Physical Education, Smith College. OCLC 909414.\n[…]\nSenda Berenson papers at the Smith College Archives, Smith College Special Collections\n[…]\nBasketball Hall of Fame page on Abbott"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Women%27s_basketball",
        "situacao": "ok",
        "texto": "Women's basketball is the team sport of basketball played by women. It was first played in 1892, one year after men's basketball, at Smith College in the Smith Alumnae Gymnasium in Massachusetts. It spread across the United States, in large parts via women's college competitions, and has since spread globally. As of 2020, basketball is one of the most popular and fastest growing sports in the worl\n[…]\nWomen's basketball began in the fall of 1892 at Smith College in the Smith Alumnae Gymnasium. Senda Berenson, recently hired as a young \"physical culture\" director at Smith, taught basketball to her students, hoping the activity would improve their physical health. While for men, basketball was designed as an indoor addition to existing team sports such as baseball and football, basketball became the first women's team sport, followed shortly after by hockey, rowing, and volleyball.\n[…]\nBerenson's freshmen played the sophomore class in the first women's collegiate basketball game held on 22 March 1893. University of California and Miss Head's School, had played the first women's extramural game in 1892. Also in 1893, Mount Holyoke and Sophie Newcomb College, coached by Clara Gregory Baer (the inventor of Newcomb ball) women began playing basketball. By 1895, the game had spread to colleges across the country, including Wellesley, Vassar and Bryn Mawr.\n[…]\nWhile Senda Berenson's desire to limit competition was not realized forever, her larger goals were. College basketball and other women's college sports impacted the American cultural mindset around women and women's rights at the turn of the century, and colleges played a large role in enabling women to participate in athletics at all levels.\n[…]\nThere have been professional leagues established in numerous countries.\n[…]\nThe Women's Super Basketball League is the highest women's professional club basketball competition in Republic of China"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Senda_Berenson",
        "situacao": "ok",
        "texto": "Senda Berenson Abbott (19 de março de 1868 — 16 de fevereiro de 1954) foi uma pioneira no basquetebol feminino, autora do primeiro guia de basquetebol para mulheres. Ela foi incluída no Basketball Hall of Fame em 1 de julho de 1985, no Hall da Fama Judeu Internacional em 1987 e no Hall da Fama das Mulheres no Basquete em 1999.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Defesa por zona",
      "descricao": "Sistema defensivo em que cada jogador marca uma região da quadra, e não um adversário específico."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Durante décadas, a NBA proibiu a defesa por zona. A partir de qual temporada esse tipo de marcação passou a ser permitido?",
    "resposta": "2001–02",
    "distratores": [
      "1979–80",
      "1991–92",
      "2010–11"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Zone_defense",
      "https://en.wikipedia.org/wiki/Illegal_defense"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zone_defense",
        "situacao": "ok",
        "texto": "Zone defense is a type of defensive system, used in team sports, which is the alternative to man-to-man defense; instead of each player guarding a corresponding player on the other team, each defensive player is given an area (a zone) to cover.\n[…]\nZone defenses are common in international, college, and youth competition. In the National Basketball Association, zone defenses were prohibited until the 2001–2002 season. The introduction of zone defenses faced resistance from players, including Michael Jordan. Jordan is quoted as saying, \"If teams were able to play zone defenses, he said, he never would have had the career he did.\"\n[…]\nA zone defense in gridiron football is a type of \"pass coverage\". See American football defensive strategy and zone blocking.\n[…]\nIn lacrosse, a zone defense is not as often as the normal man defense. It has been used effectively at the D-III level by schools such as Wesleyan University. They almost always use a 6-man “backer” zone, where they have three guys up top and three guys down low and they try to stay in their zone and not rotate as much as possible.\n[…]\nWhen teams are man down, many teams employ a “box and one” zone defense, where the four outside players stay in their designated zone while the fifth player follows the ball while staying on the crease man.\n[…]\nNetball is a sport similar to basketball with similar strategies and tactics employed, although with seven players per team. Zone defense is one of the main defensive strategies employed by teams, along with one-on-one defense. Common variants include center-court block, box-and-two zone, diamond-and-two zone, box-out zone and split-circle zone.\n[…]\nBox-and-one defense\n[…]\nMan-to-man defense"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Illegal_defense",
        "situacao": "desambiguacao",
        "texto": "Illegal defense or illegality defence may refer to:\n\nIllegality defence (Ex turpi causa non oritur actio), a legal doctrine\nDefensive three-second violation or illegal defense, in basketball\n\n\n== See also ==\nLegal defence\nOffside (association football)"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Harlem Globetrotters",
      "descricao": "Time americano de exibição que mistura basquete, acrobacias e comédia, criado nos anos 1920."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Criados nos anos vinte, os Harlem Globetrotters demoraram a jogar no bairro que lhes dá nome. Em que década fizeram a primeira partida no Harlem?",
    "resposta": "Década de 1960",
    "fonte": [
      "https://en.wikipedia.org/wiki/Harlem_Globetrotters"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Harlem_Globetrotters",
        "situacao": "ok",
        "texto": "The Harlem Globetrotters are an American exhibition basketball team. They combine athleticism, theater, and comedy in their entertaining style of play. Over the years, the Globetrotters have played more than 26,000 exhibition games in 124 countries and territories, mostly against deliberately ineffective opponents, such as the Washington Generals (1953–1995, 2007–2015, 2017–present) and the New Yo\n[…]\nPope John Paul II (2000) – Press agent Lee Solters arranged a ceremony orchestrated in front of a crowd of 50,000 in Saint Peter's Square in which the Pope was recognized as an honorary Globetrotter.\n[…]\nKinokff, Dave; Williams, Edgar (1953). Around the World with the Harlem Globetrotters. Philadelphia: Macrae Smith Company.\n[…]\nVecsey, George (1970). Harlem Globetrotters. New York: Scholastic.\n[…]\nGault, Clare; Gault, Frank (1976). The Harlem Globetrotters and Basketball's Funniest Games. New York: Scholastic.\n[…]\nMenville, Chuck (1978). The Harlem Globetrotters: An Illustrated History. New York: Willow Books.\n[…]\nGreen, Ben (2005). Spinning the Globe: The Rise, Fall, and Return to Greatness of the Harlem Globetrotters. New York: HarperCollins. ISBN 9780060555504.\n[…]\n\"Ready-To-Read\", Educational Book series featuring the Harlem Globetrotters\n[…]\nDobrow, Larry (2017). Here Come the Harlem Globetrotters. New York: Simon Spotlight.\n[…]\nDobrow, Larry (2017). The Superstar Story of the Harlem Globetrotters. New York: Simon Spotlight.\n[…]\nDobrow, Larry (2018). The Harlem Globetrotters Present the Points Behind Basketball. New York: Simon Spotlight.\n[…]\nHarlem Globetrotters PR in Ireland\n[…]\nVoices of Oklahoma interview with Marques Haynes. First person interview conducted on December 28, 2011, with Marques Haynes, former member of the Harlem Globetrotters.\n[…]\n\"In Black America; The Harlem Globetrotters 1985\", 1985-03-06, KUT Radio, American Archive of Public Broadcasting (WGBH and the Library of Congress), Boston, MA and Washington, DC"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Harlem_Globetrotters",
        "situacao": "ok",
        "texto": "Harlem Globetrotters é uma equipe de basquetebol americana que viaja o mundo fazendo apresentações performáticas. Ganhou a alcunha de \"time de basquete mais famoso do mundo\" por fazer de suas partidas uma mistura de entretenimento e habilidades performáticas. Em 2010, a equipe contabilizava mais de 25 mil apresentações em 118 países.\n[…]\nA origem da equipe é em um grupo de jogadores de basquete da Wendell Phillips High School, da cidade de Chicago, que formaram o \"Savoy Big Five\" com a intenção de entreter em jogos de exibição, já no início da década de 1920.\n[…]\nEm 1926, Abe Saperstein, tendo por base três jogadores da equipe do Savoy Big dissolvido nesse mesmo ano, formou o Harlem Globetrotters e a escolhe do ante-nome Harlem foi uma homenagem ao bairro novaiorquino do Harlem considerado centro da cultura afro-americana na época (mesmo os Globetrotters mudando-se para Nova York só no ano de 1968). Sua primeira partida ocorreu em 7 de janeiro de 1927, na cidade de Hinckley, Illinois.\n[…]\nSuas exibições começaram a ficar mais cômicas a partir do final da década de 1930 e mais tarde a equipe adotou a versão da música Sweet Georgia Brown para as suas apresentações, com enorme sucesso.\n[…]\nNo inicio da década de 1990, a jogadora Lynette Woodard, medalhista olímpica, foi a primeira mulher a entrar na equipe.\n[…]\nprograma de TV com participação regular; Harlem Globetrotters (série animada de 1970 a 1972 pela CBS); The Harlem Globetrotters Popcorn Machine programa próprio de TV, na CBS, de 1974 a 1975; The Super Globetrotters, desenho animado apresentado originalmente em 1979, em treze episódios; The White Shadow série de TV; The Harlem Globetrotters on Gilligan's Island um telefilme de 1981; ou em jogos de videogame, como o Harlem Globetrotters: World Tour da Nintendo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Chicago Bulls",
      "descricao": "Franquia da NBA sediada em Chicago, fundada em 1966."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Fundado em 1966, o Chicago Bulls ganhou esse nome em referência a qual atividade econômica famosa da cidade?",
    "resposta": "Os frigoríficos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chicago_Bulls"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chicago_Bulls",
        "situacao": "ok",
        "texto": "The Chicago Bulls are an American professional basketball team based in Chicago. The Bulls compete in the National Basketball Association (NBA) as a member of the Central Division of the Eastern Conference. The team was founded on January 16, 1966, and played its first game during the 1966–67 NBA season. The Bulls share their home arena with the National Hockey League's Chicago Blackhawks, playing\n[…]\nThe Chicago Bulls were granted an NBA franchise on January 16, 1966, making them the third NBA team in Chicago's history, following the Chicago Stags (1946–1950) and the Chicago Packers/Zephyrs (1961–1963). The franchise was founded by Dick Klein, the only owner in Bulls history to have played professional basketball, having previously played for the Chicago American Gears. Klein served as the team's general manager and president during its formative years.\n[…]\nAfter the 1966 NBA expansion draft, the Bulls (coached by Chicagoan and former NBA All-Star Johnny \"Red\" Kerr) were allowed to acquire players from established teams. In their inaugural 1966–67 season, the Bulls played their first game on October 15, securing an upset victory over the St. Louis Hawks. They finished the season with a 33–48 record, the best by any expansion team in NBA history at the time, and became the first (and only) expansion team to qualify for the playoffs.\n[…]\n3 He also played for the team in 1966–1976.\n[…]\nIn 2020, the Chicago Bulls received significant media coverage following the release of The Last Dance, a critically acclaimed ESPN and Netflix documentary miniseries that chronicled Michael Jordan's career with the Bulls, with a particular focus on the team's 1997–98 championship season. The series reignited widespread interest in the Bulls' dominant run during the 1990s, leading to increased discussions across sports media and a surge in viewership for Bulls-related broadcasts."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chicago_Bulls",
        "situacao": "ok",
        "texto": "O Chicago Bulls é um time de basquete profissional americano sediado em Chicago, Illinois. Os Bulls competem na National Basketball Association (NBA) como um membro da Divisão Central da Conferência Leste da liga. A equipe foi fundada em 16 de janeiro de 1966 e jogou seu primeiro jogo durante a temporada de 1966/67. Os Bulls jogam seus jogos em casa no United Center, uma arena compartilhada com o \n[…]\nEm 16 de janeiro de 1966, Chicago recebeu uma franquia da NBA chamada Bulls. O Chicago Bulls se tornou a terceira franquia da NBA na cidade, depois do Chicago Stags (1946–1950) e do Chicago Packers / Zephyrs (1961–1963; agora Washington Wizards). O fundador da equipe, Dick Klein, foi o único proprietário a jogar basquete profissional (no Chicago American Gears). Ele atuou como presidente e gerente geral dos Bulls nos primeiros anos.\n[…]\nApós o Draft de expansão da NBA de 1966, o recém-fundado Chicago Bulls pôde adquirir jogadores das equipes previamente estabelecidas na liga para a temporada de 1966/67. A equipe começou na temporada de 1966/67 e registrou o melhor recorde de uma equipe de expansão na história da NBA. Treinados por Johnny Kerr e liderados por Guy Rodgers, Jerry Sloan e Bob Boozer, os Bulls se classificaram para os playoffs, sendo a única equipe da NBA a fazer isso em sua temporada inaugural.\n[…]\nRose ganhou o prêmio de MVP da NBA de 2011, tornando-se o jogador mais jovem da história da NBA a conquistá-lo. Ele se tornou o primeiro jogador dos Bulls desde Michael Jordan a ganhar o prêmio. Como equipe, Chicago terminou a temporada regular com um recorde de 62–20 e teve a melhor campanha da Conferência Leste pela primeira vez desde 1998.\n[…]\nEm 2 de janeiro de 2019, os Bulls (junto com o Chicago White Sox e o Chicago Blackhawks) concordou em um contrato de vários anos exclusivo com a NBC Sports Chicago, encerrando as transmissões da equipe na WGN-TV após a temporada de 2018/19.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Boston Celtics",
      "descricao": "Franquia da NBA sediada em Boston, fundada em 1946."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do Boston Celtics foi escolhido em homenagem à grande comunidade de imigrantes de qual país na cidade?",
    "resposta": "Irlanda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Boston_Celtics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Boston_Celtics",
        "situacao": "ok",
        "texto": "The Boston Celtics ( SEL-tiks) are an American professional basketball team based in Boston. The Celtics compete in the National Basketball Association (NBA) as a member of the Atlantic Division of the Eastern Conference. Founded in 1946 as one of the league's original eight teams, the Celtics play their home games at TD Garden, a shared arena with the NHL's Boston Bruins. The Celtics are commonly\n[…]\nThe Celtics have also worn a black band for reasons not directly related to the franchise, such as the Boston Marathon bombing in 2013 (later replaced with a dedicated memorial patch), and the death of Isaiah Thomas' younger sister during the 2017 NBA playoffs.\n[…]\nNBC Sports Boston is the Boston Celtics' main television outlet, having aired its games since 1981 when the station was known as PRISM New England. In 1983, it rebranded as SportsChannel New England. Like all the other SportsChannel networks, the New England channel was rebranded as Fox Sports New England when former owner Cablevision entered into a partnership with Liberty Media and News Corporation in 1998.\n[…]\nAll Celtics games are heard on radio through Beasley Broadcast Group's WBZ-FM (98.5, otherwise branded as \"The Sports Hub\"), with play-by-play from Sean Grande and color commentary from Cedric Maxwell, a deal in place since the 2013–14 season. It is carried on stations in five of the six New England States via the Boston Celtics Radio Network.\n[…]\nList of Boston Celtics head coaches\n[…]\nBoston Celtics draft history\n[…]\nBoston Celtics all-time roster\n[…]\nBoston Garden\n[…]\nBoston Celtics Radio Network\n[…]\nSports in Boston\n[…]\nNaismith Memorial Basketball Hall of Fame - Boston Celtics' Legacy - Profiles of legendary Celtics players such as Bill Russell, Bob Cousy, and Larry Bird from the official Hall of Fame website.\n[…]\nBasketball-Reference: Boston Celtics Franchise Index - Comprehensive data on the Celtics' season records, player statistics, and more."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Boston_Celtics",
        "situacao": "ok",
        "texto": "O Boston Celtics é uma franquia de basquetebol filiada à National Basketball Association e situada na cidade de Boston, no estado americano de Massachusetts. Fundado em 6 de junho de 1946, é uma das únicas equipes que se mantém desde que foi criada. É propriedade da Boston Basketball Partners LCC e joga os seus jogos em casa no TD Garden, dividindo o ginásio com o Boston Bruins da National Hockey \n[…]\nTanto o apelido de \"Celtics\" quanto o mascote \"Lucky the Leprechaun\" são uma homenagem à população irlandesa historicamente grande de Boston.\n[…]\nUm dos primeiros grandes jogadores a se juntar ao Celtics foi Bob Cousy, a quem Auerbach recusou inicialmente durante o draft. Cousy foi escolhido pelo St. Louis Hawks e pertencia ao Chicago Bulls até a falência da equipe de Illinois.\n[…]\nNo draft de 2014, os Celtics selecionaram Marcus Smart como a 6ª escolha geral e James Young como a 17ª escolha geral. O Boston da temporada de 2014-15 teve várias trocas, a mais importante foi a que levou Rondo e Dwight Powell para o Dallas Mavericks em troca de Brandan Wright, Jae Crowder, Jameer Nelson e escolhas futuras.\n[…]\nOs Celtics detinham quatro escolhas no draft da NBA de 2019. Após uma série de transações, a equipe escolheu Romeo Langford com a 14ª escolha e também adicionou Grant Williams, Carsen Edwards e Tremont Waters. Durante a entressafra de 2019, Irving e Horford assinaram com o Brooklyn Nets e o Philadelphia 76ers, respectivamente. Irving partiu, apesar de ter prometido permanecer em Boston.\n[…]\nA rivalidade entre Celtics e o New York Knicks vem da localização das equipes, ambas na divisão Atlantic da NBA. É uma das muitas rivalidades entre as equipes de Boston e Nova York. As duas franquias são as únicas duas franquias originais da NBA que permaneceram na mesma cidade durante sua existência.\n[…]\n*Passou toda a carreira de treinador principal da NBA com o Celtics\n[…]\nLista de treinadores do Boston Celtics",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "New York Knicks",
      "descricao": "Franquia da NBA sediada em Nova York, que manda seus jogos no Madison Square Garden."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Knicks, do time de Nova York, vem de Knickerbockers, apelido dos descendentes dos colonos de qual país?",
    "resposta": "Holanda",
    "distratores": [
      "Inglaterra",
      "França",
      "Suécia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/New_York_Knicks",
      "https://en.wikipedia.org/wiki/Knickerbocker"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/New_York_Knicks",
        "situacao": "ok",
        "texto": "The New York Knickerbockers, commonly called the New York Knicks, are an American professional basketball team based in the New York City borough of Manhattan. The Knicks compete in the National Basketball Association (NBA) as a member of the Atlantic Division of the Eastern Conference. The team plays its home games at Madison Square Garden, an arena it shares with the New York Rangers of the Nati\n[…]\nThe Knicks updated their \"new look logo\", this time eliminating the color black from the scheme. They still used the previous uniform during the 2011–12 season, but for the 2012–13 season, the Knicks unveiled new uniforms inspired from their \"championship era\" uniforms. A more subtle and bolder \"New York\" script was introduced, while the uniform piping stopped until the lettering. The phrase Once A Knick, Always A Knick is added on the uniform collar. Gray became the accent color.\n[…]\nThe teams have met 16 times in the postseason. The last time was in the 2024–25 season, when New York defeated Boston in six games in the conference semifinals. The Knicks faced the Celtics, who were without Rajon Rondo because of a mid-season injury, in the first round of the 2013 playoffs. In both games 1 and 2, Celtics had a lead going into halftime but were held to 25 and 23 points respectively in the second half, which was an all-time low for the franchise in the playoffs.\n[…]\nThe Miami Heat were one of the New York Knicks' strongest inter-divisional foes. The two teams met in the playoffs each year from 1997 to 2000, with all four of those series being played to the maximum number of games. Pat Riley, the head coach of the Miami Heat at the time, served as the head coach of the Knicks from 1991 to 1995 and led the Knicks to the 1994 NBA Finals. During this four-year span, the Heat and the Knicks each won two playoff series against each other."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Knickerbocker",
        "situacao": "desambiguacao",
        "texto": "Knickerbocker or Knickerbockers may refer to:\n\n\n== Arts and media ==\n\n\n=== Music ===\nThe Knickerbockers, an American music group best known for their 1965 hit \"Lies\"\nThe Knickerbockers, an alias of Ben Selvin and His Orchestra\n\"Knickerbocker\", a 2008 song by Fujiya & Miyagi\n\n\n=== Publications ===\nThe Knickerbocker (1833–1865), a literary magazine\nKnickerbocker News, a newspaper in Albany, New York"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/New_York_Knicks",
        "situacao": "ok",
        "texto": "New York Knickerbockers, mais comumente chamados de New York Knicks, é um time de basquete profissional americano baseado no bairro de Manhattan em Nova York. Os Knicks competem na National Basketball Association (NBA) como um membro da Divisão do Atlântico da Conferência Leste. A equipe joga seus jogos em casa no Madison Square Garden, uma arena que divide com o New York Rangers da National Hocke\n[…]\nO nome \"Knickerbocker\" vem do pseudônimo usado por Washington Irving em seu livro \"A History of New York\", um nome que foi aplicado aos descendentes dos colonizadores holandeses do que mais tarde se tornou Nova York, e mais tarde, por extensão, os Nova Iorquinhos em geral. Em busca de um treinador, Irish se aproximou do bem-sucedido técnico da Universidade de São João, Joe Lapchick, em maio de 1946.\n[…]\nO Brooklyn Nets, antigamente o New Jersey Nets, é o rival mais próximo dos Knicks geograficamente. Ambas as equipes jogam em Nova York, com os Knicks em Manhattan e os Nets no Brooklyn.\n[…]\nOs meios de comunicação notaram a semelhança da rivalidade dos Knicks-Nets com os de outras equipes da cidade de Nova York, como a rivalidade entre o New York Yankees e o New York Mets da MLB, devido à proximidade de ambos os bairros. Historicamente, os bairros de Manhattan e Brooklyn competiam através da rivalidade Dodgers-Giants, quando as duas equipes eram conhecidas como Brooklyn Dodgers e New York Giants.\n[…]\nA rivalidade entre o New York Knicks e o Indiana Pacers começou em 1993 e rapidamente se tornou uma das mais amargas da história da NBA. Eles se enfrentaram nos playoffs seis vezes entre 1993 e 2000, alimentando uma rivalidade simbolizada pela inimizade entre Reggie Miller e o proeminente fã dos Knicks, Spike Lee. A rivalidade deu Miller o apelido de \"The Knick-Killer\". Suas performances foram freqüentemente seguidas por sinais de estrangulamento em Lee, adicionando combustível à rivalidade.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Ponte aérea",
      "descricao": "Jogada de basquete em que um jogador lança a bola perto do aro e um companheiro a pega no ar e a enterra."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A jogada que no Brasil se chama ponte aérea é conhecida em inglês como alley-oop, expressão que vem de qual idioma?",
    "resposta": "Francês",
    "distratores": [
      "Italiano",
      "Espanhol",
      "Alemão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alley-oop_(basketball)",
      "https://en.wiktionary.org/wiki/alley-oop"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alley-oop_(basketball)",
        "situacao": "ok",
        "texto": "In basketball, an alley-oop is an offensive play in which one player passes the ball near the basket to a teammate who jumps, catches the ball in mid-air and dunks or lays it in before touching the ground.\n[…]\nThree years later, unheralded Idaho made the alley-oop an integral part of their undersized offense in 1982, ended the regular season eighth in both major polls at 26–2, and advanced to the Sweet Sixteen.\n[…]\nThe following year, North Carolina State also won the national championship on what could be considered the most famous alley-oop of all time against heavily favored Houston in the 1983 championship game at The Pit in Albuquerque, New Mexico. With time running out and the score tied, guard Dereck Whittenburg shot short of the rim, which effectively functioned as a pass to Lorenzo Charles, who caught the ball and stuffed it through the net to win the title in a huge upset.\n[…]\nDuring the 1990s, NBA stars turned the alley-oop into the game's ultimate quick-strike weapon. In recent years, teams have often run the alley-oop as a planned play. The 2008 National Champions Kansas Jayhawks had several designs for alley-oops, including some thrown from inbound sets, and could execute them interchangeably with almost all of the players being able to both lob and finish the play.\n[…]\nIn the 2008 film Semi-Pro, the protagonist invents the alley-oop after being knocked unconscious and speaking with his deceased mother in a depiction of Heaven.\n[…]\nIn the song “Basketball” for the 2002 film Like Mike, Lil Bow Wow raps “My favorite play is the alley-oop.”\n[…]\nAlley-oop (American football), the original usage of the term in sports"
      },
      {
        "url": "https://en.wiktionary.org/wiki/alley-oop",
        "situacao": "ok",
        "texto": "alley-oop - Wiktionary, the free dictionary\n[…]\nalley-oop ( third-person singular simple present alley-oops , present participle alley-ooping , simple past and past participle alley-ooped )\n[…]\n1967 August, John Devaney, “Sails in the Sky”, in Boys' Life , volume 57 , number 8, page 24 : At the sound Mike's heart alley-ooped into his throat.\n[…]\n2010 , Janet Evanovich, Sizzling Sixteen : I got my hand under Grandma's behind, and we alley-ooped her into the passenger seat.\n[…]\n2020 , L. J. Tracosas, WWE Kicking Down Doors , page 49 : Eventually, Trish was able to open up enough room to charge Lita, who alley-ooped her over the top rope with a big body drop.\n[…]\nRetrieved from \" https://en.wiktionary.org/w/index.php?title=alley-oop&oldid=91548800 \""
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Karl Malone",
      "descricao": "Ala-pivô americano que jogou 18 temporadas pelo Utah Jazz, parceiro de John Stockton."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O ala-pivô Karl Malone, do Utah Jazz, ganhou o apelido de qual profissão, porque sempre fazia a entrega?",
    "resposta": "Carteiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Karl_Malone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Karl_Malone",
        "situacao": "ok",
        "texto": "Karl Anthony Malone (born July 24, 1963), nicknamed \"the Mailman\", is an American former professional basketball player who played in the National Basketball Association (NBA) for 18 seasons with the Utah Jazz, and in his last season, the Los Angeles Lakers. During his tenure with the Jazz, he formed a formidable duo with his teammate John Stockton and together they led the team to two NBA Finals \n[…]\nIn the 1985 NBA draft, the Utah Jazz selected Karl Malone with the 13th overall pick. According to Malone's official NBA biography: \"If professional scouts had correctly predicted the impact Karl Malone would have on the NBA, Malone would have been picked much higher than 13th in the 1985 NBA Draft.\" In fact, Malone was so convinced the Dallas Mavericks were going to select him with the eighth choice that he had already rented an apartment in Dallas.\n[…]\nOn May 29, 2013, Malone returned to the Utah Jazz to work as a big man coach.\n[…]\nMalone wore number 32 for the Utah Jazz. He wore number 11 for the Los Angeles Lakers (number 32 was retired honoring Magic Johnson, though Johnson himself offered to have it unretired for Malone to wear, an offer Malone declined), though he was photographed with a number 32 jersey at his Lakers introductory press conference. Malone also wore number 11 for the Dream Team, as the players wore 4 to 15 to adhere to FIBA rules.\n[…]\nHe also owns two car dealerships in Utah and one in Louisiana. Karl Malone Toyota is in the Salt Lake City suburb of Draper, Utah, while Karl Malone Chrysler Dodge Jeep Ram is in Heber City, Utah. Malone previously co-owned a Toyota dealership in Albuquerque, New Mexico, with Larry H. Miller Dealerships, but sold his share in 2010. He also co-owned a Honda dealership in Sandy, Utah, with John Stockton, but sold his share, again to Larry H. Miller Dealerships, in 2010.\n[…]\nKarl Malone at IMDb\n[…]\nUtahStories.com Karl Malone's Impact on Utah Jazz"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Karl_Malone",
        "situacao": "ok",
        "texto": "Karl Anthony Malone (Bernice, 24 de julho de 1963), é um ex-jogador norte-americano de basquete profissional que fez quase toda a sua carreira na NBA como jogador do Utah Jazz (1985-2003), terminando sua carreira no Los Angeles Lakers (2003-2004). É considerado um dos maiores jogadores da história do basquete.\n[…]\nApesar de nunca ter sido campeão da NBA, foi vice-campeão duas vezes com o Utah Jazz e apesar de se mudar para o Los Angeles Lakers visando o título, ficou em segundo lá também.\n[…]\nFoi eleito duas vezes o MVP (Jogador Mais Valioso da NBA) em 1997 e 1999, Malone é considerado um dos 7 maiores jogadores de todos os tempos da NBA. Ele foi bicampeão dos Jogos Olímpicos em 1992 (com o famoso Dream Team) e em 1996.\n[…]\nMalone é atualmente o terceiro maior pontuador na história da NBA, com 36.928 pontos (média de 25 por jogo).\n[…]\nMalone é amplamente criticado até os dias de hoje por, aos 20 anos, ter engravidado uma menina de 13, Gloria Bell. A relação deu à luz a Demetress, um menino, ao qual o ex-jogador negou a paternidade durante anos. Nos dias atuais, Malone e Demetress Bell, que atuou na liga profissional de futebol norte-americana (NFL) por cinco temporadas, se reconciliaram.\n[…]\nMalone também teve duas filhas fora de seu casamento, as gêmeas Daryl e Cheryl Ford. Ambas seguiram os passos do pai, jogando basquete na faculdade Louisiana Tech, e Cheryl atuou pelo Detroit Shock e Dallas Fury, da WNBA, sendo tricampeã da liga. Ainda que o jogador nunca tenha negado a paternidade de ambas, ele também só \"entrou\" como figura paterna quando as filhas já tinham 17 anos.\n[…]\nNúmero 32 aposentado pelo Utah Jazz;",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Enterrada",
      "descricao": "Arremesso em que o jogador salta e empurra a bola de cima para baixo dentro do aro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Entre 1967 e 1976, o basquete universitário americano proibiu a enterrada, numa medida vista como reação ao domínio de qual pivô?",
    "resposta": "Kareem Abdul-Jabbar (então Lew Alcindor)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Slam_dunk",
      "https://en.wikipedia.org/wiki/Kareem_Abdul-Jabbar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Slam_dunk",
        "situacao": "ok",
        "texto": "A slam dunk, also simply known as a dunk, is a type of basketball shot that is performed when a player jumps in the air, controls the ball above the horizontal plane of the rim, and shoves the ball directly through the basket with either one or both hands. It is a type of field goal that is worth two points. Such a shot was known as a \"dunk shot\" until the term \"slam dunk\" was coined by former Los\n[…]\nDunking was banned in the NCAA and high school sports from 1967 to 1976.\n[…]\nMany people have attributed the ban to the dominance of the college phenomenon Lew Alcindor (now known as Kareem Abdul-Jabbar); the no-dunking rule is sometimes referred to as the \"Lew Alcindor rule.\" Others have attributed the ban to racial motivations, as at the time most of the prominent dunkers in college basketball were African-American, and the ban took place less than a year after the 1966 NCAA University Division basketball championship game, wherein a Texas Western team with an all-black starting lineup beat an all-white Kentucky team to win the national championship.\n[…]\nIn 1984, Georgeann Wells, a 6'7\" (201 cm) junior playing for West Virginia University, became the first woman to score a slam dunk in women's collegiate play, in a game against the University of Charleston on 21 December. On December 4, 1994, Charlotte Smith, then a member of the UNC Tar Heels women's basketball team, became the second collegiate women's player ever to dunk.\n[…]\nIn 2004, as a high school senior, Candace Parker was invited to participate in the McDonald's All-American Game and accompanying festivities where she competed in and won the slam dunk contest. In subsequent years other women have entered the contest; though Kelley Cain, Krystal Thomas, and Maya Moore were denied entry into the same contest in 2007.\n[…]\nSlam Dunk Contest\n[…]\nNBA.com: Destination Dunk\n[…]\nHow To Slam Dunk - Training On Increasing Vertical Jump To Slam Dunk"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kareem_Abdul-Jabbar",
        "situacao": "ok",
        "texto": "Kareem Abdul-Jabbar (born Ferdinand Lewis Alcindor Jr.; April 16, 1947) is an American former professional basketball player. He played as a center for 20 seasons in the National Basketball Association (NBA) with the Milwaukee Bucks and Los Angeles Lakers. He played college basketball for the UCLA Bruins. A member of the Naismith Memorial Basketball Hall of Fame, Abdul-Jabbar won a record six NBA \n[…]\nKareem Abdul-Jabbar was born Ferdinand Lewis Alcindor Jr. in Harlem, New York City, the only child of Cora Lillian, a department store price checker, and Ferdinand Lewis Alcindor Sr., a transit police officer and jazz musician. Cora was born in North Carolina but came to Harlem as part of the Great Migration. Ferdinand Sr. was the child of immigrants from Trinidad; his uncle was the Black activist and medical pioneer Dr. John Alcindor.\n[…]\nAbdul-Jabbar has spoken about the thinking that was behind his name change when he converted to Islam. He stated that he was \"latching on to something that was part of my heritage, because many of the slaves who were brought here were Muslims. My family was brought to America by a French planter named Alcindor, who came here from Trinidad in the 18th century. My people were Yoruba, and their culture survived slavery ...\n[…]\nIn 2020, Abdul-Jabbar revealed that he had been diagnosed with prostate cancer eleven years earlier.\n[…]\nAbdul-Jabbar, Kareem; Knobler, Peter (1983). Giant Steps. New York: Bantam Books. ISBN 0553050443.\n[…]\nKareem, with Mignon McCarthy (1990) ISBN 0-394-55927-4.\n[…]\nAbdul-Jabbar, Kareem; Obstfeld, Raymond; Cassara, Joshua; Guerrero, Luis; Bowland, Simon (2017). Mycroft Holmes and The Apocalypse Handbook. London: Titan Comics. ISBN 978-1-78585-300-5.\n[…]\nKareem Abdul-Jabbar at IMDb\n[…]\nKareem Abdul-Jabbar collected news and commentary at The New York Times\n[…]\nKareem Abdul-Jabbar at the Muck Rack journalist directory\n[…]\nKareem Abdul-Jabbar on Substack"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Enterrada",
        "situacao": "ok",
        "texto": "Enterrada (português brasileiro) ou afundanço (português europeu) é o termo usado em basquetebol para identificar um arremesso no qual o jogador salta, atira a bola se pendurando no aro da cesta de cima para baixo com a mão que realiza o arremesso posicionada sobre ele.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Garrafão",
      "descricao": "Área pintada da quadra de basquete entre a linha de fundo e a linha do lance livre."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1951, a NBA alargou o garrafão para conter o domínio de qual pivô do Minneapolis Lakers?",
    "resposta": "George Mikan",
    "fonte": [
      "https://en.wikipedia.org/wiki/George_Mikan",
      "https://en.wikipedia.org/wiki/Key_(basketball)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/George_Mikan",
        "situacao": "ok",
        "texto": "George Lawrence Mikan Jr. (; June 18, 1924 – June 1, 2005), nicknamed \"Mr. Basketball\", was an American professional basketball player for the Chicago American Gears of the National Basketball League (NBL) and the Minneapolis Lakers of the NBL, the Basketball Association of America (BAA) and the National Basketball Association (NBA). Invariably playing with thick, round spectacles, the 6 ft 10 in \n[…]\nMikan was born on June 18, 1924, in Joliet, Illinois, to a Croatian father, Joseph, and a Lithuanian mother, Minnie, along with brothers Joe and Ed and sister Marie. His grandfather, Juraj (George) Mikan was born in Vivodina, Croatia, then part of Austria-Hungary, in or about 1874. Juraj immigrated to Braddock, Pennsylvania, in 1891, where he married another Croatian immigrant, Marija, in 1906 in Allegheny, Pennsylvania.\n[…]\nIn the 1953–54 NBA season, the now 29-year-old Mikan slowly declined, averaging 18.1 points, 14.3 rebounds and 2.4 assists per game. Under his leadership, the Lakers won another NBA title, giving the team its third-straight championship and fifth in six years. From an NBA perspective, the Minneapolis Lakers dynasty has only been convincingly surpassed by the eleven-title Boston Celtics dynasty of 1957–69.\n[…]\nIn the mid-1980s, nearly 25 years after the Lakers had moved to Los Angeles in 1960 and after the ABA's Minnesota Muskies and Minnesota Pipers had departed, Mikan headed a task force with the goal of returning professional basketball to Minneapolis. This bid was successful, leading to the inception of the new Minnesota Timberwolves franchise in the 1989–90 NBA season.\n[…]\nIn addition, a banner in Crypto.com Arena commemorates Mikan and his fellow Minneapolis Lakers. He is also honored by a statue and an appearance on a mural in his hometown of Joliet, Illinois.\n[…]\nOn October 30, 2022, the Lakers retired Mikan's No. 99 jersey."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Key_(basketball)",
        "situacao": "ok",
        "texto": "The key is a marked area on a basketball court surrounding the basket, where much of the game's action takes place. The key is officially referred to as the free throw lane by the National Basketball Association (NBA), the EuroLeague, the National Collegiate Athletic Association (NCAA), the National Association of Intercollegiate Athletics (NAIA), and the National Federation of State High School A\n[…]\nIt is referred to as the restricted area by the International Basketball Federation (FIBA). The key is also simply called the lane.\n[…]\nDimensions of the key area have varied through the history of the game. The lane used to be only 6 feet wide, better resembling the keyhole of a warded lock. In the NBA, the success near the basket of tall center George Mikan led to widening the lane to 12 feet, and similarly Wilt Chamberlain led to the widening of the lane to 16 feet.\n[…]\nOriginally, the key was narrower and was shaped more like a keyhole, measuring six feet (1.8 m) wide, hence its name \"the key\", with the free-throw circle as the head, and the shaded lane as the body. It has been also called \"cup\" or \"bottle\" in other languages, because of how it looks from other perspectives. Due to the narrow key, imposing centers, such as George Mikan, dominated the paint, scoring at will.\n[…]\nThe lane is a restricted area in which players on offense (in possession of the ball) can stay for only three seconds. At all levels of play, after three seconds the player is assessed a three-second violation which results in a turnover.\n[…]\nThe panel delayed implementation of the arc until the 2012–2013 season for Divisions II and III to allow those schools more time to plan and place the restricted-area arc in their home arenas. Starting with the 2015–2016 season, the NCAA moved the RA arc out to four feet from the center of the basket; the NAIA followed suit."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/George_Mikan",
        "situacao": "ok",
        "texto": "George Lawrence Mikan, Jr. (Joliet, 18 de junho de 1924 - Scottsdale, 1 de junho de 2005), apelidado de Mr. Basketball, foi um jogador norte-americano de basquete profissional que jogou no Chicago American Gears da  National Basketball League (NBL) e no Minneapolis Lakers na Basketball Association of America (BAA) e na National Basketball Association (NBA).\n[…]\nFilho de pai croata, Joseph, e mãe lituana, Minnie, George nasceu em Joliet, Illinois. Seu avô, Juraj (George) Mikan nasceu em Voivodina, Croácia, então parte da Áustria-Hungria, por volta de 1874. Juraj emigrou para Braddock, Pensilvânia em 1891, onde se casou com outro imigrante croata, Marija, em 1906 em Allegheny, Pensilvânia. Em 17 de outubro de 1907, o pai de Mikan, Joseph, nasceu, e logo depois a família se mudou para Joliet.\n[…]\nComo consequência, todas as equipes tinham 9,09% de chance de conseguir Mikan, que acabou no Minneapolis Lakers.\n[…]\nEm meados da década de 1980, Mikan liderou uma força-tarefa com o objetivo de devolver o basquete profissional a Minneapolis, décadas depois que o Lakers se mudou para Los Angeles para se tornar o Los Angeles Lakers, e depois que Minnesota Muskies e Minnesota Pipers da ABA faliram. Esta oferta foi bem sucedida, levando ao início de uma nova franquia na temporada de 1989-90, o Minnesota Timberwolves.\n[…]\nQuando Shaquille O'Neal se tornou membro do Los Angeles Lakers, Mikan apareceu na capa da Sports Illustrated em novembro de 1996 com O'Neal e Kareem Abdul-Jabbar. Desde abril de 2001, uma estátua de Mikan enfeita a entrada do Target Center, arena do Minnesota Timberwolves. Além disso, um banner no Staples Center comemora Mikan e seus companheiros do Minneapolis Lakers. Ele também é homenageado por uma estátua e uma aparição em um mural em sua cidade natal, Joliet, Illinois.\n[…]\nPágina no Lakersplayers.org",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Bola de basquete",
      "descricao": "Bola esférica e inflável usada no basquete, hoje tipicamente laranja."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "As antigas bolas de basquete eram marrons. Por que, no fim dos anos cinquenta, elas passaram a ser laranja?",
    "resposta": "Para ficarem mais visíveis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Basketball_(ball)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Basketball_(ball)",
        "situacao": "ok",
        "texto": "A basketball is a spherical ball used in basketball games. Basketballs usually range in size from very small promotional items that are only a few inches (some centimeters) in diameter to extra large balls nearly 2 feet (60 cm) in diameter used in training exercises.\n[…]\nThis is a relatively low compressive and fatigue strength but for the applications of a basketball it is sufficient. This makes the ball durable when it is dribbled or thrown against the basketball backboard repeatedly. One final important mechanical property of butyl rubber is its vibration dampening.\n[…]\nImportant features of nylon that make it suitable for a basketball are that it can form into a fiber, it has high tensile strength, so as it gets wrapped around the ball it has a lower chance of just snapping under the tension, and it is lightweight. It has a tensile modulus of 3,103 MPa. This means that it resists stretching, making it a stiff material that does not deform much under stress.\n[…]\nThe leather on a basketball has a pebbled structure, increasing friction between the ball and the player's hand allowing for better grip.\n[…]\nNaismith assembled his class of 18 young men, appointed captains of two nine-player teams, and set in motion the first-ever basketball game, played with a soccer ball and two peach baskets tacked to either end of the gymnasium.\n[…]\nFor many years, leather was the material of choice for basketball coverings, however, in the late 1990s, synthetic composite materials were put forth and rapidly gained acceptance in most leagues, although the NBA's game balls still use real leather (apart from a brief experiment with a microfiber composite ball in 2006 that was not well received by the players)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bola_de_basquete",
        "situacao": "ok",
        "texto": "A bola de basquete é um dos equipamentos básicos para a prática do basquete. Dentre seus principais fabricantes, estão a Molten, Adidas, Nike, Spalding e Wilson.\n[…]\nO tamanho oficial de uma bola de basquete masculina é de 74,9 centímetros de circunferência, com 623 gramas de peso. No basquete feminino, as medidas oficiais são de 72,3 centímetros de circunferência e 566 gramas de massa, sendo um pouco mais leve e menor.\n[…]\nA primeira bola de basquete foi fabricada em 1891 pela empresa estadunidense A.C Spading & Brothers.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Basquete em cadeira de rodas",
      "descricao": "Adaptação do basquete para atletas com deficiência física, disputada em cadeiras de rodas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O basquete em cadeira de rodas surgiu nos Estados Unidos, nos anos quarenta, praticado por quem?",
    "resposta": "Veteranos feridos da Segunda Guerra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wheelchair_basketball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wheelchair_basketball",
        "situacao": "ok",
        "texto": "Wheelchair basketball is a style of basketball played using a sports wheelchair. The International Wheelchair Basketball Federation (IWBF) is the governing body for this sport. It is recognized by the International Paralympic Committee (IPC) as the sole competent authority in wheelchair basketball worldwide. FIBA has recognized IWBF under Article 53 of its General Statutes.\n[…]\nAt around the same time, starting from 1946, wheelchair basketball games were played, primarily between American World War II disabled veterans. It was a way for them to rehabilitate,  socialize, become more physically active, and improve in skills such as coordination and communication. In the United States, it began at the University of Illinois. Dr. Timothy Nugent founded the National Wheelchair Basketball Association in 1949 and served as commissioner for its first 25 years.\n[…]\nWheelchair basketball at the Summer Paralympics\n[…]\nWheelchair Basketball World Championship\n[…]\nIWBF U23 World Wheelchair Basketball Championship\n[…]\nEuropean Wheelchair Basketball Championship\n[…]\nAfrica Wheelchair Basketball Championship\n[…]\nAsia Oceania Zone (AOZ) Wheelchair Basketball Championship\n[…]\nPan American Wheelchair Basketball Championship\n[…]\nJerusalem Post article about wheelchair basketball: \"Hoop Dreams\"\n[…]\nLearn about Wheelchair Basketball and Find Activities\n[…]\n\"The 50th Anniversary of Wheelchair Basketball, A History,\" by Horst Strohkendl, Waxman Publishing Co, NY, 1996\n[…]\nWorld History of Wheelchair Basketball[link removed], British Wheelchair Basketball\n[…]\nHistory, National Wheelchair Basketball Association\n[…]\nInternational Wheelchair Basketball Federation (IWBF)\n[…]\nWheelchair basketball at the International Paralympic Committee\n[…]\nUniversity of Illinois wheelchair basketball at the Wayback Machine (archived 17 April 2021)\n[…]\nInvacare top end basketball wheelchairs used by Paralympic athletes at the Wayback Machine (archived 23 December 2016)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Basquetebol_em_cadeira_de_rodas",
        "situacao": "ok",
        "texto": "Basquetebol de cadeira de rodas é um desporto praticado principalmente por indivíduos com deficiências físicas. É baseado no basquetebol, mas com algumas adaptações para refletir a diversidade de dificuldades que eles enfrentam no tocante ao uso e à presença da cadeira de rodas e para harmonizar os diferentes níveis de deficiência dos jogadores. A International Wheelchair Basketball Federation (IW\n[…]\nA adaptação do basquetebol (ou só basquete) para o jogo em cadeira de rodas aconteceu, principalmente, após a Segunda Guerra Mundial. Ex-soldados do exército americano, feridos durante o confronto, se reuniram em uma quadra de um hospital de reabilitação e começaram a jogar. Na Inglaterra, a prática também era usada na reabilitação de pacientes no hospital de Stoke Mandeville.\n[…]\nO basquetebol em cadeira de rodas é disputado por pessoas  com alguma deficiência físico-motora. As cadeiras são adaptadas e padronizadas, conforme previsto nas regras, sob a responsabilidade da Federação Internacional de Basquetebol em Cadeira de Rodas (IWBF, em inglês), fundada em 1989 e que ganhou independência em 1998.\n[…]\nCada equipe tem 30 segundos de posse de bola e precisa arremessá-la em direção à cesta antes deste tempo. A cada dois toques na cadeira, o jogador precisará quicar, passar ou arremessar a bola. O simples contato das cadeiras dos participantes não é considerado falta pela arbitragem, apenas se for interpretada a intenção.\n[…]\nO basquetebol em cadeira de rodas é um esporte pioneiro, com muita tradição no movimento paralímpico.\n[…]\nRS PARADESPORTO - Basquete Gaúcho\n[…]\nhttp://www.brasil2016.gov.br/pt-br/paraolimpiadas/modalidades/basquete-em-cadeira-de-rodas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Air Jordan",
      "descricao": "Linha de tênis e roupas esportivas criada para Michael Jordan, lançada em 1985."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1985, a Nike anunciou que a NBA tinha proibido o primeiro tênis de Michael Jordan. Qual teria sido o motivo da proibição?",
    "resposta": "As cores fugiam do uniforme",
    "fonte": [
      "https://en.wikipedia.org/wiki/Air_Jordan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Air_Jordan",
        "situacao": "ok",
        "texto": "Air Jordan is a line of basketball and sportswear shoes produced by Nike, Inc. The shoes, related apparel and accessories are now marketed under Jordan Brand. The first Air Jordan shoe was produced for basketball player Michael Jordan during his time with the Chicago Bulls on November 17, 1984, and released to the public on April 1, 1985. The shoes were designed for Nike by Peter Moore, Tinker Hat\n[…]\nMoore, who was in charge of the design team, came across this Life magazine issue and had Jordan replicate the pose, this time in Chicago and wearing his Bulls uniform and Nike Air Jordan shoes. The \"Jumpman\" logo has developed and gone through different changes and can be seen on sneakers, attire, hats, socks, and other forms of wear. It has become one of the most recognizable logos in the athletics industry.\n[…]\nAir Jordan has collaborated with many brands and artists, including celebrities Drake, Billie Eilish, J Balvin, DJ Khaled, Eminem, Nicki Minaj, Future and Mark Wahlberg. After a collaboration with Nike on its Air Force One in 2017, rapper Travis Scott partnered with Jordan Brand to design \"Cactus Jack\" iterations of the Air Jordan 1, Air Jordan 4 and Air Jordan 6.\n[…]\nOn January 26, 1992, Jordan Brand debuted a commercial during Super Bowl XXVI which showed Bugs Bunny enlisting the help of Michael Jordan to outsmart a bullying rival team using cartoon gags. A second ad premiered in 1993 featuring Bugs and Jordan facing off against Marvin the Martian. The ads inspired Jordan's agent, David Falk, to pitch a film starring Jordan and the Looney Tunes characters.\n[…]\nThe Jordan Brand also sponsors 23XI Racing, which is co-owned by Michael Jordan in the No. 45 Toyota Camry driven by Tyler Reddick in the NASCAR Cup Series.\n[…]\nNational Basketball Association (\"Statement\" edition, NBA All-Star Game and Charlotte Hornets uniforms only)\n[…]\nNike Air Max\n[…]\nNike Blazers\n[…]\n\"Every Jordan Ever Made\" at Nike"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Air_Jordan",
        "situacao": "ok",
        "texto": "Air Jordan é uma linha de calçados de basquete produzida pela Nike, Inc. Vestuário e acessórios relacionados são comercializados sob a marca Jordan Brand. O primeiro tênis Air Jordan foi produzido para o ex-jogador de basquete do Hall of Fame Michael Jordan durante seu tempo com o Chicago Bulls no final de 1984 e lançado ao público em 1º de abril de 1985. Os sapatos foram desenhados para a Nike po\n[…]\nPor fim, em 26 de outubro de 1984, Michael Jordan assinou um contrato de cinco anos, US$2.5 milhões com a Nike, três vezes mais do que qualquer outro negócio na National Basketball Association (NBA) naquela época. A Nike lançou a linha de tênis Air Jordan em abril de 1985 com o objetivo de levantar US$3 milhões nos primeiros três anos. As vendas superaram em muito as expectativas, levantando US$126 milhões em um ano.\n[…]\nA política da NBA afirmava que os tênis deveriam ser 51% brancos e de acordo com os tênis que o restante do time usava. O não cumprimento dessa política resultou em uma multa de US$ 5.000 por jogo. A Nike projetou o Air Jordan I com base nas cores do Chicago Bull, vermelho e preto, e apenas 23% de branco, o que era uma violação dessa política. A empresa concordou em pagar cada multa, o que acabou gerando muita polêmica, mas também ganhou muita publicidade ao tênis.\n[…]\nSomente em 2022, a marca Jordan arrecadou US$ 5,1 bilhões para a Nike. Desse total, US$ 150-256 milhões foram diretamente para Michael Jordan sob seu contrato com a Nike.\n[…]\nMoore, responsável pela equipe de design, encontrou essa edição da revista Life e pediu a Jordan que replicasse a pose, desta vez em Chicago, vestindo seu uniforme do Bulls e tênis Nike Air Jordan. O logo \"Jumpman\" evoluiu e passou por diferentes mudanças, podendo ser visto em tênis, roupas, bonés, meias e outros itens de vestuário. Tornou-se um dos logos mais reconhecidos na indústria esportiva.\n[…]\n\"Every Jordan Ever Made\" at Nike.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Aro de basquete",
      "descricao": "Anel de metal com rede, preso à tabela, por onde a bola deve passar para marcar pontos."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Desde a invenção do esporte, a que altura do chão fica o aro de basquete?",
    "resposta": "3,05 metros",
    "fonte": [
      "https://en.wikipedia.org/wiki/Basketball_court",
      "https://en.wikipedia.org/wiki/Basketball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Basketball_court",
        "situacao": "ok",
        "texto": "In basketball, the basketball court is the playing surface, consisting of a rectangular floor, with baskets at each end. Indoor basketball courts are almost always made of polished wood, usually maple, with 10 feet (3.048 m)-high rims on each basket. Outdoor surfaces are generally made from standard paving materials such as concrete or asphalt. International competitions may use glass basketball c\n[…]\nBasketball courts come in many different sizes. In the National Basketball Association (NBA), the court is 94 by 50 feet (28.7 by 15.2 m). Under International Basketball Federation (FIBA) rules, the court is slightly smaller, measuring 28 by 15 meters (91.9 by 49.2 ft). In amateur basketball, court sizes vary widely. Many older high school gyms were 84 feet (26 m) or even 74 feet (23 m) in length. The baskets are always 10 feet (3.05 m) above the floor (except possibly in youth competition).\n[…]\nThe key, free throw lane or shaded lane refers to the usually painted area beneath the basket; for the NBA, it is 16.02 feet (wider for FIBA tournaments). Since October 2010, the FIBA-spec key has been a rectangle 4.9 m wide and 5.8 m long. Previously, it was a trapezoid 3.7 meters (12 ft) wide at the free-throw line and 6 meters (19 feet and 6.25 inches) at the end line; the NBA and U.S. college basketball has always used a rectangle key.\n[…]\nThe no charge zone arc rule first appeared at any level of basketball in the NBA in the 1997–98 season. The NCAA restricted area arc was originally established for the 2011–12 men's and women's seasons at a 3-foot (0.91 m) radius from below the center of the basket, and was extended to match the 4-foot radius for the 2015–16 season and beyond. NCAA men's basketball still uses the 4-foot radius."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Basketball",
        "situacao": "ok",
        "texto": "Basketball is a team sport in which two teams of five players each (excluding substitutes) oppose one another on a rectangular court. Players compete with the primary objective of shooting a basketball through a hoop (a basket mounted to a backboard) at each end of the court. Teams alternate between offense (when they attempt to score), and defense (when they try to prevent the opposing side from \n[…]\nThe basket is a steel rim 18 inches (46 cm) diameter with an attached net affixed to a backboard that measures 6 by 3.5 feet (1.8 by 1.1 meters) and one basket is at each end of the court. The white outlined box on the backboard is 18 inches (46 cm) high and 2 feet (61 cm) wide. At almost all levels of competition, the top of the rim is exactly 10 feet (3.05 meters) above the court and 4 feet (1.22 meters) inside the baseline.\n[…]\nSmall forward (the \"3\") : often primarily responsible for scoring points via cuts to the basket and dribble penetration; on defense seeks rebounds and steals, but sometimes plays more actively.\n[…]\nPlayers regularly inflate their height in high school or college. Many prospects exaggerate their height while in high school or college to make themselves more appealing to coaches and scouts, who prefer taller players. Charles Barkley stated; \"I've been measured at 6–5, 6-4+3⁄4. But I started in college at 6–6.\" Sam Smith, a former writer from the Chicago Tribune, said: \"We sort of know the heights, because after camp, the sheet comes out. But you use that height, and the player gets mad.\n[…]\nHalf-court basketball is usually played 1-on-1, 2-on-2, or 3-on-3. The last of these variations is gradually gaining official recognition as 3x3, originally known as FIBA 33. It was first tested at the 2007 Asian Indoor Games in Macau and the first official tournaments were held at the 2009 Asian Youth Games and the 2010 Youth Olympics, both in Singapore."
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Falta pessoal no basquete",
      "descricao": "Infração por contato ilegal com um adversário, cujo acúmulo exclui o jogador da partida."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na NBA, o jogador só é excluído na sexta falta pessoal. Pelas regras da FIBA, usadas nas Olimpíadas, quantas faltas já o tiram do jogo?",
    "resposta": "Cinco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Personal_foul_(basketball)",
      "https://en.wikipedia.org/wiki/Rules_of_basketball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Personal_foul_(basketball)",
        "situacao": "ok",
        "texto": "In basketball, a personal foul is a breach of the rules concerning personal contact with an opponent. It is the most common type of foul in basketball. A player fouls out on reaching a limit on personal fouls for the game and is disqualified from participation in the remainder of the game.\n[…]\nPersonal contact does not necessarily constitute a personal foul, unless it gives a player an advantage or puts the opponent at a disadvantage.\n[…]\nIn some rulebooks, such as that of FIBA, a technical foul is included in the count of player fouls.\n[…]\nA flagrant foul.\n[…]\nIn full-court play, FIBA awards the fouled player one free throw plus possession of the ball for a \"throw-in foul\", defined as a foul in the last 2 minutes of a period (either a quarter or overtime) against an offensive player while the ball is out of bounds and either in the hands of the referee or at the disposal of the player taking the throw-in.\n[…]\nFoul to give\n[…]\nA player who commits five personal fouls over the course of a 40-minute game, or six in a 48-minute game, fouls out and is disqualified for the remainder of the game. A player within one or two fouls of fouling out is in \"foul trouble.\" Players who foul out are not ejected and may remain in the bench area for the remainder of the game. Fouling out of a game is not a disciplinary action.\n[…]\nIn FIBA-authorized 3x3 half-court competition, players cannot foul out because personal foul counts are kept only on a team basis and not individually. However, unsportsmanlike and disqualifying fouls (equivalent to the flagrant fouls of most North American rule sets) are assessed to individuals, and a player who commits two unsportsmanlike fouls or one disqualifying foul is removed from the game.\n[…]\nThe following list shows the NBA players with the most career personal fouls:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rules_of_basketball",
        "situacao": "ok",
        "texto": "The rules of basketball are the rules and regulations that govern the play, officiating, equipment and procedures of basketball. While many of the basic rules are uniform throughout the world, variations do exist. Most leagues or governing bodies in North America, the most important of which are the National Basketball Association and NCAA, formulate their own rules.\n[…]\nNo shouldering, holding, pushing, tripping or striking in any way the person of an opponent shall be allowed. The first infringement of this rule by any person shall count as a foul; the second shall disqualify him until the next goal is made or, if there was evident intent to injure the person, for the whole of the game. No substitute allowed.\n[…]\nWhen the ball goes out of bounds it shall be thrown into the field and played by the first person touching it. In case of dispute the umpire shall throw it straight into the field. The thrower in is allowed five seconds, if he holds it longer, it shall go to the opponent. If any side persists in delaying the game, the umpire shall call a foul on them.\n[…]\nStarting with the team's fifth foul in the quarter, the player fouled gets two free throws.\n[…]\nIn FIBA 3x3 (half-court) play:\n[…]\nRestricted zone: In 1997, the NBA introduced an arc of a 4-foot (1.2 m) radius around the basket, in which an offensive foul for charging could not be assessed. This was to prevent defensive players from attempting to draw an offensive foul on their opponents by standing underneath the basket. FIBA adopted this arc with a 1.25-meter (4 ft 1 in) radius in 2010.\n[…]\nThe most recent international rules of basketball were approved February 2, 2014 by FIBA and became effective on October 1st of that year.\n[…]\nRules of the Game @ usabasketball.com FIBA, NBA, and NCAA rules compared side by side.\n[…]\nFIBA:\n[…]\n\"FIBA / USA basketball rule differences and rule changes for various rule making bodies\""
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Basquete 3x3",
      "descricao": "Modalidade de basquete jogada em meia quadra, com três jogadores de cada lado e uma só cesta."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "No basquete três contra três, o tempo de cada ataque é bem menor que os vinte e quatro segundos do jogo tradicional. Quantos segundos?",
    "resposta": "12",
    "fonte": [
      "https://en.wikipedia.org/wiki/3x3_basketball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/3x3_basketball",
        "situacao": "ok",
        "texto": "3x3 basketball (stylized as ƐX3, pronounced three-ex-three) is a variation of basketball played three-a-side, with one backboard and in a half-court setup. This basketball game format is currently being promoted and structured by FIBA, the sport's governing body. Its primary competition is an annual FIBA 3X3 World Tour, comprising a series of Masters and one Final tournament, and awarding six-figu\n[…]\nThe offensive team must attempt a shot for a goal within 12 seconds. An offensive player may also not dribble inside the arc with their back or side to the basket for more than 3 consecutive seconds. For either violation the defensive team is granted possession.\n[…]\nSubstitutions can occur only in a dead-ball situation; a substitute can only enter from behind the end line opposite the basket, and the substitution becomes official once the player leaving the game has \"tagged up\" by making physical contact with the substitute. Each team is allowed one 30 second time-out per game.\n[…]\n3x3 basketball became a regular European Games contest since its introduction at the 2015 European Games in Baku, Azerbaijan.\n[…]\n3x3 basketball made a debut in Olympic programme for the 2020 Summer Olympics in Tokyo, Japan, for both men and women.\n[…]\n3x3 basketball was included in 2022 Commonwealth Games in Birmingham, England.\n[…]\nAfter the 2022 Russian invasion of Ukraine, FIBA banned Russian teams and officials from participating in FIBA 3x3 Basketball competitions.\n[…]\n3x3 basketball at the Summer Olympics\n[…]\nBasketball at the Commonwealth Games\n[…]\nBIG3 – 3x3 basketball league played mostly by retired NBA players, using different rules and a different ball from FIBA-sanctioned 3x3\n[…]\nTwenty-one – a variation of basketball where teams must score exactly 21 points to win\n[…]\nMario Hoops 3-on-3 – a 3x3 basketball video game featuring Mario and Final Fantasy characters"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Basquetebol_3x3",
        "situacao": "ok",
        "texto": "O Basquete 3x3 (pronunciado Basquete três contra três), inicialmente chamado FIBA33, é um esporte relativamente novo, praticado por equipes compostas por três jogadores(as) e um(a) reserva cada, em um espaço de jogo similar a uma meia quadra de Basquete\n[…]\nCada equipe tem quatro jogadores, dos quais três estão em campo, e um de reserva.\n[…]\nEm vez dos três árbitros usados no basquetebol regular, no 3x3 há apenas dois árbitros, e ainda um marcador, um controlador do tempo e um operador do relógio de jogadas.\n[…]\nA FIBA está igualmente a desenvolver um sistema de ranking mundial para o FIBA 3x3, estando a consultar as empresas tecnológicas, bem como professores de estatística de uma universidade no país da sede da FIBA (a Suíça). Como o 3x3 é uma versão cortada do jogo tradicional de basquetebol, tem um paralelo óbvio no Voleibol de praia, uma variante de exterior com dois jogadores por equipa do voleibol.\n[…]\nA FIBA vê o 3x3 como um grande veículo de promoção do jogo à volta do mundo. Como Baumann afirmou em 2008, \"O conceito 3 por 3 tem todos os elementos e capacidades requeridas para o basquetebol, inspirou e continuará a inspirar alguns grandes jogadores no futuro. Ao mesmo tempo, é a mais fácil e uma das mais efectivas formas de trazer os mais jovens para o basquetebol, mantê-los e promover o nosso jogo.\n[…]\nPor fim, pode se dizer que no que se refere a história e desenvolvimento do Basquete 3x3, seu ápice foi sua inclusão nos Jogos Olímpicos, cuja estreia ocorreu nos Jogos Olímpicos de Toquio 2020, realizado em 2021 em virtude da pandemia de COVID-19, o  que para além de regras e características de jogo, reforça a diferença e singularidade do Basquete 3x3 frente as outras vertentes institucionalizadas ou informais do Basquete.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Regras originais do basquete",
      "descricao": "Documento datilografado de 1891 em que James Naismith estabeleceu as treze regras do basquete."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Ao inventar o basquete, em 1891, o professor James Naismith escreveu quantas regras para o novo jogo?",
    "resposta": "13",
    "distratores": [
      "7",
      "10",
      "21"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/James_Naismith",
      "https://en.wikipedia.org/wiki/Rules_of_basketball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/James_Naismith",
        "situacao": "ok",
        "texto": "James Naismith ( NAY-smith; November 6, 1861 – November 28, 1939) was a Canadian-American physical educator, physician, Christian chaplain, and sports coach, best known as the inventor of the game of basketball.\n[…]\nIn order to score goals, players would throw a soft, lobbing shot like that which had proven effective in his old favorite game, duck on a rock. For this purpose, Naismith asked a janitor to find a pair of boxes, but the janitor brought him peach baskets instead. Naismith christened this new game Basket Ball and put his thoughts together in 13 basic rules.\n[…]\nNaismith invented the game of basketball and wrote the original 13 rules of this sport; for comparison, the NBA rule book today features 66 pages. The Naismith Memorial Basketball Hall of Fame in Springfield, Massachusetts, is named in his honor, and he was an inaugural inductee in 1959.\n[…]\nThe original rules of basketball written by Naismith in 1891, considered to be basketball's founding document, were auctioned at Sotheby's, New York, in December 2010. Josh Swade, a University of Kansas alumnus and basketball enthusiast, went on a crusade in 2010 to persuade moneyed alumni to consider bidding on and hopefully winning the document at auction to give it to the University of Kansas. Swade eventually persuaded David G.\n[…]\nJames Naismith's Original Rules of Basketball\n[…]\nReprinted: Naismith, James (1996). Basketball : its origin and development. Lincoln: University of Nebraska Press. ISBN 9780803283701. OCLC 604260339.\n[…]\nRains, Rob; Carpenter, Hellen (2009). James Naismith : the man who invented basketball. Philadelphia: Temple University Press. ISBN 9781439901359. JSTOR j.ctt14btb6m. OCLC 489150081.\n[…]\nJames Naismith at Find a Grave"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rules_of_basketball",
        "situacao": "ok",
        "texto": "The rules of basketball are the rules and regulations that govern the play, officiating, equipment and procedures of basketball. While many of the basic rules are uniform throughout the world, variations do exist. Most leagues or governing bodies in North America, the most important of which are the National Basketball Association and NCAA, formulate their own rules.\n[…]\nOn 15 January 1892, James Naismith published his rules for the game of \"Basket Ball\" that he invented: The original game played under these rules was quite different from the one played today as there was no dribbling, dunking, three-pointers, or shot clock, and goal tending was legal.\n[…]\nA foul is striking at the ball with the fist, violation of rules 3 and 4, and such described in rule 5.\n[…]\nNaismith's original 1892 manuscript of the rules of basketball, one of the most expensive manuscripts in existence, is publicly displayed at Allen Fieldhouse on the campus of the University of Kansas. Naismith was the first coach in the history of Kansas Jayhawks men's basketball.\n[…]\nThe NCAA adopted a 45-second shot clock for men while continuing with the 30-second clock for women in 1985. The men's shot clock was then reduced to 35 seconds in 1993, and further reduced to 30 seconds in 2015. FIBA reduced the shot clock to 24 seconds in 2000, and changed the clock's resetting to when the ball touched the rim of the basket. Originally, a missed shot where the shot clock expired while the ball is in the air constituted a violation.\n[…]\nInitially, basketball was played with an \"ordinary association football (soccer ball), although the sport now uses its own ball. The goal is placed 10 feet (3.05 m) above the court. Originally a basket was used (thus \"basket-ball\"), so the ball had to be retrieved after each made shot. Today a hoop with an open-bottom hanging net is used instead.\n[…]\nOfficial Basketball rules"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/James_Naismith",
        "situacao": "ok",
        "texto": "James Naismith (Almonte, 6 de novembro de 1861 - Lawrence, 28 de novembro de 1940) foi um professor de educação física canadense e inventor do basquetebol.\n[…]\nImaginou um alvo que não ficasse no chão, para diferenciar-se do hóquei e o futebol. Foi então que Naismith inventou o  basquetebol. Sua invenção foi aperfeiçoada em 15 de janeiro de 1892, quando publicou as 13 regras para jogar basquetebol. No início pendurou um cesto de pêssegos a uma altura que julgou adequada, a 3,05 metros, altura que se mantém até hoje; já a quadra possuía, aproximadamente, metade do tamanho da atual.\n[…]\nÉ Naismith quem inicia o primeiro jogo de basquete nos Jogos Olímpicos de Verão de 1936, em Berlim, entre França e Estônia, além de entregar as primeiras medalhas olímpicas do desporto por ele criado.\n[…]\nO primeiro jogo oficial de basquete foi disputado em 1892, com regras bem diferentes das praticadas atualmente.\n[…]\nPara as mulheres, o basquete veio um ano mais tarde, iniciou em 1892. Naquela época, a professora de educação física do Smith College, Senda Berenson, fez algumas adaptações às regras criadas por James Naismith. A primeira partida se deu em 1896.\n[…]\nEm 1898, Naismith se tornou o primeiro treinador de basquete da Universidade do Kansas. Ele compilou um recorde de 55-60 e é ironicamente o único treinador perdedor na história do Kansas. Naismith está no início de uma enorme e prestigiosa árvore de treinamento, já que ele treinou o treinador do Hall da Fama do Naismith Memorial Basketball: Phog Allen, que treinou os treinadores do Hall da Fama: Dean Smith, Adolph Rupp e Ralph Miller, que treinaram futuros treinadores.\n[…]\nBasquetebol",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Jogo da Morte",
      "descricao": "Filme de artes marciais de 1978, estrelado por Bruce Lee e concluído após a morte do ator."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No filme Jogo da Morte, Bruce Lee enfrenta um lutador de mais de dois metros de altura. Que astro do basquete fez esse papel?",
    "resposta": "Kareem Abdul-Jabbar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Game_of_Death"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Game_of_Death",
        "situacao": "ok",
        "texto": "The Game of Death is an incomplete Hong Kong martial arts film directed by, written by, and starring Bruce Lee. Produced by Concord Production and expected to be released in 1973, over 120 minutes of footage was shot between September and October 1972, mostly from the climax of the film.\n[…]\nKareem Abdul-Jabbar as Mantis (螳) – 5th Floor Guardian\n[…]\nGame of Death is a 1978 Hong Kong martial arts film co-written (under the pseudonym Jan Spears alongside Raymond Chow) and directed by Robert Clouse, with action choreography by Sammo Hung. The film stars Bruce Lee, with Kim Tai-jong and Yuen Biao as his stunt doubles, along with Gig Young (in his final film appearance), Dean Jagger, Colleen Camp, Robert Wall, Hugh O'Brian, Dan Inosanto, Kareem Abdul-Jabbar, Mel Novak, Sammo Hung, Ji Han-jae and Casanova Wong.\n[…]\nKareem Abdul-Jabbar as Hakim –  Quarter Floor Guardian\n[…]\nEnter the Game of Death (1978, starring Bruce Le)\n[…]\nWilliam Zabka referenced Game of Death during his audition for the role of Johnny Lawrence in The Karate Kid (1984), when the director John Avildsen asked him \"how old are you? You're a little bigger than our karate kid.\" Zabka responded, \"Bruce Lee was smaller than Kareem Abdul Jabbar, but he beat him\" in reference to Game of Death, to which Avildsen responded \"Yeah, that's true.\" That convinced Avildsen to cast Zabka for the role.\n[…]\nThe second episode of the anime series Cowboy Bebop, \"Stray Dog Strut\", further pays homage with the episode's main antagonist being named Abdul Hakim (after Kareem Abdul-Jabbar's character) and bearing a strikingly similar appearance.\n[…]\nIn the Playmore fighting game Rage of the Dragons, Mr. Jones (who already bears a striking resemblance to Kareem Abdul Jabbar) wears a suit very similar to the famous yellow jump suit.\n[…]\nGame of Death at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Game_of_Death",
        "situacao": "ok",
        "texto": "Game of Death (bra: Jogo da Morte; prt: O Último Combate de Bruce Lee, em cantonês:  Sei5 Mong4 Jau4 Hei3) é um filme incompleto de artes marciais estrelado, escrito, dirigido e produzido por Bruce Lee.\n[…]\nBruce morreu durante as gravações. Mais de 100 minutos de vídeo foram filmados antes de sua morte, depois alguns deles foram parar nos arquivos da Golden Harvest.\n[…]\nÀ época de sua morte, Bruce tinha planos para retomar as filmagens de O Jogo da Morte.\n[…]\nApós a morte de Bruce, o diretor de Operação Dragão Robert Clouse foi encarregado de terminar o filme usando dublês e um novo roteiro. Sua versão foi lançada em 1978, cinco anos após a morte do protagonista.\n[…]\nNa trama original de Game of Death, Bruce Lee interpreta um campeão mundial de arte marciais, Hai Tien, que recentemente havia se aposentado dos torneios.\n[…]\nNo 2.º andar encontra-se Dan Inosanto, no 3.º andar o mestre de Hapkido Jin Han Jae e por fim, no 4.º andar, Kareem Abdul-Jabbar, que faz uma luta épica contra Hai Tien.\n[…]\nNo filme, o personagem de Bruce Lee simula sua própria morte. As cenas do funeral de seu personagem são, na verdade, cenas reais de seu próprio funeral.\n[…]\nNa primeira, Bruce Lee preferiu dedicar-se a um novo projeto que surgia, o filme Operação Dragão.\n[…]\nNa agenda de Bruce Lee, onde relatava os seus compromissos, estava programada a conclusão da filmagem de Game of Death, agendada para Setembro de 1973.\n[…]\nAlém de Bruce Lee, Abdul-Jabbar e Inosanto foram os únicos a ter participação direta, tanto no elenco de 1972, quanto de 1978.\n[…]\nNa final do filme são exibidas cenas de vários filmes de Bruce Lee, como forma de homenagem.\n[…]\nKareem Abdul-Jabbar como Hakim\n[…]\nKareem Abdul-Jabbar como mantis e 5º guardião\n[…]\nGame of Death no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Homens Brancos Não Sabem Enterrar",
      "descricao": "Comédia americana de 1992 sobre dois apostadores do basquete de rua de Los Angeles."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na comédia Homens Brancos Não Sabem Enterrar, de 1992, Woody Harrelson forma uma dupla de basquete de rua com qual ator?",
    "resposta": "Wesley Snipes",
    "fonte": [
      "https://en.wikipedia.org/wiki/White_Men_Can%27t_Jump"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/White_Men_Can%27t_Jump",
        "situacao": "ok",
        "texto": "White Men Can't Jump is a 1992 American sports comedy film written and directed by Ron Shelton. It stars Wesley Snipes and Woody Harrelson as streetball hustlers. The film was released in the United States on March 27, 1992, by 20th Century Fox.\n[…]\nBob Lanier, Detroit Pistons and Milwaukee Bucks player and Hall of Famer, was hired as the basketball coach for the film. Woody Harrelson, Wesley Snipes, and other cast members attended an intensive month-long basketball camp to prepare for filming. Lanier was impressed with Harrelson and Snipes, and believed both of them had the skill of Division II college players. During camp and film production, Lanier noted that between the two of them, Harrelson actually was the better player.\n[…]\nTwo soundtracks were released by Capitol Records. The first soundtrack using the film title was released on March 24, 1992, and consisted mostly of R&B. The soundtrack peaked at number 92 on the Billboard 200 and number 48 on the Top R&B/Hip-Hop Albums chart and features the single \"White Men Can't Jump\" by Riff, which peaked at number 90 on the Billboard Hot 100. The accompanying music video featured Harrelson, Snipes and Perez. AllMusic rated it two and a half out of five stars.\n[…]\nWhite Men Can't Jump soundtrack\n[…]\n\"White Men Can't Jump\"- 3:35 (Riff)\n[…]\nWhite Men Can't Rap\n[…]\nRoger Ebert of the Chicago Sun-Times gave the film three and a half stars, saying it was \"not simply a basketball movie\", praising Ron Shelton for \"knowing his characters\". Janet Maslin from The New York Times praised Wesley Snipes for his \"funny, knowing performance with a lot of physical verve\". The film was a favorite of director Stanley Kubrick.\n[…]\nWhite Men Can't Jump at IMDb\n[…]\nWhite Men Can't Jump at Rotten Tomatoes"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Draft da NBA de 1984",
      "descricao": "Seleção anual de novos jogadores da NBA em 1984, em que Michael Jordan foi a terceira escolha."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No draft da NBA de 1984, Michael Jordan foi apenas a terceira escolha. Que pivô foi escolhido em primeiro lugar?",
    "resposta": "Hakeem Olajuwon",
    "distratores": [
      "Sam Bowie",
      "Charles Barkley",
      "Patrick Ewing"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1984_NBA_draft"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1984_NBA_draft",
        "situacao": "ok",
        "texto": "The 1984 NBA draft was the 37th annual draft of the National Basketball Association (NBA). It was held at the Felt Forum at Madison Square Garden in New York City, New York, on June 19, 1984, before the 1984–85 season. The draft is generally considered to be one of the greatest, if not the greatest, in NBA history, with four players who would go on to be Hall of Famers being drafted in the first s\n[…]\nIt included first pick Akeem Olajuwon, Michael Jordan, Charles Barkley, and John Stockton. The draft was broadcast in the United States on the USA Network. This draft would be the last NBA draft to be aired nationally on the USA Network; starting with the 1985 NBA draft year, the NBA would have increased national coverage by first airing the event on TBS and then on TNT before airing the event on ESPN as of 2003.\n[…]\nThis is the most recent draft to feature two rookies to play in the All-Star Game, with Jordan and Olajuwon both selected in the 1985 game.\n[…]\nChicago used the pick to draft Ben Coleman.\n[…]\nFor the sixth time in seven years, no college underclassman would withdraw their entry into the NBA draft, with nine total players qualifying for this year's event. However, this draft would be the first NBA draft to showcase that college underclassmen like Akeem Olajuwon, Michael Jordan, and Charles Barkley could succeed just as well as players that had four years of collegiate experience.\n[…]\n^ 1: When Hakeem Olajuwon first arrived to the United States in 1981, his first name was incorrectly spelled as \"Akeem\". He used that spelling until March 9, 1991, when he announced that he would add an H and changed it to \"Hakeem\", the original Arabic spelling of his name.\n[…]\n^ 2: Hakeem Olajuwon was born in Nigeria, but became a naturalized United States citizen in 1993. He has represented the United States national team.\n[…]\nList of first overall NBA draft picks\n[…]\nNBA.com: NBA Draft History"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Draft_da_NBA_de_1984",
        "situacao": "ok",
        "texto": "O Draft da NBA de 1984 foi realizado no dia 19 de junho de 1984, no teatro do Madison Square Garden, na cidade de Nova York, NY. O draft  foi transmitido nos Estados Unidos pela extinta NBA on USA, antes da temporada 1984-85. Neste draft, os times da National Basketball Association (NBA) selecionaram novatos da universidade nos Estados Unidos e outros jogadores elegíveis, incluindo jogadores inter\n[…]\nEsse draft ficou marcado como um dos melhores da história da NBA, por revelar jogadores que entraram para Hall da Fama do Basquete como Hakeem Olajuwon, Charles Barkley e John Stockton, além do lendário Michael Jordan, considerado o melhor jogador de basquete de todos os tempos.\n[…]\nQuem também foi selecionado neste draft foi Oscar Schmidt, então com 26 anos de idade. Draftado pelo New Jersey Nets na sexta rodada (em 131º), Oscar declinou ao convite para jogar na NBA porque se aceitasse, ele seria impedido de defender a seleção brasileira. Em 2017, Oscar seria homenageado pelo New Jersey Nets com um quadro com camisa personalizada por conta deste episódio.\n[…]\nO Draft de 84 ainda guarda outras curiosidades. Antes de virar um dos maiores nomes do atletismo mundial, Carl Lewis foi selecionado pelo Chicago Bulls para atuar na NBA. Outro que também foi selecionado em 84 foi o ala-pivô Kevin Willis, campeão com o San Antonio Spurs em 2002/03, que se tornaria o jogador mais longevo da história da NBA: parou aos 44 anos. Por fim, outro grande nome deste draft foi o de Mike Whitmarsh, medalhista de prata em Atlanta-96 no vôlei de praia.\n[…]\nEscolhido pelo Portland Trail Blazers como a 111ª escolha, Mike jogou basquete e vôlei ao mesmo tempo pela University of San Diego.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Bronny James",
      "descricao": "Armador americano, filho de LeBron James, escolhido pelo Los Angeles Lakers no draft de 2024."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 2024, LeBron James e Bronny James fizeram história ao entrar juntos em quadra pelo Lakers. Que laço inédito na NBA os une?",
    "resposta": "São pai e filho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bronny_James",
      "https://en.wikipedia.org/wiki/LeBron_James"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bronny_James",
        "situacao": "ok",
        "texto": "LeBron Raymone \"Bronny\" James Jr. (born October 6, 2004) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). A consensus four-star recruit, James was named a McDonald's All-American as a senior in high school in 2023. He played one season of college basketball for the USC Trojans before being selected by the Lakers in the second ro\n[…]\nHe is the eldest child and former teammate of LeBron James Sr., making them the first active father–son duo in NBA history.\n[…]\nOn October 22, 2024, in the season opener against the Minnesota Timberwolves, James and his father became the first father–son duo to play together in the NBA. Bronny debuted with a rebound in three minutes of play in the Lakers' 110–103 win over the Timberwolves. On October 30, he scored his first NBA basket—alongside two assists and a steal—in a 134–110 loss to the Cleveland Cavaliers. Throughout his rookie season, James was assigned several times to the South Bay Lakers of the NBA G League.\n[…]\nAfter James was selected to play in the 2023 McDonald's All-American Game, recruiting analyst Dinos Trigonis raised concerns about a \"smell of nepotism here that isn't good for our kids.\" The Los Angeles Lakers faced similar allegations after their selection of James in the 2024 NBA draft, which allowed him to play on the same team as his father despite widespread concerns about his lackluster college play and readiness for the league.\n[…]\nJames has worn the number 0 jersey because it is the number worn by his favorite NBA player, Russell Westbrook. He has also worn the number 23 jersey in honor of his father. In July 2024, James chose the number 9 jersey for his professional debut in the NBA during the 2024–25 Los Angeles Lakers season. The decision was made to honor the late musician Juice Wrld, alluding to Juice's 2017 debut EP 9 9 9.\n[…]\nBronny James on Instagram"
      },
      {
        "url": "https://en.wikipedia.org/wiki/LeBron_James",
        "situacao": "ok",
        "texto": "LeBron Raymone James (born December 30, 1984) is an American professional basketball player who plays as a forward for the Philadelphia 76ers of the National Basketball Association (NBA). Nicknamed \"LBJ\" and \"King James\", he is the NBA's all-time leading scorer and has won four NBA championships from 10 NBA Finals appearances, including eight consecutive appearances between 2011 and 2018. He has w\n[…]\nOn July 6, 2024, James re-signed with the Lakers on a two-year, $104 million contract which carried a no-trade clause and had a player option in the second year. James's son Bronny had been drafted 55th by the Lakers; on October 22, in a game against the Minnesota Timberwolves, James and Bronny became the first father-son duo to play in an NBA game together.\n[…]\nJames passed Kobe Bryant to become the player with the most double-doubles with 30+ points in Lakers franchise history.\n[…]\nIn March 2024, James and JJ Redick launched a podcast called Mind the Game, where the two have \"pure conversations about basketball.\" The podcast was suspended after Redick was hired as head coach for the Los Angeles Lakers in June 2024. In March 2025, a second season was announced with Steve Nash replacing Redick as James's co-host.\n[…]\nJames married his high school girlfriend, Savannah Brinson (born August 27, 1986), on September 14, 2013, in San Diego, California. They have two sons, Bronny and Bryce, and a daughter, Zhuri. Bronny was drafted by the Lakers in June 2024 and played his first game with his father that October. In 2017, Cavaliers team chaplain Jerry Birch described James as a Christian. James has referred to God as \"the man above\".\n[…]\nThird team: 2019, 2022, 2023, 2024\n[…]\nLeBron James Home Court Museum in Akron, Ohio\n[…]\nLeBron James at Olympics.com\n[…]\nLeBron James at FIBA\n[…]\nLeBron James at USA Basketball\n[…]\nLeBron James at Team USA\n[…]\nLeBron James at IMDb\n[…]\nLeBron James collected news and commentary at The New York Times"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bronny_James",
        "situacao": "ok",
        "texto": "LeBron Raymone \"Bronny\" James Jr. (Cleveland, 6 de outubro de 2004) é um basquetebolista profissional estadunidense. Atualmente joga pelo Los Angeles Lakers da National Basketball Association (NBA).\n[…]\nEle é o filho mais velho e companheiro de equipe do lendário jogador profissional de basquete LeBron James, tornando-os a primeira dupla de pai e filho a jogar lado a lado na liga profissional norte americana.\n[…]\nJames nasceu em 6 de outubro de 2004, filho de LeBron James, que o teve aos 19 anos, com sua namorada de longa data (agora esposa) Savannah Brinson. Conheceram-se enquanto estudavam em St. Vincent – ​​St. Mary High School em Akron, Ohio. James foi criado por seus pais. Seu pai, que é tetracampeão da NBA e quatro vezes MVP, é frequentemente considerado um dos maiores jogadores de basquete de todos os tempos.\n[…]\nEm maio de 2024, Bronny declarou via Instagram que iria se declarar elegível para o Draft da NBA de 2024, ainda que mantendo sua elegibilidade para continuar jogando basquete universitário caso não fosse escolhido e entrando no portal de transferências. O jogador pouco atuou por USC por conta de uma parada cardíaca sofrida em um treino de pré-temporada, que impactou sua produtividade como calouro. Ele teve médias de 4.8 pontos, 2.8 rebotes e 2.1 assistências em cerca de 19 minutos por partida.\n[…]\nEm 27 de junho de 2024, Bronny foi selecionado pelo Los Angeles Lakers como a escolha de número 55 no Draft da NBA de 2024, situação que o colocaria em posição de atuar ao lado de seu pai e, dessa forma, se tornando a primeira dupla pai e filho a jogar simultaneamente na liga.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Associação Cristã de Moços",
      "descricao": "Organização cristã internacional voltada aos jovens, fundada em Londres em 1844 e conhecida em inglês como YMCA."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O basquete, em 1891, e o vôlei, em 1895, foram criados por professores ligados à mesma organização. Qual?",
    "resposta": "Associação Cristã de Moços",
    "fonte": [
      "https://en.wikipedia.org/wiki/YMCA",
      "https://en.wikipedia.org/wiki/Volleyball",
      "https://en.wikipedia.org/wiki/James_Naismith"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/YMCA",
        "situacao": "ok",
        "texto": "YMCA is a worldwide youth organization based in Vernier, Canton of Geneva, Switzerland, with more than 64 million beneficiaries in 120 countries. It has nearly 90,000 staff, some 920,000 volunteers and 12,000 branches worldwide. It was founded in London on 6 June 1844 by George Williams as the Young Men's Christian Association. The organization's stated aim is to put Christian values into practice\n[…]\nThe Young Men's Christian Association (YMCA) was founded on 6 June 1844, by George Williams and eleven friends. Williams was a London draper who was typical of the young men drawn to the cities by the Industrial Revolution. They were concerned about the lack of healthy activities for young men in major cities; the options available were usually taverns and brothels.\n[…]\nThe delegates of various Young Men's Christian Associations of Europe and America, assembled in Conference at Paris, the 22 August 1855 feeling that they are one in principle and in operation, recommend to their respective Societies to recognize with them the unity existing among their Associations, and while preserving a complete independence as to their particular organization and modes of action, to form a Confederation of secession on the following fundamental principle, such principle to be regarded as the basis of admission of other Societies in future.\n[…]\nIn Germany, as in Austria and Switzerland, YMCA is called CVJM, which stands for Christlicher Verein junger Menschen (Christian Association of Young People). Up until 1985, the organization was called 'Christlicher Verein Junger Männer' (Christian Association of Young Men); the name change reflected its activities being accessible to men and women.\n[…]\nYoung Men's Buddhist Association (YMBA)\n[…]\nYMCA SCUBA Program\n[…]\nThe Report of the Thirteenth Triennial International Conference and Jubilee Celebration of Young Men's Christian Associations. London: Jubilee Council. 1895."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball",
        "situacao": "ok",
        "texto": "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the program at the Atlanta 1996 Summer Olympics. The adapted version of volleyball at the Su\n[…]\nVolleyball was invented in 1895 by the American educator William G. Morgan, a YMCA physical education director in Holyoke, Massachusetts. Morgan intended the game, which he originally called \"mintonette\", to be an alternative to basketball that was less physically demanding. It spread rapidly through YMCA networks in the United States and abroad.\n[…]\nAn international governing body, the Fédération Internationale de Volleyball (FIVB), was established in 1947, and the sport grew into a global phenomenon. Its social history has included diverse communities such as Christian members of the YMCA, nudists and, more recently, debates over inclusion and fairness regarding transgender athletes.\n[…]\nWilliam G. Morgan invented the sport in 1895 while he was the YMCA physical education director in Holyoke, Massachusetts. Because he originally derived the game from badminton, he initially named the sport mintonette. He was a one-time student of basketball inventor James Naismith and invented the game for his clients at the YMCA, most of whom were middle-aged businessmen for whom the physical demands of basketball were too great.\n[…]\nSide Out (1990): A law student goes to California and ends up playing professional volleyball.\n[…]\nThrowball: became popular with female players at the YMCA College of Physical Education in Chennai (India) in the 1940s.\n[…]\nAmerican Volleyball Coaches Association"
      },
      {
        "url": "https://en.wikipedia.org/wiki/James_Naismith",
        "situacao": "ok",
        "texto": "James Naismith ( NAY-smith; November 6, 1861 – November 28, 1939) was a Canadian-American physical educator, physician, Christian chaplain, and sports coach, best known as the inventor of the game of basketball.\n[…]\nIn 1909, Naismith's duties at Kansas were redefined as a professorship; he served as the de facto athletic director at Kansas for much of the early 20th century.\n[…]\nDuring the Olympics, he was named the honorary president of the International Basketball Federation. When Naismith returned, he commented that seeing the game played by many nations was the greatest compensation he could have received for his invention. In 1937, Naismith played a role in the formation of the National Association of Intercollegiate Basketball, which later became the National Association of Intercollegiate Athletics (NAIA).\n[…]\nThe National Collegiate Athletic Association rewards its best players and coaches annually with the Naismith Awards, among them the Naismith College Player of the Year, the Naismith College Coach of the Year, and the Naismith Prep Player of the Year. After the Olympic introduction to men's basketball in 1936, women's basketball became an Olympic event in Montreal during the 1976 Summer Olympics.\n[…]\nToday basketball is played by more than 300 million people worldwide, making it one of the most popular team sports. In North America, basketball has produced some of the most-admired athletes of the 20th century. ESPN and the Associated Press both conducted polls to name the greatest North American athlete of the 20th century. Basketball player Michael Jordan came in first in the ESPN poll and second (behind Babe Ruth) in the AP poll."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Associa%C3%A7%C3%A3o_Crist%C3%A3_de_Mo%C3%A7os",
        "situacao": "ok",
        "texto": "Young Men's Christian Association (YMCA) o Associação Cristã de Moços (usando a sigla \"ACM\") é uma organização cristã internacional.\n[…]\nDurante todo esse período, a Associação Cristã de Moços contabilizou importantes conquistas e ações de destaque em prol da humanidade, como dois prêmios Nobel da Paz e um assento no Conselho de Desenvolvimento Econômico e Social da Organização das Nações Unidas (ONU); a Cruz Vermelha Internacional, que nasceu dentro da ACM; introduziu a Ginástica Calistênica; foi a primeira entidade no mundo a reconhecer que o lazer é uma necessidade fundamental do ser humano; mostrou-se pioneira ao criar os esportes olímpicos Basquete e Vôlei, e também o Futsal; e se tornou um celeiro de ilustres personagens e líderes em diversas áreas.\n[…]\nDe acordo com um censo da associação publicado em 2025, esta contaria com 12 000 associações locais em 120 países, 90 000 funcionários e 920 000 voluntários.\n[…]\nEntão foi realizada em 6 de junho de 1844 a reunião em que se fundou a Young Men's Christian Association (Associação Cristã de Moços) que trazia como objetivos primordiais “buscar a cooperação dos jovens cristãos para difundir o Reino de Deus entre os outros jovens” e “promover reuniões espirituais entre os demais estabelecimentos de Londres”.\n[…]\nMeu último legado muito precioso é a Associação Cristão de Moços. Eu a deixo em suas mãos queridos jovens de todos os países, para que vocês a conservem e a divulguem. Espero que vocês sejam tão felizes como eu tenho sido e tenham mais êxito, pois isto significará bênçãos para suas próprias almas e para as almas de muitos outros.” (George Williams)\n[…]\nACM/YMCA Terceira",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Fusão entre ABA e NBA",
      "descricao": "Acordo de 1976 em que quatro times da liga ABA foram incorporados à NBA."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Dos quatro times que vieram da liga ABA para a NBA em 1976, qual conquistou mais títulos da NBA?",
    "resposta": "San Antonio Spurs",
    "distratores": [
      "Denver Nuggets",
      "Indiana Pacers",
      "New York Nets"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/ABA%E2%80%93NBA_merger",
      "https://en.wikipedia.org/wiki/San_Antonio_Spurs"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/ABA%E2%80%93NBA_merger",
        "situacao": "ok",
        "texto": "The ABA–NBA merger was a major pro sports business maneuver in 1976 when the American Basketball Association (ABA) combined with the National Basketball Association (NBA), after multiple attempts over several years. The NBA and ABA had entered merger talks as early as 1970, but an antitrust suit filed by the head of the NBA players union, Robertson v. National Basketball Ass'n, blocked the merger \n[…]\nSchulman also threatened to move his soon-to-be ABA team to Los Angeles to compete directly with the Lakers as well following the Los Angeles Stars moving their franchise to the state of Utah in order to become the Utah Stars. The owners of the Dallas Chaparrals (now the NBA's San Antonio Spurs) were so confident of the impending merger themselves that they suggested that the ABA hold off on scheduling altogether and play a regular season schedule for the 1971–72 NBA season instead.\n[…]\nThe Kentucky Colonels, led by Artis Gilmore, defeated the Indiana Pacers in the first round of the 1976 ABA Playoffs. The Colonels, in turn, lost a seven-game semifinal series to the Denver Nuggets, led by Dan Issel and David Thompson. The Nuggets, in turn, lost the ABA Finals to the New York Nets with Julius Erving, who had defeated George Gervin and the San Antonio Spurs to get there. The Spirits of St.\n[…]\nThe NBA imposed the following terms on the four surviving ABA refugees—the Denver Nuggets, Indiana Pacers, New York Nets and San Antonio Spurs:\n[…]\nDenver Nuggets, San Antonio Spurs and Philadelphia 76ers head coach Doug Moe: \"One of the biggest disappointments in my life was going into the NBA after the merger. The NBA was a rinky-dink league—listen, I'm very serious about this. The league was run like garbage. There was no camaraderie; a lot of the NBA guys were aloof and thought they were too good to practice or play hard.\n[…]\nAFL–NFL merger\n[…]\nPattison, Dan, Count Dracula Has Struck, January 1976"
      },
      {
        "url": "https://en.wikipedia.org/wiki/San_Antonio_Spurs",
        "situacao": "ok",
        "texto": "The San Antonio Spurs are an American professional basketball team based in San Antonio. The Spurs compete in the National Basketball Association (NBA) as a member of the Southwest Division of the Western Conference. The team plays its home games at Frost Bank Center.\n[…]\nWhen the Spurs have won the NBA title, the team's victory parades have been boat trips on the San Antonio River Walk.\n[…]\nEven though playoff success would elude the team before the merger, the Spurs had suddenly found themselves among the best teams in the ABA. Moreover, their gaudy attendance figures made them very attractive to the NBA, even though San Antonio, then as now, was a medium-sized market.\n[…]\nAlthough San Antonio proper had over 650,000 people at the time (and has since grown to become the seventh-largest city in the United States), the surrounding suburban and rural areas have never been much larger than the city itself. In June 1976, the ABA–NBA merger took place, moving San Antonio's sole professional sports franchise into a new league. The Spurs, the Denver Nuggets, the Indiana Pacers, and the New York Nets joined the NBA for the 1976–77 season.\n[…]\nList of the last five seasons completed by the Spurs. For the full season-by-season history, see List of San Antonio Spurs seasons.\n[…]\nThe San Antonio Spurs will begin airing regional broadcasts on DAZN for the 2026–27 season with 22 games airing on local over the air television. Before 2026, the Spurs primarily aired games on FanDuel Sports Network Southwest, though 9 games air via over-the-air television on KENS.\n[…]\nSan Antonio Spurs\n[…]\nIn November 2025, San Antonio Voters approved a proposition to build a new arena for the Spurs, situated in Downtown San Antonio.\n[…]\nAll facts and records taken from the San Antonio Spurs' history section."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Garrafão",
      "descricao": "Área pintada da quadra de basquete entre a linha de fundo e a linha do lance livre."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Até 2010, o garrafão das quadras da FIBA tinha a forma de um trapézio. Desde então, que forma ele tem?",
    "resposta": "Retângulo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Key_(basketball)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Key_(basketball)",
        "situacao": "ok",
        "texto": "The key is a marked area on a basketball court surrounding the basket, where much of the game's action takes place. The key is officially referred to as the free throw lane by the National Basketball Association (NBA), the EuroLeague, the National Collegiate Athletic Association (NCAA), the National Association of Intercollegiate Athletics (NAIA), and the National Federation of State High School A\n[…]\nIt is referred to as the restricted area by the International Basketball Federation (FIBA). The key is also simply called the lane.\n[…]\nOn April 25, 2008, the FIBA Central Board approved rule changes that included the shape of the key. It is now rectangular and has virtually the same dimensions as the key used in the NBA. In addition, the no-charge semicircle formally called the restricted area arc was also created. The change took effect in 2010.\n[…]\nThe lane is a restricted area in which players on offense (in possession of the ball) can stay for only three seconds. At all levels of play, after three seconds the player is assessed a three-second violation which results in a turnover.\n[…]\nIn the NBA, Euroleague, FIBA, NCAA, and NAIA play, the key has an arc extending four feet from the basket (NBA, NCAA, NAIA), or 1.25 meters (approximately 4.1 feet) (FIBA). The area behind the arc, or the arc itself, is called the \"restricted area\" (RA) in the NBA, the \"restricted area arc\" in the NCAA and NAIA, and the \"no-charge semicircles\" in FIBA. This arc is not used in NFHS play.\n[…]\nThe restricted area arc rule first appeared at any level of competition in the NBA for the 1997–98 season. It was applied in NCAA men's basketball for the 2010–2011 season. The NCAA approved adding a visible restricted-area arc three feet from the center of the basket in Division I men’s and women’s games for the 2011–2012 season."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Rick Barry",
      "descricao": "Ala americano do Hall da Fama, campeão da NBA pelo Golden State Warriors em 1975."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que ala da NBA, campeão pelo Golden State Warriors em 1975, ficou famoso por cobrar lances livres por baixo, com as duas mãos?",
    "resposta": "Rick Barry",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rick_Barry"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rick_Barry",
        "situacao": "ok",
        "texto": "Richard Francis Dennis Barry III (born March 28, 1944) is an American former professional basketball player. Barry ranks among the most prolific scorers and all-around players in basketball history. He is the only player to lead the National Collegiate Athletic Association (NCAA), American Basketball Association (ABA), and National Basketball Association (NBA) in points per game in a season.\n[…]\nOn June 23, 1972, a United States District Court judge issued a preliminary injunction to prohibit Barry from playing for any team other than the Golden State Warriors after his contract with the Nets ended, due to a five-year contract signed in 1969. On October 6, 1972, the Nets released Barry and he returned to the Warriors.\n[…]\nBarry averaged 23.1 points per game in his farewell season (1977–78) with the Warriors.\n[…]\nIn September 2001, Barry began hosting a sports talk show on KNBR in San Francisco until June 2003, when KNBR paired him up with Rod Brooks to co-host a show named Rick and Rod. The show aired on KNBR until August 2006, when Barry left the station abruptly for reasons not disclosed to the public.\n[…]\nBarry wrote an autobiography, Confessions of a Basketball Gypsy: The Rick Barry Story with Bill Libby, which was published in 1972. With his third wife Lynn, to whom he has been married since 1991, he also has a son, Canyon, who is a professional player, playing for Chinese club Hunan Jinjian Miye in the 2018–19 season and later for the United States 3x3 men's basketball team.\n[…]\nNBA Golden State Warriors (1972–1978)\n[…]\nGolden Plate Award of the American Academy of Achievement (1975)\n[…]\nRick Barry profile at NBA Encyclopedia at the Wayback Machine (archived April 27, 2006)\n[…]\nRememberTheABA.com Rick Barry page\n[…]\n1972 Jim O'Brien biographical article on Rick Barry\n[…]\nRick Barry and Rod Brooks Home Page at KNBR Radio\n[…]\nRick Barry Career Statistics Archived April 24, 2013, at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rick_Barry",
        "situacao": "ok",
        "texto": "Richard Francis Dennis Barry III, mais conhecido por Rick Barry (Elizabeth, New Jersey, 28 de Março de 1944), é um ex-jogador de basquetebol estadunidense. Barry está presente na lista dos 50 maiores jogadores da história da NBA, selecionado oito vezes para o All-star Game, cinco vezes para o time ideal da temporada, campeão com o Golden State Warriors na temporada 1974/75 e ainda teve sua camisa \n[…]\nBarry tornou-se notório também por sua forma peculiar de arremessar lances livres. Conhecido nos EUA como underhand free throw ou jocosamente como granny shot (algo como \"arremesso de vovozinha\"), no Brasil conhecido como \"arremesso lavadeira\". Basicamente, Barry fazia o arremesso por baixo, lançando a bola do meio das pernas, de baixo para cima. Apesar de seu estilo incomum de arremesso livre,  ele encerrou sua carreira com o incrível aproveitamento de 90% nos lances livres.\n[…]\nCampeão da NBA: 1975;\n[…]\nNBA Finals Most Valuable Player Award (MVP das Finais): 1975\n[…]\n8x NBA All-Star: 1966, 1967, 1973, 1974, 1975, 1976, 1977, 1978\n[…]\nPrimeiro Time: 1966, 1967, 1974, 1975, 1976\n[…]\nLíder em roubos de bola na temporada: 1975;\n[…]\nNúmero 24 aposentado pelo Golden State Warriors\n[…]\nCampeão da ABA: 1969;\n[…]\nPelos Warriors",
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
