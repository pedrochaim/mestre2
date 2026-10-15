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
      "nome": "Pokédex",
      "descricao": "Enciclopédia eletrônica dos jogos e do anime Pokémon, que registra os dados dos pokémon vistos e capturados."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, quem completa a Pokédex pode visitar o escritório da Game Freak, num prédio de Celadon. O que o designer do jogo entrega como prêmio?",
    "resposta": "Um diploma",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Diploma"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Diploma",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Game Freak",
      "descricao": "Estúdio japonês fundado por Satoshi Tajiri, responsável pelos jogos principais da série Pokémon."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes de virar um estúdio de jogos, Game Freak era o nome de uma publicação que Satoshi Tajiri criou nos anos oitenta. Que tipo de publicação era?",
    "resposta": "Uma revista de videogames",
    "fonte": [
      "https://en.wikipedia.org/wiki/Game_Freak"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Game_Freak",
        "situacao": "ok",
        "texto": "Game Freak Inc. is a Japanese video game developer, best known as the primary developer and co-owners of the Pokémon series of role-playing video games alongside Nintendo and Creatures who also founded and co-own the joint venture The Pokémon Company.\n[…]\nPredating the video game company, Game Freak was a doujin video game magazine created by Satoshi Tajiri in 1983. Ken Sugimori joined the circle at a later date as an illustrator after finding the magazine in a shop and liking it. Tajiri also used \"Game Freak\" as his pen name when he wrote as a freelance writer to publications such as Family Computer Magazine and Famicom Tsūshin.\n[…]\nOn April 26, 1989, Tajiri and Sugimori started a video game development company with the same name. One of Game Freak's first games was the Nintendo Entertainment System action and puzzle game Quinty, which was released in North America as Mendel Palace. Its most popular series, Pokémon—the romanized portmanteau of the Japanese brand Pocket Monsters (ポケットモンスター, Poketto Monsutā)—is published and distributed respectively by The Pokémon Company and Nintendo worldwide.\n[…]\nIn October 2015, Game Freak acquired Koa Games, a mobile development company. The company was subsequently merged into Game Freak on December 1, 2015.\n[…]\nIn October 2024, nearly a terabyte of data from Game Freak's servers was stolen. Development builds, source code, and test sprites either planned or released for past Pokémon games were found, as well as code names for upcoming Pokémon games, and prototypes of unreleased remakes of Quinty and Yoshi. Shortly afterwards, Game Freak addressed the incident, stating that the leak was due to \"unauthorized access to our servers by a third party\", which had taken place in August 2024.\n[…]\nGame Freak at IGN"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Game_Freak",
        "situacao": "ok",
        "texto": "Game Freak Inc. (株式会社ゲームフリーク, Kabushiki gaisha Gēmu Furīku) é uma desenvolvedora de jogos eletrônicos japonesa e principal desenvolvedor de jogos de RPG da série Pokémon. Foi fundada por Satoshi Tajiri em 26 de abril de 1989. Os jogos são publicados pela Nintendo e pela The Pokémon Company.\n[…]\nGame Freak foi originalmente uma publicadora sobre jogos eletrónicos criada por Satoshi Tajiri e Ken Sugimori na década de 1980. Tajiri escrevia e editava o texto, e Sugimori ilustrava. Em 26 de Abril de 1989, Tajiri e Sugimori iniciaram uma companhia de criação de jogos com o mesmo nome. Um dos primeiros jogos foi Quinty para o NES, que foi relançado na América do Norte como Mendel Palace.\n[…]\nSua série mais popular, Pokémon (ポケモン, Pokemon) é publicada pela Nintendo no Japão, América do Norte e Europa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Junichi Masuda",
      "descricao": "Compositor, programador e diretor japonês da Game Freak, autor da trilha sonora dos primeiros jogos Pokémon."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Que veterano da Game Freak compôs a trilha sonora de Red e Green, os primeiros jogos Pokémon, lançados para o Game Boy?",
    "resposta": "Junichi Masuda",
    "distratores": [
      "Satoshi Tajiri",
      "Ken Sugimori",
      "Go Ichinose"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Junichi_Masuda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Junichi_Masuda",
        "situacao": "ok",
        "texto": "Junichi Masuda (増田 順一, Masuda Jun'ichi; born January 12, 1968) is a Japanese video game composer, director, designer, producer, singer, programmer and trombonist, best known for his work in the Pokémon franchise. He was a member of Game Freak where he was an employee and executive at the company since 1989 after Satoshi Tajiri and Ken Sugimori founded it, starting as a music composer. In 2022, Mas\n[…]\nMasuda has worked at Game Freak since the company's inception in 1989, and has been involved in nearly every title that Game Freak has produced. Masuda was one of the original developers of the Pokémon series, beginning with Pokémon Red and Green. He was first hired to compose video game music, where his first game at Game Freak was Mendel Palace, a 1989 puzzle game for the Nintendo Entertainment System. After Mendel Palace, he worked on Yoshi, the company's first collaboration with Nintendo.\n[…]\nHe has stated that one of the hardest aspects of design is making sure that a Pokémon's name and attributes will appeal to a global audience. Since Pokémon Ruby and Sapphire, Masuda has been one of the main employees who approve or reject designs for new Pokémon. He served as a member of the Game Freak board of directors.\n[…]\nOn September 28, 2018, Masuda revealed that during the early years of developing Pokémon games, \"game data was nearly lost in a computer crash\". Masuda described it as \"the most nerve-racking moment in development\", saying \"We were developing the game on these Unix computer stations called the Sun SPARCstation 1. We're developing, and they're these Unix boxes, and they crashed quite a bit.\"\n[…]\nMasuda produced the Japanese ending themes \"Pokémon Shiritori\" and \"Batsugun Type\" for Pokémon Journeys with Japanese electronic group Pasocom Music Club.\n[…]\nOn June 1, 2022, Masuda left Game Freak to The Pokémon Company, acting as Chief Creative Fellow."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Junichi_Masuda",
        "situacao": "ok",
        "texto": "Junichi Masuda (増田 順一, Masuda Jun'ichi; Yokohama, 12 de janeiro de 1968) é um compositor de jogos eletrônicos, diretor, designer, produtor e programador japonês, mais conhecido pelo seu trabalho na franquia Pokémon. Masuda trabalha na Game Freak desde 1989, sendo membro do conselho administrativo da empresa.\n[…]\nMasuda nasceu em 12 de janeiro de 1968 em Yokohama, Kanagawa, Japão. Quando era criança, costumava passar as férias com sua família em Kyūshū, onde muitos dos seus parentes ainda vivem. Ele costumava passar seu tempo caçando peixes e insetos, uma brincadeira que mais tarde influenciou no seu design de videogame. Masuda modelou a região de Hoenn da série Pokémon se baseando em Kyūshū, numa tentativa de recuperar suas memórias de verão.\n[…]\nNo colegial, Masuda tocava trombone; logo descobriu a música clássica e se atraiu pelas obras como Le Sacre du Printemps e Symphony No. 5 de Shostakovich.\n[…]\nMasuda frequentou a Japan Electronics College, uma escola técnica em Shinjuku, onde estudou computação gráfica e a linguagem de programação C usando um DEC Professional.\n[…]\nPulseman (1994)  — Compositor\n[…]\nPokémon Red e Blue (1996)  — Compositor, programador\n[…]\nPokémon Yellow (1998)  — Compositor\n[…]\nPokémon Gold e Silver (1999)  — Diretor assistente, compositor, projetista, coordenador americano\n[…]\nPokémon Crystal (2000)  — Compositor\n[…]\nPokémon Ruby e Sapphire (2002) — Diretor, compositor, projetista\n[…]\nPokémon FireRed e LeafGreen (2004) — Diretor, compositor, projetista\n[…]\nPokémon Diamond e Pearl (2006) — Diretor, compositor\n[…]\nPokémon HeartGold e SoulSilver (2009) — Produtor, compositor\n[…]\nPokémon Black e White (2010) — Diretor, produtor, compositor\n[…]\nPokémon Black e White 2 (2012) — Produtor\n[…]\nPokémon X e Y (2013) — Diretor, produtor, compositor\n[…]\nPokémon Omega Ruby e Alpha Sapphire (2014)\n[…]\nColuna de Masuda na Game Freak\n[…]\nJunichi Masuda no X",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Lavender",
      "descricao": "Cidade da região de Kanto, nos jogos Pokémon Red e Blue, onde fica a Torre Pokémon, conhecida pela música fúnebre."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Uma lenda urbana da internet diz que crianças japonesas passaram mal ao ouvir a música fúnebre de uma cidade de Kanto, em Red e Green. Que cidade é essa?",
    "resposta": "Lavender",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lavender_Town",
      "https://en.wikipedia.org/wiki/Lavender_Town"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lavender_Town",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lavender_Town",
        "situacao": "ok",
        "texto": "Lavender Town (Japanese: シオンタウン, Hepburn: Shion Taun; Shion Town) is a fictional village in the 1996 video games Pokémon Red and Blue. Stylized as a haunted location, Lavender Town is home to the Pokémon Tower, a burial ground for deceased Pokémon and a location to find Ghost-type Pokémon. A subplot in the town involves the tower being haunted by the ghost of a dead Marowak, with the story of its \n[…]\nLavender Town is a village that can be visited in Pokémon Red, Green, Blue, Yellow, sequels Gold, Silver, Crystal, and the remakes thereof. Lavender Town is the player's first encounter with the concept of Pokémon dying, and is one of a few towns in the Kanto region not to feature a Gym. It is home to the Pokémon Tower, a graveyard filled with mourning trainers and hundreds of tombstones for deceased Pokémon.\n[…]\nThe chiptune background music of Lavender Town in Pokémon Red, Blue, Green and Yellow versions has garnered much interest due to some listeners finding it unsettling.\n[…]\nThe town's theme uses many sharp, atonal notes, which creates an eerie atmosphere.In Pokémon Gold, Silver and Crystal versions (and in their remakes Pokémon HeartGold and SoulSilver), the Lavender Town theme music was recomposed into a happier tone as, per the game's storyline, the Pokémon Tower was demolished and replaced with the Kanto Radio Tower. It was later remixed again for Pokémon: Let's Go, Pikachu!\n[…]\nShe stated that while Lavender Town's various unique aspects— such as the burial grounds, possessed trainers, and the revelation that Pokémon could die— were unsettling and memorable on their own, she found that these aspects, in conjunction with the real-world feasibility of the creepypastas, allowed them to take on a strong following."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lavender_Town",
        "situacao": "ok",
        "texto": "Lavender Town (Japonês: シオンタウン, Shion Taun, Shion Town) é uma localização fictícia nos videogames Pokémon Red & Blue. Estilizado como um local assombrado, Lavender Town é o lar de um grande cemitério de estilo japonês. A música de fundo é famosa por aumentar a atmosfera assustadora da cidade e deu origem à creepypasta \"Síndrome de Lavender Town\", que segundo ela, mais de cem crianças se suicidaram\n[…]\nLavender Town é uma vila muito pequena que pode ser visitada em Pokémon Red, Green, Blue, Yellow, Gold, Silver, Crystal, e os remakes dos mesmos. É o lar da \"Pokémon Tower\", um cemitério em estilo japonês cheio de lápides de Pokémon falecidos. Por isso, sugere-se que a vila seja um local assombrado, e o personagem do jogador pode encontrar Pokémon do tipo fantasma por lá. A Pokémon Tower foi substituída pela \"Kanto Radio Tower\" em Pokémon Silver e Gold.\n[…]\nA música de Lavender Town, composta por Junichi Masuda, combina sons chiptune afiados com \"uma cavalgada de acordes dissonantes\" para criar uma atmosfera misteriosa. Jay Hathaway da Gawker afirmou que deixar a música em execução pode causar uma \"vaga sensação de pavor\".\n[…]\nDe acordo com uma história da creepypasta que foi publicada anonimamente na Pastebin em 2010, a música de Lavender Town obrigou o suicídio de cerca de 200 crianças japonesas na primavera de 1996. Outros supostamente sofreram hemorragias nasais, dores de cabeça ou ficaram irracionalmente irritados. De acordo com essa lenda urbana, as batidas binaurais de tom alto prejudicavam os cérebros das crianças de uma forma que os adultos eram imunes.\n[…]\nMark Hill, da Kill Screen, afirmou que o apelo da lenda da Síndrome de Lavender Town \"vem de um símbolo tão inocente da infância\" e fez comparações com \"Dennō Senshi Porygon\", um episódio da série de anime Pokémon que deu centenas de  convulsões em crianças japonesas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Master Ball",
      "descricao": "Poké Bola roxa marcada com a letra M, a mais poderosa dos jogos Pokémon, fabricada pela Silph."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em Red e Blue, o jogador ganha a única Master Ball do jogo como recompensa por libertar um prédio dominado pela Equipe Rocket. Que prédio é esse?",
    "resposta": "A sede da Silph",
    "distratores": [
      "A Torre Pokémon",
      "O Cassino de Celadon",
      "A loja de Celadon"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Master_Ball"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Master_Ball",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Máquina Oculta",
      "descricao": "Item dos jogos Pokémon que ensinava golpes usados também fora das batalhas, como Surf e Força, para abrir caminho pelo mapa."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, as Máquinas Ocultas ensinavam Corte, Voo, Surf e Força. Qual era a quinta, que iluminava as cavernas escuras?",
    "resposta": "Flash",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/HM"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/HM",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Máquina Técnica",
      "descricao": "Item dos jogos Pokémon que ensina um golpe a um pokémon, conhecido pela sigla MT."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Scarlet e Violet, o jogador fabrica Máquinas Técnicas numa máquina dos Centros Pokémon. Além dos pontos da Liga, que matéria-prima ele gasta?",
    "resposta": "Materiais deixados por pokémon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/TM_Machine"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/TM_Machine",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Insígnia de ginásio",
      "descricao": "Distintivo que o jogador ganha ao vencer um líder de ginásio nos jogos Pokémon, exigido para disputar a Liga."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, um pokémon de nível alto recebido por troca pode desobedecer ao jogador nas batalhas. O que faz ele passar a obedecer?",
    "resposta": "Ganhar mais insígnias",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Obedience",
      "https://bulbapedia.bulbagarden.net/wiki/Badge"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Obedience",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Badge",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Evolução por troca",
      "descricao": "Método de evolução dos jogos Pokémon em que certos pokémon só evoluem ao serem trocados com outro jogador."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que Kadabra, Machoke, Graveler e Haunter, pokémon de Red e Blue, têm em comum na maneira de evoluir?",
    "resposta": "Evoluem quando são trocados",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution",
      "https://bulbapedia.bulbagarden.net/wiki/Trade"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Trade",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Pokémon exclusivos de versão",
      "descricao": "Pokémon que só podem ser capturados numa das versões de um par de jogos Pokémon, como Red e Blue."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Desde Red e Green, alguns pokémon só aparecem numa das duas versões de cada jogo. Que hábito a Game Freak quis estimular nos jogadores com isso?",
    "resposta": "Trocar pokémon entre si",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Version-exclusive_Pok%C3%A9mon",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red_and_Blue"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Version-exclusive_Pok%C3%A9mon",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red_and_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version and Pokémon Blue Version are popular 1996 role-playing video games (RPGs) developed by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon video game series and were first released in Japan as Pocket Monsters Red and Pocket Monsters Green, followed by the special edition Pocket Monsters Blue later that year.\n[…]\nTwo years after Red, Green and Blue Nintendo released Pokémon Yellow, an enhanced version of Red and Blue, in Japan in 1998, and in North America and Europe in 1999 and 2000. The game was designed to resemble the Pokémon anime series, with the player receiving a Pikachu as their starter Pokémon and their rival starting with an Eevee. Some non-player characters resemble those from the anime, including Team Rocket's Jessie and James.\n[…]\nPokémon Yellow was developed by Game Freak and entered development after the completion of the Japanese version of Pokémon Blue. Nintendo may have been considering a \"Pokémon Pink\" version to accompany Yellow, based on source code leaked from Nintendo.\n[…]\nOn the 20th anniversary of the first-generation Pokémon games' Japanese release, in February 2016, Nintendo re-released Red, Blue, and Yellow for their Nintendo 3DS Virtual Console service. The games include a first for the Virtual Console: simulated Link Cable functionality to allow trading and battling between games. As was the case with its original release, Green is exclusive to Japanese consumers. These versions can transfer Pokémon to Pokémon Sun and Moon via the Pokémon Bank application.\n[…]\nPokémon FireRed Version and Pokémon LeafGreen Version are enhanced remakes of Pokémon Red and Blue. The new games were developed by Game Freak and published by Nintendo for the Game Boy Advance and have compatibility with the Game Boy Advance Wireless Adapter, which originally came bundled with the games."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Red_%26_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version e Pokémon Blue Version, lançados no Brasil oficialmente como Pokémon Versão Vermelho e Pokémon Versão Azul, são dois jogos eletrônicos de RPG de 1996, desenvolvidos pela Game Freak e publicados pela Nintendo para o console portátil Game Boy. São os primeiros jogos eletrônicos da série Pokémon.\n[…]\nRed e Blue utilizam o acessório Cabo Game Link, que conecta dois Game Boy juntos e permite que os Pokémon sejam trocados ou combatidos entre os jogos. Ambos os títulos são independentes um do outro mas apresentam o mesmo enredo, e embora possam ser jogados separadamente, é necessário que os jogadores façam trocas entre ambos os jogos, já que cada versão possui uma parcela de Pokémon exclusivos e outros diferenças notáveis.\n[…]\nPokémon Red & Blue permitem que os jogadores troquem Pokémon entre dois cartuchos por meio do acessório Cabo Game Link. Este método de troca deve ser feito para completar totalmente o Pokédex do jogo, já que certos Pokémon só irão evoluir ao serem trocados e cada um dos dois jogos tem uma versão exclusiva de Pokémon. O Cabo Link também torna possível lutar contra o time Pokémon de outro jogador.\n[…]\nQuando o Game Boy foi lançado, Tajiri achou que o sistema era perfeito para sua ideia, especialmente por causa do cabo de conexão, que ele imaginou que permitiria aos jogadores trocar Pokémon entre si. Esse conceito de troca de informações era novo na indústria de jogos eletrônico porque, anteriormente, os cabos de conexão eram usados apenas para a competição.\n[…]\nA edição japonesa Blue do jogo apresenta quase um punhado de Pokémon disponíveis em Red e Green, tornando certos Pokémon exclusivos das edições originais.\n[…]\nEssas versões dos jogos são capazes de transferir Pokémon para Pokémon Sun e Moon por meio do aplicativo Pokémon Bank.\n[…]\nPokémon Yellow\n[…]\nPokémon FireRed e LeafGreen",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Pokémon HOME",
      "descricao": "Serviço na nuvem da The Pokémon Company, para Nintendo Switch e celular, que guarda e transfere pokémon entre vários jogos."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O Pokémon HOME, serviço na nuvem que reúne pokémon de vários jogos no Switch e no celular, foi lançado em que ano?",
    "resposta": "2020",
    "distratores": [
      "2018",
      "2019",
      "2021"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Home"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Home",
        "situacao": "ok",
        "texto": "Pokémon is a series of role-playing video games developed by Game Freak and published by Nintendo and The Pokémon Company. Over the years, a number of spin-off games based on the series have also been developed by multiple companies. While the main series consists of RPGs, spin-off games encompass other genres, such as action role-playing, puzzle, fighting, and digital pet games.\n[…]\nMost Pokémon video games have been developed exclusively for Nintendo handheld and home consoles, dating from the Game Boy to the Nintendo Switch 2.\n[…]\nThe game can be downloaded from the Pokémon Masters official website Originally named Pokémon Masters, it was renamed Pokémon Masters EX in August 2020 on the 1st anniversary of the game.\n[…]\nIn June 2019, The Pokémon Company announced a new cloud service for storing Pokémon, intended to replace Pokémon Bank. It was later revealed the service would be called Pokémon Home and was released for Nintendo Switch, iOS, and Android. Home would be available in two tiers, a paid premium subscription and a free tier with less storage and a limited feature set. A subscription to Nintendo Switch Online would not be required to use Pokémon Home. It was released in February 2020.\n[…]\ntitles, except this one way transfer system only applies after you transfer a Pokémon into Pokémon Home, then into Pokémon Sword and Shield. On November 11, 2020, Niantic released an update for Pokémon Go that allows the unidirectional transfer of Pokémon to Pokémon Home.\n[…]\nPokémon Smile is a free app for Android and iOS devices. The game uses the device's camera to play the game. Players brush their teeth to rescue Pokémon from bacteria. The game was announced during a Pokémon Presents presentation on June 17, 2020, and was made available later the same day.\n[…]\nOfficial Pokémon website\n[…]\nOfficial Japanese Pokémon website (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_jogos_da_s%C3%A9rie_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "Esta é uma lista de jogos eletrônicos do Pokémon da série de RPG e outros gêneros (incluindo quebra-cabeça e digitais pet-jogos) desenvolvido pela Game Freak e publicado pela Nintendo. Os jogos spin-off's foram desenvolvidos pela Creatures Inc. Os jogos eletrônicos de Pokémon são desenvolvidos exclusivamente para Nintendo portátil, consoles de jogos eletrônicos e os PCs que datam do Game Boy para \n[…]\nPokémon Pikachu\n[…]\nPokémon mini (2002)\n[…]\nPokémon\n[…]\nPokémon (série de jogos eletrônicos)\n[…]\nWebsite oficial de Pokémon\n[…]\nWebsite oficial japonês de Pokémon (em japonês)\n[…]\n«Pokémon Games». Cópia arquivada em 28 de outubro de 2007",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Wonder Trade",
      "descricao": "Recurso online criado em Pokémon X e Y que troca, às cegas, um pokémon do jogador com o de um desconhecido."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em X e Y, a Wonder Trade troca um pokémon do jogador com o de um desconhecido, às cegas. Que novo nome esse recurso ganhou em Sword e Shield?",
    "resposta": "Surprise Trade",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Wonder_Trade"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Wonder_Trade",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Presente Misterioso",
      "descricao": "Recurso dos jogos Pokémon, criado em Gold e Silver, para receber presentes como itens e pokémon de evento."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, dois Game Boy Color colocados frente a frente trocavam presentes sem nenhum cabo, pelo Presente Misterioso. Que tecnologia permitia isso?",
    "resposta": "Infravermelho",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Mystery_Gift"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mystery_Gift",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Habilidade oculta",
      "descricao": "Habilidade rara de pokémon, diferente das habilidades comuns da espécie, introduzida em Pokémon Black e White."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Black e White, os primeiros pokémon com habilidade oculta vinham de um site em que o pokémon dormia e explorava um mundo de sonhos. Como esse serviço se chamava?",
    "resposta": "Pokémon Dream World",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Dream_World",
      "https://bulbapedia.bulbagarden.net/wiki/Ability"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Dream_World",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ability",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Clima nas batalhas Pokémon",
      "descricao": "Mecânica dos jogos Pokémon em que condições como chuva, sol forte e tempestade de areia alteram os efeitos das batalhas."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Os efeitos de clima nas batalhas, como a chuva que fortalece os golpes de água, estrearam em qual par de jogos da série principal?",
    "resposta": "Gold e Silver",
    "distratores": [
      "Red e Blue",
      "Ruby e Sapphire",
      "Diamond e Pearl"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Weather"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Weather",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Ciclo de dia e noite em Pokémon",
      "descricao": "Mecânica introduzida em Pokémon Gold e Silver em que um relógio real faz o dia e a noite se alternarem no jogo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em Gold e Silver, o relógio real do cartucho mudava os pokémon que apareciam ao longo do dia. Em quantos períodos o dia do jogo se dividia?",
    "resposta": "Três",
    "distratores": [
      "Dois",
      "Quatro",
      "Cinco"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Time"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Time",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Ovo Pokémon",
      "descricao": "Ovo de onde nascem filhotes de pokémon nos jogos da série principal, desde Gold e Silver, obtido por criação."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Scarlet e Violet, que não têm creche, onde o jogador encontra os ovos gerados pelos seus pokémon?",
    "resposta": "Na cesta do piquenique",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Picnic",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Egg"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Picnic",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Egg",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Satoru Iwata",
      "descricao": "Programador japonês da HAL Laboratory que depois presidiu a Nintendo, de 2002 a 2015."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Gold e Silver só conseguiram incluir também a região de Kanto graças a um programador que compactou os dados do jogo. Quem era ele, que depois presidiu a Nintendo?",
    "resposta": "Satoru Iwata",
    "fonte": [
      "https://en.wikipedia.org/wiki/Satoru_Iwata",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Satoru_Iwata",
        "situacao": "ok",
        "texto": "Satoru Iwata (Japanese: 岩田 聡; December 6, 1959 – July 11, 2015) was a Japanese businessman, video game programmer and producer. Beginning in 2002, Iwata served as the fourth president of Nintendo, as well as the chief executive officer (CEO) of Nintendo of America from 2013 until his death in 2015. Iwata was a major contributor in broadening the appeal of video games by focusing on novel and enter\n[…]\nAlthough he was not part of Nintendo at the time, Iwata assisted in the development of Pokémon Gold and Silver, which were released for the Game Boy Color in November 1999, by creating a set of compression tools utilized for graphics in the games. While working as a go-between for Game Freak and Nintendo, he aided in the programming of Pokémon Stadium for the Nintendo 64 by reading the original coding in Pokémon Red and Green and porting the battle system into the new game in just one week.\n[…]\nAccordingly, Iwata was referred to as a \"gentle revolutionary\". The simplistic appeal of the Nintendo DS and Wii served to expand the market. Chris Kohler of Wired magazine stated that \"thanks to Nintendo's Satoru Iwata, we're all gamers now,\" referring to the surge in video game popularity following the releases of the Nintendo DS and Wii. Although widely respected, he received criticism over his stubbornness in moving Nintendo to the mobile market.\n[…]\nFollowing Iwata's death, Reggie Fils-Aimé remarked, \"... it will be years before his impact on both Nintendo and the full video game industry will be fully appreciated.\"\n[…]\nIwata, Satoru (2021). Ask Iwata: Words of Wisdom from Satoru Iwata, Nintendo's Legendary CEO. San Francisco: Viz. ISBN 978-19-7472-154-2.\n[…]\nHistory of Nintendo\n[…]\nSatoru Iwata at Nintendo Miiverse\n[…]\nSeattle Post Intelligence: Satoru Iwata Interview\n[…]\nGameSpy: Nintendo's New Direction at the Wayback Machine (archived June 10, 2004) – a discussion with Nintendo President Satoru Iwata"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version and Pokémon Silver Version are 1999 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy Color. They are the first installments in the second generation of the Pokémon video game series. They were released in Japan on November 21st, 1999, Australia and North America on October 15th, 2000, and Europe on April 6th, 2001.\n[…]\nGold and Silver were first publicly showcased at November 1997, Nintendo Space World Expo in Japan, becoming the most popular exhibit at the program. Unlike the previous game in the series, Pokémon Yellow, the new titles were announced to be more than a small upgrade to Pokémon Red and Blue. Instead, they would feature a new storyline, a new world, and new species of Pokémon. Gold and Silver were designed for the Game Boy Color, allowing them full color support and more detailed sprites.\n[…]\nProgrammer Shigeki Morimoto stated that part of why development took three and a half years was due to being a small team of only four programmers. Satoru Iwata, then the president of HAL Laboratory who would later become Nintendo's CEO, helped the team by developing new tools for compressing the Pokémon graphic code.\n[…]\nIn June 2017, The Pokémon Company announced via a Pokémon Direct broadcast that the games would be re-released worldwide via the Nintendo 3DS Virtual Console on September 22, 2017.\n[…]\nNintendo Power listed Gold and Silver combined as the sixth best Game Boy / Game Boy Color games, praising them for the new Pokémon, features, and full-color graphics.\n[…]\nPokémon HeartGold Version and Pokémon SoulSilver Version are enhanced remakes of Pokémon Gold and Silver, developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS. First released in Japan on September 12, 2009, the games were later released in North America, Australia, and Europe during March 2010."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Satoru_Iwata",
        "situacao": "ok",
        "texto": "Satoru Iwata (岩田 聡, Iwata Satoru; Sapporo, 6 de dezembro de 1959 – Quioto, 11 de julho de 2015) foi um programador e empresário japonês que atuou como o diretor executivo e quarto presidente da Nintendo de 2002 até sua morte. Ele é amplamente considerado por jogadores e especialistas como um dos grandes contribuintes na ampliação do público consumidor de jogos eletrônicos ao adotar uma estratégia \n[…]\nMesmo não sendo funcionário da Nintendo, Iwata criou um conjunto de ferramentas para ajudar na compressão dos gráficos empregados no desenvolvimento de Pokémon Gold & Silver, que foram lançados para o Game Boy Color em novembro de 1999. Ele atuou como intermediário entre a Game Freak e a Nintendo, também ajudando na programação de Pokémon Stadium para o Nintendo 64 ao ler os códigos originais de Pokémon Red & Green e converter seu sistema de batalha para o novo jogo em apenas uma semana.\n[…]\nOs fracassos seguidos do 3DS e Wii U fez com que Mitsushige Akino da Ichiyoshi Asset Management Co. sugerisse que Iwata deveria renunciar de seu cargo de presidente.\n[…]\nSatoru Iwata acabou morrendo de complicações de seu tumor no dia 11 de julho de 2015 aos 55 anos de idade. Um anúncio formal de sua morte foi feito pela Nintendo no dia seguinte.\n[…]\nEle evitou uma \"luta direta\" contra os competidores e foi bem sucedido em seus objetivos ao direcionar-se para um novo público invés de tentar competir com a Sony e Microsoft. Dessa forma, foi chamado de um \"revolucionário gentil\". O apelo simplista do Nintendo DS e Wii serviram para expandir o mercado. Chris Kohle da Wired afirmou que \"graças à Nintendo de Satoru Iwata, todos agora somos jogadores\", referindo-se ao surto de popularidade dos jogos eletrônicos depois dos lançamentos do DS e Wii.\n[…]\nIwata, Satoru (2021). Hobonichi, ed. Ask Iwata: Words of Wisdom From Nintendo's Legendary CEO (em inglês). San Francisco: Viz. ISBN 978-19-7472-154-2",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Emboar",
      "descricao": "Pokémon dos tipos Fogo e Lutador, número 500 da Pokédex Nacional."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que Blaziken, Infernape e Emboar, as evoluções finais dos iniciais de fogo de três gerações seguidas, têm em comum além do fogo?",
    "resposta": "Também são do tipo Lutador",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Starter_Pok%C3%A9mon",
      "https://bulbapedia.bulbagarden.net/wiki/Emboar_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Starter_Pok%C3%A9mon",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Emboar_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Centro Pokémon",
      "descricao": "Edifício presente nas cidades dos jogos Pokémon onde os pokémon do jogador são curados de graça."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A partir de Black e White, que estabelecimento, antes num prédio separado de teto azul, passou a funcionar dentro dos Centros Pokémon?",
    "resposta": "A loja, o Poké Mart",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Center",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Mart"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Center",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Mart",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Pokégear",
      "descricao": "Aparelho multifuncional do jogador em Pokémon Gold, Silver e Crystal e nos remakes HeartGold e SoulSilver."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, o Pokégear reunia relógio, mapa e rádio. Que quarta função permitia que outros treinadores pedissem revanche ao jogador?",
    "resposta": "Telefone",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9gear"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9gear",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "PokéNav",
      "descricao": "Aparelho do jogador em Pokémon Ruby, Sapphire e Emerald, com mapa de Hoenn e registro de treinadores."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em Ruby e Sapphire, o PokéNav, com o mapa da região e um registro de treinadores, é fabricado por qual empresa da cidade de Rustboro?",
    "resposta": "Corporação Devon",
    "distratores": [
      "Silph",
      "Macro Cosmos",
      "Fundação Aether"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9Nav",
      "https://bulbapedia.bulbagarden.net/wiki/Devon_Corporation"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9Nav",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Devon_Corporation",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Bicicleta (Pokémon)",
      "descricao": "Meio de transporte do jogador nos jogos Pokémon, que permite andar mais rápido que a pé."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em Red e Blue, a loja de Cerulean vende bicicletas por um preço que o jogador nunca consegue juntar. Quanto custa uma bicicleta?",
    "resposta": "Um milhão",
    "distratores": [
      "Cem mil",
      "Quinhentos mil",
      "Dez mil"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Bicycle"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Bicycle",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Vara de pesca (Pokémon)",
      "descricao": "Item dos jogos Pokémon usado para fisgar pokémon aquáticos, com modelos de qualidades diferentes."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, o jogador ganha três varas de pesca: a Old Rod, que só fisga Magikarp, a Good Rod e qual outra, a melhor das três?",
    "resposta": "Super Rod",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Super_Rod",
      "https://bulbapedia.bulbagarden.net/wiki/Fishing"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Super_Rod",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Fishing",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Pokérus",
      "descricao": "Vírus raro e benéfico dos jogos Pokémon, introduzido em Gold e Silver, que faz os pokémon se fortalecerem mais rápido."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que vírus raro, que a enfermeira do Centro Pokémon avisa ter encontrado, faz os pokémon infectados ficarem mais fortes mais depressa?",
    "resposta": "Pokérus",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9rus"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9rus",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "MissingNo.",
      "descricao": "Pokémon defeituoso, fruto de uma falha de programação, encontrado nos jogos Pokémon Red e Blue."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do pokémon defeituoso MissingNo., famoso em Red e Blue, é a abreviação de qual expressão em inglês?",
    "resposta": "Missing Number",
    "fonte": [
      "https://en.wikipedia.org/wiki/MissingNo."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/MissingNo.",
        "situacao": "ok",
        "texto": "MissingNo. ( ; Japanese: けつばん, Hepburn: Ketsuban) is a glitch and an unofficial Pokémon species found in the video games Pokémon Red and Blue. Due to the programming of certain in-game events, players can encounter MissingNo. via a glitch. Encountering MissingNo. causes graphical anomalies and changes gameplay by increasing the number of items in the sixth entry of the player's inventory by 128.\n[…]\nIGN noted MissingNo.'s appearance in Pokémon Red and Blue was one of the most famous video game glitches and commented on its role in increasing the series' popularity. Fans have attempted to rationalize and incorporate MissingNo. as part of the games' canon as an actual in-game character, and sociologists have studied its impact on both players and gaming culture as a whole.\n[…]\nThe glitch was not removed from the 2016 re-releases of Pokémon Red and Blue on the Nintendo 3DS Virtual Console, so players can still encounter MissingNo. in these versions of the games.\n[…]\nA player can encounter a MissingNo. in Pokémon Red and Blue by following a series of steps. First, the player watches an in-game tutorial for Pokémon capture in the game's Viridian City location. Second, the player uses a Pokémon with the \"Fly\" move to instantly travel to the game's Cinnabar Island location. Finally, the player uses a Pokémon with the \"Surf\" move to travel up and down on the eastern shore of the island until a MissingNo. appears.\n[…]\nA captured MissingNo. is functional as a Pokémon and appears in the games' Pokédex as number 000. The games classify it as a Bird- and Normal-type Pokémon even though the Bird-type was cut from the games before release. It commonly appears with a scrambled block-like form commonly described as a \"backward L-shape\", but depending on the player character's name, it can also appear as one of three ghost or fossilized skeleton sprites not used by other Pokémon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/MissingNo.",
        "situacao": "ok",
        "texto": "MissingNo. (けつばん, Ketsuban), ou MissingNO, é uma espécie de Pokémon encontrada nos jogos Pokémon Red e Blue e Yellow. O Pokémon MissingNo. (\"Missing Number\", ou \"Número Desconhecido\") é utilizado pela Game Freak como tratador de exceção, e aparece quando o jogo tenta acessar informações sobre uma espécie de Pokémon que não existe. Devido à programação de três eventos no jogo, jogadores conseguiam \n[…]\nEncontrar o MissingNo. causava falhas gráficas e na replicação em massa do sexto item no menu de itens do jogador; este último efeito resultou na cobertura do glitch por guias de estratégia e revistas especializadas em jogos. A IGN comentou sobre a aparição do MissingNo. em Pokémon Red e Blue como um dos mais famosos glitches de videogame. Os fãs da série tentaram incluir o MissingNo. no cânone do universo Pokémon, o que gerou debates sobre o assunto.\n[…]\napareça. MissingNo. é a redução de \"Missing Number\" (\"Número Desconhecido\").\n[…]\nA reação dos jogadores ao MissingNo. foi sujeita a estudos sociológicos. O sociólogo William Sims Bainbridge disse que a Game Freak foi a responsável por criar \"um dos glitches mais populares da história dos jogos\", e citou a criatividade dos jogadores em utilizá-lo. No livro Pikachu's Global Adventure: The Rise and Fall of Pokémon, o professor Julian Sefton-Gren, ao estudar a reação de seu filho quanto ao uso do MissingNo.\n[…]\nO livro descreve a tendência dos jogadores a tomarem nota sobre sua aparência, e a classificarem e criticarem as descobertas dos outros. O livro afirma que, em suas tentativas de canonizar o MissingNo. por meio de fanzines e fanfiction, a comunidade Pokémon celebrou as imperfeições do jogo tentando imprimi-las no cânone da série. O autor descreve essas circunstâncias como únicas ao MissingNo., descrevendo sua popularidade como um caso incomum.\n[…]\nMissingNo. na Nintendo.com\n[…]\nMissingNo. na Bulbapedia, um wiki de Pokémon em inglês",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Elite dos Quatro",
      "descricao": "Grupo de quatro treinadores de elite que o jogador enfrenta antes do campeão na Liga Pokémon de cada região."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No Japão, a Elite dos Quatro dos jogos Pokémon se chama Shitennō, nome emprestado de quais figuras da tradição budista?",
    "resposta": "Quatro Reis Celestiais",
    "distratores": [
      "Quatro Samurais Sagrados",
      "Quatro Dragões Divinos",
      "Quatro Monges Guerreiros"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Elite_Four",
      "https://en.wikipedia.org/wiki/Four_Heavenly_Kings"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Elite_Four",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Four_Heavenly_Kings",
        "situacao": "ok",
        "texto": "The Four Heavenly Kings are four Buddhist gods or devas, each of whom is believed to watch over one cardinal direction of the world. The Hall of Four Heavenly Kings is a standard component of Chinese Buddhist temples.\n[…]\nIn Chinese Buddhism, all four of the heavenly kings are regarded as four of the Twenty Devas (二十諸天 Èrshí Zhūtiān) or the Twenty-Four Devas (二十四諸天 Èrshísì zhūtiān), a group of Buddhist dharmapalas who manifest to protect the Dharma.\n[…]\nThe attributes borne by each King also link them to their followers; for instance, the nāgas, magical creatures who can change form between human and serpent, are led by Virūpākṣa, represented by a snake; the gandharvas are celestial musicians, led by Dhṛtarāṣṭra, represented with a lute. The umbrella was a symbol of regal sovereignty in ancient India, and the sword is a symbol of martial prowess.\n[…]\nIn Japanese professional wrestling, the group of Mitsuharu Misawa, Kenta Kobashi, Toshiaki Kawada, and Akira Taue of All Japan Pro-Wrestling are commonly referred to as the Four Heavenly Kings of Pro Wrestling.\n[…]\nIn the Hong Kong entertainment industry, Andy Lau, Jacky Cheung, Leon Lai, Aaron Kwok are known as the Four Heavenly Kings.\n[…]\nIn the mid-to-late 1990s, Malice Mizer, La'cryma Christi, Fanatic Crisis and Shazna were known as the Four Heavenly Kings of the visual kei scene.\n[…]\nFour Dwarves (Norse mythology)\n[…]\nFour Holy Beasts\n[…]\nFour Living Creatures\n[…]\nFour sons of Horus\n[…]\nFour Stags (Norse mythology)\n[…]\nFour Symbols\n[…]\nFour temperaments\n[…]\nSchumacher, Mark. \"Shitenno - Four Heavenly Kings (Deva) of Buddhism, Guarding Four Cardinal Directions\". Digital Dictionary of Buddhism in Japan."
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Pokémon Diamond e Pearl",
      "descricao": "Par de jogos Pokémon da quarta geração, para Nintendo DS, ambientado na região de Sinnoh."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que tema une os nomes das versões Ruby, Sapphire e Emerald, de Hoenn, aos de Diamond e Pearl, de Sinnoh?",
    "resposta": "São nomes de joias",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Diamond_and_Pearl",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ruby_and_Sapphire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Diamond_and_Pearl",
        "situacao": "ok",
        "texto": "Pokémon Diamond Version and Pokémon Pearl Version are role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS in 2006. They are the first installments in the fourth generation of the Pokémon video game series. They were first released in Japan on September 28, 2006, and released in North America, Australia, and Europe in 2007. Pokémon \n[…]\nBeneath Sinnoh's surface is the Underground, a large area used for wireless multiplayer gaming; in it, players can create and decorate secret bases, first featured in Pokémon Ruby and Sapphire, and participate in minigames. The items mined in the Underground can then be transferred into the player's bag in the main game. Diamond and Pearl also employ support for the Nintendo Wi-Fi Connection (since discontinued), allowing players to communicate through voice chat, trade, and battle online.\n[…]\nIn addition to compatibility with each other, Diamond and Pearl offer compatibility with the third generation Pokémon games, Pokémon Ruby and Sapphire, Emerald, and FireRed and LeafGreen. They are also compatible with Pokémon Ranger and Pokémon Battle Revolution.\n[…]\nPokémon Battle Revolution is the first Wii incarnation of the Pokémon video game franchise. The game uses wireless connection in order to connect to the Nintendo DS, allowing players to use their Pokémon from Diamond and Pearl in the game's various modes.\n[…]\nMy Pokémon Ranch is a Wii game developed by Ambrella and released via the WiiWare download service. First released on March 25, 2008, in Japan, it was later made available in North America on June 9, 2008, and in Europe on July 4, 2008, for 1,000 Wii Points, equivalent to US$10.00. Like the GameCube's Pokémon Box: Ruby and Sapphire, Pokémon Ranch allows players to store and arrange Pokémon from Diamond and Pearl."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ruby_and_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Ruby Version and Pokémon Sapphire Version are 2002 role-playing video games developed by Game Freak for the Game Boy Advance. Although the games were published by Nintendo internationally in 2003, The Pokémon Company published them in Japan in late 2002, making them the first mainline games to have this distinction, as well as the second games to have it overall, after Pokémon Card GB2: Gr\n[…]\nThe most prominent subplot involves Team Aqua and Team Magma, crime syndicates who want to use Pokémon to alter the climate of Hoenn: in Ruby, the villains, Team Magma, want to use the legendary Pokémon Groudon to dry up the oceans of Hoenn and increase the region's landmass; in Sapphire, Team Aqua are the villains and they try to use Groudon's counterpart, Kyogre, to flood the landmasses of Hoenn and increase the region's ocean.\n[…]\nPokémon Emerald Version is a third version after Pokémon Ruby and Sapphire, developed by Game Freak, published by The Pokémon Company and Nintendo for the Game Boy Advance. It was first released in Japan in 2004, and was later released internationally in 2005. Emerald received generally positive reception and by fiscal year 2007 sales had reached 6.32 million units.\n[…]\nThe game is essentially a storage system for the Game Boy Advance Pokémon games that allow players to trade and store Pokémon that they have caught in Ruby, Sapphire, Emerald, FireRed and LeafGreen onto a GameCube memory card. Players can then organize and interact with their Pokémon on the GameCube, such as allowing them to breed. Unique Pokémon can also be acquired. Another feature allows Ruby and Sapphire to be played on the television via the GameCube – Game Boy Advance link cable.\n[…]\nOptions such as taking screenshots of the game are available in this mode. Another addition is the \"Showcase\", where players can create and display game pieces of Pokémon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Diamond_e_Pearl",
        "situacao": "ok",
        "texto": "Pokémon Diamond Version e Pokémon Pearl Version (ポケットモンスター ダイヤモンド・パール, Poketto Monsutā Daiyamondo・Pāru; tradução: Monstros de Bolso Diamond・Pearl, em japonês Daiyamondo (Diamante) é um estrangeirismo, assim como Pāru (Pérola), pérola em japonês é 真珠 Shinju) são dois jogos eletrônicos de RPG de 2006, desenvolvidos pela Game Freak, publicados pela The Pokémon Company e Nintendo para consola portátil\n[…]\nAlém da compatibilidade um com o outro, Diamond e Pearl oferecem compatibilidade com os jogos Pokémon de terceira geração, Pokémon Ruby e Sapphire, Emerald, FireRed e LeafGreen, Pokémon Ranger e Pokémon Battle Revolution.\n[…]\nPokémon Diamond e Pearl obtiveram classificações um pouco mais altas do que FireRed e LeafGreen e Ruby e Sapphire. A pontuação mais alta dada foi 92 pela The UK Official Nintendo Magazine, enquanto a mais baixa foi 67 pela Game Revolution. Ryan Davis da GameSpot deu aos jogos um 8,5/10, \"Ótimo\", e chamou os jogos de \"os jogos de Pokémon mais completos até o momento\". IGN e GameZone também deram aos jogos um 8.5/10. The UK Official Nintendo Magazine deu 92% aos jogos e a GameSpy deu a eles 4,5/5.\n[…]\nEm 30 de setembro de 2017, Pokémon Diamond e Pearl combinados venderam 17,67 milhões de cópias em todo o mundo, fazendo com que suas vendas totalizem cerca de um milhão a mais do que as de Ruby e Sapphire e cerca de seis milhões a mais do que as de FireRed e LeafGreen. Os jogos também impulsionou as vendas de hardware nos Estados Unidos, estimulando as vendas de 471.000 unidades do DS e fazendo com que as vendas de jogos de vídeo em abril de 2007 a subir 20% a partir de abril de 2006.\n[…]\nComo o Pokémon Box: Ruby e Sapphire da GameCube, My Pokémon Ranch permite aos jogadores para armazenar e organizar Pokémon Diamond e Pearl. Pokémon transferidos desses jogos para My Pokémon Ranch são renderizados em 3D e podem interagir com os Miis do jogador.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Platô Índigo",
      "descricao": "Local da Liga Pokémon nos jogos de Kanto e Johto, ao fim da Estrada Vitória."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, o que as regiões de Kanto e Johto compartilham, no fim da Estrada Vitória?",
    "resposta": "A mesma Liga Pokémon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Indigo_Plateau"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Indigo_Plateau",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Terastal",
      "descricao": "Fenômeno dos jogos Pokémon Scarlet e Violet que faz o pokémon brilhar como cristal durante a batalha."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Megaevolução, Movimento Z, Dynamax e Terastal são mecânicas de batalha de gerações diferentes. Que limite de uso todas elas têm em comum?",
    "resposta": "Só uma vez por batalha",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Terastal_phenomenon",
      "https://bulbapedia.bulbagarden.net/wiki/Mega_Evolution",
      "https://bulbapedia.bulbagarden.net/wiki/Z-Move",
      "https://bulbapedia.bulbagarden.net/wiki/Dynamax"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Terastal_phenomenon",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mega_Evolution",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Z-Move",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.66 — 2026-10-13**
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
- **Subtema da coleção** (campo `subtema_colecao`): uma coleção pode ter subtemas próprios, definidos no documento dela, que dividem as perguntas dentro do modo. Eles não substituem tema e subtema, e a lista canônica (§3) não muda. A folga para sobreposição entre eles também é definida no documento da coleção.
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
