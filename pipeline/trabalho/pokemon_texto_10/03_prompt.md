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
      "nome": "Pidgeot",
      "descricao": "Pokémon ave do tipo Normal e Voador, número 18 da Pokédex Nacional, evolução final de Pidgey."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Logo depois de evoluir, o Pidgeot de Ash fica numa floresta de Kanto, e Ash promete voltar para buscá-lo. Por que ele o deixa ali?",
    "resposta": "Para proteger um bando de Pidgey",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Pidgeot"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Pidgeot",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Greninja",
      "descricao": "Pokémon dos tipos Água e Sombrio, número 658 da Pokédex Nacional."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No fim da série XY, o Greninja de Ash fica em Kalos, ao lado do lendário Zygarde. Por que ele se separa do treinador?",
    "resposta": "Para destruir as raízes gigantes restantes",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Greninja"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Greninja",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Paul",
      "descricao": "Treinador frio e exigente, rival de Ash Ketchum na série Diamante e Pérola do anime Pokémon, chamado Shinji no Japão."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Sinnoh, o Chimchar que vira o Infernape de Ash pertencia antes a Paul, o rival dele. Por que o pokémon mudou de treinador?",
    "resposta": "Paul o libertou por achá-lo fraco",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Infernape",
      "https://bulbapedia.bulbagarden.net/wiki/Paul"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Infernape",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Paul",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Liga Índigo (anime)",
      "descricao": "Torneio do Platô Índigo, em Kanto, disputado por Ash no fim da primeira temporada do anime Pokémon."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na Liga Índigo, Ash é eliminado por Ritchie numa batalha em que entra com seu Charizard. Por que Ash perde?",
    "resposta": "Charizard se recusa a lutar",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Indigo_Plateau_Conference",
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Charizard"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Indigo_Plateau_Conference",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Charizard",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "James (Equipe Rocket)",
      "descricao": "Integrante da Equipe Rocket no anime Pokémon, parceiro de Jessie e Meowth, chamado Kojiro no Japão."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "James, da Equipe Rocket, é herdeiro de uma família riquíssima. Por que ele fugiu de casa ainda jovem?",
    "resposta": "Para escapar de um casamento arranjado",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/James",
      "https://bulbapedia.bulbagarden.net/wiki/Jessiebelle"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/James",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jessiebelle",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Lt. Surge",
      "descricao": "Líder do ginásio do tipo Elétrico da cidade de Vermilion, em Kanto, nos jogos e no anime Pokémon."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No anime, depois de perder para o Raichu do Tenente Surge, Pikachu recusa uma oferta de Ash. Que oferta é essa?",
    "resposta": "Evoluir com a Pedra do Trovão",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/EP014",
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Pikachu"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/EP014",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Pikachu",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Primeape",
      "descricao": "Pokémon macaco do tipo Lutador da primeira geração, evolução de Mankey, que na nona geração ganhou a evolução Annihilape."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Primeape que Ash deixou em Kanto com um lutador reaparece em Jornadas Pokémon, mais de vinte anos depois. Em que pokémon ele evolui nesse retorno?",
    "resposta": "Annihilape",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Primeape"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Primeape",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Gary Carvalho",
      "descricao": "Neto do Professor Carvalho e rival de Ash Ketchum no anime Pokémon, chamado Shigeru no Japão."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Ash e Gary guardam, cada um, metade do mesmo objeto, que se partiu numa briga dos dois quando eram crianças. Que objeto é esse?",
    "resposta": "Uma Poké Bola",
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
    "indice": 9,
    "ancora": {
      "nome": "May (anime)",
      "descricao": "Companheira de viagem de Ash na série Pokémon Advanced, filha do líder de ginásio Norman, chamada Haruka no Japão."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que Misty, em Kanto, e May, em Hoenn, têm em comum na história de como conheceram Ash?",
    "resposta": "Pikachu destruiu a bicicleta delas",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/May_(anime)",
      "https://bulbapedia.bulbagarden.net/wiki/AG001"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/May_(anime)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/AG001",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Tepig de Ash",
      "descricao": "Porquinho de fogo capturado por Ash em Unova, na série Preto e Branco do anime Pokémon, que evoluiu para Pignite."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o Charmander de Kanto e o Tepig de Unova, ambos do time de Ash, têm em comum na história de antes de conhecê-lo?",
    "resposta": "Foram abandonados pelo treinador",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Tepig",
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Charizard"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Tepig",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Charizard",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Gladion",
      "descricao": "Treinador de Alola, rival de Ash na série Sol e Lua do anime e adversário dele na final da Liga de Alola."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na final da Liga de Alola, Ash vence o rival Gladion. Que laço Gladion tem com Lillie, colega de escola de Ash?",
    "resposta": "É o irmão mais velho dela",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Gladion",
      "https://bulbapedia.bulbagarden.net/wiki/Manalo_Conference"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Gladion",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Manalo_Conference",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Capitão Pikachu",
      "descricao": "Pikachu do professor Friede na série Pokémon Horizontes, líder dos pokémon a bordo do dirigível dos protagonistas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Horizontes, o Pikachu do professor Friede, que comanda os outros pokémon do dirigível, é conhecido por qual apelido?",
    "resposta": "Capitão Pikachu",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Captain_Pikachu"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Captain_Pikachu",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Cilan",
      "descricao": "Líder de ginásio de Striaton e conhecedor pokémon, companheiro de viagem de Ash em Unova no anime."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Cilan, companheiro de Ash em Unova, e seus irmãos trigêmeos, Chili e Cress, têm nomes inspirados em quê?",
    "resposta": "Ervas e temperos de cozinha",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Cilan"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cilan",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Clemont",
      "descricao": "Inventor e líder do ginásio elétrico de Lumiose, companheiro de viagem de Ash em Kalos no anime Pokémon, chamado Citron no Japão."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Clemont, o inventor que lidera o ginásio de Lumiose e viaja com Ash por Kalos, tem o nome derivado de qual fruta cítrica?",
    "resposta": "Clementina",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Clemont"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Clemont",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Dawn",
      "descricao": "Coordenadora pokémon, companheira de viagem de Ash na série Diamante e Pérola do anime, chamada Hikari no Japão."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Dawn, a coordenadora que viaja com Ash por Sinnoh, se chama Hikari no Japão. O que significa esse nome em japonês?",
    "resposta": "Luz",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Dawn"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Dawn",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Tracey Sketchit",
      "descricao": "Observador pokémon que viaja com Ash nas Ilhas Laranja e depois vira assistente do Professor Carvalho no anime Pokémon."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Tracey, companheiro de Ash nas Ilhas Laranja, tem o sobrenome Sketchit. Que hábito dele esse trocadilho em inglês descreve?",
    "resposta": "Desenhar pokémon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Tracey_Sketchit"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Tracey_Sketchit",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Leon",
      "descricao": "Campeão da Liga Pokémon de Galar nos jogos Sword e Shield, adversário de Ash na final do Mundial no anime Jornadas Pokémon."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em Jornadas Pokémon, Ash vence Leon e se torna campeão mundial. Esse episódio foi exibido no Japão em que ano?",
    "resposta": "2022",
    "distratores": [
      "2020",
      "2021",
      "2023"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/World_Coronation_Series",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ultimate_Journeys:_The_Series"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/World_Coronation_Series",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ultimate_Journeys:_The_Series",
        "situacao": "ok",
        "texto": "Pokémon Ultimate Journeys: The Series is the twenty-fifth season of the Pokémon anime series and the third and final season of Pokémon Journeys: The Series, known in Japan as Pocket Monsters.\n[…]\nThe season premiered in Japan on TV Tokyo from December 17, 2021, to March 24, 2023, and in the United States Netflix released new episodes on October 21, 2022, February 24, 2023, and June 23, 2023, and the final part titled Pokémon: To Be a Pokémon Master, known in Japan as Pocket Monsters: Aim to Be a Pokémon Master, on September 8, 2023. In Canada, the season aired from May 28, 2022, to July 29, 2023.\n[…]\nPokémon: The Arceus Chronicles is a set of four special episodes based on the Pokémon Legends: Arceus game, released on January 21 and 28, 2022, in Japan on Amazon Prime Video. These episodes debuted on Netflix on September 23, 2022.\n[…]\nThe ending songs are \"Supereffective Type\" (バツグンタイプ, Batsugun Taipu) by the Pokémon Music Club for 65 episodes, \"One Hundred Fifty-One\" (ひゃくごじゅういち, Hyakugojūichi) by Unshō Ishizuka for 6 episodes, \"Takeshi's Paradise\" (タケシのパラダイス, Takeshi no Paradaisu) by Yūji Ueda for 1 episode, \"Riding on Lapras\" (ラプラスにのって, Rapurasu ni Notte) by Mayumi Iizuka and Rikako Aikawa for 1 episode, \"Face Forward Team Rocket!\" (前向きロケット団！, Maemuki Roketto-dan) by Team Rocket (Jessie, James, Meowth and Wobbuffet) for 1 episode, \"Type: Wild\" (タイプ：ワイルド, Taipu: Wairudo) by Rika Matsumoto for 1 episode, in which the latter ending themes are taken from past seasons of the anime, and the English opening songs are \"With You\" by Echosmith, and \"Gotta Catch ém All\" by Ben Dixon and the Sad Truth with Haven Paschall and Hilary Thomas."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ultimate_Journeys%3A_the_Series",
        "situacao": "ok",
        "texto": "Pokémon Ultimate Journeys: The Series (Brasil: A Série Jornadas Supremas Pokémon / Portugal: Pokémon Jornadas Supremas: A Série) é a vigésima quinta temporada da série de anime Pokémon, a última temporada do primeiro anime Pokémon, a Série e a terceira temporada de Pokémon Jornadas: A Série (Pokémon Journeys: The Series), conhecido no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā).\n[…]\nA temporada estreou no Japão de 17 de dezembro de 2021 a 24 de março de 2023, na TV Tokyo; no Canadá, a temporada estreou no Teletoon em 28 de maio de 2022, em 9 de julho de 2022 (online) e no Télétoon em 10 de setembro de 2022; nos Estados Unidos, a Netflix lançou novos episódios em 21 de outubro de 2022, 24 de fevereiro de 2023 e 23 de junho de 2023, e a parte final chamada de Pokémon: To Be a Pokémon Master (Brasil: A Série Mestre Pokémon / Portugal: Pokémon: Ser Um Mestre Pokémon), conhecido no Japão como Pocket Monsters: Aim to Be a Pokémon Master' (ポケットモンスター めざせポケモンマスター, Pocket Monsters Mezase Pokémon Master), em 8 de setembro de 2023.\n[…]\nDistribuição international em mercados selecionados foi programado para um lançamento já na primavera de 2022, com mercados adicionais a seguir no final do ano.\n[…]\nPokémon: The Arceus Chronicles (Brasil: Pokémon: As Crônicas de Arceus / Portugal: Pokémon: As Crónicas de Arceus), conhecido no Japão como Pocket Monsters: Arceus, the One Called God (ポケットモンスター 神とよばれし アルセウス, Poketto Monsutā shin to yoba reshi Aruseusu) é um conjunto de quatro episódios especiais baseados no jogo Pokémon Legends: Arceus, lançados em 21 e 28 de janeiro de 2022 no Japão, na Amazon Prime Video. Esses episódios estrearam na Netflix em 23 de setembro de 2022.\n[…]\nEm Portugal, a temporada estreou em 14 de novembro de 2022 e Pokémon: Ser Um Mestre Pokémon estreou em 18 de outubro de 2023, no Panda Kids.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Pokémon Sol e Lua (anime)",
      "descricao": "Série do anime Pokémon em que Ash estuda numa escola da região de Alola e vence a Liga de Alola."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Depois de mais de vinte anos de anime, Ash finalmente vence a liga de uma região dos jogos, a de Alola. Em que ano esse episódio passou no Japão?",
    "resposta": "2019",
    "distratores": [
      "2016",
      "2017",
      "2021"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Manalo_Conference",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Sun_%26_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Manalo_Conference",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Sun_%26_Moon",
        "situacao": "ok",
        "texto": "Pokémon the Series: Sun & Moon is the twentieth season of the Pokémon anime series and the first and titular season of Pokémon the Series: Sun & Moon, known in Japan as Pocket Monsters: Sun & Moon (ポケットモンスター サン&ムーン, Poketto Monsutā: San & Mūn).\n[…]\nThe season follows Ash Ketchum as he attends the Pokémon School in the Alola region, befriends his classmates, Lillie, Lana, Mallow, Kiawe, Sophocles, and participates in the island challenge to master various Z-Moves.\n[…]\nThe season originally aired in Japan from November 17, 2016, to September 21, 2017, on TV Tokyo, and in the United States from May 12, 2017, to December 9, 2017, on Disney XD, making it the first Pokémon series to premiere on that channel. Prior to this, a preview of the first two episodes aired on the network on December 5, 2016.\n[…]\nThe Japanese opening songs are \"Alola!!\" (アローラ!!, Arōra!!) by Satoshi / Ash Ketchum (Rica Matsumoto) with Pikachu (Ikue Otani) for 29 episodes, and the Japanese opening theme song of Pokémon the Movie: I Choose You!, \"Aim to Be a Pokémon Master (20th Anniversary)\" (めざせポケモンマスター (20th Anniversary), Mezase Pokémon Masutā (20th Anniversary)) by Rica Matsumoto, for 14 episodes to promote the movie.\n[…]\nViz Media and Warner Home Video released the entire series on a single 6-disc boxset on DVD in the United States on May 21, 2019."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Series%3A_Sun_%26_Moon_%28temporada%29",
        "situacao": "ok",
        "texto": "Pokémon the Series: Sun & Moon (Brasil: Pokémon: Sol e Lua / Portugal: Pokémon A Série Sol e Lua) é a vigésima temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada de Pokémon, a Série: Sol e Lua (Pokémon the Series: Sun & Moon).\n[…]\nEsta temporada acompanha as aventuras de Ash Ketchum e seu parceiro Pikachu enquanto viajam para a região de Alola, frequentam a escola Pokémon com seus colegas Lillie, Lana, Mallow, Kiawe e Sophocles, participam dos desafios das ilhas e aprendem a usar o poder dos Movimentos Z.\n[…]\nA temporada foi originalmente exibida no Japão de 17 de novembro de 2016 a 21 de setembro de 2017 na TV Tokyo, e nos Estados Unidos de 12 de maio de 2017 a 9 de dezembro de 2017 no Disney XD, tornando-se a primeira série Pokémon a estrear nesse canal. Antes disso, uma prévia dos dois primeiros episódios foi exibida na emissora em 5 de dezembro de 2016.\n[…]\nAs músicas de abertura japonesas são \"Alola!!\" (アローラ!!, Arōra!!) de Satoshi/Ash Ketchum (Rica Matsumoto) com Pikachu (Ikue Otani) em 29 episódios, e a música tema de abertura japonesa de Pokémon the Movie: I Choose You!, \"Aim to Be a Pokémon Master (20th Anniversary)\" (めざせポケモンマスター (20th Anniversary), Mezase Pokémon Masutā (20th Anniversary)) de Rica Matsumoto, em 14 episódios para promover o filme. A música de encerramento é \"Pose\" (ポーズ, Pōzu) de Taiiku Okazaki.\n[…]\nA Viz Media e a Warner Home Video lançaram a série completa em um único box com 6 DVDs nos Estados Unidos em 21 de maio de 2019.\n[…]\nWebsite oficial de Pokémon US (em inglês)\n[…]\nWebsite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nWebsite de Pokémon Sun e Moon na TV Tokyo (em japonês)\n[…]\nWebsite oficial do anime de televisão Pokémon no Pokémon JP  (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Pokémon Advanced (anime)",
      "descricao": "Série do anime Pokémon em que Ash viaja pela região de Hoenn com May, Max e Brock."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano estreou na TV japonesa a série Pokémon Advanced, que levou Ash para Hoenn ao lado de May e Max?",
    "resposta": "2002",
    "distratores": [
      "2000",
      "2001",
      "2004"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Ruby_and_Sapphire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Ruby_and_Sapphire",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Pokémon Preto e Branco (anime)",
      "descricao": "Série do anime Pokémon em que Ash viaja pela região de Unova com Iris e Cilan."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A série Preto e Branco, em que Ash percorre Unova com Iris e Cilan, começou a ser exibida no Japão em que ano?",
    "resposta": "2010",
    "distratores": [
      "2008",
      "2011",
      "2012"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Black_%26_White"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Black_%26_White",
        "situacao": "ok",
        "texto": "Pokémon: Black & White is the fourteenth season of the Pokémon anime series and the first and titular season of Pokémon the Series: Black & White, known in Japan as  Pocket Monsters: Best Wishes! (ポケットモンスター ベストウイッシュ, Poketto Monsutā Besuto Uisshu!). It originally aired in Japan from September 23, 2010, to September 15, 2011, on TV Tokyo channel 7, and in the United States from February 12, 2011, t\n[…]\nThe season follows Ash Ketchum as he travels across the Unova region to challenge its Pokémon League while joined by Iris, an aspiring Dragon Master, and Cilan, one of the Striaton City Gym Leaders and a Pokémon Connoisseur.\n[…]\nTo promote the series and the episode where Ash obtains an egg, Pokémon Black and White players were able to obtain an egg containing either an Axew, a Pansage or a Pidove toy, exclusively at US Toys \"R\" Us stores between April 27, 2011, and May 31, 2011. Each one contained their moves like anime counterparts (Ash's Pidove, Cilan's Pansage and Iris' Axew). Players were only able to get one egg and which of the Pokémon the egg hatched into was random.\n[…]\nThe Japanese opening song is \"Best Wishes!\" (ベストウイッシュ!, Besuto Uisshu!) by Rica Matsumoto. The first 2 episodes in Japan did not have the ending song, instead, the instrumental songs from Pokémon: Black & White Japanese Anime Sound Collection serve as ending songs during the original broadcast. The ending songs are \"Fanfare of the Heart\" (心のファンファーレ, Kokoro no Fanfāre) by Aki Okui starting in episode 3 during the original broadcast, and starting in episode 1 on DVD, \"Can You Name All the Pokémon?\n[…]\nBW\" (ポケモン言えるかな? BW ビーダブリュー, Pokémon Ierukana? BW) by Takeshi Tsuruno, and the English opening song is \"Black and White\" by Erin Bowman and Joe Philips. Its instrumental version serves as the ending theme.\n[…]\nViz Media and Warner Home Video released Pokémon: Black & White – The Complete Season on DVD on July 27, 2021."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Black_%26_White",
        "situacao": "ok",
        "texto": "Pokémon: Black & White (Pokémon: Preto e Branco (título em Portugal) ou Pokémon: Branco e Preto (título no Brasil)) é a décima quarta temporada de série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada, que dá nome à temporada, Pokémon, a Série: Preto e Branco (Pokémon the Series: Black & White), conhecido no Japão como Pocket Monsters: Best Wishes! (ポケットモンスター ベストウイッシュ, \n[…]\nOriginalmente, foi exibido no Japão de 23 de setembro de 2010 a 15 de setembro de 2011, no canal 7 da TV Tokyo; nos Estados Unidos de 12 de fevereiro de 2011 a 7 de janeiro de 2012, no Cartoon Network; no Brasil de 17 de abril de 2012 e 8 de fevereiro de 2013, no Cartoon Network, e Portugal de 26 de maio a 20 de setembro de 2012, no Panda Biggs. Esta temporada acompanha as aventuras de Ash Ketchum, que se junta a Iris e Cilan na região de Unova.\n[…]\nA música de abertura japonesa é \"Best Wishes!\" (ベストウイッシュ!, Besuto Uisshu!) interpretada por Rica Matsumoto. Os dois primeiros episódios exibidos no Japão não tiveram música de encerramento; em vez disso, as músicas instrumentais da coletânea Pokémon: Black & White Japanese Anime Sound Collection foram usadas como encerramento durante a transmissão original.\n[…]\nAs músicas finais são \"Fanfare of the Heart\" (心のファンファーレ, Kokoro no Fanfāre) de Aki Okui, começando no episódio 3 durante a transmissão original e começando no episódio 1 do DVD, \"Can You Name All the Pokémon? BW\" (ポケモン言えるかな? BW).ビーダブリュー, Pokémon Ierukana BW) de Takeshi Tsuruno. A música de abertura em inglês é \"Black and White\" de Erin Bowman e Joe Philips. Sua versão instrumental serve como tema de encerramento. A música de abertura no Brasil é \"Branco e Preto\" de Nil Bernardes e Mônica Toniolo.\n[…]\nA Viz Media e a Warner Home Video lançaram Pokémon: Black & White – The Complete Season em DVD em 27 de julho de 2021.\n[…]\nWebsite oficial do anime de televisão Pokémon no Pokémon JP  (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Alain",
      "descricao": "Treinador rival de Ash na série XY do anime Pokémon, que o vence na final da Liga de Kalos."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Alain, que derrota Ash na final da Liga de Kalos, enfrenta o Greninja dele usando a megaevolução de qual pokémon?",
    "resposta": "Charizard",
    "distratores": [
      "Lucario",
      "Garchomp",
      "Gyarados"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Alain",
      "https://bulbapedia.bulbagarden.net/wiki/Lumiose_Conference"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Alain",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lumiose_Conference",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Tobias",
      "descricao": "Treinador misterioso que elimina Ash da Liga de Sinnoh no anime Pokémon, dono de pokémon lendários e míticos."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na Liga de Sinnoh, Ash é eliminado por Tobias, que vencia quase todos os rivais com um único pokémon mítico das trevas. Que pokémon é esse?",
    "resposta": "Darkrai",
    "distratores": [
      "Giratina",
      "Zoroark",
      "Cresselia"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Tobias",
      "https://bulbapedia.bulbagarden.net/wiki/Lily_of_the_Valley_Conference"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Tobias",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lily_of_the_Valley_Conference",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Liko",
      "descricao": "Protagonista da série Pokémon Horizontes, ao lado de Roy, menina de Paldea dona de um pingente misterioso."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Horizontes, o pingente misterioso que Liko recebeu da avó guarda qual pokémon lendário?",
    "resposta": "Terapagos",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Liko",
      "https://bulbapedia.bulbagarden.net/wiki/Terapagos_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Liko",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Terapagos_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Pokémon, Eu Escolho Você! (episódio)",
      "descricao": "Primeiro episódio do anime Pokémon, exibido em 1997, em que Ash recebe Pikachu do Professor Carvalho."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No primeiro episódio do anime, Pikachu se joga na frente de Ash para protegê-lo do ataque de um bando furioso de qual pokémon?",
    "resposta": "Spearow",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/EP001"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/EP001",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Victreebel de James",
      "descricao": "Pokémon planta do tipo Planta e Veneno que pertencia a James, da Equipe Rocket, no anime Pokémon."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No anime, quase toda vez que James, da Equipe Rocket, chama seu Victreebel, o pokémon o recebe de um jeito nada amigável. O que ele faz?",
    "resposta": "Abocanha a cabeça de James",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/James%27s_Victreebel"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/James%27s_Victreebel",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Roy",
      "descricao": "Protagonista da série Pokémon Horizontes, ao lado de Liko, garoto de uma ilha que tem um Fuecoco e uma Poké Bola antiga."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Horizontes, Roy cresceu ouvindo a história de antigos aventureiros. Com qual lendário, de uma cor rara, ele sonha batalhar?",
    "resposta": "Rayquaza negro",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Roy",
      "https://bulbapedia.bulbagarden.net/wiki/Black_Rayquaza"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Roy",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Black_Rayquaza",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Escola Pokémon de Alola",
      "descricao": "Escola do anime Pokémon Sol e Lua onde Ash estuda com Lillie, Kiawe, Lana, Mallow e Sophocles, sob o Professor Kukui."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na série Sol e Lua, Ash se muda para Alola para estudar numa escola pokémon. Em qual ilha da região fica essa escola?",
    "resposta": "Melemele",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_School",
      "https://bulbapedia.bulbagarden.net/wiki/Melemele_Island"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_School",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Melemele_Island",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Laboratório Cerise",
      "descricao": "Laboratório de pesquisa do Professor Cerise, no anime Jornadas Pokémon, onde Ash e Goh trabalham como pesquisadores."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Jornadas Pokémon, Ash e Goh viram pesquisadores do Laboratório Cerise. Em que cidade portuária de Kanto fica esse laboratório?",
    "resposta": "Vermilion",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Cerise_Laboratory"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cerise_Laboratory",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Pokémon (anime)",
      "descricao": "Série de animação japonesa baseada na franquia Pokémon, protagonizada por Ash e Pikachu até 2023."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Quem dirigiu o primeiro filme Pokémon e comandou o anime como diretor-geral desde a estreia, em 1997?",
    "resposta": "Kunihiko Yuyama",
    "distratores": [
      "Satoshi Tajiri",
      "Ken Sugimori",
      "Junichi Masuda"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kunihiko_Yuyama"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kunihiko_Yuyama",
        "situacao": "ok",
        "texto": "Kunihiko Yuyama (湯山 邦彦, Yuyama Kunihiko; born October 15, 1952) is a Japanese director best known for his work on the Pokémon anime franchise. He also directed Magical Princess Minky Momo, Leda: The Fantastic Adventure of Yohko, The Three Musketeers Anime,  Ushio and Tora, Kimagure Orange Road: Summer's Beginning, Plawres Sanshiro, Slayers Return, Slayers Great, and Wedding Peach.\n[…]\nDeveloping an interest in animation while still at high school, Yuyama worked as an animator's assistant on episodes of Space Battleship Yamato and Brave Raideen. He was a sketch artist and storyboard artist on the foreign co-production Barbapapa (1973) and joined Aoi Productions in 1978. The same year, he had his directorial debut while working for Aoi on Galaxy Express 999, and soon struck up a successful working partnership with the screenwriter Takeshi Shudo on GoShogun.\n[…]\nIn 1982, he promoted to \"chief director\", an overseeing role on Magical Princess Minky Momo. While remaining in TV during the 1980s, he also played a leading role in anime's exodus into video. His work also showed a mastery of elements for a female audience, most obvious in his Three Musketeers spin-off, Aramis' Adventure. After working on Ushio and Tora, he gained true fame through his involvement with later works on Pokémon.\n[…]\nKunihiko Yuyama  at Anime News Network's encyclopedia\n[…]\nKunihiko Yuyama at IMDb"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Tauros",
      "descricao": "Pokémon touro do tipo Normal da primeira geração, número 128 da Pokédex Nacional."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No anime, Ash visita a Zona Safári de Kanto e captura de uma vez uma manada inteira de Tauros. Quantos Tauros ele ganhou nessa visita?",
    "resposta": "30",
    "distratores": [
      "10",
      "20",
      "50"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Tauros"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Tauros",
        "situacao": "inacessivel",
        "texto": ""
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
