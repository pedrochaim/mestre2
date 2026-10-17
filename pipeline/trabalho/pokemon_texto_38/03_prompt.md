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
      "nome": "Pokémon XY (anime)",
      "descricao": "Série do anime Pokémon em que Ash viaja pela região de Kalos com Serena, Clemont e Bonnie, exibida no Japão a partir de 2013."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A série XY, em que Ash viaja por Kalos com Serena, Clemont e Bonnie, estreou na televisão japonesa em que ano?",
    "resposta": "2013",
    "distratores": [
      "2011",
      "2012",
      "2014"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_XY",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_the_Series:_XY"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_XY",
        "situacao": "ok",
        "texto": "Pokémon the Series: XY is the seventeenth season of the Pokémon anime series and the first and titular season of Pokémon the Series: XY, known in Japan as Pocket Monsters: XY (ポケットモンスター エックス・ワイ, Poketto Monsutā Ekkusu Wai).\n[…]\nThe season follows Ash Ketchum as he travels across the Kalos region to challenge its Pokémon League while joined by Serena, an aspiring Pokémon Performer, Clemont, the Lumiose City Gym Leader and an inventor, and Bonnie, his younger sister.\n[…]\nThe season originally aired in Japan from October 17, 2013, to October 30, 2014, on TV Tokyo, and in the United States from January 18, 2014, to December 20, 2014, on Cartoon Network, after a preview of the first two episodes on October 19, 2013.\n[…]\nThe ending songs are \"X Strait, Y Scenery\" (X海峡Y景色, Ekkusu Kaikyō Wai Keshiki; \"X-Kaikyō, Y-Keshiki\") performed by J☆Dee'Z for 28 episodes, \"Peace Smile!\" (ピースマイル!, Pīsumairu!) performed by J☆Dee'Z with Pikachu (Ikue Ōtani) for 18 episodes,  \"DreamDream\" (ドリドリ DoriDori) performed by Shoko Nakagawa for 3 episodes, and the English opening song is \"Pokémon Theme (Version XY)\", performed by Ben Dixon and The Sad Truth. Its instrumental version serves as the ending theme.\n[…]\nViz Media and Warner Home Video have released the series in the United States on two three-disc volume sets that contain 24 episodes each.\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon XY page at Pokémon JP official website (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_the_Series:_XY",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Series%3A_XY_%28temporada%29",
        "situacao": "ok",
        "texto": "Pokémon the Series: XY (Brasil: Pokémon: A Série XY / Portugal: Pokémon A Série XY: Uma Nova Mega-Aventura) é a décima sétima temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada de Pokémon, a Série XY (Pokémon the Series: XY). A temporada acompanha Ash Ketchum enquanto ele viaja pela região de Kalos com seus amigos Serena, Clemont e Bonnie, enquanto Ash c\n[…]\nOriginalmente, a série foi exibida no Japão de 17 de outubro de 2013 a 30 de outubro de 2014, na TV Tokyo; nos Estados Unidos de 19 de outubro de 2013 a 20 de dezembro de 2014, no Cartoon Network; no Brasil de 2 de março a 6 de maio de 2015, no Cartoon Network, e em Portugal de 2 de março a 6 de maio de 2015, na Panda Biggs.\n[…]\nSua versão instrumental serve como tema de encerramento. A música de abertura no Brasil é \"Tema de Pokémon (Versão XY)\" de Iuri Stocco. A música de abertura em Portugal é \"Tema Pokémon (Versão XY)\" de André Lacerda.\n[…]\nNo Japão, a temporada teve sua exibição em 17 de outubro de 2013, na TV Tokyo.\n[…]\nNos Estados Unidos, a temporada teve sua exibição em 18 de janeiro de 2014, no Cartoon Network, após uma prévia dos dois primeiros episódios em 19 de outubro de 2013.\n[…]\nNos Estados Unidos, a temporada teve sua exibição na Netflix, Hulu, Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nA Viz Media e a Warner Home Video lançaram a série nos Estados Unidos em dois conjuntos de três discos, cada um contendo 24 episódios.\n[…]\nWebsite oficial de Pokémon US (em inglês)\n[…]\nWebsite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nWebsite de Pokémon XY na TV Tokyo (em japonês)\n[…]\nWebsite oficial do anime de televisão Pokémon no Pokémon JP  (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Pokémon Sol e Lua (anime)",
      "descricao": "Série do anime Pokémon em que Ash estuda numa escola da região de Alola e vence a Liga de Alola."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A série Sol e Lua, em que Ash se muda para Alola e vai estudar numa escola pokémon, estreou na televisão japonesa em que ano?",
    "resposta": "2016",
    "distratores": [
      "2014",
      "2015",
      "2017"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Sun_%26_Moon",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_the_Series:_Sun_%26_Moon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Sun_%26_Moon",
        "situacao": "ok",
        "texto": "Pokémon the Series: Sun & Moon is the twentieth season of the Pokémon anime series and the first and titular season of Pokémon the Series: Sun & Moon, known in Japan as Pocket Monsters: Sun & Moon (ポケットモンスター サン&ムーン, Poketto Monsutā: San & Mūn).\n[…]\nThe season follows Ash Ketchum as he attends the Pokémon School in the Alola region, befriends his classmates, Lillie, Lana, Mallow, Kiawe, Sophocles, and participates in the island challenge to master various Z-Moves.\n[…]\nThe season originally aired in Japan from November 17, 2016, to September 21, 2017, on TV Tokyo, and in the United States from May 12, 2017, to December 9, 2017, on Disney XD, making it the first Pokémon series to premiere on that channel. Prior to this, a preview of the first two episodes aired on the network on December 5, 2016.\n[…]\nThe Japanese opening songs are \"Alola!!\" (アローラ!!, Arōra!!) by Satoshi / Ash Ketchum (Rica Matsumoto) with Pikachu (Ikue Otani) for 29 episodes, and the Japanese opening theme song of Pokémon the Movie: I Choose You!, \"Aim to Be a Pokémon Master (20th Anniversary)\" (めざせポケモンマスター (20th Anniversary), Mezase Pokémon Masutā (20th Anniversary)) by Rica Matsumoto, for 14 episodes to promote the movie.\n[…]\nViz Media and Warner Home Video released the entire series on a single 6-disc boxset on DVD in the United States on May 21, 2019."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_the_Series:_Sun_%26_Moon",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Series%3A_Sun_%26_Moon_%28temporada%29",
        "situacao": "ok",
        "texto": "Pokémon the Series: Sun & Moon (Brasil: Pokémon: Sol e Lua / Portugal: Pokémon A Série Sol e Lua) é a vigésima temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada de Pokémon, a Série: Sol e Lua (Pokémon the Series: Sun & Moon).\n[…]\nEsta temporada acompanha as aventuras de Ash Ketchum e seu parceiro Pikachu enquanto viajam para a região de Alola, frequentam a escola Pokémon com seus colegas Lillie, Lana, Mallow, Kiawe e Sophocles, participam dos desafios das ilhas e aprendem a usar o poder dos Movimentos Z.\n[…]\nA temporada foi originalmente exibida no Japão de 17 de novembro de 2016 a 21 de setembro de 2017 na TV Tokyo, e nos Estados Unidos de 12 de maio de 2017 a 9 de dezembro de 2017 no Disney XD, tornando-se a primeira série Pokémon a estrear nesse canal. Antes disso, uma prévia dos dois primeiros episódios foi exibida na emissora em 5 de dezembro de 2016.\n[…]\nNo Japão, a temporada teve sua exibição em 17 de novembro de 2016, na TV Tokyo.\n[…]\nNo Brasil, a temporada teve sua exibição em 15 de agosto de 2016, no Cartoon Network, posteriormente exibido no Gloob e na Tooncast. Em Portugal, teve sua exibição em 17 de outubro de 2016, no Biggs.\n[…]\nNos Estados Unidos, a temporada teve sua exibição na Netflix, Hulu, Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nNo Brasil, a temporada também está disponível na Netflix, Globoplay e Amazon Prime Video. A temporada estreou antes da televisão, em 21 de abril de 2017 no Pokémon TV. Em Portugal, a temporada também está disponível na Netflix e Amazon Prime Video.\n[…]\nWebsite oficial de Pokémon US (em inglês)\n[…]\nWebsite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nWebsite de Pokémon Sun e Moon na TV Tokyo (em japonês)\n[…]\nWebsite oficial do anime de televisão Pokémon no Pokémon JP  (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pokémon Sol e Lua (anime)",
      "descricao": "Série do anime Pokémon em que Ash estuda numa escola da região de Alola e vence a Liga de Alola."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No primeiro episódio de Sol e Lua, por que Ash e sua mãe viajam para a região de Alola?",
    "resposta": "Ela ganhou a viagem num sorteio",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/SM001",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Sun_%26_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/SM001",
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
        "texto": "Pokémon the Series: Sun & Moon (Brasil: Pokémon: Sol e Lua / Portugal: Pokémon A Série Sol e Lua) é a vigésima temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada de Pokémon, a Série: Sol e Lua (Pokémon the Series: Sun & Moon).\n[…]\nEsta temporada acompanha as aventuras de Ash Ketchum e seu parceiro Pikachu enquanto viajam para a região de Alola, frequentam a escola Pokémon com seus colegas Lillie, Lana, Mallow, Kiawe e Sophocles, participam dos desafios das ilhas e aprendem a usar o poder dos Movimentos Z.\n[…]\nA temporada foi originalmente exibida no Japão de 17 de novembro de 2016 a 21 de setembro de 2017 na TV Tokyo, e nos Estados Unidos de 12 de maio de 2017 a 9 de dezembro de 2017 no Disney XD, tornando-se a primeira série Pokémon a estrear nesse canal. Antes disso, uma prévia dos dois primeiros episódios foi exibida na emissora em 5 de dezembro de 2016.\n[…]\nAs músicas de abertura japonesas são \"Alola!!\" (アローラ!!, Arōra!!) de Satoshi/Ash Ketchum (Rica Matsumoto) com Pikachu (Ikue Otani) em 29 episódios, e a música tema de abertura japonesa de Pokémon the Movie: I Choose You!, \"Aim to Be a Pokémon Master (20th Anniversary)\" (めざせポケモンマスター (20th Anniversary), Mezase Pokémon Masutā (20th Anniversary)) de Rica Matsumoto, em 14 episódios para promover o filme. A música de encerramento é \"Pose\" (ポーズ, Pōzu) de Taiiku Okazaki.\n[…]\nNos Estados Unidos, a temporada teve sua exibição na Netflix, Hulu, Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nWebsite oficial de Pokémon US (em inglês)\n[…]\nWebsite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nWebsite de Pokémon Sun e Moon na TV Tokyo (em japonês)\n[…]\nWebsite oficial do anime de televisão Pokémon no Pokémon JP  (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Jornadas Pokémon",
      "descricao": "Série do anime Pokémon, exibida a partir de 2019, em que Ash e Goh trabalham no Laboratório Cerise e viajam por todas as regiões."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Jornadas Pokémon, a série em que Ash e Goh viram pesquisadores e passeiam por todas as regiões, estreou no Japão em que ano?",
    "resposta": "2019",
    "distratores": [
      "2018",
      "2020",
      "2021"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Journeys:_The_Series",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Journeys:_The_Series"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Journeys:_The_Series",
        "situacao": "ok",
        "texto": "Pokémon Journeys: The Series is the twenty-third season of the Pokémon anime series and the first and titular season of Pokémon Journeys: The Series, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). The season premiered in Japan on TV Tokyo from November 17, 2019, to December 4, 2020. On April 23, 2020, The Pokémon Company International announced that Netflix has secured the U.S.\n[…]\nThe season premiered from November 17, 2019, to December 4, 2020, on TV Tokyo channel 7, and in the United States, it releases as a streaming television season that premiered from June 12, 2020, to March 5, 2021, on Netflix, making it the first Pokémon series not to air on conventional broadcast television in the USA, unlike previous series. It premiered in Canada on Teletoon on a weekly basis from May 9, 2020, to June 5, 2021.\n[…]\nThe ending songs are \"Pokémon Shiritori\" (ポケモンしりとり, Pokemon Shiritori) by the Pokémon Music Club's Junichi Masuda, Pasocom Music Club, and Pokémon Kids 2019, divided into two parts: the Pikachu → Mew Ver. (ピカチュウ→ミュウVer., Pikachū → Myū Ver.) for 18 episodes and for 5 episodes ended in even numbers, 40, 42, 44, 46, and 48; and the Mew → Zamazenta Ver.\n[…]\n(ミュウ→ザマゼンタVer., Myū → Zamazenta Ver.) for 20 episodes and for 4 episodes ended in odd numbers, 41, 43, 45, and 47, the Japanese main theme song of Pokémon the Movie: Secrets of the Jungle, \"Strange and Wonderful Creatures\" (ふしぎなふしぎな生きもの, Fushigi na Fushigi na Ikimono) by Tortoise Matsumoto (Ulfuls) for 1 episode to promote the movie, and the English opening song is \"The Journey Starts Today\" by Walk off the Earth. Its instrumental version serves as the ending theme.\n[…]\nThe series received a B+ score at Anime News Network."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Journeys:_The_Series",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Journeys%3A_the_Series_%28temporada%29",
        "situacao": "ok",
        "texto": "Pokémon Journeys: The Series (Brasil: Série Jornadas Pokémon / Portugal: Jornadas Pokémon: A Série) é a vigésima terceira do série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada de Pokémon, a Série - Jornadas (Pokémon Journeys: the Series), conhecido no Japão como Pocket Monsters (ポケットモンスター, Pocket Monsters).\n[…]\nA temporada estreou no Japão pela TV Tokyo de 17 de novembro de 2019 a 4 de dezembro de 2020. Em 23 de abril de 2020, a The Pokémon Company International anunciou, que a Netflix garantiu os direitos nos EUA para lançar temporadas futuras, começando com \"Pokémon Journeys\", os episódios foram lançados em grupos trimestrais de doze.\n[…]\nA temporada estreou no Brasil pelo Cartoon Network de 5 de outubro de 2020 a 30 de junho de 2021 e em Portugal, pelo Biggs de 16 de novembro de 2020 a 17 de dezembro de 2020 ou 16 de junho de 2021.\n[…]\nAs músicas de encerramento são \"Pokémon Shiritori\" (ポケモンしりとり (Pokemon Shiritori) de Junichi Masuda do Pokémon Music Club, Pasocom Music Club e Pokémon Kids 2019, divididas em duas partes: o Pikachu → Mew Ver. (ピカチュウ→ミュウVer., Pikachū → Myū Ver.) por 18 episódios e por 5 episódios terminados em números pares, 40, 42, 44, 46 e 48; e o Mew → Zamazenta Ver.\n[…]\nA temporada estreou de 17 de novembro de 2019 a 4 de dezembro de 2020 no canal 7 da TV Tokyo.\n[…]\nNos Estados Unidos, foi lançada como uma temporada de televisão por streaming, estreando de 12 de junho de 2020 a 5 de março de 2021 na Netflix, tornando-se a primeira série Pokémon a não ser exibida na televisão aberta convencional nos EUA, ao contrário das séries anteriores. A The Pokémon Company International anunciou em 23 de abril de 2020 que a Netflix adquiriu os direitos de distribuição nos EUA para as temporadas futuras, começando com \"Pokémon Journeys\", para lançamento no país.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Jornadas Pokémon",
      "descricao": "Série do anime Pokémon, exibida a partir de 2019, em que Ash e Goh trabalham no Laboratório Cerise e viajam por todas as regiões."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No primeiro episódio de Jornadas, Ash e Goh se conhecem quando um lendário surge na inauguração do Laboratório Cerise e leva os dois pelos ares. Que lendário?",
    "resposta": "Lugia",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/JN001",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Journeys:_The_Series"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/JN001",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Journeys:_The_Series",
        "situacao": "ok",
        "texto": "Pokémon Journeys: The Series is the twenty-third season of the Pokémon anime series and the first and titular season of Pokémon Journeys: The Series, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). The season premiered in Japan on TV Tokyo from November 17, 2019, to December 4, 2020. On April 23, 2020, The Pokémon Company International announced that Netflix has secured the U.S.\n[…]\nThe Pokémon Company International said on April 23, 2020, that Netflix has acquired the U.S. rights to future seasons, beginning with \"Pokémon Journeys,\" for release in the country. Episodes were released in quarterly groups of twelve. On September 13, 2020, it was announced the anime will switch from airing on Sundays to Fridays on October 9, 2020. The show began airing on September 1, 2020, on Pop in the United Kingdom. The show aired on Pop Max on August 30, 2021.\n[…]\nThe ending songs are \"Pokémon Shiritori\" (ポケモンしりとり, Pokemon Shiritori) by the Pokémon Music Club's Junichi Masuda, Pasocom Music Club, and Pokémon Kids 2019, divided into two parts: the Pikachu → Mew Ver. (ピカチュウ→ミュウVer., Pikachū → Myū Ver.) for 18 episodes and for 5 episodes ended in even numbers, 40, 42, 44, 46, and 48; and the Mew → Zamazenta Ver.\n[…]\n(ミュウ→ザマゼンタVer., Myū → Zamazenta Ver.) for 20 episodes and for 4 episodes ended in odd numbers, 41, 43, 45, and 47, the Japanese main theme song of Pokémon the Movie: Secrets of the Jungle, \"Strange and Wonderful Creatures\" (ふしぎなふしぎな生きもの, Fushigi na Fushigi na Ikimono) by Tortoise Matsumoto (Ulfuls) for 1 episode to promote the movie, and the English opening song is \"The Journey Starts Today\" by Walk off the Earth. Its instrumental version serves as the ending theme.\n[…]\nThe series received a B+ score at Anime News Network."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Journeys%3A_the_Series_%28temporada%29",
        "situacao": "ok",
        "texto": "Pokémon Journeys: The Series (Brasil: Série Jornadas Pokémon / Portugal: Jornadas Pokémon: A Série) é a vigésima terceira do série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada de Pokémon, a Série - Jornadas (Pokémon Journeys: the Series), conhecido no Japão como Pocket Monsters (ポケットモンスター, Pocket Monsters).\n[…]\nA temporada estreou no Japão pela TV Tokyo de 17 de novembro de 2019 a 4 de dezembro de 2020. Em 23 de abril de 2020, a The Pokémon Company International anunciou, que a Netflix garantiu os direitos nos EUA para lançar temporadas futuras, começando com \"Pokémon Journeys\", os episódios foram lançados em grupos trimestrais de doze.\n[…]\n(ミュウ→ザマゼンタVer., Myū → Zamazenta Ver.) por 20 episódios e por 4 episódios terminados em números ímpares, 41, 43, 45 e 47, a música tema principal japonesa de Pokémon the Movie: Secrets of the Jungle, \"Strange and Wonderful Creatures\" (ふしぎなふしぎな生きもの, Fushigi na Fushigi na Ikimono) de Tortoise Matsumoto (Ulfuls) para 1 episódio para promover o filme. A música de abertura em inglês é \"The Journey Starts Today\" de Walk off the Earth. Sua versão instrumental serve como tema de encerramento.\n[…]\nA temporada estreou de 17 de novembro de 2019 a 4 de dezembro de 2020 no canal 7 da TV Tokyo.\n[…]\nNos Estados Unidos, foi lançada como uma temporada de televisão por streaming, estreando de 12 de junho de 2020 a 5 de março de 2021 na Netflix, tornando-se a primeira série Pokémon a não ser exibida na televisão aberta convencional nos EUA, ao contrário das séries anteriores. A The Pokémon Company International anunciou em 23 de abril de 2020 que a Netflix adquiriu os direitos de distribuição nos EUA para as temporadas futuras, começando com \"Pokémon Journeys\", para lançamento no país.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Pokémon: Aim to Be a Pokémon Master",
      "descricao": "Minissérie de 2023 do anime Pokémon que encerra a história de Ash depois do título mundial, chamada no Japão Mezase Pokémon Master."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Depois de virar campeão mundial, Ash ganhou uma minissérie de despedida, em que volta a viajar com velhos amigos. Ela estreou no Japão em que ano?",
    "resposta": "2023",
    "distratores": [
      "2021",
      "2022",
      "2024"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon:_Aim_to_Be_a_Pok%C3%A9mon_Master",
      "https://en.wikipedia.org/wiki/Ash_Ketchum"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon:_Aim_to_Be_a_Pok%C3%A9mon_Master",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ash_Ketchum",
        "situacao": "ok",
        "texto": "Ash Ketchum, known as Satoshi (サトシ) in Japan, is a character in the Pokémon franchise owned by Nintendo, Game Freak, and Creatures. He was the protagonist of the Pokémon anime for the first 25 seasons, as well as the protagonist of several manga series. In Japanese, the character is voiced by Rica Matsumoto. In the English dub, he was voiced by Veronica Taylor in the first eight seasons and Sarah \n[…]\nAsh has been criticized for being stuck in a \"floating timeline\", as well as for his long-lasting inability to win many major Pokémon League competitions in the series. However, his longevity and persistence have also been positively received, and his character has received attention for teaching important and relatable lessons to children. Ash ultimately became Alola League Champion in Pokémon the Series: Sun & Moon – Ultra Legends, and World Champion in Pokémon Ultimate Journeys: The Series.\n[…]\nThough his attempts are typically unsuccessful, he eventually succeeds in becoming a regional Champion in Pokémon the Series: Sun & Moon – Ultra Legends, and later dethrones Leon as the \"Monarch\" of the Pokémon World Coronation tournament in Pokémon Ultimate Journeys: The Series, being recognized as the strongest Pokémon Trainer in the world.\n[…]\nAsh later appeared as an unlockable Sync Pair in Pokémon Masters EX, where he is paired with Pikachu.\n[…]\nI don't know many people who watched Ash's story unfold in its entirety, but every Pokémon fan I know has taken that spirit with them as they've embarked on their own journeys.\" It drew minor criticism, with Polygon highlighting the retirement of the character as \"evolution by forced means of companies seeking a branding revamp rather than the conclusion of a satisfying and coherent emotional arc\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ash_Ketchum",
        "situacao": "ok",
        "texto": "Ash Ketchum (サトシ, Satoshi) é um personagem fictício da franquia Pokémon, propriedade das empresas Nintendo, Game Freak e Creatures.\n[…]\nAsh também se tornou o Campeão Mundial, conhecido como o 'Monarca', depois de derrotar Leon no Campeonato da Coroação Mundial. Isso faz dele o treinador Pokémon mais forte do mundo.\n[…]\nAsh também aparece como protagonista no mangá As Aventuras Elétricas de Pikachu. O Ash desta série é muito diferente do apresentado no anime, por ser mais preguiçoso, viajar quase sempre sozinho e adorar garotas mais velhas. Como no anime, seu Pokémon inicial é Pikachu, mas Ash não o recebe do Professor Carvalho e sim o encontra roendo a fiação elétrica de sua casa. Como no desenho, Ash conquistou a confiança de Pikachu o salvando de um bando de Spearow.\n[…]\nAsh possui duas aparições em jogos da franquia; em Pokémon Puzzle League, lançado no ano de 2000 para Nintendo 64 e em Pokémon Masters EX, para Android e iOS. Em Pokémon Red e Blue (e nos remakes FireRed e LeafGreen), ele contém uma linha do tempo semelhante ao do protagonista Red. Isso se reproduz em quase todos os jogos da série principal.\n[…]\nSendo um Treinador Pokémon, Ash sempre carrega 6 Pokémon por jornada (por padrão), sendo que a maioria deles estão guardados com o prof. Carvalho. Outros (como Squirtle e Primeape) são deixados em certos lugares para treinamento, embora ainda pertençam a ele. Na série original, Ash costumava se despedir de muitos Pokémon que viajaram com ele, porém, a partir de Johto, passa a deixar suas capturas regionais todas em Pallet, com o prof. Carvalho.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Pokémon: Aim to Be a Pokémon Master",
      "descricao": "Minissérie de 2023 do anime Pokémon que encerra a história de Ash depois do título mundial, chamada no Japão Mezase Pokémon Master."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na minissérie que encerra a história de Ash, exibida depois do título mundial, ele volta a viajar com quais dois companheiros do começo do anime?",
    "resposta": "Misty e Brock",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon:_Aim_to_Be_a_Pok%C3%A9mon_Master",
      "https://en.wikipedia.org/wiki/Ash_Ketchum"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon:_Aim_to_Be_a_Pok%C3%A9mon_Master",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ash_Ketchum",
        "situacao": "ok",
        "texto": "Ash Ketchum, known as Satoshi (サトシ) in Japan, is a character in the Pokémon franchise owned by Nintendo, Game Freak, and Creatures. He was the protagonist of the Pokémon anime for the first 25 seasons, as well as the protagonist of several manga series. In Japanese, the character is voiced by Rica Matsumoto. In the English dub, he was voiced by Veronica Taylor in the first eight seasons and Sarah \n[…]\nAsh travels with many traveling companions throughout the series, starting with the characters Brock and Misty in the first season. His companions tend to rotate throughout the series, as do his Pokémon, with Ash tending to leave most of his Pokémon (barring Pikachu) in Oak's care when he visits a new region. Ash also comes into conflict with the criminal organization Team Rocket, primarily in the form of Jessie, James, and their talking Meowth.\n[…]\nAsh later appeared as an unlockable Sync Pair in Pokémon Masters EX, where he is paired with Pikachu.\n[…]\nAsh appeared in the manga series The Electric Tale of Pikachu and Ash & Pikachu, which follow similar plots to the main anime. Manga author Toshihiro Ono cited Ash as one of his favorite characters to draw for the series, stating, \"I want to go on a trip with Misty just like him! (And forget about job, rent, etc.)\".\n[…]\nI don't know many people who watched Ash's story unfold in its entirety, but every Pokémon fan I know has taken that spirit with them as they've embarked on their own journeys.\" It drew minor criticism, with Polygon highlighting the retirement of the character as \"evolution by forced means of companies seeking a branding revamp rather than the conclusion of a satisfying and coherent emotional arc\".\n[…]\nCryer, Hirun (March 12, 2024). \"Having moved on after 26 years, Ash and Pikachu could one day make their way back to the Pokemon anime: \"Anything is possible\"\". GamesRadar+. Retrieved April 2, 2024."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ash_Ketchum",
        "situacao": "ok",
        "texto": "Ash Ketchum (サトシ, Satoshi) é um personagem fictício da franquia Pokémon, propriedade das empresas Nintendo, Game Freak e Creatures.\n[…]\nAs roupas de Ash através do anime, especialmente seus vários bonés, também são considerados tão icônicos quanto ele, e também têm boa recepção, em particular, seu primeiro traje da série original. Ele é o vencedor da Orange League e também o Campeão Pokémon da Região de Alola, recebendo o título depois de vencer sua primeira Conferência da Liga Pokémon.\n[…]\nEm 16 de dezembro de 2022, após 25 anos e 25 temporadas, a The Pokémon Company anunciou que Ash e Pikachu deixariam o anime na temporada seguinte, que se passará na região dos jogos Pokémon Scarlet e Violet, abrindo espaço a dois novos protagonistas.\n[…]\nDesde a primeira temporada, é protagonista do anime de Pokémon, exceto nos spin-offs.\n[…]\nAsh também aparece como protagonista no mangá As Aventuras Elétricas de Pikachu. O Ash desta série é muito diferente do apresentado no anime, por ser mais preguiçoso, viajar quase sempre sozinho e adorar garotas mais velhas. Como no anime, seu Pokémon inicial é Pikachu, mas Ash não o recebe do Professor Carvalho e sim o encontra roendo a fiação elétrica de sua casa. Como no desenho, Ash conquistou a confiança de Pikachu o salvando de um bando de Spearow.\n[…]\nAsh possui duas aparições em jogos da franquia; em Pokémon Puzzle League, lançado no ano de 2000 para Nintendo 64 e em Pokémon Masters EX, para Android e iOS. Em Pokémon Red e Blue (e nos remakes FireRed e LeafGreen), ele contém uma linha do tempo semelhante ao do protagonista Red. Isso se reproduz em quase todos os jogos da série principal.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Rowlet de Ash",
      "descricao": "Rowlet de Ash Ketchum no anime Pokémon, capturado na região de Alola na série Sol e Lua."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em Alola, qual destes pokémon foi o primeiro a ser capturado por Ash?",
    "resposta": "Rowlet",
    "distratores": [
      "Litten",
      "Rockruff",
      "Poipole"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Rowlet",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Sun_%26_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Rowlet",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Sun_%26_Moon",
        "situacao": "ok",
        "texto": "Pokémon the Series: Sun & Moon is the twentieth season of the Pokémon anime series and the first and titular season of Pokémon the Series: Sun & Moon, known in Japan as Pocket Monsters: Sun & Moon (ポケットモンスター サン&ムーン, Poketto Monsutā: San & Mūn).\n[…]\nThe season follows Ash Ketchum as he attends the Pokémon School in the Alola region, befriends his classmates, Lillie, Lana, Mallow, Kiawe, Sophocles, and participates in the island challenge to master various Z-Moves.\n[…]\nThe season originally aired in Japan from November 17, 2016, to September 21, 2017, on TV Tokyo, and in the United States from May 12, 2017, to December 9, 2017, on Disney XD, making it the first Pokémon series to premiere on that channel. Prior to this, a preview of the first two episodes aired on the network on December 5, 2016.\n[…]\nThe Japanese opening songs are \"Alola!!\" (アローラ!!, Arōra!!) by Satoshi / Ash Ketchum (Rica Matsumoto) with Pikachu (Ikue Otani) for 29 episodes, and the Japanese opening theme song of Pokémon the Movie: I Choose You!, \"Aim to Be a Pokémon Master (20th Anniversary)\" (めざせポケモンマスター (20th Anniversary), Mezase Pokémon Masutā (20th Anniversary)) by Rica Matsumoto, for 14 episodes to promote the movie."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Series%3A_Sun_%26_Moon_%28temporada%29",
        "situacao": "ok",
        "texto": "Pokémon the Series: Sun & Moon (Brasil: Pokémon: Sol e Lua / Portugal: Pokémon A Série Sol e Lua) é a vigésima temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada de Pokémon, a Série: Sol e Lua (Pokémon the Series: Sun & Moon).\n[…]\nEsta temporada acompanha as aventuras de Ash Ketchum e seu parceiro Pikachu enquanto viajam para a região de Alola, frequentam a escola Pokémon com seus colegas Lillie, Lana, Mallow, Kiawe e Sophocles, participam dos desafios das ilhas e aprendem a usar o poder dos Movimentos Z.\n[…]\nA temporada foi originalmente exibida no Japão de 17 de novembro de 2016 a 21 de setembro de 2017 na TV Tokyo, e nos Estados Unidos de 12 de maio de 2017 a 9 de dezembro de 2017 no Disney XD, tornando-se a primeira série Pokémon a estrear nesse canal. Antes disso, uma prévia dos dois primeiros episódios foi exibida na emissora em 5 de dezembro de 2016.\n[…]\nAs músicas de abertura japonesas são \"Alola!!\" (アローラ!!, Arōra!!) de Satoshi/Ash Ketchum (Rica Matsumoto) com Pikachu (Ikue Otani) em 29 episódios, e a música tema de abertura japonesa de Pokémon the Movie: I Choose You!, \"Aim to Be a Pokémon Master (20th Anniversary)\" (めざせポケモンマスター (20th Anniversary), Mezase Pokémon Masutā (20th Anniversary)) de Rica Matsumoto, em 14 episódios para promover o filme. A música de encerramento é \"Pose\" (ポーズ, Pōzu) de Taiiku Okazaki.\n[…]\nNos Estados Unidos, a temporada teve sua exibição na Netflix, Hulu, Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nWebsite oficial de Pokémon US (em inglês)\n[…]\nWebsite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nWebsite de Pokémon Sun e Moon na TV Tokyo (em japonês)\n[…]\nWebsite oficial do anime de televisão Pokémon no Pokémon JP  (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Rowlet de Ash",
      "descricao": "Rowlet de Ash Ketchum no anime Pokémon, capturado na região de Alola na série Sol e Lua."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Sol e Lua, o Rowlet de Ash passa boa parte do tempo dormindo. Onde ele costuma tirar seus cochilos?",
    "resposta": "Dentro da mochila de Ash",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Rowlet",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Rowlet",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nEnquanto os procuram, Liko, Roy ou Rain e Dot frequentam brevemente a Academia Naranja para estudar o fenômeno Terastal. Após encontrarem Lucius e lutarem contra os vilões Exploradores (Portugal) ou Desbravadores (Brasil), a série avança um ano no tempo, onde o grupo parte em uma jornada para expor os Exploradores (Portugal) ou Desbravadores (Brasil), limpar o nome dos Aeronautas Eléctricos (Portugal) ou Trovonautas (Brasil) e destruir Laquium.\n[…]\nEmbora a sequência ofensiva tenha sido causada pelas ações de Pikachu, o Pokémon em destaque no episódio, Porygon, raramente foi visto em episódios posteriores, com aparições limitadas a uma breve participação especial no filme Heróis Pokémon e em uma vinheta de abertura na primeira temporada. Suas evoluções, Porygon2 e Porygon-Z, apareceram apenas em uma pequena parte da sequência de abertura de Pokémon: O Filme - Kyurem Contra a Espada da Justiça.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Mestres Oito",
      "descricao": "Torneio final do Campeonato Mundial de Coroação no anime Jornadas Pokémon, disputado pelos oito melhores treinadores do mundo."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No torneio dos Mestres Oito, antes da final contra Leon, quem Ash enfrentou e venceu na semifinal?",
    "resposta": "Cynthia",
    "distratores": [
      "Lance",
      "Steven Stone",
      "Diantha"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Masters_Eight",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ultimate_Journeys:_The_Series"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Masters_Eight",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ultimate_Journeys:_The_Series",
        "situacao": "ok",
        "texto": "Pokémon Ultimate Journeys: The Series is the twenty-fifth season of the Pokémon anime series and the third and final season of Pokémon Journeys: The Series, known in Japan as Pocket Monsters.\n[…]\nThe season premiered in Japan on TV Tokyo from December 17, 2021, to March 24, 2023, and in the United States Netflix released new episodes on October 21, 2022, February 24, 2023, and June 23, 2023, and the final part titled Pokémon: To Be a Pokémon Master, known in Japan as Pocket Monsters: Aim to Be a Pokémon Master, on September 8, 2023. In Canada, the season aired from May 28, 2022, to July 29, 2023.\n[…]\nThe season culminates the research fellowship adventures of Ash Ketchum and Goh, as they travel across all eight regions, including the new Galar region from Pokémon Sword and Shield and the Galar region's Crown Tundra from Pokémon Sword and Shield: The Crown Tundra. Ash ascends through the ranks of the World Coronation Series to enter the Master Class and Goh continues his work with Project Mew to be a Chaser and find Mew. In the final part, Ash travels with his old friends Misty and Brock.\n[…]\nThe Japanese opening songs are \"One, Two, Three\" 1(ワン)・2(ツー)・3(スリー), Wan, Tsū, Surī) by Karaage Sisters for 9 episodes, and by Rika Matsumoto and Goh (Daiki Yamashita) for 37 episodes, and \"Aim to Be a Pokémon Master -with my friends-\" (めざせポケモンマスター -with my friends-, Mezase Pokémon Masutā -with my friends-) by Rika Matsumoto for 11 episodes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ultimate_Journeys%3A_the_Series",
        "situacao": "ok",
        "texto": "Pokémon Ultimate Journeys: The Series (Brasil: A Série Jornadas Supremas Pokémon / Portugal: Pokémon Jornadas Supremas: A Série) é a vigésima quinta temporada da série de anime Pokémon, a última temporada do primeiro anime Pokémon, a Série e a terceira temporada de Pokémon Jornadas: A Série (Pokémon Journeys: The Series), conhecido no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā).\n[…]\nA temporada estreou no Japão de 17 de dezembro de 2021 a 24 de março de 2023, na TV Tokyo; no Canadá, a temporada estreou no Teletoon em 28 de maio de 2022, em 9 de julho de 2022 (online) e no Télétoon em 10 de setembro de 2022; nos Estados Unidos, a Netflix lançou novos episódios em 21 de outubro de 2022, 24 de fevereiro de 2023 e 23 de junho de 2023, e a parte final chamada de Pokémon: To Be a Pokémon Master (Brasil: A Série Mestre Pokémon / Portugal: Pokémon: Ser Um Mestre Pokémon), conhecido no Japão como Pocket Monsters: Aim to Be a Pokémon Master' (ポケットモンスター めざせポケモンマスター, Pocket Monsters Mezase Pokémon Master), em 8 de setembro de 2023.\n[…]\nNos Estados Unidos, a temporada estreou na Netflix, foi dividido em partes, a parte 1 estreou em 21 de outubro de 2023 com seus primeiros 12 episódios, a parte 2 estreou em 24 de fevereiro de 2023 com 15 episódios, a parte 3 estreou em 23 de junho de 2023 com 15 episódios também e a parte final, mais conhecida como parte 4 estreou em 8 de setembro de 2023.\n[…]\nNo Brasil, a temporada estreou na Netflix, foi dividido em partes, a parte 1 estreou em 6 de janeiro de 2023, a parte 2 estreou no dia 24 de fevereiro de 2023 com 15 episódios, a parte 3 estreou no dia 23 de junho de 2023 com 15 episódios também e a parte final, mais conhecida como parte 4 em 8 de setembro de 2023.\n[…]\nEm Portugal, a temporada estreou em 14 de novembro de 2022 e Pokémon: Ser Um Mestre Pokémon estreou em 18 de outubro de 2023, no Panda Kids.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Master Class de Kalos",
      "descricao": "Grande torneio dos Pokémon Showcases no anime Pokémon XYZ, que decide o título de Rainha de Kalos, disputado por Serena."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em XYZ, Serena chega à final da Master Class, o grande torneio das artistas pokémon. Quem vence e mantém o título de Rainha de Kalos?",
    "resposta": "Aria",
    "distratores": [
      "Miette",
      "Shauna",
      "Nini"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Aria",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Aria",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nPokémon the Series primarily follows Ash Ketchum, a young boy from Pallet Town who dreams of becoming a Pokémon Master. After receiving his first Pokémon, Pikachu, from Professor Oak, Ash embarks on a journey across various regions, including Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, and Galar, where he challenges Gym Leaders, competes in regional Pokémon Leagues, or other competitions, and meets a variety of companions who support him in his goal.\n[…]\nSerena is a Pokémon Performer from Vaniville Town in the Kalos Region, who acts as one of Ash's travelling companions in Pokémon the Series: XY. She met Ash back when the two attended Professor Oak's Pokémon Summer Camp program, where Ash helped her back on her feet after hurting her leg. After seeing him on TV three years later, she decides to join him on his journey, as she has a big crush on him.\n[…]\nOn August 18, 2016, the XYZ episode \"Kalos League Victory! Satoshi's Greatest Decisive Battle\" (カロスリーグ優勝！サトシ頂上決戦, transliterated as \"Karosurīgu yūshō! Satoshi chōjō kessen\", titled \"Down to the Fiery Finish!\" in the English dub) faced criticism from fans when Ash lost the Kalos League against Alain. The fans specifically criticized the episode due to the misleading name and trailers that suggested that Ash would win the battle and because Ash had lost all of the Pokémon Leagues in past seasons.\n[…]\nPokémon seasons\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nPokémon Horizontes, a Série\n[…]\nA partir de 2020, a Netflix obteve os direitos exclusivos de transmissão de novos episódios da série nos Estados Unidos; a vigésima terceira temporada, intitulada Pokémon Journeys: the Series, estreou em 12 de junho de 2020 e terminou em 5 de março de 2021, com seu quarto lote de doze episódios. A série continua com a vigésima quarta temporada, intitulada Pokémon Master Journeys: the Series, que estreou no serviço em 10 de setembro de 2021.\n[…]\nAsh e seus amigos vagam por aí, encontram um novo Pokémon ou treinador Pokémon, lutam, fazem amigos e então usam seu recém-descoberto Poder da Amizade para impedir um ataque da nefasta Equipe Rocket\", e acrescentou: \"até mesmo os torneios são um alívio, uma pausa abençoada na fórmula que derrete o cérebro, enquanto Ash e companhia enfrentam rivais predestinados por um ou dois episódios\".\n[…]\nEm 18 de agosto de 2016, o episódio de XYZ Vitória na Liga Kalos! A Maior Batalha Decisiva de Satoshi (カロスリーグ優勝！サトシ頂上決戦, transliterado como Karosurīgu yūshō! Satoshi chōjō kessen), intitulado Um Final Ardente! na dublagem brasileira e Arrebatadora reta final! na dobragem portuguesa) foi alvo de críticas dos fãs após Ash perder a Liga Kalos para Alain.\n[…]\nAs críticas se concentraram no título enganoso e nos trailers que sugeriam a vitória de Ash, além do fato de ele ter perdido todas as Ligas Pokémon nas temporadas anteriores.\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)\n[…]\nPágina oficial de Pokémon (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Amethio",
      "descricao": "Integrante dos Exploradores, grupo vilão da série Pokémon Horizontes, que persegue Liko com seu Ceruledge."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Em Horizontes, que jovem dos Exploradores, dono de um Ceruledge, vive perseguindo Liko para tomar o pingente dela?",
    "resposta": "Amethio",
    "distratores": [
      "Gibeon",
      "Spinel",
      "Friede"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Amethio",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Horizons:_The_Series"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Amethio",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Horizons:_The_Series",
        "situacao": "ok",
        "texto": "Pokémon Horizons: The Series, known in Japan as Pocket Monsters: Liko and Roy's Departure and Pocket Monsters: The Sparkling of Terapagos, is the twenty-sixth season of the Pokémon anime series and the first season of Pokémon Horizons: The Series, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā).\n[…]\nThe season comprises two story arcs. The first arc, \"Liko and Roy's Departure\", covering the first 25 episodes, follows protagonists Liko and Roy as they embark on adventures with the Rising Volt Tacklers, exploring the Pokémon world, including the Paldea region introduced in Pokémon Scarlet and Violet.\n[…]\nThe second arc, \"The Sparkling of Terapagos\", covering the final 20 episodes, follows the Rising Volt Tacklers as they search for Lucius's Six Heroes, after discovering that Liko's pendant is a Terapagos. Throughout both arcs, they are pursued by a mysterious organization called the Explorers.\n[…]\nThe opening themes are \"Heart-Pounding Diary\" (ドキメキダイアリー, Dokimeki Daiarī) by Asmi featuring Chinozo, and \"Halo\" (ハロ, Haro) by Yama and BotchiBoromaru. The ending theme is \"RVR: Rising Volt Tacklers' Rap\" (RVR〜ライジングボルテッカーズラップ〜, RVR: Raijingu Borutekkāzu Rappu), an image song performed by Liko (Minori Suzuki) and Roy (Yuka Terasaki).\n[…]\nPokémon Horizons: The Series at IMDb\n[…]\nPokémon Horizons: The Series (season 1) at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Horizons%3A_the_Series",
        "situacao": "ok",
        "texto": "A Série Pokémon: Horizontes no Brasil ou Pokémon Horizontes: A Série em Portugal, conhecido também nos Estados Unidos como Pokémon Horizons: the Series, e conhecido originalmente no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit.\n[…]\nEsta série narra as aventuras de Liko e Rain.\n[…]\nAo contrário das séries anteriores, que seguiram Ash Ketchum, esta série apresenta Liko, uma garota da região de Paldea, que é acompanhada por Sprigatito, um dos Pokémon iniciais da região, que usa um pingente misterioso, e Rain, um menino da região de Kanto que possui uma misteriosa Pokébola. Em suas jornadas, eles encontram Friede, um professor Pokémon cujo parceiro Pokémon é o Capitão Pikachu. A série baseado em Pokémon Scarlet e Violet.\n[…]\nPocket Monsters: Liko and Roy's Departure (ポケットモンスタ: リコとロイの旅立ちー, Poketto Monsutā Riko to Roi no Tabidachī; lit. \"Monstros de Bolso: Partida de Liko e Roy\"): episódios 1-25\n[…]\n26ª temporada: Horizontes: episódios 1-45\n[…]\n27ª temporada: Horizontes – Temporada 2 – A Busca por Laqua (Brasil) ou Pokémon Horizontes: Temporada 2 – A Busca por Laqua (Portugal): episódio 46-89\n[…]\n28ª temporada: Horizontes – Temporada 3 – Altas Esperanças (Brasil) ou Horizontes: Temporada 3 – Esperança Eletrizante (Portugal): episódios 90-136\n[…]\n29ª temporada: Horizontes – Temporada 4 – Maravilhas à Vista: episódios 137-em breve\n[…]\nRVR: Rising Voltacklers Rap (RVR〜ライジングボルテッカーズラップ〜, RVR: Raijingu Borutekkāzu Rappu) realizada por Minori Suzuki como Liko e Yuka Terasaki como Rain\n[…]\n«Site oficial da A Série Pokémon: Horizontes». pelo Pokémon.com/br (em português brasileiro)\n[…]\nPokémon Horizons: The Series (TV) (anime) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Serena",
      "descricao": "Companheira de viagem de Ash na série Pokémon XY, de Kalos, que sonha em ser artista pokémon."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No fim da série de Kalos, Serena se despede de Ash para seguir a carreira de artista em outra região. Para qual região ela parte?",
    "resposta": "Hoenn",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Serena_(anime)",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Serena_(anime)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nPokémon the Series primarily follows Ash Ketchum, a young boy from Pallet Town who dreams of becoming a Pokémon Master. After receiving his first Pokémon, Pikachu, from Professor Oak, Ash embarks on a journey across various regions, including Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, and Galar, where he challenges Gym Leaders, competes in regional Pokémon Leagues, or other competitions, and meets a variety of companions who support him in his goal.\n[…]\nMay is the daughter of the Petalburg City Gym Leader, Norman and the older sister of Max. She takes interest in Pokémon Contests, competitions focusing on a Pokémon's appearance or appeal. May later reappears in Pokémon the Series: Diamond and Pearl and Pokémon Journeys: The Series. Max is May's younger brother, who acts as one of the group's travelling companions in the Hoenn-associated series.\n[…]\nSerena (セレナ, Serena)\n[…]\nShe partakes in Pokémon Showcases (beauty pageant-like contests) in an attempt to become the \"Kalos Queen\", an honorary title for the best Pokémon Performer. At the end of the series, she prepares to compete in the Pokémon Contests that occur in Hoenn. Before parting, she gives Ash a kiss on the lips.\n[…]\nCarl Kimlinger, in an August 2008 review of the Diamond and Pearl series for Anime News Network, gave the dubbed series an overall grade of C.\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nYukinari Okido em japonês e Professor Samuel Oak em inglês), Ash embarca em uma jornada por diversas regiões, incluindo Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola e Galar, onde desafia Líderes de Ginásio, compete em Ligas Pokémon regionais e outras competições, e conhece diversos companheiros que o apoiam e o ajudam em seu objetivo.\n[…]\nCarl Kimlinger, em uma crítica de agosto de 2008 da série Diamante e Pérola para o Anime News Network, deu à versão dublada uma nota geral C. Ele escreveu: \"A fórmula já está definida...\n[…]\nNa pesquisa da TV Asahi sobre os \"100 Melhores Animes\", Pokémon ficou em 38º lugar. A Paste classificou a série em 44º lugar em sua lista de outubro de 2018 com os \"50 Melhores Animes de Todos os Tempos\", com Sarra Sedghi escrevendo: \"Para a alegria das crianças dos anos 90 em todos os lugares, Pokémon ajudou a consolidar o anime (e com sorte, os bons trocadilhos) no Ocidente\".\n[…]\nAlém desse episódio, o anime foi banido na Turquia, após duas crianças, uma de sete anos e outra de quatro, saltarem da sacada de seus apartamentos em imitação aos personagens do desenho e também na Arábia Saudita, pois o governo alegou que ele estimulava a competição entre as crianças.\n[…]\nA série é considerada uma das primeiras séries de anime na televisão a alcançar um alto nível de sucesso convencional com o público ocidental. Também foi creditada por ajudar a série de jogos a alcançar um maior grau de popularidade e vice-versa.\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Greninja de Ash",
      "descricao": "Greninja de Ash Ketchum no anime Pokémon, inicial de Kalos que se transforma graças ao vínculo com o treinador."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Antes de Ash, o Froakie que virou seu Greninja tinha passado por vários treinadores indicados pelo Professor Sycamore. Por que nunca ficava com nenhum deles?",
    "resposta": "Ele mesmo abandonava os treinadores",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Greninja",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Greninja",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nAsh Ketchum (サトシ, Satoshi)\n[…]\nThe series has had several major characters during its run. In addition to the above, a series of recurring characters known as Nurse Joy (ジョーイ, Joy) and Officer Jenny (ジュンサー, Junsar) appear within each town the protagonist and his friends encounter. Each are a family of identical looking sisters, with the Joy siblings treating injured Pokémon and assisting the Professor of the respective region, while the Jenny siblings acts as the local law enforcement.\n[…]\nOn August 18, 2016, the XYZ episode \"Kalos League Victory! Satoshi's Greatest Decisive Battle\" (カロスリーグ優勝！サトシ頂上決戦, transliterated as \"Karosurīgu yūshō! Satoshi chōjō kessen\", titled \"Down to the Fiery Finish!\" in the English dub) faced criticism from fans when Ash lost the Kalos League against Alain. The fans specifically criticized the episode due to the misleading name and trailers that suggested that Ash would win the battle and because Ash had lost all of the Pokémon Leagues in past seasons.\n[…]\nFans also disliked the outcome because they believed Ash's Greninja had many advantages over Alain's Charizard, including the fact that Water-type Pokémon resist Fire-type Pokémon attacks, and that the rare Bond Phenomenon Ash's Greninja was subject to was said to be far more powerful than a conventional Mega Evolution. Several animators of the series also expressed disappointment that Ash had lost."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nAsh e seus amigos vagam por aí, encontram um novo Pokémon ou treinador Pokémon, lutam, fazem amigos e então usam seu recém-descoberto Poder da Amizade para impedir um ataque da nefasta Equipe Rocket\", e acrescentou: \"até mesmo os torneios são um alívio, uma pausa abençoada na fórmula que derrete o cérebro, enquanto Ash e companhia enfrentam rivais predestinados por um ou dois episódios\".\n[…]\nKevin McFarland, em um guia de maratona da série Liga Índigo para a Wired em 2016, descreveu a série como \"um programa infantil que enfatiza o valor do trabalho árduo, a importância da família e da amizade próxima, e os ideais de amor, confiança e honra. Mas também é um programa bastante bobo, com comédia pastelão e sequências de batalha coloridas, tornando a tarefa hercúlea de Ash de se tornar o melhor treinador Pokémon do mundo continuamente divertida.\"\n[…]\nOs fãs também não gostaram do resultado porque acreditavam que o Greninja de Ash tinha muitas vantagens sobre o Charizard de Alain, incluindo o fato de que Pokémon do tipo Água resistem a ataques de Pokémon do tipo Fogo, e que o raro Fenômeno de Ligação ao qual o Greninja de Ash estava sujeito era considerado muito mais poderoso do que uma Mega Evolução convencional. Vários animadores da série também expressaram decepção com a derrota de Ash.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Greninja de Ash",
      "descricao": "Greninja de Ash Ketchum no anime Pokémon, inicial de Kalos que se transforma graças ao vínculo com o treinador."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Quando o Greninja de Ash se transforma e fica parecido com o treinador, os dois ficam ligados durante a batalha. O que Ash passa a sentir?",
    "resposta": "A dor dos golpes que Greninja leva",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Greninja",
      "https://en.wikipedia.org/wiki/Greninja"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Greninja",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Greninja",
        "situacao": "ok",
        "texto": "The sixth generation (Generation VI) of the Pokémon franchise features 72 fictional species of creatures introduced to the core video game series in the 2013 Nintendo 3DS games Pokémon X and Y. Some Pokémon in this generation were introduced in animated adaptations of the franchise before X and Y. This generation featured the series' largest graphical overhaul: a shift from two-dimensional sprites\n[…]\nSome Pokémon can transform into stronger species through a process called evolution via various means, such as exposure to specific items. Each Pokémon have one or two elemental types, which define its advantages and disadvantages when battling other Pokémon. A major goal in each game is to complete the Pokédex, a comprehensive Pokémon encyclopedia, by capturing, evolving, and trading with other Trainers to obtain individuals from all Pokémon species."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VI",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nVários Pokémon de gerações anteriores, como Jigglypuff, Gardevoir e Marill, receberam retroativamente o novo tipo enquanto 13 novos Pokémon, mais notavelmente Sylveon, vestiu o tipo. Uma nova mecânica chamado Mega Evolução—uma forma temporária muda a forma para evolução normal—também foi adicionado para batalhas mais dinâmicas e surgiu dos conceitos de vínculos e evolução. Mega Evoluções de \"projetos refinados para um novo extremo\", segundo Yoshida, e exigiram um esforço considerável.\n[…]\nEles foram feitos temporariamente para manter o equilíbrio nas batalhas e somente são possíveis quando um Pokémon está segurando sua respectiva Mega Pedra para impedir que os jogadores lhes dêem um item de espera vantajoso diferente. O único Pokémon da Geração VI capaz de Mega Evolução é Diancie. Uma variante do Mega Evolução chamada \"Reversão Primitiva\" foi introduzida em Omega Ruby e Alpha Sapphire; esse mecânico é exclusivo do lendário Pokémon Groudon e Kyogre.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Bonnie",
      "descricao": "Irmã caçula de Clemont, que acompanha Ash pela região de Kalos na série Pokémon XY."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Bonnie, a irmã caçula de Clemont, vive abordando as moças que encontra pelo caminho em Kalos. O que ela costuma pedir a elas?",
    "resposta": "Que se casem com o irmão dela",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Bonnie",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Bonnie",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nClemont and Bonnie (シトロン and ユリーカ, Shitoron and Yurīka; Citron and Eureka)\n[…]\nClemont is an Electric-type Gym Leader from Lumiose City. He is a young inventor and always has a large backpack that contains numerous strange gadgets, most of which explode. He travels with Ash during the XY series to become a better Gym Leader. This culminates when Ash challenges and successfully defeats Clemont at the Lumiose Gym, acquiring his fifth badge in Kalos.\n[…]\nBonnie is Clemont's younger sister. Bonnie, due to her youth, cannot have a Pokémon yet, and thus has Clemont catch a Dedenne for her, which acts as her partner throughout the series. She later befriended one of Zygarde's cores, which she affectionately nicknamed \"Squishy\" and developed a close friendship with. A running gag involves her attempt to get other women to marry her brother, though Clemont often drags Bonnie away before it gets anywhere.\n[…]\nCarl Kimlinger, in an August 2008 review of the Diamond and Pearl series for Anime News Network, gave the dubbed series an overall grade of C.\n[…]\nThe series is considered to be one of the first anime series on television to reach a high level of mainstream success with Western audiences. It has also been credited with helping the game series to achieve a higher degree of popularity, and vice versa.\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nEsses companheiros incluem Misty Willams (Kasumi), Brock Harrison (Takeshi), Tracey Sketchit (Kenji), May (Haruka), Max (Masato), Dawn (Hikari), Iris, Cilan (Dent), Serena, Clemont (Citron), Bonnie (Eureka), Lillie ou Lillian (Lilie), Kiawe (Kaki), Lana ou Victória (Suiren), Mallow ou Lulú (Mao), Sophocles ou Chris (Mamane), Goh (Go), Koharu ou Chloe (Koharu), cada um buscando seus próprios objetivos, como se tornar um Coordenador Pokémon de elite, um Criador Pokémon habilidoso ou capturar Mew.\n[…]\nNos Estados Unidos, o anime foi exibido no Kids' WB como um desenho animado nas manhãs de sábado a partir de fevereiro de 1999.\n[…]\nApesar de ter sido comum a troca de dubladores em diversos países do mundo, poucos personagem principais do anime haviam tido o dublador trocado no Brasil, até 2015, quando por uma recusa do cliente da dublagem em permitir a dublagem a distância do dublador do protagonista, Fábio Lucindo, que à época estava em Portugal e não poderia comparecer presencialmente ao estúdio de dublagem, e por isso optou pela troca do dublador do protagonista depois de mais de 10 anos.\n[…]\nA série é considerada uma das primeiras séries de anime na televisão a alcançar um alto nível de sucesso convencional com o público ocidental. Também foi creditada por ajudar a série de jogos a alcançar um maior grau de popularidade e vice-versa.\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Bonnie",
      "descricao": "Irmã caçula de Clemont, que acompanha Ash pela região de Kalos na série Pokémon XY."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que Max, que acompanha Ash em Hoenn, e Bonnie, que o acompanha em Kalos, têm em comum na viagem?",
    "resposta": "Caçulas novos demais para treinar",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Bonnie",
      "https://bulbapedia.bulbagarden.net/wiki/Max",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Bonnie",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Max",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nPokémon the Series primarily follows Ash Ketchum, a young boy from Pallet Town who dreams of becoming a Pokémon Master. After receiving his first Pokémon, Pikachu, from Professor Oak, Ash embarks on a journey across various regions, including Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, and Galar, where he challenges Gym Leaders, competes in regional Pokémon Leagues, or other competitions, and meets a variety of companions who support him in his goal.\n[…]\nShe partakes in Pokémon Showcases (beauty pageant-like contests) in an attempt to become the \"Kalos Queen\", an honorary title for the best Pokémon Performer. At the end of the series, she prepares to compete in the Pokémon Contests that occur in Hoenn. Before parting, she gives Ash a kiss on the lips.\n[…]\nClemont and Bonnie (シトロン and ユリーカ, Shitoron and Yurīka; Citron and Eureka)\n[…]\nCarl Kimlinger, in an August 2008 review of the Diamond and Pearl series for Anime News Network, gave the dubbed series an overall grade of C.\n[…]\nThe series is considered to be one of the first anime series on television to reach a high level of mainstream success with Western audiences. It has also been credited with helping the game series to achieve a higher degree of popularity, and vice versa.\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nAcompanhado por seu parceiro Pokémon Pikachu e um elenco rotativo de personagens humanos e seus parceiros Pokémon, Ash embarca em uma jornada para se tornar um \"Mestre Pokémon\", viajando pelas várias regiões do mundo Pokémon e competindo em vários torneios de batalha Pokémon conhecidos como Liga Pokémon. No entanto, na 26ª temporada, um novo elenco é apresentado, com novos protagonistas Liko e Rain.\n[…]\nPokémon Chronicles é um spin-off que conta histórias envolvendo os personagens secundários do anime. A maioria dos episódios de Chronicles foram chamados de Pocket Monsters Side Stories (ポケットモンスターサイドストーリー, Poketto Monsutā Saido Sutōrī; lit. \"Histórias Paralelas de Pokémon\"), sendo transmitidos na Weekly Pokémon Broadcasting Station. As demais partes da série são compostas pelo especial de TV Pocket Monsters Crystal e pela série de OVA Férias de Inverno do Pikachu.\n[…]\nsó transmitia Pokémon de forma \"correta\" e com horário fixo da 1ª temporada até o início da 5ª (quando o anime chegava no episódio 252, pulava direto para a oitava temporada, pois os direitos das demais temporadas ainda estavam com a Globo) através do TV Kids. Da 13ª temporada em diante nunca chegou a ser exibida na TV aberta, sendo transmitidas somente em canais de TV a cabo (Cartoon Network, Tooncast e Gloob) e serviços de streaming (Netflix, Amazon Prime Video e Globoplay).\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Clembot",
      "descricao": "Robô criado por Clemont na série Pokémon XY para comandar o ginásio de Lumiose na ausência dele."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Na série XY, Clemont construiu um robô parecido com ele para comandar o ginásio de Lumiose na sua ausência. Como se chama esse robô?",
    "resposta": "Clembot",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Clembot",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Clembot",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nClemont and Bonnie (シトロン and ユリーカ, Shitoron and Yurīka; Citron and Eureka)\n[…]\nClemont: Voiced by: Yūki Kaji (Japanese);  Michael Liscio Jr. (English)\n[…]\nClemont is an Electric-type Gym Leader from Lumiose City. He is a young inventor and always has a large backpack that contains numerous strange gadgets, most of which explode. He travels with Ash during the XY series to become a better Gym Leader. This culminates when Ash challenges and successfully defeats Clemont at the Lumiose Gym, acquiring his fifth badge in Kalos.\n[…]\nBonnie is Clemont's younger sister. Bonnie, due to her youth, cannot have a Pokémon yet, and thus has Clemont catch a Dedenne for her, which acts as her partner throughout the series. She later befriended one of Zygarde's cores, which she affectionately nicknamed \"Squishy\" and developed a close friendship with. A running gag involves her attempt to get other women to marry her brother, though Clemont often drags Bonnie away before it gets anywhere.\n[…]\nSophocles is one of the students at the Pokémon School of Melemele Island who befriends Ash in the Sun & Moon series. He specializes in Electric-type Pokémon and is skillful with machines. He used to have scotophobia, a fear of dark places, but overcomes it as he wants to become an astronaut. After winning a Vikavolt race, Sophocles obtains a Z-Ring from Hapu. He eventually gets his own laboratory constructed by his dad, which he uses for research."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nPokémon, a Série\n[…]\nPokémon Horizontes, a Série\n[…]\nNo entanto, ele afirmou que a série seria apreciada pelo público-alvo, dizendo: \"É colorida, boba e animada (embora insanamente simplista e barata)\" e acrescentou: \"Os pais apreciarão a absoluta ausência de conteúdo questionável (além da promoção do animismo) e a mensagem impecavelmente politicamente correta da série sobre amizade, cooperação e aceitação\". Ele criticou a trilha sonora da série, classificando-a como \"sem sensibilidade\" e \"música ruim de jogo eletrônico\".\n[…]\nEm 1 de setembro de 2006, a China proibiu a série de ser transmitida no horário nobre (das 17:00 às 20:00), assim como fez com séries de animação ocidentais como Os Simpsons, para proteger seus estúdios de animação em dificuldades. A proibição foi posteriormente estendida por uma hora.\n[…]\nOs fãs também não gostaram do resultado porque acreditavam que o Greninja de Ash tinha muitas vantagens sobre o Charizard de Alain, incluindo o fato de que Pokémon do tipo Água resistem a ataques de Pokémon do tipo Fogo, e que o raro Fenômeno de Ligação ao qual o Greninja de Ash estava sujeito era considerado muito mais poderoso do que uma Mega Evolução convencional. Vários animadores da série também expressaram decepção com a derrota de Ash.\n[…]\nA série é considerada uma das primeiras séries de anime na televisão a alcançar um alto nível de sucesso convencional com o público ocidental. Também foi creditada por ajudar a série de jogos a alcançar um maior grau de popularidade e vice-versa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Squishy",
      "descricao": "Núcleo do lendário Zygarde cuidado por Bonnie na série Pokémon XY, uma pequena criatura verde."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em XY, Bonnie cuida de uma pequena criatura verde que é, na verdade, um núcleo do lendário Zygarde. Que apelido carinhoso ela dá a ele?",
    "resposta": "Squishy",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Squishy",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_XY"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Squishy",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_XY",
        "situacao": "ok",
        "texto": "Pokémon the Series: XY is the seventeenth season of the Pokémon anime series and the first and titular season of Pokémon the Series: XY, known in Japan as Pocket Monsters: XY (ポケットモンスター エックス・ワイ, Poketto Monsutā Ekkusu Wai).\n[…]\nThe season follows Ash Ketchum as he travels across the Kalos region to challenge its Pokémon League while joined by Serena, an aspiring Pokémon Performer, Clemont, the Lumiose City Gym Leader and an inventor, and Bonnie, his younger sister."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Series%3A_XY_%28temporada%29",
        "situacao": "ok",
        "texto": "Pokémon the Series: XY (Brasil: Pokémon: A Série XY / Portugal: Pokémon A Série XY: Uma Nova Mega-Aventura) é a décima sétima temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada de Pokémon, a Série XY (Pokémon the Series: XY). A temporada acompanha Ash Ketchum enquanto ele viaja pela região de Kalos com seus amigos Serena, Clemont e Bonnie, enquanto Ash c\n[…]\nAs músicas de encerramento são \"X Strait, Y Scenery\" (X海峡Y景色, Ekkusu Kaikyō Wai Keshiki; \"X-Kaikyō, Y-Keshiki\") interpretada por J☆Dee'Z em 28 episódios, \"Peace Smile!\" (ピースマイル!, Pīsumairu!) interpretada por J☆Dee'Z com Pikachu (Ikue Ōtani) por 18 episódios, \"DreamDream\" (ドリドリ, DoriDori) interpretada por Shoko Nakagawa por 3 episódios. A música de abertura em inglês é \"Pokémon Theme (Version XY)\", interpretada por Ben Dixon e a triste verdade.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Incineroar de Ash",
      "descricao": "Pokémon de Ash Ketchum no anime Pokémon, que vivia como Litten selvagem em Alola e evoluiu até Incineroar."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Antes de seguir Ash, o Litten selvagem que um dia viraria seu Incineroar vivia num barraco cuidando de um pokémon idoso. Que pokémon era esse?",
    "resposta": "Stoutland",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Incineroar",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Sun_%26_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Incineroar",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Sun_%26_Moon",
        "situacao": "ok",
        "texto": "Pokémon the Series: Sun & Moon is the twentieth season of the Pokémon anime series and the first and titular season of Pokémon the Series: Sun & Moon, known in Japan as Pocket Monsters: Sun & Moon (ポケットモンスター サン&ムーン, Poketto Monsutā: San & Mūn).\n[…]\nThe season follows Ash Ketchum as he attends the Pokémon School in the Alola region, befriends his classmates, Lillie, Lana, Mallow, Kiawe, Sophocles, and participates in the island challenge to master various Z-Moves.\n[…]\nThe season originally aired in Japan from November 17, 2016, to September 21, 2017, on TV Tokyo, and in the United States from May 12, 2017, to December 9, 2017, on Disney XD, making it the first Pokémon series to premiere on that channel. Prior to this, a preview of the first two episodes aired on the network on December 5, 2016.\n[…]\nThe Japanese opening songs are \"Alola!!\" (アローラ!!, Arōra!!) by Satoshi / Ash Ketchum (Rica Matsumoto) with Pikachu (Ikue Otani) for 29 episodes, and the Japanese opening theme song of Pokémon the Movie: I Choose You!, \"Aim to Be a Pokémon Master (20th Anniversary)\" (めざせポケモンマスター (20th Anniversary), Mezase Pokémon Masutā (20th Anniversary)) by Rica Matsumoto, for 14 episodes to promote the movie."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Series%3A_Sun_%26_Moon_%28temporada%29",
        "situacao": "ok",
        "texto": "Pokémon the Series: Sun & Moon (Brasil: Pokémon: Sol e Lua / Portugal: Pokémon A Série Sol e Lua) é a vigésima temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada de Pokémon, a Série: Sol e Lua (Pokémon the Series: Sun & Moon).\n[…]\nA temporada foi originalmente exibida no Japão de 17 de novembro de 2016 a 21 de setembro de 2017 na TV Tokyo, e nos Estados Unidos de 12 de maio de 2017 a 9 de dezembro de 2017 no Disney XD, tornando-se a primeira série Pokémon a estrear nesse canal. Antes disso, uma prévia dos dois primeiros episódios foi exibida na emissora em 5 de dezembro de 2016.\n[…]\nAs músicas de abertura japonesas são \"Alola!!\" (アローラ!!, Arōra!!) de Satoshi/Ash Ketchum (Rica Matsumoto) com Pikachu (Ikue Otani) em 29 episódios, e a música tema de abertura japonesa de Pokémon the Movie: I Choose You!, \"Aim to Be a Pokémon Master (20th Anniversary)\" (めざせポケモンマスター (20th Anniversary), Mezase Pokémon Masutā (20th Anniversary)) de Rica Matsumoto, em 14 episódios para promover o filme. A música de encerramento é \"Pose\" (ポーズ, Pōzu) de Taiiku Okazaki.\n[…]\nNos Estados Unidos, a temporada teve sua exibição na Netflix, Hulu, Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nNo Brasil, a temporada também está disponível na Netflix, Globoplay e Amazon Prime Video. A temporada estreou antes da televisão, em 21 de abril de 2017 no Pokémon TV. Em Portugal, a temporada também está disponível na Netflix e Amazon Prime Video.\n[…]\nWebsite oficial de Pokémon US (em inglês)\n[…]\nWebsite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nWebsite de Pokémon Sun e Moon na TV Tokyo (em japonês)\n[…]\nWebsite oficial do anime de televisão Pokémon no Pokémon JP  (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Conferência Manalo",
      "descricao": "Primeiro torneio da Liga Pokémon de Alola no anime Pokémon Sol e Lua, vencido por Ash numa final contra Gladion."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na final da Liga de Alola, a última luta entre Ash e Gladion foi travada por dois pokémon da mesma espécie, em formas diferentes. Que espécie?",
    "resposta": "Lycanroc",
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
        "texto": "Pokémon the Series: Sun & Moon is the twentieth season of the Pokémon anime series and the first and titular season of Pokémon the Series: Sun & Moon, known in Japan as Pocket Monsters: Sun & Moon (ポケットモンスター サン&ムーン, Poketto Monsutā: San & Mūn).\n[…]\nThe season follows Ash Ketchum as he attends the Pokémon School in the Alola region, befriends his classmates, Lillie, Lana, Mallow, Kiawe, Sophocles, and participates in the island challenge to master various Z-Moves.\n[…]\nThe season originally aired in Japan from November 17, 2016, to September 21, 2017, on TV Tokyo, and in the United States from May 12, 2017, to December 9, 2017, on Disney XD, making it the first Pokémon series to premiere on that channel. Prior to this, a preview of the first two episodes aired on the network on December 5, 2016.\n[…]\nThe Japanese opening songs are \"Alola!!\" (アローラ!!, Arōra!!) by Satoshi / Ash Ketchum (Rica Matsumoto) with Pikachu (Ikue Otani) for 29 episodes, and the Japanese opening theme song of Pokémon the Movie: I Choose You!, \"Aim to Be a Pokémon Master (20th Anniversary)\" (めざせポケモンマスター (20th Anniversary), Mezase Pokémon Masutā (20th Anniversary)) by Rica Matsumoto, for 14 episodes to promote the movie."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Series%3A_Sun_%26_Moon_%28temporada%29",
        "situacao": "ok",
        "texto": "Pokémon the Series: Sun & Moon (Brasil: Pokémon: Sol e Lua / Portugal: Pokémon A Série Sol e Lua) é a vigésima temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada de Pokémon, a Série: Sol e Lua (Pokémon the Series: Sun & Moon).\n[…]\nEsta temporada acompanha as aventuras de Ash Ketchum e seu parceiro Pikachu enquanto viajam para a região de Alola, frequentam a escola Pokémon com seus colegas Lillie, Lana, Mallow, Kiawe e Sophocles, participam dos desafios das ilhas e aprendem a usar o poder dos Movimentos Z.\n[…]\nA temporada foi originalmente exibida no Japão de 17 de novembro de 2016 a 21 de setembro de 2017 na TV Tokyo, e nos Estados Unidos de 12 de maio de 2017 a 9 de dezembro de 2017 no Disney XD, tornando-se a primeira série Pokémon a estrear nesse canal. Antes disso, uma prévia dos dois primeiros episódios foi exibida na emissora em 5 de dezembro de 2016.\n[…]\nAs músicas de abertura japonesas são \"Alola!!\" (アローラ!!, Arōra!!) de Satoshi/Ash Ketchum (Rica Matsumoto) com Pikachu (Ikue Otani) em 29 episódios, e a música tema de abertura japonesa de Pokémon the Movie: I Choose You!, \"Aim to Be a Pokémon Master (20th Anniversary)\" (めざせポケモンマスター (20th Anniversary), Mezase Pokémon Masutā (20th Anniversary)) de Rica Matsumoto, em 14 episódios para promover o filme. A música de encerramento é \"Pose\" (ポーズ, Pōzu) de Taiiku Okazaki.\n[…]\nNos Estados Unidos, a temporada teve sua exibição na Netflix, Hulu, Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nWebsite oficial de Pokémon US (em inglês)\n[…]\nWebsite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nWebsite de Pokémon Sun e Moon na TV Tokyo (em japonês)\n[…]\nWebsite oficial do anime de televisão Pokémon no Pokémon JP  (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Lillie",
      "descricao": "Colega de Ash na Escola Pokémon de Alola, na série Sol e Lua do anime, irmã de Gladion e filha de Lusamine."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Sol e Lua, Lillie tinha medo de tocar em pokémon até cuidar de um ovo de Vulpix de Alola. Que nome ela dá ao Vulpix que nasce?",
    "resposta": "Snowy",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lillie_(anime)",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lillie_(anime)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nLillie (リーリエ, Rīrie; Lillie)\n[…]\nInternationally, The Pokémon Company handles production and distribution of the anime with Iyuno Media Group and Goldcrest Post with publication by VIZ Media, which was formerly VIZ LLC but merged with ShoPro. The anime has been aired in 192 countries. In the United States, the anime aired on Kids' WB as a Saturday morning cartoon starting in February 1999.\n[…]\nIn a 2018 interview, the creators of Detective Pikachu, which features a talking Pikachu, revealed that the original intention for the anime was to have the Pokémon talk, but OLM, Inc. was unable to come up with a concept that Game Freak, developer of the mainline games, were accepting of.\n[…]\nThe following table lists the annual content revenue from Pokémon anime media in Japan, as reported by market research firm Hakuhodo.\n[…]\nIn TV Asahi's poll of the \"Top 100 Anime\", Pokémon came in 38th. Paste ranked the series at 44th place in its October 2018 list of \"The 50 Best Anime Series of All Time\", with Sarra Sedghi writing: \"To the joy of '90s kids everywhere, Pokémon helped solidify anime (and, hopefully, good punnery) in the West\".\n[…]\n\"How Pokémon Is Dubbed From Japanese To English\". Vanity Fair. March 16, 2020. Archived from the original on April 10, 2020. Retrieved April 9, 2020. - Displays the dubbing process done by Sarah Natochenny\n[…]\nPokémon seasons\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nPokémon, a Série\n[…]\nPokémon Horizontes, a Série\n[…]\nNa pesquisa da TV Asahi sobre os \"100 Melhores Animes\", Pokémon ficou em 38º lugar. A Paste classificou a série em 44º lugar em sua lista de outubro de 2018 com os \"50 Melhores Animes de Todos os Tempos\", com Sarra Sedghi escrevendo: \"Para a alegria das crianças dos anos 90 em todos os lugares, Pokémon ajudou a consolidar o anime (e com sorte, os bons trocadilhos) no Ocidente\".\n[…]\nEla acrescentou: \"Pokémon pode não ser alta arte (porque, você sabe, é para crianças), mas a onipresença do programa é uma prova do poder da nostalgia.\" A IGN classificou a série em 70º lugar em sua lista das \"100 Melhores Séries Animadas\", dizendo que a série \"tinha roteiro inteligente e uma fórmula de marketing de ouro projetada para expandir os jogos eletrônicos de Pokémon da Nintendo para um novo território lucrativo\".\n[…]\nOs fãs também não gostaram do resultado porque acreditavam que o Greninja de Ash tinha muitas vantagens sobre o Charizard de Alain, incluindo o fato de que Pokémon do tipo Água resistem a ataques de Pokémon do tipo Fogo, e que o raro Fenômeno de Ligação ao qual o Greninja de Ash estava sujeito era considerado muito mais poderoso do que uma Mega Evolução convencional. Vários animadores da série também expressaram decepção com a derrota de Ash.\n[…]\nPágina oficial de Pokémon (em japonês)\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)\n[…]\nPágina oficial de Pokémon (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Kiawe",
      "descricao": "Colega de Ash na Escola Pokémon de Alola, na série Sol e Lua do anime, treinador de pokémon de fogo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Sol e Lua, Kiawe ajuda na fazenda da família, entregando leite pela ilha montado em qual pokémon?",
    "resposta": "Charizard",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kiawe",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kiawe",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nKiawe (カキ, Kaki)\n[…]\nIn a 2018 interview, the creators of Detective Pikachu, which features a talking Pikachu, revealed that the original intention for the anime was to have the Pokémon talk, but OLM, Inc. was unable to come up with a concept that Game Freak, developer of the mainline games, were accepting of.\n[…]\nThe following table lists the annual content revenue from Pokémon anime media in Japan, as reported by market research firm Hakuhodo.\n[…]\nCarl Kimlinger, in an August 2008 review of the Diamond and Pearl series for Anime News Network, gave the dubbed series an overall grade of C.\n[…]\nIn TV Asahi's poll of the \"Top 100 Anime\", Pokémon came in 38th. Paste ranked the series at 44th place in its October 2018 list of \"The 50 Best Anime Series of All Time\", with Sarra Sedghi writing: \"To the joy of '90s kids everywhere, Pokémon helped solidify anime (and, hopefully, good punnery) in the West\".\n[…]\nFans also disliked the outcome because they believed Ash's Greninja had many advantages over Alain's Charizard, including the fact that Water-type Pokémon resist Fire-type Pokémon attacks, and that the rare Bond Phenomenon Ash's Greninja was subject to was said to be far more powerful than a conventional Mega Evolution. Several animators of the series also expressed disappointment that Ash had lost.\n[…]\nPokémon seasons\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nA série de anime Pokémon foi amplamente creditada por permitir que o anime se tornasse mais popular e familiar em todo o mundo, especialmente nos Estados Unidos, onde muitos filmes de Pokémon estão entre os filmes de anime de maior bilheteria. Também é considerada uma das primeiras séries de anime na televisão a atingir esse nível de sucesso mainstream com o público ocidental, além de ser creditada por permitir que a série de jogos atingisse tal grau de popularidade e vice-versa.\n[…]\nPokémon, a Série\n[…]\nNa pesquisa da TV Asahi sobre os \"100 Melhores Animes\", Pokémon ficou em 38º lugar. A Paste classificou a série em 44º lugar em sua lista de outubro de 2018 com os \"50 Melhores Animes de Todos os Tempos\", com Sarra Sedghi escrevendo: \"Para a alegria das crianças dos anos 90 em todos os lugares, Pokémon ajudou a consolidar o anime (e com sorte, os bons trocadilhos) no Ocidente\".\n[…]\nOs fãs também não gostaram do resultado porque acreditavam que o Greninja de Ash tinha muitas vantagens sobre o Charizard de Alain, incluindo o fato de que Pokémon do tipo Água resistem a ataques de Pokémon do tipo Fogo, e que o raro Fenômeno de Ligação ao qual o Greninja de Ash estava sujeito era considerado muito mais poderoso do que uma Mega Evolução convencional. Vários animadores da série também expressaram decepção com a derrota de Ash.\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)\n[…]\nPágina oficial de Pokémon (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Sophocles",
      "descricao": "Colega de Ash na Escola Pokémon de Alola, na série Sol e Lua do anime, apaixonado por tecnologia e por pokémon elétricos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Além de treinar pokémon elétricos, o que Clemont, companheiro de Ash em Kalos, e Sophocles, colega dele em Alola, têm em comum?",
    "resposta": "Adoram inventar máquinas",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sophocles",
      "https://bulbapedia.bulbagarden.net/wiki/Clemont",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sophocles",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Clemont",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nPokémon the Series primarily follows Ash Ketchum, a young boy from Pallet Town who dreams of becoming a Pokémon Master. After receiving his first Pokémon, Pikachu, from Professor Oak, Ash embarks on a journey across various regions, including Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, and Galar, where he challenges Gym Leaders, competes in regional Pokémon Leagues, or other competitions, and meets a variety of companions who support him in his goal.\n[…]\nClemont is an Electric-type Gym Leader from Lumiose City. He is a young inventor and always has a large backpack that contains numerous strange gadgets, most of which explode. He travels with Ash during the XY series to become a better Gym Leader. This culminates when Ash challenges and successfully defeats Clemont at the Lumiose Gym, acquiring his fifth badge in Kalos.\n[…]\nInternationally, The Pokémon Company handles production and distribution of the anime with Iyuno Media Group and Goldcrest Post with publication by VIZ Media, which was formerly VIZ LLC but merged with ShoPro. The anime has been aired in 192 countries. In the United States, the anime aired on Kids' WB as a Saturday morning cartoon starting in February 1999.\n[…]\nThe following table lists the annual content revenue from Pokémon anime media in Japan, as reported by market research firm Hakuhodo.\n[…]\nPokémon seasons\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nYukinari Okido em japonês e Professor Samuel Oak em inglês), Ash embarca em uma jornada por diversas regiões, incluindo Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola e Galar, onde desafia Líderes de Ginásio, compete em Ligas Pokémon regionais e outras competições, e conhece diversos companheiros que o apoiam e o ajudam em seu objetivo.\n[…]\nEsses companheiros incluem Misty Willams (Kasumi), Brock Harrison (Takeshi), Tracey Sketchit (Kenji), May (Haruka), Max (Masato), Dawn (Hikari), Iris, Cilan (Dent), Serena, Clemont (Citron), Bonnie (Eureka), Lillie ou Lillian (Lilie), Kiawe (Kaki), Lana ou Victória (Suiren), Mallow ou Lulú (Mao), Sophocles ou Chris (Mamane), Goh (Go), Koharu ou Chloe (Koharu), cada um buscando seus próprios objetivos, como se tornar um Coordenador Pokémon de elite, um Criador Pokémon habilidoso ou capturar Mew.\n[…]\nInternacionalmente, a The Pokémon Company cuida da produção e distribuição do anime com o Iyuno Media Group e o Goldcrest Post, com publicação pela VIZ Media, anteriormente VIZ LLC, mas que se fundiu com a ShoPro. O anime atualmente é exibido em 192 países.\n[…]\nAsh e seus amigos vagam por aí, encontram um novo Pokémon ou treinador Pokémon, lutam, fazem amigos e então usam seu recém-descoberto Poder da Amizade para impedir um ataque da nefasta Equipe Rocket\", e acrescentou: \"até mesmo os torneios são um alívio, uma pausa abençoada na fórmula que derrete o cérebro, enquanto Ash e companhia enfrentam rivais predestinados por um ou dois episódios\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Togedemaru de Sophocles",
      "descricao": "Togedemaru parceiro de Sophocles na série Sol e Lua do anime Pokémon."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Na escola de Alola, que pokémon redondo e espinhento, elétrico e de aço, é o parceiro inseparável de Sophocles?",
    "resposta": "Togedemaru",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sophocles%27s_Togedemaru",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sophocles%27s_Togedemaru",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nOver the course of his journey, Ash achieves several milestones, including becoming the first-ever Champion of the Alola League, where he also attended Pokémon School, and ultimately defeating Leon to become Monarch of the World Coronation Series. After reaching this peak, Ash continues his travels with Pikachu to meet and befriend new Pokémon in order to achieve his goal of becoming a Pokémon Master.\n[…]\nThough his attempts are typically unsuccessful, he eventually succeeded in becoming the first Alola Regional Champion and later defeated Leon in the World Coronation Series Masters Eight Tournament to become the strongest Pokémon Trainer in the world and new World Champion, referred as \"Monarch\".\n[…]\nSophocles (マーマネ, Māmane)\n[…]\nSophocles is one of the students at the Pokémon School of Melemele Island who befriends Ash in the Sun & Moon series. He specializes in Electric-type Pokémon and is skillful with machines. He used to have scotophobia, a fear of dark places, but overcomes it as he wants to become an astronaut. After winning a Vikavolt race, Sophocles obtains a Z-Ring from Hapu. He eventually gets his own laboratory constructed by his dad, which he uses for research.\n[…]\nStarting on December 6, 2024, episodes are uploaded to the Pokémon TV YouTube channel every Sunday, Monday, Wednesday, Friday, and Saturday.\n[…]\nPokémon seasons\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nYukinari Okido em japonês e Professor Samuel Oak em inglês), Ash embarca em uma jornada por diversas regiões, incluindo Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola e Galar, onde desafia Líderes de Ginásio, compete em Ligas Pokémon regionais e outras competições, e conhece diversos companheiros que o apoiam e o ajudam em seu objetivo.\n[…]\nEsses companheiros incluem Misty Willams (Kasumi), Brock Harrison (Takeshi), Tracey Sketchit (Kenji), May (Haruka), Max (Masato), Dawn (Hikari), Iris, Cilan (Dent), Serena, Clemont (Citron), Bonnie (Eureka), Lillie ou Lillian (Lilie), Kiawe (Kaki), Lana ou Victória (Suiren), Mallow ou Lulú (Mao), Sophocles ou Chris (Mamane), Goh (Go), Koharu ou Chloe (Koharu), cada um buscando seus próprios objetivos, como se tornar um Coordenador Pokémon de elite, um Criador Pokémon habilidoso ou capturar Mew.\n[…]\nAo longo de sua jornada, Ash alcança diversos marcos, incluindo se tornar o primeiro Campeão da Liga Alola, onde também frequentou a Escola Pokémon, e finalmente derrotar Leon para se tornar o Monarca do Campeonato da Coroação Mundial. Após atingir esse ápice, Ash continua suas viagens com Pikachu para conhecer e fazer amizade com novos Pokémon, a fim de alcançar seu objetivo de se tornar um Mestre Pokémon.\n[…]\nPokémon, a Série\n[…]\nPokémon Horizontes, a Série\n[…]\nPágina oficial de Pokémon (em japonês)\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)\n[…]\nPágina oficial de Pokémon (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Poipole de Ash",
      "descricao": "Ultracriatura Poipole que viveu com Ash Ketchum na série Sol e Lua do anime Pokémon antes de voltar ao Ultra Espaço."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Sol e Lua, que pequena Ultracriatura roxa, do tipo Venenoso, viveu um tempo com Ash antes de voltar para o seu mundo?",
    "resposta": "Poipole",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Poipole",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Sun_%26_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Poipole",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Sun_%26_Moon",
        "situacao": "ok",
        "texto": "Pokémon the Series: Sun & Moon is the twentieth season of the Pokémon anime series and the first and titular season of Pokémon the Series: Sun & Moon, known in Japan as Pocket Monsters: Sun & Moon (ポケットモンスター サン&ムーン, Poketto Monsutā: San & Mūn)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Series%3A_Sun_%26_Moon_%28temporada%29",
        "situacao": "ok",
        "texto": "Pokémon the Series: Sun & Moon (Brasil: Pokémon: Sol e Lua / Portugal: Pokémon A Série Sol e Lua) é a vigésima temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada de Pokémon, a Série: Sol e Lua (Pokémon the Series: Sun & Moon).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Mimikyu de Jessie",
      "descricao": "Mimikyu que pertence a Jessie, da Equipe Rocket, na série Sol e Lua do anime Pokémon."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na série Sol e Lua, o Mimikyu de Jessie, da Equipe Rocket, ou Team Rocket, tem uma obsessão que o move em toda batalha. Qual é?",
    "resposta": "Derrotar o Pikachu de Ash",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Jessie%27s_Mimikyu",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jessie%27s_Mimikyu",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nJessie, James, and Meowth are a group of Team Rocket members. They act as one of the three primary antagonists of the anime series for the first twenty-five seasons, often coming into conflict with Ash Ketchum in an attempt to capture his Pikachu. They primarily act as comic relief, though they have also acted as serious antagonists on several occasions. Jessie owns a Wobbuffet, who is the source of a running gag where he pops out of his Poké Ball at the strangest times.\n[…]\nIn a 2018 interview, the creators of Detective Pikachu, which features a talking Pikachu, revealed that the original intention for the anime was to have the Pokémon talk, but OLM, Inc. was unable to come up with a concept that Game Freak, developer of the mainline games, were accepting of.\n[…]\nTeam Rocket tries the latest scheme to catch Pikachu or whatever else, and fails miserably.\" He concluded: \"at the end of the day, this franchise feels more like crass marketing then [sic] trying to preach the importance of friend and companionship.\" In an April 2008 review, Common Sense Media gave the series 3 out of 5 stars, saying: \"Over the years, the energetic, imagination-filled, Japanese-inspired fantasy series has cut across cultural, gender, and age barriers to captivate a global audience of girls, boys, and even adults\", but added: \"Folks may also find the franchise's massive commercial appeal disturbing, especially since the show is mainly geared towards kids.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nAo longo de sua jornada, Ash alcança diversos marcos, incluindo se tornar o primeiro Campeão da Liga Alola, onde também frequentou a Escola Pokémon, e finalmente derrotar Leon para se tornar o Monarca do Campeonato da Coroação Mundial. Após atingir esse ápice, Ash continua suas viagens com Pikachu para conhecer e fazer amizade com novos Pokémon, a fim de alcançar seu objetivo de se tornar um Mestre Pokémon.\n[…]\nPokémon, a Série\n[…]\nPokémon Horizontes, a Série\n[…]\nO anime possui duas animações principais, que são Pokémon, a Série de 1997 a 2023, narra as jornadas de Ash Ketchum e Pikachu, e Pokémon Horizontes, a Série, a partir de 2023, narra as jornadas de Liko e Roy ou Rain atualmente.\n[…]\nA Equipe Rocket tenta o plano mais recente para capturar Pikachu ou qualquer outra coisa, e falha miseravelmente.\" Ele concluiu: \"no final das contas, esta franquia parece mais marketing grosseiro do que uma tentativa de pregar a importância da amizade e do companheirismo.\" Em uma crítica de abril de 2008, o Common Sense Media deu à série, 3 de 5 estrelas, dizendo: \"Ao longo dos anos, a série de fantasia energética, repleta de imaginação e inspirada no Japão ultrapassou barreiras culturais, de gênero e idade para cativar um público global de meninas, meninos e até adultos\", mas acrescentou: \"As pessoas também podem achar o enorme apelo comercial da franquia perturbador, especialmente porque o programa é voltado principalmente para crianças.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Roy",
      "descricao": "Protagonista da série Pokémon Horizontes, ao lado de Liko, menino de uma ilha que sonha com aventuras."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Horizontes, que pokémon inicial de fogo de Paldea, um crocodilinho guloso, vira o parceiro de Roy?",
    "resposta": "Fuecoco",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Roy",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Horizons:_The_Series"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Roy",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Horizons:_The_Series",
        "situacao": "ok",
        "texto": "Pokémon Horizons: The Series, known in Japan as Pocket Monsters: Liko and Roy's Departure and Pocket Monsters: The Sparkling of Terapagos, is the twenty-sixth season of the Pokémon anime series and the first season of Pokémon Horizons: The Series, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā).\n[…]\nThe season comprises two story arcs. The first arc, \"Liko and Roy's Departure\", covering the first 25 episodes, follows protagonists Liko and Roy as they embark on adventures with the Rising Volt Tacklers, exploring the Pokémon world, including the Paldea region introduced in Pokémon Scarlet and Violet.\n[…]\nOn December 16, 2022, The Pokémon Company announced that a new series of the Pokémon anime would air in Japan on April 14, 2023, following the conclusion of a final arc that served as an epilogue to Pokémon Ultimate Journeys, set to conclude the story of Ash Ketchum, the main protagonist of the anime series since it began on April 1, 1997, and concluded on March 24, 2023. The first trailer was released on March 3, 2023, announcing that the series would premiere in Japan on April 14, 2023.\n[…]\nPokémon.com listing\n[…]\nPokémon Horizons: The Series at IMDb\n[…]\nPokémon Horizons: The Series (season 1) at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Horizons%3A_the_Series",
        "situacao": "ok",
        "texto": "A Série Pokémon: Horizontes no Brasil ou Pokémon Horizontes: A Série em Portugal, conhecido também nos Estados Unidos como Pokémon Horizons: the Series, e conhecido originalmente no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit.\n[…]\n\"Monstros de Bolso\"), é um segundo anime de Pokémon, que reúne as 4 temporadas, e faz parte da nona série do anime Pokémon, que reúne as temporadas 26 a 29, adaptando os jogos eletrônicos Pokémon Scarlet e Violet e transmitido no Japão pelo canal TV Tokyo em 14 de abril de 2023 - até o momento. No Brasil e no resto do mundo estreou na Netflix, no dia 7 de março de 2024. Em Portugal começou a ser transmitida pelo canal Panda Kids no dia 18 de março de 2024.\n[…]\nAo contrário das séries anteriores, que seguiram Ash Ketchum, esta série apresenta Liko, uma garota da região de Paldea, que é acompanhada por Sprigatito, um dos Pokémon iniciais da região, que usa um pingente misterioso, e Rain, um menino da região de Kanto que possui uma misteriosa Pokébola. Em suas jornadas, eles encontram Friede, um professor Pokémon cujo parceiro Pokémon é o Capitão Pikachu. A série baseado em Pokémon Scarlet e Violet.\n[…]\n26ª temporada: Horizontes: episódios 1-45\n[…]\n27ª temporada: Horizontes – Temporada 2 – A Busca por Laqua (Brasil) ou Pokémon Horizontes: Temporada 2 – A Busca por Laqua (Portugal): episódio 46-89\n[…]\n«Site oficial da A Série Pokémon: Horizontes». pelo Pokémon.com/br (em português brasileiro)\n[…]\n«Site oficial do anime Pokémon» (em japonês). para TV Tokyo\n[…]\n«Página de Pokémon». para TV Tokyo (em japonês)\n[…]\n«Site oficial do anime Pokémon» (em japonês). pelo site oficial de Pokémon JP\n[…]\nPokémon Horizons: The Series (TV) (anime) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Roy",
      "descricao": "Protagonista da série Pokémon Horizontes, ao lado de Liko, menino de uma ilha que sonha com aventuras."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Horizontes, Roy sonha com aventuras desde pequeno por causa de uma lenda que ouviu. Que pokémon, de cor rara, ele quer encontrar e enfrentar?",
    "resposta": "Rayquaza negro",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Roy",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Horizons:_The_Series"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Roy",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Horizons:_The_Series",
        "situacao": "ok",
        "texto": "Pokémon Horizons: The Series, known in Japan as Pocket Monsters: Liko and Roy's Departure and Pocket Monsters: The Sparkling of Terapagos, is the twenty-sixth season of the Pokémon anime series and the first season of Pokémon Horizons: The Series, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā).\n[…]\nThe season comprises two story arcs. The first arc, \"Liko and Roy's Departure\", covering the first 25 episodes, follows protagonists Liko and Roy as they embark on adventures with the Rising Volt Tacklers, exploring the Pokémon world, including the Paldea region introduced in Pokémon Scarlet and Violet.\n[…]\nOn December 16, 2022, The Pokémon Company announced that a new series of the Pokémon anime would air in Japan on April 14, 2023, following the conclusion of a final arc that served as an epilogue to Pokémon Ultimate Journeys, set to conclude the story of Ash Ketchum, the main protagonist of the anime series since it began on April 1, 1997, and concluded on March 24, 2023. The first trailer was released on March 3, 2023, announcing that the series would premiere in Japan on April 14, 2023.\n[…]\nPokémon.com listing\n[…]\nPokémon Horizons: The Series at IMDb\n[…]\nPokémon Horizons: The Series (season 1) at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Horizons%3A_the_Series",
        "situacao": "ok",
        "texto": "A Série Pokémon: Horizontes no Brasil ou Pokémon Horizontes: A Série em Portugal, conhecido também nos Estados Unidos como Pokémon Horizons: the Series, e conhecido originalmente no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit.\n[…]\nEsta série narra as aventuras de Liko e Rain.\n[…]\nAo contrário das séries anteriores, que seguiram Ash Ketchum, esta série apresenta Liko, uma garota da região de Paldea, que é acompanhada por Sprigatito, um dos Pokémon iniciais da região, que usa um pingente misterioso, e Rain, um menino da região de Kanto que possui uma misteriosa Pokébola. Em suas jornadas, eles encontram Friede, um professor Pokémon cujo parceiro Pokémon é o Capitão Pikachu. A série baseado em Pokémon Scarlet e Violet.\n[…]\nPocket Monsters: Rayquaza Rising (ポケットモンスター: レックウザ ライジング, Poketto Monsutā: Rekkūza Raijingu; lit. \"Monstros de Bolso: Ascensão de Rayquaza\"): episódios 68-88\n[…]\n26ª temporada: Horizontes: episódios 1-45\n[…]\n27ª temporada: Horizontes – Temporada 2 – A Busca por Laqua (Brasil) ou Pokémon Horizontes: Temporada 2 – A Busca por Laqua (Portugal): episódio 46-89\n[…]\n28ª temporada: Horizontes – Temporada 3 – Altas Esperanças (Brasil) ou Horizontes: Temporada 3 – Esperança Eletrizante (Portugal): episódios 90-136\n[…]\n29ª temporada: Horizontes – Temporada 4 – Maravilhas à Vista: episódios 137-em breve\n[…]\n«Site oficial da A Série Pokémon: Horizontes». pelo Pokémon.com/br (em português brasileiro)\n[…]\n«Site oficial do anime Pokémon» (em japonês). para TV Tokyo\n[…]\n«Página de Pokémon». para TV Tokyo (em japonês)\n[…]\n«Site oficial do anime Pokémon» (em japonês). pelo site oficial de Pokémon JP\n[…]\nPokémon Horizons: The Series (TV) (anime) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Capitão Pikachu",
      "descricao": "Pikachu parceiro de Friede e figura de liderança dos aventureiros Rising Volt Tacklers na série Pokémon Horizontes."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Horizontes, os aventureiros Rising Volt Tacklers têm um pokémon chamado de Capitão, parceiro do professor Friede. De que espécie ele é?",
    "resposta": "Pikachu",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Captain_Pikachu",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Horizons:_The_Series"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Captain_Pikachu",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Horizons:_The_Series",
        "situacao": "ok",
        "texto": "Pokémon Horizons: The Series, known in Japan as Pocket Monsters: Liko and Roy's Departure and Pocket Monsters: The Sparkling of Terapagos, is the twenty-sixth season of the Pokémon anime series and the first season of Pokémon Horizons: The Series, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā).\n[…]\nThe season comprises two story arcs. The first arc, \"Liko and Roy's Departure\", covering the first 25 episodes, follows protagonists Liko and Roy as they embark on adventures with the Rising Volt Tacklers, exploring the Pokémon world, including the Paldea region introduced in Pokémon Scarlet and Violet.\n[…]\nThe second arc, \"The Sparkling of Terapagos\", covering the final 20 episodes, follows the Rising Volt Tacklers as they search for Lucius's Six Heroes, after discovering that Liko's pendant is a Terapagos. Throughout both arcs, they are pursued by a mysterious organization called the Explorers.\n[…]\nThe opening themes are \"Heart-Pounding Diary\" (ドキメキダイアリー, Dokimeki Daiarī) by Asmi featuring Chinozo, and \"Halo\" (ハロ, Haro) by Yama and BotchiBoromaru. The ending theme is \"RVR: Rising Volt Tacklers' Rap\" (RVR〜ライジングボルテッカーズラップ〜, RVR: Raijingu Borutekkāzu Rappu), an image song performed by Liko (Minori Suzuki) and Roy (Yuka Terasaki).\n[…]\nPokémon.com listing\n[…]\nPokémon Horizons: The Series at IMDb\n[…]\nPokémon Horizons: The Series (season 1) at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Horizons%3A_the_Series",
        "situacao": "ok",
        "texto": "A Série Pokémon: Horizontes no Brasil ou Pokémon Horizontes: A Série em Portugal, conhecido também nos Estados Unidos como Pokémon Horizons: the Series, e conhecido originalmente no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit.\n[…]\nEsta série narra as aventuras de Liko e Rain.\n[…]\nAo contrário das séries anteriores, que seguiram Ash Ketchum, esta série apresenta Liko, uma garota da região de Paldea, que é acompanhada por Sprigatito, um dos Pokémon iniciais da região, que usa um pingente misterioso, e Rain, um menino da região de Kanto que possui uma misteriosa Pokébola. Em suas jornadas, eles encontram Friede, um professor Pokémon cujo parceiro Pokémon é o Capitão Pikachu. A série baseado em Pokémon Scarlet e Violet.\n[…]\n26ª temporada: Horizontes: episódios 1-45\n[…]\n27ª temporada: Horizontes – Temporada 2 – A Busca por Laqua (Brasil) ou Pokémon Horizontes: Temporada 2 – A Busca por Laqua (Portugal): episódio 46-89\n[…]\n28ª temporada: Horizontes – Temporada 3 – Altas Esperanças (Brasil) ou Horizontes: Temporada 3 – Esperança Eletrizante (Portugal): episódios 90-136\n[…]\n29ª temporada: Horizontes – Temporada 4 – Maravilhas à Vista: episódios 137-em breve\n[…]\nRVR: Rising Voltacklers Rap (RVR〜ライジングボルテッカーズラップ〜, RVR: Raijingu Borutekkāzu Rappu) realizada por Minori Suzuki como Liko e Yuka Terasaki como Rain\n[…]\n«Site oficial da A Série Pokémon: Horizontes». pelo Pokémon.com/br (em português brasileiro)\n[…]\n«Site oficial do anime Pokémon» (em japonês). para TV Tokyo\n[…]\n«Página de Pokémon». para TV Tokyo (em japonês)\n[…]\n«Site oficial do anime Pokémon» (em japonês). pelo site oficial de Pokémon JP\n[…]\nPokémon Horizons: The Series (TV) (anime) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.71 — 2026-10-16**
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
- no máximo **3 perguntas por âncora** no banco inteiro, somando texto e figura, e no máximo **2 com figura**. As exclusivas de uma coleção têm conta à parte (§6, "Coleções");
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
- As perguntas da coleção seguem esta Parte I: tema e subtema, âncora, fontes, redação e critérios. Podem ser com ou sem figura.
- **Regras de conteúdo próprias:** o documento de uma coleção pode ter regras de conteúdo para as exclusivas dela, que partem desta Parte I e prevalecem sobre ela onde divergirem. Nos lotes exclusivos, o gerador e o crítico recebem esta Parte I e, depois dela, essas regras.
- **Saturação das exclusivas:** é contada só dentro da coleção, com o limite definido no documento dela, e as exclusivas não contam na saturação do jogo original, porque uma partida nunca sorteia os dois conjuntos.
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

---

# Regras de conteúdo do modo (modo_pokemon.md)

Estas são as regras de conteúdo do **modo Pokémon**, que valem para as perguntas exclusivas dele (`colecao: "pokemon"`, `exclusiva: true`). Elas partem da Parte I do MANIFESTO acima: princípios, classificação, ângulos, tipos de pergunta, redação para voz e critérios de qualidade continuam valendo. **Onde estas regras e o MANIFESTO divergirem, valem estas.**

### Público e profundidade

- **O público é quem gosta de pokémon:** já jogou alguns jogos, viu o anime e conhece pokémon de várias gerações. Isso substitui o "público informado, mas leigo" do MANIFESTO §7: termos da franquia (tipo, evolução, ginásio, insígnia, lendário, Pokédex, megaevolução, iniciais) dispensam explicação.
- **Pode ir mais fundo que no jogo original**, mas a régua da justiça continua: um fã diria "boa pergunta", e não "que detalhe arbitrário". Profundidade vem do fato, não da obscuridade (MANIFESTO, princípio 4).
- **Entram:** a origem dos nomes, a inspiração dos desenhos, as lendas dos lendários, como e em quem um pokémon evolui, as formas regionais, o enredo e os lugares dos jogos, os líderes e campeões, os bastidores da criação, o anime, os filmes, a dublagem e o Pokémon no Brasil.
- **Ficam de fora:** números da Pokédex, estatísticas, valores de dano e de atributos, probabilidades e mecânicas internas (a chance de um brilhante, taxas de captura), golpes e habilidades obscuros, falhas de programação e dados escondidos (MissingNo., itens duplicados), detalhes que só um competidor saberia, e perguntas que pedem listas. A exceção são os cartões feitos de dados, o de tipo e atributos base e o de golpe ("Qual é esse ataque?"), em que os números aparecem na figura como pista e ninguém precisa sabê-los de cor.

### Cobertura

A franquia inteira, distribuída por **todas as gerações**, e não só Kanto. Cada lote de texto tem um dos três subtemas do modo como foco e procura fatos ainda não usados.

### Variedade

- **Não há cota de ângulos nos lotes:** não valem o máximo de 25% num mesmo ângulo, o mínimo de 6 ângulos, o máximo de 30% para `identidade` + `atributo` nem o piso de 20% para `conexao` + `nome` (MANIFESTO §9). Um lote pode se concentrar no ângulo que o foco pede.
- **Continuam valendo:** no máximo 2 perguntas por âncora no mesmo lote, nunca com o mesmo ângulo; no máximo 2 perguntas com o mesmo ângulo por âncora, na coleção; e perguntas do mesmo ângulo não repetem o mesmo molde de frase (MANIFESTO §5).
- Na silhueta e no cartão de tipo e atributos **não há cota de emblemáticos: todos os pokémon entram**, famosos ou não, de todas as gerações e em todas as formas da linha evolutiva.

### Saturação e repetição

- **A conta é só na coleção.** Na saturação de uma âncora, contam as perguntas com `colecao: "pokemon"`, exclusivas ou não, e não as do jogo original. As exclusivas, por sua vez, não contam na saturação do jogo original, porque uma partida nunca sorteia os dois conjuntos.
- **No máximo 5 perguntas por âncora** na coleção, somando texto e figura, e no máximo **2 com figura**. Isso substitui o limite de 3 do MANIFESTO §4.
- **Silhueta e cartão ficam fora da saturação.** A silhueta da casa "Quem é esse pokémon?", qualquer que seja a pergunta, e o cartão de tipo e atributos não contam nos limites acima, e o mesmo pokémon pode ter os dois. Cada pokémon tem no máximo **uma silhueta** e **um cartão**.
- **Um fato, uma pergunta, na coleção inteira:** uma pergunta nova não pode perguntar um fato que outra pergunta da coleção já pergunta, **mesmo com outra âncora**. Ash e Satoshi é o mesmo fato, pela âncora Ash ou pela âncora Satoshi Tajiri; os nomes de cores das cidades de Kanto também, por Pallet ou por Viridian.

### Nomes

Os jogos ganharam tradução oficial para o português do Brasil a partir de Scarlet e Violet, e o anime sempre foi dublado. Os fãs mais antigos conhecem os nomes em inglês, e os mais novos, os brasileiros. Por isso:

- **Golpes, itens, habilidades, lugares, organizações e personagens:** quando o nome oficial brasileiro é diferente do inglês, a pergunta usa **os dois**.
  - **No enunciado:** o brasileiro primeiro, depois o inglês, ligados por "ou", sem parênteses: "Nos jogos de Kanto, quem lidera a Equipe Rocket, ou Team Rocket?".
  - **Na resposta:** o brasileiro, com o inglês entre parênteses: "Equipe Rocket (Team Rocket)". É o caso de parênteses "muito apropriado" do MANIFESTO §7.
  - **Na múltipla escolha:** as quatro alternativas seguem a mesma forma, para a resposta não se destacar. O limite de 4 palavras vale para cada nome.
  - **Nas variantes da âncora:** os dois nomes.
- **Só nome brasileiro oficial**, de que se tenha certeza: o dos jogos traduzidos, o da dublagem ou o do material oficial da The Pokémon Company no Brasil. Nada de tradução livre: na dúvida, só o nome em inglês.
- **Os nomes dos pokémon** são os mesmos no Brasil e em inglês, e vão uma vez só.
- Os **tipos** usam sempre os nomes oficiais brasileiros (Planta, Venenoso, Fantasma), como nos cartões.
- **"pokémon"**, em minúsculas, é o nome comum da criatura e não vai para o plural ("os pokémon"); **"Pokémon"**, com maiúscula, é a franquia.

### Redação para voz

Além do MANIFESTO §7:
- Nomes com símbolos ou sinais vão na forma falada: "Nidoran fêmea" e "Nidoran macho", e não com ♀ e ♂; "Porygon Z", sem hífen.
- Gerações por ordinal, por extenso: "na quarta geração", e não "na Gen 4".
- Siglas da comunidade (PP, HM, TM, IV, EV) não entram no enunciado; se o conceito importar, diga o que ele é.

### Atemporalidade

A franquia continua lançando jogos e pokémon. Nada de "o jogo mais recente", "a geração atual", "o último pokémon", "quantos pokémon existem", "quantas regiões há" nem de recordes de venda ou de audiência que ainda podem ser batidos. Contagens só de conjuntos fechados: "quantos pokémon tinha a primeira geração" vale.

### Fontes

A Bulbapedia é a referência da franquia, mas bloqueia acesso automatizado: o crítico não lê os trechos dela. Por isso, toda pergunta cita, além da Bulbapedia, uma página da **Wikipédia**, em inglês ou em português, que sustente o fato, sempre que houver uma. Uma pergunta só com a Bulbapedia depende do conhecimento do crítico e só passa com fato amplamente documentado.

### Distratores

Sempre da franquia: outros pokémon, personagens, lugares, itens ou jogos de Pokémon, de preferência da mesma geração ou de gerações vizinhas. Nunca uma alternativa de fora do universo Pokémon.
