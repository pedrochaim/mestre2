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
      "nome": "Meowth",
      "descricao": "Pokémon do tipo Normal, número 52 da Pokédex Nacional."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No anime, o Meowth da Equipe Rocket aprendeu sozinho a andar em pé e a falar como gente. Por que ele se esforçou tanto?",
    "resposta": "Para conquistar uma Meowth fêmea",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Rocket%27s_Meowth",
      "https://en.wikipedia.org/wiki/Meowth"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Rocket%27s_Meowth",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Meowth",
        "situacao": "ok",
        "texto": "Meowth (, mee-OW-th), known in Japanese as Nyarth (Japanese: ニャース), is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise, and the first stage of its evolved form, Persian. First introduced in the video games Pokémon Red and Blue, it has received multiple new forms, including regional variants called Alolan Meowth and Galarian Meowth in Pokémon Sun and Moon and Pokémon Sword an\n[…]\nMeowth has received generally positive reception, its role in the anime being a significant contribution to its popularity in the games.\n[…]\nNintendo World Report writer Pedro Hernandez attributed his enjoyment of the anime to the team, praising Meowth for his \"humor, wit, and snark.\" He stated that he had a Meowth in his game party because of the anime role, wanting to take a \"little bit of the TV series\" into the game.\n[…]\nGamesRadar+ writer Lucas Sullivan felt that Meowth was nothing special, especially as more Pokémon have been introduced with each game, its only saving graces being the koban coin on its forehead and its appeal to cat fans. On the other hand, Sullivan found the anime incarnation significantly more interesting, finding its backstory of learning to speak tragic.\n[…]\nDiscussing Jessie and James' queer characterization, The Daily Beast writer Jay Castello stated that while he was the \"token straight friend\" of the Team Rocket trio, though found it notable that he was voiced by someone who was both intersex and transgender. Andrew Brown felt that Meowth had the most fleshed-out backstory, noting how notable it is that Meowth is both one of the only \"bad guy\" Pokémon and one of the only Pokémon that can speak English without telepathy.\n[…]\nConnor Christie believed that Meowth was the most ubiquitous cat Pokémon, owing to its anime appearance and stating that it stood alongside Pikachu and Jigglypuff in terms of recognizability.\n[…]\nMeowth  at Bulbapedia, a Pokémon wiki"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Charmander",
      "descricao": "Pokémon do tipo Fogo, número 4 da Pokédex Nacional."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Quando Ash conhece seu Charmander, o pokémon espera sozinho numa pedra, debaixo de chuva. Por que ele estava ali?",
    "resposta": "Foi abandonado pelo treinador",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Charizard"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Charizard",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pidgeot",
      "descricao": "Pokémon ave do tipo Normal e Voador, número 18 da Pokédex Nacional, evolução final de Pidgey."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Ainda em Kanto, Ash deixa seu Pidgeot na floresta onde o capturou, prometendo voltar um dia. Com que missão o pokémon ficou ali?",
    "resposta": "Proteger um bando de Pidgey e Pidgeotto",
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
    "indice": 4,
    "ancora": {
      "nome": "Brock",
      "descricao": "Líder de ginásio do tipo Pedra nos jogos Pokémon e companheiro de viagem de Ash no anime."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No fim da saga de Sinnoh, Brock se despede de Ash e para de viajar com ele. Que novo sonho o levou a essa decisão?",
    "resposta": "Tornar-se médico pokémon",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brock_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Brock_(anime)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brock_(Pok%C3%A9mon)",
        "situacao": "ok",
        "texto": "Brock, known as Takeshi (タケシ) in Japan, is a fictional character in the Pokémon franchise owned by Nintendo, Game Freak, and Creatures. In the Pokémon video games, he is the Gym Leader of Pewter City in the Kanto region and mainly uses Rock-type Pokémon. In the anime series, Ash first battles him and then invites Brock to accompany him on his journey so that Brock can become a Pokémon Breeder.\n[…]\nThe ultimate goal is to complete the Pokédex, a comprehensive Pokémon encyclopedia, by capturing, evolving, and trading to obtain creatures from all Pokémon species.\n[…]\nBrock eventually rejoins Ash, having left Ivy for unknown reasons, and travels with him and Misty to Johto. Since then, he has departed and reunited with Ash and others in Hoenn and Sinnoh. He is largely absent after this until the Sun & Moon series, where he appears in a few episodes alongside Misty when he reunites with Ash. He makes another reappearance in Pokémon Ultimate Journeys: The Series during the final episodes of Ash's journey.\n[…]\nThe book Pikachu's Global Adventure: The Rise and Fall of Pokémon cited him as a heavily popular character in the United States, with boys identifying themselves with the character and expressing a desire to be \"friends with characters that are known to be good or considerate friends\". The book additionally noted a contrast to other characters in the series, in that Brock is drawn with \"thinly drawn eyes and slightly darker skin tone\".\n[…]\nHis removal from the anime was criticized by fans. Brock's reintroduction in the Pokémon Sun and Moon anime was met with a lot of attention on Twitter, which ITmedia staff identified as indicative of his popularity. Kotaku writer Brian Ashcraft noted the negative fan reaction to the removal of Brock and Misty from Pokémon the Movie: I Choose You!, particularly since the story is an adaptation of the original story that featured Brock and Misty."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Brock_(anime)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brock",
        "situacao": "ok",
        "texto": "Brock, conhecido no Japão como Takeshi (タケシ) é um personagem fictício da franquia Pokémon, pertencente à Nintendo, Game Freak e Creatures. Nos jogos eletrônicos de Pokémon, ele é o Líder de Ginásio da Cidade de Pewter, na região de Kanto, e usa principalmente Pokémon do tipo Pedra. No anime, Ash o enfrenta pela primeira vez e depois convida Brock para acompanhá-lo em sua jornada para que Brock pos\n[…]\nJunto com seu Onix, Brock também aparece como uma dupla sincronizada em Pokémon Masters EX, perto do início do jogo.\n[…]\nNo anime Pokémon, Brock aspira ser o maior Criador Pokémon do mundo, mas permanece como Líder do Ginásio de Pewter para cuidar de seus nove irmãos. Após ser derrotado por Ash, ele entrega a insígnia a Ash, apesar de Ash achar que ele não a merecia. Brock acaba se juntando a Ash para que ele possa perseguir seu sonho de ser um Criador Pokémon.\n[…]\nBrock recebeu diversos produtos licenciados. Uma figura baseada em sua representação em Pokémon Red e Blue foi lançada como parte da série \"Next VENDOR'S Innovation\". Ele também foi incluído na série de figuras \"G.E.M.\" da Megahouse. Uma tradição anual de modificar a estátua de um homem chamado Hikoichi Orita (na Universidade de Quioto, após ter sido repetidamente vandalizada na década de 1990) levou a uma modificação para representar Brock, entre outros personagens.\n[…]\nSua remoção do anime foi criticada pelos fãs. A reintrodução de Brock no anime Pokémon Sun and Moon foi recebida com muita atenção no Twitter, o que a equipe da ITmedia identificou como indicativo de sua popularidade. O escritor da Kotaku, Brian Ashcraft, observou a reação negativa dos fãs à remoção de Brock e Misty de Pokémon the Movie: I Choose You!, particularmente porque a história é uma adaptação da história original que apresentava Brock e Misty.\n[…]\nBrock na Serebii (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Brock",
      "descricao": "Líder de ginásio do tipo Pedra nos jogos Pokémon e companheiro de viagem de Ash no anime."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome em inglês de Brock, líder do ginásio de Pewter, esconde uma palavra ligada ao tipo dos seus pokémon. Que palavra é essa?",
    "resposta": "Rock, pedra",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Brock"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Brock",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Pokémon 3: O Filme",
      "descricao": "Terceiro filme da franquia Pokémon, de 2000, em que os Unown criam um mundo de cristal ao redor da menina Molly e de um Entei ilusório."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No terceiro filme Pokémon, os misteriosos Unown criam um Entei ilusório para a menina Molly. Que desejo dela deu origem a essa criatura?",
    "resposta": "Ter o pai de volta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_3:_The_Movie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_3:_The_Movie",
        "situacao": "ok",
        "texto": "Pokémon 3: The Movie is a 2000 Japanese anime film directed by Kunihiko Yuyama as the third film in the Pokémon franchise. The film stars the voices of Rica Matsumoto, Ikue Ōtani, Mayumi Iizuka, Yūji Ueda, Megumi Hayashibara, Shin-ichiro Miki, Inuko Inuyama, Yumi Tōma, Satomi Kōrogi, Unshō Ishizuka, Kōichi Yamadera, Naoto Takenaka, Hirohide Yakumaru, and Ai Kato, and Noriko Sakai. In the film, Ash\n[…]\nThe English opening theme is Pokemon Johto by PJ Lequerica, and the English ending theme is To Know the Unknown by Innosense.\n[…]\nAsh locates Molly and Delia, attempting to convince Molly to leave with them, but she is too scared and refuses, causing the power of the Unown to fight back. Entei returns and battles Ash, defeating his Pokémon and nearly killing him and Pikachu. However, having witnessed the crisis on TV in Charicific Valley, Ash's Charizard appears in time to rescue Ash and Pikachu. Entei engages Charizard in a duel and eventually tries to kill him.\n[…]\nPokémon 3: The Movie was released on VHS and DVD on August 21, 2001.\n[…]\nThe film was released in the United States on April 6, 2001, debuting at number 4 on its opening weekend, earning $8,240,752 from 2,675 theaters, less than half as much as first-place finisher Spy Kids. The film proved less successful in the box office compared to previous films. During its 10-week box office run, Pokémon 3: The Movie made a significant profit-margin, grossing $17,052,128 in North America.\n[…]\nPokémon 3: The Ultimate Soundtrack is the soundtrack to the third series and the movie, It was released on April 3, 2001, by Koch Records on Audio CD and Compact Cassette. Many of the songs were featured on the album Totally Pokémon but as that was not released outside of North America and Australia, this soundtrack encouraged European fans to own the music.\n[…]\nPokémon 3: The Movie at IMDb\n[…]\nPokémon 3: The Movie  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_3%3A_Spell_of_the_Unown",
        "situacao": "ok",
        "texto": "Pokémon 3: The Movie: Spell of the Unown, geralmente referido como Pokémon 3: The Movie, originalmente lançado no Japão como Pocket Monsters the Movie: Lord of the \"UNKNOWN\" Tower, ENTEI (劇場版ポケットモンスター 結晶塔の帝王 ENTEI, Gekijōban Poketto Monsutā Kesshōtō no Teiō ENTEI), é um filme de animação de 2000, dirigido por Kunihiko Yuyama. É o terceiro filme da franquia Pokémon, sendo lançado nos cinemas japone\n[…]\nEntei então sai em disparada da torre, indo para o Centro Pokémon onde Ash e os outros estão, e ele avança sobre a mãe de Ash. Entei então a hipnotiza fazendo ela pensar que ela é a mãe de Molly. Pikachu então gruda em Entei, mas ele acaba se escapando. Entei então de volta para casa, encontra Molly que agora acha que a mãe de Ash é a sua mãe, já que ela não vê a sua mãe faz muito tempo.\n[…]\nAsh e os outros ficam observando Carvalho enquanto ele descobre algo sobre Entei. Ele descobre que o poder do Unown é ler a alma de uma pessoa, descobrir o que ela mais quer, e tornar isso real, então o Unown fez com que Entei aparecesse, já que o Entei nunca tinha sido visto antes. Uma outra treinadora Pokémon está vendo o noticiário, a treinadora que treina Charizard. O Charizard de Ash vê a notícia pela janela, e decide ajudar Ash a trazer sua mãe de volta.\n[…]\nUm pouco antes, Molly implora para que seu pai não machuque Charizard. Misty e Brock pedem que Molly vá com a mãe de Ash, dizendo que ela é muito boa em batalhas Pokémon. Então a mãe de Ash e Molly se abraçam. Molly chora de alegria, e os cristais desaparecem. Entei começa a desaparecer, dizendo se ela está feliz assim, ele também está. Eles tentam ir embora, mas os Unowns percebem o que está acontecendo e não querem que Molly vá embora, então eles começam a fazer mais cristais em volta.\n[…]\nA trilha sonora foi produzida nos estúdios Dellart Cine, com a participação do elenco de cantores do CD Totalmente Pokémon.\n[…]\nPokémon Johto (Versão Filme)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Pikachu Ilustrador",
      "descricao": "Carta promocional rara do card game Pokémon, de 1998, considerada uma das cartas mais valiosas da franquia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A carta Pikachu Ilustrador é uma das mais caras do card game Pokémon. Por que existem tão poucas cópias dela?",
    "resposta": "Foi prêmio de um concurso de desenho",
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
    "indice": 8,
    "ancora": {
      "nome": "Charizard",
      "descricao": "Pokémon dos tipos Fogo e Voador, número 6 da Pokédex Nacional."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Johto, Ash deixa seu Charizard num vale habitado por Charizard selvagens. Por que ele toma essa decisão?",
    "resposta": "Para Charizard treinar e ficar mais forte",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Charizard"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Charizard",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Misty",
      "descricao": "Líder de ginásio do tipo Água de Cerulean, nos jogos, e companheira de viagem de Ash no início do anime Pokémon."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No Japão, Misty, a companheira de Ash especialista em pokémon de água, se chama Kasumi. O que significa esse nome?",
    "resposta": "Névoa",
    "distratores": [
      "Chuva",
      "Onda",
      "Orvalho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Misty_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Misty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Misty_(Pok%C3%A9mon)",
        "situacao": "ok",
        "texto": "Misty, known as Kasumi (Japanese: カスミ) in Japan, is a fictional character in the Pokémon franchise owned by Nintendo and created by Satoshi Tajiri. She has appeared as a Gym Leader in the Pokémon video games Pokémon Red and Blue, Pokémon Gold and Silver and their respective remakes.\n[…]\nThe disc differs from the other Japanese disc, as Misty's (Kasumi) voice actor is the narrator. Misty, as well as most of the gym leaders in Pokémon history, reappear in Pokémon Black 2 and White 2 as part of the Pokémon World Tournament.\n[…]\nMisty made more appearances in Pokémon Ultimate Journeys: The Series as Ash's journey with the show came to end.\n[…]\nMisty aims to be a world-class Water-type Pokémon Trainer despite her older sisters' ridicule.\n[…]\nAfter a while, the battle is won when Clefairy sucks up all the water in a nearby river and releases the water onto Misty's Pokémon, sending it flying into the sky. Just when Misty is about to reward Red's group with the prize they sought, the stone is stolen.\n[…]\nAnime Classics Zettai!: 100 Must-See Japanese Animation Masterpieces praised the character as being \"particularly nuanced\" and described her as contributing heavily to the series' appeal. Pikachu's Global Adventure: The Rise and Fall of Pokémon stated that though the anime focused on Ash, Misty was a distinctly significant character especially to young female consumers, neither \"butch\" nor \"dizzily feminine\", seemingly \"carefully constructed to appeal to preadolescent girls\".\n[…]\nIt added that, unlike other aggressive female characters in the series, Misty did not sacrifice her femininity to succeed, making the character further popular with young American women, a contrast to Japanese children who focused more on the individual Pokémon species to identify with.\n[…]\nMisty (anime) on Bulbapedia"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Misty",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Misty",
        "situacao": "desambiguacao",
        "texto": "Misty pode referir-se a:\n\nMisty (Pokémon)\nMisty (satélite)\n\n\n== Ver também ==\nTodas as páginas cujo título começa por \"Misty\"\nTodas as páginas que tenham \"Misty\" no título\nBusca por \"misty\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Jessie e James",
      "descricao": "Dupla de vilões da Equipe Rocket no anime Pokémon, que persegue Ash ao lado do Meowth falante."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No Japão, Jessie e James se chamam Musashi e Kojiro, como dois rivais lendários da história japonesa. O que esses rivais eram?",
    "resposta": "Samurais",
    "distratores": [
      "Ninjas",
      "Lutadores de sumô",
      "Monges budistas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jessie_and_James",
      "https://bulbapedia.bulbagarden.net/wiki/Jessie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jessie_and_James",
        "situacao": "ok",
        "texto": "Team Rocket (Japanese: ロケット団, Hepburn: Roketto-dan; Japanese: [ɾo̞ke̞t̚to̞ dã̠ɴ]) is a fictional crime syndicate in the Pokémon franchise. Team Rocket is the primary antagonist in the original Pokémon video games Red, Green, and Blue, as well as in the long-running Pokémon anime TV-series. In the latter, Team Rocket is primarily represented through the trio of characters Jessie, James, and Meowth,\n[…]\nIn the long-running Pokémon anime series, a trio of Team Rocket grunts Jessie (ムサシ, Musashi), James (コジロウ, Kojirō), and Meowth (ニャース, Nyarth) are major secondary characters. The three were the primary antagonists of the anime series, where each episode they attempt to kidnap Ash Ketchum's Pikachu.\n[…]\nThe names Jessie and James reference famous American outlaw Jesse James; their Japanese names Musashi and Kojirō refer to the samurai Miyamoto Musashi and Sasaki Kojiro.\n[…]\nThe book Japanese Influence on American's Children's Television: Transforming Saturday Morning praised Jessie in particular for being a strong female character, acting as James's superior, as well as how she did not fall into a stereotypical female role. Meowth's role on the team has also been met with a positive response, being considered an integral and iconic part of the team. He has been highlighted as a key part of why his species was so well-known.\n[…]\nChris Carter of Destructoid called the English voice team for Jessie, James, and Meowth (Lillis, Stuart, and Blaustein) \"some of the show's finest work.\" Their role in Pokémon the Series: Black & White was cited by Polygon to be one of the biggest missed opportunities with their characters, due to the sudden cancellation of several episodes leading to Team Rocket's character changes in the series being for \"nothing.\""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jessie",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Equipe_Rocket",
        "situacao": "ok",
        "texto": "A Equipe Rocket, conhecido em inglês como Team Rocket (japonês: ロケット団, Hepburn: Roketto-dan; [ɾo̞ke̞t̚to̞ dã̠ɴ]), é uma organização criminosa fictícia da franquia Pokémon. Ela é a principal antagonista nos jogos originais de Pokémon Red, Green e Blue, bem como na longa série de anime Pokémon. Nesta última, a Equipe Rocket é representada principalmente pelo trio de personagens Jessie, James e Meowt\n[…]\nNa longa série de anime Pokémon, um trio de recrutas da Equipe Rocket, Jessie (ムサシ, Musashi), James (コジロウ, Kojirō) e Meowth (ニャース, Nyarth), são personagens secundários importantes. Os três eram os principais antagonistas da série, onde em cada episódio tentavam sequestrar o Pikachu de Ash Ketchum.\n[…]\nOs nomes Jessie e James fazem referência ao famoso fora da lei americano Jesse James; seus nomes japoneses, Musashi e Kojirō, referem-se aos samurais Miyamoto Musashi e Sasaki Kojiro.\n[…]\nO livro Anime Classics Zettai!: 100 Must-See Japanese Animation Masterpieces analisa a Equipe Rocket como os antagonistas do anime, que na verdade proporcionam alívio cômico através dos personagens Jessie e James, com Meowth retratado como um \"gato esperto\" que se destaca entre os outros Meowth. O livro também menciona Jessie, que possui um charme irresistível, como a líder acima de James.\n[…]\nEle descreve Jessie como uma personagem feminina forte, agindo como superiora de James, e como ela não se encaixa em um papel feminino estereotipado. O papel de Meowth na equipe foi recebido com uma resposta positiva, sendo considerado uma parte integral e icônica da equipe. Ele foi destacado como uma parte fundamental do motivo pelo qual sua espécie era tão conhecida.\n[…]\nO Fandom Post disse que Jessie e James eram o \"Melhor Casal de Vilões\" devido ao seu trabalho árduo contínuo, bem como interações ao longo de vários episódios.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Clemont",
      "descricao": "Inventor e líder do ginásio de Lumiose, em Kalos, companheiro de viagem de Ash na série Pokémon XY."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Clemont, o jovem inventor que lidera o ginásio de Lumiose, tem um nome inspirado em qual fruta cítrica, parente da tangerina?",
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
    "indice": 12,
    "ancora": {
      "nome": "Ash Ketchum",
      "descricao": "Treinador protagonista do anime Pokémon, chamado Satoshi no Japão."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O sobrenome Ketchum, do protagonista Ash, é um trocadilho em inglês com qual expressão do lema da franquia Pokémon?",
    "resposta": "Catch 'em, pegue-os",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ash_Ketchum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ash_Ketchum",
        "situacao": "ok",
        "texto": "Ash Ketchum, known as Satoshi (サトシ) in Japan, is a character in the Pokémon franchise owned by Nintendo, Game Freak, and Creatures. He was the protagonist of the Pokémon anime for the first 25 seasons, as well as the protagonist of several manga series. In Japanese, the character is voiced by Rica Matsumoto. In the English dub, he was voiced by Veronica Taylor in the first eight seasons and Sarah \n[…]\nSatoshi Tajiri, the creator of Pokémon, has stated that Ash represents the \"human aspect\" of the series, and that Ash reflects what he himself was like as a child.\n[…]\nDuring localization of both for North American audiences, the character's name was changed in the anime to \"Ash Ketchum\", the first name taken from one of the possible default names players could select for the player character in Pokémon Red and Blue, and the surname tying into the tagline for the series, \"Gotta catch 'em all!\". He is loosely based on Red, the player character of Pokémon Red and Blue.\n[…]\nAsh later appeared as an unlockable Sync Pair in Pokémon Masters EX, where he is paired with Pikachu.\n[…]\nThe book Monster Kids: How Pokémon Taught a Generation to Catch Em All, highlighted Ash's role, citing him as a constant and comforting companion to viewers due to his longevity, and as being a character that \"each new generation of Pokémon fans could relate to.\"\n[…]\nThe Radio Times cited, however, that the change was a positive one, as despite Ash's iconicity, \"If Ash can't grow, how can the show itself evolve and develop? It's admirable how long Pokémon has managed to recycle the same themes and ideas, but even with new generations of cute little pocket monsters to catch, there's only so long we could have watched Ash lose his tournaments over and over again.\"\n[…]\nFrank, Allegra (January 3, 2017). \"Did Ash Ketchum just get his first kiss?\". Polygon. Retrieved April 15, 2024.\n[…]\nAsh Ketchum on Bulbapedia\n[…]\nAsh Ketchum on Serebii"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ash_Ketchum",
        "situacao": "ok",
        "texto": "Ash Ketchum (サトシ, Satoshi) é um personagem fictício da franquia Pokémon, propriedade das empresas Nintendo, Game Freak e Creatures.\n[…]\nCriado por Satoshi Tajiri, Ash Ketchum como é conhecido, é o protagonista da série de anime Pokémon. Ash é um treinador Pokémon cujo maior objetivo é o de se tornar o maior Mestre Pokémon do mundo.\n[…]\nSeu nome em inglês é derivado do nome japonês (como as letras 'ash' estão incluídas em 'Satoshi') e seu lema em inglês é derivado do lema japonês (como as letras \"Gotta catch 'em all!\" estão incluídas em \"Pokémon getto da ze!\"). O sonho de Ash é se tornar um Mestre Pokémon. Ele é vagamente baseado em Red, o protagonista dos jogos Pokémon Red, Green, Blue e Yellow, bem como os remakes Pokémon FireRed e LeafGreen.\n[…]\nNa versão japonesa, seu nome é Satoshi, derivado diretamente do nome do criador da franquia, Satoshi Tajiri. É bem provável que seu nome americano tenha sido escolhido entre os nomes disponíveis nas versões Red e Blue originais e em Pokémon Yellow, onde \"Ash\" é uma das opções de nome prontas para o personagem jogador das versões americanas, e seu sobrenome \"Ketchum\" é um trocadilho com o slogan americano da franquia, \"Gotta catch 'em all\". Na versão francesa do anime, Ash é chamado de \"Sacha\".\n[…]\nAsh possui duas aparições em jogos da franquia; em Pokémon Puzzle League, lançado no ano de 2000 para Nintendo 64 e em Pokémon Masters EX, para Android e iOS. Em Pokémon Red e Blue (e nos remakes FireRed e LeafGreen), ele contém uma linha do tempo semelhante ao do protagonista Red. Isso se reproduz em quase todos os jogos da série principal.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Fábio Lucindo",
      "descricao": "Dublador brasileiro, voz de Ash Ketchum na versão brasileira do anime Pokémon."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na dublagem brasileira, que profissional liga o treinador Ash, de Pokémon, ao careca Kuririn, de Dragon Ball?",
    "resposta": "O dublador Fábio Lucindo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/F%C3%A1bio_Lucindo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/F%C3%A1bio_Lucindo",
        "situacao": "ok",
        "texto": "Fábio Pinheiro Freme Lopes Lucindo, mais conhecido como Fábio Lucindo (São Paulo, 16 de fevereiro de 1984), é um ator, dublador, diretor de dublagem, escritor e apresentador de televisão brasileiro.\n[…]\nEntre seus trabalhos mais conhecidos estão os personagens Ash Ketchum (Pokémon até a 18ª temporada), Arnold (Hey Arnold!), Bucky (Bucky),Doma (demon slayer),Syaoran (Sakura Card Captors), Kuririn (Dragon Ball), Kiba Inuzuka (Naruto), Takuya Kanbara (Digimon Frontier), Mega Man (MegaMan NT Warrior), Ichigo Kurosaki (Bleach), Killua Zoldyck (Hunter × Hunter) Shinji Ikari (Neon Genesis Evangelion), Ryoma Echizen (The Prince of Tennis), Katsuki Bakugou (Boku no Hero Academia), Miroku (InuYasha), Tao Ren (Shaman King) e Spyro na franquia Skylanders.\n[…]\nRecebeu indicação tripla no Prêmio Yamato de 2011 na categoria de Melhor Dublador de Anime, por seu trabalho como Ash Ketchum, em Pokémon; Ichigo Kurosaki, em Bleach; e Kuririn, em Dragon Ball Kai.\n[…]\nEm 2021, foi indicado ao Prêmio Cubo de Ouro na categoria Dublagem Geek do Ano por sua interpretação de Legoshi, de Beastars.\n[…]\nEm 2023, foi indicado ao Anime Awards Brasil na categoria Melhor Performance em Dublagem Brasileira por sua interpretação de Tsukasa Kazuki, de Romantic Killer.\n[…]\nEm 26 de setembro de 2015, Fábio lançou oficialmente sua primeira obra literária, \"Até Então\".\n[…]\nFábio & seus Lucindos (rubrica) - Rádio Universidade de Coimbra (Portugal) | Café Olé de segunda-feira (10h-12h) - 2021/atualidade\n[…]\nNeon Genesis Evangelion Terceira dublagem para a Netflix.\n[…]\nNeon Genesis Evangelion Terceira dublagem para a Netflix.\n[…]\nFábio Lucindo  na enciclopédia do Anime News Network (em inglês)"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Ikue Ōtani",
      "descricao": "Dubladora japonesa que dá voz ao Pikachu de Ash no anime Pokémon."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Ao contrário dos personagens humanos, o que a voz do Pikachu na versão japonesa do anime tem em comum com a da versão brasileira?",
    "resposta": "É a mesma dubladora, Ikue Ohtani",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ikue_%C5%8Ctani",
      "https://en.wikipedia.org/wiki/Pikachu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ikue_%C5%8Ctani",
        "situacao": "ok",
        "texto": "Ikue Ōtani (大谷 育江, Ōtani Ikue; born August 18, 1965) is a Japanese actress who specializes in voice acting. She is best known for her anime roles in the Pokémon series (as Pikachu), One Piece (as Tony Tony Chopper), Detective Conan (as Mitsuhiko Tsuburaya), Corpse Party (as Sachiko Shinozaki),  Naruto (as Konohamaru Sarutobi), Cookie Run: Kingdom (as Pancake Cookie), Smile PreCure! (as Candy), Uch\n[…]\nPersona 5 (Morgana)\n[…]\nPersona 5 Strikers (Morgana)\n[…]\nPersona 5 Tactica (Morgana)\n[…]\nPokémon series (Pikachu)\n[…]\nSuper Smash Bros. series (Pikachu)\n[…]\nDetective Pikachu (2019) – Detective Pikachu (voice)\n[…]\nIkue Ōtani Archived October 30, 2020, at the Wayback Machine at Ryu's Seiyuu Info\n[…]\nIkue Ōtani  at Anime News Network's encyclopedia\n[…]\nIkue Ōtani at IMDb\n[…]\nIkue Ōtani at the Japanese Movie Database (in Japanese)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pikachu",
        "situacao": "ok",
        "texto": "Pikachu ( ; Japanese: ピカチュウ, Hepburn: Pikachū) is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise, and the franchise's mascot. First introduced in the video games Pokémon Red and Blue, it was created by Atsuko Nishida at the request of lead designer Ken Sugimori, with the design finalized by Sugimori. Since Pikachu's debut, it has appeared in multiple games including Pokémon\n[…]\nWhile Pikachu has been primarily voiced in media by Ikue Ōtani, other actors have also voiced the character including Kate Bristol, Ryan Reynolds, Kaiji Tang, Hidetoshi Nishijima, Tōru Ōkawa, and Koichi Yamadera.\n[…]\nFor the vast majority of appearances Ikue Ōtani has voiced the character since it was introduced in the Pokémon anime. Ōtani records new lines for many of Pikachu's reappearances, and stated that despite the similar dialogue \"If you don't have a clear understanding of what you want to say in the scene and come up with a plan for your performance, you won't convey anything...\n[…]\nPikachu's personality was described by the book Millennial Monsters: Japanese Toys and the Global Imagination as helping to emphasize not only Pikachu as a character, but also helping in making the anime series as a whole more widely popular, with the reciprocal nature of Pikachu's relationship with Ash in the vein of trainer and pet being appealing both to an older concept while still being futuristic in nature.\n[…]\nShe further stated that Pikachu's \"well-written\" appearance in the anime series led to Pikachu also having a strong personality, causing Pikachu to be seen not only as an object of cuteness, but also as a companion for fans. She believed its frequent appearances in promotional material for the series additionally helped to serve as an anchor for the series, with its presence helping to draw people into the wider world of the franchise.\n[…]\nPikachu  at Bulbapedia, a Pokémon wiki\n[…]\nPikachu on Serebii"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ikue_%C5%8Ctani",
        "situacao": "ok",
        "texto": "Ikue Ōtani (大谷 育江 Ōtani Ikue, nascida 18 de Agosto de 1965, em Tóquio), é uma atriz, dubladora seiyū e narradora japonesa que trabalha para a Mausu Promotion. Ela é mais conhecida pro seu trabalho como Pikachu, da franquia Pokémon e Tony Tony Chopper, do anime One Piece. Ela é conhecida por desempenhar papéis masculinos e femininos, e às vezes desempenha vários papéis diferentes em um anime ou vid\n[…]\nPokémon series (Pikachu, Corsola, Mime Jr.,Glameow)\n[…]\nPokémon movies (Pikachu)\n[…]\nPokémon series (Pikachu)\n[…]\nSuper Smash Bros. series (Pikachu)\n[…]\nPersona 5 (Morgana)\n[…]\nOfficial agency profile (em japonês)\n[…]\nIkue Ōtani no seiyuu.info\n[…]\nIkue Ōtani  na enciclopédia do Anime News Network (em inglês)\n[…]\nIkue Ōtani no IMDb\n[…]\nIkue Ōtani no AdoroCinema",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Cilan",
      "descricao": "Líder de ginásio de Striaton e conhecedor pokémon, companheiro de viagem de Ash em Unova no anime."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Brock, Misty, Cilan e Clemont viajaram com Ash em regiões diferentes. Que cargo os quatro ocupam em suas cidades?",
    "resposta": "Líder de ginásio",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Cilan_(anime)",
      "https://bulbapedia.bulbagarden.net/wiki/Clemont_(anime)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cilan_(anime)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Clemont_(anime)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Norman",
      "descricao": "Líder do ginásio de Petalburg, na região de Hoenn, nos jogos e no anime Pokémon."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No anime, May e o irmão Max acompanham Ash por Hoenn. Que laço os dois têm com Norman, líder do ginásio de Petalburg?",
    "resposta": "São filhos dele",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Norman",
      "https://bulbapedia.bulbagarden.net/wiki/May_(anime)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Norman",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/May_(anime)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Rica Matsumoto",
      "descricao": "Dubladora e cantora japonesa, voz de Ash Ketchum na versão original do anime Pokémon."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No Japão, que ligação existe entre a voz de Ash e a cantora da primeira abertura do anime, Mezase Pokémon Master?",
    "resposta": "São a mesma pessoa, Rica Matsumoto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rica_Matsumoto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rica_Matsumoto",
        "situacao": "ok",
        "texto": "Rica Matsumoto (松本 梨香, Matsumoto Rika; born November 30, 1968) is a Japanese actress, voice actress, and singer who was born in Yokohama, Japan. Her name is also sometimes romanized as Rika Matsumoto. She was one of the founders of the anison band JAM Project.\n[…]\nAfter early stage work, she began both voice acting and singing careers. Her most notable role is Satoshi (Ash Ketchum in English localizations), the original main character of the anime series Pokémon. Other notable roles include Rumi Hidaka in Perfect Blue, Ryo Bakura in Yu-Gi-Oh!, Midori Kodama in Azuki Chan, and Aoi Futaba in You're Under Arrest. Matsumoto also performs the songs for many of the openings for the Japanese Pokémon anime.\n[…]\nMatsumoto has had lead or supporting roles in dozens of series. She has also had a radio show in Japan and does some dubbing work for translations of American films and TV series into Japanese. In April 2008, she announced in she was taking time off from JAM Project to focus on her solo work.\n[…]\n\"Mezase Pokémon Master\" (Opening for Pokémon: Original Series Chapter 1: Sekiei Rīgu)\n[…]\n\"Mezase Pokémon Master '98\" (Opening for Pokémon Movie 1: Myūtsū no Gyakushū)\n[…]\n\"Mezase Pokémon Master 2001\" (Opening for Pokémon Movie 4: Serebii Toki wo Koeta Deai)\n[…]\n\"Mezase Pokémon Master 2002\" (Opening for Pokémon Movie 5: Mizu no Miyako no Mamori Gami – Latias to Latios)\n[…]\n\"Mezase Pokémon Master 20th Anniversary Ballad ver.\"\n[…]\n\"Mezase Pokémon Master '98 (2019 Remaster)\" (Opening for Myūtsū no Gyakushū EVOLUTION)\n[…]\nRica Matsumoto Archived June 23, 2018, at the Wayback Machine at GamePlaza-Haruka Voice Acting Database (in Japanese)\n[…]\nRica Matsumoto  at Anime News Network's encyclopedia\n[…]\nRica Matsumoto at IMDb\n[…]\nRica Matsumoto at the Japanese Movie Database (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rica_Matsumoto",
        "situacao": "ok",
        "texto": "Rica Matsumoto (松本 梨香, Matsumoto Rika; Yokohama, 30 de novembro de 1968) é uma atriz, dubladora e cantora japonesa. Ela foi uma das integrantes originais do grupo JAM Project, no qual permaneceu entre 2000 e abril de 2008, quando anunciou que estava deixando a banda para se dedicar a carreira solo.\n[…]\nComo seiyū, um de seus papéis mais conhecidos é Satoshi (Ash Ketchum) em Pokémon.\n[…]\nVenceu o Heisei Anisong Grand Prix (1989-1999) na categoria Melhor Performance, pela música \"Mezase Pokémon Master\".\n[…]\nRica Matsumoto  na enciclopédia do Anime News Network (em inglês)\n[…]\nRica Matsumoto no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Pokémon Heróis",
      "descricao": "Quinto filme da franquia Pokémon, de 2002, estrelado pelos lendários Latios e Latias."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "No filme Pokémon Heróis, Latios e Latias vivem em Altomare, uma cidade de canais inspirada em qual cidade italiana?",
    "resposta": "Veneza",
    "distratores": [
      "Florença",
      "Gênova",
      "Nápoles"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Heroes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Heroes",
        "situacao": "ok",
        "texto": "Pokémon Heroes (also known as Pokémon Heroes: The Movie) is a 2002 Japanese animated film directed by Kunihiko Yuyama and written by Hideki Sonoda. Produced by OLM, Inc. and distributed by Toho, it is the fifth film in the Pokémon series. The film stars Rica Matsumoto, Ikue Ōtani, Mayumi Iizuka, Yūji Ueda, Satomi Kōrogi, Megumi Hayashibara, Shin-ichiro Miki, Inuko Inuyama, Kōichi Yamadera, Unshō I\n[…]\nIn Pokémon Heroes, Ash Ketchum, Misty and Brock travel to the city of Alto Mare and face off against the mysterious spies Annie and Oakley, who seek to use the guardian Pokémon Latias and Latios to power a superweapon. The film takes place during the fifth season of the Pokémon anime.\n[…]\nAt a local museum, the trio learn from its curator and Bianca's grandfather Lorenzo about Alto Mare's history, the defense mechanism, and the evil trainer's fossilized Pokémon on display. Ash finds Bianca and chases her across the city into a hidden garden where Latias and Latios live. As Pikachu plays with the Pokémon, Lorenzo shows Ash the Soul Dew, unaware that Annie and Oakley have used an unmanned aerial vehicle to infiltrate the sanctuary.\n[…]\nThat evening, Annie and Oakley capture Latios and the Soul Dew to power the D.M.A., but Latias escapes and seeks Ash's help. Using the defense mechanism, Oakley locks down the city and revives the evil trainer's Pokémon from the dead. After escaping the lockdown, Ash, Pikachu and Latias travel to the museum to rescue Latios and disable the defense mechanism in the ensuing fight. The Soul Dew shatters from its use in the device, causing the city's water to become a tidal wave.\n[…]\nLatias and Latios combine their powers to stop the wave, but Latios dies in the process and transforms into a new Soul Dew.\n[…]\nPokémon Heroes at IMDb\n[…]\nPokémon Heroes at Rotten Tomatoes\n[…]\nPokémon Heroes at Box Office Mojo\n[…]\nPokémon Heroes  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Heroes",
        "situacao": "ok",
        "texto": "Heróis Pokémon é quinto filme do animê Pokémon lançado em 13 de julho de 2002 no Japão e em 2003 nos Estados Unidos. Seu lançamento no Brasil foi no pay-per-view da Sky em março de 2005.\n[…]\nAsh então percebe que estava ficando tarde e lembra que havia dito a Misty que estaria no Centro Pokémon antes do anoitecer. Latias não queria que ele fosse embora. Kanon se oferece para levá-lo de volta. Durante a volta, Ash faz algumas perguntas a Kanon e uma delas foi porque Latias assume a forma dela. Kanon explica que Latias é superbrincalhona perto de Latios e que às vezes ela se sente sozinha e que vai para o outro lado (a cidade de Alto Mare) para quebrar a rotina.\n[…]\nDepois, Ash e os outros procuram pelos guardiões. Eles avistam um Mantine e outros pokémons de água carregando Latias. Latias acorda e olha pelos lados, procurando pelo irmão. Bongore diz que Latios usou toda sua energia para salvar a cidade, sacrificando sua vida. Ash conforta Latias pela perda do irmão. Eles encontram e “Lágrima do Coração” e voltam para o jardim. Kanon a põe de volta ao seu lugar. Ela e seu pai agradecem a Ash e seus amigos pela ajuda.\n[…]\nNo Brasil, Heróis Pokémon nunca foi lançado oficialmente. A Europa Filmes que comprou os Direitos de Pokémon 4: Viajantes do Tempo não foi rápida o bastante para comprar os direitos de Pokémon 5, que acabou sendo comprada pela Buena Vista. Esta empresa nunca quis lançar o DVD do filme, o que faz do filme o mais raro no Brasil. Heróis Pokémon passou somente duas vezes no Brasil. Ambas na seção de filmes do Jetix e, ainda, no mesmo ano (Janeiro e Março de 2007).\n[…]\nPokémon Heroes no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Detetive Pikachu (filme)",
      "descricao": "Filme de 2019 baseado na franquia Pokémon, em que um Pikachu falante investiga um mistério."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No filme Detetive Pikachu, de 2019, em que cidade fictícia humanos e pokémon vivem lado a lado, sem batalhas?",
    "resposta": "Ryme City",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Detective_Pikachu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Detective_Pikachu",
        "situacao": "ok",
        "texto": "Pokémon Detective Pikachu is a 2019 urban fantasy mystery film and the first live-action film based on the Pokémon franchise. It is loosely based on the 2016 video game Detective Pikachu. Directed by Rob Letterman, who co-wrote it with Dan Hernandez, Benji Samit, and Derek Connolly, the film stars Ryan Reynolds as the voice and motion capture of Pikachu, with Justice Smith, Kathryn Newton, Suki Wa\n[…]\nTim travels to Ryme City and goes to Harry's apartment to sort things out, being surprised by Harry's Pokémon partner, a deerstalker-clad amnesiac Pikachu, whom only Tim can understand. Tim accidentally releases a purple gas known as \"R\" from a vial he finds in Harry's office; they are attacked by a group of Aipom who became aggressive under the gas' influence.\n[…]\nTim and Pikachu are contacted by Howard Clifford, the founder and former chairman of Clifford Industries and of Ryme City. He uses advanced holographic imagery to show them the crash; the hologram was recreated from police footage and allows them to see what police officers cannot or do not want them to see. The hologram reveals that Harry was abducted by a genetically engineered Pokémon called Mewtwo, who seemingly caused the crash and erased Pikachu's memory of the incident.\n[…]\nTim then decides to stay in Ryme City to become a detective and spend more time with Harry and Pikachu.\n[…]\nIkue Ōtani provides Detective Pikachu's normal voice as heard by the citizens of Ryme City other than Tim. Ōtani reprises her role from the Pokémon anime and video games.\n[…]\nHarry Goodman, Tim's missing widowed father and a Ryme City police detective.\n[…]\nOmar Chaparro as Sebastian, a Pokémon Trainer who runs a secret Ryme City Pokémon battle arena and is accompanied by his Charizard.\n[…]\nBill Nighy as Howard Clifford, Roger's disabled father and the visionary behind Ryme City and founder of Clifford Industries.\n[…]\nKadiff Kirwan as Ryme City's unnamed mayor."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Detetive_Pikachu",
        "situacao": "ok",
        "texto": "Pokémon Detective Pikachu (no Brasil e em Portugal, Pokémon: Detetive Pikachu) é um filme nipo-americano de fantasia produzido pela Legendary Entertainment​, The Pokémon Company, Tōhō​ e Warner Bros. Pictures, baseado na franquia “Pokémon” de Satoshi Tajiri, Ken Sugimori, Game Freak e Nintendo. O filme é dirigido por Rob Letterman e estrelado por Ryan Reynolds, Justice Smith, Kathryn Newton, Ken W\n[…]\nNo universo de Pokémon, Tim Goodman é um ex-Treinador de Pokémon e filho do proeminente detetive de Ryme City, Harry Goodman. Convidado por seu pai para trabalhar na delegacia, Tim chega a Ryme City e conhece o detetive Yoshida, um amigo de Harry, e descobre que logo após o envio da passagem de trem para que pudesse chegar a cidade, seu pai tinha desaparecido misteriosamente enquanto trabalhava em um caso.\n[…]\nIkue Ōtani faz a voz normal de Pikachu ouvida pelos cidadãos de Ryme. Ōtani reprisa seu papel dos desenhos e videogames.\n[…]\nHarry Goodman, o pai desaparecido de Tim e um famoso detetive de Ryme City.\n[…]\nOmar Chaparro como Sebastian: um treinador Pokémon que dirige uma arena de batalha Pokémon secreta em Ryme City e é acompanhado por um Charizard.\n[…]\nKen Watanabe como Detetive Yoshida: um veterano da polícia de Ryme City, tenente e amigo de Harry, é acompanhado por um Snubbull.\n[…]\nBill Nighy como Howard Clifford: o pai de Roger e o visionário por trás da Ryme City e fundador da Clifford Industries.\n[…]\nQuando o lançamento japonês do filme foi anunciado em 29 de novembro de 2018, Ryoma Takeuchi foi confirmado para dar voz a Tim Goodman na versão japonesa. Takeuchi também tem uma breve aparição no próprio filme como um treinador Pokémon. Em 20 de março de 2019, foi confirmado que Marie Iitoyo daria voz a Lucy Stevens, e Ken Watanabe iria reprisar seu papel como detetive Yoshida na versão japonesa.\n[…]\nPokémon: Detetive Pikachu no IMDb\n[…]\nDetetive Pikachu (em português) no BurnBook",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Serena",
      "descricao": "Companheira de viagem de Ash na série Pokémon XY, de Kalos, que sonha em ser artista pokémon."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Pokémon XY, Serena reencontra Ash, que ela conheceu quando criança. Onde os dois se viram pela primeira vez?",
    "resposta": "No acampamento do Professor Carvalho",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Serena_(anime)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Serena_(anime)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Pokémon (anime)",
      "descricao": "Série de animação japonesa baseada na franquia Pokémon, protagonizada por Ash e Pikachu até 2023."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1999, o anime Pokémon estreou na TV aberta brasileira por qual emissora?",
    "resposta": "Record",
    "distratores": [
      "Globo",
      "SBT",
      "Band"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_(anime)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_(anime)",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nPokémon estreou no Japão na TV Tokyo em 1 de abril de 1997. A série é transmitida pela família de estações da TX Network primeiro nas noites de quinta-feira; em seguida, é distribuída para o resto das principais emissoras do Japão (All-Nippon News Network, Fuji Network System, Nippon Television Network System) em suas afiliadas locais, bem como em redes privadas de satélite e cabo com vários atrasos.\n[…]\nNos Estados Unidos, o anime foi exibido no Kids' WB como um desenho animado nas manhãs de sábado a partir de fevereiro de 1999.\n[…]\nPokémon chegou ao Brasil no dia 10 de maio de 1999, sendo transmitido inicialmente no programa \"Eliana e Alegria\" da Record. No Cartoon Network, o anime estreou em 6 de setembro do mesmo ano, sendo transmitido inicialmente no \"Talismã\" e esteve transmitido até setembro de 2021. Na TV aberta, Pokémon foi transmitido pela Record da 1ª até a 4ª temporada.\n[…]\nsó transmitia Pokémon de forma \"correta\" e com horário fixo da 1ª temporada até o início da 5ª (quando o anime chegava no episódio 252, pulava direto para a oitava temporada, pois os direitos das demais temporadas ainda estavam com a Globo) através do TV Kids. Da 13ª temporada em diante nunca chegou a ser exibida na TV aberta, sendo transmitidas somente em canais de TV a cabo (Cartoon Network, Tooncast e Gloob) e serviços de streaming (Netflix, Amazon Prime Video e Globoplay).\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Pokémon: O Filme",
      "descricao": "Primeiro filme da franquia Pokémon, em que Ash e Pikachu enfrentam o clone Mewtwo, lançado no Japão no fim dos anos noventa."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nos cinemas, o primeiro filme Pokémon, o do clone Mewtwo, era exibido junto com qual curta-metragem estrelado pelo Pikachu?",
    "resposta": "As Férias do Pikachu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_First_Movie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_First_Movie",
        "situacao": "ok",
        "texto": "Pokémon: The First Movie is a 1998 Japanese animated fantasy adventure film directed by Kunihiko Yuyama. It is the first in the Pokémon anime film series. The film was first released in Japan on July 18, 1998, to positive reviews, with praise directed at the film's emotional impact and exploration of ethical topics such as cloning, genetic modification, and existentialism.\n[…]\nAll the Pokémon originals battle their clones, save for a defiant Pikachu and Meowth, the latter reconciling with his clone after realizing the senselessness of their fighting. Ash, horrified at the pain and anguish felt on both sides of the battle, puts himself in between a psychic blast caused by Mewtwo and Mew's fighting, which petrifies him. Pikachu tries reviving Ash with his electricity but fails, and he and the other Pokémon, original and clone alike, are reduced to tears.\n[…]\nToshihiro Ono, author of Pokémon: The Electric Tale of Pikachu, created a manga version of the film. Asked by editors to draw Mewtwo's birth, he received the source material to base the manga off in April 1998 and finished the manga in May. In July of that year, a five episode radio drama titled The Birth of Mewtwo was broadcast over the five Sundays leading up to the premiere of the movie in Japan. Written by Takeshi Shudo, the drama delves into Mewtwo's origin prior to the start of the film.\n[…]\nIn the United States, the first trailer was released in August 1999 and was shown before The Iron Giant and Mystery Men. The second trailer was released in late 1999 and was attached to The Bachelor. In addition, select theaters gave away exclusive Pokémon trading cards to capitalize on the success of the trading card game. The cards feature likenesses of Electabuzz, Pikachu, Mewtwo, and Dragonite and were dispensed in random order for each week it was in that particular theater.\n[…]\nPokémon: The First Movie at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_First_Movie",
        "situacao": "ok",
        "texto": "Pokémon: The First Movie: Mewtwo Strikes Back, geralmente referido como Pokémon: The First Movie, originalmente lançado como Pocket Monsters the Movie: Mewtwo Strikes Back! (劇場版ポケットモンスター ミュウツーの逆襲, Gekijōban Poketto Monsutā: Myūtsū no Gyakushū), é um filme de anime de 1998, dirigido por Kunihiko Yuyama, o diretor chefe da série de televisão Pokémon. Foi o primeiro filme da franquia Pokémon.\n[…]\nEm uma lute sem sentido e com uma vitória parcial dos clones, Ash fica inconformado ao ver que todos os Pokémon estão lutando, menos seu Pikachu, que está sendo ferido por seu clone, sem contra-atacar. Triste e ao mesmo tempo com raiva, Ash tenta impedir a luta entre Mewtwo e Mew, lançando-se no raio da trajetória dos ataques dos dois Pokémon, que atingem o treinador e o transforma em pedra.\n[…]\nPokémon: The First Movie é a trilha sonora do primeiro filme de Pokémon lançada nos Estados Unidos em 10 de novembro de 1999. Mais tarde, foi lançado o álbum Pokémon: The First Movie Original Motion Picture Score.\n[…]\nPokémon: O Filme - Mewtwo Contra-Ataca foi exibido pela 1ª vez nos cinemas no dia 18 de julho de 1998 no Japão pela distribuição da Toho. No ano seguinte, o filme foi exibido nos Estados Unidos no dia 10 de novembro de 1999, de acordo com o licenciamento da 4Kids Entertainment e da Kids' WB. No Brasil, o filme foi exibido no dia 7 de janeiro de 2000 e em Portugal no dia 19 de março de 2000.\n[…]\nApós os anos seguintes, foi relançado em DVD no dia 21 de setembro de 2007 no Japão, fazendo parte da coleção Pikachu the Movie Box 1998-2002. Nos Estados Unidos, foi relançado em DVD no dia 7 de abril de 2009 pela Warner Home Video, fazendo parte da coleção Pokémon: The First Three Movies. Em 28 de novembro de 2012, o filme foi remasterizado digitalmente e lançado pela 1ª vez em Blu-ray, fazendo parte da coleção Pikachu the Movie Premium Box 1998-2010.\n[…]\nPokémon: The First Movie no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Pokémon Horizontes",
      "descricao": "Série do anime Pokémon iniciada em 2023, a primeira série principal sem Ash e seu Pikachu como protagonistas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Pokémon Horizontes, a série que sucedeu as aventuras de Ash, tem uma dupla de protagonistas. Liko é uma delas. Quem é o outro?",
    "resposta": "Roy",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Horizons:_The_Series"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Horizons:_The_Series",
        "situacao": "ok",
        "texto": "Pokémon Horizons: The Series, known in Japan as Pocket Monsters: Liko and Roy's Departure and Pocket Monsters: The Sparkling of Terapagos, is the twenty-sixth season of the Pokémon anime series and the first season of Pokémon Horizons: The Series, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā).\n[…]\nThe season comprises two story arcs. The first arc, \"Liko and Roy's Departure\", covering the first 25 episodes, follows protagonists Liko and Roy as they embark on adventures with the Rising Volt Tacklers, exploring the Pokémon world, including the Paldea region introduced in Pokémon Scarlet and Violet.\n[…]\nOn December 16, 2022, The Pokémon Company announced that a new series of the Pokémon anime would air in Japan on April 14, 2023, following the conclusion of a final arc that served as an epilogue to Pokémon Ultimate Journeys, set to conclude the story of Ash Ketchum, the main protagonist of the anime series since it began on April 1, 1997, and concluded on March 24, 2023. The first trailer was released on March 3, 2023, announcing that the series would premiere in Japan on April 14, 2023.\n[…]\nThe opening themes are \"Heart-Pounding Diary\" (ドキメキダイアリー, Dokimeki Daiarī) by Asmi featuring Chinozo, and \"Halo\" (ハロ, Haro) by Yama and BotchiBoromaru. The ending theme is \"RVR: Rising Volt Tacklers' Rap\" (RVR〜ライジングボルテッカーズラップ〜, RVR: Raijingu Borutekkāzu Rappu), an image song performed by Liko (Minori Suzuki) and Roy (Yuka Terasaki).\n[…]\nPokémon.com listing\n[…]\nPokémon Horizons: The Series at IMDb\n[…]\nPokémon Horizons: The Series (season 1) at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Horizons%3A_the_Series",
        "situacao": "ok",
        "texto": "A Série Pokémon: Horizontes no Brasil ou Pokémon Horizontes: A Série em Portugal, conhecido também nos Estados Unidos como Pokémon Horizons: the Series, e conhecido originalmente no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit.\n[…]\n\"Monstros de Bolso\"), é um segundo anime de Pokémon, que reúne as 4 temporadas, e faz parte da nona série do anime Pokémon, que reúne as temporadas 26 a 29, adaptando os jogos eletrônicos Pokémon Scarlet e Violet e transmitido no Japão pelo canal TV Tokyo em 14 de abril de 2023 - até o momento. No Brasil e no resto do mundo estreou na Netflix, no dia 7 de março de 2024. Em Portugal começou a ser transmitida pelo canal Panda Kids no dia 18 de março de 2024.\n[…]\nEsta série narra as aventuras de Liko e Rain.\n[…]\nAo contrário das séries anteriores, que seguiram Ash Ketchum, esta série apresenta Liko, uma garota da região de Paldea, que é acompanhada por Sprigatito, um dos Pokémon iniciais da região, que usa um pingente misterioso, e Rain, um menino da região de Kanto que possui uma misteriosa Pokébola. Em suas jornadas, eles encontram Friede, um professor Pokémon cujo parceiro Pokémon é o Capitão Pikachu. A série baseado em Pokémon Scarlet e Violet.\n[…]\nEsta série é dividida por 8 sagas:\n[…]\n27ª temporada: Horizontes – Temporada 2 – A Busca por Laqua (Brasil) ou Pokémon Horizontes: Temporada 2 – A Busca por Laqua (Portugal): episódio 46-89\n[…]\n«Site oficial da A Série Pokémon: Horizontes». pelo Pokémon.com/br (em português brasileiro)\n[…]\n«Site oficial do anime Pokémon» (em japonês). para TV Tokyo\n[…]\n«Página de Pokémon». para TV Tokyo (em japonês)\n[…]\n«Site oficial do anime Pokémon» (em japonês). pelo site oficial de Pokémon JP\n[…]\nPokémon Horizons: The Series (TV) (anime) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Pokémon Horizontes",
      "descricao": "Série do anime Pokémon iniciada em 2023, a primeira série principal sem Ash e seu Pikachu como protagonistas."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon Horizontes, a primeira série principal do anime sem Ash como protagonista, estreou na televisão japonesa em que ano?",
    "resposta": "2023",
    "distratores": [
      "2021",
      "2022",
      "2024"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Horizons:_The_Series"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Horizons:_The_Series",
        "situacao": "ok",
        "texto": "Pokémon Horizons: The Series, known in Japan as Pocket Monsters: Liko and Roy's Departure and Pocket Monsters: The Sparkling of Terapagos, is the twenty-sixth season of the Pokémon anime series and the first season of Pokémon Horizons: The Series, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā).\n[…]\nDirected by Saori Den and produced by OLM, the season aired in Japan on TV Tokyo from April 14, 2023, to March 29, 2024, and was later distributed in the United States by Netflix from March 7 to November 22, 2024. Daiki Tomiyasu served as executive director, with Saori Den as director, Dai Satō as script supervisor, Rei Yamazaki as character designer, Conisch as music composer, and Naotsugu Uchida and Akane Yamago as sound editors, replacing Ryōko Nashimoto.\n[…]\nOn December 16, 2022, The Pokémon Company announced that a new series of the Pokémon anime would air in Japan on April 14, 2023, following the conclusion of a final arc that served as an epilogue to Pokémon Ultimate Journeys, set to conclude the story of Ash Ketchum, the main protagonist of the anime series since it began on April 1, 1997, and concluded on March 24, 2023. The first trailer was released on March 3, 2023, announcing that the series would premiere in Japan on April 14, 2023.\n[…]\nOn November 9, 2023, it was announced that the English dub would debut in the UK on BBC iPlayer and CBBC on December 4. In the United States, it was originally set for a February 23, 2024, premiere on Netflix, but was later announced to premiere on March 7.\n[…]\nPokémon.com listing\n[…]\nPokémon Horizons: The Series at IMDb\n[…]\nPokémon Horizons: The Series (season 1) at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Horizons%3A_the_Series",
        "situacao": "ok",
        "texto": "A Série Pokémon: Horizontes no Brasil ou Pokémon Horizontes: A Série em Portugal, conhecido também nos Estados Unidos como Pokémon Horizons: the Series, e conhecido originalmente no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit.\n[…]\n\"Monstros de Bolso\"), é um segundo anime de Pokémon, que reúne as 4 temporadas, e faz parte da nona série do anime Pokémon, que reúne as temporadas 26 a 29, adaptando os jogos eletrônicos Pokémon Scarlet e Violet e transmitido no Japão pelo canal TV Tokyo em 14 de abril de 2023 - até o momento. No Brasil e no resto do mundo estreou na Netflix, no dia 7 de março de 2024. Em Portugal começou a ser transmitida pelo canal Panda Kids no dia 18 de março de 2024.\n[…]\nAo contrário das séries anteriores, que seguiram Ash Ketchum, esta série apresenta Liko, uma garota da região de Paldea, que é acompanhada por Sprigatito, um dos Pokémon iniciais da região, que usa um pingente misterioso, e Rain, um menino da região de Kanto que possui uma misteriosa Pokébola. Em suas jornadas, eles encontram Friede, um professor Pokémon cujo parceiro Pokémon é o Capitão Pikachu. A série baseado em Pokémon Scarlet e Violet.\n[…]\nEsta série é dividida por 3 temporadas:\n[…]\n26ª temporada: Horizontes: episódios 1-45\n[…]\n27ª temporada: Horizontes – Temporada 2 – A Busca por Laqua (Brasil) ou Pokémon Horizontes: Temporada 2 – A Busca por Laqua (Portugal): episódio 46-89\n[…]\n«Site oficial da A Série Pokémon: Horizontes». pelo Pokémon.com/br (em português brasileiro)\n[…]\n«Site oficial do anime Pokémon» (em japonês). para TV Tokyo\n[…]\n«Página de Pokémon». para TV Tokyo (em japonês)\n[…]\n«Site oficial do anime Pokémon» (em japonês). pelo site oficial de Pokémon JP\n[…]\nPokémon Horizons: The Series (TV) (anime) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Pokémon 2000",
      "descricao": "Segundo filme da franquia Pokémon, em que Ash ajuda o lendário Lugia a salvar o mundo, conhecido no Brasil como Pokémon 2000: O Poder de Um."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Apesar do título, o filme Pokémon 2000, aquele do lendário Lugia, estreou nos cinemas japoneses em que ano?",
    "resposta": "1999",
    "distratores": [
      "1998",
      "2000",
      "2001"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie_2000"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie_2000",
        "situacao": "ok",
        "texto": "Pokémon the Movie 2000 is a 1999 Japanese animated fantasy adventure film directed by Kunihiko Yuyama. It is the second film of the Pokémon anime series and of Pokémon the Series: The Beginning.\n[…]\nPokémon the Movie 2000 was released in Japanese theaters on July 17, 1999, by Toho. The English-language adaptation was released in the United States on July 21, 2000, by Warner Bros. Pictures. The film earned less at the box office than its predecessor, Pokémon: The First Movie, but was still a financial success and received better (albeit still negative) reviews upon release.\n[…]\nPokémon The Movie 2000 was released on VHS and DVD on November 14, 2000.\n[…]\nA more positive review was given by Gene Seymour of the Los Angeles Times. Seymour believed that the film \"charms without talking down to its audience\". He also compared it favorably to the first movie, stating, \"...unlike its predecessor, 'Pokémon 2000' doesn't assume that everyone who sees it will know how to tell Togepi from Bulbasaur or Squirtle from Pikachu. Sure, I know now, but I'm not telling because I don't have to\".\n[…]\nIn Japan, J-pop artist Namie Amuro sang the ending song \"toi et moi\". A soundtrack containing Shinji Miyazaki's original score for the film was released on September 9, 1999, along with two original songs sung by Rica Matsumoto and Akiko Hiramatsu.\n[…]\nPokémon the Movie 2000 Original Motion Picture Score is the orchestral soundtrack to the movie. The CD was originally released in some European countries in 2000. In 2004, it became available for download worldwide on iTunes.\n[…]\nPokémon the Movie 2000 at IMDb\n[…]\nPokémon the Movie 2000 (anime) at Anime News Network's encyclopedia\n[…]\nPokémon the Movie 2000 at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_Movie_2000",
        "situacao": "ok",
        "texto": "Pokémon: The Movie 2000: The Power of One, geralmente referido como Pokémon O Filme 2000, originalmente lançado no Japão como Pocket Monsters the Movie: Revelation Lugia (劇場版ポケットモンスター 幻のポケモン ルギア爆誕, Gekijōban Poketto Monsutā Maboroshi no Pokemon Rugia Bakutan; lit. \"Mirage Pokémon: Lugia's Explosive Birth\"), é um filme de animação de 1999 dirigido por Kunihiko Yuyama. É o segundo filme da franquia \n[…]\nEnquanto Ash, Misty e Tracey viajam num barco, Giraldan, um colecionador de bichinhos pokémon, prepara seu mais novo plano: capturar o raro Lugia. Para tanto, provoca uma catástrofe climática quando ataca e retira de suas ilhas os três pássaros sagrados: Moltres, o pássaro-guardião de fogo; Zapdos, o pássaro-guardião do trovão; e Articuno, o pássaro-guardião do gelo.\n[…]\nMundo Pokémon - SNZ\n[…]\nPokémon: O Filme 2000 foi lançado pela 1ª vez nos cinemas japoneses no dia 17 de Julho de 1999 no Japão pela distribuição da Toho. No ano seguinte, o filme foi lançado no dia 21 de Julho de 2000 nos Estados Unidos, no Canadá e no Brasil, pelo licenciamento da 4Kids Entertainment e da Kids' WB. Foi exibido em Portugal no dia 15 de Dezembro no mesmo ano.\n[…]\nApós o lançamento nos cinemas, Pokémon: O Filme 2000 foi lançado em VHS no Japão em 2 de fevereiro de 2000 e também foi lançado em DVD em 22 de novembro de 2000. No mesmo ano, foi lançado em VHS e DVD nos Estados Unidos em 14 de novembro de 2000 e no Brasil pela Warner Home Video.\n[…]\nApós os anos seguintes, foi relançado em DVD no dia 21 de setembro de 2007 no Japão, fazendo parte da coleção Pikachu the Movie Box 1998-2002. Nos Estados Unidos, foi relançado em DVD no dia 7 de abril de 2009 pela Warner Home Video, fazendo parte da coleção Pokémon: The First Three Movies. Em 28 de novembro de 2012, o filme foi remasterizado digitalmente e lançado pela 1ª vez em Blu-ray, fazendo parte da coleção Pikachu the Movie Premium Box 1998-2010.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Jirachi",
      "descricao": "Pokémon mítico dos tipos Aço e Psíquico da terceira geração, que realiza desejos e estrela o sexto filme da franquia."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Segundo os jogos e o filme Jirachi: Realizador de Desejos, o pequeno pokémon mítico fica acordado apenas sete dias a cada quanto tempo?",
    "resposta": "Mil anos",
    "distratores": [
      "Cem anos",
      "Quinhentos anos",
      "Dez mil anos"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Jirachi_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jirachi_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Tauros",
      "descricao": "Pokémon touro do tipo Normal da primeira geração, número 128 da Pokédex Nacional."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Num episódio na Zona Safari que não foi exibido nos Estados Unidos, Ash captura de uma vez quantos Tauros?",
    "resposta": "Trinta",
    "distratores": [
      "Dez",
      "Vinte",
      "Cinquenta"
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
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Pikachu",
      "descricao": "Pokémon do tipo Elétrico, número 25 da Pokédex Nacional."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que ilustradora da Game Freak criou o desenho original do Pikachu, o mascote da franquia?",
    "resposta": "Atsuko Nishida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pikachu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pikachu",
        "situacao": "ok",
        "texto": "Pikachu ( ; Japanese: ピカチュウ, Hepburn: Pikachū) is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise, and the franchise's mascot. First introduced in the video games Pokémon Red and Blue, it was created by Atsuko Nishida at the request of lead designer Ken Sugimori, with the design finalized by Sugimori. Since Pikachu's debut, it has appeared in multiple games including Pokémon\n[…]\nMidway through Red and Blue's development, lead designer Ken Sugimori felt that the game needed more \"cute\" Pokémon and was struggling to conceive of such designs. Attributing it to his male perspective, he brought in female Game Freak staff including Atsuko Nishida to join the development team.\n[…]\nLater in the franchise, Sugimori would create a Pokémon that evolved into Pikachu named Pichu to complete the trinity. Nishida developed the original Pikachu sprites using a single color identity chosen to work within the Super Game Boy's hardware limitations. Afterwards, the design was finalized by Sugimori who, towards the end of development, drew the promotional art of all the species to give them a unified look and make any last-minute changes.\n[…]\nNishida stated in an interview that she was obsessed with squirrels at the time due to their \"comical\" movement, and had the idea to have Pikachu store electricity in their cheeks similar to how squirrels store food. Pokémon creator Satoshi Tajiri however chose to change the species to be a type of mouse when he was designing the setting.\n[…]\nNishida was helped during the creation process by fellow developer Koji Nishino, who grew fond of Pikachu as a result and consistently encouraged the design to be made cuter, something she was happy to oblige. Due to his fondness for Pikachu, he made it more difficult to find in the original games, joking he wanted to \"keep it for himself\".\n[…]\nPikachu  at Bulbapedia, a Pokémon wiki\n[…]\nPikachu on Serebii"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pikachu",
        "situacao": "ok",
        "texto": "Pikachu (ピカチュウ, Pikachū) é uma espécie fictícia pertencente à franquia de mídia Pokémon da Nintendo. Ele apareceu pela primeira vez no Japão em 1996, nos jogos eletrônicos Pokémon Red e Pokémon Green, sendo lançados fora do Japão em 1998 como Pokémon Red and Blue, e foi criado por Atsuko Nishida a pedidos do designer principal  Ken Sugimori.\n[…]\nOriginalmente criado como um personagem secundário, Pikachu tornou-se o mascote do universo Pokémon depois de ter sido escolhido como um dos personagens principais na adaptação televisiva do jogo, ao lado de seu treinador Ash Ketchum. Ele também é considerado o Pokémon mais popular da franquia.\n[…]\nGeralmente descrito como um rato elétrico, Pikachu foi criado pelo estúdio Game Freak e desenhado por Atsuko Nishida. Ele foi criado juntamente com a sua evolução, Raichu; a partir da segunda geração, ele também passou a ter uma pré-evolução, o Pichu. Pikachu é do tipo elétrico e ocupa a 25ª posição na Pokédex nacional, a enciclopédia que lista as diferentes espécies de Pokémon.\n[…]\nSegundo a ilustradora original Atsuko Nishida, o design de Pikachu foi inspirado por um esquilo.\n[…]\nPouco depois, Pikachu demonstra um grande potencial que o diferencia de outros Pikachu, levando a Equipe Rocket a tentar capturá-lo diversas vezes.\n[…]\nPikachu é um personagem muito popular no mundo, principalmente no Japão, ao ponto de ter sido chamado como o equivalente japonês de Mickey Mouse. E considerado um ícone da cultura kawaii. Além de ser o mascote, ele é o personagem mais popular da franquia. De modo que, mostrando apenas a sua imagem, o Pokémon amarelo é facilmente reconhecido por adolescentes e adultos. Foi o oitavo personagem de ficção mais lucrativo em 2002, segundo levantamento da revista Forbes.\n[…]\n«Pikachu». no site oficial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Iris",
      "descricao": "Treinadora especialista em dragões, companheira de Ash em Unova no anime e campeã da Liga de Unova em Pokémon Black 2 e White 2."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Iris, a companheira de Ash em Unova no anime, ganha um posto de destaque nos jogos Pokémon Black 2 e White 2. Que posto é esse?",
    "resposta": "Campeã da Liga de Unova",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Iris"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Iris",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Goh",
      "descricao": "Companheiro de Ash na série Jornadas Pokémon, pesquisador do Laboratório Cerise que quer capturar todos os pokémon."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Jornadas Pokémon, Goh quer capturar todos os pokémon que existem. Qual pokémon mítico é o seu maior objetivo?",
    "resposta": "Mew",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Goh"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Goh",
        "situacao": "inacessivel",
        "texto": ""
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
