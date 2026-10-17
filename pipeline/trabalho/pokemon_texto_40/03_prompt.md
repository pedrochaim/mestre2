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
      "nome": "Pokémon: O Filme",
      "descricao": "Primeiro filme da franquia Pokémon, em que Ash e Pikachu enfrentam o clone Mewtwo, lançado no Japão no fim dos anos noventa."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No fim do primeiro filme, Ash vira pedra ao se jogar entre os ataques de Mew e Mewtwo. O que o traz de volta à vida?",
    "resposta": "As lágrimas dos pokémon",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_First_Movie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_First_Movie",
        "situacao": "ok",
        "texto": "Pokémon: The First Movie is a 1998 Japanese animated fantasy adventure film directed by Kunihiko Yuyama. It is the first in the Pokémon anime film series. The film was first released in Japan on July 18, 1998, to positive reviews, with praise directed at the film's emotional impact and exploration of ethical topics such as cloning, genetic modification, and existentialism.\n[…]\nA full CGI remake of the movie, titled Pokémon: Mewtwo Strikes Back – Evolution, was released in 2019.\n[…]\nThe subsequent releases of Pokémon: The Movie 2000 and Pokémon 3: The Movie featured a similar marketing campaign. The March 2000 home video release of The First Movie had TV, in-school, and online ads with companies such as Clorox, Kraft, and Zenith Electronics, a contest to win a trip to Japan, and a limited edition Mewtwo card (different from that used for the theatrical release) that was packaged with the video.\n[…]\nfor Nintendo 3DS and Wii U was heralded by the tagline \"Mewtwo Strikes Back!\" in a gameplay trailer. Instead of Ichimura, Mewtwo is voiced by Keiji Fujiwara in Super Smash Bros. for Nintendo 3DS and Wii U and Super Smash Bros. Ultimate. Elements and references from the second Mewtwo in Pokémon the Movie: Genesect and the Legend Awakened are included in later games such as its Mega Evolution, Final Smash, and Boxing Ring title.\n[…]\nDuring the end credits of Pokémon the Movie: The Power of Us (2018), it was announced that a CGI remake was set to release in the following year. In December 2018, the release date of the remake was revealed as July 12, 2019. Pokémon fansite Serebii reported that the film, titled Pokémon: Mewtwo Strikes Back – Evolution, would be directed by Kunihiko Yuyama and Motonori Sakakibara.\n[…]\nPokémon: The First Movie  at Anime News Network's encyclopedia\n[…]\nPokémon: The First Movie at Rotten Tomatoes\n[…]\nPokémon: The First Movie at Box Office Mojo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_First_Movie",
        "situacao": "ok",
        "texto": "Pokémon: The First Movie: Mewtwo Strikes Back, geralmente referido como Pokémon: The First Movie, originalmente lançado como Pocket Monsters the Movie: Mewtwo Strikes Back! (劇場版ポケットモンスター ミュウツーの逆襲, Gekijōban Poketto Monsutā: Myūtsū no Gyakushū), é um filme de anime de 1998, dirigido por Kunihiko Yuyama, o diretor chefe da série de televisão Pokémon. Foi o primeiro filme da franquia Pokémon.\n[…]\nCom a luta interrompida, Pikachu tenta reanimar seu treinador, verificando que este está tecnicamente morto. Ao ver Pikachu inconsolado com a perda, todos os Pokémon, originais e clones, entristecem-se por perceberem o quanto estavam errados em lutar e a consequência dessa luta. As lágrimas de todos os Pokémon devolvem a vida a Ash, clareando a mente de Mewtwo de que nem todos os humanos são maléficos.\n[…]\nPokémon: The First Movie é a trilha sonora do primeiro filme de Pokémon lançada nos Estados Unidos em 10 de novembro de 1999. Mais tarde, foi lançado o álbum Pokémon: The First Movie Original Motion Picture Score.\n[…]\nPokémon: O Filme - Mewtwo Contra-Ataca foi exibido pela 1ª vez nos cinemas no dia 18 de julho de 1998 no Japão pela distribuição da Toho. No ano seguinte, o filme foi exibido nos Estados Unidos no dia 10 de novembro de 1999, de acordo com o licenciamento da 4Kids Entertainment e da Kids' WB. No Brasil, o filme foi exibido no dia 7 de janeiro de 2000 e em Portugal no dia 19 de março de 2000.\n[…]\nApós a exibição nos cinemas, Pokémon: O Filme - Mewtwo Contra-Ataca foi lançado no Japão em VHS no dia 12 de fevereiro de 1999, também foi lançado em DVD no dia 23 de junho de 2000. Nos Estados Unidos, foi lançado em VHS e DVD no dia 21 de março de 2000, no Brasil e em Portugal no mesmo ano pela distribuição da Warner Home Video.\n[…]\nPokémon: The First Movie no IMDb\n[…]\n«Pokémon: The First Movie» (em inglês)  no Rotten Tomatoes\n[…]\nPokémon: The First Movie (em inglês). no Box Office Mojo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Mewtwo",
      "descricao": "Pokémon lendário do tipo Psíquico da primeira geração, clone criado a partir do material genético de Mew."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Na abertura do primeiro filme Pokémon, que cientista comanda o laboratório onde Mewtwo é criado, com dinheiro de Giovanni?",
    "resposta": "Doutor Fuji",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_First_Movie",
      "https://en.wikipedia.org/wiki/Mewtwo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_First_Movie",
        "situacao": "ok",
        "texto": "Pokémon: The First Movie is a 1998 Japanese animated fantasy adventure film directed by Kunihiko Yuyama. It is the first in the Pokémon anime film series. The film was first released in Japan on July 18, 1998, to positive reviews, with praise directed at the film's emotional impact and exploration of ethical topics such as cloning, genetic modification, and existentialism.\n[…]\nGiovanni, leader of Team Rocket, recruits scientist Dr. Fuji to create a cloned supersoldier from an eyelash of the Mythical Pokémon Mew, with Fuji intending to use the research to clone his deceased daughter, Amber. In a laboratory, the weapon eventually gains sentience and is named Mewtwo. Mewtwo befriends the salvaged consciousness of Amber, named Ambertwo, as well as the clones of other Pokémon in the laboratory.\n[…]\nHowever, Mewtwo becomes traumatized after Ambertwo and the rest of the clones decompose and die. To stabilize him, Fuji tranquilizes Mewtwo, causing him to fall into suspended animation.\n[…]\nAfter Mewtwo fully matures and awakens from his long slumber in the laboratory on New Island, he learns of his origins. Infuriated that Fuji and his colleagues see him as a mere experiment, he uses his psychic abilities to telekinetically destroy the laboratory and kill Fuji and the scientists. Giovanni, witnessing the carnage from afar, offers Mewtwo his help to develop and perfect his mental abilities.\n[…]\nAfter rebuilding the laboratory and establishing a base there, Mewtwo sends invites to several trainers through hologram messages to battle the greatest Pokémon Master in the world on New Island. Ash Ketchum, Misty, and Brock receive a message and accept the invitation, but by the time they arrive at the port city, Old Shore Wharf, Mewtwo has created a storm, causing the boats to be closed off for safety.\n[…]\nPokémon: The First Movie at IMDb\n[…]\nPokémon: The First Movie at Box Office Mojo"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mewtwo",
        "situacao": "ok",
        "texto": "Mewtwo ( ; Japanese: ミュウツー, Hepburn: Myūtsū) is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise. It was first introduced in the video games Pokémon Red and Blue, and later appeared in subsequent sequels and spin-off titles. In the video games, the player can fight and capture Mewtwo in order to subsequently pit it against other Pokémon.\n[…]\nIn September 1999, Nintendo published Sound Picture Box Mewtwo, which included The Birth of Mewtwo: Pokémon Radio Drama, a CD drama that expands upon Mewtwo's origins. Created by scientist Dr. Fuji, Mewtwo is one of several cloning attempts, which also includes Amber, a clone of Fuji's deceased daughter. The young Mewtwo befriends Amber, communicating telepathically; however, the cloning process proves unstable, and she dies.\n[…]\nA Mewtwo, which was created by Mr. Fuji, appears in the anime miniseries Pokémon Origins, which is generally based on the plot of the video games Pokémon FireRed and LeafGreen. As such, Red goes to Cerulean Cave, and uses the Mega Evolution mechanic introduced in Pokémon X and Y to Mega Evolve his Charizard for the fight with Mewtwo, whom Red captures.\n[…]\nAfter defeating Ash and Goh in a battle, Mewtwo decides to leave Cero Island with the rescued Pokémon and teleports them back to the Cerise Laboratory, allowing them to retain their memories of the encounter.\n[…]\nFuji, takes on the role of a coach for the fully developed Pokémon, while his employers, Team Rocket, test its abilities. Learning of a plan to mass-produce it as a weapon, Fuji approaches Mewtwo and tells it to destroy the lab and Fuji himself. Mewtwo refuses, stating it can not harm the doctor, whom it regards as its father. Once captured by Team Rocket, Fuji tells Mewtwo that he is honored by the statement and is then killed. Angered by his death, Mewtwo destroys the lab and escapes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_First_Movie",
        "situacao": "ok",
        "texto": "Pokémon: The First Movie: Mewtwo Strikes Back, geralmente referido como Pokémon: The First Movie, originalmente lançado como Pocket Monsters the Movie: Mewtwo Strikes Back! (劇場版ポケットモンスター ミュウツーの逆襲, Gekijōban Poketto Monsutā: Myūtsū no Gyakushū), é um filme de anime de 1998, dirigido por Kunihiko Yuyama, o diretor chefe da série de televisão Pokémon. Foi o primeiro filme da franquia Pokémon.\n[…]\nMewtwo Contra-Ataca conta a história de um Pokémon criado por humanos, Mewtwo, que foi clonado a partir de um amostra do pelo do raro Mew. No prólogo, ao ver que foi criado artificialmente, e não naturalmente, Mewtwo revolta-se, explodindo todo o laboratório de pesquisas e matando todos os cientistas que ali estavam. Por helicóptero, um homem chega e convida Mewtwo a descobrir quais são seus verdadeiros poderes, sem revelar que foi ele quem mandou criar Mewtwo.\n[…]\nQuando este é apresentado, alguns treinadores ficam inconformados, ao verem que o treinador é também um Pokémon. Mesmo assim, Mewtwo convida os treinadores a enfrentá-lo em uma arena especial. Ao mesmo tempo, a Equipe Rocket explora o subsolo do castelo, encontrando um pequeno laboratório com Venusaur, Charizard e Blastoise em tubos. Jessie e James descobrem que estes são Pokémon clonados e também o último depoimento do criador de Mewtwo.\n[…]\nPokémon: The First Movie é a trilha sonora do primeiro filme de Pokémon lançada nos Estados Unidos em 10 de novembro de 1999. Mais tarde, foi lançado o álbum Pokémon: The First Movie Original Motion Picture Score.\n[…]\nApós a exibição nos cinemas, Pokémon: O Filme - Mewtwo Contra-Ataca foi lançado no Japão em VHS no dia 12 de fevereiro de 1999, também foi lançado em DVD no dia 23 de junho de 2000. Nos Estados Unidos, foi lançado em VHS e DVD no dia 21 de março de 2000, no Brasil e em Portugal no mesmo ano pela distribuição da Warner Home Video.\n[…]\nPokémon: The First Movie no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pokémon 2000",
      "descricao": "Segundo filme da franquia Pokémon, em que Ash ajuda o lendário Lugia a salvar o mundo, conhecido no Brasil como Pokémon 2000: O Poder de Um."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Pokémon 2000 se passa na ilha Shamouti, onde uma lenda anuncia a chegada de um Escolhido. Em que arquipélago do anime fica essa ilha?",
    "resposta": "Ilhas Laranja",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_The_Movie_2000",
      "https://bulbapedia.bulbagarden.net/wiki/Shamouti_Island"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_The_Movie_2000",
        "situacao": "ok",
        "texto": "Pokémon the Movie 2000 is a 1999 Japanese animated fantasy adventure film directed by Kunihiko Yuyama. It is the second film of the Pokémon anime series and of Pokémon the Series: The Beginning.\n[…]\nOn March 2, 2000, Warner Bros. Pictures announced they had acquired worldwide distribution rights to the film outside Asia from 4Kids Entertainment, following the success the two companies had with Pokémon: The First Movie. The film was released under their Kids' WB/Warner Bros. Family Entertainment labels on July 21, 2000, in the United States, with a July 15, 2000, premiere at Mann's Village Theatre.\n[…]\nPokémon The Movie 2000 was released on VHS and DVD on November 14, 2000.\n[…]\nA more positive review was given by Gene Seymour of the Los Angeles Times. Seymour believed that the film \"charms without talking down to its audience\". He also compared it favorably to the first movie, stating, \"...unlike its predecessor, 'Pokémon 2000' doesn't assume that everyone who sees it will know how to tell Togepi from Bulbasaur or Squirtle from Pikachu. Sure, I know now, but I'm not telling because I don't have to\".\n[…]\nAt the 2000 Stinkers Bad Movie Awards, the film was nominated for \"Worst Achievement in Animation\" and \"The Remake or Sequel Nobody Was Clamoring For\". However, it lost \"Worst Achievement in Animation\" to Digimon: The Movie.\n[…]\nPokémon the Movie 2000 Original Motion Picture Score is the orchestral soundtrack to the movie. The CD was originally released in some European countries in 2000. In 2004, it became available for download worldwide on iTunes.\n[…]\nPokémon the Movie 2000 at IMDb\n[…]\nPokémon the Movie 2000 (anime) at Anime News Network's encyclopedia\n[…]\nPokémon the Movie 2000 at Rotten Tomatoes"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Shamouti_Island",
        "situacao": "inacessivel",
        "texto": ""
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
    "indice": 4,
    "ancora": {
      "nome": "Melody (Pokémon 2000)",
      "descricao": "Moça da ilha Shamouti no filme Pokémon 2000, escolhida para o festival da ilha, que toca a canção ligada a Lugia."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Pokémon 2000, que moça da ilha Shamouti, escolhida para o festival, toca na flauta a música que chama o lendário Lugia?",
    "resposta": "Melody",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_The_Movie_2000"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_The_Movie_2000",
        "situacao": "ok",
        "texto": "Pokémon the Movie 2000 is a 1999 Japanese animated fantasy adventure film directed by Kunihiko Yuyama. It is the second film of the Pokémon anime series and of Pokémon the Series: The Beginning.\n[…]\nMeanwhile, Ash Ketchum, Misty, and Tracey Sketchit are crossing the Orange Islands when they are caught in a storm and washed ashore on Shamouti Island. The inhabitants are celebrating their annual festival and select Ash as their \"Chosen One\", who, festival maiden Melody explains, must retrieve three crystal balls from each of the legendary birds' islands and bring them to Shamouti's shrine.\n[…]\nWith the prophecy seemingly coming true, the group realize Ash is the actual Chosen One, and Lugia, revived when Melody plays the festival song on her conch, explains telepathically only Ash can restore harmony to the world by retrieving Articuno's Treasure. Ash heads to Ice Island, navigating through the legendary birds' battle with help from Team Rocket, wanting to save the world to continue their villainy.\n[…]\nMisty and Tracey rescue Ash and Pikachu and return them to Shamouti, where Ash places the final treasure and Melody plays the festival's song, causing the storms to subside, bringing harmony to the legendary birds, causing the currents behind the disruption to the world's climates to dissipate, and reviving Lugia. Articuno, Moltres, and Zapdos return to their respective islands, and Lugia thanks Ash for his efforts as he returns to the sea.\n[…]\nPokémon The Movie 2000 was released on VHS and DVD on November 14, 2000.\n[…]\nList of Pokémon films\n[…]\nPokémon the Movie 2000 at IMDb\n[…]\nPokémon the Movie 2000 (anime) at Anime News Network's encyclopedia\n[…]\nPokémon the Movie 2000 at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_Movie_2000",
        "situacao": "ok",
        "texto": "Pokémon: The Movie 2000: The Power of One, geralmente referido como Pokémon O Filme 2000, originalmente lançado no Japão como Pocket Monsters the Movie: Revelation Lugia (劇場版ポケットモンスター 幻のポケモン ルギア爆誕, Gekijōban Poketto Monsutā Maboroshi no Pokemon Rugia Bakutan; lit. \"Mirage Pokémon: Lugia's Explosive Birth\"), é um filme de animação de 1999 dirigido por Kunihiko Yuyama. É o segundo filme da franquia \n[…]\nEnquanto Ash, Misty e Tracey viajam num barco, Giraldan, um colecionador de bichinhos pokémon, prepara seu mais novo plano: capturar o raro Lugia. Para tanto, provoca uma catástrofe climática quando ataca e retira de suas ilhas os três pássaros sagrados: Moltres, o pássaro-guardião de fogo; Zapdos, o pássaro-guardião do trovão; e Articuno, o pássaro-guardião do gelo.\n[…]\nLugia - Maurício Berger\n[…]\nMundo Pokémon - SNZ\n[…]\nPokémon World - Youngstown feat. Nobody's Angel\n[…]\nPokémon: O Filme 2000 foi lançado pela 1ª vez nos cinemas japoneses no dia 17 de Julho de 1999 no Japão pela distribuição da Toho. No ano seguinte, o filme foi lançado no dia 21 de Julho de 2000 nos Estados Unidos, no Canadá e no Brasil, pelo licenciamento da 4Kids Entertainment e da Kids' WB. Foi exibido em Portugal no dia 15 de Dezembro no mesmo ano.\n[…]\nApós o lançamento nos cinemas, Pokémon: O Filme 2000 foi lançado em VHS no Japão em 2 de fevereiro de 2000 e também foi lançado em DVD em 22 de novembro de 2000. No mesmo ano, foi lançado em VHS e DVD nos Estados Unidos em 14 de novembro de 2000 e no Brasil pela Warner Home Video.\n[…]\nNos Estados Unidos, foi relançado em DVD e lançado em Blu-ray no dia 2 de fevereiro de 2016 pela Viz Media, fazendo parte da coleção Pokémon: The Movies 1-3 Collection, depois foi relançado em 2 de outubro de 2018 em formato padrão. Em 2017, está disponível em formato digital no Brasil pela iTunes e pelo Google Play.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Pokémon 3: O Filme",
      "descricao": "Terceiro filme da franquia Pokémon, de 2000, em que os Unown criam um mundo de cristal ao redor da menina Molly e de um Entei ilusório."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Pokémon 3, os Unown cobrem de cristal a mansão da menina Molly e boa parte da cidade em volta. Como se chama essa cidade?",
    "resposta": "Greenfield",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_3:_The_Movie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_3:_The_Movie",
        "situacao": "ok",
        "texto": "Pokémon 3: The Movie is a 2000 Japanese anime film directed by Kunihiko Yuyama as the third film in the Pokémon franchise. The film stars the voices of Rica Matsumoto, Ikue Ōtani, Mayumi Iizuka, Yūji Ueda, Megumi Hayashibara, Shin-ichiro Miki, Inuko Inuyama, Yumi Tōma, Satomi Kōrogi, Unshō Ishizuka, Kōichi Yamadera, Naoto Takenaka, Hirohide Yakumaru, and Ai Kato, and Noriko Sakai. In the film, Ash\n[…]\nIn the town of Greenfield, research scientist Professor Spencer Hale conducts research on the elusive Pokémon Unown. He and his assistant, Skyler, discover a site of ruins, but Hale is sucked into the dimension of the Unown. His disappearance leaves his young daughter Molly alone, her mother having disappeared previously. Molly finds a box of tablets containing Unown images and begins assembling the letters, which summons the Unown themselves.\n[…]\nMeanwhile, Ash Ketchum, Misty, and Brock meet and befriend a trainer named Lisa, arriving in Greenfield just in time to see the crystallization slowly in progress. They also meet up with Professor Oak and Ash's mom, Delia, who arrived to help with the situation, as the Ketchums are old friends of the Hales. However, Entei kidnaps Delia, following Molly's request for a mother as well, and he hypnotizes her into thinking she is Molly's mother.\n[…]\nPokémon 3: The Movie was released on VHS and DVD on August 21, 2001.\n[…]\nPokémon 3: The Ultimate Soundtrack is the soundtrack to the third series and the movie, It was released on April 3, 2001, by Koch Records on Audio CD and Compact Cassette. Many of the songs were featured on the album Totally Pokémon but as that was not released outside of North America and Australia, this soundtrack encouraged European fans to own the music.\n[…]\nPokémon 3: The Movie at IMDb\n[…]\nPokémon 3: The Movie  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_3%3A_Spell_of_the_Unown",
        "situacao": "ok",
        "texto": "Pokémon 3: The Movie: Spell of the Unown, geralmente referido como Pokémon 3: The Movie, originalmente lançado no Japão como Pocket Monsters the Movie: Lord of the \"UNKNOWN\" Tower, ENTEI (劇場版ポケットモンスター 結晶塔の帝王 ENTEI, Gekijōban Poketto Monsutā Kesshōtō no Teiō ENTEI), é um filme de animação de 2000, dirigido por Kunihiko Yuyama. É o terceiro filme da franquia Pokémon, sendo lançado nos cinemas japone\n[…]\nA mãe de Ash fala que o Entei saiu a pouco, e Ash explica toda história para ela. A mãe de Ash acorda Molly, e diz a ela que Ash é o seu filho, não ela. Molly não quer que sua mãe vá embora novamente, e ela então começa a chorar. Cristais então começam a explodir em volta dela. Entei nota o que está acontecendo, e volta para Molly. Ash então fala que a mãe dele, não de Molly, então chama Totodile para lutar contra Entei.\n[…]\nUm pouco antes, Molly implora para que seu pai não machuque Charizard. Misty e Brock pedem que Molly vá com a mãe de Ash, dizendo que ela é muito boa em batalhas Pokémon. Então a mãe de Ash e Molly se abraçam. Molly chora de alegria, e os cristais desaparecem. Entei começa a desaparecer, dizendo se ela está feliz assim, ele também está. Eles tentam ir embora, mas os Unowns percebem o que está acontecendo e não querem que Molly vá embora, então eles começam a fazer mais cristais em volta.\n[…]\nEntei atira neles, e eles começam a descer correndo pela escadas abaixo. Enquanto isso, os cristais começam a perder o controle, e começam a envolver o Centro Pokémon.\n[…]\nPokémon Johto (Versão Filme)\n[…]\nPokémon 3: O Feitiço dos Unown foi lançado pela 1ª vez nos cinemas japoneses no dia 8 de Julho de 2000 no Japão pela distribuição da Toho. No ano seguinte, o filme foi lançado no dia 6 de Abril de 2001 nos Estados Unidos e no Canadá, pelo licenciamento da 4Kids Entertainment e da Kids' WB. Foi exibido no Brasil no dia 6 de Julho e em Portugal no dia 14 de dezembro no mesmo ano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Pokémon 3: O Filme",
      "descricao": "Terceiro filme da franquia Pokémon, de 2000, em que os Unown criam um mundo de cristal ao redor da menina Molly e de um Entei ilusório."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon 3, o filme do mundo de cristal criado pelos Unown, estreou nos cinemas japoneses em que ano?",
    "resposta": "2000",
    "distratores": [
      "1999",
      "2001",
      "2002"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_3:_The_Movie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_3:_The_Movie",
        "situacao": "ok",
        "texto": "Pokémon 3: The Movie is a 2000 Japanese anime film directed by Kunihiko Yuyama as the third film in the Pokémon franchise. The film stars the voices of Rica Matsumoto, Ikue Ōtani, Mayumi Iizuka, Yūji Ueda, Megumi Hayashibara, Shin-ichiro Miki, Inuko Inuyama, Yumi Tōma, Satomi Kōrogi, Unshō Ishizuka, Kōichi Yamadera, Naoto Takenaka, Hirohide Yakumaru, and Ai Kato, and Noriko Sakai. In the film, Ash\n[…]\nPokémon 3: The Movie was released in Japanese theaters on July 8, 2000, by Toho. That following year, the English version, produced by Nintendo and 4Kids Entertainment and licensed by Warner Bros. Pictures under their Kids' WB/Warner Bros. Family Entertainment labels, was released in North America on April 6, 2001. The events of the film take place at the end of the third season of Pokémon: The Johto Journeys.\n[…]\nA limited edition Blu-ray Steelbook containing the first three Pokémon films was released on February 9, 2016, along with single releases on DVD (these are: Pokémon: The First Movie, Pokémon: The Movie 2000 and Pokémon 3: The Movie). In accommodation with the 20th anniversary of the Pokémon franchise, a digitally remastered version of the film was released on iTunes, Amazon and Google Play on February 27, 2016.\n[…]\nPokémon 3: The Movie opened in theaters in Japan on July 8, 2000, with a 74-minute running time. The film was the third highest-grossing film in Japan for the year behind Mission: Impossible 2 and The Green Mile, with a gross of US$48.5 million.\n[…]\nIn Australia, some copies of the CD were released with a bonus disc of the musical score album for Pokémon: The Movie 2000 (which was also released as a separate disc worldwide). The Japanese and English-language editions contained different tracks. Shinji Miyazaki wrote the original film score, while Ralph Schuckett composed the score for the International and Japanese DVD releases.\n[…]\nPokémon 3: The Movie at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_3%3A_Spell_of_the_Unown",
        "situacao": "ok",
        "texto": "Pokémon 3: The Movie: Spell of the Unown, geralmente referido como Pokémon 3: The Movie, originalmente lançado no Japão como Pocket Monsters the Movie: Lord of the \"UNKNOWN\" Tower, ENTEI (劇場版ポケットモンスター 結晶塔の帝王 ENTEI, Gekijōban Poketto Monsutā Kesshōtō no Teiō ENTEI), é um filme de animação de 2000, dirigido por Kunihiko Yuyama. É o terceiro filme da franquia Pokémon, sendo lançado nos cinemas japone\n[…]\nAsh chama o seu Cyndaquil, e diz para ele atirar na porta, mas o cristal cresce novamente. Ele diz para ele tentar novamente, e antes Misty tira seus Pokémons de água. E com os Pokémons eles conseguem manter uma passagem aberta. O pessoal começa a passar deixando por último Ash e o Pokémon de água que estava mantendo a passagem aberta. Então Ash agarra o Pokémon e pula na abertura.\n[…]\nUm pouco antes, Molly implora para que seu pai não machuque Charizard. Misty e Brock pedem que Molly vá com a mãe de Ash, dizendo que ela é muito boa em batalhas Pokémon. Então a mãe de Ash e Molly se abraçam. Molly chora de alegria, e os cristais desaparecem. Entei começa a desaparecer, dizendo se ela está feliz assim, ele também está. Eles tentam ir embora, mas os Unowns percebem o que está acontecendo e não querem que Molly vá embora, então eles começam a fazer mais cristais em volta.\n[…]\nEntei atira neles, e eles começam a descer correndo pela escadas abaixo. Enquanto isso, os cristais começam a perder o controle, e começam a envolver o Centro Pokémon.\n[…]\nPokémon Johto (Versão Filme)\n[…]\nPokémon 3: O Feitiço dos Unown foi lançado pela 1ª vez nos cinemas japoneses no dia 8 de Julho de 2000 no Japão pela distribuição da Toho. No ano seguinte, o filme foi lançado no dia 6 de Abril de 2001 nos Estados Unidos e no Canadá, pelo licenciamento da 4Kids Entertainment e da Kids' WB. Foi exibido no Brasil no dia 6 de Julho e em Portugal no dia 14 de dezembro no mesmo ano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Pokémon 4Ever",
      "descricao": "Quarto filme da franquia Pokémon, de 2001, em que o mítico Celebi traz do passado o menino Sammy e é caçado pelo Mascarado de Ferro."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon 4Ever, o filme em que Celebi traz do passado o menino Sammy, estreou nos cinemas japoneses em que ano?",
    "resposta": "2001",
    "distratores": [
      "2000",
      "2002",
      "2003"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_4Ever"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_4Ever",
        "situacao": "ok",
        "texto": "Pokémon 4Ever is a 2001 Japanese anime film directed by Kunihiko Yuyama and based on the television series Pokémon. The fourth official Pokémon film, it was released in Japan on July 7, 2001. The film was directed in Japan by Kunihiko Yuyama and written by Hideki Sonoda. It stars Rica Matsumoto, Ikue Ōtani, Mayumi Iizuka, Yūji Ueda, Satomi Kōrogi, Megumi Hayashibara, Shin-ichiro Miki, Inuko Inuyam\n[…]\nIn a forest in the Johto region, a young Pokémon Trainer named Sammy is warned by a woman named Towa to be wary of the \"Voice of the Forest\", which is Celebi, a Mythical Pokémon capable of time travel. Celebi is pursued by a Pokémon Hunter and is injured. Sammy protects it from the hunter, but Celebi uses its powers to travel forward in time, taking Sammy with it.\n[…]\nTeam Rocket pursue the children, joining forces with the Marauder. The children are guided to the lake by wild Pokémon, where Celebi is healed. That night, Ash and Sammy bond, both hoping the latter can return to his era. The next day, the Marauder confronts the group, using a Dark Ball to capture Celebi and uses its immense powers over nature to encase it in an enormous draconian-like armor made from the forest.\n[…]\nJust as all hope of reviving Celebi is lost, the Voice of the Forest, which is actually each Celebi from across time, materializes in the sky and magically resurrects their fellow Time Travel Pokémon. Suddenly, the Marauder re-appears and tries to kidnaps Celebi again by using a jetpack to escape, but Ash and Pikachu rescue Celebi; the Marauder then crashes into the forest and is confronted by Towa, Diana, White, and the angry wild Pokémon.\n[…]\nHarvey Weinstein stated that Miramax could \"reinvigorate the franchise\" and that Pokémon 4Ever would be released in October.\n[…]\nPokémon 4Ever at IMDb\n[…]\nPokémon 4Ever at Rotten Tomatoes\n[…]\nPokémon 4Ever  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_4Ever",
        "situacao": "ok",
        "texto": "Pokémon 4: Viajantes do Tempo é o quarto filme da série Pokémon (ポケットモンスター セレビィ 時を超えた遭遇 - Serebii Toki o Koeta Deai em japonês), produzido no Japão e lançado em julho de 2001. Uma adaptação em inglês do filme foi lançada em outubro de 2002 nos Estados Unidos, produzida pela 4Kids Entertainment e distribuída pela então subsidiária da Disney, Miramax Films. O filme arrecadou de bilheteria no Japão u\n[…]\nHá 40 anos um poderoso pokémon, Celebi, escapou por pouco de um caçador especializado em capturar e vender pokémons raros. Juntamente com Sammy, um garoto, Celebi usou seus poderes para viajar no tempo e escapar da ameaça. Já no presente Sammy encontra Ash, Pikachu e seus amigos, a quem pede ajuda já que Celebi está esgotado pelo esforço feito pela viagem.\n[…]\nEntretanto o grupo terá que enfrentar um poderoso vilão, que possui uma pokebola capaz de transformar os pokémons capturados em criaturas malignas e poderosas.\n[…]\nO Pokémon 4Ever recebeu críticas geralmente negativas dos críticos de televisão. Alguns críticos consideraram \"previsível\" e \"decepcionante\", enquanto outros afirmaram que \"os espectadores não ficarão decepcionados\". O filme recebeu uma classificação de 16% no Rotten Tomatoes, de um total de 38 críticas, a mais baixa da série de filmes Pokémon (original), com leitura de consenso: \"Apenas para fãs obstinados de Pokemon\".\n[…]\nNo site TV Guide, Angel Cohn classificou o filme em 2 de 5 estrelas, afirmando que: \"embora bem feitas, essas cenas parecem chocantes e fora de sincronia com o resto do filme. Brincadeiras à parte, crianças e adultos apaixonados por tudo de Pokemon não vão se decepcionar\".\n[…]\nSammy\n[…]\nCelebi",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Pokémon 4Ever",
      "descricao": "Quarto filme da franquia Pokémon, de 2001, em que o mítico Celebi traz do passado o menino Sammy e é caçado pelo Mascarado de Ferro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Além do mítico Celebi, que fera lendária de Johto, ligada às águas puras, aparece em Pokémon 4Ever?",
    "resposta": "Suicune",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_4Ever"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_4Ever",
        "situacao": "ok",
        "texto": "Pokémon 4Ever is a 2001 Japanese anime film directed by Kunihiko Yuyama and based on the television series Pokémon. The fourth official Pokémon film, it was released in Japan on July 7, 2001. The film was directed in Japan by Kunihiko Yuyama and written by Hideki Sonoda. It stars Rica Matsumoto, Ikue Ōtani, Mayumi Iizuka, Yūji Ueda, Satomi Kōrogi, Megumi Hayashibara, Shin-ichiro Miki, Inuko Inuyam\n[…]\nIn a forest in the Johto region, a young Pokémon Trainer named Sammy is warned by a woman named Towa to be wary of the \"Voice of the Forest\", which is Celebi, a Mythical Pokémon capable of time travel. Celebi is pursued by a Pokémon Hunter and is injured. Sammy protects it from the hunter, but Celebi uses its powers to travel forward in time, taking Sammy with it.\n[…]\nMeanwhile, Ash Ketchum, Misty, and Brock arrive in the neighborhood of Arborville, spotting the legendary Suicune on a riverbank. Speaking to Professor Oak, the trio learn he encountered Suicune himself many years ago, but they have to depart before he can explain how. The group are taken to the forest by a local named Mr. White, but encounter the elderly Towa and her granddaughter Diana, and are warned of the Voice of the Forest.\n[…]\nAfter Jessie is captured, the Marauder admits he plans to use Celebi to overthrow Giovanni as leader of Team Rocket and take over the world himself. Ash, his friends, and Suicune battle to rescue Celebi from the Marauder's influence.\n[…]\nJust as all hope of reviving Celebi is lost, the Voice of the Forest, which is actually each Celebi from across time, materializes in the sky and magically resurrects their fellow Time Travel Pokémon. Suddenly, the Marauder re-appears and tries to kidnaps Celebi again by using a jetpack to escape, but Ash and Pikachu rescue Celebi; the Marauder then crashes into the forest and is confronted by Towa, Diana, White, and the angry wild Pokémon.\n[…]\nPokémon 4Ever at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_4Ever",
        "situacao": "ok",
        "texto": "Pokémon 4: Viajantes do Tempo é o quarto filme da série Pokémon (ポケットモンスター セレビィ 時を超えた遭遇 - Serebii Toki o Koeta Deai em japonês), produzido no Japão e lançado em julho de 2001. Uma adaptação em inglês do filme foi lançada em outubro de 2002 nos Estados Unidos, produzida pela 4Kids Entertainment e distribuída pela então subsidiária da Disney, Miramax Films. O filme arrecadou de bilheteria no Japão u\n[…]\nHá 40 anos um poderoso pokémon, Celebi, escapou por pouco de um caçador especializado em capturar e vender pokémons raros. Juntamente com Sammy, um garoto, Celebi usou seus poderes para viajar no tempo e escapar da ameaça. Já no presente Sammy encontra Ash, Pikachu e seus amigos, a quem pede ajuda já que Celebi está esgotado pelo esforço feito pela viagem.\n[…]\nEntretanto o grupo terá que enfrentar um poderoso vilão, que possui uma pokebola capaz de transformar os pokémons capturados em criaturas malignas e poderosas.\n[…]\nO Pokémon 4Ever recebeu críticas geralmente negativas dos críticos de televisão. Alguns críticos consideraram \"previsível\" e \"decepcionante\", enquanto outros afirmaram que \"os espectadores não ficarão decepcionados\". O filme recebeu uma classificação de 16% no Rotten Tomatoes, de um total de 38 críticas, a mais baixa da série de filmes Pokémon (original), com leitura de consenso: \"Apenas para fãs obstinados de Pokemon\".\n[…]\nNo site TV Guide, Angel Cohn classificou o filme em 2 de 5 estrelas, afirmando que: \"embora bem feitas, essas cenas parecem chocantes e fora de sincronia com o resto do filme. Brincadeiras à parte, crianças e adultos apaixonados por tudo de Pokemon não vão se decepcionar\".\n[…]\nCelebi\n[…]\nSuicune",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Bianca (Pokémon Heróis)",
      "descricao": "Menina de Altomare no filme Pokémon Heróis, neta do guardião Lorenzo, cuja aparência Latias copia para se disfarçar."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Heróis, Latias passeia por Altomare disfarçada de humana. Ela copia a aparência de qual menina, neta do guardião Lorenzo?",
    "resposta": "Bianca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Heroes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Heroes",
        "situacao": "ok",
        "texto": "Pokémon Heroes (also known as Pokémon Heroes: The Movie) is a 2002 Japanese animated film directed by Kunihiko Yuyama and written by Hideki Sonoda. Produced by OLM, Inc. and distributed by Toho, it is the fifth film in the Pokémon series. The film stars Rica Matsumoto, Ikue Ōtani, Mayumi Iizuka, Yūji Ueda, Satomi Kōrogi, Megumi Hayashibara, Shin-ichiro Miki, Inuko Inuyama, Kōichi Yamadera, Unshō I\n[…]\nIn the present, Ash Ketchum and his friends, Misty and Brock, tour the city. During a local water race, Ash and Misty briefly see an invisible Latias. Two spies named Annie and Oakley attempt to capture Latias, disguised as a human girl named Bianca, so they can gain access to the defense mechanism. Ash and Pikachu guide Latias to safety, but she disappears soon after.\n[…]\nAt a local museum, the trio learn from its curator and Bianca's grandfather Lorenzo about Alto Mare's history, the defense mechanism, and the evil trainer's fossilized Pokémon on display. Ash finds Bianca and chases her across the city into a hidden garden where Latias and Latios live. As Pikachu plays with the Pokémon, Lorenzo shows Ash the Soul Dew, unaware that Annie and Oakley have used an unmanned aerial vehicle to infiltrate the sanctuary.\n[…]\nThe film's environment and characters were referenced in later Pokémon media. The anime season Pokémon Ultimate Journeys: The Series featured cameo appearances from Bianca and Alto Mare, marking one of the few times the franchise's films were referenced in the main anime series. In 2017, The Pokémon Company hosted a fan poll to celebrate the release of the 2017 film Pokémon the Movie: I Choose You! in order to determine fans' favorite film, with Heroes ranking in first place on the poll.\n[…]\nPokémon Heroes at IMDb\n[…]\nPokémon Heroes at Rotten Tomatoes\n[…]\nPokémon Heroes at Box Office Mojo\n[…]\nPokémon Heroes  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Heroes",
        "situacao": "ok",
        "texto": "Heróis Pokémon é quinto filme do animê Pokémon lançado em 13 de julho de 2002 no Japão e em 2003 nos Estados Unidos. Seu lançamento no Brasil foi no pay-per-view da Sky em março de 2005.\n[…]\nA garota se encontra andando sozinha por um canal quando Zanna e Rion aparecem. Zanna a observa com uns óculos especias, revelando que a garota é o lendário pokemon Latias. Elas a chamam de Latias e vão para cima dela. A garota choca-se ao ver que seu disfarce foi revelado e foge. Zanna e Rion usam seus pokemon, Espeon e Ariados, para parar o pokémon. Espeon usa seu ataque psíquico (Psychic), enquanto Ariados usa seu ataque de teia (String Shot).\n[…]\nLatias se dirige ao Centro Pokémon, sabendo que há apenas uma pessoa para ajudar seu irmão. Ela entra no quarto de Ash, na forma de Kanon, quando ele acorda. Ele fica meio confuso sobre quem ela é, mas nota que é Latias, já que o pokémon não consegue falar na sua forma humana.\n[…]\nDepois, Ash e os outros procuram pelos guardiões. Eles avistam um Mantine e outros pokémons de água carregando Latias. Latias acorda e olha pelos lados, procurando pelo irmão. Bongore diz que Latios usou toda sua energia para salvar a cidade, sacrificando sua vida. Ash conforta Latias pela perda do irmão. Eles encontram e “Lágrima do Coração” e voltam para o jardim. Kanon a põe de volta ao seu lugar. Ela e seu pai agradecem a Ash e seus amigos pela ajuda.\n[…]\nAinda no barco, porém longe da ilha, Ash nota duas figuras no céu. Ele imagina ser Latias e Latios. Ele relaxa e diz que Alto Mare está salva novamente.\n[…]\nPokémon Heroes no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Pokémon Heróis",
      "descricao": "Quinto filme da franquia Pokémon, de 2002, estrelado pelos lendários Latios e Latias."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No fim de Pokémon Heróis, Latios dá a própria vida para salvar a cidade de Altomare. Em que objeto ele se transforma?",
    "resposta": "Uma nova Soul Dew",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Heroes",
      "https://bulbapedia.bulbagarden.net/wiki/Soul_Dew"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Heroes",
        "situacao": "ok",
        "texto": "Pokémon Heroes (also known as Pokémon Heroes: The Movie) is a 2002 Japanese animated film directed by Kunihiko Yuyama and written by Hideki Sonoda. Produced by OLM, Inc. and distributed by Toho, it is the fifth film in the Pokémon series. The film stars Rica Matsumoto, Ikue Ōtani, Mayumi Iizuka, Yūji Ueda, Satomi Kōrogi, Megumi Hayashibara, Shin-ichiro Miki, Inuko Inuyama, Kōichi Yamadera, Unshō I\n[…]\nIn Pokémon Heroes, Ash Ketchum, Misty and Brock travel to the city of Alto Mare and face off against the mysterious spies Annie and Oakley, who seek to use the guardian Pokémon Latias and Latios to power a superweapon. The film takes place during the fifth season of the Pokémon anime.\n[…]\nThe city of Alto Mare is protected by the dragon siblings Latias and Latios. Their father, also a Latios, once saved the city from an evil Pokémon Trainer and their Pokémon, transforming its streets into canals. The father Latios died protecting the city, leaving behind the Soul Dew containing his own soul. The citizens built the Defense Mechanism of Alto Mare (D.M.A.) to protect the city if necessary, using the Soul Dew as a power source, which was hidden away to prevent its usage.\n[…]\nThat evening, Annie and Oakley capture Latios and the Soul Dew to power the D.M.A., but Latias escapes and seeks Ash's help. Using the defense mechanism, Oakley locks down the city and revives the evil trainer's Pokémon from the dead. After escaping the lockdown, Ash, Pikachu and Latias travel to the museum to rescue Latios and disable the defense mechanism in the ensuing fight. The Soul Dew shatters from its use in the device, causing the city's water to become a tidal wave.\n[…]\nLatias and Latios combine their powers to stop the wave, but Latios dies in the process and transforms into a new Soul Dew.\n[…]\nPokémon Heroes at Rotten Tomatoes\n[…]\nPokémon Heroes at Box Office Mojo\n[…]\nPokémon Heroes  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Soul_Dew",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Heroes",
        "situacao": "ok",
        "texto": "Heróis Pokémon é quinto filme do animê Pokémon lançado em 13 de julho de 2002 no Japão e em 2003 nos Estados Unidos. Seu lançamento no Brasil foi no pay-per-view da Sky em março de 2005.\n[…]\nAsh então percebe que estava ficando tarde e lembra que havia dito a Misty que estaria no Centro Pokémon antes do anoitecer. Latias não queria que ele fosse embora. Kanon se oferece para levá-lo de volta. Durante a volta, Ash faz algumas perguntas a Kanon e uma delas foi porque Latias assume a forma dela. Kanon explica que Latias é superbrincalhona perto de Latios e que às vezes ela se sente sozinha e que vai para o outro lado (a cidade de Alto Mare) para quebrar a rotina.\n[…]\nNo Centro Pokémon, todos já estão acordados e Ash conta toda a história para Misty e Brock. Latias recebe o contato de Latios, assim como os outros. Eles vêem toda a situação. Eles também vêem que Rion está começando a operar a máquina, tirando a energia de Latios para reviver os fósseis do templo. A máquina restaura os fósseis de um Aerodactyl e de um Kabutops. Rion ordena-lhes procurarem Latias. É quando Latios desmaia e perde a conexão com Latias. Ash resolve salvar Latios e os outros.\n[…]\nDepois, Ash e os outros procuram pelos guardiões. Eles avistam um Mantine e outros pokémons de água carregando Latias. Latias acorda e olha pelos lados, procurando pelo irmão. Bongore diz que Latios usou toda sua energia para salvar a cidade, sacrificando sua vida. Ash conforta Latias pela perda do irmão. Eles encontram e “Lágrima do Coração” e voltam para o jardim. Kanon a põe de volta ao seu lugar. Ela e seu pai agradecem a Ash e seus amigos pela ajuda.\n[…]\nPokémon Heroes no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Butler (Pokémon)",
      "descricao": "Mágico e ex-integrante da Equipe Magma, vilão do filme Jirachi: Realizador de Desejos, de 2003."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No filme de Jirachi, o mágico Butler, antigo membro da Equipe Magma, ou Team Magma, quer usar o poder do mítico para recriar qual lendário?",
    "resposta": "Groudon",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Jirachi:_Wish_Maker"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Jirachi:_Wish_Maker",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Pokémon: O Destino de Deoxys",
      "descricao": "Sétimo filme da franquia Pokémon, de 2004, em que o alienígena Deoxys enfrenta Rayquaza numa cidade tecnológica."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em O Destino de Deoxys, Rayquaza e o alienígena se enfrentam numa cidade cheia de robôs e esteiras rolantes. Como se chama essa cidade?",
    "resposta": "LaRousse",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Destiny_Deoxys"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Destiny_Deoxys",
        "situacao": "ok",
        "texto": "Pokémon: Destiny Deoxys is a 2004 Japanese anime film directed by Kunihiko Yuyama. It is the seventh film of the Pokémon anime series and the second film of Pokémon the Series: Ruby and Sapphire. The film stars the voices of Rica Matsumoto, Ikue Otani, Yuji Ueda, Kaori, Fushigi Yamada, Noriko Hidaka, Koichi Yamadera, Susumu Chiba, Kenji Nojima and Becky. The events of the film take place during Po\n[…]\nFour years later, Ash, May, Brock, and Max travel to LaRousse City, where block robots patrol the area. There they meet Tory, who has since become afraid of Pokémon and a loner. Deoxys, which has fully healed, leaves to find the green crystal which Tory's father and Yuko are testing in a lab. In the Battle Tower, Ash mistakes Tory for a Pokémon Trainer and they battle against Rafe and Sid, with Tory using Ash's Torkoal. However, Tory does not know how to handle Ash's Torkoal and they lose.\n[…]\nSeeing that the two Pokémon are willing to protect it in face of this new threat, Rayquaza begins firing Hyper Beams upon the thousands of robots.\n[…]\nPokemon: Destiny Deoxys was distributed theatrically in Japan by Toho on July 17, 2004, alongside Steamboy.\n[…]\nThe English dub for Pokémon: Destiny Deoxys received generally negative reviews. DVD Talk gave it a negative review saying that \"I didn't find much of the film that was much superior to an average episode of Pokémon\" and \"unless you have a die-hard Pokemon fan in your household, this DVD should just be skipped\".\n[…]\nBellaOnline gave it a negative review saying that \"while Pokémon: Destiny Deoxys is a decent film, I was rather disappointed by the lack of effort Miramax put into the DVD extras on this release\" and that \"however, if you are a fan of the Pokémon anime, you should purchase this DVD for your collection\".\n[…]\nOfficial pokemon.com site\n[…]\nPokémon: Destiny Deoxys at IMDb\n[…]\nPokémon: Destiny Deoxys  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Destiny_Deoxys",
        "situacao": "ok",
        "texto": "Pokémon 7: Alma Gêmea, lançado originalmente no Japão como Pocket Monsters Advanced Generation the Movie: Deoxys the Visitor (劇場版ポケットモンスター アドバンスジェネレーション 裂空の訪問者 デオキシス, Gekijōban Poketto Monsutā Adobansu Jenerēshon Rekkū no Hōmonsha Deokishisu; lit. \"Visitor from a Fissure in the Sky: Deoxys\") é o sétimo filme da série de desenho animado Pokémon e o segundo de Pocket Monsters Advanced Generation.\n[…]\nDeoxys perde a luta para Rayquaza. Deoxys remonta a forma de ovo e cai no mar, enquanto alguns pesquisadores levam o ovo verde com eles. Sob o mar, o Deoxys ferido, regenera e espera.\n[…]\nQuatro anos depois, Ash, Pikachu, e amigos chegam na cidade de alta tecnologia de Larousse, pronto batalhar na famosa torre de batalha da cidade. Na Torre de Batalha, Ash vai a uma batalha e Tory por engano entra na batalha juntamente com Ash. Seus adversários são Rafe e Sid. Tory usa o pokémon Torkoal do Ash. No entanto, Tory não sabe como lidar com Torkoal e eles perdem. Tory foge, parando para salvar um Minun que foi preso em uma lata de lixo.\n[…]\nMais tarde, Ash conhece os pais conservadores e se divertem até verem uma aurora misteriosa púrpura, sinalizando o retorno de Deoxys.\n[…]\nQuando Deoxys começa a remover os habitantes da cidade para procurar o ovo verde, cabe a Ash, Pikachu e Tory para ajudá-lo a encontrar o óvulo. Isso é complicado pelo retorno de Rayquaza, e os robôs de segurança com defeito. A cidade está repleta de blocos de robôs quase sendo destruído por Rayquaza. A cidade é salva com o encontro dos Deoxys do ovo verde e roxo e por Ash, Pikachu e Tory.\n[…]\nRayquaza salvou o mundo, mas que muita coisa foi destruída, mesmo assim Rayquaza saiu da Cidade como um Herói, junto com Ash e Tory. Deoxys não está morto, Rayquaza apenas arrumou um jeito de acabar com aquela batalha devastadora.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Tree of Beginning",
      "descricao": "Árvore gigantesca do filme Lucario e o Mistério de Mew, onde vive o mítico Mew, protegida por um sistema de defesa próprio."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Lucario e o Mistério de Mew, o mítico Mew vive dentro de uma árvore gigantesca, cheia de cristais, que ataca os intrusos. Como ela se chama?",
    "resposta": "Tree of Beginning",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Lucario_and_the_Mystery_of_Mew",
      "https://bulbapedia.bulbagarden.net/wiki/Tree_of_Beginning"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Lucario_and_the_Mystery_of_Mew",
        "situacao": "ok",
        "texto": "Pokémon: Lucario and the Mystery of Mew is a 2005 Japanese animated fantasy film directed by Kunihiko Yuyama and produced by OLM, Inc. It is the eighth film of the Pokémon anime series and the third film of Pokémon the Series: Ruby and Sapphire.\n[…]\nIn the distant past, a war is about to break out between Pokémon outside the Tree of Beginning. The Pokémon Lucario informs his master, the Aura Guardian Sir Aaron, of the danger, however to his shock, Aaron seemingly betrays him as he proceeds to leave, sealing Lucario away in his staff. After the staff is given to the Queen of Cameron Palace by a Pidgeot, she witnesses the Tree of Beginning start to shine brightly, which also stops the impending conflict of the war.\n[…]\nElsewhere, Pikachu and the Pokémon are playing with a Mew that likes to hang out around the palace, when they are chased by a pair of Weavile, sent by an adventurer named Kidd attempting to put a tracker on Mew. After Pikachu protects Mew, he teleports him (and Team Rocket's Meowth) away. Ash and the group soon learn about the events and that Mew has taken them to the Tree of Beginning where it resides.\n[…]\nAsh eventually earns Lucario's trust by apologizing for his hurtful words. As they enter the Tree of Beginning, they are attacked by Regirock, Regice, and Registeel, the tree's guardians who recognize them as a threat.\n[…]\nFollowing the vision, Lucario and Ash combine their Aura to reverse the self-destruction of the tree and save Mew, but Lucario pushes Ash away towards the completion of the process to save him.\n[…]\nPokémon: Lucario and the Mystery of Mew  at Anime News Network's encyclopedia\n[…]\nPokémon: Lucario and the Mystery of Mew at Box Office Mojo\n[…]\nPokémon: Lucario and the Mystery of Mew at Rotten Tomatoes"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Tree_of_Beginning",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Lucario_and_the_Mystery_of_Mew",
        "situacao": "ok",
        "texto": "Pokémon: Lucario e o Mistério de Mew é o terceiro filme de Pocket Monsters Advanced Generation e o oitavo da série inteira.\n[…]\nTodos os cristais, inclusive os da floresta e do castelo de Rotha, se desintegram e formam uma espessa fumaça negra. Mesmo quente e debilitado, refletindo o estado do lugar, Mew leva todos a outra sala onde há um enorme cristal laranja. Por ali, Lucario encontra as luvas de seu mestre Aaron e o encontra dentro de alguns cristais. Kid diz que Aaron deve ter vindo até o lugar depois que selou Lucario. Ela diz que o lugar deve ser o coração da árvore.\n[…]\nMew termina de recuperar a árvore e aparece totalmente sadio. Kid pede para Banks apagar todos os dados que ele possui da árvore, dizendo que o lugar deve ser mantido em segredo. Lucario cai no chão próximo aos cristais que prendem Aaron, e acaba acionando uma Flor do Tempo no chão. Ela mostra que Aaron selou Lucario no cetro por que não queria que seu Pokémon viesse junto com ele, acabando da mesma maneira. Ele queria que Lucario tivesse uma vida feliz ao lado da rainha de Rotha.\n[…]\nNos créditos finais, todos voltam para o castelo de Rotha no carro de Kid. A rainha cumprimenta todos e os heróis observam a pintura de Aaron, que agora tem Lucario ao seu lado. Para sair da cidade, os heróis usam um bondinho, e dentro dele se despedem de Kid. Na \"Árvore do Gênesis\", os três Regis aparecem sentados, e Mew aparece brincando com Bonsly. Kid aparece em Florina, lar de Jirachi, ao lado de Butler e Daiane, personagens do sexto filme Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Jack Walker",
      "descricao": "Pokémon Ranger do filme Pokémon Ranger e o Templo do Mar, que protege o ovo de Manaphy infiltrado num grupo do Povo da Água."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Ranger e o Templo do Mar, que guarda florestal, infiltrado num grupo de artistas do Povo da Água, protege o ovo de Manaphy?",
    "resposta": "Jack Walker",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger_and_the_Temple_of_the_Sea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger_and_the_Temple_of_the_Sea",
        "situacao": "ok",
        "texto": "Pokémon Ranger and the Temple of the Sea is a 2006 Japanese animated fantasy film. It is the ninth film of the Pokémon anime series and the fourth and final film of Pokémon the Series: Ruby and Sapphire.\n[…]\nDirected by Kunihiko Yuyama and written by Hideki Sonoda, the film follows Ash Ketchum, his Pokémon partner Pikachu, and their friends May, Max and Brock as they help a Pokémon Ranger named Jack Walker deliver the Mythical Pokémon Manaphy to an undersea palace called Samiya while evading mercenaries led by Phantom the Pirate.\n[…]\nAn egg containing the Mythical Pokémon Manaphy is found floating in the sea by mercenary Phantom the Pirate, but it is subsequently stolen from him by Jack \"Jackie\" Walker, a Pokémon Ranger disguised as one of Phantom's crew members. Jackie escapes Phantom's ship and joins the Marina Group, a traveling circus family that specializes in Water-type Pokémon, to deliver the Manaphy egg to Samiya, an undersea palace built by the People of the Water, whom the Marina Group are descendants of.\n[…]\nWhile May and Pikachu mourn Ash's apparent sacrifice, Phantom suddenly appears and kidnaps Manaphy. Ash, surrounded by a glowing aura from the rebuilt Sea Crown, pursues Phantom and retrieves Manaphy. Phantom returns with his ship but Manaphy leads a counterattack with several wild Water-type Pokémon, including the Legendary Pokémon Kyogre. With Phantom subdued, Jackie is able to deliver Manaphy safely to Samiya, completing his mission.\n[…]\nThe general screening of Pokémon Ranger and the Prince of the Sea: Manaphy ran for 6 weeks, from July 15 to August 25, 2006.\n[…]\nPokemon.com's Manaphy Promotion Page\n[…]\nPokémon Ranger and the Temple of the Sea at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ranger_and_the_Temple_of_the_Sea",
        "situacao": "ok",
        "texto": "Pokémon Ranger and the Temple of the Sea, originalmente lançado no Japão como Pocket Monsters Advanced Generation the Movie: Pokémon Ranger and the Prince of the Sea: Manaphy (劇場版ポケットモンスターアドバンスジェネレーション ポケモンレンジャーと蒼海の王子 マナフィ, Gekijōban Poketto Monsutā Adobansu Jenerēshon Pokemon Renjā to Umi no Ōji Manafi), é o nono filme de animação da franquia Pokémon. Como indicado pelo título, elementos do jogo ",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "A Ascensão de Darkrai",
      "descricao": "Décimo filme da franquia Pokémon, de 2007, em que Darkrai protege a cidade de Alamos de uma batalha entre lendários."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A Ascensão de Darkrai se passa numa cidade famosa por duas torres gêmeas e um grande jardim. Que cidade é essa?",
    "resposta": "Alamos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Rise_of_Darkrai",
      "https://bulbapedia.bulbagarden.net/wiki/Alamos_Town"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Rise_of_Darkrai",
        "situacao": "ok",
        "texto": "Pokémon: The Rise of Darkrai is a 2007 Japanese animated fantasy adventure film produced by OLM, Inc. and distributed by Toho. The film was directed by Kunihiko Yuyama and written by Hideki Sonoda. It is the tenth film in the Pokémon anime series and the first film of Pokémon the Series: Diamond and Pearl, created by Satoshi Tajiri, Junichi Masuda and Ken Sugimori.\n[…]\nIn the present, Godey's foretelling comes true when the Legendary Pokémon Palkia, who can control space, and Dialga, who rules over time, cause disturbances in the air around Alamos Town as they brawl in the space between dimensions. At the same time, Ash Ketchum, Brock, and Dawn arrive in the town for Dawn's next Pokémon Contest inside the Space-Time Towers. Palkia and Dialga's clashing causes a disturbance in space, which damages the garden. Baron Alberto believes this is the work of Darkrai.\n[…]\nThe next day, Palkia, injured and attempting to hide from Dialga, emerges in Alamos Town. It moves the town to another dimension with no way of escaping. Darkrai reappears in the town square, telling someone to go away. Alberto, joined by Ash, Dawn, and other Pokémon trainers, engage in combat with it. Outraged, Darkrai traps many Pokémon in the town square in nightmares. Later that evening, Tonio finds Palkia resting between the Towers.\n[…]\nAsh and Dawn successfully plead to Palkia to restore the lost parts of the town, returning Alamos Town to how it originally was, and the townspeople and Pokémon rejoice and return home. Later, the group mourns the loss of Darkrai, with Alice thanking it for its efforts. They then find Darkrai standing on top of the Space Tower.\n[…]\nEnglish Darkrai Site Archived December 31, 2010, at the Wayback Machine\n[…]\nPokémon: The Rise of Darkrai at IMDb\n[…]\nPokémon: The Rise of Darkrai  at Anime News Network's encyclopedia\n[…]\nThe Rise of Darkrai at Bulbapedia"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Alamos_Town",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_Rise_of_Darkrai",
        "situacao": "ok",
        "texto": "Pokémon: The Rise of Darkrai, originalmente lançado no Japão como Pocket Monsters Diamond & Pearl the Movie: Dialga vs. Palkia vs. Darkrai (劇場版ポケットモンスター ダイヤモンド&パール ディアルガVSパルキアVSダークライ, Gekijōban Poketto Monsutā Daiyamondo Pāru Diaruga tai Parukia tai Dākurai) é o décimo filme de animação da franquia Pokémon. Foi lançado nos cinemas japoneses em 14 de julho de 2007.\n[…]\nDialga e Palkia dispertam e se encontram numa fenda entre o espaço e tempo. Lá eles começam uma batalha, mas Palkia ferido foge de Dialga. E Ash e seus amigos sentem um vento estranho causado por esses dois deuses. Em Alamos eles conhecem Alice que os guia pela cidade e Alberto um barão que culpa Darkrai por tudo e Tonio um cientista local. Ash e seus amigos vêm Darkrai um Pokémon que causa pesadelos. Ele é atacado e faz Ash ter pesadelos mostrando uma imagem. Ele acorda no centro Pokémon.\n[…]\nLogo após Palkia luta com Dialga e tenta fugir dele indo para alamos onde tenta se recuperar. Darkrai tenta impedir Palkia, mas a cidade e levada a outra dimensão por Palkia. Eis que Dialga aparece e os tres começam uma luta que começa a destruir a cidade. Dialga e Palkia vão dar um ataque que destruia Alamos Town e Darkrai cria uma esfera que se mistura aos ataques. A esfera some e Dialga e Palkia derrotam Darkrai que some em uma nuvem de pó.\n[…]\nNuma pequena cena depois do fime Ash,Dawn,Brock,Alice e Tonio conversam sobre Darkrai, Ate verem uma sombra na parede de uma montanha, ao olharem pra torre tempo-espaço, veem Darkai Parado ali, Ash fica feliz ao ver Darkrai e o filme entra em créditos finais.\n[…]\nPokémon: The Rise of Darkrai (filme) na enciclopédia do Anime News Network (em inglês)\n[…]\nPokémon: The Rise of Darkrai no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "A Ascensão de Darkrai",
      "descricao": "Décimo filme da franquia Pokémon, de 2007, em que Darkrai protege a cidade de Alamos de uma batalha entre lendários."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A Ascensão de Darkrai, primeiro filme da fase de Sinnoh, estreou nos cinemas japoneses em que ano?",
    "resposta": "2007",
    "distratores": [
      "2006",
      "2008",
      "2009"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Rise_of_Darkrai"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Rise_of_Darkrai",
        "situacao": "ok",
        "texto": "Pokémon: The Rise of Darkrai is a 2007 Japanese animated fantasy adventure film produced by OLM, Inc. and distributed by Toho. The film was directed by Kunihiko Yuyama and written by Hideki Sonoda. It is the tenth film in the Pokémon anime series and the first film of Pokémon the Series: Diamond and Pearl, created by Satoshi Tajiri, Junichi Masuda and Ken Sugimori.\n[…]\nIn the film, Dialga and Palkia, two Pokémon known to be deities who were never meant to meet, fight in the space between dimensions. The brawling causes disturbances in the space around Alamos Town. The townsfolk blame the events on a nightmare-causing Pokémon called Darkrai, which is trying to protect the town from Dialga and Palkia's clash. The film was released in Japan on July 14, 2007, to a mixed critical reception but a positive audience reception.\n[…]\nWhen Palkia and Dialga discharge their attacks, Darkrai crosses the attacks' line and forms a sphere around itself to block the attacks, engulfing and immobilizing Palkia and Dialga in the process.\n[…]\nThe film originally distributed by Toho was released on Japanese theaters on July 14, 2007, in Japan.\n[…]\nIt was the fourth highest-grossing film in Japan of 2007, behind Pirates of the Caribbean: At World's End, Harry Potter and the Order of the Phoenix, and Hero. and it also became the highest grossing anime film of 2007.\n[…]\nFilm Music Central gave it a positive review saying that \"While Pokémon: The Rise of Darkrai did weird me out at times, I did enjoy the overall story. More than that, I'm eager to see where the story goes, since I know now that the next two films continue the story that was begun here\".\n[…]\nEnglish Darkrai Site Archived December 31, 2010, at the Wayback Machine\n[…]\nPokémon: The Rise of Darkrai at IMDb\n[…]\nPokémon: The Rise of Darkrai  at Anime News Network's encyclopedia\n[…]\nThe Rise of Darkrai at Bulbapedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_Rise_of_Darkrai",
        "situacao": "ok",
        "texto": "Pokémon: The Rise of Darkrai, originalmente lançado no Japão como Pocket Monsters Diamond & Pearl the Movie: Dialga vs. Palkia vs. Darkrai (劇場版ポケットモンスター ダイヤモンド&パール ディアルガVSパルキアVSダークライ, Gekijōban Poketto Monsutā Daiyamondo Pāru Diaruga tai Parukia tai Dākurai) é o décimo filme de animação da franquia Pokémon. Foi lançado nos cinemas japoneses em 14 de julho de 2007.\n[…]\nDialga e Palkia dispertam e se encontram numa fenda entre o espaço e tempo. Lá eles começam uma batalha, mas Palkia ferido foge de Dialga. E Ash e seus amigos sentem um vento estranho causado por esses dois deuses. Em Alamos eles conhecem Alice que os guia pela cidade e Alberto um barão que culpa Darkrai por tudo e Tonio um cientista local. Ash e seus amigos vêm Darkrai um Pokémon que causa pesadelos. Ele é atacado e faz Ash ter pesadelos mostrando uma imagem. Ele acorda no centro Pokémon.\n[…]\nLogo após Palkia luta com Dialga e tenta fugir dele indo para alamos onde tenta se recuperar. Darkrai tenta impedir Palkia, mas a cidade e levada a outra dimensão por Palkia. Eis que Dialga aparece e os tres começam uma luta que começa a destruir a cidade. Dialga e Palkia vão dar um ataque que destruia Alamos Town e Darkrai cria uma esfera que se mistura aos ataques. A esfera some e Dialga e Palkia derrotam Darkrai que some em uma nuvem de pó.\n[…]\nNuma pequena cena depois do fime Ash,Dawn,Brock,Alice e Tonio conversam sobre Darkrai, Ate verem uma sombra na parede de uma montanha, ao olharem pra torre tempo-espaço, veem Darkai Parado ali, Ash fica feliz ao ver Darkrai e o filme entra em créditos finais.\n[…]\nPágina oficial (em japonês)\n[…]\nWebsite do filme (em inglês)\n[…]\nPokémon: The Rise of Darkrai (filme) na enciclopédia do Anime News Network (em inglês)\n[…]\nPokémon: The Rise of Darkrai no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Giratina e o Guerreiro dos Céus",
      "descricao": "Décimo primeiro filme da franquia Pokémon, de 2008, em que Ash ajuda o mítico Shaymin e enfrenta o caçador Zero."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O filme em que Ash ajuda o pequeno Shaymin e enfrenta o caçador Zero no Mundo Reverso estreou nos cinemas japoneses em que ano?",
    "resposta": "2008",
    "distratores": [
      "2007",
      "2009",
      "2010"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Giratina_and_the_Sky_Warrior"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Giratina_and_the_Sky_Warrior",
        "situacao": "ok",
        "texto": "Pokémon: Giratina & the Sky Warrior is a 2008 Japanese animated adventure film produced by OLM, Inc. and distributed by Toho. The film was directed by Kunihiko Yuyama from a screenplay by Hideki Sonoda. It is the eleventh film in the Pokémon anime series and the second film of Pokémon the Series: Diamond and Pearl, created by Satoshi Tajiri, Junichi Masuda and Ken Sugimori, and serves as a direct \n[…]\nIt was released in Japan on July 19, 2008, to generally positive reviews from critics. A sequel, Pokémon: Arceus and the Jewel of Life, was released in 2009. The theme song for the film is \"One\" by Crystal Kay.\n[…]\nOn the train, Shaymin makes contact with a Gracidea flower and transforms into its Sky Forme, altering its appearance to a deer-like state and allowing it to fly. Ash, Dawn, and Brock board a ferry to the Flower Garden, but are sucked into the Reverse World again, followed by Zero and his Pokémon. Giratina attacks the group after Shaymin provokes it. When night falls, Shaymin transforms back to its normal form.\n[…]\nShaymin heals Giratina, and Zero flees to the Reverse World to cause damage to the world of reality, resulting in the mountain's glacier to start moving towards the Flower Garden. The Pokémon Regigigas is awakened, and along with a herd of Mamoswine, slows the glacier down.\n[…]\nIn the Reverse World, Shaymin opens a portal, dragging Zero back to the world of reality. Zero's ship crashes into the glacier, as Dawn's Buneary and Swinub freeze the ship, causing Zero to lose all of the data about Giratina's abilities. Giratina restores the damage caused by Zero, and gives Ash a ride back to the world of reality. It then leaves on its own to track down Dialga. Shaymin and the others of its kind perform flower bearing, before migrating.\n[…]\nThe film was released in Japan on July 19, 2008, by Toho.\n[…]\nOfficial site at the Wayback Machine (archived April 28, 2008) (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Giratina_and_the_Sky_Warrior",
        "situacao": "ok",
        "texto": "Pokémon: Giratina e o Cavaleiro do Céu é um filme de longa-metragem produzido no Japão em 2008 e depois foi enviado nos Estados Unidos em 2009, o décimo primeiro da série Pokémon. Além disso, é a segunda parte da trilogia da Saga Diamante e Pérola, sendo a continuação do filme Pokémon: O Pesadelo de Darkrai.\n[…]\nO plano de Zero para dominar o Mundo Reverso, não se importa com a batalha entre Giratina e Shaymin. Shaymin é capturado, usa o Seed Flare para fazer um buraco no céu, assim como Giratina desejava, e Giratina acaba escapando para o Mundo Real, mas acaba sendo capturado também. Sua habilidade de viajar no espaço é escaneada. O equipamento de escaneamento foi criado por Mugen, sendo Zero o seu ex-assistente.\n[…]\nQuando o sistema de escaneamento falha e começa a sugar a vida de Giratina, Zero mente e diz que irá parar o escaneamento. De qualquer forma, Ash e Mugen param a máquina. Com a habilidade de viajar no espaço copiada, Giratina começa a morrer. Sem compreender a situação de Giratina, Shaymin o revive com Aroma Terapia (Aromatherapy). Obtendo a habilidade de viajar no espaço, Zero se louva e, para remover a origem da poluição no Mundo Reverso, começa a destruir os pilares de suporte do Mundo Real.\n[…]\nSuas ações começam a refletir no Mundo Real, causando um iceberg. Isso acaba criando uma crise onde cidades,vilas e o jardim das flores estão sendo destruídas. Para deter Zero, usando a viagem do espaço (space travel), Giratina, Shaymin e Ash têm de lutar em pleno ar no Mundo Reverso. Enquanto isso, no Mundo Real, Dawn e Cia batalham com ataques de gelo na tentativa de impedir o movimento do iceberg, mas isto não adianta.\n[…]\nPokémon Giratina & the Sky Warrior (filme) na enciclopédia do Anime News Network (em inglês)\n[…]\nPokémon Giratina & the Sky Warrior no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Arceus e a Joia da Vida",
      "descricao": "Décimo segundo filme da franquia Pokémon, de 2009, em que Arceus busca vingança contra os humanos e Ash viaja ao passado."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O filme em que Arceus quer se vingar da humanidade se passa numa cidade de ruínas antigas de Sinnoh. Como ela se chama?",
    "resposta": "Michina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Arceus_and_the_Jewel_of_Life"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Arceus_and_the_Jewel_of_Life",
        "situacao": "ok",
        "texto": "Pokémon: Arceus and the Jewel of Life is a 2009 Japanese animated adventure film produced by OLM, Inc. and distributed by Toho. The film was directed by Kunihiko Yuyama from a screenplay by Hideki Sonoda. It is the twelfth film in the Pokémon anime series and the third film of Pokémon the Series: Diamond and Pearl, created by Satoshi Tajiri, Junichi Masuda and Ken Sugimori, serving as a direct seq\n[…]\nThousands of years ago, Arceus, a Pokémon believed to have created entire worlds, saved this world from a meteor storm and nearly died with the loss of its sixteen Life Plates. Arceus was saved by a man named Damos, from the wasteland town of Michina, when he returned the plates to Arceus. Feeling pity for the town and in an act of gratitude, Arceus fused five of its plates into the Jewel of Life, which made the land rich and fertile.\n[…]\nArceus then emerges; Sheena offers it the Jewel of Life to calm its wrath, only to discover that the jewel is a fake. Dialga, Palkia, and Giratina return to stop Arceus from destroying humanity. Dialga sends Ash, Dawn, Brock, and Sheena back in time to the day when Damos was manipulated into betraying Arceus, where Damos and Marcus fall to their deaths in the collapsing temple. Upon Sheena's request, Dialga sends her and the others further back.\n[…]\nArceus spots Ash and recognizes him due to history's alterations, and reverses the destruction it caused, healing its former adversaries. Ash and the others discover Damos has put them on a mural, thanking them for their help in saving the world and seeing that even without the Jewel of Life, Michina is still fertile due to the people and Pokémon cultivating the land. Dialga, Palkia, Giratina, and Arceus depart for their dimensions, with Arceus realizing that it is truly a part of this world.\n[…]\nPokemon: Arceus and the Jewel of Life generally got mixed reviews.\n[…]\nPokémon: Arceus and the Jewel of Life at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Arceus_and_the_Jewel_of_Life",
        "situacao": "ok",
        "texto": "Pokémon: Arceus and the Jewel of Life (劇場版ポケットモンスター ダイヤモンド&パール 超克の時空へ, Gekijōban Poketto Monsutā Daiyamondo & Pāru: Chōkoku no Jikū e), (no Brasil e em Portugal, Pokémon - Arceus e a Joia da Vida) é um filme japonês lançado em 2009. É o 12º filme da série Pokémon e, com seu lançamento, igualará o recorde de série de desenhos com mais filmes produzidos com Em Busca do Vale Encantado. Aparecem os le\n[…]\nNas Ruínas, os Guardiões explicam a lenda da cidade de Michina, que diz que um dia o lendário pokémon Arceus, o criador do mundo, retornará a Michina para trazer justiça aos humanos devido ter sido traído por Damos, um ancestral de Sheena que não quis devolver a Jóia da Vida para Arceus, a jóia que foi usada para tornar Michina um lugar fértil.\n[…]\nLogo depois de contarem a história da lenda para Ash, Dawn e Brock, eles sentem uma energia forte, e então Sheena diz: \"Arceus está aqui\"; então Sheena vai devolver a jóia para Arceus, a jóia estava com ela pois foi guardada por sua família durante anos; Arceus então destrói a jóia revelando ser uma cópia, pois a verdadeira foi feita por 5 das 16 placas de vida, todos ficam surpresos, então Arceus começa a destruir Michina, Dialga, Palkia e Giratina aparecem e tentam deter Arceus, logo depois Dialga manda Ash, Sheena, Dawn e Brock para o passado, para eles tentarem resolver o problema, fazendo Damos devolver a Jóia da Vida para Arceus.\n[…]\nLá eles percebem que Arceus ainda está destruindo Michina, mas quando Arceus vê Ash ele se lembra de tudo que aconteceu no passado e reconstrói tudo que destruiu e também recupera Dialga, Palkia e Giratina que estavam feridos da luta. Depois Ash e Sheena veem algo diferente nas Ruínas, uma escrição deixada por Damos para que eles pudessem ver no futuro. Arceus então chama Ash e diz a ele: \" Ash, esse mundo no qual vocês vivem é maravilhoso... ...\n[…]\nPokémon Arceus and the Jewel of Life no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Arceus e a Joia da Vida",
      "descricao": "Décimo segundo filme da franquia Pokémon, de 2009, em que Arceus busca vingança contra os humanos e Ash viaja ao passado."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No filme Arceus e a Joia da Vida, que lendário leva Ash e seus amigos ao passado para desfazer a traição contra Arceus?",
    "resposta": "Dialga",
    "distratores": [
      "Palkia",
      "Giratina",
      "Celebi"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Arceus_and_the_Jewel_of_Life"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Arceus_and_the_Jewel_of_Life",
        "situacao": "ok",
        "texto": "Pokémon: Arceus and the Jewel of Life is a 2009 Japanese animated adventure film produced by OLM, Inc. and distributed by Toho. The film was directed by Kunihiko Yuyama from a screenplay by Hideki Sonoda. It is the twelfth film in the Pokémon anime series and the third film of Pokémon the Series: Diamond and Pearl, created by Satoshi Tajiri, Junichi Masuda and Ken Sugimori, serving as a direct seq\n[…]\nArceus then emerges; Sheena offers it the Jewel of Life to calm its wrath, only to discover that the jewel is a fake. Dialga, Palkia, and Giratina return to stop Arceus from destroying humanity. Dialga sends Ash, Dawn, Brock, and Sheena back in time to the day when Damos was manipulated into betraying Arceus, where Damos and Marcus fall to their deaths in the collapsing temple. Upon Sheena's request, Dialga sends her and the others further back.\n[…]\nAsh obtains the Jewel of Life, and calmed by Damos' ability, Arceus absorbs the jewel, restoring its own life force, and reversing the time paradox that nearly killed Ash, Dawn, Brock, Sheena, and their Pokémon. Arceus rescues the people and Pokémon from the collapse of the temple. Ash, Dawn, Brock, and Sheena are transported back to the present, only to discover that Arceus is still furious and has defeated Dialga, Palkia, and Giratina.\n[…]\nArceus spots Ash and recognizes him due to history's alterations, and reverses the destruction it caused, healing its former adversaries. Ash and the others discover Damos has put them on a mural, thanking them for their help in saving the world and seeing that even without the Jewel of Life, Michina is still fertile due to the people and Pokémon cultivating the land. Dialga, Palkia, Giratina, and Arceus depart for their dimensions, with Arceus realizing that it is truly a part of this world.\n[…]\nPokemon: Arceus and the Jewel of Life generally got mixed reviews.\n[…]\nPokémon: Arceus and the Jewel of Life at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Arceus_and_the_Jewel_of_Life",
        "situacao": "ok",
        "texto": "Pokémon: Arceus and the Jewel of Life (劇場版ポケットモンスター ダイヤモンド&パール 超克の時空へ, Gekijōban Poketto Monsutā Daiyamondo & Pāru: Chōkoku no Jikū e), (no Brasil e em Portugal, Pokémon - Arceus e a Joia da Vida) é um filme japonês lançado em 2009. É o 12º filme da série Pokémon e, com seu lançamento, igualará o recorde de série de desenhos com mais filmes produzidos com Em Busca do Vale Encantado. Aparecem os le\n[…]\nA garota revela ter o poder de conectar seu coração com o dos pokémons, e então convoca Dialga para salvar Pikachu e Piplup, logo depois eles revelam ser Sheena e Kevin os Guardiões das Ruínas, e depois de Palkia e Giratina aparecerem também, Sheena e Kevin levam Ash e os seus amigos para conhecerem as Ruínas.\n[…]\nLogo depois de contarem a história da lenda para Ash, Dawn e Brock, eles sentem uma energia forte, e então Sheena diz: \"Arceus está aqui\"; então Sheena vai devolver a jóia para Arceus, a jóia estava com ela pois foi guardada por sua família durante anos; Arceus então destrói a jóia revelando ser uma cópia, pois a verdadeira foi feita por 5 das 16 placas de vida, todos ficam surpresos, então Arceus começa a destruir Michina, Dialga, Palkia e Giratina aparecem e tentam deter Arceus, logo depois Dialga manda Ash, Sheena, Dawn e Brock para o passado, para eles tentarem resolver o problema, fazendo Damos devolver a Jóia da Vida para Arceus.\n[…]\nLá eles percebem que Arceus ainda está destruindo Michina, mas quando Arceus vê Ash ele se lembra de tudo que aconteceu no passado e reconstrói tudo que destruiu e também recupera Dialga, Palkia e Giratina que estavam feridos da luta. Depois Ash e Sheena veem algo diferente nas Ruínas, uma escrição deixada por Damos para que eles pudessem ver no futuro. Arceus então chama Ash e diz a ele: \" Ash, esse mundo no qual vocês vivem é maravilhoso... ...\n[…]\nPokémon Arceus and the Jewel of Life (filme) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Zoroark: O Mestre das Ilusões",
      "descricao": "Décimo terceiro filme da franquia Pokémon, de 2010, em que Zoroark tenta resgatar Zorua e salvar a cidade de Crown City."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Zoroark: O Mestre das Ilusões, o filme em que Zoroark tenta resgatar o pequeno Zorua, estreou nos cinemas japoneses em que ano?",
    "resposta": "2010",
    "distratores": [
      "2009",
      "2011",
      "2012"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Zoroark:_Master_of_Illusions"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Zoroark:_Master_of_Illusions",
        "situacao": "ok",
        "texto": "Pokémon—Zoroark: Master of Illusions is a 2010 Japanese animated adventure fantasy film directed by Kunihiko Yuyama. It is the thirteenth film of the Pokémon anime series and the fourth and final film of Pokémon the Series: Diamond and Pearl.\n[…]\nKodai tries to reach the Time Ripple but is blocked by the guardian protectors, and Zoroark traps him in the stadium by using its remaining strength to make an illusion of Kodai's ship.\n[…]\nZoroark, voiced by Romi Park: A Dark-type Pokémon abducted by Kodai. She rampages through Crown City in the guises of Raikou, Entei and Suicune due to Kodai blackmailing her with her son, Zorua's, safety. Near the end of the film, Zoroark helps Celebi stop Kodai and protect the time ripple by casting one of her illusions on him, which tricks him into thinking he's already captured the time ripple's power for himself.\n[…]\nZorua, voiced by Kurumi Mamiya in Japanese and Eileen Stevens in English: A Pokémon related to Zoroark that can use weaker illusion powers. He is desperate to reunite with his mother, the film's Zoroark, whom he refers to as \"Meema\". In middle of the film, Zorua befriends Celebi and accepts its help in looking for Zoroark. Zorua, afterward, makes an effort to help protect Celebi and the time ripple and stop Kodai.\n[…]\nJeffery Anderson of Common Sense Media gave it a positive review and said that \"Pokemon: Zoroark and the Master of Illusions is a cut above the rest, using gorgeous computer-rendered backdrops, as well as some surprisingly majestic and lovely moments\" and \"Unfortunately, it's also a bit more violent than we usually get from this series.\"\n[…]\nZoroark—Master of Illusions at IMDb\n[…]\nPokémon—Zoroark: Master of Illusions  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Zoroark%3A_Master_of_Illusions",
        "situacao": "ok",
        "texto": "Zoroark: Master of Illusions\n[…]\n(Zoroark: O Mestre das Ilusões) nos Estados Unidos e conhecido no Japão como  Chip Phantom Ruler Zoroark  ou  The Phantom Ruler Zoroark  (劇場版ポケットモンスター ダイヤモンド&パール: チップ, 幻影の覇者Z, Gekijoban Poketto Monsuta Daiyamondo & Paru: Chippu Genei no Hasha Z) traduzido para o Português como \"Zoroark: O Mestre das Ilusões\" é o décimo terceiro filme baseado no anime Pokémon e o último filme da série Diamond & Pearl; foi distribuído em todos os cinemas japoneses a partir de 10 de julho de 2010, e enviado para os Estados Unidos a partir de 5 de Fevereiro de 2011 e no Brasil também foi exibido no dia 10 de março de 2012 no Cartoon Network.\n[…]\nEm Portugal foi exibido no dia 22 de fevereiro pelo Biggs. O Governante da Ilusão Zoroark. No filme parece que é uma cidade de Pokémons fantasmas.\n[…]\nAsh e seus amigos visitam a cidade de Crown para assistir a Pokémon Backer World Cup. Em sua viagem, eles encontram um Pokémon chamado Zorua, que está procurando por seu companheiro. Eles decidem ajudá-lo, mas Kodai está forçando Zoroark a se transformas nas feras lendárias para destruir Crowns, ele ataca um ônibus virando Entei e inundando uma rua com Suicune e virá Raikou no topo de uma igreja ele corre no telhado das casas quando a ser Zoroark quando a tempestade acaba.\n[…]\n«Página oficial» (em japonês). www.pokemon-movie.jp\n[…]\n«Website do filme» (em inglês). www.pokemonthemovie.com\n[…]\nPokémon Zoroark: Master of Illusions (filme) na enciclopédia do Anime News Network (em inglês)\n[…]\nZoroark: Master of Illusions no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Kyurem Contra o Espadachim da Justiça",
      "descricao": "Décimo quinto filme da franquia Pokémon, de 2012, em que o mítico Keldeo desafia o lendário Kyurem."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No filme em que Keldeo enfrenta Kyurem, por que o jovem pokémon provoca o poderoso lendário para um duelo?",
    "resposta": "Para ser reconhecido como Espadachim da Justiça",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Kyurem_vs._the_Sword_of_Justice"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Kyurem_vs._the_Sword_of_Justice",
        "situacao": "ok",
        "texto": "Pokémon the Movie: Kyurem vs. the Sword of Justice is a 2012 Japanese animated film produced by OLM, Inc. and distributed by Toho. The film was directed by Kunihiko Yuyama and written by Hideki Sonoda. It is the 15th animated installment in the Pokémon film series and the second film of Pokémon the Series: Black & White.\n[…]\nHowever, the Swords of Justice do not believe that Keldeo is ready.\n[…]\nThe Swords of Justice praise Keldeo for finally learning the true power of the sword, which officially makes him the fourth member of the team. The group retreats from the Full Court as it collapses. Kyurem freezes the falling Full Court to prevent being crushed and any more damage from being caused.\n[…]\nKeldeo (ケルディオ, Kerudio): The Colt Pokémon and also the fourth of the Swords of Justice. Keldeo is very exceptional at using his hidden abilities. And unlike the other swordsmen, Keldeo can assume his other form called Resolute Form. He challenges Kyurem to a battle despite Cobalion's warnings, and when Kyurem proves to be too strong, Keldeo became scared and ended up running away. Keldeo is then followed in hot pursuit by Kyurem, who is determined to finish their fight.\n[…]\nCobalion (コバルオン, Kobaruon): The Iron Will Pokémon and leader of the Swords of Justice. Having a collected personality, he is responsible for the group and for protecting Keldeo from Kyurem. Cobalion's Japanese voice actor is Kōichi Yamadera. His English voice actor is H.D. Quinn.\n[…]\nPokémon the Movie: Kyurem vs. the Sword of Justice premiered in the United States on Cartoon Network in conjunction with YTV in Canada on December 8, 2012, and premiered in the United Kingdom on CITV on December 12, 2012.\n[…]\nPokémon the Movie: Kyurem vs. the Sword of Justice at IMDb\n[…]\nPokémon the Movie: Kyurem vs. the Sword of Justice (film) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie%3A_Kyurem_vs._the_Sword_of_Justice",
        "situacao": "ok",
        "texto": "Pokémon the Movie: Kyurem vs. the Sword of Justice, originalmente lançado no Japão como Pocket Monsters Best Wishes! O Filme: Kyurem vs. o Sagrado Espadachim: Keldeo (劇場版ポケットモンスター ベストウイッシュ キュレムVS聖剣士 ケルディオ, Gekijōban Poketto Monsutā Besuto Uisshu Kyuremu tai Seikenshi: Kerudio) é o décimo quinto filme baseado do anime Pokémon e o segundo filme da série Pokémon Black & White. O filme foi lançado em \n[…]\nos Sagrados Espadachins foi revelado pela primeira vez durante o teaser trailer após o término dos anteriores filmes Victini e o Herói Preto: Zekrom e Victini e o Herói Branco: Reshiram (mais tarde lançado internacionalmente como Pokémon, O Filme: Branco-Victini e Reshiram e Preto-Victini e Zekrom.) Os japoneses mostram Oha Suta que revelou um reboque 15 minutos do filme, enquanto revela seu título provisório.\n[…]\nAsh e Co. se dirijem a Rooshan/Roushan. Enquanto em um trem passando pelas montanhas, Ash encontra um Pokémon ferido que nunca havia visto antes, desmaiado. Esta é uma ilusão do Pokémon Keldeo, que diz ser o sucessor de Cobalion e Co., os mestres da Espada Sagrada que protegem o mundo. Nesse momento, Kyurem aparece e começa a atacar, mudando para Kyurem Preto e Kyurem Branco fazendo isso. Isto bloqueia o caminho de Ash e Co. até Keldeo. Ash e Co.\n[…]\nconseguem escapar da perseguição de Kyurem, por um triz. A batalha se enfurece entre Kyurem, caçando Keldeo, e o trem e o balão de ar quente no céu. Podem Keldeo, Ash e Co. superar esse perigo?\n[…]\nFoi mais tarde revelado que este filme irá mostrar o Pokémon lendário Keldeo e as formas alternativas de Kyurem: Kyurem Preto e Kyurem Branco. Este filme também virá junto com um curta especial: O Recital Cintilante de Meloetta.\n[…]\nDesign do Logo do Filme: Eric Medalle, John Moore\n[…]\nPokémon the Movie: Kyurem vs. the Sword of Justice (filme) na enciclopédia do Anime News Network (em inglês)\n[…]\nPokémon the Movie: Kyurem vs. the Sword of Justice no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Genesect e a Lenda Revelada",
      "descricao": "Décimo sexto filme da franquia Pokémon, de 2013, em que um bando de Genesect invade uma metrópole e enfrenta um Mewtwo."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O filme em que um bando de Genesect invade uma metrópole e enfrenta um Mewtwo capaz de megaevoluir estreou nos cinemas japoneses em que ano?",
    "resposta": "2013",
    "distratores": [
      "2012",
      "2014",
      "2015"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Genesect_and_the_Legend_Awakened"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Genesect_and_the_Legend_Awakened",
        "situacao": "ok",
        "texto": "Pokémon the Movie: Genesect and the Legend Awakened is a 2013 Japanese animated film produced by OLM, Inc. and distributed by Toho. The film was directed by Kunihiko Yuyama and written by Hideki Sonoda. It is the sixteenth film of the Pokémon anime series and the third and final film of Pokémon the Series: Black & White.\n[…]\nThe film premiered in Japan on July 13, 2013.\n[…]\nIn the original Japanese release, the Genesect are voiced by Koichi Yamadera, Sumire Morohoshi, Akeno Watanabe, Kiyotaka Furushima, and Kensuke Satō.\n[…]\nMoviegoers could receive Genesect in copies of the Pokémon Black, White, Pokémon Black 2, or White 2 video games at theaters from January 11 to February 20, 2013.\n[…]\nThe film's setting is based on New York City, much like the Black, White, Black 2, and White 2 games, with Central Park as a key location. Director Kunihiko Yuyama stated that this was chosen to contrast a modern city with the wild and ancient nature of Genesect. A special episode of the anime serving as a prologue to the film aired on TV Tokyo, titled Mewtwo: Prologue to Awaking (ミュウツー ～覚醒への序章（プロローグ）～, Myūtsū ~Kakusei e no Purorōgu~).\n[…]\nThe film was released in Japan on July 13, 2013, by Toho. It was released in the U.S. and the U.K. on October 19, 2013, where it aired on Cartoon Network and CITV respectively.\n[…]\nIn its opening weekend, the film debuted #2 on the Japanese box office with $4,901,163. As of September 8, 2013, the film grossed $30,906,537 in Japan and $1,386,840 in South Korea, as of January 12, 2014,  for a worldwide total of $32,293,377. It was the 10th highest-grossing film of the year in Japan.\n[…]\nPokémon the Movie: Genesect and the Legend Awakened  at Anime News Network's encyclopedia\n[…]\nMewtwo ~Kakusei e no Prologue  at Anime News Network's encyclopedia\n[…]\nPokémon the Movie: Genesect and the Legend Awakened at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie%3A_Genesect_and_the_Legend_Awakened",
        "situacao": "ok",
        "texto": "Pokémon the Movie: Genesect and the Legend Awakened, originalmente lançado no Japão como Pocket Monsters Best Wishes! O Filme: Extrema Velocidade de Genesect e o Desperta de Mewtwo (劇場版ポケットモンスター ベストウイッシュ 神速のゲノセクト ミュウツー覚醒, Gekijōban Poketto Monsutā Besuto Uisshu! Shinsoku no Genosekuto – Myūtsū Kakusei), é o décimo sexto filme baseado no anime Pokémon e o terceiro filme da série Pokémon Black & Whi\n[…]\nEste filme é estrelado pelos Pokémons lendários: Genesect e Mewtwo (com uma nova forma do Mewtwo, o Mega Mewtwo), e foi originalmente exibido em 13 de julho de 2013 nos cinemas japoneses  juntamente com o curta \"Pikachu Short Pikachu and Eevee Friends\", que é protagonizado por Sylveon e outras evoluções de Eevee. O filme chegou aos Estados Unidos no dia 19 de outubro de 2013 no Cartoon Network. Em Portugal, o filme estreou no canal Biggs no dia 20 de abril de 2014 às 17h30.\n[…]\nNo Brasil, o filme estreou no dia 30 de maio de 2014, no Cartoon Network. O Mewtwo deste filme não é o mesmo que conheceu Ash no primeiro filme (Mewtwo Contra-Ataca).\n[…]\nNo Japão, o filme possui um prólogo em forma de especial de TV, que estreou no dia 11 de julho de 2013 no canal TV Tokyo, chamado Mewtwo: The Prologue to Awakening. Sendo o décimo segundo especial, ele é estrelado por Eevee e suas evoluções e Virgílio com sua equipe de resgate Pokémon, além de novos personagens. Na história eles encontram Mewtwo ferido e dizem como Mewtwo pode comprar estas novas formas.\n[…]\nEnquanto Ash e companhia tentam defender Pokémon Hills, Genesect os ataca para derrubá-los, quando inesperadamente surge Mewtwo para detê-lo se transformando em sua nova forma.[carece de fontes]?\n[…]\nMewtwo\n[…]\nGenesect\n[…]\nProdução: Cinemágica Ltda.\n[…]\n«Página oficial»  (em japonês)\n[…]\nPokémon the Movie: Genesect and the Legend Awakened (filme) na enciclopédia do Anime News Network (em inglês)\n[…]\nPokémon the Movie: Genesect and the Legend Awakened no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Diancie e o Casulo da Destruição",
      "descricao": "Décimo sétimo filme da franquia Pokémon, de 2014, em que a princesa Diancie busca salvar seu reino de joias."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Diancie e o Casulo da Destruição, o diamante que sustenta o reino de Diancie está se apagando. Que lendário de Kalos ela procura para conseguir criar um novo?",
    "resposta": "Xerneas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Diancie_and_the_Cocoon_of_Destruction"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Diancie_and_the_Cocoon_of_Destruction",
        "situacao": "ok",
        "texto": "Pokémon the Movie: Diancie and the Cocoon of Destruction (ポケモン・ザ・ムービーXY 「破壊の繭とディアンシー」, Pokemon Za Mūbī Ekkusu Wai Hakai no Mayu to Dianshī; lit. 'Pokémon the Movie XY: Diancie and the Cocoon of Destruction') is a 2014 Japanese animated fantasy adventure film created by Satoshi Tajiri and produced by OLM. It is the seventeenth film of the Pokémon anime series and the first film of Pokémon the Serie\n[…]\nDiancie and the rest of the group track down Xerneas to the Allearth Forest, which became a forbidden place after Yveltal, the embodiment of destruction, destroyed the forest and became a giant cocoon called the Cocoon of Destruction. Xerneas teaches Diancie how to create a new Heart Diamond. Team Rocket and the thieves Riot, Marilyn, Millis, and Argus Steel fight for control of Diancie and her power to create diamonds. This disturbs the Cocoon and causes Yveltal to wake up.\n[…]\nYveltal turns the thieves, their Pokémon, and Pikachu to stone with its destructive powers. Xerneas makes Yveltal leave the forest, and uses its life force to restore the forest and the people and Pokémon there as well as Ash's Pikachu, becoming a tree to protect the balance of nature. Diancie returns to the Diamond Domain to create a new Heart Diamond, saving the kingdom.\n[…]\nDiancie (ディアンシー, Dianshī): Known as the Jewel Pokémon, Diancie is the princess of the Diamond Domain, home to Carbink that keep it peaceful as well the Heart Diamond that keeps it safe from outsiders. However, Diancie is growing weak, as is the Heart Diamond. She seeks out Ash and his friends to help her find the Life Pokémon Xerneas to restore her life energy, but on the way they are attacked by the Destruction Pokémon Yveltal.\n[…]\nPokémon the Movie: Diancie and the Cocoon of Destruction  at Anime News Network's encyclopedia\n[…]\nPokémon the Movie: Diancie and the Cocoon of Destruction at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie%3A_Diancie_and_the_Cocoon_of_Destruction",
        "situacao": "ok",
        "texto": "Pokémon the Movie: Diancie and the Cocoon of Destruction (ポケモン・ザ・ムービーXY 「破壊の繭とディアンシー」, Pokemon Za Mūbī Ekkusu Wai \"Hakai no Mayu to Dianshī\"; lit. \"Pokémon o Filme XY: Diancie e o Casulo da Destruição\") é o décimo sétimo filme baseado no anime Pokémon e o primeiro da série Pokémon: Série XY. O filme foi lançado em 19 de julho de 2014 no Japão. Foi exibido no Cartoon Network no dia 8 de novembro de\n[…]\nA edição de fevereiro da CoroCoro afirma que o filme vai girar em torno de uma \"Batalha Magnífica\" entre Xerneas e Yveltal, como o significado oculto do título, relacionado com o Pokémon da Destruição. Nele nota-se também que muitos Pokémon lendários e várias Mega Evoluções vão aparecer no filme.\n[…]\nEm um mundo chamado Diamond Domain (ダイヤモンド鉱国, Daiyamondo Kōkoku) encontra-se a poderosa Heart Diamond (聖なるダイヤ, Seinaru Daiya; \"Holy Diamond\"), em que serviu como fonte de energia ao reino e mantém o País Ore por séculos. Vários Carbink todos vivem no país referenciado, incluindo a sua princesa, a Pokémon da Joia Diancie que criou o diamante poderoso. No entanto, ela não tem mais o poder de controlar o Heart Diamond e seu país está a cair no caos como a vida do diamante está caindo aos pedaços.\n[…]\nUm dia, ela encontra-se com Satoshi e seus amigos e pede a eles para ir em uma jornada para encontrar o Pokémon da Vida Xerneas, a fim de restaurar o Heart Diamond de volta à vida. Mas que está em seu caminho é o Pokémon da Destruição, Yveltal, que uma vez roubou toda a vida na Região Kalos. Durante sua jornada, eles também são atacados pela Equipe Rocket, assim como ladrões de jóias Marilyn Flame e o Ninja Riot.\n[…]\nEles são auxiliados por Millis Steel e seu pai Argus, os viajantes que também enfrentam o Casulo da Destruição.\n[…]\nPokémon the Movie: Diancie and the Cocoon of Destruction (filme) na enciclopédia do Anime News Network (em inglês)\n[…]\nPokémon the Movie: Diancie and the Cocoon of Destruction no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Diancie e o Casulo da Destruição",
      "descricao": "Décimo sétimo filme da franquia Pokémon, de 2014, em que a princesa Diancie busca salvar seu reino de joias."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O filme em que a princesa Diancie deixa seu reino de joias e acaba despertando Yveltal estreou nos cinemas japoneses em que ano?",
    "resposta": "2014",
    "distratores": [
      "2013",
      "2015",
      "2016"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Diancie_and_the_Cocoon_of_Destruction"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Diancie_and_the_Cocoon_of_Destruction",
        "situacao": "ok",
        "texto": "Pokémon the Movie: Diancie and the Cocoon of Destruction (ポケモン・ザ・ムービーXY 「破壊の繭とディアンシー」, Pokemon Za Mūbī Ekkusu Wai Hakai no Mayu to Dianshī; lit. 'Pokémon the Movie XY: Diancie and the Cocoon of Destruction') is a 2014 Japanese animated fantasy adventure film created by Satoshi Tajiri and produced by OLM. It is the seventeenth film of the Pokémon anime series and the first film of Pokémon the Serie\n[…]\nDiancie and the rest of the group track down Xerneas to the Allearth Forest, which became a forbidden place after Yveltal, the embodiment of destruction, destroyed the forest and became a giant cocoon called the Cocoon of Destruction. Xerneas teaches Diancie how to create a new Heart Diamond. Team Rocket and the thieves Riot, Marilyn, Millis, and Argus Steel fight for control of Diancie and her power to create diamonds. This disturbs the Cocoon and causes Yveltal to wake up.\n[…]\nThe film made its English language debut on November 8, 2014, on Cartoon Network in the United States, and in theaters in Australia and New Zealand. In addition, a prequel to the movie, titled Diancie: Princess of the Diamond Domain made its debut on the American Pokémon Trading Card Game website on November 5, 2014, with Carbink, Pangoro, and an Ariados.\n[…]\nDiancie (ディアンシー, Dianshī): Known as the Jewel Pokémon, Diancie is the princess of the Diamond Domain, home to Carbink that keep it peaceful as well the Heart Diamond that keeps it safe from outsiders. However, Diancie is growing weak, as is the Heart Diamond. She seeks out Ash and his friends to help her find the Life Pokémon Xerneas to restore her life energy, but on the way they are attacked by the Destruction Pokémon Yveltal.\n[…]\nPokémon the Movie: Diancie and the Cocoon of Destruction  at Anime News Network's encyclopedia\n[…]\nPokémon the Movie: Diancie and the Cocoon of Destruction at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie%3A_Diancie_and_the_Cocoon_of_Destruction",
        "situacao": "ok",
        "texto": "Pokémon the Movie: Diancie and the Cocoon of Destruction (ポケモン・ザ・ムービーXY 「破壊の繭とディアンシー」, Pokemon Za Mūbī Ekkusu Wai \"Hakai no Mayu to Dianshī\"; lit. \"Pokémon o Filme XY: Diancie e o Casulo da Destruição\") é o décimo sétimo filme baseado no anime Pokémon e o primeiro da série Pokémon: Série XY. O filme foi lançado em 19 de julho de 2014 no Japão. Foi exibido no Cartoon Network no dia 8 de novembro de\n[…]\nO filme foi anunciado depois do lançamento do filme Pokémon o Filme: Genesect e a Lenda Revelada, com um curto trailer mostrado. Mais tarde entre dezembro de 2013, e janeiro de 2014, a CoroCoro Comic confirmou o título do filme, juntamente com o anúncio no site oficial com o trailer oficial destacado no site oficial do filme. O primeiro cartaz do filme mostra todas as Mega Evoluções confirmadas de alguns Pokémon em Pokémon X e Y.\n[…]\nThe Cocoon of Destruction será exibido ao lado do mini filme Pikachu, What's This Key For? (ピカチュウ、これなんのカギ？, Pikachū, Kore Nan no Kagi?; Pikachu, Para que Serve Esta Chave?) onde contará com o novo Pokémon Klefki. A revista revela que também contará com Jirachi, Victini, Manaphy, e Darkrai como convidados especiais. O tema de encerramento do filme será \"Yoake no Ryūseigun\" (夜明けの流星群; lit. \"Aurora da Chuva de Meteoros\") pela Scandal.\n[…]\nUm dia, ela encontra-se com Satoshi e seus amigos e pede a eles para ir em uma jornada para encontrar o Pokémon da Vida Xerneas, a fim de restaurar o Heart Diamond de volta à vida. Mas que está em seu caminho é o Pokémon da Destruição, Yveltal, que uma vez roubou toda a vida na Região Kalos. Durante sua jornada, eles também são atacados pela Equipe Rocket, assim como ladrões de jóias Marilyn Flame e o Ninja Riot.\n[…]\nSite oficial (em japonês)\n[…]\nPokémon the Movie: Diancie and the Cocoon of Destruction (filme) na enciclopédia do Anime News Network (em inglês)\n[…]\nPokémon the Movie: Diancie and the Cocoon of Destruction no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Hoopa e o Duelo Lendário",
      "descricao": "Décimo oitavo filme da franquia Pokémon, de 2015, estrelado pelo mítico Hoopa, que convoca lendários por meio de anéis."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O filme Hoopa e o Duelo Lendário se passa numa cidade do deserto, palco do confronto entre os lendários convocados. Que cidade é essa?",
    "resposta": "Dahara",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Hoopa_and_the_Clash_of_Ages"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Hoopa_and_the_Clash_of_Ages",
        "situacao": "ok",
        "texto": "Pokémon the Movie: Hoopa and the Clash of Ages, known in Japan as Pokémon the Movie XY: The Archdjinni of the Rings: Hoopa (ポケモン・ザ・ムービーXY 光輪リングの超魔神 フーパ, Pokemon Za Mūbī Ekkusu Wai Ringu no Chōmajin Fūpa) is a 2015 Japanese anime adventure film created by Satoshi Tajiri. It is the eighteenth film of the Pokémon anime series and the second film of Pokémon the Series: XY. It was directed by Kunihiko \n[…]\nOne hundred years ago, the power of the Pokémon Hoopa was confined inside the Prison Bottle after it became destructive and out of control. In the present, Ash Ketchum and his friends, Pikachu, Serena, Clemont, and Bonnie are pulled through a portal created by Hoopa's interdimensional rings to Dahara City. Hoopa attempts to use its rings to transport everybody to the nearby Dahara Tower but it is revealed that, in its altered state, Hoopa cannot travel through the rings it creates.\n[…]\nBaraz and his sister Meray know that they can make a new bottle at Dahara Tower with the power of earth, fire, and water, deciding to use Serena's Braixen, Ash's Frogadier, and a wild Hippopotas from the desert.\n[…]\nRayquaza creates a twister around Dahara Tower to protect it, while the others inside reforge the Prison Bottle. However, Hoopa's shadow and the Legendary Pokémon break through it. The bottle is made again, but Baraz drops it; Ash catches it but gets possessed. Hoopa cleanses the shadow of itself with its happy memories, causing the evil to disappear. However, due to too many legendary Pokémon being summoned, a time warp forms around the tower.\n[…]\nMeray (メアリ, Meari): The younger sister of Baraz who also takes care of Hoopa. In the original Japanese, Shoko Nakagawa voices Meray. In the English dub, Emily Woo Zeller voices Meray.\n[…]\nPokémon the Movie: Hoopa and the Clash of Ages  at Anime News Network's encyclopedia\n[…]\nPokémon the Movie: Hoopa and the Clash of Ages at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie%3A_Hoopa_and_the_Clash_of_Ages",
        "situacao": "ok",
        "texto": "Pokémon the Movie: Hoopa and the Clash of Ages (ポケモン・ザ・ムービーXY 光輪の超魔神 フーパ, Pokemon Za Mūbī Ekkusu Wai Ring no chōmajin Hoopa; lit. \"Pokémon o Filme XY: O Archdjinni dos Anéis: Hoopa\") é um filme japonês de animé realizado por Kunihiko Yuyama. É o décimo oitavo filme da franquia homónima e o segundo da série XY. Foi lançado nos cinemas japoneses a 18 de julho de 2015.. Em Portugal, o filme estreou e\n[…]\nDurante a batalha entre Groudon, Kyogre e Rayquaza, Ash e seus amigos são atraídos por um som de um anel que começa a sugar tudo à sua volta, enviando para outro local. Eles não conseguem se segurar e acabam sendo sugados para o portal e chegam a um local desconhecido. Enquanto Ash e Pikachu estão comendo rosquilhas, eles encontram o mítico Pokémon Hoopa que concorda em viajar com eles.\n[…]\nPokémon the Movie: Hoopa and the Clash of Ages (filme) na enciclopédia do Anime News Network (em inglês)\n[…]\nPokémon the Movie: Hoopa and the Clash of Ages no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Volcanion e a Maravilha Mecânica",
      "descricao": "Décimo nono filme da franquia Pokémon, de 2016, em que Ash fica preso ao mítico Volcanion e enfrenta o vilão Alva, que cobiça Magearna."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Volcanion e a Maravilha Mecânica se passa num reino de engrenagens onde a Magearna foi construída, séculos atrás. Como se chama esse reino?",
    "resposta": "Reino de Azoth",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Volcanion_and_the_Mechanical_Marvel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Volcanion_and_the_Mechanical_Marvel",
        "situacao": "ok",
        "texto": "Pokémon the Movie: Volcanion and the Mechanical Marvel, known in Japan as Pokémon the Movie XY&Z: Volcanion and the Exquisite Magearna (ポケモン・ザ・ムービーXY&Z ボルケニオンと機巧のマギアナ, Pokemon Za Mūbī Ekkusu Wai ando Zetto Borukenion to Karakuri no Magiana) is a 2016 Japanese animated fantasy adventure film produced by OLM. It is the nineteenth film of the Pokémon anime series and the third and final film of Pokém\n[…]\nAsh and Volcanion recover Magearna from the Azoth Kingdom. They rendezvous with Serena, Clemont, and Bonnie, who are fascinated by Magearna, but are unable to remove the chain binding Ash and Volcanion. Reluctantly, Volcanion allows the group to accompany him and Magearna to their home, Nebel Plateau. On the way, they are attacked by Team Rocket, who have been hired by Alva to recover Magearna, but the group is able to drive them off with help from Raleigh's sister, Princess Kimia.\n[…]\nThe next day, Alva and his underlings, Levi and Cherie, attack and recapture Magearna. He removes Magearna's \"Soul-Heart\", which he plans to use to activate a mechanism in the Azoth Castle that turns it into a flying fortress. Raleigh tries to stop him, but is knocked unconscious. As the castle takes to the skies, Ash and Pikachu storm the fortress with Volcanion, Kimia, and Greninja, but are trapped by Alva, who attempts to break Magearna's spirit by firing at Nebel Plateau.\n[…]\nMagearna is an artificial Pokémon created in the Azoth Kingdom, which she fled to prevent misuse of her power. She is Volcanion's best friend. She is voiced by Yuka Terasaki.\n[…]\nDr. Nikola is a scientist of the Azoth Kingdom half a millennium in the past who created Magearna. He is the ancestor of Kimia and Raleigh. He is voiced by Tomomichi Nishimura in Japanese and Scottie Ray in English.\n[…]\nPokémon the Movie: Volcanion and the Mechanical Marvel  at Anime News Network's encyclopedia"
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
    "indice": 27,
    "ancora": {
      "nome": "Pokémon: Eu Escolho Você! (filme)",
      "descricao": "Vigésimo filme da franquia Pokémon, de 2017, que recria o começo da jornada de Ash e Pikachu."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No filme Eu Escolho Você, que recria o começo da jornada, Misty e Brock não acompanham Ash. Ele viaja com Verity e com qual outro novo companheiro?",
    "resposta": "Sorrel",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_I_Choose_You!"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_I_Choose_You!",
        "situacao": "ok",
        "texto": "Pokémon the Movie: I Choose You! is a 2017 Japanese animated adventure film created by Satoshi Tajiri and produced by OLM. It is the twentieth film of the Pokémon anime series and the first film of the alternate timeline trilogy. Loosely adapted from the anime's first episode and much of the first season, it was directed by Kunihiko Yuyama and written by Shoji Yonemura.\n[…]\nAfter hearing the Legendary Pokémon Entei is nearby, Ash and several other Trainers rush into the woods to look for it. Ash finds the Entei but ends up fighting over it with a young girl Trainer named Verity and an aspiring young boy Pokémon Professor named Sorrel. When Entei escapes, Ash and Verity argue and Sorrel leaves, urging them to find shelter.\n[…]\nAsh finds himself in an alternative dimension where Pokémon do not exist, but manages to find his way to back to life. Ash takes the newly formed Rainbow Wing and places it on the crystal structure. Ho-Oh arrives, healing everyone and Ash challenges it with Pikachu to battle (although the outcome is never shown). Cross leaves on good terms and eventually Verity and Sorrel leave Ash to achieve their own dreams.\n[…]\nVerity returns to her hometown to see her mother; Sorrel and his Lucario spot an Articuno which he wanted to study; Cross travels peacefully with his Pokémon; and Ash and Pikachu travel on their own while being tailed by Team Rocket. Ho-Oh drops a Rainbow Wing as it flies across the sky.\n[…]\nHe praised the film for having a stronger narrative than the other movies in the franchise, but criticized Sorrel and Verity's personalities, calling them \"more like bystanders of someone else's story, and the attempts at creating backstories for them aren't built up at all\". Brian Costello of Common Sense Media gave the film a score of 2 stars out of 5, writing: \"Pokemon the Movie: I Choose You!\n[…]\nPokémon the Movie: I Choose You! at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie%3A_I_Choose_You%21",
        "situacao": "ok",
        "texto": "Pokémon the Movie: I Choose You! (Brasil: Pokémon: O Filme - Eu Escolho Você / Portugal: Pokémon O Filme - Escolho-te a Ti!) é o vigésimo filme da franquia Pokémon, lançado em 15 de julho de 2017, no Japão, 5 de novembro de 2017, no resto do mundo e em 15 de dezembro de 2018, em Portugal, pelo Biggs.\n[…]\nAsh Ketchum é um garoto que vai ao professor Carvalho para escolher o seu Pokémon inicial e começar sua jornada como treinador de Pokémon. Inicialmente, seu Pikachu o aborrece, mas depois de ser salvo por um bando de Spearows, o Pokémon muda de ideia. Ash e seu Pikachu conhecem o lendário Pokémon Ho-Oh.Depois de ter conquistado algumas insígnias na região de Kanto, Ash tenta capturar Entei com a ajuda dos treinadores Vera e Sérgio, vindo respectivamente de Duefoglie e Rupepoli.\n[…]\nO garoto mais tarde adquire um Charmander e descobre a localização de Ho-Oh. No decorrer da pesquisa do Arco-Íris Pokémon, os meninos se deparam com Suicune e Raikou.Chegando à montanha que hospeda Ho-Oh, Ash encontra o proprietário original de seu Charmander Cruz. Seu Lycanroc é, no entanto, possuído pelo lendário Marshadow e tenta matar seu treinador, mas o Charizard de Ash consegue salvá-lo. Mais tarde Ash e seu Pikachu lutam com Ho-Oh que vê a lendária vitória do Pokémon.\n[…]\nDepois de trazer seu Pokémon elétrico para Centro Pokémon, Ash cumprimenta seus companheiros de viagem. Um deles pretende procurar o trio Articuno, Zapdos e Moltres, Vera rever sua mãe e Ash seguir jornada para se tornar o maior Mestre Pokémon de todos os tempos.\n[…]\nPokémon the Movie: I Choose You! no IMDb\n[…]\nPokémon - O Filme: Eu Escolho Você! no AdoroCinema",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Pokémon: O Poder de Todos",
      "descricao": "Vigésimo primeiro filme da franquia Pokémon, de 2018, passado durante o Festival do Vento de Fula City."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em O Poder de Todos, que pokémon mítico elétrico, de garras afiadas, vive escondido na floresta perto da cidade e desconfia dos humanos?",
    "resposta": "Zeraora",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_The_Power_of_Us"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_The_Power_of_Us",
        "situacao": "ok",
        "texto": "Pokémon the Movie: The Power of Us is a 2018 Japanese anime adventure film based on Satoshi Tajiri's Pokémon media franchise, produced by OLM and Wit Studio and distributed by Toho. It is the twenty-first film of the Pokémon anime series, the second film of the alternate timeline trilogy and a sequel to Pokémon the Movie: I Choose You!.\n[…]\nFifty years ago, the nearby mountain forest was engulfed in flames due to humans clearing the mountain forest and looking for the mysterious Mythical Pokémon Zeraora. Harriet, the woman who built the wind power plant, burned her hand while failing to save her Snubbull from the burning windmill; she was only able to get the key to start the turbine that Snubbull was holding. This resulted in her becoming distant from Pokémon. Lugia was called to clear the fire.\n[…]\nZeraora awakens from his nightmare and begins rescuing Pokémon. While Ash and Margo decide to go follow it, Risa is tasked with taking the eternal flame back to the tower. Ash and Pikachu end up fighting Zeraora, who still distrusts humans, but Ash and Margo manage to get through to it and they try help put out the flames. Toren arrives at the power plant to give the antidote to Callahan who tosses it into the turbines while Harriet and the Pokémon turn the blades.\n[…]\nCallum May of Anime News Network said that the film is one of the most successful attempts at telling multiple stories within the same Pokémon film. May also added, \"Although Zeraora's plot feels too familiar, the cast of human characters and their own personal motivations and secrets leave a stronger impression.\n[…]\nPokémon the Movie: The Power of Us at IMDb\n[…]\nPokémon the Movie: The Power of Us at Rotten Tomatoes\n[…]\nPokémon the Movie: The Power of Us at Box Office Mojo\n[…]\nPokémon the Movie: The Power of Us (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie%3A_The_Power_of_Us",
        "situacao": "ok",
        "texto": "Pokémon the Movie: The Power of Us (Pokémon, o Filme: O Poder de Todos(PT/BR)) é um filme de aventura e anime de 2018 produzido por OLM e Wit Studio. É o vigésimo primeiro filme de Pokémon lançado e o segundo filme da série de filmes reboot do anime. É a sequela de Pokémon, O Filme: Eu Escolho Você!, existente em uma continuidade separada do programa de televisão.\n[…]\nÉ dirigido por Tetsuo Yajima e escrito por ambos Eiji Umehara (Grimoire of Zero) e Aya Takaha com design de personagens done por Shizue Kaneko (If Her Flag Breaks). É foi lançado no Japão em 13 de julho de 2018 e será o último período Heisei de lançamento da série. The Pokémon Company International e Fathom Events lançou o filme em uma corrida cinematográfica limitada em todo o mundo em 24 de novembro de 2018. No Brasil, lançou em 11 de janeiro de 2019, no canal Cartoon Network.\n[…]\nTodos os anos, o festival do vento ocorre em Cidade de Fula, um lugar onde as pessoas são como um vento. Há uma crença de que o lendário Pokémon Lugia aparecerá no último dia do festival, trazendo a todos a benção do vento.\n[…]\nAs pessoas começam a se reunir para o festival, entre as quais Lisa, uma estudante de ensino médio e novata com os Pokémon; Kagachi, um fanfarrão que conta as trolas aos visitantes; Trito, um pesquisador temeroso e com grande falta de confiança; Hisui, uma mulher velha bastante extravagante que odeia os Pokémon e Largo, uma menina que vagueia misteriosamente pela floresta sozinha. Quando Ash e Pikachu os conhecem, a história de todos começa a fluir...\n[…]\nZeraora (ゼラオラ) Voz de: Kōichi Yamadera (Japonês), Pete Zarustica (Português)\n[…]\nA sequência, Pokémon the Movie: Secrets of the Jungle estreou em 25 de dezembro de 2020.\n[…]\nPokémon the Movie: The Power of Us no IMDb\n[…]\nPokémon the Movie: The Power of Us (anime) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Zarude",
      "descricao": "Pokémon mítico dos tipos Sombrio e Planta da oitava geração, um macaco da selva, estrela do filme Segredos da Selva, de 2020."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "No filme Segredos da Selva, que pokémon mítico, um macaco dos tipos Sombrio e Planta, encontra o bebê Koko e o cria como filho?",
    "resposta": "Zarude",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Secrets_of_the_Jungle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie:_Secrets_of_the_Jungle",
        "situacao": "ok",
        "texto": "Pokémon the Movie: Secrets of the Jungle is a 2020 Japanese anime film based on Satoshi Tajiri's Pokémon media franchise and produced by OLM. It is the twenty-third film of the Pokémon anime series, the third of the alternate timeline, a sequel to Pokémon the Movie: The Power of Us and the last film produced by OLM of the Pokémon franchise. The film returns to the series' traditional 2D art style \n[…]\nFor a limited time, if players of Pokémon Sword and Shield preordered tickets for this film's premiere, they would receive the Mythical Pokémon Zarude in its \"Dada\" form and a Shiny Celebi.\n[…]\nIn the Forest of Okoya, the Mythical Pokémon Zarude finds an infant boy in a cradle washed up on a riverbank. Unable to leave the child on his own, Zarude adopts him as a son, naming him \"Koko\". Zarude leaves his tribe, which inhabits a Great Tree deep in the jungle where humans are forbidden to venture, to raise Koko who grows up as a feral child.\n[…]\nZed seizes control of the tank from his henchmen, and Ash, Pikachu, and Koko try to fight him to no avail. Zarude arrives with his tribe, having convinced them to help save the jungle. He also brings a group of wild Pokémon, who previously disliked his tribe due to their selfish behavior, to assist. Zarude is injured in the battle and nearly succumbs, but Koko manages to harness the power of the jungle as if he were a Pokémon, healing him.\n[…]\nIn the end, Koko decides to leave to explore the human world and become the bridge between humans and Pokémon, taking the photo of his parents along with him. As he and Ash leave the Forest of Okoya, they see Zarude turn the healing springs into a geyser to send Koko off. Cheered up by this, Koko goes forth into his future, embracing his dual identity as human and Zarude. At the Great Tree, Zarude sees a Shiny Celebi, which observes him now living in harmony with the other Pokémon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie%3A_Secrets_of_the_Jungle",
        "situacao": "ok",
        "texto": "Pokémon the Movie: Secrets of the Jungle (no Brasil e em Portugal, Pokémon, o Filme: Segredos da Selva) é um filme de anime japonês de 2020 baseado na franquia de mídia Pokémon de Satoshi Tajiri e produzido por OLM. É o vigésimo terceiro filme do universo Pokémon, cobrindo a Geração VIII. O filme retorna ao estilo de arte 2D tradicional da série, em vez de usar a animação CGI usada em Mewtwo Strik\n[…]\nNo Japão, o filme foi lançado em 25 de dezembro de 2020, pela Toho. A data de lançamento original de 10 de julho de 2020, foi adiada devido à pandemia de COVID-19 no Japão. O filme foi lançado internacionalmente (exceto China, Coreia do Sul e Japão), em 8 de outubro de 2021 na Netflix.\n[…]\nPor um tempo limitado, se os jogadores em ingressos pré-encomendassem de Pokémon Sword e Shield para a estreia deste filme, eles obteriam o Pokémon Mítico Zarude em sua forma \"Dada\" e um Celebi Brilhante.\n[…]\nAcompanhamos a história de Koko, um garoto humano, que vive nas profundezas da selva na floresta de Okoya, um paraíso Pokémon proibido para estranhos. Ele foi criado desde bebê como um Pokémon pelo mítico Zarude e cresceu sem nunca duvidar de que ele era um Pokémon, mas um encontro ao acaso com Ash e Pikachu deixa Koko com seu primeiro amigo humano que lhe faz duvidar de quem ele é.\n[…]\nAo mesmo tempo, Koko ao lado de Ash e seu pai Zarude, precisam superar o grande perigo que ameaça toda a selva.[carece de fontes]?\n[…]\nO filme foi lançado em 25 de dezembro de 2020 no Japão. A data de lançamento original de 10 de julho de 2020, foi adiada devido à pandemia de COVID-19 em Tóquio.\n[…]\nO filme foi lançado na Netflix em 8 de outubro de 2021 em todo o mundo (exceto China, Coreia do Sul e Japão).[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Detetive Pikachu (filme)",
      "descricao": "Filme de 2019 baseado na franquia Pokémon, em que um Pikachu falante investiga um mistério."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "No filme Detetive Pikachu, o desfecho revela quem está, na verdade, dentro do Pikachu falante que ajuda o jovem Tim. Quem é?",
    "resposta": "Harry Goodman, pai de Tim",
    "fonte": [
      "https://en.wikipedia.org/wiki/Detective_Pikachu_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Detective_Pikachu_(film)",
        "situacao": "ok",
        "texto": "Pokémon Detective Pikachu is a 2019 urban fantasy mystery film and the first live-action film based on the Pokémon franchise. It is loosely based on the 2016 video game Detective Pikachu. Directed by Rob Letterman, who co-wrote it with Dan Hernandez, Benji Samit, and Derek Connolly, the film stars Ryan Reynolds as the voice and motion capture of Pikachu, with Justice Smith, Kathryn Newton, Suki Wa\n[…]\nThe plot follows Detective Pikachu and his partner Tim Goodman as they attempt to solve the mysterious disappearance of Tim's father, Harry. Filming took place from January to May 2018 in Colorado, England, and Scotland.\n[…]\nTim Goodman gave up his dream of being a Pokémon Trainer following the death of his mother and his estrangement from his father Harry, a police detective who moved to Ryme City, where humans and Pokémon live together side by side, while participating in Pokémon battles, being a Trainer and having Poké Balls are illegal. Tim is informed by Harry's friend, Lieutenant Hideo Yoshida, that Harry died in a car accident.\n[…]\nTim then decides to stay in Ryme City to become a detective and spend more time with Harry and Pikachu.\n[…]\nHarry Goodman, Tim's missing widowed father and a Ryme City police detective.\n[…]\nJustice Smith as Tim Goodman, a former aspiring Pokémon Trainer and insurance agent looking for his missing father. He is additionally Detective Pikachu's partner and the only person capable of hearing him speak.\n[…]\nPeter Debruge of Variety was critical of the plot and the special effects: \"Though consistent with the games ... the story of Detective Pikachu doesn't allow nearly enough Pokémon-related action, while the quality of the computer animation ... falls far short of the basic level of competency audiences have come to expect from effects movies.\" Debruge was also critical of the central pairing of Pikachu and Tim Goodman, saying the relationship lacks chemistry."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Detetive_Pikachu",
        "situacao": "ok",
        "texto": "Pokémon Detective Pikachu (no Brasil e em Portugal, Pokémon: Detetive Pikachu) é um filme nipo-americano de fantasia produzido pela Legendary Entertainment​, The Pokémon Company, Tōhō​ e Warner Bros. Pictures, baseado na franquia “Pokémon” de Satoshi Tajiri, Ken Sugimori, Game Freak e Nintendo. O filme é dirigido por Rob Letterman e estrelado por Ryan Reynolds, Justice Smith, Kathryn Newton, Ken W\n[…]\nNo universo de Pokémon, Tim Goodman é um ex-Treinador de Pokémon e filho do proeminente detetive de Ryme City, Harry Goodman. Convidado por seu pai para trabalhar na delegacia, Tim chega a Ryme City e conhece o detetive Yoshida, um amigo de Harry, e descobre que logo após o envio da passagem de trem para que pudesse chegar a cidade, seu pai tinha desaparecido misteriosamente enquanto trabalhava em um caso.\n[…]\nHarry Goodman, o pai desaparecido de Tim e um famoso detetive de Ryme City.\n[…]\nJustice Smith como Tim Goodman: um ex-aspirante a treinador de Pokémon procurando por seu pai desaparecido. Ele também é parceiro do Pikachu, e a única pessoa capaz de ouvi-lo falar.\n[…]\nKen Watanabe como Detetive Yoshida: um veterano da polícia de Ryme City, tenente e amigo de Harry, é acompanhado por um Snubbull.\n[…]\nA ideia de um filme de Pokémon originou-se de um conceito inicial para a série de anime dos anos 1990, mas foi descartada pelo desenvolvedor do jogo original, Game Freak, que não estava satisfeito com o conceito, antes que a ideia fosse revivida para o spin-off do jogo Detective Pikachu de 2016.\n[…]\nQuando o lançamento japonês do filme foi anunciado em 29 de novembro de 2018, Ryoma Takeuchi foi confirmado para dar voz a Tim Goodman na versão japonesa. Takeuchi também tem uma breve aparição no próprio filme como um treinador Pokémon. Em 20 de março de 2019, foi confirmado que Marie Iitoyo daria voz a Lucy Stevens, e Ken Watanabe iria reprisar seu papel como detetive Yoshida na versão japonesa.",
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
