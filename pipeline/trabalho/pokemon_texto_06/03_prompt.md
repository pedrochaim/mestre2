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
      "nome": "Satoshi Tajiri",
      "descricao": "Criador japonês da franquia Pokémon e fundador da Game Freak."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Quando criança, Satoshi Tajiri, o criador de Pokémon, vivia caçando bichinhos nos campos. Que apelido os colegas deram a ele por causa disso?",
    "resposta": "Doutor Inseto (Dr. Bug)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Satoshi_Tajiri"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Satoshi_Tajiri",
        "situacao": "ok",
        "texto": "Satoshi Tajiri (Japanese: 田尻 智, Hepburn: Tajiri Satoshi; born August 28, 1965) is a Japanese video game designer and director who is the creator of the Pokémon franchise and the co-founder and president of video game developer Game Freak.\n[…]\nTajiri wrote and edited a fanzine called Game Freak from 1981 to 1986, focusing on the arcade game scene. It was handwritten and stapled together. Satoshi created the Game Freak fanzine to help gamers with winning strategies and lists of easter eggs. The highest selling issue, at more than 10,000 copies, details how to get a high score in Xevious. Ken Sugimori, who later illustrated the first 151 Pokémon, saw the magazine at a dōjinshi shop, and became its illustrator.\n[…]\nTajiri cites Shigeru Miyamoto as a major influence, thinking of him as a sort of mentor. For this reason, his developmental style closely matches that of Miyamoto. In the Japanese version of the Pokémon anime, the main character is named Satoshi (Ash Ketchum in the English version), and his rival is Shigeru (Gary Oak in the English version).\n[…]\nTajiri drew much of his inspiration from old Japanese TV shows and movies, including Godzilla and Ultraman. He has stated that if he did not design video games, he would most likely be in the anime field.\n[…]\nThe Economist has described Pokémon as \"Japan's most successful export.\"\n[…]\nTajiri, Satoshi (2002). パックランドでつかまえて [A Catcher in Pac-Land: Video Game Youth Story] (in Japanese). Enterbrain. ISBN 4-7577-1004-6.\n[…]\nTajiri, Satoshi (1996). 新ゲームデザイン [New Game Design] (in Japanese). Enix. ISBN 4-87025-858-7.\n[…]\nMiya, Shotaro (2004). 田尻智ポケモンを創った男 [Satoshi Tajiri: The Man Who Created Pokémon] (in Japanese). Ohta Publishing. ISBN 4-87233-833-2.\n[…]\nPokémon\n[…]\nSatoshi Tajiri at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Satoshi_Tajiri",
        "situacao": "ok",
        "texto": "Satoshi Tajiri (田尻 智, Tajiri Satoshi), (Setagaya, 28 de agosto de 1965) é um designer de jogos eletrônicos mais conhecido como criador de Pokémon e fundador da Game Freak.\n[…]\nQuando Satoshi Tajiri era pequeno a sua mãe não lhe deixava ter animais de estimação, por isso ele andava em florestas e vales à procura de insetos, para colecionar e para trocá-los.\n[…]\nMas com o tempo, os lagos e florestas foram sendo substituídos por estacionamentos e prédios, ele queria mostrar para as crianças de hoje como era caçar \"insetos\".\n[…]\nSe inspirando na sua coleção de insetos da sua adolescência ele aumentou sua ideia. Ele adorava coletar informações, as estatísticas de vários heróis e suas características. Juntando suas ideias de criança criou no videogame a sua coleção de insetos, ficando claro para ele que resultaria na grande satisfação do imenso público infantil.\n[…]\nA ideia veio mesmo quando ele viu duas pessoas jogando Game Boy in Flax. Um inseto estava envenenado em um dos Game Boy, quando estava conectado a outro Game Boy pelo Cable Link. A ideia do Cable Link seria ótima para que Pokémon desse certo, por poder passar informações de dois Game Boy(s) assim ampliando a coleção de \"insetos\" que cada um possuía.\n[…]\nDaí se pensou na ideia de se criar um anime com o nome de Pokémon, pois se o jogo deu tão certo, o anime também daria. A ideia foi esplêndida, e hoje Satoshi Tajiri é um homem milionário, e ainda tem lucro com as empresas Game Freak e Nintendo.\n[…]\nO herói do anime Pokémon, Ash Ketchum, na versão original japonesa leva o nome de Satoshi (サトシ).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Satoshi Tajiri",
      "descricao": "Criador japonês da franquia Pokémon e fundador da Game Freak."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o criador da franquia Pokémon e o treinador Ash, na versão japonesa do anime, têm em comum?",
    "resposta": "O nome Satoshi",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ash_Ketchum",
      "https://en.wikipedia.org/wiki/Satoshi_Tajiri"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ash_Ketchum",
        "situacao": "ok",
        "texto": "Ash Ketchum, known as Satoshi (サトシ) in Japan, is a character in the Pokémon franchise owned by Nintendo, Game Freak, and Creatures. He was the protagonist of the Pokémon anime for the first 25 seasons, as well as the protagonist of several manga series. In Japanese, the character is voiced by Rica Matsumoto. In the English dub, he was voiced by Veronica Taylor in the first eight seasons and Sarah \n[…]\nSatoshi Tajiri, the creator of Pokémon, has stated that Ash represents the \"human aspect\" of the series, and that Ash reflects what he himself was like as a child.\n[…]\nAsh was designed by Atsuko Nishida, and named after creator Satoshi Tajiri. The character was designed to represent how Tajiri was as a child, obsessed with catching bugs.\n[…]\nIn an interview Tajiri noted the contrast between the characters' relationship in the games and anime; while in the games they were rivals, in the anime, Shigeru represented Satoshi's master. When asked if Satoshi would equal or surpass Shigeru, Tajiri replied \"No! Never!\" Ash's character design was initially overseen by Sayuri Ichishi, replaced by Toshiya Yamada during the Diamond & Pearl series of the anime. Ash received a redesign in the Best Wishes! series, which included larger brown irises.\n[…]\nAsh later appeared as an unlockable Sync Pair in Pokémon Masters EX, where he is paired with Pikachu.\n[…]\nAsh has also garnered praise for serving as a role-model to children by sources such as Business Insider Australia and the BBC. Kat Bailey, writing for VG247, highlighted this as a part of both Ash and the Pokémon anime's success, stating that \"Pokémon set out to teach kids the meaning of fair play, good sportsmanship, and perseverance.\n[…]\nCryer, Hirun (March 12, 2024). \"Having moved on after 26 years, Ash and Pikachu could one day make their way back to the Pokemon anime: \"Anything is possible\"\". GamesRadar+. Retrieved April 2, 2024."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Satoshi_Tajiri",
        "situacao": "ok",
        "texto": "Satoshi Tajiri (Japanese: 田尻 智, Hepburn: Tajiri Satoshi; born August 28, 1965) is a Japanese video game designer and director who is the creator of the Pokémon franchise and the co-founder and president of video game developer Game Freak.\n[…]\nTajiri wrote and edited a fanzine called Game Freak from 1981 to 1986, focusing on the arcade game scene. It was handwritten and stapled together. Satoshi created the Game Freak fanzine to help gamers with winning strategies and lists of easter eggs. The highest selling issue, at more than 10,000 copies, details how to get a high score in Xevious. Ken Sugimori, who later illustrated the first 151 Pokémon, saw the magazine at a dōjinshi shop, and became its illustrator.\n[…]\nTajiri cites Shigeru Miyamoto as a major influence, thinking of him as a sort of mentor. For this reason, his developmental style closely matches that of Miyamoto. In the Japanese version of the Pokémon anime, the main character is named Satoshi (Ash Ketchum in the English version), and his rival is Shigeru (Gary Oak in the English version).\n[…]\nTajiri drew much of his inspiration from old Japanese TV shows and movies, including Godzilla and Ultraman. He has stated that if he did not design video games, he would most likely be in the anime field.\n[…]\nThe Economist has described Pokémon as \"Japan's most successful export.\"\n[…]\nTajiri, Satoshi (2002). パックランドでつかまえて [A Catcher in Pac-Land: Video Game Youth Story] (in Japanese). Enterbrain. ISBN 4-7577-1004-6.\n[…]\nTajiri, Satoshi (1996). 新ゲームデザイン [New Game Design] (in Japanese). Enix. ISBN 4-87025-858-7.\n[…]\nMiya, Shotaro (2004). 田尻智ポケモンを創った男 [Satoshi Tajiri: The Man Who Created Pokémon] (in Japanese). Ohta Publishing. ISBN 4-87233-833-2.\n[…]\nPokémon\n[…]\nSatoshi Tajiri at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ash_Ketchum",
        "situacao": "ok",
        "texto": "Ash Ketchum (サトシ, Satoshi) é um personagem fictício da franquia Pokémon, propriedade das empresas Nintendo, Game Freak e Creatures.\n[…]\nCriado por Satoshi Tajiri, Ash Ketchum como é conhecido, é o protagonista da série de anime Pokémon. Ash é um treinador Pokémon cujo maior objetivo é o de se tornar o maior Mestre Pokémon do mundo.\n[…]\nSeu nome em inglês é derivado do nome japonês (como as letras 'ash' estão incluídas em 'Satoshi') e seu lema em inglês é derivado do lema japonês (como as letras \"Gotta catch 'em all!\" estão incluídas em \"Pokémon getto da ze!\"). O sonho de Ash é se tornar um Mestre Pokémon. Ele é vagamente baseado em Red, o protagonista dos jogos Pokémon Red, Green, Blue e Yellow, bem como os remakes Pokémon FireRed e LeafGreen.\n[…]\nAsh Ketchum foi mencionado pela primeira vez em um jogo eletrônico no diálogo de Pokémon Play It!, e sua primeira aparição em um jogo foi em Pokémon Puzzle League. Satoshi Tajiri, o criador de Pokémon, com quem Ash compartilha seu nome japonês, afirmou que Ash representa o 'aspecto humano' da série, e que Ash reflete como ele era quando criança.\n[…]\nNa versão japonesa, seu nome é Satoshi, derivado diretamente do nome do criador da franquia, Satoshi Tajiri. É bem provável que seu nome americano tenha sido escolhido entre os nomes disponíveis nas versões Red e Blue originais e em Pokémon Yellow, onde \"Ash\" é uma das opções de nome prontas para o personagem jogador das versões americanas, e seu sobrenome \"Ketchum\" é um trocadilho com o slogan americano da franquia, \"Gotta catch 'em all\". Na versão francesa do anime, Ash é chamado de \"Sacha\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Cabo Link do Game Boy",
      "descricao": "Cabo acessório que conecta dois aparelhos Game Boy, usado para trocar pokémon e batalhar nos primeiros jogos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A ideia de trocar pokémon entre amigos nasceu quando Satoshi Tajiri olhou o cabo que liga dois Game Boys e imaginou o quê andando por ele?",
    "resposta": "Insetos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Satoshi_Tajiri"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Satoshi_Tajiri",
        "situacao": "ok",
        "texto": "Satoshi Tajiri (Japanese: 田尻 智, Hepburn: Tajiri Satoshi; born August 28, 1965) is a Japanese video game designer and director who is the creator of the Pokémon franchise and the co-founder and president of video game developer Game Freak.\n[…]\nA fan of arcade games in his youth, Tajiri wrote for and edited his own video gaming fanzine Game Freak with Ken Sugimori, before evolving it into a development company of the same name. Tajiri claims that the joining of two Game Boys via a link cable inspired him to create a game which embodied the collection and companionship of his childhood hobby, insect collecting.\n[…]\nTajiri wrote and edited a fanzine called Game Freak from 1981 to 1986, focusing on the arcade game scene. It was handwritten and stapled together. Satoshi created the Game Freak fanzine to help gamers with winning strategies and lists of easter eggs. The highest selling issue, at more than 10,000 copies, details how to get a high score in Xevious. Ken Sugimori, who later illustrated the first 151 Pokémon, saw the magazine at a dōjinshi shop, and became its illustrator.\n[…]\nTajiri first conceived the idea of Pokémon in 1990. The idea came together after he saw a Game Boy and the ability to communicate between Game Boys, and Tajiri decided Pokémon made the most sense on the handheld console. When he thought about the link cable being able to interact with two Game Boys, he envisioned bugs crawling back and forth, recalling his childhood love of bug collecting.\n[…]\nTajiri advanced the connectivity between handheld game consoles beyond Tetris style competition, by suggesting that Game Boys could use their link cables to trade collectibles.\n[…]\nPokémon\n[…]\nGame Freak\n[…]\nSatoshi Tajiri at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Satoshi_Tajiri",
        "situacao": "ok",
        "texto": "Satoshi Tajiri (田尻 智, Tajiri Satoshi), (Setagaya, 28 de agosto de 1965) é um designer de jogos eletrônicos mais conhecido como criador de Pokémon e fundador da Game Freak.\n[…]\nQuando Satoshi Tajiri era pequeno a sua mãe não lhe deixava ter animais de estimação, por isso ele andava em florestas e vales à procura de insetos, para colecionar e para trocá-los.\n[…]\nEle se tornou uma celebridade dos videogames, escrevendo dois livros. No final dos anos 80, a Game Freak estava em desenvolvimento de jogos e se mudaria para um escritório dentro do prédio da Nintendo no Japão. Lá publicou alguns jogos que fizeram muito sucesso. Satoshi Tajiri imaginou jogar um jogo onde poderia se capturar monstros e batalhar.\n[…]\nSe inspirando na sua coleção de insetos da sua adolescência ele aumentou sua ideia. Ele adorava coletar informações, as estatísticas de vários heróis e suas características. Juntando suas ideias de criança criou no videogame a sua coleção de insetos, ficando claro para ele que resultaria na grande satisfação do imenso público infantil.\n[…]\nA ideia veio mesmo quando ele viu duas pessoas jogando Game Boy in Flax. Um inseto estava envenenado em um dos Game Boy, quando estava conectado a outro Game Boy pelo Cable Link. A ideia do Cable Link seria ótima para que Pokémon desse certo, por poder passar informações de dois Game Boy(s) assim ampliando a coleção de \"insetos\" que cada um possuía.\n[…]\nDaí se pensou na ideia de se criar um anime com o nome de Pokémon, pois se o jogo deu tão certo, o anime também daria. A ideia foi esplêndida, e hoje Satoshi Tajiri é um homem milionário, e ainda tem lucro com as empresas Game Freak e Nintendo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Bulbasaur",
      "descricao": "Pokémon dos tipos Planta e Veneno, número 1 da Pokédex Nacional."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Japão, Bulbasaur se chama Fushigidane, nome que junta fushigi, mistério, com tane, palavra japonesa que significa o quê?",
    "resposta": "Semente",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Bulbasaur"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bulbasaur",
        "situacao": "ok",
        "texto": "Bulbasaur ( ), known as Fushigidane (Japanese: フシギダネ) in Japan, is a fictional Pokémon species in Nintendo and Game Freak's Pokémon franchise. First introduced in the video games Pokémon Red and Blue, it was created by Atsuko Nishida with the design finalized by Ken Sugimori. Since Bulbasaur's debut, it has appeared in multiple games including Pokémon Go and the Pokémon Trading Card Game, as well \n[…]\nBulbasaur first appeared as one of three Pokémon the player could choose as their first at the beginning of the initial Game Boy games, Pokémon Red and Blue, released in Japan in 1996. Its Japanese name, Fushigidane, is a combination of the Japanese words for mystery or miracle (fushigi) and seed (tane).\n[…]\nThe idea to feature Bulbasaur and the other Red and Blue starters in a significant role in Pokémon X and Y came around a year and a half into the development of the games. The Mega Evolutions for the three Pokémon's final forms were created, and the designers decided that they should give players an opportunity to receive one of these Pokémon from Professor Sycamore, the games' professor, so that players would be able to see and use these forms.\n[…]\nThe staff felt the popularity of Bulbasaur derived from the anime, particularly Ash's Bulbasaur, who at the time was the Pokémon that was with the series protagonist for the longest time besides Pikachu, spanning four-and-a-half years. They speculated this led to fans growing to feel attached to Bulbasaur.\n[…]\nBulbasaur has been noted to be less popular than Charmander and Squirtle. Nerdist attributed it to a lack of attention to the line early in the series because of Venusaur's omission from game box art in non-Japanese releases of the game. This led to one Twitter user creating an account named BulbaGanda to spread support for the Pokémon, which was met with considerable popularity.\n[…]\nBulbasaur on Bulbapedia\n[…]\nBulbasaur on Pokemon.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bulbasaur",
        "situacao": "ok",
        "texto": "Bulbasaur (フシギダネ, Fushigidane), chamado de Bulbassauro em português brasileiro, é uma espécie fictícia pertencente à franquia Pokémon da Nintendo. Apareceu pela primeira vez em 1996 nos jogos Pocket Monsters Red & Green, levados ao ocidente como Pokémon Red & Blue. É um dos iniciais de Kanto, junto com Charmander, do tipo fogo, e Squirtle, do tipo água. Bulbasaur é dos tipos Planta e Venenoso, not\n[…]\nDe acordo com Ken Sugimori, Bulbasaur e suas evoluções são baseadas em sapos, mesmo que seu nome o classifique como um dinossauro. O seu nome original em japonês, Fushigidane, vem de misterioso (fushigi) e de semente (tane/dane), porém sem separar as origens, a tradução literal fica como \"não é estranho?\". Já o seu nome de origem norte-americana, Bulbasaur, vem de bulbo (bulba) e dinossauro (saur).\n[…]\nHá uma semente nas suas costas. Absorvendo os raios do sol, a semente cresce progressivamente.\"\n[…]\nUm dos Pokémon que mais apareceu no anime, Bulbasaur já foi um dos principais Pokémon de Ash durante a primeira temporada. A treinadora May também teve um Bulbasaur na região de Hoenn.\n[…]\nEm Pokémon X & Y, o jogador novamente pode escolher um dos inicias de Kanto, porém dessa vez um pouco depois do início da jogatina. Bulbasaur também aparece em praticamente todos os spin-offs da série, como por exemplo Pokémon Stadium e também Pokémon Ranger.\n[…]\nBulbasaur é o principal Pokémon de Red no mangá Pokémon Adventures, assim como também aparece no primeiro episódio da websérie Pokémon Generations batalhando contra um Pikachu selvagem. Aparece nos jogos Super Smash Bros. Melee e Super Smash Bros. Brawl como um dos diversos troféus de coleção do jogo. Também conta com várias cartas no jogo de cartas da franquia, o Pokémon Trading Card Game, conhecido também como Pokémon TCG ou simplesmente TCG.\n[…]\n«Bulbasaur». no site oficial em íngles",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Jigglypuff",
      "descricao": "Pokémon dos tipos Normal e Fada, número 39 da Pokédex Nacional."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A cantora Jigglypuff, que faz todo mundo dormir, se chama Purin no Japão. Esse nome vem de qual sobremesa?",
    "resposta": "Pudim",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Jigglypuff_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Jigglypuff"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jigglypuff_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jigglypuff",
        "situacao": "ok",
        "texto": "Jigglypuff (  JIG-lee-puf), known in Japan as Purin (Japanese: プリン), is a Pokémon species. Jigglypuff first appeared in the video games Pokémon Red and Blue and subsequent sequels, later appearing in various merchandise, spinoff titles and animated and printed adaptations of the franchise. Jigglypuff's English voice was originally provided by Rachael Lillis, later being replaced by Michele Knotz, \n[…]\nJigglypuff was one of one hundred and fifty one different generation I Pokémon designs conceived by Game Freak's character development team and finalized by Ken Sugimori for the first-generation of Pocket Monsters games Red and Green, which were localized outside Japan as Pokémon Red and Blue. Its Japanese name \"Purin\", derives from the Japanese loanword for custard or pudding.\n[…]\nJigglypuff has proven to be a popular character since its introduction. Jigglypuff has been noted as one of the series' most popular characters and one of Nintendo's mascots.\n[…]\nThe Australian Journal of Language and Literacy cited Jigglypuff as a tool to use for introducing children to drama, citing its mannerisms in the anime.\n[…]\nplayer Hungrybox relies heavily on a defensive, counterattack-centric playstyle revolving around avoiding his opponent until he finds an opportunity to attack and capitalize on their mistakes. It is considered a \"high risk high reward\" playstyle, as Hungrybox's usual goal is to eventually hit his opponent with Rest, a move unique to Jigglypuff which inflicts instant high knockback on opponents, but leaves Jigglypuff open to attack.\n[…]\nIn 2018, Jigglypuff's singing habits became an Internet meme, and a Twitter account known as @jigglysinging was created to overlay popular songs over a clip of Jigglypuff singing. A Las Vegas street was also named after Jigglypuff.\n[…]\nJigglypuff  at Bulbapedia, a Pokémon wiki\n[…]\nJigglypuff on Pokemon.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jigglypuff",
        "situacao": "ok",
        "texto": "Jigglypuff, conhecido no Japão como Purin (プリン), é uma espécie de Pokémon da franquia Pokémon que pertence a Nintendo e Game Freak. Criada por Ken Sugimori, Jigglypuff fez sua primeira aparição nos jogos eletrônicos Pokémon Red e Blue e, depois, apareceu nas sequências dos jogos que se seguiram. Mais tarde, apareceu em diversas mercadorias, títulos em spin-off e adaptações impressas da franquia. J\n[…]\nA música cantada por Jigglypuff, foi gravada pelo cantor Morta que a incluiu em seu álbum, M-13, com o título \"Jygglypuff's Song\".\n[…]\nNa série de anime, Jigglypuff é um personagem recorrente que aspira a ser um grande cantor, após a inspiração de Ash e companhia. Infelizmente, a maioria de seus feitos fazem o público dormir antes mesmo dele terminar de cantar. Cantando o Jigglypuff muitas vezes se mostra um problema para os protagonistas da série, pois ele faz com que todos ao redor adormeçam. Ele carrega uma caneta marcadora, que ele usa como um microfone, devido à sua semelhança quando é tampado.\n[…]\nEm sua primeira aparição de Jigglypuff (\"A Canção do Jigglypuff\"), Misty tentou capturá-lo com a ajuda de seu Staryu, mas desistiu, eles logo perceberam que Jigglypuff estava chateado porque não podia cantar e Brock deu-lhe um pedaço de fruta que acalmou sua garganta e só depois ele consegui cantar. A equipe Rocket aproveitando isso decidiu usar sua canção para fazer uma cidade dormir e eles poderem roubar seus Pokémons, mas mesmo de tapa-ouvidos eles dormiram.\n[…]\nEm um episódio diferente, Jigglypuff cantou para dois Pokémons gigantes lutando entre si, mas esses dois Pokémon não adormeceram, então um Jigglypuff gigante surgiu e conseguiu cantar pondo-os para dormir. Em Pokémon Crônicas, Marina tem um Jigglypuff, porém durante sua batalha contra Jimmy é revelado que o Beedrill é incapaz de escutar sua canção devido ao rápido bater de suas asas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Pokémon Red e Green",
      "descricao": "Primeiros jogos da série Pokémon, lançados no Japão em 1996 para o Game Boy, que deram origem a Red e Blue no Ocidente."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Durante o desenvolvimento, os primeiros jogos Pokémon tinham outro título, abandonado por problemas de registro de marca. Que título era esse?",
    "resposta": "Capsule Monsters",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red_and_Blue",
      "https://en.wikipedia.org/wiki/Satoshi_Tajiri"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red_and_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version and Pokémon Blue Version are popular 1996 role-playing video games (RPGs) developed by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon video game series and were first released in Japan as Pocket Monsters Red and Pocket Monsters Green, followed by the special edition Pocket Monsters Blue later that year.\n[…]\nOriginally called Capsule Monsters, the title went through several transitions due to trademark problems, becoming CapuMon and KapuMon before eventually settling upon Pocket Monsters. Tajiri always thought that Nintendo would reject his game, as the company did not really understand the concept at first. However, the games turned out to be a success, something Tajiri and Nintendo never expected, especially because of the declining popularity of the Game Boy.\n[…]\nTajiri said that the Poké Ball concept was inspired by Ultraseven's Capsule Monsters from the tokusatsu superhero television series Ultraseven (1967–1968). Nintendo spent $13 million marketing Pokémon Red and Blue in the United States.\n[…]\nPokémon Yellow's release coincided with the release of Pokémon: The First Movie and was first announced as Pocket Monsters Yellow in Japan. Future Nintendo president Satoru Iwata later said that people likely felt Yellow would be unnecessary due to the release of Pokémon Gold and Silver later that year. It was released in Japan on September 12, 1998, in Australia on September 3, 1999, in North America on October 19, 1999, and in Europe on June 16, 2000.\n[…]\nA Nintendo 64 game, Pocket Monsters Stadium, was released by Nintendo in 1998 exclusively in Japan. It revolves around a 3D turn-based battle system with 40 of the 151 Pokémon featured in Red, Blue, and Yellow. A sequel was released in 1999 both in Japan and the West that includes all 151 Pokémon.\n[…]\nOfficial website for Pokémon Blue (in Japanese)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Satoshi_Tajiri",
        "situacao": "ok",
        "texto": "Satoshi Tajiri (Japanese: 田尻 智, Hepburn: Tajiri Satoshi; born August 28, 1965) is a Japanese video game designer and director who is the creator of the Pokémon franchise and the co-founder and president of video game developer Game Freak.\n[…]\nThe game, which became Pokémon Red and Pokémon Green, took six years to complete and went on to spark a multibillion-dollar franchise which reinvigorated Nintendo's handheld gaming scene. Tajiri continued to work as director for the Pokémon series until the development of Pokémon Ruby and Sapphire, when he changed his role to executive producer, which he holds to this day. Tajiri has also worked for other Game Freak projects.\n[…]\nWhen he first pitched the idea of Pokémon to Nintendo staff, they could not quite grasp the concept, but were impressed enough with Tajiri's game design reputation that they decided to explore it. Shigeru Miyamoto began to mentor Tajiri, guiding him during the creation process. Pokémon Red and Green took six years to produce, and nearly bankrupted Game Freak in the process; often, there was barely enough money to pay the employees.\n[…]\nAfter the completion and release of Red and Green in Japan, Tajiri later worked on 1997's Bushi Seiryūden: Futari no Yūsha. Tajiri continues to be involved in the more modern Pokémon games as well. For Pokémon FireRed and LeafGreen, he supervised the process from start to finish and approved all the text. While developing games, Tajiri works irregular hours, often laboring 24 hours at a time and resting 12 hours.\n[…]\nThe Economist has described Pokémon as \"Japan's most successful export.\"\n[…]\nMiya, Shotaro (2004). 田尻智ポケモンを創った男 [Satoshi Tajiri: The Man Who Created Pokémon] (in Japanese). Ohta Publishing. ISBN 4-87233-833-2.\n[…]\nPokémon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Red_%26_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version e Pokémon Blue Version, lançados no Brasil oficialmente como Pokémon Versão Vermelho e Pokémon Versão Azul, são dois jogos eletrônicos de RPG de 1996, desenvolvidos pela Game Freak e publicados pela Nintendo para o console portátil Game Boy. São os primeiros jogos eletrônicos da série Pokémon.\n[…]\nOriginalmente chamado de Capsule Monsters, o título do jogo passou por várias transições devido a dificuldades de marca registrada, tornando-se CapuMon e KapuMon antes de finalmente se decidir por Pocket Monsters. Tajiri sempre pensou que a Nintendo rejeitaria seu jogo, já que a empresa não entendia realmente o conceito no início. No entanto, os jogos acabaram sendo um sucesso, algo que Tajiri e Nintendo nunca esperaram, especialmente por causa do declínio da popularidade do Game Boy.\n[…]\nNo Japão, Pocket Monsters: Red e Green foram as primeiras versões lançadas, tendo sido concluídas em outubro de 1995 e oficialmente lançadas em 27 de fevereiro de 1996. Eles venderam rapidamente, devido em parte à ideia da Nintendo de produzir os dois versões do jogo em vez de um único título, levando os consumidores a comprar os dois.\n[…]\nPokémon FireRed Version (ポケットモンスター ファイアレッド, Poketto Monsutā Faiareddo; \"Pocket Monsters: FireRed\") e Pokémon LeafGreen Version (ポケットモンスター リーフグリーン, Poketto Monsutā Rīfugurīn; \"Pocket Monsters: LeafGreen\") são recriações aprimoradas de Pokémon Red e Green. Os novos títulos foram desenvolvidos pela Game Freak, publicados pela Nintendo para o Game Boy Advance e têm compatibilidade com o Game Boy Advance Wireless Adapter, que originalmente veio junto com os jogos.\n[…]\nPokémon Yellow\n[…]\nPokémon Gold & Silver\n[…]\nPokémon FireRed e LeafGreen\n[…]\nPocket Monsters Red e Green - Nintendo Japão (em japonês)\n[…]\nPocket Monsters Blue - Nintendo Japão (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Pokémon Red e Green",
      "descricao": "Primeiros jogos da série Pokémon, lançados no Japão em 1996 para o Game Boy, que deram origem a Red e Blue no Ocidente."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Os primeiros jogos Pokémon chegaram ao Japão em 1996, depois de um desenvolvimento longo e cheio de apertos financeiros. Quantos anos durou esse desenvolvimento?",
    "resposta": "Seis anos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red_and_Blue"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red_and_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version and Pokémon Blue Version are popular 1996 role-playing video games (RPGs) developed by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon video game series and were first released in Japan as Pocket Monsters Red and Pocket Monsters Green, followed by the special edition Pocket Monsters Blue later that year.\n[…]\nIn Japan, Pocket Monsters Red and Green were the first versions released. Development was completed by October 1995 and release was originally planned for December 21, 1995, but was delayed until February 27, 1996 because the derivative products were not yet ready for sale. After a slow start they continued to sell well. Several months later, Pocket Monsters Blue was released in Japan as a mail-order-only special edition to subscribers of CoroCoro Comic on October 15, 1996.\n[…]\nPokémon Red and Blue set the precedent for what has become a blockbuster, multibillion-dollar franchise. In Japan Red, Green, and Blue sold 1.04 million units combined during 1996, and another 3.65 million in 1997. The latter performance made Pokémon, collectively, the country's best-selling game of the year, surpassing Final Fantasy VII. By 1997, about 7 million units had been sold in Japan. In 1998, Red, Green and Blue sold 1,739,391 units in Japan.\n[…]\nFor the month of December, Donkey Kong 64 led Pokémon Yellow and Gran Turismo 2 on the monthly chart.\n[…]\nA Nintendo 64 game, Pocket Monsters Stadium, was released by Nintendo in 1998 exclusively in Japan. It revolves around a 3D turn-based battle system with 40 of the 151 Pokémon featured in Red, Blue, and Yellow. A sequel was released in 1999 both in Japan and the West that includes all 151 Pokémon.\n[…]\nOfficial website for Pokémon Red and Green (in Japanese)\n[…]\nOfficial website for Pokémon Blue (in Japanese)\n[…]\nOfficial website for Pokémon Yellow (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Red_%26_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version e Pokémon Blue Version, lançados no Brasil oficialmente como Pokémon Versão Vermelho e Pokémon Versão Azul, são dois jogos eletrônicos de RPG de 1996, desenvolvidos pela Game Freak e publicados pela Nintendo para o console portátil Game Boy. São os primeiros jogos eletrônicos da série Pokémon.\n[…]\nEles foram anunciados em outubro de 1995 e lançados em 1996 no Japão como Pocket Monsters Red (ポケットモンスター 赤, Poketto Monsutā Aka; tradução: Monstros de Bolso Vermelho) e Pocket Monsters Green (ポケットモンスター 緑, Poketto Monsutā Midori; tradução: Monstros de Bolso Verde), seguido pela edição especial Pocket Monsters Blue (ポケットモンスター 青, Poketto Monsutā Ao; tradução: Monstros de Bolso Azul) ainda naquele ano.\n[…]\nNo Japão, Pocket Monsters: Red e Green foram as primeiras versões lançadas, tendo sido concluídas em outubro de 1995 e oficialmente lançadas em 27 de fevereiro de 1996. Eles venderam rapidamente, devido em parte à ideia da Nintendo de produzir os dois versões do jogo em vez de um único título, levando os consumidores a comprar os dois.\n[…]\nEssas versões dos jogos são capazes de transferir Pokémon para Pokémon Sun e Moon por meio do aplicativo Pokémon Bank.\n[…]\nPokémon FireRed Version (ポケットモンスター ファイアレッド, Poketto Monsutā Faiareddo; \"Pocket Monsters: FireRed\") e Pokémon LeafGreen Version (ポケットモンスター リーフグリーン, Poketto Monsutā Rīfugurīn; \"Pocket Monsters: LeafGreen\") são recriações aprimoradas de Pokémon Red e Green. Os novos títulos foram desenvolvidos pela Game Freak, publicados pela Nintendo para o Game Boy Advance e têm compatibilidade com o Game Boy Advance Wireless Adapter, que originalmente veio junto com os jogos.\n[…]\nPokémon Yellow\n[…]\nPokémon Gold & Silver\n[…]\nPokémon FireRed e LeafGreen\n[…]\nPocket Monsters Red e Green - Nintendo Japão (em japonês)\n[…]\nPocket Monsters Blue - Nintendo Japão (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Poké Bola",
      "descricao": "Esfera vermelha e branca usada pelos treinadores para capturar e carregar pokémon."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Ocidente, a esfera vermelha e branca que guarda os pokémon se chama Poké Bola. Que nome ela tem no Japão?",
    "resposta": "Monster Ball",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Ball",
      "https://en.wikipedia.org/wiki/Pok%C3%A9_Ball"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Ball",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9_Ball",
        "situacao": "ok",
        "texto": "Pokémon is a Japanese role-playing video game series developed by Game Freak and published by Nintendo and the Pokémon Company under the Pokémon franchise. It was created by Satoshi Tajiri with assistance from Ken Sugimori. The first games, Pocket Monsters Red and Green, were released in 1996 in Japan for the Game Boy, later released outside of Japan as Pokémon Red Version and Blue Version.\n[…]\nPlayers can catch Pokémon in the wild, engaging with them in a Pokémon battle. In most Pokémon games, players aim to weaken wild Pokémon in battle to then throw a Poké Ball, which are used to capture the Pokémon and add it to the player's team or get sent to storage. Pokémon can \"evolve\" once they reach a certain benchmark, such as by reaching a certain level, having an item used on them, or by having a high level of friendship.\n[…]\n2016 games Pokémon Sun and Moon also feature Red, who is depicted twenty years after the events of the first games in the series. Red also appears in Pokémon Black 2 and White 2 and Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!. In the Pokémon Adventures manga, he serves as a main protagonist, and he also serves as the main protagonist of the Pokémon Pocket Monsters manga. He also appears in Pokémon Origins, an anime adaptation of the original games.\n[…]\nThe original Pokémon games are Japanese role-playing video games (RPGs) with an element of strategy and were created by Satoshi Tajiri for the Game Boy. The Pokémon series began with the release of Pocket Monsters Red and Green for the Game Boy in Japan. When these games proved popular, an enhanced Blue version was released sometime after, and the Blue version was reprogrammed as Pokémon Red and Blue for international release. The original Green version was not released outside Japan.\n[…]\nPokémon (TV series)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28s%C3%A9rie_de_jogos_eletr%C3%B4nicos%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケットモンスター, Poketto Monsutā) é uma série japonesa de jogos eletrônicos de RPG de colecionar criaturas, desenvolvidos pela Game Freak e publicados pela Nintendo e The Pokémon Company sob franquia Pokémon. Foi criada por Satoshi Tajiri com a assistência de Ken Sugimori. Os primeiros jogos, Pocket Monsters Red e Green, foram lançados em 1996 no Japão para o console Game Boy, posteriormente la\n[…]\nOs jogadores podem capturar Pokémon na natureza e enfrentá-los em batalhas Pokémon. Na maioria dos jogos Pokémon, os jogadores têm como objetivo enfraquecer os Pokémon selvagens em batalha para então lançar uma Poké Bola, que é usada para capturar o Pokémon e adicioná-lo à equipe do jogador ou enviá-lo para o armazenamento. os Pokémon podem \"evoluir\" ao atingirem certos objetivos, como alcançar um determinado nível, ter um item usado neles ou ter um alto nível de amizade.\n[…]\nA série Pokémon começou com o lançamento de Pocket Monsters Red e Green para o Game Boy no Japão. Quando estes jogos se revelaram extremamente populares, uma versão melhorada Blue foi lançada algum tempo depois, e a versão Blue foi reprogramada como Pokémon Red & Blue para lançamento internacional. Depois, uma segunda versão melhorado, Pokémon Yellow, foi lançado para usar a paleta de cores do Game Boy Color e mais uma semelhança estilística com o anime popular Pokémon.\n[…]\nEm 12 de setembro de 2009 foi colocado à venda no Japão, remakes dos jogos Pokémon Gold & Silver para o Nintendo DS intitulado Pokémon HeartGold & SoulSilver. Assim como Pokémon Yellow, que somente Pikachu andava fora da Poké-bola, qualquer Pokémon que seja o primeiro de sua equipe anda ao seu lado agora. E duas novas áreas para Johto, uma espécie de pokémon Safari e também traz de volta o Battle Frontier. Vem acompanhando também o Pokéwalker.\n[…]\nPokémon mini\n[…]\nPokémon Battrio, arcade de 2007.\n[…]\nO Canal Oficial da Pokémon em Português no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Base Set",
      "descricao": "Primeira coleção do card game Pokémon, lançada no Japão em 1996 e em inglês em 1999, famosa pelo Charizard holográfico."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O Base Set, primeira coleção do card game Pokémon lançada em inglês, em 1999, tinha quantas cartas diferentes?",
    "resposta": "102",
    "distratores": [
      "151",
      "100",
      "120"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Base_Set_(TCG)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Base_Set_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Pokémon brilhante",
      "descricao": "Variação rara de cor de um pokémon, introduzida em Pokémon Gold e Silver, cobiçada por colecionadores."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "De Gold e Silver até Black e White, a chance de um pokémon selvagem aparecer brilhante, com cor rara, era de uma em quantas?",
    "resposta": "8192",
    "distratores": [
      "1024",
      "4096",
      "65536"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Shiny_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Shiny_Pok%C3%A9mon",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Dennō Senshi Porygon",
      "descricao": "Episódio do anime Pokémon exibido no Japão em dezembro de 1997, cujos efeitos de luz piscante provocaram convulsões em centenas de crianças."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em dezembro de 1997, um episódio com o pokémon Porygon e muitas luzes piscando provocou convulsões em crianças japonesas. Por quanto tempo o anime ficou fora do ar?",
    "resposta": "Quatro meses",
    "distratores": [
      "Duas semanas",
      "Um ano",
      "Oito meses"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Denn%C5%8D_Senshi_Porygon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Denn%C5%8D_Senshi_Porygon",
        "situacao": "ok",
        "texto": "\"Dennō Senshi Porygon\" (Japanese: でんのうせんしポリゴン, Hepburn: Dennō Senshi Porigon, \"Computer Warrior Porygon\") is the 38th episode of the Pokémon anime's first season. During its sole broadcast in Japan on December 16, 1997, multiple scenes with flashing lights induced photosensitive epileptic seizures in children across the country. Over 600 people, mostly children, were taken to hospitals; many other\n[…]\n\"Dennō Senshi Porygon\" had its sole broadcast in Japan on Tuesday, December 16, 1997, at 6:30 p.m. Japan Standard Time (09:30 UTC). It held the highest ratings for its time slot, and was watched by approximately 4.6 million households.\n[…]\nThe Pokémon anime's General Director Kunihiko Yuyama said \"We used red and blue flashing for all the explosions inside our cyber space, because we wanted to give the explosions an electrical feel, that set them apart from the explosions seen elsewhere in the show. And so that's why we used those colors so much in this episode.\"\n[…]\nAfter the airing of \"Dennō Senshi Porygon\", the Pokémon anime went into a nearly four-month hiatus.\n[…]\n\"Dennō Senshi Porygon\" itself has never been aired again, in any country. The Pokémon anime has not featured Porygon or its evolutions, Porygon2 and Porygon-Z, in any subsequent episodes despite Pikachu being the one to cause the seizure-inducing strobe effect in one of these scenes. In spite of being absent from the anime, The Pokémon Company continues to feature Porygon in all other aspects of its branding.\n[…]\nOn September 19, 2020, the official Pokémon Twitter account referenced the episode, saying \"Porygon did nothing wrong,\" in reference to the resulting explosion from Pikachu's Thunderbolt attack being the in-universe cause of the flashing lights, not Porygon. The tweet was deleted shortly thereafter, speculated to be because of the taboo subject matter.\n[…]\nPokémon Go § Criticism and incidents\n[…]\n\"Dennō Senshi Porygon\" at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Denn%C5%8D_Senshi_Porygon",
        "situacao": "ok",
        "texto": "\"Dennō Senshi Porygon\" (でんのうせんしポリゴン, Dennō Senshi Porigon; literalmente \"Porygon, o soldado cibernético\", mais comummente traduzido como \"Electric Soldier Porygon\") é o trigésimo oitavo episódio da primeira temporada do anime Pokémon que foi ao ar no Japão em 16 de dezembro de 1997. Desde então não foi mais ao ar em qualquer outro lugar. No entanto, o episódio pode ser encontrado na internet.\n[…]\nApós o incidente, o anime entrou em um hiato de quatro meses, e retornou na TV Tokyo em 16 de abril de 1998.\n[…]\nAproximadamente depois de 20 minutos de exibição do episódio, há uma cena em que Pikachu destrói alguns \"mísseis vacina\" com o seu ataque Thunderbolt, resultando em uma enorme explosão que pisca rapidamente em luzes vermelhas e azuis durante quatro segundos, uma técnica conhecida como \"Paka-paka\". Neste ponto, os telespectadores começaram a se queixar de visão embaçada, dores de cabeça, tonturas e náuseas. Algumas pessoas ainda tiveram convulsões, cegueira e perda da consciência.\n[…]\nApós a sua exibição, o anime entrou em um hiato de quatro meses, voltando apenas em abril do ano seguinte, levando ao cancelamento do episódio de ano novo, não existindo nem o trailer nem qualquer outra informação sobre ele, tornando-se mídia perdida. Além desse episódio, os outros episódios, \"Holiday Hi-Jynx\" (\"Feriado a Lá Jynx\") e \"Snow Way Out!\" (\"Perdidos na Neve\"), tiveram a transmissão adiadas, desordenando o anime da sua cronologia original.\n[…]\nEnquanto estava fora do ar, cenas em outros episódios com luzes fortes piscando foram reduzidas na versão japonesa, e mais tarde pelos Estados Unidos quando o anime foi distribuído. Após a pausa, o anime teve o seu dia de exibição semanal alterado de terça para quinta-feira. A abertura também foi refeita e telas pretas mostrando vários alguns Pokémon em vários focos foram divididos em quatro imagens por tela.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Tipos de pokémon",
      "descricao": "Sistema de tipos elementais, como Fogo, Água e Planta, que define forças e fraquezas dos pokémon e dos golpes nas batalhas."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Nos primeiros jogos, Red e Blue, quantos tipos de pokémon existiam, contando Fogo, Água, Planta e todos os outros?",
    "resposta": "15",
    "distratores": [
      "12",
      "17",
      "18"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Type"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Type",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Pokémon Red e Blue",
      "descricao": "Primeiros jogos Pokémon lançados no Ocidente, para o Game Boy, versões internacionais de Red e Green."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Dois anos depois do sucesso no Japão, os jogos Pokémon Red e Blue chegaram às lojas dos Estados Unidos em que ano?",
    "resposta": "1998",
    "distratores": [
      "1996",
      "1997",
      "1999"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red_and_Blue"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red_and_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version and Pokémon Blue Version are popular 1996 role-playing video games (RPGs) developed by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon video game series and were first released in Japan as Pocket Monsters Red and Pocket Monsters Green, followed by the special edition Pocket Monsters Blue later that year.\n[…]\nThe games were released internationally in 1998 and 1999 as Pokémon Red and Pokémon Blue, while an enhanced version, Pokémon Yellow Version: Special Pikachu Edition, was released in Japan in 1998 and in other regions in 1999 and 2000.\n[…]\nBy 1998, 10 million units had been sold in Japan. Pokémon Red, Green and Blue ultimately sold 10.23 million copies in Japan, and until November 2022, was the country's best-selling video games. The video games were accompanied by the Pokémon Trading Card Game; both the video games and card game grossed combined sales revenue of more than $4 billion in Japan, as of 2000.\n[…]\nIn the United States, it became the fastest-selling Game Boy game, having sold 200,000 copies within two weeks and 4 million units by the end of 1998. Pokémon Blue first appeared within the top 20 best-selling video games in December 1998, with Pokémon Red debuting the following month. For the rest of 1999 (barring September), it stayed within the best-selling video game chart, selling 6.1 million copies in the United States and becoming the best-selling video game of 1999 in the territory.\n[…]\nA Nintendo 64 game, Pocket Monsters Stadium, was released by Nintendo in 1998 exclusively in Japan. It revolves around a 3D turn-based battle system with 40 of the 151 Pokémon featured in Red, Blue, and Yellow. A sequel was released in 1999 both in Japan and the West that includes all 151 Pokémon.\n[…]\nOfficial website for Pokémon Blue (in Japanese)\n[…]\nOfficial website for Pokémon Yellow (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Red_%26_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version e Pokémon Blue Version, lançados no Brasil oficialmente como Pokémon Versão Vermelho e Pokémon Versão Azul, são dois jogos eletrônicos de RPG de 1996, desenvolvidos pela Game Freak e publicados pela Nintendo para o console portátil Game Boy. São os primeiros jogos eletrônicos da série Pokémon.\n[…]\nOs jogos foram lançados posteriormente como Pokémon Red e Blue em 1998 na América Anglo-Saxônica e Austrália, em 1999 na Grã-Bretanha e Portugal, sendo seguido pelo restante da Europa (onde recebeu localizações como Rosso e Blu em italiano; Rouge e Bleu em francês; Rote e Blaue em alemão, e Rojo e Azur em espanhol) e em 2000 em outros países de outros continentes. A versão Midori não foi lançada fora do Japão.\n[…]\nO então presidente da Nintendo Hiroshi Yamauchi recusou, e em vez disso, viu a possível recepção dos jogos na América como um desafio a enfrentar. Apesar desses contratempos, as versões reprogramadas Red e Blue com seus designs de criaturas originais foram eventualmente lançadas na América do Norte em 28 de setembro de 1998, mais de dois anos e meio depois de Red e Green estreou no Japão.\n[…]\nOs jogos foram recebidos extremamente bem pelo público estrangeiro e Pokémon tornou-se uma franquia lucrativa na América. As mesmas versões foram lançadas mais tarde na Austrália, algum tempo depois, em 1998, e na Europa em 5 de outubro de 1999.\n[…]\nNos Estados Unidos, tornou-se o título de Game Boy de venda mais rápida, tendo vendido 200 mil cópias em duas semanas e 4 milhões de unidades no final de 1998. Ao final de sua execução, ela vendeu uma venda total combinada de 9,85 milhões nos Estados Unidos. As vendas mundiais de jogos alcançaram mais de 31 milhões de cópias vendidas.\n[…]\nPocket Monsters Red e Green - Nintendo Japão (em japonês)\n[…]\nPocket Monsters Blue - Nintendo Japão (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Pokémon Scarlet e Violet",
      "descricao": "Par de jogos Pokémon da nona geração para o Nintendo Switch, ambientado na região de Paldea, com mundo aberto."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Scarlet e Violet, que levaram a série principal a um mundo aberto na região de Paldea, chegaram ao Nintendo Switch em que ano?",
    "resposta": "2022",
    "distratores": [
      "2020",
      "2021",
      "2023"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_and_Violet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_and_Violet",
        "situacao": "ok",
        "texto": "Pokémon Scarlet and Pokémon Violet are 2022 role-playing video games developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. They are the first installments in the ninth generation of the Pokémon video game series. They were announced in February 2022 and released on 18 November 2022. The games later received a downloadable content (DLC) expansion pass st\n[…]\nDuring the closing ceremony of the 2022 Pokémon World Championships on 21 August 2022, a new trailer was released that showcased a new Pokémon, Cyclizar, as well as new items and abilities to be used in competitive play. On 29 September 2022, singer Ed Sheeran released a song titled \"Celestial\" in collaboration with The Pokémon Company that appeared in Pokémon Scarlet and Violet. Ed Sheeran's song would later be used in the game credits.\n[…]\nPokémon Scarlet and Violet were released worldwide on 18 November 2022. The games were released with numerous graphical and technical errors, including several bugs and glitches which impacted player performance. On 1 December 2022, Nintendo apologized for the issues players encountered and announced the 1.1.0 update, which fixed some bugs. Update 1.2.0, released in February 2023, fixed a number of further bugs, but also introduced a rare bug which corrupted save files.\n[…]\nAccording to The Pokémon Company, Scarlet and Violet are the most pre-ordered titles in the series' history. Within three days of its release, the games had sold over 10 million copies worldwide, including 4.05 million in Japan alone. The sales figure was the highest of any software on any Nintendo platform within three days, and the best launch of any console-exclusive game in history. The games were the best-selling video game titles of 2022 in Japan.\n[…]\nMedia related to Pokémon Scarlet and Violet at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_e_Violet",
        "situacao": "ok",
        "texto": "Pokémon Scarlet (ポケットモンスター スカーレット, Poketto Monsutā Sukāretto, Monstros de Bolso Escarlate) e Pokémon Violet (ポケットモンスター バイオレット, Poketto Monsutā Baioretto, Monstros de Bolso Violeta) são dois jogos eletrônicos de RPG desenvolvidos pela Game Freak e publicados pela Nintendo e The Pokémon Company para Nintendo Switch. Eles são os primeiros parcelas da nona geração da série de jogos eletrônicos Pokémon\n[…]\nScarlet e Violet se passa na região de Paldea, que é baseada na Península Ibérica, principalmente na Espanha e em Portugal. Diferentemente dos jogos Pokémon anteriores, estes apresentam um mundo aberto. Existem três histórias separadas que o jogador pode completar. Scarlet e Violet apresentam 120 novos Pokémon, juntamente com duas novas formas regionais e criaturas deslocadas no tempo conhecidas como Pokémon Paradoxo.\n[…]\nEm 11 de novembro de 2022, uma semana antes do lançamento dos jogos, um Splatfest temático em torno dos três tipos iniciais foi realizado em Splatoon 3.\n[…]\nPokémon Scarlet e Violet foram lançados mundialmente em 18 de novembro de 2022. Os jogos foram lançados com inúmeros erros gráficos e técnicos, incluindo vários bugs e falhas que impactavam o desempenho do jogador. Em 1 de dezembro de 2022, a Nintendo pediu desculpas pelos problemas encontrados pelos jogadores e anunciou a atualização 1.1.0, que corrigiu alguns bugs.\n[…]\nDe acordo com a The Pokémon Company, Scarlet e Violet são os títulos mais pré-encomendados da história da série. Três dias após seu lançamento, os jogos venderam mais de 10 milhões de cópias em todo o mundo, incluindo 4,05 milhões apenas no Japão. O número de vendas foi o mais alto de qualquer software em qualquer plataforma Nintendo em três dias, e o melhor lançamento de qualquer jogo exclusivo de console na história. Os jogos foram os títulos de jogos eletrônicos mais vendidos de 2022 no Japão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Dia do Pokémon",
      "descricao": "Data comemorativa anual da franquia Pokémon, aniversário do lançamento dos primeiros jogos no Japão, usada para grandes anúncios."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O Dia do Pokémon, aniversário dos primeiros jogos e data de grandes anúncios da franquia, é comemorado todo ano em qual dia?",
    "resposta": "27 de fevereiro",
    "distratores": [
      "14 de março",
      "1º de abril",
      "27 de setembro"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Day",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red_and_Blue"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Day",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red_and_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version and Pokémon Blue Version are popular 1996 role-playing video games (RPGs) developed by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon video game series and were first released in Japan as Pocket Monsters Red and Pocket Monsters Green, followed by the special edition Pocket Monsters Blue later that year.\n[…]\nIn Japan, Pocket Monsters Red and Green were the first versions released. Development was completed by October 1995 and release was originally planned for December 21, 1995, but was delayed until February 27, 1996 because the derivative products were not yet ready for sale. After a slow start they continued to sell well. Several months later, Pocket Monsters Blue was released in Japan as a mail-order-only special edition to subscribers of CoroCoro Comic on October 15, 1996.\n[…]\nThis feature was used again in Pokémon HeartGold and SoulSilver, the remakes of Pokémon Gold and Silver, and Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!, the remakes of Pokémon Yellow. Yellow includes a \"Pikachu's Beach\" minigame that is only accessible to players who either won a Nintendo contest or complete a challenge in another game, Pocket Monsters Stadium or Pokémon Stadium, and exchange data between the games using the Transfer Pak.\n[…]\nA special Nintendo 2DS bundle was released in Japan, Europe, and Australia on February 27, 2016, with each console matching the corresponding color of the game version. North America received a special New Nintendo 3DS bundle with cover plates styled after Red and Blue's box art. By March 31, 2016, combined sales of the re-releases reached 1.5 million copies, with more than half sold in North America.\n[…]\nOfficial website for Pokémon Red and Green (in Japanese)\n[…]\nOfficial website for Pokémon Blue (in Japanese)\n[…]\nOfficial website for Pokémon Yellow (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Red_%26_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version e Pokémon Blue Version, lançados no Brasil oficialmente como Pokémon Versão Vermelho e Pokémon Versão Azul, são dois jogos eletrônicos de RPG de 1996, desenvolvidos pela Game Freak e publicados pela Nintendo para o console portátil Game Boy. São os primeiros jogos eletrônicos da série Pokémon.\n[…]\nPokémon Yellow, uma versão inspirada no anime da franquia, foi lançada no Japão em 1998 e em outras regiões em 1999 e 2000. As recriações de Red e Green, Pokémon FireRed e LeafGreen, foram lançados para o Game Boy Advance em 2004. Red, Blue e Yellow — além de Green no Japão — foram relançados no serviço Virtual Console de Nintendo 3DS em 2016 como uma comemoração do 20º aniversário da franquia.\n[…]\nNo Japão, Pocket Monsters: Red e Green foram as primeiras versões lançadas, tendo sido concluídas em outubro de 1995 e oficialmente lançadas em 27 de fevereiro de 1996. Eles venderam rapidamente, devido em parte à ideia da Nintendo de produzir os dois versões do jogo em vez de um único título, levando os consumidores a comprar os dois.\n[…]\nDurante a apresentação de 12 de novembro de 2015, Nintendo Direct, foi anunciado que a geração original de jogos Pokémon seria lançada para o serviço Virtual Console da Nintendo 3DS em 27 de fevereiro de 2016, o 20º aniversário do lançamento original dos jogos. Os jogos incluem a mesma funcionalidade do Cabo Link simulada para permitir a troca e a batalha entre os jogos. Como foi o caso com seu lançamento original, Green é exclusivo para consumidores japoneses.\n[…]\nUma edição especial do Nintendo 2DS foi lançada no Japão, na Europa e na Austrália em 27 de fevereiro de 2016, com cada console combinando com a cor correspondente da versão do jogo. A América do Norte recebeu um pacote especial New Nintendo 3DS com capas personalizadas com o estilo de Red e Blue",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Snorlax",
      "descricao": "Pokémon do tipo Normal, número 143 da Pokédex Nacional."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Snorlax, cujo nome japonês era o apelido de um funcionário da Game Freak, foi inspirado nesse colega. Que traço dele deu origem ao pokémon?",
    "resposta": "O apetite enorme",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Snorlax"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Snorlax",
        "situacao": "ok",
        "texto": "Snorlax ( ), known in Japan as Kabigon (Japanese: カビゴン), is a Pokémon species in Nintendo and Game Freak's Pokémon franchise. Created by Ken Sugimori, Snorlax first appeared in the Game Boy video game Pokémon Red and Blue, and subsequent sequels, later appearing in various merchandise, spin-off titles, and animated and printed adaptations of the franchise, as well as the mascot of mobile game Poké\n[…]\nSnorlax is a species of fictional creatures called Pokémon created for the Pokémon media franchise. Developed by Game Freak and published by Nintendo, the Japanese franchise began in 1996 with the video games Pokémon Red and Green for the Game Boy, which were later released in North America as Pokémon Red and Blue in 1998. In these games and their sequels, the player assumes the role of a Trainer whose goal is to capture and use the creatures' special abilities to combat other Pokémon.\n[…]\nDesigned by Ken Sugimori for the first generation of Pokémon games, the species was inspired in behavior and appearance by veteran Pokémon game designer Kōji Nishino. Nishino was exceptionally pleased by it, and in an interview with Famitsu stated Snorlax \"is like my son!\" According to Game Freak co-founder Junichi Masuda, Nishino had a habit of eating heavily then going to sleep.\n[…]\nThis behavior earned Nishino the nickname \"Kirby\" by Game Freak's staff as a nod to the Nintendo character, which in turn served as the basis for the Pokémon's Japanese name, \"Kabigon\". An earlier design, nicknamed \"Kabiin,\" resembles an earlier version of Snorlax and bears similarities to Nishino.\n[…]\nA Snorlax also appeared in the film Pokémon Detective Pikachu, sleeping on a road in Ryme City.\n[…]\nFollowing earthquakes in Japan, Niantic boosted the spawn rates of Snorlax in Pokémon Go in affected prefectures in order to boost tourism in the area.\n[…]\nSnorlax  at Bulbapedia, a Pokémon wiki\n[…]\nSnorlax on Pokemon.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Snorlax",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nPokémon são uma espécie de criaturas fictícias criadas para a franquia de mídia Pokémon. Desenvolvida pela Game Freak e publicada pela Nintendo, a franquia japonesa começou em 1996 com os jogos Pokémon Red e Green para Game Boy, que foram posteriormente lançados na América do Norte como Pokémon Red e Blue em 1998. Nesses jogos e suas sequências, o jogador assume o papel de um Treinador cujo objetivo é capturar e usar as habilidades especiais das criaturas para combater outros Pokémon.\n[…]\nEmbora concebido como um esforço conjunto de vários desenvolvedores da Game Freak, os designs e artes finais foram feitos por Sugimori.\n[…]\nOriginalmente encarregado de desenhar os personagens para ilustrar um guia de estratégia planejado pela Game Freak para o lançamento dos jogos, Sugimori desenhou todos os sprites do jogo em seu estilo, não apenas para unificar visualmente os designs, mas também para modificar quaisquer elementos de design que ele considerasse inadequados, enquanto tentava preservar o estilo único do artista original dos sprites.\n[…]\nEmbora alguns Pokémon tenham sido atribuídos a certos desenvolvedores ao longo dos anos, como Atsuko Nishida para Pikachu e Motofumi Fujiwara para Eevee e suas evoluções, a Game Freak evitou atribuir muitos Pokémon a indivíduos específicos para manter a sensação de que todos os desenvolvedores estiveram envolvidos em sua criação.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Tipo Sombrio",
      "descricao": "Tipo elemental de pokémon e golpes introduzido na segunda geração, em Pokémon Gold e Silver."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, estrearam os tipos Sombrio e Aço, criados para frear um tipo quase imbatível nos primeiros jogos. Que tipo era esse?",
    "resposta": "Psíquico",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Dark_(type)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Dark_(type)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version and Pokémon Silver Version are 1999 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy Color. They are the first installments in the second generation of the Pokémon video game series. They were released in Japan on November 21st, 1999, Australia and North America on October 15th, 2000, and Europe on April 6th, 2001.\n[…]\nA third game in the generation, Pokémon Crystal, was released in 2000. In 2009, on the 10th anniversary of Gold and Silver, remakes titled Pokémon HeartGold and SoulSilver were released for the Nintendo DS.\n[…]\nSteel-type Pokémon are immune to Poison-type moves, and they have very high defense and resistance to other types, while Dark-type Pokémon are immune to Psychic-type moves and are strong against Psychic-type Pokémon (which provides an offensive strategy, formerly absent against Psychic-types), as well as having few weaknesses. In Gold and Silver, new moves were added, but Pokémon knowing these moves are not allowed to be traded to the first generation games.\n[…]\nNintendo Power listed Gold and Silver combined as the sixth best Game Boy / Game Boy Color games, praising them for the new Pokémon, features, and full-color graphics.\n[…]\nIn Germany, Gold and Silver received two Double Platinum awards from the Verband der Unterhaltungssoftware Deutschland (VUD) for sales above 800,000 copies by 2002. In the United Kingdom, Gold and Silver received two Platinum awards for sales above 600,000 copies. By 2010, Gold and Silver had sold 23 million units worldwide.\n[…]\nPokémon HeartGold Version and Pokémon SoulSilver Version are enhanced remakes of Pokémon Gold and Silver, developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS. First released in Japan on September 12, 2009, the games were later released in North America, Australia, and Europe during March 2010."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Gold_%26_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version e Pokémon Silver Version (ポケットモンスター 金・銀, Poketto Monsutā Kin・Gin; tradução: Monstros de Bolso Ouro・Prata) são jogos eletrônicos de RPG de 1999, desenvolvidos pela Game Freak e publicadas pela Nintendo para o Game Boy Color. Esses dois jogos iniciaram a segunda geração da série Pokémon. Eles foram lançados no Japão em 1999, na Austrália e América do Norte em 2000 e Europa em 20\n[…]\nPokémon do tipo Metal são imunes a golpes do tipo Veneno e são comumente mais resistentes quando comparado a outros tipos, enquanto os Pokémon do tipo Sombrio possuem vantagem contra o tipo Psíquico, que na geração de jogos anteriores não tinha nenhuma fraqueza viável. Em Gold e Silver, novos movimentos foram adicionados, mas Pokémon sabendo esses movimentos não podem ser trocados com os jogos da primeira geração.\n[…]\nPokémon Gold e Silver continuaram o enorme sucesso de Pokémon Red e Blue, iniciando a formação de Pokémon em uma franquia de bilhões de dólares. Em abril de 2000, cerca de 6,5 milhões de cópias dos jogos foram vendidas no Japão. Silver provou ser a versão um pouco mais popular, ultrapassando o Gold em aproximadamente 100.000 cópias.\n[…]\nAté agora em 2000, o jogo mais vendido na América para qualquer console doméstico é Pokémon Stadium para Nintendo 64, e o jogo mais vendido para qualquer jogo eletrônico portátil é Pokémon Yellow para Game Boy Color, mas Pokémon Gold e Silver eclipsarão até mesmo esses totais de vendas impressionantes. Projetamos vendas de 10 milhões unidades totais desses dois jogos em menos de seis meses\". Em 2010, as vendas registradas de ouro e prata foram de 23 milhões de unidades vendidas.\n[…]\nPokémon Crystal foi bem recebido pelos críticos, embora muitos comentassem que não havia novas adições e recursos suficientes para diferenciá-lo significativamente do Pokémon Gold e Silver. Pokémon Crystal vendeu quase 6,4 milhões de unidades em todo o mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "The Pokémon Company",
      "descricao": "Empresa japonesa criada em 1998 para administrar a marca Pokémon, com participação da Nintendo, da Game Freak e da Creatures."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A empresa que administra a marca Pokémon foi criada em 1998 por três sócias: Nintendo, Game Freak e qual outra, responsável pelo card game?",
    "resposta": "Creatures",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Pok%C3%A9mon_Company"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Pok%C3%A9mon_Company",
        "situacao": "ok",
        "texto": "The Pokémon Company (株式会社ポケモン, Kabushiki Gaisha Pokemon; TPC), formerly known as Pokémon Center Co., Ltd. (ポケモンセンター株式会社, Pokemon Sentā Kabushiki gaisha), is a Japanese company responsible for brand management, production, publishing, marketing, and licensing of the Pokémon franchise, which consists of video games, a trading card game, anime television series, films, manga, home entertainment produ\n[…]\nPokémon Center Co., Ltd. was founded in April 1998 through a joint investment by video game series developer Game Freak, original series publisher Nintendo, and Trading Card Game developer and original series producer Creatures to operate the Pokémon Center stores in Japan. In October 2000, it expanded its operations to cover the entire Pokémon franchise, and rebranded to its current name. The company is headquartered in the Roppongi Hills Mori Tower in Roppongi, Minato, Tokyo.\n[…]\nIn 1998, Nintendo, Creatures, and Game Freak established Pokémon Center Co., Ltd. in order to effectively manage the Pokémon Center stores in Japan. After the popularity of Pokémon Gold and Silver, they received many merchandising proposals from around the world. Companies were interested in working with the Pokémon brand. At that time, Tsunekazu Ishihara of Creatures was the person in charge of approving licensed products.\n[…]\nSince 2001, nearly all Pokémon products are represented as \"©Pokémon\" in the copyright acknowledgments with the original three owners of \"©Nintendo\", \"©GAME FREAK inc.\" and \"©Creatures Inc.\" The three companies also have ownership of all of the Pokémon-related trademarks in Japan while Nintendo is the sole owner of Pokémon-related trademarks in other countries. Licensed toys are made by third- and second-party companies such as Tomy and Jazwares.\n[…]\nThe Pokémon Company International Mexico, S. de R.L. de C.V.\n[…]\nPokémon video game series\n[…]\nPokémon Trading Card Game\n[…]\nPokémon Trading Figure Game"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Pok%C3%A9mon_Company",
        "situacao": "ok",
        "texto": "The Pokémon Company (株式会社ポケモン, Kabushiki Gaisha Pokemon) (TPC) é uma empresa japonesa responsável pela gestão, publicação, marketing e licenciamento da franquia Pokémon, que consiste em jogos eletrônicos, jogo de cartas colecionáveis, animes, mangás, longa metragens, brinquedos entre outros produtos. A companhia possui um investimento conjunto com a Nintendo, Game Freak e Creatures, as quais detêm\n[…]\nA empresa tem divisões separadas que lidam com operações em diferentes partes do mundo, com The Pokémon Company International abrange os territórios fora da Ásia e Pacífico. Na Coreia do Sul, as operações são tratadas por Pokémon Korea, Inc.\n[…]\nAs operações da empresa começaram em 1998 com a abertura da loja Pokémon Center, em Tóquio, antes da marca real de Pokémon, Ltd. foi criada em 2000. Desde então, este ramo tem sido comercializado como The Pokémon Company. O ramo nos Estados Unidos, inaugurado em 2001 para lidar com licenciamento de seus produtos no exterior. Nintendo Australia faz todo licenciamento e comercialização de produtos na Austrália e Nova Zelândia, como The Pokémon Company não tem um filial australiano.\n[…]\nDesde 2001, quase todos os produtos licenciados de Pokémon têm \"© Pokémon\" nos agradecimentos de direitos autorais com os três usuais de \"© Nintendo\", \"© Game Freak inc.\" e \"© Creatures Inc.\" Os jogos eletrônicos, Pokémon Trading Card Game e brinquedos licenciados ainda estão sendo feitas por empresas de terceira e segunda-party por exemplo como Tomy.\n[…]\nEm 2009, Pokémon EUA e Pokémon Reino Unido se uniram para formar The Pokémon Company International, que lida com operações americanas e européias de Pokémon, sob a administração de Kenji Okubo. Os escritórios da empresa nos Estados Unidos estão em Bellevue, Washington e seu escritório no Reino Unido estão em Londres. Operações na Austrália são controladas pela Nintendo Australia.\n[…]\nPokémon: Detetive Pikachu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Elite dos Quatro de Kanto",
      "descricao": "Grupo de quatro treinadores de elite que o jogador enfrenta no Platô Indigo, no fim de Pokémon Red e Blue."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No fim de Red e Blue, a Elite dos Quatro de Kanto reúne Lorelei, Bruno, Agatha e qual treinador especialista em dragões?",
    "resposta": "Lance",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Elite_Four"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Elite_Four",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Leon",
      "descricao": "Campeão da Liga Pokémon de Galar nos jogos Sword e Shield, adversário de Ash na final do Mundial no anime Jornadas Pokémon."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Leon, o campeão invicto de Galar que Ash derrota na final do Mundial do anime, tem qual pokémon de fogo como estrela do time?",
    "resposta": "Charizard",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Leon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Leon",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Equipes de Pokémon Go",
      "descricao": "As três equipes, Mystic, Valor e Instinct, entre as quais os jogadores de Pokémon Go se dividem para disputar ginásios."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Go, cada jogador entra numa de três equipes para disputar ginásios: Mystic, a azul, Valor, a vermelha, e qual outra, a amarela?",
    "resposta": "Instinct",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go",
        "situacao": "ok",
        "texto": "Pokémon Go (stylized as Pokémon GO) is a 2016 augmented reality (AR) mobile game originally developed and published by Niantic and since 2025 by Scopely Explore, in partnership with Nintendo and the Pokémon Company, for iOS and Android devices. The game uses GPS to locate, capture, train, and battle Pokémon. It is free-to-play, featuring a freemium model that includes in-app purchases for addition\n[…]\nPlayers earn experience points (XP) by participating in various in-game activities. As they accumulate XP, they advance through levels progressively, unlocking new features. Notably, at level five, players gain access to Pokémon Gyms, where they can engage in battles. They must choose to join one of three color-coded teams: Team Valor (red), Team Mystic (blue), or Team Instinct (yellow). These teams compete for control over Gyms within the Pokémon Go world.\n[…]\nAt the 2016 San Diego Comic-Con, John Hanke, the founder of Niantic, unveiled the three team leaders: Candela (Team Valor), Blanche (Team Mystic), and Spark (Team Instinct). Hanke mentioned that only about 10 percent of the game's ideas had been implemented. Future updates, such as the trading feature, additional Pokémon, Pokémon Centers at PokéStops, fixing the \"three-step glitch\", and easier training, were confirmed. Niantic committed to supporting the game for \"years to come\".\n[…]\nThis post also announces the creation of \"an internal cross-functional team\" to address community concerns regarding interaction distance. The following month, on September 1, 2021, Niantic posts a news update for Pokémon Go users stating that the 80 meter interaction radius will be returned, and increased communication will be opened with the community with the start of monthly \"Developer Diary\" announcements.\n[…]\nList of Pokémon, the list of all of the original Pokémon by order\n[…]\nMedia related to Pokémon Go at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_GO",
        "situacao": "ok",
        "texto": "Pokémon GO é um jogo eletrônico free-to-play de realidade aumentada voltado para smartphones. O jogo é desenvolvido e publicado pela Niantic, Inc., em colaboração com a Nintendo e a The Pokémon Company para as plataformas iOS e Android. O jogo foi inicialmente lançado em julho de 2016 para alguns países, eventualmente foi expandindo para o resto do mundo.\n[…]\nAssim como nos jogos oficiais da série, também se pode encontrar ginásios. Ao encontrar um ginásio, o jogador é obrigado a escolher um time: Time Valor (que representa o Pokémon Moltres), Time Mystic (que representa o Pokémon Articuno) ou Time Instinct (que representa o Pokémon Zapdos). Se este ginásio for do mesmo time que o seu, você pode designar um Pokémon ao ginásio para defende-lo.\n[…]\nEm 24 de julho, John Hanke revelou as aparências dos três líderes de equipe na Comic-Con 2016: Candela (Team Valor), Blanche (Team Mystic), e Spark (Team Instinct). Hanke comentou que aproximadamente 10% das ideias para o jogo foram implementadas. Atualizações futuras, incluindo novos Pokémon e trocas entre os jogadores, bem como a implementação de Pokémon Centers em PokéStops, correções na função de busca de Pokémon nos arredores e treinamento mais fácil foram também confirmados.\n[…]\nDe acordo com a empresa de consultoria Sensor Tower, até meados de novembro de 2020, Pokémon GO já havia acumulado cerca de US$ 4,2 bilhões em gastos de jogadores no mundo todo.\n[…]\nA distribuição de PokéStops e ginásios no jogo (baseados nos portais de Ingress, jogo de realidade aumentada com temática em ficção científica) foi apontado como sendo mais disperso em muitos bairros minoritários, em um reflexo da demografia americana. No subúrbio de Rhodes em Sydney, tornou-se grande o número de jogadores que capturam pokémon em sua área.\n[…]\nPokémon\n[…]\nPokémon GO no X\n[…]\n«Pokémon GO». para Google Play\n[…]\n«Pokémon GO». para App Store.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Ecruteak",
      "descricao": "Cidade da região de Johto, nos jogos Pokémon Gold e Silver, conhecida pelas torres antigas e pelas dançarinas de quimono."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Johto, Ecruteak é a cidade das torres antigas, do teatro de dança e das dançarinas de quimono. Ela se inspira em qual cidade japonesa?",
    "resposta": "Quioto",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ecruteak_City"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ecruteak_City",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Lt. Surge",
      "descricao": "Líder do ginásio do tipo Elétrico da cidade de Vermilion, em Kanto, nos jogos e no anime Pokémon."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Tenente Surge, líder do ginásio elétrico de Vermilion, é um veterano de guerra estrangeiro. Ele é de qual país?",
    "resposta": "Estados Unidos",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lt._Surge"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lt._Surge",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Pikachu",
      "descricao": "Pokémon do tipo Elétrico, número 25 da Pokédex Nacional."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Pikachu, o mascote da franquia, ganhou seu visual original pelas mãos de qual designer da Game Freak?",
    "resposta": "Atsuko Nishida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pikachu",
      "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pikachu",
        "situacao": "ok",
        "texto": "Pikachu ( ; Japanese: ピカチュウ, Hepburn: Pikachū) is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise, and the franchise's mascot. First introduced in the video games Pokémon Red and Blue, it was created by Atsuko Nishida at the request of lead designer Ken Sugimori, with the design finalized by Sugimori. Since Pikachu's debut, it has appeared in multiple games including Pokémon\n[…]\nMidway through Red and Blue's development, lead designer Ken Sugimori felt that the game needed more \"cute\" Pokémon and was struggling to conceive of such designs. Attributing it to his male perspective, he brought in female Game Freak staff including Atsuko Nishida to join the development team.\n[…]\nLater in the franchise, Sugimori would create a Pokémon that evolved into Pikachu named Pichu to complete the trinity. Nishida developed the original Pikachu sprites using a single color identity chosen to work within the Super Game Boy's hardware limitations. Afterwards, the design was finalized by Sugimori who, towards the end of development, drew the promotional art of all the species to give them a unified look and make any last-minute changes.\n[…]\nNishida stated in an interview that she was obsessed with squirrels at the time due to their \"comical\" movement, and had the idea to have Pikachu store electricity in their cheeks similar to how squirrels store food. Pokémon creator Satoshi Tajiri however chose to change the species to be a type of mouse when he was designing the setting.\n[…]\nNishida was helped during the creation process by fellow developer Koji Nishino, who grew fond of Pikachu as a result and consistently encouraged the design to be made cuter, something she was happy to oblige. Due to his fondness for Pikachu, he made it more difficult to find in the original games, joking he wanted to \"keep it for himself\".\n[…]\nPikachu  at Bulbapedia, a Pokémon wiki\n[…]\nPikachu on Serebii"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
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
    "indice": 25,
    "ancora": {
      "nome": "Mew",
      "descricao": "Pokémon do tipo Psíquico, número 151 da Pokédex Nacional."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O mítico Mew foi escondido no código de Red e Green nas últimas semanas do desenvolvimento, quase como uma brincadeira. Que programador da Game Freak fez isso?",
    "resposta": "Shigeki Morimoto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mew_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mew_(Pok%C3%A9mon)",
        "situacao": "ok",
        "texto": "Mew ( ; Japanese: ミュウ, Hepburn: Myū) is one of the many fictional species in the Pokémon franchise. It is a small, pink, Psychic-type Mythical Pokémon, which is an incredibly rare and powerful Pokémon typically available only via special events. It was added to the Pokémon Red and Blue games by Game Freak programmer Shigeki Morimoto, at the tail end of the games' development.\n[…]\nUnlike the other Pokémon from Pokémon Red and Blue, Mew's development was not overseen by Ken Sugimori, but by Game Freak programmer Shigeki Morimoto. Morimoto programmed Mew into the game secretly as a prank amongst the staff just prior to its release in Japan.\n[…]\nIt was intended to be a Pokémon only Game Freak staff members would know about and be able to obtain. Mew was added at the very end of the development of Pokémon Red and Blue by Morimoto after the debug features were removed, which freed up just enough space to add the character despite being told not to alter the game any further at this point by Nintendo.\n[…]\nMew was not shown moving until the first movie, and thus it had no behaviors and personality outlined yet. These movements and personality traits were primarily created by the movie's animators, who were working off its in-game sprite. Morimoto was amazed upon seeing the final product in the film. Morimoto has stated that Mew is his favorite design from the series, and has even incorporated the Pokémon as a part of his signature.\n[…]\nTo stymie possible repercussions for inserting Mew into the game, plans for releasing the Pokémon were quickly unveiled. In the spring of 1996, Game Freak's president Satoshi Tajiri used the Japanese manga journal CoroCoro Comic as an experimental exhibition of Mew and to distribute the first Pokémon Trading Card Game cards as free giveaways, which surprised many at Game Freak, including Morimoto."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mew_%28Pok%C3%A9mon%29",
        "situacao": "ok",
        "texto": "Mew (ミュウ, Myū) é uma espécie de Pokémon, pertencente à franquia de mídia Pokémon da Nintendo. Ele apareceu pela primeira vez incluído na versão japonesa de Pokémon Red e Blue, como um personagem secreto. Como tal, ele foi o tema de muitos mitos e rumores, que contribuíram para o sucesso da franquia Pokémon. Então ele foi adicionado em versões estrangeiras de Pokémon Red e Blue, ele também foi o pr\n[…]\nGeralmente descrito como uma mistura de um gato com um embrião, Mew foi criado por Shigeki Morimoto, programador do Game Freak. Ele foi criado ao mesmo tempo que o seu clone Mewtwo. Mew é do tipo psíquico e ocupa a 151º posição na Pokédex Nacional, a enciclopédia que lista diferentes espécies de Pokémon.\n[…]\nAo contrário do que aconteceu com muitos outros Pokémons, o design de Mew não foi supervisionado por Ken Sugimori, mas pelo programador Shigeki Morimoto da Game Freak. Morimoto adicionou Mew secretamente pouco antes de seu lançamento no Japão, como uma brincadeira entre a equipe de desenvolvimento. Sua primeira intenção era que apenas o pessoal da Game Freak estivesse ciente da existência deste Pokémon que pode se obter no jogo.\n[…]\nNa primavera de 1996, o presidente da Game Freak Satoshi Tajiri expôs uma foto de Mew na revista japonesa CoroCoro Comic que foi distribuído gratuitamente para os primeiros cartões do jogo com a sua imagem. Esta decisão surpreendeu muitos funcionários da Game Freak, incluindo o próprio Morimoto. Devido ao sucesso desta experiência, a Game Freak anunciou em 15 de abril de 1996, um concurso que teve 151 vencedores que permitiu aos aos primeiros vinte vencedores a obterem um Mew.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Pokémon Jet",
      "descricao": "Aviões de passageiros pintados com pokémon, operados por uma companhia aérea japonesa desde 1998."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Desde 1998, qual companhia aérea japonesa voa com aviões pintados com Pikachu e outros pokémon, os chamados Pokémon Jets?",
    "resposta": "All Nippon Airways (ANA)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Jet",
      "https://en.wikipedia.org/wiki/All_Nippon_Airways"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Jet",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/All_Nippon_Airways",
        "situacao": "ok",
        "texto": "All Nippon Airways (ANA) is a Japanese airline headquartered in Minato, Tokyo. ANA operates services to over 100 both domestic and international destinations with its main hub at Haneda and Narita, both airports located in Tokyo. It is Japan's largest airline, ahead of its main rival Japan Airlines. As of March 2024, the airline has approximately 12,800 employees. The airline joined as a Star Alli\n[…]\nFar East Airlines merged with the newly named All Nippon Airways in March 1958. The combined companies had a total market capitalization of 600 million yen, and became Japan's largest private airline as Japan Airlines was government-owned. The merged airline received a new Japanese name (全日本空輸; Zen Nippon Kūyu; All Japan Air Transport). The new united airline ran a route network that was amalgamated from its two predecessors, and the company logo of the larger NH was chosen to serve as its logo.\n[…]\nANA Holdings Inc. was created in April 2013 due to the \"changing landscape of the airline industry\", with competition against low cost carriers cited as one of the reasons. The new holding company would have over 70 companies under it, most notably All Nippon Airways, but also low cost subsidiaries such as Peach Aviation, and other catering and ground operations companies. The holding company is led by a separate chairman and CEO.\n[…]\nAll Nippon Airways has been led by only a president and CEO since April 2013, when a new parent company was formed. The chairman of All Nippon Airways became the chairman of the holding company, and All Nippon Airways ceased to have its own chairman. The following is a list of presidents and CEOs, along with the year of their appointment:\n[…]\nMedia related to All Nippon Airways at Wikimedia Commons\n[…]\nAll Nippon Airways Trading Company\n[…]\n\"Company history books (Shashi)\". Shashi Interest Group. April 2016. Wiki collection of bibliographic works on All Nippon Airways"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/All_Nippon_Airways",
        "situacao": "ok",
        "texto": "A All Nippon Airways (全日空 Zennikkū or 全日本空輸 Zen-nippon kūyu), estilizada como ANA, é a segunda maior empresa aérea do Japão, perdendo apenas para a Japan Airlines, e a sétima maior do mundo em número de passageiros transportados. Membro da Star Alliance, tem seu hub de operações concentrados no aeroporto de Narita, em Tóquio.\n[…]\nEm 1952, visando retomar o tráfego interrompido pela Segunda Guerra Mundial , é fundada a empresa Japan Helicopter & Aeroplane Transports Co, a princípio operando somente com helicópteros. Em 1957, após começar a operar com aviões, a empresa muda seu nome para o atual \"All Nippon Airways\".\n[…]\nDepois de duas fusões com outras companhias transportadoras em 1958 e 1963, respectivamente, a ANA inicia suas operações internacionais (não-regulares ainda) na rota Tóquio - Hong Kong no ano de 1971.\n[…]\nDesignação: All Nippon\n[…]\nEm 5 de Maio de 2021 a frota de All Nippon Airways consiste de 218 aviões.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Ken Sugimori",
      "descricao": "Ilustrador e designer japonês da Game Freak, responsável pela arte dos primeiros jogos Pokémon."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Que ilustrador, parceiro de Satoshi Tajiri desde os tempos da revista Game Freak, desenhou a maioria dos 151 pokémon originais?",
    "resposta": "Ken Sugimori",
    "distratores": [
      "Junichi Masuda",
      "Tsunekazu Ishihara",
      "Akira Toriyama"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ken_Sugimori"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ken_Sugimori",
        "situacao": "ok",
        "texto": "Ken Sugimori (Japanese: 杉森 建, Hepburn: Sugimori Ken; born January 27, 1966) is a Japanese video game designer, illustrator, manga artist, director, and co-founder of Game Freak alongside Satoshi Tajiri. He is best known as the primary character designer and art director for the Pokémon franchise. Sugimori is also credited with the art direction for other titles, including Pulseman. Sugimori drew a\n[…]\nFrom early 1981 until 1986, Sugimori illustrated a gaming fanzine called Game Freak, which had been started by Satoshi Tajiri. Sugimori discovered the magazine in a dōjinshi shop, and decided to get involved. Eventually, the two decided to pitch an arcade game design idea to Namco; they reworked Game Freak into a development company and produced Mendel Palace.\n[…]\nSugimori is best known as the character designer and art director for the Pokémon franchise and designed a large majority of the first 151 Pokémon with Atsuko Nishida, Motofumi Fujiwara, Shigeki Morimoto, and Satoshi Ota. He has worked on the various Pokémon movies, trading cards, and other games.\n[…]\nFor Pokémon Black and White, Sugimori directed a team of 17 people in designing new characters for the games, though he always drew the final designs. He drew much of his inspiration from observing animals in aquariums and zoos. Sugimori has also written and illustrated original manga, including one which was distributed with pre-orders of Pokémon Mystery Dungeon: Explorers of Time and Explorers of Darkness.\n[…]\nPokémon Trading Card Game: main card artist\n[…]\nPokémon (anime): character design\n[…]\nPokémon: The First Movie: original character design\n[…]\nPokémon: The Movie 2000: original character design\n[…]\nPokémon Heroes: conceptual character artist\n[…]\nPokémon Fushigi no Danjon Toki no Tankentai Yami no Tankentai (Pokémon Mystery Dungeon: Explorers of Time and Explorers of Darkness)\n[…]\nSugimori's blog (in Japanese)\n[…]\nSugimori's Twitter account (mostly Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ken_Sugimori",
        "situacao": "ok",
        "texto": "Ken Sugimori (杉森建) (Tóquio, 27 de janeiro de 1966) é um artista gráfico japonês.\n[…]\nDestacou-se como diretor de arte da série de jogos eletrônicos Pokémon.\n[…]\nAmigo de Satoshi Tajiri, criador da franquia, Sugimori é responsável pelo design de todos os primeiros 151 Pokemóns. Também é responsavel por criar outros personagens da série, como os protagonistas e os líderes de ginásio.\n[…]\nKen Sugimori é ainda o designer de personagens de Pulseman, um jogo da Game Freak para o Sega Mega Drive.\n[…]\nPokémon (TV): character design\n[…]\nPokémon: The First Movie - Mewtwo Strikes Back: Original character design\n[…]\nPokémon The Movie 2000 - The Power of One: Original character design\n[…]\nPokémon 3: The Movie - Spell of the Unown: Conceptual character artist\n[…]\nDrill Dozer: Director/Game Design",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Satoru Iwata",
      "descricao": "Programador japonês da HAL Laboratory que depois presidiu a Nintendo, de 2002 a 2015."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, a região de Kanto só coube no cartucho graças às técnicas de compressão de qual programador, que depois presidiu a Nintendo?",
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
    "indice": 29,
    "ancora": {
      "nome": "Pikachu Illustrator",
      "descricao": "Carta promocional rara do card game Pokémon, de 1998, considerada uma das cartas Pokémon mais valiosas."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em 1998, a rara carta Pikachu Illustrator nunca foi vendida em lojas. Como os primeiros donos conseguiram a carta no Japão?",
    "resposta": "Como prêmio de concurso de desenho",
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
    "indice": 30,
    "ancora": {
      "nome": "Pokémon Crystal",
      "descricao": "Versão especial de Pokémon Gold e Silver, lançada em 2000 para Game Boy Color, com o lendário Suicune em destaque."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Pokémon Crystal, lançado em 2000, trouxe uma novidade inédita na série principal na hora de escolher o protagonista. Que novidade era essa?",
    "resposta": "Poder jogar com uma menina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Crystal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Crystal",
        "situacao": "ok",
        "texto": "Pokémon Crystal Version is a role-playing video game developed by Game Freak and published by Nintendo for the Game Boy Color, released in Japan in December 2000 and internationally throughout 2001. Serving as an enhanced edition of the 1999 titles Pokémon Gold and Silver, it is the final entry in the second generation of the Pokémon game series.\n[…]\nSimilar to Pokémon Gold and Silver, Pokémon Crystal is a role-playing video game where players navigate a fictional world by capturing, training, and battling with Pokémon. In addition, Crystal enhances aspects of Gold and Silver, providing cosmetic and gameplay improvements.\n[…]\nNintendo first previewed Crystal and the Mobile Adapter GB at Space World in August 2000. Crystal was released in Japan on 14 December 2000. Nintendo previewed the release of Crystal for North America at E3 in May 2001, and released the game in North America on 30 July 2001, Australia on 30 September 2001, and Europe on 2 November 2001. Promotional releases of Crystal in North America included packaging of the game with lime green models of the Game Boy Color, sold as the Pokémon Crystal Bundle.\n[…]\nOn 2 March 2014, Crystal was played by Twitch Plays Pokémon, an interactive experience allowing users of the video game live streaming service Twitch to influence the play of the game through input commands in the chat box. The game featured the same protagonist and Pokémon to develop a continuity with the previous stream.\n[…]\nThe stream experienced criticism due to the involvement of players attempting to imitate high-stakes moments in the first stream, such as the release of Pokémon using the PC, as well as the temporary introduction of features that were abandoned, including changes to the \"Democracy\" and \"Anarchy\" modes. The stream of Crystal was completed in 13 days and 2 hours."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Crystal",
        "situacao": "ok",
        "texto": "Pokémon Crystal Version (ポケットモンスター クリスタル, Poketto Monsutā Kurisutaru; tradução: Monstros de Bolso Crystal, Cristal quando traduzida da grafia inglesa para a portuguesa, Cristal em japonês é 結晶 Kesshō) é um jogo eletrônico de RPG de 2000, desenvolvido pela Game Freak e publicado pela Nintendo para o Game Boy Color. É a versão aprimorada de Pokémon Gold e Silver e é o último jogo da segunda geração \n[…]\nÉ o último jogo Pokémon a ser lançado para o sistema Game Boy Color. Foi lançado no Japão em 14 de dezembro de 2000 e internacionalmente em 2001.\n[…]\nPokémon Crystal foi lançado mundialmente no Virtual Console do Nintendo 3DS em 26 de janeiro de 2018.\n[…]\nA jogabilidade de Pokémon Crystal é basicamente igual à de Gold e Silver, embora tenha vários novos recursos. É o primeiro jogo Pokémon que permite aos jogadores escolher o sexo de seu personagem, enquanto anteriormente o personagem era sempre masculino. Pela primeira vez, os Pokémon têm sprites animados breves quando entram na batalha; por exemplo, quando um Cyndaquil entra em batalha, as chamas em suas costas piscam.\n[…]\nFoi lançado no Japão em 14 de dezembro de 2000, na América do Norte em 29 de julho de 2001 e na Europa em 2 de novembro de 2001. Crystal foi relançado mundialmente através do Virtual Console do Nintendo 3DS em 26 de janeiro de 2018. Uma caixa física com um código de download para o jogo foi lançada no Japão e na Europa.\n[…]\nA revista australiana Nintendo Gamer deu uma pontuação de análise de 88 em 100 e elogiou as melhorias do jogo de Gold e Silver, incluindo a opção de escolher um treinador Pokémon masculino ou feminino, gráficos aprimorados, batalhas Pokémon mais animadas e melhorias na navegação de localização, afirmando: \"O mapa principal e os recursos do jogo permanecem os mesmos, mas existem pequenas diferenças suficientes para torná-lo uma adição valiosa à sua coleção de jogos Pokémon.\"",
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
