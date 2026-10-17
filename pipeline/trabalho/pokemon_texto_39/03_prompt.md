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
      "nome": "Lema da Equipe Rocket",
      "descricao": "Fala de apresentação recitada por Jessie, James e Meowth no anime Pokémon sempre que entram em cena."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No lema da Equipe Rocket, ou Team Rocket, Jessie e James prometem denunciar os males de quais duas coisas, ao contrário do que faria um herói?",
    "resposta": "Da verdade e do amor",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Rocket%27s_motto",
      "https://en.wikipedia.org/wiki/Team_Rocket"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Rocket%27s_motto",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Team_Rocket",
        "situacao": "ok",
        "texto": "Team Rocket (Japanese: ロケット団, Hepburn: Roketto-dan; Japanese: [ɾo̞ke̞t̚to̞ dã̠ɴ]) is a fictional crime syndicate in the Pokémon franchise. Team Rocket is the primary antagonist in the original Pokémon video games Red, Green, and Blue, as well as in the long-running Pokémon anime TV-series. In the latter, Team Rocket is primarily represented through the trio of characters Jessie, James, and Meowth,\n[…]\nIn the long-running Pokémon anime series, a trio of Team Rocket grunts Jessie (ムサシ, Musashi), James (コジロウ, Kojirō), and Meowth (ニャース, Nyarth) are major secondary characters. The three were the primary antagonists of the anime series, where each episode they attempt to kidnap Ash Ketchum's Pikachu.\n[…]\nTeam Rocket appear as the main antagonists in several arcs of the Pokémon Adventures manga, including the Red, Green, and Blue, Yellow, and Gold and Silver arcs. The Team Rocket trio from the anime appear in the 1999 manga adaptation Electric Tale of Pikachu, which was loosely inspired by some episodes of the Indigo League. Jessie and James are shown at the end to be married and expecting a child.\n[…]\nTeam Rocket is the central antagonist in the 2000 stageplay Pokémon Live!, in which Jessie, James, and Meowth successfully steal Ash Ketchum's Pikachu and use it to train Giovanni's Mewtwo. Team Rocket characters additionally frequently appear on cards in the Pokémon Trading Card Game, most notably in the Team Rocket expansion released in 2000.\n[…]\nChris Carter of Destructoid called the English voice team for Jessie, James, and Meowth (Lillis, Stuart, and Blaustein) \"some of the show's finest work.\" Their role in Pokémon the Series: Black & White was cited by Polygon to be one of the biggest missed opportunities with their characters, due to the sudden cancellation of several episodes leading to Team Rocket's character changes in the series being for \"nothing.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Equipe_Rocket",
        "situacao": "ok",
        "texto": "A Equipe Rocket, conhecido em inglês como Team Rocket (japonês: ロケット団, Hepburn: Roketto-dan; [ɾo̞ke̞t̚to̞ dã̠ɴ]), é uma organização criminosa fictícia da franquia Pokémon. Ela é a principal antagonista nos jogos originais de Pokémon Red, Green e Blue, bem como na longa série de anime Pokémon. Nesta última, a Equipe Rocket é representada principalmente pelo trio de personagens Jessie, James e Meowt\n[…]\nA Equipe Rocket aparece como os principais antagonistas em vários arcos do mangá Pokémon Adventures, incluindo os arcos Red, Green e Blue, Yellow e Gold e Silver. O trio da Equipe Rocket do anime aparece na adaptação para mangá do universo alternativo de Electric Tale of Pikachu, vagamente inspirada em alguns episódios da Liga Índigo e criada em 1999, onde Jessie e James são mostrados no final casados ​​e esperando um filho.\n[…]\nA Equipe Rocket é a principal antagonista na peça teatral de 2000, Pokémon Live!, na qual Jessie, James e Meowth roubam com sucesso o Pikachu de Ash Ketchum e o usam para treinar o Mewtwo de Giovanni. Os personagens da Equipe Rocket também aparecem frequentemente em cartas do Pokémon Trading Card Game, principalmente na expansão da Equipe Rocket lançada em 2000.\n[…]\nTanto nos jogos quanto no anime, a Equipe Rocket é considerada uma das melhores vilãs da franquia Pokémon. Chris Carter, do Destructoid, chamou a equipe de dublagem inglesa de Jessie, James e Meowth (Lillis, Stuart e Blaustein) de \"um dos melhores trabalhos da série\".\n[…]\nO livro Anime Classics Zettai!: 100 Must-See Japanese Animation Masterpieces analisa a Equipe Rocket como os antagonistas do anime, que na verdade proporcionam alívio cômico através dos personagens Jessie e James, com Meowth retratado como um \"gato esperto\" que se destaca entre os outros Meowth. O livro também menciona Jessie, que possui um charme irresistível, como a líder acima de James.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Bordão Equipe Rocket decolando de novo",
      "descricao": "Frase gritada por Jessie, James e Meowth no anime Pokémon quando são derrotados e lançados pelos ares."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Toda vez que são derrotados e lançados pelos ares, Jessie, James e Meowth gritam que a Equipe Rocket, ou Team Rocket, está fazendo o quê de novo?",
    "resposta": "Decolando (blasting off)",
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
        "texto": "Team Rocket (Japanese: ロケット団, Hepburn: Roketto-dan; Japanese: [ɾo̞ke̞t̚to̞ dã̠ɴ]) is a fictional crime syndicate in the Pokémon franchise. Team Rocket is the primary antagonist in the original Pokémon video games Red, Green, and Blue, as well as in the long-running Pokémon anime TV-series. In the latter, Team Rocket is primarily represented through the trio of characters Jessie, James, and Meowth,\n[…]\nTeam Rocket's Meowth – a common species of Pokémon – is unusual within the Pokémon canon, as he is the only Pokémon creature able to speak the human language, whereas all other Pokémon in the series only utter syllables of their own names.\n[…]\nJessie and James originally had an Ekans and a Koffing as their signature Pokémon, respectively, and the trio were later joined by a Wobbuffet as one of their only major recurring Pokémon as the series progressed. As the Pokémon series evolved, the Team Rocket trio uses an increasingly large number of vehicles and mecha. Most notably, they travel in a Meowth-shaped hot air balloon throughout the show, and use a Gyarados-shaped submarine in its early seasons.\n[…]\nTeam Rocket is the central antagonist in the 2000 stageplay Pokémon Live!, in which Jessie, James, and Meowth successfully steal Ash Ketchum's Pikachu and use it to train Giovanni's Mewtwo. Team Rocket characters additionally frequently appear on cards in the Pokémon Trading Card Game, most notably in the Team Rocket expansion released in 2000.\n[…]\nChris Carter of Destructoid called the English voice team for Jessie, James, and Meowth (Lillis, Stuart, and Blaustein) \"some of the show's finest work.\" Their role in Pokémon the Series: Black & White was cited by Polygon to be one of the biggest missed opportunities with their characters, due to the sudden cancellation of several episodes leading to Team Rocket's character changes in the series being for \"nothing.\""
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
    "indice": 3,
    "ancora": {
      "nome": "Equipe Rocket",
      "descricao": "Organização criminosa da franquia Pokémon, representada no anime pela dupla Jessie e James e pelo Meowth falante."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Para perseguir Ash pelos céus, o trio da Equipe Rocket, ou Team Rocket, costuma usar um balão. Que formato ele tem?",
    "resposta": "A cabeça de Meowth",
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
        "texto": "Team Rocket (Japanese: ロケット団, Hepburn: Roketto-dan; Japanese: [ɾo̞ke̞t̚to̞ dã̠ɴ]) is a fictional crime syndicate in the Pokémon franchise. Team Rocket is the primary antagonist in the original Pokémon video games Red, Green, and Blue, as well as in the long-running Pokémon anime TV-series. In the latter, Team Rocket is primarily represented through the trio of characters Jessie, James, and Meowth,\n[…]\nIn the long-running Pokémon anime series, a trio of Team Rocket grunts Jessie (ムサシ, Musashi), James (コジロウ, Kojirō), and Meowth (ニャース, Nyarth) are major secondary characters. The three were the primary antagonists of the anime series, where each episode they attempt to kidnap Ash Ketchum's Pikachu.\n[…]\nTeam Rocket's Meowth – a common species of Pokémon – is unusual within the Pokémon canon, as he is the only Pokémon creature able to speak the human language, whereas all other Pokémon in the series only utter syllables of their own names.\n[…]\nJessie and James originally had an Ekans and a Koffing as their signature Pokémon, respectively, and the trio were later joined by a Wobbuffet as one of their only major recurring Pokémon as the series progressed. As the Pokémon series evolved, the Team Rocket trio uses an increasingly large number of vehicles and mecha. Most notably, they travel in a Meowth-shaped hot air balloon throughout the show, and use a Gyarados-shaped submarine in its early seasons.\n[…]\nLater on, Team Rocket became known for their large number of mecha and gadgets.\n[…]\nChris Carter of Destructoid called the English voice team for Jessie, James, and Meowth (Lillis, Stuart, and Blaustein) \"some of the show's finest work.\" Their role in Pokémon the Series: Black & White was cited by Polygon to be one of the biggest missed opportunities with their characters, due to the sudden cancellation of several episodes leading to Team Rocket's character changes in the series being for \"nothing.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Equipe_Rocket",
        "situacao": "ok",
        "texto": "A Equipe Rocket, conhecido em inglês como Team Rocket (japonês: ロケット団, Hepburn: Roketto-dan; [ɾo̞ke̞t̚to̞ dã̠ɴ]), é uma organização criminosa fictícia da franquia Pokémon. Ela é a principal antagonista nos jogos originais de Pokémon Red, Green e Blue, bem como na longa série de anime Pokémon. Nesta última, a Equipe Rocket é representada principalmente pelo trio de personagens Jessie, James e Meowt\n[…]\nNa longa série de anime Pokémon, um trio de recrutas da Equipe Rocket, Jessie (ムサシ, Musashi), James (コジロウ, Kojirō) e Meowth (ニャース, Nyarth), são personagens secundários importantes. Os três eram os principais antagonistas da série, onde em cada episódio tentavam sequestrar o Pikachu de Ash Ketchum.\n[…]\nMais notavelmente, eles viajam em um balão de ar quente em forma de Meowth ao longo da série e usam um submarino em forma de Gyarados em suas primeiras temporadas. Mais tarde, a Equipe Rocket ficou conhecida por seu grande número de mechas e dispositivos. Os personagens da Equipe Rocket têm histórias de fundo comoventes e compartilham uma forte camaradagem. Eles não são ideologicamente alinhados com Giovanni, e portanto, frequentemente se encontram do lado dos protagonistas da série.\n[…]\nTanto nos jogos quanto no anime, a Equipe Rocket é considerada uma das melhores vilãs da franquia Pokémon. Chris Carter, do Destructoid, chamou a equipe de dublagem inglesa de Jessie, James e Meowth (Lillis, Stuart e Blaustein) de \"um dos melhores trabalhos da série\".\n[…]\nO livro Anime Classics Zettai!: 100 Must-See Japanese Animation Masterpieces analisa a Equipe Rocket como os antagonistas do anime, que na verdade proporcionam alívio cômico através dos personagens Jessie e James, com Meowth retratado como um \"gato esperto\" que se destaca entre os outros Meowth. O livro também menciona Jessie, que possui um charme irresistível, como a líder acima de James.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Pokémon Preto e Branco (anime)",
      "descricao": "Série do anime Pokémon em que Ash viaja pela região de Unova com Iris e Cilan."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na série Preto e Branco, Jessie, James e Meowth chegam a Unova mais sérios e competentes. Que cor passam a ter os seus uniformes?",
    "resposta": "Preto",
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
        "texto": "Team Rocket (Japanese: ロケット団, Hepburn: Roketto-dan; Japanese: [ɾo̞ke̞t̚to̞ dã̠ɴ]) is a fictional crime syndicate in the Pokémon franchise. Team Rocket is the primary antagonist in the original Pokémon video games Red, Green, and Blue, as well as in the long-running Pokémon anime TV-series. In the latter, Team Rocket is primarily represented through the trio of characters Jessie, James, and Meowth,\n[…]\nIn the long-running Pokémon anime series, a trio of Team Rocket grunts Jessie (ムサシ, Musashi), James (コジロウ, Kojirō), and Meowth (ニャース, Nyarth) are major secondary characters. The three were the primary antagonists of the anime series, where each episode they attempt to kidnap Ash Ketchum's Pikachu.\n[…]\nTeam Rocket is the central antagonist in the 2000 stageplay Pokémon Live!, in which Jessie, James, and Meowth successfully steal Ash Ketchum's Pikachu and use it to train Giovanni's Mewtwo. Team Rocket characters additionally frequently appear on cards in the Pokémon Trading Card Game, most notably in the Team Rocket expansion released in 2000.\n[…]\nAs comic relief characters, Jessie, James, and Meowth are very popular among Pokémon viewers, having been cited as some of the best villains in the franchise. Yahoo!-writer Jay Castello notes that as Pokémon fans grew up, the struggle of \"twenty-somethings who couldn't quite find their place in the world or succeed at their ambitions\" became increasingly relatable, and a sub-fandom dedicated to the trio sprang up.\n[…]\nChris Carter of Destructoid called the English voice team for Jessie, James, and Meowth (Lillis, Stuart, and Blaustein) \"some of the show's finest work.\" Their role in Pokémon the Series: Black & White was cited by Polygon to be one of the biggest missed opportunities with their characters, due to the sudden cancellation of several episodes leading to Team Rocket's character changes in the series being for \"nothing.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Equipe_Rocket",
        "situacao": "ok",
        "texto": "A Equipe Rocket, conhecido em inglês como Team Rocket (japonês: ロケット団, Hepburn: Roketto-dan; [ɾo̞ke̞t̚to̞ dã̠ɴ]), é uma organização criminosa fictícia da franquia Pokémon. Ela é a principal antagonista nos jogos originais de Pokémon Red, Green e Blue, bem como na longa série de anime Pokémon. Nesta última, a Equipe Rocket é representada principalmente pelo trio de personagens Jessie, James e Meowt\n[…]\nNa longa série de anime Pokémon, um trio de recrutas da Equipe Rocket, Jessie (ムサシ, Musashi), James (コジロウ, Kojirō) e Meowth (ニャース, Nyarth), são personagens secundários importantes. Os três eram os principais antagonistas da série, onde em cada episódio tentavam sequestrar o Pikachu de Ash Ketchum.\n[…]\nComo personagens de alívio cômico, Jessie, James e Meowth são muito populares entre os fãs de Pokémon. O escritor do Yahoo!, Jay Castello, observa que, à medida que os fãs de Pokémon cresciam, a luta de \"jovens na casa dos vinte anos que não conseguiam encontrar seu lugar no mundo ou ter sucesso em suas ambições\" tornou-se cada vez mais identificável, e um subfandom dedicado ao trio surgiu.\n[…]\nTanto nos jogos quanto no anime, a Equipe Rocket é considerada uma das melhores vilãs da franquia Pokémon. Chris Carter, do Destructoid, chamou a equipe de dublagem inglesa de Jessie, James e Meowth (Lillis, Stuart e Blaustein) de \"um dos melhores trabalhos da série\".\n[…]\nO papel deles em Pokémon The Series: Black and White foi citado pelo Polygon como uma das maiores oportunidades perdidas com seus personagens, devido ao cancelamento repentino de vários episódios, fazendo com que as mudanças de personalidade da Equipe Rocket na série fossem \"em vão\". O rapper americano Lil Uzi Vert nomeou a oitava música de sua mixtape, Lil Uzi Vert vs. the World, \"Team Rocket\", juntamente com outras referências a Pokémon em músicas anteriores.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Giovanni",
      "descricao": "Chefe da Equipe Rocket nos jogos e no anime Pokémon."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Nos primeiros episódios, o rosto de Giovanni quase não aparecia, mas sim o pokémon gato no seu colo, que desperta o ciúme de Meowth. Que pokémon é esse?",
    "resposta": "Persian",
    "distratores": [
      "Liepard",
      "Purugly",
      "Glameow"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Giovanni%27s_Persian",
      "https://en.wikipedia.org/wiki/Meowth"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Giovanni%27s_Persian",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Meowth",
        "situacao": "ok",
        "texto": "Meowth (, mee-OW-th), known in Japanese as Nyarth (Japanese: ニャース), is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise, and the first stage of its evolved form, Persian. First introduced in the video games Pokémon Red and Blue, it has received multiple new forms, including regional variants called Alolan Meowth and Galarian Meowth in Pokémon Sun and Moon and Pokémon Sword an\n[…]\nDuring the development of sequel titles Pokémon Sun and Moon, \"Alolan form\" variants of several existing Pokémon were introduced, meant to be tied thematically to the game's region, which was modeled after Hawaii. Both Meowth and Persian received Alolan forms, which give them a new Dark type instead of its Normal type. Like Meowth, it also evolves into Persian, which is also newly Dark type. In Pokémon Sword and Shield, Meowth is given two new forms.\n[…]\nThe first is a special transformation called a Gigantamax form, which causes Meowth to both grow to incredible heights and become very long. The second is called Galarian Meowth, a Steel-type Pokémon that evolves into a new Pokémon called Perrserker instead of Persian.\n[…]\nTheGamer writer Stacey Henley was frustrated by the propensity of generation I Pokémon getting regional forms, Meowth in particular due to the fact that it got two different regional forms. She believed that Meowth getting its Alolan form was acceptable but not a necessary one due to its popularity in the anime. On its Galarian form, she felt that Meowth having four new forms with Alolan Meowth and Persian, Galarian Meowth, and Perrserker was stupid.\n[…]\nConnor Christie believed that Meowth was the most ubiquitous cat Pokémon, owing to its anime appearance and stating that it stood alongside Pikachu and Jigglypuff in terms of recognizability.\n[…]\nMeowth on Pokemon.com\n[…]\nMeowth  at Bulbapedia, a Pokémon wiki"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "James (Equipe Rocket)",
      "descricao": "Integrante da Equipe Rocket no anime Pokémon, parceiro de Jessie e Meowth, chamado Kojiro no Japão."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "James, da Equipe Rocket, ou Team Rocket, guarda com orgulho e muito carinho uma coleção curiosa. O que ele coleciona?",
    "resposta": "Tampinhas de garrafa",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/James",
      "https://en.wikipedia.org/wiki/Team_Rocket"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/James",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Team_Rocket",
        "situacao": "ok",
        "texto": "Team Rocket (Japanese: ロケット団, Hepburn: Roketto-dan; Japanese: [ɾo̞ke̞t̚to̞ dã̠ɴ]) is a fictional crime syndicate in the Pokémon franchise. Team Rocket is the primary antagonist in the original Pokémon video games Red, Green, and Blue, as well as in the long-running Pokémon anime TV-series. In the latter, Team Rocket is primarily represented through the trio of characters Jessie, James, and Meowth,\n[…]\nIn the long-running Pokémon anime series, a trio of Team Rocket grunts Jessie (ムサシ, Musashi), James (コジロウ, Kojirō), and Meowth (ニャース, Nyarth) are major secondary characters. The three were the primary antagonists of the anime series, where each episode they attempt to kidnap Ash Ketchum's Pikachu.\n[…]\nTeam Rocket appear as the main antagonists in several arcs of the Pokémon Adventures manga, including the Red, Green, and Blue, Yellow, and Gold and Silver arcs. The Team Rocket trio from the anime appear in the 1999 manga adaptation Electric Tale of Pikachu, which was loosely inspired by some episodes of the Indigo League. Jessie and James are shown at the end to be married and expecting a child.\n[…]\nTeam Rocket is the central antagonist in the 2000 stageplay Pokémon Live!, in which Jessie, James, and Meowth successfully steal Ash Ketchum's Pikachu and use it to train Giovanni's Mewtwo. Team Rocket characters additionally frequently appear on cards in the Pokémon Trading Card Game, most notably in the Team Rocket expansion released in 2000.\n[…]\nChris Carter of Destructoid called the English voice team for Jessie, James, and Meowth (Lillis, Stuart, and Blaustein) \"some of the show's finest work.\" Their role in Pokémon the Series: Black & White was cited by Polygon to be one of the biggest missed opportunities with their characters, due to the sudden cancellation of several episodes leading to Team Rocket's character changes in the series being for \"nothing.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Equipe_Rocket",
        "situacao": "ok",
        "texto": "A Equipe Rocket, conhecido em inglês como Team Rocket (japonês: ロケット団, Hepburn: Roketto-dan; [ɾo̞ke̞t̚to̞ dã̠ɴ]), é uma organização criminosa fictícia da franquia Pokémon. Ela é a principal antagonista nos jogos originais de Pokémon Red, Green e Blue, bem como na longa série de anime Pokémon. Nesta última, a Equipe Rocket é representada principalmente pelo trio de personagens Jessie, James e Meowt\n[…]\nNa longa série de anime Pokémon, um trio de recrutas da Equipe Rocket, Jessie (ムサシ, Musashi), James (コジロウ, Kojirō) e Meowth (ニャース, Nyarth), são personagens secundários importantes. Os três eram os principais antagonistas da série, onde em cada episódio tentavam sequestrar o Pikachu de Ash Ketchum.\n[…]\nTanto nos jogos quanto no anime, a Equipe Rocket é considerada uma das melhores vilãs da franquia Pokémon. Chris Carter, do Destructoid, chamou a equipe de dublagem inglesa de Jessie, James e Meowth (Lillis, Stuart e Blaustein) de \"um dos melhores trabalhos da série\".\n[…]\nO papel deles em Pokémon The Series: Black and White foi citado pelo Polygon como uma das maiores oportunidades perdidas com seus personagens, devido ao cancelamento repentino de vários episódios, fazendo com que as mudanças de personalidade da Equipe Rocket na série fossem \"em vão\". O rapper americano Lil Uzi Vert nomeou a oitava música de sua mixtape, Lil Uzi Vert vs. the World, \"Team Rocket\", juntamente com outras referências a Pokémon em músicas anteriores.\n[…]\nO livro Anime Classics Zettai!: 100 Must-See Japanese Animation Masterpieces analisa a Equipe Rocket como os antagonistas do anime, que na verdade proporcionam alívio cômico através dos personagens Jessie e James, com Meowth retratado como um \"gato esperto\" que se destaca entre os outros Meowth. O livro também menciona Jessie, que possui um charme irresistível, como a líder acima de James.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Jessie (Equipe Rocket)",
      "descricao": "Integrante da Equipe Rocket no anime Pokémon, parceira de James e Meowth, chamada Musashi no Japão."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A mãe de Jessie, Miyamoto, também era agente da Equipe Rocket, ou Team Rocket. Ela desapareceu durante a busca por qual pokémon mítico?",
    "resposta": "Mew",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Miyamoto",
      "https://bulbapedia.bulbagarden.net/wiki/Jessie",
      "https://en.wikipedia.org/wiki/Team_Rocket"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Miyamoto",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jessie",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Team_Rocket",
        "situacao": "ok",
        "texto": "Team Rocket (Japanese: ロケット団, Hepburn: Roketto-dan; Japanese: [ɾo̞ke̞t̚to̞ dã̠ɴ]) is a fictional crime syndicate in the Pokémon franchise. Team Rocket is the primary antagonist in the original Pokémon video games Red, Green, and Blue, as well as in the long-running Pokémon anime TV-series. In the latter, Team Rocket is primarily represented through the trio of characters Jessie, James, and Meowth,\n[…]\nIn the long-running Pokémon anime series, a trio of Team Rocket grunts Jessie (ムサシ, Musashi), James (コジロウ, Kojirō), and Meowth (ニャース, Nyarth) are major secondary characters. The three were the primary antagonists of the anime series, where each episode they attempt to kidnap Ash Ketchum's Pikachu.\n[…]\nTeam Rocket appear as the main antagonists in several arcs of the Pokémon Adventures manga, including the Red, Green, and Blue, Yellow, and Gold and Silver arcs. The Team Rocket trio from the anime appear in the 1999 manga adaptation Electric Tale of Pikachu, which was loosely inspired by some episodes of the Indigo League. Jessie and James are shown at the end to be married and expecting a child.\n[…]\nTeam Rocket is the central antagonist in the 2000 stageplay Pokémon Live!, in which Jessie, James, and Meowth successfully steal Ash Ketchum's Pikachu and use it to train Giovanni's Mewtwo. Team Rocket characters additionally frequently appear on cards in the Pokémon Trading Card Game, most notably in the Team Rocket expansion released in 2000.\n[…]\nChris Carter of Destructoid called the English voice team for Jessie, James, and Meowth (Lillis, Stuart, and Blaustein) \"some of the show's finest work.\" Their role in Pokémon the Series: Black & White was cited by Polygon to be one of the biggest missed opportunities with their characters, due to the sudden cancellation of several episodes leading to Team Rocket's character changes in the series being for \"nothing.\""
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
    "indice": 8,
    "ancora": {
      "nome": "Mimikyu de Jessie",
      "descricao": "Mimikyu que pertence a Jessie, da Equipe Rocket, na série Sol e Lua do anime Pokémon, inimigo declarado do Pikachu de Ash."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Na série Sol e Lua, que pokémon fantasma de Jessie guarda um ódio profundo do Pikachu de Ash e vive querendo derrotá-lo?",
    "resposta": "Mimikyu",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Jessie%27s_Mimikyu",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Sun_%26_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jessie%27s_Mimikyu",
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
        "texto": "Pokémon the Series: Sun & Moon (Brasil: Pokémon: Sol e Lua / Portugal: Pokémon A Série Sol e Lua) é a vigésima temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada de Pokémon, a Série: Sol e Lua (Pokémon the Series: Sun & Moon).\n[…]\nEsta temporada acompanha as aventuras de Ash Ketchum e seu parceiro Pikachu enquanto viajam para a região de Alola, frequentam a escola Pokémon com seus colegas Lillie, Lana, Mallow, Kiawe e Sophocles, participam dos desafios das ilhas e aprendem a usar o poder dos Movimentos Z.\n[…]\nA temporada foi originalmente exibida no Japão de 17 de novembro de 2016 a 21 de setembro de 2017 na TV Tokyo, e nos Estados Unidos de 12 de maio de 2017 a 9 de dezembro de 2017 no Disney XD, tornando-se a primeira série Pokémon a estrear nesse canal. Antes disso, uma prévia dos dois primeiros episódios foi exibida na emissora em 5 de dezembro de 2016.\n[…]\nAs músicas de abertura japonesas são \"Alola!!\" (アローラ!!, Arōra!!) de Satoshi/Ash Ketchum (Rica Matsumoto) com Pikachu (Ikue Otani) em 29 episódios, e a música tema de abertura japonesa de Pokémon the Movie: I Choose You!, \"Aim to Be a Pokémon Master (20th Anniversary)\" (めざせポケモンマスター (20th Anniversary), Mezase Pokémon Masutā (20th Anniversary)) de Rica Matsumoto, em 14 episódios para promover o filme. A música de encerramento é \"Pose\" (ポーズ, Pōzu) de Taiiku Okazaki.\n[…]\nA Viz Media e a Warner Home Video lançaram a série completa em um único box com 6 DVDs nos Estados Unidos em 21 de maio de 2019.\n[…]\nWebsite oficial de Pokémon US (em inglês)\n[…]\nWebsite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nWebsite de Pokémon Sun e Moon na TV Tokyo (em japonês)\n[…]\nWebsite oficial do anime de televisão Pokémon no Pokémon JP  (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Arbok de Jessie",
      "descricao": "Arbok de Jessie, da Equipe Rocket, no anime Pokémon, que a acompanhava desde Kanto como Ekans."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Johto, Jessie e James se despedem de Arbok e Weezing, seus parceiros desde o começo do anime. Por que os dois pokémon ficam para trás?",
    "resposta": "Para proteger pokémon selvagens de um caçador",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Jessie%27s_Arbok",
      "https://bulbapedia.bulbagarden.net/wiki/James%27s_Weezing"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jessie%27s_Arbok",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/James%27s_Weezing",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Butch e Cassidy",
      "descricao": "Dupla de agentes da Equipe Rocket no anime Pokémon, rivais de Jessie e James dentro da organização."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os nomes de Cassidy e Butch, dupla rival de Jessie e James dentro da Equipe Rocket, ou Team Rocket, juntos e invertidos, homenageiam qual assaltante do Velho Oeste?",
    "resposta": "Butch Cassidy",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Butch",
      "https://en.wikipedia.org/wiki/Butch_Cassidy"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Butch",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Butch_Cassidy",
        "situacao": "ok",
        "texto": "Robert LeRoy Parker (April 13, 1866 – November 7, 1908), better known as Butch Cassidy, was an American cowboy, train and bank robber and the leader of a gang of criminal outlaws known as the \"Wild Bunch\" in the Old West.\n[…]\nButch Cassidy\n[…]\n1998: In Pokemon: The Series, two recurring Team Rocket members, named Butch and Cassidy in homage to the real-life person, debuted in the episode \"The Breeding Center Secret\".\n[…]\n1967: Butch Cassidy and Sundance appear as supporting characters in the film Return of the Gunfighter.\n[…]\n2006: Outlaw Trail: The Treasure of Butch Cassidy is an adventure film about a fictional \"lost treasure\" hidden by Butch Cassidy.\n[…]\n2011:  Blackthorn is a film that has Sam Shepard as an aged Butch Cassidy living under the assumed name James Blackthorn in a secluded village in Bolivia 20 years after his disappearance in 1908.\n[…]\n2013: Outlaws of the Patagonia It's an adventure comedy about a Buenos Aires indie filmmaker who goes to Chubut looking for treasure Butch Cassidy supposedly buried.\n[…]\n2025: Butch Cassidy's Forgotten Outlaw is a documentary that examines the life of outlaw Henry \"Bub\" Meeks, a childhood friend of Butch Cassidy, through the eyes of his descendants. Blending personal reflections with historical insights to reveal the enduring impact of his legacy.\n[…]\n(1994) \"Cassidy, Butch\" article in the Utah History Encyclopedia. The article was written by John D. Barton and the Encyclopedia was published by the University of Utah Press. ISBN 9780874804256. Archived from the original on March 21, 2024, and retrieved on April 6, 2024.\n[…]\nMedia related to Butch Cassidy at Wikimedia Commons\n[…]\nButch Cassidy's Surrender Offer article by Richard Patterson\n[…]\nIn Search Of…Butch Cassidy hosted by Leonard Nimoy"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Butch_Cassidy",
        "situacao": "ok",
        "texto": "Robert LeRoy Parker, mais conhecido como Butch Cassidy (Beaver, 13 de abril de 1866 – San Vicente, ca. 7 de novembro de 1908) foi um famoso criminoso norte-americano, assaltante de comboios,  e líder da quadrilha de foras-da-lei Hole in the Wall Gang.\n[…]\nRobert LeRoy Parker nasceu a 13 de abril de 1866, em Beaver (Utah). Ainda jovem adoptou o pseudónimo de Butch Cassidy, em homenagem a  Mike Cassidy, um antigo ladrão que o ensinou a roubar gado.\n[…]\nApós a prisão de Elzy Lay, Butch Cassidy juntou-se a Sundance Kid (Harry Longabaugh), formando uma dupla que se tornaria lendária. Afirma-se que, embora fosse assaltante e usasse armas, nunca matou pessoa alguma.\n[…]\nA morte de Cassidy é motivo de disputa por parte dos historiadores, existindo várias versões.\n[…]\nA versão oficial da morte de Butch e Sundance, diz que, em 1908, próximo a San Vicente, Bolívia, os dois bandidos foram perseguidos por soldados bolivianos, e foram mortos com rajadas de metralhadora.\n[…]\nLula Parker Betenson, irmã de Butch, teria alegado que o criminoso retornou aos Estados Unidos, onde viveu no anonimato. Lula também relata uma reunião dela, Cassidy, seu irmão Max e de seu pai Maxi, em 1925. A suportar essa versão, existem cartas datadas de 1930, com passagem pelo Brasil, 1937  enviadas de Rio de Janeiro e 1938, cartas trocadas entre os dois enviadas de São Paulo que supostamente foram enviadas para Sundance Kid e escritas por Cassidy.\n[…]\nButch Cassidy and the Sundance Kid\n[…]\nButch Cassidy é encarnado pelo actor Paul Newman\n[…]\nButch and Sundance: The Early Days\n[…]\nButch Cassidy é encarnado pelo actor Tom Berenger.\n[…]\nOutlaw Trail: The Treasure of Butch Cassidy\n[…]\nButch Cassidy é encarnado pelo actor Brian Wimmer.\n[…]\nButch Cassidy é encarnado pelo actor Sam Shepard.\n[…]\nHistory of Butch Cassidy (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Butch e Cassidy",
      "descricao": "Dupla de agentes da Equipe Rocket no anime Pokémon, rivais de Jessie e James dentro da organização."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Butch, da Equipe Rocket, vive irritado com uma piada que se repete sempre que ele reencontra Jessie, James e Meowth. Que piada é essa?",
    "resposta": "Errarem o nome dele",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Butch"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Butch",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Matori",
      "descricao": "Secretária de Giovanni na Equipe Rocket nas séries Sol e Lua e Jornadas do anime Pokémon."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Nas séries Sol e Lua e Jornadas, que secretária de Giovanni, de óculos e jeito severo, despreza Jessie, James e Meowth?",
    "resposta": "Matori",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Matori"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Matori",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Enfermeira Joy",
      "descricao": "Enfermeira dos Centros Pokémon no anime, que aparece em quase todas as cidades com a mesma aparência."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Kanto, a Enfermeira Joy trabalha ao lado de uma Chansey. Nos Centros Pokémon de Unova, que pokémon ocupa esse lugar?",
    "resposta": "Audino",
    "distratores": [
      "Blissey",
      "Wigglytuff",
      "Comfey"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Nurse_Joy"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Nurse_Joy",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Oficial Jenny",
      "descricao": "Policial do anime Pokémon que aparece em quase todas as cidades, sempre com a mesma aparência."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Kanto, a Oficial Jenny costuma patrulhar ao lado de um cão policial farejador, do tipo Fogo. Que pokémon é esse?",
    "resposta": "Growlithe",
    "distratores": [
      "Houndour",
      "Vulpix",
      "Ponyta"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Officer_Jenny"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Officer_Jenny",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Professor Carvalho",
      "descricao": "Pesquisador pokémon de Kanto, que entrega o primeiro pokémon ao jogador nos jogos Red e Blue e a Ash no anime."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No Japão, o ator Unshō Ishizuka dublou o Professor Carvalho por cerca de vinte anos. Que outro papel ele fazia no mesmo anime?",
    "resposta": "O narrador",
    "fonte": [
      "https://en.wikipedia.org/wiki/Unsh%C5%8D_Ishizuka",
      "https://bulbapedia.bulbagarden.net/wiki/Unsho_Ishizuka"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Unsh%C5%8D_Ishizuka",
        "situacao": "ok",
        "texto": "Unshō Ishizuka (石塚 運昇, Ishizuka Unshō; May 16, 1951 – August 13, 2018) was a Japanese actor, voice actor, narrator and theatre director from Katsuyama, Fukui. He was affiliated with Aoni Production at the time of his death and was known for providing the voice of both the narrator and Professor Oak/Dr. Yukinari Okido on the Japanese anime series Pokémon.\n[…]\nPokémon (Professor Oak, Narrator, Additional Voices)\n[…]\nPocket Monsters: Episode Orange Archipelago (Dr. Okido, Narrator, Additional Voices)\n[…]\nPocket Monsters: Episode Gold & Silver (Dr. Okido, Narrator, Additional Voices)\n[…]\nPocket Monster Side Stories (Dr. Okido, Narrator, Additional Voices)\n[…]\nPocket Monsters: Advanced Generation (Dr. Okido, Narrator, Additional Voices)\n[…]\nPocket Monsters: Diamond & Pearl (Dr. Okido, Narrator, Additional Voices)\n[…]\nPocket Monsters: Best Wishes! (Dr. Okido, Narrator, Additional Voices)\n[…]\nPocket Monsters: Best Wishes! Season 2: Episode N (Dr. Okido, Narrator, Additional Voices)\n[…]\nPocket Monsters: Best Wishes! Season 2: Decolora Adventure (Dr. Okido, Narrator, Additional Voices)\n[…]\nPocket Monsters XY (Dr. Okido, Narrator, Additional Voices)\n[…]\nPocket Monsters: XY&Z (Dr. Okido, Narrator, Additional Voices)\n[…]\nPocket Monsters: Sun & Moon (Dr. Okido, Narrator, Additional Voices)\n[…]\nPokémon: The Movie 2000 (1999) - Dr. Okido\n[…]\nPokémon 4Ever: Celebi – Voice of the Forest (2001) - Professor Orchid (Oak) / Onix\n[…]\nPokémon the Movie: I Choose You! (2017) - Narrator / Professor Okido\n[…]\nPokémon Snap (1999) (Doctor Ōkido)\n[…]\nFunny Face (2001 DVD edition) – Professor Emile Flostre (Michel Auclair)\n[…]\nLicence to Kill (1999 TV Asahi edition) – Professor Joe Butcher (Wayne Newton)\n[…]\nUnshō Ishizuka Archived 2020-07-11 at the Wayback Machine at GamePlaza-Haruka Voice Acting Database (in Japanese)\n[…]\nUnshō Ishizuka at Hitoshi Doi's Seiyuu Database (in Japanese)\n[…]\nUnshō Ishizuka  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Unsho_Ishizuka",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Professor Carvalho",
      "descricao": "Pesquisador pokémon de Kanto, que entrega o primeiro pokémon ao jogador nos jogos Red e Blue e a Ash no anime."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Além de pesquisar pokémon, o Professor Carvalho do anime tem um passatempo literário de que se orgulha muito. Qual é?",
    "resposta": "Escrever poemas",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Oak"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Professor_Oak",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Mr. Mime de Delia",
      "descricao": "Mr. Mime que vive com Delia Ketchum, mãe de Ash, em Pallet, no anime Pokémon, e ajuda nas tarefas da casa."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Na casa de Ash, em Pallet, que pokémon ajuda Delia, a mãe dele, a varrer, lavar roupa e cuidar das tarefas domésticas?",
    "resposta": "Mr. Mime",
    "distratores": [
      "Jynx",
      "Chansey",
      "Clefairy"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Delia%27s_Mr._Mime"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Delia%27s_Mr._Mime",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Dexter (Pokédex de Ash)",
      "descricao": "Pokédex falante que Ash recebe do Professor Carvalho no primeiro episódio do anime, chamada Dexter na dublagem americana."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na dublagem americana, a Pokédex falante que Ash recebe do Professor Carvalho ganhou um nome próprio. Que nome é esse?",
    "resposta": "Dexter",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Dexter",
      "https://en.wikipedia.org/wiki/Gameplay_of_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Dexter",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gameplay_of_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "Pokémon is a Japanese role-playing video game series developed by Game Freak and published by Nintendo and the Pokémon Company under the Pokémon franchise. It was created by Satoshi Tajiri with assistance from Ken Sugimori. The first games, Pocket Monsters Red and Green, were released in 1996 in Japan for the Game Boy, later released outside of Japan as Pokémon Red Version and Blue Version.\n[…]\nThe fifth generation of Pokémon began on September 18, 2010, with the release of Pokémon Black and White in Japan. They were then released in North America, Europe, and Australia in March 2011. They have released on the Nintendo DS, the same console as its preceding generation. The games take place in the Unova region.\n[…]\nThis generation introduced a total of 156 new Pokémon (beginning with Victini and ending with Genesect), the most of any generation so far. It was also the first generation where the first new Pokémon in National Pokédex order (Victini) is not a starter. It also introduced another new feature, the seasons, which two Pokémon (Deerling and Sawsbuck) represent.\n[…]\nOthers include Learn with Pokémon: Typing Adventure (a typing game) and Pokémon Conquest (a crossover game) for Nintendo DS, and downloadable reference applications Pokédex 3D, Pokédex 3D Pro (for Nintendo 3DS), and Pokédex for iOS (for iOS devices), which allows players to view information of Pokémon species while they have 3D models. Various fifth generation Pokémon have appeared in Super Smash Bros. for Nintendo 3DS and Wii U and Super Smash Bros.\n[…]\nDuring a Nintendo Direct presentation on February 26, 2016, two new Pokémon titles were announced, titled Pokémon Sun and Moon. The games were released on the Nintendo 3DS on November 18, 2016, in Japan, North America, and Australia, and in Europe on November 23, 2016."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28s%C3%A9rie_de_jogos_eletr%C3%B4nicos%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケットモンスター, Poketto Monsutā) é uma série japonesa de jogos eletrônicos de RPG de colecionar criaturas, desenvolvidos pela Game Freak e publicados pela Nintendo e The Pokémon Company sob franquia Pokémon. Foi criada por Satoshi Tajiri com a assistência de Ken Sugimori. Os primeiros jogos, Pocket Monsters Red e Green, foram lançados em 1996 no Japão para o console Game Boy, posteriormente la\n[…]\nCada jogo da série Pokémon se passa em uma região fictícia diferente do mundo Pokémon, geralmente baseada em um local do mundo real, e começa com o jogador recebendo um Pokémon inicial, normalmente do Professor Pokémon daquela região. Os jogadores têm a opção de escolher um entre três tipos diferentes de Pokémon. Muitos jogos incluem um personagem rival que atua como um obstáculo ou chefe ao longo do jogo.\n[…]\nO tipo de um Pokémon é um atributo elemental que determina os pontos fortes e fracos de cada Pokémon e seus golpes. Esses tipos interagem em uma relação semelhante a pedra, papel e tesoura: Pokémon recebem o dobro de dano de golpes de tipos aos quais são fracos e metade do dano de golpes de tipos aos quais são resistentes. Alguns tipos possuem propriedades especiais não relacionadas à tabela de danos; por exemplo, certos tipos não podem ser afetados por determinadas condições de estado.\n[…]\nPreencher a Pokédex é uma parte mais importante da progressão em Legends: Arceus do que em outros jogos.\n[…]\nA segunda geração de jogos eletrônicos de \"Pokémon\" começou em 1999 com o lançamento do Pokémon Gold & Silver para o console Game Boy Color, com Austrália e América do Norte recebendo o jogo em outubro de 2000 e data de lançamento europeu de abril de 2001. Como na geração anterior, uma versão aprimorada chamada Pokémon Crystal foi lançada mais tarde.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Mascarado de Ferro",
      "descricao": "Vilão do quarto filme da franquia Pokémon, um agente da Equipe Rocket de máscara de ferro que caça Celebi."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "No quarto filme de Pokémon, um caçador de máscara de ferro captura Celebi com uma Poké Bola especial, que o torna maligno. Que bola é essa?",
    "resposta": "Dark Ball",
    "distratores": [
      "Master Ball",
      "GS Ball",
      "Snag Ball"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Iron-Masked_Marauder",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_4Ever"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Iron-Masked_Marauder",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_4Ever",
        "situacao": "ok",
        "texto": "Pokémon 4Ever is a 2001 Japanese anime film directed by Kunihiko Yuyama and based on the television series Pokémon. The fourth official Pokémon film, it was released in Japan on July 7, 2001. The film was directed in Japan by Kunihiko Yuyama and written by Hideki Sonoda. It stars Rica Matsumoto, Ikue Ōtani, Mayumi Iizuka, Yūji Ueda, Satomi Kōrogi, Megumi Hayashibara, Shin-ichiro Miki, Inuko Inuyam\n[…]\nForty years later, the elderly hunter is confronted by the Iron Masked Marauder, a cruel and sinister member of Team Rocket, who seeks to enslave Celebi. The Marauder possesses Dark Balls, a unique Pokéball that can capture Pokémon already owned by Trainers, turns them evil, and increases their power to the highest level, and demonstrates it by capturing the hunter's Tyranitar, and ordering it to use its Hyper Beam to destroy most of the hunter's possessions.\n[…]\nTeam Rocket pursue the children, joining forces with the Marauder. The children are guided to the lake by wild Pokémon, where Celebi is healed. That night, Ash and Sammy bond, both hoping the latter can return to his era. The next day, the Marauder confronts the group, using a Dark Ball to capture Celebi and uses its immense powers over nature to encase it in an enormous draconian-like armor made from the forest.\n[…]\nAfter Jessie is captured, the Marauder admits he plans to use Celebi to overthrow Giovanni as leader of Team Rocket and take over the world himself. Ash, his friends, and Suicune battle to rescue Celebi from the Marauder's influence.\n[…]\nAsh, Sammy, and Pikachu breach Celebi's armor and convince it to resist the Marauder, regaining his memories and is freed from the Dark Ball's influence. The Marauder and Jessie tumble in the lake as Celebi's armour collapses. However, upon taking Celebi to the lakeside, it dies in Sammy's arms. The group attempt to revive it when Suicune purifies the lake, but it fails."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_4Ever",
        "situacao": "ok",
        "texto": "Pokémon 4: Viajantes do Tempo é o quarto filme da série Pokémon (ポケットモンスター セレビィ 時を超えた遭遇 - Serebii Toki o Koeta Deai em japonês), produzido no Japão e lançado em julho de 2001. Uma adaptação em inglês do filme foi lançada em outubro de 2002 nos Estados Unidos, produzida pela 4Kids Entertainment e distribuída pela então subsidiária da Disney, Miramax Films. O filme arrecadou de bilheteria no Japão u\n[…]\nHá 40 anos um poderoso pokémon, Celebi, escapou por pouco de um caçador especializado em capturar e vender pokémons raros. Juntamente com Sammy, um garoto, Celebi usou seus poderes para viajar no tempo e escapar da ameaça. Já no presente Sammy encontra Ash, Pikachu e seus amigos, a quem pede ajuda já que Celebi está esgotado pelo esforço feito pela viagem.\n[…]\nEntretanto o grupo terá que enfrentar um poderoso vilão, que possui uma pokebola capaz de transformar os pokémons capturados em criaturas malignas e poderosas.\n[…]\nO Pokémon 4Ever recebeu críticas geralmente negativas dos críticos de televisão. Alguns críticos consideraram \"previsível\" e \"decepcionante\", enquanto outros afirmaram que \"os espectadores não ficarão decepcionados\". O filme recebeu uma classificação de 16% no Rotten Tomatoes, de um total de 38 críticas, a mais baixa da série de filmes Pokémon (original), com leitura de consenso: \"Apenas para fãs obstinados de Pokemon\".\n[…]\nNo site TV Guide, Angel Cohn classificou o filme em 2 de 5 estrelas, afirmando que: \"embora bem feitas, essas cenas parecem chocantes e fora de sincronia com o resto do filme. Brincadeiras à parte, crianças e adultos apaixonados por tudo de Pokemon não vão se decepcionar\".\n[…]\nVicious\n[…]\nCelebi",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Zero (Pokémon)",
      "descricao": "Vilão do filme Giratina e o Guerreiro dos Céus, caçador que persegue Giratina."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No filme Giratina e o Guerreiro dos Céus, o caçador Zero persegue o lendário Giratina. O que ele pretende conseguir com isso?",
    "resposta": "Controlar o Mundo Reverso",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Zero",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Giratina_%26_the_Sky_Warrior"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Zero",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Giratina_%26_the_Sky_Warrior",
        "situacao": "ok",
        "texto": "Pokémon: Giratina & the Sky Warrior is a 2008 Japanese animated adventure film produced by OLM, Inc. and distributed by Toho. The film was directed by Kunihiko Yuyama from a screenplay by Hideki Sonoda. It is the eleventh film in the Pokémon anime series and the second film of Pokémon the Series: Diamond and Pearl, created by Satoshi Tajiri, Junichi Masuda and Ken Sugimori, and serves as a direct \n[…]\nFive years ago, Newton Graceland, a researcher of a world exactly opposite to the world of reality called the Reverse World, built a device to absorb the abilities of the Legendary Pokémon Giratina, the ruler of the Reverse World, to travel freely between the two worlds. He canceled the project upon learning that the process would kill Giratina. The blueprints were deleted, but Newton's assistant Zero never forgot them.\n[…]\nLater, time and space, two dimensions that should never have been in contact, collided and unraveled. Dialga, the Pokémon which rules over time, and Palkia, which controls space, then fought each other in Alamos Town, both believing the other to have violated their territory. The distortions in time and space defiled the Reverse World with pollution, angering Giratina.\n[…]\nOn the train, Shaymin makes contact with a Gracidea flower and transforms into its Sky Forme, altering its appearance to a deer-like state and allowing it to fly. Ash, Dawn, and Brock board a ferry to the Flower Garden, but are sucked into the Reverse World again, followed by Zero and his Pokémon. Giratina attacks the group after Shaymin provokes it. When night falls, Shaymin transforms back to its normal form.\n[…]\nShaymin heals Giratina, and Zero flees to the Reverse World to cause damage to the world of reality, resulting in the mountain's glacier to start moving towards the Flower Garden. The Pokémon Regigigas is awakened, and along with a herd of Mamoswine, slows the glacier down."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Giratina_and_the_Sky_Warrior",
        "situacao": "ok",
        "texto": "Pokémon: Giratina e o Cavaleiro do Céu é um filme de longa-metragem produzido no Japão em 2008 e depois foi enviado nos Estados Unidos em 2009, o décimo primeiro da série Pokémon. Além disso, é a segunda parte da trilogia da Saga Diamante e Pérola, sendo a continuação do filme Pokémon: O Pesadelo de Darkrai.\n[…]\nApós deixar o Mundo Reverso e conhecer Ash e seus amigos, Shaymin - comunicando-se telepaticamente - pede por ajuda, para que ele possa se reunir com os outros Shaymin no jardim Gracidea.\n[…]\nQuando o sistema de escaneamento falha e começa a sugar a vida de Giratina, Zero mente e diz que irá parar o escaneamento. De qualquer forma, Ash e Mugen param a máquina. Com a habilidade de viajar no espaço copiada, Giratina começa a morrer. Sem compreender a situação de Giratina, Shaymin o revive com Aroma Terapia (Aromatherapy). Obtendo a habilidade de viajar no espaço, Zero se louva e, para remover a origem da poluição no Mundo Reverso, começa a destruir os pilares de suporte do Mundo Real.\n[…]\nSuas ações começam a refletir no Mundo Real, causando um iceberg. Isso acaba criando uma crise onde cidades,vilas e o jardim das flores estão sendo destruídas. Para deter Zero, usando a viagem do espaço (space travel), Giratina, Shaymin e Ash têm de lutar em pleno ar no Mundo Reverso. Enquanto isso, no Mundo Real, Dawn e Cia batalham com ataques de gelo na tentativa de impedir o movimento do iceberg, mas isto não adianta.\n[…]\nApenas então, no santuário vizinho, Regigigas desperta e diz: “You’re not so tough!” (Você não é tão forte/resistente) e puxa o iceberg de volta apenas com suas mãos. Parece impossível, mas é o que acontece. No Mundo Reverso, a batalha é decidida por Ash e Shaymin com seu Seed Flare. Zero é derrotado pelo ataque e eles assumem o controle da situação.\n[…]\n■Inglês: Giratina and the Sky Warrior",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Grings Kodai",
      "descricao": "Empresário vilão do filme Zoroark: O Mestre das Ilusões, que cobiça o poder ligado a Celebi."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No filme de Zoroark, o empresário Grings Kodai cobiça as ondas do tempo deixadas pelas viagens de Celebi. Que poder elas lhe dão?",
    "resposta": "Ver o futuro",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Grings_Kodai",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Zoroark:_Master_of_Illusions"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Grings_Kodai",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Zoroark:_Master_of_Illusions",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Lysandre (anime)",
      "descricao": "Líder da Equipe Flare na série XY do anime Pokémon, antagonista principal da temporada XYZ."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em XYZ, Lysandre, líder da Equipe Flare, ou Team Flare, toma o controle de qual lendário de Kalos para espalhar destruição por Lumiose?",
    "resposta": "Zygarde",
    "distratores": [
      "Xerneas",
      "Yveltal",
      "Diancie"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lysandre_(anime)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_XY"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lysandre_(anime)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_XY",
        "situacao": "ok",
        "texto": "Pokémon the Series: XY is the seventeenth season of the Pokémon anime series and the first and titular season of Pokémon the Series: XY, known in Japan as Pocket Monsters: XY (ポケットモンスター エックス・ワイ, Poketto Monsutā Ekkusu Wai).\n[…]\nThe season follows Ash Ketchum as he travels across the Kalos region to challenge its Pokémon League while joined by Serena, an aspiring Pokémon Performer, Clemont, the Lumiose City Gym Leader and an inventor, and Bonnie, his younger sister.\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Series%3A_XY_%28temporada%29",
        "situacao": "ok",
        "texto": "Pokémon the Series: XY (Brasil: Pokémon: A Série XY / Portugal: Pokémon A Série XY: Uma Nova Mega-Aventura) é a décima sétima temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada de Pokémon, a Série XY (Pokémon the Series: XY). A temporada acompanha Ash Ketchum enquanto ele viaja pela região de Kalos com seus amigos Serena, Clemont e Bonnie, enquanto Ash c\n[…]\nWebsite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nWebsite oficial do anime de televisão Pokémon no Pokémon JP  (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Gibeon",
      "descricao": "Líder do grupo vilão dos Exploradores na série Pokémon Horizontes."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Em Pokémon Horizontes, quem é o líder misterioso dos Exploradores, o grupo que persegue Liko para tomar o seu pingente?",
    "resposta": "Gibeon",
    "distratores": [
      "Amethio",
      "Spinel",
      "Friede"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Gibeon",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Horizons:_The_Series"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Gibeon",
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
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Jessie e James",
      "descricao": "Dupla de vilões da Equipe Rocket no anime Pokémon, que persegue Ash ao lado do Meowth falante."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No segundo episódio do anime, Ash enfrenta Jessie, James e Meowth pela primeira vez, quando eles atacam qual lugar da cidade de Viridian?",
    "resposta": "O Centro Pokémon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/EP002",
      "https://en.wikipedia.org/wiki/Team_Rocket"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/EP002",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Team_Rocket",
        "situacao": "ok",
        "texto": "Team Rocket (Japanese: ロケット団, Hepburn: Roketto-dan; Japanese: [ɾo̞ke̞t̚to̞ dã̠ɴ]) is a fictional crime syndicate in the Pokémon franchise. Team Rocket is the primary antagonist in the original Pokémon video games Red, Green, and Blue, as well as in the long-running Pokémon anime TV-series. In the latter, Team Rocket is primarily represented through the trio of characters Jessie, James, and Meowth,\n[…]\nIn the long-running Pokémon anime series, a trio of Team Rocket grunts Jessie (ムサシ, Musashi), James (コジロウ, Kojirō), and Meowth (ニャース, Nyarth) are major secondary characters. The three were the primary antagonists of the anime series, where each episode they attempt to kidnap Ash Ketchum's Pikachu.\n[…]\nTeam Rocket appear as the main antagonists in several arcs of the Pokémon Adventures manga, including the Red, Green, and Blue, Yellow, and Gold and Silver arcs. The Team Rocket trio from the anime appear in the 1999 manga adaptation Electric Tale of Pikachu, which was loosely inspired by some episodes of the Indigo League. Jessie and James are shown at the end to be married and expecting a child.\n[…]\nTeam Rocket is the central antagonist in the 2000 stageplay Pokémon Live!, in which Jessie, James, and Meowth successfully steal Ash Ketchum's Pikachu and use it to train Giovanni's Mewtwo. Team Rocket characters additionally frequently appear on cards in the Pokémon Trading Card Game, most notably in the Team Rocket expansion released in 2000.\n[…]\nChris Carter of Destructoid called the English voice team for Jessie, James, and Meowth (Lillis, Stuart, and Blaustein) \"some of the show's finest work.\" Their role in Pokémon the Series: Black & White was cited by Polygon to be one of the biggest missed opportunities with their characters, due to the sudden cancellation of several episodes leading to Team Rocket's character changes in the series being for \"nothing.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Equipe_Rocket",
        "situacao": "ok",
        "texto": "A Equipe Rocket, conhecido em inglês como Team Rocket (japonês: ロケット団, Hepburn: Roketto-dan; [ɾo̞ke̞t̚to̞ dã̠ɴ]), é uma organização criminosa fictícia da franquia Pokémon. Ela é a principal antagonista nos jogos originais de Pokémon Red, Green e Blue, bem como na longa série de anime Pokémon. Nesta última, a Equipe Rocket é representada principalmente pelo trio de personagens Jessie, James e Meowt\n[…]\nNa longa série de anime Pokémon, um trio de recrutas da Equipe Rocket, Jessie (ムサシ, Musashi), James (コジロウ, Kojirō) e Meowth (ニャース, Nyarth), são personagens secundários importantes. Os três eram os principais antagonistas da série, onde em cada episódio tentavam sequestrar o Pikachu de Ash Ketchum.\n[…]\nA Equipe Rocket aparece como os principais antagonistas em vários arcos do mangá Pokémon Adventures, incluindo os arcos Red, Green e Blue, Yellow e Gold e Silver. O trio da Equipe Rocket do anime aparece na adaptação para mangá do universo alternativo de Electric Tale of Pikachu, vagamente inspirada em alguns episódios da Liga Índigo e criada em 1999, onde Jessie e James são mostrados no final casados ​​e esperando um filho.\n[…]\nComo personagens de alívio cômico, Jessie, James e Meowth são muito populares entre os fãs de Pokémon. O escritor do Yahoo!, Jay Castello, observa que, à medida que os fãs de Pokémon cresciam, a luta de \"jovens na casa dos vinte anos que não conseguiam encontrar seu lugar no mundo ou ter sucesso em suas ambições\" tornou-se cada vez mais identificável, e um subfandom dedicado ao trio surgiu.\n[…]\nTanto nos jogos quanto no anime, a Equipe Rocket é considerada uma das melhores vilãs da franquia Pokémon. Chris Carter, do Destructoid, chamou a equipe de dublagem inglesa de Jessie, James e Meowth (Lillis, Stuart e Blaustein) de \"um dos melhores trabalhos da série\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Meowth da Equipe Rocket",
      "descricao": "Meowth falante que integra a Equipe Rocket ao lado de Jessie e James no anime Pokémon."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No anime, Meowth fala a língua dos humanos e também entende a dos pokémon. Que papel isso o leva a fazer muitas vezes, até para Ash?",
    "resposta": "Intérprete (tradutor)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Meowth_(Team_Rocket)",
      "https://en.wikipedia.org/wiki/Meowth"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Meowth_(Team_Rocket)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Meowth",
        "situacao": "ok",
        "texto": "Meowth (, mee-OW-th), known in Japanese as Nyarth (Japanese: ニャース), is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise, and the first stage of its evolved form, Persian. First introduced in the video games Pokémon Red and Blue, it has received multiple new forms, including regional variants called Alolan Meowth and Galarian Meowth in Pokémon Sun and Moon and Pokémon Sword an\n[…]\nFirst found in Pokémon Red and Blue, Meowth has appeared in most Pokémon titles since, including every major game. It is only available in Red through trading. It appears in Pokémon Yellow as an enemy along the characters Jessie and James of Team Rocket; however, it cannot be obtained in the wild, and can only be obtained via trading. The regular Meowth was omitted from the games Pokémon Sun and Moon outside of trading. Instead, the only form accessible is its Alolan form.\n[…]\nIn the Pokémon TV series, Meowth is a member of Team Rocket alongside Jessie and James. They are introduced in the second episode, and appear in most episodes following it. The trio's goal is typically to capture Pikachu, the Starter Pokémon of the protagonist Ash Ketchum. They use a Meowth-themed balloon to travel, and often wear disguises as part of their plans.\n[…]\nMeowth has also been made into several different toys, including figures and plush toys.\n[…]\nDiscussing Jessie and James' queer characterization, The Daily Beast writer Jay Castello stated that while he was the \"token straight friend\" of the Team Rocket trio, though found it notable that he was voiced by someone who was both intersex and transgender. Andrew Brown felt that Meowth had the most fleshed-out backstory, noting how notable it is that Meowth is both one of the only \"bad guy\" Pokémon and one of the only Pokémon that can speak English without telepathy.\n[…]\nMeowth on Pokemon.com\n[…]\nMeowth  at Bulbapedia, a Pokémon wiki"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Phantom (Pokémon)",
      "descricao": "Pirata vilão do filme Pokémon Ranger e o Templo do Mar, que caça Manaphy e o tesouro do templo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No filme Pokémon Ranger e o Templo do Mar, que tesouro guardado no templo submerso o pirata Phantom quer roubar a qualquer custo?",
    "resposta": "A coroa do mar (Sea Crown)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Phantom",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger_and_the_Temple_of_the_Sea"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Phantom",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger_and_the_Temple_of_the_Sea",
        "situacao": "ok",
        "texto": "Pokémon Ranger and the Temple of the Sea is a 2006 Japanese animated fantasy film. It is the ninth film of the Pokémon anime series and the fourth and final film of Pokémon the Series: Ruby and Sapphire.\n[…]\nDirected by Kunihiko Yuyama and written by Hideki Sonoda, the film follows Ash Ketchum, his Pokémon partner Pikachu, and their friends May, Max and Brock as they help a Pokémon Ranger named Jack Walker deliver the Mythical Pokémon Manaphy to an undersea palace called Samiya while evading mercenaries led by Phantom the Pirate.\n[…]\nWhile exploring Samiya, the group encounters Phantom, who is able to open the chamber to the Sea Crown, the temple's central artifact consisting of numerous large jewels. Phantom begins to remove the jewels, causing Samiya to flood and sink deeper into the ocean. The group escapes to the submarine while Jackie confronts Phantom, reconnecting most of the jewels to the crown before he, Phantom, and one of the jewels are washed away by the flood.\n[…]\nHe puts Pikachu, May, and Manaphy in an air capsule that was part of Phantom's submarine before diving into the completely flooded crown chamber and reconnecting the jewel, causing Samiya to rise to the ocean's surface.\n[…]\nWhile May and Pikachu mourn Ash's apparent sacrifice, Phantom suddenly appears and kidnaps Manaphy. Ash, surrounded by a glowing aura from the rebuilt Sea Crown, pursues Phantom and retrieves Manaphy. Phantom returns with his ship but Manaphy leads a counterattack with several wild Water-type Pokémon, including the Legendary Pokémon Kyogre. With Phantom subdued, Jackie is able to deliver Manaphy safely to Samiya, completing his mission.\n[…]\nPokémon Ranger and the Temple of the Sea at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ranger_and_the_Temple_of_the_Sea",
        "situacao": "ok",
        "texto": "Pokémon Ranger and the Temple of the Sea, originalmente lançado no Japão como Pocket Monsters Advanced Generation the Movie: Pokémon Ranger and the Prince of the Sea: Manaphy (劇場版ポケットモンスターアドバンスジェネレーション ポケモンレンジャーと蒼海の王子 マナフィ, Gekijōban Poketto Monsutā Adobansu Jenerēshon Pokemon Renjā to Umi no Ōji Manafi), é o nono filme de animação da franquia Pokémon. Como indicado pelo título, elementos do jogo \n[…]\nFoi lançado nos cinemas japoneses em 16 de julho de 2006. No Brasil, o filme foi exibido em 16 de janeiro de 2009 pelo Cartoon Network.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Alva",
      "descricao": "Vilão do filme Volcanion e a Maravilha Mecânica, de 2016, que tenta se apoderar de um pokémon artificial."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No filme Volcanion e a Maravilha Mecânica, o vilão Alva quer usar o poder de qual pokémon artificial, a maravilha mecânica do título?",
    "resposta": "Magearna",
    "distratores": [
      "Genesect",
      "Porygon Z",
      "Golurk"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Alva",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Volcanion_and_the_Mechanical_Marvel"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Alva",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Volcanion_and_the_Mechanical_Marvel",
        "situacao": "ok",
        "texto": "Pokémon the Movie: Volcanion and the Mechanical Marvel, known in Japan as Pokémon the Movie XY&Z: Volcanion and the Exquisite Magearna (ポケモン・ザ・ムービーXY&Z ボルケニオンと機巧のマギアナ, Pokemon Za Mūbī Ekkusu Wai ando Zetto Borukenion to Karakuri no Magiana) is a 2016 Japanese animated fantasy adventure film produced by OLM. It is the nineteenth film of the Pokémon anime series and the third and final film of Pokém\n[…]\nThe film stars the voices of Rica Matsumoto, Ikue Ōtani, Mayuki Makiguchi, Yūki Kaji, Mariya Ise, Megumi Hayashibara, Shin-ichiro Miki, Inuko Inuyama, Somegoro Ichikawa, Yuka Terasaki, Kōichi Yamadera, Mayu Matsuoka, and Shoko Nakagawa. The film focuses on Councillor Alva of the Azoth Kingdom, who steals the \"Soul-Heart\" of the artificial Pokémon Magearna to power and control a flying fortress in the kingdom.\n[…]\nMega Evolution Councillor Alva and Prince Raleigh of the Azoth Kingdom order the artificial Pokémon Magearna to be brought to the Kingdom after it is found in the Nebel Plateau, a place populated by Pokémon who have been abused by humans. The Mythical Pokémon Volcanion tries recovering Magearna, but has a band attached to his leg and is sent falling to a forest where Ash Ketchum and his friends, Pikachu, Serena, Clemont, and Bonnie are camping.\n[…]\nVolcanion frees himself, Ash, Kimia, and their Pokémon. Alva sets the fortress on a collision course with the plateau and tries to escape with a jetpack, but Greninja (in his Ash-Greninja form) disables it, causing him to fall. Ash returns the Soul-Heart to Magearna, but her spirit is gone. To prevent the fortress from crashing into the plateau, Volcanion uses his power to destroy the fortress with himself at the center of the blast.\n[…]\nMagearna is an artificial Pokémon created in the Azoth Kingdom, which she fled to prevent misuse of her power. She is Volcanion's best friend. She is voiced by Yuka Terasaki."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie%3A_Volcanion_and_the_Mechanical_Marvel",
        "situacao": "ok",
        "texto": "Pokémon the Movie: Volcanion and the Mechanical Marvel (ポケモン・ザ・ムービーXY&Z ボルケニオンと機巧のマギアナ, Pokemon Za Mūbī XY&Z borukenion to karakuri no magiana; lit. \"Pokémon O Filme: Volcanion e a Maravilha Mecânica\") é um filme japonês de animé realizado por Kunihiko Yuyama. É o décimo nono filme da franquia homónima e o terceiro da série XY. Foi lançado nos cinemas japoneses a 16 de julho de 2016.\n[…]\nConforme Ash e seus amigos continuam sua jornada, Volcanion cai do céu na frente deles. O objetivo de Volcanion é recuperar Magearna, que foi sequestrada pelo \"Reino Azoth\", uma cidade de super máquinas. No entanto, Volcanion e Ash tornaram-se ligados entre si por um estranho cinto magnético. Será que os dois conseguirão trabalhar juntos e salvar Magearna?\n[…]\nPokémon the Movie: Volcanion and the Mechanical Marvel (filme) na enciclopédia do Anime News Network (em inglês)\n[…]\nPokémon the Movie: Volcanion and the Mechanical Marvel no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Mewtwo Returns",
      "descricao": "Especial de TV do anime Pokémon, de 2000, continuação do primeiro filme, em que Mewtwo vive escondido com outros clones."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No especial Mewtwo Returns, Mewtwo vive escondido com outros clones numa montanha isolada. Que vilão sai à caça dele?",
    "resposta": "Giovanni",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mewtwo_Returns",
      "https://bulbapedia.bulbagarden.net/wiki/Mewtwo_Returns"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mewtwo_Returns",
        "situacao": "ok",
        "texto": "Pokémon is a media franchise created by video game designer Satoshi Tajiri that centers on fictional creatures called Pokémon. As of 2020, there have been twenty-three animated films and one live action film. The first nineteen animated films are based on the anime television series of the same name, while the twentieth, twenty-first, and twenty-third are set in an alternate continuity to the anim\n[…]\nThe first Pokémon animated film, Pokémon: The First Movie, was released in Japan in 1998, and in 2019 was remade as Pokémon: Mewtwo Strikes Back – Evolution. A live-action film, Detective Pikachu, was produced by American studio Legendary Entertainment, directed by Rob Letterman, and written by Letterman and Nicole Perlman. It was distributed in Japan by Toho and outside of Japan and China by Warner Bros. Pictures. It was released on May 10, 2019."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mewtwo_Returns",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_filmes_de_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "Pokémon é uma franquia de mídia criada pelo designer de jogo eletrônico Satoshi Tajiri que se concentra em criaturas fictícias chamadas Pokémon. Em 2020, houve 23 filmes de animação e um filme live-action. Os primeiros dezenove filmes de animação são baseados na série de televisão de anime de mesmo nome, com o filme original sendo refeito no dia 22. Os 20º, 21º e 23º filmes de animação são ambient\n[…]\nO primeiro filme de animação Pokémon, Pokémon: The First Movie, foi lançado no Japão em 1998, que foi refeito em Mewtwo Strikes Back: Evolution. Um filme live-action, Pokémon: Detetive Pikachu, foi produzido pelo estúdio americano Legendary Entertainment, dirigido por Rob Letterman e escrito por Letterman e Nicole Perlman. É distribuído no Japão pela Toho, e fora do Japão e China pela Warner Bros. Foi lançado em 10 de maio de 2019.\n[…]\nHá também dois especiais de televisão animados que foram transmitidos na TV Tokyo apresentando Ash e Pikachu dele e dez curtas-metragens de animação. A Warner Bros. licenciou os três primeiros filmes de animação na América do Norte e a Miramax Films licenciou os quatro filmes seguintes (com a Studio Distribution Services, LLC, um consórcio entre a Warner Bros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Gyarados de James",
      "descricao": "Pokémon de James, da Equipe Rocket, no anime Pokémon, comprado como Magikarp a bordo do navio S.S. Anne."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "No navio S.S. Anne, um vendedor convence James, da Equipe Rocket, a gastar todas as economias num pokémon que prometia render fortuna. Que pokémon ele compra?",
    "resposta": "Magikarp",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/James%27s_Gyarados",
      "https://bulbapedia.bulbagarden.net/wiki/EP015"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/James%27s_Gyarados",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/EP015",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Dr. Namba",
      "descricao": "Cientista da Equipe Rocket na fase de Johto do anime Pokémon, que persegue um filhote de pokémon lendário."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Johto, o cientista Namba, da Equipe Rocket, ou Team Rocket, persegue um filhote apelidado de Silver. De que pokémon lendário ele é filhote?",
    "resposta": "Lugia",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Dr._Namba",
      "https://bulbapedia.bulbagarden.net/wiki/Silver_(Lugia)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Dr._Namba",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Silver_(Lugia)",
        "situacao": "inacessivel",
        "texto": ""
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
