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
      "nome": "Pokémon HeartGold e SoulSilver",
      "descricao": "Recriações de Pokémon Gold e Silver para o Nintendo DS, ambientadas nas regiões de Johto e Kanto."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon HeartGold e SoulSilver, os remakes de Gold e Silver para o Nintendo DS, chegaram às lojas do Japão em que ano?",
    "resposta": "2009",
    "distratores": [
      "2007",
      "2008",
      "2010"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_HeartGold_and_SoulSilver"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_HeartGold_and_SoulSilver",
        "situacao": "ok",
        "texto": "Pokémon HeartGold Version and Pokémon SoulSilver Version are 2009 remakes of the 1999 Game Boy Color role-playing video games Pokémon Gold and Silver, also including features from Pokémon Crystal. The games are part of the fourth generation of the Pokémon video game series, developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS.\n[…]\nSilver, who serves as the game's final boss.\n[…]\nHeartGold and SoulSilver were released in 2009, ten years after Gold and Silver's initial release for the Game Boy Color. Shigeki Morimoto, the games' director, commented on the development of the remakes: \"The first thing that I knew I needed to bear in mind was to respect the feelings of those people who'd played Gold and Silver ten years before.\n[…]\nRumors that Nintendo planned to remake Pokémon Gold and Silver started circulating in early May 2009 after the Japanese television show Pokémon Sunday ended by announcing a \"world-exclusive first announcement\" that would be made on its next show. Kris Pigna of 1UP.com speculated that this alluded to a possible remake of Gold and Silver for the Nintendo DS, due to gold and silver disco balls hanging in the background.\n[…]\nAt the 2009 Pokémon World Championships, Nintendo stated that HeartGold and SoulSilver would be released in North America between the months of January and March, Europe sometime around May and June, and Australia in April. \"Announcing these much-anticipated game launches at The Pokémon World Championships allows us to give the news directly to the legions of fans who represent the true heart and soul of Pokémon,\" a spokesperson said.\n[…]\nNintendo DS Pokémon HeartGold and SoulSilver Music Super Complete, a three-disc soundtrack featuring music scored by Junichi Masuda, Go Ichinose, Hitomi Sato, Shota Kageyama, and Takuto Kitsuta, was released in Japan on October 28, 2009."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_HeartGold_e_SoulSilver",
        "situacao": "ok",
        "texto": "Pokémon HeartGold Version e Pokémon SoulSilver Version (ポケットモンスター ハートゴールド・ソウルシルバー, Poketto Monsutā Hāto Gōrudo・Souru Shirubā; Monstros de Bolso Hearth Gold・Soul Silver, que traduzidos do inglês para o português significam respectivamente  Coração de Ouro e Alma de Prata, em japonês: 金の心, Kin no Kokoro e 銀の魂, Gin no Tamashī) são jogos eletrônicos da série Pokémon, desenvolvidos pela Game Freak e pu\n[…]\nHeartGold e SoulSilver foram liberados em 2009, anos dez após versão inicial Gold e Silver para o Game Boy Color. Shigeki Morimoto, o diretor dos jogos, comentou sobre o desenvolvimento dos remakes: \"A primeira coisa que eu sabia que precisava ter em mente era respeitar os sentimentos das pessoas que jogaram Gold e Silver dez anos antes.\n[…]\nRumores de que a Nintendo planejava refazer Pokémon Gold e Silver começaram a circular no início de maio de 2009, depois que o programa de televisão japonês Pokémon Sunday terminou anunciando um \"primeiro anúncio mundialmente exclusivo\" que seria feito em seu próximo programa. Kris Pigna de 1UP.com especulou que isso aludia a um possível remake de Gold e Silver para o Nintendo DS, devido a bolas de ouro e prata penduradas no fundo.\n[…]\nOs jogos foram lançados para o Nintendo DS em 12 de setembro de 2009 no Japão para coincidir com o décimo aniversário do lançamento original de Gold e Silver. Junichi Masuda afirmou em seu blog que \"nós, Game Freak, passamos muito tempo desenvolvendo dois títulos acima  [sic]\", e que \"Pokémon Gold & Silver estará de volta com muito mais emoção.\"\n[…]\nNintendo DS Pokémon HeartGold e SoulSilver Music Super Complete (ニンテンドーDS ポケモン ハートゴールド&ソウルシルバー ミュージック・スーパーコンプリート, Nintendō DS Pokemon Hātogōrudo ando Sōrushirubā Myūjikku Sūpā Konpurīto), uma trilha sonora de três discos com músicas de Junichi Masuda, Go Ichinose, Hitomi Sato, Shota Kageyama e Takuto Kitsuta, foi lançada no Japão em 28 de outubro de 2009.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Pokémon HeartGold e SoulSilver",
      "descricao": "Recriações de Pokémon Gold e Silver para o Nintendo DS, ambientadas nas regiões de Johto e Kanto."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Yellow, só o Pikachu fazia isso. Em HeartGold e SoulSilver, o primeiro pokémon da equipe, qualquer que seja, também passa a fazer. O quê?",
    "resposta": "Andar atrás do jogador",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_HeartGold_and_SoulSilver",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Yellow"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_HeartGold_and_SoulSilver",
        "situacao": "ok",
        "texto": "Pokémon HeartGold Version and Pokémon SoulSilver Version are 2009 remakes of the 1999 Game Boy Color role-playing video games Pokémon Gold and Silver, also including features from Pokémon Crystal. The games are part of the fourth generation of the Pokémon video game series, developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS.\n[…]\nIn HeartGold and SoulSilver, the Pokémon in the first slot of the player's party can follow them in the overworld, echoing a mechanic in Pokémon Yellow where Pikachu follows the player. This mechanic was also used in a limited fashion in Pokémon Diamond, Pearl, and Platinum when the player is in Amity Park with a \"cute\" Pokémon. The player may talk to the Pokémon to see or check on how that Pokémon is feeling, and occasionally it may pick up items.\n[…]\nAs per the originals, the other legendary Pokémon can be obtained later on.\n[…]\nVideoGamer.com reviewer Jamin Smith said, \"With HeartGold and SoulSilver the Pokémon series has reached a point where it can't get any better.\" Eurogamer's Keza MacDonald gave the games a 9/10, stating \"They combine everything that was best about the older Pokémon games\", citing the Pokémon designs and improved graphics and battle system.\n[…]\nGamePro's McKinley Noble stated that \"it's clear that this is a perfect experience for both old-school trainers and the newest generation of Pokémon fans.\" GameZone's Cliff Bakehorn III said, \"There is not a doubt in my mind: Pokémon HeartGold and SoulSilver are the pinnacle of the entire series.\" Nathan Meunier of GameSpot gave the games one of the lower scores, criticizing them for a lack of innovation. GamesRadar attributed the game's success to being a remake of classic games.\n[…]\nHeartGold and SoulSilver won the Golden Joystick Award for Portable Game of the Year in 2010, the first Golden Joystick Award win for the series."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Yellow",
        "situacao": "ok",
        "texto": "Pokémon Red Version and Pokémon Blue Version are popular 1996 role-playing video games (RPGs) developed by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon video game series and were first released in Japan as Pocket Monsters Red and Pocket Monsters Green, followed by the special edition Pocket Monsters Blue later that year.\n[…]\nThe same versions were later released in Australia sometime later in 1998 and in Europe on October 5, 1999, being the second-to-last video game released for the original Game Boy in Europe with Pokemon Yellow Version: Special Pikachu Edition being the last.\n[…]\nThis feature was used again in Pokémon HeartGold and SoulSilver, the remakes of Pokémon Gold and Silver, and Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!, the remakes of Pokémon Yellow. Yellow includes a \"Pikachu's Beach\" minigame that is only accessible to players who either won a Nintendo contest or complete a challenge in another game, Pocket Monsters Stadium or Pokémon Stadium, and exchange data between the games using the Transfer Pak.\n[…]\nPokémon: Let's Go, Pikachu! and Pokémon: Let's Go, Eevee! are enhanced remakes of Pokémon Yellow Version, released in November 2018 for the Nintendo Switch. They were aimed at newcomers to the Pokémon series, and incorporate mechanics from Pokémon Go. The games take place in the Kanto region and include only the original 151 Pokémon from the first generation of Pokémon.\n[…]\nThe ability for Pokémon to accompany the protagonist in the overworld returns, a feature last seen in Pokémon HeartGold and SoulSilver on the Nintendo DS. However, whereas only one Pokémon could be chosen to follow the protagonist previously, they will additionally be accompanied by the starter Pikachu or Eevee in Let's Go, Pikachu! or Let's Go, Eevee!, respectively.\n[…]\nOfficial website for Pokémon Yellow (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_HeartGold_e_SoulSilver",
        "situacao": "ok",
        "texto": "Pokémon HeartGold Version e Pokémon SoulSilver Version (ポケットモンスター ハートゴールド・ソウルシルバー, Poketto Monsutā Hāto Gōrudo・Souru Shirubā; Monstros de Bolso Hearth Gold・Soul Silver, que traduzidos do inglês para o português significam respectivamente  Coração de Ouro e Alma de Prata, em japonês: 金の心, Kin no Kokoro e 銀の魂, Gin no Tamashī) são jogos eletrônicos da série Pokémon, desenvolvidos pela Game Freak e pu\n[…]\nO jogador começa o jogo com um Pokémon e pode capturar mais usando Pokébolas.\n[…]\nEm HeartGold e SoulSilver, o primeiro Pokémon no grupo do jogador pode segui-los no mundo superior, ecoando uma mecânica em Pokémon Yellow onde Pikachu segue o jogador. Essa mecânica também foi usada de forma limitada em Pokémon Diamond, Pearl e Platinum quando o jogador estava no Amity Park com um Pokémon \"fofo\". O jogador pode falar com o Pokémon para ver ou verificar como ele está se sentindo e, ocasionalmente, ele pode pegar itens.\n[…]\nDurante certos pontos do jogo, o rival do jogador enfrentará o protagonista em um teste de habilidades. Além disso, o jogador encontrará Kimono Girls, que pedem ao jogador para fazer pequenos favores–como derrotar um grunhido da Equipe Rocket–em toda a região de Johto. Depois de lutar com todos eles em uma fileira, eles seguem para a área onde o jogador encontra o mascote Pokémon Lendário do jogo, Ho-Oh em HeartGold e Lugia em SoulSilver, e dançam para invocá-los.\n[…]\nUm substituto do autor do jogo do presidente da Game Freak em Celadon City afirma que a equipe se esforçou para fazer um jogo que atraísse jogadores com boas memórias, sem \"refazer a mesma coisa\". Ele também afirma que fazer o jogo foi um \"desafio gratificante\". Sobre as diferenças entre os remakes e os originais e como os nomes resultaram disso, Morimoto disse \"Com HeartGold and SoulSilver, a forma como treinadores e Pokémon se relacionam tornou-se um tema importante e foi adicionado à história.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pokéwalker",
      "descricao": "Acessório em forma de Poké Bola que acompanhava Pokémon HeartGold e SoulSilver e deixava o jogador levar um pokémon para passear."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O Pokéwalker, acessório em forma de Poké Bola que vinha com HeartGold e SoulSilver, deixava o jogador levar um pokémon para passear. Que tipo de aparelho ele era?",
    "resposta": "Um pedômetro",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9walker",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_HeartGold_and_SoulSilver"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9walker",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_HeartGold_and_SoulSilver",
        "situacao": "ok",
        "texto": "Pokémon HeartGold Version and Pokémon SoulSilver Version are 2009 remakes of the 1999 Game Boy Color role-playing video games Pokémon Gold and Silver, also including features from Pokémon Crystal. The games are part of the fourth generation of the Pokémon video game series, developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS.\n[…]\nAdditionally, a pedometer was bundled with each copy of the games called a \"Pokéwalker\", which allows players to transfer Pokémon from the game into the device and walk around with them, earning \"watts\" in the process, which can be exchanged for in-game rewards.\n[…]\nIn response to the news confirming the development of HeartGold and SoulSilver, fans posted their reactions and commentary on the Internet. In particular, IGN editor Jack DeVries reasoned that the primary reason for the updated games was to be compatible with Pokémon Diamond and Pearl, allowing players to collect old Pokémon species that were previously unobtainable in the new games.\n[…]\nVideoGamer.com reviewer Jamin Smith said, \"With HeartGold and SoulSilver the Pokémon series has reached a point where it can't get any better.\" Eurogamer's Keza MacDonald gave the games a 9/10, stating \"They combine everything that was best about the older Pokémon games\", citing the Pokémon designs and improved graphics and battle system.\n[…]\nGamePro's McKinley Noble stated that \"it's clear that this is a perfect experience for both old-school trainers and the newest generation of Pokémon fans.\" GameZone's Cliff Bakehorn III said, \"There is not a doubt in my mind: Pokémon HeartGold and SoulSilver are the pinnacle of the entire series.\" Nathan Meunier of GameSpot gave the games one of the lower scores, criticizing them for a lack of innovation. GamesRadar attributed the game's success to being a remake of classic games."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_HeartGold_e_SoulSilver",
        "situacao": "ok",
        "texto": "Pokémon HeartGold Version e Pokémon SoulSilver Version (ポケットモンスター ハートゴールド・ソウルシルバー, Poketto Monsutā Hāto Gōrudo・Souru Shirubā; Monstros de Bolso Hearth Gold・Soul Silver, que traduzidos do inglês para o português significam respectivamente  Coração de Ouro e Alma de Prata, em japonês: 金の心, Kin no Kokoro e 銀の魂, Gin no Tamashī) são jogos eletrônicos da série Pokémon, desenvolvidos pela Game Freak e pu\n[…]\nO jogador começa o jogo com um Pokémon e pode capturar mais usando Pokébolas.\n[…]\nEm HeartGold e SoulSilver, o primeiro Pokémon no grupo do jogador pode segui-los no mundo superior, ecoando uma mecânica em Pokémon Yellow onde Pikachu segue o jogador. Essa mecânica também foi usada de forma limitada em Pokémon Diamond, Pearl e Platinum quando o jogador estava no Amity Park com um Pokémon \"fofo\". O jogador pode falar com o Pokémon para ver ou verificar como ele está se sentindo e, ocasionalmente, ele pode pegar itens.\n[…]\nUm substituto do autor do jogo do presidente da Game Freak em Celadon City afirma que a equipe se esforçou para fazer um jogo que atraísse jogadores com boas memórias, sem \"refazer a mesma coisa\". Ele também afirma que fazer o jogo foi um \"desafio gratificante\". Sobre as diferenças entre os remakes e os originais e como os nomes resultaram disso, Morimoto disse \"Com HeartGold and SoulSilver, a forma como treinadores e Pokémon se relacionam tornou-se um tema importante e foi adicionado à história.\n[…]\nPokémon HeartGold e SoulSilver trazem para quem comprá-los um aparelho especial chamado \"Pokéwalker\". Esse aparelho permite, através de raios infravermelhos, a transferência de Pokémon desses dois jogos para ele. O treinador poderá apanhar outros pokémon e ainda treinar o Pokémon colocado no \"Pokéwalker\". É possível capturar Pokémon através de eventos que o rodeiam como a Floresta Amarela, referida acima.\n[…]\nPokémon Fire Red e Leaf Green\n[…]\nPokémon Let's Go, Pikachu! e Let's Go, Eevee!",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Pokémon Let's Go, Pikachu! e Let's Go, Eevee!",
      "descricao": "Par de jogos da série principal Pokémon para o Nintendo Switch, recriações de Pokémon Yellow ambientadas em Kanto."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Os jogos Let's Go, Pikachu! e Let's Go, Eevee!, que levaram a região de Kanto para o Nintendo Switch, foram lançados em que ano?",
    "resposta": "2018",
    "distratores": [
      "2016",
      "2017",
      "2019"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Let%27s_Go,_Pikachu!_and_Let%27s_Go,_Eevee!"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Let%27s_Go,_Pikachu!_and_Let%27s_Go,_Eevee!",
        "situacao": "ok",
        "texto": "Pokémon: Let's Go, Pikachu! and Pokémon: Let's Go, Eevee! are 2018 role-playing video games developed by Game Freak and published by the Pokémon Company and Nintendo for the Nintendo Switch. The games are remakes of the 1998 Game Boy title Pokémon Yellow. Let's Go, Pikachu! and Let's Go, Eevee! are part of the seventh generation of the Pokémon video game series and are the first main series instal\n[…]\nDuring Nintendo's E3 2018 Nintendo Direct presentation on 12 June 2018, it was revealed that the Poké Ball Plus would come with a Mew that can be transferred to the games.\n[…]\nThe games were released internationally on 16 November 2018. Bundles of the games with the Poké Ball Plus controller were announced, as well as a Nintendo Switch console bundle, including the games, brown and yellow colored Joy-Con, and a dock with artwork of Eevee and Pikachu. On 21 September 2018, Amazon began offering pre-orders for the Let's Go, Pikachu! and Let's Go, Eevee! Switch bundle.\n[…]\nIn Japan, Let's Go, Pikachu! and Let's Go, Eevee! topped the software sales chart and sold 661,240 physical retail units in their opening weekend, and were responsible for almost quadrupling Nintendo Switch hardware sales for the week. They remained at the top of the Japanese charts in their third week, bringing its physical retail sales to 1,012,247 units in Japan by 9 December 2018. By 16 December 2018, the games had sold 1,121,020 physical retail units in Japan.\n[…]\nIndividually, Let's Go, Pikachu! debuted at third place in the UK's all-format sales charts, and Let's Go, Eevee! placed sixth on the same chart. UK sales were down 60% on the sales of Pokémon Sun and Moon, the preceding games in the franchise, due to the Switch having a smaller install base than the Nintendo 3DS and stock problems. The games sold over 338,270 physical retail units in 2018, making them the year's eleventh best-selling retail games in the UK."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Let%27s_Go%2C_Pikachu%21_e_Let%27s_Go%2C_Eevee%21",
        "situacao": "ok",
        "texto": "Pokémon Let's Go, Pikachu! e Let's Go, Eevee! (ポケットモンスター Let's GO！ ピカチュウ・Let's GO！ イーブイ, Poketto Monsutā Let's GO! Pikachū・Let's GO! Ībui, Monstros de Bolso Vamos Lá! Pikachu e Vamos Lá! Eevee) são um par de jogos eletrônicos de RPG de 2018, recriações de Pokémon Yellow do Game Boy Color de 1998. Eles eram desenvolvidos pela Game Freak e distribuídos pela Nintendo e pela The Pokémon Company para N\n[…]\nforam lançados mundialmente para o Nintendo Switch em 16 de novembro de 2018. Os jogos são o terceiro par de jogos da sétima geração da série de jogos eletrônicos de Pokémon e os primeiros de tal a ser lançado para um console de jogo doméstico. Eles apresentam conectividade com o jogo móvel Pokémon GO e oferecem suporte a um controlador opcional, o Poké Ball Plus.\n[…]\nApesar de serem os primeiros jogos de RPGs da franquia de Pokémon para a plataforma, Pokémon Let's Go, Pikachu! e Let's Go, Eevee! são um projeto separado dos jogos da \"série principal\" de Pokémon para o Nintendo Switch que foi anunciado durante a apresentação da Nintendo na E3 de 2017; foi anunciado simultaneamente que este jogo específico seria lançado no final de 2019.\n[…]\nOs jogos foram lançados internacionalmente em 16 de novembro de 2018. Pacotes de jogos com o controle Poké Ball Plus foram anunciados, assim como pacotes de console Nintendo Switch, incluindo o jogo, Joy-Con de cor marrom e amarelo e um dock com arte de Eevee e Pikachu. Em 21 de setembro de 2018, a Amazon começou a oferecer pré-encomendas do pacote Let's Go, Pikachu! e Let's Go, Eevee! Switch.\n[…]\nEm 22 de novembro de 2018, The Pokémon Company anunciou que os jogos haviam vendido mais de 3 milhões de unidades em todo o mundo em sua primeira semana de venda, tornando-os os títulos Nintendo Switch de venda mais rápida. No final de dezembro de 2020, as vendas mundiais totais atingiram 13,00 milhões de cópias.\n[…]\nPokémon FireRed e LeafGreen\n[…]\nPokémon Yellow",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Pokémon Let's Go, Pikachu! e Let's Go, Eevee!",
      "descricao": "Par de jogos da série principal Pokémon para o Nintendo Switch, recriações de Pokémon Yellow ambientadas em Kanto."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Nos remakes de Pokémon Yellow para o Switch, com Pikachu ou Eevee de parceiro, os pokémon selvagens são capturados sem batalha, só com arremessos de Poké Bola. Essa mecânica veio de qual jogo?",
    "resposta": "Pokémon Go",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Let%27s_Go,_Pikachu!_and_Let%27s_Go,_Eevee!"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Let%27s_Go,_Pikachu!_and_Let%27s_Go,_Eevee!",
        "situacao": "ok",
        "texto": "Pokémon: Let's Go, Pikachu! and Pokémon: Let's Go, Eevee! are 2018 role-playing video games developed by Game Freak and published by the Pokémon Company and Nintendo for the Nintendo Switch. The games are remakes of the 1998 Game Boy title Pokémon Yellow. Let's Go, Pikachu! and Let's Go, Eevee! are part of the seventh generation of the Pokémon video game series and are the first main series instal\n[…]\nThe evolution mechanic from previous games returns in Let's Go, Pikachu! and Let's Go, Eevee! However, as with Pokémon Yellow, the player's starting Pikachu or Eevee cannot evolve; only other Pokémon that the player has caught, including ones of the same species as the partner Pokémon.\n[…]\nMasuda also stated that he considered the games to be remakes of Pokémon Yellow, explaining that Yellow \"resonated\" best with younger players because it incorporated elements from the Pokémon anime television series. According to Masuda, he decided to make Eevee the mascot of the other game due to its popularity and abundance of fan art.\n[…]\nPokémon: Let's Go, Pikachu! and Let's Go, Eevee! received \"generally favorable reviews\" from critics, according to review aggregator website Metacritic. Fellow review aggregator OpenCritic assessed that the games received strong approval, being recommended by 80% of critics. Critics applauded the gameplay, nostalgia, accessibility to new players, and charm of the games, while criticising its motion controls.\n[…]\nIndividually, Let's Go, Pikachu! debuted at third place in the UK's all-format sales charts, and Let's Go, Eevee! placed sixth on the same chart. UK sales were down 60% on the sales of Pokémon Sun and Moon, the preceding games in the franchise, due to the Switch having a smaller install base than the Nintendo 3DS and stock problems. The games sold over 338,270 physical retail units in 2018, making them the year's eleventh best-selling retail games in the UK."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Let%27s_Go%2C_Pikachu%21_e_Let%27s_Go%2C_Eevee%21",
        "situacao": "ok",
        "texto": "Pokémon Let's Go, Pikachu! e Let's Go, Eevee! (ポケットモンスター Let's GO！ ピカチュウ・Let's GO！ イーブイ, Poketto Monsutā Let's GO! Pikachū・Let's GO! Ībui, Monstros de Bolso Vamos Lá! Pikachu e Vamos Lá! Eevee) são um par de jogos eletrônicos de RPG de 2018, recriações de Pokémon Yellow do Game Boy Color de 1998. Eles eram desenvolvidos pela Game Freak e distribuídos pela Nintendo e pela The Pokémon Company para N\n[…]\nLet's Go, Pikachu! e Let's Go, Eevee! apresentam elementos comuns da série principal, como lutar contra personagens não-jogáveis Pokémon Treinadores e Líderes de Ginásio com criaturas Pokémon capturadas. No entanto, ao enfrentar Pokémon selvagens, em vez de lutar contra eles com o sistema de batalha tradicional como nos jogos anteriores, a captura de Pokémon usa um sistema que lembra o jogo spin-off móvel Pokémon GO.\n[…]\nDependendo da versão, os jogadores começam com um Pikachu ou um Eevee, que fica no ombro do personagem do jogador no mundo superior. Essa mecânica é semelhante à mecânica de \"Pokémon ambulante\" introduzida pela primeira vez no Pokémon Yellow, em que Pikachu seguia atrás do personagem do jogador durante o jogo. O Pokémon parceiro do jogador balança o rabo quando ele está perto de um item escondido e pode ser vestido para personalização posterior.\n[…]\nA mecânica de evolução dos jogos anteriores retorna em Let's Go, Pikachu! e Let's Go, Eevee!. No entanto, como acontece com o Pokémon Yellow, o Pikachu ou Eevee inicial do jogador não pode evoluir; apenas outros Pokémon que o jogador capturou, incluindo alguns da mesma espécie do Pokémon parceiro. Alguns recursos, como criação de Pokémon e HMs, estão ausentes dos jogos.\n[…]\nMiranda Sanchez do IGN elogiou a mecânica de jogo que se inspirou na jogabilidade de Pokémon GO. Ela mencionou que poderia \"priorizar a captura Pokémon que eu realmente queria\" e evitar os indesejados, graças à nova visão do mundo Pokémon nos jogos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Pokémon Yellow",
      "descricao": "Versão especial de Pokémon Red e Blue, para Game Boy, inspirada no anime, em que o inicial é um Pikachu que segue o jogador."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon Yellow, a versão de Kanto inspirada no anime, em que Pikachu é o pokémon inicial, chegou às lojas do Japão em que ano?",
    "resposta": "1998",
    "distratores": [
      "1996",
      "1997",
      "1999"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Yellow"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Yellow",
        "situacao": "ok",
        "texto": "Pokémon Red Version and Pokémon Blue Version are popular 1996 role-playing video games (RPGs) developed by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon video game series and were first released in Japan as Pocket Monsters Red and Pocket Monsters Green, followed by the special edition Pocket Monsters Blue later that year.\n[…]\nThe games were released internationally in 1998 and 1999 as Pokémon Red and Pokémon Blue, while an enhanced version, Pokémon Yellow Version: Special Pikachu Edition, was released in Japan in 1998 and in other regions in 1999 and 2000.\n[…]\nThe same versions were later released in Australia sometime later in 1998 and in Europe on October 5, 1999, being the second-to-last video game released for the original Game Boy in Europe with Pokemon Yellow Version: Special Pikachu Edition being the last.\n[…]\nPokémon Yellow's release coincided with the release of Pokémon: The First Movie and was first announced as Pocket Monsters Yellow in Japan. Future Nintendo president Satoru Iwata later said that people likely felt Yellow would be unnecessary due to the release of Pokémon Gold and Silver later that year. It was released in Japan on September 12, 1998, in Australia on September 3, 1999, in North America on October 19, 1999, and in Europe on June 16, 2000.\n[…]\nIn Japan, the game sold 1,549,000 units in 1998, making it the third best-selling video game of 1998 in Japan.\n[…]\nA Nintendo 64 game, Pocket Monsters Stadium, was released by Nintendo in 1998 exclusively in Japan. It revolves around a 3D turn-based battle system with 40 of the 151 Pokémon featured in Red, Blue, and Yellow. A sequel was released in 1999 both in Japan and the West that includes all 151 Pokémon.\n[…]\nOfficial website for Pokémon Blue (in Japanese)\n[…]\nOfficial website for Pokémon Yellow (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Red_%26_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version e Pokémon Blue Version, lançados no Brasil oficialmente como Pokémon Versão Vermelho e Pokémon Versão Azul, são dois jogos eletrônicos de RPG de 1996, desenvolvidos pela Game Freak e publicados pela Nintendo para o console portátil Game Boy. São os primeiros jogos eletrônicos da série Pokémon.\n[…]\nOs jogos foram lançados posteriormente como Pokémon Red e Blue em 1998 na América Anglo-Saxônica e Austrália, em 1999 na Grã-Bretanha e Portugal, sendo seguido pelo restante da Europa (onde recebeu localizações como Rosso e Blu em italiano; Rouge e Bleu em francês; Rote e Blaue em alemão, e Rojo e Azur em espanhol) e em 2000 em outros países de outros continentes. A versão Midori não foi lançada fora do Japão.\n[…]\nPokémon Yellow, uma versão inspirada no anime da franquia, foi lançada no Japão em 1998 e em outras regiões em 1999 e 2000. As recriações de Red e Green, Pokémon FireRed e LeafGreen, foram lançados para o Game Boy Advance em 2004. Red, Blue e Yellow — além de Green no Japão — foram relançados no serviço Virtual Console de Nintendo 3DS em 2016 como uma comemoração do 20º aniversário da franquia.\n[…]\nO então presidente da Nintendo Hiroshi Yamauchi recusou, e em vez disso, viu a possível recepção dos jogos na América como um desafio a enfrentar. Apesar desses contratempos, as versões reprogramadas Red e Blue com seus designs de criaturas originais foram eventualmente lançadas na América do Norte em 28 de setembro de 1998, mais de dois anos e meio depois de Red e Green estreou no Japão.\n[…]\nOs jogos foram recebidos extremamente bem pelo público estrangeiro e Pokémon tornou-se uma franquia lucrativa na América. As mesmas versões foram lançadas mais tarde na Austrália, algum tempo depois, em 1998, e na Europa em 5 de outubro de 1999.\n[…]\nPocket Monsters Blue - Nintendo Japão (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Pokémon Yellow",
      "descricao": "Versão especial de Pokémon Red e Blue, para Game Boy, inspirada no anime, em que o inicial é um Pikachu que segue o jogador."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Pokémon Yellow trouxe para os jogos uma dupla de vilões da Equipe Rocket que até então só existia no anime. Quem são eles?",
    "resposta": "Jessie e James",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Yellow",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Yellow_Version"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Yellow",
        "situacao": "ok",
        "texto": "Pokémon Red Version and Pokémon Blue Version are popular 1996 role-playing video games (RPGs) developed by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon video game series and were first released in Japan as Pocket Monsters Red and Pocket Monsters Green, followed by the special edition Pocket Monsters Blue later that year.\n[…]\nThe games were released internationally in 1998 and 1999 as Pokémon Red and Pokémon Blue, while an enhanced version, Pokémon Yellow Version: Special Pikachu Edition, was released in Japan in 1998 and in other regions in 1999 and 2000.\n[…]\nThe same versions were later released in Australia sometime later in 1998 and in Europe on October 5, 1999, being the second-to-last video game released for the original Game Boy in Europe with Pokemon Yellow Version: Special Pikachu Edition being the last.\n[…]\nTwo years after Red, Green and Blue Nintendo released Pokémon Yellow, an enhanced version of Red and Blue, in Japan in 1998, and in North America and Europe in 1999 and 2000. The game was designed to resemble the Pokémon anime series, with the player receiving a Pikachu as their starter Pokémon and their rival starting with an Eevee. Some non-player characters resemble those from the anime, including Team Rocket's Jessie and James.\n[…]\nThis feature was used again in Pokémon HeartGold and SoulSilver, the remakes of Pokémon Gold and Silver, and Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!, the remakes of Pokémon Yellow. Yellow includes a \"Pikachu's Beach\" minigame that is only accessible to players who either won a Nintendo contest or complete a challenge in another game, Pocket Monsters Stadium or Pokémon Stadium, and exchange data between the games using the Transfer Pak.\n[…]\nOfficial website for Pokémon Blue (in Japanese)\n[…]\nOfficial website for Pokémon Yellow (in Japanese)"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Yellow_Version",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Red_%26_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version e Pokémon Blue Version, lançados no Brasil oficialmente como Pokémon Versão Vermelho e Pokémon Versão Azul, são dois jogos eletrônicos de RPG de 1996, desenvolvidos pela Game Freak e publicados pela Nintendo para o console portátil Game Boy. São os primeiros jogos eletrônicos da série Pokémon.\n[…]\nLá, o jogador enfrentará a Elite dos Quatro e finalmente, o novo campeão: o rival do jogador. Além disso, ao longo do jogo, o jogador terá que lutar contra a Equipe Rocket, uma organização criminosa da região de Kanto que roubam Pokémon. Eles elaboram vários planos para roubar Pokémon raros, como os lendários da região de Kanto.\n[…]\nEssas versões dos jogos são capazes de transferir Pokémon para Pokémon Sun e Moon por meio do aplicativo Pokémon Bank.\n[…]\nPokémon FireRed Version (ポケットモンスター ファイアレッド, Poketto Monsutā Faiareddo; \"Pocket Monsters: FireRed\") e Pokémon LeafGreen Version (ポケットモンスター リーフグリーン, Poketto Monsutā Rīfugurīn; \"Pocket Monsters: LeafGreen\") são recriações aprimoradas de Pokémon Red e Green. Os novos títulos foram desenvolvidos pela Game Freak, publicados pela Nintendo para o Game Boy Advance e têm compatibilidade com o Game Boy Advance Wireless Adapter, que originalmente veio junto com os jogos.\n[…]\nOs jogos foram aclamados pela crítica, obtendo uma pontuação agregada de 81% no Metacritic. A maioria dos críticos elogiou o fato de os jogos apresentarem novos recursos, mantendo a jogabilidade tradicional da série. A recepção dos gráficos e do áudio foi mais misturada, com alguns críticos reclamando que eles eram muito simplistas e não apresentavam grandes melhorias em relação aos jogos anteriores, Pokémon Ruby e Sapphire.\n[…]\nPokémon Yellow\n[…]\nPokémon FireRed e LeafGreen\n[…]\nPocket Monsters Red e Green - Nintendo Japão (em japonês)\n[…]\nPocket Monsters Blue - Nintendo Japão (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Pokémon FireRed e LeafGreen",
      "descricao": "Recriações de Pokémon Red e Green para o Game Boy Advance, ambientadas na região de Kanto."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No lançamento, as caixas de FireRed e LeafGreen traziam junto um acessório inédito do Game Boy Advance, usado para trocar e batalhar sem cabo. Que acessório era esse?",
    "resposta": "Adaptador sem fio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_FireRed_and_LeafGreen",
      "https://en.wikipedia.org/wiki/Game_Boy_Advance_Wireless_Adapter"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_FireRed_and_LeafGreen",
        "situacao": "ok",
        "texto": "Pokémon FireRed Version and Pokémon LeafGreen Version are 2004 remakes of the 1996 role-playing video games Pokémon Red and Green. They were developed by Game Freak and published by The Pokémon Company and Nintendo for the Game Boy Advance. FireRed and LeafGreen were first released in Japan in January 2004  and was released in the same year as FireRed and LeafGreen versions in North America and Eu\n[…]\nThe games support the Game Boy Advance Game Link Cable, through which connected players may trade or battle. Players may also connect with Pokémon Ruby and Sapphire, as well as with Pokémon Colosseum, allowing them to obtain over 350 Pokémon. FireRed and LeafGreen also have the ability to connect to the GameCube and interact with Pokémon Box: Ruby and Sapphire. In Pokémon Box, the player may organize and view their collected Pokémon, and in Colosseum, Pokémon may be used in battle.\n[…]\nGameSpot's Greg Kasavin, who gave the games 8.4 out of 10, commented that \"though Pokémon could probably use a few new twists after all these years, FireRed and LeafGreen are great role-playing games on their own merits, filled with lots more content and more challenges than last year's Ruby and Sapphire, and offering up plenty of addictive gameplay that can be a lot of fun for players of all ages.\" Unlike Harris, Kasavin praised the games' graphics for their \"colorful good looks and the endearing character designs that the series is known for.\" GameSpot later named LeafGreen the best Game Boy Advance game of September 2004.\n[…]\nIn Japan, a \"Special Edition\" physical release is available which includes a reproduction of the original FireRed and LeafGreen Game Boy Advance boxes. These releases contain a download code for the games, as well as a set of three laser engraved glass Poké Balls, including Bulbasaur, Charmander, and Squirtle, with green, red, and blue light-up stands and a display case."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Game_Boy_Advance_Wireless_Adapter",
        "situacao": "ok",
        "texto": "The Game Boy Advance Wireless Adapter is a wireless adapter accessory for the Game Boy Advance, released by Nintendo in 2004. It provides similar functionality to the Game Boy Advance Game Link Cable, but is only compatible with 46 games, all released between 2004 and 2006. The accessory was initially packaged with the Pokémon FireRed and LeafGreen games in 2004, before later being made available \n[…]\nOne of the Wireless Adapter's most publicized uses is in Pokémon FireRed, LeafGreen, and Emerald. While all three still support the Game Boy Advance Game Link Cable (and must use a link cable to link with Ruby and Sapphire), up to 30 Wireless Adapter-connected players can convene in a virtual in-game lobby called the \"Union Room\" for battles and trades. The Wireless Adapter is also used in these games to download special data via the Mystery Gift option at various Pokémon-related events.\n[…]\nThe Wireless Adapter was initially available only as a pack-in with copies of Pokémon FireRed and LeafGreen, released worldwide in 2004. In Japan, Nintendo began selling a standalone version of the Wireless Adapter the following July, and once again packaged it with Pokemon Emerald the following September. In 2006, Nintendo began selling the standalone version in the West through their website, along with a version formatted for use with the Game Boy Micro.\n[…]\nReviewers praised the Wireless Adapter's implementation in several games, most prominently the Pokémon series. Ed Shih of Nintendo World Report appreciated the freedom offered by the adapter, as opposed to being tethered by the Game Link Cable's short length, but lamented its lack of backwards compatibility with older games. Craig Harris of IGN felt that Pokémon Emerald not packaging the adapter detracted from the overall value of the game in comparison to FireRed and LeafGreen."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_FireRed_e_LeafGreen",
        "situacao": "ok",
        "texto": "Pokémon FireRed Version e Pokémon LeafGreen Version (ポケットモンスター ファイアレッド・リーフグリーン, Poketto Monsutā Faiareddo・Rīfugurīn; Monstros de Bolso Fire Red・Leaf Green, que traduzido do inglês para o português significa Fogo Vermelho e Folha Verde, que em japonês seria 赤い炎 Akai honō e 緑色の葉 Midoriiro no ha) são dois jogos eletrônicos de RPG de 2004 recriado pelo Pokémon Red e Blue de Game Boy em 1996.\n[…]\nOs jogos suportam o Cabo Game Link Game Boy Advance, através do qual os jogadores conectados podem negociar ou batalhar. Os jogadores também podem se conectar com Pokémon Ruby e Sapphire, bem como com Pokémon Colosseum, permitindo-lhes obter mais de 350 Pokémon. FireRed e LeafGreen também têm a capacidade de se conectar ao GameCube e interagir com Pokémon Box: Ruby e Sapphire.\n[…]\nNa caixa Pokémon, o jogador pode organizar e visualizar seus Pokémon coletados, e no Colosseum, Pokémon podem ser usados ​​na batalha. FireRed e LeafGreen também são os primeiros jogos da série a serem compatíveis com o Game Boy Advance Wireless Adapter, que vem pré-embalado com os jogos. O adaptador pode ser conectado à porta de link do sistema Game Boy Advance e permite que jogadores em um raio de 9,1 a 15,2 m interajam sem fio uns com os outros.\n[…]\nA produção japonesa exclusiva para FireRed e LeafGreen foi limitada a meio milhão de cópias, apesar do sucesso de Pokémon Ruby e Sapphire. IGN especulou que a Nintendo esperava menos demanda pelos novos jogos, ou que seria limitada pela produção do adaptador sem fio integrado. As versões norte-americanas de FireRed e LeafGreen foram anunciadas indiretamente na DICE em 2004.\n[…]\nPokémon FireRed e LeafGreen foram lançados no Japão junto com Pokémon Colosseum e na primeira semana venderam mais de meio milhão de cópias. Segundo o site IGN, FireRed e LeafGreen têm nota 9 de 10.\n[…]\nOs dois jogos formam junto com Ruby, Sapphire e Emerald os RPGs originais de terceira geração.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Ilhas Sevii",
      "descricao": "Arquipélago perto de Kanto, explorado depois da Liga em Pokémon FireRed e LeafGreen."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em FireRed e LeafGreen, o jogador explora as Ilhas Sevii, um arquipélago inédito perto de Kanto. O nome delas faz referência a qual número?",
    "resposta": "Sete",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sevii_Islands"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sevii_Islands",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Pokémon Crystal",
      "descricao": "Versão especial de Pokémon Gold e Silver, lançada em 2000 para Game Boy Color, com o lendário Suicune em destaque."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes jogos foi o primeiro da série principal de Pokémon em que o jogador podia escolher jogar como uma menina?",
    "resposta": "Pokémon Crystal",
    "distratores": [
      "Pokémon Yellow",
      "Pokémon Gold",
      "Pokémon Ruby"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Crystal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Crystal",
        "situacao": "ok",
        "texto": "Pokémon Crystal Version is a role-playing video game developed by Game Freak and published by Nintendo for the Game Boy Color, released in Japan in December 2000 and internationally throughout 2001. Serving as an enhanced edition of the 1999 titles Pokémon Gold and Silver, it is the final entry in the second generation of the Pokémon game series.\n[…]\nCrystal has received retrospective praise for the inclusive impact of a player character with a selectable gender.\n[…]\nWriting for Polygon, Juno Stump stated Pokémon Crystal and Kris \"impacted [girls] greatly, allowing us to finally see ourselves in a video game and on our very own Pokémon adventure.\" Clare McBride of Syfy Wire believed the game was impactful for women, stating \"Instead of having to name a clearly male character our names and just roll with it, we got explicitly invited into the Pokémon space we'd already been inhabiting.\" Although the intent of the feature was to \"appeal to cisgender girls\", Anya Archer of Wired commented on the appeal to transgender audiences of being able to play as a character whose gender does not reflect the one assigned at birth.\n[…]\nOn 2 March 2014, Crystal was played by Twitch Plays Pokémon, an interactive experience allowing users of the video game live streaming service Twitch to influence the play of the game through input commands in the chat box. The game featured the same protagonist and Pokémon to develop a continuity with the previous stream.\n[…]\nThe stream experienced criticism due to the involvement of players attempting to imitate high-stakes moments in the first stream, such as the release of Pokémon using the PC, as well as the temporary introduction of features that were abandoned, including changes to the \"Democracy\" and \"Anarchy\" modes. The stream of Crystal was completed in 13 days and 2 hours."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Crystal",
        "situacao": "ok",
        "texto": "Pokémon Crystal Version (ポケットモンスター クリスタル, Poketto Monsutā Kurisutaru; tradução: Monstros de Bolso Crystal, Cristal quando traduzida da grafia inglesa para a portuguesa, Cristal em japonês é 結晶 Kesshō) é um jogo eletrônico de RPG de 2000, desenvolvido pela Game Freak e publicado pela Nintendo para o Game Boy Color. É a versão aprimorada de Pokémon Gold e Silver e é o último jogo da segunda geração \n[…]\nPokémon Crystal foi lançado mundialmente no Virtual Console do Nintendo 3DS em 26 de janeiro de 2018.\n[…]\nA jogabilidade de Pokémon Crystal é basicamente igual à de Gold e Silver, embora tenha vários novos recursos. É o primeiro jogo Pokémon que permite aos jogadores escolher o sexo de seu personagem, enquanto anteriormente o personagem era sempre masculino. Pela primeira vez, os Pokémon têm sprites animados breves quando entram na batalha; por exemplo, quando um Cyndaquil entra em batalha, as chamas em suas costas piscam.\n[…]\nPokémon Crystal foi bem recebido pelos críticos, embora muitos comentassem que não havia novas adições e recursos suficientes para diferenciá-lo significativamente do Pokémon Gold e Silver. Craig Harris da IGN afirmou: \"A edição (espero) final de Game Boy Color é definitivamente a versão de obter, se você ainda não for um dos dezenove bilhões de proprietários dos jogos anteriores, com pequenas atualizações de Crystal ao design e gráficos.\n[…]\nPokémon Crystal foi o segundo jogo Game Boy Color mais vendido no Japão, com 1 871 307 cópias vendidas. Ele vendeu quase 6,4 milhões de unidades em todo o mundo.\n[…]\nUm lançamento pirata do Pokémon Crystal chamado Pokémon Vietnamese Crystal, frequentemente abreviado para Vietnamese Crystal, é famoso por seu texto em inglês mal traduzido e por esquisitices de jogo, como palavrões e chamar Pokémon de \"elfos\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Pokémon Gold e Silver",
      "descricao": "Par de jogos Pokémon da segunda geração, lançado para Game Boy Color e ambientado na região de Johto."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, depois de vencer a Liga, o jogador volta a Kanto para enfrentar outros ginásios. Somando as duas regiões, quantas insígnias ele pode juntar?",
    "resposta": "16",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver",
      "https://bulbapedia.bulbagarden.net/wiki/Badge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version and Pokémon Silver Version are 1999 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy Color. They are the first installments in the second generation of the Pokémon video game series. They were released in Japan on November 21st, 1999, Australia and North America on October 15th, 2000, and Europe on April 6th, 2001.\n[…]\nPokémon Gold and Silver are set in the region of Johto, situated to the west of the Kanto Region from the previous Red and Blue games, and three years after the conclusion of the previous games. The design of Johto was inspired by Japan's Kansai and Tōkai regions, with many of the region's temples and more traditional Japanese aesthetics finding their way into Johto.\n[…]\nIn September 1999, Nintendo announced that Gold and Silver would be released in North America in September 2000. In May 2000, Nintendo announced the official North American release date of Gold and Silver would instead be October 16 of that year. The release date was later changed to October 15.\n[…]\nSo far in 2000 the best-selling game in America for any home console is Pokémon Stadium for Nintendo 64, and the best-selling game for any handheld video game system is Pokémon Yellow for Game Boy Color, but Pokémon Gold and Silver will eclipse even those impressive sales totals. We project sales of 10 million units total of these two games in less than six months time\". The game sold 2.9 million copies in the U.S. within a few weeks.\n[…]\nPokémon HeartGold Version and Pokémon SoulSilver Version are enhanced remakes of Pokémon Gold and Silver, developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS. First released in Japan on September 12, 2009, the games were later released in North America, Australia, and Europe during March 2010."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Badge",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Gold_%26_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version e Pokémon Silver Version (ポケットモンスター 金・銀, Poketto Monsutā Kin・Gin; tradução: Monstros de Bolso Ouro・Prata) são jogos eletrônicos de RPG de 1999, desenvolvidos pela Game Freak e publicadas pela Nintendo para o Game Boy Color. Esses dois jogos iniciaram a segunda geração da série Pokémon. Eles foram lançados no Japão em 1999, na Austrália e América do Norte em 2000 e Europa em 20\n[…]\nPokémon Gold e Silver são ambientados na região de Johto, situada a oeste da região de Kanto dos jogos anteriores Red e Blue, e três anos após a conclusão dos jogos anteriores. O design do Johto foi inspirado nas regiões japonesas de Kansai e Tōkai, com muitos dos templos da região e a estética japonesa mais tradicional chegando até Johto.[carece de fontes]?\n[…]\nEventualmente, o jogador derrota a Equipe Rocket de uma vez por todas e derrota a Elite dos Quatro e o Campeão da Liga Pokémon no Indigo Plateau. O jogador pode então viajar para a região de Kanto dos jogos anteriores e desafiar os Líderes de Ginásio de lá, descobrindo o quanto mudou nos três anos após os eventos de Red e Blue.\n[…]\nDepois de derrotar os Líderes de Ginásio da região de Kanto, o jogador será autorizado pelo renomado Professor Oak a entrar no traiçoeiro Monte Silver, lar de Pokémon muito poderosos. No pico do Monte Silver encontra-se Red, o protagonista da geração anterior, a quem o jogador pode desafiar para a batalha mais difícil do jogo.\n[…]\nEm maio de 2000, a Nintendo anunciou que a data oficial de lançamento de Gold e Silver na América do Norte seria 16 de outubro daquele ano. A Nintendo começou a aceitar pré-encomendas para os jogos em agosto, e anunciou que os consumidores que encomendassem um dos jogos receberiam um CD-ROM grátis com um navegador com tema Pokémon desenvolvido pela MediaBrowser que apresentava flutuante espécies de Pokémon e links para sites de Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Tipo Aço",
      "descricao": "Tipo elemental de pokémon e golpes, resistente a muitos outros tipos, introduzido na segunda geração."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O tipo Aço estreou na série Pokémon junto com o tipo Sombrio. Em qual par de jogos isso aconteceu?",
    "resposta": "Gold e Silver",
    "distratores": [
      "Red e Blue",
      "Ruby e Sapphire",
      "Diamond e Pearl"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Steel_(type)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Steel_(type)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version and Pokémon Silver Version are 1999 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy Color. They are the first installments in the second generation of the Pokémon video game series. They were released in Japan on November 21st, 1999, Australia and North America on October 15th, 2000, and Europe on April 6th, 2001.\n[…]\nSteel-type Pokémon are immune to Poison-type moves, and they have very high defense and resistance to other types, while Dark-type Pokémon are immune to Psychic-type moves and are strong against Psychic-type Pokémon (which provides an offensive strategy, formerly absent against Psychic-types), as well as having few weaknesses. In Gold and Silver, new moves were added, but Pokémon knowing these moves are not allowed to be traded to the first generation games.\n[…]\nNintendo Power listed Gold and Silver combined as the sixth best Game Boy / Game Boy Color games, praising them for the new Pokémon, features, and full-color graphics.\n[…]\nSo far in 2000 the best-selling game in America for any home console is Pokémon Stadium for Nintendo 64, and the best-selling game for any handheld video game system is Pokémon Yellow for Game Boy Color, but Pokémon Gold and Silver will eclipse even those impressive sales totals. We project sales of 10 million units total of these two games in less than six months time\". The game sold 2.9 million copies in the U.S. within a few weeks.\n[…]\nPokémon HeartGold Version and Pokémon SoulSilver Version are enhanced remakes of Pokémon Gold and Silver, developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS. First released in Japan on September 12, 2009, the games were later released in North America, Australia, and Europe during March 2010."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Gold_%26_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version e Pokémon Silver Version (ポケットモンスター 金・銀, Poketto Monsutā Kin・Gin; tradução: Monstros de Bolso Ouro・Prata) são jogos eletrônicos de RPG de 1999, desenvolvidos pela Game Freak e publicadas pela Nintendo para o Game Boy Color. Esses dois jogos iniciaram a segunda geração da série Pokémon. Eles foram lançados no Japão em 1999, na Austrália e América do Norte em 2000 e Europa em 20\n[…]\nPokémon do tipo Metal são imunes a golpes do tipo Veneno e são comumente mais resistentes quando comparado a outros tipos, enquanto os Pokémon do tipo Sombrio possuem vantagem contra o tipo Psíquico, que na geração de jogos anteriores não tinha nenhuma fraqueza viável. Em Gold e Silver, novos movimentos foram adicionados, mas Pokémon sabendo esses movimentos não podem ser trocados com os jogos da primeira geração.\n[…]\nAlém disso, foram equipados com uma televisão ligada a consolas de jogos que permitiam aos espectadores jogar Pokémon Puzzle League, Hey You, Pikachu! e Pokémon Gold e Silver. A série de televisão Pokémon GS, baseada nos jogos, foi anunciada para fazer parte da programação de outono do Kids' WB. O show apresenta o mesmo protagonista Ash Ketchum em uma nova região com diferentes espécies de Pokémon dos jogos.\n[…]\nNintendo Power listou as versões Gold e Silver combinadas como o sexto melhor jogo de Game Boy / Game Boy Color, elogiando-o por seu novo Pokémon, recursos e gráficos coloridos.\n[…]\nNo geral, Gold e Silver foram considerados adições de jogos sólidas que agradariam a um grande público. \"Depois de jogar o jogo dezenas de horas, eu realmente não consigo pensar em nenhum ponto ruim a dizer sobre Pokémon Gold e Silver. A Nintendo e a Game Freak ajustaram o original e construíram uma sequência que é longa, desafiadora e extremamente divertida de jogar. Uma razão pela qual Pokémon é tão popular, e Pokémon Gold e Silver vai ajudar a série a avançar no século 21\", disse Harris.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Concurso de Captura de Insetos",
      "descricao": "Competição de Pokémon Gold, Silver e Crystal, realizada no Parque Nacional de Johto, em que os participantes capturam pokémon inseto."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, o Concurso de Captura de Insetos do Parque Nacional de Johto só acontece em três dias da semana. Quais são eles?",
    "resposta": "Terça, quinta e sábado",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Bug-Catching_Contest"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Bug-Catching_Contest",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Celadon",
      "descricao": "Grande cidade da região de Kanto, nos jogos Pokémon Red e Blue, com loja de departamentos e o ginásio de tipo Planta de Erika."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que os nomes das cidades de Kanto Celadon, Cerulean, Vermilion e Viridian têm em comum?",
    "resposta": "São nomes de cores",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kanto",
      "https://bulbapedia.bulbagarden.net/wiki/Celadon_City"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kanto",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Celadon_City",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Azalea",
      "descricao": "Cidade da região de Johto, nos jogos Pokémon Gold e Silver, onde fica o ginásio de tipo Inseto e o Poço Slowpoke."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Cherrygrove, Azalea, Goldenrod e Mahogany, cidades de Johto, foram batizadas seguindo o mesmo padrão. De onde vêm esses nomes?",
    "resposta": "De nomes de plantas",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Johto",
      "https://bulbapedia.bulbagarden.net/wiki/Azalea_Town"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Johto",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Azalea_Town",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Goldenrod",
      "descricao": "Grande cidade da região de Johto, nos jogos Pokémon Gold e Silver, com loja de departamentos, torre de rádio e estação do trem magnético."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Goldenrod, a grande cidade de Johto com loja de departamentos, torre de rádio e estação de trem, foi inspirada em qual cidade japonesa?",
    "resposta": "Osaka",
    "distratores": [
      "Kyoto",
      "Kobe",
      "Nagoya"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Goldenrod_City"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Goldenrod_City",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Torre de Rádio de Goldenrod",
      "descricao": "Prédio da emissora de rádio de Goldenrod, em Johto, invadido pela Equipe Rocket em Pokémon Gold e Silver."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, a Equipe Rocket toma a Torre de Rádio de Goldenrod para fazer uma transmissão. O que o grupo pretende com ela?",
    "resposta": "Chamar Giovanni de volta",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Goldenrod_Radio_Tower"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Goldenrod_Radio_Tower",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Ilha Cinnabar",
      "descricao": "Ilha vulcânica ao sul de Kanto, nos jogos Pokémon, onde fica o ginásio de tipo Fogo de Blaine e o laboratório que revive fósseis."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, da cidade da Ilha Cinnabar só resta o Centro Pokémon, e Blaine teve de mudar o ginásio de lugar. O que destruiu a cidade?",
    "resposta": "A erupção do vulcão",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Cinnabar_Island"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cinnabar_Island",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Lance",
      "descricao": "Treinador especialista em pokémon dragão, último membro da Elite dos Quatro em Red e Blue e campeão da Liga em Gold e Silver."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em Gold e Silver, o campeão Lance e seu Dragonite ajudam o jogador a invadir um esconderijo secreto da Equipe Rocket. Em que cidade de Johto fica esse esconderijo?",
    "resposta": "Mahogany",
    "distratores": [
      "Olivine",
      "Blackthorn",
      "Ecruteak"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lance",
      "https://bulbapedia.bulbagarden.net/wiki/Team_Rocket_HQ"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lance",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Rocket_HQ",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Karen",
      "descricao": "Treinadora da Elite dos Quatro de Johto nos jogos Pokémon Gold, Silver e Crystal, última a ser enfrentada antes do campeão."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Karen, a última integrante da Elite dos Quatro de Johto em Gold e Silver, é especialista em um tipo de pokémon que estreou naqueles jogos. Qual?",
    "resposta": "Sombrio",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Karen"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Karen",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Poké Flauta",
      "descricao": "Item dos jogos Pokémon que toca uma melodia capaz de acordar pokémon adormecidos, como os Snorlax que bloqueiam o caminho em Kanto."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, o jogador ganha do Senhor Fuji a Poké Flauta, que acorda os Snorlax que bloqueiam o caminho. Em que cidade isso acontece?",
    "resposta": "Lavender",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Flute"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Flute",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Poké Flauta",
      "descricao": "Item dos jogos Pokémon que toca uma melodia capaz de acordar pokémon adormecidos, como os Snorlax que bloqueiam o caminho em Kanto."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, o Snorlax adormecido era acordado com a Poké Flauta. Em Gold e Silver, de onde passou a sair essa mesma melodia?",
    "resposta": "Do rádio do Pokégear",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Flute"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Flute",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Âmbar Antigo",
      "descricao": "Pedaço de âmbar dos jogos Pokémon que, levado a um laboratório, revive o pokémon fóssil Aerodactyl."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, o Âmbar Antigo, que depois revive um Aerodactyl, é dado ao jogador num museu de ciências. Em que cidade fica esse museu?",
    "resposta": "Pewter",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Old_Amber"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Old_Amber",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Encomenda do Professor Carvalho",
      "descricao": "Pacote que o jogador busca e entrega ao Professor Carvalho no início de Pokémon Red e Blue, antes de receber a Pokédex."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No começo de Red e Blue, o Professor Carvalho só entrega a Pokédex depois que o jogador traz uma encomenda feita a uma loja. Em que cidade ela é retirada?",
    "resposta": "Viridian",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Oak%27s_Parcel"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Oak%27s_Parcel",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Vendedor de Magikarp",
      "descricao": "Personagem dos jogos Pokémon Red, Blue e Yellow que, num Centro Pokémon perto do Mt. Moon, vende um Magikarp ao jogador como se fosse um grande negócio."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em Red e Blue, num Centro Pokémon perto do Mt. Moon, um vendedor oferece um Magikarp como se fosse um negócio imperdível. Por quanto?",
    "resposta": "500 pokédólares",
    "distratores": [
      "100 pokédólares",
      "1000 pokédólares",
      "5000 pokédólares"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Magikarp_salesman"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Magikarp_salesman",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "S.S. Anne",
      "descricao": "Navio de cruzeiro luxuoso dos jogos Pokémon Red e Blue, cheio de treinadores, onde o capitão dá ao jogador o golpe Corte."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, o navio de cruzeiro S.S. Anne, onde o capitão enjoado dá ao jogador o golpe Corte, fica atracado no porto de qual cidade?",
    "resposta": "Vermilion",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/S.S._Anne"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/S.S._Anne",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Cápsula do Tempo",
      "descricao": "Máquina dos Centros Pokémon em Pokémon Gold, Silver e Crystal que permite trocar pokémon com os jogos da primeira geração."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, a Cápsula do Tempo, no andar de cima dos Centros Pokémon, permitia trocar pokémon com quais jogos?",
    "resposta": "Red, Blue e Yellow",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Time_Capsule"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Time_Capsule",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Ovo Misterioso",
      "descricao": "Ovo que Mr. Pokémon entrega ao jogador no início de Pokémon Gold, Silver e Crystal para ser levado ao Professor Elm."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No começo de Gold e Silver, o Professor Elm manda o jogador buscar um ovo misterioso com Mr. Pokémon. Que pokémon nasce desse ovo?",
    "resposta": "Togepi",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Mystery_Egg"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mystery_Egg",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Voltorb Flip",
      "descricao": "Minijogo de cartas do cassino de Goldenrod e Celadon em Pokémon HeartGold e SoulSilver, que substituiu as máquinas caça-níqueis fora do Japão."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nas versões de HeartGold e SoulSilver vendidas fora do Japão, as máquinas caça-níqueis do cassino deram lugar ao minijogo Voltorb Flip. Por quê?",
    "resposta": "Normas contra jogos de azar",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Voltorb_Flip",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_HeartGold_and_SoulSilver"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Voltorb_Flip",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_HeartGold_and_SoulSilver",
        "situacao": "ok",
        "texto": "Pokémon HeartGold Version and Pokémon SoulSilver Version are 2009 remakes of the 1999 Game Boy Color role-playing video games Pokémon Gold and Silver, also including features from Pokémon Crystal. The games are part of the fourth generation of the Pokémon video game series, developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS.\n[…]\nVideoGamer.com reviewer Jamin Smith said, \"With HeartGold and SoulSilver the Pokémon series has reached a point where it can't get any better.\" Eurogamer's Keza MacDonald gave the games a 9/10, stating \"They combine everything that was best about the older Pokémon games\", citing the Pokémon designs and improved graphics and battle system.\n[…]\nGamePro's McKinley Noble stated that \"it's clear that this is a perfect experience for both old-school trainers and the newest generation of Pokémon fans.\" GameZone's Cliff Bakehorn III said, \"There is not a doubt in my mind: Pokémon HeartGold and SoulSilver are the pinnacle of the entire series.\" Nathan Meunier of GameSpot gave the games one of the lower scores, criticizing them for a lack of innovation. GamesRadar attributed the game's success to being a remake of classic games.\n[…]\nHeartGold and SoulSilver won the Golden Joystick Award for Portable Game of the Year in 2010, the first Golden Joystick Award win for the series.\n[…]\nIn the United States, the games managed collective sales of 1.73 million in their first month, with the SoulSilver version selling 1.01 million and HeartGold selling 0.76 million units. The combined sales of the two games made them the highest-selling games of March 2010. By May 6, 2010, the games had sold 8.40 million units worldwide, and the games reached 10 million sales worldwide by the end of July 2010. As of September 2017, the games' combined sales have reached 12.72 million."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_HeartGold_e_SoulSilver",
        "situacao": "ok",
        "texto": "Pokémon HeartGold Version e Pokémon SoulSilver Version (ポケットモンスター ハートゴールド・ソウルシルバー, Poketto Monsutā Hāto Gōrudo・Souru Shirubā; Monstros de Bolso Hearth Gold・Soul Silver, que traduzidos do inglês para o português significam respectivamente  Coração de Ouro e Alma de Prata, em japonês: 金の心, Kin no Kokoro e 銀の魂, Gin no Tamashī) são jogos eletrônicos da série Pokémon, desenvolvidos pela Game Freak e pu\n[…]\nUm novo minijogo chamado Pokéathlon, conhecido no Japão como Pokéthlon, usa a tela sensível ao toque do Nintendo DS e permite que o Pokémon compita em eventos como obstáculos. As versões japonesas mantêm as máquinas caça-níqueis encontradas em jogos anteriores, enquanto os lançamentos internacionais dos títulos substituem as máquinas caça-níqueis por um novo jogo chamado \"Voltorb Flip\", descrito como um cruzamento entre Campo minado e Picross.\n[…]\nNos Estados Unidos, os jogos geriram vendas coletivas de 1,73 milhões em seu primeiro mês, com a versão SoulSilver vendendo 1,01 milhões e HeartGold vendendo 0,76 milhões de unidades. As vendas combinadas dos dois jogos fizeram deles os jogos mais vendidos de março de 2010. Em 6 de maio de 2010, os jogos haviam vendido 8,40 milhões de unidades em todo o mundo, e os jogos atingiram 10 milhões de vendas em todo o mundo até o final de julho de 2010.\n[…]\nEm setembro de 2017, as vendas combinadas dos jogos atingiram 12,72 milhões.\n[…]\nPokémon HeartGold e SoulSilver trazem para quem comprá-los um aparelho especial chamado \"Pokéwalker\". Esse aparelho permite, através de raios infravermelhos, a transferência de Pokémon desses dois jogos para ele. O treinador poderá apanhar outros pokémon e ainda treinar o Pokémon colocado no \"Pokéwalker\". É possível capturar Pokémon através de eventos que o rodeiam como a Floresta Amarela, referida acima.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Mobile Adapter GB",
      "descricao": "Acessório lançado só no Japão que conectava o Game Boy Color a redes de telefonia móvel, usado por Pokémon Crystal."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Só no Japão, Pokémon Crystal podia se conectar à internet para batalhas e trocas a distância, com um adaptador ligado a qual aparelho?",
    "resposta": "Telefone celular",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mobile_Adapter_GB",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Crystal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mobile_Adapter_GB",
        "situacao": "ok",
        "texto": "The Mobile Adapter GB was a short-lived peripheral developed by Nintendo that allowed the handheld Game Boy Color and Game Boy Advance consoles to connect to a mobile phone and utilize its cellular network. The accessory used a proprietary networking service called Mobile System GB operated by KDDI to exchange data. Following delays, the device and service launched in Japan on 27 January 2001.\n[…]\nIn September 1999, Nintendo announced the establishment of Mobile21, a joint venture with Konami intended to create new software for Nintendo's consoles that would utilize network connectivity, with Nintendo planning to release an adapter that would connect the Game Boy Color and cell phones the following year. The Mobile Adapter GB and the Mobile System GB service were revealed at the Nintendo Space World event in August 2000.\n[…]\nAt the time, Nintendo planned to release them alongside Pokémon Crystal, when it launched in December. The online interactions of the latest installment in the Pokémon video game series were highly promoted and was expected to be the \"killer app\" for the Mobile System GB service. However, the launch was pushed back to 27 January 2001. The device had a MSRP of ¥5,800. The device was promoted with advertisements featuring professional baseball player Kazuhiro Sasaki.\n[…]\nThe Mobile Adapter GB's features were provided through the Mobile System GB service. Connectivity was supplied by KDDI under its DION brand, which charged a one-time setup fee of ¥400 and a ¥10 per-minute connection fee. Additionally, Nintendo charged between ¥10 to 100 to access certain in-game features. Because the connected mobile phone would \"call\" into Nintendo’s servers, which were operated by Kyocera, users were also subject to their mobile network provider's standard calling charges.\n[…]\nList of Game Boy accessories\n[…]\nWireless game adapter"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Crystal",
        "situacao": "ok",
        "texto": "Pokémon Crystal Version is a role-playing video game developed by Game Freak and published by Nintendo for the Game Boy Color, released in Japan in December 2000 and internationally throughout 2001. Serving as an enhanced edition of the 1999 titles Pokémon Gold and Silver, it is the final entry in the second generation of the Pokémon game series.\n[…]\nThe Japanese release of Pokémon Crystal supported the Mobile Adapter GB, a peripheral device enabling wireless connectivity between a Game Boy Color or Game Boy Advance and a mobile phone for online interactions using the Mobile System GB service. Pokémon Crystal players were provided with various interactive features, including the ability to battle and trade online, access news updates, participate in quizzes, and engage in minigames.\n[…]\nNintendo had planned to release the Mobile Adapter GB and launch the Mobile System GB service alongside Pokémon Crystal in December, but delays establishing the service pushed the launch back to 27 January 2001. The online interactions of Pokémon Crystal were highly promoted and the game was expected to be the \"killer app\" for the service.\n[…]\nNintendo first previewed Crystal and the Mobile Adapter GB at Space World in August 2000. Crystal was released in Japan on 14 December 2000. Nintendo previewed the release of Crystal for North America at E3 in May 2001, and released the game in North America on 30 July 2001, Australia on 30 September 2001, and Europe on 2 November 2001. Promotional releases of Crystal in North America included packaging of the game with lime green models of the Game Boy Color, sold as the Pokémon Crystal Bundle.\n[…]\nArjun Joshi of Nintendo Life remarked that Crystal \"(added) even more life to an already vibrant game\", praising the game's animations and \"captivating and memorable\" additions to the game's plot."
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
