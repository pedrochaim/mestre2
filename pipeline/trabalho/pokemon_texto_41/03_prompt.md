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
      "nome": "Pokémon Adventures",
      "descricao": "Mangá japonês baseado nos jogos Pokémon, publicado desde 1997, com protagonistas que levam os nomes das versões dos jogos, como Red e Blue."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Antes de Satoshi Yamamoto assumir os desenhos, quem ilustrou os primeiros volumes do mangá Pokémon Adventures?",
    "resposta": "Mato",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Adventures",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Adventures"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Adventures",
        "situacao": "ok",
        "texto": "Pokémon Adventures (Japanese: ポケットモンスター SPECIAL, Hepburn: Poketto Monsutā Supesharu; lit. Pocket Monsters Special, commonly Pokespe (ポケスペ / ポケSP) for short) is a Japanese manga series based on the Pokémon media franchise. The series is written by Hidenori Kusaka. Mato was the illustrator for the first nine volumes. When Mato became ill and was unable to continue illustrating the series, Satoshi Ya\n[…]\nDuring publication of the series, artist Mato fell sick leaving Kusaka to either cancel the series or select another artist. He decided to continue and chose Satoshi Yamamoto as Mato's replacement. Yamamoto felt pressure during his debut as older fans criticized his art in comparison to Mato. When he started drawing he had little knowledge about Pokémon, but still he was focused in the drawing for the new protagonist, Crystal.\n[…]\nJapanese volumes from the series have been featured in the Japanese comic ranking various times. Viz's first volumes edition from the manga, \"The Best of Pokémon Adventures\", appeared on ICv2's Top 20 Graphic Novels from April 2008. It also won the first Nickelodeon Magazine Comics Awards in the category \"Favorite Manga Series\". Readers from Media Factory's Da Vinci Denshi Navi magazine voted the series as the third manga they wanted to have an animated adaptation.\n[…]\nBy September 2014, the manga had over 12 million copies in circulation only in Japan. Southeast Asia publisher Shogakukan Asia announced in November 2016 that the manga had sold over 150 million copies worldwide. However, in December 2017, the illustrator Satoshi Yamamoto stated on his Twitter account that this was an error. By August 2017, it had 28 million copies in circulation worldwide.\n[…]\nPocket Monsters Special Japanese website (in Japanese)\n[…]\nPokemon Adventures result at Shogakukan Asia\n[…]\nPokémon Adventures (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Adventures",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pokemon_Special",
        "situacao": "ok",
        "texto": "Pokémon Special (ポケットモンスターSPECIAL, Poketto Monsutā Supesharu), também conhecido como Pokémon Adventures, conhecido no Brasil como Pokémon, é um mangá baseado nos jogos eletrônicos de Pokémon. É o mangá de Pokémon mais famoso já criado, com mais de 150 milhões de unidades vendidas no mundo inteiro.\n[…]\nSatoshi Tajiri uma vez afirmou que a série Pocket Monsters Special é a mais próxima do que imaginou que o mundo Pokémon fosse: \"Esta é o mangá que mais se parece com o mundo que eu estava tentando transmitir\" (僕が伝えたかった世界に最も近い漫画です, Boku ga tsutaetakatta sekai ni mottomo chikai manga desu.)\n[…]\nAs séries são escritas por Hidenori Kusaka e ilustradas por Mato nos primeiros 9 volumes. Satoshi Yamamoto substituiu Mato (que estava doente no momento) do volume 10 e não parou até agora.\n[…]\nMini-Volumes 1 ao 5, (Ainda em andamento)\n[…]\nO mangá foi publicado na editora Shogakukan, através da revista CoroCoro Ichiban! em março de 1997 no Japão. O mangá foi traduzido para o inglês nos Estados Unidos pela VIZ Media, lançado como Pokémon Adventures, mas a publicação terminou em 2001 com o volume 7. Mais tarde, o VIZ publicou a primeiro volume publicado em 2 de junho de 2009 e o segundo volume em Agosto, e continua até agora.\n[…]\nNo sudeste da Ásia principalmente Singapura, a editora Chuang Yi e traduz Pokémon Special para o inglês e continuou a traduzir novos volumes até o volume 41. A empresa, no entanto, entrou em liquidação voluntária no início de 2014 e a tradução foi interrompida. Agora Shogakukan Asia publica com a série na Singapura. Jilin Fine Arts, com colaboração à VIZ Media Shanghai Branch, que traduziu o mangá em chinês.\n[…]\nPocket Monsters Special Website japonês (em japonês)\n[…]\nWebsite oficial de Pokémon Adventures na Viz Media\n[…]\nPokemon Special (mangá) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Red (Pokémon Adventures)",
      "descricao": "Protagonista do primeiro arco do mangá Pokémon Adventures, treinador de Pallet que enfrenta a Equipe Rocket em Kanto."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No mangá Pokémon Adventures, Red não começa com um inicial do Professor Carvalho. Que pokémon o acompanha desde a infância?",
    "resposta": "Poliwag",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Red_(Adventures)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Adventures"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Red_(Adventures)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Adventures",
        "situacao": "ok",
        "texto": "Pokémon Adventures (Japanese: ポケットモンスター SPECIAL, Hepburn: Poketto Monsutā Supesharu; lit. Pocket Monsters Special, commonly Pokespe (ポケスペ / ポケSP) for short) is a Japanese manga series based on the Pokémon media franchise. The series is written by Hidenori Kusaka. Mato was the illustrator for the first nine volumes. When Mato became ill and was unable to continue illustrating the series, Satoshi Ya\n[…]\nThe third adventure is based on the Pokémon Gold, Silver, and Crystal versions of the game. It features the protagonists Gold, Silver and Crystal, and is centered mostly around the Johto region. Gold first started his journey to chase a thief that broke into Professor Elm's lab, and stole a Totodile. Gold then made it his mission to get Totodile back from Silver (who stole it), and follows Silver. In Gold's quest to steal back Totodile, he decided to become fully involved in Silver's life.\n[…]\nRed – The male protagonist in the Red, Green & Blue and FireRed & LeafGreen chapters and the first protagonist in the series. The champion of the 9th Indigo Plateau Pokémon League. Initially shown as a rash young trainer, he has matured over the course of the series. His first Pokémon was a Poliwag, which is first seen as a Poliwhirl. It later evolves into Poliwrath to save Red from drowning. When he started his journey, he received a Bulbasaur from Professor Oak.\n[…]\nJapanese volumes from the series have been featured in the Japanese comic ranking various times. Viz's first volumes edition from the manga, \"The Best of Pokémon Adventures\", appeared on ICv2's Top 20 Graphic Novels from April 2008. It also won the first Nickelodeon Magazine Comics Awards in the category \"Favorite Manga Series\". Readers from Media Factory's Da Vinci Denshi Navi magazine voted the series as the third manga they wanted to have an animated adaptation.\n[…]\nPokémon Adventures (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pokemon_Special",
        "situacao": "ok",
        "texto": "Pokémon Special (ポケットモンスターSPECIAL, Poketto Monsutā Supesharu), também conhecido como Pokémon Adventures, conhecido no Brasil como Pokémon, é um mangá baseado nos jogos eletrônicos de Pokémon. É o mangá de Pokémon mais famoso já criado, com mais de 150 milhões de unidades vendidas no mundo inteiro.\n[…]\nRed - O protagonista masculino dos capítulos Red, Green & Blue e FireRed & LeafGreen. O primeiro personagem da série. O campeão da 9ª Liga Pokémon Planalto Índigo. Inicialmente mostrado como um jovem treinador imprudente, ele amadureceu ao longo da série. Seu primeiro Pokémon foi um Poliwag, que é visto pela primeira vez como Poliwhirl. Mais tarde, evolui para Poliwrath para salvar Red do afogamento. Quando iniciou sua jornada, ele recebeu um Bulbasaur do Professor Carvalho.\n[…]\nCrystal (Crys) - A protagonista feminina dos capítulos Gold, Silver & Crystal e HeartGold & SoulSilver. Uma especialista inteligente e enérgica na captura de Pokémon (O Caçador ou Caçadora). Ela capturou todos os Pokémon não lendários para o Professor Carvalho (ela obteve os dados dos Pokémon lendários com a ajuda dos treinadores da 1ª geração). Ela tinha um Chikorita como Pokémon inicial, que agora é um Meganium.\n[…]\nEm 3 de maio de 2014, a Panini Comics anunciou o lançamento de Pokémon Special no Brasil, com o Capítulo Black e White, sendo lançado em 22 de setembro do mesmo ano. A Panini disse que se o mangá fizesse bastante sucesso, ela iria continuar a publicar os outros arcos. Em 2 de março de 2016, foi anunciado a publicação do Capítulo Red, Green & Blue, em comemoração ao aniversário de 20 anos da franquia, sendo lançado em 10 de outubro do mesmo ano.\n[…]\nWebsite oficial de Pokémon Adventures na Viz Media\n[…]\nPokemon Special (mangá) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Yellow (Pokémon Adventures)",
      "descricao": "Protagonista do segundo arco do mangá Pokémon Adventures, vinda da Floresta de Viridian, capaz de curar pokémon e ler seus pensamentos."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "No mangá Pokémon Adventures, que protagonista da Floresta de Viridian esconde debaixo de um chapéu de palha que é menina e cura pokémon com as mãos?",
    "resposta": "Yellow",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Yellow_(Adventures)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Adventures"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Yellow_(Adventures)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Adventures",
        "situacao": "ok",
        "texto": "Pokémon Adventures (Japanese: ポケットモンスター SPECIAL, Hepburn: Poketto Monsutā Supesharu; lit. Pocket Monsters Special, commonly Pokespe (ポケスペ / ポケSP) for short) is a Japanese manga series based on the Pokémon media franchise. The series is written by Hidenori Kusaka. Mato was the illustrator for the first nine volumes. When Mato became ill and was unable to continue illustrating the series, Satoshi Ya\n[…]\nIt is also revealed that Giovanni was the one who rescued Red from his ice coffin. Yellow battles Lance, but is losing until the other trainers send their power to Yellow, and with their combined strength, she manages to defeat Lance.\n[…]\nYellow – The protagonist in the Yellow chapter. She is happy-go-lucky, gentle, and kind-hearted. Yellow has a rare psychic power to heal Pokémon (The Healer), a trait seen only in special individuals from the Viridian Forest area. She disguised herself as a boy on a mission to save Red. She also has many other psychic abilities, such as telekinesis and mind reading through her Will of the Forest ability. She has narcolepsy, which is often triggered by use of her abilities.\n[…]\nDuring her adventures in the Yellow arc,, she borrowed Red's Pikachu, Pika. She now has her own Pikachu, a female named Chuchu. Her current team consists of Pikachu (Chuchu), Golem (Gravvy), Omastar (Omny), Dodrio (Dody), Butterfree (Kitty), and Raticate (Ratty).\n[…]\nHis current team consists of Typhlosion (Exbo), Ambipom (Aibo), Mantine (Tibo), Politoed (Polibo), Sudowoodo (Sudobo), Sunflora (Sunbo), Togekiss (Togebo), and Pichu (Pibu), who was given to him by Yellow as a result of her and Red's Pikachu's courtship. His first adventure started in the Gold, Silver & Crystal arc thinking Silver stole his backpack full of Pokémon. In the HeartGold & SoulSIlver arc he is sixteen years old.\n[…]\nPokémon Adventures (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pokemon_Special",
        "situacao": "ok",
        "texto": "Pokémon Special (ポケットモンスターSPECIAL, Poketto Monsutā Supesharu), também conhecido como Pokémon Adventures, conhecido no Brasil como Pokémon, é um mangá baseado nos jogos eletrônicos de Pokémon. É o mangá de Pokémon mais famoso já criado, com mais de 150 milhões de unidades vendidas no mundo inteiro.\n[…]\nEste arco apresenta as viagens de Red e Blue (Green na versão japonesa) através de Kanto, conquistando os oito ginásios e a Liga Pokémon. Mais tarde, uma treinadora chamada Green (Blue na versão japonesa) entra na trama. Juntos, eles destroem os planos da Equipe Rocket, uma organização do mal que usa Pokémon para atingir seus objetivos. Red também auxilia Blaine na captura de Mewtwo, além de salvar Yellow de Pokémon selvagens na Floresta de Viridian.\n[…]\nYellow - A protagonista feminina do capítulo Yellow. Ela é despreocupada, gentil e de bom coração. Yellow tem um raro poder psíquico para curar Pokémon (O Curandeiro), uma característica vista apenas em indivíduos especiais da área da Floresta Viridian. Ela se disfarçou de menino com a missão de salvar Red. Ela também tem um poder psíquico de ler as mentes dos Pokémons, que também vem da Floresta Viridian. Ela sempre dorme depois de usar suas habilidades devido ao alto uso de sua energia.\n[…]\nSua equipe atual é composta por Typhlosion (Explom), Ambipom (Aiplom), Mantine (Manplom), Politoed (Poliplom), Sudowoodo (Sudoplom), Sunflora (Sunplom), Togekiss (Togeplom) e Pichu, que foi dado a ele por Yellow como resultado do namoro dela e do Pikachu de Red. Sua primeira aventura começou em G/S/C pensando que Silver roubou sua mochila cheia de Pokémon. Em HG/SS ele tem dezesseis anos.\n[…]\nWebsite oficial de Pokémon Adventures na Viz Media\n[…]\nPokemon Special (mangá) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Crystal (Pokémon Adventures)",
      "descricao": "Personagem do arco de Gold, Silver e Crystal do mangá Pokémon Adventures, especialista em captura que ajuda o Professor Carvalho com a Pokédex."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Adventures, Crystal ajuda o Professor Carvalho a completar a Pokédex graças a uma técnica curiosa de captura. Qual é essa técnica?",
    "resposta": "Chutar as Poké Bolas",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Crystal_(Adventures)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Adventures"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Crystal_(Adventures)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Adventures",
        "situacao": "ok",
        "texto": "Pokémon Adventures (Japanese: ポケットモンスター SPECIAL, Hepburn: Poketto Monsutā Supesharu; lit. Pocket Monsters Special, commonly Pokespe (ポケスペ / ポケSP) for short) is a Japanese manga series based on the Pokémon media franchise. The series is written by Hidenori Kusaka. Mato was the illustrator for the first nine volumes. When Mato became ill and was unable to continue illustrating the series, Satoshi Ya\n[…]\nThe third adventure is based on the Pokémon Gold, Silver, and Crystal versions of the game. It features the protagonists Gold, Silver and Crystal, and is centered mostly around the Johto region. Gold first started his journey to chase a thief that broke into Professor Elm's lab, and stole a Totodile. Gold then made it his mission to get Totodile back from Silver (who stole it), and follows Silver. In Gold's quest to steal back Totodile, he decided to become fully involved in Silver's life.\n[…]\nThe protagonist of this story arc is Emerald, who is hired by Crystal and Professor Oak to capture Jirachi in seven days before it is captured by Guile Hideout, the main antagonist of the arc. Emerald is also trying to challenge the seven facilities of the Battle Frontier and conquer them all. In the process, Emerald meets with the other two Hoenn Pokédex holders, Ruby and Sapphire.\n[…]\nThe protagonists of the series are mainly the Pokémon trainers called Pokédex Holders that are recognized by the well-known Pokémon professors in various regions and awarded Pokédex.\n[…]\nCrystal (Crys/Kris) – The female protagonist in the Gold, Silver & Crystal and HeartGold & SoulSilver chapters. An intelligent and energetic expert at catching Pokémon (The Capturer), she has caught every non-legendary Pokémon for Professor Oak (she got the legendary Pokémon's data with the help of the 1st generation trainers). She had a Chikorita for a starter Pokémon, which is now a Meganium."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pokemon_Special",
        "situacao": "ok",
        "texto": "Pokémon Special (ポケットモンスターSPECIAL, Poketto Monsutā Supesharu), também conhecido como Pokémon Adventures, conhecido no Brasil como Pokémon, é um mangá baseado nos jogos eletrônicos de Pokémon. É o mangá de Pokémon mais famoso já criado, com mais de 150 milhões de unidades vendidas no mundo inteiro.\n[…]\nGreen é derrotada por Professor Carvalho na Liga Pokémon, que embora tenha ganhado, não quer ir para a final. Red derrota Blue na final e é campeão.\n[…]\nEste arco apresenta as viagens de Gold através de Johto em sua tentativa de acabar com os planos da Neo Equipe Rocket, uma nova Equipe Rocket, liderada pelo Máscara Gélida. Mais adiante, dois outros treinadores entram na trama da história: Silver, que já teve parte de sua vida ligada com os vilões da série, e Crystal, uma treinadora Pokémon com o objetivo de capturar todos os pokémons e assim ajudar o Profº Carvalho a completar a sua Pokédex.\n[…]\nCrystal (Crys) - A protagonista feminina dos capítulos Gold, Silver & Crystal e HeartGold & SoulSilver. Uma especialista inteligente e enérgica na captura de Pokémon (O Caçador ou Caçadora). Ela capturou todos os Pokémon não lendários para o Professor Carvalho (ela obteve os dados dos Pokémon lendários com a ajuda dos treinadores da 1ª geração). Ela tinha um Chikorita como Pokémon inicial, que agora é um Meganium.\n[…]\nCom a ajuda de Henry, Professor Magnolia e Marvin, ela espera desafiar a Liga Pokémon para chamar a atenção da imprensa e usá-la para procurar seu time. Seu Pokémon inicial é um Scorbunny (agora um Cinderace), mas conforme o capítulo avança, ela recupera seu grupo perdido.\n[…]\nWebsite oficial de Pokémon Adventures na Viz Media\n[…]\nPokemon Special (mangá) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Gold (Pokémon Adventures)",
      "descricao": "Protagonista esquentado do arco de Gold, Silver e Crystal do mangá Pokémon Adventures, criado em New Bark, em Johto."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "No mangá Pokémon Adventures, o esquentado Gold não arremessa as Poké Bolas com a mão. Com que objeto ele as lança?",
    "resposta": "Um taco de sinuca",
    "distratores": [
      "Um bastão de beisebol",
      "Um estilingue",
      "Uma raquete de tênis"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Gold_(Adventures)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Gold_(Adventures)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Lance",
      "descricao": "Treinador especialista em pokémon dragão, último membro da Elite dos Quatro em Red e Blue e campeão da Liga em Gold e Silver."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "No arco de Yellow do mangá Pokémon Adventures, que mestre dos dragões comanda a Elite dos Quatro num plano para livrar o mundo dos humanos?",
    "resposta": "Lance",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lance_(Adventures)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Adventures"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lance_(Adventures)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Adventures",
        "situacao": "ok",
        "texto": "Pokémon Adventures (Japanese: ポケットモンスター SPECIAL, Hepburn: Poketto Monsutā Supesharu; lit. Pocket Monsters Special, commonly Pokespe (ポケスペ / ポケSP) for short) is a Japanese manga series based on the Pokémon media franchise. The series is written by Hidenori Kusaka. Mato was the illustrator for the first nine volumes. When Mato became ill and was unable to continue illustrating the series, Satoshi Ya\n[…]\nLater, Yellow, Blaine, Blue, Green, Bill, Lt. Surge, Koga and Sabrina join forces to bring down the Elite Four together. They find out that Lance's master plan was to use the Gym Badges and create an amplifying effect at Cerise Island to power up a mysterious Legendary Pokémon and destroy all humans in the world except themselves. They felt that humans and Pokémon were not meant to coexist. Red turned up later at Cerise Island to help Surge and Bill defeat Bruno.\n[…]\nThis arc is based on the Generation IV games, HeartGold and SoulSilver. Gold is tasked by Professor Oak to find former villain Lance in the Pokéathlon, as he holds information about the Alpha Pokémon, Arceus. Gold decides to compete in the Pokéathlon and wins the contests, but is unable to find Lance. Meanwhile, Silver discovers that Team Rocket has been resurrected once again, and is using 3 plates, items that greatly boost a Pokémon based on type, for another evil plot.\n[…]\nBoth events cause Gold, Silver, and Crystal to investigate the situation, eventually taking them to the Sinjoh Ruins, where the 4 executives behind Team Rocket plan to use Arceus, who has lost faith in humanity, to summon Dialga, Palkia, and Giratina to bring back their leader, Giovanni. The trio, helped by Giovanni, a reformed Lance, and Pryce (who has returned from the crack of time), defeat the Legendary Pokémon and restore Arceus' faith in humanity.\n[…]\nPokémon Adventures (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pokemon_Special",
        "situacao": "ok",
        "texto": "Pokémon Special (ポケットモンスターSPECIAL, Poketto Monsutā Supesharu), também conhecido como Pokémon Adventures, conhecido no Brasil como Pokémon, é um mangá baseado nos jogos eletrônicos de Pokémon. É o mangá de Pokémon mais famoso já criado, com mais de 150 milhões de unidades vendidas no mundo inteiro.\n[…]\nEste arco apresenta as viagens de Yellow por Kanto à procura de Red, que estava desaparecido. Ela recebe o Pikachu de Red e parte a sua busca. Durante sua jornada, Yellow é atacada pelos membros da Elite Quatro que estavam sendo controlados para tentar dominar o mundo. Ocorre uma revelação: Sabrina, Lt. Surge e Koga são da Equipe Rocket e Blaine é um de seus formadores. Yellow então derrota a Elite Quatro e encontra Red, que havia sido raptado por um misterioso pássaro que foi para Johto.\n[…]\nEste arco apresenta um garoto chamado Black em uma jornada para ser um mestre pokémon. Ele acaba sendo empregado pela garota chamada White, dona da BW Agency. Nesta agência White cede Pokémons que atuam em séries, comerciais e outros programas de TV. Os rivais Cheren e Bianca surgem como possuidores da Pokédex. Por causa de um acidente, Black deixou para trás, a única Pokédex em funcionamento no laboratório da Profª Juniper, se tornando uma peça-chave para acabar com os esquemas da Equipe Plasma.\n[…]\nO mangá foi publicado na editora Shogakukan, através da revista CoroCoro Ichiban! em março de 1997 no Japão. O mangá foi traduzido para o inglês nos Estados Unidos pela VIZ Media, lançado como Pokémon Adventures, mas a publicação terminou em 2001 com o volume 7. Mais tarde, o VIZ publicou a primeiro volume publicado em 2 de junho de 2009 e o segundo volume em Agosto, e continua até agora.\n[…]\nPokemon Special (mangá) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Homem Mascarado (Pokémon Adventures)",
      "descricao": "Vilão mascarado do arco de Gold, Silver e Crystal do mangá Pokémon Adventures, que sequestra crianças e rouba pokémon em Johto."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "No arco de Gold, Silver e Crystal de Pokémon Adventures, o vilão de máscara que rouba pokémon é, na verdade, qual líder de ginásio de Johto?",
    "resposta": "Pryce",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pryce_(Adventures)",
      "https://bulbapedia.bulbagarden.net/wiki/Masked_Man"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pryce_(Adventures)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Masked_Man",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Sapphire (Pokémon Adventures)",
      "descricao": "Protagonista selvagem do arco de Ruby e Sapphire do mangá Pokémon Adventures, criada na natureza de Hoenn."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "No mangá Pokémon Adventures, a selvagem Sapphire, rival de Ruby, é filha de qual personagem de Hoenn?",
    "resposta": "Professor Birch",
    "distratores": [
      "Norman",
      "Steven Stone",
      "Wallace"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sapphire_(Adventures)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sapphire_(Adventures)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Ruby (Pokémon Adventures)",
      "descricao": "Protagonista do arco de Ruby e Sapphire do mangá Pokémon Adventures, filho de Norman e apaixonado por concursos pokémon."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Adventures, Ruby aposta com Sapphire: ele vence todos os concursos de Hoenn, ela junta as oito insígnias. Quantos dias eles têm para isso?",
    "resposta": "Oitenta dias",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ruby_(Adventures)",
      "https://bulbapedia.bulbagarden.net/wiki/Sapphire_(Adventures)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ruby_(Adventures)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sapphire_(Adventures)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Pocket Monsters (mangá)",
      "descricao": "Mangá de humor publicado na revista CoroCoro Comic a partir de 1996, em que Red viaja com um Pikachu e um Clefairy falante."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que mangaká criou Pocket Monsters, o mangá de humor da revista CoroCoro em que Red viaja com um Pikachu e um Clefairy desbocado?",
    "resposta": "Kosaku Anakubo",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pocket_Monsters_(manga)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pocket_Monsters_(manga)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "The Electric Tale of Pikachu",
      "descricao": "Mangá que reconta de forma livre o início do anime Pokémon, com Ash, Misty e Brock, publicado no fim dos anos noventa."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O mangá The Electric Tale of Pikachu, que recontava o começo do anime com Ash, Misty e Brock, foi desenhado por quem?",
    "resposta": "Toshihiro Ono",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Electric_Tale_of_Pikachu",
      "https://bulbapedia.bulbagarden.net/wiki/The_Electric_Tale_of_Pikachu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Electric_Tale_of_Pikachu",
        "situacao": "ok",
        "texto": "The Pokémon Graphic Novel, more commonly known as Pokémon: The Electric Tale of Pikachu (Japanese: 電撃！ピカチュウ, Hepburn: Dengeki! Pikachū; lit.'Electric Shock! Pikachu'), is a Japanese manga series written and illustrated by Toshihiro Ono. It was serialized in the children's manga magazine Bessatsu CoroCoro Comic Special and CoroCoro Comic from April 1997 to December 1999.\n[…]\nAt the time of its release, Issue #1 was the best-selling manga issue, and best-selling comic book of any type, in the United States. The issue sold 1.001 million copies, the highest for a single comic book since 1993. The first volume, The Electric Tale of Pikachu!, was released on August 1999. The third volume, Electric Pikachu Boogaloo, was released on April 5, 2000.\n[…]\nIn Singapore, the manga is published in English by Chuang Yi and translated as Pokémon: The Electric Tale of Pikachu! for all four volumes. The Traditional Chinese edition in Taiwan of the manga is published by Da Ran Culture Enterprise and Chingwin Publishing.\n[…]\nToshihiro Ono, the author of the series, said that he began drawing the series after Saito, Ono's editor, asked Ono to draw a manga to go along with the anime. During the production of the manga, Ono received scripts of the anime series. The author then altered the stories to fit the desired amount of pages used per storyline.\n[…]\nPart 4, Issue #1 was released in November 1999 with the subsequent three issues released in December 1999, January 2000, and February 2000. In 1999 Viz released extremely low print samplers that were only available in the Pokémon Video Suitcase promotional set Pokémon Electric Tale of Pikachu Special Signature Edition, which contained the printed autograph signature of Toshihiro Ono on the cover. The special signature editions were available in a Red Version and a Blue Version.\n[…]\n\"Animerica Interview Toshihiro Ono\" (Archive) VIZ Media."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/The_Electric_Tale_of_Pikachu",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Pokémon Origins",
      "descricao": "Minissérie de anime de 2013 que adapta a jornada de Red nos jogos Pokémon Red e Green, em vez de seguir Ash."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Diferente do anime de Ash, a minissérie Pokémon Origins resume a jornada de Red em poucos episódios. Quantos episódios ela tem?",
    "resposta": "Quatro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Origins",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Origins"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Origins",
        "situacao": "ok",
        "texto": "Pokémon Origins, known in Japan as Pocket Monsters: The Origin (ポケットモンスター THE ORIGIN, Pokettomonsutā Ji Orijin), is a Japanese anime television special based on the Pokémon media franchise which follows the plot of Pokemon Red and Blue. Animation is handled by Production I.G, Xebec, and OLM, Inc., and the series is split into four parts, each directed by a different director from these studios.\n[…]\nIt was broadcast on TV Tokyo on October 2, 2013, ten days before the release of the X and Y video games, and began streaming internationally on Nintendo's Pokémon TV service from November 15, 2013 to December 2, 2013. On September 14, 2016, the first episode of the series was released for free on the official Pokémon YouTube channel and was later removed in 2017.\n[…]\nPokémon Origins (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Origins",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Origins",
        "situacao": "ok",
        "texto": "Pokémon Origins, conhecido no Japão como Pocket Monsters: The Origin (ポケットモンスター THE ORIGIN, Poketto Monsutā Ji Orijin), é um anime especial baseado na franquia Pokémon da Nintendo. Ao contrário da série de televisão original, esse especial possui a história baseada nos jogos Pokémon Red e Blue. Os estúdios responsáveis pela animação são OLM, Production I.G e Xebec. O especial é dividido em quatro \n[…]\nEle foi ao ar na TV Tokyo em 2 de outubro de 2013, dez dias antes do lançamento dos jogos Pokémon X e Y, e foi transmitido internacionalmente entre 15 de novembro e 2 de dezembro de 2013.\n[…]\nSendo o especial baseado nos jogos Pokémon Red e Blue, a história gira em torno de um garoto chamado Red, que começa sua jornada com seu parceiro Pokémon, Charmander. Red tem como objetivo capturar todos os Pokémon conhecidos na região de Kanto e se tornar um Mestre Pokémon. Ao longo do caminho, ele se depara com seu rival, Blue (\"Green\", no Japão), vários Líderes de Ginásio e a organização criminosa chamada Equipe Rocket.\n[…]\nPokémon Origins (anime) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Pokémon Origins",
      "descricao": "Minissérie de anime de 2013 que adapta a jornada de Red nos jogos Pokémon Red e Green, em vez de seguir Ash."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "No último episódio de Pokémon Origins, contra Mewtwo, o Charizard de Red assume qual forma, que acabava de estrear nos jogos X e Y?",
    "resposta": "Mega Charizard X",
    "distratores": [
      "Mega Charizard Y",
      "Charizard Gigantamax",
      "Charizard brilhante"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Origins",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Origins"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Origins",
        "situacao": "ok",
        "texto": "Pokémon Origins, known in Japan as Pocket Monsters: The Origin (ポケットモンスター THE ORIGIN, Pokettomonsutā Ji Orijin), is a Japanese anime television special based on the Pokémon media franchise which follows the plot of Pokemon Red and Blue. Animation is handled by Production I.G, Xebec, and OLM, Inc., and the series is split into four parts, each directed by a different director from these studios.\n[…]\nIt was broadcast on TV Tokyo on October 2, 2013, ten days before the release of the X and Y video games, and began streaming internationally on Nintendo's Pokémon TV service from November 15, 2013 to December 2, 2013. On September 14, 2016, the first episode of the series was released for free on the official Pokémon YouTube channel and was later removed in 2017.\n[…]\nPokémon Origins (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Origins",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Origins",
        "situacao": "ok",
        "texto": "Pokémon Origins, conhecido no Japão como Pocket Monsters: The Origin (ポケットモンスター THE ORIGIN, Poketto Monsutā Ji Orijin), é um anime especial baseado na franquia Pokémon da Nintendo. Ao contrário da série de televisão original, esse especial possui a história baseada nos jogos Pokémon Red e Blue. Os estúdios responsáveis pela animação são OLM, Production I.G e Xebec. O especial é dividido em quatro \n[…]\nEle foi ao ar na TV Tokyo em 2 de outubro de 2013, dez dias antes do lançamento dos jogos Pokémon X e Y, e foi transmitido internacionalmente entre 15 de novembro e 2 de dezembro de 2013.\n[…]\nSendo o especial baseado nos jogos Pokémon Red e Blue, a história gira em torno de um garoto chamado Red, que começa sua jornada com seu parceiro Pokémon, Charmander. Red tem como objetivo capturar todos os Pokémon conhecidos na região de Kanto e se tornar um Mestre Pokémon. Ao longo do caminho, ele se depara com seu rival, Blue (\"Green\", no Japão), vários Líderes de Ginásio e a organização criminosa chamada Equipe Rocket.\n[…]\nPokémon Origins (anime) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Pokémon Generations",
      "descricao": "Série de episódios curtos lançada no YouTube que revisita momentos marcantes dos jogos das seis primeiras regiões Pokémon."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon Generations, série de episódios curtos no YouTube que revisitava momentos de cada região dos jogos, foi lançada em que ano?",
    "resposta": "2016",
    "distratores": [
      "2014",
      "2015",
      "2017"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Generations",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Generations"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Generations",
        "situacao": "ok",
        "texto": "Pokémon Generations (ポケモンジェネレーションズ, Pokemon Jenerēshonzu) is a 2016 Japanese-animated original net animation (ONA) series produced by OLM and released on YouTube by The Pokémon Company. The series consists of several short stories inspired by Nintendo's Pokémon video game series (from Generations I to VI), as opposed to its main television series. A total of 18 episodes were produced, and were ori\n[…]\nJapanese episodes have also aired via YouTube.\n[…]\nPokémon Generations (anime) at Anime News Network's encyclopedia\n[…]\nPokémon Generations at IMDb"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Generations",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Generations",
        "situacao": "ok",
        "texto": "Pokémon Gerações, conhecido no Japão como Pocket Monsters Generations (ポケモンジェネレーションズ, Poketto Monsutā Jenerēshonzu) é uma websérie animada japonesa ou ONA, produzida pela OLM. Foi lançado no YouTube de The Pokémon Company, em 16 de setembro de 2016 para inglês, francês, italiano, holandês, alemão e espanhol; 9 de dezembro de 2016 para japonês, e 10 de fevereiro de 2017 para português.\n[…]\nTerminando em 23 de dezembro de 2016 para inglês, francês, italiano, holandês, alemão e espanhol; 2 de fevereiro de 2017 para japonês, e 9 de junho de 2017 para português. Semelhante à série de anime para televisão em 2013, Pokémon Origins, a série consiste em várias histórias curtas inspiradas na série de jogos eletrônicos de Pokémon da Nintendo, em oposição à sua série principal de televisão. A série consiste em 18 episódios, com duração de 3 a 5 minutos.\n[…]\nPokémon Origins\n[…]\nPokémon Generations (anime) na enciclopédia do Anime News Network (em inglês)\n[…]\nPokémon Generations no IMDb\n[…]\nPlaylist Pokémon Gerações no YouTube Canal Oficial da Pokémon em Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Pokémon Generations",
      "descricao": "Série de episódios curtos lançada no YouTube que revisita momentos marcantes dos jogos das seis primeiras regiões Pokémon."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Pokémon Generations percorre as regiões de Kanto a Kalos em episódios de poucos minutos cada. Quantos episódios a série tem ao todo?",
    "resposta": "Dezoito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Generations",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Generations"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Generations",
        "situacao": "ok",
        "texto": "Pokémon Generations (ポケモンジェネレーションズ, Pokemon Jenerēshonzu) is a 2016 Japanese-animated original net animation (ONA) series produced by OLM and released on YouTube by The Pokémon Company. The series consists of several short stories inspired by Nintendo's Pokémon video game series (from Generations I to VI), as opposed to its main television series. A total of 18 episodes were produced, and were ori\n[…]\nJapanese episodes have also aired via YouTube.\n[…]\nPokémon Generations (anime) at Anime News Network's encyclopedia\n[…]\nPokémon Generations at IMDb"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Generations",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Generations",
        "situacao": "ok",
        "texto": "Pokémon Gerações, conhecido no Japão como Pocket Monsters Generations (ポケモンジェネレーションズ, Poketto Monsutā Jenerēshonzu) é uma websérie animada japonesa ou ONA, produzida pela OLM. Foi lançado no YouTube de The Pokémon Company, em 16 de setembro de 2016 para inglês, francês, italiano, holandês, alemão e espanhol; 9 de dezembro de 2016 para japonês, e 10 de fevereiro de 2017 para português.\n[…]\nTerminando em 23 de dezembro de 2016 para inglês, francês, italiano, holandês, alemão e espanhol; 2 de fevereiro de 2017 para japonês, e 9 de junho de 2017 para português. Semelhante à série de anime para televisão em 2013, Pokémon Origins, a série consiste em várias histórias curtas inspiradas na série de jogos eletrônicos de Pokémon da Nintendo, em oposição à sua série principal de televisão. A série consiste em 18 episódios, com duração de 3 a 5 minutos.\n[…]\nPokémon Origins\n[…]\nPokémon Generations (anime) na enciclopédia do Anime News Network (em inglês)\n[…]\nPokémon Generations no IMDb\n[…]\nPlaylist Pokémon Gerações no YouTube Canal Oficial da Pokémon em Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Pokémon: Twilight Wings",
      "descricao": "Série curta de animação lançada no YouTube, ambientada na região de Galar dos jogos Sword e Shield."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que estúdio japonês de animação, o mesmo do filme Penguin Highway, produziu Twilight Wings, a série curta de Pokémon ambientada em Galar?",
    "resposta": "Studio Colorido",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Twilight_Wings",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon:_Twilight_Wings"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Twilight_Wings",
        "situacao": "ok",
        "texto": "Pokémon: Twilight Wings (薄明の翼, Hakumei no Tsubasa) is a Japanese original net animation (ONA) anime series produced by Studio Colorido and released on YouTube by The Pokémon Company. It is a series inspired by the Pokémon Sword and Shield titles of the Pokémon video games, but it is not a part of the television series. A total of eight episodes, were announced for the series on December 12, 2019.\n[…]\nThe series initially concluded on August 6, 2020, when the seventh episode was released. However, a special episode titled \"The Gathering of Stars\" (EXPANSION ～星の祭～), based on downloadable content for the Pokémon Sword and Shield games, The Isle of Armor and The Crown Tundra, premiered on November 5, 2020, in Japanese, and later on November 17, 2020, in English.\n[…]\nCertain species of Pokémon that were initially cut from appearing in the Sword and Shield games (such as Dewgong) appeared in the fourth episode of the animated series, resulting in various fans feeling misled. In response, The Pokémon Company issued a public apology.\n[…]\nPokémon: Twilight Wings (anime) at Anime News Network's encyclopedia\n[…]\nPokémon: Twilight Wings at IMDb"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon:_Twilight_Wings",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Pokémon: Twilight Wings",
      "descricao": "Série curta de animação lançada no YouTube, ambientada na região de Galar dos jogos Sword e Shield."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Lançada no YouTube para acompanhar Sword e Shield, a série curta Twilight Wings, sobre o dia a dia de Galar, estreou em que ano?",
    "resposta": "2020",
    "distratores": [
      "2018",
      "2019",
      "2021"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Twilight_Wings",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon:_Twilight_Wings"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Twilight_Wings",
        "situacao": "ok",
        "texto": "Pokémon: Twilight Wings (薄明の翼, Hakumei no Tsubasa) is a Japanese original net animation (ONA) anime series produced by Studio Colorido and released on YouTube by The Pokémon Company. It is a series inspired by the Pokémon Sword and Shield titles of the Pokémon video games, but it is not a part of the television series. A total of eight episodes, were announced for the series on December 12, 2019.\n[…]\nThe first episode was released on January 15, 2020, and further episodes were planned to be released on a monthly basis, however the fifth episode was delayed from May to June due to the COVID-19 pandemic. This series, for the first seven episodes, also serves as a prequel to the Sword and Shield titles.\n[…]\nThe series initially concluded on August 6, 2020, when the seventh episode was released. However, a special episode titled \"The Gathering of Stars\" (EXPANSION ～星の祭～), based on downloadable content for the Pokémon Sword and Shield games, The Isle of Armor and The Crown Tundra, premiered on November 5, 2020, in Japanese, and later on November 17, 2020, in English.\n[…]\nCertain species of Pokémon that were initially cut from appearing in the Sword and Shield games (such as Dewgong) appeared in the fourth episode of the animated series, resulting in various fans feeling misled. In response, The Pokémon Company issued a public apology.\n[…]\nPokémon: Twilight Wings (anime) at Anime News Network's encyclopedia\n[…]\nPokémon: Twilight Wings at IMDb\n[…]\nOfficial playlist on YouTube"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon:_Twilight_Wings",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Pokémon Evolutions",
      "descricao": "Série curta de animação lançada no YouTube em 2021, com um episódio para cada região dos jogos, de Kanto a Galar."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Evolutions, cada episódio revisita uma região dos jogos, de Kanto a Galar. Que comemoração da franquia essa série celebrava?",
    "resposta": "Os 25 anos de Pokémon",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Evolutions",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Evolutions"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Evolutions",
        "situacao": "ok",
        "texto": "Pokémon Evolutions (ポケモンエボリューションズ, Pokémon Eboryūshonzu) is a 2021 Japanese animated original net animation (ONA) series released on YouTube and Pokémon TV by The Pokémon Company.\n[…]\nPokémon Evolutions is a series of 8 episodes released in celebration of the 25th anniversary of Pokémon and is inspired by all 8 regions of the Pokémon world. The series was first announced on September 2, 2021. Each episode is dedicated to each core series region in reverse order by introduction. The first episode was released on September 9, 2021, with subsequent episodes released on a weekly or bi-weekly basis."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Evolutions",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Pokémon Evolutions",
      "descricao": "Série curta de animação lançada no YouTube em 2021, com um episódio para cada região dos jogos, de Kanto a Galar."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Qual destas séries curtas de Pokémon, baseadas nos jogos, foi lançada por último?",
    "resposta": "Pokémon Evolutions",
    "distratores": [
      "Pokémon Origins",
      "Pokémon Generations",
      "Twilight Wings"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Evolutions",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Twilight_Wings",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Generations",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Origins"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Evolutions",
        "situacao": "ok",
        "texto": "Pokémon Evolutions (ポケモンエボリューションズ, Pokémon Eboryūshonzu) is a 2021 Japanese animated original net animation (ONA) series released on YouTube and Pokémon TV by The Pokémon Company.\n[…]\nPokémon Evolutions is a series of 8 episodes released in celebration of the 25th anniversary of Pokémon and is inspired by all 8 regions of the Pokémon world. The series was first announced on September 2, 2021. Each episode is dedicated to each core series region in reverse order by introduction. The first episode was released on September 9, 2021, with subsequent episodes released on a weekly or bi-weekly basis."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Twilight_Wings",
        "situacao": "ok",
        "texto": "Pokémon: Twilight Wings (薄明の翼, Hakumei no Tsubasa) is a Japanese original net animation (ONA) anime series produced by Studio Colorido and released on YouTube by The Pokémon Company. It is a series inspired by the Pokémon Sword and Shield titles of the Pokémon video games, but it is not a part of the television series. A total of eight episodes, were announced for the series on December 12, 2019.\n[…]\nThe first episode was released on January 15, 2020, and further episodes were planned to be released on a monthly basis, however the fifth episode was delayed from May to June due to the COVID-19 pandemic. This series, for the first seven episodes, also serves as a prequel to the Sword and Shield titles.\n[…]\nThe series initially concluded on August 6, 2020, when the seventh episode was released. However, a special episode titled \"The Gathering of Stars\" (EXPANSION ～星の祭～), based on downloadable content for the Pokémon Sword and Shield games, The Isle of Armor and The Crown Tundra, premiered on November 5, 2020, in Japanese, and later on November 17, 2020, in English.\n[…]\nCertain species of Pokémon that were initially cut from appearing in the Sword and Shield games (such as Dewgong) appeared in the fourth episode of the animated series, resulting in various fans feeling misled. In response, The Pokémon Company issued a public apology.\n[…]\nPokémon: Twilight Wings (anime) at Anime News Network's encyclopedia\n[…]\nPokémon: Twilight Wings at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Generations",
        "situacao": "ok",
        "texto": "Pokémon Generations (ポケモンジェネレーションズ, Pokemon Jenerēshonzu) is a 2016 Japanese-animated original net animation (ONA) series produced by OLM and released on YouTube by The Pokémon Company. The series consists of several short stories inspired by Nintendo's Pokémon video game series (from Generations I to VI), as opposed to its main television series. A total of 18 episodes were produced, and were ori\n[…]\nPokémon Generations (anime) at Anime News Network's encyclopedia\n[…]\nPokémon Generations at IMDb"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Pokémon: Hisuian Snow",
      "descricao": "Minissérie curta de animação lançada no YouTube, ambientada na antiga região de Hisui do jogo Pokémon Legends: Arceus."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que estúdio, conhecido pelas primeiras temporadas de Attack on Titan, animou Hisuian Snow, a série curta de Pokémon ambientada em Hisui?",
    "resposta": "Wit Studio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Hisuian_Snow",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon:_Hisuian_Snow"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Hisuian_Snow",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus is a 2022 action role-playing game developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. It is part of the eighth generation of the Pokémon video game series and serves as a prequel to the fourth-generation titles Pokémon Diamond and Pearl (2006). The game was first announced as part of the Pokémon 25th Anniversary event in Febru\n[…]\nThere, the player is recruited into the Survey Corps of the Galaxy Expedition Team, a group that has arrived in Hisui to chart and study it. After receiving their starter Pokémon, the player travels through the Hisui region to complete the Pokédex; throughout their journey, the spacetime rift causes several powerful \"Noble Pokémon\", which the Diamond and Pearl clans venerate, to turn berserk through powerful lightning, forcing the player to engage them in battle using 'balms' to calm them down.\n[…]\nWorking with either the Diamond or Pearl clans and under the care of the folklore researcher Cogita, the player travels to the three major lakes of Hisui to encounter the legendary Pokémon Azelf, Mesprit, and Uxie, three beings who embody willpower, emotion, and knowledge respectively. As the player passes their trials, they provide materials to craft the Red Chain, which is needed to stop the rift.\n[…]\nThe player battles the legendary Pokémon in its Original Form and captures it, sealing the spacetime rift.\n[…]\nAnnounced in April 2022, an ONA webseries tie-in, titled Pokémon: Hisuian Snow, debuted on YouTube and Pokémon TV on 18 May 2022. The series focuses on a young boy who befriends a Hisuian Zorua in Hisui. The series received a Webby Award as the \"People's Voice Winner.\" The series A limited 4-episode ONA webseries tie-in, titled Pokémon: The Arceus Chronicles, debuted on Amazon Prime Video in Japan in January 2022 and debuted on Netflix on 23 September 2022."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon:_Hisuian_Snow",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Legends%3A_Arceus",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus (Pokémon LEGENDS アルセウス, Pokemon Rejenzu: Aruseusu; tradução: Pokémon Lendas: Arceus) é um jogo eletrônico de RPG de ação desenvolvido pela Game Freak e publicado pela The Pokémon Company e Nintendo. Faz parte da oitava geração da série de jogos eletrônicos Pokémon e serve como uma prequela para os jogos eletrônicos de RPG do Nintendo DS, Pokémon Diamond e Pearl, de 2006. Fo\n[…]\nFoi declarado que o objetivo do jogo seria criar a primeira Pokédex de Sinnoh. O mítico Pokémon Arceus terá um papel importante na história.\n[…]\nNo início do jogo, três opções iniciais de Pokémon estão disponíveis: Rowlet (do Pokémon Sun e Moon), Cyndaquil (do Pokémon Gold e Silver) e Oshawott (do Pokémon Black e White), tornando-o o primeiro jogo da série principal a apresentar Pokémon iniciais de três gerações diferentes de jogos.\n[…]\nPokémon Legends: Arceus está sendo desenvolvido pela Game Freak. É o primeiro projeto conhecido no subgênero de RPG de ação realizado pelo estúdio. Foi revelado pela primeira vez em uma apresentação em 26 de fevereiro de 2021, como parte do evento Pokémon 25th Anniversary ao lado de Pokémon Brilliant Diamond e Shining Pearl. Ele servirá como uma prequela de Diamond e Pearl. Foi lançado mundialmente em 28 de janeiro de 2022.\n[…]\nPokémon Legends: Arceus recebeu \"críticas geralmente favoráveis\" de acordo com o agregador de resenhas Metacritic.\n[…]\nA Nintendo informou que o jogo vendeu 6,5 milhões de cópias em todo o mundo dentro de uma semana de seu lançamento, superando outros títulos da série Pokémon lançados para Nintendo Switch, como Sword e Shield e Brilliant Diamond e Shining Pearl. No Japão, vendeu 1,43 milhão de unidades em três dias. Nos Estados Unidos, apenas as vendas físicas de Legends: Arceus (excluindo downloads digitais) fizeram dele o jogo eletrônico mais vendido de janeiro de 2022.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Pokémon: Hisuian Snow",
      "descricao": "Minissérie curta de animação lançada no YouTube, ambientada na antiga região de Hisui do jogo Pokémon Legends: Arceus."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A minissérie Hisuian Snow, ambientada na antiga região do jogo Legends: Arceus, chegou ao canal oficial de Pokémon no YouTube em que ano?",
    "resposta": "2022",
    "distratores": [
      "2020",
      "2021",
      "2023"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Hisuian_Snow",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon:_Hisuian_Snow"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Hisuian_Snow",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus is a 2022 action role-playing game developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. It is part of the eighth generation of the Pokémon video game series and serves as a prequel to the fourth-generation titles Pokémon Diamond and Pearl (2006). The game was first announced as part of the Pokémon 25th Anniversary event in Febru\n[…]\nThe player battles the legendary Pokémon in its Original Form and captures it, sealing the spacetime rift.\n[…]\nOn 9 December 2021, the official Pokémon Twitter account teased a Poké Ball-related announcement for Legends: Arceus. The next day, a regional variant of Voltorb, a Pokémon based on Poké Balls, was announced. On 15 December 2021, a new trailer showcased several factions present in the game, as well as their leaders. On 7 January 2022, an overview trailer was released in Japanese, showcasing the world, people, and Pokémon. However, the trailer was not localized into English until 24 January 2022.\n[…]\nThe game was released worldwide on 28 January 2022. Exclusive in-game and physical bonuses were given out to those who pre-ordered the game digitally or physically. In Japan, those who pre-ordered Pokémon Legends: Arceus received a gold holographic artbook along with a limited edition Arceus promotional trading card.\n[…]\nA free content update, Daybreak, was announced and released on 27 February 2022.\n[…]\nAnnounced in April 2022, an ONA webseries tie-in, titled Pokémon: Hisuian Snow, debuted on YouTube and Pokémon TV on 18 May 2022. The series focuses on a young boy who befriends a Hisuian Zorua in Hisui. The series received a Webby Award as the \"People's Voice Winner.\" The series A limited 4-episode ONA webseries tie-in, titled Pokémon: The Arceus Chronicles, debuted on Amazon Prime Video in Japan in January 2022 and debuted on Netflix on 23 September 2022."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon:_Hisuian_Snow",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Legends%3A_Arceus",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus (Pokémon LEGENDS アルセウス, Pokemon Rejenzu: Aruseusu; tradução: Pokémon Lendas: Arceus) é um jogo eletrônico de RPG de ação desenvolvido pela Game Freak e publicado pela The Pokémon Company e Nintendo. Faz parte da oitava geração da série de jogos eletrônicos Pokémon e serve como uma prequela para os jogos eletrônicos de RPG do Nintendo DS, Pokémon Diamond e Pearl, de 2006. Fo\n[…]\nPokémon Legends: Arceus é um RPG de ação, uma estreia na série principal de jogos Pokémon. Apesar desta distinção e das mudanças que vêm com ela, Legends: Arceus é dito para homenagear a jogabilidade principal de entradas anteriores na série. Ele apresenta um cenário de mundo aberto na área selvagem introduzido no Pokémon Sword e Shield. O jogo se passa em uma era passada da história da região de Sinnoh, muito antes dos eventos de Pokémon Diamond e Pearl acontecerem.\n[…]\nPokémon Legends: Arceus está sendo desenvolvido pela Game Freak. É o primeiro projeto conhecido no subgênero de RPG de ação realizado pelo estúdio. Foi revelado pela primeira vez em uma apresentação em 26 de fevereiro de 2021, como parte do evento Pokémon 25th Anniversary ao lado de Pokémon Brilliant Diamond e Shining Pearl. Ele servirá como uma prequela de Diamond e Pearl. Foi lançado mundialmente em 28 de janeiro de 2022.\n[…]\nPokémon Legends: Arceus recebeu \"críticas geralmente favoráveis\" de acordo com o agregador de resenhas Metacritic.\n[…]\nA Nintendo informou que o jogo vendeu 6,5 milhões de cópias em todo o mundo dentro de uma semana de seu lançamento, superando outros títulos da série Pokémon lançados para Nintendo Switch, como Sword e Shield e Brilliant Diamond e Shining Pearl. No Japão, vendeu 1,43 milhão de unidades em três dias. Nos Estados Unidos, apenas as vendas físicas de Legends: Arceus (excluindo downloads digitais) fizeram dele o jogo eletrônico mais vendido de janeiro de 2022.\n[…]\nSítio oficial (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Pokémon Concierge",
      "descricao": "Série da Netflix de 2023 sobre Haru, uma moça que trabalha num resort para pokémon."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que estúdio japonês de stop-motion, criador do mascote Domo-kun, produziu a série Pokémon Concierge?",
    "resposta": "Dwarf Studios",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Concierge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Concierge",
        "situacao": "ok",
        "texto": "Pokémon Concierge is a stop-motion original net animation (ONA) series, part of The Pokémon Company's Pokémon media franchise, that premiered on Netflix on December 28, 2023. The series focuses on a woman named Haru, who is down on her luck and visits a resort known as the Pokémon Resort. She becomes a concierge, working on the island in order to care for its Pokémon visitors.\n[…]\nDiscussions with Netflix to produce a Pokémon series began in 2019 while The Pokémon Company was working on the film Detective Pikachu. The Pokémon Company's Hidenaga Katakami stated the series was initially discussed to be produced in 2-D animation. An animator working for Netflix Japan suggested using stop motion animation, due to prior collaboration between Netflix and Dwarf Studios, which was accepted. The series is written by Harumi Doki.\n[…]\nThe series uses stop motion animation, resulting in over 80,000 unique frames for the four episodes. Individual animators were capable of making up to 5 seconds of footage each day, with episode run times lasting between 14 and 20 minutes. Tadahiro Uesugi created the concept design for the Pokémon Resort and designed the major human characters such as Haru.\n[…]\nIn February 2023, during the Pokémon Day presentation, it was announced that a stop motion animated television series was in development for Netflix. The Pokémon Company collaborated with Dwarf Studios on the series. In July 2023, it was announced that Rena Nōnen would be voicing the main protagonist, Haru. In November 2023, a trailer was released, revealing the main Japanese and English voice cast. Pokémon Concierge premiered on Netflix on December 28, 2023. It consists of four episodes.\n[…]\nPokémon Concierge was nominated for an Annie Award for its second episode in the category \"Best Direction- TV/Media.\"\n[…]\nPokémon Concierge at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Concierge",
        "situacao": "ok",
        "texto": "Pokémon Concierge (prt: Rececionista Pokémon; bra: A Concierge Pokémon) é uma série de televisão animada japonesa em stop motion, parte da franquia Pokémon da The Pokémon Company, que estreou na Netflix em 28 de dezembro de 2023. A série é dirigida por Iku Ogawa e roteirizada por Harumi Doki.\n[…]\nHaru, uma nova concierge do Pokémon Resort, deseja proporcionar aos seus hóspedes Pokémon as férias mais divertidas e tranquilas que eles poderiam desejar. Antes que ela possa fazer isso, porém, ela mesma precisa aprender a relaxar.\n[…]\nEm fevereiro de 2023, durante a apresentação do Pokémon Day (evento anual da Pokémon Company), foi anunciado que uma série de televisão animada em stop motion estava em desenvolvimento para a Netflix.A série foi desenvolvida em parceria entre a Pokémon Company e a Swarf Animation Studios.\n[…]\nEm julho de 2023, foi anunciado que Rena Nōnen daria voz à protagonista principal chamada Haru, que trabalha como concierge em um resort onde trabalha dando hospitalidade e atende às necessidades de Pokémon cansados e de seus treinadores.\n[…]\nEm novembro de 2023, o trailer foi revelado, trazendo o elenco de vozes em japonês e inglês, que inclui Ai Fairouz, Okuno Eita, Takemura Yoshiko, Imani Hakim, Josh Keaton e Lori Alan.\n[…]\nMariya Takeuchi cantou a música tema da série, \"Have a Good Time Here\".\n[…]\nPokémon Concierge estreou na Netflix em 28 de dezembro de 2023. Contando com uma temporada com quatro episódios, com duração de cerca de 15 a 20 minutos cada.\n[…]\nPokémon Concierge no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Pokémon Concierge",
      "descricao": "Série da Netflix de 2023 sobre Haru, uma moça que trabalha num resort para pokémon."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Concierge, Haru começa a trabalhar num resort de pokémon e cria um laço especial com um pokémon ansioso e sempre nervoso. Qual?",
    "resposta": "Psyduck",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Concierge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Concierge",
        "situacao": "ok",
        "texto": "Pokémon Concierge is a stop-motion original net animation (ONA) series, part of The Pokémon Company's Pokémon media franchise, that premiered on Netflix on December 28, 2023. The series focuses on a woman named Haru, who is down on her luck and visits a resort known as the Pokémon Resort. She becomes a concierge, working on the island in order to care for its Pokémon visitors.\n[…]\nHaru (ハル) is a down-on-her-luck, workaholic woman who arrives at the Pokémon Resort to work there as a concierge. Haru lacks confidence in herself, and grows more confident as the series progresses. Haru is voiced by Rena Nōnen in Japanese and by Karen Fukuhara in English.\n[…]\nPsyduck was decided to be a good match for Haru's personality, and other Pokémon that would feature in the series were considered after that. The team got insights from people who had grown up with the franchise in order to decide how the Pokémon would act and which would feature in the show. 29 species of Pokémon were selected to appear in the show, as well as the four main human characters.\n[…]\nSurej Singh, writing for NME, believed the show helped capture the playful aspects of the Pokémon franchise that had been sidelined in prior media for the series. He stated that while Haru's arc with Psyduck was not overly complicated, he believed it to be calming for viewers. Singh additionally praised the voice acting and animation for the series, though he believed the small number of episodes to be a waste given the series' high quality.\n[…]\nPokémon Concierge was nominated for an Annie Award for its second episode in the category \"Best Direction- TV/Media.\"\n[…]\nPrior to the release of the season, promotional merchandise was released featuring Pokémon from the series. Psyduck wearing floatie rings were also added to spin-off game Pokémon Go as part of an in-game event celebrating the season's release.\n[…]\nPokémon Concierge at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Concierge",
        "situacao": "ok",
        "texto": "Pokémon Concierge (prt: Rececionista Pokémon; bra: A Concierge Pokémon) é uma série de televisão animada japonesa em stop motion, parte da franquia Pokémon da The Pokémon Company, que estreou na Netflix em 28 de dezembro de 2023. A série é dirigida por Iku Ogawa e roteirizada por Harumi Doki.\n[…]\nHaru, uma nova concierge do Pokémon Resort, deseja proporcionar aos seus hóspedes Pokémon as férias mais divertidas e tranquilas que eles poderiam desejar. Antes que ela possa fazer isso, porém, ela mesma precisa aprender a relaxar.\n[…]\nEm fevereiro de 2023, durante a apresentação do Pokémon Day (evento anual da Pokémon Company), foi anunciado que uma série de televisão animada em stop motion estava em desenvolvimento para a Netflix.A série foi desenvolvida em parceria entre a Pokémon Company e a Swarf Animation Studios.\n[…]\nEm julho de 2023, foi anunciado que Rena Nōnen daria voz à protagonista principal chamada Haru, que trabalha como concierge em um resort onde trabalha dando hospitalidade e atende às necessidades de Pokémon cansados e de seus treinadores.\n[…]\nPokémon Concierge estreou na Netflix em 28 de dezembro de 2023. Contando com uma temporada com quatro episódios, com duração de cerca de 15 a 20 minutos cada.\n[…]\nPokémon Concierge no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Irmãos Pichu",
      "descricao": "Dupla de irmãos Pichu travessos que estreou no curta Pikachu & Pichu, exibido nos cinemas antes de Pokémon 3: O Filme."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Num curta exibido antes do terceiro filme de Pokémon, Pikachu se perde numa cidade grande e é ajudado por dois irmãos travessos. Que pokémon são eles?",
    "resposta": "Pichu",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pikachu_%26_Pichu",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_3:_The_Movie"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pikachu_%26_Pichu",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_3:_The_Movie",
        "situacao": "ok",
        "texto": "Pokémon 3: The Movie is a 2000 Japanese anime film directed by Kunihiko Yuyama as the third film in the Pokémon franchise. The film stars the voices of Rica Matsumoto, Ikue Ōtani, Mayumi Iizuka, Yūji Ueda, Megumi Hayashibara, Shin-ichiro Miki, Inuko Inuyama, Yumi Tōma, Satomi Kōrogi, Unshō Ishizuka, Kōichi Yamadera, Naoto Takenaka, Hirohide Yakumaru, and Ai Kato, and Noriko Sakai. In the film, Ash\n[…]\nThis was the first Pokémon film to premiere in an IMAX theater. The realistic crystallization and Unown created a 3D effect in the film. This was also the last Pokémon film to be released internationally by Warner Bros. Pictures until the release of Pokémon: Detective Pikachu in 2019. The Japanese opening theme is OK! 2000 by Rica Matsumoto, and the Japanese ending theme is The Day a Rainbow Was Born (Niji ga Umareta hi) by Kumiko Mori.\n[…]\nAsh locates Molly and Delia, attempting to convince Molly to leave with them, but she is too scared and refuses, causing the power of the Unown to fight back. Entei returns and battles Ash, defeating his Pokémon and nearly killing him and Pikachu. However, having witnessed the crisis on TV in Charicific Valley, Ash's Charizard appears in time to rescue Ash and Pikachu. Entei engages Charizard in a duel and eventually tries to kill him.\n[…]\nPokémon 3: The Movie opened in theaters in Japan on July 8, 2000, with a 74-minute running time. The film was the third highest-grossing film in Japan for the year behind Mission: Impossible 2 and The Green Mile, with a gross of US$48.5 million.\n[…]\nThe second track, \"To Know the Unknown\", was performed by girl group Innosense. Tracks 13 to 15 were karaoke versions. The album also features two Pokémon videos, the Pokérap and a scene from the film, which are accessible upon insertion of the disc into a computer.\n[…]\nPokémon 3: The Movie at IMDb\n[…]\nPokémon 3: The Movie  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_3%3A_Spell_of_the_Unown",
        "situacao": "ok",
        "texto": "Pokémon 3: The Movie: Spell of the Unown, geralmente referido como Pokémon 3: The Movie, originalmente lançado no Japão como Pocket Monsters the Movie: Lord of the \"UNKNOWN\" Tower, ENTEI (劇場版ポケットモンスター 結晶塔の帝王 ENTEI, Gekijōban Poketto Monsutā Kesshōtō no Teiō ENTEI), é um filme de animação de 2000, dirigido por Kunihiko Yuyama. É o terceiro filme da franquia Pokémon, sendo lançado nos cinemas japone\n[…]\nAsh, Misty e Brock querem preparar uma surpresa para os seus Pokémon e os deixam se divertindo no alto de um grande apartamento em segurança. No outro lado, há uma dupla de Pichu se divertindo no prédio vizinho e quando Pikachu tenta alertar um deles para tomar cuidado, ele próprio acaba ficando em apuros, ao ser atacado por três Murkrows, saltar sobre alguns Hoppips e se esbarrar no Meowth da Equipe Rocket, que desta vez tentava ganhar alguns trocados lavando janelas.\n[…]\nAgora, Pikachu precisa da ajuda dos irmãos Pichu para conseguir retornar ao prédio onde os demais Pokémon de Ash, Misty e Brock estão antes que seu Treinador retorne. Em seu caminho, eles vão enfrentar os perigos da cidade ao perturbarem um raivoso e temperamental Houndour e quase serem atingidos pelas terríveis balsas locais, mas Pikachu ainda vai conhecer o adorável e enorme grupo de Pokémon da cidade grande em meio a tantas confusões.\n[…]\nEntei atira neles, e eles começam a descer correndo pela escadas abaixo. Enquanto isso, os cristais começam a perder o controle, e começam a envolver o Centro Pokémon.\n[…]\nPokémon Johto (Versão Filme)\n[…]\nPokémon 3: O Feitiço dos Unown foi lançado pela 1ª vez nos cinemas japoneses no dia 8 de Julho de 2000 no Japão pela distribuição da Toho. No ano seguinte, o filme foi lançado no dia 6 de Abril de 2001 nos Estados Unidos e no Canadá, pelo licenciamento da 4Kids Entertainment e da Kids' WB. Foi exibido no Brasil no dia 6 de Julho e em Portugal no dia 14 de dezembro no mesmo ano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Pikachu's Rescue Adventure",
      "descricao": "Curta de animação estrelado por Pikachu e outros pokémon numa selva, exibido nos cinemas junto com o segundo filme da franquia."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O curta Pikachu's Rescue Adventure, em que Pikachu e outros pokémon vivem uma aventura numa selva, era exibido nos cinemas antes de qual filme?",
    "resposta": "Pokémon 2000",
    "distratores": [
      "Pokémon: O Filme",
      "Pokémon 3: O Filme",
      "Pokémon 4Ever"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pikachu%27s_Rescue_Adventure",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie_2000"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pikachu%27s_Rescue_Adventure",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie_2000",
        "situacao": "ok",
        "texto": "Pokémon the Movie 2000 is a 1999 Japanese animated fantasy adventure film directed by Kunihiko Yuyama. It is the second film of the Pokémon anime series and of Pokémon the Series: The Beginning.\n[…]\nOn March 2, 2000, Warner Bros. Pictures announced they had acquired worldwide distribution rights to the film outside Asia from 4Kids Entertainment, following the success the two companies had with Pokémon: The First Movie. The film was released under their Kids' WB/Warner Bros. Family Entertainment labels on July 21, 2000, in the United States, with a July 15, 2000, premiere at Mann's Village Theatre.\n[…]\nPokémon The Movie 2000 was released on VHS and DVD on November 14, 2000.\n[…]\nA more positive review was given by Gene Seymour of the Los Angeles Times. Seymour believed that the film \"charms without talking down to its audience\". He also compared it favorably to the first movie, stating, \"...unlike its predecessor, 'Pokémon 2000' doesn't assume that everyone who sees it will know how to tell Togepi from Bulbasaur or Squirtle from Pikachu. Sure, I know now, but I'm not telling because I don't have to\".\n[…]\nPokémon the Movie 2000 Original Motion Picture Score is the orchestral soundtrack to the movie. The CD was originally released in some European countries in 2000. In 2004, it became available for download worldwide on iTunes.\n[…]\nList of Pokémon films\n[…]\nPokémon the Movie 2000 at IMDb\n[…]\nPokémon the Movie 2000 (anime) at Anime News Network's encyclopedia\n[…]\nPokémon the Movie 2000 at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_Movie_2000",
        "situacao": "ok",
        "texto": "Pokémon: The Movie 2000: The Power of One, geralmente referido como Pokémon O Filme 2000, originalmente lançado no Japão como Pocket Monsters the Movie: Revelation Lugia (劇場版ポケットモンスター 幻のポケモン ルギア爆誕, Gekijōban Poketto Monsutā Maboroshi no Pokemon Rugia Bakutan; lit. \"Mirage Pokémon: Lugia's Explosive Birth\"), é um filme de animação de 1999 dirigido por Kunihiko Yuyama. É o segundo filme da franquia \n[…]\nA adaptação em inglês, produzida pela 4Kids Entertainment e distribuída pela Warner Bros., foi lançada em 21 de julho de 2000 nos Estados Unidos.\n[…]\nPara evitar o completo colapso do mundo em que vivem, os pokémons e seus treinadores resolvem se unir para enfrentar juntos Giraldan.\n[…]\nMundo Pokémon - SNZ\n[…]\nPokémon World - Youngstown feat. Nobody's Angel\n[…]\nThe Legend Comes to Life - Tema do Filme Principal\n[…]\nPokémon: O Filme 2000 foi lançado pela 1ª vez nos cinemas japoneses no dia 17 de Julho de 1999 no Japão pela distribuição da Toho. No ano seguinte, o filme foi lançado no dia 21 de Julho de 2000 nos Estados Unidos, no Canadá e no Brasil, pelo licenciamento da 4Kids Entertainment e da Kids' WB. Foi exibido em Portugal no dia 15 de Dezembro no mesmo ano.\n[…]\nApós o lançamento nos cinemas, Pokémon: O Filme 2000 foi lançado em VHS no Japão em 2 de fevereiro de 2000 e também foi lançado em DVD em 22 de novembro de 2000. No mesmo ano, foi lançado em VHS e DVD nos Estados Unidos em 14 de novembro de 2000 e no Brasil pela Warner Home Video.\n[…]\nApós os anos seguintes, foi relançado em DVD no dia 21 de setembro de 2007 no Japão, fazendo parte da coleção Pikachu the Movie Box 1998-2002. Nos Estados Unidos, foi relançado em DVD no dia 7 de abril de 2009 pela Warner Home Video, fazendo parte da coleção Pokémon: The First Three Movies. Em 28 de novembro de 2012, o filme foi remasterizado digitalmente e lançado pela 1ª vez em Blu-ray, fazendo parte da coleção Pikachu the Movie Premium Box 1998-2010.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "The Mastermind of Mirage Pokémon",
      "descricao": "Especial de TV do anime Pokémon, de 2006, em que Ash enfrenta pokémon ilusórios criados por um cientista."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No especial The Mastermind of Mirage Pokémon, de 2006, que cientista cria cópias ilusórias de pokémon, incluindo um falso Mew?",
    "resposta": "Doutor Yung",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Mastermind_of_Mirage_Pok%C3%A9mon",
      "https://bulbapedia.bulbagarden.net/wiki/The_Mastermind_of_Mirage_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Mastermind_of_Mirage_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "Pokémon is a media franchise created by video game designer Satoshi Tajiri that centers on fictional creatures called Pokémon. As of 2020, there have been twenty-three animated films and one live action film. The first nineteen animated films are based on the anime television series of the same name, while the twentieth, twenty-first, and twenty-third are set in an alternate continuity to the anim\n[…]\nThe launch of the mobile game Pokémon Go in 2016 reignited mainstream interest in the Pokémon franchise in the Western market since its initial peak in the early 2000s, and various Hollywood film companies approached The Pokémon Company to gain film rights. Eventually, Warner Bros. Pictures and Legendary Entertainment struck a deal to produce a live-action adaptation of the 2018 video game Detective Pikachu; Pokémon Detective Pikachu, the first official live-action Pokémon film.\n[…]\nPikachu shorts are a series of twenty-seven animated short films shown at the start of animated theatrical films based on Pokémon, and have also been shown on ANA flights in Japan and released during Christmas as Pikachu's Winter Vacation.\n[…]\nThese television specials, which run longer than the normal half-hour and are usually not separated into more than one episode in either the original or the dub, are often considered TV Pokémon movies, not counting towards the running total. They do not air in theaters, but are instead broadcast on the same networks that the anime is broadcast on for their premieres.\n[…]\n\"Pokémon Movies - US official website\".\n[…]\n\"Pokémon Movies - JP official website\" (in Japanese).\n[…]\n\"Pokémon Movies - KO official website\" (in Korean)."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/The_Mastermind_of_Mirage_Pok%C3%A9mon",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_filmes_de_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "Pokémon é uma franquia de mídia criada pelo designer de jogo eletrônico Satoshi Tajiri que se concentra em criaturas fictícias chamadas Pokémon. Em 2020, houve 23 filmes de animação e um filme live-action. Os primeiros dezenove filmes de animação são baseados na série de televisão de anime de mesmo nome, com o filme original sendo refeito no dia 22. Os 20º, 21º e 23º filmes de animação são ambient\n[…]\nNesses quatro filmes distribuídos pela Miramax, havia elencos de dublagem parcial ou totalmente diferentes dos da série de TV em muitos países. Começando com Pokémon: Lucario and the Mystery of Mew, a Viz Media é a única licenciada na América do Norte (com a Studio Distribution Services, LLC, um consórcio entre a Warner Bros.\n[…]\nHome Entertainment e a Universal Pictures Home Entertainment, responsável pela distribuição de DVDs de Pokémon na América do Norte: Lucario and the Mystery of Mew em diante). Nos lançamentos brasileiros, os três primeiros filmes foram distribuídos pela Warner Bros.; quarto, sexto e sétimo foram distribuídas pela Europa Filmes; quinto foi distribuída pela Buena Vista, e a partir do oitavo filme foi distribuída pela SDI Media Poland.\n[…]\nO ais recente filme de animação, Pokémon the Movie: Secrets of the Jungle, foi originalmente programado para ser lançado nos cinemas japoneses em 10 de julho de 2020, mas foi adiado para 25 de dezembro de 2020, devido à pandemia de COVID-19; foi lançado em 8 de outubro de 2021, nos Estados Unidos e Brasil. O próximo filme, Pokémon: Wild Card, será dirigido por Katsuhiko Kitada no estúdio de animação CloverWorks e tem lançamento previsto para 2027.\n[…]\n«Pokémon Filmes – Website oficial dos EUA»\n[…]\n«Pokémon Filmes – Website oficial do Japão» (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "The Legend of Thunder!",
      "descricao": "Especial de TV do anime Pokémon, passado em Johto, protagonizado pelos treinadores Jimmy e Marina em vez de Ash."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No especial de TV The Legend of Thunder, passado em Johto, os jovens treinadores Jimmy e Marina tentam proteger qual fera lendária?",
    "resposta": "Raikou",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/The_Legend_of_Thunder!",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Chronicles"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/The_Legend_of_Thunder!",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Chronicles",
        "situacao": "ok",
        "texto": "Pokémon Chronicles is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise. It serves as a spin-off series of the Pokémon anime series, revolving around characters other than Ash Ketchum.\n[…]\nSean Schemmel as Jimmy\n[…]\nCaren Manuel as Marina\n[…]\nThe ending is a repeat of the opening on the left of the screen, with the credits rolling past on the right. There are a few variations, however. The DVD version and first two parts of The Legend of Thunder shows footage from the battle at the start of Part Two. The ending for Pikachu's Winter Vacation on the DVD rolls over a full screen picture taken from the episode.\n[…]\nWhen the series aired in America, starting with the second episode, the intro sequence was changed to a newer version, consisting of a montage of various scenes from \"The Legend of Thunder\" with more intense music. In the original of \"The Legend of Thunder\", it also features a cameo by the Johto rival, and later in another episode.\n[…]\nThe complete series was released in the UK by Contender Entertainment Group in four volumes, released between 2005 and 2006. The first volume contained a feature-length version of The Legend of Thunder alongside the first Pikachu's Winter Vacation part, and \"A Family That Battles Together Stays Together!\". Volumes 2 and 3 were each combined into a single release and have five episodes each. Volume 4 contains seven episodes."
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Versão brasileira do anime Pokémon",
      "descricao": "Exibição dublada em português do anime Pokémon no Brasil, que estreou na TV aberta no fim dos anos noventa."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Os nomes Ash, Misty e Brock, no lugar de Satoshi, Kasumi e Takeshi, revelam de onde partiu a dublagem brasileira do anime. Que versão serviu de base?",
    "resposta": "A versão americana",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_(anime)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_(TV_series)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_(anime)",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nEsses companheiros incluem Misty Willams (Kasumi), Brock Harrison (Takeshi), Tracey Sketchit (Kenji), May (Haruka), Max (Masato), Dawn (Hikari), Iris, Cilan (Dent), Serena, Clemont (Citron), Bonnie (Eureka), Lillie ou Lillian (Lilie), Kiawe (Kaki), Lana ou Victória (Suiren), Mallow ou Lulú (Mao), Sophocles ou Chris (Mamane), Goh (Go), Koharu ou Chloe (Koharu), cada um buscando seus próprios objetivos, como se tornar um Coordenador Pokémon de elite, um Criador Pokémon habilidoso ou capturar Mew.\n[…]\nPokémon Horizontes, a Série\n[…]\nPokémon Generations é uma série ONA com curtas passados na versão norte-americana baseado nos traços de Pokémon Origins, possui um total de 18 episódios. Eles foram ao ar em 9 de dezembro de 2016 no canal Pokémon do YouTube.\n[…]\nPokémon Evolutions  é uma série ONA com curtas passados na versão norte-americana baseado nos traços de Pokémon Generations, possui um total de 8 episódios. Eles foram ao ar em 9 de setembro de 2021 no canal Pokémon do YouTube.\n[…]\nPokémon foi originalmente licenciado nos Estados Unidos pela 4Kids Entertainment, que produziu uma adaptação localizada em inglês, distribuída pela The Summit Media Group. A versão localizada estreou em distribuição em 8 de setembro de 1998, vinte dias antes do lançamento norte-americano de Pokémon Red e Blue. Pokémon foi distribuído em VHS e DVD pela Pioneer Entertainment e Viz Video, que venderam 25 milhões de unidades da série em 2000.\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_(TV_series)",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nAsh Ketchum (サトシ, Satoshi)\n[…]\nMisty (カスミ, Kasumi)\n[…]\nBrock (タケシ, Takeshi)\n[…]\nThe films are variously produced by the animation studios OLM, Production I.G, Xebec, and Wit Studio, and distributed in Japan by Toho, with various studios distributing the films in North America. They were directed by Kunihiko Yuyama and Tetsuo Yajima, and written by Takeshi Shudo, Hideki Sonoda, Atsuhiro Tomioka, Shōji Yonemura, Eiji Umehara, and Aya Takaha.\n[…]\nThe hosts were Mayumi Iizuka as Kasumi (Misty) and Yūji Ueda as Takeshi (Brock). They were regularly joined by Kaba-chan, Manami Aihara, Bernard Ackah and Rex Jones as the comedy team \"Shio Koshō\", Megumi Hayashibara as Musashi (Jessie), Shin-ichiro Miki as Kojirō (James), and Inuko Inuyama as Nyāsu (Meowth). The show ran from October 15, 2002, to September 28, 2004, when it was replaced by Pokémon Sunday.\n[…]\nPokémon was originally licensed in the United States by 4Kids Entertainment, which produced a localized English adaptation that was syndicated by The Summit Media Group. The localized version premiered in first run syndication on September 8, 1998, twenty days before the North American release of Pokémon Red and Blue. Pokémon was distributed on VHS and DVD by Pioneer Entertainment and Viz Video, which sold 25 million units of the series in 2000.\n[…]\nPokémon seasons\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "GOTCHA! (clipe)",
      "descricao": "Clipe animado de 2020 que relembra as aventuras dos jogos Pokémon, embalado pela música Acacia."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que banda de rock japonesa canta Acacia, música do clipe animado GOTCHA!, de 2020, que relembra as aventuras dos jogos Pokémon?",
    "resposta": "Bump of Chicken",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/GOTCHA!",
      "https://en.wikipedia.org/wiki/Bump_of_Chicken"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/GOTCHA!",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bump_of_Chicken",
        "situacao": "ok",
        "texto": "Bump of Chicken (Japanese: バンプ・オブ・チキン, Hepburn: Banpu Obu Chikin; stylized in all caps) is a Japanese alternative rock group from Sakura, Chiba. The band members are Motoo Fujiwara (vocals, rhythm), Hiroaki Masukawa (guitar), Yoshifumi Naoi (bass) and Hideo Masu (drums). Since their conception in 1994, they have released 28 singles and 10 albums. They are a popular group in Japan; every release si\n[…]\nIn May 2020, in response to the COVID-19 pandemic, BUMP OF CHICKEN released the full live footage of their BUMP OF CHICKEN TOUR 2017–2018 PATHFINDER SAITAMA SUPER ARENA concert film on YouTube for a limited time. Additionally, the band released nearly all of their music videos that had not been previously available on YouTube, including those from after their major debut.\n[…]\nOn September 29, 2020, BUMP OF CHICKEN released a collaboration music video for Pokémon featuring the song \"Acacia\", titled \"GOTCHA!\" that was uploaded to celebrate the release of the Crown Tundra DLC in Pokémon Sword and Shield for the Nintendo Switch. The music video was produced by Bones and directed by Rie Matsumoto. The song was made available for pre-release on September 30, 2020.\n[…]\nOn November 4, 2020, they released their first physical single in about two years, Acacia / Gravity, along with the live concert film BUMP OF CHICKEN TOUR 2019 aurora ark TOKYO DOME.\n[…]\nDecember 26, 2025 – FM802 ROCK FESTIVAL RADIO CRAZY 2025\n[…]\nNippon Broadcasting System BUMP OF CHICKEN's allnightnippon-r (Weekly Tuesday 2nd part regular) (December 2001 – March 2002)\n[…]\nJFN BUMP OF CHICKEN Produce Super Edition (August 2004)\n[…]\nBUMP OF CHICKEN 18 Sai (NHK General, March 31, 2023)\n[…]\nSongs performed: \"Nana-iro\", \"RAY\", \"SOUVENIR\", \"Sleep Walking Orchestra\", \"Chronostasis\", \"Tentai Kansoku\", \"Acacia\" (Appearing on BUMP OF CHICKEN Fes)\n[…]\nBUMP OF CHICKEN \"WILLPOLIS 2014\" Theatrical Version (Released December 5, 2014)\n[…]\nBUMP OF CHICKEN Official Website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bump_of_chicken",
        "situacao": "ok",
        "texto": "BUMP OF CHICKEN (バンプ・オブ・チキン, Banpu Obu Chikin) é um grupo de rock alternativo japonês formado em 1994 em Sakura, Chiba, Japão. Os membros da banda são Fujiwara Motoo (vocal e guitarra), Masukawa Hiroaki (guitarra), Naoi Yoshifumi (baixo) e Masu Hideo (bateria). Desde sua criação em 1994, eles lançaram vinte e três singles e oito álbuns.\n[…]\nNo mesmo ano, a banda entrou em hiato, devido a entrada dos integrantes a universidade.\n[…]\nNo ano de 2015, eles lançam seu segundo DVD e álbum ao vivo, \"BUMP OF CHICKEN WILLPOLIS 2014\"  da Tour WILLPOLIS de 2013, no mesmo ano, é lançado o single duplo Hello,world! / Colony (コロニー), a Hello,world! foi usada como música de abertura do anime Blood Blockade Battlefront (血界戦線, Kekkai Sensen) e \"Colony\" foi usada como tema do filme Parasyte: Part 2 (寄生獣 完結編).\n[…]\nJá em 2017, a música \"GO\" é usada no o anime do jogo Granblue Fantasy (グランブルーファンタジー)  e em 2 de maio de 2017, saiu o single \"Ribbon (リボン) \"e 05 de julho de 2017, \"Kinen Satsuei (記念撮影)\", ambos saíram digitalmente e em setembro foi iniciada a tour「BUMP OF CHICKEN TOUR 2017-2018 PATHFINDER」.\n[…]\nEm 2018, foi lançado mais um DVD e álbum ao vivo, o quinto do grupo, BUMP OF CHICKEN TOUR 2017-2018 PATHFINDER SAITAMA SUPER ARENA, os singles digitais, Bouen no March (望遠のマーチ)  e Sirius (シリウス), esse sendo relançado no single regular, junto com Hanashi ga Shitai yo (話がしたいよ) e Spica. \"Sirius\" e \"Spica\" são as músicas tema de abertura e fechamento, do anime Juushinki Pandora (Shoji Kawamori) de 2018. A música Gekkou (月虹) esta sendo usada no anime Karakuri Circus de 2018 também.\n[…]\nSite do Bump of Chicken (em japonês)\n[…]\nTwitter do  Bump of Chicken (em japonês)\n[…]\nInstagram do  Bump of Chicken (em japonês)\n[…]\nYoutube do Bump of Chicken (em japonês) (em inglês)\n[…]\nSite do Bump of Chicken na Toy's Factory (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Team Go-Getters Out of the Gate!",
      "descricao": "Especial animado de 2006 baseado nos primeiros jogos Pokémon Mystery Dungeon, sobre um menino transformado em pokémon que forma uma equipe de resgate."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No especial animado Team Go-Getters Out of the Gate!, de Mystery Dungeon, um menino acorda transformado em pokémon e se junta a Charmander e Chikorita. Em que pokémon?",
    "resposta": "Squirtle",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Team_Go-Getters_Out_of_the_Gate!"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Team_Go-Getters_Out_of_the_Gate!",
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
