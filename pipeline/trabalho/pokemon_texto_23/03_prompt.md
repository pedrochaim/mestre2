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
      "nome": "Creatures",
      "descricao": "Empresa japonesa de jogos coproprietária da marca Pokémon, responsável pelo card game e por jogos derivados como Detetive Pikachu."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A Creatures, uma das três empresas donas da marca Pokémon, foi fundada em 1995 por qual executivo, que depois passou a presidir a The Pokémon Company?",
    "resposta": "Tsunekazu Ishihara",
    "fonte": [
      "https://en.wikipedia.org/wiki/Creatures_Inc.",
      "https://en.wikipedia.org/wiki/The_Pok%C3%A9mon_Company"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Creatures_Inc.",
        "situacao": "ok",
        "texto": "Creatures Inc. is a Japanese video game company. It is best known for being affiliated with Game Freak and Nintendo, and is one of the owners of the Pokémon franchise. It was founded by Tsunekazu Ishihara in November 1995, with the assistance of then-president of HAL Laboratory, Satoru Iwata, as a successor to Shigesato Itoi's company Ape Inc.\n[…]\nAlongside Game Freak and Nintendo, Creatures established and jointly own The Pokémon Company.\n[…]\nApe Inc. was founded in March 1989 with Shigesato Itoi as its chief executive officer (CEO). Nintendo president Hiroshi Yamauchi had wanted to support new talent in game design. Liking Itoi's work, he proposed the idea of the company to Itoi and invested in it. Ape's staff included Tsunekazu Ishihara, who later became The Pokémon Company's president, and Ashura Benimaru Itoh, a renowned illustrator. They began working on Mother, which was released on 27 July 1989.\n[…]\nCreatures Inc. was established on 8 November 1995, with Tsunekazu Ishihara as CEO, and consisting of former staff from Ape. In 2000, Hirokazu Tanaka, a.k.a. Hip Tanaka, a former Nintendo composer and sound designer, who joined Creatures in 1999, became President of the company as Ishihara went to become the President of The Pokémon Company in 2000, while still holding his CEO position in Creatures.\n[…]\nIn April 2023, Creatures announced that Tsunekazu Ishihara has stepped down at his position as CEO and executive director, and Hirokazu Tanaka has stepped down as president and executive director. Ishihara continues as the President of The Pokémon Company, and will continue to commit to the management of the company as a founder, while Tanaka will remain as Creative fellow.\n[…]\nYuji Kitano assume Creatures as CEO and President; meanwhile, Tomotaka Komura will step into the role of Executive vice president."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Pok%C3%A9mon_Company",
        "situacao": "ok",
        "texto": "The Pokémon Company (株式会社ポケモン, Kabushiki Gaisha Pokemon; TPC), formerly known as Pokémon Center Co., Ltd. (ポケモンセンター株式会社, Pokemon Sentā Kabushiki gaisha), is a Japanese company responsible for brand management, production, publishing, marketing, and licensing of the Pokémon franchise, which consists of video games, a trading card game, anime television series, films, manga, home entertainment produ\n[…]\nIn 1998, Nintendo, Creatures, and Game Freak established Pokémon Center Co., Ltd. in order to effectively manage the Pokémon Center stores in Japan. After the popularity of Pokémon Gold and Silver, they received many merchandising proposals from around the world. Companies were interested in working with the Pokémon brand. At that time, Tsunekazu Ishihara of Creatures was the person in charge of approving licensed products.\n[…]\nBecause of the sheer volume of products, Ishihara thought it was too much work for one person to handle. At the same time, in order for the franchise to continue, Ishihara wished to further expand the franchise with long-term goals, such as continuing the TV series, and releasing a movie every year. It was then decided that a new organization was needed in order to gather together all the strands of brand management.\n[…]\nSince 2001, nearly all Pokémon products are represented as \"©Pokémon\" in the copyright acknowledgments with the original three owners of \"©Nintendo\", \"©GAME FREAK inc.\" and \"©Creatures Inc.\" The three companies also have ownership of all of the Pokémon-related trademarks in Japan while Nintendo is the sole owner of Pokémon-related trademarks in other countries. Licensed toys are made by third- and second-party companies such as Tomy and Jazwares.\n[…]\nThe Pokémon Company\n[…]\nThe Pokémon Company International\n[…]\nThe Pokémon Company International Ireland Limited\n[…]\nThe Pokémon Company International Mexico, S. de R.L. de C.V.\n[…]\nPokémon manga\n[…]\nPokémon Detective Pikachu"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Creatures_%28empresa%29",
        "situacao": "ok",
        "texto": "Creatures Inc. (株式会社クリーチャーズ, Kabushiki-gaisha Kurīchāzu) é uma desenvolvedora japonesa de jogos eletrônicos sediada em Tóquio. Foi fundada em novembro de 1995 por Tsunekazu Ishihara, com auxilio de Satoru Iwata da HAL Laboratory, como uma sucessora da Ape Inc.. A Creatures é mais conhecida como a produtora das cartas de Pokémon e é uma das parceiras de negócio que forma a The Pokémon Company.\n[…]\nA Creatures foi estabelecida no dia 8 de novembro de 1995.\n[…]\nAntes, a Creatures era sediada no sétimo andar do prédio Nintendo Kanda Building (任天堂神田ビル, Nintendō Kanda Biru) em Sudachō, Chiyoda, Tóquio. Futuramente, sua sede passaria a ser no quinto andar do anexo do Kawasakiteitoku Building (川崎定徳ビル, Kawasakiteitoku Biru) em Nihonbashi, Chūō, Tóquio.\n[…]\nMario’s Super Picross (1995)\n[…]\nThe Monopoly Game 2 (1995)\n[…]\nPokémon Trading Card Game (1998)\n[…]\nPokémon Ranger (2006-2007, com a HAL Laboratory)\n[…]\nPokémon Ranger: Shadows of Almia (2008)\n[…]\nPokémon Ranger: Guardian Signs (2010)\n[…]\nPokémon Platinum (2009)\n[…]\nPokémon Soul Silver & Heart Gold (2010)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Pikachu",
      "descricao": "Pokémon do tipo Elétrico, número 25 da Pokédex Nacional."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que designer da Game Freak fez os primeiros desenhos de Pikachu, depois finalizados por Ken Sugimori?",
    "resposta": "Atsuko Nishida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pikachu",
      "https://pt.wikipedia.org/wiki/Pikachu"
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
        "texto": "Pikachu (ピカチュウ, Pikachū) é uma espécie fictícia pertencente à franquia de mídia Pokémon da Nintendo. Ele apareceu pela primeira vez no Japão em 1996, nos jogos eletrônicos Pokémon Red e Pokémon Green, sendo lançados fora do Japão em 1998 como Pokémon Red and Blue, e foi criado por Atsuko Nishida a pedidos do designer principal  Ken Sugimori.\n[…]\nGeralmente descrito como um rato elétrico, Pikachu foi criado pelo estúdio Game Freak e desenhado por Atsuko Nishida. Ele foi criado juntamente com a sua evolução, Raichu; a partir da segunda geração, ele também passou a ter uma pré-evolução, o Pichu. Pikachu é do tipo elétrico e ocupa a 25ª posição na Pokédex nacional, a enciclopédia que lista as diferentes espécies de Pokémon.\n[…]\nSegundo a ilustradora original Atsuko Nishida, o design de Pikachu foi inspirado por um esquilo.\n[…]\nPikachu apareceu pela primeira vez em 1996 nos jogos eletrônicos japoneses Pokémon Red e Green. E hoje está presente em quase todos os jogos eletrônicos da franquia, tendo geralmente um papel secundário; e ocupa um dos papéis centrais na série de televisão, filmes e mangás baseados no universo Pokémon, e no jogo eletrônico Pokémon Yellow. É também um dos Pokémons representados em Pokémon Trading Card Game.\n[…]\nOutros Pikachu selvagens e treinados aparecem na série, frequentemente interagindo com Ash e seu Pikachu. O mais notável é o Pikachu de Richie, Sparky. Como a maioria dos Pokémon existentes, Pikachu se comunica apenas através de sílabas de seu nome. Ele é dublado por Ikue Ōtani.\n[…]\nCards colecionáveis de Pikachu já existem desde o lançamento do jogo de cartas Pokémon Trading Card Game em 1996, incluindo cards em edições limitadas. O personagem também já foi usado em campanhas promocionais de redes de fast-food como McDonald's, Wendy's e Burger King. Também é alvo de diversas paródias.\n[…]\n«Pikachu». no site oficial"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pikachu Illustrator",
      "descricao": "Carta promocional rara do card game Pokémon, de 1998, dada aos vencedores de um concurso de ilustração da revista CoroCoro."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Em 2022, o youtuber Logan Paul pagou mais de cinco milhões de dólares por uma carta de Pokémon e entrou para o Guinness. Que carta era essa?",
    "resposta": "Pikachu Illustrator",
    "distratores": [
      "Charizard primeira edição",
      "Trophy Pikachu",
      "Blastoise de teste"
    ],
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
    "indice": 4,
    "ancora": {
      "nome": "Charizard holográfico do Base Set",
      "descricao": "Carta holográfica de Charizard da primeira coleção do card game Pokémon, uma das mais cobiçadas pelos colecionadores."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que ilustrador japonês desenhou o famoso Charizard holográfico da primeira coleção do card game Pokémon?",
    "resposta": "Mitsuhiro Arita",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Charizard_(Base_Set_4)",
      "https://bulbapedia.bulbagarden.net/wiki/Mitsuhiro_Arita"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Charizard_(Base_Set_4)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mitsuhiro_Arita",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Pokémon Estampas Ilustradas",
      "descricao": "Card game colecionável oficial da franquia Pokémon, lançado no Japão em 1996."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Numa partida padrão do card game Pokémon, cada jogador separa cartas de prêmio e vence quem pegar todas. Quantas cartas de prêmio são?",
    "resposta": "Seis",
    "distratores": [
      "Quatro",
      "Cinco",
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
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nOs jogadores assumem o papel de treinadores Pokémon envolvidos na batalha e jogam com baralhos de 60 cartas. As cartas de jogo padrão incluem cartas de Pokémon, cartas de energia e cartas de treinador. Os Pokémon são introduzidos na batalha de um \"banco\" e realizam ataques em seu oponente até esgotar seus pontos de saúde. Os ataques são ativados pela anexação de um número suficiente de cartas de energia ao Pokémon ativo.\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nCada jogador deve ter um deck de 60 cartas com pelo menos um Pokémon Básico. Um embaralha o deck do outro e coloca seis cartas viradas para baixo. Essas são as \"cartas prêmio\". Depois, os decks são devolvidos aos donos e cada um pega uma mão de sete cartas. Se não houver Pokémon Básicos, este reembaralha o deck e pega mais uma mão de sete cartas. O outro jogador tem a opção de pegar mais uma carta por nova mão do adversário.\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Pokémon Trading Card Game Pocket",
      "descricao": "Versão para celular do card game Pokémon, lançada em 2024, com abertura diária de pacotes e cartas digitais."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O TCG Pocket, versão do card game Pokémon para celular, foi desenvolvido pela Creatures junto com qual empresa japonesa, também responsável por Pokémon Masters?",
    "resposta": "DeNA",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game Pocket (often abbreviated as Pokémon TCG Pocket) is a free-to-play mobile adaptation of the Pokémon Trading Card Game (TCG), developed by Creatures Inc. and DeNA, and published by The Pokémon Company. The game was revealed on February 27, 2024 during a Pokémon Presents presentation,  had a soft-launch in New Zealand on September 26, 2024, and officially released on Octobe\n[…]\nDuring development, developer DeNA renamed its subsidiary, DeNA Digital Productions, to Pokémon Card D Studio, with the name change taking effect in April 2024. This was done to refocus development on the production of the game.\n[…]\nPokémon Trading Card Game Pocket was revealed on February 27, 2024 during a Pokémon Presents. The game's announcements caused a significant increase in developer DeNA's share price. At the closing ceremonies of the Pokémon World Championships in Hawaii, a new trailer for the game was released, revealing its official release date of October 30, 2024. In August, the Pokémon Company announced over 6 million people had pre-registered for the game.\n[…]\nThe game partnered with American fast food chain McDonald's for a promotion in January 2025, with Happy Meals including physical Pokémon cards as well as digital in-game rewards.\n[…]\nMacDonald also cited this sentiment, believing the game also had appeal due to being the first of the Trading Card Game's attempts to expand onto mobile phones to be received positively. Joshua Yehl, conversely, wrote for IGN that the differences between Pocket's gameplay and the main card game's had alienated some players, especially due to the recent release of Pokémon Trading Card Game Live, which directly adapted the game's gameplay for a mobile client but was met with negative reviews.\n[…]\nThe game's revenue has caused DeNA's profits to grow significantly, with the company reporting a 8,126.8% increase in profit as a result of the game."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game Pocket (frequentemente abreviado como Pokémon TCG Pocket), conhecido no Brasil como Pokémon Estampas Ilustradas Pocket, é uma adaptação para dispositivos móveis gratuita do Pokémon Trading Card Game (TCG), desenvolvido pela Creatures Inc. e DeNA, e publicado pela The Pokémon Company.\n[…]\nDurante o desenvolvimento, a desenvolvedora DeNA renomeou sua subsidiária, DeNA Digital Productions, para Pokémon Card D Studio, com a mudança de nome entrando em vigor em abril de 2024. Isso foi feito para redirecionar o desenvolvimento para a produção do jogo.\n[…]\nPokémon Trading Card Game Pocket foi revelado em 27 de fevereiro de 2024 durante um evento Pokémon Presents. Os anúncios do jogo causaram um aumento significativo no preço das ações da desenvolvedora DeNA. Na cerimônia de encerramento do Campeonato Mundial Pokémon no Havaí, um novo trailer do jogo foi lançado, revelando sua data de lançamento oficial: 30 de outubro de 2024. Em agosto, a Pokémon Company anunciou que mais de 6 milhões de pessoas haviam se pré-registrado para o jogo.\n[…]\nJoshua Yehl, por outro lado, escreveu para a IGN que as diferenças entre a jogabilidade de Pocket e a do jogo de cartas principal afastaram alguns jogadores, especialmente devido ao recente lançamento de Pokémon Trading Card Game Live, que adaptou diretamente a jogabilidade do jogo para um cliente móvel, mas recebeu críticas negativas.\n[…]\nInicialmente, havia preocupação de que o jogo não tivesse um bom desempenho financeiro devido à presença de um jogo para celular pré-existente do Pokémon Trading Card Game, o Pokémon Trading Card Game Live. O lançamento inicial do jogo na Nova Zelândia, em setembro de 2024, foi pequeno, arrecadando US$ 15.000 em gastos diários.\n[…]\nA introdução de Pokémon Shiny ao jogo resultou em um aumento de gastos de 265%.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Pokémon Trading Card Game Pocket",
      "descricao": "Versão para celular do card game Pokémon, lançada em 2024, com abertura diária de pacotes e cartas digitais."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No card game tradicional de Pokémon, o baralho tem sessenta cartas. No TCG Pocket, a versão de celular, quantas cartas tem cada baralho?",
    "resposta": "Vinte",
    "distratores": [
      "Trinta",
      "Quarenta",
      "Quinze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game Pocket (often abbreviated as Pokémon TCG Pocket) is a free-to-play mobile adaptation of the Pokémon Trading Card Game (TCG), developed by Creatures Inc. and DeNA, and published by The Pokémon Company. The game was revealed on February 27, 2024 during a Pokémon Presents presentation,  had a soft-launch in New Zealand on September 26, 2024, and officially released on Octobe\n[…]\nPokémon TCG Pocket serves as a mobile adaptation of the traditional trading card game, allowing players to collect cards, trade with friends, and build decks to engage in battles against other players. The game incorporates features designed for mobile gameplay, including daily rewards, while maintaining the core mechanics of the original TCG.\n[…]\nPokémon Trading Card Game Pocket was revealed on February 27, 2024 during a Pokémon Presents. The game's announcements caused a significant increase in developer DeNA's share price. At the closing ceremonies of the Pokémon World Championships in Hawaii, a new trailer for the game was released, revealing its official release date of October 30, 2024. In August, the Pokémon Company announced over 6 million people had pre-registered for the game.\n[…]\nThe game partnered with American fast food chain McDonald's for a promotion in January 2025, with Happy Meals including physical Pokémon cards as well as digital in-game rewards.\n[…]\nMacDonald also cited this sentiment, believing the game also had appeal due to being the first of the Trading Card Game's attempts to expand onto mobile phones to be received positively. Joshua Yehl, conversely, wrote for IGN that the differences between Pocket's gameplay and the main card game's had alienated some players, especially due to the recent release of Pokémon Trading Card Game Live, which directly adapted the game's gameplay for a mobile client but was met with negative reviews."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_Pocket",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game Pocket (frequentemente abreviado como Pokémon TCG Pocket), conhecido no Brasil como Pokémon Estampas Ilustradas Pocket, é uma adaptação para dispositivos móveis gratuita do Pokémon Trading Card Game (TCG), desenvolvido pela Creatures Inc. e DeNA, e publicado pela The Pokémon Company.\n[…]\nPokémon Trading Card Game Pocket foi revelado em 27 de fevereiro de 2024 durante um evento Pokémon Presents. Os anúncios do jogo causaram um aumento significativo no preço das ações da desenvolvedora DeNA. Na cerimônia de encerramento do Campeonato Mundial Pokémon no Havaí, um novo trailer do jogo foi lançado, revelando sua data de lançamento oficial: 30 de outubro de 2024. Em agosto, a Pokémon Company anunciou que mais de 6 milhões de pessoas haviam se pré-registrado para o jogo.\n[…]\nMacDonald também citou esse sentimento, acreditando que o jogo também tinha apelo por ser a primeira tentativa do Trading Card Game ​​de se expandir para celulares a ser recebida positivamente.\n[…]\nJoshua Yehl, por outro lado, escreveu para a IGN que as diferenças entre a jogabilidade de Pocket e a do jogo de cartas principal afastaram alguns jogadores, especialmente devido ao recente lançamento de Pokémon Trading Card Game Live, que adaptou diretamente a jogabilidade do jogo para um cliente móvel, mas recebeu críticas negativas.\n[…]\nAs cartas receberiam novas artes uma semana depois.\n[…]\nInicialmente, havia preocupação de que o jogo não tivesse um bom desempenho financeiro devido à presença de um jogo para celular pré-existente do Pokémon Trading Card Game, o Pokémon Trading Card Game Live. O lançamento inicial do jogo na Nova Zelândia, em setembro de 2024, foi pequeno, arrecadando US$ 15.000 em gastos diários.\n[…]\nA introdução de Pokémon Shiny ao jogo resultou em um aumento de gastos de 265%.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Game Freak",
      "descricao": "Estúdio japonês fundado por Satoshi Tajiri, responsável pelos jogos principais da série Pokémon."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Antes de virar estúdio, a Game Freak era uma revista sobre videogames feita por Satoshi Tajiri. Que futuro artista de Pokémon desenhava as ilustrações dela?",
    "resposta": "Ken Sugimori",
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
    "indice": 9,
    "ancora": {
      "nome": "The Pokémon Company",
      "descricao": "Empresa japonesa criada em 1998 para administrar a marca Pokémon, com participação da Nintendo, da Game Freak e da Creatures."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A empresa que hoje administra a marca Pokémon nasceu em 1998 para cuidar das lojas oficiais da franquia. Com que nome ela foi fundada?",
    "resposta": "Pokémon Center Company",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Pok%C3%A9mon_Company"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Pok%C3%A9mon_Company",
        "situacao": "ok",
        "texto": "The Pokémon Company (株式会社ポケモン, Kabushiki Gaisha Pokemon; TPC), formerly known as Pokémon Center Co., Ltd. (ポケモンセンター株式会社, Pokemon Sentā Kabushiki gaisha), is a Japanese company responsible for brand management, production, publishing, marketing, and licensing of the Pokémon franchise, which consists of video games, a trading card game, anime television series, films, manga, home entertainment produ\n[…]\nPokémon Center Co., Ltd. was founded in April 1998 through a joint investment by video game series developer Game Freak, original series publisher Nintendo, and Trading Card Game developer and original series producer Creatures to operate the Pokémon Center stores in Japan. In October 2000, it expanded its operations to cover the entire Pokémon franchise, and rebranded to its current name. The company is headquartered in the Roppongi Hills Mori Tower in Roppongi, Minato, Tokyo.\n[…]\nIn 1998, Nintendo, Creatures, and Game Freak established Pokémon Center Co., Ltd. in order to effectively manage the Pokémon Center stores in Japan. After the popularity of Pokémon Gold and Silver, they received many merchandising proposals from around the world. Companies were interested in working with the Pokémon brand. At that time, Tsunekazu Ishihara of Creatures was the person in charge of approving licensed products.\n[…]\nThis led the three companies to turn Pokémon Center Co., Ltd. into The Pokémon Company in order to further expand its scope, responsibilities, and areas of business. According to Satoru Iwata, establishing The Pokémon Company was one of his first projects at Nintendo.\n[…]\nManaging the Pokémon Center stores is still a pillar for the company. In total, there are stores in 11 locations: Sapporo, Tohoku (Sendai), Tokyo, Skytree Town (Oshiage), Tokyo-Bay (Chiba), Yokohama, Nagoya, Kyoto, Osaka, Hiroshima and Fukuoka.\n[…]\nThe Pokémon Company International Ireland Limited\n[…]\nPokémon Center Co., Ltd."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Pok%C3%A9mon_Company",
        "situacao": "ok",
        "texto": "The Pokémon Company (株式会社ポケモン, Kabushiki Gaisha Pokemon) (TPC) é uma empresa japonesa responsável pela gestão, publicação, marketing e licenciamento da franquia Pokémon, que consiste em jogos eletrônicos, jogo de cartas colecionáveis, animes, mangás, longa metragens, brinquedos entre outros produtos. A companhia possui um investimento conjunto com a Nintendo, Game Freak e Creatures, as quais detêm\n[…]\nA empresa tem divisões separadas que lidam com operações em diferentes partes do mundo, com The Pokémon Company International abrange os territórios fora da Ásia e Pacífico. Na Coreia do Sul, as operações são tratadas por Pokémon Korea, Inc.\n[…]\nA Pokémon Company também lida com a publicação de todos os jogos da franquia desde 2001 como seu principal editor. Ela é responsável pelo marketing e financiamento, enquanto a Nintendo lida com a distribuição dos títulos dentro do Japão e no mundo todo. Ambas as empresas trabalham juntas na localização, produção e outros aspectos.\n[…]\nAs operações da empresa começaram em 1998 com a abertura da loja Pokémon Center, em Tóquio, antes da marca real de Pokémon, Ltd. foi criada em 2000. Desde então, este ramo tem sido comercializado como The Pokémon Company. O ramo nos Estados Unidos, inaugurado em 2001 para lidar com licenciamento de seus produtos no exterior. Nintendo Australia faz todo licenciamento e comercialização de produtos na Austrália e Nova Zelândia, como The Pokémon Company não tem um filial australiano.\n[…]\nEm 2009, Pokémon EUA e Pokémon Reino Unido se uniram para formar The Pokémon Company International, que lida com operações americanas e européias de Pokémon, sob a administração de Kenji Okubo. Os escritórios da empresa nos Estados Unidos estão em Bellevue, Washington e seu escritório no Reino Unido estão em Londres. Operações na Austrália são controladas pela Nintendo Australia.\n[…]\nSérie de televisão da franquia Pokémon\n[…]\n«Página oficial»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Ingress",
      "descricao": "Jogo de realidade aumentada para celular lançado pela Niantic antes de Pokémon Go, em que os jogadores disputam portais em lugares reais."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Os ginásios e PokéStops de Pokémon Go foram herdados dos portais de um jogo anterior da Niantic, também de realidade aumentada. Que jogo era esse?",
    "resposta": "Ingress",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ingress_(video_game)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ingress_(video_game)",
        "situacao": "ok",
        "texto": "Ingress is an augmented reality (AR) mobile game currently developed and published by Niantic Spatial for Android and iOS devices. The game was released as a closed beta on November 15, 2012, for Android devices and then for iOS devices on July 14, 2014. The game is free-to-play, uses a freemium business model, and supports in-app purchases for additional in-game items. The mobile app has been dow\n[…]\nAn interview in 2013 described Ingress as a proof of concept for other AR games built on Google Maps' data. It was designed to be aimed at a niche market of gamers. Data from Ingress was used to populate the locations for PokéStops and Gyms within Pokémon Go released in July 2016. Niantic viewed Ingress Prime as an opportunity to innovate its gameplay design.\n[…]\nIn December 2017, Niantic announced that a thoroughly revamped version of the game, branded as Ingress Prime, would be released in 2018 using a completely rewritten client. The new version featured a subtly different backstory akin to a superhero origin story and a more florid graphic design. The new version used Apple's ARKit and Google's ARCore, and the network layer transitioned from JSON to Protobuf in keeping with the engineering style of Pokémon Go.\n[…]\nPrime launched on November 5, 2018, as an update to the existing Ingress game. Niantic also retained the older Ingress game and retroactively named the older app as Scanner [REDACTED]. The older Ingress app was intended to facilitate the transition to Prime, as feature parity between the two apps was reached in 2019. Niantic retired the older app on September 30, 2019.\n[…]\nIn November 2025, Niantic announced that Ingress Prime would be renamed to Ingress to mark the game's third iteration. The company explained their previous iterations as: Niantic Labs@Google (Ingress 1.0), Niantic Inc (Ingress 2.0), and Niantic Spatial (Ingress 3.0)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go",
        "situacao": "ok",
        "texto": "Pokémon Go (stylized as Pokémon GO) is a 2016 augmented reality (AR) mobile game originally developed and published by Niantic and since 2025 by Scopely Explore, in partnership with Nintendo and the Pokémon Company, for iOS and Android devices. The game uses GPS to locate, capture, train, and battle Pokémon. It is free-to-play, featuring a freemium model that includes in-app purchases for addition\n[…]\nNomura subsequently introduced Ingress to Tsunekazu Ishihara of the Pokémon Company, who took to the game and saw the proposed Pokémon collaboration as a fit for the series. Niantic, a Google subsidiary, used crowdsourced data from Ingress to create PokéStops and Gyms in Pokémon Go, incorporated Google Maps data to determine Pokémon locations, and integrated map displays from OpenStreetMap starting in December 2017.\n[…]\nIn May 2025, Scopely acquired some of Niantic's games, including Pokémon Go, while other Niantic games such as Ingress and Peridot were spun off.\n[…]\nThe game's distribution of PokéStops and Gyms (derived from the portals in Ingress, Niantic's science fiction-themed AR game) was noted to be sparser in many minority neighborhoods in a reflection of American demographics. Players in rural areas also complained about the lack of Pokémon spawns, PokéStops, and Gyms in their area. Pokémon Go was criticized for game accessibility issues by players with physical disabilities.\n[…]\nIn March 2025, Niantic announced it would sell its video game division, including Pokémon Go, to mobile publisher Scopely for 3.5 billion dollars. The deal, confirmed on March 12, 2025, encompassed Niantic's flagship titles (Pokémon Go, Pikmin Bloom, and Monster Hunter Now) and companion apps Campfire and Wayfarer, while augmented reality games Ingress and Peridot were retained by the spun-off entity Niantic Spatial.\n[…]\nMedia related to Pokémon Go at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ingress",
        "situacao": "ok",
        "texto": "Ingress é um jogo multijogador massivo online baseado em localização desenvolvido pela Niantic, originalmente parte do Google. O jogo foi lançado exclusivamente para dispositivos Android em 15 de novembro de 2012, e foi disponibilizado para o iOS da Apple em 14 de julho de 2014. O jogo tem uma história sobre ficção científica uma narrativa contínua e aberta. Ingress também foi considerado para ser\n[…]\nIngress tem sido objeto de estudo acadêmico sobre a relação entre regionalismo e globalismo, e o seu sistema de emblemas tem sido utilizado como um exemplo, em um estudo de caso de gamificação. Erin Stark argumenta que o sistema do jogo em que jogadores de indicam portais baseados em arte de rua está afetando os jogadores, criando um senso de lugar e de uma herança cultural mais flexível.\n[…]\nIngress tem sido considerado como uma economia de doação, na qual os jogadores trocam datafication de sua localização física para o jogo.\n[…]\nEm 2014, Ingress ganhou o Grande Prêmio do 18º Japan Media Arts Festival para a Divisão de Entretenimento\n[…]\nDe acordo com Alex Dalenberg da American City Business Journals, em Maio de 2013, havia cerca de 500.000 jogadores em nível mundial. Em uma entrevista no mês de agosto de 2013 com o site de fãs de Decode Ingress, o fundador de Niantic Labs John Hanke disse: \"foram mais de 1 milhão de downloads e uma grande parte deles são ativos.\" Em fevereiro de 2014, havia 2 milhões de jogadores. Em 2015, o jogo foi baixado mais de 8 milhões de vezes.\n[…]\nA ideia básica de Ingress é muito semelhante ao do mais velho, agora extinto, jogo de realidade aumentada, Shadow Cities e aos novos Pokémon Go e Harry Potter: Wizards Unite. Ambos têm facções (times) que estão lutando para o futuro do mundo com smartphones. Embora os jogos terem similares mecânicas de jogo e o visuais, há diferenças claras.\n[…]\nPokémon GO, outro jogo de realidade aumentada feita por Niantic",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Pokémon Challenge do Google Maps",
      "descricao": "Brincadeira de primeiro de abril de 2014, feita pelo Google com a The Pokémon Company, que inspirou a criação de Pokémon Go."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Pokémon Go nasceu de uma brincadeira de primeiro de abril de 2014, em que os usuários caçavam pokémon escondidos pelo mundo. Em que serviço on-line?",
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
    "indice": 12,
    "ancora": {
      "nome": "Lançamento de Pokémon Go no Brasil",
      "descricao": "Chegada do jogo Pokémon Go ao Brasil, em 3 de agosto de 2016, semanas depois da estreia nos Estados Unidos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Depois de semanas de espera, Pokémon Go finalmente chegou ao Brasil em agosto de 2016, dois dias antes da abertura de qual grande evento?",
    "resposta": "Olimpíadas do Rio",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_GO",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_GO",
        "situacao": "ok",
        "texto": "Pokémon GO é um jogo eletrônico free-to-play de realidade aumentada voltado para smartphones. O jogo é desenvolvido e publicado pela Niantic, Inc., em colaboração com a Nintendo e a The Pokémon Company para as plataformas iOS e Android. O jogo foi inicialmente lançado em julho de 2016 para alguns países, eventualmente foi expandindo para o resto do mundo.\n[…]\nEm 4 de março de 2016, começou a fase de testes de Pokémon GO no Japão, e em 7 de abril do mesmo ano começaram os testes na Nova Zelândia e Austrália. Mais tarde, em 16 de maio, a Niantic anunciou em seu blog que o jogo entraria em fase de testes também nos Estados Unidos. O teste chegou ao fim em 30 de junho.\n[…]\nNo lançamento, o jogo sofreu paralisações frequentes dos servidores devido ao uso extremo. Falhas frequentes e erros de autenticação atormentaram o lançamento do jogo e persistido por vários dias. Nos dois primeiros dias após o lançamento, os jogadores não foram capazes de acessar o jogo através de suas contas Pokémon Trainer Club, com somente contas baseadas no Gmail sendo capazes de obter acesso ao jogo.\n[…]\nPokémon GO tornou-se rapidamente o aplicativo mais baixado na App Store americana, sendo o jogo que em menor tempo após o lançamento a alcançar o topo da App Store e do Google Play, batendo Clash Royale. Dois dias após o lançamento, já havia sido instalado em mais de 5% dos dispositivos Android nos Estados Unidos, de acordo com SimilarWeb.\n[…]\nEduardo Paes, prefeito do Rio de Janeiro, afirmou que esperava que o aplicativo tivesse sido lançado para o Brasil, antes do início dos Jogos Olímpicos de 2016 na cidade, e os candidatos presidenciais dos Estados Unidos Hillary Clinton e Donald Trump mencionaram o aplicativo durante as suas campanhas eleitorais de 2016.\n[…]\nPokémon\n[…]\nPokémon GO no Facebook\n[…]\nPokémon GO no X\n[…]\n«Pokémon GO». para Google Play\n[…]\n«Pokémon GO». para App Store."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go",
        "situacao": "ok",
        "texto": "Pokémon Go (stylized as Pokémon GO) is a 2016 augmented reality (AR) mobile game originally developed and published by Niantic and since 2025 by Scopely Explore, in partnership with Nintendo and the Pokémon Company, for iOS and Android devices. The game uses GPS to locate, capture, train, and battle Pokémon. It is free-to-play, featuring a freemium model that includes in-app purchases for addition\n[…]\nJapan's National Police Agency said it was the 79th Pokémon Go-related accident in the country. On August 11, 2016, a young girl in Cambodia was reportedly killed after being hit by a car while trying to capture a Pokémon on a road. The case was the first death related to Pokémon Go among Southeast Asian countries. In January 2017, a Chinese-American civilian, Jiansheng Chen, was shot dead while playing Pokémon Go.\n[…]\nDuring Thailand's 2016 constitutional referendum polling, Pokémon Go players were told not to enter polling stations. Thus, the Thai National Broadcasting and Communications Commission intends to ask Niantic to remove Pokémon characters and PokéStops from locations such as government facilities, historic and religious sites, private property, and dangerous spots such as narrow footpaths and rivers. Cambodia has banned the game in a former genocide site after Pokémon players showed up there.\n[…]\nLaunched on July 22, 2016, \"Pokévision\" enabled players to find exactly where Pokémon spawned and how much time remained before they despawned; the site used data hacked directly from the game. In the five days following the website's launch, 27 million unique visitors used the site. On July 31, multiple search apps and sites, including Pokévision, were disabled as they violated Niantic's terms of service.\n[…]\nList of Pokémon, the list of all of the original Pokémon by order\n[…]\nMedia related to Pokémon Go at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Pokémon Go Plus+",
      "descricao": "Acessório em forma de Poké Bola lançado em 2023, que se conecta ao celular para capturar pokémon e registrar o sono."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Lançado em 2023, o Pokémon Go Plus+, acessório em forma de Poké Bola, funciona com Pokémon Go e com qual outro aplicativo, que acompanha as noites do jogador?",
    "resposta": "Pokémon Sleep",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sleep"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sleep",
        "situacao": "ok",
        "texto": "Pokémon Sleep is a sleep-tracking video game that rewards the user with Pokémon depending on the quality of their sleep. The app was first released in Japan, Australia, Canada, New Zealand, and Latin American countries for Android and iOS on July 17, 2023.\n[…]\nPokémon Sleep is based around tracking the sleep of the player, and earning rewards for sleeping longer. The game uses the microphone and accelerometer of the player's phone to track sleep. Players can optionally use the Pokémon Go Plus+ to play sounds to remind the player of their bedtime, as well as to track sleep without needing a phone on. In September 2024 smartwatches were added as a sleep tracking method.\n[…]\nPokémon Sleep also runs in-game events throughout the year where players can receive additional bonuses. Events coincide with holidays, lunar phases, or they showcase new Pokémon or items added to the game.\n[…]\nHowever, on 5 April 2021, a fan reported on Twitter that a SSL certificate had been registered for dev-eotxawxn.sleep.pokemon.co.jp.\n[…]\nA Pokémon Go APK data mine in January 2022 revealed several additions to the Pokémon Go app to integrate with Pokémon Sleep, including connecting to the Pokémon Go Plus + accessory, reviewing sleep patterns, and earning in-app rewards. These were confirmed by the Pokémon Day 2023 Pokémon Presents, in which they officially announced the Pokémon Go Plus + (Plus Plus) Accessory.\n[…]\nOn February 27, 2023, Pokémon Sleep was showcased during the Pokémon Presents and set for a release sometime in the summer of 2023. From July 6, 2023, Android users could pre-register the app. On July 17, 2023, Pokémon Sleep was rolled out in Australia, Canada, New Zealand, and Latin American countries."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sleep",
        "situacao": "ok",
        "texto": "Pokémon Sleep é um jogo móvel para Android e iOS que recompensa o usuário com Pokémon dependendo da qualidade de seu sono. O aplicativo foi primeiramente lançado na Austrália, Canadá, Nova Zelândia e na América Latina no dia 17 de julho de 2023.\n[…]\nSe o jogador ganha amizade suficiente com um Pokémon, ele vai juntar-se ao jogador, e pode ser colocado em um time para coletar berries e ingredientes.\n[…]\nPokémon Sleep é desenvolvido pelo estúdio japonês Select Button, e foi publicado por The Pokémon Company. O jogo foi anunciado no dia 28 de maio de 2019, por Tsunekazu Ishihara, CEO da The Pokémon Company, durante uma conferência de imprensa realizada em Tokyo assim como na página do Twitter oficial da empresa. O aplicativo foi marcado para ser lançado em 2020, porém, não apareceu, levando à especulação que havia sido cancelado.\n[…]\nPortanto, no dia 5 de abril de 2021, um fã reportou no Twitter que um certificado digital tem sido registrado para eotxawxn.sleep.pokemon.co.jp.\n[…]\nUma mineração de dados do Pokémon GO APK em janeiro de 2022 revelou diversas adições do aplicativo Pokémon Go para integrar com Pokémon Sleep, incluindo poder se conectar com o acessório Pokémon Go Plus +, reavaliar padrões de sono, e conseguir recompensas dentro do aplicativo. Estas foram confirmadas pelo Pokémon Day 2023 Pokémon Presents, onde oficialmente anunciaram o acessório Pokémon Go Plus + (Plus Plus).\n[…]\nNo dia 27 de fevereiro de 2023, Pokémon Sleep foi exibido durante o Pokémon Presents e marcado para ter um lançamento no verão de 2023. A partir de 6 de julho de 2023, usuários de Android podiam pré-registrar o aplicativo. No dia 17 de julho de 2023, Pokémon Sleep foi lançado na Austrália, Canadá, Nova Zelândia, e nos países da América Latina.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Pokémon Unite",
      "descricao": "Jogo de batalhas em equipe da franquia Pokémon, lançado em 2021, desenvolvido pelo TiMi Studio Group."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Numa partida padrão de Pokémon Unite, dois times disputam pontos marcando gols na arena. Quantos jogadores formam cada time?",
    "resposta": "Cinco",
    "distratores": [
      "Três",
      "Quatro",
      "Seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Unite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Unite",
        "situacao": "ok",
        "texto": "Pokémon Unite (stylized as Pokémon UNITE) is a 2021 free-to-play multiplayer online battle arena video game developed by TiMi Studio Group and published by The Pokémon Company worldwide and by Tencent Games in China for Android, iOS, and Nintendo Switch. It was announced in a Pokémon Presents presentation on 24 June 2020 as a partnership between The Pokémon Company and TiMi Studio Group owner Tenc\n[…]\nAside from the gameplay, Pokémon Unite differs from other MOBAs by lacking an in-game scoreboard, to discourage players from leaving the game out of frustration when they are losing in score; instead, the current score is implied through announcements at specific times of the match, specifically at 5 minutes to the end of the match, 3 minutes to the end of the match, two minutes before the end of the match and one minute before the end of the match.\n[…]\nTiMi Studios Group, a Chinese video game developer and subsidiary of Tencent Games, began a closed beta test for Pokémon Unite in January 2021. This test was limited to select players in China. In February 2021, The Pokémon Company announced that another closed beta test would be scheduled for March 2021, this time specifically for Canadian Android smartphone users.\n[…]\nBy 16 September 2021, the game had been downloaded over 9 million times on the Switch, with over 7.5 million mobile pre-registrations prior to the 22 September mobile release. By 1 October, research company Sensor Tower reported that Unite has been downloaded 30 million times for mobile devices, while The Pokémon Company confirmed that the game has been downloaded over 25 million times on all platforms by 4 October.\n[…]\nPokémon Unite won awards for \"Best Game\" at Google Play's Best of 2021, and \"Mobile Game of the Year\" at the 25th Annual D.I.C.E. Awards. The game also received a nomination for \"Best Mobile Game\" during the 2021 Game Awards."
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
    "indice": 15,
    "ancora": {
      "nome": "Pokémon Masters",
      "descricao": "Jogo para celular da DeNA, lançado em 2019, em que treinadores famosos da franquia batalham ao lado de seus pokémon."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Masters, os treinadores famosos de várias regiões se reúnem num torneio na ilha artificial de Pasio. Que príncipe criou esse torneio?",
    "resposta": "Lear",
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
        "texto": "Pokémon Masters EX (ポ ケ モ ン マ ス タ ー ズ EX, Pocket Monsters Masutāzu EX) (originalmente chamado de Pokémon Masters) é um jogo móvel gratuito para Android e iOS desenvolvido e publicado pela DeNA. É baseado na franquia de mídia Pokémon. Situado na ilha artificial de Pasio, o jogo permite aos jogadores batalhar e recrutar vários Pokémon Treinadores proeminentes nos jogos da série principal.\n[…]\nHá um torneio de batalhas 3 contra 3 em Pasio Island chamado Pokémon Masters League. O objetivo principal é se tornar seu Campeão. Para entrar na Pokémon Masters League, os jogadores devem coletar pelo menos cinco emblemas ao derrotar os líderes PML localizados em Pasio. Ao recrutar um par de sincronização, o jogador pode desbloquear uma história de par de sincronização. Os jogadores também podem participar de eventos por tempo limitado que são adicionados e atualizados regularmente.\n[…]\nUm par de sincronização é um par que consiste em um Pokémon Treinador que apareceu anteriormente nos jogos portáteis principais ou no anime (muitos dos quais, semelhantes a Super Smash Bros., têm seus designs retirados de suas aparições mais recentes) e um Pokémon (novamente, geralmente aquele que está melhor associado a esse personagem, ou seja, Misty de Starmie) em Pokémon Masters.\n[…]\nPokémon Masters foi anunciado pela primeira vez pela The Pokémon Company em 29 de maio de 2019, juntamente com alguns outros jogos Pokémon. Ele representa a primeira colaboração entre a empresa e o desenvolvedor de jogos para celular DeNA, foi lançado para Android e iOS. O conceito do jogo veio do artista e designer da série Ken Sugimori, que propôs a ideia de ter todos os personagens anteriores da série principal juntos em um jogo.\n[…]\nEm comemoração ao primeiro aniversário do jogo, Pokémon Masters foi atualizado com novos recursos como Pokémon Masters EX em 25 de agosto de 2020.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Pokémon Stadium",
      "descricao": "Jogo de batalhas Pokémon em 3D para Nintendo 64, que permitia usar pokémon dos jogos de Game Boy."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O primeiro Pokémon Stadium, lançado só no Japão em 1998, não tinha todos os 151 pokémon de Kanto. Quantos deles podiam ser usados?",
    "resposta": "42",
    "distratores": [
      "64",
      "100",
      "120"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Stadium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Stadium",
        "situacao": "ok",
        "texto": "Pokémon Stadium is a 1999 strategy video game developed and published by Nintendo for the Nintendo 64. The gameplay revolves around a 3D turn-based battling system using the 151 Pokémon from the Game Boy games Pokémon Red, Blue, and Yellow, with several in-game challenges for players to overcome. The game includes four \"Cups\", each of which is a series of three-on-three Pokémon battles against an \n[…]\nThe game challenges the player to succeed in trainer battles at the Stadium, a tournament consisting of four in-game tournaments that last eighty battles in total, with each tournament having its own rules and restrictions. Another mode, the Gym Leader Castle, has the player battle the eight Kanto Gym Leaders, the Kanto Elite Four, and the Champion, who previously appeared in the Game Boy games. Defeating the mode allows players to obtain rare species of Pokémon.\n[…]\nPokémon Stadium was initially released in Japan as Pokémon Stadium 2, acting as a sequel and expansion to the Japan-exclusive Pocket Monsters Stadium. Unlike the prior release, Stadium allowed the usage of all 151 species of Pokémon instead of the limited pool of 40 used prior, and greatly expanded on various different gameplay features that were in the prior game.\n[…]\nPokémon Stadium was announced in the December 1998 issue of the Japanese magazine The 64Dream. In March and April, Nintendo held a tournament involving the game as part of the Pokemon Festival '99, an event to promote Stadium, Pokémon Snap (1999) and Pokémon Pinball (1999).\n[…]\nOne reviewer stated that while they thought all the worthwhile to use Pokémon were in the first game, seeing the animations of all 151 of them in Stadium was a joy to behold.\n[…]\nPokémon Stadium at the Wayback Machine (archived 2007-10-11) at Nintendo.com"
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
    "indice": 17,
    "ancora": {
      "nome": "Pokémon Colosseum",
      "descricao": "Jogo de RPG Pokémon para GameCube, desenvolvido pela Genius Sonority e ambientado na região desértica de Orre."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Colosseum, o protagonista Wes não escolhe um inicial clássico: ele começa a aventura com duas evoluções de Eevee. Quais?",
    "resposta": "Espeon e Umbreon",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum",
        "situacao": "ok",
        "texto": "Pokémon Colosseum is a role-playing video game developed by Genius Sonority and published by The Pokémon Company and Nintendo for the GameCube. A spin-off of the Pokémon series, it was released on November 21, 2003, in Japan, March 22, 2004, in North America and May 14, 2004, in Europe. Unlike previous titles' random encounters with Pokémon, Colosseum allows the player to steal (\"snag\") the Pokémo\n[…]\nIt sold 1.15 million copies in the United States and 656,270 in Japan. Pokémon, Colosseum Sold a total of 2.41 million copies worldwide. A successor, Pokémon XD: Gale of Darkness, released for the GameCube in 2005. Pokémon Colosseum will be made available on the Nintendo Switch 2 through the Nintendo Classics service.\n[…]\nThe game's player protagonist is by default named Wes (レオ, Reo; Leo), but as with most Pokémon games, the player can change his name. Wes's Starter Pokémon are Espeon and Umbreon, two fox-like Pokémon who start at level 25 and 26, respectively. Additionally, shortly after the game begins, the player meets the game's partner character, Rui; she accompanies Wes on his journey, and uses her ability to see Shadow Pokémon to help combat the efforts of the game's villains.\n[…]\nA manga adaptation of Colosseum's plot was printed in 2004 issues of the Japanese magazine CoroCoro Comic and titled Pokémon Colosseum Snatcher Leo (ポケモンコロシアムスナッチャーズレオ). The game was followed by a 2005 sequel entitled Pokémon XD: Gale of Darkness. Set in Orre five years after Colosseum, it features a new protagonist snagging Shadow Pokémon from Team Cipher. Shadow Lugia is the game's mascot, and serves as an antagonist whom the player can snag.\n[…]\nPokémon Battle Revolution\n[…]\nPokémon Colosseum at Nintendo.com (archives at the Wayback Machine (archive index) of the original at the Wayback Machine (archived 2007-10-12) at the Internet Archive)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Colosseum",
        "situacao": "ok",
        "texto": "Pokémon Colosseum (ポケモンコロシアム, Pokemon Koroshiamu) é o primeiro jogo da série Pokémon para o Nintendo GameCube. Apresenta dois modos de jogo: um RPG em 3D e um modo de batalha semelhantes a Pokémon Stadium, com conexão entre GameCube e Game Boy Advance. Embora este jogo contenha o primeiro RPG de Pokémon em 3D, este não é um original, já que não se captura Pokémon selvagens, mas sim de outros trein\n[…]\nTudo começa no novo continente de Orre, uma região desértica, devastada pelo crime. O garoto Wes, junto de seus parceiros Espeon e Umbreon, acabam explodindo a entrada de um prédio de uma organização criminosa chamada Team Snagem e rouba uma máquina que permite roubar Pokémon chamada Snag Machine. O garoto explode outra parte do prédio e vai embora. Ele chega em Outskirt Stand e vê nos jornais as reportagens sobre o roubo da arma.\n[…]\nUm garoto de 17 anos que saiu do Team Snagem e acabou roubando a Snag Machine para uso próprio, mas quando encontrou Rui, acabou tendo que ajudar, capturar e purificar os Shadow Pokémon. Tem como parceiros Espeon e Umbreon.\n[…]\nEspeon e Umbreon\n[…]\nChefe do Team Snagem, ele se uniu aos Cipher para produzir os Shadow Pokémon. Diferentemente de XD, ele é um inimigo em Colosseum.\n[…]\nO Battle Mode trazia mais duas divisões, o Solo Battle e o Gang Battle. No Solo Battle, o jogador podia registrar Pokémon do Story Mode, excluindo os Shadow Pokémon não purificados, ou dos cartuchos de Pokémon Ruby, Sapphire, FireRed, LeafGreen ou Emerald para usá-los em batalhas consecutivas em Colosseums, que lembram o Desafio aos Líderes de Ginásio na série Stadium até ganhar todos, desafiar 100 treinadores no Mt. Battle VS.\n[…]\nDe acordo com o site Game Rankings, Pokémon Colosseum tem aprovação de 74% dos jogadores, um número baixo para um jogo Pokémon. Muitos consideram pelo fato de não haver Pokémon selvagens e por causa do processo de purificação de Shadow Pokémon ser chato e demorado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Pokémon XD: Gale of Darkness",
      "descricao": "Jogo de RPG Pokémon de 2005 para GameCube, continuação de Pokémon Colosseum, ambientado na região de Orre."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Pokémon XD, continuação de Colosseum, a vilã Cipher cria um pokémon sombrio especial, de código XD001, quase impossível de purificar. Que lendário é ele?",
    "resposta": "Lugia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_XD:_Gale_of_Darkness"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_XD:_Gale_of_Darkness",
        "situacao": "ok",
        "texto": "Pokémon XD: Gale of Darkness is a role-playing video game in the Pokémon series developed by Genius Sonority and published by The Pokémon Company and Nintendo. It was released for the GameCube on August 4, 2005, in Japan; October 3, 2005, in North America; November 10, 2005, in Australia; and November 18, 2005, in Europe. Pokémon XD is the successor to the GameCube title Pokémon Colosseum and take\n[…]\nPokémon XD was first announced in March 2005 as a new GameCube game and not a sequel to Colosseum, though later developments as well as two promotional demo versions confirmed the game would be similar to its predecessor. Shadow Pokémon, first introduced in Colosseum, are a major gameplay element, and a Shadow Lugia is featured on the game's box art. Munchlax and Bonsly, two Pokémon from the fourth generation of main Pokémon games, make debut appearances in Pokémon XD.\n[…]\nTo combat this, Krane is working on developing a Purification Chamber that can restore Shadow Pokémon to normal after they have been \"snagged\" by Michael using the Snag Machine.\n[…]\nGreevil, the leader of Cipher, reveals himself to Michael and challenges him to come to Cipher's headquarters on Citadark Isle. There, Greevil unleashes XD001, a Shadow Lugia that was engineered to reject purification, but Michael overcomes it and defeats Greevil.\n[…]\nJapanese gaming magazines Famitsu and CoroCoro Comic later gave screenshots and information that revealed that the game would have 3D graphics similar to those of its predecessor, Pokémon Colosseum. It was also revealed that the game would continue the inclusion of Shadow Pokémon and snagging from Colosseum. Nothing of the plot was revealed, other than the fact that a black Shadow Lugia was said to play a large part in the story.\n[…]\nPokémon XD: Gale of Darkness at Nintendo.com (archives of the original at the Internet Archive)\n[…]\nThe Official Pokémon Website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_XD%3A_Gale_of_Darkness",
        "situacao": "ok",
        "texto": "Pokémon XD: Gale of Darkness (ポケモンXD 闇の旋風ダーク・ルギア, Pokemon Ekkusudī Yami no Kaze Dāku Rugia) é o segundo game 3D de Pokémon para o GameCube. É a continuação de Pokémon Colosseum e também se passa na região de Orre.\n[…]\nCinco anos se passaram desde que Wes e Rui salvaram Orre dos Cipher e os baniram. Um garoto chamado Michael, junto com seu Eevee, vão descobrir que os Cipher estão de volta e agora com uma nova arma: um Pokémon Shadow que se diz impurificável com o codinome de XD001. Michael vive no Pokémon HQ Lab, onde o Prof. Krane, o perito Pokémon da Região é seqüestrado e agora Michael tem que salvá-lo.\n[…]\nAtravessando Orre, encontrando velhos amigos, e inimigos também, Michael vai além do resgate do professor e começa a capturar os Shadow Pokémon, incluindo o XD001 e purificar todos.\n[…]\nEste garoto de cerca de 12 anos é o herói do jogo. Ele vive no Pokémon HQ Lab com sua irmã Jovi, sua mãe Lily e o Prof. Krane. Ele e seu Pokémon inicial, Eevee irão combater os Cipher, capturar os Pokémon Shadow e purificá-los, inclusive o XD001.\n[…]\nO chefe dos Cipher em XD e provavelmente o mentor de todos os Cipher em Pokémon Colosseum é baixo e tem dois filhos guarda-costas: Ardos e Eldes. Ele se disfarça como uma boa pessoa chamada Mr. Verich, que ajuda a todos em Gateon Port. Ele tem um time cheio de Pokémon Shadow e se entrega à Polícia após a bataha contra Michael, graças a Eldes.\n[…]\nXD001 Lugia\n[…]\nOutra diferença são os ataques Shadow. Além do antigo Shadow Rush, há vários outros ataques Shadow, e todos são super-efetivos contra Pokémon normais. Além disso, há 83 Shadow Pokémon, quase o dobro do número desses em Colosseum.\n[…]\nPokémon\n[…]\nPokémon Colosseum",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Pokémon Ranger",
      "descricao": "Jogo derivado da franquia Pokémon, lançado em 2006 para Nintendo DS, em que o jogador é um guarda florestal que acalma pokémon selvagens."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O primeiro Pokémon Ranger, do Nintendo DS, se passa numa região que não aparece nos jogos principais. Como ela se chama?",
    "resposta": "Fiore",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger",
        "situacao": "ok",
        "texto": "Pokémon Ranger (ポケモンレンジャー, Pokemon Renjā) is an action role-playing video game developed by HAL Laboratory and Creatures Inc. and published by The Pokémon Company and Nintendo for the Nintendo DS video game console. The game was released in Japan, North America, and Australia in 2006 before releasing in Europe in 2007.\n[…]\nThis game is a spin-off of the mainline series set in the Fiore region, featuring a new gameplay format and storyline. The battle system and capturing mechanics are different. Rather than conquering Pokémon Gyms, the Elite Four, and Champion, the player completes missions to advance the plot.\n[…]\nAfter saving and capturing a wild Pokémon, the player is taken to the ranger's base in Ringtown. There, they must complete a series of missions, such as saving Pokémon and completing favors for others. Once the player proves themselves, they are assigned a patrol mission to travel through the Krokka Tunnel. There, they meet the Go-Rock Squad, the villainous team in the Fiore region.\n[…]\nWhile exploring the mountains, they find the leader of the Go-Rock Squad in the Fiore Temple. There, the leader reveals that the Super Styler is complete and sends three legendary Pokémon to attack the player. The player manages to calm the legendary Pokémon, resulting in celebrations from people all over the region and them being awarded the highest rank. This completes the main story line.\n[…]\nThis game is set in the Fiore region, originating from the Italian word for flower. It has no endemic Pokémon, instead being populated by Pokémon seen in the three generations before this game. Traditional Pokémon Trainers are not found in Fiore, but rather Pokémon Rangers, who do not train Pokémon and keep them outside of Pokéballs.\n[…]\nAs of January, 2025, Pokémon Ranger has sold over 2,930,000 copies worldwide."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ranger",
        "situacao": "ok",
        "texto": "Pokémon Ranger (ポケモンレンジャー, Pokemon Renjā) é um jogo da série Pokémon com um novo conceito: comandar temporariamente os monstrinhos. Você usa um \"apetrecho\" para poder controlá-los e liberá-los depois. É compatível com Pokémon Diamond & Pearl, principalmente para poder obter o lendário ovo do Pokémon Manaphy e transferir para o RPG Clássico.\n[…]\nO Poké Assist de cada Pokémon só é usado uma vez, logo após isso, ele é solto. Fiore, a região onde a ação ocorre, tem uma Pokédex chamada Ranger Browser, que cataloga 213 Pokémon.\n[…]\nAo começar o jogo, o jogador pode escolher se o protagonista é um garoto ou garota. Lunick (カズキ, Kazuki) tem como parceiro um Minun e Solana (ヒナタ, Hinata) um Plusle. Ambos têm que impedir que o Team Go-rock squad domine Fiore capturando e usando Pokémon para derrotá-los e se unindo aos membros da Ranger Union, uma legião de Pokémon Rangers que estão espalhados por Fiore. Cada cidade tem um Ranger \"Chefe\": Spenser - Ringtown, Joel - Fall City, Cameron - Summerland e Elita - Wintown\n[…]\nJuntos, os Rangers têm que derrotar o Team Go-Rock Squad e salvar Fiore da escuridão.\n[…]\nUma missão especial no jogo envolve salvar um ovo, que é o ovo do lendário Manaphy, do que sobrou foi pego pelo Team Go-Rock Squad. Uma vez terminada a missão, ovo não pode chocar em Fiore, tendo que ser transferido para Sinnoh, ou seja, Pokémon Diamond & Pearl. O jogador deve ter dois Nintendo DS, um contendo Pokémon Ranger, o outro contendo Pokémon Diamond ou Pokémon Pearl. Quando o ovo for transferido, ele poderá chocar e Manaphy sairá de lá no Lv. 1.\n[…]\nO Pokémon Ranger vendeu 193.337 cópias no Japão em sua semana de lançamento. Em termos de análises de jogos, \"Pokémon Ranger\" recebeu uma reação bastante positiva, com uma taxa de 70% de GameRankings.\n[…]\nEm 31 de março de 2008,  Pokémon Ranger  vendeu 2,70 milhões de cópias em todo o mundo.",
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
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Uma missão especial de Pokémon Ranger dava ao jogador o ovo de um pokémon mítico, que podia ser enviado para Diamond e Pearl. Que pokémon era esse?",
    "resposta": "Manaphy",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger",
        "situacao": "ok",
        "texto": "Pokémon Ranger (ポケモンレンジャー, Pokemon Renjā) is an action role-playing video game developed by HAL Laboratory and Creatures Inc. and published by The Pokémon Company and Nintendo for the Nintendo DS video game console. The game was released in Japan, North America, and Australia in 2006 before releasing in Europe in 2007.\n[…]\nIt is compatible with Pokémon Diamond and Pearl, HeartGold and SoulSilver, and Platinum, allowing players to transfer the mythical Pokémon Manaphy's egg to those games.\n[…]\nIn the postgame, the player can continue to explore and catch multiple new Pokémon, including legendries. The special Manaphy mission is unlocked, and once completed, the player will be awarded with a Manaphy egg that can be transferred to Pokémon Diamond and Pearl, HeartGold and SoulSilver, and Platinum.\n[…]\nA direct-to-DVD animated film adaptation, Pokémon Ranger and the Temple of the Sea, premiered on Cartoon Network on March 23, 2007, and released on DVD the succeeding month. The movie stars a new Pokémon Ranger named Jack Walker, or Jackie, whose job is to protect a Manaphy egg. Ash and his companions work with Jackie throughout the movie.\n[…]\nAs of January, 2025, Pokémon Ranger has sold over 2,930,000 copies worldwide.\n[…]\nThis sequel follows the same mission-based plot, this time, allowing players to download new missions via Nintendo Wifi Connection. This game features 270 new Pokémon that were not seen in Pokémon Ranger.\n[…]\nPokémon Ranger: Guardian Signs is an action role-playing video game developed by Creatures Inc., published by The Pokémon Company, and distributed by Nintendo for the Nintendo DS. It is the third and final installment of the Pokémon Ranger series and was released worldwide in 2010. The protagonist explores a new region, Oblivia, as they continue the mission-based plot from the previous games."
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
    "indice": 21,
    "ancora": {
      "nome": "Pokémon Mystery Dungeon: Red Rescue Team e Blue Rescue Team",
      "descricao": "Par de jogos que inaugurou a série Pokémon Mystery Dungeon, lançado em 2005 no Japão, em que o herói integra uma equipe de resgate."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Red Rescue Team e Blue Rescue Team, os primeiros Pokémon Mystery Dungeon, saíram cada um para um console diferente da Nintendo. Quais eram esses consoles?",
    "resposta": "Game Boy Advance e DS",
    "distratores": [
      "GameCube e Wii",
      "DS e 3DS",
      "Game Boy Color e Advance"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Blue_Rescue_Team_and_Red_Rescue_Team"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Blue_Rescue_Team_and_Red_Rescue_Team",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon: Blue Rescue Team and Pokémon Mystery Dungeon: Red Rescue Team are a matched pair of Pokémon video games for the Nintendo DS and Game Boy Advance, respectively. The games were developed by Chunsoft and published by The Pokémon Company and Nintendo. Red Rescue Team was the last Pokémon game released for the Game Boy Advance.\n[…]\nThe two versions are mostly identical, with Blue Rescue Team taking advantage of the dual-screen features and increased graphical and sound capabilities of the Nintendo DS. The game has six Pokémon exclusive to each version. Mystery Dungeon differs from the mainline games in that the player character is a Pokémon rather than a trainer.\n[…]\nPrior to this game, Chunsoft's products were considered mediocre, even if few games showed signs of recovery such as Torneko's Great Adventure 3 Advance: Mystery Dungeon and 3-Nen B-Gumi Kinpachi Sensei: Densetsu no Kyoudan ni Tate! in 2004.\n[…]\nIn November 2005, Nintendo announced a bug in the Blue Rescue Team version involving its connectivity with its GBA counterpart, Red Rescue Team, which would erase the save file of any other Game Boy Advance game besides Red Rescue Team that was loaded into the system. Nintendo quickly patched the bug upon discovering it and issued a new shipment of replacement DS cards with the patch on December 8.\n[…]\nBy the end of 2006, Pokémon Mystery Dungeon: Blue Rescue Team had sold over 761,000 copies in Japan, while Red Rescue Team had sold just over 715,000 copies. As of July 25, 2007, Blue Rescue Team has sold 3.08 million copies worldwide while Red Rescue Team sold 2.20 million copies by March 31. The game's success not only helped giving more popularity in the Mystery Dungeon franchise, it also helped Chunsoft from avoiding bankruptcy.\n[…]\nPokémon Mystery Dungeon: Ginji's Rescue Team (the manga serial based on the games)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Mystery_Dungeon%3A_Blue_Rescue_Team_e_Red_Rescue_Team",
        "situacao": "ok",
        "texto": "Pokémon Mystery Dungeon (ポケモン不思議のダンジョン 赤の救助隊・青の救助隊, Pokemon Fushigi no Danjon Aka no Kyūjotai, Ao no Kyūjotai) é um jogo da série Pokémon que foi feito com base nos jogos de Mystery Dungeons, muito populares no Japão. Existem duas versões para esse jogo: Pokémon Mystery Dungeon: Blue Rescue Team, para Nintendo DS e Pokémon Mystery Dungeon: Red Rescue Team, para Game Boy Advance. Pela primeira vez,\n[…]\nA medida que vai resgatando Pokémon, você acumula pontos no Ranking. Quanto mais pontos fizer, mais conhecido seu Rescue Team será. A contagem de pontos varia de dificuldade de missão:\n[…]\nPokémon Mystery Dungeon não ficou apenas no GBA e no DS, mas foi para fora dos portáteis em duas versões.\n[…]\nA primeira foi um episódio especial do anime chama \"Pokémon Mystery Dungeon: Team Go-Getters Out of the Gate!\", um especial contando a história de um humano transformado em Squirtle e acabou se unindo a Charmander e Chikorita no Team Go-Getters. O episódio, por incrível que pareça, foi exibido primeiro nos EUA em 2006 e só em Abril de 2007 chegou ao Japão.\n[…]\nA outra foi uma série de quadrinhos publicados na revista americana Nintendo Power que recentemente foram lançados em uma coleção chamada \"Pokémon Mystery Dungeon: Ginji's Rescue Team\", onde um garoto chamado Ginji é transformado em um Torchic e fica amigo de Mudkip. Assim, os dois se aventuram pela Região Pokémon, fazem amigos e enfrentam inimigos.\n[…]\nFoi revelado primeiramente em Agosto de 2005, que a data de lançamento japonesa seria anunciada em setembro. Mais detalhes foram divulgados no final daquele mês, mostrando informações sobre a jogabilidade e o enredo. Em novembro, a Nintendo anunciou um bug na versão \"Blue Rescue Team\", quando conectou-se ao slot Game Boy Advance para se conectar com \"Red Rescue Team\". Se o usuário tivesse outro jogo além do  Red Rescue Team , ele apagaria todos os arquivos do jogo que o jogo possuísse.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Pokémon Pinball",
      "descricao": "Jogo de fliperama virtual com pokémon, lançado em 1999 para o Game Boy Color, em que a bolinha é uma Poké Bola."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O cartucho de Pokémon Pinball, de 1999, levava uma pilha própria para alimentar um recurso raro nos jogos de Game Boy Color. Que recurso era esse?",
    "resposta": "Vibração",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Pinball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Pinball",
        "situacao": "ok",
        "texto": "Pokémon Pinball is a pinball-based Pokémon spin-off video game for the Game Boy Color. It was released in Japan on April 14, 1999, and in North America on June 29, 1999. In it, the ball is a Poké Ball, and most of the objects on the table are Pokémon-related.\n[…]\nPokémon Pinball was announced in the March 1999 issue of The 64Dream and was first released in Japan on April 14, 1999.\n[…]\nPokémon Pinball received generally positive reviews, holding an aggregate score of 81.73% at GameRankings. GameSpot highlighted its use of the Game Boy Color's display and presentation. They also criticized the lack of other pinball-related elements and the game's poor physics. The reviewer additionally called the rumble feature \"a nice novelty\" but \"a waste [...] of an AAA battery\". San Jose Mercury News praised its rumble, however, noting that it \"won them over\".\n[…]\nLos Angeles Times editor Aaron Curtiss called it a \"great game\". CNET called it \"more than a shameless cash-in on the Pokémon phenomenon\", calling it one of the best pinball games for the Game Boy Color. However, they criticized the \"gratuitous Pikachu appearances\" and the \"incorrect physics\" as detracting somewhat from the pinball experience.\n[…]\nPokémon Pinball sold 262,000 units in its first 20 days, making it the fastest selling Game Boy title at the time. According to the NPD Group, it was the fourth top selling video game of 1999 in the United States behind Pokémon Blue, Red, and Yellow. The game received a \"Gold\" sales award from the Entertainment and Leisure Software Publishers Association (ELSPA), indicating sales of at least 200,000 copies in the United Kingdom.\n[…]\nOfficial Nintendo Pokémon Pinball page"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Pinball",
        "situacao": "ok",
        "texto": "Pokémon Pinball (ポケモンピンボール, Pokemon Pinbōru) é um jogo da série Pokémon em Pinball baseado nos games Pokémon Red & Blue. Lançado para Game Boy Color, é um dos jogos do portátil que tem função rumble, onde o cartucho vibra de acordo com a ação. É um dos primeiros jogos Spin-offs da série e teve uma sequência, chamada Pokémon Pinball Ruby & Sapphire.\n[…]\nEste jogo também é um dos únicos jogos que têm suporte Rumble para Game Boy Color.\n[…]\nPokémon Pinball recebeu críticas geralmente positivas, com uma pontuação agregada de 81,73% no GameRankings. GameSpot deu-lhe uma pontuação de 8,7, citando o uso da apresentação e apresentação do Game Boy Color. No entanto, eles também criticaram o jogo, lamentando a falta de outros elementos relacionados com o pinball e a fraca física do jogo.\n[…]\nEles também criticaram o recurso embutido, chamando-o \"um desperdício [...] de uma bateria AAA\" e uma \"boa novidade\" que se tornou cada vez mais irritante quando se jogava o jogo. San Jose Mercury News elogiou o seu ressalto, no entanto, observando que \"ganhou-los\". Aaron Curtiss , editor do Los Angeles Timeschamou-o de \"grande jogo\". CNETo chamou de \"mais do que um dinheiro sem vergonha no fenômeno  Pokémon \", chamando-o de um dos melhores jogos de pinball para o Game Boy Color.\n[…]\nNo entanto, eles criticaram as \"aparições gratuitas do Pikachu\" e a \"física incorreta\", em detrimento da experiência do pinball. O editor do New York Times Joe Hutsko classificou o mecânico como inovador, afirmando que ele provavelmente levará a mais jogos que usam rumble de outros desenvolvedores. GamesRadar listou Pokémon Pinball como um dos títulos que eles gostariam de ver no  3DS Virtual Console.\n[…]\nPokémon Pinball recebeu um prêmio de vendas \"Gold\" da Entertainment and Leisure Software Publishers Association (ELSPA), indicando vendas de pelo menos 200.000 cópias no Reino Unido.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Pokémon Quest",
      "descricao": "Jogo gratuito de 2018 para Nintendo Switch e celulares, em que os pokémon exploram a Ilha Tumblecube."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Pokémon Quest, de 2018, os pokémon da Ilha Tumblecube ganham um visual bem diferente do habitual. Como eles aparecem?",
    "resposta": "Em formato de cubo",
    "distratores": [
      "Feitos de massinha",
      "Desenhados a giz",
      "Em pixels antigos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Quest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Quest",
        "situacao": "ok",
        "texto": "Pokémon Quest is a free-to-play action role-playing game in the Pokémon series developed by Game Freak. It was released for the Nintendo Switch in May 2018, and for Android and iOS in June 2018. Within a week of its release, it had reached over 7.5 million downloads.\n[…]\nPokémon Quest features a blocky, voxel-style design similar to Minecraft. The game is set in Tumblecube Island, featuring cube-shaped Pokémon called \"Pokéxel\". The Pokémon featured in the game are from the original lineup from the Kanto region in Pokémon Red and Blue. In the game, players control the base camp and the Pokémon team. The player's main task is to complete all the levels on the island, beating the wild Pokémon.\n[…]\nPokémon Quest was announced during a press conference held by The Pokémon Company on May 30, 2018, and released on the eShop as a free-to-start title for the Nintendo Switch later that same day. It was also announced that a mobile version will be released for iOS and Android devices in late June 2018. Pokémon Quest was released on Android and iOS on June 27, 2018. It was the first Pokémon spin-off developed entirely in-house by Game Freak, the developers of the main Pokémon games.\n[…]\nPokémon Quest received \"mixed or average\" reviews according to review aggregator Metacritic. Critics felt that the gameplay was repetitive. Kotaku and IGN's reviewers thought that the mostly automated battles were the gameplay's least entertaining aspect. Game Informer thought they were unengaging, while Eurogamer described them as \"nice simple fun\".\n[…]\nCritics agreed that Pokémon Quest was better suited for mobile platforms than consoles because of its less awkward controls and long wait times between the battery recharges. Nintendo Life criticized the wait times."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Quest",
        "situacao": "ok",
        "texto": "Pokémon Quest é um jogo spin-off de ação-aventura, desenvolvida pela Game Freak e publicado pela The Pokémon Company. Foi anunciado para o console Nintendo Switch em maio de 2018, posteriormente será lançado para dispositivos móveis para Android e iOS do mês seguinte.\n[…]\nPokémon Quest apresenta um desenho de estilo cúbico, voxel similiar a Minecraft. O jogo se desenvolve na Ilha Tumblecube, onde os Pokémon chamados de Pokexel se apresentam como formas cúbicas. The Pokémon Company apresenta que o jogo é da linha original da região de Kanto, acontece no jogo Pokémon Red & Blue. Os jogadores podem construir sua base, o que atrai Pokémon para sua equipe. Quando você anda pela ilha, os jogadores podem recrutar até três Pokémon com eles.\n[…]\nPara atacar outros Pokémon, o jogador precisa esperar o medidor se encher e então tocar o movimento para o Pokémon atacar. No acampamento base, você pode cozinhar para atrair mais Pokémon.\n[…]\nPokémon Quest foi anunciado durante uma conferência de imprensa para o Pokémon Company em 30 de maio de 2018, em seguida, liberado para o eShop como mais tarde no mesmo dia gratuito para o Nintendo Switch. Mais tarde, também foi anunciado, que uma versão móvel será lançada para iOS e Android em 27 de junho de 2018.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Pokémon Smile",
      "descricao": "Aplicativo gratuito da franquia Pokémon lançado em 2020, voltado para crianças, que usa a câmera do celular."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No aplicativo Pokémon Smile, de 2020, as crianças salvam pokémon e enchem uma coleção de figurinhas sempre que fazem o quê?",
    "resposta": "Escovam os dentes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Smile"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Smile",
        "situacao": "ok",
        "texto": "Pokémon Smile is a spin-off mobile game in the Pokémon franchise. The game uses a device's camera and augmented reality to teach children how to brush their teeth, with gameplay requiring the player to brush bacteria, which are holding Pokémon captive, off of their teeth in order to give the player a chance at capturing the Pokémon.\n[…]\nPokémon Smile was released on June 17, 2020, by The Pokémon Company and is available as a free app for Android and iOS mobile devices. The game received primarily positive reviews from critics, who found the game to be entertaining, though some felt that the game lacked significant content, while others felt that the game was too difficult.\n[…]\nSmile was later used in partnerships between various Japanese cities and The Pokémon Company following its release, being used in order to encourage better dental hygiene among children.\n[…]\nIn the months following the game's release, the game received over half a million downloads. Following its release, Smile collaborated with the Xylitol Ramune candy brand, with Pokémon in the art style of the game appearing on its packaging. The company Lotte later produced dispensers for the Smile-themed Xylitol candy. An educational picture book, titled \"Rub and Play! Pokémon Brush\", which was themed around Smile, was later released.\n[…]\nTo coincide with Dental and Oral Health Week in Japan, an event was held in Tokoname, where Smile was suggested as a method of encouraging children to brush their teeth. In the city of Yao, Osaka, The Pokémon Company partnered with the city in order to have elementary school students learn to brush their teeth. Students could fill out a coloring book every time they brushed their teeth well, which could be exchanged at associated dental appointments for a Smile-themed toothbrush."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Smile",
        "situacao": "ok",
        "texto": "Pokémon Smile é um jogo para celular spin-off da franquia Pokémon. O jogo usa um sistema de realidade aumentada para ensinar as crianças como escovar os dentes. Foi lançado em junho de 2020 por The Pokémon Company e está disponível como um app gratuito para dispositivos móveis Android e iOS.\n[…]\nO jogo usa a câmera do aparelho em que está sendo jogado para um sistema de realidade aumentada, cujo é usado para jogar o jogo. Bactérias aparecem na boca do jogador e atacam Pokémon, e escovando os dentes, o jogador é capaz de salvá-los. No final, o jogo permite o jogador a tentar capturar um dos Pokémon, e depois de capturar, pode subir de nível. O jogador também pode ganhar outras recompensas, como chapéus e stickers. O tempo gasto escovando pode ser definido entre um a três minutos.\n[…]\nA cada dia, o jogo pode notificar usuários até três vezes para lembrá-los de escovar os dentes.\n[…]\nÀs vezes, o jogo pode falhar em reconhecer uma escovação do jogador. De acordo com The Pokémon Company, uma escova de dente colorida num quarto claro geralmente resolve o problema.\n[…]\nO jogo foi anunciado durante uma apresentação de Pokémon Presents no dia 17 de junho de 2020, e tornou-se disponível mais tarde naquele dia. O jogo recebeu sua primeira grande atualização em novembro de 2021, adicionando inúmeros novos chapéus e quatro novos Pokémon. A segunda grande atualização do jogo foi lançada em junho de 2022. Ela adicionou mais de 100 Pokémon, incluindo todos os Pokémon da segunda geração (de Pokémon Gold & Silver e Crystal) restantes que não estavam ainda no jogo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Pocket Pikachu",
      "descricao": "Bichinho virtual com contador de passos lançado pela Nintendo em 1998, em que o dono cuida de um Pikachu."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1998, a Nintendo lançou o Pocket Pikachu, um bichinho virtual que ficava mais contente e afetuoso quanto mais o dono fazia o quê?",
    "resposta": "Caminhava",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Pikachu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Pikachu",
        "situacao": "ok",
        "texto": "Pokémon Pikachu, also known as Pocket Pikachu (ポケットピカチュウ) in Japan, is a limited series of two handheld Pokémon digital pets (similar to Tamagotchi) featuring the famous yellow electric-type Pokémon, Pikachu. It debuted on March 27, 1998, in Japan, on November 2, 1998 in North America, and in December 1998 in Europe.\n[…]\nAdditional activities become available as the player spends more time with their virtual Pikachu. If neglected, Pikachu will express anger and eventually refuse to recognize the player.\n[…]\nWatts can also be sent to other Pokémon Pikachu 2 units.\n[…]\nPokémon and its character Pikachu are not the only media franchises that are used by this Nintendo-made device. Sakura Taisen, a media franchise of SEGA and licensed by RED Entertainment released a virtual-pet with pedometer, in the same style as the Pokémon Pikachu 2 GS, called Pocket Sakura (ポケットサクラ) and Sakura Taisen GB, developed by Jupiter. Sega could not publish either, due to their rivalry with Nintendo.\n[…]\nSimilarly, Sanrio, responsible for the Hello Kitty franchise, licensed to Nintendo the development of the Pocket Hello Kitty. This featured a similar design to the first Pokémon Pikachu, with a game based on Hello Kitty and her friends, available in a pink-colored case. Pocket Hello Kitty was released in Japan on August 21, 1998.\n[…]\nIn 2009, a device similar to the Pokémon Pikachu called the Pokéwalker, came packaged with Pokémon HeartGold and SoulSilver which communicates directly with the Nintendo DS game cards via infrared. It allowed the player to transfer one Pokémon at a time from their HeartGold or SoulSilver. The user is able to catch Pokémon and find items by spending watts.\n[…]\nOfficial website for the Pocket Pikachu (in Japanese)\n[…]\nPokémon Pikachu on IMDB"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Pikachu",
        "situacao": "ok",
        "texto": "Pokémon Pikachu, também conhecido como Pocket Pikachu (ポケットピカチュウ) no Japão, é uma série limitada de dois animais de estimação digitais Pokémon portáteis (semelhante ao Tamagotchi) apresentando o famoso Pokémon elétrico amarelo, Pikachu. Lançado em 27 de março de 1998 no Japão (2 de novembro de 1998 na América do Norte), foi concebido como um brinquedo de exercício e mencionado pelo Guinness World \n[…]\nO primeiro lançamento, uma unidade amarela semelhante a um Game Boy, apresenta uma tela LCD preta e branca usada para exibir animações das atividades de Pikachu. A jogabilidade difere um pouco de outros bichinhos virtuais portáteis porque o Pikachu não precisa ser alimentado, regado ou limpo depois. Em vez disso, a unidade Pokémon Pikachu pode ser amarrada a um cinto e usada como um pedômetro.\n[…]\nA cada vinte passos que ele conta, o Pokémon Pikachu credita ao usuário um watt, uma moeda virtual usada para comprar presentes do Pikachu. Atividades adicionais tornam-se disponíveis conforme o jogador passa mais tempo com seu Pikachu virtual. Se negligenciado, Pikachu expressará raiva e eventualmente se recusará a reconhecer o jogador.\n[…]\nPokémon e seu personagem Pikachu não são as únicas franquias de mídia usadas por este dispositivo feito pela Nintendo. Sakura Taisen, uma franquia de mídia da SEGA e licenciada pela RED Entertainment lançou um animal de estimação virtual com pedômetro no mesmo estilo do Pokémon Pikachu 2 chamado Pocket Sakura (ポケットサクラ). Foi lançado junto com Sakura Taisen GB; eles foram desenvolvidos por Jupiter.\n[…]\nDa mesma forma, a Sanrio, responsável pela franquia Hello Kitty, licenciou para a Nintendo o desenvolvimento do Pocket Hello Kitty. Este apresentava um design semelhante ao do primeiro Pokémon Pikachu, com um jogo baseado na Hello Kitty e seus amigos, disponível em uma caixa de cor rosa.\n[…]\nPokémon Pikachu (original) na Nintendo Customer Service\n[…]\nPokémon Pikachu na IMDB",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Detetive Pikachu (jogo)",
      "descricao": "Jogo de aventura e investigação para Nintendo 3DS, lançado no Japão em 2016 e no Ocidente em 2018, que inspirou o filme de 2019."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No jogo Detetive Pikachu, o investigador de boné fala com voz de homem maduro e tem um vício. É louco por qual bebida?",
    "resposta": "Café",
    "fonte": [
      "https://en.wikipedia.org/wiki/Detective_Pikachu_(video_game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Detective_Pikachu_(video_game)",
        "situacao": "ok",
        "texto": "Detective Pikachu (known in Japan as Great Detective Pikachu) is an adventure game developed by Creatures Inc. and published by Nintendo and The Pokémon Company for the Nintendo 3DS family of systems. The game is a spin-off of the Pokémon franchise, in which the player works with a talking Pikachu to solve various mysteries.\n[…]\nA shorter, downloadable version of the game called Great Detective Pikachu: Birth of a New Duo was released in Japan in February 2016, while the full version was released worldwide in March 2018.\n[…]\nThe game was released alongside a giant Detective Pikachu amiibo figure, which unlocks hints and optional cutscenes in the game.\n[…]\nDetective Pikachu received \"mixed or average\" reviews from critics, according to review aggregator platform Metacritic. Fellow review aggregator OpenCritic assessed that the game received fair approval, being recommended by 33% of critics.\n[…]\nThere was also praise given to the game's \"gorgeous\" visuals and the character of Detective Pikachu himself.\n[…]\nA live-action film based around the Detective Pikachu character by Warner Bros. Pictures was released on May 10, 2019, and grossed $450 million worldwide. It was directed by Rob Letterman, and stars Justice Smith, Kathryn Newton, Suki Waterhouse, Omar Chaparro, Chris Geere, Ken Watanabe and Bill Nighy, with Ryan Reynolds as the voice of Pikachu. The film began pre-production in 2017, and was filmed in London in 2018.\n[…]\nWeeks after the film adaptation's release, the Pokémon Company announced in a press conference that a Detective Pikachu sequel is being developed for the Nintendo Switch, and that it would feature a different resolution from what the film version portrayed. In June 2023, the sequel's title was officially announced as Detective Pikachu Returns, and it released on October 6, 2023."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Detective_Pikachu",
        "situacao": "ok",
        "texto": "Detective Pikachu (名探偵ピカチュウ, Meitantei Pikachū) (conhecido no Japão como Great Detective Pikachu) é um jogo de aventura desenvolvido pela Creatures Inc., publicado pela The Pokémon Company e distribuído pela Nintendo para a família de sistemas Nintendo 3DS. O jogo é um spin-off da franquia Pokémon, em que o jogador trabalha com um Pikachu falante para resolver vários mistérios.\n[…]\nDetective Pikachu é um jogo de aventura no qual os jogadores controlam Tim Goodman enquanto ele trabalha junto com o detetive Pikachu para resolver vários mistérios. Isso é feito caminhando pelas cenas, encontrando pistas em potencial e conversando com pessoas e Pokémon para descobrir novas informações.\n[…]\nMais tarde naquele ano, a Nintendo registrou uma marca registrada para o nome Great Detective Pikachu. Os desenvolvedores lançaram um trailer de estreia no final de janeiro de 2016, uma semana antes do lançamento do jogo.\n[…]\nA versão inicial do jogo, chamada Great Detective Pikachu: Birth of a New Duo (名探偵ピカチュウ〜 新コンビ誕生〜, Meitantei Pikachu~ Shin Konbi Tanjō~), foi lançada na Nintendo 3DS eShop no Japão em 3 de fevereiro de 2016. Em 12 de janeiro de 2018, esta versão do jogo foi removida do eShop no Japão, e mais tarde naquele dia foi anunciado que uma versão expandida do jogo, simplesmente intitulada Detetive Pikachu, estava programada para um lançamento físico do Nintendo 3DS em todo o mundo em 23 de março de 2018.\n[…]\nPara promover o lançamento da versão completa do jogo, The Pokémon Company lançou um eBook livre promocional chamado Detective Pikachu Episode 0 - Case do Eevee, disponível até 15 de maio de 2018, sobre as lojas iBooks da Apple e Kindle da Amazon. O conto atua como uma prequela do jogo, configurando sua história. O livro foi originalmente lançado na forma física como um bônus de pré-venda para o jogo no Japão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Pokémon Mini",
      "descricao": "Pequeno console portátil da Nintendo, com tela monocromática e jogos só de pokémon, lançado no início dos anos dois mil."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O Pokémon Mini, minúsculo console portátil da Nintendo que só tinha jogos de pokémon, chegou às lojas em que ano?",
    "resposta": "2001",
    "distratores": [
      "1999",
      "2003",
      "2005"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Mini",
        "situacao": "ok",
        "texto": "The Pokémon Mini (stylized as Pokémon mini) is a handheld game console designed and manufactured by Nintendo in Hardware collaboration with The Pokémon Company. It was originally released in North America on November 16, 2001; followed up with Japan the following month and Europe in March 2002. The system is themed around the Pokémon franchise and is the smallest Nintendo system ever produced with\n[…]\nThe Pokémon Mini features a monochrome dot-matrix display, a directional pad, three action buttons, a speaker, a real-time clock, an infrared data port for multiplayer gaming, a reed switch to detect when the device is shaken, and a motor for force feedback. The console was available in three color variants named after Pokémon characters: \"Wooper Blue,\" \"Chikorita Green,\" and \"Smoochum Purple.\"\n[…]\nThe Pokémon Mini was first released in North America on November 16, 2001. The system was exclusively sold at Pokémon Center New York which opened on the same day. On November 19, it became nationally available as a launch item on the Pokémon Center website. it was Nintendo's least expensive console ever produced at US$45 (equivalent to $82 in 2025) and came bundled with the game Pokémon Party mini.\n[…]\nThe system was later launched in Japan on December 14, 2001, and was sold at a specific lineup of retailers with a stand-alone version later being sold at a reduced price; and eventually in Europe on March 15, 2002.\n[…]\nShadow Puzzle: The player must find different shapes and put them together to make an image of a Pokémon.\n[…]\nPichu Bros. mini is a minigame compilation developed by Denyusha, and is the sequel to Pokémon Party mini. It features six new minigames based on the Pichu Bros. specials:\n[…]\nPokémon mini page on Nintendo's official Japanese site (in Japanese)\n[…]\nPokémon-Mini.net – Pokémon Mini Database and Dev Site by Team Pokémé\n[…]\nPokémon mini development Wiki (technical information)\n[…]\nPokémon Mini at NinDB"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Mini",
        "situacao": "ok",
        "texto": "Pokémon Mini (ポケモンミニ) (estilizado Pokémon mini) é um console portátil desenhado e fabricado pela Nintendo e cujo tema é a franquia de mídias multi-bilionária Pokémon. É o menor sistema de jogos com cartucho intercambiável alguma vez produzido pela Nintendo, pesando apenas 70 gramas. O portátil foi primeiramente lançado na América do Norte no dia 16 de Novembro de 2001, no Japão no dia 14 de Dezemb\n[…]\nO Pokémon mini foi lançado em três cores diferentes: verde Chikorita, roxo Smoochum e azul Wooper.\n[…]\nPokémon Party Mini\n[…]\nPokémon Pinball Mini\n[…]\nPokémon Puzzle Collection\n[…]\nPokémon Tetris Mini\n[…]\nPokémon Zany Cards\n[…]\nPokémon Puzzle Collection 2\n[…]\nPichu Bros Party Mini\n[…]\nPokémon Race Mini\n[…]\nPokémon Breeder Mini\n[…]\nPokémon Pikachu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Balão do Pikachu",
      "descricao": "Balão inflável gigante em forma de Pikachu que participa de um tradicional desfile anual de Nova York desde 2001."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Desde 2001, um balão gigante de Pikachu flutua sobre as ruas de Nova York durante qual desfile tradicional?",
    "resposta": "Desfile de Ação de Graças da Macy's",
    "fonte": [
      "https://en.wikipedia.org/wiki/Macy%27s_Thanksgiving_Day_Parade"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Macy%27s_Thanksgiving_Day_Parade",
        "situacao": "ok",
        "texto": "The Macy's Thanksgiving Day Parade, the world's largest parade, is an annual parade in New York City presented by the American department store chain Macy's. While not the first such event held in the United States, the Macy's Parade has become a traditional event watched by many millions of television viewers and in-person spectators each year.\n[…]\nIn addition, parade officials implemented a measure to keep the balloons closer to the ground during windy conditions. New York City law prohibits Macy's from flying the full-size balloons if sustained winds exceed 20 knots (23 mph) or wind gusts exceed 30 knots (35 mph); New York's tall buildings and mostly uniform grid plan can amplify wind velocity on city streets.\n[…]\nBalloons were tethered to a \"specially rigged anchor vehicle framework of five specialty vehicles\" rather than carried by handlers. Mayor of New York City Bill de Blasio stated that it would not be \"a live parade, but something that will really give us that warmth and that great feeling we have on Thanksgiving day.\" In 2021, the Macy's Thanksgiving Day Parade returned to its traditional in-person procession with 6,500 participants marching.\n[…]\nSince 2002, Macy's Studios has partnered with the Universal Orlando Resort (owned by NBC parent NBCUniversal) to bring balloons and floats from New York City to the theme park in Florida every holiday season in an event known as the Macy's Holiday Parade. The parade is performed daily and includes the Santa Claus float used in New York's parade. Performers from the Orlando area are cast as various clowns, and the park used to invite guests to be \"balloon handlers\" for the parade.\n[…]\nIn the 2000 Green Day album Warning, track 12 is titled 'Macy's Day Parade'.\n[…]\n1997 Macy's Thanksgiving Day Parade\n[…]\nMedia related to Macy's Thanksgiving Day Parade (category) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Macy%27s_Thanksgiving_Day_Parade",
        "situacao": "ok",
        "texto": "Macy's Thanksgiving Day Parade às vezes abreviado como Macy's Day Parade, é uma parada anual apresentada pela Macy's. O evento começou desde 1924 e é realizado no dia Ação de Graças nos EUA. A parada é apresentado pela rede de televisão NBC.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Tazos de Pokémon",
      "descricao": "Discos colecionáveis com pokémon distribuídos em pacotes de salgadinho, que viraram febre entre as crianças brasileiras no começo dos anos dois mil."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No começo dos anos dois mil, as crianças brasileiras colecionavam tazos de Pokémon que vinham dentro dos pacotes de salgadinho de qual marca?",
    "resposta": "Elma Chips",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tazo",
      "https://en.wikipedia.org/wiki/Tazos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tazo",
        "situacao": "ok",
        "texto": "Tazo é um brinquedo colecionável que foi lançado no México pela Sabritas em 1994, e que foi exportado mundialmente pela PepsiCo. O colecionável chegou ao Brasil através da Elma Chips, empresa que o distribuiu nacionalmente dentro das embalagens de seus salgadinhos a partir de março 1997. O sucesso do tazo durou cerca de 15 anos, desde seu lançamento em 1994 até cerca de 2009.\n[…]\nUEFA Champions League é uma coleção de tazos promocionais lançados pela Elma Chips no Brasil no ano de 2020 onde estampava as bolas das finais da liga dos campeões de futebol da Europa dentre as temporadas de 2000/2001 a 2019/2020.\n[…]\nA volta dos tazos ao Brasil em 2020 com a campanha chamada de #TazoVoltou foi bem recebida por grande parte do público que estava ansioso com a volta dos colecionáveis. Os tazos que consagram a Elma Chips no Brasil no final da década de 90 estavam sem novas coleções desde 2013 no país. Os inúmeros pedidos pela volta dos tazos por parte do público adulto somado ao intuito de apresentar os tazos a uma nova geração foi o que levou a Elma Chips a voltar a produzir os colecionáveis.\n[…]\nMesmo com a tão solicitada volta dos tazos a Elma Chips recebeu críticas negativas de alguns consumidores em suas redes sociais, insatisfeitos com o tema que estampava a nova coleção, essa que era diferente dos colecionáveis lançados pela dentre o final dos anos 90 ao final os anos 2000, coleções que normalmente apresentavam animações da época como Looney Tunes, O Máskara e Pokémon, Liga da Justiça, Yu-gi-oh! e Dragon Ball Z.\n[…]\nEm 2004, a empresa voltou a lançar uma nova coleção, dessa vez similar aos Metal Tazos da Elma Chips, chamada de \"Rappers'\", que trazia em suas estampas personagens da série Pokémon Advanced. Os Rappers' eram adquiridos nos pacotes de figurinha da coleção que ainda era composta por um álbum, e não podiam ser vendidos separadamente.\n[…]\nSite Oficial Elma Chips"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tazos",
        "situacao": "ok",
        "texto": "Tazos are disks that were distributed as promotional items with products of Frito-Lay and its subsidiaries around the world. Tazos have been released in several different formats, ranging from the original circular disks, to octagonal disks, to forms that resemble more of a collectible card.\n[…]\nTazos started out with a set of 100 disks featuring the images of Looney Tunes characters and 124 Tiny Toons tazos in 1994. The disks were added to the products of Mexican snacks company Sabritas and were named after the expression taconazo (to kick with the heel) which was a reference to another popular school game in Mexico where children open bottles with their shoes trying to launch the caps the furthest.\n[…]\nChiquito de la Calzada (1994, set of 10 in Spain, \"chiqui tazos\")\n[…]\nPokémon (1999, set of 51)\n[…]\nPokémon 2 (2000, set of 100)\n[…]\nPokémon 3 (2001)\n[…]\nCubi-Tazos featuring Scooby-Doo (TV, 2001, set of 24)\n[…]\nPokémon 4 Generación Avanzada (2008, set of 235)\n[…]\nBakugan Battle Brawlers (TV, 2010 in Cheetos Sorpresa in Peru with the slogan \"Descubre el Poder de los Tazos\" English: Discover the Power of Tazos, numbered set of 120)\n[…]\nTazos have been released around the world, in bags of potato chips (crisps) and other snacks including Bollycao, Chipicao, Cheese Tris, Cheetos, Cheetos Sorpresa, Chizitos, Doritos, Fandangos, Lay's Potato Chips, Meridian Real Thai Chicken Chips, Sabritas, Piqueo Snax, Simba Chips, Smith's Potato Crisps, Thins, Twistees, Uncle Chipps, and Walkers.\n[…]\nBelow is a list of official basic Australian Tazos and the year they were released.\n[…]\nThe Yu-Gi-Oh! Metalix set did contain a couple bonus Tazos offered with a kids magazine K-Zone and at Shell petrol stations.\n[…]\nTazos Australia\n[…]\nspakatak.com Australian Tazos Guide\n[…]\nTazos MEXICO Archived 2017-07-01 at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Versão brasileira do anime Pokémon",
      "descricao": "Exibição dublada em português do anime Pokémon no Brasil, que estreou na TV aberta no fim dos anos noventa."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na dublagem brasileira do anime, o herói se chama Ash, e não Satoshi, como no Japão. De qual versão estrangeira o Brasil herdou esses nomes?",
    "resposta": "Da versão americana",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_(anime)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_(anime)",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nPokémon Generations é uma série ONA com curtas passados na versão norte-americana baseado nos traços de Pokémon Origins, possui um total de 18 episódios. Eles foram ao ar em 9 de dezembro de 2016 no canal Pokémon do YouTube.\n[…]\nPokémon Evolutions  é uma série ONA com curtas passados na versão norte-americana baseado nos traços de Pokémon Generations, possui um total de 8 episódios. Eles foram ao ar em 9 de setembro de 2021 no canal Pokémon do YouTube.\n[…]\nPokémon foi originalmente licenciado nos Estados Unidos pela 4Kids Entertainment, que produziu uma adaptação localizada em inglês, distribuída pela The Summit Media Group. A versão localizada estreou em distribuição em 8 de setembro de 1998, vinte dias antes do lançamento norte-americano de Pokémon Red e Blue. Pokémon foi distribuído em VHS e DVD pela Pioneer Entertainment e Viz Video, que venderam 25 milhões de unidades da série em 2000.\n[…]\nCarl Kimlinger, em uma crítica de agosto de 2008 da série Diamante e Pérola para o Anime News Network, deu à versão dublada uma nota geral C. Ele escreveu: \"A fórmula já está definida...\n[…]\nEm 18 de agosto de 2016, o episódio de XYZ Vitória na Liga Kalos! A Maior Batalha Decisiva de Satoshi (カロスリーグ優勝！サトシ頂上決戦, transliterado como Karosurīgu yūshō! Satoshi chōjō kessen), intitulado Um Final Ardente! na dublagem brasileira e Arrebatadora reta final! na dobragem portuguesa) foi alvo de críticas dos fãs após Ash perder a Liga Kalos para Alain.\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)"
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
