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
      "nome": "Hoenn",
      "descricao": "Região fictícia dos jogos Pokémon Ruby, Sapphire e Emerald, da terceira geração."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Com vulcões e muitas rotas pelo mar, a região de Hoenn, de Pokémon Ruby e Sapphire, se inspira em qual ilha japonesa?",
    "resposta": "Kyushu",
    "distratores": [
      "Hokkaido",
      "Shikoku",
      "Honshu"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Hoenn"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Hoenn",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Sinnoh",
      "descricao": "Região fictícia dos jogos Pokémon Diamond, Pearl e Platinum, da quarta geração."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Neve ao norte e um grande monte no centro: a região de Sinnoh, de Diamond e Pearl, foi desenhada a partir de qual ilha do Japão?",
    "resposta": "Hokkaido",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sinnoh"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sinnoh",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Johto",
      "descricao": "Região fictícia dos jogos Pokémon Gold e Silver, da segunda geração, vizinha de Kanto."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Vizinha de Kanto nos jogos, a região de Johto, cenário de Pokémon Gold e Silver, se inspira em qual região do Japão?",
    "resposta": "Kansai",
    "distratores": [
      "Tohoku",
      "Chugoku",
      "Hokkaido"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Johto"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Johto",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Paldea",
      "descricao": "Região fictícia dos jogos Pokémon Scarlet e Violet, da nona geração."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Com uma grande cratera no centro do mapa, a região de Paldea, de Pokémon Scarlet e Violet, se inspira em qual península europeia?",
    "resposta": "Península Ibérica",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Paldea",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_and_Violet"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Paldea",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_and_Violet",
        "situacao": "ok",
        "texto": "Pokémon Scarlet and Pokémon Violet are 2022 role-playing video games developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. They are the first installments in the ninth generation of the Pokémon video game series. They were announced in February 2022 and released on 18 November 2022. The games later received a downloadable content (DLC) expansion pass st\n[…]\nScarlet and Violet take place in the Paldea Region, which is based on the Iberian Peninsula. Unlike previous Pokémon installments, the games feature an open world. There are three separate stories the player can complete. Scarlet and Violet introduce 120 new Pokémon, along with two new regional forms and time-displaced creatures known as Paradox Pokémon. It also introduces the Terastal phenomenon, which allows a Pokémon to transform into its exclusive \"Tera Type\".\n[…]\nPokémon Scarlet and Violet are set in the Paldea Region of the Pokémon universe, which appears to be loosely based on the Iberian Peninsula. The region features diverse landscapes including lakes, wastelands, and mountain ranges. A large crater, called the Great Crater of Paldea, lies in the center of the region. Inside the Crater is an area named Area Zero.\n[…]\nOn 11 January 2024, the DLC's epilogue Mochi Mayhem released where the player goes back to the land of Kitakami to catch a new Mythical Pokémon, Pecharunt.\n[…]\nThe anime series Pokémon Horizons: The Series featured several tie-ins to Pokémon Scarlet and Violet. Several locations, characters, and species from the games make appearances in the series. In August 2023, during a Pokémon Presents presentation, a limited 4-episode web series based on the games, subtitled Pokémon: Paldean Winds, was announced; it premiered on YouTube on 6 September 2023, and ended on 13 December 2023.\n[…]\nMedia related to Pokémon Scarlet and Violet at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_e_Violet",
        "situacao": "ok",
        "texto": "Pokémon Scarlet (ポケットモンスター スカーレット, Poketto Monsutā Sukāretto, Monstros de Bolso Escarlate) e Pokémon Violet (ポケットモンスター バイオレット, Poketto Monsutā Baioretto, Monstros de Bolso Violeta) são dois jogos eletrônicos de RPG desenvolvidos pela Game Freak e publicados pela Nintendo e The Pokémon Company para Nintendo Switch. Eles são os primeiros parcelas da nona geração da série de jogos eletrônicos Pokémon\n[…]\nScarlet e Violet se passa na região de Paldea, que é baseada na Península Ibérica, principalmente na Espanha e em Portugal. Diferentemente dos jogos Pokémon anteriores, estes apresentam um mundo aberto. Existem três histórias separadas que o jogador pode completar. Scarlet e Violet apresentam 120 novos Pokémon, juntamente com duas novas formas regionais e criaturas deslocadas no tempo conhecidas como Pokémon Paradoxo.\n[…]\nPokémon Scarlet e Violet são ambientados na região de Paldea do universo de Pokémon, que parece ser vagamente baseado na Península Ibérica. A região apresenta diversas paisagens, incluindo lagos, terrenos baldios e cadeias de montanhas. Uma grande cratera, chamada Grande Cratera de Paldea, fica no centro da região. Dentro da cratera há uma área chamada Área Zero.\n[…]\nA série de anime Pokémon Horizons: the Series apresentou diversas conexões com Pokémon Scarlet e Violet. Vários locais, personagens e espécies dos jogos fazem aparições na série. Em agosto de 2023, durante uma apresentação do Pokémon Presents, foi anunciada uma websérie limitada de 4 episódios baseada nos jogos, intitulada Pokémon: Paldean Winds; estreou no YouTube em 6 de setembro de 2023 e terminou em 13 de dezembro de 2023.\n[…]\nProduzida pelo Wit Studio, ela é baseada na região de Paldea como uma conexão com Scarlet e Violet, embora não faça parte da série principal de anime. Cada episódio se concentra em um aluno diferente da Academia, com cada um superando um problema ao longo do episódio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Red (treinador)",
      "descricao": "Protagonista silencioso dos jogos Pokémon Red, Green e Blue, que reaparece como desafio final na segunda geração."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na segunda geração de jogos, ambientada em Johto, o protagonista de Red e Blue reaparece como desafio final no topo de qual montanha?",
    "resposta": "Mt. Silver",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Red_(game)",
      "https://bulbapedia.bulbagarden.net/wiki/Mt._Silver"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Red_(game)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mt._Silver",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Brock",
      "descricao": "Líder de ginásio do tipo Pedra nos jogos Pokémon e companheiro de viagem de Ash no anime."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Antes de viajar com Ash no anime, Brock comandava um ginásio do tipo Pedra. Em que cidade de Kanto fica esse ginásio?",
    "resposta": "Pewter",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Brock",
      "https://bulbapedia.bulbagarden.net/wiki/Pewter_City"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Brock",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pewter_City",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Torre Pokémon",
      "descricao": "Torre que serve de cemitério de pokémon, assombrada por fantasmas, nos jogos Pokémon Red e Blue."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, o jogador enfrenta fantasmas na Torre Pokémon, um cemitério de pokémon. Que cidade abriga essa torre?",
    "resposta": "Lavender",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Tower",
      "https://bulbapedia.bulbagarden.net/wiki/Lavender_Town"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Tower",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lavender_Town",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Equipe Rocket",
      "descricao": "Organização criminosa da franquia Pokémon, representada no anime pela dupla Jessie e James e pelo Meowth falante."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No anime, o trio da Equipe Rocket que persegue o Pikachu de Ash é formado por Jessie, James e qual pokémon que fala?",
    "resposta": "Meowth",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Rocket_trio",
      "https://en.wikipedia.org/wiki/Team_Rocket"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Rocket_trio",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Team_Rocket",
        "situacao": "ok",
        "texto": "Team Rocket (Japanese: ロケット団, Hepburn: Roketto-dan; Japanese: [ɾo̞ke̞t̚to̞ dã̠ɴ]) is a fictional crime syndicate in the Pokémon franchise. Team Rocket is the primary antagonist in the original Pokémon video games Red, Green, and Blue, as well as in the long-running Pokémon anime TV-series. In the latter, Team Rocket is primarily represented through the trio of characters Jessie, James, and Meowth,\n[…]\nIn the long-running Pokémon anime series, a trio of Team Rocket grunts Jessie (ムサシ, Musashi), James (コジロウ, Kojirō), and Meowth (ニャース, Nyarth) are major secondary characters. The three were the primary antagonists of the anime series, where each episode they attempt to kidnap Ash Ketchum's Pikachu.\n[…]\nJessie and James originally had an Ekans and a Koffing as their signature Pokémon, respectively, and the trio were later joined by a Wobbuffet as one of their only major recurring Pokémon as the series progressed. As the Pokémon series evolved, the Team Rocket trio uses an increasingly large number of vehicles and mecha. Most notably, they travel in a Meowth-shaped hot air balloon throughout the show, and use a Gyarados-shaped submarine in its early seasons.\n[…]\nTeam Rocket is the central antagonist in the 2000 stageplay Pokémon Live!, in which Jessie, James, and Meowth successfully steal Ash Ketchum's Pikachu and use it to train Giovanni's Mewtwo. Team Rocket characters additionally frequently appear on cards in the Pokémon Trading Card Game, most notably in the Team Rocket expansion released in 2000.\n[…]\nThe LGBT community largely embraced Team Rocket's queercoding, interpreting them as bisexual drag artists. Blaustein was inspired by Meowth-focused episode \"Go West, Young Meowth\" to come out and transition as a transgender woman, a friend of her later metaphorically describing the character as \"a human trapped in a Pokémon's body.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Equipe_Rocket",
        "situacao": "ok",
        "texto": "A Equipe Rocket, conhecido em inglês como Team Rocket (japonês: ロケット団, Hepburn: Roketto-dan; [ɾo̞ke̞t̚to̞ dã̠ɴ]), é uma organização criminosa fictícia da franquia Pokémon. Ela é a principal antagonista nos jogos originais de Pokémon Red, Green e Blue, bem como na longa série de anime Pokémon. Nesta última, a Equipe Rocket é representada principalmente pelo trio de personagens Jessie, James e Meowt\n[…]\nNa longa série de anime Pokémon, um trio de recrutas da Equipe Rocket, Jessie (ムサシ, Musashi), James (コジロウ, Kojirō) e Meowth (ニャース, Nyarth), são personagens secundários importantes. Os três eram os principais antagonistas da série, onde em cada episódio tentavam sequestrar o Pikachu de Ash Ketchum.\n[…]\nA Equipe Rocket é a principal antagonista na peça teatral de 2000, Pokémon Live!, na qual Jessie, James e Meowth roubam com sucesso o Pikachu de Ash Ketchum e o usam para treinar o Mewtwo de Giovanni. Os personagens da Equipe Rocket também aparecem frequentemente em cartas do Pokémon Trading Card Game, principalmente na expansão da Equipe Rocket lançada em 2000.\n[…]\nTanto nos jogos quanto no anime, a Equipe Rocket é considerada uma das melhores vilãs da franquia Pokémon. Chris Carter, do Destructoid, chamou a equipe de dublagem inglesa de Jessie, James e Meowth (Lillis, Stuart e Blaustein) de \"um dos melhores trabalhos da série\".\n[…]\nO livro Anime Classics Zettai!: 100 Must-See Japanese Animation Masterpieces analisa a Equipe Rocket como os antagonistas do anime, que na verdade proporcionam alívio cômico através dos personagens Jessie e James, com Meowth retratado como um \"gato esperto\" que se destaca entre os outros Meowth. O livro também menciona Jessie, que possui um charme irresistível, como a líder acima de James.\n[…]\nO Fandom Post disse que Jessie e James eram o \"Melhor Casal de Vilões\" devido ao seu trabalho árduo contínuo, bem como interações ao longo de vários episódios.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Trio dos lagos",
      "descricao": "Trio de pokémon lendários de Sinnoh, formado por Uxie, Mesprit e Azelf, que habitam três grandes lagos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Diamond e Pearl, cada um dos três grandes lagos de Sinnoh abriga um lendário. Uxie e Mesprit são dois deles. Qual é o terceiro?",
    "resposta": "Azelf",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lake_guardians"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lake_guardians",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Feras lendárias de Johto",
      "descricao": "Trio de pokémon lendários da segunda geração, formado por Raikou, Entei e Suicune, ressuscitados por Ho-Oh."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Segundo a lenda de Johto, Ho-Oh ressuscitou três pokémon mortos no incêndio de uma torre. Suicune é um deles. Quais são os outros dois?",
    "resposta": "Raikou e Entei",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Legendary_beasts",
      "https://bulbapedia.bulbagarden.net/wiki/Burned_Tower"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Legendary_beasts",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Burned_Tower",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Kyurem",
      "descricao": "Pokémon lendário dos tipos Dragão e Gelo da quinta geração, que pode se fundir a Reshiram ou Zekrom."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Black 2 e White 2, o dragão de gelo Kyurem pode se fundir a Reshiram ou a qual outro dragão lendário?",
    "resposta": "Zekrom",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kyurem_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kyurem_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Pokémon X e Y",
      "descricao": "Par de jogos Pokémon da sexta geração, lançado em 2013 para o Nintendo 3DS e ambientado na região de Kalos."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em Pokémon X e Y, o jogador escolhe o inicial entre Chespin, de planta, Froakie, de água, e qual pokémon de fogo?",
    "resposta": "Fennekin",
    "distratores": [
      "Litten",
      "Chimchar",
      "Fuecoco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_X_and_Y",
      "https://bulbapedia.bulbagarden.net/wiki/Starter_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_X_and_Y",
        "situacao": "ok",
        "texto": "Pokémon X and Pokémon Y are 2013 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the sixth generation of the main Pokémon game series. First announced in January 2013 by Nintendo president Satoru Iwata through a Nintendo Direct, Pokémon X and Pokémon Y were released worldwide in October 2013\n[…]\nJoining the previous generations of Pokémon are all new species, such as the new Starter Pokémon; Chespin, Fennekin and Froakie, and the Legendary Pokémon Xerneas, Yveltal and Zygarde. The player can choose from one of the classic starter Pokémon from Pokémon Red and Blue later on in the game. The new Fairy-type is introduced for both new and old Pokémon, and it is the first new type added to the series since Pokémon Gold and Silver.\n[…]\nReceiving either Chespin, Fennekin or Froakie as their Starter Pokémon from Tierno, the player begins their adventure. Along the way, they learn of Pokémon Gyms and receive their first badge for defeating Viola, the Santalune City Gym Leader. Thereafter, they encounter Sina and Dexio, assistants of Sycamore, who brings them to the professor himself; however, once in Lumiose City they discover the area to be suffering from a partial power outage.\n[…]\nAt the time, they were the fastest-selling 3DS titles in the Americas, but were later surpassed by Pokémon Sun and Moon. Within three months of release, by December 2013, the games were the best-selling titles for the 3DS with 11.61 million copies sold worldwide. They remained at the top through at least 2016, before being outsold by Mario Kart 7 in 2017.\n[…]\nAs of 31 March 2023, the games have sold 16.68 million units worldwide, making them the second best-selling games for the Nintendo 3DS behind Mario Kart 7 and just ahead of Pokémon Sun and Moon."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Starter_Pok%C3%A9mon",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_X_e_Y",
        "situacao": "ok",
        "texto": "Pokémon X e Y (ポケットモンスター X・Y, Poketto Monsutā Ekkusu & Wai; Monstros de Bolso Xis & Ípsilon) são dois jogos eletrônicos de RPG de 2013, produzidos pela Game Freak e publicados pela The Pokémon Company e Nintendo para o Nintendo 3DS, sendo os jogos mais vendidos do console, com 27 milhões de cópias vendidas. São os primeiros títulos da sexta geração da série Pokémon.\n[…]\nJuntando-se às gerações anteriores de Pokémon estão todas as novas espécies, como os novos Pokémon iniciais; Chespin, Fennekin e Froakie, e os Pokémon que são, dentro do mundo fictício Pokémon, descritos como Pokémon lendários, nomeadamente Xerneas, Yveltal e Zygarde. Os jogadores também poderão escolher um dos clássicos Pokémon iniciais de Pokémon Red e Blue posteriormente no jogo.\n[…]\nO Super Training apresenta vários minijogos que ajudam a construir as estatísticas básicas do Pokémon do jogador, que por sua vez desbloqueia bolsas de treinamento que podem ser usadas pelo Pokémon para ficar mais forte por conta própria.\n[…]\nTodos foram chamados para conhecer o Professor Sycamore, que é o principal professor da região de Kalos em Lumiose City, a principal cidade de Kalos. Recebendo Chespin, Fennekin ou Froakie como seu Pokémon inicial de Tierno, o jogador começa sua aventura. Ao longo do caminho, eles aprendem sobre os ginásios Pokémon e recebem sua primeira medalha por derrotar Viola, a líder da academia da cidade de Santalune.\n[…]\nEle também elogiou o ritmo mais rápido do jogo inicial, com X e Y fornecendo uma grande variedade de Pokémon para capturar na primeira hora de jogo. Enquanto crítico Kyle Hilliard de Game Informer achou as adições de jogabilidade do título principalmente positivas, \"[tornando] tudo mais convidativo, atraente e divertido\", a revista também sentiu que no final das contas eles não \"quebraram o molde\" do que os jogadores esperavam da franquia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Pokémon Black e White",
      "descricao": "Par de jogos Pokémon da quinta geração, lançado em 2010 para o Nintendo DS e ambientado na região de Unova."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Ao contrário do que o nome sugere, o dragão lendário estampado na capa de Pokémon Black tem qual cor?",
    "resposta": "Branca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_and_White",
      "https://bulbapedia.bulbagarden.net/wiki/Reshiram_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_and_White",
        "situacao": "ok",
        "texto": "Pokémon Black Version and Pokémon White Version are 2010 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS. They are the first installments in the fifth generation of the Pokémon video game series. First released in Japan on 18 September 2010, they were later released in Europe, North America and Australia in March 2011. Sequels \n[…]\nPokémon Black and White were released in Japan on 18 September 2010. They were later released in Europe on 4 March 2011, in North America on 6 March 2011, and in Australia on 10 March 2011.\n[…]\nJeremy Parish of Retronauts criticized Black and White, commenting that he grew tired of it shortly after starting and feeling like it was too similar to all previous Pokémon games. He further went on to say that EVs and IVs, invisible mechanics in the game, are not necessarily beneficial. By contrast, he noted that it would be great to new players.\n[…]\nUpon its release in the UK, White and Black took the #1 and #2 spots respectively in the UK overall sales charts, with White becoming the second fastest-selling DS game ever in the UK after Professor Layton and Pandora's Box, selling 13,000 more copies than Black. Combined, their sales became Nintendo's third biggest ever launch in the UK, behind Wii Fit and Mario Kart Wii, and the biggest opening weekend ever for a pair of Pokémon titles.\n[…]\nIn April 2011, Nintendo's financial earnings report confirmed that Pokémon Black and White had sold 11.5 million copies worldwide, making them the highest selling DS games for Nintendo in the 2010–11 financial year, and third overall, behind only the Wii games, Wii Sports and Wii Sports Resort. As of September 2017, the games' combined sales have reached 15.64 million.\n[…]\nSequels to Black and White, Pokémon Black 2 and Pokémon White 2, were released for the Nintendo DS in 2012."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Reshiram_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Black_e_White",
        "situacao": "ok",
        "texto": "Pokémon Black Version e White Version (ポケットモンスターブラック・ホワイト, Poketto Monsutā Burakku・Howaito; Monstros de Bolso Black・White, Black e White significam Preto e Branco quando traduzidos do inglês para o português, Preto e Branco em japonês seria 黒・白, Kuro・Shiro) são jogos eletrônicos de RPG lançados em 2010, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo lançados para o \n[…]\nAs pretas têm mais batalhas rotativas do que as triplas, e o oposto é verdadeiro nas brancas. Outra introdução são os Movimentos de Combinação: um Pokémon inicial pode aprender um de três movimentos, e usá-los juntos em batalhas duplas ou triplas produz ataques mais poderosos. Na selva, caminhar pela grama alta de cor mais escura pode desencadear batalhas duplas contra Pokémon selvagens, em vez de apenas batalhas individuais com grama de cor mais clara.\n[…]\nEm 28 de maio de 2010, os sites oficiais de Pokémon em japonês e inglês revelaram os nomes e designs dos dois maiores Pokémon lendários desses jogos, que também servem como mascotes da versão do jogo: o Pokémon White Yang Reshiram para Pokémon Black e o Pokémon Yin Black Zekrom para Pokémon White.\n[…]\nOfficial Nintendo Magazine referiu-se a eles como \"Um belo refinamento de uma grande série [...] o melhor Pokémon de todos os tempos.\" Nintendo Power expressou que \"o mais recente par de aventuras da série Pokémon é tão viciante como sempre.\" Edge reconheceu que \"onde o próximo para Pokémon Black e White não sugerem nenhuma resposta, mas eles nos lembram porque nos importamos em primeiro lugar.\"\n[…]\nAlgumas pessoas criticaram os designs dos Pokémon Geração V, dizendo que alguns deles eram bons, mas muitos não tinham inspiração.\n[…]\nSequências de Black e White, Pokémon Black 2 e White 2, foram lançadas para o Nintendo DS em 2012. São as primeiras e únicas, até à data, sequências da franquia da série principal.\n[…]\nPokemon Black and White",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Pokémon Yellow",
      "descricao": "Jogo Pokémon de 1998 para o Game Boy, versão especial da primeira geração inspirada no anime."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Yellow, inspirado no anime, que pokémon o jogador recebe como inicial e vê andando atrás de si pelo mapa?",
    "resposta": "Pikachu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Yellow",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Yellow_Version"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Yellow",
        "situacao": "ok",
        "texto": "Pokémon Red Version and Pokémon Blue Version are popular 1996 role-playing video games (RPGs) developed by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon video game series and were first released in Japan as Pocket Monsters Red and Pocket Monsters Green, followed by the special edition Pocket Monsters Blue later that year.\n[…]\nThe same versions were later released in Australia sometime later in 1998 and in Europe on October 5, 1999, being the second-to-last video game released for the original Game Boy in Europe with Pokemon Yellow Version: Special Pikachu Edition being the last.\n[…]\nTwo years after Red, Green and Blue Nintendo released Pokémon Yellow, an enhanced version of Red and Blue, in Japan in 1998, and in North America and Europe in 1999 and 2000. The game was designed to resemble the Pokémon anime series, with the player receiving a Pikachu as their starter Pokémon and their rival starting with an Eevee. Some non-player characters resemble those from the anime, including Team Rocket's Jessie and James.\n[…]\nA Pikachu-themed Game Boy Color bundle was released in North America in October 1999. To promote the release of Pokémon Yellow, Volkswagen and Nintendo created a yellow Volkswagen New Beetle with features inspired by Pikachu. Nintendo World Report listed Pokémon Yellow as one of the notable handheld releases in 1999.\n[…]\nPokémon: Let's Go, Pikachu! and Pokémon: Let's Go, Eevee! are enhanced remakes of Pokémon Yellow Version, released in November 2018 for the Nintendo Switch. They were aimed at newcomers to the Pokémon series, and incorporate mechanics from Pokémon Go. The games take place in the Kanto region and include only the original 151 Pokémon from the first generation of Pokémon.\n[…]\nOfficial website for Pokémon Blue (in Japanese)\n[…]\nOfficial website for Pokémon Yellow (in Japanese)"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Yellow_Version",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Red_%26_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version e Pokémon Blue Version, lançados no Brasil oficialmente como Pokémon Versão Vermelho e Pokémon Versão Azul, são dois jogos eletrônicos de RPG de 1996, desenvolvidos pela Game Freak e publicados pela Nintendo para o console portátil Game Boy. São os primeiros jogos eletrônicos da série Pokémon.\n[…]\nPokémon Yellow, uma versão inspirada no anime da franquia, foi lançada no Japão em 1998 e em outras regiões em 1999 e 2000. As recriações de Red e Green, Pokémon FireRed e LeafGreen, foram lançados para o Game Boy Advance em 2004. Red, Blue e Yellow — além de Green no Japão — foram relançados no serviço Virtual Console de Nintendo 3DS em 2016 como uma comemoração do 20º aniversário da franquia.\n[…]\nPara obter todas as 151 criaturas, os jogadores devem capturar, evoluir e negociar os Pokémon entre si.\n[…]\nAo visitar as cidades da região, o jogador encontrará estabelecimentos especiais chamados de ginásios. Dentro desses edifícios estão os Líderes de Ginásio, cada um dos quais o jogador deve derrotar em uma batalha Pokémon para obter um total de oito insígnias de ginásio. Assim que os emblemas são adquiridos, o jogador recebe permissão para entrar na Liga Indigo, que consiste nos melhores treinadores Pokémon da região.\n[…]\nKen Sugimori, um artista e amigo de longa data de Tajiri, chefiou o desenvolvimento de desenhos e designs do Pokémon, trabalhando com uma equipe de menos de dez pessoas que conceberam os vários designs para todos os 151 Pokémon, incluindo Rhydon, o primeiro Pokémon produzido, assim como os posteriores Lapras e Clefairy. Atsuko Nishida criou os designs para Pikachu, Bulbasaur, Charmander, Squirtle e muitos outros.\n[…]\nPokémon Yellow\n[…]\nPokémon Gold & Silver\n[…]\nPokémon FireRed e LeafGreen",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Gyarados",
      "descricao": "Pokémon dos tipos Água e Voador, número 130 da Pokédex Nacional."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Gold e Silver, no Lago da Fúria, o jogador encontra um Gyarados brilhante, de cor diferente do normal. Que cor é essa?",
    "resposta": "Vermelho",
    "distratores": [
      "Dourado",
      "Verde",
      "Preto"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Red_Gyarados"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Red_Gyarados",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Whitney",
      "descricao": "Líder de ginásio do tipo Normal da cidade de Goldenrod, nos jogos Pokémon Gold e Silver."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Whitney, líder do ginásio de Goldenrod em Gold e Silver, ficou temida pelos jogadores por causa de qual pokémon dela, que rola sem parar?",
    "resposta": "Miltank",
    "distratores": [
      "Wigglytuff",
      "Snorlax",
      "Tauros"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Whitney"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Whitney",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Snorlax",
      "descricao": "Pokémon do tipo Normal, número 143 da Pokédex Nacional."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, um Snorlax adormecido bloqueia a estrada. Que objeto o jogador precisa usar para acordá-lo?",
    "resposta": "Poké Flute (Poké Flauta)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Flute",
      "https://en.wikipedia.org/wiki/Snorlax"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Flute",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Snorlax",
        "situacao": "ok",
        "texto": "Snorlax ( ), known in Japan as Kabigon (Japanese: カビゴン), is a Pokémon species in Nintendo and Game Freak's Pokémon franchise. Created by Ken Sugimori, Snorlax first appeared in the Game Boy video game Pokémon Red and Blue, and subsequent sequels, later appearing in various merchandise, spin-off titles, and animated and printed adaptations of the franchise, as well as the mascot of mobile game Poké\n[…]\nSnorlax is a species of fictional creatures called Pokémon created for the Pokémon media franchise. Developed by Game Freak and published by Nintendo, the Japanese franchise began in 1996 with the video games Pokémon Red and Green for the Game Boy, which were later released in North America as Pokémon Red and Blue in 1998. In these games and their sequels, the player assumes the role of a Trainer whose goal is to capture and use the creatures' special abilities to combat other Pokémon.\n[…]\nSnorlax's most notable role in the Pokémon games has been that of an inadvertent roadblock. In Pokémon Red, Blue, Yellow, and their remakes, the player must obtain the Poké Flute in order to wake up two Snorlax that block various routes in-game. Snorlax reprises this role in Pokémon Gold, Silver, their \"upper version\" and remakes. In these games, the player must play the radio's Poké Flute channel in front of Snorlax in order to awaken it.\n[…]\nAlthough there is only one Snorlax available to catch, another is used by Red, the protagonist of Red and Blue who acts as these games' final boss. In Pokémon XD: Gale of Darkness, a pre-evolution of Snorlax named Munchlax was introduced; however, Munchlax remained unobtainable until the release of Pokémon Diamond and Pearl. In Pokémon Sun, Moon and their \"upper versions\", Snorlax is among the handful of Pokémon to possess a unique Z-Move, a powerful one-time use attack.\n[…]\nSnorlax  at Bulbapedia, a Pokémon wiki\n[…]\nSnorlax on Pokemon.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Snorlax",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA primeira geração (Geração I) da franquia Pokémon apresentou 151 criaturas fictícias introduzidas em 1996 no jogo de Game Boy, Pocket Monsters Red, Green e Blue (conhecidos como Pokémon Red, Green e Blue fora do Japão). Posteriormente, Pokémon Yellow e Blue foram lançados no Japão.\n[…]\nPokémon são uma espécie de criaturas fictícias criadas para a franquia de mídia Pokémon. Desenvolvida pela Game Freak e publicada pela Nintendo, a franquia japonesa começou em 1996 com os jogos Pokémon Red e Green para Game Boy, que foram posteriormente lançados na América do Norte como Pokémon Red e Blue em 1998. Nesses jogos e suas sequências, o jogador assume o papel de um Treinador cujo objetivo é capturar e usar as habilidades especiais das criaturas para combater outros Pokémon.\n[…]\nQuando os jogos foram localizados para o público de língua inglesa como Red e Blue, a Nintendo of America deu às várias espécies de Pokémon \"nomes inteligentes e descritivos\" relacionados à sua aparência ou características, como forma de torná-los mais identificáveis ​​para as crianças americanas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Exeggutor",
      "descricao": "Pokémon palmeira da primeira geração, evolução de Exeggcute, que tem uma forma regional em Alola."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Sun e Moon, o Exeggutor de Alola, uma palmeira de pescoço altíssimo, tem qual tipo além de Planta?",
    "resposta": "Dragão",
    "distratores": [
      "Psíquico",
      "Terra",
      "Voador"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Exeggutor_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Exeggutor_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Raichu",
      "descricao": "Pokémon do tipo Elétrico, evolução de Pikachu, número 26 da Pokédex Nacional."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Raichu troca o pika de Pikachu por rai, palavra japonesa que significa o quê?",
    "resposta": "Trovão",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Raichu_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Raichu_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Eevee",
      "descricao": "Pokémon do tipo Normal, número 133 da Pokédex Nacional."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Eevee imita a pronúncia, em inglês, das duas primeiras letras de qual palavra, que resume a grande marca desse pokémon?",
    "resposta": "Evolution, evolução",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Eevee_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Eevee"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Eevee_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Eevee",
        "situacao": "ok",
        "texto": "Eevee ( ), known in Japan as Eievui (Japanese: イーブイ, Hepburn: Ībui), is a Pokémon species in the Pokémon franchise. Created by Satoshi Tajiri and designed by Motofumi Fujiwara, it first appeared in the video games Pokémon Red and Blue. It later appeared in a variety of merchandise, spin-off titles, and both animated and printed adaptations of the franchise. It is also the game mascot and starter P\n[…]\nEevee has also been a part of various Nintendo events, which allow the players to obtain special Pokémon that are being distributed (one example in Eevee's case was a shiny Eevee distribution). Eevee was also one of the several first generation Pokémon to get a special DVD with episodes starring itself during the tenth anniversary of the Pokémon franchise. Eevee and its evolutions were also featured on the side of a jet.\n[…]\nWhile Eevee was not originally promoted as heavily as other Pokémon, Eevee's popularity has grown throughout the years, and it is now one of the series' most iconic Pokémon. Eevee and its evolutions have received generally positive reception, and it was noted as one of the most popular Pokémon at the offices of The Pokémon Company. Japanese fans of the series have coined November 21 as \"Eevee Day\" due the pronunciation being similar to Eevee's Japanese name Eievui.\n[…]\nEevee's evolutions and adaptability in the game's lore were also highlighted as reflecting the real-world concept of evolution, and it has been cited as a surprisingly realistic interpretation of the phenomenon. Joshua Yel, writing for IGN, highlighted Eevee's popularity and universal appeal as being a result of its appealing design. The versatility of the Pokémon in game, as well as its cute design, were cited as reasons it was such an enduring Pokémon among fans of the series.\n[…]\nEevee  at Bulbapedia, a Pokémon wiki\n[…]\nEevee on Pokemon.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eevee",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 151 Pokémon da Geração I em sua sequência do Pokédex Nacional - uma enciclopédia eletrônica no jogo, que fornece várias informações sobre números de Pokémon. O primeiro Pokémon, Bulbassauro, numerado de 001 e o último de Mew, numerado de 151. Formas alternativas que resultam em mudanças de tipo são incluídas por conveniência. Mega evoluções e formas regionais são incluídas nas páginas da geração em que foram introduzidas. MissingNo., uma falha, também está nesta lista.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nEmbora alguns Pokémon tenham sido atribuídos a certos desenvolvedores ao longo dos anos, como Atsuko Nishida para Pikachu e Motofumi Fujiwara para Eevee e suas evoluções, a Game Freak evitou atribuir muitos Pokémon a indivíduos específicos para manter a sensação de que todos os desenvolvedores estiveram envolvidos em sua criação.\n[…]\nDurante o desenvolvimento, surgiram problemas com o espaço nos cartuchos digitais, e muitos Pokémon foram removidos. Especificamente, vários Pokémon que possuíam uma linha evolutiva de três estágios foram alterados para evoluir apenas uma vez, resultando na remoção da evolução final planejada para Pikachu, chamada \"Gorochu\", do jogo final.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Charizard",
      "descricao": "Pokémon dos tipos Fogo e Voador, número 6 da Pokédex Nacional."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Charizard tem o nome formado por char, chamuscar em inglês, e por qual animal, também em inglês?",
    "resposta": "Lizard, lagarto",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Charizard"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Charizard",
        "situacao": "ok",
        "texto": "Charizard ( ), known in Japan as Lizardon (Japanese: リザードン, Hepburn: Rizādon), is a Pokémon in Nintendo and Game Freak's Pokémon franchise. Created by Atsuko Nishida, Charizard first appeared in the video games Pokémon Red and Blue (Pokémon Red and Green in Japan) and subsequent sequels. They have later appeared in various merchandise, spinoff titles and animated and printed adaptations of the fra\n[…]\nOriginally called \"Lizardon\" in Japanese, Nintendo decided to give the various Pokémon species \"clever and descriptive names\" related to their appearance or features when translating the game for western audiences as a means to make the characters more relatable to American children. As a result, the species was renamed \"Charizard\", a portmanteau of the words \"charcoal\" or \"char\" and \"lizard\".\n[…]\nsleek, powerful, and utterly destructive\", Charizard has been noted as one of the franchise's \"most popular\" characters. VG247 writer Nadia Oxford highlighted Charizard's design as helping to endear her to the series, further stating that its \"iconic\" design and draconic appearance helped make the series popular with children. She also praised the Mega Evolution mechanic for revitalizing Charizard, stating that it \"helped refresh this ancient Pokemon mascot in our hearts and minds.\"\n[…]\nThe book Pikachu's Global Adventure: The Rise and Fall of Pokémon cited Charizard as \"popular\" with older male children who tended to be drawn to \"tough or scary\" characters, and compared the character's evolution from Charmander into Charizard with the loss of \"cuteness\" as one leaves childhood.\n[…]\nDespite Charizard's popularity, Laura Gray of Screen Rant responded negatively to Charizard's prevalence in the series, citing that its frequent re-appearances alongside series mascot Pikachu took focus away from other popular Pokémon in the series.\n[…]\nCharizard  at Bulbapedia, a Pokémon wiki\n[…]\nCharizard on Pokemon.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Charizard",
        "situacao": "ok",
        "texto": "Charizard, conhecido como Lizardon (リザードン, Rizadon) no Japão, é uma criatura fictícia da franquia Pokémon que pertence a Nintendo e Game Freak. Criado por Ken Sugimori, Charizard apareceu pela primeira vez nos jogos Pokémon Red e Blue e subsequentes sequelas. Eles apareceram também em várias mercadorias, títulos de spinoff e adaptações animadas e impressas da franquia.\n[…]\nCharizard também serviu como mascote das capas de Pokémon Red e FireRed e faz uma aparição nas boxarts de Pokémon Stadium, Pokémon Ranger, Pokémon Mystery Dungeon: Rescue Team Red e Pokémon Mystery Dungeon: Explorers of Sky.\n[…]\nCharizard foi uma das várias opções de personagens concebidas pela equipe de desenvolvimento de personagens do Game Freak e finalizada por Ken Sugimori para a primeira geração de jogos Pocket Monsters Red e Green, localizados fora do Japão como Pokémon Red e Blue. Originalmente chamado de \"Lizardon\" no Japão, o personagem juntamente com vários outros da franquia acabou tendo seu nome alterado após uma decisão da Nintendo afim de tornar os personagens mais memoráveis entre as crianças americanas.\n[…]\nComo resultado, o Pokémon acabou sendo renomeado como \"Charizard\", um Pokémon de coloração vermelha, uma combinação das palavras \"charcoal\" (carvão) e \"lizard\" (lagarto). Durante uma entrevista, o presidente da companhia Pokémon Tsunekazu Ishihara indicou que era esperado que Charizard se tornasse popular com audiências norte-americanas por causa de sua preferência para personagens fortes e poderosos.\n[…]\nEnquanto suas pré-evoluções Charmander e Charmeleon são criaturas semelhantes a lagartos terrestres, Charizard se assemelha a um grande tradicional dragão europeu. Apesar da semelhança, Charizard é explicitamente um Pokémon dos tipos Fogo e Voador, e não um tipo Dragão, exceto em sua forma \"Mega Charizard X\" - no entanto, ele pode aprender ataques do tipo Dragão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Corviknight",
      "descricao": "Pokémon do tipo Voador/Aço da oitava geração, número 823 da Pokédex Nacional, um corvo gigante de armadura."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do corvo de armadura Corviknight junta corvus, corvo em latim, com uma palavra inglesa que significa o quê?",
    "resposta": "Cavaleiro",
    "distratores": [
      "Rei",
      "Guerreiro",
      "Escudo"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Corviknight_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Corviknight_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Gary Carvalho",
      "descricao": "Neto do Professor Carvalho e rival de Ash Ketchum no anime Pokémon, chamado Shigeru no Japão."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Japão, Gary, o neto do Professor Carvalho e rival de Ash, tem qual prenome, uma homenagem ao criador de Mario?",
    "resposta": "Shigeru",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Gary_Oak"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Gary_Oak",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Cubone",
      "descricao": "Pokémon do tipo Terra, número 104 da Pokédex Nacional."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a Pokédex, por que o pequeno Cubone vive com um crânio cobrindo a cabeça?",
    "resposta": "É o crânio da mãe morta",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Cubone_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cubone_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Butterfree",
      "descricao": "Pokémon borboleta do tipo Inseto e Voador da primeira geração, número 12 da Pokédex Nacional."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Num episódio famoso do anime, por que Ash se despede do seu Butterfree, um dos primeiros pokémon que capturou?",
    "resposta": "Para partir com uma parceira",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/EP021",
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Butterfree"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/EP021",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Butterfree",
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
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, encontrar o pokémon defeituoso MissingNo., na costa da ilha Cinnabar, tinha qual efeito curioso na mochila do jogador?",
    "resposta": "Multiplicava o sexto item",
    "fonte": [
      "https://en.wikipedia.org/wiki/MissingNo.",
      "https://bulbapedia.bulbagarden.net/wiki/MissingNo."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/MissingNo.",
        "situacao": "ok",
        "texto": "MissingNo. ( ; Japanese: けつばん, Hepburn: Ketsuban) is a glitch and an unofficial Pokémon species found in the video games Pokémon Red and Blue. Due to the programming of certain in-game events, players can encounter MissingNo. via a glitch. Encountering MissingNo. causes graphical anomalies and changes gameplay by increasing the number of items in the sixth entry of the player's inventory by 128.\n[…]\nDeveloped by Game Freak and published by Nintendo, the Japanese franchise began in 1996 with the video games Pokémon Red and Green for the Game Boy, which were later released in North America as Pokémon Red and Blue in 1998.\n[…]\nThe glitch was not removed from the 2016 re-releases of Pokémon Red and Blue on the Nintendo 3DS Virtual Console, so players can still encounter MissingNo. in these versions of the games.\n[…]\nA player can encounter a MissingNo. in Pokémon Red and Blue by following a series of steps. First, the player watches an in-game tutorial for Pokémon capture in the game's Viridian City location. Second, the player uses a Pokémon with the \"Fly\" move to instantly travel to the game's Cinnabar Island location. Finally, the player uses a Pokémon with the \"Surf\" move to travel up and down on the eastern shore of the island until a MissingNo. appears.\n[…]\nAs with any wild Pokémon, players may flee from, fight, or capture MissingNo. After an encounter with MissingNo., the quantity of the sixth item in the player's inventory is increased by 128, and the game's Hall of Fame Pokémon gallery becomes glitched. Temporary graphical glitches may also occur, which can be removed by viewing the statistics page for another non-glitched Pokémon or resetting the console.\n[…]\nis also referenced in the game The Binding of Isaac: Rebirth as \"Missing No.\", an item that will randomize other items found on each level of the game as well as their attributes while held.\n[…]\nMissingNo. at Bulbapedia, a Pokémon wiki"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/MissingNo.",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/MissingNo.",
        "situacao": "ok",
        "texto": "MissingNo. (けつばん, Ketsuban), ou MissingNO, é uma espécie de Pokémon encontrada nos jogos Pokémon Red e Blue e Yellow. O Pokémon MissingNo. (\"Missing Number\", ou \"Número Desconhecido\") é utilizado pela Game Freak como tratador de exceção, e aparece quando o jogo tenta acessar informações sobre uma espécie de Pokémon que não existe. Devido à programação de três eventos no jogo, jogadores conseguiam \n[…]\nEncontrar o MissingNo. causava falhas gráficas e na replicação em massa do sexto item no menu de itens do jogador; este último efeito resultou na cobertura do glitch por guias de estratégia e revistas especializadas em jogos. A IGN comentou sobre a aparição do MissingNo. em Pokémon Red e Blue como um dos mais famosos glitches de videogame. Os fãs da série tentaram incluir o MissingNo. no cânone do universo Pokémon, o que gerou debates sobre o assunto.\n[…]\nO segundo fator é a demonstração do velho no tutorial, que armazena o nome do jogador no buffer de dados temporariamente. Isto faz com que o jogo acesse os valores hexadecimais do nome do jogador para os encontros com Pokémon nas Ilhas de Cinnabar e Seafoam. O terceiro fator é o sistema de tratamento de exceções do jogo: se o jogo seleciona um valor do buffer de dados que não corresponde a um Pokémon existente, uma sub-rotina é desencadeada, o que faz com que um Pokémon chamado MissingNo.\n[…]\nAssim como com qualquer outro Pokémon, o jogador pode enfrentá-lo, capturá-lo, ou até mesmo fugir dele. Depois de se encontrar com MissingNo., a quantidade do sexto item no menu de itens do jogador é elevada a 128, e a galeria do Hall da Fama Pokémon é corrompida permanentemente. Glitches gráficos temporários também podem ocorrer, que podem ser removidos visualizando a página de estatísticas de outro Pokémon ou reinicializando o console. Um MissingNo.\n[…]\nMissingNo. na Nintendo.com\n[…]\nMissingNo. na Bulbapedia, um wiki de Pokémon em inglês",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Pikachu Illustrator",
      "descricao": "Carta promocional rara do card game Pokémon, distribuída no Japão no fim dos anos noventa a vencedores de concursos de ilustração."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que a carta Pikachu Illustrator, uma das mais raras do card game, foi entregue a pouquíssimas pessoas no Japão, no fim dos anos noventa?",
    "resposta": "Era prêmio de concurso de desenho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pikachu_Illustrator"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pikachu_Illustrator",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Pedra da Lua",
      "descricao": "Pedra evolutiva dos jogos Pokémon que faz evoluir pokémon como Clefairy, Jigglypuff, Nidorino e Nidorina."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que Clefairy, Jigglypuff e Nidorino têm em comum na hora de evoluir?",
    "resposta": "Evoluem com a Pedra da Lua",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Moon_Stone"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Moon_Stone",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Wobbuffet",
      "descricao": "Pokémon do tipo Psíquico, número 202 da Pokédex Nacional."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No anime, o que o desastrado Wobbuffet e a cobra Arbok têm em comum?",
    "resposta": "Pertencem à Jessie, da Equipe Rocket",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Jessie%27s_Wobbuffet",
      "https://bulbapedia.bulbagarden.net/wiki/Jessie%27s_Arbok"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jessie%27s_Wobbuffet",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jessie%27s_Arbok",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Pokémon: O Filme",
      "descricao": "Primeiro filme da franquia Pokémon, em que Ash e Pikachu enfrentam o clone Mewtwo, lançado no Japão no fim dos anos noventa."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon: O Filme, em que Ash enfrenta o clone Mewtwo, estreou nos cinemas japoneses em que ano?",
    "resposta": "1998",
    "distratores": [
      "1997",
      "1999",
      "2000"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_First_Movie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_First_Movie",
        "situacao": "ok",
        "texto": "Pokémon: The First Movie is a 1998 Japanese animated fantasy adventure film directed by Kunihiko Yuyama. It is the first in the Pokémon anime film series. The film was first released in Japan on July 18, 1998, to positive reviews, with praise directed at the film's emotional impact and exploration of ethical topics such as cloning, genetic modification, and existentialism.\n[…]\nA full CGI remake of the movie, titled Pokémon: Mewtwo Strikes Back – Evolution, was released in 2019.\n[…]\nToshihiro Ono, author of Pokémon: The Electric Tale of Pikachu, created a manga version of the film. Asked by editors to draw Mewtwo's birth, he received the source material to base the manga off in April 1998 and finished the manga in May. In July of that year, a five episode radio drama titled The Birth of Mewtwo was broadcast over the five Sundays leading up to the premiere of the movie in Japan. Written by Takeshi Shudo, the drama delves into Mewtwo's origin prior to the start of the film.\n[…]\nfor Nintendo 3DS and Wii U was heralded by the tagline \"Mewtwo Strikes Back!\" in a gameplay trailer. Instead of Ichimura, Mewtwo is voiced by Keiji Fujiwara in Super Smash Bros. for Nintendo 3DS and Wii U and Super Smash Bros. Ultimate. Elements and references from the second Mewtwo in Pokémon the Movie: Genesect and the Legend Awakened are included in later games such as its Mega Evolution, Final Smash, and Boxing Ring title.\n[…]\nDuring the end credits of Pokémon the Movie: The Power of Us (2018), it was announced that a CGI remake was set to release in the following year. In December 2018, the release date of the remake was revealed as July 12, 2019. Pokémon fansite Serebii reported that the film, titled Pokémon: Mewtwo Strikes Back – Evolution, would be directed by Kunihiko Yuyama and Motonori Sakakibara.\n[…]\nPokémon: The First Movie at Rotten Tomatoes\n[…]\nPokémon: The First Movie at Box Office Mojo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_First_Movie",
        "situacao": "ok",
        "texto": "Pokémon: The First Movie: Mewtwo Strikes Back, geralmente referido como Pokémon: The First Movie, originalmente lançado como Pocket Monsters the Movie: Mewtwo Strikes Back! (劇場版ポケットモンスター ミュウツーの逆襲, Gekijōban Poketto Monsutā: Myūtsū no Gyakushū), é um filme de anime de 1998, dirigido por Kunihiko Yuyama, o diretor chefe da série de televisão Pokémon. Foi o primeiro filme da franquia Pokémon.\n[…]\nPokémon: The First Movie é a trilha sonora do primeiro filme de Pokémon lançada nos Estados Unidos em 10 de novembro de 1999. Mais tarde, foi lançado o álbum Pokémon: The First Movie Original Motion Picture Score.\n[…]\nPokémon: O Filme - Mewtwo Contra-Ataca foi exibido pela 1ª vez nos cinemas no dia 18 de julho de 1998 no Japão pela distribuição da Toho. No ano seguinte, o filme foi exibido nos Estados Unidos no dia 10 de novembro de 1999, de acordo com o licenciamento da 4Kids Entertainment e da Kids' WB. No Brasil, o filme foi exibido no dia 7 de janeiro de 2000 e em Portugal no dia 19 de março de 2000.\n[…]\nApós a exibição nos cinemas, Pokémon: O Filme - Mewtwo Contra-Ataca foi lançado no Japão em VHS no dia 12 de fevereiro de 1999, também foi lançado em DVD no dia 23 de junho de 2000. Nos Estados Unidos, foi lançado em VHS e DVD no dia 21 de março de 2000, no Brasil e em Portugal no mesmo ano pela distribuição da Warner Home Video.\n[…]\nApós os anos seguintes, foi relançado em DVD no dia 21 de setembro de 2007 no Japão, fazendo parte da coleção Pikachu the Movie Box 1998-2002. Nos Estados Unidos, foi relançado em DVD no dia 7 de abril de 2009 pela Warner Home Video, fazendo parte da coleção Pokémon: The First Three Movies. Em 28 de novembro de 2012, o filme foi remasterizado digitalmente e lançado pela 1ª vez em Blu-ray, fazendo parte da coleção Pikachu the Movie Premium Box 1998-2010.\n[…]\nPokémon: The First Movie no IMDb\n[…]\nPokémon: The First Movie (em inglês). no Box Office Mojo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.61 — 2026-10-13**
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

Uma **coleção** é um conjunto de perguntas sobre um mesmo universo, com um modo de jogo próprio (decidido em 2026-10-13). A primeira é a de **pokémon**, do **modo Pokémon** (§15).

- A pergunta da coleção tem o campo `colecao` (`"pokemon"`). O modo da coleção sorteia só as perguntas dela, de qualquer tema.
- **Exclusiva** (campo `exclusiva`): a pergunta sai **só no modo da coleção**, nunca no jogo original (Master, Trilha da Vida, Linear). As perguntas de pokémon feitas antes de 2026-10-13 continuam também no jogo original; as feitas depois são exclusivas do modo Pokémon.
- As perguntas da coleção seguem todas as regras desta Parte I: tema e subtema (os pokémon ficam em Entretenimento › Jogos Eletrônicos), âncora, saturação e fontes. Podem ser com ou sem figura.
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
