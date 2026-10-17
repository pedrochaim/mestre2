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
      "nome": "Caterpie de Ash",
      "descricao": "Caterpie capturado por Ash Ketchum logo no início da primeira temporada do anime Pokémon, que depois evolui até Butterfree."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "No anime, qual destes pokémon foi o primeiro que Ash capturou com uma Poké Bola?",
    "resposta": "Caterpie",
    "distratores": [
      "Pidgeotto",
      "Bulbasaur",
      "Charmander"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Caterpie",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Indigo_League"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Caterpie",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Indigo_League",
        "situacao": "ok",
        "texto": "Pokémon: Indigo League is the first season of the Pokémon anime series and of Pokémon the Series: The Beginning, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan on TV Tokyo from April 1, 1997, to January 21, 1999.\n[…]\nThe Japanese opening song is \"Aim to Be a Pokémon Master\" (めざせポケモンマスター, Mezase Pokémon Masutā) by Rika Matsumoto for all 82 episodes.\n[…]\nThe anime-size version serves as the ending theme for 52 episodes, while its shortened version serves as the ending theme for 26 episodes.\n[…]\nThe ending songs at the end of the episode are \"Kanto Pokérap\" by James \"D Train\" Willams and Babi Floyd for 52 episodes, 32 Pokémon on Monday thru Wednesday, 30 Pokémon on Thursday, and 24 Pokémon on Friday, \"My Best Friends\" by Michael Whalen during episode 18 and for 6 episodes, \"Double Trouble\" by Rachael Lillis, Eric Stuart and Maddie Blaustien for 5 episodes, \"What Kind of Pokémon Are You?\" by Joshua Tyler for 4 episodes, \"Together Forever\" by J.P. Hartmann for 6 episodes, \"2.B.A.\n[…]\nViz Media and Warner Home Video released Pokémon: Indigo League – The Complete Collection on DVD in the United States on October 28, 2014. This release contains all three volumes of the series, consisting of 78 episodes in all, although this set lacks the episode \"Holiday Hi-Jynx\", which was banned by The Pokémon Company International in 2014 due to the controversial presence of Jynx.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)\n[…]\nPokémon: Indigo League at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Indigo_League",
        "situacao": "ok",
        "texto": "Pokémon: Liga Índigo (Pokémon: Indigo League), é a primeira temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e da série Pokémon, a Série: O Início (Pokémon the Series: The Beginning), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original Series. Originalmente, foi exibida no Japão pela TV Tokyo de 1º de abril de 19\n[…]\nEsta temporada acompanha as primeiras aventuras de Ash Ketchum, um aspirante a Treinador Pokémon de 10 anos da cidade de Pallet, que recebe um Pikachu do Professor Carvalho para começar sua jornada. Ash almeja competir na Liga Kanto, coletando Insígnias de Ginásio conquistadas dos Líderes de Ginásio da região. No início da temporada, ele se junta a Misty, a Líder de Ginásio de Cerulean, e Brock, o Líder de Ginásio de Pewter.\n[…]\nEm sua primeira semana sob a égide do Kids' WB, Pokémon conseguiu atingir uma classificação de 3,9 (uma porcentagem de quanto um determinado grupo demográfico de pessoas está assistindo), alcançando 3,1 milhões de telespectadores em setembro, e resultando na declaração da Nielsen de que \"metade dos meninos (de 6 a 11 anos) assistindo TV (às 10h) estão assistindo \"Pokémon\" em novembro daquele ano.\n[…]\nNo Brasil, a temporada também está disponível na Netflix, Amazon Prime Video, no canal Pokémon TV do YouTube e Pluto TV. Em Portugal, a temporada também está disponível na Netflix e no canal Pokémon TV do YouTube.\n[…]\nEm 5 de novembro de 2013, a Viz Media e a Pokémon: Indigo League - The Complete Collection relançaram os primeiros 26 episódios em DVD com nova embalagem. A Viz Media e a Warner Home Video lançaram \"Pokémon: Liga Índigo - A Coleção Completa\" em DVD nos Estados Unidos em 28 de outubro de 2014.\n[…]\nSite oficial de Pokémon nos EUA (em inglês)\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Fase de Johto do anime Pokémon",
      "descricao": "Parte do anime Pokémon em que Ash viaja pela região de Johto com Misty e Brock, iniciada com a temporada Johto Journeys."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A fase de Johto do anime, em que Ash ganha Chikorita, Cyndaquil e Totodile, estreou na televisão japonesa em que ano?",
    "resposta": "1999",
    "distratores": [
      "1998",
      "2000",
      "2001"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Johto_Journeys"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Johto_Journeys",
        "situacao": "ok",
        "texto": "Pokémon: The Johto Journeys is the third season of the Pokémon anime series and the first season of Pokémon the Series: Gold and Silver, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan from October 14, 1999, to July 27, 2000, on TV Tokyo, and in the United States from October 14, 2000, to August 11, 2001, on The WB/Kids' WB.\n[…]\nThe season follows Ash Ketchum as he travels across the Johto region to challenge its Pokémon League while joined by Misty and Brock.\n[…]\nThe ending songs are \"Meowth's Party\" (ニャースのパーティ, Nyasu No Pāti) by Nyasu / Meowth (Inuko Inuyama), for 25 episodes, Rikako Aikawa and Chorus performed \"Exciting Pokémon Relay\" (ポケモンはらはらリレー, Pokémon Hara Hara Rirē) for 10 episodes, and \"Exciting² Pokémon Relay (Hard Version)\" (ポケモンはらはら²リレー むずかし版, Pokémon Hara Hara² Rirē Muzukashi Ban) for 5 episodes, \"Takeshi's Paradise (タケシのパラダイス, Takeshi no Paradaisu) by Takeshi \\ Brock (Yūji Ueda) for one episode, and the English opening song is \"Pokémon Johto\" by the musical group called Johto.\n[…]\nThe ending songs at the end of each episode are \"You & Me & Pokémon\" for 9 episodes, and \"Pikachu (I Choose You)\" for 8 episodes by Élan Rivera and the musical group called Johto, \"Song of Jigglypuff\" by Rachael Lillis as Jigglypuff and the musical group called Johto for 8 episodes, \"All We Wanna Do\" by Élan Rivera and the musical group called Johto for 8 episodes, and \"Two Perfect Girls\" by Eric Stuart as Brock for 8 episodes from Pokémon Karaokémon.\n[…]\nViz Media and Warner Home Video released Pokémon: The Johto Journeys – The Complete Collection on DVD in the United States on November 10, 2015.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon Anime television series at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_Johto_Journeys",
        "situacao": "ok",
        "texto": "Pokémon: A Jornada Johto (Brasil) e Pokémon: Liga Johto (Portugal) (Pokémon: The Johto Journeys), é a terceira temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e da primeira temporada da série Pokémon, a Série: Ouro e Prata (Pokémon the Series: Gold and Silver), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original\n[…]\nOriginalmente, foi exibida no Japão de 14 de outubro de 1999 a 27 de julho de 2000, na TV Tokyo; nos Estados Unidos de 14 de outubro de 2000 a 11 de agosto de 2001, na The WB/Kids' WB; no Brasil de 16 de janeiro a 10 de julho de 2001, no Cartoon Network, e em Portugal de 12 de maio de 2001 a 29 de março de 2002, na SIC.\n[…]\nA música de abertura japonesa é \"OK!\" de Rica Matsumoto, presente em 41 episódios.\n[…]\nA música de abertura em inglês é \"Pokémon Johto\" do grupo musical Johto. Sua versão curta serve como música de encerramento. A música de abertura no Brasil é \"Pokémon Johto\", de Nil Bernardes. A música de abertura em Portugal é \"Pokémon Johto\", de Ricardo Afonso.\n[…]\nAs músicas de encerramento de cada episódio são \"You & Me & Pokémon\" em 9 episódios, e \"Pikachu (I Choose You)\" em 8 episódios de Élan Rivera e o grupo musical Johto, \"Song of Jigglypuff\" de Rachael Lillis como Jigglypuff e o grupo musical Johto em 8 episódios, \"All We Wanna Do\" de Élan Rivera e o grupo musical Johto em 8 episódios, e \"Two Perfect Girls\" de Eric Stuart como Brock em 8 episódios do \"Pokémon Karaokémon\".\n[…]\nNo Japão, a temporada teve sua exibição em 14 de outubro de 1999, na TV Tokyo.\n[…]\nA Viz Media e a Warner Home Video lançaram Pokémon: The Johto Journeys – The Complete Collection em DVD nos Estados Unidos em 10 de novembro de 2015.\n[…]\nSite oficial de Pokémon nos EUA (em inglês)\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Gotta Catch Ya Later! (episódio)",
      "descricao": "Episódio do anime Pokémon que encerra a fase de Johto, em que Misty e Brock se separam de Ash."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O episódio em que Misty e Brock se despedem de Ash, encerrando a fase de Johto, foi ao ar no Japão em que ano?",
    "resposta": "2002",
    "distratores": [
      "2000",
      "2001",
      "2003"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/EP274",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Master_Quest"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/EP274",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Master_Quest",
        "situacao": "ok",
        "texto": "Pokémon: Master Quest is the fifth season of the Pokémon anime series and the third and final season of Pokémon the Series: Gold and Silver, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan from August 9, 2001, to November 14, 2002, on TV Tokyo, in the United States from September 14, 2002, to October 25, 2003, on Kids' WB.\n[…]\nIt was the first season of Pokémon to be digitally animated as opposed to cel animation, starting with the episode \"Here's Lookin' at You, Elekid\".\n[…]\nThe season follows Ash Ketchum as he continues travelling across the Johto region with Misty and Brock.\n[…]\nThe episodes were directed by Masamitsu Hidaka and produced by the animation studio OLM.\n[…]\nThe Japanese opening songs are \"Aim to be a Pokémon Master\" (めざせポケモンマスター 2001, Mezase Pokémon Masutā 2001) by Whiteberry for 29 episodes, and \"Ready Go!\" by Naomi Tamura for 36 episodes. The ending songs are \"Face Forward Team Rocket!\" (前向きロケット団!, Maemuki Roketto-dan!) by Team Rocket trio for 29 episodes, and \"Pocket-ering Monster-ing\" (ポケッターリ・モンスターリ, Pokettāri Monsutāri) by Kana for 36 episodes. The English opening song is \"Believe in Me\" by David Rolfe.\n[…]\nIn the United States, two three-disc DVD sets were released by Viz Video and Ventura Distribution, which each contained 32 episodes each (10/11 episodes per DVD). These DVDs are now out of print."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Master_Quest",
        "situacao": "ok",
        "texto": "Pokémon: Master Quest, é a quinta temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a terceira temporada de Pokémon, a Série: Ouro e Prata (Pokémon the Series: Gold and Silver), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original Series.\n[…]\nOriginalmente, foi exibido no Japão de 9 de agosto de 2001 a 14 de novembro de 2002, na TV Tokyo; nos Estados Unidos de 25 de agosto de 2003 a 7 de junho de 2004, na Kids' WB; no Brasil de 1º de janeiro de 2003 a 20 de janeiro de 2004, no Cartoon Network, e em Portugal de 29 de julho a 24 de outubro de 2003, na SIC.\n[…]\nA temporada acompanha as aventuras de Ash Ketchum e Pikachu enquanto eles coletam Insígnias de Ginásio na região de Johto para poderem competir na Liga Johto. Ao longo do caminho, Ash recebe a companhia de Misty e Brock.\n[…]\nOs episódios foram dirigidos por Masamitsu Hidaka e produzidos pelo estúdio de animação OLM.\n[…]\nAs canções de abertura japonesas são \"Aim to be a Pokémon Master\" (めざせポケモンマスター 2001, Mezase Pokémon Masutā 2001) de Whiteberry para 29 episódios, e \"Ready Go!\" por Naomi Tamura por 36 episódios. As músicas de encerramento são \"Face Forward Team Rocket!\" (前向きロケット団!, Maemuki Roketto-dan!) pelo trio Team Rocket por 29 episódios, e \"Pocket-ering Monster-ing\" (ポケッターリ・モンスターリ, Pokettāri Monsutāri) por Kana por 36 episódios. A música de abertura em inglês é \"Believe in Me\" de David Rolfe.\n[…]\nNo Japão, a temporada teve sua exibição em 9 de agosto de 2001, na TV Tokyo.\n[…]\nNos Estados Unidos, dois conjuntos de DVDs com três discos cada foram lançados pela Viz Video e Ventura Distribution, contendo 32 episódios cada (10/11 episódios por DVD). Esses DVDs estão atualmente fora de catálogo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Gotta Catch Ya Later! (episódio)",
      "descricao": "Episódio do anime Pokémon que encerra a fase de Johto, em que Misty e Brock se separam de Ash."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No fim da fase de Johto, depois de anos de viagem, por que Misty deixa de acompanhar Ash?",
    "resposta": "Para cuidar do ginásio de Cerulean",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/EP274",
      "https://en.wikipedia.org/wiki/Misty_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/EP274",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Misty_(Pok%C3%A9mon)",
        "situacao": "ok",
        "texto": "Misty, known as Kasumi (Japanese: カスミ) in Japan, is a fictional character in the Pokémon franchise owned by Nintendo and created by Satoshi Tajiri. She has appeared as a Gym Leader in the Pokémon video games Pokémon Red and Blue, Pokémon Gold and Silver and their respective remakes.\n[…]\nShe was a main character in the ongoing anime for the first five seasons, travelling alongside Ash Ketchum and Brock / Tracey to become a Water-type Pokémon Master before departing home to Cerulean City to run the family gym. The character has also appeared in manga like Pokémon Adventures. She specialises in Water-type Pokémon. Her Japanese voice actress is Mayumi Iizuka, while her English voice was supplied by Rachael Lillis and Michele Knotz.\n[…]\nIn the video games Pokémon Red, Blue, Yellow, FireRed & LeafGreen, Pokémon Gold, Silver, Crystal, Pokémon HeartGold and SoulSilver and Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!, Misty is the Gym Leader of Cerulean City. She specializes in Water-type Pokémon. Misty, in her anime form, also appears as a trophy in Super Smash Bros. Melee and as a gym leader in Pokémon Puzzle League. Additionally, she appears on Pokémon Channel on a full Japanese Pichu Bros. Disc.\n[…]\nSoon after this incident, Ash \"borrows\" her bike in an attempt to flee from a flock of wild Spearow. The bike is later charred by an attack from Pikachu. Misty tells Ash she will not leave him alone until he replaces the bike and commits to follow him on his journey and the two soon become best friends. After retrieving her repaired bike at the end of the Johto League Silver Conference, she returns to the Cerulean Gym and resumes her duties as the Gym Leader.\n[…]\nMisty (anime) on Bulbapedia"
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
    "indice": 5,
    "ancora": {
      "nome": "Lapras de Ash",
      "descricao": "Lapras que acompanha Ash Ketchum nas Ilhas Laranja, no anime Pokémon, carregando o grupo pelo mar entre as ilhas."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Qual destes pokémon entrou primeiro na equipe de Ash, no anime?",
    "resposta": "Lapras",
    "distratores": [
      "Snorlax",
      "Heracross",
      "Noctowl"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Lapras",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Adventures_in_the_Orange_Islands"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Lapras",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Adventures_in_the_Orange_Islands",
        "situacao": "ok",
        "texto": "Pokémon: Adventures in the Orange Islands is the second season of the Pokémon anime series and the final season of Pokémon the Series: The Beginning, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan from January 28 to October 7, 1999, on TV Tokyo, and in the United States from December 4, 1999, to October 14, 2000, on The WB/Kids' WB.\n[…]\nThe season follows Ash Ketchum as he travels across the Orange Islands to challenge its Pokémon League while joined by Misty and Tracey Sketchit, a Pokémon Watcher.\n[…]\nThe ending songs are \"Type: Wild\" (タイプ：ワイルド, Taipu: Wairudo) by Rica Matsumoto for 24 episodes, \"Pokémon March\" (ポケモン音頭, Pokémon Ondo) by Sachiko Kobayashi, Unshō Ishizuka and Kōichi Sakaguchi with an interlude by Shimai Niitsu for 1 episode, \"Riding on Lapras\" (ラプラスにのって, Rapurasu ni Notte) by Mayumi Iizuka and Rikako Aikawa for 12 episodes, and the English opening songs are \"Pokémon Theme\" by Jason Paige for 3 episodes.\n[…]\nMaster\" by Russell Velázquez for 9 episodes, and \"Viridian City\" by Jason Paige for 7 episodes from Pikachu's Jukebox. Johto predicted the English version of \"Type: Wild\", the ending song from Pokémon Encore performed by Robbie Danzie.\n[…]\nViz Media and Warner Home Video released Pokémon: Adventures in the Orange Islands – The Complete Collection on DVD in the United States on October 11, 2016.\n[…]\nOlder home video releases refer to the season as Pokémon: Adventures on the Orange Islands. Newer DVD releases and the official Pokémon website refer to the season as Pokémon: Adventures in the Orange Islands.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Adventures_in_the_Orange_Islands",
        "situacao": "ok",
        "texto": "Pokémon: Aventuras nas Ilhas Laranja (Pokémon: Adventures in the Orange Islands), é a segunda temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e da série Pokémon, a Série: O Início (Pokémon the Series: The Beginning), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original Series.\n[…]\nA música de abertura japonesa é \"The Rivals\" (ライバル！, Raibaru) por Rica Matsumoto para todos os 36 episódios. As músicas de encerramento são \"Type: Wild\" (タイプ：ワイルド, Taipu: Wairudo) por Rica Matsumoto para 24 episódios, \"Pokémon March\" (ポケモン音頭, Pokémon Ondo) por Sachiko Kobayashi, Unshō Ishizuka e Kōichi Sakaguchi com um interlúdio de Shimai Niitsu durante 1 episódio, \"Riding on Lapras\" (ラプラスにのって, Rapurasu ni Notte) por Mayumi Iizuka e Rikako Aikawa para 12 episódios.\n[…]\nJohto previu a versão em inglês de \"Type: Wild\", a música final de Pokémon Encore realizado por Robbie Danzie. As músicas de encerramento no Brasil são \"Meus Melhores Amigos\", \"Muitos Problemas (Equipe Rocket)\", \"Que Tipo de Pokémon Que é Você?\", \"Juntos Para Sempre\", \"Para Ser um Mestre\", \"A Cidade de Verídian\".\n[…]\nA Viz Media lançou um box contendo os três DVDs em 2008. A Viz Media e a Warner Bros. Discovery Home Entertainment lançaram Pokémon: Adventures in the Orange Islands – The Complete Collection em DVD nos Estados Unidos em 11 de outubro de 2016.\n[…]\nLançamentos mais antigos em home media se referem à temporada como Pokémon: Adventures in the Orange Islands. Lançamentos mais recentes em DVD e o site oficial de Pokémon se referem à temporada como Pokémon: Adventures in the Orange Islands.\n[…]\nSite oficial de Pokémon nos EUA (em inglês)\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Lapras de Ash",
      "descricao": "Lapras que acompanha Ash Ketchum nas Ilhas Laranja, no anime Pokémon, carregando o grupo pelo mar entre as ilhas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No fim da viagem pelas Ilhas Laranja, Ash se despede do Lapras que levava o grupo pelo mar. Por que ele o liberta?",
    "resposta": "Para ele voltar à sua família",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Lapras",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Adventures_in_the_Orange_Islands"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Lapras",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Adventures_in_the_Orange_Islands",
        "situacao": "ok",
        "texto": "Pokémon: Adventures in the Orange Islands is the second season of the Pokémon anime series and the final season of Pokémon the Series: The Beginning, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan from January 28 to October 7, 1999, on TV Tokyo, and in the United States from December 4, 1999, to October 14, 2000, on The WB/Kids' WB.\n[…]\nThe ending songs are \"Type: Wild\" (タイプ：ワイルド, Taipu: Wairudo) by Rica Matsumoto for 24 episodes, \"Pokémon March\" (ポケモン音頭, Pokémon Ondo) by Sachiko Kobayashi, Unshō Ishizuka and Kōichi Sakaguchi with an interlude by Shimai Niitsu for 1 episode, \"Riding on Lapras\" (ラプラスにのって, Rapurasu ni Notte) by Mayumi Iizuka and Rikako Aikawa for 12 episodes, and the English opening songs are \"Pokémon Theme\" by Jason Paige for 3 episodes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Adventures_in_the_Orange_Islands",
        "situacao": "ok",
        "texto": "Pokémon: Aventuras nas Ilhas Laranja (Pokémon: Adventures in the Orange Islands), é a segunda temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e da série Pokémon, a Série: O Início (Pokémon the Series: The Beginning), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original Series.\n[…]\nEsta temporada acompanha as aventuras do Treinador Pokémon de dez anos, Ash Ketchum, e seu parceiro Pikachu, enquanto coletam Insígnias de Ginásio nas Ilhas Laranja, também conhecidas como Arquipélago Laranja, para que possam competir na Liga Laranja. Ao longo do caminho, Ash é acompanhado por Misty e Tracey Sketchit, um Observador Pokémon.\n[…]\nA música de abertura japonesa é \"The Rivals\" (ライバル！, Raibaru) por Rica Matsumoto para todos os 36 episódios. As músicas de encerramento são \"Type: Wild\" (タイプ：ワイルド, Taipu: Wairudo) por Rica Matsumoto para 24 episódios, \"Pokémon March\" (ポケモン音頭, Pokémon Ondo) por Sachiko Kobayashi, Unshō Ishizuka e Kōichi Sakaguchi com um interlúdio de Shimai Niitsu durante 1 episódio, \"Riding on Lapras\" (ラプラスにのって, Rapurasu ni Notte) por Mayumi Iizuka e Rikako Aikawa para 12 episódios.\n[…]\nNo Brasil, a temporada teve sua exibição em 15 de março de 2000, Rede Record, posteriormente exibido no Cartoon Network, na Tooncast, na RedeTV!, através do bloco TV Kids, Rede Família e Rede Brasil. Em Portugal, teve sua exibição em 2 de julho de 2000, na SIC.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Charizard de Ash",
      "descricao": "Charizard de Ash Ketchum no anime Pokémon, que evoluiu do Charmander abandonado e passou muito tempo desobedecendo o treinador."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Depois de muito tempo desobedecendo, o Charizard de Ash volta a respeitá-lo nas Ilhas Laranja. O que provoca essa mudança?",
    "resposta": "Ash cuidou dele depois de congelado",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Charizard",
      "https://bulbapedia.bulbagarden.net/wiki/EP093"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Charizard",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/EP093",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Melanie (anime)",
      "descricao": "Moça do anime Pokémon que cuida de pokémon abandonados num vilarejo escondido de Kanto, protegido pelo Bulbasaur que depois segue Ash."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que moça cuidava de pokémon abandonados num vilarejo escondido de Kanto, ajudada pelo Bulbasaur que depois partiu com Ash?",
    "resposta": "Melanie",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Melanie",
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Bulbasaur"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Melanie",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Bulbasaur",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Bulbasaur de Ash",
      "descricao": "Bulbasaur de Ash Ketchum no anime Pokémon, que vivia num vilarejo escondido de pokémon abandonados antes de seguir o treinador."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Num episódio do anime, o Bulbasaur de Ash chega a um jardim misterioso cheio de pokémon da sua espécie, numa grande cerimônia. O que ele se recusa a fazer lá?",
    "resposta": "Evoluir para Ivysaur",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Bulbasaur",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Indigo_League"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Bulbasaur",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Indigo_League",
        "situacao": "ok",
        "texto": "Pokémon: Indigo League is the first season of the Pokémon anime series and of Pokémon the Series: The Beginning, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan on TV Tokyo from April 1, 1997, to January 21, 1999.\n[…]\nThe Japanese opening song is \"Aim to Be a Pokémon Master\" (めざせポケモンマスター, Mezase Pokémon Masutā) by Rika Matsumoto for all 82 episodes.\n[…]\nThe anime-size version serves as the ending theme for 52 episodes, while its shortened version serves as the ending theme for 26 episodes.\n[…]\nThe ending songs at the end of the episode are \"Kanto Pokérap\" by James \"D Train\" Willams and Babi Floyd for 52 episodes, 32 Pokémon on Monday thru Wednesday, 30 Pokémon on Thursday, and 24 Pokémon on Friday, \"My Best Friends\" by Michael Whalen during episode 18 and for 6 episodes, \"Double Trouble\" by Rachael Lillis, Eric Stuart and Maddie Blaustien for 5 episodes, \"What Kind of Pokémon Are You?\" by Joshua Tyler for 4 episodes, \"Together Forever\" by J.P. Hartmann for 6 episodes, \"2.B.A.\n[…]\nOn November 5, 2013, Viz Media and Warner Home Video re-issued the first 26 episodes on DVD with new packaging.\n[…]\nViz Media and Warner Home Video released Pokémon: Indigo League – The Complete Collection on DVD in the United States on October 28, 2014. This release contains all three volumes of the series, consisting of 78 episodes in all, although this set lacks the episode \"Holiday Hi-Jynx\", which was banned by The Pokémon Company International in 2014 due to the controversial presence of Jynx.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)\n[…]\nPokémon: Indigo League at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Indigo_League",
        "situacao": "ok",
        "texto": "Pokémon: Liga Índigo (Pokémon: Indigo League), é a primeira temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e da série Pokémon, a Série: O Início (Pokémon the Series: The Beginning), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original Series. Originalmente, foi exibida no Japão pela TV Tokyo de 1º de abril de 19\n[…]\nAs músicas de encerramento no Brasil são, \"PokéRAP (Você Consegue Cantar os 150 em Ritmo de Rap?)\", \"Meus Melhores Amigos\", \"Muitos Problemas (Equipe Rocket)\", \"Que Tipo de Pokémon Que é Você?\", \"Juntos Para Sempre\", \"Para Ser um Mestre\", \"A Cidade de Verídian\", e as músicas inéditas de encerramento são \"Tudo Muda\", \"A Hora Chegou (O Adeus de Pikachu)\", \"Pokémon (Dance Mix)\", \"Canção da Misty\", \"Você Pode Fazer (Se Realmente Você Tentar)\".\n[…]\nA temporada também estava disponível no aplicativo e site Pokémon TV até janeiro de 2024, quando foi desativado. A partir de 6 de dezembro de 2024, os episódios começam a ser carregados no canal do Pokémon TV no YouTube todos os domingos, segundas, quartas, sextas e sábados.\n[…]\nEm 5 de novembro de 2013, a Viz Media e a Pokémon: Indigo League - The Complete Collection relançaram os primeiros 26 episódios em DVD com nova embalagem. A Viz Media e a Warner Home Video lançaram \"Pokémon: Liga Índigo - A Coleção Completa\" em DVD nos Estados Unidos em 28 de outubro de 2014.\n[…]\nEste lançamento contém os três volumes da série, totalizando 78 episódios, embora este conjunto não inclua o episódio \"Holiday Hi-Jynx\", que foi banido pela The Pokémon Company International em 2014 devido à presença controversa de Jynx.\n[…]\nSite oficial de Pokémon nos EUA (em inglês)\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Squirtle de Ash",
      "descricao": "Squirtle que pertence a Ash Ketchum no anime Pokémon, antigo líder do Esquadrão Squirtle."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Johto, o Squirtle de Ash se separa do treinador e volta para seus antigos companheiros do Esquadrão Squirtle. Por que ele faz isso?",
    "resposta": "Para ajudar o esquadrão como bombeiro",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Squirtle",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Johto_Journeys"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Squirtle",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Johto_Journeys",
        "situacao": "ok",
        "texto": "Pokémon: The Johto Journeys is the third season of the Pokémon anime series and the first season of Pokémon the Series: Gold and Silver, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan from October 14, 1999, to July 27, 2000, on TV Tokyo, and in the United States from October 14, 2000, to August 11, 2001, on The WB/Kids' WB.\n[…]\nThe season follows Ash Ketchum as he travels across the Johto region to challenge its Pokémon League while joined by Misty and Brock.\n[…]\nThe ending songs are \"Meowth's Party\" (ニャースのパーティ, Nyasu No Pāti) by Nyasu / Meowth (Inuko Inuyama), for 25 episodes, Rikako Aikawa and Chorus performed \"Exciting Pokémon Relay\" (ポケモンはらはらリレー, Pokémon Hara Hara Rirē) for 10 episodes, and \"Exciting² Pokémon Relay (Hard Version)\" (ポケモンはらはら²リレー むずかし版, Pokémon Hara Hara² Rirē Muzukashi Ban) for 5 episodes, \"Takeshi's Paradise (タケシのパラダイス, Takeshi no Paradaisu) by Takeshi \\ Brock (Yūji Ueda) for one episode, and the English opening song is \"Pokémon Johto\" by the musical group called Johto.\n[…]\nThe ending songs at the end of each episode are \"You & Me & Pokémon\" for 9 episodes, and \"Pikachu (I Choose You)\" for 8 episodes by Élan Rivera and the musical group called Johto, \"Song of Jigglypuff\" by Rachael Lillis as Jigglypuff and the musical group called Johto for 8 episodes, \"All We Wanna Do\" by Élan Rivera and the musical group called Johto for 8 episodes, and \"Two Perfect Girls\" by Eric Stuart as Brock for 8 episodes from Pokémon Karaokémon.\n[…]\nViz Media and Warner Home Video released Pokémon: The Johto Journeys – The Complete Collection on DVD in the United States on November 10, 2015."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_Johto_Journeys",
        "situacao": "ok",
        "texto": "Pokémon: A Jornada Johto (Brasil) e Pokémon: Liga Johto (Portugal) (Pokémon: The Johto Journeys), é a terceira temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e da primeira temporada da série Pokémon, a Série: Ouro e Prata (Pokémon the Series: Gold and Silver), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original\n[…]\nEsta temporada acompanha as aventuras de Ash Ketchum e Pikachu enquanto eles coletam Insígnias de Ginásio na região fictícia de Johto para que possam competir na Liga Johto. Ao longo do caminho, Ash é acompanhado por Misty e Brock.\n[…]\nA música de abertura em inglês é \"Pokémon Johto\" do grupo musical Johto. Sua versão curta serve como música de encerramento. A música de abertura no Brasil é \"Pokémon Johto\", de Nil Bernardes. A música de abertura em Portugal é \"Pokémon Johto\", de Ricardo Afonso.\n[…]\nAs músicas de encerramento de cada episódio são \"You & Me & Pokémon\" em 9 episódios, e \"Pikachu (I Choose You)\" em 8 episódios de Élan Rivera e o grupo musical Johto, \"Song of Jigglypuff\" de Rachael Lillis como Jigglypuff e o grupo musical Johto em 8 episódios, \"All We Wanna Do\" de Élan Rivera e o grupo musical Johto em 8 episódios, e \"Two Perfect Girls\" de Eric Stuart como Brock em 8 episódios do \"Pokémon Karaokémon\".\n[…]\nA Viz Media e a Warner Home Video lançaram Pokémon: The Johto Journeys – The Complete Collection em DVD nos Estados Unidos em 10 de novembro de 2015.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Primeape de Ash",
      "descricao": "Primeape de Ash Ketchum no anime Pokémon, capturado em Kanto depois que um Mankey furioso evoluiu."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Ainda em Kanto, Ash deixa seu Primeape aos cuidados de Anthony, um treinador de pokémon lutadores. Por que ele toma essa decisão?",
    "resposta": "Para treinar como lutador profissional",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Primeape",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Indigo_League"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Primeape",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Indigo_League",
        "situacao": "ok",
        "texto": "Pokémon: Indigo League is the first season of the Pokémon anime series and of Pokémon the Series: The Beginning, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan on TV Tokyo from April 1, 1997, to January 21, 1999.\n[…]\nThe season follows Ash Ketchum, a 10-year-old Pokémon Trainer and aspiring Pokémon Master from Pallet Town as he receives a Pikachu from Professor Oak and travels across the Kanto region to challenge its Pokémon League while joined by Misty and Brock.\n[…]\nThe Japanese opening song is \"Aim to Be a Pokémon Master\" (めざせポケモンマスター, Mezase Pokémon Masutā) by Rika Matsumoto for all 82 episodes.\n[…]\nThe ending songs at the end of the episode are \"Kanto Pokérap\" by James \"D Train\" Willams and Babi Floyd for 52 episodes, 32 Pokémon on Monday thru Wednesday, 30 Pokémon on Thursday, and 24 Pokémon on Friday, \"My Best Friends\" by Michael Whalen during episode 18 and for 6 episodes, \"Double Trouble\" by Rachael Lillis, Eric Stuart and Maddie Blaustien for 5 episodes, \"What Kind of Pokémon Are You?\" by Joshua Tyler for 4 episodes, \"Together Forever\" by J.P. Hartmann for 6 episodes, \"2.B.A.\n[…]\nViz Media and Warner Home Video released Pokémon: Indigo League – The Complete Collection on DVD in the United States on October 28, 2014. This release contains all three volumes of the series, consisting of 78 episodes in all, although this set lacks the episode \"Holiday Hi-Jynx\", which was banned by The Pokémon Company International in 2014 due to the controversial presence of Jynx.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)\n[…]\nPokémon: Indigo League at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Indigo_League",
        "situacao": "ok",
        "texto": "Pokémon: Liga Índigo (Pokémon: Indigo League), é a primeira temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e da série Pokémon, a Série: O Início (Pokémon the Series: The Beginning), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original Series. Originalmente, foi exibida no Japão pela TV Tokyo de 1º de abril de 19\n[…]\nEsta temporada acompanha as primeiras aventuras de Ash Ketchum, um aspirante a Treinador Pokémon de 10 anos da cidade de Pallet, que recebe um Pikachu do Professor Carvalho para começar sua jornada. Ash almeja competir na Liga Kanto, coletando Insígnias de Ginásio conquistadas dos Líderes de Ginásio da região. No início da temporada, ele se junta a Misty, a Líder de Ginásio de Cerulean, e Brock, o Líder de Ginásio de Pewter.\n[…]\nAs músicas de encerramento de cada episódio são: \"Kanto Pokérap\", de James \"D Train\" Williams e Babi Floyd (52 episódios), \"32 Pokémon on Monday thru Wednesday, 30 Pokémon on Thursday, and 24 Pokémon on Friday\", \"My Best Friends\", de Michael Whalen (durante o episódio 18 e em 6 episódios), \"Double Trouble\", de Rachael Lillis, Eric Stuart e Maddie Blaustien (em 5 episódios), \"What Kind of Pokémon Are You?\", de Joshua Tyler (em 4 episódios), \"Together Forever\", de J.P.\n[…]\nNo Brasil, a temporada também está disponível na Netflix, Amazon Prime Video, no canal Pokémon TV do YouTube e Pluto TV. Em Portugal, a temporada também está disponível na Netflix e no canal Pokémon TV do YouTube.\n[…]\nEste lançamento contém os três volumes da série, totalizando 78 episódios, embora este conjunto não inclua o episódio \"Holiday Hi-Jynx\", que foi banido pela The Pokémon Company International em 2014 devido à presença controversa de Jynx.\n[…]\nSite oficial de Pokémon nos EUA (em inglês)\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Kingler de Ash",
      "descricao": "Kingler de Ash Ketchum no anime Pokémon, capturado como Krabby em Kanto e evoluído durante a Liga Índigo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Assim que foi capturado, o Krabby de Ash desapareceu da Poké Bola e foi parar no laboratório do Professor Carvalho. Por quê?",
    "resposta": "Ash já tinha seis pokémon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Kingler",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Indigo_League"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Kingler",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Indigo_League",
        "situacao": "ok",
        "texto": "Pokémon: Indigo League is the first season of the Pokémon anime series and of Pokémon the Series: The Beginning, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan on TV Tokyo from April 1, 1997, to January 21, 1999.\n[…]\nThe season follows Ash Ketchum, a 10-year-old Pokémon Trainer and aspiring Pokémon Master from Pallet Town as he receives a Pikachu from Professor Oak and travels across the Kanto region to challenge its Pokémon League while joined by Misty and Brock.\n[…]\nThe Japanese opening song is \"Aim to Be a Pokémon Master\" (めざせポケモンマスター, Mezase Pokémon Masutā) by Rika Matsumoto for all 82 episodes.\n[…]\nThe ending songs at the end of the episode are \"Kanto Pokérap\" by James \"D Train\" Willams and Babi Floyd for 52 episodes, 32 Pokémon on Monday thru Wednesday, 30 Pokémon on Thursday, and 24 Pokémon on Friday, \"My Best Friends\" by Michael Whalen during episode 18 and for 6 episodes, \"Double Trouble\" by Rachael Lillis, Eric Stuart and Maddie Blaustien for 5 episodes, \"What Kind of Pokémon Are You?\" by Joshua Tyler for 4 episodes, \"Together Forever\" by J.P. Hartmann for 6 episodes, \"2.B.A.\n[…]\nViz Media and Warner Home Video released Pokémon: Indigo League – The Complete Collection on DVD in the United States on October 28, 2014. This release contains all three volumes of the series, consisting of 78 episodes in all, although this set lacks the episode \"Holiday Hi-Jynx\", which was banned by The Pokémon Company International in 2014 due to the controversial presence of Jynx.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)\n[…]\nPokémon: Indigo League at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Indigo_League",
        "situacao": "ok",
        "texto": "Pokémon: Liga Índigo (Pokémon: Indigo League), é a primeira temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e da série Pokémon, a Série: O Início (Pokémon the Series: The Beginning), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original Series. Originalmente, foi exibida no Japão pela TV Tokyo de 1º de abril de 19\n[…]\nEsta temporada acompanha as primeiras aventuras de Ash Ketchum, um aspirante a Treinador Pokémon de 10 anos da cidade de Pallet, que recebe um Pikachu do Professor Carvalho para começar sua jornada. Ash almeja competir na Liga Kanto, coletando Insígnias de Ginásio conquistadas dos Líderes de Ginásio da região. No início da temporada, ele se junta a Misty, a Líder de Ginásio de Cerulean, e Brock, o Líder de Ginásio de Pewter.\n[…]\nNo Brasil, a temporada também está disponível na Netflix, Amazon Prime Video, no canal Pokémon TV do YouTube e Pluto TV. Em Portugal, a temporada também está disponível na Netflix e no canal Pokémon TV do YouTube.\n[…]\nEm 5 de novembro de 2013, a Viz Media e a Pokémon: Indigo League - The Complete Collection relançaram os primeiros 26 episódios em DVD com nova embalagem. A Viz Media e a Warner Home Video lançaram \"Pokémon: Liga Índigo - A Coleção Completa\" em DVD nos Estados Unidos em 28 de outubro de 2014.\n[…]\nEste lançamento contém os três volumes da série, totalizando 78 episódios, embora este conjunto não inclua o episódio \"Holiday Hi-Jynx\", que foi banido pela The Pokémon Company International em 2014 devido à presença controversa de Jynx.\n[…]\nSite oficial de Pokémon nos EUA (em inglês)\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Muk de Ash",
      "descricao": "Muk de Ash Ketchum no anime Pokémon, que vive no laboratório do Professor Carvalho em Pallet."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que pokémon venenoso de Ash, que mora no laboratório de Pallet, adora se jogar em cima do Professor Carvalho para abraçá-lo?",
    "resposta": "Muk",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Muk",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Muk",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nPokémon the Series primarily follows Ash Ketchum, a young boy from Pallet Town who dreams of becoming a Pokémon Master. After receiving his first Pokémon, Pikachu, from Professor Oak, Ash embarks on a journey across various regions, including Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, and Galar, where he challenges Gym Leaders, competes in regional Pokémon Leagues, or other competitions, and meets a variety of companions who support him in his goal.\n[…]\nSophocles is one of the students at the Pokémon School of Melemele Island who befriends Ash in the Sun & Moon series. He specializes in Electric-type Pokémon and is skillful with machines. He used to have scotophobia, a fear of dark places, but overcomes it as he wants to become an astronaut. After winning a Vikavolt race, Sophocles obtains a Z-Ring from Hapu. He eventually gets his own laboratory constructed by his dad, which he uses for research.\n[…]\nThe series has had several major characters during its run. In addition to the above, a series of recurring characters known as Nurse Joy (ジョーイ, Joy) and Officer Jenny (ジュンサー, Junsar) appear within each town the protagonist and his friends encounter. Each are a family of identical looking sisters, with the Joy siblings treating injured Pokémon and assisting the Professor of the respective region, while the Jenny siblings acts as the local law enforcement.\n[…]\nPokémon seasons\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nPokémon, a Série acompanha principalmente Ash Ketchum (Satoshi no Japão), e seus amigos. Ash é um jovem de Pallet Town que sonha em se tornar um Mestre Pokémon. Após receber seu primeiro Pokémon, Pikachu, do Professor Samuel Carvalho (Dr.\n[…]\nYukinari Okido em japonês e Professor Samuel Oak em inglês), Ash embarca em uma jornada por diversas regiões, incluindo Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola e Galar, onde desafia Líderes de Ginásio, compete em Ligas Pokémon regionais e outras competições, e conhece diversos companheiros que o apoiam e o ajudam em seu objetivo.\n[…]\nAsh também desenvolve rivalidades com vários personagens recorrentes ao longo da série, como Gary Carvalho (Shigeru Okido em japonês e Gary Oak em inglês), Paul (Shinji) e Trip (Shooty), muitos dos quais ele enfrenta em torneios da Liga ou outras competições. Ash e seus amigos frequentemente encontram o trio vilão da Equipe Rocket, Jessie (Musashi), James (Kojiro) e Meowth (Nyarth em japonês e Meowth em inglês), que persistentemente tentam roubar Pokémon raros e poderosos ao longo da série.\n[…]\nPokémon, a Série\n[…]\nPokémon Horizontes, a Série\n[…]\nAs críticas se concentraram no título enganoso e nos trailers que sugeriam a vitória de Ash, além do fato de ele ter perdido todas as Ligas Pokémon nas temporadas anteriores.\n[…]\nPágina oficial de Pokémon (em japonês)\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)\n[…]\nPágina oficial de Pokémon (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Noctowl de Ash",
      "descricao": "Noctowl brilhante, de cores diferentes do normal, capturado por Ash Ketchum em Johto no anime Pokémon."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Em Johto, Ash captura um pokémon coruja brilhante, com cores diferentes das normais. Que pokémon é esse?",
    "resposta": "Noctowl",
    "distratores": [
      "Hoothoot",
      "Xatu",
      "Murkrow"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Noctowl",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Johto_Journeys"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Noctowl",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Johto_Journeys",
        "situacao": "ok",
        "texto": "Pokémon: The Johto Journeys is the third season of the Pokémon anime series and the first season of Pokémon the Series: Gold and Silver, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan from October 14, 1999, to July 27, 2000, on TV Tokyo, and in the United States from October 14, 2000, to August 11, 2001, on The WB/Kids' WB.\n[…]\nThe season follows Ash Ketchum as he travels across the Johto region to challenge its Pokémon League while joined by Misty and Brock.\n[…]\nThe ending songs are \"Meowth's Party\" (ニャースのパーティ, Nyasu No Pāti) by Nyasu / Meowth (Inuko Inuyama), for 25 episodes, Rikako Aikawa and Chorus performed \"Exciting Pokémon Relay\" (ポケモンはらはらリレー, Pokémon Hara Hara Rirē) for 10 episodes, and \"Exciting² Pokémon Relay (Hard Version)\" (ポケモンはらはら²リレー むずかし版, Pokémon Hara Hara² Rirē Muzukashi Ban) for 5 episodes, \"Takeshi's Paradise (タケシのパラダイス, Takeshi no Paradaisu) by Takeshi \\ Brock (Yūji Ueda) for one episode, and the English opening song is \"Pokémon Johto\" by the musical group called Johto.\n[…]\nThe ending songs at the end of each episode are \"You & Me & Pokémon\" for 9 episodes, and \"Pikachu (I Choose You)\" for 8 episodes by Élan Rivera and the musical group called Johto, \"Song of Jigglypuff\" by Rachael Lillis as Jigglypuff and the musical group called Johto for 8 episodes, \"All We Wanna Do\" by Élan Rivera and the musical group called Johto for 8 episodes, and \"Two Perfect Girls\" by Eric Stuart as Brock for 8 episodes from Pokémon Karaokémon.\n[…]\nViz Media and Warner Home Video released Pokémon: The Johto Journeys – The Complete Collection on DVD in the United States on November 10, 2015.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon Anime television series at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_Johto_Journeys",
        "situacao": "ok",
        "texto": "Pokémon: A Jornada Johto (Brasil) e Pokémon: Liga Johto (Portugal) (Pokémon: The Johto Journeys), é a terceira temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e da primeira temporada da série Pokémon, a Série: Ouro e Prata (Pokémon the Series: Gold and Silver), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original\n[…]\nA música de abertura em inglês é \"Pokémon Johto\" do grupo musical Johto. Sua versão curta serve como música de encerramento. A música de abertura no Brasil é \"Pokémon Johto\", de Nil Bernardes. A música de abertura em Portugal é \"Pokémon Johto\", de Ricardo Afonso.\n[…]\nAs músicas de encerramento de cada episódio são \"You & Me & Pokémon\" em 9 episódios, e \"Pikachu (I Choose You)\" em 8 episódios de Élan Rivera e o grupo musical Johto, \"Song of Jigglypuff\" de Rachael Lillis como Jigglypuff e o grupo musical Johto em 8 episódios, \"All We Wanna Do\" de Élan Rivera e o grupo musical Johto em 8 episódios, e \"Two Perfect Girls\" de Eric Stuart como Brock em 8 episódios do \"Pokémon Karaokémon\".\n[…]\nNos Estados Unidos, a temporada teve sua exibição na Netflix, Hulu, Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nNo Brasil, a temporada também está disponível na Amazon Prime Video, no canal Pokémon TV do YouTube e Pluto TV. Em Portugal, a temporada também está disponível no canal Pokémon TV do YouTube.\n[…]\nA Viz Media e a Warner Home Video lançaram Pokémon: The Johto Journeys – The Complete Collection em DVD nos Estados Unidos em 10 de novembro de 2015.\n[…]\nSite oficial de Pokémon nos EUA (em inglês)\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Bayleef de Ash",
      "descricao": "Pokémon de Ash Ketchum no anime Pokémon, capturada como Chikorita em Johto, conhecida pelo enorme carinho pelo treinador."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Johto, que pokémon de Ash, apaixonado pelo treinador, evoluiu e continuou se jogando sobre ele para abraçá-lo, mesmo grande demais para isso?",
    "resposta": "Bayleef",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Bayleef",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Johto_Journeys"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Bayleef",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Johto_Journeys",
        "situacao": "ok",
        "texto": "Pokémon: The Johto Journeys is the third season of the Pokémon anime series and the first season of Pokémon the Series: Gold and Silver, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan from October 14, 1999, to July 27, 2000, on TV Tokyo, and in the United States from October 14, 2000, to August 11, 2001, on The WB/Kids' WB.\n[…]\nThe season follows Ash Ketchum as he travels across the Johto region to challenge its Pokémon League while joined by Misty and Brock.\n[…]\nThe ending songs are \"Meowth's Party\" (ニャースのパーティ, Nyasu No Pāti) by Nyasu / Meowth (Inuko Inuyama), for 25 episodes, Rikako Aikawa and Chorus performed \"Exciting Pokémon Relay\" (ポケモンはらはらリレー, Pokémon Hara Hara Rirē) for 10 episodes, and \"Exciting² Pokémon Relay (Hard Version)\" (ポケモンはらはら²リレー むずかし版, Pokémon Hara Hara² Rirē Muzukashi Ban) for 5 episodes, \"Takeshi's Paradise (タケシのパラダイス, Takeshi no Paradaisu) by Takeshi \\ Brock (Yūji Ueda) for one episode, and the English opening song is \"Pokémon Johto\" by the musical group called Johto.\n[…]\nThe ending songs at the end of each episode are \"You & Me & Pokémon\" for 9 episodes, and \"Pikachu (I Choose You)\" for 8 episodes by Élan Rivera and the musical group called Johto, \"Song of Jigglypuff\" by Rachael Lillis as Jigglypuff and the musical group called Johto for 8 episodes, \"All We Wanna Do\" by Élan Rivera and the musical group called Johto for 8 episodes, and \"Two Perfect Girls\" by Eric Stuart as Brock for 8 episodes from Pokémon Karaokémon.\n[…]\nViz Media and Warner Home Video released Pokémon: The Johto Journeys – The Complete Collection on DVD in the United States on November 10, 2015.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon Anime television series at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_Johto_Journeys",
        "situacao": "ok",
        "texto": "Pokémon: A Jornada Johto (Brasil) e Pokémon: Liga Johto (Portugal) (Pokémon: The Johto Journeys), é a terceira temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e da primeira temporada da série Pokémon, a Série: Ouro e Prata (Pokémon the Series: Gold and Silver), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original\n[…]\nA música de abertura em inglês é \"Pokémon Johto\" do grupo musical Johto. Sua versão curta serve como música de encerramento. A música de abertura no Brasil é \"Pokémon Johto\", de Nil Bernardes. A música de abertura em Portugal é \"Pokémon Johto\", de Ricardo Afonso.\n[…]\nAs músicas de encerramento de cada episódio são \"You & Me & Pokémon\" em 9 episódios, e \"Pikachu (I Choose You)\" em 8 episódios de Élan Rivera e o grupo musical Johto, \"Song of Jigglypuff\" de Rachael Lillis como Jigglypuff e o grupo musical Johto em 8 episódios, \"All We Wanna Do\" de Élan Rivera e o grupo musical Johto em 8 episódios, e \"Two Perfect Girls\" de Eric Stuart como Brock em 8 episódios do \"Pokémon Karaokémon\".\n[…]\nNos Estados Unidos, a temporada teve sua exibição na Netflix, Hulu, Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nNo Brasil, a temporada também está disponível na Amazon Prime Video, no canal Pokémon TV do YouTube e Pluto TV. Em Portugal, a temporada também está disponível no canal Pokémon TV do YouTube.\n[…]\nA Viz Media e a Warner Home Video lançaram Pokémon: The Johto Journeys – The Complete Collection em DVD nos Estados Unidos em 10 de novembro de 2015.\n[…]\nSite oficial de Pokémon nos EUA (em inglês)\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Heracross de Ash",
      "descricao": "Heracross de Ash Ketchum no anime Pokémon, primeiro pokémon que ele capturou em Johto."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Johto, que pokémon inseto de Ash vivia tentando sugar a seiva do bulbo nas costas do Bulbasaur?",
    "resposta": "Heracross",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Heracross",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Johto_Journeys"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Heracross",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Johto_Journeys",
        "situacao": "ok",
        "texto": "Pokémon: The Johto Journeys is the third season of the Pokémon anime series and the first season of Pokémon the Series: Gold and Silver, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan from October 14, 1999, to July 27, 2000, on TV Tokyo, and in the United States from October 14, 2000, to August 11, 2001, on The WB/Kids' WB.\n[…]\nThe season follows Ash Ketchum as he travels across the Johto region to challenge its Pokémon League while joined by Misty and Brock.\n[…]\nThe ending songs are \"Meowth's Party\" (ニャースのパーティ, Nyasu No Pāti) by Nyasu / Meowth (Inuko Inuyama), for 25 episodes, Rikako Aikawa and Chorus performed \"Exciting Pokémon Relay\" (ポケモンはらはらリレー, Pokémon Hara Hara Rirē) for 10 episodes, and \"Exciting² Pokémon Relay (Hard Version)\" (ポケモンはらはら²リレー むずかし版, Pokémon Hara Hara² Rirē Muzukashi Ban) for 5 episodes, \"Takeshi's Paradise (タケシのパラダイス, Takeshi no Paradaisu) by Takeshi \\ Brock (Yūji Ueda) for one episode, and the English opening song is \"Pokémon Johto\" by the musical group called Johto.\n[…]\nThe ending songs at the end of each episode are \"You & Me & Pokémon\" for 9 episodes, and \"Pikachu (I Choose You)\" for 8 episodes by Élan Rivera and the musical group called Johto, \"Song of Jigglypuff\" by Rachael Lillis as Jigglypuff and the musical group called Johto for 8 episodes, \"All We Wanna Do\" by Élan Rivera and the musical group called Johto for 8 episodes, and \"Two Perfect Girls\" by Eric Stuart as Brock for 8 episodes from Pokémon Karaokémon.\n[…]\nViz Media and Warner Home Video released Pokémon: The Johto Journeys – The Complete Collection on DVD in the United States on November 10, 2015.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon Anime television series at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_Johto_Journeys",
        "situacao": "ok",
        "texto": "Pokémon: A Jornada Johto (Brasil) e Pokémon: Liga Johto (Portugal) (Pokémon: The Johto Journeys), é a terceira temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e da primeira temporada da série Pokémon, a Série: Ouro e Prata (Pokémon the Series: Gold and Silver), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original\n[…]\nA música de abertura em inglês é \"Pokémon Johto\" do grupo musical Johto. Sua versão curta serve como música de encerramento. A música de abertura no Brasil é \"Pokémon Johto\", de Nil Bernardes. A música de abertura em Portugal é \"Pokémon Johto\", de Ricardo Afonso.\n[…]\nAs músicas de encerramento de cada episódio são \"You & Me & Pokémon\" em 9 episódios, e \"Pikachu (I Choose You)\" em 8 episódios de Élan Rivera e o grupo musical Johto, \"Song of Jigglypuff\" de Rachael Lillis como Jigglypuff e o grupo musical Johto em 8 episódios, \"All We Wanna Do\" de Élan Rivera e o grupo musical Johto em 8 episódios, e \"Two Perfect Girls\" de Eric Stuart como Brock em 8 episódios do \"Pokémon Karaokémon\".\n[…]\nNos Estados Unidos, a temporada teve sua exibição na Netflix, Hulu, Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nNo Brasil, a temporada também está disponível na Amazon Prime Video, no canal Pokémon TV do YouTube e Pluto TV. Em Portugal, a temporada também está disponível no canal Pokémon TV do YouTube.\n[…]\nA Viz Media e a Warner Home Video lançaram Pokémon: The Johto Journeys – The Complete Collection em DVD nos Estados Unidos em 10 de novembro de 2015.\n[…]\nSite oficial de Pokémon nos EUA (em inglês)\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Pikachu de Ash",
      "descricao": "Pikachu parceiro de Ash Ketchum no anime Pokémon, recebido do Professor Carvalho no primeiro episódio."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No anime, quando o Pikachu de Ash diz Pika Pi, a quem ele está se referindo?",
    "resposta": "Ao próprio Ash",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Pikachu",
      "https://en.wikipedia.org/wiki/Pikachu"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Pikachu",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pikachu",
        "situacao": "ok",
        "texto": "Pikachu ( ; Japanese: ピカチュウ, Hepburn: Pikachū) is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise, and the franchise's mascot. First introduced in the video games Pokémon Red and Blue, it was created by Atsuko Nishida at the request of lead designer Ken Sugimori, with the design finalized by Sugimori. Since Pikachu's debut, it has appeared in multiple games including Pokémon\n[…]\nPikachu's voice has been analyzed for its ability to convey emotion despite only speaking one word, with children being able to determine the emotion of the character based on how the character sounds. The book Anime Impact: The Movies and Shows that Changed the World of Japanese Animation additionally analyzed how Pikachu's voice and inflections on a specific word allowed an animalistic character to be seen as a separate character and entity by the audience.\n[…]\nShe further stated that Pikachu's \"well-written\" appearance in the anime series led to Pikachu also having a strong personality, causing Pikachu to be seen not only as an object of cuteness, but also as a companion for fans. She believed its frequent appearances in promotional material for the series additionally helped to serve as an anchor for the series, with its presence helping to draw people into the wider world of the franchise.\n[…]\nThe multiple aspects of media featuring Pikachu, including its popularization in the anime, were described as helping elevate Pikachu's appeal to a wider audience. However, Kotaku writer Patricia Hernandez criticized Pikachu's over-representation in Pokémon-related media, highlighting Pikachu's constant usage in marketing for the franchise. She stated that Pikachu's overuse detracted from other Pokémon in the series, while also criticizing the overuse for its lack of originality.\n[…]\nPikachu on Pokemon.com\n[…]\nPikachu  at Bulbapedia, a Pokémon wiki\n[…]\nPikachu on Serebii"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pikachu",
        "situacao": "ok",
        "texto": "Pikachu (ピカチュウ, Pikachū) é uma espécie fictícia pertencente à franquia de mídia Pokémon da Nintendo. Ele apareceu pela primeira vez no Japão em 1996, nos jogos eletrônicos Pokémon Red e Pokémon Green, sendo lançados fora do Japão em 1998 como Pokémon Red and Blue, e foi criado por Atsuko Nishida a pedidos do designer principal  Ken Sugimori.\n[…]\nSendo de propriedade da Nintendo, a franquia Pokémon apareceu no Japão em 1996, nos jogos eletrônicos Pokémon Red and Green. Seu conceito básico é a captação e formação de criaturas chamadas de Pokémon em lutadores por seu treinador pokémon. Cada Pokémon tem um ou dois tipos - tais como água, fogo ou planta - que determinam os seus pontos fracos e fortes em combate. Através do treinamento, eles aprendem novos ataques e podem evoluir para um outro Pokémon.\n[…]\nQuanto ao nome Pikachu (ピカチュウ, Pikachū; em japonês), Satoshi Tajiri, criador de Pokémon, explicou em uma entrevista que ele foi criado a partir das onomatopeias japonesas de faísca (ピカピカ, pikapika) e do guincho de um rato (チュウチュウ, chūchū), assim apresentando-o como um rato elétrico; porém, alguns sites de fãs presumiram que viram este nome como uma referência para o pika.\n[…]\nA série de anime e filmes retrata as aventuras de Ash Ketchum e seu Pikachu, em suas viagens por diversas regiões do universo Pokémon.\n[…]\nPikachu é um personagem muito popular no mundo, principalmente no Japão, ao ponto de ter sido chamado como o equivalente japonês de Mickey Mouse. E considerado um ícone da cultura kawaii. Além de ser o mascote, ele é o personagem mais popular da franquia. De modo que, mostrando apenas a sua imagem, o Pokémon amarelo é facilmente reconhecido por adolescentes e adultos. Foi o oitavo personagem de ficção mais lucrativo em 2002, segundo levantamento da revista Forbes.\n[…]\n«Pikachu». no site oficial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Showdown in Pewter City (episódio)",
      "descricao": "Quinto episódio do anime Pokémon, em que Ash disputa sua primeira insígnia contra Brock, no ginásio de Pewter."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No primeiro ginásio, Ash estava perto de vencer o Onix de Brock, mas desistiu da luta antes do fim. Por quê?",
    "resposta": "Os irmãos de Brock protegeram Onix",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/EP005",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Indigo_League"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/EP005",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Indigo_League",
        "situacao": "ok",
        "texto": "Pokémon: Indigo League is the first season of the Pokémon anime series and of Pokémon the Series: The Beginning, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan on TV Tokyo from April 1, 1997, to January 21, 1999.\n[…]\nThe season follows Ash Ketchum, a 10-year-old Pokémon Trainer and aspiring Pokémon Master from Pallet Town as he receives a Pikachu from Professor Oak and travels across the Kanto region to challenge its Pokémon League while joined by Misty and Brock.\n[…]\nMaster\" by Russell Velázquez for 7 episodes, and \"Viridian City\" by Jason Paige for 4 episodes.\n[…]\nThe episodes of this season were originally released as a collection of 26 individual DVDs and VHS released by Viz Video and Pioneer Entertainment between December 13, 1998, and January 23, 2001.\n[…]\nBetween 2006 and 2008, Viz Media re-released episodes of the season in three DVD compilations. The first twenty-six episodes of this season were released on DVD on November 21, 2006, with \"Beauty and the Beach\", being skipped. The second US season came out on November 13, 2007, with \"Princess vs. Princess\" and \"The Purr-fect Hero\" being moved onto the third part, to match the airing order. The third and final part was released on February 12, 2008.\n[…]\nOn November 5, 2013, Viz Media and Warner Home Video re-issued the first 26 episodes on DVD with new packaging.\n[…]\nViz Media and Warner Home Video released Pokémon: Indigo League – The Complete Collection on DVD in the United States on October 28, 2014. This release contains all three volumes of the series, consisting of 78 episodes in all, although this set lacks the episode \"Holiday Hi-Jynx\", which was banned by The Pokémon Company International in 2014 due to the controversial presence of Jynx."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Indigo_League",
        "situacao": "ok",
        "texto": "Pokémon: Liga Índigo (Pokémon: Indigo League), é a primeira temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e da série Pokémon, a Série: O Início (Pokémon the Series: The Beginning), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original Series. Originalmente, foi exibida no Japão pela TV Tokyo de 1º de abril de 19\n[…]\nEsta temporada acompanha as primeiras aventuras de Ash Ketchum, um aspirante a Treinador Pokémon de 10 anos da cidade de Pallet, que recebe um Pikachu do Professor Carvalho para começar sua jornada. Ash almeja competir na Liga Kanto, coletando Insígnias de Ginásio conquistadas dos Líderes de Ginásio da região. No início da temporada, ele se junta a Misty, a Líder de Ginásio de Cerulean, e Brock, o Líder de Ginásio de Pewter.\n[…]\nA temporada também estava disponível no aplicativo e site Pokémon TV até janeiro de 2024, quando foi desativado. A partir de 6 de dezembro de 2024, os episódios começam a ser carregados no canal do Pokémon TV no YouTube todos os domingos, segundas, quartas, sextas e sábados.\n[…]\nEntre 2006 e 2008, a Viz Media relançou os episódios da temporada em três coletâneas em DVD. Os primeiros vinte e seis episódios desta temporada foram lançados em DVD em 21 de novembro de 2006, com a exceção de \"Beauty and the Beach\". A segunda temporada americana foi lançada em 13 de novembro de 2007, com os episódios \"Princess vs. Princess\" e \"The Purr-fect Hero\" sendo transferidos para a terceira parte, para corresponder à ordem de exibição original.\n[…]\nEm 5 de novembro de 2013, a Viz Media e a Pokémon: Indigo League - The Complete Collection relançaram os primeiros 26 episódios em DVD com nova embalagem. A Viz Media e a Warner Home Video lançaram \"Pokémon: Liga Índigo - A Coleção Completa\" em DVD nos Estados Unidos em 28 de outubro de 2014.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Pokémon Scent-sation! (episódio)",
      "descricao": "Episódio da primeira temporada do anime Pokémon em que Ash disputa a insígnia de Erika, no ginásio de Celadon."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Ash é proibido de entrar no ginásio de Erika, em Celadon, por ter zombado dos perfumes da loja dela. Como ele consegue voltar lá?",
    "resposta": "Disfarçado de menina",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/EP026",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Indigo_League"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/EP026",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Indigo_League",
        "situacao": "ok",
        "texto": "Pokémon: Indigo League is the first season of the Pokémon anime series and of Pokémon the Series: The Beginning, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan on TV Tokyo from April 1, 1997, to January 21, 1999.\n[…]\nThe episodes were produced by Oriental Light and Magic, with Takeshi Shudo as head writer and Kunihiko Yuyama as chief director. Masamitsu Hidaka served as the supervising director for the series until the beginning of Pokémon: Battle Frontier.\n[…]\nThe Japanese opening song is \"Aim to Be a Pokémon Master\" (めざせポケモンマスター, Mezase Pokémon Masutā) by Rika Matsumoto for all 82 episodes.\n[…]\nThe ending songs at the end of the episode are \"Kanto Pokérap\" by James \"D Train\" Willams and Babi Floyd for 52 episodes, 32 Pokémon on Monday thru Wednesday, 30 Pokémon on Thursday, and 24 Pokémon on Friday, \"My Best Friends\" by Michael Whalen during episode 18 and for 6 episodes, \"Double Trouble\" by Rachael Lillis, Eric Stuart and Maddie Blaustien for 5 episodes, \"What Kind of Pokémon Are You?\" by Joshua Tyler for 4 episodes, \"Together Forever\" by J.P. Hartmann for 6 episodes, \"2.B.A.\n[…]\nViz Media and Warner Home Video released Pokémon: Indigo League – The Complete Collection on DVD in the United States on October 28, 2014. This release contains all three volumes of the series, consisting of 78 episodes in all, although this set lacks the episode \"Holiday Hi-Jynx\", which was banned by The Pokémon Company International in 2014 due to the controversial presence of Jynx.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)\n[…]\nPokémon: Indigo League at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Indigo_League",
        "situacao": "ok",
        "texto": "Pokémon: Liga Índigo (Pokémon: Indigo League), é a primeira temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e da série Pokémon, a Série: O Início (Pokémon the Series: The Beginning), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original Series. Originalmente, foi exibida no Japão pela TV Tokyo de 1º de abril de 19\n[…]\nOs episódios foram produzidos pela Oriental Light and Magic, com Takeshi Shudo como roteirista principal e Kunihiko Yuyama como diretor-chefe. Masamitsu Hidaka atuou como diretor supervisor da série até o início de Pokémon: Battle Frontier.\n[…]\nEm sua primeira semana sob a égide do Kids' WB, Pokémon conseguiu atingir uma classificação de 3,9 (uma porcentagem de quanto um determinado grupo demográfico de pessoas está assistindo), alcançando 3,1 milhões de telespectadores em setembro, e resultando na declaração da Nielsen de que \"metade dos meninos (de 6 a 11 anos) assistindo TV (às 10h) estão assistindo \"Pokémon\" em novembro daquele ano.\n[…]\nA temporada também estava disponível no aplicativo e site Pokémon TV até janeiro de 2024, quando foi desativado. A partir de 6 de dezembro de 2024, os episódios começam a ser carregados no canal do Pokémon TV no YouTube todos os domingos, segundas, quartas, sextas e sábados.\n[…]\nEm 5 de novembro de 2013, a Viz Media e a Pokémon: Indigo League - The Complete Collection relançaram os primeiros 26 episódios em DVD com nova embalagem. A Viz Media e a Warner Home Video lançaram \"Pokémon: Liga Índigo - A Coleção Completa\" em DVD nos Estados Unidos em 28 de outubro de 2014.\n[…]\nEste lançamento contém os três volumes da série, totalizando 78 episódios, embora este conjunto não inclua o episódio \"Holiday Hi-Jynx\", que foi banido pela The Pokémon Company International em 2014 devido à presença controversa de Jynx.\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "The Battle of the Badge (episódio)",
      "descricao": "Episódio da primeira temporada do anime Pokémon em que Ash conquista a Insígnia Terra no ginásio de Viridian."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No anime, Giovanni não está no ginásio de Viridian quando Ash vai disputar sua oitava insígnia de Kanto. Quem Ash enfrenta lá, no lugar dele?",
    "resposta": "Jessie e James",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/EP063",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Indigo_League"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/EP063",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Indigo_League",
        "situacao": "ok",
        "texto": "Pokémon: Indigo League is the first season of the Pokémon anime series and of Pokémon the Series: The Beginning, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan on TV Tokyo from April 1, 1997, to January 21, 1999.\n[…]\nThe episodes were produced by Oriental Light and Magic, with Takeshi Shudo as head writer and Kunihiko Yuyama as chief director. Masamitsu Hidaka served as the supervising director for the series until the beginning of Pokémon: Battle Frontier.\n[…]\nThe anime-size version serves as the ending theme for 52 episodes, while its shortened version serves as the ending theme for 26 episodes.\n[…]\nThe ending songs at the end of the episode are \"Kanto Pokérap\" by James \"D Train\" Willams and Babi Floyd for 52 episodes, 32 Pokémon on Monday thru Wednesday, 30 Pokémon on Thursday, and 24 Pokémon on Friday, \"My Best Friends\" by Michael Whalen during episode 18 and for 6 episodes, \"Double Trouble\" by Rachael Lillis, Eric Stuart and Maddie Blaustien for 5 episodes, \"What Kind of Pokémon Are You?\" by Joshua Tyler for 4 episodes, \"Together Forever\" by J.P. Hartmann for 6 episodes, \"2.B.A.\n[…]\nMaster\" by Russell Velázquez for 7 episodes, and \"Viridian City\" by Jason Paige for 4 episodes.\n[…]\nViz Media and Warner Home Video released Pokémon: Indigo League – The Complete Collection on DVD in the United States on October 28, 2014. This release contains all three volumes of the series, consisting of 78 episodes in all, although this set lacks the episode \"Holiday Hi-Jynx\", which was banned by The Pokémon Company International in 2014 due to the controversial presence of Jynx.\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Indigo_League",
        "situacao": "ok",
        "texto": "Pokémon: Liga Índigo (Pokémon: Indigo League), é a primeira temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e da série Pokémon, a Série: O Início (Pokémon the Series: The Beginning), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original Series. Originalmente, foi exibida no Japão pela TV Tokyo de 1º de abril de 19\n[…]\nEsta temporada acompanha as primeiras aventuras de Ash Ketchum, um aspirante a Treinador Pokémon de 10 anos da cidade de Pallet, que recebe um Pikachu do Professor Carvalho para começar sua jornada. Ash almeja competir na Liga Kanto, coletando Insígnias de Ginásio conquistadas dos Líderes de Ginásio da região. No início da temporada, ele se junta a Misty, a Líder de Ginásio de Cerulean, e Brock, o Líder de Ginásio de Pewter.\n[…]\nOs episódios foram produzidos pela Oriental Light and Magic, com Takeshi Shudo como roteirista principal e Kunihiko Yuyama como diretor-chefe. Masamitsu Hidaka atuou como diretor supervisor da série até o início de Pokémon: Battle Frontier.\n[…]\nA versão em tamanho anime serve como tema de encerramento de 52 episódios, enquanto sua versão reduzida serve como tema de encerramento de 26 episódios.\n[…]\nAs músicas de encerramento de cada episódio são: \"Kanto Pokérap\", de James \"D Train\" Williams e Babi Floyd (52 episódios), \"32 Pokémon on Monday thru Wednesday, 30 Pokémon on Thursday, and 24 Pokémon on Friday\", \"My Best Friends\", de Michael Whalen (durante o episódio 18 e em 6 episódios), \"Double Trouble\", de Rachael Lillis, Eric Stuart e Maddie Blaustien (em 5 episódios), \"What Kind of Pokémon Are You?\", de Joshua Tyler (em 4 episódios), \"Together Forever\", de J.P.\n[…]\nHartmann (em 6 episódios), \"2.B.A. Master\", de Russell Velázquez (em 7 episódios) e \"Viridian City\", de Jason Paige (em 4 episódios).\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Togepi de Misty",
      "descricao": "Togepi que nasce de um ovo encontrado por Ash no anime Pokémon e passa a viver no colo de Misty."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Togepi do anime nasceu de um ovo encontrado por Ash, mas passou a tratar Misty como mãe. Por quê?",
    "resposta": "Ela foi a primeira que ele viu",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Misty%27s_Togepi",
      "https://en.wikipedia.org/wiki/Misty_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Misty%27s_Togepi",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Misty_(Pok%C3%A9mon)",
        "situacao": "ok",
        "texto": "Misty, known as Kasumi (Japanese: カスミ) in Japan, is a fictional character in the Pokémon franchise owned by Nintendo and created by Satoshi Tajiri. She has appeared as a Gym Leader in the Pokémon video games Pokémon Red and Blue, Pokémon Gold and Silver and their respective remakes.\n[…]\nAs a result, she considers Misty to be the one character she has voiced who most represents herself. Iizuka keeps track of her character's promotional appearances in merchandise and other material, additionally providing fans with insights on possible future cameos in the anime series.\n[…]\nThe Misty character that appears in the Electric Tale of Pikachu manga series, which is loosely based on the anime, is similar to the Misty in the anime, while the Misty in Pokémon Adventures is similar to the Misty in the video games. She appears throughout Electric Tale of Pikachu, traveling on occasion with Ash.\n[…]\nThe book The Japanification of Children's Popular Culture described Misty's portrayal in the anime as a mother figure, calling her a \"nurturing component\" for the original trio of herself, Ash and Brock. It further described her as an \"unusually 'complete' girl of the anime world\", noting both her feminine sentimentality and her \"explosive rage\".\n[…]\nAnime Classics Zettai!: 100 Must-See Japanese Animation Masterpieces praised the character as being \"particularly nuanced\" and described her as contributing heavily to the series' appeal. Pikachu's Global Adventure: The Rise and Fall of Pokémon stated that though the anime focused on Ash, Misty was a distinctly significant character especially to young female consumers, neither \"butch\" nor \"dizzily feminine\", seemingly \"carefully constructed to appeal to preadolescent girls\".\n[…]\nMisty (anime) on Bulbapedia"
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
    "indice": 22,
    "ancora": {
      "nome": "Psyduck de Misty",
      "descricao": "Psyduck desastrado que acompanha Misty no anime Pokémon, sempre com dor de cabeça."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Misty nunca quis o Psyduck desastrado que vive saindo da Poké Bola dela. Como ele acabou ficando com ela?",
    "resposta": "Entrou sem querer numa Poké Bola dela",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Misty%27s_Psyduck",
      "https://en.wikipedia.org/wiki/Misty_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Misty%27s_Psyduck",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Misty_(Pok%C3%A9mon)",
        "situacao": "ok",
        "texto": "Misty, known as Kasumi (Japanese: カスミ) in Japan, is a fictional character in the Pokémon franchise owned by Nintendo and created by Satoshi Tajiri. She has appeared as a Gym Leader in the Pokémon video games Pokémon Red and Blue, Pokémon Gold and Silver and their respective remakes.\n[…]\nMisty aims to be a world-class Water-type Pokémon Trainer despite her older sisters' ridicule.\n[…]\nAnime Classics Zettai!: 100 Must-See Japanese Animation Masterpieces praised the character as being \"particularly nuanced\" and described her as contributing heavily to the series' appeal. Pikachu's Global Adventure: The Rise and Fall of Pokémon stated that though the anime focused on Ash, Misty was a distinctly significant character especially to young female consumers, neither \"butch\" nor \"dizzily feminine\", seemingly \"carefully constructed to appeal to preadolescent girls\".\n[…]\nIt added that, unlike other aggressive female characters in the series, Misty did not sacrifice her femininity to succeed, making the character further popular with young American women, a contrast to Japanese children who focused more on the individual Pokémon species to identify with.\n[…]\nIn studies on the reactions boys and girls had to the concept of Misty as a heroine in the series, girls accepted it and were eager to associate themselves with the character, while boys attempted to belittle her efforts. On the other hand, children of both genders felt the character alongside Brock gave Ash a sense of identity and moral support, which researchers attributed to the concept of group identity.\n[…]\nIn 2013, nearing Halloween, Archie Comics illustrator Ryan Jampole utilized Misty as one of the 31 costumes for the character Roll from the Archie Comics adaptation of the Mega Man franchise.\n[…]\nMisty (anime) on Bulbapedia"
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
    "indice": 23,
    "ancora": {
      "nome": "Drake (Ilhas Laranja)",
      "descricao": "Líder da Elite Laranja no anime Pokémon, o treinador que Ash derrota na final da Liga Laranja."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na final da Liga Laranja, Ash vence Drake, o líder da Elite Laranja. Que dragão é o pokémon mais forte do time de Drake?",
    "resposta": "Dragonite",
    "distratores": [
      "Gyarados",
      "Aerodactyl",
      "Kingdra"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Drake_(Orange_Crew)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Adventures_in_the_Orange_Islands"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Drake_(Orange_Crew)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Adventures_in_the_Orange_Islands",
        "situacao": "ok",
        "texto": "Pokémon: Adventures in the Orange Islands is the second season of the Pokémon anime series and the final season of Pokémon the Series: The Beginning, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan from January 28 to October 7, 1999, on TV Tokyo, and in the United States from December 4, 1999, to October 14, 2000, on The WB/Kids' WB.\n[…]\nThe season follows Ash Ketchum as he travels across the Orange Islands to challenge its Pokémon League while joined by Misty and Tracey Sketchit, a Pokémon Watcher.\n[…]\nIts shortened version serves as the ending theme, and \"Pokémon World\" by Russell Velázquez for 33 episodes and for all 36 episodes. Its shortened version serves as the ending theme. The ending songs at the end of the episode are \"My Best Friends\" by Michael Whalen for 6 episodes, \"Double Trouble\" by Rachael Lillis, Eric Stuart, and Maddie Blaustein for 6 episodes, \"What Kind of Pokémon Are You?\" by Joshua Tyler for 4 episodes, \"Together Forever\" by J.P. Hartmann for 7 episodes, \"2.B.A.\n[…]\nMaster\" by Russell Velázquez for 9 episodes, and \"Viridian City\" by Jason Paige for 7 episodes from Pikachu's Jukebox. Johto predicted the English version of \"Type: Wild\", the ending song from Pokémon Encore performed by Robbie Danzie.\n[…]\nViz Media and Warner Home Video released Pokémon: Adventures in the Orange Islands – The Complete Collection on DVD in the United States on October 11, 2016.\n[…]\nOlder home video releases refer to the season as Pokémon: Adventures on the Orange Islands. Newer DVD releases and the official Pokémon website refer to the season as Pokémon: Adventures in the Orange Islands.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Adventures_in_the_Orange_Islands",
        "situacao": "ok",
        "texto": "Pokémon: Aventuras nas Ilhas Laranja (Pokémon: Adventures in the Orange Islands), é a segunda temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e da série Pokémon, a Série: O Início (Pokémon the Series: The Beginning), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original Series.\n[…]\nEsta temporada acompanha as aventuras do Treinador Pokémon de dez anos, Ash Ketchum, e seu parceiro Pikachu, enquanto coletam Insígnias de Ginásio nas Ilhas Laranja, também conhecidas como Arquipélago Laranja, para que possam competir na Liga Laranja. Ao longo do caminho, Ash é acompanhado por Misty e Tracey Sketchit, um Observador Pokémon.\n[…]\nJohto previu a versão em inglês de \"Type: Wild\", a música final de Pokémon Encore realizado por Robbie Danzie. As músicas de encerramento no Brasil são \"Meus Melhores Amigos\", \"Muitos Problemas (Equipe Rocket)\", \"Que Tipo de Pokémon Que é Você?\", \"Juntos Para Sempre\", \"Para Ser um Mestre\", \"A Cidade de Verídian\".\n[…]\nNo Brasil, a temporada também está disponível no Amazon Prime Video, no canal Pokémon TV do YouTube e Pluto TV. Em Portugal, a temporada também está disponível no canal Pokémon TV do YouTube.\n[…]\nA Viz Media lançou um box contendo os três DVDs em 2008. A Viz Media e a Warner Bros. Discovery Home Entertainment lançaram Pokémon: Adventures in the Orange Islands – The Complete Collection em DVD nos Estados Unidos em 11 de outubro de 2016.\n[…]\nLançamentos mais antigos em home media se referem à temporada como Pokémon: Adventures in the Orange Islands. Lançamentos mais recentes em DVD e o site oficial de Pokémon se referem à temporada como Pokémon: Adventures in the Orange Islands.\n[…]\nSite oficial de Pokémon nos EUA (em inglês)\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Ilha Pinkan",
      "descricao": "Ilha das Ilhas Laranja, no anime Pokémon, reserva protegida onde os pokémon selvagens são cor-de-rosa."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na Ilha Pinkan, nas Ilhas Laranja, os pokémon selvagens são todos cor-de-rosa. O que os deixa dessa cor?",
    "resposta": "Comer as frutas Pinkan",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pinkan_Island",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Adventures_in_the_Orange_Islands"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pinkan_Island",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Adventures_in_the_Orange_Islands",
        "situacao": "ok",
        "texto": "Pokémon: Adventures in the Orange Islands is the second season of the Pokémon anime series and the final season of Pokémon the Series: The Beginning, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan from January 28 to October 7, 1999, on TV Tokyo, and in the United States from December 4, 1999, to October 14, 2000, on The WB/Kids' WB.\n[…]\nThe season follows Ash Ketchum as he travels across the Orange Islands to challenge its Pokémon League while joined by Misty and Tracey Sketchit, a Pokémon Watcher.\n[…]\nIts shortened version serves as the ending theme, and \"Pokémon World\" by Russell Velázquez for 33 episodes and for all 36 episodes. Its shortened version serves as the ending theme. The ending songs at the end of the episode are \"My Best Friends\" by Michael Whalen for 6 episodes, \"Double Trouble\" by Rachael Lillis, Eric Stuart, and Maddie Blaustein for 6 episodes, \"What Kind of Pokémon Are You?\" by Joshua Tyler for 4 episodes, \"Together Forever\" by J.P. Hartmann for 7 episodes, \"2.B.A.\n[…]\nMaster\" by Russell Velázquez for 9 episodes, and \"Viridian City\" by Jason Paige for 7 episodes from Pikachu's Jukebox. Johto predicted the English version of \"Type: Wild\", the ending song from Pokémon Encore performed by Robbie Danzie.\n[…]\nViz Media and Warner Home Video released Pokémon: Adventures in the Orange Islands – The Complete Collection on DVD in the United States on October 11, 2016.\n[…]\nOlder home video releases refer to the season as Pokémon: Adventures on the Orange Islands. Newer DVD releases and the official Pokémon website refer to the season as Pokémon: Adventures in the Orange Islands.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Adventures_in_the_Orange_Islands",
        "situacao": "ok",
        "texto": "Pokémon: Aventuras nas Ilhas Laranja (Pokémon: Adventures in the Orange Islands), é a segunda temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e da série Pokémon, a Série: O Início (Pokémon the Series: The Beginning), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original Series.\n[…]\nEsta temporada acompanha as aventuras do Treinador Pokémon de dez anos, Ash Ketchum, e seu parceiro Pikachu, enquanto coletam Insígnias de Ginásio nas Ilhas Laranja, também conhecidas como Arquipélago Laranja, para que possam competir na Liga Laranja. Ao longo do caminho, Ash é acompanhado por Misty e Tracey Sketchit, um Observador Pokémon.\n[…]\nAs músicas de abertura em inglês são \"Pokémon Theme\" por Jason Paige para 3 episódios. Sua versão reduzida serve como tema de encerramento, e \"Pokémon World\" por Russell Velázquez para 33 episódios e para todos 36 episódios. Sua versão reduzida serve como tema de encerramento. A música de abertura no Brasil é \"Tema de Pokémon\", de Janaína Bianchi e \"Mundo Pokémon\" de Nil Bernardes e Herlom Oliveira. A música de abertura em Portugal é \"Vou Apanhá-los Todos!\" de André Maia e \"Mundo Pokémon\".\n[…]\nA Viz Media lançou um box contendo os três DVDs em 2008. A Viz Media e a Warner Bros. Discovery Home Entertainment lançaram Pokémon: Adventures in the Orange Islands – The Complete Collection em DVD nos Estados Unidos em 11 de outubro de 2016.\n[…]\nLançamentos mais antigos em home media se referem à temporada como Pokémon: Adventures in the Orange Islands. Lançamentos mais recentes em DVD e o site oficial de Pokémon se referem à temporada como Pokémon: Adventures in the Orange Islands.\n[…]\nSite oficial de Pokémon nos EUA (em inglês)\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Prima (anime)",
      "descricao": "Integrante da Elite dos Quatro de Kanto que Ash conhece nas Ilhas Laranja, no anime Pokémon."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Nas Ilhas Laranja, Ash conhece Prima, integrante da Elite dos Quatro de Kanto. A qual treinadora dos jogos ela corresponde?",
    "resposta": "Lorelei",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Prima",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Prima",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nIn addition to the main series and the movies, the anime series has also had various full-length specials and TV shorts. Many of these specials center around legendary Pokémon or one or more of the main characters that are separate from the main cast during its corresponding series, while the sporadically made later side story episodes typically air as special episodes.\n[…]\nThe following table lists the annual content revenue from Pokémon anime media in Japan, as reported by market research firm Hakuhodo.\n[…]\nCarl Kimlinger, in an August 2008 review of the Diamond and Pearl series for Anime News Network, gave the dubbed series an overall grade of C.\n[…]\nIn TV Asahi's poll of the \"Top 100 Anime\", Pokémon came in 38th. Paste ranked the series at 44th place in its October 2018 list of \"The 50 Best Anime Series of All Time\", with Sarra Sedghi writing: \"To the joy of '90s kids everywhere, Pokémon helped solidify anime (and, hopefully, good punnery) in the West\".\n[…]\nThe series is considered to be one of the first anime series on television to reach a high level of mainstream success with Western audiences. It has also been credited with helping the game series to achieve a higher degree of popularity, and vice versa.\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nA franquia de anime consiste em oito séries sequenciais no Japão, cada uma se baseia em uma parcela principal da série de jogos eletrônicos Pokémon. Nas transmissões internacionais, essas oito séries são divididas em 28 temporadas. A série originalmente seguiu Ash Ketchum, um jovem treinador de criaturas fictícias chamadas Pokémon.\n[…]\nNo Japão, Pokémon é atualmente transmitido como oito séries sequenciais, cada uma baseada em uma parcela da principal série de jogos eletrônicos. O anime é exibido continuamente durante todo o ano, com folgas regulares para eventos esportivos e especiais de televisão.\n[…]\nEm uma entrevista de 2018, os criadores de Detective Pikachu, que apresenta um Pikachu falante, revelaram que a intenção original para o anime era que os Pokémon falassem, mas a OLM, Inc. não conseguiu desenvolver um conceito que a Game Freak, desenvolvedora dos jogos principais, aceitasse.\n[…]\nAlém desse episódio, o anime foi banido na Turquia, após duas crianças, uma de sete anos e outra de quatro, saltarem da sacada de seus apartamentos em imitação aos personagens do desenho e também na Arábia Saudita, pois o governo alegou que ele estimulava a competição entre as crianças.\n[…]\nA série é considerada uma das primeiras séries de anime na televisão a alcançar um alto nível de sucesso convencional com o público ocidental. Também foi creditada por ajudar a série de jogos a alcançar um maior grau de popularidade e vice-versa.\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Professora Ivy",
      "descricao": "Pesquisadora pokémon da ilha Valencia, nas Ilhas Laranja, no anime Pokémon, que estuda as variações regionais dos pokémon."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No começo das Ilhas Laranja, um companheiro de Ash decide ficar no laboratório da Professora Ivy, na ilha Valencia. Quem?",
    "resposta": "Brock",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Ivy",
      "https://en.wikipedia.org/wiki/Brock_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Professor_Ivy",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brock_(Pok%C3%A9mon)",
        "situacao": "ok",
        "texto": "Brock, known as Takeshi (タケシ) in Japan, is a fictional character in the Pokémon franchise owned by Nintendo, Game Freak, and Creatures. In the Pokémon video games, he is the Gym Leader of Pewter City in the Kanto region and mainly uses Rock-type Pokémon. In the anime series, Ash first battles him and then invites Brock to accompany him on his journey so that Brock can become a Pokémon Breeder.\n[…]\nFor the anime, Brock was designed by Atsuko Nishida. In the anime, Brock was one of the companions to protagonist Ash Ketchum. However, he was eventually replaced with the character Tracey Sketchit. His removal was controversial, leading to fan outcry that caused him to be reintroduced to the anime.\n[…]\nFurthermore, the company specifically included Tracey, wanting to include a \"tall, Anglo-Saxon looking person to be on the safe side.\" They ultimately decided to introduce Brock again due to the lack of complaints and their personal affinity for him. He has since been one of the most recurring characters in the show.\n[…]\nIn the Pokémon anime, Brock aspires to be the greatest Pokémon Breeder in the world, but remains as the Pewter City Gym Leader to take care of his nine siblings. After he is defeated by Ash, he gives Ash the badge, despite Ash thinking he didn't deserve it. Brock ultimately joins Ash so that he can pursue his dream of being a Pokémon Breeder. He eventually leaves his friends in the Orange Islands series to join Professor Felina Ivy, who he is attracted to, and was replaced by Tracey Sketchit.\n[…]\nThe removal of Brock, whose skin is darker, also had fans concerned for the lack of skin color diversity. Fellow Kotaku writer Kenneth Shepard wrote that, despite Ash having other companions, ending the series by reuniting Ash with his original companions Brock and Misty was fitting. Brock also served as an inspiration for baby names, leading to a rise in the use of the name Brock."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brock",
        "situacao": "ok",
        "texto": "Brock, conhecido no Japão como Takeshi (タケシ) é um personagem fictício da franquia Pokémon, pertencente à Nintendo, Game Freak e Creatures. Nos jogos eletrônicos de Pokémon, ele é o Líder de Ginásio da Cidade de Pewter, na região de Kanto, e usa principalmente Pokémon do tipo Pedra. No anime, Ash o enfrenta pela primeira vez e depois convida Brock para acompanhá-lo em sua jornada para que Brock pos\n[…]\nPara o anime, Brock foi desenhado por Atsuko Nishida. No anime, Brock era um dos companheiros do protagonista Ash Ketchum. No entanto, ele acabou sendo substituído pelo personagem Tracey Sketchit. Sua remoção foi controversa, levando a protestos dos fãs que fizeram com que ele fosse reintroduzido no anime.\n[…]\nNo anime Pokémon, Brock aspira ser o maior Criador Pokémon do mundo, mas permanece como Líder do Ginásio de Pewter para cuidar de seus nove irmãos. Após ser derrotado por Ash, ele entrega a insígnia a Ash, apesar de Ash achar que ele não a merecia. Brock acaba se juntando a Ash para que ele possa perseguir seu sonho de ser um Criador Pokémon.\n[…]\nEle eventualmente deixa seus amigos na série das Ilhas Laranja para se juntar à Professora Philena Ivy, por quem se sente atraído, e é substituído por Tracey Sketchit. Brock eventualmente se junta a Ash novamente, tendo deixado Ivy por razões desconhecidas, e viaja com ele e Misty para Johto. Desde então, ele partiu e se reuniu com Ash e outros em Hoenn e Sinnoh.\n[…]\nA remoção de Brock, cuja pele é mais escura, também preocupou os fãs com a falta de diversidade de cores de pele. O também escritor da Kotaku, Kenneth Shepard, escreveu que, apesar de Ash ter outros companheiros, terminar a série reunindo Ash com seus companheiros originais, Brock e Misty, foi apropriado. Brock também serviu de inspiração para nomes de bebês, levando a um aumento no uso do nome Brock.\n[…]\nBrock na Serebii (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Todd Snap",
      "descricao": "Fotógrafo de pokémon que aparece no anime Pokémon ao lado de Ash e é o protagonista do jogo Pokémon Snap."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O fotógrafo Todd, que encontra Ash no anime em busca da foto perfeita, também é o protagonista de qual jogo para Nintendo 64?",
    "resposta": "Pokémon Snap",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Todd_Snap",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Todd_Snap",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "Pokémon Snap is a 1999 photography video game developed by HAL Laboratory and published by Nintendo for the Nintendo 64. It was first released in Japan in March 1999 and was later released in July 1999 in North America and in September 2000 for PAL regions. It is a spin-off game in the Pokémon series, being one of the first console-based games for it, and featuring many Pokémon rendered for the fi\n[…]\nOriginally announced as a Nintendo 64DD title, the development of Pokémon Snap was moved to the Nintendo 64 due to the 64DD's delays. The gameplay is similar to other first-person games, viewing from the perspective of protagonist Todd Snap as he moves automatically on a rail. The objective of the game is to take pictures of Pokémon with an in-game camera, using items such as apples and \"pester balls\" to achieve better shots.\n[…]\nThe game features 63 of the original generation of 151 Pokémon.\n[…]\nNintendo, partnering with LodgeNet, included Nintendo 64s with Pokémon Snap for more than 86,000 hotels with the intent of capitalizing on the Pokémon franchise for the holiday travel season. Nintendo displayed Pokémon Snap at a Pokémon event called \"Pokémon League Summer Training Tour\". The game's protagonist, Todd Snap, also briefly appeared in the Pokémon anime series shortly before the game's release.\n[…]\nOn June 24, 2022, Pokémon Snap was rereleased for the Nintendo Classics service.\n[…]\nThomas called the photo sharing feature a positive of its release, while criticizing its limited selection of Pokémon, similar to the review of the Nintendo 64 version from IGN. He added that a sequel updated to include Wii controls and Pokémon from recent generations would be welcome. IGN included Pokémon Snap in its wish list of Nintendo 3DS remakes, commenting that it could take advantage of the 3DS' ability to produce stereoscopic 3D photos would be an enjoyable feature for Pokémon Snap.\n[…]\nPokémon Snap at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Snap",
        "situacao": "ok",
        "texto": "Pokémon Snap (ポケモンスナップ, Pokemon Sunappu) é um jogo da série Pokémon, lançado em 1999 para Nintendo 64. É um dos primeiros spin-offs da série. Nele, o jogador controla um fotógrafo, Todd Snap, cujo objetivo é fotografar cada Pokémon no melhor ângulo.\n[…]\nO objetivo do jogo é fotografar cada pokémon no melhor ângulo possível, semelhante a um jogo de tiro. É possível tirar sessenta fotos da mesma fase e depois escolher a melhor para dar de presente ao Prof. Carvalho, que avalia o estado da foto e dá pontos ao jogador para destravar recursos no jogo. Os critérios de avaliação são:\n[…]\nTamanho: o Pokémon não pode estar muito pequeno nem com cortes na fotografia.\n[…]\nOutro Pokémon: caso haja dois ou mais pokémons em uma foto e caso estes estejam bons, pontos extras são dados.\n[…]\nTodd, um fotógrafo de pokémons, é chamado pelo Prof. Carvalho para ir a uma ilha para ajudá-lo com uma pesquisa. Ele precisa de qualidades nas fotos para ajudá-lo a entender melhor o comportamento dos Pokémon. Em uma ilha, onde os Pokémon não são perturbados por humanos, Todd viaja pela ilha e fotografa os Pokémon em cima de seu buggy chamado Zero-One.\n[…]\nPokémon Snap apresenta apenas sete fases, mas é necessário voltar a algumas fases para ajudar ainda mais o Prof. Carvalho e encontrar mais coisas interessantes, principalmente achar e fotografar as \"Marcas de Pokémon\", coisas comuns que têm a forma dos Pokémon.\n[…]\nPokémon Snap foi citado como um jogo bom e inovador, mas recebeu muitas críticas por conter apenas 63 dos 151 Pokémon existentes na época.\n[…]\nEm abril de 2016, Pokémon Snap foi relançado no Japão como um título do Virtual Console do Wii U. Esta versão foi relançada na Europa e Austrália, em agosto do mesmo ano, e na América do Norte em 5 de janeiro de 2017.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Harrison",
      "descricao": "Treinador de Hoenn que elimina Ash do torneio da Liga de Johto, a Conferência Prata, no anime Pokémon."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No torneio da Liga de Johto, o treinador Harrison elimina Ash com um pokémon de fogo que derrota o Charizard dele na última luta. Que pokémon é esse?",
    "resposta": "Blaziken",
    "distratores": [
      "Typhlosion",
      "Arcanine",
      "Magmar"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Harrison",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Master_Quest"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Harrison",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Master_Quest",
        "situacao": "ok",
        "texto": "Pokémon: Master Quest is the fifth season of the Pokémon anime series and the third and final season of Pokémon the Series: Gold and Silver, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan from August 9, 2001, to November 14, 2002, on TV Tokyo, in the United States from September 14, 2002, to October 25, 2003, on Kids' WB.\n[…]\nIt was the first season of Pokémon to be digitally animated as opposed to cel animation, starting with the episode \"Here's Lookin' at You, Elekid\".\n[…]\nThe season follows Ash Ketchum as he continues travelling across the Johto region with Misty and Brock.\n[…]\nThe Japanese opening songs are \"Aim to be a Pokémon Master\" (めざせポケモンマスター 2001, Mezase Pokémon Masutā 2001) by Whiteberry for 29 episodes, and \"Ready Go!\" by Naomi Tamura for 36 episodes. The ending songs are \"Face Forward Team Rocket!\" (前向きロケット団!, Maemuki Roketto-dan!) by Team Rocket trio for 29 episodes, and \"Pocket-ering Monster-ing\" (ポケッターリ・モンスターリ, Pokettāri Monsutāri) by Kana for 36 episodes. The English opening song is \"Believe in Me\" by David Rolfe.\n[…]\nViz Media and Warner Home Video released Pokémon: Master Quest – The Complete Collection on DVD in the United States on October 11, 2016.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Master_Quest",
        "situacao": "ok",
        "texto": "Pokémon: Master Quest, é a quinta temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a terceira temporada de Pokémon, a Série: Ouro e Prata (Pokémon the Series: Gold and Silver), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original Series.\n[…]\nA temporada acompanha as aventuras de Ash Ketchum e Pikachu enquanto eles coletam Insígnias de Ginásio na região de Johto para poderem competir na Liga Johto. Ao longo do caminho, Ash recebe a companhia de Misty e Brock.\n[…]\nAs canções de abertura japonesas são \"Aim to be a Pokémon Master\" (めざせポケモンマスター 2001, Mezase Pokémon Masutā 2001) de Whiteberry para 29 episódios, e \"Ready Go!\" por Naomi Tamura por 36 episódios. As músicas de encerramento são \"Face Forward Team Rocket!\" (前向きロケット団!, Maemuki Roketto-dan!) pelo trio Team Rocket por 29 episódios, e \"Pocket-ering Monster-ing\" (ポケッターリ・モンスターリ, Pokettāri Monsutāri) por Kana por 36 episódios. A música de abertura em inglês é \"Believe in Me\" de David Rolfe.\n[…]\nNos Estados Unidos, a temporada teve sua exibição na Netflix, Hulu, Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nNo Brasil, a temporada também está disponível na Amazon Prime Video, no canal Pokémon TV do YouTube e Pluto TV. Em Portugal, a temporada também está disponível no canal Pokémon TV do YouTube.\n[…]\nA Viz Media e a Warner Home Video lançaram Pokémon: Master Quest – The Complete Collection em DVD nos Estados Unidos em 11 de outubro de 2016.\n[…]\nSite oficial de Pokémon nos EUA (em inglês)\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Gary Carvalho",
      "descricao": "Neto do Professor Carvalho e rival de Ash Ketchum no anime Pokémon, chamado Shigeru no Japão."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No torneio da Liga de Johto, Ash finalmente vence Gary numa luta decidida pelo Charizard dele contra qual pokémon do rival?",
    "resposta": "Blastoise",
    "distratores": [
      "Feraligatr",
      "Gyarados",
      "Kingdra"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Gary_Oak",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Master_Quest"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Gary_Oak",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Master_Quest",
        "situacao": "ok",
        "texto": "Pokémon: Master Quest is the fifth season of the Pokémon anime series and the third and final season of Pokémon the Series: Gold and Silver, known in Japan as Pocket Monsters (ポケットモンスター, Poketto Monsutā). It originally aired in Japan from August 9, 2001, to November 14, 2002, on TV Tokyo, in the United States from September 14, 2002, to October 25, 2003, on Kids' WB.\n[…]\nIt was the first season of Pokémon to be digitally animated as opposed to cel animation, starting with the episode \"Here's Lookin' at You, Elekid\".\n[…]\nThe season follows Ash Ketchum as he continues travelling across the Johto region with Misty and Brock.\n[…]\nThe Japanese opening songs are \"Aim to be a Pokémon Master\" (めざせポケモンマスター 2001, Mezase Pokémon Masutā 2001) by Whiteberry for 29 episodes, and \"Ready Go!\" by Naomi Tamura for 36 episodes. The ending songs are \"Face Forward Team Rocket!\" (前向きロケット団!, Maemuki Roketto-dan!) by Team Rocket trio for 29 episodes, and \"Pocket-ering Monster-ing\" (ポケッターリ・モンスターリ, Pokettāri Monsutāri) by Kana for 36 episodes. The English opening song is \"Believe in Me\" by David Rolfe.\n[…]\nViz Media and Warner Home Video released Pokémon: Master Quest – The Complete Collection on DVD in the United States on October 11, 2016.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Master_Quest",
        "situacao": "ok",
        "texto": "Pokémon: Master Quest, é a quinta temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a terceira temporada de Pokémon, a Série: Ouro e Prata (Pokémon the Series: Gold and Silver), conhecida no Japão como Pocket Monsters (ポケットモンスター, Poketto Monsutā), conhecido no Ocidente como Pokémon: Original Series.\n[…]\nA temporada acompanha as aventuras de Ash Ketchum e Pikachu enquanto eles coletam Insígnias de Ginásio na região de Johto para poderem competir na Liga Johto. Ao longo do caminho, Ash recebe a companhia de Misty e Brock.\n[…]\nAs canções de abertura japonesas são \"Aim to be a Pokémon Master\" (めざせポケモンマスター 2001, Mezase Pokémon Masutā 2001) de Whiteberry para 29 episódios, e \"Ready Go!\" por Naomi Tamura por 36 episódios. As músicas de encerramento são \"Face Forward Team Rocket!\" (前向きロケット団!, Maemuki Roketto-dan!) pelo trio Team Rocket por 29 episódios, e \"Pocket-ering Monster-ing\" (ポケッターリ・モンスターリ, Pokettāri Monsutāri) por Kana por 36 episódios. A música de abertura em inglês é \"Believe in Me\" de David Rolfe.\n[…]\nNos Estados Unidos, a temporada teve sua exibição na Netflix, Hulu, Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nNo Brasil, a temporada também está disponível na Amazon Prime Video, no canal Pokémon TV do YouTube e Pluto TV. Em Portugal, a temporada também está disponível no canal Pokémon TV do YouTube.\n[…]\nA Viz Media e a Warner Home Video lançaram Pokémon: Master Quest – The Complete Collection em DVD nos Estados Unidos em 11 de outubro de 2016.\n[…]\nSite oficial de Pokémon nos EUA (em inglês)\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Sammy (Pokémon 4Ever)",
      "descricao": "Menino do quarto filme da franquia Pokémon, trazido do passado pelo mítico Celebi, que é a versão jovem de um personagem famoso."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "No quarto filme, Ash conhece Sammy, um menino trazido do passado pelo mítico Celebi. Que personagem famoso esse menino se torna quando cresce?",
    "resposta": "Professor Carvalho",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sammy",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_4Ever"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sammy",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_4Ever",
        "situacao": "ok",
        "texto": "Pokémon 4Ever is a 2001 Japanese anime film directed by Kunihiko Yuyama and based on the television series Pokémon. The fourth official Pokémon film, it was released in Japan on July 7, 2001. The film was directed in Japan by Kunihiko Yuyama and written by Hideki Sonoda. It stars Rica Matsumoto, Ikue Ōtani, Mayumi Iizuka, Yūji Ueda, Satomi Kōrogi, Megumi Hayashibara, Shin-ichiro Miki, Inuko Inuyam\n[…]\nCelebi takes Sammy back to his own time, who promises to reunite with Ash in the future. Ash, Misty, and Brock speak to Professor Oak of their adventure. Ash saddened by Sammy's departure, however, Oak reassures him that friendships can withstand the test of time and he and Sammy will remain friends. Upon ending the call, the trio are perplexed about how Professor Oak knew Sammy's name, having never mentioned it. In his laboratory, Oak looks through his sketchbook, revealing that he is Sammy.\n[…]\nIn a review of the film, Dann Gire of the Daily Herald said that \"nothing feels more desperate than a movie that tries to extort emotions from young viewers. That happens in the animated Pokémon 4Ever, in which colorful characters stand around crying over the shriveling corpse of a magical creature called Celebi. The movie has emotional warmth of tin foil, mainly because it never establishes connections among the characters, or between the characters and viewers\".\n[…]\nRobert Koehler of Variety said that the \"script by Hideki Sonoda is thin in terms of levels of action and adventure, and suffers from last minute padding with one ostensible ending following another. A clever notion to pop up in the larger Pokémon epic, however, is the suggestion that The Professor (the Pokémon trainers' long-term, reliable guide to all things Pokémon) is actually Sam, now grown up in the present\".\n[…]\nPokémon 4Ever at IMDb\n[…]\nPokémon 4Ever at Rotten Tomatoes\n[…]\nPokémon 4Ever  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_4Ever",
        "situacao": "ok",
        "texto": "Pokémon 4: Viajantes do Tempo é o quarto filme da série Pokémon (ポケットモンスター セレビィ 時を超えた遭遇 - Serebii Toki o Koeta Deai em japonês), produzido no Japão e lançado em julho de 2001. Uma adaptação em inglês do filme foi lançada em outubro de 2002 nos Estados Unidos, produzida pela 4Kids Entertainment e distribuída pela então subsidiária da Disney, Miramax Films. O filme arrecadou de bilheteria no Japão u\n[…]\nHá 40 anos um poderoso pokémon, Celebi, escapou por pouco de um caçador especializado em capturar e vender pokémons raros. Juntamente com Sammy, um garoto, Celebi usou seus poderes para viajar no tempo e escapar da ameaça. Já no presente Sammy encontra Ash, Pikachu e seus amigos, a quem pede ajuda já que Celebi está esgotado pelo esforço feito pela viagem.\n[…]\nO Pokémon 4Ever recebeu críticas geralmente negativas dos críticos de televisão. Alguns críticos consideraram \"previsível\" e \"decepcionante\", enquanto outros afirmaram que \"os espectadores não ficarão decepcionados\". O filme recebeu uma classificação de 16% no Rotten Tomatoes, de um total de 38 críticas, a mais baixa da série de filmes Pokémon (original), com leitura de consenso: \"Apenas para fãs obstinados de Pokemon\".\n[…]\nNo Metacritc, recebeu 10 críticas negativas de um total de 16, recebendo nota 25 de um máximo de 100 entre os críticos especializados, por outro lado somou 7.2 em um máximo de 10 entre os usuários. Lawrence Van Gelder, do jornal New York Times classificou o enredo e os personagens como insípidos e as batalhas como sem sentido.\n[…]\nNo site TV Guide, Angel Cohn classificou o filme em 2 de 5 estrelas, afirmando que: \"embora bem feitas, essas cenas parecem chocantes e fora de sincronia com o resto do filme. Brincadeiras à parte, crianças e adultos apaixonados por tudo de Pokemon não vão se decepcionar\".\n[…]\nSammy\n[…]\nProfessor Carvalho\n[…]\nCelebi\n[…]\nProfessor Carvalho - Wellington Lima",
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
