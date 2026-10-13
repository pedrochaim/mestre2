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
      "nome": "Equipe Rocket",
      "descricao": "Organização criminosa da franquia Pokémon, representada no anime pela dupla Jessie e James e pelo Meowth falante."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, a Equipe Rocket invade a Torre de Rádio de Goldenrod para fazer uma transmissão. O que o grupo pretende com ela?",
    "resposta": "Chamar Giovanni de volta",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Rocket",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Rocket",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version and Pokémon Silver Version are 1999 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy Color. They are the first installments in the second generation of the Pokémon video game series. They were released in Japan on November 21st, 1999, Australia and North America on October 15th, 2000, and Europe on April 6th, 2001.\n[…]\nA third game in the generation, Pokémon Crystal, was released in 2000. In 2009, on the 10th anniversary of Gold and Silver, remakes titled Pokémon HeartGold and SoulSilver were released for the Nintendo DS.\n[…]\nOpposing him is his mysterious rival, a boy who stole one of the other Pokémon from Professor Elm and regularly challenges the player to test his strengths. The player also encounters the villainous Team Rocket, having reunited to seek out their previous leader Giovanni to return the group to their former glory. Eventually, the player thwarts Team Rocket once and for all and defeats the Elite Four and the Johto League Champion on Indigo Plateau.\n[…]\nNintendo Power listed Gold and Silver combined as the sixth best Game Boy / Game Boy Color games, praising them for the new Pokémon, features, and full-color graphics.\n[…]\nIn Germany, Gold and Silver received two Double Platinum awards from the Verband der Unterhaltungssoftware Deutschland (VUD) for sales above 800,000 copies by 2002. In the United Kingdom, Gold and Silver received two Platinum awards for sales above 600,000 copies. By 2010, Gold and Silver had sold 23 million units worldwide.\n[…]\nPokémon HeartGold Version and Pokémon SoulSilver Version are enhanced remakes of Pokémon Gold and Silver, developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS. First released in Japan on September 12, 2009, the games were later released in North America, Australia, and Europe during March 2010."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Gold_%26_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version e Pokémon Silver Version (ポケットモンスター 金・銀, Poketto Monsutā Kin・Gin; tradução: Monstros de Bolso Ouro・Prata) são jogos eletrônicos de RPG de 1999, desenvolvidos pela Game Freak e publicadas pela Nintendo para o Game Boy Color. Esses dois jogos iniciaram a segunda geração da série Pokémon. Eles foram lançados no Japão em 1999, na Austrália e América do Norte em 2000 e Europa em 20\n[…]\nOpondo-se a ele está seu rival misterioso, um garoto que roubou um dos outros Pokémon do Professor Elm e regularmente desafia o jogador a testar seus pontos fortes. O jogador também encontrará em sua jornada a malvada Equipe Rocket, tendo se reunificado após os eventos de Red e Blue para buscar seu líder, Giovanni, e devolver o grupo à sua antiga glória.\n[…]\nAlém disso, foram equipados com uma televisão ligada a consolas de jogos que permitiam aos espectadores jogar Pokémon Puzzle League, Hey You, Pikachu! e Pokémon Gold e Silver. A série de televisão Pokémon GS, baseada nos jogos, foi anunciada para fazer parte da programação de outono do Kids' WB. O show apresenta o mesmo protagonista Ash Ketchum em uma nova região com diferentes espécies de Pokémon dos jogos.\n[…]\nEm 6 de junho de 2017, a The Pokémon Company anunciou por meio de uma transmissão do Pokémon Direct que os jogos seriam relançados em todo o mundo por meio do Virtual Console da Nintendo 3DS em 22 de setembro de 2017. Pokémon Crystal, a versão aprimorada de Gold e Silver também foi eventualmente relançada mundialmente no console virtual Nintendo 3DS, em 26 de janeiro de 2018.\n[…]\nPokémon Crystal foi bem recebido pelos críticos, embora muitos comentassem que não havia novas adições e recursos suficientes para diferenciá-lo significativamente do Pokémon Gold e Silver. Pokémon Crystal vendeu quase 6,4 milhões de unidades em todo o mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Giovanni",
      "descricao": "Chefe da Equipe Rocket nos jogos e no anime Pokémon."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Além de chefiar a Equipe Rocket, Giovanni comanda o último ginásio de Kanto em Red e Blue. Em que tipo de pokémon ele é especialista?",
    "resposta": "Terrestre",
    "distratores": [
      "Psíquico",
      "Venenoso",
      "Lutador"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Giovanni"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Giovanni",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Equipe Rainbow Rocket",
      "descricao": "Organização vilã de Pokémon Ultra Sun e Ultra Moon, em que Giovanni reúne os chefes de outras equipes vilãs vindos de mundos paralelos."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Ultra Sun e Ultra Moon, Giovanni reúne Maxie, Archie, Cyrus, Lysandre e Ghetsis, vindos de outros mundos. Que nome tem esse grupo?",
    "resposta": "Equipe Rainbow Rocket",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Rainbow_Rocket"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Rainbow_Rocket",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Equipe Magma",
      "descricao": "Organização vilã de Pokémon Ruby, Sapphire e Emerald, liderada por Maxie, que quer despertar Groudon."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Ruby e Sapphire, a Equipe Magma tenta despertar o lendário Groudon. O que o grupo quer fazer com o poder dele?",
    "resposta": "Expandir os continentes",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Magma",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ruby_and_Sapphire"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Magma",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ruby_and_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Ruby Version and Pokémon Sapphire Version are 2002 role-playing video games developed by Game Freak for the Game Boy Advance. Although the games were published by Nintendo internationally in 2003, The Pokémon Company published them in Japan in late 2002, making them the first mainline games to have this distinction, as well as the second games to have it overall, after Pokémon Card GB2: Gr\n[…]\nThe most prominent subplot involves Team Aqua and Team Magma, crime syndicates who want to use Pokémon to alter the climate of Hoenn: in Ruby, the villains, Team Magma, want to use the legendary Pokémon Groudon to dry up the oceans of Hoenn and increase the region's landmass; in Sapphire, Team Aqua are the villains and they try to use Groudon's counterpart, Kyogre, to flood the landmasses of Hoenn and increase the region's ocean.\n[…]\nPrior to facing the eighth Gym Leader, the player has a showdown with Magma or Aqua where the team's leader uses a mystical orb that awakens the slumbering Pokémon, believing it has the power to enthrall their respective target, only for the Pokémon to become enraged and cause catastrophic, region-wide climate changes—a drought in Ruby, and heavy rainfall in Sapphire—until it is defeated or captured by the protagonist.\n[…]\nPokémon Ruby and Sapphire were developed by Game Freak and Nintendo under the direction of Junichi Masuda. As with its predecessors, Ken Sugimori was the art director, although these were the first games in which he did not single-handedly produce all of the art.\n[…]\nAs the Game Boy Advance was able to handle enhanced graphics, Ruby and Sapphire were the first games in the series that allowed up to four people to share information at one time, as opposed to the previous limit of two. However, the development team used a more basic graphics engine to keep the game simple and not overly confusing."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ruby_e_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Ruby e Pokémon Sapphire (ポケットモンスター ルビー&サファイア, Poketto Monsutā Rubī & Safaia) são dois jogos que correspondem à terceira geração da série Pokémon. Desenvolvidos pela Game Freak e publicados pela Nintendo para Game Boy Advance, foram lançados no Japão em 21 de Novembro de 2002 e lançado no resto do mundo no ano seguinte, em 2003. Pokémon Emerald, uma versão especial do jogo, foi lançada dois\n[…]\nRuby  e Sapphire  têm um suporte limitado e-Reader. A Nintendo lançou o Battle-e Cards, um conjuntos de cartas de e-Reader que continham dados dos jogadores. Uma carta especial de e-Reader chamada Eon Ticket também foi lançada; obtida através da função Mystery Gift, o Ticket permitia que o jogador tivesse acesso a Southern Island. Lá, o jogador enfrentaria Latios ou Latias, dependendo da versão do jogo.\n[…]\nEm Ruby, os vilões, Team Magma, querem o Pokémon lendário Groudon para secar os oceanos de Hoenn e aumentar a massa de terra da região; em Sapphire, o Team Aqua querem Kyogre para aumentar os níveis de água da região. O pai do jogador também o apresenta a Wally, um menino doente que ensina o protagonista a capturar um Pokémon. Wally eventualmente supera sua doença e se torna um treinador Pokémon de sucesso, desafiando o jogador antes de enfrentar a Elite Four.\n[…]\nRuby  e Sapphire também foram a primeira série a não ter todos os Pokémon das gerações anteriores. Sugimori afirmou que a equipe tentou introduzir novos Pokémon bem como alguns dos jogos passados. Quando perguntado sobre recursos que não poderiam ser incluídos devido a restrições técnicas, Masuda fala que queria que cada Pokémon emitisse três sons diferentes, dependendo do seu humor.\n[…]\nPokémon Ruby  e Sapphire tiveram uma aprovação de 84% dos que votaram no site Game Rankings.\n[…]\nDetalhes de Pokémon Ruby  e Sapphire no Pokemon-Games.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Equipe Aqua",
      "descricao": "Organização vilã de Pokémon Ruby, Sapphire e Emerald que quer despertar Kyogre para expandir os mares."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em Ruby e Sapphire, que líder comanda a Equipe Aqua, grupo que sonha em expandir os mares com o poder de Kyogre?",
    "resposta": "Archie",
    "distratores": [
      "Maxie",
      "Cyrus",
      "Guzma"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Aqua",
      "https://bulbapedia.bulbagarden.net/wiki/Archie"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Aqua",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Archie",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Equipe Galáctica",
      "descricao": "Organização vilã de Pokémon Diamond, Pearl e Platinum, liderada por Cyrus, que quer usar Dialga e Palkia para criar um novo mundo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Diamond e Pearl, os comandantes da Equipe Galáctica se chamam Mars, Jupiter e Saturn. De onde vêm esses nomes?",
    "resposta": "Dos planetas do Sistema Solar",
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
    "indice": 7,
    "ancora": {
      "nome": "Equipe Galáctica",
      "descricao": "Organização vilã de Pokémon Diamond, Pearl e Platinum, liderada por Cyrus, que quer usar Dialga e Palkia para criar um novo mundo."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Qual destas equipes vilãs apareceu primeiro nos jogos principais de Pokémon?",
    "resposta": "Equipe Galáctica",
    "distratores": [
      "Equipe Plasma",
      "Equipe Flare",
      "Equipe Skull"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Galactic",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Diamond_and_Pearl"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Galactic",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Diamond_and_Pearl",
        "situacao": "ok",
        "texto": "Pokémon Diamond Version and Pokémon Pearl Version are role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS in 2006. They are the first installments in the fourth generation of the Pokémon video game series. They were first released in Japan on September 28, 2006, and released in North America, Australia, and Europe in 2007. Pokémon \n[…]\nThe protagonist encounters the antagonistic group, Team Galactic, early in the game, when he or she must save Professor Rowan from some of their thugs; however, their motives are unclear until later. The player encounters Team Galactic again when they take over a wind farm and when they set up a base in Eterna City, before eventually taking over Sinnoh's three lakes in an attempt to capture the Mirage Pokémon Uxie, Azelf, and Mesprit.\n[…]\nShortly after the player earns their seventh Gym Badge, Team Galactic captures the Mirage Pokémon and imprisons them inside the science laboratory of the Team Galactic Headquarters Building, where its members extract crystals from the Pokémon to create the Red Chain, an object that can control the Legendary Pokémon Palkia in Pearl, or Dialga in Diamond. After releasing the trio, the protagonist can access the Spear Pillar, an ancient ruin atop Mt.\n[…]\nCoronet, where the leader of Team Galactic summons Dialga or Palkia. The Legendary Pokémon's powers begin to overwhelm Sinnoh, causing the newly free Uxie, Azelf, and Mesprit to attempt to stop it. The player then battles Palkia or Dialga, and after defeating or capturing the Pokémon, Sinnoh returns to normal. Afterward, the player continues their journey, eventually reaching the Sinnoh League.\n[…]\nPokémon transferred from those games to My Pokémon Ranch are rendered in 3D and can interact with the player's Miis."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Diamond_e_Pearl",
        "situacao": "ok",
        "texto": "Pokémon Diamond Version e Pokémon Pearl Version (ポケットモンスター ダイヤモンド・パール, Poketto Monsutā Daiyamondo・Pāru; tradução: Monstros de Bolso Diamond・Pearl, em japonês Daiyamondo (Diamante) é um estrangeirismo, assim como Pāru (Pérola), pérola em japonês é 真珠 Shinju) são dois jogos eletrônicos de RPG de 2006, desenvolvidos pela Game Freak, publicados pela The Pokémon Company e Nintendo para consola portátil\n[…]\nComo os jogos Pokémon anteriores, Diamond e Pearl narram as aventuras de um jovem treinador Pokémon enquanto treinam e lutam contra Pokémon e treinadores, ao mesmo tempo que frustram os esquemas de uma organização criminosa chamada Equipe Galáctica. Os jogos adicionam muitos recursos novos, como jogar pela internet através da Nintendo Wi-Fi Connection, mudanças na mecânica de batalha e concursos de Pokémon, junto com a adição de 107 novos Pokémon.\n[…]\nAbaixo da superfície de Sinnoh está o Underground (ちかつうろ, Chikatsūro), uma grande área usada para jogos multijogador sem fio; nele, os jogadores podem criar e decorar bases secretas, apresentadas pela primeira vez em Pokémon Ruby e Sapphire, e participar de minijogos. Os itens extraídos no Underground podem ser transferidos para a bolsa do jogador no jogo principal.\n[…]\nTal como acontece com todos os jogos principais, o protagonista também deve frustrar os esquemas de um sindicato do crime, neste caso, Equipe Galáctica, que planeja usar Pokémon para criar um novo universo só para eles, enquanto destrói o atual.\n[…]\nCoronet, onde o líder da Equipe Galáctica invoca Dialga ou Palkia. Os poderes do lendário Pokémon começam a dominar Sinnoh, fazendo com que Uxie, Azelf e Mesprit recém-libertados tentem detê-lo. O jogador então batalha com Palkia ou Dialga e após derrotar ou capturar o Pokémon, Sinnoh retorna ao normal. Depois disso, o jogador continua sua jornada, eventualmente chegando Elite dos Quatro da Liga Pokémon à região de Sinnoh.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Equipe Plasma",
      "descricao": "Organização vilã de Pokémon Black e White, da região de Unova, que tem N como rei e Ghetsis como verdadeiro líder."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em Black e White, o jovem N é chamado de rei da Equipe Plasma. Mas quem de fato comanda o grupo por trás dele?",
    "resposta": "Ghetsis",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ghetsis",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_and_White"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ghetsis",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_and_White",
        "situacao": "ok",
        "texto": "Pokémon Black Version and Pokémon White Version are 2010 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS. They are the first installments in the fifth generation of the Pokémon video game series. First released in Japan on 18 September 2010, they were later released in Europe, North America and Australia in March 2011. Sequels \n[…]\nWhen the player finally reaches him, Reshiram in Black or Zekrom in White appears before the player, and the player must capture the Legendary Pokémon to prove their worth before challenging N. After his defeat, N laments the possibility that his ideals are mistaken, Ghetsis intrudes and angrily reveals that his true intentions were to use N to ensure that he would be the only human left with control over Pokémon and use them to rule the world, having groomed N as a child to be a pawn.\n[…]\nIn his rage, Ghetsis challenges the player to a true final battle. After Ghetsis's defeat, he is arrested, allowing Alder to resume his position as the Unova League Champion and pardons N. N then thanks the player for helping realize his mistake about the nature of the relationship between people and their Pokémon and wishing them well before saying goodbye and leaving the castle on his dragon of choice to a far-off land, wanting to find more about the world.\n[…]\nIn April 2011, Nintendo's financial earnings report confirmed that Pokémon Black and White had sold 11.5 million copies worldwide, making them the highest selling DS games for Nintendo in the 2010–11 financial year, and third overall, behind only the Wii games, Wii Sports and Wii Sports Resort. As of September 2017, the games' combined sales have reached 15.64 million.\n[…]\nSequels to Black and White, Pokémon Black 2 and Pokémon White 2, were released for the Nintendo DS in 2012."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Black_e_White",
        "situacao": "ok",
        "texto": "Pokémon Black Version e White Version (ポケットモンスターブラック・ホワイト, Poketto Monsutā Burakku・Howaito; Monstros de Bolso Black・White, Black e White significam Preto e Branco quando traduzidos do inglês para o português, Preto e Branco em japonês seria 黒・白, Kuro・Shiro) são jogos eletrônicos de RPG lançados em 2010, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo lançados para o \n[…]\nPokémon Black e White são jogos de RPG com elementos de aventura, apresentados de uma terceira pessoa, perspectiva de cima. Existem três telas básicas: um mundo aberto, no qual o jogador navega pelo personagem principal; uma tela de batalha; e o menu, no qual o jogador configura seu grupo, itens ou configurações de jogo. O jogador controla um jovem treinador que começa o jogo com um único Pokémon e é capaz de capturar mais usando Pokébolas.\n[…]\nAlém da jogabilidade padrão, o jogador também terá que derrotar a principal força antagonista dos jogos, Equipe Plasma, um grupo de cavaleiros templários que afirma que os Pokémon são oprimidos pela humanidade e procuram libertá-los de seus treinadores. A Equipe Plasma é liderado por N, um jovem que foi criado ao lado de Pokémon e os vê como amigos ao invés de ferramentas para o esporte.\n[…]\nApós sua derrota, N lamenta a possibilidade de que seus ideais estejam errados, Ghetsis o intromete e com raiva revela que suas verdadeiras intenções eram usar N para garantir que ele seria o único humano com controle sobre Pokémon e usá-los para governar o mundo. Em sua fúria, Ghetsis desafia o jogador para a batalha. Após a derrota de Ghetsis, ele é preso, permitindo que Alder retome sua posição como Campeão Pokémon da região de Unova.\n[…]\nSequências de Black e White, Pokémon Black 2 e White 2, foram lançadas para o Nintendo DS em 2012. São as primeiras e únicas, até à data, sequências da franquia da série principal.\n[…]\nPokemon Black and White",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Equipe Plasma",
      "descricao": "Organização vilã de Pokémon Black e White, da região de Unova, que tem N como rei e Ghetsis como verdadeiro líder."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em seus discursos pelas cidades de Unova, a Equipe Plasma pede que os treinadores façam o quê com seus pokémon?",
    "resposta": "Libertá-los",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Plasma",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_and_White"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Plasma",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_and_White",
        "situacao": "ok",
        "texto": "Pokémon Black Version and Pokémon White Version are 2010 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS. They are the first installments in the fifth generation of the Pokémon video game series. First released in Japan on 18 September 2010, they were later released in Europe, North America and Australia in March 2011. Sequels \n[…]\nSimilar to previous installments of the series, the two games follow the journey of a young Pokémon Trainer through the region of Unova, as they train Pokémon used to compete against other Trainers while thwarting the schemes of the criminal organization Team Plasma.\n[…]\nIn addition to the standard gameplay, the player will also have to defeat the games' main antagonist force, Team Plasma, a Knights Templar-esque group who claim that Pokémon are oppressed by humanity and seek to liberate them from their trainers. Team Plasma is led by N, a young man who was brought up alongside Pokémon and sees them as friends rather than tools for sport.\n[…]\nIn the postgame, Looker arrives in Unova and tasks the player with finding the remaining Sages of Team Plasma, so they can be brought to justice. The player can also challenge the Elite Four once again, and challenge Alder, ultimately becoming the new Unova League Champion.\n[…]\nThe foreign promotion for the games began on 22 November 2010, when the official website for the North American, European, and Australian markets was updated, which included the localized names of the starter Pokémon (Snivy, Tepig, and Oshawott) in English, Dutch, Italian, Portuguese, and Spanish markets and the games' setting in the Unova region.\n[…]\nThe second part of the Pokémon Scarlet and Violet DLC The Hidden Treasure of Area Zero takes place in the Blueberry Academy, a terrarium off the coast of Unova."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Black_e_White",
        "situacao": "ok",
        "texto": "Pokémon Black Version e White Version (ポケットモンスターブラック・ホワイト, Poketto Monsutā Burakku・Howaito; Monstros de Bolso Black・White, Black e White significam Preto e Branco quando traduzidos do inglês para o português, Preto e Branco em japonês seria 黒・白, Kuro・Shiro) são jogos eletrônicos de RPG lançados em 2010, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo lançados para o \n[…]\nAssim como nas edições anteriores da série, os jogos acompanham a jornada de um jovem treinador Pokémon pela região de Unova. O jogador captura e treina Pokémon para enfrentar outros treinadores, ao mesmo tempo em que tenta impedir os planos da organização criminosa conhecida como Equipe Plasma.\n[…]\nAlém disso, oito das cidades e vilarejos de Unova abrigam os chamados Líderes de Ginásio — treinadores experientes que se especializam em tipos específicos de Pokémon. Ao derrotar um Líder, o jogador recebe um distintivo (também conhecido como insígnia) como prova de sua vitória. Coletar os oito distintivos é requisito para acessar a Liga Pokémon, onde o jogador enfrenta a Elite dos Quatro e, por fim, o campeão regional.\n[…]\nAlém da jogabilidade padrão, o jogador também terá que derrotar a principal força antagonista dos jogos, Equipe Plasma, um grupo de cavaleiros templários que afirma que os Pokémon são oprimidos pela humanidade e procuram libertá-los de seus treinadores. A Equipe Plasma é liderado por N, um jovem que foi criado ao lado de Pokémon e os vê como amigos ao invés de ferramentas para o esporte.\n[…]\nApós a derrota da Equipe Plasma, Looker chega em Unova e incumbe o jogador de encontrar os Sábios restantes da Equipe Plasma, para que eles possam ser levados à justiça. O jogador também pode desafiar a Elite dos Quatro mais uma vez e desafiar Alder, tornando-se o novo Campeão Pokémon da região de Unova.\n[…]\nPokemon Black and White",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "N",
      "descricao": "Rei da Equipe Plasma em Pokémon Black e White, jovem criado entre pokémon e manipulado por Ghetsis."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "N, o misterioso rei da Equipe Plasma, cresceu cercado de pokémon e tem um dom raro. Qual é?",
    "resposta": "Ouvir a voz dos pokémon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/N"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/N",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "N",
      "descricao": "Rei da Equipe Plasma em Pokémon Black e White, jovem criado entre pokémon e manipulado por Ghetsis."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do rei da Equipe Plasma é só uma letra, N. Essa letra é a inicial de qual primeiro nome?",
    "resposta": "Natural",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/N"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/N",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Equipe Flare",
      "descricao": "Organização vilã de Pokémon X e Y, da região de Kalos, de uniformes vermelhos, liderada por Lysandre."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em X e Y, que homem de cabeleira ruiva, dono de um café em Lumiose, comanda em segredo a Equipe Flare?",
    "resposta": "Lysandre",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lysandre",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_X_and_Y"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lysandre",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_X_and_Y",
        "situacao": "ok",
        "texto": "Pokémon X and Pokémon Y are 2013 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the sixth generation of the main Pokémon game series. First announced in January 2013 by Nintendo president Satoru Iwata through a Nintendo Direct, Pokémon X and Pokémon Y were released worldwide in October 2013\n[…]\nUpon meeting Sycamore in Lumiose City, the player is informed of Mega Evolution and he requests they travel across Kalos and uncover the mysteries behind it. He provides them with one of the Kanto Region starter Pokémon and their respective Mega Stone. Before leaving Lumiose City, the player encounters an imposing man named Lysandre who desires a more beautiful world.\n[…]\nOnce the player obtains their seventh Gym Badge, they, and the rest of Kalos, are addressed by Lysandre through the Holo Caster (a holographic communication device); Lysandre informs them of the fact that he is the Team Flare boss and intends to destroy humanity.\n[…]\nFollowing hints from friends and locals, the player discovers Team Flare's secret lab under a café in Lumiose City where they formally meet a 9-foot (2.7 m) tall man named AZ; he is revealed to be the 3,000-year-old king who once used the \"ultimate weapon\"—the same device and weapon of mass destruction Lysandre plans to use—which utilized energy from the Legendary Pokémon Xerneas or Yveltal to end a war in Kalos.\n[…]\nAlongside Shauna and Calem or Serena, the player sets out to stop Team Flare and Lysandre at their second base in Geosenge Town, the location of the ultimate weapon. Upon reaching the core of the weapon, the player discovers a dormant Xerneas or Yveltal which suddenly awakens with their appearance. They capture the legendary Pokémon and proceed to bring an end to Lysandre's plans after defeating him in battle one final time."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_X_e_Y",
        "situacao": "ok",
        "texto": "Pokémon X e Y (ポケットモンスター X・Y, Poketto Monsutā Ekkusu & Wai; Monstros de Bolso Xis & Ípsilon) são dois jogos eletrônicos de RPG de 2013, produzidos pela Game Freak e publicados pela The Pokémon Company e Nintendo para o Nintendo 3DS, sendo os jogos mais vendidos do console, com 27 milhões de cópias vendidas. São os primeiros títulos da sexta geração da série Pokémon.\n[…]\nAntes de deixar Lumiose City, o jogador encontra um homem imponente chamado Lysandre que deseja um mundo mais bonito.\n[…]\nAssim que o jogador obtém sua sétima insígnia, ele e o resto de Kalos são abordados por Lysandre através do Holo Caster (um dispositivo de comunicação holográfica); Lysandre os informa do fato de que ele é o líder da Equipe Flare e pretende destruir a humanidade.\n[…]\nSeguindo dicas de amigos e moradores locais, o jogador descobre o laboratório secreto da Equipe Flare sob um café em Lumiose City, onde eles formalmente encontram um homem de 2,7 metros de altura chamado AZ; revela-se que ele é o rei de 3 mil anos que já usou a \"arma definitiva\" — o mesmo dispositivo e arma de destruição em massa que Lysandre planeja usar — que utilizava a energia do lendário Pokémon Xerneas ou Yveltal para encerrar uma guerra em Kalos.\n[…]\nAo lado de Shauna e Calem ou Serena, o jogador se propõe a parar a Equipe Flare e Lysandre em sua segunda base em Geosenge Town, o local da arma definitiva. Ao chegar ao centro da arma, o jogador descobre um Xerneas ou Yveltal adormecido que desperta repentinamente com sua aparição. Eles capturam o lendário Pokémon e põem fim aos planos de Lysandre depois de derrotá-lo na batalha uma última vez. Após a batalha, Lysandre usará a arma definitiva para destruir a arma definitiva.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Equipe Flare",
      "descricao": "Organização vilã de Pokémon X e Y, da região de Kalos, de uniformes vermelhos, liderada por Lysandre."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Para entrar na Equipe Flare, em Kalos, um recruta precisa pagar uma taxa altíssima. De quanto?",
    "resposta": "Cinco milhões de pokédollars",
    "distratores": [
      "Um milhão de pokédollars",
      "Cinquenta mil pokédollars",
      "Cem milhões de pokédollars"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Flare"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Flare",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "AZ",
      "descricao": "Gigante de Pokémon X e Y, antigo rei de Kalos que há três mil anos construiu a arma suprema."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Há três mil anos, o rei AZ, de Kalos, construiu uma máquina para trazer de volta à vida qual pokémon querido?",
    "resposta": "Seu Floette",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/AZ"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/AZ",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Equipe Skull",
      "descricao": "Gangue de Pokémon Sun e Moon, da região de Alola, formada por jovens rebeldes que se vestem de preto e branco."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em Sun e Moon, que treinador de cabelo branco, especialista em pokémon inseto, é o chefe da Equipe Skull?",
    "resposta": "Guzma",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Guzma",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Guzma",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun and Pokémon Moon are 2016 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the seventh generation of the Pokémon video game series. First announced in February 2016, Sun and Moon were released worldwide on 18 November 2016, commemorating the franchise's 20th anniversary.\n[…]\nThe leading scientist in the Alola Region is Professor Kukui, whose name comes from the kukui, also known as the candlenut, the Hawaiian state tree, continuing the trend of Pokémon professors being named after trees. Team Skull is the name of the villainous group in Alola. The Aether Foundation is an organization which studies Ultra Beasts, mysterious creatures from another dimension. Though Professor Samuel Oak does not appear in Sun and Moon, his cousin Samson Oak takes his place.\n[…]\nUnlike in previous games, trials involve battles with powered-up Pokémon, followed by battles with each island's Kahuna upon completion of an island's trials. Throughout this, the player encounters Team Skull, a gang of people who quit the island trials whose members include their boss Guzma, and enforcer Gladion. The player also encounters the Aether Foundation, an organization led by a blonded woman named Lusamine aiming to shelter Pokémon from various threats.\n[…]\nThe player then proceeds to battle through Aether Paradise with Hau and Gladion's help, eventually defeating Aether Foundation President Lusamine, who is revealed to be Gladion and Lillie's mother. Despite this, Lusamine and Guzma manage to open an Ultra Wormhole, with the former overclocking Nebby's powers, transporting them to Ultra Space, the Ultra Beasts' dimension.\n[…]\nThe international release, known as Pokémon Sun & Pokémon Moon: Super Music Collection, was released on iTunes on the same date."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sun_e_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun (ポケットモンスター　サン, Poketto Monsutā San; \"Monstros de Bolso Sun\", que traduzido do inglês para o português significa Sol, Sol em japonês é 太陽 Taiyō) e Pokémon Moon (ポケットモンスター　ムーン, Poketto Monsutā Mūn; \"Monstros de Bolso Moon\"\", que traduzido do inglês para o português significa Lua, Lua em japonês é 月 Tsuki) são dois jogos eletrônicos de RPG de 2016, faz parte da sétima geração da série Pok\n[…]\nOs jogadores também podem personalizar a aparência de seu treinador Pokémon, escolhendo gênero, tom de pele e cor de cabelo no início do jogo e posteriormente, adquirir roupas e acessórios para alterar a aparência de seu personagem. Juntando-se às gerações anteriores de Pokémon estão todas as novas espécies, como o novo Pokémon inicial; Rowlet, Litten e Popplio e os Pokémon que são, no mundo fictício dos Pokémon, descritos como lendários, nomeadamente Solgaleo e Lunala.\n[…]\nO principal cientista da região de Alola é o professor Kukui, cujo nome vem do kukui, também conhecido como nogueira-de-iguape, a árvore do estado havaiano, continuando a tendência de os professores Pokémon terem nomes de árvores. Equipe Skull é o nome do grupo vilão de Alola. A Fundação Aether é uma organização que estuda Ultra Bestas, criaturas misteriosas de outra dimensão. Embora o Professor Carvalho não apareça em Sun e Moon, seu primo Gabriel Carvalho toma seu lugar.\n[…]\nAo contrário dos jogos anteriores, os testes envolvem batalhas com Pokémon aprimorados, seguidos por batalhas com os Kahuna de cada ilha após a conclusão dos testes de uma ilha. Ao longo disso, o jogador encontra a Equipe Skull, uma gangue de pessoas que abandonou os julgamentos da ilha cujos membros incluem seu líder Guzma e o executor Gladion. O jogador também encontra a Fundação Aether, uma organização que visa proteger Pokémon de várias ameaças.\n[…]\nPlaylist Pokémon Sun e Moon no YouTube  Canal Oficial da Pokémon em Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Equipe Skull",
      "descricao": "Gangue de Pokémon Sun e Moon, da região de Alola, formada por jovens rebeldes que se vestem de preto e branco."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Sun e Moon, a Equipe Skull transforma em base uma cidade murada e sempre chuvosa. Que cidade é essa?",
    "resposta": "Po Town",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Po_Town",
      "https://bulbapedia.bulbagarden.net/wiki/Team_Skull"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Po_Town",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Skull",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Lusamine",
      "descricao": "Presidente da Fundação Aether nos jogos Pokémon Sun e Moon, obcecada pelas Ultracriaturas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Lusamine, presidente da Fundação Aether, em Alola, é mãe de Gladion e de qual menina, que esconde o Cosmog Nebby numa bolsa?",
    "resposta": "Lillie",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lusamine",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lusamine",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun and Pokémon Moon are 2016 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the seventh generation of the Pokémon video game series. First announced in February 2016, Sun and Moon were released worldwide on 18 November 2016, commemorating the franchise's 20th anniversary.\n[…]\nThe player then proceeds to battle through Aether Paradise with Hau and Gladion's help, eventually defeating Aether Foundation President Lusamine, who is revealed to be Gladion and Lillie's mother. Despite this, Lusamine and Guzma manage to open an Ultra Wormhole, with the former overclocking Nebby's powers, transporting them to Ultra Space, the Ultra Beasts' dimension.\n[…]\nThis causes Nebby to evolve into a cocoon-like form while Ultra Beasts are unleashed onto Alola's islands, forcing the island Kahunas and guardian deities to fight them.\n[…]\nProceeding to the final island, the player and Lillie perform a ritual to evolve Nebby into its final form — Solgaleo or Lunala depending on the version — at the island's Altar. With Nebby's newfound power, the player and Lillie travel to Ultra Space and find Lusamine who, not wanting to be rescued, allows herself to be taken over by the Ultra Beast they encountered earlier, forcing the player to battle her in self-defense.\n[…]\nAfter defeating the crazed Lusamine, the player returns to Alola and ascends Mount Lanakila to challenge the newly formed Alola League and defeating the Elite Four members. In the last match, they defeated Kukui to become the first-ever Alola League Champion. In the credits, the player battles Melemele's guardian deity Tapu Koko after a celebration, with Lillie and Lusamine departing Alola for Kanto the following day."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sun_e_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun (ポケットモンスター　サン, Poketto Monsutā San; \"Monstros de Bolso Sun\", que traduzido do inglês para o português significa Sol, Sol em japonês é 太陽 Taiyō) e Pokémon Moon (ポケットモンスター　ムーン, Poketto Monsutā Mūn; \"Monstros de Bolso Moon\"\", que traduzido do inglês para o português significa Lua, Lua em japonês é 月 Tsuki) são dois jogos eletrônicos de RPG de 2016, faz parte da sétima geração da série Pok\n[…]\nO jogador então prossegue para a batalha em Aether Paradise com a ajuda de Hau e Gladion, eventualmente derrotando o presidente da Aether, Lusamine, que se revela ser a mãe de Gladion e Lillie. Apesar disso, Lusamine e Guzma conseguem abrir um Ultra Wormhole, com o ex-overclock dos poderes de Nebby, transportando-os para o Ultra Espaço, a dimensão dos Ultra Bestas.\n[…]\nIsso faz com que Nebby evolua para uma forma semelhante a um casulo enquanto Ultra Besta são soltos nas ilhas de Alola, forçando a ilha Kahunas e divindades guardiãs para lutar contra eles.\n[…]\nProsseguindo para a ilha final, o jogador e Lillie realizam um ritual para evoluir Nebby em sua forma final–Solgaleo ou Lunala dependendo da versão–no Altar da ilha. Com o poder recém-descoberto de Nebby, o jogador e Lillie viajam para o Ultra Space e encontram Lusamine que, não querendo ser resgatada, se permite ser tomada pela Ultra Besta que encontraram antes, forçando o jogador a lutar contra ela defesa.\n[…]\nApós derrotar o enlouquecido Lusamine, o jogador retorna a Alola e sobe o Monte Lanakila para desafiar o recém-formado Equipe dos Quatro da Liga de Alola Pokémon. Na última partida, eles derrotaram Kukui para se tornar o primeiro campeão da Liga Pokémon de Alola. Nos créditos, o jogador luta contra a divindade guardiã de Melemele, Tapu Koko após uma celebração, com Lillie e Lusamine partindo de Alola para Kanto no dia seguinte.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Equipe Yell",
      "descricao": "Grupo de torcedores barulhentos de Pokémon Sword e Shield, da região de Galar, que atrapalha o jogador."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Sword e Shield, a barulhenta Equipe Yell vive atrapalhando o jogador. Ela é o fã-clube de qual treinadora rival?",
    "resposta": "Marnie",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Yell"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Yell",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Rose (Pokémon)",
      "descricao": "Presidente da Liga Pokémon de Galar e da empresa Macro Cosmos, antagonista de Pokémon Sword e Shield."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Sword e Shield, o presidente Rose desperta Eternatus, mesmo pondo Galar em perigo. O que ele quer evitar?",
    "resposta": "Uma futura crise de energia",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Rose",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Rose",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword and Pokémon Shield are 2019 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo Switch console. They are the first instalments in the 8th generation of the Pokémon video game series. First teased at E3 2017 and announced in February 2019, the games were released on 15 November 2019.\n[…]\nSword and Shield are set in Galar, a fictional region inspired by the United Kingdom, with several of its landmarks resembling places such as Bath, Somerset and York. Within the Galar Region lie countryside towns featuring cottages and Victorian architecture to the south. There are also Industrial Revolution and steampunk references. Many of the region's towns and cities feature Pokémon Gyms stylised like football stadiums, showcasing the games' Dynamax and Gigantamax mechanic.\n[…]\nThe next day, before the final battle between the player and Leon can commence, Rose awakens the Legendary Pokémon Eternatus in an attempt to harness its power to provide unlimited energy to Galar, purposefully triggering the second Darkest Day. The player and Hop secure the aid of the two Legendary Pokémon, Zacian and Zamazenta. The four defeat Rose and Eternatus, after which the player catches Eternatus and Rose hands himself over to the authorities.\n[…]\nUnlike previous core series games, many pre-existing Pokémon are not available in Sword and Shield, and only Pokémon that appear in the Galar region can be transferred from previous titles via Pokémon Home.\n[…]\nSword and Shield were first teased through a special message by The Pokémon Company president Tsunekazu Ishihara during Nintendo's E3 2017 presentation, where Ishihara mentioned that Game Freak was working on a new core series Pokémon role-playing game for the Nintendo Switch but that it would not be released for more than a year."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sword_e_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword e Pokémon Shield (ポケットモンスター ソード・シールド, Poketto Monsutā Sōdo・Shīrudo; Monstros de Bolso Sword・Shield, que traduzidos do inglês para o português significa Espada e Escudo, Espada e Escudo em japonês é respectivamente 剣 Ken e 盾 Tate) são dois jogos eletrônicos de RPG, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo. Fazem parte da oitava geração da série Po\n[…]\nDepois de viajar para a próxima cidade para se inscrever no Gym Challenge, eles encontram os rivais Bede e Marnie junto com a Equipe Yell, um grupo devoto de hooligans que atuam como fanbase involuntário de Marnie e estão determinados a impedir qualquer outra pessoa de completar o Challenge. O jogador também conhece o Presidente Rose, que, além de endossar Bede como Desafiador de Ginásio, preside a Liga Pokémon Galar e a principal empresa de energia da região.\n[…]\nNo dia seguinte, antes que a batalha entre o jogador e Leon possa começar, Chairman Rose desperta o lendário Pokémon Eternatus em uma tentativa de aproveitar seu poder para fornecer energia ilimitada a Galar, inadvertidamente desencadeando um segundo Darkest Day. O jogador e Hop retornam ao Slumbering Weald e garantem a ajuda dos lendários Pokémon, Zacian e Zamazenta, para derrotar o Presidente Rose e Eternatus, após o qual o jogador pega Eternatus.\n[…]\nO jogador, Hop e Piers trabalham com os Líderes de Ginásio para subjugar o Pokémon Dynamax e depois rastrear e confrontar os irmãos. Eles usam a energia Dynamax para levar Zamazenta (em Sword) ou Zacian (em Shield) à loucura, e o jogador os afasta com a ajuda de Zacian (em Sword) ou Zamazenta (em Shield).\n[…]\nUltimate, um torneio online com o tema Pokémon foi realizado de 15 a 18 de novembro para promover o lançamento de Sword e Shield, enquanto um evento espiritual ocorreu de 22 a 27 de novembro, com alguns Pokémon disponíveis como colecionáveis espíritos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Equipe Star",
      "descricao": "Grupo de alunos rebeldes da Academia de Paldea, em Pokémon Scarlet e Violet, dividido em esquadrões com bases próprias."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em Scarlet e Violet, que aluna tímida, fã de Eevee, se revela a chefe suprema da Equipe Star?",
    "resposta": "Penny",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Penny",
      "https://bulbapedia.bulbagarden.net/wiki/Team_Star"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Penny",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Star",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Equipe Star",
      "descricao": "Grupo de alunos rebeldes da Academia de Paldea, em Pokémon Scarlet e Violet, dividido em esquadrões com bases próprias."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os esquadrões da Equipe Star, de Paldea, têm nomes de estrelas, como Schedar e Caph. Essas estrelas pertencem a qual constelação?",
    "resposta": "Cassiopeia",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Star"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Star",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Professor Elm",
      "descricao": "Professor pokémon da região de Johto, que entrega o inicial ao jogador em Pokémon Gold e Silver."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que têm em comum os nomes dos professores Carvalho, Elm, Birch, Rowan e Juniper?",
    "resposta": "São nomes de árvores",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Elm",
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Juniper"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Professor_Elm",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Professor_Juniper",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Professor Sycamore",
      "descricao": "Professor pokémon da região de Kalos, que entrega o inicial ao jogador em Pokémon X e Y."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Pokémon X e Y, o Professor Sycamore, de Kalos, dedica suas pesquisas a qual fenômeno?",
    "resposta": "Megaevolução",
    "distratores": [
      "Dynamax",
      "Terastal",
      "Movimento Z"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Sycamore",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_X_and_Y"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Professor_Sycamore",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_X_and_Y",
        "situacao": "ok",
        "texto": "Pokémon X and Pokémon Y are 2013 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the sixth generation of the main Pokémon game series. First announced in January 2013 by Nintendo president Satoru Iwata through a Nintendo Direct, Pokémon X and Pokémon Y were released worldwide in October 2013\n[…]\nWild Pokémon inhabit every corner of the Kalos region, many of which are only known to appear in this area.\n[…]\nSimilar to previous Pokémon games, X and Y both follow a linear storyline whose main events occur in a fixed order. The protagonist of Pokémon X and Y has just moved to a small town called Vaniville Town with their mother Grace. They soon befriend four trainers—Shauna, Tierno, Trevor and their rival Calem or Serena,—all of whom were called to meet Professor Augustine Sycamore who is the leading professor in the Kalos Region in Lumiose City, the main city of Kalos.\n[…]\nUpon meeting Sycamore in Lumiose City, the player is informed of Mega Evolution and he requests they travel across Kalos and uncover the mysteries behind it. He provides them with one of the Kanto Region starter Pokémon and their respective Mega Stone. Before leaving Lumiose City, the player encounters an imposing man named Lysandre who desires a more beautiful world.\n[…]\nA parade is organised by Professor Sycamore to celebrate the player's role in saving the Kalos Region and becoming the new Kalos League Champion. AZ battles the player during the parade, recognising the player's true strength and what it means to be a Pokémon Trainer. His Floette then returns to him and they are reunited for the first time in 3,000 years.\n[…]\nAs of 31 March 2023, the games have sold 16.68 million units worldwide, making them the second best-selling games for the Nintendo 3DS behind Mario Kart 7 and just ahead of Pokémon Sun and Moon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_X_e_Y",
        "situacao": "ok",
        "texto": "Pokémon X e Y (ポケットモンスター X・Y, Poketto Monsutā Ekkusu & Wai; Monstros de Bolso Xis & Ípsilon) são dois jogos eletrônicos de RPG de 2013, produzidos pela Game Freak e publicados pela The Pokémon Company e Nintendo para o Nintendo 3DS, sendo os jogos mais vendidos do console, com 27 milhões de cópias vendidas. São os primeiros títulos da sexta geração da série Pokémon.\n[…]\nPokémon selvagens habitam todos os cantos da região de Kalos, muitos dos quais só aparecem nesta área.\n[…]\nTodos foram chamados para conhecer o Professor Sycamore, que é o principal professor da região de Kalos em Lumiose City, a principal cidade de Kalos. Recebendo Chespin, Fennekin ou Froakie como seu Pokémon inicial de Tierno, o jogador começa sua aventura. Ao longo do caminho, eles aprendem sobre os ginásios Pokémon e recebem sua primeira medalha por derrotar Viola, a líder da academia da cidade de Santalune.\n[…]\nDepois disso, eles encontram Sina e Dexio, assistentes de Sycamore, que os traz ao próprio professor; no entanto, uma vez na cidade de Lumiose, eles descobrem que a área está sofrendo de uma queda parcial de energia. Ao encontrar Sycamore em Lumiose City, o jogador é informado sobre as Mega Evoluções e pede que eles viajem por Kalos e desvendem os mistérios por trás disso. Ele fornece a eles um da região de Kanto, Pokémon inicial e suas respectivas Mega Stone.\n[…]\nUm desfile é organizado pelo Professor Sycamore para celebrar o papel do jogador em salvar a região de Kalos e se tornar o novo campeão. O AZ luta contra o jogador durante o desfile, reconhecendo a força do jogador e o que significa ser um Treinador Pokémon. Sua Floette então retorna para ele e eles se reencontram pela primeira vez em 3 mil anos.\n[…]\n\"Pokémon Direct\" Oficial anunciado da Nintendo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Sada e Turo",
      "descricao": "Professores pokémon de Paldea: Sada aparece em Pokémon Scarlet e Turo em Pokémon Violet."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Paldea, a professora de Scarlet se chama Sada, e o de Violet, Turo. De quais palavras espanholas vêm esses nomes?",
    "resposta": "Pasado e futuro",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Sada",
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Turo"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Professor_Sada",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Professor_Turo",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Sonia",
      "descricao": "Pesquisadora de Pokémon Sword e Shield, amiga de infância de Leon, que se torna professora da região de Galar."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Sword e Shield, Sonia, amiga de infância do campeão Leon, é neta de qual pesquisadora de Galar?",
    "resposta": "Professora Magnolia",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sonia"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sonia",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Barry",
      "descricao": "Rival impaciente do jogador em Pokémon Diamond, Pearl e Platinum, vizinho do protagonista em Twinleaf."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Barry, o rival apressado de Diamond e Pearl, vive ameaçando o jogador com uma multa. De quanto?",
    "resposta": "Dez milhões de pokédollars",
    "distratores": [
      "Um milhão de pokédollars",
      "Cem mil pokédollars",
      "Cem milhões de pokédollars"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Barry"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Barry",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Hop",
      "descricao": "Rival e amigo do jogador em Pokémon Sword e Shield, da região de Galar."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Hop, o rival animado de Sword e Shield, é irmão mais novo de qual treinador famoso?",
    "resposta": "Leon",
    "distratores": [
      "Raihan",
      "Piers",
      "Kabu"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Hop",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Hop",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword and Pokémon Shield are 2019 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo Switch console. They are the first instalments in the 8th generation of the Pokémon video game series. First teased at E3 2017 and announced in February 2019, the games were released on 15 November 2019.\n[…]\nIn the game story, a young Pokémon Trainer begins their adventure in the Galar Region along with their friend/rival Hop as they join the Gym Challenge that allows them to compete with others for the title of Galar League Champion, due to them both getting a letter from Hop's brother and undefeated Galar League Champion, Leon.\n[…]\nAs their quest continues, the player assists Sonia in her research on two Legendary Pokémon who saved Galar from an ancient crisis called the Darkest Day and deduces that they are the same Pokémon previously encountered in the Slumbering Weald. After beating the eight Gym Leaders, the player makes their way to Wyndon where they win the Champion's Cup, earning an opportunity to battle Leon.\n[…]\nThe next day, before the final battle between the player and Leon can commence, Rose awakens the Legendary Pokémon Eternatus in an attempt to harness its power to provide unlimited energy to Galar, purposefully triggering the second Darkest Day. The player and Hop secure the aid of the two Legendary Pokémon, Zacian and Zamazenta. The four defeat Rose and Eternatus, after which the player catches Eternatus and Rose hands himself over to the authorities.\n[…]\nThree days later, the player faces and defeats Leon in the final battle and becomes the new Galar League Champion.\n[…]\nUnlike previous core series games, many pre-existing Pokémon are not available in Sword and Shield, and only Pokémon that appear in the Galar region can be transferred from previous titles via Pokémon Home."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sword_e_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword e Pokémon Shield (ポケットモンスター ソード・シールド, Poketto Monsutā Sōdo・Shīrudo; Monstros de Bolso Sword・Shield, que traduzidos do inglês para o português significa Espada e Escudo, Espada e Escudo em japonês é respectivamente 剣 Ken e 盾 Tate) são dois jogos eletrônicos de RPG, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo. Fazem parte da oitava geração da série Po\n[…]\nSemelhante a muitas entradas anteriores na franquia Pokémon, os jogadores embarcam em uma jornada pela região para se tornar o treinador mais forte, lutando contra oito treinadores poderosos chamados Líderes de Ginásio e eventualmente, o Campeão da região. O jogador e seu melhor amigo, Hop, recebem um dos três Pokémon iniciais: Grookey, Scorbunny ou Sobble de Leon, Campeão da região de Galar e irmão mais velho de Hop.\n[…]\nEnquanto sua busca continua, o jogador auxilia Sonia em sua pesquisa sobre dois Pokémon Lendários que salvaram Galar de uma crise antiga chamada de Darkest Day e deduz que eles são os mesmos Pokémon encontrados anteriormente em Slumbering Weald. Depois de derrotar os oito Líderes de Ginásio, incluindo Piers, o irmão mais velho de Marnie e o líder da Equipe Yell, o jogador segue para Wyndon, onde ganha a Copa dos Campeões, ganhando a oportunidade de lutar contra Leon.\n[…]\nO jogador então enfrenta e derrota Leon em uma batalha e se torna o novo campeão da região de Galar.\n[…]\nMas tudo isso novo parece ter um custo – e o custo é quase tudo no jogo.\" James Grebey e Tom Philip da GQ também se sentiram um pouco desapontados, elogiando a Wild Area, mas afirmando que os jogos eram \"satisfatórios, mas práticos\" e pareciam \"prova de conceito [com] mais um estágio de evolução para Pokémon de console.\" Eles também disseram que \"há... muito no Sword e Shield que não parece que não poderia ter sido alcançado no Nintendo 3DS.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Hau",
      "descricao": "Rival e amigo do jogador em Pokémon Sun e Moon, neto do kahuna Hala."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Hau, neto do kahuna Hala e rival do jogador em Sun e Moon, é louco por qual doce frito típico de Alola?",
    "resposta": "Malasada",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Hau"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Hau",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Arven",
      "descricao": "Aluno da academia de Paldea em Pokémon Scarlet e Violet, cozinheiro e filho do professor da região."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Scarlet e Violet, Arven busca as raras Ervas Místicas de Paldea para tentar curar quem?",
    "resposta": "Seu Mabosstiff",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Arven"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Arven",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Diantha",
      "descricao": "Campeã da Liga Pokémon de Kalos nos jogos Pokémon X e Y, dona de um Gardevoir."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Diantha, Campeã da Liga de Kalos em Pokémon X e Y, também é famosa por qual outra profissão?",
    "resposta": "Atriz",
    "distratores": [
      "Cantora",
      "Estilista",
      "Modelo"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Diantha"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Diantha",
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
