Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Tênis** (tema **Esportes**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "USTA Billie Jean King National Tennis Center",
      "descricao": "Complexo de tênis em Flushing Meadows, Nova York, sede do US Open desde 1978."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Desde 1978, o US Open é disputado no complexo de Flushing Meadows. Ele fica em qual distrito de Nova York?",
    "resposta": "Queens",
    "fonte": [
      "https://en.wikipedia.org/wiki/USTA_Billie_Jean_King_National_Tennis_Center"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/USTA_Billie_Jean_King_National_Tennis_Center",
        "situacao": "ok",
        "texto": "The USTA Billie Jean King National Tennis Center is a stadium complex within Flushing Meadows–Corona Park in Queens, New York City. It has been the home of the US Open Grand Slam tennis tournament, played every year from late August to early September, since 1978 and is operated by the United States Tennis Association (USTA). The facility has 22 courts inside its 46.5 acres (0.188 km2; 0.0727 sq m\n[…]\nNear Citi Field (home of the New York Mets) as well as LaGuardia Airport, the tennis center is open to the public for play except during the US Open, junior, and wood-racquet competitions. Formerly called the USTA National Tennis Center, the facility was rededicated for Billie Jean King on August 28, 2006.\n[…]\nIn July 2008, the USTA Billie Jean King National Tennis Center and Arthur Ashe Stadium hosted its first non-tennis event, when the New York Liberty of the Women's National Basketball Association (WNBA) played in the \"Liberty Outdoor Classic: 2008\". The game itself was the first professional basketball regular season game played outdoors in the USA, by either men or women. The contest featured the Indiana Fever defeating the New York Liberty.\n[…]\nUSTA Billie Jean King National Tennis Center is the site of the annual New York State High School tennis championships, held in May and November. This tournament is sponsored by the New York State Public High School Athletic Association (NYSPHSAA).\n[…]\nIn March 2020, due to the COVID-19 pandemic, the city proposed building a temporary 350-bed field hospital in the Billie Jean King National Tennis Center to treat overflow patients from area hospitals. It opened on April 10 and was later described by The New York Times as a \"cautionary tale\" of mismanaged government responses, having cost at least $52 million while only treating 79 patients until it closed on May 13.\n[…]\nBillie Jean King National Tennis Center official webpage. USTA official website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/USTA_Billie_Jean_King_National_Tennis_Center",
        "situacao": "ok",
        "texto": "O USTA Billie Jean King National Tennis Center é localizado em Flushing Meadows-Corona Park, no Queens em Nova York e tem sido a sede do US Open, torneio de tênis que faz parte do Grand Slam, que é realizado todo ano em agosto e setembro.\n[…]\nOs três estádios do complexo estão entre os maiores locais esportivos de tênis do mundo, com o Arthur Ashe Stadium sendo o maior da lista global com uma capacidade de 23.200 pessoas.\n[…]\nQuando a instalação foi construída em 1978, todas as 33 quadras usavam a superfície acrílica almofadada  DecoTurf, assim como a quadra 17, adicionada em 2011. No entanto, em 2020, as superfícies das quadras foram substituídas por  Laykold.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Masters de Monte Carlo",
      "descricao": "Torneio masculino de tênis em quadra de saibro, da série Masters 1000, disputado no Monte Carlo Country Club."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Apesar do nome, o Masters de Monte Carlo é disputado num clube que fica em qual país?",
    "resposta": "França",
    "distratores": [
      "Mônaco",
      "Itália",
      "Espanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Monte-Carlo_Masters",
      "https://en.wikipedia.org/wiki/Monte_Carlo_Country_Club"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monte-Carlo_Masters",
        "situacao": "ok",
        "texto": "The Monte-Carlo Masters, known as the Rolex Monte-Carlo Masters for sponsorship reasons, is an annual tennis tournament for male professional players held in Roquebrune-Cap-Martin, France, which borders on Monaco. It is played on clay courts at the Monte Carlo Country Club and is held in April. The tournament is one of the nine ATP Masters 1000 tournaments on the ATP Tour. Rafael Nadal won the men\n[…]\nThe event was founded in 1896 as the Monte-Carlo International. The following year the event officially became known as the Monte-Carlo Championships, also known as the Monte-Carlo International Championships, which was a combined men's and women's tournament until 1982 when the women's championships ceased.\n[…]\nIn April 1896, the first Monte Carlo International lawn tennis tournament was established. The first men's singles was won by George Whiteside Hillyard, according to Wimbledon librarian Alan Little. He states that the women's event was won by either a Miss K. Booth of Great Britain or a Mlle Guillon of France; despite extensive research, he could not conclusively find the results.\n[…]\nThe tournament was played on the red shale clay courts of the Lawn Tennis de Monte-Carlo club in cellars underneath the Grand Hôtel de Paris until 1905. In 1906, the event and club was moved to La Condamine where it was played between then and 1914 and again in 1920. It was played briefly on the roof of a garage in Beausoleil before three tennis courts were constructed with spectator stands and a new club house on 28 January 1921; the new venue was named the \"La Festa Country Club\".\n[…]\nBeginning in 2009, Monte Carlo became the only Masters tournament not to have a mandatory player commitment.\n[…]\nThe total prize money for the 2026 Monte Carlo Master 1000 was €6,309,095. The package is divided as follows:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Monte_Carlo_Country_Club",
        "situacao": "ok",
        "texto": "Monte Carlo Country Club (MCCC) is a tennis club in the commune of Roquebrune-Cap-Martin, Alpes-Maritimes, Provence-Alpes-Côte d'Azur, France. It is the home of the ATP Tour's Monte Carlo Masters tournament. It is also the base of the Monte Carlo Tennis Academy.\n[…]\nDespite the club's name, it is not located in Monte Carlo or even in Monaco, but just 150 meters outside Monaco's northeastern border.\n[…]\nMonte Carlo Country Club website\n[…]\nMonte Carlo Tennis Academy website\n[…]\nThe Esteemed Institution of the Monte-Carlo Country Club"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/ATP_de_Monte_Carlo",
        "situacao": "ok",
        "texto": "O ATP de Monte Carlo – ou Rolex Monte-Carlo Masters, atualmente – é um torneio de tênis profissional masculino, de categoria ATP Masters 1000.\n[…]\nApesar do nome, é realizado na comuna francesa de Roquebrune-Cap-Martin, 150 metros a nordeste da fronteira com Mônaco. Estreou em 1896 e teve apenas três hiatos. Os jogos são disputados em quadras de saibro durante o mês de abril.\n[…]\nO maior campeão da história do torneio é o espanhol Rafael Nadal, que em simples, de doze finais disputadas, venceu o torneio onze vezes (2005 a 2012, 2016 a 2018).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Taça Davis",
      "descricao": "Troféu da principal competição de seleções do tênis masculino."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1900, a primeira disputa da Taça Davis, entre Estados Unidos e Grã-Bretanha, aconteceu em qual cidade americana?",
    "resposta": "Boston",
    "fonte": [
      "https://en.wikipedia.org/wiki/Davis_Cup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Davis_Cup",
        "situacao": "ok",
        "texto": "The Davis Cup is the premier international team event in men's tennis. It is organised by World Tennis and contested annually between teams from over 150 competing countries, making it the world's largest annual team sporting competition. It is described by the organisers as the \"World Cup of Tennis\" and the winners are referred to as the world champions. The competition began in 1900 as a challen\n[…]\nInternational competitions had been staged for some time before the first Davis Cup match in 1900. From 1892, England and Ireland had been competing in an annual national-team-based competition, similar to what would become the standard Davis Cup format, mixing single and doubles matches, and in 1895 England played against France in a national team competition.\n[…]\nThe first match, between the United States and Britain (competing as the \"British Isles\"), was held at the Longwood Cricket Club in Boston, Massachusetts in 1900. The American team, of which Dwight Davis was captain, surprised the British by winning the first three matches. The following year the two countries did not compete, but the US won the match in 1902 and Britain won the following four matches.\n[…]\nThe 18 best national teams are assigned to the World Group and compete annually for the Davis Cup. Nations which are not in the World Group compete in one of three regional zones (Americas, Asia/Oceania, and Europe/Africa). The competition is spread over four weekends during the year. Each elimination round between competing nations is held in one of the countries, and is played as the best of five matches (4 singles, 1 doubles).\n[…]\nAs in other cup competitions tie is used in the Davis Cup to mean an elimination round. In the Davis Cup, the word rubber means an individual match.\n[…]\nJunior Davis Cup and Junior Billie Jean King Cup\n[…]\nList of Davis Cup champions\n[…]\nDavis Cup Tennis, a video game based on the event"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_Davis",
        "situacao": "ok",
        "texto": "A Copa Davis (português brasileiro) ou Taça Davis (português europeu) é um evento internacional de tênis masculino. A maior competição por equipes no esporte, a Copa Davis é dirigida pela Federação Internacional de Tênis - ITF e é jogada entre times de diversos países, no sistema de eliminação direta (ou mata-mata). Em 2005, 134 nações inscritas na competição em formato de equipes.\n[…]\nO equivalente feminino da Copa Davis é a Copa Billie Jean King.\n[…]\nA Copa ou Taça Davis teve sua 1ª edição no ano de 1900 e surgiu a partir de um desafio de quatro alunos da Universidade de Harvard, que tiveram a ideia de desafiar os britânicos, que na época eram os campeões do mundo no tênis, para uma partida no Longwood Cricket de Boston. O jogo seria marcado para o ano seguinte.\n[…]\nO Brasil não tem muita tradição na Davis. Fez sua estreia em 1935, com Ricardo Pernambuco, Ivo Simons, Nélson Cruz, Inácio Nogueira, Humberto Costa e Roberto Whately, desclassificados na primeira rodada pelos Estados Unidos. Até 1966, os brasileiros não conseguiram nenhuma vitória expressiva. A partir desse ano, o Brasil passa ser mais respeitado internacionalmente. Thomaz Koch e Edison Mandarino levam o Brasil às semifinais contra a Índia, mas foi derrotado em Calcutá.\n[…]\nO mesmo acontece em 1971, quando o Brasil deixou de disputar a final contra os Estados Unidos ao perder para a Romênia. Individualmente Thomaz Koch é o brasileiro que mais se destacou, sendo o sétimo jogador em número de vitórias em toda a história da competição. O Brasil voltou às semifinais em 1992, liderado por Luiz Mattar e Jaime Oncins, após vencer sete confrontos seguidos, sua mais expressiva série de vitórias, incluindo a Alemanha de Boris Becker e a Itália - no Rio de Janeiro e em Maceió.\n[…]\nCopa Billie Jean King\n[…]\n«Copa/Taça Davis». Página oficial (em inglês)\n[…]\n«Site brasileiro da Copa Davis»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Hall da Fama Internacional do Tênis",
      "descricao": "Museu e galeria de homenagem aos grandes nomes do tênis, instalado no Newport Casino, nos Estados Unidos."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O Hall da Fama Internacional do Tênis funciona no clube que recebeu, em 1881, o primeiro campeonato nacional americano. Em que cidade ele fica?",
    "resposta": "Newport",
    "distratores": [
      "Boston",
      "Filadélfia",
      "Baltimore"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/International_Tennis_Hall_of_Fame",
      "https://en.wikipedia.org/wiki/Newport_Casino"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/International_Tennis_Hall_of_Fame",
        "situacao": "ok",
        "texto": "The International Tennis Hall of Fame is located in Newport, Rhode Island, United States. It honors both players and other contributors to the sport of tennis. The complex, the former Newport Casino, includes a museum, 13 grass tennis courts, an indoor tennis facility with three courts, three outdoor hard courts, one green clay court, a court tennis facility, and a theatre.\n[…]\nThe hall of fame and museum are located in the Newport Casino, which was commissioned in 1879 by James Gordon Bennett Jr. as part of an exclusive resort for wealthy Newport summer residents. It was designed by Charles McKim along with Stanford White, who did the interiors. It is an example of Victorian Shingle Style architecture. In 1881, the Real Tennis Court (housing the National Tennis Club) and the Casino Theatre were constructed at the east end of the campus.\n[…]\nBut by the 1950s, the retreat was struggling financially, as tourism preferences changed. It was at risk of being demolished for redevelopment of modern retail space, but the building was purchased and saved by Jimmy and Candy Van Alen, wealthy Newport summer residents. A sportsman himself, in 1954, Jimmy Van Alen established the National Lawn Tennis Hall of Fame and Museum in the Casino. The combination of tennis matches and the museum allowed the building to be saved.\n[…]\nThe Hall of Fame hosts several tournaments, including the Hall of Fame Open in July. The Hall of Fame Open is a part of the US Open Series, as well as being part of the men's ATP World Tour, the tournament is the only grass court event in North America. Top male players come to Newport directly from Wimbledon to compete for the Van Alen Cup at the International Tennis Hall of Fame.\n[…]\nTenniseum\n[…]\n11 Intriguing Items at the International Tennis Hall of Fame article\n[…]\nInternational Tennis Hall of Fame article\n[…]\nInternational Tennis Hall of Fame digital exhibits"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Newport_Casino",
        "situacao": "ok",
        "texto": "The Newport Casino is an athletic complex and recreation center located at 180–200 Bellevue Avenue, Newport, Rhode Island in the Bellevue Avenue/Casino Historic District. Built in 1879–1881 by New York Herald publisher James Gordon Bennett, Jr., it was designed in the Shingle style by the newly formed firm of McKim, Mead & White. The Newport Casino was the firm's first major commission and helped \n[…]\nThe casino was added to the National Register of Historic Places in 1970, and was designated a National Historic Landmark in 1987. The complex, which was the site of the earliest American lawn tennis championships, has been the site of the International Tennis Hall of Fame since 1954.\n[…]\nCandy and Jimmy Van Alen took over operating the club, and by 1954 had established the International Tennis Hall of Fame in the Newport Casino. The combination of prominent headliners at the tennis matches and the museum allowed the building to be saved.\n[…]\nThe Hall of Fame Museum's exhibition galleries which exist on the second floor of the main Newport Casino building have been created in a series of renovations, first in the 1970s, then in the 1990s, again in 2014–2015, and most recently in 2025. In the 1990s, the third floor of the main building was renovated into a suitable repository for the storage and study of pieces in the Tennis Hall of Fame artifact, library, and archival collections.\n[…]\nIn its heyday during the Gilded Age, the Newport Casino offered a wide array of social diversions to the summer colony including archery, billiards, bowling, concerts, dancing, dining, horse shows, lawn bowling, reading, lawn tennis, tea parties, and theatricals. It was best known as the home of American lawn tennis; the Casino hosted the 1881–1914 National Championships, later called the U.S. Open. Between 1915 and 1967 it hosted the Newport Casino Invitational men's tennis tournament."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/International_Tennis_Hall_of_Fame",
        "situacao": "ok",
        "texto": "O International Tennis Hall of Fame é um museu do tênis em Newport, Rhode Island, nos Estados Unidos.\n[…]\nNeste salão da fama são homenageadas as mais importantes personalidades e o(a)s maiores tenistas do mundo do tênis. O museu foi fundado em 1954 por Jimmy Van Alen, o inventor do Tiebreaker, e é o maior museu de tênis do mundo. As primeiras pessoas foram homenageadas em 1955 no Hall of Fame. Até hoje (2018), 251 pessoas de 27 países foram homenageadas.\n[…]\n2015: (243) Amélie Mauresmo, David Hall, Nancy Jeffett\n[…]\n«International Tennis Hall of Fame» (em inglês)\n[…]\n«Hall of Fame» (em inglês). International Tennis Hall of Fame. Consultado em 23 de agosto de 2010\n[…]\n«Hall of Fame Members (by year of induction)» (em inglês). International Tennis Hall of Fame. Consultado em 23 de agosto de 2010. Arquivado do original em 29 de junho de 2013",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Tennis Masters Cup de 2000",
      "descricao": "Torneio de fim de temporada da ATP em 2000, vencido por Gustavo Kuerten."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2000, Guga derrotou Sampras e Agassi, venceu a Masters Cup e terminou o ano como número um. Em que cidade foi esse torneio?",
    "resposta": "Lisboa",
    "fonte": [
      "https://en.wikipedia.org/wiki/2000_Tennis_Masters_Cup",
      "https://en.wikipedia.org/wiki/Gustavo_Kuerten"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2000_Tennis_Masters_Cup",
        "situacao": "ok",
        "texto": "The 2000 Tennis Masters Cup and the ATP Tour World Championships (also known as the Gold Flake ATP Tour World Doubles Championship for sponsorship reasons) were tennis tournaments played on indoor hard courts for the singles event, and outdoor hard courts for the doubles event. It was the 31st edition of the year-end singles championships, the 27th edition of the year-end doubles championships, an\n[…]\nThe singles event took place at the Pavilhão Atlântico in Lisbon, Portugal, from 28 November through 3 December 2000, and the doubles event at the KSLTA Tennis Center in Bangalore, India, from 13 December through 17 December 2000.\n[…]\nGustavo Kuerten defeated  Andre Agassi 6–4, 6–4, 6–4"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gustavo_Kuerten",
        "situacao": "ok",
        "texto": "Gustavo \"Guga\" Kuerten (Portuguese: [ɡusˈtavu ˈkiʁtẽ]; born 10 September 1976) is a Brazilian former professional tennis player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals for 43 weeks, including as the year-end No. 1 in 2000. Kuerten won 20 ATP Tour-level singles titles, including three majors at the French Open in 1997, 2000, and 2001, as well as\n[…]\nIt was a close contest with young up-and-comer Marat Safin at the year's last event, the Tennis Masters Cup (in its first year under that name) in Lisbon, Portugal, with one loss meaning that Safin would have been No. 1. Despite Safin having 4 chances to finish the year as world No. 1, Kuerten defied all odds and finished the year at No. 1 by beating Pete Sampras and Andre Agassi in back-to-back matches on an indoor hard court. He broke an eight-year hold of players from the U.S.\n[…]\nFollowing this debacle, Kuerten managed to obtain wildcards to play in the two North American Masters Series events, Miami and Indian Wells, but injuries forced Kuerten to withdraw from both. The French Tennis Federation had announced that Kuerten, as a three-time champion, would have every chance of being granted a wildcard to play at the 2006 French Open, provided that he managed to remain active throughout the 2006 season leading up to the French Open.\n[…]\nIn 1998, 2002 and 2004 Kuerten received the Prix Orange Roland Garros Award for sportsmanship from the association of tennis journalists. In his homeland Brazil he was awarded the Prêmio Brasil Olímpico in 1999 and was named Athlete of the Year in 1999 and 2000. He received the ATP Arthur Ashe Humanitarian of the Year Award in 2003. Kuerten was inducted into the International Tennis Hall of Fame in 2012.\n[…]\nGustavo Kuerten at the Association of Tennis Professionals\n[…]\nGustavo Kuerten at World Tennis\n[…]\nGustavo Kuerten at the International Tennis Hall of Fame"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Maria Sharapova",
      "descricao": "Tenista russa nascida em 1987, ex-número 1 do mundo e campeã dos quatro torneios de Grand Slam."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Ainda criança, em 1994, a russa Maria Sharapova se mudou com o pai para treinar tênis em qual estado americano?",
    "resposta": "Flórida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Maria_Sharapova"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maria_Sharapova",
        "situacao": "ok",
        "texto": "Maria Yuryevna Sharapova (Russian: Мария Юрьевна Шарапова, romanized: Mariya Yuryevna Sharapova, pronounced [mɐˈrʲijə ʂɐˈrapəvə] ; born April 19, 1987) is a Russian former professional tennis player. She was ranked as the world No. 1 in women's singles by the Women's Tennis Association (WTA) for 21 weeks. Sharapova won 36 WTA Tour-level singles titles, including five major titles, as well as the 2\n[…]\nIn 1993, at the age of six, Sharapova attended a tennis clinic in Moscow run by Martina Navratilova, who recommended professional training with Nick Bollettieri at the IMG Academy in Bradenton, Florida. Bollettieri had previously trained players such as Andre Agassi, Monica Seles, and Anna Kournikova. With limited financial resources, Yuri Sharapov borrowed the sum that would enable him and his daughter, neither of whom could speak English, to travel to the United States, which they did in 1994.\n[…]\nSharapova has lived in the United States since moving there at the age of seven. She has a home in Manhattan Beach, California and Bradenton, Florida.\n[…]\nSharapova helped to promote the 2014 Winter Olympics in Sochi, Russia, and was the first torch bearer in the torch-lighting ceremony during the opening festivities. In addition, Sharapova participated in an exhibition in Tampa in December 2004, raising money for the Florida Hurricane Relief Fund. In July 2008, Sharapova sent a message on DVD to the memorial service of Emily Bailes, who had performed the coin toss ahead of the 2004 Wimbledon final that Sharapova won.\n[…]\nSharapova acts as an advisor to brands Naked Retail and Bright.\n[…]\n\"Players: Maria Sharapova\". WTA. Retrieved 2013-04-19.\n[…]\nMaria Sharapova at the Women's Tennis Association\n[…]\nMaria Sharapova at World Tennis\n[…]\nMaria Sharapova at the Billie Jean King Cup (archived)\n[…]\nMaria Sharapova at Wimbledon\n[…]\nMaria Sharapova at ESPN.com\n[…]\nMaria Sharapova at Olympedia\n[…]\nMaria Sharapova at Olympics.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maria_Sharapova",
        "situacao": "ok",
        "texto": "Maria Yuryevna Sharapova (em russo, Мария Юрьевна Шарапова; Nyagan, 19 de abril de 1987) é uma ex-jogadora profissional de tênis da Rússia e ex-número 1 do ranking da WTA. Seus pais são de Homiel, Bielorrússia, mas mudaram-se para a Rússia em 1986, logo após o acidente nuclear de Chernobil, cidade ucraniana vizinha.\n[…]\nCom três anos de idade, Sharapova mudou-se com a família para a localidade de Sochi, e começou a jogar tênis aos quatro anos. Aos seis anos, num clube de tênis em Moscou, foi observada por Martina Navrátilová, que convenceu seus pais a levá-la para treinos sérios nos Estados Unidos.\n[…]\nO início da temporada de Maria Sharapova em 2008 foi semelhante ao do ano anterior: participou do torneio exibição de Hong Kong, onde venceu dois jogos e perdeu na final para a norte-americana Venus Williams. No primeiro Grand Slam do ano, o Aberto da Austrália, ela conquistou o título após vancer Ana Ivanović na final disputada em Melbourne, não perdeu nenhum set na competição a ainda passou pelas tenistas Lindsay Davenport na segunda rodada, e Justine Henin nas quartas de final.\n[…]\nAinda em fevereiro, Maria foi à cidade russa de Sochi para participar do Jogos Olímpicos de Inverno de 2014, onde participou do revezamento da tocha olímpica e foi comentarista do evento para a rede americana de televisão NBC, além de ser Embaixadora de Sochi durante o evento e madrinha da candidatura da cidade para receber o evento.\n[…]\nNo Grand Slam norte-americano, Maria chegou até às oitavas de final, onde foi superada pela dinamarquesa Caroline Wozniacki, que viria a ser a vice-campeã do torneio, por parciais de 4-6, 6-2 e 2-6. Com os pontos ganhos na temporada norte-americana, Sharapova se garantiu no WTA Finals em Cingapura.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Andy Murray",
      "descricao": "Tenista escocês nascido em 1987, ex-número 1 do mundo, campeão de Wimbledon em 2013 e 2016."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Andy Murray cresceu em qual cidade escocesa, onde, aos oito anos, sobreviveu ao massacre na sua escola, em 1996?",
    "resposta": "Dunblane",
    "distratores": [
      "Edimburgo",
      "Aberdeen",
      "Inverness"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Andy_Murray",
      "https://en.wikipedia.org/wiki/Dunblane_massacre"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Andy_Murray",
        "situacao": "ok",
        "texto": "Sir Andrew Barron Murray (born 15 May 1987) is a British professional tennis coach and former player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for 41 weeks, including as the year-end No. 1 in 2016. Murray won 46 ATP Tour singles titles, including three majors at the 2012 US Open, 2013 Wimbledon Championships, and 2016 Wimbledon Championship\n[…]\nMurray grew up in Dunblane and attended Dunblane Primary School. Both he and his brother were present during the 1996 Dunblane school massacre, when Thomas Hamilton killed 16 children and a teacher before shooting himself; Murray took cover in a classroom.\n[…]\nMurray says he was too young to understand what was happening and is generally reluctant to talk about it in interviews, but in his autobiography Hitting Back he states that he attended a youth group run by Hamilton and his mother gave Hamilton lifts in her car. Murray later attended Dunblane High School.\n[…]\nIn February 2013, Murray bought Cromlix House hotel near Dunblane for £1.8 million. The hotel had been closed since 2012, but Murray reopened it in April 2014. Later that month Murray was awarded the freedom of Stirling and received an Honorary Doctorate from the University of Stirling in recognition of his services to tennis.\n[…]\nMurray began dating Kim Sears, daughter of player-turned-coach Nigel Sears, in 2005. Their engagement was announced in November 2014, and they married on 11 April 2015 at Dunblane Cathedral. The couple previously lived in Oxshott, Surrey, but in 2022, moved to nearby Leatherhead. The newly constructed house will accommodate their young family, consisting of their son and three daughters; the youngest, a girl, was born in March 2021.\n[…]\nAndy Murray at the Association of Tennis Professionals\n[…]\nAndy Murray at World Tennis\n[…]\nAndy Murray at the Davis Cup (archived)\n[…]\nAndy Murray at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dunblane_massacre",
        "situacao": "ok",
        "texto": "The Dunblane massacre was a school shooting that took place at Dunblane Primary School in Dunblane, near Stirling, Scotland, on 13 March 1996, when 43-year-old Thomas Hamilton killed 16 pupils and one teacher and injured 15 others before killing himself. It remains the deadliest mass shooting in British history.\n[…]\nOn 19 March 1996, six days after the massacre, Hamilton's body was cremated. According to a police spokesman, this service was conducted \"far away from\" Dunblane.\n[…]\nTennis players Andy Murray and his brother Jamie were both pupils at Dunblane Primary School at the time and were in the school when the massacre happened. Andy took cover in a classroom; he said in 2019 that he had been too young to understand what was happening, and he is generally reluctant to talk about the event in interviews.\n[…]\nSeven months after the massacre, in October 1996, the families of the victims organised their own memorial service at Dunblane Cathedral, which more than 600 people attended, including Prince Charles. The service was broadcast live on BBC1 and conducted by James Whyte, a former Moderator of the General Assembly of the Church of Scotland.\n[…]\nThe gymnasium at the school was demolished on 11 April 1996 and replaced by a memorial garden. Two years after the massacre, on 14 March 1998, a memorial garden was opened at Dunblane Cemetery, where Mayor and twelve of the children who were killed are buried. The garden features a fountain with a plaque of the names of those killed.\n[…]\nThe transcript of the 1996 Cullen Inquiry into the Dunblane Massacre Archived 5 September 2012 at the Wayback Machine. Additional archives: National Records of Scotland.\n[…]\nAfter Dunblane Gun Control in the UK 1996–2001 (PDF)\n[…]\nDunblane papers released\n[…]\nDunblane Massacre – A description of the incident by The Guardian"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Andy_Murray",
        "situacao": "ok",
        "texto": "Sir Andrew \"Andy\" Barron Murray O.B.E. (Dunblane, 15 de maio de 1987) é um ex-tenista tricampeão de Grand Slam, sendo estes: US Open 2012, Wimbledon 2013 e 2016 e bicampeão olímpico, em Londres 2012 e Rio 2016,  profissional escocês/britânico. Ao alcançar o Nº 1 do Ranking Mundial da ATP pela primeira vez em novembro de 2016 com 29 anos, ele se tornou o segundo tenista mais velho (atrás apenas de \n[…]\nLogo em seguida, Murray disputou o ATP World Tour Finals, competição que reuniu os oito melhores\n[…]\nJá Murray, então número dois do mundo, amargou o quinto vice-campeonato em Melbourne, depois de perder também as finais de 2010, 2011, 2013, 2015, sendo que quatro delas foram para Djokovic. Alguns dias depois, Andy Murray e sua esposa Kim Sears anunciam nascimento de primeira filha. Para homenagear o nascimento da criança, Dunblane, cidade natal do tenista, se pintou de rosa, com diversos artefatos e decorações em lojas e nas ruas com a frase \"é uma menina\".\n[…]\nNa sequência, em busca de defender o título do Masters 1000 de Madrid, o escocês Andy Murray venceu o tcheco Radek Stepanek em três sets, parciais de 7/6 (7-3), 3/6 e 6/1 durante pouco mais de 2h16min de partida e confirmou sua classificação às oitavas de final do torneio para enfrentar o francês Gilles Simon. E ele teve um duelo bem mais tranquilo do que na estreia e despachou o tenista da França em sets diretos, com placar final de 6/4 e 6/2, após 1h39 de confronto.\n[…]\nDepois da boa campanha com semifinal em Roland Garros onde esboçava uma recuperação na temporada, Andy Murray, número 1 do mundo naquele momento, voltou a decepcionar e não poderia ter tido pior resultado às vésperas de Wimbledon.\n[…]\nAndy Murray na Associação de Tenistas Profissionais\n[…]\nAndy Murray na Federação Internacional de Tênis\n[…]\nAndy Murray na Copa Davis (arquivado)\n[…]\nAndy Murray em ESPN.com\n[…]\nAndy Murray na Tennis Archives\n[…]\nJamie Murray",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Li Na",
      "descricao": "Tenista chinesa nascida em 1982, campeã de Roland Garros em 2011 e do Aberto da Austrália em 2014."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2011, a chinesa Li Na se tornou a primeira tenista de um país asiático a vencer um Grand Slam de simples. Em qual torneio?",
    "resposta": "Roland Garros",
    "fonte": [
      "https://en.wikipedia.org/wiki/Li_Na",
      "https://en.wikipedia.org/wiki/2011_French_Open_%E2%80%93_Women%27s_singles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Li_Na",
        "situacao": "ok",
        "texto": "Li Na (born 26 February 1982) is a Chinese former professional tennis player. She was ranked world No. 2 in women's singles by the Women's Tennis Association, achieved in February 2014. Li won nine WTA Tour-level singles titles, including two majors at the 2011 French Open (defeating the defending champion Francesca Schiavone) and 2014 Australian Open. She is the first major singles champion born \n[…]\nLi started her 2012 season in the Hopman Cup with countryman Wu Di, who was also from Hubei province, where she won all three single rubbers against Marion Bartoli, Anabel Medina Garrigues and Jarmila Gajdošová. It was her first win over Anabel Medina Garrigues in four meetings. It was a return to her form after being plagued by losses and early round exits in almost all her tournaments during the second half of 2011 following her Roland Garros triumph.\n[…]\nAs one of the favourites, Li's quest for a second Grand Slam title began when she played Anabel Medina Garrigues in the opening round of Roland Garros, winning in two sets. Her struggles on clay continued, however, as she fell victim to Bethanie Mattek-Sands, ranked 67th, in a rain-interrupted second round match – losing in three sets, bringing her disappointing clay-court season to a close.\n[…]\nNike was Li's clothing and footwear sponsor for many years, dating back to her early tennis career. Li used Babolat Pure Drive GT rackets. In 2009, Li was signed by IMG. She rose to fame after her Roland Garros triumph, and since had signed seven endorsements in multiple-year terms. Her agent, Max Eisenbud, also managed to negotiate a deal allowing Li to wear other sponsors' patches on her Nike tennis shirt, something not usually permitted by the sportswear giant.\n[…]\nList of Grand Slam women's singles champions\n[…]\nLi Na at the Chinese Olympic Committee (archived, also available in Chinese)\n[…]\nLi Na on Weibo (in Chinese)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/2011_French_Open_%E2%80%93_Women%27s_singles",
        "situacao": "ok",
        "texto": "Li Na defeated defending champion Francesca Schiavone in the final, 6–4, 7–6(7–0) to win the women's singles tennis title at the 2011 French Open. It was her first major title, and she was the first woman from China, and from any Asian country, to win a major singles title. Li was the first player to defeat four top-10 opponents en route to the French Open title. The final was also a rematch of th\n[…]\n2011 French Open – Women's draws and results at the International Tennis Federation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Li_Na_%28tenista%29",
        "situacao": "ok",
        "texto": "Li Na (chinês: 李娜, pinyin: Lǐ Nà; Wuhan, Hubei, 26 de fevereiro de 1982) é uma ex-tenista profissional chinesa.\n[…]\nEla se tornou a primeira tenista chinesa a chegar ao top 30 (em 2006), em seguida, o top 20 (em 2007). Ela foi uma das tenistas mais bem sucedidas da história do país e em 2009 tornou-se n.º 1 da China, com um ranking mundial de número 19. Foi a primeira tenista chinesa a chegar a uma final de um torneio Grand Slam, o Open da Austrália de 2011, sendo derrotada na final pela belga Kim Clijsters.\n[…]\nAinda em 2011 tornou-se a primeira chinesa a vencer um Grand Slam com a vitória sobre Francesca Schiavone na final de Roland Garros.\n[…]\nNa Li anunciou no dia 19 de setembro de 2014 a sua aposentadoria do tênis profissional. Atual sexta colocada no ranking e campeã do Australian Open, em janeiro, além de ter um título de Roland Garros em 2011, a chinesa de 32 anos publicou uma carta aberta em suas páginas no facebook e no weibo (destinada ao público chinês) em que aborda as dores nos dois joelhos, em especial o direito, as alegrias por desenvolver o\n[…]\nesporte no país e agradece a todos os que a auxiliaram a ter uma carreira tão vitoriosa no circuito.\n[…]\n“Representar China na quadra de tênis foi um privilégio extraordinário e uma verdadeira honra. Ter a oportunidade única de trazer efetivamente mais atenção para o tênis na China e toda a Ásia é algo que levarei para sempre. Mas no esporte, como na vida, todas as coisas boas devem chegar a um fim”, declarou Li que foi a primeira tenista asiática na história a chegar à final e, posteriormente, a vencer um Grand Slam.\n[…]\npaís.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Roger Federer",
      "descricao": "Tenista suíço nascido em 1981, ex-número 1 do mundo e campeão de 20 torneios de Grand Slam, aposentado em 2022."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Roger Federer foi gandula no torneio de quadra coberta da sua cidade natal, onde depois foi campeão várias vezes. Que cidade suíça é essa?",
    "resposta": "Basileia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Roger_Federer",
      "https://en.wikipedia.org/wiki/Swiss_Indoors"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roger_Federer",
        "situacao": "ok",
        "texto": "Roger Federer ( FED-ər-ər; Swiss Standard German: [ˈrɔdʒər ˈfeːdərər]; born 8 August 1981) is a Swiss former professional tennis player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for 310 weeks (second-most of all time), including a record 237 consecutive weeks, and finished as the year-end No. 1 five times.\n[…]\nFederer was nicknamed the \"Federer Express\" (shortened to \"Fed Express\" or \"FedEx\"), and the \"Swiss Maestro\". He was referred to as \"King Roger\" on occasion. Federer was also called \"The Swiss Perfection\", \"The Master\", \"His Majesty\", among other names.\n[…]\nOn June 9, 2024, Federer received an honorary Doctor of Humane Letters degree from Dartmouth, following his commencement address to the class of 2024. He said: \"I just came here to give a speech, but I get to go home as Dr. Roger.\"\n[…]\nIn 2003, he established the Roger Federer Foundation to help disadvantaged children and to promote their access to education and sport.\n[…]\nThe Nadal vs. Federer \"Match for Africa\" in 2010 in Zürich and Madrid raised more than $4 million for the Roger Federer Foundation and Fundación Rafa Nadal. In January 2011, Federer took part in Rally for Relief, an exhibition to raise money for the victims of the Queensland floods. In 2014, the \"Match for Africa 2\" between Federer and Stan Wawrinka, again in Zürich, raised £850,000 for education projects in Southern Africa.\n[…]\nRoger Federer career statistics\n[…]\nList of career achievements by Roger Federer\n[…]\nStauffer, René (2007). The Roger Federer Story: Quest for Perfection. New York: New Chapter Press. ISBN 978-0-942257-39-7.\n[…]\nPublications by and about Roger Federer in the catalogue Helveticat of the Swiss National Library\n[…]\nRoger Federer at the Association of Tennis Professionals\n[…]\nRoger Federer at World Tennis\n[…]\nRoger Federer at the Davis Cup (archived former page)\n[…]\nRoger Federer at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Swiss_Indoors",
        "situacao": "ok",
        "texto": "The Swiss Indoors is a professional men's tennis tournament played on indoor hardcourts at the St. Jakobshalle in Basel, Switzerland.\n[…]\nThe historical precursor event to this tournament was called the Swiss International Covered Courts that ran from 1920 to 1959, that was a fully open event for international players. To fill that gap this tournament was created in 1970 by Roger Brennwald and originally featured mainly Swiss top players. It became an event on the Grand Prix tennis circuit in 1977, when Björn Borg won the title and stayed until 1989. Since 2009 it has been part of the World Tour 500 Series of the ATP Tour.\n[…]\nBasel native Roger Federer holds the record for most singles titles, having won the tournament ten times, in 2006–2008, 2010–2011, 2014–2015 and 2017–2019. Federer has reached the final record fifteen times (2000–2001, 2006–2015, 2017–2019), which is also an Open Era record for most finals reached at a single ATP event.\n[…]\nBesides Federer, two other Swiss players have won the singles title: Michel Burgener, in 1972, and Jakob Hlasek, in 1991. The tournament was played on its unique red-colored indoor courts until 2010; starting in 2011 the court color was changed to the uniform blue courts of most other tournaments in the European fall indoor season.\n[…]\nRoger Federer (2006–2008, 2010–2011, 2014–2015, 2017–2019)\n[…]\nRoger Federer (2000–2001, 2006–2015, 2017–2019)\n[…]\nRoger Federer (2006–2015)\n[…]\nRoger Federer (1998–2003, 2006–2015, 2017–2019)\n[…]\nRoger Federer (1998–2003, 2006–2015, 2017–2019)\n[…]\nRoger Federer (1998–2003, 2006–2015, 2017–2019)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roger_Federer",
        "situacao": "ok",
        "texto": "Roger Federer (Basileia, 8 de agosto de 1981) é um ex-tenista suíço que já foi recordista de títulos de Grand Slam com vinte conquistas. Dentre seus 103 torneios ATP possui: 6 ATP Finals, 28 ATP Masters 1000, 24 ATP 500 e 25 ATP 250. É o segundo jogador que também já ficou por mais tempo como número um mundial, tendo um total de 310 semanas compreendidas entre 2004 e 2018. Entre 2004 e 2008, passo\n[…]\nPerto do fim da temporada, venceu o campeonato de sua cidade natal, o ATP da Basileia, pela primeira vez, depois de ter perdido na final do mesmo em 2000 e 2001 e de ter faltado em 2004 e 2005 devido a lesões.\n[…]\nAinda venceria neste mesmo ano, o décimo torneio de Basileia em sua carreira, sua cidade natal. Após lesão no joelho e algumas tentativas frustradas de retorno entre 2020 e 2022,\n[…]\nA segunda foi na final dos EUA, onde Del Potro venceu o então pentacampeão em cinco sets, terminando a série deste de vinte vitórias nos Grand Slams. Nas semifinais da Olimpíada de Londres 2012, Federer venceu por 19-17 no último set para garantir a medalha de prata olímpica. Eles também se enfrentaram três vezes na final do ATP da Basileia com del Potro prevalecendo nas duas primeiras ocasiões em 2012 e 2013 e Federer campeão na última vez em 2017 num jogo com três sets.\n[…]\nou você é Roger Federer.\"  É apelidado de rubber-man (homem borracha) por conta da soltura de seus movimentos. Sobre Roger Federer, Paulo Cleto declarou que:\"Mas, acima de tudo, Roger trouxe às quadras uma aliança raríssima de técnica, finesse, exuberância física, talento natural, disciplina, plasticidade e determinação. Todas essas são qualidades que, por vezes, sozinhas são o bastante para construir um campeão. No entanto, juntas, constroem um ídolo, uma unanimidade.\"\n[…]\nOutro jogador que a adotou após o suíço a fazer algumas vezes, foi Nick Kyrgios.\n[…]\nGillette Federer Tour\n[…]\nRoger Federer na Associação de Tenistas Profissionais",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "João Fonseca",
      "descricao": "Tenista brasileiro nascido em 2006 no Rio de Janeiro, campeão do ATP de Buenos Aires em 2025."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2025, o carioca João Fonseca conquistou seu primeiro título no circuito principal da ATP. Em qual capital sul-americana?",
    "resposta": "Buenos Aires",
    "fonte": [
      "https://en.wikipedia.org/wiki/2025_Argentina_Open",
      "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Fonseca_(tenista)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2025_Argentina_Open",
        "situacao": "ok",
        "texto": "The 2025 IEB+ Argentina Open was a men's tennis tournament played on outdoor clay courts. It was the 28th edition of the ATP Buenos Aires event, and part of the ATP Tour 250 series of the 2025 ATP Tour. It took place in Buenos Aires, Argentina, from 10 to 16 February 2025.\n[…]\nJoão Fonseca def. Francisco Cerúndolo, 6–4, 7–6(7–1)\n[…]\nJoão Fonseca\n[…]\n1 Rankings as of 3 February 2025."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Fonseca_(tenista)",
        "situacao": "ok",
        "texto": "João Franca Guimarães Fonseca (Rio de Janeiro, 21 de agosto de 2006) é um tenista brasileiro. Seu melhor ranking de simples é o de nº 24 do mundo, alcançado em 3 de novembro de 2025.\n[…]\nAos 18 anos de idade, em 16 de fevereiro de 2025, foi campeão do ATP 250 de Buenos Aires, na Argentina, sendo o brasileiro mais jovem e o sétimo mais jovem do mundo a conquistar um título de ATP Tour. Aos 19 anos, em 26 de outubro de 2025, se tornou o primeiro brasileiro a conquistar um título de ATP 500, vencendo o ATP 500 de Basel ao derrotar o espanhol Alejandro Davidovich Fokina por 2 sets a 0.\n[…]\nFonseca foi o campeão mundial do Circuito ITF Júnior, em 2023. Aos 17 anos, foi o primeiro brasileiro a terminar a temporada como número 1 do ranking mundial de juniores.\n[…]\nEm janeiro de 2024, o carioca de 17 anos chegou às semifinais do Challenger de Buenos Aires, a primeira semifinal da carreira neste tipo de torneio. Até então, Fonseca havia chegado às quartas de final em dois Challengers, o primeiro em 2022, em São Leopoldo, e em 2023, em Florianópolis. O título na capital argentina, pelas duplas, foi seu primeiro em uma competição organizada pela ATP.\n[…]\nNo ATP 250 de Buenos Aires, em fevereiro, ele fez novamente história ao vencer o torneio, derrotando 4 argentinos em 5 jogos (Tomás Martín Etcheverry, Federico Coria, Mariano Navone e Francisco Cerúndolo), pulando para o nº 68 do mundo e se tornando o 7º tenista mais jovem de todos os tempos a vencer um título de ATP, sendo o 10º título na lista dos obtidos por um tenista de menor idade. Fonseca, neste momento, também se tornou o tenista nº 1 do Brasil.\n[…]\n2025\n[…]\nJoão Fonseca na Associação de Tenistas Profissionais\n[…]\nJoão Fonseca no Instagram"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Maria Esther Bueno",
      "descricao": "Tenista brasileira (1939-2018), sete vezes campeã de simples em Grand Slams e número um do mundo em 1959 e 1960."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano a paulistana Maria Esther Bueno venceu Wimbledon em simples pela primeira vez?",
    "resposta": "1959",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Maria_Esther_Bueno",
      "https://en.wikipedia.org/wiki/Maria_Bueno"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Maria_Esther_Bueno",
        "situacao": "ok",
        "texto": "Maria Esther Andion Bueno (São Paulo, 11 de outubro de 1939 — São Paulo, 8 de junho de 2018), conhecida no exterior como Maria Bueno, foi uma tenista brasileira, que atuou nas décadas de 1950, 1960 e 1970, sendo uma das raras tenistas a conquistar títulos em três décadas diferentes. Segundo o jornalista esportivo José Nilton Dalcim: “Maria Esther Bueno é a maior atleta feminina brasileira de todos\n[…]\nAo todo, Bueno venceu dezenove torneios do Grand Slam (sete na categoria simples; onze em duplas femininas; um em duplas mistas). Segundo a Federação Internacional de Tênis, foi a n.º 1 do mundo em 1959, na categoria individual feminina. O International Tennis Hall of Fame também a incluiu como a melhor tenista do mundo, em 1964 (depois de perder a final no Torneio de Roland-Garros e ganhar Wimbledon e o U.S. Open) e 1966.\n[…]\nO primeiro título de simples de Maria Esther Bueno em um torneio de Grand Slam, veio quando tinha apenas dezenove anos de idade, no dia 4 de julho de 1959, na \"grama sagrada\" de Wimbledon. Ao vencer Darlene Hard, por 6/3 e 6/4, ela pôs fim a 21 anos de domínio norte-americano em Wimbledon.\n[…]\nHomenageada pela Empresa Brasileira de Correios e Telégrafos com um selo especial, em 1959, em comemoração à conquista do torneio de simples de Wimbledon.\n[…]\nDeclarada campeã mundial em 1959, 1960, 1964 e 1966.\n[…]\nTítulos profissionais: 62, sendo sete do Grand Slam em simples, dez em duplas e um em duplas mistas. Grand Slam em simples, ganhou em Wimbledon (1959, 1960, 1964) e no Aberto dos Estados Unidos (1959, 1963, 1964 e 1966). Em duplas: Wimbledon (1958, 1960, 1963 e 1965), Aberto dos Estados Unidos (1960, 1962, 1966 e 1968); Aberto da Austrália (1960); Roland Garros (1960). Em duplas mistas: Roland Garros (1960).\n[…]\nPrimeiro título de Grand Slam: em Wimbledon, em 1959, aos dezenove anos.\n[…]\nReportagem sobre a vida de Maria Esther Bueno"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Maria_Bueno",
        "situacao": "ok",
        "texto": "Maria Esther Andion Bueno (11 October 1939 – 8 June 2018) was a Brazilian professional tennis player. During her 11-year career in the 1950s and 1960s, she won 19 major titles (seven in women's singles, 11 in women's doubles and one in mixed doubles), making her the most successful South American tennis player in history and the only one ever to win Wimbledon in singles. Bueno was the year-end No.\n[…]\n1 ranking for 1959 and the Associated Press Female Athlete of the Year award. Bueno was the first non-North-American woman to win both Wimbledon and the U.S. Championships in the same calendar year. In her native Brazil, she returned as a national heroine, honoured by the country's president and given a ticker-tape parade on the streets of São Paulo.\n[…]\nAccording to Lance Tingay of the Daily Telegraph and the Daily Mail and Bud Collins, Bueno was ranked in the world top ten from 1958 through 1960 and from 1962 through 1968, reaching a career high of World No. 1 in those rankings in 1959 and 1960. The International Tennis Hall of Fame also lists her as the top ranked player in 1964 (after losing the final at the French Championships and winning both Wimbledon and the U.S. Championships) and 1966.\n[…]\nIn 1959 Correios do Brasil issued a postal stamp honouring her title at the Wimbledon Ladies Singles Championships. That same year the Associated Press voted her Female Athlete of the Year. In 1978, Bueno was inducted into the International Tennis Hall of Fame in Newport, Rhode Island.\n[…]\nThe Maria Esther Bueno Cup, an under-24 men's tennis competition that ran from 2018 to 2023, was named in her honour.\n[…]\nOn 24 November 2018, the Sociedade Harmonia de Tênis club in São Paulo unveiled a statue of Bueno during the Maria Esther Bueno Cup. The ceremony, attended by members of her family, also featured an exhibition of trophies and clothing celebrating her career.\n[…]\nMaria Bueno at World Tennis"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Aberto da Austrália",
      "descricao": "Torneio de Grand Slam disputado em Melbourne, o primeiro da temporada."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Aberto da Austrália deixou a grama e passou para a quadra dura em qual ano, ao se mudar para Melbourne Park?",
    "resposta": "1988",
    "fonte": [
      "https://en.wikipedia.org/wiki/Australian_Open"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Australian_Open",
        "situacao": "ok",
        "texto": "The Australian Open is a tennis tournament organised by Tennis Australia annually at Melbourne Park in Melbourne, Victoria, Australia. It is the first of the four major tennis tournaments every year, held before the French Open, Wimbledon and the US Open.\n[…]\nThe Australian Open has been held at the Melbourne Park complex since 1988 and is a major contributor to the Victorian economy; the 2026 Australian Open delivered A$722.3 million into the state's economy, while over the preceding decade, the Australian Open contributed more than A$3.9 billion in economic benefits to the state. Major occupations associated with the tournament include accommodation, hotels, cafés and trade services sectors.\n[…]\nIn 1972, it was decided to stage the tournament in Melbourne each year because it attracted the biggest patronage of any Australian city. The tournament was played at the Kooyong Lawn Tennis Club from 1972 until its move to the new Flinders Park complex in 1988.\n[…]\nIn 1988 the tournament was first held at Flinders Park (later renamed Melbourne Park). The change of the venue also led to a change of the court surface from grass to a hard court surface known as Rebound Ace.\n[…]\nThe Australian Open is played at Melbourne Park, which is located in the Melbourne Sports and Entertainment Precinct; the event moved to this site in 1988. Currently three of the courts have retractable roofs, allowing play to continue during rain and extreme heat. As of 2017, spectators can also observe play at Show Courts 2 and 3, which have capacities of 3,000 each, as well as at Courts 4–17, 19 and 20 with the aid of temporary seating grandstands of capacity anywhere from 50 to 2,500.\n[…]\nList of Australian Open mixed doubles champions\n[…]\nUS Open\n[…]\nAustralian Open – Grand Slam History"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Australian_Open",
        "situacao": "ok",
        "texto": "O Australian Open (no Brasil, Aberto da Austrália; em Portugal, Open da Austrália) é um torneio de tênis, da categoria Grand Slam, disputado em Melbourne, na Austrália.\n[…]\nDesde a primeira edição do Australian Open, em 1905, o torneio já foi disputado em seis cidades diferentes, até que foi transferido para a cidade de Melbourne, no ano de 1972. Em 1908, um estadunidense, Fred Alexander, tornou-se o primeiro estrangeiro a triunfar no Australian Open. A competição foi aberta às mulheres somente em 1922 [en]. Em 1988, a grama é abandonada em benefício de uma superfície sintética dura, o  Rebound Ace, uma superfície similar à do US Open, porém mais rápida.\n[…]\nO torneio foi primeiramente conhecido como Australasian Championships e depois Australian Championships em 1927, e como  Australian Open somente em 1969. Desde 1905, o Australian Open esteve sediado em cinco cidades australianas e duas da Nova Zelândia: Melbourne (55 vezes), Sydney (17 vezes), Adelaide (14 vezes), Brisbane (7 vezes), Perth (3 vezes), Christchurch (1906) e Hastings (1912).\n[…]\nO torneio foi disputado no Kooyong Lawn Tennis Club [en] de 1972 até no novo complexo Melbourne Park ser erguido em 1988.\n[…]\nAs novas facilidades do antigo Flinders Park visaram atender a demanda do torneio à capacidade do antigo estádio Kooyong. A mudança para o Melbourne Park trouxe um sucesso imediato, com um aumento de 90% de público em  1988 (266.436) com os antigos (140.000) do Kooyong.\n[…]\nFinalistas do Australian Open, com seus campeões, vice-campeões e resultados, por evento:\n[…]\nAustralian Open no Facebook\n[…]\nAustralian Open no Instagram\n[…]\nAustralian Open no X\n[…]\nAustralian Open TV no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "US Open",
      "descricao": "Torneio de Grand Slam de tênis disputado em Nova York, o último da temporada."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O US Open, último Grand Slam do calendário, é disputado em quais meses do ano?",
    "resposta": "Agosto e setembro",
    "fonte": [
      "https://en.wikipedia.org/wiki/US_Open_(tennis)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/US_Open_(tennis)",
        "situacao": "ok",
        "texto": "The US Open Tennis Championships, commonly called the US Open (stylized in all lowercase), is a hardcourt tennis tournament organized by the United States Tennis Association annually in Queens, New York City. It is chronologically the fourth and final of the four Grand Slam tennis events, held after the Australian Open, French Open, and Wimbledon.\n[…]\nIn 1970, the US Open became the first Grand Slam tournament to use a tiebreaker to decide a set that reached a 6–6 score in games. From 1970 through 1974, the US Open used a best-of-nine-point sudden-death tiebreaker before moving to the International Tennis Federation's (ITF) best-of-twelve points system.\n[…]\nThe US Open is the only Grand Slam tournament that has been played every year since its inception.\n[…]\nIn 2006, the US Open introduced instant replay reviews of line calls, using the Hawk-Eye computer system. It was the first Grand Slam tournament to use the system. The Open felt the need to implement the system because of the controversial quarterfinal match at the 2004 US Open between Serena Williams and Jennifer Capriati, where a number of important line calls went against Williams.\n[…]\nThe introduction of the Player Support Program coincided with the formation of a new Grand Slam Player Council by the US Open, Australian Open, Roland-Garros and Wimbledon. The council was established to give players a voice on on-court and in-tournament matters and to provide recommendations to the US Open on how the Player Support Program should be implemented.\n[…]\nThe US Open's website allows viewing of live streaming video, but unlike other Grand Slam tournaments, does not allow watching video on demand. The site also offers live radio coverage.\n[…]\nList of US Open women's doubles champions\n[…]\nList of US Open singles finalists during the Open Era\n[…]\nMedia related to US Open (tennis) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/US_Open_%28t%C3%AAnis%29",
        "situacao": "ok",
        "texto": "US Open (ou Aberto dos Estados Unidos / Open dos Estados Unidos), nomeado formalmente como \"United States Open Tennis Championships\", é um torneio de tênis disputado nos Estados Unidos. O US Open é a encarnação moderna do antigo U.S. National Championship, sendo este um dos mais antigos torneios de tênis do mundo, cujo torneio masculino ocorreu pela primeira vez em 1881. Desde 1987, o US Open é cr\n[…]\nOcorre anualmente em agosto e setembro, num período de duas semanas (as semanas antes e depois do Labor Day). O torneio principal consiste de cinco diferentes eventos, simples masculino e feminino, duplas masculinas, femininas e mistas, com categorias adicionais para seniores, juniores e usuários de cadeira de rodas.\n[…]\nO primeiro campeonato dos EUA aconteceu em 1881 e é disputado em agosto, em Newport, Rhode Island. O simples feminino foi disputado pela primeira vez em 1887. Em 1903, Lawrence Doherty foi o primeiro estrangeiro a vencer o torneio. Em 1919, o torneio foi transferido para a cidade de Nova York e, em 1926, o francês René Lacoste, tornou-se o primeiro estrangeiro não falante do inglês a triunfar no US Open.\n[…]\nO torneio foi disputado em quadras de grama até 1974 e em saibro verde entre 1975 e 1977. Em 1997, o estádio Arthur Ashe é inaugurado, podendo acolher 23.500 espectadores, o maior do mundo. Junto com o Australian Open, o Torneio de Roland Garros e o Torneio de Wimbledon, o US Open compõe os quatro torneios do Grand Slam. O US Open é o quarto e último torneio do Grand Slam da temporada. Ele é disputado em superfície dura (\"Decoturf\").\n[…]\nO US Open é o único Grand Slam que tem sido jogado todos os anos sem interrupção.\n[…]\nFinalistas do US Open, com seus campeões, vice-campeões e resultados, por evento:\n[…]\nLista de campeões em simples de torneios do Grand Slam\n[…]\nLista de campeãs em simples de torneios do Grand Slam",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Quadra Central de Wimbledon",
      "descricao": "Principal quadra de grama do All England Club, em Londres, onde se disputam as finais de Wimbledon."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A Quadra Central de Wimbledon ganhou um teto retrátil, que permite jogar mesmo com chuva, em qual ano?",
    "resposta": "2009",
    "fonte": [
      "https://en.wikipedia.org/wiki/Centre_Court"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Centre_Court",
        "situacao": "ok",
        "texto": "Centre Court is a tennis court at the All England Lawn Tennis and Croquet Club (also known as the All England Club) and is the main court used in the Wimbledon Championships, the third annual Grand Slam event of the tennis calendar. It is considered the world's most famous tennis court. It incorporates the clubhouse of the All England Club. Its only regular use for play is during the two weeks a y\n[…]\nA retractable roof was installed in 2009, enabling play to continue during rain and into the night up until a council-imposed curfew of 11:00 pm. Centre Court, along with No. 1 Court and No. 2 Court, was also host to the tennis competition at the 2012 Summer Olympics.\n[…]\nThe lack of a roof played a key role in the finish to the now-legendary 2008 Wimbledon men's final, which saw the match end in near-darkness after nearly two hours of rain delays. The completed retractable roof structure was ready for the 2009 Championships, being unveiled in April 2009 and tested with a capacity audience during an exhibition match on 17 May 2009, featuring Andre Agassi, Steffi Graf, Tim Henman, and Kim Clijsters (subsequently returning from retirement).\n[…]\nThe roof was closed for the first time during a competitive Championships match at about 4:40 pm on Monday 29 June 2009, during the fourth round Ladies Singles match between Amélie Mauresmo and Dinara Safina.\n[…]\nThe longest recorded match played on Centre Court was the 2008 Wimbledon Championships men’s singles final, contested between Rafael Nadal and Roger Federer. The match had a duration of 4 hours and 48 minutes of play and ended with a score of  6–4, 6–4, 6–7(5–7), 6–7(8–10), 9–7, with Nadal securing his first of two Wimbledon Championships singles titles.\n[…]\nBritain From Above – Aerial photo of the Centre Court at Worple Road during the 1921 Wimbledon Championships\n[…]\nInformation about Wimbledon Centre Court and a Photo Gallery\n[…]\n[2] Facts on Wimbledon"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Simples feminino de Wimbledon",
      "descricao": "Torneio de simples feminino do campeonato de Wimbledon, disputado desde 1884."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Wimbledon nasceu em 1877 só com o torneio masculino. Em que ano as mulheres passaram a disputar o título de simples?",
    "resposta": "1884",
    "distratores": [
      "1879",
      "1900",
      "1919"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_Wimbledon_ladies%27_singles_champions"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Wimbledon_ladies%27_singles_champions",
        "situacao": "ok",
        "texto": "Wimbledon Championships, is an annual tennis tournament first contested in 1877 and played on outdoor grass courts at the All England Lawn Tennis and Croquet Club (AELTC) in the Wimbledon suburb of London, United Kingdom. The ladies' singles was started in 1884.\n[…]\nSince the first championships, all matches have been played at the best-of-three sets. Between 1877 and 1883, the winner of the next game at five games-all took the set in every match except the all comers' final, and the challenge round, which were won with six games and a two games advantage. All sets were decided in two-game advantage format from 1884 to 1970.\n[…]\nThe ladies' singles champion receives a sterling silver salver commonly known as the \"Venus Rosewater Dish\", or simply the \"Rosewater Dish\". The salver, which is 18.75 inches (about 48 cm) in diameter, is decorated with figures from mythology. New singles champions are traditionally elected honorary members of the AELTC by the club's committee. In 2012, the ladies' singles winner received prize money of £1,150,000.\n[…]\nIn the Amateur–challenge round era, Dorothea Lambert Chambers (1903–1904, 1906, 1910–1911, 1913–1914) holds the record for most titles, with seven. However, it is noteworthy that three of Chambers' titles were won in the challenge round. Lottie Dod (1891–1893) and Suzanne Lenglen (1919–1921) hold the record for most consecutive wins in the ladies' singles with three victories each.\n[…]\nList of Wimbledon gentlemen's singles champions\n[…]\nList of Wimbledon ladies' doubles champions\n[…]\nList of Australian Open women's singles champions\n[…]\nList of French Open women's singles champions\n[…]\nList of US Open women's singles champions\n[…]\nList of Grand Slam women's singles champions\n[…]\nThe Championships, Wimbledon official website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_finais_femininas_em_simples_do_Torneio_de_Wimbledon",
        "situacao": "ok",
        "texto": "Esta é a lista de finais femininas em simples do Torneio de Wimbledon.\n[…]\nOutras competições do Torneio de Wimbledon\n[…]\nLista de finais masculinas em simples do Torneio de Wimbledon\n[…]\nLista de finais masculinas em duplas do Torneio de Wimbledon\n[…]\nLista de finais femininas em duplas do Torneio de Wimbledon\n[…]\nLista de finais em duplas mistas do Torneio de Wimbledon\n[…]\nLista de finais masculinas juvenis em simples do Torneio de Wimbledon\n[…]\nLista de finais femininas juvenis em simples do Torneio de Wimbledon\n[…]\nLista de finais masculinas juvenis em duplas do Torneio de Wimbledon\n[…]\nLista de finais femininas juvenis em duplas do Torneio de Wimbledon\n[…]\nLista de finais para cadeirantes do Torneio de Wimbledon\n[…]\nFinais femininas em simples de Grand Slam\n[…]\nLista de finais femininas em simples do Australian Open\n[…]\nLista de finais femininas em simples do Torneio de Roland Garros\n[…]\nLista de finais femininas em simples do US Open",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Hawk-Eye",
      "descricao": "Sistema eletrônico de rastreamento da bola usado para revisar marcações de linha no tênis e em outros esportes."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O Hawk-Eye, que permite aos tenistas contestar marcações de linha, estreou num torneio de Grand Slam em qual ano?",
    "resposta": "2006",
    "distratores": [
      "1999",
      "2002",
      "2012"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hawk-Eye"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hawk-Eye",
        "situacao": "ok",
        "texto": "Hawk-Eye is a computer vision system used to visually track the trajectory of a ball and display a profile of its statistically most likely path as a moving image. It is used in more than 20 major sports, including baseball, cricket, tennis, badminton, hurling, rugby union, soccer, Gaelic football, American football, and volleyball.\n[…]\nHawk-Eye has been used in television coverage of several major tennis tournaments, including Wimbledon, the Queen's Club Championships, the Australian Open, the Davis Cup and the Tennis Masters Cup. The US Open Tennis Championship announced they would make official use of the technology for the 2006 US Open where each player receives two challenges per set. It is also used as part of a larger tennis simulation implemented by IBM called PointTracker.\n[…]\nThe 2006 Hopman Cup in Perth, Western Australia, was the first elite-level tennis tournament where players were allowed to challenge point-ending line calls, which were then reviewed by the referees using Hawk-Eye technology. It used 10 cameras feeding information about ball position to the computers. Jamea Jackson was the first player to challenge a call using the system.\n[…]\nIn March 2006, at the Nasdaq-100 Open in Key Biscayne, Florida, Hawk-Eye was used officially for the first time at a tennis tour event. Later that year, the US Open became the first grand-slam tournament to use the system during play, allowing players to challenge line calls.\n[…]\nUntil March 2008, the International Tennis Federation (ITF), Association of Tennis Professionals (ATP), Women's Tennis Association (WTA), Grand Slam Committee, and several individual tournaments had conflicting rules on how Hawk-Eye was to be utilised. A key example of this was the number of challenges a player was permitted per set, which varied among events."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hawk-Eye",
        "situacao": "ok",
        "texto": "Hawk-Eye (em português:Olhos de Falcão) é um sistema tecnológico usado em alguns esportes a fim de ajudar o árbitro a tomar uma decisão correta. Amplamente utilizado no tênis, rugbi e críquete, ele é um programa de informática que capta, por diversos ângulos, a trajetória de vários objetos ou pessoas. Também conhecido como 'tira-teima', o sistema utiliza várias câmeras de alta velocidade apontadas\n[…]\nNo tênis, a utilização do recurso tecnológico é chamado de \"desafio\" e cada jogador pode utilizar 3 desafios por set. O replay é visto pelo árbitro de cadeira e mostrado por uma televisão para os espectadores no estádio. Se o tenista estiver correto na marcação, ele não perde a pedida. A cada disputa de tie-break o atleta pode fazer um pedido adicional. Não se podem acumular pedidos de um set a outro. Em jogos no saibro não há desafios, já que a marca da bola fica estampada na quadra.\n[…]\nO sistema Hawk-Eye foi aprovado como uma Tecnologia da Linha do Gol pela FIFA em 2012. A partir da temporada 2013-14 ela será utilizada no Campeonato Inglês.\n[…]\nEm junho de 2020, depois de mais de 9 mil jogos mundo afora e uma infinidade de testes, o sistema Hawk-Eye, utilizado na Premier League, falhou ao não detectar que a bola havia atravessado a linha e não apontou que foi gol. O sistema não funcionou pois as câmeras do sistema Hawk-Eye são colocadas no alto do estádio. Assim, quanto mais alto e largo o jogador, maior a probabilidade de a bola ser obstruída, existindo, desta forma, um ponto cego para as câmeras.\n[…]\nSegundo a empresa que opera o sistema, a falha se deu pois \"as sete câmeras localizadas nas arquibancadas ao redor do gol foram significativamente obstruídas pelo goleiro, defensor e pela trave. Esse nível de obstrução nunca foi visto antes em mais de 9 mil jogos que o sistema Hawk-Eye Tecnologia da Linha de Gol esteve em operação\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Lacoste (marca)",
      "descricao": "Marca francesa de roupas com o símbolo de um crocodilo, fundada pelo tenista René Lacoste."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "René Lacoste fundou a marca de camisas com o crocodilo bordado no peito em qual década?",
    "resposta": "Anos trinta (1933)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lacoste"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lacoste",
        "situacao": "ok",
        "texto": "Lacoste S.A. (; French: [lakɔst]) is a French designer fashion brand, founded in 1933 by tennis player René Lacoste, and entrepreneur André Gillier. It sells clothing, footwear, sportswear, eyewear, leather goods, perfume, towels and watches. The company is globally recognised by its signature green crocodile logo.\n[…]\nIn 1933 Lacoste began to brand clothing as La Chemise Lacoste with André Gillier, the owner and president of the largest French knitwear manufacturing firm at the time. They began to produce the revolutionary polo Lacoste had designed and worn on the tennis courts, with the crocodile logo embroidered on the chest. The company claims this as the first example of a brand appearing on a sport clothing.\n[…]\nIn 2017, tennis player Novak Djokovic was named brand ambassador and \"the new crocodile\" (next to Rene Lacoste) for Lacoste. This obligation included a five-year contract as well as multiple appearances in advertising campaigns, and was extended by three years. In 2019, Lacoste appointed Chinese singer/actor Z.Tao as their brand spokesperson for Asia Pacific as the brand's first attempt at appointing someone for the region.\n[…]\nIn June 2024, Lacoste announced the launch of its new fragrance, Lacoste Original.\n[…]\nLacoste was involved in a long-standing dispute over its logo with Hong Kong–based sportswear company Crocodile Garments. At the time, Lacoste used a crocodile logo that faced right (registered in France in 1933) while Crocodile used one that faced left (registered in various Asian countries in the 1940s and 1950s). Lacoste tried to block an application from Crocodile to register its logo in China during the 1990s, and the dispute ended in a settlement.\n[…]\nCrocodile Garments\n[…]\nIzod Lacoste\n[…]\nLacoste Essential (fragrance)\n[…]\nLacoste – brand and company profile at Fashion Model Directory"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lacoste",
        "situacao": "ok",
        "texto": "Lacoste é uma empresa de vestuário de luxo fundada em 1933 por René Lacoste, em Paris, França.\n[…]\nA empresa foi fundada pelo tenista René Lacoste, juntamente com André Gillier em 1933. René tinha sido apelidado de \"Le Crocodile\" pela imprensa americana durante a Davis Cup em 1927, por causa de uma aposta que valia uma mala de pele de crocodilo. O animal acabou virando o símbolo da marca.\n[…]\nEm 1963, René passou o controle da marca a seu filho, Bernard Lacoste.\n[…]\nA partir dos anos 90 a popularidade da Lacoste estava em queda, até que o estilista francês, Christophe Lemaire ter tomado a direção criativa da Lacoste, ele modernizou a marca, mantendo o estilo criado por René.\n[…]\nEm 2005, quase 55 milhões de produtos Lacoste eram vendidos em mais de 100 países. Este fato também se deve aos contratos que a Lacoste fez com vários tenistas para representarem a marca, tais como o americano Andy Roddick, o suíço Stanislas Wawrinka, o canadense Milos Raonic, o aposentado tenista francês Fabrice Santoro e o também francês Richard Gasquet. Também apostaram no mundo do golfe, fazendo um contrato com o golfista bicampeão do Major Championships, José María Olazábal.\n[…]\nBernand Lacoste passou a presidência da (Lacoste) ao seu irmão mais novo, que já trabalhava há vários anos na marca. Bernard morreu em 21 de março de 2006.\n[…]\nEm 2011, a empresa tentou proibir que Anders Behring Breivik continuasse utilizando as camisas da marca.\n[…]\nDiversos artistas musicais brasileiros já fizeram referências a marca Lacoste em suas músicas. Uma das mais conhecidas é Rei Lacoste cantada pelo rapper carioca, MD Chefe.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Torneio de Roland Garros",
      "descricao": "Torneio de Grand Slam disputado em quadras de saibro em Paris, também chamado Aberto da França."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Criado em 1891, o campeonato francês que deu origem a Roland Garros só passou a aceitar tenistas estrangeiros em qual década?",
    "resposta": "Anos vinte (1925)",
    "fonte": [
      "https://en.wikipedia.org/wiki/French_Open"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/French_Open",
        "situacao": "ok",
        "texto": "The French Open (French: Internationaux de France de tennis), also known as Roland-Garros (French: [ʁɔlɑ̃ ɡaʁos]), is a tennis tournament organized by the French Tennis Federation annually at Stade Roland Garros in Paris, France. It is chronologically the second of the four Grand Slam tennis events every year, held after the Australian Open and before Wimbledon and the US Open. It was established \n[…]\nOfficially named in French Internationaux de France de Tennis (\"French Internationals of Tennis\"), the tournament uses the name Roland-Garros in all languages, and it is usually called the French Open in English.\n[…]\nIn 1891, the Championnat de France, which is commonly referred to in English as the \"French Championships\", began. This was only open to tennis players who were members of French clubs. The first winner was H. Briggs, a Briton who resided in Paris and was a member of the club Stade Français. In the final, he defeated P. Baigneres in straight sets. The first women's singles tournament, with four entries, was held in 1897. The mixed doubles event was added in 1902 and the women's doubles in 1907.\n[…]\nIn 1925, the French Championships became open to all amateurs internationally and was designated a major championship by the International Lawn Tennis Federation. It was held on clay courts at the Stade Français in Saint-Cloud (site of the previous World Hard Court Championships) in 1925 and 1927. In 1926 the Croix-Catelan of the Racing Club de France hosted the event in Paris, the site of the previous French club members-only tournament, also on clay.\n[…]\nFrench Championships (1891–1924) was only open to French clubs' members. In 1925, it opened to international players, and was later renamed the French Open in 1968, when it allowed professionals to compete with amateurs. See WHCC.\n[…]\nAustralian Open\n[…]\nUS Open\n[…]\n(in French) Roland-Garros on France Télévisions\n[…]\nPhotos of Roland-Garros"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Torneio_de_Roland_Garros",
        "situacao": "ok",
        "texto": "O Torneio de Roland Garros (Internationaux de France, French Open ou Aberto da França) é um torneio de tênis realizado em Paris, na França. Tem seu nome em homenagem a Roland Garros, francês pioneiro da aviação.\n[…]\nO campeonato foi disputado no Stade français em 1925 e 1927, no Racing club de France em 1926, e tem sido realizado no estádio de Roland Garros desde 1928. Antes de 1925, o torneio dos homens era reservado exclusivamente aos membros de clubes franceses de tênis, assim como o das damas antes de 1920.\n[…]\nOficialmente chamado de Internationaux de France de Roland-Garros e Tournoi de Roland-Garros (O \"Internacional da França de Roland Garros\" ou \"Torneio de Roland Garros\" em português), o torneio é referido como \"Aberto da França\" ou simplesmente como \"Roland Garros\", na qual pode ser dito em qualquer idioma. Em francês, a ortografia exige que os nomes compostos de lugares ou eventos que prestem homenagem alguém devem ser separados por hífen.\n[…]\nPortanto, a grafia oficial do nome do estádio e o dos torneios é \"Roland-Garros\".\n[…]\nA campeã feminina de simples do torneio vai erguer a Copa Suzanne Lenglen. A tenistas francesa dominou Roland-Garros e Wimbledon entre 1919 e 1926. Desse modo, Lenglen ganhou a chave de simples, duplas e duplas mistas dos dois torneios, foram 16 títulos em Paris e 15 em Londres. A dupla masculina que ganhar o campeonato ergue a taça que homenageia o Mosqueteiro. Brougnon era especialista em duplas.\n[…]\nFinalistas do Torneio de Roland Garros, com seus campeões, vice-campeões e resultados, por evento:\n[…]\nRoland-Garros no Facebook\n[…]\nRoland-Garros no Instagram\n[…]\nRoland-Garros no TikTok\n[…]\nRoland-Garros no X\n[…]\nRoland-Garros no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Tênis em cadeira de rodas nos Jogos Paralímpicos",
      "descricao": "Presença do tênis em cadeira de rodas no programa dos Jogos Paralímpicos de Verão."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Depois de ser apresentado como demonstração em Seul, o tênis em cadeira de rodas virou modalidade paralímpica oficial em qual edição dos Jogos?",
    "resposta": "Barcelona 1992",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wheelchair_tennis_at_the_Summer_Paralympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wheelchair_tennis_at_the_Summer_Paralympics",
        "situacao": "ok",
        "texto": "Wheelchair tennis was first contested at the Summer Paralympics as a demonstration sport in 1988, with two events being held (men's and women's singles). It became an official medal-awarding sport in 1992 and has been competed at every Summer Paralympics since then. Four events were held from 1992 to 2000, with quad events (mixed gender) in both singles and doubles added in 2004.\n[…]\nSix events are contested at each Paralympic. Only men's and women's singles were held at the 1988 Paralympics, when it was a demonstration sport. These were joined by men's and women's doubles events four years later when the sport turned an official event. In 2004, two new events were added with quadriplegia (as such they are also known as \"quad\" events) and unlike the other events they are open.\n[…]\nUntil the 2024 Games, only two women competed in the event, the Dutch Monique de Beer and the Canadian Sarah Hunter, both competed in 2004 and 2008, but the Dutch is still the only woman to win a medal at the Paralympics, a bronze in the doubles event in 2004.\n[…]\nUpdated af the 2024 Summer Paralympics\n[…]\nMedal winners for every Summer Games since 1988 are as follows:\n[…]\nTennis at the Summer Olympics\n[…]\n\"Wheelchair Tennis History\". International Paralympic Committee. 2008. Retrieved 2009-07-25.\n[…]\n\"Results by Sport – Wheelchair Tennis\". International Paralympic Committee. 2008. Retrieved 2009-07-25."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "You cannot be serious",
      "descricao": "Frase gritada por John McEnroe a um árbitro em Wimbledon 1981, depois usada como título da sua autobiografia."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em Wimbledon 1981, que tenista americano gritou para o árbitro a frase you cannot be serious, que depois virou título da sua autobiografia?",
    "resposta": "John McEnroe",
    "fonte": [
      "https://en.wikipedia.org/wiki/John_McEnroe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/John_McEnroe",
        "situacao": "ok",
        "texto": "John Patrick McEnroe Jr. (born February 16, 1959) is an American former professional tennis player. Often ranked amongst the greatest tennis players of all time, McEnroe was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for 170 weeks. He has held this ranking a record 14 times. He also held the world No. 1 title in men's doubles for 269 weeks (third-mo\n[…]\nMcEnroe was born in Wiesbaden, West Germany, to American parents, John Patrick McEnroe Sr. and his wife Katherine (née Tresham). His father, the son of Irish immigrants, was at the time stationed with the United States Air Force (USAF), once revealing during a press conference in Belgium that his son 'John was made in Belgium but born in Germany.' McEnroe's Irish paternal grandfather was from Ballyjamesduff in County Cavan and his grandmother was from County Westmeath.\n[…]\nMcEnroe remained controversial when he returned to Wimbledon in 1981. Following his first-round match against Tom Gullikson, McEnroe was fined U.S. $1,500 and came close to being ejected after he called umpire Ted James \"the pits of the world\" and then swore at tournament referee Fred Hoyles. He also made famous the phrase \"you cannot be serious\", which years later became the title of his autobiography, by shouting it after several umpires' calls during his matches.\n[…]\nLendl–McEnroe rivalry\n[…]\nMcEnroe, John; Kaplan, James (2002). You Cannot Be Serious. London: Time Warner Paperbacks. ISBN 0-7515-3454-4.\n[…]\nThe Wimbledon Collection – Legends of Wimbledon – John McEnroe Standing Room Only, DVD Release Date: September 21, 2004, Run Time: 52 minutes, ASIN: B0002HOD9U\n[…]\nQuotations related to John McEnroe at Wikiquote\n[…]\nJohn McEnroe at the Association of Tennis Professionals\n[…]\nJohn McEnroe at World Tennis\n[…]\nJohn McEnroe at the Davis Cup (archived)\n[…]\nJohn McEnroe at the International Tennis Hall of Fame\n[…]\nJohn McEnroe's ESPN Bio\n[…]\nJohn McEnroe at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/John_McEnroe",
        "situacao": "ok",
        "texto": "John Patrick McEnroe, Jr. (Wiesbaden, 16 de fevereiro de 1959) é um ex-tenista profissional alemão naturalizado norte-americano foi o número 1 do mundo no ranking da ATP em simples e em duplas, também famoso pelas suas partidas épicas contra Björn Borg, Jimmy Connors e Ivan Lendl.\n[…]\nJohn McEnroe até os dias de hoje foi o último tenista a conseguir ser o número 1 do mundo em simples e duplas simultânemente.\n[…]\nReconhecido como um dos tenistas mais temperamentais da história, McEnroe tinha o hábito de xingar os juízes, atirar raquetes longe (quando não as quebrava) e reclamar acintosamente de lances em que julgava errada uma decisão do árbitro. Somente em janeiro de 1990 recebeu uma punição dura. Na disputa das oitavas-de-final do Open da Austrália, as broncas de McEnroe encontraram um juiz menos condescendente.\n[…]\nDepois que abandonou o tênis, em 1992, McEnroe decidiu montar uma banda de rock, exibindo suas habilidades musicais com a guitarra. Enquanto participou de shows beneficentes e festas, fez sucesso. No final de julho de 1994, McEnroe promoveu um concerto na cidade italiana de Riccione, num ginásio para 2 mil pessoas. Apareceram apenas duzentos espectadores para prestigiar o ex-tenista.\n[…]\nMcEnroe também comenta partidas de tênis para a televisão e teve até um talk-show que foi cancelado com cinco meses de existência.\n[…]\nMcEnroe é membro do International Tennis Hall of Fame desde 1999.\n[…]\nMcEnroe fez participações especiais nos filmes A Herança de Mr. Deeds, Zohan: O agente bom de corte, Tratamento de Choque, Cada Um Tem A Gêmea Que Merece, Wimbledon (filme) e na série Never Have I Ever da Netflix.\n[…]\nMcEnroe venceu 98 títulos em simples, incluindo 77 títulos \"oficiais\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Roland Garros de 1989 (simples masculino)",
      "descricao": "Torneio de simples masculino do Aberto da França de 1989, vencido por Michael Chang."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em Roland Garros 1989, um americano de dezessete anos, com cãibras, sacou por baixo contra Ivan Lendl e acabou campeão. Quem era ele?",
    "resposta": "Michael Chang",
    "fonte": [
      "https://en.wikipedia.org/wiki/Michael_Chang",
      "https://en.wikipedia.org/wiki/1989_French_Open_%E2%80%93_Men%27s_singles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michael_Chang",
        "situacao": "ok",
        "texto": "Michael Te-pei Chang (born February 22, 1972) is an American former professional tennis player and coach. He was ranked world No. 2 by the Association of Tennis Professionals (ATP) in 1996. Chang is the youngest man in history to win a singles major, winning the 1989 French Open at 17 years and 109 days old. He is the first tennis player of Asian descent, male or female, to win a Grand Slam single\n[…]\nChang's 1989 French Open tournament performance is equally remembered for overcoming significant cramps during an epic fourth-round encounter with Ivan Lendl, who was then the world's No. 1-ranked player, reigning Australian Open champion, and a three-time former French Open champion.\n[…]\nChang subsequently defeated Ronald Agénor in the quarter-final and Andrei Chesnokov in the semi-final. Then seven days after his match against Lendl, after beating Stefan Edberg in five sets, Chang went on to lift the Coupe des Mousquetaires, becoming the youngest Grand Slam men's singles champion history. Chang became the first American man to win the French Open since Tony Trabert in 1955, and the first American man to win a Grand Slam since 1984.\n[…]\nChang's match against Lendl was played on June 5, 1989, just one day after the height of the Tiananmen Square Massacre. Chang has frequently noted the impact of the massacre when recalling his French Open victory:\n[…]\nIn the 1995 French Open, he defeated Michael Stich and then two-time defending champion Sergi Bruguera in the semifinals in straight sets, eventually losing to Muster. In both the 1996 Australian and U.S. Opens, he defeated Andre Agassi in the semifinals in straight sets; a win over Sampras at the U.S. Open would have made Chang the no. 1 player in the world. In the 1997 U.S.\n[…]\nMichael Chang at Olympedia\n[…]\nMichael Chang at Olympics.com\n[…]\nbio – file interview with Michael Chang\n[…]\nText and Audio of Michael Chang's Tennis Hall of Fame Induction Speech"
      },
      {
        "url": "https://en.wikipedia.org/wiki/1989_French_Open_%E2%80%93_Men%27s_singles",
        "situacao": "ok",
        "texto": "Michael Chang defeated Stefan Edberg in the final, 6–1, 3–6, 4–6, 6–4, 6–2 to win the men's singles tennis title at the 1989 French Open. It was his first and only major title. Chang became the youngest-ever men's singles major champion, winning the final at the age of 17 years, 109 days, and the first player (male or female) of Asian descent to win a major. En route to the title, he defeated the \n[…]\n1 and three-time champion Ivan Lendl, which is remembered as one of the most significant matches in French Open history.\n[…]\nThis tournament marked the first major and French Open appearances of future two-time French Open champions Sergi Bruguera and Jim Courier, respectively.\n[…]\nAssociation of Tennis Professionals (ATP) – 1989 French Open Men's Singles draw\n[…]\n1989 French Open – Men's draws and results at the International Tennis Federation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Michael_Chang",
        "situacao": "ok",
        "texto": "Michael Te-pei Chang(張德培, 22 de fevereiro de 1972, Hoboken, Nova Jérsei) é um ex-tenista profissional estadunidense de ascendência chinesa. Seu pai, Joe Chang, foi para os Estados Unidos para cursar pós-graduação no Stevens Institute of Technology, em Hoboken.\n[…]\nChang foi campeão de Roland-Garros em 1989 e vice em 1995. Em outros torneios de Grand Slam, foi vice do Aberto da Austrália e do US Open.\n[…]\nÉ tricampeão de Indian Wells Masters. Bicampeão do Cincinnati Masters. Campeão do Miami Masters e do Canada Masters.\n[…]\nParticipou dos Jogos Olímpicos de 1992, onde foi derrotado na segunda rodada de simples pelo brasileiro Jaime Oncins, e em 2000 onde foi eliminado na primeira rodada de simples.\n[…]\nNa competição por equipes, Chang foi um membro importante dos Estados Unidos, que venceu a Austrália por 3 a 2 na Copa Davis de 1990.\n[…]\nAtualmente, Chang é técnico do tenista Kei Nishikori.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Wimbledon de 2001 (simples masculino)",
      "descricao": "Torneio de simples masculino de Wimbledon em 2001, vencido por um tenista convidado."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 2001, que croata, então fora dos cem primeiros do ranking, venceu Wimbledon depois de entrar no torneio por convite?",
    "resposta": "Goran Ivanišević",
    "fonte": [
      "https://en.wikipedia.org/wiki/Goran_Ivani%C5%A1evi%C4%87",
      "https://en.wikipedia.org/wiki/2001_Wimbledon_Championships_%E2%80%93_Men%27s_singles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Goran_Ivani%C5%A1evi%C4%87",
        "situacao": "ok",
        "texto": "Goran Ivanišević (Croatian pronunciation: ['ɡǒran ˌiʋa'nǐːʃeʋitɕ]; born 13 September 1971) is a Croatian former professional tennis player and current coach. He was ranked world No. 2 in men's singles by the Association of Tennis Professionals (ATP) in July 1994. Ivanišević won 22 ATP Tour-level singles titles, including the 2001 Wimbledon Championships. He is the only singles player to win Wimble\n[…]\nGoran is the son of Gorana (née Škaričić) and Srđan Ivanišević. As a boy, he was trained by Jelena Genčić. He turned professional in 1988 and, later that year, with Rüdiger Haas, won his first career doubles title in Frankfurt. Although he focused mostly on his singles career, he also had some success in doubles, winning nine titles and reaching a career-high ranking of 20.\n[…]\nIvanišević reached the Wimbledon final for the second time in 1994, where he was defeated by defending-champion Pete Sampras in straight sets. Ivanišević reached his career-high singles ranking of world No. 2 in July that year.\n[…]\nRight after retiring from the ATP Tour in 2004, Ivanišević started playing on the ATP Champions Tour (seniors' circuit).\n[…]\nOn 30 June 2019, Novak Djokovic confirmed that he had added Ivanišević to his coaching team. Working alongside Djokovic's existing coach Marian Vajda, Ivanišević's first order of business was the 2019 Wimbledon. However, due to a previously agreed commitment—exhibition match versus Goran Prpić ahead of the 2019 Croatia Open in Umag—he could be with Djokovic at Wimbledon for only the first week of the tournament, thus missing Djokovic's epic final win versus Roger Federer.\n[…]\nWimbledon 2001 Final: Rafter Vs Ivanišević Standing Room Only, DVD Release Date: 30 October 2007, Run Time: 195 minutes, ASIN: B000V02CT6.\n[…]\nGoran Ivanišević at the Association of Tennis Professionals\n[…]\nGoran Ivanišević at World Tennis\n[…]\nGoran Ivanišević at the Davis Cup (archived)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/2001_Wimbledon_Championships_%E2%80%93_Men%27s_singles",
        "situacao": "ok",
        "texto": "Goran Ivanišević defeated Patrick Rafter in the final, 6–3, 3–6, 6–3, 2–6, 9–7 to win the gentlemen's singles tennis title at the 2001 Wimbledon Championships. It was his only major title, following three runner-up finishes (all at Wimbledon in 1992, 1994, and 1998). Ivanišević was the first unseeded player to win the title since Boris Becker in 1985, and the first and only wild card to win a men'\n[…]\n125 to world No. 16. The final was held on the third Monday of the event in front of a boisterous crowd, after Ivanišević's semifinal against Tim Henman took three days to complete due to rain.\n[…]\nPete Sampras was the four-time defending champion, but lost in the fourth round to Roger Federer. The Sampras–Federer match was the pair's only professional meeting, with Federer being 19 years old and the soon-to-be 30 year old Sampras retiring from the sport the following year. This was the first major in which Federer was seeded.\n[…]\nSampras was attempting to equal Björn Borg's record of five consecutive Wimbledon titles (which Federer would himself achieve in 2007) and to win a record-breaking eighth men's singles Wimbledon title (which Federer would achieve in 2017).\n[…]\nThis was the year when Wimbledon expanded from 16 to 32 seeds.\n[…]\nSource for the draw at Wimbledon.com\n[…]\n\"Wimbledon 2001 – Singles Draw\". atpworldtour.com. ATP World Tour. Retrieved 14 May 2018.\n[…]\n2001 Wimbledon Championships – Men's draws and results at the International Tennis Federation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Goran_Ivani%C5%A1evi%C4%87",
        "situacao": "ok",
        "texto": "Goran Šimun Ivanišević (Split, 13 de setembro de 1971) é um ex-tenista croata, que durante sua carreira profissional conquistou 22 títulos em simples e 9 em duplas pelo circuito ATP e ganhou quase U$ 20 milhões em premiação. Atualmente, desde o ATP de Doha de 2026, é treinador de Arthur Fils.\n[…]\nEm julho de 1994, Goran Ivanišević alcançou o melhor ranking de simples da carreira, quando chegou a ser número 2 do ranking mundial masculino.\n[…]\nO croata Goran Ivanišević teve como grande conquista na carreira o título do Grand Slam de Wimbledon em 2001. E essa conquista foi histórica, pois após sofrer com lesões no ombro nos anos de 1999, 2000 e início de 2001, seu ranking caiu muito e quando chegou o Torneio de Wimbledon de 2001 ele era apenas o 125° colocado do ranking mundial. Por isso fazia-se necessário um convite da organização para que ele pudesse participar. E foi exatamente isso o que aconteceu.\n[…]\nAlém do título do Grand Slam de Wimbledon em 2001, Goran Ivanisevic foi por três vezes vice-campeão do torneio. Na primeira final perdeu para André Agassi no 5° set, em 1992. Dois anos mais tarde enfrentou outro norte-americano na final, dessa vez Pete Sampras, e foi derrotado em três sets. Em 1998 ele voltou à quadra central de Wimbledon para enfrentar Pete Sampras novamente em uma final. O jogo foi decidido no 5° set e mais uma vez em favor do norte-americano.\n[…]\nEm 1996, chegou a semifinal em simples do Grand Slam do U.S. Open.\n[…]\nO croata Goran Ivanisevic é lembrado entre outras coisas, por ter sido um dos melhores sacadores da história do tênis.\n[…]\nGoran Ivanisevic atingiu a contagem de 10.183 aces na carreira. Com esse feito, ele se tornou no primeiro tenista a conseguir a façanha de conseguir mais de 10.000 aces desde 1991, quando começaram a ser feitos tais registros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "US Open de 2021 (simples feminino)",
      "descricao": "Torneio de simples feminino do US Open de 2021, vencido por uma tenista vinda do qualifying."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 2021, qual britânica de dezoito anos venceu o US Open vinda do qualifying, sem perder nenhum set?",
    "resposta": "Emma Raducanu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Emma_Raducanu",
      "https://en.wikipedia.org/wiki/2021_US_Open_%E2%80%93_Women%27s_singles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Emma_Raducanu",
        "situacao": "ok",
        "texto": "Emma Raducanu (born 13 November 2002) is a British professional tennis player. She has reached a career-high singles ranking of world No. 10, achieved in July 2022. She is the current British No. 2 in women's singles.\n[…]\nRaducanu was the 2021 US Open champion, becoming the first British woman to win a singles major since Virginia Wade at the 1977 Wimbledon Championships. With that victory, she became the first qualifier in the Open Era to win a singles major title, achieved without dropping a set during the tournament. It was the second major of her career, and she holds the Open-Era record for the fewest majors played before winning a title.\n[…]\nRaducanu defeated Leylah Fernandez in two sets, winning with a 109-mph ace, in what was the first all-teenage women's singles final since the 1999 US Open. She won the title without dropping a set, the first woman to do so at the US Open since Williams in 2014. Raducanu was the first qualifier (male or female) to win a Grand Slam tournament in the Open Era. As a result of her US Open victory, Raducanu rose to No. 23 in the rankings, a jump of 332 places from the start of the year.\n[…]\nIn March, Raducanu lost in the first round at Indian Wells to Moyuka Uchijima. At the Miami Open, she overcame wildcard entrant Sayaka Ishii in her opening match to record her first career win at the tournament. Raducanu then defeated eighth seed Emma Navarro, McCartney Kessler and 17th seed Amanda Anisimova to reach the quarterfinals of a WTA 1000 event for the first time. She lost in the last eight to fourth seed Jessica Pegula, in three sets.\n[…]\nEmma Raducanu at the Women's Tennis Association\n[…]\nEmma Raducanu at the Billie Jean King Cup (archived former page)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/2021_US_Open_%E2%80%93_Women%27s_singles",
        "situacao": "ok",
        "texto": "Emma Raducanu defeated Leylah Fernandez in the final, 6–4, 6–3 to win the women's singles tennis title at the 2021 US Open. It was her first major title. Raducanu became the first qualifier to win a major. She was the first British woman to win a singles major since Virginia Wade at the 1977 Wimbledon Championships, and the second player to win the US Open on her tournament debut (after Bianca And\n[…]\nAged 18, Raducanu was the youngest major champion since Maria Sharapova at the 2004 Wimbledon Championships, and with a ranking of world No. 150, the lowest-ranked player to win a major since Kim Clijsters at the 2009 US Open. She did not lose a set during the tournament, including during her three qualification matches, and was not taken to a tiebreak in any set, and the total number of games won by her opponents in the main draw was only 34, an average of less than 2.5 games per set.\n[…]\nIt was her first WTA Tour-level singles title, making her the fourth woman in the Open Era to win a major as her first singles title. Raducanu won the title on only her second major main-draw appearance, an Open Era record.\n[…]\nThe final marked the first all-teenage major final since Serena Williams defeated Martina Hingis at the 1999 US Open, and the first women's singles major final in the Open Era to feature two unseeded players. Raducanu and Fernandez both made their top 30 debuts following the tournament. Fernandez was the youngest player to defeat three top-five seeded players in the same major since Williams at the 1999 US Open. She was the first player of Southeast Asian descent (Filipino) to reach the final.\n[…]\n† The player did not qualify for the tournament in 2019 or 2020. Accordingly, points for her 16th best result are deducted instead.\n[…]\n‡ – withdrew from entry list before qualifying began\n[…]\n† – withdrew from entry list after qualifying began\n[…]\n2021 US Open – Day-by-day summaries"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Emma_Raducanu",
        "situacao": "ok",
        "texto": "Emma Raducanu (Toronto, 13 de novembro de 2002) é uma tenista profissional britânica, nascida no Canadá.\n[…]\nRaducanu nasceu em Toronto e cresceu em Londres. Ela fez sua estreia no WTA Tour em junho de 2021. Com uma entrada por \"wild card\" em Wimbledon, classificada fora do top 300, ela alcançou a quarta rodada em seu primeiro grande torneio. No US Open de 2021, Raducanu se tornou a primeira vinda da qualificatória de simples na \"Era Aberta\" a ganhar um título de Grand Slam, derrotando a canadense Leylah Fernandez na final em 11 de setembro, aos 18 anos, sem perder nenhum set no torneio.\n[…]\nEm seu caminho para o título, ela avançou para as semifinais sem perder um set e se tornou a quinta jogadora na \"Era Aberta\" a chegar a uma semifinal de Grand Slam vinda da eliminatória. Ao avançar para a final do US Open, Raducanu entrou no top 25 e se tornou a nº 1 britânica. Ela se tornou a quinta jogadora na \"Era Aberta\" a chegar à semifinal em sua estreia no US Open, e a primeira mulher britânica a chegar à final do US Open desde Virginia Wade em 1968.\n[…]\nRaducanu derrotou Leylah Fernandez em dois sets, vencendo com um ace de 109 mp/h (170,59 km/h), naquela que foi a primeira final de simples feminina entre duas \"juvenis\" (ambas completaram 19 anos naquele ano) desde o US Open de 1999. Ela ganhou o título sem perder um set, a primeira mulher a fazê-lo no US Open desde Williams em 2014. Raducanu foi a primeira vinda da qualificatória (masculina ou feminina) a vencer um torneio de Grand Slam na \"Era Aberta\".\n[…]\nEmma Raducanu Indian Wells Interview - Emma Raducanu no YouTube, vídeo (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Ranking da ATP",
      "descricao": "Classificação oficial dos tenistas profissionais masculinos, publicada pela ATP desde 1973."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1973, quando a ATP publicou seu primeiro ranking computadorizado, quem apareceu como número um?",
    "resposta": "Ilie Năstase",
    "distratores": [
      "Jimmy Connors",
      "Björn Borg",
      "John Newcombe"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/ATP_rankings",
      "https://en.wikipedia.org/wiki/Ilie_N%C4%83stase"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/ATP_rankings",
        "situacao": "ok",
        "texto": "The PIF ATP Rankings (previously known as the Pepperstone ATP Rankings) are the merit-based method used by the Association of Tennis Professionals (ATP) for determining the qualification for entry as well as the seeding of players in all singles and doubles tournaments. The first rankings for singles were published on 23 August 1973 while the doubles players were ranked for the first time on 1 Mar\n[…]\nof Jack Kramer, Cliff Drysdale, and Donald Dell, and rose to prominence when 81 of its members boycotted the 1973 Wimbledon Championships. Just two months later, in August, the ATP introduced its ranking system intended to objectify tournament entry criteria, which up to that point were controlled by national federations and tournament directors.\n[…]\nThe ATP's new ranking system was quickly adopted by men's tennis. While virtually all ATP members were in favor of objectifying event participation, the system's first No. 1, Ilie Năstase, lamented that \"everyone had a number hanging over them\", fostering a more competitive and less collegial atmosphere among the players.\n[…]\nThis 'best of' system originally used 14 events but expanded to 18 in 2000. The computer that calculates the rankings is nicknamed \"Blinky\".\n[…]\nRanking points are awarded as follows:\n[…]\nSince a new team competition United Cup was introduced, its participants are also eligible to receive ATP ranking points for won matches (up to 500 points for the entire tournament). Since 2024, the point distribution is as follows:\n[…]\nThe following is a list of players who were ranked world No. 5 or higher but not No. 1 since the 1973 introduction of the ATP rankings (active players in bold).\n[…]\nThe following is a list of players who were ranked world No. 6 to No. 10 since the 1973 introduction of the ATP rankings (active players in bold).\n[…]\n★ indicates player's highest year-end ranking\n[…]\nWTA rankings\n[…]\nCurrent tennis rankings\n[…]\nATP rankings"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ilie_N%C4%83stase",
        "situacao": "ok",
        "texto": "Ilie Theodoriu Năstase (Romanian: [iˈli.e nəsˈtase] ; born 19 July 1946) is a Romanian former professional tennis player. He was ranked as the inaugural world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for 40 weeks. Năstase is one of ten players to have won over 100 total ATP-level titles, with 64 in singles and 45 in doubles,  among which seven majors: two in singles,\n[…]\nNăstase never has commented publicly on this speculation.\n[…]\nNăstase was screaming at the umpire and directing obscenities at the crowd. Pohmann had two match points but Năstase won and then screamed at Pohmann as the two approached the net. The umpire refused to shake Năstase's hand as Ilie continued raving. Many thought Năstase should have been disqualified. Later, Năstase claimed the match should have been forfeited to him when Pohmann was unable to continue play immediately (he and Pohmann had to be separated in the clubhouse after the match).\n[…]\nIlie Năstase was known for his speed and shot variety, including effective lobs and defensive retrievals. He used spin to place shots in difficult positions for opponents. Contemporary accounts also note that his on-court behavior could be inconsistent, with fluctuations in composure and temperament affecting performance at times.\n[…]\nIlie Năstase is a sport romanian personality. His mother was born în Căinari (present-day Moldova), and his parents lived in Soroca before the Soviet occupation of Bessarabia and Northern Bukovina. His grandfather was deported in Siberia by the Soviet authorities.\n[…]\nEvans, Richard (1979). Nasty: Ilie Nastase vs. Tennis. New York: Stein and Day. ISBN 978-0-8128-2540-4. OCLC 4055917.\n[…]\nIlie Năstase at IMDb\n[…]\nIlie Năstase at the International Tennis Hall of Fame\n[…]\nIlie Năstase at the Association of Tennis Professionals\n[…]\nIlie Năstase at World Tennis\n[…]\nIlie Năstase at the Davis Cup (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rankings_da_ATP",
        "situacao": "ok",
        "texto": "Rankings da ATP são rankings organizados pela ATP que classifica os melhores jogadores de tênis em simples e em duplas.\n[…]\nEles são o método baseado em mérito usado pela ATP para determinar a qualificação para entrada em torneios, bem como a distribuição de jogadores em todos os torneios de simples e duplas. Os primeiros rankings de simples foram publicadas em 23 de agosto de 1973, enquanto os de duplas foram publicados pela primeira vez em 1º de março de 1976.\n[…]\nA ATP começou como um sindicato masculino em 1972, através dos esforços combinados de Jack Kramer, Cliff Drysdale e Donald Dell [en], e ganhou destaque quando 81 de seus membros boicotaram o  Torneio de Wimbledon de 1973. Apenas dois meses depois, em agosto, o ATP introduziu seu sistema de classificação destinado a tornar objetivos os critérios de entrada nos torneios, que até então eram controlados por federações nacionais e diretores de torneios.\n[…]\nO novo sistema de classificação da ATP foi rapidamente adotado pelo tênis masculino. Embora praticamente todos os membros do ATP fossem a favor de objetivar a participação em eventos, o primeiro número 1 do sistema, Ilie Năstase, lamentou que \"todos tivessem um número pairando sobre eles\", promovendo uma atmosfera mais competitiva e menos colegial entre os jogadores.\n[…]\nEste sistema 'best of' originalmente usava 14 eventos, mas expandiu para 18 em 2000. O computador que calcula as classificações é apelidado de \"Blinky\".\n[…]\nRankings da WTA\n[…]\nTenistas Número 1 no ranking ATP\n[…]\nATP World Tour site acessado em 12 de setembro de 2011 (Ranking Masculino)\n[…]\nWTA site acessado em 12 de setembro de 2011 (Ranking Feminino)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Grand Slam (tênis)",
      "descricao": "Conjunto dos quatro maiores torneios do tênis, e também o feito de vencer os quatro no mesmo ano."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1938, quem se tornou o primeiro tenista a vencer os quatro torneios de Grand Slam no mesmo ano?",
    "resposta": "Don Budge",
    "distratores": [
      "Fred Perry",
      "Bill Tilden",
      "Rod Laver"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Don_Budge",
      "https://en.wikipedia.org/wiki/Grand_Slam_(tennis)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Don_Budge",
        "situacao": "ok",
        "texto": "John Donald Budge (June 13, 1915 – January 26, 2000) was an American tennis player. He is most famous as the first tennis player—male or female—to win all four Grand Slam tournaments in one year and complete the Grand Slam. Budge was the second man to complete the career Grand Slam, after Fred Perry. He won ten majors, of which six were Grand Slam events (consecutively, a men's record) and four Pr\n[…]\n1938\n[…]\nIn 1938, Budge dominated amateur tennis defeating John Bromwich in the Australian final, Roderick Menzel in the French final, Henry \"Bunny\" Austin at Wimbledon, where he never lost a set (he also won the doubles and mixed doubles), and Gene Mako in the U.S. Championships final (winning doubles and mixed doubles too), to become the first person to win the Grand Slam in tennis.\n[…]\nHe was the youngest man in history to complete the \"Career Grand Slam\" (the four majors in one's career) and \"Full Grand Slam\" (four majors held at one time (in row)). He completed that on June 11, 1938, in winning the French singles, two days before his 23rd birthday. His record stood till 2026 when Carlos Alcaraz became the youngest. Budge beat Ladislav Hecht in the final of the Czech championships in Prague in July.\n[…]\nBudge turned professional in October 1938 after winning the Grand Slam, and thereafter played mostly head-to-head matches. In 1939, he beat the two reigning kings of professional tennis, Ellsworth Vines, 22 matches to 17, and Fred Perry, 28 matches to 8. That year, he also won two major pro tournaments, the French Pro Championship over Vines and the Wembley Pro tournament over Hans Nüsslein.\n[…]\nDon Budge joined professional tennis in 1939 and was unable to compete in the Grand Slam tournaments.\n[…]\nSingles (1934–1938) : 26 titles\n[…]\nDon Budge at the Association of Tennis Professionals\n[…]\nDon Budge at World Tennis\n[…]\nDon Budge at the Davis Cup (archived)\n[…]\nDon Budge at the International Tennis Hall of Fame"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Grand_Slam_(tennis)",
        "situacao": "ok",
        "texto": "The Grand Slam in tennis is the achievement of winning all four major championships in one discipline in a calendar year. In doubles, a Grand Slam may be achieved as a team or as an individual with different partners. Winning all four major championships consecutively but not within the same calendar year is referred to as a \"non-calendar-year Grand Slam\", while winning the four majors at any poin\n[…]\nIn golf it was used for the first time to describe a total of four wins, specifically Bobby Jones' achievement of winning the four major golf tournaments of the era, which he accomplished in 1930. \"Grand Slam\" or \"Slam\" has since also become used to refer to the tournaments individually. The first player to win all four majors in a calendar year and thus complete a Grand Slam was Don Budge in 1938.\n[…]\nThe career achievement of winning all four major championships in one discipline is termed a \"Career Grand Slam\", or \"Career Slam\". In singles, nine men (Fred Perry, Don Budge, Roy Emerson, Rod Laver, Andre Agassi, Roger Federer, Rafael Nadal, Novak Djokovic, and Carlos Alcaraz) and ten women (Maureen Connolly, Doris Hart, Shirley Fry Irvin, Margaret Court, Billie Jean King, Chris Evert, Martina Navratilova, Steffi Graf, Serena Williams, and Maria Sharapova) have completed a Career Grand Slam.\n[…]\nA player who won all three in a calendar year was considered retrospectively to have achieved a \"Professional Grand Slam\", or \"Pro Slam\". In the pre-open era the terms did not exist. The feat was accomplished by Ken Rosewall in 1963 and Rod Laver in 1967, while Ellsworth Vines, Hans Nüsslein and Don Budge have won the three major trophies during their careers. The professional majors did not have a women's draw except for the Cleveland tournament in 1953, 1955, 1956, 1959.\n[…]\nList of Grand Slam and related tennis records\n[…]\nGrand Slam (golf)\n[…]\nAll-time Grand Slam tournament winners – Reference book"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Don_Budge",
        "situacao": "ok",
        "texto": "John Donald Budge (13 de junho de 1915, Oakland - 26 de janeiro de 2000, Scranton) foi um jogador de tênis que se tornou famoso por ter sido o primeiro homem a ganhar em um único ano os quatro torneios que compõem o Grand Slam.\n[…]\nBudge entrou para o International Tennis Hall of Fame em 1964.\n[…]\nEm 2014, Budge foi um dos tenistas presentes na lista \"Os 10 tenistas que transformaram a forma como o tênis é jogado\", elaborada pela Revista Tênis. Segundo a revista, \"mesmo batendo com apenas uma mão (comum para a época), ele conseguia imprimir uma enorme potência, mas, mais do que isso, topspin. Apesar de outros tenistas antes dele já utilizarem o topspin, foi Budge quem aprimorou a técnica com seu backhand\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Tênis em cadeira de rodas",
      "descricao": "Modalidade de tênis adaptada para usuários de cadeira de rodas, em que a bola pode quicar duas vezes."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Nos anos setenta, que americano, paraplégico depois de um acidente de esqui, criou o tênis em cadeira de rodas?",
    "resposta": "Brad Parks",
    "distratores": [
      "Ludwig Guttmann",
      "Shingo Kunieda",
      "Esther Vergeer"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wheelchair_tennis",
      "https://en.wikipedia.org/wiki/Brad_Parks"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wheelchair_tennis",
        "situacao": "ok",
        "texto": "Wheelchair tennis is one of the forms of tennis adapted for wheelchair users. The size of the court, net height and rackets are the same, but there are two major differences from pedestrian tennis: athletes use specially designed wheelchairs, and the ball may bounce up to two times, where the second bounce may also occur outside the court.\n[…]\nWheelchair tennis increased in popularity in 1976 due to the efforts of Brad Parks, who is seen as the creator of competitive wheelchair tennis. In 1982, France became the first country in Europe to put a wheelchair tennis program in place. Since then, much effort has been made to promote the sport at the elite level.\n[…]\nThe ITF BNP Paribas World Team Cup is a wheelchair tennis tournament for national teams, held annually since 1985. The BNP Paribas World Team Cup World Group event is played once a year, for 4 category men, women, quads and boys juniors. There are four continental qualification events in Europe, Africa, Asia and Americas, in which men and women compete to qualify for the main event supported by the Cruyff Foundation.\n[…]\nWheelchair tennis is played at the Paralympic Games and FESPIC Games as well.\n[…]\nITF Wheelchair Tennis Tour\n[…]\nWheelchair Tennis Masters\n[…]\nList of wheelchair tennis champions\n[…]\nWheelchair tennis at the Summer Paralympics\n[…]\nWheelchair tennis classification\n[…]\nAdaptive Standing Tennis\n[…]\nITF BNP Paribas World Team Cup (Wheelchair Tennis)\n[…]\nITF Beach Tennis Tour\n[…]\nWheelchair tennis at the International Paralympic Committee\n[…]\nWheelchair tennis at the International Tennis Federation\n[…]\nUnited States Tennis Association: Wheelchair tennis\n[…]\nTennis Foundation (Great Britain): Wheelchair tennis at the Wayback Machine (archived 30 January 2012)\n[…]\nA guide to wheelchair tennis | ITF"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brad_Parks",
        "situacao": "desambiguacao",
        "texto": "Brad Parks may refer to:\n\nBrad Parks (author)\nBrad Parks (tennis)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/T%C3%AAnis_em_cadeira_de_rodas",
        "situacao": "ok",
        "texto": "O tênis em cadeira de rodas é um esporte paraolímpico praticado por cadeirantes cuja deficiência seja a perda dos membros ou a incapacidade de utilizá-los para locomoção. Utiliza as mesmas quadras do tênis convencional utilizando as mesmas regras com pequenas adaptações .\n[…]\nA maior diferença da regra adotada neste esporte é a que a bola pode quicar duas vezes antes de ser rebatida, podendo o segundo quique ocorrer fora das linhas da quadra. A mesma regra é válida para os saques, que podem ser realizados por outra pessoa se a deficiência do jogador impeça a realização deste. Durante o jogo o jogador não pode deixar o assento de sua cadeira de rodas, sendo ela considerada parte do corpo do jogador .\n[…]\nO esporte foi criado por Jeff Minnenbraker e Brad Parks nos Estados Unidos em 1976 , sendo o primeiro campeonato organizado no ano seguinte. Em 1981 foi fundada a WTPA (Wheelchair Tennis Player Association) para regular o novo esporte. Ainda em 1981, foi incluído nas Paraolimpíadas de Seul em caráter de exibição. Em 1982, a França tornou-se o primeiro país europeu a implementar um programa de tênis em cadeira de rodas .\n[…]\nApós isso, muitos esforços têm sido envidados para promover o esporte em alta performance. O tênis em cadeira de rodas passou a valer medalhas nas paraolimpíadas de verão de Barcelona em 1992.\n[…]\nO circuito de tênis em cadeira de rodas da ITF consiste em torneios internacionais em diferentes níveis e premiações. O montante total da premiação do circuito em 2016 foi de aproximadamente 12 milhões de reais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Tênis nos Jogos Olímpicos de 1900",
      "descricao": "Torneios de tênis disputados nos Jogos Olímpicos de Paris, em 1900, os primeiros com participação feminina."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Nos Jogos de Paris, em 1900, qual britânica venceu o tênis e se tornou a primeira campeã olímpica individual da história?",
    "resposta": "Charlotte Cooper",
    "distratores": [
      "Suzanne Lenglen",
      "Lottie Dod",
      "Maud Watson"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Charlotte_Cooper_(tennis)",
      "https://en.wikipedia.org/wiki/Tennis_at_the_1900_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charlotte_Cooper_(tennis)",
        "situacao": "ok",
        "texto": "Charlotte \"Chattie\" Reinagle Cooper Sterry (née Cooper; 22 September 1870 – 10 October 1966) was an English female tennis player who won five singles titles at the Wimbledon Championships and in 1900 became Olympic champion. In winning in Paris on 11 July 1900, she became the first female Olympic tennis champion as well as the first individual female Olympic champion.\n[…]\nCharlotte Cooper was born on 22 September 1870 at Waldham Lodge, Ealing, Middlesex, England, the youngest daughter of Henry Cooper, a miller, and his wife Teresa Georgiana Miller. She learned to play tennis at the Ealing Lawn Tennis Club where she was first coached by H. Lawrence and later by Charles Martin and Harold Mahony. She won her first senior singles title in 1893 at Ilkley. Between 1893 and 1917 she participated in 21 Wimbledon tournaments.\n[…]\nShe won the singles title at the Irish Lawn Tennis Championships in 1895 and 1898, a prestigious tournament at the time. At the 1900 Summer Olympics, where women participated for the first time, Cooper Sterry won the tennis singles event. On 11 July 1900 she defeated Hélène Prévost in the final in straight sets and became the first female Olympic tennis champion as well as the first individual female Olympic champion.\n[…]\nCooper Sterry, who had been deaf since the age of 26, died on 10 October 1966 at the age of 96, in Helensburgh, Scotland.\n[…]\nShe was inducted into the International Tennis Hall of Fame in 2013.\n[…]\nCooper Sterry had an offensive style of playing, attacking the net when the opportunity arose. She was one of a few female players of her time who served overhead. Her main strengths were her steadiness, temperament and tactical ability. Her excellent volleying skills stood out at a time when this was still a rarity in ladies tennis.\n[…]\nCharlotte Cooper at World Tennis"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tennis_at_the_1900_Summer_Olympics",
        "situacao": "ok",
        "texto": "Four tennis events were contested at the 1900 Summer Olympics in Paris, France. These were played at the Cercle des Sports de l'Île de Puteaux. All four events were won by British players. 26 tennis players from 4 nations competed, with over half from the host nation of France.\n[…]\nThe field was small but of high quality, particularly with the top British players present. The Doherty brothers, Reginald and Laurence, were the premier players; they won the men's doubles together, Laurence won the men's singles (after Reginald withdrew rather than play his brother in the semifinals), and Reginald partnered with Charlotte Cooper to take gold in the mixed doubles.\n[…]\nA total of 26 players from 4 nations competed at the Paris Games:\n[…]\nIn addition to the four events recognized as Olympic competitions, there were other tennis events conducted at the l'Île de Puteaux club during the week of the Olympic events. These included handicap events and a professional round-robin men's singles tournament.\n[…]\nInternational Olympic Committee medal winners database\n[…]\nDe Wael, Herman. Herman's Full Olympians: \"Tennis 1900\". Accessed 10 March 2006. Available electronically at [1].\n[…]\nMallon, Bill (1998). The 1900 Olympic Games, Results for All Competitors in All Events, with Commentary. Jefferson, North Carolina: McFarland & Company, Inc., Publishers. ISBN 0-7864-0378-0.\n[…]\nITF, 2008 Olympic Tennis Event Media Guide"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Charlotte_Cooper",
        "situacao": "ok",
        "texto": "Charlotte Reinagle Cooper (Ealing, 22 de setembro de 1870 – Helensburgh,  10 de outubro de 1966) foi uma tenista britânica e a primeira mulher a ganhar uma medalha de ouro olímpica.\n[…]\nCharlotte foi uma das primeiras tenistas a usar o voleio, técnica que a ajudou a conquistar o primeiro torneio de simples de Wimbledon em 1895. Ela costumava ir de bicicleta da casa de seus pais em Surret até Wimbledon, onde viria a conquistar o título em 1895, 1896, 1898, 1901 e 1908.\n[…]\n\"Chattie\", como era apelidada, tornou-se a primeira mulher a conquistar uma medalha de ouro olímpica. Ela venceu o torneio de simples nos Jogos Olímpicos de Verão de 1900 em Paris, na França, quando foi permitida a participação feminina nos Jogos pela primeira vez. Copper ainda conquistou o torneio de duplas mistas ao lado de Reginald Doherty.\n[…]\nSua maior rival era Blanch Hillyard, tenista que a derrotou em três torneios de Wimbledon. Cooper finalmente superou a rival na final de 1901. Em 1902 fez uma das mais estranhas finais desse torneio, quando enfrentou Muriel Robb. Depois de interrompida com o placar de 1 set a 1 - Cooper ganhou o primeiro, 6-4 e Muriel o segundo, 13-11 - a partida foi recomeçada no dia seguinte, quando Robb venceu por 7-5, 6-1.\n[…]\nCharlotte Cooper morreu em 1966 aos 96 anos de idade.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Rivais (filme)",
      "descricao": "Filme americano de 2024 estrelado por Zendaya, sobre um triângulo amoroso entre três tenistas."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que diretor italiano fez Rivais, filme de 2024 em que Zendaya vive uma ex-tenista disputada por dois jogadores?",
    "resposta": "Luca Guadagnino",
    "fonte": [
      "https://en.wikipedia.org/wiki/Challengers_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Challengers_(film)",
        "situacao": "ok",
        "texto": "Challengers is a 2024 romantic sports film directed by Luca Guadagnino and written by Justin Kuritzkes. It follows the love triangle between an injured tennis star-turned-coach (Zendaya), her low-circuit tennis player ex-boyfriend (Josh O'Connor), and her tennis champion husband (Mike Faist) across 13 years of their relationship, culminating in the match between the two men on the ATP Challenger T\n[…]\nThe script landed on The Black List, an annual list of the best unproduced scripts in Hollywood, in December 2021. That same year, producing partners Amy Pascal and Rachel O'Connor read the script. Pascal had been wanting to work with director Luca Guadagnino for a long time, and sent him the script while he was filming the short film O Night Divine starring John C. Reilly.\n[…]\nAt the behest of Guadagnino, Kuritzkes modified the script to add a scene where Patrick and Art end up kissing each other: \"Luca felt it was very important that, in any love triangle, all the corners touch, and I quickly realized he meant it literally.\"\n[…]\nIn early 2022, MGM's then-chairman Kevin Ulrich met with Guadagnino to discuss distributing the independently financed Bones and All. During the meeting, Guadagnino told Ulrich he was also in the midst of developing a \"sexy tennis story starring Zendaya\". Ulrich contacted Michael De Luca and Pamela Abdy, the then-heads of MGM, and they negotiated a two-picture deal over the next 24 hours to pick up both films.\n[…]\nGuadagnino visited Zendaya on the set of Dune: Part Two to complete ADR for Challengers. Trent Reznor and Atticus Ross composed the film's score, having previously worked with Guadagnino on 2022's Bones and All. Guadagnino approached them to score Challengers by sending them an email that read, \"Do you want to be on my next film? It's going to be super sexxy [sic].\" Post-production was completed by April 2023.\n[…]\nChallengers at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Challengers",
        "situacao": "ok",
        "texto": "Challengers (bra: Rivais; prt: Challengers) é um filme estadunidense de 2024, dos gêneros comédia esportiva e drama romântico, dirigido por Luca Guadagnino, e estrelado por Zendaya, Josh O'Connor e Mike Faist. Com um roteiro de Justin Kuritzkes, a trama retrata a história de uma treinadora e ex-prodígio de tênis, cuja estratégia para ajudar o marido tenista toma um rumo inesperado quando ele preci\n[…]\nEm 2022, durante uma entrevista para o Collider, Guadagnino citou o roteiro de Kuritzkes, Amy Pascal e Zendaya como as inspirações para a realização do filme. Kuritzkes modificou o roteiro para adicionar uma cena em que Patrick e Art acabam se beijando, a pedido de Guadagnino: \"Luca achou muito importante que, em qualquer triângulo amoroso, todos os cantos se toquem, e eu rapidamente percebi que ele estava falando literalmente\".\n[…]\nUlrich entrou em contato com Michael De Luca e Pamela Abdy – chefes da MGM – e nas próximas 24 horas, negociaram o contrato de distribuição dos dois filmes, adquirindo-os. Quando a Amazon concluiu a aquisição do estúdio, ela herdou os títulos, e Zendaya recebeu um salário de US$ 10 milhões como protagonista e produtora. Em fevereiro de 2022, o filme foi anunciado, com Zendaya, Josh O'Connor e Mike Faist escalados nos papéis principais.\n[…]\nGuadagnino visitou Zendaya no set de \"Dune: Part Two\" para completar a ADR de \"Challengers\". A pós-produção do filme foi encerrada em abril de 2023.\n[…]\nAlém disso, marcou o melhor fim de semana de estreia nacional da carreira de Luca Guadagnino e Zendaya para um filme que não é baseado em propriedade intelectual. Em seu segundo fim de semana, o filme arrecadou US$ 7,9 milhões (uma queda de 49%), ficando em segundo lugar nas bilheterias, atrás do estreante \"The Fall Guy\" e do relançamento de \"Star Wars: A Ameaça Fantasma\". Em seguida, a produção arrecadou US$ 4,4 milhões em seu terceiro fim de semana.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Martina Hingis",
      "descricao": "Tenista suíça nascida em 1980, número 1 do mundo nos anos noventa e campeã de cinco Grand Slams em simples."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A mãe da tenista suíça Hingis, número um do mundo nos anos noventa, escolheu o prenome da filha em homenagem a qual tenista?",
    "resposta": "Martina Navratilova",
    "fonte": [
      "https://en.wikipedia.org/wiki/Martina_Hingis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Martina_Hingis",
        "situacao": "ok",
        "texto": "Martina Hingis (born 30 September 1980) is a Swiss former professional tennis player. She was ranked as the world No. 1 in women's singles by the Women's Tennis Association (WTA) for 209 weeks (fifth-most of all time) and as the world No. 1 in women's doubles for 90 weeks, holding both No. 1 rankings simultaneously for 29 weeks.\n[…]\nDuring this segment of her tennis career (until what would become her first retirement), Hingis won a total of 40 singles titles and 36 doubles. She held the world No. 1 singles ranking for a total of 209 weeks (fifth most following Steffi Graf, Martina Navratilova, Chris Evert, and Serena Williams). In 2005, Tennis magazine put her in 22nd place in its list of 40 Greatest Players of the Tennis era.\n[…]\nHingis, however, resurfaced in July, playing singles, doubles, and mixed doubles in World Team Tennis and notching up singles victories over two top 100 players and shutting out Martina Navratilova in singles on 7 July. With these promising results behind her, Hingis announced on 29 November her return to the next season's WTA Tour.\n[…]\nOn 5 June 2011, Hingis, paired with Lindsay Davenport, won the Roland Garros Women's Legends title, defeating Martina Navratilova and Jana Novotná in the final. Before facing Navratilova/Novotná, Hingis and Davenport won two round-robin matches in the tournament: first against Gigi Fernández/Natasha Zvereva, and then in the next match they prevailed over Andrea Temesvári/Sandrine Testud and 10:0 in the super tie-break.\n[…]\nHingis and Davenport successfully defended their Wimbledon Ladies' Invitation Doubles title in 2012, again beating Martina Navratilova and Jana Novotná in the final.\n[…]\nMartina Hingis at IMDb\n[…]\nMartina Hingis at Olympics.com\n[…]\nMartina Hingis at Olympedia\n[…]\nITF Press release: Decision in the case of Martina Hingis\n[…]\nRepresentation Agency for Martina Hingis"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Martina_Hingis",
        "situacao": "ok",
        "texto": "Martina Hingis (Košice, 30 de Setembro de 1980) é uma ex-tenista profissional suíça que já foi número 1 do ranking mundial feminino tanto em simples como em duplas. Ela já conquistou 98 títulos de torneios WTA, sendo que 43 em simples e 56 nas duplas.\n[…]\nCom isso ela está incluída na restrita lista das tenistas que possuem todos os títulos de Grand Slams de duplas da turnê feminina. Hingis foi a 17ª tenista da história a completar os quatro Grand Slam de Duplas. Já nas duplas mistas, Hingis já venceu quatro torneios do Grand Slam, sendo que dois foram no Open da Austrália, um no Torneio de Wimbledon e um no US Open.\n[…]\nEm novembro de 2007, Martina Hingis anunciou o fim da sua carreira no circuito de tênis WTA, após a divulgação de um controle antidoping positivo. Hingis refutou a acusação de dopagem, acrescentando que o abandono da carreira decorreu em virtude dos seus problemas físicos.\n[…]\nDurante da disputa do WTA Finals de 2017, anunciou sua terceira aposentadoria. Perdeu nas semifinais e, mesmo assim, abandonou o circuito como número 1 do mundo.\n[…]\nHingis casou-se em julho de 2018 com Harald Leemann, depois de um namoro que durou mais de ano, no Resort em Bad Ragaz, a cerca de uma hora de carro de Zurique.\n[…]\nEm 8 de março de 2019, apresentou na sexta-feira, a filha Lia, fruto da sua união com Harald Leemann, seu ex-preparado físico.\n[…]\nO anúncio da gravidez havia sido feito no início de outubro de 2018, acompanhado da foto de um vestido rosa de Tenista, com uma raquete ao lado. No início de fevereiro do mesmo ano havia realizado um chá de bebê em luxuoso Resort em Bad Ragaz.\n[…]\nHingis completou os quatro Grand Slam de Duplas, sendo a 17° da história.\n[…]\nMartina Hingis World",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Quadra Suzanne-Lenglen",
      "descricao": "Segunda maior quadra do complexo de Roland Garros, em Paris, inaugurada em 1994."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A segunda maior quadra de Roland Garros homenageia qual francesa, seis vezes campeã de Wimbledon nos anos vinte?",
    "resposta": "Suzanne Lenglen",
    "fonte": [
      "https://en.wikipedia.org/wiki/Court_Suzanne_Lenglen",
      "https://en.wikipedia.org/wiki/Suzanne_Lenglen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Court_Suzanne_Lenglen",
        "situacao": "ok",
        "texto": "Stade Roland Garros (French pronunciation: [stad ʁɔlɑ̃ ɡaʁɔs]; 'Roland Garros Stadium') is a complex of tennis courts, including stadiums, located in Paris that hosts the French Open. That tournament, also known as Roland Garros, is a major tennis championship played annually in late May and early June. The complex is named after Roland Garros (1888–1918), a pioneering French aviator, and was cons\n[…]\nBuilt in 1994 and originally designated \"Court A\", Court Suzanne Lenglen is the secondary stadium with a capacity of 10,068 spectators. Its namesake, an international celebrity and the first true star of women's tennis, won 31 major tournaments, including six French Open titles and six Wimbledon championships, between 1914 and 1926. Known as La Divine (Divine One) and La Grand Dame (Great Lady) of French tennis, she won two Olympic gold medals in Antwerp in 1920.\n[…]\nA bronze bas relief of Lenglen by the Italian sculptor Vito Tongiani stands over the east tunnel-entrance to the stadium. The trophy awarded each year to the French Open women's singles champion is named La Coupe Suzanne Lenglen in her honor. The court has an underground irrigation system, the first of its kind, to control moisture levels within its surface.\n[…]\nIt is inspired by Suzanne Lenglen's pleated skirt, and the structure is equipped with photovoltaic panels.\n[…]\nPermanent exhibits include a display of the French Open perpetual trophies, including La Coupe des Mousquetaires and La Coupe Suzanne Lenglen; a narrative and photographic history of Stade Roland Garros; displays documenting the evolution of tennis attire through the years; a comprehensive collection of tennis racquets dating back to the mid-19th century; and a large exhibition of tennis-related photographs and paintings.\n[…]\nCourt Suzanne Lenglen will have a retractable roof completed in time for the 2024 Summer Olympics.\n[…]\nHistoire de Roland Garros"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Suzanne_Lenglen",
        "situacao": "ok",
        "texto": "Suzanne Rachel Flore Lenglen (French pronunciation: [syzan lɑ̃ɡlɛn]; 24 May 1899 – 4 July 1938) was a French tennis player. She was the inaugural world No. 1 from 1921 to 1926, winning eight Grand Slam titles in singles and twenty-one in total. She was also a four-time World Hard Court Champion in singles, and ten times in total.\n[…]\nFollowing World War I, Lenglen became a symbol of national pride in France in a country looking to recover from the war. The French press referred to Lenglen as notre Suzanne (our Suzanne) to characterise her status as a national heroine; and more eminently as La Divine (The Goddess) to assert her unassailability.\n[…]\nLenglen is honoured in a variety of ways at the French Open. At Stade Roland Garros, Court Suzanne Lenglen – the second show court that was built in 1994 with a capacity of about ten thousand – was named after her in 1997. Outside the court, there is a bronze relief statue of Lenglen that was erected in 1994. The FFLT had originally planned to erect a statue of Lenglen immediately after her death, but this plan never materialised due to the start of World War II later that year.\n[…]\nAdditionally, one of the main entrances to the ground is Porte Suzanne Lenglen, which leads to Allée Suzanne Lenglen. Moreover, the women's singles championship trophy was named the Coupe Suzanne Lenglen in 1987. In spite of her success at the French Championships, Lenglen never competed at Stade Roland Garros as it did not become the site for the tournament until 1928, after her retirement from amateur tennis.\n[…]\nLittle, Alan (2007). Suzanne Lenglen: Tennis Idol of the Twenties. London: The Wimbledon Lawn Tennis Museum. ISBN 978-0906741436.\n[…]\nSuzanne Lenglen at Wimbledon\n[…]\nSuzanne Lenglen at Olympics.comSuzanne Lenglen at Olympic.org (archived)\n[…]\nSuzanne Lenglen at Olympedia\n[…]\nSuzanne Lenglen at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stade_Roland_Garros",
        "situacao": "ok",
        "texto": "O Stade Roland Garros (que ao pé da letra seria traduzido como \"Estádio Roland Garros\"), é na verdade desde sua criação, um complexo de quadras de tênis e outras facilidades, localizado em Paris, na França.\n[…]\nNo total, o complexo atual (2023) possui 18 quadras, sendo três delas em arenas: a \"Simonne-Mathieu\", a \"Suzanne-Lenglen\" e a principal \"Philippe-Chatrier\" com capacidade para 15.500 espectadores.\n[…]\nEm 1990, Jacques Chirac, então prefeito de Paris, deu seu aval e apoio para a construção de uma nova arena, então chamada de \"Quadra A\" para 10.000 lugares com instalações para imprensa e TV, estacionamento, e outras facilidades. E em 1994, chegou a possuir 23 quadras. Em 20 de maio desse ano, a estátua de Suzanne Lenglen, coloca a memória da campeã francesa disponível para a posteridade. A \"Quadra A\" foi então renomeada para \"Suzanne-Lenglen\" em 1996.\n[…]\nOs últimos recursos foram indeferidos em 2016, a quadra Simonne-Mathieu com capacidade para 5.000 lugares, a terceira maior quadra da arena esportiva, depois da quadra Philippe-Chatrier e da quadra Suzanne-Lenglen pode, assim, ser construída no local de parte do jardim das estufas Auteuil e entrará em operação por ocasião da edição de 2019.\n[…]\nPara o Aberto da França de 2020, a quadra circular Nº 1 seria destruída, substituída por \"Le Jardin des Mousquetaires\", cuja entrega final estava prevista para 2021. Finalmente, quatro quadras (as quatro principais: Chatrier, Suzanne-Lenglen, Simone-Matthieu e quadra nº 14) foram equipados com iluminação para que os jogos possam continuar ao anoitecer, com o objetivo de longo prazo de organizar sessões noturnas, como ocorre por exemplo no US Open.\n[…]\nRoland Garros ganha nova quadra em um cenário peculiar",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Estádio Arthur Ashe",
      "descricao": "Quadra principal do US Open, no complexo de Flushing Meadows, em Nova York, inaugurada em 1997."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A quadra principal do US Open, em Nova York, leva o nome de qual tenista americano, campeão do torneio em 1968?",
    "resposta": "Arthur Ashe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Arthur_Ashe_Stadium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arthur_Ashe_Stadium",
        "situacao": "ok",
        "texto": "Arthur Ashe Stadium is a retractable roof tennis arena at Flushing Meadows–Corona Park in Queens, New York City. Part of the USTA Billie Jean King National Tennis Center, it is the main stadium of the US Open tennis tournament and has a capacity of 23,771, making it the largest tennis stadium in the world.\n[…]\nThe stadium is named after Arthur Ashe (1943–1993), winner of the inaugural 1968 US Open, the first in which professionals could compete. The original stadium design, completed in 1997, had not included a roof. After suffering successive years of event delays from inclement weather, a new lightweight retractable roof was completed in 2016.\n[…]\nArthur Ashe Stadium occupies the site of the United States Pavilion, which was built for the 1964 New York World's Fair and demolished in 1977. The facility, which opened in 1997, replaced Louis Armstrong Stadium as the primary venue for the tournament. It cost $254 million to construct, and originally had 22,547 seats, 90 luxury suites, five restaurants, and a two-level players' lounge, making it by far the largest tennis-only venue in the world.\n[…]\nOn August 25, 1997, the stadium opened by hosting the US Open, with Whitney Houston singing \"One Moment in Time\" during the stadium's inauguration ceremonies and dedicating the performance to the late Arthur Ashe.\n[…]\nOn September 22, 2021, professional wrestling promotion All Elite Wrestling (AEW) broadcast special episodes of its weekly programs Dynamite and Rampage from Arthur Ashe Stadium, billed as \"AEW Grand Slam\" The event marked AEW's debut show in New York City and the first professional wrestling show ever held at the tennis complex. \"Grand Slam\" was held at the stadium again in 2022, 2023, and 2024.\n[…]\nAshe Stadium Seating Chart\n[…]\nArthur Ashe Stadium Google street view interactive panorama"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arthur_Ashe_Stadium",
        "situacao": "ok",
        "texto": "O Arthur Ashe Stadium é um estádio de tênis localizado no Queens, em Nova York, nos Estados Unidos, possui capacidade total para 23.771 pessoas sendo o maior estádio de tênis do mundo, é o principal estádio do US Open.\n[…]\nO estádio foi inaugurado em 1998, passou por uma reforma em 2016 para instalação de um teto retrátil, leva o nome de Arthur Ashe, ganhador do primeiro US Open em 1968.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Cotovelo de tenista",
      "descricao": "Lesão por esforço repetitivo nos tendões da parte externa do cotovelo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Cotovelo de tenista é o nome popular de qual inflamação nos tendões do braço?",
    "resposta": "Epicondilite lateral",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tennis_elbow"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tennis_elbow",
        "situacao": "ok",
        "texto": "Tennis elbow, also known as lateral epicondylitis, is an enthesopathy (attachment point disease) of the origin of the extensor carpi radialis brevis on the lateral epicondyle. It causes pain and tenderness over the lateral epicondyle.\n[…]\nThe term \"tennis elbow\" is widely used (although informal), but the condition affects non-tennis players. In the 21st century, the growth of pickleball participation led to the term, pickleball elbow. Historically, the medical term \"lateral epicondylitis\" was most commonly used for the condition, but \"itis\" implies inflammation, and the condition is not typically an inflammation. It is also referred to as enthesopathy of the extensor carpi radialis origin.\n[…]\nCurrent research indicates that alcohol intake is not significantly associated with lateral epicondylitis.\n[…]\nThere is no standard method for treating tennis elbow. Non-operative treatment resolves 90% of symptomatic lateral epicondylitis. Nonoperative care usually includes activity modification, physical therapy, non-steroidal anti-inflammatory medications, bracing, extracorporeal shock-wave therapy, and acupuncture. Modifying activity and avoiding overuse are key to treatment.\n[…]\nThe effectiveness of acupuncture for lateral epicondylitits is unproven.\n[…]\nMost patients with tennis elbow do not need surgery, improving with conservative treatments. However, if symptoms persist despite prolonged conservative therapy, surgical options should be reconsidered. Several surgical procedures are available for lateral epicondylitis, most involving the removal of damaged tissue from the ECRB and scraping of the lateral epicondyle. This procedure can be done through open, percutaneous, or arthroscopic methods.\n[…]\nGolfer's elbow"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Epicondilite",
        "situacao": "ok",
        "texto": "Epicondilite ou epicondilite lateral é uma degeneração dos tendões que se originam no cotovelo, atingindo principalmente os músculos extensores do punho e dos dedos. A epicondilite é também conhecida como cotovelo de tenista.\n[…]\nA epicondilite é causada por atividades que exigem uso excessivo ou incomum dos músculos extensores do punho ou dos pronadores do antebraço, como ocorre em alguns desportos, especialmente o tênis, em praticas musicais como o piano, em dentistas pelo esforço diário cíclico ou por tensões repetitivas na articulação do cotovelo.\n[…]\nA epicondilite começa como uma ligeira impressão dolorosa, geralmente localizada na face externa do cotovelo e que se estende pelo terço proximal da face externa do antebraço. Se o esforço repetitivo for continuado, principalmente na região do antebraço em sobrecarga, a área atingida torna-se dolorosa ao toque e a dor pode irradiar para baixo até ao punho. Levantar quaisquer objetos, especialmente com o antebraço estendido, torna-se muito doloroso e quase impossível, mesmo que tenham pouco peso.\n[…]\nO diagnóstico da epicondilite lateral pode ser feita inicialmente por uma anamnese e um exame físico articular, com avaliação da musculatura e dos ligamentos locais.\n[…]\nA Fisioterapia é muito indicada na redução da inflamação e controle da dor. Existem diversas maneiras de se tratar epicondilite, desde de métodos conservadores não invasivos até tratamentos cirúrgicos. Os tratamentos conservadores podem ser feitos com fisioterapia, uso de órteses, medicamentos, acupuntura e outros.\n[…]\nO laser é muito utilizado em inflamações agudas e crônicas e seus efeitos são comprovadamente efetivos.\n[…]\nEpitrocleite (cotovelo do golfista)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Tênis (calçado)",
      "descricao": "Calçado esportivo de sola de borracha, chamado de tênis no Brasil."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Brasil, o calçado esportivo de sola de borracha ganhou o nome de tênis por qual motivo?",
    "resposta": "Era usado para jogar tênis",
    "fonte": [
      "https://pt.wikipedia.org/wiki/T%C3%AAnis_(cal%C3%A7ado)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/T%C3%AAnis_(cal%C3%A7ado)",
        "situacao": "ok",
        "texto": "Tênis (português brasileiro) ou ténis (português europeu), sapatilha (português europeu) ou quede(português angolano) é um tipo de calçado. Foi idealizado como acessório na prática de desporto, mas atualmente é amplamente utilizado no vestuário casual.\n[…]\nO tênis, como conhecemos hoje, é um calçado esportivo que se originou no final do século XIX. Acredita-se que o primeiro modelo de tênis tenha sido criado na década de 1860, na Inglaterra, como uma alternativa mais confortável e menos barulhenta aos sapatos de sola dura que eram usados para jogar tênis de grama na época.\n[…]\nO nome \"tênis\" foi dado ao calçado em homenagem ao esporte em que ele era usado. Originalmente, os tênis eram feitos de lona e borracha, com uma sola de borracha vulcanizada. Esses materiais tornavam o calçado mais leve e confortável para jogar tênis e outros esportes.\n[…]\nNa década de 1960, a empresa alemã Adidas lançou o primeiro tênis com uma sola de borracha com pregos, conhecido como \"sapatilha de cravos\". Esse modelo de tênis foi especialmente projetado para melhorar o desempenho dos atletas em pistas de corrida e campos de atletismo, e rapidamente se tornou um sucesso entre os corredores profissionais.\n[…]\nAlém disso, estão em voga tênis de linha ecológica, calçados elaborados com materiais reciclados, como as versões Green Pack da Fila (empresa).\n[…]\nEm resumo, o tênis deixou de ser utilizado exclusivamente como um calçado esportivo e passou a integrar diversos contextos sociais e culturais pelo mundo. O seu uso expandiu-se, abrangendo também a moda e outras formas de expressões culturais. O desenvolvimento de novos designs, tecnologias e estilos contribuiu para diversificar os modelos disponível para o público."
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Jannik Sinner",
      "descricao": "Tenista italiano nascido em 2001 no Tirol do Sul, número 1 do mundo e campeão de Grand Slams."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Antes de se dedicar ao tênis, o italiano Jannik Sinner foi campeão nacional infantil de qual esporte?",
    "resposta": "Esqui",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jannik_Sinner"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jannik_Sinner",
        "situacao": "ok",
        "texto": "Jannik Sinner (born 16 August 2001) is an Italian professional tennis player. He is currently ranked world No. 1 by Association of Tennis Professionals (ATP), and was the year-end No. 1 in 2024. Sinner has won 30 ATP Tour-level singles titles, including five majors, ten Masters and two ATP Finals titles. He led Italy to back-to-back Davis Cup crowns in 2023 and 2024.\n[…]\nJannik Sinner was born 16 August 2001 to Hanspeter Sinner and Siglinde Rauchegger in Innichen, in the Northern Italian province of South Tyrol. His native language is German. He grew up in the town of Sexten in the Dolomites, the family hometown, where his father worked as a chef and his mother as a waitress at a ski lodge. He has an older adopted brother, Mark, who was born in Russia in 1998. Sinner began skiing at age three and competed in his first ski races at the age of eight.\n[…]\nSinner finished the year ranked world No. 37.\n[…]\nOutside Italy, Sinner has been labeled \"the atypical Italian\" by media outlets, a description he has agreed with.\n[…]\nJannik Sinner is the youngest male player to reach the singles finals of all four Grand Slam tournaments in a single year (2025).\n[…]\nJannik Sinner is the youngest male player to reach the singles finals of all four Grand Slam tournaments and the ATP Finals in a single year (2025).\n[…]\nJannik Sinner holds the record for the highest percentage of points won (56.45%) in a season (2025) in ATP history.\n[…]\nJannik Sinner is the only player in ATP history to finish a season (2025) as No. 1 in percentage of games won on both serve and return.\n[…]\nJannik Sinner is the youngest male player to complete the hard-court Big Titles set in a career (2026).\n[…]\nJannik Sinner career statistics\n[…]\nItalian players best ranking\n[…]\nJannik Sinner at the Association of Tennis Professionals\n[…]\nJannik Sinner at World Tennis\n[…]\nJannik Sinner at the Davis Cup (archived former page)\n[…]\nJannik Sinner at Olympics.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jannik_Sinner",
        "situacao": "ok",
        "texto": "Jannik Sinner (Innichen, 16 de agosto de 2001) é um tenista profissional italiano. É atualmente o número 1 do mundo em simples masculino pela Associação de Tenistas Profissionais (ATP), possuindo 5 títulos de Grand Slam, atual bicampeão de Wimbledon. Sinner conquistou 30 títulos de simples no nível da ATP Tour, e também venceu as Finais da ATP de 2024 e 2025, além de ter liderado a Itália para os \n[…]\nEm 2025, Sinner defendeu seu título no Aberto da Austrália e, após uma suspensão de três meses devido à administração acidental de clostebol, foi vice-campeão no Aberto da França, perdendo uma épica final para seu rival de carreira, Carlos Alcaraz. Ele se recuperou vencendo Wimbledon na final contra Alcaraz, tornando-se o primeiro italiano a conquistar o título.\n[…]\nSinner tem contrato com grandes marcas italianas e internacionais. Entre elas, destacam-se a parceria com a fabricante de roupas esportivas Nike, com a grife de alto luxo Gucci, com a marca de relógios Rolex e com a produtora de café Lavazza.\n[…]\nJannik Sinner testou positivo duas vezes para um esteroide anabolizante proibido. O incidente ocorreu no ATP de Indian Wells de 2024. No entanto, a sanção incluiu apenas a perda do prêmio em dinheiro e dos pontos correspondentes, mas nenhum tempo de suspensão, porque um tribunal independente da Agência Internacional de Integridade do Tênis, que anunciou o caso, decidiu que a ingestão havia sido acidental.\n[…]\nO fisioterapeuta do italiano havia usado um remédio para um corte em seu dedo e, ao massagear sem luva, acabou contaminando Sinner. Responsável pela investigação, a Agência Internacional de Integridade do Tênis aceitou essa versão porque realizou uma investigação que incluiu entrevistas aprofundadas com Sinner e sua equipe, que cooperaram no processo e as quantidades da substância eram mínimas em ambos os testes.\n[…]\nJannik Sinner na Associação de Tenistas Profissionais",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Ashleigh Barty",
      "descricao": "Tenista australiana nascida em 1996, ex-número 1 do mundo, aposentada em 2022."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Durante uma pausa no tênis, a australiana Ashleigh Barty jogou profissionalmente qual esporte, na liga feminina do seu país?",
    "resposta": "Críquete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ashleigh_Barty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ashleigh_Barty",
        "situacao": "ok",
        "texto": "Ashleigh Jacinta Barty  (born 24 April 1996) is an Australian former professional tennis player and cricketer. She was ranked as the world No. 1 in women's singles by the Women's Tennis Association (WTA) for 121 weeks, and was ranked world No. 5 in doubles. Barty won 12 WTA Tour-level singles titles, and three majors at the 2019 French Open, 2021 Wimbledon Championships, and 2022 Australian Open, \n[…]\nAshleigh Jacinta Barty, known as \"Ash\", was born on 24 April 1996 in Ipswich, Queensland to Josie and Robert Barty. Her father grew up in the rural North Queensland town of Bowen where he became a Queensland and Australian representative in golf and later worked for the State Library of Queensland. Her mother is the daughter of English immigrants, was a state representative for Queensland in golf in her younger years, and began working as a radiographer after retiring from golf.\n[…]\nI'm very excited.\" She was recognised as the Female Sportsperson of the Year at the National Dreamtime Awards, a ceremony that honours Indigenous Australians, in both 2017 and 2018, the first two editions of the awards. Barty was honoured as the Young Australian of the Year in 2020.\n[…]\nBarty is a supporter of the Richmond Football Club in the Australian Football League and Manchester United in the English Premier League. She presented the premiership cup to Richmond when they won the 2020 AFL Grand Final.\n[…]\nBarty has been in a relationship with Australian professional golfer Garry Kissick since 2017, and announced their engagement in November 2021. In September 2020, Barty won the championship at the Brookwater Golf and Country Club, where she had originally met Kissick in 2016. Barty married Kissick on 23 July 2022.\n[…]\nAshleigh Barty at the Women's Tennis Association\n[…]\nAshleigh Barty at World Tennis\n[…]\nAshleigh Barty at the Billie Jean King Cup (archived)\n[…]\nAshleigh Barty at Tennis Australia\n[…]\nAshleigh Barty at Cricinfo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ashleigh_Barty",
        "situacao": "ok",
        "texto": "Ashleigh Barty (Ipswich, 24 de abril de 1996) é uma ex-tenista profissional australiana, tendo sido a número 1 de simples no ranking da Associação de Tênis Feminino (WTA). Foi campeã do torneio de Roland Garros em 2019. Além de tenista, ela também é jogadora de críquete.\n[…]\nBarty ganhou atenção da imprensa ao chegar na final de duplas do Australian Open de 2013, em parceria com Casey Dellacqua. Esta equipe também atingiu as finais de Wimbledon e do US Open de 2013, fazendo de Barty uma das mais bem sucedidas debutantes da história na WTA. A australiana ainda conquistou o torneio de simples juvenil de Wimbledon, em 2013, além de dois WTA de duplas.\n[…]\nEm setembro de 2014, parou de jogar tênis por tempo indeterminado. Em outubro de 2015, anunciou que iria jogar profissionalmente críquete, assinando contrato com o Brisbane Heat, da liga australiana. Em fevereiro de 2016, resolveu retornar ao circuito tenístico.\n[…]\nEm 29 de janeiro de 2022, foi campeã do Australian Open, vencendo Danielle Collins na final por 6–3, 7–6. Sem jogar desde então, Barty anunciou aposentadoria em 23 de março de 2022.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Henrique V (peça)",
      "descricao": "Peça histórica de William Shakespeare sobre o rei inglês Henrique V e a batalha de Agincourt."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na peça Henrique V, de Shakespeare, o delfim da França provoca o jovem rei inglês enviando a ele qual presente?",
    "resposta": "Bolas de tênis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Henry_V_(play)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Henry_V_(play)",
        "situacao": "ok",
        "texto": "The Life of Henry the Fifth, often shortened to Henry V, is a history play by William Shakespeare, believed to have been written circa 1599. It tells the story of King Henry V of England, focusing on events immediately before and after the Battle of Agincourt (1415) during the Hundred Years' War. In the First Quarto text, it was titled The Cronicle History of Henry the fift, and The Life of Henry \n[…]\nReaders and audiences have interpreted the play's attitude to warfare in several ways. It seems to celebrate Henry's invasion of France and his military prowess, but it can also be read as a commentary on the moral and personal cost of war. Gathered, Shakespeare presents warfare in all its complexity.\n[…]\nA recent major film, The King (2019), starring Timothée Chalamet as Henry V, was adapted from Shakespeare's plays Henry IV Part I, Henry IV Part II, and Henry V.\n[…]\nIn 2012, the BBC commissioned a television adaptation of the play as part of The Hollow Crown series. It was part of a tetralogy that televised the entirety of Shakespeare's Henriad. Produced by Sam Mendes and directed by Thea Sharrock, it starred Tom Hiddleston as Henry V, who had played Prince Hal in The Hollow Crown's adaptations of Henry IV, Part I and Henry IV, Part II.\n[…]\nHenry V – A Shakespeare Scenario is a 50-minute work for narrator, SATB chorus, boys' choir (optional), and full orchestra. The musical content is taken from Walton's score for the Olivier film, edited by David Lloyd-Jones and arranged by Christopher Palmer. It was first performed at the Royal Festival Hall in London, in May 1990. Performers for this premiere were Christopher Plummer (narrator), the Academy Chorus, Choristers of Westminster Cathedral, and Academy of St Martin-in-the-Fields.\n[…]\nFully edited texts of Henry V, both original-spelling and modernised, at the Internet Shakespeare Editions\n[…]\nHenry V public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Henrique_V_%28pe%C3%A7a_teatral%29",
        "situacao": "ok",
        "texto": "Henrique V (em inglês, Henry V) é uma peça de teatro do gênero drama histórico, de autoria de William Shakespeare e baseada na vida de Henrique V, que reinou na Inglaterra na primeira metade do século XV. Acredita-se que a peça tenha sido escrita em 1599, e é a última parte de uma tetralogia formada por Richard II, Henry IV, Part 1 e Henry IV, Part 2.\n[…]\nA primeira produção completa da peça foi realizada no Brasil em 2017 dentro do VIII Encontros com Shakespeare pela Cena IV Shakespeare Cia em parceria com o Instituto Shakespeare do Brasil, tendo o ator Gabriel Marin como o rei Henrique.\n[…]\nA peça, estreou em agosto de 2017 e esteve na programação do Festival de Teatro de Curitiba de 2018, retornou aos palcos na edição de 2023 do próprio Encontros com Shakespeare e em apresentação especial no Theatro Municipal de São João da Boa Vista em 2024.\n[…]\nO Rei (2015) - Baseado em várias peças de William Shakespeare, porém considera pouco fiel tanto historicamente como nas histórias das próprias peças. Dirigido e escrito por David Michôd, e estrelado por Timothée Chalamet, Sean Harris, Lily-Rose Depp, Robert Pattinson e Ben Mendelsohn.\n[…]\nHenrique V (1989) - Adaptação escrita e dirigida por Kenneth Branagh em sua estreia como diretor. Branagh assume o papel-título do rei Henrique V da Inglaterra, com Paul Scofield, Derek Jacobi, Ian Holm, Brian Blessed, Emma Thompson, Alec McCowen, Judi Dench, Robbie Coltrane e Christian Bale.\n[…]\nHenrique V (1944) - Produzido perto do final da Segunda Guerra Mundial foi parcialmente financiado pelo governo britânico com a ideia de divulgar a imagem da Grã-Bretanha. O filme foi originalmente \"dedicado as tropas da Grã-Bretanha. O filme rendeu a Laurence Olivier um Oscar Honorário por \"sua notável conquista como ator, produtor e diretor\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Tennis for Two",
      "descricao": "Um dos primeiros videogames da história, criado em 1958 por William Higinbotham num osciloscópio."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1958, num laboratório americano, o físico William Higinbotham criou um dos primeiros videogames da história. Que esporte ele simulava?",
    "resposta": "Tênis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tennis_for_Two"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tennis_for_Two",
        "situacao": "ok",
        "texto": "Tennis for Two (also known as Computer Tennis) is a 1958 sports video game designed by the American physicist William Higinbotham at the Brookhaven National Laboratory. One of the first games developed in the early history of video games, it simulates a game of tennis.\n[…]\nIn 1958, American physicist William Higinbotham worked in the Brookhaven National Laboratory in Upton, New York, as the head of the instrumentation division. Higinbotham had a bachelor's degree in physics from Williams College, and had previously worked as a technician in the physics department at Cornell University while unsuccessfully pursuing a Ph.D. there.\n[…]\nAhl, had played Tennis for Two at Brookhaven in 1958, and dubbed Higinbotham the \"Grandfather of Video Games\". Higinbotham himself felt that the game was an obvious extension of the Donner Model 30's bouncing ball program and therefore not worthy of patenting or a large part of his legacy; he preferred to be remembered for his post-World War II nuclear non-proliferation work.\n[…]\nIn 2010, it was replaced with a restored Donner Model 3400 analog computer. In 2011, Stony Brook University founded the William A. Higinbotham Game Studies Collection, dedicated to \"documenting the material culture of screen-based game media\", and \"collecting and preserving the texts, ephemera, and artifacts that document the history and work of early game innovator and Brookhaven National Laboratory scientist William A.\n[…]\nHiginbotham, who in 1958 invented the first interactive analog computer game, Tennis for Two.\"\n[…]\nThis, therefore, makes Tennis for Two the first video game under some definitions from a philosophical viewpoint rather than a technical one and a distinctive moment in the early history of video games.\n[…]\nTennis for Two simulation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tennis_for_Two",
        "situacao": "ok",
        "texto": "Tennis for Two é um jogo eletrônico de esporte desenvolvido em 1958 e que simula uma partida de tênis, sendo considerado um dos primeiros jogos eletrônicos da história. Projetado pelo físico William Higinbotham, ele foi criado para uma exposição anual no Laboratório Nacional de Brookhaven quando Higinbotham descobriu que o modelo 30 do computador analógico Donner, destinado à pesquisa governamenta\n[…]\nEm 1958, o físico americano William Higinbotham trabalhava no Laboratório Nacional de Brookhaven como chefe da divisão de instrumentação. Ele era bacharel em física pelo Williams College e já tinha trabalhado antes como técnico no departamento de física da Universidade Cornell, onde tentou sem sucesso ingressar no doutorado.\n[…]\nHiginbotham projetou o jogo usando um osciloscópio para mostrar o caminho que a simulação de uma bola fazia em uma quadra de tênis vista lateralmente. O computador acoplado calculava a trajetória da bola e revertia seu caminho quando atingia o chão. O jogo também simulava a bola batendo na rede caso ela não fizesse um arco suficientemente grande, bem como mudanças na velocidade devido a um arrasto da resistência do ar.\n[…]\nTennis for Two foi exibido pela primeira vez em 18 de outubro de 1958. O jogo era processado como uma linha horizontal, representando uma quadra de tênis, e tinha uma pequena linha vertical no centro para representar a rede. O primeiro jogador devia pressionar o botão em seu controlador para mandar a bola, um ponto de luz, sobre a rede, e se não batesse nela, chegaria ao outro lado da quadra ou voaria para fora dos limites da tela.\n[…]\nHiginbotham, que em 1958 inventou o primeiro jogo interativo para computador analógico, Tennis for Two\".\n[…]\nTennis for Two é considerado por algumas definições como o primeiro jogo eletrônico.\n[…]\nVídeo de Tennis for Two\n[…]\nSimulação de Tennis for Two",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Aberto da Austrália",
      "descricao": "Torneio de Grand Slam disputado em Melbourne, o primeiro da temporada."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Aberto da Austrália foi disputado em 1985 e em 1987, mas não houve edição em 1986. Por quê?",
    "resposta": "Mudou de dezembro para janeiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Australian_Open"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Australian_Open",
        "situacao": "ok",
        "texto": "The Australian Open is a tennis tournament organised by Tennis Australia annually at Melbourne Park in Melbourne, Victoria, Australia. It is the first of the four major tennis tournaments every year, held before the French Open, Wimbledon and the US Open.\n[…]\nFrom 1982 to 1985, the tournament was played in mid-December. Then it was decided to move the next tournament to mid-January (January 1987), which meant no tournament was organised in 1986. From 1987 to 2026, the Australian Open date has not changed (except for 2021, when it was postponed by three weeks to February due to the COVID-19 pandemic). In 2026, the tournament was played in late January.\n[…]\nUnlike the other three Grand Slam tournaments, which became open in 1968, the Australian tournament opened to professionals in 1969.\n[…]\nThe following record of attendance begins in 1987, when the tournament moved from being held in December to in January (the immediate preceding tournament was December 1985). 1987 was the last year that the Kooyong Tennis Club hosted the tournament; since 1988 it has been held at Melbourne Park. The average growth rate over the period covered below is more than 7%. Note that these figures include attendances for the week of qualifying and pre-main tournament events.\n[…]\nAustralian Open extreme heat policy\n[…]\nAustralian Open series\n[…]\nList of Australian Open champions (all events)\n[…]\nList of Australian Open men's singles champions\n[…]\nList of Australian Open women's singles champions\n[…]\nList of Australian Open men's doubles champions\n[…]\nList of Australian Open women's doubles champions\n[…]\nList of Australian Open mixed doubles champions\n[…]\nList of Australian Open singles finalists during the Open Era, records and statistics\n[…]\nUS Open\n[…]\nTennis Australia website\n[…]\nAustralian Open – Grand Slam History"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Australian_Open",
        "situacao": "ok",
        "texto": "O Australian Open (no Brasil, Aberto da Austrália; em Portugal, Open da Austrália) é um torneio de tênis, da categoria Grand Slam, disputado em Melbourne, na Austrália.\n[…]\nDesde a primeira edição do Australian Open, em 1905, o torneio já foi disputado em seis cidades diferentes, até que foi transferido para a cidade de Melbourne, no ano de 1972. Em 1908, um estadunidense, Fred Alexander, tornou-se o primeiro estrangeiro a triunfar no Australian Open. A competição foi aberta às mulheres somente em 1922 [en]. Em 1988, a grama é abandonada em benefício de uma superfície sintética dura, o  Rebound Ace, uma superfície similar à do US Open, porém mais rápida.\n[…]\nJuntatente com o Torneio de Roland Garros, o Torneio de Wimbledon e o US Open, o Australian Open compõe os quatro torneios do Grand Slam. Em 1985, os organizadores do Australian Open decidem mudar as datas do torneio. A edição de 1986 não foi disputada. Desde sua criação, o torneio era disputado em dezembro, no final da temporada.\n[…]\nAtualmente, é disputado no final do mês de janeiro, sendo o primeiro torneio do Grand Slam da temporada, já que foi o primeiro torneio do Grand Slam a possuir uma quadra beneficiada de um teto móvel, muito mais apropriada ao calor do verão australiano e possíveis chuvas.\n[…]\nQuando começou em 1905, o torneio não era designado como um Grand Slam de tênis, isto ocorreu somente em 1924, pela International Lawn Tennis Federation (ILTF) em um encontro de 1923. O comitê do torneio mudou sua estrutura, incluindo \"cabeças de chave\" pela primeira vez. Em 1972, foi decidido que seria sempre em Melbourne todos os anos devido à herança da cidade e facilidades.\n[…]\nAustralian Open no X",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Estádio Roland Garros",
      "descricao": "Complexo de tênis em Paris onde se disputa o Aberto da França, batizado em homenagem ao aviador Roland Garros."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Depois que os Quatro Mosqueteiros conquistaram a Taça Davis, Paris construiu o estádio Roland Garros, em 1928. Para quê?",
    "resposta": "Sediar a defesa da Taça Davis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stade_Roland_Garros"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stade_Roland_Garros",
        "situacao": "ok",
        "texto": "Stade Roland Garros (French pronunciation: [stad ʁɔlɑ̃ ɡaʁɔs]; 'Roland Garros Stadium') is a complex of tennis courts, including stadiums, located in Paris that hosts the French Open. That tournament, also known as Roland Garros, is a major tennis championship played annually in late May and early June. The complex is named after Roland Garros (1888–1918), a pioneering French aviator, and was cons\n[…]\nStade Roland Garros was constructed as a venue for France's successful defense the following year. France retained the Cup until 1933, again largely because of the Musketeers. A monument to France's six Cup championships stands at the center of Place des Mousquetaires, a circular courtyard near the venue's entrance.\n[…]\nCourt Philippe Chatrier was built in 1928 as Stade Roland Garros's centerpiece and remains its principal venue. It seats 15,225 spectators as of a 2019 renovation. The stadium was known simply as \"Court Central\" until 2001 when it was renamed for the long-time president of the Fédération Française de Tennis (FFT) who helped restore tennis as a Summer Olympics sport in 1988.\n[…]\nThe four main spectator grandstands are named for the Four Musketeers—Brugnon, Borotra, Cochet, and Lacoste—in honor of their Davis Cup success, which prompted construction of the facility, and the stadium. As a further tribute, the trophy awarded each year to the French Open men's singles champion is known as La Coupe des Mousquetaires.\n[…]\nStade Roland Garros is located at the western side of Paris, at the southern boundary of the Bois de Boulogne in Paris's 16th arrondissement. The triangular property is bounded by Avenue Porte d'Auteuil and A13 autoroute on the north and Boulevard d'Auteuil on the south. The eastern boundary is Avenue Gordon Bennett and the adjacent Jardin des Serres d'Auteuil.\n[…]\nHistoire de Roland Garros"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stade_Roland_Garros",
        "situacao": "ok",
        "texto": "O Stade Roland Garros (que ao pé da letra seria traduzido como \"Estádio Roland Garros\"), é na verdade desde sua criação, um complexo de quadras de tênis e outras facilidades, localizado em Paris, na França.\n[…]\nO Stade Roland Garros, foi inaugurado em maio de 1928 com apenas 4 quadras. Está localizado no oeste de Paris, próximo à estação Porte d'Auteuil do metrô de Paris, à beira do parque Bois de Boulogne.\n[…]\nRecebe todo ano o Torneio de Roland-Garros, um dos quatro Grand Slam de tênis. O nome do complexo foi escolhido em homenagem ao pioneiro da aviação Roland Garros, que morreu em um combate aéreo da Primeira Guerra Mundial em 1918.\n[…]\nO Stade Roland Garros original, foi construído em madeira durante o inverno de 1927-1928 para sediar a final da Copa Davis em 1928, trazido de volta à França pelos \"Quatro Mosqueteiros\" porque as instalações preexistentes eram muito pequenas. Estendia-se por 3,25 hectares e possuía 5 quadras, a maior das quais com capacidade para 10.000 espectadores.\n[…]\nEsses projetos provocaram a ira de moradores locais, associações de defesa do patrimônio e Verdes eleitos em Paris, que lembram que o decreto de registro menciona todo o terreno do jardim, o que proíbe qualquer nova construção, em particular a do famoso complexo. Uma petição para salvar o jardim como era, lançada assim que o projeto foi publicado, recebeu mais de 60.000 assinaturas e o apoio de celebridades como Françoise Hardy.\n[…]\nA Quadra N° 1 de Roland-Garros [fr], construída em 1980 com capacidade para 4 200 espectadores, depois reduzida para 3800, foi demolida em 2019, após o torneio daquele ano.\n[…]\nStade Roland-Garros\n[…]\nHistory of the Stade Roland Garros Stadium\n[…]\nEstátua de Roland Garros é erguida no estádio",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Semifinal Anderson contra Isner em Wimbledon 2018",
      "descricao": "Semifinal masculina de Wimbledon 2018 entre Kevin Anderson e John Isner, com mais de seis horas e quinto set de 26 a 24."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 2018, uma semifinal de Wimbledon entre Kevin Anderson e John Isner durou mais de seis horas. Que mudança nas regras do torneio ela provocou?",
    "resposta": "Tie-break no set decisivo",
    "fonte": [
      "https://en.wikipedia.org/wiki/2018_Wimbledon_Championships_%E2%80%93_Men%27s_singles",
      "https://en.wikipedia.org/wiki/Wimbledon_Championships"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2018_Wimbledon_Championships_%E2%80%93_Men%27s_singles",
        "situacao": "ok",
        "texto": "Novak Djokovic defeated Kevin Anderson in the final, 6–2, 6–2, 7–6(7–3) to win the gentlemen's singles tennis title at the 2018 Wimbledon Championships. It was his fourth Wimbledon title and 13th major title overall, passing Roy Emerson to outright fourth place on the all time men's singles major wins list. The win was Djokovic's first title in over 12 months (his previous win having been at Eastb\n[…]\nEntering the tournament ranked world No. 21, Djokovic was the lowest-ranked player to win Wimbledon since Goran Ivanišević was No. 125 in 2001.\n[…]\nThe semifinals at this edition became the two longest in the history of the tournament, with Anderson and John Isner contesting the longest (6 hours, 36 minutes) and Djokovic and Nadal the second-longest (5 hours, 15 minutes).\n[…]\nNadal retained his top ranking by reaching the semifinal. Federer lost in the quarterfinals to Kevin Anderson despite leading by two sets to love and having a match point in the third set. The semifinal match between Anderson and John Isner, lasting 6 hours 36 minutes, was the second longest men's singles match at Wimbledon and the third longest men's singles match in tennis history.\n[…]\nIsner has thus played in the two longest matches in Wimbledon history (the other one being the record-holding 2010 match against Nicolas Mahut). The 2018 semifinals were the longest two semifinals in Wimbledon history.\n[…]\nAnderson became the first man representing South Africa to reach the Wimbledon men's singles final since Brian Norton in 1921 (South African-born Kevin Curren represented the United States when he was a finalist in 1985). Anderson held a total of five set points in the third set of the championship match, but was unable to force a fourth set.\n[…]\n2018 Wimbledon Championships – Men's draws and results at the International Tennis Federation"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wimbledon_Championships",
        "situacao": "ok",
        "texto": "The Wimbledon Championships, commonly called Wimbledon, is a tennis tournament organised annually in Wimbledon, London, by the All England Lawn Tennis and Croquet Club in collaboration with the Lawn Tennis Association. It is chronologically the third of the four Grand Slam tennis events each year, held after the Australian Open and the French Open and before the US Open. It is the oldest tennis to\n[…]\nOn 19 October 2018, it was announced that a tie-break will be played if the score reaches 12–12 in the final set of any match; this will apply to all competitions including in qualifying, singles, and doubles.\n[…]\nCurrent commentators working for the BBC at Wimbledon include British ex-players Andrew Castle, John Lloyd, Tim Henman, Greg Rusedski, Samantha Smith and Mark Petchey; tennis legends such as John McEnroe, Tracy Austin, Boris Becker and Lindsay Davenport; and general sports commentators including David Mercer, Barry Davies, Andrew Cotter and Nick Mullins. The coverage is presented by Clare Balding.\n[…]\nRTÉ made the decision in 1998 to discontinue broadcasting the tournament due to falling viewing figures and the large number of viewers watching on the BBC. From 2005 until 2014 TG4 Ireland's Irish-language broadcaster provided coverage of the tournament. Live coverage was provided in the Irish language while they broadcast highlights in English at night.\n[…]\nFrom 1975 to 1999, premium channel HBO carried weekday coverage of Wimbledon. Hosts included Jim Lampley, Billie Jean King, Martina Navratilova, John Lloyd and Barry MacKay among others. ESPN took over as the cable-television partner in 2003.\n[…]\nBut Court One is covered live on Ziggo Sport/Ziggo Sport Select. Wimbledon has been exclusively broadcast on Sky Sport in Germany since 2007. In December 2018, Sky extended its contract for Austria, Germany and Switzerland until 2022.\n[…]\nWimbledon Effect\n[…]\nList of Wimbledon mixed doubles champions"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Torneio_de_Wimbledon_de_2018_-_Simples_masculino",
        "situacao": "ok",
        "texto": "Roger Federer era cabeça de chave número 1 e defendia o título de 2017, mas foi derrotado nas quartas-de-final por Kevin Anderson.\n[…]\nNovak Djokovic foi o campeão do torneio pela quarta vez, ao derrotar Kevin Anderson.\n[…]\nRafael Nadal e Federer disputavam a posição de número 1 do ranking de simples da ATP no início do torneio, mas ao avançar até as semifinais, Nadal garantiu a permanência na posição.\n[…]\nOs cabeças de chave foram anunciados no dia 27 de junho de 2018 e a chave foi sorteada no dia 29 de junho de 2018.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Venus Williams",
      "descricao": "Tenista americana, número 1 do mundo e campeã de sete torneios de Grand Slam em simples."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 2006, Venus Williams publicou um artigo de jornal criticando Wimbledon. O que o torneio mudou no ano seguinte?",
    "resposta": "Igualou os prêmios de homens e mulheres",
    "fonte": [
      "https://en.wikipedia.org/wiki/Venus_Williams"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Venus_Williams",
        "situacao": "ok",
        "texto": "Venus Ebony Star Williams (born June 17, 1980) is an American professional tennis player. She has been ranked as the world No. 1 in both women's singles and doubles by the Women's Tennis Association. Williams has won 49 WTA Tour-level singles titles, including seven majors (five at Wimbledon and two at the US Open), as well as a gold medal at the 2000 Sydney Olympics and the 2008 WTA Tour Champion\n[…]\nShe received a wildcard for the main draw of Wimbledon but she was later upgraded to the main draw as direct entry due to Naomi Osaka's withdrawal. She won her first round match against Mihaela Buzărnescu. This was Venus Williams's record breaking 90th Grand Slam appearance and also her 90th match win at Wimbledon.\n[…]\nThe turning point was an essay by Williams published in The Times on the eve of Wimbledon in 2006, in which she accused Wimbledon of being on the \"wrong side of history\". British Prime Minister Tony Blair and members of Parliament publicly endorsed Williams's arguments. Later that year, the Women's Tennis Association and UNESCO teamed for a campaign to promote gender equality in sports, asking Williams to lead the campaign.\n[…]\nUnder enormous pressure, Wimbledon announced in February 2007 that it would award equal prize money to all competitors in all rounds; the French Open followed suit a day later. In the aftermath, the Chicago Sun-Times cited Williams as \"the single factor\" that \"changed the minds of the boys\" and a leader whose \"willingness to take a public stand separates her not only from most of her female peers, but also from our most celebrated male athletes\".\n[…]\nWilliams herself became the first woman to benefit from equal prize money at Wimbledon, as she won the 2007 edition and was awarded the same amount as the men's champion, Roger Federer. Williams's fight for equality was documented in Nine for IX, Venus Vs. It premiered on July 2, 2013."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Venus_Williams",
        "situacao": "ok",
        "texto": "Venus Ebony Starr Williams (Lynwood, 17 de junho de 1980) é uma tenista norte-americana, ex-número 1 do ranking de simples e de duplas, que se profissionalizou em 1994, treinada por seu pai, Richard Williams. Considerada uma jogadora com um saque dos mais poderosos de todos os tempos, Venus tornou-se, em 25 de fevereiro de 2002, a primeira jogadora negra a liderar o ranking da WTA.\n[…]\nGanhou ainda um WTA Tour Championships (Doha 2008) e uma Fed Cup (1999). É, também, a tenista com mais medalhas olímpicas de todos os tempos, entre homens ou mulheres, com um ouro em simples no ano 2000, três ao lado da irmã Serena Williams, 2000, 2008 e 2012 e uma prata em duplas mistas em 2016.\n[…]\nEm 2005, Venus foi a principal tenista a lutar por prêmios equivalentes para homens e mulheres em Grand Slams. Os torneios de Wimbledon e Roland Garros ainda se recusavam a equiparar as premiações. Venus se encontrou com organizadores de ambos torneios e, apesar de não conseguir de imediato a correção, deixou uma impressão forte para a mídia e o público. Sua luta virou matéria do jornal The Times às vésperas do torneio de Wimbledon, em 2006.\n[…]\nA norte-americana declarou que, em sua opinião, atletas de qualquer esporte servem de modelo para mulheres e garotas em todo mundo acreditarem que podem ir tão longe quanto qualquer homem. Sobre o argumento de que os homens jogavam em melhor de 5 sets, enquanto as mulheres jogam em melhor de 3, a tenista rebateu esclarecendo que o prêmio se deve à emoção e diversão que leva ao público, e não pelo tempo que gasta em quadra, mas que ela, no entanto, ficaria feliz em jogar em melhor de 5 sets.\n[…]\nA própria Venus foi a primeira beneficiada quando, em 2007, ela venceu Wimbledon e ganhou a mesma quantia que Roger Federer. Venus é considerada a principal responsável pela equiparação dos prêmios.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Gustavo Kuerten",
      "descricao": "Tenista brasileiro tricampeão de Roland Garros, o Guga."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Quando conquistou Roland Garros pela primeira vez, em 1997, Guga ocupava qual posição no ranking mundial?",
    "resposta": "Sexagésima sexta (66º)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gustavo_Kuerten",
      "https://pt.wikipedia.org/wiki/Gustavo_Kuerten"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gustavo_Kuerten",
        "situacao": "ok",
        "texto": "Gustavo \"Guga\" Kuerten (Portuguese: [ɡusˈtavu ˈkiʁtẽ]; born 10 September 1976) is a Brazilian former professional tennis player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals for 43 weeks, including as the year-end No. 1 in 2000. Kuerten won 20 ATP Tour-level singles titles, including three majors at the French Open in 1997, 2000, and 2001, as well as\n[…]\nLike many South American players, his favorite court surface is clay. He won three Grand Slam titles, all of them at the French Open, played on the red clay courts of Roland Garros. He won these titles in 1997, 2000 and 2001. In every one of the three French Open victories he defeated Russia's Yevgeny Kafelnikov in the quarterfinals and two top 10 players on his way to the title. Kuerten became the world No. 1 player in 2000.\n[…]\nOn 25 May 2008, Gustavo Kuerten played his last professional singles match in front of 15,000 spectators at Roland Garros. He arrived on court wearing his 'lucky' uniform, the same blue & yellow one that he wore in 1997 when he won his first French Open tournament. Despite saving a match point against his opponent Paul-Henri Mathieu, he finally lost in three sets (6–3, 6–4, 6–2)—his result in the final of French Open in 1997.\n[…]\nIn 1998, 2002 and 2004 Kuerten received the Prix Orange Roland Garros Award for sportsmanship from the association of tennis journalists. In his homeland Brazil he was awarded the Prêmio Brasil Olímpico in 1999 and was named Athlete of the Year in 1999 and 2000. He received the ATP Arthur Ashe Humanitarian of the Year Award in 2003. Kuerten was inducted into the International Tennis Hall of Fame in 2012.\n[…]\nGustavo Kuerten e Roland Garros: uma História de Amor. Instituto Takano. 2002. ISBN 85-902671-1-3.\n[…]\nGustavo Kuerten at the International Tennis Hall of Fame\n[…]\nGustavo Kuerten at Olympedia\n[…]\nGustavo Kuerten at Olympics.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gustavo_Kuerten",
        "situacao": "ok",
        "texto": "Gustavo \"Guga\" Kuerten (Florianópolis, 10 de setembro de 1976) é um ex-tenista profissional brasileiro, condecorado com posição no Hall da Fama da Associação de Tenistas Profissionais (ATP). Tricampeão de Roland-Garros, é considerado o maior tenista masculino da história do Brasil. É o único tenista da história a ganhar de Pete Sampras e Andre Agassi no mesmo torneio.\n[…]\nNo mesmo ano tornou-se o primeiro tenista masculino brasileiro a vencer um torneio em simples do Grand Slam, a série das quatro mais importantes competições de tênis do circuito profissional mundial. Antes dele, somente Maria Esther Bueno tinha vencido campeonatos nas simples (mas também nas duplas femininas e duplas mistas), enquanto Thomaz Koch lograra êxito nas duplas mistas. Gustavo Kuerten, no entanto, trouxe o inédito título de simples do Roland-Garros.\n[…]\nGuga havia passado de nº 66 do mundo para nº 15, ao vencer Roland-Garros em junho de 1997. Ele entrou pela primeira vez no top 10 mundial em agosto de 1997. Em 1998, ao não defender seu título de Grand Slam, Guga ficou estabilizado entre as posições 20 e 30 do ranking, entre junho de 1998 e março de 1999; a partir daí, rumou para o topo do ranking mundial, atingindo pela primeira vez o posto de nº 1 do mundo em dezembro de 2000.\n[…]\nO diário francês Sport24 destacou a decisão de Guga de se retirar das quadras exatamente em Roland-Garros, palco onde foi campeão três vezes: \"Uma temporada de adeus para Kuerten\", apontou a edição. O mesmo caminho seguiu o Le Figaro, que faz menção ao ano de 1997, quando Guga surgiu para o tênis mundial e encantou o público francês com seu visual no estilo surfista.\n[…]\nEm 1 de junho de 2010 recebeu o troféu Philippe Chatrier, a maior honraria do tênis mundial, em reconhecimento às ações desenvolvidas pelo Instituto Guga Kuerten e o tricampeonato em Roland-Garros.\n[…]\nGustavo Kuerten no Tenis News"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Boris Becker",
      "descricao": "Tenista alemão nascido em 1967, campeão de Wimbledon em 1985, 1986 e 1989."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Em 1985, Boris Becker venceu Wimbledon sem ser cabeça de chave. Quantos anos ele tinha?",
    "resposta": "Dezessete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Boris_Becker"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Boris_Becker",
        "situacao": "ok",
        "texto": "Boris Franz Becker (German: [ˈboːʁɪs ˈbɛkɐ] ; born 22 November 1967) is a German former professional tennis player, tennis coach and a commentator. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP). Becker is considered to be one of the greatest players of all time, winning 49 career singles and 15 doubles titles, including six singles majors: three\n[…]\nHe also won 13 Masters titles, five year-end championships, an Olympic gold medal in men's doubles in 1992, and led Germany to two Davis Cup titles in 1988 and 1989. Becker is the youngest-ever winner of the men's singles Wimbledon title, a feat he accomplished aged 17 years, 7 months and 15 days in 1985.\n[…]\nBoris Becker holds the unique record of being the last player to win Wimbledon with white balls (1985) and the first to win with yellow balls (1986)\n[…]\nIn June 2015, another Becker autobiography, Boris Becker's Wimbledon: My Life and Career at the All England Club, was published with a foreword by the world's number 1 player and reigning Wimbledon champion Novak Djokovic whom Becker coached at the time.\n[…]\nBecker is a patron of the Elton John AIDS Foundation.\n[…]\nBecker is the subject of a two-part 2023 Alex Gibney documentary Boom! Boom! The World vs. Boris Becker, the first part of which premiered at the 2023 Berlin International Film Festival.\n[…]\nBecker–Edberg rivalry\n[…]\nBecker, Boris (2005). The Player. London: Bantam. ISBN 0-553-81716-7.\n[…]\nKaiser, Ulrich; Breskvar, Boris (1987). Boris Becker's Tennis: The Making of a Champion. New York: Leisure Press. ISBN 0-88011-290-5.\n[…]\nBoris Becker at the Association of Tennis Professionals\n[…]\nBoris Becker at World Tennis\n[…]\nBoris Becker at the Davis Cup (archived)\n[…]\nBoris Becker at the International Tennis Hall of Fame\n[…]\nBoris Franz Becker at Olympics.com Boris Franz Becker at OlympicChannel.com (archived) Boris Becker at Olympic.org (archived)\n[…]\nBoris Becker at Olympedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Boris_Becker",
        "situacao": "ok",
        "texto": "Boris Facund Becker (22 de novembro de 1967, Leimen, Alemanha) é um ex-tenista profissional alemão e ex-número um mundial. Venceu seis torneios do Grand Slam, foi medalha de ouro nos Jogos Olímpicos e o mais jovem vencedor do Torneio de Wimbledon. Becker é membro do International Tennis Hall of Fame desde 2003. Atualmente disputa torneios de pôquer, sendo patrocinado pelo PokerStars.\n[…]\nO ano de 1989 foi possivelmente o pico da carreira de Becker. Derrotou Edberg na final de Wimbledon, e venceu Lendl na final dos US Open. Ajudou também a Alemanha a revalidar a Copa Davis. Entretanto, o ranking do mundo no. 1 iludiu-o ainda.\n[…]\nEm 1990, Becker encontrou-se com Edberg pelo terceiro ano consecutivo no final de Wimbledon, perdendo em um épico encontro no quinto set.\n[…]\nBecker alcançou o final do Open da Austrália pela primeira vez na sua carreira em 1991, onde derrotou Ivan Lendl para reivindicar finalmente no# 1 do ranking mundial e mantendo-se nessa posição por diversas semanas em 1991. Becker alcançou a final de Wimbledon em 1991, onde perdeu inesperadamente para seu compatriota alemão Michael Stich.\n[…]\nBecker alcançou o final de Wimbledon pela sétima vez em 1995, onde perdeu em quatro sets para Pete Sampras. Seu sexto título do Grand Slam veio em 1996, quando derrotou Michael Chang na final do Open da Austrália.\n[…]\nGanhou também outros dois títulos internacionais para a sua equipa representando a Alemanha na Copa Hopman, (em 1995) e a World Team Cup (em 1989 e em 1998). O valor em prêmios da carreira de Becker totalizou $ 25.080.956.\n[…]\nBecker joga agora como sênior no ATP Tour. Permanece uma figura recorrente nos eventos em Wimbledon e em documentários realizados para a BBC.\n[…]\nBoris Becker Percorre o Circuto do Pokerstars Europa Poker Tour (EPT) e pode ser encontrado nas mesas ONline com nick Boris Becker",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Chris Evert",
      "descricao": "Tenista americana nascida em 1954, ex-número 1 do mundo e campeã de 18 Grand Slams em simples."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "A americana Chris Evert, grande rival de Martina Navratilova, venceu Roland Garros em simples quantas vezes?",
    "resposta": "Sete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chris_Evert"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chris_Evert",
        "situacao": "ok",
        "texto": "Christine Marie Evert (born December 21, 1954) is an American former professional tennis player. One of the most successful players of all time, she was ranked as the world No. 1 in women's singles by the Women's Tennis Association (WTA) for 260 weeks (fourth-most of all time), and finished as the year-end No. 1 seven times: 1974–1978, 1980 and 1981. Evert won 157 singles titles, including 18 majo\n[…]\nAlongside Martina Navratilova, her greatest rival, Evert dominated women's tennis from the mid-1970s to the mid-1980s.\n[…]\nIn 1979, Evert married British tennis player John Lloyd and changed her name to Chris Evert Lloyd. After her affair with British singer and actor Adam Faith, the couple separated, but reconciled and chronicled their marriage in a biography Lloyd On Lloyd co-authored by Carol Thatcher. The couple divorced in April 1987.\n[…]\nIn 1988, Evert married American downhill skier Andy Mill, who had been introduced to her by Martina Navratilova. They have three sons. On November 13, 2006, Evert filed for divorce. The divorce was finalized on December 4, 2006, with Evert paying Mill a settlement of US$7 million in cash and securities.\n[…]\nOn June 10, 2023, Evert presented the 2023 Women's French Open Singles tournament trophy to Iga Świątek at Roland-Garros. Evert had won one of her own seven French Open titles forty years earlier in 1983.\n[…]\nAmdur, Neil; Evert, Chris (1982). Chrissie, My Own Story. New York: Simon and Schuster. ISBN 0-671-44376-3.\n[…]\nHoward, Johnette (2006). The Rivals: Chris Evert vs. Martina Navratilova: Their Epic Duels and Extraordinary Friendship. New York: Broadway. ISBN 0-7679-1885-1.\n[…]\nWind, Herbert Warren (October 13, 1986). \"The Sporting Scene: Mainly about Chris Evert Lloyd\". The New Yorker. Vol. 62, no. 34. pp. 117–145.\n[…]\nChris Evert at Olympics.com\n[…]\nChris Evert interviewed by KHOU in 1971 from Texas Archive of the Moving Image\n[…]\nChris Evert at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chris_Evert",
        "situacao": "ok",
        "texto": "Christine Marie Evert Mill (Fort Lauderdale, Flórida, 21 de dezembro de 1954) é uma ex-tenista dos Estados Unidos da América sendo a nº 1 do planeta por cinco oportunidades. Durante a sua carreira, Evert ganhou 18 títulos de Grand Slam, incluindo um recorde de sete conquistas no Open de França. Ela ainda ganhou dois torneios do Grand Slam em duplas.\n[…]\nChris Evert foi a primeira da geração moderna de tenistas femininas, com seu talento usando as duas mãos e forte jogo de fundo de quadra. Apesar disso, é mais lembrada por sua rivalidade com Martina Navratilova, a única tenista a conquistar mais títulos de simples do que ela (161 contra 157). Seu apelido, \"A Dama de Gelo\" (Ice Maiden), é tanto um elogio quanto uma descrição.\n[…]\nEla, Martina Navrátilová, Margaret Osborne duPont, Steffi Graf, Rafael Nadal, Bob Bryan e Mike Bryan são os únicos tenistas a obter o chamado Década Slam do tênis. Ou seja, ganhar durante dez anos consecutivos pelo menos um dos torneio do Grand Slam por temporada. Não precisa ser o mesmo torneio do Grand Slam, mas tem que ser obrigatoriamente durante dez anos consecutivos e só em simples, duplas ou duplas mistas. No caso de Evert, ela conseguiu uma Década Slam de 1974 a 1983 em Simples.\n[…]\nO tênis sempre esteve presente na vida particular de Chris. Seu pai, Jimmy Evert, foi um técnico profissional de tênis. Ela e sua irmã, Jeanne Evert, se profissionalizaram como tenistas e seu irmão, Jack Evert se formou na Universidade de Auburn, onde disputou torneios intercolegiais de tênis.\n[…]\nChris Evert envolveu-se por duas vezes com o também tenista Jimmy Connors, antes de se casar com outro tenista, o britânico John Lloyd, em 1979. Divorciou-se de Lloyd em 1987, e acabou constituindo uma família com o seu segundo marido, o esquiador estado-unidense Andy Mill, com quem se casou em 1988.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Laver Cup de 2022",
      "descricao": "Edição de 2022 da Laver Cup, em Londres, em que Roger Federer fez a última partida da carreira."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 2022, na Laver Cup, em Londres, Roger Federer fez a última partida da carreira jogando em dupla com qual rival?",
    "resposta": "Rafael Nadal",
    "fonte": [
      "https://en.wikipedia.org/wiki/2022_Laver_Cup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2022_Laver_Cup",
        "situacao": "ok",
        "texto": "The 2022 Laver Cup was the fifth edition of the Laver Cup, a men's tennis tournament between teams from Europe and the rest of the world. It was held on an indoor hard court at The O2 Arena in London, England from 23 until 25 September.\n[…]\nThis tournament marked the retirement of 20-time major singles champion and former singles world No. 1, Roger Federer. The former champion partnered longtime rival Rafael Nadal in the opening doubles match, and was narrowly defeated in a third-set super tiebreak against Jack Sock and Frances Tiafoe.\n[…]\nOn 3 February 2022, Rafael Nadal and Roger Federer were the first players to confirm their participation for Team Europe.\n[…]\nOn 17 June 2022, Félix Auger-Aliassime, Taylor Fritz  and Diego Schwartzman were the first players confirmed for Team World. On 29 June 2022, Andy Murray announced he would make his Laver Cup debut for Team Europe.\n[…]\nNovak Djokovic was announced as the fourth player for Team Europe on 22 July 2022, completing the Big Four lineup for the event.\n[…]\nFederer played his 1750th (singles and doubles combined) and last match on the ATP Tour in doubles partnering Nadal on Day 1, and was replaced by alternate Matteo Berrettini from Day 2. Nadal also withdrew after Day 1; his place was taken by Cameron Norrie.\n[…]\nThe total prize money for 2022 Laver Cup was set at $2,250,000 for all 12 participating players.\n[…]\nEach winning team member pocketed $250,000, the same amount as in the 2021 Laver Cup. Each losing team member received $125,000.\n[…]\nSingles rankings as of 19 September 2022"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Laver_Cup_de_2022",
        "situacao": "ok",
        "texto": "A Laver Cup de 2022 foi a 5ª edição do torneio entre as equipes da Europa e do resto do mundo do tênis masculino.\n[…]\nO evento foi marcado pelo último jogo do suíço Roger Federer antes da aposentadoria. Em 23 de setembro, ao lado de Rafael Nadal, perdeu em duplas para os americanos Jack Sock e Frances Tiafoe, em duelo que foi apertado no match tiebreak.\n[…]\nBaseado no ranking de simples de 19 de setembro de 2022",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Roland Garros de 1997 (simples masculino)",
      "descricao": "Torneio de simples masculino do Aberto da França de 1997, o primeiro título de Gustavo Kuerten."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na final de Roland Garros de 1997, Guga derrotou qual tenista espanhol, que já tinha sido duas vezes campeão do torneio?",
    "resposta": "Sergi Bruguera",
    "fonte": [
      "https://en.wikipedia.org/wiki/1997_French_Open_%E2%80%93_Men%27s_singles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1997_French_Open_%E2%80%93_Men%27s_singles",
        "situacao": "ok",
        "texto": "Gustavo Kuerten defeated Sergi Bruguera in the final, 6–3, 6–4, 6–2 to win the men's singles tennis title at the 1997 French Open. It was his first major singles title. He was the first unseeded player since Mats Wilander in 1982 and the second-lowest ranked player ever to win a major, and the first Brazilian man to win a singles major. Following the win, Kuerten jumped in the rankings from world \n[…]\nYevgeny Kafelnikov was the defending champion, but lost to Kuerten in the quarterfinals. Kuerten defeated all three of the most recent French Open champions en route to the title: 1993 and 1994 champion Bruguera in the final, 1995 champion Thomas Muster in the third round, and 1996 champion Kafelnikov in the quarterfinals.\n[…]\n1997 French Open Men's Singles draw – Association of Tennis Professionals (ATP)\n[…]\n1997 French Open – Men's draws and results at the International Tennis Federation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Torneio_de_Roland_Garros_de_1997_-_Simples_masculino",
        "situacao": "ok",
        "texto": "Ficheiro:Roland-garros-1997.jpg\n[…]\nO Torneio de Roland Garros de 1997 foi um torneio de tênis disputado nas quadras de saibro do Stade Roland Garros, em Paris, na França, entre 26 de maio e 8 de junho daquele ano. Foi a 30ª edição da era aberta e a 101ª de todos os tempos. O 66º classificado Gustavo Kuerten derrotou Sergi Bruguera por 6–3, 6–4, 6–2 na final e venceu o título masculino de tênis individual no Aberto da França de 1997.\n[…]\nKuerten tornou-se o segundo jogador mais baixo do ranking a ganhar um torneio de Grand Slam e o primeiro jogador masculino brasileiro de simples a ganhar o título de Grand Slam. Como consequência, Kuerten subiu para o número 15 no ranking após sua vitória.\n[…]\nSergi Bruguera (Final)\" style=\"-moz-column-count: #  Pete Sampras (Third round)\n[…]\nSergi Bruguera (Final); -webkit-column-count: #  Pete Sampras (Third round)\n[…]\nSergi Bruguera (Final); column-count: #  Pete Sampras (Third round)\n[…]\nSergi Bruguera (Final);  \">\n[…]\nSergi Bruguera (Final)\n[…]\nNa época, Kuerten era o primeiro jogador sem Seeds desde Mats Wilander em 1982, o segundo jogador com a classificação mais baixa a vencer um torneio de Grand Slam e o primeiro brasileiro. Como resultado, Kuerten subiu para o número 15 no ranking após sua vitória. Yevgeny Kafelnikov foi o atual campeão, mas foi derrotado por Kuerten nas quartas de final.\n[…]\nSorteio de singulares masculinos do Aberto da França de 1997 - Association of Tennis Professionals (ATP)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Andre Agassi",
      "descricao": "Ex-tenista americano, ex-número 1 do mundo e campeão de oito torneios de Grand Slam."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na autobiografia Open, Andre Agassi contou que jogou a final de Roland Garros de 1990 com medo de perder o quê?",
    "resposta": "A peruca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Open_(Agassi_autobiography)",
      "https://en.wikipedia.org/wiki/Andre_Agassi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Open_(Agassi_autobiography)",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Andre_Agassi",
        "situacao": "ok",
        "texto": "Andre Kirk Agassi (  AG-ə-see; born April 29, 1970) is an American former professional tennis player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for 101 weeks, including as the year-end No. 1 in 1999. Agassi won 60 ATP Tour-level singles titles, including eight majors, an Olympic gold medal, the 1990 ATP Tour World Championships, and 17 Maste\n[…]\nThe 1990 US Open was their first meeting in a Grand Slam tournament final. Agassi lost the final to Sampras in straight sets. Their next Grand Slam meeting was at the 1992 French Open, where they met in the quarterfinals. Agassi prevailed in straight sets. Their next Grand Slam meeting was at the quarterfinals of Wimbledon in 1993, where Agassi was the defending champion and Sampras was the newly minted No. 1. Sampras prevailed in five sets.\n[…]\nIn a highly anticipated rematch in the US Open semi-final, this time it was Agassi who came out victorious in four tight sets. Their final match was played at Hong Kong in 1999, which Agassi won in three sets.\n[…]\nIn mid-2003, he was named the spokesman of Aramis Life, a fragrance by Aramis, and signed a five-year deal with the company. In March 2004, he signed a ten-year agreement worth $1.5 million a year with 24 Hour Fitness, which will open five Andre Agassi fitness centers by year-end.\n[…]\nAgassi's autobiography, Open: An Autobiography, (written with assistance from J. R. Moehringer), was published in November 2009. In it, Agassi talks about his childhood and his unconventional Armenian father, who came to the United States from Iran, where he was a professional boxer.\n[…]\nWimbledon 2000 Semi-final – Agassi vs. Rafter (2003) Starring: Andre Agassi, Patrick Rafter; Standing Room Only, DVD Release Date: August 16, 2005, Run Time: 213 minutes, OCLC 61774054.\n[…]\nAgassi, Andre (2010). Open: An Autobiography. London: Vintage. ISBN 978-0-307-38840-7."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Rufus (gavião)",
      "descricao": "Gavião-asa-de-telha usado no complexo de Wimbledon para afastar pássaros das quadras."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Wimbledon, um gavião chamado Rufus sobrevoa as quadras nas manhãs do torneio. Qual é a função dele?",
    "resposta": "Espantar os pombos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rufus_(hawk)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rufus_(hawk)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Roland Garros de 2001 (simples masculino)",
      "descricao": "Torneio de simples masculino do Aberto da França de 2001, o terceiro título de Gustavo Kuerten."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Roland Garros 2001, depois de salvar um match point contra o americano Michael Russell, o que Guga desenhou com a raquete no saibro?",
    "resposta": "Um coração",
    "fonte": [
      "https://en.wikipedia.org/wiki/2001_French_Open_%E2%80%93_Men%27s_singles",
      "https://pt.wikipedia.org/wiki/Gustavo_Kuerten"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2001_French_Open_%E2%80%93_Men%27s_singles",
        "situacao": "ok",
        "texto": "Defending champion Gustavo Kuerten defeated Àlex Corretja in the final, 6–7(3–7), 7–5, 6–2, 6–0 to win the men's singles tennis title at the 2001 French Open. It was his third French Open title and his third and last major title overall. Kuerten saved a match point en route to the title, against Michael Russell in the fourth round.\n[…]\nOfficial Roland Garros 2001 Men's Singles Draw\n[…]\n2001 French Open – Men's draws and results at the International Tennis Federation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gustavo_Kuerten",
        "situacao": "ok",
        "texto": "Gustavo \"Guga\" Kuerten (Florianópolis, 10 de setembro de 1976) é um ex-tenista profissional brasileiro, condecorado com posição no Hall da Fama da Associação de Tenistas Profissionais (ATP). Tricampeão de Roland-Garros, é considerado o maior tenista masculino da história do Brasil. É o único tenista da história a ganhar de Pete Sampras e Andre Agassi no mesmo torneio.\n[…]\nOs anos de 2000, quando terminou como número um, e de 2001, quando terminou como número dois, representaram o auge da carreira do tenista catarinense. Em ambos, Guga sagrou-se campeão de seu torneio predileto, Roland-Garros, assim como venceu todos os grandes tenistas da época e alguns mitos, como Pete Sampras e Andre Agassi.\n[…]\nNa temporada de saibro, foi finalista do Masters de Roma perdendo para Magnus Norman, venceu o Masters de Hamburgo derrotando Marat Safin na final e foi bicampeão de Roland-Garros vencendo o sueco Magnus Norman na final, que havia perdido apenas um set durante toda a competição. Ao conquistar o seu segundo título em Paris, Guga alcançou, pela primeira vez na carreira, a liderança da Corrida dos Campeões.\n[…]\nEm 2001 conquistou dois ATPs em fevereiro, o de Buenos Aires e o de Acapulco, ambos no saibro. Foi campeão do Masters de Monte Carlo e, depois, vice-campeão do Masters de Roma, perdendo para Juan Carlos Ferrero na final por 3 sets a 2. Em Roland-Garros se tornou tricampeão derrotando os espanhóis Ferrero na semi e Alex Corretja na final.\n[…]\nGuga anunciou sua aposentadoria em 12 de fevereiro de 2008, em entrevista exclusiva ao Globo Esporte, da Rede Globo. Antes, porém, fez uma espécie de turnê de despedida onde participou de alguns dos principais torneios do circuito mundial como o Brasil Open, o Challenger de Florianópolis, e os Masters Series de Miami, Monte Carlo e, por fim, Roland-Garros, lugar que consagrou o catarinense.\n[…]\nGuga no Lance"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "US Open",
      "descricao": "Torneio de Grand Slam de tênis disputado em Nova York, o último da temporada."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Entre 1975 e 1977, antes de se mudar para Flushing Meadows, o US Open foi disputado em qual tipo de piso?",
    "resposta": "Saibro",
    "distratores": [
      "Grama",
      "Carpete",
      "Quadra dura"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/US_Open_(tennis)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/US_Open_(tennis)",
        "situacao": "ok",
        "texto": "The US Open Tennis Championships, commonly called the US Open (stylized in all lowercase), is a hardcourt tennis tournament organized by the United States Tennis Association annually in Queens, New York City. It is chronologically the fourth and final of the four Grand Slam tennis events, held after the Australian Open, French Open, and Wimbledon.\n[…]\nThe tournament consists of five primary championships: men's and women's singles, men's and women's doubles, and mixed doubles. The tournament also includes events for senior, junior, and wheelchair players. Since 1978, the tournament has been played on acrylic hardcourts at the USTA Billie Jean King National Tennis Center in Flushing Meadows–Corona Park, Queens, New York City. Revenue from ticket sales, sponsorships, and television contracts is used to develop tennis in the United States.\n[…]\nIn 1973, the US Open became the first Grand Slam tournament to award equal prize money to men and women, with that year's singles champions, John Newcombe and Margaret Court, receiving $25,000 each. Beginning in 1975, following complaints about the surface and its impact on the ball's bounce, the tournament was played on clay courts instead of grass. This was also an experiment to make it more \"TV friendly\". The addition of floodlights allowed matches to be played at night.\n[…]\nIn 1978, the tournament moved from the West Side Tennis Club to the larger and newly constructed USTA National Tennis Center in Flushing Meadows, Queens, 3 miles (4.8 km) to the north. The tournament's court surface also switched from clay to hardcourt. Jimmy Connors is the only individual to have won US Open singles titles on all three surfaces (grass, clay, and hardcourt), while Chris Evert is the only woman to have won US Open singles titles on two surfaces (clay and hardcourt).\n[…]\nList of US Open women's doubles champions"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/US_Open_%28t%C3%AAnis%29",
        "situacao": "ok",
        "texto": "US Open (ou Aberto dos Estados Unidos / Open dos Estados Unidos), nomeado formalmente como \"United States Open Tennis Championships\", é um torneio de tênis disputado nos Estados Unidos. O US Open é a encarnação moderna do antigo U.S. National Championship, sendo este um dos mais antigos torneios de tênis do mundo, cujo torneio masculino ocorreu pela primeira vez em 1881. Desde 1987, o US Open é cr\n[…]\nDesde 1978, vem ocorrendo nas quadras do USTA Billie Jean King National Tennis Center em Flushing Meadows, no Queens, na cidade de Nova Iorque.\n[…]\nO primeiro campeonato dos EUA aconteceu em 1881 e é disputado em agosto, em Newport, Rhode Island. O simples feminino foi disputado pela primeira vez em 1887. Em 1903, Lawrence Doherty foi o primeiro estrangeiro a vencer o torneio. Em 1919, o torneio foi transferido para a cidade de Nova York e, em 1926, o francês René Lacoste, tornou-se o primeiro estrangeiro não falante do inglês a triunfar no US Open.\n[…]\nO torneio foi disputado em quadras de grama até 1974 e em saibro verde entre 1975 e 1977. Em 1997, o estádio Arthur Ashe é inaugurado, podendo acolher 23.500 espectadores, o maior do mundo. Junto com o Australian Open, o Torneio de Roland Garros e o Torneio de Wimbledon, o US Open compõe os quatro torneios do Grand Slam. O US Open é o quarto e último torneio do Grand Slam da temporada. Ele é disputado em superfície dura (\"Decoturf\").\n[…]\nEm 1978 o torneio mudou-se do West Side Tennis Club, Forest Hills, Queens para o USTA National Tennis Center em Flushing Meadows, Queens, no processo de mudança do piso de saibro — que tinha sido usado nos últimos três anos em Forest Hills — para a quadra de cimento, conhecida como “dura” ou “rápida”. Jimmy Connors foi o primeiro tenista a ganhar nas três superfícies do evento (grama, saibro e dura), enquanto Chris Evert a única mulher a ganhar em duas superfícies (saibro e dura).",
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
