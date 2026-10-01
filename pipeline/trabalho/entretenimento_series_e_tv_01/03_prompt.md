Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Séries e TV** (tema **Entretenimento**). Avalie **cada uma**, independentemente, e decida:

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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Bart Simpson",
      "descricao": "Personagem de Os Simpsons, o filho mais velho e travesso de Homer e Marge."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Bart, do filho mais velho dos Simpsons, é um anagrama de que palavra inglesa que significa pirralho?",
    "resposta": "Brat",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bart_Simpson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bart_Simpson",
        "situacao": "ok",
        "texto": "Bartholomew Jo-Jo \"Bart\" Simpson is one of the main characters in the American animated television series The Simpsons, part of the titular family. Widely regarded as one of the greatest fictional characters of all time, he was named by Time as one of the most important people of the 20th century in 1998.\n[…]\nBart made his television debut in the short \"Good Night\" on The Tracey Ullman Show on April 19, 1987. Cartoonist Matt Groening created and designed Bart while waiting in the lobby of James L. Brooks's office. Initially called to pitch a series of shorts based on his comic strip Life in Hell, Groening developed a new set of characters. Unlike the other Simpson family members, who were named after Groening's relatives, Bart's name is an anagram of brat.\n[…]\nGroening sketched a concept for a dysfunctional family, naming the characters after members of his family. For the rebellious son, he chose \"Bart\", an anagram of brat, instead of his own name because he felt that \"Matt\" would not \"go over well in a pitch meeting\". Bart's middle initial \"J\" is an homage to the animated characters Bullwinkle J. Moose and Rocket J. Squirrel from The Rocky and Bullwinkle Show, who were named after creator Jay Ward.\n[…]\nDuring the first season of The Simpsons, Fox Network barred Cartwright from interviews to avoid the revelation that Bart was voiced by a woman.\n[…]\nBart and other Simpsons characters appeared in television commercials for Nestlé's Butterfinger candy bars from 1988 to 2001, using the slogan \"Nobody better lay a finger on my Butterfinger!\". Groening later noted that the success of the Butterfinger commercials played a significant role in Fox's decision to greenlight the half-hour series. Bart has also appeared in commercials for the fast-food Burger King chain.\n[…]\nBart Simpson on IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bart_Simpson",
        "situacao": "ok",
        "texto": "Bartholomew Jojo \"Bart\" Simpson é um personagem ficcional criado por Matt Groening para a sitcom Os Simpsons, o filho mais velho de Homer e Marge Simpson. O personagem é retratado como um menino rebelde e desobediente que tem más notas na escola. Este comportamento o deixa frequentemente em situações difíceis com as pessoas que trabalham em sua escola, com sua família, e com estranhos.\n[…]\nDe acordo com o livro Os Simpsons: O álbum de família sem censura (ISBN 0-06-096582-7), seu \"aniversário\" é em 1 de abril ou o Dia da Mentira. De acordo com a cronologia do programa Bart nasceu em 1980 pois ele é dois anos e 38 dias mais velho que Lisa, que nasceu durante as Olimpíadas de Verão de 1984.\n[…]\nBart foi considerado uma das 101 personalidades mais influentes do século XX, pela revista Time, na edição de 18 de abril de 2005 vol. 165, nº 16, onde estão relacionados políticos, artistas, inventores, cientistas e celebridades variadas.\n[…]\nEle adora a mãe, mas quando ela o controla, considera-a chata. É talvez o único membro da família Simpson que compreende e dá atenção aos sentimentos de Bart.\n[…]\nA relação não é muito boa, mas é típica de irmãos. Eles os dois passam a vida a gozarem um ao outro e em alguns episódios, a Lisa estrangula o Bart. Mas de vez em quando, pede conselhos a Lisa. A relação dos dois quando menores era horrível, até Bart descobrir que a sua primeira palavra foi o seu nome de \"Lisa\" (episódio Lisa's First Word). Depois disso, a relação foi menos odiosa e Bart conseguiu aceitá-la, como irmã. Apesar das constantes divergências e gabarolices, no fundo, amam-se.\n[…]\nÉ considerada fisicamente mais forte que ele.\n[…]\nVerdadeiro Amor de Bart – segundo a “Máquina de Astrologia” do Professor Frink, Bart encontrará seu verdadeiro amor um minuto antes de morrer, aos 83 anos.\n[…]\nGroening, Matt (18 de outubro de 2004). The Bart Book. [S.l.]: HarperCollins. ISBN 978-0007191697",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Homer Simpson",
      "descricao": "Personagem de Os Simpsons, o pai da família, funcionário da usina nuclear de Springfield."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O pai atrapalhado de Os Simpsons recebeu o nome Homer em homenagem a quem?",
    "resposta": "Ao pai de Matt Groening",
    "fonte": [
      "https://en.wikipedia.org/wiki/Homer_Simpson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Homer_Simpson",
        "situacao": "ok",
        "texto": "Homer Jay Simpson is a fictional character and the main protagonist of the American animated sitcom The Simpsons. Part of the titular family, Homer made his television debut in the short \"Good Night\" on The Tracey Ullman Show on April 19, 1987. Cartoonist Matt Groening crafted and designed Homer while waiting in the lobby of James L. Brooks's office. Initially called to pitch a series of shorts ba\n[…]\nBurns, frequently ignores or forgets his existence. Creator Matt Groening chose the nuclear plant as Homer's workplace to provide opportunities for comedic chaos. Although Homer's numerous other jobs each last only one episode, earlier seasons often explained how he was fired from the plant and rehired. In later episodes, these transitions became more impulsive, with his side ventures occurring without reference to his regular employment.\n[…]\nMatt Groening first conceived Homer and the rest of the Simpson family in 1987 while waiting in the lobby of producer James L. Brooks's office. Groening was invited to pitch a series of animated shorts for The Tracey Ullman Show and initially planned to adapt his comic strip, Life in Hell. Upon realizing that adapting the strip would require him to relinquish publication rights, he quickly decided to create something new.\n[…]\nGroening disliked this detail, and the lines were eventually removed.\n[…]\nThis was inspired by Jimmy Finlayson, the mustachioed Scottish actor who appeared in 33 Laurel and Hardy films. Finlayson had used the term as a minced oath to stand in for the word \"Damn!\" Matt Groening felt that it would better suit the timing of animation if it were spoken faster. Castellaneta then shortened it to a quickly uttered \"D'oh!\".\n[…]\nGroening, Matt (2005). The Homer Book. HarperCollins. ISBN 978-0-06-111661-2.\n[…]\nGroening, Matt (1991). The Simpsons Uncensored Family Album. HarperCollins. ISBN 978-0-06-096582-2.\n[…]\nHomer Simpson on IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homer_Simpson",
        "situacao": "ok",
        "texto": "Homer Jay Simpson é um personagem de desenho animado criado por Matt Groening. Ele é o patriarca da família ficcional Simpson, de Os Simpsons uma série de televisão da FOX. Sua primeira aparição na televisão ocorreu em 19 de abril de 1987. Matt Groening o criou enquanto este estava na sala de espera do escritório de James L. Brooks. Ele havia sido chamado para apresentar uma série de curtas basead\n[…]\nEle nomeou o pai da família com o nome de seu pai, Homer Groening. Homer é o único personagem que aparece em todos os episódios.\n[…]\nHomer foi descrito pelo The Sunday Times como \"a maior criação cômica do tempo [moderno]\". O artigo observou: \"toda a idade precisa de seu grande e consolador fracasso, de sua mediocridade amável e livre de pretensões. E nós temos a nossa em Homer Simpson\".\n[…]\nApesar da incorporação parcial da cultura americana por Homer, sua influência se espalhou para outras partes do mundo. Em 2003, Matt Groening revelou que seu pai, após o qual Homer foi nomeado, era canadense, e disse que isso fez do próprio Homer um canadense. Posteriormente, o personagem tornou-se cidadão honorário de Winnipeg, Manitoba, no Canadá, porque acredita-se que Homer Groening seja de lá, embora fontes digam que ele realmente nasceu na província de Saskatchewan.\n[…]\nEm 2007, uma imagem de Homer foi pintada ao lado do Gigante Cerne Abbas em Dorset na Inglaterra, como parte de uma promoção para o filme Os Simpsons. Isso causou indignação entre os neopagãos locais que realizaram \"magia da chuva\" para tentar eliminá-lo. Em 2008, uma desfigurada moeda de euro Espanhol foi encontrada em Avilés, Espanha com o rosto de Homer substituindo a efígie do Rei Juan Carlos I.\n[…]\nGroening, Matt (1997). Richmond, Ray; Coffman, Antonia, eds. The Simpsons: A Complete Guide to Our Favorite Family 1st ed. New York: HarperPerennial. ISBN 978-0-06-095252-5. LCCN 98141857. OCLC 37796735. OL 433519M",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Scooby-Doo",
      "descricao": "Cachorro dinamarquês medroso, personagem-título dos desenhos da Hanna-Barbera criados em 1969."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do cachorro Scooby-Doo foi inspirado num trecho cantado de qual sucesso de Frank Sinatra?",
    "resposta": "Strangers in the Night",
    "distratores": [
      "My Way",
      "New York, New York",
      "Fly Me to the Moon"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Scooby-Doo_(character)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Scooby-Doo_(character)",
        "situacao": "ok",
        "texto": "Scoobert Doo, more commonly known as Scooby-Doo, is an American cartoon character and the titular main protagonist of the eponymous animated television franchise created in 1969 by the American animation company Hanna-Barbera. He is a male Great Dane and lifelong companion of amateur detective Shaggy Rogers, with whom he shares many personality traits.\n[…]\nBy the time the series was pitched to the network as Who's S-S-Scared? in early 1969, Too Much was solidified as a cowardly Great Dane. Both the dog and the series would be renamed Scooby-Doo by Fred Silverman, CBS's head of daytime programming, between its unsuccessful first pitch and the second pitch that earned the show a green light. Silverman stated that he came up with the name from the syllables \"doo-be-doo-be-doo\" in Frank Sinatra's hit song \"Strangers in the Night\".\n[…]\nScott Innes (also the then-voice of Shaggy) voiced Scooby-Doo in the 1998-2001 direct-to-video films and continued to voice the character regularly for video games (such as Scooby-Doo! Night of 100 Frights), toys and some commercials until 2008. Kay was selected by William Hanna to provide the voice of the computer-generated Scooby-Doo in the 2002 live-action film, but was later fired.\n[…]\nScooby-Doo has appeared in Johnny Bravo in the episodes \"Bravo Dooby-Doo\" and \"'Twas the Night\" during the first season, voiced both times by Hadley Kay. He was originally going to be voiced by Greg Burson, but was replaced with Kay due to the executives at Cartoon Network thinking that he did not sound enough like Scooby.\n[…]\nScooby-Doo and the Mystery Inc. gang appear in the second part of the Batman: The Brave and the Bold episode \"Bat-Mite Presents: Batman's Strangest Cases\", in which they team up with Batman and Robin to rescue Weird Al, who was kidnapped by the Joker and the Penguin."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Scooby-Doo_%28personagem%29",
        "situacao": "ok",
        "texto": "Scoobert Cornelius Doo, mais conhecido como Scooby-Doo, é um cão fictício e o protagonista da série de televisão Scooby-Doo. Scooby-Doo é o animal de estimação e o companheiro de longa vida de Salsicha Rogers. Ele pode falar e ficar sobre duas patas por muito tempo. É medroso, porém tem um coração de ouro e, assim como Salsicha, é comilão. O personagem utiliza muito o bordão \"Scooby-dooby-doo\". No\n[…]\nAmber: Salsicha e Scooby são sequestrados por alienígenas e abandonados no deserto. Lá eles conhecem uma fotógrafa da vida selvagem, Crystal e seu cachorro Amber, um Golden Retriever usando uma bandana vermelha. (Scooby-Doo e os invasores alienígenas);\n[…]\nShauna; Scooby se apaixonou por ela quando visitou o Grand Sandy Resort. (Scooby-Doo! e a Besta da Praia)\n[…]\nSegundo a revista oficial que acompanhou o filme de 2002, Scooby tem sete anos.\n[…]\nDon Messick em Scooby-Doo (1969–1996)\n[…]\nScott Innes em Scooby-Doo (1998–2001)\n[…]\nFrank Welker em Scooby-Doo (2002-presente), Scooby-Doo! O Mistério Começa e Scooby-Doo! A Maldição do Monstro do Lago\n[…]\nNeil Fanning em Scooby-Doo (2002) e Scooby-Doo 2 - Monstros à Solta (2004)\n[…]\nRui Paulo (em Scooby-Doo: O Filme (2002) e Scooby! (2020)\n[…]\nJosé Jorge Duarte (em Looney Tunes: De Novo a Ação (2003), Scooby-Doo 2 - Monstros à Solta (2004) e O Que Há de Novo, Scooby-Doo?)\n[…]\nRui de Sá (desde Scooby-Doo! Mistério S.A até ao presente)\n[…]\nOrlando Drummond (De Scooby Doo, Cadê Você? até Scooby Doo - Mistério S.A - 1a Voz)\n[…]\nTatá Guarnieri (Scooby-Doo e o Fantasma da Bruxa - Álamo)\n[…]\nReginaldo Primo (Scooby Doo Mistério S.A a 2020- 2a Voz)\n[…]\nA origem do nome \"Scooby-Doo\" veio da música Strangers in the Night, de Frank Sinatra. Mas a ideia veio do chefe de programação infantil da CBS, Fred Silverman, que pensou no nome quando Frank Sinatra canta \"doo-be-doo-be-doo\".\n[…]\nO Show do Scooby-Doo\n[…]\nWhat's New, Scooby-Doo?\n[…]\n«Site oficial do Scooby-Doo»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Big Brother",
      "descricao": "Franquia internacional de reality show criada na Holanda em 1999, em que participantes confinados numa casa são filmados o tempo todo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do reality show Big Brother vem do líder que vigia todos em qual romance de George Orwell?",
    "resposta": "1984",
    "fonte": [
      "https://en.wikipedia.org/wiki/Big_Brother_(franchise)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Big_Brother_(franchise)",
        "situacao": "ok",
        "texto": "Big Brother is a reality competition television franchise created by John de Mol Jr., first broadcast in the Netherlands in 1999 and subsequently syndicated internationally beginning in 2000. The show features contestants called \"housemates\" or \"HouseGuests\" who live together in a specially constructed house that is isolated from the outside world. The show has been cited as having had widespread \n[…]\nThe term Big Brother originates from George Orwell's novel Nineteen Eighty-Four, with its theme of continuous oppressive surveillance.\n[…]\nIn 2000, the estate of George Orwell sued CBS Television and Endemol for copyright and trademark infringement, claiming that the program infringed on the Orwell novel 1984 and its trademarks. After a series of court rulings adverse to the defendants (CBS and Endemol), the case was settled for an undisclosed amount of money on the evening of the trial.\n[…]\nIn Big Brother Brasil, many viewers reported that they watched a male housemate allegedly force himself on a female housemate while she was passed-out drunk after a \"boozy party\". Soon after, the Federal Police of Brazil entered the house and arrested the offending housemate, who was later banned from ever appearing on the show again.\n[…]\nAdditionally, an incident of sexual assault occurred in the Australian Big Brother house in 2006, during the show's sixth season. Contestant Michael \"John\" Bric held down fellow contestant Camilla Severi in her bed while a second man, Michael \"Ashley\" Cox, \"slapped\" her in the face with his penis, an indecent act illegal under Australian law. The incident was shown on the 'Adults-only' late-night segment, Big Brother: Adults Only, leading to the show's cancellation.\n[…]\nJohnson-Woods, Toni (2002). Big Brother: Why Did That Reality TV Show Become Such a Phenomenon?. Australia: University of Queensland Press. ISBN 0-7022-3315-3."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Big_Brother_%28reality_show%29",
        "situacao": "ok",
        "texto": "Big Brother é uma franquia de reality show neerlandesa criada por John de Mol. Foi transmitida pela primeira vez nos Países Baixos em 1999 e posteriormente distribuída internacionalmente. O programa apresenta concorrentes que moram juntos em uma casa especialmente construída e isolada do mundo exterior. Desde 5 de agosto de  2023 (2023 -08-05), já foram feitas versões do Big Brother em mais de 63 \n[…]\nO nome é inspirado no Grande Irmão do romance Mil Novencentos e Oitenta e Quatro de George Orwell e os moradores são monitorados continuamente durante sua estadia na casa por câmeras ao vivo, bem como por microfones. Em intervalos regulares, os moradores nomeiam colegas que desejam expulsar de casa. Ao longo da competição, eles são eliminados (geralmente semanalmente) até que apenas um permaneça e ganhe o prêmio em dinheiro.\n[…]\nEm abril de 2000, a Castaway, uma produtora independente, entrou com uma ação judicial contra John de Mol e Endemol por roubarem os conceitos de seu próprio programa chamado Survive!, um reality show onde os competidores são colocados em uma ilha deserta e precisam cuidar de si mesmos sozinhos. Esses competidores também eram filmados por câmeras ao seu redor. Posteriormente, o tribunal rejeitou a ação movida por Castaway contra de Mol e Endemol.\n[…]\nO formato do reality show foi posteriormente transformado em Survivor.\n[…]\nEm 2000, o espólio de George Orwell processou a CBS Television e a Endemol por violação de direitos autorais e marca registrada, alegando que o programa infringia o romance 1984 e suas marcas registradas. Após uma série de decisões judiciais adversas aos réus (CBS e Endemol), o caso foi resolvido por uma quantia não revelada na noite do julgamento.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Um Maluco no Pedaço",
      "descricao": "Sitcom americana exibida de 1990 a 1996, estrelada por Will Smith como um jovem da Filadélfia que vai morar com os tios ricos em Bel-Air."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O título original de Um Maluco no Pedaço, The Fresh Prince of Bel-Air, vem do nome artístico que Will Smith usava em qual carreira?",
    "resposta": "Rapper",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Fresh_Prince_of_Bel-Air"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Fresh_Prince_of_Bel-Air",
        "situacao": "ok",
        "texto": "The Fresh Prince of Bel-Air is an American television sitcom created by Andy and Susan Borowitz that aired on NBC from September 10, 1990, to May 20, 1996. The series stars Will Smith as a fictionalized version of himself, a street-smart teenager born and raised in West Philadelphia who is sent to live with his wealthy uncle and aunt in Bel-Air, Los Angeles, where his lifestyle often clashes with \n[…]\nSmith did so, and the first contract for the show was drawn up that night in a limo outside.\n[…]\nAuthor Willie Tolliver noted: \"What The Fresh Prince did accomplish was to put Smith and his character Will into an environment of affluence and possibility, thus changing the terms of his own Black identity. This social and cultural mobility is central to Smith's racial significance, and this will become evident again and again; he moves the image of the Black male into unaccustomed spaces just as Smith himself was in the process of conquering Hollywood.\"\n[…]\nIn 2019, a mock trailer titled Bel-Air was uploaded on YouTube, written and directed by Morgan Cooper, for a darker, more dramatic re-imagining of the sitcom. Will Smith subsequently heavily praised the fan film, commenting that \"Morgan did a ridiculous trailer for Bel-Air. Brilliant idea, the dramatic version of The Fresh Prince for the next generation\", expressing interest in expanding the idea beyond the short film into a full Bel-Air reboot series.\n[…]\nMuch of the cast virtually reunited over a video call in an episode of Smith's Snapchat reality series Will From Home that premiered in April 2020. A reunion of the surviving original cast, The Fresh Prince Reunion, aired on HBO Max in November 2020. Among other reminisces, Janet Hubert appeared, also appearing around this time in a joint radio interview with Smith where the two reconcile.\n[…]\nThe Fresh Prince of Bel-Air at epguides.com\n[…]\nThe Fresh Prince of Bel-Air at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Fresh_Prince_of_Bel-Air",
        "situacao": "ok",
        "texto": "The Fresh Prince of Bel-Air (bra: Um Maluco no Pedaço; prt: O Príncipe de Bel-Air) é uma sitcom americana criada por Andy e Susan Borowitz, produzida por Quincy Jones e exibida originalmente pela rede NBC, de 10 de setembro de 1990 até 20 de maio de 1996. Um sucesso de audiência, The Fresh Prince of Bel-Air totalizou 148 episódios ao longo de seis temporadas.\n[…]\nA série é estrelada por Will Smith – até então conhecido por sua carreira musical com a dupla DJ Jazzy Jeff & the Fresh Prince – como versão fictícia de si mesmo, um jovem nascido e criado no oeste da Filadélfia que vai morar com seus tios ricos no luxuoso bairro de Bel Air (Los Angeles). O elenco principal é completado por James Avery, Alfonso Ribeiro, Karyn Parsons, Tatyana M.\n[…]\nThe Fresh Prince of Bel-Air tornou-se um ícone da cultura pop da década de 1990, além de consolidar a carreira de Smith como ator, tornando-o um dos atores mais rentáveis e proeminentes de Hollywood; após o fim do programa ele fez a transição da televisão para o cinema, tornando-se um astro cinematográfico. Uma reunião especial do elenco original estreou na HBO Max em 18 de novembro de 2020.\n[…]\nApós uma série de conversações, com sugestões do próprio Will e aprovação dos executivos da NBC, em 1990 foi iniciada a série The Fresh Prince of Bel-Air, na qual ele interpretava um personagem baseado em si próprio, ou seja, Will Smith. Will Smith conheceu sua esposa Jada Pinkett Smith (a Niobe de Matrix Reloaded), no set de filmagens da série. A atriz estava fazendo um teste para interpretar a namorada do rapper no seriado. Não ganhou o papel, mas conheceu o futuro marido.\n[…]\nThe Fresh Prince diluiu e capitalizou a então crescente popularidade do hip-hop e quase antecipou seu domínio na cena americana\".\n[…]\nThe Fresh Prince of Bel-Air (em inglês) no epguides.com\n[…]\nThe Fresh Prince of Bel-Air no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Stranger Things",
      "descricao": "Série de ficção científica da Netflix, criada pelos irmãos Duffer, ambientada na cidade fictícia de Hawkins, Indiana."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Antes da estreia em 2016, Stranger Things tinha como título provisório o nome de qual localidade do estado de Nova York?",
    "resposta": "Montauk",
    "distratores": [
      "Amityville",
      "Southampton",
      "Coney Island"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Stranger_Things"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stranger_Things",
        "situacao": "ok",
        "texto": "Stranger Things is an American television series created by the Duffer Brothers for Netflix. Produced by Monkey Massacre Productions and 21 Laps Entertainment, the first season was released on Netflix on July 15, 2016. The second and third seasons followed in October 2017 and July 2019, respectively, and the fourth season was released in two volumes in May and July 2022. The fifth and final season\n[…]\nThe series was originally known as Montauk. The setting was then Montauk, New York, and nearby Long Island locations. Montauk figured into several real-world conspiracy theories involving secret government experiments. The brothers had chosen Montauk as it had further Spielberg ties with the film Jaws, where Montauk was used for the fictional setting of Amity Island.\n[…]\nIn April 2018, filmmaker Charlie Kessler filed a lawsuit against the Duffer Brothers, claiming that they stole his idea behind his short film Montauk, which featured a similar premise of a missing boy, a nearby military base doing otherworldly experiments, and a monster from another dimension. Kessler directed the film and debuted it at the 2012 Hamptons International Film Festival.\n[…]\nDuring the Tribeca Film Festival in April 2014, he pitched his film to the Duffer brothers and later gave them \"the script, ideas, story and film\" for a larger film idea which he called The Montauk Project. Kessler contended that the Duffer brothers used his ideas to devise the premise for Stranger Things and sought a third of the income that they had made from the series.\n[…]\nJournalists have noted that the idea of supernatural events around Montauk had originated due to urban legend of the Montauk Project, which came to light from the 1992 book The Montauk Project: Experiments in Time.\n[…]\nStranger Things on Netflix\n[…]\nStranger Things at IMDb\n[…]\nStranger Things at Metacritic\n[…]\nStranger Things at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stranger_Things",
        "situacao": "ok",
        "texto": "Stranger Things é uma série de televisão via streaming estadunidense  criada pelos irmãos Matt e Ross Duffer para a plataforma Netflix. Foi lançada ao longo de cinco temporadas, entre 15 de julho de 2016 á 31 de dezembro de 2025.\n[…]\nOs irmãos desejavam filmar a série ao redor da área de Long Island para combinar com o conceito inicial de Montauk. No entanto, com as filmagens programadas para novembro de 2015, foi difícil filmar em Long Island no tempo frio, e a produção começou a explorar locais em torno da área de Atlanta, Geórgia.\n[…]\nDurante o Tribeca Film Festival de 2014, ele apresentou seu filme aos irmãos Duffer e depois deu a eles \"o roteiro, as ideias, a história e o filme\" para fazerem um filme maior que ele chamou de The Montauk Project. Kessler argumentou que os irmãos Duffer usaram suas ideias para criar a premissa de Stranger Things e buscou um terço da renda que eles ganharam com a série.\n[…]\nPouco antes do início do julgamento em maio de 2019, Kessler retirou sua ação depois de ouvir os depoimentos e ver documentos de 2010 que mostravam a ele que os Duffers haviam criado de forma independente o conceito de Stranger Things. Jornalistas notaram que a ideia de eventos sobrenaturais ao redor de Montauk se originou devido à lenda urbana do Projeto Montauk, que veio à tona no livro de 1992 The Montauk Project: Experiments in Time.\n[…]\nDesde sua estreia em 2016, Stranger Things transcendeu o status de série de sucesso para se tornar um fenômeno cultural global. Seu impacto pode ser analisado em múltiplas dimensões que vão muito além da trama sobrenatural em Hawkins. A série atuou como uma máquina do tempo cultural, revitalizando globalmente o interesse pela estética, trilha sonora e cinema da década de 1980.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Roberto Gómez Bolaños",
      "descricao": "Humorista, roteirista e ator mexicano, criador e intérprete de Chaves e Chapolin."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O criador de Chaves, Roberto Gómez Bolaños, ganhou o apelido Chespirito por ser comparado a qual dramaturgo?",
    "resposta": "William Shakespeare",
    "distratores": [
      "Miguel de Cervantes",
      "Molière",
      "Lope de Vega"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Roberto_G%C3%B3mez_Bola%C3%B1os"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roberto_G%C3%B3mez_Bola%C3%B1os",
        "situacao": "ok",
        "texto": "Roberto Mario Gómez y Bolaños (21 February 1929 – 28 November 2014), more commonly known by his stage name Chespirito (Spanish pronunciation: [tʃespiˈɾito], or \"Little Shakespeare\"), was a Mexican actor, comedian, screenwriter, songwriter, humorist, director, producer, and author. He is widely regarded as one of the icons of Spanish-speaking humor and entertainment and one of the greatest comedian\n[…]\nThe group was later depicted in the 2025 Mexican miniseries Chespirito: Sin Querer Queriendo, which dramatizes Gómez Bolaños's early life and the formation of his friendships, showing how these experiences influenced his later creative work.\n[…]\n\"Chespirito\" was of short stature; his stage name was the Spanish phonetic pronunciation of William Shakespeare \"Chespir\" (pronounced \"shespir\") with diminutive suffix -\"ito\". Between 1960 and 1965 he dedicated himself to writing scripts for \"Comedians and songs\" and \"El estudio de Pedro Vargas\", which were the two programs with the highest audience in Mexico.\n[…]\nGiven this information, Gómez Bolaños' immediate response was that he had never been linked to drug trafficking in any of its forms, but María Antonieta de las Nieves assured that El show de Chespirito was presented at the celebration of a first communion for the family of the drug dealer.\n[…]\nAccording to El Financiero, Roberto Gómez Bolaños was severely criticized for traveling to South American nations that were under the yoke of dictators such as Jorge Rafael Videla in Argentina, and Augusto Pinochet in Chile.\n[…]\n1989: Chaves (Polydor Records Brazil/SBT)\n[…]\nGómez Bolaños, Roberto (2007). Sin querer queriendo [Wanting Without Wanting]. Mexico City: Penguin Random House Grupo Editorial. ISBN 9786071110565. OCLC 898484220.\n[…]\nBolaños, Roberto (2006). ...y también poemas (in Spanish). México: Punto de lectura. ISBN 9786071110329. OCLC 911181209.\n[…]\nChespirito at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roberto_G%C3%B3mez_Bola%C3%B1os",
        "situacao": "ok",
        "texto": "Roberto Mario Gómez y Bolaños (Cidade do México, 21 de fevereiro de 1929 – Cancún, 28 de novembro de 2014), conhecido como Roberto Gómez Bolaños e também pela alcunha Chespirito, foi um ator, comediante, músico, compositor, diretor, produtor, escritor, roteirista e filantropo mexicano.\n[…]\nEm 1958, Roberto escreveu o roteiro para o filme Los Legionarios, primeiro filme em que trabalhou. O diretor do filme, Agustín P. Delgado, ficou impressionado com o roteiro de Roberto, dizendo que era um pequeno William Shakespeare, capaz de escrever histórias tão prolíficas e versáteis quanto o autor inglês. Agustín P. Delgado então deu a Roberto uma alcunha, \"Chespirito\", que é a forma diminutiva e castelhanizada do vocábulo inglês Shakespeare (Chekspir).\n[…]\nEm 2006 foi lançada a série animada do Chaves, produzida pelo filho de Bolaños, Roberto Gómez Fernández. O próprio Chespirito supervisionou os roteiros dos episódios do desenho e participou de um especial organizado pela Televisa no lançamento da série animada, no dia 21 de outubro de 2006. No mesmo ano, Chespirito publicou no México a sua autobiografia, chamada \"Sin Querer Queriendo: Memorias\".\n[…]\nEm maio de 2021, saiu na imprensa uma notícia de que Florinda Meza teria processado Roberto Gómez Fernández, filho de Bolaños, pelos direitos das séries Chaves e Chapolin. Mas essa notícia não era verdadeira e foi desmentida pelo advogado da atriz, Guillermo Pous. O que aconteceu foi que Florinda contratou um advogado para regularizar alguns pontos do testamento de Chespirito.\n[…]\nAntes disso, em maio de 2023, a produtora THR3 Media Group já havia anunciado que iria produzir em parceria com a HBO Max uma série biográfica contando a história de Roberto Gómez Bolaños, criador e intérprete do Chaves e do Chapolin.\n[…]\nSite Oficial de Chespirito",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Chacrinha",
      "descricao": "Apresentador brasileiro José Abelardo Barbosa de Medeiros, o Velho Guerreiro, comunicador de rádio e TV."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O apelido do apresentador Abelardo Barbosa, o Velho Guerreiro, nasceu de um programa de rádio transmitido de que tipo de lugar?",
    "resposta": "Uma chácara em Niterói",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chacrinha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chacrinha",
        "situacao": "ok",
        "texto": "José Abelardo Barbosa de Medeiros (Surubim, 30 de setembro de 1917 – Rio de Janeiro, 30 de junho de 1988), mais conhecido como Chacrinha ou simplesmente Abelardo Barbosa, foi um comunicador de rádio e televisão brasileiro, apresentador de programas de auditório de grande sucesso das décadas de 1950 a 1980.\n[…]\nFoi o autor da célebre frase: \"Na televisão, nada se cria, tudo se copia\". Em seus programas de televisão, foram revelados para o país inteiro cantores como Roberto Carlos, Clara Nunes, Roberto Leal, Paulo Sérgio, Raul Seixas, Perla, entre muitos outros. Desde a década de 1970, era chamado de Velho Guerreiro, após uma homenagem feita a ele pelo cantor Gilberto Gil, que assim se referiu a Chacrinha em sua canção \"Aquele Abraço\".\n[…]\nEm 1943, lança na Rádio Clube Fluminense um programa de marchinhas de carnaval chamado Rei Momo na Chacrinha, que faz muito sucesso. Passa então a ser conhecido como Abelardo \"Chacrinha\" Barbosa. Nos anos 1950, comandaria o programa Cassino da Chacrinha, no qual viria a lançar vários sucessos da música popular brasileira como \"Estúpido Cupido\", da cantora paulista Celly Campelo, e \"Coração de Luto\", do artista gaúcho Teixeirinha.\n[…]\nChacrinha chegou a ser internado e fazer sessões de quimioterapia para tratar o tumor, que já se espalhava para o pulmão remanescente. Leleco, filho do apresentador, afirmou que ele tinha uma aparência frágil, extremamente magro.\n[…]\nConhecido como Velho Guerreiro, em 1987 foi homenageado pela escola de samba carioca Império Serrano com o enredo \"Com a boca no mundo - Quem não se comunica, se trumbica\", foi a única vez que desfilou numa escola de samba, surgindo no último carro alegórico, que reproduzia o cenário de seu programa, rodeado por chacretes, por Russo, seu assistente de palco, e por Elke Maravilha.\n[…]\nChacrinha no IMDb"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Mussum",
      "descricao": "Humorista e músico brasileiro Antônio Carlos Bernardes Gomes, integrante de Os Trapalhões."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O apelido Mussum, dado por Grande Otelo ao trapalhão Antônio Carlos Bernardes Gomes, vem do nome de que tipo de animal?",
    "resposta": "Um peixe",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mussum"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mussum",
        "situacao": "ok",
        "texto": "Antônio Carlos Bernardes Gomes (Rio de Janeiro, 7 de abril de 1941 – São Paulo, 29 de julho de 1994), mais conhecido como Mussum, foi um humorista, músico, ator e compositor brasileiro, que consagrou-se em diferentes áreas do entretenimento, iniciando a carreira na música com Os Originais do Samba, e posteriormente integrando o grupo humorístico Os Trapalhões, no qual permaneceu até sua morte.\n[…]\nJunto com Grande Otelo — que lhe deu o apelido, que posteriormente se tornou nome artístico, de \"Mussum\" — destacou-se como um dos únicos comediantes negros da televisão brasileira na década de 1980.\n[…]\nFinalmente, em 1965, aceitou fazer uma participação no programa humorístico Bairro Feliz, exibido pela TV Globo, e atuando ao lado do comediante Grande Otelo. Foi nos bastidores deste programa que Otelo teria dado ao então Carlinhos o apelido de \"Mussum\", uma referência ao peixe homônimo de coloração preta e origem sul-americana.\n[…]\nFora do casamento, Mussum teve mais quatro filhos: Paula Aparecida, fruto de um namoro com Maria Glória Fachini; Antonio Carlos Filho, fruto de um rápido romance com a modelo Therezinha de Oliveira; e o ator Antônio Carlos Santana (também conhecido como \"Mussunzinho\"), fruto de um caso extraconjugal com Maíra Santana de Moura. Em outubro de 2019, foi comprovado que o dentista Igor Palhano é filho biológico de Mussum, fruto de um envolvimento do trapalhão com uma mulher chamada Denildes Palhano.\n[…]\nEm 2023, foi lançado o filme biográfico Mussum, o Filmis, uma produção da Globo Filmes com a Camisa Listrada e a Downtown Filmes, que narra a trajetória de Antônio Carlos desde a sua infância até a consagração com a música e Os Trapalhões. O longa-metragem, que marcou a estreia de Silvio Guindane como diretor, fez sua estreia no 51º Festival de Cinema de Gramado, tendo recebido diversos prêmios e elogios da crítica e público após seu lançamento nos cinemas."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Chaves",
      "descricao": "Seriado de comédia mexicano criado por Roberto Gómez Bolaños, sobre um menino pobre que vive numa vila."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No título original mexicano de Chaves, El Chavo del Ocho, o número oito se refere a quê?",
    "resposta": "Ao Canal 8 da TV mexicana",
    "fonte": [
      "https://en.wikipedia.org/wiki/El_Chavo_del_Ocho"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/El_Chavo_del_Ocho",
        "situacao": "ok",
        "texto": "El Chavo, also known as El Chavo del Ocho   is a Mexican television sitcom created by Roberto Gómez Bolaños and produced by Televisa. It premiered on 26 February 1973, and concluded on 7 January 1980, after 7 seasons and 312 episodes, and aired across Latin America and Spain.\n[…]\nRoberto Gómez Bolaños as El Chavo\n[…]\nRoberto Gómez Bolaños was the show's main creator and star. He first called Florinda Meza to act in the show; Chespirito and Meza later married. Vivar was the second actor chosen for the show. A mutual friend recommended Vivar to Gómez Bolaños when he started casting. Gómez Bolaños cited Vivar at Forum 8 at Telesistema Mexicano – where the shooting was taking place. Vivar showed up as a scene was shooting; he laughed, and the scene had to 'cut'.\n[…]\nOn January 8, 1973, Telesistema Mexicano and Televisión Independiente de México merged to become Televisa. After the merger, on February 26, 1973, El Chavo del Ocho premiered as a half-hour weekly television series.\n[…]\nÉdgar Vivar participated in the movie The Orphanage (2007) and the telenovela Para volver a amar (2010). Regarding his participation in El Chavo del 8, Vivar mentioned it gave him \"nostalgia and good feelings [..] to have met so many people, traveled to so many places\". Referencing the show's broadcast, he said: \"It is a luxury that not everyone has the opportunity to experience\".\n[…]\nIn El Salvador, the same character (Don Ramón) served as an image for a civil campaign in 2010, which promoted Salvadorians not to pay extortion to gang members to guarantee their safety. In mid-2012, the character of Jaimito el Cartero was recognized with a bronze statue in the Mexican municipality of Tangamandapio, Michoacán, where the character was from in El Chavo del 8.\n[…]\nEl Chavo del Ocho at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/El_Chavo_del_Ocho",
        "situacao": "ok",
        "texto": "El Chavo del Ocho (no Brasil, Chaves), ou El Chavo, é um seriado de televisão de comédia mexicano escrito, dirigido e estrelado por Roberto Gómez Bolaños (conhecido como Chespirito) com produção da Televisa e exibido entre 26 de fevereiro de 1973 e 8 de janeiro de 1980, primeiramente no Canal 8 e depois no Canal 2. O roteiro veio de um esquete escrito por Bolaños, em que uma criança de oito anos d\n[…]\nApós colaborar com o programa Cómicos y canciones como escritor e ator ocasional, o mexicano Roberto Gómez Bolaños, mais conhecido como Chespirito, estreou no canal 8 (XEQ-TV) com a série El ciudadano Gómez produzida pela Televisión Independiente de México, no qual atuava junto com Rubén Aguirre (que anteriormente participava de El club del Shory).\n[…]\nEmbora este foi transmitido em 1968, Bernardo Garza Sada, proprietário do canal 8, decidiu adiar indefinidamente sua transmissão com o motivo de \"tê-lo preparado para uma competição futura com canal 2 (XEW-TV), emissora rival do Telesistema Mexicano\". El ciudadano Gómez retornou sua transmissão em 1970.\n[…]\nEm 2005, o SBT, que na época era o único canal que exibia Chaves no Brasil, decidiu não renovar o contrato de exibição da série com a Televisa. O motivo foi que a emissora mexicana passou a cobrar o triplo do valor de antes pela série. Com a não-renovação do SBT, a série iria deixar de ser exibida em todo o país.\n[…]\nO SBT inicialmente anunciou que iria tirar Chaves do ar no final de maio daquele ano (o contrato de exibição acabaria em junho); e substituí-lo pela novela mexicana Rebelde, que iria estrear no canal. Houve uma grande mobilização de fãs de Chaves em todo o Brasil, mandando e-mails ao SBT pedindo que não tirasse a série do ar e renovasse o contrato. Alguns outros canais da TV brasileira, entre eles a Globo, sondaram comprar a série.[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Silvio Santos",
      "descricao": "Apresentador e empresário brasileiro, fundador e dono do SBT."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O apresentador Silvio Santos, dono do SBT, nasceu no Rio de Janeiro com que nome de batismo?",
    "resposta": "Senor Abravanel",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Silvio_Santos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Silvio_Santos",
        "situacao": "ok",
        "texto": "Silvio Santos, nome artístico de Senor Abravanel (em hebraico:  סניור אברבנאל; Rio de Janeiro, 12 de dezembro de 1930 — São Paulo, 17 de agosto de 2024), foi um apresentador de televisão e empresário brasileiro que atuou também como produtor, radialista e cantor. É amplamente reconhecido como a maior referência na história da comunicação no Brasil, sendo ainda considerado o \"rei da televisão brasi\n[…]\nSenor Abravanel nasceu em 12 de dezembro de 1930, na Travessa Bemtevi, no bairro da Lapa, na região central da cidade do Rio de Janeiro, então capital do Brasil e sede do Distrito Federal. Filho primogênito de um casal de imigrantes vindo em 1924 para o Brasil: Alberto Abravanel (1897–1976), um imigrante judeu sefardita nascido na cidade de Tessalônica (hoje parte da Grécia), e Rebecca Caro (1907–1989) também judia de origem sefardita nascida na cidade de Esmirna (hoje parte da Turquia).\n[…]\nA mãe de Senor é quem o chamava de \"Silvio\", porque era mais fácil de decorar. O sobrenome artístico surgiu quando foi participar do programa de calouros comandado pelo apresentador Jorge Curi e o produtor Mário Ramos, tendo dito momentos antes de entrar no ar: \"que todos os santos me ajudem\".\n[…]\nSilvio é descendente direto, na linhagem paterna, de Isaac Abravanel, um estadista judeu português, filósofo, comentador da Bíblia e financista. O nome Senor vem de seu avô Señor Abram Abravanel, que faleceu em 1933.\n[…]\nEm 1994, Silvio lançou o álbum Silvio Santos pela SBT Music, apresentando regravações de sucessos anteriores e novas composições.\n[…]\nEm 2022, a plataforma Star+ lançou a série O Rei da TV, contando a trajetória de Silvio Santos, porém a produção foi criticada pelas filhas do apresentador, que alegaram que histórias fantasiosas foram incluídas, como, por exemplo, uma suposta traição de Silvio a Íris Abravanel. Silvio e Cintia Abravanel disseram que o próprio pai também reprovou a série."
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "La Casa de Papel",
      "descricao": "Série espanhola sobre um bando que, liderado pelo Professor, assalta a Casa da Moeda da Espanha."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em La Casa de Papel, os assaltantes recrutados pelo Professor usam como codinomes nomes de quê?",
    "resposta": "Cidades",
    "fonte": [
      "https://en.wikipedia.org/wiki/Money_Heist"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Money_Heist",
        "situacao": "ok",
        "texto": "Money Heist (Spanish: La casa de papel, [la ˈkasa ðe paˈpel], lit. 'The House of Paper') is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain, told from the perspective of one of the robbers, Tokyo (Úrsula Corberó).\n[…]\nIn April 2018, Netflix renewed the series with a significantly increased budget for 16 new episodes total. Part 3, with eight episodes, was released on 19 July 2019. Part 4, also with eight episodes, was released on 3 April 2020. A documentary involving the producers and the cast premiered on Netflix the same day, titled Money Heist: The Phenomenon (Spanish: La casa de papel: El Fenómeno).\n[…]\nPart 4 concludes with Lisbon rejoining the gang inside the bank, and with Sierra finding the Professor's hideout, then holding him at gunpoint.\n[…]\nNetflix dubbed the series and renamed it from La casa de papel to Money Heist for distribution in the English-speaking world, releasing the first part on 20 December 2017 without any promotion. The second part was made available for streaming on 6 April 2018. Pina assessed the viewer experience on Antena 3 versus Netflix as \"very different\", although the essence of the series remained the same.\n[…]\nIn November 2020, Netflix announced that it would create a South Korean adaptation of the show. The 12-part production, titled Money Heist: Korea - Joint Economic Area, would be a collaboration between BH Entertainment and Contents Zium, with Kim Hong-sun set to direct.\n[…]\nOn 29 April 2022, Netflix revealed that Money Heist: Korea – Joint Economic Area: Part 1 would be released on 24 June 2022 and Part 2 would be released on 9 December 2022.\n[…]\nMoney Heist on Netflix\n[…]\nMoney Heist at IMDb\n[…]\nMoney Heist at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/La_casa_de_papel",
        "situacao": "ok",
        "texto": "La Casa de Papel é uma série de televisão de drama policial espanhola criada por Álex Pina. A trama traça dois assaltos muito preparados liderados por um homem conhecido como O Professor (Álvaro Morte), na Casa da Moeda Real da Espanha e outro no Banco Central da Espanha. A série foi inicialmente planejada como uma minissérie de 15 episódios dividida em duas partes, a primeira com nove episódios e\n[…]\nA narrativa da série gira em torno de um assalto de vários dias preparado contra a Casa da Moeda Real, localizada na cidade de Madrid, na Espanha. Um homem misterioso, conhecido como \"O Professor\", tinha por objetivo realizar o maior assalto da história. Para executar esse plano ambicioso, recrutou uma equipe formada por  oito pessoas com habilidades específicas em suas áreas de atuação, e que por suas histórias pessoais, não teriam nada a perder.\n[…]\nApós salvar uma assaltante de um roubo ao banco de ser presa, um homem conhecido como \"O Professor\" lhe propõe um assalto incomparável. Assim que reúne uma equipe de oito pessoas, o Professor instruí os assaltantes a roubarem a Casa da Moeda da Espanha, localizada na cidade de Madrid na Espanha. Os oito ladrões têm o nome código de distintas e aleatórias cidades ao redor do mundo: Tóquio, Moscou, Berlim, Nairóbi, Rio, Denver, Helsinque e Oslo.\n[…]\nJunto com ex-colegas do Vis a vis, eles desenvolveram La casa de papel como um projeto para tentar coisas novas sem interferência externa. Pina estava firme em fazer uma série limitada.\n[…]\nOs codinomes dos ladrões baseados nas cidades, que o jornal espanhol ABC comparou aos codinomes baseados nas cores no filme de roubo de Quentin Tarantino, Reservoir Dogs, de 1992, foram escolhidos aleatoriamente na primeira parte, embora lugares com alta audiência também foi levada em consideração para os nomes de código dos novos ladrões na parte 3.\n[…]\nLa casa de papel no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Roque Santeiro",
      "descricao": "Telenovela da Rede Globo escrita por Dias Gomes e Aguinaldo Silva, exibida em 1985."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A primeira versão da novela Roque Santeiro, gravada em 1975, não chegou a ir ao ar. Por quê?",
    "resposta": "Foi proibida pela censura",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Roque_Santeiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Roque_Santeiro",
        "situacao": "ok",
        "texto": "Roque Santeiro é uma telenovela brasileira produzida e exibida pela TV Globo de 24 de junho de 1985 a 21 de fevereiro de 1986, em 209 capítulos. Substituiu Corpo a Corpo e foi substituída por Selva de Pedra, sendo a 34.ª \"novela das oito\" exibida pela emissora.\n[…]\nDias Gomes se inspirou na peça teatral de sua autoria, O Berço do Herói, que já havia sido censurada e proibida em 1965, para escrever Roque Santeiro. A telenovela seria exibida a partir do dia 27 de agosto de 1975, pela TV Globo, substituindo Escalada, novela de Lauro César Muniz.\n[…]\nTrinta capítulos foram gravados e chamadas anunciavam o programa, mas na data da estreia a emissora recebeu um ofício do Departamento de Ordem Política e Social do governo federal proibindo pela primeira vez a exibição de uma telenovela no Brasil.\n[…]\nEm outubro de 1985, após uma crítica do autor Dias Gomes sobre a nova censura, o Ministro da Justiça Fernando Lyra, ao qual à DCDP era subordinada proibiu quaisquer cortes na trama e afirmou que o órgão deveria funcionar como caráter classificatório, devendo tramas problemáticas ser trocadas de horário e não censuradas. Para não criar mais conflitos com o Ministério, o chefe da DCDP, Coriolano de Loyola Cabral Fagundes, passou a liberar todo o conteúdo da novela.\n[…]\nFatigado com a TV e seu ritmo acelerado de produção, o autor Dias Gomes convocou Aguinaldo Silva para auxiliá-lo e ser coautor da novela. Do total de 209 capítulos de Roque Santeiro, Dias Gomes compôs 99: os 51 iniciais (que já estavam escritos anteriormente da primeira versão, de 1975) e os 48 últimos. Aguinaldo Silva refez os 51 capítulos iniciais, que passaram por ajustes pontuais, e escreveu o miolo, com 110 capítulos.\n[…]\nRoque Santeiro no Memória Globo"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "TV Tupi",
      "descricao": "Rede de televisão brasileira de Assis Chateaubriand, inaugurada em São Paulo em 1950 e extinta em 1980."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1980, a TV Tupi, pioneira da televisão brasileira, saiu do ar. O que provocou o fim da emissora?",
    "resposta": "O governo cassou suas concessões",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rede_Tupi",
      "https://en.wikipedia.org/wiki/Rede_Tupi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rede_Tupi",
        "situacao": "ok",
        "texto": "Rede Tupi foi uma rede de televisão comercial brasileira de propriedade dos Diários Associados. Sua matriz e geradora, a TV Tupi de São Paulo, inaugurada em 18 de setembro de 1950 pelo jornalista Assis Chateaubriand, foi a primeira estação de televisão do Brasil, seguida pela TV Tupi do Rio de Janeiro, em janeiro de 1951.\n[…]\nGradativamente combalida pelos problemas financeiros, a Rede Tupi teve cassadas pelo governo brasileiro as concessões de sete estações próprias, inclusive as de São Paulo e do Rio, em julho de 1980. Os canais peremptos foram distribuídos a novos proprietários e serviram para a formação do SBT e da Rede Manchete.\n[…]\nEm 16 de julho, após diferentes alternativas apresentadas ao governo brasileiro para sanar a crise da Rede Tupi terem sido descartadas, o ministro da Comunicação Social Said Farhat anunciou que o presidente João Figueiredo, em acatamento à sugestão de seus ministros, decidiu decretar peremptas as sete concessões que haviam vencido, inclusive as da TV Tupi de São Paulo e do Rio de Janeiro, em função dos problemas administrativos e das dívidas acumuladas ao longo dos anos, determinando que Departamento Nacional de Telecomunicações (Dentel) realizasse a interrupção de seus sinais.\n[…]\nConsiderando o período entre as primeiras ligações em rede de São Paulo ao Rio de Janeiro, passando pelo interior paulista e outras capitais, e o encerramento da Rede Tupi, 34 estações integraram a rede, sendo dezesseis próprias, implantadas pelos Diários Associados, incluindo as geradoras paulistana e carioca, e dezoito afiliadas. Algumas das próprias deixaram de ser cassadas pelo governo brasileiro por não estarem sob o controle de fato dos Associados, e sim de parentes de condôminos.\n[…]\nAcervo de filmes e documentos da Rede Tupi no Banco de Conteúdos Culturais da Cinemateca Brasileira"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rede_Tupi",
        "situacao": "ok",
        "texto": "Rede Tupi (Portuguese pronunciation: [ˈʁedʒi tuˈpi]; in English, Tupi Network) was a Brazilian commercial terrestrial television network. Its flagship station, located in the city of São Paulo, was the first TV station to operate in the country, being inaugurated on 18 September 1950 by journalist Assis Chateaubriand. It was owned by Diários Associados, one of the largest media conglomerates of th\n[…]\nRede Tupi was ordered by the federal government of Brazil (military dictatorship at the time) to cease its operations. This happened from the 16th to the 18th, in July 1980, when its two stations in São Paulo (Tupi Channel 4) and Rio de Janeiro (Tupi Channel 6) shut down, together with its 7 other stations nationwide. The Department of National Telecommunications did not approve the planned extension of Rede Tupi's television licenses.\n[…]\nAfter the closure of Rede Tupi, the federal government passed the station's assets to businessmen. Bidding was opened on July 23, 1980 and the Grupo Abril (which would later operate MTV Brasil), the Silvio Santos Group (SBT), the Bloch (Rede Manchete), and other smaller companies entered the race.\n[…]\nAfter winning the compensation, Diários Associados obtained the concession of channel 9 in Recife and had negotiations for the purchase of Rede Manchete.\n[…]\nRede Tupi had a total of fifteen owned-and-operated stations during its 30 years of existence, and sold TV Coroados in 1973 and TV Paraná in 1974 to other owners, leaving it with thirteen stations. On July 16, 1980, the Federal Government revoked seven of these concessions and the following year, through public competition, transferred three of them to the Silvio Santos Group (which created SBT) and four to the Bloch Group (which created Rede Manchete, succeeded by the current RedeTV!).\n[…]\nRCTV - A Venezuelan broadcasting company that was forcefully closed down by the government.\n[…]\nRede Manchete\n[…]\nRede TV!"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Breaking Bad",
      "descricao": "Série americana criada por Vince Gilligan, sobre um professor de química que passa a produzir metanfetamina."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Breaking Bad, que notícia leva o professor de química Walter White a começar a fabricar drogas?",
    "resposta": "Diagnóstico de câncer de pulmão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Breaking_Bad",
      "https://en.wikipedia.org/wiki/Walter_White_(Breaking_Bad)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
        "situacao": "ok",
        "texto": "Breaking Bad is an American neo-Western crime drama television series created by Vince Gilligan for AMC. Set and filmed in Albuquerque, New Mexico, the series follows Walter White (Bryan Cranston), an overqualified high school chemistry teacher who, after being diagnosed with stage-three lung cancer, begins producing and selling methamphetamine with former student Jesse Pinkman (Aaron Paul) to sec\n[…]\nBreaking Bad follows Walter White, a financially struggling high school chemistry teacher and part-time car wash employee from Albuquerque, New Mexico, who enters the local methamphetamine trade after being diagnosed with stage-three lung cancer. Seeking to secure his family's financial future, Walter begins producing methamphetamine with his former student Jesse Pinkman in a rolling meth lab.\n[…]\nUltimately, Gilligan chose to end Breaking Bad with Walter's death, occurring in-story two years after he had first been diagnosed with cancer and given two years to live. Gilligan said by the end of the series, \"it feels as if we should adhere to our promise that we explicitly made to our audience\" from the first episode.\n[…]\nWalter White is diagnosed with inoperable lung cancer after passing out in a car wash. Realizing he doesn't have enough money to pay for treatment, and after going on a drug bust with his brother-in-law DEA agent, Hank, Walt resorts to cooking crystal meth. He decides to team up with his former student, Jesse. Jesse obtains an R.V. to cook in from his friend, Combo, while Walt devises a revolutionary formula using unregulated chemicals, creating a highly pure product tinted blue.\n[…]\nThey offer [Walter White] everything he needs. At the end of that hour he says, \"Thank you, no,\" and he goes back to Jesse Pinkman and says, \"Let's cook.\" And that was where the character truly got interesting for me. This guy's got some serious pride issues.\n[…]\nBreaking Bad at Emmys.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Walter_White_(Breaking_Bad)",
        "situacao": "ok",
        "texto": "Walter Hartwell White, also known by his alias Heisenberg, is a fictional character and the protagonist of the American crime drama television series Breaking Bad. He is portrayed by Bryan Cranston.\n[…]\nWalter is a skilled chemist who co-founded a technology firm before he accepted a buy-out from his partners. While his partners became wealthy, Walter became a high school chemistry teacher in Albuquerque, New Mexico, barely making ends meet with his family: his wife Skyler (Anna Gunn) and their son Walter Jr. (RJ Mitte). At the start of the series, the day after his 50th birthday, he is diagnosed with Stage III lung cancer.\n[…]\nWalter eventually tells his family about his cancer diagnosis, and they urge him to undergo expensive chemotherapy. He initially does not want to go through the treatment, fearing that his family will remember him as a burden and a helpless invalid, much as he remembers his own father. Later he reluctantly agrees to undergo treatment but refuses Gretchen and Elliott's offer to pay for it, choosing to re-enter the drug trade with Jesse.\n[…]\nHank, who had been searching for Jesse, spots his car at the house and kills Tuco in a gunfight. Walter takes off all his clothes in a grocery store in order to explain his disappearance by claiming that he had gone into a fugue state as a result of his cancer medication and simply wandered off.\n[…]\nOver time Walter developed a cult following, spawning fan websites like \"Heisenberg Labs\", \"Walt's Wardrobe\", and \"Save Walter White\", which is an exact replica of the website Walter's son creates in the series to raise money to pay for his father's cancer treatments.\n[…]\nVICE – The Real Walter White\n[…]\nWalter White at AMC.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Breaking_Bad",
        "situacao": "ok",
        "texto": "Breaking Bad é uma série de televisão americana criada e produzida por Vince Gilligan. Ela retrata a vida do químico Walter Hartwell White, um Professor brilhante frustrado em dar aulas para adolescentes do ensino médio enquanto lida com um filho sofrendo de paralisia cerebral, Skyler White, Sua esposa grávida e dívidas intermináveis.\n[…]\nWhite, então, é diagnosticado com um câncer no pulmão — o que o leva a sofrer um colapso emocional e abraçar uma vida de crimes para pagar suas dívidas hospitalares e dar uma boa vida aos seus filhos. Walter resolve produzir metanfetamina de alta pureza com seu ex-aluno, Jesse Pinkman.\n[…]\nDavid Costabile como Gale Boetticher: Um químico contratado por Gus Fring para trabalhar ao lado de Walter.\n[…]\nA primeira temporada foi originalmente destinada a ter nove episódios, mas devido a greve em 2007-2008 do Writers Guild of America apenas sete episódios foram filmados. A primeira temporada estreou em 20 de Janeiro de 2008, e foi concluída em 9 de março de 2008. Walter White (Bryan Cranston) é um professor de química do ensino médio, que complementa sua renda familiar trabalhando meio período em um lava-jato, e é diagnosticado com um avançado e inoperável câncer de pulmão.\n[…]\n(RJ Mitte), e para pagar seu tratamento caro contra o câncer.\n[…]\nSkyler tira as crianças da casa e os põe para morar na casa dos tios, Hank e Marie, alegando que sua casa não é segura para eles. Walter diz que fizeram tudo pela família, onde Skyler rebate, dizendo que seus filhos não morarão numa casa onde machucar, assassinar pessoas e traficar drogas é tido como algo normal. Walter a confronta violentamente, e ela diz que espera que ele morra de câncer o mais rápido possível para ficar livre daquela vida.\n[…]\nBreaking Bad no IMDb\n[…]\n«Breaking Bad» (em inglês). no Metacritic\n[…]\n«Breaking Bad» (em inglês). no Rotten Tomatoes",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "O Incrível Hulk (série de 1977)",
      "descricao": "Série americana exibida de 1977 a 1982, com Bill Bixby como o cientista David Banner e Lou Ferrigno como o Hulk."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na série dos anos setenta O Incrível Hulk, o que fazia o cientista David Banner se transformar no monstro verde?",
    "resposta": "A raiva",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Incredible_Hulk_(1977_TV_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Incredible_Hulk_(1977_TV_series)",
        "situacao": "ok",
        "texto": "The Incredible Hulk is an American television series based on the Marvel Comics character the Hulk. The series aired on the CBS television network and starred Bill Bixby as Dr. David Banner, Lou Ferrigno as the Hulk, and Jack Colvin as Jack McGee.\n[…]\nIn the series, Dr. David Banner, a widowed physician and scientist who is presumed dead, travels across the United States under assumed names and finds himself in positions where he helps others in need despite his terrible secret: Following an accidental overdose of gamma radiation that altered his cells, in times of extreme anger or stress, he transforms into a huge, savage, incredibly strong green-skinned humanoid, who has been named the Hulk.\n[…]\nThe Return of the Incredible Hulk (1977), also shown overseas as a feature film; retitled Death in the Family for syndication.\n[…]\nThe Death of the Incredible Hulk (1990) – David Banner falls in love with an Eastern European spy (played by Elizabeth Gracen) and saves two kidnapped scientists. The film ends with the Hulk taking a fatal fall from an airplane, reverting to human form just before he dies.\n[…]\nPower Records (Peter Pan records) created an LP in 1978 entitled The Incredible Hulk: Hear Four Exciting All New Action Adventure Stories! – Black Chasm, Monster From The Deep, The Assassin & Blind Alley. In the stories he is referred to as \"David Banner\" and is also a name-changing drifter seeking a cure.\n[…]\nIn 1979, Ideal Toy Company released a board game called The Incredible Hulk – Smash–Up Action Game. Players must to try to create a lab in order to find a cure for \"Dr. David Banner\".\n[…]\nThe Incredible Hulk at IMDb\n[…]\nThe Incredible Hulk at IMDb (1977 TV film)\n[…]\nThe Incredible Hulk: Death in the Family at IMDb (1977 sequel)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Incredible_Hulk",
        "situacao": "ok",
        "texto": "The Incredible Hulk (no Brasil e em Portugal, O Incrível Hulk) é  uma telessérie norte-americana exibida de 1977 a 1982, baseada no personagem Hulk, da Marvel Comics. ‎O projeto foi desenvolvido por Kenneth Johnson, profissional já conhecido na época por produzir a série clássica O Homem de Seis Milhões de Dólares. A série foi ao ar na rede de televisão CBS e estrelou Bill Bixby como Dr. David Ban\n[…]\nNa série, o Dr. David Banner, um médico e cientista viúvo que é dado como morto, viaja pelos Estados Unidos sob nomes falsos e se vê em situações em que ajuda outras pessoas necessitadas, apesar de seu terrível segredo: após uma overdose acidental de radiação gama que alterou suas células, em momentos de extrema raiva ou estresse, ele se transforma em um humanoide enorme, selvagem e incrivelmente forte, de pele verde, que foi chamado de Hulk.\n[…]\nEm 1988, os direitos de filmagem foram comprados da MCA/Universal pela New World Television para uma série de filmes de TV para concluir o enredo da série. Os direitos de transmissão foram, por sua vez, transferidos para a rival NBC. A New World (que chegou a ser dona da Marvel) produziu três filmes para a televisão: The Incredible Hulk Returns (dirigido por Nicholas J. Corea), The Trial of the Incredible Hulk e The Death of the Incredible Hulk (ambos dirigidos por Bill Bixby).\n[…]\nDepois da morte da esposa, o Dr. David Bruce Banner procura um modo de liberar uma força desconhecida, que supostamente todos os humanos teriam, para protegerem seus entes queridos. Ele descobre que a radiação gama poderia lhe dar essa força e, para não ferir ninguém, ele a testa em si mesmo. David não sentiu nada diferente logo após o teste mas depois descobriu que ao se sentir raivoso ou pressionado, transformava-se num homem monstruoso, de pele verde, grande e musculoso.\n[…]\nBill Bixby .... Dr. David Banner\n[…]\nThe Incredible Hulk no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Lost",
      "descricao": "Série americana exibida de 2004 a 2010, sobre um grupo de pessoas presas numa ilha misteriosa do Pacífico."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na série Lost, que estreou em 2004, como os protagonistas vão parar numa ilha misteriosa do Pacífico?",
    "resposta": "Na queda de um avião",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lost_(TV_series)",
      "https://en.wikipedia.org/wiki/Oceanic_Flight_815"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lost_(TV_series)",
        "situacao": "ok",
        "texto": "Lost is an American science fiction adventure drama television series created by Jeffrey Lieber, J. J. Abrams, and Damon Lindelof that aired on ABC from September 22, 2004, to May 23, 2010, with a total of 121 episodes over six seasons. It contains elements of supernatural fiction and follows the survivors of Oceanic Airlines flight 815 (flying between Sydney and Los Angeles) after the plane crash\n[…]\nThe series debuted on September 22, 2004, becoming one of the biggest critical and commercial successes of the 2004 television season. Along with fellow new series Desperate Housewives and Grey's Anatomy, Lost helped to reverse the flagging fortunes of ABC, and its great success likely caused the network to ignore that the show almost immediately broke Lindelof and Abrams' promises to it regarding Lost's plots.\n[…]\nLost aired on the American Broadcasting Company (ABC) from September 22, 2004, to May 23, 2010. The pilot episode had 18.6 million viewers, easily winning its 9:00 pm timeslot, and giving ABC its strongest ratings since 2000, when Who Wants to Be a Millionaire? was initially aired—beaten only the following month by the premiere of Desperate Housewives. According to Variety, \"ABC sure could use a breakout drama success, as it hasn't had a real hit since The Practice.\n[…]\nAdam Horowitz and Edward Kitsis, former writers of Lost, created the fantasy series Once Upon a Time, which has also been compared to Lost. Even though their series started after Lost ended, they conceived it in 2004. Damon Lindelof was involved in the development of their series. Despite the comparisons and similarities to Lost, the writers intended the shows to be very different from each other. To them, Lost concerned itself with redemption, while Once Upon a Time is about hope.\n[…]\nCanadian movie theater chain Cineplex held screenings of Getting Lost in theaters on November 3 and 6, 2024.\n[…]\nLost at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Oceanic_Flight_815",
        "situacao": "ok",
        "texto": "Oceanic Airlines, and less frequently, Oceanic Airways, is the name of a fictional airline used in several films and television programs—typically works that feature plane crashes and other aviation disasters, with which a real airline would prefer not to be associated. Columnist Daryna Tobey compared its prevalence to that of 555 telephone numbers on television.\n[…]\nOceanic Airlines first appeared in the 1965 two-part episode \"The Ditching\" of the television series Flipper. It later appeared in the 1996 film Executive Decision, and footage of the Oceanic Airlines plane in that film was reused as stock footage for several works. Appearances since include the 1996 film Executive Decision, the 2004–2010 television series Lost, the 2011 video game Dead Island, and a number of others.\n[…]\nThe fictional airline typically appears in works that feature plane crashes and other aviation disasters, with which a real airline would prefer not to be associated. In the 2004–2010 television series Lost, Oceanic Airlines Flight 815 crashes on an island in the Pacific Ocean.\n[…]\nThe actual aircraft used for most of the film Executive Decision was a Boeing 747-269B with the aircraft registration number N707CK. It was scrapped in 2004 after service with Ocean Airlines as S2-ADT. The crash and ground scenes were filmed at Mojave Airport with a different aircraft, a retired Boeing 747-121.\n[…]\nNudd, Tim (18 November 2004). \"Oceanic's unfriendly skies\". Adweek. Archived from the original on 8 December 2018. Retrieved 12 April 2025."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lost_%28s%C3%A9rie_de_televis%C3%A3o%29",
        "situacao": "ok",
        "texto": "Lost (Perdidos, em Portugal) é  uma série de televisão norte-americana de drama, fantasia e ficção científica que seguiu a vida dos sobreviventes de um acidente aéreo numa misteriosa ilha tropical, após o avião que viajava de Sydney, Austrália para Los Angeles, Estados Unidos cair em algum lugar do Oceano Pacífico.\n[…]\nDas 324 pessoas a bordo, inicialmente havia 72 sobreviventes (71 pessoas e 1 cão) espalhados pelas três seções da queda do avião. Na abertura da temporada havia 14 personagens principais, fazendo com que Lost tenha o segundo maior elenco de uma série de televisão Americana, atrás somente de Desperate Housewives. Quanto maior o elenco, mais cara a produção, mas os escritores se beneficiam de uma maior flexibilidade nas decisões da história.\n[…]\nA história continua 44 dias depois da queda do avião. É revelada a existência da misteriosa Iniciativa Dharma e o seu benfeitor, Hanso Foundation. Vários personagens novos aparecem, incluindo os sobreviventes da cauda do avião Ana-Lucía Cortez, Bernard, Libby e Mr. Eko.\n[…]\nDentre centenas de candidatos escolhidos por Jacob, apenas cinco estão vivos após sua morte: Jack Shephard, James \"Sawyer\" Ford, Sayid Jarrah, Hugo \"Hurley\" Reyes e Katherine Austen (todos sobreviventes da queda do voo 815), cabendo a um deles, substituí-lo.\n[…]\nO coração da série é uma história complexa e crítica que desova inúmeras questões não resolvidas. Incentivada pelo elenco e escritores de Lost, que muitas vezes interagem on-line com os fãs, leitores e críticos de televisão tem tentado criar teorias generalizadas, numa tentativa de desvendar os mistérios. As teorias dizem sobretudo a respeito da natureza da ilha, a origem do \"monstro\" e dos \"Outros\", o significado dos números e as razões da queda do avião e a sobrevivência de alguns passageiros.\n[…]\n«Lost» (em inglês). no TV.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Regeneração (Doctor Who)",
      "descricao": "Recurso da série britânica Doctor Who pelo qual o Doutor ganha um novo corpo e rosto, permitindo a troca do ator principal."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Doctor Who, a regeneração, que troca o rosto do Doutor, foi criada nos anos sessenta para resolver que problema?",
    "resposta": "A saída do ator William Hartnell",
    "fonte": [
      "https://en.wikipedia.org/wiki/Regeneration_(Doctor_Who)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Regeneration_(Doctor_Who)",
        "situacao": "ok",
        "texto": "The Time Lords are a fictional ancient race of extraterrestrial people in the British science fiction television series Doctor Who. In-universe, they hail from the planet Gallifrey and are stated to have invented time travel technology. They have sworn an oath to not interfere in the universe; those who reject this and leave the planet to live in the universe are referred to as \"renegades\". One of\n[…]\nThe Doctor also encounters the Division during the events of \"Fugitive of the Judoon\" (2020) in which she and her Fugitive incarnation, who was a former Division operative, defeat a Time Lord operative named Gat. During the events of Doctor Who: Flux, the Thirteenth Doctor encounters Tecteun, a Time Lord who adopted the Timeless Child and pioneered regeneration in Time Lords.\n[…]\nEarly on in the series, the Doctor was identified as a human being; however, their home planet, which from the start of the series is explicitly established as not being Earth, was not named. Regeneration, out of universe, was introduced to replace First Doctor actor William Hartnell, who was falling into poor health.\n[…]\nThe Doctor's process of regeneration was also not initially specified, with the process being described as \"renewal\" and its origins unclear, not being clearly elaborated until the 1970s. Details of the Doctor's home were never specified, even when encountering another character implied to be of the same species, the Meddling Monk.\n[…]\nThe return to Gallifrey in 1978 serial The Invasion of Time was done due to producer Graham Williams wanting to see more of the environment established in The Deadly Assassin. This was also done due to the team being able to cheaply re-use costumes and set pieces from The Deadly Assassin. The serial sought to explore the idea that not all Gallifreyans were Time Lords, and wanted to take a deeper look at those who did not become Time Lords."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Senhores_do_Tempo",
        "situacao": "ok",
        "texto": "Os Senhores do Tempo (no original em inglês: Time Lords) são uma raça fictícia da série de ficção científica Doctor Who, da qual o protagonista, o Doutor, faz parte. Os Senhores do Tempo são assim chamados por seu domínio da tecnologia de viagem no tempo e sua percepção não-linear dele. Seu planeta natal é Gallifrey.\n[…]\nDurante a regeneração, o corpo de um(a) Senhor(a) do Tempo pode liberar explosões de luz ofuscante branca e/ou colorida, corrente elétrica, uma violenta carga de bioenergia (que destrói tudo a sua volta) ou ainda, ele pode simplesmente se transformar sem liberação de energia. Caso o Senhor do Tempo seja fatalmente ferido antes da regeneração se concluir, esta falhará e ele morrerá. O processo é doloroso e causa efeitos colaterais.\n[…]\nPor certo período de tempo após a regeneração, o corpo do Senhor do Tempo permanece com muitos lindos, o que possibilita, em caso de dano, a regeneração parcial de algum órgão ou membro. Além disso, implicações como amnésia, comportamento anormal, confusão mental e/ou inconsciência são comuns.\n[…]\nO Doutor jamais escolheu quando regenerar ou qual seria sua forma após o procedimento, tendo sido, até mesmo, obrigado a regenerar em favor da pena por quebrar a lei de não-interferência dos Senhores do Tempo.\n[…]\nO Décimo Primeiro Doutor[[1]] disse uma vez a um grupo de humanos em The Rebel Fresh [[2]] na Sexta temporada [[3]]: \"Todos nós fomos gelatinosos uma vez. Pequenos ovos de gelatina, sentados em gosma\", indicando que o povo dele começou como óvulos semelhantes aos mamíferos da Terra.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Os Simpsons",
      "descricao": "Série animada americana criada por Matt Groening, sobre uma família da cidade fictícia de Springfield."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo o criador Matt Groening, por que os personagens de Os Simpsons foram desenhados com a pele amarela?",
    "resposta": "Para chamar atenção no zapping",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Simpsons"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Simpsons",
        "situacao": "ok",
        "texto": "The Simpsons is an American animated sitcom created by Matt Groening and developed by Groening, James L. Brooks and Sam Simon for the Fox Broadcasting Company. It is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. Set in the fictional town of Springfield, in an unspecified location in the United States, it caricature\n[…]\nMatt Groening and James L. Brooks were executive producers when the series began, and both remain credited as executive producers. Sam Simon, described by former Simpsons director Brad Bird as \"the unsung hero\" of the show, served as creative supervisor for the first four seasons. He was constantly at odds with Groening, Brooks and the show's production company Gracie Films and left in 1993.\n[…]\nThis development led American producers to a 1990s boom in new, animated prime-time shows for adults, such as Beavis and Butt-Head, South Park, Family Guy, King of the Hill, Futurama (which was created by Matt Groening), and The Critic (which was also produced by Gracie Films). For Family Guy creator Seth MacFarlane, \"The Simpsons created an audience for prime-time animation that had not been there for many, many years ... As far as I'm concerned, they basically re-invented the wheel.\n[…]\nDefenders of the character responded that the show is built on comical stereotypes, with creator Matt Groening saying, \"that's the nature of cartooning.\" He added that he was \"proud of what we do on the show\", and \"it's a time in our culture where people love to pretend they're offended\".\n[…]\nThe Simpsons is the first television series still in production to receive this recognition. The stamps, designed by Matt Groening, were made available for purchase on May 7, 2009. Approximately one billion were printed, but only 318 million were sold, costing the Postal Service $1.2 million.\n[…]\nThe Simpsons on Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Simpsons",
        "situacao": "ok",
        "texto": "The Simpsons (bra/prt: Os Simpsons) é uma sitcom animada norte-americana criada por Matt Groening e desenvolvida por James L. Brooks e Sam Simon para a Fox Broadcasting Company. A série é uma paródia satírica do estilo de vida da classe média dos Estados Unidos, personificada pela família Simpson, composta por Homer, Marge, Bart, Lisa e Maggie.\n[…]\nSuspeita-se de uma conexão subcontratada na Coreia do Norte, a SEK Studio, o que não foi confirmado. Os artistas na animação dos estúdios USAnimation e Film Roman, produziram storyboards, desenharam, projetaram novos personagens, cenários e adereços. Os estúdios no exterior, em seguida, chamaram especialistas de tinta e pintura, para renderizarem a animação antes que ela seja enviada de volta para os Estados Unidos para ser entregue a Fox, três a quatro meses mais tarde.\n[…]\nO programa inclui um conjunto de personagens peculiares: amigos de trabalho, professores, amigos, familiares, parentes, moradores e celebridades locais. Os criadores originalmente destinaram muitos desses personagens para preencheram funções na cidade. Alguns deles ganharam papéis que se expandiram e, posteriormente, atuaram em seus próprios episódios. De acordo com Matt Groening, o show adotou o conceito de um grande elenco de apoio de uma sitcom.\n[…]\nTucker também descreveu a série como \"um fenômeno cultural, um desenho animado no horário nobre que agrada a toda a família\".\n[…]\nO livro foi um sucesso e, por isso, o criador de The Simpsons, Matt Groening e seus companheiros Bill Morrison, Mike Rote, Steve Vance e Cindy Vance criaram a editora Bongo Comics. Edições de Simpsons Comics, Bart Simpson's Treehouse of Horror e Bart Simpson foram recolhidas e reimpressas em brochuras comerciais nos Estados Unidos pela HarperCollins.\n[…]\n«Os Simpsons». na FoxComedy Portugal\n[…]\nThe Simpsons no IMDb\n[…]\n«Os Simpsons» (em inglês). no TV.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Downton Abbey",
      "descricao": "Série britânica criada por Julian Fellowes sobre a aristocrática família Crawley e seus criados, no início do século vinte."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Logo no início de Downton Abbey, que tragédia real de 1912 mata os herdeiros da família Crawley?",
    "resposta": "O naufrágio do Titanic",
    "fonte": [
      "https://en.wikipedia.org/wiki/Downton_Abbey"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Downton_Abbey",
        "situacao": "ok",
        "texto": "Downton Abbey is a British historical drama television series set in the early 20th century, created and co-written by Julian Fellowes. It first aired in the United Kingdom on ITV on 26 September 2010 and in the United States on PBS, which supported its production as part of its Masterpiece Classic anthology, on 9 January 2011. The show ran for fifty-two episodes across six series, including five \n[…]\nSet on the fictional Yorkshire country estate of Downton Abbey between 16 April 1912 and New Year's Eve 1925, the series depicts the lives of the aristocratic Crawley family and their domestic servants in the post-Edwardian era, navigating their lives amidst the British social hierarchy.\n[…]\nAs the eldest daughter, Lady Mary Crawley had agreed to marry her second cousin Patrick, the son of the then-heir presumptive James Crawley. The series begins the day after the sinking of RMS Titanic on 15 April 1912. The first episode starts as news reaches Downton Abbey that both James and Patrick have perished in the sinking of the ocean liner.\n[…]\nThe Equality (Titles) Bill was an unsuccessful piece of legislation introduced in the UK Parliament in 2013 that would have allowed equal succession of female heirs to hereditary titles and peerages. It was nicknamed the \"Downton Abbey law\" because it addressed the same issue that affects Lady Mary Crawley, who cannot inherit the estate because it must pass to a male heir.\n[…]\nJulian Fellowes's The Gilded Age, which debuted on HBO in 2022, portrays New York in the 1880s and how its old New York society coped with the influx of newly wealthy families. While a separate series, Fellowes hinted in interviews that some members of Downton's Crawley family, as well as Martha Levinson, Cora's mother, could appear in the new show.\n[…]\nDownton Abbey at IMDb\n[…]\nDownton Abbey (Archived 30 December 2016 at the Wayback Machine) on PBS Masterpiece\n[…]\nDownton Abbey at epguides.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Downton_Abbey",
        "situacao": "ok",
        "texto": "Downton Abbey é uma série de televisão britânica, do gênero drama histórico, ambientada no início do século XX, criada e co-escrita por Julian Fellowes. Produzida pela companhia Carnival Films, a série estreou em 20 de setembro de 2010 na rede ITV no Reino Unido, e na PBS nos Estados Unidos. Esta última apoiou a produção da série a partir de 9 de janeiro de 2011, como parte de sua antologia Master\n[…]\nO enredo gira em torno da família fictícia Crawley e seus criados no dia-a-dia na grande mansão Downton Abbey. A família segue a jurisdição que governa a elite titulada, a qual concede títulos e propriedades exclusivamente aos herdeiros homens. Como história de fundo, o protagonista, Robert Crawley, Conde de Grantham, havia resolvido as dificuldades financeiras de seu pai casando-se com Cora Levinson, uma herdeira americana.\n[…]\nSeu considerável dote está agora contratualmente incorporado ao compromisso jurídico perpétuo; no entanto, Robert e Cora têm três filhas e nenhum filho. Como filha mais velha, Lady Mary Crawley concorda em casar-se com seu primo em segundo grau, Patrick, filho do então herdeiro presuntivo, James Crawley. A série começa no dia seguinte ao naufrágio do RMS Titanic, em 15 de abril de 1912. A notícia chega a Downton Abbey de que James e Patrick morreram no naufrágio do transatlântico.\n[…]\nAs aventuras vividas pela família Crawley e sua equipe de criados em Downton, continuam nos filmes Downton Abbey, de 2019, Downton Abbey: A New Era, de 2022, e Downton Abbey: The Grand Finale, lançado em 2025.\n[…]\nUm segundo livro também escrito por Jessica Fellowes e publicado pela HarperCollins, The Chronicles of Downton Abbey, foi lançado em 13 de setembro de 2012. É um guia para os personagens do programa durante o início da terceira série.\n[…]\nDownton Abbey no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Caverna do Dragão",
      "descricao": "Desenho animado americano de 1983, baseado em Dungeons & Dragons, sobre jovens presos num mundo de fantasia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No desenho Caverna do Dragão, os jovens heróis são levados para outro mundo durante um passeio em quê?",
    "resposta": "Numa montanha-russa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dungeons_%26_Dragons_(TV_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dungeons_%26_Dragons_(TV_series)",
        "situacao": "ok",
        "texto": "Dungeons & Dragons is an American fantasy animated television series based on TSR's Dungeons & Dragons role-playing game. It is a co-production of Marvel Productions and TSR, with animation services provided by Japanese studio Toei Animation. It ran on CBS from 1983 through 1985 for three seasons, for a total of twenty-seven episodes.\n[…]\nSidney Miller – Dungeon Master\n[…]\nAn Advanced Dungeons & Dragons toy line was produced by LJN in 1983, including original characters such as Warduke, Strongheart the Paladin, and the evil Wizard Kelek, who would later appear in campaigns for the Basic Set of the roleplaying game. None of the main characters from the TV series are in the toy line, but Warduke, Strongheart, and Kelek each appear in one episode of the series. Only in Spain and Portugal were PVC figures of the main characters produced.\n[…]\nThe Brazilian company Iron Studios released in 2019 an entire set of polystone collectible statues for most of the Dungeons & Dragons cartoon characters, using a 1/10 scale and forming a full diorama. The same year, PCS Collectibles released two versions of Venger in 1:4 scale, both fully sculpted and hand painted polystone statues. In 2022, Hasbro launched the Cartoon Classics action figurine series based on Dungeons & Dragons.\n[…]\nThe 2023 film Dungeons & Dragons: Honor Among Thieves featured adult versions of Hank, Bobby, Sheila, Diana, Eric and Presto in live-action cameos with Edgar Abram as Hank, Luke Bennett as Bobby, Emer McDaid as Sheila, Moe Sasegbon as Diana, Trevor Kaneswaran as Eric, and Seamus O'Hara as Presto. They are seen competing in a special tournament in Neverwinter and have made it to a cage in the middle of a shifting labyrinth.\n[…]\nD&D Animated Series on the Official Dungeons & Dragons YouTube channel\n[…]\nDungeons & Dragons at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dungeons_%26_Dragons_%28s%C3%A9rie_animada%29",
        "situacao": "ok",
        "texto": "Dungeons & Dragons (Brasil: Caverna do Dragão ) é uma série de animação baseada no jogo de RPG homônimo da TSR, coproduzida pela Marvel Productions, TSR e Toei Animation. A série possui 27 episódios divididos em três temporadas, transmitidas originalmente entre os anos de 1983 e 1985 pela rede de televisão estadunidense CBS. A animação da série ficou a cargo da empresa japonesa Toei Animation. A s\n[…]\nA série mostra uma história de seis crianças americanas dos anos 1980 que tentam voltar a seu mundo após chegarem ao Reino de Dungeons & Dragons em um passeio de montanha russa. O desenho possui várias referências ao universo do jogo de role-playing game Dungeons & Dragons.\n[…]\nA abertura do primeiro ano da série mostra um grupo de seis jovens em um parque de diversões embarcando em uma montanha russa chamada Dungeons & Dragons.\n[…]\nContudo, durante o passeio, um portal se abre e transporta as crianças para outro mundo, chamado simplesmente de \"Reino\", no qual o grupo já aparece trajando outras roupas e recebendo logo em seguida armas mágicas — as armas do poder — de alguém que se apresenta como o Mestre dos Magos (Dungeon Master, no original, termo também presente nos jogos de role-playing game que deram origem à série).\n[…]\nOs seis garotos que brincavam no carrinho de montanha-russa quando foram transportados para o Reino são os protagonistas da série.\n[…]\nDungeons & Dragons 3.5 – Animated Series Handbook: produzido pela Wizards of the Coast e publicado no box de DVD lançado pela Ink & Paint em 2006, o livro de 32 páginas é finalmente uma publicação oficial de D&D sobre Caverna do Dragão. Traz fichas de cada protagonista e uma história para ser jogada, ambientada cronologicamente antes do episódio O Cemitério dos Dragões.\n[…]\nSérgio Peixoto (2011). «Dungeons and Dragons ou Caverna do Dragão». Revista Clube dos Heróis (10). São Paulo, Brasil: Editora Minuano. pp. 3–26",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Bryan Cranston",
      "descricao": "Ator americano conhecido como Walter White em Breaking Bad e Hal em Malcolm."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que ator viveu tanto o pai Hal, na comédia Malcolm, quanto o professor Walter White, em Breaking Bad?",
    "resposta": "Bryan Cranston",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bryan_Cranston"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bryan_Cranston",
        "situacao": "ok",
        "texto": "Bryan Lee Cranston (born March 7, 1956) is an American actor. He established himself as a leading actor in both comic and dramatic works on stage and screen. His accolades include seven Primetime Emmy Awards, two Tony Awards, a Laurence Olivier Award, and a Golden Globe Award, as well as nominations for an Academy Award and a British Academy Film Award.\n[…]\nCranston first gained prominence playing Hal in the Fox sitcom Malcolm in the Middle (2000–2006) for which he was nominated for the Primetime Emmy Award for Outstanding Supporting Actor in a Comedy Series. He gained stardom for his dramatic leading role playing Walter White in the AMC crime drama series Breaking Bad (2008–2013) for which he won the Outstanding Lead Actor in a Drama Series four times (2008, 2009, 2010, and 2014).\n[…]\nBryan Lee Cranston was born in Hollywood, Los Angeles, on March 7, 1956, the second of three children born to Annalisa \"Peggy\" (née Sell), a radio actress, and Joseph Cranston, an actor and former semi-professional boxer. His father was of half Irish, quarter Austrian Jewish, and quarter German descent, while his mother was the daughter of German immigrants. Bryan's paternal great-grandfather, James Daniel Cranston, was from Montreal. Bryan has an older brother, Kyle, and a younger sister, Amy.\n[…]\nIn 2023, Cranston had another appearance as Walter White, alongside Aaron Paul's Jesse, and Raymond Cruz as Tuco Salamanca in a Super Bowl LVII commercial for PopCorners. He has stated this could be his final appearance as the character.\n[…]\nBryan Cranston on X\n[…]\nBryan Cranston on Box Office Mojo\n[…]\nBryan Cranston at IMDb\n[…]\nBryan Cranston at the TCM Movie Database (archived)\n[…]\nBryan Cranston at Rotten Tomatoes\n[…]\nBryan Cranston discusses Breaking Bad at AMCtv.com Archived January 19, 2016, at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bryan_Cranston",
        "situacao": "ok",
        "texto": "Bryan Lee Cranston (Los Angeles, 7 de março de 1956) é um ator, dublador, roteirista, diretor e produtor americano, conhecido por interpretar Walter White na série dramática da AMC Breaking Bad, pela qual ele venceu quatro Emmys do Primetime de Melhor Ator em Série Dramática, Hal na série cômica da Fox Malcolm in the Middle e Dr. Tim Whatley na série da NBC Seinfield.\n[…]\nBryan nasceu e foi criado em Canoga Park, Califórnia, filho de Audrey Peggy Sell, uma atriz de rádio, e Joseph Louis \"Joe\" Cranston, ator e produtor de Hollywood. Ele é o segundo de seus três filhos. De ascendência austríaca, inglesa e irlandesa por parte de seu pai, enquanto seus avós maternos eram imigrantes alemães.\n[…]\nO pai de Bryan abandonou a família quando ele tinha 11 anos por não conseguir trabalhos suficientes para a sustentar. Onze anos mais tarde, Bryan e o seu irmão decidiram procurá-lo e conseguiram criar uma relação com ele até à sua morte em 2014. O ator diz que baseou a personagem de Walter White no seu pai, que tinha uma postura caída, \"como se tivesse que carregar o peso do mundo nas costas\".\n[…]\nEm 2000 estreou a série Malcolm in the Middle onde Bryan interpreta o papel de Hal, o pai do personagem principal. Ele permaneceu na série até o seu fim em 2006, e também dirigiu vários episódios da mesma. O seu desempenho na série rendeu três indicações ao Emmy.\n[…]\nEntre 2008 e 2013, Bryan protagonizou a série Breaking Bad no canal AMC. Criada por Vince Gilligan, a série segue a história de Walter White, um professor de química a quem é diagnosticado um câncer de pulmão terminal. Walter forma uma parceria com o seu antigo estudante, Jesse Pinkman para produzir e vender metanfetaminas e garantir o bem-estar da família de Walter depois de este morrer.\n[…]\nBryan Cranston no IMDb\n[…]\nBryan Cranston no AdoroCinema",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Marcelo Gastaldi",
      "descricao": "Dublador e diretor de dublagem brasileiro, voz clássica de Chaves e Chapolin."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que dublador brasileiro deu voz tanto ao Chaves quanto ao Chapolin Colorado?",
    "resposta": "Marcelo Gastaldi",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Marcelo_Gastaldi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Marcelo_Gastaldi",
        "situacao": "ok",
        "texto": "Marcelo Gastaldi Júnior (São Paulo, 20 de outubro de 1944 – São Paulo, 3 de agosto de 1995) foi um ator, humorista, cantor, compositor, tradutor e dublador brasileiro, conhecido por ser a voz clássica de Chaves e Chapolin na dublagem brasileira, ambos interpretados por Roberto Gómez Bolaños, por ter integrado o grupo Os Iguais, e fundado a cooperativa de dublagem Maga, que funcionava nos estúdios \n[…]\nGastaldi trabalhou ativamente nos estúdios da Maga (cujo nome era a junção de suas iniciais), sendo responsável pela dublagem, direção e tradução dos filmes exibidos pela emissora de Sílvio Santos na época. Ele também foi um dos principais responsáveis pelo sucesso das séries de Chespirito no país, tendo além de dublado, traduzido, dirigido e adaptado canções e piadas para o Brasil,  além de ter escalado o elenco de dublagem original dos programas.\n[…]\nComo ator, participou de seriados dos anos 1960 e 1970, dentre eles Regina e o Dragão de Ouro. Trabalhou nas novelas Eu Amo Esse Homem, em 1964, da TV Paulista, Turbilhão, na RecordTV, Tchan, a Grande Sacada, na Rede Tupi, e Sombras do Passado, em 1983, produzida pelo SBT. Gastaldi ainda produziu e atuou em um seriado inspirado em Chaves junto com outros dubladores das séries, chamado Feroz e Mau-Mau, onde interpretava o personagem Mau-Mau.\n[…]\nApós sua morte, a família passou por necessidades e brigou por direitos autorais de suas dublagens, principalmente a do Chaves. Em 2011, o SBT foi condenado a indenizar os herdeiros de Gastaldi em R$ 150 mil por ter usado sua dublagem em Chaves e Chapolin durante anos sem pagar os direitos devidos.\n[…]\nMarcelo Gastaldi no IMDb"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Frasier",
      "descricao": "Sitcom americana exibida de 1993 a 2004, sobre o psiquiatra Frasier Crane, que vive em Seattle."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O psiquiatra Frasier Crane ganhou série própria em 1993, depois de aparecer em que sitcom passada num bar de Boston?",
    "resposta": "Cheers",
    "fonte": [
      "https://en.wikipedia.org/wiki/Frasier"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Frasier",
        "situacao": "ok",
        "texto": "Frasier () is an American television sitcom that was broadcast on NBC for eleven seasons from September 16, 1993, to May 13, 2004. The program was created and produced by David Angell, Peter Casey, and David Lee (as Grub Street Productions), in association with Grammnet Productions (1995–2004) and Paramount Television.\n[…]\nThe show was created as the third spin-off and a sequel to the sitcom Cheers. It continues the story of Frasier Crane (Kelsey Grammer), a psychiatrist who returns to his hometown, Seattle, as a radio show host. He reconnects with his father, Martin (John Mahoney), a retired police officer, and his younger brother, Niles (David Hyde Pierce), a fellow psychiatrist.\n[…]\nAfter the events of Cheers, psychiatrist Frasier Crane (Grammer) returns to his hometown of Seattle, Washington from Boston, following the end of his marriage to Lilith. His plans for a new life as a single man are challenged when he is obliged to take in his father, Martin (Mahoney), a retired police detective who has mobility problems after being shot in the line of duty during a robbery.\n[…]\nWhile Grammer liked the concept, Paramount Television disliked it, and suggested that the best route would be to spin off the Frasier Crane character. Grammer ultimately agreed to star in a Cheers spin-off, but the producers set the new show as far from Boston as possible to prevent NBC from demanding that other characters from the old show make guest appearances on the new show during its first season.\n[…]\nGrammer has been Emmy-nominated for playing Frasier Crane on Cheers and Frasier, as well as a 1992 crossover appearance on Wings, making him the only performer to be nominated for playing the same role on three different shows. The first year Grammer did not receive an Emmy nomination for Frasier was in 2003 for the 10th season."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Frasier",
        "situacao": "ok",
        "texto": "Frasier é uma premiada sitcom norte-americana, uma spinoff da série Cheers, baseada no personagem homônimo, Frasier Crane. O seriado estreou na rede norte-americana NBC a 16 de setembro de 1993, e o último episódio foi transmitido a 13 de maio de 2004.\n[…]\nA série foi criada por David Angell, Peter Casey, e David Lee, (Grub Street Productions) em associação com a Paramount Television. Angell, um ex-escritor da série Cheers, foi uma vítima dos ataques de 11 de Setembro.\n[…]\nEm setembro de 2002, quando ganhou os prêmios de melhor ator convidado em série de comédia, melhor edição de câmera e melhor edição de som, Frasier alcançou o total de 30 prêmios conquistados, e ultrapassou o recorde de prêmios ganhos, anteriormente pertencente ao clássico da televisão norte-americana The Mary Tyler Moore Show, com 29. A sitcom manteve o recorde de maior número de prêmios ganhos até 2016, quando foi ultrapassada por Game of Thrones.\n[…]\nPor sua atuação em Frasier, Kelsey Grammer ganhou quatro prêmios de melhor ator em série de comédia, nos anos de 1994, 1995, 1998 e 2004. Devido à sua interpretação do personagem Frasier Crane por 9 temporadas consecutivas em Cheers, e por mais 11 temporadas consecutivas em Frasier, Grammer alcançou a marca recorde de personagem interpretado por mais tempo em um programa no horário nobre americano: 20 anos, empatando com James Arness e seu personagem Marshall Matt Dillon, em Gunsmoke.\n[…]\nGrammer chegou a ser o ator mais bem pago da história da TV americana, recebendo mais de 1,6 milhões de dólares por episódio de Frasier em suas duas últimas temporadas. Seu recorde foi ultrapassado por Ray Romano, que atuava na série de televisão Everybody Loves Raymond, apenas um ano após o término de Frasier.\n[…]\nThe Frasier Files (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Família Dinossauros",
      "descricao": "Sitcom americana de 1991 a 1994 sobre uma família de dinossauros, feita com bonecos animatrônicos."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Os bonecos da série Família Dinossauros saíram da oficina criada por qual titereiro, criador dos Muppets?",
    "resposta": "Jim Henson",
    "distratores": [
      "Frank Oz",
      "Walt Disney",
      "Stan Winston"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dinosaurs_(TV_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dinosaurs_(TV_series)",
        "situacao": "ok",
        "texto": "Dinosaurs is an American television sitcom that aired on ABC from April 26, 1991, to November 10, 1995. The show, about a family of anthropomorphic dinosaurs, was produced by Michael Jacobs Productions and Jim Henson Productions in association with Walt Disney Television. The characters were designed by Henson team member Kirk Thatcher.\n[…]\nNews stories written at the time of the show's premiere highlighted Dinosaurs' connection to Jim Henson, who had died the year before. Henson conceived the show in 1988, according to an article in The New York Times, adding he wanted it to be a sitcom, but about a family of dinosaurs. Until the success of The Simpsons, according to Alex Rockwell, a vice president of the Henson organization, \"people thought it was a crazy idea.\"\n[…]\nIn the late 1980s, Henson worked with William Stout, a fantasy artist, illustrator and designer, on a feature film starring animatronic dinosaurs with the working title of The Natural History Project; a 1993 article in The New Yorker said that Henson continued to work on a dinosaur project (presumably Dinosaurs) until the \"last months of his life.\"\n[…]\nEthyl Hinkleman Phillips (performed by Brian Henson in season 1-2, Rickey Boyd in season 3-4, voiced by Florence Stanley) is an Edmontonia who is Fran's mother, Earl's mother-in-law, and the maternal grandmother of Robbie, Charlene, and Baby. Ethyl comes to live with the Sinclairs and is revealed to have a son named Stan (Fran's brother). Ethyl always wears house slippers and uses a wheelchair. Ethyl enjoys making fun of Earl and hitting him with her cane.\n[…]\nThe Odd Job Dinosaur from the episode \"How to Pick Up Girls\".\n[…]\nDinosaurs was made available for streaming on Disney+ on January 29, 2021, for the United States, with the exception of the episode \"A New Leaf\".\n[…]\nDinosaurs at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dinosaurs",
        "situacao": "ok",
        "texto": "Dinosaurs (Família Dinossauros no Brasil e Os Dinossauros em Portugal), é uma série de televisão americana. Apesar de ser concebida como um programa infantil, faz uma crítica bem humorada ao chamado \"american way of life\" e uma sátira da sociedade e dos costumes da classe média desse país.\n[…]\nProduzida pela Disney em parceria com a Jim Henson Productions - a qual concebeu os bonecos que representam os personagens - e a Michael Jacobs Productions, entre os anos de 1991 e 1994, a série trata das aventuras de uma família de dinossauros, a Família Silva Sauro (Sinclair, em inglês), que vive em uma sociedade dominada pelos grandes répteis, onde os humanos são animais selvagens.\n[…]\nA série voltou a ser exibida no dia 30 de julho de 2007 pela Rede Bandeirantes, de segunda a sexta às 20:15. No dia 1º de outubro, em virtude deste horário ser ocupado pela novela Dance Dance Dance, Família Dinossauro mudou de horário para 21h. Para os padrões da emissora, foi um relativo sucesso de audiência.\n[…]\nDNN (Dinosaur News Network) - sátira à emissora de notícias CNN (Cable News Network), que na série tem como correspondente sênior o respeitado jornalista Howard Handupme.\n[…]\nPangaea Hills, DINO210 - sátira à série dos anos 1990 \"Barrados no Baile\".\n[…]\nWay Too Complicated - paródia à série norte-americana \"The Brady Bunch\", mas com 14 pequenos dinossauros fantasmas.\n[…]\nBalde Cheio de Cãezinhos - série criada por Dino no episódio em que ele se torna executivo da ABC. Sempre ao final, um dinossauro abria uma caixa em que estavam cerca de cinco filhotes de labradores. É um dos programas criados por Dino que diminuem o QI dos dinossauros\n[…]\nHá ainda outros programas de TV (sátiras ou criados pelo escritor) que aparecem no desenho, mas alguns são desconhecidos do público brasileiro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Os Jetsons",
      "descricao": "Desenho animado americano de 1962 sobre uma família que vive num futuro de carros voadores e robôs."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que estúdio de animação criou tanto Os Flintstones, na Idade da Pedra, quanto Os Jetsons, no futuro?",
    "resposta": "Hanna-Barbera",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Jetsons"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Jetsons",
        "situacao": "ok",
        "texto": "The Jetsons is an American animated sitcom produced by Hanna-Barbera Productions. It originally aired in prime time from September 23, 1962, to March 17, 1963, on ABC, then later aired in reruns via syndication, with new episodes produced from 1985 to 1987. It was Hanna-Barbera's Space Age counterpart to The Flintstones.\n[…]\nIn 1963, Morey Amsterdam and Pat Carroll each filed $12,000 suits against Hanna-Barbera for breach of contract, claiming they had been cast as George and Jane Jetson, respectively. Although their contracts stipulated they would be paid US$500 an episode with a guarantee of twenty-four episodes (i.e., a full season) of work, they recorded only one episode before being replaced.\n[…]\nAlong with fellow Hanna-Barbera production Jonny Quest and Warner Bros.' Looney Tunes shorts, The Jetsons is one of the few series to have aired on each of the Big Three television networks in the United States.\n[…]\nThe Jetsons Meet the Flintstones (1987)\n[…]\nParamount Pictures first tried to film a live-action version of The Jetsons in 1985, which was to be executive produced by Gary Nardino, but failed to do so. In the late 1980s, Universal Pictures purchased the film rights for The Flintstones and The Jetsons from Hanna-Barbera Productions. The result was Jetsons: The Movie, which was released in 1990.\n[…]\nOn November 8, 2011, Warner Home Video (via the Warner Archive Collection) released The Jetsons: Season 2, Volume 2 on DVD in Region 1 as part of their Hanna-Barbera Classic Collection. This is a Manufacture-on-Demand (MOD) release, available exclusively through Warner's online store and Amazon.com. Warner Archive followed up by releasing Season 3 in the same way on May 13, 2014.\n[…]\nList of Hanna-Barbera characters\n[…]\nMallory, Michael (1998). Hanna-Barbera Cartoons. Hugh Lauter Levin Associates. ISBN 0-88363-108-3."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Jetsons",
        "situacao": "ok",
        "texto": "The Jetsons (em português Os Jetsons) é uma série animada de televisão produzida pela Hanna-Barbera, exibida originalmente na ABC entre 1962 e 1963. Foi exibida no Brasil pela TV Excelsior. Mais tarde a série foi relançada com novos episódios produzidos entre 1984 e 1987, como parte do programa The Funtastic World of Hanna-Barbera. Foi exibida no canal brasileiro SBT.\n[…]\nTendo como tema a \"Era Espacial\", a série introduziu no imaginário da maioria das pessoas o que seria o futuro da Humanidade: carros voadores, cidades suspensas, trabalho automatizado, toda sorte de aparelhos eletrodomésticos e de entretenimento, robôs como criados, e tudo que dá para se imaginar do futuro. Esta foi com certeza a quarta série mais popular da dupla Hanna-Barbera só perdendo para Scooby-Doo, os Flinstones e a mais tradicional série da dupla, Tom e Jerry.\n[…]\nHanna-Barbera's 50th: A Yabba Dabba Doo Celebration (1989)\n[…]\nAo final da década de 1980, a Universal Studios adquiriu os direitos de The Flintstones e The Jetsons da Hanna-Barbera Productions. O resultado foi a animação para os cinemas Jetsons: The Movie, lançada em 1990.\n[…]\nThe Funtastic World of Hanna-Barbera, Elroy Jetson é raptado por Dick Dastardly (de Wacky Races) (1991)\n[…]\nEm 2003, Xtra usou Os Jetsons como parte de uma campanha publicitária com George Jetson promovendo os benefícios da internet de banda larga. O anúncio terminou com George dizendo: \"A banda larga é o caminho, mas algumas pessoas nunca se acostumarão a progredir\", e uma imagem de Fred Flintstone usando um computador em forma de pedra com um mouse real\n[…]\nThe Jetsons' Space Race (part of \"Hanna-Barbera’s Cartoon Carnival\") (CD-i, 1993)\n[…]\nFlintstones Jetsons Time Warp (CD-i, 1994)\n[…]\nMichael Mallory (1998). Hanna-Barbera Cartoons. [S.l.]: publicado por Hugh Lauter Levin Associates, Inc.; distribuído por Publishers Group West. ISBN 0-88363-108-3\n[…]\nJetson's Movie",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Gregory House",
      "descricao": "Médico protagonista da série americana House, interpretado por Hugh Laurie."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O genial e ranzinza médico Gregory House, da série House, foi inspirado em qual detetive da literatura?",
    "resposta": "Sherlock Holmes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gregory_House",
      "https://en.wikipedia.org/wiki/House_(TV_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gregory_House",
        "situacao": "ok",
        "texto": "Gregory House is a fictional character and the titular protagonist of the American medical drama series House. Created by David Shore and portrayed by English actor Hugh Laurie, he leads a team of diagnosticians and is the Head of Diagnostic Medicine at the fictional Princeton-Plainsboro Teaching Hospital in Princeton, New Jersey. House's character has been described as a misanthrope, cynic, narci\n[…]\nIn the series, the character's unorthodox diagnostic approaches, radical therapeutic motives, and stalwart rationality have resulted in much conflict between him and his colleagues. House is also often portrayed as lacking sympathy for his patients, a practice that allows him time to solve ethical enigmas. The character is partly based on Sherlock Holmes.\n[…]\nSimilarities between House and the famous fictional detective Sherlock Holmes appear throughout the series; Shore explained that he was always a Sherlock Holmes fan, and found the character's indifference to his clients unique. The resemblance is evident in various elements of the series' plot, such as House's reliance on psychology to solve a case, his reluctance to accept cases he does not find interesting and House's home address, 221B Baker Street, which is the same as Holmes'.\n[…]\nIn the season two finale \"No Reason\", House is shot by a man named Jack Moriarty, a name that coincides with Sherlock Holmes' adversary, Professor James Moriarty; likewise, in the fifth season, Wilson uses Irene Adler as the name for an imaginary love interest of House (a teacher by the name of Rebecca Adler was also the first patient Dr. House encounters in the first episode of the series), the same name as a notable female adversary of Holmes.\n[…]\nHoltz, Andrew (2011). House M.D. vs. Reality: Fact and Fiction in the Hit Television Series. New York: Berkley Books. ISBN 978-0-425-23893-6.\n[…]\nGregory House at the TV IV\n[…]\nDr. House modelled after Sherlock Holmes"
      },
      {
        "url": "https://en.wikipedia.org/wiki/House_(TV_series)",
        "situacao": "ok",
        "texto": "House (also known as House, M.D. and Dr. House in some international markets) is an American medical drama television series created by David Shore for Fox. It aired for eight seasons from November 16, 2004 to May 21, 2012. It focuses on Dr. Gregory House (Hugh Laurie), an unconventional and misanthropic medical genius who, despite his dependence on pain medication, leads a team of diagnosticians \n[…]\nIndividual episodes of the series contain additional references to the Sherlock Holmes tales. The main patient in the pilot episode is named Rebecca Adler after Irene Adler, a character in the Holmes short story, \"A Scandal in Bohemia\". In the season two finale, House is shot by a crazed gunman credited as \"Moriarty\", the name of Holmes's nemesis. In the season four episode \"It's a Wonderful Lie\", House receives a \"second-edition Conan Doyle\" as a Christmas gift.\n[…]\nIn the season five episode \"The Itch\", House is seen picking up his keys and Vicodin from the top of a copy of Conan Doyle's The Memoirs of Sherlock Holmes. In another season five episode, \"Joy to the World\", House, in an attempt to fool his team, uses a book by Joseph Bell, Conan Doyle's inspiration for Sherlock Holmes.\n[…]\nThe series finale also pays homage to Holmes's apparent death in \"The Final Problem\", the 1893 story with which Conan Doyle originally intended to conclude the Holmes chronicles.\n[…]\nThe show received a 2005 Peabody Award for what the Peabody board called an \"unorthodox lead character—a misanthropic diagnostician\" and for \"cases fit for a medical Sherlock Holmes\", which helped make House \"the most distinctive new doctor drama in a decade\". The American Film Institute (AFI) included House in its 2005 list of 10 Television Programs of the Year.\n[…]\nHockley, Luke (2011). House the Wounded Healer on Television. Routledge. ISBN 978-0-415-47912-7.\n[…]\nHouse at IMDb\n[…]\nHouse at epguides.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gregory_House",
        "situacao": "ok",
        "texto": "Gregory House é um personagem fictício, protagonista da série americana House, interpretado por Hugh Laurie.\n[…]\nÉ um gênio da medicina, formado na Johns Hopkins University School of Medicine que lidera um grupo de diagnosticistas no Princeton-Plainsboro Teaching Hospital. A cada episódio ele e sua equipa desvendam casos cada vez mais intrigantes que desafiam sua inteligência e raciocínio. House descrito como um misantropo, cínico, sarcástico, e ranzinza, esta última uma das palavras mais usadas para definir a personagem em 2006.\n[…]\nNa série, a cada novo episódio, ele e sua equipe enfrentam casos totalmente fora do comum, que desafiam a sua inteligência e raciocínio, obrigam House a utilizar muitas vezes práticas heterodoxas de diagnóstico, e motivações terapêuticas radicais.\n[…]\nBrilhante, Gregory valoriza mais a descoberta do quebra-cabeça, a ligação dos sintomas, para fazer o diagnóstico mais importante do que a vida do próprio paciente, e a racionalidade forte de House resultam em conflitos frequentes entre ele e a sua equipa. Além disso, por detrás dos casos médicos ainda são relatadas a vida das personagens e os seus problemas pessoais.[carece de fontes]?\n[…]\nTambém é mostrada com frequência a falta de empatia e simpatia de House por seus pacientes, uma prática que lhe proporciona mais tempo para resolver enigmas patológicos. A personagem é parcialmente inspirado em Sherlock Holmes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "O Rei do Gado",
      "descricao": "Telenovela da Rede Globo exibida em 1996 e 1997, sobre disputas entre famílias de fazendeiros."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que novelista escreveu tanto a novela Pantanal quanto O Rei do Gado?",
    "resposta": "Benedito Ruy Barbosa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Rei_do_Gado",
      "https://pt.wikipedia.org/wiki/Benedito_Ruy_Barbosa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Rei_do_Gado",
        "situacao": "ok",
        "texto": "O Rei do Gado é uma telenovela brasileira produzida e exibida pela TV Globo de 17 de junho de 1996 a 14 de fevereiro de 1997, em 209 capítulos. Substituiu O Fim do Mundo e foi substituída por A Indomada, sendo a 53ª \"novela das oito\" exibida pela emissora.\n[…]\nTeve a autoria de Benedito Ruy Barbosa, com colaboração de Edmara Barbosa e Edilene Barbosa, foi dirigida por Luiz Fernando Carvalho, Carlos Araújo, Emilio Di Biasi e José Luiz Villamarim. A direção geral e de núcleo foram de Luiz Fernando Carvalho.\n[…]\nEm O Rei do Gado, Benedito Ruy Barbosa retorna as discussões sobre a reforma agrária, abordada anteriormente em sua outra telenovela, Meu Pedacinho de Chão, e a vida dos trabalhadores do Movimento dos Sem Terra (MST) pela luta da posse de terras. Paralelamente a estes temas e do romance da primeira fase de O Rei do Gado, Benedito Ruy Barbosa retratou a época que viveu pessoalmente.\n[…]\nO Rei do Gado marcou a estreia na TV Globo de Marcello Antony, Caco Ciocler, Emílio Orciollo Netto e Lavínia Vlasak. Participaram da telenovela os senadores Eduardo Suplicy e Benedita da Silva, que atuaram no funeral do Senador Caxias.\n[…]\nA primeira fase de O Rei do Gado foi muito elogiada e entrou para a galeria das cenas antológicas da televisão brasileira, com enredo emocionante e produção de altíssima qualidade, Benedito definiu que \"Num país que precisa abrir o olho para sua realidade, uma novela não pode ser alienante, deve informar o público, ser algo útil à sociedade\".\n[…]\nDessa forma, a trama de Benedito Ruy Barbosa se tornou a segunda reprise do Vale a Pena Ver de Novo considerada imprópria para menores de 14 anos. A primeira a ter esse selo foi a reprise de A Favorita (2008), de João Emanuel Carneiro, reclassificada pelo órgão em 2022."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Benedito_Ruy_Barbosa",
        "situacao": "ok",
        "texto": "Benedito Ruy Barbosa (Gália, 17 de abril de 1931 – São Paulo, 7 de julho de 2026) foi um autor, escritor, dramaturgo, jornalista e publicitário brasileiro. Chegou à dramaturgia com a peça Fogo Frio, encenada pelo Teatro de Arena de São Paulo.\n[…]\nAté então, Benedito só havia escrito novelas para o horário das seis na emissora, à qual retornou três anos depois para escrever outro grande sucesso: Renascer (1993), que marcava a estreia do autor no horário nobre, abordando a crendice popular, feita também em Paraíso (1982), e a saga da história de uma família nos dias antigos e atuais, com O Rei do Gado (1996).\n[…]\nSeis antigos sucessos ganharam uma segunda versão: Cabocla (2004); baseada no romance homônimo de Ribeiro Couto; Sinhá Moça (2006); ambientada no século XIX adaptada do livro homônimo de Maria Dezonne Pacheco Fernandes; Paraíso (2009), as três adaptadas pelas filhas Edmara e Edilene Barbosa; Meu Pedacinho de Chão (2014), adaptada pelo próprio Benedito; e Pantanal (2022) e Renascer (2024), as duas adaptadas pelo neto Bruno Luperi.\n[…]\nEm 1983 sua novela Algemas de Ouro foi adaptada pela Televisão Nacional do Chile com o título de El Juego de la Vida; dirigida por Herval Rossano e protagonizada pela atriz brasileira Nívea Maria.\n[…]\nBenedito Ruy Barbosa tem boas ligações com o futebol, sendo, inclusive, conselheiro vitalício do São Paulo Futebol Clube.\n[…]\nBenedito Ruy Barbosa faleceu na manhã do dia 7 de julho de 2026. Benedito havia sido internado no Hospital do Coração na noite do dia anterior devido a uma complicação da doença renal crônica a qual sofria, sendo essa a causa da sua morte.\n[…]\nBenedito Ruy Barbosa no IMDb\n[…]\n«Benedito Ruy Barbosa». no Memória Globo"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Janete Clair",
      "descricao": "Novelista brasileira, autora de sucessos da Globo como Selva de Pedra e Irmãos Coragem."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que novelista, autora de Selva de Pedra, foi casada com Dias Gomes, autor de O Bem-Amado?",
    "resposta": "Janete Clair",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Janete_Clair"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Janete_Clair",
        "situacao": "ok",
        "texto": "Janete Emmer Dias Gomes, mais conhecida como Janete Clair (Conquista, 25 de abril de 1925 — Rio de Janeiro, 16 de novembro de 1983), foi uma célebre escritora brasileira, autora de folhetins para rádio e televisão. O sobrenome Dias Gomes vem do marido, o também escritor Alfredo de Freitas Dias Gomes.\n[…]\nPor causa de seus sucessivos êxitos no horário das 20h, o mais nobre da TV Globo, Janete passou a ser conhecida também como \"Maga das Oito\", \"Dama das Oito\", \"Nossa Senhora das Oito\" e \"Usineira de Sonhos\", por Carlos Drummond de Andrade.\n[…]\nJanete Clair nasceu Jenete Stoco Emmer, filha do comerciante libanês Salim Emmer e da costureira de ascendência ítalo-portuguesa Carolina Stocco. Depois de passar uma infância tranquila em Conquista, no Triângulo Mineiro, no Vale do Rio Grande, o talento de Janete para a vida artística começou a despontar quando a família se mudou para Franca, em São Paulo. Na Rádio Herz, a principal emissora da cidade, Janete fazia sucesso interpretando canções em árabe e francês.\n[…]\nAos quatorze anos, precisou interromper temporariamente a vida artística e se dedicou a trabalhar como datilógrafa para ajudar na renda da família. Depois, já na capital São Paulo fez estágio num laboratório como bacteriologista e aos vinte anos passou num teste para ser locutora e rádio atriz da Rádio Tupi. Adotou o nome artístico Janete por ser de mais fácil pronúncia, e o sobrenome Clair, foi uma inspiração na música \"Clair de Lune\" de Claude Debussy por sugestão de Otávio Gabus Mendes.\n[…]\nEm 1978, parou o Brasil com a telenovela O Astro, em torno do mistério \"Quem matou Salomão Hayala?\", personagem então interpretado por Dionísio Azevedo. Janete Clair se tornou a maior autora popular da história da televisão do Brasil, a única a alcançar 100 pontos de audiência.\n[…]\nJanete Clair no IMDb"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Odete Roitman",
      "descricao": "Vilã da telenovela Vale Tudo, de 1988, interpretada por Beatriz Segall."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Na versão original de 1988 da novela Vale Tudo, que personagem matou a vilã Odete Roitman?",
    "resposta": "Leila",
    "distratores": [
      "Maria de Fátima",
      "Raquel",
      "Marco Aurélio"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Odete_Roitman",
      "https://pt.wikipedia.org/wiki/Vale_Tudo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Odete_Roitman",
        "situacao": "ok",
        "texto": "Odete Tauber de Almeida Roitman é uma personagem fictícia da telenovela brasileira Vale Tudo, exibida originalmente pela TV Globo de 16 de maio de 1988 a 6 de janeiro de 1989. Interpretada por Beatriz Segall, a personagem tornou-se o principal ícone de vilania da teledramaturgia brasileira, sendo frequentemente citada em retrospectivas, rankings e análises críticas sobre telenovelas no Brasil.\n[…]\nPerto do fim da telenovela, Odete foi morta com três tiros por Leila, esposa de Marco Aurélio, alguém que Odete julgava ser seu aliado (e que a estava roubando, com desvios de verbas da TCA). Leila descobriu que o marido teve um breve caso extraconjugal com Maria de Fátima e queria matá-la, baleando Odete por engano. Num apartamento de Odete, enquanto discutia com Marco Aurélio, com uma arma em punho, Leila viu o vulto de uma pessoa atrás de uma porta com vidro.\n[…]\nAcreditando ser Maria de Fátima, Leila atirou três vezes contra o vidro, atingindo Odete. A autoria do crime só foi revelada no último capítulo.\n[…]\nA empresa aérea do Grupo Almeida Roitman, na recente versão, continuou com a sigla TCA, mas chamada Transcontinental Airlines (em vez de Transcapital Aerolinhas).\n[…]\nNo final desta versão, Odete foi ameaçada de morte por cinco suspeitos: Celina, César, Heleninha, Maria de Fátima e Marco Aurélio. Ela levou um tiro de Marco Aurélio e foi dada como morta. Mas no último capítulo, foi revelado que ela conseguiu sobreviver ao tiro e fugiu com a ajuda de Freitas. A última frase dita pela personagem no helicóptero após a fuga misturou francês e português; \"Au Revoir Brasil, Odete Roitman sempre volta.\"\n[…]\nEm 2002, a emissora Telemundo produziu uma telenovela em língua espanhola, baseada em Vale Tudo, intitulada Vale Todo, na qual a personagem inspirada em Odete foi interpretada pela atriz Zully Montero, tendo seu nome alterado para Lucrecia Roitman."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vale_Tudo",
        "situacao": "ok",
        "texto": "Vale Tudo é uma telenovela brasileira produzida e exibida pela TV Globo de 16 de maio de 1988 a 6 de janeiro de 1989, em 204 capítulos. Substituiu Mandala e foi substituída por O Salvador da Pátria, sendo a 39.ª \"novela das oito\" transmitida pela emissora.\n[…]\nMarco Aurélio tem uma irmã, Cecília (Lala Deheinzelin), que mantém um romance com Laís (Cristina Prochaska), uma moça bonita e simpática. Entretanto, Cecília acaba morrendo em um acidente de carro e deixa seus bens para Laís, o que acaba gerando revolta em Marco Aurélio. Disposto a tomar sua herança, ele faz de tudo para que ela não receba a fortuna. Ainda há Leila (Cássia Kis), ex-mulher de Ivan com quem teve o garoto Bruno (Danton Mello).\n[…]\nNo capítulo de estreia, as personagens da novela das 19h, Sassaricando, comentaram sobre o primeiro capítulo de Vale Tudo. Na ocasião, Lucrécia, personagem de Maria Alice Vergueiro, diz que não quer perder o primeiro capítulo da nova novela de Gilberto Braga. Essa menção foi uma homenagem de Silvio de Abreu à trama que estrearia naquela noite.\n[…]\nA novela trouxe um dos mais famosos temas de suspense \"quem matou\" da história da dramaturgia. No capítulo 193, exibido no dia 24 de dezembro de 1988, sábado e véspera de Natal, a vilã Odete Roitman foi assassinada com três tiros. No último capítulo, revela-se que Odete Roitman havia sido morta por engano, por Leila, que pensa estar atirando em Maria de Fátima, que havia se tornado amante de seu marido, Marco Aurélio, ex-genro de Odete.\n[…]\nTambém marcaram as cenas finais do último capítulo, quando Leila revela ser a assassina de Odete Roitman e a de Marco Aurélio dando uma banana ao deixar o Brasil.\n[…]\n«Vale Tudo: a novela que ainda é a cara do Brasil - Jornal da Tarde»"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Louro José",
      "descricao": "Boneco de papagaio que acompanhou Ana Maria Braga em seus programas matinais na TV."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que ator deu vida ao boneco Louro José, parceiro de Ana Maria Braga, por mais de vinte anos?",
    "resposta": "Tom Veiga",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Louro_Jos%C3%A9",
      "https://pt.wikipedia.org/wiki/Tom_Veiga"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Louro_Jos%C3%A9",
        "situacao": "ok",
        "texto": "Louro José foi um boneco de um papagaio que misturava artifícios de fantoches com a tecnologia de controle remoto. Foi interpretado pelo ex-coordenador de palco brasileiro Neilton José Veiga Júnior, mais conhecido como Tom Veiga (São Paulo, 6 de fevereiro de 1973 – Rio de Janeiro, 1 de novembro de 2020), responsável pela sua voz e manipulação até sua morte.\n[…]\nLouro ganhou destaque por ser o companheiro de Ana Maria Braga desde 1997, quando a apresentadora comandava o programa Note e Anote, da Record. À época, Louro era apenas um boneco de fantoche (não possuía a tecnologia de controle remoto). Foi somente com a ida de Ana Maria Braga para a TV Globo, em 1999, que Louro José, além da mudança de visual, passou a também movimentar seus olhos, dando mais vida ao personagem.\n[…]\nEm 1999, Ana Maria e o Louro José foram contratados pela Globo, passando a ser confeccionados por Totoni Silva e pela equipe do Cem Modos, a mesma do programa TV Colosso. O boneco, além da mudança de visual, passou a também movimentar seus olhos, o que deu mais vida ao personagem.\n[…]\nEm maio de 2012, Veiga renovou contrato por mais 4 anos com a Globo, afastando assim as polêmicas acerca do possível fim da sua participação no programa Mais Você.\n[…]\nSegundo o site \"Observatório da TV\", o sucesso que fez tão logo o personagem Louro José foi criado, encorajou outros programas a apostarem em “mascotes”, como, por exemplo, o Xaropinho, do programa Ratinho Livre, também da RecordTV. Quando a Ana Maria Braga foi para a Rede Globo, e levou o Louro José a reboque, a direção do Note e Anote apostou num novo mascote (o cachorro Uólli, fantoche criado para contracenar com Catia Fonseca, que substituiu Ana Maria na atração).\n[…]\nNeste mesmo ano, Louro fez uma participação na sétima faixa (\"Saúde, Amor, Paz e Alegria\") do álbum Sou Eu, de Ana Maria Braga.\n[…]\nTom Veiga no IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tom_Veiga",
        "situacao": "ok",
        "texto": "Louro José foi um boneco de um papagaio que misturava artifícios de fantoches com a tecnologia de controle remoto. Foi interpretado pelo ex-coordenador de palco brasileiro Neilton José Veiga Júnior, mais conhecido como Tom Veiga (São Paulo, 6 de fevereiro de 1973 – Rio de Janeiro, 1 de novembro de 2020), responsável pela sua voz e manipulação até sua morte.\n[…]\nLouro ganhou destaque por ser o companheiro de Ana Maria Braga desde 1997, quando a apresentadora comandava o programa Note e Anote, da Record. À época, Louro era apenas um boneco de fantoche (não possuía a tecnologia de controle remoto). Foi somente com a ida de Ana Maria Braga para a TV Globo, em 1999, que Louro José, além da mudança de visual, passou a também movimentar seus olhos, dando mais vida ao personagem.\n[…]\nEm 1999, Ana Maria e o Louro José foram contratados pela Globo, passando a ser confeccionados por Totoni Silva e pela equipe do Cem Modos, a mesma do programa TV Colosso. O boneco, além da mudança de visual, passou a também movimentar seus olhos, o que deu mais vida ao personagem.\n[…]\nEm maio de 2012, Veiga renovou contrato por mais 4 anos com a Globo, afastando assim as polêmicas acerca do possível fim da sua participação no programa Mais Você.\n[…]\nSegundo o site \"Observatório da TV\", o sucesso que fez tão logo o personagem Louro José foi criado, encorajou outros programas a apostarem em “mascotes”, como, por exemplo, o Xaropinho, do programa Ratinho Livre, também da RecordTV. Quando a Ana Maria Braga foi para a Rede Globo, e levou o Louro José a reboque, a direção do Note e Anote apostou num novo mascote (o cachorro Uólli, fantoche criado para contracenar com Catia Fonseca, que substituiu Ana Maria na atração).\n[…]\nNeste mesmo ano, Louro fez uma participação na sétima faixa (\"Saúde, Amor, Paz e Alegria\") do álbum Sou Eu, de Ana Maria Braga.\n[…]\nTom Veiga no IMDb"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Big Brother Brasil 1",
      "descricao": "Primeira edição do reality show Big Brother Brasil, exibida pela Rede Globo em 2002."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 2002, quem venceu a primeira edição do Big Brother Brasil?",
    "resposta": "Kléber Bambam",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Big_Brother_Brasil_1"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Big_Brother_Brasil_1",
        "situacao": "ok",
        "texto": "A primeira temporada do reality show Big Brother Brasil foi exibida pela TV Globo de 29 de janeiro a 2 de abril de 2002. Foi apresentada por Pedro Bial e Marisa Orth – a única edição com Orth como apresentadora e também a ter uma apresentadora feminina – com direção geral de José Bonifácio Brasil de Oliveira, o Boninho, e Carlos Magalhães. Foi a mais curta edição da história do BBB, com 64 dias de\n[…]\nA edição terminou com a vitória do dançarino Kleber Bambam, que recebeu 68% dos votos. O prêmio foi de meio milhão de reais sem desconto de impostos, e um carro Fiat Marea HLX.\n[…]\nComo não tinham muita noção do que se podia falar dentro da casa, os participantes soltaram informações cruciais sobre suas vidas fora da casa. Kleber \"Bambam\" de Paula já havia feito figurações em programas da TV Globo, como o Zorra Total, e já foi dançarino do Planeta Verão, programa comandado por Xuxa. André \"Gabeh\" Carvalho também já havia cantado em um programa de Xuxa anos antes. Helena Louro já tinha participado de um filme com Gracindo Júnior (A Hora Marcada, de 2001).\n[…]\nEm sua final, a primeira edição do reality show alcançou uma audiência histórica (e até o momento nunca registrada por nenhuma outra final do programa) de 59 pontos, chegando ao pico de 64 e 76% dos televisores ligados no momento que consagrou Kleber Bambam como o grande campeão.\n[…]\nBig Brother Brasil foi a primeira trilha sonora do reality show Big Brother Brasil, lançada em 2002, durante a exibição da primeira edição, em formato CD, pela gravadora Som Livre. A capa apresenta o logotipo do programa.\n[…]\nAs Preferidas do BamBam – No Meu Modo de Vista foi uma coletânea das músicas favoritas do vencedor da primeira edição do Big Brother Brasil, Kleber Bambam, lançada em 2002, após a exibição da primeira edição, em formato CD, pela gravadora Som Livre. A capa apresenta o vencedor da temporada, Kleber Bambam.\n[…]\n«Big Brother Brasil 1»\n[…]\n«Terra: BBB1»"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "I'll Be There for You",
      "descricao": "Canção de 1995 usada como tema de abertura da série Friends."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que banda americana gravou I'll Be There for You, a música de abertura da série Friends?",
    "resposta": "The Rembrandts",
    "distratores": [
      "Goo Goo Dolls",
      "Counting Crows",
      "R.E.M."
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/I%27ll_Be_There_for_You_(The_Rembrandts_song)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/I%27ll_Be_There_for_You_(The_Rembrandts_song)",
        "situacao": "ok",
        "texto": "\"I'll Be There for You\" is a song by American pop rock duo the Rembrandts. The song was written by David Crane, Marta Kauffman and Allee Willis as the main theme song to the NBC sitcom Friends, which was broadcast from 1994 to 2004. American rock band R.E.M. was originally asked to allow their song \"Shiny Happy People\" to be used for the Friends theme, but they turned the opportunity down. \"I'll B\n[…]\nThe title theme used in the pilot for Friends was \"Shiny Happy People\" by American rock band R.E.M. For later episodes, Warner Bros. Television wanted either that song, or a song by R.E.M. frontman Michael Stipe. When Stipe rejected the offer, the producers of the show instead wrote their own theme song and enlisted the Rembrandts, consisting of members Phil Sōlem and Danny Wilde, to record it. The music was composed by Marta Kauffman's husband, Michael Skloff.\n[…]\nThe Rembrandts did not want to record the song, but since they were the only available band on Warner Bros. Records, they relented to the company's demands. The original lyrics of \"I'll Be There for You\", a single verse as needed for the length of the series' opening credits, were co-written by Friends producers David Crane, and Kauffman along with songwriter Allee Willis.\n[…]\nThe music video for \"I'll Be There for You\" features the band performing in a studio while the cast of Friends join in. Some scenes are shot in black-and-white. The Rembrandts members Phil Sōlem and Danny Wilde disclosed during a live interview on The Today Show on September 20, 2019, to celebrate the 25th anniversary of the song that the video was shot on the set of SNL (Studio 8H).\n[…]\nIn 2020, retro musical collective Postmodern Jukebox released a cover titled Evolution Of The \"Friends\" TV Theme Song, presenting the song in a series of period-inspired arrangements spanning the 20th century, with The Rembrandts themselves performing the \"1990s version\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/I%27ll_Be_There_for_You_%28can%C3%A7%C3%A3o_de_The_Rembrandts%29",
        "situacao": "ok",
        "texto": "\"I'll Be There for You\" é uma canção da dupla norte-americana de pop rock The Rembrandts. Foi escrita por David Crane, Marta Kauffman, Michael Skloff e Allee Willis, sendo usada como a música-tema da sitcom estadunidense Friends (1994–2004), da NBC. A banda norte-americana de rock R.E.M. foi originalmente solicitada que permitissem que uma de suas canções fosse usada para o tema de Friends, mas el\n[…]\nTelevision selecionou a única banda disponível na Warner Bros. Records para gravá-la: The Rembrandts. Em 1995, depois que uma estação de rádio de Nashville trouxe a canção para a popularidade mainstream, os membros do The Rembrandts, Danny Wilde e Phil Sōlem, expandiram a música-tema com dois novos versos e incluíram esta versão em seu terceiro álbum de estúdio, L.P. (1995).\n[…]\nA música-tema da sitcom estadunidense Friends seria inicialmente \"Shiny Happy People\" da banda norte-americana de rock R.E.M., mas quando a banda rejeitou a oferta, a Warner Bros. Television decidiu recriar o som do R.E.M. recrutando The Rembrandts para escrever um tema original. Os Rembrandts não queriam gravar a música, mas como eram a única banda disponível na Warner Bros. Records, eles cederam às exigências da companhia.\n[…]\nA letra original de \"I'll Be There for You\", um único verso conforme necessário para a duração dos créditos de abertura da série, foi co-escrita pelos produtores de Friends David Crane e Marta Kauffman e pela compositora Allee Willis, enquanto os membros dos Rembrandts, Phil Sōlem e Danny Wilde, mais tarde escreveram um segundo verso e a ponte. A canção foi composta pelo marido de Kauffman, Michael Skloff.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Game of Thrones",
      "descricao": "Série de fantasia da HBO, exibida de 2011 a 2019, sobre a disputa pelo Trono de Ferro em Westeros."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Game of Thrones adapta a saga de livros As Crônicas de Gelo e Fogo, de qual escritor americano?",
    "resposta": "George R. R. Martin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Game_of_Thrones"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
        "situacao": "ok",
        "texto": "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is the first adaptation of A Song of Ice and Fire, a series of high fantasy novels by George R. R. Martin, and the first in what would become the Game of Thrones franchise. The show premiered on HBO in the United States on April 17, 2011, and concluded on May 19, 2019, with 73 episod\n[…]\nGame of Thrones used seven writers over its eight seasons. Benioff and Weiss wrote most of each season's episodes. A Song of Ice and Fire author George R. R. Martin wrote one episode in each of the first four seasons. Martin did not write an episode for the later seasons, since he wanted to focus on completing the sixth novel (The Winds of Winter). Jane Espenson co-wrote one first-season episode as a freelance writer.\n[…]\nAlthough Martin was not in the writers' room, he read the script outlines and made comments.\n[…]\nDespite its otherwise enthusiastic reception by critics, Game of Thrones has been criticized for the amount of female nudity, violence, and sexual violence it depicts, and for the manner in which it depicts these themes. George R. R. Martin responded that he felt obliged to be truthful about history and human nature, and that rape and sexual violence are common in war; and that omitting them from the narrative would have rung false and undermined one of his novels' themes, its historical realism.\n[…]\nIn May 2017, after years of speculation about possible successor series, HBO commissioned Max Borenstein, Jane Goldman, Brian Helgeland, Carly Wray, and Bryan Cogman to develop five individual Game of Thrones successor series; the writers were to be working individually with George R. R. Martin, who also co-wrote two of the scripts. D. B. Weiss and David Benioff said that they would not be involved with any of the projects.\n[…]\nGame of Thrones at IMDb\n[…]\nGame of Thrones at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Game_of_Thrones",
        "situacao": "ok",
        "texto": "Game of Thrones é uma série de televisão norte-americana criada por David Benioff e D. B. Weiss, baseada na série de livros A Song of Ice and Fire de George R. R. Martin. Eleita  como a melhor série de TV do século XXI em 2020, numa votação popular feita pela revista Digital Spy, Game of Thrones foi transmitida originalmente pelo canal HBO entre 17 de abril de 2011 a 19 de maio de 2019.\n[…]\nEmbora vários de seus personagens, eventos e cenários sejam baseados nos primeiros cinco livros de As Crônicas de Gelo e Fogo, eles diferem de várias maneiras em relação à sua fonte. O fundamentalismo é um dos temas presentes, que são inerente às decisões de seus personagens. Para Benioff e Weiss: \"Os termos 'herói' e 'vilão' não existem para os nossos escritores. E eu diria isso para George [R. R. Martin] também não está em seus livros. Não existem arcos de redenção bem definidos.\n[…]\nGame of Thrones teve sete escritores em seis temporadas. Os criadores da série, David Benioff e D. B. Weiss, escreviam a maioria dos episódios a cada temporada. O autor de A Song of Ice and Fire, George R. R. Martin, escreveu um episódio em cada uma das quatro primeiras temporadas. Martin não escreveu um episódio para as temporadas posteriores, pois queria se concentrar em completar o sexto livro (The Winds of Winter).\n[…]\nEm maio de 2017, após anos de especulação sobre possíveis séries sucessoras, a HBO encomendou Max Borenstein, Jane Goldman, Brian Helgeland, Carly Wray e Bryan Cogman para desenvolver séries sucessoras individuais de Game of Thrones; todos os escritores deveriam trabalhar individualmente com George R. R. Martin, que também co-escreveu dois dos roteiros. D. B. Weiss e David Benioff disseram que não estariam envolvidos em nenhum dos projetos.\n[…]\nGame of Thrones no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "O Bem-Amado",
      "descricao": "Telenovela da Rede Globo de 1973, escrita por Dias Gomes, sobre o prefeito Odorico Paraguaçu."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em O Bem-Amado, o prefeito Odorico Paraguaçu sonha inaugurar um cemitério em qual cidade fictícia do litoral baiano?",
    "resposta": "Sucupira",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Bem-Amado_(telenovela)",
      "https://en.wikipedia.org/wiki/O_Bem-Amado"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Bem-Amado_(telenovela)",
        "situacao": "ok",
        "texto": "O Bem-Amado é uma telenovela brasileira produzida e exibida pela TV Globo de 22 de janeiro a 3 de outubro de 1973, em 178 capítulos. Substituiu O Bofe e foi substituída por Os Ossos do Barão, sendo a 17.ª \"novela das dez\" produzida pela emissora.\n[…]\nO prefeito Odorico Paraguaçu é um político demagogo e corrupto que, com seus discursos inflamados e verborrágicos, ilude o simplório povo da pequena Sucupira, no litoral baiano. A meta prioritária de sua administração é a inauguração do cemitério local, criticada pela oposição ao seu governo, liderada pela família Medrado, que comanda a polícia local, pelo dentista Lulu Gouveia e pelo jornalista Neco Pedreira, editor-chefe do jornal A Trombeta.\n[…]\nA trama principal de O Bem-Amado é baseada em um texto escrito no início da década de 1960 pelo dramaturgo Dias Gomes, que inspirou-se em uma história contada pelo jornalista Nestor de Holanda. Segundo este, o cantor Jorge Goulart, ao se apresentar em uma cidade do Espírito Santo, soube, através dos moradores, que o prefeito havia construído um cemitério, porém não pôde inaugurá-lo por ninguém falecer.\n[…]\nPrimeiras feitas em cores para uma telenovela no Brasil, com parte dos custos arcados pela Associação Brasileira da Indústria Elétrica e Eletrônica através de subvenção, as gravações de O Bem-Amado começaram em novembro de 1972, quando uma equipe composta de diretores, técnicos e atores protagonistas viajou a Salvador para realizar as primeiras cenas, externas, em que o personagem Odorico Paraguaçu visitava a cidade vindo da fictícia Sucupira, também na Bahia — esta foi reproduzida no bairro Sepetiba e em áreas próximas, no Rio de Janeiro, onde toda a trama foi rodada.\n[…]\nO Bem Amado no IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/O_Bem-Amado",
        "situacao": "ok",
        "texto": "O Bem-Amado (English: The Beloved) is a Brazilian telenovela that first aired on Rede Globo in 1973. It is based on a play by Dias Gomes called Odorico, o Bem-Amado ou Os Mistérios do Amor e da Morte, written in 1962. It was the first Brazilian color telenovela. It was shot in Rio de Janeiro.\n[…]\nMayor Odorico Paraguaçu is a demagogue and corrupt politician who,  with his inflammatory and verbose speeches, deludes the simple people of small Sucupira, on the coast of Bahia. The priority goal of his administration is the inauguration of the local cemetery, criticized by the opposition to his government, led by the Medrado family, who run the local police, the dentist Lulu Gouveia and the journalist Neco Pedreira, editor-in-chief of the newspaper A Trombeta.\n[…]\nOdorico also faces the idealistic doctor Juarez Leão, who is obstinate in his mission to save lives. Shaken by the trauma of losing his wife in his hands during surgery, the doctor drinks, but does a good job in Sucupira taking care of the people's health, much to the mayor's dismay. Juarez wins the heart of Telma, Odorico's temperamental daughter, who constantly criticizes her father's methods, suspecting that he was responsible for her mother's death.\n[…]\nThe first to be shot in color for a telenovela in Brazil, with part of the costs covered by the Brazilian Electrical and Electronic Industry Association through a subsidy, the recording of O Bem-Amado began in November 1972, when a team made up of directors, technicians and lead actors traveled to Salvador to shoot the first external scenes, in which the character Odorico Paraguaçu visited the city from the fictional Sucupira, also in Bahia - this was reproduced in the Sepetiba neighborhood and nearby areas in Rio de Janeiro, where the entire plot was shot."
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Breaking Bad",
      "descricao": "Série americana criada por Vince Gilligan, sobre um professor de química que passa a produzir metanfetamina."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que cidade do Novo México se passa a série Breaking Bad?",
    "resposta": "Albuquerque",
    "fonte": [
      "https://en.wikipedia.org/wiki/Breaking_Bad"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
        "situacao": "ok",
        "texto": "Breaking Bad is an American neo-Western crime drama television series created by Vince Gilligan for AMC. Set and filmed in Albuquerque, New Mexico, the series follows Walter White (Bryan Cranston), an overqualified high school chemistry teacher who, after being diagnosed with stage-three lung cancer, begins producing and selling methamphetamine with former student Jesse Pinkman (Aaron Paul) to sec\n[…]\nBreaking Bad follows Walter White, a financially struggling high school chemistry teacher and part-time car wash employee from Albuquerque, New Mexico, who enters the local methamphetamine trade after being diagnosed with stage-three lung cancer. Seeking to secure his family's financial future, Walter begins producing methamphetamine with his former student Jesse Pinkman in a rolling meth lab.\n[…]\nThe writers also used maps of New Mexico and Albuquerque and a schematic of Walter's fictional superlab while developing story material.\n[…]\nIn 2022, the erection of statues of Walter White and Jesse Pinkman in New Mexico drew criticism from some Republican figures. Variety reported that conservative talk radio host Eddy Aragon said: \"It's not the type of recognition we want for the city of Albuquerque, or for our state. What you saw on Breaking Bad should be a documentary, honestly. I think, really, that is the reality in New Mexico. We try to say it's fictional, but that is the reality...\n[…]\nA Breaking Bad fan group placed a paid obituary for Walter White in the Albuquerque Journal, October 4, 2013. On October 19, 2013, a mock funeral procession (including a hearse and a replica of Walter's meth lab RV) and service for the character was held at Albuquerque's Sunset Memorial Park cemetery. A headstone was placed with a photo of Cranston as Walter.\n[…]\nBreaking Bad – official site at Sony Pictures\n[…]\nBreaking Bad on Netflix\n[…]\nBreaking Bad at IMDb\n[…]\nBreaking Bad at Emmys.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Breaking_Bad",
        "situacao": "ok",
        "texto": "Breaking Bad é uma série de televisão americana criada e produzida por Vince Gilligan. Ela retrata a vida do químico Walter Hartwell White, um Professor brilhante frustrado em dar aulas para adolescentes do ensino médio enquanto lida com um filho sofrendo de paralisia cerebral, Skyler White, Sua esposa grávida e dívidas intermináveis.\n[…]\nBreaking Bad se passa em Albuquerque, Novo México, e gira em torno das escolhas de seu protagonista, as quais o levam a uma intensa, dolorosa e inevitável transformação. Amplamente considerada como uma das melhores séries da história, ao seu final, foi um dos programas da televisão a cabo mais assistidos nos Estados Unidos, recebendo inúmeros prémios, incluindo dezesseis Primetime Emmy Awards, oito Satellite Awards, dois Globos de Ouro e um Prémio Escolha Popular.\n[…]\nA rede encomendou nove episódios para a primeira temporada (incluindo o piloto), mas em 2007-08 a Writers Guild of America limitou a produção de sete episódios. As versões iniciais do roteiro foram fixadas em Riverside, Califórnia, mas por sugestão da Sony, Albuquerque foi escolhida para a localização da produção devido às condições financeiras favoráveis ​​oferecidos pelo estado do Novo México.\n[…]\nDJ Qualls como Getz: Um oficial da polícia de Albuquerque, que numa passagem rápida ajuda Hank para rastrear Heisenberg.\n[…]\nJim Beaver como Lawson: Um traficante de armas de Albuquerque que obtêm várias armas para Walt.\n[…]\nDurante os primeiros dias de venda, Walter e Jesse em Albuquerque, se deparam com uma série de problemas com traficantes locais, Krazy-8 e Emilio Koyama. Walter se vê obrigado a matar Emilio para se defender, o intoxicando na van onde cozinhavam a droga. Após levarem e algemarem Krazy-8 inconsciente no porão de Jesse, Walter decide se desfazer do corpo de Emilio por dissolução em ácido fluorídrico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Game of Thrones",
      "descricao": "Série de fantasia da HBO, exibida de 2011 a 2019, sobre a disputa pelo Trono de Ferro em Westeros."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Muitas cenas de Porto Real, a capital de Game of Thrones, foram gravadas em qual cidade murada da Croácia?",
    "resposta": "Dubrovnik",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dubrovnik",
      "https://en.wikipedia.org/wiki/Game_of_Thrones"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dubrovnik",
        "situacao": "ok",
        "texto": "Dubrovnik, historically also known as Ragusa, is a city in southern Dalmatia, Croatia, by the Adriatic Sea. It is one of the most prominent tourist destinations in the Mediterranean, a seaport and the centre of the Dubrovnik-Neretva County. In 2021, its total population was 41,562. Recognizing its outstanding medieval architecture and fortifications, UNESCO inscribed the Old City of Dubrovnik as a\n[…]\nIn the following decades, Dubrovnik developed into an important international tourist, cultural, and congress destination, hosting political leaders, diplomats, international organizations, and European and international summits, including the Three Seas Initiative and Croatia Forum. The city also became an increasingly popular film destination, featuring in numerous international productions, most famously Game of Thrones, Star Wars: The Last Jedi, The Dark Side of the Sun, and Robin Hood.\n[…]\nA feature of Dubrovnik is its walls which run almost 2 kilometres (1.2 miles) around the city. The walls are 4 to 6 metres (13–20 feet) thick on the landward side but are much thinner on the seaward side. The system of turrets and towers was intended to protect the vulnerable city. The walls of Dubrovnik have also been a popular filming location for the fictional city of King's Landing in the HBO television series Game of Thrones.\n[…]\nThe HBO series Game of Thrones used Dubrovnik as a filming location, representing the cities of King's Landing and Qarth, primarily the former, from season 2 onwards.\n[…]\nThe text-based video game Quarantine Circular is set aboard a ship off the coast of Dubrovnik, and a few references to the city are made throughout the course of the game.\n[…]\nDubrovnik chess set\n[…]\nWalls of Dubrovnik\n[…]\nThe dictionary definition of dubrovnik at Wiktionary\n[…]\nDubrovnik travel guide from Wikivoyage\n[…]\nPodcast lecture on the coat of arms of Dubrovnik (2026) by Mate Božić on YouTube (31 minutes) (in Croatian)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
        "situacao": "ok",
        "texto": "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is the first adaptation of A Song of Ice and Fire, a series of high fantasy novels by George R. R. Martin, and the first in what would become the Game of Thrones franchise. The show premiered on HBO in the United States on April 17, 2011, and concluded on May 19, 2019, with 73 episod\n[…]\nThe sixth season, which began filming in July 2015, returned to Spain and filmed in Navarra, Guadalajara, Seville, Almeria, Girona and Peniscola. Filming also returned to Dubrovnik, Croatia. The filming of the seven episodes of season seven began on August 31, 2016, at Titanic Studios in Belfast, with other filming in Iceland, Northern Ireland and many locations in Spain, including Seville, Cáceres, Almodovar del Rio, Santiponce, Zumaia and Bermeo.\n[…]\nTourism organizations elsewhere reported increases in bookings after their locations appeared in Game of Thrones. Between 2014 and 2016, Hotels.com reported hotel bookings increased by 285 percent in Iceland and 120 percent in Dubrovnik. In 2016, bookings doubled in Ouarzazate, Morocco, the location of Daenerys' season three scenes. Dubrovnik also saw an increase in overnight tourist stays after episodes aired.\n[…]\nStudies showed that the series had an overall positive economic impact for both Northern Ireland and Dubrovnik. Despite the positive economic results, some academics note the impact and damage from Game of Thrones–related tourist activities could have on historical sites and other locations of cultural value.\n[…]\nVulture.com cited Westeros.org and WinterIsComing.net (news and discussion forums), ToweroftheHand.com (which organizes communal readings of the novels) and Podcastoficeandfire.com as fan sites dedicated to the TV and novel series; and podcasts cover Game of Thrones.\n[…]\nGame of Thrones at IMDb\n[…]\nGame of Thrones at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dubrovnik",
        "situacao": "ok",
        "texto": "Dubrovnik (em italiano: Ragusa; em português também existe a grafia Dubrovnique, raramente usada) é uma cidade costeira da Croácia localizada no extremo sul da Dalmácia, na ponta do istmo homônimo. É um dos destinos turísticos mais concorridos do Mar Adriático, um porto marítimo e a cidade mais importante do condado de Dubrovnik-Neretva.\n[…]\nNo início da Segunda Guerra Mundial, Dubrovnik fazia parte do Estado Independente da Croácia controlado por nazis. Entre abril de 1941 e 8 de setembro de 1943, a cidade esteve ocupada pelo exército italiano e em seguida pelos alemães.\n[…]\nApesar da cidade antiga ter sido desmilitarizada no princípio da década de 1970 a fim de prevenir estragos em caso de guerra, tropas sérvias e montenegrinas do que fora o Exército Popular Jugoslavo (JNA) atacaram a cidade em 1991. O governo de Montenegro, liderado por Momir Bulatovic, leal ao governo sérvio de Slobodan Milošević, declarou que não permitiria que Dubrovnik permanecesse na Croácia porque, segundo ele, historicamente a cidade fazia parte de Montenegro.\n[…]\nMas se a cidade não chegou a ser ocupada, o mesmo não aconteceu com as regiões vizinhas, nomeadamente a zona de de Konavle e a cidade de Cavtat, que estiveram ocupadas durante quase três anos, o que provocou a fuga em massa de muitas pessoas, quer para o estrangeiro quer para Dubrovnik. Em maio de 1992 o exército croata acabou com o cerco e libertou os arredores da cidade, mas o perigo de ataques do JNA manteve-se por mais três anos.\n[…]\nToda a cidade e os seus arredores são servidos por autocarros urbanos que circulam desde a madrugada até à meia-noite. Contrariamente a outros centros importantes da Croácia, Dubrovnik não é servida por comboio.\n[…]\nOttavio Missoni (Dubrovnik, 11 de fevereiro de 1921 — 9 de maio de 2013) — designer de moda italiano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Os Simpsons",
      "descricao": "Série animada americana criada por Matt Groening, sobre uma família da cidade fictícia de Springfield."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Antes de ganhar série própria em 1989, a família Simpson surgiu em curtas exibidos dentro de qual programa de variedades?",
    "resposta": "The Tracey Ullman Show",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Simpsons",
      "https://en.wikipedia.org/wiki/The_Tracey_Ullman_Show"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Simpsons",
        "situacao": "ok",
        "texto": "The Simpsons is an American animated sitcom created by Matt Groening and developed by Groening, James L. Brooks and Sam Simon for the Fox Broadcasting Company. It is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. Set in the fictional town of Springfield, in an unspecified location in the United States, it caricature\n[…]\nThe half-hour series premiered on December 17, 1989, with \"Simpsons Roasting on an Open Fire\". \"Some Enchanted Evening\" was the first full-length episode produced, but it was not broadcast until May 1990, as the last episode of the first season, because of animation problems. In 1992, Tracey Ullman filed a lawsuit against Fox, claiming that her show was the source of the series' success. The suit said she should receive a share of the profits of The Simpsons—a claim rejected by the courts.\n[…]\nThe Simpsons has six main cast members: Dan Castellaneta, Julie Kavner, Nancy Cartwright, Yeardley Smith, Hank Azaria, and Harry Shearer. Castellaneta and Kavner had been a part of The Tracey Ullman Show cast and were given the parts so that new actors would not be needed. The producers decided to hold casting for the roles of Bart and Lisa.\n[…]\nSeveral different American and international studios animate The Simpsons. Throughout the run of the animated shorts on The Tracey Ullman Show, the animation was produced domestically at Klasky Csupo. With the debut of the series, because of an increased workload, Fox subcontracted production to several local and foreign studios.\n[…]\nThe Simpsons was the first successful animated program in American prime-time since Wait Till Your Father Gets Home in the 1970s. During most of the 1980s, American pundits considered animated shows as appropriate only for children, and animating a show was too expensive to achieve a quality suitable for prime-time television."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Tracey_Ullman_Show",
        "situacao": "ok",
        "texto": "The Tracey Ullman Show is an American television sketch comedy variety show starring Tracey Ullman. It debuted on Fox on April 5, 1987, as the network's second original primetime series, following Married... with Children, and ran for four seasons and 81 episodes until May 26, 1990. It was produced by Gracie Films in association with 20th Century Fox Television. The show blends sketch comedy with \n[…]\nTracey Ullman\n[…]\nPlayed by Tracey Ullman\n[…]\nPlayed by Tracey Ullman\n[…]\nWhen The Tracey Ullman Show first appeared on British television, the BBC aired the first seven episodes unedited. The broadcaster then decided to cut six minutes from the show, specifically the Simpsons shorts. \"The BBC said the only thing they didn't like about the show was those weird little animated characters and suggested maybe they could get rid of them because they would never catch on,\" Ullman later recalled.\n[…]\nDespite their aversion to the cartoon shorts, she attempted to convince the broadcaster to buy the rights to The Simpsons television series, saying that it would be a mistake not to. Sky ended up buying the show. When the last batch of episodes were screened in 1991, the episodes were aired in full. The Tracey Ullman Show aired on BBC Two in the UK, Network 10 in Australia, and TVNZ in New Zealand.\n[…]\nAs of April 2025, The Tracey Ullman Show has never been commercially released through any home media platform. In a 2017 interview, Tracey Ullman theorized that music clearance issues may be to blame. A selection of the Simpsons shorts were released from 1997 through 1999 on The Simpsons VHS home video releases. The first Simpsons short called \"Good Night\" was included as a special feature on The Simpsons: The Complete First Season DVD box set released on September 25, 2001.\n[…]\nThe Tracey Ullman Show at IMDb\n[…]\nThe Tracey Ullman Show at epguides.com\n[…]\nThe Tracey Ullman Show at The Interviews: An Oral History of Television"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Simpsons",
        "situacao": "ok",
        "texto": "The Simpsons (bra/prt: Os Simpsons) é uma sitcom animada norte-americana criada por Matt Groening e desenvolvida por James L. Brooks e Sam Simon para a Fox Broadcasting Company. A série é uma paródia satírica do estilo de vida da classe média dos Estados Unidos, personificada pela família Simpson, composta por Homer, Marge, Bart, Lisa e Maggie.\n[…]\nA família foi concebida por Groening pouco antes de uma solicitação para uma série de curtas de animação com o produtor Brooks. Ele elaborou uma família disfuncional e nomeou os personagens como os membros de sua própria família, substituindo o seu próprio nome por Bartholomew (Bart). Os curtas tornaram-se parte do programa The Tracey Ullman Show em 19 de abril de 1987.\n[…]\nO criador de The Simpsons, Matt Groening, concebeu a ideia da série na sala de espera do escritório de James L. Brooks, produtor do The Tracey Ullman Show, que desejava incluir pequenos esboços de animação antes e depois dos intervalos comerciais. Brooks havia pedido a Groening que lhe desse uma ideia para uma série de curtas animados. Groening tinha a intenção de apresentar sua série em quadrinhos chamada Life in Hell.\n[…]\nVários diferentes estúdios de animação dos Estados Unidos e de outros países participaram do processo de animação de The Simpsons. Durante toda a exibição dos curtas animados no The Tracey Ullman Show, a animação foi produzida domesticamente na Klasky Csupo. Com a estreia da série, devido a uma maior carga de trabalho, a Fox subcontratou a produção de vários estúdios internacionais, localizados na Coreia do Sul. São eles: AKOM Anivision, Rough Draft Studios, USAnimation, e Toonzone Entertainment.\n[…]\nDevido à sua popularidade, Bart era muitas vezes apresentado como membro da família Simpson nos anúncios da série, mesmo para os episódios em que não fazia parte do elenco principal.\n[…]\nThe Simpsons no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Fenda do Biquíni",
      "descricao": "Cidade submarina fictícia onde vivem Bob Esponja e seus amigos."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Segundo o desenho, a cidade submarina onde vive Bob Esponja fica sob qual atol real do Oceano Pacífico?",
    "resposta": "Atol de Bikini",
    "distratores": [
      "Atol de Mururoa",
      "Atol de Midway",
      "Atol de Funafuti"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bikini_Bottom"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bikini_Bottom",
        "situacao": "ok",
        "texto": "SpongeBob SquarePants, also known simply as SpongeBob, is an American animated comedy television series created by marine science educator and animator Stephen Hillenburg for Nickelodeon. It first aired as a sneak peek after the Kids' Choice Awards on May 1, 1999, and officially premiered on July 17, 1999. It follows the adventures of SpongeBob SquarePants, an anthropomorphic yellow sea sponge, an\n[…]\nThe series takes place primarily in the fictional underwater city of Bikini Bottom located in the Pacific Ocean beneath the real-life coral reef known as Bikini Atoll. Its citizens are mostly multicolored fish who live in buildings made from ship funnels, and use \"boatmobiles\" for transportation. Recurring locations within Bikini Bottom include the neighboring houses of SpongeBob, Patrick, and Squidward; two competing restaurants, the Krusty Krab and the Chum Bucket; Mrs.\n[…]\nIn 2026, the Universal Kids Resort in Frisco, Texas opened \"Nickelodeon's SpongeBob SquarePants Bikini Bottom\", a themed area with four rides.\n[…]\nOn June 5, 2019, THQ Nordic announced SpongeBob SquarePants: Battle for Bikini Bottom – Rehydrated, a full remake of the console versions of the original 2003 game. The game was released one year later on June 23, 2020 and includes cut content from the original game. On May 28, 2020, Apple Arcade released a game called SpongeBob SquarePants: Patty Pursuit. in 2021, EA Sports introduced a SpongeBob-themed level to the Yard section of its Madden NFL 21 video game.\n[…]\nFans of the show have created various pages replicating Bikini Bottom News, a news show within the SpongeBob universe, with versions of the anchors Realistic Fish Head and Perch Perkins generated with artificial intelligence.\n[…]\nBeck, Jerry (2013). The SpongeBob SquarePants Experience: A Deep Dive Into the World of Bikini Bottom. USA: Insight Editions. ISBN 978-1-4357-3248-3."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/SpongeBob_SquarePants",
        "situacao": "ok",
        "texto": "SpongeBob SquarePants (Bob Esponja Calça Quadrada no Brasil) é uma série de animação americana, criada pelo biólogo marinho e animador Stephen Hillenburg, sendo produzida e exibida pelo canal Nickelodeon. A série narra as aventuras e os empreendimentos do personagem-título e de seus diversos amigos na fictícia cidade subaquática de Bikini Bottom (Fenda do Biquíni).\n[…]\nSquidward é um arrogante e mal-humorado polvo (apesar de parecer-se com uma lula) que vive em um moai da Ilha de Páscoa e não gosta de seus vizinhos (especialmente Bob) devido a falta de maturidade e comportamento infantil de ambos. Ele gosta de tocar clarinete e pinta autorretratos, mas odeia seu emprego trabalhando no Krusty Krab. Sandy Bochechas (Sandy Cheeks, no original), é uma esquila texana e segunda melhor amiga de Bob Esponja.\n[…]\nGrande parte dos eventos da série ocorrem na cidade de Bikini Bottom (Fenda do Biquíni), uma cidade subaquática localizada no Oceano Pacífico abaixo do Atol de Bikini. Esta ilha tropical é mostrada no contexto da maioria dos episódios.\n[…]\nEntretanto, apesar de implicações da localização da cidade, bem como analogias com a vida real, Hillenburg afirmou que ele pretende deixar a cidade isolada do mundo real, explicando a cena de paródia de Baywatch do filme do desenho simplesmente como uma referência para o seu show favorito.\n[…]\nA maioria dos cidadãos da Fenda do Biquíni (grande parte são peixes) vivem em edifícios com temas principalmente aquáticos e usam \"barcos móveis\" — junção de carros e barcos — como modo de transporte, além de ônibus submarinos. Outros estabelecimentos notáveis ​​presentes na cidade incluem o Siri Cascudo e a Escola de Pilotagem da Sra. Puff (Mrs. Puff's Boating School, no original), que se tornaram locais comuns na série desde suas primeiras aparições em 1999.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "TV Tupi",
      "descricao": "Rede de televisão brasileira de Assis Chateaubriand, inaugurada em São Paulo em 1950 e extinta em 1980."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Com a TV Tupi, de Assis Chateaubriand, a televisão chegou ao Brasil, em São Paulo. Em que ano?",
    "resposta": "1950",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rede_Tupi",
      "https://en.wikipedia.org/wiki/Rede_Tupi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rede_Tupi",
        "situacao": "ok",
        "texto": "Rede Tupi foi uma rede de televisão comercial brasileira de propriedade dos Diários Associados. Sua matriz e geradora, a TV Tupi de São Paulo, inaugurada em 18 de setembro de 1950 pelo jornalista Assis Chateaubriand, foi a primeira estação de televisão do Brasil, seguida pela TV Tupi do Rio de Janeiro, em janeiro de 1951.\n[…]\nAssim, em 18 de setembro de 1950 foi inaugurada a TV Tupi de São Paulo, primeira estação de televisão do Brasil, que teria sua outorga oficializada via decreto no Diário Oficial da União em 7 de março de 1951. Ao fim da tarde, uma cerimônia foi apresentada pelas atrizes Yara Lins e Lia de Aguiar e pelo locutor Homero Silva para diretores, inclusive Chateaubriand, autoridades políticas e religiosas e personalidades do meio artístico. À noite, foi ao ar seu programa inaugural, o TV na Taba.\n[…]\nLíderes em audiência durante a década de 1950, tanto a TV Tupi de São Paulo como a do Rio de Janeiro começaram a perder a colocação por volta de 1964.\n[…]\nEm 1950 o primeiro símbolo da TV Tupi de São Paulo, adaptado da Rádio Tupi, apresentava um indígena com expressão sisuda mirando o horizonte enquanto segurava um arco. No ano seguinte o produtor Mário Fanucchi concebeu a figura de um indígena tupiniquim utilizando um par de antenas como cocar, tendo sido o primeiro mascote da televisão brasileira.\n[…]\nAo longo dos anos 1950 e 1960 as integrantes da Rede de Emissoras Associadas, incluindo a TV Tupi do Rio de Janeiro, viriam a adotar indígenas com características regionais como marcas no vídeo e em anúncios nos jornais. Em 1970 começou a circular em periódicos um logotipo que apresentava o nome TV Tupi acompanhado de São Paulo e Rio, representando a integração entre ambas na formação da rede.\n[…]\nAcervo de filmes e documentos da Rede Tupi no Banco de Conteúdos Culturais da Cinemateca Brasileira"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rede_Tupi",
        "situacao": "ok",
        "texto": "Rede Tupi (Portuguese pronunciation: [ˈʁedʒi tuˈpi]; in English, Tupi Network) was a Brazilian commercial terrestrial television network. Its flagship station, located in the city of São Paulo, was the first TV station to operate in the country, being inaugurated on 18 September 1950 by journalist Assis Chateaubriand. It was owned by Diários Associados, one of the largest media conglomerates of th\n[…]\nOn October 29, 1949, the equipment for the Rio station provided by General Electric had finally arrived, whereas for the São Paulo station, from RCA, had arrived in late January 1950. Rádio e Televisão do Brasil, which had vowed for the channel 2 frequency in Rio de Janeiro, revoked its contract with General Electric at a time the proposed station was facing financial uncertainties (the station's preliminary license was revoked by order of Decree nº 30583 on February 22, 1952).\n[…]\nThe first football match was televised on October 15, 1950 at 3:30pm. The match was for São Paulo's state championship in which Palmeiras defeated São Paulo 2-0 at the Pacaembu Stadium. Diário de São Paulo reported the good quality of the match and soon would also air horse racing from the São Paulo Jockey Club. A competing newspaper, however, noted that such broadcast had technical issues.\n[…]\nBy 1962, Rede Brasileira de Televisão Associada, the bespoke network created by Diários Associados, had thirteen television stations. In July 1963, the São Paulo station started a relay in São José do Rio Preto. Videotape experiments were conducted by TV Tupi São Paulo on May 1, 1960, with the recording of TV de Vanguarda, with the play Esta Noite é Nossa. The system was officially inaugurated on September 26 with Grande Teatro Tupi and its special performance of Hamlet.\n[…]\n1950—1952: A Primeira TV do Brasil, A Primeira da América Latina (The First TV Station of Brazil, the First of Latin America)\n[…]\nRede Manchete\n[…]\nRede TV!"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Jornal Nacional",
      "descricao": "Telejornal noturno da Rede Globo, transmitido em rede nacional."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Jornal Nacional, da Rede Globo, foi ao ar pela primeira vez em que ano?",
    "resposta": "1969",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jornal_Nacional"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jornal_Nacional",
        "situacao": "ok",
        "texto": "Jornal Nacional (também conhecido pela sigla JN) é um telejornal brasileiro produzido e exibido desde 1.º de setembro de 1969 pela TV Globo. Transmitido de segunda-feira a sábado no horário nobre, é considerado o principal noticiário televisivo em audiência e repercussão no país. É apresentado por César Tralli e Renata Vasconcellos.\n[…]\nCom a apresentação de Cid Moreira, o telejornal entrou no ar em 1969 e foi o primeiro programa gerado no Rio de Janeiro em rede nacional. No encerramento da edição, Cid Moreira disse: \"É o Brasil ao vivo aí na sua casa. Boa noite\".\n[…]\nEm agosto de 2019 foi publicada uma análise sobre o Jornal Nacional no Jornal Já. O periódico descobriu que a primeira edição do JN, feita sob censura durante a ditadura militar, não se encontra nos arquivos publicados pela Globo.\n[…]\nHilton Gomes e Cid Moreira comandaram a primeira edição do Jornal Nacional, em 1.º de setembro de 1969. No ano seguinte, Hilton foi substituído por Sérgio Chapelin, que formou com Cid Moreira a dupla que mais tempo apresentou o telejornal. Em 1979, Chapelin foi para o Jornal da Globo e o cenário passou a ser menor, com lugar para apenas um apresentador. Cid Moreira estreou o novo cenário em 2 de abril de 1979, data da estreia da segunda versão do Jornal da Globo.\n[…]\nEm comemoração ao aniversário de cinquenta anos do Jornal Nacional, em 1.º de setembro, a TV Globo escalou apresentadores de emissoras locais filiadas à rede em todo o país para apresentar o telejornal aos sábados, de 31 de agosto a 30 de novembro. A cada sábado, o telejornal seria comandado por dois apresentadores de unidades federativas diferentes, sendo um homem e uma mulher. Durante esse período, os apresentadores eventuais ficariam afastados da bancada.\n[…]\nJornal Nacional no Facebook\n[…]\nJornal Nacional no Instagram\n[…]\nJornal Nacional no X\n[…]\nJornal Nacional no Memória Globo"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Stranger Things",
      "descricao": "Série de ficção científica da Netflix, criada pelos irmãos Duffer, ambientada na cidade fictícia de Hawkins, Indiana."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A primeira temporada de Stranger Things, com o sumiço do menino Will, se passa em novembro de que ano?",
    "resposta": "1983",
    "distratores": [
      "1979",
      "1986",
      "1989"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Stranger_Things"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stranger_Things",
        "situacao": "ok",
        "texto": "Stranger Things is an American television series created by the Duffer Brothers for Netflix. Produced by Monkey Massacre Productions and 21 Laps Entertainment, the first season was released on Netflix on July 15, 2016. The second and third seasons followed in October 2017 and July 2019, respectively, and the fourth season was released in two volumes in May and July 2022. The fifth and final season\n[…]\nThe first season begins on November 6, 1983, when Will Byers is abducted by a creature from the Upside Down, dubbed the \"Demogorgon\". His mother Joyce, police chief Jim Hopper, and a group of volunteers search for him. A young psychokinetic girl named Eleven escapes from Hawkins Lab and is found by Will's friends, Mike Wheeler, Dustin Henderson, and Lucas Sinclair. Eleven befriends and assists them in their efforts to find Will.\n[…]\nStranger Things came about as it sounded similar to another King novel, Needful Things, though Matt noted they still had a \"lot of heated arguments\" over this final title.\n[…]\nTo introduce this monster into the narrative, they considered \"bizarre experiments we had read about taking place in the Cold War\" such as MKUltra, which gave a way to ground the monster's existence in science rather than something spiritual. This also helped them to decide on using 1983 as the time period, as it was a year before the film Red Dawn came out, which focused on Cold War paranoia.\n[…]\nStranger Things gained a dedicated fan base soon after its release. One area of focus was the character of Barb, Nancy's friend and classmate who is killed off early into the first season. According to actress Shannon Purser, Barb \"wasn't supposed to be a big deal\", and the Duffer Brothers had not gone into great detail about the character since the focus was on finding Will.\n[…]\nStranger Things on Netflix\n[…]\nStranger Things at IMDb\n[…]\nStranger Things at Metacritic\n[…]\nStranger Things at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stranger_Things",
        "situacao": "ok",
        "texto": "Stranger Things é uma série de televisão via streaming estadunidense  criada pelos irmãos Matt e Ross Duffer para a plataforma Netflix. Foi lançada ao longo de cinco temporadas, entre 15 de julho de 2016 á 31 de dezembro de 2025.\n[…]\nEm novembro de 1983, o estudante Will Byers é abduzido por uma criatura de uma realidade alternativa chamada \"Mundo Invertido\", causando mistério e pavor aos habitantes de Hawkins, Indiana. Sua mãe, Joyce Byers, tenta encontrar seu paradeiro com a ajuda do xerife Jim Hopper, enquanto Mike Wheeler, Dustin Henderson e Lucas Sinclair fazem outra investigação para encontrá-lo, porém são surpreendidos quando uma estranha garota com poderes telecinéticos chamada Onze aparece na cidade.\n[…]\nIsso a tornou a primeira temporada da série como a terceira mais assistida do conteúdo original da Netflix nos Estados Unidos na época, atrás da primeira temporada de Fuller House e da quarta temporada de Orange Is the New Black.​ Em uma análise de setembro de 2016, a Netflix descobriu que Stranger Things \"fisgou\" os espectadores no segundo episódio da primeira temporada, afirmando que o segundo episódio foi \"a primeira parcela que levou pelo menos 70% dos espectadores a assistir a esse episódio para completar a toda a primeira temporada\".\n[…]\nLogo após seu lançamento, Stranger Things ganhou uma base de fãs dedicada. Uma das áreas de interesse desses fãs foi a personagem Barb, a melhor amiga e colega de classe nerd de Nancy, que é capturada e morta pelo monstro no início da temporada. De acordo com a atriz Shannon Purser, Barb \"não deveria ser um grande negócio\", e os Irmãos Duffer não elaboraram a personagem, pois o foco era encontrar Will.\n[…]\nStranger Things no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Castelo Rá-Tim-Bum",
      "descricao": "Programa infantil da TV Cultura, de 1994, passado num castelo onde vive o aprendiz de feiticeiro Nino."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "No Castelo Rá-Tim-Bum, quantos anos tem o aprendiz de feiticeiro Nino?",
    "resposta": "300 anos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Castelo_R%C3%A1-Tim-Bum"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Castelo_R%C3%A1-Tim-Bum",
        "situacao": "ok",
        "texto": "Castelo Rá-Tim-Bum é uma série de televisão infantil brasileira produzida e exibida pela TV Cultura entre 9 de maio de 1994 e 24 de dezembro de 1997, totalizando 90 episódios e um episódio especial. É considerado um dos melhores produtos audiovisuais da história da televisão brasileira. O programa já marcou audiência média de 12 pontos, a maior de qualquer outro programa educativo da TV Cultura, a\n[…]\nNino é um garoto de 300 anos que vive com seu tio, o Dr. Victor, um feiticeiro e cientista, e com sua tia-avó Morgana, uma feiticeira de 6.000 anos de idade. Os três moram em um castelo em algum bairro implícito na cidade de São Paulo. Aprendiz de feiticeiro, Nino nunca frequentou uma escola por causa da idade nada comum de 300 anos. Seus pais o deixaram morando com Victor e Morgana porque precisavam viajar numa expedição no espaço sideral, levando seus dois irmãos mais novos.\n[…]\nApesar de ter amigos animais sobrenaturais no Castelo, Nino, sentindo falta de amigos como ele, resolve fazer um feitiço que aprendeu com seu tio Victor, e acabou trazendo para o Castelo três crianças que tinham acabado de sair da escola.\n[…]\nEm 1997 Flávio de Souza decidiu adaptar o universo da série para o teatro, criando o musical infantil Castelo Rá-Tim-Bum em: Onde Está o Nino?, que estreou em 11 de maio sob direção de Mira Haar.\n[…]\nEm 9 de setembro de 2017 é lançado o musical Castelo Rá-Tim-Bum: O Musical, que não trouxe nenhum membro do elenco original, nem os mesmos autores da série. A história seguia a premissa do começo da série, sobre o solitário Nino que consegue finalmente fazer amigos, trazendo uma nova roupagem aos personagens da original, como Dr. Abobrinha, Morgana, Penélope, Caipora e até mesmo participações especiais marcantes como Zula e Ulisses.\n[…]\nCanal de Castelo Rá-Tim-Bum no YouTube"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Friends",
      "descricao": "Sitcom americana sobre seis amigos que vivem em Nova York, exibida de 1994 a 2004."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas temporadas teve a série Friends, encerrada em 2004?",
    "resposta": "Dez",
    "distratores": [
      "Oito",
      "Nove",
      "Doze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Friends"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Friends",
        "situacao": "ok",
        "texto": "Friends is an American television sitcom created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons. With an ensemble cast starring Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, and David Schwimmer, the show revolves around six friends in their 20s and early 30s who live in Manhattan, New York City. The or\n[…]\nAll ten seasons of Friends ranked within the top ten of the final television season ratings; ultimately reaching the number 1 spot in its eighth season. The series finale aired on May 6, 2004, and was watched by around 52.5 million American viewers, making it the fifth-most-watched series finale in American television history and the most-watched television episode of the 2000s.\n[…]\nShe moves into her high school friend Monica's apartment, and gets a waitress job at Central Perk.\n[…]\nAfter the series finale in 2004, LeBlanc signed on for the spin-off series, Joey, following Joey's move to Los Angeles to pursue his acting career. Kauffman and Crane were not interested in the spin-off, although Bright agreed to executive produce the series with Scott Silveri and Shana Goldberg-Meehan. NBC heavily promoted Joey and gave it Friends' Thursday 8:00 pm timeslot.\n[…]\nHello Friends (TV series)\n[…]\nThe Friends Experience\n[…]\nMusic of Friends\n[…]\nLittlefield, Warren (May 2012). \"With Friends Like These\". Vanity Fair. Archived from the original on April 22, 2019. Retrieved April 22, 2019.\n[…]\nAllen, Samantha (September 12, 2014). \"The Best Reason to Love 'Friends' Is the One We Never Realized at the Time\". Mic.\n[…]\nIhnat, Gwen (August 18, 2014). \"How 'Friends' Changed the Sitcom Landscape\". The A.V. Club.\n[…]\nHarrison, Andrew (September 12, 2014). \"The Hunting of the Snark: Friends, 20 Years On\". New Statesman.\n[…]\nFriends at IMDb\n[…]\nFriends on Rotten Tomatoes\n[…]\nFriends at The Interviews: An Oral History of Television"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Friends",
        "situacao": "ok",
        "texto": "Friends é uma sitcom americana criada por David Crane e Marta Kauffman e apresentada pela rede de televisão NBC entre 22 de setembro de 1994 e 6 de maio de 2004, com um total de 236 episódios. A série girava em torno de um grupo de amigos que vivia no bairro de Greenwich Village, na ilha de Manhattan, na cidade de Nova York. A série foi produzida pela Bright/Kauffman/Crane Productions em associaçã\n[…]\nNa sequência dos atentados de 11 de setembro de 2001, as avaliações da série aumentaram 17% em relação à temporada anterior.\n[…]\nFriends estreou na televisão australiana em 1995, na Seven Network. A Nine Network começou a exibir a terceira temporada em 1997 e continuou a mostrar a série até seu final em 2004. A rede RTE anunciou em novembro de 2007 que tinha comprado os direitos da série na Austrália e suas reprises iriam ao ar até 2008. Atualmente vai ao ar no GEM (um sub-canal da Nine Network) e no canal de TV por assinatura 111 Hits.\n[…]\nTodas as dez temporadas foram lançadas em DVD individualmente e como um box set. Cada região de lançamento da 1.ª temporada contém características especiais e cenas originalmente cortadas da série, embora os lançamentos da Região 2 tenham sido como foram originalmente ao ar. Para a primeira temporada, cada episódio é atualizado com correção de cor e melhoramento do som. Uma grande variedade de produtos de Friends foram produzidos por diversas empresas.\n[…]\nApós o final da série em 2004, LeBlanc assinou um contrato para um spin-off da série chamado Joey, mostrando o personagem Joey Tribbiani depois de se mudar para Los Angeles para prosseguir a sua carreira de ator. Kauffman e Crane não estavam interessados no spin-off, apesar de Bright aceitar ser o produtor executivo da série com Scott Silveri e Shana Goldberg-Meehan. A NBC promoveu Joey fortemente e colocou a série no antigo horário de exibição de Friends.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Os Trapalhões",
      "descricao": "Grupo humorístico brasileiro formado por Didi, Dedé, Mussum e Zacarias, com programa na TV e filmes."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Além de Didi, Dedé e Mussum, que humorista completava o quarteto clássico dos Trapalhões?",
    "resposta": "Zacarias",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Os_Trapalh%C3%B5es"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Trapalh%C3%B5es",
        "situacao": "ok",
        "texto": "Os Trapalhões foi um programa de televisão humorístico brasileiro criado por Wilton Franco e Emanuel Rodrigues e estrelado pelo quarteto cômico de mesmo nome, composto por Didi, Dedé, Mussum e Zacarias, no qual cada um desenvolveu uma persona cênica distinta. O grupo já obtinha sucesso na televisão e no cinema desde meados da década de 1960.\n[…]\nMorreu em 18 de março de 1990. Renato trouxe Zacarias ao grupo, completando assim ao lado de Dedé Santana e Mussum, a formação mais famosa dos Trapalhões em 1974, no humorístico Os Trapalhões na Rede Tupi.\n[…]\nOutra mudança foi a diminuição do número de esquetes independentes em favor de quadros que reuniam Didi, Dedé, Mussum e Zacarias. Atores do elenco da TV Globo que, em geral não costumavam aparecer em humorísticos, foram convidados especiais do programa. Em agosto, Carlos Manga assumiu a direção geral. O número de gravações externas aumentou e os esquetes, agora mais curtos e rápidos, passaram a ser interligados. Dedé Santana passou a ser também codiretor.\n[…]\nEm 1992, o trio restante — Didi, Dedé e Mussum — retornou com uma nova abertura. Os personagens apareceram em situações cômicas:\n[…]\nO primeiro filme foi realizado em 1966 e contava apenas com a dupla Didi e Dedé. Com a formação clássica (que contava ainda com Mussum e Zacarias) foram realizados vinte e três filmes, entre 1978 e 1990. Mais de cento e vinte milhões de pessoas já assistiram a filmes de Os Trapalhões, sendo que sete filmes estão na lista dos dez mais vistos na história do cinema brasileiro. São eles:\n[…]\nDidi também costumava ironizar a masculinidade de Dedé e a fragilidade de Zacarias, falando termos pejorativos como \"rapaz alegre\", \"divino\" e \"audácia da pilombeta\"; Roberto Guilherme e Jorge Lafond também tinham a sexualidade ironizada pelo trapalhão, o que hoje seria classificado como homofobia.\n[…]\nOs Trapalhões no IMDb"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Roque Santeiro",
      "descricao": "Telenovela da Rede Globo escrita por Dias Gomes e Aguinaldo Silva, exibida em 1985."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na novela Roque Santeiro, de 1985, que atriz interpretou a extravagante Viúva Porcina?",
    "resposta": "Regina Duarte",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Roque_Santeiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Roque_Santeiro",
        "situacao": "ok",
        "texto": "Roque Santeiro é uma telenovela brasileira produzida e exibida pela TV Globo de 24 de junho de 1985 a 21 de fevereiro de 1986, em 209 capítulos. Substituiu Corpo a Corpo e foi substituída por Selva de Pedra, sendo a 34.ª \"novela das oito\" exibida pela emissora.\n[…]\nCom uma média geral de 74 pontos, Roque Santeiro se tornou a novela de maior audiência da história da televisão brasileira.\n[…]\nOs que se sentem ameaçados pelo retorno de Roque são o conservador padre Hipólito (Paulo Gracindo), o Prefeito Florindo Abelha (Ary Fontoura), o comerciante Zé das Medalhas (Armando Bógus) – principal explorador da sua imagem – e o todo-poderoso fazendeiro Sinhozinho Malta ou Chico Malta (Lima Duarte), que mantém uma relação com a fogosa e extravagante Porcina da Silva (Regina Duarte), a suposta viúva de Roque Santeiro - \"a que foi sem nunca ter sido\" -, e vê seu relacionamento ameaçado com a presença dele.\n[…]\nPor consideração aos artistas envolvidos no trabalho original, o mesmo elenco foi convidado a participar da nova versão da novela, com seus respectivos personagens. Porém, Francisco Cuoco e Betty Faria recusaram os papéis principais de Roque Santeiro e Viúva Porcina. Já Lima Duarte retornou à produção novamente como o inesquecível Sinhozinho Malta.\n[…]\nSônia Braga, Vera Fischer, Marília Pera e Fernanda Montenegro chegaram a fazer testes para o papel da fogosa Viúva Porcina, que acabou sendo interpretada por Regina Duarte. O entrosamento entre o casal de personagens Porcina e Sinhozinho Malta foi perfeito e rendeu boas críticas. Segundo Lima Duarte, teria emprestado um tom mais engraçado a seu personagem, diferente de quando contracenava com Betty Faria, na versão censurada da novela.\n[…]\nCapa: Regina Duarte\n[…]\nCapa: Lima Duarte, Regina Duarte e José Wilker"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "A Família Addams",
      "descricao": "Família macabra criada pelo cartunista Charles Addams, levada à TV em série de 1964 e depois ao cinema e ao streaming."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Família Addams, como se chama no Brasil a filha sombria e séria, de tranças pretas?",
    "resposta": "Wandinha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/A_Fam%C3%ADlia_Addams",
      "https://en.wikipedia.org/wiki/The_Addams_Family"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/A_Fam%C3%ADlia_Addams",
        "situacao": "ok",
        "texto": "A Família Addams (no original, The Addams Family) é uma família fictícia de senso de humor irônico e mórbido, uma inversão satírica da família americana ideal, originário das tiras de quadrinhos nos anos 1930, criado pelo cartonista norte-americano Charles Addams, passando pela televisão, pelo cinema, e teatro.\n[…]\nDesde então a história foi adaptada para outras mídias, incluindo a série de televisão dos anos 60, animações, videogames, o filme de 1991 e sua continuação de 1993, um direto ao vídeo de 1998, musicais, uma animação 3D em 2019 com uma continuação em 2021, sobre a filha mais velha, Wednesday Addams a série Estadunidense: Wandinha.\n[…]\nA sensual mulher de visual exótico e expressão macabra era mãe de duas crianças: a gótica e fria Wednesday (Venenilda/Wandinha, no Brasil) e o ingênuo Pugsley (Eddie/Feioso, no Brasil), que se divertiam brincando de tentar matar um ao outro.\n[…]\nA família ainda conta com o aloprado Tio Fester (Tio Funéreo/Tio Chico, no Brasil), que tinha um vasto conhecimento sobre tudo que é macabro; a vidente Grandmama (Vovó Addams/Vovó Bruxa, no Brasil), mãe de Gomez Addams, que com um caldeirão cozinha e também cria poções mágicas para resolver o problema de todos; Itt (Primo Itt/Coisa), o primo de Gomez, um sujeito com tanto cabelo que não se vê nenhuma parte de seu corpo.\n[…]\nBarry Sonnenfeld dirigiu em 1991 o filme The Addams Family, um sucesso de bilheteria que inspirou a continuação de 1993 Addams Family Values.\n[…]\nEm 2019 foi lançado o longa animado em computação gráfica The Addams Family, que levou à continuação The Addams Family 2 em 2021.\n[…]\nThe Addams Foundation\n[…]\n«The Addams Family (1937)». no Don Markstein's Toonopedia. (arquivo do original)\n[…]\nThe Addams Family musical(página oficial)\n[…]\nThe Addams Family no Tribe.net"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Addams_Family",
        "situacao": "ok",
        "texto": "The Addams Family is a fictional family and franchise created by American cartoonist Charles Addams. The Addams are an eccentric old-money clan who delight in the macabre and the grotesque and are seemingly unaware or unconcerned that other people find them bizarre or frightening. The family’s view in seeing their family life and interests as normal was a basis for the satire and comedy.\n[…]\nThe remake series ran on Saturday mornings from 1992 to 1993 on ABC after producers realized the success of the 1991 Addams Family movie. This series returned to the familiar format of the original series, with the Addams Family facing their sitcom situations at home. John Astin returned to the role of Gomez, and celebrities Rip Taylor and Carol Channing took over the roles of Fester and Grandmama, respectively.\n[…]\nThe family has had a profound influence on American comics, cinema and television, and it has also been seen as an inspiration for the goth subculture and its fashion. According to The Telegraph, the Addamses \"are one of the most iconic families in American history, up there with the Kennedys\".\n[…]\nSimilarly, Time has compared \"the relevance and the cultural reach\" of the family with those of the Kennedys and the Roosevelts, \"so much a part of the American landscape that it's difficult to discuss the country's history without mentioning them\". For TV Guide, which listed the characters in the top ten of the \"60 greatest TV families of all time\", the Addamses \"provid[ed] the design for cartoonish clans to come, like the Flintstones and the Simpsons\".\n[…]\nTee & Charles Addams Foundation\n[…]\nThe Addams Family (1937) at Don Markstein's Toonopedia. Archived[link removed] from the original on March 13, 2012.\n[…]\nThe Addams Family UK (musical website)\n[…]\nThe Addams Family on TVLand.com\n[…]\nThe New Addams Family at IMDb\n[…]\n​The Addams Family Musical​ at the Internet Broadway Database"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Caverna do Dragão",
      "descricao": "Desenho animado americano de 1983, baseado em Dungeons & Dragons, sobre jovens presos num mundo de fantasia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Caverna do Dragão, como se chama o vilão de um chifre só que persegue os jovens heróis?",
    "resposta": "Vingador",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dungeons_%26_Dragons_(TV_series)",
      "https://pt.wikipedia.org/wiki/Caverna_do_Drag%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dungeons_%26_Dragons_(TV_series)",
        "situacao": "ok",
        "texto": "Dungeons & Dragons is an American fantasy animated television series based on TSR's Dungeons & Dragons role-playing game. It is a co-production of Marvel Productions and TSR, with animation services provided by Japanese studio Toei Animation. It ran on CBS from 1983 through 1985 for three seasons, for a total of twenty-seven episodes.\n[…]\nSidney Miller – Dungeon Master\n[…]\nAn Advanced Dungeons & Dragons toy line was produced by LJN in 1983, including original characters such as Warduke, Strongheart the Paladin, and the evil Wizard Kelek, who would later appear in campaigns for the Basic Set of the roleplaying game. None of the main characters from the TV series are in the toy line, but Warduke, Strongheart, and Kelek each appear in one episode of the series. Only in Spain and Portugal were PVC figures of the main characters produced.\n[…]\nThe Brazilian company Iron Studios released in 2019 an entire set of polystone collectible statues for most of the Dungeons & Dragons cartoon characters, using a 1/10 scale and forming a full diorama. The same year, PCS Collectibles released two versions of Venger in 1:4 scale, both fully sculpted and hand painted polystone statues. In 2022, Hasbro launched the Cartoon Classics action figurine series based on Dungeons & Dragons.\n[…]\nThe 2023 film Dungeons & Dragons: Honor Among Thieves featured adult versions of Hank, Bobby, Sheila, Diana, Eric and Presto in live-action cameos with Edgar Abram as Hank, Luke Bennett as Bobby, Emer McDaid as Sheila, Moe Sasegbon as Diana, Trevor Kaneswaran as Eric, and Seamus O'Hara as Presto. They are seen competing in a special tournament in Neverwinter and have made it to a cage in the middle of a shifting labyrinth.\n[…]\nD&D Animated Series on the Official Dungeons & Dragons YouTube channel\n[…]\nDungeons & Dragons at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caverna_do_Drag%C3%A3o",
        "situacao": "ok",
        "texto": "Dungeons & Dragons (Brasil: Caverna do Dragão ) é uma série de animação baseada no jogo de RPG homônimo da TSR, coproduzida pela Marvel Productions, TSR e Toei Animation. A série possui 27 episódios divididos em três temporadas, transmitidas originalmente entre os anos de 1983 e 1985 pela rede de televisão estadunidense CBS. A animação da série ficou a cargo da empresa japonesa Toei Animation. A s\n[…]\nO mundo de Caverna do Dragão é simplesmente chamado de \"O Reino\" (Realm of Dungeons & Dragons, no original). Há diversas cidades pequenas (vilarejos ou burgos) espalhadas pelo Reino, chefiadas por pessoas denominadas \"prefeitos\" (ou burgo-mestres). Há cidadelas maiores, cercadas por grandes muros e governadas como um principado ou um reino. A maioria das aglomerações urbanas tem ciência do Vingador e muitas demonstram temor e obediência a ele.\n[…]\nO nível de violência da série causou polêmica entre a audiência dos Estados Unidos à época da estreia, e o roteiro de um episódio, O Cemitério dos Dragões, quase foi arquivado devido às conjecturas dos protagonistas em matar sua nêmese, o Vingador. Em 1985, a Coalizão Nacional sobre Violência Televisiva (National Coalition on Television Violence) exigiu que a FTC colocasse um aviso a cada transmissão afirmando que Caverna do Dragão relacionava-se a mortes violentas.\n[…]\nApenas na Espanha e em Portugal foram feitos bonecos em PVC dos protagonistas. A empresa brasileira Iron Studios lançou em 2019 um conjunto completo de estátuas colecionáveis polystone para a maioria dos personagens da série animada, usando uma escala 1/10 e formando um diorama completo. No mesmo ano, a PCS Collectibles lançou duas versões do Vingador em escala 1:4, ambas totalmente esculpidas e estátuas de polystone pintadas à mão.\n[…]\nSérgio Peixoto (2011). «Dungeons and Dragons ou Caverna do Dragão». Revista Clube dos Heróis (10). São Paulo, Brasil: Editora Minuano. pp. 3–26"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Pantanal (telenovela de 1990)",
      "descricao": "Telenovela de Benedito Ruy Barbosa exibida em 1990, ambientada no Pantanal mato-grossense."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em 1990, a primeira versão da novela Pantanal foi exibida por qual emissora?",
    "resposta": "Rede Manchete",
    "distratores": [
      "TV Globo",
      "SBT",
      "Rede Bandeirantes"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pantanal_(telenovela_de_1990)",
      "https://pt.wikipedia.org/wiki/Benedito_Ruy_Barbosa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pantanal_(telenovela_de_1990)",
        "situacao": "ok",
        "texto": "Pantanal é uma telenovela brasileira exibida pela Rede Manchete de 27 de março a 11 de dezembro de 1990 em 216 capítulos. Sucedeu Kananga do Japão e antecedeu A História de Ana Raio e Zé Trovão. Escrita por Benedito Ruy Barbosa, tem direção de Carlos Magalhães, Roberto Naar e Marcelo de Barreto e direção geral de Jayme Monjardim.\n[…]\nAntes de Pantanal, a Rede Manchete havia falhado em realizar novelas de massiva audiência, sendo Dona Beija e Kananga do Japão duas novelas que conquistaram relativo sucesso e chegaram a incomodar a TV Globo, acompanhadas pela série Joana.\n[…]\nEm 1990, a Rede Manchete contrata seu escritor, Benedito Ruy Barbosa, que finalmente realiza seu sonho, obtendo estrondoso sucesso e superando a até então imbatível TV Globo. Benedito foi convidado por Jayme Monjardim, novo Diretor de Dramaturgia da emissora, para reforçar o departamento, e só aceitou o convite após Amor Pantaneiro entrar nas conversas.\n[…]\nSeu último capítulo registrou 31 pontos na Grande São Paulo, um pouco mais que a Globo, que registrou 21 no horário. Teve média geral de 22 pontos, a maior da história da dramaturgia da Rede Manchete, entrando para a história da televisão brasileira como a única telenovela a bater a TV Globo quase que do começo ao fim, bem como a primeira desde a TV Tupi a ultrapassar frequentemente a marca de 40 pontos de audiência fora da Globo.\n[…]\nFoi reprisada na íntegra, de 26 de outubro de 1998 a 14 de julho de 1999. Essa segunda reexibição tem uma particularidade interessante: entrou no ar em substituição à novela Brida, que acabou com os recursos da emissora. A Rede Manchete acabou sendo vendida pouco depois da reestreia de Pantanal. Sendo assim, essa reprise foi concluída pela TV!.\n[…]\nCD lançado durante a reexibição pelo SBT, um misto entre os CDs lançados pela Manchete.\n[…]\nTroféu Imprensa (1990):\n[…]\nMelhor Novela"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Benedito_Ruy_Barbosa",
        "situacao": "ok",
        "texto": "Benedito Ruy Barbosa (Gália, 17 de abril de 1931 – São Paulo, 7 de julho de 2026) foi um autor, escritor, dramaturgo, jornalista e publicitário brasileiro. Chegou à dramaturgia com a peça Fogo Frio, encenada pelo Teatro de Arena de São Paulo.\n[…]\nOutro grande sucesso foi exibido em 1990 na Rede Manchete, Pantanal, cuja sinopse foi recusada pela TV Globo, feito este que ocorreu também com Os Imigrantes, que acabou indo ao ar na Rede Bandeirantes.\n[…]\nEm 2014, ao término de Meu Pedacinho de Chão, Benedito entrega à direção da Rede Globo, quatro projetos inéditos, na qual consta, uma minissérie sobre Castro Alves; outra sobre o cangaço, intitulada O Cerco, na qual o autor pretendia contar com a parceria do diretor Luiz Fernando Carvalho, tentou emplacar a novela E Se Ele Voltar?, onde um grupo de pessoas viviam a expectativa – ou a realidade – da volta de Jesus Cristo à Terra, que retornaria à Terra e conviveria com as pessoas como um homem comum, com todos os defeitos próprios de um cidadão moderno, e a telenovela ambientada no Rio São Francisco intitulada Velho Chico, com Eriberto Leão cotado para o papel de protagonista.\n[…]\n2011 - Primeiro Tempo (Editora: Magma Cultural; ISBN 9788598230245)\n[…]\nComo resposta, a Rede Globo cogitou inicialmente um comunicado à imprensa onde dizia que \"as declarações de Ruy Barbosa não refletiam a política da empresa\", mas optou-se por não se pronunciar em relação ao que foi dito. Posteriormente, o canal acordou com o autor e sua família para não conceder entrevistas, a fim de evitar temas polêmicos que possam atrapalhar a divulgação da trama.\n[…]\nTelenovela brasileira"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "O Bem-Amado",
      "descricao": "Telenovela da Rede Globo de 1973, escrita por Dias Gomes, sobre o prefeito Odorico Paraguaçu."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em 1973, a novela O Bem-Amado entrou para a história da TV brasileira como a primeira exibida de que forma?",
    "resposta": "Em cores",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Bem-Amado_(telenovela)",
      "https://en.wikipedia.org/wiki/O_Bem-Amado"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Bem-Amado_(telenovela)",
        "situacao": "ok",
        "texto": "O Bem-Amado é uma telenovela brasileira produzida e exibida pela TV Globo de 22 de janeiro a 3 de outubro de 1973, em 178 capítulos. Substituiu O Bofe e foi substituída por Os Ossos do Barão, sendo a 17.ª \"novela das dez\" produzida pela emissora.\n[…]\nSua história central é baseada na peça teatral Odorico, o Bem-Amado, escrita na década de 1960 por Dias Gomes, também autor da trama, que desenvolveu a novela como uma crítica velada à política do país, que na época passava pelo regime da Ditadura Militar. Com direção de Régis Cardoso, foi a primeira produção dramatúrgica em cores da TV brasileira e a primeira novela do país a ser exportada para outros países; entre eles México, Chile e Estados Unidos.\n[…]\nPrimeiras feitas em cores para uma telenovela no Brasil, com parte dos custos arcados pela Associação Brasileira da Indústria Elétrica e Eletrônica através de subvenção, as gravações de O Bem-Amado começaram em novembro de 1972, quando uma equipe composta de diretores, técnicos e atores protagonistas viajou a Salvador para realizar as primeiras cenas, externas, em que o personagem Odorico Paraguaçu visitava a cidade vindo da fictícia Sucupira, também na Bahia — esta foi reproduzida no bairro Sepetiba e em áreas próximas, no Rio de Janeiro, onde toda a trama foi rodada.\n[…]\nOs capítulos de O Bem-Amado estrearam primeiro na TV Globo Rio de Janeiro, sendo exibidos de 22 de janeiro a 3 de outubro de 1973, enquanto na emissora de São Paulo foram ao ar de 24 de janeiro a 9 de outubro. Com 177 capítulos no roteiro, a novela teve um a mais no tempo de arte devido ao desmembramento do de número 175 em dois.\n[…]\nEm 2016 um júri convocado pela revista Veja elegeu O Bem-Amado a quinta de dezessete melhores novelas da televisão brasileira."
      },
      {
        "url": "https://en.wikipedia.org/wiki/O_Bem-Amado",
        "situacao": "ok",
        "texto": "O Bem-Amado (English: The Beloved) is a Brazilian telenovela that first aired on Rede Globo in 1973. It is based on a play by Dias Gomes called Odorico, o Bem-Amado ou Os Mistérios do Amor e da Morte, written in 1962. It was the first Brazilian color telenovela. It was shot in Rio de Janeiro.\n[…]\nSo Gomes wrote the play Odorico, o Bem-Amado with the idea of staging it at the Brazilian Comedy Theater in São Paulo, whose director Flávio Rangel turned it down because he chose to perform another work.\n[…]\nThe first to be shot in color for a telenovela in Brazil, with part of the costs covered by the Brazilian Electrical and Electronic Industry Association through a subsidy, the recording of O Bem-Amado began in November 1972, when a team made up of directors, technicians and lead actors traveled to Salvador to shoot the first external scenes, in which the character Odorico Paraguaçu visited the city from the fictional Sucupira, also in Bahia - this was reproduced in the Sepetiba neighborhood and nearby areas in Rio de Janeiro, where the entire plot was shot.\n[…]\nThe novela's original intrigue theme, “Paiol de Pólvora”, was prevented from being used before the premiere due to verses seen as a form of protest against the actions of the military dictatorship. According to Toquinho, who composed and performed the song with Vinicius de Moraes, it was a reference to the Paiol Theater in Curitiba. To replace it, he wrote “O Bem-Amado”, sung by the group MPB4, credited on the plot's national soundtrack album as Coral Som Livre.\n[…]\n\"O Bem Amado\" - Coral Som Livre\n[…]\nO Bem-Amado at IMDb"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.34 — 2026-10-01**
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
- **Uso apenas ilustrativo:** a dificuldade só é **exibida**, na ficha da pergunta no app. Ela **não é usada** para nenhuma decisão do projeto: nem no sorteio, nem em proporções do banco, encomendas, regras de variedade, crítica, pontuação ou tabuleiro. Também não é enviada ao gerador nem ao crítico.
- **Limites:** é uma estimativa da **fama da âncora**, e não da pergunta. Não enxerga o ângulo, então um fato obscuro sobre algo famoso continua difícil. Também confunde interesse com conhecimento: um conceito conhecido de todos, mas pouco pesquisado, como os cartões amarelo e vermelho, sai difícil.

**Limites por âncora** (o pipeline descarta o que passar deles):
- no máximo **2 perguntas por âncora** em cada lote, nunca com o mesmo ângulo;
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro.

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

### Distratores

- São as **alternativas erradas**. Ficam **separadas** da resposta, e **o app embaralha** as quatro opções na hora de exibir.
- Devem ser **críveis**: da mesma categoria, época e escala da resposta. Em obras de ficção, pelo menos um vem da mesma franquia.
- Cada alternativa tem **no máximo 4 palavras**, porque ninguém guarda quatro frases longas de memória.
- Só existem em perguntas do tipo `multipla`.

### Perguntas com figura

Uma pergunta de qualquer tipo pode ter uma **figura** (campo `imagem`). O questionador lê o enunciado em voz alta e **mostra a figura** ao respondente. O texto e a resposta continuam fora da vista dele.

> **Por enquanto, o gerador automático não cria perguntas com figura.** Elas só são escritas por quem tem a imagem em mãos e a examinou. Uma pergunta sem o campo `imagem` nunca se refere a uma foto ou figura.

- **A figura é a pergunta.** A resposta sai de **reconhecer o que a imagem mostra**: "Que cidade é esta?", "Que animal é este?", "Qual é este pokémon?", "Quem pintou este quadro?", "Em que museu fica este quadro?". Teste: se trocar "este animal" pelo nome dele deixasse a pergunta igualmente boa, a figura é só enfeite, e a pergunta está errada.
- **O enunciado é curto** e diz o que se deve reconhecer (cidade, animal, monumento). Pode trazer uma pista que ajude, desde que não entregue a resposta.
- **Âncora e ângulo:** a âncora é o que aparece na figura. Perguntar o que ela é dá o ângulo `identidade`; perguntar algo que só se sabe depois de reconhecê-la usa o ângulo correspondente (`autoria` para o pintor, `lugar` para o museu). As regras de variedade (§9), que limitam `identidade`, valem para os lotes do gerador e não para as perguntas com figura.
- **Tipos de figura:** lugares (cidades, monumentos, paisagens), animais, plantas, objetos e artesanato, festas populares, contornos de mapa, personagens de lendas e obras de arte em domínio público (pinturas, gravuras). Obras com direitos autorais, como as de Tarsila do Amaral, Portinari ou Dalí, ficam de fora.
- **Um único assunto por imagem:** nada de montagens nem pranchas com várias espécies. Vale foto; ilustração ou escultura só para o que não pode ser fotografado, como os personagens de lendas (Saci, Mula sem cabeça).
- **Pessoas:** figuras públicas, ou brincantes e participantes de festas públicas (Parintins, bumba meu boi, cavalhadas). Fotos de pessoas comuns em outros contextos continuam proibidas.
- **Recorte permitido:** uma placa ou legenda que entregue a resposta pode ser cortada da imagem, já que as licenças livres permitem obras derivadas.
- **Só imagens do Wikimedia Commons**, com licença livre (CC BY, CC BY-SA ou domínio público). Autor e licença são sempre registrados.
- **Exceção, Pokémon:** a arte oficial, com o crédito "© Nintendo / Creatures / GAME FREAK", e a Bulbapedia como fonte da âncora e da pergunta. A imagem vem do Bulbagarden Archives ou, como a Bulbapedia bloqueia acesso automatizado, da mesma arte oficial no repositório público do PokéAPI (`raw.githubusercontent.com/PokeAPI/sprites`), que fica registrado em `origem`. É uso privado, num jogo entre amigos, e não licença livre.
- **Proibido:** capas de álbuns, pôsteres, logotipos e fotos de imprensa.

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
- num lote de figuras de um tema, **pelo menos três famílias** e **pelo menos três catálogos**;
- nenhum catálogo passa de **40%** das perguntas com figura do seu tema;
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
