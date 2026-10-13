Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Jogos Eletrônicos** (tema **Entretenimento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Pokémon Mystery Dungeon",
      "descricao": "Série de jogos derivados de Pokémon, com masmorras geradas ao acaso, em que um humano vive como pokémon."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A série Pokémon Mystery Dungeon, de masmorras que mudam a cada visita, foi desenvolvida por qual estúdio japonês, criador do jogo Shiren the Wanderer?",
    "resposta": "Chunsoft (hoje Spike Chunsoft)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon",
      "https://en.wikipedia.org/wiki/Spike_Chunsoft"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon is a spin-off video game series from the main Pokémon series developed by Chunsoft. The games feature the fictional creatures called Pokémon who have the ability to speak human language navigating through a randomly generated dungeon using turn-based moves, common to Mystery Dungeon games. As of March 2020, there have been eleven games across five platforms, as well as seve\n[…]\nTsunekazu Ishihara has worked previously with Chunsoft. One of the company's work was Tetris 2 + BomBliss, where Ishihara was the game's producer and met Koichi Nakamura, who was the game's director. Prior to the development of Pokémon Mystery Dungeon: Red Rescue Team and Blue Rescue Team, Ishihara had played a few games from the Mystery Dungeon series, namely Torneko's Great Adventure: Mystery Dungeon, and was impressed with the genre's depth and quality.\n[…]\nThe games are developed by Spike Chunsoft, formerly Chunsoft before the merging in 2012, and published by Nintendo and The Pokémon Company.\n[…]\nThe Pokémon Mystery Dungeon series is regarded as the most popular branch of the wider franchise, with it taking over 70% of Mystery Dungeon sales and having a more active and broader community worldwide thanks to the crossover with the Pokémon franchise.\n[…]\nDuring the development of Red and Blue Rescue Team, Kouji Malta, one of the programmer for these two games, and contributed previously on EarthBound and Shiren the Wanderer 2: Shiren's Castle and the Oni Invasion, stated the company went through bad business performance, as employees from Chunsoft would leave the company progressively due to this issue.\n[…]\nThe game's success not only helped to give more popularity to the Mystery Dungeon franchise, it also helped Chunsoft avoid bankruptcy after years of severe financial issues. The series later broke the 10 million copies sold barrier before Explorers of Sky was released."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Spike_Chunsoft",
        "situacao": "ok",
        "texto": "Spike Chunsoft Co., Ltd. is a Japanese video game development and localization company specializing in role-playing video games, visual novels and adventure games. The company was founded in 1984 as Chunsoft Co., Ltd. and merged with Spike in 2012. It is owned by Dwango.\n[…]\nIt created games such as the first five Dragon Quest installments and the Mystery Dungeon franchise as Chunsoft, and the Conception series as Spike Chunsoft. They also developed titles such as the Sound Novel series (consisting of Otogirisō, Kamaitachi no Yoru, Machi and 428: Shibuya Scramble) and the Zero Escape series, and the Famicom port of The Portopia Serial Murder Case as Chunsoft. Spike developed Danganronpa before the merger.\n[…]\nDuring the development of Pokémon Mystery Dungeon: Red Rescue Team and Blue Rescue Team, Kouji Malta, one of the programmers for these two games, and contributed previously on EarthBound and Shiren the Wanderer 2, stated the company went through bad business performance, as employees from Chunsoft would leave the company progressively due to this issue. The game's success not only helped giving more popularity in the Mystery Dungeon franchise, it also helped Chunsoft from avoiding bankruptcy.\n[…]\nIn 2012, Chunsoft merged with its sister company Spike and the new company would be called Spike Chunsoft.\n[…]\nOn July 16, 2020, NIS America announced that Danganronpa games on the PlayStation Store will be removed. Spike Chunsoft subsequently announced on July 22, 2020, that it will take on publishing the Danganronpa series outside of Japan. Similarly, the Nintendo Switch and Microsoft Windows release of Shiren the Wanderer: The Tower of Fortune and the Dice of Fate would not be released by Aksys but by its subsidiary."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon (ポケモン不思議 (ふしぎ)のダンジョン, Pokemon Fushigi no Danjon; lit. Pokémon Masmorra Misteriosa) é uma série de jogos eletrônicos spin-offs da série principal Pokémon, desenvolvida pela Spike Chunsoft (antigamente Chunsoft). Os jogos apresentam criaturas fictícias chamadas Pokémon que podem falar a língua humana e explorar masmorras geradas aleatoriamente usando um sistema de turnos, que\n[…]\nTsunekazu Ishihara já havia trabalhado com a Chunsoft. Um dos projetos da empresa foi Tetris 2 + BomBliss, onde Ishihara atuou como produtor e conheceu Koichi Nakamura, que foi o diretor do jogo. Antes do desenvolvimento de Pokémon Mystery Dungeon: Red Rescue Team e Blue Rescue Team. Ishihara havia jogado alguns jogos da série Mystery Dungeon, nomeia Torneko's Great Adventure: Mystery Dungeon, e ficou impressionado com a profundidade e a qualidade do gênero.\n[…]\nOs jogos são desenvolvidos pela Spike Chunsoft, anteriormente conhecida como Chunsoft antes da fusão em 2012, e publicados pela Nintendo e pela The Pokémon Company.\n[…]\nPokémon Mystery Dungeon: Ginji's Rescue Team (ポケモン不思議のダンジョンギンジの救助隊, Pokemon Fushigi no Danjon Ginji no Kyūjotai), é uma adaptação em mangá de Pokémon Mystery Dungeon: Blue Rescue Team e Red Rescue Team.\n[…]\nDurante o desenvolvimento de Red e Blue Rescue Team, Kouji Malta, um dos programadores desses dois jogos, que também contribuiu anteriormente para EarthBound e Shiren the Wanderer 2: Shiren's Castle and the Oni Invasion, afirmou que a empresa enfrentava um desempenho financeiro ruim, com a saída progressiva de funcionários da Chunsoft devido a esse problema.\n[…]\nO sucesso do jogo não só contribuiu para aumentar a popularidade da franquia Mystery Dungeon, como também ajudou a Chunsoft a evitar a falência após anos de graves problemas financeiros. A série posteriormente ultrapassou a marca de 10 milhões de cópias vendidas antes do lançamento de Explorers of Sky.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Pokémon Mystery Dungeon",
      "descricao": "Série de jogos derivados de Pokémon, com masmorras geradas ao acaso, em que um humano vive como pokémon."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Os primeiros jogos da série Pokémon Mystery Dungeon, Red Rescue Team e Blue Rescue Team, chegaram às lojas japonesas em que ano?",
    "resposta": "2005",
    "distratores": [
      "2003",
      "2004",
      "2007"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon is a spin-off video game series from the main Pokémon series developed by Chunsoft. The games feature the fictional creatures called Pokémon who have the ability to speak human language navigating through a randomly generated dungeon using turn-based moves, common to Mystery Dungeon games. As of March 2020, there have been eleven games across five platforms, as well as seve\n[…]\nTsunekazu Ishihara has worked previously with Chunsoft. One of the company's work was Tetris 2 + BomBliss, where Ishihara was the game's producer and met Koichi Nakamura, who was the game's director. Prior to the development of Pokémon Mystery Dungeon: Red Rescue Team and Blue Rescue Team, Ishihara had played a few games from the Mystery Dungeon series, namely Torneko's Great Adventure: Mystery Dungeon, and was impressed with the genre's depth and quality.\n[…]\nThe first game released in the series was Pokémon Mystery Dungeon: Blue Rescue Team and Red Rescue Team in 2005 in Japan, then worldwide in 2006. The duo were released on two separate platforms; Red Rescue Team for Game Boy Advance; Blue Rescue Team for Nintendo DS. A free Korean promotional demo titled \"Pokemon Mystery Dungeon: Gold Rescue Team\" (Korean: 포켓몬 불가사의 던전 황금 구조대) was later released in 2007 for Windows PCs to promote Blue Rescue Team's South Korean release.\n[…]\nPokémon Mystery Dungeon: Rescue Team DX is the latest title in the series, released on Nintendo Switch in 2020. It is a remake of the original Rescue Team games on Nintendo DS and Game Boy Advance, united as one game, with a complete overhaul of the graphics and reworked gameplay.\n[…]\nPokémon Mystery Dungeon: Team Go-Getters Out Of The Gate! (2006), an anime adaption of Pokémon Mystery Dungeon: Blue Rescue Team and Red Rescue Team.\n[…]\nPokémon Mystery Dungeon: Ginji's Rescue Team, a manga adaptation of Pokémon Mystery Dungeon: Blue Rescue Team and Red Rescue Team."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon (ポケモン不思議 (ふしぎ)のダンジョン, Pokemon Fushigi no Danjon; lit. Pokémon Masmorra Misteriosa) é uma série de jogos eletrônicos spin-offs da série principal Pokémon, desenvolvida pela Spike Chunsoft (antigamente Chunsoft). Os jogos apresentam criaturas fictícias chamadas Pokémon que podem falar a língua humana e explorar masmorras geradas aleatoriamente usando um sistema de turnos, que\n[…]\nEm Pokémon Super Mystery Dungeon e Pokémon Mystery Dungeon: Rescue Team DX, é possível escolher um Pokémon para ser após o teste de personalidade.\n[…]\nTsunekazu Ishihara já havia trabalhado com a Chunsoft. Um dos projetos da empresa foi Tetris 2 + BomBliss, onde Ishihara atuou como produtor e conheceu Koichi Nakamura, que foi o diretor do jogo. Antes do desenvolvimento de Pokémon Mystery Dungeon: Red Rescue Team e Blue Rescue Team. Ishihara havia jogado alguns jogos da série Mystery Dungeon, nomeia Torneko's Great Adventure: Mystery Dungeon, e ficou impressionado com a profundidade e a qualidade do gênero.\n[…]\nO primeiro jogo lançado na série foi Pokémon Mystery Dungeon: Blue Rescue Team e Red Rescue Team em 2005 no Japão, e em 2006 em todo o mundo. A dupla foi lançada em duas plataformas diferentes; Red Rescue Team para Game Boy Advance; Blue Rescue Team para Nintendo DS.\n[…]\nPokémon Mundo Misterioso: A Equipe Força Resgate em sua Primeira Missão, conhecido no Japão como Pokémon Mystery Dungeon: Team Go-Getters Out Of The Gate! (ポケモン不思議のダンジョン　出動！ポケモン救助隊ガンバルズ！, Pokemon fushigi no donjon shutsudō Pokemon kyūjotai Ganbaruzu!) (lançado em 2006), uma adaptação em anime de Pokémon Mystery Dungeon: Blue Rescue Team e Red Rescue Team.\n[…]\nPokémon Mystery Dungeon: Ginji's Rescue Team (ポケモン不思議のダンジョンギンジの救助隊, Pokemon Fushigi no Danjon Ginji no Kyūjotai), é uma adaptação em mangá de Pokémon Mystery Dungeon: Blue Rescue Team e Red Rescue Team.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pokémon Mystery Dungeon: Explorers of Time e Explorers of Darkness",
      "descricao": "Par de jogos da série Pokémon Mystery Dungeon lançado em 2007 para Nintendo DS, em que o herói entra numa guilda de exploradores."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Mystery Dungeon: Explorers of Time e Darkness, o herói treina numa guilda de exploradores. Que pokémon rosado, de jeito distraído, é o mestre dessa guilda?",
    "resposta": "Wigglytuff",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Time_and_Explorers_of_Darkness",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Time_and_Explorers_of_Darkness"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Time_and_Explorers_of_Darkness",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon: Explorers of Time and Pokémon Mystery Dungeon: Explorers of Darkness are a matched pair of Pokémon games developed by Chunsoft and published by The Pokémon Company and Nintendo for the Nintendo DS. The two games were released in Japan in September 2007, and in North America and Europe in 2008. A third version, Pokémon Mystery Dungeon: Explorers of Sky, was released for the\n[…]\nOn March 20, 2007, Famitsu teased a sequel in the Pokémon Mystery Dungeon series. The then untitled game would make use of the Nintendo DS's dual screens and Wi-Fi support. Moreover, it was the first time Chunsoft made a sequel to a Mystery Dungeon game involving licensed characters other than Dragon Quest’s Torneko or Final Fantasy’s Chocobo.\n[…]\nTwo months after the announcement, Chunsoft confirmed the sequel to the series with an official title and the games being two versions like the Rescue Team games; Pokémon Mystery Dungeon: Explorers of Time and Pokémon Mystery Dungeon: Explorers of Darkness respectively.\n[…]\nBoth Mystery Dungeon: Explorers of Time and Explorers of Darkness have received a rating of 7.5 from Nintendo Power. Gamezone gave the games a rating of 7.8/10, praising their graphics, gameplay, and soundtrack.\n[…]\nDuring the 12th Annual Interactive Achievement Awards, the Academy of Interactive Arts & Sciences nominated Pokémon Mystery Dungeon: Explorers of Time for \"Role-Playing Game of the Year\", which ultimately went to Fallout 3.\n[…]\nA special episode of the Pokémon anime, Pokémon Mystery Dungeon: Explorers of Time & Darkness, was developed based on the game plot. Unlike previous special episodes, this does not take place in any continuity of the main storyline. It was first broadcast in Japan on September 9, 2007, as part of Pokémon Sunday.\n[…]\nPokémon Mystery Dungeon Official Site (in English)\n[…]\nPokémon Mystery Dungeon: Explorers of Time and Explorers of Darkness at Bulbapedia"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Time_and_Explorers_of_Darkness",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon%3A_Explorers_of_Time_e_Explorers_of_Darkness",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon 2 (ポケモン不思議のダンジョン2  時の探検隊・闇の探検隊, Pokemon Fushigi no Danjon Tsū Toki no Tankentai, Yami no Tankentai) é um jogo da série Pokémon para Nintendo DS, sendo lançado em duas versões: Pokémon Mystery Dungeon: Explorers of Time e Pokémon Mystery Dungeon: Explorers of Darkness. Situado na mesma Região do antecessor Pokémon Mystery Dungeon, tem suporte para a Nintendo Wi-Fi Connection\n[…]\nAo mesmo tempo que isso ocorre, mistérios surgem, como o porquê de o humano ter sido transformado em Pokémon e qual o segredo que ronda a pedra mística, o símbolo do jogo, que seu parceiro carrega. Chefiados por Wigglytuff e seu guarda-costas e braço-direito, Chatot, o protagonista conta com a ajuda dos empregados da Guild para capturar Grovyle, o maior criminoso de todos, e descobrir porque ele está roubando as engrenagens do tempo (Time Gears, em inglês).\n[…]\nDiferentemente de Pokémon Mystery Dungeon, o objetivo das missões neste jogo é procurar tesouros escondidos em calabouços e procurar criminosos dentro deles. Isso gera uma recompensa em dinheiro que vai, em parte, para a Guild, o que ajuda a mantê-la funcionando. Também não há Friend Areas neste jogo, os locais onde Pokémon recrutados para o time aguardavam uma participação em missões.\n[…]\nPokémon Mystery Dungeon 2 tem suporte para a Nintendo Wi-Fi Connection, onde é possível resgatar um time à longa distância que falhou em uma missão e precisa de ajuda. Provavelmente o resgate não é feito mais por códigos devido à falha no primeiro jogo de burlação de códigos e criação de resgates falsos que eram recompensados por itens raros em missões fáceis.\n[…]\nPachirisu, Combee (Vespiqueen são encontrados em Explorers of Darkness), Celebi, Riolu, Lucario, para Explorers of Time.\n[…]\nMewtwo, Burmy (Wormadam & Mothim são encontrados em Explorers of Time), Buneary, Lopunny e Rotom para Explorers of Darkness.\n[…]\nVersão Explorers of Time:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Pokkén Tournament",
      "descricao": "Jogo de luta da franquia Pokémon, lançado em 2015, que mistura Pokémon com a jogabilidade de Tekken."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No modo história de Pokkén Tournament, o grande vilão é uma versão sombria e corrompida de qual pokémon lendário?",
    "resposta": "Mewtwo (Shadow Mewtwo)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pokk%C3%A9n_Tournament"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pokk%C3%A9n_Tournament",
        "situacao": "ok",
        "texto": "Pokkén Tournament is a 2015 fighting video game developed by Bandai Namco Entertainment. The game combines gameplay elements from Bandai Namco's Tekken series and other fighting games, such as 3D and 2D movement, with characters from the Pokémon franchise. It was released for Japanese arcades in July 2015 and worldwide for the Wii U in March 2016. An enhanced port for the Nintendo Switch, Pokkén T\n[…]\nFirst-print Wii U copies of the game were packaged with a Shadow Mewtwo Amiibo card, which immediately unlocked the character for use. The title also features online play, where players can compete in two types of online battle modes called friendly battles and ranked battles, including matches between players with registered friend codes and players who enter the same VS Code as each other.\n[…]\nPokkén Tournament was first teased during a Pokémon Game Show event held in Japan in August 2013, with trademarks for the game filed the same month. It was officially announced at an event held by Famitsu on August 26, 2014. The Pokémon Company CEO Tsunekazu Ishihara, Tekken series producer Katsuhiro Harada, and Soulcalibur producer Masaaki Hoshino attended the event, which was broadcast on Niconico, stating the collaboration came about from brainstorming ideas of new ways to play Pokémon.\n[…]\nIn June 2017, an enhanced Nintendo Switch port was announced under the title Pokkén Tournament DX, which was released worldwide on September 22, 2017. The port includes the last four fighters added in the arcade version, along with an additional exclusive fighter and new game modes. In January 2018, two DLC packs were announced for the DX version. In Pack One, Aegislash is a fighter along with Mega Rayquaza and Mimikyu as support Pokémon, which was released on January 31, 2018.\n[…]\nIn Pack Two, Blastoise is a fighter along with Mew and Celebi as support Pokémon, which was released on March 23, 2018."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pokk%C3%A9n_Tournament",
        "situacao": "ok",
        "texto": "Pokkén Tournament é um videojogo de luta arcade produzido pela Bandai Namco. O jogo combina elementos da série Tekken com personagens do jogo Pokémon da The Pokémon Company. Foi lançado nas arcadas japonesas a 16 de junho de 2015 e portado para Wii U a 18 de março de 2016.\n[…]\nA jogabilidade de Pokkén Tournament é semelhante a Tekken. Diferentemente da maioria dos jogos de luta de arcade, que usam um joystick e botões tradicional, a versão arcade é jogado com comandos de estilo da consola, que são projetados de modo que os jogadores que não estão habituados a arcada entrem no jogo mais facilmente. O jogo se concentra mais na ação, ao contrário do jogo mais técnico de Tekken, permitindo tanto a fãs hardcore e casuais possam apreciá-lo.\n[…]\nOs jogadores podem executar várias técnicas retirados da série Pokémon, como movimentos especiais e mega evoluções.\n[…]\nO jogo inicia com 21 Pokémon jogáveis:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Pokémon Snap",
      "descricao": "Jogo de 1999 para Nintendo 64 em que o fotógrafo Todd Snap registra pokémon numa ilha, percorrida num veículo sobre trilhos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Nos Estados Unidos, quem jogava Pokémon Snap podia imprimir as próprias fotos como adesivos em quiosques espalhados por qual rede de locadoras de vídeo?",
    "resposta": "Blockbuster",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "Pokémon Snap is a 1999 photography video game developed by HAL Laboratory and published by Nintendo for the Nintendo 64. It was first released in Japan in March 1999 and was later released in July 1999 in North America and in September 2000 for PAL regions. It is a spin-off game in the Pokémon series, being one of the first console-based games for it, and featuring many Pokémon rendered for the fi\n[…]\nNintendo and Japanese convenience store Lawson formed a deal where people could bring their copies of Pokémon Snap to Lawson stores in Japan and have pictures from the game printed as stickers. A similar deal was formed with Blockbuster, which exclusively printed stickers from players' copies of Pokémon Snap in the United States. They hosted a contest called \"Take Your Best Shot\", where the player who produces the best picture from Pokémon Snap to Nintendo would win a trip to Australia.\n[…]\nIn December 2007, Pokémon Snap was re-released for the Wii as a Virtual Console title. While the original release supported the ability to take the cartridge into Blockbuster or Lawson stores in the United States to have taken pictures printed as stickers, the re-release replaced this with the ability to save photos to the Wii message board and share them with friends.\n[…]\nFor the week ending November 27, it ranked as the 10th best-selling video game, while it remained the most-rented video game for the same week. By the end of 1999, Pokémon Snap was the sixth best-selling video game in the United States, having sold in excess of 1.5 million copies. IGN attributed this success with \"well targeted promotions\" and the tie in with Blockbuster.\n[…]\nAt the 3rd Annual Interactive Achievement Awards, Pokémon Snap was awarded Console Children's/Family Title of the Year by  the Academy of Interactive Arts & Sciences. Blockbuster nominated it for best Nintendo 64 game in its \"Blockbuster Awards\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "Pokémon Snap (ポケモンスナップ, Pokemon Sunappu) é um jogo da série Pokémon, lançado em 1999 para Nintendo 64. É um dos primeiros spin-offs da série. Nele, o jogador controla um fotógrafo, Todd Snap, cujo objetivo é fotografar cada Pokémon no melhor ângulo.\n[…]\nO objetivo do jogo é fotografar cada pokémon no melhor ângulo possível, semelhante a um jogo de tiro. É possível tirar sessenta fotos da mesma fase e depois escolher a melhor para dar de presente ao Prof. Carvalho, que avalia o estado da foto e dá pontos ao jogador para destravar recursos no jogo. Os critérios de avaliação são:\n[…]\nOutro Pokémon: caso haja dois ou mais pokémons em uma foto e caso estes estejam bons, pontos extras são dados.\n[…]\nTécnica: caso o Pokémon esteja bem centralizado, pontos extras são dados.\n[…]\nTodd, um fotógrafo de pokémons, é chamado pelo Prof. Carvalho para ir a uma ilha para ajudá-lo com uma pesquisa. Ele precisa de qualidades nas fotos para ajudá-lo a entender melhor o comportamento dos Pokémon. Em uma ilha, onde os Pokémon não são perturbados por humanos, Todd viaja pela ilha e fotografa os Pokémon em cima de seu buggy chamado Zero-One.\n[…]\nPokémon Snap apresenta apenas sete fases, mas é necessário voltar a algumas fases para ajudar ainda mais o Prof. Carvalho e encontrar mais coisas interessantes, principalmente achar e fotografar as \"Marcas de Pokémon\", coisas comuns que têm a forma dos Pokémon.\n[…]\nPokémon Snap foi citado como um jogo bom e inovador, mas recebeu muitas críticas por conter apenas 63 dos 151 Pokémon existentes na época.\n[…]\nEm abril de 2016, Pokémon Snap foi relançado no Japão como um título do Virtual Console do Wii U. Esta versão foi relançada na Europa e Austrália, em agosto do mesmo ano, e na América do Norte em 5 de janeiro de 2017.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Pokémon Snap",
      "descricao": "Jogo de 1999 para Nintendo 64 em que o fotógrafo Todd Snap registra pokémon numa ilha, percorrida num veículo sobre trilhos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O Pokémon Snap original, de Nintendo 64, foi desenvolvido com a participação de qual estúdio japonês, o mesmo que criou o personagem Kirby?",
    "resposta": "HAL Laboratory",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "Pokémon Snap is a 1999 photography video game developed by HAL Laboratory and published by Nintendo for the Nintendo 64. It was first released in Japan in March 1999 and was later released in July 1999 in North America and in September 2000 for PAL regions. It is a spin-off game in the Pokémon series, being one of the first console-based games for it, and featuring many Pokémon rendered for the fi\n[…]\nOriginally announced as a Nintendo 64DD title, the development of Pokémon Snap was moved to the Nintendo 64 due to the 64DD's delays. The gameplay is similar to other first-person games, viewing from the perspective of protagonist Todd Snap as he moves automatically on a rail. The objective of the game is to take pictures of Pokémon with an in-game camera, using items such as apples and \"pester balls\" to achieve better shots.\n[…]\nPokémon Snap was developed by HAL Laboratory with assistance from Pax Softnica. It originally started out as a non-Pokémon game called Jack and the Beanstalk. Named after the English fairy tale of the same name, the game was intended for the 64DD, a peripheral for the Nintendo 64. The game was developed at HAL's office on the second floor of the Nintendo Kanda building in Sudachō, Tokyo, by a development team called \"Jack and Beans\".\n[…]\nAfter progress in the development of Jack and the Beanstalk was deemed unsatisfactory, the idea arose to turn it into a Pokémon spin-off. The game, now known as Pokémon Snap, was shown at Nintendo Space World '97. Satoru Iwata, one of the producers of the game, explained in a 2010 interview: \"Originally, Pokémon Snap for the Nintendo 64 system wasn't a Pokémon game, but rather a normal game in which you took photos, but the motivation for playing the game wasn't clear.\n[…]\nOn June 24, 2022, Pokémon Snap was rereleased for the Nintendo Classics service.\n[…]\nPokémon Snap at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "Pokémon Snap (ポケモンスナップ, Pokemon Sunappu) é um jogo da série Pokémon, lançado em 1999 para Nintendo 64. É um dos primeiros spin-offs da série. Nele, o jogador controla um fotógrafo, Todd Snap, cujo objetivo é fotografar cada Pokémon no melhor ângulo.\n[…]\nPose: avalia a pose do Pokémon\n[…]\nOutro Pokémon: caso haja dois ou mais pokémons em uma foto e caso estes estejam bons, pontos extras são dados.\n[…]\nTécnica: caso o Pokémon esteja bem centralizado, pontos extras são dados.\n[…]\nTodd, um fotógrafo de pokémons, é chamado pelo Prof. Carvalho para ir a uma ilha para ajudá-lo com uma pesquisa. Ele precisa de qualidades nas fotos para ajudá-lo a entender melhor o comportamento dos Pokémon. Em uma ilha, onde os Pokémon não são perturbados por humanos, Todd viaja pela ilha e fotografa os Pokémon em cima de seu buggy chamado Zero-One.\n[…]\nPokémon Snap apresenta apenas sete fases, mas é necessário voltar a algumas fases para ajudar ainda mais o Prof. Carvalho e encontrar mais coisas interessantes, principalmente achar e fotografar as \"Marcas de Pokémon\", coisas comuns que têm a forma dos Pokémon.\n[…]\nPokémon Snap foi citado como um jogo bom e inovador, mas recebeu muitas críticas por conter apenas 63 dos 151 Pokémon existentes na época.\n[…]\nO jogo recebeu uma versão para o Virtual Console do Nintendo Wii, lançada em dezembro de 2007, idêntica à versão para Nintendo 64, exceto pelo fato de que as fotos podem ser postadas no Wii Message Board. É o primeiro jogo do Virtual Console a ter alguma \"mudança\" em relação ao jogo original.\n[…]\nEm abril de 2016, Pokémon Snap foi relançado no Japão como um título do Virtual Console do Wii U. Esta versão foi relançada na Europa e Austrália, em agosto do mesmo ano, e na América do Norte em 5 de janeiro de 2017.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "New Pokémon Snap",
      "descricao": "Jogo de fotografia de pokémon para Nintendo Switch, continuação de Pokémon Snap, desenvolvido pela Bandai Namco Studios."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "New Pokémon Snap, a continuação do jogo de fotografar pokémon, se passa em qual região de ilhas, estudada pelo Professor Mirror?",
    "resposta": "Lental",
    "fonte": [
      "https://en.wikipedia.org/wiki/New_Pok%C3%A9mon_Snap"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/New_Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "New Pokémon Snap is a 2021 photography video game developed by Bandai Namco Studios and published by Nintendo and The Pokémon Company for the Nintendo Switch. It is a sequel to HAL Laboratory's 1999 Nintendo 64 game Pokémon Snap. It was announced in June 2020 during a Pokémon Presents livestream and was released on April 30, 2021, during the franchise's 25th anniversary.\n[…]\nNew Pokémon Snap is a three-dimensional (3D) photography video game with elements of the rail shooter and puzzle genres. The player controls a Pokémon photographer who is tasked by a research team led by Professor Mirror with taking pictures of Pokémon species in their natural habitat in the Lental region for their ecological survey. Additionally, the player is asked to investigate Illumina phenomenon, where Pokémon and plants known as crystablooms exhibit a strange luminescence.\n[…]\nThe player, a Pokémon photographer, travels to the Laboratory of Ecological and Natural Sciences (L.E.N.S.) in the Lental region after being invited by Professor Mirror and his assistant Rita to help with their research studies and ecological survey. The pair are researching the Illumina phenomenon, a phenomenon that causes Pokémon species as well as specific flowers to exhibit a strange luminescence, which was documented in a travelogue by an explorer 100 years prior.\n[…]\nAcross three of the Lental region's archipelago, Belusylva Island, Maricopia Islands and Voluca Island, the player travels through different biomes and unlocks tools that can change a Pokémon's behavior to further the documentation of different species. During this time, two more of Professor Mirror's assistants, Todd Snap and Phil, arrive at L.E.N.S. to aid in the professor's work. Mirror also develops the Illumina orbs, tools that can cause Pokémon to temporarily appear in the Illumina state."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/New_Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "New Pokémon Snap (New ポケモンスナップ, Nyū Pocket Monsters Sunappu) é um jogo eletrônico de simulação em primeira pessoa 2021 on-rails desenvolvido pela Bandai Namco Studios e publicado pela Nintendo e The Pokémon Company para o Nintendo Switch. É uma sequência do jogo Pokémon Snap de 1999 para Nintendo 64. Anunciado em junho de 2020, foi lançado em 30 de abril de 2021. Os jogadores viajam na região de L\n[…]\nEm New Pokémon Snap, o jogador é um fotógrafo Pokémon, que visita várias ilhas na região de Lental para auxiliar nos estudos de pesquisa do Professor Mirror e seus assistentes Rita e Phil. O laboratório de pesquisa localizado na região de Lental é denominado Laboratório de Ciências Ecológicas e Naturais (L.E.N.S.). Tirar fotos ajuda o jogador a construir um compêndio chamado Fotodex; o título apresenta mais de 200 Pokémon diferentes para o usuário retratar.\n[…]\nAlém de adicionar imagens ao Fotodex, o jogador também ajuda a pesquisar o fenômeno Lumini, que faz com que Pokémon e plantas adquiram um brilho especial.\n[…]\nNew Pokémon Snap foi desenvolvido por Bandai Namco Studios e é publicado por The Pokémon Company e Nintendo. A Bandai Namco já havia desenvolvido o jogo de luta Pokémon Pokkén Tournament, no qual os Pokémon eram representados como parte de um mundo interconectado, coexistindo com humanos. De acordo com o diretor do jogo Haruki Suzaki, que dirigiu os dois títulos, foi essa representação de Pokémon que ajudou o estúdio a ganhar a oportunidade de trabalhar em New Pokémon Snap.\n[…]\nA visão de Suzaki para o jogo era manter a jogabilidade básica do original, enquanto adicionava novos recursos que refletiam como as pessoas atualmente interagem com as fotos. Ele explicou: \"O resultado é um jogo simples de tirar fotos em um mundo onde os Pokémon estão vivos e bem na natureza, mas ao mesmo tempo há uma variedade de maneiras contemporâneas de brincar com a fotografia.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "New Pokémon Snap",
      "descricao": "Jogo de fotografia de pokémon para Nintendo Switch, continuação de Pokémon Snap, desenvolvido pela Bandai Namco Studios."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Mais de vinte anos depois do original de Nintendo 64, New Pokémon Snap chegou ao Nintendo Switch em que ano?",
    "resposta": "2021",
    "distratores": [
      "2019",
      "2020",
      "2022"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/New_Pok%C3%A9mon_Snap"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/New_Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "New Pokémon Snap is a 2021 photography video game developed by Bandai Namco Studios and published by Nintendo and The Pokémon Company for the Nintendo Switch. It is a sequel to HAL Laboratory's 1999 Nintendo 64 game Pokémon Snap. It was announced in June 2020 during a Pokémon Presents livestream and was released on April 30, 2021, during the franchise's 25th anniversary.\n[…]\nNew Pokémon Snap was released worldwide on April 30, 2021, about 22 years after the release of the original Pokémon Snap. Alongside of the release of the game, Nintendo launched a line of themed stationary, such as a letter set, on the My Nintendo loyalty program; the merchandise could be exchanged using Platinum Points. In Japan, CoroCoro Comic hosted a competition where readers would send the publication their best in-game photos for the chance to win.\n[…]\nOn July 29, 2021, Nintendo announced a free content update for the game that would release the following week on August 3. The update, referred to as version 2.0.0, added 20 new Pokémon such as Psyduck and Gyarados as well as 3 new courses which have both day and night variants.\n[…]\nIn Europe, the game was the 3rd most-downloaded game on the Nintendo eShop in April 2021, only behind Monster Hunter Rise and Minecraft. By June 30, 2021, the game had sold 2.07 million copies. As of March 2022, New Pokémon Snap has sold 2.4 million copies.\n[…]\nPublications such as Automaton Japan, Game Developer, TheGamer, The Indiependent, Nintendo Life, RPGFan and Tom's Guide have listed New Pokémon Snap as one of the best games of 2021. The game was nominated for Best Family Game at The Game Awards 2021, however, it lost to It Takes Two. At the 2021 Golden Joystick Awards, the game was nominated for the Nintendo Game of the Year award, but lost to Metroid Dread."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/New_Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "New Pokémon Snap (New ポケモンスナップ, Nyū Pocket Monsters Sunappu) é um jogo eletrônico de simulação em primeira pessoa 2021 on-rails desenvolvido pela Bandai Namco Studios e publicado pela Nintendo e The Pokémon Company para o Nintendo Switch. É uma sequência do jogo Pokémon Snap de 1999 para Nintendo 64. Anunciado em junho de 2020, foi lançado em 30 de abril de 2021. Os jogadores viajam na região de L\n[…]\nEm New Pokémon Snap, o jogador é um fotógrafo Pokémon, que visita várias ilhas na região de Lental para auxiliar nos estudos de pesquisa do Professor Mirror e seus assistentes Rita e Phil. O laboratório de pesquisa localizado na região de Lental é denominado Laboratório de Ciências Ecológicas e Naturais (L.E.N.S.). Tirar fotos ajuda o jogador a construir um compêndio chamado Fotodex; o título apresenta mais de 200 Pokémon diferentes para o usuário retratar.\n[…]\nDependendo da criatura, o orbe pode ajudar a acordar Pokémon adormecidos ou até mesmo animá-los. Também é possível encontrar Pokémon escondidos na área usando a câmera para procurá-los.\n[…]\nNew Pokémon Snap foi desenvolvido por Bandai Namco Studios e é publicado por The Pokémon Company e Nintendo. A Bandai Namco já havia desenvolvido o jogo de luta Pokémon Pokkén Tournament, no qual os Pokémon eram representados como parte de um mundo interconectado, coexistindo com humanos. De acordo com o diretor do jogo Haruki Suzaki, que dirigiu os dois títulos, foi essa representação de Pokémon que ajudou o estúdio a ganhar a oportunidade de trabalhar em New Pokémon Snap.\n[…]\nFoi anunciado durante a apresentação Pokémon Presents em 17 de junho de 2020 e está planejado para lançamento no Nintendo Switch. Em 14 de janeiro de 2021, a Nintendo anunciou que o jogo seria lançado em 30 de abril daquele ano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Pokémon Stadium",
      "descricao": "Jogo de batalhas Pokémon em 3D para Nintendo 64, que permitia usar pokémon dos jogos de Game Boy."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O primeiro Pokémon Stadium, lançado só no Japão em 1998, não tinha todos os 151 pokémon. Quantos deles podiam ser usados nas batalhas?",
    "resposta": "42",
    "distratores": [
      "25",
      "64",
      "100"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Stadium",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Stadium_(Japanese)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Stadium",
        "situacao": "ok",
        "texto": "Pokémon Stadium is a 1999 strategy video game developed and published by Nintendo for the Nintendo 64. The gameplay revolves around a 3D turn-based battling system using the 151 Pokémon from the Game Boy games Pokémon Red, Blue, and Yellow, with several in-game challenges for players to overcome. The game includes four \"Cups\", each of which is a series of three-on-three Pokémon battles against an \n[…]\nIt was the first Stadium title released in Western regions, succeeding the Japan-only 1998 Nintendo 64 release Pocket Monsters Stadium. Pokémon Stadium was released in Japan in 1999, before being released in Australia, Europe and North America in 2000. Pokémon Stadium became one of the best-selling Nintendo 64 titles, selling one million copies before the end of the year.\n[…]\nPokémon Stadium was developed by Nintendo EAD. Producer Shigeru Miyamoto explained in 1997 that Nintendo EAD was then a group of 20 to 30 staff each devoted to every title. Within EAD, a programming group called SRD involved a separate company of about 200 people working exclusively for Nintendo. Nintendo EAD had previously produced Pocket Monsters Stadium, the prior entry in the series.\n[…]\nPocket Monsters Stadium was initially set for release on the cancelled 64DD console and was planned to feature every Pokémon from the Game Boy games. This number was reduced to 40 during development and eventually released on cartridge for the Nintendo 64.\n[…]\nPokémon Stadium was initially released in Japan as Pokémon Stadium 2, acting as a sequel and expansion to the Japan-exclusive Pocket Monsters Stadium. Unlike the prior release, Stadium allowed the usage of all 151 species of Pokémon instead of the limited pool of 40 used prior, and greatly expanded on various different gameplay features that were in the prior game.\n[…]\nPokémon Stadium at the Wayback Machine (archived 2007-10-11) at Nintendo.com"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Stadium_(Japanese)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Stadium",
        "situacao": "ok",
        "texto": "Pokémon Stadium é um jogo de estratégia da série Pokémon para o Nintendo 64. É um jogo de lutas entre os Pokémon onde o jogador pode lutar contra a CPU ou outros jogadores através do Transfer Pak de Nintendo 64 com Pokémon Red, Blue & Yellow inserido. Curiosamente, há duas versões desse jogo.Você consegue bichinhos realmente bem treinados, no nível 100.\n[…]\nポケモンスタジアム (Pokemon Sutajiamu) foi lançado no Japão em 1998. Essa versão continha apenas 42 dos 151 primeiros Pokémon. Como o jogo foi um sucesso ,mas, bastante criticado, mesmo assim foi lançado fora do japão. foi um sucesso e até hoje é considerado um melhores jogos do nintendo 64. Está entre os jogos favoritos de mini-games do famoso grupo Reunion.\n[…]\nAbaixo está uma lista dos 42 Pokémon presentes no jogo:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Pokémon Legends: Arceus",
      "descricao": "Jogo Pokémon de 2022 para o Nintendo Switch, ambientado na antiga região de Hisui."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon Legends: Arceus, que levou o jogador à antiga região de Hisui, chegou ao Nintendo Switch em que ano?",
    "resposta": "2022",
    "distratores": [
      "2020",
      "2021",
      "2023"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Arceus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Arceus",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus is a 2022 action role-playing game developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. It is part of the eighth generation of the Pokémon video game series and serves as a prequel to the fourth-generation titles Pokémon Diamond and Pearl (2006). The game was first announced as part of the Pokémon 25th Anniversary event in Febru\n[…]\nThe player battles the legendary Pokémon in its Original Form and captures it, sealing the spacetime rift.\n[…]\nOn 9 December 2021, the official Pokémon Twitter account teased a Poké Ball-related announcement for Legends: Arceus. The next day, a regional variant of Voltorb, a Pokémon based on Poké Balls, was announced. On 15 December 2021, a new trailer showcased several factions present in the game, as well as their leaders. On 7 January 2022, an overview trailer was released in Japanese, showcasing the world, people, and Pokémon. However, the trailer was not localized into English until 24 January 2022.\n[…]\nThe game was released worldwide on 28 January 2022. Exclusive in-game and physical bonuses were given out to those who pre-ordered the game digitally or physically. In Japan, those who pre-ordered Pokémon Legends: Arceus received a gold holographic artbook along with a limited edition Arceus promotional trading card.\n[…]\nA free content update, Daybreak, was announced and released on 27 February 2022.\n[…]\nAnnounced in April 2022, an ONA webseries tie-in, titled Pokémon: Hisuian Snow, debuted on YouTube and Pokémon TV on 18 May 2022. The series focuses on a young boy who befriends a Hisuian Zorua in Hisui. The series received a Webby Award as the \"People's Voice Winner.\" The series A limited 4-episode ONA webseries tie-in, titled Pokémon: The Arceus Chronicles, debuted on Amazon Prime Video in Japan in January 2022 and debuted on Netflix on 23 September 2022."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Legends%3A_Arceus",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus (Pokémon LEGENDS アルセウス, Pokemon Rejenzu: Aruseusu; tradução: Pokémon Lendas: Arceus) é um jogo eletrônico de RPG de ação desenvolvido pela Game Freak e publicado pela The Pokémon Company e Nintendo. Faz parte da oitava geração da série de jogos eletrônicos Pokémon e serve como uma prequela para os jogos eletrônicos de RPG do Nintendo DS, Pokémon Diamond e Pearl, de 2006. Fo\n[…]\nPokémon Legends: Arceus é um RPG de ação, uma estreia na série principal de jogos Pokémon. Apesar desta distinção e das mudanças que vêm com ela, Legends: Arceus é dito para homenagear a jogabilidade principal de entradas anteriores na série. Ele apresenta um cenário de mundo aberto na área selvagem introduzido no Pokémon Sword e Shield. O jogo se passa em uma era passada da história da região de Sinnoh, muito antes dos eventos de Pokémon Diamond e Pearl acontecerem.\n[…]\nPokémon Legends: Arceus está sendo desenvolvido pela Game Freak. É o primeiro projeto conhecido no subgênero de RPG de ação realizado pelo estúdio. Foi revelado pela primeira vez em uma apresentação em 26 de fevereiro de 2021, como parte do evento Pokémon 25th Anniversary ao lado de Pokémon Brilliant Diamond e Shining Pearl. Ele servirá como uma prequela de Diamond e Pearl. Foi lançado mundialmente em 28 de janeiro de 2022.\n[…]\nPokémon Legends: Arceus recebeu \"críticas geralmente favoráveis\" de acordo com o agregador de resenhas Metacritic.\n[…]\nA Nintendo informou que o jogo vendeu 6,5 milhões de cópias em todo o mundo dentro de uma semana de seu lançamento, superando outros títulos da série Pokémon lançados para Nintendo Switch, como Sword e Shield e Brilliant Diamond e Shining Pearl. No Japão, vendeu 1,43 milhão de unidades em três dias. Nos Estados Unidos, apenas as vendas físicas de Legends: Arceus (excluindo downloads digitais) fizeram dele o jogo eletrônico mais vendido de janeiro de 2022.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Pokémon Legends: Arceus",
      "descricao": "Jogo Pokémon de 2022 para o Nintendo Switch, ambientado na antiga região de Hisui."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Legends: Arceus, o jogador escolhe o inicial entre Cyndaquil, de Johto, Oshawott, de Unova, e qual pokémon coruja de Alola?",
    "resposta": "Rowlet",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Arceus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Arceus",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus is a 2022 action role-playing game developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. It is part of the eighth generation of the Pokémon video game series and serves as a prequel to the fourth-generation titles Pokémon Diamond and Pearl (2006). The game was first announced as part of the Pokémon 25th Anniversary event in Febru\n[…]\nBy battling, capturing, or engaging with other interactions with Pokémon, players progress in completing their Pokédex entries. Players can also take on and complete side quests given by NPCs in the game. In total, the game featured 242 Pokémon on release, including 7 new species and 17 new iterations (\"forms\") of existing Pokémon. At the start of the game, three starter Pokémon are available: Rowlet (from Sun and Moon), Cyndaquil (from Gold and Silver) and Oshawott (from Black and White).\n[…]\nPokémon Legends: Arceus received \"generally favorable reviews\", according to review aggregator website Metacritic. OpenCritic determined that 85% of critics recommended the game. Andrew Webster of The Verge praised the game's overhaul of the Pokémon formula, particularly the world design and Pokédex challenges, writing that it was \"the biggest overhaul to the Pokémon formula since the series debuted\".\n[…]\nJordan Middler of Nintendo Life praised Pokémon Legends: Arceus for its \"rewarding\" exploration, \"addictive\" catching mechanics, quality of the Pokémon roster, and its \"genuine sense of scale\", while stating that \"Pokémon Legends: Arceus is quite simply one of the greatest Pokémon games ever made\".\n[…]\nPokémon Legends: Arceus was nominated for several end of the year awards; it was nominated for Best RPG at The Game Awards, as well as nominated for Game of the Year by GamesRadar, GamingBolt, The Washington Post, Empire, VGC, GamesHub, and Polygon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Legends%3A_Arceus",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus (Pokémon LEGENDS アルセウス, Pokemon Rejenzu: Aruseusu; tradução: Pokémon Lendas: Arceus) é um jogo eletrônico de RPG de ação desenvolvido pela Game Freak e publicado pela The Pokémon Company e Nintendo. Faz parte da oitava geração da série de jogos eletrônicos Pokémon e serve como uma prequela para os jogos eletrônicos de RPG do Nintendo DS, Pokémon Diamond e Pearl, de 2006. Fo\n[…]\nFoi declarado que o objetivo do jogo seria criar a primeira Pokédex de Sinnoh. O mítico Pokémon Arceus terá um papel importante na história.\n[…]\nNo início do jogo, três opções iniciais de Pokémon estão disponíveis: Rowlet (do Pokémon Sun e Moon), Cyndaquil (do Pokémon Gold e Silver) e Oshawott (do Pokémon Black e White), tornando-o o primeiro jogo da série principal a apresentar Pokémon iniciais de três gerações diferentes de jogos.\n[…]\nApós o lançamento do trailer de revelação, vários sites de notícias como Polygon, assim como fãs da série, fizeram comparações entre Pokémon Legends: Arceus e The Legend of Zelda: Breath of the Wild, observando aparentes semelhanças com este último em jogabilidade de mundo aberto e estilo de arte mostrados no trailer. Outros criticaram o jogo por uma percepção de falta de profundidade e qualidade visual inconsistente e levantaram preocupações sobre aparentes problemas de desempenho.\n[…]\nPokémon Legends: Arceus recebeu \"críticas geralmente favoráveis\" de acordo com o agregador de resenhas Metacritic.\n[…]\nA Nintendo informou que o jogo vendeu 6,5 milhões de cópias em todo o mundo dentro de uma semana de seu lançamento, superando outros títulos da série Pokémon lançados para Nintendo Switch, como Sword e Shield e Brilliant Diamond e Shining Pearl. No Japão, vendeu 1,43 milhão de unidades em três dias. Nos Estados Unidos, apenas as vendas físicas de Legends: Arceus (excluindo downloads digitais) fizeram dele o jogo eletrônico mais vendido de janeiro de 2022.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Scyther",
      "descricao": "Pokémon mantis dos tipos Inseto e Voador, número 123 da Pokédex Nacional."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em Legends: Arceus, o louva-a-deus Scyther ganhou uma nova evolução, com machados de pedra no lugar das lâminas. Que pokémon é esse?",
    "resposta": "Kleavor",
    "distratores": [
      "Sneasler",
      "Wyrdeer",
      "Ursaluna"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kleavor_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Scyther_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kleavor_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Scyther_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Pokémon Legends: Z-A",
      "descricao": "Jogo Pokémon de 2025, para Nintendo Switch e Switch 2, ambientado na cidade de Lumiose, na região de Kalos."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon Legends Z-A, que se passa inteiramente na cidade de Lumiose, chegou ao Nintendo Switch e ao Switch 2 em que ano?",
    "resposta": "2025",
    "distratores": [
      "2023",
      "2024",
      "2026"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Z-A"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Z-A",
        "situacao": "ok",
        "texto": "Pokémon Legends: Z-A is a 2025 action role-playing game developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch and Nintendo Switch 2. Part of the ninth generation of Pokémon video games, it is a sequel to the sixth-generation titles Pokémon X and Y (2013) and the second entry in the Pokémon Legends sub-series, following Pokémon Legends: Arceus (2022).\n[…]\nThe game takes place entirely in the Kalos region's Lumiose City, five years after the events of X and Y.\n[…]\nPokémon Legends: Z-A was announced in February 2024 as an exclusive to the original Switch console, before it was later announced that it would also receive an enhanced port for the Switch 2. It was released on 16 October 2025, to generally positive reviews. Critics praised the battle system, but found the city setting to be visually restricting. Paid downloadable content, Pokémon Legends: Z-A – Mega Dimension, was announced on 12 September 2025, and was released on 10 December 2025.\n[…]\nDuring the Nintendo Direct on 2 April 2025, it was confirmed that Pokémon Legends: Z-A would get an upgraded version on Nintendo Switch 2 alongside many other Nintendo Switch games. The game was released on 16 October 2025 for both Switch and Switch 2. Z-A was showcased again during a September 2025 Nintendo Direct, during which Mega Evolved forms for the X and Y starters were revealed.\n[…]\nWithin the game's first week of release, the game had sold over 5.8 million units worldwide. In Japan, the game sold 1.48 million units within its first four days of launch, with its Switch and Switch 2 versions respectively taking the first and second spots in Japan's weekly sales charts. As of December 31, 2025, the game has sold 12.3 million copies, including 8.41 million on the Switch and digitally on the Switch 2 combined, as well as 3.89 million physically on the Switch 2."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Legends%3A_Z-A",
        "situacao": "ok",
        "texto": "Pokémon Legends: Z-A é um jogo eletrônico de RPG de ação desenvolvido pela Game Freak e publicado pela Nintendo e The Pokémon Company para Nintendo Switch e Nintendo Switch 2. Parte da nona geração de jogos eletrônicos de Pokémon, é uma sequência dos títulos da sexta geração Pokémon X e Y (2013) e o segundo jogo da sub-série Pokémon Legends, seguindo Pokémon Legends: Arceus (2022). O jogo se passa\n[…]\nPokémon Legends: Z-A foi anunciado em fevereiro de 2024, inicialmente lançado como exclusivo para o console Switch original, foi anunciado posteriormente que também receberia uma versão aprimorada para o Switch 2. Foi lançado em 16 de outubro de 2025, recebendo críticas geralmente positivas. Os críticos elogiaram o sistema de batalha, mas consideraram o cenário urbano visualmente restritivo.\n[…]\nDurante o Nintendo Direct em 2 de abril de 2025, foi confirmado que Pokémon Legends: Z-A receberá uma versão atualizada no Nintendo Switch 2 junto com muitos outros jogos do Nintendo Switch. O jogo foi lançado em 16 de outubro de 2025 para Switch e Switch 2. Z-A foi apresentado novamente durante um Nintendo Direct de setembro de 2025, durante o qual as Mega Evoluções dos iniciais de X e Y foram reveladas.\n[…]\nLegends Z-A recebeu críticas \"geralmente favoráveis\" de acordo com o site agregador de análises Metacritic. No OpenCritic, o jogo recebeu uma classificação de aprovação \"Forte\" dos críticos. Alana Hagues, do Nintendo Life, elogiou as batalhas, bem como o desempenho do jogo no Nintendo Switch 2, mas criticou os visuais por serem \"sem vida e muito planos\". Hagues também sentiu que o cenário Cidade de Lumiose do jogo era restritivo.\n[…]\nEm 31 de dezembro de 2025, o jogo havia vendido 12,3 milhões de cópias, incluindo 8,41 milhões no Switch e digitalmente no Switch 2 combinados, além de 3,89 milhões fisicamente no Switch 2.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Pokémon Legends: Z-A",
      "descricao": "Jogo Pokémon de 2025, para Nintendo Switch e Switch 2, ambientado na cidade de Lumiose, na região de Kalos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Legends Z-A, as batalhas abandonam o tradicional sistema de turnos da série. Como elas passam a acontecer?",
    "resposta": "Em tempo real",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Z-A"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Z-A",
        "situacao": "ok",
        "texto": "Pokémon Legends: Z-A is a 2025 action role-playing game developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch and Nintendo Switch 2. Part of the ninth generation of Pokémon video games, it is a sequel to the sixth-generation titles Pokémon X and Y (2013) and the second entry in the Pokémon Legends sub-series, following Pokémon Legends: Arceus (2022).\n[…]\nAs opposed to previous Pokémon games which featured turn-based combat, Legends: Z-A uses a real-time combat system that takes into account the positioning of the player character, their Pokémon, and the timing of used moves, and allows Pokémon to move around and dodge attacks while in a battle. During Pokémon battles, the player can collect Mega Energy in order to temporarily Mega Evolve their current Pokémon.\n[…]\nDuring the course of the story, the Legendary Pokémon Zygarde takes an interest in the player character, as they take down Rogue Mega Pokemon, a new, mysterious phenomenon within Lumiose City where wild Pokémon spontaneously Mega Evolve and go berserk. One of the player character's goals is to subdue these Rogue Mega Evolved Pokémon in the form of real-time boss battles similar to the Noble Pokémon battles within the prior title, Pokémon Legends: Arceus.\n[…]\nThis version of Legends 2 would have been released in two versions, referred to as Pokémon Legends: Ho-Oh and Pokémon Legends: Lugia, and they were to be released in 2024 as a celebration of the 25th anniversary of Gold and Silver. These ideas were scrapped in favor of a modern Kalos setting. The leak also contained information regarding the Mega Dimension DLC, reporting that 16 Pokémon would receive Mega forms.\n[…]\nOther parts of the Freakleak pertained to information about unannounced future titles that plan to release up to 2030, including the mainline installments for the tenth generation and a 3rd Legends game."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Legends%3A_Z-A",
        "situacao": "ok",
        "texto": "Pokémon Legends: Z-A é um jogo eletrônico de RPG de ação desenvolvido pela Game Freak e publicado pela Nintendo e The Pokémon Company para Nintendo Switch e Nintendo Switch 2. Parte da nona geração de jogos eletrônicos de Pokémon, é uma sequência dos títulos da sexta geração Pokémon X e Y (2013) e o segundo jogo da sub-série Pokémon Legends, seguindo Pokémon Legends: Arceus (2022). O jogo se passa\n[…]\nAo contrário dos jogos Pokémon anteriores, que apresentavam combate por turnos, Legends: Z-A utiliza um sistema de combate em tempo real que leva em consideração o posicionamento do personagem do jogador, seus Pokémon e o momento em que os movimentos são usados, permitindo que os Pokémon se movam e desviem de ataques durante a batalha. Durante as batalhas Pokémon, o jogador pode coletar Mega Energia para Mega Evoluir temporariamente seu Pokémon atual.\n[…]\nO jogo também conta com um modo multijogador chamado Battle Club, onde até 4 jogadores podem participar de Batalhas Link para derrotar o maior número de Pokémon em um determinado período de tempo, ou Ranked Battles, onde os jogadores batalham diretamente entre si por pontos de classificação e ganham Mega Pedras exclusivas ao atingirem certas posições. A personalização de personagens também retorna com opções aprimoradas.\n[…]\nHá também um novo e misterioso fenômeno na Cidade de Lumiose, onde Pokémon selvagens Mega Evoluem espontaneamente e ficam descontrolados. Um dos objetivos do jogador é subjugar esses Pokémon Mega Evoluções rebeldes em batalhas contra chefes em tempo real, semelhantes às batalhas contra Pokémon Nobres do jogo anterior, Pokémon Legends: Arceus.\n[…]\nJunto com as revelações do jogo base, uma DLC paga também foi anunciado: Pokémon Legends: Z-A – Mega Dimension. A DLC será focada no Pokémon Mítico Hoopa e apresenta a estreia de duas formas Mega de Raichu. A DLC foi lançada em 10 de dezembro de 2025.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Detetive Pikachu (filme)",
      "descricao": "Filme de 2019 baseado na franquia Pokémon, em que um Pikachu falante investiga um mistério."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na versão original do filme Detetive Pikachu, de 2019, qual ator canadense dá voz ao Pikachu falante de boné?",
    "resposta": "Ryan Reynolds",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Detective_Pikachu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Detective_Pikachu",
        "situacao": "ok",
        "texto": "Pokémon Detective Pikachu is a 2019 urban fantasy mystery film and the first live-action film based on the Pokémon franchise. It is loosely based on the 2016 video game Detective Pikachu. Directed by Rob Letterman, who co-wrote it with Dan Hernandez, Benji Samit, and Derek Connolly, the film stars Ryan Reynolds as the voice and motion capture of Pikachu, with Justice Smith, Kathryn Newton, Suki Wa\n[…]\nRyan Reynolds as:\n[…]\nIn November 2017, Justice Smith was cast in the lead human role, with Kathryn Newton added to costar after an intense session of reading and testing actresses opposite Smith. Newton beat out Natalia Dyer, Haley Lu Richardson, and Katherine Langford for the role. In December 2017, Ryan Reynolds was cast in the title role, portrayed via motion-capture and voice over. Other actors considered for the role of Pikachu were Danny DeVito, Dwayne Johnson, Mark Wahlberg and Hugh Jackman.\n[…]\nSome additional temporary vocals for Pikachu were filled in by Jon Bailey. However, all of this temporary dialogue was dubbed over by Ryan Reynolds. Principal photography concluded on May 1, 2018. Some filming took place at Shepperton Studios, Warner Bros. Studios, Leavesden, and Minley Woods in Hampshire, rural areas of Colorado, just outside Denver and Colorado Springs; and Scotland. Filming also took place on Anchor Wharf at the Chatham Historic Dockyard in Kent.\n[…]\nOn May 7, 2019, a Warner Bros. YouTube channel named \"Inspector Pikachu\" uploaded a video purporting to be a bootleg recording of the film. Spanning nearly 1.75 hours in length, the opening minute shows the production logo sequences followed by a scene from the film featuring Tim Goodman, before spending the remainder of its runtime depicting Pikachu performing aerobics to an upbeat, 1980s-inspired synthwave tune. Reynolds aided in the prank, posting on Twitter as if he was alerting Warner Bros.\n[…]\nList of Pokémon films"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Detetive_Pikachu",
        "situacao": "ok",
        "texto": "Pokémon Detective Pikachu (no Brasil e em Portugal, Pokémon: Detetive Pikachu) é um filme nipo-americano de fantasia produzido pela Legendary Entertainment​, The Pokémon Company, Tōhō​ e Warner Bros. Pictures, baseado na franquia “Pokémon” de Satoshi Tajiri, Ken Sugimori, Game Freak e Nintendo. O filme é dirigido por Rob Letterman e estrelado por Ryan Reynolds, Justice Smith, Kathryn Newton, Ken W\n[…]\nRyan Reynolds como:\n[…]\nRyoma Takeuchi em um cameo como um treinador Pokémon.\n[…]\nEm novembro de 2017, Justice Smith foi escalado para o papel de protagonista humano, com Kathryn Newton escalada para atuar depois de uma intensa sessão de leitura e teste de atrizes que apareceria ao lado de Smith. Newton disputou e ganhou o papel de Natalia Dyer, Haley Lu Richardson e Katherine Langford. Em dezembro de 2017, Ryan Reynolds foi escalado para o papel de protagonista Pokémon para ser retratado via captura de movimento.\n[…]\nGrande parte da interação no set e referência vocal para Pikachu foi preenchida por Jon Bailey. No entanto, todo o seu diálogo foi dublado por Ryan Reynolds. A filmagem principal foi concluída em 1 de maio de 2018. Algumas filmagens foram feitas no Shepperton Studios, no Warner Bros. Studios, no Leavesden, no Minley Woods em Hampshire, nas áreas rurais do Colorado; nos arredores de Denver, Colorado Springs e Escócia.\n[…]\nNo início de novembro de 2018, com o filme em fase de pós-produção, foi realizado um teste de tela (screen test) para uma versão incompleta do filme, que atraiu reações consideravelmente positivas do público-teste, com elogios ao roteiro, efeitos visuais, e ao desempenho de Reynolds.\n[…]\nAntes do lançamento do trailer, Ryan Reynolds postou um vídeo em seu canal no YouTube que apresenta uma entrevista dele e de sua esposa, Blake Lively, com o título \"Becoming Pikachu\" (Tornando-se Pikachu).\n[…]\nPokémon: Detetive Pikachu no IMDb\n[…]\nDetetive Pikachu (em português) no BurnBook",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Detetive Pikachu (jogo)",
      "descricao": "Jogo de aventura e investigação para Nintendo 3DS, lançado no Japão em 2016 e no Ocidente em 2018, que inspirou o filme de 2019."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O jogo Detetive Pikachu, para Nintendo 3DS, que inspirou o filme, foi desenvolvido por qual empresa, uma das três sócias da The Pokémon Company?",
    "resposta": "Creatures",
    "fonte": [
      "https://en.wikipedia.org/wiki/Detective_Pikachu_(video_game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Detective_Pikachu_(video_game)",
        "situacao": "ok",
        "texto": "Detective Pikachu (known in Japan as Great Detective Pikachu) is an adventure game developed by Creatures Inc. and published by Nintendo and The Pokémon Company for the Nintendo 3DS family of systems. The game is a spin-off of the Pokémon franchise, in which the player works with a talking Pikachu to solve various mysteries.\n[…]\nDetective Pikachu is an adventure game in which players control Tim Goodman as he works together with Detective Pikachu to solve various mysteries. This is accomplished by walking around scenes, finding potential clues, and speaking with people and Pokémon to uncover new information.\n[…]\nDevelopment on Detective Pikachu was handled by Creatures Inc. and began in mid-2013. After development finished on PokePark, the team thought about what kind of game to make next and set sights on creating an adventure game, which had not been done with Pokémon spin-off titles yet.\n[…]\nThe decision to include voice acting was made by Junichi Masuda, who served as the series' director and composer and wanted to have a talking Pikachu. In a 2018 interview, Masuda and Creatures Inc. revealed that the original intention for the anime was to have the Pokémon talk, but the show's producer OLM, Inc. was unable to come up with a concept that Game Freak were accepting of. In the game, Pikachu wears a deerstalker, taking inspiration from popular depictions of Sherlock Holmes.\n[…]\nWeeks after the film adaptation's release, the Pokémon Company announced in a press conference that a Detective Pikachu sequel is being developed for the Nintendo Switch, and that it would feature a different resolution from what the film version portrayed. In June 2023, the sequel's title was officially announced as Detective Pikachu Returns, and it released on October 6, 2023."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Detective_Pikachu",
        "situacao": "ok",
        "texto": "Detective Pikachu (名探偵ピカチュウ, Meitantei Pikachū) (conhecido no Japão como Great Detective Pikachu) é um jogo de aventura desenvolvido pela Creatures Inc., publicado pela The Pokémon Company e distribuído pela Nintendo para a família de sistemas Nintendo 3DS. O jogo é um spin-off da franquia Pokémon, em que o jogador trabalha com um Pikachu falante para resolver vários mistérios.\n[…]\nO desenvolvimento do Detective Pikachu foi gerenciado pela Creatures Inc. e começou em meados de 2013. O jogo foi revelado pela primeira vez em outubro de 2013 durante um episódio do programa de televisão japonês The Professionals como parte de um perfil no CEO da The Pokémon Company, Tsunekazu Ishihara. NHK, ao programa da rede de televisão, vazou algumas informações sobre o jogo em seu site antes da exibição do programa. As primeiras imagens do jogo mostram um Pikachu em azul.\n[…]\nMais tarde naquele ano, a Nintendo registrou uma marca registrada para o nome Great Detective Pikachu. Os desenvolvedores lançaram um trailer de estreia no final de janeiro de 2016, uma semana antes do lançamento do jogo.\n[…]\nA decisão de incluir a dublagem foi tomada por Junichi Masuda, que atuou como diretor e compositor da série e queria ter um Pikachu falante. Em uma entrevista de 2018, Masuda e Creatures Inc. revelaram que a intenção original do anime era fazer o Pokémon falar, mas o produtor do programa OLM, Inc. não conseguiu chegar a um conceito que a Game Freak aceitasse. No jogo, Pikachu usa um caçador de cervos, inspirando-se nas representações populares de Sherlock Holmes.\n[…]\nSemanas após o lançamento da adaptação para o cinema, a The Pokémon Company anunciou em uma entrevista coletiva que uma sequência do Detective Pikachu está sendo desenvolvida para o Nintendo Switch. A sequência terá uma resolução completamente diferente da que a versão cinematográfica retratou.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Pokémon Estampas Ilustradas",
      "descricao": "Card game colecionável oficial da franquia Pokémon, lançado no Japão em 1996."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "De 1999 a 2003, o card game Pokémon foi publicado nos Estados Unidos por qual empresa, a mesma de Magic: The Gathering?",
    "resposta": "Wizards of the Coast",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nThe Pokémon Trading Card Game was developed in Japan, based on the 1996 Pokémon Red, Blue, and Yellow Game Boy video game by Nintendo. It was first published in October 1996 by Media Factory in Japan. In the US, it was first published by Wizards of the Coast, towards the end of 1998 to capitalize on the US popularity of Pokémon.\n[…]\nOver the next five years, Wizards of the Coast published more than a dozen expansion sets for the game, allowing the company to sell millions of cards and earn more revenue from Pokémon than they had from Magic: The Gathering in its first 10 years. Hasbro bought Wizards of the Coast in September 1999 for $325 million based on the strength of the Pokémon license. In 2001, Nintendo created its affiliate Pokémon USA, Inc., so that it could recover the US licensing rights to the game.\n[…]\nThe reviewer from the online second volume of Pyramid in 1999 stated that \"Pokémon is the second most popular CCG in Japan (behind Magic: The Gathering), and it's no fluke. The game plays like a kinder, gentler version of Magic, with easier rules and graphics geared to the younger crowd.\" In the United States, Wizards of the Coast reported in early 1999 that it had sold 400,000 packs of Pokémon trading cards in less than six weeks of its release.\n[…]\nwas released in 1999, followed by its sequel Pokémon Play It! Version 2 in 2000.\n[…]\nVenters, Jillian (January 1999). \"Is that a monster in your pocket?\". The Duelist. No. 33. Wizards of the Coast. pp. 88–89."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nVocê pode também \"Mega Evoluir\" um Pokémon, mas você passa seu turno, a não ser que tenha ligado ao seu Pokémon o item Elo Espiritual de (Nome do Pokémon), para não passar o turno.\n[…]\nCada jogador deve ter um deck de 60 cartas com pelo menos um Pokémon Básico. Um embaralha o deck do outro e coloca seis cartas viradas para baixo. Essas são as \"cartas prêmio\". Depois, os decks são devolvidos aos donos e cada um pega uma mão de sete cartas. Se não houver Pokémon Básicos, este reembaralha o deck e pega mais uma mão de sete cartas. O outro jogador tem a opção de pegar mais uma carta por nova mão do adversário.\n[…]\nColocar um Pokémon Básico no banco.\n[…]\nUsar uma carta Ferramenta Pokémon. (Apenas uma vez)\n[…]\nLigar uma carta Energy a um de seus Pokémon. (Apenas uma vez)\n[…]\nEvoluir um Pokémon\n[…]\n«Site oficial de Pokémon» (em inglês)\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Pokémon Estampas Ilustradas",
      "descricao": "Card game colecionável oficial da franquia Pokémon, lançado no Japão em 1996."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Numa partida comum do card game Pokémon, cada jogador separa cartas de prêmio, e quem pega todas as suas vence. Quantas são essas cartas?",
    "resposta": "Seis",
    "distratores": [
      "Três",
      "Quatro",
      "Oito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\n\"Black Star Ishihara Signed GX Promo Card\"\n[…]\nEuropean countries can qualify for positions at the Pokémon Trading Card Game World Championships each year, through National Championships and European Rankings.\n[…]\nOn September 20, 2021, another Pokémon Trading Card Game-based video game was announced, titled Pokémon Trading Card Game Live. A closed beta of Pokémon Trading Card Game Live was released for Canadian players on February 22, 2022. Later, a global beta of Pokémon Trading Card Game Live was released on November 15, 2022 on Android, iOS, Microsoft Windows. The game is now also available on macOS.\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nOn February 27, 2024, another Pokémon Trading Card Game-based video game for Android and iOS was announced in the Pokémon Presents presentation  developed by Creatures (company) and DeNA titled Pokémon Trading Card Game Pocket. The game features entirely original digital cards not present in the physical card game featuring dynamic artwork, as well as the ability to look into the artwork of certain cards to see obscured elements. The gameplay utilizes streamlined battle and trading systems.\n[…]\nScrye Pokemon Price and Players Guide 2000"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nExistem 4 tipos de cartas Trainer: Normais; Estádio; Ferramentas Pokémon; e Suporte.\n[…]\nAs cartas estádio causam diversos efeitos, como impedir mais de cinco Pokémon no campo (como Ginásio Narrow), dar a chance de puxar várias cartas (como Speed Stadium) e muitos outros mais. O fato curioso dessas cartas é que quando essas deixaram de ser Trainer, não receberam mais tradução, ficando, somente, Stage.\n[…]\nCada jogador deve ter um deck de 60 cartas com pelo menos um Pokémon Básico. Um embaralha o deck do outro e coloca seis cartas viradas para baixo. Essas são as \"cartas prêmio\". Depois, os decks são devolvidos aos donos e cada um pega uma mão de sete cartas. Se não houver Pokémon Básicos, este reembaralha o deck e pega mais uma mão de sete cartas. O outro jogador tem a opção de pegar mais uma carta por nova mão do adversário.\n[…]\nEvoluir um Pokémon\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Base Set",
      "descricao": "Primeira coleção do card game Pokémon, lançada no Japão em 1996 e em inglês em 1999, famosa pelo Charizard holográfico."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que ilustrador japonês desenhou o Charizard holográfico do Base Set, a carta mais cobiçada da primeira coleção do card game Pokémon?",
    "resposta": "Mitsuhiro Arita",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mitsuhiro_Arita",
      "https://bulbapedia.bulbagarden.net/wiki/Base_Set_(TCG)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mitsuhiro_Arita",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Base_Set_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Pokémon Adventures",
      "descricao": "Mangá japonês baseado nos jogos Pokémon, publicado desde 1997, com protagonistas que levam os nomes das versões dos jogos, como Red e Blue."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Quem escreve o mangá Pokémon Adventures, publicado desde 1997 e famoso por seguir de perto a história dos jogos?",
    "resposta": "Hidenori Kusaka",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Adventures"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Adventures",
        "situacao": "ok",
        "texto": "Pokémon Adventures (Japanese: ポケットモンスター SPECIAL, Hepburn: Poketto Monsutā Supesharu; lit. Pocket Monsters Special, commonly Pokespe (ポケスペ / ポケSP) for short) is a Japanese manga series based on the Pokémon media franchise. The series is written by Hidenori Kusaka. Mato was the illustrator for the first nine volumes. When Mato became ill and was unable to continue illustrating the series, Satoshi Ya\n[…]\nSeries writer Hidenori Kusaka was offered to make a Pokémon manga by Nintendo. Having been a fan of manga ever since he was a child, Kusaka quickly accepted. The serialization of the manga began in Shogakukan's 4th grade Elementary School magazine in March 1997, and since then, it has been serialized through other Shogakukan's magazines and platforms, including CoroCoro Ichiban!, Sunday Webry and Pokémon Fan.\n[…]\nWhen writing the series, Kusaka always tries to add elements of amazements with the idea that the readers would feel they are actually playing a video game. Some parts from the story are based on Kusaka's thoughts of the Pokémon video games, which includes weapon designs and the areas where wild Pokémon live. His main focus in manga is to create Pokémon that look attractive so that readers would appreciate them more.\n[…]\nDuring publication of the series, artist Mato fell sick leaving Kusaka to either cancel the series or select another artist. He decided to continue and chose Satoshi Yamamoto as Mato's replacement. Yamamoto felt pressure during his debut as older fans criticized his art in comparison to Mato. When he started drawing he had little knowledge about Pokémon, but still he was focused in the drawing for the new protagonist, Crystal.\n[…]\nPocket Monsters Special Japanese website (in Japanese)\n[…]\nOfficial Pokémon Adventures website of Viz Media\n[…]\nPokemon Adventures result at Shogakukan Asia\n[…]\nPokémon Adventures (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pokemon_Special",
        "situacao": "ok",
        "texto": "Pokémon Special (ポケットモンスターSPECIAL, Poketto Monsutā Supesharu), também conhecido como Pokémon Adventures, conhecido no Brasil como Pokémon, é um mangá baseado nos jogos eletrônicos de Pokémon. É o mangá de Pokémon mais famoso já criado, com mais de 150 milhões de unidades vendidas no mundo inteiro.\n[…]\nSatoshi Tajiri uma vez afirmou que a série Pocket Monsters Special é a mais próxima do que imaginou que o mundo Pokémon fosse: \"Esta é o mangá que mais se parece com o mundo que eu estava tentando transmitir\" (僕が伝えたかった世界に最も近い漫画です, Boku ga tsutaetakatta sekai ni mottomo chikai manga desu.)\n[…]\nAs séries são escritas por Hidenori Kusaka e ilustradas por Mato nos primeiros 9 volumes. Satoshi Yamamoto substituiu Mato (que estava doente no momento) do volume 10 e não parou até agora.\n[…]\nO mangá foi publicado na editora Shogakukan, através da revista CoroCoro Ichiban! em março de 1997 no Japão. O mangá foi traduzido para o inglês nos Estados Unidos pela VIZ Media, lançado como Pokémon Adventures, mas a publicação terminou em 2001 com o volume 7. Mais tarde, o VIZ publicou a primeiro volume publicado em 2 de junho de 2009 e o segundo volume em Agosto, e continua até agora.\n[…]\nEm 3 de maio de 2014, a Panini Comics anunciou o lançamento de Pokémon Special no Brasil, com o Capítulo Black e White, sendo lançado em 22 de setembro do mesmo ano. A Panini disse que se o mangá fizesse bastante sucesso, ela iria continuar a publicar os outros arcos. Em 2 de março de 2016, foi anunciado a publicação do Capítulo Red, Green & Blue, em comemoração ao aniversário de 20 anos da franquia, sendo lançado em 10 de outubro do mesmo ano.\n[…]\nPocket Monsters Special Website japonês (em japonês)\n[…]\nWebsite oficial de Pokémon Adventures na Viz Media\n[…]\nPokemon Special (mangá) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Pokémon Adventures",
      "descricao": "Mangá japonês baseado nos jogos Pokémon, publicado desde 1997, com protagonistas que levam os nomes das versões dos jogos, como Red e Blue."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Japão, o mangá Pokémon Adventures tem um título formado por Pocket Monsters e mais uma palavra em inglês. Que palavra é essa?",
    "resposta": "Special",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Adventures"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Adventures",
        "situacao": "ok",
        "texto": "Pokémon Adventures (Japanese: ポケットモンスター SPECIAL, Hepburn: Poketto Monsutā Supesharu; lit. Pocket Monsters Special, commonly Pokespe (ポケスペ / ポケSP) for short) is a Japanese manga series based on the Pokémon media franchise. The series is written by Hidenori Kusaka. Mato was the illustrator for the first nine volumes. When Mato became ill and was unable to continue illustrating the series, Satoshi Ya\n[…]\nYellow – The protagonist in the Yellow chapter. She is happy-go-lucky, gentle, and kind-hearted. Yellow has a rare psychic power to heal Pokémon (The Healer), a trait seen only in special individuals from the Viridian Forest area. She disguised herself as a boy on a mission to save Red. She also has many other psychic abilities, such as telekinesis and mind reading through her Will of the Forest ability. She has narcolepsy, which is often triggered by use of her abilities.\n[…]\nGold – The male protagonist in the Gold, Silver & Crystal and HeartGold & SoulSilver chapters. He is the good-hearted, but somewhat loud-mouthed, protagonist of the Gold & Silver saga. He is very rash, even more so than Red. He specializes in hatching Pokémon (The Breeder).\n[…]\nSilver – The secondary male protagonist in the Gold, Silver & Crystal and HeartGold & SoulSilver chapters. Gold's blunt yet kind rival, the son of Team Rocket leader Giovanni. Was a Masked Child until he escaped alongside his sister figure, Green. He had the starter Pokémon Totodile (stolen, like Green's Squirtle), now a Feraligatr. He specializes in trading Pokémon (The Exchanger). His team consists of Feraligatr, Weavile, Kingdra, Honchkrow, and the red Gyarados from the Lake of Rage.\n[…]\nPocket Monsters Special Japanese website (in Japanese)\n[…]\nOfficial Pokémon Adventures website of Viz Media\n[…]\nPokemon Adventures result at Shogakukan Asia\n[…]\nPokémon Adventures (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pokemon_Special",
        "situacao": "ok",
        "texto": "Pokémon Special (ポケットモンスターSPECIAL, Poketto Monsutā Supesharu), também conhecido como Pokémon Adventures, conhecido no Brasil como Pokémon, é um mangá baseado nos jogos eletrônicos de Pokémon. É o mangá de Pokémon mais famoso já criado, com mais de 150 milhões de unidades vendidas no mundo inteiro.\n[…]\nSatoshi Tajiri uma vez afirmou que a série Pocket Monsters Special é a mais próxima do que imaginou que o mundo Pokémon fosse: \"Esta é o mangá que mais se parece com o mundo que eu estava tentando transmitir\" (僕が伝えたかった世界に最も近い漫画です, Boku ga tsutaetakatta sekai ni mottomo chikai manga desu.)\n[…]\nScarlet - A protagonista feminina do capítulo Scarlet & Violet. Nome completo conhecido como Scarlet Koito. Uma caçadora lobo solitária de tesouros. Por alguma razão, ela está procurando por Pokémon conhecidos como Tesouros da Ruína.\n[…]\nO mangá foi publicado na editora Shogakukan, através da revista CoroCoro Ichiban! em março de 1997 no Japão. O mangá foi traduzido para o inglês nos Estados Unidos pela VIZ Media, lançado como Pokémon Adventures, mas a publicação terminou em 2001 com o volume 7. Mais tarde, o VIZ publicou a primeiro volume publicado em 2 de junho de 2009 e o segundo volume em Agosto, e continua até agora.\n[…]\nNo sudeste da Ásia principalmente Singapura, a editora Chuang Yi e traduz Pokémon Special para o inglês e continuou a traduzir novos volumes até o volume 41. A empresa, no entanto, entrou em liquidação voluntária no início de 2014 e a tradução foi interrompida. Agora Shogakukan Asia publica com a série na Singapura. Jilin Fine Arts, com colaboração à VIZ Media Shanghai Branch, que traduziu o mangá em chinês.\n[…]\nPocket Monsters Special Website japonês (em japonês)\n[…]\nWebsite oficial de Pokémon Adventures na Viz Media\n[…]\nPokemon Special (mangá) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Red (Pokémon Adventures)",
      "descricao": "Protagonista do primeiro arco do mangá Pokémon Adventures, treinador de Pallet inspirado no herói dos jogos Red e Blue."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No mangá Pokémon Adventures, o primeiro parceiro do protagonista Red não é um inicial dos jogos, mas um girino de barriga em espiral. Que pokémon é esse?",
    "resposta": "Poliwag",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Red_(Adventures)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Red_(Adventures)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Meltan",
      "descricao": "Pokémon do tipo Aço, número 808 da Pokédex Nacional."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O mítico Meltan, um pequeno pokémon de metal líquido, apareceu pela primeira vez em 2018 em qual jogo, antes de chegar à série principal?",
    "resposta": "Pokémon Go",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Meltan_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Meltan_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go",
        "situacao": "ok",
        "texto": "Pokémon Go (stylized as Pokémon GO) is a 2016 augmented reality (AR) mobile game originally developed and published by Niantic and since 2025 by Scopely Explore, in partnership with Nintendo and the Pokémon Company, for iOS and Android devices. The game uses GPS to locate, capture, train, and battle Pokémon. It is free-to-play, featuring a freemium model that includes in-app purchases for addition\n[…]\nA new Pokémon species, Meltan, debuted in Pokémon Go in September. Plans to introduce Pokémon from Diamond and Pearl were announced in October 2018, with Adventure Sync—a feature that records walking data in the background—revealed on October 25. Research tasks for Bug-type Pokémon, offering players a chance to catch Shedinja, were announced on October 26.\n[…]\nIn a January 2019 interview with Business Insider, John Hanke stated that in 2018, Pokémon Go became the game Niantic had originally envisioned.\n[…]\nApptopia reported that, by September 2018, the game had grossed over $2 billion from in-app purchases; the top five countries where it has received the most revenue are Japan ($670 million), the United States ($550 million), Germany ($88 million), the United Kingdom ($86 million), and Australia ($52 million). It was the fourth highest-grossing game of 2018, with $1.3 billion, and in 2019 alone, Pokémon Go earned $1.4 billion, according to Superdata Research, a division of Nielsen Media Research.\n[…]\nIn January 2018, Niantic announced a monthly community event called Community Day, which aims to get players to meet up in their local areas. During a multi-hour period, players can encounter more frequent wild spawns of a particular Pokémon, an exclusive move for that Pokémon (or its evolution), an increased probability to obtain the shiny form of that Pokémon, and bonuses such as extra Stardust or XP.\n[…]\nMedia related to Pokémon Go at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_GO",
        "situacao": "ok",
        "texto": "Pokémon GO é um jogo eletrônico free-to-play de realidade aumentada voltado para smartphones. O jogo é desenvolvido e publicado pela Niantic, Inc., em colaboração com a Nintendo e a The Pokémon Company para as plataformas iOS e Android. O jogo foi inicialmente lançado em julho de 2016 para alguns países, eventualmente foi expandindo para o resto do mundo.\n[…]\nEsta não é a primeira vez que a Nintendo junta a franquia Pokémon com a realidade aumentada. No jogo Pokémon Dream Radar, lançado para Nintendo 3DS, o console era utilizado para tentar capturar os Pokémon que apareciam ao redor olhando pela tela do 3DS. Os Pokémon capturados podiam ser transferido para os jogos Pokémon Black 2 e White 2.\n[…]\nEm 10 de dezembro de 2015, Ishihara dedicou seu discurso no anúncio do jogo a Iwata, que morreu dois meses antes. A trilha sonora do jogo foi escrita pelo compositor de longa data da série Pokémon, Junichi Masuda, que também contribuiu com algum design do jogo. Entre os designers visuais está Dennis Hwang, que já havia trabalhado na Google, e criou o logotipo do Gmail.\n[…]\nParques nacionais nos Estados Unidos viram um afluxo de visitantes incomum, devido ao jogo, com \"centenas ou milhares\" de pessoas que visitam o National Mall e Memorial Park em Washington, D.C. no fim de semana seguinte Pokémon Go foi liberado no país. pequenos museus com PokéStops colocados em exposições também relataram aumento da frequência, como o Museu McNay Art, em San Antonio, Texas, e o Museu Morikami e Jardim Japonês em Boca Raton, Flórida.\n[…]\nA música tema de Pokémon, do álbum Pokémon 2.B.A. Master da série animada viu um aumento de 630% de ouvintes na plataforma de streaming de música Spotify durante o mês de lançamento do jogo. Enquanto isso, serviços de streaming como Hulu têm experimentado um aumento de audiência da série e filmes Pokémon.\n[…]\n«Pokémon GO». para App Store.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Meltan",
      "descricao": "Pokémon do tipo Aço, número 808 da Pokédex Nacional."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do mítico Meltan junta melt, derreter em inglês, com qual palavra inglesa, que nomeia a peça de metal que forma a cabeça dele?",
    "resposta": "Nut (porca)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Meltan_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Meltan_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Professor Willow",
      "descricao": "Professor pokémon de Pokémon Go, que orienta o jogador e recebe os pokémon transferidos em troca de doces."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Como os professores dos jogos principais, o Professor Willow, de Pokémon Go, tem nome de árvore. Que árvore é essa?",
    "resposta": "Salgueiro",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Willow"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Professor_Willow",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Equipes de Pokémon Go",
      "descricao": "As três equipes, Mystic, Valor e Instinct, entre as quais os jogadores de Pokémon Go se dividem para disputar ginásios."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Pokémon Go, cada equipe tem uma ave lendária como símbolo. Qual ave representa a equipe Mystic, a azul?",
    "resposta": "Articuno",
    "distratores": [
      "Zapdos",
      "Moltres",
      "Lugia"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Mystic",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Mystic",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go",
        "situacao": "ok",
        "texto": "Pokémon Go (stylized as Pokémon GO) is a 2016 augmented reality (AR) mobile game originally developed and published by Niantic and since 2025 by Scopely Explore, in partnership with Nintendo and the Pokémon Company, for iOS and Android devices. The game uses GPS to locate, capture, train, and battle Pokémon. It is free-to-play, featuring a freemium model that includes in-app purchases for addition\n[…]\nPlayers earn experience points (XP) by participating in various in-game activities. As they accumulate XP, they advance through levels progressively, unlocking new features. Notably, at level five, players gain access to Pokémon Gyms, where they can engage in battles. They must choose to join one of three color-coded teams: Team Valor (red), Team Mystic (blue), or Team Instinct (yellow). These teams compete for control over Gyms within the Pokémon Go world.\n[…]\nIn July 2017, Raid Battles were introduced, allowing players to team up and battle an over-leveled Pokémon in a Gym. If defeated, players can catch a regular version of that Pokémon. Raid difficulties range from Level 1 to Level 5, with Level 5 being exclusive to Legendary Pokémon. The first Legendary Pokémon, Articuno and Lugia, were released on July 22, 2017, followed by Moltres and Zapdos.\n[…]\nAt the 2016 San Diego Comic-Con, John Hanke, the founder of Niantic, unveiled the three team leaders: Candela (Team Valor), Blanche (Team Mystic), and Spark (Team Instinct). Hanke mentioned that only about 10 percent of the game's ideas had been implemented. Future updates, such as the trading feature, additional Pokémon, Pokémon Centers at PokéStops, fixing the \"three-step glitch\", and easier training, were confirmed. Niantic committed to supporting the game for \"years to come\".\n[…]\nList of Pokémon, the list of all of the original Pokémon by order\n[…]\nMedia related to Pokémon Go at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_GO",
        "situacao": "ok",
        "texto": "Pokémon GO é um jogo eletrônico free-to-play de realidade aumentada voltado para smartphones. O jogo é desenvolvido e publicado pela Niantic, Inc., em colaboração com a Nintendo e a The Pokémon Company para as plataformas iOS e Android. O jogo foi inicialmente lançado em julho de 2016 para alguns países, eventualmente foi expandindo para o resto do mundo.\n[…]\nAssim como nos jogos oficiais da série, também se pode encontrar ginásios. Ao encontrar um ginásio, o jogador é obrigado a escolher um time: Time Valor (que representa o Pokémon Moltres), Time Mystic (que representa o Pokémon Articuno) ou Time Instinct (que representa o Pokémon Zapdos). Se este ginásio for do mesmo time que o seu, você pode designar um Pokémon ao ginásio para defende-lo.\n[…]\nEm 24 de julho, John Hanke revelou as aparências dos três líderes de equipe na Comic-Con 2016: Candela (Team Valor), Blanche (Team Mystic), e Spark (Team Instinct). Hanke comentou que aproximadamente 10% das ideias para o jogo foram implementadas. Atualizações futuras, incluindo novos Pokémon e trocas entre os jogadores, bem como a implementação de Pokémon Centers em PokéStops, correções na função de busca de Pokémon nos arredores e treinamento mais fácil foram também confirmados.\n[…]\nAté 22 de julho, a Nintendo ganhou ¥1800000000000 (US$17,6 bilhões) em valor de mercado, desde o lançamento do jogo. No entanto, após a Nintendo esclarecer que a empresa não produziu Pokémon GO, nem teve ganhos financeiros tangíveis a partir dele, suas ações caíram 18%, registrando uma perda de ¥708.000.000.000 (US$6,7 bilhões) em valor de mercado, em 25 de julho.\n[…]\nCom o lançamento dos pokémon lendários Lugia e Articuno, o jogo fez 5.8 milhões de dólares apenas no dia 23 de julho de 2017, sendo o jogo mais lucrativo nesse dia em 23 países, incluindo EUA, Canadá e Reino Unido.\n[…]\nPokémon GO no X\n[…]\n«Pokémon GO». para App Store.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Ditto",
      "descricao": "Pokémon do tipo Normal, número 132 da Pokédex Nacional."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Go, por que o jogador só descobre que encontrou um Ditto depois de capturá-lo?",
    "resposta": "Ele aparece disfarçado de outro pokémon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ditto_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ditto_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Hey You, Pikachu!",
      "descricao": "Jogo de 1998 para Nintendo 64 em que o jogador convive com um Pikachu e conversa com ele por comandos de voz."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No jogo Hey You, Pikachu!, de Nintendo 64, o jogador dá ordens e conversa com o Pikachu. Que acessório vinha com o jogo para isso?",
    "resposta": "Um microfone",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hey_You,_Pikachu!"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hey_You,_Pikachu!",
        "situacao": "ok",
        "texto": "Hey You, Pikachu! is a virtual pet video game developed by Ambrella and published by Nintendo for the Nintendo 64. A spin-off in the Pokémon franchise, it was released in Japan on December 12, 1998, and in North America on November 6, 2000. The player is asked to help Professor Oak test the PokéHelper, a device that lets humans communicate with Pokémon. The game is set in the Kanto region between \n[…]\nThe player is able to communicate with a 256-word database through the Voice Recognition Unit (VRU), a Nintendo 64 hardware accessory that, when paired with a microphone, can comprehend and analyze human speech. Along with speaking with Pikachu, the VRU allows the player to move around and gather items.\n[…]\nHey You, Pikachu! is one of only two games to utilize the VRU, with the other being Densha de Go! 64. The game had a mixed reception from critics. Though no direct sequels have been made, the virtual pet game Pokémon Channel, first released for the GameCube in 2003, resembles Hey You, Pikachu! and shares similar gameplay, with the exception of the microphone peripheral.\n[…]\nHey You, Pikachu! was first demonstrated at Nintendo Space World '97. Originally, the game was to be titled Pikachu VRS in North America, but it was changed for marketability reasons.\n[…]\nA spiritual sequel to Hey You, Pikachu!, Pokémon Channel, was first released on the GameCube in 2003 and was also developed by Ambrella. Another spiritual sequel, PokéPark Wii: Pikachu's Adventure, was first released on the Wii in 2009, which in turn had its direct sequel, PokéPark 2: Wonders Beyond, first released in 2011.\n[…]\nDensha de Go! 64, the other game that uses the VRU.\n[…]\nOfficial Nintendo Japan Hey You, Pikachu! site\n[…]\nHey You, Pikachu! at MobyGames"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hey_You%2C_Pikachu%21",
        "situacao": "ok",
        "texto": "Hey You, Pikachu! (ピカチュウげんきでちゅう, Pikachū Genki Dechū) é um jogo da série Pokémon para Nintendo 64. É o primeiro jogo da história dos video games a usar o reconhecimento de voz através do Voice Recognition Unit (VRU; lit. \"Unidade de Reconhecimento de Voz\"), sendo um dos dois únicos jogos para N64 que utilizam esse recurso. O jogador tinha como parceiro um Pikachu que recebia ordens pelo microfone \n[…]\nO jogo começa com o Prof. Carvalho dando ao jogador um item que permite conversar com os Pokémon. O jogador conhece um Pikachu selvagem e se torna amigo dele. A confiança dele deve ser conquistada para poder ir e viver na casa do jogador. Há três áreas no jogo para se explorar, chamadas Pikachu's Daring Days, Pikachu's Discovery Days e Pikachu's Play Days. Em cada área, o jogador pode conquistar Pika Points, para comprar coisas no Abra's Shop.\n[…]\nAo completar 365 dias de jogo, o Prof. Carvalho diz que é necessário soltar o Pikachu, já que ele é um Pokémon selvagem. Assim, o jogador vai até a floresta em que encontrou o Pikachu e o solta. Para isso, é necessário falar \"Good-bye\" para o Pikachu vária vezes, para que ele entenda que ele não pode viver mais com o jogador. Ele fica triste e vai embora.\n[…]\nEm referência a rivalidade da Nintendo com a Sony, um easter egg foi colocado no jogo: quando o jogador fala \"PlayStation\" no microfone o Pikachu fica irritado.\n[…]\nBall - É a bola de praia de Pikachu. Ele dá ao jogador no começo do jogo.\n[…]\nHey You, Pikachu! recebeu diferentes críticas. O site UGO colocou o jogo na lista de \"50 jogos que deveriam estar nos 3DS\". Fran Mirabella do portal IGN disse que achou o jogo \"extremamente chato\", apesar de ter afirmado que \"é bom para [dar] algumas risadas por cerca de 10 minutos\". Johnny Liu do Game Revolution comentou que o \"reconhecimento de fala é muito limitado para um jogo que depende tanto dele\".\n[…]\nDensha de Go! 64, o outro jogo que usa o recurso do VRU",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Pokémon Masters",
      "descricao": "Jogo para celular da DeNA, lançado em 2019, em que treinadores famosos da franquia batalham ao lado de seus pokémon."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Masters, treinadores famosos de todas as regiões se reúnem para um grande torneio numa ilha artificial. Como ela se chama?",
    "resposta": "Pasio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Masters_EX"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Masters_EX",
        "situacao": "ok",
        "texto": "Pokémon Masters EX (originally named Pokémon Masters) is a free-to-play gacha mobile game for Android and iOS developed and published by DeNA. It is based on the Pokémon media franchise. Set on the artificial island of Pasio, the game allows players to battle and recruit various prominent Pokémon Trainers from the main series games and anime. Originally named Pokémon Masters and released in August\n[…]\nThere is a Pokémon League tournament of 3-on-3 battles being held on Pasio Island called the Pokémon Masters League. The main goal is to become its Champion. To enter the Pokémon Masters League, players must collect at least five Badges by defeating the PML Leaders located in Pasio. When recruiting most sync pairs, the player can unlock a sync pair story. Players can also participate in limited-time events which are regularly added and updated.\n[…]\nPokémon Masters was first announced by The Pokémon Company on May 28, 2019, alongside some other Pokémon games. It represents the first collaboration between the company and mobile game developer DeNA, it had been released for Android and iOS. The concept of the game came from series artist and designer Ken Sugimori who proposed the idea of having all past characters from the main series together in one game.\n[…]\nIn commemoration of the game's first anniversary, Pokémon Masters was updated with new features as Pokémon Masters EX on August 28, 2020.\n[…]\nPokémon Masters EX received \"mixed or average reviews\" according to the review aggregator Metacritic.\n[…]\nWithin four days of its global release, Pokémon Masters has been downloaded 10 million times and recorded $10 million in revenue. Within its first week, the revenue figures were increased to $26 million. In its first month, the game generated $33 million in revenue and $75 million within its first year."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Masters_EX",
        "situacao": "ok",
        "texto": "Pokémon Masters EX (ポ ケ モ ン マ ス タ ー ズ EX, Pocket Monsters Masutāzu EX) (originalmente chamado de Pokémon Masters) é um jogo móvel gratuito para Android e iOS desenvolvido e publicado pela DeNA. É baseado na franquia de mídia Pokémon. Situado na ilha artificial de Pasio, o jogo permite aos jogadores batalhar e recrutar vários Pokémon Treinadores proeminentes nos jogos da série principal.\n[…]\nHá um torneio de batalhas 3 contra 3 em Pasio Island chamado Pokémon Masters League. O objetivo principal é se tornar seu Campeão. Para entrar na Pokémon Masters League, os jogadores devem coletar pelo menos cinco emblemas ao derrotar os líderes PML localizados em Pasio. Ao recrutar um par de sincronização, o jogador pode desbloquear uma história de par de sincronização. Os jogadores também podem participar de eventos por tempo limitado que são adicionados e atualizados regularmente.\n[…]\nUm par de sincronização é um par que consiste em um Pokémon Treinador que apareceu anteriormente nos jogos portáteis principais ou no anime (muitos dos quais, semelhantes a Super Smash Bros., têm seus designs retirados de suas aparições mais recentes) e um Pokémon (novamente, geralmente aquele que está melhor associado a esse personagem, ou seja, Misty de Starmie) em Pokémon Masters.\n[…]\nUma versão prévia do jogo foi lançada em Cingapura em 25 de julho de 2019 e no Canadá em 6 de agosto de 2019. O jogo foi lançado mundialmente em 29 de agosto de 2019 para telefones iOS e Android. Ao contrário da maioria dos outros jogos Pokémon, Pokémon Masters não foi lançado na Bélgica e na Holanda, provavelmente devido à proibição das caixas de saque.\n[…]\nEm comemoração ao primeiro aniversário do jogo, Pokémon Masters foi atualizado com novos recursos como Pokémon Masters EX em 25 de agosto de 2020.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Pokémon Conquest",
      "descricao": "Jogo de estratégia de 2012 para Nintendo DS, que leva os pokémon ao Japão feudal dos senhores da guerra."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Pokémon Conquest, de 2012, para Nintendo DS, mistura os pokémon com qual série de estratégia da Koei, ambientada no Japão feudal?",
    "resposta": "Nobunaga's Ambition",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Conquest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Conquest",
        "situacao": "ok",
        "texto": "Pokémon Conquest, known in Japan as Pokémon + Nobunaga's Ambition (ポケモン+ノブナガの野望, Pokemon Purasu Nobunaga no Yabō), is a 2012 tactical role-playing video game developed by Tecmo Koei and published by The Pokémon Company and Nintendo for the Nintendo DS. The game is a crossover between the Pokémon and Nobunaga's Ambition video game series. The game was released in Japan on March 17, 2012 and was rel\n[…]\nDevelopment of Pokémon Conquest began as a result of a mutual interest between the creators of Pokémon and Nobunaga's Ambition, with The Pokémon Company president Tsunekazu Ishihara particularly enjoying the latter. He asked the Pokémon team about the idea of combining the two series, and asked Hisashi Koinuma to help create the project.\n[…]\nTecmo Koei, the owner of Nobunaga's Ambition, was involved in helping design the game, including programming, art, graphics, and sound, while the design documents and concepts were a collaborative effort. To Koinuma, the most difficult part of the game was balancing the challenge to ensure that it would be more likely to appeal to Pokémon fans. The game was developed by Osamu Mieda.\n[…]\nThe game was first revealed at the Shueisha's \"Jump Festa\" anime and manga event on December 17, 2011. Nintendo and Tecmo Koei announced the game during the event and announced its 2012 release. On April 4, 2012, it was announced on Pokemon.com that Pokémon + Nobunaga's Ambition would be released in the United States on June 18, 2012, as Pokémon Conquest.\n[…]\nThis article incorporates material derived from the \"Pokémon Conquest\" article on the koei wiki at Fandom (formerly Wikia) and is licensed under the Creative Commons Attribution-Share Alike 3.0 License (18 December 2011)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Conquest",
        "situacao": "ok",
        "texto": "Pokémon Conquest, conhecido no Japão como Pokémon + Nobunaga's Ambition (ポケモン＋ノブナガの野望, Pokemon Purasu Nobunaga no Yabō) é um RPG de estratégia desenvolvido pela Tecmo Koei e publicado pela Nintendo para Nintendo DS. Este jogo é um crossover entre Pokémon e Nobunaga's Ambition. O jogo foi lançado no Japão em 17 de março de 2012, na América do Norte em 18 de junho de 2012, e na Europa (apenas para p\n[…]\nDepois de derrotar Nobunaga e concluir a história principal, o jogador pode jogar em 32 missões especiais, cada uma conta com um dos Warlords e com diferentes objetivos (como dominar uma parte de Ransei ou toda a região). Eles apresentam Inteligência Artificial (como as nações inimigas atacando suas nações com mais frequencia), a habilidade de melhorar os locais dentro da região através de um banco para encontrar mais Pokémon ou obter itens melhores e a habilidade de evoluir o resto dos Warlords.\n[…]\nNobunaga: Warlord de Dragnor (tipo Dragão) e irmão mais velho de Oichi. Tem como parceiros, Hydreigon, Zekrom, e Rayquaza negro. Na história principal, ele é visto como uma força destrutiva, empenhado em conquistar toda Ransei para receber o poder do Pokémon legendário que a criou.\n[…]\nPokémon + Nobunaga's Ambition foi revelado pela primeira vez em uma festa da Shueisha, em um evento de anime e manga que aconteceu em 17 de dezembro de 2011. Nintendo e Tecmo Koei anunciaram o jogo durante esse evento e revelaram que seria lançado em 2012. The Pokemon Company anunciou um evento de live streaming, que foi usado para revelar informações àos consumidores do Japão.[carece de fontes]?\n[…]\nParte dos desenhos dos personagens e dos humanos foi inspirado em Samurai Warriors 3, com a ajuda de Ken Sugimori.[carece de fontes]? Em 4 de abril de 2012, foi anunciado no site Pokemon.com que Pokémon + Nobunaga's Ambition seria lançado nos Estados Unidos em 18 de junho de 2012, como Pokémon Conquest.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.65 — 2026-10-13**
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
- As perguntas da coleção seguem todas as regras desta Parte I: tema e subtema, âncora, saturação e fontes. Podem ser com ou sem figura.
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
