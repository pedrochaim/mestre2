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
      "nome": "Pokémon Snap",
      "descricao": "Jogo de 1999 para Nintendo 64 em que o fotógrafo Todd Snap registra pokémon numa ilha, percorrida num veículo sobre trilhos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Snap, para Nintendo 64, o jogador percorre uma ilha num carrinho. Em vez de capturar os pokémon, o que ele faz com eles?",
    "resposta": "Tira fotografias deles",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "Pokémon Snap is a 1999 photography video game developed by HAL Laboratory and published by Nintendo for the Nintendo 64. It was first released in Japan in March 1999 and was later released in July 1999 in North America and in September 2000 for PAL regions. It is a spin-off game in the Pokémon series, being one of the first console-based games for it, and featuring many Pokémon rendered for the fi\n[…]\nAlmost all of the games that would have a 64DD version, including The Legend of Zelda: Ocarina of Time and Donkey Kong 64, were given an N64-only release. In January 1999, the magazine Dengeki Nintendo 64 announced that Pokémon Snap was also no longer appearing on the 64DD, being published only as an N64 cartridge. Two months later, the game saw its release in Japan.\n[…]\nAccording to the NPD Group, Pokémon Snap was the top-selling Nintendo 64 game of 1999 in the United States, as well as the fifth top-selling video game altogether. In the United Kingdom, it sold 6,500 units at launch, reaching No.9 in that week's charts, and replacing Perfect Dark as the top-selling game in the N64 Top Ten chart.\n[…]\nAt the 3rd Annual Interactive Achievement Awards, Pokémon Snap was awarded Console Children's/Family Title of the Year by  the Academy of Interactive Arts & Sciences. Blockbuster nominated it for best Nintendo 64 game in its \"Blockbuster Awards\".\n[…]\nThomas called the photo sharing feature a positive of its release, while criticizing its limited selection of Pokémon, similar to the review of the Nintendo 64 version from IGN. He added that a sequel updated to include Wii controls and Pokémon from recent generations would be welcome. IGN included Pokémon Snap in its wish list of Nintendo 3DS remakes, commenting that it could take advantage of the 3DS' ability to produce stereoscopic 3D photos would be an enjoyable feature for Pokémon Snap.\n[…]\nPokémon Snap at IMDb"
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
    "indice": 2,
    "ancora": {
      "nome": "Pokémon Ranger",
      "descricao": "Jogo derivado da franquia Pokémon, lançado em 2006 para Nintendo DS, em que o jogador é um guarda florestal que acalma pokémon selvagens."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Ranger, para Nintendo DS, o herói não usa Poké Bolas. Como ele captura os pokémon, usando a caneta na tela?",
    "resposta": "Desenhando círculos ao redor deles",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger",
        "situacao": "ok",
        "texto": "Pokémon Ranger (ポケモンレンジャー, Pokemon Renjā) is an action role-playing video game developed by HAL Laboratory and Creatures Inc. and published by The Pokémon Company and Nintendo for the Nintendo DS video game console. The game was released in Japan, North America, and Australia in 2006 before releasing in Europe in 2007.\n[…]\nIn Pokémon Ranger, rather than the traditional turn-based fighting mechanic and use of Pokéballs, the player's character can capture Pokémon by using a Capture Styler, controlled by the stylus of the Nintendo DS. To capture a Pokémon, the player must draw consecutive circles around the wild Pokémon on the Nintendo DS touchscreen. To fight back, opposing Pokémon may attempt to flee or attack the Capture Styler. When a Pokémon is captured, it temporarily joins the player's party.\n[…]\nPokémon Ranger: Shadows of Almia is the sequel to Pokémon Ranger, developed by Creatures Inc. for the Nintendo DS. It was announced in the January 2008 issue of CoroCoro Comic and released in Japan on March 20, 2008. It was announced at E3 2008 that the game would be released in the United States under the title Shadows of Almia on November 10, 2008, and later announced to release in Europe on November 21, 2008.\n[…]\nThis sequel follows the same mission-based plot, this time, allowing players to download new missions via Nintendo Wifi Connection. This game features 270 new Pokémon that were not seen in Pokémon Ranger.\n[…]\nPokémon Ranger: Guardian Signs is an action role-playing video game developed by Creatures Inc., published by The Pokémon Company, and distributed by Nintendo for the Nintendo DS. It is the third and final installment of the Pokémon Ranger series and was released worldwide in 2010. The protagonist explores a new region, Oblivia, as they continue the mission-based plot from the previous games."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ranger",
        "situacao": "ok",
        "texto": "Pokémon Ranger (ポケモンレンジャー, Pokemon Renjā) é um jogo da série Pokémon com um novo conceito: comandar temporariamente os monstrinhos. Você usa um \"apetrecho\" para poder controlá-los e liberá-los depois. É compatível com Pokémon Diamond & Pearl, principalmente para poder obter o lendário ovo do Pokémon Manaphy e transferir para o RPG Clássico.\n[…]\nPokémon Ranger utiliza de um novo conceito para pegar Pokémon: obtê-los, usá-los e soltá-los. Para isso, utiliza-se o Capture Styler, um aparelho que possibilita que um Pokémon com o Capture Disc e obter o controle dos mesmos. Cercando-o com o Stylus vária vezes faz com que ele seja derrotado e seja dominado por um tempo. De acordo com o tipo do Pokémon, o jogador pode usar o Poké Assist, que varia de Pokémon para Pokémon, tanto em uma batalha quanto no campo.\n[…]\nAo começar o jogo, o jogador pode escolher se o protagonista é um garoto ou garota. Lunick (カズキ, Kazuki) tem como parceiro um Minun e Solana (ヒナタ, Hinata) um Plusle. Ambos têm que impedir que o Team Go-rock squad domine Fiore capturando e usando Pokémon para derrotá-los e se unindo aos membros da Ranger Union, uma legião de Pokémon Rangers que estão espalhados por Fiore. Cada cidade tem um Ranger \"Chefe\": Spenser - Ringtown, Joel - Fall City, Cameron - Summerland e Elita - Wintown\n[…]\nUma missão especial no jogo envolve salvar um ovo, que é o ovo do lendário Manaphy, do que sobrou foi pego pelo Team Go-Rock Squad. Uma vez terminada a missão, ovo não pode chocar em Fiore, tendo que ser transferido para Sinnoh, ou seja, Pokémon Diamond & Pearl. O jogador deve ter dois Nintendo DS, um contendo Pokémon Ranger, o outro contendo Pokémon Diamond ou Pokémon Pearl. Quando o ovo for transferido, ele poderá chocar e Manaphy sairá de lá no Lv. 1.\n[…]\nEm 31 de março de 2008,  Pokémon Ranger  vendeu 2,70 milhões de cópias em todo o mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pokémon X e Y",
      "descricao": "Par de jogos Pokémon da sexta geração, lançado em 2013 para o Nintendo 3DS e ambientado na região de Kalos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Pokémon X e Y, de 2013, estrearam uma transformação temporária em batalha, ativada por uma pedra especial que o pokémon segura. Como ela se chama?",
    "resposta": "Megaevolução",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_X_and_Y"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_X_and_Y",
        "situacao": "ok",
        "texto": "Pokémon X and Pokémon Y are 2013 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the sixth generation of the main Pokémon game series. First announced in January 2013 by Nintendo president Satoru Iwata through a Nintendo Direct, Pokémon X and Pokémon Y were released worldwide in October 2013\n[…]\nIn promoting the game's new Mega Evolution feature, Mega Mewtwo Y (then known as \"Awakened Mewtwo\") was featured in a special episode of the anime titled \"Mewtwo: Prologue to Awakening\" and then the film ExtremeSpeed Genesect: Mewtwo Awakens, released in Japan on 13 July 2013. Mega Evolution was also featured in the TV special Pokémon Origins, which was a re-telling of the original Pokémon Red and Blue games, and included a surprise appearance of Mega Charizard X.\n[…]\nThe upcoming season of the Pokémon anime series based on these games, titled Pokémon the Series: XY, began airing in Japan on 17 October 2013, and was previewed in North America and Europe on 19 October 2013.\n[…]\nPokémon X and Y were nominated for Best RPG and Best Handheld Game at the 2013 VGX Awards. In 2014 it won the Golden Joystick Award for Handheld Game of the Year. During the 17th Annual D.I.C.E. Awards, the Academy of Interactive Arts & Sciences nominated Pokémon X and Y for \"Handheld Game of the Year\" and \"Role-Playing/Massively Multiplayer Game of the Year\".\n[…]\nAt the time, they were the fastest-selling 3DS titles in the Americas, but were later surpassed by Pokémon Sun and Moon. Within three months of release, by December 2013, the games were the best-selling titles for the 3DS with 11.61 million copies sold worldwide. They remained at the top through at least 2016, before being outsold by Mario Kart 7 in 2017."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_X_e_Y",
        "situacao": "ok",
        "texto": "Pokémon X e Y (ポケットモンスター X・Y, Poketto Monsutā Ekkusu & Wai; Monstros de Bolso Xis & Ípsilon) são dois jogos eletrônicos de RPG de 2013, produzidos pela Game Freak e publicados pela The Pokémon Company e Nintendo para o Nintendo 3DS, sendo os jogos mais vendidos do console, com 27 milhões de cópias vendidas. São os primeiros títulos da sexta geração da série Pokémon.\n[…]\nAnunciado pela primeira vez em janeiro de 2013 pelo ex-presidente da Nintendo, Satoru Iwata, através de um Nintendo Direct especial, Pokémon X e Y foram lançados mundialmente em outubro de 2013, tornando-os os primeiros jogos de varejo publicados pela Nintendo a ter um lançamento global simultâneo em todas as principais regiões.\n[…]\nUm novo elemento na série é a Mega Evolução, em que Pokémon totalmente evoluídos, como Mewtwo e Lucario, podem usar itens especiais chamados \"Mega Stones\" para evoluir temporariamente para formas Mega durante as batalhas. Alguns Pokémon, como Charizard, possuem mais de uma forma Mega disponível. Também foram introduzidos Sky Battles e Horde Encounters.\n[…]\nAo promover o novo recurso Mega Evolução do jogo, Mega Mewtwo Y (então conhecido como \"Awakened Mewtwo\") foi apresentado em um episódio especial do anime intitulado \"Mewtwo: Prologue to Awakening\" e depois no filme ExtremeSpeed Genesect: Mewtwo Awakens, lançado no Japão em 13 de julho de 2013. Mega Evolução também foi destaque no especial de TV Pokémon Origins, que foi uma recontagem dos jogos Pokémon Red e Blue originais, e incluiu uma aparição surpresa de Mega Charizard X.\n[…]\nA próxima temporada do anime Pokémon A, série baseada nesses jogos, intitulada Pokémon the Series: XY, começou a ser exibida no Japão em 17 de outubro de 2013, e foi apresentada na América do Norte e na Europa em 19 de outubro de 2013.\n[…]\n\"Pokémon Direct\" Oficial anunciado da Nintendo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Pokémon Sword e Shield",
      "descricao": "Par de jogos Pokémon da oitava geração, lançado em 2019 para o Nintendo Switch e ambientado na região de Galar."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nos estádios de Galar, em Sword e Shield, que fenômeno faz os pokémon crescerem até ficar gigantes durante a batalha?",
    "resposta": "Dynamax",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword and Pokémon Shield are 2019 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo Switch console. They are the first instalments in the 8th generation of the Pokémon video game series. First teased at E3 2017 and announced in February 2019, the games were released on 15 November 2019.\n[…]\nDynamax and Gigantamax lasts for three turns. Players can battle in teams of four, either with other players or with non-playable characters, in cooperative raids against wild Dynamaxed or Gigantamaxed Pokémon, who have significantly larger health bars and can summon protective barriers to limit damage dealt to them.\n[…]\nThe Dynamax/Gigantamax effect affects four held items; the three Choice items lose both the stat boost and the move lock; the player is free to choose any move in the Pokémon's moveset, but the move lock cannot be altered during Dynamaxing or Gigantamaxing. Another item that Dynamaxing and Gigantamaxing affects is the Assualt Vest; the Pokémon does not get its 50% boost in the Special Defense stat but the item still prevents the holder from using non-attacking moves (Max Guard).\n[…]\nSword and Shield are set in Galar, a fictional region inspired by the United Kingdom, with several of its landmarks resembling places such as Bath, Somerset and York. Within the Galar Region lie countryside towns featuring cottages and Victorian architecture to the south. There are also Industrial Revolution and steampunk references. Many of the region's towns and cities feature Pokémon Gyms stylised like football stadiums, showcasing the games' Dynamax and Gigantamax mechanic.\n[…]\nUnlike previous core series games, many pre-existing Pokémon are not available in Sword and Shield, and only Pokémon that appear in the Galar region can be transferred from previous titles via Pokémon Home."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sword_e_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword e Pokémon Shield (ポケットモンスター ソード・シールド, Poketto Monsutā Sōdo・Shīrudo; Monstros de Bolso Sword・Shield, que traduzidos do inglês para o português significa Espada e Escudo, Espada e Escudo em japonês é respectivamente 剣 Ken e 盾 Tate) são dois jogos eletrônicos de RPG, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo. Fazem parte da oitava geração da série Po\n[…]\nSword e Shield apresenta 81 novos Pokémon ao lado de 13 formas regionais de Pokémon preexistentes; Dynamaxing, que aumenta o tamanho do Pokémon sob certas condições; Gigantamaxing, que também altera a forma de certos Pokémon; e a Wild Area, que é uma grande área de mundo aberto com movimento de câmera livre que contém batalhas de ataques cooperativas. Os dois jogos também reintroduzem recursos vistos anteriormente em Sun e Moon e Let's Go, Pikachu!\n[…]\nUma cidade semelhante à Revolução Industrial com elementos do estilo steampunk preenchem o centro da região. Muitas das vilas e cidades da região apresentam Pokémon Ginásios estilizados como estádios de futebol, que exibem Dynamaxing e Gigantamaxing, implementados pelo presidente da Liga Pokémon de Galar, Rose. Montanhas cobertas de neve dominam grande parte das áreas ao norte da região.\n[…]\nO jogador, Hop e Piers trabalham com os Líderes de Ginásio para subjugar o Pokémon Dynamax e depois rastrear e confrontar os irmãos. Eles usam a energia Dynamax para levar Zamazenta (em Sword) ou Zacian (em Shield) à loucura, e o jogador os afasta com a ajuda de Zacian (em Sword) ou Zamazenta (em Shield).\n[…]\nApós o lançamento, Pokémon Sword e Shield receberam \"análises geralmente favoráveis\", de acordo com o agregador de análises Metacritic. Os críticos elogiaram a simplicidade dos jogos, novos elementos como Dynamaxing e encontros de batalha simplificados, mas criticaram a Pokédex incompleta e não aproveitando totalmente o potencial dos jogos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Pokémon Gold e Silver",
      "descricao": "Par de jogos Pokémon da segunda geração, lançado para Game Boy Color e ambientado na região de Johto."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Gold e Silver, depois de vencer a Liga de Johto, o jogador pode viajar para qual outra região, cenário dos primeiros jogos?",
    "resposta": "Kanto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version and Pokémon Silver Version are 1999 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy Color. They are the first installments in the second generation of the Pokémon video game series. They were released in Japan on November 21st, 1999, Australia and North America on October 15th, 2000, and Europe on April 6th, 2001.\n[…]\nTrainers will call for a rematch and others will call about rare Pokémon that can be caught in a certain area.\n[…]\nPokémon Gold and Silver are set in the region of Johto, situated to the west of the Kanto Region from the previous Red and Blue games, and three years after the conclusion of the previous games. The design of Johto was inspired by Japan's Kansai and Tōkai regions, with many of the region's temples and more traditional Japanese aesthetics finding their way into Johto.\n[…]\nThe player can then travel to the Kanto Region from the previous games and challenge the Kanto Gym Leaders there, discovering how much has changed in the three years following the events of Red and Blue. For example, Cinnabar Island has been almost completely taken over by a volcano eruption; only a Pokémon Center remains. After defeating the Kanto Gym Leaders, the player is allowed to enter the treacherous Mt. Silver area, home to very powerful Pokémon. Deep within Mt.\n[…]\nNintendo Power listed Gold and Silver combined as the sixth best Game Boy / Game Boy Color games, praising them for the new Pokémon, features, and full-color graphics.\n[…]\nPokémon HeartGold Version and Pokémon SoulSilver Version are enhanced remakes of Pokémon Gold and Silver, developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS. First released in Japan on September 12, 2009, the games were later released in North America, Australia, and Europe during March 2010."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Gold_%26_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version e Pokémon Silver Version (ポケットモンスター 金・銀, Poketto Monsutā Kin・Gin; tradução: Monstros de Bolso Ouro・Prata) são jogos eletrônicos de RPG de 1999, desenvolvidos pela Game Freak e publicadas pela Nintendo para o Game Boy Color. Esses dois jogos iniciaram a segunda geração da série Pokémon. Eles foram lançados no Japão em 1999, na Austrália e América do Norte em 2000 e Europa em 20\n[…]\nPokémon Gold e Silver são ambientados na região de Johto, situada a oeste da região de Kanto dos jogos anteriores Red e Blue, e três anos após a conclusão dos jogos anteriores. O design do Johto foi inspirado nas regiões japonesas de Kansai e Tōkai, com muitos dos templos da região e a estética japonesa mais tradicional chegando até Johto.[carece de fontes]?\n[…]\nEventualmente, o jogador derrota a Equipe Rocket de uma vez por todas e derrota a Elite dos Quatro e o Campeão da Liga Pokémon no Indigo Plateau. O jogador pode então viajar para a região de Kanto dos jogos anteriores e desafiar os Líderes de Ginásio de lá, descobrindo o quanto mudou nos três anos após os eventos de Red e Blue.\n[…]\nDepois de derrotar os Líderes de Ginásio da região de Kanto, o jogador será autorizado pelo renomado Professor Oak a entrar no traiçoeiro Monte Silver, lar de Pokémon muito poderosos. No pico do Monte Silver encontra-se Red, o protagonista da geração anterior, a quem o jogador pode desafiar para a batalha mais difícil do jogo.\n[…]\nAté agora em 2000, o jogo mais vendido na América para qualquer console doméstico é Pokémon Stadium para Nintendo 64, e o jogo mais vendido para qualquer jogo eletrônico portátil é Pokémon Yellow para Game Boy Color, mas Pokémon Gold e Silver eclipsarão até mesmo esses totais de vendas impressionantes. Projetamos vendas de 10 milhões unidades totais desses dois jogos em menos de seis meses\". Em 2010, as vendas registradas de ouro e prata foram de 23 milhões de unidades vendidas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Pokémon Gold e Silver",
      "descricao": "Par de jogos Pokémon da segunda geração, lançado para Game Boy Color e ambientado na região de Johto."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A história de Pokémon Gold e Silver se passa quanto tempo depois dos acontecimentos de Red e Blue?",
    "resposta": "Três anos depois",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Gold_and_Silver_Versions",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Gold_and_Silver_Versions",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version and Pokémon Silver Version are 1999 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy Color. They are the first installments in the second generation of the Pokémon video game series. They were released in Japan on November 21st, 1999, Australia and North America on October 15th, 2000, and Europe on April 6th, 2001.\n[…]\nGold and Silver were first publicly showcased at November 1997, Nintendo Space World Expo in Japan, becoming the most popular exhibit at the program. Unlike the previous game in the series, Pokémon Yellow, the new titles were announced to be more than a small upgrade to Pokémon Red and Blue. Instead, they would feature a new storyline, a new world, and new species of Pokémon. Gold and Silver were designed for the Game Boy Color, allowing them full color support and more detailed sprites.\n[…]\nSo from these experiences in childhood, these ideas for Pokémon came out\". In the same vein as the Pokémon Mew of Red and Blue, the exclusive Pokémon Celebi was included in the Gold and Silver games but is only accessible after attending a Nintendo promotional event. The first official event offering Celebi was Nintendo Space World 2000 in Japan, in which 100,000 attendees would be awarded the rare Pokémon.\n[…]\nNintendo Power listed Gold and Silver combined as the sixth best Game Boy / Game Boy Color games, praising them for the new Pokémon, features, and full-color graphics.\n[…]\nPokémon Gold and Silver continued the enormous success of Pokémon Red and Blue, beginning the formation of Pokémon into a multi-billion dollar franchise. Upon its first day of release in Japan, the game sold 1,425,768 units. As of April 2000, roughly 6.5 million copies of the games had been sold in Japan. Silver proved to be the slightly more popular version, edging out Gold by approximately 100,000 copies."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Gold_%26_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version e Pokémon Silver Version (ポケットモンスター 金・銀, Poketto Monsutā Kin・Gin; tradução: Monstros de Bolso Ouro・Prata) são jogos eletrônicos de RPG de 1999, desenvolvidos pela Game Freak e publicadas pela Nintendo para o Game Boy Color. Esses dois jogos iniciaram a segunda geração da série Pokémon. Eles foram lançados no Japão em 1999, na Austrália e América do Norte em 2000 e Europa em 20\n[…]\nPokémon Gold e Silver são ambientados na região de Johto, situada a oeste da região de Kanto dos jogos anteriores Red e Blue, e três anos após a conclusão dos jogos anteriores. O design do Johto foi inspirado nas regiões japonesas de Kansai e Tōkai, com muitos dos templos da região e a estética japonesa mais tradicional chegando até Johto.[carece de fontes]?\n[…]\nEventualmente, o jogador derrota a Equipe Rocket de uma vez por todas e derrota a Elite dos Quatro e o Campeão da Liga Pokémon no Indigo Plateau. O jogador pode então viajar para a região de Kanto dos jogos anteriores e desafiar os Líderes de Ginásio de lá, descobrindo o quanto mudou nos três anos após os eventos de Red e Blue.\n[…]\nAté agora em 2000, o jogo mais vendido na América para qualquer console doméstico é Pokémon Stadium para Nintendo 64, e o jogo mais vendido para qualquer jogo eletrônico portátil é Pokémon Yellow para Game Boy Color, mas Pokémon Gold e Silver eclipsarão até mesmo esses totais de vendas impressionantes. Projetamos vendas de 10 milhões unidades totais desses dois jogos em menos de seis meses\". Em 2010, as vendas registradas de ouro e prata foram de 23 milhões de unidades vendidas.\n[…]\nPokémon Crystal foi bem recebido pelos críticos, embora muitos comentassem que não havia novas adições e recursos suficientes para diferenciá-lo significativamente do Pokémon Gold e Silver. Pokémon Crystal vendeu quase 6,4 milhões de unidades em todo o mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Tenente Surge",
      "descricao": "Líder do ginásio do tipo Elétrico da cidade de Vermilion, na região de Kanto, nos jogos Pokémon."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Tenente Surge, líder do ginásio elétrico de Vermilion em Red e Blue, é um ex-militar que diz ter sobrevivido à guerra. De que país ele é?",
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
    "indice": 8,
    "ancora": {
      "nome": "Zona Safári de Kanto",
      "descricao": "Área de captura dos jogos Pokémon Red e Blue em que o jogador atira iscas e pedras nos pokémon em vez de batalhar."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, há um parque onde o jogador captura pokémon raros atirando iscas e pedras, sem batalhar. Em que cidade fica essa Zona Safári?",
    "resposta": "Fuchsia",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kanto_Safari_Zone"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kanto_Safari_Zone",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Mewtwo",
      "descricao": "Pokémon do tipo Psíquico, número 150 da Pokédex Nacional."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, depois de vencer a Liga, o jogador encontra o lendário Mewtwo escondido numa caverna ao lado de qual cidade?",
    "resposta": "Cerulean",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Cerulean_Cave"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cerulean_Cave",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Pokémon Colosseum",
      "descricao": "Jogo de RPG Pokémon para GameCube, desenvolvido pela Genius Sonority e ambientado na região desértica de Orre."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Pokémon Colosseum, para GameCube, se passa em Orre, uma região desértica inspirada em qual estado americano?",
    "resposta": "Arizona",
    "distratores": [
      "Nevada",
      "Texas",
      "Novo México"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Orre",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Orre",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum",
        "situacao": "ok",
        "texto": "Pokémon Colosseum is a role-playing video game developed by Genius Sonority and published by The Pokémon Company and Nintendo for the GameCube. A spin-off of the Pokémon series, it was released on November 21, 2003, in Japan, March 22, 2004, in North America and May 14, 2004, in Europe. Unlike previous titles' random encounters with Pokémon, Colosseum allows the player to steal (\"snag\") the Pokémo\n[…]\nPokémon Colosseum is set in the Orre region. Orre is a mostly desertous region in which no wild Pokémon can be found (although the sequel, Pokémon XD: Gale of Darkness, adds wild Pokémon spots to the region). Orre consists of many cities, towns, and Colosseums.\n[…]\nThe transition to 3D also brought new graphical changes. Wes was designed to look \"hazy\" and about 17 years old. Genius Sonority ported most of the models and animations of first- and second-generation Pokémon from Stadium and Stadium 2. Genius Sonority based most of Orre on the real-life city of Phoenix, Arizona. As a whole, the graphics were influenced more by manga than by established Pokémon convention.\n[…]\nThree weeks before its release, pre-orders of Pokémon Colosseum made it the best-selling game on Amazon.com. In the game's first week of release in the United Kingdom, it boosted the GameCube's market share from 16% to 32%. It was the best-selling GameCube game of May 2004, and fourteenth among all consoles. In 2005, the game was certified as part of Nintendo's Player's Choice line in North America, representing at least 250,000 copies sold.\n[…]\nPokémon Colosseum spawned a high-profile tournament in the United Kingdom entitled \"Pokémon Colosseum Battlemaster 2004\". The first round of battles was held at Toys \"R\" Us locations, with later battles taking place in movie theaters. Across Europe, the game was bundled with GameCube consoles shortly after its release.\n[…]\nPokémon Battle Revolution"
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
    "indice": 11,
    "ancora": {
      "nome": "Pokémon Legends: Z-A",
      "descricao": "Jogo Pokémon de 2025, para Nintendo Switch e Switch 2, ambientado na cidade de Lumiose, na região de Kalos."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Pokémon Legends Z-A, de 2025, se passa quase inteiramente numa única cidade de Kalos, inspirada em Paris. Que cidade é essa?",
    "resposta": "Lumiose",
    "distratores": [
      "Santalune",
      "Shalour",
      "Laverre"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Z-A"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Z-A",
        "situacao": "ok",
        "texto": "Pokémon Legends: Z-A is a 2025 action role-playing game developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch and Nintendo Switch 2. Part of the ninth generation of Pokémon video games, it is a sequel to the sixth-generation titles Pokémon X and Y (2013) and the second entry in the Pokémon Legends sub-series, following Pokémon Legends: Arceus (2022).\n[…]\nThe game takes place entirely in the Kalos region's Lumiose City, five years after the events of X and Y.\n[…]\nThe game takes place in the Kalos region, which was first introduced in the 2013 video games Pokémon X and Y. The plot takes place five years after those games' events, during an urban redevelopment project in Lumiose City, based on Paris, being undertaken by a company called Quasartico, Inc. The game takes place entirely within Lumiose City, where Pokémon coexist with humans in locations known as Wild Zones.\n[…]\nWith the Prism Tower crisis averted, a young girl named Ansha visits Hotel Z with her companion, the Mythical Pokémon Hoopa. Team MZ helps Ansha bake a donut that strengthens Hoopa, and she tells them that she wishes to capture a certain Legendary Pokémon for her mother. Ansha then has Hoopa open a portal to an alternate dimension called Hyperspace Lumiose, and Team MZ follows her inside.\n[…]\nThe next day, Corbeau identifies the Legendary Pokémon Ansha has been pursuing as Rayquaza, and tasks Team MZ with capturing the Hoennian Legendary Pokémon Groudon and Kyogre. After the player does so, Team MZ learns that Hyperspace Lumiose will make Rayquaza's dimension appear if Ansha makes a strong wish. Ansha hears about Groudon and Kyogre, and she remembers the stories her mother told her about Rayquaza. Her wish resonates with Hyperspace Lumiose, allowing Team MZ to confront Rayquaza."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Legends%3A_Z-A",
        "situacao": "ok",
        "texto": "Pokémon Legends: Z-A é um jogo eletrônico de RPG de ação desenvolvido pela Game Freak e publicado pela Nintendo e The Pokémon Company para Nintendo Switch e Nintendo Switch 2. Parte da nona geração de jogos eletrônicos de Pokémon, é uma sequência dos títulos da sexta geração Pokémon X e Y (2013) e o segundo jogo da sub-série Pokémon Legends, seguindo Pokémon Legends: Arceus (2022). O jogo se passa\n[…]\nO jogo se passará na região de Kalos, que é baseada na França e foi introduzida pela primeira vez nos jogos eletrônicos de 2013, Pokémon X e Y. De acordo com seu trailer, o enredo se passa durante um projeto de renovação urbana em Cidade de Lumiose, que é baseada em Paris, sendo realizado por uma empresa chamada Quasartico, Inc. A Nintendo of America afirmou que o jogo se passará inteiramente dentro de Cidade de Lumiose, onde Pokémon coexistem com humanos em locais conhecidos como Wild Zones.\n[…]\nHá também um novo e misterioso fenômeno na Cidade de Lumiose, onde Pokémon selvagens Mega Evoluem espontaneamente e ficam descontrolados. Um dos objetivos do jogador é subjugar esses Pokémon Mega Evoluções rebeldes em batalhas contra chefes em tempo real, semelhantes às batalhas contra Pokémon Nobres do jogo anterior, Pokémon Legends: Arceus.\n[…]\nApós encontrarem uma manifestação onírica de AZ e se despedirem, eles batalham contra Darkrai, que sofre uma Mega Evolução rebelde. O jogador captura Darkrai, estabilizando o Hiperespaço Lumiose.\n[…]\nLegends Z-A recebeu críticas \"geralmente favoráveis\" de acordo com o site agregador de análises Metacritic. No OpenCritic, o jogo recebeu uma classificação de aprovação \"Forte\" dos críticos. Alana Hagues, do Nintendo Life, elogiou as batalhas, bem como o desempenho do jogo no Nintendo Switch 2, mas criticou os visuais por serem \"sem vida e muito planos\". Hagues também sentiu que o cenário Cidade de Lumiose do jogo era restritivo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Pokémon Ruby e Sapphire",
      "descricao": "Par de jogos Pokémon da terceira geração, para Game Boy Advance, ambientado na região de Hoenn."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon Ruby e Sapphire, os primeiros jogos principais da série para o Game Boy Advance, saíram no Japão em que ano?",
    "resposta": "2002",
    "distratores": [
      "2000",
      "2001",
      "2003"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ruby_and_Sapphire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ruby_and_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Ruby Version and Pokémon Sapphire Version are 2002 role-playing video games developed by Game Freak for the Game Boy Advance. Although the games were published by Nintendo internationally in 2003, The Pokémon Company published them in Japan in late 2002, making them the first mainline games to have this distinction, as well as the second games to have it overall, after Pokémon Card GB2: Gr\n[…]\nPokémon Ruby and Sapphire were released in Japan on November 21, 2002, in North America on March 19, 2003, in Australia on April 3, 2003, and in Europe on July 25, 2003. Nintendo did not promote Ruby and Sapphire at E3 2002; however, it launched a US$ $7 million promotional campaign that lasted from March to May 2003. In July and August 2002 they were promoted through a tour across Japan at Pokémon Festa 2002.\n[…]\nOther complaints included the removal of the time system of Gold and Silver and the inability to import Pokémon from the games of previous generations.\n[…]\nPokémon Ruby and Sapphire were highly anticipated. In Japan, they sold 1.25 million units within the first four days of release and were the best-selling games of the 2002 holiday season; sales totaled around 4.4 million within six weeks of release. They also became the first games to sell 2 million copies in Japan since 2001's Final Fantasy X and the first games for a handheld console to do so since 2000's Yu-Gi-Oh! Duel Monsters 4.\n[…]\nNintendo referred to the game as \"the most exclusive Pokémon software ever offered to North American Pokémon fans,\" but it was generally considered to be unnecessary, receiving a score of 50% on GameRankings from 1 review. Craig Harris of IGN gave the game a \"Meh\" rating of 5.0 out of 10, praising the interface, which makes the organization of Pokémon much easier as compared to the Game Boy Advance interface, as well as the emulator which allows Ruby and Sapphire to be played on the GameCube."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ruby_e_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Ruby e Pokémon Sapphire (ポケットモンスター ルビー&サファイア, Poketto Monsutā Rubī & Safaia) são dois jogos que correspondem à terceira geração da série Pokémon. Desenvolvidos pela Game Freak e publicados pela Nintendo para Game Boy Advance, foram lançados no Japão em 21 de Novembro de 2002 e lançado no resto do mundo no ano seguinte, em 2003. Pokémon Emerald, uma versão especial do jogo, foi lançada dois\n[…]\nPokémon Ruby  e Sapphire foram desenvolvidos pela Game Freak e Nintendo sob a direção de Junichi Masuda. Tal como nos antecessores, Ken Sugimori também era diretor, mas nos primeiros jogos ele não produziu sozinho toda a arte.[carece de fontes]? Quando perguntado da onde sua equipe de design tirou ideias para os novos Pokémon, Sugimori responde que elas vieram de experiências passadas na infância, envolvendo a natureza, animais e os meios de comunicação.\n[…]\nRuby  e Sapphire também foram a primeira série a não ter todos os Pokémon das gerações anteriores. Sugimori afirmou que a equipe tentou introduzir novos Pokémon bem como alguns dos jogos passados. Quando perguntado sobre recursos que não poderiam ser incluídos devido a restrições técnicas, Masuda fala que queria que cada Pokémon emitisse três sons diferentes, dependendo do seu humor.\n[…]\nA Nintendo não promoveu Ruby  e Sapphire na convenção E3 2002; no entanto, investiu $7 milhões em campanhas promocionais que duraram de março a maio de 2003. Além de compensar as pessoas que fizeram a pré-encomenda dos jogos com outro produto da franquia, a Nintendo realizou um concurso no qual os participantes mandavam vídeos deles mesmos cantando o tema de Pokémon com as letras reescritas; o vencedor do evento ganhou um PT Cruiser Lugia.\n[…]\nPokémon Ruby  e Sapphire tiveram uma aprovação de 84% dos que votaram no site Game Rankings.\n[…]\nDetalhes de Pokémon Ruby  e Sapphire no Pokemon-Games.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Pokémon Diamond e Pearl",
      "descricao": "Par de jogos Pokémon da quarta geração, para Nintendo DS, ambientado na região de Sinnoh."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Diamond e Pearl, que levaram a série principal ao Nintendo DS e à região de Sinnoh, chegaram às lojas japonesas em que ano?",
    "resposta": "2006",
    "distratores": [
      "2004",
      "2005",
      "2007"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Diamond_and_Pearl"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Diamond_and_Pearl",
        "situacao": "ok",
        "texto": "Pokémon Diamond Version and Pokémon Pearl Version are role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS in 2006. They are the first installments in the fourth generation of the Pokémon video game series. They were first released in Japan on September 28, 2006, and released in North America, Australia, and Europe in 2007. Pokémon \n[…]\nThough Diamond and Pearl were expected to be released in Japan by 2005, Nintendo revealed that the developers were still working on aspects of the gameplay and that the games would not be released until 2006. The company said that Diamond and Pearl would be able to communicate with Pokémon games for the Game Boy Advance, allowing players to transfer their Pokémon to the new games.\n[…]\nThe games were released in Japan on September 28, 2006. To commemorate the release, Nintendo sold a limited-edition DS Lite in Japanese Pokémon Center stores and through the Pokémon fan club by mail. The console featured the games' mascots Dialga and Palkia painted in silver and gold respectively on a metallic black finish. A two-disc soundtrack, Nintendo DS Pokémon Diamond & Pearl Super Music Collection, was also released in Japan on December 22, 2006.\n[…]\nFirst released in Japan in 2006, Pokémon Diamond and Pearl have the most successful launch week of games in the Pokémon series, and the best launch week for any Nintendo DS game for the country alone. Within forty-six days, the games sold three million units, becoming the fastest DS games to do so; by the end of the year, the number increased to five million units in just under three months, making Diamond and Pearl the best-selling Pokémon games in Japan.\n[…]\nIn the 2006 Famitsu Game Awards, Diamond and Pearl won the Best Hit award and tied with Final Fantasy XII for the Game of the Year award."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Diamond_e_Pearl",
        "situacao": "ok",
        "texto": "Pokémon Diamond Version e Pokémon Pearl Version (ポケットモンスター ダイヤモンド・パール, Poketto Monsutā Daiyamondo・Pāru; tradução: Monstros de Bolso Diamond・Pearl, em japonês Daiyamondo (Diamante) é um estrangeirismo, assim como Pāru (Pérola), pérola em japonês é 真珠 Shinju) são dois jogos eletrônicos de RPG de 2006, desenvolvidos pela Game Freak, publicados pela The Pokémon Company e Nintendo para consola portátil\n[…]\nEmbora Diamond e Pearl devessem ser lançados no Japão em 2005, a Nintendo revelou que os desenvolvedores ainda estavam trabalhando em aspectos da jogabilidade e que os jogos não seriam lançados até 2006. A empresa disse que Diamond e Pearl seriam capazes de se comunicar com jogos Pokémon para o Game Boy Advance, permitindo que os jogadores transferissem seus Pokémon para os novos jogos.\n[…]\nOs jogos foram lançados no Japão em 28 de setembro de 2006. Para comemorar o lançamento, a Nintendo vendeu uma edição limitada do DS Lite nas lojas japonesas do Pokémon Center e através do fã-clube Pokémon pelo correio. O console apresentava as mascotes dos jogos Dialga e Palkia pintadas em prata e ouro, respectivamente, em acabamento preto metálico. Uma trilha sonora de dois discos, Nintendo DS Pokémon Diamond e Pearl Super Music Collection, também foi lançada no Japão em 22 de dezembro de 2006.\n[…]\nLançados pela primeira vez no Japão em 2006, Pokémon Diamond e Pearl têm a semana de lançamento de jogos de maior sucesso da série Pokémon e a melhor semana de lançamento para qualquer jogo Nintendo DS apenas para o país. Em quarenta e seis dias, os jogos venderam três milhões de unidades, tornando-se os jogos DS mais rápidos a fazê-lo; no final do ano, o número aumentou para cinco milhões de unidades em pouco menos de três meses, tornando Diamond e Pearl os jogos Pokémon mais vendidos no Japão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Pokémon Sun e Moon",
      "descricao": "Par de jogos Pokémon da sétima geração, para Nintendo 3DS, ambientado na região tropical de Alola."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon Sun e Moon, que apresentaram a região tropical de Alola, chegaram ao Nintendo 3DS em que ano?",
    "resposta": "2016",
    "distratores": [
      "2014",
      "2015",
      "2017"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun and Pokémon Moon are 2016 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the seventh generation of the Pokémon video game series. First announced in February 2016, Sun and Moon were released worldwide on 18 November 2016, commemorating the franchise's 20th anniversary.\n[…]\nA pair of enhanced versions, Pokémon Ultra Sun and Pokémon Ultra Moon, were released for the same consoles on 17 November 2017.\n[…]\nThe games take place on a tropical archipelago, a group of islands known as the Alola Region. Joe Skrebels of IGN describes it as \"Pokémon's take on Hawaii\". During an interview at E3 2016, Shigeru Ohmori noted that Game Freak staff took trips to Hawaii to conduct research for Sun and Moon.\n[…]\nAccording to composer Junichi Masuda, who co-produced the game, the soundtracks used in Sun and Moon were based on traditional Hawaiian music styles. However, while it utilizes their core rhythms, Alola's music employs \"completely different\" melodies while still invoking a tropical island feel. On 30 November 2016 the Nintendo 3DS Pokémon Sun and Moon Super Music Complete, a four-disk soundtrack containing 169 songs, 160 from the games and 9 special tracks, was released in Japan.\n[…]\nThe international release, known as Pokémon Sun & Pokémon Moon: Super Music Collection, was released on iTunes on the same date.\n[…]\nIt is GameStop's best-selling game of 2016, outselling Call of Duty: Infinite Warfare. On its first day of release, Pokémon Sun and Moon shipped 10 million units worldwide. The games sold over 1.9 million copies in Japan in its first three days on the market and are Nintendo's biggest game launch of all time in Europe, with the United Kingdom and France launches selling 368,000 and 450,000 copies respectively within a week out of the continent's 1.5 million sales."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sun_e_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun (ポケットモンスター　サン, Poketto Monsutā San; \"Monstros de Bolso Sun\", que traduzido do inglês para o português significa Sol, Sol em japonês é 太陽 Taiyō) e Pokémon Moon (ポケットモンスター　ムーン, Poketto Monsutā Mūn; \"Monstros de Bolso Moon\"\", que traduzido do inglês para o português significa Lua, Lua em japonês é 月 Tsuki) são dois jogos eletrônicos de RPG de 2016, faz parte da sétima geração da série Pok\n[…]\nOs jogos acontecem em um arquipélago tropical, um grupo de ilhas conhecido como região de Alola. Joe Skrebels da IGN descreve-o como \"Pokémon\" takes no Havaí\". Durante uma entrevista na E3 2016, Shigeru Ohmori observou que a equipe da Game Freak fez viagens ao Havaí para realizar pesquisas para Sun e Moon.\n[…]\nOs primeiros compradores dos jogos receberam um Munchlax especial segurando Snorlium Z, permitindo-lhe usar um Movimento-Z exclusivo para Snorlax, a evolução de Munchlax, por meio de um evento de distribuição sem fio. Um trailer japonês foi revelado em 8 de setembro de 2016. Um Pokémon Sun e Moon com o tema New Nintendo 3DS XL foi lançado em 28 de outubro de 2016.\n[…]\nSemelhante a Pokémon Omega Ruby e Alpha Sapphire, uma demo especial foi lançada em 18 de outubro de 2016. Em 27 de outubro de 2016 durante o Financial Briefing da Nintendo, eles afirmaram que a demo foi baixada mais de 3,5 milhões de vezes, sendo a mais popular e mais rápida \"vendendo\" demo na história do 3DS. Pokémon Sun e Moon foram os jogos mais pré-encomendados na história da Nintendo. Os jogos também foram os lançamentos 3DS mais esperados em 2016, de acordo com Nielsen Game Rank.\n[…]\nÉ o jogo mais vendido da GameStop em 2016, superando as vendas de Call of Duty: Infinite Warfare. Em seu primeiro dia de lançamento, Pokémon Sun e Moon vendeu 10 milhões de unidades em todo o mundo.\n[…]\nPlaylist Pokémon Sun e Moon no YouTube  Canal Oficial da Pokémon em Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Pokémon Mystery Dungeon",
      "descricao": "Série de jogos derivados de Pokémon, com masmorras geradas ao acaso, em que um humano vive como pokémon."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No começo dos primeiros jogos Pokémon Mystery Dungeon, o jogador responde a um questionário de personalidade. O que as respostas decidem?",
    "resposta": "Em que pokémon ele se transforma",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon is a spin-off video game series from the main Pokémon series developed by Chunsoft. The games feature the fictional creatures called Pokémon who have the ability to speak human language navigating through a randomly generated dungeon using turn-based moves, common to Mystery Dungeon games. As of March 2020, there have been eleven games across five platforms, as well as seve\n[…]\nThe player assumes the role of a Pokémon that was transformed from a human, found by the player's Pokémon partner in the start of the game. Before the game starts, the player will need to go through a personality test; this will decide which Pokémon the player is in the game with the exception of the WiiWare games and Pokémon Mystery Dungeon: Gates to Infinity, where the player may choose their starter.\n[…]\nIn Pokémon Super Mystery Dungeon and Pokémon Mystery Dungeon: Rescue Team DX, one can choose a Pokemon to be after the personality test.\n[…]\nPokémon Mystery Dungeon: Explorers of Time & Darkness (2008), an anime adaption of Pokémon Mystery Dungeon: Explorers of Time and Explorers of Darkness.\n[…]\nPokémon Mystery Dungeon Animated Shorts (2015), an anime adaption of Pokémon Mystery Dungeon: Gates to Infinity.\n[…]\nPokémon Mystery Dungeon: Ginji's Rescue Team, a manga adaptation of Pokémon Mystery Dungeon: Blue Rescue Team and Red Rescue Team.\n[…]\nPokémon Mystery Dungeon: Blazing Exploration Team, a manga adaptation of Pokémon Mystery Dungeon: Explorers of Time, Explorers of Darkness, and Explorers of Sky.\n[…]\nPokémon Super Mystery Dungeon: Go For It! Novice Investigation Team!, a manga adaptation of Pokémon Super Mystery Dungeon.\n[…]\nThe Pokémon Mystery Dungeon series is regarded as the most popular branch of the wider franchise, with it taking over 70% of Mystery Dungeon sales and having a more active and broader community worldwide thanks to the crossover with the Pokémon franchise."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon (ポケモン不思議 (ふしぎ)のダンジョン, Pokemon Fushigi no Danjon; lit. Pokémon Masmorra Misteriosa) é uma série de jogos eletrônicos spin-offs da série principal Pokémon, desenvolvida pela Spike Chunsoft (antigamente Chunsoft). Os jogos apresentam criaturas fictícias chamadas Pokémon que podem falar a língua humana e explorar masmorras geradas aleatoriamente usando um sistema de turnos, que\n[…]\nO jogador assume o papel de um Pokémon que foi transformado a partir de um humano, encontrado pelo parceiro Pokémon do jogador no início do jogo. Antes de começar o jogo, o jogador precisa passar por um teste de personalidade; isso determinará qual Pokémon o jogador controlará no jogo, com exceção dos jogos para WiiWare e Pokémon Mystery Dungeon: Gates to Infinity, onde o jogador pode escolher seu titular.\n[…]\nEm Pokémon Super Mystery Dungeon e Pokémon Mystery Dungeon: Rescue Team DX, é possível escolher um Pokémon para ser após o teste de personalidade.\n[…]\nPouco depois do lançamento de Explorers of Sky no Japão, os títulos Pokémon Mystery Dungeon: Adventure Squad foram lançados para WiiWare exclusivamente no Japão. Sendo assim, são os primeiros e únicos jogos Pokémon Mystery Dungeon que nunca foram lançados no exterior. Eles foram inicialmente revelados como logotipos em panfletos distribuídos no McDonald's. Esses jogos utilizam os modelos 3D de Pokémon Rumble e My Pokémon Ranch, tornando-os os primeiros jogos a usar modelos em vez de sprites 2D.\n[…]\nExiste uma função de resgate onde os jogadores podem pedir a amigos para reviverem sua equipe. Ao usar o WiiConnect24, novas missões são adicionadas ao jogo enquanto o Wii está em modo de repouso, e os jogadores podem compartilhar dados salvos entre os três jogos.[carece de fontes]? Diferentemente de outros jogos da série Pokémon Mystery Dungeon, o jogador controla um Pokémon normal em vez de um humano transformado em Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Pokémon Go",
      "descricao": "Jogo de realidade aumentada para celular da Niantic, em que o jogador captura pokémon andando pelas ruas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Pokémon Go nasceu de uma brincadeira de primeiro de abril de 2014, em que era possível caçar pokémon dentro de qual serviço do Google?",
    "resposta": "Google Maps",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go",
        "situacao": "ok",
        "texto": "Pokémon Go (stylized as Pokémon GO) is a 2016 augmented reality (AR) mobile game originally developed and published by Niantic and since 2025 by Scopely Explore, in partnership with Nintendo and the Pokémon Company, for iOS and Android devices. The game uses GPS to locate, capture, train, and battle Pokémon. It is free-to-play, featuring a freemium model that includes in-app purchases for addition\n[…]\nThe concept of Pokémon Go originated from the Google Maps: Pokémon Challenge, an April Fools' Day project released by Google Maps on April 1, 2014, that was created by Google engineer Tatsuo Nomura as a 20% project. Niantic founder John Hanke contacted Nomura in 2014 after seeing the demo and proposed building a Pokémon game playable in the real world in the style of Niantic's transreality game Ingress.\n[…]\nNomura subsequently introduced Ingress to Tsunekazu Ishihara of the Pokémon Company, who took to the game and saw the proposed Pokémon collaboration as a fit for the series. Niantic, a Google subsidiary, used crowdsourced data from Ingress to create PokéStops and Gyms in Pokémon Go, incorporated Google Maps data to determine Pokémon locations, and integrated map displays from OpenStreetMap starting in December 2017.\n[…]\nIn 2015, Ishihara dedicated his speech to Iwata during the game's announcement on September 10, following Iwata's death two months earlier. Tatsuo Nomura, who transferred from Google to Niantic Labs in October 2014 after developing the Google Maps Pokémon Challenge, served as the game's director and product manager. The soundtrack was composed by Junichi Masuda, a longtime Pokémon series composer who also contributed to the game's design.\n[…]\nOn August 8, Pokémon Go reached the milestone of over 100 million downloads on Google Play alone after barely 33 days on the market.\n[…]\nMedia related to Pokémon Go at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_GO",
        "situacao": "ok",
        "texto": "Pokémon GO é um jogo eletrônico free-to-play de realidade aumentada voltado para smartphones. O jogo é desenvolvido e publicado pela Niantic, Inc., em colaboração com a Nintendo e a The Pokémon Company para as plataformas iOS e Android. O jogo foi inicialmente lançado em julho de 2016 para alguns países, eventualmente foi expandindo para o resto do mundo.\n[…]\nAo jogar Pokémon GO o usuário pode interagir com um mapa baseado no mundo real (inicialmente o Google Maps e atualmente o OpenStreetMap). O jogador se localiza e procura Pokémon por meio desse mapa. À medida que ele se desloca, o aplicativo vibra para avisar sobre a presença das criaturas virtuais pelo caminho.\n[…]\nO conceito para o jogo foi concebido em 2014 por Satoru Iwata da Nintendo e Tsunekazu Ishihara da The Pokémon Company como uma brincadeira de 1 de abril em colaboração com Google, chamado Pokémon Challenge. Ishihara tinha sido um desenvolvedor fã do jogo de realidade aumentada anterior da Niantic, Ingress, e viu o conceito do jogo como um jogo perfeito para série Pokémon. A Niantic eventualmente iria utilizar dados de Ingress para preencher locais com PokéStops e ginásios dentro de Pokémon GO.\n[…]\nO visual do acessório é uma combinação de uma Pokébola com o formato característico do pin usado no Google Maps. Segundo Hanke, A decisão de criar um dispositivo novo em vez de um aplicativo para smartwatches tem fundamento na acessibilidade a jogadores para os quais um relógio inteligente possa ser proibitivamente caro. O Plus, que teve um preço de pré-venda de US$34,99, foi catalogado no eBay por mais de US$100 após o fim dos estoques da Amazon, GameStop e da loja oficial Pokémon.\n[…]\nPokémon\n[…]\nPokémon Black 2 e White 2\n[…]\n«Página oficial de Pokémon» (em inglês)\n[…]\nPokémon GO no Facebook\n[…]\nPokémon GO no X\n[…]\n«Pokémon GO». para Google Play\n[…]\n«Pokémon GO». para App Store.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Cyrus",
      "descricao": "Chefe da Equipe Galáctica, vilão dos jogos Pokémon Diamond, Pearl e Platinum, da região de Sinnoh."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Diamond e Pearl, por que Cyrus, o chefe da Equipe Galáctica, quer controlar os lendários Dialga e Palkia?",
    "resposta": "Para criar um novo universo",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Cyrus"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cyrus",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Pokémon Stadium",
      "descricao": "Jogo de batalhas Pokémon em 3D para Nintendo 64, que permitia usar pokémon dos jogos de Game Boy."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Ocidente, Pokémon Stadium vinha com um acessório que, encaixado no controle do Nintendo 64, lia os cartuchos de Game Boy. Como ele se chamava?",
    "resposta": "Transfer Pak",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Stadium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Stadium",
        "situacao": "ok",
        "texto": "Pokémon Stadium is a 1999 strategy video game developed and published by Nintendo for the Nintendo 64. The gameplay revolves around a 3D turn-based battling system using the 151 Pokémon from the Game Boy games Pokémon Red, Blue, and Yellow, with several in-game challenges for players to overcome. The game includes four \"Cups\", each of which is a series of three-on-three Pokémon battles against an \n[…]\nUnlike the previous games in the series, Pokémon Red, Blue, and Yellow, Pokémon Stadium does not have storyline-driven gameplay. Stadium takes a more battle-focused approach with its gameplay, which functions similarly to Red, Blue, and Yellow. Players select teams of six Pokémon to battle. These are either Pokémon collected from Pokemon Red, Blue, Yellow usable via the Nintendo 64 Transfer Pak, or Pokémon with pre-determined movesets included in Pokemon Stadium.\n[…]\nPokémon Stadium features other game-modes. The Pokémon Lab feature allows players to connect with Pokémon Game Boy game cartridges via the Nintendo 64 Transfer Pak. A player's stored Game Boy Pokémon can be organized and traded in the Lab, and players can view Pokedex information and models for particular species.\n[…]\nPlayers can store Pokémon and items from the Game Boy games in Stadium, and allows players to transfer Pokémon stored on Pokémon Red, Blue, and Yellow Game Boy cartridges to Stadium, where they can be used in Stadium's battle modes. Players can play the Game Boy games through Stadium via the connection.\n[…]\nMonths after its debut, a follow-up to Pokémon Stadium, tentatively titled Pokémon Stadium Gold/Silver, was announced by Nintendo. The game was released in 2000 as Pokémon Stadium 2, featuring every Pokémon from Stadium as well as those released in Pokémon Gold and Silver. Transfer Pak compatibility is included for Pokémon Gold, Silver, and Crystal as well as Pokémon Red, Blue, and Yellow."
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
    "indice": 19,
    "ancora": {
      "nome": "Pokémon Sleep",
      "descricao": "Aplicativo da franquia Pokémon, lançado em 2023, que mede o sono do jogador e o transforma em jogo."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em Pokémon Sleep, o aplicativo mede o sono do jogador, e cada ilha gira em torno de um pokémon gigante e dorminhoco. Que pokémon é esse?",
    "resposta": "Snorlax",
    "distratores": [
      "Slowpoke",
      "Munchlax",
      "Komala"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sleep"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sleep",
        "situacao": "ok",
        "texto": "Pokémon Sleep is a sleep-tracking video game that rewards the user with Pokémon depending on the quality of their sleep. The app was first released in Japan, Australia, Canada, New Zealand, and Latin American countries for Android and iOS on July 17, 2023.\n[…]\nPlayers are given a Snorlax by Professor Neroli to observe its sleeping patterns when they start playing for the first time. The player can give Snorlax berries and meals throughout the day. The more Snorlax is fed, the higher its power, and the more types of Pokémon it can attract. After reaching certain milestones with Snorlax's score, its rank will increase, allowing rarer visiting Pokémon after sleep.\n[…]\nWhen the player is finished reading their report, their Sleep Score is multiplied by Snorlax's score to give a final Drowsy Power. The higher Drowsy Power received, the more Pokémon the player will be visited by.\n[…]\nHowever, on 5 April 2021, a fan reported on Twitter that a SSL certificate had been registered for dev-eotxawxn.sleep.pokemon.co.jp.\n[…]\nA Pokémon Go APK data mine in January 2022 revealed several additions to the Pokémon Go app to integrate with Pokémon Sleep, including connecting to the Pokémon Go Plus + accessory, reviewing sleep patterns, and earning in-app rewards. These were confirmed by the Pokémon Day 2023 Pokémon Presents, in which they officially announced the Pokémon Go Plus + (Plus Plus) Accessory.\n[…]\nOn February 27, 2023, Pokémon Sleep was showcased during the Pokémon Presents and set for a release sometime in the summer of 2023. From July 6, 2023, Android users could pre-register the app. On July 17, 2023, Pokémon Sleep was rolled out in Australia, Canada, New Zealand, and Latin American countries."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sleep",
        "situacao": "ok",
        "texto": "Pokémon Sleep é um jogo móvel para Android e iOS que recompensa o usuário com Pokémon dependendo da qualidade de seu sono. O aplicativo foi primeiramente lançado na Austrália, Canadá, Nova Zelândia e na América Latina no dia 17 de julho de 2023.\n[…]\nJogadores são dados um Snorlax pelo Professor Neroli para observar seus padrões de sono quando começam a jogar pela primeira vez. O jogador consegue dar frutas e refeições a Snorlax durante o dia. Quanto mais você alimenta Snorlax, maior o seu poder, e mais tipos de Pokémon consegue atrair. Depois de chegar em certos marcos com a pontuação de Snorlax, seu ranque irá aumentar, permitindo Pokémon visitantes mais raros após o sono.\n[…]\nQuando o jogador termina de ler sua análise, sua Pontuação de Sono é multiplicada pela pontuação de Snorlax para dar um Poder Sonolento final. Quanto mais Poder Sonolento recebido, por mais Pokémon o jogador será visitado.\n[…]\nPokémon são classificados nos mesmos três tipos diferentes de sono listados anteriormente. Baseado no tipo de sono que o jogador recebeu, ele conseguirá aquele tipo de Pokémon visitando-o. Pokémon têm múltiplos estilos de sono que são salvos na Sleep-Style Dex. Depois de salvar os estilos de sono dos Pokémon visitantes, o jogador pode alimentá-los com PokéBiscuits para ganhar amizade com eles.\n[…]\nUma mineração de dados do Pokémon GO APK em janeiro de 2022 revelou diversas adições do aplicativo Pokémon Go para integrar com Pokémon Sleep, incluindo poder se conectar com o acessório Pokémon Go Plus +, reavaliar padrões de sono, e conseguir recompensas dentro do aplicativo. Estas foram confirmadas pelo Pokémon Day 2023 Pokémon Presents, onde oficialmente anunciaram o acessório Pokémon Go Plus + (Plus Plus).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Cynthia",
      "descricao": "Campeã da Liga Pokémon de Sinnoh nos jogos Diamond, Pearl e Platinum."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Cynthia, campeã da Liga de Sinnoh, é lembrada como uma das batalhas mais difíceis da série. Que dragão é o pokémon principal do time dela?",
    "resposta": "Garchomp",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Cynthia"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cynthia",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Pokémon Yellow",
      "descricao": "Versão especial de Pokémon Red e Blue, para Game Boy, inspirada no anime, em que o inicial é um Pikachu que segue o jogador."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Yellow, inspirado no anime, o jogador começa a jornada com um Pikachu. Com qual pokémon começa o rival?",
    "resposta": "Eevee",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Yellow"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Yellow",
        "situacao": "ok",
        "texto": "Pokémon Red Version and Pokémon Blue Version are popular 1996 role-playing video games (RPGs) developed by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon video game series and were first released in Japan as Pocket Monsters Red and Pocket Monsters Green, followed by the special edition Pocket Monsters Blue later that year.\n[…]\nThe games were released internationally in 1998 and 1999 as Pokémon Red and Pokémon Blue, while an enhanced version, Pokémon Yellow Version: Special Pikachu Edition, was released in Japan in 1998 and in other regions in 1999 and 2000.\n[…]\nTwo years after Red, Green and Blue Nintendo released Pokémon Yellow, an enhanced version of Red and Blue, in Japan in 1998, and in North America and Europe in 1999 and 2000. The game was designed to resemble the Pokémon anime series, with the player receiving a Pikachu as their starter Pokémon and their rival starting with an Eevee. Some non-player characters resemble those from the anime, including Team Rocket's Jessie and James.\n[…]\nThis feature was used again in Pokémon HeartGold and SoulSilver, the remakes of Pokémon Gold and Silver, and Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!, the remakes of Pokémon Yellow. Yellow includes a \"Pikachu's Beach\" minigame that is only accessible to players who either won a Nintendo contest or complete a challenge in another game, Pocket Monsters Stadium or Pokémon Stadium, and exchange data between the games using the Transfer Pak.\n[…]\nPokémon: Let's Go, Pikachu! and Pokémon: Let's Go, Eevee! are enhanced remakes of Pokémon Yellow Version, released in November 2018 for the Nintendo Switch. They were aimed at newcomers to the Pokémon series, and incorporate mechanics from Pokémon Go. The games take place in the Kanto region and include only the original 151 Pokémon from the first generation of Pokémon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Red_%26_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version e Pokémon Blue Version, lançados no Brasil oficialmente como Pokémon Versão Vermelho e Pokémon Versão Azul, são dois jogos eletrônicos de RPG de 1996, desenvolvidos pela Game Freak e publicados pela Nintendo para o console portátil Game Boy. São os primeiros jogos eletrônicos da série Pokémon.\n[…]\nPokémon Yellow, uma versão inspirada no anime da franquia, foi lançada no Japão em 1998 e em outras regiões em 1999 e 2000. As recriações de Red e Green, Pokémon FireRed e LeafGreen, foram lançados para o Game Boy Advance em 2004. Red, Blue e Yellow — além de Green no Japão — foram relançados no serviço Virtual Console de Nintendo 3DS em 2016 como uma comemoração do 20º aniversário da franquia.\n[…]\nPara obter todas as 151 criaturas, os jogadores devem capturar, evoluir e negociar os Pokémon entre si.\n[…]\nO jogador começa em sua cidade natal, a Cidade de Pallet. Depois de tentar prosseguir para fora da cidade, o jogador é interrompido pelo Professor Carvalho, um famoso pesquisador Pokémon. O Professor Carvalho explica ao jogador que Pokémon selvagens podem estar morando naquele local e encontrá-los sozinho pode ser muito perigoso. Ele leva o jogador para seu laboratório, onde o jogador conhece o neto de Carvalho, um aspirante a Treinador Pokémon rival.\n[…]\nLá, o jogador enfrentará a Elite dos Quatro e finalmente, o novo campeão: o rival do jogador. Além disso, ao longo do jogo, o jogador terá que lutar contra a Equipe Rocket, uma organização criminosa da região de Kanto que roubam Pokémon. Eles elaboram vários planos para roubar Pokémon raros, como os lendários da região de Kanto.\n[…]\nEssas versões dos jogos são capazes de transferir Pokémon para Pokémon Sun e Moon por meio do aplicativo Pokémon Bank.\n[…]\nPokémon Yellow\n[…]\nPokémon Gold & Silver\n[…]\nPokémon FireRed e LeafGreen",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Silver (rival)",
      "descricao": "Rival ruivo do protagonista nos jogos Pokémon Gold, Silver e Crystal, que rouba um pokémon inicial do laboratório."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Nos jogos de Johto, o rival ruivo que rouba um pokémon do laboratório do Professor Elm tem que parentesco com Giovanni, da Equipe Rocket?",
    "resposta": "É filho dele",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Silver_(game)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Silver_(game)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Steven Stone",
      "descricao": "Campeão da Liga Pokémon de Hoenn nos jogos Ruby e Sapphire, colecionador de pedras raras."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Steven Stone, campeão de Hoenn em Ruby e Sapphire e apaixonado por pedras raras, é filho do presidente de qual empresa?",
    "resposta": "Corporação Devon",
    "distratores": [
      "Silph Co.",
      "Macro Cosmos",
      "Fundação Aether"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Steven_Stone"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Steven_Stone",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Blue (rival)",
      "descricao": "Rival do protagonista e neto do Professor Carvalho nos jogos Pokémon Red, Green e Blue, chamado Green no Japão."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Japão, o rival do primeiro jogo Pokémon, neto do professor, se chama Green. No Ocidente, ele ganhou o nome de qual outra cor?",
    "resposta": "Blue (azul)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Blue_(game)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Blue_(game)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Alola",
      "descricao": "Região tropical formada por ilhas, cenário dos jogos Pokémon Sun e Moon, da sétima geração."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome da região de Alola, dos jogos Sun e Moon, é uma variação de qual saudação havaiana?",
    "resposta": "Aloha",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Alola"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Alola",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Pokédex",
      "descricao": "Enciclopédia eletrônica dos jogos e do anime Pokémon, que registra os dados dos pokémon vistos e capturados."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Pokédex, a enciclopédia eletrônica que o treinador carrega, junta a palavra Pokémon com qual palavra em inglês?",
    "resposta": "Index (índice)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Pokémon Scarlet e Violet",
      "descricao": "Par de jogos Pokémon da nona geração, lançado em 2022 para o Nintendo Switch e ambientado na região de Paldea."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Em qual par de jogos, lançado em 2022, a série principal de Pokémon ganhou pela primeira vez um mundo totalmente aberto?",
    "resposta": "Pokémon Scarlet e Violet",
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
        "texto": "Pokémon Scarlet (ポケットモンスター スカーレット, Poketto Monsutā Sukāretto, Monstros de Bolso Escarlate) e Pokémon Violet (ポケットモンスター バイオレット, Poketto Monsutā Baioretto, Monstros de Bolso Violeta) são dois jogos eletrônicos de RPG desenvolvidos pela Game Freak e publicados pela Nintendo e The Pokémon Company para Nintendo Switch. Eles são os primeiros parcelas da nona geração da série de jogos eletrônicos Pokémon\n[…]\nScarlet e Violet se passa na região de Paldea, que é baseada na Península Ibérica, principalmente na Espanha e em Portugal. Diferentemente dos jogos Pokémon anteriores, estes apresentam um mundo aberto. Existem três histórias separadas que o jogador pode completar. Scarlet e Violet apresentam 120 novos Pokémon, juntamente com duas novas formas regionais e criaturas deslocadas no tempo conhecidas como Pokémon Paradoxo.\n[…]\nScarlet e Violet têm mundos abertos, que incluem tanto áreas urbanas quanto áreas selvagens abertas, sem fronteiras entre as duas, ao contrário dos jogos anteriores da série Pokémon. Os jogadores podem usar Koraidon ou Miraidon, dependendo da versão do jogo, como montaria no mundo aberto, o que lhes permite acessar diversas habilidades que podem ser usadas para atravessar o terreno de Paldea.\n[…]\nEm 11 de janeiro de 2024, o epílogo do DLC, Mochi Mayhem, foi lançado, onde o jogador retorna à terra de Kitakami para capturar um novo Pokémon Mítico, Pecharunt.\n[…]\nDe acordo com a The Pokémon Company, Scarlet e Violet são os títulos mais pré-encomendados da história da série. Três dias após seu lançamento, os jogos venderam mais de 10 milhões de cópias em todo o mundo, incluindo 4,05 milhões apenas no Japão. O número de vendas foi o mais alto de qualquer software em qualquer plataforma Nintendo em três dias, e o melhor lançamento de qualquer jogo exclusivo de console na história. Os jogos foram os títulos de jogos eletrônicos mais vendidos de 2022 no Japão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Pokémon Unite",
      "descricao": "Jogo de batalhas em equipe da franquia Pokémon, lançado em 2021, desenvolvido pelo TiMi Studio Group."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Pokémon Unite, jogo de batalhas de cinco contra cinco, foi desenvolvido pelo estúdio TiMi, que pertence a qual gigante chinesa da tecnologia?",
    "resposta": "Tencent",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Unite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Unite",
        "situacao": "ok",
        "texto": "Pokémon Unite (stylized as Pokémon UNITE) is a 2021 free-to-play multiplayer online battle arena video game developed by TiMi Studio Group and published by The Pokémon Company worldwide and by Tencent Games in China for Android, iOS, and Nintendo Switch. It was announced in a Pokémon Presents presentation on 24 June 2020 as a partnership between The Pokémon Company and TiMi Studio Group owner Tenc\n[…]\nPokémon Unite is a multiplayer online battle arena game in the manner of TiMi's previous title Honor of Kings, with standard matches consisting of two teams, each with 5 players. Each match is limited to 10 minutes in duration, and the team with the highest total score by the end of each match wins. If there is a tie, the team that reached the final score first (i.e. was previously leading in points) wins.\n[…]\nTiMi Studios Group, a Chinese video game developer and subsidiary of Tencent Games, began a closed beta test for Pokémon Unite in January 2021. This test was limited to select players in China. In February 2021, The Pokémon Company announced that another closed beta test would be scheduled for March 2021, this time specifically for Canadian Android smartphone users.\n[…]\nBy 16 September 2021, the game had been downloaded over 9 million times on the Switch, with over 7.5 million mobile pre-registrations prior to the 22 September mobile release. By 1 October, research company Sensor Tower reported that Unite has been downloaded 30 million times for mobile devices, while The Pokémon Company confirmed that the game has been downloaded over 25 million times on all platforms by 4 October.\n[…]\nPokémon Unite won awards for \"Best Game\" at Google Play's Best of 2021, and \"Mobile Game of the Year\" at the 25th Annual D.I.C.E. Awards. The game also received a nomination for \"Best Mobile Game\" during the 2021 Game Awards."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Unite",
        "situacao": "ok",
        "texto": "Pokémon UNITE é um jogo eletrônico gratuito de batalha multijogador online (MOBA), desenvolvido pela TiMi Studios e publicado pela The Pokémon Company, anunciado na Pokémon Presents em 2020 e lançado em 2021.\n[…]\nPokémon UNITE é um jogo de arena de batalha multijogador online com partidas que consistem em duas equipes de cinco jogadores. O mapa do jogo é dividido em duas metades, com vários pontos de controle cada. Os jogadores marcam pontos para sua equipe derrotando Pokémon \"selvagens\" de IA (referido como captura no jogo) e movem-se em direção a um dos pontos de controle para marcar \"gols\". Cada partida é limitada no tempo e o time com a maior pontuação total no final de cada partida vence o jogo.\n[…]\nOs jogadores começam cada jogo controlando Pokémon não evoluídos de baixo nível, que podem aumentar seu nível e obter acesso a novos movimentos de combate à medida que vence as batalhas. A eficácia do tipo, uma característica comum em jogos Pokémon, está ausente do Pokémon UNITE. Por outro lado, o jogo inclui uma mecânica \"Unite move\" exclusiva para cada personagem Pokémon.\n[…]\nOs planos para um jogo Pokémon sendo desenvolvido por uma empresa de jogo eletrônico chinesa remontam a 2004, com uma ideia para um MMO Pokémon a ser desenvolvido pela iQue foi revelada durante o vazamento de dados da Nintendo em 2020. Um beta fechado para o jogo foi lançado, inicialmente apenas na China.\n[…]\nA empresa japonesa The Pokémon Company anunciou o Unite em uma apresentação da Pokémon Presents em 24 de junho de 2020, que estava em desenvolvimento pela TiMi Studios.\n[…]\n«Pokémon Unite». na NintendoStore\n[…]\nPokémon Unite no Google Play\n[…]\n«Pokémon Unite». na AppleStore",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Pokkén Tournament",
      "descricao": "Jogo de luta da franquia Pokémon, lançado em 2015, que mistura Pokémon com a jogabilidade de Tekken."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Pokkén Tournament, o jogo de luta com pokémon, foi feito pela empresa da série Tekken. Que empresa é essa?",
    "resposta": "Bandai Namco",
    "distratores": [
      "Capcom",
      "Sega",
      "Koei Tecmo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pokk%C3%A9n_Tournament"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pokk%C3%A9n_Tournament",
        "situacao": "ok",
        "texto": "Pokkén Tournament is a 2015 fighting video game developed by Bandai Namco Entertainment. The game combines gameplay elements from Bandai Namco's Tekken series and other fighting games, such as 3D and 2D movement, with characters from the Pokémon franchise. It was released for Japanese arcades in July 2015 and worldwide for the Wii U in March 2016. An enhanced port for the Nintendo Switch, Pokkén T\n[…]\nThe arcade version was published by Bandai Namco, the Japanese console versions were published by The Pokémon Company, and the console versions outside of Japan were published by Nintendo.\n[…]\nPokkén Tournament is a fighting game in which two fighters battle against each other using various Pokémon, with gameplay shifting between \"Field Phase\" where the Pokémon move freely around the arena similar to Power Stone and Naruto: Ultimate Ninja Storm, and \"Duel Phase\" where they move relative to each other similar to the Tekken games.\n[…]\nPokkén Tournament was first teased during a Pokémon Game Show event held in Japan in August 2013, with trademarks for the game filed the same month. It was officially announced at an event held by Famitsu on August 26, 2014. The Pokémon Company CEO Tsunekazu Ishihara, Tekken series producer Katsuhiro Harada, and Soulcalibur producer Masaaki Hoshino attended the event, which was broadcast on Niconico, stating the collaboration came about from brainstorming ideas of new ways to play Pokémon.\n[…]\nWestern reviews of the console version were mostly positive, earning a 76 out of 100 average score from aggregate review website Metacritic. In the United States, the NPD Group reported that Pokkén Tournament outsold Street Fighter V by the end of April 2016. In August 2016, Bandai Namco announced that the game had shipped over one million copies worldwide."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pokk%C3%A9n_Tournament",
        "situacao": "ok",
        "texto": "Pokkén Tournament é um videojogo de luta arcade produzido pela Bandai Namco. O jogo combina elementos da série Tekken com personagens do jogo Pokémon da The Pokémon Company. Foi lançado nas arcadas japonesas a 16 de junho de 2015 e portado para Wii U a 18 de março de 2016.\n[…]\nA jogabilidade de Pokkén Tournament é semelhante a Tekken. Diferentemente da maioria dos jogos de luta de arcade, que usam um joystick e botões tradicional, a versão arcade é jogado com comandos de estilo da consola, que são projetados de modo que os jogadores que não estão habituados a arcada entrem no jogo mais facilmente. O jogo se concentra mais na ação, ao contrário do jogo mais técnico de Tekken, permitindo tanto a fãs hardcore e casuais possam apreciá-lo.\n[…]\nOs jogadores podem executar várias técnicas retirados da série Pokémon, como movimentos especiais e mega evoluções.\n[…]\nO jogo inicia com 21 Pokémon jogáveis:\n[…]\nO jogo inicia com 30 personagens auxiliares:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Professora Juniper",
      "descricao": "Professora pokémon da região de Unova, que entrega o inicial ao jogador em Pokémon Black e White."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Black e White, quem entrega o pokémon inicial é a primeira mulher a ocupar o papel de professora pokémon nos jogos principais. Qual é o nome dela?",
    "resposta": "Professora Juniper",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Juniper"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Professor_Juniper",
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
