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
      "nome": "Kyogre",
      "descricao": "Pokémon lendário do tipo Água da terceira geração, número 382 da Pokédex Nacional."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Sapphire, depois de despertado pela Equipe Aqua, Kyogre se refugia numa caverna escondida em Sootopolis, onde o jogador pode capturá-lo. Como ela se chama?",
    "resposta": "Caverna da Origem",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Cave_of_Origin",
      "https://bulbapedia.bulbagarden.net/wiki/Kyogre_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cave_of_Origin",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kyogre_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Equipe Aqua",
      "descricao": "Organização vilã de Pokémon Ruby, Sapphire e Emerald que quer despertar Kyogre para expandir os mares."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Ruby e Sapphire, o esconderijo da Equipe Aqua fica numa caverna escavada à beira-mar, ao lado de qual cidade litorânea de Hoenn?",
    "resposta": "Lilycove",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Aqua_Hideout",
      "https://bulbapedia.bulbagarden.net/wiki/Lilycove_City"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Aqua_Hideout",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lilycove_City",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Equipe Galáctica",
      "descricao": "Organização vilã de Pokémon Diamond, Pearl e Platinum, liderada por Cyrus, que quer usar Dialga e Palkia para criar um novo mundo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Diamond e Pearl, o jogador invade o quartel-general da Equipe Galáctica para libertar os pokémon dos lagos. Em que cidade de Sinnoh fica esse prédio?",
    "resposta": "Veilstone",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Galactic",
      "https://bulbapedia.bulbagarden.net/wiki/Veilstone_City"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Galactic",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Veilstone_City",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Coluna Lança",
      "descricao": "Ruínas antigas no topo do Monte Coronet, em Sinnoh, onde Cyrus tenta dominar Dialga e Palkia nos jogos Pokémon Diamond, Pearl e Platinum."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Diamond e Pearl, Cyrus tenta dominar Dialga e Palkia na Coluna Lança, umas ruínas antigas no alto de qual montanha de Sinnoh?",
    "resposta": "Monte Coronet",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Spear_Pillar",
      "https://bulbapedia.bulbagarden.net/wiki/Mt._Coronet"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Spear_Pillar",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mt._Coronet",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Heatran",
      "descricao": "Pokémon dos tipos Fogo e Aço, número 485 da Pokédex Nacional."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em Diamond, Pearl e Platinum, o lendário Heatran, de fogo e aço, vive nas profundezas de que lugar de Sinnoh?",
    "resposta": "Monte Stark",
    "distratores": [
      "Monte Coronet",
      "Ilha de Ferro",
      "Caverna Turnback"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Stark_Mountain",
      "https://bulbapedia.bulbagarden.net/wiki/Heatran_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Stark_Mountain",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Heatran_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Estação Global de Trocas",
      "descricao": "Serviço dos jogos Pokémon, criado em Diamond e Pearl, que permite trocar pokémon pela internet com jogadores do mundo todo."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em Diamond e Pearl, a Estação Global de Trocas permite trocar pokémon pela internet com jogadores do mundo todo. Em que cidade de Sinnoh ela fica?",
    "resposta": "Jubilife",
    "distratores": [
      "Veilstone",
      "Hearthome",
      "Canalave"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Global_Trade_Station",
      "https://bulbapedia.bulbagarden.net/wiki/Jubilife_City"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Global_Trade_Station",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jubilife_City",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Deoxys",
      "descricao": "Pokémon mítico do tipo Psíquico da terceira geração, um alienígena que muda de forma."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Omega Ruby e Alpha Sapphire, no Episódio Delta, o jogador enfrenta o mítico Deoxys num lugar aonde chega voando nas costas de Rayquaza. Que lugar é esse?",
    "resposta": "O espaço sideral",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Delta_Episode",
      "https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Delta_Episode",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Rayquaza",
      "descricao": "Pokémon dos tipos Dragão e Voador, número 384 da Pokédex Nacional."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Emerald, o jogador desperta Rayquaza no alto do Pilar Celeste, e o dragão voa até a cidade de Sootopolis. Por que ele vai para lá?",
    "resposta": "Para apartar Groudon e Kyogre",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Rayquaza_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Emerald"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Rayquaza_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Emerald",
        "situacao": "ok",
        "texto": "Pokémon Emerald Version is a 2004 role-playing video game developed by Game Freak and published by The Pokémon Company and Nintendo for the Game Boy Advance. It was first released in Japan in 2004, and was later released internationally in 2005. It is the fifth version, after both Pokémon Ruby and Sapphire and Pokémon FireRed and LeafGreen, and is the final game of the third generation of the Poké\n[…]\nEmerald's reception was generally positive upon release. Praise was given to the addition of the Battle Frontier and for fixing story elements from Pokémon Ruby and Sapphire.\n[…]\nAlong their journey, they face both Team Magma and Team Aqua, who originally could only be faced in Ruby and Sapphire, respectively. Both have a goal to change the world they believe will benefit Pokémon—Magma desiring to expand the landmass and Aqua desiring to expand the sea—and both plan to accomplish their respective goals by summoning the Legendary Pokémon Groudon and Kyogre, respectively. Both teams make repeated efforts to alter the landscape.\n[…]\nThe player is now able to catch Kyogre and Groudon, which can be tracked by talking to the scientist in the Weather Institute.\n[…]\nShe compared Nintendo's remakes of the Pokémon games to the various Star Wars remakes.\n[…]\nEmerald launched in the top spot in Japan with 791,000 copies sold in its first week and 372,000 copies sold in its first day. It was the fourth best-selling game in Japan for 2004. It sold 1.4 million for the year and ranked behind Dragon Quest V: Hand of the Heavenly Bride, Pokémon FireRed and LeafGreen (combined), and Dragon Quest VIII: Journey of the Cursed King.\n[…]\nIts life-to-date sales totaled 6.32 million by the 2007 fiscal year. In November 2005, Nintendo Power erroneously reported that \"Total sales [from Emerald] would exceed the value of an actual emerald the size of Neptune.\" By 2021, Pokémon Emerald sold 6.80 million worldwide."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Emerald",
        "situacao": "ok",
        "texto": "Pokémon Emerald Version (ポケットモンスター エメラルド, Poketto Monsutaa Emerarudo; tradução: Monstro de Bolso Emerald, ou Esmeralda, Emerarudo é um estrangeirismo escrito em katakana no japonês) é um jogo eletrônico de RPG de 2004, desenvolvido pela Game Freak, publicado pela The Pokémon Company e pela Nintendo para o Game Boy Advance. Foi lançado pela primeira vez no Japão em 2004 e mais tarde lançado interna\n[…]\nO cenário e a história permanecem basicamente os mesmos de Ruby e Sapphire. Os jogadores podem escolher entre um menino ou uma menina, ambos com novos trajes com um esquema de cores verde, e um dos três Pokémon antes de partirem de sua cidade natal para o resto do mundo do jogo.\n[…]\nAo longo de sua jornada, eles enfrentam ambos Equipe Magma e Equipe Aqua, que originalmente só podiam ser enfrentados em Ruby e Sapphire, respectivamente. Ambos têm o objetivo de mudar o mundo que acreditam beneficiar Pokémon–Magma deseja expandir a Magma e Aqua deseja expandir o mar– e ambos planejam realizar seus respectivos objetivos invocando os lendários Pokémon Groudon e Kyogre, respectivamente. Ambas as equipes fazem esforços repetidos para alterar a paisagem.\n[…]\nO jogador agora é capaz de pegar Kyogre e Groudon, que podem ser rastreados conversando com o cientista no Weather Institute.\n[…]\nO adaptador sem fio foi fornecido com cópias japonesas do Emerald; isso foi removido das versões em inglês do jogo.\n[…]\nCorey Brotherson da Eurogamer sentiu que era um bom jogo em seu próprio direito, mas estava faltando em adições atraentes. Ele acrescentou, no entanto, que era um jogo melhor para jogadores novos na série. Laurie Blake da Nintendo Life fez uma revisão retroativa do Emerald; ela sentiu que os jogos Pokémon envelheceram bem, mas ainda parece como se estivessem em 1996. Ela afirmou ainda que as semelhanças entre ele e Ruby e Sapphire o impediam de ser obrigatório e ao mesmo tempo ser bom.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Regressão Primitiva",
      "descricao": "Transformação de Groudon e Kyogre em suas formas ancestrais, introduzida em Pokémon Omega Ruby e Alpha Sapphire."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Omega Ruby, Groudon volta à sua forma ancestral, na chamada Regressão Primitiva, quando entra em batalha segurando qual item?",
    "resposta": "Orbe Vermelha",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Primal_Reversion",
      "https://bulbapedia.bulbagarden.net/wiki/Red_Orb"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Primal_Reversion",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Red_Orb",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Wally",
      "descricao": "Menino de Hoenn, rival do jogador em Pokémon Ruby, Sapphire e Emerald, que captura um Ralts com a ajuda do protagonista."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Ruby e Sapphire, o menino Wally, que capturou seu primeiro pokémon com a ajuda do jogador, se muda para a cidade de Verdanturf. Por quê?",
    "resposta": "Por causa da saúde frágil",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Wally",
      "https://bulbapedia.bulbagarden.net/wiki/Verdanturf_Town"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Wally",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Verdanturf_Town",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Monte Chimney",
      "descricao": "Vulcão no centro da região de Hoenn, nos jogos Pokémon Ruby, Sapphire e Emerald, palco de um confronto com a Equipe Magma."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Ruby, no alto do Monte Chimney, a Equipe Magma tenta fazer o vulcão entrar em erupção com um objeto tomado do Professor Cozmo. Que objeto?",
    "resposta": "Um meteorito",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Mt._Chimney",
      "https://bulbapedia.bulbagarden.net/wiki/Meteorite"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mt._Chimney",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Meteorite",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Divisão físico-especial",
      "descricao": "Mudança introduzida em Pokémon Diamond e Pearl que passou a definir a categoria física ou especial de cada golpe individualmente."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Desde Diamond e Pearl, cada golpe tem sua própria categoria, física ou especial. Até a geração anterior, o que decidia a categoria de um golpe?",
    "resposta": "O tipo do golpe",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Damage_category"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Damage_category",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Munchlax",
      "descricao": "Pokémon do tipo Normal, número 446 da Pokédex Nacional."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Diamond e Pearl, o raro Munchlax só aparece em algumas árvores de Sinnoh. O que o jogador precisa espalhar nelas para atraí-lo?",
    "resposta": "Mel",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Honey_Tree",
      "https://bulbapedia.bulbagarden.net/wiki/Munchlax_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Honey_Tree",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Munchlax_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Regigigas",
      "descricao": "Pokémon do tipo Normal, número 486 da Pokédex Nacional."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Diamond e Pearl, o colosso Regigigas dorme no Templo de Snowpoint e só desperta se o jogador levar na equipe quais três pokémon?",
    "resposta": "Regirock, Regice e Registeel",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Snowpoint_Temple",
      "https://bulbapedia.bulbagarden.net/wiki/Regigigas_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Snowpoint_Temple",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Regigigas_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Comandantes da Equipe Galáctica",
      "descricao": "Mars, Jupiter e Saturn, os comandantes que servem Cyrus na Equipe Galáctica em Pokémon Diamond, Pearl e Platinum."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Mars, Jupiter e Saturn são os comandantes que servem Cyrus na Equipe Galáctica, em Diamond e Pearl. O que os nomes dos três têm em comum?",
    "resposta": "São nomes de planetas",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Galactic"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Galactic",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Pal Park",
      "descricao": "Parque de Sinnoh, em Pokémon Diamond, Pearl e Platinum, que recebe pokémon transferidos dos jogos de Game Boy Advance."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Diamond e Pearl, o Pal Park recebia pokémon de jogos anteriores, cujo cartucho era encaixado na segunda entrada do Nintendo DS. De quais jogos vinham esses pokémon?",
    "resposta": "Os de Game Boy Advance",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pal_Park"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pal_Park",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Juan",
      "descricao": "Líder do ginásio de tipo Água de Sootopolis em Pokémon Emerald, antigo mestre de Wallace."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Emerald, Wallace vira campeão de Hoenn e deixa o ginásio de Sootopolis nas mãos do seu antigo mestre. Quem é ele?",
    "resposta": "Juan",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Juan"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Juan",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Poffin",
      "descricao": "Doce dos jogos Pokémon Diamond, Pearl e Platinum, feito com frutas e dado aos pokémon para melhorar suas condições nos concursos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Diamond e Pearl, os pokémon de concurso comem Poffins, doces feitos com frutas. Eles tomaram o lugar de qual guloseima de Ruby e Sapphire?",
    "resposta": "Pokéblock",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Poffin",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9block"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Poffin",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9block",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Torterra",
      "descricao": "Pokémon dos tipos Planta e Terrestre, número 389 da Pokédex Nacional."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Torterra, a evolução final do inicial de planta de Sinnoh, carrega uma árvore nas costas. Ele lembra qual figura de várias mitologias, um animal que sustenta o mundo?",
    "resposta": "A tartaruga do mundo",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Torterra_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/World_Turtle"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Torterra_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/World_Turtle",
        "situacao": "ok",
        "texto": "The World Turtle, also called the Cosmic Turtle or the World-Bearing Turtle, is a mytheme of a giant turtle (or tortoise) supporting or containing the world. It occurs in Hinduism, Chinese mythology, and the mythologies of some of the indigenous peoples of the Americas. The comparative mythology of the World-Tortoise discussed by Edward Burnett Tylor (1878: 341) includes the counterpart World Elep\n[…]\nIn the video games Pokémon Diamond, Pokémon Pearl and Pokémon Platinum, the starter Pokémon Turtwig's Final Evolution Torterra was partially inspired by the World Turtle."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Lisia",
      "descricao": "Estrela dos concursos pokémon em Omega Ruby e Alpha Sapphire, que apresenta o jogador aos Concursos Espetaculares."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Omega Ruby e Alpha Sapphire, Lisia, a estrela dos concursos, apresenta esse mundo ao jogador. Ela é sobrinha de qual líder de ginásio de Hoenn?",
    "resposta": "Wallace",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lisia"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lisia",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Pokémon Brilliant Diamond e Shining Pearl",
      "descricao": "Recriações de Pokémon Diamond e Pearl para o Nintendo Switch, lançadas em 2021 e ambientadas na região de Sinnoh."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Brilliant Diamond e Shining Pearl, os remakes de Sinnoh para o Switch, não foram desenvolvidos pela Game Freak, e sim por outro estúdio japonês. Qual?",
    "resposta": "ILCA",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Brilliant_Diamond_and_Shining_Pearl"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Brilliant_Diamond_and_Shining_Pearl",
        "situacao": "ok",
        "texto": "Pokémon Brilliant Diamond and Pokémon Shining Pearl are 2021 remakes of the 2006 Nintendo DS role-playing video games Pokémon Diamond and Pearl. The games were developed by ILCA and published by Nintendo and The Pokémon Company for the Nintendo Switch. The promotional material described these games as being faithful remakes of Pokémon Diamond and Pearl. The games were released on 19 November 2021.\n[…]\nAs with the original games, Brilliant Diamond and Shining Pearl are set in the fictional region of Sinnoh, an island based on the Japanese island of Hokkaidō.\n[…]\nBrilliant Diamond and Shining Pearl were developed by ILCA; as such, they are the first main-series Pokémon games to have a different company as the lead developer instead of Game Freak. They were directed by Yuichi Ueda from ILCA and Junichi Masuda from Game Freak, the director of the original games.\n[…]\nOn 26 February 2021, the day of the Pokémon 25th Anniversary Pokémon Presents presentation, several leakers claimed that the upcoming livestream would announce remakes of Diamond and Pearl, titled Brilliant Diamond and Shining Pearl, alongside an action role-playing game also set in the Sinnoh Region, later revealed to be Pokémon Legends: Arceus. During the Pokémon Presents, Brilliant Diamond and Shining Pearl were announced for the Nintendo Switch with a tentative late 2021 release date.\n[…]\nPokémon Brilliant Diamond and Shining Pearl sold 1.39 million copies in its first three days in Japan alone, surpassing the launch sales of Pokémon Sword and Shield in the same period in that region. It became the second-biggest launch for a Switch release in Japan after Animal Crossing: New Horizons in 2020, and the second best-selling game launch of 2021 in the UK behind FIFA 22. The games collectively sold 6 million copies worldwide one week after release."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Brilliant_Diamond_e_Shining_Pearl",
        "situacao": "ok",
        "texto": "Pokémon Brilliant Diamond e Pokémon Shining Pearl (ポケットモンスター ブリリアントダイヤモンド・シャイニングパール, Poketto Monsutā Buririanto Daiyamondō・Shainingu Pāru; Monstros de Bolso Diamante Brilhate e Pérola Reluzente, Shining também significa Brilhante em inglês, mas pode ser substituído pelo sinônimo Reluzente) são jogos eletrônicos de RPG da franquia Pokémon, desenvolvidos pela ILCA e publicados pela The Pokémon Compa\n[…]\nEspera-se que a jogabilidade de Pokémon Brilliant Diamond e Shining Pearl seja semelhante aos jogos Diamond e Pearl originais, comparável a remakes anteriores como HeartGold e SoulSilver ou Omega Ruby e Alpha Sapphire. Brilliant Diamond e Shining Pearl são apresentados em uma perspectiva isométrica de terceira pessoa de cima para baixo, embora com um estilo visual distinto.\n[…]\nTal como acontece com os jogos originais, Brilliant Diamond e Shining Pearl são ambientados na região fictícia de Sinnoh, uma ilha baseada na ilha japonesa de Hokkaido.\n[…]\nEm 26 de fevereiro de 2021, o dia da apresentação Pokémon 25th Anniversary em Pokémon Presents, vários vazadores afirmaram que a próxima transmissão ao vivo iria anunciar recriações de Diamond e Pearl, intitulados Brilliant Diamond e Shining Pearl, ao lado de um mundo aberto no jogo também ambientado na região de Sinnoh, mais tarde revelou ser Pokémon Legends: Arceus.\n[…]\nDurante os Pokémon Presents, Brilliant Diamond e Shining Pearl foram anunciados para o Nintendo Switch com uma data de lançamento provisória para 2021.\n[…]\nBrilliant Diamond e Shining Pearl foram desenvolvidos pela ILCA, licenciados pela Nintendo e supervisionados pela Game Freak; como tal, eles são os primeiros jogos Pokémon da série principal em que Game Freak não é o desenvolvedor líder. Eles são dirigidos por Yuichi Ueda da ILCA e Junichi Masuda da Game Freak, o diretor dos jogos originais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Pokémon Emerald",
      "descricao": "Versão especial de Pokémon Ruby e Sapphire para Game Boy Advance, com o lendário Rayquaza na capa."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon Emerald, a versão especial de Ruby e Sapphire com Rayquaza na capa, foi lançada no Japão em que ano?",
    "resposta": "2004",
    "distratores": [
      "2003",
      "2005",
      "2006"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Emerald"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Emerald",
        "situacao": "ok",
        "texto": "Pokémon Emerald Version is a 2004 role-playing video game developed by Game Freak and published by The Pokémon Company and Nintendo for the Game Boy Advance. It was first released in Japan in 2004, and was later released internationally in 2005. It is the fifth version, after both Pokémon Ruby and Sapphire and Pokémon FireRed and LeafGreen, and is the final game of the third generation of the Poké\n[…]\nPokémon Emerald was developed by Game Freak and published by Nintendo for the Game Boy Advance. It was first announced in Coro Coro Magazine. It features compatibility with the Nintendo e-Reader and 83 cards launched for Emerald on 7 October 2004. It is the third version of Ruby and Sapphire and follows a tradition of third releases, e.g. Pokémon Yellow for Pokémon Red and Blue. The wireless adapter was bundled with Japanese copies of Emerald; this was removed from English versions of the game.\n[…]\nHe added however that it was a better game for players new to the series. Nintendo Life's Laurie Blake performed a retroactive review of Emerald; she felt that the Pokémon games have aged well but still feel like they did in 1996. She further stated that the similarities between it and Ruby and Sapphire prevented it from being a must-have while still being good. Allgame's Julia Reges felt that the game had a lot of value for younger players but that older players may be uninterested.\n[…]\nShe compared Nintendo's remakes of the Pokémon games to the various Star Wars remakes.\n[…]\nEmerald launched in the top spot in Japan with 791,000 copies sold in its first week and 372,000 copies sold in its first day. It was the fourth best-selling game in Japan for 2004. It sold 1.4 million for the year and ranked behind Dragon Quest V: Hand of the Heavenly Bride, Pokémon FireRed and LeafGreen (combined), and Dragon Quest VIII: Journey of the Cursed King."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Emerald",
        "situacao": "ok",
        "texto": "Pokémon Emerald Version (ポケットモンスター エメラルド, Poketto Monsutaa Emerarudo; tradução: Monstro de Bolso Emerald, ou Esmeralda, Emerarudo é um estrangeirismo escrito em katakana no japonês) é um jogo eletrônico de RPG de 2004, desenvolvido pela Game Freak, publicado pela The Pokémon Company e pela Nintendo para o Game Boy Advance. Foi lançado pela primeira vez no Japão em 2004 e mais tarde lançado interna\n[…]\nÉ uma versão aprimorada de Pokémon Ruby e Sapphire e é o jogo final da terceira geração da série de jogos eletrônicos Pokémon.\n[…]\nRecepção da Emerald foi geralmente positiva após a lançamento.\n[…]\nPokémon Emerald foi desenvolvido pela Game Freak e publicado pela Nintendo para o Game Boy Advance. Foi anunciado pela primeira vez na Revista Coro Coro. Possui compatibilidade com o Nintendo e-Reader e 83 cartões lançados para o Emerald em 7 de outubro de 2004. Esta funcionalidade foi removida das versões em inglês.[carece de fontes]? É a terceira versão do Ruby e Sapphire e segue uma tradição de terceiros lançamentos, por exemplo, Pokémon Yellow para Pokémon Red e Blue.\n[…]\nPokémon Emerald recebeu uma recepção geralmente positiva e detém pontuações agregadas de 76/100 e 76,65% no Metacritic e GameRankings, respectivamente. Ele recebeu um prêmio de excelência na nona premiação anual de jogos CESA. Craig Harris da IGN declarou que, embora ele não estava entusiasmado com Emerald, ele admitiu que era um jogo sólido e que era a melhor versão para obter para as pessoas que não tinham jogado Ruby ou Sapphire ainda.\n[…]\nEmerald foi lançado em primeiro lugar no Japão, com 791.000 cópias vendidas na primeira semana e 372.000 cópias vendidas no primeiro dia. Foi o quarto jogo mais vendido no Japão em 2004. Vendeu 1,4 milhões no ano e ficou atrás de Dragon Quest V: Hand of the Heavenly Bride, Pokémon FireRed e LeafGreen (combinados) e Dragon Quest VIII: Journey of the Cursed King.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Pokémon Omega Ruby e Alpha Sapphire",
      "descricao": "Recriações de Pokémon Ruby e Sapphire para o Nintendo 3DS, ambientadas na região de Hoenn."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Omega Ruby e Alpha Sapphire, os remakes de Ruby e Sapphire para o Nintendo 3DS, foram lançados em que ano?",
    "resposta": "2014",
    "distratores": [
      "2013",
      "2015",
      "2016"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Omega_Ruby_and_Alpha_Sapphire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Omega_Ruby_and_Alpha_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Omega Ruby and Pokémon Alpha Sapphire are 2014 remakes of the 2002 Game Boy Advance role-playing video games Pokémon Ruby and Sapphire, also including some features from Pokémon Emerald. The games are part of the sixth generation of the Pokémon video game series, developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS.\n[…]\nOmega Ruby and Alpha Sapphire received generally positive reviews from critics. As of 30 September 2024, a combined total of 14.63 million copies have been sold worldwide, ranking them as the fourth-best-selling Nintendo 3DS titles of all time.\n[…]\nThough Pokémon Omega Ruby and Alpha Sapphire are remakes of games from the third generation, they retain changes made in later generations, such as the type split from the fourth generation and unlimited TM usage and triple battles from the fifth generation. They also retain gameplay features introduced in Pokémon X and Y, such as Mega Evolution, Pokémon Amie, Super Training and the Player Search System.\n[…]\nPokémon Omega Ruby and Alpha Sapphire were released in Japan, North America and Australia on 21 November 2014, exactly twelve years after the original release date of Ruby and Sapphire, while the European release was the following week. They are the third remake pairs in the franchise following Pokémon FireRed and LeafGreen for the Game Boy Advance in 2004 and Pokémon HeartGold and SoulSilver for the Nintendo DS in 2009.\n[…]\nThe games sold 3,040,000 copies in their first three days of sale. Of the total sales, 1,534,593 copies were sold in Japan, the rest were sold in North America and Australia. Omega Ruby and Alpha Sapphire had the biggest launch in the series history in the United Kingdom, beating the previous record held by Pokémon Black and White. By the end of 2014, the games had sold 2.4 million copies in Japan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Omega_Ruby_e_Alpha_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Omega Ruby e Alpha Sapphire (ポケットモンスター オメガルビー&アルファサファイア, Poketto Monsutā Omega Rubī & Arufa Safaia; Monstros de Bolso Ômega Rubi & Alfa Safira) são dois videogames lançados para Nintendo 3DS. Eles são remakes dos jogos de 2002, Pokémon Ruby e Sapphire, do Game Boy Advance. Foram anunciados em 7 de maio de 2014, através de um trailer divulgado pela Nintendo.\n[…]\nEspeculações sobre os remakes de Ruby e Sapphire já aconteciam há anos, principalmente devido as referências aos jogos e a região de Hoenn nos predecessores Pokémon X e Y. Nessa época, surgiu o meme de Internet \"Hoenn Confirmed\".\n[…]\nA Nintendo anunciou oficialmente os jogos em 7 de maio de 2014, através de um comunicado de imprensa. Omega Ruby e Alpha Sapphire foram lançados no Japão e nas Américas em 21 de novembro e ao resto da Europa em 28 de novembro de 2014. A única informação detalhada divulgada foi que os novos jogos \"conduzirão os jogadores através de uma história dramática dentro de um mundo novo e espetacular\".\n[…]\nApós o anúncio, não ficou claro se Omega Ruby e Alpha Sapphire seriam realmente remakes ou novos jogos, devido a descrição do comunicado de imprensa. Então, em uma nova coletiva, o presidente da Nintendo, Satoru Iwata, confirmou que os novos jogos são remakes completos das versões anteriores de 2002.\n[…]\nDurante o vídeo ao vivo da Nintendo na Electronic Entertainment Expo 2014 em 10 de junho de 2014 (que mais tarde foi produzido em uma versão impressa na CoroCoro Comic do Japão), um trailer para Omega Ruby e Alpha Sapphire foi divulgado, exibindo novas cenas dos jogos, incluindo o novo design dos personagens e as novas Mega Evoluções para Sceptile e Swampert, que não foram mostradas em X e Y, como no caso de Blaziken.\n[…]\nPlaylist Pokémon Omega Ruby e Alpha Sapphire no YouTube  Canal Oficial da Pokémon em Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Batalha dupla",
      "descricao": "Formato de batalha dos jogos Pokémon em que cada lado usa dois pokémon ao mesmo tempo."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "As batalhas duplas, em que cada treinador usa dois pokémon ao mesmo tempo, estrearam em qual par de jogos da série principal?",
    "resposta": "Ruby e Sapphire",
    "distratores": [
      "Gold e Silver",
      "Diamond e Pearl",
      "Black e White"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Double_Battle"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Double_Battle",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Natureza (Pokémon)",
      "descricao": "Traço de personalidade de cada pokémon, introduzido em Ruby e Sapphire, que aumenta um atributo e diminui outro."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Desde Ruby e Sapphire, cada pokémon tem uma natureza, como Tímida ou Corajosa, que mexe nos seus atributos. Quantas naturezas diferentes existem?",
    "resposta": "25",
    "distratores": [
      "12",
      "20",
      "30"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Nature"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Nature",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Frente de Batalha de Hoenn",
      "descricao": "Complexo de instalações de batalha pós-jogo de Pokémon Emerald, na região de Hoenn."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em Pokémon Emerald, a Frente de Batalha reúne desafios para depois da Liga, como a Torre e a Pirâmide de Batalha. Quantas instalações ela tem?",
    "resposta": "Sete",
    "distratores": [
      "Cinco",
      "Seis",
      "Oito"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Pokétch",
      "descricao": "Aparelho de pulso com aplicativos usado pelo jogador em Pokémon Diamond, Pearl e Platinum."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O Pokétch, aparelho de pulso de Diamond e Pearl com aplicativos como calculadora e contador de passos, junta no nome a palavra Pokémon e qual palavra inglesa?",
    "resposta": "Watch",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9tch"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9tch",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Câmara Selada",
      "descricao": "Câmara submarina de Hoenn, em Pokémon Ruby, Sapphire e Emerald, cujas inscrições guiam o jogador até Regirock, Regice e Registeel."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em Ruby e Sapphire, a Câmara Selada só se abre se a equipe tiver Relicanth em primeiro lugar e qual pokémon gigante em último?",
    "resposta": "Wailord",
    "distratores": [
      "Lapras",
      "Gyarados",
      "Milotic"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sealed_Chamber"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sealed_Chamber",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Câmara Selada",
      "descricao": "Câmara submarina de Hoenn, em Pokémon Ruby, Sapphire e Emerald, cujas inscrições guiam o jogador até Regirock, Regice e Registeel."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Ruby e Sapphire, as pistas para despertar Regirock, Regice e Registeel estão gravadas nas paredes da Câmara Selada num sistema de escrita real. Qual?",
    "resposta": "Braille",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sealed_Chamber",
      "https://bulbapedia.bulbagarden.net/wiki/Braille"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sealed_Chamber",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Braille",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Corrente Vermelha",
      "descricao": "Objeto criado por Cyrus em Pokémon Diamond, Pearl e Platinum para controlar os lendários Dialga e Palkia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Diamond e Pearl, Cyrus cria a Corrente Vermelha, capaz de prender Dialga e Palkia, usando o poder de quais três pokémon lendários?",
    "resposta": "Uxie, Mesprit e Azelf",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Red_Chain"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Red_Chain",
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
