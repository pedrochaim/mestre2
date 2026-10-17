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
      "nome": "Professor Willow",
      "descricao": "Professor pokémon do jogo Pokémon Go, que recebe o jogador e pede ajuda nas suas pesquisas."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Go, que professor dá as boas-vindas ao jogador, ensina a capturar pokémon e pede ajuda nas suas pesquisas?",
    "resposta": "Professor Willow",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Willow",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Professor_Willow",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go",
        "situacao": "ok",
        "texto": "Pokémon Go (stylized as Pokémon GO) is a 2016 augmented reality (AR) mobile game originally developed and published by Niantic and since 2025 by Scopely Explore, in partnership with Nintendo and the Pokémon Company, for iOS and Android devices. The game uses GPS to locate, capture, train, and battle Pokémon. It is free-to-play, featuring a freemium model that includes in-app purchases for addition\n[…]\nPlayers can capture screenshots, called \"Snapshots\", of the Pokémon they encounter, regardless of whether the AR feature is enabled.\n[…]\nBy August 1, players reported a new glitch that swaps their captured Pokémon with another one at random. Another bug, confirmed by Niantic in August, inadvertently made capturing Pokémon more difficult. Some Legendary Pokémon, which are rare and powerful versions of the creatures, were also obtained by players in a glitch, though they were later removed from the accounts of the trainers who got them to keep the game fair.\n[…]\nThe app faced criticism for designating inappropriate locations like cemeteries and memorials as Pokémon capture sites, including the Auschwitz-Birkenau State Museum, the United States Holocaust Memorial Museum, the National September 11 Memorial & Museum, Arlington National Cemetery, the ANZAC War Memorial, and Hiroshima Peace Memorial Park. Niantic responded by removing content from sensitive areas like the Hiroshima Memorial and Holocaust Museum.\n[…]\nJapan's National Police Agency said it was the 79th Pokémon Go-related accident in the country. On August 11, 2016, a young girl in Cambodia was reportedly killed after being hit by a car while trying to capture a Pokémon on a road. The case was the first death related to Pokémon Go among Southeast Asian countries. In January 2017, a Chinese-American civilian, Jiansheng Chen, was shot dead while playing Pokémon Go.\n[…]\nMedia related to Pokémon Go at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_GO",
        "situacao": "ok",
        "texto": "Pokémon GO é um jogo eletrônico free-to-play de realidade aumentada voltado para smartphones. O jogo é desenvolvido e publicado pela Niantic, Inc., em colaboração com a Nintendo e a The Pokémon Company para as plataformas iOS e Android. O jogo foi inicialmente lançado em julho de 2016 para alguns países, eventualmente foi expandindo para o resto do mundo.\n[…]\nExistem diversas diferenças da versão beta em comparação ao jogo atual, sendo notável a presença da imagem de um professor que orienta o jogador sobre os pokémon, ensinando-o a jogar, completar missões e ganhar recompensas assim como nos jogos originais da série, e o re-design completo dos modelos em 3D dos treinadores, que possuem agora uma aparência mais semelhante ao estilo anime.\n[…]\nO Pokémon GO Plus é um dispositivo equipado com Bluetooth que permitirá aos jogadores executar determinadas ações no jogo sem olhar para o seu smartphone. Quando o jogador estiver perto de um Pokémon ou PokéStop, por exemplo, o dispositivo vibrará. O jogador poderá, em seguida, pressionar o botão para capturar um Pokémon em sua pulseira, sem poder, entretanto, verificar sua captura até que o acessório esteja conectado ao smartphone para transferir as informações.\n[…]\nDe acordo com a empresa de consultoria Sensor Tower, até meados de novembro de 2020, Pokémon GO já havia acumulado cerca de US$ 4,2 bilhões em gastos de jogadores no mundo todo.\n[…]\nA distribuição de PokéStops e ginásios no jogo (baseados nos portais de Ingress, jogo de realidade aumentada com temática em ficção científica) foi apontado como sendo mais disperso em muitos bairros minoritários, em um reflexo da demografia americana. No subúrbio de Rhodes em Sydney, tornou-se grande o número de jogadores que capturam pokémon em sua área.\n[…]\nPokémon\n[…]\nPokémon GO no Facebook\n[…]\nPokémon GO no Twitter\n[…]\n«Pokémon GO». para Google Play\n[…]\n«Pokémon GO». para App Store.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Spark",
      "descricao": "Líder da equipe Instinct, a equipe amarela do jogo Pokémon Go."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Go, cada equipe tem um líder. Que rapaz de cabelo loiro e espetado comanda a Instinct, a equipe amarela?",
    "resposta": "Spark",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Spark",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Spark",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go",
        "situacao": "ok",
        "texto": "Pokémon Go (stylized as Pokémon GO) is a 2016 augmented reality (AR) mobile game originally developed and published by Niantic and since 2025 by Scopely Explore, in partnership with Nintendo and the Pokémon Company, for iOS and Android devices. The game uses GPS to locate, capture, train, and battle Pokémon. It is free-to-play, featuring a freemium model that includes in-app purchases for addition\n[…]\nPlayers earn experience points (XP) by participating in various in-game activities. As they accumulate XP, they advance through levels progressively, unlocking new features. Notably, at level five, players gain access to Pokémon Gyms, where they can engage in battles. They must choose to join one of three color-coded teams: Team Valor (red), Team Mystic (blue), or Team Instinct (yellow). These teams compete for control over Gyms within the Pokémon Go world.\n[…]\nAt the 2016 San Diego Comic-Con, John Hanke, the founder of Niantic, unveiled the three team leaders: Candela (Team Valor), Blanche (Team Mystic), and Spark (Team Instinct). Hanke mentioned that only about 10 percent of the game's ideas had been implemented. Future updates, such as the trading feature, additional Pokémon, Pokémon Centers at PokéStops, fixing the \"three-step glitch\", and easier training, were confirmed. Niantic committed to supporting the game for \"years to come\".\n[…]\nIncense retains its pandemic-era duration and spawn rates—lasting 60 minutes and generating one Pokémon per minute while moving (or one every five minutes when stationary)—and Adventure Sync continues to record walking distance in the background to hatch Eggs and earn Buddy Candy even when the app is closed. Gift interactions also remain flexible, with a daily cap of 30 opened gifts instituted in March 2020 still in effect.\n[…]\nList of Pokémon, the list of all of the original Pokémon by order\n[…]\nMedia related to Pokémon Go at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_GO",
        "situacao": "ok",
        "texto": "Pokémon GO é um jogo eletrônico free-to-play de realidade aumentada voltado para smartphones. O jogo é desenvolvido e publicado pela Niantic, Inc., em colaboração com a Nintendo e a The Pokémon Company para as plataformas iOS e Android. O jogo foi inicialmente lançado em julho de 2016 para alguns países, eventualmente foi expandindo para o resto do mundo.\n[…]\nAssim como nos jogos oficiais da série, também se pode encontrar ginásios. Ao encontrar um ginásio, o jogador é obrigado a escolher um time: Time Valor (que representa o Pokémon Moltres), Time Mystic (que representa o Pokémon Articuno) ou Time Instinct (que representa o Pokémon Zapdos). Se este ginásio for do mesmo time que o seu, você pode designar um Pokémon ao ginásio para defende-lo.\n[…]\nEm 24 de julho, John Hanke revelou as aparências dos três líderes de equipe na Comic-Con 2016: Candela (Team Valor), Blanche (Team Mystic), e Spark (Team Instinct). Hanke comentou que aproximadamente 10% das ideias para o jogo foram implementadas. Atualizações futuras, incluindo novos Pokémon e trocas entre os jogadores, bem como a implementação de Pokémon Centers em PokéStops, correções na função de busca de Pokémon nos arredores e treinamento mais fácil foram também confirmados.\n[…]\nAntes da versão 1.0.1, Pokémon Go teve acesso integral às informações das contas Google dos jogadores, incluindo seus endereços de e-mail, seus históricos de navegação na Internet, documentos e fotos postadas no Google Drive e no Google Photos. A Niantic alega ter havido um erro, corrigido após uma atualização.\n[…]\nPokémon\n[…]\nPokémon Black 2 e White 2\n[…]\n«Página oficial de Pokémon» (em inglês)\n[…]\nPokémon GO no Facebook\n[…]\nPokémon GO no Twitter\n[…]\n«Pokémon GO». para Google Play\n[…]\n«Pokémon GO». para App Store.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Equipe GO Rocket",
      "descricao": "Versão da Equipe Rocket no jogo Pokémon Go, cujos recrutas e líderes usam pokémon sombrios que o jogador pode resgatar e purificar."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que a Equipe GO Rocket, ou Team GO Rocket, de Pokémon Go, e a organização Cipher, de Pokémon Colosseum, têm em comum?",
    "resposta": "Usam pokémon sombrios",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Shadow_Pok%C3%A9mon",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Shadow_Pok%C3%A9mon",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum",
        "situacao": "ok",
        "texto": "Pokémon Colosseum is a role-playing video game developed by Genius Sonority and published by The Pokémon Company and Nintendo for the GameCube. A spin-off of the Pokémon series, it was released on November 21, 2003, in Japan, March 22, 2004, in North America and May 14, 2004, in Europe. Unlike previous titles' random encounters with Pokémon, Colosseum allows the player to steal (\"snag\") the Pokémo\n[…]\nAfter leaving Phenac, Wes visits Pyrite Town, where Rui was kidnapped. In Pyrite, Wes and Rui find that Shadow Pokémon are being openly distributed to winners of the town's Colosseum tournament by Miror B., who is part of a secret criminal organization known as Cipher. The local police force is powerless to stop the practice, so Wes and Rui see Duking, an influential man in Pyrite who runs the Colosseum. However, Miror B.\n[…]\nFollowing the end of the main story, Wes and Rui continue snagging the remaining Shadow Pokémon that Cipher created and using Agate Village's Relic Stone to purify them. They also raid Team Snagem's destroyed hideout to defeat their boss Gonzap, pursue the Cipher admins to the Deep Colosseum in The Under, and thwart the plans of a master of disguise working for Cipher who attacked civilians with a Shadow Pokémon while disguised as Wes to defame him.\n[…]\nA manga adaptation of Colosseum's plot was printed in 2004 issues of the Japanese magazine CoroCoro Comic and titled Pokémon Colosseum Snatcher Leo (ポケモンコロシアムスナッチャーズレオ). The game was followed by a 2005 sequel entitled Pokémon XD: Gale of Darkness. Set in Orre five years after Colosseum, it features a new protagonist snagging Shadow Pokémon from Team Cipher. Shadow Lugia is the game's mascot, and serves as an antagonist whom the player can snag.\n[…]\nPokémon Colosseum at Nintendo.com (archives at the Wayback Machine (archive index) of the original at the Wayback Machine (archived 2007-10-12) at the Internet Archive)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go",
        "situacao": "ok",
        "texto": "Pokémon Go (stylized as Pokémon GO) is a 2016 augmented reality (AR) mobile game originally developed and published by Niantic and since 2025 by Scopely Explore, in partnership with Nintendo and the Pokémon Company, for iOS and Android devices. The game uses GPS to locate, capture, train, and battle Pokémon. It is free-to-play, featuring a freemium model that includes in-app purchases for addition\n[…]\nMany players aim to complete the Pokédex by catching and evolving all Pokémon.\n[…]\nIn July 2019, Pokémon Go introduced Team Go Rocket battles. Players can encounter Team Go Rocket NPCs at certain PokéStops or through Team Go Rocket Balloons that appear in the sky. After defeating them, players can capture a \"Shadow Pokémon\", which are lower-level Pokémon with a purple, shadowy aura reminiscent of the Shadow Pokémon from Pokémon Colosseum and Pokémon XD: Gale of Darkness.\n[…]\nAt the 2016 San Diego Comic-Con, John Hanke, the founder of Niantic, unveiled the three team leaders: Candela (Team Valor), Blanche (Team Mystic), and Spark (Team Instinct). Hanke mentioned that only about 10 percent of the game's ideas had been implemented. Future updates, such as the trading feature, additional Pokémon, Pokémon Centers at PokéStops, fixing the \"three-step glitch\", and easier training, were confirmed. Niantic committed to supporting the game for \"years to come\".\n[…]\nThis post also announces the creation of \"an internal cross-functional team\" to address community concerns regarding interaction distance. The following month, on September 1, 2021, Niantic posts a news update for Pokémon Go users stating that the 80 meter interaction radius will be returned, and increased communication will be opened with the community with the start of monthly \"Developer Diary\" announcements.\n[…]\nList of Pokémon, the list of all of the original Pokémon by order\n[…]\nMedia related to Pokémon Go at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum",
        "situacao": "ok",
        "texto": "Pokémon Colosseum (ポケモンコロシアム, Pokemon Koroshiamu) é o primeiro jogo da série Pokémon para o Nintendo GameCube. Apresenta dois modos de jogo: um RPG em 3D e um modo de batalha semelhantes a Pokémon Stadium, com conexão entre GameCube e Game Boy Advance. Embora este jogo contenha o primeiro RPG de Pokémon em 3D, este não é um original, já que não se captura Pokémon selvagens, mas sim de outros trein\n[…]\nTudo começa no novo continente de Orre, uma região desértica, devastada pelo crime. O garoto Wes, junto de seus parceiros Espeon e Umbreon, acabam explodindo a entrada de um prédio de uma organização criminosa chamada Team Snagem e rouba uma máquina que permite roubar Pokémon chamada Snag Machine. O garoto explode outra parte do prédio e vai embora. Ele chega em Outskirt Stand e vê nos jornais as reportagens sobre o roubo da arma.\n[…]\nUma adolescente de 15 anos que tem a capacidade de enxergar a aura negra dos Shadow Pokémon. Une-se a Wes para salvar Orre dos Cipher e do Team Snagem.\n[…]\nChefe do Team Snagem, ele se uniu aos Cipher para produzir os Shadow Pokémon. Diferentemente de XD, ele é um inimigo em Colosseum.\n[…]\nO Battle Mode trazia mais duas divisões, o Solo Battle e o Gang Battle. No Solo Battle, o jogador podia registrar Pokémon do Story Mode, excluindo os Shadow Pokémon não purificados, ou dos cartuchos de Pokémon Ruby, Sapphire, FireRed, LeafGreen ou Emerald para usá-los em batalhas consecutivas em Colosseums, que lembram o Desafio aos Líderes de Ginásio na série Stadium até ganhar todos, desafiar 100 treinadores no Mt. Battle VS.\n[…]\nDe acordo com o site Game Rankings, Pokémon Colosseum tem aprovação de 74% dos jogadores, um número baixo para um jogo Pokémon. Muitos consideram pelo fato de não haver Pokémon selvagens e por causa do processo de purificação de Shadow Pokémon ser chato e demorado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Snag Machine",
      "descricao": "Aparelho preso ao braço do protagonista de Pokémon Colosseum e Pokémon XD, usado para capturar pokémon de outros treinadores."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Colosseum, Wes captura os pokémon sombrios dos treinadores inimigos com um aparelho preso ao braço. Como se chama esse aparelho?",
    "resposta": "Snag Machine",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Snag_Machine",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Snag_Machine",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum",
        "situacao": "ok",
        "texto": "Pokémon Colosseum is a role-playing video game developed by Genius Sonority and published by The Pokémon Company and Nintendo for the GameCube. A spin-off of the Pokémon series, it was released on November 21, 2003, in Japan, March 22, 2004, in North America and May 14, 2004, in Europe. Unlike previous titles' random encounters with Pokémon, Colosseum allows the player to steal (\"snag\") the Pokémo\n[…]\nTeam Snagem (スナッチ団, Sunatchi-dan; Snatch Gang), a criminal organization that uses \"Snag Machine\" technology to capture Pokémon owned by trainers as if they were wild, serves as an antagonistic entity in the game, of whom Wes is a former member.\n[…]\nThe game begins with a cold open in which Wes infiltrates Team Snagem's hideout and steals their portable Snag Machine before leaving the organization, blowing up their hideout as he escapes. Passing through the Outskirt Stand, a dilapidated train engine in the middle of the desert that has been converted into a shop, Wes proceeds to the oasis-like Phenac City and sees two men named Folly and Trudly dragging a sack.\n[…]\nRetronauts described Colosseum as \"terrible\", citing the reuse of graphics from the Pokémon Stadium games.\n[…]\nA manga adaptation of Colosseum's plot was printed in 2004 issues of the Japanese magazine CoroCoro Comic and titled Pokémon Colosseum Snatcher Leo (ポケモンコロシアムスナッチャーズレオ). The game was followed by a 2005 sequel entitled Pokémon XD: Gale of Darkness. Set in Orre five years after Colosseum, it features a new protagonist snagging Shadow Pokémon from Team Cipher. Shadow Lugia is the game's mascot, and serves as an antagonist whom the player can snag.\n[…]\nPokémon Battle Revolution\n[…]\nPokémon Colosseum at Nintendo.com (archives at the Wayback Machine (archive index) of the original at the Wayback Machine (archived 2007-10-12) at the Internet Archive)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum",
        "situacao": "ok",
        "texto": "Pokémon Colosseum (ポケモンコロシアム, Pokemon Koroshiamu) é o primeiro jogo da série Pokémon para o Nintendo GameCube. Apresenta dois modos de jogo: um RPG em 3D e um modo de batalha semelhantes a Pokémon Stadium, com conexão entre GameCube e Game Boy Advance. Embora este jogo contenha o primeiro RPG de Pokémon em 3D, este não é um original, já que não se captura Pokémon selvagens, mas sim de outros trein\n[…]\nTudo começa no novo continente de Orre, uma região desértica, devastada pelo crime. O garoto Wes, junto de seus parceiros Espeon e Umbreon, acabam explodindo a entrada de um prédio de uma organização criminosa chamada Team Snagem e rouba uma máquina que permite roubar Pokémon chamada Snag Machine. O garoto explode outra parte do prédio e vai embora. Ele chega em Outskirt Stand e vê nos jornais as reportagens sobre o roubo da arma.\n[…]\nRui vê em um Makuhita uma aura negra, os chamados Shadow Pokémon, Pokémon com o coração corrompido, se tornando em verdadeiras máquinas de batalha. Rui pede para Wes usar sua Snag Machine para capturar o Pokémon e tentar salvá-lo. Rui, após algum tempo, descobre que Wes foi o garoto que roubou a Snag Machine. Mesmo assim, ela continua ajudando Wes a capturar os Shadow Pokémon, purificá-los, descobrir e destruir os planos dos tenebrosos Cipher.\n[…]\nUm garoto de 17 anos que saiu do Team Snagem e acabou roubando a Snag Machine para uso próprio, mas quando encontrou Rui, acabou tendo que ajudar, capturar e purificar os Shadow Pokémon. Tem como parceiros Espeon e Umbreon.\n[…]\nChefe do Team Snagem, ele se uniu aos Cipher para produzir os Shadow Pokémon. Diferentemente de XD, ele é um inimigo em Colosseum.\n[…]\nDe acordo com o site Game Rankings, Pokémon Colosseum tem aprovação de 74% dos jogadores, um número baixo para um jogo Pokémon. Muitos consideram pelo fato de não haver Pokémon selvagens e por causa do processo de purificação de Shadow Pokémon ser chato e demorado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Rui (Pokémon Colosseum)",
      "descricao": "Moça que acompanha o protagonista Wes em Pokémon Colosseum e consegue enxergar a aura dos pokémon sombrios."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Colosseum, que moça acompanha Wes pela região de Orre e tem o dom de enxergar a aura sombria dos pokémon?",
    "resposta": "Rui",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Rui",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Rui",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum",
        "situacao": "ok",
        "texto": "Pokémon Colosseum is a role-playing video game developed by Genius Sonority and published by The Pokémon Company and Nintendo for the GameCube. A spin-off of the Pokémon series, it was released on November 21, 2003, in Japan, March 22, 2004, in North America and May 14, 2004, in Europe. Unlike previous titles' random encounters with Pokémon, Colosseum allows the player to steal (\"snag\") the Pokémo\n[…]\nPokémon can be traded between Colosseum and the Game Boy Advance games Ruby, Sapphire, FireRed, LeafGreen and Emerald.\n[…]\nPokémon Colosseum is set in the Orre region. Orre is a mostly desertous region in which no wild Pokémon can be found (although the sequel, Pokémon XD: Gale of Darkness, adds wild Pokémon spots to the region). Orre consists of many cities, towns, and Colosseums.\n[…]\nRetronauts described Colosseum as \"terrible\", citing the reuse of graphics from the Pokémon Stadium games.\n[…]\nPokémon Colosseum spawned a high-profile tournament in the United Kingdom entitled \"Pokémon Colosseum Battlemaster 2004\". The first round of battles was held at Toys \"R\" Us locations, with later battles taking place in movie theaters. Across Europe, the game was bundled with GameCube consoles shortly after its release.\n[…]\nA manga adaptation of Colosseum's plot was printed in 2004 issues of the Japanese magazine CoroCoro Comic and titled Pokémon Colosseum Snatcher Leo (ポケモンコロシアムスナッチャーズレオ). The game was followed by a 2005 sequel entitled Pokémon XD: Gale of Darkness. Set in Orre five years after Colosseum, it features a new protagonist snagging Shadow Pokémon from Team Cipher. Shadow Lugia is the game's mascot, and serves as an antagonist whom the player can snag.\n[…]\nPokémon Battle Revolution\n[…]\nPokémon Colosseum at Nintendo.com (archives at the Wayback Machine (archive index) of the original at the Wayback Machine (archived 2007-10-12) at the Internet Archive)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum",
        "situacao": "ok",
        "texto": "Pokémon Colosseum (ポケモンコロシアム, Pokemon Koroshiamu) é o primeiro jogo da série Pokémon para o Nintendo GameCube. Apresenta dois modos de jogo: um RPG em 3D e um modo de batalha semelhantes a Pokémon Stadium, com conexão entre GameCube e Game Boy Advance. Embora este jogo contenha o primeiro RPG de Pokémon em 3D, este não é um original, já que não se captura Pokémon selvagens, mas sim de outros trein\n[…]\nPokémon Colosseum é o primeiro game da produtora Genius Sonority, que também trabalhou em Pokémon XD e Pokémon Battle Revolution. Como iniciante no ramos dos games, a empresa, a pedido da Nintendo e da The Pokémon Company, decidiu criar um novo conceito nos jogos da série. Introduziram uma história onde Pokémon são modificados geneticamente, criando uma aura negra em volta do mesmo, tornando-o uma arma de batalha.\n[…]\nTudo começa no novo continente de Orre, uma região desértica, devastada pelo crime. O garoto Wes, junto de seus parceiros Espeon e Umbreon, acabam explodindo a entrada de um prédio de uma organização criminosa chamada Team Snagem e rouba uma máquina que permite roubar Pokémon chamada Snag Machine. O garoto explode outra parte do prédio e vai embora. Ele chega em Outskirt Stand e vê nos jornais as reportagens sobre o roubo da arma.\n[…]\nUma adolescente de 15 anos que tem a capacidade de enxergar a aura negra dos Shadow Pokémon. Une-se a Wes para salvar Orre dos Cipher e do Team Snagem.\n[…]\nChefe do Team Snagem, ele se uniu aos Cipher para produzir os Shadow Pokémon. Diferentemente de XD, ele é um inimigo em Colosseum.\n[…]\nBattle VS. 100, o lendário Ho-oh aparecia e era transferido para o Pokémon Storage do Story Mode.\n[…]\nDe acordo com o site Game Rankings, Pokémon Colosseum tem aprovação de 74% dos jogadores, um número baixo para um jogo Pokémon. Muitos consideram pelo fato de não haver Pokémon selvagens e por causa do processo de purificação de Shadow Pokémon ser chato e demorado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Pokémon Colosseum",
      "descricao": "Jogo de RPG Pokémon para GameCube, desenvolvido pela Genius Sonority e ambientado na região desértica de Orre."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon Colosseum, o RPG de GameCube passado na região de Orre, chegou às lojas japonesas em que ano?",
    "resposta": "2003",
    "distratores": [
      "2001",
      "2005",
      "2006"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum",
        "situacao": "ok",
        "texto": "Pokémon Colosseum is a role-playing video game developed by Genius Sonority and published by The Pokémon Company and Nintendo for the GameCube. A spin-off of the Pokémon series, it was released on November 21, 2003, in Japan, March 22, 2004, in North America and May 14, 2004, in Europe. Unlike previous titles' random encounters with Pokémon, Colosseum allows the player to steal (\"snag\") the Pokémo\n[…]\nPokémon Colosseum was exhibited at E3 2003 and featured Pokémon models ported from the Nintendo 64's Pokémon Stadium and Pokémon Stadium 2. North American pre-orders included a bonus disc that allows the player to download the Pokémon Jirachi on the Game Boy Advance titles Pokémon Ruby and Sapphire while Japanese bonus discs featured similar downloads for Celebi and Pikachu. Upon release, the game was a critical and commercial success, with praise directed at its graphics and music.\n[…]\nA preview for the game was hosted at E3 2003. Upon completion of development, Colosseum received a rating of \"E\" (Everyone) from the Entertainment Software Rating Board, \"All Ages\" from Computer Entertainment Rating Organization, and \"3+\" from Pan European Game Information. The game was released on November 21, 2003, in Japan; March 22, 2004, in North America, and May 14, 2004, in Europe.\n[…]\nThe disc also updates the software in Ruby and Sapphire to remove a \"berry glitch\" discovered in 2003. Despite public anticipation the Bonus Disc was not released in PAL territories, prompting Nintendo to issue an official apology. However a Jirachi was later included in the PAL version of the game Pokémon Channel. In Japan, scannable cards for the Nintendo e-Reader were available for purchase that featured additional trainers to battle and capture Shadow Pokémon.\n[…]\nRetronauts described Colosseum as \"terrible\", citing the reuse of graphics from the Pokémon Stadium games.\n[…]\nPokémon Battle Revolution"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum",
        "situacao": "ok",
        "texto": "Pokémon Colosseum (ポケモンコロシアム, Pokemon Koroshiamu) é o primeiro jogo da série Pokémon para o Nintendo GameCube. Apresenta dois modos de jogo: um RPG em 3D e um modo de batalha semelhantes a Pokémon Stadium, com conexão entre GameCube e Game Boy Advance. Embora este jogo contenha o primeiro RPG de Pokémon em 3D, este não é um original, já que não se captura Pokémon selvagens, mas sim de outros trein\n[…]\nTudo começa no novo continente de Orre, uma região desértica, devastada pelo crime. O garoto Wes, junto de seus parceiros Espeon e Umbreon, acabam explodindo a entrada de um prédio de uma organização criminosa chamada Team Snagem e rouba uma máquina que permite roubar Pokémon chamada Snag Machine. O garoto explode outra parte do prédio e vai embora. Ele chega em Outskirt Stand e vê nos jornais as reportagens sobre o roubo da arma.\n[…]\nUma adolescente de 15 anos que tem a capacidade de enxergar a aura negra dos Shadow Pokémon. Une-se a Wes para salvar Orre dos Cipher e do Team Snagem.\n[…]\nChefe do Team Snagem, ele se uniu aos Cipher para produzir os Shadow Pokémon. Diferentemente de XD, ele é um inimigo em Colosseum.\n[…]\nTanto a versão Japonesa quanto a Americana davam discos-bônus caso os jogadores comprassem o jogo por pré-venda. No disco bônus japonês, havia um Pokémon surpresa para ser transferido para os cartuchos: Celebi, enquanto a versão americana trazia Jirachi como bônus. Havia mais um Pokémon Bônus dentro do jogo: caso o jogador utilizasse um time do Story Mode (podendo vir de outros cartuchos, mas estando registrado com o personagem do Story Mode) purificasse todos os Shadow Pokémon e concluísse o Mt.\n[…]\nDe acordo com o site Game Rankings, Pokémon Colosseum tem aprovação de 74% dos jogadores, um número baixo para um jogo Pokémon. Muitos consideram pelo fato de não haver Pokémon selvagens e por causa do processo de purificação de Shadow Pokémon ser chato e demorado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Pokémon Stadium",
      "descricao": "Jogo de batalhas Pokémon em 3D para Nintendo 64, que permitia usar pokémon dos jogos de Game Boy."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon Stadium, o jogo de batalhas em 3D do Nintendo 64 que vinha com o Transfer Pak, chegou aos Estados Unidos em que ano?",
    "resposta": "2000",
    "distratores": [
      "1998",
      "1999",
      "2001"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Stadium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Stadium",
        "situacao": "ok",
        "texto": "Pokémon Stadium is a 1999 strategy video game developed and published by Nintendo for the Nintendo 64. The gameplay revolves around a 3D turn-based battling system using the 151 Pokémon from the Game Boy games Pokémon Red, Blue, and Yellow, with several in-game challenges for players to overcome. The game includes four \"Cups\", each of which is a series of three-on-three Pokémon battles against an \n[…]\nNintendo reported to have sold 1,370,000 copies of the game by December 1999 in the region.\n[…]\nOn March 6, 2000, Nintendo launched a $7 million Pokémon Stadium advertising campaign on television, print, and online media as part of a wider $30 million Pokémon promotion. Nintendo released a promotional Pokémon Stadium bundle featuring a Nintendo 64 console, two differently colored Nintendo 64 controllers, a poster, a journal, and a \"Cool Porygon\" promo card for the trading card game.\n[…]\nThe game was released in the United States on March 6 and in Europe on April 7, 2000. It sold over 100,000 in the United Kingdom. By April, Nintendo of America announced that Pokémon Stadium sold over 1 million copies. It became the best-selling console game in the region during the year 2000. Anne Sherber of Supermarket News wrote that Nintendo had the biggest share of the American console video game market in 2000, with sales of the Nintendo 64 being driven by the release of Pokémon Stadium.\n[…]\nMonths after its debut, a follow-up to Pokémon Stadium, tentatively titled Pokémon Stadium Gold/Silver, was announced by Nintendo. The game was released in 2000 as Pokémon Stadium 2, featuring every Pokémon from Stadium as well as those released in Pokémon Gold and Silver. Transfer Pak compatibility is included for Pokémon Gold, Silver, and Crystal as well as Pokémon Red, Blue, and Yellow.\n[…]\nPokémon Stadium at the Wayback Machine (archived 2007-10-11) at Nintendo.com"
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
    "indice": 8,
    "ancora": {
      "nome": "Pocket Monsters Stadium",
      "descricao": "Primeiro jogo da série Stadium, lançado só no Japão em 1998 para Nintendo 64, com apenas parte dos pokémon de Kanto."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Lançado só no Japão em 1998, o primeiro Pokémon Stadium não deixava usar todos os 151 pokémon de Kanto. Quantos estavam disponíveis?",
    "resposta": "42",
    "distratores": [
      "64",
      "80",
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
    "indice": 9,
    "ancora": {
      "nome": "Pokémon Snap",
      "descricao": "Jogo de 1999 para Nintendo 64 em que o fotógrafo Todd Snap registra pokémon numa ilha, percorrida num veículo sobre trilhos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Snap, de Nintendo 64, quem examina as fotografias tiradas por Todd e dá uma nota a cada uma?",
    "resposta": "Professor Carvalho (Professor Oak)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Snap"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "Pokémon Snap is a 1999 photography video game developed by HAL Laboratory and published by Nintendo for the Nintendo 64. It was first released in Japan in March 1999 and was later released in July 1999 in North America and in September 2000 for PAL regions. It is a spin-off game in the Pokémon series, being one of the first console-based games for it, and featuring many Pokémon rendered for the fi\n[…]\nOriginally announced as a Nintendo 64DD title, the development of Pokémon Snap was moved to the Nintendo 64 due to the 64DD's delays. The gameplay is similar to other first-person games, viewing from the perspective of protagonist Todd Snap as he moves automatically on a rail. The objective of the game is to take pictures of Pokémon with an in-game camera, using items such as apples and \"pester balls\" to achieve better shots.\n[…]\nPokémon Snap is a photography video game with rail shooter elements. The Zero-One follows a linear path throughout the level, viewing from a first-person perspective. Up to 60 pictures can be taken per visit. After completing a course, the player selects their best photo of each Pokémon to be rated by Professor Oak and added to the Pokémon Report. Scoring takes into account various aspects of the pictures, such as the Pokémon's size, its pose, and keeping the Pokémon in frame.\n[…]\nTodd Snap (トオル, Tooru), a Pokémon photographer, is summoned by Professor Oak to Pokémon Island, a place with a variety of climatic and geographic regions where Pokémon live relatively undisturbed by humans. Oak needs quality pictures to accompany his scientific findings and knows from past experience that Todd is the right person for the job.\n[…]\nAt the 3rd Annual Interactive Achievement Awards, Pokémon Snap was awarded Console Children's/Family Title of the Year by  the Academy of Interactive Arts & Sciences. Blockbuster nominated it for best Nintendo 64 game in its \"Blockbuster Awards\"."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Snap",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "Pokémon Snap (ポケモンスナップ, Pokemon Sunappu) é um jogo da série Pokémon, lançado em 1999 para Nintendo 64. É um dos primeiros spin-offs da série. Nele, o jogador controla um fotógrafo, Todd Snap, cujo objetivo é fotografar cada Pokémon no melhor ângulo.\n[…]\nO objetivo do jogo é fotografar cada pokémon no melhor ângulo possível, semelhante a um jogo de tiro. É possível tirar sessenta fotos da mesma fase e depois escolher a melhor para dar de presente ao Prof. Carvalho, que avalia o estado da foto e dá pontos ao jogador para destravar recursos no jogo. Os critérios de avaliação são:\n[…]\nPose: avalia a pose do Pokémon\n[…]\nTodd, um fotógrafo de pokémons, é chamado pelo Prof. Carvalho para ir a uma ilha para ajudá-lo com uma pesquisa. Ele precisa de qualidades nas fotos para ajudá-lo a entender melhor o comportamento dos Pokémon. Em uma ilha, onde os Pokémon não são perturbados por humanos, Todd viaja pela ilha e fotografa os Pokémon em cima de seu buggy chamado Zero-One.\n[…]\nPokémon Snap apresenta apenas sete fases, mas é necessário voltar a algumas fases para ajudar ainda mais o Prof. Carvalho e encontrar mais coisas interessantes, principalmente achar e fotografar as \"Marcas de Pokémon\", coisas comuns que têm a forma dos Pokémon.\n[…]\nO jogo recebeu uma versão para o Virtual Console do Nintendo Wii, lançada em dezembro de 2007, idêntica à versão para Nintendo 64, exceto pelo fato de que as fotos podem ser postadas no Wii Message Board. É o primeiro jogo do Virtual Console a ter alguma \"mudança\" em relação ao jogo original.\n[…]\nEm abril de 2016, Pokémon Snap foi relançado no Japão como um título do Virtual Console do Wii U. Esta versão foi relançada na Europa e Austrália, em agosto do mesmo ano, e na América do Norte em 5 de janeiro de 2017.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Pokémon Snap",
      "descricao": "Jogo de 1999 para Nintendo 64 em que o fotógrafo Todd Snap registra pokémon numa ilha, percorrida num veículo sobre trilhos."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Qual destes jogos derivados de Pokémon foi lançado primeiro?",
    "resposta": "Pokémon Snap",
    "distratores": [
      "Pokémon Colosseum",
      "Pokémon Ranger",
      "Pokémon Mystery Dungeon"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "Pokémon Snap is a 1999 photography video game developed by HAL Laboratory and published by Nintendo for the Nintendo 64. It was first released in Japan in March 1999 and was later released in July 1999 in North America and in September 2000 for PAL regions. It is a spin-off game in the Pokémon series, being one of the first console-based games for it, and featuring many Pokémon rendered for the fi\n[…]\nDeveloper Wade Tinney attributed the inspiration for the game design of Snapshot Adventures: Secret of Bird Island to both Pokémon Snap and the video game Spore. The PlayStation 3 video game Afrika was said by both UGO Networks and Shacknews to be Pokémon Snap-like. Dead Rising's photography mechanic was also likened to Pokémon Snap's by Kotaku.\n[…]\nRetronauts speculated that the popularity of Pokémon Snap was due to being released at the height of Pokémon fandom. However, one of the commentators on the podcast, Justin Haywald, found this odd, calling it \"horrible.\" The podcast discussed briefly the prospects of a Pokémon Snap sequel, feeling that the Nintendo 3DS' gyroscope and augmented reality cards could be used, citing Steel Diver for its use of the former feature.\n[…]\nRetronauts member Jeremy Parish commented that if they didn't make such a sequel, it's because they are “stupid and don't like money.” IGN commented that a Pokémon game better than Black and White was Pokémon Snap, stating that \"It hasn't become stale\", \"It has better Pokémon\", and \"It made the Pokémon world feel real\".\n[…]\nThey commented that none of the past Pokémon games \"have managed to make the little critters seem as alive as Pokemon Snap did\", and praised the 3D modeling, calling it \"glorious\". 1UP.com used Pokémon Snap as an example of a game that would use the Wii U controller's gyroscope to look around, calling it \"The coolest version of Pokémon Snap ever\".\n[…]\nPokémon Snap at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum",
        "situacao": "ok",
        "texto": "Pokémon Colosseum is a role-playing video game developed by Genius Sonority and published by The Pokémon Company and Nintendo for the GameCube. A spin-off of the Pokémon series, it was released on November 21, 2003, in Japan, March 22, 2004, in North America and May 14, 2004, in Europe. Unlike previous titles' random encounters with Pokémon, Colosseum allows the player to steal (\"snag\") the Pokémo\n[…]\nIGN staff writer Craig Harris said that the adaptation of the Pokémon RPG formula to the 3D zeitgeist \"does a decent enough job\" and is \"a bit more linear and straightforward\".\n[…]\nRetronauts described Colosseum as \"terrible\", citing the reuse of graphics from the Pokémon Stadium games.\n[…]\nPokémon Colosseum spawned a high-profile tournament in the United Kingdom entitled \"Pokémon Colosseum Battlemaster 2004\". The first round of battles was held at Toys \"R\" Us locations, with later battles taking place in movie theaters. Across Europe, the game was bundled with GameCube consoles shortly after its release.\n[…]\nSpecial editions of this set also included a copy of Pokémon Box: Ruby and Sapphire—a game that allows players to organize and store up to 1,500 Pokémon from their games—as well as a memory card and a Game Boy Advance–GameCube link cable.\n[…]\nA manga adaptation of Colosseum's plot was printed in 2004 issues of the Japanese magazine CoroCoro Comic and titled Pokémon Colosseum Snatcher Leo (ポケモンコロシアムスナッチャーズレオ). The game was followed by a 2005 sequel entitled Pokémon XD: Gale of Darkness. Set in Orre five years after Colosseum, it features a new protagonist snagging Shadow Pokémon from Team Cipher. Shadow Lugia is the game's mascot, and serves as an antagonist whom the player can snag.\n[…]\nPokémon Battle Revolution\n[…]\nPokémon Colosseum at Nintendo.com (archives at the Wayback Machine (archive index) of the original at the Wayback Machine (archived 2007-10-12) at the Internet Archive)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger",
        "situacao": "ok",
        "texto": "Pokémon Ranger (ポケモンレンジャー, Pokemon Renjā) is an action role-playing video game developed by HAL Laboratory and Creatures Inc. and published by The Pokémon Company and Nintendo for the Nintendo DS video game console. The game was released in Japan, North America, and Australia in 2006 before releasing in Europe in 2007.\n[…]\nMultiple legendary Pokémon are relevant to the plot, such as Entei, Raikou, Suicune, Kyogre, Groudon, and Rayquaza.\n[…]\nThere have been multiple merchandise releases for Pokémon Ranger. This includes a toy Capture Styler, a watch inspired by the Capture Styler, handbooks, pins, and other miscellaneous items.\n[…]\nAs of January, 2025, Pokémon Ranger has sold over 2,930,000 copies worldwide.\n[…]\nPokémon Ranger: Shadows of Almia is the sequel to Pokémon Ranger, developed by Creatures Inc. for the Nintendo DS. It was announced in the January 2008 issue of CoroCoro Comic and released in Japan on March 20, 2008. It was announced at E3 2008 that the game would be released in the United States under the title Shadows of Almia on November 10, 2008, and later announced to release in Europe on November 21, 2008.\n[…]\nThis sequel follows the same mission-based plot, this time, allowing players to download new missions via Nintendo Wifi Connection. This game features 270 new Pokémon that were not seen in Pokémon Ranger.\n[…]\nPokémon Ranger: Guardian Signs is an action role-playing video game developed by Creatures Inc., published by The Pokémon Company, and distributed by Nintendo for the Nintendo DS. It is the third and final installment of the Pokémon Ranger series and was released worldwide in 2010. The protagonist explores a new region, Oblivia, as they continue the mission-based plot from the previous games."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "Pokémon Snap (ポケモンスナップ, Pokemon Sunappu) é um jogo da série Pokémon, lançado em 1999 para Nintendo 64. É um dos primeiros spin-offs da série. Nele, o jogador controla um fotógrafo, Todd Snap, cujo objetivo é fotografar cada Pokémon no melhor ângulo.\n[…]\nFoi o primeiro jogo da Série em que os Pokémons eram capazes de falar, tendo a mesma voz dos dubladores da série animada.\n[…]\nTamanho: o Pokémon não pode estar muito pequeno nem com cortes na fotografia.\n[…]\nPose: avalia a pose do Pokémon\n[…]\nOutro Pokémon: caso haja dois ou mais pokémons em uma foto e caso estes estejam bons, pontos extras são dados.\n[…]\nTécnica: caso o Pokémon esteja bem centralizado, pontos extras são dados.\n[…]\nTodd, um fotógrafo de pokémons, é chamado pelo Prof. Carvalho para ir a uma ilha para ajudá-lo com uma pesquisa. Ele precisa de qualidades nas fotos para ajudá-lo a entender melhor o comportamento dos Pokémon. Em uma ilha, onde os Pokémon não são perturbados por humanos, Todd viaja pela ilha e fotografa os Pokémon em cima de seu buggy chamado Zero-One.\n[…]\nPokémon Snap apresenta apenas sete fases, mas é necessário voltar a algumas fases para ajudar ainda mais o Prof. Carvalho e encontrar mais coisas interessantes, principalmente achar e fotografar as \"Marcas de Pokémon\", coisas comuns que têm a forma dos Pokémon.\n[…]\nPokémon Snap foi citado como um jogo bom e inovador, mas recebeu muitas críticas por conter apenas 63 dos 151 Pokémon existentes na época.\n[…]\nEm abril de 2016, Pokémon Snap foi relançado no Japão como um título do Virtual Console do Wii U. Esta versão foi relançada na Europa e Austrália, em agosto do mesmo ano, e na América do Norte em 5 de janeiro de 2017.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Rainbow Cloud (Pokémon Snap)",
      "descricao": "Fase final e secreta de Pokémon Snap, uma nuvem de arco-íris onde Todd fotografa o mítico Mew."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na última fase de Pokémon Snap, uma nuvem de arco-íris, Todd fotografa um pokémon mítico protegido por uma bolha. Que pokémon é esse?",
    "resposta": "Mew",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Rainbow_Cloud",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Rainbow_Cloud",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "Pokémon Snap is a 1999 photography video game developed by HAL Laboratory and published by Nintendo for the Nintendo 64. It was first released in Japan in March 1999 and was later released in July 1999 in North America and in September 2000 for PAL regions. It is a spin-off game in the Pokémon series, being one of the first console-based games for it, and featuring many Pokémon rendered for the fi\n[…]\nOriginally announced as a Nintendo 64DD title, the development of Pokémon Snap was moved to the Nintendo 64 due to the 64DD's delays. The gameplay is similar to other first-person games, viewing from the perspective of protagonist Todd Snap as he moves automatically on a rail. The objective of the game is to take pictures of Pokémon with an in-game camera, using items such as apples and \"pester balls\" to achieve better shots.\n[…]\nTodd Snap (トオル, Tooru), a Pokémon photographer, is summoned by Professor Oak to Pokémon Island, a place with a variety of climatic and geographic regions where Pokémon live relatively undisturbed by humans. Oak needs quality pictures to accompany his scientific findings and knows from past experience that Todd is the right person for the job.\n[…]\nNintendo, partnering with LodgeNet, included Nintendo 64s with Pokémon Snap for more than 86,000 hotels with the intent of capitalizing on the Pokémon franchise for the holiday travel season. Nintendo displayed Pokémon Snap at a Pokémon event called \"Pokémon League Summer Training Tour\". The game's protagonist, Todd Snap, also briefly appeared in the Pokémon anime series shortly before the game's release.\n[…]\nAt the 3rd Annual Interactive Achievement Awards, Pokémon Snap was awarded Console Children's/Family Title of the Year by  the Academy of Interactive Arts & Sciences. Blockbuster nominated it for best Nintendo 64 game in its \"Blockbuster Awards\".\n[…]\nPokémon Snap at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "Pokémon Snap (ポケモンスナップ, Pokemon Sunappu) é um jogo da série Pokémon, lançado em 1999 para Nintendo 64. É um dos primeiros spin-offs da série. Nele, o jogador controla um fotógrafo, Todd Snap, cujo objetivo é fotografar cada Pokémon no melhor ângulo.\n[…]\nO objetivo do jogo é fotografar cada pokémon no melhor ângulo possível, semelhante a um jogo de tiro. É possível tirar sessenta fotos da mesma fase e depois escolher a melhor para dar de presente ao Prof. Carvalho, que avalia o estado da foto e dá pontos ao jogador para destravar recursos no jogo. Os critérios de avaliação são:\n[…]\nTamanho: o Pokémon não pode estar muito pequeno nem com cortes na fotografia.\n[…]\nPose: avalia a pose do Pokémon\n[…]\nTécnica: caso o Pokémon esteja bem centralizado, pontos extras são dados.\n[…]\nTodd, um fotógrafo de pokémons, é chamado pelo Prof. Carvalho para ir a uma ilha para ajudá-lo com uma pesquisa. Ele precisa de qualidades nas fotos para ajudá-lo a entender melhor o comportamento dos Pokémon. Em uma ilha, onde os Pokémon não são perturbados por humanos, Todd viaja pela ilha e fotografa os Pokémon em cima de seu buggy chamado Zero-One.\n[…]\nPokémon Snap apresenta apenas sete fases, mas é necessário voltar a algumas fases para ajudar ainda mais o Prof. Carvalho e encontrar mais coisas interessantes, principalmente achar e fotografar as \"Marcas de Pokémon\", coisas comuns que têm a forma dos Pokémon.\n[…]\nPokémon Snap foi citado como um jogo bom e inovador, mas recebeu muitas críticas por conter apenas 63 dos 151 Pokémon existentes na época.\n[…]\nEm abril de 2016, Pokémon Snap foi relançado no Japão como um título do Virtual Console do Wii U. Esta versão foi relançada na Europa e Austrália, em agosto do mesmo ano, e na América do Norte em 5 de janeiro de 2017.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Zero-One",
      "descricao": "Veículo automático em que Todd Snap percorre a Ilha Pokémon no jogo Pokémon Snap, de Nintendo 64."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Snap, de Nintendo 64, Todd percorre a ilha num carrinho automático que segue sozinho o percurso. Como se chama esse veículo?",
    "resposta": "Zero-One",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/ZERO-ONE",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/ZERO-ONE",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "Pokémon Snap is a 1999 photography video game developed by HAL Laboratory and published by Nintendo for the Nintendo 64. It was first released in Japan in March 1999 and was later released in July 1999 in North America and in September 2000 for PAL regions. It is a spin-off game in the Pokémon series, being one of the first console-based games for it, and featuring many Pokémon rendered for the fi\n[…]\nOriginally announced as a Nintendo 64DD title, the development of Pokémon Snap was moved to the Nintendo 64 due to the 64DD's delays. The gameplay is similar to other first-person games, viewing from the perspective of protagonist Todd Snap as he moves automatically on a rail. The objective of the game is to take pictures of Pokémon with an in-game camera, using items such as apples and \"pester balls\" to achieve better shots.\n[…]\nPokémon Snap is a photography video game with rail shooter elements. The Zero-One follows a linear path throughout the level, viewing from a first-person perspective. Up to 60 pictures can be taken per visit. After completing a course, the player selects their best photo of each Pokémon to be rated by Professor Oak and added to the Pokémon Report. Scoring takes into account various aspects of the pictures, such as the Pokémon's size, its pose, and keeping the Pokémon in frame.\n[…]\nUsing a motorized, amphibious buggy named the Zero-One, Todd explores the island and takes photographs of the wide variety of Pokémon that inhabit its environments.\n[…]\nThe Virtual Console re-release was met with generally mixed reception. Nintendo Life editor Marcel Van Duyn praised it as a \"fun and a relaxing break from the other Pokémon titles\", but criticized it as \"super short\". RPGamer editor Anna Marie Neufeld criticized it for having \"zero replayability\" and \"if nothing else, a good way to waste an afternoon or evening with the Wii.\" IGN editor Lucas M.\n[…]\nPokémon Snap at IMDb"
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
    "indice": 13,
    "ancora": {
      "nome": "Fenômeno Illumina",
      "descricao": "Fenômeno de New Pokémon Snap em que certos pokémon da região de Lental brilham com uma luz misteriosa."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em New Pokémon Snap, certos pokémon das ilhas de Lental brilham com uma luz misteriosa. Como se chama esse fenômeno estudado pelo Professor Mirror?",
    "resposta": "Illumina",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Illumina_Pok%C3%A9mon",
      "https://en.wikipedia.org/wiki/New_Pok%C3%A9mon_Snap"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Illumina_Pok%C3%A9mon",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/New_Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "New Pokémon Snap is a 2021 photography video game developed by Bandai Namco Studios and published by Nintendo and The Pokémon Company for the Nintendo Switch. It is a sequel to HAL Laboratory's 1999 Nintendo 64 game Pokémon Snap. It was announced in June 2020 during a Pokémon Presents livestream and was released on April 30, 2021, during the franchise's 25th anniversary.\n[…]\nNew Pokémon Snap is a three-dimensional (3D) photography video game with elements of the rail shooter and puzzle genres. The player controls a Pokémon photographer who is tasked by a research team led by Professor Mirror with taking pictures of Pokémon species in their natural habitat in the Lental region for their ecological survey. Additionally, the player is asked to investigate Illumina phenomenon, where Pokémon and plants known as crystablooms exhibit a strange luminescence.\n[…]\nThe player, a Pokémon photographer, travels to the Laboratory of Ecological and Natural Sciences (L.E.N.S.) in the Lental region after being invited by Professor Mirror and his assistant Rita to help with their research studies and ecological survey. The pair are researching the Illumina phenomenon, a phenomenon that causes Pokémon species as well as specific flowers to exhibit a strange luminescence, which was documented in a travelogue by an explorer 100 years prior.\n[…]\nAcross three of the Lental region's archipelago, Belusylva Island, Maricopia Islands and Voluca Island, the player travels through different biomes and unlocks tools that can change a Pokémon's behavior to further the documentation of different species. During this time, two more of Professor Mirror's assistants, Todd Snap and Phil, arrive at L.E.N.S. to aid in the professor's work. Mirror also develops the Illumina orbs, tools that can cause Pokémon to temporarily appear in the Illumina state."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/New_Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "New Pokémon Snap (New ポケモンスナップ, Nyū Pocket Monsters Sunappu) é um jogo eletrônico de simulação em primeira pessoa 2021 on-rails desenvolvido pela Bandai Namco Studios e publicado pela Nintendo e The Pokémon Company para o Nintendo Switch. É uma sequência do jogo Pokémon Snap de 1999 para Nintendo 64. Anunciado em junho de 2020, foi lançado em 30 de abril de 2021. Os jogadores viajam na região de L\n[…]\nEm New Pokémon Snap, o jogador é um fotógrafo Pokémon, que visita várias ilhas na região de Lental para auxiliar nos estudos de pesquisa do Professor Mirror e seus assistentes Rita e Phil. O laboratório de pesquisa localizado na região de Lental é denominado Laboratório de Ciências Ecológicas e Naturais (L.E.N.S.). Tirar fotos ajuda o jogador a construir um compêndio chamado Fotodex; o título apresenta mais de 200 Pokémon diferentes para o usuário retratar.\n[…]\nAlém de adicionar imagens ao Fotodex, o jogador também ajuda a pesquisar o fenômeno Lumini, que faz com que Pokémon e plantas adquiram um brilho especial.\n[…]\nCada foto que toma o jogador é avaliado pelo Professor Mirror em uma escala de uma a quatro estrelas, levando em consideração aspectos como a composição da cena, a proximidade do Pokémon e se ele está na frente da câmera ou não. Os jogadores podem escolher salvar essas fotos no Fotodex, que pode conter até quatro imagens de cada Pokémon (uma em cada classificação).\n[…]\nNew Pokémon Snap foi desenvolvido por Bandai Namco Studios e é publicado por The Pokémon Company e Nintendo. A Bandai Namco já havia desenvolvido o jogo de luta Pokémon Pokkén Tournament, no qual os Pokémon eram representados como parte de um mundo interconectado, coexistindo com humanos. De acordo com o diretor do jogo Haruki Suzaki, que dirigiu os dois títulos, foi essa representação de Pokémon que ajudou o estúdio a ganhar a oportunidade de trabalhar em New Pokémon Snap.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Grovyle (Mystery Dungeon)",
      "descricao": "Personagem de Pokémon Mystery Dungeon: Explorers of Time e Explorers of Darkness, procurado por roubar as Time Gears."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Mystery Dungeon: Explorers of Time, um Grovyle procurado como ladrão rouba as Time Gears, que controlam o tempo. De onde ele veio?",
    "resposta": "Do futuro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Time_and_Explorers_of_Darkness",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Time_and_Explorers_of_Darkness"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Time_and_Explorers_of_Darkness",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon: Explorers of Time and Pokémon Mystery Dungeon: Explorers of Darkness are a matched pair of Pokémon games developed by Chunsoft and published by The Pokémon Company and Nintendo for the Nintendo DS. The two games were released in Japan in September 2007, and in North America and Europe in 2008. A third version, Pokémon Mystery Dungeon: Explorers of Sky, was released for the\n[…]\nAfterwards, the guild enlists the aid of a famous explorer named Dusknoir, who explains that the player's ability to see through time is called the Dimensional Scream. Dusknoir reveals that he and Grovyle are from the future and that if the Time Gears are stolen, the Pokémon world will become paralyzed and turn into a dark, dismal region filled with scared and corrupted Pokémon.\n[…]\nTwo months after the announcement, Chunsoft confirmed the sequel to the series with an official title and the games being two versions like the Rescue Team games; Pokémon Mystery Dungeon: Explorers of Time and Pokémon Mystery Dungeon: Explorers of Darkness respectively.\n[…]\nBoth Mystery Dungeon: Explorers of Time and Explorers of Darkness have received a rating of 7.5 from Nintendo Power. Gamezone gave the games a rating of 7.8/10, praising their graphics, gameplay, and soundtrack.\n[…]\nDuring the 12th Annual Interactive Achievement Awards, the Academy of Interactive Arts & Sciences nominated Pokémon Mystery Dungeon: Explorers of Time for \"Role-Playing Game of the Year\", which ultimately went to Fallout 3.\n[…]\nA special episode of the Pokémon anime, Pokémon Mystery Dungeon: Explorers of Time & Darkness, was developed based on the game plot. Unlike previous special episodes, this does not take place in any continuity of the main storyline. It was first broadcast in Japan on September 9, 2007, as part of Pokémon Sunday.\n[…]\nPokémon Mystery Dungeon: Explorers of Time and Explorers of Darkness at Bulbapedia"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Time_and_Explorers_of_Darkness",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon%3A_Explorers_of_Time_e_Explorers_of_Darkness",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon 2 (ポケモン不思議のダンジョン2  時の探検隊・闇の探検隊, Pokemon Fushigi no Danjon Tsū Toki no Tankentai, Yami no Tankentai) é um jogo da série Pokémon para Nintendo DS, sendo lançado em duas versões: Pokémon Mystery Dungeon: Explorers of Time e Pokémon Mystery Dungeon: Explorers of Darkness. Situado na mesma Região do antecessor Pokémon Mystery Dungeon, tem suporte para a Nintendo Wi-Fi Connection\n[…]\nAo mesmo tempo que isso ocorre, mistérios surgem, como o porquê de o humano ter sido transformado em Pokémon e qual o segredo que ronda a pedra mística, o símbolo do jogo, que seu parceiro carrega. Chefiados por Wigglytuff e seu guarda-costas e braço-direito, Chatot, o protagonista conta com a ajuda dos empregados da Guild para capturar Grovyle, o maior criminoso de todos, e descobrir porque ele está roubando as engrenagens do tempo (Time Gears, em inglês).\n[…]\nOs Pokémon iniciais desta vez são:\n[…]\nDiferentemente de Pokémon Mystery Dungeon, o objetivo das missões neste jogo é procurar tesouros escondidos em calabouços e procurar criminosos dentro deles. Isso gera uma recompensa em dinheiro que vai, em parte, para a Guild, o que ajuda a mantê-la funcionando. Também não há Friend Areas neste jogo, os locais onde Pokémon recrutados para o time aguardavam uma participação em missões.\n[…]\nPokémon Mystery Dungeon 2 tem suporte para a Nintendo Wi-Fi Connection, onde é possível resgatar um time à longa distância que falhou em uma missão e precisa de ajuda. Provavelmente o resgate não é feito mais por códigos devido à falha no primeiro jogo de burlação de códigos e criação de resgates falsos que eram recompensados por itens raros em missões fáceis.\n[…]\nAssim como nas versões anteriores de Pokémon Mystery Dungeon, existem pequenas diferenças entre uma versão e outra, assim como Pokémon exclusivos que só são encontrados dentro dela:\n[…]\nVersão Explorers of Darkness:\n[…]\nVersão Explorers of Time:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Primal Dialga",
      "descricao": "Forma enlouquecida de Dialga que é o grande antagonista de Pokémon Mystery Dungeon: Explorers of Time e Explorers of Darkness."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Explorers of Time e Explorers of Darkness, que lendário, enlouquecido no futuro em que o tempo parou, é o grande inimigo dos heróis?",
    "resposta": "Primal Dialga",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Time_and_Explorers_of_Darkness",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Time_and_Explorers_of_Darkness"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Time_and_Explorers_of_Darkness",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon: Explorers of Time and Pokémon Mystery Dungeon: Explorers of Darkness are a matched pair of Pokémon games developed by Chunsoft and published by The Pokémon Company and Nintendo for the Nintendo DS. The two games were released in Japan in September 2007, and in North America and Europe in 2008. A third version, Pokémon Mystery Dungeon: Explorers of Sky, was released for the\n[…]\nThe player and partner awaken in a prison in the future. After escaping a near execution with Grovyle by Dusknoir, they discover the world is still paralyzed. They learn from Grovyle that the paralysis was caused because of the collapse of Temporal Tower, which also corrupted its head occupant, Dialga, into a tyrannical being known as Primal Dialga.\n[…]\nHe reveals to the player that if they succeed in changing the future, they and Grovyle will be erased from existence. Grovyle sacrifices himself to drag Dusknoir back to the future, and the player presses onward. They and the partner make their way to the top of Temporal Tower, defeat Primal Dialga and restore it to sanity, and replace the Time Gears and stop the planet's paralysis. On the way back, the player says a final goodbye to the partner before vanishing.\n[…]\nAfter the credits, Dialga is deeply moved by the partner's grief over the player's death, and restores the player to the timeline as thanks for bringing time back under control. The player reappears at the beach and reunites with the overjoyed partner.\n[…]\nA special episode of the Pokémon anime, Pokémon Mystery Dungeon: Explorers of Time & Darkness, was developed based on the game plot. Unlike previous special episodes, this does not take place in any continuity of the main storyline. It was first broadcast in Japan on September 9, 2007, as part of Pokémon Sunday.\n[…]\nPokémon Mystery Dungeon: Explorers of Time and Explorers of Darkness at Bulbapedia"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Time_and_Explorers_of_Darkness",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon%3A_Explorers_of_Time_e_Explorers_of_Darkness",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon 2 (ポケモン不思議のダンジョン2  時の探検隊・闇の探検隊, Pokemon Fushigi no Danjon Tsū Toki no Tankentai, Yami no Tankentai) é um jogo da série Pokémon para Nintendo DS, sendo lançado em duas versões: Pokémon Mystery Dungeon: Explorers of Time e Pokémon Mystery Dungeon: Explorers of Darkness. Situado na mesma Região do antecessor Pokémon Mystery Dungeon, tem suporte para a Nintendo Wi-Fi Connection\n[…]\nAo mesmo tempo que isso ocorre, mistérios surgem, como o porquê de o humano ter sido transformado em Pokémon e qual o segredo que ronda a pedra mística, o símbolo do jogo, que seu parceiro carrega. Chefiados por Wigglytuff e seu guarda-costas e braço-direito, Chatot, o protagonista conta com a ajuda dos empregados da Guild para capturar Grovyle, o maior criminoso de todos, e descobrir porque ele está roubando as engrenagens do tempo (Time Gears, em inglês).\n[…]\nPokémon Mystery Dungeon 2 tem suporte para a Nintendo Wi-Fi Connection, onde é possível resgatar um time à longa distância que falhou em uma missão e precisa de ajuda. Provavelmente o resgate não é feito mais por códigos devido à falha no primeiro jogo de burlação de códigos e criação de resgates falsos que eram recompensados por itens raros em missões fáceis.\n[…]\nA função Wi-Fi das versões dos jogos (Explorers of Time/Explorers of Darkness), também serve para pode fazer downloads de Special Missions, que são disponibilizados pela Nintendo.\n[…]\nPachirisu, Combee (Vespiqueen são encontrados em Explorers of Darkness), Celebi, Riolu, Lucario, para Explorers of Time.\n[…]\nMewtwo, Burmy (Wormadam & Mothim são encontrados em Explorers of Time), Buneary, Lopunny e Rotom para Explorers of Darkness.\n[…]\nVersão Explorers of Darkness:\n[…]\nFoe-Seal Orb, transforma o status dos inimigos em Paused, alcance: todo a sala.\n[…]\nVersão Explorers of Time:\n[…]\nFoe-Petrify Orb, transforma o status dos inimigos em Petrified, alcance: todo o andar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Guilda de Wigglytuff",
      "descricao": "Guilda de exploradores comandada por Wigglytuff em Pokémon Mystery Dungeon: Explorers of Time e Explorers of Darkness."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na guilda de exploradores de Wigglytuff, em Explorers of Time, que papagaio mandão é o braço direito do mestre e dá ordens aos aprendizes?",
    "resposta": "Chatot",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Wigglytuff%27s_Guild",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Time_and_Explorers_of_Darkness"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Wigglytuff%27s_Guild",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Time_and_Explorers_of_Darkness",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon: Explorers of Time and Pokémon Mystery Dungeon: Explorers of Darkness are a matched pair of Pokémon games developed by Chunsoft and published by The Pokémon Company and Nintendo for the Nintendo DS. The two games were released in Japan in September 2007, and in North America and Europe in 2008. A third version, Pokémon Mystery Dungeon: Explorers of Sky, was released for the\n[…]\nRiolu was debated for a player Pokémon in Explorers of Time and Darkness, but the idea was eventually dropped, and Riolu was selected for the Explorers of Sky list.\n[…]\nThe player is washed ashore by a storm and is discovered by the partner, a timid Pokémon who dreams of forming an exploration team. After teaming up to recover the partner's Relic Fragment from some bullies, the player, who has lost all memories except their name and the fact that they used to be human, agrees to form an exploration team to piece together their identity. The two enlist at the Wigglytuff Guild and begin training as adventurers.\n[…]\nAfterwards, the guild enlists the aid of a famous explorer named Dusknoir, who explains that the player's ability to see through time is called the Dimensional Scream. Dusknoir reveals that he and Grovyle are from the future and that if the Time Gears are stolen, the Pokémon world will become paralyzed and turn into a dark, dismal region filled with scared and corrupted Pokémon.\n[…]\nAfter the main story, the player and partner graduate from Wigglytuff Guild and move their base of operations to Sharpedo Bluff, the partner's old home. In Luminous Spring, they learn that neither the partner nor the player can evolve due to a distortion in space. After many missions and explorations, it is revealed that Darkrai was responsible for the events in the main story.\n[…]\nPokémon Mystery Dungeon: Explorers of Time and Explorers of Darkness at Bulbapedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon%3A_Explorers_of_Time_e_Explorers_of_Darkness",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon 2 (ポケモン不思議のダンジョン2  時の探検隊・闇の探検隊, Pokemon Fushigi no Danjon Tsū Toki no Tankentai, Yami no Tankentai) é um jogo da série Pokémon para Nintendo DS, sendo lançado em duas versões: Pokémon Mystery Dungeon: Explorers of Time e Pokémon Mystery Dungeon: Explorers of Darkness. Situado na mesma Região do antecessor Pokémon Mystery Dungeon, tem suporte para a Nintendo Wi-Fi Connection\n[…]\nAo mesmo tempo que isso ocorre, mistérios surgem, como o porquê de o humano ter sido transformado em Pokémon e qual o segredo que ronda a pedra mística, o símbolo do jogo, que seu parceiro carrega. Chefiados por Wigglytuff e seu guarda-costas e braço-direito, Chatot, o protagonista conta com a ajuda dos empregados da Guild para capturar Grovyle, o maior criminoso de todos, e descobrir porque ele está roubando as engrenagens do tempo (Time Gears, em inglês).\n[…]\nDiferentemente de Pokémon Mystery Dungeon, o objetivo das missões neste jogo é procurar tesouros escondidos em calabouços e procurar criminosos dentro deles. Isso gera uma recompensa em dinheiro que vai, em parte, para a Guild, o que ajuda a mantê-la funcionando. Também não há Friend Areas neste jogo, os locais onde Pokémon recrutados para o time aguardavam uma participação em missões.\n[…]\nA função Wi-Fi das versões dos jogos (Explorers of Time/Explorers of Darkness), também serve para pode fazer downloads de Special Missions, que são disponibilizados pela Nintendo.\n[…]\nPachirisu, Combee (Vespiqueen são encontrados em Explorers of Darkness), Celebi, Riolu, Lucario, para Explorers of Time.\n[…]\nMewtwo, Burmy (Wormadam & Mothim são encontrados em Explorers of Time), Buneary, Lopunny e Rotom para Explorers of Darkness.\n[…]\nVersão Explorers of Darkness:\n[…]\nVersão Explorers of Time:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Pokémon Mystery Dungeon: Red Rescue Team e Blue Rescue Team",
      "descricao": "Par de jogos que inaugurou a série Pokémon Mystery Dungeon, lançado em 2005 no Japão, em que o herói integra uma equipe de resgate."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em Red e Blue Rescue Team, conta a lenda que um humano agarrou a cauda de Ninetales. Que pokémon parceiro dele recebeu a maldição no seu lugar?",
    "resposta": "Gardevoir",
    "distratores": [
      "Gengar",
      "Alakazam",
      "Xatu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Red_Rescue_Team_and_Blue_Rescue_Team",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Red_Rescue_Team_and_Blue_Rescue_Team"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Red_Rescue_Team_and_Blue_Rescue_Team",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon: Blue Rescue Team and Pokémon Mystery Dungeon: Red Rescue Team are a matched pair of Pokémon video games for the Nintendo DS and Game Boy Advance, respectively. The games were developed by Chunsoft and published by The Pokémon Company and Nintendo. Red Rescue Team was the last Pokémon game released for the Game Boy Advance.\n[…]\nSimilar to the other Mystery Dungeon titles, the roguelike gameplay revolves around randomly changing dungeons which need to be explored by the player and their partner Pokémon using turn-based moves. The story focuses on the player who has been turned into a Pokémon and has developed amnesia who later joins a rescue team with a partner Pokémon while finding out who they are. As of July 25, 2007, Pokémon Mystery Dungeon: Blue Rescue Team had sold 3.08 million copies worldwide.\n[…]\nAfter starting small, the team soon begins to accomplish rescue missions in earnest. They meet other teams, including a top team led by Alakazam, and another one led by Gengar, with which a rivalry quickly forms. The team also learns of a legend about a human cursed for 1000 years by Ninetales for grabbing one of its tails, and how they let their Gardevoir be cursed instead. Ninetales then prophesied the human would be reborn as a Pokémon, upsetting the natural balance of the world.\n[…]\nBy the end of 2006, Pokémon Mystery Dungeon: Blue Rescue Team had sold over 761,000 copies in Japan, while Red Rescue Team had sold just over 715,000 copies. As of July 25, 2007, Blue Rescue Team has sold 3.08 million copies worldwide while Red Rescue Team sold 2.20 million copies by March 31. The game's success not only helped giving more popularity in the Mystery Dungeon franchise, it also helped Chunsoft from avoiding bankruptcy.\n[…]\nPokémon Mystery Dungeon: Ginji's Rescue Team (the manga serial based on the games)"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Red_Rescue_Team_and_Blue_Rescue_Team",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon%3A_Blue_Rescue_Team_e_Red_Rescue_Team",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon (ポケモン不思議のダンジョン 赤の救助隊・青の救助隊, Pokemon Fushigi no Danjon Aka no Kyūjotai, Ao no Kyūjotai) é um jogo da série Pokémon que foi feito com base nos jogos de Mystery Dungeons, muito populares no Japão. Existem duas versões para esse jogo: Pokémon Mystery Dungeon: Blue Rescue Team, para Nintendo DS e Pokémon Mystery Dungeon: Red Rescue Team, para Game Boy Advance. Pela primeira vez,\n[…]\nAssim, Mudkip e Charmander vão ao Great Canyon para conversar com o xamã Xatu e descobrir o propósito de Mudkip no Mundo Pokémon e porque esses desastres estão acontecendo. Lá, eles descobrem um pouco sobre a lenda de um humano que virou Pokémon e ficou amaldiçoado porque traiu seu companheiro, o \"lendário\" Gardevoir. Charmander afirma que Mudkip não pode ter sido tão mal no passado e seria a causa dos desastres.\n[…]\nFreeze, onde se acredita estar Ninetales. Começa uma batalha entre o Mudkip e o Team ACT (Alakazam, Charizard e Tyranitar). Ninetales para a briga e pede para que aceitem Mudkip, que não é uma aberração.Ao final, o Pokémon que tudo sabe explica que Mudkip foi transformado em Pokémon para completar um ciclo no Planeta e que ele não é o humano da Lenda de Gardevoir.\n[…]\nA primeira foi um episódio especial do anime chama \"Pokémon Mystery Dungeon: Team Go-Getters Out of the Gate!\", um especial contando a história de um humano transformado em Squirtle e acabou se unindo a Charmander e Chikorita no Team Go-Getters. O episódio, por incrível que pareça, foi exibido primeiro nos EUA em 2006 e só em Abril de 2007 chegou ao Japão.\n[…]\nA outra foi uma série de quadrinhos publicados na revista americana Nintendo Power que recentemente foram lançados em uma coleção chamada \"Pokémon Mystery Dungeon: Ginji's Rescue Team\", onde um garoto chamado Ginji é transformado em um Torchic e fica amigo de Mudkip. Assim, os dois se aventuram pela Região Pokémon, fazem amigos e enfrentam inimigos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Pokémon Mystery Dungeon: Rescue Team DX",
      "descricao": "Remake para Nintendo Switch dos primeiros jogos Pokémon Mystery Dungeon, Red e Blue Rescue Team."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Rescue Team DX, o remake dos primeiros Pokémon Mystery Dungeon para o Nintendo Switch, foi lançado em que ano?",
    "resposta": "2020",
    "distratores": [
      "2018",
      "2019",
      "2021"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Rescue_Team_DX"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Rescue_Team_DX",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon: Rescue Team DX is a 2020 roguelike video game developed by Spike Chunsoft and published by Nintendo and The Pokémon Company for the Nintendo Switch. It is part of the Pokémon Mystery Dungeon video game series. It is a remake of the 2005 video games Pokémon Mystery Dungeon: Blue Rescue Team and Red Rescue Team. Announced in January 2020, it was released worldwide on March 6\n[…]\nUnlike the original games, being defeated in a dungeon will only make the player control the next Pokémon in their team, until all three main Pokémon are defeated. The player is able to encounter shiny Pokémon during the game, which only appear as \"strong foes\".\n[…]\nThe plot is similar to that of the original Rescue Team, with only minor changes in details and dialogues.\n[…]\nThe game was announced in a Pokémon Direct on January 9, 2020, and was released worldwide for the Nintendo Switch on March 6, 2020. A free demo was made available on the Nintendo eShop on January 9, 2020; progress in the demo can be transferred to the full game.\n[…]\nPokémon Mystery Dungeon: Rescue Team DX was the bestselling game in Japan during its first week of release, with 138,548 physical copies being sold. It placed first in the United Kingdom and France sales charts during the first week. Over 360,000 copies had been sold in Japan and over 890,000 copies overseas, for a total of over 1.26 million copies sold by the end of March 2020. It is ranked among the list of best-selling Nintendo Switch video games.\n[…]\nThe game was ranked twenty-first in Japan's top 30 best-selling games of 2020 on the Nintendo eShop. As of December 31, 2022, the game has accumulated a grand total of 1.99 million copies according to Computer Entertainment Supplier's Association's White Papers, surpassing Pokémon Mystery Dungeon: Gates to Infinity's lifetime sales."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon%3A_Rescue_Team_DX",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon: Rescue Team DX (ポ ケ モ ン不 思議ふ し ぎの ダ ン ジ ョ ン 救助 隊き ゅ う じ ょ た いDX, Pocket Monsters Fushigi no Danjon Kyūjotai DX) é um remake de 2020 dos jogos eletrônicos de Pokémon Mystery Dungeon: Blue Rescue Team e Red Rescue Team. Faz parte da série Pokémon Mystery Dungeon desenvolvida por Spike Chunsoft, publicada pela The Pokémon Company e distribuída pela Nintendo para o Nintendo Sw\n[…]\nO jogo é o primeiro remake de um jogo de Pokémon fora da série principal. O jogo apresenta um novo estilo de arte pictórica e inclui novos recursos não vistos nos originais, como Mega Evolução, autosave e modo automático. Em 31 de março de 2020, o jogo vendeu 1,26 milhão de cópias.\n[…]\nO jogador começa como um humano que se transformou em um Pokémon, que pode ser um dos dezesseis Pokémon das três primeiras gerações da série. (Bulbasaur, Charmander, Squirtle, Pikachu, Meowth, Psyduck, Machop, Cubone, Eevee, Chikorita, Cyndaquil, Totodile, Treecko, Torchic, Mudkip, Skitty. O Pokémon que o jogador começa como é determinado por um teste de personalidade tomada no início do jogo. O jogador escolhe um Pokémon parceiro da mesma lista, excluindo Pokémon do mesmo tipo do jogador.\n[…]\nAo contrário dos jogos originais, ser derrotado em uma masmorra apenas fará com que o jogador controle o próximo Pokémon de sua equipe, até que todos os três Pokémon principais sejam derrotados. Os jogadores poderão encontrar Pokémon brilhantes em muitas partes do jogo.\n[…]\nO jogo foi anunciado em um Pokémon Direct em 9 de janeiro de 2020 e lançado mundialmente para o Nintendo Switch em 6 de março de 2020. Uma demo gratuita foi disponibilizada no Nintendo eShop em 9 de janeiro de 2020; o progresso na demonstração pode ser transferido para o jogo completo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Capture Styler",
      "descricao": "Aparelho usado pelos guardas da série Pokémon Ranger para riscar círculos em volta dos pokémon selvagens e acalmá-los."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Ranger, como se chama o aparelho com que o guarda risca círculos em volta dos pokémon selvagens para acalmá-los?",
    "resposta": "Capture Styler",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Capture_Styler",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Capture_Styler",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger",
        "situacao": "ok",
        "texto": "Pokémon Ranger (ポケモンレンジャー, Pokemon Renjā) is an action role-playing video game developed by HAL Laboratory and Creatures Inc. and published by The Pokémon Company and Nintendo for the Nintendo DS video game console. The game was released in Japan, North America, and Australia in 2006 before releasing in Europe in 2007.\n[…]\nIn Pokémon Ranger, rather than the traditional turn-based fighting mechanic and use of Pokéballs, the player's character can capture Pokémon by using a Capture Styler, controlled by the stylus of the Nintendo DS. To capture a Pokémon, the player must draw consecutive circles around the wild Pokémon on the Nintendo DS touchscreen. To fight back, opposing Pokémon may attempt to flee or attack the Capture Styler. When a Pokémon is captured, it temporarily joins the player's party.\n[…]\nAfter returning the Ranger Leader of Summerland's Pokémon, the player heads back to Fall City. There, they work on clearing the Krokka Tunnel and run into the Go-Rock Quads again. The player must fight a head member of the Go-Rock Squad and capture the Pokémon they use. They succeed, resulting in them moving up yet another rank.\n[…]\nAfter capturing the legendary Pokémon, the player returns to the ranger base. There, they pair up with a Pokémon Professor to go to a factory together. Upon arrival, the pair run into the Go-Rock Squad and must rescue multiple Pokémon that they are using for labor.\n[…]\nThere have been multiple merchandise releases for Pokémon Ranger. This includes a toy Capture Styler, a watch inspired by the Capture Styler, handbooks, pins, and other miscellaneous items.\n[…]\nThis sequel follows the same mission-based plot, this time, allowing players to download new missions via Nintendo Wifi Connection. This game features 270 new Pokémon that were not seen in Pokémon Ranger."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ranger",
        "situacao": "ok",
        "texto": "Pokémon Ranger (ポケモンレンジャー, Pokemon Renjā) é um jogo da série Pokémon com um novo conceito: comandar temporariamente os monstrinhos. Você usa um \"apetrecho\" para poder controlá-los e liberá-los depois. É compatível com Pokémon Diamond & Pearl, principalmente para poder obter o lendário ovo do Pokémon Manaphy e transferir para o RPG Clássico.\n[…]\nPokémon Ranger utiliza de um novo conceito para pegar Pokémon: obtê-los, usá-los e soltá-los. Para isso, utiliza-se o Capture Styler, um aparelho que possibilita que um Pokémon com o Capture Disc e obter o controle dos mesmos. Cercando-o com o Stylus vária vezes faz com que ele seja derrotado e seja dominado por um tempo. De acordo com o tipo do Pokémon, o jogador pode usar o Poké Assist, que varia de Pokémon para Pokémon, tanto em uma batalha quanto no campo.\n[…]\nAo começar o jogo, o jogador pode escolher se o protagonista é um garoto ou garota. Lunick (カズキ, Kazuki) tem como parceiro um Minun e Solana (ヒナタ, Hinata) um Plusle. Ambos têm que impedir que o Team Go-rock squad domine Fiore capturando e usando Pokémon para derrotá-los e se unindo aos membros da Ranger Union, uma legião de Pokémon Rangers que estão espalhados por Fiore. Cada cidade tem um Ranger \"Chefe\": Spenser - Ringtown, Joel - Fall City, Cameron - Summerland e Elita - Wintown\n[…]\nGameSpot deu uma análise semelhante ao IGN, dando ao jogo uma média de 7,5 em 10. GameSpot comentou que o \"sistema de captura único\" do jogo, \"quest de bom tamanho\" e \"atrativos gráficos 2D e animação\" foram os pontos positivos do jogo enquanto comentava questões como possíveis arranhões na tela de toque durante a captura e \"seqüências básicas de exploração\" \"foram os jogos notáveis pontos negativos.\n[…]\nEm 31 de março de 2008,  Pokémon Ranger  vendeu 2,70 milhões de cópias em todo o mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Pokémon Ranger",
      "descricao": "Jogo derivado da franquia Pokémon, lançado em 2006 para Nintendo DS, em que o jogador é um guarda florestal que acalma pokémon selvagens."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No primeiro Pokémon Ranger, o parceiro do herói é um Minun ou uma Plusle. O que decide qual dos dois o acompanha?",
    "resposta": "O gênero do protagonista",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Ranger",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Ranger",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger",
        "situacao": "ok",
        "texto": "Pokémon Ranger (ポケモンレンジャー, Pokemon Renjā) is an action role-playing video game developed by HAL Laboratory and Creatures Inc. and published by The Pokémon Company and Nintendo for the Nintendo DS video game console. The game was released in Japan, North America, and Australia in 2006 before releasing in Europe in 2007.\n[…]\nDepending on the player's gender, they play as either Lunick (male) or Solana (female). If the player chooses to play as Lunick, their partner Pokémon will be Minun. If they play as Solana, their partner Pokémon will be Plusle. The names of the protagonist can be changed by the player. Whichever one the player does not play as will be an NPC that works alongside them.\n[…]\nA few episodes of the Pokémon animated series have included Pokémon Rangers. They go on special missions to help preserve Pokémon and human relations, wild Pokémon's wellbeing, and the environment. Solana, the female protagonist, has appeared in three episodes of the Pokémon animated series, in one of which she must stop a disturbed legendary Pokémon, Deoxys.\n[…]\nAs of January, 2025, Pokémon Ranger has sold over 2,930,000 copies worldwide.\n[…]\nThis sequel follows the same mission-based plot, this time, allowing players to download new missions via Nintendo Wifi Connection. This game features 270 new Pokémon that were not seen in Pokémon Ranger.\n[…]\nPokémon Ranger: Guardian Signs is an action role-playing video game developed by Creatures Inc., published by The Pokémon Company, and distributed by Nintendo for the Nintendo DS. It is the third and final installment of the Pokémon Ranger series and was released worldwide in 2010. The protagonist explores a new region, Oblivia, as they continue the mission-based plot from the previous games."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ranger",
        "situacao": "ok",
        "texto": "Pokémon Ranger (ポケモンレンジャー, Pokemon Renjā) é um jogo da série Pokémon com um novo conceito: comandar temporariamente os monstrinhos. Você usa um \"apetrecho\" para poder controlá-los e liberá-los depois. É compatível com Pokémon Diamond & Pearl, principalmente para poder obter o lendário ovo do Pokémon Manaphy e transferir para o RPG Clássico.\n[…]\nAo começar o jogo, o jogador pode escolher se o protagonista é um garoto ou garota. Lunick (カズキ, Kazuki) tem como parceiro um Minun e Solana (ヒナタ, Hinata) um Plusle. Ambos têm que impedir que o Team Go-rock squad domine Fiore capturando e usando Pokémon para derrotá-los e se unindo aos membros da Ranger Union, uma legião de Pokémon Rangers que estão espalhados por Fiore. Cada cidade tem um Ranger \"Chefe\": Spenser - Ringtown, Joel - Fall City, Cameron - Summerland e Elita - Wintown\n[…]\nUma missão especial no jogo envolve salvar um ovo, que é o ovo do lendário Manaphy, do que sobrou foi pego pelo Team Go-Rock Squad. Uma vez terminada a missão, ovo não pode chocar em Fiore, tendo que ser transferido para Sinnoh, ou seja, Pokémon Diamond & Pearl. O jogador deve ter dois Nintendo DS, um contendo Pokémon Ranger, o outro contendo Pokémon Diamond ou Pokémon Pearl. Quando o ovo for transferido, ele poderá chocar e Manaphy sairá de lá no Lv. 1.\n[…]\nEnquanto discutia a qualidade mista de spin-offs de  Pokémon , o Jeremy Parish citou  Pokémon Ranger  como um exemplo, com Parish mais tarde referindo-se a ele como \"péssima\". Ele cita o diálogo e a história, comentando que enquanto  Pokémon  era um jogo infantil, a escrita em  Ranger  é pior do que nos jogos principais. O colaborador de Retronauts Justin Haywald criticou o HAL Laboratory, que ele diz ser normalmente um bom desenvolvedor, para fazer Ranger.\n[…]\nEm 31 de março de 2008,  Pokémon Ranger  vendeu 2,70 milhões de cópias em todo o mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Pokémon Ranger: Shadows of Almia",
      "descricao": "Segundo jogo da série Pokémon Ranger, para Nintendo DS, ambientado na região de Almia."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon Ranger: Shadows of Almia, a primeira continuação do jogo dos guardas pokémon, saiu no Japão em que ano?",
    "resposta": "2008",
    "distratores": [
      "2006",
      "2007",
      "2010"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger:_Shadows_of_Almia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger:_Shadows_of_Almia",
        "situacao": "ok",
        "texto": "Pokémon Ranger: Shadows of Almia (ポケモンレンジャー バトナージ, Pokemon Renjā Batonāji; lit. \"Pokémon Ranger: Vatonage\") is an action role-playing video game developed by Creatures Inc. and published by The Pokémon Company and Nintendo for the Nintendo DS video game console.\n[…]\nIt was announced in the January 2008 issue of CoroCoro and was released in Japan on March 20, 2008. It was announced at E3 2008 that the game would be released in the United States under the title Shadows of Almia on November 10, 2008. It was announced on September 25 that the game would be released in Europe under the title Shadows of Almia on November 21, 2008.\n[…]\nGameSpot gave the title a 7.5 out of 10 rating, stating that \"Pokémon Ranger: Shadows of Almia improves upon its predecessor just enough to make it a fun, solid addition to the spin-off series.\" Eurogamer gave Pokémon Ranger: Shadows of Almia a 6 out of 10 rating, stating that \"With a long wait until the next proper Pokémon game, many fans may feel that's enough, but they shouldn't expect anything more than a mild distraction.\" 1UP gave the title a C+ rating, stating that \"While it's nowhere near as addictive as the regular color-coded Pokémon games, Almia's still a decent diversion—I just wish the story offered something a little deeper.\" IGN gave the title a rating of 6.7 out of 10, stating that \"Unless you're addicted to scribbling circles like that creepy boy from The Ring, or you're some sort of hippie that only likes playing humane non-battling Pokémon games, you could probably pass on this and be just fine.\"  As of July 9, 2008, the game has sold 576,467 copies in Japan, according to Famitsu.\n[…]\nPokémon Ranger\n[…]\nPokémon Ranger: Guardian Signs\n[…]\nhttps://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Ranger:_Shadows_of_Almia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ranger%3A_Shadows_of_Almia",
        "situacao": "ok",
        "texto": "Pokémon Ranger: Shadows of Almia (ポケモンレンジャー バトナージ, Pokemon Renjā: Batonāji) é um jogo da série Pokémon para Nintendo DS, lançado no Japão em Março de 2008. É a sequência do jogo anterior, Pokémon Ranger. Passa-se em Almia (Arumia), uma nova Região distante das Regiões principais, Kanto, Johto, Hoenn e Sinnoh.\n[…]\nDiferentemente do primeiro jogo, ao invés de ter um Plusle ou um Minun como parceiro, é possível escolher entre 17 Pokémon, um para cada tipo. Apresenta 270 dos 493 Pokémon.\n[…]\nPodendo escolher entre um menino e uma menina, o jogador começa graduando-se na Escola Ranger de Almia. A partir dali, o protagonista deve investigar um mistério que ocorre na Região. As principais missões são: proteger um ovo de Manaphy; resgatar um Riolu; capturar um Darkrai que está causando problemas (depois dessas três primeiras missões os Pokémon poderão ser transferidos para Pokémon Diamond ou Pearl); capturar Dialga e Palkia; e a missão mais recente: capturar Shaymin.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Pichu de ukulele",
      "descricao": "Pichu especial que toca ukulele, obtido no jogo Pokémon Ranger: Guardian Signs e transferível para os jogos principais."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Ranger: Guardian Signs, o herói pode ganhar um Pichu especial que carrega um instrumento havaiano. Para quais jogos principais esse Pichu podia ser enviado?",
    "resposta": "HeartGold e SoulSilver",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ukulele_Pichu",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger:_Guardian_Signs"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ukulele_Pichu",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger:_Guardian_Signs",
        "situacao": "ok",
        "texto": "Pokémon Ranger: Guardian Signs (ポケモンレンジャー 光の軌跡, Pokemon Renjā Hikari no Kiseki; lit. \"Pokémon Ranger: Tracks of Light\") is an action role-playing video game developed by Creatures Inc. and published by The Pokémon Company in Japan and by Nintendo worldwide for the Nintendo DS. It is the sequel to Pokémon Ranger and Pokémon Ranger: Shadows of Almia, and the third installment in the Pokémon Ranger s\n[…]\nThe player can use \"Guardian Signs\" (referred to in the game as \"Ranger Signs\" or \"Emblems\") by drawing certain symbols to summon Legendary Pokémon such as Entei, Raikou, and Suicune for use outside of battle. Other features include four player cooperative play with unique missions. The game also includes Wi-Fi mission downloads, one of which gives you access to Deoxys, which can be moved to other DS Pokémon games.\n[…]\nThe player shields their partner from the attack and falls into the sea below, losing and later recovering their styler, while their partner is kidnapped. The player subsequently washes ashore on Dolce Island. The player meets a Pichu carrying a ukulele, known as Ukulele Pichu. After repairing its broken instrument, Ukulele Pichu becomes the player's partner Pokémon. As a newly recruited Pokémon Ranger, the player undertakes various missions and encounters allies, rivals, and numerous Pokémon.\n[…]\nPokémon Ranger: Guardian Signs was developed by Creatures Inc. for the Nintendo DS. It was first revealed on January 13, 2010, by Japan's CoroCoro Comic, which had first details about the games. On January 15, Nintendo Japan made an official announcement for the game, and provided screenshots and artwork. It was released in Japan on March 6, 2010; North America on October 4, 2010; and Europe on November 5, 2010."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ranger%3A_Guardian_Signs",
        "situacao": "ok",
        "texto": "Pokémon Ranger: Guardian Signs (ポケモンレンジャー 光の軌跡, Pocket Monsters Renjā Hikari no Kiseki; \"Pokémon Ranger: Tracks of Light\") é um jogo eletrônico de RPG de ação desenvolvida por Creatures Inc., publicador por The Pokémon Company e distribuída por Nintendo para Nintendo DS. Este é a sequela de Pokémon Ranger e Pokémon Ranger: Shadows of Almia e é a terceira parcela de sua série.\n[…]\nO jogador pode usar \"Sinais de Guardião\" (também chamados de \"Sinais de Ranger\" ou \"Emblemas\" desenhando certos símbolos, para invocar Pokémon Lendários como Entei, Raikou e Suicune e usá-los fora da batalha. Outros recursos incluem jogo cooperativo para quatro jogadores com missões únicas. O jogo também inclui downloads de missão Wi-Fi, um dos quais dá acesso ao Deoxys, que pode ser movido para outros jogos Pokémon do DS.\n[…]\nO jogador avança e protege seu parceiro do golpe, e é enviado ao mar abaixo, onde o jogador perde e eventualmente recupera seu estilizador. (O parceiro do jogador é então sequestrado.) O jogador lava em uma praia–nas margens da Ilha Dolce. O jogador encontra um Pichu com um ukulele, que é conhecido em todo o jogo como o Ukulele Pichu. Este Pichu se torna o Pokémon parceiro deste jogo. Ele se juntará ao jogador como seu parceiro Pokémon, depois que ele consertar seu ukulele quebrado.\n[…]\nPokémon Ranger: Guardian Signs foi desenvolvido pela Creatures Inc. para o Nintendo DS. Foi revelado pela primeira vez em 13 de janeiro de 2010 pelo CoroCoro Comic do Japão, que tinha os primeiros detalhes sobre os jogos. Em 15 de janeiro, a Nintendo Japão fez um anúncio oficial do jogo, e forneceu screenshots e arte. Foi lançado no Japão em 6 de março de 2010, na América do Norte em 4 de outubro de 2010 e na Europa em 5 de novembro de 2010.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Pokémon Unite",
      "descricao": "Jogo de batalhas em equipe da franquia Pokémon, lançado em 2021, desenvolvido pelo TiMi Studio Group."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Unite, os treinadores disputam partidas numa ilha cuja energia misteriosa é usada para marcar pontos. Como ela se chama?",
    "resposta": "Ilha Aeos (Aeos Island)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Unite",
      "https://bulbapedia.bulbagarden.net/wiki/Aeos_Island"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Unite",
        "situacao": "ok",
        "texto": "Pokémon Unite (stylized as Pokémon UNITE) is a 2021 free-to-play multiplayer online battle arena video game developed by TiMi Studio Group and published by The Pokémon Company worldwide and by Tencent Games in China for Android, iOS, and Nintendo Switch. It was announced in a Pokémon Presents presentation on 24 June 2020 as a partnership between The Pokémon Company and TiMi Studio Group owner Tenc\n[…]\nPokémon Unite received \"mixed or average\" reviews, according to review aggregator Metacritic. IGN gave the game a 6/10, criticizing some microtransactions as enabling pay-to-win gameplay. The game's microtransactions have also been criticized for their price, specifically, one of the customizable options for one of the Pokémon, Alolan Ninetales, costing US$40. This would also happen again with a Halloween-exclusive skin for the Pokémon Lucario, as well as a Christmas-themed skin for Pikachu.\n[…]\nIn response to discussions about the game on social media amongst fans, The Pokémon Company—through the official Pokémon Unite Twitter account—promoted a survey for feedback from fans to improve the game.\n[…]\nBy 16 September 2021, the game had been downloaded over 9 million times on the Switch, with over 7.5 million mobile pre-registrations prior to the 22 September mobile release. By 1 October, research company Sensor Tower reported that Unite has been downloaded 30 million times for mobile devices, while The Pokémon Company confirmed that the game has been downloaded over 25 million times on all platforms by 4 October.\n[…]\nPokémon Unite won awards for \"Best Game\" at Google Play's Best of 2021, and \"Mobile Game of the Year\" at the 25th Annual D.I.C.E. Awards. The game also received a nomination for \"Best Mobile Game\" during the 2021 Game Awards."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Aeos_Island",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Unite",
        "situacao": "ok",
        "texto": "Pokémon UNITE é um jogo eletrônico gratuito de batalha multijogador online (MOBA), desenvolvido pela TiMi Studios e publicado pela The Pokémon Company, anunciado na Pokémon Presents em 2020 e lançado em 2021.\n[…]\nPokémon UNITE é um jogo de arena de batalha multijogador online com partidas que consistem em duas equipes de cinco jogadores. O mapa do jogo é dividido em duas metades, com vários pontos de controle cada. Os jogadores marcam pontos para sua equipe derrotando Pokémon \"selvagens\" de IA (referido como captura no jogo) e movem-se em direção a um dos pontos de controle para marcar \"gols\". Cada partida é limitada no tempo e o time com a maior pontuação total no final de cada partida vence o jogo.\n[…]\nOs jogadores começam cada jogo controlando Pokémon não evoluídos de baixo nível, que podem aumentar seu nível e obter acesso a novos movimentos de combate à medida que vence as batalhas. A eficácia do tipo, uma característica comum em jogos Pokémon, está ausente do Pokémon UNITE. Por outro lado, o jogo inclui uma mecânica \"Unite move\" exclusiva para cada personagem Pokémon.\n[…]\nMais de 20 Pokémon jogáveis ​​foram oficialmente revelados ou encontrados nas versões de teste beta do jogo. Atualmente, o jogo possui mais de 50 Pokémon jogáveis.\n[…]\nA empresa japonesa The Pokémon Company anunciou o Unite em uma apresentação da Pokémon Presents em 24 de junho de 2020, que estava em desenvolvimento pela TiMi Studios.\n[…]\nO Unite foi lançado em 21 de julho de 2021 para o console Nintendo Switch e em 22 de setembro para os sistemas Android e iOS.\n[…]\n«Pokémon Unite». na NintendoStore\n[…]\nPokémon Unite no Google Play\n[…]\n«Pokémon Unite». na AppleStore",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Pokémon Sleep",
      "descricao": "Aplicativo da franquia Pokémon, lançado em 2023, que mede o sono do jogador e o transforma em jogo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Sleep, o jogador começa observando um Snorlax gigante numa ilha tranquila, a primeira da aventura. Que ilha é essa?",
    "resposta": "Greengrass Isle",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Greengrass_Isle",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sleep"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Greengrass_Isle",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sleep",
        "situacao": "ok",
        "texto": "Pokémon Sleep is a sleep-tracking video game that rewards the user with Pokémon depending on the quality of their sleep. The app was first released in Japan, Australia, Canada, New Zealand, and Latin American countries for Android and iOS on July 17, 2023.\n[…]\nPlayers are given a Snorlax by Professor Neroli to observe its sleeping patterns when they start playing for the first time. The player can give Snorlax berries and meals throughout the day. The more Snorlax is fed, the higher its power, and the more types of Pokémon it can attract. After reaching certain milestones with Snorlax's score, its rank will increase, allowing rarer visiting Pokémon after sleep.\n[…]\nWhen the player is finished reading their report, their Sleep Score is multiplied by Snorlax's score to give a final Drowsy Power. The higher Drowsy Power received, the more Pokémon the player will be visited by.\n[…]\nHowever, on 5 April 2021, a fan reported on Twitter that a SSL certificate had been registered for dev-eotxawxn.sleep.pokemon.co.jp.\n[…]\nA Pokémon Go APK data mine in January 2022 revealed several additions to the Pokémon Go app to integrate with Pokémon Sleep, including connecting to the Pokémon Go Plus + accessory, reviewing sleep patterns, and earning in-app rewards. These were confirmed by the Pokémon Day 2023 Pokémon Presents, in which they officially announced the Pokémon Go Plus + (Plus Plus) Accessory.\n[…]\nOn February 27, 2023, Pokémon Sleep was showcased during the Pokémon Presents and set for a release sometime in the summer of 2023. From July 6, 2023, Android users could pre-register the app. On July 17, 2023, Pokémon Sleep was rolled out in Australia, Canada, New Zealand, and Latin American countries."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sleep",
        "situacao": "ok",
        "texto": "Pokémon Sleep é um jogo móvel para Android e iOS que recompensa o usuário com Pokémon dependendo da qualidade de seu sono. O aplicativo foi primeiramente lançado na Austrália, Canadá, Nova Zelândia e na América Latina no dia 17 de julho de 2023.\n[…]\nPokémon Sleep é baseado em volta de rastrear o sono do jogador, e ganhar recompensas por ter dormido mais tempo. O jogo usa o microfone e o acelerômetro do seu dispositivo para rastrear o sono. Jogadores podem opcionalmente usar o Pokémon Go Plus+ para tocar sons que lembrem-nos da hora de dormir, também como para rastrear o sono sem precisar de um celular ligado.\n[…]\nJogadores são dados um Snorlax pelo Professor Neroli para observar seus padrões de sono quando começam a jogar pela primeira vez. O jogador consegue dar frutas e refeições a Snorlax durante o dia. Quanto mais você alimenta Snorlax, maior o seu poder, e mais tipos de Pokémon consegue atrair. Depois de chegar em certos marcos com a pontuação de Snorlax, seu ranque irá aumentar, permitindo Pokémon visitantes mais raros após o sono.\n[…]\nBaseado nesses fatores, o jogador é dado uma Pontuação de Sono.\n[…]\nQuando o jogador termina de ler sua análise, sua Pontuação de Sono é multiplicada pela pontuação de Snorlax para dar um Poder Sonolento final. Quanto mais Poder Sonolento recebido, por mais Pokémon o jogador será visitado.\n[…]\nPokémon são classificados nos mesmos três tipos diferentes de sono listados anteriormente. Baseado no tipo de sono que o jogador recebeu, ele conseguirá aquele tipo de Pokémon visitando-o. Pokémon têm múltiplos estilos de sono que são salvos na Sleep-Style Dex. Depois de salvar os estilos de sono dos Pokémon visitantes, o jogador pode alimentá-los com PokéBiscuits para ganhar amizade com eles.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Genetic Apex",
      "descricao": "Primeira coleção de cartas do Pokémon Trading Card Game Pocket, lançada em 2024 em três pacotes diferentes."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Genetic Apex, a primeira coleção do TCG Pocket, vinha em três pacotes com pokémon diferentes na capa: Charizard, Pikachu e qual outro?",
    "resposta": "Mewtwo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket",
      "https://bulbapedia.bulbagarden.net/wiki/Genetic_Apex_(TCG_Pocket)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game Pocket (often abbreviated as Pokémon TCG Pocket) is a free-to-play mobile adaptation of the Pokémon Trading Card Game (TCG), developed by Creatures Inc. and DeNA, and published by The Pokémon Company. The game was revealed on February 27, 2024 during a Pokémon Presents presentation,  had a soft-launch in New Zealand on September 26, 2024, and officially released on Octobe\n[…]\nPokémon Trading Game Pocket received \"generally favorable\" reviews according to review aggregator Metacritic. Chris Tapsell, writing for Eurogamer, spoke positively of the game, praising its reward system, friendliness to players who did not wish to spend money, and player versus player battling system.\n[…]\nAmong players, Pocket Gamer cited the game as being \"the closest thing to Pokémania since 2016’s Pokémon Go\", attributing the game's comparative success to other Pokémon mobile titles as being due to the game's nostalgia factor, as the original launch of cards predominantly used species found in the first Pokémon series games, as well as more recent and recognizable fan favorite Pokémon.\n[…]\nMacDonald also cited this sentiment, believing the game also had appeal due to being the first of the Trading Card Game's attempts to expand onto mobile phones to be received positively. Joshua Yehl, conversely, wrote for IGN that the differences between Pocket's gameplay and the main card game's had alienated some players, especially due to the recent release of Pokémon Trading Card Game Live, which directly adapted the game's gameplay for a mobile client but was met with negative reviews.\n[…]\nWhen the game released worldwide in October 2024, it grossed $2.7 million USD in its first day, and its first week was the second strongest for earnings in the Pokémon franchise's mobile game history. In the game's first seventeen days of release, it had earned over $100 million USD."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Genetic_Apex_(TCG_Pocket)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game Pocket (frequentemente abreviado como Pokémon TCG Pocket), conhecido no Brasil como Pokémon Estampas Ilustradas Pocket, é uma adaptação para dispositivos móveis gratuita do Pokémon Trading Card Game (TCG), desenvolvido pela Creatures Inc. e DeNA, e publicado pela The Pokémon Company.\n[…]\nPokémon TCG Pocket gira em torno da abertura de pacote de reforço digitais e da coleção de cartas dentro deles. Posteriormente, o jogador pode montar decks com as cartas para batalhar contra outros jogadores. Um pacote de reforço contém cinco cartas e pode ser aberto a cada 12 horas, podendo esse tempo ser reduzido em uma hora com as \"Pack Hourglasses\". Várias ampulhetas podem ser usadas para reduzir ainda mais o tempo de espera, mas uma vez aberto o pacote, o tempo volta a ser de 12 horas.\n[…]\nO jogo foi lançado com o conjunto Genetic Apex, dividido em três pacotes de expansão, e o conjunto Promo-A. Cada conjunto consiste em uma base de novas cartas exclusivas e um número menor de versões mais raras com arte alternativa das cartas base. A primeira expansão do jogo, Mythical Island, foi lançada em dezembro de 2024. Desde 2025, as expansões são lançadas aproximadamente mensalmente.\n[…]\nMacDonald também citou esse sentimento, acreditando que o jogo também tinha apelo por ser a primeira tentativa do Trading Card Game ​​de se expandir para celulares a ser recebida positivamente.\n[…]\nJoshua Yehl, por outro lado, escreveu para a IGN que as diferenças entre a jogabilidade de Pocket e a do jogo de cartas principal afastaram alguns jogadores, especialmente devido ao recente lançamento de Pokémon Trading Card Game Live, que adaptou diretamente a jogabilidade do jogo para um cliente móvel, mas recebeu críticas negativas.\n[…]\nA introdução de Pokémon Shiny ao jogo resultou em um aumento de gastos de 265%.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Pokémon Trading Card Game Pocket",
      "descricao": "Versão para celular do card game Pokémon, lançada em 2024, com abertura diária de pacotes e cartas digitais."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O TCG Pocket, versão para celular do card game Pokémon, com pacotes gratuitos todos os dias, foi lançado em que ano?",
    "resposta": "2024",
    "distratores": [
      "2022",
      "2023",
      "2025"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game Pocket (often abbreviated as Pokémon TCG Pocket) is a free-to-play mobile adaptation of the Pokémon Trading Card Game (TCG), developed by Creatures Inc. and DeNA, and published by The Pokémon Company. The game was revealed on February 27, 2024 during a Pokémon Presents presentation,  had a soft-launch in New Zealand on September 26, 2024, and officially released on Octobe\n[…]\nDuring development, developer DeNA renamed its subsidiary, DeNA Digital Productions, to Pokémon Card D Studio, with the name change taking effect in April 2024. This was done to refocus development on the production of the game.\n[…]\nPokémon Trading Card Game Pocket was revealed on February 27, 2024 during a Pokémon Presents. The game's announcements caused a significant increase in developer DeNA's share price. At the closing ceremonies of the Pokémon World Championships in Hawaii, a new trailer for the game was released, revealing its official release date of October 30, 2024. In August, the Pokémon Company announced over 6 million people had pre-registered for the game.\n[…]\nThe game partnered with American fast food chain McDonald's for a promotion in January 2025, with Happy Meals including physical Pokémon cards as well as digital in-game rewards.\n[…]\nThere was initially concern the game would not fare well financially due to the presence of a pre-existing Pokémon Trading Card Game mobile game in the form of Pokémon Trading Card Game Live. The game's initial soft launch in New Zealand in September 2024 was small, earning $15,000 USD in daily spending.\n[…]\nWhen the game released worldwide in October 2024, it grossed $2.7 million USD in its first day, and its first week was the second strongest for earnings in the Pokémon franchise's mobile game history. In the game's first seventeen days of release, it had earned over $100 million USD."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game Pocket (frequentemente abreviado como Pokémon TCG Pocket), conhecido no Brasil como Pokémon Estampas Ilustradas Pocket, é uma adaptação para dispositivos móveis gratuita do Pokémon Trading Card Game (TCG), desenvolvido pela Creatures Inc. e DeNA, e publicado pela The Pokémon Company.\n[…]\nPokémon Trading Card Game Pocket foi revelado em 27 de fevereiro de 2024 durante um evento Pokémon Presents. Os anúncios do jogo causaram um aumento significativo no preço das ações da desenvolvedora DeNA. Na cerimônia de encerramento do Campeonato Mundial Pokémon no Havaí, um novo trailer do jogo foi lançado, revelando sua data de lançamento oficial: 30 de outubro de 2024. Em agosto, a Pokémon Company anunciou que mais de 6 milhões de pessoas haviam se pré-registrado para o jogo.\n[…]\nJoshua Yehl, por outro lado, escreveu para a IGN que as diferenças entre a jogabilidade de Pocket e a do jogo de cartas principal afastaram alguns jogadores, especialmente devido ao recente lançamento de Pokémon Trading Card Game Live, que adaptou diretamente a jogabilidade do jogo para um cliente móvel, mas recebeu críticas negativas.\n[…]\nInicialmente, havia preocupação de que o jogo não tivesse um bom desempenho financeiro devido à presença de um jogo para celular pré-existente do Pokémon Trading Card Game, o Pokémon Trading Card Game Live. O lançamento inicial do jogo na Nova Zelândia, em setembro de 2024, foi pequeno, arrecadando US$ 15.000 em gastos diários.\n[…]\nQuando o jogo foi lançado mundialmente em outubro de 2024, arrecadou US$ 2,7 milhões no primeiro dia, e sua primeira semana foi a segunda mais forte em termos de faturamento na história dos jogos para celular da franquia Pokémon. Nos primeiros dezessete dias de lançamento, o jogo arrecadou mais de US$ 100 milhões.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Pokémon Trading Card Game Pocket",
      "descricao": "Versão para celular do card game Pokémon, lançada em 2024, com abertura diária de pacotes e cartas digitais."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Diferente do card game tradicional, o baralho do TCG Pocket não leva um tipo de carta, que surge automaticamente a cada turno. Qual?",
    "resposta": "Cartas de energia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game Pocket (often abbreviated as Pokémon TCG Pocket) is a free-to-play mobile adaptation of the Pokémon Trading Card Game (TCG), developed by Creatures Inc. and DeNA, and published by The Pokémon Company. The game was revealed on February 27, 2024 during a Pokémon Presents presentation,  had a soft-launch in New Zealand on September 26, 2024, and officially released on Octobe\n[…]\nPokémon TCG Pocket serves as a mobile adaptation of the traditional trading card game, allowing players to collect cards, trade with friends, and build decks to engage in battles against other players. The game incorporates features designed for mobile gameplay, including daily rewards, while maintaining the core mechanics of the original TCG.\n[…]\nPokémon Trading Card Game Pocket was revealed on February 27, 2024 during a Pokémon Presents. The game's announcements caused a significant increase in developer DeNA's share price. At the closing ceremonies of the Pokémon World Championships in Hawaii, a new trailer for the game was released, revealing its official release date of October 30, 2024. In August, the Pokémon Company announced over 6 million people had pre-registered for the game.\n[…]\nThe game partnered with American fast food chain McDonald's for a promotion in January 2025, with Happy Meals including physical Pokémon cards as well as digital in-game rewards.\n[…]\nMacDonald also cited this sentiment, believing the game also had appeal due to being the first of the Trading Card Game's attempts to expand onto mobile phones to be received positively. Joshua Yehl, conversely, wrote for IGN that the differences between Pocket's gameplay and the main card game's had alienated some players, especially due to the recent release of Pokémon Trading Card Game Live, which directly adapted the game's gameplay for a mobile client but was met with negative reviews."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game Pocket (frequentemente abreviado como Pokémon TCG Pocket), conhecido no Brasil como Pokémon Estampas Ilustradas Pocket, é uma adaptação para dispositivos móveis gratuita do Pokémon Trading Card Game (TCG), desenvolvido pela Creatures Inc. e DeNA, e publicado pela The Pokémon Company.\n[…]\nAs batalhas consistem em uma versão simplificada do jogo de cartas físico. Os jogadores colocam um Pokémon em combate enquanto os outros permanecem no \"banco\". Os jogadores compram cartas e obtêm uma energia a cada turno. A energia é usada para permitir que os Pokémon ataquem. Os Pokémon podem evoluir para formas mais fortes, enquanto outras cartas podem ser usadas para dar suporte às cartas em campo, o que pode dar aos jogadores uma vantagem na batalha.\n[…]\nO jogo fez uma parceria com a rede americana de fast food McDonald's para uma promoção em janeiro de 2025, com os McLanches Felizes incluindo cartas de Pokémon físicas, além de recompensas digitais no jogo.\n[…]\nJoshua Yehl, por outro lado, escreveu para a IGN que as diferenças entre a jogabilidade de Pocket e a do jogo de cartas principal afastaram alguns jogadores, especialmente devido ao recente lançamento de Pokémon Trading Card Game Live, que adaptou diretamente a jogabilidade do jogo para um cliente móvel, mas recebeu críticas negativas.\n[…]\nA introdução do sistema de trocas do jogo causou uma pequena controvérsia entre os jogadores, já que muitos não gostaram da exigência de um sistema de \"energia\" para negociar, bem como das restrições impostas aos tipos de cartas que podiam ser trocadas. Muitos jogadores cancelaram suas assinaturas premium do jogo em protesto. O protesto resultou no anúncio de mudanças no sistema pelos desenvolvedores.\n[…]\nAs cartas receberiam novas artes uma semana depois.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Wonder Pick",
      "descricao": "Recurso do Pokémon Trading Card Game Pocket que permite escolher às cegas uma carta de um pacote aberto por outro jogador."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "No TCG Pocket, um recurso deixa o jogador escolher, às cegas, uma carta de um pacote que outro jogador acabou de abrir. Como ele se chama?",
    "resposta": "Wonder Pick",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Wonder_Pick",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Wonder_Pick",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game Pocket (often abbreviated as Pokémon TCG Pocket) is a free-to-play mobile adaptation of the Pokémon Trading Card Game (TCG), developed by Creatures Inc. and DeNA, and published by The Pokémon Company. The game was revealed on February 27, 2024 during a Pokémon Presents presentation,  had a soft-launch in New Zealand on September 26, 2024, and officially released on Octobe\n[…]\nA monthly \"Premium Pass\" subscription lets the player open an extra pack each day. Players receive pack points from opening packs, which players can exchange for individual cards in an in-game shop. In addition to opening packs, the player can use a \"Wonder Pick\", in which the player will get one random card out of a pack another player had opened.\n[…]\nAmong players, Pocket Gamer cited the game as being \"the closest thing to Pokémania since 2016’s Pokémon Go\", attributing the game's comparative success to other Pokémon mobile titles as being due to the game's nostalgia factor, as the original launch of cards predominantly used species found in the first Pokémon series games, as well as more recent and recognizable fan favorite Pokémon.\n[…]\nMacDonald also cited this sentiment, believing the game also had appeal due to being the first of the Trading Card Game's attempts to expand onto mobile phones to be received positively. Joshua Yehl, conversely, wrote for IGN that the differences between Pocket's gameplay and the main card game's had alienated some players, especially due to the recent release of Pokémon Trading Card Game Live, which directly adapted the game's gameplay for a mobile client but was met with negative reviews."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game Pocket (frequentemente abreviado como Pokémon TCG Pocket), conhecido no Brasil como Pokémon Estampas Ilustradas Pocket, é uma adaptação para dispositivos móveis gratuita do Pokémon Trading Card Game (TCG), desenvolvido pela Creatures Inc. e DeNA, e publicado pela The Pokémon Company.\n[…]\nUma assinatura mensal do \"Premium Pass\" permite que o jogador abra um pacote extra por dia. Os jogadores recebem pontos de pacote ao abrir pacotes, que podem ser trocados por cartas individuais em uma loja dentro do jogo. Além de abrir pacotes, o jogador pode usar uma \"Wonder Pick\", na qual ele receberá uma carta aleatória de um pacote aberto por outro jogador.\n[…]\nAna Diaz, escrevendo para o Polygon, e Jupiter Hadley, escrevendo para o Pocket Gamer, elogiaram a diversão de abrir pacotes e colecionar cartas, destacando a arte especial e os efeitos visuais das cartas raras, mas nenhum dos dois considerou a jogabilidade de batalhar contra oponentes muito interessante.\n[…]\nA inclusão de Mew, desbloqueável por meio de uma missão secreta, também foi citada como estando na vanguarda de vários \"rumores de playground\" sobre o jogo, o que ajudou a evocar o mesmo sentimento de nostalgia. Jakub Remiar, em outro artigo para o site, descobriu que a nostalgia do jogo ajudou a atrair pessoas que jogaram os jogos originais quando crianças, com sua acessibilidade para novos jogadores permitindo que ele conquistasse esses mesmos jogadores.\n[…]\nJoshua Yehl, por outro lado, escreveu para a IGN que as diferenças entre a jogabilidade de Pocket e a do jogo de cartas principal afastaram alguns jogadores, especialmente devido ao recente lançamento de Pokémon Trading Card Game Live, que adaptou diretamente a jogabilidade do jogo para um cliente móvel, mas recebeu críticas negativas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Kangaskhan",
      "descricao": "Pokémon do tipo Normal, número 115 da Pokédex Nacional, que lembra uma canguru."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "No lançamento de Pokémon Go, que pokémon de Kanto, que carrega o filhote numa bolsa na barriga, só aparecia na Austrália e na Nova Zelândia?",
    "resposta": "Kangaskhan",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Regional_Pok%C3%A9mon",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Regional_Pok%C3%A9mon",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go",
        "situacao": "ok",
        "texto": "Pokémon Go (stylized as Pokémon GO) is a 2016 augmented reality (AR) mobile game originally developed and published by Niantic and since 2025 by Scopely Explore, in partnership with Nintendo and the Pokémon Company, for iOS and Android devices. The game uses GPS to locate, capture, train, and battle Pokémon. It is free-to-play, featuring a freemium model that includes in-app purchases for addition\n[…]\nFor the first two days after launch, players could not access the game through their Pokémon Trainer Club accounts; only Gmail-based accounts could gain access to the game. Servers again suffered frequent outages in Australia on July 11; players blamed people in the United Kingdom for bypassing local servers and using Australian ones to play the game before its official release. On July 16, a few hours after the release in many European countries, the game's servers temporarily went offline.\n[…]\nApptopia reported that, by September 2018, the game had grossed over $2 billion from in-app purchases; the top five countries where it has received the most revenue are Japan ($670 million), the United States ($550 million), Germany ($88 million), the United Kingdom ($86 million), and Australia ($52 million). It was the fourth highest-grossing game of 2018, with $1.3 billion, and in 2019 alone, Pokémon Go earned $1.4 billion, according to Superdata Research, a division of Nielsen Media Research.\n[…]\nOn July 25, Dwayne Johnson released a promo video featuring MatPat and Ali-A with himself as a tough, rare Pokémon.\n[…]\nSome players of Pokémon Go have vandalized OpenStreetMap, one of the game's map data sources, to manipulate gameplay.\n[…]\nstates, Niantic is firm on not keeping the pandemic bonuses. Players began boycotting Pokémon Go since the first week of August 2021.\n[…]\nList of Pokémon, the list of all of the original Pokémon by order\n[…]\nMedia related to Pokémon Go at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_GO",
        "situacao": "ok",
        "texto": "Pokémon GO é um jogo eletrônico free-to-play de realidade aumentada voltado para smartphones. O jogo é desenvolvido e publicado pela Niantic, Inc., em colaboração com a Nintendo e a The Pokémon Company para as plataformas iOS e Android. O jogo foi inicialmente lançado em julho de 2016 para alguns países, eventualmente foi expandindo para o resto do mundo.\n[…]\nEm 4 de março de 2016, começou a fase de testes de Pokémon GO no Japão, e em 7 de abril do mesmo ano começaram os testes na Nova Zelândia e Austrália. Mais tarde, em 16 de maio, a Niantic anunciou em seu blog que o jogo entraria em fase de testes também nos Estados Unidos. O teste chegou ao fim em 30 de junho.\n[…]\nO jogo foi lançado na Austrália, Nova Zelândia e nos Estados Unidos em 6 de julho de 2016. Devido à demanda dos servidores após o lançamento, o CEO da Niantic, John Hanke, afirmou que o lançamento na maioria das outras regiões havia sido paralisado até que a Niantic estivesse mais confortável. Os lançamentos europeus começaram em 13 de julho, e o jogo tornou-se disponível para a maioria dos países no continente ao longo dos próximos dez dias.\n[…]\nOutra falha que apareceu alguns dias depois do lançamento foi a \"falha de três etapas\", os revisores também usaram esse bug a imprensa negativa. Patricia Hernandez (Kotaku), disse que \"a falha de três etapas acrescenta ao que tem sido o lançamento terrível de Pokémon Go\". Paul Tassi (Forbes) disse que, devido a este erro é \"melhor o palpite de ninguém, onde Pokémon são 99% do tempo \"e que\" torna quase todos os métodos tradicionais de monitoramento sem sentido\".\n[…]\nCom o lançamento dos pokémon lendários Lugia e Articuno, o jogo fez 5.8 milhões de dólares apenas no dia 23 de julho de 2017, sendo o jogo mais lucrativo nesse dia em 23 países, incluindo EUA, Canadá e Reino Unido.\n[…]\n«Pokémon GO». para Google Play\n[…]\n«Pokémon GO». para App Store.",
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
