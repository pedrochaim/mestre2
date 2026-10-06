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
      "nome": "Cortada",
      "descricao": "Ataque do vôlei em que o jogador salta e golpeia a bola de cima para baixo na quadra adversária."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Por volta de 1916, a jogada de levantar a bola alto para um companheiro atacar de cima para baixo teria surgido em que país asiático?",
    "resposta": "Filipinas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball",
        "situacao": "ok",
        "texto": "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the program at the Atlanta 1996 Summer Olympics. The adapted version of volleyball at the Su\n[…]\nThe first official ball used in volleyball is disputed; some sources say Spalding created the first official ball in 1896, while others claim it was created in 1900. The rules evolved over time: in 1916, in the Philippines, the skill and power of the set and spike had been introduced, and four years later a \"three hits\" rule and a rule against hitting from the back row were established. In 1917, the game was changed from requiring 21 points to win to a smaller 15 points to win.\n[…]\nA 'bounce' is a slang term for a very hard/loud spike that follows an almost straight trajectory steeply downward into the opponent's court and bounces very high into the air. A \"kill\" is the slang term for an attack that is not returned by the other team thus resulting in a point.\n[…]\nTool/Wipe/Block-abuse: the player does not try to make a hard spike, but hits the ball so that it touches the opponent's block and then bounces off-court.\n[…]\nDigging is the ability to prevent the ball from touching one's court after a spike or attack, particularly a ball that is nearly touching the ground. In many aspects, this skill is similar to passing, or bumping: overhand dig and bump are also used to distinguish between defensive actions taken with fingertips or with joined arms. It varies from passing, however, in that it is a much more reflex-based skill, especially at the higher levels."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol",
        "situacao": "ok",
        "texto": "Voleibol, também conhecido pelas formas reduzidas vôlei (português brasileiro) e vólei (português europeu), é um esporte praticado numa quadra dividida em duas partes por uma rede, possuindo duas equipes de seis jogadores em cada lado. O voleibol foi originalmente chamado de Mintonette, devido à sua semelhança com o Badminton. Ele também tem alguns elementos de tênis e handebol e até beisebol porq\n[…]\nPor fim, o líbero só pode realizar levantamentos de toque do fundo da quadra. Caso esteja pisando sobre a linha de três metros ou sobre a área por ela delimitada, deverá exercitar somente levantamentos de manchete, pois se o fizer de toque por cima (pontas dos dedos) o ataque deverá ser executado com a bola abaixo do bordo superior da rede.\n[…]\nSaque por baixo ou por cima: indica a forma como o saque é realizado, ou seja, se o jogador acerta a bola por baixo, no nível da cintura, ou primeiro lança-a no ar para depois acertá-la acima do nível do ombro. A recepção do saque por baixo é usualmente considerada muito fácil, e por esta razão esta técnica não é mais utilizada em competições de alto nível.\n[…]\nAtaque sem força: o jogador acerta a bola mas reduz a força e consequentemente sua aceleração, numa tentativa de confundir a defesa adversária.\n[…]\nO bloqueio refere-se às ações executadas pelos jogadores que ocupam a parte frontal da quadra (posições 2-3-4) e que têm por objetivo impedir ou dificultar o ataque da equipe adversária. Elas consistem, em geral, em estender os braços acima do nível da rede com o propósito de interceptar a trajetória ou diminuir a velocidade de uma bola que foi cortada pelo oponente.\n[…]\nA defesa consiste em um conjunto de técnicas que têm por objetivo evitar que a bola toque a quadra após o ataque adversário. Além da manchete e do toque, já discutidos nas seções relacionadas ao passe e ao levantamento, algumas das ações específicas que se aplicam a este fundamento são:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Brasil x União Soviética no Maracanã em 1983",
      "descricao": "Partida amistosa de vôlei masculino disputada ao ar livre no estádio do Maracanã em julho de 1983, diante de mais de noventa mil pessoas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1983, Brasil e União Soviética jogaram uma partida de vôlei ao ar livre, diante de mais de noventa mil pessoas. Em que estádio?",
    "resposta": "Maracanã",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Brasileira_de_Voleibol_Masculino",
      "https://pt.wikipedia.org/wiki/Bernard_Rajzman"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Brasileira_de_Voleibol_Masculino",
        "situacao": "ok",
        "texto": "A seleção brasileira de voleibol masculino é a seleção nacional de voleibol adulta profissional brasileira, organizada e gerenciada pela Confederação Brasileira de Voleibol (CBV). Sua estreia em competições internacionais foi no Campeonato Sul-Americano de 1951, antes mesmo da fundação da CBV. Seus resultados esportivos começaram a aparecer de forma consistente na década de 1980, que configurou o \n[…]\nNos Jogos Pan-Americanos, o Brasil é penta-campeão, tendo conquistado cinco medalhas de ouro (1963, 1983, 2007, 2011 e 2023),\n[…]\nEntre os eventos promocionais, uma partida entre o Brasil e a URSS, então a melhor seleção do mundo, no Maracanã, pode ser considerada um evento histórico do voleibol nacional. Estes resultados só foram possíveis graças a uma revolução tática, através da introdução de bolas atacadas atrás da linha dos três, que eram realizadas de modo sistemático e executadas com maior velocidade do que as realizadas esporadicamente por algumas equipes do mundo mais consistentes.\n[…]\nAdotando este estilo de jogo, o Brasil começou a ter equipes fortes e também a exportar jogadores para todo o mundo.\n[…]\nEm 5 de janeiro de 2008, a seleção já aparecia com 260 pontos (60.5 pontos a mais que o segundo colocado, a Rússia), a maior pontuação da história do Brasil no ranking da FIVB até aquele momento. Bernardinho assumiu o comando da seleção masculina em 2001 e, em 18 de agosto de 2010, somava 331 partidas, com 299 vitórias e 32 derrotas.\n[…]\nA seleção masculina de voleibol do Brasil possui os dois recordes mundiais de público na história do voleibol. Em 26 de julho de 1983, no estádio do Maracanã, no Rio de Janeiro, 95.887 pagantes viram O Grande Desafio de Vôlei – Brasil X URSS, uma partida amistosa na qual o Brasil derrotou a então campeã olímpica e mundial, União Soviética, por 3-1, num recorde absoluto da história do esporte.\n[…]\nO Grande Desafio de Vôlei – Brasil X URSS"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bernard_Rajzman",
        "situacao": "ok",
        "texto": "Bernard Rajzman ComMM (Rio de Janeiro, 25 de abril de 1957) é um ex-jogador de voleibol brasileiro.\n[…]\nFilho de um judeu polonês fugitivo de um campo de concentração vindo ao Brasil a passeio e de uma francesa expatriada no Brasil, aos onze anos de idade, entrou para o Fluminense jogando basquete, mas passou para o voleibol devido a sua baixa estatura. Estreou com dezessete anos na Seleção Brasileira e foi um dos grandes nomes da denominada Geração de Prata. Participou de três Olimpíadas: Montreal (1976), Moscou (1980) e Los Angeles (1984).\n[…]\nAtualmente, Bernard Rajzman é membro do Comitê Olímpico Brasileiro, membro da Câmara Setorial dos Esportes (Coordenador do Desenvolvimento Esportivo), Presidente da Comissão Nacional de Atletas e Subsecretário do Pan-Americano Rio (2007).\n[…]\nEm 27 outubro de 2005, foi o primeiro brasileiro indicado para integrar o Hall da Fama do vôlei mundial em Massachusetts, Estados Unidos.\n[…]\nCampeão Sul-americano: 1973, 1975, 1977, 1981, 1983 e 1987\n[…]\nVice-campeão Mundial de Vôlei: 1982\n[…]\nMedalha de Ouro no Pan-Americano: 1983\n[…]\nVice-Campeonato Mundial de Vôlei de Praia: 1988\n[…]\nSeu filho, Phil Rajzman, é campeão mundial de surf, na categoria Longboard. Seu filho mais novo, Bernardo Rajzman, é jogador de basquete"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Mikasa",
      "descricao": "Fabricante japonesa de artigos esportivos, conhecida pelas bolas de vôlei usadas em competições olímpicas."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A Mikasa, marca das bolas amarelas e azuis vistas nas Olimpíadas de vôlei, é de que país?",
    "resposta": "Japão",
    "distratores": [
      "Coreia do Sul",
      "Alemanha",
      "Estados Unidos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mikasa_Sports"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mikasa_Sports",
        "situacao": "ok",
        "texto": "Mikasa Corporation (株式会社 ミカサ, Kabushiki Kaisha Mikasa) is a Japanese sports equipment and athletic goods company with its international corporate headquarters located in Nishi-ku, Hiroshima, Chūgoku. Specializing in equipment for ball games, the balls manufactured by Mikasa for sports football, Korfball, basketball, volleyball, waterpolo and handball are often used for official matches, games and \n[…]\nMikasa was founded in 1917 as the Hiroshima Gomu Corporation (\"Hiroshima Rubber Corporation\"). The company began its life producing many different types of rubber products, such as flip-flops and dodgeballs. It began using the Mikasa brand name on its sports products in 1935, and in the early 1940s was consolidated with a number of rival rubber companies.\n[…]\nFollowing World War II, the company grew rapidly: Mikasa volleyballs made their Olympic debut at the 1964 Tokyo Olympics, and in the 1970s the company began to expand globally. Since 1980, Mikasa has also produced the official Olympic water polo ball.\n[…]\nThe ITUC argued that Mikasa succeeded in either forcing the resignation of most of the factory's union committee in an affront to the right of its employees to organize. The Thai Labor Campaign alleged that new Mikasa factory workers received only 173 baht per day. (equivalent to $4.36 per day in 2006)\n[…]\nMikasa makes many different types of balls, including goods for basketball, beach and indoor volleyball, football, rugby union, waterpolo, korfball, American football and rugby football (the last two are available solely in the United States).\n[…]\nSports sponsor factbook, Team Marketing Report, Inc., 1999, p. 623.\n[…]\nAmerican Commercial Inc. d/b/a Mikasa and Mikasa Licensing, Inc. v. Sports and Leisure International d/b/a Mikasa Sports, Civil Action No. 96–713LHM (U.S.D.C. C.D. Cal.)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mikasa_Sports",
        "situacao": "ok",
        "texto": "Mikasa Corporation (株式会社 ミカサ, Kabushiki Kaisha Mikasa), é uma empresa japonesa de equipamentos esportivos e artigos esportivos com sede corporativa internacional localizada em Nishi-ku, Hiroshima, Chūgoku. Especializada em equipamentos para jogos com bola, as bolas fabricadas pela Mikasa para modalidades esportivas de futebol, corfebol, basquete, vôlei, polo aquático e handebol são frequentemente \n[…]\nMais notavelmente, as bolas de vôlei Mikasa são as bolas oficiais para todas as competições mundiais da Fédération Internationale de Volleyball (Federação Internacional de Voleibol) e várias ligas domésticas fora da América do Norte. A bola de vôlei Mikasa é a bola oficial das Olimpíadas . Atualmente, clubes, regiões, escolas secundárias, faculdades e torneios nos Estados Unidos usam as bolas de vôlei Mikasa.\n[…]\nA Mikasa foi fundada em 1917 como Hiroshima Gomu Corporation. A empresa começou sua vida produzindo diversos tipos de produtos de borracha, como chinelos e bolas de queimada. Começou a usar a marca Mikasa em seus produtos esportivos em 1935 e, no início da década de 1940, consolidou-se com várias empresas rivais de borracha.\n[…]\nApós a Segunda Guerra Mundial, a empresa cresceu rapidamente: as bolas de vôlei Mikasa fizeram sua estreia olímpica nas Olimpíadas de Tóquio em 1964 e, na década de 1970, a empresa começou a se expandir globalmente. Desde 1980, a Mikasa também produz a bola oficial de pólo aquático olímpico.\n[…]\nA Mikasa fabrica muitos tipos diferentes de bolas, incluindo produtos para basquete, vôlei de praia e de salão, futebol, rugby, waterpolo, korfball, futebol americano e rugby football . (Os dois últimos estão disponíveis apenas nos Estados Unidos )\n[…]\nAmerican Commercial Inc. d/b/a Mikasa e Mikasa Licensing, Inc. v. Sports and Leisure International d/b/a Mikasa Sports, Ação Civil No. 96–713LHM (USDCCD Cal. ).\n[…]\nMikasa USA",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Centro de Desenvolvimento de Voleibol",
      "descricao": "Centro de treinamento das seleções brasileiras de vôlei, mantido pela Confederação Brasileira de Voleibol no litoral do Rio de Janeiro."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O centro de treinamento das seleções brasileiras de vôlei, onde se preparam as equipes olímpicas, fica em que cidade do litoral fluminense?",
    "resposta": "Saquarema",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Saquarema",
      "https://pt.wikipedia.org/wiki/Confedera%C3%A7%C3%A3o_Brasileira_de_Voleibol"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Saquarema",
        "situacao": "ok",
        "texto": "Saquarema (tupi: Socó-rema, «socó fedorento»)? é um município brasileiro do estado do Rio de Janeiro, contíguo à Região Metropolitana do Rio de Janeiro, localizado na região das Baixadas Litorâneas, mais precisamente, na Região dos Lagos. Sua população estimada em 2022 era de 89.559 habitantes, segundo o IBGE.\n[…]\nEm 17 de março de 1531, a expedição de Martim Afonso de Sousa atracou em frente ao Morro de Saquarema.\n[…]\nA primeira capela no Morro de Saquarema foi construída por volta de 1660 pelo casal Manoel de Aguillar Moreira e Catarina de Lemos, e era ligada a Matriz de Nossa Senhora da Assumpção de Cabo Frio. A capela foi demolida para a construção, em 1675, da atual Igreja Matriz de Nossa Senhora de Nazareth de Saquarema.\n[…]\nRJ-128 - Av. Saquarema/Estrada do Palmital\n[…]\nOs últimos trens de passageiros e de cargas circularam pela cidade no dia 16 de janeiro de 1962, desativando o trecho que atravessava o município. Em 1966, a linha férrea foi erradicada de Saquarema, o que ocasionou prejuízos econômicos à região posteriormente.\n[…]\nO principal destaque esportivo da cidade é no surfe, sendo que, por causa do porte e qualidade das ondas, Saquarema é considerada pelos praticantes como a \"Capital Nacional do Surfe\".\n[…]\nO cantor Serguei tinha sua residência em Saquarema, a qual chamava de Templo do Rock. A casa, que foi construída por Russell Wid Coffin, era mantida como museu pelo cantor.\n[…]\nApós a morte de Serguei, a Secretaria de Comunicação de Saquarema avisou que \"o local ficará designado à Secretaria Municipal de Educação e Cultura para coordenar as ações de preservação, mantendo-o como patrimônio cultural do município, levando a história de Serguei e do Rock brasileiro para as futuras gerações\"..\n[…]\nVista aérea de Saquarema no WikiMapia.\n[…]\nMapa de Saquarema no OpenStreetMap."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Confedera%C3%A7%C3%A3o_Brasileira_de_Voleibol",
        "situacao": "ok",
        "texto": "Confederação Brasileira de Voleibol (CBV) é a entidade máxima do Voleibol e Voleibol de praia no Brasil. É responsável pela organização de campeonatos nacionais, como a Superliga (masculina e feminina), e administração das seleções nacionais. A entidade é filiada ao Comitê Olímpico do Brasil (COB) e à Confederação Sul-Americana de Voleibol (CSV). A sede está localizada na Barra da Tijuca, Rio de J\n[…]\nUm dos maiores legados de Ary Graça no voleibol foi a implantação do CDV - Centro de Desenvolvimento do Voleibol, em Saquarema, um dos mais modernos centros de treinamentos do mundo, referência para outras modalidades, e talvez o ingrediente principal nas conquistas de medalhas e títulos em cadeia desde 2001, ano de sua idealização. A inauguração do CDV foi em agosto de 2003. O sucesso de Ary Graça no Brasil credenciou o mandatário do voleibol a vencer as eleições da FIVB em 2012.\n[…]\nDesde março de 2014, Walter Pitombo Laranjeiras é o presidente da CBV. Ele assumiu depois da renúncia de Ary Graça e que envolveu uma série de reportagens sobre contratos de acompanhamento de patrocínios dentro da CBV. Toroca, como é conhecido no meio do voleibol, é presidente da Federação Alagoana de Voleibol, e instituiu um novo organograma da entidade, com uma equipe de gestão que conduzirá o vôlei brasileiro até os Jogos Olímpicos do Rio de Janeiro, em 2016.\n[…]\nA CBV organiza diversos campeonatos nacionais ao longo de uma temporada. As categorias de base, como a \"juvenil\" e a \"infanto\", disputam o Campeonato Brasileiro de Seleções, com uma disputa entre estados, em alguns casos com três divisões. Para a categoria \"master\" é realizado o Vôlei Master, competição para jogadores distribuídos por idade.\n[…]\nSeleção Brasileira de Voleibol Masculino\n[…]\nSeleção Brasileira de Voleibol Feminino\n[…]\nComitê Olímpico Brasileiro\n[…]\nConfederação Sul-Americana de Voleibol\n[…]\nFederação Internacional de Voleibol"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Emanuel Rego",
      "descricao": "Ex-jogador brasileiro de vôlei de praia, campeão olímpico com Ricardo em Atenas 2004."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Campeão olímpico de vôlei de praia em Atenas 2004, Emanuel Rego é natural de que capital do Sul do país?",
    "resposta": "Curitiba",
    "fonte": [
      "https://en.wikipedia.org/wiki/Emanuel_Rego",
      "https://pt.wikipedia.org/wiki/Emanuel_Rego"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Emanuel_Rego",
        "situacao": "ok",
        "texto": "Emanuel Fernando Sheffer Rego (born 15 April 1973) is a Brazilian male former beach volleyball player who competed in five consecutive Summer Olympics, starting in 1996. Rego partnered with José Loiola at the 2000 Summer Olympics in Sydney, though they did not medal. He won the gold medal in the men's beach team competition at the 2004 Summer Olympics in Athens, partnering with Ricardo Santos.\n[…]\nIn 2016, Rego was inducted into the International Volleyball Hall of Fame. He was the Brazilian flagbearer at the 2016 Summer Olympics in Rio de Janeiro.\n[…]\nRego famously offered his medal to his compatriot Vanderlei de Lima – who won the bronze in the men's marathon after being attacked by Neil Horan – a year later, though it was politely declined.\n[…]\nRego was born in Curitiba, and is married (2013) to volleyball Olympic medallist and Senator Leila Barros.\n[…]\nEmanuel Rego at FIVB.com\n[…]\nEmanuel Rego at the Beach Volleyball Database\n[…]\nEmanuel Rego at Olympedia\n[…]\nEmanuel Rego at Olympics.com Emanuel Rego at Olympic.org (archived)\n[…]\nEmanuel Rego at the Comitê Olímpico do Brasil  (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Emanuel_Rego",
        "situacao": "ok",
        "texto": "Emanuel Fernando Scheffer Rego (Curitiba, 15 de abril de 1973) é um ex-jogador brasileiro de vôlei de praia. Competiu em cinco Jogos Olímpicos seguidos, formando dupla com o jogador Ricardo em duas delas e com Alison Cerutti na última. Participou das Olimpíadas de Atlanta 1996, Sydney 2000, Atenas 2004, Pequim 2008 e Londres 2012.\n[…]\nEmanuel começou a carreira no vôlei indoor, defendendo o Curitibano, no Paraná. Em 1991, passou a jogar paralelamente vôlei de praia, pelo qual optou definitivamente para se transformar em um dos jogadores mais vitoriosos de todos os tempos. Foi dez vezes campeão do Circuito Mundial, oito vezes campeão do Circuito Brasileiro e venceu o Campeonato Mundial em três temporadas.\n[…]\nEsteve presente nas cinco primeiras edições dos Jogos Olímpicos que contaram com o torneio de vôlei de praia (Atlanta 1996, Sydney 2000, Atenas 2004, Pequim 2008 e Londres 2012), conquistando ouro, bronze e prata, respectivamente, nas três últimas. Emanuel foi eleito pela Federação Internacional de Voleibol (FIVB) o melhor jogador da década de 1990. Em 2002, passou a atuar com Ricardo, com quem formou a mais vitoriosa parceria do país.\n[…]\nApós encerrar sua vitoriosa carreira no vôlei de praia, Emanuel Rego consolidou sua transição para a gestão esportiva com formação acadêmica em Educação Física e Administração com foco em Marketing. Entre 2017 e 2019, atuou como Diretor Executivo de Esportes Olímpicos do Fluminense Football Club.\n[…]\nEm 2004, Emanuel ofereceu publicamente a sua medalha de ouro para o maratonista Vanderlei Cordeiro de Lima, que recebeu apenas o bronze após ser atacado durante a prova de Atenas; contudo, este agradeceu e recusou o prêmio emocionado.\n[…]\nEleito Prêmio Brasil Olímpico Vôlei de Praia (COB - 2003, 2004 e 2011)\n[…]\nRei da Praia (2004, 2005 e 2008)\n[…]\nEleito 'Vulto Emerito' da Cidade de Curitiba (2003)"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Duda Lisboa",
      "descricao": "Jogadora brasileira de vôlei de praia, campeã olímpica com Ana Patrícia em Paris 2024."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A campeã olímpica de vôlei de praia Duda Lisboa, ouro em Paris 2024, nasceu em que capital nordestina?",
    "resposta": "Aracaju",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eduarda_Santos_Lisboa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eduarda_Santos_Lisboa",
        "situacao": "ok",
        "texto": "Eduarda \"Duda\" dos Santos Lisboa (Brazilian Portuguese pronunciation: [eduˈaʁdɐ ˈdudɐ dus ˈsɐ̃tus lizˈboɐ]; born 1 August 1998) is a Brazilian beach volleyball player. She is the gold medalist at the 2024 Summer Olympics. She is also a two-time U21 World champion (2016, 2017) and three-time U19 World champion (2013, 2014, 2016). She has won four World Tour events and reached thirteen podiums in th\n[…]\nDuda plays as a right-side defender.\n[…]\nMedia related to Eduarda Santos Lisboa at Wikimedia Commons\n[…]\nEduarda Santos Lisboa at FIVB.com\n[…]\nEduarda Santos Lisboa at Beach Volleyball Database\n[…]\nEduarda Santos Lisboa at Olympics.com\n[…]\nEduarda Santos Lisboa at the Brazilian Olympic Committee (in Portuguese)\n[…]\nEduarda Santos Lisboa at Olympedia\n[…]\nEduarda Santos Lisboa at InterSportStats\n[…]\nDuda at Confederação Brasileira de Voleibol (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Duda_Lisboa",
        "situacao": "ok",
        "texto": "Eduarda dos Santos \"Duda\" Lisboa, (Aracaju, 1 de agosto de 1998) é uma voleibolista brasileira praticante da modalidade de vôlei de praia.\n[…]\nA trajetória de Duda no voleibol  de praia ocorreu precocemente, seguindo sua mãe Cida Lisboa, que disputou a modalidade e depois foi treinadora, e com apenas 9 anos entrou no esporte. Destacando-se na modalidade, sua mãe a inscreveu na décima sexta etapa de Aracaju  válida pelo Grupo 1 do Circuito Estadual de Vôlei de Praia em 2011, terminando na quinta colocação e  sua mãe em terceiro, sendo que Duda competiu na referida ocasião ao lado de Mônica Silva.\n[…]\nCom Elize Maia alcançou a quinta colocação na etapa de Campo Grande pelo Circuito Brasileiro de Vôlei de Praia Open 2016-17, no mesmo circuito alcançou a décima terceira posição com Tainá Bigi na etapa de Brasília e com esta atleta conquistou o bronze na etapa de Uberlândia, o quinto lugar na etapa de Curitiba; e visando o novo ciclo olímpico formou dupla com Ágatha Bednarczuk e tendo como técnica Letícia Pessoa na etapa de João Pessoa e nesta ocasião conquistou o título, foram vice-campeãs na etapa de Maceió e também em Aracaju e finalizando com o bronze na etapa de Vitória, juntas ainda sagraram-se campeãs da edição do Superpraia de 2017 em Niterói.\n[…]\nEm 2024, ao lado de Ana Patrícia, conquistou o ouro nos Jogos Olímpicos de Verão de 2024 em Paris.\n[…]\nDesafio Gigantes da Praia de 2017\n[…]\nEtapa de Aracaju do Circuito Brasileiro de Vôlei de Praia Open:2017-18\n[…]\nEtapa de Aracaju do Circuito Brasileiro de Vôlei de Praia Open:2016-17\n[…]\nEtapa de Aracaju do Circuito Brasileiro de Vôlei de Praia Sub-23:2013\n[…]\nDuda Lisboa em Olympics.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Vôlei de praia nos Jogos Olímpicos de 2000",
      "descricao": "Torneios olímpicos de vôlei de praia disputados em Sydney, na Austrália, em 2000."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A arena do vôlei de praia dos Jogos de Sydney, em 2000, foi montada na areia de que praia famosa da cidade?",
    "resposta": "Bondi",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2000_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2000_Summer_Olympics",
        "situacao": "ok",
        "texto": "At the 2000 Summer Olympics, four volleyball events were contested – men's and women's indoor volleyball, and men's and women's beach volleyball.\n[…]\nVolleyball Archived 3 March 2016 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2000",
        "situacao": "ok",
        "texto": "O voleibol nos Jogos Olímpicos de Verão de 2000 foi realizado na cidade de Sydney na Austrália, tendo como campeões a Iugoslávia no masculino e Cuba no feminino.\n[…]\nDois eventos da modalidade distribuíram medalhas nos Jogos:\n[…]\nFoi permitido para cada Comitê Olímpico Nacional (CON) competir com apenas um time em cada torneio (masculino e feminino). Como país-sede, a Austrália teve garantida uma vaga em cada um dos torneios.\n[…]\nA Iugoslávia foi campeã olímpico de voleibol masculino pela primeira vez, derrotando a Rússia na final. A Itália ganhou o bronze frente à Argentina. No feminino, Cuba superou as russas para ganhar a medalha de ouro e seu terceiro título consecutivo no torneio, enquanto a seleção do Brasil foi bronze ao derrotar os Estados Unidos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Vôlei de praia nos Jogos Olímpicos de 2000",
      "descricao": "Torneios olímpicos de vôlei de praia disputados em Sydney, na Austrália, em 2000."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em Sydney 2000, uma dupla brasileira chegou à final olímpica do vôlei de praia feminino, mas perdeu. Jogadoras de que país levaram o ouro?",
    "resposta": "Austrália",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2000_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2000_Summer_Olympics",
        "situacao": "ok",
        "texto": "At the 2000 Summer Olympics, four volleyball events were contested – men's and women's indoor volleyball, and men's and women's beach volleyball.\n[…]\nVolleyball Archived 3 March 2016 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2000",
        "situacao": "ok",
        "texto": "O voleibol nos Jogos Olímpicos de Verão de 2000 foi realizado na cidade de Sydney na Austrália, tendo como campeões a Iugoslávia no masculino e Cuba no feminino.\n[…]\nDois eventos da modalidade distribuíram medalhas nos Jogos:\n[…]\nTorneio feminino (12 equipes)\n[…]\nFoi permitido para cada Comitê Olímpico Nacional (CON) competir com apenas um time em cada torneio (masculino e feminino). Como país-sede, a Austrália teve garantida uma vaga em cada um dos torneios.\n[…]\nFeminino\n[…]\nA Iugoslávia foi campeã olímpico de voleibol masculino pela primeira vez, derrotando a Rússia na final. A Itália ganhou o bronze frente à Argentina. No feminino, Cuba superou as russas para ganhar a medalha de ouro e seu terceiro título consecutivo no torneio, enquanto a seleção do Brasil foi bronze ao derrotar os Estados Unidos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Vôlei de praia nos Jogos Olímpicos de 2012",
      "descricao": "Torneios olímpicos de vôlei de praia disputados em Londres em 2012."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em Londres 2012, a arena do vôlei de praia ocupou um tradicional pátio de desfiles militares no centro da cidade. Qual?",
    "resposta": "Horse Guards Parade",
    "distratores": [
      "Hyde Park",
      "Trafalgar Square",
      "Greenwich Park"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2012_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2012_Summer_Olympics",
        "situacao": "ok",
        "texto": "The volleyball tournaments at the 2012 Olympic Games in London were played between 28 July and 12 August.\n[…]\nThe indoor volleyball competition took place at Earls Court Exhibition Centre, in west London, and the beach volleyball tournament was held at Horse Guards Parade in central London.\n[…]\nIndoor volleyball – men (12 teams)\n[…]\nIndoor volleyball – women (12 teams)\n[…]\nBeach volleyball – men (24 teams)\n[…]\nBeach volleyball – women (24 teams)\n[…]\nEach National Olympic Committee was allowed to enter one men's and one women's qualified team in the volleyball tournaments and two men's and two women's qualified teams in the beach volleyball.\n[…]\nMedia related to Volleyball at the 2012 Summer Olympics at Wikimedia Commons Media related to Beach volleyball at the 2012 Summer Olympics at Wikimedia Commons\n[…]\nVolleyball at the 2012 Summer Olympics. London2012.com. at the UK Government Web Archive (archived 28 February 2013)\n[…]\nBeach Volleyball at the 2012 Summer Olympics. London2012.com. at the UK Government Web Archive (archived 28 February 2013)\n[…]\nOfficial results book – Volleyball. London2012.com. at the Wayback Machine (archived 11 May 2013)\n[…]\nOfficial results book – Beach Volleyball. London2012.com. at the Wayback Machine (archived 24 April 2013)\n[…]\nVolleyball at the 2012 Summer Olympics at SR/Olympics (archived)\n[…]\nBeach Volleyball at the 2012 Summer Olympics at SR/Olympics (archived)\n[…]\nFederation Internationale de Volleyball (FIVB.org)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2012",
        "situacao": "ok",
        "texto": "As competições de voleibol nos Jogos Olímpicos de Verão de 2012 ocorreram entre 28 de julho e 12 de agosto. O local de disputas foi o Earls Court Exhibition Centre, em Londres, Reino Unido.\n[…]\nDois eventos da modalidade distribuíram medalhas nos Jogos:\n[…]\nFoi permitido a cada Comitê Olímpico Nacional competir com apenas um time em cada torneio (masculino e feminino).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Voleibol nos Jogos Olímpicos de 2016",
      "descricao": "Torneios olímpicos de vôlei de quadra disputados no Rio de Janeiro em 2016."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na Olimpíada do Rio, em 2016, os jogos de vôlei de quadra foram disputados em que ginásio carioca?",
    "resposta": "Maracanãzinho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball_at_the_2016_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball_at_the_2016_Summer_Olympics",
        "situacao": "ok",
        "texto": "The volleyball tournaments at the 2016 Summer Olympics in Rio de Janeiro was played between 6 and 21 August. 24 volleyball teams and 48 beach volleyball teams, total 386 athletes, participated in the tournament. The indoor volleyball competition took place at Ginásio do Maracanãzinho in Maracanã, and the beach volleyball tournament was held at Copacabana Beach, in the temporary Copacabana Stadium.\n[…]\nIndoor volleyball – men (12 teams, 144 athletes)\n[…]\nIndoor volleyball – women (12 teams, 144 athletes)\n[…]\nBeach volleyball – men (24 teams, 48 athletes)\n[…]\nBeach volleyball – women (24 teams, 48 athletes)\n[…]\nEach National Olympic Committee was allowed to enter one men's and one women's qualified team in the volleyball tournaments and two men's and two women's qualified teams in the beach volleyball.\n[…]\nVolleyball at the 2016 Summer Paralympics\n[…]\nVolleyball:\n[…]\n\"Volleyball at the 2016 Summer Olympics (Rio2016.com)\". Archived from the original on 26 August 2016. Retrieved 23 July 2018.\n[…]\nVolleyball at the 2016 Summer Olympics at SR/Olympics (archived)\n[…]\nVolleyball qualification process (olympics.com.au)\n[…]\nVolleyball qualification website (fivb.com)\n[…]\nResults Book – Volleyball\n[…]\nBeach volleyball:\n[…]\n\"Beach Volleyball at the 2016 Summer Olympics (Rio2016.com)\". Archived from the original on 26 August 2016. Retrieved 23 July 2018.\n[…]\nBeach Volleyball at the 2016 Summer Olympics at SR/Olympics (archived)\n[…]\nBeach Volleyball qualification process (olympics.com.au)\n[…]\nBeach Volleyball qualification website (fivb.com)\n[…]\nResults Book – Beach Volleyball"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2016",
        "situacao": "ok",
        "texto": "Os torneios de voleibol nos Jogos Olímpicos de Verão de 2016 ocorreram entre 6 e 21 de agosto no Ginásio do Maracanãzinho, no Rio de Janeiro. Um total de 288 atletas, sendo 144 de cada sexo e 12 equipes em cada naipe, estiveram nas disputas.\n[…]\nPela primeira vez um torneio olímpico de voleibol contou com a tecnologia do sistema de desafio (challenge), que é usado quando um time contesta a decisão do árbitro. Foram instaladas cerca de 10 câmeras em quadra e na rede para tirar dúvidas da arbitragem e também do público.\n[…]\nDois eventos da modalidade distribuíram medalhas nos Jogos:\n[…]\nFoi permitido para cada Comitê Olímpico Nacional (CON) competir com apenas um time em cada torneio (masculino e feminino). Como país-sede, o Brasil teve garantida uma vaga em cada um dos torneios.\n[…]\n↑1  O Qualificatório Mundial e o Torneio Pré-Olímpico Asiático foram disputados concomitantemente.\n[…]\nO Brasil foi campeão olímpico de voleibol masculino pela terceira vez, derrotando a Itália na final. Os Estados Unidos ganharam o bronze frente à Rússia. No feminino, a China, que eliminou as anfitriãs brasileiras nas quartas de final, superou a Sérvia para ganhar a medalha de ouro e seu terceiro título no torneio feminino (depois de 1984 e 2004), enquanto a seleção dos Estados Unidos foi bronze ao derrotar os Países Baixos.\n[…]\n«Pagina oficial da Federação Internacional de Voleibol» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Campeonato Mundial de Voleibol Masculino de 2002",
      "descricao": "Edição de 2002 do Mundial masculino de vôlei, vencida pelo Brasil, seu primeiro título mundial."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2002, a seleção masculina brasileira conquistou seu primeiro título mundial de vôlei, jogando num país vizinho. Qual?",
    "resposta": "Argentina",
    "fonte": [
      "https://en.wikipedia.org/wiki/2002_FIVB_Volleyball_Men%27s_World_Championship"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2002_FIVB_Volleyball_Men%27s_World_Championship",
        "situacao": "ok",
        "texto": "The 2002 FIVB Men's Volleyball World Championship was the 15th edition of the event, organised by the world's governing body, the FIVB. It was held in Salta, Córdoba, Mar del Plata, Buenos Aires, Santa Fé and San Juan in Argentina from September 28 to October 13, 2002. All times are Argentina Time (UTC−03:00).\n[…]\n* Due to the clash of dates with the 2002 Asian Games, South Korea withdrew from participating and FIVB give a wildcard to  Poland instead.\n[…]\nEstadio Aldo Cantoni (San Juan) – Pool A except Argentina vs. Australia\n[…]\nLuna Park (Buenos Aires) – Argentina vs. Australia, Pool C, G and Final round\n[…]\nThe official competition symbol the \"Minto\". The design is based on sport ball and volleyball."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_2002",
        "situacao": "ok",
        "texto": "O Campeonato Mundial de Voleibol Masculino de 2002 foi a 15ª edição do evento, organizado pela FIVB. Ele foi realizado em Salta, Córdoba, Mar del Plata, Buenos Aires, Santa Fé e San Juan, Argentina, de 28 de setembro a 13 de outubro de 2002.\n[…]\nO Brasil conquistou o seu primeiro título mundial após derrotar a Rússia por 3 a 2 na final.\n[…]\n* Como a Coreia do Sul desistiu de participar do Campeonato devido ao choque de datas do campeonato com os Jogos Asiáticos de 2002 realizados no país ,a  Polónia ganhou a vaga.\n[…]\nO Campeonato Mundial de Voleibol Masculino de 2002 foi realizado em:\n[…]\nFederação Internacional de Voleibol (Archived 2009-09-04)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Circuito Mundial de Vôlei de Praia",
      "descricao": "Circuito internacional de torneios de vôlei de praia organizado pela federação internacional de vôlei desde 1987."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1987, a federação internacional de vôlei organizou seu primeiro torneio oficial de vôlei de praia. Em que cidade?",
    "resposta": "Rio de Janeiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/FIVB_Beach_Volleyball_World_Tour",
      "https://en.wikipedia.org/wiki/Beach_volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/FIVB_Beach_Volleyball_World_Tour",
        "situacao": "ok",
        "texto": "The Volleyball World Beach Pro Tour is the worldwide professional beach volleyball tour for both men and women, organized by the Fédération Internationale de Volleyball (FIVB) and Volleyball World. It was established in 2022 as the successor to the FIVB Beach Volleyball World Tour, which had been held since 1989 for men and since 1992 for women.\n[…]\nThe previous FIVB Beach Volleyball World Tour was known between 2003 and 2012 as the FIVB Beach Volleyball Swatch World Tour for sponsorship reasons.\n[…]\nThe international professional tour was originally known as the FIVB Beach Volleyball World Series, and began in 1989 for men and 1992 for women. It was rebranded as the FIVB Beach Volleyball World Tour in 1997. The World Tour was previously accompanied by FIVB Challenger and Satellite events, which served as a developmental circuit for up-and-coming players. The FIVB handed over the organizing of Challenger and Satellite events to the continental confederations in 2009.\n[…]\nIn October 2021, FIVB announced a rebranding of the series as the Volleyball World Beach Pro Tour, starting with the 2022 edition.\n[…]\nThe star ranking tournament structure was introduced in 2017. World Tour tournaments were ranked from 1 to 5 stars, with 5-star tournaments offering the most prize money. The 2018 World Tour had 47 international tournaments with a total prize purse of over US$7 million. Competing in the World Tour as well as other FIVB-recognized tournaments such as the Summer Olympics allowed players to earn FIVB Ranking Points, with higher-star events being worth more points.\n[…]\nThe Tour Finals were the season-ending championships of the FIVB World Tour and featured only the top performing teams during the regular season. The tournament was first held in 2015.\n[…]\nMedia related to FIVB Beach Volleyball World Tour at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball",
        "situacao": "ok",
        "texto": "Beach volleyball or beach volley for short, is a team sport played by two teams of two to six players each on a sand court divided by a net. Similar to indoor volleyball, the objective of the game is to send the ball over the net and to ground it on the opponent's side of the court. Each team also works together to prevent the opposing team from grounding the ball on their side of the court.\n[…]\nBeach volleyball was most likely originated in 1915 on Waikiki Beach in Hawaii, while the modern two-player game originated in Santa Monica, California, where the first volleyball courts were put up on the beach. It has been an Olympic sport since the 1996 Summer Olympics. The Fédération Internationale de Volleyball (FIVB) is the international governing body for the sport, and organizes the FIVB Beach Volleyball World Championships and the FIVB Beach Volleyball World Tour.\n[…]\nIn 1987, the first international FIVB-sanctioned tournament was played on Ipanema beach in Rio de Janeiro, with a prize purse of US$22,000. It was won by Sinjin Smith and Randy Stoklos. In 1989, the first FIVB-sanctioned international circuit, called the World Series, was organized with men's tournaments in Brazil, Italy and Japan. The FIVB and its continental confederations began organizing worldwide professional tournaments and laid the groundwork for the sport's Olympic debut in 1996.\n[…]\nUntil 2021 the FIVB Beach Volleyball World Tour was the international professional tour for both men and women organized by the Fédération Internationale de Volleyball (FIVB). In 2022 the FIVB Beach Volleyball World Tour was replaced by the Volleyball World Beach Pro Tour.\n[…]\nIn Brazil, the FIVB-approved Brazilian Beach Volleyball Circuit (pt:Circuito Brasileiro de Voleibol de Praia) is the main national tour. It has been organized by the Brazilian Volleyball Confederation since 1991. The tour consists of the main Open Circuit"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Circuito_Mundial_de_Voleibol_de_Praia",
        "situacao": "ok",
        "texto": "Circuito Mundial de Voleibol de Praia (FIVB Beach Volleyball World Tour) é um dos principais campeonatos de vôlei de praia organizado pela Federação Internacional de Voleibol (FIVB). A versão masculina é disputada desde 1987, enquanto as mulheres começaram a participar em 1992. Conta com várias etapas ao longo do ano.\n[…]\nTodos os atletas que disputam o qualificatório e o torneio principal ganham pontos no ranking mundial da FIVB, e após a última etapa a dupla que tiver acumulado mais pontos será declarada campeã do Circuito Mundial (são computados apenas os pontos de 75% dos torneios da temporada).\n[…]\nA chave principal da categoria Aberto do Circuito Mundial é composta por 32 duplas, sendo que 22 entram pela pontuação no ranking da FIVB, duas recebem wild cards e oito chegam pelo torneio qualificatório, sempre levando em consideração o total de duplas a que cada país tem direito.\n[…]\nO país sede pode ter até seis duplas na chave principal, enquanto os demais países podem ter quatro (o wild card não é computado nesse total). No máximo, três duplas por país entram direto na chave principal – as outras vagas podem ser ocupadas pelas representantes vindas do qualificatório, torneio que acontece um dia antes do início do principal.\n[…]\nNesse caso é realizado um torneio com jogos eliminatórios somente entre essas equipes para classificar para o qualificatório as duas que podem avançar à chave principal.\n[…]\nVoleibol de praia nos Jogos Olímpicos\n[…]\nCampeonato Mundial de Voleibol de Praia\n[…]\nFIVB World Tour Finals\n[…]\nCopa do Mundo de Voleibol de Praia\n[…]\n«Página oficial do campeonato» (em inglês)\n[…]\n«Página oficial da FIVB» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Mintonette",
      "descricao": "Nome original dado por William G. Morgan, em 1895, ao jogo que viria a ser o vôlei."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1896, numa demonstração em Springfield, quem sugeriu trocar o nome Mintonette por volleyball?",
    "resposta": "Alfred Halstead",
    "distratores": [
      "James Naismith",
      "Luther Gulick",
      "Amos Alonzo Stagg"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball",
        "situacao": "ok",
        "texto": "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the program at the Atlanta 1996 Summer Olympics. The adapted version of volleyball at the Su\n[…]\nVolleyball was invented in 1895 by the American educator William G. Morgan, a YMCA physical education director in Holyoke, Massachusetts. Morgan intended the game, which he originally called \"mintonette\", to be an alternative to basketball that was less physically demanding. It spread rapidly through YMCA networks in the United States and abroad.\n[…]\nAfter an observer, Alfred Halstead, noticed the volleying nature of the game at its first exhibition match in 1896, played at the International YMCA Training School (now called Springfield College), the game quickly became known as volleyball (it was originally spelled as two words: \"volley ball\"). Volleyball rules were slightly modified by the International YMCA Training School and the game spread around the country to various YMCAs.\n[…]\nThe first official ball used in volleyball is disputed; some sources say Spalding created the first official ball in 1896, while others claim it was created in 1900. The rules evolved over time: in 1916, in the Philippines, the skill and power of the set and spike had been introduced, and four years later a \"three hits\" rule and a rule against hitting from the back row were established. In 1917, the game was changed from requiring 21 points to win to a smaller 15 points to win.\n[…]\nSome games related to volleyball include:\n[…]\nList of volleyball video games\n[…]\nVolleyball Hall of Fame\n[…]\nVolleyball jargon\n[…]\nVolleyball injuries\n[…]\nFédération Internationale de Volleyball – FIVB\n[…]\nUSA Volleyball\n[…]\nAmerican Volleyball Coaches Association"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol",
        "situacao": "ok",
        "texto": "Voleibol, também conhecido pelas formas reduzidas vôlei (português brasileiro) e vólei (português europeu), é um esporte praticado numa quadra dividida em duas partes por uma rede, possuindo duas equipes de seis jogadores em cada lado. O voleibol foi originalmente chamado de Mintonette, devido à sua semelhança com o Badminton. Ele também tem alguns elementos de tênis e handebol e até beisebol porq\n[…]\nO objetivo da modalidade é fazer a bola passar sobre a rede de modo a que a bola toque no chão dentro da quadra adversária, ao mesmo tempo que se evita que os adversários consigam fazer o mesmo. O voleibol é um desporto olímpico, regulado pela Fédération Internationale de Volleyball (FIVB).\n[…]\nO vôlei foi criado em 9 de fevereiro de 1895 por William George Morgan nos Estados Unidos. O objetivo de Morgan, que trabalhava na \"Associação Cristã de Moços\" (ACM), era criar um esporte de equipes sem contato físico entre os adversários, de modo a minimizar os riscos de lesões. Inicialmente jogava-se com uma câmara de ar da bola de basquetebol e foi chamado Mintonette, mas rapidamente ganhou popularidade com o nome de volleyball.\n[…]\nO líbero deve utilizar uniforme diferente dos demais, antes não podia ser capitão mas desde de 2022 essa regra mudou, não pode atacar, bloquear ou sacar. Quando a bola não está em jogo, ele pode trocar de lugar com qualquer outro jogador sem notificação prévia aos árbitros, e suas substituições não contam para o limite que é concedido por set a cada técnico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Campeonato Mundial de Voleibol Masculino de 1949",
      "descricao": "Primeira edição do Mundial masculino de vôlei, disputada em Praga, na Tchecoslováquia."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1949, em Praga, foi disputado o primeiro Campeonato Mundial de vôlei masculino. Que seleção ficou com o título?",
    "resposta": "União Soviética",
    "distratores": [
      "Tchecoslováquia",
      "Polônia",
      "Estados Unidos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1949_FIVB_Volleyball_Men%27s_World_Championship"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1949_FIVB_Volleyball_Men%27s_World_Championship",
        "situacao": "ok",
        "texto": "The 1949 FIVB Men's World Championship was the first edition of the tournament, organised by the world's governing body, the FIVB. It was held from 10 to 18 September 1949 in Prague, Czechoslovakia.\n[…]\nResults at FIVB.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_1949",
        "situacao": "ok",
        "texto": "O Campeonato Mundial de Voleibol Masculino de 1949 foi a primeira edição do torneio, organizado pela FIVB. Foi realizado em Praga, Tchecoslováquia, de 10 a 18 de setembro de 1949.\n[…]\nFederation Internationale de Volleyball",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Vôlei de praia nos Jogos Olímpicos de 2020",
      "descricao": "Torneios olímpicos de vôlei de praia dos Jogos de Tóquio, disputados em 2021."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Nos Jogos de Tóquio, o ouro do vôlei de praia masculino foi para uma dupla de um país nórdico, longe das praias quentes. Que país?",
    "resposta": "Noruega",
    "distratores": [
      "Suécia",
      "Dinamarca",
      "Finlândia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2020_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2020_Summer_Olympics",
        "situacao": "ok",
        "texto": "The volleyball tournaments at the 2020 Summer Olympics in Tokyo were played between 24 July and 8 August 2021. 24 volleyball teams and 48 beach volleyball teams participated in the tournament. The indoor volleyball competition took place at Ariake Arena in Ariake, and the beach volleyball tournament at Shiokaze Park, in the temporary Shiokaze Park Stadium.\n[…]\nIt was originally scheduled to take place in 2020, but due to the COVID-19 pandemic, the IOC and the Tokyo 2020 Organising Committee announced on 24 March 2020 that the 2020 Summer Olympics would be delayed to 2021.\n[…]\nThis qualification pathways were confirmed by the Fédération Internationale de Volleyball on 23 September 2018.\n[…]\nVolleyball at the 2018 Asian Games\n[…]\nVolleyball at the 2019 Pan American Games\n[…]\nSitting volleyball at the 2020 Summer Paralympics\n[…]\nResults book – Beach Volleyball Archived 11 August 2021 at the Wayback Machine\n[…]\nResults book – Volleyball Archived 12 August 2021 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2020",
        "situacao": "ok",
        "texto": "Os torneios de voleibol nos Jogos Olímpicos de Verão de 2020 ocorreram entre os dias 24 de julho e 8 de agosto de 2021 na Ariake Arena, em Tóquio. Um total de 24 equipes (12 em cada gênero) competiram no torneio.\n[…]\nFoi originalmente programado para ser realizado em 2020, mas em 24 de março de 2020, as Olimpíadas foram adiadas para 2021 devido à pandemia de COVID-19, o que fez com que não houvesse espectadores nas partidas.\n[…]\nO processo de qualificação foi confirmado pela Federação Internacional de Voleibol (FIVB) em 23 de setembro de 2018. Cada Comitê Olímpico Nacional (CON) poderia classificar uma equipe em cada torneio (masculino e feminino), totalizando 12 combinados nacionais em cada gênero.\n[…]\nMasculino\n[…]\nA competição masculina iniciou as disputas do voleibol em 24 de julho e duraram 16 dias até as disputas por medalhas do torneio feminino em 8 de agosto de 2021.\n[…]\nVoleibol nos Jogos Pan-Americanos de 2019\n[…]\nVoleibol sentado nos Jogos Paralímpicos de Verão de 2020",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Vôlei masculino nos Jogos Olímpicos de 1984",
      "descricao": "Torneio masculino de vôlei de quadra dos Jogos de Los Angeles, em que o Brasil ganhou a prata."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Na final olímpica de Los Angeles, em 1984, a Geração de Prata do vôlei brasileiro perdeu o ouro para que seleção?",
    "resposta": "Estados Unidos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball_at_the_1984_Summer_Olympics_%E2%80%93_Men%27s_tournament"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball_at_the_1984_Summer_Olympics_%E2%80%93_Men%27s_tournament",
        "situacao": "ok",
        "texto": "The men's tournament in volleyball at the 1984 Summer Olympics was the 6th edition of the event at the Summer Olympics, organized by the world's governing body, the FIVB in conjunction with the IOC. It was held in Long Beach, California, United States from 29 July to 11 August 1984.\n[…]\nVolleyball at the Summer Olympics\n[…]\nVolleyball at the 1984 Summer Olympics – Women's tournament\n[…]\nFinal Standing (1964–2000)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_1984_-_Masculino",
        "situacao": "ok",
        "texto": "O torneio masculino de voleibol nos Jogos Olímpicos de Verão de 1984 foi realizado na Long Beach Arena, Los Angeles, entre 29 de julho e 11 de agosto e organizado pela Federação Internacional de Voleibol (FIVB) em conjunto com o Comitê Olímpico Internacional (COI).\n[…]\nOs Estados Unidos foram campeões olímpicos de voleibol, derrotando o Brasil na final. A Itália ganhou o bronze frente ao Canadá.\n[…]\nNa fase final as seleções disputaram, no máximo, mais três jogos (para as equipas que discutiram as medalhas), em formato de eliminatória.\n[…]\n11 de agosto — Final\n[…]\nEsta foi a classificação final do torneio:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Vôlei masculino nos Jogos Olímpicos de 1984",
      "descricao": "Torneio masculino de vôlei de quadra dos Jogos de Los Angeles, em que o Brasil ganhou a prata."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Campeã olímpica de vôlei masculino em 1980, a União Soviética não disputou os Jogos de Los Angeles, em 1984. Por quê?",
    "resposta": "Boicote do bloco soviético",
    "fonte": [
      "https://en.wikipedia.org/wiki/1984_Summer_Olympics_boycott",
      "https://en.wikipedia.org/wiki/Volleyball_at_the_1980_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1984_Summer_Olympics_boycott",
        "situacao": "ok",
        "texto": "The boycott of the 1984 Summer Olympics in Los Angeles followed four years after the American-led boycott of the 1980 Summer Olympics in Moscow. The boycott involved nineteen countries: fifteen from the Eastern Bloc led by the Soviet Union, which initiated the boycott on May 8, 1984; and four non‑aligned countries which boycotted on their own initiatives.\n[…]\nSince the announcement by U.S. President Carter of the boycott of the Olympic Games in Moscow in 1980, there was fear from United States officials that a reciprocal boycott could occur during the 1984 Games, scheduled for Los Angeles. The Soviets for their part gave sparsely few indications that this would happen, and indeed, from formalized talks which occurred over the course of three years, indicators seemed to point towards Soviet participation.\n[…]\nTheir faltering relations did not improve with the ascension of Konstantin Chernenko to the post of General Secretary of the Soviet Union in February 1984. Chernenko was a close acolyte of Leonid Brezhnev and therefore predisposed to avoiding Los Angeles due to the 1980 boycott. American reticence in dealing with anti-Soviet activists coupled with American mishandling of the Soviets' Olympic attaché, incentivized the Soviets enough in their view to justify boycotting the Games.\n[…]\nYugoslavia was a founding member of the Non-Aligned Movement. In foreign policy, Yugoslavia acted independently of the Soviet Union and shared friendly relations with both the Soviet Union and the United States. The country showed no interest in joining either of the previous Olympic boycotts in 1976 and 1980, and by the Spring of 1984, had just completed its own successful hosting of the Winter Olympics in Sarajevo.\n[…]\nABC News Special Report on YouTube ABC News's Richard Threlkeld and Bob Zelnick report on the Soviet boycott announcement, May 8, 1984"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball_at_the_1980_Summer_Olympics",
        "situacao": "ok",
        "texto": "Volleyball at the 1980 Summer Olympics was represented by two events. It was held at the Minor Arena of the Central Lenin Stadium and at the Druzhba (Friendship) Multi-Purpose Arena of the Central Lenin Stadium, both located at Luzhniki (south-western part of Moscow). The schedule started on July 20 and ended on August 1.\n[…]\nIndoor volleyball – men (10 teams, 113 athletes)\n[…]\nIndoor volleyball – women (8 teams, 96 athletes)\n[…]\nOfficial Olympic Report Archived 2007-06-12 at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Vôlei masculino nos Jogos Olímpicos de 2024",
      "descricao": "Torneio masculino de vôlei de quadra dos Jogos de Paris, em 2024."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Nos Jogos de Tóquio e nos de Paris, o ouro do vôlei masculino de quadra ficou com o mesmo país. Qual?",
    "resposta": "França",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball_at_the_2024_Summer_Olympics_%E2%80%93_Men%27s_tournament",
      "https://en.wikipedia.org/wiki/Volleyball_at_the_2020_Summer_Olympics_%E2%80%93_Men%27s_tournament"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball_at_the_2024_Summer_Olympics_%E2%80%93_Men%27s_tournament",
        "situacao": "ok",
        "texto": "The men's tournament in volleyball at the 2024 Summer Olympics was the 16th edition of the event at the Summer Olympics, organised by the world's governing body, the FIVB, in conjunction with the IOC. It was held in Paris, France from 27 July to 10 August 2024. This was the first time in the history of the Olympic volleyball competition, each team participating was entitled to include one non-comp\n[…]\nIn a change of format compared to the previous nine editions of the Olympic Games, this tournament featured three groups with four teams each during the preliminary round (between 1972 Summer Olympics to 2020 Summer Olympics the teams were placed in two groups). At this round, the teams competed in a single round-robin format. The two highest ranked teams in each pool and the best two third-placed teams advanced to the knockout stage (quarterfinals).\n[…]\nThe twelve qualified teams were seeded according to their position in the FIVB World Ranking as of 24 June 2024. As the host team, France was seeded first and placed in the top position of Pool A. The two top ranked teams seeded second and third were placed at the top of Pools B and C respectively. The remaining nine teams were distributed across three bowls of three teams each based on their position in the World Ranking and drawn for their seed line by line applying the serpentine system.\n[…]\nThe draw took place on 26 June 2024. Rankings are shown in brackets except the hosts who ranked seventh.\n[…]\nThe following referees were selected for the tournament.\n[…]\nAll times are Central European Summer Time (UTC+02:00).\n[…]\nThe awards were announced on 10 August 2024.\n[…]\nVolleyball at the Summer Olympics\n[…]\nVolleyball at the 2024 Summer Olympics – Women's tournament\n[…]\nBeach volleyball at the 2024 Summer Olympics – Men's tournament\n[…]\nSitting volleyball at the 2024 Summer Paralympics - Men's tournament\n[…]\n2024 FIVB Men's Volleyball Nations League"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball_at_the_2020_Summer_Olympics_%E2%80%93_Men%27s_tournament",
        "situacao": "ok",
        "texto": "The men's tournament in volleyball at the 2020 Summer Olympics  was the 15th edition of the event at the Summer Olympics, organised by the world's governing body, the FIVB, in conjunction with the IOC. It was held in Tokyo, Japan from 24 July to 7 August 2021. It was originally scheduled to take place from 25 July to 8 August 2020, but due to the COVID-19 pandemic, the IOC and the Tokyo 2020 Organ\n[…]\nThe medals for the competition were presented by Bernard Rajzman, IOC Member, Olympian, and Silver Medalist, Brazil; and the medalists' bouquets were presented by Ary Graça, FIVB President; Brazil.\n[…]\nThe following referees were selected for the tournament.\n[…]\nSource: Olympics.com\n[…]\nVolleyball at the Summer Olympics\n[…]\nVolleyball at the 2020 Summer Olympics – Women's tournament\n[…]\nBeach volleyball at the 2020 Summer Olympics – Men's tournament\n[…]\nSitting volleyball at the 2020 Summer Paralympics - Men's tournament"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2024_-_Masculino",
        "situacao": "ok",
        "texto": "O torneio masculino de voleibol nos Jogos Olímpicos de Verão de 2024 foi realizado entre 27 de julho e 10 de agosto com todos as partidas sendo disputadas na Arena 1 Paris Sul, situada no Paris Expo Porte de Versailles, centro de exposições e convenções localizado em Paris.\n[…]\nDoze equipes se classificaram para o torneio masculino de voleibol.\n[…]\nNuma mudança de formato com relação a edições anteriores dos Jogos Olímpicos, a competição se inicia com uma fase preliminar na qual as doze equipes foram divididas em três grupos de quatro equipes cada, e todas as equipes do grupo se enfrentam (entre 1972 e 2020 as equipes eram divididas em dois grupos de seis). As duas primeiras colocadas de cada grupo, juntamente com os dois melhores terceiros colocados, se classificam para a fase eliminatória, que segue o formato de eliminação simples.\n[…]\nOs vencedores das quartas de final avançam para as semifinais, enquanto os perdedores são eliminados. Os vencedores das semifinais disputam a medalha de ouro, e os perdedores competem pela medalha de bronze.\n[…]\nAs doze equipes qualificadas foram alocadas de acordo com sua posição no Ranking Mundial da FIVB de 24 de junho de 2024. Como equipe anfitriã, a França foi colocada como cabeça de chave do Grupo A. As duas equipes melhores colocadas do ranking foram colocadas no topo dos Grupos B e C, respectivamente. As nove equipes restantes foram distribuídas em três potes de três equipes cada, com base em sua posição no ranking e sorteadas linha por linha, aplicando o sistema serpentina.\n[…]\nO sorteio ocorreu em 26 de junho de 2024. Entre parêntesis estão a posição de cada seleção no ranking.\n[…]\n«Torneio olímpico na página oficial da Federação Internacional de Voleibol» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Transformando Suor em Ouro",
      "descricao": "Livro de 2006 sobre liderança e trabalho em equipe escrito por um técnico de vôlei brasileiro."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que técnico campeão olímpico de vôlei escreveu o livro Transformando Suor em Ouro, lançado em 2006?",
    "resposta": "Bernardinho",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bernardinho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bernardinho",
        "situacao": "ok",
        "texto": "Bernardo Rocha de Rezende (Rio de Janeiro, 25 de agosto de 1959), conhecido como Bernardinho, é um ex-jogador, treinador de voleibol, economista, e empresário brasileiro. Atualmente, treina o Sesc-Flamengo e a Seleção Brasileira de Voleibol Masculino.\n[…]\nBernardo Rocha de Rezende, mais conhecido como Bernardinho, nasceu em 25 de agosto de 1959. Formado em economia pela PUC-Rio, jogou vôlei de 1979 até 1986, defendendo times do Rio de Janeiro e a seleção brasileira. Em 1988, parou de jogar, começando a carreira de treinador como assistente-técnico da seleção Bebeto de Freitas, nas Olimpíadas de Seul. Dois anos depois, treinou a equipe feminina do Perugia, na Itália, onde ficou até 1992. No ano seguinte, dirigiu a equipe masculina do Modena.\n[…]\nBernardinho foi casado com a jogadora de voleibol Fernanda Venturini de 1999 a 2020, tendo duas filhas, Júlia e Vitória. Por causa da mais nova largou a Seleção Francesa de Voleibol Masculino, com a qual havia assinado em 2021 visando a Olimpíada de Paris.\n[…]\nÉ autor dos livros Bernardinho - Cartas a um jovem atleta - Determinação e Talento: O caminho da Vitória e Transformando Suor em Ouro. Em 11 de janeiro de 2017, foi anunciada a sua saída da Seleção Brasileira de voleibol masculino após um ciclo de 16 anos, sendo substituído por Renan Dal Zotto.\n[…]\nInstituto Compartilhar - ONG criada por Bernardinho com a missão de desenvolver jovens de comunidades carentes por meio do esporte.\n[…]\nEscola de Vôlei Bernardinho - tem o objetivo incentivar a prática do voleibol infantil de forma divertida aliando técnica aos valores fundamentais para a formação de um cidadão, a partir de uma metodologia de ensino específica para crianças entre 7 e 13 anos de idade. A escola é a maior referência em ensino de minivôlei."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Vôlei masculino nos Jogos Olímpicos de 2008",
      "descricao": "Torneio masculino de vôlei de quadra dos Jogos de Pequim, em 2008."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Campeão em Atenas, o Brasil voltou à final olímpica do vôlei masculino em Pequim, em 2008, mas perdeu. Para que seleção?",
    "resposta": "Estados Unidos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball_at_the_2008_Summer_Olympics_%E2%80%93_Men%27s_tournament"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball_at_the_2008_Summer_Olympics_%E2%80%93_Men%27s_tournament",
        "situacao": "ok",
        "texto": "The men's tournament in volleyball at the 2008 Summer Olympics was the 12th edition of the event at the Summer Olympics, organized by the world's governing body, the FIVB, in conjunction with the IOC. It was held in Beijing, China from 10 to 24 August 2008.\n[…]\nThe twelve competing teams were split equally into two pools of six teams. Each team played all other teams in their pool with the winning team gaining 2 points and the losing side 1 point. The top four teams from each pool progressed through to the quarterfinals. The rest of the tournament was a single-elimination bracket, with a bronze medal match held between the two semifinal losers.\n[…]\nFinal Standing"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2008_-_Masculino",
        "situacao": "ok",
        "texto": "O torneio de voleibol nos Jogos Olímpicos de Verão de 2008 em quadra masculino realizou-se no Ginásio Indoor da Capital e Ginásio do Instituto de Tecnologia de Pequim entre 10 de Agosto a 24 de Agosto de 2008.\n[…]\nA China qualificou-se automaticamente como sede de acolhimento. Brasil, Rússia e Bulgária qualificaram-se por terem terminado no top-três da Copa do Mundo de Voleibol Masculino 2007, enquanto Sérvia (Europa), Estados Unidos (NORCECA), Venezuela (América do Sul) e Egipto (África) venceram os torneios continentais.\n[…]\nAlemanha, Itália, Japão e Polónia apuraram-se das três fases dos Torneios Olímpicos de Qualificação, realizados em Düsseldorf, na Alemanha (entre 23 e 25 de Maio), Tóquio, no Japão (entre 31 de Maio e 8 de Junho) e de Espinho, em Portugal (entre 30 de Maio e 1 de Junho).\n[…]\nHorário de Pequim (UTC+8)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Vôlei masculino nos Jogos Olímpicos de 2012",
      "descricao": "Torneio masculino de vôlei de quadra dos Jogos de Londres, em 2012."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Na final olímpica de Londres, em 2012, o Brasil vencia por dois sets a zero e teve match points, mas levou a virada. De que seleção?",
    "resposta": "Rússia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball_at_the_2012_Summer_Olympics_%E2%80%93_Men%27s_tournament"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball_at_the_2012_Summer_Olympics_%E2%80%93_Men%27s_tournament",
        "situacao": "ok",
        "texto": "The men's tournament in volleyball at the 2012 Summer Olympics was the 13th edition of the event at the Summer Olympics, organised by the world's governing body, the FIVB, in conjunction with the IOC. It was held in London, United Kingdom from 29 July to 12 August 2012.\n[…]\nRussia won the gold medal in a 3–2 victory against Brazil.\n[…]\nTeams were seeded following the serpentine system according to their FIVB World Ranking as of 4 January 2012. FIVB reserved the right to seed the hosts as head of pool A regardless of the World Ranking. Rankings are shown in brackets except the hosts who ranked 92nd.\n[…]\nMatch points\n[…]\nSets ratio\n[…]\nPoints ratio\n[…]\nResult of the last match between the tied teams\n[…]\nMatch won 3–0 or 3–1: 3 match points for the winner, 0 match points for the loser\n[…]\nMatch won 3–2: 2 match points for the winner, 1 match point for the loser\n[…]\nAll times are British Summer Time (UTC+01:00).\n[…]\nAll times are British Summer Time (UTC+01:00).\n[…]\nThe first ranked teams of both pools played against the fourth ranked teams of the other pool. The second ranked teams faced the second or third ranked teams of the other pool, determined by drawing of lots. The drawing of lots was held after the last match in the preliminary round.\n[…]\nVolleyball at the 2012 Summer Olympics – Women's tournament\n[…]\nFinal Standing"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2012_-_Masculino",
        "situacao": "ok",
        "texto": "O torneio masculino de voleibol nos Jogos Olímpicos de Verão de 2012 foi realizado no Earls Court Exhibition Centre entre 27 de julho e 12 de agosto. As doze equipes participantes foram divididas igualmente em dois grupos de seis. Cada equipe jogou com todos as outros do grupo. As quatro melhores seleções de cada grupo passaram as quartas de finais, com as vencedoras se classificando as semifinais\n[…]\nNa final, o Brasil disputou o título pela terceira vez consecutiva, em uma partida contra a Rússia, que virou o jogo e venceu por 3 sets a 2.\n[…]\n↑1 ↑1  O Torneio Pré-Olímpico Mundial 1 e o Asiático foram disputados simultaneamente.\n[…]\nTodos as partidas seguem o horário de Londres (UTC+1).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Vôlei masculino nos Jogos Olímpicos de 1996",
      "descricao": "Torneio masculino de vôlei de quadra dos Jogos de Atlanta, em 1996."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Derrotada pelo Brasil na final de Barcelona, em 1992, que seleção deu a volta por cima e ganhou o ouro do vôlei masculino em Atlanta, quatro anos depois?",
    "resposta": "Holanda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball_at_the_1996_Summer_Olympics_%E2%80%93_Men%27s_tournament",
      "https://en.wikipedia.org/wiki/Volleyball_at_the_1992_Summer_Olympics_%E2%80%93_Men%27s_tournament"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball_at_the_1996_Summer_Olympics_%E2%80%93_Men%27s_tournament",
        "situacao": "ok",
        "texto": "The men's tournament in volleyball at the 1996 Summer Olympics was the 9th edition of the event at the Summer Olympics, organized by the world's governing body, the FIVB in conjunction with the IOC. It was held in Atlanta and Athens, Georgia, United States from 21 July to 4 August 1996.\n[…]\nWomen's Olympic Tournament\n[…]\nFinal Standing (1964–2000)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball_at_the_1992_Summer_Olympics_%E2%80%93_Men%27s_tournament",
        "situacao": "ok",
        "texto": "The men's tournament in volleyball at the 1992 Summer Olympics was the 8th edition of the event at the Summer Olympics, organized by the world's governing body, the FIVB in conjunction with the IOC. It was held in Barcelona, Spain from 26 July to 9 August 1992.\n[…]\nVolleyball at the 1992 Summer Olympics\n[…]\nVolleyball at the 1992 Summer Olympics – Women's tournament\n[…]\nFinal Standing (1964–2000)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_1996_-_Masculino",
        "situacao": "ok",
        "texto": "O torneio masculino de voleibol nos Jogos Olímpicos de Verão de 1996 foi realizado no Omni Coliseum e no Stegeman Coliseum, Atlanta, entre 21 de julho e 4 de agosto e organizado pela Federação Internacional de Voleibol (FIVB) em conjunto com o Comitê Olímpico Internacional (COI).\n[…]\nOs Países Baixos foram campeões olímpicos de voleibol, derrotando a Itália na final. A Iugoslávia ganhou o bronze frente à Rússia.\n[…]\nNa fase de grupos, as seleções jogaram entre si repartidas em dois grupos de seis equipas cada. Os quatro melhores apuraram-se para as quartas de final.\n[…]\nNa fase final as seleções disputaram, no máximo, mais três jogos (para as equipas que discutiram as medalhas), em formato de eliminatória.\n[…]\nQuartas de final\n[…]\nFinal\n[…]\nEsta foi a classificação final do torneio:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Vôlei sentado",
      "descricao": "Variante do vôlei para pessoas com deficiência, jogada com os atletas sentados no chão."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O vôlei sentado masculino entrou no programa dos Jogos Paralímpicos em que ano, numa edição disputada na cidade holandesa de Arnhem?",
    "resposta": "1980",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sitting_volleyball",
      "https://en.wikipedia.org/wiki/Volleyball_at_the_1980_Summer_Paralympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sitting_volleyball",
        "situacao": "ok",
        "texto": "Sitting volleyball is a form of volleyball for athletes with a disability organized by World ParaVolley. As opposed to standing volleyball, sitting volleyball players must sit on the floor to play.\n[…]\nIn 1958, the first international sitting volleyball contact was held between Germany and Dutch club teams.\n[…]\nIt was created as a combination of volleyball and sitzball, a German sport with no net and seated players. Sitting volleyball first appeared in the 1976 Summer Paralympics as a demonstration sport for athletes with impaired mobility, and both standing and sitting volleyball became officially included as medal sports in the 1980 Summer Paralympics. Women's sitting volleyball was added for the 2004 Summer Paralympics.\n[…]\nList of sitting volleyball national teams\n[…]\nSitting volleyball was first demonstrated at the Summer Paralympic Games in 1976 and was introduced as a full Paralympic event in 1980. The 2000 games was the last time standing volleyball appeared on the Paralympic programme. The women's sitting volleyball event introduction followed in the 2004 Paralympic Games.\n[…]\nWomen's European Sitting Volleyball Championships\n[…]\nMen's European Sitting Volleyball Championships\n[…]\n2022 Sitting Volleyball World Championships – Men's event\n[…]\n2022 Sitting Volleyball World Championships – Women's event\n[…]\n2023 Asia and Oceania Sitting Volleyball Championships\n[…]\nSitting volleyball at the Asian Para Games\n[…]\n2023 Sitting Volleyball World Cup – Men's event\n[…]\n2023 Sitting Volleyball World Cup – Women's event\n[…]\nSitting volleyball at the International Paralympic Committee\n[…]\nBeijing 2008 Paralympic Sitting Volleyball Information with an Australian slant from accessibility.com.au at the Wayback Machine (archived 23 July 2008)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball_at_the_1980_Summer_Paralympics",
        "situacao": "ok",
        "texto": "Volleyball at the 1980 Summer Paralympics in Arnhem consisted of standing and sitting volleyball events for men.\n[…]\nVolleyball at the 1980 Summer Paralympics (Arnhem) from the International Paralympic Committee (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_sentado",
        "situacao": "ok",
        "texto": "O voleibol sentado é uma modalidade de voleibol para atletas com deficiência — física ou relacionada à locomoção — organizada pela World ParaVolley. Ao contrário do voleibol em pé, os jogadores de voleibol sentado devem sentar no chão para jogar.\n[…]\nFoi criado como uma combinação de voleibol e sitzball, um esporte alemão sem rede e jogadores sentados. Em Paralimpíadas, o voleibol sentado apareceu pela primeira vez nos Jogos Paralímpicos de Toronto de 1976 como um esporte de demonstração para atletas com mobilidade reduzida, e, assim como o voleibol em pé, foi oficialmente incluído como esporte de medalha nos Jogos de Arnhem em 1980. O voleibol sentado feminino foi adicionado para as Paralimpíadas de Atenas de 2004.\n[…]\nApenas dois jogadores MD são permitidos na lista para os Jogos Paralímpicos e apenas um é permitido na quadra por vez; isso é para manter a competição justa entre equipes rivais. O resto da equipe deve ser classificado como jogadores D. As habilidades são na maioria idênticas ao vôlei e a seguinte terminologia de jogo se aplica:\n[…]\nO voleibol sentado foi demonstrado pela primeira vez nos Jogos Paralímpicos de Verão de 1976, apenas com a categoria masculino, tendo sido introduzido como um evento paralímpico com disputa de medalhas em Arnhem 1980. No entanto, a adição do evento feminino do voleibol sentado ocorreu nos Jogos de 2004.\n[…]\nO evento masculino foi disputado pela primeira vez em 1983 nos Países Baixos, sendo vencido pelo país anfitrião. O torneio feminino teve sua primeira edição em 1994 na Alemanha, tendo sido conquistado pelos Países Baixos. Por sua vez, a edição mais recente foi disputada em 2022 na Bósnia e Herzegóvina, sendo conquistada por: Irã (masculino) e Brasil (feminino).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Seleção Brasileira de Voleibol Feminino",
      "descricao": "Seleção feminina de vôlei de quadra do Brasil, campeã olímpica em 2008 e 2012."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Antes dos ouros de Pequim e Londres, a seleção feminina brasileira de vôlei de quadra subiu ao pódio olímpico pela primeira vez em que edição dos Jogos?",
    "resposta": "Atlanta 1996",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil_women%27s_national_volleyball_team",
      "https://en.wikipedia.org/wiki/Volleyball_at_the_1996_Summer_Olympics_%E2%80%93_Women%27s_tournament"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_women%27s_national_volleyball_team",
        "situacao": "ok",
        "texto": "The Brazil women's national volleyball team is administered by the Confederação Brasileira de Voleibol (CBV) and takes part in international volleyball competitions. With a tally of 47 titles, the Brazil women's volleyball national team is one of the most successful national teams of all time. They have won 6 olympic medals including two gold medals, in the 2008 Summer Olympics and in 2012 Summer \n[…]\nGold: 1972, 1974, 1976, 1978, 1984, 1990, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016\n[…]\nSilver: 1978, 1980, 1996, 2012"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball_at_the_1996_Summer_Olympics_%E2%80%93_Women%27s_tournament",
        "situacao": "ok",
        "texto": "The 1996 women's Olympic volleyball tournament was the ninth edition of the event, organised by the world's governing body, the FIVB in conjunction with the International Olympic Committee. It was held from 20 July to 3 August 1996 at the Stegeman Coliseum of The University of Georgia in Athens, Georgia and at the Omni Coliseum in Atlanta, Georgia. 12 teams competed, up from eight in 1992.\n[…]\nTeams were seeded following the Serpentine system according to their ranking as of January 1996.\n[…]\nOmni Coliseum, Atlanta, United States"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Brasileira_de_Voleibol_Feminino",
        "situacao": "ok",
        "texto": "Seleção Brasileira de Voleibol Feminino é a seleção nacional feminina de voleibol do Brasil. É administrada pela Confederação Brasileira de Voleibol (CBV) e representa o Brasil nas competições internacionais de vôlei.\n[…]\nNos Jogos Olímpicos, a seleção brasileira de vôlei possui seis medalhas: duas de ouro, conquistadas em Pequim 2008 e outra nos Londres 2012, sagrando-se bicampeã olímpica, mais uma medalha de prata, em Tóquio 2020, e três de bronze, conquistadas em Atlanta 1996, Sydney 2000 e Paris 2024. Em 2004, em Atenas, o time chegou como favorito mas acabou em quarto lugar.\n[…]\nEm novembro de 2014, a seleção brasileira foi eleita a melhor equipe feminina dos Jogos Olímpicos de Londres pela Associação de Comitês Olímpicos Nacionais.\n[…]\nA seleção brasileira já conquistou os principais campeonatos de voleibol, com exceção apenas do Campeonato Mundial e da Copa do Mundo, nos quais o Brasil acabou levando a medalha de prata em três oportunidades em cada competição. Nos Jogos Olímpicos, o Brasil possui seis medalhas: duas de ouro conquistadas em Pequim (2008) e Londres (2012), uma de prata em Tóquio (2020) e três de bronze conquistadas em Atlanta (1996), Sydney (2000) e Paris (2024).\n[…]\nNos Jogos Olímpicos de Pequim, o Brasil realizou oito jogos vencendo todos e perdendo apenas um set na final contra as americanas. Na final dos Jogos Olímpicos de Londres, venceu novamente a equipe americana pelo mesmo placar da final de 2008. Já em Atlanta e Sydney foi barrado nas semi finais por Cuba, porém, conquistou o bronze enfrentando respectivamente a Rússia e os Estados Unidos.\n[…]\nSeleção Brasileira de Voleibol Masculino\n[…]\nSeleção Brasileira de Voleibol Sentado Feminino\n[…]\nSeleção Brasileira de Voleibol Sentado Masculino",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Karch Kiraly",
      "descricao": "Ex-jogador americano de vôlei, campeão olímpico na quadra em 1984 e 1988 e na areia em 1996."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Já como técnico, Karch Kiraly levou a seleção feminina de vôlei dos Estados Unidos ao seu primeiro ouro olímpico. Em que edição dos Jogos?",
    "resposta": "Tóquio 2020",
    "fonte": [
      "https://en.wikipedia.org/wiki/Karch_Kiraly",
      "https://en.wikipedia.org/wiki/Volleyball_at_the_2020_Summer_Olympics_%E2%80%93_Women%27s_tournament"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Karch_Kiraly",
        "situacao": "ok",
        "texto": "Charles Frederick \"Karch\" Kiraly ( KARCH kirr-EYE; born November 3, 1960) is an American volleyball player, coach, and broadcast announcer. He was a central part of the U.S National Team that won gold medals at the 1984 and 1988 Olympic Games. He went on to win the gold medal again at the 1996 Olympic Games, the first Olympic competition to feature beach volleyball. He is the only player (man or w\n[…]\nKiraly is currently the head coach of the United States men's national volleyball team. Previously, he was the coach of the United States women’s national team leading them to their first-ever gold medal in the 2020 Tokyo Olympics and thereby completing the \"triple crown\" of coaching an Olympic gold medal-winning team as well as personally winning gold medals in both indoor and beach volleyball.\n[…]\nOn August 8, 2021, during the 2020 Olympics in Tokyo, Japan, Kiraly coached the US women to a gold medal, becoming the second person to win a gold medal as player and coach; the first was Lang Ping from China.\n[…]\nKiraly babysat Misty May-Treanor when she was a youngster.\n[…]\nOn the same day Kiraly led the national team to their historic gold medal win at the 2020 Summer Olympics, he revealed that he was diagnosed with colon cancer in 2017 and had to have doctors remove part of his colon in order to fight the disease. Trying to keep the team in good working order, he did not want to make his team feel sad and decided not to share the news with them until he went into cancer remission in 2021.\n[…]\nKiraly, Karch; Shewman, Byron (1999). Beach Volleyball. Champaign, IL: Human Kinetics. ISBN 978-0-88011-836-1.\n[…]\nKarch Kiraly Volleyball Academy Archived November 26, 2020, at the Wayback Machine\n[…]\nKarch Kiraly at the Beach Volleyball Database\n[…]\nKarch Kiraly at the Team USA Hall of Fame (archive September 3, 2023)\n[…]\nKarch Kiraly at Olympics.com Karch Kiraly at Olympic.org (archived)\n[…]\nKarch Kiraly at Olympedia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball_at_the_2020_Summer_Olympics_%E2%80%93_Women%27s_tournament",
        "situacao": "ok",
        "texto": "The women's tournament in volleyball at the 2020 Summer Olympics was the 15th edition of the event at an Olympic Games, organised by the world's governing body, the FIVB, in conjunction with the IOC. It was held in Tokyo, Japan from 25 July to 8 August 2021.\n[…]\nIt was originally scheduled to take place from 26 July to 9 August 2020, but due to the COVID-19 pandemic, the IOC and the Tokyo 2020 Organising Committee announced on 24 March 2020 that the 2020 Summer Olympics would be delayed to 2021. Because of this pandemic, the games were played behind closed doors.\n[…]\nVolleyball at the 2020 Summer Olympics – Men's tournament\n[…]\nBeach volleyball at the 2020 Summer Olympics – Women's tournament\n[…]\nSitting volleyball at the 2020 Summer Paralympics - Women's tournament"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Karch_Kiraly",
        "situacao": "ok",
        "texto": "Charles Frederick \"Karch\" Kiraly (Jackson, Michigan, 3 de Novembro de 1960) é um ex-jogador de voleibol dos Estados Unidos da América. É o único jogador deste desporto - tanto masculino quanto feminino - a ter ganhado a medalha de ouro olímpica nas variantes indoor (quadra) e de praia. É tido por muitos admiradores e jogadores de voleibol como o maior jogador de todos os tempos. Não à toa, no ano \n[…]\nSua conquista no vôlei de praia foi lograda jogando em parceria com Kent Steffes. Após se aposentar como atleta, Kiraly dedicou-se à carreira de treinador. Como assistente-técnico, participou da campanha que levou a seleção feminina dos EUA à prata em Londres-2012 – derrotada pelo Brasil na final. Já como técnico do time, comandou a equipe no título mundial em 2014 e o olímpico em 2022, igualando a chinesa Lang Ping com ouro olímpico como atleta e treinador.\n[…]\nSeus pais fugiram da Hungria para os Estados Unidos em 1956, no ano da Invasão Soviética. A família montou acampamento em Jackson, no estado norte-americano de Michigan, e quatro anos depois nascia o filho Karch, forma húngara de dizer Charles.\n[…]\nBicampeão olímpico voleibol de quadra - Los Angeles 1984 e Seul 1988\n[…]\nCampeão olímpico Voleibol de praia - Atlanta 1996\n[…]\nPrimeiro - e por enquanto único - jogador de vôlei, tanto masculino quanto feminino, a ter ganhado a medalha de ouro olímpica nas variantes indoor (quadra) e de praia.\n[…]\nLista de atletas com medalhas olímpicas em diferentes esportes",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Liga Mundial de Voleibol",
      "descricao": "Torneio anual de seleções masculinas de vôlei organizado pela federação internacional entre 1990 e 2017."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A Liga Mundial, torneio anual de seleções masculinas de vôlei que marcou época na TV brasileira, teve sua primeira edição em que ano?",
    "resposta": "1990",
    "fonte": [
      "https://en.wikipedia.org/wiki/FIVB_Volleyball_World_League"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/FIVB_Volleyball_World_League",
        "situacao": "ok",
        "texto": "The FIVB Volleyball World League was an annual international men's volleyball competition. Created in 1990, it was the longest and richest of all the international events organized by the Fédération Internationale de Volleyball (FIVB). The women's version of the competition was called FIVB Volleyball World Grand Prix. This event should not be confused with the other international volleyball compet\n[…]\nFrom 2018, the World League and World Grand Prix was replaced by the men's and women's Nations League and men's and women's Challenger Cup.\n[…]\nThe World League was created in 1990 as part of the intensive marketing programme that would become a distinctive mark of the FIVB's activities near the end of the century. The idea was to promote the sport of volleyball by establishing an annual competition that would appeal to audiences all over the world.\n[…]\nIn the 1990s, the Italians dominated the World League, winning the first three tournaments in 1990, 1991 and 1992. Playing at home, Brazil, at the time the Olympic champions, managed to take the gold in 1993, but Italy regained the title in 1994 and 1995.\n[…]\nAs can be seen, Italy were clearly the dominant team in the first decade of the World League: from 1990 to 2000, the World League was played 11 times, and Italy took gold eight times, while the remaining three titles were won by three different teams.\n[…]\nThe FIVB is constantly adapting the World League's competition formula to improve competitiveness and to make the games more attractive to the audience. Nevertheless, a few basic rules and restrictions will probably remain unchanged in the following years.\n[…]\nBrazil and Italy are the only teams that participated in all editions of the World League.\n[…]\nFédération Internationale de Volleyball – official website\n[…]\nFIVB Volleyball World League – official website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Liga_Mundial_de_Voleibol",
        "situacao": "ok",
        "texto": "A Liga Mundial de Voleibol foi uma competição anual de voleibol masculino. Criado em 1990, o torneio era o mais longo e mais rico dentre todos os eventos internacionais organizados pela FIVB. Em 2011, foram distribuídos vinte milhões de dólares entre os times participantes.\n[…]\nA edição de 2017 foi, também, a última desta competição. A partir de 2018, a mesma foi substituída pela Liga das Nações de Voleibol Masculino.\n[…]\nA Liga Mundial foi criada em 1990 como parte de um intenso programa de marketing que se tornaria marca registrada da atuação da FIVB no final do século XX. A ideia consistia em promover o voleibol em escala mundial através do estabelecimento de torneios anuais que despertassem o interesse do público em todos os continentes.\n[…]\nA estratégia da FIVB acabou provando-se visionária: na virada do século, a Liga Mundial já estava plenamente consolidada como uma importante competição internacional de voleibol. Aos olhos da federações nacionais, a falta de tradição do torneio era compensada pelas generosas recompensas em dinheiro que eram oferecidas aos participantes: entre 1990 e 2004, o total gasto com premiações pulou de um para treze milhões de dólares.\n[…]\nNos anos 1990, a Itália dominou completamente a Liga Mundial, vencendo logo as três primeiras edições do torneio: 1990, 1991 e 1992. Sediando a fase final, o Brasil - então campeão olímpico - conseguiu conquistar o ouro em 1993, mas os italianos retornaram ao lugar mais alto do pódio em 1994 e 1995.\n[…]\nOs números não deixam margem a dúvidas: entre 1990 e 2000, foram jogadas 11 edições da Liga Mundial. A Itália conquistou o ouro oito vezes, e cada uma das outras três edições do torneio foi conquistada por um time diferente.\n[…]\nA partir de 2016 a Liga Mundial utilizou o mesmo formato do Grand Prix.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Liga Mundial de Voleibol",
      "descricao": "Torneio anual de seleções masculinas de vôlei organizado pela federação internacional entre 1990 e 2017."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Liga Mundial de vôlei masculino deixou de existir em 2017. Quantas vezes o Brasil foi campeão dela?",
    "resposta": "Nove",
    "distratores": [
      "Seis",
      "Sete",
      "Doze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/FIVB_Volleyball_World_League",
      "https://pt.wikipedia.org/wiki/Liga_Mundial_de_Voleibol"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/FIVB_Volleyball_World_League",
        "situacao": "ok",
        "texto": "The FIVB Volleyball World League was an annual international men's volleyball competition. Created in 1990, it was the longest and richest of all the international events organized by the Fédération Internationale de Volleyball (FIVB). The women's version of the competition was called FIVB Volleyball World Grand Prix. This event should not be confused with the other international volleyball compet\n[…]\nFrom 2018, the World League and World Grand Prix was replaced by the men's and women's Nations League and men's and women's Challenger Cup.\n[…]\nThe World League was created in 1990 as part of the intensive marketing programme that would become a distinctive mark of the FIVB's activities near the end of the century. The idea was to promote the sport of volleyball by establishing an annual competition that would appeal to audiences all over the world.\n[…]\nAs can be seen, Italy were clearly the dominant team in the first decade of the World League: from 1990 to 2000, the World League was played 11 times, and Italy took gold eight times, while the remaining three titles were won by three different teams.\n[…]\nItaly's supremacy in the World League began to wane in 2001, when Brazil won a second gold medal, beating the Italians in three straight sets. With further titles each year from 2003 to 2007, and winning another titles in 2009 and 2010, the Brazilians were the preeminent at the start of the 21st century, being also World and Olympic Champions.\n[…]\nThe FIVB is constantly adapting the World League's competition formula to improve competitiveness and to make the games more attractive to the audience. Nevertheless, a few basic rules and restrictions will probably remain unchanged in the following years.\n[…]\nBrazil and Italy are the only teams that participated in all editions of the World League.\n[…]\nFédération Internationale de Volleyball – official website\n[…]\nFIVB Volleyball World League – official website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Liga_Mundial_de_Voleibol",
        "situacao": "ok",
        "texto": "A Liga Mundial de Voleibol foi uma competição anual de voleibol masculino. Criado em 1990, o torneio era o mais longo e mais rico dentre todos os eventos internacionais organizados pela FIVB. Em 2011, foram distribuídos vinte milhões de dólares entre os times participantes.\n[…]\nA edição de 2017 foi, também, a última desta competição. A partir de 2018, a mesma foi substituída pela Liga das Nações de Voleibol Masculino.\n[…]\nA estratégia da FIVB acabou provando-se visionária: na virada do século, a Liga Mundial já estava plenamente consolidada como uma importante competição internacional de voleibol. Aos olhos da federações nacionais, a falta de tradição do torneio era compensada pelas generosas recompensas em dinheiro que eram oferecidas aos participantes: entre 1990 e 2004, o total gasto com premiações pulou de um para treze milhões de dólares.\n[…]\nInspirada pelo sucesso da Liga Mundial, a FIVB introduziu em 1993 um projeto análogo para o voleibol feminino, o Grand Prix. No inicio, esta medida obteve enorme sucesso no leste da Ásia, onde esta modalidade esportiva tornou-se muito popular e posteriormente ela se consolidou nos outros continentes.\n[…]\nNos anos 1990, a Itália dominou completamente a Liga Mundial, vencendo logo as três primeiras edições do torneio: 1990, 1991 e 1992. Sediando a fase final, o Brasil - então campeão olímpico - conseguiu conquistar o ouro em 1993, mas os italianos retornaram ao lugar mais alto do pódio em 1994 e 1995.\n[…]\nA França ingressou no grupo de seleções campeãs ao derrotar a Sérvia e conquistar seu primeiro título da Liga Mundial em 2015, sendo a última vencedora da competição com o triunfo de 2017. Em 2016, após ter perdido o título em cinco oportunidades, a Sérvia conquistou sua única medalha de ouro.\n[…]\nEm 2017:"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Confederação Brasileira de Voleibol",
      "descricao": "Entidade que organiza o vôlei de quadra e de praia no Brasil e administra as seleções nacionais."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A Confederação Brasileira de Voleibol, que comanda as seleções do país, foi fundada em que década?",
    "resposta": "Anos cinquenta",
    "distratores": [
      "Anos trinta",
      "Anos setenta",
      "Anos noventa"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Confedera%C3%A7%C3%A3o_Brasileira_de_Voleibol"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Confedera%C3%A7%C3%A3o_Brasileira_de_Voleibol",
        "situacao": "ok",
        "texto": "Confederação Brasileira de Voleibol (CBV) é a entidade máxima do Voleibol e Voleibol de praia no Brasil. É responsável pela organização de campeonatos nacionais, como a Superliga (masculina e feminina), e administração das seleções nacionais. A entidade é filiada ao Comitê Olímpico do Brasil (COB) e à Confederação Sul-Americana de Voleibol (CSV). A sede está localizada na Barra da Tijuca, Rio de J\n[…]\nÉ considerada uma das confederações esportivas mais organizadas do Brasil, e consequentemente tem um dos esportes que apresentam o maior crescimento de interesse no país. A CBV é responsável por oito medalhas de ouro nas Olimpíadas, sendo cinco na quadra e três na praia. A entidade conta atualmente com 27 federações filiadas e mais de 87 mil atletas - entre vôlei de quadra e praia - em seus cadastros.\n[…]\nA CBV foi fundada em 6 de agosto de 1954. No início, o voleibol brasileiro era ligado à Confederação Brasileira de Desportos (CBD). Seu primeiro presidente foi o ex-jogador Denis Rupet Hathaway, entre 14 de março de 1955 e 15 de fevereiro de 1957.\n[…]\nAcumulando também a Confederação Sul-americana de Voleibol e a FIVB, Graça renunciou à presidência da CBV em 2014.\n[…]\nA CBV organiza diversos campeonatos nacionais ao longo de uma temporada. As categorias de base, como a \"juvenil\" e a \"infanto\", disputam o Campeonato Brasileiro de Seleções, com uma disputa entre estados, em alguns casos com três divisões. Para a categoria \"master\" é realizado o Vôlei Master, competição para jogadores distribuídos por idade.\n[…]\nAs principais competições do ano, para os profissionais, são a Superliga e a Superliga B, a Copa Brasil e a Supercopa.\n[…]\nÚltima convocação realizada para a Liga das Nações de Voleibol Feminino de 2025 (Lódz):\n[…]\nSeleção Brasileira de Voleibol Masculino\n[…]\nSeleção Brasileira de Voleibol Feminino\n[…]\nComitê Olímpico Brasileiro\n[…]\nConfederação Sul-Americana de Voleibol\n[…]\nFederação Internacional de Voleibol"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Haikyu!!",
      "descricao": "Mangá e anime japonês de Haruichi Furudate sobre um time colegial de vôlei."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O título do mangá japonês Haikyu, sobre um time colegial que sonha com o campeonato nacional, é a palavra japonesa para que esporte?",
    "resposta": "Vôlei",
    "fonte": [
      "https://en.wikipedia.org/wiki/Haikyu!!"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Haikyu!!",
        "situacao": "ok",
        "texto": "Haikyu!! (ハイキュー!!, Haikyū!!; from the kanji 排球, 'volleyball') is a Japanese manga series written and illustrated by Haruichi Furudate. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2012 to July 2020, with its chapters collected in 45 tankōbon volumes. The story follows Shoyo Hinata, a boy determined to become a great volleyball player despite his small stat\n[…]\nBoth the manga and anime have been met with positive responses. In 2016, Haikyu!! won the 61st Shogakukan Manga Award for the shōnen category. By December 2025, the manga had over 75 million copies in circulation, making it one of the best-selling manga series of all time.\n[…]\nHaikyu!! received the 61st Shogakukan Manga Award for the shōnen category in 2016. Additionally, the series ranked fourth out of a total of fifteen comics recommended in Honya Club's Zenkoku Shoten'in ga Eranda Osusume Comic 2013 ranking. In November 2014, readers of Da Vinci magazine voted Haikyu!! the eighteenth Weekly Shōnen Jump's greatest manga series of all time. Haikyu!!\n[…]\nIn December 2016, the 24th volume topped Oricon's Top 10 Weekly Sales chart, selling 282,363 copies in its first three days. During the week of May 11–17, 2020, Haikyu!! was the second best-selling manga on Oricon's Top 10 Weekly Chart, selling 473,858 copies in a week and ranking only below Demon Slayer: Kimetsu no Yaiba.\n[…]\nThe anime won Sports Series of the Decade at the Funimation's Decade of Anime poll, where the fans voted for their favorite anime across multiple categories. On Tumblr's Year in Review, which highlights the largest communities, fandoms, and trends on the platform throughout the year, Haikyu!! ranked second behind My Hero Academia on the Top Anime & Manga Shows category in 2020; it ranked third in 2021.\n[…]\nOfficial manga website at Weekly Shōnen Jump (in Japanese)\n[…]\nHaikyu!! (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Haikyu%21%21",
        "situacao": "ok",
        "texto": "Haikyū!! (ハイキュー!!, Haikyū!!; do kanji 排球 \"voleibol\") é uma série de mangá escrita e ilustrada por Haruichi Furudate. Foi serializada na revista Weekly Shōnen Jump, da Shueisha, de fevereiro de 2012 a julho de 2020, com seus capítulos compilados em 45 volumes tankōbon. O mangá foi licenciado na América do Norte pela Viz Media e no Brasil pela Editora JBC. A história acompanha Shoyo Hinata, um garot\n[…]\nTanto o mangá quanto o anime foram recebidos positivamente. Em 2016, Haikyu!! ganhou o 61º Prêmio Shogakukan de Mangá na categoria shōnen. Em dezembro de 2025, o mangá tinha mais de 75 milhões de cópias em circulação, tornando-se uma das séries de mangá mais vendidas de todos os tempos.\n[…]\nO estudante do ensino médio Shōyō Hinata se apega ao voleibol após ver um jogo do campeonato nacional na televisão. Embora não seja muito alto, ele se determina a seguir os passos do ídolo do campeonato, apelidado \"Pequeno Gigante\", após ver os seus jogos. Ele cria um clube de voleibol e começa a praticar sozinho.\n[…]\nEventualmente, os outros cinco membros juntam-se à equipa no seu último ano do ensino fundamental, mas são derrotados no seu primeiro torneio depois de serem desafiados pela equipa favorita do campeonato, que inclui o chamado \"Rei da Corte\" Tobio Kageyama, na primeira rodada. Embora a equipa de Shōyō sofra uma derrota miserável, ele promete eventualmente superar Tobio e derrotá-lo. Mas quando ele entra no ensino médio logo descobre que estão na mesma equipa de vólei.\n[…]\n«Página do manga» (em japonês). na Weekly Shōnen Jump\n[…]\n«Página oficial do animé» (em japonês)\n[…]\nHaikyū!! (mangá) na enciclopédia do Anime News Network (em inglês)\n[…]\nHaikyū!! (anime) na enciclopédia do Anime News Network (em inglês)\n[…]\nHaikyū!! Second Season (anime) na enciclopédia do Anime News Network (em inglês)\n[…]\nHaikyū!! Karasuno Kōkō VS Shiratorizawa Gakuen Kōkō (anime) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Oposto",
      "descricao": "Posição do vôlei de quadra ocupada pelo atacante que fica na diagonal do levantador no rodízio."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No vôlei, o principal atacante do time costuma jogar na posição chamada de oposto. Oposto a quem?",
    "resposta": "Ao levantador",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Voleibol",
      "https://en.wikipedia.org/wiki/Volleyball"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol",
        "situacao": "ok",
        "texto": "Voleibol, também conhecido pelas formas reduzidas vôlei (português brasileiro) e vólei (português europeu), é um esporte praticado numa quadra dividida em duas partes por uma rede, possuindo duas equipes de seis jogadores em cada lado. O voleibol foi originalmente chamado de Mintonette, devido à sua semelhança com o Badminton. Ele também tem alguns elementos de tênis e handebol e até beisebol porq\n[…]\nApós o ataque adversário, o time procura interceptar a trajetória da bola com os braços ou com outras partes do corpo para evitar que ela aterrisse na quadra. Se obtém sucesso, diz-se que foi feita uma defesa, e seguem-se novos levantamento e ataque. O jogo continua até que uma das equipes cometa um erro ou consiga fazer a bola tocar o campo do lado oponente.\n[…]\nO jogador saca quando não está na posição 1.\n[…]\nTambém chamado recepção, o passe é o primeiro contato com a bola por parte do time que não está sacando e consiste, em última análise, em tentativa de evitar que a bola toque a sua quadra, o que permitiria que o adversário marcasse um ponto. Além disso, o principal objetivo deste fundamento é controlar a bola de forma a fazê-la chegar rapidamente e em boas condições nas mãos do levantador, para que este seja capaz de preparar uma jogada ofensiva.\n[…]\nA posição da manchete deve ser executada com eficiência. É considerada um princípio de defesa. O líbero é o que fica encarregado de pegar saques e cortes, usando a manchete. E no caso de alguns levantadores a manchete é usada para uma melhor colocação da bola para o atacante.\n[…]\nO levantamento é normalmente o segundo contato de um time com a bola. Seu principal objetivo consiste em posicioná-la de forma a permitir uma ação ofensiva por parte da equipe, ou seja, um ataque.\n[…]\nTambém costuma-se utilizar o termo \"levantamento de costas\", em referência à situação em que a bola é lançada na direção oposta àquela para a qual o levantador está olhando."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball",
        "situacao": "ok",
        "texto": "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the program at the Atlanta 1996 Summer Olympics. The adapted version of volleyball at the Su\n[…]\nDouble quick hit/\"Stack\"/\"Tandem\": a variation of quick hit where two hitters, one in front and one behind the setter or both in front of the setter, jump to perform a quick hit at the same time. It can be used to deceive opposite blockers and free a fourth hitter attacking from back-court, maybe without block at all.\n[…]\nIn the 6–2 formation, a player always comes forward from the back row to set. The three front row players are all in attacking positions. As a result, all six players act as hitters at one time or another, while two can act as setters. So the 6–2 formation is now a 4–2 system, but the back-row setter penetrates to set. The 6–2 lineup thus requires two setters, who line up opposite to each other in the rotation.\n[…]\nThe player opposite the setter in a 5–1 rotation is called the opposite hitter. In general, opposite hitters do not pass; they stand behind their teammates when the opponent is serving. The opposite hitter may be used as a third attack option (back-row attack) when the setter is in the front row: this is the normal option used to increase the attack capabilities of modern volleyball teams. Normally the opposite hitter is the most technically skilled hitter of the team.\n[…]\nThe big advantage of the system is that the setter always has 3 hitters with which to vary sets. If the setter performs well, the opponent's middle blocker may not have enough time to block with the outside blocker, increasing the chance for the attacking team to make a point."
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Federação Internacional de Voleibol",
      "descricao": "Entidade que governa o vôlei de quadra e de praia no mundo, conhecida pela sigla FIVB."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A sigla da federação internacional de vôlei, efe i vê bê, abrevia um nome escrito em que língua?",
    "resposta": "Francês",
    "fonte": [
      "https://en.wikipedia.org/wiki/FIVB"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/FIVB",
        "situacao": "ok",
        "texto": "The Fédération Internationale de Volleyball (French for 'International Volleyball Federation'), commonly known by the acronym FIVB, is the international governing body for all forms of volleyball. Its headquarters are located in Lausanne, Switzerland, and its current president is Fabio Azevedo of Brazil.\n[…]\nBefore the FIVB was founded volleyball was part of the International Amateur Handball Federation. The FIVB was founded in France in April 1947. In the late 1940s, some of the European national federations began to address the issue of creating an international governing body for the sport of volleyball. Initial discussions eventually lead to the installation of a Constitutive Congress in 1947.\n[…]\nIn 1964, the IOC endorsed the addition of volleyball to the Olympic programme. By this time, the number of national federations affiliated to the FIVB had grown to 89. Later in that year (1969), a new international event, the World Cup was introduced. It would be turned into a qualifying event for the Olympic Games in 1991.\n[…]\nFollowing Libaud's retirement and the election of Mexican Rubén Acosta Hernandez for the position of president in 1984, the FIVB moved its headquarters from Paris, France to Lausanne, Switzerland and intensified to an unprecedented level its policy of promoting volleyball on a worldwide basis.\n[…]\nIn response to the 2022 Russian invasion of Ukraine, the Fédération Internationale de Volleyball suspended all Russian national teams, clubs, and officials, as well as beach and snow volleyball athletes, from all events, and stripped Russia of the right to host the 2022 FIVB Volleyball Men's World Championship in August 2022, and relocated games that were to be in Russia in June and July.\n[…]\nFIVB Tribunal\n[…]\nList of international sports federations\n[…]\nFIVB Sports Regulations - Volleyball"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Federa%C3%A7%C3%A3o_Internacional_de_Voleibol",
        "situacao": "ok",
        "texto": "Federação Internacional de Voleibol (FIVB) (francês: Fédération Internationale de Volleyball) é a instituição que coordena as atividades de voleibol em nível internacional cuja sede está localizada em Lausanne, Suíça.\n[…]\nA FIVB foi fundada em Paris, França\n[…]\nNo final da década de 1940, algumas dentre as federações nacionais europeias começaram a colocar-se a questão sobre a possibilidade de criar um órgão internacional para coordenar o desenvolvimento do voleibol.\n[…]\nEm 1964, o COI endossou o acréscimo do voleibol ao programa de esportes dos Jogos Olímpicos. Nesta época, o número de federações filiadas à FIVB já havia pulado para 89 e cinco anos mais tarde, foi introduzido um novo evento internacional, a Copa do Mundo, o qual se tornaria em 1991 torneio qualificatório para as Olimpíadas.\n[…]\nDiversas medidas foram tomadas neste sentido, como por exemplo: o estabelecimento de torneios internacionais anuais (para os homens, a Liga Mundial, em 1990, e para as mulheres, o Grand Prix, em 1993); a indicação do Voleibol de praia como esporte olímpico (1996); e uma série de mudanças nas regras do jogo com o objetivo de aumentar o interesse do público. Em 2020, a FIVB atinge o número de 222 federações filiadas.\n[…]\nA principal atividade da FIVB é o planejamento e a organização de eventos de voleibol, à vezes em parceria com outras instituições internacionais tais como o COI. Em linhas gerais, isto significa definir regras de qualificação e fórmulas de disputa para as competições, bem como detalhes mais específicos tais como restrições para convocação e substituição de jogadores, locais para as partidas e anfitriões para os torneios.\n[…]\nEntre outros, a FIVB organiza os seguintes eventos internacionais:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Voleio",
      "descricao": "Golpe em que se bate na bola no ar, antes que ela toque o chão, termo usado no tênis e no futebol."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O nome do vôlei vem do inglês volley, a mesma palavra que deu origem ao voleio do futebol. Que ação ela descreve?",
    "resposta": "Bater na bola sem deixá-la quicar",
    "fonte": [
      "https://en.wiktionary.org/wiki/volley",
      "https://en.wikipedia.org/wiki/Volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wiktionary.org/wiki/volley",
        "situacao": "ok",
        "texto": "From Middle French volée ( “ flight ” ) , from Vulgar Latin volta , from Late Latin volatus .\n[…]\n2011 October 1, John Sinnott, “Aston Villa 2–0 Wigan”, in BBC Sport ‎ [1] , archived from the original on 4 February 2012 : But there was nothing he could do about Villa's second when Agbonlahor crossed from the left and Bent finished with a precision volley .\n[…]\nPortuguese: voleio   (pt)   m ( Brazil ) , vólei   (pt)   m ( Portugal )\n[…]\nshot in which the ball is played before it hits the ground — see also punt ,‎ half volley\n[…]\nvolley ( third-person singular simple present volleys , present participle volleying , simple past and past participle volleyed )\n[…]\n( transitive ) To fire a volley of shots.\n[…]\n2011 May 14, Peter Scrivener, “Sunderland 1–3 Wolverhampton”, in BBC Sport ‎ [2] , archived from the original on 12 August 2012 : Boudewijn Zenden hit the post from 25 yards for the home side before Jody Craddock volleyed Wolves ahead from 10 yards against his former club.\n[…]\n( intransitive ) To be fired in a volley.\n[…]\n( sports , intransitive ) To make a volley.\n[…]\nto hit the ball before it touches the ground — see also punt ,‎ half volley\n[…]\nPseudo-anglicism , derived from a clipping of volleyball .\n[…]\n“ volley ”, in Trésor de la langue française informatisé [ Digitized Treasury of the French Language ], 2012\n[…]\n“ volley ”, in Digitales Wörterbuch der deutschen Sprache ‎ [3] (in German)\n[…]\nPseudo-anglicism , derived from volleyball .\n[…]\nRetrieved from \" https://en.wiktionary.org/w/index.php?title=volley&oldid=92418794 \""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball",
        "situacao": "ok",
        "texto": "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the program at the Atlanta 1996 Summer Olympics. The adapted version of volleyball at the Su\n[…]\nCrossnet: a four-way volleyball game, combining volleyball and foursquare.\n[…]\nNewcomb ball (sometimes spelled \"Nuke 'Em\"): In this game, the ball is caught and thrown instead of hit; it rivaled volleyball in popularity until the 1920s.\n[…]\nPrisoner Ball: Also played with volleyball court and a volleyball, prisoner ball is a variation of Newcomb ball where players are \"taken prisoner\" or released from \"prison\" instead of scoring points. This version is usually played by young children.\n[…]\nSnow volleyball: a variant of beach volleyball that is played on snow. The Fédération Internationale de Volleyball has announced its plans to make snow volleyball part of the future Winter Olympic Games programme.\n[…]\nTowel volleyball: towel volleyball is a popular form of outdoor entertainment. The game takes place in a volleyball court, and players work in pairs, holding towels in their hands and attempting to throw the ball into the opponent's field. This version can also be played with blankets held by four people. There are several variations.\n[…]\nVolley squash, a form of volleyball played within a squash court or similar sized enclosed space.\n[…]\nWallyball: A variation of volleyball played in a racquetball court with a rubber ball.\n[…]\nLists of volleyball players – lists of notable players, and fictional players\n[…]\nList of volleyball video games\n[…]\nVolleyball Hall of Fame\n[…]\nVolleyball jargon\n[…]\nVolleyball injuries\n[…]\nFédération Internationale de Volleyball – FIVB\n[…]\nUSA Volleyball\n[…]\nAmerican Volleyball Coaches Association"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol",
        "situacao": "ok",
        "texto": "Voleibol, também conhecido pelas formas reduzidas vôlei (português brasileiro) e vólei (português europeu), é um esporte praticado numa quadra dividida em duas partes por uma rede, possuindo duas equipes de seis jogadores em cada lado. O voleibol foi originalmente chamado de Mintonette, devido à sua semelhança com o Badminton. Ele também tem alguns elementos de tênis e handebol e até beisebol porq\n[…]\nO objetivo da modalidade é fazer a bola passar sobre a rede de modo a que a bola toque no chão dentro da quadra adversária, ao mesmo tempo que se evita que os adversários consigam fazer o mesmo. O voleibol é um desporto olímpico, regulado pela Fédération Internationale de Volleyball (FIVB).\n[…]\nO vôlei foi criado em 9 de fevereiro de 1895 por William George Morgan nos Estados Unidos. O objetivo de Morgan, que trabalhava na \"Associação Cristã de Moços\" (ACM), era criar um esporte de equipes sem contato físico entre os adversários, de modo a minimizar os riscos de lesões. Inicialmente jogava-se com uma câmara de ar da bola de basquetebol e foi chamado Mintonette, mas rapidamente ganhou popularidade com o nome de volleyball.\n[…]\nOs \"dois toques\" são permitidos no primeiro contato do time com a bola, desde que ocorram em uma \"ação simultânea\" - a interpretação do que é ou não \"simultâneo\" fica a cargo do arbitro.\n[…]\nSaque com efeito: denominado em inglês spin serve, trata-se de um saque em que a bola ganha velocidade ao longo da trajetória, ao invés de perdê-la, graças a um efeito produzido dobrando-se o pulso no momento do contato.\n[…]\nO levantamento é normalmente o segundo contato de um time com a bola. Seu principal objetivo consiste em posicioná-la de forma a permitir uma ação ofensiva por parte da equipe, ou seja, um ataque.\n[…]\nPeixinho: o jogador atira-se no ar, como se estivesse mergulhando, para interceptar uma bola, e termina o movimento sob o próprio abdômen.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Vôlei de praia nos Jogos Olímpicos de 2016",
      "descricao": "Torneios olímpicos de vôlei de praia disputados no Rio de Janeiro em 2016."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Londres 2012 e no Rio 2016, duplas brasileiras perderam finais olímpicas de vôlei de praia para duplas do mesmo país. Qual?",
    "resposta": "Alemanha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2016_Summer_Olympics",
      "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2012_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2016_Summer_Olympics",
        "situacao": "ok",
        "texto": "The volleyball tournaments at the 2016 Summer Olympics in Rio de Janeiro was played between 6 and 21 August. 24 volleyball teams and 48 beach volleyball teams, total 386 athletes, participated in the tournament. The indoor volleyball competition took place at Ginásio do Maracanãzinho in Maracanã, and the beach volleyball tournament was held at Copacabana Beach, in the temporary Copacabana Stadium.\n[…]\nVolleyball at the 2016 Summer Paralympics\n[…]\n\"Volleyball at the 2016 Summer Olympics (Rio2016.com)\". Archived from the original on 26 August 2016. Retrieved 23 July 2018.\n[…]\nVolleyball at the 2016 Summer Olympics at SR/Olympics (archived)\n[…]\n\"Beach Volleyball at the 2016 Summer Olympics (Rio2016.com)\". Archived from the original on 26 August 2016. Retrieved 23 July 2018.\n[…]\nBeach Volleyball at the 2016 Summer Olympics at SR/Olympics (archived)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball_at_the_2012_Summer_Olympics",
        "situacao": "ok",
        "texto": "The volleyball tournaments at the 2012 Olympic Games in London were played between 28 July and 12 August.\n[…]\nMedia related to Volleyball at the 2012 Summer Olympics at Wikimedia Commons Media related to Beach volleyball at the 2012 Summer Olympics at Wikimedia Commons\n[…]\nVolleyball at the 2012 Summer Olympics. London2012.com. at the UK Government Web Archive (archived 28 February 2013)\n[…]\nBeach Volleyball at the 2012 Summer Olympics. London2012.com. at the UK Government Web Archive (archived 28 February 2013)\n[…]\nVolleyball at the 2012 Summer Olympics at SR/Olympics (archived)\n[…]\nBeach Volleyball at the 2012 Summer Olympics at SR/Olympics (archived)"
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
    "indice": 34,
    "ancora": {
      "nome": "Bebeto de Freitas",
      "descricao": "Técnico brasileiro de vôlei que comandou a seleção masculina prata em Los Angeles 1984 e depois foi dirigente de futebol."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Técnico da seleção masculina de vôlei que ganhou a prata em 1984, Bebeto de Freitas foi depois presidente de que clube carioca de futebol?",
    "resposta": "Botafogo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bebeto_de_Freitas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bebeto_de_Freitas",
        "situacao": "ok",
        "texto": "Paulo Roberto de Freitas (Rio de Janeiro, 16 de janeiro de 1950 — Vespasiano, 13 de março de 2018), conhecido como Bebeto de Freitas, foi um jogador e treinador de voleibol brasileiro, sobrinho do jornalista e treinador de futebol João Saldanha e primo por parte de pai do jogador de futebol Heleno de Freitas.\n[…]\nBebeto de Freitas foi um dos mais importantes jogadores de vôlei do Botafogo, tendo conquistado onze campeonatos cariocas de vôlei consecutivos (de 1965 até 1975), além de ter defendido a seleção brasileira nos Jogos Olímpicos de 1972, em Munique e nos Jogos Olímpicos de 1976 em Montreal.\n[…]\nA fase no Atlético fez despertar o interesse em dirigir o Botafogo, seu clube de coração. No início de 2002, chegou a assumir um cargo como diretor do clube carioca, mas em poucos meses pediu afastamento pois, por ser funcionário, não poderia se candidatar ao cargo de presidente ao final daquele ano e também por discordar da gestão do então presidente Mauro Ney Palmeiro.\n[…]\nEleito para um mandato não remunerado inicial de três anos, entre 2003 e 2005, Bebeto de Freitas iniciou um processo de reestruturação do clube. Sua direção teve como marco importante, a volta do time de futebol à primeira divisão do Campeonato Brasileiro. Reeleito até 2008, conquistou os títulos de futebol profissional da Taça Guanabara e do Campeonato Carioca de 2006, e da Taça Rio, de 2007 e 2008.\n[…]\nBebeto de Freitas foi um dos homens de frente na luta da aprovação da Timemania, que poderia solucionar parte das dívidas do clube. Além disso, em sua gestão, o clube - a partir da empresa criada por ele, a Cia. Botafogo - conquistou a concessão do Estádio Nilton Santos, em 2007.\n[…]\n«Canal Botafogo»\n[…]\n«Sítio Oficial do Botafogo de Futebol e Regatas»"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Jaqueline Carvalho",
      "descricao": "Ex-jogadora brasileira de vôlei, campeã olímpica com a seleção em Pequim 2008 e Londres 2012."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A bicampeã olímpica Jaqueline Carvalho foi casada com que jogador da seleção masculina de vôlei, irmão do central Gustavo?",
    "resposta": "Murilo Endres",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jaqueline_Carvalho",
      "https://en.wikipedia.org/wiki/Murilo_Endres"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jaqueline_Carvalho",
        "situacao": "ok",
        "texto": "Jaqueline Maria Pereira de Carvalho Endres (born December 31, 1983) is a Brazilian volleyball player, a member of the Brazilian team that won the Olympic Games at Beijing 2008 and London 2012. She currently plays for the Esporte Clube Pinheiros team.\n[…]\nCarvalho started her career with Gremio de Volei Osasco in 2002, before moving to Unilever Rio de Janeiro in 2004. In 2006 she moved to play in Europe for Vini Monteschiavo Jesi, later joining Gruppo Murcia 2002 and Scavolini Pesaro.\n[…]\nAfter finishing as runner-up in the Brazilian league in April 2013 with Osasco, Jaqueline announced her pregnancy. Arthur, her son from a 12-year relationship with fellow volleyball player Murilo Endres, was born in December. After his birth, she resumed training with the goal of playing in the final stage of the 2013–14 Women's Brazilian Volleyball Superliga - Série A for Osasco, as agreed after announcing her pregnancy.\n[…]\nCarvalho joined Camponesa-Minas for the 2014/15 season, before moving to play for Sesi-SP.\n[…]\nCarvalho is married to fellow Brazilian volleyball player Murilo Endres, with whom she has a son named Arthur.\n[…]\nCarvalho is the aunt of Enzo Endres and Eric Endres, who also play volleyball.\n[…]\nShe is the sister-in-law of former Brazilian volleyball player Gustavo Endres.\n[…]\nVôlei Osasco (2002–2004)\n[…]\nCampinas Vôlei (2023)\n[…]\n2002–03 Brazilian Superliga –  Champion, with Osasco Vôlei\n[…]\n2003–04 Brazilian Superliga –  Champion, with Osasco Vôlei\n[…]\nJaqueline Carvalho at FIVB.com\n[…]\nJaqueline Carvalho at FIVB.org World Grand Prix 2007\n[…]\nJaqueline Carvalho at the European Volleyball Confederation\n[…]\nJaqueline Carvalho at Olympics.comJaqueline Carvalho at Olympic.org (archived)\n[…]\nJaqueline Carvalho at Olympedia\n[…]\nJaqueline Carvalho at the Comitê Olímpico do Brasil  (in Portuguese)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Murilo_Endres",
        "situacao": "ok",
        "texto": "Murilo Endres (born 3 May 1981) is a Brazilian volleyball player, member of Brazil men's national volleyball team and Brazilian club SESI São Paulo. He is a double silver medalist of the Olympic Games from Beijing 2008 and London 2012, World Champion (2006, 2010), silver medalist of the World Championship 2014, multimedalist of the World League, South American Championship, World Cup and the Grand\n[…]\nFrom 2006 up to the 2009 season Endres played in Italian League at the club Modena. He played as wing spiker for Sesi São Paulo for the 2010/2011 season, in Brazil.\n[…]\nWith the Brazil national team he won seven World Leagues (2003, 2004, 2005, 2006, 2007, 2009, 2010), one World Cup (2007) and two World Championships (2006, 2010). He was named the MVP of 2010 World Championship and 2010 World League. He competed at the 2008 Summer Olympics and at the 2012 Summer Olympics, winning the silver medal both times. Murilo won the silver medal and the \"Best receiver\" award at the 2011 FIVB World League. Murilo Endres star player national team in season 2012.\n[…]\nHe was also named the MVP of the 2012 Summer Olympics tournament. Murilo went through a shoulder surgery in 2013 and was out of the national team for the whole season. In 2014, the wing spiker got back to the national team and helped the team to achieve the silver medal in the FIVB World League. Murilo Endres in 2010 year he was given Prêmio Brasil Olímpico as the best Brazilian athlete of the year.\n[…]\nEndres served an eight-month competition ban during 2017 for an anti-doping rule violation for unintentional use of furosemide that he had ingested from a contaminated product.\n[…]\nOn October 22, 2009 he married Jaqueline Carvalho, who is also a Brazilian volleyball player with whom he has a son.\n[…]\nMurilo Endres at FIVB.com\n[…]\nMurilo Endres at FIVB.org World League 2011\n[…]\nMurilo Endres at Olympedia\n[…]\nMurilo Endres at Olympics.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jaqueline_Carvalho",
        "situacao": "ok",
        "texto": "Jaqueline Maria Pereira de Carvalho Endres (Recife, 31 de dezembro de 1983) é uma voleibolista brasileira bicampeã olímpica. Atuava na posição de ponteira-passadora e atualmente atua como libero. Casou-se em 2009 com o também jogador de vôlei Murilo Endres.\n[…]\nLogo após o vice-campeonato brasileiro em abril de 2013 pelo time do Osasco, Jaqueline anunciou que estava grávida. Arthur, fruto do relacionamento de 12 anos com o também jogador de vôlei Murilo Endres, nasceu em dezembro. A partir do seu nascimento, Jaqueline retomou às atividades físicas, com o objetivo de ainda jogar a fase final da Superliga Brasileira de Voleibol Feminino de 2013–14 - Série A pelo próprio time de Osasco, conforme acordo feito pós anúncio da gravidez.\n[…]\nNa temporada 2017/2018, Jaque foi peça fundamental na recepção, defesa e ataque do time treinado pelo técnico tricampeão olímpico José Roberto Guimarães, o Hinode Barueri, de São Paulo, Vice Campeão paulista e 5º colocado na Superliga.\n[…]\nJaqueline e Murilo Endres se conheceram em 1998, quando ela jogava no BCN/Osasco e ele, no Banespa. Ele, com 16 anos, foi assistir a um treino dela, então com 14 anos, e se encantou. Através de amigos, obteve o número de telefone da jogadora. Desse dia ao início do namoro foram três meses. Depois de anos defendendo clubes na Europa, em 2009, os atletas, já noivos, regressaram ao Brasil para oficializar a relação que já durava cerca de dez anos.\n[…]\nEm maio de 2011, teve uma gravidez interrompida devido a um aborto espontâneo. Superado o trauma, Jaqueline novamente engravidou; sendo anunciado oficialmente para a mídia e o público, quase na reta final da gestação já. O primeiro filho do casal, Paulo Arthur Carvalho Endres, nasceu em 20 de dezembro de 2013.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Maracanãzinho",
      "descricao": "Ginásio poliesportivo vizinho ao estádio do Maracanã, no Rio de Janeiro, palco tradicional do vôlei."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Hoje símbolo do vôlei, o Maracanãzinho foi inaugurado em 1954 para receber o campeonato mundial de que outro esporte?",
    "resposta": "Basquete",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Maracan%C3%A3zinho",
      "https://en.wikipedia.org/wiki/1954_FIBA_World_Championship"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Maracan%C3%A3zinho",
        "situacao": "ok",
        "texto": "O Maracanãzinho é um ginásio inaugurado em 1954 com o nome Ginásio Gilberto Cardoso. Está localizado na cidade do Rio de Janeiro, Brasil e possui capacidade de público atual de 14 000 espectadores, com uma área total de ocupação de 22 940 m².\n[…]\nEntre muitos eventos internacionais que já abrigou, destaca-se o Rio Champions Tennis desde 2010, o Campeonato Mundial de Basquete Masculino em 1963, o Campeonato Mundial de Voleibol Masculino em 1990 e partidas de Voleibol Masculino nas Olimpíadas Rio 2016 em 2016. Encontra-se no Complexo Esportivo do Maracanã, ao lado do Estádio do Maracanã, do Estádio de Atletismo Célio de Barros e do Parque Aquático Júlio Delamare.\n[…]\nA arena do Maracanãzinho foi inaugurada em 1954 e além do Campeonatos Mundiais de Basquete (1963) e de Voleibol (1990).\n[…]\nEm 1981, a cantora Simone foi a primeira cantora a superlotar sozinha o ginásio.\n[…]\nCompanhias internacionais de Dança Clássica, Folclórica e Contemporâneas, como o Ballet Bolshoi. Também ocorreram jogos decisivos de campeonatos nacionais de basquete e vôlei, nos quais os grandes clubes do Rio de Janeiro eram mandantes: Botafogo, Flamengo, Fluminense e Vasco da Gama.\n[…]\nEm 1955, Gilberto Cardoso, presidente do Flamengo, assistia à final do campeonato de basquete, quando uma cesta no último segundo do jogo, que deu o título ao seu time, fulminou o coração do torcedor que morreu a caminho do hospital. A partir daí o Maracanãzinho recebeu o nome de Ginásio Gilberto Cardoso, por meio da Lei Municipal. É considerado o templo do voleibol no Brasil.\n[…]\nA calçada da fama do Maracanãzinho, foi inaugurada no dia 18 de abril de 2009, visando homenagear atletas que passaram (e fizeram história) pelo ginásio, em diversas modalidades.\n[…]\nMaracanazinho.com\n[…]\nComplexo do Maracanã"
      },
      {
        "url": "https://en.wikipedia.org/wiki/1954_FIBA_World_Championship",
        "situacao": "ok",
        "texto": "The 1954 FIBA World Championship (also called the 2nd World Basketball Championship – 1954) was the international basketball world championship for men's national teams. It was held by the International Basketball Federation, from 23 October to 5 November 1954. Brazil hosted the event at Ginásio do Maracanãzinho in Rio de Janeiro. Twelve nations participated in the tournament.\n[…]\nFIBA 1954 World Championships[link removed]\n[…]\nFIBA 1954 World Cup"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Uniforme do vôlei de praia",
      "descricao": "Regras de vestimenta dos jogadores de vôlei de praia, que por muito tempo exigiram biquíni das mulheres."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 2012, a federação internacional permitiu que as jogadoras de vôlei de praia trocassem o biquíni por bermuda e camiseta com mangas. Por quê?",
    "resposta": "Respeitar crenças religiosas e culturais",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beach_volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball",
        "situacao": "ok",
        "texto": "Beach volleyball or beach volley for short, is a team sport played by two teams of two to six players each on a sand court divided by a net. Similar to indoor volleyball, the objective of the game is to send the ball over the net and to ground it on the opponent's side of the court. Each team also works together to prevent the opposing team from grounding the ball on their side of the court.\n[…]\nThe primary international governing body for beach volleyball is the Fédération Internationale de Volleyball (FIVB). The regional governing bodies are:\n[…]\nOther players have argued that the bikini is tied to the sport's \"beach culture\".\n[…]\nSome conservative cultures have expressed religious objections to the swimsuit as a uniform. At the 2007 South Pacific Games, rules were adjusted to require less revealing shorts and cropped sports tops. At the 2006 Asian Games, only one Muslim country fielded a team in the women's competition, amid concerns the uniform was inappropriate.\n[…]\nIn early 2012, the FIVB announced it would allow shorts (maximum length 3 cm (1.2 in) above the knee) and sleeved tops at the London 2012 Olympics. The federation spokesman said that \"many of these countries have religious and cultural requirements so the uniform needed to be more flexible\". In fact, the weather was so cold for the evening games at London 2012 that the players sometimes had to wear shirts and leggings.\n[…]\nBeyond professional competition, beach volleyball has developed a recreational travel culture, with casual and amateur players participating in beach volleyball camps and training holidays at coastal destinations worldwide. These programs typically combine coaching, skill development, and social activities, allowing players to improve their game while experiencing the sport in different international locations."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_de_praia",
        "situacao": "ok",
        "texto": "Voleibol de praia (chamado frequentemente no Brasil de vôlei de praia e em Portugal de vólei de praia) é um desporto praticado na areia da praia ou numa quadra de areia dividida em duas metades por uma rede. É praticado por duas equipes, cada uma composta de dois jogadores.\n[…]\nNão existem erros de posicionamento na praia, os jogadores podem trocar de posição à vontade;\n[…]\nIsto é comum no voleibol de praia porque há menos jogadores, portanto áreas maiores ficam desprotegidas.\n[…]\nEm 1999, a FIVB padronizou os uniformes para o voleibol de praia. Os trajes de banho tornaram-se os uniformes requiridos tanto para homens quanto para mulheres.\n[…]\nDe acordo com a FIVB, as mulheres jogadoras de voleibol de praia podem escolher entre jogar de shorts ou com um traje único. Entretanto, a maior parte das jogadoras preferem o biquíni.\n[…]\nJogadoras como Natalie Cook e Holly McPeak confirmaram as afirmações da FIVB de que os uniformes são práticos para um esporte jogado na areia durante o calor do verão, mas a atleta britânica Denise Johns protestou, dizendo que a regulação dos uniformes tinha a intenção de ser “sensual” e chamar atenção.\n[…]\nNo começo de 2012, a Federação Internacional de Voleibol anunciou que permitiria shorts (com o comprimento máximo de 3 cm acima do joelho) e tops com mangas compridas nas Olimpíadas de 2012. Richard Baker, o porta-voz da federação, disse que “muitos destes países têm exigências culturais e religiosas, portanto o uniforme tinha de ser mais flexível”. E de fato o clima esteve tão frio durante os jogos à noite nas Olimpíadas de 2012 que às vezes as atletas tiveram de usar camisetas e leggings.\n[…]\nVoleibol de praia nos Jogos Olímpicos\n[…]\nMedalhistas olímpicos do voleibol de praia\n[…]\nCampeonato Mundial de Voleibol de Praia\n[…]\nCircuito Mundial de Voleibol de Praia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Sistema de pontuação por rali",
      "descricao": "Regra do vôlei em que todo rali vale ponto, independentemente de quem sacou, adotada pela FIVB em 1999."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Antes da pontuação por rali, adotada em 1999, um set comum de vôlei terminava quando um time chegava a quantos pontos?",
    "resposta": "Quinze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball",
        "situacao": "ok",
        "texto": "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the program at the Atlanta 1996 Summer Olympics. The adapted version of volleyball at the Su\n[…]\nBefore 1999, points could be scored only when a team had the serve (side-out scoring) and all sets went up to only 15 points. The FIVB changed the rules in 1999 (with the changes being compulsory in 2000) to use the current scoring system (formerly known as rally point system), primarily to make the length of the match more predictable and to make the game more spectator- and television-friendly. The final year of side-out scoring at the NCAA Division I Women's Volleyball Championship was 2000.\n[…]\nRally point scoring debuted in 2001, and games were played to 30 points through 2007. For the 2008 season, games were renamed \"sets\" and reduced to 25 points to win. Most high schools in the U.S. changed to rally scoring in 2003, and several states implemented it the previous year on an experimental basis.\n[…]\nAs with a set or an overhand pass, the setter/passer must be careful to touch the ball with both hands at the same time. If one hand is noticeably late to touch the ball this could result in a less effective set, as well as the referee calling a 'double hit' and giving the point to the opposing team.\n[…]\nThe big advantage of the system is that the setter always has 3 hitters with which to vary sets. If the setter performs well, the opponent's middle blocker may not have enough time to block with the outside blocker, increasing the chance for the attacking team to make a point."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol",
        "situacao": "ok",
        "texto": "Voleibol, também conhecido pelas formas reduzidas vôlei (português brasileiro) e vólei (português europeu), é um esporte praticado numa quadra dividida em duas partes por uma rede, possuindo duas equipes de seis jogadores em cada lado. O voleibol foi originalmente chamado de Mintonette, devido à sua semelhança com o Badminton. Ele também tem alguns elementos de tênis e handebol e até beisebol porq\n[…]\nO campo mede 18 metros de comprimento por 9 de largura (18 x 9 metros), e é dividido por uma linha central em um dos lados de nove metros que constituem as quadras de cada time. O objetivo principal é conquistar pontos fazendo a bola encostar na quadra adversária ou sair da área de jogo após ter sido tocada por um oponente.\n[…]\nComo o jogo termina quando um time completa três sets vencidos, cada partida de voleibol dura no máximo cinco sets. Se isto ocorrer, o último recebe o nome de tie-break e termina quando um dos times atinge a marca de 15, e não 25 pontos. Como no caso dos demais, também é necessária uma diferença de dois pontos com relação ao placar do adversário.\n[…]\nExistem basicamente duas formas de marcar pontos no voleibol. A primeira consiste em fazer a bola aterrissar sobre a quadra adversária como resultado de um ataque, de um bloqueio bem sucedido ou, mais raramente, de um saque que não foi corretamente recebido. A segunda ocorre quando o time adversário comete um erro ou uma falta.\n[…]\nUm time que deseja competir em nível internacional precisa dominar um conjunto de seis habilidades básicas, denominadas usualmente sob a rubrica \"fundamentos\". Elas são: saque, passe, levantamento, ataque, bloqueio e defesa. A cada um destes fundamentos compreende um certo número de habilidades e técnicas que foram introduzidas ao longo da história do voleibol e são hoje consideradas prática comum no esporte.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Quadra de vôlei",
      "descricao": "Superfície retangular onde se joga o vôlei de quadra, dividida ao meio pela rede."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A quadra oficial do vôlei mede dezoito metros de comprimento. Quantos metros ela tem de largura?",
    "resposta": "Nove metros",
    "distratores": [
      "Oito metros",
      "Dez metros",
      "Doze metros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball",
        "situacao": "ok",
        "texto": "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the program at the Atlanta 1996 Summer Olympics. The adapted version of volleyball at the Su\n[…]\nA serve is called an \"ace\" when the ball either lands directly onto the opponent's court or the first opponent to touch the ball is unable to volley it (hit it upwards enough for a teammate to continue).\n[…]\nContemporary volleyball comprises a number of attacking techniques:\n[…]\nThe pancake is frequently used in indoor volleyball, but rarely if ever in beach volleyball because the uneven and yielding nature of the sand court limits the chances that the ball will make good, clean contact with the hand. When used correctly, it is one of the more spectacular defensive volleyball plays.\n[…]\nPrisoner Ball: Also played with volleyball court and a volleyball, prisoner ball is a variation of Newcomb ball where players are \"taken prisoner\" or released from \"prison\" instead of scoring points. This version is usually played by young children.\n[…]\nTowel volleyball: towel volleyball is a popular form of outdoor entertainment. The game takes place in a volleyball court, and players work in pairs, holding towels in their hands and attempting to throw the ball into the opponent's field. This version can also be played with blankets held by four people. There are several variations.\n[…]\nVolley squash, a form of volleyball played within a squash court or similar sized enclosed space.\n[…]\nWallyball: A variation of volleyball played in a racquetball court with a rubber ball.\n[…]\nVolleyball jargon\n[…]\nVolleyball injuries\n[…]\nFédération Internationale de Volleyball – FIVB\n[…]\nUSA Volleyball\n[…]\nAmerican Volleyball Coaches Association"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol",
        "situacao": "ok",
        "texto": "Voleibol, também conhecido pelas formas reduzidas vôlei (português brasileiro) e vólei (português europeu), é um esporte praticado numa quadra dividida em duas partes por uma rede, possuindo duas equipes de seis jogadores em cada lado. O voleibol foi originalmente chamado de Mintonette, devido à sua semelhança com o Badminton. Ele também tem alguns elementos de tênis e handebol e até beisebol porq\n[…]\nO campo mede 18 metros de comprimento por 9 de largura (18 x 9 metros), e é dividido por uma linha central em um dos lados de nove metros que constituem as quadras de cada time. O objetivo principal é conquistar pontos fazendo a bola encostar na quadra adversária ou sair da área de jogo após ter sido tocada por um oponente.\n[…]\nPor fim, o líbero só pode realizar levantamentos de toque do fundo da quadra. Caso esteja pisando sobre a linha de três metros ou sobre a área por ela delimitada, deverá exercitar somente levantamentos de manchete, pois se o fizer de toque por cima (pontas dos dedos) o ataque deverá ser executado com a bola abaixo do bordo superior da rede.\n[…]\nUm jogador que está no fundo da quadra realiza um bloqueio.\n[…]\nUm jogador que está no fundo da quadra pisa na linha de três metros ou na área frontal antes de fazer contato com a bola acima do bordo superior da rede (\"invasão do fundo\").\n[…]\nPostado dentro da zona de ataque da quadra ou tocando a linha de três metros, o líbero realiza um levantamento de toque que é posteriormente atacado acima da altura da rede.\n[…]\nAtaque do fundo: ataque realizado por um jogador que não se encontra na rede, ou seja, por um jogador que não ocupa as posições 2-4. O atacante não pode pisar na linha de três metros ou na parte frontal da quadra antes de tocar a bola, embora seja permitido que ele aterrisse nesta área após o ataque.\n[…]\n«Sítio oficial da Federação Internacional de Voleibol - FIVB» (em inglês). www.fivb.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Vôlei de praia",
      "descricao": "Modalidade de vôlei disputada na areia por duplas."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No vôlei de praia, os dois primeiros sets de uma partida terminam quando uma dupla alcança quantos pontos?",
    "resposta": "Vinte e um",
    "distratores": [
      "Quinze",
      "Dezoito",
      "Vinte e cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Beach_volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beach_volleyball",
        "situacao": "ok",
        "texto": "Beach volleyball or beach volley for short, is a team sport played by two teams of two to six players each on a sand court divided by a net. Similar to indoor volleyball, the objective of the game is to send the ball over the net and to ground it on the opponent's side of the court. Each team also works together to prevent the opposing team from grounding the ball on their side of the court.\n[…]\nIn Brazil, the FIVB-approved Brazilian Beach Volleyball Circuit (pt:Circuito Brasileiro de Voleibol de Praia) is the main national tour. It has been organized by the Brazilian Volleyball Confederation since 1991. The tour consists of the main Open Circuit\n[…]\n4x4 beach volleyball is a variant of the regular two-man beach game that is popular in the United States and Brazil. FIVB-sanctioned matches are best of 3 sets played to 21 points (15 points in a third set tie-break), with four starting players and up to two substitutes in a team. 4x4 is contested at the World Beach Games.\n[…]\nSnow volleyball is a winter sport played by two teams on a snow court divided by a net. Originating as a variant of beach volleyball, the rules of snow volleyball are similar to the beach game, with the main differences being the playing surface, the scoring system and the number of players. As in the beach version, matches were originally best of 3 sets played to 21 points, with two players in a team.\n[…]\nIn December 2018, the FIVB approved new rules for snow volleyball which changed the scoring system to a best of 3 sets played to 15 points, and the number of players to three starters and one substitute in a team. Another difference is that unlike beach volleyball, a touch off block does not count as one of the three allowed touches, and any player may make the subsequent touch after the block.\n[…]\nBeach handball\n[…]\nBeach volleyball at the Summer Olympics\n[…]\nList of American beach volleyball players"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol_de_praia",
        "situacao": "ok",
        "texto": "Voleibol de praia (chamado frequentemente no Brasil de vôlei de praia e em Portugal de vólei de praia) é um desporto praticado na areia da praia ou numa quadra de areia dividida em duas metades por uma rede. É praticado por duas equipes, cada uma composta de dois jogadores.\n[…]\nEm 1996, nos Jogos Olímpicos de Atlanta, o voleibol de praia passou a integrar o programa Jogos Olímpicos. Na categoria feminina, a primeira medalha de ouro na modalidade foi conquistada por uma dupla brasileira, Jacqueline Silva e Sandra Pires, tendo como vice-campeãs as também brasileiras Mônica Rodrigues e Adriana Samuel. A dupla de portugueses Miguel Maia e João Brenha conseguiu duas quartas posições consecutivas, nos jogos de 1996 e de 2000.\n[…]\nDurante os dois primeiros sets, as equipes trocam de lados da quadra a cada sete pontos disputados. Durante o set de desempate, elas fazem isso a cada cinco pontos disputados;\n[…]\nAs equipes têm apenas dois jogadores, que não podem ser substituídos. Um jogador que se machuque tem cinco minutos para se recuperar. Caso não consiga, a dupla é considerada incompleta e perde a partida.\n[…]\nA partida é vencida pela primeira equipe que conseguir vencer dois sets. Um set é vencido pela equipe que completa 21 pontos primeiro, desde que haja uma diferença de dois pontos para a equipe adversária. Caso não haja, o set deve prosseguir até que tal diferença surja. Caso cada equipe vença um set, havendo um empate de 1 a 1, haverá um terceiro set para desempate. Este será vencido pela equipe que marcar 15 pontos primeiro.\n[…]\nEm 1999, a FIVB padronizou os uniformes para o voleibol de praia. Os trajes de banho tornaram-se os uniformes requiridos tanto para homens quanto para mulheres.\n[…]\nCampeonato Mundial de Voleibol de Praia\n[…]\nCircuito Mundial de Voleibol de Praia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Top Gun: Ases Indomáveis",
      "descricao": "Filme americano de 1986, estrelado por Tom Cruise, sobre pilotos de caça da Marinha."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em Top Gun, de 1986, a famosa cena de vôlei de praia entre os pilotos é embalada por uma música de que cantor?",
    "resposta": "Kenny Loggins",
    "distratores": [
      "Bryan Adams",
      "Phil Collins",
      "Lionel Richie"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Top_Gun_(soundtrack)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Top_Gun_(soundtrack)",
        "situacao": "ok",
        "texto": "Top Gun: Original Motion Picture Soundtrack is the soundtrack from the film of the same name, released in 1986 by Columbia Records.\n[…]\n(Adams also refused to allow his song \"Only the Strong Survive\" to be featured in the film.) REO Speedwagon was approached but declined, due to not being allowed to contribute any of their own compositions to the soundtrack. Corey Hart also declined, preferring to write and perform his own compositions. Eventually, the film's producers agreed that \"Danger Zone\" would be recorded and performed by Kenny Loggins.\n[…]\nJudas Priest was also approached to allow their song \"Reckless\" in the film but declined when the proposed contract stipulated that the filmmakers have exclusive rights to the song, which would have necessitated the band omitting the song from their forthcoming album Turbo (1986). Former Judas Priest guitarist K.K. Downing later called their opting out of the film \"a big mistake\". The band offered the producers three other songs for the soundtrack, all of which were rejected.\n[…]\nABC members Martin Fry and Mark White were invited to see the director's rough cut version of Top Gun in 1986. \"They were looking to offer a few British bands soundtrack opportunities. Mark and I weren't impressed with the film and chose not to contribute any music to it.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Top_Gun_%28trilha_sonora%29",
        "situacao": "ok",
        "texto": "Top Gun: Original Motion Picture Soundtrack é a trilha sonora do filme Top Gun, lançado em 1986 pela Columbia Records Em 1999, foi relançado em uma Edição Especial Expandida com músicas adicionais. Em 2006, foi relançado novamente em uma Edição Deluxe, com mais canções adicionais. O álbum alcançou a posição de número #1 nas paradas musicais nos Estados Unidos durante cinco semanas consecutivas em \n[…]\n\"Danger Zone\" (por Kenny Loggins) – 3:36\n[…]\n\"Playing with the Boys\" (por Kenny Loggins) – 3:59\n[…]\n\"Playing with the Boys\" (12\" Version) (por Kenny Loggins) – 6:41",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Shelda Bede",
      "descricao": "Ex-jogadora brasileira de vôlei de praia, medalha de prata olímpica em Sydney 2000 e Atenas 2004."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Ao lado de Shelda, que jogadora conquistou as medalhas de prata no vôlei de praia olímpico em Sydney 2000 e Atenas 2004?",
    "resposta": "Adriana Behar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Shelda_Bede",
      "https://en.wikipedia.org/wiki/Adriana_Behar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shelda_Bede",
        "situacao": "ok",
        "texto": "Shelda Kelly Bruno Bede (born 1 January 1973) is a Brazilian retired beach volleyball player.\n[…]\nBede was born in Fortaleza.\n[…]\nBede won silver medals in beach volleyball at the 2000 Summer Olympics in Sydney and the 2004 Summer Olympics in Athens."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Adriana_Behar",
        "situacao": "ok",
        "texto": "Adriana Brandão Behar (born 14 February 1969) is a Brazilian former volleyball player of Jewish descent. She was inducted into the Volleyball Hall of Fame in 2010.\n[…]\nBehar began her sports career as a figure skater at the age of 10 at Flamengo. At the age of 16, she switched to indoor volleyball, where she played professionally in Italy for three seasons.\n[…]\nIn 1992, back in Brazil, Adriana dedicated herself to beach volleyball, starting a new phase in her sports career.\n[…]\nIn 1995, after the suggestion of coach Letícia Pessoa, Adriana formed a duo with Shelda Bedê. This partnership lasted 12 seasons and became one of the most successful in the history of beach volleyball. Together, they won more than a thousand victories and 114 titles.\n[…]\nAdriana and Shelda won world championships in 1999 and 2001 and maintained their lead in the world rankings in 2000, 2001 and 2004.\n[…]\nAt the 2000 Sydney Olympics, the pair reached the final after winning four matches, winning the silver medal.\n[…]\nThroughout her career, Adriana was honored several times on the Brazilian Circuit, being recognized as best blocker (1998–2000) and best striker (1999)\n[…]\nIn 2006, Adriana and Shelda were included in the Guinness Book of Records as the players with the most titles won on the World Circuit, totaling six.\n[…]\nAfter her retirement in 2008, Adriana Behar specialized in Business Management and took on administrative positions.\n[…]\nAdriana Brandão Behar at FIVB.com\n[…]\nAdriana Brandão Behar at the Beach Volleyball Database\n[…]\nAdriana Behar at Olympics.com\n[…]\nAdriana Behar at Olympedia\n[…]\nAdriana Behar at the Comitê Olímpico do Brasil  (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shelda_Bed%C3%AA",
        "situacao": "ok",
        "texto": "Shelda Kelly Bruno Bedê (Fortaleza, 1 de janeiro de 1973) é uma ex-atleta do volei de praia, que se destacou nas areais e  figurou entre as  melhores jogadoras do mundo, sendo heptacampeã do Circuito Mundial de Vôlei de Praia, bicampeã mundial e detentora de mais duas medalhas em mundiais, ouro nos Jogos Pan-Americanos de 1999 e medalhista de prata nos Jogos Olímpicos de Sydney 2000 e Atenas 2004.\n[…]\nNesse mesmo ano ela e Adriana Behar disputam pela primeira vez uma edição de Jogos Olímpicos, Sydney 2000;  favoritas à medalha de ouro, chegaram à final mas nervosas não se encontraram em quadra e seu melhor volume de jogo não apareceu, deixando a dupla anfitriã Cook e Pottharst jogando sem pressão e ficando com a medalha de prata. Em contrapartida, Shelda/Adriana conquistam de forma consecutiva o tetra do Circuito Mundial de Vôlei de Praia do mesmo ano e o Circuito Brasileiro.\n[…]\nApós anos de competições ao lado de Adriana Behar, por esta anunciar sua aposentadoria, Shelda passa a formar dupla com Ana Paula Henkel – medalhista de bronze em Atlanta 1996 no volei de quadra com a Seleção Brasileira de Voleibol – no ano de 2008, com o objetivo de se classificar para os Jogos Olímpicos de Pequim, mas com apenas seis meses para acumular pontos, a dupla acabou ficando de fora das Olimpíadas.\n[…]\nAo lado de Adriana Behar,  Shelda constituiu uma das dupla femininas mais vitoriosas do volei de praia do Brasil, conquistando 1.101 vitórias e 114 títulos ao longo da carreira, o que levou a parceria ao Livro Guinness dos Recordes no ano de 2006. Elas também são a dupla feminina que mais participou de eventos de praia desde a criação do Circuito Mundial de Vôlei de Praia organizado pela  FIVB.\n[…]\n2000-Melhor Jogadora pelo Comitê Olímpico Brasileiro\n[…]\n2005-Melhor Jogadora de Defesa do Circuito Mundial de Vôlei de Praia\n[…]\n2006-Melhor Jogadora de Defesa do Circuito Mundial de Vôlei de Praia\n[…]\nShelda-Perfil (pt)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Juliana Felisberta",
      "descricao": "Ex-jogadora brasileira de vôlei de praia, medalha de bronze olímpica em Londres 2012."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A brasileira Juliana formou com que parceira uma das duplas mais vitoriosas do vôlei de praia, bronze olímpico em Londres 2012?",
    "resposta": "Larissa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Juliana_Felisberta_da_Silva",
      "https://en.wikipedia.org/wiki/Larissa_Fran%C3%A7a"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Juliana_Felisberta_da_Silva",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Larissa_Fran%C3%A7a",
        "situacao": "ok",
        "texto": "Larissa França Maestrini (born April 14, 1982) is a Brazilian beach volleyball player. She is the all-time leader of beach volleyball titles, with 57 FIVB career gold medals, including the 2011 Beach Volleyball World Championships with Juliana Felisberta and the 2015 FIVB Beach Volleyball World Tour with Talita Antunes.\n[…]\nWith Felisberta, França won two Pan American Games titles (in 2007 and 2011) and the bronze medal at the 2012 Summer Olympics. Four years prior, França had had to play the 2008 Summer Olympics with Ana Paula Connelly following an injury to Felisberta, finishing in fifth place. She also won the bronze medal at the 2003 Pan American Games in Santo Domingo, Dominican Republic, partnering Ana Richa.\n[…]\nThe pair participated in the 2016 Summer Olympics in Rio. The pair won their quarterfinal match against the Swiss team of Joana Heidrich and Nadine Zumkehr in a nail biting match of three sets (21-23, 27–25, 15-13) in the quarter final played on August 14, 2016. The pair lost in straight sets to Ludwig and Walkenhosrt in the semifinal match. Next they went for bronze. They lost to the American team of April Ross and Kerri Walsh Jennings in 3 sets of (21–17, 17–21, 9–15); they finished 4th.\n[…]\nFrança was born in Cachoeiro de Itapemirim, Espírito Santo, and moved at a young age to the state of Pará. A sports enthusiast from her youth, she earned a volleyball scholarship in high school and went on to start her professional career at Tuna Luso Brasileira. She moved to beach volleyball in 2001, following an event held by the Brazilian Volleyball Confederation in Fortaleza.\n[…]\nLarissa França at FIVB.com\n[…]\nLarissa França at the Beach Volleyball Database\n[…]\nLarissa França at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nLarissa França at Olympics.com\n[…]\nLarissa França at Olympedia"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Maurício Lima",
      "descricao": "Ex-levantador brasileiro de vôlei, campeão olímpico em Barcelona 1992 e Atenas 2004."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que levantador esteve nos dois primeiros ouros olímpicos do vôlei masculino brasileiro, em Barcelona 1992 e em Atenas 2004?",
    "resposta": "Maurício Lima",
    "fonte": [
      "https://en.wikipedia.org/wiki/Maur%C3%ADcio_Lima"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maur%C3%ADcio_Lima",
        "situacao": "ok",
        "texto": "Maurício Camargo Lima (born 27 January 1968), known as Maurício Lima or simply Maurício, is a Brazilian former volleyball player and five-time Olympian. He won two Olympic gold medals with the Brazilian national volleyball team: the first against the Netherlands at the 1992 Summer Olympics in Barcelona and the second against Italy at the 2004 Summer Olympics in Athens. He also played at the 1988 S\n[…]\nLima also won four FIVB World Leagues (1993, 2001, 2003 and 2004), the 2002 FIVB World Championship, and the 2003 FIVB World Cup.\n[…]\nIn 2012, Lima was inducted into the International Volleyball Hall of Fame.\n[…]\nMauricio at UOL.com.br at the Wayback Machine (archived 2005-12-09)\n[…]\nMauricio Camargo Lima at the European Volleyball Confederation\n[…]\nMaurício Lima at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nMauricio Lima at Olympics.com\n[…]\nMaurício at Olympedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maur%C3%ADcio_Lima",
        "situacao": "ok",
        "texto": "Maurício Camargo Lima (Campinas, 27 de janeiro de 1968), conhecido mononimamente como Maurício, é um  ex-radialista e ex-jogador de voleibol brasileiro, bicampeão olímpico em Barcelona 92 e Atenas 2004, como levantador da equipe medalha de ouro. Atualmente apresenta o  Vendo no Vôlei  na Rádio Jovem Pan.\n[…]\nMaurício é um dos maiores vencedores do esporte brasileiro, sendo 7 vezes campeão brasileiro e 4 vezes do paulista. Totaliza   21 títulos por clubes,\n[…]\nMauricio começou sua carreira no Clube Fonte São Paulo em 1984, onde ficou até 1986, em 1987  rumou para Olimpikus onde ficou por uma temporada.\n[…]\nnuma vitória por 3 a 0, onde Giba estava em fase fantástica. Assim Maurício,  Giba, Carlão e André Heller e André Nascimento formaram uma das equipes mais fortes do planeta. O  bicampeonato veio ao vencer a Ulbra, do Rio Grande do Sul, em pleno Gigantinho, em Porto Alegre. Já o tricampeonato veio com vitória sobre o Banespa, de Giovane Gávio, Rodrigão e Serginho, em uma melhor de três partidas.\n[…]\nNenhum jogador na história do vôlei internacional de seleções teve mais recordes do que Maurício. Mais de 200 partidas na Liga Mundial, 555 jogos em 18 anos pela seleção brasileira e quatro vezes eleito o melhor do mundo na sua posição.\n[…]\nMauricio recebeu 30 títulos pela Seleção Brasileia de Vôlei, 12 prêmios nacionais e internacionais – incluindo de melhor jogador do mundo em 1995, e participou de 38 campeonatos internacionais, incluindo 5 Olimpíadas e 4 Mundiais.\n[…]\n1992 - Jogos Olímpicos de Barcelona (ouro)\n[…]\n2000 - Jogos Olímpicos de Sydney (6º lugar)\n[…]\n2004 - Jogos Olímpicos de Atenas (ouro)\n[…]\n1992 - Ouro nas Olimpíadas de Barcelona\n[…]\n2004 - Campeão da Liga Mundial de Voleibol\n[…]\n2004 - Ouro nas Olimpíadas de Atenas\n[…]\nCampeonato Brasileiro em 89, 90, 91\n[…]\nCampeão na Copa do Brasil em 90, 91\n[…]\nOLIMPIKUS",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Serginho",
      "descricao": "Ex-jogador brasileiro de vôlei, campeão olímpico em Atenas 2004 e no Rio 2016, conhecido como Serginho Escadinha."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na Rio 2016, aos quarenta anos, Serginho foi eleito o melhor jogador do torneio olímpico de vôlei. Em que posição ele jogava?",
    "resposta": "Líbero",
    "fonte": [
      "https://en.wikipedia.org/wiki/S%C3%A9rgio_Dutra_Santos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/S%C3%A9rgio_Dutra_Santos",
        "situacao": "ok",
        "texto": "Sérgio Dutra dos Santos, known as Serginho or Escadinha (born 15 October 1975) is a Brazilian former volleyball player and four-time Olympian. As a member of the Brazilian national volleyball team, he won gold medals at the 2004 and 2016 Olympics, and silver medals at the 2008 and 2012 Olympics.\n[…]\nAdditionally, Serginho is a two-time World Champion (2006, 2010), and a multimedalist of the World League, South American Championship, World Cup, and the Grand Champions Cup. In 2009, he became the first libero to be named Most Valuable Player in the history of the FIVB World League.\n[…]\nSerginho is widely regarded as one of the best liberos of all time and is unquestionably the best libero of the 2000s, with more awards than any other libero. Known for his outstanding service reception and digging capabilities, teams often attempt to avoid Sergio when serving. Beyond his defensive abilities, he is also capable of running the offense as a 'second setter' if the setter is forced to make the first contact.\n[…]\n2001 Brazilian League – Best Libero\n[…]\n2002 Brazilian League – Best Libero\n[…]\n2003 Brazilian League – Best Libero\n[…]\n2003 Pan American Games – Best Libero\n[…]\n2003 FIVB World Cup – Best Libero\n[…]\n2004 Olympic Games – Best Libero\n[…]\n2006 CEV Top Teams Cup – Best Libero\n[…]\n2007 Pan American Games – Best Libero\n[…]\n2007 South American Championship – Best Libero\n[…]\n2007 FIVB World Cup – Best Libero\n[…]\n2008 CEV Champions League – Best Libero\n[…]\n2008 America's Cup – Best Libero\n[…]\n2009 South American Championship – Best Libero\n[…]\n2009 FIVB World Grand Champions Cup – Best Libero\n[…]\n2011 South American Club Championship – Best Libero\n[…]\n2011 South American Championship – Best Libero\n[…]\n2011 FIVB Club World Championship – Best Libero\n[…]\n2016 Olympic Games – Best Libero\n[…]\nSérgio Santos at Olympics.com\n[…]\nSérgio Santos at Olympedia\n[…]\nSérgio Santos at InterSportStats"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%A9rgio_Dutra",
        "situacao": "ok",
        "texto": "Sérgio Dutra Santos, também conhecido como Serginho ou Escadinha (Diamante do Norte, 15 de outubro de 1975), é um ex-jogador de vôlei brasileiro, que atuou como líbero.\n[…]\nEm 2009, foi eleito o MVP da Liga Mundial daquele ano, tornando-se o único líbero da história a ter conquistado essa posição. É o único jogador da história a disputar quatro finais olímpicas consecutivas entre 2004 e 2016, mas entre as mulheres a Soviética Inna Ryskal também tem este feito entre 1964 e 1976. Bicampeão nos Jogos Olímpicos de Atenas (2004) e Rio de Janeiro (2016), onde foi eleito o MVP (Jogador Mais Valioso) do torneio masculino.\n[…]\nSerginho é amplamente considerado o melhor líbero de todos os tempos, e aquele com mais prêmios do que qualquer outro de sua posição. Conhecido por sua excelente capacidade de recepção e peixinhos, as equipes geralmente tentavam evitar Serginho ao servir. Além de suas habilidades defensivas, ele também era capaz ser uma espécie de 'segundo levantador', se o levantador fosse forçado a fazer a primeira recepção.\n[…]\nIsso se deveu, em grande parte, ao fato de Sergio ter desempenhado a posição de levantador enquanto cresceu e se tornou um levantador de equipes de clubes profissionais ao longo da carreira.[carece de fontes]?\n[…]\nCampeão da Liga Mundial em 2001, 2003 (Melhor Defesa e Melhor Recepção), 2004, 2005, 2006 e 2007 (Melhor Líbero), 2009 (Melhor Jogador)\n[…]\nMedalha de Ouro nos Jogos Olímpicos de Verão de 2004\n[…]\nMedalha de Prata nos Jogos Olímpicos de Verão de 2008\n[…]\nMedalha de Prata nos Jogos Olímpicos de Verão de 2012\n[…]\nMedalha de Ouro nos Jogos Olímpicos de Verão de 2016\n[…]\nMedia relacionados com Sérgio Dutra no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Leila Barros",
      "descricao": "Ex-jogadora brasileira de vôlei de quadra e de praia, medalhista olímpica e depois política."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Ex-jogadora da seleção e medalhista olímpica no vôlei, Leila Barros foi eleita em 2018 para que cargo político, pelo Distrito Federal?",
    "resposta": "Senadora",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Leila_Barros"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Leila_Barros",
        "situacao": "ok",
        "texto": "Leila Gomes de Barros Rêgo GCRB (Taguatinga, 30 de setembro de 1971) é uma política e esportista brasileira, filiada ao Partido Democrático Trabalhista (PDT). É conhecida também como Leila do Vôlei, tendo usado este nome como nome político até 2018. É senadora da República pelo Distrito Federal Anteriormente, foi secretária de Esportes e Lazer de 2015 a 2018.\n[…]\nComo jogadora de vôlei na Seleção Brasileira de Voleibol Feminino, Leila obteve as medalhas de bronze nos Jogos Olímpicos de 1996 e de 2000. Em 1999, recebeu medalha de ouro nos Jogos Pan-Americanos. Por duas edições, foi designada a melhor jogadora do Grand Prix de Voleibol. Posteriormente, atuou no vôlei de praia e foi comentarista esportiva antes de iniciar sua carreira política.\n[…]\nEm março de 2018, Leila desfiliou-se do PRB, logo depois ingressando no Partido Socialista Brasileiro (PSB), cuja liderança distrital a incentivava a concorrer à Câmara dos Deputados ou ao Senado. Optou eventualmente por concorrer ao Senado, liderando as pesquisas de opinião. Durante a campanha, defendeu o corte de \"privilégios\" e a redução nos gastos dos parlamentares. Em outubro, foi eleita com 467,5 mil votos, ou 17,76%, sendo a mais votada daquela eleição.\n[…]\nFoi a primeira mulher a ser eleita ao Senado pelo Distrito Federal, além disso, em sua chapa foi acompanhada pela Leany Lemos, sua 1ª suplente.\n[…]\nEmpossada no Senado em fevereiro de 2019, Leila foi eleita para ocupar a 4ª suplência da Mesa Diretora do Senado, sendo a única mulher do colegiado. Durante a disputa pelo comando da casa, defendeu o voto aberto na escolha do presidente e confirmou voto no senador José Reguffe. Como senadora, integrou o Bloco Parlamentar Senado Independente, foi líder da Bancada do Distrito Federal, até maio de 2021, e é a atual Procuradora da Mulher no Senado.\n[…]\nLEILA BARROS, perfil no sítio dos Jogos Olímpicos"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Rodízio",
      "descricao": "Regra do vôlei de quadra que obriga os jogadores a mudar de posição sempre que o time recupera o saque."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No vôlei de quadra, quando um time recupera o direito de sacar, seus jogadores giram de posição. Em que sentido?",
    "resposta": "Horário",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volleyball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volleyball",
        "situacao": "ok",
        "texto": "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the program at the Atlanta 1996 Summer Olympics. The adapted version of volleyball at the Su\n[…]\nDouble quick hit/\"Stack\"/\"Tandem\": a variation of quick hit where two hitters, one in front and one behind the setter or both in front of the setter, jump to perform a quick hit at the same time. It can be used to deceive opposite blockers and free a fourth hitter attacking from back-court, maybe without block at all.\n[…]\nLiberos are defensive players who are responsible for receiving the attack or serve. They are usually the players on the court with the quickest reaction time and best passing skills. Libero means 'free' in Italian—they receive this name as they have the ability to substitute for any other player on the court during each play (usually the middle blocker).\n[…]\nIn the 6–2 formation, a player always comes forward from the back row to set. The three front row players are all in attacking positions. As a result, all six players act as hitters at one time or another, while two can act as setters. So the 6–2 formation is now a 4–2 system, but the back-row setter penetrates to set. The 6–2 lineup thus requires two setters, who line up opposite to each other in the rotation.\n[…]\nThe big advantage of the system is that the setter always has 3 hitters with which to vary sets. If the setter performs well, the opponent's middle blocker may not have enough time to block with the outside blocker, increasing the chance for the attacking team to make a point."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voleibol",
        "situacao": "ok",
        "texto": "Voleibol, também conhecido pelas formas reduzidas vôlei (português brasileiro) e vólei (português europeu), é um esporte praticado numa quadra dividida em duas partes por uma rede, possuindo duas equipes de seis jogadores em cada lado. O voleibol foi originalmente chamado de Mintonette, devido à sua semelhança com o Badminton. Ele também tem alguns elementos de tênis e handebol e até beisebol porq\n[…]\nOs seis jogadores de cada equipe são dispostos na quadra do seguinte modo. No sentido do comprimento, três estão mais próximos da rede, e três mais próximos do fundo; e, no sentido da largura, dois estão mais próximos da lateral esquerda; dois, do centro da quadra; e dois, da lateral direita.\n[…]\nEstas posições são identificadas por números: com o observador postado frente à rede, aquela que se localiza no fundo à direita recebe o número 1, e as outras seguem-se em ordem crescente conforme o sentido anti-horário.\n[…]\nSe o time que conquistou o ponto não foi o mesmo que havia sacado, os jogadores devem deslocar-se em sentido horário, passando a ocupar a próxima posição de número inferior à sua na quadra (ou a posição 3, no caso do atleta que ocupava a posição 4). Este movimento é denominado rodízio.\n[…]\nExiste a denominada área de saque, que é constituída por duas pequenas linhas nas laterais da quadra, o jogador não pode sacar de fora desse limite.\n[…]\nO ataque é, em geral, o terceiro contato de um time com a bola. O objetivo deste fundamento é fazer a bola aterrissar na quadra adversária, conquistando deste modo o ponto em disputa. Para realizar o ataque, o jogador dá uma série de passos contados (\"passada\"), salta e então projeta seu corpo para a frente, transferindo deste modo seu peso para a bola no momento do contato.\n[…]\nPosição de expectativa: Estratégia ou tática adotada antes do saque adversário de posicionamento da defesa, podendo ser no centro ou antecipado em uma das metades da quadra.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Doaa Elghobashy",
      "descricao": "Jogadora egípcia de vôlei de praia que disputou os Jogos do Rio em 2016."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na Olimpíada do Rio, em 2016, a egípcia Doaa Elghobashy virou notícia no vôlei de praia ao jogar usando que peça de roupa?",
    "resposta": "Hijab",
    "fonte": [
      "https://en.wikipedia.org/wiki/Doaa_Elghobashy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Doaa_Elghobashy",
        "situacao": "ok",
        "texto": "Doaa Elghobashy (Arabic: دعاء الغباشي; born 8 November 1996) is an Egyptian beach volleyball player.\n[…]\nElghobashy competed in the 2016 Summer Olympics in Rio de Janeiro alongside Nada Meawad in the beach volleyball competition. She and Meawad qualified for the Games by winning the CAVB Continental Cup held in Nigeria.\n[…]\nThe team turned heads in their first match against Germany as the team wore long sleeves and pants and Elghobashy wore a hijab, making her the first woman to wear a hijab in Olympic beach volleyball. The team was also Egypt's first ever Olympic team to compete in a beach volleyball tournament.\n[…]\nThough Elghobashy and Meawad did not advance in the tournament, Elghobashy has become an inspiration for Muslim women, especially those in sports and who wear a headscarf, as she joined the ranks of the few Muslim women who compete in a headscarf.\n[…]\nElghobashy has worn a hijab for 10 years and it has always been a part of her beach volleyball career. She was allowed to wear it in the Games after the international volleyball federation relaxed uniform regulations before the 2012 Summer Olympics in London.\n[…]\nDoaa Elghobashy at FIVB.com\n[…]\nDoaa Elghobashy at the Beach Volleyball Database\n[…]\nDoaa Elghobashy at Olympics.com\n[…]\nDoaa El-Ghobashy at Olympedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Doaa_Elghobashy",
        "situacao": "ok",
        "texto": "Doaa Elghobashy E. Tawfik (8 de novembro de 1996) é uma jogadora de vôlei de praia egípcia.\n[…]\nNos Jogos Olímpicos de Verão de 2016 ela representou  seu país ao lado de Nada Meawad, caindo na fase de grupos.Em 2019 sagrou-se  campeã ao lado de Farida El Askalany no Campeonato Africano das Nações de Vôlei de Praia no mesmo ano na Nigéria e sagraram-se medalhistas de ouro nos Jogos Pan-Africanos sediados em Rabat.\n[…]\nVoleibol de praia nos Jogos Olímpicos de Verão de 2016 - Feminino",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Bernardinho",
      "descricao": "Técnico brasileiro de vôlei, campeão olímpico com a seleção masculina em 2004 e 2016."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Antes de assumir a seleção masculina, Bernardinho conquistou duas medalhas de bronze olímpicas como técnico de que equipe?",
    "resposta": "Seleção feminina brasileira",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bernardo_Rezende",
      "https://pt.wikipedia.org/wiki/Bernardinho"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bernardo_Rezende",
        "situacao": "ok",
        "texto": "Bernardo Rocha de Rezende (born 25 August 1959), known as Bernardo Rezende and nicknamed Bernardinho, is a Brazilian volleyball coach and former player. He is the current coach of the female volleyball team Rio de Janeiro Vôlei Clube. Rezende is one of the most successful coaches in the history of volleyball, accumulating more than 30 major titles in a twenty-year career directing the Brazilian ma\n[…]\nIn 1996, the team won the bronze medal at the Atlanta Olympic Games and the gold medal at the FIVB World Grand Prix. In 1998 Rezende led the Brazilians to a South American title, earned qualification for the FIVB World Championship and won bronze in the FIVB World Grand Championship Cup in Japan.\n[…]\nSince 2001, Rezende has been the coach of the Brazilian male national team, with whom he won two Olympic titles in 2004 and 2016. After this success Rezende accepted the challenge of leading the Brazilian men in 2001. Bernardinho led the team to memorable victories including first place in the 2001 and 2003 editions of the FIVB World League, and the gold medal at the 2002 FIVB World Championship.\n[…]\nIn 2003, Rezende's star shone even stronger. He guided the team to titles in the FIVB World League and the FIVB World Cup, and bronze at the Pan American Games in Dominican Republic.\n[…]\nIn 1999, Rezende married volleyball player Fernanda Venturini, with whom he has two daughters. They got divorced in 2020. From his previous marriage to player Vera Mossa he had a son who is currently the setter and captain of the Brazilian volleyball team, Bruno Rezende (Bruninho). Since August 2024, he is in a relationship with the journalist Ana Paula Araújo who currently hosts the morning show Bom Dia Brasil at the Rede Globo.\n[…]\nBernardo Rocha Rocha Rezende at Olympics.com\n[…]\nOlympics 2016 Rezende - Reuters\n[…]\nVolleyballadvisors - Bernardo Rezende\n[…]\nMelhordovolei Bernardo Rezende Archived 16 August 2017 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bernardinho",
        "situacao": "ok",
        "texto": "Bernardo Rocha de Rezende (Rio de Janeiro, 25 de agosto de 1959), conhecido como Bernardinho, é um ex-jogador, treinador de voleibol, economista, e empresário brasileiro. Atualmente, treina o Sesc-Flamengo e a Seleção Brasileira de Voleibol Masculino.\n[…]\nComo treinador, Bernardinho é um dos maiores campeões da história do voleibol, acumulando mais de trinta títulos importantes em vinte e dois anos de carreira dirigindo as seleções brasileiras feminina e masculina. Entre 2001 e 2017, foi o técnico da Seleção Brasileira de Voleibol Masculino, tendo conquistado dois ouros olímpicos (2004 e 2016), três Campeonatos Mundiais, duas Copas do Mundo, três Copas dos Campeões e oito Ligas Mundiais.\n[…]\nConjuntamente à sua passagem pela Seleção Brasileira de Voleibol Feminino, Bernardinho conquistou seis medalhas olímpicas consecutivas (de 1996, em Atlanta, a 2016, no Rio de Janeiro): dois bronzes, duas pratas e dois ouros.\n[…]\nBernardo Rocha de Rezende, mais conhecido como Bernardinho, nasceu em 25 de agosto de 1959. Formado em economia pela PUC-Rio, jogou vôlei de 1979 até 1986, defendendo times do Rio de Janeiro e a seleção brasileira. Em 1988, parou de jogar, começando a carreira de treinador como assistente-técnico da seleção Bebeto de Freitas, nas Olimpíadas de Seul. Dois anos depois, treinou a equipe feminina do Perugia, na Itália, onde ficou até 1992. No ano seguinte, dirigiu a equipe masculina do Modena.\n[…]\nEm seguida, Bernardinho retornou ao Brasil e, em 1994, assumiu o comando da seleção feminina brasileira adulta até 2000. Depois disso assumiu a seleção masculina, ficando até 2016.\n[…]\nFoi escolhido o melhor treinador da Super Liga Feminina 2007/2008 e pelo Comitê Olímpico Brasileiro, por quatro anos consecutivos, o melhor treinador do Brasil."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Carlos Arthur Nuzman",
      "descricao": "Ex-jogador brasileiro de vôlei e dirigente esportivo, presidente da Confederação Brasileira de Voleibol e do Comitê Olímpico Brasileiro."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Jogador da seleção de vôlei em Tóquio 1964, Carlos Arthur Nuzman presidiu que entidade de 1995 a 2017, à frente da candidatura do Rio aos Jogos?",
    "resposta": "Comitê Olímpico Brasileiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Carlos_Arthur_Nuzman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carlos_Arthur_Nuzman",
        "situacao": "ok",
        "texto": "Carlos Arthur Nuzman (born 17 March 1942) is a Brazilian lawyer and former volleyball player, having competed professionally from 1957 to 1972 and represented the national team between 1962 and 1968. Nuzman was part of the first Brazilian male volleyball team at the 1964 Summer Olympics, when the sport debuted at the Olympic Games. He later became an administrator, with the Brazilian Volleyball Co\n[…]\nNuzman was born in 1942 in Rio de Janeiro. His grandparents were Russian-Jewish immigrants.\n[…]\nHe was president of the Brazilian Volleyball Confederation (CBV) for twenty years (1975–1995), a period where the national teams excelled at international level. Since 1995, Nuzman is the president of the Brazilian Olympic Committee (COB) and a member of the International Olympic Committee (IOC) and Pan American Sports Organization (PASO).\n[…]\nJudge Marcelo Bretas, from the 7th federal criminal court in Rio de Janeiro, sentenced the former president of the COB (Olympic Committee of Brazil), Carlos Arthur Nuzman to 30 years, 11 months and eight days in prison for the crimes of passive corruption, organized crime, money laundering and currency evasion.\n[…]\nIt was the Federal Public Ministry that filed a complaint against the former president of the Olympic Committee of Brazil (COB) Carlos Arthur Nuzman, the former governor of Rio, Sérgio Cabral Filho, the businessman Arthur César de Menezes Soares Filho, the former director of operations of the Rio 2016 committee, Leonardo Gryner, Senegalese athletics leaders Lamine Diack and his son Papa Diack.\n[…]\nReuters also noted that IOC president Thomas Bach had awarded Nuzman the Olympic Order in gold, the organisation's highest honour, in August 2016 while praising his work for the Rio Games.\n[…]\nCarlos Nuzman at Olympics at Sports-Reference.com (archived)\n[…]\nCarlos Nuzman at Olympedia\n[…]\nCarlos Nuzman at Olympics.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carlos_Arthur_Nuzman",
        "situacao": "ok",
        "texto": "Carlos Arthur Nuzman CavMM (Rio de Janeiro, 17 de março de 1942) é um advogado, atleta e político brasileiro. Ex-jogador de vôlei, Nuzman presidiu a Confederação Brasileira de Voleibol (CBV), o Comitê Olímpico Brasileiro (COB) e a Organização Desportiva Sul-Americana (ODESUL). Comandou a candidatura do Rio de Janeiro como sede e organização dos Jogos Pan-americanos de 2007.\n[…]\nNuzman foi presidente do COB de 1995 a 2017. Os principais marcos de sua gestão foram as escolhas do Brasil para sediar importantes eventos esportivos, como as Olimpíadas e Jogos Pan-americanos.\n[…]\nEm 2 de outubro de 2009, Carlos Arthur Nuzman completou seu principal objetivo que era trazer o direito do Brasil sediar os Jogos Olímpicos de Verão. Nesse dia, o Comitê Olímpico Internacional oficializou o Rio de Janeiro como cidade sede dos Jogos Olímpicos de 2016.\n[…]\nEm maio de 2013, tendo em vista os significativos atrasos nas obras de preparação para os Jogos Olímpicos de 2016, o Comitê Olímpico Internacional (COI) decidiu promover uma intervenção branca na organização dos Jogos, duramente criticada pela imprensa brasileira e mundial. O fato foi noticiado por órgãos de imprensa em todo mundo, o que criou expectativa se o Co-Rio seria capaz de entregar aquilo que prometeu no dossiê de candidatura.\n[…]\nEm 6 de outubro de 2017 o Comité Olímpico Internacional (COI) suspendeu Carlos Arthur Nuzman provisoriamente de todos os direitos, prerrogativas e funções decorrentes do seu cargo como membro honorário do COI, além de retirá-lo da comissão de coordenação dos Jogos Olímpicos de Tóquio 2020, após Nuzman ser alvo da Operação Unfair Play suspeito de compra de votos para sede da olimpíadas no Rio de Janeiro.\n[…]\nEm 11 de outubro de 2017, após 22 anos no poder, Nuzman apresentou, por seu advogado Sergio Mazzello, a renúncia do cargo de presidente do COB.",
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
